// GENERATED: 2026-02-18-2230-SPRITE-CACHE-FIRST
// CRITICAL FIX: sprite() now checks cache FIRST before defaulting to Pikachu

// Configuration
const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxeEnHA5MtsH2yIzsKOMB4Irz9R1Wqsj6SrcsZjjSEcF2McHJYQxpUhMbcFtXGf80ybIw/exec';
const SHEET_URL  = 'https://docs.google.com/spreadsheets/d/1E9tGFWTFWHNkN6OheYwQCCuXDdz3oWAmbWTStoufz_w/edit';

// Data arrays
let powerUpData=[], candyData=[], tradePlansData=[], shinyGapsData=[], eventsData=[];
let luckyWantsData=[], mirrorTargetsData=[], luckyFriendsData=[];

// Pokemon sprite lookup
const POKEMON_IDS = {
  'bulbasaur':1,'ivysaur':2,'venusaur':3,'charmander':4,'charmeleon':5,'charizard':6,
  'squirtle':7,'wartortle':8,'blastoise':9,'weedle':13,'kakuna':14,'beedrill':15,
  'pikachu':25,'raichu':26,'sandshrew':27,'sandslash':28,'clefairy':35,'clefable':36,
  'abra':63,'kadabra':64,'alakazam':65,'machop':66,'machoke':67,'machamp':68,
  'poliwag':60,'poliwhirl':61,'poliwrath':62,
  'geodude':74,'graveler':75,'golem':76,'slowpoke':79,'slowbro':80,
  'gastly':92,'haunter':93,'gengar':94,'onix':95,'rhyhorn':111,'rhydon':112,
  'electabuzz':125,'magmar':126,'magikarp':129,'gyarados':130,'eevee':133,'porygon':137,
  'dratini':147,'dragonair':148,'dragonite':149,'mewtwo':150,'mew':151,
  'chikorita':152,'bayleef':153,'meganium':154,'cyndaquil':155,'quilava':156,'typhlosion':157,
  'totodile':158,'croconaw':159,'feraligatr':160,'mareep':179,'flaaffy':180,'ampharos':181,
  'hoppip':187,'skiploom':188,'jumpluff':189,'wooper':194,'quagsire':195,'swinub':220,'piloswine':221,
  'teddiursa':216,'ursaring':217,'larvitar':246,'pupitar':247,'tyranitar':248,
  'lugia':249,'ho-oh':250,'treecko':252,'grovyle':253,'sceptile':254,
  'torchic':255,'combusken':256,'blaziken':257,'mudkip':258,'marshtomp':259,'swampert':260,
  'seedot':273,'nuzleaf':274,'shiftry':275,'ralts':280,'kirlia':281,'gardevoir':282,
  'slakoth':287,'vigoroth':288,'slaking':289,'roselia':315,'roserade':407,
  'trapinch':328,'vibrava':329,'flygon':330,'swablu':333,'altaria':334,
  'duskull':355,'dusclops':356,'bagon':371,'shelgon':372,'salamence':373,
  'beldum':374,'metang':375,'metagross':376,'regirock':377,'regice':378,'registeel':379,
  'latias':380,'latios':381,'kyogre':382,'groudon':383,'rayquaza':384,
  'turtwig':387,'grotle':388,'torterra':389,'chimchar':390,'monferno':391,'infernape':392,
  'piplup':393,'prinplup':394,'empoleon':395,'starly':396,'staravia':397,'staraptor':398,
  'shinx':403,'luxio':404,'luxray':405,'bronzor':436,'bronzong':437,
  'gible':443,'gabite':444,'garchomp':445,'uxie':480,'mesprit':481,'azelf':482,
  'dialga':483,'palkia':484,'heatran':485,'giratina':487,'cresselia':488,
  'darkrai':491,'shaymin':492,'arceus':493,'victini':494,
  'snivy':495,'servine':496,'serperior':497,'tepig':498,'pignite':499,'emboar':500,
  'oshawott':501,'dewott':502,'samurott':503,'roggenrola':524,'boldore':525,'gigalith':526,
  'timburr':532,'gurdurr':533,'conkeldurr':534,'shelmet':616,'accelgor':617,
  'litwick':607,'lampent':608,'chandelure':609,'deino':633,'zweilous':634,'hydreigon':635,
  'cobalion':638,'terrakion':639,'virizion':640,'tornadus':641,'thundurus':642,
  'reshiram':643,'zekrom':644,'landorus':645,'kyurem':646,'genesect':649,
  'chespin':650,'quilladin':651,'chesnaught':652,'fennekin':653,'braixen':654,'delphox':655,
  'froakie':656,'frogadier':657,'greninja':658,'fletchling':661,'fletchinder':662,'talonflame':663,
  'xerneas':716,'yveltal':717,'rowlet':722,'dartrix':723,'decidueye':724,
  'stufful':759,'bewear':760
};

// Pokemon type database for auto-fill
const POKEMON_TYPES = {
  'bulbasaur':'Grass,Poison','ivysaur':'Grass,Poison','venusaur':'Grass,Poison',
  'charmander':'Fire','charmeleon':'Fire','charizard':'Fire,Flying',
  'squirtle':'Water','wartortle':'Water','blastoise':'Water',
  'pikachu':'Electric','raichu':'Electric',
  'sandshrew':'Ground','sandslash':'Ground',
  'clefairy':'Fairy','clefable':'Fairy',
  'abra':'Psychic','kadabra':'Psychic','alakazam':'Psychic',
  'machop':'Fighting','machoke':'Fighting','machamp':'Fighting',
  'geodude':'Rock,Ground','graveler':'Rock,Ground','golem':'Rock,Ground',
  'slowpoke':'Water,Psychic','slowbro':'Water,Psychic',
  'gastly':'Ghost,Poison','haunter':'Ghost,Poison','gengar':'Ghost,Poison',
  'onix':'Rock,Ground',
  'rhyhorn':'Ground,Rock','rhydon':'Ground,Rock',
  'electabuzz':'Electric','magmar':'Fire',
  'magikarp':'Water','gyarados':'Water,Flying',
  'eevee':'Normal','porygon':'Normal',
  'dratini':'Dragon','dragonair':'Dragon','dragonite':'Dragon,Flying',
  'mewtwo':'Psychic','mew':'Psychic',
  'chikorita':'Grass','bayleef':'Grass','meganium':'Grass',
  'cyndaquil':'Fire','quilava':'Fire','typhlosion':'Fire',
  'totodile':'Water','croconaw':'Water','feraligatr':'Water',
  'mareep':'Electric','flaaffy':'Electric','ampharos':'Electric',
  'hoppip':'Grass,Flying','skiploom':'Grass,Flying','jumpluff':'Grass,Flying',
  'swinub':'Ice,Ground','piloswine':'Ice,Ground',
  'teddiursa':'Normal','ursaring':'Normal',
  'larvitar':'Rock,Ground','pupitar':'Rock,Ground','tyranitar':'Rock,Dark',
  'lugia':'Psychic,Flying','ho-oh':'Fire,Flying',
  'treecko':'Grass','grovyle':'Grass','sceptile':'Grass',
  'torchic':'Fire','combusken':'Fire,Fighting','blaziken':'Fire,Fighting',
  'mudkip':'Water','marshtomp':'Water,Ground','swampert':'Water,Ground',
  'ralts':'Psychic,Fairy','kirlia':'Psychic,Fairy','gardevoir':'Psychic,Fairy',
  'slakoth':'Normal','vigoroth':'Normal','slaking':'Normal',
  'roselia':'Grass,Poison','roserade':'Grass,Poison',
  'trapinch':'Ground','vibrava':'Ground,Dragon','flygon':'Ground,Dragon',
  'swablu':'Normal,Flying','altaria':'Dragon,Flying',
  'bagon':'Dragon','shelgon':'Dragon','salamence':'Dragon,Flying',
  'beldum':'Steel,Psychic','metang':'Steel,Psychic','metagross':'Steel,Psychic',
  'regirock':'Rock','regice':'Ice','registeel':'Steel',
  'latias':'Dragon,Psychic','latios':'Dragon,Psychic',
  'kyogre':'Water','groudon':'Ground','rayquaza':'Dragon,Flying',
  'turtwig':'Grass','grotle':'Grass','torterra':'Grass,Ground',
  'chimchar':'Fire','monferno':'Fire,Fighting','infernape':'Fire,Fighting',
  'piplup':'Water','prinplup':'Water','empoleon':'Water,Steel',
  'starly':'Normal,Flying','staravia':'Normal,Flying','staraptor':'Normal,Flying',
  'shinx':'Electric','luxio':'Electric','luxray':'Electric',
  'gible':'Dragon,Ground','gabite':'Dragon,Ground','garchomp':'Dragon,Ground',
  'dialga':'Steel,Dragon','palkia':'Water,Dragon',
  'giratina':'Ghost,Dragon','darkrai':'Dark','shaymin':'Grass',
  'snivy':'Grass','servine':'Grass','serperior':'Grass',
  'tepig':'Fire','pignite':'Fire,Fighting','emboar':'Fire,Fighting',
  'oshawott':'Water','dewott':'Water','samurott':'Water',
  'deino':'Dark,Dragon','zweilous':'Dark,Dragon','hydreigon':'Dark,Dragon',
  'reshiram':'Dragon,Fire','zekrom':'Dragon,Electric','landorus':'Ground,Flying',
  'chespin':'Grass','quilladin':'Grass','chesnaught':'Grass,Fighting',
  'fennekin':'Fire','braixen':'Fire','delphox':'Fire,Psychic',
  'froakie':'Water','frogadier':'Water','greninja':'Water,Dark',
  'fletchling':'Normal,Flying','fletchinder':'Fire,Flying','talonflame':'Fire,Flying',
  'xerneas':'Fairy','yveltal':'Dark,Flying'
};

// Variant slug mappings for PokeAPI
const REGIONAL_SLUGS = {
  'Alolan':   '-alola',
  'Galarian': '-galar',
  'Hisuian':  '-hisui',
  'Paldean':  '-paldea'
};

const FORM_SLUGS = {
  'Dusk Mane':  '-dusk-mane',
  'Dawn Wings': '-dawn-wings',
  'Ultra':      '-ultra',
  'White':      '-white',
  'Black':      '-black',
  'Origin':     '-origin',
  'Sky':        '-sky',
  'Attack':     '-attack',
  'Defense':    '-defense',
  'Speed':      '-speed',
  'Incarnate':  '-incarnate',
  'Therian':    '-therian'
};

function getVariantSlug(baseName, regional, form) {
  const base           = baseName.toLowerCase().trim();
  const regionalSuffix = REGIONAL_SLUGS[regional] || '';
  const formSuffix     = FORM_SLUGS[form] || '';

  // Direct overrides for Pokemon where PokeAPI uses non-standard naming
  const directOverrides = {
    'necrozma|Dusk Mane':  'necrozma-dusk',
    'necrozma|Dawn Wings': 'necrozma-dawn',
    'necrozma|Ultra':      'necrozma-ultra',
    'giratina|Origin':     'giratina-origin',
    'giratina|Altered':    'giratina-altered',
    'shaymin|Sky':         'shaymin-sky',
    'tornadus|Therian':    'tornadus-therian',
    'thundurus|Therian':   'thundurus-therian',
    'landorus|Therian':    'landorus-therian',
    'tornadus|Incarnate':  'tornadus-incarnate',
    'thundurus|Incarnate': 'thundurus-incarnate',
    'landorus|Incarnate':  'landorus-incarnate',
  };

  const overrideKey = form ? `${base}|${form}` : null;
  if (overrideKey && directOverrides[overrideKey]) {
    return directOverrides[overrideKey];
  }

  // Regional takes priority over form (they're usually mutually exclusive)
  return base + (regionalSuffix || formSuffix);
}

