'use strict';
// ================================================================
//  COMP BUILDER — comp-builder-main.js  |  REBUILD COMPLETO
//
//  CAMBIOS vs versión anterior:
//  1. clip-path en hexes (hitbox rectangular, sin problemas de mask)
//  2. CLICK-CLICK para asignar ítems (no más drag & drop)
//  3. Imágenes: sunderarmor.com/characters/Skin/16/{Name}.png
//  4. Panel de rasgos en tiempo real
//  5. Código del juego: sort alfabético CDragon (correcto)
// ================================================================

const SA_CHAMPS = 'https://sunderarmor.com/characters/Skin/16/';
const SA_ITEMS  = 'https://sunderarmor.com/items/';
const SA_ICONS  = 'https://sunderarmor.com/icons/';
const CDRAGON   = 'https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/';

const ROWS = 4, COLS = 7;

// ── CAMPEONES ──────────────────────────────────────────────────
// img: filename en sunderarmor.com/characters/Skin/16/{img}.png
// id:  character_id de CDragon (lowercase) — para el código del juego
// cost: coste de oro
// traits: rasgos del campeón (display names para la UI)
const CHAMPIONS = {
  // ── COSTO 1 ──
  Viego:      { img:'Viego',        id:'tft16_viego',         cost:1, traits:['ShadowIsles','Slayer'] },
  Sona:       { img:'Sona',         id:'tft16_sona',          cost:1, traits:['Demacia','Invoker'] },
  Anivia:     { img:'Anivia',       id:'tft16_anivia',        cost:1, traits:['Freljord','Invoker'] },
  Blitz:      { img:'Blitzcrank',   id:'tft16_blitzcrank',    cost:1, traits:['Zaun','Warden'] },
  Briar:      { img:'Briar',        id:'tft16_briar',         cost:1, traits:['Noxus','Slayer','Juggernaut'] },
  Caitlyn:    { img:'Caitlyn',      id:'tft16_caitlyn',       cost:1, traits:['Piltover','Longshot'] },
  Illaoi:     { img:'Illaoi',       id:'tft16_illaoi',        cost:1, traits:['Bilgewater','Bruiser'] },
  Jarvaniv:   { img:'JarvanIV',     id:'tft16_jarvaniv',      cost:1, traits:['Demacia','Defender'] },
  Jhin:       { img:'Jhin',         id:'tft16_jhin',          cost:1, traits:['Ionia','Longshot'] },
  Kogmaw:     { img:'Kogmaw',       id:'tft16_kogmaw',        cost:1, traits:['Void','Longshot'] },
  Lulu:       { img:'Lulu',         id:'tft16_lulu',          cost:1, traits:['Yordle','Arcanist'] },
  Qiyana:     { img:'Qiyana',       id:'tft16_qiyana',        cost:1, traits:['Ixtal','Slayer'] },
  Rumble:     { img:'Rumble',       id:'tft16_rumble',        cost:1, traits:['Yordle','Defender'] },
  Shen:       { img:'Shen',         id:'tft16_shen',          cost:1, traits:['Ionia','Bruiser'] },

  // ── COSTO 2 ──
  Neeko:      { img:'Neeko',        id:'tft16_neeko',         cost:2, traits:['Ixtal','Arcanist','Defender'] },
  Vi:         { img:'Vi',           id:'tft16_vi',            cost:2, traits:['Piltover','Zaun','Defender'] },
  Ashe:       { img:'Ashe',         id:'tft16_ashe',          cost:2, traits:['Freljord','Quickstriker'] },
  Yorick:     { img:'Yorick',       id:'tft16_yorick',        cost:2, traits:['ShadowIsles','Warden'] },
  XinZhao:    { img:'XinZhao',      id:'tft16_xinzhao',       cost:2, traits:['Demacia','Vanquisher'] },
  Poppy:      { img:'Poppy',        id:'tft16_poppy',         cost:2, traits:['Yordle','Defender'] },
  Aphelios:   { img:'Aphelios',     id:'tft16_aphelios',      cost:2, traits:['Targon','Longshot'] },
  Bardo:      { img:'Bard',         id:'tft16_bardo',         cost:2, traits:['Targon','Invoker'] },
  ChoGath:    { img:'Chogath',      id:'tft16_chogath',       cost:2, traits:['Void','Juggernaut'] },
  Ekko:       { img:'Ekko',         id:'tft16_ekko',          cost:2, traits:['Zaun','Disruptor'] },
  Graves:     { img:'Graves',       id:'tft16_graves',        cost:2, traits:['Bilgewater','Slayer'] },
  Orianna:    { img:'Orianna',      id:'tft16_orianna',       cost:2, traits:['Ionia','Arcanist'] },
  RekSai:     { img:'RekSai',       id:'tft16_reksai',        cost:2, traits:['Void','Slayer'] },
  Sion:       { img:'Sion',         id:'tft16_sion',          cost:2, traits:['Noxus','Bruiser'] },
  Teemo:      { img:'Teemo',        id:'tft16_teemo',         cost:2, traits:['Yordle','Longshot'] },
  Tristana:   { img:'Tristana',     id:'tft16_tristana',      cost:2, traits:['Yordle','Gunslinger'] },
  Tryndamere: { img:'Tryndamere',   id:'tft16_tryndamere',    cost:2, traits:['Ionia','Slayer'] },
  TwistedFate:{ img:'TwistedFate',  id:'tft16_twistedfate',   cost:2, traits:['Bilgewater','Quickstriker'] },
  Yasuo:      { img:'Yasuo',        id:'tft16_yasuo',         cost:2, traits:['Ionia','Slayer'] },

  // ── COSTO 3 ──
  Loris:      { img:'Loris',        id:'tft16_beardy',        cost:3, traits:['ShadowIsles','Bruiser'] },
  Gwen:       { img:'Gwen',         id:'tft16_gwen',          cost:3, traits:['ShadowIsles','Slayer'] },
  Jinx:       { img:'Jinx',         id:'tft16_jinx',          cost:3, traits:['Zaun','Gunslinger'] },
  Nautilus:   { img:'Nautilus',     id:'tft16_nautilus',      cost:3, traits:['Bilgewater','Juggernaut','Warden'] },
  Kennen:     { img:'Kennen',       id:'tft16_kennen',        cost:3, traits:['Ionia','Arcanist'] },
  Ahri:       { img:'Ahri',         id:'tft16_ahri',          cost:3, traits:['Ionia','Arcanist'] },
  Kobuko:     { img:'Kobuko&Yuumi', id:'tft16_kobuko',        cost:3, traits:['Ionia','Invoker'] },
  Sejuani:    { img:'Sejuani',      id:'tft16_sejuani',       cost:3, traits:['Freljord','Bruiser'] },
  Draven:     { img:'Draven',       id:'tft16_draven',        cost:3, traits:['Noxus','Quickstriker'] },
  Darius:     { img:'Darius',       id:'tft16_darius',        cost:3, traits:['Noxus','Juggernaut'] },
  DrMundo:    { img:'DrMundo',      id:'tft16_drmundo',       cost:3, traits:['Zaun','Juggernaut'] },
  Gangplank:  { img:'Gangplank',    id:'tft16_gangplank',     cost:3, traits:['Bilgewater','Slayer','Vanquisher'] },
  LeBlanc:    { img:'Leblanc',      id:'tft16_leblanc',       cost:3, traits:['Noxus','Disruptor'] },
  Leona:      { img:'Leona',        id:'tft16_leona',         cost:3, traits:['Targon','Defender'] },
  Malzahar:   { img:'Malzahar',     id:'tft16_malzahar',      cost:3, traits:['Void','Disruptor'] },
  Milio:      { img:'Milio',        id:'tft16_milio',         cost:3, traits:['Ixtal','Invoker'] },
  Vayne:      { img:'Vayne',        id:'tft16_vayne',         cost:3, traits:['Demacia','Quickstriker'] },
  Zoe:        { img:'Zoe',          id:'tft16_zoe',           cost:3, traits:['Targon','Arcanist'] },

  // ── COSTO 4 ──
  Taric:      { img:'Taric',        id:'tft16_taric',         cost:4, traits:['Targon','Invoker'] },
  Swain:      { img:'Swain',        id:'tft16_swain',         cost:4, traits:['Noxus','Arcanist'] },
  Lux:        { img:'Lux',          id:'tft16_lux',           cost:4, traits:['Demacia','Arcanist'] },
  Ambessa:    { img:'Ambessa',      id:'tft16_ambessa',       cost:4, traits:['Noxus','Vanquisher'] },
  Braum:      { img:'Braum',        id:'tft16_braum',         cost:4, traits:['Freljord','Warden'] },
  Kalista:    { img:'Kalista',      id:'tft16_kalista',       cost:4, traits:['ShadowIsles','Quickstriker'] },
  Wukong:     { img:'Wukong',       id:'tft16_wukong',        cost:4, traits:['Ionia','Bruiser'] },
  MF:         { img:'MissFortune',  id:'tft16_missfortune',   cost:4, traits:['Bilgewater','Gunslinger'] },
  Warwick:    { img:'Warwick',      id:'tft16_warwick',       cost:4, traits:['Zaun','Slayer'] },
  Skarner:    { img:'Skarner',      id:'tft16_skarner',       cost:4, traits:['Void','Warden'] },
  Yone:       { img:'Yone',         id:'tft16_yone',          cost:4, traits:['Ionia','Slayer'] },
  Garen:      { img:'Garen',        id:'tft16_garen',         cost:4, traits:['Demacia','Defender'] },
  Lissandra:  { img:'Lissandra',    id:'tft16_lissandra',     cost:4, traits:['Freljord','Invoker'] },
  Seraphine:  { img:'Seraphine',    id:'tft16_seraphine',     cost:4, traits:['Piltover','Disruptor'] },
  BelVeth:    { img:'Belveth',      id:'tft16_belveth',       cost:4, traits:['Void','Slayer'] },
  Diana:      { img:'Diana',        id:'tft16_diana',         cost:4, traits:['Targon','Slayer'] },
  Fizz:       { img:'Fizz',         id:'tft16_fizz',          cost:4, traits:['Bilgewater','Slayer'] },
  KaiSa:      { img:'Kaisa',        id:'tft16_kaisa',         cost:4, traits:['Void','Quickstriker'] },
  Nasus:      { img:'Nasus',        id:'tft16_nasus',         cost:4, traits:['Shurima','Juggernaut'] },
  Nidalee:    { img:'Nidalee',      id:'tft16_nidalee',       cost:4, traits:['Ixtal','Huntress'] },
  Renekton:   { img:'Renekton',     id:'tft16_renekton',      cost:4, traits:['Noxus','Juggernaut'] },
  Singed:     { img:'Singed',       id:'tft16_singed',        cost:4, traits:['Zaun','Arcanist'] },
  Veigar:     { img:'Veigar',       id:'tft16_veigar',        cost:4, traits:['Yordle','Arcanist'] },
  Yunara:     { img:'Yunara',       id:'tft16_yunara',        cost:4, traits:['Shurima','Arcanist'] },

  // ── COSTO 5 ──
  Annie:      { img:'Annie',        id:'tft16_annie',         cost:5, traits:['DarkChild','Arcanist'] },
  Tibbers:    { img:'Tibbers',      id:'tft16_annietibbers',  cost:5, traits:['DarkChild','Bruiser'] },
  Shyvana:    { img:'Shyvana',      id:'tft16_shyvana',       cost:5, traits:['Dragonborn','Bruiser'] },
  Fiddle:     { img:'Fiddlesticks', id:'tft16_fiddlesticks',  cost:5, traits:['ShadowIsles','Arcanist'] },
  Mel:        { img:'Mel',          id:'tft16_mel',           cost:5, traits:['Noxus','Arcanist'] },
  Thresh:     { img:'Thresh',       id:'tft16_thresh',        cost:5, traits:['ShadowIsles','Warden'] },
  Ornn:       { img:'Ornn',         id:'tft16_ornn',          cost:5, traits:['Freljord','Warden'] },
  Lucian:     { img:'Lucian&Senna', id:'tft16_lucian',        cost:5, traits:['Piltover','Soulbound','Gunslinger'] },
  TahmK:      { img:'TahmKench',    id:'tft16_tahmkench',     cost:5, traits:['Bilgewater','Glutton'] },
  Kindred:    { img:'Kindred',      id:'tft16_kindred',       cost:5, traits:['Eternal','Slayer'] },
  Aatrox:     { img:'Aatrox',       id:'tft16_aatrox',        cost:5, traits:['Darkin','WorldEnder'] },
  Sett:       { img:'Sett',         id:'tft16_sett',          cost:5, traits:['Ionia','TheBoss'] },
  Zilean:     { img:'Zilean',       id:'tft16_zilean',        cost:5, traits:['Shurima','Chronokeeper'] },
  Volibear:   { img:'Volibear',     id:'tft16_volibear',      cost:5, traits:['Freljord','Bruiser'] },
  AurelionSol:{ img:'AurelionSol',  id:'tft16_aurelionsol',   cost:5, traits:['Ionia','Arcanist'] },
  Azir:       { img:'Azir',         id:'tft16_azir',          cost:5, traits:['Shurima','Emperor'] },
  Brock:      { img:'Brock',        id:'tft16_brock',         cost:5, traits:['Bilgewater','Bruiser'] },
  Galio:      { img:'Galio',        id:'tft16_galio',         cost:5, traits:['Demacia','Bruiser'] },
  THex:       { img:'T-Hex',        id:'tft16_thex',          cost:5, traits:['Zaun','HexMech'] },
  Xerath:     { img:'Xerath',       id:'tft16_xerath',        cost:5, traits:['Shurima','Arcanist'] },

  // ── PRISMATIC (especial) ──
  Sylas:      { img:'Sylas',        id:'tft16_sylas',         cost:7, traits:['Noxus','Arcanist'] },
  Ryze:       { img:'Ryze',         id:'tft16_ryze',          cost:7, traits:['RuneMage','Arcanist'] },
};

