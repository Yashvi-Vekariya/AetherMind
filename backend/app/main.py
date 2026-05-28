from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from prometheus_client import make_asgi_app

from app.api.routes import router
from app.core.config import settings

app = FastAPI(
    title="AetherMind API",
    version="0.1.0",
    description="Autonomous Cognitive Enterprise Intelligence Infrastructure API",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.allowed_origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(router, prefix="/api")
app.mount("/metrics", make_asgi_app())

