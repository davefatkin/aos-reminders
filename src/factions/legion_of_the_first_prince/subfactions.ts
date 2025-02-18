import KhorneUnits from 'factions/khorne/units'
import { keyPicker, pickEffects } from 'factions/metatagger'
import NurgleUnits from 'factions/nurgle/units'
import SkavenUnits from 'factions/skaven/units'
import SlaaneshUnits from 'factions/slaanesh/units'
import SlavesUnits from 'factions/slaves_to_darkness/units'
import TzeentchUnits from 'factions/tzeentch/units'
import { LEGION_OF_THE_FIRST_PRINCE } from 'meta/factions'
import Artifacts from './artifacts'
import BattleTraits from './battle_traits'
import CommandTraits from './command_traits'
import Spells from './spells'

const subFactions = {
  [LEGION_OF_THE_FIRST_PRINCE]: {
    effects: pickEffects(BattleTraits, ['Servants of the Dark Master']),

    available: {
      artifacts: [Artifacts],
      battalions: [],
      command_traits: [CommandTraits],
      spells: [Spells],
      units: [
        keyPicker(KhorneUnits, [
          'Bloodcrushers',
          'Bloodletters',
          'Bloodmaster, Herald of Khorne',
          'Bloodthirster of Insensate Rage',
          'Bloodthirster of Unfettered Fury',
          'Exalted Greater Daemon of Khorne',
          'Flesh Hounds',
          'Herald of Khorne on Blood Throne',
          'Karanak',
          'Mazarall the Butcher',
          'Skarbrand',
          'Skull Cannons',
          'Skullmaster, Herald of Khorne',
          'Skulltaker',
          'Wrath of Khorne Bloodthirster',
        ]),
        keyPicker(NurgleUnits, [
          'Beasts of Nurgle',
          'Epidemius, Tallyman of Nurgle',
          'Great Unclean One',
          'Horticulous Slimux',
          'Nurglings',
          'Plague Drones',
          'Plaguebearers',
          'Poxbringer, Herald of Nurgle',
          'Pusgoyle Blightlords',
          'Rotigus',
          'Sloppity Bilepiper, Herald of Nurgle',
          'Spoilpox Scrivener, Herald of Nurgle',
        ]),
        keyPicker(SlaaneshUnits, [
          'Bladebringer, Herald on Exalted Chariot',
          'Bladebringer, Herald on Hellflayer',
          'Bladebringer, Herald on Seeker Chariot',
          'Daemonettes',
          'Exalted Chariot',
          'Fiends',
          'Hellflayer',
          'Infernal Enrapturess, Herald of Slaanesh',
          'Keeper of Secrets w/ Living Whip',
          'Keeper of Secrets w/ Ritual Knife',
          'Keeper of Secrets w/ Shining Aegis',
          'Keeper of Secrets w/ Sinistrous Hand',
          'Seeker Chariots',
          'Seekers',
          'Shalaxi Helbane',
          'Soulfeaster Keeper of Secrets',
          "Syll'Esske, the Vengeful Allegiance",
          'The Contorted Epitome',
          'The Masque',
          'Viceleader, Herald of Slaanesh',
        ]),
        keyPicker(TzeentchUnits, [
          'Burning Chariots of Tzeentch',
          'Changecaster, Herald of Tzeentch',
          'Exalted Flamers of Tzeentch',
          'Exalted Greater Demon of Tzeentch',
          'Fateskimmer, Herald of Tzeentch on Burning Chariot',
          'Flamers of Tzeentch',
          'Fluxmaster, Herald of Tzeentch on Disc',
          'Gaunt Summoner',
          'Gaunt Summoner on Disc of Tzeentch',
          'Horrors of Tzeentch',
          'Kairos Fateweaver',
          'Lord of Change',
          'Screamers of Tzeentch',
          'The Blue Scribes',
          'The Changeling',
        ]),
        keyPicker(SlavesUnits, ["Be'Lakor", 'Daemon Prince', 'Furies', 'Soul Grinder']),
        keyPicker(SkavenUnits, ['Lord Skreech Verminking']),
      ],
    },
  },
}

export default subFactions