async function autoFillVariantSprite() {
  const name     = document.getElementById('puPokemon').value.trim();
  const regional = document.getElementById('puRegional').value;
  const form     = document.getElementById('puForm').value;

  if (!name) return;

  // If neither regional nor form selected, nothing to do — base sprite already shown
  if (!regional && !form) return;

  const slug = getVariantSlug(name, regional, form);
  console.log(`[Variant] name="${name}" regional="${regional}" form="${form}" → slug="${slug}"`);

  // If slug is just the base name (no known suffix), skip
  if (slug === name.toLowerCase().trim()) return;

  const autoInfo      = document.getElementById('typeAutoFill');
  const spritePreview = document.getElementById('spritePreview');
  const spriteImg     = document.getElementById('spritePreviewImg');
  const typeField     = document.getElementById('puTypes');

  autoInfo.textContent = '🔍 Looking up variant...';
  autoInfo.style.color = '#667eea';

  const data = await getPokemonData(slug);
  console.log(`[Variant] getPokemonData("${slug}") returned:`, data);

  if (data && data.sprite) {
    spriteImg.src = data.sprite;
    spritePreview.style.display = 'block';
    if (data.types) {
      typeField.value = data.types;
      autoInfo.textContent = `✓ ${regional || form} form loaded`;
      autoInfo.style.color = '#48BB78';
    }
  } else {
    autoInfo.textContent = '⚠️ No variant sprite found, using base';
    autoInfo.style.color = '#DD6B20';
  }
}

// Helper functions
// Stardust cost → level lookup, built from the verified official table.
// Each cost covers 4 half-levels. displayLevel is what the player would say their level is.
// Lucky = exactly half the stardust cost; same level brackets apply.
const STARDUST_BRACKETS_STANDARD = [
  { cost:   200, minLevel:  1,  maxLevel:  2.5, displayLevel:  2 },
  { cost:   400, minLevel:  3,  maxLevel:  4.5, displayLevel:  4 },
  { cost:   600, minLevel:  5,  maxLevel:  6.5, displayLevel:  6 },
  { cost:   800, minLevel:  7,  maxLevel:  8.5, displayLevel:  8 },
  { cost:  1000, minLevel:  9,  maxLevel: 10.5, displayLevel: 10 },
  { cost:  1300, minLevel: 11,  maxLevel: 12.5, displayLevel: 12 },
  { cost:  1600, minLevel: 13,  maxLevel: 14.5, displayLevel: 14 },
  { cost:  1900, minLevel: 15,  maxLevel: 16.5, displayLevel: 16 },
  { cost:  2200, minLevel: 17,  maxLevel: 18.5, displayLevel: 18 },
  { cost:  2500, minLevel: 19,  maxLevel: 20.5, displayLevel: 20 },
  { cost:  3000, minLevel: 21,  maxLevel: 22.5, displayLevel: 22 },
  { cost:  3500, minLevel: 23,  maxLevel: 24.5, displayLevel: 24 },
  { cost:  4000, minLevel: 25,  maxLevel: 26.5, displayLevel: 25 },
  { cost:  4500, minLevel: 27,  maxLevel: 28.5, displayLevel: 28 },
  { cost:  5000, minLevel: 29,  maxLevel: 30.5, displayLevel: 30 },
  { cost:  6000, minLevel: 31,  maxLevel: 32.5, displayLevel: 32 },
  { cost:  7000, minLevel: 33,  maxLevel: 34.5, displayLevel: 34 },
  { cost:  8000, minLevel: 35,  maxLevel: 36.5, displayLevel: 35 },
  { cost:  9000, minLevel: 37,  maxLevel: 38.5, displayLevel: 38 },
  { cost: 10000, minLevel: 39,  maxLevel: 40.5, displayLevel: 40 },
  { cost: 11000, minLevel: 41,  maxLevel: 42.5, displayLevel: 42 },
  { cost: 12000, minLevel: 43,  maxLevel: 44.5, displayLevel: 44 },
  { cost: 13000, minLevel: 45,  maxLevel: 46.5, displayLevel: 45 },
  { cost: 14000, minLevel: 47,  maxLevel: 48.5, displayLevel: 48 },
  { cost: 15000, minLevel: 49,  maxLevel: 49.5, displayLevel: 49 },
];

// Build fast lookup map (standard only; lucky handled by doubling the cost)
const STARDUST_TO_LEVEL_STANDARD = {};
for (const b of STARDUST_BRACKETS_STANDARD) {
  STARDUST_TO_LEVEL_STANDARD[b.cost] = b;
}

function calculateLevelFromStardust() {
  const rawCost  = parseInt(document.getElementById('puStardust').value) || 0;
  const isLucky  = document.getElementById('puLucky').checked;
  const helper   = document.getElementById('stardustHelper');
  const levelFld = document.getElementById('puCurrentLevel');

  if (!rawCost) { helper.textContent = ''; return; }

  // Lucky Pokemon cost half → multiply displayed cost by 2 to get standard equivalent
  const lookupCost = isLucky ? rawCost * 2 : rawCost;
  const bucket     = STARDUST_TO_LEVEL_STANDARD[lookupCost];

  if (bucket) {
    levelFld.value = bucket.displayLevel;
    const xlNote   = bucket.minLevel >= 40 ? ' 💎 XL candy range' : '';
    const luckyNote = isLucky ? ` (lucky cost ${rawCost} × 2 = ${lookupCost})` : '';
    helper.textContent = `✓ Level ${bucket.minLevel}–${bucket.maxLevel}${xlNote}${luckyNote} — filled as ${bucket.displayLevel}`;
    helper.style.color = '#48BB78';
  } else {
    helper.textContent = '⚠️ Cost not recognised — double-check the value';
    helper.style.color = '#E53E3E';
  }
}

// Cumulative candy costs verified against official Pokemon GO level table.
// regular = candy from level A to B; xl = XL candy from level A to B (always 0 below 40).
const CANDY_COSTS = {
  '1-15':  {regular: 36,  xl: 0},
  '1-20':  {regular: 56,  xl: 0},
  '1-25':  {regular: 84,  xl: 0},
  '1-30':  {regular: 122, xl: 0},
  '1-35':  {regular: 186, xl: 0},
  '1-40':  {regular: 304, xl: 0},
  '1-45':  {regular: 304, xl: 118},
  '1-50':  {regular: 304, xl: 296},
  '15-20': {regular: 20,  xl: 0},
  '15-25': {regular: 48,  xl: 0},
  '15-30': {regular: 86,  xl: 0},
  '15-35': {regular: 150, xl: 0},
  '15-40': {regular: 268, xl: 0},
  '15-45': {regular: 268, xl: 118},
  '15-50': {regular: 268, xl: 296},
  '20-25': {regular: 28,  xl: 0},
  '20-30': {regular: 66,  xl: 0},
  '20-35': {regular: 130, xl: 0},
  '20-40': {regular: 248, xl: 0},
  '20-45': {regular: 248, xl: 118},
  '20-50': {regular: 248, xl: 296},
  '25-30': {regular: 38,  xl: 0},
  '25-35': {regular: 102, xl: 0},
  '25-40': {regular: 220, xl: 0},
  '25-45': {regular: 220, xl: 118},
  '25-50': {regular: 220, xl: 296},
  '30-35': {regular: 64,  xl: 0},
  '30-40': {regular: 182, xl: 0},
  '30-45': {regular: 182, xl: 118},
  '30-50': {regular: 182, xl: 296},
  '35-40': {regular: 118, xl: 0},
  '35-45': {regular: 118, xl: 118},
  '35-50': {regular: 118, xl: 296},
  '40-45': {regular: 0,   xl: 118},
  '40-50': {regular: 0,   xl: 296},
  '45-50': {regular: 0,   xl: 178},
};

// Eternatus has the same stardust costs as standard but massively higher candy costs.
// Stardust→level lookup still works normally; only candy needs a separate table.
// Eternatus cannot be caught below level 15.
const CANDY_COSTS_ETERNATUS = {
  '15-20': {regular: 600,  xl: 0},
  '15-25': {regular: 1440, xl: 0},
  '15-30': {regular: 2580, xl: 0},
  '15-35': {regular: 4420, xl: 0},
  '15-40': {regular: 8900, xl: 0},
  '15-45': {regular: 8900, xl: 2000},
  '15-50': {regular: 8900, xl: 8900},
  '20-25': {regular: 840,  xl: 0},
  '20-30': {regular: 1980, xl: 0},
  '20-35': {regular: 3820, xl: 0},
  '20-40': {regular: 8300, xl: 0},
  '20-45': {regular: 8300, xl: 2000},
  '20-50': {regular: 8300, xl: 8900},
  '25-30': {regular: 1140, xl: 0},
  '25-35': {regular: 2980, xl: 0},
  '25-40': {regular: 7460, xl: 0},
  '25-45': {regular: 7460, xl: 2000},
  '25-50': {regular: 7460, xl: 8900},
  '30-35': {regular: 1840, xl: 0},
  '30-40': {regular: 6320, xl: 0},
  '30-45': {regular: 6320, xl: 2000},
  '30-50': {regular: 6320, xl: 8900},
  '35-40': {regular: 4480, xl: 0},
  '35-45': {regular: 4480, xl: 2000},
  '35-50': {regular: 4480, xl: 8900},
  '40-45': {regular: 0,    xl: 2000},
  '40-50': {regular: 0,    xl: 8900},
  '45-50': {regular: 0,    xl: 6900},
};

function calculateCandyNeeded(currentLevel, targetLevel, pokemonName) {
  const cur = parseFloat(currentLevel) || 0;
  const tgt = parseFloat(targetLevel)  || 0;

  if (cur >= tgt) return {regularCandy: 0, xlCandy: 0};

  const isEternatus = (pokemonName||'').toLowerCase().trim() === 'eternatus';
  const table = isEternatus ? CANDY_COSTS_ETERNATUS : CANDY_COSTS;

  // Snap to nearest milestone (rounding cur DOWN, tgt UP)
  const milestones = isEternatus
    ? [15, 20, 25, 30, 35, 40, 45, 50]   // Eternatus starts at 15
    : [1, 15, 20, 25, 30, 35, 40, 45, 50];

  let startM = milestones[0];
  for (let i = milestones.length - 1; i >= 0; i--) {
    if (cur >= milestones[i]) { startM = milestones[i]; break; }
  }

  let endM = 50;
  for (let i = 0; i < milestones.length; i++) {
    if (tgt <= milestones[i]) { endM = milestones[i]; break; }
  }

  const key   = `${startM}-${endM}`;
  const costs = table[key];
  if (costs) return {regularCandy: costs.regular, xlCandy: costs.xl};

  return {regularCandy: 0, xlCandy: 0};
}

function getPokemonId(name) {
  const c = name.toLowerCase().trim().replace(/^(alolan|galarian|hisuian|shadow|mega) /,'');
  return POKEMON_IDS[c] || 25;
}

