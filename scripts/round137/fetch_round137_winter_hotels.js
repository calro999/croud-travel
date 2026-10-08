const { searchRakutenHotels } = require('../../rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const targets = [
  {
    theme: 'fukuoka_fukutsu_miyajidake',
    slug: 'winter-fukuoka-fukutsu-miyajidake-shrine-hatsumode-hikari-genkainada-stay',
    pref: 'fukuoka',
    prefJa: '福岡県',
    prefCode: '40',
    title: '【光の道夕景と日本一の大注連縄・宮地嶽神社新春初詣】2026-2027年冬の福岡・福津＆玄界灘！天然とらふぐと博多和牛名宿5選',
    metaDesc: '嵐のCMで話題となった「光の道」と日本一の大注連縄を誇る開運神社「宮地嶽神社」新春初詣！冬の澄み渡る玄界灘の夕景、冬に旬を迎える極上「天然とらふぐ」や活ヤリイカ、博多和牛の贅沢会席に舌鼓を打つ冬の厳選名宿5選。',
    spotQuery: '宮地嶽神社',
    area: '福津・宗像・玄界灘',
    queries: [
      '玄海旅館',
      '御宿 はなわらび',
      'ぶどうの樹 海風と波の音',
      'チサンイン宗像',
      'HOTEL AZ 福岡宗像店',
      '宗像 旅館',
      '福津 ホテル'
    ]
  },
  {
    theme: 'yamagata_tendo_yamadera_snow',
    slug: 'winter-yamagata-tendo-onsen-yamadera-snow-risshakuji-yamagatagyu-stay',
    pref: 'yamagata',
    prefJa: '山形県',
    prefCode: '06',
    title: '【白銀の水墨画世界・山寺立石寺と将棋のまち天童温泉】2026-2027年冬の山形・山寺＆天童！美肌名湯と極上山形牛すき焼き名宿5選',
    metaDesc: '松尾芭蕉ゆかりの奇岩霊山「宝珠山立石寺（山寺）」が白銀に包まれる一幅の水墨画の絶景と冬の開運千段石段！将棋駒のまち「天童温泉」の美肌の湯、極上霜降り「山形牛」のすき焼き・ステーキと冬の手打ち蕎麦に心温まる東北の名宿5選。',
    spotQuery: '立石寺',
    area: '山形・天童・山寺',
    queries: [
      '天童温泉 ほほえみの宿 滝の湯',
      '天童ホテル',
      'ほほえみの空湯舟 つるや',
      '松伯亭 あづま荘',
      '天童グランドホテル舞鶴',
      '湯の香 松の湯 天童'
    ]
  },
  {
    theme: 'ibaraki_kashima_jingu_hatsumode',
    slug: 'winter-ibaraki-kashima-jingu-hatsumode-itako-hamaguri-hitachigyu-stay',
    pref: 'ibaraki',
    prefJa: '茨城県',
    prefCode: '08',
    title: '【関東最古の霊場・鹿島神宮新春初詣と水郷の冬景色】2026-2027年冬の茨城・鹿島＆潮来！鹿島灘はまぐりと極上常陸牛名宿5選',
    metaDesc: '日本全国の鹿島神社の総本社・東国三社筆頭「鹿島神宮」の新春開運初詣！冬の水郷潮来・霞ヶ浦の静寂と、寒さとともに身が肥える「鹿島灘はまぐり」の網焼き・酒蒸し、茨城最高峰ブランド「常陸牛」を堪能する水郷鹿行の冬名宿5選。',
    spotQuery: '鹿島神宮',
    area: '鹿島・潮来・神栖',
    queries: [
      '鹿島セントラルホテル',
      '亀の井ホテル 潮来',
      '潮来ホテル',
      'ホテルがんけ',
      'たびのホテル鹿島',
      '鹿島パークホテル'
    ]
  },
  {
    theme: 'niigata_teradomari_yomogihira',
    slug: 'winter-niigata-nagaoka-teradomari-kani-yomogihira-onsen-koryu-stay',
    pref: 'niigata',
    prefJa: '新潟県',
    prefCode: '15',
    title: '【日本海魚のアメ横・寺泊冬のカニ市場と商売繁盛高龍神社】2026-2027年冬の新潟・寺泊＆長岡！とろみ美肌湯と越後牛名宿5選',
    metaDesc: '冬の日本海の至宝・本ズワイガニや寒ブリが活気あふれる寺泊「魚のアメ横」と、全国の起業家が詣でる商売繁盛の奇跡「高龍神社」新春初詣！長岡の奥座敷・蓬平温泉の極上とろみ美肌湯と、越後牛・地酒に心満たされる新潟の冬名宿5選。',
    spotQuery: '寺泊町',
    area: '寺泊・長岡・蓬平',
    queries: [
      '蓬平温泉 和泉屋',
      '蓬平温泉 よもぎや',
      '蓬平温泉 福引屋',
      '海風亭 寺泊 日本海',
      'ホテル飛鳥 寺泊',
      'ホテルニューグリーンプラザ 長岡'
    ]
  },
  {
    theme: 'nara_shigisan_chogosonshiji',
    slug: 'winter-nara-shigisan-chogosonshiji-hatsumode-onsen-yamatogyu-stay',
    pref: 'nara',
    prefJa: '奈良県',
    prefCode: '29',
    title: '【聖徳太子開創の霊峰・信貴山朝護孫子寺と世界一の福寅】2026-2027年冬の奈良・生駒＆信貴山！信貴山温泉と大和牛・ぼたん鍋名宿5選',
    metaDesc: '巨大な張子の寅が迎える毘沙門天総本山「信貴山朝護孫子寺」の新春開運初詣！登録有形文化財「開運橋」の冬景色と信貴山温泉のぬくもり、滋味あふれる猪鹿ぼたん鍋と奈良が誇る最高峰「大和牛」すき焼きに満たされる大和路の隠れ家名宿5選。',
    spotQuery: '朝護孫子寺',
    area: '信貴山・生駒・斑鳩',
    queries: [
      '信貴山観光ホテル',
      '柿本家 信貴山',
      '門前おかげ楼',
      '生駒のお宿 城山旅館',
      'わんわんパラダイス 奈良生駒'
    ]
  }
];

