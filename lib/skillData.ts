// ─────────────────────────────────────────────────────────────────────────────
// Skill stat scaling — each field is the CUMULATIVE total bonus at that tier
// (not an incremental per-tier addition). Omitted tiers have no change vs
// the previous tier. "restricted" means the variant requires a specific
// specialization to be equipped.
// ─────────────────────────────────────────────────────────────────────────────

export interface SkillStatScaling {
  stat: string;
  base: string;
  t1?: string;
  t2?: string;
  t3?: string;
  t4?: string;
  t5?: string;
  t6?: string;
  overcharge?: string;
}

export interface SkillVariant {
  variantId:       string;
  variantName:     string;
  stats:           SkillStatScaling[];
  overchargeEffect?: string;   // named effect unlocked at overcharge
  expertiseGrade:  string;     // e.g. "+1% Duration" — bonus per expertise grade level
  restricted?:     boolean;    // true = requires a specialization equipped
}

export interface Skill {
  skillId:   string;
  skillName: string;
  variants:  SkillVariant[];
}

export const SKILLS: Skill[] = [
  // ── Smart Cover ────────────────────────────────────────────────────────────
  {
    skillId:   "smart-cover",
    skillName: "Smart Cover",
    variants: [
      {
        variantId:     "smart-cover-precision",
        variantName:   "Precision",
        expertiseGrade: "+1% Duration",
        stats: [
          { stat: "Radius",                         base: "6m",       t1: "+10% Radius",                    t2: "+20% Radius",                    t3: "+30% Radius",                    t4: "+40% Radius",                    t5: "+50% Radius",                    t6: "+60% Radius",                    overcharge: "+100% Radius" },
          { stat: "Cooldown",                       base: "45s" },
          { stat: "Duration",                       base: "24s" },
          { stat: "Weapon Handling",                base: "15%",      t1: "+25% Weapon Handling",           t2: "+35% Weapon Handling",           t3: "+45% Weapon Handling",           t4: "+55% Weapon Handling",           t5: "+65% Weapon Handling",           t6: "+75% Weapon Handling",           overcharge: "+100% Weapon Handling" },
          { stat: "Damage to Targets Out of Cover", base: "10%",      t1: "+7% Damage to Targets Out of Cover",  t2: "+9% Damage to Targets Out of Cover",  t3: "+12% Damage to Targets Out of Cover", t4: "+16% Damage to Targets Out of Cover", t5: "+21% Damage to Targets Out of Cover", t6: "+27% Damage to Targets Out of Cover", overcharge: "+35% Damage to Targets Out of Cover" },
          { stat: "Health",                         base: "663,623",  t1: "+70% Health",                    t2: "+140% Health",                   t3: "+210% Health",                   t4: "+280% Health",                   t5: "+350% Health",                   t6: "+420% Health",                   overcharge: "+420% Health" },
        ],
      },
      {
        variantId:     "smart-cover-fortified",
        variantName:   "Fortified",
        expertiseGrade: "+1% Bonus Armor",
        stats: [
          { stat: "Radius",               base: "6m",       t1: "+10% Radius",               t2: "+20% Radius",               t3: "+30% Radius",               t4: "+40% Radius",               t5: "+50% Radius",               t6: "+60% Radius",               overcharge: "+100% Radius" },
          { stat: "Cooldown",             base: "45s" },
          { stat: "Duration",             base: "36s" },
          { stat: "Bonus Armor",          base: "50%",      t1: "+10% Bonus Armor",          t2: "+20% Bonus Armor",          t3: "+30% Bonus Armor",          t4: "+40% Bonus Armor",          t5: "+50% Bonus Armor",          t6: "+60% Bonus Armor",          overcharge: "+100% Bonus Armor" },
          { stat: "Explosive Resistance", base: "5%",       t1: "+10% Explosive Resistance", t2: "+15% Explosive Resistance", t3: "+20% Explosive Resistance", t4: "+25% Explosive Resistance", t5: "+35% Explosive Resistance", t6: "+40% Explosive Resistance", overcharge: "+60% Explosive Resistance" },
          { stat: "Pulse Resistance",     base: "5%",       t1: "+5% Pulse Resistance",      t2: "+10% Pulse Resistance",     t3: "+15% Pulse Resistance",     t4: "+25% Pulse Resistance",     t5: "+35% Pulse Resistance",     t6: "+45% Pulse Resistance",     overcharge: "+45% Pulse Resistance" },
          { stat: "Health",               base: "663,623",  t1: "+70% Health",               t2: "+140% Health",              t3: "+210% Health",              t4: "+280% Health",              t5: "+350% Health",              t6: "+420% Health",              overcharge: "+420% Health" },
        ],
      },
    ],
  },

  // ── Sticky Bomb ────────────────────────────────────────────────────────────
  {
    skillId:   "sticky-bomb",
    skillName: "Sticky Bomb",
    variants: [
      {
        variantId:     "sticky-bomb-burn",
        variantName:   "Burn",
        expertiseGrade: "+1% Burn Damage",
        stats: [
          { stat: "Cooldown",       base: "60s",       t1: "+15% Skill Haste",    t2: "+30% Skill Haste",    t3: "+45% Skill Haste",    t4: "+60% Skill Haste",    t5: "+75% Skill Haste",    t6: "+90% Skill Haste",    overcharge: "+500% Skill Haste" },
          { stat: "Damage",         base: "995,434" },
          { stat: "Duration (Flare)", base: "10s" },
          { stat: "Burn Damage",    base: "79,794",    t1: "+10% Burn Damage",    t2: "+20% Burn Damage",    t3: "+30% Burn Damage",    t4: "+40% Burn Damage",    t5: "+50% Burn Damage",    t6: "+60% Burn Damage",    overcharge: "+100% Burn Damage" },
          { stat: "Burn Duration",  base: "4.5s",      t1: "+35% Burn Duration",  t2: "+40% Burn Duration",  t3: "+60% Burn Duration",  t4: "+80% Burn Duration",  t5: "+100% Burn Duration", t6: "+120% Burn Duration", overcharge: "+200% Burn Duration" },
          { stat: "PvP Damage",     base: "218,995" },
        ],
      },
      {
        variantId:     "sticky-bomb-emp",
        variantName:   "EMP",
        expertiseGrade: "+1% EMP Blast Radius",
        stats: [
          { stat: "Cooldown",         base: "30s" },
          { stat: "Duration (Flare)", base: "8s",   t1: "+10% Duration",        t2: "+20% Duration",        t3: "+30% Duration",        t4: "+40% Duration",        t5: "+50% Duration",        t6: "+60% Duration",        overcharge: "+100% Duration" },
          { stat: "Disrupt Duration", base: "??" },
          { stat: "EMP Blast Radius", base: "4m",   t1: "+10% EMP Blast Radius", t2: "+20% EMP Blast Radius", t3: "+30% EMP Blast Radius", t4: "+40% EMP Blast Radius", t5: "+50% EMP Blast Radius", t6: "+60% EMP Blast Radius", overcharge: "+150% EMP Blast Radius" },
        ],
      },
      {
        variantId:     "sticky-bomb-explosive",
        variantName:   "Explosive",
        expertiseGrade: "+1% Damage",
        stats: [
          { stat: "Cooldown",     base: "60s",       t1: "+15% Skill Haste",  t2: "+30% Skill Haste",  t3: "+45% Skill Haste",  t4: "+60% Skill Haste",  t5: "+75% Skill Haste",  t6: "+90% Skill Haste",  overcharge: "+500% Skill Haste" },
          { stat: "Damage",       base: "1,327,245", t1: "+10% Damage",       t2: "+20% Damage",       t3: "+30% Damage",       t4: "+40% Damage",       t5: "+50% Damage",       t6: "+60% Damage",       overcharge: "+80% Damage" },
          { stat: "Blast Radius", base: "3m",        t1: "+20% Blast Radius", t2: "+30% Blast Radius", t3: "+40% Blast Radius", t4: "+50% Blast Radius", t5: "+60% Blast Radius", t6: "+70% Blast Radius", overcharge: "+200% Blast Radius" },
          { stat: "Duration",     base: "10s" },
          { stat: "PvP Damage",   base: "291,993" },
        ],
      },
    ],
  },

  // ── Trap ───────────────────────────────────────────────────────────────────
  {
    skillId:   "trap",
    skillName: "Trap",
    variants: [
      {
        variantId:     "trap-shock",
        variantName:   "Shock",
        expertiseGrade: "+1% Shock Duration",
        stats: [
          { stat: "Cooldown",         base: "60s" },
          { stat: "Traps",            base: "6",     t1: "+2 Traps",           t2: "+2 Traps",           t3: "+4 Traps",           t4: "+6 Traps",           t5: "+8 Traps",           t6: "+10 Traps",          overcharge: "+12 Traps" },
          { stat: "Shock Radius",     base: "2.5m",  t1: "+10% Shock Radius",  t2: "+20% Shock Radius",  t3: "+30% Shock Radius",  t4: "+40% Shock Radius",  t5: "+50% Shock Radius",  t6: "+60% Shock Radius",  overcharge: "+70% Shock Radius" },
          { stat: "Shock Duration",   base: "3s",    t1: "+10% Shock Duration", t2: "+20% Shock Duration", t3: "+30% Shock Duration", t4: "+40% Shock Duration", t5: "+50% Shock Duration", t6: "+60% Shock Duration", overcharge: "+200% Shock Duration" },
          { stat: "Duration",         base: "60s" },
          { stat: "PvP Shock Effect", base: "1.5s" },
        ],
      },
      {
        variantId:       "trap-healing",
        variantName:     "Healing",
        expertiseGrade:  "+1% Repair",
        overchargeEffect: "Immunizing Serum: Traps also provide status effect immunity for 10s",
        stats: [
          { stat: "Cooldown",      base: "40s" },
          { stat: "Repair",        base: "165,906", t1: "+20% Repair",  t2: "+40% Repair",  t3: "+60% Repair",  t4: "+80% Repair",  t5: "+100% Repair", t6: "+120% Repair", overcharge: "+140% Repair" },
          { stat: "Traps",         base: "2",       t1: "+1 Traps",     t2: "+2 Traps",     t3: "+3 Traps",     t4: "+4 Traps",     t5: "+5 Traps",     t6: "+6 Traps",     overcharge: "+6 Traps" },
          { stat: "Repair Radius", base: "0.75m" },
          { stat: "Duration",      base: "60s" },
          { stat: "PvP Repair",    base: "82,952" },
        ],
      },
      {
        variantId:     "trap-shrapnel",
        variantName:   "Shrapnel",
        expertiseGrade: "+1% Damage",
        stats: [
          { stat: "Cooldown",         base: "60s" },
          { stat: "Damage",           base: "663,623", t1: "+10% Damage", t2: "+20% Damage", t3: "+30% Damage", t4: "+40% Damage", t5: "+50% Damage", t6: "+60% Damage", overcharge: "+100% Damage" },
          { stat: "Traps",            base: "9",       t1: "+1 Traps",    t2: "+2 Traps",    t3: "+3 Traps",    t4: "+4 Traps",    t5: "+5 Traps",    t6: "+6 Traps",    overcharge: "+6 Traps" },
          { stat: "Explosion Radius", base: "2m" },
          { stat: "Duration",         base: "60s" },
          { stat: "PvP Damage",       base: "6,636" },
        ],
      },
    ],
  },

  // ── Decoy ──────────────────────────────────────────────────────────────────
  {
    skillId:   "decoy",
    skillName: "Decoy",
    variants: [
      {
        variantId:     "decoy-holographic",
        variantName:   "Holographic Distraction",
        expertiseGrade: "+1% Threat",
        stats: [
          { stat: "Cooldown", base: "25s",                                                                                                                                                                     overcharge: "+200% Skill Haste" },
          { stat: "Duration", base: "15s",    t1: "+15% Duration", t2: "+30% Duration", t3: "+45% Duration", t4: "+60% Duration", t5: "+75% Duration", t6: "+90% Duration",  overcharge: "+90% Duration" },
          { stat: "Health",   base: "929,072", t1: "+50% Health",  t2: "+100% Health",  t3: "+150% Health",  t4: "+200% Health",  t5: "+250% Health",  t6: "+300% Health",   overcharge: "+600% Health" },
          { stat: "Threat",   base: "100%",   t1: "+15% Threat",   t2: "+30% Threat",   t3: "+45% Threat",   t4: "+60% Threat",   t5: "+75% Threat",   t6: "+90% Threat",   overcharge: "+250% Threat" },
        ],
      },
    ],
  },

  // ── Pulse ──────────────────────────────────────────────────────────────────
  {
    skillId:   "pulse",
    skillName: "Pulse",
    variants: [
      {
        variantId:       "pulse-scanner",
        variantName:     "Scanner",
        expertiseGrade:  "+1% Duration",
        overchargeEffect: "Weakness Exploit: You and your allies' damage is amplified by 15% to pulsed targets",
        stats: [
          { stat: "Cooldown",          base: "20s" },
          { stat: "Duration",          base: "8s",    t1: "+15% Effect Duration", t2: "+30% Effect Duration", t3: "+45% Effect Duration", t4: "+60% Effect Duration", t5: "+75% Effect Duration", t6: "+90% Effect Duration", overcharge: "+200% Effect Duration" },
          { stat: "Effect Radius",     base: "100m" },
          { stat: "Conflict Cooldown", base: "120s" },
        ],
      },
      {
        variantId:       "pulse-remote",
        variantName:     "Remote",
        expertiseGrade:  "+1% Radius",
        overchargeEffect: "Weakness Exploit: You and your allies' damage is amplified by 15% to pulsed targets",
        stats: [
          { stat: "Cooldown",      base: "20s" },
          { stat: "Duration",      base: "45s",  t1: "+15% Duration", t2: "+30% Duration", t3: "+45% Duration", t4: "+60% Duration", t5: "+75% Duration", t6: "+90% Duration",  overcharge: "+120% Duration" },
          { stat: "Effect Radius", base: "15m",  t1: "+15% Radius",   t2: "+30% Radius",   t3: "+45% Radius",   t4: "+60% Radius",   t5: "+75% Radius",   t6: "+90% Radius",   overcharge: "+120% Radius" },
        ],
      },
      {
        variantId:     "pulse-jammer",
        variantName:   "Jammer (EMP)",
        expertiseGrade: "+1% Radius",
        stats: [
          { stat: "Cooldown",            base: "30s" },
          { stat: "EMP Effect Duration", base: "3s",   t1: "+10% Effect Duration", t2: "+20% Effect Duration", t3: "+30% Effect Duration", t4: "+40% Effect Duration", t5: "+50% Effect Duration", t6: "+60% Effect Duration", overcharge: "+100% Effect Duration" },
          { stat: "Radius",              base: "20m",  t1: "+10% Radius",          t2: "+20% Radius",          t3: "+30% Radius",          t4: "+40% Radius",          t5: "+50% Radius",          t6: "+60% Radius",          overcharge: "+150% Radius" },
          { stat: "Charging Time",       base: "2s" },
        ],
      },
      {
        variantId:     "pulse-achilles",
        variantName:   "Achilles",
        expertiseGrade: "+1% Damage",
        stats: [
          { stat: "Number of Zones", base: "1",       t3: "+1 Zone",          t4: "+1 Zone",          t6: "+2 Zones",         overcharge: "+5 Zones" },
          { stat: "Zone Health",     base: "398,174", t1: "+10% Zone Health", t2: "+20% Zone Health", t3: "+30% Zone Health", t4: "+40% Zone Health", t5: "+50% Zone Health", t6: "+60% Zone Health", overcharge: "+100% Zone Health" },
          { stat: "Zone Duration",   base: "10s",     t1: "+10% Duration",    t2: "+20% Duration",    t3: "+30% Duration",    t4: "+40% Duration",    t5: "+50% Duration",    t6: "+60% Duration",    overcharge: "+100% Duration" },
          { stat: "Cooldown",        base: "40s",     t1: "+10% Skill Haste", t2: "+20% Skill Haste", t3: "+30% Skill Haste", t4: "+40% Skill Haste", t5: "+50% Skill Haste", t6: "+60% Skill Haste", overcharge: "+100% Skill Haste" },
        ],
      },
      {
        variantId:       "pulse-banshee",
        variantName:     "Banshee",
        expertiseGrade:  "+1% Disorient Duration",
        overchargeEffect: "Weakness Exploit: You and your allies' damage is amplified by 15% to Disorient targets",
        restricted:      true,
        stats: [
          { stat: "Cooldown",           base: "30s",                                                                                                                                                                                                                                  overcharge: "+100% Charge Speed" },
          { stat: "Duration",           base: "10s" },
          { stat: "Disorient Duration", base: "4s",  t1: "+10% Disorient Duration", t2: "+20% Disorient Duration", t3: "+30% Disorient Duration", t4: "+40% Disorient Duration", t5: "+50% Disorient Duration", t6: "+60% Disorient Duration", overcharge: "+100% Disorient Duration" },
          { stat: "Radius",             base: "30m" },
          { stat: "Cone Angle",         base: "20" },
        ],
      },
    ],
  },

  // ── Chem Launcher ──────────────────────────────────────────────────────────
  {
    skillId:   "chem-launcher",
    skillName: "Chem Launcher",
    variants: [
      {
        variantId:     "chem-launcher-reinforcer",
        variantName:   "Reinforcer",
        expertiseGrade: "+1% Duration",
        stats: [
          { stat: "Ammo",                base: "2",       t1: "+1 Ammo",          t2: "+2 Ammo",          t3: "+3 Ammo",          t4: "+4 Ammo",          t5: "+5 Ammo",          t6: "+6 Ammo",          overcharge: "+6 Ammo" },
          { stat: "Ammo Cooldown",       base: "30s" },
          { stat: "Cloud Radius",        base: "3m",      t1: "+10% Radius",      t2: "+20% Radius",      t3: "+30% Radius",      t4: "+40% Radius",      t5: "+50% Radius",      t6: "+60% Radius",      overcharge: "+150% Radius" },
          { stat: "Cloud Duration",      base: "5s" },
          { stat: "Ally Repair",         base: "199,087" },
          { stat: "Repair Over Time",    base: "39,817",  t1: "+20% Heal",        t2: "+40% Heal",        t3: "+60% Heal",        t4: "+80% Heal",        t5: "+100% Heal",       t6: "+120% Heal",       overcharge: "+140% Heal" },
          { stat: "PvP Ally Repair",     base: "99,543" },
          { stat: "PvP Repair Over Time",base: "19,908" },
        ],
      },
      {
        variantId:     "chem-launcher-firestarter",
        variantName:   "Firestarter",
        expertiseGrade: "+1% Damage",
        stats: [
          { stat: "Ammo",           base: "1",       t1: "+1 Ammo",          t2: "+2 Ammo",          t3: "+3 Ammo",          t4: "+4 Ammo",          t5: "+5 Ammo",          t6: "+6 Ammo",          overcharge: "+6 Ammo" },
          { stat: "Ammo Cooldown",  base: "30s" },
          { stat: "Cloud Radius",   base: "3m",      t1: "+5% Radius",       t2: "+10% Radius",      t3: "+15% Radius",      t4: "+20% Radius",      t5: "+25% Radius",      t6: "+30% Radius",      overcharge: "+135% Radius" },
          { stat: "Cloud Duration", base: "20s" },
          { stat: "Damage",         base: "265,449" },
          { stat: "Burn Damage",    base: "79,635",  t1: "+10% Burn Damage", t2: "+20% Burn Damage", t3: "+30% Burn Damage", t4: "+40% Burn Damage", t5: "+50% Burn Damage", t6: "+60% Burn Damage", overcharge: "+60% Burn Damage" },
          { stat: "Burn Duration",  base: "4s",      t1: "+10% Burn Duration", t2: "+20% Burn Duration", t3: "+30% Burn Duration", t4: "+40% Burn Duration", t5: "+50% Burn Duration", t6: "+60% Burn Duration", overcharge: "+100% Burn Duration" },
          { stat: "PvP Damage",     base: "106,179" },
          { stat: "PvP Burn Damage",base: "12,741" },
        ],
      },
      {
        variantId:     "chem-launcher-riot-foam",
        variantName:   "Riot Foam",
        expertiseGrade: "+1% Ensnare Health",
        stats: [
          { stat: "Ammo",               base: "1",       t1: "+1 Ammo",               t2: "+2 Ammo",               t3: "+3 Ammo",               t4: "+4 Ammo",               t5: "+5 Ammo",               t6: "+6 Ammo",               overcharge: "+6 Ammo" },
          { stat: "Ammo Cooldown",      base: "30s" },
          { stat: "Cloud Radius",       base: "3m",      t1: "+5% Radius",            t2: "+10% Radius",           t3: "+15% Radius",           t4: "+20% Radius",           t5: "+25% Radius",           t6: "+30% Radius",           overcharge: "+135% Radius" },
          { stat: "Ensnare Duration",   base: "6s",      t1: "+10% Ensnare Duration", t2: "+20% Ensnare Duration", t3: "+30% Ensnare Duration", t4: "+40% Ensnare Duration", t5: "+50% Ensnare Duration", t6: "+60% Ensnare Duration", overcharge: "+100% Ensnare Duration" },
          { stat: "Foam Health",        base: "452,470", t1: "+50% Ensnare Health",   t2: "+100% Ensnare Health",  t3: "+150% Ensnare Health",  t4: "+200% Ensnare Health",  t5: "+250% Ensnare Health",  t6: "+300% Ensnare Health",  overcharge: "+500% Ensnare Health" },
          { stat: "PvP Ensnare Duration",base: "2s" },
        ],
      },
      {
        variantId:     "chem-launcher-oxidizer",
        variantName:   "Oxidizer",
        expertiseGrade: "+1% Damage",
        stats: [
          { stat: "Ammo",           base: "1",       t1: "+1 Ammo",      t2: "+2 Ammo",      t3: "+3 Ammo",      t4: "+4 Ammo",      t5: "+5 Ammo",      t6: "+6 Ammo",      overcharge: "+6 Ammo" },
          { stat: "Ammo Cooldown",  base: "25s" },
          { stat: "Cloud Radius",   base: "3.5m",    t1: "+2% Radius",   t2: "+4% Radius",   t3: "+6% Radius",   t4: "+8% Radius",   t5: "+10% Radius",  t6: "+12% Radius",  overcharge: "+100% Radius" },
          { stat: "Cloud Duration", base: "5s",      t1: "+20% Duration", t2: "+40% Duration", t3: "+60% Duration", t4: "+80% Duration", t5: "+100% Duration", t6: "+120% Duration", overcharge: "+150% Duration" },
          { stat: "Cloud Damage",   base: "53,090",  t1: "+10% Damage",  t2: "+20% Damage",  t3: "+30% Damage",  t4: "+40% Damage",  t5: "+50% Damage",  t6: "+60% Damage",  overcharge: "+80% Damage" },
          { stat: "PvP Damage",     base: "18,581" },
        ],
      },
    ],
  },

  // ── Firefly ────────────────────────────────────────────────────────────────
  {
    skillId:   "firefly",
    skillName: "Firefly",
    variants: [
      {
        variantId:     "firefly-blinder",
        variantName:   "Blinder",
        expertiseGrade: "+1% Blind Effect Duration",
        restricted:    true,
        stats: [
          { stat: "Cooldown",          base: "50s" },
          { stat: "Max Targets",       base: "3",    t1: "+1 Max Targets",         t2: "+2 Max Targets",         t3: "+3 Max Targets",         t4: "+4 Max Targets",         t5: "+5 Max Targets",         t6: "+6 Max Targets",         overcharge: "+10 Max Targets" },
          { stat: "Health",            base: "663,623" },
          { stat: "Speed",             base: "1",    t1: "+35% Speed",             t2: "+70% Speed",             t3: "+105% Speed",            t4: "+140% Speed",            t5: "+175% Speed",            t6: "+210% Speed",            overcharge: "+250% Speed" },
          { stat: "Blind Duration",    base: "5s",   t1: "+10% Blind Effect Duration", t2: "+20% Blind Effect Duration", t3: "+30% Blind Effect Duration", t4: "+40% Blind Effect Duration", t5: "+50% Blind Effect Duration", t6: "+60% Blind Effect Duration", overcharge: "+100% Blind Effect Duration" },
          { stat: "PvP Blind Duration",base: "2s" },
        ],
      },
      {
        variantId:     "firefly-burster",
        variantName:   "Burster",
        expertiseGrade: "+1% Damage",
        stats: [
          { stat: "Cooldown",    base: "30s" },
          { stat: "Max Targets", base: "3",         t1: "+1 Max Targets", t2: "+2 Max Targets", t3: "+3 Max Targets", t4: "+4 Max Targets", t5: "+5 Max Targets", t6: "+6 Max Targets", overcharge: "+10 Max Targets" },
          { stat: "Health",      base: "663,623" },
          { stat: "Speed",       base: "1",         t1: "+35% Speed",     t2: "+70% Speed",     t3: "+105% Speed",    t4: "+140% Speed",    t5: "+175% Speed",    t6: "+210% Speed",    overcharge: "+250% Speed" },
          { stat: "Damage",      base: "663,623",   t1: "+15% Damage",    t2: "+30% Damage",    t3: "+45% Damage",    t4: "+60% Damage",    t5: "+75% Damage",    t6: "+90% Damage",    overcharge: "+137.5% Damage" },
        ],
      },
      {
        variantId:     "firefly-demolisher",
        variantName:   "Demolisher",
        expertiseGrade: "+1% Damage",
        restricted:    true,
        stats: [
          { stat: "Cooldown",    base: "50s" },
          { stat: "Max Targets", base: "3",           t1: "+1 Max Targets", t2: "+2 Max Targets", t3: "+3 Max Targets", t4: "+4 Max Targets", t5: "+5 Max Targets", t6: "+6 Max Targets", overcharge: "+10 Max Targets" },
          { stat: "Health",      base: "663,623" },
          { stat: "Speed",       base: "1",           t1: "+35% Speed",     t2: "+70% Speed",     t3: "+105% Speed",    t4: "+140% Speed",    t5: "+175% Speed",    t6: "+210% Speed",    overcharge: "+250% Speed" },
          { stat: "Damage",      base: "1,659,056",   t1: "+35% Damage",    t2: "+70% Damage",    t3: "+105% Damage",   t4: "+140% Damage",   t5: "+175% Damage",   t6: "+210% Damage",   overcharge: "+300% Damage" },
          { stat: "PvP Damage",  base: "3,318,112" },
        ],
      },
    ],
  },

  // ── Seeker ─────────────────────────────────────────────────────────────────
  {
    skillId:   "seeker",
    skillName: "Seeker",
    variants: [
      {
        variantId:     "seeker-explosive",
        variantName:   "Explosive",
        expertiseGrade: "+1% Damage",
        stats: [
          { stat: "Cooldown",       base: "35s" },
          { stat: "Health",         base: "199,087" },
          { stat: "Damage",         base: "1,061,796", t1: "+10% Damage",       t2: "+20% Damage",       t3: "+30% Damage",       t4: "+40% Damage",       t5: "+50% Damage",       t6: "+60% Damage",       overcharge: "+80% Damage" },
          { stat: "Blast Radius",   base: "4m",        t1: "+5% Radius",        t2: "+10% Radius",       t3: "+15% Radius",       t4: "+20% Radius",       t5: "+25% Radius",       t6: "+30% Radius",       overcharge: "+200% Radius" },
          { stat: "Bleed Damage",   base: "29,863" },
          { stat: "Bleed Duration", base: "7s" },
          { stat: "PvP Damage",     base: "191,123" },
          { stat: "PvP Bleed Damage",base: "7,465" },
        ],
      },
      {
        variantId:     "seeker-airburst",
        variantName:   "Airburst",
        expertiseGrade: "+1% Damage",
        stats: [
          { stat: "Cooldown",        base: "30s" },
          { stat: "Health",          base: "199,087" },
          { stat: "Damage",          base: "331,811",  t1: "+10% Damage",       t2: "+20% Damage",       t3: "+30% Damage",       t4: "+40% Damage",       t5: "+50% Damage",       t6: "+60% Damage",       overcharge: "+60% Damage" },
          { stat: "Burn Damage",     base: "79,635",   t1: "+10% Burn Damage",  t2: "+20% Burn Damage",  t3: "+30% Burn Damage",  t4: "+40% Burn Damage",  t5: "+50% Burn Damage",  t6: "+60% Burn Damage",  overcharge: "+60% Burn Damage" },
          { stat: "Burn Duration",   base: "4s",       t1: "+50% Burn Duration", t2: "+100% Burn Duration", t3: "+150% Burn Duration", t4: "+200% Burn Duration", t5: "+250% Burn Duration", t6: "+300% Burn Duration", overcharge: "+400% Burn Duration" },
          { stat: "PvP Damage",      base: "132,724" },
          { stat: "PvP Burn Damage", base: "11,945" },
          { stat: "Radius",          base: "6m" },
        ],
      },
      {
        variantId:     "seeker-cluster",
        variantName:   "Cluster",
        expertiseGrade: "+1% Damage",
        stats: [
          { stat: "Cooldown",        base: "50s" },
          { stat: "Health",          base: "199,087" },
          { stat: "Damage",          base: "729,985",  t1: "+10% Damage",        t2: "+20% Damage",        t3: "+30% Damage",        t4: "+40% Damage",        t5: "+50% Damage",        t6: "+60% Damage",        overcharge: "+80% Damage" },
          { stat: "Number of Mines", base: "3",        t1: "+1 Cluster Mines",   t2: "+2 Cluster Mines",   t3: "+3 Cluster Mines",   t4: "+4 Cluster Mines",   t5: "+5 Cluster Mines",   t6: "+6 Cluster Mines",   overcharge: "+8 Cluster Mines" },
          { stat: "Blast Radius",    base: "2m" },
          { stat: "PvP Damage",      base: "131,397" },
        ],
      },
      {
        variantId:     "seeker-mender",
        variantName:   "Mender",
        expertiseGrade: "+1% Healing",
        restricted:    true,
        stats: [
          { stat: "Cooldown",      base: "25s" },
          { stat: "Duration",      base: "180s" },
          { stat: "Healing",       base: "17,918 HP/s", t1: "+20% Healing",  t2: "+40% Healing",  t3: "+60% Healing",  t4: "+80% Healing",  t5: "+100% Healing", t6: "+120% Healing", overcharge: "+160% Healing" },
          { stat: "Radius",        base: "3m",          t1: "+5% Radius",    t2: "+10% Radius",   t3: "+15% Radius",   t4: "+20% Radius",   t5: "+25% Radius",   t6: "+30% Radius",   overcharge: "+150% Radius" },
          { stat: "Cloud Duration",base: "8s" },
          { stat: "Health",        base: "199,087" },
          { stat: "PvP Healing",   base: "8,958" },
        ],
      },
    ],
  },

  // ── Turret ─────────────────────────────────────────────────────────────────
  {
    skillId:   "turret",
    skillName: "Turret",
    variants: [
      {
        variantId:     "turret-assault",
        variantName:   "Assault",
        expertiseGrade: "+1% Damage",
        stats: [
          { stat: "Cooldown",   base: "25s" },
          { stat: "Duration",   base: "180s" },
          { stat: "Health",     base: "1,061,796", t1: "+70% Health",  t2: "+140% Health",  t3: "+210% Health",  t4: "+280% Health",  t5: "+350% Health",  t6: "+420% Health",  overcharge: "+560% Health" },
          { stat: "Damage",     base: "26,545",    t1: "+20% Damage",  t2: "+40% Damage",   t3: "+60% Damage",   t4: "+80% Damage",   t5: "+100% Damage",  t6: "+120% Damage",  overcharge: "+175% Damage" },
          { stat: "PvP Damage", base: "6,636" },
        ],
      },
      {
        variantId:     "turret-incinerator",
        variantName:   "Incinerator",
        expertiseGrade: "+1% Damage",
        stats: [
          { stat: "Cooldown",       base: "60s" },
          { stat: "Duration",       base: "15s",       t1: "+10% Duration",      t2: "+20% Duration",      t3: "+30% Duration",      t4: "+40% Duration",      t5: "+50% Duration",      t6: "+60% Duration",      overcharge: "+100% Duration" },
          { stat: "Health",         base: "1,061,796", t1: "+70% Health",        t2: "+140% Health",       t3: "+210% Health",       t4: "+280% Health",       t5: "+350% Health",       t6: "+420% Health",       overcharge: "+560% Health" },
          { stat: "Damage",         base: "13,272",    t1: "+10% Damage",        t2: "+20% Damage",        t3: "+30% Damage",        t4: "+40% Damage",        t5: "+50% Damage",        t6: "+60% Damage",        overcharge: "+60% Damage" },
          { stat: "Range",          base: "15m" },
          { stat: "Burn Damage",    base: "53,090",    t1: "+10% Burn Strength", t2: "+20% Burn Strength", t3: "+30% Burn Strength", t4: "+40% Burn Strength", t5: "+50% Burn Strength", t6: "+60% Burn Strength", overcharge: "+60% Burn Strength" },
          { stat: "PvP Damage",     base: "10,617" },
          { stat: "PvP Burn Damage",base: "8,494" },
          { stat: "Cone Angle",     base: "—",         t1: "+5% Cone Angle",     t2: "+10% Cone Angle",    t3: "+15% Cone Angle",    t4: "+20% Cone Angle",    t5: "+25% Cone Angle",    t6: "+30% Cone Angle",    overcharge: "+200% Cone Angle" },
        ],
      },
      {
        variantId:     "turret-sniper",
        variantName:   "Sniper",
        expertiseGrade: "+1% Damage",
        stats: [
          { stat: "Cooldown",     base: "20s" },
          { stat: "Duration",     base: "300s" },
          { stat: "Health",       base: "1,061,796",  t1: "+70% Health",           t2: "+140% Health",          t3: "+210% Health",          t4: "+280% Health",          t5: "+350% Health",          t6: "+420% Health",          overcharge: "+560% Health" },
          { stat: "Damage",       base: "729,985",    t1: "+15% Damage",           t2: "+30% Damage",           t3: "+45% Damage",           t4: "+60% Damage",           t5: "+75% Damage",           t6: "+90% Damage",           overcharge: "+90% Damage" },
          { stat: "Ammo",         base: "3",          t1: "+2 Extra Sniper Ammo",  t2: "+4 Extra Sniper Ammo",  t3: "+6 Extra Sniper Ammo",  t4: "+8 Extra Sniper Ammo",  t5: "+10 Extra Sniper Ammo", t6: "+12 Extra Sniper Ammo", overcharge: "+15 Extra Sniper Ammo" },
          { stat: "PvP Damage",   base: "233,595" },
          { stat: "Rate of Fire", base: "—",                                                                                                                                                                                                                   overcharge: "+100% Rate of Fire" },
        ],
      },
      {
        variantId:     "turret-artillery",
        variantName:   "Artillery",
        expertiseGrade: "+1% Damage",
        stats: [
          { stat: "Cooldown",         base: "20s" },
          { stat: "Duration",         base: "300s" },
          { stat: "Health",           base: "1,061,796",  t1: "+70% Health",            t2: "+140% Health",           t3: "+210% Health",           t4: "+280% Health",           t5: "+350% Health",           t6: "+420% Health",           overcharge: "+560% Health" },
          { stat: "Damage",           base: "729,985",    t1: "+15% Damage",            t2: "+30% Damage",            t3: "+45% Damage",            t4: "+60% Damage",            t5: "+75% Damage",            t6: "+90% Damage",            overcharge: "+137.5% Damage" },
          { stat: "Ammo",             base: "3",          t1: "+1 Extra Mortar Ammo",   t2: "+2 Extra Mortar Ammo",   t3: "+3 Extra Mortar Ammo",   t4: "+4 Extra Mortar Ammo",   t5: "+5 Extra Mortar Ammo",   t6: "+6 Extra Mortar Ammo",   overcharge: "+10 Extra Mortar Ammo" },
          { stat: "Blast Radius",     base: "4.5m",       t1: "+8% Mortar Blast Radius", t2: "+16% Mortar Blast Radius", t3: "+24% Mortar Blast Radius", t4: "+32% Mortar Blast Radius", t5: "+40% Mortar Blast Radius", t6: "+50% Mortar Blast Radius", overcharge: "+75% Mortar Blast Radius" },
          { stat: "Bleed Damage",     base: "29,863" },
          { stat: "Bleed Duration",   base: "7s" },
          { stat: "PvP Damage",       base: "182,496" },
          { stat: "PvP Bleed Damage", base: "7,465" },
        ],
      },
    ],
  },

  // ── Hive ───────────────────────────────────────────────────────────────────
  {
    skillId:   "hive",
    skillName: "Hive",
    variants: [
      {
        variantId:     "hive-restorer",
        variantName:   "Restorer",
        expertiseGrade: "+1% Duration",
        stats: [
          { stat: "Refill Speed", base: "11s",                                                                                                                                                                                     overcharge: "+150% Skill Haste" },
          { stat: "Charges",      base: "8",       t1: "+4 Repair Charges",  t2: "+8 Repair Charges",  t3: "+12 Repair Charges", t4: "+16 Repair Charges", t5: "+20 Repair Charges", t6: "+24 Repair Charges", overcharge: "+24 Repair Charges" },
          { stat: "Range",        base: "8m",      t1: "+10% Range",         t2: "+20% Range",         t3: "+30% Range",         t4: "+40% Range",         t5: "+50% Range",         t6: "+60% Range",         overcharge: "+200% Range" },
          { stat: "Duration",     base: "180s" },
          { stat: "Health",       base: "796,347", t1: "+70% Health",        t2: "+140% Health",       t3: "+210% Health",       t4: "+280% Health",       t5: "+350% Health",       t6: "+420% Health",       overcharge: "+420% Health" },
          { stat: "Healing",      base: "59,726",  t1: "+20% Healing",       t2: "+40% Healing",       t3: "+60% Healing",       t4: "+80% Healing",       t5: "+100% Healing",      t6: "+120% Healing",      overcharge: "+140% Healing" },
          { stat: "PvP Healing",  base: "36,432" },
          { stat: "Drone Speed",  base: "—",       t1: "+10% Drone Speed",   t2: "+20% Drone Speed",   t3: "+30% Drone Speed",   t4: "+40% Drone Speed",   t5: "+50% Drone Speed",   t6: "+60% Drone Speed",   overcharge: "+80% Drone Speed" },
        ],
      },
      {
        variantId:     "hive-stinger",
        variantName:   "Stinger",
        expertiseGrade: "+1% Damage",
        stats: [
          { stat: "Refill Speed",    base: "10s",                                                                                                                                                                                        overcharge: "+300% Skill Haste" },
          { stat: "Charges",         base: "8",       t1: "+1 Stinger Charges", t2: "+2 Stinger Charges", t3: "+3 Stinger Charges", t4: "+4 Stinger Charges", t5: "+5 Stinger Charges", t6: "+6 Stinger Charges", overcharge: "+6 Stinger Charges" },
          { stat: "Range",           base: "8m",      t1: "+5% Range",          t2: "+10% Range",         t3: "+15% Range",         t4: "+20% Range",         t5: "+25% Range",         t6: "+30% Range",         overcharge: "+100% Range" },
          { stat: "Duration",        base: "180s" },
          { stat: "Health",          base: "796,347", t1: "+70% Health",        t2: "+140% Health",       t3: "+210% Health",       t4: "+280% Health",       t5: "+350% Health",       t6: "+420% Health",       overcharge: "+420% Health" },
          { stat: "Damage",          base: "265,449", t1: "+20% Damage",        t2: "+40% Damage",        t3: "+60% Damage",        t4: "+80% Damage",        t5: "+100% Damage",       t6: "+120% Damage",       overcharge: "+200% Damage" },
          { stat: "Bleed Damage",    base: "29,863" },
          { stat: "Bleed Duration",  base: "7s" },
          { stat: "PvP Damage",      base: "63,707" },
          { stat: "PvP Bleed Damage",base: "7,485" },
          { stat: "Drone Speed",     base: "—",       t1: "+5% Drone Speed",    t2: "+10% Drone Speed",   t3: "+15% Drone Speed",   t4: "+20% Drone Speed",   t5: "+25% Drone Speed",   t6: "+30% Drone Speed",   overcharge: "+80% Drone Speed" },
        ],
      },
      {
        variantId:     "hive-reviver",
        variantName:   "Reviver",
        expertiseGrade: "+1% Range",
        stats: [
          { stat: "Refill Speed",  base: "180s",                                                                                                                                                                                    overcharge: "+1000% Skill Haste" },
          { stat: "Charges",       base: "1",       t1: "+1 Charges",          t2: "+2 Charges",          t3: "+3 Charges",          t4: "+4 Charges",          t5: "+5 Charges",          t6: "+6 Charges",          overcharge: "+6 Charges" },
          { stat: "Range",         base: "8m",      t1: "+5% Range",           t2: "+10% Range",          t3: "+15% Range",          t4: "+20% Range",          t5: "+25% Range",          t6: "+30% Range",          overcharge: "+100% Range" },
          { stat: "Duration",      base: "180s" },
          { stat: "Health",        base: "796,347", t1: "+70% Health",         t2: "+140% Health",        t3: "+210% Health",        t4: "+280% Health",        t5: "+350% Health",        t6: "+420% Health",        overcharge: "+420% Health" },
          { stat: "Revive Armor",  base: "25%",     t1: "+10% Reviver Armor Repair", t2: "+20% Reviver Armor Repair", t3: "+30% Reviver Armor Repair", t4: "+40% Reviver Armor Repair", t5: "+50% Reviver Armor Repair", t6: "+60% Reviver Armor Repair", overcharge: "+75% Reviver Armor Repair" },
          { stat: "Drone Speed",   base: "—",       t1: "+5% Drone Speed",     t2: "+10% Drone Speed",    t3: "+15% Drone Speed",    t4: "+20% Drone Speed",    t5: "+25% Drone Speed",    t6: "+30% Drone Speed",    overcharge: "+80% Drone Speed" },
        ],
      },
      {
        variantId:     "hive-booster",
        variantName:   "Booster",
        expertiseGrade: "+1% Stim Efficiency",
        stats: [
          { stat: "Refill Speed",  base: "11.3s",                                                                                                                                                                                       overcharge: "+150% Skill Haste" },
          { stat: "Charges",       base: "8",       t1: "+4 Stim Charges",    t2: "+8 Stim Charges",    t3: "+12 Stim Charges",   t4: "+16 Stim Charges",   t5: "+20 Stim Charges",   t6: "+24 Stim Charges",   overcharge: "+24 Stim Charges" },
          { stat: "Range",         base: "8m",      t1: "+5% Range",          t2: "+10% Range",         t3: "+15% Range",         t4: "+20% Range",         t5: "+25% Range",         t6: "+30% Range",         overcharge: "+100% Range" },
          { stat: "Duration",      base: "180s" },
          { stat: "Health",        base: "796,347", t1: "+70% Health",        t2: "+140% Health",       t3: "+210% Health",       t4: "+280% Health",       t5: "+350% Health",       t6: "+420% Health",       overcharge: "+420% Health" },
          { stat: "Buff Amount",   base: "20%",     t1: "+33% Stim Efficiency", t2: "+66% Stim Efficiency", t3: "+100% Stim Efficiency", t4: "+133% Stim Efficiency", t5: "+166% Stim Efficiency", t6: "+200% Stim Efficiency", overcharge: "+400% Stim Efficiency" },
          { stat: "Buff Duration", base: "5s",      t1: "+20% Buff Duration", t2: "+30% Buff Duration", t3: "+40% Buff Duration", t4: "+60% Buff Duration", t5: "+80% Buff Duration", t6: "+110% Buff Duration", overcharge: "+200% Buff Duration" },
          { stat: "Drone Speed",   base: "—",       t1: "+5% Drone Speed",    t2: "+10% Drone Speed",   t3: "+15% Drone Speed",   t4: "+20% Drone Speed",   t5: "+25% Drone Speed",   t6: "+30% Drone Speed",   overcharge: "+80% Drone Speed" },
        ],
      },
      {
        variantId:     "hive-artificer",
        variantName:   "Artificer",
        expertiseGrade: "+1% Tech Efficiency",
        restricted:    true,
        stats: [
          { stat: "Refill Speed",  base: "11.3s",                                                                                                                                                                                         overcharge: "+150% Skill Haste" },
          { stat: "Charges",       base: "8",       t1: "+4 Charges",               t2: "+8 Charges",               t3: "+12 Charges",              t4: "+16 Charges",              t5: "+20 Charges",              t6: "+24 Charges",              overcharge: "+24 Charges" },
          { stat: "Range",         base: "8m",      t1: "+10% Range",               t2: "+20% Range",               t3: "+30% Range",               t4: "+40% Range",               t5: "+50% Range",               t6: "+60% Range",               overcharge: "+200% Range" },
          { stat: "Duration",      base: "180s" },
          { stat: "Health",        base: "796,347", t1: "+70% Health",              t2: "+140% Health",             t3: "+210% Health",             t4: "+280% Health",             t5: "+350% Health",             t6: "+420% Health",             overcharge: "+420% Health" },
          { stat: "Buff Amount",   base: "10%",     t1: "+100% Charge Efficiency",  t2: "+200% Charge Efficiency",  t3: "+300% Charge Efficiency",  t4: "+400% Charge Efficiency",  t5: "+500% Charge Efficiency",  t6: "+600% Charge Efficiency",  overcharge: "+700% Charge Efficiency" },
          { stat: "Buff Duration", base: "10s" },
          { stat: "Skill Repair",  base: "10%" },
          { stat: "Skill Refresh", base: "3s",      t1: "+2s Skill Refresh",        t2: "+4s Skill Refresh",        t3: "+6s Skill Refresh",        t4: "+8s Skill Refresh",        t5: "+10s Skill Refresh",       t6: "+12s Skill Refresh",       overcharge: "+22s Skill Refresh" },
          { stat: "Drone Speed",   base: "—",       t1: "+10% Drone Speed",         t2: "+20% Drone Speed",         t3: "+30% Drone Speed",         t4: "+40% Drone Speed",         t5: "+50% Drone Speed",         t6: "+60% Drone Speed",         overcharge: "+80% Drone Speed" },
        ],
      },
    ],
  },

  // ── Drone ──────────────────────────────────────────────────────────────────
  {
    skillId:   "drone",
    skillName: "Drone",
    variants: [
      {
        variantId:     "drone-striker",
        variantName:   "Striker",
        expertiseGrade: "+1% Striker Damage",
        stats: [
          { stat: "Cooldown",   base: "25s" },
          { stat: "Health",     base: "530,898",  t1: "+70% Health",          t2: "+140% Health",         t3: "+210% Health",         t4: "+280% Health",         t5: "+350% Health",         t6: "+420% Health",         overcharge: "+420% Health" },
          { stat: "Duration",   base: "180s" },
          { stat: "Damage",     base: "16,591",   t1: "+20% Striker Damage",  t2: "+40% Striker Damage",  t3: "+60% Striker Damage",  t4: "+80% Striker Damage",  t5: "+100% Striker Damage", t6: "+120% Striker Damage", overcharge: "+175% Striker Damage" },
          { stat: "PvP Damage", base: "3,318" },
        ],
      },
      {
        variantId:     "drone-defender",
        variantName:   "Defender",
        expertiseGrade: "+1% Damage Reduction",
        stats: [
          { stat: "Cooldown",           base: "20s" },
          { stat: "Health",             base: "1,061,796", t1: "+70% Health",           t2: "+140% Health",          t3: "+210% Health",          t4: "+280% Health",          t5: "+350% Health",          t6: "+420% Health",          overcharge: "+560% Health" },
          { stat: "Duration",           base: "20s" },
          { stat: "Damage Reduction",   base: "20%",       t1: "+5% Damage Reduction",  t2: "+10% Damage Reduction", t3: "+15% Damage Reduction", t4: "+20% Damage Reduction", t5: "+25% Damage Reduction", t6: "+30% Damage Reduction", overcharge: "+60% Damage Reduction" },
          { stat: "PvP Damage Reduction",base: "10%" },
        ],
      },
      {
        variantId:     "drone-bombardier",
        variantName:   "Bombardier",
        expertiseGrade: "+1% Blast Damage",
        stats: [
          { stat: "Cooldown",        base: "25s" },
          { stat: "Health",          base: "1,061,796", t1: "+70% Health",       t2: "+140% Health",      t3: "+210% Health",      t4: "+280% Health",      t5: "+350% Health",      t6: "+420% Health",      overcharge: "+420% Health" },
          { stat: "Explosion Damage",base: "564,079",   t1: "+10% Blast Damage", t2: "+20% Blast Damage", t3: "+30% Blast Damage", t4: "+40% Blast Damage", t5: "+50% Blast Damage", t6: "+60% Blast Damage", overcharge: "+60% Blast Damage" },
          { stat: "Number of Bombs", base: "3",         t1: "+1 Extra Bombs",    t2: "+2 Extra Bombs",    t3: "+3 Extra Bombs",    t4: "+4 Extra Bombs",    t5: "+5 Extra Bombs",    t6: "+6 Extra Bombs",    overcharge: "+6 Extra Bombs" },
          { stat: "Blast Radius",    base: "4.5m",                                                                                                                                                              overcharge: "+5 Blast Radius" },
          { stat: "PvP Damage",      base: "152,301" },
        ],
      },
      {
        variantId:     "drone-fixer",
        variantName:   "Fixer",
        expertiseGrade: "+1% Duration",
        stats: [
          { stat: "Cooldown",    base: "25s" },
          { stat: "Health",      base: "1,061,796", t1: "+70% Health",       t2: "+140% Health",      t3: "+210% Health",      t4: "+280% Health",      t5: "+350% Health",      t6: "+420% Health",      overcharge: "+500% Health" },
          { stat: "Duration",    base: "180s" },
          { stat: "Healing",     base: "17,918",    t1: "+20% Armor Repair", t2: "+40% Armor Repair", t3: "+60% Armor Repair", t4: "+80% Armor Repair", t5: "+100% Armor Repair",t6: "+120% Armor Repair",overcharge: "+175% Armor Repair" },
          { stat: "PvP Healing", base: "8,958" },
        ],
      },
      {
        variantId:       "drone-tactician",
        variantName:     "Tactician",
        expertiseGrade:  "+1% Scan Range",
        overchargeEffect: "Weakness Exploit: You and your allies' damage is amplified by 15% to pulsed targets",
        restricted:      true,
        stats: [
          { stat: "Cooldown",   base: "20s" },
          { stat: "Health",     base: "1,061,796", t1: "+70% Health",    t2: "+140% Health",   t3: "+210% Health",   t4: "+280% Health",   t5: "+350% Health",   t6: "+420% Health",   overcharge: "+560% Health" },
          { stat: "Duration",   base: "300s" },
          { stat: "Scan Range", base: "50m",       t1: "+5m Scan Range", t2: "+10m Scan Range",t3: "+15m Scan Range",t4: "+20m Scan Range",t5: "+25m Scan Range",t6: "+30m Scan Range",overcharge: "+40m Scan Range" },
        ],
      },
    ],
  },

  // ── Shield ─────────────────────────────────────────────────────────────────
  {
    skillId:   "shield",
    skillName: "Shield",
    variants: [
      {
        variantId:       "shield-bulwark",
        variantName:     "Bulwark",
        expertiseGrade:  "+1% Active Regeneration",
        overchargeEffect: "Shield Wall: Your shield is invulnerable",
        stats: [
          { stat: "Cooldown",                base: "20s" },
          { stat: "Health",                  base: "2,654,490",  t1: "+67% Shield Health",       t2: "+133% Shield Health",      t3: "+200% Shield Health",      t4: "+266% Shield Health",      t5: "+333% Shield Health",      t6: "+400% Shield Health",      overcharge: "+400% Shield Health" },
          { stat: "Active Regeneration",     base: "79,635 HP/s", t1: "+20% Active Regeneration", t2: "+40% Active Regeneration", t3: "+60% Active Regeneration", t4: "+80% Active Regeneration", t5: "+100% Active Regeneration",t6: "+120% Active Regeneration",overcharge: "+500% Active Regeneration" },
          { stat: "Holstered Regeneration",  base: "132,725 HP/s",t1: "+5% Holstered Regeneration", t2: "+10% Holstered Regeneration",t3: "+15% Holstered Regeneration",t4: "+20% Holstered Regeneration",t5: "+25% Holstered Regeneration",t6: "+40% Holstered Regeneration",overcharge: "+40% Holstered Regeneration" },
          { stat: "PvP Damage",              base: "8x" },
        ],
      },
      {
        variantId:       "shield-crusader",
        variantName:     "Crusader",
        expertiseGrade:  "+1% Active Regeneration",
        overchargeEffect: "Shield Wall: Your shield is invulnerable",
        stats: [
          { stat: "Cooldown",               base: "20s" },
          { stat: "Health",                 base: "1,327,245",   t1: "+40% Shield Health",       t2: "+66% Shield Health",       t3: "+100% Shield Health",      t4: "+150% Shield Health",      t5: "+200% Shield Health",      t6: "+250% Shield Health",      overcharge: "+250% Shield Health" },
          { stat: "Active Regeneration",    base: "39,817",      t1: "+10% Active Regeneration", t2: "+20% Active Regeneration", t3: "+30% Active Regeneration", t4: "+40% Active Regeneration", t5: "+50% Active Regeneration", t6: "+60% Active Regeneration", overcharge: "+500% Active Regeneration" },
          { stat: "Holstered Regeneration", base: "66,362",      t1: "+5% Holstered Regeneration",t2: "+10% Holstered Regeneration",t3: "+15% Holstered Regeneration",t4: "+20% Holstered Regeneration",t5: "+25% Holstered Regeneration",t6: "+40% Holstered Regeneration",overcharge: "+40% Holstered Regeneration" },
          { stat: "PvP Damage",             base: "8x" },
        ],
      },
      {
        variantId:       "shield-deflector",
        variantName:     "Deflector",
        expertiseGrade:  "+1% Active Regeneration",
        overchargeEffect: "Shield Wall: Your shield is invulnerable",
        stats: [
          { stat: "Cooldown",               base: "20s" },
          { stat: "Health",                 base: "2,123,592",   t1: "+40% Shield Health",         t2: "+66% Shield Health",         t3: "+100% Shield Health",        t4: "+150% Shield Health",        t5: "+200% Shield Health",        t6: "+250% Shield Health",        overcharge: "+250% Shield Health" },
          { stat: "Active Regeneration",    base: "63,708",      t1: "+10% Active Regeneration",   t2: "+20% Active Regeneration",   t3: "+30% Active Regeneration",   t4: "+40% Active Regeneration",   t5: "+50% Active Regeneration",   t6: "+60% Active Regeneration",   overcharge: "+60% Active Regeneration" },
          { stat: "Holstered Regeneration", base: "106,180",     t1: "+5% Holstered Regeneration", t2: "+10% Holstered Regeneration",t3: "+15% Holstered Regeneration",t4: "+20% Holstered Regeneration",t5: "+25% Holstered Regeneration",t6: "+40% Holstered Regeneration",overcharge: "+40% Holstered Regeneration" },
          { stat: "Average Damage",         base: "80,465",      t1: "+10% Deflector Damage",      t2: "+20% Deflector Damage",      t3: "+30% Deflector Damage",      t4: "+40% Deflector Damage",      t5: "+50% Deflector Damage",      t6: "+60% Deflector Damage",      overcharge: "+100% Deflector Damage" },
          { stat: "PvP Damage",             base: "8x" },
        ],
      },
      {
        variantId:       "shield-striker",
        variantName:     "Striker",
        expertiseGrade:  "+1% Regeneration",
        overchargeEffect: "Shield Wall: Your shield is invulnerable",
        restricted:      true,
        stats: [
          { stat: "Damage Bonus (per enemy)", base: "5%",    t1: "+1.0 Buff Strength", t2: "+1.2 Buff Strength", t3: "+1.4 Buff Strength", t4: "+1.6 Buff Strength", t5: "+1.8 Buff Strength", t6: "+2.0 Buff Strength", overcharge: "+2.5 Buff Strength" },
          { stat: "Buff Angle",               base: "45" },
          { stat: "Buff Range",               base: "10m" },
          { stat: "Cooldown",                 base: "20s" },
          { stat: "Health",                   base: "1,327,245",  t1: "+40% Shield Health",         t2: "+66% Shield Health",         t3: "+100% Shield Health",        t4: "+150% Shield Health",        t5: "+200% Shield Health",        t6: "+250% Shield Health",        overcharge: "+400% Shield Health" },
          { stat: "Holstered Regeneration",   base: "66,362",     t1: "+5% Holstered Regeneration", t2: "+10% Holstered Regeneration",t3: "+15% Holstered Regeneration",t4: "+20% Holstered Regeneration",t5: "+25% Holstered Regeneration",t6: "+40% Holstered Regeneration",overcharge: "+100% Holstered Regeneration" },
          { stat: "Active Regeneration",      base: "39,817",     t1: "+10% Active Regeneration",   t2: "+20% Active Regeneration",   t3: "+30% Active Regeneration",   t4: "+40% Active Regeneration",   t5: "+50% Active Regeneration",   t6: "+60% Active Regeneration",   overcharge: "+60% Active Regeneration" },
          { stat: "PvP Damage",               base: "8x" },
        ],
      },
    ],
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Derived helpers
// ─────────────────────────────────────────────────────────────────────────────

export const SKILL_MAP = new Map(SKILLS.map(s => [s.skillId, s]));
export const SKILL_NAMES = SKILLS.map(s => s.skillName);

/** Flat map of variantId → SkillVariant across all skills */
export const SKILL_VARIANT_MAP = new Map(
  SKILLS.flatMap(s => s.variants.map(v => [v.variantId, v]))
);

export function variantsForSkill(skillId: string): SkillVariant[] {
  return SKILL_MAP.get(skillId)?.variants ?? [];
}
