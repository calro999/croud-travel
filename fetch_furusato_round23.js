const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const configs = [
  {
    slug: 'furusato-tax-three-great-pottery-towns-gourmet-stay',
    queries: [
      { query: '有田 伊万里 温泉 旅館 佐賀', key: 'pottery_arita', label: '佐賀県有田町・伊万里市ふるさと納税・日本磁器発祥の地「有田焼・伊万里焼」の器で味わう佐賀牛会席と武雄嬉野温泉' },
      { query: '多治見 温泉 旅館 岐阜 美濃焼', key: 'pottery_mino', label: '岐阜県多治見市・土岐市ふるさと納税・千三百年続く「美濃焼」窯元めぐりと志野織部の器に映える飛騨牛料理宿' },
      { query: '瀬戸 温泉 旅館 愛知 瀬戸焼', key: 'pottery_seto', label: '愛知県瀬戸市ふるさと納税・日本の陶磁器の代名詞「瀬戸焼（せともの）」ギャラリーめぐりと尾張郷土会席名宿' }
    ]
  },
  {
    slug: 'furusato-tax-three-great-hachiman-shrines-sacred-stay',
    queries: [
      { query: '宇佐神宮 旅館 温泉 大分 別府', key: 'hachiman_usa', label: '大分県宇佐市ふるさと納税・全国八幡宮の総本宮「宇佐神宮」参拝と別府温泉源泉かけ流し老舗宿' },
      { query: '石清水八幡宮 京都 旅館 八幡市', key: 'hachiman_iwashimizu', label: '京都府八幡市ふるさと納税・国宝「石清水八幡宮」男山展望台と徒然草ゆかりの門前町・京料理旅館' },
      { query: '筥崎宮 ホテル 福岡 博多', key: 'hachiman_hakozaki', label: '福岡県福岡市東区ふるさと納税・日本三大八幡「筥崎宮」勝運祈願と博多湾パノラマ・玄界灘海鮮ホテル' }
    ]
  },
  {
    slug: 'furusato-tax-three-master-brewers-toji-sake-inn-stay',
    queries: [
      { query: '花巻温泉 南部杜氏 旅館 岩手', key: 'toji_nanbu', label: '岩手県花巻市・紫波町ふるさと納税・日本最大の蔵人集団「南部杜氏」の秘伝地酒と宮沢賢治ゆかりの花巻温泉郷' },
      { query: '越後湯沢 温泉 旅館 新潟 越後杜氏', key: 'toji_echigo', label: '新潟県十日町市・南魚沼市ふるさと納税・淡麗辛口を生んだ「越後杜氏」の純米大吟醸仕込み水風呂と雪国名湯宿' },
      { query: '丹波篠山 温泉 旅館 丹波杜氏 兵庫', key: 'toji_tanba', label: '兵庫県丹波篠山市ふるさと納税・灘五郷を支えた「丹波杜氏」の美酒と名物ぼたん鍋・城下町古民家宿' }
    ]
  },
  {
    slug: 'furusato-tax-three-karst-plateaus-mountain-resort-stay',
    queries: [
      { query: '秋吉台 温泉 旅館 山口 美祢', key: 'karst_akiyoshidai', label: '山口県美祢市ふるさと納税・日本最大級カルスト「秋吉台」白亜の石灰岩パノラマと湯田温泉・長門湯本温泉' },
      { query: '四国カルスト 天狗高原 高知 愛媛 ホテル', key: 'karst_shikoku', label: '高知県檮原町・愛媛県久万高原町ふるさと納税・標高1400m天空の道「四国カルスト」星降る高原リゾート' },
      { query: '平尾台 北九州 ホテル 福岡 小倉', key: 'karst_hiraodai', label: '福岡県北九州市小倉南区ふるさと納税・羊群原の奇勝「平尾台カルスト」と小倉城下町・門司港クラシックホテル' }
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
          await sleep(1500);
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
  console.log(`\nAll Round 23 hotels successfully stored into ${allSeasonalPath}`);
}

main();
