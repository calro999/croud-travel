const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const configs = [
  {
    slug: 'furusato-tax-emerald-valley-gorge-hot-spring-stay',
    queries: [
      { query: '大歩危 祖谷 温泉 徳島', key: 'gorge_oboke', label: '徳島県三好市ふるさと納税・エメラルドグリーンの大歩危峡谷美と祖谷温泉ケーブルカー露天風呂' },
      { query: '宇奈月温泉 黒部峡谷 富山', key: 'gorge_kurobe', label: '富山県黒部市ふるさと納税・秘境黒部峡谷の断崖パノラマと宇奈月温泉の美肌清流宿' },
      { query: '清津峡 越後湯沢 温泉 新潟', key: 'gorge_kiyotsu', label: '新潟県十日町市ふるさと納税・日本屈指の柱状節理美清津峡渓谷トンネルと越後名湯ステイ' }
    ]
  },
  {
    slug: 'furusato-tax-three-sacred-temple-bells-retreat-stay',
    queries: [
      { query: '大津 三井寺 温泉 旅館 滋賀', key: 'bell_miidera', label: '滋賀県大津市ふるさと納税・近江八景「三井の晩鐘」と琵琶湖を望む雄琴温泉・古刹宿坊ステイ' },
      { query: '京都 高雄 旅館 神護寺', key: 'bell_jingo', label: '京都府京都市右京区ふるさと納税・三銘鐘神護寺の深山幽谷と清滝川のせせらぎに佇む高雄老舗宿' },
      { query: '太宰府 観世音寺 ホテル 福岡 二日市温泉', key: 'bell_kanzeon', label: '福岡県太宰府市・筑紫野市ふるさと納税・日本最古の国宝梵鐘観世音寺と万葉集ゆかりの二日市温泉' }
    ]
  },
  {
    slug: 'furusato-tax-three-great-wagashi-tea-culture-stay',
    queries: [
      { query: '金沢 旅館 浅野川 東山', key: 'wagashi_kanazawa', label: '石川県金沢市ふるさと納税・加賀藩前田家伝来日本三大銘菓「長生殿」と茶の湯文化・ひがし茶屋街名宿' },
      { query: '長岡 温泉 旅館 新潟 蓬平温泉', key: 'wagashi_nagaoka', label: '新潟県長岡市ふるさと納税・越後長岡藩御用達日本三大銘菓「越乃雪」と美肌の蓬平温泉' },
      { query: '松江 玉造温泉 宍道湖 旅館 島根', key: 'wagashi_matsue', label: '島根県松江市ふるさと納税・松平不昧公が愛した日本三大銘菓「山川」と宍道湖・美肌の玉造温泉' }
    ]
  },
  {
    slug: 'furusato-tax-japanese-whisky-distillery-retreat-stay',
    queries: [
      { query: '余市 ニッカウヰスキー ホテル 北海道 小樽', key: 'whisky_yoichi', label: '北海道余市町ふるさと納税・日本のウイスキーの聖地ニッカ余市蒸溜所と積丹半島の海の幸オーベルジュ' },
      { query: '白州 サントリー 八ヶ岳 山梨 ホテル', key: 'whisky_hakushu', label: '山梨県北杜市ふるさと納税・南アルプスの森に佇むサントリー白州蒸溜所と八ヶ岳高原リゾート' },
      { query: '御殿場 富士山 ウイスキー ホテル 静岡', key: 'whisky_gotemba', label: '静岡県御殿場市ふるさと納税・富士山の伏流水が生むキリン富士御殿場蒸溜所と霊峰ビュー温泉ホテル' }
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
  console.log(`\nAll Round 22 hotels successfully stored into ${allSeasonalPath}`);
}

main();