async function main() {
  console.log('=== Round 137: Fetching Live Rakuten Hotels ===');
  const results = {};

  for (const t of targets) {
    console.log(`\nProcessing theme: ${t.theme} (${t.title})...`);
    const hotelMap = new Map();

    for (const q of t.queries) {
      console.log(`  Searching keyword: "${q}"...`);
      try {
        const list = await searchRakutenHotels(q, 5);
        console.log(`    Found ${list.length} hotels.`);
        for (const h of list) {
          if (!hotelMap.has(h.hotelNo)) {
            // 最低限のバリデーション（画像と名前があること）
            if (h.hotelImageUrl && h.hotelName) {
              hotelMap.set(h.hotelNo, h);
            }
          }
        }
      } catch (err) {
        console.error(`    Error searching "${q}":`, err.message);
      }
      await sleep(1200); // 楽天APIレート制限配慮
    }

    const uniqueHotels = Array.from(hotelMap.values());
    console.log(`  Total unique hotels for ${t.theme}: ${uniqueHotels.length}`);

    // 上位5宿を選定
    // 評価が高い、かつレビューがあるものを優先、なければ先頭から
    const sorted = uniqueHotels.sort((a, b) => {
      const scoreA = (a.reviewAverage || 0) * 10 + (a.reviewCount > 0 ? 5 : 0);
      const scoreB = (b.reviewAverage || 0) * 10 + (b.reviewCount > 0 ? 5 : 0);
      return scoreB - scoreA;
    });

    const selected5 = sorted.slice(0, 5);
    console.log(`  Selected top 5 hotels:`);
    selected5.forEach((h, idx) => {
      console.log(`    ${idx + 1}. [No.${h.hotelNo}] ${h.hotelName} (Rating: ${h.reviewAverage}, Reviews: ${h.reviewCount})`);
    });

    results[t.theme] = {
      meta: t,
      hotels: selected5
    };
  }

  const outPath = path.join(__dirname, 'round137_raw_hotels.json');
  fs.writeFileSync(outPath, JSON.stringify(results, null, 2), 'utf8');
  console.log(`\nSuccessfully saved raw hotels data to ${outPath}`);
}

main().catch(err => {
  console.error('Fatal error in fetch_round137_winter_hotels:', err);
  process.exit(1);
});
