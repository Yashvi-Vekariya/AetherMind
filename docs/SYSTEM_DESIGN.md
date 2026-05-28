# System Design

## 1M User Readiness

AetherMind separates user-facing control traffic from model inference. API replicas stay lightweight, while inference workers scale independently on GPU nodes. Retrieval is split between vector search, graph traversal, and lexical fallback so the system degrades gracefully when one backend is unavailable.

## Throughput Model

Assume:

- 1M registered users
- 50k daily active users
- 2k concurrent users at peak
- 5 agent steps per request
- 4 retrieval calls per request

Key strategy:

- Batch embedding requests by 16-64 items.
- Use small local models for classification, routing, and summarization.
- Reserve larger 7B models for synthesis and reasoning.
- Cache by normalized query, document fingerprint, and memory cluster.

## Fault Tolerance

- Agent steps are idempotent and retryable.
- Tool calls include timeout budgets and confidence scoring.
- Memory writes use append-first semantics before compression.
- Streaming events can replay from Redis Streams or Redpanda offsets.
- Kubernetes liveness probes restart unhealthy API and worker pods.

## Security

- JWT-based auth with RBAC permissions.
- Prompt-injection risk scoring before agent execution.
- Audit events for tool use, model routes, and blocked requests.
- Secret management through environment variables or Kubernetes secrets.
- Network policies should isolate model, database, and observability namespaces in production.