// Sprite loading with hybrid system
function sprite(name, regional, form) {
  const baseName  = name.toLowerCase().trim().replace(/^(alolan|galarian|hisuian|shadow|mega|primal) /, '');
  const slug      = (regional || form) ? getVariantSlug(baseName, regional, form) : baseName;
  const cleanName = slug;
  
  // Check if we have this Pokemon in cache
  if (pokemonCache.has(cleanName)) {
    const cached = pokemonCache.get(cleanName);
    if (cached.sprite) {
      return cached.sprite;
    }
  }
  
  // Check localStorage cache
  const cacheKey = `pokemon_data_${cleanName}`;
  const localCached = localStorage.getItem(cacheKey);
  if (localCached) {
    try {
      const data = JSON.parse(localCached);
      if (data.sprite) {
        pokemonCache.set(cleanName, data);
        return data.sprite;
      }
    } catch (e) {
      // Invalid cache, continue to default
    }
  }
  
  // Trigger async PokeAPI fetch to get the real sprite URL and cache it
  const safeName = name.toLowerCase().trim().replace(/^(alolan|galarian|hisuian|shadow|mega|primal) /, '').replace(/\s+/g,'-');
  getPokemonData(safeName);
  // Use Pokémon Showdown sprites as immediate fallback — name-based, no ID needed
  return `https://play.pokemonshowdown.com/sprites/gen5/${safeName}.png`;
}

// Cache for Pokemon data (sprite URLs and types)
const pokemonCache = new Map();

