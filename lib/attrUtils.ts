// Attribute category sets used for icon mapping across gear and weapon cards

export const OFFENSE_ATTRS = new Set([
  "Weapon Damage", "Headshot Damage", "Critical Hit Chance", "Critical Hit Damage",
  "Damage to Elites", "Damage to Targets Out of Cover", "Explosive Damage",
  "Reload Speed", "Stability", "Accuracy", "Optimal Range",
]);

export const DEFENSE_ATTRS = new Set([
  "Armor", "Health", "Hazard Protection", "Armor on Kill", "Health on Kill",
  "Bleed Resistance", "Blind/Deaf Resistance", "Shock Resistance", "Burn Resistance",
]);

export const SKILL_ATTRS = new Set([
  "Skill Damage", "Skill Haste", "Repair Skills", "Healing Received",
]);

export function attrIconSrc(attr: string): string {
  if (OFFENSE_ATTRS.has(attr)) return "/stats/offense1.png";
  if (DEFENSE_ATTRS.has(attr)) return "/stats/defense1.png";
  if (SKILL_ATTRS.has(attr))   return "/stats/tech1.png";
  return "/stats/blank_attribute.png";
}
