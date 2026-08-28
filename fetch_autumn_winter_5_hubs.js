const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const autumnWinterThemes = [
  {
    themeSlug: 'winter-ski-snowboard-resort',
    title: 'スキー＆スノーボード直結ゲレンデ直結・温泉リゾート',
    queries: [
      { key: 'niseko_ski', query: 'ニセコ リゾートホテル スキー 温泉', label: '北海道・ニセコ（世界最高峰のパウダースノー）' },
      { key: 'hakuba_ski', query: '白馬 スキー ホテル 露天風呂 温泉', label: '長野・白馬八方尾根（北アルプス絶景ゲレンデ）' },
      { key: 'yuzawa_ski', query: '越後湯沢 スキー場 ホテル 温泉 直結', label: '新潟・越後湯沢（新幹線直結スキーリゾート）' },
      { key: 'zao_ski', query: '蔵王温泉 スキー ホテル 露天風呂', label: '山形・蔵王（樹氷ゲレンデと強酸性名湯）' }
    ]
  },
  {
    themeSlug: 'autumn-gourmet-matsutake-wagyu',
    title: '秋の味覚極み・松茸＆ブランド和牛会席の温泉旅館',
    queries: [
      { key: 'shinshu_matsutake', query: '長野 松茸 温泉 旅館 露天風呂', label: '信州・別所温泉（本場信州松茸づくし）' },
      { key: 'kyoto_tanba_beef', query: '京都 丹波牛 松茸 温泉 旅館', label: '京都・亀岡湯の花温泉（丹波松茸＆丹波牛会席）' },
      { key: 'hida_wagyu', query: '飛騨高山 飛騨牛 温泉 旅館 露天風呂', label: '岐阜・飛騨高山下呂（A5等級飛騨牛と名湯）' },
      { key: 'omi_wagyu', query: '滋賀 近江牛 温泉 旅館 露天風呂', label: '滋賀・おごと温泉（琵琶湖絶景と近江牛懐石）' }
    ]
  },
  {
    themeSlug: 'winter-illumination-hotels',
    title: '冬のイルミネーション＆クリスマス夜景ホテル',
    queries: [
      { key: 'tokyo_illumination', query: '丸の内 東京駅 ホテル イルミネーション 夜景', label: '東京・丸の内六本木（都心イルミネーション夜景）' },
      { key: 'huistenbosch_winter', query: 'ハウステンボス 光の王国 ホテル オフィシャル', label: '長崎・ハウステンボス（世界最大級1300万球）' },
      { key: 'osaka_illumination', query: '大阪駅 中之島 ホテル 夜景 光の饗宴', label: '大阪・中之島御堂筋（OSAKA光の饗宴ステイ）' },
      { key: 'ashikaga_hotel', query: '足利フラワーパーク 佐野 ホテル 温泉', label: '栃木・あしかがフラワーパーク（日本三大イルミ）' }
    ]
  },
  {
    themeSlug: 'new-year-hatsumode-onsen',
    title: '年末年始・お正月初詣＆ご来光温泉旅館',
    queries: [
      { key: 'ise_hatsumode', query: '伊勢神宮 ホテル 旅館 参拝 温泉', label: '三重・伊勢神宮（お伊勢参り＆朝熊山ご来光）' },
      { key: 'kamakura_hatsumode', query: '鎌倉 鶴岡八幡宮 ホテル 温泉', label: '神奈川・鎌倉湘南（鶴岡八幡宮初詣＆富士夕景）' },
      { key: 'narita_hatsumode', query: '成田山新勝寺 ホテル 温泉', label: '千葉・成田山新勝寺（初詣参拝＆空港前泊）' },
      { key: 'choshu_goraiko', query: '銚子 犬吠埼 ホテル 温泉 日の出', label: '千葉・犬吠埼温泉（本州一早い初日の出宿）' }
    ]
  },
  {
    themeSlug: 'autumn-wine-fruit-hunting',
    title: '秋のワイナリー巡り＆フルーツ狩り温泉リゾート',
    queries: [
      { key: 'katsunuma_wine', query: '山梨 勝沼 ワイン ホテル 温泉 石和', label: '山梨・勝沼石和温泉（新酒ワインと果実郷）' },
      { key: 'nagano_wine', query: '長野 小布施 ワイナリー ホテル 温泉', label: '信州・千曲川ワインバレー（秋の収穫祭ステイ）' },
      { key: 'yoichi_wine', query: '小樽 余市 ワイン ホテル 温泉', label: '北海道・余市小樽（余市ワイン＆日本海海鮮）' },
      { key: 'okayama_fruit', query: '岡山 倉敷 フルーツ 温泉 ホテル', label: '岡山・湯郷温泉（シャインマスカット＆白桃美肌湯）' }
    ]
  }
];

async function main() {
  console.log('=== Fetching direct hotel data from Rakuten Travel API for 5 New Autumn/Winter Hubs ===');
  const cachePath = path.join(__dirname, 'src', 'data', 'all_seasonal_rakuten_hotels.json');
  let results = {};
  if (fs.existsSync(cachePath)) {
    results = JSON.parse(fs.readFileSync(cachePath, 'utf8'));
  }

  for (const theme of autumnWinterThemes) {
    console.log(`\n========================================`);
    console.log(`Theme: ${theme.title} (${theme.themeSlug})`);
    console.log(`========================================`);
    if (!results[theme.themeSlug]) results[theme.themeSlug] = {};

    for (const q of theme.queries) {
      console.log(`Querying Rakuten API: "${q.query}" (${q.label})...`);
      await sleep(1300);
      let hotels = [];
      try {
        hotels = await searchRakutenHotels(q.query, 4);
        if (!hotels || hotels.length === 0) {
          await sleep(1300);
          const fbQuery = q.query.split(' ').slice(0, 3).join(' ');
          hotels = await searchRakutenHotels(fbQuery, 4);
        }
      } catch (err) {
        console.warn(` Query failed: ${err.message}`);
      }
      console.log(` -> Retrieved ${hotels ? hotels.length : 0} hotels directly from Rakuten API.`);
      results[theme.themeSlug][q.key] = {
        label: q.label,
        query: q.query,
        hotels: hotels || []
      };
    }
  }

  fs.writeFileSync(cachePath, JSON.stringify(results, null, 2), 'utf8');
  console.log(`\nSuccessfully saved all 5 Autumn/Winter themes hotel data to: ${cachePath}`);
}

main().catch(console.error);
