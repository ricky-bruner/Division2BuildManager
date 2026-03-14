export type Rarity = "High-End" | "Named" | "Exotic" | "Gear Set";

export interface BrandBonus {
  pieces: number;
  bonus: string;
}

export interface BrandDef {
  id: string;       // kebab-case, matches filename e.g. "alps-summit"
  name: string;
  icon: string;     // e.g. "/brands/alps-summit.png"
  bonuses: BrandBonus[];
}

export interface GearSetDef {
  id: string;
  name: string;
  icon: string;     // e.g. "/gearsets/strikers-battlegear.png"
  bonuses: BrandBonus[];
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
