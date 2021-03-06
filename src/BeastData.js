const beastData ={
    beasts: [
        {
            name: "Allosaurus",
            size: "Large",
            type: "beast",
            alignment: "unaligned",
            ac: "15 (natural armor)",
            hp: "60 (6d10 + 18)",
            speed: "60 ft.",
            strength: "19",
            dexterity: "13",
            constitution: "17",
            intelligence: "2",
            wisdom: "12",
            charisma: "5",
            skill: "Perception +5",
            passive: "15",
            cr: "2",
            trait: {
                traitName: "Pounce",
                text: "If the allosaurus moves at least 30 ft. straight toward a creature and then hits it with a claw attack on the same turn, that target must succeed on a DC 13 Strength saving throw or be knocked prone. If the target is prone, the allosaurus can make one bite attack against it as a bonus action."
            },
            action: [
                {
                    actionName: "Bite",
                    text: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 15 (2d10 + 4) piercing damage.",
                    attack: "Bite|6|2d10+4"
                },
                {
                    actionName: "Claw",
                    text: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 8 (1d8 + 4) slashing damage.",
                    attack: "Claw|6|1d8+4"
                }
            ]
        },
        {
            name: "Ankylosaurus",
            size: "Huge",
            type: "beast",
            alignment: "unaligned",
            ac: "15 (natural armor)",
            hp: "68 (8d12 + 16)",
            speed: "30 ft.",
            strength: "19",
            dexterity: "11",
            constitution: "15",
            intelligence: "2",
            wisdom: "12",
            charisma: "5",
            passive: "11",
            cr: "3",
            action: [
                {
                    actionName: "Tail",
                    text: "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 18 (4d6 + 4) bludgeoning damage. If the target is a creature, it must succeed on a DC 14 Strength saving throw or be knocked prone."
                }
            ]
        },
        {
            name: "Ape",
            size: "Medium",
            type: "beast",
            alignment: "unaligned",
            ac: "12",
            hp: "19 (3d8 + 6)",
            speed: "30 ft.",
            climb: "30 ft.",
            strength: "16",
            dexterity: "14",
            constitution: "14",
            intelligence: "6",
            wisdom: "12",
            charisma: "7",
            skill: "Athletics +5, Perception +3",
            passive: "13",
            cr: "1/2",
            action: [
                {
                    actionName: "Multiattack",
                    text: "The ape makes two fist attacks."
                },
                {
                    actionName: "Fist",
                    text: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) bludgeoning damage.",
                    attack: "Fist|5|1d6+3"
                },
                {
                    actionName: "Rock",
                    text: "Ranged Weapon Attack: +5 to hit, range 25/50 ft., one target. Hit: 6 (1d6 + 3) bludgeoning damage.",
                    attack: "Rock|5|1d6+3"
                }
            ]
        },
        {
            name: "Axe Beak",
            size: "Large",
            type: "beast",
            alignment: "unaligned",
            ac: "11",
            hp: "19 (3d10 + 3)",
            speed: "50 ft.",
            strength: "14",
            dexterity: "12",
            constitution: "12",
            intelligence: "2",
            wisdom: "10",
            charisma: "5",
            passive: "10",
            cr: "1/4",
            action: [
                {
                    actionName: "Beak",
                    text: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8 + 2) slashing damage.",
                    attack: "Beak|4|1d8+2"
                }
            ]   
        },
        {
            name: "Baboon",
            size: "Small",
            type: "beast",
            alignment: "unaligned",
            ac: "12",
            hp: "3 (1d6)",
            speed: "30 ft.",
            climb: "30 ft.",
            strength: "8",
            dexterity: "14",
            constitution: "11",
            intelligence: "4",
            wisdom: "12",
            charisma: "6",
            passive: "11",
            cr: "0",
            trait: {
                traitName: "Pack Tactics",
                text: "The baboon has advantage on an attack roll against a creature if at least one of the baboon's allies is within 5 ft. of the creature and the ally isn't incapacitated."
            },
            action: [
                {
                    actionName: "Bite",
                    text: "Melee Weapon Attack: +1 to hit, reach 5 ft., one target. Hit: 1 (1d4 — 1) piercing damage.",
                    attack: "Bite|1|1d4-1"
                }
            ]
        },
        {
            name: "Badger",
            size: "Tiny",
            type: "beast",
            alignment: "unaligned",
            ac: "10",
            hp: "3 (1d4 + 1)",
            speed: "20 ft.",
            burrow: "5 ft.",
            strength: "4",
            dexterity: "11",
            constitution: "12",
            intelligence: "2",
            wisdom: "12",
            charisma: "5",
            senses: "darkvision 30 ft.",
            passive: "11",
            cr: "0",
            trait: {
                traitName: "Keen Smell",
                text: "The badger has advantage on Wisdom (Perception) checks that rely on smell."
            },
            action: [
                {
                    actionName: "Bite",
                    text: "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 1 piercing damage.",
                    attack: "Bite|2|1"
                }
            ]
        },
        {
            name: "Bat",
            size: "Tiny",
            type: "beast",
            alignment: "unaligned",
            ac: "12",
            hp: "1 (1d4-1)",
            speed: "5 ft.",
            fly: "30 ft.",
            strength: "2",
            dexterity: "15",
            constitution: "8",
            intelligence: "2",
            wisdom: "12",
            charisma: "4",
            senses: "blindsight 60 ft.",
            passive: "11",
            cr: "0",
            trait: [
                {
                    traitName: "Echolocation",
                    text: "The bat can't use its blindsight while deafened."
                },
                {
                    traitName: "Keen Hearing",
                    text: "The bat has advantage on Wisdom (Perception) checks that rely on hearing."
                }
            ],
            action: [
                {
                    actionName: "Bite",
                    text: "Melee Weapon Attack: +0 to hit, reach 5 ft., one creature. Hit: 1 piercing damage.",
                    attack: "Bite||1"
                }
            ]
        },
        {
            name: "Black Bear",
            size: "Medium",
            type: "beast",
            alignment: "unaligned",
            ac: "11 (natural armor)",
            hp: "19 (3d8 + 6)",
            speed: "40 ft.",
            climb: "30 ft.",
            strength: "15",
            dexterity: "10",
            constitution: "14",
            intelligence: "2",
            wisdom: "12",
            charisma: "7",
            passive: "13",
            cr: "1/2",
            trait: {
                traitName: "Keen Smell",
                text: "The bear has advantage on Wisdom (Perception) checks that rely on smell."
            },
            action: [
                {
                    actionName: "Multiattack",
                    text: "The bear makes two attacks: one with its bite and one with its claws."
                },
                {
                    actionName: "Bite",
                    text: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) piercing damage.",
                    attack: "Bite|3|1d6+2"
                },
                {
                    actionName: "Claws",
                    text: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 7 (2d4 + 2) slashing damage.",
                    attack: "Claws|3|2d4+2"
                }
            ]
        },
        {
            name: "Blood Hawk",
            size: "Small",
            type: "beast",
            alignment: "unaligned",
            ac: "12",
            hp: "7 (2d6)",
            speed: "10 ft.",
            fly: "60 ft.",
            strength: "6",
            dexterity: "14",
            constitution: "10",
            intelligence: "3",
            wisdom: "14",
            charisma: "5",
            skill: "Perception +4",
            passive: "14",
            cr: "1/8",
            trait: [
                {
                    traitName: "Keen Sight",
                    text: "The hawk has advantage on Wisdom (Perception) checks that rely on sight."
                },
                {
                    traitName: "Pack Tactics",
                    text: "The hawk has advantage on an attack roll against a creature if at least one of the hawk's allies is within 5 ft. of the creature and the ally isn't incapacitated."
                }
            ],
            action: [
                {
                    actionName: "Beak",
                    text: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4 + 2) piercing damage.",
                    attack: "Beak|4|1d4+2"
                }
            ]
        },
        {
            name: "Boar",
            size: "Medium",
            type: "beast",
            alignment: "unaligned",
            ac: "11 (natural armor)",
            hp: "11 (2d8 + 2)",
            speed: "40 ft.",
            strength: "13",
            dexterity: "11",
            constitution: "12",
            intelligence: "2",
            wisdom: "9",
            charisma: "5",
            passive: "9",
            cr: "1/4",
            trait: [
                {
                    traitName: "Charge",
                    text: "If the boar moves at least 20 ft. straight toward a target and then hits it with a tusk attack on the same turn, the target takes an extra 3 (1d6) slashing damage. If the target is a creature, it must succeed on a DC 11 Strength saving throw or be knocked prone.",
                    attack: "Charge||1d6"
                },
                {
                    traitName: "Relentless (Recharges after a Short or Long Rest)",
                    text: "If the boar takes 7 damage or less that would reduce it to 0 hit points, it is reduced to 1 hit point instead."
                }
            ],
            action: [
                {
                    actionName: "Tusk",
                    text: "Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6 + 1) slashing damage.",
                    attack: "Tusk|3|1d6+1"
                }
            ]
        },
        {
            name: "Brown Bear",
            size: "Large",
            type: "beast",
            alignment: "unaligned",
            ac: "11 (natural armor)",
            hp: "34 (4d10 + 12)",
            speed: "40 ft.",
            climb: "30 ft.",
            strength: "19",
            dexterity: "10",
            constitution: "16",
            intelligence: "2",
            wisdom: "13",
            charisma: "7",
            skill: "Perception +3",
            passive: "13",
            cr: "1",
            trait: {
                traitName: "Keen Smell",
                text: "The bear has advantage on Wisdom (Perception) checks that rely on smell."
            },
            action: [
                {
                    actionName: "Multiattack",
                    text: "The bear makes two attacks: one with its bite and one with its claws."
                },
                {
                    actionName: "Bite",
                    text: "Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 8 (1d8 + 4) piercing damage.",
                    attack: "Bite|5|1d8+4"
                },
                {
                    actionName: "Claws",
                    text: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) slashing damage.",
                    attack: "Claws|5|2d6+4"
                }
            ]
        },
        {
            name: "Camel",
            size: "Large",
            type: "beast",
            alignment: "unaligned",
            ac: "9",
            hp: "15 (2d10 + 4)",
            speed: "50 ft.",
            strength: "16",
            dexterity: "8",
            constitution: "14",
            intelligence: "2",
            wisdom: "8",
            charisma: "5",
            passive: "9",
            cr: "1/8",
            action: [
                {
                    actionName: "Bite",
                    text: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 2 (1d4) bludgeoning damage.",
                    attack: "Bite|5|1d4"
                }
            ]
        },
        {
            name: "Cat",
            size: "Tiny",
            type: "beast",
            alignment: "unaligned",
            ac: "12",
            hp: "2 (1d4)",
            speed: "40 ft.",
            climb: "30 ft.",
            strength: "3",
            dexterity: "15",
            constitution: "10",
            intelligence: "3",
            wisdom: "12",
            charisma: "7",
            skill: "Perception +3, Stealth +4",
            passive: "13",
            cr: "0",
            trait: {
                traitName: "Keen Smell",
                text: "The cat has advantage on Wisdom (Perception) checks that rely on smell."
            },
            action: [
                {
                    actionName: "Claws",
                    text: "Melee Weapon Attack: +0 to hit, reach 5 ft., one target. Hit: 1 slashing damage.",
                    attack: "Claws||1"
                }
            ]
        },
        {
            name: "Cave Bear",
            size: "Large",
            type: "beast",
            alignment: "unaligned",
            ac: "12 (natural armor)",
            hp: "42 (5d10 + 15)",
            speed: "40 ft.",
            swim: "30 ft.",
            strength: "20",
            dexterity: "10",
            constitution: "16",
            intelligence: "2",
            wisdom: "13",
            charisma: "7",
            skill: "Perception +3",
            senses: "darkvision 60 ft.",
            passive: "13",
            cr: "2",
            trait: {
                traitName: "Keen Smell",
                text: "The bear has advantage on Wisdom (Perception) checks that rely on smell."
            },
            action: [
                {
                    actionName: "Multiattack",
                    text: "The bear makes two attacks: one with its bite and one with its claws."
                },
                {
                    actionName: "Bite",
                    text: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 9 (1d8 + 5) piercing damage.",
                    attack: "Bite|7|1d8+5"
                },
                {
                    actionName: "Claws",
                    text: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 12 (2d6 + 5) slashing damage.",
                    attack: "Claws|7|2d6+5"
                }
            ]
        },
        {
            name: "Constrictor Snake",
            size: "Large",
            type: "beast",
            alignment: "unaligned",
            ac: "12",
            hp: "13 (2d10 + 2)",
            speed: "30 ft.",
            swim: "30 ft.",
            strength: "15",
            dexterity: "14",
            constitution: "12",
            intelligence: "1",
            wisdom: "10",
            charisma: "3",
            senses: "blindsight 10 ft.",
            passive: "10",
            cr: "1/4",
            action: [
                {
                    actionName: "Bite",
                    text: "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 5 (1d6 + 2) piercing damage.",
                    attack: "Bite|4|1d6+2"
                },
                {
                    actionName: "Constrict",
                    text: "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 6 (1d8 + 2) bludgeoning damage, and the target is grappled (escape DC 14). Until this grapple ends, the creature is restrained, and the snake can't constrict another target.",
                    attack: "Constrict|4|1d8+2"
                }
            ]
        },
        {
            name: "Crab",
            size: "Tiny",
            type: "beast",
            alignment: "unaligned",
            ac: "11 (natural armor)",
            hp: "2 (1d4)",
            speed: "20 ft.",
            swim: "20 ft.",
            strength: "2",
            dexterity: "11",
            constitution: "10",
            intelligence: "1",
            wisdom: "8",
            charisma: "2",
            skill: "Stealth +2",
            senses: "blindsight 30 ft.",
            passive: "9",
            cr: "0",
            trait: {
                traitName: "Amphibious",
                text: "The crab can breathe air and water."
            },
            action: [
                {
                    actionName: "Claw",
                    text: "Melee Weapon Attack: +0 to hit, reach 5 ft., one target. Hit: 1 bludgeoning damage.",
                    attack: "Claw||1"
                }
            ]
        },
        {
            name: "Crocodile",
            size: "Large",
            type: "beast",
            alignment: "unaligned",
            ac: "12 (natural armor)",
            hp: "19 (3d10 + 3)",
            speed: "20 ft.",
            swim: "20 ft.",
            strength: "15",
            dexterity: "10",
            constitution: "13",
            intelligence: "2",
            wisdom: "10",
            charisma: "5",
            skill: "Stealth +2",
            passive: "10",
            cr: "1/2",
            trait: {
                traitName: "Hold Breath",
                text: "The crocodile can hold its breath for 15 minutes."
            },
            action: [
                {
                    actionName: "Bite",
                    text: "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 7 (1d10 + 2) piercing damage, and the target is grappled (escape DC 12). Until this grapple ends, the target is restrained, and the crocodile can't bite another target",
                    attack: "Bite|4|1d10+2"
                }
            ]
        },
        {
            name: "Deer",
            size: "Medium",
            type: "beast",
            alignment: "unaligned",
            ac: "13",
            hp: "4 (1d8)",
            speed: "50 ft.",
            strength: "11",
            dexterity: "16",
            constitution: "11",
            intelligence: "2",
            wisdom: "14",
            charisma: "5",
            passive: "12",
            cr: "0",
            action: [
                {
                    actionName: "Bite",
                    text: "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 2 (1d4) piercing damage.",
                    attack: "Bite|2|1d4"
                }
            ]
        },
        {
            name: "Dire Wolf",
            size: "Large",
            type: "beast",
            alignment: "unaligned",
            ac: "14 (natural armor)",
            hp: "37 (5d10 + 10)",
            speed: "50 ft.",
            strength: "17",
            dexterity: "15",
            constitution: "15",
            intelligence: "3",
            wisdom: "12",
            charisma: "7",
            skill: "Perception +3, Stealth +4",
            passive: "13",
            cr: "1",
            trait: [
                {
                    traitName: "Keen Hearing and Smell",
                    text: "The wolf has advantage on Wisdom (Perception) checks that rely on hearing or smell."
                },
                {
                    traitName: "Pack Tactics",
                    text: "The wolf has advantage on an attack roll against a creature if at least one of the wolf's allies is within 5 ft. of the creature and the ally isn't incapacitated."
                }
            ],
            action: [{
                actionName: "Bite",
                text: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) piercing damage. If the target is a creature, it must succeed on a DC 13 Strength saving throw or be knocked prone.",
                attack: "Bite|5|2d6+3"
            }
        },
        {
            name: "Draft Horse",
            size: "Large",
            type: "beast",
            alignment: "unaligned",
            ac: "10",
            hp: "19 (3d10 + 3)",
            speed: "40 ft.",
            strength: "18",
            dexterity: "10",
            constitution: "12",
            intelligence: "2",
            wisdom: "11",
            charisma: "7",
            passive: "10",
            cr: "1/4",
            action: [
                {
                    actionName: "Hooves",
                    text: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 9 (2d4 + 4) bludgeoning damage.",
                    attack: "Hooves|6|2d4+4"
                }
            ]
        },
        {
            name: "Eagle",
            size: "Small",
            type: "beast",
            alignment: "unaligned",
            ac: "12",
            hp: "3 (1d6)",
            speed: "10 ft.",
            fly: "60 ft.",
            strength: "6",
            dexterity: "15",
            constitution: "10",
            intelligence: "2",
            wisdom: "14",
            charisma: "7",
            skill: "Perception +4",
            passive: "14",
            cr: "0",
            trait: {
                traitName: "Keen Sight",
                text: "The eagle has advantage on Wisdom (Perception) checks that rely on sight."
            },
            action: [
                {
                    actionName: "Talons",
                    text: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4 + 2) slashing damage.",
                    attack: "Talons|4|1d4+2"
                }

            ]
        },
        {
            name: "Elephant",
            size: "Huge",
            type: "beast",
            alignment: "unaligned",
            ac: "12 (natural armor)",
            hp: "76 (8d12 + 24)",
            speed: "40 ft.",
            strength: "22",
            dexterity: "9",
            constitution: "17",
            intelligence: "3",
            wisdom: "11",
            charisma: "6",
            passive: "10",
            cr: "4",
            trait: {
                traitName: "Trampling Charge",
                text: "If the elephant moves at least 20 ft. straight toward a creature and then hits it with a gore attack on the same turn, that target must succeed on a DC 12 Strength saving throw or be knocked prone. If the target is prone, the elephant can make one stomp attack against it as a bonus action."
            },
            action: [
                {
                    actionName: "Gore",
                    text: "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 18 (3d8 + 5) piercing damage.",
                    attack: "Gore|8|3d8+5"
                },
                {
                    actionName: "Stomp",
                    text: "Melee Weapon Attack: +8 to hit, reach 5 ft., one prone creature. Hit: 21 (3d10 + 5) bludgeoning damage.",
                    attack: "Stomp|8|3d10+5"
                }
            ]
        },
        {
            name: "Elk",
            size: "Large",
            type: "beast",
            alignment: "unaligned",
            ac: "10",
            hp: "13 (2d10 + 2)",
            speed: "50 ft.",
            strength: "16",
            dexterity: "10",
            constitution: "12",
            intelligence: "2",
            wisdom: "10",
            charisma: "6",
            passive: "10",
            cr: "1/4",
            trait: {
                traitName: "Charge",
                text: "If the elk moves at least 20 ft. straight toward a target and then hits it with a ram attack on the same turn, the target takes an extra 7 (2d6) damage. If the target is a creature, it must succeed on a DC 13 Strength saving throw or be knocked prone.",
                attack: "Charge||2d6"
            },
            action: [
                {
                    actionName: "Ram",
                    text: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) bludgeoning damage."
                },
                {
                    actionName: "Hooves",
                    text: "Melee Weapon Attack: +5 to hit, reach 5 ft., one prone creature. Hit: 8 (2d4 + 3) bludgeoning damage."
                }
            ]
        },
        {
            name: "Flying Snake",
            size: "Tiny",
            type: "beast",
            alignment: "unaligned",
            ac: "14",
            hp: "5 (2d4)",
            speed: "30 ft.",
            fly: "60 ft.",
            swim: "30 ft.",
            strength: "4",
            dexterity: "18",
            constitution: "11",
            intelligence: "2",
            wisdom: "12",
            charisma: "5",
            senses: "blindsight 10 ft.",
            passive: "11",
            cr: "1/8",
            trait: {
                traitName: "Flyby",
                text: "The snake doesn't provoke opportunity attacks when it flies out of an enemy's reach."
            },
            action: [{
                actionName: "Bite",
                text: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 1 piercing damage plus 7 (3d4) poison damage.",
                attack: "Bite|6|1"
            }
        },
        {
            name: "Frog",
            size: "Tiny",
            type: "beast",
            alignment: "unaligned",
            ac: "11",
            hp: "1 (1d4-1)",
            speed: "20 ft.",
            swim: "20 ft.",
            strength: "1",
            dexterity: "13",
            constitution: "8",
            intelligence: "1",
            wisdom: "8",
            charisma: "3",
            skill: "Perception +1, Stealth +3",
            senses: "darkvision 30 ft.",
            passive: "11",
            cr: "0",
            trait: [
                {
                    traitName: "Amphibious",
                    text: "The frog can breathe air and water"
                },
                {
                    traitName: "Standing Leap",
                    text: "The frog's long jump is up to 10 ft. and its high jump is up to 5 ft., with or without a running start."
                }
            ]
        },
        {
            name: "Giant Badger",
            size: "Medium",
            type: "beast",
            alignment: "unaligned",
            ac: "10",
            hp: "13 (2d8 + 4)",
            speed: "30 ft.",
            burrow: "10 ft.",
            strength: "13",
            dexterity: "10",
            constitution: "15",
            intelligence: "2",
            wisdom: "12",
            charisma: "5",
            senses: "darkvision 30 ft.",
            passive: "11",
            cr: "1/4",
            trait: {
                traitName: "Keen Smell",
                text: "The badger has advantage on Wisdom (Perception) checks that rely on smell."
            },
            action: [
                {
                    actionName: "Multiattack",
                    text: "The badger makes two attacks: one with its bite and one with its claws."
                },
                {
                    actionName: "Bite",
                    text: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6 + 1) piercing damage.",
                    attack: "Bite|3|1d6+1"
                },
                {
                    actionName: "Claws",
                    text: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 6 (2d4 + 1) slashing damage.",
                    attack: "Claws|3|2d4+1"
                }
            ]
        },
        {
            name: "Giant Bat",
            size: "Large",
            type: "beast",
            alignment: "unaligned",
            ac: "13",
            hp: "22 (4d10)",
            speed: "10 ft.",
            fly: "60 ft.",
            strength: "15",
            dexterity: "16",
            constitution: "11",
            intelligence: "2",
            wisdom: "12",
            charisma: "6",
            senses: "blindsight 60 ft.",
            passive: "11",
            cr: "1/4",
            trait: [
                {
                    traitName: "Echolocation",
                    text: "The bat can't use its blindsight while deafened."
                },
                {
                    traitName: "Keen Hearing",
                    text: "The bat has advantage on Wisdom (Perception) checks that rely on hearing."
                }
            ],
            action: [{
                actionName: "Bite",
                text: "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 5 (1d6 + 2) piercing damage.",
                attack: "Bite|4|1d6+2"
            }
        },
        {
            name: "Giant Boar",
            size: "Large",
            type: "beast",
            alignment: "unaligned",
            ac: "12 (natural armor)",
            hp: "42 (5d10 + 5)",
            speed: "40 ft.",
            strength: "17",
            dexterity: "10",
            constitution: "16",
            intelligence: "2",
            wisdom: "7",
            charisma: "5",
            passive: "8",
            cr: "2",
            trait: [
                {
                    traitName: "Charge",
                    text: "If the boar moves at least 20 ft. straight toward a target and then hits it with a tusk attack on the same turn, the target takes an extra 7 (2d6) slashing damage. If the target is a creature, it must succeed on a DC 13 Strength saving throw or be knocked prone.",
                    attack: "Charge||2d6"
                },
                {
                    traitName: "Relentless (Recharges after a Short or Long Rest)",
                    text: "If the boar takes 10 damage or less that would reduce it to 0 hit points, it is reduced to 1 hit point instead."
                }
            ],
            action: [{
                actionName: "Tusk",
                text: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) slashing damage.",
                attack: "Tusk|5|2d6+3"
            }
        },
        {
            name: "Giant Centipede",
            size: "Small",
            type: "beast",
            alignment: "unaligned",
            ac: "13 (natural armor)",
            hp: "4 (1d6 + 1)",
            speed: "30 ft.",
            climb: "30 ft.",
            strength: "5",
            dexterity: "14",
            constitution: "12",
            intelligence: "1",
            wisdom: "7",
            charisma: "3",
            senses: "blindsight 30 ft.",
            passive: "8",
            cr: "1/4",
            action: [{
                actionName: "Bite",
                text: "Bite. Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 4 (1d4 + 2) piercing damage, and the target must succeed on a DC 11 Constitution saving throw or take 10 (3d6) poison damage. If the poison damage reduces the target to 0 hit points, the target is stable but poisoned for 1 hour, even after regaining hit points, and is paralyzed while poisoned in this way.",
                attack: "Bite|4|1d4+2"
            }
        },
        {
            name: "Giant Constrictor Snake",
            size: "Huge",
            type: "beast",
            alignment: "unaligned",
            ac: "12",
            hp: "60 (8d12 + 8)",
            speed: "30 ft.",
            swim: "30 ft.",
            strength: "19",
            dexterity: "14",
            constitution: "12",
            intelligence: "1",
            wisdom: "10",
            charisma: "3",
            skill: "Perception +2",
            senses: "blindsight 10 ft.",
            passive: "12",
            cr: "2",
            action: [
                {
                    actionName: "Bite",
                    text: "Melee Weapon Attack: +6 to hit, reach 10 ft., one creature. Hit: 11 (2d6 + 4) piercing damage.",
                    attack: "Bite|6|2d6+4"
                },
                {
                    actionName: "Constrict",
                    text: "Melee Weapon Attack: +6 to hit, reach 5 ft., one creature. Hit: 13 (2d8 + 4) bludgeoning damage, and the target is grappled (escape DC 16). Until this grapple ends, the creature is restrained, and the snake can't constrict another target.",
                    attack: "Constrict|6|2d8+4"
                }
            ]
        },
        {
            name: "Giant Crab",
            size: "Medium",
            type: "beast",
            alignment: "unaligned",
            ac: "15 (natural armor)",
            hp: "13 (3d8)",
            speed: "30 ft.",
            swim: "30 ft.",
            strength: "13",
            dexterity: "15",
            constitution: "11",
            intelligence: "1",
            wisdom: "9",
            charisma: "3",
            skill: "Stealth +4",
            senses: "blindsight 30 ft.",
            passive: "9",
            cr: "1/8",
            trait: {
                traitName: "Amphibious",
                text: "The crab can breathe air and water."
            },
            action: [{
                actionName: "Claw",
                text: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6 + 1) bludgeoning damage, and the target is grappled (escape DC 11). The crab has two claws, each of which can grapple only one target.",
                attack: "Claw|3|1d6+1"
            }
        },
        {
            name: "Giant Crocodile",
            size: "Huge",
            type: "beast",
            alignment: "unaligned",
            ac: "14 (natural armor)",
            hp: "85 (9d12 + 27)",
            speed: "30 ft.",
            swim: "50 ft.",
            strength: "21",
            dexterity: "9",
            constitution: "17",
            intelligence: "2",
            wisdom: "10",
            charisma: "7",
            skill: "Stealth +5",
            passive: "10",
            cr: "5",
            trait: {
                traitName: "Hold Breath",
                text: "The crocodile can hold its breath for 30 minutes."
            },
            action: [
                {
                    actionName: "Multiattack",
                    text: "The crocodile makes two attacks: one with its bite and one with its tail."
                },
                {
                    actionName: "Bite",
                    text: "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 21 (3d10 + 5) piercing damage, and the target is grappled (escape DC 16). Until this grapple ends, the target is restrained, and the crocodile can't bite another target.",
                    attack: "Bite|8|3d10+5"
                },
                {
                    actionName: "Tail",
                    text: "Melee Weapon Attack: +8 to hit, reach 10 ft., one target not grappled by the crocodile. Hit: 14 (2d8 + 5) bludgeoning damage. If the target is a creature, it must succeed on a DC 16 Strength saving throw or be knocked prone.",
                    attack: "Tail|8|2d8+5"
                }
            ]
        },
        {
            name: "Giant Eagle",
            size: "Large",
            type: "beast",
            alignment: "neutral good",
            ac: "13",
            hp: "26 (4d10 + 4)",
            speed: "10 ft.",
            fly: "80 ft.",
            strength: "16",
            dexterity: "17",
            constitution: "13",
            intelligence: "8",
            wisdom: "14",
            charisma: "10",
            skill: "Perception +4",
            passive: "14",
            "languages": "Giant Eagle, understands Common and Auran but can't speak",
            cr: "1",
            trait: {
                traitName: "Keen Sight",
                text: "The eagle has advantage on Wisdom (Perception) checks that rely on sight."
            },
            action: [
                {
                    actionName: "Multiattack",
                    text: "The eagle makes two attacks: one with its beak and one with its talons."
                },
                {
                    actionName: "Beak",
                    text: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) piercing damage.",
                    attack: "Beak|5|1d6+3"
                },
                {
                    actionName: "Talons",
                    text: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) slashing damage.",
                    attack: "Talons|5|2d6+3"
                }
            ]
        },
        {
            name: "Giant Elk",
            size: "Huge",
            type: "beast",
            alignment: "unaligned",
            ac: "15 (natural armor)",
            hp: "42 (5d12 + 10)",
            speed: "60 ft.",
            strength: "19",
            dexterity: "16",
            constitution: "14",
            intelligence: "7",
            wisdom: "14",
            charisma: "10",
            skill: "Perception +4",
            passive: "14",
            "languages": "Giant Elk, understands Common, Elvish, and Sylvan but can't speak",
            cr: "2",
            trait: {
                traitName: "Charge",
                text: "If the elk moves at least 20 ft. straight toward a target and then hits it with a ram attack on the same turn, the target takes an extra 7 (2d6) damage. If the target is a creature, it must succeed on a DC 14 Strength saving throw or be knocked prone.",
                attack: "Charge||2d6"
            },
            action: [
                {
                    actionName: "Ram",
                    text: "Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 11 (2d6 + 4) bludgeoning damage.",
                    attack: "Ram|6|2d6+4"
                },
                {
                    actionName: "Hooves",
                    text: "Melee Weapon Attack: +6 to hit, reach 5 ft., one prone creature. Hit: 22 (4d8 + 4) bludgeoning damage.",
                    attack: "Hooves|6|4d8+4"
                }
            ]
        },
        {
            name: "Giant Fire Beetle",
            size: "Small",
            type: "beast",
            alignment: "unaligned",
            ac: "13 (natural armor)",
            hp: "4 (1d6 + 1)",
            speed: "30 ft.",
            strength: "8",
            dexterity: "10",
            constitution: "12",
            intelligence: "1",
            wisdom: "7",
            charisma: "3",
            senses: "blindsight 30 ft.",
            passive: "8",
            cr: "0",
            trait: {
                traitName: "Illumination",
                text: "The beetle sheds bright light in a 10-foot radius and dim light for an additional 10 ft.."
            },
            action: [{
                actionName: "Bite",
                text: "Melee Weapon Attack: +1 to hit, reach 5 ft., one target. Hit: 2 (1d6 — 1) slashing damage.",
                attack: "Bite|1|1d6-1"
            }
        },
        {
            name: "Giant Fly",
            size: "Large",
            type: "beast",
            alignment: "unaligned",
            ac: "11",
            hp: "19 (3d10 + 3)",
            speed: "30 ft.",
            fly: "60 ft.",
            strength: "14",
            dexterity: "13",
            constitution: "13",
            intelligence: "2",
            wisdom: "10",
            charisma: "3",
            senses: "darkvision 60 ft.",
            passive: "10",
            cr: "0"
        },
        {
            name: "Giant Frog",
            size: "Medium",
            type: "beast",
            alignment: "unaligned",
            ac: "11",
            hp: "18 (4d8)",
            speed: "30 ft.",
            swim: "30 ft.",
            strength: "12",
            dexterity: "13",
            constitution: "11",
            intelligence: "2",
            wisdom: "10",
            charisma: "3",
            skill: "Perception +2, Stealth +3",
            senses: "darkvision 30 ft.",
            passive: "12",
            cr: "1/4",
            trait: [
                {
                    traitName: "Amphibious",
                    text: "The frog can breathe air and water"
                },
                {
                    traitName: "Standing Leap",
                    text: "The frog's long jump is up to 20 ft. and its high jump is up to 10 ft., with or without a running start."
                }
            ],
            action: [
                {
                    actionName: "Bite",
                    text: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6 + 1) piercing damage, and the target is grappled (escape DC 11). Until this grapple ends, the target is restrained, and the frog can't bite another target.",
                    attack: "Bite|3|1d6+1"
                },
                {
                    actionName: "Swallow",
                    text: "The frog makes one bite attack against a Small or smaller target it is grappling. If the attack hits, the target is swallowed, and the grapple ends. The swallowed target is blinded and restrained, it has total cover against attacks and other effects outside the frog, and it takes 5 (2d4) acid damage at the start of each of the frog's turns. The frog can have only one target swallowed at a time. If the frog dies, a swallowed creature is no longer restrained by it and can escape from the corpse using 5 ft. of movement, exiting prone."
                }
            ]
        },
        {
            name: "Giant Goat",
            size: "Large",
            type: "beast",
            alignment: "unaligned",
            ac: "11 (natural armor)",
            hp: "19 (3d10 + 3)",
            speed: "40 ft.",
            strength: "17",
            dexterity: "11",
            constitution: "12",
            intelligence: "3",
            wisdom: "12",
            charisma: "6",
            passive: "11",
            cr: "1/2",
            trait: [
                {
                    traitName: "Charge",
                    text: "If the goat moves at least 20 ft. straight toward a target and then hits it with a ram attack on the same turn, the target takes an extra 5 (2d4) bludgeoning damage. If the target is a creature, it must succeed on a DC 13 Strength saving throw or be knocked prone.",
                    attack: "Charge||2d4"
                },
                {
                    traitName: "Sure-Footed",
                    text: "The goat has advantage on Strength and Dexterity saving throws made against effects that would knock it prone."
                }
            ],
            action: [{
                actionName: "Ram",
                text: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 8 (2d4 + 3) bludgeoning damage.",
                attack: "Ram|5|2d4+3"
            }
        },
        {
            name: "Giant Hyena",
            size: "Large",
            type: "beast",
            alignment: "unaligned",
            ac: "12",
            hp: "45 (6d10 + 12)",
            speed: "50 ft.",
            strength: "16",
            dexterity: "14",
            constitution: "14",
            intelligence: "2",
            wisdom: "12",
            charisma: "7",
            skill: "Perception +3",
            passive: "13",
            cr: "1",
            trait: {
                traitName: "Rampage",
                text: "When the hyena reduces a creature to 0 hit points with a melee attack on its turn, the hyena can take a bonus action to move up to half its speed and make a bite attack."
            },
            action: [{
                actionName: "Bite",
                text: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) piercing damage.",
                attack: "Bite|5|1d6+3"
            }
        },
        {
            name: "Giant Lizard",
            size: "Large",
            type: "beast",
            alignment: "unaligned",
            ac: "12 (natural armor)",
            hp: "19 (3d10 + 3)",
            speed: "30 ft.",
            climb: "30 ft.",
            strength: "15",
            dexterity: "12",
            constitution: "13",
            intelligence: "2",
            wisdom: "10",
            charisma: "5",
            senses: "darkvision 30 ft.",
            passive: "10",
            cr: "1/4",
            trait: [
                {
                    traitName: "Variant: Hold Breath",
                    text: "The lizard can hold its breath for 15 minutes. (A lizard that has this trait also has a swimming speed of 30 feet.)"
                },
                {
                    traitName: "Variant: Spider Climb",
                    text: "The lizard can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
                }
            ],
            action: [{
                actionName: "Bite",
                text: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8 + 2) piercing damage.",
                attack: "Bite|4|1d8+2"
            }
        },
        {
            name: "Giant Octopus",
            size: "Large",
            type: "beast",
            alignment: "unaligned",
            ac: "11",
            hp: "52 (8d10 + 8)",
            speed: "10 ft.",
            swim: "60 ft.",
            strength: "17",
            dexterity: "13",
            constitution: "13",
            intelligence: "4",
            wisdom: "10",
            charisma: "4",
            skill: "Perception +4, Stealth +5",
            senses: "darkvision 60 ft.",
            passive: "14",
            cr: "1",
            trait: [
                {
                    traitName: "Hold Breath",
                    text: "While out of water, the octopus can hold its breath for 1 hour."
                },
                {
                    traitName: "Underwater Camouflage",
                    text: "The octopus has advantage on Dexterity (Stealth) checks made while underwater."
                },
                {
                    traitName: "Water Breathing",
                    text: "The octopus can breathe only underwater."
                }
            ],
            action: [
                {
                    actionName: "Tentacles",
                    text: "Melee Weapon Attack: +5 to hit, reach 15 ft., one target. Hit: 10 (2d6 + 3) bludgeoning damage. If the target is a creature, it is grappled (escape DC 16). Until this grapple ends, the target is restrained, and the octopus can't use its tentacles on another target.",
                    attack: "Tentacles|5|2d6+3"
                },
                {
                    actionName: "Ink Cloud (Recharges after a Short or Long Rest)",
                    text: "A 20-foot-radius cloud of ink extends all around the octopus if it is underwater. The area is heavily obscured for 1 minute, although a significant current can disperse the ink. After releasing the ink, the octopus can use the Dash action as a bonus action."
                }
            ]
        },
        {
            name: "Giant Owl",
            size: "Large",
            type: "beast",
            alignment: "neutral",
            ac: "12",
            hp: "19 (3d10 + 3)",
            speed: "5 ft.",
            fly: "60 ft.",
            strength: "13",
            dexterity: "15",
            constitution: "12",
            intelligence: "8",
            wisdom: "13",
            charisma: "10",
            skill: "Perception +5, Stealth +4",
            senses: "darkvision 120 ft.",
            passive: "15",
            "languages": "Giant Owl, understands Common, Elvish, and Sylvan but can't speak",
            cr: "1/4",
            trait: [
                {
                    traitName: "Flyby",
                    text: "The owl doesn't provoke opportunity attacks when it flies out of an enemy's reach."
                },
                {
                    traitName: "Keen Hearing and Sight",
                    text: "The owl has advantage on Wisdom (Perception) checks that rely on hearing or sight."
                }
            ],
            action: [{
                actionName: "Talons",
                text: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 8 (2d6 + 1) slashing damage.",
                attack: "Talons|3|2d6+1"
            }
        },
        {
            name: "Giant Poisonous Snake",
            size: "Medium",
            type: "beast",
            alignment: "unaligned",
            ac: "14",
            hp: "11 (2d8 + 2)",
            speed: "30 ft.",
            swim: "30 ft.",
            strength: "10",
            dexterity: "18",
            constitution: "13",
            intelligence: "2",
            wisdom: "10",
            charisma: "3",
            skill: "Perception +2",
            senses: "blindsight 10 ft.",
            passive: "12",
            cr: "1/4",
            action: [{
                actionName: "Bite",
                text: "Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 6 (1d4 + 4) piercing damage, and the target must make a DC 11 Constitution saving throw, taking 10 (3d6) poison damage on a failed save, or half as much damage on a successful one.",
                attack: "Bite|6|1d4+4"
            }
        },
        {
            name: "Giant Rat",
            size: "Small",
            type: "beast",
            alignment: "unaligned",
            ac: "12",
            hp: "7 (2d6)",
            speed: "30 ft.",
            strength: "7",
            dexterity: "15",
            constitution: "11",
            intelligence: "2",
            wisdom: "10",
            charisma: "4",
            senses: "darkvision 60 ft.",
            passive: "10",
            cr: "1/8",
            trait: [
                {
                    traitName: "Keen Smell",
                    text: "The rat has advantage on Wisdom (Perception) checks that rely on smell."
                },
                {
                    traitName: "Pack Tactics",
                    text: "The rat has advantage on an attack roll against a creature if at least one of the rat's allies is within 5 ft. of the creature and the ally isn't incapacitated."
                }
            ],
            action: [{
                actionName: "Bite",
                text: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4 + 2) piercing damage.",
                attack: "Bite|4|1d4+2"
            }
        },
        {
            name: "Giant Rat (Diseased)",
            size: "Small",
            type: "beast",
            alignment: "unaligned",
            ac: "12",
            hp: "7 (2d6)",
            speed: "30 ft.",
            strength: "7",
            dexterity: "15",
            constitution: "11",
            intelligence: "2",
            wisdom: "10",
            charisma: "4",
            senses: "darkvision 60 ft.",
            passive: "10",
            cr: "1/8",
            action: [{
                actionName: "Bite",
                text: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 3 (1d4 + 1) piercing damage. If the target is a creature, it must succeed on a DC 10 Constitution saving throw or contract a disease. Until the disease is cured, the target can't regain hit points except by magical means, and the target's hit point maximum decreases by 3 (1d6) every 24 hours. If the target's hit point maximum drops to 0 as a result of this disease, the target dies.",
                attack: "Bite|3|1d4+1"
            }
        },
        {
            name: "Giant Scorpion",
            size: "Large",
            type: "beast",
            alignment: "unaligned",
            ac: "15 (natural armor)",
            hp: "52 (7d10 + 14)",
            speed: "40 ft.",
            strength: "15",
            dexterity: "13",
            constitution: "15",
            intelligence: "1",
            wisdom: "9",
            charisma: "3",
            senses: "blindsight 60 ft.",
            passive: "9",
            cr: "3",
            action: [
                {
                    actionName: "Claw",
                    text: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8 + 2) bludgeoning damage, and the target is grappled (escape DC 12). The scorpion has two claws, each of which can grapple only one target.",
                    attack: "Claw|4|1d8+2"
                },
                {
                    actionName: "Multiattack",
                    text: "The scorpion makes three attacks: two with its claws and one with its sting."
                },
                {
                    actionName: "Sting",
                    text: "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 7 (1d10 + 2) piercing damage, and the target must make a DC 12 Constitution saving throw, taking 22 (4d10) poison damage on a failed save, or half as much damage on a successful one.",
                    attack: "Sting|4|1d10+2"
                }
            ]
        },
        {
            name: "Giant Sea Horse",
            size: "Large",
            type: "beast",
            alignment: "unaligned",
            ac: "13 (natural armor)",
            hp: "16 (3d10)",
            speed: "0 ft.",
            swim: "40 ft.",
            strength: "12",
            dexterity: "15",
            constitution: "11",
            intelligence: "2",
            wisdom: "12",
            charisma: "5",
            passive: "11",
            cr: "1/2",
            trait: [
                {
                    traitName: "Charge",
                    text: "If the sea horse moves at least 20 ft. straight toward a target and then hits it with a ram attack on the same turn, the target takes an extra 7 (2d6) bludgeoning damage. If the target is a creature, it must succeed on a DC 11 Strength saving throw or be knocked prone.",
                    attack: "Charge||2d6"
                },
                {
                    traitName: "Water Breathing",
                    text: "The sea horse can breathe only underwater."
                }
            ],
            action: [{
                actionName: "Ram",
                text: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6 + 1) bludgeoning damage.",
                attack: "|3|1d6+1"
            }
        },
        {
            name: "Giant Shark",
            size: "Huge",
            type: "beast",
            alignment: "unaligned",
            ac: "13 (natural armor)",
            hp: "126 (11d12 + 55)",
            speed: "swim 50 ft.",
            strength: "23",
            dexterity: "11",
            constitution: "21",
            intelligence: "1",
            wisdom: "10",
            charisma: "5",
            skill: "Perception +3",
            senses: "blindsight 60 ft.",
            passive: "13",
            cr: "5",
            trait: [
                {
                    traitName: "Blood Frenzy",
                    text: "The shark has advantage on melee attack rolls against any creature that doesn't have all its hit points."
                },
                {
                    traitName: "Water Breathing",
                    text: "The shark can breathe only underwater."
                }
            ],
            action: [{
                actionName: "Bite",
                text: "Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 22 (3d10 + 6) piercing damage.",
                attack: "Bite|9|3d10+6"
            }
        },
        {
            name: "Giant Spider",
            size: "Large",
            type: "beast",
            alignment: "unaligned",
            ac: "14 (natural armor)",
            hp: "26 (4d10 + 4)",
            speed: "30 ft.",
            climb: "30 ft.",
            strength: "14",
            dexterity: "16",
            constitution: "12",
            intelligence: "2",
            wisdom: "11",
            charisma: "4",
            skill: "Stealth +7",
            senses: "blindsight 10 ft., darkvision 60 ft.",
            passive: "10",
            cr: "1",
            trait: [
                {
                    traitName: "Spider Climb",
                    text: "The spider can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
                },
                {
                    traitName: "Web Sense",
                    text: "While in contact with a web, the spider knows the exact location of any other creature in contact with the same web."
                },
                {
                    traitName: "Web Walker",
                    text: "The spider ignores movement restrictions caused by webbing."
                }
            ],
            action: [
                {
                    actionName: "Bite",
                    text: "Melee Weapon Attack: +5 to hit, reach 5 ft., one creature. Hit: 7 (1d8 + 3) piercing damage, and the target must make a DC 11 Constitution saving throw, taking 9 (2d8) poison damage on a failed save, or half as much damage on a successful one. If the poison damage reduces the target to 0 hit points, the target is stable but poisoned for 1 hour, even after regaining hit points, and is paralyzed while poisoned in this way.",
                    attack: "Bite|5|1d8+3"
                },
                {
                    actionName: "Web (Recharge 5-6)",
                    text: "Ranged Weapon Attack: +5 to hit, range 30/60 ft., one creature. Hit: The target is restrained by webbing. As an action, the restrained target can make a DC 12 Strength check, bursting the webbing on a success. The webbing can also be attacked and destroyed (AC 10; hp 5; vulnerability to fire damage; immunity to bludgeoning, poison, and psychic damage).",
                    attack: "Web|5|0"
                }
            ]
        },
        {
            name: "Giant Toad",
            size: "Large",
            type: "beast",
            alignment: "unaligned",
            ac: "11",
            hp: "39 (6d10 + 6)",
            speed: "20 ft.",
            swim: "40 ft.",
            strength: "15",
            dexterity: "13",
            constitution: "13",
            intelligence: "2",
            wisdom: "10",
            charisma: "3",
            senses: "darkvision 30 ft.",
            passive: "10",
            cr: "1",
            trait: [
                {
                    traitName: "Amphibious",
                    text: "The toad can breathe air and water"
                },
                {
                    traitName: "Standing Leap",
                    text: "The toad's long jump is up to 20 ft. and its high jump is up to 10 ft., with or without a running start."
                }
            ],
            action: [
                {
                    actionName: "Bite",
                    text: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (1d10 + 2) piercing damage plus 5 (1d10) poison damage, and the target is grappled (escape DC 13). Until this grapple ends, the target is restrained, and the toad can't bite another target.",
                    attack: "Bite|4|1d10+2"
                },
                {
                    actionName: "Swallow",
                    text: [
                        "The toad makes one bite attack against a Medium or smaller target it is grappling. If the attack hits, the target is swallowed, and the grapple ends. The swallowed target is blinded and restrained, it has total cover against attacks and other effects outside the toad, and it takes 10 (3d6) acid damage at the start of each of the toad's turns. The toad can have only one target swallowed at a time.",
                        "If the toad dies, a swallowed creature is no longer restrained by it and can escape from the corpse using 5 feet of movement, exiting prone."
                    ]
                }
            ]
        },
        {
            name: "Giant Vulture",
            size: "Large",
            type: "beast",
            alignment: "neutral evil",
            ac: "10",
            hp: "22 (3d10 + 6)",
            speed: "10 ft.",
            fly: "60 ft.",
            strength: "15",
            dexterity: "10",
            constitution: "15",
            intelligence: "6",
            wisdom: "12",
            charisma: "7",
            skill: "Perception +3",
            passive: "13",
            "languages": "understands Common but can't speak",
            cr: "1",
            trait: [
                {
                    traitName: "Keen Sight and Smell",
                    text: "The vulture has advantage on Wisdom (Perception) checks that rely on sight or smell."
                },
                {
                    traitName: "Pack Tactics",
                    text: "The vulture has advantage on an attack roll against a creature if at least one of the vulture's allies is within 5 ft. of the creature and the ally isn't incapacitated."
                }
            ],
            action: [
                {
                    actionName: "Multiattack",
                    text: "The vulture makes two attacks: one with its beak and one with its talons."
                },
                {
                    actionName: "Beak",
                    text: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (2d4 + 2) piercing damage.",
                    attack: "Beak|4|2d4+2"
                },
                {
                    actionName: "Talons",
                    text: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 9 (2d6 + 2) slashing damage.",
                    attack: "Talons|4|2d6+2"
                }
            ]
        },
        {
            name: "Giant Wasp",
            size: "Medium",
            type: "beast",
            alignment: "unaligned",
            ac: "12",
            hp: "13 (3d8)",
            speed: "10 ft.",
            fly: "50 ft.",
            strength: "10",
            dexterity: "14",
            constitution: "10",
            intelligence: "1",
            wisdom: "10",
            charisma: "3",
            passive: "10",
            cr: "1/2",
            action: [{
                actionName: "Sting",
                text: "Sting. Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 5 (1d6 + 2) piercing damage, and the target must make a DC 11 Constitution saving throw, taking 10 (3d6) poison damage on a failed save, or half as much damage on a successful one. If the poison damage reduces the target to 0 hit points, the target is stable but poisoned for 1 hour, even after regaining hit points, and is paralyzed while poisoned in this way.",
                attack: "Sting|4|1d6+2"
            }
        },
        {
            name: "Giant Weasel",
            size: "Medium",
            type: "beast",
            alignment: "unaligned",
            ac: "13",
            hp: "9 (2d8)",
            speed: "40 ft.",
            strength: "11",
            dexterity: "16",
            constitution: "10",
            intelligence: "4",
            wisdom: "12",
            charisma: "5",
            skill: "Perception +3, Stealth +5",
            senses: "darkvision 60 ft.",
            passive: "13",
            cr: "1/8",
            trait: {
                traitName: "Keen Hearing and Smell",
                text: "The weasel has advantage on Wisdom (Perception) checks that rely on hearing or smell."
            },
            action: [{
                actionName: "Bite",
                text: "Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 5 (1d4 + 3) piercing damage.",
                attack: "Bite|5|1d4+3"
            }
        },
        {
            name: "Giant Wolf Spider",
            size: "Medium",
            type: "beast",
            alignment: "unaligned",
            ac: "13",
            hp: "11 (2d8 + 2)",
            speed: "40 ft.",
            climb: "40 ft.",
            strength: "12",
            dexterity: "16",
            constitution: "13",
            intelligence: "3",
            wisdom: "12",
            charisma: "4",
            skill: "Perception +3, Stealth +7",
            senses: "blindsight 10 ft., darkvision 60 ft.",
            passive: "13",
            cr: "1/4",
            trait: [
                {
                    traitName: "Spider Climb",
                    text: "The spider can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
                },
                {
                    traitName: "Web Sense",
                    text: "While in contact with a web, the spider knows the exact location of any other creature in contact with the same web."
                },
                {
                    traitName: "Web Walker",
                    text: "The spider ignores movement restrictions caused by webbing."
                }
            ],
            action: [{
                actionName: "Bite",
                text: "Weapon Attack: +3 to hit, reach 5 ft., one creature. Hit: 4 (1d6 + 1) piercing damage, and the target must make a DC 11 Constitution saving throw, taking 7 (2d6) poison damage on a failed save, or half as much damage on a successful one. If the poison damage reduces the target to 0 hit points, the target is stable but poisoned for 1 hour, even after regaining hit points, and is paralyzed while poisoned in this way.",
                attack: "Bite|3|1d6+1"
            }
        },
        {
            name: "Goat",
            size: "Medium",
            type: "beast",
            alignment: "unaligned",
            ac: "10",
            hp: "4 (1d8)",
            speed: "40 ft.",
            strength: "12",
            dexterity: "10",
            constitution: "11",
            intelligence: "2",
            wisdom: "10",
            charisma: "5",
            passive: "10",
            cr: "0",
            trait: [
                {
                    traitName: "Charge",
                    text: "If the goat moves at least 20 ft. straight toward a target and then hits it with a ram attack on the same turn, the target takes an extra 2 (1d4) bludgeoning damage. If the target is a creature, it must succeed on a DC 10 Strength saving throw or be knocked prone.",
                    attack: "Charge||1d4"
                },
                {
                    traitName: "Sure-Footed",
                    text: "The goat has advantage on Strength and Dexterity saving throws made against effects that would knock it prone."
                }
            ],
            action: [{
                actionName: "Ram",
                text: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 3 (1d4 + 1) bludgeoning damage.",
                attack: "Ram|3|1d4+1"
            }
        },
        {
            name: "Hawk",
            size: "Tiny",
            type: "beast",
            alignment: "unaligned",
            ac: "13",
            hp: "1 (1d4-1)",
            speed: "10 ft.",
            fly: "60 ft.",
            strength: "5",
            dexterity: "16",
            constitution: "8",
            intelligence: "2",
            wisdom: "14",
            charisma: "6",
            skill: "Perception +4",
            passive: "14",
            cr: "0",
            trait: {
                traitName: "Keen Sight",
                text: "The hawk has advantage on Wisdom (Perception) checks that rely on sight."
            },
            action: [{
                actionName: "Talons",
                text: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 1 slashing damage.",
                attack: "Talons|5|1"
            }
        },
        {
            name: "Hunter Shark",
            size: "Large",
            type: "beast",
            alignment: "unaligned",
            ac: "12 (natural armor)",
            hp: "45 (6d10 + 12)",
            swim: "40 ft.",
            strength: "18",
            dexterity: "13",
            constitution: "15",
            intelligence: "1",
            wisdom: "10",
            charisma: "4",
            skill: "Perception +2",
            senses: "darkvision 30 ft.",
            passive: "12",
            cr: "2",
            trait: [
                {
                    traitName: "Blood Frenzy",
                    text: "The shark has advantage on melee attack rolls against any creature that doesn't have all its hit points."
                },
                {
                    traitName: "Water Breathing",
                    text: "The shark can breathe only underwater."
                }
            ],
            action: [{
                actionName: "Bite",
                text: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 13 (2d8 + 4) piercing damage.",
                attack: "Bite|6|2d8+4"
            }
        },
        {
            name: "Hyena",
            size: "Medium",
            type: "beast",
            alignment: "unaligned",
            ac: "11",
            hp: "5 (1d8 + 1)",
            speed: "50 ft.",
            strength: "11",
            dexterity: "13",
            constitution: "12",
            intelligence: "2",
            wisdom: "12",
            charisma: "5",
            skill: "Perception +3",
            passive: "13",
            cr: "0",
            trait: {
                traitName: "Pack Tactics",
                text: "The hyena has advantage on an attack roll against a creature if at least one of the hyena's allies is within 5 ft. of the creature and the ally isn't incapacitated."
            },
            action: [{
                actionName: "Bite",
                text: "Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 3 (1d6) piercing damage.",
                attack: "Bite|2|1d6"
            }
        },
        {
            name: "Jackal",
            size: "Small",
            type: "beast",
            alignment: "unaligned",
            ac: "12",
            hp: "3 (1d6)",
            speed: "40 ft.",
            strength: "8",
            dexterity: "15",
            constitution: "11",
            intelligence: "3",
            wisdom: "12",
            charisma: "6",
            skill: "Perception +3",
            passive: "13",
            cr: "0",
            trait: [
                {
                    traitName: "Keen Hearing and Smell",
                    text: "The jackal has advantage on Wisdom (Perception) checks that rely on hearing or smell."
                },
                {
                    traitName: "Pack Tactics",
                    text: "The jackal has advantage on an attack roll against a creature if at least one of the jackal's allies is within 5 ft. of the creature and the ally isn't incapacitated."
                }
            ],
            action: [{
                actionName: "Bite",
                text: "Melee Weapon Attack: +1 to hit, reach 5 ft., one target. Hit: 1 (1d4 — 1) piercing damage.",
                attack: "Bite|1|1d4-1"
            }
        },
        {
            name: "Killer Whale",
            size: "Huge",
            type: "beast",
            alignment: "unaligned",
            ac: "12 (natural armor)",
            hp: "90 (12d12 + 12)",
            swim: "60 ft.",
            strength: "19",
            dexterity: "10",
            constitution: "13",
            intelligence: "3",
            wisdom: "12",
            charisma: "7",
            skill: "Perception +3",
            senses: "blindsight 120 ft.",
            passive: "13",
            cr: "3",
            trait: [
                {
                    traitName: "Echolocation",
                    text: "The whale can't use its blindsight while deafened."
                },
                {
                    traitName: "Hold Breath",
                    text: "The whale can hold its breath for 30 minutes"
                },
                {
                    traitName: "Keen Hearing",
                    text: "The whale has advantage on Wisdom (Perception) checks that rely on hearing."
                }
            ],
            action: [{
                actionName: "Bite",
                text: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 21 (5d6 + 4) piercing damage."
            }
        },
        {
            name: "Lion",
            size: "Large",
            type: "beast",
            alignment: "unaligned",
            ac: "12",
            hp: "26 (4d10 + 4)",
            speed: "50 ft.",
            strength: "17",
            dexterity: "15",
            constitution: "13",
            intelligence: "3",
            wisdom: "12",
            charisma: "8",
            skill: "Perception +3, Stealth +6",
            passive: "13",
            cr: "1",
            trait: [
                {
                    traitName: "Keen Smell",
                    text: "The lion has advantage on Wisdom (Perception) checks that rely on smell."
                },
                {
                    traitName: "Pack Tactics",
                    text: "The lion has advantage on an attack roll against a creature if at least one of the lion's allies is within 5 ft. of the creature and the ally isn't incapacitated."
                },
                {
                    traitName: "Pounce",
                    text: "If the lion moves at least 20 ft. straight toward a creature and then hits it with a claw attack on the same turn, that target must succeed on a DC 13 Strength saving throw or be knocked prone. If the target is prone, the lion can make one bite attack against it as a bonus action."
                },
                {
                    traitName: "Running Leap",
                    text: "With a 10-foot running start, the lion can long jump up to 25 ft.."
                }
            ],
            action: [
                {
                    actionName: "Bite",
                    text: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8 + 3) piercing damage.",
                    attack: "Bite|5|1d8+3"
                },
                {
                    actionName: "Claw",
                    text: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) slashing damage.",
                    attack: "Claw|5|1d6+3"
                }
            ]
        },
        {
            name: "Lizard",
            size: "Tiny",
            type: "beast",
            alignment: "unaligned",
            ac: "10",
            hp: "2 (1d4)",
            speed: "20 ft.",
            climb: "20 ft.",
            strength: "2",
            dexterity: "11",
            constitution: "10",
            intelligence: "1",
            wisdom: "8",
            charisma: "3",
            senses: "darkvision 30 ft.",
            passive: "9",
            cr: "0",
            action: [{
                actionName: "Bite",
                text: "Melee Weapon Attack: +0 to hit, reach 5 ft., one target. Hit: 1 piercing damage.",
                attack: "Bite||1"
            }
        },
        {
            name: "Mammoth",
            size: "Huge",
            type: "beast",
            alignment: "unaligned",
            ac: "13 (natural armor)",
            hp: "126 (11d12 + 55)",
            speed: "40 ft.",
            strength: "24",
            dexterity: "9",
            constitution: "21",
            intelligence: "3",
            wisdom: "11",
            charisma: "6",
            passive: "10",
            cr: "6",
            trait: {
                traitName: "Trampling Charge",
                text: "If the mammoth moves at least 20 ft. straight toward a creature and then hits it with a gore attack on the same turn, that target must succeed on a DC 18 Strength saving throw or be knocked prone. If the target is prone, the mammoth can make one stomp attack against it as a bonus action."
            },
            action: [
                {
                    actionName: "Gore",
                    text: "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 25 (4d8 + 7) piercing damage.",
                    attack: "Gore|10|4d8+7"
                },
                {
                    actionName: "Stomp",
                    text: "Melee Weapon Attack: +10 to hit, reach 5 ft., one prone creature. Hit: 29 (4d10 + 7) bludgeoning damage.",
                    attack: "Stomp|10|4d10+7"
                }
            ]
        },
        {
            name: "Mastiff",
            size: "Medium",
            type: "beast",
            alignment: "unaligned",
            ac: "12",
            hp: "5 (1d8 + 1)",
            speed: "40 ft.",
            strength: "13",
            dexterity: "14",
            constitution: "12",
            intelligence: "3",
            wisdom: "12",
            charisma: "7",
            skill: "Perception +3",
            passive: "13",
            cr: "1/8",
            trait: {
                traitName: "Keen Hearing and Smell",
                text: "The mastiff has advantage on Wisdom (Perception) checks that rely on hearing or smell."
            },
            action: [{
                actionName: "Bite",
                text: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6 + 1) piercing damage. If the target is a creature, it must succeed on a DC 11 Strength saving throw or be knocked prone.",
                attack: "Bite|3|1d6+1"
            }
        },
        {
            name: "Mule",
            size: "Medium",
            type: "beast",
            alignment: "unaligned",
            ac: "10",
            hp: "11 (2d8 + 2)",
            speed: "40 ft.",
            strength: "14",
            dexterity: "10",
            constitution: "13",
            intelligence: "2",
            wisdom: "10",
            charisma: "5",
            passive: "10",
            cr: "1/8",
            trait: [
                {
                    traitName: "Beast of Burden",
                    text: "The mule is considered to be a Large animal for the purpose of determining its carrying capacity."
                },
                {
                    traitName: "Sure-Footed",
                    text: "The mule has advantage on Strength and Dexterity saving throws made against effects that would knock it prone."
                }
            ],
            action: [{
                actionName: "Hooves",
                text: "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 4 (1d4 + 2) bludgeoning damage.",
                attack: "Hooves|4|1d4+2"
            }
        },
        {
            name: "Octopus",
            size: "Small",
            type: "beast",
            alignment: "unaligned",
            ac: "12",
            hp: "3 (1d6)",
            speed: "5 ft.",
            swim: "30 ft.",
            strength: "4",
            dexterity: "15",
            constitution: "11",
            intelligence: "3",
            wisdom: "10",
            charisma: "4",
            skill: "Perception +2, Stealth +4",
            senses: "darkvision 30 ft.",
            passive: "12",
            cr: "0",
            trait: [
                {
                    traitName: "Hold Breath",
                    text: "While out of water, the octopus can hold its breath for 30 minutes."
                },
                {
                    traitName: "Underwater Camouflage",
                    text: "The octopus has advantage on Dexterity (Stealth) checks made while underwater."
                },
                {
                    traitName: "Water Breathing",
                    text: "The octopus can breathe only underwater."
                }
            ],
            action: [
                {
                    actionName: "Tentacles",
                    text: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 1 bludgeoning damage, and the target is grappled (escape DC 10). Until this grapple ends, the octopus can't use its tentacles on another target.",
                    attack: "Tentacles|4|1"
                },
                {
                    actionName: "Ink Cloud (Recharges after a Short or Long Rest)",
                    text: "A 5-foot-radius cloud of ink extends all around the octopus if it is underwater. The area is heavily obscured for 1 minute, although a significant current can disperse the ink. After releasing the ink, the octopus can use the Dash action as a bonus action."
                }
            ]
        },
        {
            name: "Owl",
            size: "Tiny",
            type: "beast",
            alignment: "unaligned",
            ac: "11",
            hp: "1 (1d4-1)",
            speed: "5 ft.",
            fly: "60 ft.",
            strength: "3",
            dexterity: "13",
            constitution: "8",
            intelligence: "2",
            wisdom: "12",
            charisma: "7",
            skill: "Perception +3, Stealth +3",
            senses: "darkvision 120 ft.",
            passive: "13",
            cr: "0",
            trait: [
                {
                    traitName: "Flyby",
                    text: "The owl doesn't provoke opportunity attacks when it flies out of an enemy's reach."
                },
                {
                    traitName: "Keen Hearing and Sight",
                    text: "The owl has advantage on Wisdom (Perception) checks that rely on hearing or sight."
                }
            ],
            action: [{
                actionName: "Talons",
                text: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 1 slashing damage.",
                attack: "Talons|3|1"
            }
        },
        {
            name: "Panther",
            size: "Medium",
            type: "beast",
            alignment: "unaligned",
            ac: "12",
            hp: "13 (3d8)",
            speed: "50 ft.",
            climb: "40 ft.",
            strength: "14",
            dexterity: "15",
            constitution: "10",
            intelligence: "3",
            wisdom: "14",
            charisma: "7",
            skill: "Perception +4, Stealth +6",
            passive: "14",
            cr: "1/4",
            trait: [
                {
                    traitName: "Keen Smell",
                    text: "The panther has advantage on Wisdom (Perception) checks that rely on smell."
                },
                {
                    traitName: "Pounce",
                    text: "If the panther moves at least 20 ft. straight toward a creature and then hits it with a claw attack on the same turn, that target must succeed on a DC 12 Strength saving throw or be knocked prone. If the target is prone, the panther can make one bite attack against it as a bonus action."
                }
            ],
            action: [
                {
                    actionName: "Bite",
                    text: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) piercing damage.",
                    attack: "Bite|4|1d6+2"
                },
                {
                    actionName: "Claw",
                    text: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4 + 2) slashing damage.",
                    attack: "Claw|4|1d4+2"
                }
            ]
        },
        {
            name: "Plesiosaurus",
            size: "Large",
            type: "beast",
            alignment: "unaligned",
            ac: "13 (natural armor)",
            hp: "68 (8d10 + 24)",
            speed: "20 ft.",
            swim: "40 ft.",
            strength: "18",
            dexterity: "15",
            constitution: "16",
            intelligence: "2",
            wisdom: "12",
            charisma: "5",
            skill: "Perception +3, Stealth +4",
            passive: "13",
            cr: "2",
            trait: {
                traitName: "Hold Breath",
                text: "The plesiosaurus can hold its breath for 1 hour."
            },
            action: [{
                actionName: "Bite",
                text: "Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 14 (3d6 + 4) piercing damage.",
                attack: "Bite|6|3d6+4"
            }
        },
        {
            name: "Poisonous Snake",
            size: "Tiny",
            type: "beast",
            alignment: "unaligned",
            ac: "13",
            hp: "2 (1d4)",
            speed: "30 ft.",
            swim: "30 ft.",
            strength: "2",
            dexterity: "16",
            constitution: "11",
            intelligence: "1",
            wisdom: "10",
            charisma: "3",
            senses: "blindsight 10 ft.",
            passive: "10",
            cr: "1/8",
            action: [{
                actionName: "Bite",
                text: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 1 piercing damage, and the target must make a DC 10 Constitution saving throw, taking 5 (2d4) poison damage on a failed save, or half as much damage on a successful one.",
                attack: "Bite|5|1"
            }
        },
        {
            name: "Polar Bear",
            size: "Large",
            type: "beast",
            alignment: "unaligned",
            ac: "12 (natural armor)",
            hp: "42 (5d10 + 15)",
            speed: "40 ft.",
            swim: "30 ft.",
            strength: "20",
            dexterity: "10",
            constitution: "16",
            intelligence: "2",
            wisdom: "13",
            charisma: "7",
            skill: "Perception +3",
            passive: "13",
            cr: "2",
            trait: {
                traitName: "Keen Smell",
                text: "The bear has advantage on Wisdom (Perception) checks that rely on smell."
            },
            action: [
                {
                    actionName: "Multiattack",
                    text: "The bear makes two attacks: one with its bite and one with its claws."
                },
                {
                    actionName: "Bite",
                    text: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 9 (1d8 + 5) piercing damage.",
                    attack: "Bite|7|1d8+5"
                },
                {
                    actionName: "Claws",
                    text: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 12 (2d6 + 5) slashing damage.",
                    attack: "Claws|7|2d6+5"
                }
            ]
        },
        {
            name: "Pony",
            size: "Medium",
            type: "beast",
            alignment: "unaligned",
            ac: "10",
            hp: "11 (2d8 + 2)",
            speed: "40 ft.",
            strength: "15",
            dexterity: "10",
            constitution: "13",
            intelligence: "2",
            wisdom: "11",
            charisma: "7",
            passive: "10",
            cr: "1/8",
            action: [{
                actionName: "Hooves",
                text: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (2d4 + 2) bludgeoning damage.",
                attack: "Hooves|4|2d4+2"
            }
        },
        {
            name: "Pteranodon",
            size: "Medium",
            type: "beast",
            alignment: "unaligned",
            ac: "13 (natural armor)",
            hp: "13 (3d8)",
            speed: "10 ft.",
            fly: "60 ft.",
            strength: "12",
            dexterity: "15",
            constitution: "10",
            intelligence: "2",
            wisdom: "9",
            charisma: "5",
            skill: "Perception +1",
            passive: "11",
            cr: "1/4",
            trait: {
                traitName: "Flyby",
                text: "The pteranodon doesn't provoke opportunity attacks when it flies out of an enemy's reach."
            },
            action: [{
                actionName: "Bite",
                text: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 6 (2d4 + 1) piercing damage"
            }
        },
        {
            name: "Quipper",
            size: "Tiny",
            type: "beast",
            alignment: "unaligned",
            ac: "13",
            hp: "1 (1d4-1)",
            swim: "40 ft.",
            strength: "2",
            dexterity: "16",
            constitution: "9",
            intelligence: "1",
            wisdom: "7",
            charisma: "2",
            senses: "darkvision 60 ft.",
            passive: "8",
            cr: "0",
            trait: [
                {
                    traitName: "Blood Frenzy",
                    text: "The quipper has advantage on melee attack rolls against any creature that doesn't have all its hit points."
                },
                {
                    traitName: "Water Breathing",
                    text: "The quipper can breathe only underwater."
                }
            ],
            action: [{
                actionName: "Bite",
                text: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 1 piercing damage.",
                attack: "Bite|5|1"
            }
        },
        {
            name: "Rat",
            size: "Tiny",
            type: "beast",
            alignment: "unaligned",
            ac: "10",
            hp: "1 (1d4-1)",
            speed: "20 ft.",
            strength: "2",
            dexterity: "11",
            constitution: "9",
            intelligence: "2",
            wisdom: "10",
            charisma: "4",
            senses: "darkvision 30 ft.",
            passive: "10",
            cr: "0",
            trait: {
                traitName: "Keen Smell",
                text: "The rat has advantage on Wisdom (Perception) checks that rely on smell."
            },
            action: [{
                actionName: "Bite",
                text: "Melee Weapon Attack: +0 to hit, reach 5 ft., one target. Hit: 1 piercing damage.",
                attack: "Bite||1"
            }
        },
        {
            name: "Raven",
            size: "Tiny",
            type: "beast",
            alignment: "unaligned",
            ac: "12",
            hp: "1 (1d4-1)",
            speed: "10 ft.",
            fly: "50 ft.",
            strength: "2",
            dexterity: "14",
            constitution: "8",
            intelligence: "2",
            wisdom: "12",
            charisma: "6",
            skill: "Perception +3",
            passive: "13",
            cr: "0",
            trait: {
                traitName: "Mimicry",
                text: "The raven can mimic simple sounds it has heard, such as a person whispering, a baby crying, or an animal chittering. A creature that hears the sounds can tell they are imitations with a successful DC 10 Wisdom (Insight) check."
            },
            action: [{
                actionName: "Beak",
                text: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 1 piercing damage."
            }
        },
        {
            name: "Reef Shark",
            size: "Medium",
            type: "beast",
            alignment: "unaligned",
            ac: "12 (natural armor)",
            hp: "22 (4d8 + 4)",
            swim: "40 ft.",
            strength: "14",
            dexterity: "13",
            constitution: "13",
            intelligence: "1",
            wisdom: "10",
            charisma: "4",
            skill: "Perception +2",
            senses: "blindsight 30 ft.",
            passive: "12",
            cr: "1/2",
            trait: [
                {
                    traitName: "Pack Tactics",
                    text: "The shark has advantage on an attack roll against a creature if at least one of the shark's allies is within 5 ft. of the creature and the ally isn't incapacitated."
                },
                {
                    traitName: "Water Breathing",
                    text: "The shark can breathe only underwater."
                }
            ],
            action: [{
                actionName: "Bite",
                text: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8 + 2) piercing damage.",
                attack: "Bite|4|1d8+2"
            }
        },
        {
            name: "Rhinoceros",
            size: "Large",
            type: "beast",
            alignment: "unaligned",
            ac: "11 (natural armor)",
            hp: "45 (6d10 + 12)",
            speed: "40 ft.",
            strength: "21",
            dexterity: "8",
            constitution: "15",
            intelligence: "2",
            wisdom: "12",
            charisma: "6",
            passive: "11",
            cr: "2",
            trait: {
                traitName: "Charge",
                text: "If the rhinoceros moves at least 20 ft. straight toward a target and then hits it with a gore attack on the same turn, the target takes an extra 9 (2d8) bludgeoning damage. If the target is a creature, it must succeed on a DC 15 Strength saving throw or be knocked prone.",
                attack: "Charge||2d8"
            },
            action: [{
                actionName: "Gore",
                text: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 14 (2d8 + 5) bludgeoning damage.",
                attack: "Gore|7|2d8+5"
            }
        },
        {
            name: "Riding Horse",
            size: "Large",
            type: "beast",
            alignment: "unaligned",
            ac: "10",
            hp: "13 (2d10 + 2)",
            speed: "60 ft.",
            strength: "16",
            dexterity: "10",
            constitution: "12",
            intelligence: "2",
            wisdom: "11",
            charisma: "7",
            passive: "10",
            cr: "1/4",
            action: [{
                actionName: "Hooves",
                text: "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 8 (2d4 + 3) bludgeoning damage.",
                attack: "Hooves|2|2d4+3"
            }
        },
        {
            name: "Saber-Toothed Tiger",
            size: "Large",
            type: "beast",
            alignment: "unaligned",
            ac: "12",
            hp: "52 (7d10 + 14)",
            speed: "40 ft.",
            strength: "18",
            dexterity: "14",
            constitution: "15",
            intelligence: "3",
            wisdom: "12",
            charisma: "8",
            skill: "Perception +3, Stealth +6",
            passive: "13",
            cr: "2",
            trait: [
                {
                    traitName: "Keen Smell",
                    text: "The tiger has advantage on Wisdom (Perception) checks that rely on smell."
                },
                {
                    traitName: "Pounce",
                    text: "If the tiger moves at least 20 ft. straight toward a creature and then hits it with a claw attack on the same turn, that target must succeed on a DC 14 Strength saving throw or be knocked prone. If the target is prone, the tiger can make one bite attack against it as a bonus action."
                }
            ],
            action: [
                {
                    actionName: "Bite",
                    text: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 10 (1d10 + 5) piercing damage.",
                    attack: "Bite|6|1d10+5"
                },
                {
                    actionName: "Claw",
                    text: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 12 (2d6 + 5) slashing damage.",
                    attack: "Claw|6|2d6+5"
                }
            ]
        },
        {
            name: "Scorpion",
            size: "Tiny",
            type: "beast",
            alignment: "unaligned",
            ac: "11 (natural armor)",
            hp: "1 (1d4-1)",
            speed: "10 ft.",
            strength: "2",
            dexterity: "11",
            constitution: "8",
            intelligence: "1",
            wisdom: "8",
            charisma: "2",
            senses: "blindsight 10 ft.",
            passive: "9",
            cr: "0",
            action: [{
                actionName: "Sting",
                text: "Melee Weapon Attack: +2 to hit, reach 5 ft., one creature. Hit: 1 piercing damage, and the target must make a DC 9 Constitution saving throw, taking 4 (1d8) poison damage on a failed save, or half as much damage on a successful one.",
                attack: "Sting|2|1"
            }
        },
        {
            name: "Sea Horse",
            size: "Tiny",
            type: "beast",
            alignment: "unaligned",
            ac: "11",
            hp: "1 (1d4-1)",
            swim: "20 ft.",
            strength: "1",
            dexterity: "12",
            constitution: "8",
            intelligence: "1",
            wisdom: "10",
            charisma: "2",
            passive: "10",
            cr: "0",
            trait: {
                traitName: "Water Breathing",
                text: "The sea horse can breathe only underwater."
            }
        },
        {
            name: "Spider",
            size: "Tiny",
            type: "beast",
            alignment: "unaligned",
            ac: "12",
            hp: "1 (1d4-1)",
            speed: "20 ft.",
            climb: "20 ft.",
            strength: "2",
            dexterity: "14",
            constitution: "8",
            intelligence: "1",
            wisdom: "10",
            charisma: "2",
            skill: "Stealth +4",
            senses: "darkvision 30 ft.",
            passive: "12",
            cr: "0",
            trait: [
                {
                    traitName: "Spider Climb",
                    text: "The spider can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
                },
                {
                    traitName: "Web Sense",
                    text: "While in contact with a web, the spider knows the exact location of any other creature in contact with the same web."
                },
                {
                    traitName: "Web Walker",
                    text: "The spider ignores movement restrictions caused by webbing."
                }
            ],
            action: [{
                actionName: "Bite",
                text: "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 1 piercing damage, and the target must succeed on a DC 9 Constitution saving throw or take 2 (1d4) poison damage.",
                attack: "Bite|4|1"
            }
        },
        {
            name: "Stirge",
            size: "Tiny",
            type: "beast",
            alignment: "unaligned",
            ac: "14 (natural armor)",
            hp: "2 (1d4)",
            speed: "10 ft.",
            fly: "40 ft.",
            strength: "4",
            dexterity: "16",
            constitution: "11",
            intelligence: "2",
            wisdom: "8",
            charisma: "6",
            senses: "darkvision 60 ft.",
            passive: "9",
            cr: "1/8",
            action: [{
                actionName: "Blood Drain",
                text: [
                    "Melee Weapon Attack: +5 to hit, reach 5 ft., one creature. Hit: 5 (1d4 + 3) piercing damage, and the stirge attaches to the target. While attached, the stirge doesn't attack. Instead, at the start of each of the stirge's turns, the target loses 5 (1d4 + 3) hit points due to blood loss.",
                    "The stirge can detach itself by spending 5 feet of its movement. It does so after it drains 10 hit points of blood from the target or the target dies. A creature, including the target, can use its action to detach the stirge."
                ],
                attack: "Blood Drain|5|1d4+3"
            }
        },
        {
            name: "Tiger",
            size: "Large",
            type: "beast",
            alignment: "unaligned",
            ac: "12",
            hp: "37 (5d10 + 10)",
            speed: "40 ft.",
            strength: "17",
            dexterity: "15",
            constitution: "14",
            intelligence: "3",
            wisdom: "12",
            charisma: "8",
            skill: "Perception +3, Stealth +6",
            senses: "darkvision 60 ft.",
            passive: "13",
            cr: "1",
            trait: [
                {
                    traitName: "Keen Smell",
                    text: "The tiger has advantage on Wisdom (Perception) checks that rely on smell."
                },
                {
                    traitName: "Pounce",
                    text: "If the tiger moves at least 20 ft. straight toward a creature and then hits it with a claw attack on the same turn, that target must succeed on a DC 13 Strength saving throw or be knocked prone. If the target is prone, the tiger can make one bite attack against it as a bonus action."
                }
            ],
            action: [
                {
                    actionName: "Bite",
                    text: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 8 (1d10 + 3) piercing damage.",
                    attack: "Bite|5|1d10+3"
                },
                {
                    actionName: "Claw",
                    text: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8 + 3) slashing damage."
                }
            ]
        },
        {
            name: "Triceratops",
            size: "Huge",
            type: "beast",
            alignment: "unaligned",
            ac: "13 (natural armor)",
            hp: "95 (10d12 + 30)",
            speed: "50 ft.",
            strength: "22",
            dexterity: "9",
            constitution: "17",
            intelligence: "2",
            wisdom: "11",
            charisma: "5",
            passive: "10",
            cr: "5",
            trait: {
                traitName: "Trampling Charge",
                text: "If the triceratops moves at least 20 ft. straight toward a creature and then hits it with a gore attack on the same turn, that target must succeed on a DC 13 Strength saving throw or be knocked prone. If the target is prone, the triceratops can make one stomp attack against it as a bonus action."
            },
            action: [
                {
                    actionName: "Gore",
                    text: "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 24 (4d8 + 6) piercing damage.",
                    attack: "Gore|9|4d8+6"
                },
                {
                    actionName: "Stomp",
                    text: "Melee Weapon Attack: +9 to hit, reach 5 ft., one prone creature. Hit: 22 (3d10 + 6) bludgeoning damage",
                    attack: "Stomp|9|3d10+6"
                }
            ]
        },
        {
            name: "Vulture",
            size: "Medium",
            type: "beast",
            alignment: "unaligned",
            ac: "10",
            hp: "5 (1d8 + 1)",
            speed: "10 ft.",
            fly: "50 ft.",
            strength: "7",
            dexterity: "10",
            constitution: "13",
            intelligence: "2",
            wisdom: "12",
            charisma: "4",
            skill: "Perception +3",
            passive: "13",
            cr: "0",
            trait: [
                {
                    traitName: "Keen Sight and Smell",
                    text: "The vulture has advantage on Wisdom (Perception) checks that rely on sight or smell."
                },
                {
                    traitName: "Pack Tactics",
                    text: "The vulture has advantage on an attack roll against a creature if at least one of the vulture's allies is within 5 ft. of the creature and the ally isn't incapacitated."
                }
            ],
            action: [{
                actionName: "Beak",
                text: "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 2 (1d4) piercing damage.",
                attack: "Beak|2|1d4"
            }
        },
        {
            name: "Warhorse",
            size: "Large",
            type: "beast",
            alignment: "unaligned",
            ac: "11",
            hp: "19 (3d10 + 3)",
            speed: "60 ft.",
            strength: "18",
            dexterity: "12",
            constitution: "13",
            intelligence: "2",
            wisdom: "12",
            charisma: "7",
            passive: "11",
            cr: "1/2",
            trait: {
                traitName: "Trampling Charge",
                text: "If the horse moves at least 20 ft. straight toward a creature and then hits it with a hooves attack on the same turn, that target must succeed on a DC 14 Strength saving throw or be knocked prone. If the target is prone, the horse can make another attack with its hooves against it as a bonus action."
            },
            action: [{
                actionName: "Hooves",
                text: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) bludgeoning damage.",
                attack: "|4|2d6+4"
            }
        },
        {
            name: "Weasel",
            size: "Tiny",
            type: "beast",
            alignment: "unaligned",
            ac: "13",
            hp: "1 (1d4-1)",
            speed: "30 ft.",
            strength: "3",
            dexterity: "16",
            constitution: "8",
            intelligence: "2",
            wisdom: "12",
            charisma: "3",
            skill: "Perception +3, Stealth +5",
            passive: "13",
            cr: "0",
            trait: {
                traitName: "Keen Hearing and Smell",
                text: "The weasel has advantage on Wisdom (Perception) checks that rely on hearing or smell."
            },
            action: [{
                actionName: "Bite",
                text: "Melee Weapon Attack: +5 to hit, reach 5 ft., one creature. Hit: 1 piercing damage.",
                attack: "Bite|5|1"
            }
        },
        {
            name: "Wolf",
            size: "Medium",
            type: "beast",
            alignment: "unaligned",
            ac: "13 (natural armor)",
            hp: "11 (2d8 + 2)",
            speed: "40 ft.",
            strength: "12",
            dexterity: "15",
            constitution: "12",
            intelligence: "3",
            wisdom: "12",
            charisma: "6",
            skill: "Perception +3, Stealth +4",
            passive: "13",
            cr: "1/4",
            trait: [
                {
                    traitName: "Keen Hearing and Smell",
                    text: "The wolf has advantage on Wisdom (Perception) checks that rely on hearing or smell."
                },
                {
                    traitName: "Pack Tactics",
                    text: "The wolf has advantage on an attack roll against a creature if at least one of the wolf's allies is within 5 ft. of the creature and the ally isn't incapacitated."
                }
            ],
            action: [{
                actionName: "Bite",
                text: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (2d4 + 2) piercing damage. If the target is a creature, it must succeed on a DC 11 Strength saving throw or be knocked prone.",
                attack: "Bite|4|2d4+2"
            }
        }
    ]
};

export default beastData;