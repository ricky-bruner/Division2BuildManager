---
name: Outstanding stubs and data gaps
description: Specific missing data fields the user needs to supply before these entries are complete
type: project
---

## Weapon stubs (new releases — user to supply talent/drop data)

All four are in `lib/namedWeapons.ts` with `talentId: ""` and `dropLocation: ""`:
- `bellringer` — baseModel: Infantry MG5, type: Light Machine Gun
- `gear-shift` — baseModel: Military MK46, type: Light Machine Gun
- `stack-broker` — baseModel: ACS-12, type: Shotgun
- `adrestia` — baseModel: SR-1, type: Marksman Rifle

In `lib/exoticWeapons.ts` with `talentId: ""`, `fixedMods: {}`, `dropLocation: ""`:
- `big-alejandro` — baseModel: Ameli, type: Light Machine Gun

## Skill data gaps
- `lib/skillData.ts` — Sticky Bomb EMP variant: `Disrupt Duration` base value stored as `"??"` (was illegible in source image)
- `lib/skillData.ts` — Drone Bombardier: `Blast Radius` overcharge stored as `"+5 Blast Radius"` (integer metres, not a %) — may need a field type change

## Gear talent fixes
- `lib/gearTalents.ts` — `perfectly-tamper-proof` description needs verifying/fixing (flagged in a prior session)

## Named gear brand gaps
- `lib/namedGear.ts` — 29 gear items have `brand: ""` — brand set affiliation not yet filled in

## Not yet created
- High-end generic gear items (e.g. "Providence Defense Mask" with random rolls) — no file exists yet; only named gear is sourced

**Why:** These were left as stubs because the data wasn't available at time of entry (new releases, illegible screenshots, or not yet sourced).

**How to apply:** When user provides talent names, drop locations, or other missing fields for the stubs above, update the relevant file entries directly. Do not create new entries — the stubs are already wired into weaponStats.ts via weaponId.
