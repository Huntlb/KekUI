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
