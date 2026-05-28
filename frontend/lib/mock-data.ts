export const agents = [
  { id: "planner", name: "Planner", status: "reasoning", load: 78, latency: 92 },
  { id: "research", name: "Research", status: "retrieving", load: 64, latency: 121 },
  { id: "memory", name: "Memory", status: "compressing", load: 42, latency: 54 },
  { id: "vision", name: "Vision", status: "embedding", load: 57, latency: 188 },
  { id: "security", name: "Security", status: "guarding", load: 38, latency: 33 },
  { id: "optimizer", name: "Optimizer", status: "routing", load: 49, latency: 67 }
];

export const tokenSeries = [
  { t: "10:00", tokens: 1200, latency: 180, quality: 91 },
  { t: "10:05", tokens: 1840, latency: 164, quality: 93 },
  { t: "10:10", tokens: 2420, latency: 210, quality: 90 },
  { t: "10:15", tokens: 3100, latency: 198, quality: 94 },
  { t: "10:20", tokens: 3760, latency: 175, quality: 96 },
  { t: "10:25", tokens: 4210, latency: 160, quality: 95 }
];

export const logs = [
  "[planner] decomposed objective into 9 executable graph steps",
  "[security] prompt injection score 0.08, policy passed",
  "[rag] hybrid retrieval merged 12 vector hits and 7 graph paths",
  "[memory] decayed 183 stale memories and promoted 14 semantic anchors",
  "[optimizer] routed summarization to phi3:mini with q4 cache",
  "[observability] drift window normal, p95 latency 188ms"
];

export const workflows = [
  { name: "Graph RAG Investigator", health: "online", events: 18420 },
  { name: "Multimodal Compliance Review", health: "online", events: 7350 },
  { name: "Streaming Anomaly Sentinel", health: "training", events: 42892 },
  { name: "LoRA Fine-tune Pipeline", health: "queued", events: 884 }
];

