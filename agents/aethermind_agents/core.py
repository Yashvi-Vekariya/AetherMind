import asyncio
from dataclasses import dataclass, field
from typing import Protocol


@dataclass
class AgentContext:
    user_id: str
    objective: str
    scratchpad: dict[str, object] = field(default_factory=dict)


@dataclass
class AgentStep:
    agent: str
    action: str
    observation: str
    confidence: float


@dataclass
class AgentResult:
    final_answer: str
    steps: list[AgentStep]
    risk_score: float


class Agent(Protocol):
    name: str

    async def run(self, context: AgentContext) -> AgentStep:
        ...


class AgentOrchestrator:
    def __init__(self, agents: list[Agent], max_retries: int = 2) -> None:
        self.agents = agents
        self.max_retries = max_retries

    async def run(self, context: AgentContext) -> AgentResult:
        steps: list[AgentStep] = []
        for agent in self.agents:
            for attempt in range(self.max_retries + 1):
                step = await agent.run(context)
                steps.append(step)
                if step.confidence >= 0.6:
                    context.scratchpad[agent.name] = step.observation
                    break
                if attempt < self.max_retries:
                    await asyncio.sleep(0.02 * (attempt + 1))
        reviewer_notes = [step.observation for step in steps if step.agent in {"security", "monitoring"}]
        final = "AetherMind executed a guarded multi-agent plan with hybrid retrieval, memory scoring, and observability feedback."
        if reviewer_notes:
            final += " Reviewer signals: " + " | ".join(reviewer_notes[:2])
        risk = max((1 - step.confidence for step in steps), default=0.0)
        return AgentResult(final_answer=final, steps=steps, risk_score=round(risk, 3))

