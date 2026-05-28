from dataclasses import asdict

from aethermind_agents.core import AgentContext, AgentOrchestrator
from aethermind_agents.registry import build_default_agents
from aethermind_rag.hybrid import HybridRagEngine
from aethermind_rag.memory import CognitiveMemoryStore


class AetherMindRuntime:
    def __init__(self) -> None:
        self.memory = CognitiveMemoryStore()
        self.rag = HybridRagEngine(self.memory)
        self.orchestrator = AgentOrchestrator(build_default_agents(self.rag, self.memory))

    async def execute(self, objective: str, user_id: str = "demo") -> dict:
        context = AgentContext(user_id=user_id, objective=objective)
        result = await self.orchestrator.run(context)
        return {
            "objective": objective,
            "decision": result.final_answer,
            "steps": [asdict(step) for step in result.steps],
            "memory": [asdict(memory) for memory in self.memory.top_k(objective, 5)],
            "risk": result.risk_score,
        }


runtime = AetherMindRuntime()

