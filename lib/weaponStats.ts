import type { WeaponType } from "./weaponTypes";

// ─────────────────────────────────────────────────────────────────────────────
// Weapon Stats
// One entry per weapon variant (base models + named + exotic).
// Named/exotic entries carry weaponId linking to namedWeapons.ts / exoticWeapons.ts.
//
// modSlots encoding:
//   digit  = number of mod slots
//   !      = Missing Muzzle
//   #      = Missing Underbarrel
//   $      = Missing Magazine
//   &      = Missing Optics
//   \      = Has long rail
//   "N/A"  = Not applicable (exotics with fixed mods / no standard slots)
//
// moddedSustainDps includes -10% reload speed penalty from large mag where applicable.
// moddedMagSize null = weapon has no magazine mod slot (e.g. The Bighorn).
// ─────────────────────────────────────────────────────────────────────────────

export interface WeaponStat {
  weaponName:       string;
  baseModel:        string;
  type:             WeaponType;
  /** Links to NamedWeapon.weaponId or ExoticWeapon.weaponId — omitted for base model variants */
  weaponId?:        string;
  rpm:              number;
  baseMagSize:      number;
  moddedMagSize:    number | null;
  emptyReload:      number;
  baseDamage:       number;
  dps:              number;
  sustainDps:       number;
  /** null when weapon has no reload mechanic (e.g. Bullet King) */
  totalMag:         number | null;
  /** null when weapon has no magazine mod slot (e.g. all Shotguns) */
  moddedSustainDps: number | null;
  optimalRange:     number;
  modSlots:         string;
  hsd:              number;
}

