---
name: Data file completion status
description: Which lib/ data files are complete vs partially stubbed, as of session ending 2026-03-15
type: project
---

All major data entry is complete. Below is per-file status.

**COMPLETE — no further data entry needed:**
- `lib/weaponStats.ts` — 309 weapon stat entries across all 7 types (AR, LMG, SMG, Shotgun, Rifle, MMR, Pistol). Includes RPM, mag sizes, reload, damage, DPS, sustain DPS, total mag, modded sustain DPS, optimal range, mod slots, HSD. Named/exotic entries linked via `weaponId`.
- `lib/namedWeapons.ts` — 91+ named weapons (4 are new-release stubs — see outstanding_stubs memory)
- `lib/exoticWeapons.ts` — 38 exotic weapons (1 is a new-release stub)
- `lib/weaponTypes.ts` — WeaponTypeDef with innate HSD and fixed second attribute per type
- `lib/brandSetData.ts` — 35 brand sets with 1/2/3pc bonuses
- `lib/gearSetData.ts` — 25 gear sets with 2/3/4pc bonuses + chest and backpack named talents
- `lib/gearTalents.ts` — 115 gear talents (41 perfectGear, 47 generalGear, 30 exoticGear)
- `lib/attributeData.ts` — weapon/gear attribute tables with max values
- `lib/weaponMods.ts` — 80+ weapon mods (optics, magazine, muzzle, underbarrel)
- `lib/skillData.ts` — all 12 skills × 39 variants with tier scaling and overcharge

**INCOMPLETE — data gaps exist:**
- `lib/namedGear.ts` — 161 named gear items; 29 have `brand: ""` (brand affiliation unknown)
- High-end generic gear items — not yet added to any file (only named gear sourced so far)

**Why:** User is building a build planner for The Division 2. v1 goal is weapon/gear selection from dropdowns; v2 shows accurate stats as build is configured.

**How to apply:** When continuing data work, don't re-enter anything in the COMPLETE list. Focus on the gaps listed in the outstanding_stubs memory.
