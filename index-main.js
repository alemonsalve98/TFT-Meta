// ═══════════════════════════════════════════════════════════════════
//  CDragon BASE — verified working (same as tft-items.html)
// ═══════════════════════════════════════════════════════════════════
const BASE = 'https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/';

// ── CHAMPION URL ──────────────────────────────────────────────────
// Verified from tftchampions-teamplanner.json:
// squareIconPath = /lol-game-data/assets/ASSETS/Characters/TFT16_Annie/HUD/TFT16_Annie_Square.TFT_Set16.jpg
// → BASE + assets/characters/tft16_annie/hud/tft16_annie_square.tft_set16.jpg

const CHAMP_ID = {
  Annie:'tft16_annie', Tibbers:'Tibbers',Taric:'tft16_taric',
  Swain:'tft16_swain',Neeko:'tft16_neeko',Shyvana:'tft16_shyvana',
  Lux:'tft16_lux',Fiddle:'tft16_fiddlesticks',Sylas:'tft16_sylas',
  Mel:'tft16_mel',Vi:'tft16_vi',Ambessa:'tft16_ambessa',
  Seraphine:'tft16_seraphine',Braum:'tft16_braum',Loris:'tft16_loris',
  Yorick:'tft16_yorick',Gwen:'tft16_gwen',Kalista:'tft16_kalista',
  Thresh:'tft16_thresh',Nautilus:'tft16_nautilus',Ornn:'tft16_ornn',
  Wukong:'tft16_wukong',Lucian:'tft16_lucian',MF:'tft16_missfortune',
  TahmK:'tft16_tahmkench',Ashe:'tft16_ashe',Sejuani:'tft16_sejuani',
  Jinx:'tft16_jinx',Warwick:'tft16_warwick',Draven:'tft16_draven',
  Skarner:'tft16_skarner',Kindred:'tft16_kindred',Ahri:'tft16_ahri',
  Kennen:'tft16_kennen',Kobuko:'tft16_kobuko',Aatrox:'tft16_aatrox',
  Yone:'tft16_yone',Sett:'tft16_sett',Anivia:'tft16_anivia',
  Lissandra:'tft16_lissandra',Zilean:'tft16_zilean',Volibear:'tft16_volibear',
  Jarvan:'tft16_jarvaniv',Garen:'tft16_garen',XinZhao:'tft16_xinzhao',
  Sona:'tft16_sona',Poppy:'tft16_poppy',Viego:'tft16_viego',
  'Kog\'Maw': 'tft16_kogmaw',
};

