const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const stargazingConfigs = [
  {
    slug: 'astronomical-observatory-stargazing-guide-resort-stay',
    badge: 'OBSERVATORY & STAR SOMMELIER GUIDE',
    title: '【天体望遠鏡ドーム＆星空案内人（星ソムリエ）常駐宿】本格天体観測 完全ガイド',
    metaDesc: '宇宙に一番近いホテル！大型天体望遠鏡ドーム＆星ソムリエ常駐の星空リゾート宿完全特化！長野八ヶ岳・野辺山、南信州阿智村、美ヶ原高原、福島浄土平、月のクレーター・土星の輪・すばる観察、夜間スターウォッチングツアー宿を徹底解説。',
    heroDesc: '漆黒の夜空を貫く満天の天の川。ホテルの屋上や専用ドームに設置された本格的な大型天体望遠鏡。「星空案内人（星ソムリエ）」のわかりやすくロマンチックな星座解説を聞きながら、肉眼では見えない土星の輪や木星の縞模様、月面のクレーターを覗き込む感動の宇宙体験ステイへ。',
    queries: [
      { key: 'yatsugatake_nobeyama_observatory_stay', query: '八ヶ岳 天体観測 ホテル 旅館 宿泊 星空 望遠鏡 長野', label: '八ヶ岳・野辺山高原天文台至近＆本格天体望遠鏡リゾート' },
      { key: 'achi_star_village_inn_stay', query: '阿智村 昼神温泉 星空 ホテル 旅館 宿泊 露天風呂 長野', label: '日本一の星空阿智村・ヘブンスそのはらナイトツアー拠点宿' },
      { key: 'utsukushigahara_star_sommelier_stay', query: '美ヶ原 王ヶ頭ホテル 霧ヶ峰 宿泊 星空 温泉 長野', label: '標高2,000m美ヶ原高原・雲上の星空ソムリエツアー宿' }
    ]
  },
  {
    slug: 'japan-top-three-night-view-luxury-panoramic-stay',
    badge: 'TOP 3 NIGHT VIEW PANORAMIC SUITE GUIDE',
    title: '【日本三大夜景＆全室パノラマ夜景ビュー宿】1000万ドルの夜景・特等席 完全ガイド',
    metaDesc: '光の海を見下ろす極上の夜！日本三大夜景＆新日本三大夜景パノラマホテル完全特化！長崎稲佐山、神戸六甲山・摩耶山、北海道函館山、山梨笛吹川フルーツ公園、北九州皿倉山、バルコニーやビューバスから望む1000万ドルの絶景ステイを徹底解説。',
    heroDesc: '街の明かりが無数の宝石のように煌めく「1000万ドルの夜景」。「日本三大夜景」の長崎稲佐山・神戸六甲山・函館山。客室の大きな窓やプライベートバルコニー、さらには湯船に浸かりながら光のパノラマを独占するビューバス。ワイングラスを傾けながら過ごすロマンチックな夜へ。',
    queries: [
      { key: 'nagasaki_inasayama_night_view_stay', query: '長崎 稲佐山 夜景 ホテル 旅館 宿泊 展望 露天風呂', label: '世界新三大夜景・長崎稲佐山山腹パノラマビュー名ホテル' },
      { key: 'kobe_rokko_night_view_luxury_stay', query: '神戸 六甲山 夜景 ホテル 宿泊 有馬温泉 摩耶山 高級', label: '1000万ドルの夜景・神戸六甲山＆摩耶山きらめき展望リゾート' },
      { key: 'hakodate_mountain_night_view_stay', query: '函館 夜景 ホテル 宿泊 函館山 温泉 展望 露天風呂', label: 'くびれの美・函館山夜景望むベイエリア＆湯の川温泉ホテル' }
    ]
  },
  {
    slug: 'planetarium-private-cinema-theater-room-hotel-stay',
    badge: 'PLANETARIUM & CINEMA SUITE GUIDE',
    title: '【プラネタリウム＆大画面シアタールーム完備宿】部屋ごもり・星空上映 完全ガイド',
    metaDesc: 'お部屋の中が満天の星空に！客室プラネタリウム＆大画面プロジェクター完備ホテル完全特化！東京、大阪、京都、軽井沢、家庭用最高峰ホームスター設置ルーム、天井いっぱいの星座パノラマ、映画・星空鑑賞カップル＆ファミリー記念日ステイを徹底解説。',
    heroDesc: '部屋の照明を落とした瞬間、天井や壁一面に広がる数万個の恒星。「客室プラネタリウム＆ホームシアター完備ホテル」。ベッドに寝転んだまま、二人きりで満天の星空やヒーリング音楽に包まれる至福。天候に左右されず、いつでも満天の星空デートが叶う非日常の隠れ家へ。',
    queries: [
      { key: 'tokyo_planetarium_concept_stay', query: '東京 プラネタリウム ホテル シアター 宿泊 プロジェクター', label: '都心で満天の星空体験・東京客室プラネタリウム＆シアターホテル' },
      { key: 'kansai_cinema_star_suite_stay', query: '大阪 京都 ホテル シアター プロジェクター 宿泊 プラネタリウム', label: '関西・大画面プロジェクター＆星空投影プライベートスイート' },
      { key: 'karuizawa_forest_planetarium_stay', query: '軽井沢 ホテル 星空 シアター 宿泊 露天風呂 リゾート 長野', label: '軽井沢高原・森の中のシアター＆星空コンセプトヴィラ' }
    ]
  },
  {
    slug: 'infinity-open-air-bath-starry-sky-sleeping-onsen-stay',
    badge: 'STARGAZING INFINITY BATH & SLEEPING SPA GUIDE',
    title: '【満天の星空露天風呂＆寝湯インフィニティ宿】天然プラネタリウム温泉 完全ガイド',
    metaDesc: '湯船に浮かびながら星屑を数える！星空インフィニティ露天風呂＆寝湯温泉宿完全特化！群馬万座温泉（標高1,800m）、長野白骨温泉・野沢温泉、栃木奥日光湯元温泉、大分久住高原、遮るもののない天空露天風呂と湯浴み体験を徹底解説。',
    heroDesc: '標高1,500mを超える高山温泉郷。明かりが届かない大自然の露天風呂で、湯船に仰向けに寝そべる「寝湯（ねゆ）」。頭上には手を伸ばせば届きそうな満天の星空と、湯面きらめく逆さ星屑。温かな湯に包まれながら宇宙と一体になる究極のリラクゼーションへ。',
    queries: [
      { key: 'manza_sky_onsen_starry_stay', query: '万座温泉 旅館 ホテル 星空 露天風呂 宿泊 群馬 標高', label: '日本一標高の高い温泉郷・万座温泉星空インフィニティ露天宿' },
      { key: 'kuju_highland_star_bath_stay', query: '久住高原 温泉 ホテル 旅館 宿泊 星空 露天風呂 大分 阿蘇', label: '九州最高峰の星空・大分久住高原パノラマ寝湯温泉リゾート' },
      { key: 'okunikko_starry_open_air_stay', query: '奥日光 湯元温泉 旅館 ホテル 宿泊 星空 露天風呂 硫黄泉 栃木', label: '奥日光湯元温泉・静寂の森と白濁硫黄泉に浮かぶ星空宿' }
    ]
  },
  {
    slug: 'dark-sky-reserve-nature-island-starry-resort-stay',
    badge: 'DARK SKY RESERVE & ISLAND GUIDE',
    title: '【国際星空保護区＆離島ネイチャーステイ】石垣島・西表島・神津島 完全ガイド',
    metaDesc: '世界が認めた奇跡の暗闇と星空！国際ダークスカイ協会認定「星空保護区」＆離島リゾート宿完全特化！沖縄「西表石垣国立公園（全天88星座中84星座）」、東京「神津島」、岡山「美星町」、南十字星観察・ビーチ星空ナイトツアーを徹底解説。',
    heroDesc: '街明かりの影響を極限まで抑えた、世界基準の美しい夜空「国際星空保護区（ダークスカイ・プレイス）」。全天88星座のうち84星座が見られる八重山諸島（石垣島・西表島）や、東京都心から行ける神津島。波の音をBGMにビーチで眺める本物の天の川と南十字星の旅へ。',
    queries: [
      { key: 'ishigaki_iriomote_dark_sky_stay', query: '石垣島 西表島 ホテル リゾート 星空 宿泊 沖縄 ビーチ', label: '日本初星空保護区・西表石垣国立公園オーシャン星空リゾート' },
      { key: 'kouzushima_tokyo_dark_sky_stay', query: '神津島 ホテル 旅館 民宿 宿泊 星空 東京 離島', label: '東京都初星空保護区・神津島よんなれー星空ナイトツアー宿' },
      { key: 'bisei_okayama_astronomy_stay', query: '美星町 井原市 ホテル 旅館 宿泊 岡山 星空 天文台', label: 'アジア初コミュニティ認定・岡山美星町星空ペンション宿' }
    ]
  }
];

async function main() {
  console.log('=== Fetching direct hotel data from Rakuten Travel API for 5 Stargazing & Night View Hubs ===');
  const cachePath = path.join(__dirname, 'src', 'data', 'all_seasonal_rakuten_hotels.json');
  let results = {};
  if (fs.existsSync(cachePath)) {
    results = JSON.parse(fs.readFileSync(cachePath, 'utf8'));
  }

  for (const theme of stargazingConfigs) {
    console.log(`\n========================================`);
    console.log(`Stargazing Hub: ${theme.title} (${theme.slug})`);
    console.log(`========================================`);
    if (!results[theme.slug]) results[theme.slug] = {};

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
      results[theme.slug][q.key] = {
        label: q.label,
        query: q.query,
        hotels: hotels || []
      };
    }
  }

  fs.writeFileSync(cachePath, JSON.stringify(results, null, 2), 'utf8');
  console.log(`\nSuccessfully saved all Stargazing & Night View Hubs hotel data to: ${cachePath}`);
}

main().catch(console.error);
