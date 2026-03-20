// Attribute category sets used for icon mapping across gear and weapon cards

export const OFFENSE_ATTRS = new Set([
  "Weapon Damage", "Weapon Handling", "Headshot Damage",
  "Critical Hit Chance", "Critical Hit Damage",
  "Damage to Elites", "Damage to Targets Out of Cover", "DMG to Target Out of Cover",
  "Damage to Armor", "Health Damage",
  "Explosive Damage",
  "Magazine Size", "Swap Speed", "Ammo Capacity",
]);

export const DEFENSE_ATTRS = new Set([
  "Armor", "Health", "Armor Regeneration",
  "Hazard Protection",
  "Armor on Kill", "Armour on Kill", "Health on Kill",
  "Protection from Elites",
  "Incoming Repairs",
  "Bleed Resistance", "Blind/Deaf Resistance", "Shock Resistance", "Burn Resistance",
  "Explosive Resistance", "Status Effect Resistance", "Pulse Resistance",
]);

export const SKILL_ATTRS = new Set([
  "Skill Tier",
  "Skill Damage", "Skill Haste", "Skill Duration",
  "Repair Skills", "Healing Received",
  "Status Effects",
  "Reload Speed", "Stability", "Accuracy", "Optimal Range", "Rate of Fire",
]);

export function attrIconSrc(attr: string, series: 1 | 2 | 3 = 1): string {
  if (OFFENSE_ATTRS.has(attr)) return `/stats/offense${series}.png`;
  if (DEFENSE_ATTRS.has(attr)) return `/stats/defense${series}.png`;
  if (SKILL_ATTRS.has(attr))   return `/stats/tech${series}.png`;
  return "/stats/blank_attribute.png";
}
