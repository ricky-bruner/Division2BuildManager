export type Rarity = "High-End" | "Named" | "Exotic" | "Gear Set";

export type GearSlot = "mask" | "backpack" | "chest" | "gloves" | "holster" | "kneepads";

export interface BrandBonus {
  pieces: number;
  bonus: string;
}

export interface BrandDef {
  id:       string;
  name:     string;
  icon:     string;
  coreAttr: string;
  bonuses:  BrandBonus[];
}

export interface GearSetPerk {
  name: string;
  desc: string;
}

export interface GearSetDef {
  id:              string;
  name:            string;
  icon:            string;
  dlc:             boolean;
  coreAttrs:       string[];
  bonus2pc:        string[];
  bonus3pc:        string[];
  talent4pc?:      GearSetPerk;
  chestTalent?:    GearSetPerk;
  backpackTalent?: GearSetPerk;
  dropLocation:    string;
  talentCategory?: string;
}

export type TinkeredSlot = "core" | "minor0" | "minor1" | "talent";

export interface GearMinorValue {
  attr:  string;
  value: string;
}

export interface GearBuildSlot {
  gearId:        string;           // "" = empty slot
  coreAttr:      string;           // "" for all-cores exotics or unset
  minors:        GearMinorValue[];
  talent:        string;           // talentId / "{setId}-{slot}" / ""
  modAttrs:      GearMinorValue[];
  tinkeredSlot?: TinkeredSlot;
}

export interface WeaponItem {
  name: string;
  rarity: Rarity;
  coreAttr: string;
  coreValue: string;
  minor1: string;
  minor1Val: string;
  minor2: string;
  minor2Val: string;
  talent1: string;
  talent2: string;
  scope: string;
  barrel: string;
  underbarrel: string;
  magazine: string;
}

export interface SkillSlot {
  skill: string;
  mod: string;
}

export interface Build {
  id: number;
  name: string;
  specialization: string;
  gear: {
    mask:      GearBuildSlot;
    backpack:  GearBuildSlot;
    chest:     GearBuildSlot;
    gloves:    GearBuildSlot;
    holster:   GearBuildSlot;
    kneepads:  GearBuildSlot;
  };
  weapons: {
    primary:   WeaponItem;
    secondary: WeaponItem;
    sidearm:   WeaponItem;
  };
  skill1: SkillSlot;
  skill2: SkillSlot;
  notes: string;
}
