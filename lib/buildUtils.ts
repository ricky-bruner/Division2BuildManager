import type { GearBuildSlot } from "./types";
import type { NamedGearItem } from "./namedGear";
import type { AttrGroup } from "./attributeData";
import { NAMED_GEAR_MAP, HIGH_END_GEAR_MAP, GEAR_SET_GEAR_MAP } from "./namedGear";
import { GEAR_TALENT_MAP } from "./gearTalents";
import { GEAR_SET_MAP } from "./gearSetData";

// ─────────────────────────────────────────────────────────────────────────────
// Slot info types — consumed by the picker modal and GearCard
// ─────────────────────────────────────────────────────────────────────────────

export type CoreSlotInfo =
  | { locked: true; allCores: true }
  | { locked: true; allCores?: false; name: string }
  | { locked: false };

export type MinorSlotInfo =
  | { locked: true; name: string; value: string }
  | { locked: false; group?: AttrGroup; exclude?: string[] };

export type TalentSlotInfo =
  | { locked: true; name: string; desc: string }
  | { locked: false }
  | null;

export interface EditableSlotInfo {
  core:     CoreSlotInfo;
  minors:   MinorSlotInfo[];
  talent:   TalentSlotInfo;
  modSlots: number;
}

// ─────────────────────────────────────────────────────────────────────────────
// Resolve item definition from any of the three gear arrays
// ─────────────────────────────────────────────────────────────────────────────

export function resolveGearItem(gearId: string): NamedGearItem | undefined {
  return NAMED_GEAR_MAP.get(gearId) ?? HIGH_END_GEAR_MAP.get(gearId) ?? GEAR_SET_GEAR_MAP.get(gearId);
}

// ─────────────────────────────────────────────────────────────────────────────
// Derive which slots are locked vs editable from an item definition
// ─────────────────────────────────────────────────────────────────────────────

export function getEditableSlots(def: NamedGearItem): EditableSlotInfo {
  // Core
  let core: CoreSlotInfo;
  if (def.core.type === "all-cores") {
    core = { locked: true, allCores: true };
  } else if (def.core.type === "fixed") {
    core = { locked: true, name: def.core.name };
  } else {
    core = { locked: false };
  }

  // Minors — Gear Set items only have 1 minor slot
  const minorDefs = def.rarity === "Gear Set" ? def.minors.slice(0, 1) : def.minors;
  const minors: MinorSlotInfo[] = minorDefs.map(m => {
    if (m.type === "fixed")              return { locked: true, name: m.name, value: m.value };
    if (m.type === "any-basic-group")    return { locked: false, group: m.group };
    if (m.type === "any-basic-restricted") return { locked: false, exclude: m.exclude };
    return { locked: false };
  });

  // Talent
  let talent: TalentSlotInfo = null;
  if (def.talent) {
    if (def.talent.type === "fixed") {
      const t = GEAR_TALENT_MAP.get(def.talent.talentId);
      talent = { locked: true, name: t?.talentName ?? def.talent.talentId, desc: t?.talentDesc ?? "" };
    } else if (def.talent.type === "gear-set") {
      const set = GEAR_SET_MAP.get(def.talent.setId);
      const perk = def.slot === "backpack" ? set?.backpackTalent : set?.chestTalent;
      talent = { locked: true, name: perk?.name ?? def.talent.setId, desc: perk?.desc ?? "" };
    } else {
      talent = { locked: false };
    }
  }

  return { core, minors, talent, modSlots: def.modSlots };
}

// ─────────────────────────────────────────────────────────────────────────────
// Resolve talent display info from a stored talentId string
// Handles both gearTalents.ts entries and gear-set "{setId}-{slot}" format
// ─────────────────────────────────────────────────────────────────────────────

export function resolveTalentDesc(talentId: string): { name: string; desc: string } {
  const t = GEAR_TALENT_MAP.get(talentId);
  if (t) return { name: t.talentName, desc: t.talentDesc };

  const m = talentId.match(/^(.+)-(backpack|chest)$/);
  if (m) {
    const set = GEAR_SET_MAP.get(m[1]);
    if (set) {
      const perk = m[2] === "backpack" ? set.backpackTalent : set.chestTalent;
      if (perk) return { name: perk.name, desc: perk.desc };
    }
  }

  return { name: talentId, desc: "" };
}

// ─────────────────────────────────────────────────────────────────────────────
// Default empty build slot
// ─────────────────────────────────────────────────────────────────────────────

export function defaultGearBuildSlot(): GearBuildSlot {
  return { gearId: "", coreAttr: "", minors: [], talent: "", modAttrs: [] };
}
