"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import type { WeaponItem, Rarity } from "@/lib/types";
import { NAMED_WEAPONS, TALENT_MAP, UNIQUE_ATTR_MAP } from "@/lib/namedWeapons";
import type { NamedWeapon } from "@/lib/namedWeapons";
import { EXOTIC_WEAPONS, EXOTIC_TALENT_MAP, EXOTIC_WEAPON_MAP } from "@/lib/exoticWeapons";
import type { ExoticWeapon } from "@/lib/exoticWeapons";
import type { WeaponType } from "@/lib/weaponTypes";
import { WEAPON_CORE, WEAPON_FIXED_CORE_MAP, WEAPON_MINOR_ATTR_NAMES } from "@/lib/attributeData";
import { defaultWeaponItem, RARITY_COLORS, WEAPON_TALENTS } from "@/lib/gameData";
import { attrIconSrc } from "@/lib/attrUtils";
import { HIGH_END_WEAPONS } from "@/lib/highEndWeapons";
import type { HighEndWeapon } from "@/lib/highEndWeapons";

// ─── types ───────────────────────────────────────────────────────────────────

type AnyWeapon =
  | { kind: "named";   weapon: NamedWeapon   }
  | { kind: "exotic";  weapon: ExoticWeapon  }
  | { kind: "highend"; weapon: HighEndWeapon };

// ─── constants ───────────────────────────────────────────────────────────────

const WEAPON_TYPE_ORDER: WeaponType[] = [
  "Assault Rifle", "Light Machine Gun", "Submachine Gun",
  "Shotgun", "Rifle", "Marksman Rifle", "Pistol",
];

const SIDEARM_SHOTGUN_NAMES = new Set(["Backup Boomstick", "Double Barrel Sawed Off"]);

const HIGH_END_TALENT_NAMES = WEAPON_TALENTS.filter(t => !t.startsWith("Perfect "));

function allowedForSlot(slotId: string, w: { type: WeaponType; weaponName: string }): boolean {
  if (slotId !== "sidearm") return true;
  return w.type === "Pistol" || SIDEARM_SHOTGUN_NAMES.has(w.weaponName);
}

// ─── helpers ─────────────────────────────────────────────────────────────────

function buildGroups(search: string, slotId: string): { type: WeaponType; items: AnyWeapon[] }[] {
  const q = search.toLowerCase();
  return WEAPON_TYPE_ORDER.map(type => {
    const exotics = EXOTIC_WEAPONS
      .filter(w => w.type === type && allowedForSlot(slotId, w) && (!q || w.weaponName.toLowerCase().includes(q)))
      .map(w => ({ kind: "exotic" as const, weapon: w }));
    const named = NAMED_WEAPONS
      .filter(w => w.type === type && allowedForSlot(slotId, w) && (!q || w.weaponName.toLowerCase().includes(q)))
      .map(w => ({ kind: "named" as const, weapon: w }));
    const highend = HIGH_END_WEAPONS
      .filter(w => w.type === type && allowedForSlot(slotId, w) && (!q || w.weaponName.toLowerCase().includes(q)))
      .map(w => ({ kind: "highend" as const, weapon: w }));
    return { type, items: [...exotics, ...named, ...highend] };
  }).filter(g => g.items.length > 0);
}

function rarityOf(a: AnyWeapon): Rarity {
  if (a.kind === "exotic")  return "Exotic";
  if (a.kind === "highend") return "High-End";
  return "Named";
}

function resolveTalent(a: AnyWeapon): { name: string; desc: string } | null {
  if (a.kind === "exotic") {
    const t = a.weapon.talentId ? EXOTIC_TALENT_MAP.get(a.weapon.talentId) : undefined;
    return t ? { name: t.talentName, desc: t.talentDesc } : null;
  }
  if (a.kind === "highend") {
    return null;
  }
  if (a.weapon.talentId) {
    const t = TALENT_MAP.get(a.weapon.talentId);
    return t ? { name: t.talentName, desc: t.talentDesc } : null;
  }
  if (a.weapon.uniqueAttributeId) {
    const u = UNIQUE_ATTR_MAP.get(a.weapon.uniqueAttributeId);
    return u ? { name: "Unique Attribute", desc: u.attributeDesc } : null;
  }
  return null;
}

