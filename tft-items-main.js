// ═══════════════════════════════════════════════════════════
//  CDragon base — SAME as champion portraits (verified working)
//  Champion URL: BASE + assets/characters/{id}/hud/{id}_square.tft_set16.jpg
//  Item URL:     BASE + assets/maps/tft/icons/items/{apiname}.tft_set16.png
//                (same /lol-game-data/assets/ → BASE transformation)
// ═══════════════════════════════════════════════════════════
const BASE = 'https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/';

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
};

function iUrl(k)   { return (ITEM[k]||{}).url||''; }
function iLabel(k) { return (ITEM[k]||{l:k}).l; }
function iEmoji(k) { return (ITEM[k]||{e:'●'}).e; }
function iTier(k)  { return (ITEM[k]||{tier:'C'}).tier; }

function itemIconUrl(apiIcon) {
  // Legacy wrapper for items page compatibility
  const key = apiIcon.replace(/^TFT_Item_/,'').replace(/^TFT16_Item_/,'');
  return iUrl(key);
}

// Champion portrait URL (same working pattern)
const CHAMP_ID = {
  Annie:'tft16_annie',Taric:'tft16_taric',Swain:'tft16_swain',
  Mel:'tft16_mel',Lux:'tft16_lux',Annie2:'tft16_annie',
  Jinx:'tft16_jinx',Sejuani:'tft16_sejuani',Kindred:'tft16_kindred',
  Kalista:'tft16_kalista',MF:'tft16_missfortune',Yone:'tft16_yone',
  Lissandra:'tft16_lissandra',Thresh:'tft16_thresh',Wukong:'tft16_wukong',
  Braum:'tft16_braum',Skarner:'tft16_skarner',Garen:'tft16_garen',
  Neeko:'tft16_neeko',Vi:'tft16_vi',Lucian:'tft16_lucianandsenna',
};
function champUrl(k){
  const id=CHAMP_ID[k]||`tft16_${k.toLowerCase()}`;
  return `${BASE}assets/characters/${id}/hud/${id}_square.tft_set16.jpg`;
}
function ini(n){const w=n.split(/[\s&]+/);return w.length>=2?(w[0][0]+w[1][0]).toUpperCase():n.slice(0,2).toUpperCase()}

// ── ITEM DATA ─────────────────────────────────────────────────
// icon: exact path from CDragon TFT item data
// apiIcon: ASSETS/Maps/TFT/Icons/Items/{name}.TFT_Set16.png
// bestOn: champion keys for portrait display
// components: array of component item names (for combined items)

