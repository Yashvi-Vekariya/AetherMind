"use client";

import "@xyflow/react/dist/style.css";
import { Background, Controls, Edge, Node, ReactFlow } from "@xyflow/react";

const nodes: Node[] = [
  { id: "ingest", type: "input", data: { label: "Multimodal Ingest" }, position: { x: 0, y: 80 } },
  { id: "guard", data: { label: "Security Guard" }, position: { x: 220, y: 20 } },
  { id: "rag", data: { label: "Graph + Vector RAG" }, position: { x: 430, y: 80 } },
  { id: "planner", data: { label: "Planner Debate" }, position: { x: 660, y: 20 } },
  { id: "serve", type: "output", data: { label: "Inference API" }, position: { x: 880, y: 80 } }
];

const edges: Edge[] = [
  { id: "e1", source: "ingest", target: "guard", animated: true },
  { id: "e2", source: "guard", target: "rag", animated: true },
  { id: "e3", source: "rag", target: "planner", animated: true },
  { id: "e4", source: "planner", target: "serve", animated: true }
];

export function WorkflowStudio() {
  return (
    <section className="glass rounded-lg p-5">
      <div className="mb-3">
        <h2 className="text-lg font-semibold">AI Workflow Studio</h2>
        <p className="text-sm text-slate-400">Deployable agent pipelines with guardrails, retrieval, and model routing.</p>
      </div>
      <div className="h-72 overflow-hidden rounded-lg border border-slate-800 bg-slate-950/50">
        <ReactFlow nodes={nodes} edges={edges} fitView>
          <Background color="#1e293b" gap={22} />
          <Controls />
        </ReactFlow>
      </div>
    </section>
  );
}
