const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const wave7Themes = [
  {
    themeSlug: 'winter-snowshoe-frozen-waterfall',
    title: '白銀の氷瀑＆スノーシュー探検！冬のアクティビティ温泉宿特集',
    queries: [
      { key: 'oirase_ice_fall', query: '奥入瀬 渓流 氷瀑 ホテル 温泉 青森', label: '青森・奥入瀬渓流（青く凍りつく巨大氷瀑ツアー）' },
      { key: 'bandai_yellow_fall', query: '裏磐梯 イエローフォール ホテル 温泉 福島', label: '福島・裏磐梯（磐梯山イエローフォール＆スノーシュー）' },
      { key: 'senjogahara_snowshoe', query: '日光 奥日光 戦場ヶ原 ホテル 温泉 スノーシュー', label: '栃木・奥日光戦場ヶ原（白銀の湿原トレッキング＆硫黄泉）' },
      { key: 'shigakogen_snowshoe', query: '志賀高原 スノーシュー ホテル 温泉 露天風呂', label: '長野・志賀高原（白樺林とパウダースノーツアー）' }
    ]
  },
  {
    themeSlug: 'autumn-winter-traditional-craft-pottery',
    title: '日本の美を体験！伝統工芸・陶芸の里と温泉旅館特集',
    queries: [
      { key: 'mashiko_pottery', query: '益子 益子焼 ホテル 温泉 栃木', label: '栃木・益子（益子陶器市と用の美・益子焼めぐり）' },
      { key: 'kutani_yamanaka', query: '山中温泉 九谷焼 山代温泉 旅館 露天風呂', label: '石川・加賀山中山代温泉（九谷焼絵付けと山中漆器の器）' },
      { key: 'arita_pottery', query: '嬉野温泉 有田焼 武雄温泉 旅館 露天風呂', label: '佐賀・嬉野武雄温泉（有田焼・波佐見焼の窯元と美肌湯）' },
      { key: 'echizen_craft', query: 'あわら温泉 越前焼 旅館 露天風呂 福井', label: '福井・あわら温泉（越前和紙・越前打刃物・越前焼の里）' }
    ]
  },
  {
    themeSlug: 'autumn-winter-all-inclusive-luxury',
    title: '財布を気にせず贅沢三昧！秋・冬の極上オールインクルーシブ宿特集',
    queries: [
      { key: 'hakone_all_inclusive', query: '箱根 オールインクルーシブ 温泉 ホテル 旅館', label: '神奈川・箱根（生ビールや地酒・軽食フリーの贅沢ステイ）' },
      { key: 'nasu_all_inclusive', query: '那須 オールインクルーシブ 温泉 ホテル リゾート', label: '栃木・那須高原（クラフトビール・ワイン・暖炉ラウンジ）' },
      { key: 'izu_all_inclusive', query: '伊豆 オールインクルーシブ 温泉 ホテル オーシャンビュー', label: '静岡・東伊豆（海を眺めるバーラウンジ＆ディナーインクルーシブ）' },
      { key: 'miyagi_all_inclusive', query: '宮城 作並温泉 オールインクルーシブ 旅館 露天風呂', label: '宮城・作並秋保温泉（サイクリング＆湯上がり生ビールバー）' }
    ]
  },
  {
    themeSlug: 'autumn-winter-strawberry-picking-resort',
    title: 'もぎたて完熟！冬・春いちご狩り＆温泉リゾートホテル特集',
    queries: [
      { key: 'tochigi_strawberry', query: '栃木 宇都宮 とちおとめ いちご狩り 温泉 ホテル', label: '栃木・宇都宮日光（とちおとめ＆スカイベリー食べ放題）' },
      { key: 'izu_strawberry', query: '伊豆長岡 いちご狩り 温泉 旅館 露天風呂', label: '静岡・伊豆の国伊豆長岡温泉（紅ほっぺ＆温泉街ステイ）' },
      { key: 'chiba_strawberry', query: '千葉 南房総 館山 いちご狩り ホテル 温泉', label: '千葉・南房総館山（温暖な房総で楽しむいちご狩り）' },
      { key: 'fukuoka_strawberry', query: '福岡 あまおう いちご狩り ホテル 温泉', label: '福岡・久留米原鶴温泉（本場あまおう狩りと美肌温泉）' }
    ]
  },
  {
    themeSlug: 'autumn-winter-sacred-power-spot',
    title: '冬の澄んだ神域へ！秋・冬の開運パワースポット＆宿坊・温泉宿特集',
    queries: [
      { key: 'koyasan_shukubo', query: '高野山 宿坊 寺院 精進料理 宿泊', label: '和歌山・世界遺産高野山（歴史ある宿坊で精進料理＆朝勤行）' },
      { key: 'togakushi_shrine', query: '戸隠 神社 旅館 宿坊 蕎麦 長野', label: '長野・戸隠神社（白銀の奥社杉並木と戸隠手打ち蕎麦）' },
      { key: 'izumo_taisha', query: '出雲大社 玉造温泉 旅館 縁結び', label: '島根・出雲大社＆玉造温泉（神在月のご縁結びと日本最古の美肌湯）' },
      { key: 'kumano_kodo', query: '勝浦温泉 熊野古道 旅館 露天風呂 熊野那智大社', label: '和歌山・熊野三山＆南紀勝浦温泉（那智の滝と忘帰洞温泉）' }
    ]
  }
];

async function main() {
  console.log('=== Fetching direct hotel data from Rakuten Travel API for 5 New Seasonal Wave 7 Hubs ===');
  const cachePath = path.join(__dirname, 'src', 'data', 'all_seasonal_rakuten_hotels.json');
  let results = {};
  if (fs.existsSync(cachePath)) {
    results = JSON.parse(fs.readFileSync(cachePath, 'utf8'));
  }

  for (const theme of wave7Themes) {
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
  console.log(`\nSuccessfully saved all Wave 7 Seasonal themes hotel data to: ${cachePath}`);
}

main().catch(console.error);
