type Props = {
  label: string;
  value: string;
  hint: string;
  tone?: "cyan" | "green" | "purple" | "gold";
};

const toneMap = {
  cyan: "text-cyanfire",
  green: "text-success",
  purple: "text-aurora",
  gold: "text-warning"
};

export function SystemMetric({ label, value, hint, tone = "cyan" }: Props) {
  return (
    <div className="glass rounded-lg p-4">
      <div className="text-xs uppercase text-slate-400">{label}</div>
      <div className={`mt-2 text-2xl font-semibold ${toneMap[tone]}`}>{value}</div>
      <div className="mt-1 text-sm text-slate-400">{hint}</div>
    </div>
  );
}

