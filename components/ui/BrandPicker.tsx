"use client";

import { useState, useRef, useEffect } from "react";
import { BRANDS, GEAR_SETS, RARITY_COLORS } from "@/lib/gameData";

interface Props {
  value: string;
  onChange: (name: string) => void;
  label?: string;
}

function BrandIcon({ src, name, size = 26 }: { src: string; name: string; size?: number }) {
  const [err, setErr] = useState(false);

  if (err) {
    return (
      <div
        className="flex items-center justify-center text-[11px] font-bold text-[#6a8a9a] flex-shrink-0 font-rajdhani"
        style={{ width: size, height: size, border: "1px solid #2a3a4a", background: "#0d1117" }}
      >
        {name.charAt(0).toUpperCase()}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={name}
      width={size}
      height={size}
      className="object-contain flex-shrink-0"
      style={{ mixBlendMode: "screen" }}
      onError={() => setErr(true)}
    />
  );
}

export default function BrandPicker({ value, onChange, label }: Props) {
  const [open, setOpen]     = useState(false);
  const [search, setSearch] = useState("");
  const ref                 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
        setSearch("");
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  const q              = search.toLowerCase();
  const filteredBrands = BRANDS.filter(b => b.name.toLowerCase().includes(q));
  const filteredSets   = GEAR_SETS.filter(g => g.name.toLowerCase().includes(q));

  const selectedBrand   = BRANDS.find(b => b.name === value);
  const selectedGearSet = GEAR_SETS.find(g => g.name === value);
  const selectedIcon    = selectedBrand?.icon ?? selectedGearSet?.icon ?? "";
  const selectedColor   = selectedGearSet ? RARITY_COLORS["Gear Set"] : RARITY_COLORS["High-End"];

  const select = (name: string) => {
    onChange(name);
    setOpen(false);
    setSearch("");
  };

  return (
    <div ref={ref} className="flex flex-col gap-1.5 relative">
      {label && (
        <span className="text-xs tracking-[0.15em] text-[#7a8a9a] uppercase font-rajdhani font-semibold">
          {label}
        </span>
      )}

      {/* Trigger */}
      <button
        type="button"
        onClick={() => setOpen(o => !o)}
        className="flex items-center gap-2 w-full bg-[#0d1117] border border-[#1e2a38]
                   px-3 py-2 text-sm font-rajdhani text-left cursor-pointer outline-none
                   hover:border-[#2a4a6a] transition-colors"
        style={{ borderColor: open ? "#2a4a6a" : undefined }}
      >
        {value ? (
          <>
            <BrandIcon src={selectedIcon} name={value} size={22} />
            <span className="flex-1 truncate" style={{ color: selectedColor }}>{value}</span>
          </>
        ) : (
          <span className="flex-1 text-[#3a4a5a] italic">Select Brand / Gear Set...</span>
        )}
        <span className="text-[10px] text-[#3a5a7a] flex-shrink-0">{open ? "▲" : "▼"}</span>
      </button>

      {/* Dropdown panel */}
      {open && (
        <div className="absolute top-full left-0 right-0 z-50 mt-0.5 bg-[#0a0f15]
                        border border-[#2a3a4a] shadow-2xl flex flex-col max-h-72">
          {/* Search */}
          <div className="px-2 py-2 border-b border-[#1a2530] flex-shrink-0">
            <input
              autoFocus
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search..."
              className="w-full bg-[#0d1117] border border-[#1e2a38] text-[#c8d8e8]
                         px-2 py-1.5 text-xs font-rajdhani outline-none
                         focus:border-[#2a4a6a] transition-colors"
            />
          </div>

          <div className="overflow-y-auto flex-1">
            {/* None */}
            <div
              onClick={() => select("")}
              className="flex items-center px-3 py-2 cursor-pointer hover:bg-[#111820]
                         transition-colors border-b border-[#1a2530]"
            >
              <span className="text-xs text-[#4a6a8a] font-rajdhani italic">— None —</span>
            </div>

            {/* Brand Sets */}
            {filteredBrands.length > 0 && (
              <>
                <div className="px-3 py-1.5 text-[10px] tracking-[0.2em] text-[#4a6a8a]
                                uppercase font-rajdhani font-bold bg-[#080e15] sticky top-0 z-10">
                  Brand Sets
                </div>
                {filteredBrands.map(b => (
                  <div
                    key={b.id}
                    onClick={() => select(b.name)}
                    className="flex items-center gap-2.5 px-3 py-2 cursor-pointer transition-colors"
                    style={{ background: value === b.name ? "#101e2e" : "transparent" }}
                    onMouseEnter={e => { if (value !== b.name) (e.currentTarget as HTMLElement).style.background = "#0d1520"; }}
                    onMouseLeave={e => { if (value !== b.name) (e.currentTarget as HTMLElement).style.background = "transparent"; }}
                  >
                    <BrandIcon src={b.icon} name={b.name} size={24} />
                    <span
                      className="text-sm font-rajdhani"
                      style={{ color: value === b.name ? RARITY_COLORS["High-End"] : "#c8d8e8" }}
                    >
                      {b.name}
                    </span>
                  </div>
                ))}
              </>
            )}

            {/* Gear Sets */}
            {filteredSets.length > 0 && (
              <>
                <div className="px-3 py-1.5 text-[10px] tracking-[0.2em] text-[#4a6a8a]
                                uppercase font-rajdhani font-bold bg-[#080e15] sticky top-0 z-10">
                  Gear Sets
                </div>
                {filteredSets.map(g => (
                  <div
                    key={g.id}
                    onClick={() => select(g.name)}
                    className="flex items-center gap-2.5 px-3 py-2 cursor-pointer transition-colors"
                    style={{ background: value === g.name ? "#0a1e1e" : "transparent" }}
                    onMouseEnter={e => { if (value !== g.name) (e.currentTarget as HTMLElement).style.background = "#091818"; }}
                    onMouseLeave={e => { if (value !== g.name) (e.currentTarget as HTMLElement).style.background = "transparent"; }}
                  >
                    <BrandIcon src={g.icon} name={g.name} size={24} />
                    <span
                      className="text-sm font-rajdhani"
                      style={{ color: value === g.name ? RARITY_COLORS["Gear Set"] : "#c8d8e8" }}
                    >
                      {g.name}
                    </span>
                  </div>
                ))}
              </>
            )}

            {filteredBrands.length === 0 && filteredSets.length === 0 && (
              <div className="px-3 py-4 text-xs text-[#4a6a8a] font-rajdhani text-center italic">
                No results for &quot;{search}&quot;
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
