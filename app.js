// GENERATED: 2026-02-18-2230-SPRITE-CACHE-FIRST
// CRITICAL FIX: sprite() now checks cache FIRST before defaulting to Pikachu

// Configuration
const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxeEnHA5MtsH2yIzsKOMB4Irz9R1Wqsj6SrcsZjjSEcF2McHJYQxpUhMbcFtXGf80ybIw/exec';
const SHEET_URL  = 'https://docs.google.com/spreadsheets/d/1E9tGFWTFWHNkN6OheYwQCCuXDdz3oWAmbWTStoufz_w/edit';

// Data arrays
let powerUpData=[], candyData=[], tradePlansData=[], shinyGapsData=[], eventsData=[];
let luckyWantsData=[], mirrorTargetsData=[], luckyFriendsData=[];
let pvpRosterData=[], pvpConfigData=[], pvpMetaData=[];

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
  'Crowned Sword':  '-crowned',
  'Crowned Shield': '-crowned',
  'Resolute':       '-resolute',
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
    'zacian|Crowned Sword':    'zacian-crowned',
    'zamazenta|Crowned Shield':'zamazenta-crowned',
    'keldeo|Resolute':         'keldeo-resolute',
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

  // Hardcoded type overrides for forms that differ from base typing
  const formTypeOverrides = {
    'zacian|Crowned Sword':     'Fairy,Steel',
    'zamazenta|Crowned Shield': 'Fighting,Steel',
    'necrozma|Dusk Mane':       'Psychic,Steel',
    'necrozma|Dawn Wings':      'Psychic,Ghost',
    'necrozma|Ultra':           'Psychic',
    'giratina|Origin':          'Ghost,Dragon',
  };
  const overrideKey = `${name.toLowerCase().trim()}|${form}`;
  if (formTypeOverrides[overrideKey]) {
    typeField.value = formTypeOverrides[overrideKey];
    autoInfo.textContent = `✓ ${form} form types set`;
    autoInfo.style.color = '#48BB78';
    // Still try to load the sprite
    const spriteUrl = sprite(name, regional, form);
    spriteImg.src = spriteUrl;
    spritePreview.style.display = 'block';
    return;
  }

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

