"use client";

import { motion } from "framer-motion";
import { agents } from "@/lib/mock-data";

export function AgentMesh() {
  return (
    <section className="glass relative overflow-hidden rounded-lg p-5">
      <div className="absolute inset-x-0 top-20 h-px pulse-line" />
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold">Agent Orchestration Mesh</h2>
          <p className="text-sm text-slate-400">Planner, memory, retrieval, security, and optimizer agents coordinating live work.</p>
        </div>
        <span className="rounded-full border border-cyanfire/30 px-3 py-1 text-xs text-cyanfire">live</span>
      </div>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
        {agents.map((agent, index) => (
          <motion.div
            key={agent.id}
            className="rounded-lg border border-slate-700/70 bg-slate-950/45 p-4"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            <div className="flex items-center justify-between">
              <div className="font-medium">{agent.name}</div>
              <div className="h-2.5 w-2.5 rounded-full bg-success shadow-[0_0_16px_rgba(69,242,166,0.9)]" />
            </div>
            <div className="mt-2 text-sm text-slate-400">{agent.status}</div>
            <div className="mt-4 h-2 rounded bg-slate-800">
              <div className="h-2 rounded bg-cyanfire" style={{ width: `${agent.load}%` }} />
            </div>
            <div className="mt-3 flex justify-between text-xs text-slate-500">
              <span>{agent.load}% load</span>
              <span>{agent.latency}ms</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