function champUrl(k) {
  
  const id = CHAMP_ID[k];

  if (id === 'Tibbers') {
    
    return `https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/tft16_annietibbers/hud/tft16_annietibbers_square.tft_set16.png`;
  }

  // --- Lógica Estándar para los demás (CDragon) ---
  
  if (id) {
    return `${BASE}assets/characters/${id}/hud/${id}_square.tft_set16.jpg`;
  }


  const defaultId = `tft16_${k.toLowerCase()}`;
  return `${BASE}assets/characters/${defaultId}/hud/${defaultId}_square.tft_set16.jpg`;
}

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
    name: 'Arcanistas',
    style: 'Fast 9',
    tags: [],
    avgPlace: '2.1',
    top2: '54%',
    top4: '78%',
    tips: 'Prioriza 4 Arcanistas en nivel 6. Annie 2★ es tu wincon. Tibbers necesita objetos defensivos.',
    when: 'Cuando encuentres Annie temprano o tengas augment Arcanista.',
    augments: [{n: 'Arcanist Crown', t: 'prismatic'}, {n: 'Jeweled Lotus', t: 'gold'}, {n: 'Witchful Thinking', t: 'silver'}],
    carousel: [{k: 'SpearofShojin', p: 'high'}, {k: 'NashorsTooth', p: 'high'}, {k: 'VoidStaff', p: 'high'}, {k: 'BrambleVest', p: 'med'}],
    board: [
      [{n: 'Neeko', k: 'Neeko', c: 2},{n:'Garen', k:'Garen', c:4}, {n: 'Shyvana', k: 'Shyvana', c: 5}, {n: 'Swain', k: 'Swain', c: 4}, {n: 'Sylas', k: 'Sylas', c: 7},{n:'Tibbers', k:'Tibbers', c:5, items:['BrambleVest','DragonsClaw','SpiritVisage']},{n:'Taric', k:'Taric',c:4}],

      [null,null, null, null, null, null, null],

      [null,null,null,null, null, null, null],

      [{n:'Lux', k:'Lux',c:4}, null, null,null, null, null,  {n: 'Annie', k: 'Annie', c: 5, carry: true, items: ['AdaptiveHelm', 'SpearofShojin', 'VoidStaff']}]
    ]
  },

  {
    tier: 'S',
    name: 'Noxus Disruptors',
    style: 'Fast 9',
    tags: [],
    avgPlace: '2.3',
    top2: '51%',
    top4: '75%',
    tips: 'Mel es la carry AP. Taric tanquea con objetos de aura. Activa Noxus 3 en nivel 6.',
    when: 'Con Mel 2★ o augment Noxus/Disruptor.',
    augments: [{n: 'Disruptor Crown', t: 'prismatic'}, {n: 'Noxus Crest', t: 'gold'}, {n: 'Jeweled Lotus', t: 'silver'}],
    carousel: [{k: 'JeweledGauntlet', p: 'high'}, {k: 'NashorsTooth', p: 'high'}, {k: 'VoidStaff', p: 'high'}, {k: 'SunfireCape', p: 'med'}],
    board: [

      [null,{n:'Vi', k:'Vi', c:2},{n:'Sylas', k:'Sylas', c:7},{n: 'Swain', k: 'Swain', c: 4},{n:'Ambessa', k:'Ambessa', c:4},{n: 'Taric', k: 'Taric', c: 4, items: ['BrambleVest', 'SunfireCape', 'SpiritVisage']},{n:'Shyvana', k:'Shyvana', c:5}],

      [null, null,null,null,{n:'Fiddle', k:'Fiddle', c:5}, null, null],


      [null, null, null, null, null, null, null],

      [null, null, null, null, {n:'Seraphine', k:'Seraphine', c:4}, null,  {n: 'Mel', k: 'Mel', c: 5, carry: true, items: ['JeweledGauntlet', 'NashorsTooth', 'NashorsTooth']}]
    ]
  },

  {
    tier: 'S',
    name: 'WARDEN KALISTA',
    style: 'Fast 8',
    tags: [],
    avgPlace: '3.9',
    top2: '13.8%',
    top4: '60.5%',
    tips: 'Kalista lleva todos los items AD. Thresh amplifica el daño en late. Shadow Isle 4 es core.',
    when: 'Con economía sólida para nivel 8. Muy fuerte con Kalista + Thresh.',
    augments: [{n: 'Warden Crown', t: 'prismatic'}, {n: 'Shadow Isles Crest', t: 'gold'}, {n: 'Last Stand', t: 'silver'}],
    carousel: [{k: 'LastWhisper', p: 'high'}, {k: 'SpearofShojin', p: 'high'}, {k: 'StrikersFlail', p: 'high'}, {k: 'EdgeofNight', p: 'med'}],
    board: [
      [null, {n: 'Ornn', k: 'Ornn', c: 5, items: ['BrambleVest', 'DragonsClaw', 'SpiritVisage']}, {n: 'Yorick', k: 'Yorick', c: 2}, {n: 'Thresh', k: 'Thresh', c: 5, items: ['EdgeofNight', 'Morellonomicon', 'IonicSpark']}, {n: 'Braum', k: 'Braum', c: 4, items: ['BrambleVest', 'DragonsClaw', 'SpiritVisage']}, {n: 'Loris', k: 'Loris', c: 3}, null],
      [null, null, {n: 'Gwen', k: 'Gwen', c: 3}, {n: 'Fiddle', k: 'Fiddle', c: 5}, null, null, null],
      [null, null, null, null, null, null, null],
      [{n: 'Kalista', k: 'Kalista', c: 4, carry: true, items: ['LastWhisper', 'SpearofShojin', 'StrikersFlail']}, null, null, null, null, null, {n: 'Seraphine', k: 'Seraphine', c: 4}]
    ]
  },

  {
    tier: 'S',
    name: 'Bilgewater Gunslingers',
    style: 'Fast 9',
    tags: [],
    avgPlace: '2.5',
    top2: '47%',
    top4: '72%',
    tips: 'Miss Fortune necesita protección total en fila trasera. Bilgewater 4 da burst masivo.',
    when: 'Con economía alta o augments de Bilgewater.',
    augments: [{n: 'Gunslinger Crown', t: 'prismatic'}, {n: 'Bilgewater Crest', t: 'gold'}, {n: 'Tons of Stats', t: 'silver'}],
    carousel: [{k: 'HandofJustice', p: 'high'}, {k: 'SpearofShojin', p: 'high'}, {k: 'GuinsoosRageblade', p: 'high'}, {k: 'BrambleVest', p: 'med'}],
    board: [
      [null, {n: 'Nautilus', k: 'Nautilus', c: 3}, {n: 'Wukong', k: 'Wukong', c: 4}, {n:'Taric', k:'Taric', c:4}, {n:'Ornn', k:'Ornn', c:5}, {n: 'TahmK', k: 'TahmK', c: 5, items: ['PileOCitrus', 'Barknuckles','ProtectorsVow']}, {n: 'Shyvana', k: 'Shyvana', c: 5}],

      [null, null, null, null,  {n: 'Fiddle', k: 'Fiddle', c: 5}, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, {n: 'Lucian', k: 'Lucian', c: 5}, null, {n: 'MF', k: 'MF', c: 4, carry: true, items: ['HandofJustice', 'SpearofShojin', 'GuinsoosRageblade']}]
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
      [null, null, {n: 'Leblanc', k: 'Leblanc', c: 4, items: ['JeweledGauntlet', 'SpearofShojin', 'VoidStaff']}, null, null, null, null],
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
      [{n: 'Chogath', k: 'Chogath', c: 2, items: ['BrambleVest', 'SunfireCape', 'Evenshroud']}, null, {n: 'RekSai', k: 'RekSai', c: 2}, null, {n: 'Malzahar', k: 'Malzahar', c: 3}, null, {n: 'Skarner', k: 'Skarner', c: 4}],
      [null, {n: 'Neeko', k: 'Neeko', c: 2}, null, null, null, {n: 'Fiddle', k: 'Fiddle', c: 5}, null],
      [null, null, {n: 'Belveth', k: 'Belveth', c: 4, items: ['TitansResolve', 'Quicksilver']}, null, {n: 'Shyvana', k: 'Shyvana', c: 5}, null, null],
      [null, null, null, {n: 'Kaisa', k: 'Kaisa', c: 4, carry: true, items: ['GuinsoosRageblade', 'KrakensFury', 'LastWhisper']}, null, null, null]
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
      [{n: 'Chogath', k: 'Chogath', c: 2, items: ['BrambleVest', 'Evenshroud']}, null, {n: 'Vi', k: 'Vi', c: 2}, null, {n: 'Warwick', k: 'Warwick', c: 3, items: ['TitansResolve', 'SteraksGage']}, null, {n: 'Singed', k: 'Singed', c: 3}],
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
  const tags = (c.tags||[]).map(t => `<span class="ctag tag-${t}">${t==='augment'?'⬡ Augment':'◈ Emblem'}</span>`).join('');
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
        <div class="hbo">${hexBoard(c.board)}</div>
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
  navigator.clipboard.writeText(url).catch(() => {
    const inp = document.createElement('input');
    inp.value = url; document.body.appendChild(inp);
    inp.select(); document.execCommand('copy');
    document.body.removeChild(inp);
  });
  const btn = e.currentTarget;
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
  ].join('');
  checkHash();
}
function tog(id, el) { EXP.has(id) ? (EXP.delete(id), el.classList.remove('exp')) : (EXP.add(id), el.classList.add('exp')); }
function sf(btn, val) { AF=val; document.querySelectorAll('.fb').forEach(b=>b.classList.remove('on')); btn.classList.add('on'); render(); }
function go() { render(); }
render();