function champImg(key) {
  const ch = CHAMPIONS[key];
  if (!ch) return '';
  return `${SA_CHAMPS}${encodeURIComponent(ch.img)}.png`;
}

// ── RASGOS ─────────────────────────────────────────────────────
// th: umbrales de activación [2,4,6] etc.
const TRAITS = {
  // Orígenes
  Bilgewater:  { icon:'bilgewater',  th:[2,4,6] },
  DarkChild:   { icon:'darkchild',   th:[2] },
  Darkin:      { icon:'darkin',      th:[1] },
  Demacia:     { icon:'demacia',     th:[2,4,6] },
  Dragonborn:  { icon:'dragonborn',  th:[1,2,3] },
  Eternal:     { icon:'eternal',     th:[2] },
  Freljord:    { icon:'freljord',    th:[2,4,6] },
  Ionia:       { icon:'ionia',       th:[2,4,6,8] },
  Ixtal:       { icon:'ixtal',       th:[2,4] },
  Noxus:       { icon:'noxus',       th:[2,4,6] },
  Piltover:    { icon:'piltover',    th:[2,4] },
  RuneMage:    { icon:'runemage',    th:[1] },
  ShadowIsles: { icon:'shadowisles', th:[2,4,6] },
  Shurima:     { icon:'shurima',     th:[2,4,6] },
  Targon:      { icon:'targon',      th:[2,4,6] },
  Void:        { icon:'void',        th:[2,4,6] },
  WorldEnder:  { icon:'worldender',  th:[1] },
  Yordle:      { icon:'yordle',      th:[3,6,9] },
  Zaun:        { icon:'zaun',        th:[2,4,6] },
  // Clases
  Arcanist:    { icon:'arcanist',    th:[2,4,6,8] },
  Bruiser:     { icon:'bruiser',     th:[2,4,6] },
  Defender:    { icon:'defender',    th:[2,4,6] },
  Disruptor:   { icon:'disruptor',   th:[2,4] },
  Emperor:     { icon:'emperor',     th:[1] },
  Glutton:     { icon:'glutton',     th:[1] },
  Gunslinger:  { icon:'gunslinger',  th:[2,4,6] },
  HexMech:     { icon:'hexmech',     th:[1,2] },
  Huntress:    { icon:'huntress',    th:[2,4] },
  Invoker:     { icon:'invoker',     th:[2,4,6] },
  Juggernaut:  { icon:'juggernaut',  th:[2,4,6] },
  Longshot:    { icon:'longshot',    th:[2,4] },
  Quickstriker:{ icon:'quickstriker',th:[2,4,6] },
  Slayer:      { icon:'slayer',      th:[2,4,6] },
  Soulbound:   { icon:'soulbound',   th:[2] },
  TheBoss:     { icon:'theboss',     th:[1] },
  Vanquisher:  { icon:'vanquisher',  th:[2,4,6] },
  Warden:      { icon:'warden',      th:[2,4,6] },
  Chronokeeper:{ icon:'chronokeeper',th:[1] },
};

