import type { ReactNode } from "react";

interface Props {
  color:    string;
  children: ReactNode;
}

export default function FormSectionLabel({ color, children }: Props) {
  return (
    <div
      className="text-[9px] tracking-[0.2em] uppercase font-rajdhani font-bold pt-1"
      style={{ color }}
    >
      {children}
    </div>
  );
}
