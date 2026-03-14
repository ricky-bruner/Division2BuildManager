import type { ReactNode } from "react";

interface Props {
  isEmpty:  boolean;
  rarColor: string;
  children: ReactNode;
}

export default function CardForm({ isEmpty, rarColor, children }: Props) {
  return (
    <div
      className="px-4 pb-4 pt-3 flex flex-col gap-3 animate-fadeIn"
      style={{
        background:  "#080d12",
        border:      `1px solid ${isEmpty ? "#1a2530" : rarColor + "44"}`,
        borderTop:   "none",
        borderLeft:  `9px solid ${isEmpty ? "#2a3a4a" : rarColor}`,
      }}
    >
      {children}
    </div>
  );
}
