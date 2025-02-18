import { tagAs } from 'factions/metatagger'
import {
  CHARGE_PHASE,
  COMBAT_PHASE,
  DURING_GAME,
  END_OF_BATTLESHOCK_PHASE,
  END_OF_CHARGE_PHASE,
  END_OF_MOVEMENT_PHASE,
  END_OF_SETUP,
  START_OF_CHARGE_PHASE,
  START_OF_GAME,
  TURN_ONE_END_OF_MOVEMENT_PHASE,
  WOUND_ALLOCATION_PHASE,
} from 'types/phases'
import rule_sources from './rule_sources'

const BattleTraits = {
  // Slaanesh Allegiance
  'Thrilling Compulsions': {
    effects: [
      {
        name: `Feast of Depravities`,
        desc: `Keep track of all units that have have taken non-negated wounds or lost models this turn.`,
        when: [WOUND_ALLOCATION_PHASE],
      },
      {
        name: `Feast of Depravities`,
        desc: `Each unit on the battlefield that has taken wounds or lost models this turn provide 1 Depravity Point.`,
        when: [END_OF_BATTLESHOCK_PHASE],
      },
      {
        name: `Feast of Depravities`,
        desc: `If you have any depravity points you may summon one unit from the summoning table. Summoned units must be setup wholly within 12" of a friendly Slaanesh hero and more than 9" from any enemy models.`,
        when: [END_OF_MOVEMENT_PHASE],
      },
      {
        name: `Feast of Depravities`,
        desc: `Summoning Costs:
             1 Soulfeaster Keeper of Secrets -             30 DP
             1 Keeper of Secrets                           12 DP
             30 Daemonettes -                              12 DP
             3 Seeker Chariots -                           10 DP
             20 Daemonettes -                              10 DP
             1 Contorted Epitome -                          9 DP
             1 Bladebringer, Herald on Exalted Chariot -    9 DP
             3 Fiends -                                     8 DP
             1 Bladebringer, Herald on Hellflayer -         8 DP
             1 Exalted Chariot -                            7 DP
             1 Infernal Enrapturess -                       7 DP
             1 Bladebringer, Herald on Seeker Chariot -     7 DP
             1 Hellflayer -                                 7 DP
             1 Viceleader -                                 6 DP
             1 Seeker Chariot -                             6 DP
             5 Seekers -                                    6 DP
             10 Daemonettes -                               6 DP`,
        when: [END_OF_MOVEMENT_PHASE],
      },
      {
        name: `Locus of Diversion`,
        desc: `At the end of the charge phase, each friendly HEDONITE DAEMON HERO within 1" of an enemy unit can create a locus of diversion. If they do so, pick 1 enemy unit that is within 1" of that HERO and roll a dice, adding 1 if that HERO is a GREATER DAEMON. On a 4+, that unit cannot make a pile-in move before it attacks in the following combat phase. You cannot pick the same unit as the target for this ability more than once in the same phase (whether the roll is successful or not).`,
        when: [END_OF_CHARGE_PHASE],
      },
      {
        name: `Euphoric Killers`,
        desc: `If the unmodified hit roll for an attack made with a melee weapon by a HEDONITE model is 6, that attack inflicts 2 hits on the target instead of 1. Make a wound and save roll for each hit. If the attacking model's unit has 20 or more models, its attacks inflict 3 hits on an unmodified hit roll of 6 instead.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  // Invaders Host
  "The Despoiler's Art": {
    effects: [
      {
        name: `Figurehead of the Dark Prince`,
        desc: `This army can have up to 3 generals instead of 1. Only 1 of the generals (your choice) can have a command trait but all 3 are considered to be a general for command ability purposes. An Invaders Host general cannot use a command trait or command ability while within 12" of another Invaders Host general. In addition each time 1 of your generals is slain for the first time, you receive 1 extra command point. You receive the command point for having a general on the battlefield at the start of the hero phase if 1 or more of these generals are on the battlefield (you still only receive 1 command point if you have 2 or more generals on the battlefield). You receive the +2 modifier to the Heroic Leadership heroic action only if all of the generals have been slain.`,
        when: [START_OF_GAME],
        rule_sources: [rule_sources.BATTLETOME_SLAANESH, rule_sources.ERRATA_JULY_2021],
      },
      {
        name: `Escalating Havoc`,
        desc: `You receive 1 depravity point if any friendly Invaders Host units are wholly within enemy territory. If 3 or more friendly Invaders Host units are wholly within enemy territory at the start of your hero phase, you receive D3 depravity points instead.`,
        when: [END_OF_BATTLESHOCK_PHASE],
      },
    ],
  },
  // Pretenders Host
  'Magnificence Made Flesh': {
    effects: [
      {
        name: `Heir to the Throne`,
        desc: `If the general of a Pretenders Host army is a hero, they have 2 different command traits instead of 1. If you randomly generate traits, roll again if the second result matches the first.`,
        when: [START_OF_GAME],
      },
      {
        name: `Heir to the Throne`,
        desc: `You can reroll hit rolls of 1 for attacks made with melee weapons by Pretenders Host units while they have 10 or more models.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Warlord Supreme`,
        desc: `You receive 1 depravity point if your general is within 3" of an enemy unit. If your general is within 3" of 2 or more enemy units you receive D3 depravity points instead.`,
        when: [END_OF_BATTLESHOCK_PHASE],
      },
    ],
  },
  // Godseekers Host
  'Blessings of the Gleeful Chase': {
    effects: [
      {
        name: `Thundering Cavalcade`,
        desc: `Add 1 to charge rolls for units in a Godseekers Host army.`,
        when: [CHARGE_PHASE],
        rule_sources: [
          rule_sources.BATTLETOME_SLAANESH,
          rule_sources.ERRATA_MARCH_2021,
          rule_sources.ERRATA_JULY_2021,
        ],
      },
      {
        name: `Maniacal Hunters`,
        desc: `You receive D3 depravity points if your general made a charge move in this turn. Add 1 to the roll if any other friendly Godseekers Host units made a charge move this turn.`,
        when: [END_OF_CHARGE_PHASE],
      },
    ],
  },
  // Syll'Esskan Host
  'Vengeance Unleashed': {
    effects: [
      {
        name: `Common Purpose`,
        desc: `If the number of mortal units is exactly equal to the number of daemon units in your army, you receive D3 extra command points. If this condition is true and the army contains more that 12 units, you receive D6 command points instead of D3. Syll'Esske counts as 2 units towards this condition (1 mortal, 1 daemon).`,
        when: [START_OF_GAME],
      },
      {
        name: `Deadly Symbiosis`,
        desc: `Add 1 to the number of depravity points you receive in the battleshock phase if a friendly SYLL'ESSKE is on the battlefield and is within 6" of at least 1 other friendly SYLL'ESSKAN HOST DAEMON unit and at least 1 friendly SYLL'ESSKAN HOST MORTAL unit.`,
        when: [DURING_GAME],
        rule_sources: [
          rule_sources.WHITE_DWARF_OCTOBER_2019,
          rule_sources.ERRATA_MARCH_2021,
          rule_sources.ERRATA_JULY_2021,
        ],
      },
    ],
  },
  // Lurid Haze Flavor
  'The Lurid Haze': {
    effects: [
      {
        name: `Billowing Mists`,
        desc: `After set up is complete before the first battle round, you can remove D3 friendly Lurid Haze Invaders Host units from the battlefield and say that they are in ambush as reserves (following any battleplan set-up restrictions). At the end of your first movement phase, you must set up these reserves within 6" of a battlefield edge and more than 9" away from any enemy units.`,
        when: [END_OF_SETUP],
      },
      {
        name: `Billowing Mists`,
        desc: `You must set up the selected reserves within 6" of a battlefield edge and more than 9" away from any enemy units.`,
        when: [TURN_ONE_END_OF_MOVEMENT_PHASE],
      },
    ],
  },
  // Faultless Blades Flavor
  'Faultless Blades': {
    effects: [
      {
        name: `Send Me Your Best`,
        desc: `Add 1 to the hit rolls for melee attacks made by friendly Faultless Blades Pretenders Host units that target a hero if that friendly unit made a charge move this turn.`,
        when: [CHARGE_PHASE, COMBAT_PHASE],
      },
    ],
  },
  // Scarlet Cavalcade Flavor
  'Scarlet Cavalcade': {
    effects: [
      {
        name: `Excessive Swiftness`,
        desc: `If 2 friendly Scarlet Cavalcade Godseekers Host units that each have 10 or more models are within 6" of each other, you can make 1 charge roll to determine the distance for both units.`,
        when: [START_OF_CHARGE_PHASE],
      },
    ],
  },
}

export default tagAs(BattleTraits, 'battle_trait')
