const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const configs = [
  {
    slug: 'furusato-tax-sunset-ocean-magic-hour-stay',
    queries: [
      { query: '西伊豆 堂ヶ島 夕日 温泉 旅館 静岡', key: 'nishiizu_sunset', label: '静岡県西伊豆町ふるさと納税・夕陽日本一宣言の堂ヶ島＆海一望露天風呂宿' },
      { query: '由良海岸 温泉 旅館 山形 夕日 庄内', key: 'yura_sunset', label: '山形県鶴岡市ふるさと納税・日本海に沈む夕日と天然温泉・由良海岸リゾート' },
      { query: '白浜 円月島 夕日 ホテル 和歌山 温泉', key: 'shirahama_sunset', label: '和歌山県白浜町ふるさと納税・円月島の夕景パノラマ＆南紀白浜美肌温泉' }
    ]
  },
  {
    slug: 'furusato-tax-sake-brewery-pairing-onsen-stay',
    queries: [
      { query: '越後湯沢 日本酒 酒風呂 旅館 新潟', key: 'echigoyuzawa_sake', label: '新潟県湯沢町ふるさと納税・米どころ新潟の地酒飲み比べ＆酒風呂の名湯旅館' },
      { query: '諏訪湖 酒蔵 旅館 長野 温泉', key: 'suwa_sake', label: '長野県諏訪市ふるさと納税・諏訪五蔵めぐり＆諏訪湖畔の温泉地酒ペアリング宿' },
      { query: '会津若松 地酒 旅館 福島 温泉 会津', key: 'aizu_sake', label: '福島県会津若松市ふるさと納税・会津名酒と郷土料理・東山温泉の老舗湯宿' }
    ]
  },
  {
    slug: 'furusato-tax-sea-of-clouds-sky-terrace-hotel-stay',
    queries: [
      { query: 'トマム 雲海 ホテル 北海道 星野リゾート', key: 'tomamu_clouds', label: '北海道占冠村ふるさと納税・雲海テラス＆広大な自然に包まれるリゾート' },
      { query: '志賀高原 渋峠 ホテル 長野 雲海', key: 'shigakogen_clouds', label: '長野県山ノ内町ふるさと納税・標高2,307m横手山・渋峠の天空パノラマ宿' },
      { query: '蔵王温泉 雲海 ホテル 山形 露天風呂', key: 'zao_clouds', label: '山形県山形市ふるさと納税・蔵王連峰を見下ろす雲上の強酸性硫黄泉リゾート' }
    ]
  },
  {
    slug: 'furusato-tax-temple-shukubo-shojin-mindfulness-stay',
    queries: [
      { query: '高野山 宿坊 寺院 和歌山 精進料理', key: 'koyasan_shukubo', label: '和歌山県高野町ふるさと納税・世界遺産高野山の歴史ある宿坊＆本場精進料理' },
      { query: '善光寺 宿坊 旅館 長野 門前町', key: 'zenkoji_shukubo', label: '長野県長野市ふるさと納税・信州善光寺のお朝事体験と伝統宿坊ステイ' },
      { query: '京都 寺院 宿泊 仁和寺 宿坊', key: 'kyoto_shukubo', label: '京都府京都市ふるさと納税・世界遺産仁和寺や古刹に泊まる特別な朝の静寂' }
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
  console.log(`\nAll Round 10 hotels successfully stored into ${allSeasonalPath}`);
}

main();
