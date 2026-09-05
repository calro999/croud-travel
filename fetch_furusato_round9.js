const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const configs = [
  {
    slug: 'furusato-tax-fuji-view-onsen-resort-stay',
    queries: [
      { query: '河口湖 富士山 温泉 旅館 山梨', key: 'kawaguchiko_fuji', label: '山梨県富士河口湖町ふるさと納税・逆さ富士と絶景露天風呂の極上宿' },
      { query: '山中湖 富士山 ホテル 山梨 温泉', key: 'yamanakako_fuji', label: '山梨県山中湖村ふるさと納税・湖畔から紅富士を望むパノラマリゾート' },
      { query: '日本平 富士山 ホテル 静岡 夜景', key: 'nihondaira_fuji', label: '静岡県静岡市ふるさと納税・日本平から望む富士山・駿河湾・清水港夜景ホテル' }
    ]
  },
  {
    slug: 'furusato-tax-highland-resort-french-auberge-stay',
    queries: [
      { query: '那須高原 フレンチ オーベルジュ 栃木 温泉', key: 'nasu_auberge', label: '栃木県那須町ふるさと納税・那須黒毛和牛と高原野菜の本格フレンチオーベルジュ' },
      { query: '清里 高原 ホテル フレンチ 山梨 八ヶ岳', key: 'kiyosato_auberge', label: '山梨県北杜市ふるさと納税・八ヶ岳の森に佇む高原リゾート＆美食ステイ' },
      { query: '裏磐梯 高原 ホテル 福島 温泉', key: 'urabandai_auberge', label: '福島県北塩原村ふるさと納税・桧原湖畔の五色沼自然美と高原フレンチリゾート' }
    ]
  },
  {
    slug: 'furusato-tax-three-major-bihada-hotspring-stay',
    queries: [
      { query: '嬉野温泉 美肌 旅館 佐賀 温泉', key: 'ureshino_bihada', label: '佐賀県嬉野市ふるさと納税・日本三大美肌の湯・とろとろ重曹泉と温泉湯豆腐' },
      { query: '喜連川温泉 旅館 栃木 美肌', key: 'kitsuregawa_bihada', label: '栃木県さくら市ふるさと納税・日本三大美肌の湯・硫黄・塩分・含鉄の上質名湯' },
      { query: '玉造温泉 美肌 旅館 島根', key: 'tamatsukuri_bihada', label: '島根県松江市ふるさと納税・神の湯と称される硫酸塩・塩化物泉の天然化粧水宿' }
    ]
  },
  {
    slug: 'furusato-tax-historical-kaido-post-town-ryokan-stay',
    queries: [
      { query: '妻籠宿 宿 旅館 木曽 長野', key: 'tsumago_kaido', label: '長野県南木曽町ふるさと納税・中山道木曽路の妻籠宿・江戸情緒の石畳と郷土料理' },
      { query: '馬籠宿 宿 旅館 岐阜 中津川', key: 'magome_kaido', label: '岐阜県中津川市ふるさと納税・中山道馬籠宿・島崎藤村生誕の地の坂道宿場ステイ' },
      { query: '日光 街道 旅館 栃木 門前町', key: 'nikko_kaido', label: '栃木県日光市ふるさと納税・世界遺産日光東照宮の参道・歴史情緒薫る門前老舗名宿' }
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
  console.log(`\nAll Round 9 hotels successfully stored into ${allSeasonalPath}`);
}

main();