function namedHasFixedTalent(a: AnyWeapon): boolean {
  if (a.kind !== "named") return false;
  return !!(a.weapon.talentId || a.weapon.uniqueAttributeId);
}

function showTalentSelector(a: AnyWeapon): boolean {
  if (a.kind === "exotic")  return false;
  if (a.kind === "highend") return true;
  return !namedHasFixedTalent(a);
}

function initDraft(preserve?: WeaponItem): { coreValue: string; minor1: string; minor1Val: string; talent: string } {
  return {
    coreValue: preserve?.coreValue ?? "",
    minor1:    preserve?.minor1    ?? WEAPON_MINOR_ATTR_NAMES[0],
    minor1Val: preserve?.minor1Val ?? "",
    talent:    preserve?.talent1   ?? "",
  };
}

// ─── sub-components ──────────────────────────────────────────────────────────

function FieldLabel({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ fontSize: 11, letterSpacing: "0.25em", color: "#4a6a8a",
                  fontFamily: "var(--font-rajdhani)", fontWeight: 700,
                  textTransform: "uppercase", marginBottom: 6 }}>
      {children}
    </div>
  );
}

function FixedChip({ label, value }: { label: string; value?: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8,
                  background: "#080d12", border: "1px solid #1a2530",
                  padding: "5px 8px", marginBottom: 4 }}>
      <span style={{ fontSize: 13, color: "#4a6a8a", fontFamily: "var(--font-rajdhani)", flex: 1 }}>
        {label}
      </span>
      {value && (
        <span style={{ fontSize: 12, color: "#3a5a7a", fontFamily: "var(--font-rajdhani)" }}>
          {value}
        </span>
      )}
      <span style={{ fontSize: 10, color: "#2a3a4a", fontFamily: "var(--font-rajdhani)",
                     letterSpacing: "0.15em", textTransform: "uppercase" }}>
        Fixed
      </span>
    </div>
  );
}

function SmallSelect({ value, onChange, options }: {
  value: string; onChange: (v: string) => void; options: string[];
}) {
  return (
    <select
      value={value}
      onChange={e => onChange(e.target.value)}
      style={{
        background: "#0a0f15", border: "1px solid #1e2a38", color: "#c8d8e8",
        padding: "5px 8px", fontSize: 14, fontFamily: "var(--font-rajdhani)",
        outline: "none", width: "100%",
      }}
    >
      {options.map(o => <option key={o} value={o}>{o}</option>)}
    </select>
  );
}

function SmallInput({ value, onChange, placeholder }: {
  value: string; onChange: (v: string) => void; placeholder?: string;
}) {
  return (
    <input
      value={value}
      onChange={e => onChange(e.target.value)}
      placeholder={placeholder}
      style={{
        background: "#0a0f15", border: "1px solid #1e2a38", color: "#c8d8e8",
        padding: "5px 8px", fontSize: 14, fontFamily: "var(--font-rajdhani)",
        outline: "none", width: "100%",
      }}
    />
  );
}

