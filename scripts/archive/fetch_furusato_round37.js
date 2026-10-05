const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const configs = [
  {
    slug: 'furusato-tax-three-great-udons-gourmet-stay',
    queries: [
      { query: '香川 こんぴら温泉 讃岐うどん 琴平 旅館', fallback: 'ことひら温泉　琴参閣', key: 'udon_sanuki', label: '香川県琴平町・高松市ふるさと納税・コシとイリコ出汁の最高峰「讃岐うどん」金刀比羅宮の参道とことひら温泉琴参閣' },
      { query: '秋田 湯沢 稲庭うどん 温泉 旅館', fallback: '秋ノ宮温泉郷　湯けむりの宿　稲住温泉', key: 'udon_inaniwa', label: '秋田県湯沢市ふるさと納税・宮内庁御用達のなめらかな喉ごし「稲庭うどん」名湯秋ノ宮温泉郷湯けむりの宿稲住温泉' },
      { query: '長崎 五島うどん リゾート ホテル', fallback: '五島列島リゾートホテル　マルゲリータ', key: 'udon_goto', label: '長崎県新上五島町ふるさと納税・椿油とあご出汁が香る幻の手延べ「五島うどん」教会群と五島列島リゾートホテルマルゲリータ' }
    ]
  },
  {
    slug: 'furusato-tax-three-sacred-mountains-stay',
    queries: [
      { query: '富士山 富士河口湖 温泉 ホテル うぶや', fallback: '富士レイクホテル', key: 'mountain_fuji', label: '山梨県富士河口湖町・富士吉田市ふるさと納税・日本一の霊峰と湖畔パノラマ「富士山」逆さ富士を望む名湯富士レイクホテル' },
      { query: '富山 立山 温泉 ホテル 森の風', fallback: 'ホテル森の風立山', key: 'mountain_tateyama', label: '富山県立山町ふるさと納税・神仏習合の信仰と雄大なる立山連峰「立山」立山黒部アルペンルートと美肌の湯ホテル森の風立山' },
      { query: '石川 白山 一里野 温泉 旅館', fallback: '一里野高原ホテル　ろあん', key: 'mountain_hakusan', label: '石川県白山市ふるさと納税・泰澄大師が開山した白き神の峰「霊峰白山」囲炉裏炭火会席と源泉かけ流し一里野高原ホテルろあん' }
    ]
  },
  {
    slug: 'furusato-tax-three-great-lacquerwares-stay',
    queries: [
      { query: '福井 越前漆器 あわら温泉 旅館 まつや千千', fallback: '北陸　あわら温泉　まつや千千', key: 'lacquer_echizen', label: '福井県鯖江市・あわら市ふるさと納税・1500年の伝統と業務用漆器8割を誇る「越前漆器」名湯あわら温泉まつや千千' },
      { query: '石川 山中温泉 旅館 吉祥やまなか 漆器', fallback: '山中温泉　かがり吉祥亭', key: 'lacquer_yamanaka', label: '石川県加賀市ふるさと納税・木地挽きの極致と山中塗の器で愉しむ加賀料理「山中漆器」鶴仙渓の景観とかがり吉祥亭' },
      { query: '福島 会津若松 芦ノ牧温泉 会津塗 丸峰', fallback: '会津・芦ノ牧温泉　丸峰', key: 'lacquer_aizu', label: '福島県会津若松市ふるさと納税・蒲生氏郷公が奨励した金粉蒔絵の美「会津塗」渓谷露天風呂と郷土会席・会津芦ノ牧温泉丸峰' }
    ]
  },
  {
    slug: 'furusato-tax-three-great-tidal-flats-nature-stay',
    queries: [
      { query: '佐賀 太良 有明海 竹崎カニ 旅館 蟹御殿', fallback: '太良嶽温泉　蟹御殿', key: 'flat_ariake', label: '佐賀県太良町・鹿島市ふるさと納税・最大6mの干満差が描く神秘の大泥潟「有明海干潟」名物竹崎カニと絶景温泉太良嶽温泉蟹御殿' },
      { query: '長崎 諫早 雲仙 温泉 旅館', fallback: '雲仙温泉　雲仙宮崎旅館', key: 'flat_isahaya', label: '長崎県諫早市・雲仙市ふるさと納税・ムツゴロウやトビハゼが息づく肥沃な湿地「諫早湾干潟」雲仙地獄と名門雲仙宮崎旅館' },
      { query: '北九州 門司港 ホテル プレミアホテル門司港 曽根干潟', fallback: 'プレミアホテル門司港', key: 'flat_sone', label: '福岡県北九州市ふるさと納税・カブトガニやズグロカモメが飛来する瀬戸内海最大級「曽根干潟」門司港レトロとプレミアホテル門司港' }
    ]
  }
];

async function main() {
  console.log('Fetching Round 37 hotels using rakuten_api_helper.js...');
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
      await sleep(2200);
      if (!list || list.length === 0) {
        console.log(`Trying fallback: ${q.fallback}...`);
        list = await searchRakutenHotels(q.fallback, 3);
        await sleep(2200);
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
  console.log('Round 37 hotels updated in src/data/all_seasonal_rakuten_hotels.json');
}

main();
