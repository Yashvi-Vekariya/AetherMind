from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    app_name: str = "AetherMind"
    environment: str = "local"
    database_url: str = "sqlite+aiosqlite:///./aethermind.db"
    redis_url: str = "redis://localhost:6379/0"
    qdrant_url: str = "http://localhost:6333"
    neo4j_uri: str = "bolt://localhost:7687"
    jwt_secret: str = "local-dev-change-me"
    jwt_algorithm: str = "HS256"
    allowed_origins: list[str] = ["http://localhost:3000"]

    class Config:
        env_prefix = "AETHERMIND_"
        env_file = ".env"
        extra = "ignore"


settings = Settings()