const ITEMS = [
  // ─── S TIER ─────────────────────────────────────────────────────────────────
  {id:'Evenshroud',       name:'Evenshroud',          tier:'S', cat:'Completo',
   stats:[{l:'Armor',v:'+20'},{l:'MR',v:'+20'},{l:'Dmg amp aura',v:'30%'}],
   desc:'Al entrar en combate, los enemigos adyacentes reciben 30% más daño de todos los aliados.',
   bestOn:['Skarner','Wukong','Braum','Taric'],
   components:["GiantsBelt",'NegatronCloak']},


  {id:'GuinsoosRageblade', name:"Guinsoo's Rageblade", tier:'S', cat:'Completo',
   stats:[{l:'Vel. Ataque',v:'+15%'},{l:'Stacks ilimitados',v:'+6%/ataque'}],
   desc:'Los ataques conceden +6% de Velocidad de Ataque acumulable sin límite.',
   bestOn:['Jinx','Kindred','Kalista'],
   components:['NeedlesslyLargeRod','RecurveBow']},


  {id:'JeweledGauntlet',  name:'Jeweled Gauntlet',    tier:'S', cat:'Completo',
   stats:[{l:'Poder Hab.',v:'+40'},{l:'Prob. Crítica',v:'+15%'}],
   desc:'Las Habilidades pueden infligir golpes críticos.',
   bestOn:['Mel','Lissandra','Lux','Annie'],
   components:['NeedlesslyLargeRod','SparringGloves']},

   
  {id:'KrakensFury',      name:"Kraken's Fury",        tier:'S', cat:'Completo',
   stats:[{l:'DA',v:'+20%'},{l:'Vel. Ataque',v:'+30%'}],
   desc:'Cada 3er ataque desata al Kraken, infligiendo daño físico adicional.',
   bestOn:['Jinx','Kindred','Kalista','Yone'],
   components:['NegatronCloak','RecurveBow']},


  {id:'Morellonomicon',   name:'Morellonomicon',        tier:'S', cat:'Completo',
   stats:[{l:'Poder Hab.',v:'+30'},{l:'Vida',v:'+200'}],
   desc:'Los ataques y Habilidades aplican Quemadura al objetivo durante 10 seg.',
   bestOn:['Thresh','Mel','Seraphine'],
   components:['GiantsBelt','NeedlesslyLargeRod']},


  {id:'NashorsTooth',     name:"Nashor's Tooth",        tier:'S', cat:'Completo',
   stats:[{l:'Poder Hab.',v:'+40'},{l:'Vel. Ataque',v:'+20%'}],
   desc:'Los ataques reducen el tiempo de recarga de la Habilidad en 1% por cada 1% de Vel. Ataque.',
   bestOn:['Mel','Lissandra','Annie'],
   components:['RecurveBow','GiantsBelt']},


  {id:'RedBuff',          name:'Red Buff',              tier:'S', cat:'Completo',
   stats:[{l:'DA',v:'+15%'},{l:'Quemadura',v:'1% HP/seg'}],
   desc:'Los ataques aplican Quemadura y Herida Mortal al objetivo durante 3 seg.',
   bestOn:['Jinx','Kindred','Kalista'],
   components:['RecurveBow','RecurveBow']},


  {id:'SpearofShojin',    name:'Spear of Shojin',       tier:'S', cat:'Completo',
   stats:[{l:'Poder Hab.',v:'+15%'},{l:'Maná/ataque',v:'+5'}],
   desc:'Después de lanzar la Habilidad, gana 8 de maná adicional por los próximos 3 ataques.',
   bestOn:['Annie','Mel','Lux','Lissandra'],
   components:['TearoftheGoddess','BFSword']},


  {id:'SpiritVisage',     name:'Spirit Visage',          tier:'S', cat:'Completo',
   stats:[{l:'Vida',v:'+250'},{l:'MR',v:'+40'},{l:'Curación',v:'+33%'}],
   desc:'La curación recibida por el portador aumenta en un 33%.',
   bestOn:['Braum','Taric','Garen'],
   components:['GiantsBelt','TearoftheGoddess']},


  {id:'SunfireCape',      name:'Sunfire Cape',           tier:'S', cat:'Completo',
   stats:[{l:'Vida',v:'+250'},{l:'Armor',v:'+25'}],
   desc:'Aplica Quemadura al enemigo más cercano cada 2 seg, infligiendo daño por 10 seg.',
   bestOn:['Braum','Taric','Sejuani','Garen'],
   components:['GiantsBelt','ChainVest']},


  {id:'TitansResolve',    name:"Titan's Resolve",        tier:'S', cat:'Completo',
   stats:[{l:'DA acum.',v:'+2%/stack'},{l:'Max stacks',v:'25'}],
   desc:'Al recibir daño o infligir un golpe crítico, gana DA y Armor/MR (máx. 25 cargas).',
   bestOn:['Yone','Kalista','Jinx'],
   components:['RecurveBow','ChainVest']},


  {id:'VoidStaff',        name:'Void Staff',              tier:'S', cat:'Completo',
   stats:[{l:'Poder Hab.',v:'+40'},{l:'Pen. Mágica',v:'40%'}],
   desc:'Ignora el 40% de la Resistencia Mágica del objetivo.',
   bestOn:['Mel','Annie','Lux','Thresh'],
   components:['RecurveBow','TearoftheGoddess']},


  // ─── A TIER ─────────────────────────────────────────────────────────────────
  {id:'AdaptiveHelm',     name:'Adaptive Helm',          tier:'A', cat:'Completo',
   stats:[{l:'Poder Hab.',v:'+20'},{l:'MR',v:'+30'}],
   desc:'Las Habilidades infligen 12% más daño por cada efecto de Silenciado activo en el objetivo.',
   bestOn:['Annie','Lux'],
   components:['NegatronCloak','TearoftheGoddess']},


  {id:'ArchangelsStaff',  name:"Archangel's Staff",      tier:'A', cat:'Completo',
   stats:[{l:'Poder Hab.',v:'+60 (acum.)'},{l:'Cada 5s',v:'+40 AP'}],
   desc:'Cada 5 segundos en combate, gana +40 de Poder de Habilidad de forma permanente.',
   bestOn:['Mel','Annie','Lissandra'],
   components:['TearoftheGoddess','NeedlesslyLargeRod']},


  {id:'Bloodthirster',    name:'Bloodthirster',           tier:'A', cat:'Completo',
   stats:[{l:'DA',v:'+30%'},{l:'Robo de Vida',v:'15%'}],
   desc:'Al bajar del 40% de Vida, escuda al portador por el 25% de su Vida máxima.',
   bestOn:['Yone','Viego','Kindred'],
   components:['NegatronCloak','BFSword']},


  {id:'BrambleVest',      name:'Bramble Vest',            tier:'A', cat:'Completo',
   stats:[{l:'Armor',v:'+130'},{l:'Daño reflej.',v:'200 mágico'}],
   desc:'Al recibir daño de ataque, inflige 200 de Daño Mágico a los atacantes adyacentes.',
   bestOn:['Braum','Taric','Garen','Sejuani'],
   components:['ChainVest','ChainVest']},


  {id:'Deathblade',       name:'Deathblade',              tier:'A', cat:'Completo',
   stats:[{l:'DA inicial',v:'+40%'},{l:'DA por baja',v:'+8% permanente'}],
   desc:'Gana DA permanente por cada baja.',
   bestOn:['Viego','Yone','Kalista'],
   components:['BFSword','BFSword']},


  {id:'DragonsClaw',      name:"Dragon's Claw",           tier:'A', cat:'Completo',
   stats:[{l:'MR',v:'+60'},{l:'Curación',v:'5% HP máx./2s'}],
   desc:'Cada 2 segundos, cura el 5% de la Vida máxima. Si HP>50%, cura el doble.',
   bestOn:['Taric','Braum'],
   components:['NegatronCloak','NegatronCloak']},


  {id:'GargoyleStoneplate',name:'Gargoyle Stoneplate',   tier:'A', cat:'Completo',
   stats:[{l:'Armor',v:'+30'},{l:'MR',v:'+30'},{l:'Por enemigo',v:'+18 de cada'}],
   desc:'Gana +18 de Armadura y MR por cada enemigo que ataque al portador.',
   bestOn:['Skarner','Wukong','Ornn'],
   components:['ChainVest','NegatronCloak']},


  {id:'GiantSlayer',      name:'Giant Slayer',            tier:'A', cat:'Completo',
   stats:[{l:'DA/AP',v:'+15'},{l:'Bonus vs HP alta',v:'Hasta +25%'}],
   desc:'Inflige hasta un 25% de daño adicional basado en la Vida máxima del objetivo.',
   bestOn:['Kindred','Jinx'],
   components:['BFSword','RecurveBow']},


  {id:'HandofJustice',    name:'Hand of Justice',         tier:'A', cat:'Completo',
   stats:[{l:'DA/AP',v:'+15'},{l:'Robo de Vida',v:'15%'}],
   desc:'Al inicio de cada ronda, gana aleatoriamente: +40% DA/AP o +15% de curación.',
   bestOn:['Kindred','Jinx','Kalista'],
   components:['SparringGloves','TearoftheGoddess']},


  {id:'InfinityEdge',     name:'Infinity Edge',           tier:'A', cat:'Completo',
   stats:[{l:'DA',v:'+35%'},{l:'Prob. Crítica',v:'+15%'}],
   desc:'Los golpes críticos infligen 110% de daño adicional.',
   bestOn:['Jinx','Kindred'],
   components:['BFSword','SparringGloves']},


  {id:'IonicSpark',       name:'Ionic Spark',             tier:'A', cat:'Completo',
   stats:[{l:'MR',v:'+30'},{l:'Reduce maná',v:'50% del costo'}],
   desc:'Al lanzar Habilidades, descarga un rayo que reduce el maná de los enemigos cercanos.',
   bestOn:['Braum','Ornn','Garen'],
   components:['NeedlesslyLargeRod','NegatronCloak']},


  {id:'LastWhisper',      name:'Last Whisper',            tier:'A', cat:'Completo',
   stats:[{l:'DA',v:'+20%'},{l:'Pen. Armadura',v:'30%'}],
   desc:'Al infligir un golpe crítico, aplica Reducción de Armadura durante 3 seg.',
   bestOn:['Kalista','Jinx','Kindred'],
   components:['RecurveBow','SparringGloves']},


  {id:'Quicksilver',      name:'Quicksilver',             tier:'A', cat:'Completo',
   stats:[{l:'DA',v:'+20%'},{l:'Vel. Ataque',v:'+20%'}],
   desc:'Al inicio del combate, el portador es inmune a CC durante 14 seg.',
   bestOn:['Kindred','Jinx','Kalista'],
   components:['SparringGloves','NegatronCloak']},


  {id:'RabadonsDeathcap', name:"Rabadon's Deathcap",     tier:'A', cat:'Completo',
   stats:[{l:'Poder Hab.',v:'+80'},{l:'Amplifica AP',v:'+50%'}],
   desc:'Amplifica todo el Poder de Habilidad del portador un 50%.',
   bestOn:['Mel','Lux','Lissandra'],
   components:['NeedlesslyLargeRod','NeedlesslyLargeRod']},


  {id:'SteraksGage',      name:"Sterak's Gage",           tier:'A', cat:'Completo',
   stats:[{l:'Vida',v:'+300'},{l:'Escudo al <35% HP',v:'25% HP máx.'}],
   desc:'Al bajar del 35% de Vida, escuda al portador durante 3 seg.',
   bestOn:['Yone','Braum'],
   components:['GiantsBelt','BFSword']},


  {id:'StrikersFlail',    name:"Striker's Flail",         tier:'A', cat:'Completo',
   stats:[{l:'DA',v:'+35%'},{l:'Vel. Ataque',v:'+15%'}],
   desc:'Los ataques conceden +8% de Vel. de Ataque (máx. 5 veces por combate).',
   bestOn:['Kalista','Lucian'],
   components:['GiantsBelt','SparringGloves']},


  {id:'ThiefsGloves',     name:"Thief's Gloves",          tier:'A', cat:'Completo',
   stats:[{l:'Ítems temporales',v:'x2 por ronda'}],
   desc:'Al inicio de cada ronda, equipa 2 ítems aleatorios temporales.',
   bestOn:['Vi','Braum'],
   components:['SparringGloves','SparringGloves']},


  {id:'WarmogsArmor',     name:"Warmog's Armor",          tier:'A', cat:'Completo',
   stats:[{l:'Vida',v:'+500'},{l:'Regen HP',v:'15%/2s'}],
   desc:'Regenera el 15% de la Vida máxima cada 2 segundos en combate.',
   bestOn:['Ornn','TahmK','Garen'],
   components:['GiantsBelt','GiantsBelt']},


  // ─── B TIER ────────────────────────────────────────────────────────────────
  {id:'BlueBuff',         name:'Blue Buff',               tier:'B', cat:'Completo',
   stats:[{l:'Maná inicial',v:'+20'},{l:'Maná post cast',v:'+20'}],
   desc:'Al lanzar la Habilidad, gana 20 de maná adicional.',
   bestOn:['Mel','Annie','Lux'],
   components:['TearoftheGoddess','TearoftheGoddess']},


  {id:'Crownguard',       name:'Crownguard',              tier:'B', cat:'Completo',
   stats:[{l:'Poder Hab.',v:'+25'},{l:'Escudo post cast',v:'250–600'}],
   desc:'Después de lanzar la Habilidad, el portador gana un escudo durante 3 seg.',
   bestOn:['Annie','Mel'],
   components:['ChainVest','NeedlesslyLargeRod']},


  {id:'EdgeofNight',      name:'Edge of Night',           tier:'B', cat:'Completo',
   stats:[{l:'DA',v:'+20%'},{l:'Vel. Ataque',v:'+10%'}],
   desc:'Al bajar del 60% de Vida, el portador se vuelve inmune brevemente y gana Vel. de Ataque.',
   bestOn:['Viego','Yone','Kalista'],
   components:['BFSword','ChainVest']},


  {id:'HextechGunblade',  name:'Hextech Gunblade',        tier:'B', cat:'Completo',
   stats:[{l:'DA/AP',v:'+25'},{l:'Omnivamp',v:'25%'}],
   desc:'El 25% del daño infligido cura al aliado más bajo de HP.',
   bestOn:['Mel','Annie'],
   components:['BFSword','NeedlesslyLargeRod']},


  {id:'ProtectorsVow',    name:"Protector's Vow",         tier:'B', cat:'Completo',
   stats:[{l:'Armor',v:'+20'},{l:'MR',v:'+20'},{l:'Escudo aliado',v:'300'}],
   desc:'Al inicio del combate, escuda al aliado más bajo de HP por 300.',
   bestOn:['Taric','Braum'],
   components:['TearoftheGoddess','ChainVest']},


  {id:'SteadfastHeart',   name:'Steadfast Heart',         tier:'B', cat:'Completo',
   stats:[{l:'Armor',v:'+40'},{l:'Reducción daño',v:'15% si HP>50%'}],
   desc:'Mientras el portador tenga más del 50% de Vida, reduce el daño recibido un 15%.',
   bestOn:['Braum','Taric','Sejuani'],
   components:['ChainVest','SparringGloves']},


  // ─── COMPONENTES ──────────────────────────────────────────────────────────
  {id:'BFSword',          name:'B.F. Sword',              tier:'C', cat:'Componente',
   stats:[{l:'DA',v:'+15%'}], desc:"Combina en: Bloodthirster, Giant Slayer, Infinity Edge, Deathblade.",
   bestOn:['Jinx','Kindred'],components:[]},


  {id:'NeedlesslyLargeRod',name:'Needlessly Large Rod',  tier:'C', cat:'Componente',
   stats:[{l:'Poder Hab.',v:'+15'}], desc:"Combina en: Jeweled Gauntlet, Nashor's, Void Staff, Rabadon's.",
   bestOn:['Annie','Mel'],components:[]},


  {id:'RecurveBow',       name:'Recurve Bow',             tier:'C', cat:'Componente',
   stats:[{l:'Vel. Ataque',v:'+15%'}], desc:"Combina en: Guinsoo's, Kraken's Fury, Titan's Resolve.",
   bestOn:['Jinx','Kindred'],components:[]},


  {id:'ChainVest',        name:'Chain Vest',              tier:'C', cat:'Componente',
   stats:[{l:'Armor',v:'+30'}], desc:'Combina en: Bramble Vest, Sunfire Cape, Gargoyle Stoneplate.',
   bestOn:['Braum','Garen'],components:[]},


  {id:'TearoftheGoddess', name:'Tear of the Goddess',    tier:'C', cat:'Componente',
   stats:[{l:'Maná inicial',v:'+15'}], desc:"Combina en: Spear of Shojin, Archangel's Staff, Blue Buff.",
   bestOn:['Annie','Mel','Lissandra'],components:[]},


  {id:'NegatronCloak',    name:'Negatron Cloak',          tier:'C', cat:'Componente',
   stats:[{l:'MR',v:'+30'}], desc:"Combina en: Dragon's Claw, Gargoyle, Spirit Visage, Ionic Spark.",
   bestOn:['Braum','Taric'],components:[]},


  {id:'SparringGloves',   name:'Sparring Gloves',         tier:'C', cat:'Componente',
   stats:[{l:'Prob. Crítica',v:'+10%'},{l:'Esquiva',v:'+10%'}], desc:"Combina en: Jeweled Gauntlet, Last Whisper, Infinity Edge, Thief's Gloves.",
   bestOn:['Mel','Jinx'],components:[]},


  {id:'GiantsBelt',       name:"Giant's Belt",            tier:'C', cat:'Componente',
   stats:[{l:'Vida',v:'+150'}], desc:"Combina en: Morellonomicon, Sunfire Cape, Warmog's Armor, Sterak's.",
   bestOn:['Braum','Garen'],components:[]},


  {id:'Spatula',          name:'Spatula',                 tier:'C', cat:'Componente',
   stats:[{l:'Especial',v:'Emblema de rasgo'}], desc:'Combina con otro componente para crear un Emblema de Rasgo.',
   bestOn:[],components:[]},
];