// ── OBJETOS ────────────────────────────────────────────────────
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

function itemImg(key) { return `${SA_ITEMS}${key}.png`; }
function ini(n) { const w=n.split(/[\s&_']+/); return w.length>=2?(w[0][0]+w[1][0]).toUpperCase():n.slice(0,2).toUpperCase(); }

// ================================================================
//  ESTADO CENTRAL
//  selectedItem: null | key del ítem seleccionado (click-click)
// ================================================================
const STATE = {
  board: Array.from({length:ROWS},()=>Array.from({length:COLS},()=>null)),
  selectedItem: null,
};

// ================================================================
//  RENDER BOARD
//  Usa .hex-wrap (contenedor) + .hex-cell (clip-path visual)
//  + .hex-items en flujo normal debajo del hex.
//  Con clip-path:
//  - La forma hexagonal es SOLO visual
//  - La hitbox es el rectángulo completo
//  - Los ítems no interfieren con los eventos de drag
// ================================================================
function renderBoard() {
  const el = document.getElementById('hexBoard');
  if (!el) return;
  let html = '';

  STATE.board.forEach((row, ri) => {
    const offset = ri % 2 === 1;
    html += `<div class="hex-row-wrap"><div class="hex-row${offset?' offset':''}">`;

    row.forEach((cell, ci) => {
      const hasItem = STATE.selectedItem && cell !== null;

      if (!cell) {
        // Celda vacía: acepta drop de campeones
        html += `<div class="hex-wrap"
          data-row="${ri}" data-col="${ci}"
          ondragover="onDragOver(event)"
          ondrop="onDrop(event)"
          ondragleave="onDragLeave(event)">
          <div class="hex-cell empty"></div>
          <div class="hex-items"></div>
        </div>`;
      } else {
        const cost = (CHAMPIONS[cell.key]||{}).cost||1;
        const imgUrl = champImg(cell.key);
        const canReceive = STATE.selectedItem ? 'can-receive' : '';

        // Ítems del campeón
        const itsHtml = (cell.items||[]).map((ik,ii)=>{
          const iu = itemImg(ik);
          const il = (ITEMS[ik]||{}).label||ik;
          return `<div class="hci" title="Quitar: ${il}"
            onclick="removeItemFromBoard(event,${ri},${ci},${ii})"
          ><img src="${iu}" alt="${il}" crossorigin="anonymous"
            onerror="this.style.display='none'"></div>`;
        }).join('');

        html += `<div class="hex-wrap"
          data-row="${ri}" data-col="${ci}"
          ondragover="onDragOver(event)"
          ondrop="onDrop(event)"
          ondragleave="onDragLeave(event)">
          <div class="hex-cell c${cost} ${canReceive}"
            draggable="true"
            ondragstart="onChampDragFromBoard(event,${ri},${ci})"
            oncontextmenu="removeChamp(event,${ri},${ci})"
            onclick="onHexClick(event,${ri},${ci})"
            title="${cell.key} — clic para asignar ítem / clic derecho para quitar"
          >
            <img class="hc-img" src="${imgUrl}" alt="${cell.key}"
              crossorigin="anonymous" onerror="this.style.display='none'">
            <span class="hc-ini">${ini(cell.key)}</span>
            <span class="hc-name">${cell.key}</span>
          </div>
          <div class="hex-items">${itsHtml}</div>
        </div>`;
      }
    });

    html += `</div></div>`;
  });

  el.innerHTML = html;
  updatePoolPlaced();
  renderEquipPanel();
  renderTraits();
}

// ================================================================
//  PANEL DE RASGOS EN TIEMPO REAL
//  Calcula los rasgos activos a partir del tablero y los muestra
//  ordenados por count (más activo primero).
// ================================================================
function renderTraits() {
  const panel = document.getElementById('traitsList');
  if (!panel) return;

  // Contar rasgos
  const counts = {};
  STATE.board.flat().filter(Boolean).forEach(cell => {
    const ch = CHAMPIONS[cell.key];
    if (!ch || !ch.traits) return;
    ch.traits.forEach(t => { counts[t] = (counts[t]||0)+1; });
  });

  const active = Object.entries(counts).filter(([,n])=>n>0);
  if (!active.length) {
    panel.innerHTML = `<span class="traits-empty">Añade campeones para ver rasgos activos.</span>`;
    return;
  }

  // Ordenar: primero los que tienen umbral activo, luego por count desc
  active.sort((a,b)=>{
    const ta = TRAITS[a[0]]; const tb = TRAITS[b[0]];
    const ra = ta ? getThresholdReached(a[1], ta.th) : 0;
    const rb = tb ? getThresholdReached(b[1], tb.th) : 0;
    if (rb !== ra) return rb - ra;
    return b[1] - a[1];
  });

  panel.innerHTML = active.map(([name, count]) => {
    const td = TRAITS[name];
    const iconUrl = td ? `${SA_ICONS}${td.icon}.png` : '';
    const thReached = td ? getThresholdReached(count, td.th) : 0;
    const nextTh = td ? getNextThreshold(count, td.th) : null;
    const countStr = nextTh ? `${count}/${nextTh}` : `${count}`;
    const cls = thReached > 0 ? (thReached >= (td?.th.slice(-1)[0]||9999) ? 'trait-row active-gold' : 'trait-row active') : 'trait-row';

    return `<div class="${cls}">
      <div class="trait-icon">
        ${iconUrl ? `<img src="${iconUrl}" alt="${name}" crossorigin="anonymous" onerror="this.style.display='none'">` : ''}
      </div>
      <span class="trait-name">${name}</span>
      <span class="trait-count">${countStr}</span>
    </div>`;
  }).join('');
}

function getThresholdReached(count, thresholds) {
  let reached = 0;
  thresholds.forEach(t => { if (count >= t) reached = t; });
  return reached;
}

function getNextThreshold(count, thresholds) {
  return thresholds.find(t => t > count) || null;
}

// ================================================================
//  PANEL DE EQUIPAMIENTO
// ================================================================
function renderEquipPanel() {
  const panel = document.getElementById('equipPanel');
  if (!panel) return;

  const equipped = [];
  STATE.board.forEach((row,ri)=>row.forEach((cell,ci)=>{
    if (cell && cell.items && cell.items.length) equipped.push({...cell, ri, ci});
  }));

  if (!equipped.length) {
    panel.innerHTML = `<span class="equip-empty">Sin ítems asignados — clic en un ítem del panel derecho, luego clic en un campeón.</span>`;
    return;
  }

  panel.innerHTML = `<div class="equip-list">${equipped.map(({key,items,ri,ci})=>{
    const imgUrl = champImg(key);
    const cost   = (CHAMPIONS[key]||{}).cost||1;

    const itsHtml = items.map((ik,ii)=>{
      const it = ITEMS[ik]||{label:ik,tier:'C',e:'●'};
      return `<div class="equip-item" onclick="removeItemEquip(${ri},${ci},${ii})" title="Quitar: ${it.label}">
        <div class="equip-item-box t${it.tier}">
          <img src="${itemImg(ik)}" alt="${it.label}" crossorigin="anonymous" onerror="this.style.display='none'">
          <span class="fbk">${it.e}</span>
        </div>
        <span class="equip-item-name">${it.label}</span>
      </div>`;
    }).join('');

    return `<div class="equip-row">
      <div class="equip-avatar c${cost}">
        <img src="${imgUrl}" alt="${key}" crossorigin="anonymous" onerror="this.style.display='none'">
        <span class="ea-ini">${ini(key)}</span>
      </div>
      <span class="equip-champ-name">${key}</span>
      <div class="equip-items">${itsHtml}</div>
    </div>`;
  }).join('')}</div>`;
}

// ================================================================
//  POOL DE CAMPEONES
// ================================================================
function renderPool() {
  const el = document.getElementById('champPool');
  if (!el) return;
  const byCost = {};
  Object.entries(CHAMPIONS).forEach(([k,ch])=>{
    if (!byCost[ch.cost]) byCost[ch.cost]=[];
    byCost[ch.cost].push(k);
  });
  let html = '';
  [1,2,3,4,5,7].forEach(cost=>{
    if (!byCost[cost]) return;
    byCost[cost].forEach(k=>{
      html += `<div class="pool-champ c${cost}" id="pool-${k}"
        draggable="true" ondragstart="onChampDragFromPool(event,'${k}')"
        title="${k} (Costo ${cost})"
      >
        <img src="${champImg(k)}" alt="${k}" crossorigin="anonymous" onerror="this.style.display='none'">
        <span class="pc-ini">${ini(k)}</span>
      </div>`;
    });
    if (cost<7) html += `<div class="pool-divider"></div>`;
  });
  el.innerHTML = html;
}

function updatePoolPlaced() {
  const placed = new Set(STATE.board.flat().filter(Boolean).map(c=>c.key));
  document.querySelectorAll('.pool-champ').forEach(el=>{
    el.classList.toggle('placed', placed.has(el.id.replace('pool-','')));
  });
}

// ================================================================
//  PANEL DE OBJETOS
//  INTERACCIÓN CLICK-CLICK:
//  1. Usuario hace clic en un ítem del panel → STATE.selectedItem = key
//  2. El ítem muestra borde dorado (clase .item-selected)
//  3. El cursor "chip" aparece indicando el ítem activo
//  4. Usuario hace clic en un campeón del tablero → se asigna
//  5. Escape cancela la selección
// ================================================================
function renderItemsPanel() {
  const el = document.getElementById('itemsPanel');
  if (!el) return;
  const byTier = {S:[],A:[],B:[],C:[]};
  Object.entries(ITEMS).forEach(([k,it])=>{ if(byTier[it.tier]) byTier[it.tier].push(k); });
  const tl = {S:'S · Meta',A:'A · Fuerte',B:'B · Sólido',C:'C · Componentes'};
  let html = '';
  ['S','A','B','C'].forEach(tier=>{
    if (!byTier[tier].length) return;
    html += `<div class="item-tier-sep t${tier}">${tl[tier]}</div>`;
    byTier[tier].forEach(k=>{
      const it = ITEMS[k];
      const sel = STATE.selectedItem===k ? 'item-selected' : '';
      html += `<div class="item-row ${sel}" onclick="selectItem('${k}')" title="${it.label}">
        <div class="item-icon">
          <img src="${itemImg(k)}" alt="${it.label}" crossorigin="anonymous" onerror="this.style.display='none'">
          <span class="fbk">${it.e}</span>
        </div>
        <span class="item-row-name">${it.label}</span>
      </div>`;
    });
  });
  el.innerHTML = html;
}

// Actualiza solo el estado visual del item seleccionado (más rápido que re-render completo)
function updateItemHighlight() {
  document.querySelectorAll('.item-row').forEach(row => {
    // Extraemos la key del onclick attribute
    const m = row.getAttribute('onclick')?.match(/selectItem\('([^']+)'\)/);
    if (m) row.classList.toggle('item-selected', m[1] === STATE.selectedItem);
  });
  // Actualiza también el chip del cursor
  updateItemCursor();
  // Actualiza can-receive en el tablero
  document.querySelectorAll('.hex-cell.c1,.hex-cell.c2,.hex-cell.c3,.hex-cell.c4,.hex-cell.c5').forEach(h=>{
    h.classList.toggle('can-receive', !!STATE.selectedItem);
  });
}

function updateItemCursor() {
  const cursor = document.getElementById('itemCursor');
  if (!cursor) return;
  if (!STATE.selectedItem) {
    cursor.classList.remove('active');
    return;
  }
  const it = ITEMS[STATE.selectedItem];
  const nameEl = document.getElementById('itemCursorName');
  const imgEl  = document.getElementById('itemCursorImg');
  if (nameEl) nameEl.textContent = it?.label || STATE.selectedItem;
  if (imgEl) imgEl.innerHTML = `<img src="${itemImg(STATE.selectedItem)}" alt="" crossorigin="anonymous">`;
  cursor.classList.add('active');
}

// ================================================================
//  INTERACCIONES
// ================================================================

// CLICK en ítem del panel → seleccionar/deseleccionar
function selectItem(key) {
  STATE.selectedItem = STATE.selectedItem === key ? null : key;
  updateItemHighlight();
}

// CLICK en hex del tablero → asignar ítem seleccionado
function onHexClick(event, row, col) {
  if (!STATE.selectedItem) return;
  event.stopPropagation();
  const cell = STATE.board[row][col];
  if (!cell) return;
  if (!cell.items) cell.items = [];
  if (cell.items.length >= 3) cell.items.shift();
  cell.items.push(STATE.selectedItem);
  STATE.selectedItem = null;
  renderBoard();
  renderItemsPanel(); // limpiar selección visual
}

// ESC cancela selección
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && STATE.selectedItem) {
    STATE.selectedItem = null;
    updateItemHighlight();
  }
});