// Get Pokemon data from cache or PokeAPI
async function getPokemonData(name) {
  const cleanName = name.toLowerCase().trim().replace(/^(alolan|galarian|hisuian|shadow|mega|primal) /, '');
  
  // Check in-memory cache first
  if (pokemonCache.has(cleanName)) {
    return pokemonCache.get(cleanName);
  }
  
  // Check localStorage cache
  const cacheKey = `pokemon_data_${cleanName}`;
  const cached = localStorage.getItem(cacheKey);
  if (cached) {
    try {
      const data = JSON.parse(cached);
      pokemonCache.set(cleanName, data);
      return data;
    } catch (e) {
      console.warn(`Invalid cache data for ${cleanName}`);
    }
  }
  
  // Fetch from PokeAPI
  try {
    console.log(`Fetching ${cleanName} from PokeAPI...`);
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${cleanName}`);
    
    if (!response.ok) {
      throw new Error(`Pokemon not found: ${cleanName}`);
    }
    
    const apiData = await response.json();
    
    const data = {
      id: apiData.id,
      sprite: apiData.sprites.front_default,
      types: apiData.types.map(t => t.type.name.charAt(0).toUpperCase() + t.type.name.slice(1)).join(',')
    };
    
    // Cache it
    pokemonCache.set(cleanName, data);
    localStorage.setItem(cacheKey, JSON.stringify(data));
    console.log(`Cached ${cleanName} for future use`);
    
    return data;
  } catch (error) {
    console.error(`Failed to fetch ${cleanName}:`, error);
    return null;
  }
}

// Enhanced image error handler - tries PokeAPI as fallback
async function handleSpriteError(img, pokemonName) {
  // Normalize the name to lowercase to match cache keys
  const normalizedName = pokemonName.toLowerCase().trim();
  
  console.log(`[Sprite Error] Failed to load sprite for: ${pokemonName} (normalized: ${normalizedName})`);
  
  // Prevent infinite loops
  if (img.dataset.fallbackAttempted) {
    console.log(`[Sprite Error] Already attempted fallback for ${normalizedName}, using Pikachu`);
    img.src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png';
    return;
  }
  
  img.dataset.fallbackAttempted = 'true';
  
  // Try to get from PokeAPI using normalized name
  console.log(`[Sprite Error] Attempting PokeAPI lookup for: ${normalizedName}`);
  const data = await getPokemonData(normalizedName);
  
  if (data && data.sprite) {
    console.log(`[Sprite Error] Found sprite in cache/API: ${data.sprite}`);
    img.src = data.sprite;
  } else {
    console.log(`[Sprite Error] No sprite found for ${normalizedName}, using Pikachu fallback`);
    console.log(`[Sprite Error] Cache contents:`, {
      inMemory: pokemonCache.has(normalizedName),
      localStorage: localStorage.getItem(`pokemon_data_${normalizedName}`)
    });
    // Ultimate fallback to Pikachu
    img.src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png';
  }
}

// Debounce timers
let autoFillTypesTimer = null;
let autoFillMirrorTypesTimer = null;

async function autoFillTypes() {
  // Clear existing timer
  if (autoFillTypesTimer) {
    clearTimeout(autoFillTypesTimer);
  }
  
  const name = document.getElementById('puPokemon').value.toLowerCase().trim()
    .replace(/^(alolan|galarian|hisuian|shadow|mega) /,'');
  const typeField = document.getElementById('puTypes');
  const autoInfo = document.getElementById('typeAutoFill');
  
  if (!name) {
    autoInfo.textContent = '';
    document.getElementById('spritePreview').style.display = 'none'; return;
  }
  
  // Try local POKEMON_TYPES first (instant, no debounce needed)
  const localTypes = POKEMON_TYPES[name];
  if (localTypes) {
    typeField.value = localTypes;
    autoInfo.textContent = '✓ Types auto-filled';
    autoInfo.style.color = '#48BB78';
    document.getElementById('spritePreview').style.display = 'none'; return;
  }
  
  // For API lookup, debounce to wait for user to finish typing
  autoInfo.textContent = '⌨️ Typing...';
  autoInfo.style.color = '#999';
  
  autoFillTypesTimer = setTimeout(async () => {
    // Try PokeAPI cache/fetch
    autoInfo.textContent = '🔍 Looking up...';
    autoInfo.style.color = '#667eea';
    
    const data = await getPokemonData(name);
    if (data && data.types) {
      typeField.value = data.types;
      autoInfo.textContent = '✓ Types loaded from PokeAPI';
      autoInfo.style.color = '#48BB78';
      
      // Show sprite preview
      const spritePreview = document.getElementById('spritePreview');
      const spriteImg = document.getElementById('spritePreviewImg');
      if (data.sprite) {
        console.log(`[Type Auto-fill] Showing sprite preview: ${data.sprite}`);
        spriteImg.src = data.sprite;
        spriteImg.onerror = () => {
          console.log(`[Type Auto-fill] Sprite preview failed to load`);
          spritePreview.style.display = 'none';
        };
        spritePreview.style.display = 'block';
      }
    } else {
      autoInfo.textContent = '⚠️ Pokemon not found';
      autoInfo.style.color = '#DD6B20';
      document.getElementById('spritePreview').style.display = 'none';
    }
  }, 500); // Wait 500ms after user stops typing
}

function getTypeBackground(typesStr) {
  if (!typesStr) return '';
  const types = typesStr.split(',').map(t => t.trim().toLowerCase()).filter(t => t);
  if (types.length === 0) return '';
  
  const typeColors = {
    normal: 'rgba(139, 139, 99, 0.12)',
    fire: 'rgba(192, 80, 16, 0.12)',
    water: 'rgba(32, 80, 208, 0.12)',
    electric: 'rgba(160, 120, 0, 0.12)',
    grass: 'rgba(58, 138, 24, 0.12)',
    ice: 'rgba(32, 144, 160, 0.12)',
    fighting: 'rgba(144, 24, 24, 0.12)',
    poison: 'rgba(120, 24, 120, 0.12)',
    ground: 'rgba(144, 96, 16, 0.12)',
    flying: 'rgba(80, 64, 176, 0.12)',
    psychic: 'rgba(200, 0, 80, 0.12)',
    bug: 'rgba(80, 96, 0, 0.12)',
    rock: 'rgba(120, 96, 40, 0.12)',
    ghost: 'rgba(58, 32, 96, 0.12)',
    dragon: 'rgba(64, 16, 216, 0.12)',
    dark: 'rgba(58, 40, 40, 0.12)',
    steel: 'rgba(80, 80, 96, 0.12)',
    fairy: 'rgba(176, 48, 96, 0.12)'
  };
  
  if (types.length === 1) {
    return typeColors[types[0]] || 'rgba(200,200,200,0.08)';
  } else {
    const color1 = typeColors[types[0]] || 'rgba(200,200,200,0.08)';
    const color2 = typeColors[types[1]] || 'rgba(200,200,200,0.08)';
    return `linear-gradient(90deg, ${color1} 0%, ${color2} 100%)`;
  }
}

// Clipboard
function copyPromptToClipboard() {
  const prompt = `Extract this week's Pokemon Go events into a table with these exact columns: Icon, EventType, Description

Format as tab-separated values ready to paste into Google Sheets.

Guidelines:
- Icon: emoji (⚔️ raids, 💡 spotlight, 🌟 events, 🎯 special hours, 🏆 PvP, 🔥 Max Monday, 📆 upcoming)
- EventType: short label (Raids, Mega Raids, Event, Spotlight, PvP, Max Monday, GO Tour, etc.)
- Description: concise details with Pokemon names, times, bonuses

Output — header row first, then one data row per event, tab-separated:
Icon\tEventType\tDescription
⚔️\tRaids\tNecrozma (5★) — starts Monday 10am, Raid Hour Wednesday 6pm
💡\tSpotlight\tWednesday 6pm — 2x Transfer Candy

Extract from the attached image now.`;
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(prompt).then(showCopyOK).catch(()=>fallbackCopy(prompt));
  } else { fallbackCopy(prompt); }
}

function fallbackCopy(text) {
  const ta = document.createElement('textarea');
  ta.value = text; ta.style.cssText='position:fixed;left:-9999px';
  document.body.appendChild(ta); ta.focus(); ta.select();
  try { document.execCommand('copy'); showCopyOK(); } catch(e) { alert('Copy failed.'); }
  document.body.removeChild(ta);
}

function showCopyOK() {
  const btn = event.target;
  const orig = btn.innerHTML;
  btn.innerHTML = '✅ Copied!';
  setTimeout(()=>{ btn.innerHTML = orig; }, 2000);
}

// UI helpers
function toggleSection(h) {
  h.classList.toggle('collapsed');
  h.nextElementSibling.classList.toggle('collapsed');
}

function closeModal(id) { document.getElementById(id).style.display='none'; }

// Sheets can return boolean true or string 'TRUE' depending on cell type — handle both
function isTrue(val) { return val === true || val === 'TRUE' || val === 'true'; }

// Saving state helpers
let savingCount = 0;

function setSaving(btn, saving) {
  if (!btn) return;
  if (saving) {
    btn.disabled = true;
    btn._origText = btn.innerHTML;
    btn.innerHTML = '⏳ Saving…';
  } else {
    btn.disabled = false;
    btn.innerHTML = btn._origText || '💾 Save';
  }
}

function setBgSaving(saving) {
  savingCount += saving ? 1 : -1;
  if (savingCount > 0) {
    document.getElementById('syncStatus').textContent = '⏳ Saving…';
    document.getElementById('syncStatus').className   = 'status-badge status-loading';
  } else {
    document.getElementById('syncStatus').textContent = '✅ Synced';
    document.getElementById('syncStatus').className   = 'status-badge status-connected';
  }
}

function showAddPowerUpModal() {
  document.getElementById('powerUpModalTitle').textContent = 'Add Power-Up Priority';
  document.getElementById('powerUpForm').reset();
  document.getElementById('puEditIndex').value = '';
  document.getElementById('typeAutoFill').textContent = '';
  document.getElementById('stardustHelper').textContent = '';
  document.getElementById('spritePreview').style.display = 'none';
  document.getElementById('addPowerUpModal').style.display = 'block';
}

function showEditPowerUpModal(idx) {
  const r = powerUpData[idx];
  document.getElementById('powerUpModalTitle').textContent = 'Edit Power-Up Priority';
  document.getElementById('puEditIndex').value = idx;
  document.getElementById('puPokemon').value      = r[0]  || '';
  document.getElementById('puTypes').value        = r[1]  || '';
  document.getElementById('puLucky').checked      = isTrue(r[2]);
  document.getElementById('puHasElite').checked   = isTrue(r[3]);
  document.getElementById('puNeedsElite').checked = isTrue(r[4]);
  document.getElementById('puCurrentLevel').value = r[5]  || '';
  document.getElementById('puTargetLevel').value  = r[6]  || '';
  document.getElementById('puLegendary').checked      = isTrue(r[7]);
  document.getElementById('puNeedLucky').checked  = isTrue(r[10]);
  document.getElementById('puNotes').value        = r[11] || '';
  document.getElementById('puPriority').value     = r[12] || 'Medium';
  document.getElementById('puStatus').value       = r[13] || 'To Do';
  document.getElementById('puArchived').value     = r[14] || 'FALSE';
  document.getElementById('puHundo').checked      = isTrue(r[15]);
  document.getElementById('puShiny').checked      = isTrue(r[16]);
  document.getElementById('puShadow').checked     = isTrue(r[17]);
  document.getElementById('puIV').value           = r[18] || '';
  document.getElementById('puStardust').value     = r[19] || '';
  document.getElementById('puRegional').value     = r[20] || '';
  document.getElementById('puForm').value         = r[21] || '';
  document.getElementById('puDMAX').checked       = isTrue(r[22]);
  document.getElementById('puGMAX').checked       = isTrue(r[23]);
  document.getElementById('typeAutoFill').textContent = '';
  document.getElementById('stardustHelper').textContent = '';
  document.getElementById('addPowerUpModal').style.display = 'block';
}

function showRCInventoryModal_stub() {} // replaced by showRCInventoryModal above

// API
async function loadSheetData(name) {
  const r = await fetch(`${SCRIPT_URL}?sheet=${name}`);
  const j = await r.json();
  if (j.error) throw new Error(j.error);
  return j.data || [];
}

async function saveSheetData(name, data) {
  try {
    const r = await fetch(SCRIPT_URL, { method:'POST', body: JSON.stringify({sheet:name, values:data}) });
    const j = await r.json();
    if (j.error) throw new Error(j.error);
    return true;
  } catch(e) { alert('Save failed: '+e.message); return false; }
}

// Load all
async function loadAllData() {
  document.getElementById('syncStatus').textContent = '🔄 Syncing…';
  document.getElementById('syncStatus').className   = 'status-badge status-loading';
  document.getElementById('syncErrorDetail').style.display = 'none';

  const errors = [];
  const safe = async (name) => {
    try { return await loadSheetData(name); }
    catch(e) { errors.push(`${name}: ${e.message}`); return []; }
  };

  const [pu, candy, wants, mirrors, friends, shinies, events] = await Promise.all([
    safe('PowerUpPriority'), safe('RareCandyConfig'), safe('LuckyTradeWants'),
    safe('MirrorTargets'), safe('LuckyFriendsQueue'),
    safe('CommunityDayShinies'), safe('CurrentEvents')
  ]);

  powerUpData    = pu.length     > 1 ? pu.slice(1)     : [];
  candyData      = candy.length  > 1 ? candy.slice(1)  : [];
  luckyWantsData = wants.length  > 1 ? wants.slice(1)  : [];
  mirrorTargetsData = mirrors.length > 1 ? mirrors.slice(1) : [];
  luckyFriendsData = friends.length > 1 ? friends.slice(1) : [];
  shinyGapsData  = shinies.length> 1 ? shinies.slice(1): [];
  eventsData     = events.length > 1 ? events.slice(1) : [];

  renderAll();

  if (errors.length) {
    document.getElementById('syncStatus').textContent = '⚠️ Partial Sync';
    document.getElementById('syncStatus').className   = 'status-badge status-disconnected';
    document.getElementById('syncErrorDetail').style.display = 'block';
    document.getElementById('syncErrorDetail').textContent   = errors.join(' | ');
  } else {
    document.getElementById('syncStatus').textContent = '✅ Synced';
    document.getElementById('syncStatus').className   = 'status-badge status-connected';
  }
}

function renderAll() {
  for (const [fn, name] of [[renderEvents,'Events'],[renderPowerUp,'PowerUp'],[renderCandy,'Candy'],[renderTrades,'Trades'],[renderShinyGaps,'Shinies']]) {
    try { fn(); } catch(e) { console.error(`renderAll: ${name} failed:`, e); }
  }
}

// Events
function renderEvents() {
  const container = document.getElementById('eventsList');
  
  if (eventsData.length === 0) {
    container.innerHTML = '<div class="empty-state">Paste events into the "CurrentEvents" tab in Google Sheets</div>';
    return;
  }

  const weekdayMap = {
    monday: 1, mon: 1, tuesday: 2, tue: 2, tues: 2, wednesday: 3, wed: 3,
    thursday: 4, thu: 4, thurs: 4, friday: 5, fri: 5, saturday: 6, sat: 6, sunday: 7, sun: 7
  };

  const todayJS = new Date().getDay();
  const today = todayJS === 0 ? 7 : todayJS;

  function getDay(description) {
    const desc = (description || '').toLowerCase();
    for (const key in weekdayMap) {
      if (desc.includes(key)) return weekdayMap[key];
    }
    return 99;
  }

  const sorted = [...eventsData].sort((a, b) => getDay(a[2]) - getDay(b[2]));

  let html = '';
  sorted.forEach(row => {
    const [icon, eventType, description] = row;
    if (!icon || !description) return;

    const eventDay = getDay(description);
    let classes = "event-item";

    if (eventDay === today) classes += " event-item-live";
    else if (eventDay < today) classes += " event-item-past";

    html += `
      <div class="${classes}">
        <div class="event-item-icon">${icon}</div>
        <div class="event-item-text">
          <strong>${eventType}:</strong> ${description}
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
}

// Drag helpers
let dragSrc = null;
function bindDrag(container, arr, renderFn, sheetName, headers) {
  container.querySelectorAll('.list-item[draggable]').forEach(el => {
    el.addEventListener('dragstart', function(e) {
      dragSrc = this; e.dataTransfer.setData('text/plain', this.dataset.index);
      setTimeout(()=>this.classList.add('dragging'), 0);
    });
    el.addEventListener('dragend',   function() { this.classList.remove('dragging'); container.querySelectorAll('.list-item').forEach(i=>i.classList.remove('over')); });
    el.addEventListener('dragover',  e => e.preventDefault());
    el.addEventListener('dragenter', function() { this.classList.add('over'); });
    el.addEventListener('dragleave', function() { this.classList.remove('over'); });
    el.addEventListener('drop', function(e) {
      e.stopPropagation(); this.classList.remove('over');
      if (dragSrc === this) return;
      const src=parseInt(dragSrc.dataset.index), dst=parseInt(this.dataset.index);
      const item=arr[src]; arr.splice(src,1); arr.splice(dst,0,item);
      setBgSaving(true);
      saveSheetData(sheetName,[headers,...arr]).then(()=>setBgSaving(false));
      renderFn();
    });
  });
}

// Power-Up
const PU_HEADERS = ['Pokemon','Types','Lucky','Has Elite','Needs Elite','Current Level',
                    'Target Level','Legendary','XL Candy','Stardust','Need Lucky','Notes',
                    'Priority','Status','Archived','Hundo','Shiny','Shadow','IV%','StardustCost',
                    'Regional','Form','DMAX','GMAX'];
const PRIO_ORDER = {'High':1,'Medium':2,'Low':3};

function renderPowerUp() {
  const c = document.getElementById('powerUpContent');
  const showArch = document.getElementById('showArchivedPowerUp').checked;

  const rows = powerUpData
    .map((r,i)=>({r,i}))
    .filter(({r}) => showArch || r[14] !== 'TRUE')
    .sort((a,b)=>(PRIO_ORDER[a.r[12]]||2)-(PRIO_ORDER[b.r[12]]||2));

  if (!rows.length) { c.innerHTML='<div class="empty-state">📝 No power-up priorities yet</div>'; return; }

  c.innerHTML = rows.map(({r,i}) => {
    const [pokemon,types,lucky,hasEl,needEl,curLv,tgtLv,legendary,,,needLucky,notes,prio,status,arch,hundo,shiny,shadow,iv] = r;
    const regional = r[20] || '';
    const form     = r[21] || '';
    const dmax     = isTrue(r[22]);
    const gmax     = isTrue(r[23]);
    const isArch = isTrue(arch);
    const curLevel = parseFloat(curLv) || 0;
    const tgtLevel = parseFloat(tgtLv) || 0;
    const targetMet = curLevel >= tgtLevel && tgtLevel > 0;

    // Build display name: "Alolan Geodude (Origin)"
    let displayName = pokemon;
    if (regional) displayName = `${regional} ${pokemon}`;
    if (form) displayName = `${displayName} (${form})`;

    const types_html = (types||'').split(',').filter(t=>t.trim()).map(t=>{
      const key = t.trim().toLowerCase();
      return `<span class="type-text type-${key}">${t.trim().toUpperCase()}</span>`;
    }).join(' ');

    const typesBg = getTypeBackground(types);

    const b = [];
    
    // Level target met indicator
    if (targetMet) b.push('<span class="icon" title="Level target reached">✅</span>');
    
    // Status icons FIRST (before priority badge)
    if (lucky==='TRUE')    b.push('<span class="icon" title="Lucky">🍀</span>');
    if (hundo==='TRUE')    b.push('<span class="icon" title="Hundo">💯</span>');
    if (shiny==='TRUE')    b.push('<span class="icon" title="Shiny">✨</span>');
    if (shadow==='TRUE')   b.push('<span class="icon" title="Shadow">👤</span>');
    if (hasEl==='TRUE')    b.push('<span class="icon" title="Has Legacy Move">£</span>');
    if (needEl==='TRUE')   b.push('<span class="icon" title="Needs Legacy Move">❗</span>');
    if (needLucky==='TRUE')b.push('<span class="icon" title="Need Lucky Trade">🤝</span>');
    if (dmax)              b.push('<span class="icon" title="DMAX">💎</span>');
    if (gmax)              b.push('<span class="icon" title="GMAX">🌟</span>');
    
    // Priority badge AFTER status icons
    if (prio) b.push(`<span class="badge badge-priority-${prio.toLowerCase()}">${prio}</span>`);
    
    // Level 50 indicators
    if (curLevel >= 50) {
      b.push('<span class="badge badge-complete50">🏆 50</span>');
    } else if (tgtLevel >= 50) {
      b.push('<span class="badge badge-target50">→50</span>');
    }

    // IV display
    const ivDisplay = iv ? ` • ${iv}% IV` : '';
    
    // Candy calculation
    const candyInfo = calculateCandyNeeded(curLevel, tgtLevel, pokemon);
    let candyDisplay = '';
    if (candyInfo.regularCandy > 0 || candyInfo.xlCandy > 0) {
      const parts = [];
      if (candyInfo.regularCandy > 0) parts.push(`${candyInfo.regularCandy} 🍬`);
      if (candyInfo.xlCandy > 0) parts.push(`${candyInfo.xlCandy} XL`);
      candyDisplay = ` • Need: ${parts.join(' + ')}`;
    }

    return `
    <div class="list-item" draggable="true" data-index="${i}" style="background:${typesBg};${isArch||targetMet?'opacity:0.55;':''}">
      <div class="list-item-left">
        <span class="drag-handle">☰</span>
        <img class="list-item-sprite" src="${sprite(pokemon, regional, form)}" onerror="handleSpriteError(this, '${pokemon}')">
      </div>
      <div class="list-item-content">
        <div class="list-item-line1">${displayName} ${b.join('')}</div>
        <div class="list-item-line2">
          ${types_html}${types_html?' •':''} Lv${curLv}→${tgtLv}${ivDisplay}${candyDisplay}${isTrue(legendary)?' • 🏆':''}${notes?' • '+notes:''} • ${status}
        </div>
      </div>
      <div class="list-item-actions">
        <button class="btn-icon" onclick="showEditPowerUpModal(${i})" title="Edit">✏️</button>
        <button class="btn-icon" onclick="deletePowerUp(${i})" title="Delete">🗑️</button>
      </div>
    </div>`;
  }).join('');

  bindDrag(c, powerUpData, renderPowerUp, 'PowerUpPriority', PU_HEADERS);
}

// ── Rare Candy ────────────────────────────────────────────────────────────────
// candyData holds the RareCandyConfig sheet as key-value rows: [[key,value],...]
// Keys: RC_Regular, RC_XL, and Reserve_<Pokemon> rows

const RC_HEADERS = ['Key', 'Value', 'Notes'];

function rcGet(key) {
  const row = candyData.find(r => r[0] === key);
  return row ? (parseInt(row[1]) || 0) : 0;
}

function rcGetNote(key) {
  const row = candyData.find(r => r[0] === key);
  return row ? (row[2] || '') : '';
}

function rcSet(key, value, notes) {
  const idx = candyData.findIndex(r => r[0] === key);
  if (idx >= 0) {
    candyData[idx][1] = String(value);
    if (notes !== undefined) candyData[idx][2] = notes;
  } else {
    candyData.push([key, String(value), notes || '']);
  }
}

function rcRemove(key) {
  const idx = candyData.findIndex(r => r[0] === key);
  if (idx >= 0) candyData.splice(idx, 1);
}

function rcReserveKeys() {
  return candyData.filter(r => r[0].startsWith('Reserve_')).map(r => r[0]);
}

function saveCandySheet() {
  return saveSheetData('RareCandyConfig', [RC_HEADERS, ...candyData]);
}

// ── Inventory modal ───────────────────────────────────────────────────────────
function showRCInventoryModal() {
  document.getElementById('rcRegularInput').value = rcGet('RC_Regular');
  document.getElementById('rcXLInput').value      = rcGet('RC_XL');
  document.getElementById('rcInventoryModal').style.display = 'block';
}

async function saveRCInventory(e) {
  e.preventDefault();
  const btn = e.target.querySelector('button[type="submit"]');
  setSaving(btn, true);
  rcSet('RC_Regular', parseInt(document.getElementById('rcRegularInput').value) || 0);
  rcSet('RC_XL',      parseInt(document.getElementById('rcXLInput').value)      || 0);
  const ok = await saveCandySheet();
  if (ok) { closeModal('rcInventoryModal'); renderCandy(); }
  else setSaving(btn, false);
}

// ── Reserve modal ─────────────────────────────────────────────────────────────
function showAddReserveModal(key) {
  document.getElementById('reserveForm').reset();
  document.getElementById('reserveModalTitle').textContent = key ? 'Edit Reserve' : 'Add Adventure Effect Reserve';
  document.getElementById('reserveEditIndex').value = key || '';
  if (key) {
    const pokemon = key.replace('Reserve_', '');
    document.getElementById('reservePokemon').value  = pokemon;
    document.getElementById('reserveAmount').value   = rcGet(key);
    document.getElementById('reserveNotes').value    = rcGetNote(key);
    document.getElementById('reservePokemon').readOnly = true;
  } else {
    document.getElementById('reservePokemon').readOnly = false;
  }
  document.getElementById('addReserveModal').style.display = 'block';
}

async function saveReserve(e) {
  e.preventDefault();
  const btn     = e.target.querySelector('button[type="submit"]');
  setSaving(btn, true);
  const oldKey  = document.getElementById('reserveEditIndex').value;
  const pokemon = document.getElementById('reservePokemon').value.trim();
  const amount  = parseInt(document.getElementById('reserveAmount').value) || 0;
  const notes   = document.getElementById('reserveNotes').value.trim();
  const newKey  = `Reserve_${pokemon}`;
  if (oldKey && oldKey !== newKey) rcRemove(oldKey);
  rcSet(newKey, amount, notes);
  const ok = await saveCandySheet();
  if (ok) { closeModal('addReserveModal'); renderCandy(); }
  else setSaving(btn, false);
}

async function deleteReserve(key) {
  if (!confirm(`Remove reserve for ${key.replace('Reserve_','')}?`)) return;
  setBgSaving(true);
  rcRemove(key);
  await saveCandySheet();
  setBgSaving(false);
  renderCandy();
}

// ── Main render ───────────────────────────────────────────────────────────────
function renderCandy() {
  const rcRegular = rcGet('RC_Regular');
  const rcXL      = rcGet('RC_XL');
  const RC  = `<img src="GO_Rare_Candy.png"    style="width:14px;height:14px;vertical-align:middle;">`;
  const RCX = `<img src="GO_Rare_Candy_XL.png" style="width:14px;height:14px;vertical-align:middle;">`;

  // Zone 1: inventory bar — update counts and wire +/- buttons
  document.getElementById('rcRegularDisplay').textContent = rcRegular;
  document.getElementById('rcXLDisplay').textContent      = rcXL;

  // Zone 2: reserves
  const reserveKeys   = rcReserveKeys();
  const totalReserved = reserveKeys.reduce((s, k) => s + rcGet(k), 0);
  const reserveEl     = document.getElementById('rcReservesContent');

  if (!reserveKeys.length) {
    reserveEl.innerHTML = '<div class="empty-state" style="padding:10px;">No reserves set yet</div>';
  } else {
    reserveEl.innerHTML = reserveKeys.map(key => {
      const pokemon = key.replace('Reserve_', '');
      const amount  = rcGet(key);
      const notes   = rcGetNote(key);
      const amountDisplay = amount === 0
        ? `<span style="color:#48BB78;font-style:italic;">✨ Fully stocked!</span>${notes ? ' • ' + notes : ''}`
        : `<button class="btn-icon" style="font-size:11px;padding:1px 5px;" onclick="rcReserveAdj('${key}', -10)">−</button><strong style="min-width:28px;display:inline-block;text-align:center;">${amount}</strong>${RC}<button class="btn-icon" style="font-size:11px;padding:1px 5px;" onclick="rcReserveAdj('${key}', 10)">+</button>${notes ? ' <span style="color:#999;">• ' + notes + '</span>' : ''}`;
      return `
      <div class="list-item" style="cursor:default;margin-bottom:4px;">
        <img class="list-item-sprite" src="${sprite(pokemon)}" onerror="handleSpriteError(this,'${pokemon}')">
        <div class="list-item-content">
          <div class="list-item-line1">${pokemon}</div>
          <div class="list-item-line2" style="align-items:center;display:flex;gap:4px;flex-wrap:wrap;">${amountDisplay}</div>
        </div>
        <div class="list-item-actions">
          <button class="btn-icon" onclick="showAddReserveModal('${key}')" title="Edit">✏️</button>
          <button class="btn-icon" onclick="deleteReserve('${key}')" title="Delete">🗑️</button>
        </div>
      </div>`;
    }).join('');
  }

  // Zone 3: allocation plan
  const allocEl = document.getElementById('rcAllocationContent');
  const freeRC  = rcRegular - totalReserved;

  const candidates = powerUpData.filter(r => {
    const isLegendary = isTrue(r[7]);
    const tgtLv       = parseFloat(r[6]) || 0;
    const isArch      = isTrue(r[14]);
    return isLegendary && tgtLv === 50 && !isArch;
  });

  if (!candidates.length) {
    allocEl.innerHTML = `<div class="empty-state" style="padding:10px;">
      No Legendary/Mythical entries with target level 50 found in Power-Up Priority.
      Check the 🏆 Leg/Myth box and set target level to 50 to see a Pokémon here.
    </div>`;
    return;
  }

  const PRIO = {High:1, Medium:2, Low:3};
  candidates.sort((a,b) => (PRIO[a[12]]||2) - (PRIO[b[12]]||2));

  // Compute total allocated so far for running balance header
  const totalAllocRC = candidates.reduce((s, r) => s + (parseInt(rcGet('Alloc_' + r[0])) || 0), 0);
  const totalAllocXL = candidates.reduce((s, r) => s + (parseInt(rcGet('Alloc_' + r[0] + '_XL')) || 0), 0);
  const balRC = freeRC - totalAllocRC;
  const balXL = rcXL   - totalAllocXL;
  const balRCColor = balRC < 0 ? '#E53E3E' : '#48BB78';
  const balXLColor = balXL < 0 ? '#E53E3E' : '#48BB78';

  let html = `
  <div style="font-size:12px;color:#718096;padding:8px 10px;background:#f8f9fa;border-radius:6px;margin-bottom:8px;display:flex;gap:16px;flex-wrap:wrap;align-items:center;">
    <span>Free ${RC} <strong>${freeRC}</strong></span>
    <span>Allocated: <strong style="color:#C05621;">${totalAllocRC}</strong></span>
    <span>Remaining: <strong style="color:${balRCColor};">${balRC}</strong></span>
    <span style="color:#ddd;">│</span>
    <span>Free ${RCX} <strong>${rcXL}</strong></span>
    <span>Allocated: <strong style="color:#C05621;">${totalAllocXL}</strong></span>
    <span>Remaining: <strong style="color:${balXLColor};">${balXL}</strong></span>
  </div>
  <div style="display:grid;grid-template-columns:auto 1fr auto auto auto;gap:0;align-items:center;">
    <div style="display:contents;font-size:10px;color:#999;font-weight:700;text-transform:uppercase;">
      <div style="padding:4px 6px;"></div>
      <div style="padding:4px 6px;">Pokémon</div>
      <div style="padding:4px 6px;text-align:right;">Needs to L50</div>
      <div style="padding:4px 6px;text-align:center;">Allocate</div>
      <div style="padding:4px 6px;text-align:right;">Still needs</div>
    </div>`;

  for (const r of candidates) {
    const pokemon   = r[0];
    const curLv     = parseFloat(r[5]) || 0;
    const prio      = r[12] || 'Medium';
    const candyInfo = calculateCandyNeeded(curLv, 50, pokemon);
    const needRC    = candyInfo.regularCandy;
    const needXL    = candyInfo.xlCandy;
    const allocRC   = parseInt(rcGet('Alloc_' + pokemon)) || 0;
    const allocXL   = parseInt(rcGet('Alloc_' + pokemon + '_XL')) || 0;
    const stillRC   = Math.max(0, needRC - allocRC);
    const stillXL   = Math.max(0, needXL - allocXL);
    const prioColor = prio==='High'?'#E53E3E': prio==='Medium'?'#D69E2E':'#3182CE';
    const rowBg     = (stillRC > 0 || stillXL > 0) ? 'background:rgba(229,62,62,0.03);' : 'background:rgba(72,187,120,0.04);';

    const needStr = [
      needRC > 0 ? `${needRC}${RC}` : '',
      needXL > 0 ? `${needXL}${RCX}` : '',
    ].filter(Boolean).join('<br>') || '✅';

    const stillStr = needRC === 0 && needXL === 0 ? '✅' : [
      needRC > 0 ? `<span style="color:${stillRC>0?'#E53E3E':'#48BB78'};">${stillRC}${RC}</span>` : '',
      needXL > 0 ? `<span style="color:${stillXL>0?'#E53E3E':'#48BB78'};">${stillXL}${RCX}</span>` : '',
    ].filter(Boolean).join('<br>');

    html += `
    <div style="display:contents;">
      <div style="padding:6px 4px;${rowBg}border-top:1px solid #f0f0f0;">
        <img src="${sprite(pokemon)}" onerror="handleSpriteError(this,'${pokemon}')" style="width:28px;height:28px;">
      </div>
      <div style="padding:6px 6px;${rowBg}border-top:1px solid #f0f0f0;font-size:13px;font-weight:600;">
        ${pokemon}
        <span style="font-size:10px;color:${prioColor};font-weight:700;margin-left:4px;">${prio}</span>
        <div style="font-size:10px;color:#999;font-weight:400;">Lv${curLv}→50</div>
      </div>
      <div style="padding:6px 6px;${rowBg}border-top:1px solid #f0f0f0;font-size:11px;text-align:right;color:#4a5568;line-height:1.8;">${needStr}</div>
      <div style="padding:6px 6px;${rowBg}border-top:1px solid #f0f0f0;text-align:center;">
        ${needRC > 0 ? `<div style="display:flex;align-items:center;gap:3px;justify-content:center;margin-bottom:3px;">
          <button class="btn-icon" style="font-size:11px;padding:1px 5px;" onclick="rcAllocAdj('${pokemon}',false,-10)">−</button>
          <input type="number" value="${allocRC}" min="0" max="${needRC}"
            style="width:48px;text-align:center;font-size:12px;border:1px solid #e2e8f0;border-radius:4px;padding:2px 4px;"
            onchange="rcAllocSet('${pokemon}',false,this.value)">${RC}
          <button class="btn-icon" style="font-size:11px;padding:1px 5px;" onclick="rcAllocAdj('${pokemon}',false,10)">+</button>
        </div>` : ''}
        ${needXL > 0 ? `<div style="display:flex;align-items:center;gap:3px;justify-content:center;">
          <button class="btn-icon" style="font-size:11px;padding:1px 5px;" onclick="rcAllocAdj('${pokemon}',true,-10)">−</button>
          <input type="number" value="${allocXL}" min="0" max="${needXL}"
            style="width:48px;text-align:center;font-size:12px;border:1px solid #e2e8f0;border-radius:4px;padding:2px 4px;"
            onchange="rcAllocSet('${pokemon}',true,this.value)">${RCX}
          <button class="btn-icon" style="font-size:11px;padding:1px 5px;" onclick="rcAllocAdj('${pokemon}',true,10)">+</button>
        </div>` : ''}
      </div>
      <div style="padding:6px 6px;${rowBg}border-top:1px solid #f0f0f0;font-size:11px;text-align:right;line-height:1.8;">${stillStr}</div>
    </div>`;
  }

  html += `</div>`;
  allocEl.innerHTML = html;
}

async function rcInventoryAdj(type, delta) {
  const key = type === 'regular' ? 'RC_Regular' : 'RC_XL';
  const cur = rcGet(key);
  rcSet(key, Math.max(0, cur + delta));
  renderCandy();
  await saveCandySheet();
}

async function rcReserveAdj(key, delta) {
  const cur = rcGet(key);
  rcSet(key, Math.max(0, cur + delta), rcGetNote(key));
  renderCandy();
  await saveCandySheet();
}

async function rcAllocAdj(pokemon, isXL, delta) {
  const key = 'Alloc_' + pokemon + (isXL ? '_XL' : '');
  const cur = parseInt(rcGet(key)) || 0;
  rcSet(key, Math.max(0, cur + delta));
  renderCandy();
  await saveCandySheet();
}

async function rcAllocSet(pokemon, isXL, value) {
  const key = 'Alloc_' + pokemon + (isXL ? '_XL' : '');
  rcSet(key, Math.max(0, parseInt(value) || 0));
  renderCandy();
  await saveCandySheet();
}

// Trades
const WANTS_HEADERS = ['Pokemon','Reason','Priority','Notes'];
const MIRROR_HEADERS = ['Pokemon','Types','Shiny','Legacy','Source','Notes','Priority'];
const FRIENDS_HEADERS = ['Friend','They Want','You Want','Notes','Status','Ready','TheyShiny','TheyDMAX','TheyGMAX','YouShiny','YouDMAX','YouGMAX','TrainerImageURL','Completed'];

// Lucky Trade Management - Three Subsections

function renderLuckyWants() {
  const c = document.getElementById('luckyWantsContent');
  if (!luckyWantsData.length) { 
    c.innerHTML='<div class="empty-state">📝 No Pokemon on your want list yet</div>'; 
    return; 
  }
  
  // Sort by priority: High -> Medium -> Low
  const prioOrder = {'High':1,'Medium':2,'Low':3};
  const sorted = [...luckyWantsData]
    .map((r,origIdx)=>({r,origIdx}))
    .sort((a,b)=>(prioOrder[a.r[2]]||2)-(prioOrder[b.r[2]]||2));
  
  c.innerHTML = sorted.map(({r,origIdx})=>`
    <div class="list-item" draggable="true" data-index="${origIdx}">
      <div class="list-item-left">
        <span class="drag-handle">☰</span>
        <img class="list-item-sprite" src="${sprite(r[0])}" onerror="handleSpriteError(this, '${r[0]}')">
      </div>
      <div class="list-item-content">
        <div class="list-item-line1">
          ${r[0]} 
          ${r[2] ? `<span class="badge badge-priority-${r[2].toLowerCase()}">${r[2]}</span>` : ''}
        </div>
        <div class="list-item-line2">${r[1]||''}${r[3]?' • '+r[3]:''}</div>
      </div>
      <div class="list-item-actions">
        <button class="btn-icon" onclick="editLuckyWant(${origIdx})" title="Edit">✏️</button>
        <button class="btn-icon" onclick="deleteLuckyWant(${origIdx})" title="Delete">🗑️</button>
      </div>
    </div>`).join('');
    
  bindDrag(c, luckyWantsData, renderLuckyWants, 'LuckyTradeWants', WANTS_HEADERS);
}

function renderMirrorTargets() {
  const c = document.getElementById('mirrorTargetsContent');
  
  // Get auto-synced entries from Power-Up (where Need Lucky = TRUE)
  const autoSynced = powerUpData
    .filter(r => isTrue(r[10]) && r[14] !== 'TRUE') // Need Lucky=TRUE, not Archived
    .map(r => {
      const regional = r[20] || '';
      const form     = r[21] || '';
      let displayName = r[0];
      if (regional) displayName = `${regional} ${r[0]}`;
      if (form) displayName = `${displayName} (${form})`;
      return {
        pokemon: r[0],
        displayName,
        types: r[1],
        shiny: isTrue(r[16]),
        legacy: isTrue(r[3]) || isTrue(r[4]), // Has Elite or Needs Elite
        dmax: isTrue(r[22]),
        gmax: isTrue(r[23]),
        source: 'PowerUp',
        notes: r[11] || `For: ${r[7]} (Lv${r[6]})`,
        isAuto: true,
        priority: r[12] || 'Medium'
      };
    });
  
  // Get manually added entries
  const manual = mirrorTargetsData.map((r,idx) => ({
    pokemon: r[0],
    displayName: r[0],
    types: r[1],
    shiny: isTrue(r[2]),
    legacy: isTrue(r[3]),
    dmax: false,
    gmax: false,
    source: r[4] || 'Manual',
    notes: r[5] || '',
    isAuto: false,
    idx: idx,
    priority: r[6] || 'Medium'
  }));
  
  // Sort: Auto-synced first, then by priority (High -> Med -> Low)
  const prioOrder = {'High':1,'Medium':2,'Low':3};
  const allMirrors = [...autoSynced, ...manual].sort((a,b) => {
    if (a.isAuto !== b.isAuto) return a.isAuto ? -1 : 1; // Auto first
    return (prioOrder[a.priority]||2) - (prioOrder[b.priority]||2); // Then priority
  });
  
  if (!allMirrors.length) {
    c.innerHTML='<div class="empty-state">💡 Check "Need Lucky Trade" in Power-Up Priority or add mirrors manually</div>';
    return;
  }
  
  c.innerHTML = allMirrors.map(m => {
    const badges = [];
    if (m.shiny)  badges.push('<span class="icon" title="Shiny">✨</span>');
    if (m.legacy) badges.push('<span class="icon" title="Legacy Move">£</span>');
    if (m.dmax)   badges.push('<span class="icon" title="DMAX">💎</span>');
    if (m.gmax)   badges.push('<span class="icon" title="GMAX">🌟</span>');
    
    const types_html = (m.types||'').split(',').filter(t=>t.trim()).map(t=>{
      const key = t.trim().toLowerCase();
      return `<span class="type-text type-${key}">${t.trim().toUpperCase()}</span>`;
    }).join(' ');
    
    const sourceText = m.isAuto ? 'From: Power-Up Priority' : 'Manually Added';
    
    return `
    <div class="list-item" style="border-left-color:${m.isAuto?'#FFD700':'#48BB78'};cursor:default;">
      <img class="list-item-sprite" src="${sprite(m.pokemon)}" onerror="handleSpriteError(this, '${m.pokemon}')">
      <div class="list-item-content">
        <div class="list-item-line1">${m.displayName} ${badges.join('')}</div>
        <div class="list-item-line2">
          ${types_html}${types_html?' •':''} ${sourceText}${m.notes?' • '+m.notes:''}
        </div>
      </div>
      <div class="list-item-actions">
        ${!m.isAuto ? `
          <button class="btn-icon" onclick="editMirrorTarget(${m.idx})" title="Edit">✏️</button>
          <button class="btn-icon" onclick="deleteMirrorTarget(${m.idx})" title="Delete">🗑️</button>
        ` : '<span style="color:#999;font-size:12px;">Auto-synced</span>'}
      </div>
    </div>`;
  }).join('');
}

function renderLuckyFriends() {
  const c = document.getElementById('luckyFriendsContent');

  // Only show active (non-completed) rows
  const active = luckyFriendsData
    .map((r, idx) => ({r, idx}))
    .filter(({r}) => !isTrue(r[13]));

  if (!active.length) { 
    c.innerHTML='<div class="empty-state">📝 No lucky friends in queue yet</div>'; 
    return; 
  }
  
  c.innerHTML = active.map(({r, idx}) => {
    const isReady   = isTrue(r[5]);
    const status    = (r[4] || 'Planned');
    const statusLow = status.toLowerCase();
    const theyWant  = r[1] || '';
    const youWant   = r[2] || '';
    const theyShiny = isTrue(r[6]);
    const theyDMAX  = isTrue(r[7]);
    const theyGMAX  = isTrue(r[8]);
    const youShiny  = isTrue(r[9]);
    const youDMAX   = isTrue(r[10]);
    const youGMAX   = isTrue(r[11]);
    const trainerImg = r[12] || '';

    const cardBg = isReady
      ? 'background:rgba(72,187,120,0.1);border-left-color:#48BB78;'
      : statusLow === 'waiting' ? 'background:rgba(237,137,54,0.06);border-left-color:#ED8936;' : '';

    const badgeStyle = isReady || statusLow === 'planned'
      ? 'background:#C6F6D5;color:#276749;'
      : statusLow === 'waiting'
        ? 'background:#FEEBC8;color:#C05621;'
        : 'background:#E2E8F0;color:#718096;';

    const nameColor = isReady ? '#276749'
      : statusLow === 'waiting' ? '#C05621'
      : '#2d3748';

    const trainerAvatar = trainerImg
      ? `<img src="${trainerImg}" style="width:34px;height:34px;border-radius:50%;object-fit:cover;border:2px solid #CBD5E0;flex-shrink:0;" onerror="this.style.display='none';this.nextElementSibling.style.display='inline';">
         <span style="font-size:22px;display:none;">👥</span>`
      : `<span style="font-size:22px;">👥</span>`;

    function pokeSlot(label, name, shiny, dmax, gmax) {
      const badges = [shiny?'✨':'', dmax?'💎':'', gmax?'🌟':''].filter(Boolean).join(' ');
      const labelEl = `<div style="font-size:9px;color:#667eea;font-weight:700;text-transform:uppercase;letter-spacing:0.4px;">${label}</div>`;
      if (!name) return `
        <div style="display:flex;align-items:center;gap:6px;opacity:0.3;min-width:80px;">
          <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/0.png"
               style="width:38px;height:38px;flex-shrink:0;filter:grayscale(1);">
          <div>${labelEl}<div style="font-size:11px;color:#bbb;">TBD</div></div>
        </div>`;
      return `
        <div style="display:flex;align-items:center;gap:6px;min-width:80px;">
          <img src="${sprite(name)}" onerror="handleSpriteError(this,'${name}')"
               style="width:38px;height:38px;flex-shrink:0;${shiny?'filter:drop-shadow(0 0 4px gold);':''}">
          <div>
            ${labelEl}
            <div style="font-size:12px;font-weight:600;color:#2d3748;line-height:1.2;">${name}</div>
            ${badges ? `<div style="font-size:11px;line-height:1.3;">${badges}</div>` : ''}
          </div>
        </div>`;
    }

    return `
    <div class="list-item" draggable="true" data-index="${idx}" style="${cardBg}align-items:center;">
      <div class="list-item-left" style="gap:6px;align-items:center;">
        <span class="drag-handle">☰</span>
        ${trainerAvatar}
      </div>
      <div style="display:flex;align-items:center;gap:10px;flex:1;min-width:0;flex-wrap:wrap;">
        <div style="min-width:80px;max-width:110px;">
          <div style="font-size:13px;font-weight:700;color:${nameColor};white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${r[0]}</div>
          <span style="font-size:10px;padding:1px 5px;border-radius:4px;font-weight:600;${badgeStyle}">${status}${isReady?' ✅':''}</span>
          ${r[3]?`<div style="font-size:10px;color:#718096;margin-top:3px;line-height:1.2;">📝 ${r[3]}</div>`:''}
        </div>
        <div style="display:flex;gap:8px;align-items:center;">
          ${pokeSlot('They want', theyWant, theyShiny, theyDMAX, theyGMAX)}
          <div style="font-size:18px;color:#cbd5e0;">⇄</div>
          ${pokeSlot('You want',  youWant,  youShiny,  youDMAX,  youGMAX)}
        </div>
      </div>
      <div class="list-item-actions" style="flex-direction:row;gap:3px;">
        <button class="btn-icon" onclick="completeLuckyFriend(${idx})" title="Trade done — keep friend">✅</button>
        <button class="btn-icon" onclick="editLuckyFriend(${idx})" title="Edit">✏️</button>
        <button class="btn-icon" onclick="cancelLuckyFriend(${idx})" title="Cancel trade">🗑️</button>
      </div>
    </div>`;
  }).join('');
  
  bindDrag(c, luckyFriendsData, renderLuckyFriends, 'LuckyFriendsQueue', FRIENDS_HEADERS);
}

function renderTrades() {
  renderLuckyWants();
  renderMirrorTargets();
  renderLuckyFriends();
}

// Shinies
function renderShinyGaps() {
  const c = document.getElementById('shinyGapsContent');
  if (!shinyGapsData.length) { 
    c.innerHTML='<div class="empty-state">Update Google Sheet "CommunityDayShinies" with Pokemon | Have | Priority</div>'; 
    return; 
  }
  
  const missing = shinyGapsData
    .map((r,idx)=>({r,idx}))
    .filter(({r})=>{ const v=(r[1]||'').toUpperCase(); return v==='N'||v==='NO'||v==='FALSE'; });
  
  if (!missing.length) { 
    c.innerHTML='<div class="empty-state">All Community Day shinies collected!</div>'; 
    return; 
  }
  
  const sorted = missing.sort((a,b)=>{
    const prioA = (a.r[2]||'').toUpperCase();
    const prioB = (b.r[2]||'').toUpperCase();
    if (prioA === 'HIGH' && prioB !== 'HIGH') return -1;
    if (prioA !== 'HIGH' && prioB === 'HIGH') return 1;
    return 0;
  });
  
  c.innerHTML = '<div class="shiny-grid">'+sorted.map(({r,idx})=>{
    const priority = (r[2]||'Normal').toUpperCase();
    const isHigh = priority === 'HIGH';
    const cardClass = isHigh ? 'shiny-card shiny-card-high' : 'shiny-card';
    const label = isHigh ? 'High Priority' : 'Want';
    
    return `
    <div class="${cardClass}" onclick="cycleShinyPriority(${idx})" style="cursor:pointer;" title="Click to cycle: Want → High Priority → Got it!">
      <img src="${sprite(r[0])}" class="shiny-sprite" onerror="handleSpriteError(this, '${r[0]}')" draggable="false">
      <div class="shiny-name">${r[0]}</div>
      <div class="shiny-label">${label}</div>
    </div>`;
  }).join('')+'</div>';
}

async function cycleShinyPriority(idx) {
  const row = shinyGapsData[idx];
  if (!row) return;

  // Dim the clicked card immediately
  const cards = document.querySelectorAll('.shiny-card');
  const clickedCard = [...cards].find(c => c.onclick?.toString().includes(`(${idx})`));
  if (clickedCard) { clickedCard.style.opacity = '0.4'; clickedCard.style.pointerEvents = 'none'; }

  const currentPriority = (row[2]||'Normal').toUpperCase();
  const currentHave     = (row[1]||'NO').toUpperCase();

  if (currentHave === 'YES' || currentHave === 'Y' || currentHave === 'TRUE') {
    row[1] = 'NO';  row[2] = 'Normal';
  } else if (currentPriority === 'HIGH') {
    row[1] = 'YES'; row[2] = 'Normal';
  } else {
    row[2] = 'High';
  }

  setBgSaving(true);
  await saveSheetData('CommunityDayShinies', [['Pokemon','Have','Priority'], ...shinyGapsData]);
  setBgSaving(false);
  renderShinyGaps();
}

// Save/mutate
async function savePowerUp(e) {
  e.preventDefault();
  const btn = e.target.querySelector('button[type="submit"]');
  setSaving(btn, true);
  const idx = document.getElementById('puEditIndex').value;
  const row = [
    document.getElementById('puPokemon').value,
    document.getElementById('puTypes').value,
    document.getElementById('puLucky').checked    ? 'TRUE':'FALSE',
    document.getElementById('puHasElite').checked  ? 'TRUE':'FALSE',
    document.getElementById('puNeedsElite').checked? 'TRUE':'FALSE',
    document.getElementById('puCurrentLevel').value,
    document.getElementById('puTargetLevel').value,
    document.getElementById('puLegendary').checked ? 'TRUE' : 'FALSE',
    '','',
    document.getElementById('puNeedLucky').checked ? 'TRUE':'FALSE',
    document.getElementById('puNotes').value,
    document.getElementById('puPriority').value,
    document.getElementById('puStatus').value,
    document.getElementById('puArchived').value,
    document.getElementById('puHundo').checked ? 'TRUE':'FALSE',
    document.getElementById('puShiny').checked ? 'TRUE':'FALSE',
    document.getElementById('puShadow').checked ? 'TRUE':'FALSE',
    document.getElementById('puIV').value,
    document.getElementById('puStardust').value,
    document.getElementById('puRegional').value || '',
    document.getElementById('puForm').value || '',
    document.getElementById('puDMAX').checked ? 'TRUE':'FALSE',
    document.getElementById('puGMAX').checked ? 'TRUE':'FALSE'
  ];
  
  if (idx !== '') { powerUpData[idx] = row; } else { powerUpData.push(row); }
  
  // Pad all existing rows to match header length
  const paddedData = powerUpData.map(r => {
    while (r.length < PU_HEADERS.length) r.push('');
    return r;
  });
  
  const ok = await saveSheetData('PowerUpPriority',[PU_HEADERS,...paddedData]);
  if (ok) { closeModal('addPowerUpModal'); renderPowerUp(); renderTrades(); }
  else { setSaving(btn, false); }
}

async function deletePowerUp(idx) {
  if (!confirm('Permanently delete this entry?')) return;
  setBgSaving(true);
  powerUpData.splice(idx,1);
  await saveSheetData('PowerUpPriority',[PU_HEADERS,...powerUpData]);
  setBgSaving(false);
  renderPowerUp(); renderTrades();
}

// Lucky Trade Wants - CRUD
function showAddLuckyWantModal() {
  document.getElementById('luckyWantModalTitle').textContent = 'Add Pokemon to Want List';
  document.getElementById('luckyWantForm').reset();
  document.getElementById('lwEditIndex').value = '';
  document.getElementById('addLuckyWantModal').style.display = 'block';
}

function editLuckyWant(idx) {
  const r = luckyWantsData[idx];
  document.getElementById('luckyWantModalTitle').textContent = 'Edit Want List Entry';
  document.getElementById('lwEditIndex').value = idx;
  document.getElementById('lwPokemon').value = r[0] || '';
  document.getElementById('lwReason').value = r[1] || '';
  document.getElementById('lwPriority').value = r[2] || 'Medium';
  document.getElementById('lwNotes').value = r[3] || '';
  document.getElementById('addLuckyWantModal').style.display = 'block';
}

async function saveLuckyWant(e) {
  e.preventDefault();
  const btn = e.target.querySelector('button[type="submit"]');
  setSaving(btn, true);
  const idx = document.getElementById('lwEditIndex').value;
  const row = [
    document.getElementById('lwPokemon').value,
    document.getElementById('lwReason').value,
    document.getElementById('lwPriority').value,
    document.getElementById('lwNotes').value
  ];
  
  if (idx !== '') { luckyWantsData[idx] = row; } else { luckyWantsData.push(row); }
  const ok = await saveSheetData('LuckyTradeWants', [WANTS_HEADERS, ...luckyWantsData]);
  if (ok) { closeModal('addLuckyWantModal'); renderLuckyWants(); }
  else { setSaving(btn, false); }
}

async function deleteLuckyWant(idx) {
  if (!confirm('Delete this want list entry?')) return;
  setBgSaving(true);
  luckyWantsData.splice(idx, 1);
  await saveSheetData('LuckyTradeWants', [WANTS_HEADERS, ...luckyWantsData]);
  setBgSaving(false);
  renderLuckyWants();
}

// Mirror Targets - CRUD
function showAddMirrorModal() {
  document.getElementById('mirrorModalTitle').textContent = 'Add Mirror Target';
  document.getElementById('mirrorForm').reset();
  document.getElementById('mtEditIndex').value = '';
  document.getElementById('mtTypeAutoFill').textContent = '';
  document.getElementById('addMirrorModal').style.display = 'block';
}

function editMirrorTarget(idx) {
  const r = mirrorTargetsData[idx];
  document.getElementById('mirrorModalTitle').textContent = 'Edit Mirror Target';
  document.getElementById('mtEditIndex').value = idx;
  document.getElementById('mtPokemon').value = r[0] || '';
  document.getElementById('mtTypes').value = r[1] || '';
  document.getElementById('mtShiny').checked = isTrue(r[2]);
  document.getElementById('mtLegacy').checked = isTrue(r[3]);
  document.getElementById('mtNotes').value = r[5] || '';
  document.getElementById('mtPriority').value = r[6] || 'Medium';
  document.getElementById('mtTypeAutoFill').textContent = '';
  document.getElementById('addMirrorModal').style.display = 'block';
}

async function saveMirrorTarget(e) {
  e.preventDefault();
  const btn = e.target.querySelector('button[type="submit"]');
  setSaving(btn, true);
  const idx = document.getElementById('mtEditIndex').value;
  const row = [
    document.getElementById('mtPokemon').value,
    document.getElementById('mtTypes').value,
    document.getElementById('mtShiny').checked ? 'TRUE' : 'FALSE',
    document.getElementById('mtLegacy').checked ? 'TRUE' : 'FALSE',
    'Manual',
    document.getElementById('mtNotes').value,
    document.getElementById('mtPriority').value
  ];
  
  if (idx !== '') { mirrorTargetsData[idx] = row; } else { mirrorTargetsData.push(row); }
  const ok = await saveSheetData('MirrorTargets', [MIRROR_HEADERS, ...mirrorTargetsData]);
  if (ok) { closeModal('addMirrorModal'); renderMirrorTargets(); }
  else { setSaving(btn, false); }
}

async function deleteMirrorTarget(idx) {
  if (!confirm('Delete this mirror target?')) return;
  setBgSaving(true);
  mirrorTargetsData.splice(idx, 1);
  await saveSheetData('MirrorTargets', [MIRROR_HEADERS, ...mirrorTargetsData]);
  setBgSaving(false);
  renderMirrorTargets();
}

async function autoFillMirrorTypes() {
  // Clear existing timer
  if (autoFillMirrorTypesTimer) {
    clearTimeout(autoFillMirrorTypesTimer);
  }
  
  const name = document.getElementById('mtPokemon').value.toLowerCase().trim()
    .replace(/^(alolan|galarian|hisuian|shadow|mega) /,'');
  const typeField = document.getElementById('mtTypes');
  const autoInfo = document.getElementById('mtTypeAutoFill');
  
  if (!name) {
    autoInfo.textContent = '';
    return;
  }
  
  // Try local POKEMON_TYPES first (instant, no debounce needed)
  const localTypes = POKEMON_TYPES[name];
  if (localTypes) {
    typeField.value = localTypes;
    autoInfo.textContent = '✓ Types auto-filled';
    autoInfo.style.color = '#48BB78';
    return;
  }
  
  // For API lookup, debounce to wait for user to finish typing
  autoInfo.textContent = '⌨️ Typing...';
  autoInfo.style.color = '#999';
  
  autoFillMirrorTypesTimer = setTimeout(async () => {
    // Try PokeAPI cache/fetch
    autoInfo.textContent = '🔍 Looking up...';
    autoInfo.style.color = '#667eea';
    
    const data = await getPokemonData(name);
    if (data && data.types) {
      typeField.value = data.types;
      autoInfo.textContent = '✓ Types loaded from PokeAPI';
      autoInfo.style.color = '#48BB78';
    } else {
      autoInfo.textContent = '⚠️ Pokemon not found';
      autoInfo.style.color = '#DD6B20';
    }
  }, 500); // Wait 500ms after user stops typing
}

// Lucky Friends Queue - CRUD
let lfTheyTimer = null, lfYouTimer = null;

function lfPreviewSprite(which) {
  const inputId   = which === 'they' ? 'lfTheyWant'      : 'lfYouWant';
  const previewId = which === 'they' ? 'lfTheyPreview'   : 'lfYouPreview';
  const imgId     = which === 'they' ? 'lfTheyPreviewImg': 'lfYouPreviewImg';
  const infoId    = which === 'they' ? 'lfTheyPreviewInfo': 'lfYouPreviewInfo';
  const timerRef  = which === 'they' ? 'lfTheyTimer'     : 'lfYouTimer';

  if (which === 'they' && lfTheyTimer) clearTimeout(lfTheyTimer);
  if (which === 'you'  && lfYouTimer)  clearTimeout(lfYouTimer);

  const name = document.getElementById(inputId).value.trim();
  const preview = document.getElementById(previewId);
  const info    = document.getElementById(infoId);

  if (!name) { preview.style.display = 'none'; return; }

  info.textContent = '🔍 Looking up…';
  info.style.color = '#667eea';
  preview.style.display = 'flex';

  const timer = setTimeout(async () => {
    const clean = name.toLowerCase().replace(/^(alolan|galarian|hisuian|shadow|mega|primal) /, '').replace(/\s+/g, '-');
    const data = await getPokemonData(clean);
    if (data && data.sprite) {
      const img = document.getElementById(imgId);
      img.src = data.sprite;
      img.onerror = () => { info.textContent = '⚠️ Sprite not found'; info.style.color = '#DD6B20'; };
      info.textContent = '✓ Sprite loaded';
      info.style.color = '#48BB78';
    } else {
      info.textContent = '⚠️ Pokémon not found';
      info.style.color = '#DD6B20';
    }
  }, 500);

  if (which === 'they') lfTheyTimer = timer;
  else                   lfYouTimer  = timer;
}

function lfClearPreviews() {
  ['lfTheyPreview','lfYouPreview'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.style.display = 'none';
  });
}

