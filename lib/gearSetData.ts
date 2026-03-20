import type { GearSetDef } from "./types";

export type { GearSetDef, GearSetPerk } from "./types";

// ─────────────────────────────────────────────────────────────────────────────
// Gear Sets
// talent4pc / chestTalent / backpackTalent are optional — filled in as data
// is sourced. Remaining sets use empty arrays / omitted optional fields.
// ─────────────────────────────────────────────────────────────────────────────

export const GEAR_SETS: GearSetDef[] = [

  {
    id:            "aces-eights",
    name:          "Aces & Eights",
    icon:          "/gearsets/aces.png",
    dlc:           false,
    coreAttrs:     ["Weapon Damage"],
    bonus2pc:      ["15% MMR Damage", "15% Rifle Damage"],
    bonus3pc:      ["30% Headshot Damage"],
    talent4pc:     {
      name: "Dead Man's Hand",
      desc: "Flip a card when landing shots with a Rifle or Marksman Rifle. After 5 cards are flipped, the damage of your next shot is amplified by 30%. More shots are enhanced the better the hand revealed. Four of a Kind: 4 shots. Full House: 3 shots. Aces and Eights: 2 shots. Flip an additional card on headshots.",
    },
    chestTalent:   { name: "No Limit",        desc: "Increases Dead Man's Hand damage bonus from 30% to 50%." },
    backpackTalent:{ name: "Ace in the Sleeve", desc: "Amplifies 1 extra shot when revealing your hand." },
    dropLocation:  "LZ and DZ",
    talentCategory:"Amplifier",
  },

  {
    id:            "aegis",
    name:          "Aegis",
    icon:          "/gearsets/aegis.png",
    dlc:           true,
    coreAttrs:     ["Armor"],
    bonus2pc:      ["70% Health"],
    bonus3pc:      ["15% Total Armor"],
    talent4pc:     {
      name: "Stoic",
      desc: "Get +4% Damage Resistance for every enemy that is targeting you. The bonus is multiplied by 1.X, where X is the number of agents in your group.",
    },
    chestTalent:   { name: "Deceit",               desc: "Enemies targeting your Decoy also count towards the Stoic Damage Reduction bonus." },
    backpackTalent:{ name: "Polyethylene Plating",  desc: "Increase Stoic Damage Resistance bonus from 4% to 5%." },
    dropLocation:  "LZ and DZ",
    talentCategory:"Utility",
  },

  {
    id:            "breaking-point",
    name:          "Breaking Point",
    icon:          "/gearsets/breaking_point.png",
    dlc:           true,
    coreAttrs:     ["Weapon Damage"],
    bonus2pc:      ["25% Rifle Damage", "25% MMR Damage"],
    bonus3pc:      ["30% Headshot Damage", "15% Weapon Handling"],
    talent4pc:     {
      name: "On Point",
      desc: "Hitting a shot with a rifle or MMR grants 1 stack, max stack equal to magazine size. Reloading grants 2% weapon handling and 4% WD per stack for 10s. No stacks gained while bonuses are active. Once timer runs out, effect will stop. Reloading with stacks while inactive will remove all stacks and refill magazine.",
    },
    chestTalent:   { name: "Point of No Return", desc: "Increase on point bonuses timer from 10s to 15s." },
    backpackTalent:{ name: "Point of Honor",     desc: "Increases On Point Weapon Damage bonus from 4% to 7.2% per stack." },
    dropLocation:  "LZ and DZ",
    talentCategory:"Additive to All Weapon Damage",
  },

  {
    id:            "cavalier",
    name:          "Cavalier",
    icon:          "/gearsets/cavalier.png",
    dlc:           true,
    coreAttrs:     ["Armor"],
    bonus2pc:      ["30% Hazard Protection"],
    bonus3pc:      ["40% Repair Skills"],
    talent4pc:     {
      name: "Charging / Charged",
      desc: "Charging: For each second spent out of cover during combat, Agents will get 5% reduced incoming skill damage. Max 50%. Charged: While fully charged, gain immunity to any movement speed debuff and share this with all of the agents hazard protection and the incoming skill damage with all allies for 10 seconds. After Charged is consumed, Charging buff will resume if still in combat and out of cover.",
    },
    chestTalent:   { name: "Overcharging",  desc: "Increases Charger max incoming damage protection to 70%." },
    backpackTalent:{ name: "Safe Charging", desc: "Charging gives 10% protection per second." },
    dropLocation:  "LZ and DZ",
    talentCategory:"Utility",
  },

  {
    id:            "concentrated-company",
    name:          "Concentrated Company",
    icon:          "/gearsets/concentrated_company.png",
    dlc:           false,
    coreAttrs:     ["Weapon Damage"],
    bonus2pc:      ["10% Weapon Damage"],
    bonus3pc:      ["30% Weapon Handling"],
    talent4pc:     {
      name: "Camaraderie",
      desc: "Shooting an enemy marks them for 7 seconds. When a marked enemy dies, receive one stack of 3% Weapon Damage and 2% Critical Hit Damage for each Ally or Skill that has contributed to killing that enemy. Max stacks is 35. Stacks decay every 10 seconds. Maximum amount of marks that can be placed is 4.",
    },
    chestTalent:   { name: "All for One", desc: "Increase the amount of marks that can be placed from 4 to 8." },
    backpackTalent:{ name: "One for All", desc: "Increase the Weapon Damage bonus per stack from 3% to 5%." },
    dropLocation:  "LZ and DZ",
    talentCategory:"Additive to All Weapon Damage and Critical Hit Damage",
  },

  // ── Stubs — talent data pending ───────────────────────────────────────────

  {
    id:            "eclipse-protocol",
    name:          "Eclipse Protocol",
    icon:          "/gearsets/eclipse.png",
    dlc:           true,
    coreAttrs:     ["Skill Tier"],
    bonus2pc:      ["15% Status Effects"],
    bonus3pc:      ["15% Skill Haste", "30% Hazard Protection"],
    talent4pc:     {
      name: "Indirect Transmission",
      desc: "On kill: Spread status effects of that enemy to all enemies within 10m. Refresh 50% of status effect durations.",
    },
    chestTalent:   { name: "Proliferation",      desc: "Increases Indirect Transmission range from 10m to 15m. Increases refresh percentage from 50% to 75%." },
    backpackTalent:{ name: "Symptom Aggravator",  desc: "Amplifies all damage you deal to status affected targets by 30%." },
    dropLocation:  "LZ and DZ",
    talentCategory:"Backpack: Amplifier to all sources",
  },

  {
    id:            "foundry-bulwark",
    name:          "Foundry Bulwark",
    icon:          "/gearsets/foundry.png",
    dlc:           false,
    coreAttrs:     ["Armor"],
    bonus2pc:      ["10% Total Armor"],
    bonus3pc:      ["1% Armor Regen", "50% Shield Health"],
    talent4pc:     {
      name: "Makeshift Repairs",
      desc: "Whenever you or your shield take damage, 25% of that amount is repaired to both over 10s.",
    },
    chestTalent:   { name: "Improved Materials", desc: "Decreases time taken for Makeshift Repairs from 10s to 5s." },
    backpackTalent:{ name: "Process Refinery",   desc: "Increases Makeshift Repairs from 25% over 10s to 35% over 10s." },
    dropLocation:  "LZ and DZ",
    talentCategory:"Utility",
  },

  {
    id:            "future-initiative",
    name:          "Future Initiative",
    icon:          "/gearsets/future.png",
    dlc:           false,
    coreAttrs:     ["Skill Tier"],
    bonus2pc:      ["30% Repair Skills"],
    bonus3pc:      ["30% Skill Duration", "15% Skill Haste"],
    talent4pc:     {
      name: "Ground Control",
      desc: "Increases you and your allies' total weapon and skill damage by 15% when at full armor. When you repair an ally, you and all allies within 5m of you are also repaired for 60% of that amount.",
    },
    chestTalent:   { name: "Tactical Superiority",   desc: "Increases Ground Control damage bonus from 15% to 25%." },
    backpackTalent:{ name: "Advanced Combat Tactics", desc: "Increases Ground Control proximity repair from 60% to 120%." },
    dropLocation:  "LZ and DZ",
    talentCategory:"Total Weapon / Skill Damage",
  },

  {
    id:            "hard-wired",
    name:          "Hard Wired",
    icon:          "/gearsets/hard.png",
    dlc:           false,
    coreAttrs:     ["Skill Tier"],
    bonus2pc:      ["15% Skill Haste"],
    bonus3pc:      ["15% Skill Damage", "30% Repair Skills"],
    talent4pc:     {
      name: "Feedback Loop",
      desc: "Whenever you use or cancel a skill, your other skill's cooldown is reduced by 30s, total skill repair is increased by 10% for 20s, and total skill damage is increased by 10% for 20s. Cooldown: 10s.",
    },
    chestTalent:   { name: "Positive Reinforcement", desc: "Increases Feedback Loop skill damage and repair bonus from +10% to +25%." },
    backpackTalent:{ name: "Short Circuit",           desc: "Decreases Feedback Loop cooldown from 10s to 5s." },
    dropLocation:  "LZ and DZ",
    talentCategory:"Total Skill Damage",
  },

  {
    id:            "heartbreaker",
    name:          "Heartbreaker",
    icon:          "/gearsets/heartbreaker.png",
    dlc:           true,
    coreAttrs:     ["Armor"],
    bonus2pc:      ["15% Assault Rifle Damage", "15% LMG Damage"],
    bonus3pc:      ["15% Weapon Handling"],
    talent4pc:     {
      name: "Heartstopper",
      desc: "Headshots apply pulse for 5s. Weapon hits on pulsed enemies add and refresh a stack of +1% bonus armor and +1.1% weapon damage to pulsed enemies for 5s. Max stack is 50. Two stacks are lost per second.",
    },
    chestTalent:   { name: "Max BPM", desc: "Max stack is now 100." },
    backpackTalent:{ name: "Cold",    desc: "Stacks now supply +2% bonus armor." },
    dropLocation:  "LZ and DZ",
    talentCategory:"Separate Multiplier, stacks additively — (1 + 0.011 × n), n = number of stacks. Max 50 without chest, max 100 with chest.",
  },
  {
    id:            "hotshot",
    name:          "Hotshot",
    icon:          "/gearsets/hotshot.png",
    dlc:           true,
    coreAttrs:     ["Weapon Damage"],
    bonus2pc:      ["30% Marksman Rifle Damage", "30% Weapon Handling"],
    bonus3pc:      ["30% Headshot Damage"],
    talent4pc:     {
      name: "Headache",
      desc: "First Headshot with a Marksman Rifle will increase next headshot by 20%. Second consecutive headshot will give +10% armor (if at full armor it will give bonus armor max +50% of current armor value). Third consecutive headshot will refill magazine. From the fourth headshot forward agents will get all 3 bonuses for each consecutive headshot kill. Missing a headshot will reset the cycle.",
    },
    chestTalent:   { name: "Stand Tall", desc: "Increases bonus Armor from 50% to 100%." },
    backpackTalent:{ name: "Lucky",      desc: "Agents can miss a headshot before resetting the cycle." },
    dropLocation:  "LZ and DZ",
    talentCategory:"Amplifier",
  },

  {
    id:            "hunters-fury",
    name:          "Hunter's Fury",
    icon:          "/gearsets/hunters.png",
    dlc:           false,
    coreAttrs:     ["Weapon Damage"],
    bonus2pc:      ["15% Shotgun Damage", "15% SMG Damage"],
    bonus3pc:      ["20% Armor on Kill", "50% Health on Kill"],
    talent4pc:     {
      name: "Apex Predator",
      desc: "Enemies within 15m receive a debuff, amplifying your weapon damage against them by +20%. Killing a debuffed enemy with your weapon disorients other enemies within 5m, and amplifies weapon damage by 5% for 10s, stacking up to 5 times.",
    },
    chestTalent:   { name: "Endless Hunger",     desc: "Increases the duration of Apex Predator stacks from 10s to 30s." },
    backpackTalent:{ name: "Overwhelming Force", desc: "Increases the radius of disorientation on Apex Predator kills from 5m to 10m." },
    dropLocation:  "LZ and DZ",
    talentCategory:"Weapon damage amplifier within 15m. On kill stacking buff is self multiplicative — 1.05^n, n ranges from 0 to 5.",
  },

  {
    id:            "measured-assembly",
    name:          "Measured Assembly",
    icon:          "/gearsets/measured_assembly.png",
    dlc:           false,
    coreAttrs:     ["Skill Tier"],
    bonus2pc:      ["15% Skill Haste"],
    bonus3pc:      ["60% Repair Skills", "40% Explosive Resistance"],
    talent4pc:     {
      name: "Huddle",
      desc: "Receive +1 Skill Tier for each ally Agent within the range of your Hive or Smart Cover. While at Skill Tier 6, having at least one ally Agent in range for 4s will grant Overcharge for 15s. Cooldown: 40s. Mortars and enemy Skills that enter the range of your Hive or Smart Cover will be destroyed. Cooldown: 10s. The cooldown is 20% faster for each ally agent within range.",
    },
    chestTalent:   { name: "Hivemind",         desc: "Decrease the Overcharge cooldown from 40s to 25s." },
    backpackTalent:{ name: "Smart Cooperation", desc: "Decrease the cooldown for destroying Mortars and enemy skills from 10s to 1s." },
    dropLocation:  "LZ and DZ",
    talentCategory:"Utility",
  },

  {
    id:            "negotiators-dilemma",
    name:          "Negotiator's Dilemma",
    icon:          "/gearsets/negotiators.png",
    dlc:           false,
    coreAttrs:     ["Weapon Damage"],
    bonus2pc:      ["15% Critical Hit Chance"],
    bonus3pc:      ["20% Critical Hit Damage"],
    talent4pc:     {
      name: "Crowd Control",
      desc: "Critical hits mark enemies for 20s, up to 3 marks total. When you critically hit a marked enemy, all other marked enemies take 60% of the damage dealt. Whenever a marked enemy dies, gain +2% critical hit damage, stacking up to 20 times, or until combat ends.",
    },
    chestTalent:   { name: "Target Rich Environment", desc: "Increases Crowd Control mark count from 3 to 5." },
    backpackTalent:{ name: "Critical Measures",       desc: "Increases Crowd Control damage to additional marked enemies from 60% to 112%." },
    dropLocation:  "LZ and DZ",
    talentCategory:"Critical Hit Damage",
  },

  {
    id:            "ongoing-directive",
    name:          "Ongoing Directive",
    icon:          "/gearsets/ongoing.png",
    dlc:           false,
    coreAttrs:     ["Weapon Damage"],
    bonus2pc:      ["15% Status Effects"],
    bonus3pc:      ["30% Reload Speed"],
    talent4pc:     {
      name: "Rules of Engagement",
      desc: "Shooting a status affected enemy will apply a mark. Killing a marked enemy grants a full clip of Hollow-Point Ammo for your active weapon, and half a clip to the rest of the party. Mark lasts 10 seconds. Hollow-Point Ammo amplifies weapon damage by 20% and applies bleed on hit.",
    },
    chestTalent:   { name: "Parabellum Rounds",  desc: "Increases Hollow-Point Ammo weapon damage amplification to 50%. Does not affect party ammo." },
    backpackTalent:{ name: "Trauma Specialist",  desc: "Increases duration of bleed status effects by 50% and all bleed damage done by 100%." },
    dropLocation:  "LZ and DZ",
    talentCategory:"Bullet Amplifier",
  },

  {
    id:            "ortiz-exuro",
    name:          "Ortiz: Exuro",
    icon:          "/gearsets/ortiz_exuro.png",
    dlc:           true,
    coreAttrs:     ["Skill Tier"],
    bonus2pc:      ["20% Burn Duration", "15% Skill Health"],
    bonus3pc:      ["40% Burn Damage"],
    talent4pc:     {
      name: "Ortiz Incinerator Turret Prototype",
      desc: "The Incinerator Turret spins 360°. You are immune to your own Incinerator Turret's fire. The Incinerator Turret explodes when disabled.",
    },
    chestTalent:   { name: "Chain Combustion", desc: "Enemies set ablaze by the Ortiz Incinerator Turret Prototype ignite other enemies within 2m." },
    backpackTalent:{ name: "Heatstroke",       desc: "+25% Weapon Damage to enemies set on fire by the Ortiz Incinerator Turret Prototype. +25% Ortiz Incinerator Turret Prototype Range." },
    dropLocation:  "LZ and DZ",
    talentCategory:"Backpack: Amplifier, not WD",
  },

  {
    id:            "refactor",
    name:          "Refactor",
    icon:          "/gearsets/refactor.png",
    dlc:           true,
    coreAttrs:     ["Skill Tier — Mask/Chest/Holster", "Armor — Backpack/Gloves/Kneepads"],
    bonus2pc:      ["15% Status Effects"],
    bonus3pc:      ["25% Skill Damage"],
    talent4pc:     {
      name: "Return to Sender",
      desc: "For PvE: Receive repairs of 10% of the damage dealt by your Skills. Your allies will receive repairs of 20% of the damage dealt by your Skills. For PvP: Receive repairs of 5% of the damage dealt by your Skills. Your allies will receive repairs of 10% of the damage dealt by your Skills.",
    },
    chestTalent:   { name: "Increased Interest", desc: "For PvE: Increase repairs received from Return to Sender from 10% to 25%, and from 20% to 35%. For PvP: from 5% to 15%, and from 10% to 20%." },
    backpackTalent:{ name: "Over-engineered",    desc: "While at full Armor, repairs received from Return to Sender will provide Bonus Armor, up to 80% of your Total Armor. Does not apply to allies." },
    dropLocation:  "LZ and DZ",
    talentCategory:"Utility",
  },

  {
    id:            "rigger",
    name:          "Rigger",
    icon:          "/gearsets/rigger.png",
    dlc:           false,
    coreAttrs:     ["Skill Tier"],
    bonus2pc:      ["15% Skill Haste"],
    bonus3pc:      ["15% Skill Duration"],
    talent4pc:     {
      name: "Tend and Befriend",
      desc: "Interacting with your deployed skills grants the skill 25% skill damage for 10s. This buff cannot be refreshed. Interactions include: Using / Deploying the Skill, Changing the skill's target, Healing the skill.",
    },
    chestTalent:   { name: "Best Buds",      desc: "Increase the damage buff from 25% to 50%." },
    backpackTalent:{ name: "Complete Uptime", desc: "Cancelling your skills will reset their cooldown." },
    dropLocation:  "LZ and DZ",
    talentCategory:"Skill Damage",
  },

  {
    id:            "strikers-battlegear",
    name:          "Striker's Battlegear",
    icon:          "/gearsets/strikers.png",
    dlc:           false,
    coreAttrs:     ["Weapon Damage"],
    bonus2pc:      ["15% Weapon Handling"],
    bonus3pc:      ["15% Rate of Fire"],
    talent4pc:     {
      name: "Striker's Gamble",
      desc: "Weapon hits increase total weapon damage by 0.65%, stacking up to 100 times. 1 stack lost per second between 0 to 50 stacks; 2 stacks lost per second between 51 and 100 stacks.",
    },
    chestTalent:   { name: "Press the Advantage", desc: "Increases max stacks for Striker's Gamble from 100 to 200. 3 stacks lost per second between 101 and 200 stacks." },
    backpackTalent:{ name: "Risk Management",     desc: "Increases total weapon damage gained per stack of Striker's Gamble from 0.65% to 0.9%." },
    dropLocation:  "LZ and DZ",
    talentCategory:"Amplifier, stacks additively — (1 + 0.0065 × n) without backpack, (1 + 0.0090 × n) with backpack. n ranges from 1 to 100, or 1 to 200 with chest.",
  },

  {
    id:            "system-corruption",
    name:          "System Corruption",
    icon:          "/gearsets/system_corruption.png",
    dlc:           false,
    coreAttrs:     ["Weapon Damage — Mask/Gloves/Holster", "Armor — Backpack/Chest/Kneepads"],
    bonus2pc:      ["15% Armor on Kill"],
    bonus3pc:      ["40% Disrupt Resistance", "40% Pulse Resistance"],
    talent4pc:     {
      name: "Hackstep Protocol",
      desc: "Replaces armor kits with an instant, infinite-use ability: Grants 50% bonus armor for 5s, hides your nameplate for 5s, repairs 20% of your armor, and increases total weapon damage by 2% per 5% bonus armor gained, up to 20%. Ability cooldown: 20s.",
    },
    chestTalent:   { name: "Compiler Optimization",   desc: "Decreases Hackstep Protocol cooldown from 20s to 15s." },
    backpackTalent:{ name: "Multithreaded Execution",  desc: "Increases Hackstep Protocol bonus armor from 50% to 100%." },
    dropLocation:  "DZ only, Seasonal Caches",
    talentCategory:"Amplifier — applies to skills, melee, grenades, and bullets.",
  },

  {
    id:            "tip-of-the-spear",
    name:          "Tip of the Spear",
    icon:          "/gearsets/tip.png",
    dlc:           false,
    coreAttrs:     ["Weapon Damage"],
    bonus2pc:      ["20% Signature Weapon Damage"],
    bonus3pc:      ["10% Weapon Damage"],
    talent4pc:     {
      name: "Aggressive Recon",
      desc: "Getting a Signature Weapon kill gives +15% Signature Weapon Damage for 10s and +25% Reload Speed for the next reload of the weapon (the bonuses do not stack). Automatically regenerate Signature Weapon Ammo every 60s.",
    },
    chestTalent:   { name: "Specialized Destruction", desc: "Increase Aggressive Recon Signature Weapon Damage bonus from 15% to 30%. Every 3rd Signature Weapon kill generates Signature Weapon ammo." },
    backpackTalent:{ name: "Signature Moves",         desc: "+50% Weapon Damage for 15s after fully depleting the Signature Weapon of ammo. Doubles the amount of ammo generated by Aggressive Recon." },
    dropLocation:  "LZ and DZ",
    talentCategory:"Total Weapon Damage + Spec Weapon Amplifier",
  },

  {
    id:            "tipping-scales",
    name:          "Tipping Scales",
    icon:          "/gearsets/tipping_scales.png",
    dlc:           true,
    coreAttrs:     ["Weapon Damage"],
    bonus2pc:      ["30% Magazine Size"],
    bonus3pc:      ["30% LMG Damage"],
    talent4pc:     {
      name: "Throttle Control",
      desc: "Shooting builds stacks to a max of 50. Each stack provides +0.5% Weapon Handling and +4% Critical Hit Damage. Lose 6 stacks per second while not shooting. No stacks lost if an enemy is Suppressed.",
    },
    chestTalent:   { name: "Sustainability", desc: "Increase the maximum number of stacks from 50 to 75." },
    backpackTalent:{ name: "Snowball",       desc: "Increase the Critical Hit Damage received per stack from 4% to 7%." },
    dropLocation:  "LZ and DZ",
    talentCategory:"Critical Hit Damage",
  },

  {
    id:            "true-patriot",
    name:          "True Patriot",
    icon:          "/gearsets/true.png",
    dlc:           false,
    coreAttrs:     ["Armor"],
    bonus2pc:      ["30% Ammo Capacity"],
    bonus3pc:      ["30% Magazine Size"],
    talent4pc:     {
      name: "Red, White and Blue",
      desc: "Enemies you shoot receive stacking debuffs of Red/White/Blue, changing every 2 seconds. Red: Amplifies the enemy's damage taken by 8%. White: Hitting the enemy restores you and your allies' armor by 2% once every second. Blue: Decreases enemy damage dealt by 8%. Full Flag: Enemies that die while under the effect of all three debuffs create a 5m explosion dealing damage equal to their total health and armor. Explosion strength is reduced on Named enemy deaths.",
    },
    chestTalent:   { name: "Waving the Flag", desc: "Increases Red, White, and Blue rotation speed to 1.5 seconds." },
    backpackTalent:{ name: "Patriotic Boost", desc: "Increases Red, White, and Blue debuff strength. Red: from 8% to 12%. White: from 2% to 3%. Blue: from 8% to 12%." },
    dropLocation:  "LZ and DZ",
    talentCategory:"Red: Amplifier",
  },

  {
    id:            "umbra-initiative",
    name:          "Umbra Initiative",
    icon:          "/gearsets/umbra.png",
    dlc:           false,
    coreAttrs:     ["Weapon Damage"],
    bonus2pc:      ["15% Critical Hit Chance"],
    bonus3pc:      ["30% Reload Speed"],
    talent4pc:     {
      name: "From the Shadows Into the Light",
      desc: "From the Shadows: While out of cover and in combat, gain 10 stacks per second up to 50. Each stack gives 0.8% Armor regen when consumed. Stacks consume at 10 per second, only in cover. Into the Light: While in cover, gain 10 stacks per second up to 50. Each stack gives 1.2% Critical Hit Damage and 0.4% RPM. Buff does not apply while shooting from cover. While out of cover, agents lose 2 stacks per second normally and 1 stack per second if sprinting.",
    },
    chestTalent:   { name: "From the Shadows", desc: "Increases max stacks for Into the Light from 50 to 100, stack gain from 10 to 20, and stack consumption from 10 to 20. (Buffs the damage talent.)" },
    backpackTalent:{ name: "Into the Light",   desc: "Increases max stacks for From the Shadows from 50 to 100, stack gain from 10 to 20. (Buffs the armor regen talent.)" },
    dropLocation:  "LZ and DZ",
    talentCategory:"Critical Hit Damage and Rate of Fire",
  },

  {
    id:            "virtuoso",
    name:          "Virtuoso",
    icon:          "/gearsets/virtuoso.png",
    dlc:           true,
    coreAttrs:     ["Weapon Damage"],
    bonus2pc:      ["15% Weapon Handling", "15% Magazine Size"],
    bonus3pc:      ["15% Weapon Damage"],
    talent4pc:     {
      name: "Symphony",
      desc: "Kills Beyond 25 Meters: +40% Weapon Damage to Shotguns, SMGs, and Pistols; +20% Weapon Damage to Assault Rifles and LMGs; +25% Bonus Armor for 15s. Kills Within 25 Meters: +40% Weapon Damage to Marksman Rifles and Rifles; +20% Weapon Damage to Assault Rifles and LMGs; +30% Headshot Damage for 15s. Intermittently killing enemies from both ranges builds stacks. At 4 stacks, all bonuses are multiplied by 1.5 and triggered simultaneously for 15s. No stacks gained while talent is active.",
    },
    chestTalent:   { name: "Fortissimo",  desc: "Double the weapon damage bonus from Symphony." },
    backpackTalent:{ name: "Accelerando", desc: "Decreases the number of stacks needed to proc the Symphony double buffs from 4 to 3." },
    dropLocation:  "LZ and DZ",
    talentCategory:"All Weapon Damage",
  },

];

// ─────────────────────────────────────────────────────────────────────────────
// Derived helpers
// ─────────────────────────────────────────────────────────────────────────────

export const GEAR_SET_MAP   = new Map(GEAR_SETS.map(g => [g.id, g]));
export const GEAR_SET_NAMES = GEAR_SETS.map(g => g.name);
