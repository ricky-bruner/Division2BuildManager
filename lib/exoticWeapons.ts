import type { Talent, WeaponType } from "./weaponTypes";

// ─────────────────────────────────────────────────────────────────────────────
// Exotic Mod Slots  (fixed bonuses that replace random mod rolls on exotics)
// ─────────────────────────────────────────────────────────────────────────────

export interface ExoticMods {
  optics?:        string;
  magazine?:      string;
  muzzle?:        string;
  underbarrel?:   string;
  /** Built-in core/main attribute (e.g. Capacitor's "12% Damage to Armour") */
  mainAttribute?: string;
}

// ─────────────────────────────────────────────────────────────────────────────
// Exotic Weapon
// ─────────────────────────────────────────────────────────────────────────────

export interface ExoticWeapon {
  weaponId:     string;
  weaponName:   string;
  baseModel:    string;
  type:         WeaponType;
  /** References EXOTIC_TALENTS.talentId */
  talentId:     string;
  fixedMods:    ExoticMods;
  dropLocation: string;
  flavorText?:  string;
}

// ─────────────────────────────────────────────────────────────────────────────
// EXOTIC TALENTS  (talentType: "exoticWeapon")
// Sorted alphabetically by talentId.
// Note: "sandman" is shared by Lullaby + Sweet Dreams;
//       "binary-trigger" is shared by Ruthless + Merciless.
// ─────────────────────────────────────────────────────────────────────────────

