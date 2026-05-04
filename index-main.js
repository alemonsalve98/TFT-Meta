'use strict';

// ═══════════════════════════════════════════════════════════════════
//  CDragon BASE — verified working (same as tft-items.html)
// ═══════════════════════════════════════════════════════════════════
const BASE = 'https://sunderarmor.com/characters/Skin/16/';
const CDRAGON   = 'https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/';
// ── CHAMPION URL ──────────────────────────────────────────────────
// Verified from tftchampions-teamplanner.json:
// squareIconPath = /lol-game-data/assets/ASSETS/Characters/TFT16_Annie/HUD/TFT16_Annie_Square.TFT_Set16.jpg
// → BASE + assets/characters/tft16_annie/hud/tft16_annie_square.tft_set16.jpg

const CHAMP_ID = {
  Viego:      { img:'Viego',        id:'tft16_viego',         cost:1, traits:['ShadowIsles','Quickstriker'] },
  Sona:       { img:'Sona',         id:'tft16_sona',          cost:1, traits:['Demacia','Invoker'] },
  Anivia:     { img:'Anivia',       id:'tft16_anivia',        cost:1, traits:['Freljord','Invoker'] },
  Blitz:      { img:'Blitzcrank',   id:'tft16_blitzcrank',    cost:1, traits:['Zaun','Juggernaut'] },
  Briar:      { img:'Briar',        id:'tft16_briar',         cost:1, traits:['Noxus','Slayer','Juggernaut'] },
  Caitlyn:    { img:'Caitlyn',      id:'tft16_caitlyn',       cost:1, traits:['Piltover','Longshot'] },
  Illaoi:     { img:'Illaoi',       id:'tft16_illaoi',        cost:1, traits:['Bilgewater','Bruiser'] },
  Jarvaniv:   { img:'JarvanIV',     id:'tft16_jarvaniv',      cost:1, traits:['Demacia','Defender'] },
  Jhin:       { img:'Jhin',         id:'tft16_jhin',          cost:1, traits:['Ionia','Longshot'] },
  Kogmaw:     { img:'Kogmaw',       id:'tft16_kogmaw',        cost:1, traits:['Void','Arcanist','Longshot'] },
  Lulu:       { img:'Lulu',         id:'tft16_lulu',          cost:1, traits:['Yordle','Arcanist'] },
  Qiyana:     { img:'Qiyana',       id:'tft16_qiyana',        cost:1, traits:['Ixtal','Slayer'] },
  Rumble:     { img:'Rumble',       id:'tft16_rumble',        cost:1, traits:['Yordle','Defender'] },
  Shen:       { img:'Shen',         id:'tft16_shen',          cost:1, traits:['Ionia','Bruiser'] },

  // ── COSTO 2 ──
  Neeko:      { img:'Neeko',        id:'tft16_neeko',         cost:2, traits:['Ixtal','Arcanist','Defender'] },
  Vi:         { img:'Vi',           id:'tft16_vi',            cost:2, traits:['Piltover','Zaun','Defender'] },
  Ashe:       { img:'Ashe',         id:'tft16_ashe',          cost:2, traits:['Freljord','Quickstriker'] },
  Yorick:     { img:'Yorick',       id:'tft16_yorick',        cost:2, traits:['ShadowIsles','Warden'] },
  XinZhao:    { img:'XinZhao',      id:'tft16_xinzhao',       cost:2, traits:['Demacia','Ionia','Warden'] },
  Poppy:      { img:'Poppy',        id:'tft16_poppy',         cost:2, traits:['Yordle','Demacia','Juggernaut'] },
  Aphelios:   { img:'Aphelios',     id:'tft16_aphelios',      cost:2, traits:['Targon'] },
  Bardo:      { img:'Bard',         id:'tft16_bardo',         cost:2, traits:['Caretaker'] },
  ChoGath:    { img:'Chogath',      id:'tft16_chogath',       cost:2, traits:['Void','Juggernaut'] },
  Ekko:       { img:'Ekko',         id:'tft16_ekko',          cost:2, traits:['Zaun','Disruptor'] },
  Graves:     { img:'Graves',       id:'tft16_graves',        cost:2, traits:['Bilgewater','Gunslinger'] },
  Orianna:    { img:'Orianna',      id:'tft16_orianna',       cost:2, traits:['Piltover','Invoker'] },
  RekSai:     { img:'RekSai',       id:'tft16_reksai',        cost:2, traits:['Void','Vanquisher'] },
  Sion:       { img:'Sion',         id:'tft16_sion',          cost:2, traits:['Noxus','Bruiser'] },
  Teemo:      { img:'Teemo',        id:'tft16_teemo',         cost:2, traits:['Yordle','Longshot'] },
  Tristana:   { img:'Tristana',     id:'tft16_tristana',      cost:2, traits:['Yordle','Gunslinger'] },
  Tryndamere: { img:'Tryndamere',   id:'tft16_tryndamere',    cost:2, traits:['Freljord','Slayer'] },
  TwistedFate:{ img:'TwistedFate',  id:'tft16_twistedfate',   cost:2, traits:['Bilgewater','Quickstriker'] },
  Yasuo:      { img:'Yasuo',        id:'tft16_yasuo',         cost:2, traits:['Ionia','Slayer'] },

  // ── COSTO 3 ──
  Loris:      { img:'Loris',        id:'tft16_beardy',        cost:3, traits:['Piltover','Warden'] },
  Gwen:       { img:'Gwen',         id:'tft16_gwen',          cost:3, traits:['ShadowIsles','Disruptor'] },
  Jinx:       { img:'Jinx',         id:'tft16_jinx',          cost:3, traits:['Zaun','Gunslinger'] },
  Nautilus:   { img:'Nautilus',     id:'tft16_nautilus',      cost:3, traits:['Bilgewater','Juggernaut','Warden'] },
  Kennen:     { img:'Kennen',       id:'tft16_kennen',        cost:3, traits:['Ionia','Yordle','Defender'] },
  Ahri:       { img:'Ahri',         id:'tft16_ahri',          cost:3, traits:['Ionia','Arcanist'] },
  Kobuko:     { img:'Kobuko&Yuumi', id:'tft16_kobuko',        cost:3, traits:['Yordle','Invoker','Bruiser'] },
  Sejuani:    { img:'Sejuani',      id:'tft16_sejuani',       cost:3, traits:['Freljord','Defender'] },
  Draven:     { img:'Draven',       id:'tft16_draven',        cost:3, traits:['Noxus','Quickstriker'] },
  Darius:     { img:'Darius',       id:'tft16_darius',        cost:3, traits:['Noxus','Defender'] },
  DrMundo:    { img:'DrMundo',      id:'tft16_drmundo',       cost:3, traits:['Zaun','Bruiser'] },
  Gangplank:  { img:'Gangplank',    id:'tft16_gangplank',     cost:3, traits:['Bilgewater','Slayer','Vanquisher'] },
  LeBlanc:    { img:'Leblanc',      id:'tft16_leblanc',       cost:3, traits:['Noxus','Invoker'] },
  Leona:      { img:'Leona',        id:'tft16_leona',         cost:3, traits:['Targon'] },
  Malzahar:   { img:'Malzahar',     id:'tft16_malzahar',      cost:3, traits:['Void','Disruptor'] },
  Milio:      { img:'Milio',        id:'tft16_milio',         cost:3, traits:['Ixtal','Invoker'] },
  Vayne:      { img:'Vayne',        id:'tft16_vayne',         cost:3, traits:['Demacia','Longshot'] },
  Zoe:        { img:'Zoe',          id:'tft16_zoe',           cost:3, traits:['Targon'] },

  // ── COSTO 4 ──
  Taric:      { img:'Taric',        id:'tft16_taric',         cost:4, traits:['Targon'] },
  Swain:      { img:'Swain',        id:'tft16_swain',         cost:4, traits:['Noxus','Arcanist','Juggernaut'] },
  Lux:        { img:'Lux',          id:'tft16_lux',           cost:4, traits:['Demacia','Arcanist'] },
  Ambessa:    { img:'Ambessa',      id:'tft16_ambessa',       cost:4, traits:['Noxus','Vanquisher'] },
  Braum:      { img:'Braum',        id:'tft16_braum',         cost:4, traits:['Freljord','Warden'] },
  Kalista:    { img:'Kalista',      id:'tft16_kalista',       cost:4, traits:['ShadowIsles','Vanquisher'] },
  Wukong:     { img:'Wukong',       id:'tft16_wukong',        cost:4, traits:['Ionia','Bruiser'] },
  MF:         { img:'MissFortune',  id:'tft16_missfortune',   cost:4, traits:['Bilgewater','Gunslinger'] },
  Warwick:    { img:'Warwick',      id:'tft16_warwick',       cost:4, traits:['Zaun','Quickstriker'] },
  Skarner:    { img:'Skarner',      id:'tft16_skarner',       cost:4, traits:['Ixtal'] },
  Yone:       { img:'Yone',         id:'tft16_yone',          cost:4, traits:['Ionia','Slayer'] },
  Garen:      { img:'Garen',        id:'tft16_garen',         cost:4, traits:['Demacia','Defender'] },
  Lissandra:  { img:'Lissandra',    id:'tft16_lissandra',     cost:4, traits:['Freljord','Invoker'] },
  Seraphine:  { img:'Seraphine',    id:'tft16_seraphine',     cost:4, traits:['Piltover','Disruptor'] },
  BelVeth:    { img:'Belveth',      id:'tft16_belveth',       cost:4, traits:['Void','Slayer'] },
  Diana:      { img:'Diana',        id:'tft16_diana',         cost:4, traits:['Targon'] },
  Fizz:       { img:'Fizz',         id:'tft16_fizz',          cost:4, traits:['Bilgewater','Yordle'] },
  KaiSa:      { img:'Kaisa',        id:'tft16_kaisa',         cost:4, traits:['Void','Longshot','Assimilator'] },
  Nasus:      { img:'Nasus',        id:'tft16_nasus',         cost:4, traits:['Shurima'] },
  Nidalee:    { img:'Nidalee',      id:'tft16_nidalee',       cost:4, traits:['Ixtal','Huntress'] },
  Renekton:   { img:'Renekton',     id:'tft16_renekton',      cost:4, traits:['Shurima'] },
  Singed:     { img:'Singed',       id:'tft16_singed',        cost:4, traits:['Zaun','Juggernaut'] },
  Veigar:     { img:'Veigar',       id:'tft16_veigar',        cost:4, traits:['Yordle','Arcanist'] },
  Yunara:     { img:'Yunara',       id:'tft16_yunara',        cost:4, traits:['Ionia','Quickstriker'] },

  // ── COSTO 5 ──
  Annie:      { img:'Annie',        id:'tft16_annie',         cost:5, traits:['DarkChild','Arcanist'] },
  Tibbers:    { img:'Tibbers',      id:'tft16_annietibbers',  cost:5, traits:['Arcanist'] },
  Shyvana:    { img:'Shyvana',      id:'tft16_shyvana',       cost:5, traits:['Dragonborn','Juggernaut'] },
  Fiddle:     { img:'Fiddlesticks', id:'tft16_fiddlesticks',  cost:5, traits:['Harvester','Vanquisher'] },
  Mel:        { img:'Mel',          id:'tft16_mel',           cost:5, traits:['Noxus','Disruptor'] },
  Thresh:     { img:'Thresh',       id:'tft16_thresh',        cost:5, traits:['ShadowIsles','Warden'] },
  Ornn:       { img:'Ornn',         id:'tft16_ornn',          cost:5, traits:['Blacksmith','Warden'] },
  Lucian:     { img:'Lucian&Senna', id:'tft16_lucian',        cost:5, traits:['Soulbound','Gunslinger'] },
  TahmK:      { img:'TahmKench',    id:'tft16_tahmkench',     cost:5, traits:['Bilgewater','Glutton','Bruiser'] },
  Kindred:    { img:'Kindred',      id:'tft16_kindred',       cost:5, traits:['Eternal','Quickstriker'] },
  Aatrox:     { img:'Aatrox',       id:'tft16_aatrox',        cost:5, traits:['Darkin','WorldEnder','Slayer'] },
  Sett:       { img:'Sett',         id:'tft16_sett',          cost:5, traits:['Ionia','TheBoss'] },
  Zilean:     { img:'Zilean',       id:'tft16_zilean',        cost:5, traits:['Invoker','Chronokeeper'] },
  Volibear:   { img:'Volibear',     id:'tft16_volibear',      cost:5, traits:['Freljord','Bruiser'] },
  AurelionSol:{ img:'AurelionSol',  id:'tft16_aurelionsol',   cost:5, traits:['StarForger','Targon'] },
  Azir:       { img:'Azir',         id:'tft16_azir',          cost:5, traits:['Shurima','Emperor','Disruptor'] },
  Brock:      { img:'Brock',        id:'tft16_brock',         cost:5, traits:['Ixtal'] },
  Galio:      { img:'Galio',        id:'tft16_galio',         cost:5, traits:['Demacia','Heroic'] },
  THex:       { img:'T-Hex',        id:'tft16_thex',          cost:5, traits:['Piltover','HexMech','Gunslinger'] },
  Xerath:     { img:'Xerath',       id:'tft16_xerath',        cost:5, traits:['Shurima','Ascendant'] },

  // ── PRISMATIC (especial) ──
  Sylas:      { img:'Sylas',        id:'tft16_sylas',         cost:7, traits:['Cahinbreaker','Arcanist','Defender'] },
  Ryze:       { img:'Ryze',         id:'tft16_ryze',          cost:7, traits:['RuneMage'] },
};