function showAddLuckyFriendModal() {
  document.getElementById('luckyFriendModalTitle').textContent = 'Add Lucky Trade';
  document.getElementById('luckyFriendForm').reset();
  document.getElementById('lfEditIndex').value = '';
  lfClearPreviews();

  // Populate friend picker from existing roster (completed rows = available friends)
  const existingFriends = luckyFriendsData
    .map((r, idx) => ({name: r[0], img: r[12]||'', idx}))
    .filter(f => f.name);

  const picker = document.getElementById('lfFriendPicker');
  const pickerGroup = document.getElementById('lfFriendPickerGroup');

  if (existingFriends.length) {
    picker.innerHTML = '<option value="">— New friend / type name below —</option>'
      + existingFriends.map(f =>
          `<option value="${f.idx}">${f.name}${isTrue(luckyFriendsData[f.idx][13]) ? '' : ' (active)'}</option>`
        ).join('');
    pickerGroup.style.display = 'block';
  } else {
    pickerGroup.style.display = 'none';
  }

  document.getElementById('addLuckyFriendModal').style.display = 'block';
}

function lfPickFriend() {
  const picker = document.getElementById('lfFriendPicker');
  const idx = picker.value;
  if (idx === '') {
    // New friend — clear form
    document.getElementById('lfFriend').value = '';
    document.getElementById('lfTrainerImage').value = '';
    lfClearPreviews();
    return;
  }
  // Pre-fill name and image from existing friend row
  const r = luckyFriendsData[parseInt(idx)];
  document.getElementById('lfFriend').value = r[0] || '';
  document.getElementById('lfTrainerImage').value = r[12] || '';
  // Store the existing row index so save knows to reactivate it
  document.getElementById('lfEditIndex').value = idx;
}

