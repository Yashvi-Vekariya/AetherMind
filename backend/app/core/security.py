from datetime import datetime, timedelta, timezone
from enum import Enum
from typing import Iterable

from fastapi import HTTPException, status
from jose import jwt

from app.core.config import settings


class Role(str, Enum):
    ADMIN = "admin"
    RESEARCHER = "researcher"
    OPERATOR = "operator"
    VIEWER = "viewer"


ROLE_PERMISSIONS = {
    Role.ADMIN: {"agents:run", "models:deploy", "memory:write", "observability:read"},
    Role.RESEARCHER: {"agents:run", "memory:write", "observability:read"},
    Role.OPERATOR: {"agents:run", "observability:read"},
    Role.VIEWER: {"observability:read"},
}


def create_access_token(subject: str, roles: Iterable[Role], expires_minutes: int = 60) -> str:
    now = datetime.now(timezone.utc)
    payload = {
        "sub": subject,
        "roles": [role.value for role in roles],
        "iat": int(now.timestamp()),
        "exp": int((now + timedelta(minutes=expires_minutes)).timestamp()),
    }
    return jwt.encode(payload, settings.jwt_secret, algorithm=settings.jwt_algorithm)


def require_permission(payload: dict, permission: str) -> None:
    roles = {Role(role) for role in payload.get("roles", []) if role in Role._value2member_map_}
    granted = set().union(*(ROLE_PERMISSIONS.get(role, set()) for role in roles)) if roles else set()
    if permission not in granted:
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail="permission denied")


def prompt_injection_score(text: str) -> float:
    suspicious = [
        "ignore previous instructions",
        "developer message",
        "system prompt",
        "exfiltrate",
        "bypass",
        "jailbreak",
        "do anything now",
    ]
    lowered = text.lower()
    hits = sum(1 for marker in suspicious if marker in lowered)
    return min(1.0, hits / 3)
