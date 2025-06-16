// priority: 0

// Visit the wiki for more info - https://kubejs.com/

ServerEvents.recipes((event) => {
  let deleteTools = [
    "create_ironworks:steel_sword",
    "create_ironworks:steel_hammer",
    "create_ironworks:steel_paxel",
    "create_ironworks:steel_hoe",
    "create_ironworks:bronze_sword",
    "create_ironworks:bronze_hammer",
    "create_ironworks:bronze_paxel",
    "create_ironworks:bronze_hoe",
    "betterend:iron_hammer",
    "betterend:diamond_hammer",
    "ratatouille:frozen_block",
    "betterend:leather_stripe",
    "legendarysurvivaloverhaul:heater",
    "legendarysurvivaloverhaul:cooler",
    "createmetallurgy:sturdy_whisk",
    "createlowheated:basic_burner",
    "createmetallurgy:foundry_lid",
    "createmetallurgy:foundry_basin",
    "createmetallurgy:glassed_foundry_lid",
    "createmetallurgy:foundry_mixer",
    "create_confectionery:bar_of_white_chocolate",
    "create_confectionery:bar_of_black_chocolate",
    "create_confectionery:bar_of_ruby_chocolate",
    "create_confectionery:bar_of_caramel",
    "minecraft:diamond_hoe",
    "minecraft:diamond_pickaxe",
    "create_ironworks:diamond_paxel",
    "create_ironworks:diamond_hammer",
    "minecraft:iron_hoe",
    "minecraft:iron_pickaxe",
    "minecraft:golden_shovel",
    "minecraft:diamond_shovel",
    "minecraft:iron_shovel",
    "minecraft:golden_axe",
    "minecraft:diamond_axe",
    "minecraft:iron_axe",
    "minecraft:golden_hoe",
    "minecraft:iron_sword",
    "minecraft:golden_sword",
    "legendarysurvivaloverhaul:canteen",
    "legendarysurvivaloverhaul:large_canteen",
    "create:mechanical_drill",
    "archers_paradox:frost_arrow",
    "archers_paradox:phantasmal_arrow",
    "archers_paradox:diamond_arrow",
    "archers_paradox:quartz_arrow",
    "archers_paradox:prismarine_arrow",
    "archers_paradox:blaze_arrow",
    "archers_paradox:ender_arrow",
    "dew_drop_farmland_growth:hydrating_fertilizer",
    "dew_drop_farmland_growth:weak_fertilizer",
    "dew_drop_farmland_growth:strong_fertilizer",
    "dew_drop_farmland_growth:high_quality_fertilizer",
    "dew_drop_farmland_growth:hyper_fertilizer",
    "dew_drop_farmland_growth:pristine_quality_fertilizer",
    "createmechanicalcompanion:mechanical_wolf_link",
    "dynamites_overhaul:red_paper",
    "minecraft:saddle",
    "archers_paradox:frost_arrow",
    "archers_paradox:blaze_arrow",
    "quark:feeding_trough",
    "archers_paradox:quartz_arrow",
    "archers_paradox:diamond_arrow",
    "archers_paradox:prismarine_arrow",
    "archers_paradox:ender_arrow",
    "archers_paradox:phantasmal_arrow",
    "dew_drop_farmland_growth:low_quality_fertilizer",
    "travellersbootsreloaded:travellers_boots_tier1",
    "travellersbootsreloaded:travellers_boots_tier3",
    "travellersbootsreloaded:travellers_boots_tier4",
    "travellersbootsreloaded:travellers_boots_tier5",
    "incubation:hay_nest",
    "musketmod:musket",
    "musketmod:blunderbuss",
    "musketmod:pistol",
    "minecolonies:supplychestdeployer",
    "minecolonies:supplycampdeployer",
  ];

  event.remove({
    type: "minecraft:crafting_shaped",
    output: "minecraft:map",
  });

  event.remove({
    type: "minecraft:crafting_shaped",
    output: "legendarysurvivaloverhaul:healing_herbs",
  });

  event.shaped(Item.of("minecraft:map", 1), [" B ", " A ", " C "], {
    A: "minecraft:black_dye",
    B: "minecraft:feather",
    C: "minecraft:paper",
  });

  event.shapeless(Item.of("dynamites_overhaul:small_tnt", 1), [
    "minecraft:string",
    "zombiesmore:dynamite",
  ]);

  function deleteItems(deleteItems) {
    deleteItems.forEach((item) => {
      event.remove({ output: item });
    });
  }

  deleteItems(deleteTools);

  event.replaceInput(
    { input: "minecraft:flint_and_steel" },
    "minecraft:flint_and_steel",
    "notreepunching:fire_starter"
  );

  event.remove({
    type: "minecraft:crafting_shaped",
    output: "minecraft:netherite_ingot",
  });

  event.campfireCooking(
    "hardcore_torches:lit_torch",
    "minecraft:stick",
    0.35,
    200
  );

  event.custom({
    type: "ratatouille:threshing",
    ingredients: [
      {
        item: "butchersdelight:deadchiken",
      },
    ],
    processingTime: 200,
    results: [
      {
        item: "minecraft:feather",
        count: 3,
      },
      {
        item: "minecraft:bone",
        count: 1,
      },
      {
        item: "minecraft:chicken",
        count: 1,
      },
      {
        item: "minecraft:feather",
        count: 2,
        chance: 0.5,
      },
    ],
  });

  event.custom({
    type: "ratatouille:threshing",
    ingredients: [
      {
        item: "butchersdelight:deadhoglin",
      },
    ],
    processingTime: 200,
    results: [
      {
        item: "butchersdelight:hoglinskin",
        count: 1,
      },
      {
        item: "minecraft:bone",
        count: 2,
      },
      {
        item: "farmersdelight:ham",
        count: 2,
      },
      {
        item: "minecraft:porkchop",
        count: 6,
      },
    ],
  });

  event.custom({
    type: "ratatouille:threshing",
    ingredients: [
      {
        item: "butchersdelight:dead_cow",
      },
    ],
    processingTime: 200,
    results: [
      {
        item: "butchersdelight:cow_hide",
        count: 1,
      },
      {
        item: "minecraft:bone",
        count: 2,
      },
      {
        item: "butchersdelight:skullcow",
        count: 1,
      },
      {
        item: "minecraft:beef",
        count: 5,
      },
    ],
  });

  event.custom({
    type: "ratatouille:threshing",
    ingredients: [
      {
        item: "butchersdelight:deadpig",
      },
    ],
    processingTime: 200,
    results: [
      {
        item: "minecraft:bone",
        count: 1,
      },
      {
        item: "farmersdelight:ham",
        count: 2,
      },
      {
        item: "minecraft:porkchop",
        count: 4,
      },
    ],
  });

  event.custom({
    type: "ratatouille:threshing",
    ingredients: [
      {
        item: "butchersdelight:deadsheep",
      },
    ],
    processingTime: 200,
    results: [
      {
        item: "butchersdelight:sheephide",
        count: 1,
      },
      {
        item: "minecraft:bone",
        count: 2,
      },
      {
        item: "minecraft:mutton",
        count: 5,
      },
    ],
  });

  event.custom({
    type: "ratatouille:threshing",
    ingredients: [
      {
        item: "butchersdelight:deadgoat",
      },
    ],
    processingTime: 200,
    results: [
      {
        item: "butchersdelight:goat_fur",
        count: 1,
      },
      {
        item: "minecraft:bone",
        count: 2,
      },
      {
        item: "minecraft:mutton",
        count: 5,
      },
    ],
  });

  event.custom({
    type: "ratatouille:threshing",
    ingredients: [
      {
        item: "butchersdelight:deadllama",
      },
    ],
    processingTime: 200,
    results: [
      {
        item: "butchersdelight:goat_fur",
        count: 1,
      },
      {
        item: "minecraft:leather",
        count: 1,
      },
      {
        item: "minecraft:bone",
        count: 2,
      },
      {
        item: "minecraft:mutton",
        count: 5,
      },
    ],
  });

  event.custom({
    type: "ratatouille:threshing",
    ingredients: [
      {
        item: "butchersdelight:deadrabbitbrown",
      },
    ],
    processingTime: 200,
    results: [
      {
        item: "minecraft:rabbit_hide",
        count: 1,
      },
      {
        item: "minecraft:rabbit",
        count: 2,
      },
      {
        item: "minecraft:bone",
        count: 1,
      },
    ],
  });

  event.custom({
    type: "ratatouille:threshing",
    ingredients: [
      {
        item: "butchersdelight:deadstrider",
      },
    ],
    processingTime: 200,
    results: [
      {
        item: "minecraft:string",
        count: 5,
      },
      {
        item: "minecraft:basalt",
        count: 2,
      },
    ],
  });

  event.remove({
    type: "create:mixing",
    input: "minecraft:cocoa_beans",
  });

  event.remove({
    type: "create:mixing",
    input: "create:brass_ingot",
  });

  event.remove([
    { type: "minecraft:smelting", output: "#forge:foods" },
    { type: "minecraft:campfire_cooking", output: "#forge:foods" },
    { type: "minecraft:campfire_cooking", output: "#forge:foods" },
  ]);

  event.remove([{ type: "minecraft:campfire_cooking" }]);

  event.remove([
    {
      output: "create:wheat_flour",
      input: "minecraft:wheat",
    },
  ]);

  event.remove([
    {
      type: "minecraft:crafting_shaped",
      output: "minecraft:bread",
    },
    {
      type: "minecraft:crafting_shapeless",
      output: "minecraft:bread",
    },
    {
      type: "minecraft:smelting",
      output: "create_confectionery:gingerbread",
    },
    {
      type: "minecraft:campfire_cooking",
      output: "create_confectionery:gingerbread",
    },
  ]);

  event.remove({ output: "create:dough" });
  event.remove({
    type: "createmetallurgy:melting",
    input: "#forge:dirty_dusts",
  });

  event.remove({
    type: "createmetallurgy:melting",
    input: "#forge:dusts",
  });

  event.remove({
    type: "createmetallurgy:casting_in_basin",
    output: "create:andesite_alloy_block",
  });
  event.remove({ output: "createaddition:cake_base_baked" });
  event.remove({ output: "createaddition:cake_base" });
  event.remove({ input: "createaddition:cake_base_baked" });
  event.remove({ input: "createaddition:cake_base" });
  event.remove({ input: "minecraft:egg", output: "minecraft:cake" });
  event.remove({ output: "create:andesite_alloy" });
  event.remove({
    type: "createmetallurgy:alloying",
    output: "create:andesite_alloy_block",
  });

  event.custom({
    type: "createmetallurgy:melting",
    heatRequirement: "lowheated",
    ingredients: [
      {
        item: "create:raw_zinc",
      },
    ],
    processingTime: 60,
    results: [
      {
        amount: 90,
        fluid: "createmetallurgy:molten_zinc",
      },
    ],
  });

  event.custom({
    type: "createmetallurgy:melting",
    heatRequirement: "lowheated",
    ingredients: [
      {
        item: "createmetallurgy:copper_dust",
      },
    ],
    processingTime: 40,
    results: [
      {
        amount: 180,
        fluid: "createmetallurgy:molten_copper",
      },
    ],
  });

  event.custom({
    type: "createmetallurgy:melting",
    heatRequirement: "lowheated",
    ingredients: [
      {
        item: "createmetallurgy:iron_dust",
      },
    ],
    processingTime: 50,
    results: [
      {
        amount: 180,
        fluid: "createmetallurgy:molten_iron",
      },
    ],
  });

  event.custom({
    type: "createmetallurgy:melting",
    heatRequirement: "lowheated",
    ingredients: [
      {
        item: "createmetallurgy:gold_dust",
      },
    ],
    processingTime: 40,
    results: [
      {
        amount: 180,
        fluid: "createmetallurgy:molten_gold",
      },
    ],
  });

  event.custom({
    type: "createmetallurgy:melting",
    heatRequirement: "lowheated",
    ingredients: [
      {
        item: "createmetallurgy:zinc_dust",
      },
    ],
    processingTime: 45,
    results: [
      {
        amount: 180,
        fluid: "createmetallurgy:molten_zinc",
      },
    ],
  });

  event.custom({
    type: "createmetallurgy:melting",
    heatRequirement: "lowheated",
    ingredients: [
      {
        item: "kubejs:pure_tin_dust",
      },
    ],
    processingTime: 45,
    results: [
      {
        amount: 180,
        fluid: "createmetallurgy:molten_tin",
      },
    ],
  });

  event.custom({
    type: "createmetallurgy:melting",
    heatRequirement: "lowheated",
    ingredients: [
      {
        item: "kubejs:pure_lead_dust",
      },
    ],
    processingTime: 55,
    results: [
      {
        amount: 190,
        fluid: "createmetallurgy:molten_lead",
      },
    ],
  });

  event.custom({
    type: "create:item_application",
    ingredients: [
      {
        item: "createdieselgenerators:chip_wood_block",
      },
      {
        item: "kubejs:cold_crystal",
      },
    ],
    results: [
      {
        item: "kubejs:cold_wood",
      },
    ],
  });

  event.custom({
    type: "createmetallurgy:alloying",
    heatRequirement: "heated",
    ingredients: [
      {
        item: "createmetallurgy:coke",
      },
      {
        item: "create:limestone",
      },
      {
        amount: 90,
        fluid: "createmetallurgy:molten_iron",
      },
    ],
    processingTime: 40,
    results: [
      {
        amount: 40,
        fluid: "createbigcannons:molten_cast_iron",
      },
    ],
  });

  event.custom({
    type: "createmetallurgy:alloying",
    heatRequirement: "lowheated",
    ingredients: [
      {
        item: "minecraft:andesite",
      },
      {
        amount: 90,
        fluid: "createmetallurgy:molten_iron",
      },
    ],
    processingTime: 40,
    results: [
      {
        amount: 90,
        fluid: "kubejs:molten_andesite_alloy",
      },
    ],
  });

  event.custom({
    type: "createmetallurgy:alloying",
    heatRequirement: "lowheated",
    ingredients: [
      {
        item: "minecraft:andesite",
      },
      {
        amount: 90,
        fluid: "createmetallurgy:molten_zinc",
      },
    ],
    processingTime: 40,
    results: [
      {
        amount: 90,
        fluid: "kubejs:molten_andesite_alloy",
      },
    ],
  });

  event.custom({
    type: "createmetallurgy:casting_in_basin",
    ingredients: [
      {
        amount: 405,
        fluid: "kubejs:molten_andesite_alloy",
        nbt: {},
      },
    ],
    processingTime: 160,
    result: {
      item: "create:andesite_alloy_block",
    },
  });

  event.custom({
    type: "createmetallurgy:casting_in_table",
    ingredients: [
      {
        item: "createmetallurgy:graphite_ingot_mold",
      },
      {
        amount: 45,
        fluid: "kubejs:molten_andesite_alloy",
        nbt: {},
      },
    ],
    processingTime: 60,
    result: {
      item: "create:andesite_alloy",
    },
  });

  event.custom({
    type: "create:item_application",
    ingredients: [
      {
        item: "createdieselgenerators:chip_wood_block",
      },
      {
        item: "legendary_monsters:primal_ice_shard",
      },
    ],
    results: [
      {
        item: "kubejs:cold_wood",
      },
    ],
  });

  event.shaped(Item.of("woodworks:sawmill", 1), ["CA ", "CB ", "CCC"], {
    A: "notreepunching:iron_saw",
    B: "kubejs:reinforced_cold_copper_plate",
    C: "#minecraft:planks",
  });

  event
    .smelting("kubejs:dirty_ammonia_bottle", "kubejs:urine_bottle")
    .xp(0.1)
    .cookingTime(200);

  event.shaped(
    Item.of("kubejs:pure_ammonia_bottle", 1),
    [" A ", " B ", " C "],
    {
      A: "kubejs:dirty_ammonia_bottle",
      B: "minecraft:paper",
      C: "minecraft:charcoal",
    }
  );

  event.remove({
    output: "minecraft:campfire",
  });

  event.remove({
    output: "minecraft:torch",
  });

  event.remove({
    output: "minecraft:soul_torch",
  });

  event.shaped(Item.of("minecraft:torch", 1), ["A  ", "B  ", "   "], {
    A: "born_in_chaos_v1:fire_dust",
    B: "minecraft:stick",
  });

  event.shaped(Item.of("minecraft:torch", 1), ["A  ", "B  ", "   "], {
    A: "born_in_chaos_v1:fire_dust",
    B: "minecraft:stick",
  });

  event.shaped(Item.of("minecraft:soul_torch", 1), ["B  ", "S  ", "   "], {
    B: "minecraft:torch",
    S: "minecraft:soul_sand",
  });

  event.shaped(Item.of("minecraft:soul_torch", 1), ["A  ", "B  ", "S  "], {
    A: "born_in_chaos_v1:fire_dust",
    B: "minecraft:stick",
    S: "minecraft:soul_sand",
  });

  event.shaped(Item.of("minecraft:campfire", 1), ["B B", "BAB", "BOB"], {
    A: "create_ironworks:rose_quartz_block",
    B: "minecraft:iron_bars",
    O: "minecraft:obsidian",
  });

  event.shaped(Item.of("minecraft:soul_campfire", 1), [" S ", " C ", " S "], {
    C: "minecraft:campfire",
    S: "minecraft:soul_sand",
  });
  event.replaceInput(
    { output: "createmetallurgy:casting_table" },
    "create:andesite_alloy",
    "kubejs:cold_copper"
  );

  event.replaceInput(
    { output: "createmetallurgy:casting_basin" },
    "create:andesite_alloy",
    "kubejs:cold_copper"
  );

  event.replaceInput(
    { input: "minecraft:campfire", type: "minecraft:crafting_shaped" },
    "minecraft:campfire",
    "createlowheated:basic_burner"
  );

  //"createmetallurgy:refractory_mortar",
  // "createlowheated:basic_burner",
  //  "createmetallurgy:foundry_lid",
  //  "createmetallurgy:foundry_basin",
  //  "createmetallurgy:glassed_foundry_lid",
  //  "createmetallurgy:foundry_mixer",

  event.shaped(
    Item.of("createmetallurgy:refractory_mortar", 1),
    ["BA ", "AB ", "   "],
    {
      A: "minecraft:smooth_sandstone",
      B: "minecraft:clay",
    }
  );

  event.shaped(Item.of("create:mechanical_drill", 1), [" A ", " B ", " C "], {
    A: "createoreexcavation:drill",
    B: "createaddition:iron_rod",
    C: "create:andesite_casing",
  });

  event.shaped(
    Item.of("createlowheated:basic_burner", 1),
    ["A A", "A A", "AAA"],
    {
      A: "kubejs:cold_copper",
    }
  );

  event.shaped(
    Item.of("createmetallurgy:foundry_lid", 1),
    ["AAA", "A A", "   "],
    {
      A: "kubejs:cold_copper",
    }
  );

  event.shaped(
    Item.of("createmetallurgy:foundry_basin", 1),
    ["   ", "ACA", "AAA"],
    {
      A: "kubejs:cold_copper",
      C: "createmetallurgy:refractory_mortar",
    }
  );

  event.shaped(
    Item.of("createmetallurgy:glassed_foundry_lid", 1),
    ["ACA", "CAC", "   "],
    {
      A: "kubejs:cold_copper",
      C: "minecraft:glass",
    }
  );

  event.shaped(
    Item.of("createmetallurgy:foundry_mixer", 1),
    [" B ", " C ", " A "],
    {
      A: "createmetallurgy:sturdy_whisk",
      B: "create_connected:crank_wheel",
      C: "kubejs:cold_wood",
    }
  );

  event.shaped(Item.of("kubejs:cold_copper_block", 1), ["AAA", "AAA", "AAA"], {
    A: "kubejs:cold_copper",
  });

  event.shapeless(Item.of("kubejs:cold_copper", 9), [
    "kubejs:cold_copper_block",
  ]);

  event.shapeless(Item.of("legendarysurvivaloverhaul:healing_herbs", 1), [
    "#minecraft:flowers",
    "#c:seeds",
  ]);

  event.shapeless(Item.of("legendarysurvivaloverhaul:healing_herbs", 1), [
    "notreepunching:plant_fiber",
    "#c:seeds",
  ]);

  event.shapeless(Item.of("archers_paradox:explosive_arrow", 1), [
    "zombiesmore:dynamite",
    "minecraft:arrow",
  ]);

  event.shapeless(Item.of("minecraft:bone_meal", 1), ["kubejs:wet_goo"]);

  event.shapeless(Item.of("dew_drop_farmland_growth:hydrating_fertilizer", 1), [
    "minecraft:paper",
    "minecraft:charcoal",
    "minecraft:bone_meal",
    Item.of("minecraft:potion", '{Potion:"minecraft:water"}'),
    Item.of("minecraft:potion", '{Potion:"minecraft:water"}'),
  ]);

  event.shapeless(Item.of("dew_drop_farmland_growth:weak_fertilizer", 1), [
    "minecraft:paper",
    "minecraft:charcoal",
    "minecraft:bone_meal",
    "minecraft:bone_meal",
    "farmersdelight:tree_bark",
    "farmersdelight:tree_bark",
  ]);

  event.shapeless(
    Item.of("dew_drop_farmland_growth:low_quality_fertilizer", 1),
    [
      "minecraft:paper",
      "minecraft:rotten_flesh",
      "farmersdelight:tree_bark",
      "farmersdelight:tree_bark",
    ]
  );

  event.shaped(Item.of("ratatouille:frozen_block", 1), ["AAA", "AAA", "AAA"], {
    A: "kubejs:refrigerant",
  });

  event.shaped(
    Item.of("legendarysurvivaloverhaul:cooler", 1),
    ["ACA", "ACA", "AAA"],
    {
      C: "ratatouille:frozen_block",
      A: "#minecraft:planks",
    }
  );

  event.shaped(
    Item.of("legendarysurvivaloverhaul:heater", 1),
    [" B ", "BAB", "BBB"],
    {
      B: "create_ironworks:bronze_ingot",
      A: "minecraft:coal_block",
    }
  );

  event.shaped(
    Item.of("legendarysurvivaloverhaul:canteen", 1),
    [" A ", "B B", "BBB"],
    {
      A: "kubejs:reinforced_stone",
      B: "explorers_companion:leather_hide",
    }
  );

  event.shaped(
    Item.of("legendarysurvivaloverhaul:large_canteen", 1),
    [" A ", "BCB", "BBB"],
    {
      A: "createmetallurgy:steel_ingot",
      B: "explorers_companion:leather_hide",
      C: "minecraft:green_dye",
    }
  );

  event.shaped(
    Item.of("legendarysurvivaloverhaul:large_canteen", 1),
    [" A ", " C ", " B "],
    {
      A: "createmetallurgy:steel_ingot",
      B: "legendarysurvivaloverhaul:canteen",
      C: "minecraft:green_dye",
    }
  );

  event.shapeless(Item.of("kubejs:refrigerant", 9), [
    "ratatouille:frozen_block",
  ]);

  event.shapeless(Item.of("betterend:leather_stripe", 3), [
    "explorers_companion:leather_hide",
  ]);

  event.shaped(Item.of("summoningrituals:altar", 1), ["CCC", "LPL", "BWB"], {
    P: "minecraft:carved_pumpkin",
    B: "minecraft:oak_log",
    C: "minecraft:candle",
    L: "explorers_companion:leather_hide",
    W: "explorers_companion:wool_fabric",
  });

  event.shaped(
    Item.of("sophisticatedbackpacks:backpack", 1),
    ["SLS", "SCS", "LLL"],
    {
      S: "explorers_companion:tempered_thread",
      C: "#c:chests",
      L: "explorers_companion:leather_hide",
    }
  );

  event.recipes.create.mixing(
    Fluid.of("create_confectionery:white_chocolate", 250),
    [
      "minecraft:sugar",
      "ratatouille:cocoa_butter",
      Fluid.of("minecraft:milk", 250),
    ]
  );

  event.recipes.create.mixing(
    Fluid.of("create_confectionery:black_chocolate", 250),
    [
      "minecraft:sugar",
      "ratatouille:cocoa_butter",
      "2x ratatouille:cocoa_powder",
      Fluid.of("minecraft:milk", 250),
    ]
  );

  event.recipes.create.mixing(
    [
      Fluid.of("create_confectionery:ruby_chocolate", 250),
      "minecraft:glass_bottle",
    ],
    [
      "minecraft:sugar",
      "ratatouille:cocoa_butter",
      "legendarysurvivaloverhaul:beetroot_juice",
      Fluid.of("minecraft:milk", 250),
    ]
  );

  event.remove({ input: "create_confectionery:cocoa_butter" });
  event.remove({ type: "create:mixing", input: "minecraft:dragon_breath" });

  event.recipes.create.filling("createaddition:chocolate_cake", [
    Fluid.of("create:chocolate", 500),
    "ratatouille:cake_base",
  ]);

  event.recipes.create.filling("kubejs:caramel_meld", [
    Fluid.of("create_confectionery:caramel", 250),
    "ratatouille:chocolate_mold",
  ]);

  event.recipes.create.filling("kubejs:pink_chocolate_meld", [
    Fluid.of("create_confectionery:ruby_chocolate", 250),
    "ratatouille:chocolate_mold",
  ]);

  event.custom({
    type: "ratatouille:freezing",
    ingredients: [
      {
        item: "kubejs:pink_chocolate_meld",
      },
    ],
    results: [
      {
        item: "kubejs:pink_chocolate_filled",
      },
    ],
  });

  event.recipes.create.filling("kubejs:dark_chocolate_meld", [
    Fluid.of("create_confectionery:black_chocolate", 250),
    "ratatouille:chocolate_mold",
  ]);

  event.custom({
    type: "ratatouille:freezing",
    ingredients: [
      {
        item: "kubejs:dark_chocolate_meld",
      },
    ],
    results: [
      {
        item: "kubejs:dark_chocolate_filled",
      },
    ],
  });

  event.recipes.create.filling("kubejs:white_chocolate_meld", [
    Fluid.of("create_confectionery:white_chocolate", 250),
    "ratatouille:chocolate_mold",
  ]);

  event.custom({
    type: "ratatouille:freezing",
    ingredients: [
      {
        item: "kubejs:white_chocolate_meld",
      },
    ],
    results: [
      {
        item: "kubejs:white_chocolate_filled",
      },
    ],
  });

  event.custom({
    type: "ratatouille:demolding",
    ingredients: [
      {
        item: "kubejs:white_chocolate_filled",
      },
    ],
    results: [
      {
        item: "create_confectionery:bar_of_white_chocolate",
      },
      {
        item: "ratatouille:chocolate_mold",
      },
    ],
  });

  event.custom({
    type: "ratatouille:demolding",
    ingredients: [
      {
        item: "kubejs:dark_chocolate_filled",
      },
    ],
    results: [
      {
        item: "create_confectionery:bar_of_black_chocolate",
      },
      {
        item: "ratatouille:chocolate_mold",
      },
    ],
  });

  event.custom({
    type: "ratatouille:demolding",
    ingredients: [
      {
        item: "kubejs:pink_chocolate_filled",
      },
    ],
    results: [
      {
        item: "create_confectionery:bar_of_ruby_chocolate",
      },
      {
        item: "ratatouille:chocolate_mold",
      },
    ],
  });

  event.recipes.create.filling("kubejs:caramel_meld", [
    Fluid.of("create_confectionery:bar_of_caramel", 250),
    "ratatouille:chocolate_mold",
  ]);

  event.custom({
    type: "ratatouille:freezing",
    ingredients: [
      {
        item: "kubejs:caramel_meld",
      },
    ],
    results: [
      {
        item: "kubejs:caramel_filled",
      },
    ],
  });

  event.custom({
    type: "ratatouille:demolding",
    ingredients: [
      {
        item: "kubejs:caramel_filled",
      },
    ],
    results: [
      {
        item: "create_confectionery:bar_of_caramel",
      },
      {
        item: "ratatouille:chocolate_mold",
      },
    ],
  });

  event.shaped(
    Item.of("create_connected:crank_wheel", 1),
    ["CCC", "CPC", "CCC"],
    {
      C: "#minecraft:planks",
      P: "kubejs:cold_copper",
    }
  );

  event.shaped(
    Item.of("createmetallurgy:sturdy_whisk", 1),
    [" C ", "C C", "CCC"],
    {
      C: "kubejs:cold_copper",
    }
  );
  //disitillation
  event.recipes.createdieselgenerators.basin_fermenting(
    [Fluid.of("kubejs:ammonia", 1000)],
    Fluid.of("kubejs:urine", 1000),
    1000,
    "lowheated"
  );

  event.custom({
    type: "vintageimprovements:pressurizing",
    heatRequirement: "lowheated",
    ingredients: [
      {
        item: "minecraft:coal",
      },
    ],
    processingTime: 80,
    results: [
      {
        item: "createmetallurgy:coke",
      },
    ],
  });

  event.recipes.create.crushing(
    [
      "kubejs:dirty_tin_dust",
      Item.of("kubejs:dirty_tin_dust").withChance(0.25),
    ],
    "create_ironworks:crushed_raw_tin"
  );

  event.recipes.create.splashing(
    ["kubejs:pure_tin_dust", Item.of("cgs:lead_nugget").withChance(0.5)],
    "kubejs:dirty_tin_dust"
  );

  event.recipes.create.crushing(
    [
      "kubejs:dirty_lead_dust",
      Item.of("kubejs:dirty_lead_dust").withChance(0.5),
    ],
    "create:crushed_raw_lead"
  );

  event.recipes.create.splashing(
    ["kubejs:pure_lead_dust", Item.of("minecraft:iron_nugget").withChance(0.5)],
    "kubejs:dirty_lead_dust"
  );

  event.remove({ output: "createmetallurgy:coke" });
  event.remove({
    output: "explorers_companion:fabric_paraglider",
  });
  event.remove({ output: "sophisticatedbackpacks:backpack" });

  event.recipes.vintageimprovements
    .pressurizing(["createmetallurgy:coke"], "minecraft:coal")
    .heated()
    .processingTime(20);

  event.recipes.vintageimprovements
    .pressurizing(["10x kubejs:refrigerant"], Fluid.of("kubejs:ammonia", 1000))
    .heated()
    .processingTime(40);

  event.recipes.create.mixing("kubejs:silicon_dust", [
    "minecraft:sand",
    "minecraft:gravel",
    Fluid.of("minecraft:water", 1000),
  ]);

  event.recipes.create.mixing("kubejs:silicon_chunk", [
    "minecraft:flint",
    "kubejs:silicon_dust",
    Fluid.of("minecraft:water", 1000),
  ]);

  let eggs = [
    "wan_ancient_beasts:glider_egg",
    "wan_ancient_beasts:eater_egg",
    "wan_ancient_beasts:crusher_egg",
    "wan_ancient_beasts:soarer_egg",
    "wan_ancient_beasts:walker_egg",
  ];

  let ores = [
    "create_ironworks:raw_tin",
    "minecraft:raw_copper",
    "minecraft:raw_gold",
    "minecraft:raw_iron",
    "minecraft:lapis_lazuli",
  ];

  function createEggs(eggs, ores) {
    let minLength = Math.min(eggs.length, ores.length);
    for (let i = 0; i < minLength; i++) {
      event.shapeless(Item.of(eggs[i], 1), [
        "minecraft:egg",
        "legendarysurvivaloverhaul:tonic",
        ores[i],
      ]);
    }
  }

  createEggs(eggs, ores);

  event.remove({ output: "betterend:thallasium_anvil" });
  event.remove({ input: "minecraft:gunpowder", output: "minecraft:tnt" });

  let inter = "create:andesite_alloy"; // making a variable to store the transitional item makes the code more readable
  event.recipes.create
    .sequenced_assembly(
      [
        Item.of("createoreexcavation:drill").withChance(80.0), // this is the item that will appear in JEI as the result
        Item.of("create:iron_sheet").withChance(5.0), // the rest of these items will be part of the scrap
        Item.of("minecraft:iron_block").withChance(15.0),
      ],
      "vintageimprovements:andesite_rod",
      [
        // 'minecraft:flowering_azalea_leaves' is the input
        // the transitional item is a variable, that is 'kubejs:incomplete_spore_blossom' and is used during the intermediate stages of the assembly
        // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
        event.recipes.createDeploying(inter, [inter, "create:iron_sheet"]),
        event.recipes.createCutting(inter, inter),
        event.recipes.createDeploying(inter, [inter, "create:iron_sheet"]),
        event.recipes.createFilling(inter, [inter, Fluid.lava(250)]),
        event.recipes.createDeploying(inter, [inter, "minecraft:iron_block"]),
        event.recipes.createPressing(inter, inter),
      ]
    )
    .transitionalItem(inter)
    .loops(1); // set the transitional item and the number of loops

  inter = "createoreexcavation:drill"; // making a variable to store the transitional item makes the code more readable
  event.recipes.create
    .sequenced_assembly(
      [Item.of("createoreexcavation:diamond_drill")],
      "createoreexcavation:drill",
      [
        // 'minecraft:flowering_azalea_leaves' is the input
        // the transitional item is a variable, that is 'kubejs:incomplete_spore_blossom' and is used during the intermediate stages of the assembly
        // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
        event.recipes.createDeploying(inter, [inter, "minecraft:diamond"]),
        event.recipes.createDeploying(inter, [
          inter,
          "createaddition:diamond_grit",
        ]),
        event.recipes.createCutting(inter, inter),
        event.recipes.createDeploying(inter, [
          inter,
          "createaddition:diamond_grit",
        ]),
        event.recipes.createCutting(inter, inter),
      ]
    )
    .transitionalItem(inter)
    .loops(5); // set the transitional item and the number of loops

  event.shaped(
    Item.of("betterend:thallasium_anvil", 1),
    ["BAB", " B ", "BBB"],
    {
      A: "kubejs:cold_copper_block",
      B: "kubejs:cold_copper",
    }
  );
  event.custom({
    type: "bclib:smithing",
    anvilLevel: 2,
    damage: 3,
    input: {
      item: "create_ironworks:bronze_ingot",
    },
    inputCount: 1,
    result: {
      item: "kubejs:bronze_paxel_head",
    },
    toolLevel: 1,
  });

  event.custom({
    type: "bclib:smithing",
    anvilLevel: 2,
    damage: 3,
    input: {
      item: "create_ironworks:bronze_ingot",
    },
    inputCount: 1,
    result: {
      item: "kubejs:bronze_paxel_head",
    },
    toolLevel: 1,
  });

  event.custom({
    type: "bclib:smithing",
    anvilLevel: 2,
    damage: 3,
    input: {
      item: "create_ironworks:bronze_ingot",
    },
    inputCount: 1,
    result: {
      item: "kubejs:bronze_hoe_head",
    },
    toolLevel: 1,
  });

  event.custom({
    type: "bclib:smithing",
    anvilLevel: 2,
    damage: 3,
    input: {
      item: "create_ironworks:bronze_ingot",
    },
    inputCount: 1,
    result: {
      item: "kubejs:bronze_sword_head",
    },
    toolLevel: 1,
  });

  event.custom({
    type: "bclib:smithing",
    anvilLevel: 2,
    damage: 3,
    input: {
      item: "create_ironworks:bronze_ingot",
    },
    inputCount: 1,
    result: {
      item: "kubejs:bronze_sword_handle",
    },
    toolLevel: 1,
  });

  event.custom({
    type: "bclib:smithing",
    anvilLevel: 2,
    damage: 3,
    input: {
      item: "create_ironworks:steel_ingot",
    },
    inputCount: 1,
    result: {
      item: "kubejs:steel_paxel_head",
    },
    toolLevel: 1,
  });

  event.custom({
    type: "bclib:smithing",
    anvilLevel: 2,
    damage: 3,
    input: {
      item: "create_ironworks:steel_ingot",
    },
    inputCount: 1,
    result: {
      item: "kubejs:steel_hoe_head",
    },
    toolLevel: 1,
  });

  event.custom({
    type: "bclib:smithing",
    anvilLevel: 2,
    damage: 3,
    input: {
      item: "create_ironworks:steel_ingot",
    },
    inputCount: 1,
    result: {
      item: "kubejs:steel_sword_head",
    },
    toolLevel: 1,
  });

  event.custom({
    type: "bclib:smithing",
    anvilLevel: 2,
    damage: 3,
    input: {
      item: "create_ironworks:steel_ingot",
    },
    inputCount: 1,
    result: {
      item: "kubejs:steel_sword_handle",
    },
    toolLevel: 1,
  });

  event.custom({
    type: "minecraft:smithing_transform",
    addition: {
      item: "kubejs:steel_sword_head",
    },
    base: {
      item: "kubejs:steel_sword_handle",
    },
    result: {
      item: "create_ironworks:steel_sword",
    },
    template: {
      item: "minecraft:slime_ball",
    },
  });

  event.custom({
    type: "minecraft:smithing_transform",
    addition: {
      item: "kubejs:steel_hammer_head",
    },
    base: {
      item: "betterend:leather_wrapped_stick",
    },
    result: {
      item: "create_ironworks:steel_hammer",
    },
    template: {
      item: "minecraft:slime_ball",
    },
  });

  event.custom({
    type: "minecraft:smithing_transform",
    addition: {
      item: "kubejs:steel_paxel_head",
    },
    base: {
      item: "betterend:leather_wrapped_stick",
    },
    result: {
      item: "create_ironworks:steel_paxel",
    },
    template: {
      item: "minecraft:slime_ball",
    },
  });

  event.custom({
    type: "minecraft:smithing_transform",
    addition: {
      item: "kubejs:steel_hoe_head",
    },
    base: {
      item: "betterend:leather_wrapped_stick",
    },
    result: {
      item: "create_ironworks:steel_hoe",
    },
    template: {
      item: "minecraft:slime_ball",
    },
  });

  event.custom({
    type: "minecraft:smithing_transform",
    addition: {
      item: "kubejs:bronze_sword_head",
    },
    base: {
      item: "kubejs:bronze_sword_handle",
    },
    result: {
      item: "create_ironworks:bronze_sword",
    },
    template: {
      item: "minecraft:slime_ball",
    },
  });

  event.custom({
    type: "minecraft:smithing_transform",
    addition: {
      item: "kubejs:bronze_hammer_head",
    },
    base: {
      item: "betterend:leather_wrapped_stick",
    },
    result: {
      item: "create_ironworks:bronze_hammer",
    },
    template: {
      item: "minecraft:slime_ball",
    },
  });

  event.custom({
    type: "minecraft:smithing_transform",
    addition: {
      item: "kubejs:bronze_paxel_head",
    },
    base: {
      item: "betterend:leather_wrapped_stick",
    },
    result: {
      item: "create_ironworks:bronze_paxel",
    },
    template: {
      item: "minecraft:slime_ball",
    },
  });

  event.custom({
    type: "minecraft:smithing_transform",
    addition: {
      item: "kubejs:bronze_hoe_head",
    },
    base: {
      item: "betterend:leather_wrapped_stick",
    },
    result: {
      item: "create_ironworks:bronze_hoe",
    },
    template: {
      item: "minecraft:slime_ball",
    },
  });

  event.custom({
    type: "minecraft:smithing_transform",
    addition: {
      item: "minecraft:iron_block",
    },
    base: {
      item: "betterend:leather_wrapped_stick",
    },
    result: {
      item: "betterend:iron_hammer",
    },
    template: {
      item: "minecraft:slime_ball",
    },
  });

  event.custom({
    type: "minecraft:smithing_transform",
    addition: {
      item: "minecraft:diamond",
    },
    base: {
      item: "betterend:iron_hammer",
    },
    result: {
      item: "betterend:diamond_hammer",
    },
    template: {
      item: "minecraft:slime_ball",
    },
  });
  //'betterend:leather_wrapped_stick'
  event.recipes.create.mixing(Fluid.of("kubejs:quartz_solution", 500), [
    "kubejs:silicon_chunk",
    "minecraft:diorite",
    Fluid.of("minecraft:water", 1000),
  ]);

  event.custom({
    type: "vintageimprovements:pressurizing",
    heatRequirement: "lowheated",
    ingredients: [
      {
        fluid: "kubejs:quartz_solution",
        amount: 1000,
      },
    ],
    processingTime: 40,
    results: [
      {
        item: "kubejs:synthetic_quartz",
      },
    ],
  });

  event.shapeless(Item.of("create:rose_quartz", 1), [
    "kubejs:synthetic_quartz",
    "8x minecraft:redstone",
  ]);

  event.shaped(
    Item.of("refinedstorage:quartz_enriched_iron", 6),
    ["AA ", "ABC", " CC"],
    {
      A: "create:brass_ingot",
      B: "kubejs:synthetic_quartz",
      C: "create:andesite_alloy",
    }
  );
  event
    .smelting("refinedstorage:silicon", "kubejs:synthetic_quartz")
    .xp(0.5)
    .cookingTime(200);

  event.shaped(Item.of("kubejs:reinforced_stone", 2), ["ABA", "BCB", "ABA"], {
    A: "minecraft:stone",
    B: "minecraft:gravel",
    C: "minecraft:cobblestone",
  });

  event.shaped(Item.of("kubejs:simple_gear", 1), ["ABA", "BAB", "ABA"], {
    A: "minecraft:stick",
    B: "minecraft:planks",
  });

  event.shaped(
    Item.of("kubejs:cold_copper_composite", 2),
    ["AAA", "BBB", "CCC"],
    {
      A: "kubejs:cold_copper",
      B: "minecraft:clay_ball",
      C: "kubejs:reinforced_stone",
    }
  );

  event.shaped(
    Item.of("kubejs:reinforced_cold_copper_plate", 2),
    ["ABA", "BCB", "ABA"],
    {
      A: "kubejs:cold_copper_composite",
      B: "kubejs:reinforced_stone",
      C: "minecraft:stone",
    }
  );

  event.shaped(Item.of("kubejs:sealed_glass", 4), ["ABA", "BCB", "ABA"], {
    A: "minecraft:glass",
    B: "minecraft:clay_ball",
    C: "kubejs:reinforced_stone",
  });

  event.shaped(Item.of("kubejs:reinforced_gear", 1), ["ABA", "BCB", "ABA"], {
    A: "kubejs:reinforced_stone",
    B: "kubejs:simple_gear",
    C: "minecraft:stone",
  });

  event.shaped(Item.of("create:fluid_pipe", 1), ["ABA", "BCB", "ABA"], {
    A: "minecraft:orange_dye",
    B: "kubejs:reinforced_cold_copper_plate",
    C: "kubejs:sealed_glass",
  });

  event.shaped(Item.of("create:mechanical_pump", 1), [" B ", " C ", " A "], {
    A: "kubejs:reinforced_cold_copper_plate",
    B: "kubejs:reinforced_gear",
    C: "create:fluid_pipe",
  });

  event.shaped(Item.of("minecraft:shears", 1), ["A A", " B ", "B B"], {
    A: "minecraft:flint",
    B: "#minecraft:planks",
  });

  event.shaped(Item.of("zipline:zipline", 1), ["A A", "BBB", " C "], {
    A: "create:golden_sheet",
    B: "#minecraft:planks",
    C: "vintageimprovements:andesite_rod",
  });

  event.shaped(Item.of("create:wrench", 1), ["DAD", " BC", "B  "], {
    A: "kubejs:reinforced_cold_copper_plate",
    B: "minecraft:stick",
    C: "kubejs:simple_gear",
    D: "minecraft:yellow_dye",
  });

  event.shaped(Item.of("create_radar:data_link", 1), [" C ", " B ", " A "], {
    A: "create:display_link",
    B: "minecraft:map",
    C: "minecraft:compass",
  });

  event.shaped(
    Item.of("create_radar:radar_safe_zone_designator", 1),
    [" A ", " B ", "   "],
    {
      A: "create:redstone_link",
      B: "minecraft:compass",
    }
  );

  event.replaceInput(
    { output: "cgs:gatling" }, // Arg 1: the filter
    "create:andesite_alloy", // Arg 2: the item to replace
    "createmetallurgy:tungsten_sheet" // Arg 3: the item to replace it with
    // Note: tagged fluid ingredients do not work on Fabric, but tagged items do.
  );

  event.replaceInput(
    { input: "minecraft:wooden_shovel" }, // Arg 1: the filter
    "minecraft:wooden_shovel", // Arg 2: the item to replace
    "notreepunching:flint_shovel" // Arg 3: the item to replace it with
    // Note: tagged fluid ingredients do not work on Fabric, but tagged items do.
  );

  event.recipes.create.filling("kubejs:sanity_pile", [
    Fluid.of("kubejs:tonic_fluid", 1000),
    "minecraft:sugar",
  ]);

  event.replaceInput(
    { input: "minecraft:wooden_axe" }, // Arg 1: the filter
    "minecraft:wooden_axe", // Arg 2: the item to replace
    "notreepunching:flint_axe" // Arg 3: the item to replace it with
    // Note: tagged fluid ingredients do not work on Fabric, but tagged items do.
  );

  event.replaceInput(
    { input: "minecraft:wooden_sword" }, // Arg 1: the filter
    "minecraft:wooden_sword", // Arg 2: the item to replace
    "notreepunching:flint_sword" // Arg 3: the item to replace it with
    // Note: tagged fluid ingredients do not work on Fabric, but tagged items do.
  );

  event.replaceInput(
    { input: "minecraft:wooden_pickaxe" }, // Arg 1: the filter
    "minecraft:wooden_pickaxe", // Arg 2: the item to replace
    "notreepunching:flint_pickaxe" // Arg 3: the item to replace it with
    // Note: tagged fluid ingredients do not work on Fabric, but tagged items do.
  );

  event.replaceInput(
    { input: "minecraft:wooden_hoe" }, // Arg 1: the filter
    "minecraft:wooden_hoe", // Arg 2: the item to replace
    "notreepunching:flint_hoe" // Arg 3: the item to replace it with
    // Note: tagged fluid ingredients do not work on Fabric, but tagged items do.
  );

  event.remove({
    type: "vintageimprovements:centrifugation",
    input: "minecraft:honeycomb",
  });

  event.recipes.vintageimprovements
    .centrifugation(Fluid.of("create:honey", 1000), "minecraft:honey_block")
    .processingTime(100)
    .minimalRPM(64);

  event.recipes.vintageimprovements
    .centrifugation(
      [Fluid.of("create:honey", 100), Item.of("minecraft:gunpowder", 5)],
      "minecraft:honeycomb"
    )
    .processingTime(100)
    .minimalRPM(64);
});