// Clic en cualquier lugar fuera del tablero y del panel de items → cancelar
document.addEventListener('click', e => {
  if (!STATE.selectedItem) return;
  // Solo cancelamos si el clic no es en el panel de items ni en el tablero
  if (!e.target.closest('.items-panel-list') && !e.target.closest('.hex-board')) {
    STATE.selectedItem = null;
    updateItemHighlight();
  }
});

// DRAG para CAMPEONES (desde pool)
function onChampDragFromPool(event, key) {
  event.dataTransfer.setData('text/plain', JSON.stringify({type:'champ',key,fromRow:null,fromCol:null}));
  event.dataTransfer.effectAllowed = 'move';
}

// DRAG para CAMPEONES (desde tablero — mover)
function onChampDragFromBoard(event, fromRow, fromCol) {
  event.stopPropagation();
  const cell = STATE.board[fromRow][fromCol];
  if (!cell) return;
  event.dataTransfer.setData('text/plain', JSON.stringify({type:'champ',key:cell.key,fromRow,fromCol}));
  event.dataTransfer.effectAllowed = 'move';
}

// DRAG OVER en .hex-wrap (nuevo target — rectángulo completo)
function onDragOver(event) {
  event.preventDefault();
  event.stopPropagation();
  event.dataTransfer.dropEffect = 'move';
  event.currentTarget.classList.add('drag-over');
}

