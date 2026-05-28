FROM python:3.12-slim
WORKDIR /app
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
COPY backend/app ./app
COPY agents ./agents
COPY rag ./rag
COPY ml ./ml
COPY streaming ./streaming
ENV PYTHONPATH=/app:/app/agents:/app/rag:/app/ml:/app/streaming
EXPOSE 8000
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]
