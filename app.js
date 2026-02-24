// GENERATED: 2026-02-18-2230-SPRITE-CACHE-FIRST
// CRITICAL FIX: sprite() now checks cache FIRST before defaulting to Pikachu

// Configuration
const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxeEnHA5MtsH2yIzsKOMB4Irz9R1Wqsj6SrcsZjjSEcF2McHJYQxpUhMbcFtXGf80ybIw/exec';
const SHEET_URL  = 'https://docs.google.com/spreadsheets/d/1E9tGFWTFWHNkN6OheYwQCCuXDdz3oWAmbWTStoufz_w/edit';

// Data arrays
let powerUpData=[], candyData=[], tradePlansData=[], shinyGapsData=[], eventsData=[];
let luckyWantsData=[], mirrorTargetsData=[], luckyFriendsData=[];
let pvpRosterData=[], pvpConfigData=[], pvpMetaData=[];
let pvpRosterULData=[], pvpMetaULData=[];
let medalsData = [];
let upcomingCDsData = [];
let linksData = [];

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

function updateCandyHelper() {
  const pokemon = (document.getElementById('puPokemon')?.value || '').trim();
  const curLv   = parseFloat(document.getElementById('puCurrentLevel')?.value) || 0;
  const tgtLv   = parseFloat(document.getElementById('puTargetLevel')?.value) || 0;
  const owned   = parseInt(document.getElementById('puSpeciesCandy')?.value) || 0;
  const helper  = document.getElementById('candyHelper');
  if (!helper) return;
  if (!pokemon || !curLv || !tgtLv || tgtLv <= curLv) { helper.textContent = ''; return; }
  const {regularCandy} = calculateCandyNeeded(curLv, tgtLv, pokemon);
  if (regularCandy === 0) { helper.textContent = ''; return; }
  const still = Math.max(0, regularCandy - owned);
  if (still === 0) {
    helper.textContent = `✅ You have enough candy! (need ${regularCandy}, have ${owned})`;
    helper.style.color = '#48BB78';
  } else {
    helper.textContent = `Need ${regularCandy} candy total · have ${owned} · still need ${still} via Rare Candy`;
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
// Direct sprite URL overrides for forms where /api/v2/pokemon/{name} returns 404
// These point straight to the raw GitHub sprite repo using numeric IDs
const DIRECT_SPRITE_OVERRIDES = {
  'frigibax': 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/996.png',
};

// PokeAPI slug overrides: our internal slug → PokeAPI endpoint name
const POKEAPI_SLUG_OVERRIDES = {
  'necrozma-dusk':       'necrozma-dusk',
  'necrozma-dawn':       'necrozma-dawn',
  'charizard-megax':     'charizard-mega-x',
  'charizard-megay':     'charizard-mega-y',
  'mewtwo-megax':        'mewtwo-mega-x',
  'mewtwo-megay':        'mewtwo-mega-y',
  'mr-mime':             'mr-mime',
  'mime-jr':             'mime-jr',
  'farfetchd':           'farfetch-d',
  'sirfetchd':           'sirfetch-d',
};

const PLACEHOLDER_SPRITE = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/0.png';

function sprite(name, regional, form, shiny) {
  const baseName = name.toLowerCase().trim().replace(/^(alolan|galarian|hisuian|shadow|mega|primal) /, '');
  const slug     = (regional || form) ? getVariantSlug(baseName, regional, form) : baseName;
  const apiSlug  = POKEAPI_SLUG_OVERRIDES[slug] || slug;

  // Check direct sprite overrides first (forms where PokeAPI name endpoint 404s)
  if (DIRECT_SPRITE_OVERRIDES[apiSlug]) return DIRECT_SPRITE_OVERRIDES[apiSlug];

  // Check in-memory cache
  if (pokemonCache.has(apiSlug)) {
    const cached = pokemonCache.get(apiSlug);
    if (shiny && cached.shinySprite) return cached.shinySprite;
    if (!shiny && cached.sprite)     return cached.sprite;
  }

  // Check localStorage cache
  const cacheKey = `pokemon_data_v3_${apiSlug}`;
  const localCached = localStorage.getItem(cacheKey);
  if (localCached) {
    try {
      const data = JSON.parse(localCached);
      pokemonCache.set(apiSlug, data);
      if (shiny && data.shinySprite) return data.shinySprite;
      if (!shiny && data.sprite)     return data.sprite;
    } catch (e) { /* invalid cache */ }
  }

  // Not cached yet — trigger async fetch; caller gets placeholder for now
  getPokemonData(apiSlug).then(data => {
    if (data && (data.sprite || data.homeSprite)) {
      renderRaidBosses();
      return;
    }
    // Fetch failed — try stripping form suffix and caching base sprite instead
    const baseMatch = apiSlug.match(/^(.+?)-(mega(?:-x|-y)?|gmax|origin|alola|galar|hisui|paldea|crowned|resolute|therian|incarnate|ultra|black|white|sky|attack|defense|speed)$/);
    if (baseMatch) {
      const baseSlug = POKEAPI_SLUG_OVERRIDES[baseMatch[1]] || baseMatch[1];
      getPokemonData(baseSlug).then(baseData => {
        if (baseData) {
          // Store base data under the form slug so future calls resolve instantly
          pokemonCache.set(apiSlug, baseData);
          renderRaidBosses();
        }
      });
    }
  });
  return PLACEHOLDER_SPRITE;
}

// Cache for Pokemon data (sprite URLs and types)
const pokemonCache = new Map();

// Get Pokemon data from cache or PokeAPI
async function getPokemonData(name) {
  const cleanName = name.toLowerCase().trim();
  
  // Check in-memory cache first
  if (pokemonCache.has(cleanName)) {
    return pokemonCache.get(cleanName);
  }
  
  // Check localStorage cache
  const cacheKey = `pokemon_data_v3_${cleanName}`;
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
      homeSprite: apiData.sprites.other?.home?.front_default || null,
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

async function handleSpriteError(img, pokemonName) {
  if (img.dataset.fallbackAttempted) {
    img.src = PLACEHOLDER_SPRITE;
    return;
  }
  img.dataset.fallbackAttempted = 'true';
  const apiSlug = POKEAPI_SLUG_OVERRIDES[pokemonName] || pokemonName;
  if (DIRECT_SPRITE_OVERRIDES[apiSlug]) { img.src = DIRECT_SPRITE_OVERRIDES[apiSlug]; return; }
  const data = await getPokemonData(apiSlug);
  if (data && (data.sprite || data.homeSprite)) {
    img.src = data.sprite || data.homeSprite;
    return;
  }
  // If the slug had a form suffix (-mega, -gmax, etc.) and failed, retry with base name
  const baseMatch = apiSlug.match(/^(.+?)-(mega|mega-x|mega-y|gmax|origin|alola|galar|hisui|paldea)$/);
  if (baseMatch) {
    const baseSlug = POKEAPI_SLUG_OVERRIDES[baseMatch[1]] || baseMatch[1];
    const baseData = await getPokemonData(baseSlug);
    img.src = (baseData && baseData.sprite) ? baseData.sprite : PLACEHOLDER_SPRITE;
  } else {
    img.src = PLACEHOLDER_SPRITE;
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
  if (r.length >= 25) return r; // already new format (25 cols with Species Candy)
  const migrated = [...r];
  if (migrated.length < 24) migrated.splice(8, 0, ''); // insert blank XL Candy at col 8
  migrated.splice(9, 0, ''); // insert blank Species Candy at col 9
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

// ── Medal Progress ─────────────────────────────────────────────────────────────
const MEDAL_HEADERS = ['Medal','Current','Bronze','Silver','Gold','Platinum','Notes'];

function renderMedals() {
  const c = document.getElementById('medalContent');
  if (!c) return;

  // Filter out platinum-complete medals, then sort by % remaining to next tier (closest first)
  const active = medalsData
    .map((r, idx) => ({ r, idx }))
    .filter(({ r }) => {
      const current  = parseFloat(r[1]) || 0;
      const platinum = parseFloat(r[5]) || Infinity;
      return current < platinum;
    })
    .sort((a, b) => {
      const pct = ({ r }) => {
        const current  = parseFloat(r[1]) || 0;
        const platinum = parseFloat(r[5]) || 1;
        return current / platinum;
      };
      return pct(b) - pct(a);
    });

  if (!active.length) {
    c.innerHTML = '<div class="empty-state">No medals tracked yet — or all are Platinum! 🏆</div>';
    return;
  }

  c.innerHTML = active.map(({ r, idx }) => {
    const name     = r[0] || '?';
    const current  = parseFloat(r[1]) || 0;
    const bronze   = parseFloat(r[2]) || 0;
    const silver   = parseFloat(r[3]) || 0;
    const gold     = parseFloat(r[4]) || 0;
    const platinum = parseFloat(r[5]) || 0;
    const notes    = r[6] || '';
    const total    = platinum;

    // Determine current tier label and next target
    let tierLabel, nextTarget, nextLabel, nextColor;
    if      (current < bronze)   { tierLabel = '—';         nextTarget = bronze;   nextLabel = 'Bronze';   nextColor = '#cd7f32'; }
    else if (current < silver)   { tierLabel = '🥉 Bronze'; nextTarget = silver;   nextLabel = 'Silver';   nextColor = '#9e9e9e'; }
    else if (current < gold)     { tierLabel = '🥈 Silver'; nextTarget = gold;     nextLabel = 'Gold';     nextColor = '#f6c12a'; }
    else                         { tierLabel = '🥇 Gold';   nextTarget = platinum; nextLabel = 'Platinum'; nextColor = '#63e5ff'; }

    const remaining = Math.max(0, nextTarget - current);
    const pct = v => Math.min(100, Math.max(0, (Math.min(current, v) / v) * 100));

    // Each segment width is proportional to its threshold relative to platinum
    const bPct  = (bronze   / total) * 100;
    const sPct  = ((silver  - bronze)  / total) * 100;
    const gPct  = ((gold    - silver)  / total) * 100;
    const plPct = ((platinum - gold)   / total) * 100;

    // Fill within each segment
    const fillB  = current >= bronze   ? 100 : (current / bronze) * 100;
    const fillS  = current >= silver   ? 100 : current <= bronze ? 0 : ((current - bronze) / (silver - bronze)) * 100;
    const fillG  = current >= gold     ? 100 : current <= silver ? 0 : ((current - silver) / (gold - silver)) * 100;
    const fillPl = current >= platinum ? 100 : current <= gold   ? 0 : ((current - gold)   / (platinum - gold)) * 100;

    const seg = (width, fill, fillColor, emptyColor, leftR, rightR) => `
      <div style="width:${width}%;height:100%;background:${emptyColor};
                  border-radius:${leftR}px ${rightR}px ${rightR}px ${leftR}px;overflow:hidden;position:relative;">
        <div style="width:${fill}%;height:100%;background:${fillColor};
                    border-radius:${leftR}px ${fill >= 100 ? rightR : 0}px ${fill >= 100 ? rightR : 0}px ${leftR}px;
                    transition:width 0.6s ease;"></div>
      </div>`;

    return `
    <div class="medal-card">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:${notes ? 2 : 4}px;">
        <div>
          <span style="font-size:13px;font-weight:700;color:#2d3748;">${name}</span>
          <span class="badge" style="background:#f0eeff;color:#553c9a;border:1px solid #d6c9ff;margin-left:5px;font-size:9px;">${tierLabel}</span>
        </div>
        <div style="display:flex;align-items:center;gap:5px;">
          <span style="font-size:11px;color:#718096;"><strong style="color:#2d3748;">${current.toLocaleString()}</strong> / ${platinum.toLocaleString()}</span>
          <button class="btn-icon" style="font-size:10px;padding:1px 4px;" onclick="editMedal(${idx})" title="Edit">✏️</button>
          <button class="btn-icon" style="font-size:10px;padding:1px 4px;" onclick="deleteMedal(${idx})" title="Delete">🗑️</button>
        </div>
      </div>
      ${notes ? `<div class="medal-notes" style="font-size:11px;color:#667eea;margin-bottom:4px;font-style:italic;line-height:1.3;">📝 ${notes}</div>` : ''}
      <div class="medal-progress-bar" style="display:flex;height:10px;gap:2px;border-radius:5px;overflow:hidden;">
        ${seg(bPct,  fillB,  '#cd7f32', '#f0e4d0', 5, 0)}
        ${seg(sPct,  fillS,  '#9e9e9e', '#ebebeb', 0, 0)}
        ${seg(gPct,  fillG,  '#f6c12a', '#fdf3cc', 0, 0)}
        ${seg(plPct, fillPl, '#63e5ff', '#d9f7ff', 0, 5)}
      </div>
      <div style="display:flex;justify-content:space-between;margin-top:4px;font-size:10px;color:#718096;">
        <span style="color:#2d3748;font-weight:600;">▲ ${remaining.toLocaleString()} to ${nextLabel}</span>
        <span class="medal-thresholds">${bronze.toLocaleString()} · ${silver.toLocaleString()} · ${gold.toLocaleString()} · ${platinum.toLocaleString()}</span>
      </div>
    </div>`;
  }).join('');
}

function showAddMedalModal() {
  document.getElementById('medalModalTitle').textContent = 'Add Medal';
  document.getElementById('medalForm').reset();
  document.getElementById('medalEditIndex').value = '';
  document.getElementById('addMedalModal').style.display = 'block';
}

function editMedal(idx) {
  const r = medalsData[idx];
  document.getElementById('medalModalTitle').textContent = 'Edit Medal';
  document.getElementById('medalEditIndex').value = idx;
  document.getElementById('medalName').value    = r[0] || '';
  document.getElementById('medalCurrent').value = r[1] || '0';
  document.getElementById('medalBronze').value  = r[2] || '';
  document.getElementById('medalSilver').value  = r[3] || '';
  document.getElementById('medalGold').value    = r[4] || '';
  document.getElementById('medalPlatinum').value = r[5] || '';
  document.getElementById('medalNotes').value   = r[6] || '';
  document.getElementById('addMedalModal').style.display = 'block';
}

async function saveMedal(e) {
  e.preventDefault();
  const btn = e.target.querySelector('button[type="submit"]');
  setSaving(btn, true);
  const idx = document.getElementById('medalEditIndex').value;
  const row = [
    document.getElementById('medalName').value.trim(),
    document.getElementById('medalCurrent').value,
    document.getElementById('medalBronze').value,
    document.getElementById('medalSilver').value,
    document.getElementById('medalGold').value,
    document.getElementById('medalPlatinum').value,
    document.getElementById('medalNotes').value.trim(),
  ];
  if (idx !== '') { medalsData[idx] = row; } else { medalsData.push(row); }
  const ok = await saveSheetData('Medals', [MEDAL_HEADERS, ...medalsData]);
  setSaving(btn, false);
  if (ok) { closeModal('addMedalModal'); renderMedals(); }
}

async function deleteMedal(idx) {
  if (!confirm(`Delete "${medalsData[idx][0]}"?`)) return;
  setBgSaving(true);
  medalsData.splice(idx, 1);
  await saveSheetData('Medals', [MEDAL_HEADERS, ...medalsData]);
  setBgSaving(false);
  renderMedals();
}

async function deleteMedal(idx) {
  if (!confirm(`Delete "${medalsData[idx][0]}"?`)) return;
  setBgSaving(true);
  medalsData.splice(idx, 1);
  await saveSheetData('Medals', [MEDAL_HEADERS, ...medalsData]);
  setBgSaving(false);
  renderMedals();
}

// ── Useful Links (sheet-backed) ───────────────────────────────────────────────
const LINKS_HEADERS = ['Title','URL','Description','Category'];

const LINK_CATEGORY_COLORS = {
  'Tools':     { bg:'#ebf4ff', color:'#2b6cb0' },
  'News':      { bg:'#fef3c7', color:'#92400e' },
  'PvP':       { bg:'#fce7f3', color:'#9d174d' },
  'Trading':   { bg:'#d1fae5', color:'#065f46' },
  'Events':    { bg:'#ede9fe', color:'#5b21b6' },
  'Community': { bg:'#fee2e2', color:'#991b1b' },
  'General':   { bg:'#f1f5f9', color:'#475569' },
  '':          { bg:'#f1f5f9', color:'#475569' },
};

function renderLinks() {
  const c = document.getElementById('linksContent');
  if (!c) return;
  if (!linksData.length) {
    c.innerHTML = '<div class="empty-state">No links yet — add your favourite GO tools and references.</div>';
    return;
  }

  // Group by category
  const groups = {};
  linksData.forEach((r, idx) => {
    const cat = r[3] || 'General';
    if (!groups[cat]) groups[cat] = [];
    groups[cat].push({ r, idx });
  });

  c.innerHTML = Object.entries(groups).map(([cat, items]) => {
    const { bg, color } = LINK_CATEGORY_COLORS[cat] || LINK_CATEGORY_COLORS['General'];
    return `
    <div style="margin-bottom:14px;">
      <div style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:0.8px;
                  color:${color};margin-bottom:6px;">${cat}</div>
      <div style="display:flex;flex-direction:column;gap:6px;">
        ${items.map(({ r, idx }) => `
        <div style="display:flex;align-items:center;gap:10px;background:white;border:1px solid #e2e8f0;
                    border-radius:8px;padding:8px 12px;box-shadow:0 1px 3px rgba(0,0,0,0.05);">
          <a href="${r[1]}" target="_blank" rel="noopener" style="flex:1;min-width:0;text-decoration:none;">
            <div style="font-size:13px;font-weight:700;color:#2d3748;">${r[0]}</div>
            ${r[2] ? `<div style="font-size:11px;color:#718096;margin-top:1px;">${r[2]}</div>` : ''}
            <div style="font-size:10px;color:#a0aec0;margin-top:2px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${r[1]}</div>
          </a>
          <div style="display:flex;gap:4px;flex-shrink:0;">
            <button class="btn-icon" style="font-size:10px;padding:1px 5px;" onclick="editLink(${idx})" title="Edit">✏️</button>
            <button class="btn-icon" style="font-size:10px;padding:1px 5px;" onclick="deleteLink(${idx})" title="Delete">🗑️</button>
          </div>
        </div>`).join('')}
      </div>
    </div>`;
  }).join('');
}

function showAddLinkModal() {
  document.getElementById('linkModalTitle').textContent = 'Add Link';
  document.getElementById('linkForm').reset();
  document.getElementById('linkEditIndex').value = '';
  document.getElementById('addLinkModal').style.display = 'block';
}

function editLink(idx) {
  const r = linksData[idx];
  document.getElementById('linkModalTitle').textContent = 'Edit Link';
  document.getElementById('linkEditIndex').value  = idx;
  document.getElementById('linkTitle').value      = r[0] || '';
  document.getElementById('linkURL').value        = r[1] || '';
  document.getElementById('linkDesc').value       = r[2] || '';
  document.getElementById('linkCategory').value   = r[3] || '';
  document.getElementById('addLinkModal').style.display = 'block';
}

async function saveLink(e) {
  e.preventDefault();
  const btn = document.querySelector('#linkForm button[type="submit"]');
  setSaving(btn, true);
  const idx = document.getElementById('linkEditIndex').value;
  const row = [
    document.getElementById('linkTitle').value.trim(),
    document.getElementById('linkURL').value.trim(),
    document.getElementById('linkDesc').value.trim(),
    document.getElementById('linkCategory').value,
  ];
  if (idx !== '') linksData[idx] = row; else linksData.push(row);
  const ok = await saveSheetData('UsefulLinks', [LINKS_HEADERS, ...linksData]);
  setSaving(btn, false);
  if (ok) { closeModal('addLinkModal'); renderLinks(); }
}

async function deleteLink(idx) {
  if (!confirm(`Remove "${linksData[idx][0]}"?`)) return;
  linksData.splice(idx, 1);
  setBgSaving(true);
  await saveSheetData('UsefulLinks', [LINKS_HEADERS, ...linksData]);
  setBgSaving(false);
  renderLinks();
}

// ── Section Reordering ────────────────────────────────────────────────────────
const SECTION_LABELS = {
  events:    '📅 Current Events',
  raids:     '⚔️ Raid Boss Tracker',
  powerup:   '⚡ Power-Up Priority',
  candy:     '🍬 Rare Candy',
  lucky:     '🤝 Lucky Trades',
  shinygaps: '✨ Community Day Shiny Gaps',
  shinyodds: '✨ Shiny Odds Reference',
  pvp:       '⚔️ PVP Roster',
  medals:    '🏅 Medal Progress',
  links:     '🔗 Useful Links',
};
const DEFAULT_ORDER = ['events','raids','powerup','candy','lucky','shinygaps','shinyodds','pvp','medals','links'];

function getSectionOrder() {
  try {
    const saved = localStorage.getItem('sectionOrder');
    if (saved) {
      const parsed = JSON.parse(saved);
      // Merge: keep saved order, append any new sections not yet in saved
      const merged = parsed.filter(id => DEFAULT_ORDER.includes(id));
      DEFAULT_ORDER.forEach(id => { if (!merged.includes(id)) merged.push(id); });
      return merged;
    }
  } catch(e) {}
  return [...DEFAULT_ORDER];
}

function applySavedOrder() {
  const order = getSectionOrder();
  const container = document.querySelector('.sections-container') || (() => {
    // Wrap all sections in a container if not already done
    const first = document.querySelector('[data-section-id]');
    if (!first) return null;
    const parent = first.parentNode;
    const wrapper = document.createElement('div');
    wrapper.className = 'sections-container';
    parent.insertBefore(wrapper, first);
    document.querySelectorAll('[data-section-id]').forEach(s => wrapper.appendChild(s));
    return wrapper;
  })();
  if (!container) return;
  order.forEach(id => {
    const el = container.querySelector(`[data-section-id="${id}"]`);
    if (el) container.appendChild(el);
  });
}

function showReorderModal() {
  const order = getSectionOrder();
  const list = document.getElementById('reorderList');
  list.innerHTML = order.map(id => `
    <div class="reorder-item" data-id="${id}" draggable="true"
         style="display:flex;align-items:center;gap:10px;background:#f8f9fa;
                border:1px solid #e2e8f0;border-radius:8px;padding:10px 12px;
                cursor:grab;user-select:none;">
      <span style="color:#aaa;font-size:16px;">⠿</span>
      <span style="font-size:13px;font-weight:600;">${SECTION_LABELS[id] || id}</span>
    </div>`).join('');
  bindReorderDrag(list);
  document.getElementById('reorderModal').style.display = 'block';
}

function bindReorderDrag(list) {
  let dragEl = null;

  function getItemAtPoint(x, y) {
    // Temporarily hide dragged el so elementFromPoint finds the one underneath
    if (dragEl) dragEl.style.display = 'none';
    const el = document.elementFromPoint(x, y);
    if (dragEl) dragEl.style.display = '';
    return el ? el.closest('.reorder-item') : null;
  }

  list.querySelectorAll('.reorder-item').forEach(item => {
    // ── Mouse drag (desktop) ──────────────────────────────────────
    item.addEventListener('dragstart', e => {
      dragEl = item;
      setTimeout(() => item.style.opacity = '0.4', 0);
      e.dataTransfer.effectAllowed = 'move';
    });
    item.addEventListener('dragend', () => { item.style.opacity = '1'; dragEl = null; });
    item.addEventListener('dragover', e => {
      e.preventDefault();
      if (!dragEl || dragEl === item) return;
      const rect = item.getBoundingClientRect();
      const after = e.clientY > rect.top + rect.height / 2;
      list.insertBefore(dragEl, after ? item.nextSibling : item);
    });

    // ── Touch drag (mobile) ───────────────────────────────────────
    item.addEventListener('touchstart', e => {
      dragEl = item;
      item.style.opacity = '0.4';
      item.style.transition = 'none';
    }, { passive: true });

    item.addEventListener('touchmove', e => {
      e.preventDefault();
      if (!dragEl) return;
      const touch = e.touches[0];
      const target = getItemAtPoint(touch.clientX, touch.clientY);
      if (target && target !== dragEl) {
        const rect = target.getBoundingClientRect();
        const after = touch.clientY > rect.top + rect.height / 2;
        list.insertBefore(dragEl, after ? target.nextSibling : target);
      }
    }, { passive: false });

    item.addEventListener('touchend', () => {
      if (dragEl) { dragEl.style.opacity = '1'; dragEl.style.transition = ''; dragEl = null; }
    });
  });
}

function applyReorder() {
  const order = [...document.querySelectorAll('#reorderList .reorder-item')]
    .map(el => el.dataset.id);
  localStorage.setItem('sectionOrder', JSON.stringify(order));
  applySavedOrder();
  closeModal('reorderModal');
}

function resetReorder() {
  localStorage.removeItem('sectionOrder');
  applySavedOrder();
  closeModal('reorderModal');
}


function toggleAllSections() {
  const headers = document.querySelectorAll('.section-header');
  const btn = document.getElementById('collapseAllBtn');
  // If any section is expanded, collapse all; otherwise expand all
  const anyExpanded = [...headers].some(h => !h.classList.contains('collapsed'));
  headers.forEach(h => {
    const content = h.nextElementSibling;
    if (anyExpanded) {
      h.classList.add('collapsed');
      content.classList.add('collapsed');
    } else {
      h.classList.remove('collapsed');
      content.classList.remove('collapsed');
    }
  });
  btn.textContent = anyExpanded ? '⊞ Expand All' : '⊟ Collapse All';
}

let simpleModeActive = false;
function toggleSimpleMode() {
  simpleModeActive = !simpleModeActive;
  document.body.classList.toggle('simple-mode', simpleModeActive);
  const btn = document.getElementById('simpleModeBtn');
  btn.textContent = simpleModeActive ? '⊞ Detail View' : '🔲 Simple View';
  btn.classList.toggle('util-btn-active', simpleModeActive);
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
  const el = document.getElementById('syncStatus');
  if (el) { el.textContent = text; el.className = cls; }
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
  document.getElementById('puPokemon').value        = r[0]  || '';
  document.getElementById('puTypes').value          = r[1]  || '';
  document.getElementById('puLucky').checked        = isTrue(r[2]);
  document.getElementById('puHasElite').checked     = isTrue(r[3]);
  document.getElementById('puNeedsElite').checked   = isTrue(r[4]);
  document.getElementById('puCurrentLevel').value   = r[5]  || '';
  document.getElementById('puTargetLevel').value    = r[6]  || '';
  document.getElementById('puLegendary').checked    = isTrue(r[7]);
  document.getElementById('puXLCandy').value        = r[8]  || '';
  document.getElementById('puSpeciesCandy').value   = r[9]  || '';
  // r[10] = Stardust (populated below)
  document.getElementById('puNeedLucky').checked    = isTrue(r[11]);
  document.getElementById('puNotes').value          = r[12] || '';
  document.getElementById('puPriority').value       = r[13] || 'Medium';
  document.getElementById('puStatus').value         = r[14] || 'To Do';
  document.getElementById('puArchived').value       = r[15] || 'FALSE';
  document.getElementById('puHundo').checked        = isTrue(r[16]);
  document.getElementById('puShiny').checked        = isTrue(r[17]);
  document.getElementById('puShadow').checked       = isTrue(r[18]);
  document.getElementById('puIV').value             = r[19] || '';
  document.getElementById('puStardust').value       = r[20] || '';
  document.getElementById('puRegional').value       = r[21] || '';
  document.getElementById('puForm').value           = r[22] || '';
  document.getElementById('puDMAX').checked         = isTrue(r[23]);
  document.getElementById('puGMAX').checked         = isTrue(r[24]);
  updateXLCandyHelper();
  updateCandyHelper();
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

  const [pu, candy, wants, mirrors, friends, shinies, events, pvpRoster, pvpConfig, pvpMeta, raids, pvpRosterUL, pvpMetaUL, medalsRaw, upcomingCDsRaw, linksRaw] = await Promise.all([
    safe('PowerUpPriority'), safe('RareCandyConfig'), safe('LuckyTradeWants'),
    safe('MirrorTargets'), safe('LuckyFriendsQueue'),
    safe('CommunityDayShinies'), safe('CurrentEvents'),
    safe('PVPRoster'), safe('PVPConfig'), safe('PVPMeta'), safe('RaidBosses'),
    safe('PVPRosterUL'), safe('PVPMetaUL'), safe('Medals'), safe('UpcomingCDs'), safe('UsefulLinks')
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
  pvpRosterULData   = pvpRosterUL.length > 1 ? pvpRosterUL.slice(1) : [];
  pvpMetaULData     = pvpMetaUL.length   > 1 ? pvpMetaUL.slice(1)   : [];
  medalsData        = medalsRaw.length   > 1 ? medalsRaw.slice(1)   : [];
  upcomingCDsData   = upcomingCDsRaw.length > 1 ? upcomingCDsRaw.slice(1) : [];
  linksData         = linksRaw.length > 1 ? linksRaw.slice(1) : [];

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
  for (const [fn, name] of [[renderEvents,'Events'],[renderRaidBosses,'Raids'],[renderPowerUp,'PowerUp'],[renderCandy,'Candy'],[renderTrades,'Trades'],[renderShinyGaps,'Shinies'],[renderPVP,'PVP'],[renderShinyOdds,'ShinyOdds'],[renderMedals,'Medals'],[renderUpcomingCDs,'UpcomingCDs'],[renderLinks,'Links']]) {
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
                    'Target Level','Legendary','XL Candy','Species Candy','Stardust','Need Lucky','Notes',
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
    .filter(({r}) => showArch || r[15] !== 'TRUE')
    .filter(({r}) => filterStatus === 'all' || (r[14]||'') === filterStatus)
    .filter(({r}) => filterPrio   === 'all' || (r[13]||'') === filterPrio)
    .filter(({r}) => {
      if (filterType === 'all')       return true;
      if (filterType === 'legendary') return isTrue(r[7]);
      if (filterType === 'shadow')    return r[18] === 'TRUE';
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
    return (PRIO_ORDER[a.r[13]]||2) - (PRIO_ORDER[b.r[13]]||2);
  });

  if (!rows.length) { c.innerHTML='<div class="empty-state">📝 No power-up priorities match the current filters</div>'; return; }

  const STATUS_BADGE = {
    'To Do':       'background:#E2E8F0;color:#4A5568;',
    'In Progress': 'background:#FEEBC8;color:#C05621;',
    'Done':        'background:#C6F6D5;color:#276749;',
  };

  c.innerHTML = rows.map(({r,i}) => {
    const [pokemon,types,lucky,hasEl,needEl,curLv,tgtLv,legendary,,,,needLucky,notes,prio,status,arch,hundo,shiny,shadow,iv] = r;
    const speciesXL    = parseInt(r[8]) || 0;
    const speciesCandy = parseInt(r[9]) || 0;
    const regional = r[21] || '';
    const form     = r[22] || '';
    const dmax     = isTrue(r[23]);
    const gmax     = isTrue(r[24]);
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
    const isShiny  = isTrue(shiny);
    const isShadow = isTrue(shadow);

    const b = [];
    if (targetMet)          b.push('<span class="icon" title="Level target reached">✅</span>');
    if (isTrue(legendary))  b.push('<span class="icon" title="Legendary/Mythical">🏆</span>');
    if (lucky==='TRUE')     b.push('<span class="icon" title="Lucky">🍀</span>');
    if (hundo==='TRUE')     b.push('<span class="icon" title="Hundo">💯</span>');
    if (isShiny)             b.push('<span class="icon" title="Shiny">✨</span>');
    if (isShadow)            b.push('<img src="GO_Shadow_icon.png" style="width:16px;height:16px;vertical-align:middle;" title="Shadow">');
    if (hasEl==='TRUE')     b.push('<span class="icon" title="Has Legacy Move">£</span>');
    if (needEl==='TRUE')    b.push('<span class="icon" title="Needs Legacy Move">❗</span>');
    if (needLucky==='TRUE') b.push('<span class="icon" title="Need Lucky Trade">🤝</span>');
    if (dmax)               b.push('<span class="icon" title="DMAX">💎</span>');
    if (gmax)               b.push('<span class="icon" title="GMAX">🌟</span>');
    if (curLevel >= 50)     b.push('<span class="badge badge-complete50">L50 ✓</span>');
    else if (tgtLevel >= 50) b.push('<span class="badge badge-target50">→50</span>');

    // Status badge
    const statusStyle = STATUS_BADGE[status] || 'background:#E2E8F0;color:#4A5568;';
    const statusBadge = status
      ? `<span style="${statusStyle}font-size:10px;padding:1px 6px;border-radius:8px;font-weight:600;white-space:nowrap;">${status}</span>`
      : '';

    const ivDisplay = iv ? ` • ${iv}% IV` : '';

    // Candy with image assets — subtract species candy from regular candy need
    const candyInfo = calculateCandyNeeded(curLevel, tgtLevel, pokemon);
    const needRegularRaw = candyInfo.regularCandy;
    const needRegular    = Math.max(0, needRegularRaw - speciesCandy);
    const needXLraw      = candyInfo.xlCandy;
    const needXL         = Math.max(0, needXLraw - speciesXL);
    let candyDisplay = '';
    const candyParts = [];
    if (speciesCandy > 0 && needRegularRaw > 0)
      candyParts.push(`<span style="color:#48BB78;">${speciesCandy} candy</span>`);
    if (needRegular > 0) candyParts.push(`${needRegular}${RC_IMG}`);
    if (speciesXL   > 0 && needXLraw > 0)
      candyParts.push(`<span style="color:#48BB78;">${speciesXL} XL</span>`);
    if (needXL > 0) candyParts.push(`${needXL}${RCX_IMG}`);
    if (candyParts.length) candyDisplay = ` • ${candyParts.join(' + ')}`;

    const prioBorderColor = prio === 'High' ? '#E53E3E' : prio === 'Medium' ? '#D69E2E' : prio === 'Low' ? '#3182CE' : '#667eea';

    // Compose background: shiny/shadow tints blend with type background
    let cardBg = typesBg || 'white';
    if (isShiny && isShadow) {
      cardBg = 'linear-gradient(135deg, rgba(107,70,193,0.08) 0%, white 50%, rgba(255,215,0,0.07) 100%)';
    } else if (isShiny) {
      cardBg = 'linear-gradient(135deg, rgba(255,215,0,0.08) 0%, white 60%)';
    } else if (isShadow) {
      cardBg = 'linear-gradient(135deg, rgba(107,70,193,0.14) 0%, rgba(128,90,213,0.06) 50%, white 100%)';
    }

    return `
    <div class="list-item${isShiny?' card-shiny':''}${isShadow?' card-shadow':''}" draggable="true" data-index="${i}"
         style="background:${cardBg};border-left-color:${prioBorderColor};${isArch||targetMet?'opacity:0.55;':''}">
      <div class="list-item-left">
        <span class="drag-handle">☰</span>
        <img class="list-item-sprite" src="${sprite(pokemon, regional, form, isShiny)}" onerror="handleSpriteError(this, '${pokemon}')">
      </div>
      <div class="list-item-content">
        <div class="list-item-line1">${displayName} ${b.join('')} ${statusBadge} ${types_html}</div>
        <div class="list-item-line2">
          Lv${curLv}→${tgtLv}${ivDisplay}${candyDisplay}${notes?' • '+notes:''}
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
    const isArch      = isTrue(r[15]);
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
    const pokemon      = r[0];
    const curLv        = parseFloat(r[5]) || 0;
    const prio         = r[13] || 'Medium';
    const speciesXL    = parseInt(r[8]) || 0;
    const speciesCandy = parseInt(r[9]) || 0;
    const regional     = r[21] || '';
    const form         = r[22] || '';
    const isShiny      = isTrue(r[17]);

    let displayName = pokemon;
    if (regional) displayName = `${regional} ${pokemon}`;
    if (form)     displayName = `${displayName} (${form})`;

    const candyInfo      = calculateCandyNeeded(curLv, 50, pokemon);
    const needRCRaw      = candyInfo.regularCandy;
    const needRC         = Math.max(0, needRCRaw - speciesCandy);
    const needXLRaw      = candyInfo.xlCandy;
    const needXL         = Math.max(0, needXLRaw - speciesXL);
    const allocRC        = parseInt(rcGet('Alloc_' + pokemon)) || 0;
    const allocXL        = parseInt(rcGet('Alloc_' + pokemon + '_XL')) || 0;
    const stillRC        = Math.max(0, needRC - allocRC);
    const stillXL        = Math.max(0, needXL - allocXL);
    const isShadow       = isTrue(r[18]);
    const prioColor      = prio==='High'?'#E53E3E': prio==='Medium'?'#D69E2E':'#3182CE';
    const prioBorderColor = prio==='High'?'#E53E3E': prio==='Medium'?'#D69E2E':'#3182CE';

    let cardBg = (stillRC > 0 || stillXL > 0) ? 'rgba(229,62,62,0.03)' : 'rgba(72,187,120,0.04)';
    if (isShiny && isShadow) {
      cardBg = 'linear-gradient(135deg, rgba(107,70,193,0.08) 0%, white 50%, rgba(255,215,0,0.07) 100%)';
    } else if (isShiny) {
      cardBg = 'linear-gradient(135deg, rgba(255,215,0,0.08) 0%, white 60%)';
    } else if (isShadow) {
      cardBg = 'linear-gradient(135deg, rgba(107,70,193,0.14) 0%, rgba(128,90,213,0.06) 50%, white 100%)';
    }

    // In cascade mode, show available RC before this row
    if (cascadeMode) {
      const rcAvailColor = runRC < 0 ? '#E53E3E' : '#DD6B20';
      const xlAvailColor = runXL < 0 ? '#E53E3E' : '#DD6B20';
      html += `<div style="font-size:10px;color:#999;padding:2px 8px 4px;display:flex;gap:12px;">
        <span>${RC} <strong style="color:${rcAvailColor};">${runRC}</strong> available</span>
        <span>${RCX} <strong style="color:${xlAvailColor};">${runXL}</strong> available</span>
      </div>`;
    }

    const speciesCandyPart = speciesCandy > 0 && needRCRaw > 0
      ? `<span style="color:#48BB78;">${speciesCandy} ${pokemon} candy</span>` : '';
    const rareCandyPart = needRC > 0
      ? `${needRC}${RC}` : '';
    const regularNeedStr = [speciesCandyPart, rareCandyPart].filter(Boolean).join(' + ');

    const speciesXLPart = speciesXL > 0 && needXLRaw > 0
      ? `<span style="color:#48BB78;">${speciesXL} ${pokemon} XL</span>` : '';
    const rareXLPart = needXL > 0
      ? `${needXL}${RCX}` : '';
    const xlNeedStr = [speciesXLPart, rareXLPart].filter(Boolean).join(' + ');

    const needStr = [
      regularNeedStr,
      xlNeedStr,
    ].filter(Boolean).join('<br>') || '✅';

    html += `
    <div class="list-item${isShiny?' card-shiny':''}${isShadow?' card-shadow':''}" draggable="true" data-alloc-pokemon="${pokemon}"
         style="display:grid;grid-template-columns:auto auto 1fr auto;gap:8px;align-items:center;
                padding:8px 10px;background:${cardBg};border-left-color:${prioBorderColor};margin-bottom:3px;">
      <span class="drag-handle">☰</span>
      <img src="${sprite(pokemon, regional, form, isShiny)}" onerror="handleSpriteError(this,'${pokemon}')"
           style="width:36px;height:36px;">
      <div style="font-size:12px;font-weight:600;min-width:0;">
        <div style="font-size:13px;font-weight:700;word-break:break-word;line-height:1.3;">${displayName}</div>
        <div class="alloc-detail" style="display:flex;align-items:center;gap:4px;flex-wrap:nowrap;margin-top:1px;">
          <span style="font-size:10px;color:#999;font-weight:400;">Lv${curLv}→50</span>
        </div>
        <div class="alloc-detail">${needStr !== '✅' ? `<div style="font-size:10px;color:#718096;font-weight:400;margin-top:2px;">Needs: ${needStr}</div>` : '<div style="font-size:10px;color:#48BB78;margin-top:2px;">✅ Fully covered</div>'}</div>
      </div>
      <div style="flex-shrink:0;display:flex;flex-direction:column;align-items:flex-end;gap:3px;">
        ${needRC > 0 ? `<div style="display:flex;align-items:center;gap:2px;justify-content:flex-end;white-space:nowrap;">
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
const RAID_HEADERS = ['Pokemon','Tier','Shiny','IVs','XL','Dex','Costume','Priority','Notes','Done','DoneDate','Remote','Shadow','Regional','Form'];

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

  const tierColors = {'5★':'#b7791f','Mega':'#553c9a','Super Mega':'#b83280','DMAX':'#2b6cb0','GMAX':'#276749','3★':'#c05621','1★':'#718096'};

  c.innerHTML = `<div style="display:flex;flex-wrap:wrap;gap:10px;">
    ${sorted.map(({r,idx}) => {
      const pokemon   = r[0]||'';
      const tier      = r[1]||'5★';
      const done      = isTrue(r[9]);
      const notes     = r[8]||'';
      const regional  = r[13]||'';
      const form      = r[14]||'';
      const tierColor = tierColors[tier] || '#718096';

      const isRemote = isTrue(r[11]);
      const isShadow = isTrue(r[12]);
      const reasonIcons = [
        isTrue(r[2]) ? {icon:'✨', label:'Shiny'}    : null,
        isTrue(r[3]) ? {icon:'💎', label:'IVs'}       : null,
        isTrue(r[4]) ? {icon:'🍬', label:'XL'}        : null,
        isTrue(r[5]) ? {icon:'📖', label:'Dex'}       : null,
        isTrue(r[6]) ? {icon:'🎭', label:'Costume'}   : null,
      ].filter(Boolean);

      // Display name: show regional/form as subtitle
      const displayName = pokemon;
      const variantLabel = regional ? regional : form ? form : '';

      const cardOpacity = done ? 'opacity:0.4;filter:grayscale(0.6);' : '';
      const doneRibbon  = done
        ? `<div style="position:absolute;top:0;left:0;right:0;background:#48BB78;color:white;font-size:9px;font-weight:700;text-align:center;padding:2px;border-radius:8px 8px 0 0;letter-spacing:0.5px;">✓ DONE</div>`
        : '';
      const remoteRibbon = (!done && isRemote)
        ? `<div style="position:absolute;top:0;left:0;right:0;background:linear-gradient(90deg,#00b4db,#7b2ff7);color:white;font-size:9px;font-weight:700;text-align:center;padding:2px;border-radius:8px 8px 0 0;letter-spacing:0.5px;display:flex;align-items:center;justify-content:center;gap:3px;"><img src="GO_Remote_Raid_Pass.png" style="width:10px;height:10px;"> REMOTE</div>`
        : '';
      const prioColors = {High:'#E53E3E', Medium:'#D69E2E', Low:'#718096'};
      const prioColor = prioColors[r[7]] || '#718096';
      const cardBorder = done ? '#48BB78' : isRemote ? '#00b4db' : prioColor;

      // Build sprite slug: regional/form take priority for base tiers; mega/gmax override
      const baseSlug = pokemon.toLowerCase().replace(/\s+/g, '-');
      let spriteSlug = baseSlug;
      if (tier === 'Mega' || tier === 'Super Mega') {
        if (baseSlug === 'charizard' || baseSlug === 'mewtwo') spriteSlug = `${baseSlug}-megax`;
        else spriteSlug = `${baseSlug}-mega`;
      } else if (tier === 'GMAX') {
        spriteSlug = `${baseSlug}-gmax`;
      } else if (regional || form) {
        spriteSlug = getVariantSlug(pokemon, regional, form);
      }
      // Shadow overlay — use regular sprite, overlay icon in corner
      const shadowOverlay = isShadow
        ? `<img src="GO_Shadow_icon.png" style="position:absolute;top:6px;left:6px;width:16px;height:16px;" title="Shadow">`
        : '';

      return `
      <div style="position:relative;display:flex;flex-direction:column;align-items:center;
                  width:90px;background:${
                    isShadow              ? 'linear-gradient(160deg,rgba(107,70,193,0.21) 0%,white 55%)' :
                    tier === 'Mega'       ? 'linear-gradient(160deg,rgba(197,48,48,0.16) 0%,white 65%)' :
                    tier === 'Super Mega' ? 'linear-gradient(135deg,rgba(220,38,38,0.15) 0%,rgba(234,88,12,0.15) 40%,rgba(202,138,4,0.13) 70%,white 100%)' :
                    tier === 'GMAX'       ? 'linear-gradient(160deg,rgba(39,103,73,0.16) 0%,white 65%)' :
                    tier === 'DMAX'       ? 'linear-gradient(160deg,rgba(43,108,176,0.16) 0%,white 65%)' :
                    'white'};
                  border-radius:10px;padding:${(done||isRemote)?'18px 6px 6px':'10px 6px 6px'};
                  box-shadow:0 2px 8px rgba(0,0,0,0.1);border:2px solid ${cardBorder};
                  ${cardOpacity}">
        ${doneRibbon}${remoteRibbon}
        ${shadowOverlay}
        <img src="${sprite(spriteSlug)}" onerror="handleSpriteError(this,'${spriteSlug}')"
             style="width:56px;height:56px;image-rendering:pixelated;">
        <div style="font-size:10px;font-weight:700;text-align:center;color:#2d3748;margin-top:4px;
                    line-height:1.2;max-width:82px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;"
             title="${pokemon}">${displayName}</div>
        ${variantLabel ? `<div style="font-size:9px;color:#667eea;text-align:center;font-weight:600;line-height:1.2;">${variantLabel}</div>` : ''}
        <span style="background:${tierColor};color:white;font-size:9px;font-weight:700;
                     padding:1px 6px;border-radius:8px;margin-top:3px;">${tier}</span>
        <div style="display:flex;gap:3px;flex-wrap:wrap;justify-content:center;margin-top:4px;">
          ${reasonIcons.map(ri=>`<span title="${ri.label}" style="font-size:12px;">${ri.icon}</span>`).join('')}
        </div>
        ${notes ? `<div style="font-size:9px;color:#999;text-align:center;margin-top:3px;line-height:1.2;">${notes}</div>` : ''}
        <div style="display:flex;gap:4px;margin-top:6px;">
          ${!done
            ? `<button class="btn-icon" style="font-size:9px;padding:1px 4px;" onclick="confirmRaidDone(${idx})" title="Mark done">✅</button>`
            : `<button class="btn-icon" style="font-size:9px;padding:1px 4px;" onclick="undoRaidDone(${idx})" title="Undo">↩️</button>`}
          <button class="btn-icon" style="font-size:9px;padding:1px 4px;" onclick="editRaidBoss(${idx})" title="Edit">✏️</button>
          <button class="btn-icon" style="font-size:9px;padding:1px 4px;" onclick="deleteRaidBoss(${idx})" title="Delete">🗑️</button>
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
  document.getElementById('raidRemote').checked   = isTrue(r[11]);
  document.getElementById('raidShadow').checked   = isTrue(r[12]);
  document.getElementById('raidRegional').value   = r[13]||'';
  document.getElementById('raidFormVariant').value = r[14]||'';
  raidSpritePreview();
  document.getElementById('addRaidModal').style.display = 'block';
}

let raidSpriteTimer = null;
function raidSpritePreview() {
  if (raidSpriteTimer) clearTimeout(raidSpriteTimer);
  const name     = document.getElementById('raidPokemon').value.trim();
  const tier     = document.getElementById('raidTier').value;
  const regional = document.getElementById('raidRegional').value;
  const form     = document.getElementById('raidFormVariant').value;
  const div      = document.getElementById('raidSpritePreviewDiv');
  const info     = document.getElementById('raidSpriteInfo');
  if (!name) { div.style.display = 'none'; return; }
  info.textContent = '🔍 Looking up…'; info.style.color = '#667eea';
  div.style.display = 'flex';
  raidSpriteTimer = setTimeout(async () => {
    const base = name.toLowerCase().replace(/\s+/g, '-');

    // Build the correct PokeAPI slug based on tier, regional, and form
    let apiSlug;
    if (tier === 'Mega' || tier === 'Super Mega') {
      if (base === 'charizard' || base === 'mewtwo') apiSlug = `${base}-mega-x`;
      else apiSlug = `${base}-mega`;
    } else if (tier === 'GMAX') {
      apiSlug = `${base}-gmax`;
    } else if (regional || form) {
      apiSlug = getVariantSlug(name, regional, form);
    } else {
      apiSlug = POKEAPI_SLUG_OVERRIDES[base] || base;
    }

    const data = await getPokemonData(apiSlug);
    const spriteUrl = data?.sprite || data?.homeSprite;
    const img = document.getElementById('raidSpriteImg');
    if (spriteUrl) {
      img.src = spriteUrl;
      const label = regional ? `✓ ${regional} form` : form ? `✓ ${form} form` :
                   (tier === 'Mega' || tier === 'Super Mega') ? '✓ Mega form' :
                    tier === 'GMAX' ? '✓ Gigantamax form' : '✓';
      info.textContent = label;
      info.style.color = '#48BB78';
    } else {
      const baseData = await getPokemonData(POKEAPI_SLUG_OVERRIDES[base] || base);
      if (baseData?.sprite) {
        img.src = baseData.sprite;
        info.textContent = tier === 'GMAX' ? '⚠️ GMAX sprite unavailable — showing base' : '⚠️ Showing base form';
        info.style.color = '#DD6B20';
      } else {
        info.textContent = '⚠️ Not found'; info.style.color = '#DD6B20';
      }
    }
  }, 400);
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
    document.getElementById('raidRemote').checked  ? 'TRUE':'FALSE',
    document.getElementById('raidShadow').checked  ? 'TRUE':'FALSE',
    document.getElementById('raidRegional').value,
    document.getElementById('raidFormVariant').value,
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
  if (!confirm('Uncheck all raid bosses as not done?')) return;
  raidBossData.forEach(r => { r[9] = 'FALSE'; r[10] = ''; });
  setBgSaving(true);
  await saveSheetData('RaidBosses', [RAID_HEADERS, ...raidBossData]);
  setBgSaving(false);
  renderRaidBosses();
}

async function clearDoneRaidBosses() {
  const doneCount = raidBossData.filter(r => isTrue(r[9])).length;
  if (!doneCount) { alert('No completed bosses to remove.'); return; }
  if (!confirm(`Remove ${doneCount} completed boss${doneCount > 1 ? 'es' : ''}? Uncompleted bosses will remain.`)) return;
  raidBossData = raidBossData.filter(r => !isTrue(r[9]));
  setBgSaving(true);
  await saveSheetData('RaidBosses', [RAID_HEADERS, ...raidBossData]);
  setBgSaving(false);
  renderRaidBosses();
}

async function clearAllRaidBosses() {
  if (!confirm('Clear ALL raid bosses? This cannot be undone.')) return;
  raidBossData = [];
  setBgSaving(true);
  await saveSheetData('RaidBosses', [RAID_HEADERS]);
  setBgSaving(false);
  renderRaidBosses();
}

// Trades
const WANTS_HEADERS = ['Pokemon','Reason','Priority','Notes','Shiny'];
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
      const { bg: prioBg, border: cardBorder } = prioColors[prio] || prioColors.Medium;
      let cardBg = prioBg;
      if (shiny) cardBg = 'linear-gradient(135deg, rgba(255,215,0,0.1) 0%, white 60%)';
      const badges = [shiny?'✨':'', legacy?'£':''].filter(Boolean).join(' ');

      return `
      <div class="${shiny?'card-shiny':''}" style="background:${cardBg};border-radius:10px;padding:6px 6px 5px;width:90px;
                  box-shadow:0 2px 8px rgba(0,0,0,0.08);border:1.5px solid ${cardBorder};
                  display:flex;flex-direction:column;align-items:center;text-align:center;min-height:100px;
                  position:relative;overflow:hidden;">
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
    .filter(r => isTrue(r[11]) && r[15] !== 'TRUE') // Need Lucky=TRUE (11), not Archived (15)
    .map(r => {
      const regional = r[21] || '';
      const form     = r[22] || '';
      let displayName = r[0];
      if (regional) displayName = `${regional} ${r[0]}`;
      if (form) displayName = `${displayName} (${form})`;
      return {
        pokemon: r[0],
        displayName,
        types: r[1],
        shiny: isTrue(r[17]),
        legacy: isTrue(r[3]) || isTrue(r[4]),
        dmax: isTrue(r[23]),
        gmax: isTrue(r[24]),
        source: 'PowerUp',
        notes: r[12] || `For: ${r[7]} (Lv${r[6]})`,
        isAuto: true,
        priority: r[13] || 'Medium'
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
      const { bg: prioBg, border: cardBorder } = prioPalette[m.priority] || prioPalette.Medium;
      let cardBg = prioBg;
      if (m.shiny) cardBg = 'linear-gradient(135deg, rgba(255,215,0,0.1) 0%, white 60%)';
      const badgeIcons = [m.shiny?'✨':'', m.legacy?'£':'', m.dmax?'💎':'', m.gmax?'🌟':''].filter(Boolean).join(' ');
      const sourceLabel = m.isAuto
        ? `<div style="font-size:9px;color:#999;margin-top:2px;">⚡ Auto</div>`
        : '';

      return `
      <div class="${m.shiny?'card-shiny':''}" style="background:${cardBg};border-radius:10px;padding:6px 6px 5px;width:90px;
                  box-shadow:0 2px 8px rgba(0,0,0,0.08);border:1.5px solid ${cardBorder};
                  display:flex;flex-direction:column;align-items:center;text-align:center;min-height:100px;
                  position:relative;overflow:hidden;">
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
        <div style="min-width:0;flex-shrink:0;">
          <div style="min-width:0;">
            <span style="font-size:13px;font-weight:700;color:${nameColor};">${r[0]}</span>
            <span style="display:inline-block;font-size:10px;padding:1px 5px;border-radius:4px;font-weight:600;margin-left:4px;${badgeStyle}">${status}${isReady?' ✅':''}</span>
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
    .filter(({r,idx})=>{
      const v=(r[1]||'').toUpperCase();
      const isGot = v==='YES'||v==='Y'||v==='TRUE';
      // Show if not got, OR if got but still in grace period
      return !isGot || shinyPendingGotIt.has(idx);
    });
  
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
    const isGotIt = shinyPendingGotIt.has(idx);
    const cardClass = isGotIt ? 'shiny-card' : isHigh ? 'shiny-card shiny-card-high' : 'shiny-card';
    const label = isGotIt ? 'Got it! ✓' : isHigh ? 'High Priority' : 'Want';
    const borderStyle = isGotIt ? 'border:2px solid #48BB78;background:rgba(72,187,120,0.08);' : '';
    const labelColor = isGotIt ? 'color:#276749;' : '';

    return `
    <div class="${cardClass} card-shiny" data-idx="${idx}" onclick="cycleShinyPriority(${idx})" style="cursor:pointer;position:relative;overflow:hidden;${borderStyle}" title="Click to cycle: Want → High Priority → Got it!">
      <img src="${sprite(r[0], null, null, true)}" class="shiny-sprite" onerror="handleSpriteError(this, '${r[0]}')" draggable="false">
      <div class="shiny-name">${r[0]}</div>
      <div class="shiny-label" style="${labelColor}">${label}</div>
    </div>`;
  }).join('')+'</div>';
}

// Tracks cards pending disappearance: idx → timeoutId
const shinyPendingGotIt = new Map();

async function cycleShinyPriority(idx) {
  const row = shinyGapsData[idx];
  if (!row) return;

  const currentPriority = (row[2]||'Normal').toUpperCase();
  const currentHave     = (row[1]||'NO').toUpperCase();
  const isGotIt = currentHave === 'YES' || currentHave === 'Y' || currentHave === 'TRUE';

  // If card is in the grace period (showing "Got it!"), tapping again cycles back to Want
  if (shinyPendingGotIt.has(idx)) {
    clearTimeout(shinyPendingGotIt.get(idx));
    shinyPendingGotIt.delete(idx);
    row[1] = 'NO'; row[2] = 'Normal';
    renderShinyGaps();
    setBgSaving(true);
    await saveSheetData('CommunityDayShinies', [['Pokemon','Have','Priority'], ...shinyGapsData]);
    setBgSaving(false);
    return;
  }

  if (isGotIt) {
    // Already confirmed got it in sheet — cycle back to Want
    row[1] = 'NO'; row[2] = 'Normal';
  } else if (currentPriority === 'HIGH') {
    // Entering "Got it!" — show grace period before hiding
    row[1] = 'YES'; row[2] = 'Normal';
    renderShinyGaps(); // re-render to show green "Got it!" card state
    setBgSaving(true);
    await saveSheetData('CommunityDayShinies', [['Pokemon','Have','Priority'], ...shinyGapsData]);
    setBgSaving(false);
    const timer = setTimeout(() => {
      shinyPendingGotIt.delete(idx);
      renderShinyGaps(); // now actually hide it
    }, 2500);
    shinyPendingGotIt.set(idx, timer);
    return;
  } else {
    row[2] = 'High';
  }

  renderShinyGaps();
  setBgSaving(true);
  await saveSheetData('CommunityDayShinies', [['Pokemon','Have','Priority'], ...shinyGapsData]);
  setBgSaving(false);
}

// ── Upcoming Community Days ────────────────────────────────────────────────────
const UPCOMING_CD_HEADERS = ['Pokemon','Status','Date','Notes'];

function renderUpcomingCDs() {
  const c = document.getElementById('upcomingCDContent');
  if (!c) return;
  if (!upcomingCDsData.length) {
    c.innerHTML = '<div class="empty-state">No upcoming Community Days added yet.</div>';
    return;
  }

  // Sort: Confirmed first, then Rumored
  const sorted = [...upcomingCDsData]
    .map((r, idx) => ({ r, idx }))
    .filter(({ r, idx }) => (r[1] || '') !== 'Got CD!' || ucdPendingGotIt.has(idx))
    .sort((a, b) => {
      const order = { 'Confirmed': 0, 'Rumored': 1, 'Got CD!': 2 };
      return (order[a.r[1]] ?? 1) - (order[b.r[1]] ?? 1);
    });

  if (!sorted.length) {
    c.innerHTML = '<div class="empty-state">All upcoming CDs collected! 🎉</div>';
    return;
  }

  c.innerHTML = '<div class="shiny-grid">' + sorted.map(({ r, idx }) => {
    const pokemon  = r[0] || '';
    const status   = r[1] || 'Rumored';
    const date     = r[2] || '';
    const notes    = r[3] || '';
    const isGotCD   = ucdPendingGotIt.has(idx);
    const confirmed  = status === 'Confirmed';

    const badgeBg    = isGotCD ? '#c6f6d5' : confirmed ? '#c6f6d5' : '#fef3c7';
    const badgeColor = isGotCD ? '#276749'  : confirmed ? '#276749' : '#92400e';
    const badgeIcon  = isGotCD ? '✓'        : confirmed ? '✅' : '🔮';
    const badgeText  = isGotCD ? 'Got CD!'  : status;
    const cardBorder = isGotCD ? '#48BB78'  : confirmed ? '#48BB78' : '#D69E2E';
    const cardBg     = isGotCD ? 'background:rgba(72,187,120,0.08);' : '';

    return `
    <div class="shiny-card" data-ucd-idx="${idx}" style="border:2px solid ${cardBorder};${cardBg}position:relative;cursor:pointer;" 
         onclick="cycleUpcomingCD(${idx})" title="Tap to cycle: Rumored → Confirmed → Got CD!">
      <img src="${sprite(r[0], null, null, true)}" class="shiny-sprite" onerror="handleSpriteError(this,'${r[0]}')" draggable="false">
      <div class="shiny-name">${pokemon}</div>
      <div style="display:inline-block;background:${badgeBg};color:${badgeColor};font-size:8px;font-weight:700;
                  padding:1px 5px;border-radius:8px;margin-top:2px;">${badgeIcon} ${badgeText}</div>
      ${date ? `<div style="font-size:8px;color:#718096;margin-top:2px;">${date}</div>` : ''}
      <div style="display:flex;gap:3px;justify-content:center;margin-top:4px;">
        <button class="btn-icon" style="font-size:9px;padding:1px 3px;" onclick="event.stopPropagation();editUpcomingCD(${idx})" title="Edit">✏️</button>
        <button class="btn-icon" style="font-size:9px;padding:1px 3px;" onclick="event.stopPropagation();deleteUpcomingCD(${idx})" title="Delete">🗑️</button>
      </div>
    </div>`;
  }).join('') + '</div>';
}

// Tracks upcoming CD cards pending disappearance
const ucdPendingGotIt = new Map();

async function cycleUpcomingCD(idx) {
  const row = upcomingCDsData[idx];
  if (!row) return;

  const card = document.querySelector(`.shiny-card[data-ucd-idx="${idx}"]`);
  if (card) { card.style.transform = 'scale(0.92)'; card.style.opacity = '0.7'; }
  setTimeout(() => {
    const c = document.querySelector(`.shiny-card[data-ucd-idx="${idx}"]`);
    if (c) { c.style.transform = ''; c.style.opacity = ''; }
  }, 150);

  const status = row[1] || 'Rumored';

  // If in grace period, tap again cycles back to Rumored
  if (ucdPendingGotIt.has(idx)) {
    clearTimeout(ucdPendingGotIt.get(idx));
    ucdPendingGotIt.delete(idx);
    row[1] = 'Rumored';
    renderUpcomingCDs();
    setBgSaving(true);
    await saveSheetData('UpcomingCDs', [UPCOMING_CD_HEADERS, ...upcomingCDsData]);
    setBgSaving(false);
    return;
  }

  if (status === 'Rumored')    { row[1] = 'Confirmed'; }
  else if (status === 'Confirmed') {
    // Enter grace period showing "Got CD!"
    row[1] = 'Got CD!';
    renderUpcomingCDs();
    setBgSaving(true);
    await saveSheetData('UpcomingCDs', [UPCOMING_CD_HEADERS, ...upcomingCDsData]);
    setBgSaving(false);
    const timer = setTimeout(() => {
      ucdPendingGotIt.delete(idx);
      renderUpcomingCDs();
    }, 2500);
    ucdPendingGotIt.set(idx, timer);
    return;
  } else if (status === 'Got CD!') {
    // Already past grace — cycle back to Rumored
    row[1] = 'Rumored';
  }

  renderUpcomingCDs();
  setBgSaving(true);
  await saveSheetData('UpcomingCDs', [UPCOMING_CD_HEADERS, ...upcomingCDsData]);
  setBgSaving(false);
}

function showAddUpcomingCDModal() {
  document.getElementById('upcomingCDModalTitle').textContent = 'Add Upcoming CD';
  document.getElementById('upcomingCDForm').reset();
  document.getElementById('upcomingCDEditIndex').value = '';
  document.getElementById('upcomingCDModal').style.display = 'block';
}

function editUpcomingCD(idx) {
  const r = upcomingCDsData[idx];
  document.getElementById('upcomingCDModalTitle').textContent = 'Edit Upcoming CD';
  document.getElementById('upcomingCDEditIndex').value = idx;
  document.getElementById('upcomingCDPokemon').value  = r[0] || '';
  document.getElementById('upcomingCDStatus').value   = r[1] || 'Rumored';
  document.getElementById('upcomingCDDate').value     = r[2] || '';
  document.getElementById('upcomingCDNotes').value    = r[3] || '';
  document.getElementById('upcomingCDModal').style.display = 'block';
}

async function saveUpcomingCD(e) {
  e.preventDefault();
  const btn = document.querySelector('#upcomingCDForm button[type="submit"]');
  setSaving(btn, true);
  const idx = document.getElementById('upcomingCDEditIndex').value;
  const row = [
    document.getElementById('upcomingCDPokemon').value.trim(),
    document.getElementById('upcomingCDStatus').value,
    document.getElementById('upcomingCDDate').value.trim(),
    document.getElementById('upcomingCDNotes').value.trim(),
  ];
  if (idx !== '') upcomingCDsData[idx] = row; else upcomingCDsData.push(row);
  const ok = await saveSheetData('UpcomingCDs', [UPCOMING_CD_HEADERS, ...upcomingCDsData]);
  setSaving(btn, false);
  if (ok) { closeModal('upcomingCDModal'); renderUpcomingCDs(); }
}

async function deleteUpcomingCD(idx) {
  if (!confirm(`Remove ${upcomingCDsData[idx][0]} from upcoming CDs?`)) return;
  upcomingCDsData.splice(idx, 1);
  setBgSaving(true);
  await saveSheetData('UpcomingCDs', [UPCOMING_CD_HEADERS, ...upcomingCDsData]);
  setBgSaving(false);
  renderUpcomingCDs();
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
    document.getElementById('puLegendary').checked ? 'TRUE' : 'FALSE',   // 7
    document.getElementById('puXLCandy').value || '',                      // 8
    document.getElementById('puSpeciesCandy').value || '',                 // 9
    document.getElementById('puStardust').value,                           // 10
    document.getElementById('puNeedLucky').checked ? 'TRUE':'FALSE',       // 11
    document.getElementById('puNotes').value,                              // 12
    document.getElementById('puPriority').value,                           // 13
    document.getElementById('puStatus').value,                             // 14
    document.getElementById('puArchived').value,                           // 15
    document.getElementById('puHundo').checked ? 'TRUE':'FALSE',           // 16
    document.getElementById('puShiny').checked ? 'TRUE':'FALSE',           // 17
    document.getElementById('puShadow').checked ? 'TRUE':'FALSE',          // 18
    document.getElementById('puIV').value,                                 // 19
    document.getElementById('puStardust').value,                           // 20 StardustCost
    document.getElementById('puRegional').value || '',                     // 21
    document.getElementById('puForm').value || '',                         // 22
    document.getElementById('puDMAX').checked ? 'TRUE':'FALSE',            // 23
    document.getElementById('puGMAX').checked ? 'TRUE':'FALSE'             // 24
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
  document.getElementById('lwShiny').checked = isTrue(r[4]);
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
    document.getElementById('lwNotes').value,
    document.getElementById('lwShiny').checked ? 'TRUE' : 'FALSE',
  ];
  if (idx !== '') { luckyWantsData[idx] = row; } else { luckyWantsData.push(row); }
  const ok = await saveSheetData('LuckyTradeWants', [WANTS_HEADERS, ...luckyWantsData]);
  setSaving(btn, false);
  if (ok) { closeModal('addLuckyWantModal'); renderLuckyWants(); }
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
  setSaving(btn, false);
  if (ok) { closeModal('addMirrorModal'); renderMirrorTargets(); }
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

function togglePVPSubsection(header) {
  const content = header.nextElementSibling;
  const icon = header.querySelector('.pvp-subsection-icon');
  const collapsed = content.classList.toggle('collapsed');
  if (icon) icon.style.transform = collapsed ? 'rotate(-90deg)' : '';
}

function renderPVP() {
  renderPVPLeague('GL');
  renderPVPLeague('UL');
}

function renderPVPLeague(league) {
  const isUL = league === 'UL';
  const rosterData = isUL ? pvpRosterULData : pvpRosterData;
  const metaData   = isUL ? pvpMetaULData   : pvpMetaData;
  const leagueLabel = isUL ? 'UL' : 'GL';
  const sheetName   = isUL ? 'PVPRosterUL' : 'PVPRoster';

  // Season bar (shared, only render once from GL call)
  if (!isUL) {
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
  }

  const rosterNames = new Set(rosterData.map(r => (r[0]||'').toLowerCase().trim()));

  // ── Meta snapshot ──────────────────────────────────────────────────────────
  const metaElId  = isUL ? 'pvpMetaContentUL'   : 'pvpMetaContent';
  const metaLblId = isUL ? 'pvpMetaCountLabelUL' : 'pvpMetaCountLabel';
  const metaEl  = document.getElementById(metaElId);
  const metaLbl = document.getElementById(metaLblId);

  if (metaEl) {
    if (!metaData.length) {
      metaEl.innerHTML = `<div style="font-size:12px;color:#999;padding:6px 0;">No meta data yet — add entries to PVPMeta${isUL?'UL':''} sheet</div>`;
      if (metaLbl) metaLbl.textContent = `Top ${leagueLabel}`;
    } else {
      const metaSorted = [...metaData].sort((a,b) => (parseInt(a[0])||99) - (parseInt(b[0])||99));
      const haveCount  = metaSorted.filter(r => rosterNames.has((r[1]||'').toLowerCase().trim())).length;
      if (metaLbl) metaLbl.textContent = `Top ${metaSorted.length} ${leagueLabel}`;
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
              <div id="metacard-${leagueLabel}-${rank}" style="display:flex;flex-direction:column;align-items:center;
                   width:58px;cursor:pointer;position:relative;" onclick="pvpMetaCardTap(${rank},'${pokemon.replace(/'/g,"\\'")}',this,'${league}')">
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
  const contentElId = isUL ? 'pvpRosterContentUL' : 'pvpRosterContent';
  const c = document.getElementById(contentElId);
  if (!c) return;

  if (!rosterData.length) {
    c.innerHTML = `<div class="empty-state">📝 No Pokémon yet — add your ${leagueLabel} roster!</div>`;
    return;
  }

  const metaRankMap = {};
  metaData.forEach(r => { if (r[1]) metaRankMap[r[1].toLowerCase().trim()] = parseInt(r[0]) || null; });

  const filterReadyId = isUL ? 'pvpFilterReadyUL' : 'pvpFilterReady';
  const filterMetaId  = isUL ? 'pvpFilterMetaUL'  : 'pvpFilterMeta';
  const filterReady = (document.getElementById(filterReadyId)||{}).value || 'all';
  const filterMeta  = (document.getElementById(filterMetaId)||{}).value  || 'all';

  const sorted = rosterData
    .map((r, idx) => ({r, idx}))
    .filter(({r}) => {
      const ready  = isTrue(r[3]);
      const inMeta = !!metaRankMap[(r[0]||'').toLowerCase().trim()];
      if (filterReady === 'ready'    && !ready)  return false;
      if (filterReady === 'notready' && ready)    return false;
      if (filterMeta  === 'meta'     && !inMeta)  return false;
      if (filterMeta  === 'nonmeta'  && inMeta)   return false;
      return true;
    })
    .sort((a, b) => (parseInt(a.r[1])||9999) - (parseInt(b.r[1])||9999));

  if (!sorted.length) {
    c.innerHTML = '<div class="empty-state">No Pokémon match the current filters.</div>';
    return;
  }

  c.innerHTML = sorted.map(({r, idx}) => {
    const pokemon  = r[0] || '';
    const ivRank   = r[2] || '';
    const ready    = isTrue(r[3]);
    const notes    = r[4] || '';
    const types    = r[5] || '';
    const metaRank = metaRankMap[pokemon.toLowerCase().trim()];

    if (!types && pokemon) {
      const clean = pvpSpriteSlug(pokemon);
      getPokemonData(clean).then(data => {
        if (data && data.types && !rosterData[idx][5]) {
          rosterData[idx][5] = data.types;
          renderPVPLeague(league);
        }
      });
    }

    const typeBg      = types ? getTypeBackground(types) : '';
    const readyBorder = ready ? '#48BB78' : '#FC8181';
    const cardStyle   = `border-left-color:${readyBorder};${typeBg ? `background:${typeBg};` : ''}align-items:center;`;

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
    <div id="pvp-card-${league}-${idx}" class="list-item" style="${cardStyle}padding-top:5px;padding-bottom:5px;">
      <img class="list-item-sprite pvp-sprite" src="${sprite(spriteSlug)}" onerror="handleSpriteError(this,'${spriteSlug}')"
           style="width:36px;height:36px;">
      <div class="list-item-content" style="gap:2px;">
        <div class="pvp-line1" style="display:flex;align-items:center;gap:5px;flex-wrap:wrap;">
          <span style="font-weight:700;font-size:13px;">${pokemon}</span>
          ${readyLabel}
        </div>
        <div class="pvp-line2" style="display:flex;align-items:center;gap:4px;flex-wrap:wrap;">
          ${typePills}
          <span class="pvp-line1-badges" style="display:flex;align-items:center;gap:4px;flex-wrap:wrap;">
            ${metaBadge}${ivRankBadge}
          </span>
          ${notes ? `<span style="font-size:10px;color:#718096;">· ${notes}</span>` : ''}
        </div>
      </div>
      <div class="list-item-actions">
        <button class="btn-icon" onclick="togglePVPReady(${idx},'${league}')" title="${ready?'Mark not ready':'Mark ready'}">${ready?'🔄':'✅'}</button>
        <button class="btn-icon" onclick="editPVP(${idx},'${league}')" title="Edit">✏️</button>
        <button class="btn-icon" onclick="deletePVP(${idx},'${league}')" title="Delete">🗑️</button>
      </div>
    </div>`;
  }).join('');
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
function pvpMetaCardTap(rank, pokemon, el, league = 'GL') {
  document.querySelectorAll('.meta-card-overlay').forEach(o => o.remove());

  const overlay = document.createElement('div');
  overlay.className = 'meta-card-overlay';
  overlay.style.cssText = `
    position:absolute;inset:0;background:rgba(85,60,154,0.92);border-radius:6px;
    display:flex;flex-direction:column;align-items:center;justify-content:center;
    gap:4px;z-index:10;padding:3px;`;
  overlay.innerHTML = `
    <div style="font-size:9px;color:white;font-weight:700;text-align:center;line-height:1.2;">Add to roster?</div>
    <button onclick="pvpMetaCardConfirm(${rank},'${pokemon.replace(/'/g,"\\'")}','${league}');event.stopPropagation();"
            style="background:#48BB78;color:white;border:none;border-radius:4px;font-size:10px;padding:2px 6px;cursor:pointer;font-weight:700;">✓ Add</button>
    <button onclick="this.closest('.meta-card-overlay').remove();event.stopPropagation();"
            style="background:rgba(255,255,255,0.2);color:white;border:none;border-radius:4px;font-size:10px;padding:2px 6px;cursor:pointer;">✕</button>`;
  el.style.position = 'relative';
  el.appendChild(overlay);
}

function pvpMetaCardConfirm(rank, pokemon, league = 'GL') {
  document.querySelectorAll('.meta-card-overlay').forEach(o => o.remove());
  showAddPVPModal(pokemon, rank, league);
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
  const league    = document.getElementById('pvpEditLeague').value || 'GL';
  const meta      = league === 'UL' ? pvpMetaULData : pvpMetaData;
  if (!name || rankField.value) return;
  const metaRow = meta.find(r => (r[1]||'').toLowerCase().trim() === name);
  if (metaRow) {
    rankField.value = metaRow[0];
    rankField.style.background = '#F0FFF4';
    setTimeout(() => rankField.style.background = '', 1500);
  }
}

function showAddPVPModal(prefillPokemon = '', prefillRank = '', league = 'GL') {
  document.getElementById('pvpModalTitle').textContent = `Add ${league} Pokémon`;
  document.getElementById('pvpForm').reset();
  document.getElementById('pvpEditIndex').value  = '';
  document.getElementById('pvpEditLeague').value = league;
  document.getElementById('pvpSpritePreviewDiv').style.display = 'none';
  if (prefillPokemon) {
    document.getElementById('pvpPokemon').value     = prefillPokemon;
    document.getElementById('pvpPVPpokeRank').value = prefillRank;
    pvpSpritePreview();
  }
  document.getElementById('addPVPModal').style.display = 'block';
}

function editPVP(idx, league = 'GL') {
  const rosterData = league === 'UL' ? pvpRosterULData : pvpRosterData;
  const r = rosterData[idx];
  document.getElementById('pvpModalTitle').textContent = `Edit ${league} Pokémon`;
  document.getElementById('pvpEditIndex').value  = idx;
  document.getElementById('pvpEditLeague').value = league;
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
  const idx    = document.getElementById('pvpEditIndex').value;
  const league = document.getElementById('pvpEditLeague').value || 'GL';
  const rosterData = league === 'UL' ? pvpRosterULData : pvpRosterData;
  const sheetName  = league === 'UL' ? 'PVPRosterUL'  : 'PVPRoster';
  const existingTypes = idx !== '' ? (rosterData[idx][5] || '') : '';
  const row = [
    document.getElementById('pvpPokemon').value.trim(),
    document.getElementById('pvpPVPpokeRank').value || '',
    document.getElementById('pvpIVRank').value.trim(),
    document.getElementById('pvpReady').checked ? 'TRUE' : 'FALSE',
    document.getElementById('pvpNotes').value.trim(),
    existingTypes,
  ];
  if (idx !== '') { rosterData[idx] = row; } else { rosterData.push(row); }
  const ok = await saveSheetData(sheetName, [PVP_HEADERS, ...rosterData]);
  setSaving(btn, false);
  if (ok) { closeModal('addPVPModal'); renderPVPLeague(league); }
}

async function togglePVPReady(idx, league = 'GL') {
  const rosterData = league === 'UL' ? pvpRosterULData : pvpRosterData;
  const sheetName  = league === 'UL' ? 'PVPRosterUL'  : 'PVPRoster';
  rosterData[idx][3] = isTrue(rosterData[idx][3]) ? 'FALSE' : 'TRUE';
  setBgSaving(true);
  await saveSheetData(sheetName, [PVP_HEADERS, ...rosterData]);
  setBgSaving(false);
  renderPVPLeague(league);
}

async function deletePVP(idx, league = 'GL') {
  const rosterData = league === 'UL' ? pvpRosterULData : pvpRosterData;
  const sheetName  = league === 'UL' ? 'PVPRosterUL'  : 'PVPRoster';
  if (!confirm(`Remove ${rosterData[idx][0]} from ${league} roster?`)) return;
  rosterData.splice(idx, 1);
  setBgSaving(true);
  await saveSheetData(sheetName, [PVP_HEADERS, ...rosterData]);
  setBgSaving(false);
  renderPVPLeague(league);
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

  applySavedOrder();
  loadAllData();

  // ── Pull-to-refresh (mobile) ──────────────────────────────────────────────
  let ptrStartY = 0, ptrTriggered = false;
  const PTR_THRESHOLD = 80; // px to pull before triggering

  const ptrIndicator = document.createElement('div');
  ptrIndicator.id = 'ptr-indicator';
  ptrIndicator.style.cssText = `
    position:fixed;top:0;left:0;right:0;z-index:9999;
    display:flex;align-items:center;justify-content:center;gap:8px;
    background:linear-gradient(135deg,#667eea,#764ba2);
    color:white;font-size:13px;font-weight:600;
    height:0;overflow:hidden;transition:height 0.15s ease;
    pointer-events:none;
  `;
  ptrIndicator.innerHTML = '<span id="ptr-icon">↓</span><span id="ptr-text">Pull to refresh</span>';
  document.body.prepend(ptrIndicator);

  document.addEventListener('touchstart', e => {
    ptrStartY = e.touches[0].clientY;
    ptrTriggered = false;
  }, { passive: true });

  document.addEventListener('touchmove', e => {
    if (window.scrollY > 0) return; // only trigger at top of page
    const dy = e.touches[0].clientY - ptrStartY;
    if (dy <= 0) return;
    const pct = Math.min(dy / PTR_THRESHOLD, 1);
    ptrIndicator.style.height = Math.min(dy * 0.4, 44) + 'px';
    document.getElementById('ptr-icon').textContent = pct >= 1 ? '↺' : '↓';
    document.getElementById('ptr-text').textContent = pct >= 1 ? 'Release to refresh' : 'Pull to refresh';
    ptrTriggered = pct >= 1;
  }, { passive: true });

  document.addEventListener('touchend', async () => {
    ptrIndicator.style.height = '0';
    if (!ptrTriggered) return;
    document.getElementById('ptr-icon').textContent = '⏳';
    ptrIndicator.style.height = '44px';
    await loadAllData();
    ptrIndicator.style.height = '0';
    ptrTriggered = false;
  });
};
window.onclick = e => { if (e.target.classList.contains('modal')) e.target.style.display='none'; };
