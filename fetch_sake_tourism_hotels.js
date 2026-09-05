const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const sakeTourismConfigs = [
  {
    slug: 'japan-sake-brewery-auberge-pairing-stay',
    badge: 'SAKE AUBERGE & PAIRING GUIDE',
    title: '【酒蔵オーベルジュ＆日本酒ペアリング宿】蔵元直営・極上和食マリアージュ 完全ガイド',
    metaDesc: '酒蔵に泊まる至福！全国の酒蔵直営オーベルジュ＆極上日本酒ペアリング宿完全特化！長野諏訪、福島会津、秋田、京都伏見、兵庫灘、搾りたて生原酒と会席料理の至高のマリアージュ、酒蔵見学・テイスティング付き名宿を徹底解説。',
    heroDesc: '酒造りの歴史と息吹が息づく酒蔵の敷地で目覚める「酒蔵オーベルジュ」。熟練の杜氏が丹精込めて醸した限定酒や搾りたて生酒を、料理長が腕を振るう一皿一皿に合わせて味わうペアリングディナー。芳醇な吟醸香と伝統の木造建築に抱かれる大人の極上ステイへ。',
    queries: [
      { key: 'shinshu_suwa_sake_auberge', query: '長野 諏訪 温泉 旅館 日本酒 ペアリング 宿泊 諏訪五蔵', label: '諏訪五蔵巡り拠点・信州地酒ペアリング＆上諏訪温泉宿' },
      { key: 'aizu_sake_craft_inn', query: '会津若松 東山温泉 旅館 日本酒 地酒 料理 宿泊 福島', label: '会津名酒・飛露喜や写楽を味わう東山温泉割烹旅館' },
      { key: 'akita_sake_auberge_retreat', query: '秋田 温泉 旅館 日本酒 地酒 料理 宿泊 新政 露天風呂', label: '美酒王国秋田・新政や雪の茅舎と旬の郷土料理名宿' }
    ]
  },
  {
    slug: 'all-inclusive-sake-free-flow-tasting-bar-stay',
    badge: 'SAKE FREE FLOW & TASTING BAR GUIDE',
    title: '【日本酒飲み放題＆利き酒Bar完備温泉宿】インクルーシブ・銘酒ラウンジ 完全ガイド',
    metaDesc: '追加料金なしで全国の銘酒を心ゆくまで！日本酒インクルーシブ＆利き酒バー完備温泉宿完全特化！新潟越後湯沢、山形天童、群馬草津、石川加賀温泉、厳選10〜30種の地酒サーバー、湯上がりラウンジ酒、おつまみペアリングを徹底解説。',
    heroDesc: '湯上がりの火照った身体に、冷えた大吟醸をクイッと一杯。館内ラウンジにズラリと並ぶ銘酒サーバーや利き酒Bar。「日本酒飲み放題＆オールインクルーシブ温泉宿」。財布を気にせず、各地の純米大吟醸や季節のひやおろしを心ゆくまで飲み比べ。贅沢な大人の湯浴みへ。',
    queries: [
      { key: 'echigo_yuzawa_sake_server_stay', query: '越後湯沢 温泉 ホテル 旅館 日本酒 飲み放題 宿泊 新潟', label: '新潟越後湯沢・ぽんしゅ館＆日本酒飲み放題ラウンジ宿' },
      { key: 'yamagata_tendo_sake_tasting_bar', query: '天童温泉 旅館 ホテル 日本酒 利き酒 宿泊 山形 オールインクルーシブ', label: '山形天童温泉・山形十四代・出羽桜利き酒Bar完備宿' },
      { key: 'kaga_onsen_sake_lounge_stay', query: '山代温泉 山中温泉 旅館 日本酒 飲み放題 宿泊 石川 加賀', label: '加賀温泉郷・北陸の銘酒菊姫や手取川インクルーシブ宿' }
    ]
  },
  {
    slug: 'pure-spring-water-sake-brewing-source-onsen-stay',
    badge: 'SAKE BREWING SPRING WATER ONSEN GUIDE',
    title: '【名水百選・酒の仕込み水が湧く秘湯宿】清流と伏流水・美肌温泉 完全ガイド',
    metaDesc: '名酒が生まれる土地には奇跡の名水と極上温泉がある！全国の日本名水百選・酒造りの仕込み水と美肌温泉宿完全特化！富山黒部・立山連峰伏流水、静岡富士山伏流水、島根奥出雲、熊本阿蘇名水、清冽な天然水風呂と美肌湯を徹底解説。',
    heroDesc: '銘酒の命である「清冽な仕込み水」。雪解け水が幾重もの地層で磨かれた日本名水百選の湧水地には、奇跡のように豊かな温泉が湧き出します。口に含むと甘やかな伏流水で喉を潤し、名水で仕込まれた極上の地酒を嗜み、肌を包み込む柔らかな源泉に浸かる至高の癒やし旅へ。',
    queries: [
      { key: 'tateyama_kurobe_pure_water_stay', query: '富山 宇奈月温泉 黒部 立山 旅館 温泉 名水 宿泊 露天風呂', label: '立山黒部アルプス伏流水＆宇奈月美肌の透明温泉宿' },
      { key: 'fuji_spring_water_sake_stay', query: '富士山 湧水 温泉 ホテル 旅館 宿泊 静岡 山梨 露天風呂', label: '富士山溶岩伏流水・地酒白隠正宗＆富士一望温泉宿' },
      { key: 'shimane_okuizumo_sake_spring_stay', query: '出雲 玉造温泉 奥出雲 旅館 温泉 宿泊 島根 名水 美肌', label: '日本酒発祥の地島根・奥出雲仁多米と玉造美肌温泉宿' }
    ]
  },
  {
    slug: 'sake-lees-bath-fermentation-beauty-detox-stay',
    badge: 'SAKE LEES BATH & FERMENTATION GUIDE',
    title: '【酒粕風呂・日本酒風呂＆発酵美肌デトックス宿】杜氏の手の白さ・糀スパ 完全ガイド',
    metaDesc: '杜氏の手の美しさの秘密！酒粕風呂・日本酒風呂＆発酵料理デトックス宿完全特化！新潟松之山、京都丹後、栃木日光、純米酒の天然アミノ酸とコウジ酸がもたらす全身しっとり美肌体験、塩糀・甘酒の発酵朝食バイキング、温活スパを徹底解説。',
    heroDesc: '「酒造りに携わる杜氏の手は、なぜ白くすべすべなのか」。その秘密は、米と糀が醸し出す天然アミノ酸とコウジ酸。湯船にたっぷりと注がれる純米酒や、酒粕を溶かしたミルキーな酒粕風呂。身体の芯から温まり、発酵美食で体内から美しく整うデトックスステイへ。',
    queries: [
      { key: 'matsunoyama_sake_bath_stay', query: '松之山温泉 旅館 日本酒風呂 温泉 宿泊 新潟 薬湯 露天風呂', label: '日本三大薬湯・新潟松之山温泉＆純米酒風呂デトックス宿' },
      { key: 'kyoto_tango_sake_ferment_stay', query: '丹後 天橋立 夕日ヶ浦温泉 旅館 日本酒 宿泊 京都 発酵 料理', label: '京都丹後・酒蔵「玉川」ゆかりの酒粕美肌湯＆発酵会席宿' },
      { key: 'nikko_tochigi_sake_spa_stay', query: '日光 鬼怒川温泉 旅館 日本酒 宿泊 栃木 露天風呂 美肌', label: '栃木日光・清酒風呂＆湯波と甘酒の発酵モーニング宿' }
    ]
  },
  {
    slug: 'japan-historic-sake-highway-brewery-walk-stay',
    badge: 'HISTORIC SAKE HIGHWAY GUIDE',
    title: '【日本銘酒街道・酒蔵の町並み巡り宿】灘・西条・伏見・魚沼・諏訪街道 完全ガイド',
    metaDesc: '白壁土蔵と杉玉が揺れる歴史の酒蔵通り！日本屈指の銘酒街道巡り＆温泉宿完全特化！兵庫灘五郷（有馬温泉）、広島西条酒蔵通り、京都伏見酒蔵水辺散策、新潟魚沼銘酒街道、長野諏訪甲州街道、歴史的蔵元見学と門前町ステイを徹底解説。',
    heroDesc: '軒先に掲げられた青々とした「杉玉」、黒板塀と白壁土蔵、赤レンガの煙突が連なる「酒蔵の町並み」。江戸時代から日本の酒造りを牽引してきた灘五郷、赤瓦の酒蔵が並ぶ西条、十石舟が往く京都伏見。歴史ある酒蔵をそぞろ歩き、名湯の宿で酔いしれる旅へ。',
    queries: [
      { key: 'nada_gogou_arima_onsen_stay', query: '有馬温泉 旅館 ホテル 宿泊 灘五郷 日本酒 兵庫 金湯 銀湯', label: '日本一の酒処・灘五郷巡り拠点＆有馬温泉金泉銀泉宿' },
      { key: 'hiroshima_saijo_sake_town_stay', query: '西条 東広島 広島 ホテル 旅館 宿泊 酒蔵通り 日本酒 温泉', label: '赤瓦と白壁の銘酒の街・西条酒蔵通り散策＆名湯ホテル' },
      { key: 'kyoto_fushimi_sake_canal_stay', query: '伏見 京都 旅館 ホテル 宿泊 酒蔵 十石舟 月桂冠 宇治', label: '伏見酒蔵水辺散策＆名水十石舟・京都クラシックステイ' }
    ]
  }
];

