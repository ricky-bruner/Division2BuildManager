export type { WeaponType, TalentType, Talent, UniqueAttribute } from "./weaponTypes";
import type { WeaponType, Talent, UniqueAttribute } from "./weaponTypes";

// ─────────────────────────────────────────────────────────────────────────────
// Named Weapon
// ─────────────────────────────────────────────────────────────────────────────

export interface NamedWeapon {
  weaponId:          string;
  weaponName:        string;
  baseModel:         string;
  type:              WeaponType;
  /** References Talent.talentId — null when weapon carries a UniqueAttribute instead */
  talentId:          string | null;
  /** References UniqueAttribute.attributeId — null when weapon carries a Talent instead */
  uniqueAttributeId: string | null;
  dropLocation:      string;
  flavorText?:       string;
}

// ─────────────────────────────────────────────────────────────────────────────
// TALENTS
// ─────────────────────────────────────────────────────────────────────────────

export const TALENTS: Talent[] = [

  // ── Perfect Weapon Talents ─────────────────────────────────────────────────
  {
    talentId: "perfect-allegro", talentName: "Perfect Allegro", talentIcon: "",
    talentDesc: "+15% Rate of fire.",
    talentType: "perfectWeapon",
  },
  {
    talentId: "perfect-boomerang", talentName: "Perfect Boomerang", talentIcon: "",
    talentDesc: "Critical hits have a 75% chance to return the bullet to the magazine. If a bullet is returned to the magazine, the next shot has 50% increased damage.",
    talentType: "perfectWeapon",
  },
  {
    talentId: "perfect-brazen", talentName: "Perfect Brazen", talentIcon: "",
    talentDesc: "Receive +1% Amplified Damage on the next shot with the weapon for each pellet that hits the target, if at least 4 pellets hit.",
    talentType: "perfectWeapon",
  },
  {
    talentId: "perfect-breadbasket", talentName: "Perfect Breadbasket", talentIcon: "",
    talentDesc: "Landing body shots adds a stack of bonus 70% headshot damage to the next headshot for 10 seconds. Max stack is 2.",
    talentType: "perfectWeapon",
  },
  {
    talentId: "perfectly-accurate", talentName: "Perfectly Accurate", talentIcon: "",
    talentDesc: "Increases accuracy by 80%.",
    talentType: "perfectWeapon",
  },
  {
    talentId: "perfectly-behind-you", talentName: "Perfectly Behind You", talentIcon: "",
    talentDesc: "Amplifies weapon damage by +25% to enemies that are not targeting you.",
    talentType: "perfectWeapon",
  },
  {
    talentId: "perfectly-close-and-personal", talentName: "Perfectly Close & Personal", talentIcon: "",
    talentDesc: "Killing a target within 7 meters grants 38% weapon damage for 10 seconds.",
    talentType: "perfectWeapon",
  },
  {
    talentId: "perfectly-determined", talentName: "Perfectly Determined", talentIcon: "",
    talentDesc: "After killing an enemy with a headshot the next shot landed on any enemy will be a guaranteed (critical) headshot. While the talent is active, killing an enemy will not retrigger the talent.",
    talentType: "perfectWeapon",
  },
  {
    talentId: "perfect-distance", talentName: "Perfect Distance", talentIcon: "",
    talentDesc: "Increase optimal range by 100%.",
    talentType: "perfectWeapon",
  },
  {
    talentId: "perfect-eyeless", talentName: "Perfect Eyeless", talentIcon: "",
    talentDesc: "Deal 35% weapon damage to blinded enemies. After 3 kills, applies blind to the next enemy you hit.",
    talentType: "perfectWeapon",
  },
  {
    talentId: "perfect-fast-hands", talentName: "Perfect Fast Hands", talentIcon: "",
    talentDesc: "Critical hits add a stack of 5% reload speed bonus. Max stack is 40.",
    talentType: "perfectWeapon",
  },
  {
    talentId: "perfect-finisher", talentName: "Perfect Finisher", talentIcon: "",
    talentDesc: "Swapping from this weapon within 10 seconds of killing an enemy grants 35% critical hit chance and 40% critical hit damage for 15 seconds.",
    talentType: "perfectWeapon",
  },
  {
    talentId: "perfect-first-blood", talentName: "Perfect First Blood", talentIcon: "",
    talentDesc: "If scoped, your first 2 shots fired from out of combat or after fully reloading from empty deal headshot damage to any part of the body hit. Requires a Scope with 8x magnification or higher.",
    talentType: "perfectWeapon",
  },
  {
    talentId: "perfect-flatline", talentName: "Perfect Flatline", talentIcon: "",
    talentDesc: "Amplifies weapon damage by 20% to pulsed enemies. After 3 kills, applies pulse to the next enemy you hit.",
    talentType: "perfectWeapon",
  },
  {
    talentId: "perfect-frenzy", talentName: "Perfect Frenzy", talentIcon: "",
    talentDesc: "For every 8 bullets in the magazine capacity, gain 3% rate of fire and 3% weapon damage for 9 seconds when reloading from empty.",
    talentType: "perfectWeapon",
  },
  {
    talentId: "perfectly-ignited", talentName: "Perfectly Ignited", talentIcon: "",
    talentDesc: "Deal 30% weapon damage to burning enemies. After 3 kills, applies burning to the next enemy you hit.",
    talentType: "perfectWeapon",
  },
  {
    talentId: "perfect-immobilize", talentName: "Perfect Immobilize", talentIcon: "",
    talentDesc: "Amplifies weapon damage by 25% to ensnared enemies. After 3 kills applies Ensnare to the next enemy you hit.",
    talentType: "perfectWeapon",
  },
  {
    talentId: "perfectly-in-sync", talentName: "Perfectly In Sync", talentIcon: "",
    talentDesc: "Hitting an enemy grants +20% skill damage for 5s. Using a skill or damaging an enemy with a skill grants +20% weapon damage for 5s. Damage increases are doubled while both buffs are active at the same time.",
    talentType: "perfectWeapon",
  },
  {
    talentId: "perfect-jazz-hands", talentName: "Perfect Jazz Hands", talentIcon: "",
    talentDesc: "Increase reload speed by 50%.",
    talentType: "perfectWeapon",
  },
  {
    talentId: "perfect-killer", talentName: "Perfect Killer", talentIcon: "",
    talentDesc: "Killing an enemy with a critical hit grants 90% critical hit damage for 10 seconds.",
    talentType: "perfectWeapon",
  },
  {
    talentId: "perfect-lucky-shot", talentName: "Perfect Lucky Shot", talentIcon: "",
    talentDesc: "Magazine capacity is increased by 30%. Missed shots from cover have a 100% chance to return to the magazine.",
    talentType: "perfectWeapon",
  },
  {
    talentId: "perfectly-measured", talentName: "Perfectly Measured", talentIcon: "",
    talentDesc: "The top half of the magazine has +25% rate of fire and -30% weapon damage. The bottom half of the magazine has -18% rate of fire and +38% weapon damage.",
    talentType: "perfectWeapon",
  },
  {
    talentId: "perfectly-naked", talentName: "Perfectly Naked", talentIcon: "",
    talentDesc: "Hitting an enemy with no armor grants 50% headshot damage for 8 seconds.",
    talentType: "perfectWeapon",
  },
  {
    talentId: "perfectly-near-sighted", talentName: "Perfectly Near Sighted", talentIcon: "",
    talentDesc: "Receive 100% stability at the cost of 35% optimal range.",
    talentType: "perfectWeapon",
  },
  {
    talentId: "perfect-on-empty", talentName: "Perfect On Empty", talentIcon: "",
    talentDesc: "Reloading from empty grants 80% weapon handling for 10 seconds.",
    talentType: "perfectWeapon",
  },
  {
    talentId: "perfect-optimist", talentName: "Perfect Optimist", talentIcon: "",
    talentDesc: "Weapon damage is increased by 4.5% for every 10% ammo missing from the magazine.",
    talentType: "perfectWeapon",
  },
  {
    talentId: "perfect-outsider", talentName: "Perfect Outsider", talentIcon: "",
    talentDesc: "After killing an enemy, gain 150% optimal range and 125% accuracy for 10 seconds.",
    talentType: "perfectWeapon",
  },
  {
    talentId: "perfect-overwhelm", talentName: "Perfect Overwhelm", talentIcon: "",
    talentDesc: "Suppressing an enemy (that is not currently suppressed) grants 12% weapon damage for 12 seconds. Max stack is 4.",
    talentType: "perfectWeapon",
  },
  {
    talentId: "perfectly-overflowing", talentName: "Perfectly Overflowing", talentIcon: "",
    talentDesc: "Every 2 reloads from empty increases your base magazine capacity by 100%.",
    talentType: "perfectWeapon",
  },
  {
    talentId: "perfect-perpetuation", talentName: "Perfect Perpetuation", talentIcon: "",
    talentDesc: "Headshots grant 75% status effect damage and duration to the next status effect you apply. Cooldown is 16 seconds.",
    talentType: "perfectWeapon",
  },
  {
    talentId: "perfect-precision-strike", talentName: "Perfect Precision Strike", talentIcon: "",
    talentDesc: "Killing enemies farther than 20m builds up stacks. Max stack is 2. Hitting an enemy within 20m will use all stacks to provide +35% Amplified Damage to enemies within 20m for 5s.",
    talentType: "perfectWeapon",
  },
  {
    talentId: "perfect-preservation", talentName: "Perfect Preservation", talentIcon: "",
    talentDesc: "Killing an enemy repairs 15% armor over 5 seconds. Headshot kills improves the repair to 30%.",
    talentType: "perfectWeapon",
  },
  {
    talentId: "perfect-pressure-point", talentName: "Perfect Pressure Point", talentIcon: "",
    talentDesc: "Amplifies weapon damage by 20% to enemies under status effects.",
    talentType: "perfectWeapon",
  },
  {
    talentId: "perfect-pummel", talentName: "Perfect Pummel", talentIcon: "",
    talentDesc: "2 consecutive kills refill the magazine and grant 40% weapon damage for 10 seconds.",
    talentType: "perfectWeapon",
  },
  {
    talentId: "perfect-pumped-up", talentName: "Perfect Pumped Up", talentIcon: "",
    talentDesc: "Reloading grants 6% weapon damage for 10 seconds. Stacks up to 5 times.",
    talentType: "perfectWeapon",
  },
  {
    talentId: "perfect-ranger", talentName: "Perfect Ranger", talentIcon: "",
    talentDesc: "Amplifies weapon damage by 2% for every 3 meters you are away from the target.",
    talentType: "perfectWeapon",
  },
  {
    talentId: "perfect-reformation", talentName: "Perfect Reformation", talentIcon: "",
    talentDesc: "Headshots grant 80% skill repair for 15 seconds.",
    talentType: "perfectWeapon",
  },
  {
    talentId: "perfect-rifleman", talentName: "Perfect Rifleman", talentIcon: "",
    talentDesc: "Landing headshots adds a stack of bonus 11% weapon damage for 5 seconds. Max stack is 6. Additional headshots refresh the duration.",
    talentType: "perfectWeapon",
  },
  {
    talentId: "perfect-sadist", talentName: "Perfect Sadist", talentIcon: "",
    talentDesc: "Deal +35% weapon damage to bleeding enemies. After 3 kills, applies bleed to the next enemy you hit.",
    talentType: "perfectWeapon",
  },
  {
    talentId: "perfect-salvage", talentName: "Perfect Salvage", talentIcon: "",
    talentDesc: "Killing a target has a 85% chance to refill the magazine.",
    talentType: "perfectWeapon",
  },
  {
    talentId: "perfect-sledgehammer", talentName: "Perfect Sledgehammer", talentIcon: "",
    talentDesc: "Dealing damage with a grenade applies a mark on target. Targets with marks take 40% more damage to armor and -10% movement speed.",
    talentType: "perfectWeapon",
  },
  {
    talentId: "perfect-soft-spot", talentName: "Perfect Soft Spot", talentIcon: "",
    talentDesc: "Destroying a Weakpoint grants 24% Weapon Damage for 15s.",
    talentType: "perfectWeapon",
  },
  {
    talentId: "perfect-spike", talentName: "Perfect Spike", talentIcon: "",
    talentDesc: "Headshots grant 25% skill damage for 15 seconds.",
    talentType: "perfectWeapon",
  },
  {
    talentId: "perfect-stabilize", talentName: "Perfect Stabilize", talentIcon: "",
    talentDesc: "1% Weapon Accuracy and +1% Weapon Stability per bullet shot, up to 75%. Stopping shooting will start a timer of 6 seconds, after which the bonuses reset.",
    talentType: "perfectWeapon",
  },
  {
    talentId: "perfectly-steady-handed", talentName: "Perfectly Steady Handed", talentIcon: "",
    talentDesc: "Hits grant a stack of 1% accuracy and stability. At 75 stacks, consumes them to refill the magazine.",
    talentType: "perfectWeapon",
  },
  {
    talentId: "perfect-streamline", talentName: "Perfect Streamline", talentIcon: "",
    talentDesc: "Increase Weapon Damage by 47% when no Skills are on cooldown.",
    talentType: "perfectWeapon",
  },
  {
    talentId: "perfectly-strained", talentName: "Perfectly Strained", talentIcon: "",
    talentDesc: "Gain 10% critical hit damage for every 0.5 seconds you are firing. Stacks up to 8 times.",
    talentType: "perfectWeapon",
  },
  {
    talentId: "perfect-thunder-strike", talentName: "Perfect Thunder Strike", talentIcon: "",
    talentDesc: "Deals 35% extra damage to shocked targets.",
    talentType: "perfectWeapon",
  },
  {
    talentId: "perfect-unwavering", talentName: "Perfect Unwavering", talentIcon: "",
    talentDesc: "Swapping to this weapon grants 400% weapon handling for 5 seconds. Kills refresh the buff. Swapping away disables this from all weapons for 5 seconds.",
    talentType: "perfectWeapon",
  },
  {
    talentId: "perfectly-unhinged", talentName: "Perfectly Unhinged", talentIcon: "",
    talentDesc: "Receive 22% weapon damage at the cost of 25% stability and 25% accuracy.",
    talentType: "perfectWeapon",
  },
  {
    talentId: "perfectly-extra", talentName: "Perfectly Extra", talentIcon: "",
    talentDesc: "Increased magazine size by 50%.",
    talentType: "perfectWeapon",
  },
  {
    talentId: "perfectly-optimized", talentName: "Perfectly Optimized", talentIcon: "",
    talentDesc: "Increase weapon handling by 40%.",
    talentType: "perfectWeapon",
  },
  {
    talentId: "perfectly-vindictive", talentName: "Perfectly Vindictive", talentIcon: "",
    talentDesc: "Killing an enemy with a status effect applied grants all group members within 20 meters 21% critical hit chance and 21% critical hit damage for 20 seconds.",
    talentType: "perfectWeapon",
  },

  // ── General Weapon Talents ─────────────────────────────────────────────────
  {
    talentId: "future-perfection", talentName: "Future Perfection", talentIcon: "",
    talentDesc: "Weapon kills grant +1 skill tier for 19s. Stacks up to 4 times. Weapon kills at skill tier 6 grant overcharge for 15s. Overcharge Cooldown: 90s.",
    talentType: "generalWeapon",
  },
  {
    talentId: "hidden-rock", talentName: "Hidden Rock", talentIcon: "",
    talentDesc: "Headshots apply confuse. Cooldown 20s.",
    talentType: "generalWeapon",
  },
  {
    talentId: "primer-rounds", talentName: "Primer Rounds", talentIcon: "",
    talentDesc: "Damaged enemies lose 50% burn resistance for 5 seconds.",
    talentType: "generalWeapon",
  },
  {
    talentId: "refreshing", talentName: "Refreshing", talentIcon: "",
    talentDesc: "The Weapon fires a stream of water. Hitting an ally agent builds stacks on them. Max stack is 5. Stacks deplete every 2s. While having at least 1 stack, the ally will have +50% Hazard Protection.",
    talentType: "generalWeapon",
  },
  {
    talentId: "sport-mode", talentName: "Sport Mode", talentIcon: "",
    talentDesc: "+20% Movement Speed. This bonus does not stack with other Movement Speed bonuses.",
    talentType: "generalWeapon",
  },
  {
    talentId: "swift", talentName: "Swift", talentIcon: "",
    talentDesc: "Performing a cover to cover grants +20% weapon damage for 20s.",
    talentType: "generalWeapon",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// UNIQUE ATTRIBUTES  (fixed stats carried by specific weapons instead of talents)
// ─────────────────────────────────────────────────────────────────────────────

export const UNIQUE_ATTRIBUTES: UniqueAttribute[] = [
  { attributeId: "first-sight",       attributeDesc: "+30% Headshot Damage, +50% reload speed debuff" },
  { attributeId: "lexington",         attributeDesc: "+1,782 Base Damage" },
  { attributeId: "slingshot",         attributeDesc: "+45 Optimal Range (60 total)" },
  { attributeId: "backup-boomstick",  attributeDesc: "Core Attribute: 17.0% Shotgun Damage" },
  { attributeId: "the-mop",           attributeDesc: "Secondary Attribute: 10% Armor On Kill" },
  { attributeId: "the-white-death",   attributeDesc: "137.0% Headshot Damage" },
  { attributeId: "oh-carol",          attributeDesc: "137.0% Headshot Damage · Twinkling Lights: Only at night with twinkling lights can you fill their heads with festive might." },
  { attributeId: "handbasket",        attributeDesc: "+230,326 Base Damage, -200 RPM" },
  { attributeId: "tdi-kard-custom",   attributeDesc: "Secondary Attribute: +1 Skill Tier when used" },
  { attributeId: "the-harvest",       attributeDesc: "+10% base damage, -7% Rate of Fire" },
];

// ─────────────────────────────────────────────────────────────────────────────
// NAMED WEAPONS
// ─────────────────────────────────────────────────────────────────────────────

export const NAMED_WEAPONS: NamedWeapon[] = [

  // ── ASSAULT RIFLES ──────────────────────────────────────────────────────────
  { weaponId: "caretaker",         weaponName: "Caretaker",         baseModel: "G36 Enhanced",       type: "Assault Rifle",    talentId: "perfect-killer",              uniqueAttributeId: null, dropLocation: "Limited time Shepherding Gamepass event",   flavorText: "We care for our flock here." },
  { weaponId: "first-sight",       weaponName: "First Sight",       baseModel: "AK-M",               type: "Assault Rifle",    talentId: null,                          uniqueAttributeId: "first-sight",         dropLocation: "Special Event Reward",                      flavorText: "Always go for the head, not the heels" },
  { weaponId: "manic",             weaponName: "Manic",             baseModel: "Black Market AK-M",  type: "Assault Rifle",    talentId: "perfectly-overflowing",       uniqueAttributeId: null, dropLocation: "DZ",                                        flavorText: "\"Just one more time, Dragov. Call me a manic pixie dream girl just one... more... time...\" - Vivian Conley" },
  { weaponId: "the-drill",         weaponName: "The Drill",         baseModel: "Carbine 7",          type: "Assault Rifle",    talentId: "perfect-precision-strike",    uniqueAttributeId: null, dropLocation: "LZ",                                        flavorText: "\"That's the job. Sometimes it's clean, sometimes it's messy, ugly, even. But we do what has to be done. And pave the way to safety.\" - Agent Brenda Wells" },
  { weaponId: "invisible-hand",    weaponName: "Invisible Hand",    baseModel: "AUG",                type: "Assault Rifle",    talentId: "perfect-allegro",             uniqueAttributeId: null, dropLocation: "LZ",                                        flavorText: "Do I look like a charity to you? Market forces at work - you want what I've got, so let's make a deal. - Cassie Mendoza" },
  { weaponId: "shield-splinterer", weaponName: "Shield Splinterer", baseModel: "F2000",              type: "Assault Rifle",    talentId: "perfect-optimist",            uniqueAttributeId: null, dropLocation: "Ivory Cache / Cassie Mendoza",               flavorText: "Inscription reads: The direct approach is best" },
  { weaponId: "goalie",            weaponName: "Goalie",            baseModel: "FAL",                type: "Assault Rifle",    talentId: "perfect-pressure-point",      uniqueAttributeId: null, dropLocation: "LZ",                                        flavorText: "Two to the body, one to the head" },
  { weaponId: "huntsman",          weaponName: "Huntsman",          baseModel: "FAMAS",              type: "Assault Rifle",    talentId: "perfect-frenzy",              uniqueAttributeId: null, dropLocation: "Ash Cache / Cassie Mendoza",                 flavorText: "The Hunter becomes the hunted" },
  { weaponId: "born-great",        weaponName: "Born Great",        baseModel: "Military G36",       type: "Assault Rifle",    talentId: "perfect-stabilize",           uniqueAttributeId: null, dropLocation: "LZ",                                        flavorText: "The future is now, old gun." },
  { weaponId: "burn-out",          weaponName: "Burn Out",          baseModel: "FAMAS",              type: "Assault Rifle",    talentId: "perfect-on-empty",            uniqueAttributeId: null, dropLocation: "LZ",                                        flavorText: "\"You want me to pick up another shift? Well guess what? Fuck this shit. I'm out\" - Krazinski, before \"The Incident\"" },
  { weaponId: "savage-wolverine",  weaponName: "Savage Wolverine",  baseModel: "Honey Badger",       type: "Assault Rifle",    talentId: "perfectly-close-and-personal",uniqueAttributeId: null, dropLocation: "Firewall Field Research (crafting blueprint)", flavorText: "\"Cornering a vicious animal is certain to anger the beast. My suggestion? Don't do that.\" - Zookeeper at the Manning National Zoo" },
  { weaponId: "pyromaniac",        weaponName: "Pyromaniac",        baseModel: "M4",                 type: "Assault Rifle",    talentId: "perfectly-ignited",           uniqueAttributeId: null, dropLocation: "LZ",                                        flavorText: "Sometimes the world doesn't burn fast enough." },
  { weaponId: "glory-daze",        weaponName: "Glory Daze",        baseModel: "P416",               type: "Assault Rifle",    talentId: "perfectly-near-sighted",      uniqueAttributeId: null, dropLocation: "LZ",                                        flavorText: "\"Nothing lasts forever\" - The Balancer" },
  { weaponId: "mechanical-animal", weaponName: "Mechanical Animal", baseModel: "SIG 556",            type: "Assault Rifle",    talentId: "future-perfection",           uniqueAttributeId: null, dropLocation: "LZ",                                        flavorText: "\"The perfect soldier. A blending of man and machine, and fully automatic.\" - Unknown Black Tusk executive" },
  { weaponId: "test-subject",      weaponName: "Test Subject",      baseModel: "PDR",                type: "Assault Rifle",    talentId: "perfectly-in-sync",           uniqueAttributeId: null, dropLocation: "LZ" },
  { weaponId: "lud",               weaponName: "Lud",               baseModel: "SOCOM MK16",         type: "Assault Rifle",    talentId: "perfect-streamline",          uniqueAttributeId: null, dropLocation: "LZ",                                        flavorText: "I've got all the skills I need right here." },
  { weaponId: "kingbreaker",       weaponName: "Kingbreaker",       baseModel: "TKB-408",            type: "Assault Rifle",    talentId: "perfect-flatline",            uniqueAttributeId: null, dropLocation: "LZ only (DZ)",                              flavorText: "\"The limits of tyrants are prescribed by the endurance of those whom they oppress\" - Frederick Douglas" },
  { weaponId: "lexington",         weaponName: "Lexington",         baseModel: "Police M4",          type: "Assault Rifle",    talentId: null,                          uniqueAttributeId: "lexington",           dropLocation: "Special Event Reward",                      flavorText: "Negative, Ramos - Faye Lau" },
  { weaponId: "the-railsplitter",  weaponName: "The Railsplitter",  baseModel: "CTAR-21",            type: "Assault Rifle",    talentId: "perfectly-accurate",          uniqueAttributeId: null, dropLocation: "DZ",                                        flavorText: "\"Took this off one of your dead colleagues. No hard feelings?\" - Cassie Mendoza, the Gunrunner" },

  // ── LIGHT MACHINE GUNS ──────────────────────────────────────────────────────
  { weaponId: "dare",              weaponName: "Dare",              baseModel: "HK GR9",             type: "Light Machine Gun", talentId: "perfect-flatline",           uniqueAttributeId: null, dropLocation: "LZ only",                                   flavorText: "\"If you dare to struggle, you dare to win. If you dare not struggle, then damn it, you don't deserve to win\" - Fred Hampton" },
  { weaponId: "tabula-rasa",       weaponName: "Tabula Rasa",       baseModel: "L86",                type: "Light Machine Gun", talentId: "perfectly-steady-handed",    uniqueAttributeId: null, dropLocation: "LZ",                                        flavorText: "\"New uniform, a fresh mag, trousers and pair of socks. A clean slate is always inspiring.\" - Lieutenant Kelly" },
  { weaponId: "black-friday",      weaponName: "Black Friday",      baseModel: "M249",               type: "Light Machine Gun", talentId: "perfectly-unhinged",         uniqueAttributeId: null, dropLocation: "DZ",                                        flavorText: "\"Fire sale! One day only, everything must go.\" - Saint Alex to his crew" },
  { weaponId: "good-times",        weaponName: "Good Times",        baseModel: "M60",                type: "Light Machine Gun", talentId: "perfect-fast-hands",         uniqueAttributeId: null, dropLocation: "DZ",                                        flavorText: "What you want to do is develop that muscle memory. Unload. Reload. Unload. Reload. After all that training? That's when you have a good time." },
  { weaponId: "the-stinger",       weaponName: "The Stinger",       baseModel: "M249",               type: "Light Machine Gun", talentId: "swift",                      uniqueAttributeId: null, dropLocation: "Friend Referral",                           flavorText: "When you miss something more than you ever thought possible, it is tempting to seek solace among destructive friends and old, bad habits." },
  { weaponId: "sleipner",          weaponName: "Sleipner",          baseModel: "MG5",                type: "Light Machine Gun", talentId: "perfect-frenzy",             uniqueAttributeId: null, dropLocation: "Gunner Field Research (crafting blueprint)", flavorText: "The best among gods and men, who bears its rider to the land of the dead." },
  { weaponId: "big-show",          weaponName: "Big Show",          baseModel: "MG5",                type: "Light Machine Gun", talentId: "perfect-thunder-strike",     uniqueAttributeId: null, dropLocation: "LZ only",                                   flavorText: "If budget is no option, and you want to give them the 'shocker' take 'em to the Big Show. - BTSU Jack Bonney" },
  { weaponId: "carnage",           weaponName: "Carnage",           baseModel: "NEGEV",              type: "Light Machine Gun", talentId: "perfect-sadist",             uniqueAttributeId: null, dropLocation: "LZ",                                        flavorText: "Time to paint this town red." },
  { weaponId: "new-reliable",      weaponName: "New Reliable",      baseModel: "RPK-74",             type: "Light Machine Gun", talentId: "perfectly-optimized",        uniqueAttributeId: null, dropLocation: "LZ",                                        flavorText: "Whoever said 'if it ain't broke, don't fix it' clearly never had any hobbies" },
  { weaponId: "cricket",           weaponName: "Cricket",           baseModel: "GR9",                type: "Light Machine Gun", talentId: "perfect-precision-strike",   uniqueAttributeId: null, dropLocation: "LZ",                                        flavorText: "\"How are you not out of ammo?\" - Unknown Hyena's last words" },
  { weaponId: "rusty",             weaponName: "Rusty",             baseModel: "Classic RPK",        type: "Light Machine Gun", talentId: "perfect-pressure-point",     uniqueAttributeId: null, dropLocation: "LZ",                                        flavorText: "Hold fire, hold fire!! He's already dead" },
  { weaponId: "quiet-roar",        weaponName: "Quiet Roar",        baseModel: "Stoner LAMG",        type: "Light Machine Gun", talentId: "perfect-overwhelm",          uniqueAttributeId: null, dropLocation: "LZ",                                        flavorText: "\"Making a big show of things is for amateurs. A real badass doesn't need theatrics.\" - Raoul \"The Lion\" Fernando" },
  { weaponId: "bellringer",        weaponName: "Bellringer",        baseModel: "Infantry MG5",       type: "Light Machine Gun", talentId: "",                           uniqueAttributeId: null, dropLocation: "" },
  { weaponId: "gear-shift",        weaponName: "Gear Shift",        baseModel: "Military MK46",      type: "Light Machine Gun", talentId: "",                           uniqueAttributeId: null, dropLocation: "" },

  // ── SUBMACHINE GUNS ─────────────────────────────────────────────────────────
  { weaponId: "the-grudge",        weaponName: "The Grudge",        baseModel: "CMMG Banshee",       type: "Submachine Gun",   talentId: "perfectly-vindictive",        uniqueAttributeId: null, dropLocation: "LZ / Warlords Campaign - Aaron Keener (story)", flavorText: "\"It is all about power now. Power, and survival.\" - Aaron \"Vanguard\" Keener" },
  { weaponId: "cabaret",           weaponName: "Cabaret",           baseModel: "MP5 ST",             type: "Submachine Gun",   talentId: "perfect-thunder-strike",      uniqueAttributeId: null, dropLocation: "LZ only",                                   flavorText: "When you're running out of options, it's time to shock and awe. - BTSU Jack Bonney" },
  { weaponId: "grown-great",       weaponName: "Grown Great",       baseModel: "Tommy Gun",          type: "Submachine Gun",   talentId: "perfect-stabilize",           uniqueAttributeId: null, dropLocation: "LZ",                                        flavorText: "Great weapons aren't born great, they grow great" },
  { weaponId: "swap-chain",        weaponName: "Swap Chain",        baseModel: "MP7",                type: "Submachine Gun",   talentId: "perfect-unwavering",          uniqueAttributeId: null, dropLocation: "LZ",                                        flavorText: "Just take it out, light them up and make sure to stick the landing no matter what!" },
  { weaponId: "safety-distance",   weaponName: "Safety Distance",   baseModel: "MPX",                type: "Submachine Gun",   talentId: "perfect-outsider",            uniqueAttributeId: null, dropLocation: "LZ",                                        flavorText: "I don't throw grenades for my health, I throw 'em to watch the bang. - Dash" },
  { weaponId: "the-apartment",     weaponName: "The Apartment",     baseModel: "MPX",                type: "Submachine Gun",   talentId: "perfectly-measured",          uniqueAttributeId: null, dropLocation: "DZ",                                        flavorText: "We're saving up for our dream house." },
  { weaponId: "emelines-guard",    weaponName: "Emeline's Guard",   baseModel: "FN P90",             type: "Submachine Gun",   talentId: "perfect-preservation",        uniqueAttributeId: null, dropLocation: "LZ",                                        flavorText: "For loyal service, Emeline grants rewards. Keep her and the cause forever in your thoughts." },
  { weaponId: "purist",            weaponName: "Purist",            baseModel: "Converted SMG-9 A2", type: "Submachine Gun",   talentId: "perfect-streamline",          uniqueAttributeId: null, dropLocation: "LZ",                                        flavorText: "Keep your toys to yourself" },
  { weaponId: "the-sleigher",      weaponName: "The Sleigher",      baseModel: "Tommy Gun",          type: "Submachine Gun",   talentId: "hidden-rock",                 uniqueAttributeId: null, dropLocation: "Special Event Reward",                      flavorText: "Reviews are in, and 'The Sleigher' is the top holiday gift for this year!" },
  { weaponId: "cold-relations",    weaponName: "Cold Relations",    baseModel: "Enhanced PP-19",     type: "Submachine Gun",   talentId: "perfectly-strained",          uniqueAttributeId: null, dropLocation: "LZ",                                        flavorText: "\"You're going to have to pull this from my cold, dead hands.\" \"Sounds enjoyable. Don't mind if I do.\" - Duchess" },
  { weaponId: "slingshot",         weaponName: "Slingshot",         baseModel: "Tactical UMP-45",    type: "Submachine Gun",   talentId: null,                          uniqueAttributeId: "slingshot",           dropLocation: "Special Event Reward",                      flavorText: "Set your sights far, not high." },
  { weaponId: "froth",             weaponName: "Froth",             baseModel: "Tactical Vector SBR 9mm", type: "Submachine Gun", talentId: "perfect-immobilize",      uniqueAttributeId: null, dropLocation: "LZ",                                        flavorText: "Sit Tight." },
  { weaponId: "dark-winter",       weaponName: "Dark Winter",       baseModel: "Vector SBR .45 ACP", type: "Submachine Gun",   talentId: "perfect-killer",              uniqueAttributeId: null, dropLocation: "DZ",                                        flavorText: "\"It was supposed to be an exercise. Turns out... we weren't prepared.\" - Faye Lau" },

  // ── SHOTGUNS ────────────────────────────────────────────────────────────────
  { weaponId: "stack-broker",      weaponName: "Stack Broker",      baseModel: "ACS-12",             type: "Shotgun",          talentId: "",                           uniqueAttributeId: null, dropLocation: "" },
  { weaponId: "rock-n-roll",       weaponName: "Rock n' Roll",      baseModel: "ACS-12",             type: "Shotgun",          talentId: "perfectly-extra",             uniqueAttributeId: null, dropLocation: "DZ",                                        flavorText: "\"Lots of people love the guitar. Me? I love the drums. BAM. BAM. BAM.\" - Hyena band member" },
  { weaponId: "lefty",             weaponName: "Lefty",             baseModel: "",                   type: "Shotgun",          talentId: "perfect-sledgehammer",        uniqueAttributeId: null, dropLocation: "LZ",                                        flavorText: "When you know you're in the right, Lefty will have your back." },
  { weaponId: "boomstick",         weaponName: "Boomstick",         baseModel: "Double Barrel",      type: "Shotgun",          talentId: "perfect-pumped-up",           uniqueAttributeId: null, dropLocation: "LZ",                                        flavorText: "\"I've got two barrels. One for both of ya!\" - Drunken Idiot" },
  { weaponId: "the-send-off",      weaponName: "The Send-Off",      baseModel: "KSG",                type: "Shotgun",          talentId: "perfect-distance",            uniqueAttributeId: null, dropLocation: "Technician Field Research",                  flavorText: "When you leave this world, all you hear is white noise." },
  { weaponId: "cuelebre",          weaponName: "Cuélebre",          baseModel: "Military M870",      type: "Shotgun",          talentId: "perfect-jazz-hands",          uniqueAttributeId: null, dropLocation: "LZ",                                        flavorText: "Treasure your life. Defend it with this." },
  { weaponId: "lockdown",          weaponName: "Lockdown",          baseModel: "M870 Express",       type: "Shotgun",          talentId: "perfect-immobilize",          uniqueAttributeId: null, dropLocation: "LZ",                                        flavorText: "And stay there." },
  { weaponId: "tsunami",           weaponName: "Tsunami",           baseModel: "SASG-12",            type: "Shotgun",          talentId: "perfect-pummel",              uniqueAttributeId: null, dropLocation: "LZ",                                        flavorText: "The tidal wave stops for nothing, suffocating fire and life, when it rolls in." },
  { weaponId: "backup-boomstick",  weaponName: "Backup Boomstick",  baseModel: "Sawed Off",          type: "Shotgun",          talentId: null,                          uniqueAttributeId: "backup-boomstick",    dropLocation: "LZ",                                        flavorText: "\"Always, and I mean always... have a backup\" - Drunken Idiot" },
  { weaponId: "firestarter",       weaponName: "Firestarter",       baseModel: "Sawed Off",          type: "Shotgun",          talentId: "primer-rounds",               uniqueAttributeId: null, dropLocation: "Firewall Specialization",                    flavorText: "Chambered shots contain a fine powder that increases the flammability of targets hit by this shotgun." },
  { weaponId: "like-glue",         weaponName: "Like Glue",         baseModel: "Super 90",           type: "Shotgun",          talentId: "perfect-brazen",              uniqueAttributeId: null, dropLocation: "LZ",                                        flavorText: "No matter what happens, you stick to them like glue." },
  { weaponId: "enforcer",          weaponName: "Enforcer",          baseModel: "",                   type: "Shotgun",          talentId: "perfect-pummel",              uniqueAttributeId: null, dropLocation: "Pre-Order Only",                             flavorText: "Breach and clear!" },
  { weaponId: "thorn",             weaponName: "Thorn",             baseModel: "Spas-12",            type: "Shotgun",          talentId: "perfect-brazen",              uniqueAttributeId: null, dropLocation: "LZ",                                        flavorText: "\"You see, the secret to laughing in the face of danger is that you have to get real fucking close to it.\" - Mayhem" },
  { weaponId: "the-mop",           weaponName: "The Mop",           baseModel: "Six12",              type: "Shotgun",          talentId: null,                          uniqueAttributeId: "the-mop",             dropLocation: "LZ",                                        flavorText: "\"Wet work is a messy business, and some cleanup jobs require a big mop\" - Marco \"The Mop\" Mociano" },

  // ── RIFLES ──────────────────────────────────────────────────────────────────
  { weaponId: "the-virginian",     weaponName: "The Virginian",     baseModel: "1886",               type: "Rifle",            talentId: "perfect-boomerang",           uniqueAttributeId: null, dropLocation: "DZ",                                        flavorText: "\"Get the fuck off my land. That means you. Now.\" - DC Area Resident" },
  { weaponId: "cooler",            weaponName: "Cooler",            baseModel: "M1A CQB",            type: "Rifle",            talentId: "refreshing",                  uniqueAttributeId: null, dropLocation: "Special Event Reward",                      flavorText: "Remember to hydrate" },
  { weaponId: "bakers-dozen",      weaponName: "Baker's Dozen",     baseModel: "M1A",                type: "Rifle",            talentId: "perfect-lucky-shot",          uniqueAttributeId: null, dropLocation: "LZ",                                        flavorText: "\"This rifle saw me through the war. May she now see you through yours.\" - Sgt. Rolland T. Baker" },
  { weaponId: "stage-left",        weaponName: "Stage Left",        baseModel: "SOCOM MIA",          type: "Rifle",            talentId: "perfect-sledgehammer",        uniqueAttributeId: null, dropLocation: "LZ",                                        flavorText: "When you want to make an entrance use Stage Left." },
  { weaponId: "surge",             weaponName: "Surge",             baseModel: "M4",                 type: "Rifle",            talentId: "perfect-spike",               uniqueAttributeId: null, dropLocation: "LZ",                                        flavorText: "\"The Machine is learning. We're not.\" - A Transhumanist Perspective on Planned Obsolescence" },
  { weaponId: "everlasting-gaze",  weaponName: "Everlasting Gaze",  baseModel: "Mk17 (FN SCAR-H)",   type: "Rifle",            talentId: "perfect-perpetuation",        uniqueAttributeId: null, dropLocation: "DZ",                                        flavorText: "Keep yer eye on the prize, boyo. Steady... steady... now! - NYCP Instructor" },
  { weaponId: "harmony",           weaponName: "Harmony",           baseModel: "Resolute MK47",      type: "Rifle",            talentId: "perfectly-in-sync",           uniqueAttributeId: null, dropLocation: "DZ",                                        flavorText: "\"Let your weapon do the singing, but never forget your backup vocals.\" - Agent Brink" },
  { weaponId: "artists-tool",      weaponName: "Artist's Tool",     baseModel: "SIG 716",            type: "Rifle",            talentId: "perfect-rifleman",            uniqueAttributeId: null, dropLocation: "LZ",                                        flavorText: "\"You call it war, we call it art.\" - The Hyenas" },
  { weaponId: "achilles",          weaponName: "Achilles",          baseModel: "USC .45 ACP",        type: "Rifle",            talentId: "perfect-soft-spot",           uniqueAttributeId: null, dropLocation: "LZ",                                        flavorText: "\"Out of every place it could have hit.\" - Outcast Rusher" },
  { weaponId: "whisper",           weaponName: "Whisper",           baseModel: "M16A2",              type: "Rifle",            talentId: "perfectly-behind-you",        uniqueAttributeId: null, dropLocation: "LZ",                                        flavorText: "\"Do you hear that?\" - Unknown" },

  // ── MARKSMAN RIFLES ─────────────────────────────────────────────────────────
  { weaponId: "the-white-death",   weaponName: "The White Death",   baseModel: "M44",                type: "Marksman Rifle",   talentId: null,                          uniqueAttributeId: "the-white-death",     dropLocation: "LZ",                                        flavorText: "\"I miss the snow\" - S.H." },
  { weaponId: "oh-carol",          weaponName: "Oh Carol",          baseModel: "M44",                type: "Marksman Rifle",   talentId: null,                          uniqueAttributeId: "oh-carol",            dropLocation: "Special Event Reward",                      flavorText: "Christmas is the perfect time to jingle all the bells." },
  { weaponId: "ekims-long-stick",  weaponName: "Ekim's Long Stick", baseModel: "Model 700",          type: "Marksman Rifle",   talentId: "perfect-ranger",              uniqueAttributeId: null, dropLocation: "LZ",                                        flavorText: "You wouldn't poke a hornet's nest with a short stick, would you?" },
  { weaponId: "the-darkness",      weaponName: "The Darkness",      baseModel: "MK20 SSR (FN SCAR-SSR)", type: "Marksman Rifle", talentId: "perfect-eyeless",           uniqueAttributeId: null, dropLocation: "LZ / Warlords Campaign - Theo Parnell (story)", flavorText: "Cover conceals truth; deception conveys falsehood." },
  { weaponId: "designated-hitter", weaponName: "Designated Hitter", baseModel: "SR-1",               type: "Marksman Rifle",   talentId: "perfect-reformation",         uniqueAttributeId: null, dropLocation: "LZ",                                        flavorText: "\"You want me to be your designated hitter, Ridgeway? Convince me, then.\" - Captain Briggs" },
  { weaponId: "pinprick",          weaponName: "Pinprick",          baseModel: "SRS",                type: "Marksman Rifle",   talentId: "perfect-first-blood",         uniqueAttributeId: null, dropLocation: "DZ",                                        flavorText: "\"Strike fast, strike hard. Rinse, repeat\" - Hyena marksman" },
  { weaponId: "commando",          weaponName: "Commando",          baseModel: "Paratrooper SVD",    type: "Marksman Rifle",   talentId: "perfectly-naked",             uniqueAttributeId: null, dropLocation: "LZ",                                        flavorText: "\"Look. I know you're brave, but don't go jumping into a fight naked\" - Cassie Mendoza" },
  { weaponId: "handbasket",        weaponName: "Handbasket",        baseModel: "Surplus SVD",        type: "Marksman Rifle",   talentId: null,                          uniqueAttributeId: "handbasket",          dropLocation: "Special Event Reward",                      flavorText: "Don't put all your eggs in one basket" },
  { weaponId: "relic",             weaponName: "Relic",             baseModel: "G28 Marksmen Rifle", type: "Marksman Rifle",   talentId: "perfectly-determined",        uniqueAttributeId: null, dropLocation: "LZ only",                                   flavorText: "\"With the power of this holy instrument, we can accomplish anything.\" The Priest" },
  { weaponId: "scalpel",           weaponName: "Scalpel",           baseModel: "Tactical .308",      type: "Marksman Rifle",   talentId: "future-perfection",           uniqueAttributeId: null, dropLocation: "LZ" },
  { weaponId: "instigator",        weaponName: "Instigator",        baseModel: "Custom M44",         type: "Marksman Rifle",   talentId: "perfect-soft-spot",           uniqueAttributeId: null, dropLocation: "LZ",                                        flavorText: "\"Do I really need this much fuel on me?\" - Outcast Thrower" },
  { weaponId: "brutus",            weaponName: "Brutus",            baseModel: "M700 Carbon",        type: "Marksman Rifle",   talentId: "perfectly-behind-you",        uniqueAttributeId: null, dropLocation: "LZ",                                        flavorText: "\"You don't hear the bullet that kills you.\" - Milla 'Wyvern' Radek" },
  { weaponId: "adrestia",          weaponName: "Adrestia",          baseModel: "SR-1",               type: "Marksman Rifle",   talentId: "",                            uniqueAttributeId: null, dropLocation: "" },

  // ── PISTOLS ─────────────────────────────────────────────────────────────────
  { weaponId: "orbit",             weaponName: "Orbit",             baseModel: "586 Magnum",         type: "Pistol",           talentId: "perfect-finisher",            uniqueAttributeId: null, dropLocation: "DZ",                                        flavorText: "An object once set into motion stays in motion, until it finds its target." },
  { weaponId: "prophet",           weaponName: "Prophet",           baseModel: "Police 686 Magnum",  type: "Pistol",           talentId: "perfectly-determined",        uniqueAttributeId: null, dropLocation: "LZ",                                        flavorText: "\"As a prophet of the lord our hand is guided to enact his vengeance.\" The Priest" },
  { weaponId: "sharpshooters-93r", weaponName: "Sharpshooter's 93R", baseModel: "93R",              type: "Pistol",           talentId: "perfect-unwavering",          uniqueAttributeId: null, dropLocation: "Sharpshooter Specialization",                flavorText: "A 3-round burst weapon for hectic close encounters." },
  { weaponId: "survivalist-d50",   weaponName: "Survivalist D50",   baseModel: "Desert Eagle",       type: "Pistol",           talentId: "perfect-sadist",              uniqueAttributeId: null, dropLocation: "Survivalist Specialization",                 flavorText: "A hard-hitting but precise pistol featuring .44 Magnum rounds." },
  { weaponId: "mozambique-special",weaponName: "Mozambique Special",baseModel: "M45A1",              type: "Pistol",           talentId: "perfect-breadbasket",         uniqueAttributeId: null, dropLocation: "LZ / Warlords Campaign - Javier Kajika (story)", flavorText: "\"The last thing you want to do when putting someone down is give them a chance to get back up\" - Javier Kajika" },
  { weaponId: "quickstep",         weaponName: "Quickstep",         baseModel: "",                   type: "Pistol",           talentId: "sport-mode",                  uniqueAttributeId: null, dropLocation: "Special Event Reward",                      flavorText: "Spooky fast." },
  { weaponId: "maxim-9",           weaponName: "Maxim 9",           baseModel: "Maxim 9",            type: "Pistol",           talentId: "perfect-spike",               uniqueAttributeId: null, dropLocation: "Technician Specialization",                  flavorText: "Integrally suppressed 9mm pistol for when you don't want to compromise between performance and suppression." },
  { weaponId: "p320-xcompact",     weaponName: "P320 XCompact",     baseModel: "P320",               type: "Pistol",           talentId: "perfect-preservation",        uniqueAttributeId: null, dropLocation: "Gunner Specialization",                     flavorText: "9mm service pistol of the US military." },
  { weaponId: "lightning-rod",     weaponName: "Lightning Rod",     baseModel: "PF45",               type: "Pistol",           talentId: "perfect-salvage",             uniqueAttributeId: null, dropLocation: "LZ",                                        flavorText: "Strike hard and fast, but also unexpectedly." },
  { weaponId: "tdi-kard-custom",   weaponName: "TDI \"Kard\" Custom", baseModel: "KARD-45",          type: "Pistol",           talentId: null,                          uniqueAttributeId: "tdi-kard-custom",     dropLocation: "DZ, Caches",                                flavorText: "\"In our line of work, it pays to be slightly ahead of the curve\" - John Dmitri Kozak" },
  { weaponId: "the-harvest",       weaponName: "The Harvest",       baseModel: "Police 686 Magnum",  type: "Pistol",           talentId: null,                          uniqueAttributeId: "the-harvest",         dropLocation: "Special Event Reward",                      flavorText: "Nothing like the rewards at the end of the harvest" },
  { weaponId: "diceros-special",   weaponName: "Diceros Special",   baseModel: "Rhino",              type: "Pistol",           talentId: "perfect-optimist",            uniqueAttributeId: null, dropLocation: "Demolitionist Specialization",               flavorText: "A hard-hitting .357 Magnum revolver with unusual low barrel design." },
];

// ─────────────────────────────────────────────────────────────────────────────
// Derived helpers
// ─────────────────────────────────────────────────────────────────────────────

export const NAMED_WEAPON_TYPES = [...new Set(NAMED_WEAPONS.map(w => w.type))] as WeaponType[];

export const TALENT_MAP = new Map(TALENTS.map(t => [t.talentId, t]));
export const UNIQUE_ATTR_MAP = new Map(UNIQUE_ATTRIBUTES.map(a => [a.attributeId, a]));
