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
// Stardust cost to level mapping (NEXT POWER-UP COST shown in-game)
// Based on the pattern: costs increase every 2 levels
const STARDUST_TO_LEVEL = {
  // Levels 1-10
  200: 1, 400: 3, 600: 5, 800: 7, 1000: 9,
  // Levels 11-20
  1300: 11, 1600: 13, 1900: 15, 2200: 17, 2500: 19,
  // Levels 21-30
  3000: 21, 3500: 23, 4000: 25, 4500: 27, 5000: 29,
  // Levels 31-40
  6000: 31, 7000: 33, 8000: 35, 9000: 37, 10000: 39,
  // Levels 41-50 (shown in K in game)
  10: 40, 11: 42, 12: 44, 13: 46, 14: 48, 15: 50
};

// Cumulative candy costs from official Pokemon Go table
const CANDY_COSTS = {
  '1-30': {regular: 122, xl: 0}, '1-35': {regular: 186, xl: 0},
  '1-40': {regular: 304, xl: 0}, '1-50': {regular: 304, xl: 296},
  '15-30': {regular: 86, xl: 0}, '15-35': {regular: 150, xl: 0},
  '15-40': {regular: 268, xl: 0}, '15-50': {regular: 268, xl: 296},
  '20-30': {regular: 66, xl: 0}, '20-35': {regular: 130, xl: 0},
  '20-40': {regular: 248, xl: 0}, '20-50': {regular: 248, xl: 296},
  '25-30': {regular: 38, xl: 0}, '25-35': {regular: 102, xl: 0},
  '25-40': {regular: 220, xl: 0}, '25-50': {regular: 220, xl: 296},
  '30-35': {regular: 64, xl: 0}, '30-40': {regular: 182, xl: 0},
  '30-50': {regular: 182, xl: 296},
  '35-40': {regular: 118, xl: 0}, '35-50': {regular: 118, xl: 296},
  '40-50': {regular: 0, xl: 296}
};

