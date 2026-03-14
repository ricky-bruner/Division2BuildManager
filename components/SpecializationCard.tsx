"use client";

import { useState } from "react";
import { SPECIALIZATIONS } from "@/lib/gameData";

interface Props {
  value: string;
  onChange: (v: string) => void;
}

export default function SpecializationCard({ value, onChange }: Props) {
  const selected = SPECIALIZATIONS.find(s => s.id === value);

  return (
    <div
      className="flex items-center gap-4 px-5 py-3"
      style={{
        background: "#08111a",
        borderLeft: "4px solid #e8671a",
        border: "1px solid #1a2530",
        borderLeftWidth: 4,
      }}
    >
      {/* Label */}
      <span className="text-[9px] tracking-[0.3em] text-[#4a6a8a] font-rajdhani font-bold uppercase flex-shrink-0">
        SPECIALIZATION
      </span>

      {/* Selector buttons */}
      <div className="flex gap-2 flex-1 flex-wrap">
        {SPECIALIZATIONS.map(spec => {
          const isActive = value === spec.id;
          return (
            <button
              key={spec.id}
              type="button"
              onClick={() => onChange(isActive ? "" : spec.id)}
              title={spec.name}
              className="flex flex-col items-center gap-1 px-3 py-2 cursor-pointer transition-all font-rajdhani"
              style={{
                background:   isActive ? "#1a2e3e" : "transparent",
                border:       `1px solid ${isActive ? "#e8671a" : "#1e2a38"}`,
                outline:      "none",
              }}
            >
              <img
                src={spec.icon}
                alt={spec.name}
                width={28}
                height={28}
                style={{ mixBlendMode: "screen", opacity: isActive ? 1 : 0.45 }}
              />
              <span
                className="text-[9px] tracking-[0.12em] uppercase leading-none"
                style={{ color: isActive ? "#e8671a" : "#4a6a8a" }}
              >
                {spec.name}
              </span>
            </button>
          );
        })}
      </div>

      {/* Selected name */}
      {selected && (
        <span className="text-sm font-rajdhani font-bold tracking-[0.1em] flex-shrink-0" style={{ color: "#e8671a" }}>
          {selected.name.toUpperCase()}
        </span>
      )}
    </div>
  );
}