const COMP_ICONS = {
  'TFT_Item_TearOfTheGoddess':'TFT_Item_TearOfTheGoddess',
  'TFT_Item_Pickaxe':'TFT_Item_Pickaxe',
  'TFT_Item_RecurveBow':'TFT_Item_RecurveBow',
  'TFT_Item_NeedlesslyLargeRod':'TFT_Item_NeedlesslyLargeRod',
  'TFT_Item_BFSword':'TFT_Item_BFSword',
  'TFT_Item_ChainVest':'TFT_Item_ChainVest',
  'TFT_Item_SparringGloves':'TFT_Item_SparringGloves',
  'TFT_Item_Kindlegem':'TFT_Item_Kindlegem',
  'TFT_Item_NegatronCloak':'TFT_Item_NegatronCloak',
  'TFT_Item_GiantsBelt':'TFT_Item_GiantsBelt',
};

// ── STATE ─────────────────────────────────────────────────────
let CAT='all', TIERS=new Set(['S','A','B','C']);

function visible(){
  const q=(document.getElementById('SI')?.value||'').toLowerCase();
  return ITEMS.filter(it=>{
    const mc=CAT==='all'||it.cat===CAT;
    const mt=TIERS.has(it.tier);
    const mq=!q||it.name.toLowerCase().includes(q)||it.desc.toLowerCase().includes(q);
    return mc&&mt&&mq;
  });
}