function champUrl(k) {
  const ch = CHAMP_ID[k];
  if (!ch) return '';
  return `${BASE}${encodeURIComponent(ch.img)}.png`;
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


// ================================================================
//  PANEL DE RASGOS EN TIEMPO REAL
//  Calcula los rasgos activos a partir del tablero y los muestra
//  ordenados por count (más activo primero).
// ================================================================

const SA = 'https://sunderarmor.com/items/';

const ITEM = {
  Evenshroud:              { url: SA+'Evenshroud.png', l:'Evenshroud', tier:'S', e:'💜' },
  GuinsoosRageblade:       { url: SA+'GuinsoosRageblade.png', l:"Guinsoo's Rageblade", tier:'S', e:'⚡' },
  JeweledGauntlet:         { url: SA+'JeweledGauntlet.png', l:'Jeweled Gauntlet', tier:'S', e:'💎' },
  KrakensFury:             { url: SA+'KrakensFury.png', l:"Kraken's Fury", tier:'S', e:'🔱' },
  Morellonomicon:          { url: SA+'Morellonomicon.png', l:'Morellonomicon', tier:'S', e:'☠' },
  NashorsTooth:            { url: SA+'NashorsTooth.png', l:"Nashor's Tooth", tier:'S', e:'🦷' },
  RedBuff:                 { url: SA+'RedBuff.png', l:'Red Buff', tier:'S', e:'🔴' },
  SpearofShojin:           { url: SA+'SpearofShojin.png', l:'Spear of Shojin', tier:'S', e:'⚔' },
  SpiritVisage:            { url: SA+'SpiritVisage.png', l:'Spirit Visage', tier:'S', e:'🌿' },
  SunfireCape:             { url: SA+'SunfireCape.png', l:'Sunfire Cape', tier:'S', e:'🔥' },
  TitansResolve:           { url: SA+'TitansResolve.png', l:"Titan's Resolve", tier:'S', e:'🛡' },
  VoidStaff:               { url: SA+'VoidStaff.png', l:'Void Staff', tier:'S', e:'🌀' },
  AdaptiveHelm:            { url: SA+'AdaptiveHelm.png', l:'Adaptive Helm', tier:'A', e:'⛑' },
  ArchangelsStaff:         { url: SA+'ArchangelsStaff.png', l:"Archangel's Staff", tier:'A', e:'👼' },
  Bloodthirster:           { url: SA+'Bloodthirster.png', l:'Bloodthirster', tier:'A', e:'🩸' },
  BrambleVest:             { url: SA+'BrambleVest.png', l:'Bramble Vest', tier:'A', e:'🛡' },
  Deathblade:              { url: SA+'Deathblade.png', l:'Deathblade', tier:'A', e:'⚔' },
  DragonsClaw:             { url: SA+'DragonsClaw.png', l:"Dragon's Claw", tier:'A', e:'🐉' },
  GargoyleStoneplate:      { url: SA+'GargoyleStoneplate.png', l:'Gargoyle Stoneplate', tier:'A', e:'🗿' },
  GiantSlayer:             { url: SA+'GiantSlayer.png', l:'Giant Slayer', tier:'A', e:'🪓' },
  HandofJustice:           { url: SA+'HandofJustice.png', l:'Hand of Justice', tier:'A', e:'⚖' },
  InfinityEdge:            { url: SA+'InfinityEdge.png', l:'Infinity Edge', tier:'A', e:'💥' },
  IonicSpark:              { url: SA+'IonicSpark.png', l:'Ionic Spark', tier:'A', e:'⚡' },
  LastWhisper:             { url: SA+'LastWhisper.png', l:'Last Whisper', tier:'A', e:'🗡' },
  Quicksilver:             { url: SA+'Quicksilver.png', l:'Quicksilver', tier:'A', e:'💨' },
  RabadonsDeathcap:        { url: SA+'RabadonsDeathcap.png', l:"Rabadon's Deathcap", tier:'A', e:'🎩' },
  SteraksGage:             { url: SA+'SteraksGage.png', l:"Sterak's Gage", tier:'A', e:'💪' },
  StrikersFlail:           { url: SA+'StrikersFlail.png', l:"Striker's Flail", tier:'A', e:'🔨' },
  ThiefsGloves:            { url: SA+'ThiefsGloves.png', l:"Thief's Gloves", tier:'A', e:'🧤' },
  WarmogsArmor:            { url: SA+'WarmogsArmor.png', l:"Warmog's Armor", tier:'A', e:'❤' },
  BlueBuff:                { url: SA+'BlueBuff.png', l:'Blue Buff', tier:'B', e:'💙' },
  Crownguard:              { url: SA+'Crownguard.png', l:'Crownguard', tier:'B', e:'👑' },
  EdgeofNight:             { url: SA+'EdgeofNight.png', l:'Edge of Night', tier:'B', e:'🌑' },
  HextechGunblade:         { url: SA+'HextechGunblade.png', l:'Hextech Gunblade', tier:'B', e:'🔫' },
  ProtectorsVow:           { url: SA+'ProtectorsVow.png', l:"Protector's Vow", tier:'B', e:'🛡' },
  SteadfastHeart:          { url: SA+'SteadfastHeart.png', l:'Steadfast Heart', tier:'B', e:'❤' },
  BFSword:                 { url: SA+'BFSword.png', l:'B.F. Sword', tier:'C', e:'⚔' },
  NeedlesslyLargeRod:      { url: SA+'NeedlesslyLargeRod.png', l:'Needlessly Large Rod', tier:'C', e:'🪄' },
  RecurveBow:              { url: SA+'RecurveBow.png', l:'Recurve Bow', tier:'C', e:'🏹' },
  ChainVest:               { url: SA+'ChainVest.png', l:'Chain Vest', tier:'C', e:'🛡' },
  TearoftheGoddess:        { url: SA+'TearoftheGoddess.png', l:'Tear of the Goddess', tier:'C', e:'💧' },
  Pickaxe:                 { url: SA+'Pickaxe.png', l:'Pickaxe', tier:'C', e:'⛏' },
  NegatronCloak:           { url: SA+'NegatronCloak.png', l:'Negatron Cloak', tier:'C', e:'🔵' },
  SparringGloves:          { url: SA+'SparringGloves.png', l:'Sparring Gloves', tier:'C', e:'🥊' },
  GiantsBelt:              { url: SA+'GiantsBelt.png', l:"Giant's Belt", tier:'C', e:'🟤' },
  Kindlegem:               { url: SA+'Kindlegem.png', l:'Kindlegem', tier:'C', e:'💚' },
  Spatula:                 { url: SA+'Spatula.png', l:'Spatula', tier:'C', e:'🍳' },
  PileOCitrus:             { url: SA+'PileOCitrus.png', l:"Pile O' Citrus", tier:'B', e:'💪'},
  Barknuckles:             { url: SA+'Barknuckles.png', l:'Barknuckles', tier:'B', e:'🔵'}
};

function iUrl(k)   { return (ITEM[k]||{}).url||''; }
function iLabel(k) { return (ITEM[k]||{l:k}).l; }
function iEmoji(k) { return (ITEM[k]||{e:'●'}).e; }
function iTier(k)  { return (ITEM[k]||{tier:'C'}).tier; }

// ── HELPERS ───────────────────────────────────────────────────────
function ini(n){ const w=n.split(/[\s&]+/); return w.length>=2?(w[0][0]+w[1][0]).toUpperCase():n.slice(0,2).toUpperCase(); }

// Universal image element: shows img, falls back to emoji/initials on error
function mkImg(src,alt,extraStyle=''){
  if(!src) return '';
  return `<img src="${src}" alt="${alt}" crossorigin="anonymous" style="${extraStyle}" onerror="this.style.display='none'">`;
}

// ── DATA ──────────────────────────────────────────────────────────
const DATA = [

  
  /* ═══ S TIER ═══ */

  {
    tier: 'S',
    name: 'Yordle Rumble',
    style: 'Slow Roll',
    tags: [],
    avgPlace: '3.87',
    top2: '18%',
    top4: '61%',
    tips: 'Rumble es tu prioridad absoluta; si no lo consigues al 3-Star, la composición pierde potencia en late game. Prioriza el Guinsoo para que escale su daño junto con el aumento de héroe. Mantén la racha de derrotas en fase 2 para maximizar oro, pero no bajes de 60 de vida.',
    when: 'Solo si obtienes el aumento "Artillery Barrage" o si el juego te regala al menos 3 copias de Rumble antes de la fase 3-2. Es ideal cuando nadie más en la sala está haciendo "reroll" de coste 2.',
    augments: [{n: 'Deadlier Caps', t: 'gold'}, {n: 'Pandoras Items', t: 'silver'}, {n: 'Pandoras Items', t: 'gold'},{n: 'Component Buffet', t:'silver'}],
    carousel: [{k: 'NeedlesslyLargeRod', p: 'high'}, {k: 'RecurveBow', p: 'high'}, {k: 'TearoftheGoddess', p: 'high'}, {k: 'GiantsBelt', p: 'med'}],

    board: [
      [null,null,{n: 'Kobuko', k: 'Kobuko',carry:true,items:['BrambleVest','DragonsClaw','SpiritVisage'], c: 3},{n:'Kennen', k:'Kennen', carry: true, items:['IonicSpark','SunfireCape','SpiritVisage'], c:3},{n:'Poppy', k:'Poppy',carry:true, c:2},{n:'Fizz', k:'Fizz',items:['JeweledGauntlet','StrikersFlail','HandofJustice'], c:4},null],

      [null,null, null, null, null, null, null],

      [null,null,null,null, null, null, null],

      [{n:'Rumble', k:'Rumble',carry: true, items:['GuinsoosRageblade','RabadonsDeathcap','VoidStaff'], c:1}, {n:'Tristana', k:'Tristana',carry:true, c:2}, {n:'Teemo', k:'Teemo',carry:true, c:2},null, {n:'Lulu', k:'Lulu',carry:true, c:2}, null,null]
    ]
  },

  {
    tier: 'S',
    name: 'Demacia Vayne',
    style: 'Slow Roll',
    tags: ['trending'],
    avgPlace: '3.97',
    top2: '15.2%',
    top4: '61.1%',
    tips: 'Prioriza Krankens Fury y Hextech Gunblade en Vayne; su daño verdadero tritura tanques. Garen es tu CC principal, asegúrate de que tenga ítems',
    when: 'Si consigues a Vayne 2* temprano o una Espátula Demacia. Es ideal si tienes un inicio de racha de victorias (Win Streak) y puedes rushear el nivel 7 para estabilizar.',
    augments: [{n: 'Epoch', t: 'gold'}, {n: 'Heavy is the Crown', t: 'gold'}, {n: 'Heroic Grab Bag', t: 'gold'},{n:'Big Grab Bag', t:'gold'}],
    carousel: [{k: 'NegatronCloak', p: 'high'}, {k: 'RecurveBow', p: 'high'}, {k: 'BFSword', p: 'high'}, {k: 'SparringGloves', p: 'med'}],
    board: [

      [{n:'Taric', k:'Taric', c:4},null,{n:'Poppy', k:'Poppy', c:2},{n: 'Garen', k: 'Garen', items:['BrambleVest','DragonsClaw','SunfireCape'], c: 4},{n:'Jarvaniv', k:'Jarvaniv', c:1},null,null],

      [null, null,null,{n:'Galio', k:'Galio', items:['AdaptiveHelm'], c:5},null, null, null],


      [null, null, null, null, null, null, null],

      [{n:'Vayne', k:'Vayne', carry:true, items:['HextechGunblade','KrakensFury','KrakensFury','GuinsoosRageblade'], c:3}, null, {n:'Kogmaw', k:'Kogmaw', c:1}, null,null, null, {n:'Kaisa',  k:'KaiSa', items:['InfinityEdge','LastWhisper','SpearofShojin'], c:4}]
    ]
  },

  {
    tier: 'S',
    name: 'Defender Aphelios',
    style: 'Fast 8',
    tags: [],
    avgPlace: '3.9',
    top2: '13.8%',
    top4: '60.5%',
    tips: 'La clave es la adaptabilidad del arma. Selecciona la Onda de Choque (Morada) para aturdir a enemigos explosivos o la Ráfaga Solar (Azul) para maximizar el daño en área si tu línea frontal es sólida. Posiciona a tus tanques en "U" para centralizar el foco y proteger a Aphelios en la esquina.',
    when: 'Es ideal en salas dominadas por daño físico (AD), donde la armadura masiva de los Defensores anula al rival. Prioriza esta ruta si obtienes componentes de Arco Curvo o Espada del Espadón temprano y cuentas con una línea frontal de dos estrellas antes de llegar al nivel 8',
    augments: [{n: 'Warden Crown', t: 'prismatic'}, {n: 'Shadow Isles Crest', t: 'gold'}, {n: 'Last Stand', t: 'silver'}],
    carousel: [{k: 'RecurveBow', p: 'high'}, {k: 'NeedlesslyLargeRod', p: 'high'}, {k: 'SparringGloves', p: 'high'}, {k: 'TearoftheGoddess', p: 'med'}],

    board: [
      [null, {n: 'Vi', k: 'Vi', c: 2}, {n: 'Loris', k: 'Loris', carry:true ,c: 3}, {n: 'Neeko', k: 'Neeko', carry:true, c: 2, items: ['BrambleVest', 'SunfireCape', 'SpiritVisage']}, {n: 'Swain', k: 'Swain', c: 4}, {n: 'Taric', k: 'Taric', c: 4}, {n:'Nidalee', k:'Nidalee', c:4, items:['JeweledGauntlet','StrikersFlail','HandofJustice']}],

      [null, null, null,null, null, null, null],

      [null, null, null, null, null, null, null],

      [{n: 'Aphelios', k: 'Aphelios', c: 2, carry: true, items: ['GuinsoosRageblade', 'InfinityEdge', 'KrakensFury']}, {n:'Bardo', k:'Bardo', carry:true, c:2, items:['ArchangelsStaff','SpearofShojin','VoidStaff']}, null, null, null, null, null]
    ]
  },

  {
    tier: 'S',
    name: 'Targon Malzahar',
    style: 'Slow Roll',
    tags: [],
    avgPlace: '4.02',
    top2: '14.9%',
    top4: '59%',
    tips: 'La clave es el Diente de Nashor doble. Esta combinación permite que Malzahar aproveche el enorme escudo de Targon para ganar tiempo y activar ráfagas constantes de velocidad de ataque, transformándolo en un ametralladora de hechizos que aplica el quemado del Morellonomicon a toda la mesa en segundos.',

    when: 'Elígelo si inicias con varios componentes de Arco Curvo y Cinturón de Gigante. Es una ruta excelente cuando tienes a Taric al nivel 2 temprano, ya que su protección garantiza que Malzahar active la pasiva de ambos Dientes de Nashor repetidamente sin morir.',

    augments: [{n: 'Two Much Value', t: 'gold'}, {n: 'Calculated Loss', t: 'gold'}, {n: 'Trade Sector', t: 'gold'}],
    carousel: [{k: 'GiantsBelt', p: 'high'}, {k: 'NeedlesslyLargeRod', p: 'high'}, {k: 'TearoftheGoddess', p: 'high'}, {k: 'ChainVest', p: 'med'}],

    board: [
      [null, {n: 'Taric', k: 'Taric', c: 4}, {n: 'Neeko', k: 'Neeko', c: 2}, {n:'Leona', k:'Leona', carry:true,  c:2, items:['BrambleVest','DragonsClaw','GargoyleStoneplate']}, null, null, null],

      [null, null, null, {n:'Vi', k:'Vi', c:2}, null, null, null],

      [null, null, null, null, null, null, null],

      [{n:'Malzahar', k:'Malzahar', carry: true,c:3, items:['JeweledGauntlet','NashorsTooth','GuinsoosRageblade']}, null, null, {n:'Seraphine', k:'Seraphine', c:4, items:['Morellonomicon','SpearofShojin','VoidStaff']}, {n: 'Kogmaw', k: 'Kogmaw', c: 1}, null, {n: 'Zoe', k: 'Zoe', c: 3, items: ['HextechGunblade', 'SpearofShojin', 'JeweledGauntlet']}]
    ]
  },

  {
    tier: 'S',
    name: 'Freljord Quickstrikers',
    style: 'Slow Roll',
    tags: [],
    avgPlace: '4.12',
    top2: '12.8%',
    top4: '58%',
    tips: 'Roll a nivel 7 buscando Jinx 3★. Sejuani tanquea con Evenshroud + Sunfire.',
    when: 'Slow Roll en nivel 6–7. Ideal con augment Freljord.',
    augments: [{n: 'Freljord Crest', t: 'gold'}, {n: 'Quickstriker Crown', t: 'prismatic'}, {n: 'Locket of Solari', t: 'silver'}],
    carousel: [{k: 'GuinsoosRageblade', p: 'high'}, {k: 'KrakensFury', p: 'high'}, {k: 'LastWhisper', p: 'high'}, {k: 'Evenshroud', p: 'med'}],
    board: [
      [null, {n: 'Sejuani', k: 'Sejuani', c: 3, items: ['Evenshroud', 'SunfireCape', 'SpiritVisage']}, {n: 'Braum', k: 'Braum', c: 4}, null, {n: 'Loris', k: 'Loris', c: 3}, null, null],
      [{n: 'Warwick', k: 'Warwick', c: 4, items: ['Bloodthirster', 'SteraksGage', 'TitansResolve']}, null, {n: 'Vi', k: 'Vi', c: 2}, null, null, null, null],
      [null, null, null, null, null, null, null],
      [{n: 'Jinx', k: 'Jinx', c: 3, carry: true, items: ['GuinsoosRageblade', 'KrakensFury', 'LastWhisper']}, {n: 'Lucian', k: 'Lucian', c: 5}, {n: 'Ashe', k: 'Ashe', c: 2}, null, null, null, null]
    ]
  },

  {
    tier: 'S',
    name: 'Eternal Noxus',
    style: 'Fast 9',
    tags: [],
    avgPlace: '2.6',
    top2: '45%',
    top4: '71%',
    tips: 'Kindred lleva items AD. Skarner con Evenshroud reduce MR enemigo para amplificar el daño.',
    when: 'Con augment Eternal o Noxus en early.',
    augments: [{n: 'Eternal Crest', t: 'gold'}, {n: 'Noxus Crown', t: 'prismatic'}, {n: 'Scopier Weapons', t: 'silver'}],
    carousel: [{k: 'GiantSlayer', p: 'high'}, {k: 'GuinsoosRageblade', p: 'high'}, {k: 'KrakensFury', p: 'high'}, {k: 'Evenshroud', p: 'med'}],
    board: [
      [null, {n: 'Skarner', k: 'Skarner', c: 4, items: ['Evenshroud', 'GargoyleStoneplate', 'SunfireCape']}, {n: 'Taric', k: 'Taric', c: 4}, {n: 'Swain', k: 'Swain', c: 4}, null, null, null],
      [null, {n: 'Draven', k: 'Draven', c: 3}, {n: 'Ambessa', k: 'Ambessa', c: 4}, {n: 'Shyvana', k: 'Shyvana', c: 5}, null, null, null],
      [null, null, {n: 'Fiddle', k: 'Fiddle', c: 5}, {n: 'Kindred', k: 'Kindred', c: 5, carry: true, items: ['GiantSlayer', 'GuinsoosRageblade', 'KrakensFury']}, null, null, null],
      [null, null, null, {n: 'Lucian', k: 'Lucian', c: 5}, null, null, null]
    ]
  },

  {
    tier: 'S',
    name: 'IONIAN YONE WUKON',
    style: 'Fast 9',
    tags: [],
    avgPlace: '4.20',
    top2: '10.3%',
    top4: '57%',
    tips: '',
    when: '',
    augments: [{n: 'Epoch', t: 'gold'}, {n: 'Infinity Protection', t: 'gold'}, {n: 'Jeweled Lotus I', t: 'gold'}, {n: 'Jeweled Lotus II', t: 'prismatic'}],
    carousel: [{k: 'GuinsoosRageblade', p: 'high'}, {k: 'SunfireCape', p: 'high'}, {k: 'JeweledGauntlet', p: 'high'}, {k: 'Evenshroud', p: 'med'}],
    board: [
      [{n: 'Sylas', k: 'Sylas', c: 7, items: ['EdgeofNight', 'JeweledGauntlet', 'HandofJustice']}, {n: 'Kobuko', k: 'Kobuko', c: 3}, {n: 'Yone', k: 'Yone', c: 4, carry: true, items: ['Bloodthirster', 'GuinsoosRageblade', 'TitansResolve']}, {n: 'Wukong', k: 'Wukong', c: 4, items: ['SunfireCape', 'SpiritVisage', 'Evenshroud']}, {n: 'Kennen', k: 'Kennen', c: 3}, {n: 'Aatrox', k: 'Aatrox', c: 5}, {n: 'Sett', k: 'Sett', c: 5}],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [{n: 'Ahri', k: 'Ahri', c: 3}, null, null, {n: 'Zilean', k: 'Zilean', c: 5}, null, null, null]
    ]
  },

  /* ═══ A TIER ═══ */

  {
    tier: 'A',
    name: 'NOXUS TARIC',
    style: 'Fast 9',
    tags: [],
    avgPlace: '4.2',
    top2: '17.6%',
    top4: '53%',
    tips: '',
    when: '',
    augments: [{n: 'Late Game Scaling', t: 'gold'}, {n: 'Bronze for life II', t: 'prismatic'}, {n: 'Bronze for life I', t: 'gold'}, {n: 'Epoch', t: 'gold'}],
    carousel: [{k: 'NashorsTooth', p: 'high'}, {k: 'Morellonomicon', p: 'high'}, {k: 'SunfireCape', p: 'high'}, {k: 'SpearofShojin', p: 'med'}],
    board: [
      [null, {n: 'Shyvana', k: 'Shyvana', c: 5}, {n: 'Sylas', k: 'Sylas', c: 7, items: ['EdgeofNight', 'JeweledGauntlet', 'HandofJustice']}, {n: 'Taric', k: 'Taric', c: 4, items: ['SunfireCape', 'BrambleVest', 'IonicSpark']}, {n: 'Swain', k: 'Swain', c: 4}, {n: 'Renekton', k: 'Renekton'}, {n: 'Darius', k: 'Darius', c: 3}],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [{n: 'Mel', k: 'Mel', c: 5, items: ['NashorsTooth', 'NashorsTooth', 'JeweledGauntlet']}, null, {n: 'Azir', k: 'Azir', c: 5}, null, null, null, {n: 'Ryze', k: 'Ryze', c: 7, items: ['Morellonomicon', 'SpearofShojin', 'VoidStaff']}]
    ]
  },

  {
    tier: 'A',
    name: 'Kindred Noxus',
    style: 'Fast 9',
    slug: 'kindred-noxus',
    avgPlace: '4.1',
    top2: '22%',
    top4: '52%',
    tips: 'Skarner es tu tanque principal con Evenshroud para amplificar el daño de Kindred. Fiddlesticks posicionado en esquina trasera maximiza su ulti de área. Taric/Braum absorben el frontline. Apunta 5 Noxus + Eternal.',
    when: 'Cuando encuentres Kindred early y tengas componentes AD (Bow + Pickaxe). Fast 9 para conseguir Fiddlesticks y Shyvana.',
    augments: [{n: 'Noxus Crest', t: 'gold'}, {n: 'Eternal Soul', t: 'prismatic'}, {n: 'Kindred\'s Hunt I', t: 'silver'}],
    carousel: [{k: 'GuinsoosRageblade', p: 'high'}, {k: 'KrakensFury', p: 'high'}, {k: 'Evenshroud', p: 'high'}, {k: 'GiantSlayer', p: 'med'}],
    board: [
      [{n: 'Skarner', k: 'Skarner', c: 4, items: ['Evenshroud', 'GargoyleStoneplate', 'SunfireCape']}, null, {n: 'Taric', k: 'Taric', c: 4}, null, {n: 'Ambessa', k: 'Ambessa', c: 4}, null, {n: 'Shyvana', k: 'Shyvana', c: 5}],
      [null, {n: 'Swain', k: 'Swain', c: 2}, null, null, null, {n: 'Draven', k: 'Draven', c: 3}, null],
      [null, null, {n: 'Lucian', k: 'Lucian', c: 4}, null, {n: 'Fiddle', k: 'Fiddle', c: 5}, null, null],
      [null, null, null, {n: 'Kindred', k: 'Kindred', c: 5, carry: true, items: ['GuinsoosRageblade', 'KrakensFury', 'GiantSlayer']}, null, null, null]
    ]
  },

  {
    tier: 'A',
    name: 'Ionia Ahri Reroll',
    style: 'Slow Roll 6',
    slug: 'ionia-ahri-reroll',
    avgPlace: '4.2',
    top2: '20%',
    top4: '50%',
    tips: 'Ahri y Yone son dual carries — Ahri AP y Yone AD. Wukong tanquea frontline. Roll agresivo en nivel 6 hasta Ahri 3★. Kobuko & Yuumi activa Invoker para el bounce de habilidades. Busca 4 Ionia + 3 Arcanista.',
    when: 'Cuando encuentres Ahri x2 en tiendas tempranas. No entres si no tienes Rod o Tear como componentes iniciales.',
    augments: [{n: 'Ionia Crest', t: 'gold'}, {n: 'Ahri\'s Charm', t: 'prismatic'}, {n: 'Arcanist Soul', t: 'gold'}],
    carousel: [{k: 'NashorsTooth', p: 'high'}, {k: 'JeweledGauntlet', p: 'high'}, {k: 'SpearofShojin', p: 'high'}, {k: 'EdgeofNight', p: 'med'}],
    board: [
      [{n: 'Wukong', k: 'Wukong', c: 4, items: ['BrambleVest', 'SunfireCape', 'SpiritVisage']}, null, {n: 'Neeko', k: 'Neeko', c: 2}, null, {n: 'Vi', k: 'Vi', c: 2}, null, {n: 'Kobuko', k: 'Kobuko', c: 2}],
      [null, {n: 'Kennen', k: 'Kennen', c: 3}, null, null, null, {n: 'Shen', k: 'Shen', c: 1}, null],
      [null, null, {n: 'Yone', k: 'Yone', c: 4, items: ['EdgeofNight', 'TitansResolve', 'Deathblade']}, null, {n: 'Ahri', k: 'Ahri', c: 3, carry: true, items: ['NashorsTooth', 'JeweledGauntlet', 'SpearofShojin']}, null, null],
      [null, null, null, null, null, null, null]
    ]
  },

  {
    tier: 'A',
    name: 'Noxus Atakhan',
    style: 'Fast 9',
    slug: 'noxus-atakhan',
    avgPlace: '4.3',
    top2: '19%',
    top4: '49%',
    tips: 'Darius es el carry AP/tanque hibrido con Adaptive Helm. LeBlanc es el carry AP secundario posicionado en esquina. Apunta 4 Noxus + 3 Disruptor. Sion y Briar frontline para aguantar mientras Darius escala.',
    when: 'Cuando tengas Kindlegem + Rod temprano y veas Darius en tiendas 2-3. LeBlanc de nivel 4 es tu señal de ir Fast 9.',
    augments: [{n: 'Noxus Heart', t: 'gold'}, {n: 'Darius\'s Might', t: 'prismatic'}, {n: 'Disruptor Soul', t: 'silver'}],
    carousel: [{k: 'AdaptiveHelm', p: 'high'}, {k: 'TitansResolve', p: 'high'}, {k: 'SpearofShojin', p: 'med'}, {k: 'SteraksGage', p: 'med'}],
    board: [
      [{n: 'Sion', k: 'Sion', c: 2}, null, {n: 'Neeko', k: 'Neeko', c: 2}, null, {n: 'Swain', k: 'Swain', c: 2}, null, {n: 'Ambessa', k: 'Ambessa', c: 4}],
      [null, {n: 'Draven', k: 'Draven', c: 3}, null, null, null, {n: 'Kindred', k: 'Kindred', c: 5}, null],
      [null, null, {n: 'LeBlanc', k: 'LeBlanc', c: 4, items: ['JeweledGauntlet', 'SpearofShojin', 'VoidStaff']}, null, null, null, null],
      [null, null, null, {n: 'Darius', k: 'Darius', c: 3, carry: true, items: ['AdaptiveHelm', 'SteraksGage', 'TitansResolve']}, null, null, null]
    ]
  },

  /* ═══ B TIER ═══ */

  {
    tier: 'B',
    name: 'Bilgewater Max Cap',
    style: 'Fast 9',
    slug: 'bilgewater-max-cap',
    avgPlace: '4.5',
    top2: '16%',
    top4: '44%',
    tips: 'TahmKench 5★ con BilgewaterEmblem es el objetivo final. MF es el carry principal hasta llegar a Tahm.',
    when: 'SOLO si encuentras BilgewaterEmblem antes de nivel 7.',
    augments: [{n: 'Bilgewater Heart', t: 'gold'}, {n: 'Glutton\'s Crown', t: 'prismatic'}, {n: 'Bilgewater Soul', t: 'gold'}],
    carousel: [{k: 'SpearofShojin', p: 'high'}, {k: 'Bloodthirster', p: 'high'}, {k: 'Barknuckles', p: 'high'}, {k: 'ProtectorsVow', p: 'med'}],
    board: [
      [{n: 'Nautilus', k: 'Nautilus', c: 3}, null, {n: 'Wukong', k: 'Wukong', c: 4}, null, {n: 'Ornn', k: 'Ornn', c: 5}, null, {n: 'TahmK', k: 'TahmK', c: 5, carry: true, items: ['Barknuckles', 'ProtectorsVow', 'WarmogsArmor']}],
      [null, {n: 'Taric', k: 'Taric', c: 4}, null, null, null, {n: 'Fiddle', k: 'Fiddle', c: 5}, null],
      [null, null, {n: 'Lucian', k: 'Lucian', c: 4, items: ['LastWhisper', 'RedBuff']}, null, {n: 'Shyvana', k: 'Shyvana', c: 5}, null, null],
      [null, null, null, {n: 'MF', k: 'MF', c: 4, items: ['SpearofShojin', 'Bloodthirster', 'StrikersFlail']}, null, null, null]
    ]
  },

  {
    tier: 'B',
    name: 'Void Kaisa Flex',
    style: 'Fast 8',
    slug: 'void-kaisa-flex',
    avgPlace: '4.6',
    top2: '15%',
    top4: '42%',
    tips: 'Kaisa necesita 4 Void activos. Bel\'Veth secundaria con velocidad de ataque.',
    when: 'Cuando tengas Guinsoo\'s o Recurve Bow tempranos.',
    augments: [{n: 'Void Crest', t: 'gold'}, {n: 'Bel\'Veth\'s Void', t: 'prismatic'}, {n: 'Disruptor Soul', t: 'silver'}],
    carousel: [{k: 'GuinsoosRageblade', p: 'high'}, {k: 'KrakensFury', p: 'high'}, {k: 'Quicksilver', p: 'med'}, {k: 'VoidStaff', p: 'med'}],
    board: [
      [{n: 'ChoGath', k: 'ChoGath', c: 2, items: ['BrambleVest', 'SunfireCape', 'Evenshroud']}, null, {n: 'RekSai', k: 'RekSai', c: 2}, null, {n: 'Malzahar', k: 'Malzahar', c: 3}, null, {n: 'Skarner', k: 'Skarner', c: 4}],
      [null, {n: 'Neeko', k: 'Neeko', c: 2}, null, null, null, {n: 'Fiddle', k: 'Fiddle', c: 5}, null],
      [null, null, {n: 'BelVeth', k: 'BelVeth', c: 4, items: ['TitansResolve', 'Quicksilver']}, null, {n: 'Shyvana', k: 'Shyvana', c: 5}, null, null],
      [null, null, null, {n: 'KaiSa', k: 'KaiSa', c: 4, carry: true, items: ['GuinsoosRageblade', 'KrakensFury', 'LastWhisper']}, null, null, null]
    ]
  },

  {
    tier: 'B',
    name: 'Nidalee AP Flex',
    style: 'Fast 8',
    slug: 'nidalee-ap-flex',
    avgPlace: '4.7',
    top2: '14%',
    top4: '40%',
    tips: 'Nidalee 5★ hace daño masivo. Milio + Lissandra soporte Invoker.',
    when: 'Cuando tengas Rod + Tear tempranos y Nidalee early.',
    augments: [{n: 'Ixtal Crest', t: 'gold'}, {n: 'Nidalee\'s Hunt', t: 'prismatic'}, {n: 'Invoker Soul', t: 'silver'}],
    carousel: [{k: 'NashorsTooth', p: 'high'}, {k: 'JeweledGauntlet', p: 'high'}, {k: 'SpearofShojin', p: 'high'}, {k: 'Morellonomicon', p: 'med'}],
    board: [
      [{n: 'Neeko', k: 'Neeko', c: 2, items: ['BrambleVest', 'SunfireCape', 'SpiritVisage']}, null, {n: 'Vi', k: 'Vi', c: 2}, null, {n: 'Brock', k: 'Brock', c: 5}, null, {n: 'Milio', k: 'Milio', c: 3}],
      [null, {n: 'Lissandra', k: 'Lissandra', c: 4}, null, null, null, {n: 'Swain', k: 'Swain', c: 2}, null],
      [null, null, {n: 'Zilean', k: 'Zilean', c: 5}, null, null, null, null],
      [null, null, null, {n: 'Nidalee', k: 'Nidalee', c: 3, carry: true, items: ['NashorsTooth', 'JeweledGauntlet', 'SpearofShojin']}, null, null, null]
    ]
  },

  /* ═══ C TIER ═══ */

  {
    tier: 'C',
    name: 'Yunara Flex',
    style: 'Fast 9',
    slug: 'yunara-flex',
    avgPlace: '4.9',
    top2: '12%',
    top4: '37%',
    tips: 'Yunara 5★ es carry alto techo pero inconsistente. Azir potencia con Shurima.',
    when: 'Cuando tengas Rod x2 y el lobby no vaya AP.',
    augments: [{n: 'Shurima Crest', t: 'gold'}, {n: 'Yunara\'s Grace', t: 'prismatic'}, {n: 'Arcanist Soul', t: 'silver'}],
    carousel: [{k: 'JeweledGauntlet', p: 'high'}, {k: 'NashorsTooth', p: 'high'}, {k: 'VoidStaff', p: 'med'}, {k: 'RabadonsDeathcap', p: 'med'}],
    board: [
      [{n: 'Neeko', k: 'Neeko', c: 2, items: ['BrambleVest', 'Evenshroud', 'SunfireCape']}, null, {n: 'Wukong', k: 'Wukong', c: 4}, null, {n: 'Azir', k: 'Azir', c: 5}, null, {n: 'Shyvana', k: 'Shyvana', c: 5}],
      [null, {n: 'Neeko', k: 'Neeko', c: 2}, null, null, null, {n: 'Fiddle', k: 'Fiddle', c: 5}, null],
      [null, null, {n: 'Lissandra', k: 'Lissandra', c: 4}, null, null, null, null],
      [null, null, null, {n: 'Yunara', k: 'Yunara', c: 5, carry: true, items: ['JeweledGauntlet', 'NashorsTooth', 'VoidStaff']}, null, null, null]
    ]
  },

  {
    tier: 'C',
    name: '8 Yordles Wild Growth',
    style: 'Slow Roll 8',
    slug: '8-yordles',
    avgPlace: '5.1',
    top2: '10%',
    top4: '33%',
    tips: 'Comp de meme que funciona con Wild Growth. Annie carry y Tibbers tanque.',
    when: 'SOLO si obtienes Wild Growth augment en stage 2.',
    augments: [{n: 'Yordle Wild Growth', t: 'prismatic'}, {n: 'Yordle Soul', t: 'gold'}, {n: 'Arcanist Heart', t: 'silver'}],
    carousel: [{k: 'SpearofShojin', p: 'high'}, {k: 'NashorsTooth', p: 'high'}, {k: 'BrambleVest', p: 'med'}, {k: 'DragonsClaw', p: 'med'}],
    board: [
      [{n: 'Tibbers', k: 'Tibbers', c: 5, items: ['BrambleVest', 'DragonsClaw', 'SpiritVisage']}, {n: 'Rumble', k: 'Rumble', c: 1}, {n: 'Lulu', k: 'Lulu', c: 1}, {n: 'Tristana', k: 'Tristana', c: 2}, {n: 'Teemo', k: 'Teemo', c: 2}, {n: 'Kennen', k: 'Kennen', c: 3}, null],
      [{n: 'Veigar', k: 'Veigar', c: 4}, null, null, null, null, {n: 'Poppy', k: 'Poppy', c: 4}, null],
      [null, null, null, null, null, null, null],
      [null, null, null, {n: 'Annie', k: 'Annie', c: 5, carry: true, items: ['SpearofShojin', 'NashorsTooth', 'JeweledGauntlet']}, null, null, null]
    ]
  },

  /* ═══ D TIER ═══ */

  {
    tier: 'D',
    name: 'Ruined King Viego',
    style: 'Slow Roll 7',
    tags: ['augment'],
    avgPlace: '5.3',
    top2: '8%',
    top4: '28%',
    tips: 'SOLO viable con el hero augment Ruined King.',
    when: 'SOLO si obtienes augment Ruined King en early.',
    augments: [{n: 'Ruined King', t: 'prismatic'}, {n: 'Shadow Isles Crest', t: 'gold'}, {n: 'Bloodthirster I', t: 'silver'}],
    carousel: [{k: 'Bloodthirster', p: 'high'}, {k: 'EdgeofNight', p: 'high'}, {k: 'TitansResolve', p: 'high'}, {k: 'LastWhisper', p: 'med'}],
    board: [
      [null, {n: 'Loris', k: 'Loris', c: 3}, {n: 'Yorick', k: 'Yorick', c: 2}, {n: 'Gwen', k: 'Gwen', c: 3}, null, null, null],
      [null, {n: 'Seraphine', k: 'Seraphine', c: 4}, {n: 'Kindred', k: 'Kindred', c: 5}, null, null, null, null],
      [null, null, {n: 'Kalista', k: 'Kalista', c: 4, items: ['LastWhisper', 'SpearofShojin', 'StrikersFlail']}, {n: 'Thresh', k: 'Thresh', c: 5, items: ['Morellonomicon']}, null, null, null],
      [null, null, {n: 'Viego', k: 'Viego', c: 1, carry: true, items: ['Bloodthirster', 'EdgeofNight', 'TitansResolve']}, null, null, null, null]
    ]
  },

  {
    tier: 'D',
    name: 'Artillery Barrage Rumble',
    style: 'Fast 8',
    tags: ['augment'],
    avgPlace: '5.4',
    top2: '7%',
    top4: '25%',
    tips: 'Rumble con hero augment hace daño de área devastador.',
    when: 'SOLO si obtienes el hero augment Rumble antes de nivel 7.',
    augments: [{n: 'Artillery Barrage', t: 'prismatic'}, {n: 'Zaun Crest', t: 'gold'}, {n: 'Scrap I', t: 'silver'}],
    carousel: [{k: 'GargoyleStoneplate', p: 'high'}, {k: 'SunfireCape', p: 'high'}, {k: 'GuinsoosRageblade', p: 'high'}, {k: 'KrakensFury', p: 'med'}],
    board: [
      [{n: 'ChoGath', k: 'ChoGath', c: 2, items: ['BrambleVest', 'Evenshroud']}, null, {n: 'Vi', k: 'Vi', c: 2}, null, {n: 'Warwick', k: 'Warwick', c: 3, items: ['TitansResolve', 'SteraksGage']}, null, {n: 'Singed', k: 'Singed', c: 3}],
      [null, {n: 'DrMundo', k: 'DrMundo', c: 3}, null, null, null, {n: 'Ekko', k: 'Ekko', c: 3}, null],
      [null, null, {n: 'Jinx', k: 'Jinx', c: 3, items: ['GuinsoosRageblade', 'KrakensFury', 'LastWhisper']}, null, null, null, null],
      [null, null, null, {n: 'Rumble', k: 'Rumble', c: 1, carry: true, items: ['GargoyleStoneplate', 'SunfireCape', 'IonicSpark']}, null, null, null]
    ]
  }
];


// ── RENDERERS ─────────────────────────────────────────────────────

function avHtml(ch) {
  const url = champUrl(ch.k);
  const dots = [...new Set(ch.items||[])].slice(0,3).map(ik => {
    const u = iUrl(ik);
    return `<div class="idot" title="${iLabel(ik)}">${u ? mkImg(u, iLabel(ik)) : ''}<span style="position:relative;z-index:1;font-size:7px">${u?'':iEmoji(ik)}</span></div>`;
  }).join('');
  return `<div class="chm">
    <div class="av c${ch.c}">
      ${ch.carry ? '<span class="carry-pip">★</span>' : ''}
      ${mkImg(url, ch.n)}
      <span class="ini">${ini(ch.k)}</span>
      ${dots ? `<div class="istrip">${dots}</div>` : ''}
    </div>
    <span class="chmn">${ch.n}</span>
  </div>`;
}

function hexBoard(board) {
  let h = `<div class="hbl">Posicionamiento · Fila 0 = Frontline</div><div class="hb">`;
  board.forEach((row, ri) => {
    h += `<div class="hrw"><div class="hr${ri%2?' off':''}">`;
    row.forEach(cell => {
      if (!cell) { h += `<div class="hc emp"></div>`; return; }
      const url = champUrl(cell.k);
      const its = (cell.items||[]).map(ik => {
        const u = iUrl(ik);
        return `<div class="hitm" title="${iLabel(ik)}">${u ? mkImg(u, iLabel(ik)) : ''}<span style="position:relative;z-index:1">${u?'':iEmoji(ik)}</span></div>`;
      }).join('');
      h += `<div class="hc c${cell.c}${cell.carry?' car':''}">
        <div class="hi">
          ${mkImg(url, cell.n, 'width:100%;height:100%;object-fit:cover;object-position:top center;display:block;border-radius:2px')}
          <span class="hini">${ini(cell.k)}</span>
          <span class="hn">${cell.n}</span>
        </div>
        ${cell.carry ? '<span class="hstar">★</span>' : ''}
        ${its ? `<div class="hitms">${its}</div>` : ''}
      </div>`;
    });
    h += `</div></div>`;
  });
  return h + `</div>`;
}


// ── TRAITS BLOCK ─────────────────────────────────────────────────

function traitsBlock(board) {
  const SA_ICONS = 'https://sunderarmor.com/icons/';

  // 1. Contar cuántos campeones de cada rasgo hay en el tablero
  const counts = {};
  board.flat().filter(Boolean).forEach(cell => {
    const chData = CHAMP_ID[cell.k];
    if (!chData || !chData.traits) return;
    chData.traits.forEach(t => {
      counts[t] = (counts[t] || 0) + 1;
    });
  });

  if (!Object.keys(counts).length) return '';

  // 2. Construir array de rasgos con su estado (activo/inactivo)
  const traitList = Object.entries(counts).map(([name, count]) => {
    const td = TRAITS[name];
    if (!td) return null;

    
    // Umbral alcanzado más alto
    let reached = 0;
    td.th.forEach(t => { if (count >= t) reached = t; });
    // Siguiente umbral
    const next = td.th.find(t => t > count) || null;
    return { name, count, reached, next, icon: td.icon, maxTh: td.th[td.th.length - 1] };
  }).filter(Boolean);

  // 3. Ordenar: primero los activos (por reached desc), luego los inactivos (por count desc)
  traitList.sort((a, b) => {
    if (b.reached !== a.reached) return b.reached - a.reached;
    return b.count - a.count;
  });

  // 4. Renderizar — solo mostramos los que tienen al menos 1 campeón
  const badges = traitList.map(tr => {
    const isActive = tr.reached > 0;
    const isGold   = isActive && tr.reached >= tr.maxTh;
    const cls = isGold ? 'tr-badge gold' : isActive ? 'tr-badge active' : 'tr-badge dim';
    const countStr = tr.next ? `${tr.count}/${tr.next}` : `${tr.count}`;
    return `<div class="${cls}" title="${tr.name}: ${tr.count} campeones">
      <img src="${SA_ICONS}${tr.icon}.png" alt="${tr.name}"
        crossorigin="anonymous" onerror="this.style.display='none'">
      <span class="tr-name">${tr.name}</span>
      <span class="tr-count">${countStr}</span>
    </div>`;
  }).join('');

  return `<div class="traits-block">
    <div class="traits-block-title">⬡ Rasgos Activos</div>
    <div class="traits-grid">${badges}</div>
  </div>`;
}

function itemsBlock(board) {
  const all = board.flat().filter(Boolean).filter(c => c.items && c.items.length);
  if (!all.length) return '';
  const rows = all.map(ch => {
    const url = champUrl(ch.k);
    const its = [...new Set(ch.items)].map(ik => {
      const u = iUrl(ik);
      return `<div class="icard2">
        <div class="ibox2">
          ${u ? mkImg(u, iLabel(ik)) : ''}
          <span class="fbk">${u ? '' : iEmoji(ik)}</span>
        </div>
        <span class="iname2">${iLabel(ik)}</span>
      </div>`;
    }).join('');
    return `<div class="crow">
      <div class="cav">
        ${mkImg(url, ch.n)}
        <span class="ini">${ini(ch.k)}</span>
        ${ch.carry ? '<span style="position:absolute;top:1px;right:2px;font-size:8px;color:var(--gold);z-index:3">★</span>' : ''}
      </div>
      <span class="cname">${ch.n}</span>
      <div class="citems">${its}</div>
    </div>`;
  }).join('');
  return `<div class="iblock"><h4>⚔ Objetos Recomendados</h4><div class="crow-list">${rows}</div></div>`;
}

function augBlock(augments) {
  if (!augments || !augments.length) return '';
  // Augment tier colors & labels
  const T = {
    gold:      { fill:'#b8860b', glow:'rgba(255,215,0,.4)',    label:'ORO'       },
    silver:    { fill:'#607d8b', glow:'rgba(144,164,174,.3)',  label:'PLATA'     },
    prismatic: { fill:'#7b1fa2', glow:'rgba(206,147,216,.4)',  label:'PRISMÁTICO'},
  };
  const rows = augments.map(a => {
    const t = T[a.t] || T.silver;
    // Inline SVG hexagon — zero external dependency, renders instantly
    const hex = `<svg width="38" height="44" viewBox="0 0 38 44" style="flex-shrink:0" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="hg${a.t}" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="${t.fill}" stop-opacity=".9"/>
          <stop offset="100%" stop-color="${t.fill}" stop-opacity=".5"/>
        </linearGradient>
        <filter id="hf${a.t}"><feGaussianBlur stdDeviation="1.5" result="blur"/>
          <feFlood flood-color="${t.fill}" flood-opacity=".5" result="c"/>
          <feComposite in="c" in2="blur" operator="in"/>
          <feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>
      <polygon points="19,2 36,11 36,33 19,42 2,33 2,11"
        fill="url(#hg${a.t})" stroke="${t.fill}" stroke-width="1.5" filter="url(#hf${a.t})"/>
      <text x="19" y="27" text-anchor="middle" font-size="16" fill="white" font-family="sans-serif"
        style="text-shadow:0 1px 2px rgba(0,0,0,.8)">⬡</text>
    </svg>`;
    return `<div class="aug-row">
      ${hex}
      <div class="aug-info">
        <div class="aug-name">${a.n}</div>
        <div class="aug-tier-label" style="color:${t.fill}">${t.label}</div>
      </div>
    </div>`;
  }).join('');
  return `<div class="aug-block"><h4>⬡ Aumentos Recomendados</h4><div class="aug-list">${rows}</div></div>`;
}

function carBlock(carousel) {
  if (!carousel || !carousel.length) return '';
  const items = carousel.map(c => {
    const u = iUrl(c.k);
    return `<div class="car-item ${c.p}">
      <div class="car-img">
        ${u ? mkImg(u, iLabel(c.k)) : ''}
        <span class="fbk">${u ? '' : iEmoji(c.k)}</span>
      </div>
      <span class="car-name">${iLabel(c.k)}</span>
    </div>`;
  }).join('');
  return `<div class="car-block">
    <h4>🎠 Prioridad Carrusel</h4>
    <div class="car-list">${items}</div>
    <p style="font-size:11px;color:var(--dim);margin-top:8px;font-family:'Space Mono',monospace">
      <span style="color:var(--gold)">●</span> Alta &nbsp;
      <span style="color:var(--a)">●</span> Media
    </p>
  </div>`;
}

function card(c, i, tier) {
  const id = `${tier}-${i}`;
  const slug = c.name.toLowerCase().replace(/\s+/g,'-');
  const exp = EXP.has(id);
  const tags = (c.tags||[]).map(t => `<span class="ctag tag-${t}">${t==='trending'?'⬡ Trending':'◈ Emblem'}</span>`).join('');
  const champs = c.board.flat().filter(Boolean).map(avHtml).join('');

  return `<div class="cc ${tier}${exp?' exp':''}" id="comp-${slug}" style="animation-delay:${i*.05}s" onclick="tog('${id}',this)">
    <div class="ci">
      <div class="cn">${c.name}</div>
      <div class="cm"><span class="cps">${c.style}</span>${tags}</div>
    </div>
    <div class="chl">${champs}</div>
    <div class="card-right">
      <div class="csi">
        <div class="csir gold-v"><span class="csiv">${c.avgPlace}</span><span class="csil">avg</span></div>
        <div class="csir cyan-v"><span class="csiv">${c.top4}</span><span class="csil">top4</span></div>
      </div>
      <button class="share-btn" onclick="shareComp(event,'${slug}')" title="Copiar enlace">
        🔗<span class="share-tooltip">¡Copiado!</span>
      </button>
      <div class="ctog">+</div>
    </div>
    <div class="cdet" onclick="event.stopPropagation()">
      <div class="dl">
        <div class="hbo-col">
          ${hexBoard(c.board)}
          ${traitsBlock(c.board)}
        </div>
        <div class="rp">
          <div class="sg3">
            <div class="sp"><div class="spl">Avg Place</div><div class="spv vg">${c.avgPlace}</div></div>
            <div class="sp"><div class="spl">Top 2</div><div class="spv vg">${c.top2}</div></div>
            <div class="sp"><div class="spl">Top 4</div><div class="spv vc">${c.top4}</div></div>
          </div>
          ${itemsBlock(c.board)}
          ${augBlock(c.augments)}
          ${carBlock(c.carousel)}
          <div class="db"><h4>💡 Consejos</h4><p>${c.tips}</p></div>
          <div class="db"><h4>⏱ Cuándo jugarla</h4><p>${c.when}</p></div>
          <div class="db"><h4>🗺 Leyenda</h4>
            <div class="legend">
              <div class="leg"><div class="legsw" style="background:var(--c1)"></div>Costo 1</div>
              <div class="leg"><div class="legsw" style="background:var(--c2)"></div>Costo 2</div>
              <div class="leg"><div class="legsw" style="background:var(--c3)"></div>Costo 3</div>
              <div class="leg"><div class="legsw" style="background:var(--c4)"></div>Costo 4</div>
              <div class="leg"><div class="legsw" style="background:var(--c5)"></div>Costo 5</div>
              <div class="leg"><span style="color:var(--gold);font-size:13px">★</span>Carry</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`;
}

// ── SHARE URL ─────────────────────────────────────────────────────

function shareComp(e, slug) {
  e.stopPropagation();
  const url = `${location.origin}${location.pathname}#comp-${slug}`;
  writeClipboard(url);
  flashBtn(e.currentTarget);

}

function copyCompText(e, slug) {
  e.stopPropagation();


  // Comp por su slug
  const comp = DATA.find(c => c.name.toLowerCase().replace(/\s+/g,'-') === slug);
  if (!comp) return;

  const allChamps = comp.board.flat().filter(Boolean);
  const carries   = allChamps.filter(ch => ch.carry);
  const supports  = allChamps.filter(ch => !ch.carry);

  const lines = [];
  lines.push(`📌 ${comp.name.toUpperCase()} | ${comp.style} | Tier ${comp.tier}`);
  lines.push('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');

  // Carries

   carries.forEach(ch => {
    const its = (ch.items || []).map(ik => iLabel(ik)).join(' · ');
    lines.push(`  ✪ ${ch.n}${its ? ' | ' + its : ''}`);
  });

  if (carries.length && supports.length) lines.push('  ─');

  // Resto de campeones
  const suppNames = supports.map(ch => {
    const its = (ch.items || []).map(ik => iLabel(ik)).join('+');
    return its ? `${ch.n}(${its})` : ch.n;
  }).join(' · ');
  if (suppNames) lines.push(`  ${suppNames}`);

  lines.push('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  lines.push(`  📊 Avg: ${comp.avgPlace} | Top2: ${comp.top2} | Top4: ${comp.top4}`);
  lines.push(`  🔗 ${location.origin}${location.pathname}#comp-${slug}`);

  writeClipboard(lines.join('\n'));
  flashBtn(e.currentTarget);
}

// ── ABRIR EN COMP BUILDER ─────────────────────────────────────────

// Flujo:
//   Tier List → clic 🔧 → comp-builder.html?import=TFT:<base64>
//   Comp Builder → checkImportParam() → decodifica → renderBoard()

function openInBuilder(e, slug) {
  e.stopPropagation();

  const comp = DATA.find(c => c.name.toLowerCase().replace(/\s+/g,'-') === slug);
  if (!comp) return;

  // Construimos el array de celdas (solo las ocupadas)
  const cells = [];
  comp.board.forEach((row, ri) => {
    row.forEach((cell, ci) => {
      if (cell) {
        cells.push({ r: ri, c: ci, k: cell.k, i: cell.items || [] });
      }
    });
  });

  const payload = { v: 1, n: comp.name, cells };
  const json    = JSON.stringify(payload);
  const encoded = btoa(
    encodeURIComponent(json).replace(
      /%([0-9A-F]{2})/g,
      (_, p1) => String.fromCharCode('0x' + p1)
    )
  );

  const btn = e.currentTarget;
  btn.classList.add('copied'); // reutilizamos el estilo visual
  setTimeout(() => {
    btn.classList.remove('copied');
    window.location.href = `comp-builder.html?import=TFT:${encoded}`;
  }, 600);
}

// ── CLIPBOARD ────────────────────────────────────────

// FIX: execCommand primero (funciona en HTTP), clipboard API como respaldo
function writeClipboard(text) {
  try {
    const el = document.createElement('textarea');
    el.value = text;
    el.setAttribute('readonly', '');
    el.style.cssText = 'position:absolute;left:-9999px;top:0';
    document.body.appendChild(el);
    el.focus();
    el.select();
    const ok = document.execCommand('copy');
    document.body.removeChild(el);
    if (ok) return;
  } catch (_) {}
  navigator.clipboard?.writeText(text).catch(() => {});
}

function flashBtn(btn) {
  btn.classList.add('copied');
  setTimeout(() => btn.classList.remove('copied'), 2000);
}

function checkHash() {
  const h = location.hash;
  if (!h) return;
  const el = document.querySelector(h);
  if (el && el.classList.contains('cc')) {
    el.classList.add('exp');
    DATA.forEach((c, i) => {
      if (c.name.toLowerCase().replace(/\s+/g,'-') === h.replace('#comp-',''))
        EXP.add(`${c.tier}-${i}`);
    });
    setTimeout(() => el.scrollIntoView({behavior:'smooth',block:'center'}), 300);
  }
}

// ── MAIN RENDER ───────────────────────────────────────────────────

let AF = 'all', EXP = new Set();
function vis() {
  const q = (document.getElementById('SI')?.value||'').toLowerCase();
  return DATA.filter(c => {
    const mf = AF==='all' || c.style.toLowerCase().includes(AF.toLowerCase());
    const ms = !q || c.name.toLowerCase().includes(q) ||
      c.board.flat().filter(Boolean).some(ch => ch.n.toLowerCase().includes(q));
    return mf && ms;
  });
}
function render() {
  const data = vis(), tiers = ['S','A','B','C','D'], bt = {};
  tiers.forEach(t => bt[t] = data.filter(c => c.tier===t));
  document.getElementById('TLC').innerHTML = tiers.filter(t => bt[t].length).map(t => `
    <div class="ts">
      <div class="tlr">
        <span class="tb ${t}">${t}</span>
        <div class="tdiv ${t}"></div>
        <span class="tc">${bt[t].length} comp${bt[t].length!==1?'s':''}</span>
      </div>
      <div class="cg">${bt[t].map((c,i) => card(c,i,t)).join('')}</div>
    </div>
    ${t==='S' ? '<div class="ad-inline">[ Google AdSense · In-content 728×90 ]</div>' : ''}`).join('');

  document.getElementById('TC').textContent = DATA.length;
  document.getElementById('QL').innerHTML = [
    ...DATA.filter(c=>c.tier==='S').map(c=>`<div class="qr"><div class="qd dS"></div><span class="qn">${c.name}</span><span class="qt">${c.style}</span></div>`),
    ...DATA.filter(c=>c.tier==='A').slice(0,3).map(c=>`<div class="qr"><div class="qd dA"></div><span class="qn">${c.name}</span><span class="qt">${c.style}</span></div>`),
  ].
  
  join('');
  checkHash();
}
function tog(id, el) { 
  EXP.has(id) ? (EXP.delete(id), el.classList.remove('exp')) : 
  (EXP.add(id), el.classList.add('exp'));
 }

function sf(btn, val) {
   AF=val; document.querySelectorAll('.fb').forEach(b=>b.classList.remove('on')); 
   
   btn.classList.add('on'); render();
}

function go() { 
  render();
}
render();