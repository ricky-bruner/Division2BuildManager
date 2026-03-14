"use client";

import { useState } from "react";
import type { GearItem } from "@/lib/types";
import {
  GEAR_CORE_ATTRS, MINOR_ATTRS, GEAR_TALENTS, GEAR_MODS,
  RARITY_OPTIONS, RARITY_COLORS, RARITY_BG, GEAR_SET_BRANDS,
  BRANDS, GEAR_SETS,
} from "@/lib/gameData";
import { attrIconSrc } from "@/lib/attrUtils";
import DivSelect        from "./ui/DivSelect";
import DivInput         from "./ui/DivInput";
import BrandPicker      from "./ui/BrandPicker";
import ItemCardTile     from "./ui/ItemCardTile";
import CardForm         from "./ui/CardForm";
import FormSectionLabel from "./ui/FormSectionLabel";

const SLOT_IMAGES: Record<string, string> = {
  mask:      "/generic/mask.png",
  backpack:  "/generic/backpack.png",
  chest:     "/generic/chest.png",
  gloves:    "/generic/gloves.png",
  holster:   "/generic/holster.png",
  kneepads:  "/generic/kneepads.png",
};

interface Props {
  slotId:    string;
  slotLabel: string;
  item:      GearItem;
  onChange:  (item: GearItem) => void;
}

export default function GearCard({ slotId, slotLabel, item, onChange }: Props) {
  const [open, setOpen] = useState(false);

  const isEmpty  = !item.name;
  const rarColor = RARITY_COLORS[item.rarity] ?? "#f5c518";

  const brandDef   = BRANDS.find(b => b.name === item.brand);
  const gearSetDef = GEAR_SETS.find(g => g.name === item.brand);
  const brandIcon  = brandDef?.icon ?? gearSetDef?.icon ?? "";

  const upd = <K extends keyof GearItem>(field: K, val: GearItem[K]) =>
    onChange({ ...item, [field]: val });

  const handleBrandChange = (brand: string) => {
    const isGearSet  = GEAR_SET_BRANDS.has(brand);
    const nextRarity = isGearSet
      ? "Gear Set"
      : item.rarity === "Gear Set" ? "High-End" : item.rarity;
    onChange({ ...item, brand, rarity: nextRarity });
  };

  const hasMod1     = item.mod1 && item.mod1 !== "None";
  const hasMod2     = item.mod2 && item.mod2 !== "None";
  const attrSlots   = [item.coreAttr, item.minor1, item.minor2];

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
    <div className="flex flex-col">
      <ItemCardTile
        isEmpty={isEmpty}
        rarColor={rarColor}
        background={RARITY_BG[item.rarity] ?? "#090d11"}
        open={open}
        onToggle={() => setOpen(o => !o)}
        heroSlot={heroSlot}
        contentPaddingRight={100}
        watermarkSrc={brandIcon || undefined}
      >
        {/* Name + brand */}
        <div style={{ textAlign: "center" }}>
          <div className="font-rajdhani font-bold leading-tight"
               style={{ fontSize: 15, color: isEmpty ? "#3a4a5a" : "#ffffff" }}>
            {item.name || slotLabel}
          </div>
          {!isEmpty && item.brand && (
            <div className="font-rajdhani font-semibold"
                 style={{ fontSize: 11, color: rarColor + "cc", marginTop: 1 }}>
              {item.brand}
            </div>
          )}
        </div>

        {/* Attribute + mod icons */}
        <div className="flex items-center justify-center gap-1.5">
          {attrSlots.map((attr, i) => (
            <img key={i} src={attrIconSrc(attr)} alt={attr} title={attr}
                 width={18} height={18}
                 style={{ mixBlendMode: "screen", opacity: attr ? 0.85 : 0.2 }} />
          ))}
          {[hasMod1, hasMod2].map((filled, i) => (
            <img key={`mod-${i}`} src="/stats/blank_mod.png" alt="mod"
                 width={16} height={16}
                 style={{ mixBlendMode: "screen", opacity: filled ? 0.7 : 0.15 }} />
          ))}
        </div>
      </ItemCardTile>

      {open && (
        <CardForm isEmpty={isEmpty} rarColor={rarColor}>
          <div className="grid grid-cols-3 gap-3">
            <DivInput label="Item Name" value={item.name} onChange={v => upd("name", v)} placeholder="e.g. Tardigrade Chest" />
            <BrandPicker label="Brand / Gear Set" value={item.brand} onChange={handleBrandChange} />
            <DivSelect label="Rarity" value={item.rarity} onChange={v => upd("rarity", v as GearItem["rarity"])} options={RARITY_OPTIONS} colorFn={v => RARITY_COLORS[v]} />
          </div>

          <FormSectionLabel color="#00cc7a">Core Attribute</FormSectionLabel>
          <div className="grid grid-cols-[2fr_1fr] gap-3">
            <DivSelect value={item.coreAttr} onChange={v => upd("coreAttr", v)} options={GEAR_CORE_ATTRS} />
            <DivInput value={item.coreValue} onChange={v => upd("coreValue", v)} placeholder="e.g. 12%" />
          </div>

          <FormSectionLabel color="#00cc7a">Minor Attributes</FormSectionLabel>
          <div className="grid grid-cols-[2fr_1fr] gap-3">
            <DivSelect value={item.minor1} onChange={v => upd("minor1", v)} options={MINOR_ATTRS} />
            <DivInput value={item.minor1Val} onChange={v => upd("minor1Val", v)} placeholder="Value" />
          </div>
          <div className="grid grid-cols-[2fr_1fr] gap-3">
            <DivSelect value={item.minor2} onChange={v => upd("minor2", v)} options={MINOR_ATTRS} />
            <DivInput value={item.minor2Val} onChange={v => upd("minor2Val", v)} placeholder="Value" />
          </div>

          <FormSectionLabel color="#c8a020">Talent</FormSectionLabel>
          <DivSelect value={item.talent} onChange={v => upd("talent", v)} options={GEAR_TALENTS} />

          <FormSectionLabel color="#2a9a6a">Mod Slots</FormSectionLabel>
          <div className="grid grid-cols-2 gap-3">
            <DivSelect label="Mod Slot 1" value={item.mod1} onChange={v => upd("mod1", v)} options={GEAR_MODS} />
            <DivSelect label="Mod Slot 2" value={item.mod2} onChange={v => upd("mod2", v)} options={GEAR_MODS} />
          </div>
        </CardForm>
      )}
    </div>
  );
}
