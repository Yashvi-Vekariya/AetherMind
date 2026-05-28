import { logs } from "@/lib/mock-data";

export function TerminalStream() {
  return (
    <section className="glass rounded-lg p-5">
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-lg font-semibold">Inference Event Stream</h2>
        <span className="text-xs text-success">Redis Streams / Redpanda ready</span>
      </div>
      <div className="h-56 overflow-hidden rounded-lg border border-slate-800 bg-black/60 p-4 font-mono text-sm">
        {logs.concat(logs.slice(0, 3)).map((log, index) => (
          <div key={`${log}-${index}`} className="mb-2 text-cyan-100/90">
            <span className="text-slate-500">10:{String(index + 11).padStart(2, "0")}:27</span> {log}
          </div>
        ))}
      </div>
    </section>
  );
}

