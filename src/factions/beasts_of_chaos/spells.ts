import { tagAs } from 'factions/metatagger'
import { COMBAT_PHASE, HERO_PHASE, SAVES_PHASE } from 'types/phases'
import rule_sources from './rule_sources'

const Spells = {
  // Twisted Wilds
  'Viletide (Brayherd Wizard)': {
    effects: [
      {
        name: `Viletide (Brayherd Wizard)`,
        desc: `Casting value of 6. Pick an enemy unit within 12" of the caster that is visible to them. That unit suffers D3 mortal wounds. If the unit is within 6" of the caster, it suffers D6 mortal wounds instead.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Vicious Stranglethorns (Brayherd Wizard)': {
    effects: [
      {
        name: `Vicious Stranglethorns (Brayherd Wizard)`,
        desc: `Casting value of 7. Pick a terrain feature wholly within 24" of the caster that is visible to them. Each enemy unit within 3" of that terrain feature suffers D3 mortal wounds.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Savage Dominion (Brayherd Wizard)': {
    effects: [
      {
        name: `Savage Dominion (Brayherd Wizard)`,
        desc: `Casting value of 5 and range of 18". Pick 1 enemy MONSTER that is within range and visible to the caster, and roll 2D6. If the roll is equal to or greater than that Monster's Bravery characteristic, pick 1 other enemy unit within 3" of that MONSTER and roll a number of dice equal to that MONSTER Wounds characteristic. For each 4+, that enemy unit suffers 1 mortal wound.`,
        when: [HERO_PHASE],
        rule_sources: [rule_sources.BATTLETOME_BEASTS_OF_CHAOS, rule_sources.ERRATA_JULY_2021],
      },
    ],
  },
  'Tendrils of Atrophy (Brayherd Wizard)': {
    effects: [
      {
        name: `Tendrils of Atrophy (Brayherd Wizard)`,
        desc: `Casting value of 6. Pick an enemy unit within 12" of the caster that is visible to them. Until your next hero phase, subtract 1 from save rolls for attacks that target that unit.`,
        when: [HERO_PHASE],
      },
      {
        name: `Tendrils of Atrophy (Brayherd Wizard)`,
        desc: `If active, until your next hero phase, subtract 1 from save rolls for attacks that target that unit.`,
        when: [SAVES_PHASE],
      },
    ],
  },
  'Wild Rampage (Brayherd Wizard)': {
    effects: [
      {
        name: `Wild Rampage (Brayherd Wizard)`,
        desc: `Casting value of 6. Pick a friendly unit within 12" of the caster that is visible to them. Until your next hero phase, you can reroll failed wound rolls for attacks with melee weapons made by this unit. However, subtract 1 from save rolls for attacks that target this unit.`,
        when: [HERO_PHASE],
      },
      {
        name: `Wild Rampage (Brayherd Wizard)`,
        desc: `If active, subtract 1 from save rolls for attacks that target this friendly unit.`,
        when: [SAVES_PHASE],
      },
    ],
  },
  'Titanic Fury (Brayherd Wizard)': {
    effects: [
      {
        name: `Titanic Fury (Brayherd Wizard)`,
        desc: `Casting value of 7. Pick a friendly BEASTS OF CHAOS MONSTER within 12" of the caster that is visible to them. Until your next hero phase, add 1 to the Attacks characteristic of that MONSTER's melee weapons.`,
        when: [HERO_PHASE],
      },
    ],
  },
  // Dark Storms
  'Thunderwave (Thunderscorn Wizard)': {
    effects: [
      {
        name: `Thunderwave (Thunderscorn Wizard)`,
        desc: `Casting value of 7. Each unit within 3" of the caster suffers D3 mortal wounds. THUNDERSCORN units are not affected by this spell.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Hailstorm (Thunderscorn Wizard)': {
    effects: [
      {
        name: `Hailstorm (Thunderscorn Wizard)`,
        desc: `Casting value of 6. Pick an enemy unit within 21" of the caster that is visible to them. Until your next hero phase, halve the Move characteristic of, and run and charge rolls for, that unit.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Sundering Blades (Thunderscorn Wizard)': {
    effects: [
      {
        name: `Sundering Blades (Thunderscorn Wizard)`,
        desc: `Casting value of 7. Pick a friendly unit wholly within 18" of the caster that is visible to them. Until your next hero phase, improve the Rend characteristic of that unit's melee weapons by 1.`,
        when: [HERO_PHASE],
      },
    ],
  },
  // Unit Spells
  Devolve: {
    effects: [
      {
        name: `Devolve`,
        desc: `Casting value of 7. Pick an enemy unit within 18" of the caster that is visible to them and not within 3" of any friendly units. If it is possible to do so, your opponent must make a normal move with that unit of up to 2D6" so that each model in the unit ends its move as close as possible to a model from the friendly unit that was closest to it at the start of the move.`,
        when: [HERO_PHASE],
        rule_sources: [rule_sources.BATTLETOME_BEASTS_OF_CHAOS, rule_sources.ERRATA_OCTOBER_2022],
      },
    ],
  },
  'Summon Lightning': {
    effects: [
      {
        name: `Summon Lightning`,
        desc: `Casting value of 7. Pick a friendly THUNDERSCORN unit wholly within 20" of the caster and visible to them. You can heal D3 wounds allocated to that unit. In addition, you can reroll failed wound rolls for attacks made by that unit until your next hero phase.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Boon of Mutation': {
    effects: [
      {
        name: `Boon of Mutation`,
        desc: `Casting value of 7 and a range of 18". Pick 1 enemy unit within range and visible to the caster. That unit suffers D3 mortal wounds. For each model that is slain by a mortal wound caused by this spell, you can add 1 Tzaangor model that is not a Tzaangor Champion or Tzaangor Mutant to a friendly TZAANGOR HOST within 12" of the caster. Set up models that are added to a unit one at a time within 1" of the unit they are being added to. Models that are added to a unit can only be set up within 3" of an enemy unit if a model from their unit is already within 3" of that enemy unit. The models added to a unit can take it above its maximum size.`,
        when: [HERO_PHASE],
        rule_sources: [rule_sources.BATTLETOME_BEASTS_OF_CHAOS, rule_sources.ERRATA_OCTOBER_2022],
      },
    ],
  },
  'Savage Bolt': {
    effects: [
      {
        name: `Savage Bolt`,
        desc: `Casting value of 7. Pick 1 enemy unit within 18" of the caster that is visible to them. That unit suffers D3 mortal wounds. Units that attack the target unit in the next combat phase get +1 to their hit rolls.`,
        when: [HERO_PHASE, COMBAT_PHASE],
      },
    ],
  },
}

export default tagAs(Spells, 'spell')