function editLuckyFriend(idx) {
  const r = luckyFriendsData[idx];
  document.getElementById('luckyFriendModalTitle').textContent = 'Edit Lucky Friend';
  document.getElementById('lfEditIndex').value = idx;
  document.getElementById('lfFriend').value = r[0] || '';
  document.getElementById('lfTheyWant').value = r[1] || '';
  document.getElementById('lfYouWant').value = r[2] || '';
  document.getElementById('lfNotes').value = r[3] || '';
  document.getElementById('lfStatus').value = r[4] || 'Planned';
  document.getElementById('lfReady').checked = isTrue(r[5]);
  document.getElementById('lfTheyShiny').checked = isTrue(r[6]);
  document.getElementById('lfTheyDMAX').checked  = isTrue(r[7]);
  document.getElementById('lfTheyGMAX').checked  = isTrue(r[8]);
  document.getElementById('lfYouShiny').checked  = isTrue(r[9]);
  document.getElementById('lfYouDMAX').checked   = isTrue(r[10]);
  document.getElementById('lfYouGMAX').checked   = isTrue(r[11]);
  document.getElementById('lfTrainerImage').value = r[12] || '';
  // Trigger sprite previews for existing values
  if (r[1]) lfPreviewSprite('they');
  if (r[2]) lfPreviewSprite('you');
  document.getElementById('addLuckyFriendModal').style.display = 'block';
}

