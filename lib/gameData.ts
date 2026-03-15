import type { GearItem, WeaponItem, SkillSlot, Build } from "./types";
export { GEAR_SETS, GEAR_SET_MAP, GEAR_SET_NAMES } from "./gearSetData";
export { BRANDS, BRAND_MAP, BRAND_NAMES } from "./brandSetData";

// Derived helpers
import { GEAR_SETS as _GS } from "./gearSetData";
import { BRANDS as _B }     from "./brandSetData";
export const GEAR_SET_BRANDS = new Set(_GS.map(g => g.name));
export const BRAND_SETS      = _B.map(b => b.name);


export const GEAR_CORE_ATTRS = [
  "Weapon Damage", "Headshot Damage", "Armor", "Health",
  "Skill Damage", "Skill Haste", "Repair Skills", "Explosive Damage",
];

export const WEAPON_CORE_ATTRS = [
  "Weapon Damage", "Critical Hit Chance", "Critical Hit Damage",
  "Headshot Damage", "Reload Speed", "Stability", "Accuracy", "Optimal Range",
];

export const MINOR_ATTRS = [
  "Weapon Damage", "Critical Hit Chance", "Critical Hit Damage", "Headshot Damage",
  "Armor on Kill", "Health on Kill", "Ammo Capacity", "Hazard Protection",
  "Skill Damage", "Skill Haste", "Repair Skills", "Healing Received",
  "Damage to Elites", "Damage to Targets Out of Cover", "Explosive Damage",
  "Bleed Resistance", "Blind/Deaf Resistance", "Shock Resistance", "Burn Resistance",
];

export const GEAR_TALENTS = [
  "Braced", "Composure", "Concussion", "Crisis Response", "Damage to Elites",
  "Devastating", "Empathic Resolve", "Entrench", "Explosive Delivery", "Fierce",
  "Finishing Moves", "Future Perfect", "Galvanize", "Glass Cannon", "Hard Hitting",
  "Intimidate", "In Sync", "Kinetic Momentum", "Mad Bomber", "Obliterate",
  "On the Ropes", "Overwatch", "Perfect Braced", "Perfect Composure",
  "Perfect Creeping Death", "Perfect Glass Cannon", "Perfect Hard Hitting",
  "Perfect Intimidate", "Perfect On the Ropes", "Perfect Overwatch", "Perfect Patience",
  "Perfect Spark", "Perfect Tech Support", "Perfect Vigilance", "Pistol Whipped",
  "Protector", "Pulse Resistance", "Reactive Targeting", "Reassigned", "Reformation",
  "Safeguard", "Sawyer's Revenge", "Skilled", "Spark", "Strained", "Tech Support",
  "Trauma", "Unstoppable Force", "Vigilance", "Wicked",
];

export const WEAPON_TALENTS = [
  "Allegro", "Boomerang", "Breadbasket", "Bullet Hell", "Cannon", "Clutch",
  "Comeback Kid", "Compensated", "Confident", "Coyote's Mask", "Cycler",
  "Determined", "Devastating", "Double Tap", "Eagle's Strike", "Empty the Mags",
  "Ferocious", "First Blood", "Frenzy", "Furious", "Future Perfect", "Gained Edge",
  "Glass Cannon", "Good Fortune", "Greased Lightning", "Groundbreaker", "Gunslinger",
  "Harmony", "Headhunter", "Ignited", "In Sync", "Intimidating", "Killer",
  "Measured", "Moment of Need", "Near Sighted", "Obliterate", "Optimist", "Overflow",
  "Perpetuation", "Perfect Allegro", "Perfect Boomerang", "Perfect Breadbasket",
  "Perfect Cannon", "Perfect Clutch", "Perfect Determined", "Perfect Double Tap",
  "Perfect Eager", "Perfect Ferocious", "Perfect Finisher", "Perfect First Blood",
  "Perfect Frenzy", "Perfect Greased Lightning", "Perfect Gunslinger",
  "Perfect Harmony", "Perfect Headhunter", "Perfect In Sync", "Perfect Killer",
  "Perfect Measured", "Perfect Moment of Need", "Perfect Optimist", "Perfect Overflow",
  "Perfect Preservation", "Perfect Ranger", "Perfect Spike", "Perfect Steady Hands",
  "Perfect Unwavering", "Preservation", "Ranger", "Riptide", "Sadist", "Salvage",
  "Shock and Awe", "Spike", "Steady Hands", "Strained", "Surgical", "Unhinged",
  "Unwavering", "Vindictive",
];

export const GEAR_MODS = [
  "None",
  "Protective Fabric Gear Mod (+4.5% Hazard Protection)",
  "Hardened Gear Mod (+1.5% Armor)",
  "Precision Gear Mod (+2% Headshot Damage)",
  "Performance Mod (+Armor on Kill)",
  "Offensive Gear Mod (+3% Weapon Damage)",
  "Skill Gear Mod (+3% Skill Damage)",
  "Utility Gear Mod (+3% Skill Haste)",
];

export const WEAPON_MODS = {
  Scope: [
    "None", "Reflex Sight (+5% CHC)", "Digital Scope (+15% Headshot)",
    "Extended Scope (+7% CHC, +10% HS)", "Ironsights",
  ],
  Barrel: [
    "None", "Muzzle Brake (+7.5% Stability)", "Flash Hider (+10% Accuracy)",
    "Compensator (+5% Stability, +5% Accuracy)", "Suppressor (-10% DMG, +20% Accuracy)",
  ],
  Underbarrel: [
    "None", "Angled Grip (+7.5% Accuracy)", "Vertical Grip (+7.5% Stability)",
    "Folding Grip (+5% Stability, +5% Accuracy)", "Short Stock (+7.5% Reload Speed)",
  ],
  Magazine: [
    "None", "Extended Magazine (+20% Ammo)", "Staccato Mag (+5% Rate of Fire)",
    "Fast Mag (+25% Reload Speed)", "Drum Mag (+40% Ammo, -10% Reload)",
  ],
};

