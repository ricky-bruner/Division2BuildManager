"use client";

import { useState, useCallback, useRef } from "react";
import type { Build } from "@/lib/types";
import { defaultBuild, GEAR_SLOTS, WEAPON_SLOTS } from "@/lib/gameData";
import GearCard           from "./GearCard";
import WeaponCard         from "./WeaponCard";
import SkillCard          from "./SkillCard";
import SpecializationCard from "./SpecializationCard";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mt-6 mb-3">
      <div className="w-0.5 h-5 bg-[#e8671a]" />
      <span className="text-xs tracking-[0.3em] text-[#c8d0d8] font-rajdhani font-bold uppercase">
        {children}
      </span>
      <div className="flex-1 h-px bg-[#1a2530]" />
    </div>
  );
}

export default function BuildPlanner() {
  const [builds, setBuilds]         = useState<Build[]>([defaultBuild()]);
  const [activeId, setActiveId]     = useState<number>(builds[0].id);
  const [editingName, setEditingName] = useState(false);
  const importRef = useRef<HTMLInputElement>(null);

  const activeBuild = builds.find(b => b.id === activeId) ?? builds[0];

  const updateBuild = useCallback(
    (updater: (b: Build) => Build) => {
      setBuilds(prev => prev.map(b => b.id === activeId ? updater(b) : b));
    },
    [activeId]
  );

  const addBuild = () => {
    const nb = defaultBuild();
    setBuilds(prev => [...prev, nb]);
    setActiveId(nb.id);
  };

  const dupBuild = () => {
    const nb: Build = { ...JSON.parse(JSON.stringify(activeBuild)), id: Date.now(), name: `${activeBuild.name} (Copy)` };
    setBuilds(prev => [...prev, nb]);
    setActiveId(nb.id);
  };

  const deleteBuild = (id: number) => {
    if (builds.length === 1) return;
    const remaining = builds.filter(b => b.id !== id);
    setBuilds(remaining);
    if (activeId === id) setActiveId(remaining[0].id);
  };

  const exportBuild = () => {
    const blob = new Blob([JSON.stringify(activeBuild, null, 2)], { type: "application/json" });
    const url  = URL.createObjectURL(blob);
    const a    = document.createElement("a");
    a.href = url;
    a.download = `${activeBuild.name.replace(/\s+/g, "_")}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const importBuild = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = ev => {
      try {
        const b: Build = JSON.parse(ev.target?.result as string);
        b.id = Date.now();
        if (!b.specialization) b.specialization = "";
        setBuilds(prev => [...prev, b]);
        setActiveId(b.id);
      } catch {
        alert("Invalid build file.");
      }
    };
    reader.readAsText(file);
    e.target.value = "";
  };

  return (
    <div className="min-h-screen bg-[#060b10] grid-bg">

      {/* ── Top Bar ── */}
      <header className="sticky top-0 z-50 bg-[#080e15] border-b border-[#1e2a38] h-14 px-6 flex items-center gap-4">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 border-2 border-[#e8671a] diamond flex items-center justify-center flex-shrink-0">
            <div className="w-2.5 h-2.5 bg-[#e8671a]" />
          </div>
          <div>
            <div className="text-sm font-bold tracking-[0.2em] text-[#e8d0a0] leading-tight font-rajdhani">DIVISION 2</div>
            <div className="text-[9px] tracking-[0.35em] text-[#e8671a] font-rajdhani">BUILD PLANNER</div>
          </div>
        </div>

        <div className="flex-1" />

        {[
          { label: "NEW",       action: addBuild,    border: "#2a5a8a" },
          { label: "DUPLICATE", action: dupBuild,    border: "#2a6a4a" },
          { label: "EXPORT",    action: exportBuild, border: "#6a4a1a" },
        ].map(btn => (
          <button
            key={btn.label}
            onClick={btn.action}
            className="bg-transparent text-[#9ab8d0] px-3 py-1 text-[11px] tracking-[0.15em] font-rajdhani font-bold uppercase cursor-pointer transition-all hover:text-white"
            style={{ border: `1px solid ${btn.border}` }}
            onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = `${btn.border}44`; }}
            onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = "transparent"; }}
          >
            {btn.label}
          </button>
        ))}

        <label className="bg-transparent border border-[#4a3a6a] text-[#9ab8d0] px-3 py-1 text-[11px] tracking-[0.15em] font-rajdhani font-bold uppercase cursor-pointer hover:bg-[#4a3a6a44] transition-all">
          IMPORT
          <input ref={importRef} type="file" accept=".json" onChange={importBuild} className="hidden" />
        </label>
      </header>

      <div className="flex min-h-[calc(100vh-56px)]">

        {/* ── Sidebar ── */}
        <aside className="w-56 bg-[#08111a] border-r border-[#1a2530] py-4 flex-shrink-0 overflow-y-auto">
          <div className="px-4 pb-3 text-[9px] tracking-[0.25em] text-[#3a5a7a] uppercase font-rajdhani font-semibold">
            BUILDS ({builds.length})
          </div>

          {builds.map(b => {
            const isActive = b.id === activeId;
            return (
              <div
                key={b.id}
                onClick={() => setActiveId(b.id)}
                className="flex items-center gap-2 px-4 py-2.5 cursor-pointer transition-all"
                style={{
                  background: isActive ? "#101e2e" : "transparent",
                  borderLeft: isActive ? "2px solid #e8671a" : "2px solid transparent",
                }}
              >
                <div
                  className="w-1.5 h-1.5 border flex-shrink-0 diamond"
                  style={{ borderColor: isActive ? "#e8671a" : "#3a5a7a" }}
                />
                <span
                  className="text-sm font-rajdhani flex-1 overflow-hidden text-ellipsis whitespace-nowrap"
                  style={{ color: isActive ? "#e8d0a0" : "#5a7a8a", fontWeight: isActive ? 700 : 400 }}
                >
                  {b.name}
                </span>
                {builds.length > 1 && (
                  <button
                    onClick={e => { e.stopPropagation(); deleteBuild(b.id); }}
                    className="text-xs text-[#3a5a7a] hover:text-[#e87a7a] px-1 leading-none transition-colors cursor-pointer"
                  >
                    ✕
                  </button>
                )}
              </div>
            );
          })}
        </aside>

        {/* ── Main Content ── */}
        <main className="flex-1 px-6 py-5 overflow-y-auto animate-fadeIn">

          {/* Build name */}
          <div className="flex items-center gap-3 mb-5">
            <div className="w-1 h-7 bg-[#e8671a]" />
            {editingName ? (
              <input
                autoFocus
                value={activeBuild.name}
                onChange={e => updateBuild(b => ({ ...b, name: e.target.value }))}
                onBlur={() => setEditingName(false)}
                onKeyDown={e => e.key === "Enter" && setEditingName(false)}
                className="bg-transparent border-none border-b border-b-[#e8671a] text-[#e8d0a0]
                           text-xl font-rajdhani font-bold tracking-[0.1em] outline-none w-80"
              />
            ) : (
              <h1
                onClick={() => setEditingName(true)}
                className="text-xl font-bold tracking-[0.1em] text-[#e8d0a0] font-rajdhani cursor-pointer select-none hover:text-white transition-colors"
                title="Click to rename"
              >
                {activeBuild.name}
              </h1>
            )}
            {!editingName && (
              <span className="text-[9px] text-[#3a5a7a] tracking-[0.15em] font-rajdhani">
                CLICK TO RENAME
              </span>
            )}
          </div>

          {/* Specialization */}
          <SpecializationCard
            value={activeBuild.specialization}
            onChange={v => updateBuild(b => ({ ...b, specialization: v }))}
          />

          {/* ── WEAPONS — 3 across ── */}
          <SectionLabel>Weapons</SectionLabel>
          <div className="grid grid-cols-3 gap-3">
            {WEAPON_SLOTS.map(slot => (
              <WeaponCard
                key={slot.id}
                slotId={slot.id}
                slotLabel={slot.label}
                item={activeBuild.weapons[slot.id]}
                onChange={item => updateBuild(b => ({ ...b, weapons: { ...b.weapons, [slot.id]: item } }))}
              />
            ))}
          </div>

          {/* ── GEAR — 2×3 tiles + 1×3 perk box ── */}
          <SectionLabel>Gear</SectionLabel>
          <div
            style={{
              display:             "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gridTemplateRows:    "repeat(3, auto)",
              gap:                 12,
            }}
          >
            {GEAR_SLOTS.map((slot, i) => (
              <div
                key={slot.id}
                style={{
                  gridColumn: (i % 2) + 1,
                  gridRow:    Math.floor(i / 2) + 1,
                }}
              >
                <GearCard
                  slotId={slot.id}
                  slotLabel={slot.label}
                  item={activeBuild.gear[slot.id]}
                  onChange={item => updateBuild(b => ({ ...b, gear: { ...b.gear, [slot.id]: item } }))}
                />
              </div>
            ))}

            {/* Perk breakdown — spans all 3 gear rows */}
            <div
              style={{
                gridColumn:  3,
                gridRow:     "1 / span 3",
                background:  "#080d12",
                border:      "1px solid #1a2530",
                borderLeft:  "4px solid #e8671a44",
                display:     "flex",
                flexDirection: "column",
                padding:     "14px 12px",
                gap:         8,
              }}
            >
              <div
                className="text-[9px] tracking-[0.3em] font-rajdhani font-bold uppercase"
                style={{ color: "#4a6a8a" }}
              >
                Perk Breakdown
              </div>
              <div
                className="text-[10px] font-rajdhani italic"
                style={{ color: "#2a3a4a" }}
              >
                — coming soon —
              </div>
            </div>
          </div>

          {/* ── SKILLS — 3 across ── */}
          <SectionLabel>Skills</SectionLabel>
          <div className="grid grid-cols-3 gap-3">
            <SkillCard
              slotLabel="SKILL 1"
              value={activeBuild.skill1}
              onChange={s => updateBuild(b => ({ ...b, skill1: s }))}
            />
            <SkillCard
              slotLabel="SKILL 2"
              value={activeBuild.skill2}
              onChange={s => updateBuild(b => ({ ...b, skill2: s }))}
            />
            <div style={{ background: "#080d12", border: "1px solid #1a2530" }} />
          </div>

          {/* ── NOTES ── */}
          <SectionLabel>Notes</SectionLabel>
          <textarea
            value={activeBuild.notes}
            onChange={e => updateBuild(b => ({ ...b, notes: e.target.value }))}
            placeholder="Build strategy, key synergies, recommended playstyle..."
            className="w-full min-h-[100px] bg-[#0a0f15] border border-[#1e2a38] text-[#c8d8e8]
                       p-3 font-mono-tech text-xs leading-relaxed resize-y outline-none
                       focus:border-[#2a4a6a] transition-colors mb-6"
          />
        </main>
      </div>
    </div>
  );
}
