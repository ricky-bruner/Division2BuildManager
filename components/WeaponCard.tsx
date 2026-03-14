"use client";

import { useState } from "react";
import type { WeaponItem } from "@/lib/types";
import {
  WEAPON_CORE_ATTRS, MINOR_ATTRS, WEAPON_TALENTS,
  WEAPON_MODS, RARITY_OPTIONS, RARITY_COLORS, RARITY_BG,
} from "@/lib/gameData";
import { attrIconSrc } from "@/lib/attrUtils";
import DivSelect        from "./ui/DivSelect";
import DivInput         from "./ui/DivInput";
import ItemCardTile     from "./ui/ItemCardTile";
import CardForm         from "./ui/CardForm";
import FormSectionLabel from "./ui/FormSectionLabel";

const SLOT_IMAGES: Record<string, string> = {
  primary:   "/generic/main-weapon.png",
  secondary: "/generic/main-weapon.png",
  sidearm:   "/generic/sidearm.png",
};

interface Props {
  slotId:    string;
  slotLabel: string;
  item:      WeaponItem;
  onChange:  (item: WeaponItem) => void;
}

export default function WeaponCard({ slotId, slotLabel, item, onChange }: Props) {
  const [open, setOpen] = useState(false);

  const isEmpty  = !item.name;
  const rarColor = RARITY_COLORS[item.rarity] ?? "#f5c518";

  const upd = <K extends keyof WeaponItem>(field: K, val: WeaponItem[K]) =>
    onChange({ ...item, [field]: val });

  const hasScope  = item.scope       && item.scope       !== "None";
  const hasBarrel = item.barrel      && item.barrel      !== "None";
  const hasUnder  = item.underbarrel && item.underbarrel !== "None";
  const hasMag    = item.magazine    && item.magazine    !== "None";

  const heroSlot = (
    <img
      src={SLOT_IMAGES[slotId] ?? SLOT_IMAGES.primary}
      alt={slotLabel}
      style={{
        position:        "absolute",
        right:           10,
        top:             "50%",
        transform:       "translateY(-50%)",
        height:          66,
        width:           130,
        objectFit:       "contain",
        objectPosition:  "right center",
        mixBlendMode:    "screen",
        opacity:         isEmpty ? 0.15 : 0.7,
        pointerEvents:   "none",
        zIndex:          2,
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
        contentPaddingRight={140}
      >
        {/* Name + core attr */}
        <div style={{ textAlign: "center" }}>
          <div className="font-rajdhani font-bold leading-tight"
               style={{ fontSize: 15, color: isEmpty ? "#3a4a5a" : "#ffffff" }}>
            {item.name || slotLabel}
          </div>
          {!isEmpty && item.coreAttr && (
            <div className="font-rajdhani font-semibold"
                 style={{ fontSize: 11, color: rarColor + "cc", marginTop: 1 }}>
              {item.coreAttr}{item.coreValue ? ` · ${item.coreValue}` : ""}
            </div>
          )}
        </div>

        {/* Attr + mod icons */}
        <div className="flex items-center justify-center gap-1.5">
          {[item.minor1, item.minor2].map((attr, i) => (
            <img key={i} src={attrIconSrc(attr)} alt={attr} title={attr}
                 width={18} height={18}
                 style={{ mixBlendMode: "screen", opacity: attr ? 0.85 : 0.2 }} />
          ))}
          {[hasScope, hasBarrel, hasUnder, hasMag].map((filled, i) => (
            <img key={`mod-${i}`} src="/stats/blank_mod.png" alt="mod"
                 width={14} height={14}
                 style={{ mixBlendMode: "screen", opacity: filled ? 0.7 : 0.15 }} />
          ))}
        </div>
      </ItemCardTile>

      {open && (
        <CardForm isEmpty={isEmpty} rarColor={rarColor}>
          <div className="grid grid-cols-2 gap-3">
            <DivInput label="Weapon Name" value={item.name} onChange={v => upd("name", v)} placeholder="e.g. The Chatterbox" />
            <DivSelect label="Rarity" value={item.rarity} onChange={v => upd("rarity", v as WeaponItem["rarity"])} options={RARITY_OPTIONS} colorFn={v => RARITY_COLORS[v]} />
          </div>

          <FormSectionLabel color="#00cc7a">Core Attribute</FormSectionLabel>
          <div className="grid grid-cols-[2fr_1fr] gap-3">
            <DivSelect value={item.coreAttr} onChange={v => upd("coreAttr", v)} options={WEAPON_CORE_ATTRS} />
            <DivInput value={item.coreValue} onChange={v => upd("coreValue", v)} placeholder="e.g. 72,000" />
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

          <FormSectionLabel color="#c8a020">Talents</FormSectionLabel>
          <div className="grid grid-cols-2 gap-3">
            <DivSelect label="Talent 1" value={item.talent1} onChange={v => upd("talent1", v)} options={WEAPON_TALENTS} />
            <DivSelect label="Talent 2" value={item.talent2} onChange={v => upd("talent2", v)} options={WEAPON_TALENTS} />
          </div>

          <FormSectionLabel color="#2a9a6a">Weapon Mods</FormSectionLabel>
          <div className="grid grid-cols-2 gap-3">
            <DivSelect label="Scope"       value={item.scope}       onChange={v => upd("scope", v)}       options={WEAPON_MODS.Scope}       />
            <DivSelect label="Barrel"      value={item.barrel}      onChange={v => upd("barrel", v)}      options={WEAPON_MODS.Barrel}      />
            <DivSelect label="Underbarrel" value={item.underbarrel} onChange={v => upd("underbarrel", v)} options={WEAPON_MODS.Underbarrel} />
            <DivSelect label="Magazine"    value={item.magazine}    onChange={v => upd("magazine", v)}    options={WEAPON_MODS.Magazine}    />
          </div>
        </CardForm>
      )}
    </div>
  );
}
