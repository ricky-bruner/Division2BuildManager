"use client";

import type { SkillSlot } from "@/lib/types";
import ItemCardTile from "./ui/ItemCardTile";

const SKILL_COLOR = "#4a9eff";
const SKILL_BG    = "linear-gradient(100deg, #06121e 0%, #070d16 45%, #0a0d12 100%)";

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
  slotLabel:    string;
  value:        SkillSlot;
  onOpenPicker: () => void;
}

export default function SkillCard({ slotLabel, value, onOpenPicker }: Props) {
  const isEmpty  = !value.skill;
  const iconPath = isEmpty ? "/skills/skills.png" : skillIconPath(value.skill, value.mod);

  const heroSlot = iconPath ? (
    <img
      src={iconPath}
      alt={value.mod || slotLabel}
      style={{
        position:      "absolute",
        right:         16,
        top:           "50%",
        transform:     "translateY(-50%)",
        height:        88,
        width:         88,
        objectFit:     "contain",
        mixBlendMode:  "screen",
        opacity:       isEmpty ? 0.18 : 0.85,
        pointerEvents: "none",
        zIndex:        2,
      }}
      onError={e => { (e.currentTarget as HTMLImageElement).src = "/skills/skills.png"; }}
    />
  ) : null;

  return (
    <ItemCardTile
      isEmpty={isEmpty}
      rarColor={SKILL_COLOR}
      background={SKILL_BG}
      open={false}
      onToggle={onOpenPicker}
      heroSlot={heroSlot}
      contentPaddingRight={112}
    >
      {/* Skill name + variant */}
      <div style={{ textAlign: "center" }}>
        <div className="font-rajdhani font-bold leading-tight"
             style={{ fontSize: 20, color: isEmpty ? "#3a4a5a" : "#ffffff" }}>
          {value.skill || slotLabel}
        </div>
        {!isEmpty && value.mod && value.mod !== "N/A" && (
          <div className="font-rajdhani font-semibold"
               style={{ fontSize: 15, color: SKILL_COLOR + "cc", marginTop: 1 }}>
            {value.mod}
          </div>
        )}
      </div>

      {/* Slot label */}
      <span className="font-rajdhani font-bold tracking-[0.25em] uppercase"
            style={{ fontSize: 9, color: isEmpty ? "#2a3a4a" : SKILL_COLOR + "55" }}>
        {slotLabel}
      </span>
    </ItemCardTile>
  );
}
