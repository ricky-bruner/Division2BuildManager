"use client";

import { useState, useMemo } from "react";
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
import { RARITY_COLORS } from "@/lib/gameData";

// ─── Talent option lists ──────────────────────────────────────────────────────

const GENERAL_TALENT_OPTIONS = GEAR_TALENT_LIST
  .filter(t => t.talentType === "generalGear")
  .map(t => ({ value: t.talentId, label: t.talentName }));

const TINKER_TALENT_OPTIONS = GEAR_TALENT_LIST
  .filter(t => t.talentType === "generalGear" || t.talentType === "perfectGear")
  .map(t => ({ value: t.talentId, label: t.talentName }));

const MINOR_ATTR_NAMES = GEAR_MINOR_ATTRS.map(a => a.name);
const MOD_ATTR_NAMES   = GEAR_MOD_ATTRS.map(a => a.name);

// ─── Helper: build initial draft from item def ───────────────────────────────

function initDraft(def: NamedGearItem, info: EditableSlotInfo): GearBuildSlot {
  const coreAttr = info.core.locked && !("allCores" in info.core && info.core.allCores)
    ? (info.core as { locked: true; name: string }).name
    : "";

  const minors = info.minors.map(m =>
    m.locked ? { attr: m.name, value: m.value } : { attr: "", value: "" }
  );

  let talent = "";
  if (def.talent?.type === "fixed")    talent = def.talent.talentId;
  if (def.talent?.type === "gear-set") talent = `${def.talent.setId}-${def.slot}`;

  return {
    gearId:   def.gearId,
    coreAttr,
    minors,
    talent,
    modAttrs: Array(def.modSlots).fill(null).map(() => ({ attr: "", value: "" })),
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

  const selectedDef = selectedId ? resolveGearItem(selectedId) : undefined;
  const info        = selectedDef ? getEditableSlots(selectedDef) : undefined;

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

  const groups = [
    { label: "Named / Exotic", items: filtered(namedItems)   },
    { label: "Gear Set",       items: filtered(gearSetItems) },
    { label: "High-End",       items: filtered(highEndItems) },
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
          borderLeft: "4px solid #e8671a",
          display: "flex", flexDirection: "column", overflow: "hidden",
        }}
      >
        {/* Header */}
        <div style={{ padding: "10px 16px", borderBottom: "1px solid #1a2530",
                      display: "flex", alignItems: "center", gap: 12 }}>
          <span className="font-rajdhani font-bold tracking-[0.25em] uppercase"
                style={{ fontSize: 11, color: "#e8671a" }}>
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
          <div style={{ width: 275, borderRight: "1px solid #1a2530",
                        display: "flex", flexDirection: "column", flexShrink: 0 }}>
            <div style={{ padding: "7px 10px", borderBottom: "1px solid #1a2530" }}>
              <input
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Search…"
                style={{ width: "100%", background: "#0a0f15", border: "1px solid #1a2530",
                         color: "#c8d0d8", padding: "4px 8px", fontSize: 11,
                         fontFamily: "var(--font-rajdhani)", outline: "none" }}
              />
            </div>
            <div style={{ flex: 1, overflowY: "auto" }}>
              {groups.map(group => group.items.length === 0 ? null : (
                <div key={group.label}>
                  <div style={{ padding: "6px 10px 2px", fontSize: 9, letterSpacing: "0.25em",
                                color: "#3a5a7a", fontFamily: "var(--font-rajdhani)",
                                fontWeight: 700, textTransform: "uppercase" }}>
                    {group.label}
                  </div>
                  {group.items.map(def => {
                    const isSelected = def.gearId === selectedId;
                    const rc = RARITY_COLORS[def.rarity] ?? "#f5c518";
                    return (
                      <div
                        key={def.gearId}
                        onClick={() => selectItem(def)}
                        style={{
                          padding: "6px 10px", cursor: "pointer",
                          background: isSelected ? "#0d1e2e" : "transparent",
                          borderLeft: `2px solid ${isSelected ? rc : "transparent"}`,
                        }}
                      >
                        <div style={{ fontSize: 12, fontWeight: 600, lineHeight: 1.25,
                                      color: isSelected ? "#fff" : "#8aaabb",
                                      fontFamily: "var(--font-rajdhani)" }}>
                          {def.gearName}
                        </div>
                        <div style={{ fontSize: 10, color: rc, opacity: 0.8,
                                      fontFamily: "var(--font-rajdhani)" }}>
                          {def.brand || def.rarity}
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
                            fontSize: 13, marginTop: 50, textAlign: "center" }}>
                Select an item from the list
              </div>
            ) : (
              <>
                {/* Item header */}
                <div style={{ marginBottom: 14 }}>
                  <div style={{ fontSize: 16, fontWeight: 700, letterSpacing: "0.05em",
                                color: RARITY_COLORS[selectedDef.rarity] ?? "#f5c518",
                                fontFamily: "var(--font-rajdhani)" }}>
                    {selectedDef.gearName}
                  </div>
                  {selectedDef.brand && (
                    <div style={{ fontSize: 11, color: "#6a8a9a",
                                  fontFamily: "var(--font-rajdhani)" }}>
                      {selectedDef.brand}
                    </div>
                  )}
                </div>

                {/* Core */}
                <FieldLabel>Core Attribute</FieldLabel>
                {info.core.locked ? (
                  "allCores" in info.core && info.core.allCores ? (
                    <div style={{ display: "flex", gap: 6, flexWrap: "wrap", alignItems: "center" }}>
                      {["Weapon Damage", "Armor", "Skill Tier"].map(c => (
                        <FixedChip key={c}>{c}</FixedChip>
                      ))}
                      <RcfBadge
                        active={tinkeredSlot === "core"}
                        disabled={!!tinkeredSlot && tinkeredSlot !== "core"}
                        onToggle={() => toggleTinker("core")}
                      />
                    </div>
                  ) : (
                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <FixedChip>{(info.core as { name: string }).name}</FixedChip>
                      <RcfBadge
                        active={tinkeredSlot === "core"}
                        disabled={!!tinkeredSlot && tinkeredSlot !== "core"}
                        onToggle={() => toggleTinker("core")}
                      />
                    </div>
                  )
                ) : (
                  <DivSelect
                    value={draft.coreAttr}
                    onChange={v => updateDraft({ coreAttr: v })}
                    options={GEAR_CORE_ATTR_NAMES}
                  />
                )}
                {tinkeredSlot === "core" && (
                  <div style={{ marginTop: 6 }}>
                    <DivSelect
                      label="Override Core"
                      value={draft.coreAttr}
                      onChange={v => updateDraft({ coreAttr: v })}
                      options={GEAR_CORE_ATTR_NAMES}
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
                      const minorOpts = m.locked
                        ? MINOR_ATTR_NAMES
                        : m.group
                          ? GEAR_MINOR_ATTRS.filter(a => a.group === m.group).map(a => a.name)
                          : m.exclude
                            ? GEAR_MINOR_ATTRS.filter(a => !m.exclude!.includes(a.name)).map(a => a.name)
                            : MINOR_ATTR_NAMES;

                      return (
                        <div key={i} style={{ marginBottom: 6 }}>
                          {m.locked && !isTinkered ? (
                            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                              <FixedChip>{m.name}</FixedChip>
                              <span style={{ fontSize: 11, color: "#6a8a9a",
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
                            <div style={{ display: "flex", gap: 6, alignItems: "flex-end" }}>
                              <div style={{ flex: 2 }}>
                                <DivSelect
                                  value={draft.minors[i]?.attr ?? ""}
                                  onChange={v => updateMinor(i, "attr", v)}
                                  options={minorOpts}
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
                          <RcfBadge
                            active={tinkeredSlot === "talent"}
                            disabled={!!tinkeredSlot && tinkeredSlot !== "talent"}
                            onToggle={() => toggleTinker("talent")}
                          />
                        </div>
                        {info.talent.desc && (
                          <div style={{ fontSize: 10, color: "#4a6878",
                                        fontFamily: "var(--font-rajdhani)",
                                        lineHeight: 1.5, maxWidth: 420 }}>
                            {info.talent.desc}
                          </div>
                        )}
                        {tinkeredSlot === "talent" && (
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
                      <div key={i} style={{ display: "flex", gap: 6, marginBottom: 6 }}>
                        <div style={{ flex: 2 }}>
                          <DivSelect
                            value={draft.modAttrs[i]?.attr ?? ""}
                            onChange={v => updateMod(i, "attr", v)}
                            options={MOD_ATTR_NAMES}
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
                    <div style={{ fontSize: 10, color: "#7a5a9a",
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
            color="#e8671a"
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

function FieldLabel({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ fontSize: 9, letterSpacing: "0.25em", color: "#4a6a8a",
                  fontFamily: "var(--font-rajdhani)", fontWeight: 700,
                  textTransform: "uppercase", marginBottom: 5, marginTop: 13 }}>
      {children}
    </div>
  );
}

function FixedChip({ children }: { children: React.ReactNode }) {
  return (
    <span style={{ fontSize: 12, color: "#c8d0d8", fontFamily: "var(--font-rajdhani)",
                   background: "#0d1820", padding: "2px 8px", border: "1px solid #1a2530" }}>
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
        fontSize: 9, letterSpacing: "0.15em", fontWeight: 700,
        textTransform: "uppercase", fontFamily: "var(--font-rajdhani)",
        color:      active ? "#e8671a" : disabled ? "#1a2a3a" : "#3a5a7a",
        background: active ? "#1a1008" : "transparent",
        border:     `1px solid ${active ? "#e8671a44" : disabled ? "#1a2a3a" : "#2a3a4a"}`,
        padding: "1px 6px", cursor: disabled ? "default" : "pointer",
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
        color: disabled ? "#2a3a4a" : color === "#e8671a" ? "#e8671a" : "#9ab8d0",
        padding: "5px 16px", fontSize: 11, letterSpacing: "0.15em",
        fontFamily: "var(--font-rajdhani)", fontWeight: 700,
        textTransform: "uppercase", cursor: disabled ? "default" : "pointer",
      }}
    >
      {children}
    </button>
  );
}
