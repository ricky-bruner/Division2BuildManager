---
name: Data entry preferences
description: How the user prefers data to be entered — batching, stats to store, schema decisions
type: feedback
---

Store as many stats as possible per weapon entry, even derived values (DPS, sustain DPS, modded sustain DPS, total mag). User explicitly said: "storing as many stats as possible is the best approach."

**Why:** v1 uses weapons in dropdowns; v2 shows accurate live stats as the build is configured. Having derived values pre-stored avoids recalculation.

**How to apply:** When adding weapon stat entries, always include all columns from the spreadsheet verbatim — do not omit fields. Use `null` for genuinely N/A values (e.g. `totalMag: null` for Bullet King, `moddedSustainDps: null` for shotguns without mag mod slot, `moddedMagSize: null` for weapons with no magazine mod).

---

Weapon data is provided via screenshots of a spreadsheet, one weapon type at a time. Accept batches by type and enter the entire type in one edit. Run `npx tsc --noEmit` after each batch and confirm clean before moving on.

---

The `modSlots` field uses a compact string encoding:
- digit = number of mod slots
- `!` = missing muzzle slot
- `#` = missing underbarrel slot
- `$` = missing magazine slot
- `&` = missing optics slot
- `\` = has long rail (optics on a rail)
- `N/A` = exotic with fixed mods (no mod slots)
Store exactly as shown in the spreadsheet column.