export const WEAPON_STATS: WeaponStat[] = [

  // ── Assault Rifles ────────────────────────────────────────────────────────

  // ACR
  { weaponName: "ACR",                     baseModel: "ACR",            type: "Assault Rifle",                   rpm: 650, baseMagSize: 30, moddedMagSize: 50, emptyReload: 1.91, baseDamage: 58896.5, dps: 638045, sustainDps: 377604, totalMag: 1766895, moddedSustainDps: 451288, optimalRange: 31, modSlots: "4\\", hsd: 55 },
  { weaponName: "ACR-E",                   baseModel: "ACR",            type: "Assault Rifle",                   rpm: 650, baseMagSize: 30, moddedMagSize: 50, emptyReload: 1.91, baseDamage: 58896.5, dps: 638045, sustainDps: 377604, totalMag: 1766895, moddedSustainDps: 451288, optimalRange: 31, modSlots: "4\\", hsd: 55 },

  // AK-47
  { weaponName: "AK-M",                    baseModel: "AK-47",          type: "Assault Rifle",                   rpm: 600, baseMagSize: 30, moddedMagSize: 50, emptyReload: 2.30, baseDamage: 67175.0, dps: 671750, sustainDps: 380236, totalMag: 2015250, moddedSustainDps: 460103, optimalRange: 27, modSlots: "3!",  hsd: 55 },
  { weaponName: "Military AK-M",           baseModel: "AK-47",          type: "Assault Rifle",                   rpm: 600, baseMagSize: 30, moddedMagSize: 50, emptyReload: 2.30, baseDamage: 64716.5, dps: 647165, sustainDps: 366320, totalMag: 1941495, moddedSustainDps: 443264, optimalRange: 27, modSlots: "4\\", hsd: 55 },
  { weaponName: "Black Market AK-M",       baseModel: "AK-47",          type: "Assault Rifle",                   rpm: 600, baseMagSize: 30, moddedMagSize: 50, emptyReload: 2.30, baseDamage: 64716.5, dps: 647165, sustainDps: 366320, totalMag: 1941495, moddedSustainDps: 443264, optimalRange: 27, modSlots: "4\\", hsd: 55 },
  { weaponName: "Black Market AK-M Replica",baseModel: "AK-47",         type: "Assault Rifle",                   rpm: 600, baseMagSize: 30, moddedMagSize: 50, emptyReload: 2.30, baseDamage: 64716.5, dps: 647165, sustainDps: 366320, totalMag: 1941495, moddedSustainDps: 443264, optimalRange: 27, modSlots: "4\\", hsd: 55 },
  { weaponName: "First Sight",             baseModel: "AK-47",          type: "Assault Rifle", weaponId: "first-sight",     rpm: 600, baseMagSize: 30, moddedMagSize: 50, emptyReload: 2.80, baseDamage: 67175.0, dps: 671750, sustainDps: 347457, totalMag: 2015250, moddedSustainDps: 430609, optimalRange: 27, modSlots: "3!",  hsd: 85 },
  { weaponName: "Manic",                   baseModel: "AK-47",          type: "Assault Rifle", weaponId: "manic",           rpm: 600, baseMagSize: 30, moddedMagSize: 50, emptyReload: 2.30, baseDamage: 64716.5, dps: 647165, sustainDps: 366320, totalMag: 1941495, moddedSustainDps: 443264, optimalRange: 27, modSlots: "4\\", hsd: 55 },

  // AUG
  { weaponName: "AUG A3-CQC",             baseModel: "AUG",            type: "Assault Rifle",                   rpm: 680, baseMagSize: 42, moddedMagSize: 62, emptyReload: 2.16, baseDamage: 57218.0, dps: 648471, sustainDps: 409684, totalMag: 2403156, moddedSustainDps: 464907, optimalRange: 26, modSlots: "4",   hsd: 55 },
  { weaponName: "Invisible Hand",          baseModel: "AUG",            type: "Assault Rifle", weaponId: "invisible-hand",  rpm: 782, baseMagSize: 42, moddedMagSize: 62, emptyReload: 2.16, baseDamage: 57218.0, dps: 745741, sustainDps: 446475, totalMag: 2403156, moddedSustainDps: 512867, optimalRange: 26, modSlots: "4",   hsd: 55 },
  { weaponName: "The Bighorn",             baseModel: "AUG",            type: "Assault Rifle", weaponId: "the-bighorn",     rpm: 800, baseMagSize: 42, moddedMagSize: null, emptyReload: 1.80, baseDamage: 57218.0, dps: 762907, sustainDps: 485486, totalMag: 2403156, moddedSustainDps: 485486, optimalRange: 40, modSlots: "N/A", hsd: 55 },

  // Carbine 7
  { weaponName: "Carbine 7",               baseModel: "Carbine 7",      type: "Assault Rifle",                   rpm: 790, baseMagSize: 30, moddedMagSize: 50, emptyReload: 2.02, baseDamage: 49790.0, dps: 655568, sustainDps: 347495, totalMag: 1493700, moddedSustainDps: 427935, optimalRange: 28, modSlots: "4\\", hsd: 55 },
  { weaponName: "The Drill",               baseModel: "Carbine 7",      type: "Assault Rifle", weaponId: "the-drill",       rpm: 790, baseMagSize: 30, moddedMagSize: 50, emptyReload: 2.02, baseDamage: 49790.0, dps: 655568, sustainDps: 347495, totalMag: 1493700, moddedSustainDps: 427935, optimalRange: 28, modSlots: "4\\", hsd: 55 },

  // F2000
  { weaponName: "F2000",                   baseModel: "F2000",          type: "Assault Rifle",                   rpm: 850, baseMagSize: 30, moddedMagSize: 50, emptyReload: 2.40, baseDamage: 49104.0, dps: 695640, sustainDps: 326081, totalMag: 1473120, moddedSustainDps: 414071, optimalRange: 31, modSlots: "3#",  hsd: 55 },
  { weaponName: "F2000 Replica",           baseModel: "F2000",          type: "Assault Rifle",                   rpm: 850, baseMagSize: 30, moddedMagSize: 50, emptyReload: 2.40, baseDamage: 49104.0, dps: 695640, sustainDps: 326081, totalMag: 1473120, moddedSustainDps: 414071, optimalRange: 31, modSlots: "3#",  hsd: 55 },
  { weaponName: "Shield Splinterer",       baseModel: "F2000",          type: "Assault Rifle", weaponId: "shield-splinterer", rpm: 850, baseMagSize: 30, moddedMagSize: 50, emptyReload: 2.40, baseDamage: 49104.0, dps: 695640, sustainDps: 326081, totalMag: 1473120, moddedSustainDps: 414071, optimalRange: 31, modSlots: "3#",  hsd: 55 },

  // FAL
  { weaponName: "FAL",                     baseModel: "FAL",            type: "Assault Rifle",                   rpm: 700, baseMagSize: 20, moddedMagSize: 40, emptyReload: 2.14, baseDamage: 57646.0, dps: 672537, sustainDps: 299127, totalMag: 1152920, moddedSustainDps: 414081, optimalRange: 35, modSlots: "4\\", hsd: 55 },
  { weaponName: "FAL SA-58",               baseModel: "FAL",            type: "Assault Rifle",                   rpm: 700, baseMagSize: 20, moddedMagSize: 40, emptyReload: 2.14, baseDamage: 57646.0, dps: 672537, sustainDps: 299127, totalMag: 1152920, moddedSustainDps: 414081, optimalRange: 35, modSlots: "4\\", hsd: 55 },
  { weaponName: "FAL SA-58 Para",          baseModel: "FAL",            type: "Assault Rifle",                   rpm: 700, baseMagSize: 20, moddedMagSize: 40, emptyReload: 2.14, baseDamage: 57646.0, dps: 672537, sustainDps: 299127, totalMag: 1152920, moddedSustainDps: 414081, optimalRange: 35, modSlots: "4\\", hsd: 55 },
  { weaponName: "FAL SA-58 Para Replica",  baseModel: "FAL",            type: "Assault Rifle",                   rpm: 700, baseMagSize: 20, moddedMagSize: 40, emptyReload: 2.14, baseDamage: 57646.0, dps: 672537, sustainDps: 299127, totalMag: 1152920, moddedSustainDps: 414081, optimalRange: 35, modSlots: "4\\", hsd: 55 },
  { weaponName: "Goalie",                  baseModel: "FAL",            type: "Assault Rifle", weaponId: "goalie",          rpm: 700, baseMagSize: 20, moddedMagSize: 40, emptyReload: 2.14, baseDamage: 57646.0, dps: 672537, sustainDps: 299127, totalMag: 1152920, moddedSustainDps: 414081, optimalRange: 35, modSlots: "4\\", hsd: 55 },
  { weaponName: "Strega",                  baseModel: "FAL",            type: "Assault Rifle", weaponId: "strega",          rpm: 700, baseMagSize: 20, moddedMagSize: 40, emptyReload: 1.95, baseDamage: 57646.0, dps: 672537, sustainDps: 314637, totalMag: 1152920, moddedSustainDps: 428709, optimalRange: 35, modSlots: "N/A", hsd: 55 },

  // FAMAS
  { weaponName: "FAMAS 2010",              baseModel: "FAMAS",          type: "Assault Rifle",                   rpm: 900, baseMagSize: 30, moddedMagSize: 50, emptyReload: 2.49, baseDamage: 45272.5, dps: 679088, sustainDps: 302489, totalMag: 1358175, moddedSustainDps: 388716, optimalRange: 26, modSlots: "4",   hsd: 55 },
  { weaponName: "FAMAS 2010 Replica",      baseModel: "FAMAS",          type: "Assault Rifle",                   rpm: 900, baseMagSize: 30, moddedMagSize: 50, emptyReload: 2.49, baseDamage: 45272.5, dps: 679088, sustainDps: 302489, totalMag: 1358175, moddedSustainDps: 388716, optimalRange: 26, modSlots: "4",   hsd: 55 },
  { weaponName: "Huntsman",                baseModel: "FAMAS",          type: "Assault Rifle", weaponId: "huntsman",        rpm: 900, baseMagSize: 30, moddedMagSize: 50, emptyReload: 2.49, baseDamage: 45272.5, dps: 679088, sustainDps: 302489, totalMag: 1358175, moddedSustainDps: 388716, optimalRange: 26, modSlots: "4",   hsd: 55 },
  { weaponName: "Burn Out",                baseModel: "FAMAS",          type: "Assault Rifle", weaponId: "burn-out",        rpm: 900, baseMagSize: 30, moddedMagSize: 50, emptyReload: 2.49, baseDamage: 45272.5, dps: 679088, sustainDps: 302489, totalMag: 1358175, moddedSustainDps: 388716, optimalRange: 26, modSlots: "4",   hsd: 55 },

  // G36
  { weaponName: "Military G36",            baseModel: "G36",            type: "Assault Rifle",                   rpm: 750, baseMagSize: 30, moddedMagSize: 50, emptyReload: 2.34, baseDamage: 52564.0, dps: 657050, sustainDps: 332684, totalMag: 1576920, moddedSustainDps: 414543, optimalRange: 35, modSlots: "4\\", hsd: 55 },
  { weaponName: "G36 C",                   baseModel: "G36",            type: "Assault Rifle",                   rpm: 750, baseMagSize: 30, moddedMagSize: 50, emptyReload: 2.34, baseDamage: 52564.0, dps: 657050, sustainDps: 332684, totalMag: 1576920, moddedSustainDps: 414543, optimalRange: 35, modSlots: "4",   hsd: 55 },
  { weaponName: "G36 Enhanced",            baseModel: "G36",            type: "Assault Rifle",                   rpm: 750, baseMagSize: 30, moddedMagSize: 50, emptyReload: 2.34, baseDamage: 52564.0, dps: 657050, sustainDps: 332684, totalMag: 1576920, moddedSustainDps: 414543, optimalRange: 35, modSlots: "4\\", hsd: 55 },
  { weaponName: "G36 Enhanced Replica",    baseModel: "G36",            type: "Assault Rifle",                   rpm: 750, baseMagSize: 30, moddedMagSize: 50, emptyReload: 2.34, baseDamage: 52564.0, dps: 657050, sustainDps: 332684, totalMag: 1576920, moddedSustainDps: 414543, optimalRange: 35, modSlots: "4\\", hsd: 55 },
  { weaponName: "Caretaker",               baseModel: "G36",            type: "Assault Rifle", weaponId: "caretaker",       rpm: 750, baseMagSize: 30, moddedMagSize: 50, emptyReload: 2.34, baseDamage: 52564.0, dps: 657050, sustainDps: 332684, totalMag: 1576920, moddedSustainDps: 414543, optimalRange: 35, modSlots: "4\\", hsd: 55 },
  { weaponName: "Born Great",              baseModel: "G36",            type: "Assault Rifle", weaponId: "born-great",      rpm: 750, baseMagSize: 30, moddedMagSize: 50, emptyReload: 2.34, baseDamage: 52564.0, dps: 657050, sustainDps: 332684, totalMag: 1576920, moddedSustainDps: 414543, optimalRange: 35, modSlots: "4\\", hsd: 55 },

  // Honey Badger
  { weaponName: "Honey Badger",            baseModel: "Honey Badger",   type: "Assault Rifle",                             rpm: 800, baseMagSize: 30, moddedMagSize: 50, emptyReload: 2.06, baseDamage: 51271.0, dps: 683613, sustainDps: 356875, totalMag: 1538130, moddedSustainDps: 441231, optimalRange: 28, modSlots: "3!",  hsd: 55 },
  { weaponName: "Savage Wolverine",        baseModel: "Honey Badger",   type: "Assault Rifle", weaponId: "savage-wolverine", rpm: 800, baseMagSize: 30, moddedMagSize: 50, emptyReload: 2.06, baseDamage: 51271.0, dps: 683613, sustainDps: 356875, totalMag: 1538130, moddedSustainDps: 441231, optimalRange: 28, modSlots: "3!",  hsd: 55 },

  // M4
  { weaponName: "Police M4",               baseModel: "M4",             type: "Assault Rifle",                             rpm: 850, baseMagSize: 30, moddedMagSize: 50, emptyReload: 2.24, baseDamage: 46917.5, dps: 664665, sustainDps: 323001, totalMag: 1407525, moddedSustainDps: 406606, optimalRange: 31, modSlots: "4\\", hsd: 55 },
  { weaponName: "Police M4 Replica",       baseModel: "M4",             type: "Assault Rifle",                             rpm: 850, baseMagSize: 30, moddedMagSize: 50, emptyReload: 2.24, baseDamage: 46917.5, dps: 664665, sustainDps: 323001, totalMag: 1407525, moddedSustainDps: 406606, optimalRange: 31, modSlots: "4\\", hsd: 55 },
  { weaponName: "Pyromaniac",              baseModel: "M4",             type: "Assault Rifle", weaponId: "pyromaniac",       rpm: 850, baseMagSize: 30, moddedMagSize: 50, emptyReload: 2.24, baseDamage: 46917.5, dps: 664665, sustainDps: 323001, totalMag: 1407525, moddedSustainDps: 406606, optimalRange: 31, modSlots: "4\\", hsd: 55 },
  { weaponName: "Lexington",               baseModel: "M4",             type: "Assault Rifle", weaponId: "lexington",        rpm: 850, baseMagSize: 30, moddedMagSize: 50, emptyReload: 2.24, baseDamage: 48699.5, dps: 689910, sustainDps: 335269, totalMag: 1460985, moddedSustainDps: 422049, optimalRange: 31, modSlots: "4\\", hsd: 55 },
  { weaponName: "St. Elmo's Engine",       baseModel: "M4",             type: "Assault Rifle", weaponId: "st-elmos-engine",  rpm: 850, baseMagSize: 40, moddedMagSize: 70, emptyReload: 2.04, baseDamage: 46917.5, dps: 664665, sustainDps: 385872, totalMag: 3284225, moddedSustainDps: 470440, optimalRange: 31, modSlots: "N/A", hsd: 55 },

  // MK16
  { weaponName: "Mk16",                    baseModel: "MK16",           type: "Assault Rifle",                             rpm: 650, baseMagSize: 30, moddedMagSize: 50, emptyReload: 2.02, baseDamage: 59221.0, dps: 641561, sustainDps: 370964, totalMag: 1776630, moddedSustainDps: 446251, optimalRange: 31, modSlots: "4\\", hsd: 55 },
  { weaponName: "SOCOM Mk16",              baseModel: "MK16",           type: "Assault Rifle",                             rpm: 650, baseMagSize: 30, moddedMagSize: 50, emptyReload: 2.02, baseDamage: 59221.0, dps: 641561, sustainDps: 370964, totalMag: 1776630, moddedSustainDps: 446251, optimalRange: 31, modSlots: "4\\", hsd: 55 },
  { weaponName: "Tactical Mk 16",          baseModel: "MK16",           type: "Assault Rifle",                             rpm: 650, baseMagSize: 30, moddedMagSize: 50, emptyReload: 2.02, baseDamage: 59221.0, dps: 641561, sustainDps: 370964, totalMag: 1776630, moddedSustainDps: 446251, optimalRange: 31, modSlots: "4\\", hsd: 55 },
  { weaponName: "Tactical Mk 16 Replica",  baseModel: "MK16",           type: "Assault Rifle",                             rpm: 650, baseMagSize: 30, moddedMagSize: 50, emptyReload: 2.02, baseDamage: 59221.0, dps: 641561, sustainDps: 370964, totalMag: 1776630, moddedSustainDps: 446251, optimalRange: 31, modSlots: "4\\", hsd: 55 },
  { weaponName: "Lud",                     baseModel: "MK16",           type: "Assault Rifle", weaponId: "lud",              rpm: 650, baseMagSize: 30, moddedMagSize: 50, emptyReload: 2.02, baseDamage: 59221.0, dps: 641561, sustainDps: 370964, totalMag: 1776630, moddedSustainDps: 446251, optimalRange: 31, modSlots: "4\\", hsd: 55 },

  // P416
  { weaponName: "Military P416",           baseModel: "P416",           type: "Assault Rifle",                             rpm: 850, baseMagSize: 30, moddedMagSize: 50, emptyReload: 2.34, baseDamage: 47364.5, dps: 670997, sustainDps: 318763, totalMag: 1420935, moddedSustainDps: 403486, optimalRange: 26, modSlots: "4\\", hsd: 55 },
  { weaponName: "Custom P416 G3",          baseModel: "P416",           type: "Assault Rifle",                             rpm: 850, baseMagSize: 30, moddedMagSize: 50, emptyReload: 2.34, baseDamage: 47364.5, dps: 670997, sustainDps: 318763, totalMag: 1420935, moddedSustainDps: 403486, optimalRange: 26, modSlots: "4\\", hsd: 55 },
  { weaponName: "Glory Daze",              baseModel: "P416",           type: "Assault Rifle", weaponId: "glory-daze",       rpm: 850, baseMagSize: 30, moddedMagSize: 50, emptyReload: 2.34, baseDamage: 47364.5, dps: 670997, sustainDps: 318763, totalMag: 1420935, moddedSustainDps: 403486, optimalRange: 17, modSlots: "4\\", hsd: 55 },
  { weaponName: "Eagle Bearer",            baseModel: "P416",           type: "Assault Rifle", weaponId: "eagle-bearer",     rpm: 850, baseMagSize: 30, moddedMagSize: 60, emptyReload: 2.13, baseDamage: 47364.5, dps: 670997, sustainDps: 334523, totalMag: 2841870, moddedSustainDps: 446463, optimalRange: 26, modSlots: "N/A", hsd: 55 },

  // PDR
  { weaponName: "PDR",                     baseModel: "PDR",            type: "Assault Rifle",                             rpm: 700, baseMagSize: 30, moddedMagSize: 50, emptyReload: 2.04, baseDamage: 57617.5, dps: 672204, sustainDps: 374835, totalMag: 1728525, moddedSustainDps: 455423, optimalRange: 31, modSlots: "3#",  hsd: 55 },
  { weaponName: "Test Subject",            baseModel: "PDR",            type: "Assault Rifle", weaponId: "test-subject",     rpm: 700, baseMagSize: 30, moddedMagSize: 50, emptyReload: 2.04, baseDamage: 57617.5, dps: 672204, sustainDps: 374835, totalMag: 1728525, moddedSustainDps: 455423, optimalRange: 31, modSlots: "3#",  hsd: 55 },
  { weaponName: "Capacitor",               baseModel: "PDR",            type: "Assault Rifle", weaponId: "capacitor",        rpm: 700, baseMagSize: 30, moddedMagSize: 41, emptyReload: 1.85, baseDamage: 57617.5, dps: 672204, sustainDps: 390943, totalMag: 2362318, moddedSustainDps: 440379, optimalRange: 31, modSlots: "N/A", hsd: 55 },

  // SIG 556
  { weaponName: "Sig Sauer 556",           baseModel: "SIG 556",        type: "Assault Rifle",                             rpm: 700, baseMagSize: 30, moddedMagSize: 50, emptyReload: 2.17, baseDamage: 55934.5, dps: 652569, sustainDps: 353909, totalMag: 1678035, moddedSustainDps: 433217, optimalRange: 28, modSlots: "4",   hsd: 55 },
  { weaponName: "Mechanical Animal",       baseModel: "SIG 556",        type: "Assault Rifle", weaponId: "mechanical-animal", rpm: 700, baseMagSize: 30, moddedMagSize: 50, emptyReload: 2.17, baseDamage: 55934.5, dps: 652569, sustainDps: 353909, totalMag: 1678035, moddedSustainDps: 433217, optimalRange: 28, modSlots: "4",   hsd: 55 },

  // TKB-408
  { weaponName: "TKB-408",                 baseModel: "TKB-408",        type: "Assault Rifle",                             rpm: 600, baseMagSize: 30, moddedMagSize: 50, emptyReload: 1.87, baseDamage: 63508.5, dps: 635085, sustainDps: 391223, totalMag: 1905255, moddedSustainDps: 462216, optimalRange: 27, modSlots: "4\\", hsd: 55 },
  { weaponName: "Kingbreaker",             baseModel: "TKB-408",        type: "Assault Rifle", weaponId: "kingbreaker",      rpm: 600, baseMagSize: 30, moddedMagSize: 50, emptyReload: 1.87, baseDamage: 63508.5, dps: 635085, sustainDps: 391223, totalMag: 1905255, moddedSustainDps: 462216, optimalRange: 27, modSlots: "4\\", hsd: 55 },

  // CTAR-21
  { weaponName: "CTAR-21",                 baseModel: "CTAR-21",        type: "Assault Rifle",                             rpm: 900, baseMagSize: 30, moddedMagSize: 50, emptyReload: 2.39, baseDamage: 44802.0, dps: 672030, sustainDps: 306164, totalMag: 1344060, moddedSustainDps: 391398, optimalRange: 32, modSlots: "4",   hsd: 55 },
  { weaponName: "The Railsplitter",        baseModel: "CTAR-21",        type: "Assault Rifle", weaponId: "the-railsplitter", rpm: 900, baseMagSize: 30, moddedMagSize: 50, emptyReload: 2.39, baseDamage: 44802.0, dps: 672030, sustainDps: 306164, totalMag: 1344060, moddedSustainDps: 391398, optimalRange: 32, modSlots: "4",   hsd: 55 },

  // Vector (Kriss Vector — listed in AR section; HSD 50 matches SMG innate)
  { weaponName: "Chameleon",               baseModel: "Vector",         type: "Assault Rifle", weaponId: "chameleon",        rpm: 900, baseMagSize: 30, moddedMagSize: 50, emptyReload: 2.40, baseDamage: 44670.5, dps: 670058, sustainDps: 304572, totalMag: 1340115, moddedSustainDps: 389568, optimalRange: 20, modSlots: "N/A", hsd: 50 },

  // ── Light Machine Guns ────────────────────────────────────────────────────

  // KAC Stoner (muzzle mod locked to +30% Stability)
  { weaponName: "Stoner LAMG",             baseModel: "KAC Stoner",     type: "Light Machine Gun",                              rpm: 580, baseMagSize: 200, moddedMagSize: 250, emptyReload: 3.00, baseDamage: 62361.0, dps: 602823, sustainDps: 526483, totalMag: 12472200, moddedSustainDps: 540164, optimalRange: 40, modSlots: "4*",  hsd: 65 },
  { weaponName: "Quiet Roar",              baseModel: "KAC Stoner",     type: "Light Machine Gun", weaponId: "quiet-roar",      rpm: 580, baseMagSize: 200, moddedMagSize: 250, emptyReload: 3.00, baseDamage: 62361.0, dps: 602823, sustainDps: 526483, totalMag: 12472200, moddedSustainDps: 540164, optimalRange: 40, modSlots: "4*",  hsd: 65 },
  { weaponName: "Bluescreen",              baseModel: "KAC Stoner",     type: "Light Machine Gun", weaponId: "bluescreen",      rpm: 720, baseMagSize: 200, moddedMagSize: null, emptyReload: 2.22, baseDamage: 62361.0, dps: 748332, sustainDps: 660371, totalMag: 12472200, moddedSustainDps: 660371, optimalRange: 40, modSlots: "N/A", hsd: 65 },

  // L86
  { weaponName: "Military L86 LSW",        baseModel: "L86",            type: "Light Machine Gun",                              rpm: 700, baseMagSize: 30,  moddedMagSize: 50,  emptyReload: 3.18, baseDamage: 61096.5, dps: 712793, sustainDps: 318685, totalMag: 1832895,  moddedSustainDps: 409181, optimalRange: 30, modSlots: "4",   hsd: 65 },
  { weaponName: "Custom L86 A2",           baseModel: "L86",            type: "Light Machine Gun",                              rpm: 700, baseMagSize: 30,  moddedMagSize: 50,  emptyReload: 3.18, baseDamage: 61096.5, dps: 712793, sustainDps: 318685, totalMag: 1832895,  moddedSustainDps: 409181, optimalRange: 30, modSlots: "4\\", hsd: 65 },
  { weaponName: "Custom L86 A2 Replica",   baseModel: "L86",            type: "Light Machine Gun",                              rpm: 700, baseMagSize: 30,  moddedMagSize: 50,  emptyReload: 3.18, baseDamage: 61096.5, dps: 712793, sustainDps: 318685, totalMag: 1832895,  moddedSustainDps: 409181, optimalRange: 30, modSlots: "4\\", hsd: 65 },
  { weaponName: "Tabula Rasa",             baseModel: "L86",            type: "Light Machine Gun", weaponId: "tabula-rasa",     rpm: 700, baseMagSize: 30,  moddedMagSize: 50,  emptyReload: 3.18, baseDamage: 61096.5, dps: 712793, sustainDps: 318685, totalMag: 1832895,  moddedSustainDps: 409181, optimalRange: 30, modSlots: "4",   hsd: 65 },

  // HK GR9 (optics mod locked to +5% CHC)
  { weaponName: "HK GR9",                  baseModel: "HK GR9",         type: "Light Machine Gun",                              rpm: 750, baseMagSize: 200, moddedMagSize: 250, emptyReload: 3.63, baseDamage: 49480.0, dps: 618500, sustainDps: 504126, totalMag: 9896000,  moddedSustainDps: 523487, optimalRange: 35, modSlots: "4",   hsd: 65 },
  { weaponName: "Dare",                    baseModel: "HK GR9",         type: "Light Machine Gun", weaponId: "dare",             rpm: 750, baseMagSize: 200, moddedMagSize: 250, emptyReload: 3.63, baseDamage: 49480.0, dps: 618500, sustainDps: 504126, totalMag: 9896000,  moddedSustainDps: 523487, optimalRange: 35, modSlots: "4",   hsd: 65 },
  { weaponName: "Cricket",                 baseModel: "HK GR9",         type: "Light Machine Gun", weaponId: "cricket",          rpm: 750, baseMagSize: 200, moddedMagSize: 250, emptyReload: 3.63, baseDamage: 49480.0, dps: 618500, sustainDps: 504126, totalMag: 9896000,  moddedSustainDps: 523487, optimalRange: 35, modSlots: "4",   hsd: 65 },

  // M249
  { weaponName: "M249 B",                  baseModel: "M249",           type: "Light Machine Gun",                              rpm: 850, baseMagSize: 100, moddedMagSize: 150, emptyReload: 4.54, baseDamage: 48300.0, dps: 684250, sustainDps: 416422, totalMag: 4830000,  moddedSustainDps: 478906, optimalRange: 35, modSlots: "4\\", hsd: 65 },
  { weaponName: "Tactical M249 Para",      baseModel: "M249",           type: "Light Machine Gun",                              rpm: 850, baseMagSize: 100, moddedMagSize: 150, emptyReload: 4.54, baseDamage: 48300.0, dps: 684250, sustainDps: 416422, totalMag: 4830000,  moddedSustainDps: 478906, optimalRange: 35, modSlots: "4\\", hsd: 65 },
  { weaponName: "Military MK46",           baseModel: "M249",           type: "Light Machine Gun",                              rpm: 850, baseMagSize: 100, moddedMagSize: 150, emptyReload: 4.54, baseDamage: 48300.0, dps: 684250, sustainDps: 416422, totalMag: 4830000,  moddedSustainDps: 478906, optimalRange: 35, modSlots: "4\\", hsd: 65 },
  { weaponName: "Military MK46 Replica",   baseModel: "M249",           type: "Light Machine Gun",                              rpm: 850, baseMagSize: 100, moddedMagSize: 150, emptyReload: 4.54, baseDamage: 48300.0, dps: 684250, sustainDps: 416422, totalMag: 4830000,  moddedSustainDps: 478906, optimalRange: 35, modSlots: "4\\", hsd: 65 },
  { weaponName: "Black Friday",            baseModel: "M249",           type: "Light Machine Gun", weaponId: "black-friday",    rpm: 850, baseMagSize: 100, moddedMagSize: 150, emptyReload: 4.54, baseDamage: 48300.0, dps: 684250, sustainDps: 416422, totalMag: 4830000,  moddedSustainDps: 478906, optimalRange: 35, modSlots: "4\\", hsd: 65 },
  { weaponName: "The Stinger",             baseModel: "M249",           type: "Light Machine Gun", weaponId: "the-stinger",     rpm: 850, baseMagSize: 100, moddedMagSize: 150, emptyReload: 4.54, baseDamage: 48300.0, dps: 684250, sustainDps: 416422, totalMag: 4830000,  moddedSustainDps: 478906, optimalRange: 35, modSlots: "4\\", hsd: 65 },
  { weaponName: "Gear Shift",              baseModel: "M249",           type: "Light Machine Gun", weaponId: "gear-shift",      rpm: 850, baseMagSize: 100, moddedMagSize: 150, emptyReload: 4.54, baseDamage: 48300.0, dps: 684250, sustainDps: 416422, totalMag: 4830000,  moddedSustainDps: 478906, optimalRange: 35, modSlots: "4\\", hsd: 65 },
  { weaponName: "Pestilence",              baseModel: "M249",           type: "Light Machine Gun", weaponId: "pestilence",      rpm: 935, baseMagSize: 100, moddedMagSize: null, emptyReload: 4.54, baseDamage: 48300.0, dps: 752675, sustainDps: 440810, totalMag: 4830000,  moddedSustainDps: 440810, optimalRange: 35, modSlots: "N/A", hsd: 65 },

  // M60
  { weaponName: "Classic M60",             baseModel: "M60",            type: "Light Machine Gun",                              rpm: 600, baseMagSize: 100, moddedMagSize: 150, emptyReload: 3.75, baseDamage: 67711.0, dps: 677110, sustainDps: 492444, totalMag: 6771100,  moddedSustainDps: 541688, optimalRange: 40, modSlots: "3!\\", hsd: 65 },
  { weaponName: "Military M60 E4",         baseModel: "M60",            type: "Light Machine Gun",                              rpm: 600, baseMagSize: 100, moddedMagSize: 150, emptyReload: 3.85, baseDamage: 65233.5, dps: 652335, sustainDps: 471000, totalMag: 6523350,  moddedSustainDps: 519099, optimalRange: 40, modSlots: "4\\", hsd: 65 },
  { weaponName: "Black Market M60 E6",     baseModel: "M60",            type: "Light Machine Gun",                              rpm: 600, baseMagSize: 100, moddedMagSize: 150, emptyReload: 3.85, baseDamage: 65233.5, dps: 652335, sustainDps: 471000, totalMag: 6523350,  moddedSustainDps: 519099, optimalRange: 40, modSlots: "4\\", hsd: 65 },
  { weaponName: "Classic M60 Replica",     baseModel: "M60",            type: "Light Machine Gun",                              rpm: 600, baseMagSize: 100, moddedMagSize: 150, emptyReload: 3.75, baseDamage: 67711.0, dps: 677110, sustainDps: 492444, totalMag: 6771100,  moddedSustainDps: 541688, optimalRange: 40, modSlots: "3!\\", hsd: 65 },
  { weaponName: "Black Market M60 E6 Replica", baseModel: "M60",        type: "Light Machine Gun",                              rpm: 600, baseMagSize: 100, moddedMagSize: 150, emptyReload: 3.85, baseDamage: 65233.5, dps: 652335, sustainDps: 471000, totalMag: 6523350,  moddedSustainDps: 519099, optimalRange: 40, modSlots: "4\\", hsd: 65 },
  { weaponName: "Good Times",              baseModel: "M60",            type: "Light Machine Gun", weaponId: "good-times",      rpm: 600, baseMagSize: 100, moddedMagSize: 150, emptyReload: 3.85, baseDamage: 65234.0, dps: 652340, sustainDps: 471004, totalMag: 6523400,  moddedSustainDps: 519103, optimalRange: 40, modSlots: "4\\", hsd: 65 },

  // MG5
  { weaponName: "MG5",                     baseModel: "MG5",            type: "Light Machine Gun",                              rpm: 800, baseMagSize: 50,  moddedMagSize: 100, emptyReload: 2.96, baseDamage: 54322.0, dps: 724293, sustainDps: 404784, totalMag: 2716100,  moddedSustainDps: 519331, optimalRange: 35, modSlots: "3!",  hsd: 65 },
  { weaponName: "Infantry MG5",            baseModel: "MG5",            type: "Light Machine Gun",                              rpm: 800, baseMagSize: 50,  moddedMagSize: 100, emptyReload: 3.01, baseDamage: 52333.5, dps: 697780, sustainDps: 387082, totalMag: 2616675,  moddedSustainDps: 497940, optimalRange: 35, modSlots: "4",   hsd: 65 },
  { weaponName: "Infantry MG5 Replica",    baseModel: "MG5",            type: "Light Machine Gun",                              rpm: 800, baseMagSize: 50,  moddedMagSize: 100, emptyReload: 3.01, baseDamage: 52333.5, dps: 697780, sustainDps: 387082, totalMag: 2616675,  moddedSustainDps: 497940, optimalRange: 35, modSlots: "4",   hsd: 65 },
  { weaponName: "Bellringer",              baseModel: "MG5",            type: "Light Machine Gun", weaponId: "bellringer",      rpm: 800, baseMagSize: 50,  moddedMagSize: 100, emptyReload: 3.01, baseDamage: 52333.5, dps: 697780, sustainDps: 387082, totalMag: 2616675,  moddedSustainDps: 497940, optimalRange: 35, modSlots: "4",   hsd: 66 },
  { weaponName: "Big Show",                baseModel: "MG5",            type: "Light Machine Gun", weaponId: "big-show",         rpm: 800, baseMagSize: 50,  moddedMagSize: 100, emptyReload: 2.96, baseDamage: 54322.0, dps: 724293, sustainDps: 404784, totalMag: 2716100,  moddedSustainDps: 519331, optimalRange: 35, modSlots: "3!",  hsd: 65 },
  { weaponName: "Sleipner",                baseModel: "MG5",            type: "Light Machine Gun", weaponId: "sleipner",         rpm: 800, baseMagSize: 50,  moddedMagSize: 100, emptyReload: 2.96, baseDamage: 54322.0, dps: 724293, sustainDps: 404784, totalMag: 2716100,  moddedSustainDps: 519331, optimalRange: 35, modSlots: "3!",  hsd: 65 },
  { weaponName: "Iron Lung",               baseModel: "MG5",            type: "Light Machine Gun", weaponId: "iron-lung",        rpm: 800, baseMagSize: 50,  moddedMagSize: 85,  emptyReload: 2.96, baseDamage: 54322.0, dps: 724293, sustainDps: 404784, totalMag: 4617370,  moddedSustainDps: 494630, optimalRange: 35, modSlots: "N/A", hsd: 65 },

  // NEGEV
  { weaponName: "IWI NEGEV",               baseModel: "NEGEV",          type: "Light Machine Gun",                              rpm: 750, baseMagSize: 100, moddedMagSize: 150, emptyReload: 4.00, baseDamage: 54604.0, dps: 682550, sustainDps: 455033, totalMag: 5460400,  moddedSustainDps: 511913, optimalRange: 40, modSlots: "4\\", hsd: 65 },
  { weaponName: "Carnage",                 baseModel: "NEGEV",          type: "Light Machine Gun", weaponId: "carnage",          rpm: 750, baseMagSize: 100, moddedMagSize: 150, emptyReload: 4.00, baseDamage: 54604.0, dps: 682550, sustainDps: 455033, totalMag: 5460400,  moddedSustainDps: 511913, optimalRange: 40, modSlots: "4\\", hsd: 65 },
  // baseMagSize 100* — internally still 100 for Ongoing Directive / mag size bonus purposes
  { weaponName: "Bullet King",             baseModel: "NEGEV",          type: "Light Machine Gun", weaponId: "bullet-king",      rpm: 750, baseMagSize: 100, moddedMagSize: null, emptyReload: 4.76, baseDamage: 54604.0, dps: 682550, sustainDps: 682550, totalMag: null,     moddedSustainDps: 682550, optimalRange: 40, modSlots: "N/A", hsd: 65 },

  // RPK
  { weaponName: "Classic RPK-74",          baseModel: "RPK",            type: "Light Machine Gun",                              rpm: 600, baseMagSize: 40,  moddedMagSize: 60,  emptyReload: 4.00, baseDamage: 71538.0, dps: 715380, sustainDps: 357690, totalMag: 2861520,  moddedSustainDps: 429228, optimalRange: 30, modSlots: "4/",  hsd: 65 },
  { weaponName: "Military RPK-74",         baseModel: "RPK",            type: "Light Machine Gun",                              rpm: 600, baseMagSize: 40,  moddedMagSize: 60,  emptyReload: 4.00, baseDamage: 71538.0, dps: 715380, sustainDps: 357690, totalMag: 2861520,  moddedSustainDps: 429228, optimalRange: 30, modSlots: "4/",  hsd: 65 },
  { weaponName: "Black Market RPK-74",     baseModel: "RPK",            type: "Light Machine Gun",                              rpm: 600, baseMagSize: 40,  moddedMagSize: 60,  emptyReload: 4.00, baseDamage: 71538.0, dps: 715380, sustainDps: 357690, totalMag: 2861520,  moddedSustainDps: 429228, optimalRange: 30, modSlots: "4/",  hsd: 65 },
  { weaponName: "Black Market RPK-74 Replica", baseModel: "RPK",        type: "Light Machine Gun",                              rpm: 600, baseMagSize: 40,  moddedMagSize: 60,  emptyReload: 4.00, baseDamage: 71538.0, dps: 715380, sustainDps: 357690, totalMag: 2861520,  moddedSustainDps: 429228, optimalRange: 30, modSlots: "4/",  hsd: 65 },
  { weaponName: "Rusty",                   baseModel: "RPK",            type: "Light Machine Gun", weaponId: "rusty",            rpm: 600, baseMagSize: 40,  moddedMagSize: 60,  emptyReload: 4.00, baseDamage: 71538.0, dps: 715380, sustainDps: 357690, totalMag: 2861520,  moddedSustainDps: 429228, optimalRange: 30, modSlots: "4/",  hsd: 65 },
  { weaponName: "New Reliable",            baseModel: "RPK",            type: "Light Machine Gun", weaponId: "new-reliable",     rpm: 600, baseMagSize: 40,  moddedMagSize: 60,  emptyReload: 2.86, baseDamage: 71538.0, dps: 715380, sustainDps: 417131, totalMag: 2861520,  moddedSustainDps: 484456, optimalRange: 30, modSlots: "4/",  hsd: 65 },
  { weaponName: "Pakhan",                  baseModel: "RPK",            type: "Light Machine Gun", weaponId: "pakhan",           rpm: 600, baseMagSize: 40,  moddedMagSize: 60,  emptyReload: 3.64, baseDamage: 71538.0, dps: 715380, sustainDps: 374545, totalMag: 4292280,  moddedSustainDps: 715380, optimalRange: 30, modSlots: "N/A", hsd: 65 },

  // Ameli
  { weaponName: "Big Alejandro",           baseModel: "Ameli",          type: "Light Machine Gun", weaponId: "big-alejandro",   rpm: 1100, baseMagSize: 200, moddedMagSize: null, emptyReload: 4.03, baseDamage: 39278.5, dps: 720106, sustainDps: 525849, totalMag: 7855700, moddedSustainDps: 720106, optimalRange: 35, modSlots: "N/A", hsd: 65 },

  // ── Submachine Guns ───────────────────────────────────────────────────────

  // SMG-9
  { weaponName: "Converted SMG-9 A2",      baseModel: "SMG-9",          type: "Submachine Gun",                               rpm: 1000, baseMagSize: 32, moddedMagSize: 52, emptyReload: 2.30, baseDamage: 46734.5, dps: 778908, sustainDps: 354385, totalMag: 1495504, moddedSustainDps: 448375, optimalRange: 15, modSlots: "4",   hsd: 50 },
  { weaponName: "Converted SMG-9",         baseModel: "SMG-9",          type: "Submachine Gun",                               rpm: 1000, baseMagSize: 32, moddedMagSize: 52, emptyReload: 2.26, baseDamage: 48511.5, dps: 808525, sustainDps: 371380, totalMag: 1552368, moddedSustainDps: 468884, optimalRange: 15, modSlots: "3#",  hsd: 50 },
  { weaponName: "Converted SMG-9 Replica", baseModel: "SMG-9",          type: "Submachine Gun",                               rpm: 1000, baseMagSize: 32, moddedMagSize: 52, emptyReload: 2.26, baseDamage: 48511.5, dps: 808525, sustainDps: 371380, totalMag: 1552368, moddedSustainDps: 468884, optimalRange: 15, modSlots: "3#",  hsd: 50 },
  { weaponName: "Purist",                  baseModel: "SMG-9",          type: "Submachine Gun", weaponId: "purist",            rpm: 1000, baseMagSize: 32, moddedMagSize: 52, emptyReload: 2.30, baseDamage: 46734.5, dps: 778908, sustainDps: 354385, totalMag: 1495504, moddedSustainDps: 448375, optimalRange: 15, modSlots: "4",   hsd: 50 },

  // MP5
  { weaponName: "MP5 ST",                  baseModel: "MP5",            type: "Submachine Gun",                               rpm: 800,  baseMagSize: 30, moddedMagSize: 50, emptyReload: 1.79, baseDamage: 53903.5, dps: 718713, sustainDps: 400274, totalMag: 1617105, moddedSustainDps: 486494, optimalRange: 21, modSlots: "4\\", hsd: 50 },
  { weaponName: "MP5 ST Replica",          baseModel: "MP5",            type: "Submachine Gun",                               rpm: 800,  baseMagSize: 30, moddedMagSize: 50, emptyReload: 1.79, baseDamage: 53903.5, dps: 718713, sustainDps: 400274, totalMag: 1617105, moddedSustainDps: 486494, optimalRange: 21, modSlots: "4\\", hsd: 50 },
  { weaponName: "MP5A2",                   baseModel: "MP5",            type: "Submachine Gun",                               rpm: 800,  baseMagSize: 30, moddedMagSize: 50, emptyReload: 1.79, baseDamage: 53903.5, dps: 718713, sustainDps: 400274, totalMag: 1617105, moddedSustainDps: 486494, optimalRange: 21, modSlots: "4",   hsd: 50 },
  { weaponName: "MP5-N",                   baseModel: "MP5",            type: "Submachine Gun",                               rpm: 800,  baseMagSize: 30, moddedMagSize: 50, emptyReload: 1.79, baseDamage: 53903.5, dps: 718713, sustainDps: 400274, totalMag: 1617105, moddedSustainDps: 486494, optimalRange: 21, modSlots: "4\\", hsd: 50 },
  { weaponName: "Cabaret",                 baseModel: "MP5",            type: "Submachine Gun", weaponId: "cabaret",           rpm: 800,  baseMagSize: 30, moddedMagSize: 50, emptyReload: 1.79, baseDamage: 53903.5, dps: 718713, sustainDps: 400274, totalMag: 1617105, moddedSustainDps: 486494, optimalRange: 21, modSlots: "4\\", hsd: 50 },

  // CMMG
  { weaponName: "CMMG Banshee",            baseModel: "CMMG",           type: "Submachine Gun",                               rpm: 900,  baseMagSize: 32, moddedMagSize: 52, emptyReload: 1.92, baseDamage: 47848.5, dps: 717728, sustainDps: 377751, totalMag: 1531152, moddedSustainDps: 461904, optimalRange: 21, modSlots: "4",   hsd: 50 },
  { weaponName: "The Grudge",              baseModel: "CMMG",           type: "Submachine Gun", weaponId: "the-grudge",        rpm: 900,  baseMagSize: 32, moddedMagSize: 52, emptyReload: 1.92, baseDamage: 47848.5, dps: 717728, sustainDps: 377751, totalMag: 1531152, moddedSustainDps: 461904, optimalRange: 21, modSlots: "4",   hsd: 50 },
  { weaponName: "Lady Death",              baseModel: "CMMG",           type: "Submachine Gun", weaponId: "lady-death",        rpm: 900,  baseMagSize: 32, moddedMagSize: null, emptyReload: 1.75, baseDamage: 35409.0, dps: 531135, sustainDps: 291782, totalMag: 1133088, moddedSustainDps: 291782, optimalRange: 21, modSlots: "N/A", hsd: 50 },

  // PP-19
  { weaponName: "PP-19",                   baseModel: "PP-19",          type: "Submachine Gun",                               rpm: 700,  baseMagSize: 53, moddedMagSize: null, emptyReload: 1.46, baseDamage: 63593.0, dps: 741918, sustainDps: 561471, totalMag: 3370429, moddedSustainDps: 561471, optimalRange: 21, modSlots: "2$#", hsd: 50 },
  { weaponName: "Enhanced PP-19",          baseModel: "PP-19",          type: "Submachine Gun",                               rpm: 700,  baseMagSize: 53, moddedMagSize: null, emptyReload: 1.46, baseDamage: 63593.0, dps: 741918, sustainDps: 561471, totalMag: 3370429, moddedSustainDps: 561471, optimalRange: 21, modSlots: "2$#", hsd: 50 },
  { weaponName: "Cold Relations",          baseModel: "PP-19",          type: "Submachine Gun", weaponId: "cold-relations",    rpm: 700,  baseMagSize: 53, moddedMagSize: null, emptyReload: 1.46, baseDamage: 63593.0, dps: 741918, sustainDps: 561471, totalMag: 3370429, moddedSustainDps: 561471, optimalRange: 21, modSlots: "2$#", hsd: 50 },

  // AUG (SMG)
  { weaponName: "AUG A3 Para XS",          baseModel: "AUG",            type: "Submachine Gun",                               rpm: 725,  baseMagSize: 25, moddedMagSize: 45, emptyReload: 2.31, baseDamage: 58661.5, dps: 708826, sustainDps: 334905, totalMag: 1466538, moddedSustainDps: 437472, optimalRange: 22, modSlots: "4\\", hsd: 50 },
  { weaponName: "Enhanced AUG A3P",        baseModel: "AUG",            type: "Submachine Gun",                               rpm: 725,  baseMagSize: 25, moddedMagSize: 45, emptyReload: 2.31, baseDamage: 58661.5, dps: 708826, sustainDps: 334905, totalMag: 1466538, moddedSustainDps: 437472, optimalRange: 22, modSlots: "4\\", hsd: 50 },
  { weaponName: "Tactical AUG A3P",        baseModel: "AUG",            type: "Submachine Gun",                               rpm: 725,  baseMagSize: 25, moddedMagSize: 45, emptyReload: 2.31, baseDamage: 58661.5, dps: 708826, sustainDps: 334905, totalMag: 1466538, moddedSustainDps: 437472, optimalRange: 22, modSlots: "4",   hsd: 50 },
  { weaponName: "Tactical AUG A3P Replica",baseModel: "AUG",            type: "Submachine Gun",                               rpm: 725,  baseMagSize: 25, moddedMagSize: 45, emptyReload: 2.31, baseDamage: 58661.5, dps: 708826, sustainDps: 334905, totalMag: 1466538, moddedSustainDps: 437472, optimalRange: 22, modSlots: "4",   hsd: 50 },

  // Vector
  { weaponName: "Vector SBR .45 ACP",      baseModel: "Vector",         type: "Submachine Gun",                               rpm: 1200, baseMagSize: 25, moddedMagSize: 45, emptyReload: 2.06, baseDamage: 38300.5, dps: 766010, sustainDps: 289279, totalMag: 957513,  moddedSustainDps: 399889, optimalRange: 15, modSlots: "4\\", hsd: 50 },
  { weaponName: "Vector SBR .45 ACP Replica", baseModel: "Vector",      type: "Submachine Gun",                               rpm: 1200, baseMagSize: 25, moddedMagSize: 45, emptyReload: 2.06, baseDamage: 38300.5, dps: 766010, sustainDps: 289279, totalMag: 957513,  moddedSustainDps: 399889, optimalRange: 15, modSlots: "4\\", hsd: 50 },
  { weaponName: "Vector SBR 9mm",          baseModel: "Vector",         type: "Submachine Gun",                               rpm: 1200, baseMagSize: 33, moddedMagSize: 53, emptyReload: 2.38, baseDamage: 39306.5, dps: 786130, sustainDps: 321865, totalMag: 1297115, moddedSustainDps: 414164, optimalRange: 15, modSlots: "4",   hsd: 50 },
  { weaponName: "Tactical Vector SBR 9mm", baseModel: "Vector",         type: "Submachine Gun",                               rpm: 1200, baseMagSize: 19, moddedMagSize: 39, emptyReload: 1.69, baseDamage: 40505.5, dps: 810110, sustainDps: 291517, totalMag: 769605,  moddedSustainDps: 433988, optimalRange: 15, modSlots: "4",   hsd: 50 },
  { weaponName: "Froth",                   baseModel: "Vector",         type: "Submachine Gun", weaponId: "froth",             rpm: 1200, baseMagSize: 19, moddedMagSize: 39, emptyReload: 1.69, baseDamage: 40505.5, dps: 810110, sustainDps: 291517, totalMag: 769605,  moddedSustainDps: 433988, optimalRange: 15, modSlots: "4",   hsd: 50 },
  { weaponName: "Dark Winter",             baseModel: "Vector",         type: "Submachine Gun", weaponId: "dark-winter",       rpm: 1200, baseMagSize: 25, moddedMagSize: 45, emptyReload: 2.06, baseDamage: 38300.5, dps: 766010, sustainDps: 289279, totalMag: 957513,  moddedSustainDps: 399889, optimalRange: 15, modSlots: "4\\", hsd: 50 },
  { weaponName: "Ouroboros",               baseModel: "Vector",         type: "Submachine Gun", weaponId: "ouroboros",         rpm: 1403, baseMagSize: 50, moddedMagSize: null, emptyReload: 1.65, baseDamage: 38300.5, dps: 895274, sustainDps: 505412, totalMag: 1915025, moddedSustainDps: 577230, optimalRange: 15, modSlots: "N/A", hsd: 50 },

  // MP7
  { weaponName: "MP7",                     baseModel: "MP7",            type: "Submachine Gun",                               rpm: 950,  baseMagSize: 40, moddedMagSize: null, emptyReload: 1.60, baseDamage: 46405.5, dps: 734754, sustainDps: 449849, totalMag: 1856220, moddedSustainDps: 449849, optimalRange: 21, modSlots: "3$",  hsd: 50 },
  { weaponName: "Swap Chain",              baseModel: "MP7",            type: "Submachine Gun", weaponId: "swap-chain",        rpm: 950,  baseMagSize: 40, moddedMagSize: null, emptyReload: 1.60, baseDamage: 46405.5, dps: 734754, sustainDps: 449849, totalMag: 1856220, moddedSustainDps: 449849, optimalRange: 21, modSlots: "2$!", hsd: 50 },
  { weaponName: "Oxpecker",                baseModel: "MP7",            type: "Submachine Gun", weaponId: "oxpecker",          rpm: 950,  baseMagSize: 40, moddedMagSize: 50,  emptyReload: 1.60, baseDamage: 46405.5, dps: 734754, sustainDps: 487668, totalMag: 2320275, moddedSustainDps: 487668, optimalRange: 21, modSlots: "N/A", hsd: 50 },

  // T821
  { weaponName: "Police T821",             baseModel: "T821",           type: "Submachine Gun",                               rpm: 550,  baseMagSize: 32, moddedMagSize: 52, emptyReload: 1.47, baseDamage: 76916.0, dps: 705063, sustainDps: 496141, totalMag: 2461312, moddedSustainDps: 559959, optimalRange: 20, modSlots: "4",   hsd: 50 },
  { weaponName: "Black Market T821",       baseModel: "T821",           type: "Submachine Gun",                               rpm: 550,  baseMagSize: 32, moddedMagSize: 52, emptyReload: 1.47, baseDamage: 76916.0, dps: 705063, sustainDps: 496141, totalMag: 2461312, moddedSustainDps: 559959, optimalRange: 20, modSlots: "4",   hsd: 50 },
  { weaponName: "Black Market T821 Replica", baseModel: "T821",         type: "Submachine Gun",                               rpm: 550,  baseMagSize: 32, moddedMagSize: 52, emptyReload: 1.47, baseDamage: 76916.0, dps: 705063, sustainDps: 496141, totalMag: 2461312, moddedSustainDps: 559959, optimalRange: 20, modSlots: "4",   hsd: 50 },

  // UMP-45
  { weaponName: "Police UMP-45",           baseModel: "UMP-45",         type: "Submachine Gun",                               rpm: 650,  baseMagSize: 25, moddedMagSize: 45, emptyReload: 1.67, baseDamage: 63691.5, dps: 689991, sustainDps: 400304, totalMag: 1592288, moddedSustainDps: 492135, optimalRange: 16, modSlots: "4\\", hsd: 50 },
  { weaponName: "Tactical UMP-45",         baseModel: "UMP-45",         type: "Submachine Gun",                               rpm: 650,  baseMagSize: 25, moddedMagSize: 45, emptyReload: 1.67, baseDamage: 63691.5, dps: 689991, sustainDps: 400304, totalMag: 1592288, moddedSustainDps: 492135, optimalRange: 16, modSlots: "4\\", hsd: 50 },
  { weaponName: "Tactical UMP-45 Replica", baseModel: "UMP-45",         type: "Submachine Gun",                               rpm: 650,  baseMagSize: 25, moddedMagSize: 45, emptyReload: 1.67, baseDamage: 63691.5, dps: 689991, sustainDps: 400304, totalMag: 1592288, moddedSustainDps: 492135, optimalRange: 16, modSlots: "4\\", hsd: 50 },
  { weaponName: "Slingshot",               baseModel: "UMP-45",         type: "Submachine Gun", weaponId: "slingshot",         rpm: 650,  baseMagSize: 25, moddedMagSize: 45, emptyReload: 1.67, baseDamage: 63691.5, dps: 689991, sustainDps: 400304, totalMag: 1592288, moddedSustainDps: 492135, optimalRange: 60, modSlots: "4\\", hsd: 50 },

  // Thompson
  { weaponName: "M1928",                   baseModel: "Thompson",       type: "Submachine Gun",                               rpm: 600,  baseMagSize: 30, moddedMagSize: 50, emptyReload: 1.46, baseDamage: 78416.0, dps: 784160, sustainDps: 527462, totalMag: 2352480, moddedSustainDps: 606935, optimalRange: 19, modSlots: "1$#!", hsd: 50 },
  { weaponName: "Tommy Gun",               baseModel: "Thompson",       type: "Submachine Gun",                               rpm: 900,  baseMagSize: 50, moddedMagSize: null, emptyReload: 1.54, baseDamage: 50627.0, dps: 759405, sustainDps: 519429, totalMag: 2531350, moddedSustainDps: 519429, optimalRange: 19, modSlots: "0",   hsd: 50 },
  { weaponName: "The Sleigher",            baseModel: "Thompson",       type: "Submachine Gun", weaponId: "the-sleigher",      rpm: 250,  baseMagSize: 50, moddedMagSize: null, emptyReload: 2.30, baseDamage: 92989.5, dps: 387456, sustainDps: 325138, totalMag: 4649475, moddedSustainDps: 325138, optimalRange: 16, modSlots: "0",   hsd: 50 },
  { weaponName: "Grown Great",             baseModel: "Thompson",       type: "Submachine Gun", weaponId: "grown-great",       rpm: 900,  baseMagSize: 50, moddedMagSize: null, emptyReload: 1.54, baseDamage: 50627.0, dps: 759405, sustainDps: 519429, totalMag: 2531350, moddedSustainDps: 519429, optimalRange: 19, modSlots: "0",   hsd: 50 },

  // P90
  { weaponName: "P90",                     baseModel: "P90",            type: "Submachine Gun",                               rpm: 1100, baseMagSize: 50, moddedMagSize: null, emptyReload: 1.57, baseDamage: 39457.0, dps: 723378, sustainDps: 459094, totalMag: 1972850, moddedSustainDps: 459094, optimalRange: 21, modSlots: "2$#", hsd: 50 },
  { weaponName: "P90 Replica",             baseModel: "P90",            type: "Submachine Gun",                               rpm: 1100, baseMagSize: 50, moddedMagSize: null, emptyReload: 1.57, baseDamage: 39457.0, dps: 723378, sustainDps: 459094, totalMag: 1972850, moddedSustainDps: 459094, optimalRange: 21, modSlots: "2$#", hsd: 50 },
  { weaponName: "Emeline's Guard",         baseModel: "P90",            type: "Submachine Gun", weaponId: "emelines-guard",    rpm: 1100, baseMagSize: 50, moddedMagSize: null, emptyReload: 1.57, baseDamage: 39457.0, dps: 723378, sustainDps: 459094, totalMag: 1972850, moddedSustainDps: 459094, optimalRange: 21, modSlots: "2$#", hsd: 50 },
  { weaponName: "The Chatterbox",          baseModel: "P90",            type: "Submachine Gun", weaponId: "the-chatterbox",    rpm: 850,  baseMagSize: 50, moddedMagSize: 60,  emptyReload: 1.43, baseDamage: 39457.0, dps: 558974, sustainDps: 397799, totalMag: 2367420, moddedSustainDps: 417881, optimalRange: 21, modSlots: "N/A", hsd: 50 },

  // ── Shotguns ──────────────────────────────────────────────────────────────
  // Note: all shotguns have moddedMagSize null and moddedSustainDps null (no mag mod slot)

  // AA12
  { weaponName: "ACS-12",                    baseModel: "AA12",        type: "Shotgun",                                rpm: 300, baseMagSize: 20, moddedMagSize: null, emptyReload: 3.35, baseDamage: 180748.0, dps: 903740,   sustainDps: 491831, totalMag: 3614960, moddedSustainDps: null, optimalRange: 16, modSlots: "2$!",  hsd: 45 },
  { weaponName: "Stack Broker",              baseModel: "AA12",        type: "Shotgun", weaponId: "stack-broker",    rpm: 360, baseMagSize: 20, moddedMagSize: null, emptyReload: 3.35, baseDamage: 150624.0, dps: 903744,   sustainDps: 450745, totalMag: 3012480, moddedSustainDps: null, optimalRange: 16, modSlots: "2$!",  hsd: 45 },
  // modSlots "3!*" — same mod layout as SIX12 due to weapon construction
  { weaponName: "Lefty",                     baseModel: "AA12",        type: "Shotgun", weaponId: "lefty",           rpm: 300, baseMagSize: 20, moddedMagSize: null, emptyReload: 3.35, baseDamage: 180748.0, dps: 903740,   sustainDps: 491831, totalMag: 3614960, moddedSustainDps: null, optimalRange: 16, modSlots: "3!*",  hsd: 45 },
  { weaponName: "Rock n' Roll",              baseModel: "AA12",        type: "Shotgun", weaponId: "rock-n-roll",     rpm: 300, baseMagSize: 30, moddedMagSize: null, emptyReload: 3.35, baseDamage: 180748.0, dps: 903740,   sustainDps: 579940, totalMag: 5422440, moddedSustainDps: null, optimalRange: 16, modSlots: "2$!",  hsd: 45 },

  // Double Barrel
  { weaponName: "Double Barrel Shotgun",     baseModel: "Double Barrel",type: "Shotgun",                             rpm: 200, baseMagSize: 2,  moddedMagSize: null, emptyReload: 3.89, baseDamage: 678136.0, dps: 2260453, sustainDps: 302065, totalMag: 1356272, moddedSustainDps: null, optimalRange: 11, modSlots: "0$",   hsd: 45 },
  { weaponName: "Double Barrel Shotgun Replica", baseModel: "Double Barrel", type: "Shotgun",                        rpm: 200, baseMagSize: 2,  moddedMagSize: null, emptyReload: 3.89, baseDamage: 678136.0, dps: 2260453, sustainDps: 302065, totalMag: 1356272, moddedSustainDps: null, optimalRange: 11, modSlots: "0$",   hsd: 45 },
  { weaponName: "Boomstick",                 baseModel: "Double Barrel",type: "Shotgun", weaponId: "boomstick",      rpm: 200, baseMagSize: 2,  moddedMagSize: null, emptyReload: 3.89, baseDamage: 678136.0, dps: 2260453, sustainDps: 302065, totalMag: 1356272, moddedSustainDps: null, optimalRange: 11, modSlots: "0",    hsd: 45 },

  // Sawed-Off
  { weaponName: "Sawed-Off Double Barrel",   baseModel: "Sawed-Off",   type: "Shotgun",                              rpm: 200, baseMagSize: 2,  moddedMagSize: null, emptyReload: 2.51, baseDamage: 635712.0, dps: 2119040, sustainDps: 408818, totalMag: 1271424, moddedSustainDps: null, optimalRange: 7,  modSlots: "0",    hsd: 45 },
  { weaponName: "Firestarter",               baseModel: "Sawed-Off",   type: "Shotgun", weaponId: "firestarter",     rpm: 200, baseMagSize: 2,  moddedMagSize: null, emptyReload: 2.51, baseDamage: 635712.0, dps: 2119040, sustainDps: 408818, totalMag: 1271424, moddedSustainDps: null, optimalRange: 7,  modSlots: "0",    hsd: 45 },
  { weaponName: "Backup Boomstick",          baseModel: "Sawed-Off",   type: "Shotgun", weaponId: "backup-boomstick", rpm: 200, baseMagSize: 2, moddedMagSize: null, emptyReload: 2.51, baseDamage: 635712.0, dps: 2119040, sustainDps: 408818, totalMag: 1271424, moddedSustainDps: null, optimalRange: 7,  modSlots: "0",    hsd: 45 },

  // KSG
  { weaponName: "KSG Shotgun",               baseModel: "KSG",         type: "Shotgun",                              rpm: 70,  baseMagSize: 12, moddedMagSize: null, emptyReload: 7.99, baseDamage: 678928.0, dps: 792083,  sustainDps: 445790, totalMag: 8147136, moddedSustainDps: null, optimalRange: 16, modSlots: "3",    hsd: 45 },
  { weaponName: "The Send-Off",              baseModel: "KSG",         type: "Shotgun", weaponId: "the-send-off",    rpm: 70,  baseMagSize: 12, moddedMagSize: null, emptyReload: 7.99, baseDamage: 678928.0, dps: 792083,  sustainDps: 445790, totalMag: 8147136, moddedSustainDps: null, optimalRange: 32, modSlots: "3",    hsd: 45 },
  { weaponName: "Overlord",                  baseModel: "KSG",         type: "Shotgun", weaponId: "overlord",        rpm: 70,  baseMagSize: 12, moddedMagSize: null, emptyReload: 6.94, baseDamage: 678928.0, dps: 792083,  sustainDps: 472964, totalMag: 8147136, moddedSustainDps: null, optimalRange: 16, modSlots: "N/A",  hsd: 45 },

  // M870
  { weaponName: "Custom M870 MCS",           baseModel: "M870",        type: "Shotgun",                              rpm: 75,  baseMagSize: 5,  moddedMagSize: null, emptyReload: 3.35, baseDamage: 703672.0, dps: 879590,  sustainDps: 478688, totalMag: 3518360, moddedSustainDps: null, optimalRange: 11, modSlots: "3!\\", hsd: 45 },
  { weaponName: "Custom M870 MCS Replica",   baseModel: "M870",        type: "Shotgun",                              rpm: 75,  baseMagSize: 5,  moddedMagSize: null, emptyReload: 3.35, baseDamage: 703672.0, dps: 879590,  sustainDps: 478688, totalMag: 3518360, moddedSustainDps: null, optimalRange: 11, modSlots: "3!\\", hsd: 45 },
  { weaponName: "M870 Express",              baseModel: "M870",        type: "Shotgun",                              rpm: 75,  baseMagSize: 5,  moddedMagSize: null, emptyReload: 3.35, baseDamage: 703672.0, dps: 879590,  sustainDps: 478688, totalMag: 3518360, moddedSustainDps: null, optimalRange: 11, modSlots: "3!\\", hsd: 45 },
  { weaponName: "M870 Express Replica",      baseModel: "M870",        type: "Shotgun",                              rpm: 75,  baseMagSize: 5,  moddedMagSize: null, emptyReload: 3.35, baseDamage: 703672.0, dps: 879590,  sustainDps: 478688, totalMag: 3518360, moddedSustainDps: null, optimalRange: 11, modSlots: "3!\\", hsd: 45 },
  { weaponName: "Military M870",             baseModel: "M870",        type: "Shotgun",                              rpm: 75,  baseMagSize: 5,  moddedMagSize: null, emptyReload: 3.35, baseDamage: 703672.0, dps: 879590,  sustainDps: 478688, totalMag: 3518360, moddedSustainDps: null, optimalRange: 11, modSlots: "3!\\", hsd: 45 },
  { weaponName: "Lockdown",                  baseModel: "M870",        type: "Shotgun", weaponId: "lockdown",        rpm: 75,  baseMagSize: 5,  moddedMagSize: null, emptyReload: 3.35, baseDamage: 703672.0, dps: 879590,  sustainDps: 478688, totalMag: 3518360, moddedSustainDps: null, optimalRange: 11, modSlots: "3!\\", hsd: 45 },
  { weaponName: "Cuélebre",                  baseModel: "M870",        type: "Shotgun", weaponId: "cuelebre",        rpm: 75,  baseMagSize: 5,  moddedMagSize: null, emptyReload: 2.23, baseDamage: 703672.0, dps: 879590,  sustainDps: 564745, totalMag: 3518360, moddedSustainDps: null, optimalRange: 11, modSlots: "3!\\", hsd: 45 },

  // SASG-12
  { weaponName: "Black Market SASG-12 S",    baseModel: "SASG-12",     type: "Shotgun",                              rpm: 180, baseMagSize: 7,  moddedMagSize: null, emptyReload: 3.05, baseDamage: 349804.0, dps: 1049412, sustainDps: 454853, totalMag: 2448628, moddedSustainDps: null, optimalRange: 14, modSlots: "2$!",  hsd: 45 },
  { weaponName: "Black Market SASG-12 S Replica", baseModel: "SASG-12", type: "Shotgun",                            rpm: 180, baseMagSize: 7,  moddedMagSize: null, emptyReload: 3.05, baseDamage: 349804.0, dps: 1049412, sustainDps: 454853, totalMag: 2448628, moddedSustainDps: null, optimalRange: 14, modSlots: "2$!",  hsd: 45 },
  { weaponName: "SASG-12",                   baseModel: "SASG-12",     type: "Shotgun",                              rpm: 180, baseMagSize: 7,  moddedMagSize: null, emptyReload: 3.05, baseDamage: 349804.0, dps: 1049412, sustainDps: 454853, totalMag: 2448628, moddedSustainDps: null, optimalRange: 14, modSlots: "2$!",  hsd: 45 },
  { weaponName: "Tactical SASG-12 K",        baseModel: "SASG-12",     type: "Shotgun",                              rpm: 180, baseMagSize: 7,  moddedMagSize: null, emptyReload: 3.05, baseDamage: 349804.0, dps: 1049412, sustainDps: 454853, totalMag: 2448628, moddedSustainDps: null, optimalRange: 14, modSlots: "2$!",  hsd: 45 },
  { weaponName: "Tsunami",                   baseModel: "SASG-12",     type: "Shotgun", weaponId: "tsunami",         rpm: 180, baseMagSize: 7,  moddedMagSize: null, emptyReload: 3.05, baseDamage: 349804.0, dps: 1049412, sustainDps: 454853, totalMag: 2448628, moddedSustainDps: null, optimalRange: 14, modSlots: "2$!",  hsd: 45 },

  // SPAS-12
  { weaponName: "SPAS-12",                   baseModel: "SPAS-12",     type: "Shotgun",                              rpm: 70,  baseMagSize: 8,  moddedMagSize: null, emptyReload: 5.50, baseDamage: 716008.0, dps: 835343,  sustainDps: 463543, totalMag: 5728064, moddedSustainDps: null, optimalRange: 16, modSlots: "1#&!", hsd: 45 },
  { weaponName: "SPAS-12 Replica",           baseModel: "SPAS-12",     type: "Shotgun",                              rpm: 70,  baseMagSize: 8,  moddedMagSize: null, emptyReload: 5.50, baseDamage: 716008.0, dps: 835343,  sustainDps: 463543, totalMag: 5728064, moddedSustainDps: null, optimalRange: 16, modSlots: "1#&!", hsd: 45 },
  { weaponName: "Thorn",                     baseModel: "SPAS-12",     type: "Shotgun", weaponId: "thorn",           rpm: 70,  baseMagSize: 8,  moddedMagSize: null, emptyReload: 5.50, baseDamage: 716008.0, dps: 835343,  sustainDps: 463543, totalMag: 5728064, moddedSustainDps: null, optimalRange: 16, modSlots: "1#&!", hsd: 45 },
  { weaponName: "Lullaby",                   baseModel: "SPAS-12",     type: "Shotgun", weaponId: "lullaby",         rpm: 70,  baseMagSize: 8,  moddedMagSize: null, emptyReload: 4.78, baseDamage: 716008.0, dps: 835343,  sustainDps: 492223, totalMag: 5728064, moddedSustainDps: null, optimalRange: 13, modSlots: "N/A",  hsd: 25 },
  { weaponName: "Sweet Dreams",              baseModel: "SPAS-12",     type: "Shotgun", weaponId: "sweet-dreams",    rpm: 70,  baseMagSize: 8,  moddedMagSize: null, emptyReload: 4.78, baseDamage: 716008.0, dps: 835343,  sustainDps: 492223, totalMag: 5728064, moddedSustainDps: null, optimalRange: 13, modSlots: "N/A",  hsd: 25 },

  // Super 90
  { weaponName: "Marine Super 90",           baseModel: "Super 90",    type: "Shotgun",                              rpm: 160, baseMagSize: 8,  moddedMagSize: null, emptyReload: 4.65, baseDamage: 389936.0, dps: 1039829, sustainDps: 407776, totalMag: 3119488, moddedSustainDps: null, optimalRange: 11, modSlots: "3!",   hsd: 45 },
  { weaponName: "Super 90",                  baseModel: "Super 90",    type: "Shotgun",                              rpm: 160, baseMagSize: 8,  moddedMagSize: null, emptyReload: 4.65, baseDamage: 389936.0, dps: 1039829, sustainDps: 407776, totalMag: 3119488, moddedSustainDps: null, optimalRange: 11, modSlots: "3!",   hsd: 45 },
  { weaponName: "Super 90 Replica",          baseModel: "Super 90",    type: "Shotgun",                              rpm: 160, baseMagSize: 8,  moddedMagSize: null, emptyReload: 4.65, baseDamage: 389936.0, dps: 1039829, sustainDps: 407776, totalMag: 3119488, moddedSustainDps: null, optimalRange: 11, modSlots: "3!",   hsd: 45 },
  { weaponName: "Tactical Super 90 SBS",     baseModel: "Super 90",    type: "Shotgun",                              rpm: 160, baseMagSize: 8,  moddedMagSize: null, emptyReload: 4.65, baseDamage: 389936.0, dps: 1039829, sustainDps: 407776, totalMag: 3119488, moddedSustainDps: null, optimalRange: 11, modSlots: "3!",   hsd: 45 },
  { weaponName: "Tactical Super 90 SBS Replica", baseModel: "Super 90", type: "Shotgun",                            rpm: 160, baseMagSize: 8,  moddedMagSize: null, emptyReload: 4.65, baseDamage: 389936.0, dps: 1039829, sustainDps: 407776, totalMag: 3119488, moddedSustainDps: null, optimalRange: 11, modSlots: "3!",   hsd: 45 },
  { weaponName: "Like Glue",                 baseModel: "Super 90",    type: "Shotgun", weaponId: "like-glue",       rpm: 160, baseMagSize: 8,  moddedMagSize: null, emptyReload: 4.65, baseDamage: 389936.0, dps: 1039829, sustainDps: 407776, totalMag: 3119488, moddedSustainDps: null, optimalRange: 11, modSlots: "3!",   hsd: 45 },
  // The Sheriff (exotic) — stats not available in source spreadsheet
  { weaponName: "Enforcer",                  baseModel: "Super 90",    type: "Shotgun", weaponId: "enforcer",        rpm: 160, baseMagSize: 8,  moddedMagSize: null, emptyReload: 4.65, baseDamage: 389936.0, dps: 1039829, sustainDps: 407776, totalMag: 3119488, moddedSustainDps: null, optimalRange: 11, modSlots: "3!",   hsd: 45 },

  // Six12
  { weaponName: "Six12",                     baseModel: "Six12",       type: "Shotgun",                              rpm: 130, baseMagSize: 7,  moddedMagSize: null, emptyReload: 3.00, baseDamage: 409568.0, dps: 887397,  sustainDps: 460132, totalMag: 2866976, moddedSustainDps: null, optimalRange: 14, modSlots: "3!",   hsd: 45 },
  { weaponName: "The Mop",                   baseModel: "Six12",       type: "Shotgun", weaponId: "the-mop",         rpm: 130, baseMagSize: 7,  moddedMagSize: null, emptyReload: 3.00, baseDamage: 409568.0, dps: 887397,  sustainDps: 460132, totalMag: 2866976, moddedSustainDps: null, optimalRange: 14, modSlots: "3!",   hsd: 45 },
  { weaponName: "Scorpio",                   baseModel: "Six12",       type: "Shotgun", weaponId: "scorpio",         rpm: 130, baseMagSize: 7,  moddedMagSize: null, emptyReload: 2.50, baseDamage: 409568.0, dps: 887397,  sustainDps: 500278, totalMag: 2866976, moddedSustainDps: null, optimalRange: 14, modSlots: "N/A",  hsd: 45 },

  // MPX
  { weaponName: "MPX",                     baseModel: "MPX",            type: "Submachine Gun",                               rpm: 850,  baseMagSize: 30, moddedMagSize: 50, emptyReload: 2.09, baseDamage: 50998.5, dps: 722479, sustainDps: 363613, totalMag: 1529955, moddedSustainDps: 453771, optimalRange: 22, modSlots: "4",   hsd: 50 },
  { weaponName: "Safety Distance",         baseModel: "MPX",            type: "Submachine Gun", weaponId: "safety-distance",   rpm: 850,  baseMagSize: 30, moddedMagSize: 50, emptyReload: 2.09, baseDamage: 50998.5, dps: 722479, sustainDps: 363613, totalMag: 1529955, moddedSustainDps: 453771, optimalRange: 22, modSlots: "4",   hsd: 50 },
  // DPS/Total Mag shown as orange in spreadsheet — talent-adjusted values; raw stats match base MPX
  { weaponName: "The Apartment",           baseModel: "MPX",            type: "Submachine Gun", weaponId: "the-apartment",     rpm: 850,  baseMagSize: 30, moddedMagSize: 50, emptyReload: 2.09, baseDamage: 50998.5, dps: 722479, sustainDps: 363613, totalMag: 1529955, moddedSustainDps: 453771, optimalRange: 22, modSlots: "4",   hsd: 50 },
  { weaponName: "Backfire",                baseModel: "MPX",            type: "Submachine Gun", weaponId: "backfire",          rpm: 850,  baseMagSize: 30, moddedMagSize: 50, emptyReload: 2.09, baseDamage: 50998.5, dps: 722479, sustainDps: 363613, totalMag: 2549925, moddedSustainDps: 453771, optimalRange: 22, modSlots: "N/A", hsd: 50 },

  // ── Rifles ────────────────────────────────────────────────────────────────

  // ACR
  { weaponName: "ACR SS",                  baseModel: "ACR",            type: "Rifle",                                rpm: 420, baseMagSize: 30, moddedMagSize: 50,  emptyReload: 2.63, baseDamage: 101828.0, dps: 712796, sustainDps: 441724, totalMag: 3054840,  moddedSustainDps: 520974, optimalRange: 45, modSlots: "4\\", hsd: 60 },

  // AKM
  { weaponName: "Ruthless",                baseModel: "AKM",            type: "Rifle", weaponId: "ruthless",          rpm: 400, baseMagSize: 30, moddedMagSize: null, emptyReload: 1.74, baseDamage: 102269.5, dps: 681797, sustainDps: 491680, totalMag: 3068085,  moddedSustainDps: 491680, optimalRange: 35, modSlots: "N/A", hsd: 60 },
  { weaponName: "Merciless",               baseModel: "AKM",            type: "Rifle", weaponId: "merciless",         rpm: 400, baseMagSize: 30, moddedMagSize: null, emptyReload: 1.74, baseDamage: 102269.5, dps: 681797, sustainDps: 491680, totalMag: 3068085,  moddedSustainDps: 491680, optimalRange: 35, modSlots: "N/A", hsd: 60 },

  // AR15
  { weaponName: "UIC15 MOD2",              baseModel: "AR15",           type: "Rifle",                                rpm: 240, baseMagSize: 30, moddedMagSize: 50,  emptyReload: 1.73, baseDamage: 150316.0, dps: 601264, sustainDps: 488568, totalMag: 4509480,  moddedSustainDps: 528166, optimalRange: 60, modSlots: "4\\", hsd: 60 },

  // M16
  { weaponName: "M16A2",                   baseModel: "M16",            type: "Rifle",                                rpm: 400, baseMagSize: 30, moddedMagSize: 50,  emptyReload: 2.44, baseDamage: 106971.0, dps: 713140, sustainDps: 462411, totalMag: 3209130,  moddedSustainDps: 538084, optimalRange: 50, modSlots: "3#",  hsd: 60 },
  { weaponName: "M16A2 Replica",           baseModel: "M16",            type: "Rifle",                                rpm: 400, baseMagSize: 30, moddedMagSize: 50,  emptyReload: 2.44, baseDamage: 106971.0, dps: 713140, sustainDps: 462411, totalMag: 3209130,  moddedSustainDps: 538084, optimalRange: 50, modSlots: "3#",  hsd: 60 },
  { weaponName: "Whisper",                 baseModel: "M16",            type: "Rifle", weaponId: "whisper",           rpm: 400, baseMagSize: 30, moddedMagSize: 50,  emptyReload: 2.44, baseDamage: 106971.0, dps: 713140, sustainDps: 462411, totalMag: 3209130,  moddedSustainDps: 538084, optimalRange: 50, modSlots: "3#",  hsd: 60 },

  // M1A
  { weaponName: "Classic M1A",             baseModel: "M1A",            type: "Rifle",                                rpm: 180, baseMagSize: 10, moddedMagSize: 15,  emptyReload: 2.60, baseDamage: 231346.0, dps: 694038, sustainDps: 389909, totalMag: 2313460,  moddedSustainDps: 456604, optimalRange: 60, modSlots: "3!\\", hsd: 60 },
  { weaponName: "Socom M1A",               baseModel: "M1A",            type: "Rifle",                                rpm: 320, baseMagSize: 10, moddedMagSize: 15,  emptyReload: 2.32, baseDamage: 129179.5, dps: 688957, sustainDps: 307937, totalMag: 1291795,  moddedSustainDps: 377534, optimalRange: 60, modSlots: "4\\", hsd: 60 },
  { weaponName: "M1A CQB",                 baseModel: "M1A",            type: "Rifle",                                rpm: 320, baseMagSize: 10, moddedMagSize: 15,  emptyReload: 2.32, baseDamage: 129179.5, dps: 688957, sustainDps: 307937, totalMag: 1291795,  moddedSustainDps: 377534, optimalRange: 60, modSlots: "4\\", hsd: 60 },
  { weaponName: "M1A CQB Replica",         baseModel: "M1A",            type: "Rifle",                                rpm: 320, baseMagSize: 10, moddedMagSize: 15,  emptyReload: 2.32, baseDamage: 129179.5, dps: 688957, sustainDps: 307937, totalMag: 1291795,  moddedSustainDps: 377534, optimalRange: 60, modSlots: "4\\", hsd: 60 },
  { weaponName: "Baker's Dozen",           baseModel: "M1A",            type: "Rifle", weaponId: "bakers-dozen",      rpm: 180, baseMagSize: 13, moddedMagSize: 18,  emptyReload: 2.86, baseDamage: 231346.0, dps: 694038, sustainDps: 418095, totalMag: 3007498,  moddedSustainDps: 470003, optimalRange: 60, modSlots: "3!\\", hsd: 60 },
  { weaponName: "Stage Left",              baseModel: "M1A",            type: "Rifle", weaponId: "stage-left",        rpm: 320, baseMagSize: 10, moddedMagSize: 15,  emptyReload: 2.32, baseDamage: 129179.5, dps: 688957, sustainDps: 307937, totalMag: 1291795,  moddedSustainDps: 377534, optimalRange: 60, modSlots: "4\\", hsd: 60 },
  // Cooler: bugged weapon — all damage stats 0, HSD -100 per spreadsheet note ("infinite damage at expertise 30")
  { weaponName: "Cooler",                  baseModel: "M1A",            type: "Rifle", weaponId: "cooler",            rpm: 320, baseMagSize: 100, moddedMagSize: null, emptyReload: 3.00, baseDamage: 0.0, dps: 0, sustainDps: 0, totalMag: 0, moddedSustainDps: 0, optimalRange: 60, modSlots: "0",   hsd: -100 },
  { weaponName: "Bittersweet",             baseModel: "M1A",            type: "Rifle", weaponId: "bittersweet",       rpm: 180, baseMagSize: 10, moddedMagSize: 20,  emptyReload: 2.60, baseDamage: 231346.0, dps: 694038, sustainDps: 389909, totalMag: 4626920,  moddedSustainDps: 389909, optimalRange: 60, modSlots: "N/A", hsd: 70 },
  { weaponName: "Doctor Home",             baseModel: "M1A",            type: "Rifle", weaponId: "doctor-home",       rpm: 320, baseMagSize: 10, moddedMagSize: null, emptyReload: 1.93, baseDamage: 129269.5, dps: 689437, sustainDps: 339736, totalMag: 1292695,  moddedSustainDps: 339736, optimalRange: 60, modSlots: "N/A", hsd: 60 },

  // M4
  { weaponName: "Lightweight M4",          baseModel: "M4",             type: "Rifle",                                rpm: 360, baseMagSize: 30, moddedMagSize: 50,  emptyReload: 2.03, baseDamage: 107257.5, dps: 643545, sustainDps: 457713, totalMag: 3217725,  moddedSustainDps: 517486, optimalRange: 55, modSlots: "4\\", hsd: 60 },
  { weaponName: "LVOA-C",                  baseModel: "M4",             type: "Rifle",                                rpm: 380, baseMagSize: 30, moddedMagSize: 50,  emptyReload: 2.08, baseDamage: 100615.0, dps: 637228, sustainDps: 442793, totalMag: 3018450,  moddedSustainDps: 504349, optimalRange: 55, modSlots: "4\\", hsd: 60 },
  { weaponName: "LVOA-C Replica",          baseModel: "M4",             type: "Rifle",                                rpm: 380, baseMagSize: 30, moddedMagSize: 50,  emptyReload: 2.08, baseDamage: 100615.0, dps: 637228, sustainDps: 442793, totalMag: 3018450,  moddedSustainDps: 504349, optimalRange: 55, modSlots: "4\\", hsd: 60 },
  { weaponName: "Surge",                   baseModel: "M4",             type: "Rifle", weaponId: "surge",             rpm: 380, baseMagSize: 30, moddedMagSize: 50,  emptyReload: 2.08, baseDamage: 100615.0, dps: 637228, sustainDps: 442793, totalMag: 3018450,  moddedSustainDps: 504349, optimalRange: 55, modSlots: "4\\", hsd: 60 },

  // MDR
  { weaponName: "Urban MDR",               baseModel: "MDR",            type: "Rifle",                                rpm: 380, baseMagSize: 20, moddedMagSize: 40,  emptyReload: 2.85, baseDamage: 102970.0, dps: 652143, sustainDps: 342782, totalMag: 2059040,  moddedSustainDps: 449367, optimalRange: 60, modSlots: "4\\", hsd: 60 },
  { weaponName: "Urban MDR Replica",       baseModel: "MDR",            type: "Rifle",                                rpm: 380, baseMagSize: 20, moddedMagSize: 40,  emptyReload: 2.85, baseDamage: 102970.0, dps: 652143, sustainDps: 342782, totalMag: 2059040,  moddedSustainDps: 449367, optimalRange: 60, modSlots: "4\\", hsd: 60 },
  { weaponName: "Vindicator",              baseModel: "MDR",            type: "Rifle", weaponId: "vindicator",        rpm: 380, baseMagSize: 25, moddedMagSize: null, emptyReload: 2.97, baseDamage: 102970.0, dps: 652143, sustainDps: 372143, totalMag: 2574250,  moddedSustainDps: 372143, optimalRange: 60, modSlots: "N/A", hsd: 60 },

  // Scar
  { weaponName: "Military MK17",           baseModel: "Scar",           type: "Rifle",                                rpm: 275, baseMagSize: 10, moddedMagSize: 30,  emptyReload: 2.45, baseDamage: 145850.0, dps: 668479, sustainDps: 314887, totalMag: 1458500,  moddedSustainDps: 486412, optimalRange: 55, modSlots: "4\\", hsd: 60 },
  { weaponName: "Police MK17",             baseModel: "Scar",           type: "Rifle",                                rpm: 275, baseMagSize: 10, moddedMagSize: 30,  emptyReload: 2.45, baseDamage: 145850.0, dps: 668479, sustainDps: 314887, totalMag: 1458500,  moddedSustainDps: 486412, optimalRange: 55, modSlots: "4\\", hsd: 60 },
  { weaponName: "Police MK17 Replica",     baseModel: "Scar",           type: "Rifle",                                rpm: 275, baseMagSize: 10, moddedMagSize: 30,  emptyReload: 2.45, baseDamage: 145850.0, dps: 668479, sustainDps: 314887, totalMag: 1458500,  moddedSustainDps: 486412, optimalRange: 55, modSlots: "4\\", hsd: 60 },
  { weaponName: "Everlasting Gaze",        baseModel: "Scar",           type: "Rifle", weaponId: "everlasting-gaze",  rpm: 275, baseMagSize: 10, moddedMagSize: 30,  emptyReload: 2.45, baseDamage: 145850.0, dps: 668479, sustainDps: 314887, totalMag: 1458500,  moddedSustainDps: 486412, optimalRange: 55, modSlots: "4\\", hsd: 60 },

  // SIG
  { weaponName: "SIG 716",                 baseModel: "SIG",            type: "Rifle",                                rpm: 320, baseMagSize: 20, moddedMagSize: 40,  emptyReload: 2.68, baseDamage: 121258.0, dps: 646709, sustainDps: 377163, totalMag: 2425160,  moddedSustainDps: 476456, optimalRange: 45, modSlots: "4\\", hsd: 60 },
  { weaponName: "SIG 716 Replica",         baseModel: "SIG",            type: "Rifle",                                rpm: 320, baseMagSize: 20, moddedMagSize: 40,  emptyReload: 2.68, baseDamage: 121258.0, dps: 646709, sustainDps: 377163, totalMag: 2425160,  moddedSustainDps: 476456, optimalRange: 45, modSlots: "4\\", hsd: 60 },
  { weaponName: "SIG 716 CQB",             baseModel: "SIG",            type: "Rifle",                                rpm: 320, baseMagSize: 20, moddedMagSize: 40,  emptyReload: 2.63, baseDamage: 125865.0, dps: 671280, sustainDps: 394561, totalMag: 2517300,  moddedSustainDps: 496999, optimalRange: 45, modSlots: "3!\\", hsd: 60 },
  { weaponName: "Artist's Tool",           baseModel: "SIG",            type: "Rifle", weaponId: "artists-tool",      rpm: 320, baseMagSize: 20, moddedMagSize: 40,  emptyReload: 2.63, baseDamage: 125865.0, dps: 671280, sustainDps: 394561, totalMag: 2517300,  moddedSustainDps: 496999, optimalRange: 45, modSlots: "3!\\", hsd: 60 },
  { weaponName: "The Ravenous",            baseModel: "SIG",            type: "Rifle", weaponId: "the-ravenous",      rpm: 300, baseMagSize: 60, moddedMagSize: null, emptyReload: 2.18, baseDamage: 134360.0, dps: 671800, sustainDps: 568519, totalMag: 8061600,  moddedSustainDps: 568519, optimalRange: 50, modSlots: "N/A", hsd: 60 },

  // UMP
  { weaponName: "USC .45 ACP",             baseModel: "UMP",            type: "Rifle",                                rpm: 420, baseMagSize: 20, moddedMagSize: 40,  emptyReload: 2.88, baseDamage: 97742.5,  dps: 684198, sustainDps: 340736, totalMag: 1954850,  moddedSustainDps: 454919, optimalRange: 55, modSlots: "3!\\", hsd: 60 },
  { weaponName: "USC .45 ACP Replica",     baseModel: "UMP",            type: "Rifle",                                rpm: 420, baseMagSize: 20, moddedMagSize: 40,  emptyReload: 2.88, baseDamage: 97742.5,  dps: 684198, sustainDps: 340736, totalMag: 1954850,  moddedSustainDps: 454919, optimalRange: 55, modSlots: "3!\\", hsd: 60 },
  { weaponName: "Achilles",                baseModel: "UMP",            type: "Rifle", weaponId: "achilles",          rpm: 420, baseMagSize: 20, moddedMagSize: 40,  emptyReload: 2.88, baseDamage: 97742.5,  dps: 684198, sustainDps: 340736, totalMag: 1954850,  moddedSustainDps: 454919, optimalRange: 55, modSlots: "3!\\", hsd: 60 },

  // MK47
  { weaponName: "Resolute Mk47",           baseModel: "MK47",           type: "Rifle",                                rpm: 300, baseMagSize: 30, moddedMagSize: 50,  emptyReload: 1.94, baseDamage: 124901.0, dps: 624505, sustainDps: 471918, totalMag: 3747030,  moddedSustainDps: 523036, optimalRange: 55, modSlots: "4\\", hsd: 60 },
  { weaponName: "Harmony",                 baseModel: "MK47",           type: "Rifle", weaponId: "harmony",           rpm: 300, baseMagSize: 30, moddedMagSize: 50,  emptyReload: 1.94, baseDamage: 124901.0, dps: 624505, sustainDps: 471918, totalMag: 3747030,  moddedSustainDps: 523036, optimalRange: 55, modSlots: "4\\", hsd: 60 },

  // 1886
  { weaponName: "1886",                    baseModel: "1886",           type: "Rifle",                                rpm: 100, baseMagSize: 8,  moddedMagSize: null, emptyReload: 3.46, baseDamage: 386988.5, dps: 644981, sustainDps: 374807, totalMag: 3095908,  moddedSustainDps: 374807, optimalRange: 35, modSlots: "1&!#", hsd: 60 },
  { weaponName: "The Virginian",           baseModel: "1886",           type: "Rifle", weaponId: "the-virginian",     rpm: 100, baseMagSize: 8,  moddedMagSize: null, emptyReload: 3.46, baseDamage: 386988.5, dps: 644981, sustainDps: 374807, totalMag: 3095908,  moddedSustainDps: 374807, optimalRange: 35, modSlots: "1&!#", hsd: 60 },
  { weaponName: "Diamondback",             baseModel: "1886",           type: "Rifle", weaponId: "diamondback",       rpm: 100, baseMagSize: 8,  moddedMagSize: null, emptyReload: 3.15, baseDamage: 386988.5, dps: 644981, sustainDps: 389422, totalMag: 3095908,  moddedSustainDps: 389422, optimalRange: 35, modSlots: "N/A", hsd: 60 },

  // ── MARKSMAN RIFLES ─────────────────────────────────────────────────────────

  // SCAR
  { weaponName: "SOCOM Mk20 SSR",          baseModel: "MK20 SSR",       type: "Marksman Rifle",                            rpm: 275, baseMagSize: 20, moddedMagSize: 40,   emptyReload: 4.99, baseDamage: 145850.0, dps: 668479, sustainDps: 311857, totalMag: 2917000,  moddedSustainDps: 425303, optimalRange: 55, modSlots: "4\\", hsd: 0 },
  { weaponName: "SOCOM MK20 SSR Replica",  baseModel: "MK20 SSR",       type: "Marksman Rifle",                            rpm: 275, baseMagSize: 20, moddedMagSize: 40,   emptyReload: 4.99, baseDamage: 145850.0, dps: 668479, sustainDps: 311857, totalMag: 2917000,  moddedSustainDps: 425303, optimalRange: 55, modSlots: "4\\", hsd: 0 },
  { weaponName: "The Darkness",            baseModel: "MK20 SSR",       type: "Marksman Rifle", weaponId: "the-darkness",  rpm: 275, baseMagSize: 20, moddedMagSize: 40,   emptyReload: 4.99, baseDamage: 145850.0, dps: 668479, sustainDps: 311857, totalMag: 2917000,  moddedSustainDps: 425303, optimalRange: 55, modSlots: "4\\", hsd: 0 },

  // G28
  { weaponName: "G28",                     baseModel: "G28",            type: "Marksman Rifle",                            rpm: 180, baseMagSize: 20, moddedMagSize: 40,   emptyReload: 3.60, baseDamage: 206425.0, dps: 619275, sustainDps: 402127, totalMag: 4128500,  moddedSustainDps: 487618, optimalRange: 50, modSlots: "4\\", hsd: 0 },
  { weaponName: "Relic",                   baseModel: "G28",            type: "Marksman Rifle", weaponId: "relic",         rpm: 180, baseMagSize: 20, moddedMagSize: 40,   emptyReload: 3.60, baseDamage: 206425.0, dps: 619275, sustainDps: 402127, totalMag: 4128500,  moddedSustainDps: 487618, optimalRange: 50, modSlots: "4\\", hsd: 0 },
  { weaponName: "Sacrum Imperium",         baseModel: "G28",            type: "Marksman Rifle", weaponId: "sacrum-imperium", rpm: 180, baseMagSize: 20, moddedMagSize: null, emptyReload: 3.60, baseDamage: 206425.0, dps: 619275, sustainDps: 402127, totalMag: 4128500,  moddedSustainDps: 402127, optimalRange: 50, modSlots: "N/A", hsd: 0 },

  // M700
  { weaponName: "M700 Carbon",             baseModel: "M700",           type: "Marksman Rifle",                            rpm: 55,  baseMagSize: 7,  moddedMagSize: 12,   emptyReload: 3.98, baseDamage: 412516.0, dps: 378140, sustainDps: 248581, totalMag: 2887612,  moddedSustainDps: 289978, optimalRange: 50, modSlots: "4\\", hsd: 0 },
  { weaponName: "M700 Carbon Replica",     baseModel: "M700",           type: "Marksman Rifle",                            rpm: 55,  baseMagSize: 7,  moddedMagSize: 12,   emptyReload: 3.96, baseDamage: 412516.0, dps: 378140, sustainDps: 249010, totalMag: 2887612,  moddedSustainDps: 290318, optimalRange: 50, modSlots: "4\\", hsd: 0 },
  { weaponName: "M700 Tactical",           baseModel: "M700",           type: "Marksman Rifle",                            rpm: 55,  baseMagSize: 7,  moddedMagSize: 12,   emptyReload: 3.98, baseDamage: 412516.0, dps: 378140, sustainDps: 248581, totalMag: 2887612,  moddedSustainDps: 289978, optimalRange: 50, modSlots: "4",   hsd: 0 },
  { weaponName: "Model 700",               baseModel: "M700",           type: "Marksman Rifle",                            rpm: 55,  baseMagSize: 7,  moddedMagSize: null,  emptyReload: 7.05, baseDamage: 441569.5, dps: 404772, sustainDps: 210466, totalMag: 3090987,  moddedSustainDps: 210466, optimalRange: 50, modSlots: "3#",  hsd: 0 },
  { weaponName: "Model 700 Replica",       baseModel: "M700",           type: "Marksman Rifle",                            rpm: 55,  baseMagSize: 7,  moddedMagSize: null,  emptyReload: 7.05, baseDamage: 441569.5, dps: 404772, sustainDps: 210466, totalMag: 3090987,  moddedSustainDps: 210466, optimalRange: 50, modSlots: "3#",  hsd: 0 },
  { weaponName: "Brutus",                  baseModel: "M700",           type: "Marksman Rifle", weaponId: "brutus",        rpm: 55,  baseMagSize: 7,  moddedMagSize: 12,   emptyReload: 3.98, baseDamage: 412516.0, dps: 378140, sustainDps: 248581, totalMag: 2887612,  moddedSustainDps: 289978, optimalRange: 50, modSlots: "4\\", hsd: 0 },
  { weaponName: "Ekim's Long Stick",       baseModel: "M700",           type: "Marksman Rifle", weaponId: "ekims-long-stick", rpm: 55, baseMagSize: 7, moddedMagSize: null, emptyReload: 7.05, baseDamage: 441569.5, dps: 404772, sustainDps: 210466, totalMag: 3090987,  moddedSustainDps: 210466, optimalRange: 50, modSlots: "3#",  hsd: 0 },
  { weaponName: "Shroud",                  baseModel: "M700",           type: "Marksman Rifle", weaponId: "shroud",        rpm: 55,  baseMagSize: 7,  moddedMagSize: null,  emptyReload: 3.32, baseDamage: 412516.0, dps: 378140, sustainDps: 263636, totalMag: 2887612,  moddedSustainDps: 263636, optimalRange: 50, modSlots: "N/A", hsd: 0 },

  // SVD
  { weaponName: "Paratrooper SVD",         baseModel: "SVD",            type: "Marksman Rifle",                            rpm: 260, baseMagSize: 10, moddedMagSize: 15,   emptyReload: 2.85, baseDamage: 156662.5, dps: 678871, sustainDps: 303745, totalMag: 1566625,  moddedSustainDps: 372324, optimalRange: 50, modSlots: "4",   hsd: 0 },
  { weaponName: "Surplus SVD",             baseModel: "SVD",            type: "Marksman Rifle",                            rpm: 260, baseMagSize: 10, moddedMagSize: 15,   emptyReload: 2.85, baseDamage: 156662.5, dps: 678871, sustainDps: 303745, totalMag: 1566625,  moddedSustainDps: 372324, optimalRange: 50, modSlots: "4",   hsd: 0 },
  { weaponName: "Commando",                baseModel: "SVD",            type: "Marksman Rifle", weaponId: "commando",      rpm: 260, baseMagSize: 10, moddedMagSize: 15,   emptyReload: 2.85, baseDamage: 156662.5, dps: 678871, sustainDps: 303745, totalMag: 1566625,  moddedSustainDps: 372324, optimalRange: 50, modSlots: "4",   hsd: 0 },
  { weaponName: "Handbasket",              baseModel: "SVD",            type: "Marksman Rifle", weaponId: "handbasket",    rpm: 60,  baseMagSize: 10, moddedMagSize: 15,   emptyReload: 3.15, baseDamage: 386988.5, dps: 386989, sustainDps: 294288, totalMag: 3869885,  moddedSustainDps: 319825, optimalRange: 50, modSlots: "4",   hsd: 0 },
  { weaponName: "Dread Edict",             baseModel: "SVD",            type: "Marksman Rifle", weaponId: "dread-edict",   rpm: 260, baseMagSize: 10, moddedMagSize: null,  emptyReload: 2.48, baseDamage: 156662.5, dps: 678871, sustainDps: 327219, totalMag: 1566625,  moddedSustainDps: 327219, optimalRange: 50, modSlots: "N/A", hsd: 0 },

  // SRS
  { weaponName: "Covert SRS",              baseModel: "SRS",            type: "Marksman Rifle",                            rpm: 60,  baseMagSize: 7,  moddedMagSize: 12,   emptyReload: 4.29, baseDamage: 409357.0, dps: 409357, sustainDps: 253809, totalMag: 2865499,  moddedSustainDps: 301552, optimalRange: 60, modSlots: "4",   hsd: 0 },
  { weaponName: "SRS A1",                  baseModel: "SRS",            type: "Marksman Rifle",                            rpm: 60,  baseMagSize: 7,  moddedMagSize: 12,   emptyReload: 4.29, baseDamage: 409357.0, dps: 409357, sustainDps: 253809, totalMag: 2865499,  moddedSustainDps: 301552, optimalRange: 60, modSlots: "4\\", hsd: 0 },
  { weaponName: "SRS A1 Replica",          baseModel: "SRS",            type: "Marksman Rifle",                            rpm: 60,  baseMagSize: 7,  moddedMagSize: 12,   emptyReload: 4.29, baseDamage: 409357.0, dps: 409357, sustainDps: 253809, totalMag: 2865499,  moddedSustainDps: 301552, optimalRange: 60, modSlots: "4\\", hsd: 0 },
  { weaponName: "Pinprick",                baseModel: "SRS",            type: "Marksman Rifle", weaponId: "pinprick",      rpm: 60,  baseMagSize: 7,  moddedMagSize: 12,   emptyReload: 4.29, baseDamage: 409357.0, dps: 409357, sustainDps: 253809, totalMag: 2865499,  moddedSustainDps: 301552, optimalRange: 60, modSlots: "4",   hsd: 0 },
  { weaponName: "Mantis",                  baseModel: "SRS",            type: "Marksman Rifle", weaponId: "mantis",        rpm: 60,  baseMagSize: 7,  moddedMagSize: null,  emptyReload: 3.90, baseDamage: 409357.0, dps: 409357, sustainDps: 262890, totalMag: 2865499,  moddedSustainDps: 262890, optimalRange: 60, modSlots: "N/A", hsd: 0 },

  // M44
  { weaponName: "Classic M44 Carbine",     baseModel: "M44",            type: "Marksman Rifle",                            rpm: 55,  baseMagSize: 5,  moddedMagSize: null,  emptyReload: 4.29, baseDamage: 433563.5, dps: 397433, sustainDps: 222465, totalMag: 2167818,  moddedSustainDps: 222465, optimalRange: 50, modSlots: "3!",  hsd: 0 },
  { weaponName: "Classic M44 Carbine Replica", baseModel: "M44",        type: "Marksman Rifle",                            rpm: 55,  baseMagSize: 5,  moddedMagSize: null,  emptyReload: 4.29, baseDamage: 433563.5, dps: 397433, sustainDps: 222465, totalMag: 2167818,  moddedSustainDps: 222465, optimalRange: 50, modSlots: "3!",  hsd: 0 },
  { weaponName: "Hunting M44",             baseModel: "M44",            type: "Marksman Rifle",                            rpm: 55,  baseMagSize: 5,  moddedMagSize: null,  emptyReload: 4.29, baseDamage: 428664.0, dps: 392942, sustainDps: 219951, totalMag: 2143320,  moddedSustainDps: 219951, optimalRange: 50, modSlots: "4",   hsd: 0 },
  { weaponName: "Custom M44",              baseModel: "M44",            type: "Marksman Rifle",                            rpm: 55,  baseMagSize: 5,  moddedMagSize: 10,   emptyReload: 4.29, baseDamage: 417692.0, dps: 382884, sustainDps: 214321, totalMag: 2088460,  moddedSustainDps: 274814, optimalRange: 50, modSlots: "4",   hsd: 0 },
  { weaponName: "Custom M44 Replica",      baseModel: "M44",            type: "Marksman Rifle",                            rpm: 55,  baseMagSize: 5,  moddedMagSize: 10,   emptyReload: 4.29, baseDamage: 417692.0, dps: 382884, sustainDps: 214321, totalMag: 2088460,  moddedSustainDps: 274814, optimalRange: 50, modSlots: "4",   hsd: 0 },
  { weaponName: "Instigator",              baseModel: "M44",            type: "Marksman Rifle", weaponId: "instigator",    rpm: 55,  baseMagSize: 5,  moddedMagSize: 10,   emptyReload: 4.29, baseDamage: 417692.0, dps: 382884, sustainDps: 214321, totalMag: 2088460,  moddedSustainDps: 274814, optimalRange: 50, modSlots: "4",   hsd: 0 },
  // Slower reload because scope cannot be removed
  { weaponName: "Oh Carol",                baseModel: "M44",            type: "Marksman Rifle", weaponId: "oh-carol",      rpm: 55,  baseMagSize: 5,  moddedMagSize: null,  emptyReload: 4.77, baseDamage: 433563.5, dps: 397433, sustainDps: 212021, totalMag: 2167818,  moddedSustainDps: 212021, optimalRange: 50, modSlots: "1!#$", hsd: 0 },
  { weaponName: "The White Death",         baseModel: "M44",            type: "Marksman Rifle", weaponId: "the-white-death", rpm: 55, baseMagSize: 5, moddedMagSize: null,  emptyReload: 4.29, baseDamage: 433563.5, dps: 397433, sustainDps: 222465, totalMag: 2167818,  moddedSustainDps: 222465, optimalRange: 50, modSlots: "3!",  hsd: 0 },

  // DSR-1
  { weaponName: "SR-1",                    baseModel: "DSR-1",          type: "Marksman Rifle",                            rpm: 60,  baseMagSize: 5,  moddedMagSize: 10,   emptyReload: 3.15, baseDamage: 409357.0, dps: 409357, sustainDps: 251139, totalMag: 2046785,  moddedSustainDps: 311298, optimalRange: 50, modSlots: "4",   hsd: 0 },
  { weaponName: "SR-1 Replica",            baseModel: "DSR-1",          type: "Marksman Rifle",                            rpm: 60,  baseMagSize: 5,  moddedMagSize: 10,   emptyReload: 3.15, baseDamage: 409357.0, dps: 409357, sustainDps: 251139, totalMag: 2046785,  moddedSustainDps: 311298, optimalRange: 50, modSlots: "4",   hsd: 0 },
  { weaponName: "Adrestia",                baseModel: "DSR-1",          type: "Marksman Rifle", weaponId: "adrestia",      rpm: 60,  baseMagSize: 5,  moddedMagSize: 10,   emptyReload: 3.15, baseDamage: 409357.0, dps: 409357, sustainDps: 251139, totalMag: 2046785,  moddedSustainDps: 311298, optimalRange: 50, modSlots: "4",   hsd: 0 },
  { weaponName: "Designated Hitter",       baseModel: "DSR-1",          type: "Marksman Rifle", weaponId: "designated-hitter", rpm: 60, baseMagSize: 5, moddedMagSize: 10, emptyReload: 3.15, baseDamage: 409357.0, dps: 409357, sustainDps: 251139, totalMag: 2046785,  moddedSustainDps: 311298, optimalRange: 50, modSlots: "4",   hsd: 0 },

  // Tactical .308
  { weaponName: "Tactical .308",           baseModel: "Tactical .308",  type: "Marksman Rifle",                            rpm: 90,  baseMagSize: 7,  moddedMagSize: 12,   emptyReload: 3.04, baseDamage: 403809.5, dps: 605714, sustainDps: 366782, totalMag: 2826667,  moddedSustainDps: 438923, optimalRange: 50, modSlots: "4\\", hsd: 0 },
  { weaponName: "Scalpel",                 baseModel: "Tactical .308",  type: "Marksman Rifle", weaponId: "scalpel",       rpm: 90,  baseMagSize: 7,  moddedMagSize: 12,   emptyReload: 3.04, baseDamage: 403809.5, dps: 605714, sustainDps: 366782, totalMag: 2826667,  moddedSustainDps: 438923, optimalRange: 50, modSlots: "4\\", hsd: 0 },

  // Custom AWM
  { weaponName: "Nemesis",                 baseModel: "Custom AWM",     type: "Marksman Rifle", weaponId: "nemesis",       rpm: 50,  baseMagSize: 5,  moddedMagSize: null,  emptyReload: 2.78, baseDamage: 940240.0, dps: 783533, sustainDps: 535444, totalMag: 4701200,  moddedSustainDps: 535444, optimalRange: 60, modSlots: "N/A", hsd: 0 },

  // ── PISTOLS ─────────────────────────────────────────────────────────────────

  // 93R
  { weaponName: "93R",                     baseModel: "93R",            type: "Pistol",                                        rpm: 700, baseMagSize: 20, moddedMagSize: 31,   emptyReload: 1.71, baseDamage:  52977.5, dps: 618071, sustainDps: 309422, totalMag: 1059550,  moddedSustainDps: 376059, optimalRange: 12, modSlots: "2&#",  hsd: 100 },
  { weaponName: "Sharpshooter's 93R",      baseModel: "93R",            type: "Pistol", weaponId: "sharpshooters-93r",         rpm: 700, baseMagSize: 20, moddedMagSize: 31,   emptyReload: 1.56, baseDamage:  52977.5, dps: 618071, sustainDps: 323597, totalMag: 1059550,  moddedSustainDps: 389435, optimalRange: 12, modSlots: "2&#",  hsd: 100 },
  { weaponName: "Tempest",                 baseModel: "93R",            type: "Pistol", weaponId: "tempest",                   rpm: 700, baseMagSize: 30, moddedMagSize: null,  emptyReload: 2.38, baseDamage:  62714.0, dps: 731663, sustainDps: 380282, totalMag: 1881420,  moddedSustainDps: 380282, optimalRange: 12, modSlots: "N/A",  hsd: 100 },

  // Desert Eagle
  { weaponName: "D50",                     baseModel: "Desert Eagle",   type: "Pistol",                                        rpm: 200, baseMagSize: 8,  moddedMagSize: null,  emptyReload: 2.24, baseDamage: 189171.5, dps: 630572, sustainDps: 326158, totalMag: 1513372,  moddedSustainDps: 326158, optimalRange: 18, modSlots: "1$#!", hsd: 100 },
  { weaponName: "Survivalist D50",         baseModel: "Desert Eagle",   type: "Pistol", weaponId: "survivalist-d50",           rpm: 200, baseMagSize: 8,  moddedMagSize: null,  emptyReload: 2.24, baseDamage: 189171.5, dps: 630572, sustainDps: 326158, totalMag: 1513372,  moddedSustainDps: 326158, optimalRange: 18, modSlots: "1$#!", hsd: 100 },
  { weaponName: "Liberty",                 baseModel: "Desert Eagle",   type: "Pistol", weaponId: "liberty",                   rpm: 230, baseMagSize: 8,  moddedMagSize: null,  emptyReload: 1.95, baseDamage: 189171.5, dps: 725157, sustainDps: 374879, totalMag: 1513372,  moddedSustainDps: 374879, optimalRange: 18, modSlots: "N/A",  hsd: 100 },

  // M1911
  { weaponName: "M1911",                   baseModel: "M1911",          type: "Pistol",                                        rpm: 310, baseMagSize: 7,  moddedMagSize: 18,   emptyReload: 2.24, baseDamage: 129884.5, dps: 671070, sustainDps: 252916, totalMag:  909192,  moddedSustainDps: 408451, optimalRange: 12, modSlots: "1#!&", hsd: 100 },
  { weaponName: "M45A1",                   baseModel: "M1911",          type: "Pistol",                                        rpm: 310, baseMagSize: 7,  moddedMagSize: 18,   emptyReload: 2.33, baseDamage: 117435.5, dps: 606750, sustainDps: 223089, totalMag:  822049,  moddedSustainDps: 363585, optimalRange: 12, modSlots: "4",    hsd: 100 },
  { weaponName: "Tactical M1911",          baseModel: "M1911",          type: "Pistol",                                        rpm: 310, baseMagSize: 7,  moddedMagSize: 18,   emptyReload: 2.33, baseDamage: 117435.5, dps: 606750, sustainDps: 223089, totalMag:  822049,  moddedSustainDps: 363585, optimalRange: 12, modSlots: "4",    hsd: 100 },
  { weaponName: "Tactical M1911 Replica",  baseModel: "M1911",          type: "Pistol",                                        rpm: 310, baseMagSize: 7,  moddedMagSize: 18,   emptyReload: 2.33, baseDamage: 117435.5, dps: 606750, sustainDps: 223089, totalMag:  822049,  moddedSustainDps: 363585, optimalRange: 12, modSlots: "4",    hsd: 100 },
  { weaponName: "Quickstep",               baseModel: "M1911",          type: "Pistol", weaponId: "quickstep",                 rpm: 310, baseMagSize: 7,  moddedMagSize: 18,   emptyReload: 2.33, baseDamage: 117435.5, dps: 606750, sustainDps: 223089, totalMag:  822049,  moddedSustainDps: 363585, optimalRange: 12, modSlots: "4",    hsd: 100 },
  { weaponName: "Mozambique Special",      baseModel: "M1911",          type: "Pistol", weaponId: "mozambique-special",        rpm: 310, baseMagSize: 7,  moddedMagSize: 18,   emptyReload: 2.33, baseDamage: 117435.5, dps: 606750, sustainDps: 223089, totalMag:  822049,  moddedSustainDps: 363585, optimalRange: 12, modSlots: "4",    hsd: 100 },

  // Maxim
  { weaponName: "Maxim 9",                 baseModel: "Maxim 9",        type: "Pistol", weaponId: "maxim-9",                   rpm: 280, baseMagSize: 17, moddedMagSize: 28,   emptyReload: 1.39, baseDamage: 125385.0, dps: 585130, sustainDps: 423526, totalMag: 2131545,  moddedSustainDps: 475072, optimalRange: 16, modSlots: "1#!&", hsd: 100 },

  // M9
  { weaponName: "Military M9",             baseModel: "M9",             type: "Pistol",                                        rpm: 350, baseMagSize: 15, moddedMagSize: 26,   emptyReload: 1.90, baseDamage: 102584.5, dps: 598410, sustainDps: 344133, totalMag: 1538768,  moddedSustainDps: 419559, optimalRange: 16, modSlots: "2#&",  hsd: 100 },
  { weaponName: "Military M9 Replica",     baseModel: "M9",             type: "Pistol",                                        rpm: 350, baseMagSize: 15, moddedMagSize: 26,   emptyReload: 1.90, baseDamage: 102584.5, dps: 598410, sustainDps: 344133, totalMag: 1538768,  moddedSustainDps: 419559, optimalRange: 16, modSlots: "2#&",  hsd: 100 },
  { weaponName: "Officer's M9 A1",         baseModel: "M9",             type: "Pistol",                                        rpm: 350, baseMagSize: 15, moddedMagSize: 26,   emptyReload: 1.96, baseDamage:  95697.5, dps: 558235, sustainDps: 316779, totalMag: 1435463,  moddedSustainDps: 387733, optimalRange: 16, modSlots: "4",    hsd: 100 },
  { weaponName: "Mosquito",                baseModel: "M9",             type: "Pistol", weaponId: "mosquito",                  rpm: 350, baseMagSize: 15, moddedMagSize: null,  emptyReload: 1.65, baseDamage: 102584.5, dps: 598410, sustainDps: 364513, totalMag: 1538768,  moddedSustainDps: 364513, optimalRange: 16, modSlots: "N/A",  hsd: 100 },

  // P320
  { weaponName: "P320 XCompact",           baseModel: "P320",           type: "Pistol", weaponId: "p320-xcompact",             rpm: 380, baseMagSize: 17, moddedMagSize: 28,   emptyReload: 1.77, baseDamage:  87522.0, dps: 554306, sustainDps: 334038, totalMag: 1487874,  moddedSustainDps: 395832, optimalRange: 12, modSlots: "4",    hsd: 100 },

  // PF45
  { weaponName: "Custom PF45",             baseModel: "PF45",           type: "Pistol",                                        rpm: 370, baseMagSize: 10, moddedMagSize: 21,   emptyReload: 1.77, baseDamage:  93962.5, dps: 579435, sustainDps: 277043, totalMag:  939625,  moddedSustainDps: 381267, optimalRange: 14, modSlots: "4",    hsd: 100 },
  { weaponName: "First Wave PF45",         baseModel: "PF45",           type: "Pistol",                                        rpm: 370, baseMagSize: 10, moddedMagSize: 21,   emptyReload: 1.74, baseDamage: 100727.5, dps: 621153, sustainDps: 299640, totalMag: 1007275,  moddedSustainDps: 411100, optimalRange: 14, modSlots: "2!&",  hsd: 100 },
  { weaponName: "Lightning Rod",           baseModel: "PF45",           type: "Pistol", weaponId: "lightning-rod",             rpm: 370, baseMagSize: 10, moddedMagSize: 21,   emptyReload: 1.77, baseDamage:  93962.5, dps: 579435, sustainDps: 277043, totalMag:  939625,  moddedSustainDps: 381267, optimalRange: 14, modSlots: "4",    hsd: 100 },
  { weaponName: "Busy Little Bee",         baseModel: "PF45",           type: "Pistol", weaponId: "busy-little-bee",           rpm: 400, baseMagSize: 10, moddedMagSize: null,  emptyReload: 1.61, baseDamage:  93962.5, dps: 626417, sustainDps: 302130, totalMag:  939625,  moddedSustainDps: 302130, optimalRange: 18, modSlots: "N/A",  hsd: 100 },

  // Px4
  { weaponName: "Px4 Storm Type F",        baseModel: "Px4",            type: "Pistol",                                        rpm: 380, baseMagSize: 14, moddedMagSize: 25,   emptyReload: 1.63, baseDamage:  91692.0, dps: 580716, sustainDps: 334248, totalMag: 1283688,  moddedSustainDps: 411000, optimalRange: 12, modSlots: "3&",   hsd: 100 },
  { weaponName: "Px4 Storm Type T",        baseModel: "Px4",            type: "Pistol",                                        rpm: 380, baseMagSize: 14, moddedMagSize: 25,   emptyReload: 1.63, baseDamage:  91692.0, dps: 580716, sustainDps: 334248, totalMag: 1283688,  moddedSustainDps: 411000, optimalRange: 12, modSlots: "3&",   hsd: 100 },
  { weaponName: "Px4 Storm Type T Replica",baseModel: "Px4",            type: "Pistol",                                        rpm: 380, baseMagSize: 14, moddedMagSize: 25,   emptyReload: 1.63, baseDamage:  91692.0, dps: 580716, sustainDps: 334248, totalMag: 1283688,  moddedSustainDps: 411000, optimalRange: 12, modSlots: "3&",   hsd: 100 },

  // Rhino
  { weaponName: "Diceros",                 baseModel: "Rhino",          type: "Pistol",                                        rpm: 180, baseMagSize: 6,  moddedMagSize: null,  emptyReload: 2.00, baseDamage: 204803.0, dps: 614409, sustainDps: 307205, totalMag: 1228818,  moddedSustainDps: 307205, optimalRange: 18, modSlots: "2&!",  hsd: 100 },
  { weaponName: "Diceros Replica",         baseModel: "Rhino",          type: "Pistol",                                        rpm: 180, baseMagSize: 6,  moddedMagSize: null,  emptyReload: 2.00, baseDamage: 204803.0, dps: 614409, sustainDps: 307205, totalMag: 1228818,  moddedSustainDps: 307205, optimalRange: 18, modSlots: "2&!",  hsd: 100 },
  { weaponName: "Snubnosed Diceros",       baseModel: "Rhino",          type: "Pistol",                                        rpm: 180, baseMagSize: 6,  moddedMagSize: null,  emptyReload: 1.98, baseDamage: 211295.0, dps: 633885, sustainDps: 318535, totalMag: 1267770,  moddedSustainDps: 318535, optimalRange: 18, modSlots: "1#!&", hsd: 100 },
  { weaponName: "Diceros Special",         baseModel: "Rhino",          type: "Pistol", weaponId: "diceros-special",           rpm: 180, baseMagSize: 6,  moddedMagSize: null,  emptyReload: 1.93, baseDamage: 198305.5, dps: 594917, sustainDps: 302756, totalMag: 1189833,  moddedSustainDps: 302756, optimalRange: 18, modSlots: "3!",   hsd: 100 },

  // Magnum
  { weaponName: "586 Magnum",              baseModel: "Magnum",         type: "Pistol",                                        rpm: 160, baseMagSize: 6,  moddedMagSize: null,  emptyReload: 2.54, baseDamage: 233278.0, dps: 622075, sustainDps: 292206, totalMag: 1399668,  moddedSustainDps: 292206, optimalRange: 16, modSlots: "2!#",  hsd: 100 },
  { weaponName: "Police 686 Magnum",       baseModel: "Magnum",         type: "Pistol",                                        rpm: 160, baseMagSize: 6,  moddedMagSize: null,  emptyReload: 2.54, baseDamage: 233278.0, dps: 622075, sustainDps: 292206, totalMag: 1399668,  moddedSustainDps: 292206, optimalRange: 16, modSlots: "2!#",  hsd: 100 },
  { weaponName: "Police 686 Magnum Replica",baseModel: "Magnum",        type: "Pistol",                                        rpm: 160, baseMagSize: 6,  moddedMagSize: null,  emptyReload: 2.54, baseDamage: 233278.0, dps: 622075, sustainDps: 292206, totalMag: 1399668,  moddedSustainDps: 292206, optimalRange: 16, modSlots: "2!#",  hsd: 100 },
  { weaponName: "Orbit",                   baseModel: "Magnum",         type: "Pistol", weaponId: "orbit",                     rpm: 160, baseMagSize: 6,  moddedMagSize: null,  emptyReload: 2.54, baseDamage: 233278.0, dps: 622075, sustainDps: 292206, totalMag: 1399668,  moddedSustainDps: 292206, optimalRange: 16, modSlots: "2!#",  hsd: 100 },
  { weaponName: "Prophet",                 baseModel: "Magnum",         type: "Pistol", weaponId: "prophet",                   rpm: 160, baseMagSize: 6,  moddedMagSize: null,  emptyReload: 2.54, baseDamage: 233278.0, dps: 622075, sustainDps: 292206, totalMag: 1399668,  moddedSustainDps: 292206, optimalRange: 16, modSlots: "2!#",  hsd: 100 },
  { weaponName: "The Harvest",             baseModel: "Magnum",         type: "Pistol", weaponId: "the-harvest",               rpm: 149, baseMagSize: 6,  moddedMagSize: null,  emptyReload: 2.54, baseDamage: 256610.0, dps: 637248, sustainDps: 310659, totalMag: 1539660,  moddedSustainDps: 310659, optimalRange: 16, modSlots: "2!#",  hsd: 100 },
  { weaponName: "Regulus",                 baseModel: "Magnum",         type: "Pistol", weaponId: "regulus",                   rpm: 160, baseMagSize: 6,  moddedMagSize: null,  emptyReload: 2.31, baseDamage: 282072.0, dps: 752192, sustainDps: 371147, totalMag: 1692432,  moddedSustainDps: 371147, optimalRange: 16, modSlots: "N/A",  hsd: 100 },

  // X-45
  { weaponName: "X-45",                    baseModel: "X-45",           type: "Pistol",                                        rpm: 400, baseMagSize: 15, moddedMagSize: 26,   emptyReload: 1.99, baseDamage:  88321.0, dps: 588807, sustainDps: 312456, totalMag: 1324815,  moddedSustainDps: 389872, optimalRange: 16, modSlots: "3&",   hsd: 100 },
  { weaponName: "X-45 Tactical",           baseModel: "X-45",           type: "Pistol",                                        rpm: 400, baseMagSize: 15, moddedMagSize: 26,   emptyReload: 1.99, baseDamage:  88321.0, dps: 588807, sustainDps: 312456, totalMag: 1324815,  moddedSustainDps: 389872, optimalRange: 16, modSlots: "3&",   hsd: 100 },
  { weaponName: "X-45 Tactical Replica",   baseModel: "X-45",           type: "Pistol",                                        rpm: 400, baseMagSize: 15, moddedMagSize: 26,   emptyReload: 1.99, baseDamage:  88321.0, dps: 588807, sustainDps: 312456, totalMag: 1324815,  moddedSustainDps: 389872, optimalRange: 16, modSlots: "3&",   hsd: 100 },

  // Kriss Kard
  { weaponName: "Kard-45",                 baseModel: "Kriss Kard",     type: "Pistol",                                        rpm: 310, baseMagSize: 10, moddedMagSize: 21,   emptyReload: 1.71, baseDamage: 114267.0, dps: 590380, sustainDps: 313448, totalMag: 1142670,  moddedSustainDps: 415551, optimalRange: 12, modSlots: "4",    hsd: 100 },
  { weaponName: "TDI \"Kard\" Custom",     baseModel: "Kriss Kard",     type: "Pistol", weaponId: "tdi-kard-custom",           rpm: 310, baseMagSize: 10, moddedMagSize: 21,   emptyReload: 1.71, baseDamage: 114267.0, dps: 590380, sustainDps: 313448, totalMag: 1142670,  moddedSustainDps: 415551, optimalRange: 12, modSlots: "4",    hsd: 100 },

];

// ─────────────────────────────────────────────────────────────────────────────
// Derived helpers
// ─────────────────────────────────────────────────────────────────────────────

export const WEAPON_STAT_MAP = new Map(
  WEAPON_STATS.filter(w => w.weaponId).map(w => [w.weaponId!, w])
);

export const weaponStatsByType = (type: WeaponType) =>
  WEAPON_STATS.filter(w => w.type === type);
