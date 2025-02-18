import { keyPicker } from 'factions/metatagger'
import meta_rule_sources from 'meta/rule_sources'
import { COMBAT_PHASE, END_OF_HERO_PHASE, HERO_PHASE, MOVEMENT_PHASE } from 'types/phases'
import Artifacts from './artifacts'
import CommandAbilities from './command_abilities'
import CommandTraits from './command_traits'

const Flavors = {
  'Jaws of Mork': {
    mandatory: {
      artifacts: [keyPicker(Artifacts, ['Syari Screamersquig'])],
      command_abilities: [keyPicker(CommandAbilities, ["Get Some Loonshine Down 'Em!"])],
      command_traits: [keyPicker(CommandTraits, ['Envoy of the Overbounder'])],
    },
    effects: [
      {
        name: `Running Riot`,
        desc: `You can reroll the roll that determines the Move characteristic of friendly SQUIG units.`,
        when: [MOVEMENT_PHASE],
        rule_sources: [meta_rule_sources.BOOK_BROKEN_REALMS_KRAGNOS],
      },
    ],
  },

  "Glogg's Megamob": {
    mandatory: {
      artifacts: [keyPicker(Artifacts, ['Aetherquartz-studded Hide'])],
      command_abilities: [keyPicker(CommandAbilities, ['Oblivious to Sorcery'])],
      command_traits: [keyPicker(CommandTraits, ['Shepherd of Idiotic Destruction'])],
    },
    effects: [
      {
        name: `Monstrous Regeneration`,
        desc: `Add 1 to the dice that determines if a friendly GLOGG'S MEGAMOB TROGGOTH unit heals any wounds when it uses its Regeneration ability.`,
        when: [HERO_PHASE],
        rule_sources: [meta_rule_sources.BOOK_BROKEN_REALMS_KRAGNOS],
      },
    ],
  },

  'Grimscuttle Tribes': {
    mandatory: {
      artifacts: [keyPicker(Artifacts, ['Shyishan Spider-sigils'])],
      command_abilities: [keyPicker(CommandAbilities, ['Masters of Feigned Flight'])],
      command_traits: [keyPicker(CommandTraits, ['Prophet of da Spider God'])],
    },
    effects: [
      {
        name: `Deff Grotz of Shyish`,
        desc: `Each time a friendly GRIMSCUTTLE SPIDERFANG unit is affected by a spell or endless spell, you can roll a dice. If you do so, on a 5+, ignore the effects of that spell or endless spell on that unit.`,
        when: [HERO_PHASE, END_OF_HERO_PHASE],
        rule_sources: [meta_rule_sources.BOOK_BROKEN_REALMS_KRAGNOS],
      },
      {
        name: `Drawn to the Aetherglow`,
        desc: `You can reroll hit rolls for attacks made with melee weapons by friendly SKITTERSTRAND models if the target is a Wizard of Priest.`,
        when: [COMBAT_PHASE],
        rule_sources: [meta_rule_sources.BOOK_BROKEN_REALMS_KRAGNOS],
      },
    ],
  },
}

export default Flavors
