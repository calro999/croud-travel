const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const furusatoConfigs = [
  {
    slug: 'furusato-tax-all-inclusive-luxury-onsen-stay',
    queries: [
      { key: 'sakunami_all_inclusive', query: 'ゆづくしＳａｌｏｎ一の坊 作並温泉', label: '仙台市ふるさと納税・渓流露天風呂とサロン飲食が全て無料のオールインクルーシブ名宿' },
      { key: 'hakone_all_inclusive', query: 'Ｎａｚｕｎａ箱根宮ノ下', label: '箱根町ふるさと納税・全室露天風呂付き離れと酒・軽食フリーフローの贅沢ステイ' },
      { key: 'bandai_all_inclusive', query: '浅香荘 磐梯熱海温泉', label: '郡山市ふるさと納税・美肌の名湯と日本酒ペアリングも心ゆくまで楽しむ寛ぎ宿' }
    ]
  },
  {
    slug: 'furusato-tax-luxury-buffet-gourmet-resort-stay',
    queries: [
      { key: 'kinugawa_asaya_buffet', query: '鬼怒川温泉 あさや', label: '日光市ふるさと納税・和洋中100種超の豪華ブッフェと空中庭園露天風呂の名門' },
      { key: 'beppu_suginoi_buffet', query: '別府温泉 杉乃井ホテル', label: '別府市ふるさと納税・大展望露天風呂「棚湯」と出来たてライブキッチン食べ放題' },
      { key: 'noboribetsu_grand_buffet', query: '登別温泉 登別グランドホテル', label: '登別市ふるさと納税・本格ドーム前庭園露天と北海道産旬食材尽くしのバイキング' }
    ]
  },
  {
    slug: 'furusato-tax-solo-travel-retreat-private-onsen-stay',
    queries: [
      { key: 'hakone_solo_onsen', query: '箱根湯本温泉 ホテル南風荘', label: '箱根町ふるさと納税・都心から好アクセスの一人旅歓迎露天風呂付き客室プラン' },
      { key: 'kusatsu_solo_onsen', query: '草津温泉 薬師の湯 湯元館', label: '草津町ふるさと納税・天下の名湯を一人占めする湯畑近くの歴史ある癒やし宿' },
      { key: 'yufuin_solo_onsen', query: '由布院温泉 束ノ間', label: '由布市ふるさと納税・青湯の名湯と由布岳の静寂に抱かれる究極の一人旅リトリート' }
    ]
  },
  {
    slug: 'furusato-tax-retro-onsen-town-yukata-walk-stay',
    queries: [
      { key: 'kinosaki_yukata_walk', query: '城崎温泉 料理旅館 よしはる', label: '豊岡市ふるさと納税・浴衣と下駄で七田の外湯めぐりと名物但馬牛会席を満喫' },
      { key: 'shibu_yukata_walk', query: '渋温泉 いかり屋旅館', label: '山ノ内町ふるさと納税・石畳の坂道と九つの外湯・厄除け巡浴を楽しむノスタルジック宿' },
      { key: 'ginzan_yukata_walk', query: '銀山温泉 古勢起屋別館', label: '尾花沢市ふるさと納税・大正浪漫のガス灯が灯る銀山川沿いの木造建築美に泊まる' }
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
        await sleep(1500);
        const hotels = await searchRakutenHotels(q.query, 3);
        if (hotels && hotels.length > 0) {
          allSeasonal[page.slug][q.key] = hotels[0];
          console.log(`  -> Selected: ${hotels[0].hotelName} (${hotels[0].hotelNo})`);
        } else {
          console.warn(`  -> No hotel found for query: ${q.query}`);
        }
      } catch (err) {
        console.error(`  -> Error fetching query "${q.query}":`, err.message);
      }
    }
  }

  fs.writeFileSync(allSeasonalPath, JSON.stringify(allSeasonal, null, 2), 'utf8');
  console.log('\nSuccessfully saved Round 69 hotel data to all_seasonal_rakuten_hotels.json!');
}

main();
