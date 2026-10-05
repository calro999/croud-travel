const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const configs = [
  {
    slug: 'furusato-tax-three-great-bon-dances-heritage-stay',
    queries: [
      { query: '湯沢 温泉 秋田 西馬音内 旅館', fallback: '湯沢ロイヤルホテル', key: 'dance_nishimonai', label: '秋田県羽後町・湯沢市ふるさと納税・篝火と端縫い衣装の妖艶な舞「西馬音内の盆踊」と稲庭うどん・湯沢名湯温泉宿' },
      { query: '郡上八幡 ホテル 岐阜 郡上おどり 温泉', fallback: 'ホテル郡上八幡', key: 'dance_gujo', label: '岐阜県郡上市ふるさと納税・三十三夜続く日本一の盆踊り「郡上おどり」徹夜踊りと名水城下町・長良川温泉ホテル' },
      { query: '徳島 阿波おどり ホテル 徳島駅前 鳴門温泉', fallback: 'ＪＲホテルクレメント徳島', key: 'dance_awa', label: '徳島県徳島市・鳴門市ふるさと納税・四百年続く情熱の乱舞「阿波おどり」と鳴門鯛・阿波尾鶏を味わう徳島名門ホテル' }
    ]
  },
  {
    slug: 'furusato-tax-three-great-karsts-highland-drive-stay',
    queries: [
      { query: '美祢 秋吉台 ホテル 山口 カルスト', fallback: '美祢グランドホテル', key: 'karst_akiyoshidai', label: '山口県美祢市ふるさと納税・日本最大のカルスト台地「秋吉台」大草原と白い石灰岩ドライブ・美祢天然温泉ステイ' },
      { query: '久万高原 四国カルスト ホテル 天狗荘 高知 愛媛', fallback: '星ふるヴィレッジＴＥＮＧＵ', key: 'karst_shikoku', label: '高知県檮原町・愛媛県久万高原町ふるさと納税・標高1400m天空の別世界「四国カルスト」雲海と満天の星空パノラマ宿' },
      { query: '北九州 平尾台 ホテル 小倉 温泉', fallback: 'リーガロイヤルホテル小倉', key: 'karst_hiraodai', label: '福岡県北九州市小倉南区ふるさと納税・羊の群れのような石灰岩ピナクル「平尾台」ケイビング体験と小倉の夜景名門ホテル' }
    ]
  },
  {
    slug: 'furusato-tax-three-great-cutlery-towns-craft-stay',
    queries: [
      { query: '関市 岐阜 刃物 ホテル 長良川温泉', fallback: '長良川観光ホテル石金', key: 'cutlery_seki', label: '岐阜県関市・岐阜市ふるさと納税・世界に誇る名刀の都「関の刃物」鍛冶体験と長良川鵜飼の名宿ステイ' },
      { query: '武生 越前 刃物 ホテル 福井 温泉', fallback: 'ホテルクラウンヒルズ武生駅前', key: 'cutlery_echizen', label: '福井県越前市ふるさと納税・七百年の伝統火造り鍛造「越前打刃物」タケフナイフビレッジと越前そば・名湯ホテル' },
      { query: '堺 ホテル 大阪 刃物 包丁', fallback: 'ホテル・アゴーラ　リージェンシー　大阪堺', key: 'cutlery_sakai', label: '大阪府堺市ふるさと納税・プロ料理人が愛用する最高峰和包丁「堺刃物」伝統産業会館と千利休の茶の湯・ベイサイド名門ホテル' }
    ]
  },
  {
    slug: 'furusato-tax-three-great-gardens-heritage-luxury-stay',
    queries: [
      { query: '金沢 兼六園 ホテル 旅館 石川', fallback: '金沢白鳥路　ホテル山楽', key: 'garden_kenrokuen', label: '石川県金沢市ふるさと納税・日本三名園「兼六園」四季の雪吊りと金沢城公園を望む大正ロマンのクラシックホテル山楽' },
      { query: '岡山 後楽園 ホテル 旅館 烏城', fallback: 'ホテルグランヴィア岡山', key: 'garden_korakuen', label: '岡山県岡山市北区ふるさと納税・元禄文化を伝える大名庭園「後楽園」岡山城と旭川の借景パノラマ名門ホテル' },
      { query: '水戸 偕楽園 ホテル 茨城 千波湖', fallback: '水戸プラザホテル', key: 'garden_kairakuen', label: '茨城県水戸市ふるさと納税・徳川斉昭公創設の梅の名所「偕楽園」好文亭と千波湖畔を望むラグジュアリー水戸プラザホテル' }
    ]
  }
];

async function main() {
  console.log('Fetching Round 28 hotels using openapi helper...');
  const allHotelsPath = path.join(__dirname, 'src/data/all_seasonal_rakuten_hotels.json');
  let currentData = {};
  if (fs.existsSync(allHotelsPath)) {
    currentData = JSON.parse(fs.readFileSync(allHotelsPath, 'utf8'));
  }

  for (const cfg of configs) {
    console.log(`=== Processing: ${cfg.slug} ===`);
    for (const q of cfg.queries) {
      console.log(`Searching for: ${q.query} (${q.key})...`);
      let list = await searchRakutenHotels(q.query, 3);
      await sleep(1500);
      if (!list || list.length === 0) {
        console.log(`Trying fallback: ${q.fallback}...`);
        list = await searchRakutenHotels(q.fallback, 3);
        await sleep(1500);
      }
      if (list && list.length > 0) {
        const hotel = list[0];
        currentData[q.key] = {
          ...hotel,
          label: q.label
        };
        console.log(`✓ Added: ${hotel.hotelName} (No: ${hotel.hotelNo})`);
      } else {
        console.error(`X Still failed for ${q.key}`);
      }
    }
  }

  fs.writeFileSync(allHotelsPath, JSON.stringify(currentData, null, 2));
  console.log('Round 28 hotels updated in src/data/all_seasonal_rakuten_hotels.json');
}

main();
