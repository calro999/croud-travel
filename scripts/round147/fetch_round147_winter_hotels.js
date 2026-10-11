const { searchRakutenHotels } = require('../../rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const targets = [
  {
    theme: 'mie_ago_bay_luxury',
    slug: 'winter-mie-ago-bay-luxury-basara-shimanokaze-matsusaka-stay',
    pref: 'mie',
    prefJa: '三重県',
    prefCode: '24',
    title: '【英虞湾の夕景リアス美と全室離れ露天風呂スイート】2026-2027年11-12月の三重・志摩賢島！「汀渚 ばさら邸」＆ベイスイート・冬の伊勢志摩天然伊勢海老・極上松阪牛名宿5選',
    metaDesc: 'リアス海岸の穏やかな英虞湾を眼下に望む三重県・志摩賢島。サミット開催舞台の「志摩観光ホテル ザ ベイスイート」や、広大な敷地にわずかな客室と海を望む貸切露天風呂が点在する「汀渚 ばさら邸」など、国内屈指の高級リゾート。冬に旬を迎える伊勢海老や鮑、とろけるA5松阪牛を味わう大人の記念日ステイ厳選5選。',
    spotQuery: '英虞湾',
    wikiPage: '英虞湾',
    area: '志摩・賢島・英虞湾',
    queries: [
      'ばさら邸',
      '志摩観光ホテル',
      '賢島宝生苑',
      '汀渚 ばさら邸',
      '志摩観光ホテル ザ クラシック'
    ]
  },
  {
    theme: 'yamanashi_kawaguchiko_luxury',
    slug: 'winter-yamanashi-kawaguchiko-luxury-fufu-konansou-fuji-stay',
    pref: 'yamanashi',
    prefJa: '山梨県',
    prefCode: '19',
    title: '【雄大な冬富士と全室富士山ビュー客室露天風呂】2026-2027年11-12月初冬の山梨・富士河口湖！「ふふ 河口湖」＆「うぶや」・澄み渡る冠雪富士と甲州牛懐石名宿5選',
    metaDesc: '空気が澄み渡り、雪化粧をまとった雄大な富士山が最も鮮やかに映える11月〜12月の河口湖。木々の温もりと全室自家源泉露天風呂・バイオエタノール暖炉を備えた最高峰「ふふ 河口湖」や、富士と湖を正面に望む「人生を祝う宿 うぶや」など。客室からプライベートに冠雪富士を望み、極上の甲州牛や富士桜ポークを味わう贅沢リトリート厳選5選。',
    spotQuery: '河口湖',
    wikiPage: '河口湖',
    area: '河口湖・富士吉田',
    queries: [
      'ふふ 河口湖',
      'うぶや',
      '富士レイクホテル',
      '秀峰閣 湖月',
      '富士河口湖温泉 湖南荘'
    ]
  },
  {
    theme: 'kumamoto_kurokawa_senomoto_luxury',
    slug: 'winter-kumamoto-kurokawa-luxury-takefue-hoshinoya-akaushi-stay',
    pref: 'kumamoto',
    prefJa: '熊本県',
    prefCode: '43',
    title: '【阿蘇の静寂と湯煙に抱かれる極上隠れ宿離れ】2026-2027年11-12月初冬の熊本・黒川温泉＆瀬の本！「深山山荘」＆「山あいの宿 山みず木」・初冬の静寂と阿蘇あか牛懐石名宿5選',
    metaDesc: '阿蘇外輪山の北麓、幽玄な渓谷に湯煙が立ちのぼる黒川温泉郷と瀬の本高原。渓流沿いの大自然に抱かれた「黒川温泉 山みず木別邸 深山山荘」や、野趣あふれる名湯と至高のホスピタリティを誇る「山あいの宿 山みず木」、茅葺きや古民家造りの大人の隠れ家リゾート。冬枯れの美しい自然景観と、とろける阿蘇あか牛や郷土会席を五感で味わう至高の贅沢ステイ厳選5選。',
    spotQuery: '黒川温泉',
    wikiPage: '黒川温泉',
    area: '黒川温泉・瀬の本・南小国',
    queries: [
      '黒川温泉 深山山荘',
      '山あいの宿 山みず木',
      '黒川温泉 お宿のし湯',
      '黒川温泉 歴史の宿 御客屋',
      '黒川温泉 瀬の本高原ホテル'
    ]
  },
  {
    theme: 'kyoto_tango_taizagani_luxury',
    slug: 'winter-kyoto-tango-taizagani-luxury-sumihei-amadori-matsuba-stay',
    pref: 'kyoto',
    prefJa: '京都府',
    prefCode: '26',
    title: '【幻のブランド蟹・間人ガニと日本海の荒波を望む名旅館】2026-2027年11-12月初冬の京都・丹後間人＆京丹後！創業明治「間人温泉 炭平」＆全室海一望露天スイート・極上活松葉ガニ名宿5選',
    metaDesc: '11月上旬に待望の冬の味覚・ズワイガニ漁が解禁。その中でもわずか数隻の小型船が日帰り漁で水揚げする「幻の蟹」と呼ばれる間人（たいざ）ガニの聖地・京都丹後。創業明治元年、全室オーシャンビューと多彩な貸切露天風呂を誇る名門「間人温泉 炭平」をはじめ、極上の活蟹刺し・甲羅焼き・蟹すきを求めて全国から食通が集う冬の最高峰グルメ旅館厳選5選。',
    spotQuery: '丹後半島',
    wikiPage: '丹後半島',
    area: '丹後・京丹後・間人・夕日ヶ浦',
    queries: [
      '炭平',
      '夕日ヶ浦温泉 佳松苑 はなれ風香',
      'いっぺん庵',
      '夕日ヶ浦温泉 海花亭',
      '炭平別邸 季ト時'
    ]
  },
  {
    theme: 'kagoshima_kirishima_myoken_luxury',
    slug: 'winter-kagoshima-kirishima-myoken-luxury-gajin-ishiharaso-kurobuta-stay',
    pref: 'kagoshima',
    prefJa: '鹿児島県',
    prefCode: '46',
    title: '【天孫降臨の地・霧島連山と天降川渓流の極上源泉離れ宿】2026-2027年11-12月の鹿児島・霧島＆妙見温泉！「妙見石原荘」＆「忘れの里 雅叙苑」・自噴かけ流し温泉と黒毛和牛・黒豚名宿5選',
    metaDesc: '雄大な霧島連山の麓、天降川（あもりがわ）の清流沿いに湧き出る妙見温泉と霧島温泉郷。茅葺き屋根の古民家が点在し囲炉裏料理と自家源泉が名高い「忘れの里 雅叙苑」や、川床に湧く極上の自噴炭酸泉と洗練されたモダン懐石を誇る「妙見石原荘」。南国の初冬の澄んだ大気と極上の湯浴み、鹿児島黒牛・黒豚の贅沢を味わう至高の記念日ステイ厳選5選。',
    spotQuery: '妙見温泉',
    wikiPage: '妙見温泉',
    area: '霧島・妙見温泉・霧島神宮',
    queries: [
      '石原荘',
      '忘れの里 雅叙苑',
      '料亭旅館 竹千代 霧島別邸',
      '鳥遊ぶ森の宿 ふたり静',
      '旅行人山荘'
    ]
  }
];

