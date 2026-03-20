"use client";

import { SPECIALIZATIONS } from "@/lib/gameData";

const SPEC_COLOR = "#e8671a";

interface Props {
  current:   string;
  onConfirm: (id: string) => void;
  onClose:   () => void;
}

export default function SpecializationPickerModal({ current, onConfirm, onClose }: Props) {
  return (
    <div
      style={{
        position: "fixed", inset: 0, zIndex: 100,
        background: "rgba(0,0,0,0.78)",
        display: "flex", alignItems: "center", justifyContent: "center",
      }}
      onClick={onClose}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          background:  "#060b10",
          border:      "1px solid #1a2530",
          borderLeft:  `4px solid ${SPEC_COLOR}`,
          padding:     "16px 20px",
          minWidth:    480,
        }}
      >
        {/* Header */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 18 }}>
          <span
            className="font-rajdhani font-bold tracking-[0.25em] uppercase"
            style={{ fontSize: 14, color: SPEC_COLOR }}
          >
            Select Specialization
          </span>
          <div style={{ flex: 1 }} />
          <button
            onClick={onClose}
            style={{ color: "#4a6a8a", fontSize: 18, background: "none", border: "none", cursor: "pointer", lineHeight: 1 }}
          >
            ✕
          </button>
        </div>

        {/* Spec tiles */}
        <div style={{ display: "flex", gap: 8, justifyContent: "center" }}>
          {SPECIALIZATIONS.map(spec => {
            const isActive = current === spec.id;
            return (
              <button
                key={spec.id}
                onClick={() => { onConfirm(isActive ? "" : spec.id); onClose(); }}
                style={{
                  background:    isActive ? "#1a2e3e" : "#0a0f15",
                  border:        `1px solid ${isActive ? SPEC_COLOR : "#1a2530"}`,
                  padding:       "12px 14px",
                  cursor:        "pointer",
                  display:       "flex",
                  flexDirection: "column",
                  alignItems:    "center",
                  gap:           6,
                  minWidth:      80,
                }}
              >
                <img
                  src={spec.icon}
                  alt={spec.name}
                  width={80} height={80}
                  style={{
                    mixBlendMode: "screen",
                    opacity:      isActive ? 1 : 0.45,
                    filter:       isActive ? "sepia(1) saturate(5) hue-rotate(346deg) brightness(0.85)" : "none",
                  }}
                />
                <span
                  className="font-rajdhani font-bold uppercase"
                  style={{ fontSize: 13, letterSpacing: "0.12em", color: isActive ? SPEC_COLOR : "#4a6a8a" }}
                >
                  {spec.name}
                </span>
              </button>
            );
          })}
        </div>

        {/* Footer */}
        <div style={{ marginTop: 14, display: "flex", justifyContent: "flex-end", gap: 8 }}>
          <button
            onClick={() => { onConfirm(""); onClose(); }}
            style={{
              background: "transparent", border: "1px solid #3a5a7a",
              color: "#9ab8d0", padding: "5px 16px", fontSize: 13,
              letterSpacing: "0.15em", fontFamily: "var(--font-rajdhani)",
              fontWeight: 700, textTransform: "uppercase", cursor: "pointer",
            }}
          >
            Clear
          </button>
          <button
            onClick={onClose}
            style={{
              background: "transparent", border: "1px solid #3a5a7a",
              color: "#9ab8d0", padding: "5px 16px", fontSize: 13,
              letterSpacing: "0.15em", fontFamily: "var(--font-rajdhani)",
              fontWeight: 700, textTransform: "uppercase", cursor: "pointer",
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
