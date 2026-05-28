# Deployment

## Local Docker

```powershell
docker compose up --build
```

This starts frontend, backend, PostgreSQL, Redis, Qdrant, Neo4j, MinIO, Prometheus, and Grafana.

## Free Cloud Path

- Frontend: Vercel free tier
- Backend: Render, Railway, or Fly.io free tier
- Database: Neon free Postgres or self-hosted Postgres on Oracle Cloud free tier
- Vector DB: Qdrant Cloud free tier or self-hosted Qdrant
- Graph DB: Neo4j Community on a free VM
- Monitoring: self-hosted Prometheus/Grafana

## Kubernetes

```powershell
kubectl create namespace aethermind
kubectl apply -n aethermind -f k8s/
```

Use k3s or Minikube locally. For GPU inference, add a GPU node pool and deploy vLLM/Triton with node selectors.

