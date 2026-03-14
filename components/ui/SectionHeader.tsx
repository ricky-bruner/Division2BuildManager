interface Props {
  children: React.ReactNode;
  accent?: string;
}

export default function SectionHeader({ children, accent = "#e8671a" }: Props) {
  return (
    <div
      className="flex items-center gap-2 mb-3 pb-1.5"
      style={{ borderBottom: `1px solid ${accent}33` }}
    >
      <div className="w-0.5 h-4 flex-shrink-0" style={{ background: accent }} />
      <span
        className="text-xs tracking-[0.2em] uppercase font-rajdhani font-bold"
        style={{ color: accent }}
      >
        {children}
      </span>
    </div>
  );
}