function AttrSelect({ value, onChange, options, series }: {
  value:    string;
  onChange: (v: string) => void;
  options:  string[];
  series:   1 | 2 | 3;
}) {
  const [open,       setOpen]       = useState(false);
  const [dropRect,   setDropRect]   = useState<DOMRect | null>(null);
  const [hoveredOpt, setHoveredOpt] = useState<string | null>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const close = () => setOpen(false);
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, [open]);

  function handleToggle() {
    if (!open && triggerRef.current) setDropRect(triggerRef.current.getBoundingClientRect());
    setOpen(o => !o);
  }

  const iconAttr    = value || options[0] || "";
  const displayText = value || options[0] || "";

  return (
    <div>
      <div
        ref={triggerRef}
        onClick={handleToggle}
        style={{
          display: "flex", alignItems: "center", gap: 8,
          background: open ? "#111820" : "#0d1117",
          border: `1px solid ${open ? "#2a4a6a" : "#1e2a38"}`,
          padding: "7px 10px", cursor: "pointer",
        }}
      >
        <img src={attrIconSrc(iconAttr, series)} alt="" width={16} height={16}
             style={{ mixBlendMode: "screen", opacity: 0.85, flexShrink: 0 }} />
        <span style={{ flex: 1, fontSize: 14, color: "#c8d8e8",
                       fontFamily: "var(--font-rajdhani)" }}>
          {displayText}
        </span>
        <span style={{ color: "#3a5a7a", fontSize: 10, lineHeight: 1 }}>▾</span>
      </div>

      {open && dropRect && createPortal(
        <div
          onMouseDown={e => e.stopPropagation()}
          style={{
            position: "fixed",
            top: dropRect.bottom + 2, left: dropRect.left, width: dropRect.width,
            zIndex: 9999, background: "#0d1117", border: "1px solid #2a4a6a",
            maxHeight: 220, overflowY: "auto",
          }}
        >
          {options.map(opt => {
            const isSelected = opt === value;
            const isHovered  = opt === hoveredOpt;
            return (
              <div
                key={opt}
                onMouseDown={() => { onChange(opt); setOpen(false); }}
                onMouseEnter={() => setHoveredOpt(opt)}
                onMouseLeave={() => setHoveredOpt(null)}
                style={{
                  display: "flex", alignItems: "center", gap: 8,
                  padding: "6px 10px", cursor: "pointer",
                  background: isSelected ? "#1a2a3a" : isHovered ? "#0f1a26" : "transparent",
                  color: isSelected ? "#fff" : "#c8d8e8",
                }}
              >
                <img src={attrIconSrc(opt, series)} alt="" width={16} height={16}
                     style={{ mixBlendMode: "screen", opacity: 0.85, flexShrink: 0 }} />
                <span style={{ fontSize: 14, fontFamily: "var(--font-rajdhani)" }}>{opt}</span>
              </div>
            );
          })}
        </div>,
        document.body
      )}
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
        color: disabled ? "#2a3a4a" : "#9ab8d0",
        padding: "5px 16px", fontSize: 13, letterSpacing: "0.15em",
        fontFamily: "var(--font-rajdhani)", fontWeight: 700,
        textTransform: "uppercase", cursor: disabled ? "default" : "pointer",
      }}
    >
      {children}
    </button>
  );
}

// ─── main modal ──────────────────────────────────────────────────────────────

interface Props {
  slotId:    string;
  slotLabel: string;
  current:   WeaponItem;
  onConfirm: (item: WeaponItem) => void;
  onClose:   () => void;
}

