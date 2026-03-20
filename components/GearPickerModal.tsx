"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import type { GearSlot, GearBuildSlot, GearMinorValue, TinkeredSlot } from "@/lib/types";
import type { NamedGearItem } from "@/lib/namedGear";
import { namedGearForSlot, highEndGearForSlot, gearSetGearForSlot } from "@/lib/namedGear";
import { GEAR_TALENT_LIST } from "@/lib/gearTalents";
import { GEAR_CORE_ATTR_NAMES, GEAR_MINOR_ATTRS, GEAR_MOD_ATTRS } from "@/lib/attributeData";
import {
  resolveGearItem, getEditableSlots, defaultGearBuildSlot,
} from "@/lib/buildUtils";
import type { EditableSlotInfo } from "@/lib/buildUtils";
import DivSelect from "./ui/DivSelect";
import DivInput  from "./ui/DivInput";
import { RARITY_COLORS, BRANDS, GEAR_SETS } from "@/lib/gameData";
import { attrIconSrc, OFFENSE_ATTRS, DEFENSE_ATTRS, SKILL_ATTRS } from "@/lib/attrUtils";

// ─── Brand / gear-set icon lookup ─────────────────────────────────────────────

const BRAND_ICON_MAP = new Map<string, string>([
  ...BRANDS.map(b => [b.name, b.icon] as [string, string]),
  ...GEAR_SETS.map(g => [g.name, g.icon] as [string, string]),
]);

function brandIcon(brand: string): string {
  return BRAND_ICON_MAP.get(brand) ?? "";
}

// ─── Talent option lists ──────────────────────────────────────────────────────

const GENERAL_TALENT_OPTIONS = GEAR_TALENT_LIST
  .filter(t => t.talentType === "generalGear")
  .map(t => ({ value: t.talentId, label: t.talentName }));

const TINKER_TALENT_OPTIONS = GENERAL_TALENT_OPTIONS;

const MINOR_ATTR_NAMES = GEAR_MINOR_ATTRS.map(a => a.name);
const MOD_ATTR_NAMES   = GEAR_MOD_ATTRS.map(a => a.name);

// ─── Helper: build initial draft from item def ───────────────────────────────

function coreCategory(attr: string): "offense" | "defense" | "skill" | null {
  if (OFFENSE_ATTRS.has(attr)) return "offense";
  if (DEFENSE_ATTRS.has(attr)) return "defense";
  if (SKILL_ATTRS.has(attr))   return "skill";
  return null;
}

function orderedMinorPool(cat: "offense" | "defense" | "skill" | null, exclude?: string[]): string[] {
  const setFor = { offense: OFFENSE_ATTRS, defense: DEFENSE_ATTRS, skill: SKILL_ATTRS };
  const set = cat ? setFor[cat] : null;
  const matching = set ? MINOR_ATTR_NAMES.filter(a => set.has(a))  : [];
  const rest     = set ? MINOR_ATTR_NAMES.filter(a => !set.has(a)) : MINOR_ATTR_NAMES;
  const pool = [...matching, ...rest];
  return exclude ? pool.filter(a => !exclude.includes(a)) : pool;
}

function initDraft(def: NamedGearItem, info: EditableSlotInfo): GearBuildSlot {
  // Core — default rollable to first option
  const coreAttr = (() => {
    if ("allCores" in info.core && info.core.allCores) return "";
    if (info.core.locked) return (info.core as { name: string }).name;
    return GEAR_CORE_ATTR_NAMES[0];
  })();

  // Minors — pick by category match to core, respecting dedup
  const cat = coreCategory(coreAttr);
  const used = new Set<string>();
  const minors = info.minors.map(m => {
    if (m.locked) { used.add(m.name); return { attr: m.name, value: m.value }; }
    const pool = orderedMinorPool(cat, m.exclude);
    const pick = pool.find(a => !used.has(a)) ?? "";
    if (pick) used.add(pick);
    return { attr: pick, value: "" };
  });

  let talent = "";
  if (def.talent?.type === "fixed")    talent = def.talent.talentId;
  if (def.talent?.type === "gear-set") talent = `${def.talent.setId}-${def.slot}`;

  return {
    gearId:   def.gearId,
    coreAttr,
    minors,
    talent,
    modAttrs: Array(def.modSlots).fill(null).map(() => ({ attr: MOD_ATTR_NAMES[0] ?? "", value: "" })),
  };
}

// ─── Props ────────────────────────────────────────────────────────────────────

