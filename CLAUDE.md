# Division 2 Build Manager — Claude Context

## Project overview
A build planner web app for Tom Clancy's The Division 2. Players configure gear, weapons, and skills to plan and share builds. No database — state is managed in React and exported/imported as JSON.

**Stack:** Next.js 16 (App Router) · TypeScript · Tailwind CSS v4
**Target deployment:** Vercel (free tier, auto-deploys from GitHub `main`)
**Dev server:** `npm run dev`
**Type check:** `npx tsc --noEmit` (run after every change — must stay clean)

---

## File map

### App shell
| File | Purpose |
|---|---|
| `app/page.tsx` | Entry point — renders `<BuildPlanner>` |
| `app/layout.tsx` | Root layout; loads Rajdhani + Share Tech Mono via `<link>` in `<head>` |
| `app/globals.css` | Tailwind v4 import, CSS vars, `animate-fadeIn` keyframes, `grid-bg` utility |

### Components
| File | Purpose |
|---|---|
| `components/BuildPlanner.tsx` | Main client component — all build state lives here (`useState` + `useCallback`) |
| `components/GearCard.tsx` | Expandable gear slot card (chest, backpack, mask, gloves, holster, kneepads) |
| `components/WeaponCard.tsx` | Expandable weapon slot card (primary, secondary, sidearm) |
| `components/SkillCard.tsx` | Skill + variant selector |
| `components/SpecializationCard.tsx` | Specialization picker |
| `components/ui/DivSelect.tsx` | Styled `<select>` primitive |
| `components/ui/DivInput.tsx` | Styled `<input>` primitive |
| `components/ui/SectionHeader.tsx` | Orange accent section header |
| `components/ui/BrandPicker.tsx` | Brand/gear-set picker |
| `components/ui/CardForm.tsx` | Shared card form layout wrapper |
| `components/ui/FormSectionLabel.tsx` | Label for form sections inside cards |
| `components/ui/ItemCardTile.tsx` | Tile used inside card grids |

### Data layer (`lib/`)
| File | Purpose |
|---|---|
| `lib/types.ts` | TypeScript interfaces: `Build`, `GearItem`, `WeaponItem`, `SkillSlot`, `Rarity` |
| `lib/gameData.ts` | Legacy constants + default factory functions; some lists are stubs to be replaced |
| `lib/attrUtils.ts` | Utility functions for attribute lookups |
| `lib/weaponTypes.ts` | Shared primitives: `WeaponType`, `TalentType`, `Talent`, `UniqueAttribute` |
| `lib/namedWeapons.ts` | 91 named weapons + 59 talents + 10 unique attributes; re-exports shared types |
| `lib/exoticWeapons.ts` | 38 exotic weapons with fixed mods and exotic talents |
| `lib/attributeData.ts` | Weapon/gear core + minor + mod attribute tables with max values |
| `lib/weaponMods.ts` | 80+ weapon mods (optics, magazine, muzzle, underbarrel) with bonuses/penalties |
| `lib/skillData.ts` | All 12 skills × 39 variants with full tier scaling and overcharge data |

---

## Data architecture

### Normalised weapon schema
Weapons reference talents/attributes by ID rather than embedding text. The pattern:

```
weaponTypes.ts  ←  namedWeapons.ts   (imports shared primitives)
                ←  exoticWeapons.ts  (imports shared primitives)
```

**`NamedWeapon`**
```ts
{ weaponId, weaponName, baseModel, type: WeaponType,
  talentId: string | null,           // → TALENTS[].talentId
  uniqueAttributeId: string | null,  // → UNIQUE_ATTRIBUTES[].attributeId
  dropLocation, flavorText? }
```
Weapons with a fixed stat instead of a random talent (e.g. "The White Death") use `uniqueAttributeId`; weapons with a talent use `talentId`; Pistols can have either or neither.

**`ExoticWeapon`**
```ts
{ weaponId, weaponName, baseModel, type: WeaponType,
  talentId: string,     // always has a talent
  fixedMods: ExoticMods,
  dropLocation, flavorText? }
```
Exotics always have a talent and carry fixed mods instead of random rolls.

**`TalentType` discriminated union**
`"generalWeapon" | "generalGear" | "perfectWeapon" | "perfectGear" | "exoticWeapon" | "exoticGear"`

### Skill data schema
Each skill has an array of variants. Each variant has an array of stat rows. Tier values (`t1`–`t6`) are **cumulative total bonuses at that tier level**, not per-tier increments. Omitted tiers mean no change vs the previous tier.

```ts
Skill → SkillVariant[] → SkillStatScaling[]
  { stat, base, t1?, t2?, t3?, t4?, t5?, t6?, overcharge? }
```

`restricted: true` on a variant means it requires a specific specialization equipped (shown in red in-game). The specific specialization name is not yet stored.

### Weapon mod schema
```ts
WeaponMod { modId, modName, slotType: ModSlotType, subSlot,
             bonus, penalty?, source, restriction? }
```
`ModSlotType = "optics" | "magazine" | "muzzle" | "underbarrel"`
Helper functions: `modsForSlot(type)`, `modNamesForSlot(type)`, `subSlotsForType(type)`

### Attribute data
`lib/attributeData.ts` is the **source of truth** for attribute lists. The old arrays in `lib/gameData.ts` are stubs that predate this file and have not yet been wired up.

---

## Design system
- **Dark military-tactical** aesthetic matching the in-game UI
- **Colours:** bg `#060b10`, card `#0a0f15`, accent orange `#e8671a`, gold `#e8b847`
- **Rarity colours:** High-End `#e8b847` (gold), Named `#f97316` (orange), Exotic `#a855f7` (purple)
- **Fonts:** Rajdhani (UI text), Share Tech Mono (notes/textarea)
- **CSS utilities:** `animate-fadeIn` (tab transitions), `grid-bg` (background pattern)
- Tailwind v4 uses `@tailwindcss/postcss` plugin — no `tailwind.config.js`

---

## Known stubs / pending work
- `lib/gameData.ts` — `BRANDS`, `GEAR_SETS` bonus arrays are all `"TBD"`; attribute lists predate `attributeData.ts` and need replacing
- `Talent.talentIcon` — all currently `""` placeholder; icon assets not yet available
- `SkillVariant.restricted` — records that a variant needs a specialization but doesn't name it
- Skill data: Sticky Bomb EMP `Disrupt Duration` base is `"??"` (illegible in source image)
- Drone Bombardier `Blast Radius` overcharge is `"+5 Blast Radius"` (integer, not %, from source)
- Perk breakdown panel in gear grid — currently "— coming soon —"

## Pending integrations
- Wire `attributeData.ts` flat name arrays into `gameData.ts` dropdowns
- Wire `weaponMods.ts` into WeaponCard mod pickers (replace stub `WEAPON_MODS` object)
- Replace free-text weapon name input in WeaponCard with a picker backed by `namedWeapons.ts` / `exoticWeapons.ts`
- Add high-end gear item data (named gear sourced; high-end generic items not yet added)
- Fill in `BRANDS` and `GEAR_SETS` bonus data

---

## Conventions
- Run `npx tsc --noEmit` after every change — keep it clean
- Prefer editing existing files over creating new ones
- New data files follow the pattern: interfaces → data arrays → derived `Map` helpers → exported name arrays
- All IDs are kebab-case strings (e.g. `"perfect-killer"`, `"smart-cover-precision"`)
- Do not add comments unless logic is non-obvious
- Do not add error handling for impossible states; trust TypeScript