export default function WeaponPickerModal({ slotId, slotLabel, current, onConfirm, onClose }: Props) {
  const [search,      setSearch]      = useState("");
  const [typeFilter,  setTypeFilter]  = useState<WeaponType | "">("");
  const [hoveredId,   setHoveredId]   = useState<string | null>(null);

  const [selected, setSelected] = useState<AnyWeapon | null>(() => {
    const exotic = EXOTIC_WEAPONS.find(w => w.weaponName === current.name);
    if (exotic) return { kind: "exotic", weapon: exotic };
    const named = NAMED_WEAPONS.find(w => w.weaponName === current.name);
    if (named) return { kind: "named", weapon: named };
    const highend = HIGH_END_WEAPONS.find(w => w.weaponName === current.name);
    if (highend) return { kind: "highend", weapon: highend };
    return null;
  });

  const [draft, setDraft] = useState(() =>
    initDraft(selected ? current : undefined)
  );

  const groups    = useMemo(() => buildGroups(search, slotId).filter(g => !typeFilter || g.type === typeFilter), [search, slotId, typeFilter]);
  const rarColor  = selected ? RARITY_COLORS[rarityOf(selected)] : "#f5c518";
  const talent    = selected ? resolveTalent(selected) : null;
  const fixedCore = selected ? WEAPON_FIXED_CORE_MAP.get(selected.weapon.type) : null;

  function selectWeapon(a: AnyWeapon) {
    setSelected(a);
    const isSame = a.weapon.weaponName === current.name;
    setDraft(initDraft(isSame ? current : undefined));
  }

  const upd = (k: keyof ReturnType<typeof initDraft>, v: string) =>
    setDraft(d => ({ ...d, [k]: v }));

  function handleConfirm() {
    if (!selected) return;
    let talent1 = "";
    let scope = "", barrel = "", underbarrel = "", magazine = "";

    if (selected.kind === "exotic") {
      const ew = selected.weapon;
      const t = ew.talentId ? EXOTIC_TALENT_MAP.get(ew.talentId) : undefined;
      talent1     = t?.talentName ?? "";
      scope       = ew.fixedMods.optics      ?? "";
      barrel      = ew.fixedMods.muzzle       ?? "";
      underbarrel = ew.fixedMods.underbarrel  ?? "";
      magazine    = ew.fixedMods.magazine     ?? "";
    } else if (selected.kind === "named") {
      const nw = selected.weapon;
      if (nw.talentId) {
        const t = TALENT_MAP.get(nw.talentId);
        talent1 = t?.talentName ?? "";
      } else if (nw.uniqueAttributeId) {
        const u = UNIQUE_ATTR_MAP.get(nw.uniqueAttributeId);
        talent1 = u?.attributeDesc ?? "";
      } else {
        talent1 = draft.talent;
      }
    } else {
      talent1 = draft.talent;
    }

    const w = selected.weapon;
    onConfirm({
      name:       w.weaponName,
      rarity:     rarityOf(selected),
      weaponType: w.type,
      coreAttr:   WEAPON_CORE.name,
      coreValue:  draft.coreValue,
      minor1:    draft.minor1,    minor1Val: draft.minor1Val,
      talent1,   talent2: "",
      scope, barrel, underbarrel, magazine,
    });
    onClose();
  }

  return (
    <div
      style={{ position: "fixed", inset: 0, zIndex: 100, background: "rgba(0,0,0,0.78)",
               display: "flex", alignItems: "center", justifyContent: "center" }}
      onClick={onClose}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          width: "min(1060px, 96vw)", height: "min(720px, 94vh)",
          background: "#060b10", border: "1px solid #1a2530",
          borderLeft: `4px solid ${rarColor}`,
          display: "flex", flexDirection: "column", overflow: "hidden",
        }}
      >
        {/* Header */}
        <div style={{ padding: "10px 16px", borderBottom: "1px solid #1a2530",
                      display: "flex", alignItems: "center", gap: 12 }}>
          <span className="font-rajdhani font-bold tracking-[0.25em] uppercase"
                style={{ fontSize: 14, color: rarColor }}>
            {slotLabel}
          </span>
          <div style={{ flex: 1 }} />
          <button onClick={onClose}
                  style={{ color: "#4a6a8a", fontSize: 18, background: "none",
                           border: "none", cursor: "pointer", lineHeight: 1 }}>✕</button>
        </div>

        {/* Body */}
        <div style={{ flex: 1, display: "flex", overflow: "hidden" }}>

          {/* Left: weapon list */}
          <div style={{ width: 340, borderRight: "1px solid #1a2530",
                        display: "flex", flexDirection: "column", flexShrink: 0 }}>
            <div style={{ padding: "8px 10px", borderBottom: "1px solid #0e1a24", display: "flex", flexDirection: "column", gap: 6 }}>
              <input
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Search weapons…"
                style={{
                  width: "100%", background: "#0a0f15", border: "1px solid #1a2530",
                  color: "#c8d8e8", padding: "5px 8px", fontSize: 13,
                  fontFamily: "var(--font-rajdhani)", outline: "none",
                }}
              />
              <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
                {(["", ...WEAPON_TYPE_ORDER] as (WeaponType | "")[]).map(t => {
                  const label   = t === "" ? "All" : t;
                  const active  = typeFilter === t;
                  return (
                    <button
                      key={label}
                      onClick={() => setTypeFilter(t)}
                      style={{
                        padding: "2px 8px", fontSize: 11,
                        fontFamily: "var(--font-rajdhani)", fontWeight: 700,
                        letterSpacing: "0.1em", textTransform: "uppercase",
                        background: active ? "#0e1e2e" : "transparent",
                        border: `1px solid ${active ? "#3a6a9a" : "#1a2a3a"}`,
                        color: active ? "#8ab8d8" : "#3a5a7a",
                        cursor: "pointer",
                      }}
                    >
                      {label === "Light Machine Gun" ? "LMG"
                       : label === "Submachine Gun"  ? "SMG"
                       : label === "Assault Rifle"   ? "AR"
                       : label === "Marksman Rifle"  ? "MR"
                       : label}
                    </button>
                  );
                })}
              </div>
            </div>

            <div style={{ overflowY: "auto", flex: 1 }}>
              {groups.map(group => (
                <div key={group.type}>
                  <div style={{ padding: "6px 10px 2px", fontSize: 11, letterSpacing: "0.25em",
                                color: "#3a5a7a", fontFamily: "var(--font-rajdhani)",
                                fontWeight: 700, textTransform: "uppercase" }}>
                    {group.type}
                  </div>
                  {group.items.map(a => {
                    const id         = a.weapon.weaponId;
                    const isSelected = selected?.weapon.weaponId === id;
                    const isHovered  = hoveredId === id;
                    const rc         = RARITY_COLORS[rarityOf(a)];
                    return (
                      <div
                        key={id}
                        onClick={() => selectWeapon(a)}
                        onMouseEnter={() => setHoveredId(id)}
                        onMouseLeave={() => setHoveredId(null)}
                        style={{
                          padding: "7px 12px 7px 14px", cursor: "pointer",
                          background: isSelected ? "#06121e" : isHovered ? "#080e16" : "transparent",
                          borderLeft: `2px solid ${isSelected ? rc : "transparent"}`,
                          display: "flex", flexDirection: "column", gap: 2,
                        }}
                      >
                        <span style={{ fontSize: 17, fontWeight: 600,
                                       color: isSelected ? "#fff" : "#7a9ab0",
                                       fontFamily: "var(--font-rajdhani)" }}>
                          {a.weapon.weaponName}
                        </span>
                        <span style={{ fontSize: 13, color: rc + "99",
                                       fontFamily: "var(--font-rajdhani)", letterSpacing: "0.05em" }}>
                          {rarityOf(a)}
                        </span>
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>

          {/* Right: details + rollable attrs */}
          <div style={{ flex: 1, overflowY: "auto", padding: "16px 20px" }}>
            {!selected ? (
              <div style={{ color: "#2a4a6a", fontFamily: "var(--font-rajdhani)",
                            fontSize: 15, marginTop: 60, textAlign: "center" }}>
                Select a weapon from the list
              </div>
            ) : (
              <>
                {/* Name + meta */}
                <div style={{ marginBottom: 14 }}>
                  <div style={{ fontSize: 22, fontWeight: 700, color: "#fff",
                                fontFamily: "var(--font-rajdhani)", letterSpacing: "0.05em" }}>
                    {selected.weapon.weaponName}
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 4, flexWrap: "wrap" }}>
                    <span style={{ fontSize: 13, fontWeight: 700, color: rarColor,
                                   fontFamily: "var(--font-rajdhani)", letterSpacing: "0.15em",
                                   textTransform: "uppercase" }}>
                      {rarityOf(selected)}
                    </span>
                    <span style={{ fontSize: 13, color: "#4a6a8a", fontFamily: "var(--font-rajdhani)" }}>
                      {selected.weapon.type}
                    </span>
                    {"dropLocation" in selected.weapon && selected.weapon.dropLocation && (
                      <span style={{ fontSize: 12, color: "#2a4a6a", fontFamily: "var(--font-rajdhani)" }}>
                        {selected.weapon.dropLocation}
                      </span>
                    )}
                  </div>
                </div>

                {/* Talent / unique attribute (fixed — named/exotic) */}
                {talent && (
                  <div style={{ marginBottom: 14, padding: "10px 12px",
                                background: "#080d12", border: "1px solid #1a2530",
                                borderLeft: `3px solid ${rarColor}44` }}>
                    <div style={{ fontSize: 11, letterSpacing: "0.25em", color: rarColor,
                                  fontFamily: "var(--font-rajdhani)", fontWeight: 700,
                                  textTransform: "uppercase", marginBottom: 6 }}>
                      {talent.name}
                    </div>
                    <div style={{ fontSize: 13, color: "#7a9ab0", lineHeight: 1.5,
                                  fontFamily: "var(--font-rajdhani)" }}>
                      {talent.desc}
                    </div>
                  </div>
                )}

                {/* Exotic fixed mods */}
                {selected.kind === "exotic" && (
                  (() => {
                    const mods = selected.weapon.fixedMods;
                    const entries = Object.entries(mods).filter(([, v]) => v);
                    return entries.length > 0 ? (
                      <div style={{ marginBottom: 14 }}>
                        <FieldLabel>Fixed Mods</FieldLabel>
                        {entries.map(([slot, val]) => (
                          <FixedChip key={slot} label={slot.charAt(0).toUpperCase() + slot.slice(1)} value={val} />
                        ))}
                      </div>
                    ) : null;
                  })()
                )}

                <div style={{ height: 1, background: "#0e1a24", margin: "12px 0" }} />

                {/* Core attribute */}
                <FieldLabel>Core Attribute</FieldLabel>
                <FixedChip label={WEAPON_CORE.name} value={`max ${WEAPON_CORE.max}`} />
                {fixedCore && (
                  <FixedChip label={fixedCore.attribute} value={`max ${fixedCore.max}`} />
                )}
                <div style={{ marginBottom: 12, marginTop: 4 }}>
                  <SmallInput
                    value={draft.coreValue}
                    onChange={v => upd("coreValue", v)}
                    placeholder={`Weapon Damage value (max ${WEAPON_CORE.max})`}
                  />
                </div>

                {/* Minor attribute */}
                <FieldLabel>Minor Attribute</FieldLabel>
                <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 8, marginBottom: 10 }}>
                  <AttrSelect value={draft.minor1} onChange={v => upd("minor1", v)} options={WEAPON_MINOR_ATTR_NAMES} series={2} />
                  <SmallInput value={draft.minor1Val} onChange={v => upd("minor1Val", v)} placeholder="Value" />
                </div>

                {/* Talent selector (high-end or named with no fixed talent) */}
                {showTalentSelector(selected) && (
                  <>
                    <FieldLabel>Talent</FieldLabel>
                    <div style={{ marginBottom: 10 }}>
                      <SmallSelect
                        value={draft.talent}
                        onChange={v => upd("talent", v)}
                        options={["", ...HIGH_END_TALENT_NAMES]}
                      />
                    </div>
                  </>
                )}
              </>
            )}
          </div>
        </div>

        {/* Footer */}
        <div style={{ padding: "10px 16px", borderTop: "1px solid #1a2530",
                      display: "flex", gap: 8, justifyContent: "flex-end" }}>
          <FBtn color="#3a5a7a" onClick={() => { onConfirm(defaultWeaponItem()); onClose(); }}>
            Clear Slot
          </FBtn>
          <FBtn color="#3a5a7a" onClick={onClose}>Cancel</FBtn>
          <FBtn color={rarColor} disabled={!selected} onClick={handleConfirm}>
            Confirm
          </FBtn>
        </div>
      </div>
    </div>
  );
}
