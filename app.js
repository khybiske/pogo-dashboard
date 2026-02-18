// Configuration
const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxeEnHA5MtsH2yIzsKOMB4Irz9R1Wqsj6SrcsZjjSEcF2McHJYQxpUhMbcFtXGf80ybIw/exec';
const SHEET_URL  = 'https://docs.google.com/spreadsheets/d/1E9tGFWTFWHNkN6OheYwQCCuXDdz3oWAmbWTStoufz_w/edit';

// Data arrays
let powerUpData=[], candyData=[], tradePlansData=[], shinyGapsData=[], eventsData=[];

// Pokemon sprite lookup
const POKEMON_IDS = {
  'bulbasaur':1,'ivysaur':2,'venusaur':3,'charmander':4,'charmeleon':5,'charizard':6,
  'squirtle':7,'wartortle':8,'blastoise':9,'weedle':13,'kakuna':14,'beedrill':15,
  'pikachu':25,'raichu':26,'sandshrew':27,'sandslash':28,'clefairy':35,'clefable':36,
  'abra':63,'kadabra':64,'alakazam':65,'machop':66,'machoke':67,'machamp':68,
  'geodude':74,'graveler':75,'golem':76,'slowpoke':79,'slowbro':80,
  'gastly':92,'haunter':93,'gengar':94,'onix':95,'rhyhorn':111,'rhydon':112,
  'electabuzz':125,'magmar':126,'magikarp':129,'gyarados':130,'eevee':133,'porygon':137,
  'dratini':147,'dragonair':148,'dragonite':149,'mewtwo':150,'mew':151,
  'chikorita':152,'bayleef':153,'meganium':154,'cyndaquil':155,'quilava':156,'typhlosion':157,
  'totodile':158,'croconaw':159,'feraligatr':160,'mareep':179,'flaaffy':180,'ampharos':181,
  'hoppip':187,'skiploom':188,'jumpluff':189,'swinub':220,'piloswine':221,
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
  'litwick':607,'lampent':608,'chandelure':609,'deino':633,'zweilous':634,'hydreigon':635,
  'cobalion':638,'terrakion':639,'virizion':640,'tornadus':641,'thundurus':642,
  'reshiram':643,'zekrom':644,'landorus':645,'kyurem':646,'genesect':649,
  'chespin':650,'quilladin':651,'chesnaught':652,'fennekin':653,'braixen':654,'delphox':655,
  'froakie':656,'frogadier':657,'greninja':658,'fletchling':661,'fletchinder':662,'talonflame':663,
  'xerneas':716,'yveltal':717,'stufful':759,'bewear':760
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

// Candy costs per power-up (normal candy up to L40, XL candy L40+)
const CANDY_COST_PER_LEVEL = {
  1: 1, 2: 1, 3: 1, 4: 1, 5: 1,
  6: 1, 7: 1, 8: 1, 9: 1, 10: 1,
  11: 2, 12: 2, 13: 2, 14: 2, 15: 2,
  16: 2, 17: 2, 18: 2, 19: 2, 20: 2,
  21: 3, 22: 3, 23: 3, 24: 3, 25: 3,
  26: 4, 27: 4, 28: 4, 29: 4, 30: 4,
  31: 6, 32: 8, 33: 10, 34: 12, 35: 15,
  36: 10, 37: 10, 38: 10, 39: 10, 40: 10
};

const XL_CANDY_COST_PER_LEVEL = {
  41: 10, 42: 10, 43: 10, 44: 10, 45: 10,
  46: 12, 47: 12, 48: 12, 49: 12, 50: 12
};

function calculateLevelFromStardust() {
  let stardust = parseInt(document.getElementById('puStardust').value) || 0;
  const isLucky = document.getElementById('puLucky').checked;
  const levelField = document.getElementById('puCurrentLevel');
  const helperText = document.getElementById('stardustHelper');
  
  if (stardust === 0) {
    helperText.textContent = '';
    return;
  }
  
  // Lucky Pokemon cost half
  if (isLucky) stardust = stardust * 2;
  
  // Handle "K" notation (10K, 11K, etc.)
  let level = null;
  if (stardust >= 10000) {
    const kValue = Math.floor(stardust / 1000);
    level = STARDUST_TO_LEVEL[kValue] || STARDUST_TO_LEVEL[stardust];
  } else {
    level = STARDUST_TO_LEVEL[stardust];
  }
  
  if (level) {
    levelField.value = level;
    helperText.textContent = `💡 Level ${level} (${isLucky ? 'Lucky' : 'Normal'} cost)`;
    helperText.style.color = '#48BB78';
  } else {
    helperText.textContent = '⚠️ Stardust cost not recognized';
    helperText.style.color = '#DD6B20';
  }
}

function calculateCandyNeeded(currentLevel, targetLevel) {
  let regularCandy = 0;
  let xlCandy = 0;
  
  const start = Math.floor(currentLevel);
  const end = Math.floor(targetLevel);
  
  // Count power-ups (each 0.5 level = 1 power-up)
  const powerUps = (targetLevel - currentLevel) * 2;
  
  for (let i = 0; i < powerUps; i++) {
    const lvl = start + Math.floor(i / 2);
    if (lvl < 40) {
      regularCandy += CANDY_COST_PER_LEVEL[lvl] || 0;
    } else {
      xlCandy += XL_CANDY_COST_PER_LEVEL[lvl] || 0;
    }
  }
  
  return { regularCandy, xlCandy };
}

function getPokemonId(name) {
  const c = name.toLowerCase().trim().replace(/^(alolan|galarian|hisuian|shadow|mega) /,'');
  return POKEMON_IDS[c] || 25;
}

function sprite(name) {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${getPokemonId(name)}.png`;
}

function autoFillTypes() {
  const name = document.getElementById('puPokemon').value.toLowerCase().trim()
    .replace(/^(alolan|galarian|hisuian|shadow|mega) /,'');
  const types = POKEMON_TYPES[name];
  const typeField = document.getElementById('puTypes');
  const autoInfo = document.getElementById('typeAutoFill');
  
  if (types) {
    typeField.value = types;
    autoInfo.textContent = '✓ Types auto-filled';
    autoInfo.style.color = '#48BB78';
  } else {
    autoInfo.textContent = '';
  }
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

function showAddPowerUpModal() {
  document.getElementById('powerUpModalTitle').textContent = 'Add Power-Up Priority';
  document.getElementById('powerUpForm').reset();
  document.getElementById('puEditIndex').value = '';
  document.getElementById('typeAutoFill').textContent = '';
  document.getElementById('stardustHelper').textContent = '';
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
  document.getElementById('typeAutoFill').textContent = '';
  document.getElementById('stardustHelper').textContent = '';
  document.getElementById('addPowerUpModal').style.display = 'block';
}

function showAddCandyModal()  { document.getElementById('candyForm').reset();  document.getElementById('addCandyModal').style.display='block'; }
function showAddTradeModal()  { document.getElementById('tradeForm').reset();  document.getElementById('addTradeModal').style.display='block'; }

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

  const [pu, candy, trades, shinies, events] = await Promise.all([
    safe('PowerUpPriority'), safe('RareCandyPriority'), safe('LuckyTradePlans'),
    safe('CommunityDayShinies'), safe('CurrentEvents')
  ]);

  powerUpData    = pu.length     > 1 ? pu.slice(1)     : [];
  candyData      = candy.length  > 1 ? candy.slice(1)  : [];
  tradePlansData = trades.length > 1 ? trades.slice(1) : [];
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
      saveSheetData(sheetName,[headers,...arr]);
      renderFn();
    });
  });
}

// Power-Up
const PU_HEADERS = ['Pokemon','Types','Lucky','Has Elite','Needs Elite','Current Level',
                    'Target Level','Role','XL Candy','Stardust','Need Lucky','Notes',
                    'Priority','Status','Archived','Hundo','Shiny','Shadow','IV%','StardustCost'];
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
    const isArch = arch === 'TRUE';
    const curLevel = parseFloat(curLv) || 0;
    const tgtLevel = parseFloat(tgtLv) || 0;

    const types_html = (types||'').split(',').filter(t=>t.trim()).map(t=>{
      const key = t.trim().toLowerCase();
      return `<span class="type-text type-${key}">${t.trim().toUpperCase()}</span>`;
    }).join(' ');

    const typesBg = getTypeBackground(types);

    const b = [];
    
    // Status icons FIRST (before priority badge)
    if (lucky==='TRUE')    b.push('<span class="icon" title="Lucky">🍀</span>');
    if (hundo==='TRUE')    b.push('<span class="icon" title="Hundo">💯</span>');
    if (shiny==='TRUE')    b.push('<span class="icon" title="Shiny">✨</span>');
    if (shadow==='TRUE')   b.push('<span class="icon" title="Shadow">👤</span>');
    if (hasEl==='TRUE')    b.push('<span class="icon" title="Has Legacy Move">£</span>');
    if (needEl==='TRUE')   b.push('<span class="icon" title="Needs Legacy Move">❗</span>');
    if (needLucky==='TRUE')b.push('<span class="icon" title="Need Lucky Trade">🤝</span>');
    
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
    <div class="list-item" draggable="true" data-index="${i}" style="background:${typesBg};${isArch?'opacity:0.5;':''}">
      <div class="list-item-left">
        <span class="drag-handle">☰</span>
        <img class="list-item-sprite" src="${sprite(pokemon)}" onerror="this.src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png'">
      </div>
      <div class="list-item-content">
        <div class="list-item-line1">${pokemon} ${b.join('')}</div>
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
      <img class="list-item-sprite" src="${sprite(r[0])}" onerror="this.src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png'" style="align-self:center;">
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
const TRADE_HEADERS = ['Friend','They Want','You Want','Notes','Status'];

function renderTrades() {
  const ac = document.getElementById('autoLuckyWants');
  const pc = document.getElementById('tradePlansContent');

  const wants = powerUpData.filter(r=>r[10]==='TRUE' && r[14]!=='TRUE');
  ac.innerHTML = wants.length ? wants.map(r=>`
    <div class="list-item" style="border-left-color:#FFD700;cursor:default;">
      <img class="list-item-sprite" src="${sprite(r[0])}" onerror="this.src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png'">
      <div class="list-item-content">
        <div class="list-item-line1">${r[0]}</div>
        <div class="list-item-line2">For: ${r[7]} (Lv${r[6]})${r[11]?' • '+r[11]:''}</div>
      </div>
    </div>`).join('')
  : '<div class="empty-state">💡 Check "Need Lucky Trade" in Power-Up Priority</div>';

  if (!tradePlansData.length) { pc.innerHTML='<div class="empty-state">📝 No manual trade plans yet</div>'; return; }
  pc.innerHTML = tradePlansData.map((r,idx)=>`
    <div class="list-item" draggable="true" data-index="${idx}">
      <div class="list-item-left">
        <span class="drag-handle">☰</span>
        <span style="font-size:28px;">👥</span>
      </div>
      <div class="list-item-content">
        <div class="list-item-line1">${r[0]}</div>
        <div class="list-item-line2">They want: ${r[1]||'TBD'} • You want: ${r[2]||'TBD'} • ${r[4]}${r[3]?' • '+r[3]:''}</div>
      </div>
      <div class="list-item-actions">
        <button class="btn-icon" onclick="deleteTrade(${idx})" title="Delete">🗑️</button>
      </div>
    </div>`).join('');

  bindDrag(pc, tradePlansData, renderTrades, 'LuckyTradePlans', TRADE_HEADERS);
}

// Shinies
function renderShinyGaps() {
  const c = document.getElementById('shinyGapsContent');
  if (!shinyGapsData.length) { c.innerHTML='<div class="empty-state">📝 Update Google Sheet</div>'; return; }
  const missing = shinyGapsData.filter(r=>{ const v=(r[1]||'').toUpperCase(); return v==='N'||v==='NO'||v==='FALSE'; });
  if (!missing.length) { c.innerHTML='<div class="empty-state">🎉 All Community Day shinies collected!</div>'; return; }
  c.innerHTML = '<div class="shiny-grid">'+missing.map(r=>`
    <div class="shiny-card">
      <img src="${sprite(r[0])}" class="shiny-sprite" onerror="this.src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png'">
      <div class="shiny-name">${r[0]}</div>
      <div class="shiny-label">⭐ Want</div>
    </div>`).join('')+'</div>';
}

// Save/mutate
async function savePowerUp(e) {
  e.preventDefault();
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
    document.getElementById('puStardust').value
  ];
  
  if (idx !== '') { powerUpData[idx] = row; } else { powerUpData.push(row); }
  
  // Pad all existing rows to match header length
  const paddedData = powerUpData.map(r => {
    while (r.length < PU_HEADERS.length) r.push('');
    return r;
  });
  
  const ok = await saveSheetData('PowerUpPriority',[PU_HEADERS,...paddedData]);
  if (ok) { closeModal('addPowerUpModal'); renderPowerUp(); renderTrades(); }
}

async function deletePowerUp(idx) {
  if (!confirm('Permanently delete this entry?')) return;
  powerUpData.splice(idx,1);
  await saveSheetData('PowerUpPriority',[PU_HEADERS,...powerUpData]);
  renderPowerUp(); renderTrades();
}

async function saveCandy(e) {
  e.preventDefault();
  candyData.push([
    document.getElementById('candyPokemon').value,
    document.getElementById('candyCurrent').value,
    document.getElementById('candyTarget').value,
    document.getElementById('candyNotes').value
  ]);
  const ok = await saveSheetData('RareCandyPriority',[['Pokemon','Current','Target','Notes'],...candyData]);
  if (ok) { closeModal('addCandyModal'); renderCandy(); }
}

async function updateCandy(idx, delta) {
  candyData[idx][1] = Math.max(0, (parseInt(candyData[idx][1])||0)+delta).toString();
  await saveSheetData('RareCandyPriority',[['Pokemon','Current','Target','Notes'],...candyData]);
  renderCandy();
}

async function deleteCandy(idx) {
  if (!confirm('Delete this entry?')) return;
  candyData.splice(idx,1);
  await saveSheetData('RareCandyPriority',[['Pokemon','Current','Target','Notes'],...candyData]);
  renderCandy();
}

async function saveTrade(e) {
  e.preventDefault();
  tradePlansData.push([
    document.getElementById('tradeFriend').value,
    document.getElementById('tradeTheyWant').value,
    document.getElementById('tradeYouWant').value,
    document.getElementById('tradeNotes').value,
    document.getElementById('tradeStatus').value
  ]);
  const ok = await saveSheetData('LuckyTradePlans',[TRADE_HEADERS,...tradePlansData]);
  if (ok) { closeModal('addTradeModal'); renderTrades(); }
}

async function deleteTrade(idx) {
  if (!confirm('Delete this trade plan?')) return;
  tradePlansData.splice(idx,1);
  await saveSheetData('LuckyTradePlans',[TRADE_HEADERS,...tradePlansData]);
  renderTrades();
}

// Init
window.onload = loadAllData;
window.onclick = e => { if (e.target.classList.contains('modal')) e.target.style.display='none'; };
