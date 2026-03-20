'use strict';

// ═══════════════════════════════════════════════════════════════
//  COMP BUILDER — comp-builder-main.js
//
//  FIXES en esta versión:
//  [1] Estructura hex-slot: ítems fuera del mask → visibles
//  [2] event.currentTarget guardado antes del setTimeout
//  [3] Panel equipamiento funcional (id="equipPanel" en HTML)
//  [4] Clipboard: execCommand primero (funciona en HTTP)
//  [5] Código del juego TFT (Team Planner format oficial)
// ═══════════════════════════════════════════════════════════════

const BASE = 'https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/';
const SA   = 'https://sunderarmor.com/items/';
const ROWS = 4;
const COLS = 7;

// ── CAMPEONES ────────────────────────────────────────────────────
const CHAMPIONS = {
  // Costo 1
  Viego:       { id:'tft16_viego',          cost:1 },
  Sona:        { id:'tft16_sona',           cost:1 },
  Anivia:      { id:'tft16_anivia',         cost:1 },
  Blitz:       { id:'tft16_blitzcrank',     cost:1 },
  Briar:       { id:'tft16_briar',          cost:1 },
  Caitlyn:     { id:'tft16_caitlyn',        cost:1 },
  Illaoi:      { id:'tft16_illaoi',         cost:1 },
  Jarvaniv:    { id:'tft16_jarvaniv',       cost:1 },
  Jhin:        { id:'tft16_jhin',           cost:1 },
  Kogmaw:      { id:'tft16_kogmaw',         cost:1 },
  Lulu:        { id:'tft16_lulu',           cost:1 },
  Qiyana:      { id:'tft16_qiyana',         cost:1 },
  Rumble:      { id:'tft16_rumble',         cost:1 },
  Shen:        { id:'tft16_shen',           cost:1 },
  // Costo 2
  Neeko:       { id:'tft16_neeko',          cost:2 },
  Vi:          { id:'tft16_vi',             cost:2 },
  Ashe:        { id:'tft16_ashe',           cost:2 },
  Yorick:      { id:'tft16_yorick',         cost:2 },
  XinZhao:     { id:'tft16_xinzhao',        cost:2 },
  Poppy:       { id:'tft16_poppy',          cost:2 },
  Aphelios:    { id:'tft16_aphelios',       cost:2 },
  Bardo:       { id:'tft16_bardo',          cost:2 },
  ChoGath:     { id:'tft16_chogath',        cost:2 },
  Ekko:        { id:'tft16_ekko',           cost:2 },
  Graves:      { id:'tft16_graves',         cost:2 },
  Orianna:     { id:'tft16_orianna',        cost:2 },
  RekSai:      { id:'tft16_reksai',         cost:2 },
  Sion:        { id:'tft16_sion',           cost:2 },
  Teemo:       { id:'tft16_teemo',          cost:2 },
  Tristana:    { id:'tft16_tristana',       cost:2 },
  Tryndamere:  { id:'tft16_tryndamere',     cost:2 },
  TwistedFate: { id:'tft16_twistedfate',    cost:2 },
  Yasuo:       { id:'tft16_yasuo',          cost:2 },
  // Costo 3
  Loris:       { id:'tft16_beardy',         cost:3 },  // Beardy en CDragon
  Gwen:        { id:'tft16_gwen',           cost:3 },
  Jinx:        { id:'tft16_jinx',           cost:3 },
  Nautilus:    { id:'tft16_nautilus',       cost:3 },
  Kennen:      { id:'tft16_kennen',         cost:3 },
  Ahri:        { id:'tft16_ahri',           cost:3 },
  Kobuko:      { id:'tft16_kobuko',         cost:3 },
  Sejuani:     { id:'tft16_sejuani',        cost:3 },
  Jarvan:      { id:'tft16_jarvaniv',       cost:3 },
  Draven:      { id:'tft16_draven',         cost:3 },
  Darius:      { id:'tft16_darius',         cost:3 },
  DrMundo:     { id:'tft16_drmundo',        cost:3 },
  Gangplank:   { id:'tft16_gangplank',      cost:3 },
  LeBlanc:     { id:'tft16_leblanc',        cost:3 },
  Leona:       { id:'tft16_leona',          cost:3 },
  Malzahar:    { id:'tft16_malzahar',       cost:3 },
  Milio:       { id:'tft16_milio',          cost:3 },
  Vayne:       { id:'tft16_vayne',          cost:3 },
  Zoe:         { id:'tft16_zoe',            cost:3 },
  // Costo 4
  Taric:       { id:'tft16_taric',          cost:4 },
  Swain:       { id:'tft16_swain',          cost:4 },
  Lux:         { id:'tft16_lux',            cost:4 },
  Ambessa:     { id:'tft16_ambessa',        cost:4 },
  Braum:       { id:'tft16_braum',          cost:4 },
  Kalista:     { id:'tft16_kalista',        cost:4 },
  Wukong:      { id:'tft16_wukong',         cost:4 },
  MF:          { id:'tft16_missfortune',    cost:4 },
  Warwick:     { id:'tft16_warwick',        cost:4 },
  Skarner:     { id:'tft16_skarner',        cost:4 },
  Yone:        { id:'tft16_yone',           cost:4 },
  Garen:       { id:'tft16_garen',          cost:4 },
  Lissandra:   { id:'tft16_lissandra',      cost:4 },
  Seraphine:   { id:'tft16_seraphine',      cost:4 },
  BelVeth:     { id:'tft16_belveth',        cost:4 },
  Diana:       { id:'tft16_diana',          cost:4 },
  Fizz:        { id:'tft16_fizz',           cost:4 },
  KaiSa:       { id:'tft16_kaisa',          cost:4 },
  Nasus:       { id:'tft16_nasus',          cost:4 },
  Nidalee:     { id:'tft16_nidalee',        cost:4 },
  Renekton:    { id:'tft16_renekton',       cost:4 },
  Singed:      { id:'tft16_singed',         cost:4 },
  Veigar:      { id:'tft16_veigar',         cost:4 },
  Yunara:      { id:'tft16_yunara',         cost:4 },
  // Costo 5
  Annie:       { id:'tft16_annie',          cost:5 },
  Tibbers:     { id:'tft16_annietibbers',   cost:5 },
  Shyvana:     { id:'tft16_shyvana',        cost:5 },
  Fiddle:      { id:'tft16_fiddlesticks',   cost:5 },
  Mel:         { id:'tft16_mel',            cost:5 },
  Thresh:      { id:'tft16_thresh',         cost:5 },
  Ornn:        { id:'tft16_ornn',           cost:5 },
  Lucian:      { id:'tft16_lucian',         cost:5 },
  TahmK:       { id:'tft16_tahmkench',      cost:5 },
  Kindred:     { id:'tft16_kindred',        cost:5 },
  Aatrox:      { id:'tft16_aatrox',         cost:5 },
  Sett:        { id:'tft16_sett',           cost:5 },
  Zilean:      { id:'tft16_zilean',         cost:5 },
  Volibear:    { id:'tft16_volibear',       cost:5 },
  AurelionSol: { id:'tft16_aurelionsol',    cost:5 },
  Azir:        { id:'tft16_azir',           cost:5 },
  Brock:       { id:'tft16_brock',          cost:5 },
  Galio:       { id:'tft16_galio',          cost:5 },
  THex:        { id:'tft16_thex',           cost:5 },
  Xerath:      { id:'tft16_xerath',         cost:5 },
  // Costo 7 (Prismatic / especial)
  Sylas:       { id:'tft16_sylas',          cost:7 },
  Ryze:        { id:'tft16_ryze',           cost:7 },
};

