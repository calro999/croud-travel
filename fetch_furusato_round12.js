const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const configs = [
  {
    slug: 'furusato-tax-autumn-foliage-gorge-onsen-stay',
    queries: [
      { query: '定山渓 温泉 旅館 紅葉 札幌', key: 'jozankei_foliage', label: '北海道札幌市ふるさと納税・定山渓温泉・錦秋の豊平峡と渓谷露天風呂宿' },
      { query: '日光 中禅寺湖 温泉 旅館 紅葉', key: 'nikko_foliage', label: '栃木県日光市ふるさと納税・奥日光中禅寺湖畔の紅葉と乳白色硫黄泉リゾート' },
      { query: '京都 嵐山 温泉 旅館 嵐峡 保津川', key: 'arashiyama_foliage', label: '京都府京都市ふるさと納税・嵐山渡月橋と保津川渓谷の錦秋を愛でる名宿' }
    ]
  },
  {
    slug: 'furusato-tax-brand-jidori-mizutaki-gourmet-stay',
    queries: [
      { query: '比内地鶏 温泉 旅館 秋田 大館', key: 'hinai_jidori', label: '秋田県大館市ふるさと納税・日本三大美味鶏比内地鶏のきりたんぽ鍋と名湯' },
      { query: '土佐ジロー 軍鶏 旅館 高知 温泉', key: 'tosa_jidori', label: '高知県ふるさと納税・土佐ジローと軍鶏鍋・鰹のタタキを味わう南国温泉宿' },
      { query: '黒さつま鶏 霧島 温泉 旅館 鹿児島', key: 'satsuma_jidori', label: '鹿児島県霧島市ふるさと納税・黒さつま鶏炭火焼き会席と霧島連山の天然美肌湯' }
    ]
  },
  {
    slug: 'furusato-tax-three-great-gardens-heritage-stay',
    queries: [
      { query: '金沢 兼六園 旅館 ホテル 石川', key: 'kenrokuen_garden', label: '石川県金沢市ふるさと納税・日本三名園兼六園至近の老舗名宿と加賀会席' },
      { query: '岡山 後楽園 旅館 ホテル 岡山県', key: 'korakuen_garden', label: '岡山県岡山市ふるさと納税・名園後楽園と岡山城を望む旭川畔のラグジュアリー' },
      { query: '水戸 偕楽園 ホテル 旅館 茨城', key: 'kairakuen_garden', label: '茨城県水戸市ふるさと納税・千波湖と偕楽園を望む水戸の歴史宿＆常陸牛ディナー' }
    ]
  },
  {
    slug: 'furusato-tax-cycling-shimanami-lake-resort-stay',
    queries: [
      { query: 'しまなみ海道 サイクリスト ホテル 今治 愛媛', key: 'shimanami_cycling', label: '愛媛県今治市ふるさと納税・しまなみ海道サイクリング拠点＆来島海峡展望温泉' },
      { query: '尾道 サイクリスト ホテル 広島 温泉', key: 'onomichi_cycling', label: '広島県尾道市ふるさと納税・瀬戸内海サイクリング発着地＆尾道水道のレトロホテル' },
      { query: '琵琶湖 サイクリング ビワイチ ホテル 滋賀', key: 'biwako_cycling', label: '滋賀県守山市ふるさと納税・ビワイチ拠点・琵琶湖畔のサイクリスト温泉リゾート' }
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

  for (const page of configs) {
    console.log(`\n================ Processing page: ${page.slug} ================`);
    if (!allSeasonal[page.slug]) {
      allSeasonal[page.slug] = {};
    }

    for (const q of page.queries) {
      console.log(`Fetching query: "${q.query}" (${q.label}) ...`);
      try {
        let hotels = await searchRakutenHotels(q.query, 3);
        if (!hotels || hotels.length === 0) {
          const simplified = q.query.split(' ').slice(0, 2).join(' ');
          console.log(`Retrying simplified query: "${simplified}" ...`);
          hotels = await searchRakutenHotels(simplified, 3);
        }

        if (hotels && hotels.length > 0) {
          allSeasonal[page.slug][q.key] = {
            label: q.label,
            hotels: hotels
          };
          console.log(`-> SUCCESS: Found ${hotels.length} hotels for ${q.key}. Top hotel: ${hotels[0].hotelName}`);
        } else {
          console.warn(`-> WARNING: No hotels found for ${q.key}`);
        }
      } catch (err) {
        console.error(`-> ERROR fetching for ${q.key}:`, err.message);
      }
      await sleep(1500); // 楽天APIレート制限対策
    }
  }

  fs.writeFileSync(allSeasonalPath, JSON.stringify(allSeasonal, null, 2), 'utf8');
  console.log(`\nAll Round 12 hotels successfully stored into ${allSeasonalPath}`);
}

main();
