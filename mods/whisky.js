elements.barley = {
    color: "#e2c287",
    behavior: behaviors.POWDER,
    category: "powders",
    state: "solid",
    density: 600,
    reactions: {
        "water": { elem1: "wet_barley", elem2: null }
    }
};

elements.wet_barley = {
    color: "#b09563",
    behavior: behaviors.POWDER,
    category: "powders",
    state: "solid",
    density: 800,
    tempHigh: 50,          
    stateHigh: "malted_barley",
    hidden: true,
};

elements.malted_barley = {
    color: "#c2a670",
    behavior: behaviors.POWDER,
    category: "powders",
    state: "solid",
    density: 550,
    breakInto: "grist",
    reactions: {
        "peat_smoke": { elem1: "peated_malted_barley", elem2: null }
    },
    hidden: true,
};

elements.peat = {
    color: "#4a3525",
    behavior: behaviors.POWDER,
    category: "powders",
    state: "solid",
    density: 700,
    burn: 20,
    burnTime: 400,
    burnInto: "peat_smoke",
    fireColor: "#b87333"
};

elements.peat_smoke = {
    color: "#7d756d",
    behavior: behaviors.GAS,
    category: "gases",
    state: "gas",
    density: 0.5,
    temp: 30,
    hidden: true,
};

elements.grist = {
    color: "#9c814d",
    behavior: behaviors.POWDER,
    category: "powders",
    state: "solid",
    density: 500,
    reactions: {
        "water": { elem1: "wort", elem2: null }
    },
    hidden: true,
};

elements.wort = {
    color: "#CB6F26",
    behavior: behaviors.LIQUID,
    category: "liquids",
    state: "liquid",
    reactions: {
        "yeast": { elem1: "wash", elem2: null }
    },
    temp: 20,
    tempLow: -1,
    stateLow: "wort_ice",
    hidden: true
};

elements.wash = {
    color: "#d4b375",
    behavior: behaviors.LIQUID,
    category: "liquids",
    state: "liquid",
    density: 1010,
    tempHigh: 78,         
    stateHigh: "heart",
    temp: 20,
    tempLow: -4,
    stateLow: "wash_ice",
    hidden: true,
};

elements.heart = {
    color: "#E5DCC6",
    behavior: behaviors.LIQUID,
    category: "liquids",
    state: "liquid",
    viscosity: 1.2,
    burn: 25,
    burnTime: 300,
    reactions: {
        "wood": { elem1: "scotch_whisky", elem2: "wood" }
    },
    temp: 20,
    tempLow: -24,
    stateLow: "heartice",
    hidden: true,
};

elements.scotch_whisky = {
    color: "#b46d29", 
    behavior: behaviors.LIQUID,
    category: "liquids",
    state: "liquid",
    viscosity: 1.5,
    burn: 40,
    burnTime: 300,
    temp: 10,
    tempLow: -29,
    stateLow: "scotch_whisky_ice",
    hidden: true,
};

elements.peaty_malted_barley = {
    color: "#96784b",
    behavior: behaviors.POWDER,
    category: "powders",
    state: "solid",
    density: 550,
    breakInto: "peaty_grist",
    hidden: true,
};

elements.peaty_grist = {
    color: "#7d653a",
    behavior: behaviors.POWDER,
    category: "powders",
    state: "solid",
    density: 500,
    reactions: {
        "water": { elem1: "peaty_wort", elem2: null }
    },
    hidden: true,
};

elements.peaty_wort = {
    color: "#602803",
    behavior: behaviors.LIQUID,
    category: "liquids",
    state: "liquid",
    reactions: {
        "yeast": { elem1: "peaty_wash", elem2: null }
    },
    temp: 20,
    tempLow: -1,
    stateLow: "peaty_wort_ice",
    hidden: true
};

elements.peaty_wash = {
    color: "#b59052",
    behavior: behaviors.LIQUID,
    category: "liquids",
    state: "liquid",
    density: 1010,
    tempHigh: 78,         
    stateHigh: "peaty_heart",
    temp: 20,
    tempLow: -4,
    stateLow: "peaty_wash_ice",
    hidden: true,
};


elements.peaty_heart = {
    color: "#e6c88e",
    behavior: behaviors.LIQUID,
    category: "liquids",
    state: "liquid",
    viscosity: 1.2,
    burn: 50,
    burnTime: 250,
    temp: 20,
    tempLow: -24,
    stateLow: "peaty_heart_ice",
    reactions: {
        "wood": { elem1: "peaty_scotch_whisky", elem2: "wood" }
    },
    hidden: true,
};

elements.peaty_scotch_whisky = {
    color: "#8c4a18", 
    behavior: behaviors.LIQUID,
    category: "liquids",
    state: "liquid",
    viscosity: 1.6,
    burn: 45,
    burnTime: 320,
    temp: 10,
    tempLow: -29,
    stateLow: "peaty_scotch_whisky_ice",
    hidden: true,
};

elements.wort_ice = {
    color: "#e39f66",
    behavior: behaviors.WALL,
    category: "states",
    state: "solid",
    density: 917,
    temp: -5,
    tempHigh: 0,
    stateHigh: "wort",
    hidden: true,
};

elements.peaty_wort_ice = {
    color: "#7a431e",
    behavior: behaviors.WALL,
    category: "states",
    state: "solid",
    density: 917,
    temp: -5,
    tempHigh: 0,
    stateHigh: "peaty_wort",
    hidden: true,
};

elements.wash_ice = {
    color: "#ebd9b5",
    behavior: behaviors.WALL,
    category: "states",
    state: "solid",
    density: 920,
    temp: -10,
    tempHigh: -5,
    stateHigh: "wash",
    hidden: true,
};

elements.peaty_wash_ice = {
    color: "#cfb284",
    behavior: behaviors.WALL,
    category: "states",
    state: "solid",
    density: 920,
    temp: -10,
    tempHigh: -5,
    stateHigh: "peaty_wash",
    hidden: true,
};

elements.heart_ice = {
    color: "#f2ede2",
    behavior: behaviors.WALL,
    category: "states",
    state: "solid",
    density: 850,
    temp: -40,
    tempHigh: -24,
    stateHigh: "heart",
    hidden: true,
};

elements.peaty_heart_ice = {
    color: "#ebdcb8",
    behavior: behaviors.WALL,
    category: "states",
    state: "solid",
    density: 850,
    temp: -40,
    tempHigh: -24,
    stateHigh: "peaty_heart",
    hidden: true,
};

elements.scotch_whisky_ice = {
    color: "#cf9153",
    behavior: behaviors.WALL,
    category: "states",
    state: "solid",
    density: 860,
    temp: -40,
    tempHigh: -30,
    stateHigh: "scotch_whisky",
    hidden: true,
};

elements.peaty_scotch_whisky_ice = {
    color: "#b07041",
    behavior: behaviors.WALL,
    category: "states",
    state: "solid",
    density: 860,
    temp: -40,
    tempHigh: -30,
    stateHigh: "peaty_scotch_whisky",
    hidden: true,
};
