"use client";

import type { Build } from "@/lib/types";
import { OFFENSE_ATTRS, DEFENSE_ATTRS, SKILL_ATTRS, attrIconSrc } from "@/lib/attrUtils";
import { WEAPON_FIXED_CORE_MAP } from "@/lib/attributeData";
import type { WeaponType } from "@/lib/weaponTypes";

// ─── stat collection ────────────────────────────────────────────────────────

type Category = "weapon" | "gear" | "skill";

interface StatEntry { attr: string; count: number; }

function categorize(attr: string): Category | null {
  if (OFFENSE_ATTRS.has(attr)) return "weapon";
  if (DEFENSE_ATTRS.has(attr)) return "gear";
  if (SKILL_ATTRS.has(attr))   return "skill";
  return null;
}

function collectStats(build: Build): Record<Category, Map<string, number>> {
  const maps: Record<Category, Map<string, number>> = {
    weapon: new Map(),
    gear:   new Map(),
    skill:  new Map(),
  };

  function bump(attr: string) {
    if (!attr) return;
    const cat = categorize(attr);
    if (cat) maps[cat].set(attr, (maps[cat].get(attr) ?? 0) + 1);
  }

  for (const slot of Object.values(build.gear)) {
    bump(slot.coreAttr);
    for (const m of slot.minors) bump(m.attr);
    for (const m of slot.modAttrs) bump(m.attr);
  }

  for (const w of Object.values(build.weapons)) {
    if (!w.name) continue; // skip empty weapon slots
    bump(w.coreAttr);
    const fixedCore = WEAPON_FIXED_CORE_MAP.get(w.weaponType as WeaponType);
    if (fixedCore) bump(fixedCore.attribute);
    bump(w.minor1);
  }

  return maps;
}

function toEntries(m: Map<string, number>): StatEntry[] {
  return Array.from(m.entries())
    .sort((a, b) => b[1] - a[1])
    .map(([attr, count]) => ({ attr, count }));
}

// ─── sub-components ──────────────────────────────────────────────────────────

const SECTION_COLORS: Record<string, string> = {
  weapon: "#e8b847",
  gear:   "#5a9eff",
  skill:  "#4ab8c8",
  total:  "#e8671a",
};

function SubHeader({ label, color }: { label: string; color: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 6 }}>
      <div style={{ width: 2, height: 12, background: color, flexShrink: 0 }} />
      <span
        className="font-rajdhani font-bold uppercase"
        style={{ fontSize: 14, letterSpacing: "0.3em", color }}
      >
        {label}
      </span>
    </div>
  );
}

function StatRow({ entry, series }: { entry: StatEntry; series: 1 | 2 | 3 }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 5, marginBottom: 3 }}>
      <img
        src={attrIconSrc(entry.attr, series)}
        alt=""
        width={16} height={16}
        style={{ opacity: 0.7, flexShrink: 0 }}
      />
      <span
        className="font-rajdhani"
        style={{
          fontSize: 14, color: "#7a9ab0", flex: 1,
          overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap",
        }}
      >
        {entry.attr}
      </span>
      {entry.count > 1 && (
        <span
          className="font-rajdhani font-bold"
          style={{ fontSize: 13, color: "#3a5a7a" }}
        >
          ×{entry.count}
        </span>
      )}
    </div>
  );
}

function EmptyNote() {
  return (
    <div
      className="font-rajdhani italic"
      style={{ fontSize: 13, color: "#1e2e3e", marginBottom: 4 }}
    >
      — none —
    </div>
  );
}

function Divider() {
  return <div style={{ height: 1, background: "#0e1a24", margin: "10px 0" }} />;
}

// ─── main panel ──────────────────────────────────────────────────────────────

interface Props { build: Build; }

export default function BuildStatsPanel({ build }: Props) {
  const stats = collectStats(build);

  const weaponEntries = toEntries(stats.weapon);
  const gearEntries   = toEntries(stats.gear);
  const skillEntries  = toEntries(stats.skill);

  const totalWeapon = Array.from(stats.weapon.values()).reduce((s, n) => s + n, 0);
  const totalGear   = Array.from(stats.gear.values()).reduce((s, n) => s + n, 0);
  const totalSkill  = Array.from(stats.skill.values()).reduce((s, n) => s + n, 0);
  const grandTotal  = totalWeapon + totalGear + totalSkill;

  const totalRows = [
    { label: "Weapon",  count: totalWeapon, color: SECTION_COLORS.weapon },
    { label: "Gear",    count: totalGear,   color: SECTION_COLORS.gear   },
    { label: "Skill",   count: totalSkill,  color: SECTION_COLORS.skill  },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>

      {/* ── Weapon ── */}
      <SubHeader label="Weapon" color={SECTION_COLORS.weapon} />
      {weaponEntries.length === 0
        ? <EmptyNote />
        : weaponEntries.map(e => <StatRow key={e.attr} entry={e} series={1} />)
      }

      <Divider />

      {/* ── Gear ── */}
      <SubHeader label="Gear" color={SECTION_COLORS.gear} />
      {gearEntries.length === 0
        ? <EmptyNote />
        : gearEntries.map(e => <StatRow key={e.attr} entry={e} series={1} />)
      }

      <Divider />

      {/* ── Skill ── */}
      <SubHeader label="Skill" color={SECTION_COLORS.skill} />
      {skillEntries.length === 0
        ? <EmptyNote />
        : skillEntries.map(e => <StatRow key={e.attr} entry={e} series={1} />)
      }

      <Divider />

      {/* ── Total ── */}
      <SubHeader label="Total" color={SECTION_COLORS.total} />
      {totalRows.map(row => (
        <div key={row.label} style={{ display: "flex", alignItems: "center", marginBottom: 4 }}>
          <span className="font-rajdhani" style={{ fontSize: 14, color: "#4a6a7a", flex: 1 }}>
            {row.label}
          </span>
          <span className="font-rajdhani font-bold" style={{ fontSize: 14, color: row.color }}>
            {row.count}
          </span>
        </div>
      ))}
      <div style={{ height: 1, background: "#0e1a24", margin: "6px 0" }} />
      <div style={{ display: "flex", alignItems: "center" }}>
        <span className="font-rajdhani font-bold uppercase"
              style={{ fontSize: 12, letterSpacing: "0.15em", color: "#3a5a6a", flex: 1 }}>
          Attribute Slots
        </span>
        <span className="font-rajdhani font-bold"
              style={{ fontSize: 16, color: "#c8d8e8" }}>
          {grandTotal}
        </span>
      </div>

    </div>
  );
}