async function main() {
  console.log('=== Fetching direct hotel data from Rakuten Travel API for 5 Sake Tourism Hubs ===');
  const cachePath = path.join(__dirname, 'src', 'data', 'all_seasonal_rakuten_hotels.json');
  let results = {};
  if (fs.existsSync(cachePath)) {
    results = JSON.parse(fs.readFileSync(cachePath, 'utf8'));
  }

  for (const theme of sakeTourismConfigs) {
    console.log(`\n========================================`);
    console.log(`Sake Tourism Hub: ${theme.title} (${theme.slug})`);
    console.log(`========================================`);
    if (!results[theme.slug]) results[theme.slug] = {};

    for (const q of theme.queries) {
      console.log(`Querying Rakuten API: "${q.query}" (${q.label})...`);
      await sleep(1300);
      let hotels = [];
      try {
        hotels = await searchRakutenHotels(q.query, 4);
        if (!hotels || hotels.length === 0) {
          await sleep(1300);
          const fbQuery = q.query.split(' ').slice(0, 3).join(' ');
          hotels = await searchRakutenHotels(fbQuery, 4);
        }
      } catch (err) {
        console.warn(` Query failed: ${err.message}`);
      }
      console.log(` -> Retrieved ${hotels ? hotels.length : 0} hotels directly from Rakuten API.`);
      results[theme.slug][q.key] = {
        label: q.label,
        query: q.query,
        hotels: hotels || []
      };
    }
  }

  fs.writeFileSync(cachePath, JSON.stringify(results, null, 2), 'utf8');
  console.log(`\nSuccessfully saved all Sake Tourism Hubs hotel data to: ${cachePath}`);
}

main().catch(console.error);