// ── RENDER CARD ───────────────────────────────────────────────
function renderCard(it){
  const imgUrl = iUrl(it.id);

  const statsHtml = it.stats.map(s=>
    `<div class="stat-pill"><span>${s.l}</span><span class="sv">${s.v}</span></div>`
  ).join('');

  const champsHtml = it.bestOn.slice(0,6).map(k=>{
    const id=CHAMP_ID[k]||`tft16_${k.toLowerCase()}`;
    const url=`${BASE}assets/characters/${id}/hud/${id}_square.tft_set16.jpg`;
    const cost=k==='Annie'||k==='Mel'?4:k==='Yone'?5:3;
    return `<div class="champ-mini c${cost}" title="${k}">
      <img src="${url}" alt="${k}" crossorigin="anonymous" onerror="this.style.display='none'">
      <span class="fbk">${ini(k)}</span>
    </div>`;
  }).join('');

  const compsHtml = it.components.length ? (() => {
    const [c1,c2]=it.components;
    const u1=iUrl(c1);
    const u2=iUrl(c2);
    return `<div class="components-row">
      <span class="comp-label">Receta</span>
      <div class="comp-icon">${u1?`<img src="${u1}" crossorigin="anonymous" onerror="this.style.display='none'">`:'⚙'}</div>
      <span class="comp-arrow">+</span>
      <div class="comp-icon">${u2?`<img src="${u2}" crossorigin="anonymous" onerror="this.style.display='none'">`:'⚙'}</div>
      <span class="comp-arrow">→</span>
      <div class="comp-icon">
        <img src="${imgUrl}" crossorigin="anonymous" onerror="this.style.display='none'">
      </div>
    </div>`;
  })() : '';

  return `<div class="icard t${it.tier}" onclick="expandCard(this)">
    <div class="tier-badge t${it.tier}">${it.tier}</div>
    <div class="icard-top">
      <div class="item-icon">
        <img src="${imgUrl}" alt="${it.name}" crossorigin="anonymous" onerror="this.style.display='none'">
        <span class="fbk">⚙</span>
      </div>
      <div class="icard-info">
        <div class="icard-name">${it.name}</div>
        <div class="icard-cat">${it.cat}</div>
      </div>
    </div>
    <div class="icard-stats">${statsHtml}</div>
    <div class="icard-desc">${it.desc}</div>
    <div class="best-on">
      <span class="best-on-label">Ideal en</span>
      ${champsHtml}
    </div>
    ${compsHtml}
  </div>`;
}

