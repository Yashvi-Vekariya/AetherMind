from fastapi import APIRouter, WebSocket, WebSocketDisconnect
from pydantic import BaseModel, Field

from app.core.security import Role, create_access_token, prompt_injection_score
from app.services.orchestrator import runtime
from app.services.telemetry import event_to_json, telemetry_stream

router = APIRouter()


class AgentRunRequest(BaseModel):
    objective: str = Field(min_length=8, max_length=4000)
    user_id: str = "demo"


@router.get("/health")
async def health() -> dict:
    return {
        "status": "online",
        "system": "AetherMind",
        "modules": ["agents", "rag", "memory", "streaming", "ml", "observability"],
    }


@router.post("/auth/demo-token")
async def demo_token() -> dict:
    return {"access_token": create_access_token("demo", [Role.ADMIN])}


@router.post("/agents/run")
async def run_agents(payload: AgentRunRequest) -> dict:
    risk = prompt_injection_score(payload.objective)
    if risk >= 0.75:
        return {"blocked": True, "risk": risk, "reason": "prompt-injection policy threshold exceeded"}
    result = await runtime.execute(payload.objective, payload.user_id)
    result["security"] = {"prompt_injection_score": risk, "policy": "passed"}
    return result


@router.get("/observability/snapshot")
async def observability_snapshot() -> dict:
    return {
        "tokens_per_second": 4210,
        "p95_latency_ms": 188,
        "hallucination_risk": 0.07,
        "drift_score": 0.04,
        "gpu_utilization": 0.63,
        "inference_failures": 2,
    }


@router.websocket("/ws/telemetry")
async def websocket_telemetry(websocket: WebSocket) -> None:
    await websocket.accept()
    try:
        async for event in telemetry_stream():
            await websocket.send_json(event_to_json(event))
    except WebSocketDisconnect:
        return

