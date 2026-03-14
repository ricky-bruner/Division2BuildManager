// ─────────────────────────────────────────────────────────────────────────────
// Weapon Mod Slot Types
// ─────────────────────────────────────────────────────────────────────────────

export type ModSlotType = "optics" | "magazine" | "muzzle" | "underbarrel";

export interface WeaponMod {
  modId:        string;
  modName:      string;
  slotType:     ModSlotType;
  /** Physical rail/slot subtype that determines which weapons can use this mod */
  subSlot:      string;
  bonus:        string;
  penalty?:     string;
  source:       string;
  /** Weapon-specific restriction (e.g. "GR9 only") */
  restriction?: string;
}

// ─────────────────────────────────────────────────────────────────────────────
// OPTICS RAIL
// Note: "Main Pool" blueprints are obtainable via CP3s/CP4s, Weekly Projects,
//       or Inaya the blueprint vendor.
// ─────────────────────────────────────────────────────────────────────────────

export const WEAPON_MODS: WeaponMod[] = [

  // ── Optics (full optics rail) ─────────────────────────────────────────────
  { modId: "acog-scope-4x",        modName: "Acog Scope (4x)",        slotType: "optics", subSlot: "Optics",                     bonus: "+50% Optimal Range",                                               source: "From perks" },
  { modId: "552-holo-sight",       modName: "552 Holo Sight",         slotType: "optics", subSlot: "Optics",                     bonus: "+30% Accuracy / No zoom",                                          source: "Judiciary Square side mission: Police Headquarters" },
  { modId: "c79-scope-3-4x",       modName: "C79 Scope (3.4x)",       slotType: "optics", subSlot: "Optics",                     bonus: "+5% Critical Hit Chance / Optional zoom",                          source: "Constitution Hall side mission: Missing Scavengers" },
  { modId: "cqbss-scope-8x",       modName: "CQBSS Scope (8x)",       slotType: "optics", subSlot: "Optics",                     bonus: "+30% Headshot Damage / Forced zoom",                               source: "East Mall side mission: DC-62 Lab Quarantine" },
  { modId: "vx1-scope-12x",        modName: "VX1 Scope (12x)",        slotType: "optics", subSlot: "Optics",                     bonus: "+35% Headshot Damage / Forced zoom",   penalty: "-10% Reload Speed",  source: "Available by default" },
  { modId: "digital-scope",        modName: "Digital Scope",          slotType: "optics", subSlot: "Optics",                     bonus: "+45% Headshot Damage / Forced zoom / Tab to toggle second zoom",   penalty: "-5% Critical Hit Damage", source: "Sharpshooter specialisation perk" },
  { modId: "gr9-built-in-scope",   modName: "GR9 Built-in Scope (8x)",slotType: "optics", subSlot: "Optics",                     bonus: "+5% Critical Hit Chance",                                          source: "Built-in", restriction: "GR9 only" },
  { modId: "small-rds-scope",      modName: "Small RDS Scope",        slotType: "optics", subSlot: "Optics",                     bonus: "+50% Stability",                       penalty: "-20% Accuracy",      source: "Campus project: outfit rescue team" },

  // ── Long/Short Optics Rail ────────────────────────────────────────────────
  { modId: "t2-micro-red-dot",     modName: "T2 Micro Red Dot Sight", slotType: "optics", subSlot: "Long/Short Optics Rail",     bonus: "+30% Accuracy",                                                    source: "Complete Story missions and level up White House" },
  { modId: "russian-red-dot",      modName: "Russian Red Dot Sight",  slotType: "optics", subSlot: "Long/Short Optics Rail",     bonus: "+10% Critical Hit Damage",                                         source: "Main Pool" },
  { modId: "exps3-holo-sight",     modName: "EXPS3 Holo Sight",       slotType: "optics", subSlot: "Long/Short Optics Rail",     bonus: "+10% Headshot Damage",                                             source: "Main Pool" },
  { modId: "pro-red-dot-sight",    modName: "PRO Red Dot Sight",      slotType: "optics", subSlot: "Long/Short Optics Rail",     bonus: "+30% Stability",                                                   source: "Constitution Hall side mission: Outcast Work Camp" },
  { modId: "reflex-sight",         modName: "Reflex Sight",           slotType: "optics", subSlot: "Long/Short Optics Rail",     bonus: "+12% Weapon Handling",                                             source: "Theatre Project: Water Pipeline Construction" },

  // ── Long/Short/Micro Optics Rail ──────────────────────────────────────────
  { modId: "rugged-mini-reflex",   modName: "Rugged Mini Reflex Sight",slotType: "optics", subSlot: "Long/Short/Micro Optics Rail", bonus: "+5% Critical Hit Chance",                                      source: "Main Pool" },

  // ── Short/Micro Optics Rail ───────────────────────────────────────────────
  { modId: "low-reflex-sight",     modName: "Low Reflex Sight",       slotType: "optics", subSlot: "Short/Micro Optics Rail",    bonus: "+15% Headshot Damage",                 penalty: "-25% Optimal Range", source: "Foggy Bottom side mission: Columbia Plaza Broadcast" },

  // ── Iron Sights Slot ──────────────────────────────────────────────────────
  { modId: "open-iron-sights",     modName: "Open Iron Sights",       slotType: "optics", subSlot: "Iron Sights Slot",           bonus: "+30% Accuracy",                                                    source: "Main Pool" },
  { modId: "streamlined-iron-sights", modName: "Streamlined Iron Sights", slotType: "optics", subSlot: "Iron Sights Slot",      bonus: "+14% Reload Speed",                                                source: "Theatre Project: Outfit Hunting Party" },
  { modId: "weighted-iron-sights", modName: "Weighted Iron Sights",   slotType: "optics", subSlot: "Iron Sights Slot",           bonus: "+30% Stability",                                                   source: "Main Pool" },

  // ─────────────────────────────────────────────────────────────────────────
  // MAGAZINE SLOT
  // ─────────────────────────────────────────────────────────────────────────

  // ── Ammunition Belt Slot (LMGs) ───────────────────────────────────────────
  { modId: "nimble-link-belt",       modName: "Nimble Link Belt",          slotType: "magazine", subSlot: "Ammunition Belt Slot",         bonus: "+5% Rate of Fire",    source: "Foggy Bottom side mission: Navy Hill Transmission" },
  { modId: "tactical-small-pouch",   modName: "Tactical Small Pouch",      slotType: "magazine", subSlot: "Ammunition Belt Slot",         bonus: "+20% Reload Speed",   source: "Complete Story missions and level up White House" },
  { modId: "large-pouch",            modName: "Large Pouch",               slotType: "magazine", subSlot: "Ammunition Belt Slot",         bonus: "+35 Rounds",          source: "Main Pool" },
  { modId: "large-pouch-gunner",     modName: "Large Pouch (Gunner Mag)",  slotType: "magazine", subSlot: "Ammunition Belt Slot",         bonus: "+50 Rounds",          source: "Gunner specialisation perk" },
  { modId: "calibrated-link",        modName: "Calibrated Link",           slotType: "magazine", subSlot: "Ammunition Belt Slot",         bonus: "+30% Stability",      source: "East Mall side mission: Missing Curators" },

  // ── Integrated Magazine Slot ──────────────────────────────────────────────
  { modId: "underbalanced-integrated-spring", modName: "Underbalanced Integrated Spring", slotType: "magazine", subSlot: "Integrated Magazine Slot", bonus: "+5% Rate of Fire",    source: "Main Pool" },
  { modId: "compensated-integrated-spring",   modName: "Compensated Integrated Spring",   slotType: "magazine", subSlot: "Integrated Magazine Slot", bonus: "+20% Reload Speed",   source: "Downtown West side mission: Worksite Community" },
  { modId: "overbalanced-integrated-spring",  modName: "Overbalanced Integrated Spring",  slotType: "magazine", subSlot: "Integrated Magazine Slot", bonus: "+30% Stability",      source: "Main Pool" },
  { modId: "stiff-integrated-spring",         modName: "Stiff Integrated Spring",         slotType: "magazine", subSlot: "Integrated Magazine Slot", bonus: "+5% Weapon Damage",   source: "Main Pool" },

  // ── Marksman 7.62 Magazine Slot ───────────────────────────────────────────
  { modId: "mended-marksman-mag",        modName: "Mended Marksman Mag",        slotType: "magazine", subSlot: "Marksman 7.62 Magazine Slot", bonus: "+50% Optimal Range",  source: "Federal Triangle side mission: Bureau Headquarters" },
  { modId: "lightweight-marksman-mag",   modName: "Lightweight Marksman Mag",   slotType: "magazine", subSlot: "Marksman 7.62 Magazine Slot", bonus: "+20% Reload Speed",   source: "Main Pool" },
  { modId: "tightly-packed-marksman-mag",modName: "Tightly Packed Marksman Mag",slotType: "magazine", subSlot: "Marksman 7.62 Magazine Slot", bonus: "+5 Rounds",           source: "Main Pool" },
  { modId: "sturdy-marksman-mag",        modName: "Sturdy Marksman Mag",        slotType: "magazine", subSlot: "Marksman 7.62 Magazine Slot", bonus: "+20% Stability",      source: "Main Pool" },

  // ── 7.62 Magazine Slot ────────────────────────────────────────────────────
  { modId: "precision-762-mag",       modName: "Precision 7.62 Mag",        slotType: "magazine", subSlot: "7.62 Magazine Slot", bonus: "+10% Headshot Damage",                                    source: "Complete Story missions and level up White House" },
  { modId: "thin-762-mag",            modName: "Thin 7.62 Mag",             slotType: "magazine", subSlot: "7.62 Magazine Slot", bonus: "+20% Reload Speed",                                       source: "Main Pool" },
  { modId: "light-extended-762-mag",  modName: "Light Extended 7.62 Mag",   slotType: "magazine", subSlot: "7.62 Magazine Slot", bonus: "+15 Rounds",                                              source: "Main Pool" },
  { modId: "sturdy-extended-762-mag", modName: "Sturdy Extended 7.62 Mag",  slotType: "magazine", subSlot: "7.62 Magazine Slot", bonus: "+20 Rounds",           penalty: "-10% Reload Speed",     source: "Main Pool" },
  { modId: "weighted-762-mag",        modName: "Weighted 7.62 Mag",         slotType: "magazine", subSlot: "7.62 Magazine Slot", bonus: "+20% Stability",                                          source: "Main Pool" },

  // ── 5.56 Magazine Slot ────────────────────────────────────────────────────
  { modId: "tactical-556-mag",        modName: "Tactical 5.56 Mag",         slotType: "magazine", subSlot: "5.56 Magazine Slot", bonus: "+10% Critical Hit Damage",                                source: "West Potomac Park side mission: Outcast Propaganda Outpost (The Mast CP)" },
  { modId: "infantry-556-mag",        modName: "Infantry 5.56 Mag",         slotType: "magazine", subSlot: "5.56 Magazine Slot", bonus: "+70% Optimal Range",                                      source: "Survivalist specialisation perk" },
  { modId: "light-extended-556-mag",  modName: "Light Extended 5.56 Mag",   slotType: "magazine", subSlot: "5.56 Magazine Slot", bonus: "+15 Rounds",                                              source: "Federal Triangle side mission: Department of Justice" },
  { modId: "sturdy-extended-556-mag", modName: "Sturdy Extended 5.56 Mag",  slotType: "magazine", subSlot: "5.56 Magazine Slot", bonus: "+20 Rounds",           penalty: "-10% Reload Speed",     source: "Main Pool" },
  { modId: "balanced-spring-556-mag", modName: "Balanced Spring 5.56 Mag",  slotType: "magazine", subSlot: "5.56 Magazine Slot", bonus: "+30% Stability",                                          source: "Complete Story missions and level up White House" },

  // ── .45 ACP Magazine Slot ─────────────────────────────────────────────────
  { modId: "force-feed-45-mag",       modName: "Force Feed .45 ACP Mag",    slotType: "magazine", subSlot: ".45 ACP Magazine Slot", bonus: "+5% Rate of Fire",                                     source: "West End side mission: Garage Stash (+Underground faction)" },
  { modId: "short-spring-45-mag",     modName: "Short Spring .45 ACP Mag",  slotType: "magazine", subSlot: ".45 ACP Magazine Slot", bonus: "+20% Reload Speed",                                    source: "Main Pool" },
  { modId: "extended-45-mag",         modName: "Extended .45 ACP Mag",      slotType: "magazine", subSlot: ".45 ACP Magazine Slot", bonus: "+15 Rounds",                                           source: "Downtown East side mission: Agent Edwards Support" },
  { modId: "oversized-45-mag",        modName: "Oversized .45 ACP Mag",     slotType: "magazine", subSlot: ".45 ACP Magazine Slot", bonus: "+20 Rounds",          penalty: "-10% Reload Speed",    source: "Main Pool" },
  { modId: "precision-feeding-45-mag",modName: "Precision Feeding .45 Mag", slotType: "magazine", subSlot: ".45 ACP Magazine Slot", bonus: "+30% Stability",                                       source: "Main Pool" },

  // ── 9mm Magazine Slot ─────────────────────────────────────────────────────
  { modId: "heavy-spring-9mm-mag",    modName: "Heavy Spring 9mm Mag",      slotType: "magazine", subSlot: "9mm Magazine Slot", bonus: "+10% Critical Hit Damage",                                 source: "Main Pool" },
  { modId: "oversized-9mm-mag",       modName: "Oversized 9mm Mag",         slotType: "magazine", subSlot: "9mm Magazine Slot", bonus: "+15 Rounds",                                               source: "Main Pool" },
  { modId: "extended-9mm-mag",        modName: "Extended 9mm Mag",          slotType: "magazine", subSlot: "9mm Magazine Slot", bonus: "+20 Rounds",          penalty: "-10% Reload Speed",        source: "West Potomac Park side mission: Missing Campus Patrol" },
  { modId: "segmented-9mm-mag",       modName: "Segmented 9mm Mag",         slotType: "magazine", subSlot: "9mm Magazine Slot", bonus: "+20% Reload Speed",                                        source: "East Mall side mission: Agent Brooks Support" },

  // ── Pistol Magazine Slot ──────────────────────────────────────────────────
  { modId: "field-pistol-mag",        modName: "Field Pistol Mag",          slotType: "magazine", subSlot: "Pistol Magazine Slot", bonus: "+30% Optimal Range",                                    source: "Complete Story missions and level up White House" },
  { modId: "police-pistol-mag",       modName: "Police Pistol Mag",         slotType: "magazine", subSlot: "Pistol Magazine Slot", bonus: "+20% Reload Speed",                                     source: "Main Pool" },
  { modId: "extended-pistol-mag",     modName: "Extended Pistol Mag",       slotType: "magazine", subSlot: "Pistol Magazine Slot", bonus: "+11 Rounds",                                            source: "Downtown West side mission: Beekeeper Jeff" },

  // ── Revolver Drum Slot ────────────────────────────────────────────────────
  { modId: "speed-loading-revolver-drum", modName: "Speed Loading Revolver Drum", slotType: "magazine", subSlot: "Revolver Drum Slot", bonus: "+20% Reload Speed",                                source: "Main Pool" },

  // ─────────────────────────────────────────────────────────────────────────
  // MUZZLE SLOT
  // ─────────────────────────────────────────────────────────────────────────

  // ── 7.62 Muzzle Slot ──────────────────────────────────────────────────────
  { modId: "large-suppressor-762",     modName: "Large Suppressor 7.62",       slotType: "muzzle", subSlot: "7.62 Muzzle Slot", bonus: "+30% Accuracy",      source: "West End side mission: Historic District Attack" },
  { modId: "muzzle-brake-762",         modName: "Muzzle Brake 7.62",           slotType: "muzzle", subSlot: "7.62 Muzzle Slot", bonus: "+5% Critical Hit Chance",  source: "Main Pool" },
  { modId: "flash-hider-762",          modName: "Flash Hider 7.62",            slotType: "muzzle", subSlot: "7.62 Muzzle Slot", bonus: "+10% Critical Hit Damage", source: "Downtown East side mission: Empire Autumn Hotel" },
  { modId: "loud-vent-brake-762",      modName: "Loud Vent Brake 7.62",        slotType: "muzzle", subSlot: "7.62 Muzzle Slot", bonus: "+50% Optimal Range", source: "Main Pool" },
  { modId: "compensator-762",          modName: "Compensator 7.62",            slotType: "muzzle", subSlot: "7.62 Muzzle Slot", bonus: "+30% Stability",     source: "Complete Story missions and level up White House" },
  { modId: "omega-762-rifle-suppressor",modName: "Omega 7.62 Rifle Suppressor",slotType: "muzzle", subSlot: "7.62 Muzzle Slot", bonus: "+40% Stability",     penalty: "-10% Optimal Range", source: "Main Pool" },

  // ── 5.56 Muzzle Slot ──────────────────────────────────────────────────────
  { modId: "large-suppressor-556",     modName: "Large Suppressor 5.56",       slotType: "muzzle", subSlot: "5.56 Muzzle Slot", bonus: "+30% Accuracy",      source: "Main Pool" },
  { modId: "muzzle-brake-556",         modName: "Muzzle Brake 5.56",           slotType: "muzzle", subSlot: "5.56 Muzzle Slot", bonus: "+5% Critical Hit Chance",  source: "Theatre Project: Reclaimer Crew" },
  { modId: "flash-hider-556",          modName: "Flash Hider 5.56",            slotType: "muzzle", subSlot: "5.56 Muzzle Slot", bonus: "+10% Critical Hit Damage", source: "Main Pool" },
  { modId: "loud-vent-brake-556",      modName: "Loud Vent Brake 5.56",        slotType: "muzzle", subSlot: "5.56 Muzzle Slot", bonus: "+50% Optimal Range", source: "Complete Story missions and level up White House" },
  { modId: "compensator-556",          modName: "Compensator 5.56",            slotType: "muzzle", subSlot: "5.56 Muzzle Slot", bonus: "+30% Stability",     source: "Campus Project: Food Aid Operation" },
  { modId: "omega-556-rifle-suppressor",modName: "Omega 5.56 Rifle Suppressor",slotType: "muzzle", subSlot: "5.56 Muzzle Slot", bonus: "+40% Stability",     penalty: "-10% Optimal Range", source: "West End side mission: Potomac Relief Camp" },
  { modId: "qdc-sound-suppressor",     modName: "QDC Sound Suppressor",        slotType: "muzzle", subSlot: "5.56 Muzzle Slot", bonus: "+20% Stability",     source: "Weapon-specific",  restriction: "Stoner LAMG and Dare only" },

  // ── .45 Muzzle Slot ───────────────────────────────────────────────────────
  { modId: "small-suppressor-45",      modName: "Small Suppressor .45",        slotType: "muzzle", subSlot: ".45 Muzzle Slot", bonus: "+30% Accuracy",       source: "Main Pool" },
  { modId: "osprey-45-suppressor",     modName: "Osprey 45 Suppressor",        slotType: "muzzle", subSlot: ".45 Muzzle Slot", bonus: "+5% Critical Hit Chance",  source: "Complete Story missions and level up White House" },
  { modId: "flash-hider-45",           modName: "Flash Hider .45",             slotType: "muzzle", subSlot: ".45 Muzzle Slot", bonus: "+10% Critical Hit Damage", source: "Main Pool" },
  { modId: "muzzle-brake-45",          modName: "Muzzle Brake .45",            slotType: "muzzle", subSlot: ".45 Muzzle Slot", bonus: "+10% Headshot Damage",     source: "Foggy Bottom side mission: Greenhouse Community" },
  { modId: "loud-vent-brake-45",       modName: "Loud Vent Brake .45",         slotType: "muzzle", subSlot: ".45 Muzzle Slot", bonus: "+50% Optimal Range",  source: "West Mall side mission: Medical Camp Attack" },
  { modId: "compensator-45",           modName: "Compensator .45",             slotType: "muzzle", subSlot: ".45 Muzzle Slot", bonus: "+30% Stability",      source: "Main Pool" },

  // ── 9mm Muzzle Slot ───────────────────────────────────────────────────────
  { modId: "small-suppressor-9mm",     modName: "Small Suppressor 9mm",        slotType: "muzzle", subSlot: "9mm Muzzle Slot", bonus: "+30% Accuracy",       source: "Complete Story missions and level up White House" },
  { modId: "osprey-9-suppressor",      modName: "Osprey 9 Suppressor",         slotType: "muzzle", subSlot: "9mm Muzzle Slot", bonus: "+5% Critical Hit Chance",  source: "Judiciary Square side mission: Missing Wire Scavengers" },
  { modId: "flash-hider-9mm",          modName: "Flash Hider 9mm",             slotType: "muzzle", subSlot: "9mm Muzzle Slot", bonus: "+10% Critical Hit Damage", source: "Main Pool" },
  { modId: "muzzle-brake-9mm",         modName: "Muzzle Brake 9mm",            slotType: "muzzle", subSlot: "9mm Muzzle Slot", bonus: "+10% Headshot Damage",     source: "Main Pool" },
  { modId: "loud-vent-brake-9mm",      modName: "Loud Vent Brake 9mm",         slotType: "muzzle", subSlot: "9mm Muzzle Slot", bonus: "+50% Optimal Range",  source: "Main Pool" },
  { modId: "compensator-9mm",          modName: "Compensator 9mm",             slotType: "muzzle", subSlot: "9mm Muzzle Slot", bonus: "+30% Stability",      source: "Federal Triangle side mission: National Archives" },

  // ─────────────────────────────────────────────────────────────────────────
  // UNDERBARREL
  // ─────────────────────────────────────────────────────────────────────────

  // ── Long Underbarrel Rail ─────────────────────────────────────────────────
  { modId: "short-grip",              modName: "Short Grip",              slotType: "underbarrel", subSlot: "Long Underbarrel Rail",               bonus: "+10% Critical Hit Damage",           source: "Complete Story missions and level up White House" },
  { modId: "tactical-short-grip",     modName: "Tactical Short Grip",     slotType: "underbarrel", subSlot: "Long Underbarrel Rail",               bonus: "+15% Critical Hit Damage",           source: "Firewall Specialisation Perk" },
  { modId: "linked-laser-pointer",    modName: "Linked Laser Pointer",    slotType: "underbarrel", subSlot: "Long Underbarrel Rail",               bonus: "Pulses targets at which it's aimed", source: "Technician Specialisation Perk" },
  { modId: "handstop",                modName: "Handstop",                slotType: "underbarrel", subSlot: "Long Underbarrel Rail",               bonus: "+14% Reload Speed",                  source: "Downtown East side mission: Odea Retail Store" },

  // ── Long/Short Underbarrel Rail ───────────────────────────────────────────
  { modId: "vertical-grip",           modName: "Vertical Grip",           slotType: "underbarrel", subSlot: "Long/Short Underbarrel Rail",         bonus: "+30% Accuracy",                      source: "Main Pool" },
  { modId: "angled-grip",             modName: "Angled Grip",             slotType: "underbarrel", subSlot: "Long/Short Underbarrel Rail",         bonus: "+30% Stability",                     source: "East Mall side mission: Water Source" },

  // ── Long/Short Underbarrel Rail / Side Slot ───────────────────────────────
  { modId: "laser-pointer",           modName: "Laser Pointer",           slotType: "underbarrel", subSlot: "Long/Short Underbarrel Rail / Side Slot", bonus: "+5% Critical Hit Chance",       source: "Constitution Hall side mission: True Sons Broadcast Outpost" },
  { modId: "small-laser-pointer",     modName: "Small Laser Pointer",     slotType: "underbarrel", subSlot: "Long/Short Underbarrel Rail / Side Slot", bonus: "+7% Critical Hit Chance",       source: "Demolitionist Specialisation Perk" },

  // ── Gadget Slot ───────────────────────────────────────────────────────────
  { modId: "compact-small-laser",     modName: "Compact Coupled Small Laser Pointer", slotType: "underbarrel", subSlot: "Gadget Slot", bonus: "+10% Critical Hit Chance",  source: "Complete Story missions and level up White House" },
  { modId: "compact-laser-pointer",   modName: "Compact Coupled Laser Pointer",       slotType: "underbarrel", subSlot: "Gadget Slot", bonus: "+10% Headshot Damage",      source: "Main Pool" },
  { modId: "pistol-flashlight",       modName: "Pistol Flashlight",                  slotType: "underbarrel", subSlot: "Gadget Slot", bonus: "Illuminates dark areas",    source: "Underground tank" },
];

// ─────────────────────────────────────────────────────────────────────────────
// Derived helpers
// ─────────────────────────────────────────────────────────────────────────────

export const MOD_MAP = new Map(WEAPON_MODS.map(m => [m.modId, m]));

/** All mods for a given slot type, sorted by subSlot then modName */
export function modsForSlot(slotType: ModSlotType): WeaponMod[] {
  return WEAPON_MODS.filter(m => m.slotType === slotType);
}

/** Flat name list for a slot type — for dropdown compat */
export function modNamesForSlot(slotType: ModSlotType): string[] {
  return modsForSlot(slotType).map(m => m.modName);
}

/** All unique subSlot names for a given slot type */
export function subSlotsForType(slotType: ModSlotType): string[] {
  return [...new Set(modsForSlot(slotType).map(m => m.subSlot))];
}
