import { BrainCircuit, Cpu, Database, Network, ShieldCheck, Sparkles } from "lucide-react";
import { AgentMesh } from "@/components/agent-mesh";
import { MemoryGraph } from "@/components/memory-graph";
import { ObservabilityPanel } from "@/components/observability-panel";
import { SystemMetric } from "@/components/system-metric";
import { TerminalStream } from "@/components/terminal-stream";
import { WorkflowStudio } from "@/components/workflow-studio";
import { workflows } from "@/lib/mock-data";

export default function Home() {
  return (
    <main className="min-h-screen neural-grid">
      <div className="mx-auto flex max-w-7xl gap-6 px-4 py-5">
        <aside className="hidden w-64 shrink-0 lg:block">
          <div className="glass sticky top-5 rounded-lg p-4">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-cyanfire/15 text-cyanfire">
                <BrainCircuit size={22} />
              </div>
              <div>
                <div className="font-semibold">AetherMind</div>
                <div className="text-xs text-slate-400">Cognitive AI OS</div>
              </div>
            </div>
            <nav className="mt-8 space-y-2 text-sm text-slate-300">
              {[
                ["Command Center", Sparkles],
                ["Agent Mesh", Network],
                ["Memory Explorer", Database],
                ["Model Observatory", Cpu],
                ["Security", ShieldCheck]
              ].map(([label, Icon]) => (
                <div key={label as string} className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-white/5">
                  <Icon size={16} />
                  <span>{label as string}</span>
                </div>
              ))}
            </nav>
          </div>
        </aside>
        <section className="flex-1 space-y-5">
          <header className="glass overflow-hidden rounded-lg p-6">
            <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
              <div>
                <div className="mb-3 inline-flex rounded-full border border-cyanfire/30 px-3 py-1 text-xs text-cyanfire">
                  Autonomous Cognitive Enterprise Intelligence Infrastructure
                </div>
                <h1 className="max-w-3xl text-4xl font-semibold leading-tight md:text-6xl">
                  AI Cognitive Operating Interface
                </h1>
                <p className="mt-4 max-w-2xl text-slate-300">
                  Multi-agent reasoning, memory graphs, graph RAG, multimodal intelligence, streaming AI, and model observability in one self-hostable free-stack platform.
                </p>
              </div>
              <div className="grid min-w-72 grid-cols-2 gap-3">
                <SystemMetric label="Agents" value="9" hint="active mesh" />
                <SystemMetric label="p95" value="188ms" hint="inference latency" tone="green" />
              </div>
            </div>
          </header>
          <div className="grid gap-4 md:grid-cols-4">
            <SystemMetric label="Token Flow" value="4.2k/s" hint="local routing" />
            <SystemMetric label="GPU Load" value="63%" hint="vLLM pool" tone="purple" />
            <SystemMetric label="Drift" value="0.04" hint="stable window" tone="green" />
            <SystemMetric label="Guardrail" value="99.2%" hint="policy pass" tone="gold" />
          </div>
          <div className="grid gap-5 xl:grid-cols-2">
            <AgentMesh />
            <MemoryGraph />
            <WorkflowStudio />
            <ObservabilityPanel />
            <TerminalStream />
            <section className="glass rounded-lg p-5">
              <h2 className="text-lg font-semibold">Enterprise Workflows</h2>
              <div className="mt-4 space-y-3">
                {workflows.map((workflow) => (
                  <div key={workflow.name} className="flex items-center justify-between rounded-lg border border-slate-800 bg-slate-950/40 p-4">
                    <div>
                      <div className="font-medium">{workflow.name}</div>
                      <div className="text-sm text-slate-400">{workflow.events.toLocaleString()} events processed</div>
                    </div>
                    <span className="rounded-full border border-cyanfire/25 px-3 py-1 text-xs text-cyanfire">{workflow.health}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </section>
      </div>
    </main>
  );
}

