"use client";

import { SPECIALIZATIONS } from "@/lib/gameData";
import ItemCardTile from "./ui/ItemCardTile";

const SPEC_COLOR = "#e8671a";
const SPEC_BG    = "linear-gradient(100deg, #1a0e06 0%, #110a05 45%, #0c0f14 100%)";

interface Props {
  value:        string;
  onOpenPicker: () => void;
}

export default function SpecializationCard({ value, onOpenPicker }: Props) {
  const isEmpty  = !value;
  const selected = SPECIALIZATIONS.find(s => s.id === value);

  const heroSlot = selected ? (
    <img
      src={selected.icon}
      alt={selected.name}
      style={{
        position:      "absolute",
        right:         16,
        top:           "50%",
        transform:     "translateY(-50%)",
        height:        88,
        width:         88,
        objectFit:     "contain",
        mixBlendMode:  "screen",
        opacity:       0.85,
        filter:        "sepia(1) saturate(15) hue-rotate(310deg) brightness(0.85)",
        pointerEvents: "none",
        zIndex:        2,
      }}
    />
  ) : null;

  return (
    <ItemCardTile
      isEmpty={isEmpty}
      rarColor={SPEC_COLOR}
      background={SPEC_BG}
      open={false}
      onToggle={onOpenPicker}
      heroSlot={heroSlot}
      contentPaddingRight={112}
    >
      <div
        className="font-rajdhani font-bold leading-tight"
        style={{ fontSize: 20, color: isEmpty ? "#3a4a5a" : "#ffffff" }}
      >
        {selected?.name ?? "Specialization"}
      </div>
      {!isEmpty && (
        <span
          className="font-rajdhani font-bold tracking-[0.25em] uppercase"
          style={{ fontSize: 9, color: SPEC_COLOR + "55" }}
        >
          Specialization
        </span>
      )}
    </ItemCardTile>
  );
}