async function saveLuckyFriend(e) {
  e.preventDefault();
  const btn = document.querySelector('#luckyFriendForm button[type="submit"]');
  setSaving(btn, true);
  const idx = document.getElementById('lfEditIndex').value;
  const row = [
    document.getElementById('lfFriend').value,
    document.getElementById('lfTheyWant').value,
    document.getElementById('lfYouWant').value,
    document.getElementById('lfNotes').value,
    document.getElementById('lfStatus').value,
    document.getElementById('lfReady').checked ? 'TRUE' : 'FALSE',
    document.getElementById('lfTheyShiny').checked ? 'TRUE' : 'FALSE',
    document.getElementById('lfTheyDMAX').checked  ? 'TRUE' : 'FALSE',
    document.getElementById('lfTheyGMAX').checked  ? 'TRUE' : 'FALSE',
    document.getElementById('lfYouShiny').checked  ? 'TRUE' : 'FALSE',
    document.getElementById('lfYouDMAX').checked   ? 'TRUE' : 'FALSE',
    document.getElementById('lfYouGMAX').checked   ? 'TRUE' : 'FALSE',
    document.getElementById('lfTrainerImage').value.trim() || '',
    'FALSE', // Completed — always active when saved
  ];
  
  if (idx !== '') { luckyFriendsData[idx] = row; } else { luckyFriendsData.push(row); }
  const ok = await saveSheetData('LuckyFriendsQueue', [FRIENDS_HEADERS, ...luckyFriendsData]);
  setSaving(btn, false);
  if (ok) { closeModal('addLuckyFriendModal'); renderLuckyFriends(); }
}

