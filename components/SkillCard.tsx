"use client";

import { useState } from "react";
import type { SkillSlot } from "@/lib/types";
import { SKILLS, SKILL_MODS } from "@/lib/gameData";
import DivSelect    from "./ui/DivSelect";
import ItemCardTile from "./ui/ItemCardTile";
import CardForm     from "./ui/CardForm";

const SKILL_PREFIX: Record<string, string> = {
  "Chem Launcher": "chemlauncher",
  "Drone":         "drone",
  "Firefly":       "firefly",
  "Hive":          "hive",
  "Pulse":         "pulse",
  "Seeker Mine":   "seeker",
  "Shield":        "shield",
  "Turret":        "turret",
};

const SKILL_COLOR   = "#00cc7a";
const SKILL_BG      = "linear-gradient(100deg, #00241a 0%, #071410 45%, #0a0d12 100%)";

function skillIconPath(skill: string, mod: string): string {
  const prefix = SKILL_PREFIX[skill];
  if (!prefix) return "";
  return `/skills/${prefix}_${mod.toLowerCase().replace(/[^a-z0-9]/g, "")}.png`;
}

interface Props {
  slotLabel: string;
  value:     SkillSlot;
  onChange:  (s: SkillSlot) => void;
}

export default function SkillCard({ slotLabel, value, onChange }: Props) {
  const [open, setOpen]       = useState(false);
  const [iconErr, setIconErr] = useState(false);

  const isEmpty  = !value.skill;
  const iconPath = skillIconPath(value.skill, value.mod);
  const mods     = SKILL_MODS[value.skill] ?? ["N/A"];

  const handleSkillChange = (skill: string) => {
    setIconErr(false);
    onChange({ skill, mod: SKILL_MODS[skill]?.[0] ?? "N/A" });
  };

  const handleModChange = (mod: string) => {
    setIconErr(false);
    onChange({ ...value, mod });
  };

  const heroSlot = iconPath && !iconErr ? (
    <img
      src={iconPath}
      alt={value.mod}
      onError={() => setIconErr(true)}
      style={{
        position:     "absolute",
        right:        16,
        top:          "50%",
        transform:    "translateY(-50%)",
        height:       88,
        width:        88,
        objectFit:    "contain",
        mixBlendMode: "screen",
        opacity:      isEmpty ? 0.18 : 0.85,
        pointerEvents:"none",
        zIndex:       2,
      }}
    />
  ) : null;

  return (
    <div className="flex flex-col">
      <ItemCardTile
        isEmpty={isEmpty}
        rarColor={SKILL_COLOR}
        background={SKILL_BG}
        open={open}
        onToggle={() => setOpen(o => !o)}
        heroSlot={heroSlot}
        contentPaddingRight={112}
      >
        {/* Skill name + variant */}
        <div style={{ textAlign: "center" }}>
          <div className="font-rajdhani font-bold leading-tight"
               style={{ fontSize: 15, color: isEmpty ? "#3a4a5a" : "#ffffff" }}>
            {value.skill || slotLabel}
          </div>
          {!isEmpty && value.mod && value.mod !== "N/A" && (
            <div className="font-rajdhani font-semibold"
                 style={{ fontSize: 11, color: SKILL_COLOR + "cc", marginTop: 1 }}>
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

      {open && (
        <CardForm isEmpty={isEmpty} rarColor={SKILL_COLOR}>
          <div className="grid grid-cols-2 gap-3">
            <DivSelect label="Skill"         value={value.skill} onChange={handleSkillChange} options={SKILLS} />
            <DivSelect label="Variant / Mod" value={value.mod}   onChange={handleModChange}   options={mods}   />
          </div>
        </CardForm>
      )}
    </div>
  );
}
