"use client";

import type { GearSlot, GearBuildSlot } from "@/lib/types";
import { resolveGearItem, getEditableSlots } from "@/lib/buildUtils";
import { RARITY_COLORS, RARITY_BG, BRANDS, GEAR_SETS } from "@/lib/gameData";
import { attrIconSrc } from "@/lib/attrUtils";
import ItemCardTile from "./ui/ItemCardTile";

const SLOT_IMAGES: Record<string, string> = {
  mask:      "/generic/mask.png",
  backpack:  "/generic/backpack.png",
  chest:     "/generic/chest.png",
  gloves:    "/generic/gloves.png",
  holster:   "/generic/holster.png",
  kneepads:  "/generic/kneepads.png",
};

const ALL_CORE_ATTRS = ["Weapon Damage", "Armor", "Skill Tier"];

interface Props {
  slotId:       GearSlot;
  slotLabel:    string;
  item:         GearBuildSlot;
  onOpenPicker: () => void;
}

export default function GearCard({ slotId, slotLabel, item, onOpenPicker }: Props) {
  const def      = item.gearId ? resolveGearItem(item.gearId) : undefined;
  const isEmpty  = !item.gearId;
  const rarity   = def?.rarity ?? "High-End";
  const rarColor = RARITY_COLORS[rarity] ?? "#f5c518";

  const brandIcon = def?.brand
    ? (BRANDS.find(b => b.name === def.brand)?.icon ?? GEAR_SETS.find(g => g.name === def.brand)?.icon ?? "")
    : "";

  // Build per-series attribute icon lists
  const coreAttrs: string[] = [];
  const minorAttrs: string[] = [];
  if (def) {
    const info = getEditableSlots(def);
    if (info.core.locked && "allCores" in info.core && info.core.allCores) {
      coreAttrs.push(...ALL_CORE_ATTRS);
    } else {
      coreAttrs.push(item.coreAttr);
    }
    item.minors.forEach(m => minorAttrs.push(m.attr));
  }

  const heroSlot = (
    <img
      src={SLOT_IMAGES[slotId] ?? ""}
      alt={slotLabel}
      style={{
        position:     "absolute",
        right:        16,
        top:          "50%",
        transform:    "translateY(-50%)",
        height:       92,
        width:        92,
        objectFit:    "contain",
        mixBlendMode: "screen",
        opacity:      isEmpty ? 0.18 : 0.82,
        pointerEvents:"none",
        zIndex:       2,
      }}
    />
  );

  return (
    <ItemCardTile
      isEmpty={isEmpty}
      rarColor={rarColor}
      background={RARITY_BG[rarity] ?? "#090d11"}
      open={false}
      onToggle={onOpenPicker}
      heroSlot={heroSlot}
      contentPaddingRight={100}
      watermarkSrc={brandIcon || undefined}
    >
      {/* Name + brand */}
      <div style={{ textAlign: "center" }}>
        <div
          className="font-rajdhani font-bold leading-tight"
          style={{ fontSize: 20, color: isEmpty ? "#3a4a5a" : "#ffffff" }}
        >
          {def?.gearName || slotLabel}
        </div>
        {def?.brand && (
          <div
            className="font-rajdhani font-semibold"
            style={{ fontSize: 15, color: rarColor + "cc", marginTop: 1 }}
          >
            {def.brand}
          </div>
        )}
      </div>

      {/* Attribute + mod icons */}
      <div className="flex items-center justify-center gap-1.5">
        {coreAttrs.map((attr, i) => (
          <img
            key={`core-${i}`} src={attrIconSrc(attr, 1)} alt={attr} title={attr}
            width={18} height={18}
            style={{ mixBlendMode: "screen", opacity: attr ? 0.85 : 0.2 }}
          />
        ))}
        {minorAttrs.map((attr, i) => (
          <img
            key={`minor-${i}`} src={attrIconSrc(attr, 2)} alt={attr} title={attr}
            width={18} height={18}
            style={{ mixBlendMode: "screen", opacity: attr ? 0.85 : 0.2 }}
          />
        ))}
        {Array(def?.modSlots ?? 0).fill(null).map((_, i) => {
          const modAttr = item.modAttrs[i]?.attr;
          return (
            <img
              key={`mod-${i}`}
              src={modAttr ? attrIconSrc(modAttr, 3) : "/stats/blank_mod.png"}
              alt={modAttr || "mod"} title={modAttr || "mod slot"}
              width={16} height={16}
              style={{ mixBlendMode: "screen", opacity: modAttr ? 0.7 : 0.15 }}
            />
          );
        })}
      </div>
    </ItemCardTile>
  );
}