export const EXOTIC_TALENTS: Talent[] = [
  {
    talentId: "actum-est", talentName: "Actum Est", talentIcon: "",
    talentDesc: "Shooting an enemy with this weapon will give 1 stack. At 100 stacks the next magazine will be 100% filled with shock ammo.",
    talentType: "exoticWeapon",
  },
  {
    talentId: "adaptive-instincts", talentName: "Adaptive Instincts", talentIcon: "",
    talentDesc: "Hitting 30 headshots grants 20% critical hit chance and 50% critical hit damage for 45 seconds. Hitting 65 body shots grants 90% weapon damage for 45 seconds. Hitting 20 leg shots grants 150% reload speed for 45 seconds. Buffs refresh when out of combat.",
    talentType: "exoticWeapon",
  },
  {
    talentId: "agonizing-bite", talentName: "Agonizing Bite", talentIcon: "",
    talentDesc: "Diamondback randomly marks an enemy within 20m. If no enemies are within 20m, it marks the enemy closest to you. Hitting that enemy consumes the mark, guaranteeing a critical hit with damage amplified by 20%. After hitting a mark, all shots fired are guaranteed critical hits for 5 seconds. A new random enemy is marked afterwards and whenever you reload.",
    talentType: "exoticWeapon",
  },
  {
    talentId: "ardent", talentName: "Ardent", talentIcon: "",
    talentDesc: "Shooting heats up the weapon, filling up a heat meter equivalent to 50% of the weapon's standard Magazine Size. When the meter is full, rounds shot by the weapon will ignite enemies. When not shooting, the meter depletes over time. Reloading or swapping the weapon fully depletes the meter.",
    talentType: "exoticWeapon",
  },
  {
    talentId: "autentico", talentName: "Autentico", talentIcon: "",
    talentDesc: "+35 Weapon Damage. +100% Accuracy. No Damage Drop Off. These bonuses are built into the weapon's base stats.",
    talentType: "exoticWeapon",
  },
  {
    talentId: "big-game-hunter", talentName: "Big Game Hunter", talentIcon: "",
    talentDesc: "When scoped, switches to semi-automatic fire mode, dealing 450% weapon damage with each shot. Headshots grant +6% headshot damage. Stacks up to 25 times. Once at full stacks, 10 stacks decay every 4 seconds until all stacks have been removed. Headshots delay decaying of stacks.",
    talentType: "exoticWeapon",
  },
  {
    talentId: "binary-trigger", talentName: "Binary Trigger", talentIcon: "",
    talentDesc: "This weapon fires on trigger pull and release. If both bullets hit the same enemy, gain a stack. At 7 stacks, shooting an enemy deals 500% amplified damage and creates a 7m explosion dealing 500% weapon damage, consuming the stacks.",
    talentType: "exoticWeapon",
  },
  {
    talentId: "breathe-free", talentName: "Breathe Free", talentIcon: "",
    talentDesc: "When moving, gain 4 stacks per second, or 8 stacks if sprinting. Max stack is equal to the weapon's Magazine Size. Each round fired consumes a stack, amplifying damage by 75%. Kills grant +20% movement speed for 10s.",
    talentType: "exoticWeapon",
  },
  {
    talentId: "bullet-hell", talentName: "Bullet Hell", talentIcon: "",
    talentDesc: "This weapon never needs to be reloaded. For every 100 bullets that hit an enemy, replenish some ammo to you and all your allies' reserves.",
    talentType: "exoticWeapon",
  },
  {
    talentId: "busy-little-bee", talentName: "Busy Little Bee", talentIcon: "",
    talentDesc: "Each shot to a different target will give 1 stack, up to 10. Each stack gives 20% weapon damage increase. Stacks activate once the agent switches weapon and last for 10 seconds.",
    talentType: "exoticWeapon",
  },
  {
    talentId: "capacitance", talentName: "Capacitance", talentIcon: "",
    talentDesc: "Shooting enemies builds stacks to a cap of 40. Each stack grants 1.5% Skill Damage. After 5 seconds, stacks decay 1 per second. For each skill tier, gain 7.5% Weapon Damage.",
    talentType: "exoticWeapon",
  },
  {
    talentId: "capitulate", talentName: "Capitulate", talentIcon: "",
    talentDesc: "Hitting an enemy applies -4% Movement Speed for each pellet hit for 5 seconds. Shooting the enemy again will reapply the stacks.",
    talentType: "exoticWeapon",
  },
  {
    talentId: "disruptor-rounds", talentName: "Disruptor Rounds", talentIcon: "",
    talentDesc: "Shooting an enemy marks that enemy and adds a stack to the agent up to a count of 50. Shooting a marked enemy refreshes the mark and adds stacks to the agent. When you deploy a non-shield skill, remove all stacks on agent and all marked targets trigger an effect. 1–10 Stacks: Pulse marked targets for 5 seconds. 11–25 Stacks: Pulse and Disrupt marked targets for 5 seconds. 26–49 Stacks: Pulse, Disrupt, and Disorient marked targets for 5 seconds. 50 Stacks: Pulse, Disrupt, and Disorient marked targets and all hostiles within 10 meters of the marked targets for 5 seconds. This effect will trigger immediately if any marked enemy is killed.",
    talentType: "exoticWeapon",
  },
  {
    talentId: "doctor-home", talentName: "Doctor Home", talentIcon: "",
    talentDesc: "Shooting an enemy with this weapon will apply a mark for 5 seconds. If a marked target is killed it will give a 10% armor repair kit which applies to the whole party. The kit will not give bonus armor.",
    talentType: "exoticWeapon",
  },
  {
    talentId: "eagle-strike", talentName: "Eagle Strike", talentIcon: "",
    talentDesc: "Accuracy increases as you continuously fire, up to 30%. Headshot kills grant the Tenacity buff for 15 seconds. The strength of Tenacity is increased by 1% for body shots and 5% for headshots. Tenacity: 40–80% of damage taken is delayed until the buff expires. All of the total delayed damage is reduced for each enemy killed while the buff is active, up to 100% with 3 kills.",
    talentType: "exoticWeapon",
  },
  {
    talentId: "electromagnetic-accelerator", talentName: "Electromagnetic Accelerator", talentIcon: "",
    talentDesc: "Shots fired deal 0–100% weapon damage based on how long the trigger is held before releasing.",
    talentType: "exoticWeapon",
  },
  {
    talentId: "full-stop", talentName: "Full Stop", talentIcon: "",
    talentDesc: "Shooting enemies builds stacks to a cap of 20. Headshots grant 2 stacks. Each stack grants 2% Weapon Damage and 5% Headshot Damage. On reload, clear all stacks and gain 5% of your max armor as temp armor for 10 seconds for each stack removed. Headshot kills with Dread Edict restore all bullets in the magazine. This does not count as a reload.",
    talentType: "exoticWeapon",
  },
  {
    talentId: "geri-and-freki", talentName: "Geri and Freki", talentIcon: "",
    talentDesc: "On trigger pull, fire both barrels at once. When fired from the right shoulder, hits add offensive primers, and defensive primers when fired from the left shoulder. Hits from one shoulder will detonate all of the opposite shoulder's primers when present. When detonated, each offensive primer deals 100% weapon damage, while each defensive primer grants +4% bonus armor and +10% amplified damage to armor plates for 5s. Primer effectiveness is doubled at 10 stacks.",
    talentType: "exoticWeapon",
  },
  {
    talentId: "high-priority-target", talentName: "High Priority Target", talentIcon: "",
    talentDesc: "Amplifies Weapon Damage by 125% to the highest ranking enemies currently in combat. Tier 1: Hunter, Rogue, Leader, Tank, Shield, Heavy Weapons, RPG, Medic, Controller, Warhound, Marauder. Tier 2: Support, Engineer, Bodyguard, Immobilizer, Bomber, Mini Tank, Drone Operator. Tier 3: Any other enemy or skill proxy.",
    talentType: "exoticWeapon",
  },
  {
    talentId: "in-plain-sight", talentName: "In Plain Sight", talentIcon: "",
    talentDesc: "Your scoped view displays additional information about enemies not targeting you. Headshot and weakpoint damage against enemies not targeting you is amplified by 50%. Headshot kills reset the cooldown of your Decoy Skill. This bonus will wait until the Decoy goes on cooldown if currently active.",
    talentType: "exoticWeapon",
  },
  {
    talentId: "incessant-chatter", talentName: "Incessant Chatter", talentIcon: "",
    talentDesc: "When you reload, rate of fire is increased by 25% for each enemy within 15m for the duration of that magazine. Max stacks: 5. Kills refill 50% of your magazine.",
    talentType: "exoticWeapon",
  },
  {
    talentId: "liberty-or-death", talentName: "Liberty or Death", talentIcon: "",
    talentDesc: "Hits grant +2% weapon damage. Stacks up to 30 times. Headshots consume all stacks, repairing your shield for 3% per stack.",
    talentType: "exoticWeapon",
  },
  {
    talentId: "mosquito-song", talentName: "Mosquito Song", talentIcon: "",
    talentDesc: "Hitting an enemy applies a stack. Stacks are shared between players. At 5 stacks, the enemy will forcefully target the last player to apply a stack for 5s and take 25% more damage to armor. Stacks deplete every 5s. Activating the effect on an enemy will remove all stacks from other enemies.",
    talentType: "exoticWeapon",
  },
  {
    talentId: "ortiz-assault-interface", talentName: "Ortiz Assault Interface", talentIcon: "",
    talentDesc: "While scoped, the weapon will highlight a random body section of each enemy. The weapon amplifies damage by +60% Weapon Damage to highlighted body sections.",
    talentType: "exoticWeapon",
  },
  {
    talentId: "pakhan", talentName: "Pakhan", talentIcon: "",
    talentDesc: "Each kill with this weapon gains a stack of 75% Base Magazine Size increase to the next magazine, up to 4 stacks.",
    talentType: "exoticWeapon",
  },
  {
    talentId: "payment-in-kind", talentName: "Payment in Kind", talentIcon: "",
    talentDesc: "Dealing damage to enemies adds a stack of 2% Critical Hit Damage, up to 100 stacks, lasting 10s. On reload, apply a 10s bleed to yourself which deals 0.5% armor damage per stack.",
    talentType: "exoticWeapon",
  },
  {
    talentId: "plague-of-the-outcasts", talentName: "Plague of the Outcasts", talentIcon: "",
    talentDesc: "Hits apply a debuff dealing 100% weapon damage over 10s. This stacks up to 50 times. Whenever an enemy dies with this debuff, the stacks are transferred to a nearby enemy within 25m.",
    talentType: "exoticWeapon",
  },
  {
    talentId: "regicide", talentName: "Regicide", talentIcon: "",
    talentDesc: "Headshot Kills create a 5m explosion, dealing 400% weapon damage and applying bleed to all enemies hit.",
    talentType: "exoticWeapon",
  },
  {
    talentId: "restrained", talentName: "Restrained", talentIcon: "",
    talentDesc: "The pistol is fully automatic and deals +25% Amplified Damage for 20s after your Shield gets broken.",
    talentType: "exoticWeapon",
  },
  {
    talentId: "rule-them-all", talentName: "Rule Them All", talentIcon: "",
    talentDesc: "When the agent has a Status Effect applied to them, 50% of the ammo in their next magazine will apply the same Status Effect to their targets. This effect will only occur during combat.",
    talentType: "exoticWeapon",
  },
  {
    talentId: "sandman", talentName: "Sandman", talentIcon: "",
    talentDesc: "Melee attacks instantly kill non-elite enemies. Cooldown: 15s.",
    talentType: "exoticWeapon",
  },
  {
    talentId: "septic-shock", talentName: "Septic Shock", talentIcon: "",
    talentDesc: "Shooting a target applies stacks of venom, which last for 10s. Increasing stacks adds more severe debuffs. 2 stacks: Poison. 4 stacks: Disorient. 6 stacks: Shock. 9 stacks: Target takes additional 20% damage from all sources — stacks no longer increase. Duration of Status Effects is based on percentage of pellets hit on applying shot.",
    talentType: "exoticWeapon",
  },
  {
    talentId: "symbiosis", talentName: "Symbiosis", talentIcon: "",
    talentDesc: "While having a Shield deployed, lose Shield Health at a rate of 10% per second. Your Shield receives repairs of 25% of the damage dealt by this weapon.",
    talentType: "exoticWeapon",
  },
  {
    talentId: "the-trap", talentName: "The Trap", talentIcon: "",
    talentDesc: "Tags enemies when in scope (maximum 10). If Agent kills any marked target with a headshot, all other targets will have 50% reduced movement speed and receive burn for 10 seconds. Cooldown 30 seconds. Killing another enemy with a headshot will shorten the cooldown by 10 seconds. Targets are marked after 1 second in crosshair.",
    talentType: "exoticWeapon",
  },
  {
    talentId: "transfusion", talentName: "Transfusion", talentIcon: "",
    talentDesc: "Hitting headshots builds stacks up to a max of 8. When shooting an Ally or Skill, repair them for 50% of the shot damage for each stack. Healed Allies receive 200% of your Repair Skills bonus as Bonus Armor for each stack for 10 seconds. All hits become guaranteed headshots for 8 seconds after healing an Ally or Skill while at maximum stacks.",
    talentType: "exoticWeapon",
  },
  {
    talentId: "unnerve", talentName: "Unnerve", talentIcon: "",
    talentDesc: "Killing an enemy will apply a mark on every enemy within 20m of it. Multiple marks can be applied to the same enemy. Max number of marks that can be applied to an enemy is 5. All marks on an enemy will disappear 10s after the last one has been applied. Deal +15% Amplified Damage per mark to marked enemies.",
    talentType: "exoticWeapon",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// EXOTIC WEAPONS
// ─────────────────────────────────────────────────────────────────────────────

export const EXOTIC_WEAPONS: ExoticWeapon[] = [

  // ── ASSAULT RIFLES ──────────────────────────────────────────────────────────
  {
    weaponId: "chameleon", weaponName: "Chameleon", baseModel: "Kriss Vector", type: "Assault Rifle",
    talentId: "adaptive-instincts",
    fixedMods: { optics: "+15% Critical Hit Chance", magazine: "+20 Rounds", muzzle: "+20% Accuracy", underbarrel: "+10% Stability" },
    dropLocation: "Bounties / Target loot / Exotic Caches",
    flavorText: "The Chameleon is coated in a light-refracting technology designed by a DARPA research team.",
  },
  {
    weaponId: "eagle-bearer", weaponName: "Eagle Bearer", baseModel: "P416 G3", type: "Assault Rifle",
    talentId: "eagle-strike",
    fixedMods: { optics: "+15% Critical Hit Chance", magazine: "+30 Rounds", muzzle: "+20% Critical Hit Damage", underbarrel: "+10% Weapon Handling" },
    dropLocation: "Operation Dark Hours (Normal only)",
    flavorText: "\"For tireless defense and service in the wake of our shared national tragedy, we present this to Odessa Sawyer. May she always rise to meet the challenges in her path.\" - The People of the Theatre settlement",
  },
  {
    weaponId: "st-elmos-engine", weaponName: "St. Elmo's Engine", baseModel: "LVOA-C", type: "Assault Rifle",
    talentId: "actum-est",
    fixedMods: { optics: "+15% Critical Hit Damage", magazine: "+30 Rounds", muzzle: "+15% Critical Hit Chance", underbarrel: "+10% Weapon Handling" },
    dropLocation: "Year 5 Season 1 track / Target loot / Exotic Caches",
    flavorText: "\"Sometimes the most beautiful and dangerous phenomenon is natural.\" - anonymous",
  },
  {
    weaponId: "the-bighorn", weaponName: "The Bighorn", baseModel: "Aug A3-CQC", type: "Assault Rifle",
    talentId: "big-game-hunter",
    fixedMods: { optics: "+40% Headshot Damage", magazine: "+20% Reload Speed", muzzle: "+20% Accuracy", underbarrel: "+20% Stability" },
    dropLocation: "Legendary bosses (5%) / DZ (extremely low chance)",
    flavorText: "\"Take aim. Take a breath. Steady yourself. Concentrate. Exhale. Squeeze.\"",
  },
  {
    weaponId: "strega", weaponName: "Strega", baseModel: "FAL", type: "Assault Rifle",
    talentId: "unnerve",
    fixedMods: { optics: "+5% Critical Hit Chance", magazine: "+20 Rounds", muzzle: "+5% Critical Hit Damage", underbarrel: "+10% Weapon Handling" },
    dropLocation: "Target loot / Exotic Caches",
    flavorText: "\"this is no longer about prevention. It's about damage control.\" - Colonel Antwon Ridgeway",
  },
  {
    weaponId: "capacitor", weaponName: "Capacitor", baseModel: "PDR", type: "Assault Rifle",
    talentId: "capacitance",
    fixedMods: { mainAttribute: "12% Damage to Armour", optics: "+10% Critical Hit Chance", magazine: "+11 Rounds", muzzle: "+30% Critical Hit Damage", underbarrel: "+10% Weapon Handling" },
    dropLocation: "The Summit challenges / Target loot / Exotic Caches",
    flavorText: "\"My two favourite things are: cut and crossed wires, and electric fires. Luckily those two tend to go hand in hand. Let's spark it up, then burn it down.\" - Former Black Tusk technician",
  },

  // ── LIGHT MACHINE GUNS ──────────────────────────────────────────────────────
  {
    weaponId: "bullet-king", weaponName: "Bullet King", baseModel: "IWI NEGEV", type: "Light Machine Gun",
    talentId: "bullet-hell",
    fixedMods: { magazine: "Mag of Holding", muzzle: "+15% Critical Hit Chance", underbarrel: "+20% Stability" },
    dropLocation: "Rikers bosses / Target loot / Exotic Caches",
    flavorText: "\"Pour one out for my bro. If he'd used this, he'd never have run out of bullets.\" - The Bullet Queen",
  },
  {
    weaponId: "bluescreen", weaponName: "Bluescreen", baseModel: "Stoner LAMG", type: "Light Machine Gun",
    talentId: "disruptor-rounds",
    fixedMods: { optics: "+20% Reload Speed", magazine: "+15% Weapon Handling", muzzle: "+20% Rate of Fire", underbarrel: "+10% Stability" },
    dropLocation: "Season 9 Track / Target loot / Exotic Caches",
    flavorText: "Cause of death? ... User Error.",
  },
  {
    weaponId: "iron-lung", weaponName: "Iron Lung", baseModel: "MG5", type: "Light Machine Gun",
    talentId: "ardent",
    fixedMods: { optics: "+10% Critical Hit Damage", magazine: "+35 Rounds", underbarrel: "+10% Critical Hit Damage" },
    dropLocation: "Target loot / Exotic Caches",
    flavorText: "\"Arson is a made-up crime. Some people deserve to burn.\" - The Arsonist",
  },
  {
    weaponId: "pakhan", weaponName: "Pakhan", baseModel: "RPK", type: "Light Machine Gun",
    talentId: "pakhan",
    fixedMods: { optics: "+15% Weapon Damage", magazine: "+20 Rounds", muzzle: "+15% Critical Hit Chance", underbarrel: "+10% Reload Speed" },
    dropLocation: "Year 7 Season 1 track / Target loot / Exotic Caches",
    flavorText: "Pack another one of those big mags",
  },
  {
    weaponId: "pestilence", weaponName: "Pestilence", baseModel: "M249", type: "Light Machine Gun",
    talentId: "plague-of-the-outcasts",
    fixedMods: { magazine: "+10% Rate of Fire", muzzle: "+10% Accuracy", underbarrel: "+10% Stability" },
    dropLocation: "DZ Landmark boss / DZ Roaming boss (1%) / Target loot / Exotic Caches",
    flavorText: "\"You will suffer as we suffered\" - Formerly Quarantined Outcast",
  },

  // ── SUBMACHINE GUNS ─────────────────────────────────────────────────────────
  {
    weaponId: "backfire", weaponName: "Backfire", baseModel: "MPX", type: "Submachine Gun",
    talentId: "payment-in-kind",
    fixedMods: { optics: "+15% Critical Hit Chance", magazine: "+20 Rounds", muzzle: "+15% Critical Hit Damage", underbarrel: "+10% Stability" },
    dropLocation: "Season 3 track / Target loot / Exotic Caches",
    flavorText: "\"For only those who have suffered may decree the suffering of others!\" - Outcast Creed",
  },
  {
    weaponId: "the-chatterbox", weaponName: "The Chatterbox", baseModel: "FN P90", type: "Submachine Gun",
    talentId: "incessant-chatter",
    fixedMods: { optics: "+15% Critical Hit Chance", magazine: "+10 Rounds", muzzle: "+15% Critical Hit Damage", underbarrel: "+10% Weapon Handling" },
    dropLocation: "Hyena Cache questline / Target loot / Exotic Caches",
    flavorText: "\"They say I never know when to shut the hell up, but that's just the spice talking\" - Dime, Hyenas Councilmember",
  },
  {
    weaponId: "lady-death", weaponName: "Lady Death", baseModel: "CMMG Banshee", type: "Submachine Gun",
    talentId: "breathe-free",
    fixedMods: { optics: "+15% Critical Hit Chance", magazine: "+10% Reload Speed", muzzle: "+10% Critical Hit Damage", underbarrel: "+500% Melee Damage" },
    dropLocation: "22 NY open world bosses (3%) / Target loot / Exotic Caches",
    flavorText: "\"Can't take our freedom? That's a lie. Your freedom can always be taken. The only thing standing between you and tyranny is the barrel of your gun\" - 2A Enthusiast",
  },
  {
    weaponId: "ouroboros", weaponName: "Ouroboros", baseModel: "Vector SBR .45 ACP", type: "Submachine Gun",
    talentId: "rule-them-all",
    fixedMods: { optics: "+10% Critical Hit Damage", magazine: "+25% Reload Speed", muzzle: "+10% Rate of Fire", underbarrel: "+10% Critical Hit Chance" },
    dropLocation: "Incursions Chest (10%) / Incursions Boss (1%)",
    flavorText: "\"What goes around, inevitably comes around.\" - Aaron \"Vanguard\" Keener",
  },
  {
    weaponId: "oxpecker", weaponName: "Oxpecker", baseModel: "MP7", type: "Submachine Gun",
    talentId: "symbiosis",
    fixedMods: { optics: "+50% Optimal Range", muzzle: "+10 Rounds", underbarrel: "+15% Critical Hit Chance" },
    dropLocation: "Year 6 Season 3 track / Target loot / Exotic Caches",
    flavorText: "The healing is less rewarding than the hurting, but i'm content.",
  },

  // ── SHOTGUNS ────────────────────────────────────────────────────────────────
  {
    weaponId: "lullaby", weaponName: "Lullaby", baseModel: "SPAS-12", type: "Shotgun",
    talentId: "sandman",
    fixedMods: { optics: "+15% Accuracy", magazine: "+15% Reload Speed", underbarrel: "+25% Optimal Range" },
    dropLocation: "Pre-Order / Deluxe Pack",
    flavorText: "\"Sleep tight, motherfucker\" - Roach, Hyenas Councilmember",
  },
  {
    weaponId: "sweet-dreams", weaponName: "Sweet Dreams", baseModel: "SPAS-12", type: "Shotgun",
    talentId: "sandman",
    fixedMods: { optics: "+15% Accuracy", muzzle: "+15% Reload Speed", underbarrel: "+25% Optimal Range" },
    dropLocation: "Outcast bosses / Target loot / Exotic Caches",
    flavorText: "\"Who are you to disagree?\" - Unknown Outcast Engineer",
  },
  {
    weaponId: "overlord", weaponName: "Overlord", baseModel: "KSG", type: "Shotgun",
    talentId: "capitulate",
    fixedMods: { optics: "+15% Critical Hit Damage", magazine: "+15% Reload Speed", underbarrel: "+20% Weapon Stability" },
    dropLocation: "Target loot / Exotic Caches",
    flavorText: "\"If this is what it takes to make them submit, so be it.\" - Dime",
  },
  {
    weaponId: "the-sheriff", weaponName: "The Sheriff", baseModel: "Super 90", type: "Shotgun",
    talentId: "autentico",
    fixedMods: {},
    dropLocation: "Unknown",
  },
  {
    weaponId: "scorpio", weaponName: "Scorpio", baseModel: "Six12", type: "Shotgun",
    talentId: "septic-shock",
    fixedMods: { optics: "+10% Critical Hit Chance", magazine: "+10% Reload Speed", muzzle: "+10% Stability", underbarrel: "+10% Weapon Handling" },
    dropLocation: "Season 4 track / Target loot / Exotic Caches",
    flavorText: "This weapon fires debilitating venomous rounds inspired by the scorpion (specifically Hottentotta). The weapon developed in conjunction with DARPA failed to get approval due to it being in contravention of the Hague Convention of 1899.",
  },

  // ── RIFLES ──────────────────────────────────────────────────────────────────
  {
    weaponId: "ruthless", weaponName: "Ruthless", baseModel: "AKM", type: "Rifle",
    talentId: "binary-trigger",
    fixedMods: { optics: "+15% Accuracy", magazine: "+10% Reload Speed", muzzle: "+15% Stability", underbarrel: "+15% Weapon Handling" },
    dropLocation: "Pre-Order / Deluxe Pack",
    flavorText: "\"Maintaining power requires one to be ruthless. Absolutely ruthless.\" - Mayhem, Hyena Councilmember",
  },
  {
    weaponId: "merciless", weaponName: "Merciless", baseModel: "AKM", type: "Rifle",
    talentId: "binary-trigger",
    fixedMods: { optics: "+15% Accuracy", magazine: "+10% Reload Speed", muzzle: "+15% Stability", underbarrel: "+15% Weapon Handling" },
    dropLocation: "Hyena bosses / Target loot / Exotic Caches",
    flavorText: "\"Some people say I lack empathy. They're wrong. What I lack is mercy.\" - Zodiac, Hyenas Councilmember",
  },
  {
    weaponId: "diamondback", weaponName: "Diamondback", baseModel: "1886", type: "Rifle",
    talentId: "agonizing-bite",
    fixedMods: { optics: "+10% Accuracy", magazine: "+10% Reload Speed", muzzle: "+15% Critical Hit Damage", underbarrel: "+10% Stability" },
    dropLocation: "Kenly College end cache / Target loot / Exotic Caches",
    flavorText: "\"I don't give a damn if it's not an actual Diamondback. I'll call it whatever I want, and I like the name.\" - Manning National Zoo Reptile Keeper",
  },
  {
    weaponId: "doctor-home", weaponName: "Doctor Home", baseModel: "M1A CQB", type: "Rifle",
    talentId: "doctor-home",
    fixedMods: { optics: "+10% Accuracy", magazine: "+10% Reload Speed", muzzle: "+10% Stability", underbarrel: "+10% Weapon Handling" },
    dropLocation: "Season 10 Manhunt Reward / Target loot / Exotic Caches",
    flavorText: "A house isn't a home until you can defend it.",
  },
  {
    weaponId: "bittersweet", weaponName: "Bittersweet", baseModel: "Classic M1A", type: "Rifle",
    talentId: "transfusion",
    fixedMods: { optics: "+5% Headshot Damage", magazine: "+10 Rounds", underbarrel: "+5% Headshot Damage" },
    dropLocation: "Year 7 Season 3 pass",
  },
  {
    weaponId: "the-ravenous", weaponName: "The Ravenous", baseModel: "SIG 716", type: "Rifle",
    talentId: "geri-and-freki",
    fixedMods: { optics: "+5% Critical Hit Chance", magazine: "+10% Reload Speed", muzzle: "+10% Stability", underbarrel: "+5% Critical Hit Damage" },
    dropLocation: "Operation Iron Horse (Normal only)",
    flavorText: "Geri and Freki, hounds of Odin, roam the battlefield eternal; greedy for the corpses of those who have fallen. Go forth, warrior of Odin, and hunt; slake their thirst",
  },
  {
    weaponId: "vindicator", weaponName: "Vindicator", baseModel: "Modified Desert Tech MDR", type: "Rifle",
    talentId: "ortiz-assault-interface",
    fixedMods: { optics: "+15% Accuracy", magazine: "+5 Rounds", muzzle: "+10% Optimal Range", underbarrel: "+15% Stability" },
    dropLocation: "NSA store (Descent game mode currency)",
    flavorText: "\"If this works half as well in the field as it does in the simulation, this could be a game changer.\" - Calvin McManus",
  },

  // ── MARKSMAN RIFLES ─────────────────────────────────────────────────────────
  {
    weaponId: "sacrum-imperium", weaponName: "Sacrum Imperium", baseModel: "G28 Marksmen Rifle", type: "Marksman Rifle",
    talentId: "the-trap",
    fixedMods: { optics: "+20% Headshot Damage", magazine: "+10% Headshot Damage", muzzle: "+20% Optimal Range", underbarrel: "+20% Stability" },
    dropLocation: "Season 11 track / Target loot / Exotic Caches",
    flavorText: "By holy light, may this help me execute divine right. - The Priest",
  },
  {
    weaponId: "dread-edict", weaponName: "Dread Edict", baseModel: "SVD", type: "Marksman Rifle",
    talentId: "full-stop",
    fixedMods: { optics: "+40% Headshot Damage", magazine: "+15% Weapon Handling", muzzle: "+10% Critical Hit Chance", underbarrel: "+10% Stability" },
    dropLocation: "Season 9 Track / Target loot / Exotic Caches",
    flavorText: "You know not the count of the syllables in the utterance of your condemnation, but you will know when you hear the last one.",
  },
  {
    weaponId: "nemesis", weaponName: "Nemesis", baseModel: "Custom AWM", type: "Marksman Rifle",
    talentId: "electromagnetic-accelerator",
    fixedMods: { optics: "+45% Headshot Damage", magazine: "+10% Reload Speed", muzzle: "+5% Critical Hit Damage", underbarrel: "+5% Weapon Handling" },
    dropLocation: "Invaded strongholds questline (blueprint at Grand Washington) / Target loot / Exotic Caches",
    flavorText: "\"I watch the watchmen\" - Phaedra \"Puck\" Lao, Black Tusk sniper",
  },
  {
    weaponId: "shroud", weaponName: "Shroud", baseModel: "M700 Carbon", type: "Marksman Rifle",
    talentId: "high-priority-target",
    fixedMods: { optics: "+25% Headshot Damage", magazine: "+25% Reload Speed", muzzle: "+20% Headshot Damage", underbarrel: "+5% Critical Hit Chance" },
    dropLocation: "Year 7 Season 2 track / Target loot / Exotic Caches",
    flavorText: "\"The bigger they are.\"",
  },
  {
    weaponId: "mantis", weaponName: "Mantis", baseModel: "SRS-A1", type: "Marksman Rifle",
    talentId: "in-plain-sight",
    fixedMods: { optics: "+40% Headshot Damage", magazine: "+10% Reload Speed", muzzle: "+5% Critical Hit Chance", underbarrel: "+10% Stability" },
    dropLocation: "Season 2 track / Target loot / Exotic Caches",
    flavorText: "\"Camouflage is about more than just blending in. You ever heard the term 'aggressive mimicry?' Anyone can hide and wait for the perfect kill, but why wait when you can seduce\" - Sid \"Maneater\" Madison",
  },

  // ── PISTOLS ─────────────────────────────────────────────────────────────────
  {
    weaponId: "liberty", weaponName: "Liberty", baseModel: "D50 (Desert Eagle)", type: "Pistol",
    talentId: "liberty-or-death",
    fixedMods: { optics: "+5% Headshot Damage", magazine: "+15% Weapon Handling", muzzle: "+5% Critical Hit Chance", underbarrel: "+15% Rate of Fire" },
    dropLocation: "True Sons missions questline (Capitol, American History, Viewpoint, Space Admin) / Target loot / Exotic Caches",
    flavorText: "\"This gave me liberty as it gave others death. Respect it, and it will respect you.\" - General Ridgeway",
  },
  {
    weaponId: "busy-little-bee", weaponName: "Busy Little Bee", baseModel: "PF45", type: "Pistol",
    talentId: "busy-little-bee",
    fixedMods: { optics: "+25% Optimal Range", magazine: "+10% Reload Speed", muzzle: "+10% Stability", underbarrel: "+5% Critical Hit Chance" },
    dropLocation: "Season 10 Track (TU16) / Target loot / Exotic Caches",
    flavorText: "\"Practically perfect in every way. As long as you never miss.\"",
  },
  {
    weaponId: "regulus", weaponName: "Regulus", baseModel: "Magnum", type: "Pistol",
    talentId: "regicide",
    fixedMods: { magazine: "+10% Reload Speed", muzzle: "+20% Accuracy" },
    dropLocation: "Iron Horse Raid Project",
    flavorText: "\"Cast your stones at king on thrones. but at the end rats gnaw on our bones.\" - Javier Kajika",
  },
  {
    weaponId: "tempest", weaponName: "Tempest", baseModel: "M93R", type: "Pistol",
    talentId: "restrained",
    fixedMods: { magazine: "+50% Stability", muzzle: "+15% Critical Hit Chance" },
    dropLocation: "Y7S2 Climax mission (master difficulty) / Summit Floor 100",
    flavorText: "Semi-Auto? I don't have such weaknesses",
  },
  {
    weaponId: "mosquito", weaponName: "Mosquito", baseModel: "M9", type: "Pistol",
    talentId: "mosquito-song",
    fixedMods: { magazine: "+15% Reload Speed", muzzle: "+15% Weapon Accuracy" },
    dropLocation: "Target loot / Exotic Caches",
    flavorText: "\"Time to come out of hibernation, Agent. There's work to do.\" - Calvin McManus",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Derived helpers
// ─────────────────────────────────────────────────────────────────────────────

export const EXOTIC_TALENT_MAP  = new Map(EXOTIC_TALENTS.map(t => [t.talentId, t]));
export const EXOTIC_WEAPON_MAP  = new Map(EXOTIC_WEAPONS.map(w => [w.weaponId, w]));
export const EXOTIC_WEAPON_TYPES = [...new Set(EXOTIC_WEAPONS.map(w => w.type))];
