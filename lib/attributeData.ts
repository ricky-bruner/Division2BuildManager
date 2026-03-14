import type { WeaponType } from "./weaponTypes";

// ─────────────────────────────────────────────────────────────────────────────
// Attribute group — used for colour-coding (matches game UI)
// ─────────────────────────────────────────────────────────────────────────────

export type AttrGroup = "offensive" | "defensive" | "skill";

// ─────────────────────────────────────────────────────────────────────────────
// WEAPON ATTRIBUTES
// ─────────────────────────────────────────────────────────────────────────────

/** The universal weapon core attribute — same slot on every weapon */
export const WEAPON_CORE: { name: string; max: string } = {
  name: "Weapon Damage",
  max:  "15%",
};

/**
 * Fixed secondary core attribute per weapon type (orange slot in-game).
 * Pistols have no secondary core.
 */
export interface WeaponFixedCore {
  weaponType: WeaponType;
  attribute:  string;
  max:        string;
}

export const WEAPON_FIXED_CORES: WeaponFixedCore[] = [
  { weaponType: "Assault Rifle",   attribute: "Health Damage",              max: "21%"  },
  { weaponType: "Light Machine Gun", attribute: "DMG to Target Out of Cover", max: "12%"  },
  { weaponType: "Submachine Gun",  attribute: "Critical Hit Chance",        max: "21%"  },
  { weaponType: "Shotgun",         attribute: "Damage to Armor",            max: "12%"  },
  { weaponType: "Rifle",           attribute: "Critical Hit Damage",        max: "17%"  },
  { weaponType: "Marksman Rifle",  attribute: "Headshot Damage",            max: "111%" },
  // Pistol: no secondary core
];

/** Derived map for fast lookup — undefined means no fixed core (Pistol) */
export const WEAPON_FIXED_CORE_MAP = new Map(
  WEAPON_FIXED_CORES.map(fc => [fc.weaponType, fc])
);

/** Minor (secondary) attribute options available on any weapon */
export interface WeaponMinorAttr {
  name: string;
  max:  string;
}

export const WEAPON_MINOR_ATTRS: WeaponMinorAttr[] = [
  { name: "Damage to Armor",              max: "6%"    },
  { name: "Critical Hit Chance",          max: "9.5%"  },
  { name: "Health Damage",               max: "9.5%"  },
  { name: "DMG to Target Out of Cover",   max: "10%"   },
  { name: "Headshot Damage",              max: "10%"   },
  { name: "Critical Hit Damage",          max: "10%"   },
  { name: "Reload Speed",                 max: "12%"   },
  { name: "Stability",                    max: "12%"   },
  { name: "Accuracy",                     max: "12%"   },
  { name: "Optimal Range",               max: "24%"   },
  { name: "Magazine Size",               max: "12.5%" },
  { name: "Rate of Fire",                max: "5%"    },
  { name: "Swap Speed",                  max: "15%"   },
];

// ─────────────────────────────────────────────────────────────────────────────
// GEAR ATTRIBUTES
// ─────────────────────────────────────────────────────────────────────────────

export interface GearCoreAttr {
  name: string;
  max:  string;
}

export const GEAR_CORE_ATTRS: GearCoreAttr[] = [
  { name: "Armor",         max: "170,000" },
  { name: "Weapon Damage", max: "15%"     },
  { name: "Skill Tier",    max: "1"       },
];

export interface GearMinorAttr {
  name:  string;
  group: AttrGroup;
  max:   string;
}

export const GEAR_MINOR_ATTRS: GearMinorAttr[] = [
  // Offensive
  { name: "Weapon Handling",    group: "offensive", max: "8%"    },
  { name: "Critical Hit Chance",group: "offensive", max: "6%"    },
  { name: "Critical Hit Damage",group: "offensive", max: "12%"   },
  { name: "Headshot Damage",    group: "offensive", max: "10%"   },
  // Defensive
  { name: "Armor Regeneration", group: "defensive", max: "4,925/s" },
  { name: "Hazard Protection",  group: "defensive", max: "10%"   },
  { name: "Health",             group: "defensive", max: "18,935" },
  { name: "Explosive Resistance",group: "defensive",max: "10%"   },
  // Skill
  { name: "Skill Haste",        group: "skill",     max: "12%"   },
  { name: "Skill Damage",       group: "skill",     max: "10%"   },
  { name: "Repair Skills",      group: "skill",     max: "20%"   },
  { name: "Status Effects",     group: "skill",     max: "10%"   },
];

// ─────────────────────────────────────────────────────────────────────────────
// GEAR MODS
// ─────────────────────────────────────────────────────────────────────────────

export interface GearModAttr {
  name:  string;
  group: AttrGroup;
  max:   string;
  note?: string;
}

export const GEAR_MOD_ATTRS: GearModAttr[] = [
  // Offensive
  { name: "Critical Hit Chance",      group: "offensive", max: "6%"    },
  { name: "Critical Hit Damage",      group: "offensive", max: "12%"   },
  { name: "Headshot Damage",          group: "offensive", max: "10%"   },
  // Defensive
  { name: "Protection from Elites",   group: "defensive", max: "13%"   },
  { name: "Armour on Kill",           group: "defensive", max: "18,935" },
  { name: "Status Effect Resistance", group: "defensive", max: "10%",
    note: "Types: Fire, Bleed, Shock & Disrupt, Blind & Deaf, Disorient & Ensnare" },
  { name: "Pulse Resistance",         group: "defensive", max: "10%"   },
  { name: "Incoming Repairs",         group: "defensive", max: "20%"   },
  // Skill
  { name: "Skill Haste",              group: "skill",     max: "12%"   },
  { name: "Skill Duration",           group: "skill",     max: "10%"   },
  { name: "Repair Skills",            group: "skill",     max: "20%"   },
];

// ─────────────────────────────────────────────────────────────────────────────
// SKILL EFFICIENCY  (special attribute — grants all of the below simultaneously)
// ─────────────────────────────────────────────────────────────────────────────

export const SKILL_EFFICIENCY_GRANTS = [
  "+1% Skill Damage",
  "+1% Skill Haste",
  "+1% Skill Duration",
  "+1% Skill Health",
  "+1% Repair Skills",
  "+1% Status Effects",
] as const;

// ─────────────────────────────────────────────────────────────────────────────
// Derived flat name lists (for dropdown compatibility)
// ─────────────────────────────────────────────────────────────────────────────

export const WEAPON_MINOR_ATTR_NAMES = WEAPON_MINOR_ATTRS.map(a => a.name);
export const GEAR_CORE_ATTR_NAMES    = GEAR_CORE_ATTRS.map(a => a.name);
export const GEAR_MINOR_ATTR_NAMES   = GEAR_MINOR_ATTRS.map(a => a.name);
export const GEAR_MOD_ATTR_NAMES     = GEAR_MOD_ATTRS.map(a => a.name);