// Helper: wipe trade fields but keep friend identity (name + image)
function clearTradeFields(idx) {
  const r = luckyFriendsData[idx];
  luckyFriendsData[idx] = [
    r[0],        // Friend name — keep
    '', '', '',  // They Want, You Want, Notes — clear
    'Planned',   // Status — reset
    'FALSE',     // Ready — reset
    'FALSE','FALSE','FALSE', // TheyShiny/DMAX/GMAX — clear
    'FALSE','FALSE','FALSE', // YouShiny/DMAX/GMAX — clear
    r[12] || '', // TrainerImageURL — keep
    'TRUE',      // Completed — flag
  ];
}

async function completeLuckyFriend(idx) {
  if (!confirm('Mark trade as done? The friend stays in your roster for next time.')) return;
  setBgSaving(true);
  clearTradeFields(idx);
  await saveSheetData('LuckyFriendsQueue', [FRIENDS_HEADERS, ...luckyFriendsData]);
  setBgSaving(false);
  renderLuckyFriends();
}

async function cancelLuckyFriend(idx) {
  if (!confirm('Cancel this trade? The friend stays in your roster for next time.')) return;
  setBgSaving(true);
  clearTradeFields(idx);
  await saveSheetData('LuckyFriendsQueue', [FRIENDS_HEADERS, ...luckyFriendsData]);
  setBgSaving(false);
  renderLuckyFriends();
}

// Init
window.onload = loadAllData;
window.onclick = e => { if (e.target.classList.contains('modal')) e.target.style.display='none'; };