function champImgUrl(key) {
  const ch = CHAMPIONS[key];
  if (!ch) return '';
  if (ch.id === 'tft16_annietibbers')
    return `${BASE}assets/characters/tft16_annietibbers/hud/tft16_annietibbers_square.tft_set16.png`;
  return `${BASE}assets/characters/${ch.id}/hud/${ch.id}_square.tft_set16.jpg`;
}

// ── OBJETOS ───────────────────────────────────────────────────────
const ITEMS = {
  Evenshroud:         { label:'Evenshroud',          tier:'S', e:'💜' },
  GuinsoosRageblade:  { label:"Guinsoo's Rageblade",  tier:'S', e:'⚡' },
  JeweledGauntlet:    { label:'Jeweled Gauntlet',     tier:'S', e:'💎' },
  KrakensFury:        { label:"Kraken's Fury",        tier:'S', e:'🔱' },
  Morellonomicon:     { label:'Morellonomicon',        tier:'S', e:'☠' },
  NashorsTooth:       { label:"Nashor's Tooth",       tier:'S', e:'🦷' },
  SpearofShojin:      { label:'Spear of Shojin',      tier:'S', e:'⚔' },
  SpiritVisage:       { label:'Spirit Visage',         tier:'S', e:'🌿' },
  SunfireCape:        { label:'Sunfire Cape',          tier:'S', e:'🔥' },
  TitansResolve:      { label:"Titan's Resolve",      tier:'S', e:'🛡' },
  VoidStaff:          { label:'Void Staff',            tier:'S', e:'🌀' },
  RedBuff:            { label:'Red Buff',              tier:'S', e:'🔴' },
  AdaptiveHelm:       { label:'Adaptive Helm',        tier:'A', e:'⛑' },
  ArchangelsStaff:    { label:"Archangel's Staff",    tier:'A', e:'👼' },
  Bloodthirster:      { label:'Bloodthirster',         tier:'A', e:'🩸' },
  BrambleVest:        { label:'Bramble Vest',          tier:'A', e:'🛡' },
  Deathblade:         { label:'Deathblade',            tier:'A', e:'⚔' },
  DragonsClaw:        { label:"Dragon's Claw",        tier:'A', e:'🐉' },
  GargoyleStoneplate: { label:'Gargoyle Stoneplate',   tier:'A', e:'🗿' },
  GiantSlayer:        { label:'Giant Slayer',          tier:'A', e:'🪓' },
  HandofJustice:      { label:'Hand of Justice',      tier:'A', e:'⚖' },
  InfinityEdge:       { label:'Infinity Edge',         tier:'A', e:'💥' },
  IonicSpark:         { label:'Ionic Spark',           tier:'A', e:'⚡' },
  LastWhisper:        { label:'Last Whisper',          tier:'A', e:'🗡' },
  Quicksilver:        { label:'Quicksilver',           tier:'A', e:'💨' },
  RabadonsDeathcap:   { label:"Rabadon's Deathcap",   tier:'A', e:'🎩' },
  SteraksGage:        { label:"Sterak's Gage",        tier:'A', e:'💪' },
  StrikersFlail:      { label:"Striker's Flail",      tier:'A', e:'🔨' },
  ThiefsGloves:       { label:"Thief's Gloves",       tier:'A', e:'🧤' },
  WarmogsArmor:       { label:"Warmog's Armor",       tier:'A', e:'❤' },
  BlueBuff:           { label:'Blue Buff',             tier:'B', e:'💙' },
  Crownguard:         { label:'Crownguard',            tier:'B', e:'👑' },
  EdgeofNight:        { label:'Edge of Night',         tier:'B', e:'🌑' },
  HextechGunblade:    { label:'Hextech Gunblade',      tier:'B', e:'🔫' },
  ProtectorsVow:      { label:"Protector's Vow",      tier:'B', e:'🛡' },
  SteadfastHeart:     { label:'Steadfast Heart',       tier:'B', e:'❤' },
  PileOCitrus:        { label:"Pile O' Citrus",       tier:'B', e:'🍊' },
  Barknuckles:        { label:'Barknuckles',           tier:'B', e:'👊' },
  BFSword:            { label:'B.F. Sword',            tier:'C', e:'⚔' },
  NeedlesslyLargeRod: { label:'Needlessly Large Rod',  tier:'C', e:'🪄' },
  RecurveBow:         { label:'Recurve Bow',           tier:'C', e:'🏹' },
  ChainVest:          { label:'Chain Vest',            tier:'C', e:'🛡' },
  TearoftheGoddess:   { label:'Tear of the Goddess',   tier:'C', e:'💧' },
  NegatronCloak:      { label:'Negatron Cloak',        tier:'C', e:'🔵' },
  SparringGloves:     { label:'Sparring Gloves',       tier:'C', e:'🥊' },
  GiantsBelt:         { label:"Giant's Belt",         tier:'C', e:'🟤' },
  Kindlegem:          { label:'Kindlegem',             tier:'C', e:'💚' },
  Spatula:            { label:'Spatula',               tier:'C', e:'🍳' },
};

