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
  coreAttr: string;    // default drop core — modifiable via tinkering
  bonuses:  BrandBonus[];  // 1pc, 2pc, 3pc
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

export interface GearItem {
  name: string;
  brand: string;
  rarity: Rarity;
  coreAttr: string;
  coreValue: string;
  minor1: string;
  minor1Val: string;
  minor2: string;
  minor2Val: string;
  talent: string;
  mod1: string;
  mod2: string;
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
    mask: GearItem;
    backpack: GearItem;
    chest: GearItem;
    gloves: GearItem;
    holster: GearItem;
    kneepads: GearItem;
  };
  weapons: {
    primary: WeaponItem;
    secondary: WeaponItem;
    sidearm: WeaponItem;
  };
  skill1: SkillSlot;
  skill2: SkillSlot;
  notes: string;
}
