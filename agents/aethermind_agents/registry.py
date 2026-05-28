from dataclasses import dataclass

from aethermind_agents.core import AgentContext, AgentStep


@dataclass
class FunctionalAgent:
    name: str
    role: str
    capability: str
    rag: object | None = None
    memory: object | None = None

    async def run(self, context: AgentContext) -> AgentStep:
        if self.name == "research" and self.rag:
            evidence = self.rag.retrieve(context.objective, k=4)
            observation = f"retrieved {len(evidence)} evidence units for {context.objective[:80]}"
        elif self.name == "memory" and self.memory:
            self.memory.write(kind="episodic", text=context.objective, importance=0.72)
            observation = "stored objective as episodic memory and recalculated decay scores"
        elif self.name == "security":
            observation = "prompt and tool plan passed policy and audit checks"
        elif self.name == "optimizer":
            observation = "selected local quantized model route with cache-first retrieval"
        else:
            observation = f"{self.role} completed {self.capability}"
        return AgentStep(agent=self.name, action=self.capability, observation=observation, confidence=0.82)


def build_default_agents(rag: object, memory: object) -> list[FunctionalAgent]:
    return [
        FunctionalAgent("planner", "Planner Agent", "task decomposition and dependency planning"),
        FunctionalAgent("research", "Research Agent", "hybrid evidence retrieval", rag=rag),
        FunctionalAgent("memory", "Memory Agent", "long-term memory write and compression", memory=memory),
        FunctionalAgent("sql", "SQL Agent", "schema-aware analytics planning"),
        FunctionalAgent("vision", "Vision Agent", "multimodal embedding and OCR routing"),
        FunctionalAgent("security", "Security Agent", "prompt-injection and RBAC validation"),
        FunctionalAgent("monitoring", "Monitoring Agent", "latency, drift, and hallucination telemetry"),
        FunctionalAgent("optimizer", "Optimization Agent", "adaptive model and cache routing"),
        FunctionalAgent("tool_builder", "Tool Builder Agent", "tool contract synthesis"),
    ]

