var scriptElement = document.createElement('script');
scriptElement.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js';
document.head.appendChild(scriptElement);
(async function() {
    const items = { "amulet": [{ "name": "Rotten Talisman", "description": "Burned ingredients have been twisted and tied together to form an amulet of meager protection. Creating simple amulets like this has been a common survival tactic since ancient times." }, { "name": "Wolf's Collar", "description": "Collars to keep wolves in servitude are made from a thick leather. Some of them still have chain links connected, but all wolf collars are sturdy. Some collars are imbued with spiritual protection." }, { "name": "Bone Necklace", "description": "This necklace consists of bone fragments from a variety of strong creatures. Each bone necklace varies in protection based on the origin of the bones." }, { "name": "Werewolf's Claw", "description": "Fearsome werewolf claws that were left behind on the bodies of victims were anointed with mystic oils and instilled with spiritual fortitude through meditation. The creators of these amulets hoped that these spiritual protections would one day be used for revenge." }, { "name": "Eagle's Talon", "description": "When a talon was found, it was considered a gift from the sacred birds in the mountains. The monks in the mountains used the talons to produce spiritual amulets to protect themselves from invaders during battle." }, { "name": "Shadow Scarab", "description": "Ancient desert people collected special stones and shaped them into scarabs with strange, dark magic. Many important people in that ancient civilization wore these amulets for stature and protection." }, { "name": "Mystic Shard", "description": "Strange shards mined from the mountains were enhanced by mystics and formed into amulets in order to provide protection and cause fear." }, { "name": "Omega Medallion", "description": "Warring theocracies created divine omega symbols as a means for protection. These symbols were used to deter attacks, given as protective gifts, and presented to potential religious followers." }, { "name": "Verstärker", "description": "This amulet has a strange set of overlapping discs that taps into natural energies and amplifies the natural protection of the wearer. Many magic users strive to learn the secrets of these amulets so that they can be reproduced." }, { "name": "Tempest Carcanet", "description": "Metal strands weave in and out of each other, producing electric arcs and giving the appearance of a living amulet. Scholars speculate that these amulets came from a realm that disappeared, but no one seems sure." }, { "name": "Ankh", "description": "Ancient kings had powerful ankh symbols made to protect them in the afterlife. Grave robbers have stolen many of these amulets and sold them to both people and monsters. Each ankh has an eerie glow that belies its true power." }, { "name": "Yggdrasil Pendant", "description": "Twisted pieces of the enormous World Tree, Yggdrasil, were made into amulets of the most sacred kind. Sap seeps out of the amulet and is absorbed by the body for extra protection." }, { "name": "Dragon's Periapt", "description": "This amulet contains elder dragon magic that was bestowed upon young dragons; these amulets gave young dragons a better chance of survival into adolescence. Once the young dragons became old and large enough to survive on their own, the chain broke and the amulet was lost." }, { "name": "Lionheart", "description": "This amulet contains a gem from the crown worn by a famous king. The edges of this amulet are ruthlessly sharp and partially smeared with a mysterious substance." }, { "name": "Phoenix", "description": "The center of this amulet of phoenix feathers contains a small amount of ashes from all of the fallen adventurers that have ever owned it. Without exception, every adventurer to use such an amulet has transcended into legend." }], "armlet": [{ "name": "Simple Wristbands", "description": "These wristbands are leather strips that are wrapped in a simple formation." }, { "name": "Makeshift Armbands", "description": "These armbands were created hastily. The rough battle markings on the sides of the leather do not inspire confidence of the previous owner's survival." }, { "name": "Leather Armlets", "description": "Tough leather has been painstakingly crafted into fine armlets. On the side of the leather is the craftsman's signature: \"Markay'ak\"." }, { "name": "Bone Bracelets", "description": "This type of bracelet is ornately crafted with thick monster bones. Many superstitious traditions claim that the wearer of such bracelets become permeated with the deceased monster's power; however, others claim that the reuse of bones prevents monsters from resurrecting." }, { "name": "Iron Vambraces", "description": "This type of iron armor has been heavily used in war and remains dirty. The claw marks on the metal seem to be mostly superficial." }, { "name": "Imbued Bracers", "description": "These steel bracers are marked with small runes that imbue extra protection. Imbued bracers are somewhat rare since the creation method of the runes is a secret." }, { "name": "Ember Cuffs", "description": "These cuffs were forged with a special fire that can only be created through magic. In the past, fire elementals taught only a few special blacksmiths the secret to forging ember cuffs." }, { "name": "Mirror Armlets", "description": "Mirrored armlets are made by exceptional blacksmiths with the skills necessary to make reflective armor for damage reduction. This protective quality inspired many Elvish wizards to often experiment on mirrored armlets." }, { "name": "Golem Fragments", "description": "Golem fragments are painstakingly assembled by a small team of magic-using blacksmiths. Every pair of golem fragments is crafted over several hundred days using the husks of rock golems." }, { "name": "Coldforged Bracers", "description": "Bracers such as this are comprised of a rare metal found in the mountains. Blacksmiths use enchanted hammers to forge the bracers without heat in order to retain the magic-enhancing properties of the metal." }, { "name": "Blackstars", "description": "These bracers were created by blacksmiths that hammered metal found within black meteorites. So far, the greatest concentration of black meteorites was found after a cataclysm that followed the Second Great War." }, { "name": "Mobiuses", "description": "Ambitious wizards on the edge of madness discovered secrets to dimensional magic and formed bracers that transcend normal magical protection. These abnormal bracers required a special shape to maintain their properties." }, { "name": "Guardians", "description": "Some legends say that these bracers only appear when the realms need a guardian. History shows that terrible tragedies occur shortly thereafter whenever these bracers are found; as such, their appearances are often seen as bad omens." }], "bag": [{ "name": "Linen Pouch", "description": "This pouch is made from a delicate fabric. Pouches such as this are often owned by common people for carrying their belongings." }, { "name": "Adventurer's Rucksack", "description": "This rugged sack is crafted from sturdy fabrics to hold more equipment than a linen pouch." }, { "name": "Purpur Duffel", "description": "This robust sack is made from monster hides and permits a respectable inventory." }, { "name": "Elven Saddlebag", "description": "This fine bag was crafted from expensive Elvish fabrics and contains more pockets than most other bags." }, { "name": "Moss Enigma", "description": "Bags such as this are a gift from nature to secret druid societies. Unfortunately, monsters have disposed of many druids over time and have stolen these sacred bags." }], "book": [{ "name": "Auto attack", "description": "Perform automatic melee attacks with your weapon." }, { "name": "Slash", "description": "Slash your enemy, striking with extra force. Heals you for 5% of the damage done." }, { "name": "Bulwark", "description": "Temporarily increases your block chance, while also healing you when you block." }, { "name": "Crescent Swipe", "description": "Swiftly swing your sword around you, damaging enemies within a radius." }, { "name": "Ice Bolt", "description": "Fires a missile of frost towards your enemy. Reduces the cooldown of Icicle Orb by 0.5 seconds. Freezes targets for up to 5 stacks, at which they will be stunned and take 50% increased damage. Gains one instant cast every 7 seconds." }, { "name": "Auto attack", "description": "Automatically attack your enemy at a distance." }, { "name": "Mend", "description": "Heal a friendly target. Amount is increased for each stack of Revitalize." }, { "name": "Revitalize", "description": "Heal a friendly target over a short duration, stacking up to 3 times while also increasing the power of your Mend." }, { "name": "Bloodline", "description": "You inherited special abilities through your ancestry and family traditions, granting you extra benefits from certain stats." }, { "name": "Precise Shot", "description": "A carefully aimed, high damage shot. Increases the damage of your next Swift Shots and allows them to be cast instantly." }, { "name": "Serpent Arrows", "description": "Your Precise Shots will jump to additional targets while active." }, { "name": "Invigorate", "description": "Instantly recovers MP and increases your damage temporarily." }, { "name": "Decay", "description": "Curse your enemy with a spell of decay, dealing initial damage and additional damage over time." }, { "name": "Mimir's Well", "description": "You and your party members quickly regenerate mana over a short period of time." }, { "name": "Chilling Radiance", "description": "Emit a chilling shockwave of ice around you, damaging and freezing enemies. Increases the critical hit chance of some of your spells." }, { "name": "Icicle Orb", "description": "Summon a large orb, ejecting icicles hitting all enemies in its path." }, { "name": "Hypothermic Frenzy", "description": "You gain Haste and all your damage output is increased." }, { "name": "Enrage", "description": "Temporarily increases your damage output." }, { "name": "Centrifugal Laceration", "description": "Your Crescent Swipe lacerates enemies, causing them to bleed for additional Damage. Stacks up to 3 times." }, { "name": "Unholy Warcry", "description": "You and your party members deal additional Damage." }, { "name": "Crusader's Courage", "description": "You and your party members gain additional Defense and Mana Regeneration." }, { "name": "Armor Reinforcement", "description": "Passively increase your Defense." }, { "name": "Arctic Aura", "description": "You and your party members gain additional Crit %." }, { "name": "Ice Shield", "description": "Protects you against the next incoming attacks." }, { "name": "Enchantment", "description": "Increase your target's Damage." }, { "name": "Temporal Dilation", "description": "You and your party members gain additional Haste." }, { "name": "Cranial Punctures", "description": "Passively increase your Crit %." }, { "name": "Pathfinding", "description": "You and your party members gain additional Movement Speed." }, { "name": "Canine Howl", "description": "You and your party members become enraged with Haste, enabling you to attack faster." }, { "name": "Poison Arrows", "description": "Your Precise Shot applies a poisonous Debuff on hit, damaging and slowing your enemies." }, { "name": "Healing Totem", "description": "Place a totem on the ground, healing your entire party." }, { "name": "Swift Shot", "description": "Fire a Swift Shot which can be enhanced by casting a Precise Shot prior to it." }, { "name": "Teleport", "description": "Instantly teleport into the direction you are facing." }, { "name": "Charge", "description": "Charge towards any target while also stunning it (if hostile). Stun duration increases with charge distance." }, { "name": "Taunt", "description": "Taunt surrounding enemies, slowing their movement speed for a short duration. Forces monsters to attack you." }, { "name": "Summon", "description": "Summon your party members, allowing them to instantly teleport towards you." }, { "name": "Spirit Animal", "description": "Turn into your spirit animal for additional movement speed, removing all movement impairing effects active at the point of the transformation. All spellcasting will cancel this effect." }, { "name": "Agonize", "description": "Turns your target into a zombie, interrupting all actions, slowing it down, and reducing received healing for the duration." }, { "name": "Dash", "description": "You dash into your current direction, instantly resetting the cooldown of Precise Shot. Your next Precise Shot is an instant cast." }, { "name": "Mount Riding", "description": "Allows you to ride ground mounts. Mounts are bound to your account." }, { "name": "Conjurer's Recall", "description": "Teleport to the nearest Conjurer." }, { "name": "Tempering", "description": "Two seconds after casting all active stun and root effects on you will be removed. If any effect is removed then your Charge cooldown is reset and you gain 20 Movement Speed for 3 seconds." }, { "name": "Soul Harvest", "description": "Reap the souls of nearby enemies affected by Decay, dealing damage and granting you mana for each harvested soul." }, { "name": "Plaguespreader", "description": "Decay deals damage and jumps to a nearby enemy if the current target is already affected by Decay. Additionally, casting Decay grants you Haste for a short duration." }, { "name": "Flamepits", "description": "Lights the ground below enemies on fire" }, { "name": "Volley", "description": "Rapidly shoots arrows at all targets in front of you, dealing damage over a short period of time." }, { "name": "Whirlwind", "description": "Spins your sword for a short period of time, dealing damage to all targets around you while slowing you down. Removes all root effects when used. You can't block attacks while active." }, { "name": "Mimir's Cleanse", "description": "Removes negative effects from a friendly target, prioritizing movement impairing effects. Heals the target for each removed effect." }, { "name": "Vampiric Arrow", "description": "A cursed arrow which bites your enemy, healing you as it returns. If your target is casting, the cast will be interrupted and the healing is increased." }, { "name": "Blinding Shot", "description": "Blinds the target, impairing its movement and casting for a short duration." }, { "name": "Relentless Cry", "description": "Intimidate your enemies, confusing them for a short duration and recovering a percentage of your missing health." }, { "name": "Shatterfrost", "description": "Hurls a heavy fragment of frost at your target for massive amounts of damage. Deals extra damage to targets deep frozen by Ice Bolt." }, { "name": "Frostcall", "description": "Channel a freezing storm over a targeted area, dealing damage to all targets in a radius." }, { "name": "Ice Block", "description": "Summons a protective ice block, preventing all damage to you and recovering a percentage of your health over a short duration. You cannot move or cast any spells during this time." }, { "name": "Bone Shot", "description": "Fire a heavy femur bone at your target for massive damage. Deals 50% extra damage to targets below 50% health." }, { "name": "Summon Runedisks", "description": "-" }, { "name": "Runefire Blast", "description": "-" }, { "name": "Obelisk Conjuration", "description": "-" }], "boot": [{ "name": "Sandals", "description": "This footwear is primarily made for comfort rather than running." }, { "name": "Cloth Footpads", "description": "These footpads are wrapped in a makeshift material to increase running stability." }, { "name": "Leather Shoes", "description": "Leather shoes are created with fine craftsmanship for moderate battle durability." }, { "name": "Bone Brogans", "description": "The monster bones used in the creation of footwear such as this seem to enhance movement speed, but whether the enhancement is through magic or the lightness of the material is not known." }, { "name": "Scaled Treads", "description": "This footwear is carefully crafted with monster scales that are both light and robust for battle." }, { "name": "Shadow Shoes", "description": "Enchanted shoes such as this push the wearer's feet with shadow magic to augment speed." }, { "name": "Wartorn Boots", "description": "These boots are crafted from sturdy iron and have been used in many wars." }, { "name": "Imbued Treads", "description": "Footwear such as this is etched with runes that increase the wearer's speed. However, scholars are hesitant about the use of these runes since their true purpose and nature is unclear." }, { "name": "Skyswift Boots", "description": "Elvish magic is assisted by wind spirits to create Skyswift Boots. Although Elves are very close to nature, even they know little about the reclusive wind spirits." }, { "name": "Coldforged Greaves", "description": "These boots are forged without heat and with enchanted hammers to keep the innate properties of the special metal. This rare metal is most often found in the mountains." }, { "name": "Cloudrunners", "description": "These boots are created by monster craftsmen with the help of sky spirits. Some monster factions have a close connection with sky spirits and nature; however, monsters do not frequently talk about this relationship." }, { "name": "Talaria", "description": "These boots are named after a famous relic legend. The namesake of these boots were supposedly the fast footwear of a famous deity, but no one seems to know where the story originates." }, { "name": "Starshards", "description": "This footwear is composed of meteorite pieces. Black meteorites were found during a terrible catastrophe where fire rained down from the sky and destroyed much of the landscape." }], "bow": [{ "name": "Driftwood Shortbow", "description": "This bow is a makeshift creation. Wood is not a plentiful resource in some regions, so denizens sometimes use the materials on hand to create weapons such as this." }, { "name": "Novice Shortbow", "description": "Bows such as these are crafted for beginning archers to hone their skills." }, { "name": "Curved Shortbow", "description": "Curved shortbows are mostly produced for hunting local wildlife." }, { "name": "Adventurer's Shortbow", "description": "This type of bow is a standard weapon of choice for adventurers." }, { "name": "Longbow", "description": "Longbows are designed to be weapons of war." }, { "name": "Bone Bow", "description": "This bow is crafted from monster bones to produce extra resilience and power." }, { "name": "Elven Bow", "description": "Elvish craftsmen put exquisite care in their bows during the crafting process, and Elvish archers have a proud reputation during times of war for a reason." }, { "name": "Ancient Bow", "description": "Ancient bows are exceptional weapons that were designed by forgotten master craftsmen. These bows are often passed from one generation to another." }, { "name": "Iron Piercer", "description": "These bows were developed in response to armor-wearing monsters." }, { "name": "Silver Recurve", "description": "This bow design is more mechanically efficient than the longbow. The unique pattern of decorative silver is a testament to the craftsmanship required to make such a fine bow." }, { "name": "Assassin's Bow", "description": "Bows such as this were previously owned by assassins that made modifications to drastically increase efficiency. Assassins regularly modify their weapons to reach optimal performance." }, { "name": "Hellfire Warbow", "description": "Bows such as this were made from hellfires that are provided by devilish creatures. These kinds of bows are rare because of the ultimate price required for such wicked transactions and acquisitions." }, { "name": "Skyfire Warbow", "description": "This bow was bathed in the flames of a phoenix and cooled in the night sky. Bows created in this way are sometimes imbued with extra magical characteristics from phoenix fire." }, { "name": "Widowmaker", "description": "Widowmakers are living bows that bond with the user. Powerful monsters use a mystic process to create widowmakers; the resulting weapon can be remarkably jealous and entice the user not to use any other weapon by destroying foes with vast depths of battle experience." }, { "name": "Stormsong", "description": "These bows are rare due to the length and method of the forging process; bows must be greatly elevated to ensure that every lightning strike can be used to gradually forge this bow into a Stormsong. The creation process can take ages." }, { "name": "Scarebow", "description": "This malevolent bow eats the dreams and nightmares of the wielder. This living bow offers no loyalty and demands sacrifices in the form of battle victims." }, { "name": "Fury", "description": "When a great tragedy befalls an entire civilization, the spirits of enraged victims pour their anger into a weapon to wreak vengeance upon the world. This weapon is only known as \"Fury.\"" }], "armor": [{ "name": "Potato Sack", "description": "This is a surprisingly sturdy material that can be used as a protective clothing. The makeshift nature of this material is obvious, so many adventurers choose to replace the potato sack as quickly as possible." }, { "name": "Faded Garment", "description": "This garment is a family heirloom that has been passed down from one adventuring generation to another." }, { "name": "Adventurer's Tunic", "description": "This tunic is crafted from robust fabrics that are designed to withstand wilderness survival. Some traditions involve giving tunics as gifts to adventurers that are deemed worthy by an organization." }, { "name": "Leather Jerkin", "description": "This leather armor is a common choice for traveling adventurers. The trend of wearing leather jerkins originated around Yggdrasil when dangerous creatures began to lurk in the nearby jungles." }, { "name": "Scaled Chestguard", "description": "This armor is made of monster scales that were found on the ground. Monster scales are often crafted into respectable armor whenever metal is in short supply." }, { "name": "Sky Mail", "description": "Light Elvish metals are used to create divine chainmails. Old legends say that the first sky mails were originally created from discarded armor pieces once worn by divine creatures." }, { "name": "Shadow Cloak", "description": "This cloak summons small shadows that envelop the wearer during battle to enhance protection. Cloaks such as these are crafted with strange shadow magic and then alchemically enhanced in secret ways." }, { "name": "Runic Halfplate", "description": "Magic runes were etched into this armor to provide additional protection. Some scholars believe the runes on all runic halfplate armors are meant to interact together in some larger, undiscovered ritual." }, { "name": "Hellfire Fullplate", "description": "Supernatural infernos were used in the making of this armor. Great sacrifices were made to appease the demands of devilish creatures so that a few blacksmiths could forge with the strange flames." }, { "name": "Soulkeeper", "description": "Ancient legends say that each Soulkeeper armor harbors a soul that willingly sacrificed itself to enhance the armor’s protective power. In harder times, individuals made great sacrifices to ensure the survival of their clans and families." }, { "name": "Deathless", "description": "Deathless armors were created by the first kings and leaders as a means to prevent mortal wounds during the First Great War. True to the legend, those kings and leaders did not perish in battle; instead, they were each assassinated in their sleep and their armors were stolen. The forging techniques were lost to time, but massive fortunes were clearly necessary for the process." }], "glove": [{ "name": "Hand Wraps", "description": "This cloth is commonly used to lightly protect the hands and reduce vibration." }, { "name": "Cloth Mitts", "description": "Cloth mitts are made from the finest Elvish cloth." }, { "name": "Leather Gloves", "description": "These gloves are crafted with tough and hardened leather." }, { "name": "Bone Grips", "description": "Gloves such as this are made from monster bones. Monster bones provide extra resilience and, occasionally, residual magic." }, { "name": "Iron Gauntlets", "description": "Iron gauntlets are made by master craftsmen that have spent decades working with metal." }, { "name": "Imbued Battlefists", "description": "Mage guilds often create experimental gloves such as this to increase magic power against monster factions. Some experimental gloves are adorned with runes that were copied from ancient sources." }, { "name": "Wartorn Mitts", "description": "This armor was battle-tested during the Third Great War. Although these mitts are old, armor of this quality was once necessary for survival." }, { "name": "Fiery Handguards", "description": "These are experimental gloves created by fire mages that used techniques and methods taught by fire elementals." }, { "name": "Empowerment Gloves", "description": "Monster kings paid for expensive enhancements to these gloves. These enhancements were meant to gain an advantage against certain monster factions in battles for territory." }, { "name": "Coldforged Fists", "description": "This armor is forged without fire or heat in the hopes of retaining the magical properties of the special metal found in the mountains. Blacksmiths require enchanted hammers to forge gloves such as this." }, { "name": "Eternals", "description": "An elder race of immortals wore this armor and established great empires. The race disappeared suddenly and mysteriously, but some of their armor was left behind." }, { "name": "Phrygians", "description": "Phrygians were developed by a long-lost civilization destroyed by war. Most of the ruins of these lost cities contained fantastic treasures that have long since been plundered." }, { "name": "Titans", "description": "Powerful armor such as this was necessary to slay titanic monster overlords that tried to take control of the realms after the initial formation of the Great Barrier. The Great Barrier was created to protect the realms from dark and forgotten enemies that rivaled the power of deities." }], "hammer": [{ "name": "Splintered Club", "description": "This is a makeshift weapon that is often created by farmers." }, { "name": "Wooden Mallet", "description": "This is a mallet normally used for carpentry; however, wooden mallets are often used for combat out of necessity when resources and materials are scarce." }, { "name": "Primal Mace", "description": "Primal maces are battle-tested and have legends heaped upon them; however, their effectiveness has diminished over time." }, { "name": "Orcish Bludgeon", "description": "This is an orc's preferred tool for interrogations and battle." }, { "name": "Heavy Mace", "description": "Heavy maces are made for war, infiltration, and charisma." }, { "name": "Iron Basher", "description": "Iron bashers are typically made by expert craftsmen such as the monster Markay'ak. Craftsmen almost always leave their mark on the iron as a symbol of pride." }, { "name": "Darkmetal Maul", "description": "These mauls are made with a special metal that has distinct colors and properties. The secrets of this darkmetal were stolen from monster craftsmen and popularized." }, { "name": "Divine Gavel", "description": "These gavels are blessed by a church. Divine gavels sometimes acquire power through the devotion, achievement, and sacrifice of previous owners." }, { "name": "Hallowed Hammer", "description": "Hammers such as this are often created by famous blacksmiths like Markay'ak with the help of religious monster priests. Hallowed hammers are sometimes endowed with sacred powers." }, { "name": "Dwarven Maul", "description": "Dwarven mauls are robust and powerful enough to withstand Dwarven life in the mines and ground. Dwarven blacksmiths have vast experience in making hammers." }, { "name": "Coldforged Gavel", "description": "These gavels are made from a special metal and forged without heat. The process of forging without heat allows innate properties of the special metal to remain." }, { "name": "Skullshatterer", "description": "Skullshatterer hammers were originally created to combat the undead. The hammers that remain are often considered prized possessions by many clerics and sacred beings." }, { "name": "Amboss", "description": "These hammers are known for breaking anvil heads during the process of forging. They are rarely created and typically fetch a substantial price." }, { "name": "Benevolence", "description": "Spiritual masters often spread the message of their spirituality in a variety of ways. This hammer has the power to give the gift of peace to enemies — one way or another." }, { "name": "Hammer of Gaia", "description": "These hammers were owned and used by titanic monster overlords after the initial formation of the Great Barrier. These titans wrecked the land and ruled the realms for a time." }, { "name": "Worldender", "description": "According to historians, this hammer is said to have once caused an earthquake massive enough to topple a city." }, { "name": "Nightmare", "description": "An ancient legend claims that a strange hammer fell through a Great Barrier fissure into the realms; hammers such as this are simply not of this world." }], "misc": [{ "name": "Small HP Potion", "description": "A potion flask containing a red liquid, healing you as you drink it." }, { "name": "Small MP Potion", "description": "A potion flask containing a blue liquid, recovering mana as you drink it." }, { "name": "Medium HP Potion", "description": "A potion flask containing a red liquid, healing you as you drink it." }, { "name": "Medium MP Potion", "description": "A potion flask containing a blue liquid, recovering mana as you drink it." }, { "name": "Large HP Potion", "description": "A potion flask containing a red liquid, healing you as you drink it." }, { "name": "Large MP Potion", "description": "A potion flask containing a blue liquid, recovering mana as you drink it." }], "orb": [{ "name": "Rat Skull", "description": "This rat skull is a useful tool for beginning mages. Mages sometimes experiment on the bones of long-dead creatures to produce a focusing vessel." }, { "name": "Crystal Globe", "description": "These globes are used for a variety of magical tasks. This is a classic device for magic users." }, { "name": "Seer's Stone", "description": "The internal magic of these stones allow wise men to protect themselves during scrying and other seer activities." }, { "name": "Philosopher's Stone", "description": "Rumors about immortality and transmutation inspired magic users to experiment and create stones such as this. These orbs became useful in augmenting magical power despite the experimental results falling short of the original intentions." }, { "name": "Cyclops's Eye", "description": "This is a fantastic magical component that is easily enchanted. Handy items such as this often come with innate powers and can frequently be found in trade shipments between merchants." }, { "name": "Nüwa's Rondure", "description": "This powerful magical object is often used to control the elements and inspire fear in the hearts of enemies. Nüwa, a legendary magic user from a monster faction, made many objects such as this." }, { "name": "Baetylus's Eye", "description": "Objects like this were created from meteorites and misused as holy symbols. Although they are no longer used as holy symbols, Baetylus’s Eyes radiate substantial magical power." }, { "name": "Benben Stone", "description": "Benben Stones were placed on top of the pyramids of an ancient, dead race. The stones absorbed thousands of years of solar energy, which was said to be a gift from a sun deity." }, { "name": "Silthrim", "description": "Ancient snake stones such as this were found on forgotten altars inside ancient ruins. Scholars say that the stones were probably used in worshipping a snake deity, but the texts found in the ruins have not been successfully translated yet." }, { "name": "Lich's Phylactery", "description": "A lich’s phylactery contains the soul of a powerful undead creature. Older phylacteries come with powerful enchantments to protect the wearer — and the soul contained within." }], "quiver": [{ "name": "Linen Quiver", "description": "This mass-produced quiver is made with Elvish linen for extra comfort." }, { "name": "Rustic Quiver", "description": "Rustic Quivers are reliable and battle-tested. These quivers are often passed on to apprentice archers as they progress." }, { "name": "Snakeskin Quiver", "description": "These quivers are made from snake scales from special monsters. Typically, snake skins are found after the giant snakes have shed their skin; to attempt a snakeskin collection otherwise would be a high risk." }, { "name": "Reinforced Exemplar", "description": "The exquisite craftsmanship of Markay'ak resulted in the creation of Reinforced Exemplars. Quivers such as this are often a testament to the pride of any professional archer." }, { "name": "Lazarus's Revenge", "description": "An immortal from an elder race created quivers with an inhuman power in order to manifest his revenge upon the world." }, { "name": "Dragonhide Cynosure", "description": "This quiver is made of dragon scales found on the ground. Dragon scales are a very difficult crafting material, so only the best craftsmen can use them." }, { "name": "Lotharien", "description": "Lothariens are quivers that are named after a people warred out of existence. The Lotharien people battled surrounding territories for power acquisition while using these quivers." }, { "name": "Treant's Gift", "description": "This quiver is a gift from the forest as a means for nature spirits to reclaim their stolen power, territory, and respect." }, { "name": "Vodhrai", "description": "The Vodhrai are the embodiment of vengeance, anger, wrath, and determination. The unusually strong emotions from this living quiver might serve to corrupt the user." }, { "name": "Pompeii", "description": "This quiver was once found near the ruins of an entire civilization. There are no surviving records about the quiver in the region from this time period." }], "ring": [{ "name": "Woven Band", "description": "This strange band allows a small part of the wearer’s life essence to be stored." }, { "name": "Ironbark Loop", "description": "This ring is made from a special wood that is as tough as iron. Ironbark is often used as an alternative to metal." }, { "name": "Brass Unity", "description": "Two kingdoms that were joined by royal marriage had their armies wear these rings as a symbol of the newly allied nations." }, { "name": "Hollowed Bone", "description": "This ring is made from the bones of a monster husk. Monster bone can be used as a sturdy material when no other resources are available." }, { "name": "Elven Heirloom", "description": "Rings are often handed down from generation to generation in the Elvish tradition." }, { "name": "Imbued Union", "description": "This ring has tiny runes carved into the inner band. Some historians believe these rings were the last effort of a lost kingdom to fortify its population from disease." }, { "name": "Arcane Ring", "description": "Arcane rings are the magical experiments of intermediate mages. Some rings are crafted and enchanted to substantially enhance magic-casting abilities." }, { "name": "Emerald Band", "description": "These rings once belonged to the “Cult of the Emerald Spiders,” a gang of bandits that were among the first to ride spiders." }, { "name": "Infernal Ring", "description": "Infernal rings are gifts from devilish creatures. They entice the wearer to desire more power. This desire is often followed by ill-advised offers by more devils." }, { "name": "Ancient Signet", "description": "Nature spirits originally gave these rings as gifts of appreciation to primal monsters. Many of these rings have been stolen or lost over thousands of years." }, { "name": "Reverence", "description": "Many religious factions claim that individuals wearing this ring have the favor of a deity; however, the specific deity is not known. Many religious figureheads believe that the divine anonymity is intentional." }, { "name": "Gyges", "description": "Ancient scrolls claim that these legendary rings make the wearer nearly invincible. The scrolls also mention stories of wearers becoming corrupt and profoundly unhappy." }, { "name": "Peacekeeper", "description": "Once every age, a Peacekeeper is found and marks the wearer as a special protector of the realms. In a past age, the bearer of the Peacekeeper failed and the Third Great War began." }], "rune": [{ "name": "Lucid", "description": "This flat material is commonly found in mines; monsters often mine for Lucid to support their economies." }, { "name": "Melant", "description": "The curves of Melant give the appearance of writing or symbols, but blacksmiths believe these natural formations reveal a powerful internal structure." }, { "name": "Turim", "description": "This useful material originates from a great volcano and the surrounding region. Turim were once frequently traded between caravans." }, { "name": "Fundo", "description": "This robust material was recently found to be useful for upgrades when blacksmiths began experimenting with \"worthless Fundo.\" Since that time, Fundo have been considered a valuable resource." }, { "name": "Amari", "description": "Amari are often given as gifts from overseas kingdoms. Scholars say that Amari were first discovered when a race of sea creatures made first contact with several land kingdoms and brought Amari from the sea floor." }, { "name": "Purum", "description": "Often mistaken for gold, this material was once thought to be the same material as dragon scales. Many ancient decorations and weapons are adorned with Purum." }, { "name": "Royal", "description": "Royals are often owned and collected by kings and queens to be used as ceremonial gifts during arranged marriages." }, { "name": "Tara", "description": "These formations naturally occur most often near Yggdrasil, the World Tree. The beauty and power rarity of Tara make them equally suited for either jewelry heirlooms or item upgrades." }, { "name": "Gloom", "description": "Once the secret methods of enhancing equipment using the power of Gloom were discovered, those methods were shortly sold to an opposing kingdom as one of the biggest betrayals in the history of the realms." }, { "name": "Plurae", "description": "Unusual crystalline properties in Plurae make it an exceptional material. Although Plurae were only recently rediscovered in the forgotten depths of the world, the applications of Plurae have already been substantial in turning the tides of war." }, { "name": "Aeter", "description": "Although Aeter were once considered gifts from the gods by queens and kings of the past, written histories claim that Aeter were found inside black meteorites." }], "shield": [{ "name": "Wooden Shield", "description": "This is a makeshift shield that seems to have been produced out of necessity." }, { "name": "Buckler", "description": "Bucklers can be useful protection against small and light weapons. Pirates often use bucklers for maneuverability." }, { "name": "Old Bulwark", "description": "This is a shield type that is often made during war times. Although cheap, the shield is made of sturdy ironbark." }, { "name": "Metal Guard", "description": "Kingdom sentries often use shields such as this to reduce received damage as well as protect citizens." }, { "name": "Darkmetal Shield", "description": "This shield is made of darkmetal and anointed with a black oil. Adventurers with this kind of shield are certain to stand out from the rest." }, { "name": "Spiked Warshield", "description": "Spiked Warshields are robust in battle and fitting for orcish culture. Veteran orc warriors display their victory notches on the sides of their shields." }, { "name": "Protecteron", "description": "Paladins acquire this shield when they attain a certain level of spiritual devotion. However, these paladin shields are sometimes seen without their owners..." }, { "name": "Svalinn", "description": "This type of shield is made by mortals with ice that is found only in the Underworld. Although the shield is powerful, the unusual properties and rarity of the Underworld Ice make mortal attempts at reconstructing these shields inadequate at best." }, { "name": "Ancile", "description": "This sacred shield is wrapped in legend and rumors. One ancient scroll tells how the shield created false copies of the user to confuse opponents. Another scroll alternatively explains that the shield was modeled after the very shield wielded by a deity." }, { "name": "Aegis", "description": "The divine paint on this shield is animated and can imbue a worthy user with fantastic powers. Some observers believe that the blinking eye allows the mysterious and divine painter to see the world." }], "staff": [{ "name": "Broken Twig", "description": "Sticks and broken twigs are used by apprentice mages for educational purposes." }, { "name": "Cracked Stick", "description": "This is a damaged battlestaff that still has some use for beginning magic users." }, { "name": "Gnarled Broomstick", "description": "Some of the oldest trees are used to create Gnarled Broomsticks. These weapons produce spells to sweep enemies off the battlefield." }, { "name": "Oak Staff", "description": "This is a sturdy oak weapon for casting intermediate magic." }, { "name": "Mystic Wand", "description": "This wand is a gift from the mystics that is embedded with strange shards that enhance magical power." }, { "name": "Bone Staff", "description": "This is made from the bones of monster mages to augment magical power." }, { "name": "Encrusted Rod", "description": "This rod is encrusted with gems that store magical power." }, { "name": "Imbued Staff", "description": "The etched runes on this staff faintly glow when spells are cast. Although several mage guilds clearly believe that the runes augment spell casting, the true nature of the runes is unknown." }, { "name": "Emerald Staff", "description": "This staff uses an enchanted stone to channel and focus magical energies. The process of finding such a special emerald, along with the expensive enchanting process, makes this staff somewhat difficult to craft." }, { "name": "Sapphire Staff", "description": "This staff is made of Dragonwood and uses stones that were originally dragon gifts. The residual traces of draconic power contained in the stones compound magic's potency." }, { "name": "Frozen Greatstaff", "description": "The Frozen Greatstaff is made by mortals with ice found only in the Underworld. Although the construction methods are flawed, the results can still be quite powerful." }, { "name": "Infernal Staff", "description": "This staff is made of Underwood that underwent a magical tempering process using Underworld Flames. Although the staffs were undoubtedly crafted by mortal hands, the method to obtain Underworld Flames seems to be a secret lost to time." }, { "name": "Hellfire Greatstaff", "description": "Hellfire Greatstaffs are constructed with hellfires provided by mischievous devils. Although the process to create a staff such as this is mysterious, the price exacted by the devils involved is not." }, { "name": "Divine Staff", "description": "This kind of staff is modeled from ancient texts. Part of the crafting process requires hundreds of devout beings to request blessings upon the staff by specific deities." }, { "name": "Crystal Core", "description": "This strange staff utilizes crystals from the Realm of Madness in order to enhance wild magics in nature. The crystals are the central component of this staff." }, { "name": "Witch's Heart", "description": "The heart of an elder witch powers this staff's magic. Forbidden powers reanimated the beating heart, which causes the staff to symbolically embody a representation of the undead." }, { "name": "Deathweaver", "description": "Deathweavers are relics that have survived the creation of the Great Barrier. These strange staffs are not of this world." }], "sword": [{ "name": "Wooden Sword", "description": "These swords are often made of ironbark to last longer than regular wood." }, { "name": "Rusty Ironsword", "description": "Swords such as this have seen many battles and are typically handed down from a warrior to an apprentice." }, { "name": "Troll Blade", "description": "This is a worthy weapon wielded by trolls and their tribes. Trolls often attack neighboring territories to either expand their own or force back invaders." }, { "name": "Broadsword", "description": "The broadsword is a standard weapon among soldiers and warriors on the battlefield." }, { "name": "Longsword", "description": "Longswords are primarily identified by their longer grip rather than the longer blade. Bladesmiths have used a variety of materials and levels of skill, producing a wide variety of results." }, { "name": "Gladius", "description": "Designed for combat, this weapon performs to expectations inside the Colosseum." }, { "name": "Greatsword", "description": "This massive sword is designed to increase damage potential specifically for war. An adventurer that wears or uses a weapon such as this leaves no doubt about their goals and profession." }, { "name": "Templar Greatsword", "description": "These are weapons that once belonged to the knights of fallen kingdoms. Powerful kingdoms once existed before massive wars obliterated them from the landscape; the knights wielding these greatswords maintained their chivalrous duties long after their kingdoms turned to dust." }, { "name": "Ghastly Scimitar", "description": "These swords are crafted by undead monsters. The unnatural crafting technique to produce weapons such as this remains unknown." }, { "name": "Nullfire Sword", "description": "Nullfire Swords are made by mortals from ice that is only found in the Underworld. Originally, this kind of sword was made to combat devils and demons during the first Great War; however, Nullfire Swords were crafted by flawed processes and were therefore unable to repel the devils and demons completely." }, { "name": "King's Rapier", "description": "In realms where warfare is constant, royalty often spend massive quantities of gold to create one of the best blades that money can buy for their personal use. Unfortunately, these pristine blades alone cannot stop invading armies from taking over a kingdom." }, { "name": "Void Blade", "description": "These weapons were given to mortals by a secretive group of wraith monsters. These \"gifts\" were later discovered to be a means of manipulating mortal endeavors through magical corruption. Despite the apparent failure of this master plan, the powerful swords can still be found." }, { "name": "Zerstörer", "description": "Many scholars say these weapons were created to destroy an ancient and powerful race, but neither the creators nor their opponents remain." }, { "name": "Hearteater", "description": "This weapon is literally a monster. These creatures bond with the user to increase combat exposure, which provides greater opportunities for the creatures to feed and sustain themselves." }, { "name": "Demonedge", "description": "Demonedges were brought into the realms by the demons and devils that began the First Great War. These weapons are forged with hellfire and are not crafted by mortal hands." }, { "name": "Excalibur", "description": "Some of the most divine warriors and dedicated paladins in history used a weapon such as this. Legends that are heaped upon the names of the wielders have historically inspired and motivated generations of fighters and kings." }, { "name": "Harbinger", "description": "This weapon is almost always considered a bad omen and bringer of doom when it is found. Some scholars believe this weapon falls through barrier fissures and could only be made outside of the realms." }], "mount": [{ "name": "Grubling", "description": " " }, { "name": "Spider", "description": " " }, { "name": "Leafspider", "description": " " }, { "name": "Ruby Crawler", "description": " " }, { "name": "Tick", "description": " " }, { "name": "Shadowstrider", "description": " " }, { "name": "Pebbles", "description": " " }, { "name": "Ember Pebbles", "description": " " }, { "name": "Ether Wyrm", "description": " " }, { "name": "Shadow Wyrm", "description": " " }, { "name": "Sand Scarab", "description": " " }, { "name": "Golden Scarab", "description": " " }, { "name": "Flaming Skullspider", "description": " " }, { "name": "Blacksmith's Grub", "description": " " }, { "name": "Snowball", "description": " " }], "totem": [{ "name": "Dream Feathers", "description": "These feathers absorb the dreams and nightmares of those that sleep near it. The dreams and nightmares are stored and reused in the form of magic." }, { "name": "Voodoo Doll", "description": "A supernatural creature bound to this doll fuels magical power available to the user." }, { "name": "Glowing Chicken", "description": "This is a vessel that emanates magic originating from nature." }, { "name": "Divine Beads", "description": "These beads were carried by holy priests as a means to store divine power and count their blessings. Some of the divine power still resides within each bead." }, { "name": "Templar's Resolve", "description": "When defeated templars fail a divine task, they pour spiritual devotion into a personal totem such as this to aid the side of good." }, { "name": "Holy Cricket", "description": "This is one of the many magical crickets that were once owned by the emperors and empresses of Tiger's Teeth. To ward against assassinations, magical crickets enhanced the supernatural power of the royalty that carried them." }, { "name": "Laughing Skulls", "description": "This is a prison with supernatural creatures that are unwillingly bound together. They generate substantial magical power with their unnatural laughter." }, { "name": "Hive Mind", "description": "A collective of supernatural minds that focus their magical power and bestow it upon the user of their totem. The Hive Mind believes that all creatures must submit to their power and tries to convince the user to join them." }, { "name": "Nganga's Serpent", "description": "This is an avatar of a supernatural creature. Some scholars say that Nganga's Serpent is given to those that are chosen and deemed worthy for greatness; however, other scholars suggest that this is another means by which deities try to control and manipulate mortals." }, { "name": "Sangoma's Bones", "description": "These ancient bones are said to be small fragments of a forgotten monster deity. The bones radiate power beyond imagination." }], "box": [{ "name": "Mysterious Saddle Chest", "description": "Shipped from the unexplored regions of Faivel. The contents of this cage cannot be inspected until opened." }, { "name": "Elixir", "description": "A magical blue elixir potion which grants your account useful extra features." }], "charm": [{ "name": "Little Bell", "description": "Bells are often used as a symbol of devotion toward a chosen deity. The interior of this bell has an inlaid silver inscription, but the translation of the inscription has been lost to time." }, { "name": "Hardened Egg", "description": "Fossilized monster eggs are often interpreted as symbols of longevity. However, no written records of these creatures exist beyond recent times." }, { "name": "Tattooed Skull", "description": "Orc tribes often keep the skulls of worthy foes as a sign of respect. This skull is adorned with tattoos that symbolize the power the foe had during life." }, { "name": "Ship Pennant", "description": "Flags flown from the tops of warships were called pennants. This ship pennant was among the wrecked warships that first traveled to Headless Landing." }, { "name": "Blue Marble", "description": "Mages created alternative methods of mana acquisition during times of scarcity. This marble was created during the Arcane Crisis, a time when mana networks were under extreme stress." }], "pet": [{ "name": "Greedy Grub", "description": "A tiny grub that will loot items for you." }, { "name": "Greedy Goblin", "description": "A tiny goblin that will loot items for you." }] }
    const types = {
        hammer: {
            baselvl: 0,
            slot: [101],
            tiers: 17,
            drop: .4,
            weight: 1,
            class: 3,
            stats: {
                10: {
                    base: 1,
                    min: .6,
                    max: 1
                },
                11: {
                    base: 3,
                    min: .8,
                    max: 1.7
                },
                17: {
                    base: 15,
                    min: .05,
                    max: .1
                }
            }
        },
        bow: {
            baselvl: 0,
            slot: [101],
            tiers: 17,
            drop: .4,
            weight: 1,
            class: 2,
            stats: {
                10: {
                    base: 1,
                    min: .6,
                    max: 1
                },
                11: {
                    base: 3,
                    min: .8,
                    max: 1.7
                },
                17: {
                    base: 10,
                    min: .05,
                    max: .1
                }
            }
        },
        staff: {
            baselvl: 0,
            slot: [101],
            tiers: 17,
            drop: .4,
            weight: 1,
            class: 1,
            stats: {
                10: {
                    base: 1,
                    min: .6,
                    max: 1
                },
                11: {
                    base: 3,
                    min: .8,
                    max: 1.7
                },
                17: {
                    base: 10,
                    min: .05,
                    max: .1
                }
            }
        },
        sword: {
            baselvl: 0,
            slot: [101],
            tiers: 17,
            drop: .4,
            weight: 1,
            class: 0,
            stats: {
                10: {
                    base: 1,
                    min: .6,
                    max: 1
                },
                11: {
                    base: 3,
                    min: .8,
                    max: 1.7
                },
                17: {
                    base: 20,
                    min: .05,
                    max: .1
                }
            }
        },
        armlet: {
            baselvl: 1,
            slot: [102],
            tiers: 13,
            drop: 1,
            weight: .3,
            stats: {
                6: {
                    base: 10,
                    min: .5,
                    max: .9
                },
                12: {
                    base: 7,
                    min: .5,
                    max: .8
                }
            }
        },
        armor: {
            baselvl: 2,
            slot: [103],
            tiers: 11,
            drop: 1,
            weight: 1,
            stats: {
                12: {
                    base: 10,
                    min: 1.4,
                    max: 2.8
                },
                6: {
                    base: 20,
                    min: 1,
                    max: 2
                }
            }
        },
        bag: {
            baselvl: 5,
            slot: [104],
            tiers: 5,
            drop: 1,
            weight: .1,
            stats: {
                19: {
                    base: 1,
                    min: .1,
                    max: .3
                }
            }
        },
        boot: {
            baselvl: 2,
            slot: [105],
            tiers: 13,
            drop: 1,
            weight: .4,
            stats: {
                6: {
                    base: 10,
                    min: .6,
                    max: 1
                },
                12: {
                    base: 8,
                    min: .6,
                    max: 1.1
                },
                15: {
                    base: 3,
                    min: .03,
                    max: .1
                }
            }
        },
        glove: {
            baselvl: 2,
            slot: [106],
            tiers: 13,
            drop: 1,
            weight: .4,
            stats: {
                6: {
                    base: 10,
                    min: .6,
                    max: 1
                },
                12: {
                    base: 8,
                    min: .7,
                    max: 1.1
                },
                14: {
                    base: 1,
                    min: .1,
                    max: 1.5
                }
            }
        },
        ring: {
            baselvl: 5,
            slot: [107],
            tiers: 12,
            drop: .8,
            weight: .2,
            stats: {
                6: {
                    base: 10,
                    min: .5,
                    max: .9
                },
                7: {
                    base: 5,
                    min: .6,
                    max: 1
                }
            }
        },
        amulet: {
            baselvl: 7,
            slot: [108],
            tiers: 12,
            drop: .8,
            weight: .3,
            stats: {
                7: {
                    base: 10,
                    min: 1,
                    max: 1.8
                },
                9: {
                    base: 1,
                    min: .2,
                    max: .3
                }
            }
        },
        quiver: {
            baselvl: 2,
            slot: [109],
            tiers: 10,
            drop: .7,
            weight: .5,
            class: 2,
            stats: {
                14: {
                    base: 5,
                    min: .1,
                    max: .9
                },
                9: {
                    base: 1,
                    min: .1,
                    max: .3
                }
            }
        },
        shield: {
            baselvl: 2,
            slot: [109],
            tiers: 10,
            drop: .7,
            weight: .5,
            class: 0,
            stats: {
                12: {
                    base: 20,
                    min: .8,
                    max: 1.4
                },
                13: {
                    base: 4,
                    min: 1,
                    max: 2.8
                }
            }
        },
        totem: {
            baselvl: 2,
            slot: [109],
            tiers: 10,
            drop: .7,
            weight: .5,
            class: 3,
            stats: {
                12: {
                    base: 10,
                    min: .4,
                    max: .9
                },
                9: {
                    base: 1,
                    min: .1,
                    max: .4
                }
            }
        },
        orb: {
            baselvl: 2,
            slot: [109],
            tiers: 10,
            drop: .7,
            weight: .5,
            class: 1,
            stats: {
                3: {
                    base: 10,
                    min: .3,
                    max: .7
                },
                9: {
                    base: 1,
                    min: .1,
                    max: .3
                }
            }
        },
        rune: {
            baselvl: 1,
            tiers: 11,
            drop: .8,
            quality: 70
        },
        misc: {
            drop: 8,
            weight: .1
        },
        book: {
            drop: .9,
            weight: .5
        },
        charm: {
            slot: [110, 111],
            noupgrade: !0,
            undroppable: !0,
            drop: 0,
            stackable: !1
        },
        mount: {
            noupgrade: !0,
            undroppable: !0,
            drop: 0,
            stackable: !1
        },
        box: {
            noupgrade: !0,
            undroppable: !0,
            drop: 0,
            stackable: !1
        },
        pet: {
            noupgrade: !0,
            undroppable: !0,
            drop: 0,
            stackable: !1
        },
        gold: {
            drop: 20
        }
    }
    const rndArrayFixed = (t,e)=>t[Math.floor(e * t.length)]
    const upgradeGains = {
        6: 4,
        7: 3,
        8: 5,
        9: 4,
        10: 1,
        11: 1,
        12: 5,
        13: 5,
        14: 5,
        15: .3,
        16: 5,
        17: 0,
        2: 2,
        0: 2,
        3: 2,
        4: 2,
        1: 2,
        5: 2,
        19: 1,
        18: 3
    };
    const randomStats = {
        6: {
            min: .2,
            max: .8,
            round: !0
        },
        7: {
            min: .2,
            max: .5,
            round: !0
        },
        8: {
            min: .1,
            max: 1
        },
        9: {
            min: .1,
            max: .5
        },
        10: {
            min: .03,
            max: .13,
            round: !0
        },
        11: {
            min: .1,
            max: .2,
            round: !0
        },
        12: {
            min: .1,
            max: .8,
            round: !0
        },
        13: {
            min: .1,
            max: .4
        },
        14: {
            min: .1,
            max: .5
        },
        16: {
            min: .1,
            max: .4
        },
        2: {
            min: .08,
            max: .45,
            round: !0
        },
        0: {
            min: .08,
            max: .45,
            round: !0
        },
        3: {
            min: .08,
            max: .45,
            round: !0
        },
        4: {
            min: .08,
            max: .45,
            round: !0
        },
        1: {
            min: .08,
            max: .45,
            round: !0
        },
        5: {
            min: .08,
            max: .45,
            round: !0
        },
        18: {
            min: .01,
            max: .15,
            round: !0
        }
    }
    , randomStatKeys = Object.keys(randomStats)
    const pvpCharm = {
        medalValue: 1e3,
        goldValue: 5e4,
        buyElo: 1600,
        quality: 90,
        level: 45,
        gs: 30,
        uniqueEquipped: !0
    }
    const charms$1 = [{
        id: 0,
        custom: ["Use: Removes all movement limiting effects."],
        useCd: 60,
        incap: !0,
        animCast: 45,
        use: (t,e,n,a)=>{}
    }, {
        id: 1,
        custom: ["Use: Protects you against 30% of incoming damage for 10 seconds."],
        useCd: 60,
        animCast: 6,
        incap: !1,
        use: (t,e,n,a)=>{}
    }, {
        id: 2,
        custom: ["Use: Increases your damage by 20% for 10 seconds."],
        useCd: 80,
        incap: !1,
        animCast: 6,
        use: (t,e,n,a)=>{}
    }, {
        id: 3,
        custom: ["Use: Speeds up your movement by 45 for 8 seconds."],
        useCd: 50,
        incap: !1,
        animCast: 6,
        use: (t,e,n,a)=>{}
    }, {
        id: 4,
        custom: ["Use: Attacks made against you grant 20 MP (up to 200) for 20 seconds."],
        useCd: 60,
        incap: !1,
        animCast: 6,
        use: (t,e,n,a)=>{}
    }]
    const generate$5 = t=>{
        charms$1.forEach((e,n)=>{
            t["charm" + e.id] = {
                ...pvpCharm,
                ...e,
                type: "charm",
                tier: e.id,
                useSkill: 107 + n
            }
        }
                        )
    }
    const generate$2 = t=>{
        for (const e in types)
            if (types[e].tiers) {
                const n = types[e];
                for (let a = 0; a < n.tiers; ++a)
                    generateEquipment({
                        type: e,
                        tier: a,
                        stats: n.stats,
                        level: getItemLevel(e, a),
                        class: n.class,
                        quality: n.quality
                    }, t)
            }
    }
    , getItemLevel = (t,e)=>types[t].baselvl + Math.floor(e / types[t].tiers * 100)
    , generateEquipment = (t,e)=>{
        const n = {
            level: t.level,
            type: t.type,
            tier: t.tier,
            stats: t.stats ? new Map : void 0,
            class: t.class,
            quality: t.quality
        };
        t.stats && Object.keys(t.stats).sort((t,e)=>t - e).forEach(e=>{
            const a = t.stats[e];
            n.stats.set(parseInt(e), {
                min: a.base + t.level * a.min,
                max: a.base + (t.level + 10) * a.max
            })
        }
                                                                  ),
            e[t.type + t.tier] = n
    }
    , generate$1 = t=>{
        const e = [250, 100, 500, 200, 1e3, 300];
        for (let n = 0; n < 6; ++n) {
            const a = Math.floor(n / 2)
            , s = n % 2 == 0;
            t["misc" + n] = {
                type: "misc",
                tier: n,
                level: 1 + 20 * a,
                goldvalue: 5 ** a,
                quality: 15,
                custom: [e[n] + (s ? " HP recovered" : " MP recovered")],
                useSkill: 100,
                use: (t,e,n,a)=>{}
            }
        }
    }
    , pets = [1919, 1920]
    , generate = t=>{
        pets.forEach((e,n)=>{
            t["pet" + n] = {
                level: 10,
                unsellable: !0,
                storeValue: 900,
                quality: 90,
                bindOnUse: 1,
                bindOnMerchant: 1,
                type: "pet",
                tier: n,
                useSkill: 104,
                use: (t,e,n,a,s)=>!0
            }
        }
                    )
    }
    , logic = {};
 
    generate$2(logic)
    generate$1(logic)
    generate(logic)
    generate$5(logic)
    Object.values(logic);
 
    class CoreItem {
        constructor(t) {
            this.dbid = t,
                this.stats = new Map,
                this.dirty = !0
        }
        hydrate(t) {
            if (this.dirty = !1,
                this.bound = t.bound,
                this.type = t.type,
                this.tier = t.tier,
                this.logic = logic[this.type + this.tier],
                this.auction = t.auction ? new Date(t.auction) : void 0,
                this.auctionprice = t.auctionprice,
                this.owner = t.name,
                this.stash = t.stash ? new Date(t.stash) : void 0,
                void 0 === this.logic)
                throw "Unknown item " + t.type + t.tier;
            if (this.upgrade = t.upgrade,
                this.stats.clear(),
                t.rolls) {
                if (this.setRolls(t.rolls),
                    this.quality = this.nextRoll(),
                    this.logic.stats) {
                    this.logic.stats.forEach((t,e)=>{
                        this.stats.set(e, {
                            type: "base",
                            qual: this.quality,
                            value: Math.floor(t.min + (t.max - t.min) * (this.quality / 100) ** 2 + upgradeGains[e] * this.upgrade)
                        })
                    }
                                            );
                    const t = Math.min(4, Math.round((this.quality / 100) ** 1.5 * 3.6));
                    for (let e = 0; e < t; ++e) {
                        let t = this.nextRoll()
                        , e = -1;
                        for (; -1 === e || this.stats.has(e); )
                            e = parseInt(rndArrayFixed(randomStatKeys, t / 101)),
                                t = (t + 5) % 100;
                        const n = (this.nextRoll() + this.quality) / 2;
                        this.stats.set(e, {
                            type: "bonus",
                            qual: n,
                            value: Math.ceil(Math.max((randomStats[e].min + (randomStats[e].max - randomStats[e].min) * (n / 100) ** 2) * this.logic.level * types[this.type].weight, upgradeGains[e]) + upgradeGains[e] * this.upgrade)
                        })
                    }
                }
                this.quality = this.logic.quality || this.quality,
                    this.stacks = void 0
            } else
                this.stacks = t.stacks,
                    this.quality = this.logic.quality || 0;
            this.gs = 0,
                this.logic.gs ? this.gs = this.logic.gs : this.stats.forEach((t,e)=>{
                if (17 === e)
                    return;
                let n = t.value / upgradeGains[e];
                "shield" == this.type && "base" == t.type && (n *= .5),
                    "orb" == this.type && "base" == t.type && (n *= .7),
                    this.gs += n
            }
                                                                            ),
                this.gs = Math.round(this.gs)
        }
        setRolls(t) {
            this.rolls = t,
                this.currentRoll = 0
        }
        nextRoll() {
            if (this.currentRoll == this.rolls.length)
                throw "roll maximum reached";
            return this.rolls[this.currentRoll++]
        }
        use(t) {
            this.logic.use && this.logic.use(t)
        }
        storeValue() {
            return this.logic.storeValue || 0
        }
        medalValue() {
            return this.logic.medalValue || 0
        }
        canEquip(t) {
            return canEquip(t.level, t.skills.skillIdsActive, t.skills.skillIdsLearned, t.class, this.type, this.tier)
        }
        canEquipClass(t) {
            return canEquipClass(t.class, this.type, this.tier)
        }
        equipReasons(t) {
            const e = [];
            return this.logic.level && e.push(["Lv. " + this.logic.level, !0]),
                e
        }
        canBeDropped() {
            return !types[this.type].undroppable && !this.bound
        }
        canBeTraded() {
            return !this.bound
        }
        canBeSold() {
            return !this.logic.unsellable
        }
        getStashTime() {
            return this.dirty ? 0 : void 0 !== this.stash ? this.stash.getTime() : 0
        }
        getEquipSlot() {
            return void 0 !== types[this.type].slot ? types[this.type].slot[0] : void 0
        }
    }
    const urlOption = {
        headers: {}
    }
    const statObj = ['Strength', 'Stamina', 'Dexterity', 'Intelligence', 'Wisdom', 'Luck', 'HP', 'MP', 'HP Reg./5s', 'MP Reg./5s', 'Min Dmg', 'Max Dmg', 'Defense', 'Block', 'Critical', 'Move Spd', 'Haste', 'Atk Spd', 'Item Find', 'Bag Slots', 'Fame', 'Rating', 'Stat Points', 'Skill Points', 'Skill Points (Max)', 'Gear Score', 'PvP Level', '% Increased Dmg.', '% Increased Aggro Generation', '% Movement Spd. Reduction', 'Healing Reduction']
    let url = "https://hordes.io/api/item/get"
    const getItem = async (ids, itemUpgradeTable = [], keepBaseUpgrade = false) => {
        let data = { ids: ids };
        let foundAllItems = true
        let items = []
        for(let id of ids) {
            if(itemCache[id]) {
                items.push(JSON.parse(JSON.stringify(itemCache[id])))
            } else {
                foundAllItems = false
                break
            }
        }
        if(!foundAllItems) {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    // Add any other headers if needed
                },
                body: JSON.stringify(data),
            });
 
            if (!response.ok) {
                // Handle error, e.g., throw an error or return an appropriate value
                console.error('Error fetching data:', response.statusText);
                return [];
            }
 
            items = await response.json();
        }
        const newItems = [];
        if (!items["fail"]) {
            // console.log(itemCache)
            for (let i = 0; i < items.length; i++) {
                let coreItem = new CoreItem(items[i]["id"]);
 
                if(!itemCache[items[i].id]) {
                    console.log("caching new item", items[i].id)
                    itemCache[items[i].id] = JSON.parse(JSON.stringify(items[i]))
                }
 
                if (itemUpgradeTable[items[i]["id"]] !== undefined && itemUpgradeTable[items[i]["id"]] !== "") {
                    items[i].upgrade = itemUpgradeTable[items[i]["id"]];
                }
 
                coreItem.hydrate(items[i]);
 
                const { stats, quality, gs, upgrade, bound, type, tier, dbid } = coreItem;
                const level = coreItem.logic.level;
 
                let verbose_stats = {};
                for (let [key, val] of stats) {
                    verbose_stats[statObj[key]] = val;
 
                    if (statObj[key] === "Critical" || statObj[key] === "Haste" || statObj[key] === "Block") {
                        verbose_stats[statObj[key]]["value"] /= 10;
                        verbose_stats[statObj[key]]["value"] += "%";
                        continue;
                    }
 
                    if (statObj[key] === "MP Reg./5s" || statObj[key] === "HP Reg./5s") {
                        verbose_stats[statObj[key]]["value"] /= 10;
                        continue;
                    }
 
                    if (statObj[key] === "Item Find") {
                        verbose_stats[statObj[key]]["value"] += "%";
                        continue;
                    }
                }
 
                let newItem = {
                    stats: verbose_stats,
                    quality: quality,
                    gs: gs,
                    upgrade: upgrade,
                    bound: bound,
                    type: type,
                    tier: tier,
                    id: dbid,
                    level: level,
                };
 
                newItems.push(newItem);
            }
        }
 
        return newItems;
    };
    const itemCache = {}
    const parseAuxi = (str) => {
        let isMatch = false
        const regex = /(\d{8,})[a-zA-z' \n]*\s*(\+\d{1,2})?/g
        const ids = []
        const itemUpgradeTable = {}
        for (let match of str.matchAll(regex)) {
            isMatch = true
            const id = match[1]
            ids.push(id)
 
            let itemUpgradeValue
            // console.log(match[2])
            if (match[2] === undefined) {
                itemUpgradeValue = match[2]
            } else {
                itemUpgradeValue = match[2].split("+")[1]
            }
            itemUpgradeTable[id] = itemUpgradeValue
        }
        return {
            ids, itemUpgradeTable, isMatch
        }
    }
 
    const parseAuxiNew = (str) => {
    let isMatch = false;
    const regex = /(?:\b([\w\s]+) • \d+% \+(\d{1,2}) • (\d{9,})\b|\b([\w\s]+) • (\d{9,})\b)/g;
    const ids = [];
    const itemUpgradeTable = {};
 
    for (let match of str.matchAll(regex)) {
        isMatch = true;
        const itemName = match[1] || match[4];
        const upgradeValue = match[2] || null;
        const id = match[3] || match[5];
 
        ids.push(id);
        itemUpgradeTable[id] = upgradeValue;
    }
 
    return {
        ids,
        itemUpgradeTable,
        isMatch
    };
};
 
    let isShiftPressed = false;
    // Event listener to update the shift key state
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Shift') {
            isShiftPressed = true;
        }
    });
 
    document.addEventListener('keyup', (event) => {
        if (event.key === 'Shift') {
            isShiftPressed = false;
        }
    });
    let charKey = localStorage.getItem("kbCharacter") || "c"
    let charSplit = charKey.split("\"")
    if(charSplit.length > 1) {
        charKey = charSplit[1]
    }
 
    const colorObj = {
        "common": "grey",
        "uncommon": "green",
        "rare": "blue",
        "epic": "purp",
        "legendary": "orange",
        "mythical": "red"
    }
    const getRarityOfItem = (percent) => {
        if (percent <= 50) return "common"
        if (percent <= 69) return "uncommon"
        if (percent <= 89) return "rare"
        if (percent <= 98) return "epic"
        if (percent <= 109) return "legendary"
        return "mythical"
    }
 
    const getTextColor = (percent) => {
        let rarity = getRarityOfItem(percent)
        return colorObj[rarity]
    }
 
    // Function to set currentItemsInfo in localStorage
    function setCurrentItemsInfo(currentItemsInfo) {
        try {
            const serializedData = JSON.stringify(currentItemsInfo);
            localStorage.setItem('currentItemsInfo', serializedData);
            // console.log('currentItemsInfo has been successfully set in localStorage.');
        } catch (error) {
            console.error('Error setting currentItemsInfo in localStorage:', error);
        }
    }
 
    // Function to fetch currentItemsInfo from localStorage
    function getCurrentItemsInfo() {
        try {
            const serializedData = localStorage.getItem('currentItemsInfo');
            if (serializedData === null) {
                // Return an empty object if currentItemsInfo is not found in localStorage
                return {};
            }
            const currentItemsInfo = JSON.parse(serializedData);
            // console.log('currentItemsInfo has been successfully fetched from localStorage.');
            return currentItemsInfo;
        } catch (error) {
            console.error('Error fetching currentItemsInfo from localStorage:', error);
            return {};
        }
    }
 
    let currentItemsInfo = getCurrentItemsInfo()
 
    const svelteObj = {
        skillsMenu: "svelte-urqsjg",
        statsMenu: "svelte-ggsnc",
        chat: "svelte-16y0b84",
        bag: "svelte-1axz35n",
    }
    function copyElementToClipboard(button, element, height, width) {
        // Use HTML2Canvas to convert the HTML element to a canvas
 
        button.addEventListener("click", () => {
            // console.log(height, width)
            if(height) {
                element.style.height = height
            }
            if(width) {
                const len = element.children.length - 1
                element.style.width = parseInt(width.split("px")[0]) * len + "px"
            }
            html2canvas(element, {backgroundColor:null}).then((canvas) => {
                // Convert the canvas to a blob
                canvas.toBlob((blob) => {
                    // Create a ClipboardItem for the blob
                    const clipboardItem = new ClipboardItem({ [blob.type]: blob });
 
                    // Write the ClipboardItem to the clipboard
                    navigator.clipboard.write([clipboardItem]).then(() => {
                        // Change button text to 'Copied!' and reset after 1 second
                        button.innerText = 'Copied!';
                        setTimeout(() => {
                            button.innerText = 'Copy';
                        }, 1000);
                    });
                });
            });
        })
    }
 
    function init() {
        const ufplayer = document.querySelector("#ufplayer")
        if(ufplayer) {
            async function handleStatSimulation(event) {
                const charSheetContainer = document.querySelector(".container.svelte-ggsnc")
                if(charSheetContainer) {
                    let statSimulatorOpened = localStorage.getItem('statSimulatorOpened') || '0';
                    // Get player class and level information
                    const detailStatCol = charSheetContainer.querySelector(".statcol");
                    let playerClassSrc = null;
                    let level = 0;
 
                    if (detailStatCol) {
                        const spans = detailStatCol.querySelectorAll("span");
                        spans.forEach((span, index) => {
                            if (span.textContent.trim().toLowerCase() === "class" && index < spans.length - 1) {
                                const nextSpan = spans[index + 1];
                                const imgElement = nextSpan.querySelector("img");
                                playerClassSrc = imgElement ? imgElement.getAttribute("src") : null;
                            } else if (span.textContent.trim().toLowerCase() === "level" && index < spans.length - 1) {
                                const nextSpan = spans[index + 1];
                                level = nextSpan.textContent.trim();
                            }
                        });
                    }
 
                    level = parseInt(level)
                    const playerClass = parseInt(getClass(playerClassSrc))
                    const player = {pclass: playerClass, level}
 
                    // Function to toggle stat simulator and update CSS classes
                    function toggleStatSimulator(e) {
                        e.stopPropagation()
                        const btn = e.target
                        statSimulatorOpened = statSimulatorOpened === '0' ? '1' : '0';
                        localStorage.setItem('statSimulatorOpened', statSimulatorOpened);
 
                        // Get the title frame element
                        const titleFrame = charSheetContainer.querySelector('.titleframe');
 
                        // Toggle the CSS classes based on the statSimulatorOpened value
                        if (statSimulatorOpened == '1') {
                            // Code to execute when stat simulator is opened
                            // console.log("Stat Simulator opened");
                            btn.classList.remove('grey'); // Remove grey class
                            btn.classList.add('black'); // Add black class
                        } else {
                            // Code to execute when stat simulator is closed
                            // console.log("Stat Simulator closed");
                            btn.classList.remove('black'); // Remove black class
                            btn.classList.add('grey'); // Add grey class
                        }
                        handleSimulationUI(charSheetContainer, player)
                    }
 
                    const closeBtn = charSheetContainer.querySelectorAll("img")[1]
                    // Create a button element
                    const statSimulatorButton = document.createElement('div');
                    statSimulatorButton.classList.add("btn", "textprimary", "statSimulatorStartBtnKEK")
                    statSimulatorButton.style.padding = "10px"
                    statSimulatorButton.style.textAlign = "center"
                    closeBtn.style.padding = "7px"
                    statSimulatorButton.style.width = "60%"
                    if(statSimulatorOpened == 1) {
                        statSimulatorButton.classList.add("black")
                    } else {
                        statSimulatorButton.classList.add("grey")
                    }
                    statSimulatorButton.textContent = 'Stat Simulation';
                    statSimulatorButton.addEventListener('click', toggleStatSimulator);
                    // Create a button element for Copy
                    const copyButton = document.createElement('div');
                    copyButton.classList.add("btn", "textprimary", "copy-button-stats", "black");
                    copyButton.style.padding = "10px";
                    copyButton.style.textAlign = "center";
                    copyButton.style.width = "40%";
                    copyButton.textContent = 'Copy';
                    // Get the title frame element
                    const titleFrame = charSheetContainer.querySelector('.titleframe');
 
                    // Append the button to the title frame
                    titleFrame.insertBefore(copyButton, closeBtn);
                    titleFrame.insertBefore(statSimulatorButton, closeBtn);
 
                    if(statSimulatorOpened == 1) {
                        handleSimulationUI(charSheetContainer, player)
                    }
                    const charSheet = document.querySelector(".stats2")
                    const statCols = charSheet.querySelectorAll(".statcol")
 
                    const stats = getStatsUI(charSheet)
                    // console.log(stats, "stats are")
                    let min = stats["min dmg"]
                    let max = stats["max dmg"]
                    let crit = stats["critical"]
                    let haste = stats["haste"]
                    let hp = stats["hp"]
                    let defense = stats["defense"]
                    let block = stats["block"]
 
                    let eHP = Math.round(hp / ((1 - ((1 - Math.exp(-defense * 0.0022)) * 0.87)) * (1 - (block / 100) * 0.45)));
                    let eDps = Math.round(((min - Math.max(0, min - max) + max) / 2) * (1 + crit / 100) * (1 + haste / 100));
                    let eBurst = Math.round(((min - Math.max(0, min - max) + max) / 2) * (1 + crit / 100));
                    if(playerClass == 1) {
                        eBurst = Math.round(((min - Math.max(0, min - max) + max) / 2) * (((1 + crit / 100) * 0.8) + ((1 + haste / 100) * 0.3)));
                    }
                    if(playerClass == 0) {
                        eHP = Math.round(hp / ((1 - ((1 - Math.exp(-defense * 0.0022)) * 0.87)) * (1 - (block / 100) * 0.6)));
                    }
                    stats["ehp"] = eHP
                    stats["edps"] = eDps
                    stats["eburst"] = eBurst
                    let buildScore = getBuildScore(stats, playerClass)
                    stats["build score"] = buildScore
 
                    createStatElement(statCols[1], "eHP", eHP)
                    createStatElement(statCols[1], "eDps", eDps)
                    createStatElement(statCols[2], "eBurst", eBurst)
                    createStatElement(statCols[0], "Build Score", buildScore)
 
                    copyButton.addEventListener('click', () => {
                        copyElementToClipboard(copyButton, charSheetContainer.querySelector(".window"));
                    });
 
                    if(detailStatCol) {
                        const existingRankStats = detailStatCol.querySelectorAll(".rankStatKEK")
                        for(let e of existingRankStats) {
                            e.remove()
                        }
                        const rank = await fetchRank(buildScore, playerClass)
                        createStatElement(detailStatCol, "Rank", rank, "rankStatKEK")
                    }
 
                }
            }
 
            async function handleStats() {
                const statsMenu = document.querySelector(`.l-upperLeftModal.${svelteObj.statsMenu}`)
                if(statsMenu) {
                    await handleStatSimulation()
                }
            }
 
            const tierlistApiUrl = "https://hordes-tierlist-api.vercel.app"
            async function fetchRank(buildScore, classId) {
                try {
                    const endpointUrl = `${tierlistApiUrl}/rank/${classId}/${buildScore}`
                    // console.log(endpointUrl)
                    const response = await fetch(endpointUrl);
                    if (!response.ok) {
                        throw new Error(`HTTP error! Status: ${response.status}`);
                    }
 
                    const data = await response.json();
                    return data.rank;
                } catch (error) {
                    console.error('Error fetching rank:', error.message);
                    return '';// Return a default value or handle the error accordingly
                }
            }
 
            function calculateDmgReduction(defense, block) {
                return ((1 - Math.exp(-defense * 0.0022)) * 0.87) + ((block / 100) * 0.6);
            }
 
            function calculateHPValue(defense, block) {
                const baseScore = 1 / (1 - (1 - (1 - (1 - Math.exp(defense * -0.0022)) * 0.87) * (1 - (block / 100) * 0.45)));
                return baseScore
            }
 
            function calculateDpsScore(edps, eburst, ehp, playerClass) {
                if(playerClass == 0) {
                    return (Math.log2(edps)
                            + Math.log2(eburst)
                            + (Math.log(ehp) / Math.log(5))
                           ) / 3;
                }
                if(playerClass == 1) {
                    return Math.log((eburst + edps) / 2) / Math.log(2);
                }
                if(playerClass == 2) {
                    return (Math.log(edps) / Math.log(2) + Math.log(eburst) / Math.log(2)) / 2;
                }
                if(playerClass == 3) {
                    return (Math.log2(edps)
                            + Math.log2(eburst)
                            + Math.log10(ehp)
                           ) / 3;
                }
            }
 
            function calculateTankScore(edps, eburst, ehp, haste, defense, block, playerClass) {
                const hpvalue = calculateHPValue(defense, block)
                const dmgRed = calculateDmgReduction(defense, block)
 
                if(playerClass == 0) {
                    return (Math.log2(ehp) + Math.log2(dmgRed * 100) + Math.log(haste) / Math.log(6)) / 3;
                }
                if(playerClass == 1) {
                    return (Math.log(ehp) / Math.log(2.5) + Math.log(eburst) / Math.log(6) + Math.log(edps) / Math.log(6)) / 3;
                }
                if(playerClass == 2) {
                    return (Math.log(ehp) / Math.log(2.5) + Math.log(eburst) / Math.log(6) + Math.log(edps) / Math.log(6)) / 3;
                }
                if(playerClass == 3) {
                    return (Math.log10(edps)
                            + (Math.log(eburst) / Math.log(11))
                            + (Math.log2(ehp))
                            + (Math.log(hpvalue * 60) / Math.log(7))
                            + (Math.log(haste * 8) / Math.log(16))
                           ) / 5;
                }
            }
 
            function calculateHybridScore(edps, eburst, ehp, haste, defense, block, playerClass) {
                const hpvalue = calculateHPValue(defense, block)
                const dmgRed = calculateDmgReduction(defense, block)
 
                if(playerClass == 0) {
                    return (Math.log(edps) / Math.log(4) + Math.log(eburst) / Math.log(5) + Math.log(ehp) / Math.log(5) + Math.log(dmgRed * 100) / Math.log(5)) / 4;
                }
                if(playerClass == 1) {
                    return (Math.log(ehp) / Math.log(5) + Math.log(eburst) / Math.log(5) + Math.log(edps) / Math.log(4)) / 3;
                }
                if(playerClass == 2) {
                     return (Math.log(ehp) / Math.log(5) + Math.log(eburst) / Math.log(5) + Math.log(edps) / Math.log(4)) / 3;
                }
                if(playerClass == 3) {
                    return ((Math.log(edps) / Math.log(3))
                            + (Math.log(eburst) / Math.log(4))
                            + (Math.log(ehp) / Math.log(6))
                            + (Math.log(hpvalue * 50) / Math.log(9))
                            + (Math.log(haste * 8) / Math.log(10))
                           ) / 5;
                }
            }
 
            function getBuildScore(stats, playerClass) {
                const ehp = stats.ehp
                const edps = stats.edps
                const eburst = stats.eburst
                const defense = stats.defense
                const block = stats.block
                const haste = stats.haste
                // console.log(stats, playerClass)
                // Calculate DPS score (K)
                const dpsScore = calculateDpsScore(edps, eburst, ehp, playerClass)
                // Calculate Tank score (L)
                const tankScore = calculateTankScore(edps, eburst, ehp, haste, defense, block, playerClass)
                // Calculate Hybrid score (M)
                const hybridScore = calculateHybridScore(edps, eburst, ehp, haste, defense, block, playerClass)
 
                // Calculate Build score
 
                let buildScore = 0
 
                if(playerClass == 0) {
                    buildScore = ((dpsScore + tankScore / 3 + hybridScore) * 210) / 3;
                }
                if(playerClass == 1) {
                    buildScore = ((dpsScore / 3) + tankScore + hybridScore) * 225 / 3;
                }
                if(playerClass == 2) {
                    buildScore = ((dpsScore / 3) + tankScore + hybridScore) * 226 / 3;
                }
                if(playerClass == 3) {
                    buildScore = ((dpsScore / 1.75) + tankScore + hybridScore) * 235 / 3;
                }
 
                console.log(dpsScore, tankScore, hybridScore, buildScore)
 
                return parseFloat((buildScore).toFixed(3));
            }
 
            function createStatElement(statCol, statName, statValue, extraClass) {
                const statLabel = document.createElement('span');
                statLabel.textContent = statName;
                statLabel.classList.add(extraClass)
                statCol.appendChild(statLabel);
 
                const statNumber = document.createElement('span');
                statNumber.className = 'statnumber';
                statNumber.textContent = statValue;
                if(!extraClass) {
                    statNumber.classList.add("textgold")
                    statCol.appendChild(statNumber);
                } else {
                    statNumber.classList.add("textpurp")
                    const spanContainer = document.createElement("span")
                    spanContainer.appendChild(statNumber)
                    spanContainer.classList.add(extraClass)
                    statCol.appendChild(spanContainer)
                }
                return [statLabel, statNumber];
            }
 
            function handleSimulationUI(charSheetContainer, player) {
                if(charSheetContainer) {
                    const existing = document.querySelector(".statSimulationKEK")
                    if(existing) {
                        existing.remove()
                        return;
                    }
 
                    console.log(player)
 
                    // Set charSheetContainer display to flex
                    charSheetContainer.style.display = "flex";
 
                    // Create a window panel div
                    const windowPanel = document.createElement("div");
                    windowPanel.classList.add("window", "panel-black", "statSimulationKEK");
                    // Create the title frame with "Stat Simulation" title
                    const titleFrame = document.createElement("div");
                    titleFrame.classList.add("titleframe");
                    titleFrame.style.margin = "10px"
                    const titleText = document.createElement("div");
                    titleText.classList.add("textprimary", "title");
                    titleText.textContent = "Stat Simulation";
 
                    titleFrame.appendChild(titleText);
 
                    // Append the title frame to the window panel
                    windowPanel.appendChild(titleFrame);
 
                    // Create a slot div with flex grid
                    const slotDiv = document.createElement("div");
                    slotDiv.classList.add("slot", "panel-black");
                    slotDiv.style.display = "grid";
                    slotDiv.style.gridTemplateColumns = "repeat(2, auto)";
 
                    // Create 10 inputs (1 for placeholder Auxi and 9 for stats)
                    const inputs = ["Weapon", "Armlet", "Armor", "Bag", "Boot", "Glove", "Ring", "Amulet", "Offhand"];
                    const auxiInput = document.createElement("textarea")
                    handleAuxiInput(auxiInput);
 
                    windowPanel.appendChild(auxiInput)
 
                    inputs.forEach(input => {
                        let inputElement
                        inputElement = document.createElement("input");
                        inputElement.setAttribute("type", "text");
 
                        inputElement.setAttribute("placeholder", input);
                        inputElement.classList.add("stat-sim-input");
                        inputElement.style.width = "120px";
                        inputElement.style.margin = "3px";
                        inputElement.classList.add(`${input.toLowerCase()}KEK`);
 
                        const inputWrapper = document.createElement("div");
                        inputWrapper.style.position = "relative";
                        inputWrapper.style.display = "inline-block";
 
                        // Create overlay for the input
                        const overlay = document.createElement("div");
                        overlay.classList.add("btn", "black", "textsecondary", "stat-sim-overlay");
                        overlay.textContent = inputElement.placeholder;
 
                        // Set overlay position on top of the input
                        overlay.style.position = "absolute";
                        overlay.style.top = "0";
                        overlay.style.left = "0";
                        overlay.style.pointerEvents = "none"; // Disable pointer events on the overlay
                        overlay.style.width = "120px"
                        overlay.style.boxSizing = "border-box"; // Ensure padding and border are included in the total width and height
 
                        overlay.style.padding = "5px 8px";
                        overlay.style.margin = "3px";
 
                        // Add input event listener to restrict user input
                        inputElement.addEventListener("input", function (event) {
                            if (input !== "Auxi") {
                                const inputValue = event.target.value;
                                const sanitizedValue = inputValue.replace(/[^0-9+]/g, "");
                                event.target.value = sanitizedValue;
                            }
                        });
 
                        // Add event listeners to handle overlay visibility
                        inputElement.addEventListener("mouseenter", function () {
                            overlay.style.opacity = "0";
                            if (currentItemsInfo.hasOwnProperty(input.toLowerCase())) {
                                const rect = inputElement.getBoundingClientRect();
                                const absoluteLeft = rect.left + 120
                                const absoluteTop = rect.top
                                const existingItemContainer = document.querySelector(".slotsContainerKEK")
                                if(existingItemContainer) {
                                    existingItemContainer.remove()
                                }
                                const slotsContainer = generateItemDescription(currentItemsInfo[input.toLowerCase()].item, absoluteLeft, absoluteTop);
                                const copyBtnItem = slotsContainer.querySelector(".copyitemBtnKEK")
                                if(copyBtnItem) {
                                    copyBtnItem.remove()
                                }
                            }
                        });
 
                        inputElement.addEventListener("mouseleave", function () {
                            // Check if the input is focused before changing the overlay's opacity
                            overlay.style.opacity = "1";
                            const existingItemContainer = document.querySelector(".slotsContainerKEK")
                            if(existingItemContainer) {
                                existingItemContainer.remove()
                            }
                        });
 
                        // Append the input and overlay to the wrapper div
                        inputWrapper.appendChild(inputElement);
                        inputWrapper.appendChild(overlay);
 
                        input = input.toLowerCase()
                        if(currentItemsInfo.hasOwnProperty(input)) {
                            const currentItemInfo = currentItemsInfo[input]
                            inputElement.value = currentItemInfo.id + `+${currentItemInfo.upgrade || 0}`
                            const overlay = inputElement.nextElementSibling
                            if(overlay) {
                                overlay.classList.add("text" + getTextColor(currentItemInfo.quality))
                            }
                        }
                        //                         // Add mouseenter event listener to spawn displayBtn
                        //                         inputWrapper.addEventListener("mouseenter", function () {
                        //                             spawnDisplayBtn(input);
                        //                         });
 
                        //                         // Add mouseleave event listener to remove displayBtn
                        //                         inputWrapper.addEventListener("mouseleave", function () {
                        //                             removeDisplayBtn();
                        //                         });
 
                        // Append the wrapper div to the slotDiv
                        slotDiv.appendChild(inputWrapper);
                    });
 
                    // Create the Simulate button
                    const simulateButton = document.createElement("button");
                    simulateButton.textContent = "Simulate";
                    simulateButton.classList.add("btn", "black", "textsecondary", "stat-sim-btn", "border");
                    simulateButton.style.padding = "5px"
                    simulateButton.style.fontSize = "90%"
                    simulateButton.style.flex = 1
                    // Append the slotDiv to the window panel
 
                    const buttonContainer = document.createElement("div");
                    buttonContainer.style.padding = "5px";
                    buttonContainer.style.margin = "2px";
                    buttonContainer.style.display = "flex"
                    // Add click event listener to handle the simulation
                    simulateButton.addEventListener('click', async function () {
                        simulateButton.classList.add('disabled');
                        const charSheet = document.querySelector(".stats2")
                        if(!charSheet) return;
                        // Get the values of all inputs and combine them into a string
                        const auxiInput = document.querySelector(".auxi-sim-input")
 
                        const ignoreGearEle = document.querySelector(".ignoreCurrentGearKEK")
                        // console.log(ignoreGearEle, ignoreGearEle.value, parseInt(ignoreGearEle))
 
                        // Get the value of the "Ignore Current Gear" checkbox
                        let ignoreCurrentGear = 1
                        let dontSimulate = false
                        if(ignoreGearEle) {
                            ignoreCurrentGear = ignoreGearEle.value || 1
                        }
                        const originalStats = getStatsUI(charSheet)
                        let newStats = {}
                        if(auxiInput) {
                            if(auxiInput.value !== "") {
                                const parsedAuxi = parseAuxi(auxiInput.value)
                                const ids = parsedAuxi.ids
                                const itemUpgradeTable = parsedAuxi.itemUpgradeTable
                                const newItems = await getItem(ids, itemUpgradeTable)
                                const {stats, itemsInfo} = await getStats(newItems, player, ignoreCurrentGear)
                                newStats = stats
                                currentItemsInfo = itemsInfo
                                setCurrentItemsInfo(currentItemsInfo);
                                const inputValues = inputs.map(input => {
                                    input = input.toLowerCase()
                                    const inputElement = slotDiv.querySelector(`.${input.toLowerCase()}KEK`);
                                    if(itemsInfo.hasOwnProperty(input)) {
                                        const itemInfo = itemsInfo[input]
                                        inputElement.value = itemInfo.id + `+${itemInfo.upgrade || 0}`
                                        const overlay = inputElement.nextElementSibling
                                        if(overlay) {
                                            overlay.className = "btn black textsecondary stat-sim-overlay"
                                            overlay.classList.add("text" + getTextColor(itemInfo.quality))
                                        }
                                    } else {
                                        inputElement.value = ""
                                        const overlay = inputElement.nextElementSibling
                                        if(overlay) {
                                            overlay.className = "btn black textsecondary overlay"
                                        }
                                    }
                                });
                                auxiInput.value = ""
                                auxiInput.style.height = "40px"
                                auxiInput.style.width = "94%";
                            }
                            else {
                                const allInputs = windowPanel.querySelectorAll(".stat-sim-input")
                                let inputsEmpty = true
                                for(let input of allInputs) {
                                    if(input.value !== "") {
                                        inputsEmpty = false
                                        break
                                    }
                                }
                                if(!inputsEmpty) {
                                    const inputValues = inputs.map(input => {
                                        const inputElement = slotDiv.querySelector(`.${input.toLowerCase()}KEK`);
                                        return inputElement ? inputElement.value : '';
                                    });
                                    const combinedString = inputValues.join('\n').trim();
                                    // Log the combined string and the value of the checkbox
                                    // console.log({ "combinedString": parseAuxi(combinedString), ignoreCurrentGear , player});
 
                                    const parsedAuxi = parseAuxi(combinedString)
                                    const ids = parsedAuxi.ids
                                    const itemUpgradeTable = parsedAuxi.itemUpgradeTable
                                    const newItems = await getItem(ids, itemUpgradeTable)
                                    const {stats, itemsInfo} = await getStats(newItems, player, ignoreCurrentGear)
                                    newStats = stats
                                    currentItemsInfo = itemsInfo
                                    setCurrentItemsInfo(currentItemsInfo);
                                    const inputValuesNew = inputs.map(input => {
                                        input = input.toLowerCase()
                                        const inputElement = slotDiv.querySelector(`.${input.toLowerCase()}KEK`);
                                        if(itemsInfo.hasOwnProperty(input)) {
                                            const itemInfo = itemsInfo[input]
                                            inputElement.value = itemInfo.id + `+${itemInfo.upgrade || 0}`
                                            const overlay = inputElement.nextElementSibling
                                            if(overlay) {
                                                overlay.className = "btn black textsecondary overlay"
                                                overlay.classList.add("text" + getTextColor(itemInfo.quality))
                                            }
                                        } else {
                                            inputElement.value = ""
                                            const overlay = inputElement.nextElementSibling
                                            if(overlay) {
                                                overlay.className = "btn black textsecondary overlay"
                                            }
                                        }
                                    });
                                }
                                else {
                                    let fetchedAuxi = ""
                                    const equipSlots = document.querySelector("#equipslots")
                                    const itemSlots = equipSlots.children
                                    for(let itemSlot of itemSlots) {
                                        itemSlot.dispatchEvent(new PointerEvent("pointerenter"))
                                    }
                                    setTimeout(() => {
                                        const itemStats = []
 
                                        for(let itemSlot of itemSlots) {
                                            const item = getItemUI(itemSlot.querySelector(".slotdescription"))
                                            if(item.type !== "charm") {
                                                itemStats.push(item)
                                            }
                                            itemSlot.dispatchEvent(new PointerEvent("pointerleave"))
                                        }
                                        console.log(itemStats)
                                        for(let item of itemStats) {
                                            fetchedAuxi += `${item.type} ${item.quality}% ${item.id} +7\n`
                                        }
                                        console.log(fetchedAuxi)
                                        auxiInput.value = fetchedAuxi
                                        auxiInput.dispatchEvent(new InputEvent('input', { bubbles: true }))
                                        // simulateButton.click()
                                    }, 100)
                                    dontSimulate = true
                                    simulateButton.classList.remove('disabled');
                                }
                            }
                            if(dontSimulate) {
                                return
                            }
                            // console.log(newStats.ignoreCurrentGear)
                            let finalStats = {}
                            const ignoreGearEle = document.querySelector(".ignoreCurrentGearKEK")
                            if(ignoreGearEle) {
                                ignoreCurrentGear = ignoreGearEle.value || 1
                            }
                            // console.log(ignoreCurrentGear, ignoreGearEle, ignoreGearEle.value)
                            newStats["gear score"] += 60
                            if(ignoreCurrentGear == 1) {
                                finalStats = newStats
                            } else {
                                finalStats = addStats(originalStats, newStats)
                            }
                            // console.log(currentItemsInfo)
 
                            // console.log(finalStats, originalStats, newStats)
                            setStatsUI(charSheet, finalStats)
                            simulateButton.classList.remove('disabled');
 
                            const playerClass = player.pclass
                            const buildScore = finalStats["build score"]
                            const detailStatCol = charSheetContainer.querySelector(".statcol");
                            if(detailStatCol) {
                                const existingRankStats = detailStatCol.querySelectorAll(".rankStatKEK")
                                for(let e of existingRankStats) {
                                    e.remove()
                                }
                                const rank = await fetchRank(buildScore, playerClass)
                                createStatElement(detailStatCol, "Rank", rank, "rankStatKEK")
                            }
                        }
                    });
                    // Create a div for "Ignore Current Gear"
                    const ignoreCurrentGearDiv = document.createElement("button");
                    ignoreCurrentGearDiv.classList.add("btn", "textsecondary", "ignoreCurrentGearKEK", "black");
                    ignoreCurrentGearDiv.textContent = "Ignoring Current Gear";
                    ignoreCurrentGearDiv.style.padding = "5px";
                    ignoreCurrentGearDiv.style.fontSize = "90%";
                    ignoreCurrentGearDiv.style.flex = 2
                    // Add click event listener to toggle classes and update value
                    ignoreCurrentGearDiv.addEventListener('click', function () {
                        const isActive = ignoreCurrentGearDiv.classList.contains("black");
                        if(!isActive) {
                            ignoreCurrentGearDiv.textContent = "Ignoring Current Gear"
                        } else {
                            ignoreCurrentGearDiv.textContent = "Ignore Current Gear?"
                        }
                        // Toggle classes
                        ignoreCurrentGearDiv.classList.toggle("black", !isActive);
                        ignoreCurrentGearDiv.classList.toggle("grey", isActive);
 
                        // Update the value of ignoreCurrentGear
                        ignoreCurrentGearDiv.value = isActive ? 0 : 1;
                        // console.log(ignoreCurrentGearDiv.value)
                    });
 
                    const clearBtn = document.createElement("div")
                    clearBtn.classList.add("btn", "black", "textsecondary")
                    clearBtn.textContent = "Clear"
                    clearBtn.style.marginLeft = "10px"
                    clearBtn.style.marginRight = "10px"
                    clearBtn.style.textAlign = "center"
                    clearBtn.addEventListener("click", () => {
                        currentItemsInfo = {}
                        setCurrentItemsInfo(currentItemsInfo)
                        const statInputs = document.querySelectorAll(".stat-sim-input")
                        for(let input of statInputs) {
                            input.value = ""
                        }
                        const statOverlays = document.querySelectorAll(".stat-sim-overlay")
                        for(let overlay of statOverlays) {
                            overlay.className = "btn black textsecondary stat-sim-overlay"
                        }
                    })
                    // Append the checkbox container to the button container
                    buttonContainer.appendChild(simulateButton)
                    buttonContainer.appendChild(ignoreCurrentGearDiv);
 
                    windowPanel.appendChild(slotDiv);
                    windowPanel.appendChild(buttonContainer);
                    windowPanel.appendChild(clearBtn);
 
                    // Append the window panel to the charSheetContainer
                    charSheetContainer.appendChild(windowPanel);
 
                    // Function to handle input changes for "Auxi"
                    function handleAuxiInput(inputElement) {
                        inputElement.style.overflow = "hidden"
                        inputElement.classList.add("auxi-sim-input")
                        inputElement.placeholder = "Auxi"
                        inputElement.style.height = "40px"
                        inputElement.style.width = "94%";
 
                        inputElement.style.marginLeft = "8px"
 
                        // Add event listeners to handle scrolling
                        inputElement.addEventListener('wheel', (event) => {
                            // Adjust the scrollTop property based on your scrolling logic
                            inputElement.scrollTop += event.deltaY;
                        });
                        inputElement.addEventListener("input", function (event) {
                            const inputValue = event.target.value;
 
                            // Dynamically adjust the height and width based on content
                            const lines = inputValue.split('\n').length;
                            inputElement.style.height = `${lines * 20 + 20}px`; // Adjust the height based on the number of lines
                        });
                    }
                    // Function to spawn display button
                    function spawnDisplayBtn(placeholder) {
                        const displayBtn = document.createElement("button");
                        displayBtn.textContent = placeholder;
                        displayBtn.classList.add("btn", "black", "textsilver", "display-sim-btn", "border");
                        displayBtn.style.width = "100%";
                        displayBtn.style.margin = "2px"
                        displayBtn.style.padding = "5px";
                        displayBtn.style.fontSize = "90%";
 
                        // Append the displayBtn after the simulateButton
                        windowPanel.appendChild(displayBtn);
                    }
 
                    // Function to remove display button
                    function removeDisplayBtn() {
                        const displayBtn = charSheetContainer.querySelector(".display-sim-btn");
                        if (displayBtn) {
                            displayBtn.remove();
                        }
                    }
                }
            }
 
            function saveRules(rules) {
                localStorage.setItem('rulesKEK', JSON.stringify(rules));
            }
 
            function getRules() {
                const rulesKEK = localStorage.getItem('rulesKEK');
                return rulesKEK ? JSON.parse(rulesKEK) : [
                ['Bloodline', 'Stamina', 'Critical', 'Haste'],
                ['Bloodline', 'Stamina', 'Max Dmg.', 'Haste'],
                ['Bloodline', 'Stamina', 'Min Dmg.', 'Haste'],
                ['Bloodline', 'Stamina', 'Min Dmg.', 'Critical'],
                ['Bloodline', 'Stamina', 'Max Dmg.', 'Critical'],
                ['Bloodline', 'Max Dmg.', 'Critical', 'Haste'],
                ['Bloodline', 'Min Dmg.', 'Critical', 'Haste'],
                ['Bloodline', 'Min Dmg.', 'Max Dmg.', 'Critical'],
                ['Bloodline', 'Min Dmg.', 'Max Dmg.', 'Haste'],
                ['Bloodline', 'Stamina', 'Defense', 'Critical'],
                ['Bloodline', 'Stamina', 'Defense', 'Haste'],
            ];
            }
 
            function deleteRule(rule) {
                const rules = getRules();
                const ruleIndex = rules.findIndex(existingRule => JSON.stringify(existingRule) === JSON.stringify(rule));
 
                if (ruleIndex !== -1) {
                    rules.splice(ruleIndex, 1);
                    saveRules(rules);
                }
            }
 
 
            function isBis(item) {
                const rules = getRules();
                // console.log(item)
                if(JSON.stringify(item) == "{}") return false
                // Define the required bonus stats combinations for BiS
 
                if(item.type == "orb") {
                    rules.push(["Defense", "Critical", "Haste", "Stamina"])
                    rules.push(["Defense", "Min Dmg.", "Haste", "Stamina"])
                    rules.push(["Defense", "Max Dmg.", "Haste", "Stamina"])
                    rules.push(["Defense", "Max Dmg.", "Critical", "Stamina"])
                    rules.push(["Defense", "Min Dmg.", "Critical", "Stamina"])
                    rules.push(["Stamina", "Max Dmg.", "Critical", "Haste"])
                    rules.push(["Stamina", "Min Dmg.", "Critical", "Haste"])
                    rules.push(["Min Dmg.", "Max Dmg.", "Critical", "Haste"])
                    rules.push(["Min Dmg.", "Max Dmg.", "Stamina", "Haste"])
                    rules.push(["Min Dmg.", "Max Dmg.", "Critical", "Stamina"])
                }
                // Get the bonus stats from the item
                const bonusStats = Object.keys(item.stats)
                .filter(stat => item.stats[stat].type === 'bonus')
                .map(stat => stat.trim());
 
                // Check if any of the rules is satisfied by the item
                const isBiS = rules.some(rule => {
                    return rule.every(requiredStat => {
                        // For 'Bloodline', check if the item has any of 'Strength', 'Wisdom', 'Dexterity', or 'Intelligence'
                        if (requiredStat === 'Bloodline') {
                            const bloodlineStats = ['Strength', 'Wisdom', 'Dexterity', 'Intelligence'];
                            return bloodlineStats.some(bloodlineStat => bonusStats.includes(bloodlineStat));
                        }
                        return bonusStats.includes(requiredStat);
                    });
                });
 
                return isBiS;
            }
 
            function getItemUI(itemElement) {
                try {
                    const statsElements = itemElement.querySelectorAll('.pack.svelte-e3ao5j:nth-child(2) > div');
                    // Extracting relevant information from the HTML element
                    const titleElement = itemElement.querySelector('.slottitle');
                    const title = titleElement.textContent.trim();
                    const quality = itemElement.querySelector('.type').textContent.trim().split(' ')[2].toLowerCase()
                    const upgradeMatch = title.match(/\+(\d+)/);
                    const upgrade = upgradeMatch ? parseInt(upgradeMatch[1], 10) : 0;
                    const type = itemElement.querySelector('.type').textContent.trim().split(' ')[1].toLowerCase();
                    const gs = parseInt(itemElement.querySelector('.textgreen').textContent.match(/\d+/)[0], 10);
                    const id = parseInt(itemElement.querySelector('.textgrey').textContent.match(/\d+/)[0], 10);
                    const level = parseInt(itemElement.querySelector('.textgreen').textContent.match(/\d+/)[0], 10);
 
                    // Parsing stats
                    const stats = {};
                    let bonusStatsStarted = false
                    statsElements.forEach((statElement) => {
                        const statText = statElement.textContent.trim();
                        let value, statName
                        if(statText.includes("+")){
                            bonusStatsStarted = true
                        }
                        const statInfo = statText.split(" ");
                        // console.log(statInfo)
 
 
                        if(statText.includes("-")) {
 
                            value = statInfo[0] + " " + statInfo[2]
                            statName = statInfo.splice(3).join(" ")
 
                        } else if (statText.includes("+")) {
 
                            value = statInfo[1]
                            statName = statInfo.splice(2).join(" ")
 
                        } else {
 
                            value = statInfo[0]
                            statName = statInfo.splice(1).join(" ")
 
                        }
 
                        const type = bonusStatsStarted ? 'bonus' : 'base';
 
                        // Extracting the numeric value of the stat
                        if (bonusStatsStarted) {
                            value = value.replace('+', '').trim();
                        }
                        if (value.includes("%")) {
                            value = value.split("%")[0].trim();
                        }
 
                        stats[statName] = {
                            type,
                            qual: 0, // You need to replace this with the actual value
                            value: value
                        };
                    });
                    if(stats["Damage"]) {
                        const min = stats["Damage"].value.split(" ")[0]
                        const max = stats["Damage"].value.split(" ")[1]
                        stats["Min Dmg."] = {type: stats["Damage"].type, qual: 0, value: min}
                        stats["Max Dmg."] = {type: stats["Damage"].type, qual: 0, value: max}
                        delete stats["Damage"]
                    }
                    // Parsing other information
                    const description = itemElement.querySelector('.pack.description.svelte-e3ao5j').textContent.trim();
                    const bound = 2; // You need to replace this with the actual value
                    const tier = 4; // You need to replace this with the actual value
 
                    // Constructing the item object
                    const item = {
                        stats,
                        quality,
                        gs,
                        upgrade,
                        bound,
                        type,
                        tier,
                        id,
                        level,
                    };
 
                    return item;
                }
                catch(e) {
                    // console.log(e)
                    return {}
                }
            }
 
            function getStatsUI(charSheet) {
                if (charSheet) {
                    // Get all statcol elements
                    const statCols = charSheet.querySelectorAll('.statcol');
 
                    const stats = {};
 
                    // Function to parse values (handles '%' cases)
                    const parseStatValue = (value) => {
                        if (value.includes('%')) {
                            // If '%' is present, split and parse the first part
                            return parseFloat(value.split('%')[0].trim());
                        }
                        // Otherwise, parse the entire value
                        return parseFloat(value.trim());
                    };
 
                    // Function to remove dot at the end of statName
                    const removeDotAtEnd = (statName) => statName.replace(/\.$/, '');
 
                    // Iterate over each statcol
                    statCols.forEach(statCol => {
                        // Get all span elements within the current statcol
                        const statElements = statCol.querySelectorAll('span');
 
                        // Iterate over each pair of span elements (statName and statValue)
                        for (let i = 0; i < statElements.length; i += 2) {
                            // Extract statName and statValue
                            let statName = statElements[i].textContent.trim();
                            statName = removeDotAtEnd(statName); // Remove dot at the end, if present
                            const statValue = parseStatValue(statElements[i + 1].textContent);
 
                            // Add the key-value pair to the stats object
                            stats[statName.toLowerCase()] = statValue;
                        }
                    });
 
                    // console.log(stats);
                    return stats;
                }
                return {};
            }
 
            function setStatsUI(charSheet, stats) {
                // Get all statcol elements
                const statCols = charSheet.querySelectorAll('.statcol');
 
                // Function to format stats based on statName
                const formatStatValue = (statName, statValue) => {
                    if (["critical", "haste"].includes(statName)) {
                        return statValue.toFixed(1) + "%"; // Add "%" for specific stats and show one decimal place
                    } else if (statName === "block") {
                        return statValue.toFixed(2) + "%"; // Show two decimal places for "block"
                    } else if (statName === "item find") {
                        return statValue + "%"; // Add "%" for "item find" without applying toFixed
                    } else if (statName === "hp reg./5s" || statName === "mp reg./5s") {
                        return statValue.toFixed(1); // Show one decimal place for "hp reg./5s" and "mp reg./5s"
                    } else if (statName === "mp") {
                        return Math.round(statValue).toFixed(0); // Round and show zero decimal places for "mp"
                    }
                    return statValue; // Default formatting
                };
 
                // Function to remove dot at the end of statName
                const removeDotAtEnd = (statName) => statName.replace(/\.$/, '');
 
                // Iterate over each statcol
                statCols.forEach(statCol => {
                    // Get all span elements within the current statcol
                    const statElements = statCol.querySelectorAll('span');
 
                    // Iterate over each pair of span elements (statName and statValue)
                    for (let i = 0; i < statElements.length; i += 2) {
                        // Extract statName
                        let statName = statElements[i].textContent.trim().toLowerCase();
                        statName = removeDotAtEnd(statName); // Remove dot at the end, if present
 
                        // Check if the statName exists in the provided stats object
                        if (stats.hasOwnProperty(statName)) {
                            // Update the statValue in the UI with formatted value
                            const statValue = stats[statName];
                            statElements[i + 1].textContent = formatStatValue(statName, statValue);
                        }
                    }
                });
            }
 
            function addStats(stats1, stats2) {
                const addedStats = {};
                for (let statName in stats2) {
 
                }
                // Iterate over keys of stats1
                for (const statName in stats1) {
                    if (stats1.hasOwnProperty(statName)) {
                        // Check if the statName exists in stats2
                        if (stats2.hasOwnProperty(statName)) {
                            // Add the corresponding stats and store in addedStats
                            addedStats[statName] = stats1[statName] + stats2[statName];
                        } else {
                            // If the statName doesn't exist in stats2, just copy it to addedStats
                            addedStats[statName] = stats1[statName];
                        }
                    }
                }
 
                // Iterate over keys of stats2 to include any additional stats
                for (const statName in stats2) {
                    if (stats2.hasOwnProperty(statName) && !addedStats.hasOwnProperty(statName)) {
                        // If the statName exists in stats2 but not in addedStats, copy it to addedStats
                        addedStats[statName] = stats2[statName];
                    }
                }
 
                return addedStats;
            }
 
            const getStats = async (items, player, ignoreCurrentGear) => {
                console.log(items)
                const playerClass = player.pclass
 
                const battleRankPrestige = [4000, 8000, 12000, 16000, 20000, 24000, 28000, 32000, 36000, 40000, 44000, 48000]
 
                player.prestige = battleRankPrestige[battleRankPrestige.length - 1]
 
                const normalizeStat = (stat) => {
                    stat = String(stat).split(".")
                    // console.log(stat)
 
                    if (stat[1]) {
                        // console.log(stat[1] / 10 ** (stat[1].length - 1))
                        if (stat[1] / 10 ** (stat[1].length - 1) <= 5) {
                            return Math.floor(Number(stat.join(".")))
                        } else {
                            return Math.ceil(Number(stat.join(".")))
                        }
                    }
                    return Number(stat.join("."))
                }
 
                let stats = {}
 
                if(ignoreCurrentGear == 1) {
                    stats = {
                        "HP": 100 + player.level * 8,
                        "HP Reg./5s": 2,
                        "MP": 100,
                        "MP Reg./5s": 3,
                        "Defense": 15,
                        "Block": 0,
                        "Min Dmg": 0,
                        "Max Dmg": 0,
                        "Atk Spd": 10,
                        "Critical": 5.0,
                        "Haste": 0,
                        "Move Spd": 15,
                        "Bag Slots": 0,
                        "Item Find": 0.5,
                        "Gear Score": 0,
                        "Strength": 10,
                        "Stamina": 12,
                        "Dexterity": 10,
                        "Intelligence": 10,
                        "Wisdom": 10,
                        "Luck": 5,
                        "Move Spd": 105,
                    }
                } else {
                    stats = {
                        "HP": 0,
                        "HP Reg./5s": 0,
                        "MP": 0,
                        "MP Reg./5s": 0,
                        "Defense": 0,
                        "Block": 0,
                        "Min Dmg": 0,
                        "Max Dmg": 0,
                        "Atk Spd": 0,
                        "Critical": 0,
                        "Haste": 0,
                        "Move Spd": 0,
                        "Bag Slots": 0,
                        "Item Find": 0,
                        "Gear Score": 0,
                        "Strength": 0,
                        "Stamina": 0,
                        "Dexterity": 0,
                        "Intelligence": 0,
                        "Wisdom": 0,
                        "Luck": 0,
                        "Move Spd": 0,
                    }
                }
 
                const statConversionTable = {
                    "Strength": { "HP": 2, "HP Reg./5s": 0.03 },
                    "Stamina": { "Defense": 1, "HP": 4 },
                    "Dexterity": { "Critical": 0.05 },
                    "Intelligence": { "MP": 0.8, "Critical": 0.04 },
                    "Wisdom": { "MP": 0.8, "Haste": 0.03 },
                    "Luck": { "Critical": 0.02, "Item Find": 0.5 }
                }
 
                const classStat = {
                    0: "Strength",
                    1: "Intelligence",
                    2: "Dexterity",
                    3: "Wisdom"
                }
 
                let bloodlineStat = classStat[playerClass]
 
                //stats based on level
                if(ignoreCurrentGear == 1) {
                    stats[bloodlineStat] += 1 * player.level
                    stats["Stamina"] += 2 * (player.level - 1)
                    stats[bloodlineStat] += player.level * 3
                }
 
                const bloodlineStatTable = {
                    0: { "Min Dmg": 0.3, "Max Dmg": 0.3, "HP Reg./5s": 0.3 },
                    1: { "Min Dmg": 0.4, "Max Dmg": 0.4 },
                    2: { "Min Dmg": 0.4, "Max Dmg": 0.4 },
                    3: { "Min Dmg": 0.4, "Max Dmg": 0.4 },
                }
                const bloodlineStatBonus = bloodlineStatTable[playerClass]
                for (let stat in bloodlineStatBonus) {
                    if (!statConversionTable[bloodlineStat][stat]) {
                        statConversionTable[bloodlineStat][stat] = bloodlineStatBonus[stat]
                    } else {
                        statConversionTable[bloodlineStat][stat] += bloodlineStatBonus[stat]
                    }
                }
 
                for (let item of items) {
                    let itemStats = item["stats"]
                    for (let statName in itemStats) {
                        let statVal = itemStats[statName]["value"]
                        if (statName === "Haste" || statName === "Critical" || statName === "Item Find" || statName === "Block") {
                            statVal = parseFloat(itemStats[statName]["value"].split("%")[0])
                        }
                        if (!stats[statName]) {
                            stats[statName] = statVal
                        } else {
                            stats[statName] += statVal
                        }
                    }
                    stats["Gear Score"] += item["gs"]
                }
 
                //prestige stats
                if(ignoreCurrentGear == 1) {
                    const prestigeBonusStats = {
                        1: { "Move Spd": 5 },// 5 Movement Speed
                        2: { "MP": 50 },// 50 MP
                        3: { "Item Find": 15 },// 15% Item Find
                        4: { "Min Dmg": 5, "Max Dmg": 5 },// 5 Min & Max Damage
                        5: { "MP Reg./5s": 2, "HP Reg./5s": 2 },// 2 HP & MP Reg./5s
                        6: { "Mov Spd": 5 },// 5 Movement Speed
                        7: { "HP": 30 },// 30 HP
                        8: { "Item Find": 15 },// 15% Item Find
                        9: { "Critical": 5 },// 5% Critical
                        10: { "Haste": 3 },// 3% Haste
                        11: { "HP": 30 },// 30 HP
                        12: { "Min Dmg": 5, "Max Dmg": 5 }, // 5 Min & Max Damage
                    }
                    function prestigeToBattleRank(prestige) {
                        for (let i = 0; i < battleRankPrestige.length; i++) {
                            if (prestige < battleRankPrestige[i]) {
                                return i;
                            }
                        }
                        return battleRankPrestige.length;
                    }
                    let battleRank = prestigeToBattleRank(player.prestige)
                    for (let i = 1; i <= battleRank; i++) {
                        let prestigeBonusStat = prestigeBonusStats[i]
                        for (let stat in prestigeBonusStat) {
                            if (!stats[stat]) {
                                stats[stat] = prestigeBonusStat[stat]
                            } else {
                                stats[stat] += prestigeBonusStat[stat]
                            }
                        }
                    }
                }
 
                for (let statName in statConversionTable) {
                    const bonusStats = statConversionTable[statName]
                    for (let bonusStatName in bonusStats) {
                        stats[bonusStatName] += bonusStats[bonusStatName] * stats[statName]
                    }
                }
 
                for (let statName in stats) {
                    if (String(stats[statName]).split(".")[1]) {
                        const len = String(stats[statName]).split(".")[1].length
                        if (len > 3) stats[statName] = parseFloat(stats[statName].toFixed(2))
                    }
                }
 
                const itemSlots = {
                    "hammer": "weapon",
                    "bow": "weapon",
                    "staff": "weapon",
                    "sword": "weapon",
                    "armlet": "armlet",
                    "armor": "armor",
                    "bag": "bag",
                    "boot": "boot",
                    "glove": "glove",
                    "ring": "ring",
                    "amulet": "amulet",
                    "quiver": "offhand",
                    "shield": "offhand",
                    "totem": "offhand",
                    "orb": "offhand"
                }
 
 
                const itemsInfo = {}
                //calculations
                for (let item of items) {
 
                    let quality = item.quality
                    let type = item.type
                    let tier = item.tier
                    let upgrade = item.upgrade
                    let slot = itemSlots[type]
                    let rarity = getRarityOfItem(quality)
                    const itemInfo = {type: itemSlots[type], quality: quality, id: item.id, upgrade: upgrade, item: item}
                    if(itemSlots[type]) {
                        itemsInfo[itemSlots[type]] = itemInfo
                    }
                    stats["Max Dmg"] = normalizeStat(stats["Max Dmg"])
                    stats["Min Dmg"] = normalizeStat(stats["Min Dmg"])
                    stats["Item Find"] = Math.round(stats["Item Find"])
                    stats["Critical"] = Math.round(10 * stats["Critical"]) / 10
                    stats["Haste"] = Math.round(10 * stats["Haste"]) / 10
                }
                let min = stats["Min Dmg"]
                let max = stats["Max Dmg"]
                let crit = stats["Critical"]
                let haste = stats["Haste"]
                let hp = stats["HP"]
                let defense = stats["Defense"]
                let block = stats["Block"]
 
                let eHP = Math.round(hp / ((1 - ((1 - Math.exp(-defense * 0.0022)) * 0.87)) * (1 - (block / 100) * 0.45)));
                let eDps = Math.round(((min - Math.max(0, min - max) + max) / 2) * (1 + crit / 100) * (1 + haste / 100));
                let eBurst = Math.round(((min - Math.max(0, min - max) + max) / 2) * (1 + crit / 100));
                if(playerClass == 1) {
                    eBurst = Math.round(((min - Math.max(0, min - max) + max) / 2) * (((1 + crit / 100) * 0.8) + ((1 + haste / 100) * 0.3)));
                }
                if(playerClass == 0) {
                    eHP = Math.round(hp / ((1 - ((1 - Math.exp(-defense * 0.0022)) * 0.87)) * (1 - (block / 100) * 0.6)));
                }
                stats["eHP"] = eHP
                stats["eDps"] = eDps
                stats["eBurst"] = eBurst
                //lowercasing keys of stats
                for(let statName in stats) {
                    stats[statName.toLowerCase()] = stats[statName]
                    delete stats[statName]
                }
                // console.log(stats)
                let buildScore = getBuildScore(stats, playerClass)
                stats["build score"] = buildScore
 
                return {stats, itemsInfo}
            }
 
            document.addEventListener("keyup", (event) => {
                const focusedElement = document.activeElement;
 
                // Check if the focused element is an input field
                if (focusedElement.tagName === 'INPUT' || focusedElement.tagName === 'TEXTAREA') {
                    return;
                }
                if(event.key == charKey || event.key == charKey.toUpperCase()) {
                    handleStatSimulation(event)
                }
            })
 
            async function handleChatArticle(newArticle) {
                // Get the span with class "content" within the new article
                const contentSpan = newArticle.querySelector('.content');
                if (contentSpan) {
                    // Get the sibling span
                    const siblingSpan = contentSpan.nextElementSibling;
                    if (siblingSpan) {
                        // console.log(siblingSpan.textContent)
                        const hasGreaterThan = siblingSpan.textContent.includes('>');
                        const hasExclaimation = siblingSpan.textContent.includes('!');
 
                        // Run parseAuxi function and get the result
                        const parsedAuxi = parseAuxi(siblingSpan.textContent);
                        // Modify the textContent of siblingSpan based on the result
                        if(hasGreaterThan) {
                            if(parsedAuxi.isMatch) {
                                // console.log(parsedAuxi)
                                siblingSpan.style.pointerEvents = 'all';
                                siblingSpan.style.cursor = 'pointer'
                                let ids = parsedAuxi.ids.slice(0, 3)
                                const itemUpgradeTable = parsedAuxi.itemUpgradeTable
                                siblingSpan.style.color = "white"
                                let itemDescription = null
                                siblingSpan.addEventListener('mouseover', async function (event) {
                                    let newItems = await getItem(ids, itemUpgradeTable)
                                    // Run generateItemDescription function on mouseover
                                    const slotsContainer = document.querySelector(".slotsContainerKEK")
                                    if(slotsContainer) {
                                        slotsContainer.remove()
                                    }
                                    if(newItems.length === 1) {
                                        itemDescription = generateItemDescription(newItems[0])
                                    } else {
                                        itemDescription = generateItems(newItems)
                                    }
                                });
 
                            }
                        } else if(hasExclaimation) {
                            if(parsedAuxi.isMatch) {
                                siblingSpan.classList.add("textwhite")
                                siblingSpan.style.pointerEvents = 'auto';
                                siblingSpan.style.cursor = 'pointer'
                                let ids = parsedAuxi.ids
                                const itemUpgradeTable = parsedAuxi.itemUpgradeTable
                                const newItems = await getItem(ids, itemUpgradeTable)
                                // console.log(newItems)
 
                                siblingSpan.addEventListener('mouseover', function () {
                                    // Run generateItemDescription function on mouseover
                                    const slotsContainer = document.querySelector(".slotsContainerKEK")
                                    if(slotsContainer) {
                                        slotsContainer.remove()
                                    }
                                    if(newItems.length === 2) {
                                        // console.log("compare is working")
                                        compareItems(newItems[0], newItems[1])
                                    }
                                });
                            }
                        }
                    }
                }
            }
 
            async function modifyChat() {
                // console.log("modifying chat")
                // Select the chat section
                const chatSection = document.querySelector('#chat');
                // console.log(chatSection)
                // Callback function to execute when a mutation occurs
                if(chatSection && !chatSection.classList.contains("modifiedChatKEK")) {
                    // console.log("running modify chat")
                    chatSection.classList.add("modifiedChatKEK")
                    const existingArticles = chatSection.querySelectorAll("article")
                    for(let article of existingArticles) {
                        await handleChatArticle(article)
                    }
                    const mutationCallback = async function (mutationsList, observer) {
                        for (const mutation of mutationsList) {
                            if (mutation.type === 'childList') {
                                // A child node has been added, check if it's a new article
                                const newArticle = mutation.addedNodes[0];
                                if (newArticle && newArticle.nodeType === Node.ELEMENT_NODE && newArticle.classList.contains('line')) {
                                    await handleChatArticle(newArticle)
                                }
                            }
                        }
                    }
                    // Create a MutationObserver with the callback function
                    const observer = new MutationObserver(mutationCallback);
 
                    // Configure the observer to watch for changes in child nodes
                    const observerConfig = { childList: true };
 
                    // Start observing the chat section
                    observer.observe(chatSection, observerConfig);
                } else {
                    // console.error("Chat not found retrying every 100ms")
                    setTimeout(modifyChat, 100)
                }
 
 
            }
 
            function generateItems(items) {
                for(let item of items) {
                    generateItemDescription(item)
                }
            }
 
            function generateItemDescription(item, left, top) {
                // Create the main container
                if(item) {
                    const mainUI = document.querySelector(".layout")
                    let slotsContainer = document.querySelector('.slotsContainerKEK');
                    if(!slotsContainer) {
                        slotsContainer = document.createElement("div")
                        slotsContainer.classList.add("slotsContainerKEK")
                        slotsContainer.classList.add("l-ui")
                        slotsContainer.style.position = "absolute"
                        slotsContainer.style.display = 'flex';
                        slotsContainer.style.top = "130px"
                        slotsContainer.style.left = "120px"
                        if(left) {
                            slotsContainer.style.left = left + "px"
                        }
                        if(top) {
                            slotsContainer.style.top = top + "px"
                        }
                        mainUI.appendChild(slotsContainer)
 
                    }
                    const slotContainer = document.createElement('div');
                    slotContainer.className = 'slot';
                    slotContainer.style.width = "230px"
                    slotContainer.style.height = "290px"
                    // console.log(slotsContainer)
 
                    // Create the wrapper
                    const wrapper = document.createElement('div');
                    wrapper.className = 'wrapper';
                    slotContainer.appendChild(wrapper);
 
                    // Create the new_script_internal div
                    const newScriptInternal = document.createElement('div');
                    newScriptInternal.className = 'new_script_internal';
                    wrapper.appendChild(newScriptInternal);
 
                    // Create the slotdescription div
                    const slotDescription = document.createElement('div');
                    slotDescription.className = 'slotdescription svelte-18ojcpo border ' + getTextColor(item.quality);
                    slotDescription.style.width = "220px"
                    slotDescription.style.height = "270px"
                    slotDescription.style.opacity = "1"
                    slotDescription.style.transition = 'opacity 1s ease-out';
                    newScriptInternal.appendChild(slotDescription);
 
                    // Create and set the content for various elements
                    const container = document.createElement('div');
                    container.className = 'container svelte-e3ao5j';
                    container.style.padding = "10px 10px 0px 10px"
                    slotDescription.appendChild(container);
 
                    const pack1 = document.createElement('div');
                    pack1.className = 'pack svelte-e3ao5j';
                    container.appendChild(pack1);
 
                    const slottitle = document.createElement('div');
                    slottitle.className = 'slottitle svelte-e3ao5j ' + "text" + getTextColor(item.quality);
                    slottitle.textContent = 'T' + (parseInt(item.tier) + parseInt(1)) + " " + items[item.type][item.tier].name;
 
                    const upgradeText = document.createElement('span');
                    upgradeText.className = 'textprimary';
                    if(item.upgrade != 0 && item.upgrade) {
                        upgradeText.textContent = ' +' + item.upgrade;
                        slottitle.appendChild(upgradeText);
                    }
 
                    pack1.appendChild(slottitle);
 
                    const type = document.createElement('div');
                    type.className = 'type svelte-e3ao5j ' + "textwhite";
                    type.textContent = getRarityOfItem(item.quality) + ' ' + item.type;
                    const baseQuality = document.createElement('span');
                    baseQuality.textContent = " " + item.quality + '%';
                    type.appendChild(baseQuality);
 
                    pack1.appendChild(type);
 
                    const gsIDText = document.createElement('small')
                    const gsSpan = document.createElement("span")
                    gsSpan.className = "textgreen"
                    gsSpan.textContent = "GS: " + item.gs + " "
                    const idSpan = document.createElement("span")
                    idSpan.className = "textgrey"
                    idSpan.textContent = "ID: " + item.id
 
 
                    gsSpan.appendChild(idSpan)
                    if(item.bound == 2) {
                        const CBText = document.createElement('span');
                        CBText.className = 'textgreen';
                        CBText.textContent = ' CB';
                        gsSpan.appendChild(CBText)
                    }
                    gsIDText.appendChild(gsSpan)
                    pack1.appendChild(gsIDText)
 
                    const pack2 = document.createElement('div');
                    pack2.className = 'pack svelte-e3ao5j';
                    container.appendChild(pack2);
 
                    const statTexts = {"base": [], "bonus": []}
                    const stats = item.stats
                    for(let statName in stats) {
                        const stat = stats[statName]
                        const statText = document.createElement('div');
                        statText.className = 'svelte-e3ao5j ' + "text" + getTextColor(stat.qual);
                        statText.textContent = stat.value + " " + statName
                        if(stat.type === "base") {
                            statTexts["base"].push(statText)
                        } else if(stat.type === "bonus") {
                            statText.textContent = "+ " + statText.textContent + " " + stat.qual + "%"
                            statTexts["bonus"].push(statText)
                        }
                    }
                    for(let statType in statTexts) {
                        let statTypeTexts = statTexts[statType]
                        for(let statTypeText of statTypeTexts) {
                            pack2.appendChild(statTypeText)
                        }
                    }
 
 
                    const pack3 = document.createElement('div');
                    pack3.className = 'pack svelte-e3ao5j';
                    container.appendChild(pack3);
 
                    const levelText = document.createElement('div');
                    levelText.className = 'textgreen';
                    levelText.textContent = 'Requires Lv. ' + item.level;
                    pack3.appendChild(levelText);
 
                    slotsContainer.appendChild(slotContainer)
                    slotDescription.style.pointerEvents = 'auto';
                    slotDescription.style.zIndex = "20"
                    slotsContainer.style.zIndex = "10"
 
                    if(!document.querySelector(".copyitemBtnKEK")) {
                        const copyBtn = document.createElement("div")
                        copyBtn.className = "btn black textsecondary copyitemBtnKEK"
                        copyBtn.textContent = "Copy"
                        copyBtn.style.padding = "5px"
                        copyBtn.style.top = "300px"
                        copyBtn.style.position = "absolute"
                        slotsContainer.append(copyBtn)
                        slotsContainer.height = ""
                        const widthToCapture = (parseInt(slotDescription.style.width.split("px")[0]) + 22) + "px"
                        const heightToCapture = (parseInt(slotDescription.style.height.split("px")[0]) + 22) + "px"
                        // console.log("width to capture", widthToCapture)
                        copyElementToClipboard(copyBtn, slotsContainer, heightToCapture, widthToCapture)
                    }
                    return slotsContainer
                }
            }
 
            function generateCompareDescription(stat) {
                // Create the main container
                if(stat) {
                    const mainUI = document.querySelector(".layout")
                    let slotsContainer = document.querySelector('.slotsContainerKEK');
                    if(!slotsContainer) {
                        slotsContainer = document.createElement("div")
                        slotsContainer.classList.add("slotsContainerKEK")
                        slotsContainer.classList.add("l-ui")
                        slotsContainer.style.position = "absolute"
                        slotsContainer.style.display = 'flex';
                        slotsContainer.style.top = "130px"
                        slotsContainer.style.left = "120px"
                        mainUI.appendChild(slotsContainer)
                    }
                    const slotContainer = document.createElement('div');
                    slotContainer.className = 'slot';
                    slotContainer.style.width = "230px"
                    slotContainer.style.height = "290px"
                    // Create the wrapper
                    const wrapper = document.createElement('div');
                    wrapper.className = 'wrapper';
                    slotContainer.appendChild(wrapper);
 
                    // Create the new_script_internal div
                    const newScriptInternal = document.createElement('div');
                    newScriptInternal.className = 'new_script_internal';
                    wrapper.appendChild(newScriptInternal);
 
                    // Create the slotdescription div
                    const slotDescription = document.createElement('div');
                    slotDescription.className = 'slotdescription svelte-18ojcpo border ' + getTextColor(stat.quality);
                    slotDescription.style.width = "210px"
                    slotDescription.style.opacity = "1"
                    slotDescription.style.transition = 'opacity 1s ease-out';
                    slotDescription.style.height = "270px"
                    newScriptInternal.appendChild(slotDescription);
 
                    // Create and set the content for various elements
                    const container = document.createElement('div');
                    container.className = 'container svelte-e3ao5j';
                    container.style.padding = "10px 10px 0px 10px"
                    slotDescription.appendChild(container);
 
                    const pack1 = document.createElement('div');
                    pack1.className = 'pack svelte-e3ao5j';
                    container.appendChild(pack1);
 
                    const slottitle = document.createElement('div');
                    slottitle.className = 'slottitle svelte-e3ao5j ' + "text" + getTextColor(stat.quality);
                    slottitle.textContent = "Stat Compare"
 
                    pack1.appendChild(slottitle);
 
                    const type = document.createElement('div');
                    type.className = 'type svelte-e3ao5j ' + "textwhite";
                    type.textContent = stat.type;
 
                    pack1.appendChild(type);
 
                    const pack2 = document.createElement('div');
                    pack2.className = 'pack svelte-e3ao5j';
                    container.appendChild(pack2);
 
                    const statTexts = {"positive": [], "negative": []}
                    const ignoreStatList = ["quality", "type", "Strength", "Stamina", "Dexterity", "Intelligence", "Wisdom", "Luck"]
                    for(let statName in stat) {
                        if(ignoreStatList.includes(statName)) {
                            continue;
                        }
                        let statVal = stat[statName]
                        statVal = statVal.toFixed(2)
                        const statText = document.createElement('div');
                        statText.className = 'svelte-e3ao5j '
 
                        if(statVal > 0) {
                            statText.textContent = statVal + " " + statName
                            statText.className += "textgreen"
                            statText.textContent = "+ " + statText.textContent
                            statTexts["positive"].push(statText)
                        } else if(statVal < 0) {
                            statVal = statVal * (-1)
                            statText.textContent = statVal + " " + statName
                            statText.className += "textred"
                            statText.textContent = "- " + statText.textContent
                            statTexts["negative"].push(statText)
                        }
                    }
                    for(let statType in statTexts) {
                        let statTypeTexts = statTexts[statType]
                        for(let statTypeText of statTypeTexts) {
                            pack2.appendChild(statTypeText)
                        }
                    }
 
                    const pack3 = document.createElement('div');
                    pack3.className = 'pack svelte-e3ao5j';
                    container.appendChild(pack3);
 
                    slotsContainer.appendChild(slotContainer)
                    slotDescription.style.pointerEvents = 'auto';
                    slotDescription.style.zIndex = "20"
                    return slotContainer
                }
            }
 
            function getClass(url) {
                const match = url.match(/\/classes\/(\d+)\.avif/);
                let _class = null;
                if (match) {
                    _class = match[1];
                    // console.log(_class); // Output: 3
                } else {
                    console.log("Class not found in the URL");
                }
                return _class;
            }
 
            function compareItems(item1, item2) {
                if(item1.type !== item2.type) {
                    return -1
                }
                const stats = {
                    "HP": 0,
                    "HP Reg./5s": 0,
                    "MP": 0,
                    "MP Reg./5s": 0,
                    "Defense": 0,
                    "Block": 0,
                    "Min Dmg": 0,
                    "Max Dmg": 0,
                    "Atk Spd": 0,
                    "Critical": 0,
                    "Haste": 0,
                    "Move Spd": 0,
                    "Bag Slots": 0,
                    "Item Find": 0,
                    "Gear Score": 0,
                    "Strength": 0,
                    "Stamina": 0,
                    "Dexterity": 0,
                    "Intelligence": 0,
                    "Wisdom": 0,
                    "Luck": 0,
                    "Move Spd": 0,
                    "quality": 110,
                    "type": item1.type
                }
                const statConversionTable = {
                    "Strength": { "HP": 2, "HP Reg./5s": 0.03 },
                    "Stamina": { "Defense": 1, "HP": 4 },
                    "Dexterity": { "Critical": 0.05 },
                    "Intelligence": { "MP": 0.8, "Critical": 0.04 },
                    "Wisdom": { "MP": 0.8, "Haste": 0.03 },
                    "Luck": { "Critical": 0.02, "Item Find": 0.5 }
                }
                const classStat = {
                    0: "Strength",
                    1: "Intelligence",
                    2: "Dexterity",
                    3: "Wisdom"
                }
                const bloodlineStatTable = {
                    0: { "Min Dmg": 0.3, "Max Dmg": 0.3, "HP Reg./5s": 0.3 },
                    1: { "Min Dmg": 0.4, "Max Dmg": 0.4 },
                    2: { "Min Dmg": 0.4, "Max Dmg": 0.4 },
                    3: { "Min Dmg": 0.4, "Max Dmg": 0.4 },
                }
                const ufplayer = document.querySelector("#ufplayer")
                const imgUrl = ufplayer.querySelector("img").src
                const playerClass = getClass(imgUrl)
                const bloodlineStat = classStat[playerClass]
                let bloodlineStatBonus = bloodlineStatTable[playerClass]
 
                for (let stat in bloodlineStatBonus) {
                    if (!statConversionTable[bloodlineStat][stat]) {
                        statConversionTable[bloodlineStat][stat] = bloodlineStatBonus[stat]
                    } else {
                        statConversionTable[bloodlineStat][stat] += bloodlineStatBonus[stat]
                    }
                }
                function makeStatsNegative(item) {
                    if(item.isNegative) {
                        return item
                    }
                    let itemStats = item["stats"]
                    for (let statName in itemStats) {
                        let statVal = itemStats[statName]["value"]
                        if (statName === "Haste" || statName === "Critical" || statName === "Item Find" || statName === "Block") {
                            statVal = Number(itemStats[statName]["value"].split("%")[0])
                            itemStats[statName]["value"] = statVal * (-1) + "%"
                        } else {
                            itemStats[statName]["value"] = statVal * (-1)
                        }
                    }
                    item["gs"] = item["gs"] * (-1)
                    item["isNegative"] = true
                    return item
                }
                item1 = makeStatsNegative(item1)
                // console.log(item1, item2)
                for (let item of [item1, item2]) {
                    let itemStats = item["stats"]
                    for (let statName in itemStats) {
                        let statVal = itemStats[statName]["value"]
                        if (statName === "Haste" || statName === "Critical" || statName === "Item Find" || statName === "Block") {
                            statVal = Number(itemStats[statName]["value"].split("%")[0])
                        }
                        if (!stats[statName]) {
                            stats[statName] = statVal
                        } else {
                            stats[statName] += statVal
                        }
                    }
                    stats["Gear Score"] += item["gs"]
                }
 
                for (let statName in statConversionTable) {
                    const bonusStats = statConversionTable[statName]
                    for (let bonusStatName in bonusStats) {
                        stats[bonusStatName] += bonusStats[bonusStatName] * stats[statName]
                    }
                }
                // console.log(stats)
                generateItems([item1, item2])
                generateCompareDescription(stats)
            }
 
            // Function to get the locked items set from localStorage
            function getLockedItems() {
                const lockedItemsJSON = localStorage.getItem('lockedItemsKek');
                if (lockedItemsJSON) {
                    return new Set(JSON.parse(lockedItemsJSON));
                } else {
                    return new Set();
                }
            }
 
            // Function to set the locked items in localStorage
            function setLockedItems(lockedItemsSet) {
                const lockedItemsArray = Array.from(lockedItemsSet);
                const lockedItemsJSON = JSON.stringify(lockedItemsArray);
                localStorage.setItem('lockedItemsKek', lockedItemsJSON);
            }
 
            const lockedItems = getLockedItems()
 
            function requestFunc(event, id) {
                const isLocked = lockedItems.has(id)
                // console.log("running request func", isShiftPressed, lockedItems, isLocked)
 
                // console.log(isLocked, "locked")
                if (isShiftPressed && isLocked) {
                    // Find and remove the "Request" element
                    const requestElement = document.querySelector('.absCentered.svelte-1lvns9i');
                    // console.log(requestElement)
 
                    if (requestElement) {
                        const declineBtn = requestElement.querySelectorAll(".choice")[1]
                        declineBtn.click()
                    }
                }
            }
 
            function addLinkingToSlot(slot, id) {
                slot.addEventListener("contextmenu", function linkFunc() {
                    const menu = document.querySelector(".panel.context.border.grey")
                    // console.log(menu)
                    if(menu && !menu.classList.contains("kek-ui-menu")) {
                        menu.classList.add("kek-ui-menu")
                        const choices = menu.querySelectorAll(".choice")
                        const firstChoice = choices[0].textContent.toLowerCase().trim()
                        if(firstChoice == "equip item") {
                            const isLocked = lockedItems.has(id)
                            const linkMenu = document.createElement("div")
                            linkMenu.classList.add("choice")
                            linkMenu.textContent = "Link item"
                            if (isLocked) {
                                choices.forEach(choice => {
                                    const choiceText = choice.textContent.toLowerCase().trim();
                                    if (choiceText === "drop item" || choiceText === "sell item") {
                                        choice.remove();
                                    }
                                });
                            }
                            menu.appendChild(linkMenu)
                            linkMenu.addEventListener('click', () => {
                                slot.removeEventListener("contextmenu", linkFunc)
                                // console.log("clicking link")
                                if(menu) {
                                    menu.remove()
                                    // console.log("Link is working ")
                                    const chatInput = document.querySelector("#chatinput").querySelector("input")
                                    if(chatInput && id) {
                                        if(!chatInput.value) {
                                            chatInput.value += ">"
                                        }
                                        chatInput.value += id + " "
                                    }
                                }
                            })
 
 
                            // Add "Lock item" or "Unlock item" choice based on the item's lock status
                            const lockUnlockMenu = document.createElement("div");
                            lockUnlockMenu.classList.add("choice");
                            lockUnlockMenu.textContent = isLocked ? "Unlock Item" : "Lock Item";
                            menu.appendChild(lockUnlockMenu);
 
                            lockUnlockMenu.addEventListener('click', () => {
                                // Toggle lock status of the item
                                if (isLocked) {
                                    lockedItems.delete(id);
                                    console.log(lockedItems)
                                } else {
                                    lockedItems.add(id);
                                    console.log(lockedItems)
 
                                }
 
                                // Save the updated lockedItems set
                                setLockedItems(lockedItems);
                                // Close the context menu
                                menu.style.display = "none";
                            });
 
 
                        }
                    }
                })
                // Conditional event listener for "shift + right click"
 
                if(!slot.classList.contains("lockingKEK")) {
                    // console.log("adding lock event listener")
                    slot.classList.add("lockingKEK")
 
                    slot.addEventListener("contextmenu", function(e) {
                        requestFunc(e, id)
                    });
                }
            }
 
            var currentItemID = null;
 
            function handleItemFunctions(node) {
                if(node.classList.contains("modifiedBagKEK")) return;
                // console.log("handling item functions", node)
 
                node.classList.add("modifiedBagKEK")
                if(node instanceof HTMLElement && node.classList.contains("svelte-1axz35n") && node.classList.contains("slotcontainer")) {
                    const bagSlots = node.children
                    for(let bagSlot of bagSlots) {
                        const observerSlot = new MutationObserver(function (mutationsList, observerBag) {
                            for (const mutation of mutationsList) {
                                if (mutation.type === 'childList') {
                                    // A child node has been added
                                    for (const childNode of mutation.addedNodes) {
                                        // console.log(childNode)
                                        if (childNode instanceof HTMLElement && childNode.classList.contains('slotdescription')) {
                                            const itemEles = node.querySelectorAll(".slotdescription")
                                            const itemEle = itemEles[itemEles.length - 1]
                                            // console.log(itemEle.outerHTML)
                                            // console.log(getItemUI(itemEle))
                                            // console.log(isBis(getItemUI(itemEle)))
                                            // Use a regular expression to extract the number after "ID:"
                                            const text = itemEle.textContent
                                            const match = text.match(/ID: (\d+)/);
 
                                            // Check if there is a match and get the captured number
                                            currentItemID = match ? match[1] : null;
                                            // console.log(currentItemID)
                                            addLinkingToSlot(itemEle.closest(".slot"), currentItemID)
                                        }
                                    }
                                }
                            }
                        })
                        const observerConfig = { childList: true };
 
                        // Start observing the target node for mutations
                        observerSlot.observe(bagSlot, observerConfig);
                    }
                }
            }
 
            function handleItemDOMManipulation() {
                // Select the target node
                const itemSlotContainer = document.querySelector(".svelte-1axz35n.slotcontainer")
                if(itemSlotContainer) {
                    handleItemFunctions(itemSlotContainer)
                }
                const targetNode = document.querySelector("body");
                if(targetNode) {
                    // Create a MutationObserver instance
                    const observerDOM = new MutationObserver(function (mutationsList, observerDOM) {
                        for (const mutation of mutationsList) {
                            if (mutation.type === 'childList') {
                                // A child node has been added
                                for (const node of mutation.addedNodes) {
                                    if(node.className === "l-ui") {
                                        setTimeout(runAll, 200)
                                        const itemSlotContainer = document.querySelector(".svelte-1axz35n.slotcontainer")
                                        if(itemSlotContainer) {
                                            handleItemFunctions(itemSlotContainer)
                                        }
                                    }
                                    // console.log(node)
                                }
                            }
                        }
                    });
 
                    // Configure the observer to watch for changes in child nodes
                    const observerConfig = { childList: true};
 
                    // Start observing the target node for mutations
                    observerDOM.observe(targetNode, observerConfig);
                } else {
                    console.error("couldnt find body trying again")
                    setTimeout(handleItemDOMManipulation, 1)
                }
            }
 
            function handleBagMenu() {
                const bagMenuParent = document.querySelector(`.${svelteObj.bag}`)
                if(bagMenuParent) {
                    // it is bag
                    const mainSlot = bagMenuParent.querySelector(".slot")
                    const slotContainer = mainSlot.querySelector(".slotcontainer")
 
                    const btnContainer = document.createElement("div")
                    btnContainer.classList.add("bagBtnContainerKEK")
                    btnContainer.style.display = "flex"
                    btnContainer.style.flexDirection = "row"
 
                    const bisBtn = document.createElement("div")
                    bisBtn.classList.add("btn", "black", "textsecondary")
                    bisBtn.textContent = "Show Bis"
 
                    bisBtn.addEventListener("click", () => {
                        const slots = slotContainer.children
                        if(!slots) return
                        if(bisBtn.textContent.toLowerCase() == "show bis") {
                            bisBtn.textContent = "Hide Bis"
 
                            for(let slot of slots) {
                                slot.dispatchEvent(new PointerEvent("pointerenter"))
                                setTimeout(() => {
                                    const isbis = isBis(getItemUI(slot))
                                    if(isbis) {
                                        slot.classList.add("red")
                                    }
                                    slot.dispatchEvent(new PointerEvent("pointerleave"))
                                }, 50)
                            }
                        } else {
                            bisBtn.textContent = "Show Bis"
                            for(let slot of slots) {
                                slot.classList.remove("red")
                            }
                        }
 
                    })
 
                    const rulesBtn = document.createElement("div")
                    rulesBtn.classList.add("btn", "black", "textsecondary")
                    rulesBtn.textContent = "Rules"
 
                    rulesBtn.style.flex = 1
                    bisBtn.style.flex = 1
                    bisBtn.style.textAlign = "center"
                    rulesBtn.style.textAlign = "center"
 
                    rulesBtn.addEventListener("click", () => {
                        const existing = document.querySelector(".rulesContainerKEK")
                        if(existing) {
                            existing.remove()
                            return
                        }
                        let ruleCounter = 4; // Start with all four dropdowns
 
                        function createRuleDropdown(options) {
                            const ruleDropdown = document.createElement('div');
                            ruleDropdown.classList.add('ruleDropdownKEK');
 
                            const select = document.createElement('select');
                            select.classList.add("rulesSelectKEK");
                            select.classList.add("black", "textsecondary");
                            select.style.width = "110px";
                            select.style.padding = "7px"
                            select.style.background = "black"
                            select.style.border = "1px solid black"
                            // Create an initial placeholder option
                            const placeholderOption = document.createElement('option');
                            placeholderOption.value = "";
                            placeholderOption.textContent = "Stat";
                            placeholderOption.disabled = true
                            placeholderOption.selected = true
                            select.appendChild(placeholderOption);
 
                            // Populate options based on the provided array
                            options.forEach(option => {
                                const optionElement = document.createElement('option');
                                optionElement.classList.add("btn", "black", "textsecondary");
                                optionElement.value = option;
                                optionElement.textContent = option;
                                select.appendChild(optionElement);
                            });
 
 
                            // Add change event listener to disable selected option in other dropdowns
                            select.addEventListener('change', () => {
                                disableSelectedOption(select);
                            });
 
                            ruleDropdown.appendChild(select);
 
                            return ruleDropdown;
                        }
 
                        function disableSelectedOption(selectedDropdown) {
                            const allDropdowns = document.querySelectorAll('.rulesSelectKEK');
                            const selectedValues = Array.from(allDropdowns).map(dropdown => dropdown.value);
 
                            // Iterate through all dropdowns
                            allDropdowns.forEach(currentDropdown => {
                                // Iterate through the options in the current dropdown (exclude placeholder)
                                for (let i = 1; i < currentDropdown.options.length; i++) {
                                    const option = currentDropdown.options[i];
 
                                    // Enable the option if it's not in the selectedValues array, disable otherwise
                                    option.disabled = selectedValues.includes(option.value);
                                }
                            });
                        }
 
                        function updateRuleListContainer() {
                            const ruleListContainer = document.querySelector('.ruleListContainerKEK');
                            // console.log(ruleListContainer)
                            if(!ruleListContainer) return;
 
                            const rules = getRules()
                            // Clear the existing content
                            ruleListContainer.innerHTML = "";
 
                            // Iterate through each rule and create a flex container for it
                            rules.forEach((rule, index) => {
                                const ruleContainer = document.createElement('div');
                                ruleContainer.classList.add('ruleFlexContainerKEK');
                                ruleContainer.style.display = "flex"
                                ruleContainer.style.flexDirection = "row"
 
                                // Add each stat as a separate div
                                rule.forEach(stat => {
                                    const statDiv = document.createElement('div');
                                    statDiv.textContent = stat;
                                    statDiv.style.flex = 1
                                    statDiv.classList.add('ruleStatItemKEK', "btn", "black", "textsecondary", "border");
                                    statDiv.style.borderRadius = "0"
                                    ruleContainer.appendChild(statDiv);
                                });
 
                                // Add delete button
                                const deleteBtn = document.createElement('div');
                                deleteBtn.textContent = '🗑';
                                deleteBtn.classList.add('btn', 'black', 'textsecondary', 'border');
                                deleteBtn.style.borderRadius = "0";
                                deleteBtn.addEventListener('click', () => {
                                    deleteRule(rule);
                                    updateRuleListContainer(); // Refresh the rule list after deletion
                                });
                                ruleContainer.appendChild(deleteBtn);
 
                                // Add the rule container to the rule list container
                                ruleListContainer.appendChild(ruleContainer);
                            });
                        }
 
                        const rulesContainer = document.createElement('div');
                        rulesContainer.classList.add("rulesContainerKEK")
                        rulesContainer.style.position = "absolute";
 
                        // Create a container for rule dropdowns
                        const rulesDropdownContainer = document.createElement('div');
                        rulesDropdownContainer.classList.add("rulesDropDownContainerKEK");
                        rulesDropdownContainer.style.display = "flex";
                        rulesDropdownContainer.style.flexDirection = "row";
 
                        const rulesListContainer = document.createElement('div');
                        rulesListContainer.classList.add("ruleListContainerKEK")
 
                        const allStats = ['Bloodline', 'Stamina', "Defense", "Critical", "Haste", "Max Dmg.", "Min Dmg.", "Block", "Strength"]
                        // Create all four rule dropdowns with initial options
                        for (let i = 0; i < ruleCounter; i++) {
                            const ruleDropdown = createRuleDropdown(allStats);
                            rulesDropdownContainer.appendChild(ruleDropdown);
                        }
 
                        const plusBtn = document.createElement("div")
                        plusBtn.textContent = "Add"
                        plusBtn.style.padding = "5px"
                        plusBtn.classList.add("btn", "black", "textsecondary")
 
                        plusBtn.addEventListener("click", (e) => {
                            e.stopPropagation();
 
                            const selectedValues = Array.from(document.querySelectorAll('.rulesSelectKEK')).map(dropdown => dropdown.value);
 
                            const newRule = selectedValues.filter(value => value !== ""); // Remove empty values
 
                            if(newRule.length == 0) return
 
                            // Add the new rule to localStorage and update the displayed rules
                            const rules = getRules();
                            rules.push(newRule);
                            saveRules(rules);
                            updateRuleListContainer();
 
                            // Reset selected values to placeholder option
                            document.querySelectorAll('.rulesSelectKEK').forEach(select => {
                                select.value = "";
                                const options = select.children
                                for(let option of options) {
                                    option.disabled = false
                                }
                            });
                        });
                        rulesDropdownContainer.appendChild(plusBtn)
 
                        rulesContainer.appendChild(rulesDropdownContainer);
                        rulesContainer.appendChild(rulesListContainer)
 
                        // Append rulesContainer after the slotContainer's width is over
                        const slotContainerRect = slotContainer.getBoundingClientRect();
                        const rulesContainerLeft = slotContainerRect.width;
 
                        rulesContainer.style.left = `${rulesContainerLeft + 20}px`;
 
                        mainSlot.insertBefore(rulesContainer, mainSlot.firstChild);
 
                        updateRuleListContainer()
                    });
 
                    btnContainer.appendChild(bisBtn)
                    btnContainer.appendChild(rulesBtn)
 
 
                    mainSlot.insertBefore(btnContainer, slotContainer)
                } else {
                    setTimeout(handleBagMenu, 1)
                }
            }
 
            function runAll() {
                modifyChat()
                handleBagMenu()
                handleStats()
            }
 
            modifyChat()
            handleItemDOMManipulation()
            handleStats()
            handleBagMenu()
 
            document.addEventListener('click', (event) => {
                const slotsContainer = document.querySelector(".slotsContainerKEK")
 
                if(event.target.classList.contains("textwhite") || event.target.classList.contains("copyitemBtnKEK")) {
                    // console.log("clicking item id")
                } else {
                    if(slotsContainer) {
                        slotsContainer.remove()
                    }
                }
            })
        } else {
            setTimeout(init, 1)
        }
    }
 
    init()
})();


(function() {
    'use strict';
    let playerNameKEK
    let charSheetOpened = false
 
    function init() {
        const ufplayer = document.querySelector("#ufplayer")
        const syscharElement = document.getElementById('syschar');
 
        if(ufplayer && syscharElement) {
            // Fetch the syschar element and click on it
 
            const playerName = ufplayer.querySelector(".left").textContent
            playerNameKEK = playerName
            const classImgSrc = ufplayer.querySelector("img").src
            const playerClassKEK = getClass(classImgSrc)
            if (playerNameKEK.endsWith('...')) {
                // Your code when playerNameKEK ends with three dots
                if(!charSheetOpened) {
                    syscharElement.click();
                    charSheetOpened = true
                }
                // console.log('Player name ends with three dots');
                getPlayerName()
            } else {
                // Your code when playerNameKEK does not end with three dots
                // console.log('Player name does not end with three dots');
            }
            function getPlayerName() {
                // Query for the element with class statcol
                const statcolElement = document.querySelector('.statcol');
 
                if (statcolElement) {
                    // Select the second span in statcol
                    const secondSpan = statcolElement.querySelector('span:nth-child(2)');
 
                    if (secondSpan) {
                        // Get the text content of the second span
                        playerNameKEK = secondSpan.textContent.trim();
                        console.log('Player Name:', playerNameKEK);
                        syscharElement.click();
                    } else {
                        setTimeout(getPlayerName, 1)
                    }
                }
            }
 
            function getClass(url) {
                const match = url.match(/\/classes\/(\d+)\.avif/);
                let _class = null;
                if (match) {
                    _class = match[1];
                    // console.log(_class); // Output: 3
                } else {
                    console.log(url)
                    console.log("Class not found in the URL");
                }
                return _class;
            }
 
            console.log(playerNameKEK, playerClassKEK)
            if(!playerNameKEK.endsWith("...")) {
                const friendListUrl = "https://hordes-friends-api.vercel.app"
 
                let friendList;
                let isFetchingFriends = true
                fetchFriendData()
                    .then(data => {
                    friendList = data.data;
                    const btn = document.querySelector(".refreshBtnFriendList");
                    console.log(friendList)
                    updateFriendList(friendList)
                    if (btn) {
                        btn.classList.remove("disabled", "grey");
                        btn.classList.add("black");
                        btn.textContent = "Refresh";
                    }
 
                    isFetchingFriends = false;
                })
                    .catch(err => {
                    console.log(err);
                    const btn = document.querySelector(".refreshBtnFriendList");
 
                    if (btn) {
                        btn.classList.remove("disabled", "grey");
                        btn.classList.add("black");
                        btn.textContent = "Refresh";
                    }
 
                    isFetchingFriends = false;
                });
                // Update status to 0 when the page is about to be unloaded
                window.addEventListener('beforeunload', function() {
                    // Replace 'player123' with the actual player name
                    updatePlayerStatus(playerNameKEK, 0)
                        .then(result => {
                        // Do something with the result if needed
                    })
                        .catch(error => {
                        // Handle errors
                    });
                });
                var scaleBtnWidth = 25
                var horizontalBtnWidth = 25
                var barHeight = 45
                var barWidth = 190
                var slotHeight = 35
                var slotWidth = 35
                var isMouseOverActive = true
                var scaleBtnHeight = 25
                var ufplayerLeft = -400
                var ufplayerTop = -400
                var uftargetLeft = 190
                var uftargetTop = -400
                var chatLeft = 40
                var chatTop = 600
                var bagTop = 160
                var bagLeft = 720
                var partyframeLeft = 0
                var partyframeTop = 10
                var skillbarLeft = -380
                var skillbarTop = -100
                var partyMemberHeight = 65
                var partyMemberWidth = 200
                var buffSize = 19
                var horizontalStackActive = false
                var isUIModeActive = false
                var skillsPerRow = 18
                var playerPerRow = 5
                var inputFieldSize = 40
                var inputFieldTop = 25
                var targetBuffSize = 25
                var showExpBar = true
                var delayAfterChange = 100
 
                let currentSenderName = ""
 
                const svelteObj = {
                    skillsMenu: "svelte-urqsjg",
                    statsMenu: "svelte-ggsnc",
                    chat: "svelte-16y0b84"
                }
 
                const emoteDictionary = {
                    ':cake': '🎂',
                    ':smile': '😊',
                    // Add more emotes as needed
                };
                // Function to save the object to localStorage
                // Define the gradient styles
                const gradientNames = [
                    'kek-bgc0',
                    'kek-bgc1',
                    'kek-bgc2',
                    'kek-bgc3',
                    'kek-bgc5',
                    'kek-bgc4'
                ]
 
                // Function to save key binds in local storage
                function saveKeyBinds(keyBinds) {
                    localStorage.setItem('keyBindsKEK', JSON.stringify(keyBinds));
                }
 
                // Function to get key binds from local storage or use default keyBindsKEK
                function getKeyBinds() {
                    const storedKeyBinds = localStorage.getItem('keyBindsKEK');
                    return storedKeyBinds ? JSON.parse(storedKeyBinds) : keyBindsKEK;
                }
 
                // Initial key binds
                let keyBindsKEK = {
                    "Main Menu": "u",
                    "Emoji": "",
                    "Rune Tracker": "j",
                    "Blocked Players": "",
                    "Gloom Timer": "n"
                };
 
                keyBindsKEK = getKeyBinds()
 
                const gradientStyles = `
        .kek-bgc0 {
            background: linear-gradient(0deg, #5a3816 0%, #70563c 50%, #8B6D4D 100%);
        }
 
        .kek-bgc1 {
            background: linear-gradient(0deg, #11698d 0%, #0992cc 49%, #159cd4 100%);
        }
 
        .kek-bgc2 {
            background: linear-gradient(0deg, #76b935 0%, #76c134 50%, #79c232 100%);
        }
 
        .kek-bgc3 {
            background: linear-gradient(0deg, #20367f 0%, #2644a7 50%, #3859c7 100%);
        }
 
        .kek-bgc5 {
            background: linear-gradient(0deg, #9f0707 0%, #c62527 49%, #F42929 100%);
        }
 
        .kek-bgc4{
            background: linear-gradient(0deg, #2ba71e 0%, #0fce00 49%, #20b611 100%);
        }
        .partyframes .grid:not(button):not(input) {
        padding-bottom: 20px;
        }
    `;
                const partyColorsKEK = {
                    "kek-bgc0": {
                        top: ["#5a3816", 0],
                        middle: ["#70563c", 50],
                        bottom: ["#8B6D4D", 100]
                    },
                    "kek-bgc1": {
                        top: ["#11698d", 0],
                        middle: ["#0992cc", 49],
                        bottom: ["#159cd4", 100]
                    },
                    "kek-bgc2": {
                        top: ["#76b935", 0],
                        middle: ["#76c134", 50],
                        bottom: ["#79c232", 100]
                    },
                    "kek-bgc3": {
                        top: ["#20367f", 0],
                        middle: ["#2644a7", 50],
                        bottom: ["#3859c7", 100]
                    },
                    "kek-bgc4": {
                        top: ["#2ba71e", 0],
                        middle: ["#0fce00", 49],
                        bottom: ["#20b611", 100]
                    },
                    "kek-bgc5": {
                        top: ["#9f0707", 0],
                        middle: ["#c62527", 49],
                        bottom: ["#F42929", 100]
                    }
                };
                // Inject the styles into the page
                // Create a style element and append it to the head
                  var styleElement = document.createElement('style');
                  styleElement.type = 'text/css';
                  styleElement.appendChild(document.createTextNode(gradientStyles));
                  document.head.appendChild(styleElement);

                function saveProps(props) {
                    try {
                        // Retrieve existing saved props
                        const savedKekPropsString = localStorage.getItem('savedKekProps');
                        const savedKekProps = JSON.parse(savedKekPropsString) || {};
 
                        // If savedProps is not available, try to retrieve it from localStorage
                        const savedPropsString = localStorage.getItem('savedProps');
                        const defaultProps = JSON.parse(savedPropsString) || {};
 
                        // Update or add props for the specific player, defaulting to savedProps if props is not provided
                        savedKekProps[playerName.toLowerCase()] = props || defaultProps;
 
                        // Save the updated object to localStorage
                        localStorage.setItem('savedKekProps', JSON.stringify(savedKekProps));
                        // console.log(savedKekProps)
 
                        // console.log(`Props for ${playerName} saved to localStorage successfully.`);
                    } catch (error) {
                        console.error('Error saving props to localStorage:', error);
                    }
                }
 
                function getProps() {
                    try {
                        // Retrieve saved props for the specific player from the new structure
                        const savedKekPropsString = localStorage.getItem('savedKekProps');
                        const savedKekProps = JSON.parse(savedKekPropsString) || {};
                        // console.log(savedKekProps)
                        // Check if there are saved props for the specified player in the new structure
                        const propsFromNewStructure = savedKekProps[playerName.toLowerCase()];
 
                        if (propsFromNewStructure) {
                            // If found, return the props from the new structure
                            return propsFromNewStructure;
                        } else {
                            // If not found in the new structure, check for savedProps from the old structure
                            const savedPropsString = localStorage.getItem('savedProps');
                            const propsFromOldStructure = JSON.parse(savedPropsString) || {};
 
                            // Return the props from the old structure if available
                            return propsFromOldStructure;
                        }
                    } catch (error) {
                        console.error('Error retrieving props from localStorage:', error);
                        return null;
                    }
                }
 
                function clearSavedProps() {
                    for(let key in props) {
                        if(key == "emoji") {
                            continue
                        } else {
                            delete props[key]
                        }
                    }
                    saveProps(props)
                }
 
                var props = getProps()
                if(JSON.stringify(props) == "{}") {
                    props = {"emoji":{":cake":":birthday:",":smile":":blush:",":fire":":fire:"},"#chat":{"left":8,"top":486,"blackChat":"0","fontSize":"15","height":"200"},"UIMode":false,".partyframes":{"left":3,"top":51,"playerPerRow":1,"buffSize":15,"buffTextSize":15,"width":148,"height":36},"#skillbar":{"left":-364,"top":-81},"skillsPerRow":18,"#ufplayer":{"left":-258,"top":-150,"buffSize":25,"buffTextSize":17},"#uftarget":{"left":4,"top":-150},".grid.left.svelte-g292qg":{"width":148,"height":36},".partyframes .bar":{"width":148,"height":36},"horizontalStackActive":false,".bagMenu":{"left":1050,"top":179},".guildMenu":{"left":717,"top":406},".statsMenu":{"left":187,"top":35},".skillsMenu":{"left":369,"top":45},".prestigeMenu":{"left":221,"top":-9},".kek-ui-menu":{"left":630,"top":146},"Show EXP":false,".emojiMenuKEK":{"left":92,"top":48},"Disable Class Colors":false,"blockedPlayers":[],"undefined":{"left":1311,"top":353},".keybinds":{"left":313,"top":180},"Mouse Over":false,"UILock":true,".runeTrackerKEK":{"left":199,"top":51},".gloomTimer":{"left":155,"top":107},".":{"width":139,"height":67},"#ufplayer .bar":{"width":195,"height":40},"#uftarget .bar":{"width":195,"height":40},".progressBar.bghealth.svelte-i7i7g5.kek-bgc3":{"width":195,"height":40},".progressBar.bghealth.hpdelta.svelte-g292qg":{"width":195,"height":40}}
                    console.log("Defaulting UI")
                    saveProps(props)
                }
                if(props["Show EXP"] !== null) {
                    showExpBar = props["Show EXP"]
                }
                if(props["horizontalStackActive"] !== null) {
                    horizontalStackActive = props["horizontalStackActive"]
                }
                if(props["UIMode"] !== null) {
                    isUIModeActive = props["UIMode"]
                }
                if(props["skillsPerRow"] !== null) {
                    skillsPerRow = props["skillsPerRow"]
                }
                if(props["playerPerRow"] !== null) {
                    playerPerRow = props["playerPerRow"]
                }
                // console.log(props)
                // Function to change position wrt middle of screen
                function changeElementPosition(element, left, top) {
                    const screenWidth = window.innerWidth;
                    const screenHeight = window.innerHeight;
 
                    // Calculate the position to center the element
                    const leftPosition = (screenWidth - element.offsetWidth) / 2 + left
                    const topPosition = (screenHeight - element.offsetHeight) / 2 + top
 
                    // Set the element's position
                    element.style.left = leftPosition + 'px';
                    element.style.top = topPosition + 'px';
                }
 
                function colorizePartyframes(partyframes) {
                    if(partyframes && !props["Disable Class Colors"]) {
                        const grids = partyframes.querySelectorAll(".grid:not(button):not(input)")
                        for(let grid of grids) {
                            colorizeGrid(grid)
                        }
                    }
                }
 
                function colorizeGrid(grid) {
                    if(grid && !props["Disable Class Colors"]) {
                        const iconContainer = grid.querySelector(".iconcontainer")
                        if(iconContainer) {
                            const img = iconContainer.querySelector("img")
                            if(img) {
                                const classIdx = getClass(img.src)
                                // console.log(classIdx, grid.querySelector(".left").textContent, img.src)
                                const hpBar = grid.querySelector(".progressBar")
                                if(hpBar) {
                                    gradientNames.forEach(className => {
                                        hpBar.classList.remove(className);
                                    });
                                    hpBar.classList.add(`kek-bgc${classIdx}`)
                                    iconContainer.style.display = "none"
                                }
                            }
                        }
                    }
                }
 
                function handlePartyframesMutations() {
                    const partyframesContainer = document.querySelector(".partyframes")
                    if(partyframesContainer && !partyframesContainer.classList.contains("mutationObserving")) {
                        function handleMutation(mutationsList, observer) {
                            for (const mutation of mutationsList) {
                                if (mutation.type === 'childList') {
                                    // A child has been added or removed, perform actions here
                                    mutation.addedNodes.forEach(node => {
                                        if(node instanceof HTMLElement) {
                                            if(node.classList.contains("grid")) {
                                                const partyframes = document.querySelector(".partyframes")
                                                if(partyframes) {
                                                    colorizeGrid(node)
                                                    let height = partyMemberHeight
                                                    let width = partyMemberWidth
                                                    if(props[".partyframes"] && props[".partyframes"].height) {
                                                        height = props[".partyframes"].height
                                                        width = props[".partyframes"].width
                                                    }
                                                    node.style.height = height + "px"
                                                    node.style.width = width + "px"
                                                    const bar = node.querySelector(".bar")
                                                    if(bar) {
                                                        bar.style.width = width + "px"
                                                        bar.style.height = height + "px"
                                                    }
                                                    if(props["playerPerRow"]) {
                                                        playerPerRow = props[".partyframes"]["playerPerRow"] || 5
                                                    }
                                                    if(partyframes.classList.contains("gridified")) {
                                                        gridify(partyframes, playerPerRow)
                                                        repositionBuffarray(partyframes, "row")
                                                    } else {
                                                        gridify(partyframes, playerPerRow)
                                                        repositionBuffarray(partyframes, "column")
                                                    }
                                                }
                                                const rightSpan = node.querySelector("span.right")
                                                // Check if right span is found
                                                if (rightSpan) {
                                                    // console.log("Observing", rightSpan.closest(".left").textContent)
                                                    // Create a MutationObserver to watch for changes in the right span's character data
                                                    let prevText = rightSpan.textContent
                                                    const rightSpanObserver = new MutationObserver(() => {
                                                        if(prevText.trim().toLowerCase() == "offline" || prevText.trim().toLowerCase() == "dead") {
                                                            console.log("Character data of right span changed:", rightSpan.textContent);
                                                            const grid = rightSpan.closest(".grid")
                                                            colorizeGrid(grid)
                                                        }
                                                        prevText = rightSpan.textContent
                                                        // Perform your actions when character data changes
                                                    });
 
                                                    rightSpanObserver.observe(rightSpan, {characterData: true, attributes: false, childList: false, subtree: true});
                                                    rightSpan.classList.add("mutationObserving")
                                                    //                                         // Cleanup observer after handling the mutation
                                                    //                                         setTimeout(() => rightSpanObserver.disconnect(), 100);
                                                }
                                            } if(node.classList.contains("progressBar")) {
 
                                            }
                                        }
                                    });
                                    mutation.removedNodes.forEach(node => {
                                        // Handle removed nodes if needed
                                        if(props[".partyframes"]) {
                                            playerPerRow = props[".partyframes"]["playerPerRow"] || 5
                                        }
                                        const partyframes = document.querySelector(".partyframes")
                                        if(partyframes.classList.contains("gridified")) {
                                            gridify(partyframes, playerPerRow)
                                            repositionBuffarray(partyframes, "row")
                                        } else {
                                            gridify(partyframes, playerPerRow)
                                        }
                                    });
                                }
                            }
                        }
                        // Create a MutationObserver to watch for changes in the DOM
                        const partyFrameObserver = new MutationObserver(handleMutation);
 
                        partyFrameObserver.observe(partyframesContainer, { childList: true });
                        partyframesContainer.classList.add("mutationObserving")
                    } else {
                        setTimeout(handlePartyframesMutations, 100)
                    }
                }
 
 
                function getPrestige(prestige, bracket) {
                    const prestigeBracket = [
                        0, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000, 11000, 12000,
                        13000, 14000
                    ]
                    prestige = 0.8 * prestige + prestigeBracket[bracket]
 
                    return prestige
 
                }
 
 
                function handleSkills() {
                    const skillsMenu = document.querySelector(`.l-upperLeftModal.${svelteObj.skillsMenu}`)
                    if(skillsMenu) {
                        addPresetsUI(skillsMenu)
                        if(props[".skillsMenu"] && props[".skillsMenu"].left) {
                            skillsMenu.style.left = props[".skillsMenu"].left + "px"
                            skillsMenu.style.top = props[".skillsMenu"].top + "px"
                        }
                        skillsMenu.classList.add("skillsMenu")
                        makeElementDraggable2(skillsMenu, ".skillsMenu");
                    }
                }
 
                function handleStats() {
                    const statsMenu = document.querySelector(`.l-upperLeftModal.${svelteObj.statsMenu}`)
                    if(statsMenu) {
                        if(props[".statsMenu"] && props[".statsMenu"].left) {
                            statsMenu.style.left = props[".statsMenu"].left + "px"
                            statsMenu.style.top = props[".statsMenu"].top + "px"
                        }
                        statsMenu.classList.add("statsMenu")
                        makeElementDraggable2(statsMenu, ".statsMenu");
                    }
                }
 
                function handleDOMMutations() {
                    // console.log(mainContainer)
                    function handleMainContainerMutations() {
                        const mainContainer = document.querySelector(".layout .container")
                        if(mainContainer.classList.contains("mutationObserving")) return;
 
                        const observerMain = new MutationObserver(function (mutationsList, observerDOM) {
                            for (const mutation of mutationsList) {
                                if (mutation.type === 'childList') {
                                    // A child node has been added
                                    for (const node of mutation.addedNodes) {
 
                                        // console.log("it is skills")
                                        if (node.classList.contains('l-upperLeftModal') && node.classList.contains('svelte-urqsjg')) {
                                            // console.log(node)
                                            addPresetsUI(node);
                                        }
 
                                        // it is stats
                                        if(node.classList.contains("l-upperLeftModal") && node.classList.contains("svelte-ggsnc")) {
                                            changeElementPosition(node, -350, -50)
                                            if(props[".statsMenu"] && props[".statsMenu"].left) {
                                                node.style.left = props[".statsMenu"].left + "px"
                                                node.style.top = props[".statsMenu"].top + "px"
                                            }
                                            node.classList.add("statsMenu")
                                            makeElementDraggable2(node, ".statsMenu");
                                        }
 
                                        // it is skills
                                        if(node.classList.contains("l-upperLeftModal") && node.classList.contains("svelte-urqsjg")) {
                                            changeElementPosition(node, -350, -50)
 
                                            if(props[".skillsMenu"] && props[".skillsMenu"].left) {
                                                node.style.left = props[".skillsMenu"].left + "px"
                                                node.style.top = props[".skillsMenu"].top + "px"
                                            }
                                            node.classList.add("skillsMenu")
                                            makeElementDraggable2(node, ".skillsMenu");
 
                                        }
 
                                        // it is guild
                                        if(node.classList.contains("absCentered") && node.classList.contains("svelte-1bfqv1s")) {
                                            changeElementPosition(node, 0, 0)
                                            if(props[".guildMenu"] && props[".guildMenu"].left) {
                                                node.style.left = props[".guildMenu"].left + "px"
                                                node.style.top = props[".guildMenu"].top + "px"
                                            }
                                            node.classList.add("guildMenu")
                                            makeElementDraggable2(node, ".guildMenu");
                                        }
 
                                        // it is bag
                                        if(node.classList.contains("l-corner-lr") && node.classList.contains("svelte-1axz35n")) {
                                            node.classList.add("bagMenu")
                                            changeElementPosition(node, 0, 0)
                                            if(props[".bagMenu"] && props[".bagMenu"].left) {
                                                node.style.left = props[".bagMenu"].left + "px"
                                                node.style.top = props[".bagMenu"].top + "px"
                                            }
                                            node.classList.remove("l-corner-lr")
                                            makeElementDraggable2(node, ".bagMenu");
                                        }
 
                                        //It is prestige menu
                                        if(node.classList.contains("l-upperLeftModal") && node.classList.contains("svelte-voya4q")) {
                                            changeElementPosition(node, -350, -50)
                                            if(props[".prestigeMenu"] && props[".prestigeMenu"].left) {
                                                node.style.left = props[".prestigeMenu"].left + "px"
                                                node.style.top = props[".prestigeMenu"].top + "px"
                                            }
                                            node.classList.add("prestigeMenu")
                                            makeElementDraggable2(node, ".prestigeMenu");
                                            const prestigeBtn = node.querySelector(".tab")
                                            prestigeBtn.click()
                                            setTimeout(function () {
                                                const allStatDivs = node.querySelectorAll(".stats.marg-top")
                                                const prestigeDiv = allStatDivs[0]
                                                if(prestigeDiv) {
                                                    let currentPrestige = prestigeDiv.querySelector(".statnumber").textContent.split(" ")[1]
                                                    currentPrestige = Math.round(parseInt(currentPrestige.split(",").join("")))
                                                    const speculatedSpan = document.createElement("span")
                                                    speculatedSpan.classList.add("textcyan")
                                                    speculatedSpan.textContent = "Speculated Prestige"
 
                                                    const valueSpan = document.createElement("span")
                                                    valueSpan.className = "textprestige statnumber"
                                                    const prestigeIcon = document.createElement("img")
                                                    prestigeIcon.className = "svgicon"
                                                    prestigeIcon.src = "/data/ui/currency/prestige.svg?v=8498194"
 
                                                    prestigeDiv.insertBefore(valueSpan, prestigeDiv.firstChild)
                                                    prestigeDiv.insertBefore(speculatedSpan, prestigeDiv.firstChild)
                                                    // console.log(prestigeDiv)
 
                                                    const thisWeekDiv = allStatDivs[2]
                                                    const thisWeekStats = thisWeekDiv.querySelectorAll(".statnumber")
                                                    const bracket = parseInt(thisWeekStats[thisWeekStats.length - 1].textContent.split(" ")[0])
                                                    const speculatedPrestige = Math.round(getPrestige(currentPrestige, bracket)).toLocaleString()
 
                                                    valueSpan.innerHTML = prestigeIcon.outerHTML + speculatedPrestige
                                                    // console.log(prestigeIcon, valueSpan)
 
                                                    // console.log(currentPrestige, bracket)
 
                                                } else {
 
                                                }
                                            }, 20)
                                        }
                                    }
                                }
                            }
                        })
 
                        const observerConfig = {childList: true};
                        // Start observing the target node for mutations
                        observerMain.observe(mainContainer, observerConfig);
                        mainContainer.classList.add("mutationObsrving")
                    }
 
                    handleMainContainerMutations()
 
                    function handleMutations(mutationsList, observer) {
                        for (const mutation of mutationsList) {
                            if (mutation.type === 'childList') {
                                // A child has been added, apply changes to new elements
                                mutation.addedNodes.forEach(node => {
                                    if (node instanceof HTMLElement) {
                                        // Check if the added element has the class 'panel-black'
                                        if(node.className === "l-ui") {
                                            setTimeout(runAll, delayAfterChange)
                                            handleMainContainerMutations()
                                        }
                                    }
                                });
                            }
                        }
                    }
 
                    // Create a MutationObserver to watch for changes in the DOM
                    const observer = new MutationObserver(handleMutations);
                    const body = document.querySelector("body")
                    // Start observing changes in the entire document
                    observer.observe(body, { childList: true });
                }
 
                function handleBagMenu() {
                    const bagMenuParent = document.querySelector(".l-corner-lr.svelte-1axz35n")
                    if(bagMenuParent) {
                        // it is bag
                        bagMenuParent.classList.add("bagMenu")
                        changeElementPosition(bagMenuParent, 0, 0)
                        if(props[".bagMenu"] && props[".bagMenu"].left) {
                            bagMenuParent.style.left = props[".bagMenu"].left + "px"
                            bagMenuParent.style.top = props[".bagMenu"].top + "px"
                        }
                        makeElementDraggable2(bagMenuParent, ".bagMenu");
                        bagMenuParent.classList.remove("l-corner-lr")
                    }
                }
 
                function gridify(partyframes, childrenPerRow, gridSpace) {
                    if(!gridSpace) {
                        gridSpace = 15
                    }
                    if(props[".partyframes"]) {
                        gridSpace = props[".partyframes"]["gridSpace"] || gridSpace
                    }
                    let childElements = null
                    let height = "0px"
                    let width = "0px"
                    if(partyframes) {
                        childElements = Array.from(partyframes.children);
                        height = parseInt(partyframes.style.height.split("px")[0]) || height
                        width = parseInt(partyframes.style.width.split("px")[0]) || width
                    }
                    let row = 0;
                    let col = 0;
                    if(childElements) {
                        childElements.forEach((child, index) => {
                            // Ignore button elements
                            if (child.tagName.toLowerCase() !== "button" && child.tagName.toLowerCase() !== "input" && !child.classList.contains("inputContainerKEK") && child.tagName.toLowerCase() !== "style") {
                                // Calculate position based on row and col
                                child.style.position = "absolute"
                                const top = row * (height + gridSpace);
                                const left = col * (width + gridSpace);
 
                                // Set the position
                                child.style.top = top + "px";
                                child.style.left = left + "px";
 
                                // Update row and col
                                col++;
                                if (col >= childrenPerRow) {
                                    col = 0;
                                    row++;
                                }
                            }
                        });
                    }
                }
 
                function buffArrayResizing(buffArrayElement) {
                    if(buffArrayElement && buffArrayElement instanceof HTMLElement) {
                        let iconSize
                        let isUfplayer = false
                        if(props[".partyframes"]) {
                            iconSize = props[".partyframes"]["buffSize"] || buffSize
                        }
                        if(buffArrayElement.parentNode.parentNode.id == "ufplayer" || buffArrayElement.parentNode.parentNode.id == "uftarget") {
                            if(props["#ufplayer"]) {
                                iconSize = props["#ufplayer"]["buffSize"] || iconSize
                            }
                            isUfplayer = true
                        } else {
                            buffArrayElement.style.pointerEvents = "none"
                        }
                        buffArrayElement.style.margin = "0px"
 
                        const icons = buffArrayElement.querySelectorAll(".icon")
                        if(icons) {
                            for(let icon of icons) {
                                icon.style.maxWidth = iconSize + "px"
                            }
                        }
                        let style = buffArrayElement.querySelector('style.buffTextSize');
                        // If the style tag doesn't exist, create and append it
                        if (!style) {
                            style = document.createElement('style');
                            style.classList.add('buffTextSize');
                            buffArrayElement.insertBefore(style, buffArrayElement.firstChild);
                        }
 
                        // Change the contents of the style tag
                        let fontSize = 15
                        if(props[".partyframes"]) {
                            fontSize = props[".partyframes"]["buffTextSize"] || fontSize
                        }
                        if(!isUfplayer) {
                            style.textContent = `.partyframes .stacks.svelte-1nn7wcb {
                                                    font-size: ${fontSize}px;
                                                    }
                                                    `;
                        } else {
                            if(props["#ufplayer"]) {
                                fontSize = props["#ufplayer"]["buffTextSize"] || fontSize
                            }
                            style.textContent = `.stacks.svelte-1nn7wcb {
                                                    font-size: ${fontSize}px;
                                                    }`;
                        }
                        // Function to handle mutations in the .buffarray.default element
                        if(!buffArrayElement.classList.contains("observingMutations")) {
                            function handleBuffArrayChanges(mutationsList, observer) {
                                for (const mutation of mutationsList) {
                                    if (mutation.type === 'childList') {
                                        const addedNodes = mutation.addedNodes
                                        addedNodes.forEach(node => {
                                            if(node instanceof HTMLElement) {
                                                // console.log(node)
 
                                                // A child has been added or removed, or the content has changed
                                                // console.log('Buff array content changed');
                                                const icon = node.querySelector(".icon")
                                                if(icon) {
                                                    icon.style.maxWidth = iconSize + "px"
                                                    const stacks = icon.querySelector(".stacks")
                                                    }
 
                                            }
                                        })
 
                                    }
                                }
                            }
 
                            // Create a MutationObserver to watch for changes in the .buffarray.default element
                            const buffArrayObserver = new MutationObserver(handleBuffArrayChanges);
                            buffArrayObserver.observe(buffArrayElement, { childList: true, subtree: false });
                            buffArrayElement.classList.add("observingMutations")
                        }
                    }
 
                }
 
                document.addEventListener('mousemove', function(event) {
                    const mouseX = event.clientX;
                    const mouseY = event.clientY;
 
                    //console.log('Mouse X:', mouseX, 'Mouse Y:', mouseY);
                });
 
                function hasChildWithClass(parentElement, className) {
                    // Use querySelector to check if any child has the specified class
                    return parentElement.querySelector('.' + className) !== null;
                }
                // Function to make an element scalable from a central point
                function makeElementScalable(element, scaleBtn, name, initialWidth, initialHeight,
                                              excludeSelectors =
                                              [".ignoreScale" , '.scale-btn-party', ".horizontal-btn", ".scale-btn-player", ".overlay", ".icon", "img", ".slottext", ".pt-btn-container", ".buffarray", "button", ".kek-ui-input"]
                                             ) {
                    let originalWidth, originalHeight;
                    if(initialWidth) {
                        element.style.width = initialWidth + "px"
                        element.style.height = initialHeight + "px"
                    }
                    let initialX, initialY;
                    // Function to handle mouse down event on the scale button
                    function handleScaleBtnMouseDown(event) {
                        element.classList.add("is-scaling")
                        originalWidth = element.offsetWidth;
                        originalHeight = element.offsetHeight;
                        if(initialWidth) {
                            originalWidth = initialWidth
                            originalHeight = initialHeight
                        }
                        initialX = event.clientX;
                        initialY = event.clientY;
                        if(!props[name]) {
                            props[name] = {}
                        }
                        // Add event listeners for mouse move and mouse up events
                        document.addEventListener('mousemove', handleMouseMove);
                        document.addEventListener('mouseup', handleMouseUp);
 
                        // Prevent default to avoid text selection during dragging
                        event.preventDefault();
                    }
 
                    // Function to handle mouse move event
                    function handleMouseMove(event) {
                        if (element.classList.contains("is-scaling")) {
                            const deltaX = event.clientX - initialX;
                            const deltaY = event.clientY - initialY;
 
                            // Calculate the scaling factors for width and height
                            const widthScaleFactor = (originalWidth + deltaX) / originalWidth;
                            const heightScaleFactor = (originalHeight + deltaY) / originalHeight;
 
                            // Apply the scaling factors to the element
                            const newWidth = originalWidth * widthScaleFactor
                            const newHeight = originalHeight * heightScaleFactor
                            element.style.width = newWidth + 'px';
                            element.style.height = newHeight + 'px';
                            if(!props[name]) {
                                props[name] = {}
                            }
                            props[name].width = newWidth
                            props[name].height = newHeight
                            // Iterate over child elements and exclude those with specified selectors
                            for (const child of element.children) {
                                const shouldExclude = excludeSelectors.some(selector => {
                                    if (selector.startsWith('.')) {
                                        // Check for class
                                        return child.classList.contains(selector.slice(1));
                                    } else {
                                        // Check for tag
                                        return child.tagName.toLowerCase() === selector.toLowerCase();
                                    }
                                });
                                if(!shouldExclude) {
                                    // Apply the scaling factors to the child element
                                    let classListArray = Array.from(child.classList)
                                    let classListString = '.' + classListArray.join('.').replace(/,/g, '.');
                                    child.style.width = newWidth + 'px';
                                    child.style.height = newHeight + 'px';
 
                                    if(!props[classListString]) {
                                        props[classListString] = {}
                                    }
                                    props[classListString].width = newWidth
                                    props[classListString].height = newHeight
                                    let bar = child.querySelector(".bar")
                                    if(bar) {
                                        bar.style.width = newWidth + 'px';
                                        bar.style.height = newHeight + 'px';
 
                                        if(!props[name + " .bar"]) {
                                            props[name + " .bar"] = {}
                                        }
                                        props[name + " .bar"].width = newWidth
                                        props[name + " .bar"].height = newHeight
                                    }
                                }
                            }
                        }
                    }
 
                    // Function to handle mouse up event
                    function handleMouseUp() {
                        // console.log(props)
                        saveProps(props)
                        if(element.classList.contains("partyframes")) {
                            toggleHorizontalStack()
                            toggleHorizontalStack()
                        }
                        element.classList.remove("is-scaling")
                        if(element.classList.contains("partyframes") && element.classList.contains("gridified")) {
                            if(props[".partyframes"]) {
                                playerPerRow = props[".partyframes"]["playerPerRow"] || 5
                            }
                            gridify(element, playerPerRow)
                        }
                        // Remove event listeners for mouse move and mouse up events
                        document.removeEventListener('mousemove', handleMouseMove);
                        document.removeEventListener('mouseup', handleMouseUp);
                    }
 
                    // Add event listener for mouse down event on the scale button
                    if(scaleBtn) {
                        scaleBtn.addEventListener('mousedown', handleScaleBtnMouseDown);
                    }
                }
                // Function to reposition buffarray on grid elements
                function repositionBuffarray(partyFramesElement, state) {
                    let offset;
                    // Check if the partyframes element exists
                    if (partyFramesElement) {
                        // Select all grid elements within partyframes
                        const gridElements = partyFramesElement.querySelectorAll('.grid');
                        if(gridElements) {
                            // Iterate through each grid element
                            gridElements.forEach(gridElement => {
                                // Find corresponding buffarray element
                                const buffarrayElement = gridElement.querySelector('.buffarray');
                                if(buffarrayElement) {
                                    buffArrayResizing(buffarrayElement)
                                    // Reposition buffarray on top of grid element
                                    if (buffarrayElement && state === "row") {
                                        buffarrayElement.style.position = 'absolute';
                                        if(props[".partyframes"]) {
                                            buffSize = props[".partyframes"]["buffSize"] || buffSize
                                        }
                                        if(partyFramesElement.style.height) {
                                            offset = 1 * parseInt(partyFramesElement.style.height.split("px")[0]) - buffSize
                                        } else {
                                            offset = -1 * buffSize
                                        }
                                        // console.log(partyFramesElement.style.height, buffSize)
                                        buffarrayElement.style.top = offset + "px";
                                        buffarrayElement.style.left = '0';
                                    } else if(buffarrayElement && state === "column") {
                                        buffarrayElement.style.position = '';
                                        buffarrayElement.style.top = '';
                                        buffarrayElement.style.left = '';
                                    }
                                }
                            });
                        }
                    }
                }
 
                // Function to horizontally stack elements
                function horizontalStack() {
                    // console.log(horizontalStackActive)
                    // Select the partyframes element
                    const partyFramesElement = document.querySelector('.partyframes');
 
                    // Check if the partyframes element exists
                    if (partyFramesElement && horizontalStackActive) {
                        // Set the display property to flex to horizontally stack the child elements
                        partyFramesElement.style.display = 'flex';
                        partyFramesElement.style.flexDirection = 'row'; // Optional: Set the direction to row
                        repositionBuffarray(partyFramesElement, 'row')
                        partyFramesElement.classList.add("gridified")
                        if(props[".partyframes"]) {
                            playerPerRow = props[".partyframes"]["playerPerRow"]
                        }
                        gridify(partyFramesElement, playerPerRow || 5)
                    } else {
                        partyFramesElement.style.display = 'flex';
                        partyFramesElement.style.flexDirection = 'columns';
                        partyFramesElement.classList.remove("gridified")
                        if(props[".partyframes"]) {
                            playerPerRow = props[".partyframes"]["playerPerRow"]
                        }
                        gridify(partyFramesElement, playerPerRow || 5)
                        repositionBuffarray(partyFramesElement, 'column')
                    }
                }
 
                function toggleHorizontalStack() {
                    horizontalStackActive = !horizontalStackActive
                    props["horizontalStackActive"] = horizontalStackActive
                    saveProps(props)
                    horizontalStack()
                }
 
                function handlePartyframesHelper(partyframes) {
                    let initialWidth, initialHeight;
 
                    if(props[".partyframes"] && props[".partyframes"].width) {
                        initialWidth = props[".partyframes"].width || barWidth
                        initialHeight = props[".partyframes"].height || barHeight
                    }
                    if(initialWidth) {
                        partyframes.style.width = initialWidth + "px"
                        partyframes.style.height = initialHeight + "px"
                    }
                    if(props[".partyframes"] && props[".partyframes"].left) {
                        partyframeLeft = props[".partyframes"].left
                        partyframeTop = props[".partyframes"].top
                    }
                    partyframes.style.left = `${partyframeLeft}px`
                    partyframes.style.top = `${partyframeTop}px`
                    updatePartyStyle()
                    makeElementDraggable2(partyframes, ".partyframes")
                    // Create Horizontal Stack Button
                    const horizontalStackButton = document.createElement('button');
                    horizontalStackButton.textContent = 'Change Buff Position';
                    horizontalStackButton.addEventListener('click', toggleHorizontalStack);
                    horizontalStackButton.title = "Click to change buff orientation"
                    horizontalStackButton.style.zIndex = '1';
                    horizontalStackButton.classList.add("svelte-mohsod", "horizontal-btn", "kek-ui-btn", "btn", "black", "textsecondary")
                    const btnSize = 35
                    // horizontalStackButton.style.height = btnSize + "px"
                    // horizontalStackButton.style.width = btnSize + "px"
                    horizontalStackButton.style.marginRight = "10px"
 
                    // Function to check if the partyframes element is available
 
                    const scaleBtn = document.createElement('button');
                    scaleBtn.title = "Hold and Drag to change size"
                    scaleBtn.textContent = 'Change Size';
                    scaleBtn.classList.add('scale-btn-party', "btn", "black", "textsecondary", "kek-ui-btn");
                    scaleBtn.style.zIndex = "1"
                    // scaleBtn.style.height = btnSize + "px"
                    // scaleBtn.style.width = btnSize + "px"
                    scaleBtn.style.marginRight = "10px"
 
 
                    scaleBtn.classList.add("svelte-mohsod")
 
                    makeElementScalable(partyframes, scaleBtn, ".partyframes");
 
                    // Create the party color button element
                    const partyColorButton = document.createElement('button');
                    partyColorButton.textContent = 'Colors';
                    partyColorButton.style.marginRight = "10px"
                    partyColorButton.style.zIndex = '1';
                    partyColorButton.title = "Click to change party colors"
                    partyColorButton.addEventListener('click', function (e) {
                        if(e.target === partyColorButton) {
                            openPartyColorCustomization(e)
                        }
                    });
                    partyColorButton.classList.add("svelte-mohsod", "partyColorButton", "kek-ui-btn", "btn", "black", "textsecondary");
 
                    if(!props["UIMode"]) {
                        scaleBtn.style.display = "none"
                        horizontalStackButton.style.display = "none"
                        partyColorButton.style.display = "none"
                    }
                    // Add the party color button to your HTML
                    // Adjust class names and styling according to your UI
                    function createInput(placeholder, prop, defaultValue) {
                        const inputField = document.createElement('input');
                        inputField.placeholder = placeholder;
                        inputField.title = `${placeholder}`
                        inputField.style.width = "70px";
                        inputField.style.height = "40px";
                        inputField.type = 'number';
                        if(props[".partyframes"]) {
                            inputField.value = props[".partyframes"][prop] || defaultValue; // Initial value
                        } else {
                            inputField.value = defaultValue
                        }
                        inputField.classList.add('kek-ui-input');
 
                        // Set the left position based on the number of inputs already present
                        const existingInputs = partyframes.querySelectorAll('.kek-ui-input');
 
                        if (!props[".partyframes"]) {
                            props[".partyframes"] = {};
                        }
 
                        if (props[".partyframes"] && typeof props[".partyframes"][prop] === 'undefined') {
                            props[".partyframes"][prop] = defaultValue;
                        }
 
                        if (!props["UIMode"]) {
                            inputField.style.display = "none";
                        }
 
                        function handleInputField() {
                            let inputValue = parseInt(inputField.value);
                            if (inputValue > 50) {
                                inputField.value = 50;
                            }
 
                            if (inputValue < 1) {
                                inputField.value = 1;
                            }
 
                            inputValue = parseInt(inputField.value);
 
                            // Use prop as the key for the property in props[".partyframes"]
                            props[".partyframes"][prop] = inputValue;
                            saveProps(props);
                            if(inputField.placeholder == "Per Row?") {
                                if(props[".partyframes"]) {
                                    playerPerRow = props[".partyframes"]["playerPerRow"] || 5
                                }
                                gridify(partyframes, playerPerRow)
                            }
                            if(prop == "gridSpace") {
                                console.log("working")
                                if(props[".partyframes"]) {
                                    playerPerRow = props[".partyframes"]["playerPerRow"] || 5
                                }
                                gridify(partyframes, playerPerRow)
                            }
 
                        }
 
                        // Add an event listener for the input event
                        inputField.addEventListener('input', handleInputField);
                        return inputField;
                    }
 
                    if(!partyframes.querySelector(".kek-ui-input")) {
                        props[".partyframes"] = props[".partyframes"] || {}
                        const playerPerRowInput = createInput("Per Row?", "playerPerRow", props[".partyframes"]["playerPerRow"] || 5)
                        const buffSizeInput = createInput("Buff Size", "buffSize", props[".partyframes"]["buffSize"] || 18)
                        const buffTextSizeInput = createInput("Buff Text Size", "buffTextSize", props[".partyframes"]["buffTextSize"] || 20)
                        const gridSpaceInput = createInput("Grid Space", "gridSpace", props[".partyframes"]["gridSpace"] || 15)
 
                        // Create a flex container for the inputs
                        const inputContainer = document.createElement('div');
                        inputContainer.style.display = 'flex';
                        inputContainer.style.left = "10px"
                        inputContainer.style.top = "-50px"
                        inputContainer.style.position = "absolute"
                        inputContainer.style.zIndex = 10
                        inputContainer.classList.add("ignoreScale")
                        inputContainer.classList.add("inputContainerKEK")
                        inputContainer.appendChild(partyColorButton)
                        inputContainer.appendChild(horizontalStackButton)
                        inputContainer.appendChild(scaleBtn)
                        inputContainer.appendChild(playerPerRowInput)
                        inputContainer.appendChild(buffSizeInput)
                        inputContainer.appendChild(buffTextSizeInput)
                        inputContainer.appendChild(gridSpaceInput)
 
                        partyframes.insertBefore(inputContainer, partyframes.firstChild);
                    }
                    horizontalStack()
                    refreshPartyframes()
 
                    // Function to get party colors from localStorage
                    function getPartyColors() {
                        const storedColors = localStorage.getItem('partyColorsKEK');
                        return storedColors ? JSON.parse(storedColors) : partyColorsKEK;
                    }
 
                    // Function to set party colors to localStorage
                    function setPartyColors(colors) {
                        localStorage.setItem('partyColorsKEK', JSON.stringify(colors));
                    }
 
                    function updatePartyStyle() {
                        const partyColors = getPartyColors();
 
                        // Create a style string based on partyColors
                        const styleString = Object.entries(partyColors).map(([key, values]) => {
                            const [topColor, topPercentage] = values.top;
                            const [middleColor, middlePercentage] = values.middle;
                            const [bottomColor, bottomPercentage] = values.bottom;
 
                            return `
                        .${key} {
                        background: linear-gradient(0deg, ${topColor} ${topPercentage}%, ${middleColor} ${middlePercentage}%, ${bottomColor} ${bottomPercentage}%);
                        }
                        `;
                        }).join('\n');
 
                        // Remove existing style tag with ID 'partyStyleKEK'
                        const existingStyleTag = document.getElementById('partyStyleKEK');
                        if (existingStyleTag) {
                            existingStyleTag.remove();
                        }
 
                        // Create a new style tag
                        const styleTag = document.createElement('style');
                        styleTag.id = 'partyStyleKEK';
                        styleTag.classList.add("ignoreScale")
                        styleTag.textContent = styleString;
                        // console.log(styleTag)
                        // Append the style tag to the partyframes
                        partyframes.appendChild(styleTag);
                    }
 
                    function getClassName(idx) {
                        return {
                            "0": "Warrior",
                            "1": "Mage",
                            "2": "Archer",
                            "3": "Shaman",
                            "4": "Wardens/Conjurer",
                            "5": "Enemy/Monster"
                        }[idx]
                    }
                    // Function to open party color customization
                    function openPartyColorCustomization(e) {
                        const existingUI = document.querySelector(".party-color-customizationKEK");
                        if (existingUI) {
                            existingUI.parentNode.remove()
                            return;
                        }
 
                        const partyColors = getPartyColors(); // Fetch partyColors from localStorage
 
                        // Create color customization UI
                        const mainContainer = document.createElement("div")
                        mainContainer.className = "widow panel-black border black"
                        const colorCustomizationUI = document.createElement("div");
                        colorCustomizationUI.className = "party-color-customizationKEK panel-black bar";
                        colorCustomizationUI.style.position = "absolute";
                        colorCustomizationUI.style.display = "grid";
                        colorCustomizationUI.style.gridTemplateColumns = "repeat(1, auto)";
                        colorCustomizationUI.style.top = (partyColorButton.offsetTop - 300) + "px";
                        colorCustomizationUI.style.left = partyColorButton.offsetLeft + partyColorButton.offsetWidth + 10 + "px";
 
                        for (const key in partyColors) {
                            const flexContainer = document.createElement("div")
                            flexContainer.style.display = "flex"
                            flexContainer.style.alignItems = "center"
                            const colorItem = document.createElement("div");
                            colorItem.className = "color-item-party btn black textsecondary";
                            const classIdx = key.split("bgc")[1]
                            colorItem.textContent = getClassName(classIdx);
 
                            // Create color picker for the top color
                            const topColorPicker = createColorPicker("Top Color", 'top', partyColors[key].top[0], (value) => {
                                handlePartyColorChange(key, 'top', value);
                            });
 
                            // Create color picker for the middle color
                            const middleColorPicker = createColorPicker("Middle Color", 'middle', partyColors[key].middle[0], (value) => {
                                handlePartyColorChange(key, 'middle', value);
                            });
 
                            // Create color picker for the bottom color
                            const bottomColorPicker = createColorPicker("Bottom Color", 'bottom', partyColors[key].bottom[0], (value) => {
                                handlePartyColorChange(key, 'bottom', value);
                            });
 
                            // Create percentage inputs for the top, middle, and bottom colors
                            const topPercentageInput = createPercentageInput(key, 'top', partyColors[key].top[1]);
                            const middlePercentageInput = createPercentageInput(key, 'middle', partyColors[key].middle[1]);
                            const bottomPercentageInput = createPercentageInput(key, 'bottom', partyColors[key].bottom[1]);
                            const dummyDiv = document.createElement("div")
                            const dummyContainer = document.createElement("div")
                            dummyContainer.className = "bar  svelte-i7i7g5"
                            dummyDiv.classList.add("progressBar", `kek-bgc${classIdx}`)
                            dummyDiv.style.height = "50px"
                            dummyDiv.style.width = "120px"
                            dummyContainer.style.marginLeft = "20px"
                            const dummyLeft = document.createElement("span")
                            dummyLeft.classList.add("left")
                            dummyLeft.textContent = "Dummy"
                            dummyLeft.style.marginLeft = "5px"
                            const dummyRight = document.createElement("span")
                            dummyRight.classList.add("right", "svelte-i7i7g5")
                            dummyRight.textContent = "0/0"
 
                            dummyDiv.appendChild(dummyLeft)
                            dummyDiv.appendChild(dummyRight)
 
                            colorItem.style.width = "150px";
                            colorItem.style.padding = "10px";
 
                            dummyContainer.appendChild(dummyDiv)
 
                            flexContainer.appendChild(colorItem);
                            flexContainer.appendChild(topColorPicker);
                            topColorPicker.style.margingLeft = "5px"
                            flexContainer.appendChild(topPercentageInput);
                            flexContainer.appendChild(middleColorPicker);
                            flexContainer.appendChild(middlePercentageInput);
                            flexContainer.appendChild(bottomColorPicker);
                            flexContainer.appendChild(bottomPercentageInput);
                            flexContainer.appendChild(dummyContainer);
                            flexContainer.style.padding = "5px"
                            colorCustomizationUI.appendChild(flexContainer)
                        }
                        const resetBtn = document.createElement("button")
                        resetBtn.classList.add("btn", "black", "textsecondary")
                        resetBtn.textContent = "Reset"
                        resetBtn.addEventListener("click", () => {
                            setPartyColors(partyColorsKEK)
                            openPartyColorCustomization()
                            updatePartyStyle()
                        })
                        colorCustomizationUI.appendChild(resetBtn)
                        mainContainer.appendChild(colorCustomizationUI)
                        colorCustomizationUI.style.zIndex = 20
                        // console.log(e.target)
                        e.target.parentNode.appendChild(mainContainer);
                    }
 
                    // Function to handle party color change
                    function handlePartyColorChange(key, section, value) {
                        const partyColors = getPartyColors();
                        partyColors[key][section][0] = value;
                        setPartyColors(partyColors);
                    }
 
                    function createColorPicker(title, type, initialValue, eventHandler) {
                        const colorPicker = document.createElement("input");
                        colorPicker.type = "color";
                        colorPicker.title = title;
                        colorPicker.style.height = "35px"
                        colorPicker.style.width = "35px"
                        colorPicker.value = initialValue;
                        colorPicker.style.flex = 1
                        colorPicker.addEventListener("input", (event) => {
                            event.stopPropagation();
                            eventHandler(event.target.value);
                            updatePartyStyle()
                        });
 
                        return colorPicker;
                    }
                    // Helper function to create a percentage input
                    function createPercentageInput(key, section, value) {
                        const percentageInput = document.createElement('input');
                        percentageInput.type = 'number';
                        percentageInput.placeholder = 'Percentage';
                        percentageInput.value = value;
                        percentageInput.title = "Percentage value";
                        percentageInput.style.width = "45px";
                        percentageInput.style.flex = 1
                        percentageInput.style.height = "35px";
                        percentageInput.addEventListener('input', (event) => {
                            event.stopPropagation();
                            let inputValue = parseInt(event.target.value);
 
                            // Ensure the input value is within the range of 0 to 100
                            if (inputValue < 0) {
                                inputValue = 0;
                            } else if (inputValue > 100) {
                                inputValue = 100;
                            }
 
                            // Update the input value
                            percentageInput.value = inputValue;
 
                            // Call the handler function
                            handlePartyPercentageChange(key, section, inputValue);
                        });
                        return percentageInput;
                    }
 
                    // Function to handle party percentage change
                    function handlePartyPercentageChange(key, section, value) {
                        const partyColors = getPartyColors();
                        partyColors[key][section][1] = parseInt(value);
                        setPartyColors(partyColors);
                    }
 
                }
 
                function refreshPartyframes() {
                    const partyframes = document.querySelector(".partyframes")
                    let height = partyMemberHeight
                    let width = partyMemberWidth
                    if(props[".partyframes"] && props[".partyframes"].height) {
                        height = props[".partyframes"].height
                        width = props[".partyframes"].width
                    }
                    if(partyframes) {
                        const grids = partyframes.querySelectorAll(".grid:not(button)")
                        if(grids.length !== 0) {
                            for(let grid of grids) {
                                if(grid.classList.contains("kek-ui-btn") || grid.classList.contains("kek-ui-input")) {
                                    // console.log("skipping", grid.classList)
                                    continue;
                                }
                                // console.log(grid, "from refresh")
                                grid.style.height = height + "px"
                                grid.style.width = width + "px"
                                const bar = grid.querySelector(".bar")
                                if(bar) {
                                    // console.log(bar, "from refresh")
                                    bar.style.height = height + "px"
                                    bar.style.width = width + "px"
                                    colorizePartyframes(partyframes)
                                    const rightSpan = bar.querySelector(".right")
                                    if (rightSpan && !rightSpan.classList.contains("mutationObserving")) {
                                        // console.log("Observing", rightSpan.closest(".left").textContent)
                                        // Create a MutationObserver to watch for changes in the right span's character data
                                        let prevText = rightSpan.textContent
                                        const rightSpanObserver = new MutationObserver(() => {
                                            if(prevText.trim().toLowerCase() == "offline" || prevText.trim().toLowerCase() == "dead") {
                                                console.log("Character data of right span changed:", rightSpan.textContent);
                                                const grid = rightSpan.closest(".grid")
                                                colorizeGrid(grid)
                                            }
                                            prevText = rightSpan.textContent
                                            // Perform your actions when character data changes
                                        });
 
                                        rightSpanObserver.observe(rightSpan, {characterData: true, attributes: false, childList: false, subtree: true});
                                        rightSpan.classList.add("mutationObserving")
                                        //                                         // Cleanup observer after handling the mutation
                                        //                                         setTimeout(() => rightSpanObserver.disconnect(), 100);
                                    }
                                } else {
                                    console.log("retrying")
                                    setTimeout(refreshPartyframes, 100)
                                }
                            }
                        } else {
                            setTimeout(refreshPartyframes, 100)
                        }
                    } else {
                        setTimeout(refreshPartyframes, 100)
                    }
                }
 
                function handlePartyframes() {
                    const partyframes = document.querySelector(".partyframes");
                    if(partyframes) {
                        handlePartyframesHelper(partyframes)
                    } else {
                        // console.error("Cant find partyframes retrying 100ms")
                        setTimeout(handlePartyframes, 100)
                    }
                }
 
                const chatColorsKEK = {
                    "textglobal": "#ffcb9d",
                    "textnotice": "#9de74d",
                    "textparty": "#2ed3f6",
                    "textfaction": "#f68e7a",
                    "textclan": "#de8b09",
                    "textsystem": "#4de751",
                    "textto": "#ef3eff",
                    "textfrom": "#ef3eff"
                }
 
                function handleChatPanel() {
                    const chat = document.querySelector("#chat");
 
                    if(chat) {
                        // Initialize props["#chat"] if it doesn't exist
                        // Event listener for right-click on articles
 
                        chat.addEventListener("contextmenu", function (event) {
                            const targetArticle = event.target.closest("article");
                            if (targetArticle) {
                                // Right-clicked on an article, handle copy logic here
                                event.preventDefault();
                                const menu = document.querySelector(".context")
                                // console.log(menu)
                                const copyChoice = document.createElement("div")
                                copyChoice.classList.add("choice")
                                copyChoice.textContent = "Copy"
                                copyChoice.addEventListener("click", () => {
                                    copyArticleContent(targetArticle);
                                    menu.remove()
                                })
                                menu.appendChild(copyChoice)
 
                                // console.log(menu)
                                const copyName = document.createElement("div")
                                copyName.classList.add("choice")
                                copyName.textContent = "Copy Name"
                                copyName.addEventListener("click", () => {
                                    copyArticleSender(targetArticle);
                                    menu.remove()
                                })
                                menu.appendChild(copyName)
                            }
                        });
 
                        function copyArticleSender(article) {
                            const senderElement = article.querySelector(".name");
                            const copySender = senderElement.textContent;
 
                            // Perform copy to clipboard logic (use a temporary textarea, document.execCommand, or Clipboard API)
                            // Example using Clipboard API:
                            if (copySender) {
                                navigator.clipboard.writeText(copySender)
                                    .then(() => console.log("Article sender copied to clipboard:", copySender))
                                    .catch((error) => console.error("Copy failed:", error));
                            }
                        }
 
                        // Function to copy content of an article
                        function copyArticleContent(article) {
                            const contentSpan = article.querySelector(".content")
                            const copyContent = contentSpan.nextElementSibling.textContent
                            // Perform copy to clipboard logic (use a temporary textarea, document.execCommand, or Clipboard API)
                            // Example using Clipboard API:
                            if(copyContent) {
                                navigator.clipboard.writeText(copyContent)
                                // .then(() => console.log("Article content copied to clipboard"), copyContent)
                                    .catch((error) => console.error("Copy failed:", error));
                            }
                        }
                        props["#chat"] = props["#chat"] || {};
 
                        if(props["#chat"] && props["#chat"].left) {
                            chatLeft = props["#chat"].left
                            chatTop = props["#chat"].top
                        }
                        chat.parentNode.style.left = `${chatLeft}px`
                        chat.parentNode.style.top = `${chatTop}px`
                        chat.style.zIndex = 10
                        makeElementDraggable2(chat.parentNode, "#chat")
 
                        // Create a MutationObserver to observe changes in the #chat element
                        const observer = new MutationObserver((mutationsList, observer) => {
                            // Handle mutations as needed
                            mutationsList.forEach(mutation => {
                                if(mutation.type == "childList") {
                                    const addedNodes = mutation.addedNodes
                                    addedNodes.forEach(node => {
                                        if(node instanceof HTMLElement) {
                                            // console.log(node.textContent)
                                            const senderContainer = node.querySelector(".sender")
                                            if(senderContainer && !node.classList.contains("kek-chat-processed")) {
                                                node.classList.add("kek-chat-processed")
                                                const sender = node.querySelector(".sender .name")
                                                if(sender && props.blockedPlayers) {
                                                    const senderName = sender.textContent.toLowerCase().trim()
                                                    // console.log(senderName, props.blockedPlayers)
                                                    if(props.blockedPlayers.includes(senderName)) {
                                                        // console.log(senderName + " is blocked")
                                                        // const article = node.closest("article")
                                                        // article.style.display = "none"
                                                        node.style.display = "none"
                                                    }
                                                }
                                            }
                                            const noticeSpan = node.querySelectorAll(".textnotice")[1]
                                            if(noticeSpan) {
                                                const textContent = noticeSpan.textContent.trim();
                                                // console.log('Original Text:', textContent);
 
                                                const matchResult = textContent.match(/^(.*?)\s+received\s+(.*?)\s*x(\d+)\s*\.?$/);
                                                const leavePartyMatch = textContent.match(/^(.*?)\s+has left your party\.$/);
 
                                                if (leavePartyMatch) {
                                                    const playerNameLeft = leavePartyMatch[1];
                                                    // console.log('Player has left the party:', playerNameLeft);
                                                    changePlayerState(playerNameLeft, 0)
                                                }
                                                if (matchResult) {
                                                    const name = matchResult[1];
                                                    const itemDescription = matchResult[2];
                                                    const numberOfItems = parseInt(matchResult[3]);
 
                                                    // console.log('Name:', name);
                                                    // console.log('Item Description:', itemDescription)
                                                    // console.log('Number of Items:', numberOfItems);
                                                    const itemName = itemDescription.split(" ")[1]
                                                    const tierInfo = itemDescription.split(" ")[0]
                                                    const tier = parseInt(tierInfo.split("T")[1])
                                                    // console.log('Item Name:', itemName);
                                                    // console.log('Item Tier:', tier);
                                                    if(itemName.trim().toLowerCase() == "rune") {
                                                        addRuneData(name, tier - 1, numberOfItems)
                                                    }
                                                } else {
                                                    // console.log('No match found for:', textContent);
                                                }
                                            }
                                            // Check if there is any element with class 'textto'
                                            const hasTextTo = node.querySelector('.textto') !== null;
 
                                            // Check if there is any element with class 'textfrom'
                                            const hasTextFrom = node.querySelector('.textfrom') !== null;
                                            if(hasTextTo || hasTextFrom) {
                                                // Extract information from the parsed HTML
                                                const type = node.querySelector('.channel').textContent.trim();
                                                const senderName = node.querySelector('.name').textContent.trim();
                                                const spans = node.querySelectorAll(`span.${svelteObj.chat}`)
                                                const content = spans[spans.length - 1].textContent.trim()
                                                console.log(type, senderName, content)
                                                addWhisperLog(type, senderName, content, playerNameKEK)
                                                if(currentSenderName == senderName) {
                                                    displayWhisperLogs(senderName)
                                                }
                                                updateSenderNameList()
                                            }
 
                                        }
                                    })
                                }
                            })
                        });
 
                        // Configuration of the observer
                        const config = {childList: true};
 
                        // Start observing the target node (#chat)
                        observer.observe(chat, config);
 
                        if(!chat.classList.contains("chatCustomizationKEK")) {
                            updateChatStyle();
                            chat.classList.add("chatCustomizationKEK")
                            // Create input elements for font-size, height, and width
                            const fontSizeInput = createInput("Font Size", props["#chat"].fontSize);
                            const heightInput = createInput("Height", props["#chat"].height);
                            const widthInput = createInput("Width", props["#chat"].width);
                            const blackChatCheckInput = createInput("Black Chat?", props["#chat"].blackChat);
                            // Add a button for chat color customization
                            const chatColorButton = document.createElement("button");
                            chatColorButton.className = "kek-ui-btn btn black textsecondary"
                            chatColorButton.textContent = "Colors";
                            chatColorButton.title = "Click to change chat colors"
                            chatColorButton.style.width = "300px"
                            chatColorButton.addEventListener("click", function(e) {
                                if(e.target === chatColorButton) {
                                    openChatColorCustomization(e)
                                }
                            });
 
                            // Create a flex container for input elements
                            const inputContainer = document.createElement("div");
                            inputContainer.style.display = "flex";
                            inputContainer.style.position = "absolute";
                            inputContainer.style.top = chat.offsetTop + "px";
                            inputContainer.style.left = chat.offsetLeft + chat.offsetWidth + 10 + "px"; // Adjust the offset as needed
 
                            // Append input elements to the flex container
                            inputContainer.appendChild(chatColorButton)
                            inputContainer.appendChild(fontSizeInput);
                            inputContainer.appendChild(heightInput);
                            inputContainer.appendChild(widthInput);
                            inputContainer.appendChild(blackChatCheckInput)
 
                            chat.parentNode.insertBefore(inputContainer, chat.parentNode.firstChild);
                            // chat.parentNode.appendChild(blackChatCheckbox)
                            positionOverChat(inputContainer)
                            // Event listeners for input elements
                            fontSizeInput.addEventListener("input", handleInputChange("fontSize"));
                            heightInput.addEventListener("input", handleInputChange("height"));
                            widthInput.addEventListener("input", handleInputChange("width"));
                            blackChatCheckInput.addEventListener("input", handleInputChange("blackChat"));
 
                            if(props["UIMode"] === false) {
                                fontSizeInput.style.display = "none"
                                heightInput.style.display = "none"
                                widthInput.style.display = "none"
                                blackChatCheckInput.style.display = "none"
                                chatColorButton.style.display = "none"
                            }
                        }
 
                        // Function to open chat color customization
                        function openChatColorCustomization(e) {
                            const existingCustomizationPanel = document.querySelector(".chat-color-customizationKEK")
 
                            if(existingCustomizationPanel) {
                                existingCustomizationPanel.remove()
                                return
                            }
                            const chatColors = getChatColors(); // Fetch chatColors from localStorage
 
                            // Create color customization UI
                            const colorCustomizationUI = document.createElement("div");
                            colorCustomizationUI.className = "chat-color-customizationKEK panel-black";
                            colorCustomizationUI.style.position = "absolute";
                            colorCustomizationUI.style.display = "grid"
                            colorCustomizationUI.style.gridTemplateColumns = "repeat(2, auto)"
                            colorCustomizationUI.style.top = (chat.offsetTop - 400) + "px";
                            colorCustomizationUI.style.left = chat.offsetLeft + "px";
 
                            const resetBtn = document.createElement("button")
                            const resetDiv = document.createElement("div")
                            resetBtn.className = "btn black textsecondary"
                            resetBtn.textContent = "Reset"
                            resetBtn.addEventListener("click", function() {
                                setChatColors(chatColorsKEK)
                                openChatColorCustomization()
                                updateChatStyle()
                            })
                            colorCustomizationUI.appendChild(resetBtn)
                            colorCustomizationUI.appendChild(resetDiv)
                            for (const key in chatColors) {
 
                                const colorItem = document.createElement("div");
                                colorItem.className = "color-item";
                                colorItem.textContent = key.split("text")[1].toUpperCase();
 
                                const colorPicker = document.createElement("input");
                                colorPicker.type = "color";
                                colorPicker.value = chatColors[key];
                                colorPicker.addEventListener("input", (event) => {
                                    event.stopPropagation()
                                    handleColorChange(key, event.target.value)
                                });
 
                                colorItem.style.width = "100px"
                                colorItem.style.padding = "10px"
                                colorPicker.style.width = "30px"
                                colorPicker.style.height = "30px"
                                colorCustomizationUI.appendChild(colorItem);
                                colorCustomizationUI.appendChild(colorPicker);
 
                            }
                            colorCustomizationUI.style.zIndex = 2
                            e.target.appendChild(colorCustomizationUI);
                        }
 
                        // Function to handle color changes and update localStorage
                        function handleColorChange(key, color) {
                            const chatColors = getChatColors();
                            chatColors[key] = color;
                            setChatColors(chatColors); // Store updated chatColors in localStorage
                            updateChatStyle(); // Update chat style with new colors
                        }
 
                        // Function to fetch chatColors from localStorage
                        function getChatColors() {
                            return JSON.parse(localStorage.getItem("chatColorsKEK")) || chatColorsKEK;
                        }
 
                        // Function to store chatColors in localStorage
                        function setChatColors(chatColors) {
                            localStorage.setItem("chatColorsKEK", JSON.stringify(chatColors));
                        }
 
                        // Function to create input elements
                        function createInput(placeholder, value, type = "number") {
                            const input = document.createElement("input");
                            input.type = type;
                            input.className = "kek-ui-input";
                            input.placeholder = placeholder;
                            input.title = `${placeholder}`
                            input.value = value || "";
                            return input;
                        }
 
                        // Function to handle input changes
                        function handleInputChange(prop) {
                            return function (event) {
                                // Initialize props["#chat"] if it doesn't exist
                                props["#chat"] = props["#chat"] || {};
 
                                const inputValue = event.target.value;
                                props["#chat"][prop] = inputValue;
                                // console.log(inputValue)
                                saveProps(props);
                                updateChatStyle(); // Update chat style after props change
                            };
                        }
 
                        // Function to update chat style based on props
                        function updateChatStyle() {
                            // Remove existing chat styles
                            const existingChatStyles = chat.querySelector(".chat-styles-kek");
                            if (existingChatStyles) {
                                existingChatStyles.remove();
                            }
 
                            // Create a new style element
                            const chatStyles = document.createElement("style");
                            chatStyles.className = "chat-styles-kek";
 
                            // Get chat colors from localStorage
                            const chatColors = getChatColors();
 
                            // Generate CSS rules based on chatColors
                            for (const className in chatColors) {
                                const color = chatColors[className];
                                // Append CSS rule for each class
                                chatStyles.appendChild(document.createTextNode(`.${className} { color: ${color}; }`));
                            }
 
                            // Append the style element to the chat element
                            chat.appendChild(chatStyles);
 
                            chat.style.fontSize = props["#chat"].fontSize + "px";
                            if(props["#chat"].blackChat == 0) {
                                chat.classList.remove("panel-black")
                            } else {
                                chat.classList.add("panel-black")
                            }
                            if (props["#chat"].height) {
                                chat.style.height = props["#chat"].height + "px";
                            } else {
                                chat.style.removeProperty("height");
                            }
                            if (props["#chat"].width) {
                                chat.style.width = props["#chat"].width + "px";
                            } else {
                                chat.style.removeProperty("width");
                            }
                        }
                        // Function to position input over chat
                        function positionOverChat(input) {
                            const chatParentRect = chat.parentNode.getBoundingClientRect();
                            const chatRect = chat.getBoundingClientRect();
                            const offsetTop = 40
                            input.style.position = "absolute";
                            input.style.left = (chatRect.left - chatParentRect.left) + "px";
                            input.style.top = (chatRect.top - chatParentRect.top - offsetTop) + "px";
                        }
                        chat.scrollTop = chat.scrollHeight + 10;
                    } else {
                        // console.error("Cant find chat retrying 100ms")
                        setTimeout(handleChatPanel, 100)
                    }
                }
 
                function handleChatInput() {
                    let chatInputSection = document.querySelector('#chatinput');
 
                    if (chatInputSection) {
                        const chatInput = chatInputSection.querySelector("input")
                        chatInput.addEventListener('input', chatInputListener);
                    } else {
                        // console.error("didnt find chat input retrying every 100 ms")
                        setTimeout(handleChatInput, 100)
                    }
 
                }
                function chatInputListener(event) {
                    const emojis = getEmojis()
                    const chatInput = event.target
                    // console.log(chatInput.value)
                    const inputValue = chatInput.value;
 
                    let replacedValue = inputValue;
 
                    for (const [emote, emoji] of Object.entries(emojis)) {
                        replacedValue = replacedValue.replace(new RegExp(emote, 'g'), emoji);
                    }
 
                    // Update the input value with replaced emotes
                    chatInput.value = replacedValue;
                }
                function handleTargetFrames() {
                    let ufplayer = document.querySelector("#ufplayer")
                    let uftarget = document.querySelector("#uftarget")
                    const targetframes = document.querySelector(".targetframes")
                    if (ufplayer && targetframes) {
                        const scaleBtnPlayer = document.createElement('button');
                        scaleBtnPlayer.textContent = 'Change Size';
                        scaleBtnPlayer.title = "Hold and Drag to change Size"
                        scaleBtnPlayer.classList.add('scale-btn-player');
                        scaleBtnPlayer.classList.add("svelte-mohsod", "kek-ui-btn", "btn", "black", "textsecondary")
                        if(!props["UIMode"]) {
                            scaleBtnPlayer.style.display = "none"
                        }
 
                        let playerBar = ufplayer.querySelector(".bar")
                        if(props["#ufplayer .bar"] && props["#ufplayer .bar"].height) {
                            barHeight = props["#ufplayer .bar"].height
                            barWidth = props["#ufplayer .bar"].width
                        }
                        playerBar.style.height = barHeight + "px"
                        playerBar.style.width = barWidth + "px"
                        if(props["#ufplayer"]) {
                            ufplayerLeft = props["#ufplayer"].left || ufplayerLeft
                            ufplayerTop = props["#ufplayer"].top || ufplayerTop
                            // console.log(ufplayerLeft, ufplayerTop, "from handleTargetFrames")
                        }
                        ufplayer.style.left = ufplayerLeft + "px"
                        ufplayer.style.top = ufplayerTop + "px"
                        makeElementDraggable2(ufplayer, "#ufplayer")
                        if(uftarget) {
                            if(props["#uftarget"] && props["#uftarget"].left) {
                                uftargetLeft = props["#uftarget"].left
                                uftargetTop = props["#uftarget"].top
                            }
                            uftarget.style.left = `${uftargetLeft}px`
                            uftarget.style.top = `${uftargetTop}px`
                            makeElementDraggable2(uftarget, "#uftarget")
                            let targetBar = uftarget.querySelector(".bar")
                            targetBar.style.height = barHeight + "px"
                            targetBar.style.width = barWidth + "px"
                            makeElementScalable(uftarget.querySelector(".bar"), scaleBtnPlayer, "#uftarget .bar")
                            buffArrayResizing(uftarget.querySelector(".buffarray"), targetBuffSize)
                            colorizeGrid(uftarget)
                            handleUftargetMutations(uftarget)
                        }
                        makeElementScalable(ufplayer.querySelector(".bar"), scaleBtnPlayer, "#ufplayer .bar")
 
                        buffArrayResizing(ufplayer.querySelector(".buffarray"), targetBuffSize)
                        colorizeGrid(ufplayer)
                        if(!ufplayer.querySelector(".kek-ui-input")) {
                            props["#ufplayer"] = props["#ufplayer"] || {}
 
 
                            const buffSizeInput = createInput("Buff Size", "buffSize", props["#ufplayer"]["buffSize"] || 18)
                            const buffTextSizeInput = createInput("Buff Text Size", "buffTextSize", props["#ufplayer"]["buffTextSize"] || 20)
 
                            // Create a flex container for the inputs
                            const inputContainer = document.createElement('div');
                            inputContainer.style.display = 'flex';
                            inputContainer.style.left = "10px"
                            inputContainer.style.top = "-50px"
                            inputContainer.style.position = "absolute"
                            inputContainer.style.zIndex = 1
                            inputContainer.classList.add("ignoreScale")
                            inputContainer.classList.add("inputContainerKEK")
                            scaleBtnPlayer.style.flex = 1
                            buffSizeInput.style.flex = 1
                            buffTextSizeInput.style.flex = 1
                            inputContainer.appendChild(scaleBtnPlayer)
                            inputContainer.appendChild(buffSizeInput)
                            inputContainer.appendChild(buffTextSizeInput)
 
                            ufplayer.insertBefore(inputContainer, ufplayer.firstChild);
                        }
                    } else {
                        // console.error("cant find ufplayer retrying in 100ms")
                        setTimeout(handleTargetFrames, 100)
                    }
 
                    function createInput(placeholder, prop, defaultValue) {
                        const inputField = document.createElement('input');
                        inputField.placeholder = placeholder;
                        inputField.style.width = "120px";
                        inputField.style.height = "40px";
                        inputField.title = `${placeholder}`
                        inputField.type = 'number';
                        if(props["#ufplayer"]) {
                            inputField.value = props["#ufplayer"][prop] || defaultValue; // Initial value
                        } else {
                            inputField.value = defaultValue
                        }
                        inputField.classList.add('kek-ui-input', "grid");
 
                        if (!props["#ufplayer"]) {
                            props["#ufplayer"] = {};
                        }
 
                        if (props["#ufplayer"] && typeof props["#ufplayer"][prop] === 'undefined') {
                            props["#ufplayer"][prop] = defaultValue;
                        }
 
                        if (!props["UIMode"]) {
                            inputField.style.display = "none";
                        }
 
                        function handleInputField() {
                            let inputValue = parseInt(inputField.value);
 
                            if (inputValue > 50) {
                                inputField.value = 50;
                            }
 
                            if (inputValue < 1) {
                                inputField.value = 1;
                            }
 
                            inputValue = parseInt(inputField.value);
 
                            // Use prop as the key for the property in props["#ufplayer"]
                            props["#ufplayer"][prop] = inputValue;
                            saveProps(props);
                        }
 
                        // Add an event listener for the input event
                        inputField.addEventListener('input', handleInputField);
                        return inputField;
                    }
 
                }
 
                function handleUftargetMutations(uftarget) {
                    // console.log("putting uftarget observer")
                    if(uftarget && !uftarget.classList.contains("mutationObserving")) {
                        const classIcon = uftarget.querySelector(".icon")
                        console.log(classIcon)
                        function handleMutation(mutationsList, observer) {
                            for(const mutation of mutationsList) {
                                if(mutation.type === "attributes" && mutation.attributeName === "src") {
                                    const target = mutation.target
                                    if(target.classList.contains("pclass")) {
                                        // console.log(mutation)
                                        // console.log(target)
                                        const uftarget = document.querySelector("#uftarget")
                                        // console.log("coloring uf target")
                                        colorizeGrid(uftarget)
                                    }
                                }
                            }
                        }
                        const uftargetObserver = new MutationObserver(handleMutation);
 
                        uftargetObserver.observe(classIcon, { attributes: true })
                        uftarget.classList.add("mutationObserving")
                    }
                }
 
                function handleTargetframesMutations() {
                    const targetframesContainer = document.querySelector(".targetframes")
 
                    if(targetframesContainer && !targetframesContainer.classList.contains("mutationObserving")) {
                        targetframesContainer.classList.add("mutationObserving")
                        // console.log("putting observer on target frames")
                        function handleMutation(mutationsList, observer) {
                            for (const mutation of mutationsList) {
                                if (mutation.type === 'childList') {
                                    // A child has been added or removed, perform actions here
                                    // console.log(mutation)
                                    mutation.addedNodes.forEach(node => {
                                        if(node instanceof HTMLElement) {
                                            if(node.id == "uftarget") {
                                                colorizeGrid(node)
                                                handleUftargetMutations(node)
                                                if(targetframesContainer) {
                                                    const ufplayer = document.querySelector("#ufplayer")
                                                    if(ufplayer) {
                                                        const scaleBtn = ufplayer.querySelector(".scale-btn-player")
                                                        node.style.height = ufplayer.style.height
                                                        node.style.width = ufplayer.style.width
                                                        if(props["#uftarget"] && props["#uftarget"].left) {
                                                            uftargetLeft = props["#uftarget"].left
                                                        }
                                                        node.style.left = `${uftargetLeft}px`
                                                        node.style.top = ufplayer.style.top
                                                        makeElementDraggable2(node, "#uftarget")
                                                        let targetBar = node.querySelector(".bar")
                                                        if(props["#ufplayer .bar"] && props["#ufplayer .bar"].height) {
                                                            barHeight = props["#ufplayer .bar"].height
                                                            barWidth = props["#ufplayer .bar"].width
                                                        }
                                                        targetBar.style.height = barHeight + "px"
                                                        targetBar.style.width = barWidth + "px"
                                                        makeElementScalable(node.querySelector(".bar"), scaleBtn, "#uftarget .bar")
                                                        buffArrayResizing(node.querySelector(".buffarray"), targetBuffSize)
                                                    }
                                                }
                                            }
                                        }
                                    });
                                }
                            }
                        }
                        // Create a MutationObserver to watch for changes in the DOM
                        const targetframesObserver = new MutationObserver(handleMutation);
 
                        targetframesObserver.observe(targetframesContainer, { childList: true, subtree: false });
                    } else {
                        setTimeout(handleTargetframesMutations, 100)
                    }
                }
 
                function handleSkillbar() {
                    const skillbar = document.querySelector("#skillbar")
                    if(skillbar) {
                        skillbar.style.gridAutoRows = "initial"
                        skillbar.style.gridAutoColumns = "unset"
                        skillbar.style.gridAutoFlow = "dense"
                        skillbar.style.gridTemplateColumns = `repeat(${skillsPerRow}, auto)`
                        if(props["#skillbar"] && props["#skillbar"].left) {
                            skillbarLeft = props["#skillbar"].left
                            skillbarTop = props["#skillbar"].top
                        }
                        skillbar.style.left = `${skillbarLeft}px`
                        skillbar.style.top = `${skillbarTop}px`
                        makeElementDraggable2(skillbar, "#skillbar")
 
                        const slots = skillbar.querySelectorAll(".slot")
                        const scaleBtn = document.createElement('button')
                        scaleBtn.textContent = "Change Size (Drag)"
                        // scaleBtn.style.height = scaleBtnHeight
                        // scaleBtn.style.width = scaleBtnWidth
                        scaleBtn.classList.add("grid", "right", "kek-ui-btn", "btn", "black", "textsecondary")
                        if(!props["UIMode"]) {
                            scaleBtn.style.display = "none"
                        }
 
                        for(let slot of slots) {
                            if(props["#skillbar .slot"] && props["#skillbar .slot"].height) {
                                slotHeight = props["#skillbar .slot"].height
                                slotWidth = props["#skillbar .slot"].width
                            }
                            slot.style.height = slotHeight + "px"
                            slot.style.width = slotWidth + "px"
                            makeElementScalable(slot, scaleBtn, "#skillbar .slot")
                        }
                        if(!skillbar.querySelector(".kek-ui-input")) {
                            const container = document.createElement("div")
                            container.style.display = "flex"
                            container.style.position = "absolute"
                            container.style.left = "10px"
                            container.style.top = "-50px"
                            // console.log("creating new slider for skill bar")
                            const inputField = document.createElement('input');
                            inputField.placeholder = "Skills per row?"
                            inputField.type = 'number';
                            inputField.value = skillsPerRow; // Initial value
                            inputField.title = "Skills per row"
                            inputField.classList.add('kek-ui-input', "input", "right");
                            scaleBtn.style.flex = 1
                            scaleBtn.title = "Hold and Drag to change size, (unstable scaling)"
                            inputField.style.flex = 1
                            container.appendChild(inputField);
                            container.appendChild(scaleBtn);
 
                            skillbar.appendChild(container);
                            // inputField.style.width = 200 + "px"
                            if(!props["UIMode"]) {
                                inputField.style.display = "none"
                            }
                            function handleInputField() {
                                // Update a variable based on the slider value
                                let inputValue = parseInt(inputField.value);
                                if(inputValue > 30) {
                                    inputField.value = 30
                                }
                                if(inputValue < 1) {
                                    inputField.value = 1
                                }
                                inputValue = parseInt(inputField.value)
                                skillbar.style.gridTemplateColumns = `repeat(${inputValue}, auto)`
                                props["skillsPerRow"] = parseInt(inputValue)
                                saveProps(props)
                            }
 
                            // Add an event listener for the slider input event
                            inputField.addEventListener('input', handleInputField);
                        }
 
                    } else {
                        // console.error("skillbar not found retrying every 100 ms")
                        setTimeout(handleSkillbar, 100)
                    }
                }
                // Function to make an element draggable
                function makeElementDraggable2(element, name) {
                    let isDragging = false;
 
                    element.style.position = 'absolute';
                    // element.style.cursor = 'pointer';
 
                    // Set initial position
                    let startX, startY;
                    let initialLeft = parseInt(element.style.left.split("px")[0]);
                    let initialTop = parseInt(element.style.top.split("px")[0]);
 
                    // Function to handle mouse down event
                    function handleMouseDown(event) {
                        element.classList.add("is-dragging")
                        // Set the initial position to the cursor's position
                        startX = event.clientX;
                        startY = event.clientY;
 
                        // Add event listeners for mouse move and mouse up events
                        document.addEventListener('mousemove', handleMouseMove);
                        document.addEventListener('mouseup', handleMouseUp);
                    }
 
                    // Function to handle mouse move event
                    function handleMouseMove(event) {
                        if (element.classList.contains("is-dragging") && !element.classList.contains("is-scaling") && !hasChildWithClass(element, "is-scaling") && !props["UILock"]) {
                            const deltaX = event.clientX - startX;
                            const deltaY = event.clientY - startY;
 
                            // Set the new position of the element
                            // console.log(initialLeft, deltaX, initialTop, deltaY, (initialLeft + deltaX) + 'px', (initialTop + deltaY) + 'px')
                            const newLeft = (initialLeft + deltaX)
                            const newTop = (initialTop + deltaY)
                            element.style.left = newLeft + 'px';
                            element.style.top = newTop + 'px';
 
                            if(!props[name]) {
                                props[name] = {}
                            }
                            props[name].left = newLeft
                            props[name].top = newTop
                        }
                    }
 
                    // Function to handle mouse up event
                    function handleMouseUp() {
                        // console.log(props)
                        saveProps(props)
                        element.classList.remove("is-dragging")
                        // Update initial position for the next drag
                        initialLeft = element.offsetLeft;
                        initialTop = element.offsetTop;
 
                        // Remove event listeners for mouse move and mouse up events
                        document.removeEventListener('mousemove', handleMouseMove);
                        document.removeEventListener('mouseup', handleMouseUp);
                    }
 
                    // Add event listener for mouse down event
                    element.addEventListener('mousedown', handleMouseDown);
                }
 
                function uiModeToggle() {
 
                    // Select all buttons with class 'kek-ui-btn'
                    const buttons = document.querySelectorAll('.kek-ui-btn');
                    const inputs = document.querySelectorAll(".kek-ui-input")
                    // Iterate through the selected buttons
                    buttons.forEach(button => {
                        // Toggle visibility by setting the 'display' style property
                        if (!props["UIMode"]) {
                            button.style.display = 'inline-block'; // Change to your desired display property
                        } else {
                            button.style.display = 'none';
                        }
                    });
                    inputs.forEach(input => {
                        // Toggle visibility by setting the 'display' style property
                        if (!props["UIMode"]) {
                            input.style.display = 'inline-block'; // Change to your desired display property
                        } else {
                            input.style.display = 'none';
                        }
                    });
                    props["UIMode"] = !props["UIMode"]
                    saveProps(props)
                }
 
                function uiLockToggle() {
                    props["UILock"] = !props["UILock"]
                    saveProps(props)
                    const lockBtn = document.querySelector(".lockUIKEK")
                    if(lockBtn) {
                        if(props["UILock"] == true) {
                            lockBtn.classList.add("textgreen")
                            lockBtn.classList.remove("textsecondary")
                        } else {
                            lockBtn.classList.remove("textgreen")
                            lockBtn.classList.add("textsecondary")
                        }
                    }
                }
 
                function uiMouseOverToggle() {
                    props["Mouse Over"] = !props["Mouse Over"]
                    saveProps(props)
                }
                // Function to handle mouseover event
                function handleMouseover(event) {
                    // Check if props["Mouse Over"] is true and the target element has the required class
                    // console.log(event.target)
                    const target = event.target
                    if (props["Mouse Over"]
                        && (target.classList.contains("bghealth") || target.classList.contains("left") || target.classList.contains("right"))
                       ) {
                        // Simulate a click on the element
                        // console.log(target)
                        // console.log(event.target.closest(".grid"), "inside")
                        event.target.click();
                    }
                }
 
                // Add mouseover event listener to the entire document
                document.addEventListener('mouseover', handleMouseover);
 
                function toggleClassColors() {
                    props["Disable Class Colors"] = !props["Disable Class Colors"]
                    saveProps(props)
                }
 
                function unblockPlayer(playerName) {
                    playerName = playerName.toLowerCase()
                    // Access or initialize blockedPlayers as a Set in props
                    props.blockedPlayers = new Set(props.blockedPlayers) || new Set();
 
                    // Check if playerName is in blockedPlayers
                    if (props.blockedPlayers.has(playerName)) {
                        // console.log(props.blockedPlayers)
                        // Remove playerName from blockedPlayers
                        props.blockedPlayers.delete(playerName);
                        props.blockedPlayers = Array.from(props.blockedPlayers)
                        saveProps(props);
                        // console.log(props);
                    }
                }
 
                function blockPlayer(playerName) {
                    // delete props.blockedPlayers
                    // saveProps(props)
                    // return;
                    playerName = playerName.toLowerCase()
                    // Access or initialize blockedPlayers as a Set in props
                    props.blockedPlayers = new Set(props.blockedPlayers) || new Set();
                    // Check if playerName is not already in blockedPlayers
                    if (!props.blockedPlayers.has(playerName)) {
                        // Add playerName to blockedPlayers
                        props.blockedPlayers.add(playerName);
                        props.blockedPlayers = Array.from(props.blockedPlayers)
                        saveProps(props)
                        // console.log(props);
                    }
                }
 
                function generateBlockedPlayerUI() {
                    if(!document.querySelector(".blockedPlayerMenuKEK")) {
                        const windowPanel = document.createElement('div');
                        windowPanel.className = 'window panel-black blockedPlayerMenuKEK';
                        windowPanel.style.position = "absolute"
                        windowPanel.style.left = "100px"
                        const titleFrame = document.createElement('div');
                        titleFrame.className = 'titleframe svelte-yjs4p5';
                        titleFrame.style.display = "flex"
                        titleFrame.style.justifyContent = "space-between";
 
                        const blockPlayerFrame = document.createElement("div")
                        blockPlayerFrame.className = "panel-black bar slot"
 
                        const title = document.createElement('div');
                        title.className = 'textprimary title svelte-yjs4p5';
                        title.style.width = "200px"
                        title.style.padding = "10px"
                        const titleContent = document.createElement("div")
                        titleContent.textContent = "Blocked Players"
                        title.appendChild(titleContent)
 
                        const blockedPlayersList = document.createElement('div');
                        blockedPlayersList.className = 'blocked-players-list panel-black bar slot';
 
                        const inputField = document.createElement('input');
                        inputField.type = 'text';
                        inputField.placeholder = 'Enter player name';
 
                        const blockButton = document.createElement('div');
                        blockButton.className = 'btn grey';
                        blockButton.textContent = 'Block Player';
                        blockButton.addEventListener('click', function () {
                            const playerName = inputField.value.trim();
                            if (playerName) {
                                blockPlayer(playerName);
                                inputField.value = ''; // Clear the input field
                                updateBlockedPlayersList();
                            }
                        });
 
                        // Add elements to the title frame
                        titleFrame.appendChild(title);
 
                        blockPlayerFrame.appendChild(inputField);
                        blockPlayerFrame.appendChild(blockButton);
 
                        // Add elements to the window panel
                        windowPanel.appendChild(titleFrame);
                        windowPanel.appendChild(blockPlayerFrame);
                        windowPanel.appendChild(blockedPlayersList);
                        const windowCross = document.createElement("img")
                        windowCross.src = "/data/ui/icons/cross.svg?v=8498194"
                        windowCross.className = "btn black svgicon"
                        titleFrame.appendChild(windowCross)
 
                        windowCross.addEventListener("click", () => {
                            windowPanel.remove()
                        })
                        const containerDiv = document.createElement("div")
                        containerDiv.className = "l-upperLeftModal container"
                        containerDiv.appendChild(windowPanel)
                        // Append the window panel to the body
                        document.body.appendChild(containerDiv);
 
                        // Update blocked players list
                        updateBlockedPlayersList();
 
                        // Function to update the blocked players list
                        function updateBlockedPlayersList() {
                            blockedPlayersList.innerHTML = ''; // Clear the list
                            const blockedPlayers = props.blockedPlayers;
 
                            if(blockedPlayers) {
                                const maxItemsPerRow = 7;
 
                                // Set the styles for the blockedPlayersList
                                blockedPlayersList.style.display = "grid";
                                blockedPlayersList.style.gridTemplateColumns = `repeat(${maxItemsPerRow}, auto)`;
 
                                // console.log(blockedPlayers)
                                for(let playerName of blockedPlayers) {
                                    const blockedPlayerItem = document.createElement('div');
                                    blockedPlayerItem.className = 'blocked-player-item btn grey';
                                    // blockedPlayerItem.style.padding = "15px"
                                    blockedPlayerItem.style.margin = "1px"
                                    blockedPlayerItem.style.display = "flex";
                                    blockedPlayerItem.style.justifyContent = "space-between";
                                    blockedPlayerItem.textContent = playerName;
 
                                    blockedPlayerItem.addEventListener('click', function () {
                                        unblockPlayer(playerName);
                                        updateBlockedPlayersList(); // Update the list after unblocking
                                    });
 
 
                                    blockedPlayersList.appendChild(blockedPlayerItem);
                                }
                            }
                        }
                    } else {
                        document.querySelector(".blockedPlayerMenuKEK").remove()
                    }
                }
 
                function togglePictureMode() {
                    const layout = document.querySelector(".l-ui.layout")
                    if(layout) {
                        if(layout.style.display !== "none") {
                            layout.style.display = "none"
                        } else {
                            layout.style.display = "grid"
                        }
                    }
                }
 
                function expBarToggle() {
                    showExpBar = !showExpBar
                    props["Show EXP"] = showExpBar
                    saveProps(props)
                    handleExpBar()
                }
 
                function handleKeyBinds() {
                    // Create a window panel-black container
                    const existingKeyBindWindow = document.querySelector(".keybindsKEK")
                    if(existingKeyBindWindow) {
                        existingKeyBindWindow.remove()
                        return;
                    }
                    const keyBindWindow = document.createElement('div');
                    keyBindWindow.className = 'window panel-black keybindsKEK';
                    keyBindWindow.style.position = 'absolute';
                    keyBindWindow.style.left = '200px';
                    keyBindWindow.style.top = '200px';
                    if(props[".keybinds"]) {
                        console.log("changing keybinds position", props[".keybinds"])
                        keyBindWindow.style.left = props[".keybinds"].left + "px" || keyBindWindow.style.top
                        keyBindWindow.style.top = props[".keybinds"].top + "px" || keyBindWindow.style.top
                    }
                    makeElementDraggable2(keyBindWindow, ".keybinds")
                    // Title frame
                    const titleFrame = document.createElement('div');
                    titleFrame.className = 'titleframe svelte-yjs4p5';
                    titleFrame.style.display = 'flex';
                    titleFrame.style.justifyContent = 'space-between';
 
                    const title = document.createElement('div');
                    title.className = 'textprimary title svelte-yjs4p5';
                    title.textContent = 'Keybinds'; // Replace with your title text
                    title.style.width = '200px';
                    title.style.padding = '10px';
                    title.style.fontSize = "15px"
 
                    const closeButton = document.createElement('img');
                    closeButton.src = '/data/ui/icons/cross.svg?v=8498194';
                    closeButton.className = 'btn black svgicon';
                    closeButton.style.padding = "5px"
                    closeButton.addEventListener('click', function () {
                        keyBindWindow.remove();
                    });
 
                    titleFrame.appendChild(title);
                    titleFrame.appendChild(closeButton);
                    keyBindWindow.appendChild(titleFrame);
                    // Create a panel black container for key binds
                    const keyBindContainer = document.createElement('div');
                    keyBindContainer.className = 'panel-black bar';
 
                    // Append the key bind container to the window container
                    keyBindWindow.appendChild(keyBindContainer);
 
                    // Iterate over keyBindsKEK object
                    for (const [feature, defaultKey] of Object.entries(keyBindsKEK)) {
                        // Create a flex column container for each key bind
                        const keyBindRow = document.createElement('div');
                        keyBindRow.className = 'key-bind-row';
                        keyBindRow.style.display = 'flex'; // Make it a flex container
                        keyBindRow.style.justifyContent = 'space-between'; // Align items to the left and right
 
                        // Create a button for each key bind key
                        const keyBindKeyButton = document.createElement('button');
                        keyBindKeyButton.className = 'btn black textsecondary';
                        keyBindKeyButton.style.fontSize = "15px"
                        keyBindKeyButton.textContent = feature;
 
                        // Create a button for each key bind value
                        const keyBindValueButton = document.createElement('button');
                        keyBindValueButton.className = 'btn black textprimary';
                        keyBindValueButton.style.textAlign = 'left'; // Align text to the left
                        keyBindKeyButton.style.textAlign = 'left'; // Align text to the left
 
                        keyBindKeyButton.style.width = "200px"
                        keyBindValueButton.style.width = "100px"
                        if(defaultKey !== "") {
                            keyBindValueButton.textContent = defaultKey.toUpperCase();
                        } else {
                            keyBindValueButton.textContent = "Not Set";
                        }
                        keyBindKeyButton.style.flex = 1
                        keyBindValueButton.style.flex = 1
                        // Add click event listener to the value button
                        keyBindValueButton.addEventListener('click', function () {
                            // Temporarily store the current key bind
                            const oldKey = keyBindsKEK[feature];
 
                            // Update the value button content to prompt the user
                            keyBindValueButton.textContent = `Enter key, Esc -> old`;
 
                            // Add keydown event listener to capture the new key
                            window.addEventListener('keydown', function handleKeyDown(event) {
                                const key = event.key.toLowerCase(); // Convert to lowercase for consistency
 
                                if (key.length === 1) {
                                    // Update the key bind object and save to localStorage
                                    keyBindsKEK[feature] = key;
                                    saveKeyBinds(keyBindsKEK);
 
                                    // Update the value button content with the new key
                                    keyBindValueButton.textContent = key.toUpperCase();
 
                                    // Remove the keydown event listener
                                    window.removeEventListener('keydown', handleKeyDown);
                                } else if (event.key === 'Escape') {
                                    // User pressed Escape, keep the old key
                                    keyBindsKEK[feature] = oldKey;
                                    saveKeyBinds(keyBindsKEK);
                                    if(oldKey == "") {
                                        keyBindValueButton.textContent = "Not Set";
                                    } else {
                                        keyBindValueButton.textContent = oldKey.toUpperCase();
                                    }
                                    window.removeEventListener('keydown', handleKeyDown);
                                }
                            });
 
                            // Function to handle keydown event
                            function handleKeyDown(event) {
                                event.preventDefault(); // Prevent the default behavior of some keys
                            }
 
                            // Add the keydown event listener
                            window.addEventListener('keydown', handleKeyDown);
                        });
 
                        // Append key bind key and value buttons to the flex row container
                        keyBindRow.appendChild(keyBindKeyButton);
                        keyBindRow.appendChild(keyBindValueButton);
 
                        // Append the flex column container to the key bind container
                        keyBindContainer.appendChild(keyBindRow);
                    }
 
                    // Append the key bind window to the .layout element in the document
                    const layoutElement = document.querySelector('.layout');
                    if (layoutElement) {
                        layoutElement.appendChild(keyBindWindow);
                    }
                }
 
                function handleExportUI(event) {
                    try {
                        const target = event.target
                        if(target.classList.contains("choice-item") && !target.classList.contains("exportActive")) {
                            target.classList.add("exportActive")
                            // Retrieve saved props for all players from the new structure
                            const savedKekPropsString = localStorage.getItem('savedKekProps');
                            const savedKekProps = JSON.parse(savedKekPropsString) || {};
 
                            // Create buttons for each player
                            const playerButtons = Object.keys(savedKekProps).map(player => {
                                const button = document.createElement('button');
                                button.className = 'btn black textsecondary';
                                button.style.padding = "1px"
                                button.style.marginLeft = "2px"
                                button.style.fontSize = "15px"
                                button.textContent = player;
                                button.addEventListener('click', function () {
                                    // Copy the corresponding player's props to the clipboard using Clipboard API
                                    const propsString = JSON.stringify(savedKekProps[player]);
                                    // console.log(propsString)
                                    navigator.clipboard.writeText(propsString).then(() => {
                                        // Change the button text to "Copied!" for a brief moment
                                        const oldText = button.textContent;
                                        button.textContent = "Copied!";
                                        setTimeout(() => {
                                            button.textContent = oldText;
                                        }, 1000);
                                    }).catch((error) => {
                                        console.error('Error copying to clipboard:', error);
                                    });
                                });
                                return button;
                            });
 
                            // Append the buttons to the document body
                            playerButtons.forEach(button => {
                                event.target.appendChild(button);
                            });
                        }
                    } catch (error) {
                        console.error('Error exporting props:', error);
                    }
                }
 
                function handleImportUI(event) {
                    const target = event.target
                    if(target.classList.contains("choice-item") && !target.classList.contains("inputActiveKEK")) {
                        target.classList.add("inputActiveKEK")
                        // console.log(event.target)
                        // Create a container for the textarea and the "Import" button
                        const container = document.createElement('div');
 
                        // Create a text area for user input
                        const textarea = document.createElement('textarea');
                        textarea.placeholder = 'Paste your configuration here...';
                        textarea.style.width = '300px';
                        textarea.style.height = '150px';
 
                        // Create an "Import" button
                        const importButton = document.createElement('button');
                        importButton.className = "btn black";
                        const importSpan = document.createElement("span");
                        importSpan.classList.add("textsecondary");
                        importSpan.textContent = "Import";
 
                        const importFailSpan = document.createElement("span");
                        importFailSpan.classList.add("textsecondary");
                        importFailSpan.textContent = "Import Failed!";
 
                        const importSuccessSpan = document.createElement("span");
                        importSuccessSpan.classList.add("textsecondary");
                        importSuccessSpan.textContent = "Import Success!";
 
                        importButton.appendChild(importSpan);
                        importButton.style.padding = "10px";
                        importButton.style.height = ""
 
                        event.target.appendChild(textarea);
                        event.target.appendChild(importButton);
 
                        const removeDelay = 1000
                        // Add event listener to handle the "Import" button
                        importButton.addEventListener('click', function() {
                            const importData = textarea.value.trim();
                            if (!importData) {
                                textarea.remove()
                                importButton.innerHTML = importFailSpan.outerHTML
 
                                setTimeout(() => {
                                    importButton.remove()
                                    target.classList.remove("inputActiveKEK")
                                }, removeDelay);
                                return; // Exit if no data is provided
                            }
 
                            try {
                                // Parse the import data into an object
                                const importedProps = JSON.parse(importData);
                                console.log(importedProps)
                                if (importedProps && typeof importedProps === 'object') {
                                    // Update the props variable
                                    props = importedProps;
 
                                    // Save the updated props
                                    saveProps(props);
 
                                    // Log or notify about the successful import
                                    console.log('Configuration imported successfully.');
 
                                    // Change the button text to "Imported!" for a brief moment
                                    importButton.innerHTML = importSuccessSpan.outerHTML
                                    textarea.remove()
                                    setTimeout(() => {
                                        importButton.remove()
                                        target.classList.remove("inputActiveKEK")
                                    }, removeDelay);
 
                                } else {
                                    textarea.remove()
                                    importButton.innerHTML = importFailSpan.outerHTML
 
 
                                    setTimeout(() => {
                                        importButton.remove()
                                        target.classList.remove("inputActiveKEK")
                                    }, removeDelay);
 
                                    console.log("NOT AN OBJECT");
                                }
                            } catch (error) {
                                textarea.remove()
                                importButton.innerHTML = importFailSpan.outerHTML
 
 
                                setTimeout(() => {
                                    importButton.remove()
                                    target.classList.remove("inputActiveKEK")
                                }, removeDelay);
 
                                console.error('Error parsing or importing configuration:', error);
                                // Handle error, e.g., notify the user about the incorrect format
                            }
                        });
                    }
                }
 
                const menuFunctions = {
                    "UIMode": uiModeToggle,
                    "UILock": uiLockToggle,
                    "Mouse Over": uiMouseOverToggle,
                    "Show EXP": expBarToggle,
                    "Picture Mode": togglePictureMode,
                    "Blocked Players": generateBlockedPlayerUI,
                    "Emoji": generateEmojiUI,
                    "Disable Class Colors": toggleClassColors,
                    "Rune Tracker": handleRuneTrackerUI,
                    "Keybinds": handleKeyBinds,
                    "ExportUI": handleExportUI,
                    "ImportUI": handleImportUI,
                    "ResetUI": clearSavedProps,
                }
 
                function generateMenuForUI() {
                    document.addEventListener('keydown', function (event) {
                        const focusedElement = document.activeElement;
 
                        // Check if the focused element is an input field
                        if (focusedElement.tagName === 'INPUT' || focusedElement.tagName === 'TEXTAREA') {
                            return;
                        }
                        const toggleKey = keyBindsKEK["Main Menu"]
                        if (event.key === toggleKey || event.key === toggleKey.toUpperCase) {
                            event.preventDefault();
 
                            let contextMenu = document.querySelector(".kek-ui-mainmenu");
 
                            if (contextMenu) {
                                contextMenu.remove();
                                return
                            }
 
                            const screenWidth = window.innerWidth || document.documentElement.clientWidth;
                            const screenHeight = window.innerHeight || document.documentElement.clientHeight;
                            let centerX = screenWidth / 2;
                            let centerY = screenHeight / 2;
 
                            contextMenu = document.createElement('div');
                            contextMenu.className = 'widow panel-black border black kek-ui-mainmenu';
                            contextMenu.style.position = 'absolute';
                            if(props[".kek-ui-menu"]) {
                                centerX = props[".kek-ui-menu"].left || centerX
                                centerY = props[".kek-ui-menu"].top || centerY
                            }
                            contextMenu.style.left = `${centerX}px`;
                            contextMenu.style.top = `${centerY}px`;
 
                            // Title frame
                            const titleFrame = document.createElement('div');
                            titleFrame.className = 'titleframe svelte-yjs4p5';
                            titleFrame.style.display = 'flex';
                            titleFrame.style.justifyContent = 'space-between';
 
                            const title = document.createElement('div');
                            title.className = 'textprimary title svelte-yjs4p5';
                            title.textContent = 'UI Menu'; // Replace with your title text
                            title.style.width = '200px';
                            title.style.padding = '10px';
                            title.style.fontSize = "20px"
 
                            const closeButton = document.createElement('img');
                            closeButton.src = '/data/ui/icons/cross.svg?v=8498194';
                            closeButton.className = 'btn black svgicon';
                            closeButton.style.padding = "5px"
                            closeButton.addEventListener('click', function () {
                                contextMenu.remove();
                            });
 
                            titleFrame.appendChild(title);
                            titleFrame.appendChild(closeButton);
                            contextMenu.appendChild(titleFrame);
 
                            const panelBlackBar = document.createElement("div")
                            panelBlackBar.className = "panel-black bar"
                            // Hardcoded choices
                            const choices = ['UIMode', "UILock", "Mouse Over", "Show EXP", "Blocked Players", "Emoji", "Picture Mode", "Disable Class Colors", "Rune Tracker",
                                             "Keybinds", "ExportUI", "ImportUI", "....", "ResetUI"];
 
                            // Add choices to the context menu
                            choices.forEach(choiceText => {
                                const choiceElement = document.createElement('div');
                                choiceElement.className = 'choice-item btn black textsecondary'; // Updated class to "choice-item"
                                choiceElement.textContent = choiceText;
                                choiceElement.style.padding = "5px"
                                choiceElement.style.fontSize = "15px"
                                if (props[choiceText]) {
                                    choiceElement.classList.add("textgreen");
                                }
 
                                // Add event listener to each choice (modify as needed)
                                choiceElement.addEventListener('click', function (event) {
                                    if (menuFunctions[choiceText]) {
                                        menuFunctions[choiceText](event);
                                        // Add your specific logic here
                                        // contextMenu.remove()
                                        if(props[choiceText]) {
                                            choiceElement.classList.add("textgreen")
                                        } else {
                                            choiceElement.classList.remove("textgreen")
                                        }
                                    }
                                });
 
                                panelBlackBar.appendChild(choiceElement);
                            });
 
                            contextMenu.appendChild(panelBlackBar)
                            contextMenu.style.zIndex = 9999
                            // Append the context menu to the specified element
                            const targetElement = document.querySelector('body');
 
                            if (targetElement) {
                                targetElement.appendChild(contextMenu);
                            }
 
                            // Close the context menu if the user clicks outside of it
                            makeElementDraggable2(contextMenu, ".kek-ui-menu")
                        }
                    });
                }
 
                function handleExpBar() {
                    const expBar = document.querySelector("#expbar")
                    if(expBar) {
                        if(props["Show EXP"] !== null) {
                            showExpBar = props["Show EXP"]
                        }
                        if(showExpBar) {
                            expBar.style.display = "inline"
                        } else {
                            expBar.style.display = "none"
                        }
                    } else {
                        setTimeout(handleExpBar, 100)
                    }
                }
 
                function getEmojis() {
                    // Retrieve saved emojis from local storage
                    let savedKekEmojisString = localStorage.getItem('savedKekEmojis');
                    let savedKekEmojis = JSON.parse(savedKekEmojisString);
 
                    // Update savedKekEmojis with props.emoji if it's not empty
                    if (!savedKekEmojis && props.emoji && Object.keys(props.emoji).length > 0) {
                        savedKekEmojis = props.emoji;
 
                        // Save the updated savedKekEmojis to local storage
                        localStorage.setItem('savedKekEmojis', JSON.stringify(savedKekEmojis));
                    }
 
                    // If savedKekEmojis is still empty, use emoteDictionary
                    if (!savedKekEmojis || Object.keys(savedKekEmojis).length === 0) {
                        savedKekEmojis = emoteDictionary;
 
                        // Save the default emojis to local storage
                        localStorage.setItem('savedKekEmojis', JSON.stringify(savedKekEmojis));
                    }
 
                    return savedKekEmojis;
                }
 
                function generateEmojiUI() {
                    // Check if the emoji UI already exists
                    if (!document.querySelector(".emojiMenuKEK")) {
                        const windowPanel = document.createElement('div');
                        windowPanel.className = 'window panel-black emojiMenuKEK';
                        windowPanel.style.position = "absolute";
 
                        const titleFrame = document.createElement('div');
                        titleFrame.className = 'titleframe svelte-yjs4p5';
                        titleFrame.style.display = "flex";
                        titleFrame.style.justifyContent = "space-between";
 
                        const emojiList = document.createElement('div');
                        emojiList.className = 'emoji-list panel-black bar slot';
                        emojiList.style.display = "grid";
                        emojiList.style.gridTemplateColumns = "repeat(10, auto)";
 
                        const inputField = document.createElement('input');
                        inputField.type = 'text';
                        inputField.placeholder = 'Paste emoji';
                        // Style the input fields for side-by-side placement
                        inputField.style.marginRight = '10px';
 
                        const emojiNameField = document.createElement('input');
                        emojiNameField.type = 'text';
                        emojiNameField.placeholder = 'Enter emoji name';
 
                        const saveButton = document.createElement('div');
                        saveButton.className = 'btn black textsecondary';
                        saveButton.textContent = 'Save Emoji';
                        saveButton.addEventListener('click', function () {
                            const emoji = inputField.value.trim();
                            const emojiName = emojiNameField.value.trim();
 
                            if (emoji && emojiName) {
                                saveEmoji(emoji, emojiName);
                                inputField.value = ''; // Clear the input fields
                                emojiNameField.value = '';
                                updateEmojiList();
                            }
                        });
 
                        // Add elements to the title frame
                        const title = document.createElement('div');
                        title.className = 'textprimary title svelte-yjs4p5';
                        title.style.width = "200px";
                        title.style.padding = "10px";
                        title.textContent = "Emojis";
 
                        titleFrame.appendChild(title);
 
                        // Add elements to the window panel
                        windowPanel.appendChild(titleFrame);
                        // Add "Export" button
                        const exportButton = document.createElement('div');
                        exportButton.className = 'btn black textsecondary';
                        exportButton.textContent = 'Export Emojis';
                        exportButton.addEventListener('click', function (event) {
                            handleExportEmojis(event);
                        });
 
                        // Add "Import" button
                        const importButtonMain = document.createElement('div');
                        importButtonMain.className = 'btn black textsecondary';
                        importButtonMain.textContent = 'Import Emojis';
 
                        importButtonMain.addEventListener('click', function importEmojiBtn(event) {
                            if(importButtonMain.classList.contains("importActive")) {
                                return;
                            }
                            importButtonMain.classList.add("importActive")
                            handleImportEmojis(event);
                            updateEmojiList()
                        });
 
                        const inputContainer = document.createElement('div');
                        inputContainer.style.display = 'flex'; // Set display to flex
                        inputContainer.appendChild(inputField);
                        inputContainer.appendChild(emojiNameField);
 
                        const btnContainer = document.createElement('div');
                        btnContainer.style.display = 'flex'; // Set display to flex
 
                        btnContainer.appendChild(saveButton);
                        btnContainer.appendChild(exportButton);
                        btnContainer.appendChild(importButtonMain);
 
                        saveButton.style.flex = '1';
                        exportButton.style.flex = '1';
                        importButtonMain.style.flex = '1';
 
                        exportButton.style.textAlign = 'center';
                        importButtonMain.style.textAlign = 'center';
                        saveButton.style.textAlign = 'center';
 
                        inputContainer.style.marginBottom = "10px"
                        btnContainer.style.marginBottom = "10px"
 
                        windowPanel.appendChild(inputContainer);
                        windowPanel.appendChild(btnContainer)
                        windowPanel.appendChild(emojiList);
 
                        const windowCross = document.createElement("img");
                        windowCross.src = "/data/ui/icons/cross.svg?v=8498194";
                        windowCross.className = "btn black svgicon";
                        titleFrame.appendChild(windowCross);
 
                        windowCross.addEventListener("click", () => {
                            windowPanel.remove();
                        });
 
                        const containerDiv = document.createElement("div");
                        containerDiv.className = "l-upperLeftModal container";
                        containerDiv.appendChild(windowPanel);
 
                        let left = 100
                        let top = 100
                        if(props[".emojiMenuKEK"]) {
                            left = props[".emojiMenuKEK"].left || left
                            top = props[".emojiMenuKEK"].top || top
                        }
                        containerDiv.style.left = `${left}px`;
                        containerDiv.style.top = `${top}px`;
                        makeElementDraggable2(containerDiv, ".emojiMenuKEK")
                        // Append the window panel to the body
                        document.body.appendChild(containerDiv);
 
                        // Update emoji list
                        updateEmojiList();
 
                        // Function to update the emoji list
                        function updateEmojiList() {
                            emojiList.innerHTML = ''; // Clear the list
                            const emojiDictionary = getEmojis()
 
                            for (let emojiName in emojiDictionary) {
                                const emoji = emojiDictionary[emojiName];
 
                                const emojiItem = document.createElement('div');
                                emojiItem.className = 'emoji-item btn black textsecondary';
                                const emojiNameSpan = document.createElement("span")
                                emojiNameSpan.classList.add("textsecondary")
                                emojiNameSpan.textContent = emojiName
 
                                const emojiSpan = document.createElement("span")
                                emojiSpan.classList.add("textsecondary")
                                emojiSpan.textContent = emoji
 
                                emojiItem.appendChild(emojiNameSpan)
                                emojiItem.appendChild(emojiSpan)
                                emojiItem.style.display = "flex"
                                emojiItem.style.justifyContent = "space-between"
 
                                emojiItem.addEventListener('contextmenu', function (e) {
                                    e.preventDefault()
                                    // console.log("deleting item ", emojiName)
                                    deleteEmoji(emojiName);
                                    updateEmojiList(); // Update the list after deletion
                                });
                                emojiItem.addEventListener('click', function (e) {
                                    // Copy to clipboard
                                    navigator.clipboard.writeText(emoji)
                                        .then(function () {
                                        console.log("Copying item ", emoji);
 
                                        const oldContent = emojiItem.innerHTML
                                        // Change text content to "Copied"
                                        emojiItem.textContent = "Copied!";
                                        emojiItem.classList.add("textgreen")
                                        // Revert back to original content after 500ms
                                        setTimeout(function () {
                                            emojiItem.innerHTML = oldContent;
                                            emojiItem.classList.remove("textgreen")
                                        }, 500);
                                    })
                                        .catch(function (err) {
                                        console.error('Unable to copy text to clipboard', err);
                                    });
                                });
 
                                emojiList.appendChild(emojiItem);
                            }
                        }
 
                        function saveEmoji(emoji, emojiName) {
                            // Initialize emojis in local storage if it doesn't exist
                            const savedKekEmojisString = localStorage.getItem('savedKekEmojis');
                            const savedKekEmojis = JSON.parse(savedKekEmojisString) || {};
 
                            // Save emoji to local storage
                            savedKekEmojis[emojiName] = emoji;
                            localStorage.setItem('savedKekEmojis', JSON.stringify(savedKekEmojis));
 
                        }
 
                        function deleteEmoji(emojiName) {
                            // Initialize emojis in local storage if it doesn't exist
                            const savedKekEmojisString = localStorage.getItem('savedKekEmojis');
                            const savedKekEmojis = JSON.parse(savedKekEmojisString) || {};
 
                            // Check if the emoji exists in local storage
                            if (savedKekEmojis && savedKekEmojis[emojiName]) {
                                // Delete emoji from local storage
                                delete savedKekEmojis[emojiName];
                                localStorage.setItem('savedKekEmojis', JSON.stringify(savedKekEmojis));
                            }
                        }
 
                        function handleExportEmojis(event) {
                            try {
                                // Retrieve saved emojis from local storage
                                const savedKekEmojisString = localStorage.getItem('savedKekEmojis');
                                const savedKekEmojis = JSON.parse(savedKekEmojisString);
 
                                if (savedKekEmojis && Object.keys(savedKekEmojis).length > 0) {
                                    // Convert emojis to a string
                                    const emojisString = JSON.stringify(savedKekEmojis);
 
                                    // Use the Clipboard API to copy the emojis to the clipboard
                                    navigator.clipboard.writeText(emojisString).then(() => {
                                        // Log or notify about the successful copy
                                        console.log('Emojis copied to clipboard successfully.');
 
                                        // Apply textgreen style and change text content to "Copied!"
                                        const oldText = event.target.textContent;
                                        event.target.textContent = 'Copied!';
                                        event.target.classList.add('textgreen');
                                        setTimeout(() => {
                                            // Change text content back to the original after one second
                                            event.target.textContent = oldText;
                                            event.target.classList.remove('textgreen');
                                        }, 1000);
                                    }).catch((error) => {
                                        console.error('Error copying emojis to clipboard:', error);
                                    });
                                } else {
                                    console.log('No emojis to export.');
                                }
                            } catch (error) {
                                console.error('Error exporting emojis:', error);
                            }
                        }
 
                        function handleImportEmojis(event) {
                            try {
                                // Open a text area for user input
                                const textarea = document.createElement('textarea');
                                textarea.placeholder = 'Paste your emojis here...';
 
                                // Create an "Import" button
                                const importButton = document.createElement('button');
                                importButton.className = 'btn black textsecondary';
                                importButton.textContent = 'Import';
 
                                const container = document.createElement('div');
                                container.style.display = 'flex'; // Set display to flex
                                container.style.marginBottom = "10px"
 
                                textarea.style.flex = "1"
                                importButton.style.flex = "1"
                                importButton.style.fontSize = "16px"
                                container.appendChild(textarea)
                                container.appendChild(importButton)
 
                                // Append the text area and button to the menu item (event.target)
                                event.target.parentNode.parentNode.insertBefore(container, emojiList);
 
                                // Add event listener to handle the "Import" button
                                importButton.addEventListener('click', function () {
                                    event.stopPropagation();
                                    importButtonMain.classList.remove("importActive")
                                    const importData = textarea.value.trim();
 
                                    if (!importData) {
                                        importButton.textContent = 'Failed!';
 
                                        // Remove the text area and import button
                                        textarea.remove();
                                        setTimeout(() => {
                                            // Reset the button text to "Import Emojis"
                                            importButton.remove();
                                            container.remove()
                                        }, 1000);
                                        return; // Exit if no data is provided
                                    }
 
                                    try {
                                        // Parse the import data into an object
                                        const importedEmojis = JSON.parse(importData);
 
                                        if (importedEmojis && typeof importedEmojis === 'object') {
                                            // Retrieve existing emojis from local storage
                                            const savedKekEmojisString = localStorage.getItem('savedKekEmojis');
                                            const savedKekEmojis = JSON.parse(savedKekEmojisString) || {};
 
                                            // Merge imported emojis with existing emojis
                                            const mergedEmojis = { ...savedKekEmojis, ...importedEmojis };
 
                                            // Save the updated emojis to local storage
                                            localStorage.setItem('savedKekEmojis', JSON.stringify(mergedEmojis));
 
                                            // Log or notify about the successful import
                                            console.log('Emojis imported successfully.');
 
                                            // Change the button text to "Successful!" for a brief moment
                                            importButton.textContent = 'Successful!';
                                            importButton.classList.add("textgreen")
                                            // Remove the text area and import button
                                            textarea.remove();
                                            setTimeout(() => {
                                                // Reset the button text to "Import Emojis"
 
                                                importButton.remove();
                                                container.remove()
 
                                            }, 1000);
                                        } else {
                                            console.error('Invalid emojis data format.');
                                            // Change the button text to "Failed!" for a brief moment
                                            importButton.textContent = 'Failed!';
                                            // Remove the text area and import button
                                            textarea.remove();
                                            setTimeout(() => {
                                                // Reset the button text to "Import Emojis"
                                                importButton.remove();
                                                container.remove()
 
                                            }, 1000);
                                        }
                                    } catch (error) {
                                        importSpan.textContent = 'Failed!';
 
                                        // Remove the text area and import button
                                        textarea.remove();
                                        setTimeout(() => {
                                            // Reset the button text to "Import Emojis"
                                            importSpan.textContent = 'Import Emojis';
 
                                            importButton.remove();
                                            container.remove()
 
                                        }, 1000);
                                        // console.error('Error parsing or importing emojis:', error);
                                        // Handle error, e.g., notify the user about the incorrect format
                                    }
                                });
                            } catch (error) {
                                console.error('Error setting up emojis import:', error);
                            }
                        }
                    }
                    else {
                        document.querySelector(".emojiMenuKEK").remove()
                    }
                }
 
                function handleGloomTimers() {
                    let gloomTimerVisible = false;
                    let timerInterval;
 
                    function calculateTimeUntilNextGloom(currentTimeUTC, gloomSchedule) {
                        const currentHour = currentTimeUTC.getUTCHours();
                        const currentMinutes = currentTimeUTC.getUTCMinutes();
 
                        let nextGloomIndex = 0;
                        for (let i = 0; i < gloomSchedule.length; i++) {
                            if (currentHour < gloomSchedule[i] || (currentHour === gloomSchedule[i] && currentMinutes < 60)) {
                                nextGloomIndex = i;
                                break;
                            }
                        }
 
                        let hoursUntilNextGloom = gloomSchedule[nextGloomIndex] - currentHour;
                        let minutesUntilNextGloom = 60 - currentMinutes;
 
                        if (minutesUntilNextGloom > 0) {
                            hoursUntilNextGloom -= 1;
                        }
 
                        const secondsUntilNextGloom = 60 - currentTimeUTC.getUTCSeconds();
 
                        return {
                            hours: hoursUntilNextGloom,
                            minutes: minutesUntilNextGloom,
                            seconds: secondsUntilNextGloom,
                        };
                    }
 
                    function updateGloomTime() {
                        const currentTimeUTC = new Date();
                        const gloomSchedule = [1, 4, 7, 10, 13, 16, 19, 22]; // Replace with your gloom schedule in UTC
                        const timeUntilNextGloom = calculateTimeUntilNextGloom(currentTimeUTC, gloomSchedule);
                        if(timeUntilNextGloom.hours < 0) {
                            timeUntilNextGloom.hours  += 3
                        }
                        return `${timeUntilNextGloom.hours}h ${timeUntilNextGloom.minutes}m ${timeUntilNextGloom.seconds}s`;
                    }
                    function updateObeliskTime() {
                        const currentTime = new Date();
                        const gloomSchedule = [1, 4, 7, 10, 13, 16, 19, 22]; // Replace with your gloom schedule in local time
                        const timeUntilNextGloom = calculateTimeUntilNextGloom(currentTime, gloomSchedule);
 
                        // Adjusting obelisk time by subtracting one hour from gloom time
                        let hoursUntilNextObelisk = timeUntilNextGloom.hours - 1;
                        const minutesUntilNextObelisk = timeUntilNextGloom.minutes;
                        const secondsUntilNextObelisk = timeUntilNextGloom.seconds;
 
                        if (hoursUntilNextObelisk < 0) {
                            hoursUntilNextObelisk = 3 - Math.abs(hoursUntilNextObelisk);
                        }
 
                        return `${hoursUntilNextObelisk}h ${minutesUntilNextObelisk}m ${secondsUntilNextObelisk}s`;
                    }
                    function createGloomDiv() {
                        const focusedElement = document.activeElement;
 
                        // Check if the focused element is an input field
                        if (focusedElement.tagName === 'INPUT' || focusedElement.tagName === 'TEXTAREA') {
                            return;
                        }
 
                        if (gloomTimerVisible) {
                            const gloomDiv = document.querySelector('.gloomTimer');
                            if (gloomDiv) {
                                gloomDiv.remove();
                            }
                            gloomTimerVisible = false;
                            clearInterval(timerInterval);
                        } else {
                            const gloomDiv = document.createElement('div');
                            gloomDiv.className = 'window panel-black svelte-yjs4p5 border black gloomTimer';
                            gloomDiv.style.borderRadius = '3%';
                            gloomDiv.style.position = 'absolute';
                            gloomDiv.style.top = '100px';
                            gloomDiv.style.left = '100px';
                            if(props[".gloomTimer"]) {
                                gloomDiv.style.top = props[".gloomTimer"].top + "px" || gloomDiv.style.top
                                gloomDiv.style.left = props[".gloomTimer"].left + "px" || gloomDiv.style.left
                            }
                            const titleFrame = document.createElement('div');
                            titleFrame.className = 'titleframe svelte-yjs4p5';
 
                            const title = document.createElement('div');
                            title.className = 'textprimary title svelte-yjs4p5';
                            title.innerHTML = '<div>Gloom Time</div>';
                            title.style.fontSize = "1.2em"
 
                            const closeButton = document.createElement('img');
                            closeButton.src = '/data/ui/icons/cross.svg?v=8498194';
                            closeButton.className = 'btn black svgicon';
                            closeButton.addEventListener('click', () => {
                                createGloomDiv(); // Toggle visibility on button click
                            });
                            const slot = document.createElement('div');
                            slot.className = 'slot svelte-yjs4p5';
                            slot.classList.add("bgblack")
                            slot.style.borderRadius = "2%"
                            const container = document.createElement('div');
                            container.className = 'container svelte-uxs0uj';
 
                            const gloomTimeDiv = document.createElement('h3');
                            gloomTimeDiv.className = 'textsecondary name svelte-uxs0uj';
                            gloomTimeDiv.textContent = `Next Gloom: ${updateGloomTime()}`;
 
                            const obeliskTimeDiv = document.createElement('h3');
                            obeliskTimeDiv.className = 'textsecondary name svelte-uxs0uj';
                            obeliskTimeDiv.textContent = `Next Obelisk: ${updateObeliskTime()}`;
 
                            container.appendChild(gloomTimeDiv);
                            container.appendChild(obeliskTimeDiv)
                            slot.appendChild(container);
                            titleFrame.appendChild(title);
                            titleFrame.appendChild(closeButton);
                            gloomDiv.appendChild(titleFrame);
                            gloomDiv.appendChild(slot);
                            document.body.appendChild(gloomDiv);
                            gloomDiv.style.height = "20%"
                            gloomDiv.style.zIndex = 20
                            timerInterval = setInterval(() => {
                                if (gloomTimerVisible) {
                                    gloomTimeDiv.textContent = `Next Gloom: ${updateGloomTime()}`;
                                    obeliskTimeDiv.textContent = `Next Obelisk: ${updateObeliskTime()}`
                                }
                            }, 1000);
 
                            gloomTimerVisible = true;
                            makeElementDraggable2(gloomDiv, ".gloomTimer")
                        }
                    }
 
                    document.addEventListener('keydown', function (event) {
                        const toggleKey = keyBindsKEK["Gloom Timer"]
                        if (event.key === toggleKey.toUpperCase() || event.key === toggleKey) {
                            createGloomDiv();
                        }
                    });
                }
 
                // Add UI elements for saving and loading presets
                function addPresetsUI(skillsMenu) {
                    const ufplayer = document.querySelector("#ufplayer")
                    if(ufplayer) {
                        const playerName = ufplayer.querySelector(".left").textContent
                        console.log("skills menu found initializing preset functionality for " + playerName);
                        if (skillsMenu) {
                            // Function to save presets to localStorage
                            function savePreset(playerName, presetName, skillPoints) {
                                if(!skillPoints) {
                                    skillPoints = getSkillPoints();
                                }
                                const presets = JSON.parse(localStorage.getItem('skillPresets')) || {};
 
                                // Use playerName as part of the key
                                presets[playerName] = presets[playerName] || {};
                                presets[playerName][presetName] = skillPoints;
 
                                localStorage.setItem('skillPresets', JSON.stringify(presets));
                                updatePresetList();
                            }
 
                            // Function to import presets
                            function importPreset(event, playerName, importedData) {
                                event.stopPropagation()
                                const target = event.target
                                try {
                                    const parsedData = JSON.parse(importedData);
                                    // Validate the imported data format as needed
                                    if (validateImportedData(parsedData)) {
                                        // Extract presetName and skillPoints from the parsed data
                                        const presetName = Object.keys(parsedData)[0];
                                        const skillPoints = parsedData[presetName];
 
                                        // Call the savePreset function with the imported data
                                        savePreset(playerName, presetName, skillPoints);
                                        updatePresetList();
                                        target.textContent = "Saved!"
                                        setTimeout(() => {
                                            target.textContent = "Import"
                                        }, 500)
                                    } else {
                                        target.textContent = "Failed!"
                                        setTimeout(() => {
                                            target.textContent = "Import"
                                        }, 500)
                                    }
                                } catch (error) {
                                    target.textContent = "Failed!"
                                    setTimeout(() => {
                                        target.textContent = "Import"
                                    }, 500)
                                }
                            }
                            // Function to validate the imported data format
                            function validateImportedData(importedData) {
                                return (
                                    importedData &&
                                    typeof importedData === 'object' &&
                                    Object.keys(importedData).length === 1 &&
                                    typeof importedData[Object.keys(importedData)[0]] === 'object'
                                );
                            }
                            // Function to copy the preset to the clipboard using Clipboard API
                            async function copyPresetToClipboard(playerName, presetName) {
                                const presets = JSON.parse(localStorage.getItem('skillPresets')) || {};
                                const playerPresets = presets[playerName] || {};
                                let skillPoints = {}
                                skillPoints[presetName] = playerPresets[presetName];
 
                                if (skillPoints) {
                                    // Convert skillPoints to a string (customize this based on your data structure)
                                    const skillPointsString = JSON.stringify(skillPoints);
 
                                    try {
                                        // Use Clipboard API to copy the skillPointsString to the clipboard
                                        await navigator.clipboard.writeText(skillPointsString);
                                        console.log(`Preset "${presetName}" copied to clipboard for ${playerName}!`);
                                    } catch (error) {
                                        console.error('Unable to copy to clipboard:', error);
                                    }
                                } else {
                                    alert(`Preset "${presetName}" not found for ${playerName}.`);
                                }
                            }
                            // Function to load presets from localStorage
                            function loadPreset(playerName, presetName) {
                                const presets = JSON.parse(localStorage.getItem('skillPresets')) || {};
                                const playerPresets = presets[playerName] || {};
                                const skillPoints = playerPresets[presetName];
 
                                if (skillPoints) {
                                    setSkillPoints(skillPoints);
                                    console.log(`Preset "${presetName}" loaded successfully for ${playerName}!`);
                                } else {
                                    alert(`Preset "${presetName}" not found for ${playerName}.`);
                                }
                            }
                            // Function to delete a preset from localStorage
                            function deletePreset(playerName, presetName) {
                                const presets = JSON.parse(localStorage.getItem('skillPresets')) || {};
                                const playerPresets = presets[playerName] || {};
 
                                if (playerPresets[presetName]) {
                                    delete playerPresets[presetName];
                                    localStorage.setItem('skillPresets', JSON.stringify(presets));
                                    updatePresetList(); // Update the preset list after deletion
                                    console.log(`Preset "${presetName}" deleted successfully for ${playerName}!`);
                                } else {
                                    alert(`Preset "${presetName}" not found for ${playerName}.`);
                                }
                            }
                            // Function to update the preset list
                            function updatePresetList() {
                                presetList.innerHTML = ''; // Clear the preset list
                                const playerPresets = JSON.parse(localStorage.getItem('skillPresets')) || {};
                                const presets = playerPresets[playerName];
 
                                const container = document.createElement('div');
                                container.style.overflow = 'hidden'; // Enable scrolling
                                container.style.maxHeight = '350px'; // Set the maximum height for the container
                                // Add event listeners to handle scrolling
                                container.addEventListener('wheel', (event) => {
                                    // Adjust the scrollTop property based on your scrolling logic
                                    container.scrollTop += event.deltaY;
                                });
                                for (const presetName in presets) {
                                    const flexContainer = document.createElement('div');
                                    flexContainer.className = 'preset-flex-container'; // Apply styling for the flex container
                                    flexContainer.style.display = 'flex';
                                    const presetItem = document.createElement('div');
                                    presetItem.className = 'preset-item btn black textsilver';
                                    presetItem.style.padding = '5px';
                                    presetItem.style.minWidth = "150px"
                                    presetItem.textContent = presetName;
                                    presetItem.addEventListener('click', function () {
                                        loadPreset(playerName, presetName);
                                    });
                                    // Add delete button
                                    const deleteButton = document.createElement('div');
                                    deleteButton.className = 'btn black delete-btn textsecondary';
                                    deleteButton.style.padding = '5px';
                                    deleteButton.textContent = 'X';
                                    deleteButton.addEventListener('click', function (event) {
                                        event.stopPropagation(); // Prevent the click event from reaching the presetItem click event
                                        deletePreset(playerName, presetName);
                                    });
 
                                    // Add export button
                                    const exportButton = document.createElement('div');
                                    exportButton.className = 'btn black export-btn textsecondary';
                                    exportButton.style.padding = '5px';
                                    exportButton.textContent = 'Copy';
                                    exportButton.addEventListener('click', function (event) {
                                        event.target.textContent = "Copied!"
                                        event.stopPropagation(); // Prevent the click event from reaching the presetItem click event
                                        copyPresetToClipboard(playerName, presetName);
                                        setTimeout(() => {
                                            event.target.textContent = "Copy"
                                        }, 500)
                                    });
                                    presetItem.style.flex = 1
                                    // Append elements to the flex container
                                    flexContainer.appendChild(presetItem);
                                    flexContainer.appendChild(exportButton);
                                    flexContainer.appendChild(deleteButton);
 
                                    // Append the flex container to the container
                                    container.appendChild(flexContainer);
                                }
 
                                // Append the container to the presetList
                                presetList.appendChild(container);
                            }
 
                            // Example: Get skill points allocation from the page
                            function getSkillPoints() {
                                const skillBoxes = skillsMenu.querySelectorAll('.skillbox'); // Select all skill boxes
 
                                const skillPoints = {}
                                skillBoxes.forEach(skillBox => {
                                    const divs = skillBox.children
                                    const skillPointsInfo = divs[1]
                                    const skillPointsElement = skillPointsInfo.querySelector('.skillpoints');
                                    if (skillPointsElement) {
                                        const skillName = skillBox.querySelector('.textprimary.name').textContent.trim();
                                        let spentPoints = skillPointsElement.querySelectorAll('.btn.incbtn.white').length;
                                        if(!spentPoints) {
                                            spentPoints = skillPointsElement.querySelectorAll('.btn.incbtn.green').length
                                        }
                                        console.log(skillName, spentPoints)
                                        skillPoints[skillName] = spentPoints
                                    }
                                });
 
                                return skillPoints;
                            }
 
                            // Example: Set skill points allocation on the page
                            function setSkillPoints(skillPoints) {
                                console.log(skillPoints)
                                const skillBoxes = skillsMenu.querySelectorAll('.skillbox'); // Select all skill boxes
                                const applyBtn = skillsMenu.querySelector("#tutapplyskills")
                                skillBoxes.forEach(skillBox => {
                                    const divs = skillBox.children
                                    const skillPointsInfo = divs[1]
                                    const skillBtnInfo = divs[2]
                                    const skillPointsElement = skillPointsInfo.querySelector('.skillpoints');
                                    if (skillPointsElement) {
                                        const skillName = skillBox.querySelector('.textprimary.name').textContent.trim();
                                        const btns = skillBtnInfo.querySelectorAll("div.btn")
                                        let spentPoints = skillPointsElement.querySelectorAll('.btn.incbtn.white').length;
                                        if (!spentPoints) {
                                            spentPoints = skillPointsElement.querySelectorAll('.btn.incbtn.green').length;
                                        }
                                        const decBtn = btns[0]
                                        if (decBtn) {
                                            for (let i = 0; i < spentPoints; i++) {
                                                decBtn.click()
                                            }
                                            let incBtn = skillBtnInfo.querySelector("#tutsetskillpoint")
                                            if (incBtn) {
                                                for (let i = 0; i < skillPoints[skillName]; i++) {
                                                    incBtn.click()
                                                }
                                            } else {
                                                // Use MutationObserver to wait for #tutsetskillpoint to be added
                                                const observer = new MutationObserver(function (mutationsList) {
                                                    mutationsList.forEach(mutation => {
                                                        const addedNodes = Array.from(mutation.addedNodes);
                                                        const incBtn = addedNodes.find(node => node.id === 'tutsetskillpoint');
                                                        if (incBtn) {
                                                            for (let i = 0; i < skillPoints[skillName]; i++) {
                                                                incBtn.click();
                                                            }
                                                        }
                                                    });
                                                });
 
                                                // Configuration of the observer
                                                const config = { childList: true, subtree: true };
 
                                                // Start observing the target node (skillBtnInfo)
                                                observer.observe(skillBtnInfo, config);
                                                // Stop observing after a reasonable time or when the incBtn is found
                                                setTimeout(() => observer.disconnect(), 100);
                                            }
                                        }
                                    }
                                });
                                setTimeout(() => applyBtn.click(), 500)
 
                            }
 
                            // Create a window panel with preset functionality
                            const windowPanel = document.createElement('div');
                            windowPanel.className = 'window panel-black';
 
                            const titleFrame = document.createElement('div');
                            titleFrame.className = 'titleframe svelte-yjs4p5';
 
                            const savePresetFrame = document.createElement("div")
                            savePresetFrame.className = "panel-black bar slot preset-btn-container"
                            savePresetFrame.style.display = "grid"
                            savePresetFrame.style.gridTemplateColumns = "repeat(2, auto)"
 
                            const title = document.createElement('div');
                            title.className = 'textprimary title svelte-yjs4p5';
                            title.textContent = 'Presets';
                            title.style.width = "200px"
                            title.style.padding = "10px"
 
                            const presetList = document.createElement('div');
                            presetList.className = 'preset-list panel-black bar slot';
 
                            // Add input field for preset name
                            const presetInput = document.createElement('input');
                            presetInput.type = 'text';
                            presetInput.placeholder = 'Enter preset name';
                            // Add save button
                            const saveButton = document.createElement('div');
                            saveButton.className = 'btn black textsecondary';
                            saveButton.textContent = 'Save';
                            saveButton.style.textAlign = "center"
                            saveButton.addEventListener('click', function () {
                                const presetName = presetInput.value.trim();
                                if (presetName) {
                                    savePreset(playerName, presetName);
                                    presetInput.value = ''; // Clear the input field
                                }
                            });
 
                            // Add input field for importing presets
                            const importInput = document.createElement('textarea');
                            importInput.placeholder = 'Enter Preset Data';
                            importInput.style.height = "35px"
                            importInput.style.overflow = "hidden"
                            importInput.addEventListener('wheel', (event) => {
                                // Adjust the scrollTop property based on your scrolling logic
                                importInput.scrollTop += event.deltaY;
                            });
                            // Add import button
                            const importButton = document.createElement('div');
                            importButton.className = 'btn black textsecondary';
                            importButton.textContent = 'Import';
                            importButton.style.textAlign = "center"
                            importButton.addEventListener('click', function (event) {
                                const importedData = importInput.value.trim();
                                if (importedData) {
                                    // Call the savePreset function with the imported data
                                    importPreset(event, playerName, importedData);
                                    importInput.value = ''; // Clear the input field after import
                                }
                            });
 
                            // Append elements to the title frame
                            titleFrame.appendChild(title);
                            // Append import elements
                            savePresetFrame.appendChild(importInput);
                            savePresetFrame.appendChild(importButton);
 
                            savePresetFrame.appendChild(presetInput);
                            savePresetFrame.appendChild(saveButton);
 
                            // Append elements to the window panel
                            windowPanel.appendChild(titleFrame);
                            windowPanel.appendChild(savePresetFrame);
                            windowPanel.appendChild(presetList);
 
                            // Append the window panel to the skillsMenu
                            skillsMenu.appendChild(windowPanel);
                            skillsMenu.style.display = "flex"
 
                            // Initialize the preset list
                            updatePresetList();
                        }
                    }
                    else {
                        // console.log("cannot find ufplayer retrying every 100 ms")
                        setTimeout(() => {
                            addPresetsUI(skillsMenu)
                        }, 1)
 
                    }
                }
 
                const allRuneData = getRuneData()
                // console.log(allRuneData)
                let runeData
 
                let runeTrackerIdx
 
                if(allRuneData) {
                    runeData = allRuneData[allRuneData.length - 1]
                    runeTrackerIdx = allRuneData.length - 1
                } else {
                    localStorage.setItem('isRuneTrackerActiveKEK', "false")
                }
 
                // console.log(runeTrackerIdx)
 
                // Function to get the active rune tab from localStorage
                function getActiveTab() {
                    return localStorage.getItem('activeRuneTabKEK');
                }
                // Function to set the active rune tab in localStorage
                function setActiveTab(value) {
                    localStorage.setItem('activeRuneTabKEK', value);
                }
 
                function getRuneName(tier) {
                    const tierToName = {
                        0: "Lucid",
                        1: "Melant",
                        2: "Turim",
                        3: "Fundo",
                        4: "Amari"
                    }
 
                    return tierToName[tier - 1]
                }
                // Function to save rune tracker data in local storage
                function saveRuneData(data) {
                    let storedRuneData = data || {}
                    localStorage.setItem('runeDataKEK', JSON.stringify(storedRuneData));
                }
                // Function to get rune tracker data from local storage or use default testData
                function getRuneData() {
                    const storedRuneDataString = localStorage.getItem('runeDataKEK');
                    const storedRuneData = JSON.parse(storedRuneDataString)
 
                    return storedRuneData || []
                }
 
                // Function to get the length of saved rune tracker data
                function getRuneTrackerDataLength() {
                    const storedRuneDataString = localStorage.getItem('runeDataKEK');
                    const storedRuneData = JSON.parse(storedRuneDataString);
                    return storedRuneData ? storedRuneData.length : 0;
                }
 
                // Function to add quantity to both tabs' rune data and update UI
                function addRuneData(playerName, runeIdx, qty) {
                    let currentRuneData
                    if(allRuneData) {
                        currentRuneData = allRuneData[allRuneData.length - 1]
                    }
                    if(!currentRuneData) return;
                    // Iterate over each tab and add quantity to the tab's rune data or set base value if not found
 
                    if(getRuneTrackerState()) {
                        for (const tab in currentRuneData) {
                            // Skip properties that are not tabs
                            if (tab == "activeTab") {
                                continue;
                            }
 
                            // Check if the player exists in the tab's data
                            if (!currentRuneData[tab][playerName]) {
                                // Initialize the data structure for the player if not found
                                currentRuneData[tab][playerName] = {};
                                runeNames.forEach((runeName, runeIdx) => {
                                    currentRuneData[tab][playerName][runeIdx] = 0;
                                });
                                if(!currentRuneData[tab].by) {
                                    currentRuneData[tab].by = "Amari"
                                }
                            }
 
                            // Add quantity to the tab's rune data or set base value if not found
                            currentRuneData[tab][playerName][runeIdx] = (currentRuneData[tab][playerName][runeIdx] || 0) + qty;
                            currentRuneData[tab][playerName].state = 1
 
                        }
 
 
                        // Save the updated data
                    }
                    saveRuneData(allRuneData);
                    updateRuneTracker();
                }
 
                //state = 1 for in party, 0 for not in party
                function changePlayerState(name, state) {
                    if(runeData) {
                        if(runeData.rawCount[name]) {
                            runeData.rawCount[name].state = state
                        }
                        if(runeData.manualCount[name]) {
                            runeData.manualCount[name].state = state
                        }
                        saveRuneData(allRuneData)
                    }
                    updateRuneTracker()
 
                }
                const runeNames = ["Lucid", "Melant", "Turim", "Fundo", "Amari"];
 
                let runeTrackerOpen = false;
                const paddingValue = '5px';
                const marginValue = '3px';
                function getRuneTrackerState() {
                    return localStorage.getItem('isRuneTrackerActiveKEK') === "true"
                }
                // Function to handle the creation and removal of the Rune Tracker UI
                function handleRuneTrackerUI() {
                    if (runeTrackerOpen) {
                        // Close the existing Rune Tracker if open
                        const existingRuneTracker = document.querySelector('.runeTrackerKEK');
                        if (existingRuneTracker) {
                            existingRuneTracker.remove();
                        }
                        runeTrackerOpen = false;
                        return;
                    }
                    runeTrackerOpen = true;
                    updateRuneTracker()
                }
 
                // Function to update the Rune Tracker UI
                function updateRuneTracker() {
                    // console.log(runeTrackerOpen)
                    const existingRuneTracker = document.querySelector(".runeTrackerKEK")
                    if(runeTrackerOpen == false) return;
                    if(existingRuneTracker) {
                        existingRuneTracker.remove()
                    }
 
                    const runeTrackerContainer = document.createElement('div');
                    runeTrackerContainer.className = 'window panel-black runeTrackerKEK';
                    runeTrackerContainer.style.position = 'absolute';
                    runeTrackerContainer.style.left = '200px';
                    runeTrackerContainer.style.top = '50px';
 
                    if(props[".runeTrackerKEK"]) {
                        runeTrackerContainer.style.left = props[".runeTrackerKEK"].left || '200px';
                        runeTrackerContainer.style.top = props[".runeTrackerKEK"].top || '50px';
                    }
                    makeElementDraggable2(runeTrackerContainer, ".runeTrackerKEK")
                    const runeGridContainer = document.createElement('div');
                    runeGridContainer.className = 'panel-black';
                    runeGridContainer.style.display = 'grid';
                    runeGridContainer.style.gridTemplateColumns = `auto repeat(${runeNames.length}, auto)`;
 
                    const titleFrame = document.createElement('div');
                    titleFrame.className = 'titleframe svelte-yjs4p5';
                    titleFrame.style.display = "flex";
                    titleFrame.style.justifyContent = "space-between";
 
                    const startBtn = document.createElement('button');
                    startBtn.style.padding = "10px"
                    startBtn.style.flex = 1
                    startBtn.style.width = "100px"
                    const runeTrackerState = getRuneTrackerState()
                    if(runeTrackerState) {
                        startBtn.textContent = "Stop";
                        startBtn.className = `btn textprimary rune-tracker-startbtn red`
                    } else {
                        startBtn.textContent = "Start";
                        startBtn.className = `btn textprimary rune-tracker-startbtn grey`
                    }
 
                    startBtn.addEventListener('click', function () {
                        if (startBtn.textContent == "Start") {
                            // Start functionality
                            startBtn.textContent = "Stop";
                            startBtn.className = "btn textprimary rune-tracker-startbtn red"; // Change class as needed
 
                            // Set isRuneTrackerActive to true in local storage
                            localStorage.setItem('isRuneTrackerActiveKEK', 'true');
                        } else {
                            // Stop functionality
                            // Add any additional logic needed when stopping
 
                            // Change button text and style back to start functionality
                            startBtn.textContent = "Start";
                            startBtn.className = "btn textsecondary rune-tracker-startbtn grey"; // Change class as needed
 
                            // Set isRuneTrackerActive to false in local storage
                            localStorage.setItem('isRuneTrackerActiveKEK', 'false');
                        }
                    });
                    const newBtn = document.createElement('button');
                    newBtn.style.padding = "10px"
                    newBtn.style.flex = 1
                    newBtn.textContent = "New";
                    newBtn.style.width = "100px"
                    newBtn.className = `btn textprimary rune-tracker-btn grey`
 
                    // Add event listener to the start button
                    newBtn.addEventListener('click', function () {
                        // Start functionality
                        if(allRuneData) {
                            runeTrackerIdx = allRuneData.length;
                        } else {
                            runeTrackerIdx = 0
                        }
                        const newState = { "manualCount": {}, "rawCount": {} };
 
                        runeData = newState;
 
                        // Push the new state to the array
                        allRuneData.push(newState);
 
                        // Limit the array length to 10
                        const maxLength = 10;
                        if (allRuneData.length > maxLength) {
                            // If the array exceeds the limit, remove the first element
                            allRuneData.shift();
 
                            // Decrement runeTrackerIdx by 1
                            runeTrackerIdx = Math.max(0, runeTrackerIdx - 1);
                        }
 
                        // Save the updated array to localStorage
                        saveRuneData(allRuneData);
 
                        updateRuneTracker();
                    });
 
                    // console.log(dataToShow, "from handleUI", activeTab)
                    // Add elements to the title frame
                    const title = document.createElement('div');
                    title.className = 'textprimary title svelte-yjs4p5';
                    title.style.width = "200px";
                    title.style.padding = "10px";
                    title.textContent = "Rune Tracker";
 
                    titleFrame.appendChild(title);
                    titleFrame.appendChild(startBtn);
                    titleFrame.appendChild(newBtn);
 
                    // Add elements to the window panel
                    runeTrackerContainer.appendChild(titleFrame);
 
                    // Create header row for player names
                    const playerHeader = document.createElement('div');
                    playerHeader.className = 'btn black textprimary rune-tracker-item';
                    playerHeader.textContent = 'Players';
                    playerHeader.style.width = '100px'; // Width of player names
                    playerHeader.style.padding = paddingValue;
                    playerHeader.style.margin = marginValue;
                    runeGridContainer.appendChild(playerHeader);
 
 
                    // Append the rune grid container to the main container
                    runeTrackerContainer.appendChild(runeGridContainer);
                    runeTrackerContainer.style.zIndex = 10
                    // Set a fixed height and enable vertical scrolling for the rune grid container
                    runeTrackerContainer.style.height = 'calc(100vh - 500px)'; // Adjust the height as needed
                    // Set overflow to hidden for both x and y
                    runeTrackerContainer.style.overflow = 'hidden';
 
                    // Add event listeners to handle scrolling
                    runeTrackerContainer.addEventListener('wheel', (event) => {
                        // Adjust the scrollTop property based on your scrolling logic
                        runeTrackerContainer.scrollTop += event.deltaY;
                    });
                    // Append the main container to the .layout element in the document
                    const layoutElement = document.querySelector('.layout');
                    if (layoutElement) {
                        layoutElement.appendChild(runeTrackerContainer);
                    }
                    let dataToShow;
                    //prev next btns
                    if(runeData) {
                        // Create elements for navigation buttons and input field
                        const navigateContainer = document.createElement('div');
                        navigateContainer.style.display = 'flex';
                        navigateContainer.style.marginTop = '10px';
 
                        const indexInput = document.createElement('input');
 
                        const prevButton = document.createElement('button');
                        prevButton.className = "btn grey textsecondary"
                        prevButton.textContent = '<';
                        prevButton.style.padding = "10px"
                        prevButton.style.marginLeft = "5px"
                        prevButton.addEventListener('click', function () {
                            if (runeTrackerIdx > 0) {
                                runeTrackerIdx--;
                                indexInput.value = runeTrackerIdx
                                runeData = allRuneData[runeTrackerIdx]
                                // console.log(runeTrackerIdx, runeData)
                                updateRuneTracker()
                            }
                        });
 
                        const nextButton = document.createElement('button');
                        nextButton.textContent = '>';
                        nextButton.style.padding = "10px"
                        nextButton.className = "btn grey textsecondary"
                        nextButton.addEventListener('click', function () {
                            const dataLength = getRuneTrackerDataLength();
                            if (runeTrackerIdx < dataLength - 1) {
                                runeTrackerIdx++;
                                indexInput.value = runeTrackerIdx
                                runeData = allRuneData[runeTrackerIdx]
                                // console.log(runeTrackerIdx, runeData)
                                updateRuneTracker()
                            }
                        });
 
                        indexInput.type = 'number';
                        indexInput.className = 'input';
                        indexInput.style.width = '50px';
                        indexInput.value = runeTrackerIdx
                        indexInput.style.padding = "7px"
 
                        // Add an input event listener to handle real-time updates
                        indexInput.addEventListener('input', function () {
                            // Ensure the input value is a positive integer
                            const targetIndex = parseInt(indexInput.value, 10);
                            if (!isNaN(targetIndex) && targetIndex >= 0) {
                                runeTrackerIdx = targetIndex;
                                indexInput.value = runeTrackerIdx
                                runeData = allRuneData[runeTrackerIdx]
                                // console.log(runeTrackerIdx, runeData)
                                updateRuneTracker()
                            }
                        });
 
 
                        // Add the navigation container to the main container
 
                        let activeTab = getActiveTab() || 'rawCount';
                        dataToShow = runeData[activeTab]
                        // Create tab buttons
                        const rawCountTabButton = createTabButton('Raw Count', 'rawCount');
                        const manualCountTabButton = createTabButton('Manual Count', 'manualCount');
 
                        titleFrame.appendChild(rawCountTabButton);
                        titleFrame.appendChild(manualCountTabButton);
                        // Add navigation elements to the container
                        titleFrame.appendChild(prevButton);
                        titleFrame.appendChild(indexInput);
                        titleFrame.appendChild(nextButton);
                    }
                    // Create close button element
                    const closeBtn = document.createElement('img');
                    closeBtn.src = '/data/ui/icons/cross.svg?v=8498194';
                    closeBtn.className = 'btn black svgicon';
 
                    // Append close button to titleFrame
                    titleFrame.appendChild(closeBtn);
 
                    // Add event handler to the close button
                    closeBtn.addEventListener('click', function () {
                        // Remove the runeTrackerContainer when the close button is clicked
                        runeTrackerContainer.remove();
                        runeTrackerOpen = false
                    });
 
                    //cells
                    if(dataToShow) {
                        // Create header row for rune names
                        runeNames.forEach(runeName => {
                            const runeHeader = document.createElement('div');
                            runeHeader.className = 'btn black textprimary rune-tracker-item';
                            runeHeader.textContent = runeName;
                            runeHeader.style.padding = paddingValue;
                            runeHeader.style.margin = marginValue;
                            runeHeader.addEventListener('click', function () {
                                runeData[getActiveTab()].by = runeName
                                saveRuneData(allRuneData)
                                sortAndUpdateRuneTracker(dataToShow, runeName);
                            });
                            runeGridContainer.appendChild(runeHeader);
                        });
 
                        // Create rows for player names and rune counts
                        for (const playerName in dataToShow) {
                            if(playerName === "by") {continue;}
                            const playerRow = document.createElement('div');
                            playerRow.className = 'btn black textsecondary rune-tracker-item';
                            playerRow.textContent = playerName;
                            const isMe = playerName == playerNameKEK
                            const state = runeData.rawCount[playerName].state
                            if(isMe) {
                                playerRow.classList.add("textgreen")
                            }
                            if(state === 0) {
                                playerRow.classList.add("textgrey")
                            }
                            playerRow.style.width = '100px'; // Width of player names
                            playerRow.style.padding = paddingValue;
                            playerRow.style.margin = marginValue;
                            runeGridContainer.appendChild(playerRow);
 
                            for (let tier = 0; tier < runeNames.length; tier++) {
                                const runeCell = document.createElement('div');
                                runeCell.className = 'btn black textsecondary rune-tracker-item';
                                if(isMe) {
                                    runeCell.classList.add("textgreen")
                                }
                                if(state === 0) {
                                    runeCell.classList.add("textgrey")
                                }
                                runeCell.textContent = dataToShow[playerName][tier] !== null ? dataToShow[playerName][tier] : 'N/A';
                                runeCell.style.padding = paddingValue;
                                runeCell.style.margin = marginValue;
 
                                // Add event listeners to the cell for incrementing and decrementing values
                                if(getActiveTab() == "manualCount") {
                                    runeCell.addEventListener('click', function () {
                                        // Increment the value on click
                                        dataToShow[playerName][tier]++;
                                        // console.log(dataToShow, "from update rune cell")
                                        saveRuneData(allRuneData);
                                        updateRuneTracker()
                                    });
 
                                    runeCell.addEventListener('contextmenu', function (event) {
                                        event.preventDefault();
                                        // Decrement the value on right-click
                                        console.log("from context menu in cell")
                                        dataToShow[playerName][tier] = Math.max(0, dataToShow[playerName][tier] - 1);
                                        saveRuneData(allRuneData);
                                        updateRuneTracker()
                                    });
                                }
 
                                runeGridContainer.appendChild(runeCell);
                            }
                        }
 
                    }
                    // Function to update the class of a tab button based on the active tab
                    function updateTabButtonClass(button, tab) {
                        const isActive = getActiveTab() == tab
                        button.className = `btn textprimary rune-tracker-btn ${isActive ? 'disabled black' : 'grey'}`;
                    }
                    // Function to create a tab button
                    function createTabButton(text, tab) {
                        const tabButton = document.createElement('button');
                        updateTabButtonClass(tabButton, tab)
                        tabButton.style.padding = "10px"
                        tabButton.style.flex = 1
                        tabButton.style.width = "130px"
                        tabButton.textContent = text;
                        tabButton.value = tab
                        tabButton.addEventListener('click', function () {
                            setActiveTab(tabButton.value)
                            saveRuneData(allRuneData)
                            updateRuneTracker()
                            // Update classes for all tab buttons
                            const tabButtons = document.querySelectorAll('.rune-tracker-btn');
                            // console.log(tabButtons)
                            tabButtons.forEach(button => updateTabButtonClass(button, button.value));
                        });
                        return tabButton;
                    }
                }
                // Function to get sorted data based on the selected rune and tab
                function getSortedData(data, runeName) {
                    const sortedData = {};
 
                    const sortedPlayerNames = Object.keys(data).filter(playerName => playerName !== "by").sort((a, b) => {
                        const aValue = data[a][runeNames.indexOf(runeName)];
                        const bValue = data[b][runeNames.indexOf(runeName)];
                        return bValue - aValue;
                    });
                    // console.log(data)
                    sortedPlayerNames.forEach((playerName) => {
                        sortedData[playerName] = data[playerName];
                    });
                    sortedData.by = data.by
                    return sortedData;
                }
                // Function to sort the rune data and update the UI
                function sortAndUpdateRuneTracker(data, runeName) {
                    const sortedData = getSortedData(data, runeName);
                    // const deepCopySortedData = JSON.parse(JSON.stringify(sortedData)); // Deep copy
                    // console.log(deepCopySortedData)
                    runeData[getActiveTab()] = sortedData;
                    // Update the Rune Tracker UI with the sorted data
                    // saveRuneData(runeData, runeTrackerIdx);
                    updateRuneTracker();
                }
 
                function createUIWindow(titleName, left = '200px', top = '50px') {
                    // Create the main container
                    const windowClassName = titleName.split(" ").join("").toLowerCase() + "KEK"
                    const mainContainer = document.createElement('div');
                    mainContainer.className = `window panel-black ${windowClassName}`;
                    mainContainer.style.position = 'absolute';
                    mainContainer.style.left = left;
                    mainContainer.style.top = top;
 
                    // Create the title frame
                    const titleFrame = document.createElement('div');
                    titleFrame.className = 'titleframe svelte-yjs4p5';
                    titleFrame.style.display = 'flex';
                    titleFrame.style.justifyContent = 'space-between';
 
                    // Create the title
                    const title = document.createElement('div');
                    title.className = 'textprimary title svelte-yjs4p5';
                    title.style.width = '200px';
                    title.style.padding = '10px';
                    title.textContent = titleName;
 
                    // Create the close button
                    const closeBtn = document.createElement('img');
                    closeBtn.src = '/data/ui/icons/cross.svg?v=8498194';
                    closeBtn.className = 'btn black svgicon';
 
                    // Append elements to the title frame
                    titleFrame.appendChild(title);
                    titleFrame.appendChild(closeBtn);
 
                    // Append the title frame to the main container
                    mainContainer.appendChild(titleFrame);
 
                    // Add event handler to the close button
                    closeBtn.addEventListener('click', function () {
                        // Remove the main container when the close button is clicked
                        mainContainer.remove();
                    });
 
                    // Return the main container
                    mainContainer.style.zIndex = 10
                    return mainContainer;
                }
 
                function createGridContainer(columnNames, className, marginVal = "3px", paddingVal = "5px") {
                    const gridContainer = document.createElement('div');
                    gridContainer.className = `panel-black ${className}`;
                    gridContainer.style.display = 'grid';
                    gridContainer.style.gridTemplateColumns = `repeat(${columnNames.length}, auto)`;
 
                    // Create header row
                    for (const columnName of columnNames) {
                        const headerCell = document.createElement('div');
                        headerCell.className = 'btn black textprimary grid-item';
                        headerCell.textContent = columnName;
                        headerCell.style.margin = marginVal;
                        headerCell.style.padding = paddingVal;
                        gridContainer.appendChild(headerCell);
                    }
 
                    return gridContainer;
                }
 
                const requiredButtonGroup = ["dps", "hps", "mps", "kills", "deaths"];
 
                // Optional button groups
                const optionalButtonGroups = {
                    faction: ["vg", "bl"],
                    class: ["warrior", "mage", "shaman", "archer"],
                    duration: ["true"],
                };
 
                let gloomRankingData, gloomPersonalData
                let defaultRequiredArg = "dps"
                if(playerClassKEK == 3) {
                    defaultRequiredArg = "hps"
                }
                let rankingOpened = false
 
                let oldOptions = [defaultRequiredArg]
                let isFetchingRanking = false, isFetchingPersonal = false
 
                function handleGloomRankings() {
                    const existingContainer = document.querySelector(".gloomrankingKEK")
                    if(existingContainer) {
                        existingContainer.remove()
                        return;
                    }
                    const gloomRankingContainer = createUIWindow("Gloom Ranking", "300px", "100px")
 
                    if(props[".gloomrankingKEK"]) {
                        gloomRankingContainer.style.left = props[".gloomrankingKEK"].left + "px" || gloomRankingContainer.style.left
                        gloomRankingContainer.style.top = props[".gloomrankingKEK"].top + "px" || gloomRankingContainer.style.top
                    }
                    makeElementDraggable2(gloomRankingContainer, ".gloomrankingKEK")
                    // Function to handle clicks on required buttons
                    function handleRequiredButtonClick(e) {
                        e.stopPropagation();
                        e.preventDefault();
 
                        const currentBtn = e.target;
                        const requiredBtns = document.querySelectorAll(".required-btn-kek");
                        if(currentBtn.classList.contains("selected")) {
                            currentBtn.classList.remove("grey", "selected")
                            currentBtn.classList.add("black")
                        } else {
                            requiredBtns.forEach((btn) => {
                                if(btn === currentBtn) {
                                    btn.classList.add("grey", "selected")
                                    btn.classList.remove("black")
                                } else {
                                    btn.classList.remove("grey", "selected")
                                    btn.classList.add("black")
                                }
                            });
                        }
                    }
                    // Function to handle clicks on optional buttons
                    function handleOptionalButtonClick(e, group) {
                        e.stopPropagation();
                        e.preventDefault();
                        // console.log("clicking")
                        const btns = document.querySelectorAll(`.optional-btn-${group}`);
                        // console.log(btns, `.optional-button-${group}`)
                        const currentBtn = e.target
                        if (group) {
                            if(currentBtn.classList.contains("selected")) {
                                currentBtn.classList.remove("grey", "selected")
                                currentBtn.classList.add("black")
                            } else {
                                btns.forEach((btn) => {
                                    if(btn === currentBtn) {
                                        btn.classList.add("grey", "selected")
                                        btn.classList.remove("black")
                                    } else {
                                        btn.classList.remove("grey", "selected")
                                        btn.classList.add("black")
                                    }
                                });
                            }
                        }
                    }
                    // Function to get the group for an optional button
                    function getGroupForOptionalButton(buttonName) {
                        for (const group in optionalButtonGroups) {
                            if (optionalButtonGroups[group].includes(buttonName)) {
                                return group;
                            }
                        }
                        return null;
                    }
 
                    // Helper function to create buttons for a group
                    function createOptionalButtonsForGroup(group) {
                        const buttonsContainer = document.createElement("div");
                        buttonsContainer.className = "optional-buttons-row";
 
                        optionalButtonGroups[group].forEach((buttonName) => {
                            const button = createButton(buttonName, (e) => handleOptionalButtonClick(e, group), "optional", group);
                            if(oldOptions.includes(button.value)) {
                                button.classList.remove("black")
                                button.classList.add("grey", "selected")
                            }
                            buttonsContainer.appendChild(button);
                        });
 
                        return buttonsContainer;
                    }
 
                    const flexContainer = document.createElement("div")
                    flexContainer.style.display = "flex"
                    flexContainer.classList.add("flex-container-kek")
                    flexContainer.style.flexDirection = "row"
 
                    const btnRowContainer = document.createElement("div");
                    btnRowContainer.className = "panel-black";
 
                    // Create label for required buttons
                    const requiredLabel = document.createElement("div");
                    requiredLabel.textContent = "Required";
                    requiredLabel.className = "btn black textprimary";
 
 
                    // Create row for required buttons
                    const requiredButtonsRow = document.createElement("div");
                    requiredButtonsRow.className = "required-buttons-row";
                    requiredButtonsRow.style.padding = "5px"
                    requiredButtonsRow.appendChild(requiredLabel)
                    requiredButtonGroup.forEach((buttonName) => {
                        const button = createButton(buttonName, (e) => handleRequiredButtonClick(e), "required");
                        if(oldOptions.includes(button.value)) {
                            button.classList.remove("black")
                            button.classList.add("grey", "selected")
                        }
                        requiredButtonsRow.appendChild(button);
                    });
                    btnRowContainer.appendChild(requiredButtonsRow);
 
                    const optionalContainer = document.createElement("div");
                    optionalContainer.className = "optional-container";
                    optionalContainer.style.display = "flex";
                    optionalContainer.style.margin = "0";
                    optionalContainer.style.padding = "5px";
                    // Create labels and rows for optional button groups
                    for (const group in optionalButtonGroups) {
                        const label = document.createElement("div");
                        label.textContent = group.charAt(0).toUpperCase() + group.slice(1);
                        label.className = "btn black textprimary";
 
                        const buttonsRow = createOptionalButtonsForGroup(group);
                        buttonsRow.insertBefore(label, buttonsRow.firstChild)
                        optionalContainer.appendChild(buttonsRow);
                    }
 
                    const submitBtnContainer = document.createElement("div")
                    submitBtnContainer.classList.add("submitBtnContainer")
                    // Submit button
                    const submitButton = createButton("Submit", (e) => handleSubmitClick(e), "submit");
                    submitButton.classList.add("submitBtnGloomRanking")
                    if(isFetchingRanking == true) {
                        submitButton.classList.add("disabled", "grey")
                        submitButton.classList.remove("black")
                        submitButton.textContent = "Fetching..."
                    }
 
                    submitBtnContainer.appendChild(submitButton)
 
                    optionalContainer.appendChild(submitBtnContainer)
 
                    btnRowContainer.appendChild(optionalContainer)
 
                    flexContainer.appendChild(btnRowContainer)
 
                    gloomRankingContainer.appendChild(flexContainer);
 
                    // Helper function to create a button
                    function createButton(value, onClick, type, group = "") {
 
                        const button = document.createElement("div");
                        button.value = value
                        button.textContent = value.charAt(0).toUpperCase() + value.slice(1);
                        if(value.toLowerCase() == "bl" || value.toLowerCase() == "vg") {
                            button.textContent = value.toUpperCase()
                        }
 
                        button.addEventListener("click", onClick);
 
                        // Add specific classes for styling and identification
                        if(type === "submit") {
                            button.className = `btn black textprimary submit-btn-kek`;
                        }
                        if(type === "optional") {
                            button.className = `btn black textsecondary optional-btn-${group}`;
                        }
                        if(type === "required") {
                            button.className = `btn black textsecondary required-btn-kek`;
                        }
 
                        return button;
                    }
 
                    // Function to handle the submit button click
                    function handleSubmitClick(e) {
                        // Gather selected optional button values
                        const optionalArgsSelected = [];
 
                        rankingOpened = true
 
                        for (const group in optionalButtonGroups) {
                            const btns = document.querySelectorAll(`.optional-btn-${group}`);
                            btns.forEach(btn => {
                                if(btn.classList.contains("selected")){
                                    optionalArgsSelected.push(btn.value)
                                }
                            });
                        }
                        let requiredArgSelected = ""
                        const reqBtns = document.querySelectorAll(".required-btn-kek")
                        for(let btn of reqBtns) {
                            if(btn.classList.contains("selected")) {
                                requiredArgSelected = btn.value
                                break
                            }
                        }
                        oldOptions = [...optionalArgsSelected, requiredArgSelected]
                        // Update the optionalArgs value based on selected buttons
                        const optionalArgs = optionalArgsSelected.length > 0 ? optionalArgsSelected.join(" ") : "none";
                        console.log("Optional Args:", optionalArgs);
                        console.log("Required Arg:", requiredArgSelected);
                        e.target.classList.add("disabled", "grey")
                        e.target.classList.remove("black")
                        e.target.textContent = "Fetching..."
                        isFetchingRanking = true
                        // Perform the API call or other actions as needed
                        fetchGloomRanking(requiredArgSelected, optionalArgs)
                            .then((data) => {
                            // Handle the API response data
                            // console.log(data);
                            updateGloomRankingGrid(data)
                            gloomRankingData = data
                            const btn = document.querySelector(".submitBtnGloomRanking")
                            if(btn) {
                                btn.classList.remove("disabled", "grey")
                                btn.classList.add("black")
                                btn.textContent = "Submit"
                            }
                            isFetchingRanking = false
                        })
                            .catch((error) => {
                            console.error(error);
                            const btn = document.querySelector(".submitBtnGloomRanking")
                            if(btn) {
                                btn.classList.remove("disabled", "grey")
                                btn.classList.add("black")
                                btn.textContent = "Submit"
                            }
                            isFetchingRanking = false
                        });
                    }
 
                    document.body.appendChild(gloomRankingContainer);
 
                    updateGloomRankingGrid(gloomRankingData)
 
                    document.body.appendChild(gloomRankingContainer)
 
                    function updateGloomRankingGrid(data) {
                        if(!data) return;
                        const existingDataGrid = document.querySelector(".gloomrankingGridKEK")
                        if(existingDataGrid) {
                            existingDataGrid.remove()
                        }
                        data = data.data
                        if(!data) return;
                        const marginVal = "2px"
                        const paddingVal = "4px"
                        delete data[0].id
                        const keys = Object.keys(data[0]);
 
                        // Create column names by capitalizing each key
                        const columnNames = keys.map(key => key.charAt(0).toUpperCase() + key.slice(1));
 
 
                        const grid = createGridContainer(columnNames, "gloomrankingGridKEK")
 
                        for(let log of data) {
 
                            for(let col of columnNames) {
                                col = col.toLowerCase()
                                let cellValue = log[col]
 
                                const cell = document.createElement("div")
                                cell.className = "btn black textsecondary personal-gloom-item"
                                if(col.toLowerCase() == "faction") {
                                    cell.classList.remove("textsecondary")
                                    cell.classList.add(`textf${cellValue}`)
                                    if(cellValue == 0) {
                                        cellValue = "VG"
                                    } else {
                                        cellValue = "BL"
                                    }
                                }
                                if(col.toLowerCase() == "name" && playerNameKEK == cellValue) {
                                    cell.classList.remove("textsecondary")
                                    cell.classList.add("textgreen")
                                }
                                if(col.toLowerCase() == "class") {
                                    const classCode = {0: 'Warrior', 1: 'Mage', 2: 'Arch', 3: 'Sham'}
                                    cellValue = classCode[cellValue]
                                }
                                cell.textContent = cellValue
                                cell.style.margin = marginVal
                                cell.style.padding = paddingVal
                                grid.appendChild(cell)
                            }
 
                        }
                        const mainContainer = document.querySelector(".gloomrankingKEK")
                        if(mainContainer) {
                            const subContainer = mainContainer.querySelector(".flex-container-kek")
                            subContainer.appendChild(grid)
                        }
                    }
                }
 
                function handlePersonalGloom() {
                    const existingContainer = document.querySelector(".gloomdataKEK")
                    if(existingContainer) {
                        existingContainer.remove()
                        return;
                    }
                    const gloomDataContainer = createUIWindow("Gloom Data", "300px", "100px")
                    if(props[".gloomdataKEK"]) {
                        gloomDataContainer.style.left = props[".gloomdataKEK"].left + "px" || gloomDataContainer.style.left
                        gloomDataContainer.style.top = props[".gloomdataKEK"].top + "px" || gloomDataContainer.style.top
                    }
                    makeElementDraggable2(gloomDataContainer, ".gloomdataKEK")
                    const refreshBtn = document.createElement("div")
                    refreshBtn.classList.add("btn", "black", "textprimary", "refreshBtnPersonalGloom")
                    refreshBtn.textContent = "Refresh"
                    refreshBtn.style.padding = "7px"
                    refreshBtn.style.margin = "5px"
                    if(isFetchingPersonal) {
                        refreshBtn.classList.remove("black")
                        refreshBtn.classList.add("disabled", "grey")
                        refreshBtn.textContent = "Refreshing..."
                    }
                    refreshBtn.addEventListener("click", () => {
                        refreshBtn.classList.remove("black")
                        refreshBtn.classList.add("disabled", "grey")
                        isFetchingPersonal = true
                        refreshBtn.textContent = "Refreshing..."
                        fetchGloomData()
                            .then(data => {
                            gloomPersonalData = data
                            updateGloomDataGrid(gloomPersonalData)
                            const btn = document.querySelector(".refreshBtnPersonalGloom")
                            if(btn) {
                                btn.classList.remove("disabled", "grey")
                                btn.classList.add("black")
                                btn.textContent = "Refresh"
                            }
                            isFetchingPersonal = false
                        })
                            .catch(err => {
                            console.log(err)
                            const btn = document.querySelector(".refreshBtnPersonalGloom")
                            if(btn) {
                                btn.classList.remove("disabled", "grey")
                                btn.classList.add("black")
                                btn.textContent = "Refresh"
                            }
                            isFetchingPersonal = false
                        })
                    })
                    refreshBtn.click()
                    gloomDataContainer.appendChild(refreshBtn)
                    // console.log(gloomPersonalData, "from inside handle personal GLoom")
 
                    document.body.appendChild(gloomDataContainer)
 
                    updateGloomDataGrid(gloomPersonalData)
 
                    function updateGloomDataGrid(data) {
                        // console.log("from update gloom grid", data)
                        const existingGrid = document.querySelector(".gloomdataGridKEK")
                        if(existingGrid) {
                            existingGrid.remove()
                        }
                        const marginVal = "3px"
                        const paddingVal = "5px"
                        // Extract keys from the data object
                        if(!data) return;
                        const keys = Object.keys(data);
 
                        // Create column names by capitalizing each key
                        const columnNames = keys.map(key => key.charAt(0).toUpperCase() + key.slice(1));
                        columnNames.push("K/D")
                        const grid = createGridContainer(columnNames)
                        grid.classList.add("gloomdataGridKEK")
                        for(let key in data) {
                            let cellValue = data[key]
                            const cell = document.createElement("div")
                            cell.className = "btn black textsecondary personal-gloom-item"
                            cell.textContent = cellValue
                            cell.style.margin = marginVal
                            cell.style.padding = paddingVal
                            grid.appendChild(cell)
                        }
                        let cellValue = (data.kills / data.deaths).toFixed(2)
                        const cellkd = document.createElement("div")
                        cellkd.className = "btn black textsecondary personal-gloom-item"
                        cellkd.textContent = cellValue
                        cellkd.style.margin = marginVal
                        cellkd.style.padding = paddingVal
                        grid.appendChild(cellkd)
 
                        const mainContainer = document.querySelector(".gloomdataKEK")
                        if(mainContainer) {
                            mainContainer.appendChild(grid)
                        }
                    }
                }
 
                // const apiUrl = "https://fast-hordes-mongo-api.vercel.app"
                const apiUrl = "https://fasthordesapimongo.onrender.com"
 
                function fetchGloomRanking(requiredArg, optionalArg = "none") {
                    const endpointUrl = `${apiUrl}/rankings/${playerNameKEK}/${requiredArg}/${optionalArg}`;
 
                    // console.log(endpointUrl)
                    return fetch(endpointUrl, {
                        method: 'GET',
                    })
                        .then(response => response.json())
                        .then(data => {
                        // console.log('Gloom Ranking Data:', data);
                        gloomRankingData = data
                        return data
                    })
                        .catch(error => {
                        console.error('Error fetching data:', error);
                        return error
                    });
                }
 
                function fetchGloomData() {
                    const endpointUrl = `${apiUrl}/info/${playerNameKEK}`;
 
                    return fetch(endpointUrl, {
                        method: 'GET',
                    })
                        .then(response => response.json())
                        .then(data => {
                        // console.log('Personal Gloom Data:', data);
                        return data
                    })
                        .catch(error => {
                        console.error('Error fetching data:', error);
                        return error
                    });
                }
 
                function fetchFriendData() {
                    const apiUrl = friendListUrl;
                    const endpointUrl = `${apiUrl}/friends/${playerNameKEK}`;
                    // console.log(endpointUrl)
                    return fetch(endpointUrl).then(response => response.json())
                }
 
                function deleteFriend(playerName, friendName) {
                    const apiUrl = friendListUrl; // Replace with your actual FastAPI app URL
 
                    const requestData = {
                        player_name: playerName,
                        friend_name: friendName,
                    };
 
                    return fetch(`${apiUrl}/remove_friend`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(requestData),
                    })
                        .then(response => {
                        if (!response.ok) {
                            throw new Error(`HTTP error! Status: ${response.status}`);
                        }
                        return response.json();
                    })
                        .then(data => {
                        console.log('Success:', data);
                        return data;
                    })
                        .catch(error => {
                        console.error('Error:', error);
                        throw error;
                    });
                }
 
                function addFriend(playerName, friendName) {
                    const apiUrl = friendListUrl; // Replace with your actual FastAPI app URL
 
                    const requestData = {
                        player_name: playerName,
                        friend_name: friendName,
                    };
 
                    return fetch(`${apiUrl}/add_friend`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(requestData),
                    })
                        .then(response => {
                        if (!response.ok) {
                            throw new Error(`HTTP error! Status: ${response.status}`);
                        }
                        return response.json();
                    })
                        .then(data => {
                        console.log('Success:', data);
                        return data;
                    })
                        .catch(error => {
                        console.error('Error:', error);
                        throw error;
                    });
                }
 
                function updatePlayerStatus(playerName, statusFlag) {
                    const apiUrl = friendListUrl // Replace with your actual FastAPI app URL
 
                    const playerData = {
                        player_name: playerName,
                        status_flag: statusFlag,
                    };
 
                    return fetch(`${apiUrl}/status`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(playerData),
                    })
                        .then(response => {
                        if (!response.ok) {
                            throw new Error(`HTTP error! Status: ${response.status}`);
                        }
                        return response.json();
                    })
                        .then(data => {
                        console.log('Success:', data);
                        return data;
                    })
                        .catch(error => {
                        console.error('Error:', error);
                        throw error;
                    });
                }
 
                updatePlayerStatus(playerNameKEK, 1)
 
                function handleFriendList() {
                    const existingContainer = document.querySelector(".friendlistKEK");
 
                    if (existingContainer) {
                        existingContainer.remove();
                        return;
                    }
 
                    const friendListContainer = createUIWindow("Friend List", "300px", "200px");
 
                    if (props[".friendlistKEK"]) {
                        friendListContainer.style.left = props[".friendlistKEK"].left + "px" || friendListContainer.style.left;
                        friendListContainer.style.top = props[".friendlistKEK"].top + "px" || friendListContainer.style.top;
                    }
                    friendListContainer.style.height = 'calc(100vh - 40vh)'; // Adjust the height as needed
                    friendListContainer.style.overflow = 'hidden';
 
                    friendListContainer.addEventListener('wheel', (event) => {
                        friendListContainer.scrollTop += event.deltaY;
                    });
                    makeElementDraggable2(friendListContainer, ".friendlistKEK");
 
                    const refreshBtn = document.createElement("div");
                    refreshBtn.classList.add("btn", "black", "textprimary", "refreshBtnFriendList");
                    refreshBtn.textContent = "Refresh";
                    refreshBtn.style.padding = "7px";
                    refreshBtn.style.margin = "5px";
 
                    if (isFetchingFriends) {
                        refreshBtn.classList.remove("black");
                        refreshBtn.classList.add("disabled", "grey");
                        refreshBtn.textContent = "Refreshing...";
                    }
 
                    refreshBtn.addEventListener("click", () => {
                        refreshBtn.classList.remove("black");
                        refreshBtn.classList.add("disabled", "grey");
                        isFetchingFriends = true;
                        refreshBtn.textContent = "Refreshing...";
 
                        fetchFriendData()
                            .then(data => {
                            friendList = data.data;
                            console.log(friendList)
                            updateFriendList(friendList);
                            const btn = document.querySelector(".refreshBtnFriendList");
 
                            if (btn) {
                                btn.classList.remove("disabled", "grey");
                                btn.classList.add("black");
                                btn.textContent = "Refresh";
                            }
 
                            isFetchingFriends = false;
                        })
                            .catch(err => {
                            console.log(err);
                            const btn = document.querySelector(".refreshBtnFriendList");
 
                            if (btn) {
                                btn.classList.remove("disabled", "grey");
                                btn.classList.add("black");
                                btn.textContent = "Refresh";
                            }
 
                            isFetchingFriends = false;
                        });
                    });
                    refreshBtn.click()
 
                    const addContainer = document.createElement("div");
                    addContainer.style.display = "flex"
                    addContainer.style.padding = "7px"
                    addContainer.style.margin = "5px"
 
                    const friendInput = document.createElement("input");
                    friendInput.type = "text";
                    friendInput.placeholder = "Friend Name";
                    friendInput.style.arginRight = "5px"
 
                    const addButton = document.createElement("div");
                    addButton.classList.add("btn", "black", "textsecondary");
                    addButton.textContent = "Add Friend";
 
                    addButton.addEventListener("click", () => {
                        const friendName = friendInput.value.trim();
                        const oldPlaceholder = friendInput.placeholder
 
                        if (friendName.length > 0) {
                            // Call addFriend function with playerNameKEK and friendName
                            addFriend(playerNameKEK, friendName)
                                .then(() => {
                                // Optionally do something after successful friend addition
                                console.log(`Friend ${friendName} added successfully`);
                                refreshBtn.click()
                            })
                                .catch(error => {
                                // Handle error if needed
                                console.error('Error adding friend:', error);
                            });
                        } else {
                            friendInput.placeholder = "Enter Something!"
                            setTimeout(() => {
                                friendInput.placeholder = oldPlaceholder
                            }, 500)
                        }
                        friendInput.textContent = ""
                    });
 
                    friendInput.style.flex = 1
 
                    addContainer.appendChild(friendInput);
                    addContainer.appendChild(addButton);
 
                    friendListContainer.appendChild(refreshBtn);
                    friendListContainer.appendChild(addContainer);
                    document.body.appendChild(friendListContainer);
                    // console.log(friendList)
                    updateFriendList(friendList);
 
 
                }
 
                function updateFriendList(data) {
                    const existingList = document.querySelector(".friendListGridKEK");
 
                    if (existingList) {
                        existingList.remove();
                    }
 
                    const marginVal = "2px";
                    const paddingVal = "4px";
                    const columnNames = ["Friend Name", "Status", "Settings"];
                    const grid = createGridContainer(columnNames);
                    grid.classList.add("friendListGridKEK");
 
                    for (const friend of data) {
                        const friendName = friend.friend_name;
                        const friendStatus = friend.status;
 
                        const cell = document.createElement("div");
                        cell.className = "btn black friend-list-item";
                        cell.textContent = `${friendName}`;
                        cell.style.margin = marginVal;
                        cell.style.padding = paddingVal;
 
                        const cellStatus = document.createElement("div");
                        cellStatus.className = "btn black friend-list-item";
                        cellStatus.textContent = `${friendStatus === 1 ? 'Online' : 'Offline'}`;
                        cellStatus.style.margin = marginVal;
                        cellStatus.style.padding = paddingVal;
 
                        if(friendStatus == 1) {
                            cellStatus.classList.add("textgreen")
                            cell.classList.add("textgreen")
                        } else {
                            cellStatus.classList.add("textgrey")
                            cell.classList.add("textgrey")
                        }
 
                        const settings = document.createElement("div")
                        settings.textContent = "⚙️"
                        settings.style.textAlign = "center"
                        settings.classList.add("btn", "black", "friend-list-item")
                        settings.style.margin = marginVal;
                        settings.style.padding = paddingVal;
 
                        settings.addEventListener('click', function (event) {
                            event.stopPropagation()
                            const friendMenu = document.querySelector(".friend-menu")
                            if(friendMenu) {
                                friendMenu.remove()
                            }
                            // Calculate the position for the menu
                            const rect = event.target.getBoundingClientRect();
                            const menuTop = rect.top + window.scrollY;
                            const menuLeft = rect.left + rect.width + window.scrollX;
 
                            // Create the context menu
                            const menu = document.createElement("div");
                            menu.classList.add("panel", "context", "border", "grey", "kek-ui-menu", "friend-menu");
                            menu.style.position = "absolute";
                            menu.style.top = `${menuTop}px`;
                            menu.style.left = `${menuLeft + 10}px`;
 
                            // Add choices to the context menu
                            menu.appendChild(createChoice("Whisper"));
                            menu.appendChild(createChoice("Party Invite"));
                            menu.appendChild(createChoice("Delete"));
 
                            function createChoice(textContent) {
                                const choiceDiv = document.createElement("div");
                                choiceDiv.classList.add("choice");
                                choiceDiv.textContent = textContent;
                                const chatInput = document.querySelector(".chatsection input");
                                const chatInputContainer = document.querySelector("#chatinput")
                                choiceDiv.addEventListener("click", (e) => {
                                    e.stopPropagation()
                                    const friendMenu = document.querySelector(".friend-menu")
                                    if(friendMenu) {
                                        friendMenu.remove()
                                    }
                                    if(textContent.toLowerCase() == "delete") {
                                        deleteFriend(playerNameKEK, friendName)
                                            .then(() => {
                                            const refBtn = document.querySelector(".refreshBtnFriendList");
                                            if (refBtn) {
                                                refBtn.click()
                                            }
                                        })
                                            .catch(error => {
                                            // Handle error, if needed
                                            console.error('Error deleting friend:', error);
                                        });
                                    } else if (textContent.toLowerCase() == "party invite") {
                                        document.body.dispatchEvent(new KeyboardEvent('keydown', { bubbles: true, keyCode: 13 }));
                                        if (chatInput) {
                                            chatInput.value = `/partyinvite `;
                                            // Dispatch the Enter key press event
                                            chatInput.dispatchEvent(new InputEvent('input', { bubbles: true }));
                                            chatInput.value = `${friendName}`
 
                                            chatInput.dispatchEvent(new KeyboardEvent('keydown', { bubbles: true, keyCode: 13 }));
                                        }
                                    } else if (textContent.toLowerCase() == "whisper") {
                                        document.body.dispatchEvent(new KeyboardEvent('keydown', { bubbles: true, keyCode: 13 }));
                                        if (chatInput) {
                                            chatInput.value = `/${friendName} `;
                                            // Dispatch the Space key press event
                                            chatInput.dispatchEvent(new InputEvent('input', { bubbles: true }));
                                        }
                                    }
                                })
 
                                return choiceDiv;
                            }
                            // Add the context menu to the document body or another container
                            document.body.appendChild(menu);
                        });
 
                        grid.appendChild(cell);
                        grid.appendChild(cellStatus);
                        grid.appendChild(settings);
                    }
 
                    const mainContainer = document.querySelector(".friendlistKEK");
 
                    if (mainContainer) {
                        mainContainer.appendChild(grid);
                    }
                }
                // Function to update button class based on buffsHideIrrelevant value
                function updateShowBuffsBtn(button) {
                    const buffsHideIrrelevant = localStorage.getItem('buffsHideIrrelevant') === 'true';
                    if (buffsHideIrrelevant) {
                        button.classList.remove('textsecondary');
                        button.classList.add('textgreen');
                        button.textContent = "Your Buffs"
                    } else {
                        button.classList.remove('textgreen');
                        button.classList.add('textsecondary');
                        button.textContent = "All Buffs"
 
                    }
                }
                // Function to toggle buffsHideIrrelevant in localStorage
                function toggleBuffsHideIrrelevant(event) {
 
                    const currentSetting = localStorage.getItem('buffsHideIrrelevant');
                    const newSetting = currentSetting === 'true' ? 'false' : 'true';
 
                    // Save the newSetting in localStorage
                    localStorage.setItem('buffsHideIrrelevant', newSetting);
                    updateShowBuffsBtn(event.target)
                    location.reload()
                }
 
                function handleBtnBar() {
                    const btnBar = document.querySelector(".btnbar.svelte-133q4bd")
                    const btnBarTopLeft = document.querySelector(".btnbar")
                    const btnBarKEK = document.createElement("div")
                    if(btnBar && !btnBar.classList.contains("btnBarModifiedKEK")) {
                        btnBarKEK.classList.add("btnbarKEK")
                        btnBarKEK.style.display = "flex"
                        btnBarKEK.style.float = "right"
                        btnBarKEK.style.clear = "right"
                        btnBarKEK.style.margin = "5px"
                        btnBar.classList.add("btnBarModifiedKEK")
 
                        // Create L button
                        const lockBtn = createBtn("Lock🔒", "Lock UI");
                        btnBarKEK.appendChild(lockBtn);
 
                        // Create P button
                        const personalGloomBtn = createBtn("👹", "Gloom Personal");
                        btnBarKEK.appendChild(personalGloomBtn);
 
                        // Create R button
                        const rankingBtn = createBtn("📊", "Gloom Rankings");
                        btnBarKEK.appendChild(rankingBtn)
 
                        const friendBtn = createBtn("🤝", "Friends")
                        btnBarKEK.appendChild(friendBtn)
 
                        btnBar.parentNode.appendChild(btnBarKEK)
 
                        const whispersBtn = createBtn("Whispers", "Whispers")
                        btnBarTopLeft.appendChild(whispersBtn)
 
                        const showYourBuffsBtn = createBtn("Your Buffs Only", "Show Your Buffs Only")
                        btnBarTopLeft.appendChild(showYourBuffsBtn)
                    } else {
                        setTimeout(handleBtnBar, 1)
                    }
 
                    function createBtn(text, title) {
                        const button = document.createElement("div");
                        button.className = "btn border black textsecondary";
                        button.textContent = text;
                        button.style.paddingLeft = "3px"
                        button.style.paddingRight = "3px"
                        button.style.margin = "2px"
                        if(title == "Lock UI") {
                            button.classList.add("lockUIKEK")
                            if(props["UILock"] == true) {
                                button.classList.add("textgreen")
                                button.classList.remove("textsecondary")
                            } else {
                                button.classList.remove("textgreen")
                                button.classList.add("textsecondary")
                            }
                            button.addEventListener("click", () => {
                                // console.log("clicking lock btn")
                                uiLockToggle()
                            })
                        }
                        if(title == "Gloom Rankings") {
                            button.addEventListener("click", handleGloomRankings)
                        }
                        if(title == "Gloom Personal") {
                            button.addEventListener("click", handlePersonalGloom)
                        }
                        if(title == "Friends") {
                            button.addEventListener("click", handleFriendList)
                        }
                        if(title == "Show Your Buffs Only") {
                            const buffsHideIrrelevant = localStorage.getItem('buffsHideIrrelevant') === 'true';
                            updateShowBuffsBtn(button)
                            button.addEventListener("click", toggleBuffsHideIrrelevant)
                        }
                        if(title == "Whispers") {
                            button.addEventListener("click", handleWhisperLogs)
                        }
                        // Add any additional styling or event listeners as needed
                        button.addEventListener("mouseenter", function() {
                            if(btnBarKEK) {
                                const displayBtn = document.createElement("div")
                                displayBtn.classList.add("btn", "black", "displayBtnKEK", "border", "textsecondary")
                                displayBtn.textContent = title
                                displayBtn.style.paddingLeft = "3px"
                                displayBtn.style.paddingRight = "3px"
                                displayBtn.style.margin = "2px"
                                btnBarKEK.insertBefore(displayBtn, btnBarKEK.firstChild)
                            }
                        })
 
                        button.addEventListener("mouseleave", function() {
                            if(btnBarKEK) {
                                const displayBtn = btnBarKEK.querySelector(".displayBtnKEK")
                                if(displayBtn) {
                                    displayBtn.remove()
                                }
                            }
                        })
                        return button;
                    }
                }
                // Function to calculate the total number of seen for a sender
                function calculateTotalNotSeen(logs) {
                    // Calculate the total number of not seen (where log.seen is equal to 0)
                    const totalNotSeen = logs.reduce((totalNotSeen, log) => totalNotSeen + (log.seen === 0 ? 1 : 0), 0);
                    // console.log(totalNotSeen, logs);
                    return totalNotSeen;
                }
                // Function to fetch all sender names from whisper logs sorted by total number of seen
                function fetchAllSenderNames() {
                    // Retrieve whisper logs from localStorage
                    let whisperLogs = localStorage.getItem('whisperLogsKEK');
 
                    // Parse the whisper logs JSON string
                    whisperLogs = whisperLogs ? JSON.parse(whisperLogs) : {};
 
                    // Get an array of sender names
                    const senderNames = Object.keys(whisperLogs);
 
                    // Sort sender names based on the total number of seen
                    senderNames.sort((a, b) => {
                        const totalSeenA = whisperLogs[a] ? calculateTotalNotSeen(whisperLogs[a]) : 0;
                        const totalSeenB = whisperLogs[b] ? calculateTotalNotSeen(whisperLogs[b]) : 0;
 
                        return totalSeenB - totalSeenA;
                    });
 
                    const senderObj = {}
                    const newWhisperLogs = {}
                    for(let name of senderNames) {
                        newWhisperLogs[name] = whisperLogs[name]
                    }
                    // console.log(whisperLogs, newWhisperLogs)
                    localStorage.setItem('whisperLogsKEK', JSON.stringify(newWhisperLogs));
 
                    for(let name of senderNames) {
                        senderObj[name] = whisperLogs[name][whisperLogs[name].length - 1].seen
                    }
                    // Return the sorted array of sender names
                    // console.log(senderNames)
                    return senderObj;
                }
                // addWhisperLog("from", "testingthing", "hey there new here", playerNameKEK)
                // Function to update the logs for a given sender
                function updateWhisperLogs(senderName, logs) {
                    // Retrieve existing whisper logs from localStorage
                    let whisperLogs = JSON.parse(localStorage.getItem('whisperLogsKEK')) || {};
 
                    // Update the logs for the specified sender
                    whisperLogs[senderName] = logs;
 
                    // Save the updated whisper logs back to localStorage
                    localStorage.setItem('whisperLogsKEK', JSON.stringify(whisperLogs));
                }
 
                function addWhisperLog(type, senderName, content, receiverName) {
                    // Retrieve existing whisper logs from localStorage
                    let whisperLogs = JSON.parse(localStorage.getItem('whisperLogsKEK')) || {};
 
                    // Create a new log entry
                    const logEntry = { content, type, receiver: receiverName, seen: 0 };
 
                    // Check if the sender already has logs
                    if (whisperLogs[senderName]) {
                        // Append the new log entry to the existing logs
                        whisperLogs[senderName].push(logEntry);
 
                        // Check if the array length exceeds the maximum allowed
                        const maxLogsAllowed = 50; // Adjust this value as needed
                        if (whisperLogs[senderName].length > maxLogsAllowed) {
                            // Remove the oldest log (first in the array)
                            whisperLogs[senderName].shift();
                        }
                    } else {
                        // Create a new array for the sender and add the log entry
                        whisperLogs[senderName] = [logEntry];
                    }
 
                    // Save the updated whisper logs back to localStorage
                    localStorage.setItem('whisperLogsKEK', JSON.stringify(whisperLogs));
                }
                // Function to fetch all logs for a given sender
                function fetchWhisperLogs(senderName) {
                    // Retrieve existing whisper logs from localStorage
                    let whisperLogs = JSON.parse(localStorage.getItem('whisperLogsKEK')) || {};
 
                    // Check if logs exist for the specified sender
                    if (whisperLogs[senderName]) {
                        // Return the logs for the sender
                        return whisperLogs[senderName];
                    } else {
                        // Return an empty array if no logs found for the sender
                        return [];
                    }
                }
                // Function to handle whisper logs
                function handleWhisperLogs() {
                    // Fetch all sender names from whisper logs
                    const existing = document.querySelector(".whispersKEK")
                    if(existing) {
                        existing.remove()
                        return;
                    }
                    let senderObj = fetchAllSenderNames();
                    let senderNames = Object.keys(senderObj)
                    // Create a new window
                    const window = createUIWindow('Whispers');
 
                    if(props[".whispersKEK"]) {
                        window.style.top = props[".whispersKEK"].top + "px" || window.style.top
                        window.style.left = props[".whispersKEK"].left + "px" || window.style.left
                    }
 
                    makeElementDraggable2(window, ".whispersKEK")
                    const titleFrame = window.querySelector(".titleframe")
                    titleFrame.style.borderBottom = "2px solid #393636"
 
                    const senderContainer = document.createElement("div")
                    senderContainer.classList.add("senderContainerKEK")
                    senderContainer.style.display = "flex"
                    senderContainer.style.flexDirection = "column"
 
                    const whisperContainer = document.createElement("div")
                    whisperContainer.style.display = "flex"
                    whisperContainer.style.flexDirection = "column"
 
                    whisperContainer.classList.add("whisperContainerKEK")
 
                    let senderMaxHeight = 400
                    // Create a div for sender names list
                    const senderNamesDiv = document.createElement('div');
                    senderNamesDiv.classList.add("senderNamesListContainerKEK")
                    senderNamesDiv.style.overflow = 'hidden';
                    senderNamesDiv.style.height = senderMaxHeight + "px"
                    // Add event listeners to handle scrolling
                    senderNamesDiv.addEventListener('wheel', (event) => {
                        // Adjust the scrollTop property based on your scrolling logic
                        senderNamesDiv.scrollTop += event.deltaY;
                    });
                    // Create an unordered list for sender names
                    const senderNamesList = document.createElement('div');
                    senderNamesList.classList.add("senderNamesListKEK")
                    senderNamesList.style.display = "flex"
                    senderNamesList.style.flexDirection = "column"
 
                    // Add sender names to the list
                    senderNames.forEach(senderName => {
                        const listItem = document.createElement('div');
                        const hasSeen = senderObj[senderName]
                        if(hasSeen == 0) {
                            listItem.textContent = senderName + " (new)";
                        } else {
                            listItem.textContent = senderName;
                        }
                        listItem.classList.add("btn", "black", "textsecondary", "border")
                        listItem.addEventListener('click', (e) => {
                            handleSenderNameClick(e, senderName)
                        });
                        listItem.style.padding = "10px"
                        senderNamesList.appendChild(listItem);
                    });
                    // Create an input for sorting sender names
                    const sortInput = document.createElement('input');
                    sortInput.setAttribute('placeholder', 'Search Names...');
                    sortInput.addEventListener('input', handleSortInput);
                    sortInput.style.padding = "10px"
                    // Append sender names list to the div
                    senderNamesDiv.appendChild(senderNamesList);
 
                    // Create a div for whisper logs
                    const whisperLogsDiv = document.createElement('div');
                    let whisperWidth = 600
                    let whisperMaxHeight = 400
                    whisperLogsDiv.classList.add("whisperLogsListContainerKEK")
                    whisperLogsDiv.style.height = whisperMaxHeight + "px"
                    whisperLogsDiv.style.overflow = 'hidden';
 
                    // Add event listeners to handle scrolling
                    whisperLogsDiv.addEventListener('wheel', (event) => {
                        // Adjust the scrollTop property based on your scrolling logic
                        whisperLogsDiv.scrollTop += event.deltaY;
                    });
                    // Create an unordered list for whisper logs
 
                    const whisperLogsList = document.createElement('div');
                    whisperLogsList.style.width = whisperWidth + "px"
                    whisperLogsList.id = "whisperLogsList"
 
                    // Create an input for sending whispers
                    const sendInput = document.createElement('input');
                    sendInput.setAttribute('placeholder', 'Type your message...');
                    sendInput.addEventListener('keypress', handleSendWhisperInput);
                    sendInput.style.padding = "10px"
                    sendInput.style.width = whisperWidth + "px"
                    sendInput.addEventListener('input', chatInputListener);
 
 
                    sortInput.classList.add("btn", "black", "textsecondary")
                    sendInput.classList.add("btn", "black", "textsecondary")
                    // Append whisper logs list to the div
                    whisperLogsDiv.appendChild(whisperLogsList);
 
                    const flexContainer = document.createElement("div")
                    flexContainer.style.display = "flex"
                    // Append whisper logs div to the window
                    senderContainer.appendChild(sortInput);
                    senderContainer.appendChild(senderNamesDiv);
 
                    whisperContainer.appendChild(whisperLogsDiv);
                    whisperContainer.appendChild(sendInput);
 
                    flexContainer.appendChild(senderContainer);
                    flexContainer.appendChild(whisperContainer);
 
                    window.appendChild(flexContainer)
                    document.body.appendChild(window)
                }
 
                function handleSenderNameClick(e, senderName) {
                    // console.log(e.target, senderName)
                    const titleEle = document.querySelector(".whispersKEK .title")
                    e.stopPropagation()
                    const clickedItem = e.target
                    currentSenderName = senderName
                    displayWhisperLogs(senderName)
                    if(titleEle) {
                        titleEle.style.width = "300px"
                        titleEle.textContent = "Whispering " + currentSenderName
                    }
                    // Remove gray class and add black class for all sender name items
                    const senderNamesList = document.querySelectorAll('.senderNamesListKEK .btn');
                    senderNamesList.forEach(item => {
                        item.classList.remove('grey');
                        item.classList.add('black');
                    });
                    updateSenderNameList()
                }
                // Function to display whisper logs for a selected sender
                function displayWhisperLogs(senderName) {
                    // Fetch whisper logs for the selected sender
                    let logs = fetchWhisperLogs(senderName);
 
                    // Get the whisper logs list element
                    const whisperLogsList = document.querySelector('#whisperLogsList');
                    // Clear existing logs
                    whisperLogsList.innerHTML = '';
 
                    // Add logs to the list
                    logs.forEach(log => {
                        const listItem = document.createElement('div');
                        listItem.classList.add("btn", "black", "textsecondary");
 
                        // Set text alignment based on the log type
                        listItem.style.margin = "5px";
                        // Set maxLettersPerLine only if content length exceeds the threshold
 
                        const threshold = 300
                        if(log.content.trim().length > 40) {
                            listItem.style.width = `300px`;
                        } else {
                            listItem.style.width = `fit-content`;
                        }
                        // Calculate dynamic width based on the content length and max letters per line
 
                        listItem.style.whiteSpace = 'normal';
                        listItem.style.padding = "7px"
                        listItem.textContent = `${log.content}`;
 
                        // Set flex alignment based on the log type
                        listItem.style.marginLeft = log.type === 'from' ? '10' : 'auto';
                        listItem.style.marginRight = log.type === 'to' ? '10' : 'auto';
                        whisperLogsList.appendChild(listItem);
                        log.seen = 1;
                    });
                    whisperLogsList.parentNode.scrollTop = whisperLogsList.parentNode.scrollHeight
                    // Save the updated logs back to localStorage
                    updateWhisperLogs(senderName, logs);
                }
                // Function to update the sender name list
                function updateSenderNameList(updatedSenderObj) {
                    let senderObj, senderNames
                    const senderNamesListContainer = document.querySelector('.senderNamesListKEK');
                    if(!senderNamesListContainer) return;
                    if(!updatedSenderObj) {
                         senderObj = fetchAllSenderNames()
                    } else {
                        senderObj = updatedSenderObj
                    }
 
                    senderNames = Object.keys(senderObj)
 
                    // Get the sender names list container
                    // Remove the existing sender name items
                    senderNamesListContainer.innerHTML = '';
 
                    // Add sender names to the list
                    senderNames.forEach(senderName => {
                        const listItem = document.createElement('div');
                        const hasSeen = senderObj[senderName]
                        if(hasSeen == 0) {
                            listItem.textContent = senderName + " (new)";
                        } else {
                            listItem.textContent = senderName;
                        }
                        listItem.classList.add('btn', 'black', 'textsecondary', 'border');
                        // console.log(senderName, currentSenderName)
                        if(senderName == currentSenderName) {
                            listItem.classList.remove("black")
                            listItem.classList.add("grey")
                        }
                        listItem.addEventListener('click', (e) => {
                            handleSenderNameClick(e, senderName)
                        });
                        listItem.style.padding = '10px';
                        senderNamesListContainer.appendChild(listItem);
                    });
                }
                // Function to handle input for sorting sender names
                function handleSortInput(event) {
                    let senderObj = fetchAllSenderNames()
                    let senderNames = Object.keys(senderObj)
                    const searchTerm = event.target.value.toLowerCase();
                    const filteredSenderNames = senderNames.filter(senderName => senderName.toLowerCase().includes(searchTerm));
                    const newSenderObj = {}
                    for(let name of filteredSenderNames) {
                        newSenderObj[name] = senderObj[name]
                    }
                    updateSenderNameList(newSenderObj);
                }
                // Function to handle input for sending whispers
                function handleSendWhisperInput(event) {
                    if (event.key === 'Enter') {
                        // Call your sendWhisper function here
                        sendWhisper(event.target.value);
                        // Clear the input after pressing Enter
                        event.target.value = '';
                    }
                }
 
                function sendWhisper(content) {
                    if(currentSenderName == "") {
                        return
                    }
                    console.log("Whispering", currentSenderName)
                    const chatInput = document.querySelector(".chatsection input");
 
                    document.body.dispatchEvent(new KeyboardEvent('keydown', { bubbles: true, keyCode: 13 }));
                    if (chatInput) {
                        chatInput.value = `/${currentSenderName} `;
                        // Dispatch the Enter key press event
                        chatInput.dispatchEvent(new InputEvent('input', { bubbles: true }));
                        chatInput.value = `${content}`
 
                        chatInput.dispatchEvent(new KeyboardEvent('keydown', { bubbles: true, keyCode: 13 }));
                    }
                }
 
                function runAll() {
                    // console.log("running all")
                    // handleSkillbar()
                    // handlePartyframes()
                    // handlePartyframesMutations()
                    handleChatPanel()
                    handleChatInput()
                    handleExpBar()
                    handleBtnBar()
                    handleBagMenu()
                    // handleTargetFrames()
                    // refreshPartyframes()
                    // handleTargetframesMutations()
                    handleSkills()
                    handleStats()
                }
 
                document.addEventListener("contextmenu", function(e) {
                    // console.log(e.target)
                    setTimeout(() => {
                        const menu = document.querySelector(".panel.context")
                        if(menu && !menu.classList.contains("kek-ui-menu")) {
                            menu.classList.add("kek-ui-menu")
                            const playerNameEle = menu.querySelector(".choice.disabled")
                            if(playerNameEle) {
                                const playerName = playerNameEle.textContent.trim()
                                // console.log("right clicked on " + playerName)
 
                                const blockDiv = document.createElement("div")
                                blockDiv.classList.add("choice")
                                blockDiv.textContent = "Block"
                                menu.appendChild(blockDiv)
                                blockDiv.addEventListener("click", () => {
                                    console.log("blocking " + playerName)
                                    blockPlayer(playerName)
                                    menu.remove()
                                })
                            }
                        }
                    }, 1)
                })
 
                document.addEventListener("click", function(e) {
                    const friendMenu = document.querySelector(".friend-menu")
                    if(friendMenu) {
                        friendMenu.remove()
                    }
                })
 
                document.addEventListener('keydown', function (event) {
                    const focusedElement = document.activeElement;
 
                    // Check if the focused element is an input field
                    if (focusedElement.tagName === 'INPUT' || focusedElement.tagName === 'TEXTAREA') {
                        return;
                    }
                    const runeTrackerKey = keyBindsKEK["Rune Tracker"]
                    if (event.key === runeTrackerKey.toUpperCase() || event.key === runeTrackerKey) {
                        handleRuneTrackerUI();
                    }
                });
 
                document.addEventListener('keydown', function (event) {
                    const focusedElement = document.activeElement;
 
                    // Check if the focused element is an input field
                    if (focusedElement.tagName === 'INPUT' || focusedElement.tagName === 'TEXTAREA') {
                        return;
                    }
                    const emojiKey = keyBindsKEK["Emoji"]
                    if (event.key === emojiKey.toUpperCase() || event.key === emojiKey) {
                        generateEmojiUI();
                    }
                });
 
                document.addEventListener('keydown', function (event) {
                    const focusedElement = document.activeElement;
 
                    // Check if the focused element is an input field
                    if (focusedElement.tagName === 'INPUT' || focusedElement.tagName === 'TEXTAREA') {
                        return;
                    }
                    const blockedPlayersKey = keyBindsKEK["Blocked Players"]
                    if (event.key === blockedPlayersKey.toUpperCase() || event.key === blockedPlayersKey) {
                        generateBlockedPlayerUI();
                    }
                });
                // Wait for the page to load
                handleDOMMutations()
                // handleSkillbar()
                handleExpBar()
                handleBtnBar()
                // handlePartyframes()
                handleChatPanel()
                handleChatInput()
                // handleTargetFrames()
                // refreshPartyframes()
                generateMenuForUI()
                // handleTargetframesMutations()
                // handlePartyframesMutations()
                handleGloomTimers()
                handleBagMenu()
                handleSkills()
                handleStats()
 
            } else {
                setTimeout(init, 1)
            }
        }
        else {
            setTimeout(init, 1)
        }
    }
 
    init()
})();
