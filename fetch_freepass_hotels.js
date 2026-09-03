const { searchRakutenHotels } = require('./rakuten_api_helper');
const fs = require('fs');
const path = require('path');

const HOTEL_DATA_PATH = path.join(__dirname, 'src', 'data', 'all_seasonal_rakuten_hotels.json');

// 1日乗車券・周遊フリーパスで元を取る黄金ルート特化記事（全6本）
const FREEPASS_ARTICLES = [
  {
    slug: 'kyoto-subway-bus-1day-pass-golden-route',
    keywords: ['京都駅前 ホテル 大浴場', '四条烏丸 ホテル 温泉']
  },
  {
    slug: 'hakone-freepass-break-even-model-route',
    keywords: ['箱根湯本 温泉 旅館', '強羅 にごり湯 宿']
  },
  {
    slug: 'enoshima-kamakura-noriorikun-golden-route',
    keywords: ['鎌倉 ホテル 温泉', '江ノ島 水族館 近く ホテル']
  },
  {
    slug: 'osaka-amazing-pass-1day-golden-route',
    keywords: ['大阪 なんば ホテル 大浴場', '梅田駅 近く ホテル サウナ']
  },
  {
    slug: 'tokyo-subway-ticket-24h-golden-route',
    keywords: ['東京駅 近く ホテル 大浴場', '銀座 ホテル サウナ']
  },
  {
    slug: 'koyasan-world-heritage-ticket-guide',
    keywords: ['高野山 宿坊 温泉', '橋本駅 和歌山 ホテル']
  }
];

async function fetchFreepassHotels() {
  let existingData = {};
  if (fs.existsSync(HOTEL_DATA_PATH)) {
    existingData = JSON.parse(fs.readFileSync(HOTEL_DATA_PATH, 'utf8'));
  }

  console.log('=== 楽天APIによる「周遊フリーパス攻略＆駅チカ宿」ホテルデータ直接取得開始 ===');

  for (const article of FREEPASS_ARTICLES) {
    console.log(`\n[${article.slug}] 楽天API 直接検索中...`);
    let allHotels = [];

    for (const kw of article.keywords) {
      try {
        const hotels = await searchRakutenHotels(kw, 3);
        allHotels.push(...hotels);
        console.log(`  - キーワード「${kw}」: ${hotels.length}件取得`);
      } catch (e) {
        console.error(`  - キーワード「${kw}」エラー:`, e.message);
      }
      await new Promise(r => setTimeout(r, 1200));
    }

    const seen = new Set();
    const uniqueHotels = allHotels.filter(h => {
      if (!h.hotelNo || seen.has(h.hotelNo)) return false;
      seen.add(h.hotelNo);
      return true;
    });

    existingData[article.slug] = { hotels: uniqueHotels.slice(0, 6) };
    console.log(`  => 【確定】${article.slug}: 合計${uniqueHotels.slice(0, 6).length}件の駅前・ターミナル宿データを保存`);
  }

  fs.writeFileSync(HOTEL_DATA_PATH, JSON.stringify(existingData, null, 2), 'utf8');
  console.log('\n=== 全6記事のフリーパス特化ホテルデータ直接取得＆JSON更新完了 ===');
}

fetchFreepassHotels().catch(console.error);
