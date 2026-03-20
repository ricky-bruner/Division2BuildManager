"use client";

import { useState } from "react";
import type { SkillSlot } from "@/lib/types";
import { SKILLS, SKILL_MODS } from "@/lib/gameData";

const SKILL_COLOR = "#4a9eff";

const REGULAR_SKILLS   = SKILLS.filter(s => !s.startsWith("Signature"));
const SIGNATURE_SKILLS = SKILLS.filter(s =>  s.startsWith("Signature"));

const SKILL_PREFIX: Record<string, string> = {
  "Chem Launcher": "chemlauncher",
  "Decoy":         "decoy",
  "Drone":         "drone",
  "Firefly":       "firefly",
  "Hive":          "hive",
  "Pulse":         "pulse",
  "Seeker Mine":   "seeker",
  "Shield":        "shield",
  "Sticky Bomb":   "stickybomb",
  "Trap":          "trap",
  "Turret":        "turret",
};

const SKILL_ICON_OVERRIDE: Record<string, string> = {
  "Signature — Banshee":         "/skills/pulse_banshee.png",
  "Signature — Blinder Firefly": "/skills/firefly_blinder.png",
  "Signature — Striker Drone":   "/skills/drone_striker.png",
};

function skillIconPath(skill: string, mod: string): string {
  if (SKILL_ICON_OVERRIDE[skill]) return SKILL_ICON_OVERRIDE[skill];
  const prefix = SKILL_PREFIX[skill];
  if (!prefix) return "";
  return `/skills/${prefix}_${mod.toLowerCase().replace(/[^a-z0-9]/g, "")}.png`;
}

interface Props {
  slotLabel:  string;
  current:    SkillSlot;
  otherSkill: string;
  onConfirm:  (s: SkillSlot) => void;
  onClose:    () => void;
}