// ── MAIN RENDER ───────────────────────────────────────────────
function render(){
  const vis=visible();
  const grid=document.getElementById('GRID');

  if(!vis.length){
    grid.innerHTML=`<div style="padding:40px;text-align:center;color:var(--dim);font-family:'Space Mono',monospace;font-size:12px">Sin resultados</div>`;
    return;
  }

  // Group by category if showing "all"
  const cats=CAT==='all'
    ? ['Completo','Componente','Soporte','Artefacto']
    : [CAT];

  let html='';
  cats.forEach(cat=>{
    const items=vis.filter(it=>it.cat===cat);
    if(!items.length) return;
    html+=`<div class="sec-title">${cat==='Completo'?'⚔':cat==='Componente'?'🔩':cat==='Soporte'?'🛡':'💎'} ${cat}s</div>`;
    html+=`<div class="item-grid">${items.map(renderCard).join('')}</div>`;
  });

  grid.innerHTML=html;
  renderSidebar();
}

function renderSidebar(){
  // Tier summary
  const tierSummary=document.getElementById('TIER_SUMMARY');
  ['S','A','B','C'].forEach(t=>{
    const count=ITEMS.filter(it=>it.tier===t&&it.cat==='Completo').length;
    tierSummary.innerHTML+=`<div class="wrow">
      <div class="wtier t${t}">${t}</div>
      <span class="wname">${t==='S'?'Meta dominante':t==='A'?'Muy fuerte':t==='B'?'Sólido':'Situacional'}</span>
      <span class="wcount">${count} items</span>
    </div>`;
  });

  // Top items
  const topItems=document.getElementById('TOP_ITEMS');
  ITEMS.filter(it=>it.tier==='S'&&it.cat==='Completo').forEach(it=>{
    const imgUrl=iUrl(it.id);
    topItems.innerHTML+=`<div class="wrow">
      <div class="item-icon" style="width:24px;height:24px;border-radius:4px;font-size:12px">
        <img src="${imgUrl}" alt="${it.name}" crossorigin="anonymous" onerror="this.style.display='none'">
        <span class="fbk">⚙</span>
      </div>
      <span class="wname">${it.name}</span>
      <div class="wtier tS">S</div>
    </div>`;
  });
}

