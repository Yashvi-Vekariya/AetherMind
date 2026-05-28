"use client";

import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { tokenSeries } from "@/lib/mock-data";

export function ObservabilityPanel() {
  return (
    <section className="glass rounded-lg p-5">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold">Model Observatory</h2>
          <p className="text-sm text-slate-400">Token throughput, p95 latency, inference quality, and drift signals.</p>
        </div>
      </div>
      <div className="h-56">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={tokenSeries}>
            <defs>
              <linearGradient id="tokens" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#31d7ff" stopOpacity={0.45} />
                <stop offset="95%" stopColor="#31d7ff" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="t" stroke="#64748b" />
            <YAxis stroke="#64748b" />
            <Tooltip contentStyle={{ background: "#0f172a", border: "1px solid #334155" }} />
            <Area type="monotone" dataKey="tokens" stroke="#31d7ff" fill="url(#tokens)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}

