# Division 2 Build Manager - Project Memory

## Stack
- Next.js 16 (App Router) + TypeScript + Tailwind CSS v4
- No database — JSON import/export for build persistence
- Target deployment: Vercel (free tier, auto-deploys from GitHub)

## Key Files
- `lib/types.ts` — TypeScript interfaces (Build, GearItem, WeaponItem, SkillSlot, Rarity)
- `lib/gameData.ts` — All game data constants + default factory functions
- `components/BuildPlanner.tsx` — Main client component, all state lives here
- `components/GearCard.tsx` — Expandable gear slot card
- `components/WeaponCard.tsx` — Expandable weapon slot card
- `components/SkillCard.tsx` — Skill + variant selector
- `components/ui/DivSelect.tsx` — Styled select primitive
- `components/ui/DivInput.tsx` — Styled input primitive
- `components/ui/SectionHeader.tsx` — Orange accent section header
- `app/page.tsx` — Entry point, renders BuildPlanner
- `app/layout.tsx` — Root layout, loads Google Fonts (Rajdhani, Share Tech Mono)
- `app/globals.css` — Tailwind import + CSS vars + custom keyframes

## Design System
- Dark military-tactical aesthetic matching the game UI
- Color palette: bg #060b10, card #0a0f15, accent orange #e8671a, gold #e8b847
- Rarity colors: High-End #e8b847 (gold), Named #f97316 (orange), Exotic #a855f7 (purple)
- Fonts: Rajdhani (UI), Share Tech Mono (notes textarea)
- Custom CSS class `animate-fadeIn` for tab transitions
- Grid background pattern via `grid-bg` utility class

## Architecture Notes
- All build state managed in BuildPlanner with useState + useCallback
- Each card receives item + onChange prop — no shared context/store yet
- Tailwind v4 uses `@tailwindcss/postcss` plugin (not the old tailwind.config.js pattern)
- postcss.config.mjs uses `@tailwindcss/postcss` key
- Google Fonts loaded via `<link>` in layout.tsx `<head>`

## User Preferences
- Prefers concise communication, no emojis unless asked
- Wants Vercel deployment (confirmed intent, not yet set up)
- Works across multiple devices — keep memory up to date after each session

## Data Status (as of 2026-03-15)
See [project_data_status.md](project_data_status.md) — all major data files complete.
See [project_outstanding_stubs.md](project_outstanding_stubs.md) — specific missing fields (5 new-release weapon stubs, skill gaps, 29 named gear brand blanks).
See [feedback_data_entry.md](feedback_data_entry.md) — data entry conventions (stat storage, modSlots encoding, null rules).