export const SKILLS = [
  "Chem Launcher", "Drone", "Firefly", "Hive", "Pulse",
  "Seeker Mine", "Shield", "Turret",
  "Signature — Banshee", "Signature — Blinder Firefly", "Signature — Striker Drone",
];

export const SKILL_MODS: Record<string, string[]> = {
  "Chem Launcher": ["Oxidizer", "Corrosive", "Healing Mist", "Riot Foam"],
  "Drone": ["Assault", "Defender", "Fixer", "Striker"],
  "Firefly": ["Blinder", "Burster", "Demolisher", "Incinerator"],
  "Hive": ["Booster", "Restorer", "Reviver", "Stinger", "Artificer"],
  "Pulse": ["Disruptor", "Jammer", "Recon", "Remote Disruptor", "Scanner"],
  "Seeker Mine": ["Airburst", "Cluster", "Explosive", "Mender"],
  "Shield": ["Bulwark", "Crusader", "Deflector", "Intervention"],
  "Turret": ["Artillery", "Incinerator", "Minigun", "Mortar", "Sniper"],
  "Signature — Banshee": ["N/A"],
  "Signature — Blinder Firefly": ["N/A"],
  "Signature — Striker Drone": ["N/A"],
};

export const SPECIALIZATIONS = [
  { id: "demolitionist", name: "Demolitionist", icon: "/specializations/demolitionist.png" },
  { id: "firewall",      name: "Firewall",      icon: "/specializations/firewall.png"      },
  { id: "gunner",        name: "Gunner",        icon: "/specializations/gunner.png"        },
  { id: "sharpshooter",  name: "Sharpshooter",  icon: "/specializations/sharpshooter.png"  },
  { id: "survivalist",   name: "Survivalist",   icon: "/specializations/survivalist.png"   },
  { id: "technician",    name: "Technician",    icon: "/specializations/technician.png"    },
];

export const RARITY_OPTIONS = ["High-End", "Named", "Exotic", "Gear Set"] as const;

export const RARITY_BG: Record<string, string> = {
  "High-End": "linear-gradient(100deg, #231a03 0%, #14100a 45%, #0c0f14 100%)",
  "Named":    "linear-gradient(100deg, #231000 0%, #14090a 45%, #0c0f14 100%)",
  "Exotic":   "linear-gradient(100deg, #2e0a00 0%, #1a0808 45%, #0c0f14 100%)",
  "Gear Set": "linear-gradient(100deg, #00241a 0%, #071410 45%, #0c0f14 100%)",
};

export const RARITY_COLORS: Record<string, string> = {
  "High-End": "#f5c518",  // warm golden yellow
  "Named":    "#f97316",  // orange
  "Exotic":   "#e03c22",  // orange-red / coral
  "Gear Set": "#00cc7a",  // bright green-teal (matches game UI)
};

export const GEAR_SET_COLOR = "#00c4bc";

export const GEAR_SLOTS = [
  { id: "mask"      as const, label: "Mask"      },
  { id: "backpack"  as const, label: "Backpack"  },
  { id: "chest"     as const, label: "Chest"     },
  { id: "gloves"    as const, label: "Gloves"    },
  { id: "holster"   as const, label: "Holster"   },
  { id: "kneepads"  as const, label: "Kneepads"  },
];

export const WEAPON_SLOTS = [
  { id: "primary"   as const, label: "Primary"   },
  { id: "secondary" as const, label: "Secondary" },
  { id: "sidearm"   as const, label: "Sidearm"   },
];

export function defaultGearItem(): GearItem {
  return {
    name: "", brand: "", rarity: "High-End",
    coreAttr: GEAR_CORE_ATTRS[0], coreValue: "",
    minor1: MINOR_ATTRS[0], minor1Val: "",
    minor2: MINOR_ATTRS[1], minor2Val: "",
    talent: GEAR_TALENTS[0],
    mod1: GEAR_MODS[0], mod2: GEAR_MODS[0],
  };
}

export function defaultWeaponItem(): WeaponItem {
  return {
    name: "", rarity: "High-End",
    coreAttr: WEAPON_CORE_ATTRS[0], coreValue: "",
    minor1: MINOR_ATTRS[0], minor1Val: "",
    minor2: MINOR_ATTRS[1], minor2Val: "",
    talent1: WEAPON_TALENTS[0], talent2: WEAPON_TALENTS[1],
    scope: WEAPON_MODS.Scope[0], barrel: WEAPON_MODS.Barrel[0],
    underbarrel: WEAPON_MODS.Underbarrel[0], magazine: WEAPON_MODS.Magazine[0],
  };
}

export function defaultSkill(): SkillSlot {
  return { skill: SKILLS[0], mod: SKILL_MODS[SKILLS[0]][0] };
}

export function defaultBuild(): Build {
  return {
    id: Date.now(),
    name: "New Build",
    specialization: "",
    gear: {
      mask:      defaultGearItem(),
      backpack:  defaultGearItem(),
      chest:     defaultGearItem(),
      gloves:    defaultGearItem(),
      holster:   defaultGearItem(),
      kneepads:  defaultGearItem(),
    },
    weapons: {
      primary:   defaultWeaponItem(),
      secondary: defaultWeaponItem(),
      sidearm:   defaultWeaponItem(),
    },
    skill1: defaultSkill(),
    skill2: defaultSkill(),
    notes: "",
  };
}