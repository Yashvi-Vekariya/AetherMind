# API

## Health

`GET /api/health`

Returns module availability and platform status.

## Demo Token

`POST /api/auth/demo-token`

Returns a local development JWT with admin role.

## Agent Run

`POST /api/agents/run`

```json
{
  "objective": "Investigate anomalies in customer support logs and build a remediation plan",
  "user_id": "demo"
}
```

The endpoint performs prompt-injection scoring, runs the multi-agent orchestrator, stores memory, executes hybrid retrieval, and returns reasoning steps plus risk.

## Telemetry WebSocket

`WS /api/ws/telemetry`

Streams live agent, RAG, memory, security, and optimizer telemetry.