function onDragLeave(event) {
  if (!event.currentTarget.contains(event.relatedTarget)) {
    event.currentTarget.classList.remove('drag-over');
  }
}

function onDrop(event) {
  event.preventDefault();
  event.stopPropagation();
  event.currentTarget.classList.remove('drag-over');

  let data;
  try { data = JSON.parse(event.dataTransfer.getData('text/plain')); }
  catch { return; }

  const el  = event.currentTarget;
  const toRow = parseInt(el.dataset.row);
  const toCol = parseInt(el.dataset.col);
  if (isNaN(toRow)||isNaN(toCol)) return;

  if (data.type === 'champ') {
    const {key, fromRow, fromCol} = data;
    if (fromRow !== null) {
      // Mover entre celdas: intercambiar
      const originItems = STATE.board[fromRow][fromCol]?.items||[];
      const dest = STATE.board[toRow][toCol];
      STATE.board[fromRow][fromCol] = dest ? {...dest} : null;
      STATE.board[toRow][toCol] = {key, items:originItems};
    } else {
      // Desde pool
      const existing = STATE.board[toRow][toCol];
      if (existing && existing.key===key) return;
      STATE.board[toRow][toCol] = {key, items: existing ? existing.items : []};
    }
    renderBoard();
  }
  // Items ya no se arrastran — se asignan por clic
}

