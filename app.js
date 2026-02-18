700;cursor:default;">
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