function updateXLCandyHelper() {
  const pokemon  = (document.getElementById('puPokemon')?.value || '').trim();
  const curLv    = parseFloat(document.getElementById('puCurrentLevel')?.value) || 0;
  const tgtLv    = parseFloat(document.getElementById('puTargetLevel')?.value) || 0;
  const owned    = parseInt(document.getElementById('puXLCandy')?.value) || 0;
  const helper   = document.getElementById('xlCandyHelper');
  if (!helper) return;
  if (!pokemon || !curLv || !tgtLv || tgtLv <= curLv) { helper.textContent = ''; return; }
  const {xlCandy} = calculateCandyNeeded(curLv, tgtLv, pokemon);
  if (xlCandy === 0) { helper.textContent = ''; return; }
  const still = Math.max(0, xlCandy - owned);
  if (still === 0) {
    helper.textContent = `✅ You have enough! (need ${xlCandy}, have ${owned})`;
    helper.style.color = '#48BB78';
  } else {
    helper.textContent = `Need ${xlCandy} XL total · have ${owned} · still need ${still} via Rare Candy XL`;
    helper.style.color = '#C05621';
  }
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
function sprite(name, regional, form, shiny) {
  const baseName  = name.toLowerCase().trim().replace(/^(alolan|galarian|hisuian|shadow|mega|primal) /, '');
  const slug      = (regional || form) ? getVariantSlug(baseName, regional, form) : baseName;
  const cleanName = slug;

  // Check in-memory cache
  if (pokemonCache.has(cleanName)) {
    const cached = pokemonCache.get(cleanName);
    if (shiny && cached.shinySprite) return cached.shinySprite;
    if (!shiny && cached.sprite)      return cached.sprite;
  }

  // Check localStorage cache
  const cacheKey = `pokemon_data_${cleanName}`;
  const localCached = localStorage.getItem(cacheKey);
  if (localCached) {
    try {
      const data = JSON.parse(localCached);
      pokemonCache.set(cleanName, data);
      if (shiny && data.shinySprite) return data.shinySprite;
      if (!shiny && data.sprite)     return data.sprite;
    } catch (e) { /* invalid cache */ }
  }

  // Trigger async fetch to populate cache for next render
  getPokemonData(slug);

  // Showdown uses different slugs than PokeAPI for some forms
  const SHOWDOWN_SLUG_OVERRIDES = {
    'necrozma-dusk':  'necrozma-dusk-mane',
    'necrozma-dawn':  'necrozma-dawn-wings',
  };
  const showdownSlug = SHOWDOWN_SLUG_OVERRIDES[slug] || slug;

  // Gen5 sprites only exist for gen1-5 Pokemon. Gen6+ need the /dex/ path.
  // Detect by checking if the base name is a known gen6+ Pokemon.
  const GEN6_PLUS = new Set([
    'sylveon','klefki','spritzee','swirlix','inkay','malamar','bunnelby','diggersby',
    'fletchling','fletchinder','talonflame','scatterbug','spewpa','vivillon',
    'litleo','pyroar','flabebe','floette','florges','skiddo','gogoat','pancham','pangoro',
    'furfrou','espurr','meowstic','honedge','doublade','aegislash','spritzee','aromatisse',
    'swirlix','slurpuff','inkay','malamar','binacle','barbaracle','skrelp','dragalge',
    'clauncher','clawitzer','helioptile','heliolisk','tyrunt','tyrantrum','amaura','aurorus',
    'sylveon','hawlucha','dedenne','carbink','goomy','sliggoo','goodra','klefki','phantump',
    'trevenant','pumpkaboo','gourgeist','bergmite','avalugg','noibat','noivern','xerneas',
    'yveltal','zygarde','diancie','hoopa','volcanion',
    // gen7
    'rowlet','dartrix','decidueye','litten','torracat','incineroar','popplio','brionne',
    'primarina','pikipek','trumbeak','toucannon','yungoos','gumshoos','grubbin','charjabug',
    'vikavolt','crabrawler','crabominable','oricorio','cutiefly','ribombee','rockruff',
    'lycanroc','wishiwashi','mareanie','toxapex','mudbray','mudsdale','dewpider','araquanid',
    'fomantis','lurantis','morelull','shiinotic','salandit','salazzle','stufful','bewear',
    'bounsweet','steenee','tsareena','comfey','oranguru','passimian','wimpod','golisopod',
    'sandygast','palossand','pyukumuku','type-null','silvally','minior','komala','turtonator',
    'togedemaru','mimikyu','bruxish','drampa','dhelmise','jangmo-o','hakamo-o','kommo-o',
    'tapu-koko','tapu-lele','tapu-bulu','tapu-fini','cosmog','cosmoem','solgaleo','lunala',
    'nihilego','buzzwole','pheromosa','xurkitree','celesteela','kartana','guzzlord','necrozma',
    'magearna','marshadow','poipole','naganadel','stakataka','blacephalon','zeraora',
    // gen8
    'grookey','thwackey','rillaboom','scorbunny','raboot','cinderace','sobble','drizzile',
    'inteleon','skwovet','greedent','rookidee','corvisquire','corviknight','blipbug','dottler',
    'orbeetle','nickit','thievul','gossifleur','eldegoss','wooloo','dubwool','chewtle',
    'drednaw','yamper','boltund','rolycoly','carkol','coalossal','applin','flapple','appletun',
    'silicobra','sandaconda','cramorant','arrokuda','barraskewda','toxel','toxtricity',
    'sizzlipede','centiskorch','clobbopus','grapploct','sinistea','polteageist','hatenna',
    'hattrem','hatterene','impidimp','morgrem','grimmsnarl','obstagoon','perrserker',
    'cursola','sirfetchd','mr-rime','runerigus','milcery','alcremie','falinks','pincurchin',
    'snom','frosmoth','stonjourner','eiscue','indeedee','morpeko','cufant','copperajah',
    'dracozolt','arctozolt','dracovish','arctovish','duraludon','dreepy','drakloak','dragapult',
    'zacian','zamazenta','eternatus','kubfu','urshifu','zarude','regieleki','regidrago',
    'glastrier','spectrier','calyrex',
  ]);

  const baseForGen = slug.split('-')[0];
  const useDex = GEN6_PLUS.has(baseForGen);
  const spriteBase = useDex
    ? 'https://play.pokemonshowdown.com/sprites/dex'
    : 'https://play.pokemonshowdown.com/sprites/gen5';
  const shinyBase = useDex
    ? 'https://play.pokemonshowdown.com/sprites/dex-shiny'
    : 'https://play.pokemonshowdown.com/sprites/gen5-shiny';

  if (shiny) return `${shinyBase}/${showdownSlug}.png`;
  return `${spriteBase}/${showdownSlug}.png`;
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
      shinySprite: apiData.sprites.front_shiny,
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
  const normalizedName = pokemonName.toLowerCase().trim();

  // Prevent infinite loops
  if (img.dataset.fallbackAttempted) {
    img.src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png';
    return;
  }
  img.dataset.fallbackAttempted = 'true';

  // First try: swap gen5 → dex path (covers gen6+ Pokemon that don't have gen5 sprites)
  if (img.src.includes('/sprites/gen5/') || img.src.includes('/sprites/gen5-shiny/')) {
    const isShiny = img.src.includes('gen5-shiny');
    const filename = img.src.split('/').pop();
    const dexBase  = isShiny
      ? 'https://play.pokemonshowdown.com/sprites/dex-shiny'
      : 'https://play.pokemonshowdown.com/sprites/dex';
    img.dataset.fallbackAttempted = ''; // allow one more retry
    img.src = `${dexBase}/${filename}`;
    return;
  }

  // Second try: PokeAPI lookup
  const data = await getPokemonData(normalizedName);
  if (data && data.sprite) {
    img.src = data.sprite;
  } else {
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

// Migrate old PowerUpPriority rows (23 cols) to new schema (24 cols) by inserting blank XL Candy at index 8
// Old: [0:Pokemon,1:Types,2:Lucky,3:HasElite,4:NeedsElite,5:CurLv,6:TgtLv,7:Legendary,8:Stardust,9:NeedLucky...]
// New: [0:Pokemon,1:Types,2:Lucky,3:HasElite,4:NeedsElite,5:CurLv,6:TgtLv,7:Legendary,8:XLCandy,9:Stardust,10:NeedLucky...]
function migratePoRow(r) {
  if (r.length >= 24) return r; // already new format
  const migrated = [...r];
  migrated.splice(8, 0, ''); // insert blank XL Candy at col 8
  return migrated;
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

// Stronger opacity variant for PVP roster cards where type bg is the main visual
function getTypeBackgroundStrong(typesStr) {
  if (!typesStr) return '';
  const types = typesStr.split(',').map(t => t.trim().toLowerCase()).filter(t => t);
  if (types.length === 0) return '';
  const typeColors = {
    normal:   'rgba(139,139,99,0.22)',   fire:     'rgba(192,80,16,0.22)',
    water:    'rgba(32,80,208,0.22)',    electric: 'rgba(160,120,0,0.22)',
    grass:    'rgba(58,138,24,0.22)',    ice:      'rgba(32,144,160,0.22)',
    fighting: 'rgba(144,24,24,0.22)',   poison:   'rgba(120,24,120,0.22)',
    ground:   'rgba(144,96,16,0.22)',   flying:   'rgba(80,64,176,0.22)',
    psychic:  'rgba(200,0,80,0.22)',    bug:      'rgba(80,96,0,0.22)',
    rock:     'rgba(120,96,40,0.22)',   ghost:    'rgba(58,32,96,0.22)',
    dragon:   'rgba(64,16,216,0.22)',   dark:     'rgba(58,40,40,0.22)',
    steel:    'rgba(80,80,96,0.22)',    fairy:    'rgba(176,48,96,0.22)'
  };
  if (types.length === 1) return typeColors[types[0]] || 'rgba(200,200,200,0.12)';
  const c1 = typeColors[types[0]] || 'rgba(200,200,200,0.12)';
  const c2 = typeColors[types[1]] || 'rgba(200,200,200,0.12)';
  return `linear-gradient(120deg, ${c1} 0%, ${c2} 100%)`;
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

function setSyncBadge(text, cls) {
  ['syncStatus','syncStatusMobile'].forEach(id => {
    const el = document.getElementById(id);
    if (el) { el.textContent = text; el.className = cls; }
  });
}

function setBgSaving(saving) {
  savingCount += saving ? 1 : -1;
  if (savingCount > 0) {
    setSyncBadge('⏳ Saving…', 'status-badge status-loading');
  } else {
    setSyncBadge('✅ Synced', 'status-badge status-connected');
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
  document.getElementById('puXLCandy').value       = r[8]  || '';
  updateXLCandyHelper();
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
  setSyncBadge('🔄 Syncing…', 'status-badge status-loading');
  document.getElementById('syncErrorDetail').style.display = 'none';

  const errors = [];
  const safe = async (name) => {
    try { return await loadSheetData(name); }
    catch(e) { errors.push(`${name}: ${e.message}`); return []; }
  };

  const [pu, candy, wants, mirrors, friends, shinies, events, pvpRoster, pvpConfig, pvpMeta, raids] = await Promise.all([
    safe('PowerUpPriority'), safe('RareCandyConfig'), safe('LuckyTradeWants'),
    safe('MirrorTargets'), safe('LuckyFriendsQueue'),
    safe('CommunityDayShinies'), safe('CurrentEvents'),
    safe('PVPRoster'), safe('PVPConfig'), safe('PVPMeta'), safe('RaidBosses')
  ]);

  powerUpData       = pu.length      > 1 ? pu.slice(1).map(r => migratePoRow(r))      : [];
  candyData         = candy.length   > 1 ? candy.slice(1)   : [];
  luckyWantsData    = wants.length   > 1 ? wants.slice(1)   : [];
  mirrorTargetsData = mirrors.length > 1 ? mirrors.slice(1) : [];
  luckyFriendsData  = friends.length > 1 ? friends.slice(1).map(r => { while (r.length < 16) r.push(''); return r; }) : [];
  shinyGapsData     = shinies.length > 1 ? shinies.slice(1) : [];
  eventsData        = events.length  > 1 ? events.slice(1)  : [];
  pvpRosterData     = pvpRoster.length > 1 ? pvpRoster.slice(1) : [];
  pvpConfigData     = pvpConfig.length > 1 ? pvpConfig.slice(1) : [];
  pvpMetaData       = pvpMeta.length   > 1 ? pvpMeta.slice(1)   : [];
  raidBossData      = raids.length     > 1 ? raids.slice(1)     : [];

  renderAll();

  if (errors.length) {
    setSyncBadge('⚠️ Partial Sync', 'status-badge status-disconnected');
    document.getElementById('syncErrorDetail').style.display = 'block';
    document.getElementById('syncErrorDetail').textContent   = errors.join(' | ');
  } else {
    setSyncBadge('✅ Synced', 'status-badge status-connected');
  }
}

function renderAll() {
  for (const [fn, name] of [[renderEvents,'Events'],[renderRaidBosses,'Raids'],[renderPowerUp,'PowerUp'],[renderCandy,'Candy'],[renderTrades,'Trades'],[renderShinyGaps,'Shinies'],[renderPVP,'PVP'],[renderShinyOdds,'ShinyOdds']]) {
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

  const DAYS = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
  const weekdayMap = {
    monday:1,mon:1, tuesday:2,tue:2,tues:2, wednesday:3,wed:3,
    thursday:4,thu:4,thurs:4, friday:5,fri:5, saturday:6,sat:6, sunday:7,sun:7
  };
  const todayJS = new Date().getDay();
  const today   = todayJS === 0 ? 7 : todayJS; // 1=Mon … 7=Sun

  function getDays(description) {
    // Returns array of day numbers (1–7) found in the description
    const desc  = (description || '').toLowerCase();
    const found = new Set();
    for (const [key, num] of Object.entries(weekdayMap)) {
      // word boundary check to avoid "sun" matching "Sunday" twice etc.
      if (new RegExp(`\\b${key}\\b`).test(desc)) found.add(num);
    }
    return [...found].sort();
  }

  // Bucket events: day 1–7, or 0 = "all week / no day"
  const buckets = {0:[], 1:[], 2:[], 3:[], 4:[], 5:[], 6:[], 7:[]};
  eventsData.forEach(row => {
    const [icon, eventType, description] = row;
    if (!icon && !description) return;
    const days = getDays(description);
    if (days.length === 0) {
      buckets[0].push({icon, eventType, description});
    } else {
      days.forEach(d => buckets[d].push({icon, eventType, description}));
    }
  });

  const typeColors = {
    'Raids':'#3182CE','Mega Raids':'#553c9a','Event':'#D69E2E','Spotlight':'#D69E2E',
    'PvP':'#E53E3E','Max Monday':'#2b6cb0','GO Tour':'#805AD5','GO Fest':'#805AD5',
    'Community Day':'#48BB78','Research':'#38A169','default':'#718096'
  };

  function eventCard(ev) {
    const color = typeColors[ev.eventType] || typeColors.default;
    return `<div style="background:white;border-radius:6px;padding:5px 7px;margin-bottom:4px;
                        border-left:3px solid ${color};font-size:11px;box-shadow:0 1px 3px rgba(0,0,0,0.08);">
      <div style="font-weight:700;color:${color};line-height:1.2;">${ev.icon || ''} ${ev.eventType || ''}</div>
      <div style="color:#4a5568;margin-top:1px;line-height:1.3;">${ev.description || ''}</div>
    </div>`;
  }

  // All-week banner
  const allWeekHtml = buckets[0].length
    ? `<div style="margin-bottom:10px;padding:6px 8px;background:#f0fff4;border:1px solid #c6f6d5;border-radius:8px;">
        <div style="font-size:10px;font-weight:700;color:#276749;text-transform:uppercase;letter-spacing:0.5px;margin-bottom:4px;">📅 All Week</div>
        ${buckets[0].map(eventCard).join('')}
       </div>`
    : '';

  // 7-day grid
  const gridCols = DAYS.map((day, i) => {
    const dayNum   = i + 1;
    const isToday  = dayNum === today;
    const isPast   = dayNum < today;
    const events   = buckets[dayNum];
    const headerBg    = isToday ? '#667eea' : isPast ? '#e2e8f0' : '#f7fafc';
    const headerColor = isToday ? 'white'   : isPast ? '#a0aec0' : '#4a5568';
    const colBg       = isToday ? 'rgba(102,126,234,0.05)' : 'transparent';
    const colOpacity  = isPast  ? 'opacity:0.45;' : '';

    return `<div style="min-width:0;background:${colBg};border-radius:8px;overflow:hidden;${colOpacity}">
      <div style="background:${headerBg};color:${headerColor};font-size:10px;font-weight:700;
                  text-align:center;padding:4px 2px;letter-spacing:0.5px;">
        ${day}${isToday ? ' ◀' : ''}
      </div>
      <div style="padding:4px;">
        ${events.length
          ? events.map(eventCard).join('')
          : `<div style="font-size:10px;color:#cbd5e0;text-align:center;padding:8px 2px;">—</div>`}
      </div>
    </div>`;
  }).join('');

  container.innerHTML = `
    ${allWeekHtml}
    <div style="display:grid;grid-template-columns:repeat(7,1fr);gap:6px;">
      ${gridCols}
    </div>`;

  renderEventsOld();
}

function renderEventsOld() {
  const container = document.getElementById('eventsListOld');
  if (!container) return;
  // Only render on mobile — on desktop the grid is shown instead
  if (window.innerWidth > 600) { container.innerHTML = ''; return; }
  if (eventsData.length === 0) { container.innerHTML = ''; return; }

  const weekdayMap = {
    monday:1,mon:1, tuesday:2,tue:2,tues:2, wednesday:3,wed:3,
    thursday:4,thu:4,thurs:4, friday:5,fri:5, saturday:6,sat:6, sunday:7,sun:7
  };
  const todayJS = new Date().getDay();
  const today   = todayJS === 0 ? 7 : todayJS;

  function getDay(desc) {
    const d = (desc||'').toLowerCase();
    for (const [k,v] of Object.entries(weekdayMap)) if (new RegExp(`\\b${k}\\b`).test(d)) return v;
    return 99;
  }

  const sorted = [...eventsData].sort((a,b) => getDay(a[2]) - getDay(b[2]));
  container.innerHTML = sorted.map(row => {
    const [icon, eventType, description] = row;
    if (!icon && !description) return '';
    const day = getDay(description);
    const isToday = day === today, isPast = day < today && day !== 99;
    const style = isToday
      ? 'background:#ebf4ff;border-left:3px solid #667eea;'
      : isPast ? 'opacity:0.5;border-left:3px solid #e2e8f0;' : 'border-left:3px solid #e2e8f0;';
    return `<div class="event-item" style="${style}">
      <div class="event-item-icon">${icon||''}</div>
      <div class="event-item-text"><strong>${eventType||''}:</strong> ${description||''}</div>
    </div>`;
  }).join('');
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
  const showArch     = document.getElementById('showArchivedPowerUp')?.checked;
  const filterStatus = document.getElementById('puFilterStatus')?.value  || 'all';
  const filterPrio   = document.getElementById('puFilterPrio')?.value    || 'all';
  const filterType   = document.getElementById('puFilterType')?.value    || 'all';
  const sortBy       = document.getElementById('puSortBy')?.value        || 'priority';

  const RC_IMG  = `<img src="GO_Rare_Candy.png"    style="width:13px;height:13px;vertical-align:middle;margin:0 1px;">`;
  const RCX_IMG = `<img src="GO_Rare_Candy_XL.png" style="width:13px;height:13px;vertical-align:middle;margin:0 1px;">`;

  let rows = powerUpData
    .map((r,i)=>({r,i}))
    .filter(({r}) => showArch || r[14] !== 'TRUE')
    .filter(({r}) => filterStatus === 'all' || (r[13]||'') === filterStatus)
    .filter(({r}) => filterPrio   === 'all' || (r[12]||'') === filterPrio)
    .filter(({r}) => {
      if (filterType === 'all')       return true;
      if (filterType === 'legendary') return isTrue(r[7]);
      if (filterType === 'shadow')    return r[17] === 'TRUE';
      if (filterType === 'lucky')     return r[2]  === 'TRUE';
      return true;
    });

  // Sort
  rows.sort((a,b) => {
    if (sortBy === 'name')    return (a.r[0]||'').localeCompare(b.r[0]||'');
    if (sortBy === 'level')   return (parseFloat(b.r[5])||0) - (parseFloat(a.r[5])||0);
    if (sortBy === 'candy')   {
      const ca = calculateCandyNeeded(parseFloat(a.r[5])||0, parseFloat(a.r[6])||0, a.r[0]);
      const cb = calculateCandyNeeded(parseFloat(b.r[5])||0, parseFloat(b.r[6])||0, b.r[0]);
      return (cb.regularCandy + cb.xlCandy) - (ca.regularCandy + ca.xlCandy);
    }
    return (PRIO_ORDER[a.r[12]]||2) - (PRIO_ORDER[b.r[12]]||2);
  });

  if (!rows.length) { c.innerHTML='<div class="empty-state">📝 No power-up priorities match the current filters</div>'; return; }

  const STATUS_BADGE = {
    'To Do':       'background:#E2E8F0;color:#4A5568;',
    'In Progress': 'background:#FEEBC8;color:#C05621;',
    'Done':        'background:#C6F6D5;color:#276749;',
  };

  c.innerHTML = rows.map(({r,i}) => {
    const [pokemon,types,lucky,hasEl,needEl,curLv,tgtLv,legendary,,,needLucky,notes,prio,status,arch,hundo,shiny,shadow,iv] = r;
    const regional = r[20] || '';
    const form     = r[21] || '';
    const dmax     = isTrue(r[22]);
    const gmax     = isTrue(r[23]);
    const isArch   = isTrue(arch);
    const curLevel = parseFloat(curLv) || 0;
    const tgtLevel = parseFloat(tgtLv) || 0;
    const targetMet = curLevel >= tgtLevel && tgtLevel > 0;

    let displayName = pokemon;
    if (regional) displayName = `${regional} ${pokemon}`;
    if (form) displayName = `${displayName} (${form})`;

    const types_html = (types||'').split(',').filter(t=>t.trim()).map(t=>{
      const key = t.trim().toLowerCase();
      return `<span class="type-text type-${key}">${t.trim().toUpperCase()}</span>`;
    }).join(' ');

    const typesBg = getTypeBackground(types);

    const b = [];
    if (targetMet)          b.push('<span class="icon" title="Level target reached">✅</span>');
    if (isTrue(legendary))  b.push('<span class="icon" title="Legendary/Mythical">🏆</span>');
    if (lucky==='TRUE')     b.push('<span class="icon" title="Lucky">🍀</span>');
    if (hundo==='TRUE')     b.push('<span class="icon" title="Hundo">💯</span>');
    if (shiny==='TRUE')     b.push('<span class="icon" title="Shiny">✨</span>');
    if (shadow==='TRUE')    b.push('<span class="icon" title="Shadow">👤</span>');
    if (hasEl==='TRUE')     b.push('<span class="icon" title="Has Legacy Move">£</span>');
    if (needEl==='TRUE')    b.push('<span class="icon" title="Needs Legacy Move">❗</span>');
    if (needLucky==='TRUE') b.push('<span class="icon" title="Need Lucky Trade">🤝</span>');
    if (dmax)               b.push('<span class="icon" title="DMAX">💎</span>');
    if (gmax)               b.push('<span class="icon" title="GMAX">🌟</span>');
    if (prio)               b.push(`<span class="badge badge-priority-${prio.toLowerCase()}">${prio}</span>`);
    if (curLevel >= 50)     b.push('<span class="badge badge-complete50">L50 ✓</span>');
    else if (tgtLevel >= 50) b.push('<span class="badge badge-target50">→50</span>');

    // Status badge
    const statusStyle = STATUS_BADGE[status] || 'background:#E2E8F0;color:#4A5568;';
    const statusBadge = status
      ? `<span style="${statusStyle}font-size:10px;padding:1px 6px;border-radius:8px;font-weight:600;white-space:nowrap;">${status}</span>`
      : '';

    const ivDisplay = iv ? ` • ${iv}% IV` : '';

    // Candy with image assets
    const candyInfo = calculateCandyNeeded(curLevel, tgtLevel, pokemon);
    let candyDisplay = '';
    if (candyInfo.regularCandy > 0 || candyInfo.xlCandy > 0) {
      const parts = [];
      if (candyInfo.regularCandy > 0) parts.push(`${candyInfo.regularCandy}${RC_IMG}`);
      if (candyInfo.xlCandy > 0)      parts.push(`${candyInfo.xlCandy}${RCX_IMG}`);
      candyDisplay = ` • Need: ${parts.join(' + ')}`;
    }

    return `
    <div class="list-item" draggable="true" data-index="${i}" style="background:${typesBg};${isArch||targetMet?'opacity:0.55;':''}">
      <div class="list-item-left">
        <span class="drag-handle">☰</span>
        <img class="list-item-sprite" src="${sprite(pokemon, regional, form, shiny==='TRUE')}" onerror="handleSpriteError(this, '${pokemon}')">
      </div>
      <div class="list-item-content">
        <div class="list-item-line1">${displayName} ${b.join('')} ${statusBadge}</div>
        <div class="list-item-line2">
          ${types_html}${types_html?' •':''} Lv${curLv}→${tgtLv}${ivDisplay}${candyDisplay}${notes?' • '+notes:''}
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
    // Map reserve pokemon names to their preferred form sprites for adventure effects
    const RESERVE_FORM_SPRITES = {
      'Dialga':  { regional: '', form: 'Origin' },
      'Palkia':  { regional: '', form: 'Origin' },
      'Kyurem':  { regional: '', form: 'Black'  },
    };

    reserveEl.innerHTML = reserveKeys.map(key => {
      const pokemon = key.replace('Reserve_', '');
      const amount  = rcGet(key);
      const notes   = rcGetNote(key);
      const formHint = RESERVE_FORM_SPRITES[pokemon];
      const spriteUrl = formHint
        ? sprite(pokemon, formHint.regional, formHint.form)
        : sprite(pokemon);
      const amountDisplay = amount === 0
        ? `<span style="color:#48BB78;font-style:italic;">✨ Fully stocked!</span>${notes ? ' • ' + notes : ''}`
        : `<button class="btn-icon" style="font-size:11px;padding:1px 5px;" onclick="rcReserveAdj('${key}', -10)">−</button><strong style="min-width:28px;display:inline-block;text-align:center;">${amount}</strong>${RC}<button class="btn-icon" style="font-size:11px;padding:1px 5px;" onclick="rcReserveAdj('${key}', 10)">+</button>${notes ? ' <span style="color:#999;">• ' + notes + '</span>' : ''}`;
      return `
      <div class="list-item" style="cursor:default;margin-bottom:4px;">
        <img class="list-item-sprite" src="${spriteUrl}" onerror="handleSpriteError(this,'${pokemon}')">
        <div class="list-item-content">
          <div class="list-item-line1">
            ${pokemon}
            ${notes ? `<span style="font-size:11px;color:#718096;font-weight:400;margin-left:8px;">${notes}</span>` : ''}
          </div>
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

  // Cascade mode: read from localStorage
  const cascadeMode = localStorage.getItem('rcAllocMode') === 'cascade';

  // Update toggle button label
  const toggleBtn = document.getElementById('rcCascadeToggle');
  if (toggleBtn) {
    toggleBtn.textContent = cascadeMode ? 'Mode: Cascade ▾' : 'Mode: Free-for-all ▿';
    toggleBtn.style.background = cascadeMode ? '#667eea' : 'white';
    toggleBtn.style.color      = cascadeMode ? 'white'   : '#667eea';
  }

  // Compute total allocated for summary bar
  const totalAllocRC = candidates.reduce((s, r) => s + (parseInt(rcGet('Alloc_' + r[0])) || 0), 0);
  const totalAllocXL = candidates.reduce((s, r) => s + (parseInt(rcGet('Alloc_' + r[0] + '_XL')) || 0), 0);
  const balRC = freeRC - totalAllocRC;
  const balXL = rcXL   - totalAllocXL;
  const balRCColor = balRC < 0 ? '#E53E3E' : '#48BB78';
  const balXLColor = balXL < 0 ? '#E53E3E' : '#48BB78';

  let html = `
  <div style="font-size:12px;color:#718096;padding:8px 10px;background:#f8f9fa;border-radius:6px;margin-bottom:8px;display:flex;gap:14px;flex-wrap:wrap;align-items:center;">
    <span>${RC} Available: <strong style="color:#DD6B20;font-size:13px;">${freeRC}</strong></span>
    <span style="color:#bbb;">·</span>
    <span>Allocated: <strong style="color:#C05621;">${totalAllocRC}</strong></span>
    <span>Remaining: <strong style="color:${balRCColor};">${balRC}</strong></span>
    <span style="color:#ddd;">│</span>
    <span>${RCX} Available: <strong style="color:#DD6B20;font-size:13px;">${rcXL}</strong></span>
    <span style="color:#bbb;">·</span>
    <span>Allocated: <strong style="color:#C05621;">${totalAllocXL}</strong></span>
    <span>Remaining: <strong style="color:${balXLColor};">${balXL}</strong></span>
  </div>
  <div id="rcAllocList">`;

  // Running balances for cascade mode
  let runRC = freeRC;
  let runXL = rcXL;

  for (const r of candidates) {
    const pokemon    = r[0];
    const curLv      = parseFloat(r[5]) || 0;
    const prio       = r[12] || 'Medium';
    const speciesXL  = parseInt(r[8]) || 0;
    const regional   = r[20] || '';
    const form       = r[21] || '';
    const isShiny    = isTrue(r[16]);

    let displayName = pokemon;
    if (regional) displayName = `${regional} ${pokemon}`;
    if (form)     displayName = `${displayName} (${form})`;

    const candyInfo  = calculateCandyNeeded(curLv, 50, pokemon);
    const needRC     = candyInfo.regularCandy;
    const needXLRaw  = candyInfo.xlCandy;
    const needXL     = Math.max(0, needXLRaw - speciesXL);
    const allocRC    = parseInt(rcGet('Alloc_' + pokemon)) || 0;
    const allocXL    = parseInt(rcGet('Alloc_' + pokemon + '_XL')) || 0;
    const stillRC    = Math.max(0, needRC - allocRC);
    const stillXL    = Math.max(0, needXL - allocXL);
    const prioColor  = prio==='High'?'#E53E3E': prio==='Medium'?'#D69E2E':'#3182CE';
    const rowBg      = (stillRC > 0 || stillXL > 0) ? 'background:rgba(229,62,62,0.03);' : 'background:rgba(72,187,120,0.04);';

    // In cascade mode, show available RC before this row
    if (cascadeMode) {
      const rcAvailColor = runRC < 0 ? '#E53E3E' : '#DD6B20';
      const xlAvailColor = runXL < 0 ? '#E53E3E' : '#DD6B20';
      html += `<div style="font-size:10px;color:#999;padding:2px 8px 4px;display:flex;gap:12px;">
        <span>${RC} <strong style="color:${rcAvailColor};">${runRC}</strong> available</span>
        <span>${RCX} <strong style="color:${xlAvailColor};">${runXL}</strong> available</span>
      </div>`;
    }

    // needStr: species XL first, then rare XL needed
    const speciesXLPart = speciesXL > 0 && needXLRaw > 0
      ? `<span style="color:#48BB78;">${speciesXL} ${pokemon} XL</span>` : '';
    const rareXLPart = needXL > 0
      ? `${needXL}${RCX}` : '';
    const xlNeedStr = [speciesXLPart, rareXLPart].filter(Boolean).join(' + ');

    const needStr = [
      needRC    > 0 ? `${needRC}${RC}` : '',
      xlNeedStr || (needXLRaw === 0 ? '' : ''),
    ].filter(Boolean).join('<br>') || '✅';

    html += `
    <div class="list-item alloc-card" draggable="true" data-alloc-pokemon="${pokemon}"
         style="padding:6px 8px;${rowBg}margin-bottom:3px;">
      <span class="drag-handle alloc-handle">☰</span>
      <img src="${sprite(pokemon, regional, form, isShiny)}" onerror="handleSpriteError(this,'${pokemon}')"
           class="alloc-sprite" style="width:30px;height:30px;">
      <div class="alloc-info">
        <div style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-size:13px;font-weight:700;">${displayName}</div>
        <div style="display:flex;align-items:center;gap:4px;flex-wrap:nowrap;margin-top:1px;">
          <span style="font-size:10px;color:${prioColor};font-weight:700;">${prio}</span>
          <span style="font-size:10px;color:#999;font-weight:400;">Lv${curLv}→50</span>
        </div>
        ${needStr !== '✅' ? `<div style="font-size:10px;color:#718096;font-weight:400;margin-top:2px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">Needs: ${needStr}</div>` : '<div style="font-size:10px;color:#48BB78;margin-top:2px;">✅ Fully covered</div>'}
      </div>
      <div class="alloc-calc">
        ${needRC > 0 ? `<div style="display:flex;align-items:center;gap:2px;justify-content:flex-end;margin-bottom:3px;white-space:nowrap;">
          <button class="btn-icon" style="font-size:10px;padding:1px 4px;" onclick="rcAllocAdj('${pokemon}',false,-10)">−</button>
          <input type="number" value="${allocRC}" min="0"
            style="width:42px;text-align:center;font-size:11px;border:1px solid #e2e8f0;border-radius:4px;padding:2px;"
            onchange="rcAllocSet('${pokemon}',false,this.value)">${RC}
          <button class="btn-icon" style="font-size:10px;padding:1px 4px;" onclick="rcAllocAdj('${pokemon}',false,10)">+</button>
          <span style="color:#bbb;margin:0 2px;">→</span>
          <span style="font-size:11px;font-weight:700;color:${stillRC>0?'#E53E3E':'#48BB78'};min-width:26px;text-align:right;">${stillRC}${RC}</span>
        </div>` : ''}
        ${needXL > 0 ? `<div style="display:flex;align-items:center;gap:2px;justify-content:flex-end;white-space:nowrap;">
          <button class="btn-icon" style="font-size:10px;padding:1px 4px;" onclick="rcAllocAdj('${pokemon}',true,-10)">−</button>
          <input type="number" value="${allocXL}" min="0"
            style="width:42px;text-align:center;font-size:11px;border:1px solid #e2e8f0;border-radius:4px;padding:2px;"
            onchange="rcAllocSet('${pokemon}',true,this.value)">${RCX}
          <button class="btn-icon" style="font-size:10px;padding:1px 4px;" onclick="rcAllocAdj('${pokemon}',true,10)">+</button>
          <span style="color:#bbb;margin:0 2px;">→</span>
          <span style="font-size:11px;font-weight:700;color:${stillXL>0?'#E53E3E':'#48BB78'};min-width:26px;text-align:right;">${stillXL}${RCX}</span>
        </div>` : ''}
        ${needRC === 0 && needXL === 0 ? '<span style="color:#48BB78;font-size:13px;">✅</span>' : ''}
      </div>
    </div>`;

    // Advance running balances for cascade mode
    runRC -= allocRC;
    runXL -= allocXL;
  }

  // Show final balance line in cascade mode
  if (cascadeMode) {
    const rcFinalColor = runRC < 0 ? '#E53E3E' : '#48BB78';
    const xlFinalColor = runXL < 0 ? '#E53E3E' : '#48BB78';
    html += `<div style="font-size:11px;padding:6px 8px;background:#f8f9fa;border-radius:6px;margin-top:4px;display:flex;gap:12px;">
      <span>Final ${RC} balance: <strong style="color:${rcFinalColor};">${runRC}</strong></span>
      <span>Final ${RCX} balance: <strong style="color:${xlFinalColor};">${runXL}</strong></span>
    </div>`;
  }

  html += `</div>`;
  allocEl.innerHTML = html;

  // Wire drag-drop on allocation rows
  const allocList = document.getElementById('rcAllocList');
  if (allocList) bindAllocDrag(allocList);
}

function bindAllocDrag(container) {
  let dragSrcEl = null;
  container.querySelectorAll('.list-item[data-alloc-pokemon]').forEach(el => {
    el.addEventListener('dragstart', function(e) {
      dragSrcEl = this; e.dataTransfer.setData('text/plain', this.dataset.allocPokemon);
      setTimeout(() => this.style.opacity = '0.4', 0);
    });
    el.addEventListener('dragend',   function() { this.style.opacity = '1'; });
    el.addEventListener('dragover',  e => e.preventDefault());
    el.addEventListener('dragenter', function() { this.classList.add('over'); });
    el.addEventListener('dragleave', function() { this.classList.remove('over'); });
    el.addEventListener('drop', function(e) {
      e.stopPropagation(); this.classList.remove('over');
      if (dragSrcEl === this) return;
      const srcName = dragSrcEl.dataset.allocPokemon;
      const dstName = this.dataset.allocPokemon;
      const srcIdx  = powerUpData.findIndex(r => r[0] === srcName);
      const dstIdx  = powerUpData.findIndex(r => r[0] === dstName);
      if (srcIdx < 0 || dstIdx < 0) return;
      const [item] = powerUpData.splice(srcIdx, 1);
      powerUpData.splice(dstIdx, 0, item);
      setBgSaving(true);
      saveSheetData('PowerUpPriority', [PU_HEADERS, ...powerUpData]).then(() => setBgSaving(false));
      renderCandy();
    });
  });
}

function toggleAllocMode() {
  const current = localStorage.getItem('rcAllocMode') === 'cascade';
  localStorage.setItem('rcAllocMode', current ? 'free' : 'cascade');
  renderCandy();
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

// ── Raid Boss Tracker ─────────────────────────────────────────────────────────
const RAID_HEADERS = ['Pokemon','Tier','Shiny','IVs','XL','Dex','Costume','Priority','Notes','Done','DoneDate'];

let raidBossData = [];

function renderRaidBosses() {
  const c = document.getElementById('raidBossContent');
  if (!raidBossData.length) {
    c.innerHTML = '<div class="empty-state">No raid bosses tracked yet — add one above!</div>';
    updateRaidWeekLabel();
    return;
  }

  // Auto-reset: clear Done if DoneDate was before last Monday
  const lastMonday = getLastMonday();
  let changed = false;
  raidBossData.forEach(r => {
    if (isTrue(r[9]) && r[10]) {
      if (new Date(r[10]) < lastMonday) { r[9] = 'FALSE'; r[10] = ''; changed = true; }
    }
  });
  if (changed) saveSheetData('RaidBosses', [RAID_HEADERS, ...raidBossData]);

  const PRIO = {High:1, Medium:2, Low:3};
  const sorted = raidBossData
    .map((r,idx) => ({r,idx}))
    .sort((a,b) => (PRIO[a.r[7]]||2) - (PRIO[b.r[7]]||2));

  const tierColors = {'5★':'#b7791f','Mega':'#553c9a','DMAX':'#2b6cb0','GMAX':'#276749','3★':'#c05621','1★':'#718096'};

  c.innerHTML = `<div style="display:flex;flex-wrap:wrap;gap:10px;">
    ${sorted.map(({r,idx}) => {
      const pokemon  = r[0]||'';
      const tier     = r[1]||'5★';
      const done     = isTrue(r[9]);
      const notes    = r[8]||'';
      const tierColor = tierColors[tier] || '#718096';

      const reasonIcons = [
        isTrue(r[2]) ? {icon:'✨', label:'Shiny'}    : null,
        isTrue(r[3]) ? {icon:'💎', label:'IVs'}       : null,
        isTrue(r[4]) ? {icon:'🍬', label:'XL'}        : null,
        isTrue(r[5]) ? {icon:'📖', label:'Dex'}       : null,
        isTrue(r[6]) ? {icon:'🎭', label:'Costume'}   : null,
      ].filter(Boolean);

      const cardOpacity = done ? 'opacity:0.4;filter:grayscale(0.6);' : '';
      const doneRibbon  = done
        ? `<div style="position:absolute;top:0;left:0;right:0;background:#48BB78;color:white;font-size:9px;font-weight:700;text-align:center;padding:2px;border-radius:8px 8px 0 0;letter-spacing:0.5px;">✓ DONE</div>`
        : '';
      const spriteSlug = pokemon.toLowerCase().replace(/^(shadow|mega|primal) /,'').replace(/\s+/g,'-');

      return `
      <div style="position:relative;display:flex;flex-direction:column;align-items:center;
                  width:90px;background:white;border-radius:10px;padding:${done?'18px 6px 6px':'10px 6px 6px'};
                  box-shadow:0 2px 8px rgba(0,0,0,0.1);border:2px solid ${done?'#48BB78':tierColor};
                  ${cardOpacity}">
        ${doneRibbon}
        <img src="${sprite(spriteSlug)}" onerror="handleSpriteError(this,'${spriteSlug}')"
             style="width:56px;height:56px;image-rendering:pixelated;">
        <div style="font-size:10px;font-weight:700;text-align:center;color:#2d3748;margin-top:4px;
                    line-height:1.2;max-width:82px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;"
             title="${pokemon}">${pokemon}</div>
        <span style="background:${tierColor};color:white;font-size:9px;font-weight:700;
                     padding:1px 6px;border-radius:8px;margin-top:3px;">${tier}</span>
        <div style="display:flex;gap:3px;flex-wrap:wrap;justify-content:center;margin-top:4px;">
          ${reasonIcons.map(ri=>`<span title="${ri.label}" style="font-size:12px;">${ri.icon}</span>`).join('')}
        </div>
        ${notes ? `<div style="font-size:9px;color:#999;text-align:center;margin-top:3px;line-height:1.2;">${notes}</div>` : ''}
        <div style="display:flex;gap:4px;margin-top:6px;">
          ${!done
            ? `<button class="btn-icon" style="font-size:11px;" onclick="confirmRaidDone(${idx})" title="Mark done">✅</button>`
            : `<button class="btn-icon" style="font-size:11px;" onclick="undoRaidDone(${idx})" title="Undo">↩️</button>`}
          <button class="btn-icon" style="font-size:11px;" onclick="editRaidBoss(${idx})" title="Edit">✏️</button>
          <button class="btn-icon" style="font-size:11px;" onclick="deleteRaidBoss(${idx})" title="Delete">🗑️</button>
        </div>
      </div>`;
    }).join('')}
  </div>`;
  updateRaidWeekLabel();
}

function getLastMonday() {
  const d = new Date(); d.setHours(0,0,0,0);
  const day = d.getDay();
  const diff = (day === 0) ? 6 : day - 1;
  d.setDate(d.getDate() - diff);
  return d;
}

function updateRaidWeekLabel() {
  const el = document.getElementById('raidWeekLabel');
  if (!el) return;
  const monday = getLastMonday();
  const opts = {month:'short', day:'numeric'};
  const end = new Date(monday); end.setDate(end.getDate() + 6);
  el.textContent = `Week of ${monday.toLocaleDateString('en-US',opts)} – ${end.toLocaleDateString('en-US',opts)}`;
}

function showAddRaidModal() {
  document.getElementById('raidModalTitle').textContent = 'Add Raid Boss';
  document.getElementById('raidForm').reset();
  document.getElementById('raidEditIndex').value = '';
  document.getElementById('raidSpritePreviewDiv').style.display = 'none';
  document.getElementById('addRaidModal').style.display = 'block';
}

function editRaidBoss(idx) {
  const r = raidBossData[idx];
  document.getElementById('raidModalTitle').textContent = 'Edit Raid Boss';
  document.getElementById('raidEditIndex').value  = idx;
  document.getElementById('raidPokemon').value    = r[0]||'';
  document.getElementById('raidTier').value       = r[1]||'5★';
  document.getElementById('raidShiny').checked    = isTrue(r[2]);
  document.getElementById('raidIVs').checked      = isTrue(r[3]);
  document.getElementById('raidXL').checked       = isTrue(r[4]);
  document.getElementById('raidDex').checked      = isTrue(r[5]);
  document.getElementById('raidCostume').checked  = isTrue(r[6]);
  document.getElementById('raidPriority').value   = r[7]||'Medium';
  document.getElementById('raidNotes').value      = r[8]||'';
  raidSpritePreview();
  document.getElementById('addRaidModal').style.display = 'block';
}

let raidSpriteTimer = null;
function raidSpritePreview() {
  if (raidSpriteTimer) clearTimeout(raidSpriteTimer);
  const name = document.getElementById('raidPokemon').value.trim();
  const div  = document.getElementById('raidSpritePreviewDiv');
  const info = document.getElementById('raidSpriteInfo');
  if (!name) { div.style.display = 'none'; return; }
  info.textContent = '🔍 Looking up…'; info.style.color = '#667eea';
  div.style.display = 'flex';
  raidSpriteTimer = setTimeout(async () => {
    const clean = name.toLowerCase().replace(/^(shadow|mega|primal) /,'').replace(/\s+/g,'-');
    const data  = await getPokemonData(clean);
    if (data?.sprite) { document.getElementById('raidSpriteImg').src = data.sprite; info.textContent = '✓'; info.style.color = '#48BB78'; }
    else { info.textContent = '⚠️ Not found'; info.style.color = '#DD6B20'; }
  }, 500);
}

async function saveRaidBoss(e) {
  e.preventDefault();
  const btn = document.querySelector('#raidForm button[type="submit"]');
  setSaving(btn, true);
  const idx = document.getElementById('raidEditIndex').value;
  const row = [
    document.getElementById('raidPokemon').value.trim(),
    document.getElementById('raidTier').value,
    document.getElementById('raidShiny').checked   ? 'TRUE':'FALSE',
    document.getElementById('raidIVs').checked     ? 'TRUE':'FALSE',
    document.getElementById('raidXL').checked      ? 'TRUE':'FALSE',
    document.getElementById('raidDex').checked     ? 'TRUE':'FALSE',
    document.getElementById('raidCostume').checked ? 'TRUE':'FALSE',
    document.getElementById('raidPriority').value,
    document.getElementById('raidNotes').value.trim(),
    'FALSE', '',
  ];
  if (idx !== '') raidBossData[idx] = row; else raidBossData.push(row);
  const ok = await saveSheetData('RaidBosses', [RAID_HEADERS, ...raidBossData]);
  setSaving(btn, false);
  if (ok) { closeModal('addRaidModal'); renderRaidBosses(); }
}

async function confirmRaidDone(idx) {
  if (!confirm(`Mark ${raidBossData[idx][0]} as done this week?`)) return;
  raidBossData[idx][9]  = 'TRUE';
  raidBossData[idx][10] = new Date().toISOString().split('T')[0];
  setBgSaving(true);
  await saveSheetData('RaidBosses', [RAID_HEADERS, ...raidBossData]);
  setBgSaving(false);
  renderRaidBosses();
}

async function undoRaidDone(idx) {
  raidBossData[idx][9]  = 'FALSE';
  raidBossData[idx][10] = '';
  setBgSaving(true);
  await saveSheetData('RaidBosses', [RAID_HEADERS, ...raidBossData]);
  setBgSaving(false);
  renderRaidBosses();
}

async function deleteRaidBoss(idx) {
  if (!confirm(`Remove ${raidBossData[idx][0]} from tracker?`)) return;
  raidBossData.splice(idx, 1);
  setBgSaving(true);
  await saveSheetData('RaidBosses', [RAID_HEADERS, ...raidBossData]);
  setBgSaving(false);
  renderRaidBosses();
}

async function resetRaidBosses() {
  if (!confirm('Reset all raid bosses as not done this week?')) return;
  raidBossData.forEach(r => { r[9] = 'FALSE'; r[10] = ''; });
  setBgSaving(true);
  await saveSheetData('RaidBosses', [RAID_HEADERS, ...raidBossData]);
  setBgSaving(false);
  renderRaidBosses();
}

// Trades
const WANTS_HEADERS = ['Pokemon','Reason','Priority','Notes'];
const MIRROR_HEADERS = ['Pokemon','Types','Shiny','Legacy','Source','Notes','Priority'];
const FRIENDS_HEADERS = ['Friend','They Want','You Want','Notes','Status','Ready','TheyShiny','TheyDMAX','TheyGMAX','YouShiny','YouDMAX','YouGMAX','TrainerImageURL','Completed','When','Where'];

// Lucky Trade Management - Three Subsections

function renderLuckyWants() {
  const c = document.getElementById('luckyWantsContent');
  if (!luckyWantsData.length) {
    c.innerHTML='<div class="empty-state">📝 No Pokemon on your want list yet</div>';
    return;
  }

  const prioOrder = {'High':1,'Medium':2,'Low':3};
  const sorted = [...luckyWantsData]
    .map((r,origIdx)=>({r,origIdx}))
    .sort((a,b)=>(prioOrder[a.r[2]]||2)-(prioOrder[b.r[2]]||2));

  const prioColors = {
    High:   { bg:'rgba(229,62,62,0.07)',   border:'#E53E3E' },
    Medium: { bg:'rgba(214,158,46,0.07)',   border:'#D69E2E' },
    Low:    { bg:'rgba(49,130,206,0.07)',   border:'#3182CE' },
  };

  c.innerHTML = `<div style="display:flex;flex-wrap:wrap;gap:8px;">
    ${sorted.map(({r,origIdx}) => {
      const pokemon  = r[0] || '';
      const reason   = r[1] || '';
      const prio     = r[2] || 'Medium';
      const notes    = r[3] || '';
      const shiny    = isTrue(r[4]);
      const legacy   = isTrue(r[5]);
      const { bg: cardBg, border: cardBorder } = prioColors[prio] || prioColors.Medium;
      const badges = [shiny?'✨':'', legacy?'£':''].filter(Boolean).join(' ');

      return `
      <div style="background:${cardBg};border-radius:10px;padding:6px 6px 5px;width:90px;
                  box-shadow:0 2px 8px rgba(0,0,0,0.08);border:1.5px solid ${cardBorder};
                  display:flex;flex-direction:column;align-items:center;text-align:center;min-height:100px;">
        <img src="${sprite(pokemon)}" onerror="handleSpriteError(this,'${pokemon}')"
             style="width:44px;height:44px;image-rendering:pixelated;">
        <div style="font-size:10px;font-weight:700;color:#2d3748;margin-top:3px;line-height:1.2;word-break:break-word;">${pokemon}</div>
        ${badges ? `<div style="font-size:11px;margin-top:1px;">${badges}</div>` : ''}
        ${reason ? `<div style="font-size:9px;color:#718096;margin-top:2px;line-height:1.2;">${reason}</div>` : ''}
        ${notes  ? `<div style="font-size:9px;color:#999;margin-top:1px;line-height:1.2;font-style:italic;">${notes}</div>` : ''}
        <div style="display:flex;gap:4px;margin-top:auto;padding-top:5px;">
          <button class="btn-icon" style="font-size:11px;" onclick="editLuckyWant(${origIdx})" title="Edit">✏️</button>
          <button class="btn-icon" style="font-size:11px;" onclick="deleteLuckyWant(${origIdx})" title="Delete">🗑️</button>
        </div>
      </div>`;
    }).join('')}
  </div>`;
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
  
  c.innerHTML = `<div style="display:flex;flex-wrap:wrap;gap:8px;">
    ${allMirrors.map(m => {
      const prioPalette = {
        High:   { bg:'rgba(229,62,62,0.07)',  border:'#E53E3E' },
        Medium: { bg:'rgba(214,158,46,0.07)',  border:'#D69E2E' },
        Low:    { bg:'rgba(49,130,206,0.07)',  border:'#3182CE' },
      };
      const { bg: cardBg, border: cardBorder } = prioPalette[m.priority] || prioPalette.Medium;
      const badgeIcons = [m.shiny?'✨':'', m.legacy?'£':'', m.dmax?'💎':'', m.gmax?'🌟':''].filter(Boolean).join(' ');
      const sourceLabel = m.isAuto
        ? `<div style="font-size:9px;color:#999;margin-top:2px;">⚡ Auto</div>`
        : '';

      return `
      <div style="background:${cardBg};border-radius:10px;padding:6px 6px 5px;width:90px;
                  box-shadow:0 2px 8px rgba(0,0,0,0.08);border:1.5px solid ${cardBorder};
                  display:flex;flex-direction:column;align-items:center;text-align:center;min-height:100px;">
        <img src="${sprite(m.pokemon, null, null, m.shiny)}" onerror="handleSpriteError(this,'${m.pokemon}')"
             style="width:44px;height:44px;image-rendering:pixelated;">
        <div style="font-size:10px;font-weight:700;color:#2d3748;margin-top:3px;line-height:1.2;word-break:break-word;">${m.displayName}</div>
        ${badgeIcons ? `<div style="font-size:11px;margin-top:1px;">${badgeIcons}</div>` : ''}
        ${sourceLabel}
        ${m.notes ? `<div style="font-size:9px;color:#999;margin-top:1px;line-height:1.2;font-style:italic;">${m.notes}</div>` : ''}
        <div style="display:flex;gap:4px;margin-top:auto;padding-top:5px;">
          ${!m.isAuto ? `
            <button class="btn-icon" style="font-size:11px;" onclick="editMirrorTarget(${m.idx})" title="Edit">✏️</button>
            <button class="btn-icon" style="font-size:11px;" onclick="deleteMirrorTarget(${m.idx})" title="Delete">🗑️</button>
          ` : ''}
        </div>
      </div>`;
    }).join('')}
  </div>`;
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
    const when  = r[14] || '';
    const where = r[15] || '';

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
          <img src="${sprite(name, null, null, shiny)}" onerror="handleSpriteError(this,'${name}')"
               style="width:38px;height:38px;flex-shrink:0;">
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
        <div style="min-width:0;flex-shrink:0;max-width:140px;">
          <div style="display:flex;align-items:center;gap:5px;flex-wrap:nowrap;overflow:hidden;">
            <span style="font-size:13px;font-weight:700;color:${nameColor};white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${r[0]}</span>
            <span style="font-size:10px;padding:1px 5px;border-radius:4px;font-weight:600;white-space:nowrap;flex-shrink:0;${badgeStyle}">${status}${isReady?' ✅':''}</span>
          </div>
          ${when  ? `<div style="font-size:10px;color:#718096;margin-top:2px;">📅 ${when}</div>`  : ''}
          ${where ? `<div style="font-size:10px;color:#718096;margin-top:1px;">📍 ${where}</div>` : ''}
          ${r[3]  ? `<div style="font-size:10px;color:#718096;margin-top:2px;line-height:1.2;">📝 ${r[3]}</div>` : ''}
        </div>
        <div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap;">
          ${pokeSlot('They want', theyWant, theyShiny, theyDMAX, theyGMAX)}
          <div style="font-size:18px;color:#cbd5e0;">⇄</div>
          ${pokeSlot('You want',  youWant,  youShiny,  youDMAX,  youGMAX)}
        </div>
      </div>
      <div class="list-item-actions lf-actions">
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
      <img src="${sprite(r[0], null, null, true)}" class="shiny-sprite" onerror="handleSpriteError(this, '${r[0]}')" draggable="false">
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
    document.getElementById('puXLCandy').value || '',
    '',
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
  setSaving(btn, false);
  if (ok) { closeModal('addPowerUpModal'); renderPowerUp(); renderTrades(); }
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
  document.getElementById('lfWhen').value  = r[14] || '';
  document.getElementById('lfWhere').value = r[15] || '';
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
    document.getElementById('lfWhen').value.trim() || '',
    document.getElementById('lfWhere').value.trim() || '',
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
    '',          // When — clear
    '',          // Where — clear
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

// ── PVP Roster ────────────────────────────────────────────────────────────────
const PVP_HEADERS   = ['Pokemon','PVPpokeRank','IVRank','Ready','Notes','Types'];
const PVPCFG_HEADERS = ['Key','Value'];

function pvpCfgGet(key) {
  const row = pvpConfigData.find(r => r[0] === key);
  return row ? (row[1] || '') : '';
}
function pvpCfgSet(key, value) {
  const row = pvpConfigData.find(r => r[0] === key);
  if (row) row[1] = value;
  else pvpConfigData.push([key, value]);
}
async function savePVPConfig() {
  await saveSheetData('PVPConfig', [PVPCFG_HEADERS, ...pvpConfigData]);
}

// Converts a PVP pokemon name (may include "Shadow", "Galarian" etc) to a PokeAPI-compatible slug
function pvpSpriteSlug(name) {
  const lower = name.toLowerCase().trim();
  if (lower.startsWith('shadow '))   return lower.replace('shadow ', '');           // Shadow Marowak → marowak
  if (lower.startsWith('galarian ')) return lower.replace('galarian ', '') + '-galar'; // Galarian Stunfisk → stunfisk-galar
  if (lower.startsWith('alolan '))   return lower.replace('alolan ', '')  + '-alola';
  if (lower.startsWith('hisuian '))  return lower.replace('hisuian ', '') + '-hisui';
  return lower.replace(/\s+/g, '-');
}

function renderPVP() {
  // Season bar
  const seasonName = pvpCfgGet('Season_Name') || '—';
  const seasonEnd  = pvpCfgGet('Season_End');
  document.getElementById('pvpSeasonName').textContent = seasonName;
  const cdEl = document.getElementById('pvpSeasonCountdown');
  if (seasonEnd) {
    const days = Math.ceil((new Date(seasonEnd) - new Date()) / 86400000);
    cdEl.textContent = days > 0 ? `${days} days remaining` : 'Season ended';
    cdEl.style.color = days <= 7 ? '#FC8181' : '#90cdf4';
  } else {
    cdEl.textContent = 'No end date set';
  }

  const rosterNames = new Set(pvpRosterData.map(r => (r[0]||'').toLowerCase().trim()));

  // ── Meta snapshot ──────────────────────────────────────────────────────────
  const metaEl = document.getElementById('pvpMetaContent');
  if (metaEl) {
    if (!pvpMetaData.length) {
      metaEl.innerHTML = '<div style="font-size:12px;color:#999;padding:6px 0;">No meta data yet — add entries to PVPMeta sheet</div>';
      const lbl = document.getElementById('pvpMetaCountLabel');
      if (lbl) lbl.textContent = 'Top GL';
    } else {
      const metaSorted = [...pvpMetaData].sort((a,b) => (parseInt(a[0])||99) - (parseInt(b[0])||99));
      const haveCount  = metaSorted.filter(r => rosterNames.has((r[1]||'').toLowerCase().trim())).length;
      const lbl = document.getElementById('pvpMetaCountLabel');
      if (lbl) lbl.textContent = `Top ${metaSorted.length} GL`;
      metaEl.innerHTML = `
        <div style="font-size:11px;color:#718096;margin-bottom:8px;">
          You have <strong style="color:#48BB78;">${haveCount}</strong> of the top ${metaSorted.length} &middot;
          <span style="color:#999;">tap a missing one to add to roster</span>
        </div>
        <div style="display:flex;flex-wrap:wrap;gap:6px;">
          ${metaSorted.map(r => {
            const rank    = r[0] || '?';
            const pokemon = r[1] || '';
            const have    = rosterNames.has(pokemon.toLowerCase().trim());
            const slug    = pvpSpriteSlug(pokemon);
            if (have) return `
              <div style="display:flex;flex-direction:column;align-items:center;width:58px;">
                <div style="font-size:9px;font-weight:700;color:#553c9a;margin-bottom:2px;">#${rank}</div>
                <img src="${sprite(slug)}" onerror="handleSpriteError(this,'${slug}')"
                     style="width:40px;height:40px;background:rgba(85,60,154,0.12);border-radius:6px;padding:2px;border:1px solid #b794f4;">
                <div style="font-size:9px;text-align:center;color:#2d3748;margin-top:2px;line-height:1.2;
                            max-width:58px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;"
                     title="${pokemon}">${pokemon}</div>
                <div style="font-size:9px;color:#48BB78;">&#10003; have</div>
              </div>`;
            return `
              <div id="metacard-${rank}" style="display:flex;flex-direction:column;align-items:center;
                   width:58px;cursor:pointer;position:relative;" onclick="pvpMetaTap('${pokemon.replace(/'/g,"\\'")}',${rank},this)">
                <div style="font-size:9px;font-weight:700;color:#aaa;margin-bottom:2px;">#${rank}</div>
                <img src="${sprite(slug)}" onerror="handleSpriteError(this,'${slug}')"
                     style="width:40px;height:40px;background:#f5f5f5;border-radius:6px;padding:2px;
                            border:1px solid #e2e8f0;opacity:0.65;filter:grayscale(0.25);">
                <div style="font-size:9px;text-align:center;color:#666;margin-top:2px;line-height:1.2;
                            max-width:58px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;"
                     title="${pokemon}">${pokemon}</div>
                <div style="font-size:9px;color:#ccc;">&#10007;</div>
              </div>`;
          }).join('')}
        </div>`;
    }
  }

  // ── Roster cards ───────────────────────────────────────────────────────────
  const c = document.getElementById('pvpRosterContent');
  if (!pvpRosterData.length) {
    c.innerHTML = '<div class="empty-state">&#128221; No PVP Pok&eacute;mon yet &mdash; add your GL roster!</div>';
    return;
  }

  const metaRankMap = {};
  pvpMetaData.forEach(r => { if (r[1]) metaRankMap[r[1].toLowerCase().trim()] = parseInt(r[0]) || null; });

  // Read filters
  const filterReady = (document.getElementById('pvpFilterReady')||{}).value || 'all';
  const filterMeta  = (document.getElementById('pvpFilterMeta')||{}).value  || 'all';

  const sorted = pvpRosterData
    .map((r, idx) => ({r, idx}))
    .filter(({r}) => {
      const ready    = isTrue(r[3]);
      const inMeta   = !!metaRankMap[(r[0]||'').toLowerCase().trim()];
      if (filterReady === 'ready'    && !ready)   return false;
      if (filterReady === 'notready' && ready)     return false;
      if (filterMeta  === 'meta'     && !inMeta)   return false;
      if (filterMeta  === 'nonmeta'  && inMeta)    return false;
      return true;
    })
    .sort((a, b) => (parseInt(a.r[1])||9999) - (parseInt(b.r[1])||9999));

  if (!sorted.length) {
    c.innerHTML = '<div class="empty-state">No Pok&eacute;mon match the current filters.</div>';
    return;
  }

  c.innerHTML = sorted.map(({r, idx}) => {
    const pokemon  = r[0] || '';
    const ivRank   = r[2] || '';
    const ready    = isTrue(r[3]);
    const notes    = r[4] || '';
    const types    = r[5] || '';
    const metaRank = metaRankMap[pokemon.toLowerCase().trim()];

    // Async-fetch types if missing and patch later
    if (!types && pokemon) {
      const clean = pvpSpriteSlug(pokemon);
      getPokemonData(clean).then(data => {
        if (data && data.types && !pvpRosterData[idx][5]) {
          pvpRosterData[idx][5] = data.types;
          renderPVP();
        }
      });
    }

    const typeBg      = types ? getTypeBackground(types) : '';
    const readyBorder = ready ? '#48BB78' : '#FC8181';
    const cardStyle   = `border-left-color:${readyBorder};${typeBg ? `background:${typeBg};` : ''}align-items:center;`;

    // Type pills
    const typePills = types ? types.split(',').map(t => {
      const key = t.trim().toLowerCase();
      return `<span class="type-text type-${key}" style="font-size:9px;padding:1px 5px;">${t.trim()}</span>`;
    }).join('') : '';

    const readyLabel = ready
      ? '<span style="background:#C6F6D5;color:#276749;font-size:10px;padding:1px 5px;border-radius:4px;font-weight:600;">✅</span>'
      : '<span style="background:#FED7D7;color:#C53030;font-size:10px;padding:1px 5px;border-radius:4px;font-weight:600;">🔧</span>';
    const ivRankBadge = ivRank
      ? `<span style="background:#2b6cb0;color:white;font-size:10px;padding:1px 6px;border-radius:10px;font-weight:600;">IV Rank ${ivRank}</span>`
      : '';
    const metaBadge = metaRank
      ? `<span style="background:#d53f8c;color:white;font-size:10px;padding:1px 6px;border-radius:10px;font-weight:700;">Meta #${metaRank}</span>`
      : '';

    const spriteSlug = pvpSpriteSlug(pokemon);

    return `
    <div id="pvp-card-${idx}" class="list-item" style="${cardStyle}padding-top:5px;padding-bottom:5px;">
      <img class="list-item-sprite" src="${sprite(spriteSlug)}" onerror="handleSpriteError(this,'${spriteSlug}')"
           style="width:36px;height:36px;">
      <div class="list-item-content" style="gap:2px;">
        <div class="pvp-name-row" style="display:flex;align-items:center;gap:5px;flex-wrap:nowrap;overflow:hidden;">
          <span style="font-weight:700;font-size:13px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;flex-shrink:1;">${pokemon}</span>
          <span class="pvp-badges-group" style="display:flex;align-items:center;gap:3px;flex-shrink:0;flex-wrap:nowrap;">
            ${readyLabel}${metaBadge}${ivRankBadge}
          </span>
        </div>
        <div style="display:flex;align-items:center;gap:4px;flex-wrap:wrap;">
          ${typePills}
          ${notes ? `<span style="font-size:10px;color:#718096;">· ${notes}</span>` : ''}
        </div>
      </div>
      <div class="list-item-actions">
        <button class="btn-icon" onclick="togglePVPReady(${idx})" title="${ready?'Mark not ready':'Mark ready'}">${ready?'🔄':'✅'}</button>
        <button class="btn-icon" onclick="editPVP(${idx})" title="Edit">✏️</button>
        <button class="btn-icon" onclick="deletePVP(${idx})" title="Delete">🗑️</button>
      </div>
    </div>`;
  }).join('');
}

function pvpMetaTap(pokemon, rank, el) {
  if (el.querySelector('.pvp-meta-overlay')) return;
  const overlay = document.createElement('div');
  overlay.className = 'pvp-meta-overlay';
  overlay.style.cssText = 'position:absolute;inset:0;background:rgba(85,60,154,0.92);border-radius:6px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;z-index:10;';
  overlay.innerHTML = `
    <div style="font-size:9px;color:white;font-weight:700;text-align:center;line-height:1.2;padding:0 2px;">Add?</div>
    <button onclick="pvpMetaConfirm('${pokemon}',${rank});event.stopPropagation();"
      style="background:#48BB78;color:white;border:none;border-radius:4px;padding:2px 6px;font-size:10px;cursor:pointer;font-weight:700;">&#10003;</button>
    <button onclick="this.closest('.pvp-meta-overlay').remove();event.stopPropagation();"
      style="background:rgba(255,255,255,0.2);color:white;border:none;border-radius:4px;padding:2px 6px;font-size:10px;cursor:pointer;">&#10007;</button>`;
  el.appendChild(overlay);
}

function pvpMetaConfirm(pokemon, rank) {
  showAddPVPModal();
  document.getElementById('pvpPokemon').value     = pokemon;
  document.getElementById('pvpPVPpokeRank').value = rank;
  pvpSpritePreview();
  pvpCheckMeta();
}


// Season modal
function showPVPSeasonModal() {
  document.getElementById('pvpSeasonNameInput').value = pvpCfgGet('Season_Name');
  document.getElementById('pvpSeasonEndInput').value  = pvpCfgGet('Season_End');
  document.getElementById('pvpSeasonModal').style.display = 'block';
}
async function savePVPSeason(e) {
  e.preventDefault();
  const btn = document.querySelector('#pvpSeasonForm button[type="submit"]');
  setSaving(btn, true);
  pvpCfgSet('Season_Name', document.getElementById('pvpSeasonNameInput').value.trim());
  pvpCfgSet('Season_End',  document.getElementById('pvpSeasonEndInput').value);
  await savePVPConfig();
  setSaving(btn, false);
  closeModal('pvpSeasonModal');
  renderPVP();
}

// Tap-to-add overlay on meta cards
function pvpMetaCardTap(rank, pokemon, el) {
  // Dismiss any existing overlays first
  document.querySelectorAll('.meta-card-overlay').forEach(o => o.remove());

  const overlay = document.createElement('div');
  overlay.className = 'meta-card-overlay';
  overlay.style.cssText = `
    position:absolute;inset:0;background:rgba(85,60,154,0.92);border-radius:6px;
    display:flex;flex-direction:column;align-items:center;justify-content:center;
    gap:4px;z-index:10;padding:3px;`;
  overlay.innerHTML = `
    <div style="font-size:9px;color:white;font-weight:700;text-align:center;line-height:1.2;">Add to roster?</div>
    <button onclick="pvpMetaCardConfirm(${rank},'${pokemon.replace(/'/g,"\\'")}');event.stopPropagation();"
            style="background:#48BB78;color:white;border:none;border-radius:4px;font-size:10px;padding:2px 6px;cursor:pointer;font-weight:700;">✓ Add</button>
    <button onclick="this.closest('.meta-card-overlay').remove();event.stopPropagation();"
            style="background:rgba(255,255,255,0.2);color:white;border:none;border-radius:4px;font-size:10px;padding:2px 6px;cursor:pointer;">✕</button>`;
  el.style.position = 'relative';
  el.appendChild(overlay);
}

function pvpMetaCardConfirm(rank, pokemon) {
  document.querySelectorAll('.meta-card-overlay').forEach(o => o.remove());
  showAddPVPModal(pokemon, rank);
}

// Pokemon modal
let pvpSpriteTimer = null;
function pvpSpritePreview() {
  if (pvpSpriteTimer) clearTimeout(pvpSpriteTimer);
  const name = document.getElementById('pvpPokemon').value.trim();
  const div  = document.getElementById('pvpSpritePreviewDiv');
  const info = document.getElementById('pvpSpriteInfo');
  if (!name) { div.style.display = 'none'; return; }

  // Immediately check meta list for rank auto-fill
  const metaMatch = pvpMetaData.find(r => (r[1]||'').toLowerCase().trim() === name.toLowerCase().trim());
  if (metaMatch) {
    const rankField = document.getElementById('pvpPVPpokeRank');
    if (!rankField.value) {
      rankField.value = metaMatch[0];
      rankField.style.borderColor = '#48BB78';
      setTimeout(() => rankField.style.borderColor = '', 1500);
    }
  }

  info.textContent = '🔍 Looking up…';
  info.style.color = '#667eea';
  div.style.display = 'flex';
  pvpSpriteTimer = setTimeout(async () => {
    const clean = name.toLowerCase().replace(/^(alolan|galarian|hisuian|shadow|mega|primal) /,'').replace(/\s+/g,'-');
    const data = await getPokemonData(clean);
    if (data && data.sprite) {
      document.getElementById('pvpSpriteImg').src = data.sprite;
      info.textContent = '✓ Sprite loaded';
      info.style.color = '#48BB78';
    } else {
      info.textContent = '⚠️ Not found';
      info.style.color = '#DD6B20';
    }
  }, 500);
}

function pvpCheckMeta() {
  const name      = (document.getElementById('pvpPokemon').value || '').toLowerCase().trim();
  const rankField = document.getElementById('pvpPVPpokeRank');
  if (!name || rankField.value) return;
  const metaRow = pvpMetaData.find(r => (r[1]||'').toLowerCase().trim() === name);
  if (metaRow) {
    rankField.value = metaRow[0];
    rankField.style.background = '#F0FFF4';
    setTimeout(() => rankField.style.background = '', 1500);
  }
}

function showAddPVPModal(prefillPokemon = '', prefillRank = '') {
  document.getElementById('pvpModalTitle').textContent = 'Add PVP Pokémon';
  document.getElementById('pvpForm').reset();
  document.getElementById('pvpEditIndex').value = '';
  document.getElementById('pvpSpritePreviewDiv').style.display = 'none';
  if (prefillPokemon) {
    document.getElementById('pvpPokemon').value     = prefillPokemon;
    document.getElementById('pvpPVPpokeRank').value = prefillRank;
    pvpSpritePreview();
  }
  document.getElementById('addPVPModal').style.display = 'block';
}

function editPVP(idx) {
  const r = pvpRosterData[idx];
  document.getElementById('pvpModalTitle').textContent = 'Edit PVP Pokémon';
  document.getElementById('pvpEditIndex').value  = idx;
  document.getElementById('pvpPokemon').value    = r[0] || '';
  document.getElementById('pvpPVPpokeRank').value= r[1] || '';
  document.getElementById('pvpIVRank').value     = r[2] || '';
  document.getElementById('pvpReady').checked    = isTrue(r[3]);
  document.getElementById('pvpNotes').value      = r[4] || '';
  if (r[0]) pvpSpritePreview();
  document.getElementById('addPVPModal').style.display = 'block';
}

async function savePVP(e) {
  e.preventDefault();
  const btn = document.querySelector('#pvpForm button[type="submit"]');
  setSaving(btn, true);
  const idx = document.getElementById('pvpEditIndex').value;
  // Preserve existing types if already fetched
  const existingTypes = idx !== '' ? (pvpRosterData[idx][5] || '') : '';
  const row = [
    document.getElementById('pvpPokemon').value.trim(),
    document.getElementById('pvpPVPpokeRank').value || '',
    document.getElementById('pvpIVRank').value.trim(),
    document.getElementById('pvpReady').checked ? 'TRUE' : 'FALSE',
    document.getElementById('pvpNotes').value.trim(),
    existingTypes,
  ];
  if (idx !== '') { pvpRosterData[idx] = row; } else { pvpRosterData.push(row); }
  const ok = await saveSheetData('PVPRoster', [PVP_HEADERS, ...pvpRosterData]);
  setSaving(btn, false);
  if (ok) { closeModal('addPVPModal'); renderPVP(); }
}

async function togglePVPReady(idx) {
  pvpRosterData[idx][3] = isTrue(pvpRosterData[idx][3]) ? 'FALSE' : 'TRUE';
  setBgSaving(true);
  await saveSheetData('PVPRoster', [PVP_HEADERS, ...pvpRosterData]);
  setBgSaving(false);
  renderPVP();
}

async function deletePVP(idx) {
  if (!confirm(`Remove ${pvpRosterData[idx][0]} from PVP roster?`)) return;
  pvpRosterData.splice(idx, 1);
  setBgSaving(true);
  await saveSheetData('PVPRoster', [PVP_HEADERS, ...pvpRosterData]);
  setBgSaving(false);
  renderPVP();
}

// ── Monkey Sound ──────────────────────────────────────────────────────────────
function playMonkeySound() {
  const ctx = new (window.AudioContext || window.webkitAudioContext)();

  function screech(startTime, freq1, freq2, duration, vol) {
    // Main oscillator - the screech tone
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const filter = ctx.createBiquadFilter();

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);

    osc.type = 'sawtooth';
    filter.type = 'bandpass';
    filter.frequency.value = freq1 * 1.5;
    filter.Q.value = 3;

    osc.frequency.setValueAtTime(freq1, startTime);
    osc.frequency.exponentialRampToValueAtTime(freq2, startTime + duration * 0.4);
    osc.frequency.exponentialRampToValueAtTime(freq1 * 0.85, startTime + duration * 0.7);
    osc.frequency.exponentialRampToValueAtTime(freq2 * 1.1, startTime + duration);

    gain.gain.setValueAtTime(0, startTime);
    gain.gain.linearRampToValueAtTime(vol, startTime + 0.02);
    gain.gain.setValueAtTime(vol, startTime + duration - 0.04);
    gain.gain.linearRampToValueAtTime(0, startTime + duration);

    osc.start(startTime);
    osc.stop(startTime + duration);

    // Noise burst for texture
    const bufSize = ctx.sampleRate * duration;
    const buf = ctx.createBuffer(1, bufSize, ctx.sampleRate);
    const data = buf.getChannelData(0);
    for (let i = 0; i < bufSize; i++) data[i] = (Math.random() * 2 - 1) * 0.3;

    const noise = ctx.createBufferSource();
    const noiseFilter = ctx.createBiquadFilter();
    const noiseGain = ctx.createGain();
    noise.buffer = buf;
    noise.connect(noiseFilter);
    noiseFilter.connect(noiseGain);
    noiseGain.connect(ctx.destination);
    noiseFilter.type = 'bandpass';
    noiseFilter.frequency.value = freq1;
    noiseFilter.Q.value = 8;
    noiseGain.gain.setValueAtTime(0, startTime);
    noiseGain.gain.linearRampToValueAtTime(vol * 0.4, startTime + 0.03);
    noiseGain.gain.linearRampToValueAtTime(0, startTime + duration);
    noise.start(startTime);
    noise.stop(startTime + duration);
  }

  const t = ctx.currentTime;
  // Three overlapping screeches with different pitches — classic monkey chatter
  screech(t,        520, 980, 0.18, 0.35);
  screech(t + 0.15, 680, 420, 0.14, 0.30);
  screech(t + 0.28, 590, 1050, 0.20, 0.38);
  screech(t + 0.44, 470, 860, 0.16, 0.28);
}

// ── Trainer level popover ─────────────────────────────────────────────────────
// ── Shiny Odds Reference ──────────────────────────────────────────────────────
function renderShinyOdds() {
  const el = document.getElementById('shinyOddsContent');
  if (!el) return;

  const odds = [
    { category: 'Standard Wild',              rate: '1 in 500',    pct: '0.2%',   color: '#718096', note: 'Default for most Pokémon in the wild' },
    { category: 'Boosted Wild (Event)',        rate: '1 in 125',    pct: '0.8%',   color: '#D69E2E', note: 'During spotlight hours, events, or CD hours for that species' },
    { category: 'Community Day',              rate: '1 in 25',     pct: '4.0%',   color: '#48BB78', note: 'During the active CD window for the featured Pokémon' },
    { category: 'Raid Boss',                  rate: '1 in 20',     pct: '5.0%',   color: '#3182CE', note: 'All raid encounters — same rate regardless of tier' },
    { category: 'Research Breakthrough',      rate: '1 in 20',     pct: '5.0%',   color: '#3182CE', note: 'Monthly stamp reward Pokémon' },
    { category: 'Field Research Reward',      rate: '1 in 500',    pct: '0.2%',   color: '#718096', note: 'Unless boosted during event (then 1 in 125)' },
    { category: 'Permaboosted Species',       rate: '1 in 64',     pct: '~1.6%',  color: '#805AD5', note: 'e.g. Absol, Scyther, Sneasel — permanently higher than standard' },
    { category: 'Egg Hatches (boosted)',      rate: '1 in 64',     pct: '~1.6%',  color: '#805AD5', note: 'Pokémon that can only be shiny from eggs' },
    { category: 'Shadow (Rocket Leaders)',    rate: '1 in 64',     pct: '~1.6%',  color: '#805AD5', note: 'Giovanni & leader shadows have boosted rate' },
    { category: 'Raid Day / Special Event',   rate: '1 in 10',     pct: '10.0%',  color: '#E53E3E', note: 'Dedicated Raid Days or special boosted events' },
    { category: 'GO Tour / GO Fest',          rate: '1 in 10–25',  pct: '4–10%',  color: '#E53E3E', note: 'Varies by event — check event page for exact rate' },
  ];

  el.innerHTML = `
    <div style="font-size:11px;color:#999;margin-bottom:10px;">
      Base rates as of 2025. Niantic adjusts silently — treat as reliable approximations.
    </div>
    <div style="display:grid;grid-template-columns:1fr auto auto;gap:0;">
      <div style="display:contents;font-size:10px;color:#999;font-weight:700;text-transform:uppercase;">
        <div style="padding:4px 8px;">Encounter Type</div>
        <div style="padding:4px 8px;text-align:right;">Odds</div>
        <div style="padding:4px 8px;text-align:right;">~%</div>
      </div>
      ${odds.map((o,i) => `
      <div style="display:contents;">
        <div style="padding:7px 8px;border-top:1px solid #f0f0f0;background:${i%2?'white':'#fafafa'};">
          <div style="font-size:12px;font-weight:600;color:#2d3748;">${o.category}</div>
          <div style="font-size:10px;color:#999;margin-top:1px;">${o.note}</div>
        </div>
        <div style="padding:7px 8px;border-top:1px solid #f0f0f0;text-align:right;background:${i%2?'white':'#fafafa'};">
          <span style="background:${o.color};color:white;font-size:11px;font-weight:700;padding:2px 8px;border-radius:10px;white-space:nowrap;">${o.rate}</span>
        </div>
        <div style="padding:7px 8px;border-top:1px solid #f0f0f0;text-align:right;font-size:12px;font-weight:700;color:${o.color};background:${i%2?'white':'#fafafa'};">${o.pct}</div>
      </div>`).join('')}
    </div>
    <div style="margin-top:12px;padding:8px 10px;background:#fffbeb;border:1px solid #f6e05e;border-radius:8px;font-size:11px;color:#744210;">
      💡 <strong>Rule of thumb:</strong> Wild = 1/500 · Boosted event = 1/125 · CD = 1/25 · Raids = 1/20 · Special events = 1/10
    </div>`;
}

function showLevelPopover(el) {
  // Dismiss if already open
  const existing = document.querySelector('.level-popover');
  if (existing) { existing.remove(); return; }

  const cur = parseInt(el.textContent) || 40;
  const pop = document.createElement('div');
  pop.className = 'level-popover';
  pop.innerHTML = `
    <span style="font-size:11px;color:rgba(255,255,255,0.6);font-family:'Nunito',sans-serif;">Level</span>
    <input type="number" id="levelPopInput" value="${cur}" min="1" max="50">
    <button onclick="saveLevelPopover()">✓ Save</button>`;

  // Position below the level span
  el.parentElement.style.position = 'relative';
  el.parentElement.appendChild(pop);
  const input = pop.querySelector('input');
  input.focus();
  input.select();
  input.addEventListener('keydown', e => {
    if (e.key === 'Enter') saveLevelPopover();
    if (e.key === 'Escape') pop.remove();
  });

  // Click outside to dismiss
  setTimeout(() => {
    document.addEventListener('click', function dismiss(e) {
      if (!pop.contains(e.target) && e.target !== el) {
        pop.remove();
        document.removeEventListener('click', dismiss);
      }
    });
  }, 50);
}

function saveLevelPopover() {
  const input = document.getElementById('levelPopInput');
  const val = parseInt(input.value);
  if (!val || val < 1 || val > 50) return;
  document.getElementById('trainerLevelDisplay').textContent = val;
  document.querySelector('.level-popover')?.remove();
  // Persist to localStorage so it survives refresh
  localStorage.setItem('trainerLevel', val);
}

// Init
window.onload = () => {
  const savedLevel = localStorage.getItem('trainerLevel');
  if (savedLevel) document.getElementById('trainerLevelDisplay').textContent = savedLevel;

  // One-time migration: clear old pokemon_data cache entries that lack shinySprite
  if (!localStorage.getItem('sprite_cache_v3')) {
    // Clear any cached entries for forms that had wrong Showdown fallback slugs
    const staleForms = ['necrozma-dusk','necrozma-dawn','kyurem','necrozma'];
    staleForms.forEach(k => localStorage.removeItem(`pokemon_data_${k}`));
    // Also clear all form variants to be safe
    Object.keys(localStorage)
      .filter(k => k.startsWith('pokemon_data_'))
      .forEach(k => {
        try {
          const d = JSON.parse(localStorage.getItem(k));
          if (!d.shinySprite) localStorage.removeItem(k);
        } catch(e) { localStorage.removeItem(k); }
      });
    localStorage.setItem('sprite_cache_v3', '1');
  }

  loadAllData();
};
window.onclick = e => { if (e.target.classList.contains('modal')) e.target.style.display='none'; };