// Quitar campeón (clic derecho en hex)
function removeChamp(event, row, col) {
  event.preventDefault();
  STATE.board[row][col] = null;
  renderBoard();
}

// Quitar ítem desde el tablero (clic en el .hci)
function removeItemFromBoard(event, row, col, idx) {
  event.stopPropagation();
  const cell = STATE.board[row][col];
  if (!cell||!cell.items) return;
  cell.items.splice(idx, 1);
  renderBoard();
}

// Quitar ítem desde el panel de equipamiento
function removeItemEquip(row, col, idx) {
  const cell = STATE.board[row][col];
  if (!cell||!cell.items) return;
  cell.items.splice(idx, 1);
  renderBoard();
}

function clearBoard() {
  if (!confirm('¿Limpiar el tablero?')) return;
  STATE.board = Array.from({length:ROWS},()=>Array.from({length:COLS},()=>null));
  STATE.selectedItem = null;
  renderBoard();
  updateItemHighlight();
}

// ================================================================
//  CLIPBOARD — execCommand primero (funciona en HTTP/HTTPS)
// ================================================================
function writeClipboard(text) {
  try {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.setAttribute('readonly','');
    ta.style.cssText = 'position:absolute;left:-9999px;top:0;opacity:0';
    document.body.appendChild(ta);
    ta.focus(); ta.select();
    const ok = document.execCommand('copy');
    document.body.removeChild(ta);
    if (ok) return;
  } catch(_) {}
  navigator.clipboard?.writeText(text).catch(()=>{});
}