interface Props {
  slot:      GearSlot;
  current:   GearBuildSlot;
  onConfirm: (slot: GearBuildSlot) => void;
  onClose:   () => void;
}

// ─────────────────────────────────────────────────────────────────────────────

export default function GearPickerModal({ slot, current, onConfirm, onClose }: Props) {
  const namedItems   = useMemo(() => namedGearForSlot(slot),   [slot]);
  const highEndItems = useMemo(() => highEndGearForSlot(slot), [slot]);
  const gearSetItems = useMemo(() => gearSetGearForSlot(slot), [slot]);

  const initialDef = current.gearId ? resolveGearItem(current.gearId) : undefined;

  const [selectedId,    setSelectedId]    = useState<string>(current.gearId);
  const [draft,         setDraft]         = useState<GearBuildSlot | null>(initialDef ? { ...current } : null);
  const [tinkeredSlot,  setTinkeredSlot]  = useState<TinkeredSlot | undefined>(current.tinkeredSlot);
  const [search,        setSearch]        = useState("");
  const [hoveredId,     setHoveredId]     = useState<string | null>(null);

  const selectedDef   = selectedId ? resolveGearItem(selectedId) : undefined;
  const info          = selectedDef ? getEditableSlots(selectedDef) : undefined;
  const borderColor   = selectedDef ? (RARITY_COLORS[selectedDef.rarity] ?? "#f5c518") : "#f5c518";
  const canRcfCore    = selectedDef?.rarity !== "Exotic";
  const canRcfTalent  = selectedDef?.rarity !== "Exotic" && selectedDef?.rarity !== "Named" && selectedDef?.rarity !== "Gear Set";

  function selectItem(def: NamedGearItem) {
    const i = getEditableSlots(def);
    setSelectedId(def.gearId);
    setDraft(initDraft(def, i));
    setTinkeredSlot(undefined);
  }

  function updateDraft(patch: Partial<GearBuildSlot>) {
    setDraft(prev => prev ? { ...prev, ...patch } : prev);
  }

  function updateMinor(idx: number, field: keyof GearMinorValue, val: string) {
    if (!draft) return;
    const minors = draft.minors.map((m, i) => i === idx ? { ...m, [field]: val } : m);
    setDraft({ ...draft, minors });
  }

  function updateMod(idx: number, field: keyof GearMinorValue, val: string) {
    if (!draft) return;
    const modAttrs = draft.modAttrs.map((m, i) => i === idx ? { ...m, [field]: val } : m);
    setDraft({ ...draft, modAttrs });
  }

  function toggleTinker(ts: TinkeredSlot) {
    setTinkeredSlot(prev => prev === ts ? undefined : ts);
  }

  const filterStr = search.toLowerCase();
  const filtered  = (items: NamedGearItem[]) =>
    filterStr ? items.filter(i => i.gearName.toLowerCase().includes(filterStr)) : items;

  const exoticItems = namedItems.filter(i => i.rarity === "Exotic");
  const namedOnly   = namedItems.filter(i => i.rarity !== "Exotic");

  const groups = [
    { label: "Exotic",    items: filtered(exoticItems)  },
    { label: "Named",     items: filtered(namedOnly)    },
    { label: "Gear Set",  items: filtered(gearSetItems) },
    { label: "High-End",  items: filtered(highEndItems) },
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
          width: "min(920px, 96vw)", height: "min(700px, 92vh)",
          background: "#060b10", border: "1px solid #1a2530",
          borderLeft: `4px solid ${borderColor}`,
          display: "flex", flexDirection: "column", overflow: "hidden",
          transition: "border-left-color 0.15s ease",
        }}
      >
        {/* Header */}
        <div style={{ padding: "10px 16px", borderBottom: "1px solid #1a2530",
                      display: "flex", alignItems: "center", gap: 12 }}>
          <span className="font-rajdhani font-bold tracking-[0.25em] uppercase"
                style={{ fontSize: 14, color: borderColor, transition: "color 0.15s ease" }}>
            Select {slot}
          </span>
          <div style={{ flex: 1 }} />
          <button onClick={onClose}
                  style={{ color: "#4a6a8a", fontSize: 18, background: "none",
                           border: "none", cursor: "pointer", lineHeight: 1 }}>✕</button>
        </div>

        {/* Body */}
        <div style={{ flex: 1, display: "flex", overflow: "hidden" }}>

          {/* ── Left: item list ── */}
          <div style={{ width: 340, borderRight: "1px solid #1a2530",
                        display: "flex", flexDirection: "column", flexShrink: 0 }}>
            <div style={{ padding: "7px 10px", borderBottom: "1px solid #1a2530" }}>
              <input
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Search…"
                style={{ width: "100%", background: "#0a0f15", border: "1px solid #1a2530",
                         color: "#c8d0d8", padding: "4px 8px", fontSize: 13,
                         fontFamily: "var(--font-rajdhani)", outline: "none" }}
              />
            </div>
            <div style={{ flex: 1, overflowY: "auto" }}>
              {groups.map(group => group.items.length === 0 ? null : (
                <div key={group.label}>
                  <div style={{ padding: "7px 10px 3px", fontSize: 11, letterSpacing: "0.25em",
                                color: "#3a5a7a", fontFamily: "var(--font-rajdhani)",
                                fontWeight: 700, textTransform: "uppercase" }}>
                    {group.label}
                  </div>
                  {group.items.map(def => {
                    const isSelected = def.gearId === selectedId;
                    const isHovered  = def.gearId === hoveredId && !isSelected;
                    const rc  = RARITY_COLORS[def.rarity] ?? "#f5c518";
                    const ico = brandIcon(def.brand);
                    return (
                      <div
                        key={def.gearId}
                        onClick={() => selectItem(def)}
                        onMouseEnter={() => setHoveredId(def.gearId)}
                        onMouseLeave={() => setHoveredId(null)}
                        style={{
                          padding: "9px 12px", cursor: "pointer",
                          background: isSelected ? "#0d1e2e" : isHovered ? "#0a1520" : "transparent",
                          borderLeft: `2px solid ${isSelected ? rc : isHovered ? rc + "66" : "transparent"}`,
                          display: "flex", alignItems: "center", gap: 8,
                          transition: "background 0.1s ease",
                        }}
                      >
                        {ico && (
                          <img
                            src={ico}
                            alt=""
                            width={36} height={36}
                            style={{ objectFit: "contain", flexShrink: 0,
                                     mixBlendMode: "screen", opacity: isSelected ? 0.9 : isHovered ? 0.7 : 0.45 }}
                          />
                        )}
                        <div style={{ minWidth: 0 }}>
                          <div style={{ fontSize: 17, fontWeight: 600, lineHeight: 1.25,
                                        color: isSelected ? "#fff" : isHovered ? "#d0e4f0" : "#b0c8d8",
                                        fontFamily: "var(--font-rajdhani)",
                                        overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                            {def.gearName}
                          </div>
                          <div style={{ fontSize: 13, color: rc, opacity: isSelected ? 1 : 0.9,
                                        fontFamily: "var(--font-rajdhani)" }}>
                            {def.brand || def.rarity}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: attribute config ── */}
          <div style={{ flex: 1, overflowY: "auto", padding: "14px 18px" }}>
            {!selectedDef || !info || !draft ? (
              <div style={{ color: "#2a4a6a", fontFamily: "var(--font-rajdhani)",
                            fontSize: 15, marginTop: 50, textAlign: "center" }}>
                Select an item from the list
              </div>
            ) : (
              <>
                {/* Item header */}
                <div style={{ marginBottom: 14 }}>
                  <div style={{ fontSize: 22, fontWeight: 700, letterSpacing: "0.05em",
                                color: RARITY_COLORS[selectedDef.rarity] ?? "#f5c518",
                                fontFamily: "var(--font-rajdhani)" }}>
                    {selectedDef.gearName}
                  </div>
                  {selectedDef.brand && (
                    <div style={{ fontSize: 15, color: "#6a8a9a",
                                  fontFamily: "var(--font-rajdhani)" }}>
                      {selectedDef.brand}
                    </div>
                  )}
                </div>

                {/* Core */}
                <FieldLabel>Core Attribute</FieldLabel>
                {info.core.locked ? (
                  "allCores" in info.core && info.core.allCores ? (
                    <div style={{ display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" }}>
                      {["Weapon Damage", "Armor", "Skill Tier"].map(c => (
                        <div key={c} style={{ display: "flex", alignItems: "center", gap: 5 }}>
                          <AttrIcon attr={c} series={1} />
                          <FixedChip>{c}</FixedChip>
                        </div>
                      ))}
                      {canRcfCore && (
                        <RcfBadge
                          active={tinkeredSlot === "core"}
                          disabled={!!tinkeredSlot && tinkeredSlot !== "core"}
                          onToggle={() => toggleTinker("core")}
                        />
                      )}
                    </div>
                  ) : (
                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <AttrIcon attr={(info.core as { name: string }).name} series={1} />
                      <FixedChip>{(info.core as { name: string }).name}</FixedChip>
                      {canRcfCore && (
                        <RcfBadge
                          active={tinkeredSlot === "core"}
                          disabled={!!tinkeredSlot && tinkeredSlot !== "core"}
                          onToggle={() => toggleTinker("core")}
                        />
                      )}
                    </div>
                  )
                ) : (
                  <AttrSelect
                    value={draft.coreAttr}
                    onChange={v => updateDraft({ coreAttr: v })}
                    options={GEAR_CORE_ATTR_NAMES}
                    series={1}
                  />
                )}
                {tinkeredSlot === "core" && (
                  <div style={{ marginTop: 6 }}>
                    <AttrSelect
                      value={draft.coreAttr}
                      onChange={v => updateDraft({ coreAttr: v })}
                      options={GEAR_CORE_ATTR_NAMES}
                      series={1}
                    />
                  </div>
                )}

                {/* Minors */}
                {info.minors.length > 0 && (
                  <>
                    <FieldLabel>Minor Attributes</FieldLabel>
                    {info.minors.map((m, i) => {
                      const tk = (i === 0 ? "minor0" : "minor1") as TinkeredSlot;
                      const isTinkered = tinkeredSlot === tk;
                      const usedByOthers = new Set(
                        draft!.minors.filter((_, j) => j !== i).map(m => m.attr).filter(Boolean)
                      );
                      const baseOpts = m.locked
                        ? MINOR_ATTR_NAMES
                        : m.exclude
                          ? GEAR_MINOR_ATTRS.filter(a => !m.exclude!.includes(a.name)).map(a => a.name)
                          : MINOR_ATTR_NAMES;
                      const minorOpts = baseOpts.filter(a => !usedByOthers.has(a));

                      return (
                        <div key={i} style={{ marginBottom: 6 }}>
                          {m.locked && !isTinkered ? (
                            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                              <AttrIcon attr={m.name} series={2} />
                              <FixedChip>{m.name}</FixedChip>
                              <span style={{ fontSize: 13, color: "#6a8a9a",
                                             fontFamily: "var(--font-rajdhani)" }}>
                                {m.value}
                              </span>
                              <RcfBadge
                                active={isTinkered}
                                disabled={!!tinkeredSlot && tinkeredSlot !== tk}
                                onToggle={() => toggleTinker(tk)}
                              />
                            </div>
                          ) : (
                            <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
                              <div style={{ flex: 2 }}>
                                <AttrSelect
                                  value={draft.minors[i]?.attr ?? ""}
                                  onChange={v => updateMinor(i, "attr", v)}
                                  options={minorOpts}
                                  series={2}
                                />
                              </div>
                              <div style={{ flex: 1 }}>
                                <DivInput
                                  value={draft.minors[i]?.value ?? ""}
                                  onChange={v => updateMinor(i, "value", v)}
                                  placeholder="Value"
                                />
                              </div>
                              {m.locked && (
                                <RcfBadge
                                  active={isTinkered}
                                  disabled={!!tinkeredSlot && tinkeredSlot !== tk}
                                  onToggle={() => toggleTinker(tk)}
                                />
                              )}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </>
                )}

                {/* Talent */}
                {info.talent !== null && (
                  <>
                    <FieldLabel>Talent</FieldLabel>
                    {info.talent.locked ? (
                      <div>
                        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                          <FixedChip>{info.talent.name}</FixedChip>
                          {canRcfTalent && (
                            <RcfBadge
                              active={tinkeredSlot === "talent"}
                              disabled={!!tinkeredSlot && tinkeredSlot !== "talent"}
                              onToggle={() => toggleTinker("talent")}
                            />
                          )}
                        </div>
                        {info.talent.desc && (
                          <div style={{ fontSize: 13, color: "#4a6878",
                                        fontFamily: "var(--font-rajdhani)",
                                        lineHeight: 1.5, maxWidth: 420 }}>
                            {info.talent.desc}
                          </div>
                        )}
                        {canRcfTalent && tinkeredSlot === "talent" && (
                          <div style={{ marginTop: 8 }}>
                            <DivSelect
                              label="Override Talent"
                              value={draft.talent}
                              onChange={v => updateDraft({ talent: v })}
                              options={TINKER_TALENT_OPTIONS}
                            />
                          </div>
                        )}
                      </div>
                    ) : (
                      <DivSelect
                        value={draft.talent}
                        onChange={v => updateDraft({ talent: v })}
                        options={GENERAL_TALENT_OPTIONS}
                      />
                    )}
                  </>
                )}

                {/* Mod slots */}
                {info.modSlots > 0 && (
                  <>
                    <FieldLabel>Mod Slot</FieldLabel>
                    {Array(info.modSlots).fill(null).map((_, i) => (
                      <div key={i} style={{ display: "flex", gap: 6, alignItems: "center", marginBottom: 6 }}>
                        <div style={{ flex: 2 }}>
                          <AttrSelect
                            value={draft.modAttrs[i]?.attr ?? ""}
                            onChange={v => updateMod(i, "attr", v)}
                            options={MOD_ATTR_NAMES}
                            series={3}
                          />
                        </div>
                        <div style={{ flex: 1 }}>
                          <DivInput
                            value={draft.modAttrs[i]?.value ?? ""}
                            onChange={v => updateMod(i, "value", v)}
                            placeholder="Value"
                          />
                        </div>
                      </div>
                    ))}
                  </>
                )}

                {/* Exotic / named perk */}
                {selectedDef.namedPerkDesc && (
                  <>
                    <FieldLabel>Exotic Perk</FieldLabel>
                    <div style={{ fontSize: 13, color: "#7a5a9a",
                                  fontFamily: "var(--font-rajdhani)",
                                  lineHeight: 1.55, maxWidth: 440 }}>
                      {selectedDef.namedPerkDesc}
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
          <FBtn color="#3a5a7a" onClick={() => { onConfirm(defaultGearBuildSlot()); onClose(); }}>
            Clear Slot
          </FBtn>
          <FBtn color="#3a5a7a" onClick={onClose}>Cancel</FBtn>
          <FBtn
            color={borderColor}
            disabled={!draft}
            onClick={() => { if (draft) { onConfirm({ ...draft, tinkeredSlot }); onClose(); } }}
          >
            Confirm
          </FBtn>
        </div>
      </div>
    </div>
  );
}

// ─── Small UI helpers ─────────────────────────────────────────────────────────

function AttrIcon({ attr, series }: { attr: string; series: 1 | 2 | 3 }) {
  return (
    <img
      src={attrIconSrc(attr, series)}
      alt=""
      width={18} height={18}
      style={{ flexShrink: 0, mixBlendMode: "screen", opacity: 0.85 }}
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
      {/* Trigger */}
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

      {/* Portal dropdown — renders in document.body to escape all stacking contexts */}
      {open && dropRect && createPortal(
        <div
          onMouseDown={e => e.stopPropagation()}
          style={{
            position: "fixed",
            top: dropRect.bottom + 2,
            left: dropRect.left,
            width: dropRect.width,
            zIndex: 9999,
            background: "#0d1117", border: "1px solid #2a4a6a",
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

function FieldLabel({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ fontSize: 11, letterSpacing: "0.25em", color: "#4a6a8a",
                  fontFamily: "var(--font-rajdhani)", fontWeight: 700,
                  textTransform: "uppercase", marginBottom: 5, marginTop: 13 }}>
      {children}
    </div>
  );
}

function FixedChip({ children }: { children: React.ReactNode }) {
  return (
    <span style={{ fontSize: 13, color: "#c8d0d8", fontFamily: "var(--font-rajdhani)",
                   background: "#0d1820", padding: "2px 10px", border: "1px solid #1a2530" }}>
      {children}
    </span>
  );
}

function RcfBadge({ active, disabled, onToggle }: {
  active: boolean; disabled: boolean; onToggle: () => void;
}) {
  return (
    <button
      onClick={onToggle}
      disabled={disabled}
      title="Reconfigure this slot"
      style={{
        fontSize: 10, letterSpacing: "0.15em", fontWeight: 700,
        textTransform: "uppercase", fontFamily: "var(--font-rajdhani)",
        color:      active ? "#e8671a" : disabled ? "#1a2a3a" : "#3a5a7a",
        background: active ? "#1a1008" : "transparent",
        border:     `1px solid ${active ? "#e8671a44" : disabled ? "#1a2a3a" : "#2a3a4a"}`,
        padding: "1px 7px", cursor: disabled ? "default" : "pointer",
      }}
    >
      RCF
    </button>
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
        color: disabled ? "#2a3a4a" : color === "#3a5a7a" ? "#9ab8d0" : color,
        padding: "5px 16px", fontSize: 13, letterSpacing: "0.15em",
        fontFamily: "var(--font-rajdhani)", fontWeight: 700,
        textTransform: "uppercase", cursor: disabled ? "default" : "pointer",
      }}
    >
      {children}
    </button>
  );
}