function itemImgUrl(key) { return `${SA}${key}.png`; }

function ini(name) {
  const w = name.split(/[\s&_']+/);
  return w.length >= 2 ? (w[0][0] + w[1][0]).toUpperCase() : name.slice(0,2).toUpperCase();
}

// ══════════════════════════════════════════════════════════════════
//  ESTADO CENTRAL
// ══════════════════════════════════════════════════════════════════
const STATE = {
  board: Array.from({ length:ROWS }, () => Array.from({ length:COLS }, () => null)),
  drag: null,
};

// ══════════════════════════════════════════════════════════════════
//  CÓDIGO DEL JUEGO TFT (Team Planner)
// ══════════════════════════════════════════════════════════════════
let GAME_CODES_CACHE = null;

async function loadGameCodes() {
  if (GAME_CODES_CACHE) return GAME_CODES_CACHE;
  try {
    const url = `${BASE}v1/tftchampions-teamplanner.json`;
    const res  = await fetch(url);
    const data = await res.json();
    const champs = (data['TFTSet16'] || []).filter(c => c.character_id);

    // Ordenar alfabéticamente por character_id (así se asignan los códigos)
    champs.sort((a, b) => a.character_id.localeCompare(b.character_id));

    // Mapa: CHARACTER_ID_UPPERCASE → "01" "02" ... "4A" etc.
    GAME_CODES_CACHE = {};
    champs.forEach((ch, i) => {
      GAME_CODES_CACHE[ch.character_id.toUpperCase()] =
        (i + 1).toString(16).padStart(2, '0').toUpperCase();
    });

    return GAME_CODES_CACHE;
  } catch (e) {
    console.warn('[TFT Meta] No se pudo cargar team planner codes:', e);
    GAME_CODES_CACHE = {};
    return {};
  }
}

async function copyGameCode() {
  const btn = document.getElementById('copyGameBtn');

  // Chequear si hay campeones en el tablero
  const champsOnBoard = STATE.board.flat().filter(Boolean);
  if (champsOnBoard.length === 0) {
    alert('Añade campeones al tablero primero.');
    return;
  }

  // Visual de carga
  const original = btn.innerHTML;
  btn.textContent = '⏳ Cargando...';
  btn.disabled = true;

  try {
    const codes = await loadGameCodes();

    const hexCodes = [];
    champsOnBoard.forEach(cell => {
      const chData = CHAMPIONS[cell.key];
      if (!chData) return;
      // Nuestro id: 'tft16_annie' → mayúsculas: 'TFT16_ANNIE'
      // JSON tiene: 'TFT16_Annie' → mayúsculas: 'TFT16_ANNIE'
      // Coinciden en mayúsculas → lookup funciona
      const idUpper = chData.id.toUpperCase();
      const hexCode = codes[idUpper];
      if (hexCode) hexCodes.push(hexCode);
    });

    if (hexCodes.length === 0) {
      btn.textContent = '❌ Sin código';
      setTimeout(() => { btn.innerHTML = original; btn.disabled = false; }, 2000);
      return;
    }

    // Formato: "01" + códigos + "TFTSet16"
    const gameCode = '01' + hexCodes.join('') + 'TFTSet16';
    writeClipboard(gameCode);

    btn.textContent = '✅ ¡Código copiado!';
    setTimeout(() => { btn.innerHTML = original; btn.disabled = false; }, 2500);

  } catch (e) {
    btn.textContent = '❌ Error';
    setTimeout(() => { btn.innerHTML = original; btn.disabled = false; }, 2000);
  }
}

// ══════════════════════════════════════════════════════════════════
//  RENDER DEL TABLERO
// ══════════════════════════════════════════════════════════════════
function renderBoard() {
  const boardEl = document.getElementById('hexBoard');
  if (!boardEl) return;

  let html = '';

  STATE.board.forEach((row, rowIdx) => {
    const isOffset = rowIdx % 2 === 1;
    html += `<div class="hex-row-wrap">`;
    html += `<div class="hex-row${isOffset ? ' offset' : ''}">`;

    row.forEach((cell, colIdx) => {
      if (cell === null) {
        // Celda vacía
        html += `<div class="hex-slot">
          <div class="hex-cell empty"
            data-row="${rowIdx}" data-col="${colIdx}"
            ondragover="handleDragOver(event)"
            ondrop="handleDrop(event)"
            ondragleave="handleDragLeave(event)"
          ></div>
          <div class="hex-slot-items"></div>
        </div>`;
      } else {
        const imgUrl = champImgUrl(cell.key);
        const cost   = (CHAMPIONS[cell.key] || {}).cost || 1;
        const name   = cell.key;
        const itsHtml = (cell.items || []).map((ik, ii) => {
          const iu = itemImgUrl(ik);
          const il = (ITEMS[ik] || {}).label || ik;
          return `<div class="hci" title="Quitar: ${il}"
            onclick="removeItemFromBoard(event,${rowIdx},${colIdx},${ii})"
          ><img src="${iu}" alt="${il}" crossorigin="anonymous"
            onerror="this.style.display='none'"></div>`;
        }).join('');

        html += `<div class="hex-slot">
          <div class="hex-cell c${cost}"
            data-row="${rowIdx}" data-col="${colIdx}"
            draggable="true"
            ondragstart="handleChampDragFromBoard(event,${rowIdx},${colIdx})"
            ondragover="handleDragOver(event)"
            ondrop="handleDrop(event)"
            ondragleave="handleDragLeave(event)"
            oncontextmenu="removeChampFromBoard(event,${rowIdx},${colIdx})"
            title="${name} — clic derecho para quitar"
          >
            <img class="hc-img" src="${imgUrl}" alt="${name}"
              crossorigin="anonymous" onerror="this.style.display='none'">
            <span class="hc-ini">${ini(name)}</span>
            <span class="hc-name">${name}</span>
          </div>
          <div class="hex-slot-items">${itsHtml}</div>
        </div>`;
      }
    });

    html += `</div></div>`;
  });

  boardEl.innerHTML = html;
  updatePoolPlacedState();
  renderEquipPanel();
}

// ══════════════════════════════════════════════════════════════════
//  PANEL DE EQUIPAMIENTO
//  Se llama desde renderBoard() — se actualiza con cada cambio.
// ══════════════════════════════════════════════════════════════════
function renderEquipPanel() {
  const panel = document.getElementById('equipPanel');
  if (!panel) return; // El div debe existir en el HTML

  // Recoger campeones con al menos 1 ítem
  const equipped = [];
  STATE.board.forEach((row, ri) => {
    row.forEach((cell, ci) => {
      if (cell && cell.items && cell.items.length > 0)
        equipped.push({ key:cell.key, items:cell.items });
    });
  });

  if (equipped.length === 0) {
    panel.innerHTML = `<span class="equip-empty">Sin ítems asignados — arrastra un ítem del panel derecho sobre un campeón del tablero.</span>`;
    return;
  }

  panel.innerHTML = `<div class="equip-list">${
    equipped.map(({ key, items }) => {
      const imgUrl = champImgUrl(key);
      const cost   = (CHAMPIONS[key] || {}).cost || 1;

      const itsHtml = items.map(ik => {
        const it = ITEMS[ik] || { label:ik, tier:'C', e:'●' };
        const iu = itemImgUrl(ik);
        return `<div class="equip-item">
          <div class="equip-item-box t${it.tier}" title="${it.label}">
            <img src="${iu}" alt="${it.label}" crossorigin="anonymous"
              onerror="this.style.display='none'">
            <span class="fbk">${it.e}</span>
          </div>
          <span class="equip-item-name">${it.label}</span>
        </div>`;
      }).join('');

      return `<div class="equip-row">
        <div class="equip-avatar c${cost}">
          <img src="${imgUrl}" alt="${key}" crossorigin="anonymous"
            onerror="this.style.display='none'">
          <span class="ea-ini">${ini(key)}</span>
        </div>
        <span class="equip-champ-name">${key}</span>
        <div class="equip-items">${itsHtml}</div>
      </div>`;
    }).join('')
  }</div>`;
}

// ── POOL DE CAMPEONES ──────────────────────────────────────────────
function renderPool() {
  const poolEl = document.getElementById('champPool');
  if (!poolEl) return;

  const byCost = {};
  Object.entries(CHAMPIONS).forEach(([key, ch]) => {
    if (!byCost[ch.cost]) byCost[ch.cost] = [];
    byCost[ch.cost].push(key);
  });

  let html = '';
  [1,2,3,4,5,7].forEach(cost => {
    if (!byCost[cost]) return;
    byCost[cost].forEach(key => {
      const imgUrl = champImgUrl(key);
      html += `<div class="pool-champ c${cost}" id="pool-${key}"
        draggable="true" ondragstart="handleChampDragFromPool(event,'${key}')"
        title="${key} (Costo ${cost})"
      >
        <img src="${imgUrl}" alt="${key}" crossorigin="anonymous" onerror="this.style.display='none'">
        <span class="pc-ini">${ini(key)}</span>
      </div>`;
    });
    if (cost < 7) html += `<div class="pool-divider"></div>`;
  });

  poolEl.innerHTML = html;
}

function updatePoolPlacedState() {
  const placed = new Set();
  STATE.board.flat().forEach(c => { if (c) placed.add(c.key); });
  document.querySelectorAll('.pool-champ').forEach(el => {
    el.classList.toggle('placed', placed.has(el.id.replace('pool-','')));
  });
}

// ── PANEL DE OBJETOS ──────────────────────────────────────────────
function renderItemsPanel() {
  const panelEl = document.getElementById('itemsPanel');
  if (!panelEl) return;

  const byTier = { S:[], A:[], B:[], C:[] };
  Object.entries(ITEMS).forEach(([key, it]) => {
    if (byTier[it.tier]) byTier[it.tier].push(key);
  });

  const tl = { S:'S · Meta', A:'A · Fuerte', B:'B · Sólido', C:'C · Componentes' };
  let html = '';

  ['S','A','B','C'].forEach(tier => {
    if (!byTier[tier].length) return;
    html += `<div class="item-tier-sep t${tier}">${tl[tier]}</div>`;
    byTier[tier].forEach(key => {
      const it = ITEMS[key];
      html += `<div class="item-row"
        draggable="true" ondragstart="handleItemDrag(event,'${key}')"
        title="${it.label}"
      >
        <div class="item-icon">
          <img src="${itemImgUrl(key)}" alt="${it.label}" crossorigin="anonymous"
            onerror="this.style.display='none'">
          <span class="fbk">${it.e}</span>
        </div>
        <span class="item-row-name">${it.label}</span>
      </div>`;
    });
  });

  panelEl.innerHTML = html;
}

// ══════════════════════════════════════════════════════════════════
//  DRAG & DROP
// ══════════════════════════════════════════════════════════════════
function handleChampDragFromPool(event, key) {
  event.dataTransfer.setData('text/plain', JSON.stringify({ type:'champ', key, fromRow:null, fromCol:null }));
  event.dataTransfer.effectAllowed = 'move';
  STATE.drag = { type:'champ', key, fromRow:null, fromCol:null };
}

function handleChampDragFromBoard(event, fromRow, fromCol) {
  event.stopPropagation();
  const cell = STATE.board[fromRow][fromCol];
  if (!cell) return;
  event.dataTransfer.setData('text/plain', JSON.stringify({ type:'champ', key:cell.key, fromRow, fromCol }));
  event.dataTransfer.effectAllowed = 'move';
  STATE.drag = { type:'champ', key:cell.key, fromRow, fromCol };
}

function handleItemDrag(event, key) {
  event.dataTransfer.setData('text/plain', JSON.stringify({ type:'item', key }));
  event.dataTransfer.effectAllowed = 'copy';
  STATE.drag = { type:'item', key };
  const el = event.currentTarget; // guardar aquí, dentro del evento
  if (el) el.classList.add('dragging');
  setTimeout(() => { if (el) el.classList.remove('dragging'); }, 300);
}

function handleDragOver(event) {
  event.preventDefault(); // imprescindible para que funcione el drop
  event.dataTransfer.dropEffect = 'move';
  event.currentTarget.classList.add('drag-over');
}

function handleDragLeave(event) {
  event.currentTarget.classList.remove('drag-over');
}

function handleDrop(event) {
  event.preventDefault();
  event.currentTarget.classList.remove('drag-over');

  let data;
  try { data = JSON.parse(event.dataTransfer.getData('text/plain')); }
  catch (e) { return; }

  const el   = event.currentTarget;
  const toRow = parseInt(el.dataset.row);
  const toCol = parseInt(el.dataset.col);
  if (isNaN(toRow) || isNaN(toCol)) return;

  if (data.type === 'champ') {
    const { key, fromRow, fromCol } = data;
    if (fromRow !== null && fromCol !== null) {
      // Mover entre celdas del tablero (intercambiar si ambas ocupadas)
      const originItems = STATE.board[fromRow][fromCol]?.items || [];
      const destCell    = STATE.board[toRow][toCol];
      STATE.board[fromRow][fromCol] = destCell ? { ...destCell } : null;
      STATE.board[toRow][toCol]     = { key, items:originItems };
    } else {
      // Desde el pool
      const existing = STATE.board[toRow][toCol];
      if (existing && existing.key === key) return;
      STATE.board[toRow][toCol] = { key, items: existing ? existing.items : [] };
    }
  } else if (data.type === 'item') {
    const cell = STATE.board[toRow][toCol];
    if (!cell) return; // no hay campeón aquí
    if (!cell.items) cell.items = [];
    if (cell.items.length >= 3) cell.items.shift(); // máximo 3
    cell.items.push(data.key);
  }

  renderBoard();
}

function handleEmptyCellClick() {} // placeholder

function removeChampFromBoard(event, row, col) {
  event.preventDefault(); // evita menú contextual
  STATE.board[row][col] = null;
  renderBoard();
}

function removeItemFromBoard(event, row, col, idx) {
  event.stopPropagation();
  const cell = STATE.board[row][col];
  if (!cell || !cell.items) return;
  cell.items.splice(idx, 1);
  renderBoard();
}

function clearBoard() {
  if (!confirm('¿Limpiar el tablero?')) return;
  STATE.board = Array.from({ length:ROWS }, () => Array.from({ length:COLS }, () => null));
  renderBoard();
}

// ══════════════════════════════════════════════════════════════════
//  CLIPBOARD
// ══════════════════════════════════════════════════════════════════
function writeClipboard(text) {
  // Método 1: 
  try {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.setAttribute('readonly', '');
    ta.style.cssText = 'position:absolute;left:-9999px;top:0;opacity:0';
    document.body.appendChild(ta);
    ta.focus();
    ta.select();
    const ok = document.execCommand('copy');
    document.body.removeChild(ta);
    if (ok) return; // éxito
  } catch (_) {}

  // Método 2
  navigator.clipboard?.writeText(text).catch(() => {
    alert('No se pudo copiar. Inténtalo en un contexto HTTPS.');
  });
}

function copyComp(mode) {
  const name = document.getElementById('compName')?.value || 'Mi Composición';
  if (mode === 'text') {
    writeClipboard(buildTextFormat(name));
    flashCopied('copyTextBtn');
  } else {
    writeClipboard(buildCompactCode(name));
    flashCopied('copyCodeBtn');
  }
}

function flashCopied(btnId) {
  const btn = document.getElementById(btnId);
  if (!btn) return;
  btn.classList.add('copied');
  setTimeout(() => btn.classList.remove('copied'), 2000);
}

function buildTextFormat(name) {
  const lines = [`📌 ${name}`, '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━'];
  let n = 0;
  STATE.board.forEach((row, ri) => {
    row.forEach((cell, ci) => {
      if (!cell) return;
      n++;
      const its = (cell.items||[]).map(k => (ITEMS[k]||{}).label||k).join(' · ');
      lines.push(`  [${ri}·${ci}] ${cell.key}${its?' | '+its:''}`);
    });
  });
  if (!n) lines.push('  (tablero vacío)');
  lines.push('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  lines.push('🔗 Creado en TFT·META Comp Builder');
  return lines.join('\n');
}

function buildCompactCode(name) {
  const cells = [];
  STATE.board.forEach((row, ri) => {
    row.forEach((cell, ci) => {
      if (cell) cells.push({ r:ri, c:ci, k:cell.key, i:cell.items||[] });
    });
  });
  const json    = JSON.stringify({ v:1, n:name, cells });
  const encoded = btoa(
    encodeURIComponent(json).replace(/%([0-9A-F]{2})/g,
      (_, p1) => String.fromCharCode('0x'+p1))
  );
  return `TFT:${encoded}`;
}

// ══════════════════════════════════════════════════════════════════
//  IMPORTAR
// ══════════════════════════════════════════════════════════════════
function openImport() {
  document.getElementById('importModal').classList.add('open');
  document.getElementById('importCode').value = '';
  document.getElementById('importError').textContent = '';
}

function closeImport(event) {
  if (event && event.target !== document.getElementById('importModal')) return;
  document.getElementById('importModal').classList.remove('open');
}

function importComp() {
  const raw   = (document.getElementById('importCode').value||'').trim();
  const errEl = document.getElementById('importError');
  errEl.textContent = '';

  if (!raw.startsWith('TFT:')) {
    errEl.textContent = '❌ Código inválido. Debe empezar con "TFT:"'; return;
  }
  try {
    const encoded = raw.slice(4);
    const json    = decodeURIComponent(
      Array.from(atob(encoded), c => '%'+c.charCodeAt(0).toString(16).padStart(2,'0')).join('')
    );
    const payload = JSON.parse(json);
    if (payload.v !== 1 || !Array.isArray(payload.cells)) throw new Error('Formato incorrecto');

    STATE.board = Array.from({ length:ROWS }, () => Array.from({ length:COLS }, () => null));
    payload.cells.forEach(({ r, c, k, i }) => {
      if (r >= 0 && r < ROWS && c >= 0 && c < COLS && CHAMPIONS[k])
        STATE.board[r][c] = { key:k, items:i||[] };
    });
    if (payload.n) {
      const inp = document.getElementById('compName');
      if (inp) inp.value = payload.n;
    }
    renderBoard();
    closeImport({ target:document.getElementById('importModal') });
  } catch (e) {
    errEl.textContent = '❌ Error: ' + e.message;
  }
}

function checkImportParam() {
  const code = new URLSearchParams(location.search).get('import');
  if (code) {
    document.getElementById('importCode').value = code;
    importComp();
  }
}

// ── INIT ──
function init() {
  renderBoard();
  renderPool();
  renderItemsPanel();
  checkImportParam();
  loadGameCodes();
}

document.addEventListener('DOMContentLoaded', init);
