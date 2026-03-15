// ─────────────────────────────────────────────────────────────────────────────
// Shared weapon & talent primitives
// Imported by namedWeapons.ts, exoticWeapons.ts, and any future weapon files.
// ─────────────────────────────────────────────────────────────────────────────

export type WeaponType =
  | "Assault Rifle"
  | "Light Machine Gun"
  | "Submachine Gun"
  | "Shotgun"
  | "Rifle"
  | "Marksman Rifle"
  | "Pistol";

export type TalentType =
  | "generalWeapon"
  | "generalGear"
  | "perfectWeapon"
  | "perfectGear"
  | "exoticWeapon"
  | "exoticGear";

export interface Talent {
  talentId:      string;
  talentName:    string;
  /** Path to icon asset — empty string until assets are added */
  talentIcon:    string;
  talentDesc:    string;
  talentType:    TalentType;
  /** Yellow-highlighted text in the game UI — the portion unique to the perfect/exotic upgrade */
  upgradedEffect?: string;
}

export interface UniqueAttribute {
  attributeId:   string;
  attributeDesc: string;
}

export interface WeaponTypeDef {
  type:            WeaponType;
  /** Fixed second attribute all non-named weapons of this type carry; null = Pistol (none) */
  fixedSecondAttr: string | null;
  /** Innate headshot damage bonus for this weapon type (%) */
  innateHSD:       number;
}

export const WEAPON_TYPE_DEFS: WeaponTypeDef[] = [
  { type: "Assault Rifle",    fixedSecondAttr: "21% Health Damage",                   innateHSD: 55  },
  { type: "Light Machine Gun",fixedSecondAttr: "12% Damage to Targets Out of Cover",  innateHSD: 65  },
  { type: "Submachine Gun",   fixedSecondAttr: "21% Critical Hit Chance",             innateHSD: 50  },
  { type: "Shotgun",          fixedSecondAttr: "12% Damage to Armor",                 innateHSD: 45  },
  { type: "Rifle",            fixedSecondAttr: "17% Critical Hit Damage",             innateHSD: 60  },
  { type: "Marksman Rifle",   fixedSecondAttr: "111% Headshot Damage",                innateHSD: 0   },
  { type: "Pistol",           fixedSecondAttr: null,                                  innateHSD: 100 },
];
