"use client";

interface Props {
  value: string;
  onChange: (v: string) => void;
  label?: string;
  placeholder?: string;
}

export default function DivInput({ value, onChange, label, placeholder }: Props) {
  return (
    <div className="flex flex-col gap-1.5 w-full">
      {label && (
        <span className="text-xs tracking-[0.15em] text-[#7a8a9a] uppercase font-rajdhani font-semibold">
          {label}
        </span>
      )}
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="bg-[#0d1117] border border-[#1e2a38] text-[#c8d8e8] px-3 py-2
                   text-sm font-rajdhani outline-none w-full rounded-sm
                   focus:border-[#2a4a6a] transition-colors"
      />
    </div>
  );
}
