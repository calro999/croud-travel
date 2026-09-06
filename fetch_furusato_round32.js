const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const configs = [
  {
    slug: 'furusato-tax-three-great-caves-ice-adventure-stay',
    queries: [
      { query: '河口湖 富士急 ホテル 鳴沢氷穴', fallback: 'ハイランドリゾート　ホテル＆スパ', key: 'cave_fuji_ice', label: '山梨県富士河口湖町・鳴沢村ふるさと納税・青木ヶ原樹海の地底に広がる氷柱「富岳風穴・鳴沢氷穴」富士山パノラマとハイランドリゾートホテル＆スパ' },
      { query: '南城市 ホテル 玉泉洞 沖縄 リゾート', fallback: 'ユインチホテル南城', key: 'cave_gyokusendo', label: '沖縄県南城市・八重瀬町ふるさと納税・東洋一の美しさを誇る鍾乳石三十万本「玉泉洞」と太平洋を一望する天然温泉ユインチホテル南城' },
      { query: '沖永良部島 ホテル 昇竜洞 鹿児島 奄美', fallback: '観光ホテル　東（あずま）＜沖永良部島＞', key: 'cave_shoryudo', label: '鹿児島県知名町・和泊町ふるさと納税・ケイビングの聖地が誇る白銀の結晶「昇竜洞」美しきサンゴ礁の島・観光ホテル東' }
    ]
  },
  {
    slug: 'furusato-tax-three-great-curious-festivals-heritage-stay',
    queries: [
      { query: '諏訪湖 温泉 ホテル 御柱祭 旅館', fallback: '上諏訪温泉　ホテル紅や', key: 'festival_onbashira', label: '長野県諏訪市・下諏訪町ふるさと納税・七年に一度巨木が坂を駆け下る天下の奇祭「諏訪大社御柱祭」諏訪湖畔展望と上諏訪温泉ホテル紅や' },
      { query: '一宮 稲沢 ホテル 名古屋 はだか祭', fallback: '名古屋クラウンホテル', key: 'festival_hadaka', label: '愛知県稲沢市・一宮市ふるさと納税・数万の裸男が揉み合う天下の厄払い神事「国府宮はだか祭」尾張名物ひつまぶしと名古屋クラウンホテル' },
      { query: '男鹿 温泉 ホテル 秋田 なまはげ 旅館', fallback: '男鹿温泉　結いの宿　別邸　つばき', key: 'festival_namahage', label: '秋田県男鹿市ふるさと納税・「泣く子はいねぇが」ユネスコ無形文化遺産「男鹿のナマハゲ」名物石焼料理と男鹿温泉結いの宿別邸つばき' }
    ]
  },
  {
    slug: 'furusato-tax-three-great-torii-gates-sacred-stay',
    queries: [
      { query: '宮島 旅館 厳島神社 鳥居 温泉', fallback: '宮島グランドホテル　有もと', key: 'torii_itsukushima', label: '広島県廿日市市宮島ふるさと納税・海に浮かぶ世界遺産の朱塗り大鳥居「厳島神社」嚴島名物あなごめし・牡蠣と名門宮島グランドホテル有もと' },
      { query: '三輪 桜井 ホテル 奈良 大神神社', fallback: 'カンデオホテルズ奈良橿原', key: 'torii_oomiwa', label: '奈良県桜井市ふるさと納税・日本最古の神社と三輪山を仰ぐ高さ32m「大神神社大鳥居」本場三輪そうめんとカンデオホテルズ奈良橿原' },
      { query: '京都 岡崎 平安神宮 ホテル', fallback: 'ウェスティン都ホテル京都', key: 'torii_heian', label: '京都府京都市左京区ふるさと納税・朱塗りの壮大な大鳥居がそびえる文化の杜「平安神宮」南禅寺水路閣とウェスティン都ホテル京都' }
    ]
  },
  {
    slug: 'furusato-tax-three-great-fireworks-riverside-stay',
    queries: [
      { query: '長岡 花火 ホテル 新潟 駅前', fallback: 'ホテルニューオータニ長岡', key: 'fireworks_nagaoka', label: '新潟県長岡市ふるさと納税・信濃川の夜空を埋め尽くす復興祈願フェニックス日本三大花火「長岡花火」越後米と美酒ホテルニューオータニ長岡' },
      { query: '大曲 花火 ホテル 秋田 温泉', fallback: 'ホテルルートイン大曲駅前', key: 'fireworks_omagari', label: '秋田県大仙市ふるさと納税・全国の花火師が技を競う日本最高峰の芸術玉日本三大花火「大曲の花火」秋田錦牛とホテルルートイン大曲駅前' },
      { query: '土浦 花火 ホテル 茨城 霞ヶ浦', fallback: 'ホテルルートイン土浦', key: 'fireworks_tsuchiura', label: '茨城県土浦市ふるさと納税・秋の夜空を焦がす競技花火の最高峰日本三大花火「土浦全国花火競技大会」霞ヶ浦の恵みとホテルルートイン土浦' }
    ]
  }
];

async function main() {
  console.log('Fetching Round 32 hotels using openapi helper...');
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
      await sleep(2000); // 2s sleep to strictly respect rate limits
      if (!list || list.length === 0) {
        console.log(`Trying fallback: ${q.fallback}...`);
        list = await searchRakutenHotels(q.fallback, 3);
        await sleep(2000);
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
  console.log('Round 32 hotels updated in src/data/all_seasonal_rakuten_hotels.json');
}

main();