function copyComp(mode) {
  const name = document.getElementById('compName')?.value||'Mi Composición';
  writeClipboard(mode==='text' ? buildText(name) : buildCode(name));
  const id = mode==='text' ? 'copyTextBtn' : 'copyCodeBtn';
  const btn = document.getElementById(id);
  if (btn) { btn.classList.add('copied'); setTimeout(()=>btn.classList.remove('copied'),2000); }
}

function buildText(name) {
  const lines = [`📌 ${name}`, '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━'];
  let n = 0;
  STATE.board.forEach((row,ri)=>row.forEach((cell,ci)=>{
    if (!cell) return; n++;
    const its = (cell.items||[]).map(k=>(ITEMS[k]||{}).label||k).join(' · ');
    lines.push(`  [${ri}·${ci}] ${cell.key}${its?' | '+its:''}`);
  }));
  if (!n) lines.push('  (tablero vacío)');
  lines.push('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  lines.push('🔗 Creado en TFT·META Comp Builder');
  return lines.join('\n');
}

function buildCode(name) {
  const cells = [];
  STATE.board.forEach((row,ri)=>row.forEach((cell,ci)=>{
    if (cell) cells.push({r:ri,c:ci,k:cell.key,i:cell.items||[]});
  }));
  const json = JSON.stringify({v:1,n:name,cells});
  return 'TFT:'+btoa(encodeURIComponent(json).replace(/%([0-9A-F]{2})/g,(_,p)=>String.fromCharCode('0x'+p)));
}

// ================================================================
//  CÓDIGO DEL JUEGO TFT (Team Planner)
//
//  Formato: "01" + [2-char hex por campeón] + "TFTSet16"
//  Los códigos se generan ordenando TODOS los campeones del set
//  alfabéticamente por character_id y numerándolos 01, 02, 03...
//  Referencia: https://gist.github.com/bangingheads/243e396f78be1a4d49dc0577abf57a0b
// ================================================================
let _gameCodes = null;

async function loadGameCodes() {
  if (_gameCodes) return _gameCodes;
  const url = `${CDRAGON}v1/tftchampions-teamplanner.json`;
  const data = await (await fetch(url)).json();
  const list = (data.TFTSet16||[]).filter(c=>c.character_id);
  // Ordenar ALFABÉTICAMENTE — esto determina el código hex
  list.sort((a,b)=>a.character_id.localeCompare(b.character_id));
  _gameCodes = {};
  list.forEach((c,i)=>{
    _gameCodes[c.character_id.toLowerCase()] = (i+1).toString(16).padStart(2,'0').toUpperCase();
  });
  return _gameCodes;
}

async function copyGameCode() {
  const btn = document.getElementById('copyGameBtn');
  const champs = STATE.board.flat().filter(Boolean);
  if (!champs.length) { alert('Añade campeones al tablero primero.'); return; }

  btn.disabled = true;
  const orig = btn.innerHTML;
  btn.textContent = '⏳ Cargando...';

  try {
    const codes = await loadGameCodes();
    const parts = champs
      .map(c=>codes[CHAMPIONS[c.key]?.id])
      .filter(Boolean);

    if (!parts.length) throw new Error('Sin coincidencias en CDragon');

    const code = '01' + parts.join('') + 'TFTSet16';
    writeClipboard(code);

    btn.innerHTML = `✅ Copiado! <span style="font-size:9px;opacity:.7">${code.slice(0,20)}...</span>`;
    setTimeout(()=>{ btn.innerHTML=orig; btn.disabled=false; }, 3000);

  } catch(e) {
    btn.textContent = '❌ Error de red';
    setTimeout(()=>{ btn.innerHTML=orig; btn.disabled=false; }, 2500);
  }
}

// ================================================================
//  IMPORTAR / EXPORTAR
// ================================================================
function openImport() {
  document.getElementById('importModal').classList.add('open');
  document.getElementById('importCode').value='';
  document.getElementById('importError').textContent='';
}
function closeImport(event) {
  if (event && event.target!==document.getElementById('importModal')) return;
  document.getElementById('importModal').classList.remove('open');
}
function importComp() {
  const raw = (document.getElementById('importCode').value||'').trim();
  const err = document.getElementById('importError');
  err.textContent='';
  if (!raw.startsWith('TFT:')) { err.textContent='❌ Código inválido'; return; }
  try {
    const json = decodeURIComponent(Array.from(atob(raw.slice(4)),c=>'%'+c.charCodeAt(0).toString(16).padStart(2,'0')).join(''));
    const p = JSON.parse(json);
    if (p.v!==1||!Array.isArray(p.cells)) throw new Error('Formato incorrecto');
    STATE.board = Array.from({length:ROWS},()=>Array.from({length:COLS},()=>null));
    p.cells.forEach(({r,c,k,i})=>{
      if (r>=0&&r<ROWS&&c>=0&&c<COLS&&CHAMPIONS[k]) STATE.board[r][c]={key:k,items:i||[]};
    });
    if (p.n) { const inp=document.getElementById('compName'); if(inp) inp.value=p.n; }
    renderBoard();
    closeImport({target:document.getElementById('importModal')});
  } catch(e) { err.textContent='❌ Error: '+e.message; }
}

function checkImportParam() {
  const code = new URLSearchParams(location.search).get('import');
  if (code) { document.getElementById('importCode').value=code; importComp(); }
}

// ================================================================
//  INICIALIZACIÓN
// ================================================================
function init() {
  renderBoard();
  renderPool();
  renderItemsPanel();
  checkImportParam();
  // Pre-fetch CDragon en background para que el primer clic sea rápido
  loadGameCodes().catch(()=>{});
}

document.addEventListener('DOMContentLoaded', init);
