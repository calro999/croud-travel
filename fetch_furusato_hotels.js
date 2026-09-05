const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const furusatoConfigs = [
  {
    slug: 'furusato-tax-luxury-hotspring-ryokan-stay',
    queries: [
      { key: 'kusatsu_luxury_furusato', query: '草津温泉 旅館 露天風呂 群馬', label: '草津町ふるさと納税対象・天下の名湯を巡る極上旅館' },
      { key: 'kawazu_imaiso_furusato', query: '伊豆今井浜温泉 今井荘 静岡', label: '河津町ふるさと納税対象・海まで0分のオールインクルーシブ名宿' },
      { key: 'arima_luxury_furusato', query: '有馬温泉 旅館 兵庫 金泉', label: '神戸市ふるさと納税対象・金泉を堪能する老舗温泉宿' }
    ]
  },
  {
    slug: 'furusato-tax-travel-after-booking-discount-guide',
    queries: [
      { key: 'hakone_after_discount', query: '箱根 温泉 旅館 神奈川 露天風呂', label: '箱根町ふるさと納税・予約済み宿に使えるあとから割引' },
      { key: 'kawaguchiko_after_discount', query: '河口湖 富士山 温泉 ホテル 山梨', label: '富士河口湖町ふるさと納税・絶景富士と温泉リゾート' },
      { key: 'kyoto_after_discount', query: '京都 嵐山 旅館 温泉', label: '京都市ふるさと納税・古都の風情と伝統宿のあとから割引' }
    ]
  },
  {
    slug: 'furusato-tax-local-gourmet-inn-stay',
    queries: [
      { key: 'takachiho_beef_gourmet', query: '民宿 神楽の館 高千穂 宮崎', label: '高千穂町ふるさと納税・幻の高千穂牛と神楽の里の温もり宿' },
      { key: 'ushimado_anago_gourmet', query: '民宿 青島 牛窓 岡山', label: '瀬戸内市ふるさと納税・極上あなご会席を堪能する名物民宿' },
      { key: 'toba_seafood_gourmet', query: '鳥羽 旅館 伊勢海老 鮑 三重', label: '鳥羽市ふるさと納税・伊勢海老と鮑の獲れたて海鮮尽くし宿' }
    ]
  },
  {
    slug: 'furusato-tax-pet-sauna-private-hotspring-stay',
    queries: [
      { key: 'urabandai_pet_sauna', query: 'ペンション歩野慕野 裏磐梯 福島', label: '北塩原村ふるさと納税・愛犬同伴＆大浴場サウナの高原ロッジ' },
      { key: 'izukogen_pet_luxury', query: '伊豆高原 ペット同伴 温泉 露天風呂 客室 静岡', label: '伊東市ふるさと納税・愛犬と寛ぐ客室露天風呂付き隠れ家宿' },
      { key: 'hakuba_sauna_retreat', query: '白馬 サウナ コテージ 温泉 長野', label: '白馬村ふるさと納税・北アルプスの大自然に抱かれる本格サウナステイ' }
    ]
  }
];

async function main() {
  const allSeasonalPath = path.join(__dirname, 'src/data/all_seasonal_rakuten_hotels.json');
  let allSeasonal = {};
  if (fs.existsSync(allSeasonalPath)) {
    try {
      allSeasonal = JSON.parse(fs.readFileSync(allSeasonalPath, 'utf8'));
    } catch (e) {
      console.error('Failed to parse all_seasonal_rakuten_hotels.json', e);
    }
  }

  for (const page of furusatoConfigs) {
    console.log(`\n================ Processing page: ${page.slug} ================`);
    if (!allSeasonal[page.slug]) {
      allSeasonal[page.slug] = {};
    }

    for (const q of page.queries) {
      console.log(`Fetching query: "${q.query}" (${q.label}) ...`);
      try {
        const hotels = await searchRakutenHotels(q.query, 4);
        console.log(`  -> Found ${hotels.length} hotels`);
        allSeasonal[page.slug][q.key] = {
          label: q.label,
          query: q.query,
          hotels: hotels
        };
      } catch (err) {
        console.error(`  -> Error fetching ${q.query}:`, err.message);
      }
      await sleep(1500);
    }
  }

  fs.writeFileSync(allSeasonalPath, JSON.stringify(allSeasonal, null, 2), 'utf8');
  console.log('\nSuccessfully saved all furusato hotel data to all_seasonal_rakuten_hotels.json!');
}

main();
