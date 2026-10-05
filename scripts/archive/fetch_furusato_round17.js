const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const configs = [
  {
    slug: 'furusato-tax-caldera-blue-lake-resort-stay',
    queries: [
      { query: '支笏湖 温泉 ホテル 北海道 リゾート', key: 'shikotsu_lake', label: '北海道千歳市ふるさと納税・日本最高峰の透明度「支笏湖ブルー」と美肌温泉リゾート' },
      { query: '屈斜路湖 摩周湖 温泉 ホテル 北海道', key: 'kussharo_lake', label: '北海道弟子屈町ふるさと納税・神秘のカルデラ湖屈斜路湖畔の砂湯露天と摩周ブルー' },
      { query: '田沢湖 温泉 ホテル 秋田 乳頭温泉', key: 'tazawa_lake', label: '秋田県仙北市ふるさと納税・日本一深いコバルトブルー田沢湖と乳頭温泉郷秘湯宿' }
    ]
  },
  {
    slug: 'furusato-tax-brand-pork-shabu-gourmet-stay',
    queries: [
      { query: '鹿児島黒豚 しゃぶしゃぶ 温泉 旅館', key: 'kurobuta_pork', label: '鹿児島県指宿・霧島ふるさと納税・本場かごしま黒豚しゃぶしゃぶ会席と砂むし温泉' },
      { query: '平田牧場 金華豚 鶴岡 旅館 山形 温泉', key: 'kinka_pork', label: '山形県鶴岡市ふるさと納税・幻の平田牧場金華豚とあつみ温泉・庄内旬鮮会席宿' },
      { query: '那須 豚肉 しゃぶしゃぶ 温泉 旅館 栃木', key: 'nasu_pork', label: '栃木県那須町ふるさと納税・那須高原三元豚・郡司豚と開湯1300年那須温泉宿' }
    ]
  },
  {
    slug: 'furusato-tax-three-major-forest-therapy-retreat-stay',
    queries: [
      { query: '屋久島 リゾート ホテル 縄文杉 鹿児島', key: 'yakushima_forest', label: '鹿児島県屋久島町ふるさと納税・世界自然遺産屋久杉の原生林と太平洋一望オーシャンリゾート' },
      { query: '木曽 旅館 長野 木曽ヒノキ 温泉', key: 'kiso_forest', label: '長野県木曽町ふるさと納税・日本三大美林木曽ヒノキの香る露天風呂と信州木曽路宿' },
      { query: '奥入瀬 青森ヒバ 温泉 ホテル 青森', key: 'oirase_forest', label: '青森県十和田市ふるさと納税・日本三大美林青森ヒバの湯と奥入瀬渓流ネイチャーリゾート' }
    ]
  },
  {
    slug: 'furusato-tax-distillery-whisky-pairing-stay',
    queries: [
      { query: '余市 ニッカ ホテル 北海道 ウイスキー', key: 'yoichi_whisky', label: '北海道余市町ふるさと納税・日本のスコットランド余市蒸溜所と小樽運河のクラシック宿' },
      { query: '白州 サントリー ホテル 山梨 八ヶ岳 温泉', key: 'hakushu_whisky', label: '山梨県北杜市ふるさと納税・南アルプスの天然水白州蒸溜所と八ヶ岳フォレスト温泉リゾート' },
      { query: '秩父 イチローズモルト ホテル 埼玉 温泉', key: 'chichibu_whisky', label: '埼玉県秩父市ふるさと納税・世界最高峰ウイスキー秩父蒸溜所と奥秩父美肌温泉宿' }
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
  console.log(`\nAll Round 17 hotels successfully stored into ${allSeasonalPath}`);
}

main();