async function main() {
  const allResults = {};

  for (const t of targets) {
    console.log(`\n======================================================`);
    console.log(`Fetching Rakuten hotels for: ${t.title}`);
    console.log(`Theme: ${t.theme}`);
    console.log(`======================================================`);

    const hotelsMap = new Map();

    for (const q of t.queries) {
      console.log(`Searching query: "${q}"...`);
      try {
        const hotelList = await searchRakutenHotels(q, 3);
        if (hotelList && hotelList.length > 0) {
          console.log(`  -> Found ${hotelList.length} hotels`);
          for (const h of hotelList) {
            if (h && h.hotelNo && !hotelsMap.has(h.hotelNo)) {
              hotelsMap.set(h.hotelNo, h);
            }
          }
        } else {
          console.log(`  -> 0 hotels found`);
        }
      } catch (err) {
        console.error(`  -> Error querying "${q}":`, err.message);
      }
      await sleep(1200);
    }

    const uniqueHotels = Array.from(hotelsMap.values());
    console.log(`Total unique hotels found for ${t.theme}: ${uniqueHotels.length}`);
    allResults[t.theme] = {
      targetInfo: t,
      hotels: uniqueHotels
    };
  }

  const outPath = path.join(__dirname, 'round147_raw_hotels.json');
  fs.writeFileSync(outPath, JSON.stringify(allResults, null, 2), 'utf-8');
  console.log(`\nSuccessfully wrote raw hotels to ${outPath}`);
}

main();