function setCat(btn,val){
  CAT=val;
  document.querySelectorAll('.cb').forEach(b=>b.classList.remove('on'));
  btn.classList.add('on');
  render();
}

function toggleTier(btn,t){
  if(TIERS.has(t)) TIERS.delete(t);
  else TIERS.add(t);
  btn.classList.toggle('on');
  render();
}

function expandCard(cardElement) {
    const overlay = document.getElementById('OVERLAY');
    
    // Si ya está expandida, no hacemos nada (evita bugs)
    if (cardElement.classList.contains('expanded')) return;

    // Clonamos la tarjeta para no romper el grid original
    const clone = cardElement.cloneNode(true);
    clone.classList.add('expanded');
    clone.id = "EXPANDED_CARD";
    
    // Al hacer clic al clon o al fondo, se cierra
    clone.onclick = closeCard;
    overlay.onclick = closeCard;

    document.body.appendChild(clone);
    overlay.classList.add('active');
    document.body.classList.add('no-scroll');
}

function closeCard() {
    const overlay = document.getElementById('OVERLAY');
    const expandedCard = document.getElementById('EXPANDED_CARD');
    
    if (expandedCard) expandedCard.remove();
    overlay.classList.remove('active');
    document.body.classList.remove('no-scroll');
}

function go(){render();}
render();