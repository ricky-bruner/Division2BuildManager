"use client";

interface Props {
  value: string;
  onChange: (v: string) => void;
  options: readonly string[];
  label?: string;
  colorFn?: (v: string) => string;
}

export default function DivSelect({ value, onChange, options, label, colorFn }: Props) {
  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <span className="text-xs tracking-[0.15em] text-[#7a8a9a] uppercase font-rajdhani font-semibold">
          {label}
        </span>
      )}
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{ color: colorFn ? colorFn(value) : "#c8d8e8" }}
        className="bg-[#0d1117] border border-[#1e2a38] px-3 py-2 text-sm font-rajdhani
                   cursor-pointer outline-none w-full rounded-sm appearance-none
                   focus:border-[#2a4a6a] transition-colors"
      >
        {options.map((o) => (
          <option key={o} value={o}>{o}</option>
        ))}
      </select>
    </div>
  );
}
