import asyncio
import random
from collections.abc import AsyncIterator
from dataclasses import asdict, dataclass
from datetime import datetime, timezone


@dataclass
class TelemetryEvent:
    timestamp: str
    source: str
    event: str
    latency_ms: int
    risk: float


async def telemetry_stream() -> AsyncIterator[TelemetryEvent]:
    sources = ["planner", "rag", "memory", "optimizer", "security", "vision", "streaming"]
    events = ["reasoning", "retrieving", "compressing", "routing", "guarding", "embedding", "detecting"]
    while True:
        yield TelemetryEvent(
            timestamp=datetime.now(timezone.utc).isoformat(),
            source=random.choice(sources),
            event=random.choice(events),
            latency_ms=random.randint(28, 240),
            risk=round(random.random() * 0.18, 3),
        )
        await asyncio.sleep(1)


def event_to_json(event: TelemetryEvent) -> dict:
    return asdict(event)

