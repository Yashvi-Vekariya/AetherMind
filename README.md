# AetherMind

Autonomous Cognitive Enterprise Intelligence Infrastructure.

AetherMind is a free, open-source, self-hostable AI infrastructure monorepo built to demonstrate production AI engineering: multi-agent orchestration, hybrid RAG, cognitive memory, custom transformer internals, streaming AI, observability, MLOps, and Kubernetes-ready deployment.

## What Is Included

- Futuristic Next.js AI Cognitive Operating Interface
- FastAPI backend with REST and WebSocket telemetry
- Multi-agent orchestration with planning, reflection, debate, retries, and tool routing
- Hybrid RAG with vector, graph, lexical, and multimodal retrieval abstractions
- Cognitive memory with semantic, episodic, temporal, graph, decay, and compression scoring
- PyTorch mini-transformer with tokenizer, self-attention, causal masking, KV cache, training, and inference
- Streaming event pipeline with anomaly scoring and AI event orchestration
- Security layer for JWT, RBAC, prompt-injection scoring, and audit events
- Docker Compose for local self-hosting
- Kubernetes manifests and Helm values
- Prometheus/Grafana/OpenTelemetry-ready monitoring configuration
- GitHub Actions CI for frontend/backend tests

## Free Stack

Frontend: Next.js 15, TypeScript, TailwindCSS, Zustand, React Query, Recharts, Framer Motion, React Flow, Three.js.

Backend: FastAPI, Python 3.12, AsyncIO, WebSockets, PostgreSQL, Redis, Qdrant, Neo4j Community, MinIO.

Demo :- https://sentient-core-os.lovable.app/

Documentation :- https://aethermind-v7wmvwa.gamma.site/

AI: Ollama/vLLM/llama.cpp-ready local model routing for Mistral, Llama, Phi, Gemma, DeepSeek, and TinyLlama. PyTorch, Transformers, Accelerate, PEFT, TRL, datasets, FAISS/Chroma/Qdrant integration points.

Infra: Docker, Kubernetes/k3s/Minikube, Helm, Terraform starter, Prometheus, Grafana, Loki, OpenTelemetry, Evidently AI.


For lightweight backend-only development:

```powershell
cd backend
pip install -r requirements.txt
uvicorn app.main:app --reload --port 8000
```

For frontend-only development:

```powershell
cd frontend
npm install
npm run dev
```

## Repository Map

```text
frontend/      AI Cognitive Operating Interface
backend/       FastAPI platform API, auth, telemetry, security
agents/        Planner, researcher, memory, SQL, vision, security, monitoring agents
rag/           Hybrid RAG, Graph RAG, multimodal indexing
ml/            Custom transformer, LoRA/QLoRA training skeletons, XAI
streaming/     Event orchestration, Redis Streams/Redpanda adapters
infra/         Docker Compose, Terraform, Helm starter
monitoring/    Prometheus, Grafana, OpenTelemetry configs
k8s/           Kubernetes manifests
docs/          Architecture, deployment, API, system design
tests/         Cross-system tests
```

## Local Model Strategy

AetherMind avoids paid APIs by default. It routes requests to local or self-hosted model providers:

- Ollama for student/local CPU-GPU experiments
- llama.cpp for quantized CPU fallback
- vLLM for high-throughput GPU inference
- Triton/BentoML for production model serving

The backend exposes adaptive routing hooks so models can be selected by latency budget, context length, task type, cost, and GPU availability.

## Production Notes

This repository is designed as a strong engineering foundation, not a fake monolith. Heavy services such as Neo4j, Qdrant, Redpanda, MLflow, and Grafana are compose/k8s managed so the core application remains testable on a student machine.

See [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md), [docs/SYSTEM_DESIGN.md](docs/SYSTEM_DESIGN.md), and [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md).