function calculateCandyNeeded(currentLevel, targetLevel) {
  const cur = parseFloat(currentLevel) || 0;
  const tgt = parseFloat(targetLevel) || 0;
  
  if (cur >= tgt) return {regularCandy: 0, xlCandy: 0};
  
  // Round to milestone (1, 15, 20, 25, 30, 35, 40, 50)
  const milestones = [1, 15, 20, 25, 30, 35, 40, 50];
  let startMilestone = 1;
  let endMilestone = 50;
  
  // Find starting milestone (round down)
  for (let i = milestones.length - 1; i >= 0; i--) {
    if (cur >= milestones[i]) {
      startMilestone = milestones[i];
      break;
    }
  }
  
  // Find ending milestone (round up)
  for (let i = 0; i < milestones.length; i++) {
    if (tgt <= milestones[i]) {
      endMilestone = milestones[i];
      break;
    }
  }
  
  const key = `${startMilestone}-${endMilestone}`;
  const costs = CANDY_COSTS[key];
  
  if (costs) {
    return {regularCandy: costs.regular, xlCandy: costs.xl};
  }
  
  // Fallback
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
  
  // Fall back to default sprite URL using base name
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${getPokemonId(name)}.png`;
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

// Saving state helpers
let savingCount = 0;

function setSaving(btn, saving) {
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
  document.getElementById('puLucky').checked      = r[2]  === 'TRUE';
  document.getElementById('puHasElite').checked   = r[3]  === 'TRUE';
  document.getElementById('puNeedsElite').checked = r[4]  === 'TRUE';
  document.getElementById('puCurrentLevel').value = r[5]  || '';
  document.getElementById('puTargetLevel').value  = r[6]  || '';
  document.getElementById('puRole').value         = r[7]  || 'Raid';
  document.getElementById('puNeedLucky').checked  = r[10] === 'TRUE';
  document.getElementById('puNotes').value        = r[11] || '';
  document.getElementById('puPriority').value     = r[12] || 'Medium';
  document.getElementById('puStatus').value       = r[13] || 'To Do';
  document.getElementById('puArchived').value     = r[14] || 'FALSE';
  document.getElementById('puHundo').checked      = r[15] === 'TRUE';
  document.getElementById('puShiny').checked      = r[16] === 'TRUE';
  document.getElementById('puShadow').checked     = r[17] === 'TRUE';
  document.getElementById('puIV').value           = r[18] || '';
  document.getElementById('puStardust').value     = r[19] || '';
  document.getElementById('puRegional').value     = r[20] || '';
  document.getElementById('puForm').value         = r[21] || '';
  document.getElementById('puDMAX').checked       = r[22] === 'TRUE';
  document.getElementById('puGMAX').checked       = r[23] === 'TRUE';
  document.getElementById('typeAutoFill').textContent = '';
  document.getElementById('stardustHelper').textContent = '';
  document.getElementById('addPowerUpModal').style.display = 'block';
}

function showAddCandyModal()  { document.getElementById('candyForm').reset();  document.getElementById('addCandyModal').style.display='block'; }

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
    safe('PowerUpPriority'), safe('RareCandyPriority'), safe('LuckyTradeWants'),
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

function renderAll() { renderEvents(); renderPowerUp(); renderCandy(); renderTrades(); renderShinyGaps(); }

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
                    'Target Level','Role','XL Candy','Stardust','Need Lucky','Notes',
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
    const [pokemon,types,lucky,hasEl,needEl,curLv,tgtLv,role,,,needLucky,notes,prio,status,arch,hundo,shiny,shadow,iv] = r;
    const regional = r[20] || '';
    const form     = r[21] || '';
    const dmax     = r[22] === 'TRUE';
    const gmax     = r[23] === 'TRUE';
    const isArch = arch === 'TRUE';
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
    const candyInfo = calculateCandyNeeded(curLevel, tgtLevel);
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
          ${types_html}${types_html?' •':''} Lv${curLv}→${tgtLv}${ivDisplay}${candyDisplay} • ${role} • ${status}${notes?' • '+notes:''}
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

// Candy
function renderCandy() {
  const c = document.getElementById('rareCandyContent');
  if (!candyData.length) { c.innerHTML='<div class="empty-state">📝 No rare candy priorities yet</div>'; return; }
  c.innerHTML = candyData.map((r,idx)=>{
    const cur=parseInt(r[1])||0, tgt=parseInt(r[2])||1;
    const pct=Math.min(cur/tgt*100,100);
    return `
    <div class="list-item" style="cursor:default;grid-template-columns:auto 1fr auto auto;">
      <img class="list-item-sprite" src="${sprite(r[0])}" onerror="handleSpriteError(this, '${r[0]}')" style="align-self:center;">
      <div class="list-item-content">
        <div class="list-item-line1">${r[0]}</div>
        <div class="list-item-line2">Need ${tgt-cur} more • Target: ${tgt}${r[3]?' • '+r[3]:''}</div>
        <div class="progress-bar"><div class="progress-fill" style="width:${pct}%">${cur}/${tgt}</div></div>
      </div>
      <div class="candy-controls">
        <button class="btn btn-small" onclick="updateCandy(${idx},-10)">-10</button>
        <button class="btn btn-small" onclick="updateCandy(${idx},-1)">-1</button>
        <span class="candy-value">${cur}</span>
        <button class="btn btn-small" onclick="updateCandy(${idx},1)">+1</button>
        <button class="btn btn-small" onclick="updateCandy(${idx},10)">+10</button>
      </div>
      <button class="btn-icon" onclick="deleteCandy(${idx})" title="Delete" style="align-self:center;">🗑️</button>
    </div>`;
  }).join('');
}

// Trades
const WANTS_HEADERS = ['Pokemon','Reason','Priority','Notes'];
const MIRROR_HEADERS = ['Pokemon','Types','Shiny','Legacy','Source','Notes','Priority'];
const FRIENDS_HEADERS = ['Friend','They Want','You Want','Notes','Status','Ready','TheyShiny','TheyDMAX','TheyGMAX','YouShiny','YouDMAX','YouGMAX','TrainerImageURL'];

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
    .filter(r => r[10] === 'TRUE' && r[14] !== 'TRUE') // Need Lucky=TRUE, not Archived
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
        shiny: r[16] === 'TRUE',
        legacy: r[3] === 'TRUE' || r[4] === 'TRUE', // Has Elite or Needs Elite
        dmax: r[22] === 'TRUE',
        gmax: r[23] === 'TRUE',
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
    shiny: r[2] === 'TRUE',
    legacy: r[3] === 'TRUE',
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
  if (!luckyFriendsData.length) { 
    c.innerHTML='<div class="empty-state">📝 No lucky friends in queue yet</div>'; 
    return; 
  }
  
  c.innerHTML = luckyFriendsData.map((r,idx)=>{
    const isReady  = r[5] === 'TRUE';
    const status   = (r[4] || 'Planned').toLowerCase();
    const theyWant = r[1] || '';
    const youWant  = r[2] || '';
    const theyShiny = r[6]  === 'TRUE';
    const theyDMAX  = r[7]  === 'TRUE';
    const theyGMAX  = r[8]  === 'TRUE';
    const youShiny  = r[9]  === 'TRUE';
    const youDMAX   = r[10] === 'TRUE';
    const youGMAX   = r[11] === 'TRUE';
    const trainerImg = r[12] || '';

    // Card background: green if ready, otherwise white
    const cardBg = isReady ? 'background:rgba(72,187,120,0.1);border-left-color:#48BB78;' : '';

    // Name color by status
    let nameColor = '#4a5568';
    if (isReady)                   nameColor = '#276749';
    else if (status === 'planned') nameColor = '#C05621';

    // Trainer avatar: image if provided, else emoji fallback
    const trainerAvatar = trainerImg
      ? `<img src="${trainerImg}" style="width:38px;height:38px;border-radius:50%;object-fit:cover;border:2px solid #CBD5E0;" onerror="this.style.display='none';this.nextElementSibling.style.display='inline';">
         <span style="font-size:26px;display:none;">👥</span>`
      : `<span style="font-size:26px;">👥</span>`;

    // Build badge strings
    function pokeBadges(shiny, dmax, gmax) {
      return [
        shiny ? '✨' : '',
        dmax  ? '💎' : '',
        gmax  ? '🌟' : '',
      ].filter(Boolean).join('');
    }

    // Pokemon sprite slots
    function pokeSlot(label, name, shiny, dmax, gmax) {
      if (!name) return `
        <div style="text-align:center;opacity:0.35;min-width:60px;">
          <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/0.png"
               style="width:36px;height:36px;filter:grayscale(1);">
          <div style="font-size:10px;color:#999;margin-top:2px;">${label}</div>
          <div style="font-size:10px;color:#bbb;">TBD</div>
        </div>`;
      const badges = pokeBadges(shiny, dmax, gmax);
      return `
        <div style="text-align:center;min-width:60px;">
          <img src="${sprite(name)}" onerror="handleSpriteError(this,'${name}')"
               style="width:36px;height:36px;${shiny?'filter:drop-shadow(0 0 4px gold);':''}">
          <div style="font-size:10px;color:#667eea;font-weight:700;margin-top:2px;">${label}</div>
          <div style="font-size:11px;font-weight:600;color:#2d3748;">${name}${badges?'<br>'+badges:''}</div>
        </div>`;
    }

    return `
    <div class="list-item" draggable="true" data-index="${idx}" style="${cardBg}">
      <div class="list-item-left">
        <span class="drag-handle">☰</span>
        ${trainerAvatar}
      </div>
      <div class="list-item-content" style="flex:1;">
        <div class="list-item-line1" style="color:${nameColor};font-weight:700;margin-bottom:6px;">
          ${r[0]}
          <span class="badge badge-priority-${status==='complete'?'low':status==='waiting'?'medium':'high'}"
                style="font-size:10px;">${r[4]||'Planned'}${isReady?' ✅':''}</span>
        </div>
        <div style="display:flex;gap:16px;align-items:flex-start;flex-wrap:wrap;">
          ${pokeSlot('They want', theyWant, theyShiny, theyDMAX, theyGMAX)}
          <div style="font-size:20px;align-self:center;color:#cbd5e0;">⇄</div>
          ${pokeSlot('You want',  youWant,  youShiny,  youDMAX,  youGMAX)}
        </div>
        ${r[3]?`<div style="font-size:11px;color:#718096;margin-top:4px;">📝 ${r[3]}</div>`:''}
      </div>
      <div class="list-item-actions">
        <button class="btn-icon" onclick="editLuckyFriend(${idx})" title="Edit">✏️</button>
        <button class="btn-icon" onclick="deleteLuckyFriend(${idx})" title="Delete">🗑️</button>
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
    document.getElementById('puRole').value,
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

async function saveCandy(e) {
  e.preventDefault();
  const btn = e.target.querySelector('button[type="submit"]');
  setSaving(btn, true);
  candyData.push([
    document.getElementById('candyPokemon').value,
    document.getElementById('candyCurrent').value,
    document.getElementById('candyTarget').value,
    document.getElementById('candyNotes').value
  ]);
  const ok = await saveSheetData('RareCandyPriority',[['Pokemon','Current','Target','Notes'],...candyData]);
  if (ok) { closeModal('addCandyModal'); renderCandy(); }
  else { setSaving(btn, false); }
}

async function updateCandy(idx, delta) {
  candyData[idx][1] = Math.max(0, (parseInt(candyData[idx][1])||0)+delta).toString();
  setBgSaving(true);
  await saveSheetData('RareCandyPriority',[['Pokemon','Current','Target','Notes'],...candyData]);
  setBgSaving(false);
  renderCandy();
}

async function deleteCandy(idx) {
  if (!confirm('Delete this entry?')) return;
  setBgSaving(true);
  candyData.splice(idx,1);
  await saveSheetData('RareCandyPriority',[['Pokemon','Current','Target','Notes'],...candyData]);
  setBgSaving(false);
  renderCandy();
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
  document.getElementById('mtShiny').checked = r[2] === 'TRUE';
  document.getElementById('mtLegacy').checked = r[3] === 'TRUE';
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
function showAddLuckyFriendModal() {
  document.getElementById('luckyFriendModalTitle').textContent = 'Add Lucky Friend';
  document.getElementById('luckyFriendForm').reset();
  document.getElementById('lfEditIndex').value = '';
  document.getElementById('addLuckyFriendModal').style.display = 'block';
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
  document.getElementById('lfReady').checked = r[5] === 'TRUE';
  document.getElementById('lfTheyShiny').checked = r[6]  === 'TRUE';
  document.getElementById('lfTheyDMAX').checked  = r[7]  === 'TRUE';
  document.getElementById('lfTheyGMAX').checked  = r[8]  === 'TRUE';
  document.getElementById('lfYouShiny').checked  = r[9]  === 'TRUE';
  document.getElementById('lfYouDMAX').checked   = r[10] === 'TRUE';
  document.getElementById('lfYouGMAX').checked   = r[11] === 'TRUE';
  document.getElementById('lfTrainerImage').value = r[12] || '';
  document.getElementById('addLuckyFriendModal').style.display = 'block';
}

async function saveLuckyFriend(e) {
  e.preventDefault();
  const btn = e.target.querySelector('button[type="submit"]');
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
  ];
  
  if (idx !== '') { luckyFriendsData[idx] = row; } else { luckyFriendsData.push(row); }
  const ok = await saveSheetData('LuckyFriendsQueue', [FRIENDS_HEADERS, ...luckyFriendsData]);
  if (ok) { closeModal('addLuckyFriendModal'); renderLuckyFriends(); }
  else { setSaving(btn, false); }
}

async function deleteLuckyFriend(idx) {
  if (!confirm('Delete this lucky friend entry?')) return;
  setBgSaving(true);
  luckyFriendsData.splice(idx, 1);
  await saveSheetData('LuckyFriendsQueue', [FRIENDS_HEADERS, ...luckyFriendsData]);
  setBgSaving(false);
  renderLuckyFriends();
}

// Init
window.onload = loadAllData;
window.onclick = e => { if (e.target.classList.contains('modal')) e.target.style.display='none'; };