SummoningRituals.start((event) => {
  event.level.spawnLightning(event.pos.x, event.pos.y, event.pos.z, true);
});

SummoningRituals.complete((event) => {
  event.player.addXPLevels(10);
});

ServerEvents.tags("item", (event) => {
  event.add("createlowheated:burner_starters", "notreepunching:fire_starter");
  event.add(
    "hardcore_torches:damage_torch_light_items",
    "notreepunching:fire_starter"
  );
  event.add(
    "hardcore_torches:damage_lantern_light_items",
    "notreepunching:fire_starter"
  );

  const sweetIsMeat = [
    "create_confectionery:full_ruby_chocolate_bar",
    "create_confectionery:full_white_chocolate_bar",
    "create_confectionery:full_black_chocolate_bar",
    "create_confectionery:full_chocolate_bar",
    "create_confectionery:bar_of_caramel",
    "create_confectionery:bar_of_white_chocolate",
    "create_confectionery:bar_of_black_chocolate",
    "create_confectionery:bar_of_ruby_chocolate",
    "create_confectionery:marshmallow_on_a_stick",
    "create_confectionery:caramelized_marshmellow_on_a_stick",
    "create_confectionery:marshmallow",
    "create_confectionery:ruby_chocolate_glazed_marshmallow",
    "create_confectionery:white_chocolate_glazed_marshmallow",
    "create_confectionery:black_chocolate_glazed_marshmallow",
    "create_confectionery:chocolate_glazed_marshmallow",
  ];

  sweetIsMeat.forEach((element) => {
    event.add("origins:ignore_diet", element);
  });

  event.add("notreepunching:weak_saws", "minecraft:stone_axe");
  event.add("origins:meat", "kubejs:meat_pile");
  event.add("forge:food", "kubejs:meat_pile");
  event.add("forge:food", "kubejs:vegetable_pile");

  event.add("kubejs:cold_ore", "kubejs:cold_ore");
  event.add("kubejs:cold_ore", "kubejs:deepslate_cold_ore");
  event.add("forge:quartz", "kubejs:synthetic_quartz");
  event.add("c:gems", "kubejs:synthetic_quartz");

  event.add("spoiled:foods", "#forge:food");
});

ItemEvents.entityInteracted("minecraft:glass_bottle", (event) => {
  if (event.target.type != "minecraft:pig") return;
  event.item.count--;
  event.target.playSound("minecraft:entity.cow.milk");
  event.player.giveInHand("kubejs:urine_bottle");
});

ItemEvents.entityInteracted("minecraft:bucket", (event) => {
  if (event.target.type != "minecraft:pig") return;
  event.item.count--;
  event.target.playSound("minecraft:entity.cow.milk");
  event.player.giveInHand("kubejs:urine_bucket");
});

LootJS.modifiers((event) => {
  event
    .addLootTableModifier(/.*:blocks\/.*_leaves/)
    .randomChance(0.3)
    .addLoot("minecraft:stick");
});
