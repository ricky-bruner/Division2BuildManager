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
  talentId:   string;
  talentName: string;
  /** Path to icon asset — empty string until assets are added */
  talentIcon: string;
  talentDesc: string;
  talentType: TalentType;
}

export interface UniqueAttribute {
  attributeId:   string;
  attributeDesc: string;
}