export default function SkillPickerModal({ slotLabel, current, otherSkill, onConfirm, onClose }: Props) {
  const [selectedSkill, setSelectedSkill] = useState<string>(current.skill);
  const [selectedMod,   setSelectedMod]   = useState<string>(current.mod);

  const mods = selectedSkill ? (SKILL_MODS[selectedSkill] ?? []) : [];

  function selectSkill(skill: string) {
    setSelectedSkill(skill);
    setSelectedMod(SKILL_MODS[skill]?.[0] ?? "");
  }

  const groups = [
    { label: "Skills",            items: REGULAR_SKILLS.filter(s => s !== otherSkill)   },
    { label: "Signature Skills",  items: SIGNATURE_SKILLS.filter(s => s !== otherSkill) },
  ];

  return (
    <div
      style={{ position: "fixed", inset: 0, zIndex: 100, background: "rgba(0,0,0,0.78)",
               display: "flex", alignItems: "center", justifyContent: "center" }}
      onClick={onClose}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          width: "min(720px, 96vw)", height: "min(520px, 92vh)",
          background: "#060b10", border: "1px solid #1a2530",
          borderLeft: `4px solid ${SKILL_COLOR}`,
          display: "flex", flexDirection: "column", overflow: "hidden",
        }}
      >
        {/* Header */}
        <div style={{ padding: "10px 16px", borderBottom: "1px solid #1a2530",
                      display: "flex", alignItems: "center", gap: 12 }}>
          <span className="font-rajdhani font-bold tracking-[0.25em] uppercase"
                style={{ fontSize: 11, color: SKILL_COLOR }}>
            Select {slotLabel}
          </span>
          <div style={{ flex: 1 }} />
          <button onClick={onClose}
                  style={{ color: "#4a6a8a", fontSize: 18, background: "none",
                           border: "none", cursor: "pointer", lineHeight: 1 }}>✕</button>
        </div>

        {/* Body */}
        <div style={{ flex: 1, display: "flex", overflow: "hidden" }}>

          {/* Left: skill list */}
          <div style={{ width: 220, borderRight: "1px solid #1a2530",
                        display: "flex", flexDirection: "column", flexShrink: 0, overflowY: "auto" }}>
            {groups.map(group => group.items.length === 0 ? null : (
              <div key={group.label}>
                <div style={{ padding: "6px 10px 2px", fontSize: 9, letterSpacing: "0.25em",
                              color: "#3a5a7a", fontFamily: "var(--font-rajdhani)",
                              fontWeight: 700, textTransform: "uppercase" }}>
                  {group.label}
                </div>
                {group.items.map(skill => {
                  const isSelected = skill === selectedSkill;
                  return (
                    <div
                      key={skill}
                      onClick={() => selectSkill(skill)}
                      style={{
                        padding: "8px 12px", cursor: "pointer",
                        background: isSelected ? "#06121e" : "transparent",
                        borderLeft: `2px solid ${isSelected ? SKILL_COLOR : "transparent"}`,
                      }}
                    >
                      <span style={{ fontSize: 13, fontWeight: 600,
                                     color: isSelected ? "#fff" : "#7a9ab0",
                                     fontFamily: "var(--font-rajdhani)" }}>
                        {skill}
                      </span>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>

          {/* Right: variant picker */}
          <div style={{ flex: 1, overflowY: "auto", padding: "14px 18px" }}>
            {!selectedSkill ? (
              <div style={{ color: "#2a4a6a", fontFamily: "var(--font-rajdhani)",
                            fontSize: 13, marginTop: 50, textAlign: "center" }}>
                Select a skill from the list
              </div>
            ) : (
              <>
                <div style={{ marginBottom: 14 }}>
                  <div style={{ fontSize: 16, fontWeight: 700, letterSpacing: "0.05em",
                                color: SKILL_COLOR, fontFamily: "var(--font-rajdhani)" }}>
                    {selectedSkill}
                  </div>
                </div>

                <div style={{ fontSize: 9, letterSpacing: "0.25em", color: "#4a6a8a",
                              fontFamily: "var(--font-rajdhani)", fontWeight: 700,
                              textTransform: "uppercase", marginBottom: 10 }}>
                  Variant
                </div>

                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {mods.map(mod => {
                    const isActive  = mod === selectedMod;
                    const iconPath  = skillIconPath(selectedSkill, mod);
                    const showLabel = mod === "N/A" ? selectedSkill : mod;
                    return (
                      <div
                        key={mod}
                        onClick={() => setSelectedMod(mod)}
                        style={{
                          padding: "10px 14px", cursor: "pointer", minWidth: 100,
                          background: isActive ? "#06121e" : "#0a0f15",
                          border: `1px solid ${isActive ? SKILL_COLOR : "#1a2530"}`,
                          display: "flex", flexDirection: "column", alignItems: "center", gap: 6,
                        }}
                      >
                        {iconPath && (
                          <img
                            src={iconPath}
                            alt={mod}
                            width={48} height={48}
                            style={{ objectFit: "contain", mixBlendMode: "screen", opacity: 0.85 }}
                            onError={e => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
                          />
                        )}
                        <span style={{ fontSize: 12, fontWeight: 600, textAlign: "center",
                                       color: isActive ? "#fff" : "#7a9ab0",
                                       fontFamily: "var(--font-rajdhani)" }}>
                          {showLabel}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </>
            )}
          </div>
        </div>

        {/* Footer */}
        <div style={{ padding: "10px 16px", borderTop: "1px solid #1a2530",
                      display: "flex", gap: 8, justifyContent: "flex-end" }}>
          <FBtn color="#3a5a7a" onClick={() => { onConfirm({ skill: "", mod: "" }); onClose(); }}>
            Clear Slot
          </FBtn>
          <FBtn color="#3a5a7a" onClick={onClose}>Cancel</FBtn>
          <FBtn
            color={SKILL_COLOR}
            disabled={!selectedSkill || !selectedMod}
            onClick={() => {
              if (selectedSkill && selectedMod) {
                onConfirm({ skill: selectedSkill, mod: selectedMod });
                onClose();
              }
            }}
          >
            Confirm
          </FBtn>
        </div>
      </div>
    </div>
  );
}

function FBtn({ children, onClick, color, disabled }: {
  children: React.ReactNode; onClick: () => void; color: string; disabled?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        background: "transparent",
        border: `1px solid ${disabled ? "#1a2530" : color}`,
        color: disabled ? "#2a3a4a" : color === SKILL_COLOR ? SKILL_COLOR : "#9ab8d0",
        padding: "5px 16px", fontSize: 11, letterSpacing: "0.15em",
        fontFamily: "var(--font-rajdhani)", fontWeight: 700,
        textTransform: "uppercase", cursor: disabled ? "default" : "pointer",
      }}
    >
      {children}
    </button>
  );
}
