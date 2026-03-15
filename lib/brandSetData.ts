import type { BrandDef } from "./types";

export type { BrandDef } from "./types";

// ─────────────────────────────────────────────────────────────────────────────
// Brand Sets (35)
// coreAttr = the attribute all pieces of this brand drop with by default.
// bonuses  = 1pc / 2pc / 3pc flat stat bonuses.
// ─────────────────────────────────────────────────────────────────────────────

export const BRANDS: BrandDef[] = [

  // ── Armor core ────────────────────────────────────────────────────────────

  { id: "511-tactical",        name: "5.11 Tactical",                coreAttr: "Armor",         icon: "/brandsets/511.png",                  bonuses: [{ pieces: 1, bonus: "30% Health" },                  { pieces: 2, bonus: "30% Incoming Repairs" },        { pieces: 3, bonus: "30% Hazard Protection" }] },
  { id: "badger-tuff",         name: "Badger Tuff",                  coreAttr: "Armor",         icon: "/brandsets/badger.png",               bonuses: [{ pieces: 1, bonus: "10% Shotgun Damage" },          { pieces: 2, bonus: "5% Total Armor" },              { pieces: 3, bonus: "15% Armor on Kill" }] },
  { id: "belstone-armory",     name: "Belstone Armory",              coreAttr: "Armor",         icon: "/brandsets/belstone.png",             bonuses: [{ pieces: 1, bonus: "1% Armor Regen" },              { pieces: 2, bonus: "10% Armor on Kill" },           { pieces: 3, bonus: "45% Incoming Repairs" }] },
  { id: "brazos-de-arcabuz",   name: "Brazos de Arcabuz",            coreAttr: "Armor",         icon: "/brandsets/brazos.png",               bonuses: [{ pieces: 1, bonus: "10% Skill Haste" },             { pieces: 2, bonus: "1 Skill Tier" },                { pieces: 3, bonus: "50% Magazine Size" }] },
  { id: "gila-guard",          name: "Gila Guard",                   coreAttr: "Armor",         icon: "/brandsets/gila.png",                 bonuses: [{ pieces: 1, bonus: "5% Total Armor" },              { pieces: 2, bonus: "60% Health" },                  { pieces: 3, bonus: "2% Armor Regen" }] },
  { id: "golan-gear",          name: "Golan Gear Ltd",               coreAttr: "Armor",         icon: "/brandsets/golan.png",                bonuses: [{ pieces: 1, bonus: "10% Status Effects" },          { pieces: 2, bonus: "1.5% Armor Regen" },            { pieces: 3, bonus: "10% Total Armor" }] },
  { id: "habsburg-guard",      name: "Habsburg Guard",               coreAttr: "Armor",         icon: "/brandsets/habsburg.png",             bonuses: [{ pieces: 1, bonus: "13% Headshot Damage" },         { pieces: 2, bonus: "20% Marksman Rifle Damage" },   { pieces: 3, bonus: "25% Status Effects" }] },
  { id: "lengmo",              name: "Lengmo",                       coreAttr: "Armor",         icon: "/brandsets/lengmo.png",               bonuses: [{ pieces: 1, bonus: "20% Explosive Resistance" },    { pieces: 2, bonus: "20% Skill Health" },             { pieces: 3, bonus: "30% LMG Damage" }] },
  { id: "palisade-steelworks", name: "Palisade Steelworks",          coreAttr: "Armor",         icon: "/brandsets/palisade_steelworks.png",  bonuses: [{ pieces: 1, bonus: "10% Armor on Kill" },           { pieces: 2, bonus: "60% Health" },                  { pieces: 3, bonus: "1+ Skill Tier" }] },
  { id: "uzina-getica",        name: "Uzina Getica",                 coreAttr: "Armor",         icon: "/brandsets/uzina.png",                bonuses: [{ pieces: 1, bonus: "5% Total Armor" },              { pieces: 2, bonus: "10% Armor on Kill" },           { pieces: 3, bonus: "30% Hazard Protection" }] },
  { id: "yaahl-gear",          name: "Yaahl Gear",                   coreAttr: "Armor",         icon: "/brandsets/yaahl.png",                bonuses: [{ pieces: 1, bonus: "10% Hazard Protection" },       { pieces: 2, bonus: "10% Weapon Damage" },           { pieces: 3, bonus: "40% Pulse Resistance" }] },

  // ── Weapon Damage core ────────────────────────────────────────────────────

  { id: "airaldi-holdings",    name: "Airaldi Holdings",             coreAttr: "Weapon Damage", icon: "/brandsets/airaldi.png",              bonuses: [{ pieces: 1, bonus: "10% Marksman Rifle Damage" },  { pieces: 2, bonus: "13% Headshot Damage" },         { pieces: 3, bonus: "5% Damage to Armor" }] },
  { id: "ceska-vyroba",        name: "Česká Výroba s.r.o.",          coreAttr: "Weapon Damage", icon: "/brandsets/ceska.png",                bonuses: [{ pieces: 1, bonus: "8% Critical Hit Chance" },     { pieces: 2, bonus: "20% Hazard Protection" },       { pieces: 3, bonus: "90% Health" }] },
  { id: "douglas-harding",     name: "Douglas & Harding",            coreAttr: "Weapon Damage", icon: "/brandsets/douglas.png",              bonuses: [{ pieces: 1, bonus: "20% Pistol Damage" },          { pieces: 2, bonus: "30% Stability" },               { pieces: 3, bonus: "50% Accuracy" }] },
  { id: "fenris-group",        name: "Fenris Group AB",              coreAttr: "Weapon Damage", icon: "/brandsets/fenris.png",               bonuses: [{ pieces: 1, bonus: "10% Assault Rifle Damage" },   { pieces: 2, bonus: "30% Reload Speed" },            { pieces: 3, bonus: "50% Stability" }] },
  { id: "grupo-sombra",        name: "Grupo Sombra S.A.",            coreAttr: "Weapon Damage", icon: "/brandsets/grupo.png",                bonuses: [{ pieces: 1, bonus: "13% Critical Hit Damage" },    { pieces: 2, bonus: "20% Explosive Damage" },        { pieces: 3, bonus: "13% Headshot Damage" }] },
  { id: "imminence-armaments", name: "Imminence Armaments",          coreAttr: "Weapon Damage", icon: "/brandsets/imminence_armaments.png",  bonuses: [{ pieces: 1, bonus: "5% Weapon Damage" },           { pieces: 2, bonus: "100% Increased Threat" },       { pieces: 3, bonus: "60% Pistol Damage" }] },
  { id: "legatus",             name: "Legatus S.p.A.",               coreAttr: "Weapon Damage", icon: "/brandsets/legatus.png",              bonuses: [{ pieces: 1, bonus: "30% Swap Speed" },             { pieces: 2, bonus: "70% Optimal Range" },           { pieces: 3, bonus: "15% Weapon Damage" }] },
  { id: "overlord-armaments",  name: "Overlord Armaments",           coreAttr: "Weapon Damage", icon: "/brandsets/overlord.png",             bonuses: [{ pieces: 1, bonus: "10% Rifle Damage" },           { pieces: 2, bonus: "30% Accuracy" },                { pieces: 3, bonus: "30% Weapon Handling" }] },
  { id: "petrov-defense",      name: "Petrov Defense Group",         coreAttr: "Weapon Damage", icon: "/brandsets/petrov.png",               bonuses: [{ pieces: 1, bonus: "10% LMG Damage" },             { pieces: 2, bonus: "15% Weapon Handling" },         { pieces: 3, bonus: "50% Ammo Capacity" }] },
  { id: "providence-defense",  name: "Providence Defense",           coreAttr: "Weapon Damage", icon: "/brandsets/providence.png",           bonuses: [{ pieces: 1, bonus: "13% Headshot Damage" },        { pieces: 2, bonus: "8% Critical Hit Chance" },      { pieces: 3, bonus: "13% Critical Hit Damage" }] },
  { id: "sokolov-concern",     name: "Sokolov Concern",              coreAttr: "Weapon Damage", icon: "/brandsets/sokolov.png",              bonuses: [{ pieces: 1, bonus: "10% SMG Damage" },             { pieces: 2, bonus: "13% Critical Hit Damage" },     { pieces: 3, bonus: "8% Critical Hit Chance" }] },
  { id: "unit-alloys",         name: "Unit Alloys",                  coreAttr: "Weapon Damage", icon: "/brandsets/unit_alloys.png",          bonuses: [{ pieces: 1, bonus: "5% Rate of Fire" },            { pieces: 2, bonus: "20% Assault Rifle Damage" },    { pieces: 3, bonus: "50% Magazine Size" }] },
  { id: "urban-lookout",       name: "Urban Lookout",                coreAttr: "Weapon Damage", icon: "/brandsets/urban_lookout.png",        bonuses: [{ pieces: 1, bonus: "10% Accuracy" },               { pieces: 2, bonus: "30% Skill Duration" },          { pieces: 3, bonus: "30% Marksman Rifle Damage" }] },
  { id: "walker-harris",       name: "Walker, Harris & Co.",         coreAttr: "Weapon Damage", icon: "/brandsets/walker.png",               bonuses: [{ pieces: 1, bonus: "5% Weapon Damage" },           { pieces: 2, bonus: "5% Damage to Armor" },          { pieces: 3, bonus: "10% Damage to Health" }] },
  { id: "zwiadowka",           name: "Zwiadowka Sp. z o.o.",         coreAttr: "Weapon Damage", icon: "/brandsets/zwiadowka.png",            bonuses: [{ pieces: 1, bonus: "15% Magazine Size" },          { pieces: 2, bonus: "20% Rifle Damage" },            { pieces: 3, bonus: "30% Weapon Handling" }] },

  // ── Skill Tier core ───────────────────────────────────────────────────────

  { id: "alps-summit",         name: "Alps Summit Armament",         coreAttr: "Skill Tier",    icon: "/brandsets/alps.png",                 bonuses: [{ pieces: 1, bonus: "18% Repair Skills" },          { pieces: 2, bonus: "30% Skill Duration" },          { pieces: 3, bonus: "30% Skill Haste" }] },
  { id: "china-light",         name: "China Light Industries Corp.", coreAttr: "Skill Tier",    icon: "/brandsets/china.png",                bonuses: [{ pieces: 1, bonus: "15% Explosive Damage" },       { pieces: 2, bonus: "20% Skill Haste" },             { pieces: 3, bonus: "25% Status Effects" }] },
  { id: "electrique",          name: "Electrique",                   coreAttr: "Skill Tier",    icon: "/brandsets/electrique.png",           bonuses: [{ pieces: 1, bonus: "10% Status Effect" },          { pieces: 2, bonus: "20% Electricity Protection" },  { pieces: 3, bonus: "30% SMG Damage" }] },
  { id: "empress-intl",        name: "Empress International",        coreAttr: "Skill Tier",    icon: "/brandsets/empress.png",              bonuses: [{ pieces: 1, bonus: "10% Skill Health" },           { pieces: 2, bonus: "10% Skill Damage" },            { pieces: 3, bonus: "8% Skill Efficiency" }] },
  { id: "hana-u",              name: "Hana-U Corporation",           coreAttr: "Skill Tier",    icon: "/brandsets/hanau.png",                bonuses: [{ pieces: 1, bonus: "10% Skill Haste" },            { pieces: 2, bonus: "10% Skill Damage" },            { pieces: 3, bonus: "15% Weapon Damage" }] },
  { id: "murakami",            name: "Murakami Industries",          coreAttr: "Skill Tier",    icon: "/brandsets/murakami.png",             bonuses: [{ pieces: 1, bonus: "15% Skill Duration" },         { pieces: 2, bonus: "35% Repair Skills" },           { pieces: 3, bonus: "18% Skill Damage" }] },
  { id: "richter-kaiser",      name: "Richter & Kaiser GmbH",        coreAttr: "Skill Tier",    icon: "/brandsets/richter.png",              bonuses: [{ pieces: 1, bonus: "15% Incoming Repairs" },       { pieces: 2, bonus: "40% Explosive Resistance" },    { pieces: 3, bonus: "52% Repair Skills" }] },
  { id: "shiny-monkey-gear",   name: "Shiny Monkey Gear",            coreAttr: "Skill Tier",    icon: "/brandsets/shiny_monkey_gear.png",    bonuses: [{ pieces: 1, bonus: "15% Skill Duration" },         { pieces: 2, bonus: "5% Skill Efficiency" },         { pieces: 3, bonus: "52% Repair Skills" }] },
  { id: "wyvern-wear",         name: "Wyvern Wear",                  coreAttr: "Skill Tier",    icon: "/brandsets/wyvern.png",               bonuses: [{ pieces: 1, bonus: "8% Skill Damage" },            { pieces: 2, bonus: "18% Status Effects" },          { pieces: 3, bonus: "45% Skill Duration" }] },

];

// ─────────────────────────────────────────────────────────────────────────────
// Derived helpers
// ─────────────────────────────────────────────────────────────────────────────

export const BRAND_MAP   = new Map(BRANDS.map(b => [b.id, b]));
export const BRAND_NAMES = BRANDS.map(b => b.name);
