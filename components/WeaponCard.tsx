"use client";

import type { WeaponItem } from "@/lib/types";
import { RARITY_COLORS, RARITY_BG } from "@/lib/gameData";
import { WEAPON_FIXED_CORE_MAP } from "@/lib/attributeData";
import ItemCardTile from "./ui/ItemCardTile";

const SLOT_IMAGES: Record<string, string> = {
  primary:   "/generic/main-weapon.png",
  secondary: "/generic/main-weapon.png",
  sidearm:   "/generic/sidearm.png",
};

interface Props {
  slotId:       string;
  slotLabel:    string;
  item:         WeaponItem;
  onOpenPicker: () => void;
}

export default function WeaponCard({ slotId, slotLabel, item, onOpenPicker }: Props) {
  const isEmpty       = !item.name;
  const rarColor      = RARITY_COLORS[item.rarity] ?? "#f5c518";
  const hasFixedCore  = !isEmpty && !!WEAPON_FIXED_CORE_MAP.get(item.weaponType as any);

  const heroSlot = (
    <img
      src={SLOT_IMAGES[slotId] ?? SLOT_IMAGES.primary}
      alt={slotLabel}
      style={{
        position:       "absolute",
        right:          10,
        top:            "50%",
        transform:      "translateY(-50%)",
        height:         66,
        width:          130,
        objectFit:      "contain",
        objectPosition: "right center",
        mixBlendMode:   "screen",
        opacity:        isEmpty ? 0.15 : 0.7,
        pointerEvents:  "none",
        zIndex:         2,
      }}
    />
  );

  return (
    <ItemCardTile
      isEmpty={isEmpty}
      rarColor={rarColor}
      background={RARITY_BG[item.rarity] ?? "#090d11"}
      open={false}
      onToggle={onOpenPicker}
      heroSlot={heroSlot}
      contentPaddingRight={140}
    >
      {/* Name + core attr */}
      <div style={{ textAlign: "center" }}>
        <div className="font-rajdhani font-bold leading-tight"
             style={{ fontSize: 20, color: isEmpty ? "#3a4a5a" : "#ffffff" }}>
          {item.name || slotLabel}
        </div>
        {!isEmpty && item.coreAttr && (
          <div className="font-rajdhani font-semibold"
               style={{ fontSize: 15, color: rarColor + "cc", marginTop: 1 }}>
            {item.coreAttr}{item.coreValue ? ` · ${item.coreValue}` : ""}
          </div>
        )}
      </div>

      {/* Attr + mod icons */}
      <div className="flex items-center justify-center gap-1.5">
        {!isEmpty && (
          <>
            <img src="/stats/weaponMainAttr.png" alt={item.coreAttr} title={item.coreAttr}
                 width={18} height={18}
                 style={{ mixBlendMode: "screen", opacity: 0.85 }} />
            {hasFixedCore && (
              <img src="/stats/weaponMainAttr.png"
                   alt={WEAPON_FIXED_CORE_MAP.get(item.weaponType as any)?.attribute}
                   title={WEAPON_FIXED_CORE_MAP.get(item.weaponType as any)?.attribute}
                   width={18} height={18}
                   style={{ mixBlendMode: "screen", opacity: 0.85 }} />
            )}
            <img src="/stats/weaponMinorAttr.png" alt={item.minor1} title={item.minor1}
                 width={18} height={18}
                 style={{ mixBlendMode: "screen", opacity: item.minor1 ? 0.85 : 0.2 }} />
          </>
        )}
      </div>
    </ItemCardTile>
  );
}
