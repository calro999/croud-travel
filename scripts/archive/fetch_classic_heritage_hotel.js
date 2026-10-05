const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const classicHotelConfigs = [
  {
    slug: 'japan-classic-hotel-association-heritage-stay',
    badge: 'JAPAN CLASSIC HOTEL ASSOCIATION GUIDE',
    title: '【日本クラシックホテルの会加盟名門宿】明治・大正の薫り・登録有形文化財 完全ガイド',
    metaDesc: '日本のホテル文化を築いた伝説の名門！「日本クラシックホテルの会」加盟ホテル完全特化！日光金谷ホテル、箱根宮ノ下富士屋ホテル、奈良ホテル、蒲郡クラシックホテル、クラシカルなメインダイニング、アインシュタインや皇族が愛したヘリテージステイを徹底解説。',
    heroDesc: '日本の近代化とともに誕生し、世界の賓客を迎えてきた「日本クラシックホテルの会加盟の名門ホテル」。日光金谷ホテルの重厚な木彫装飾、宮ノ下富士屋ホテルの花御殿と社寺建築の融合、奈良ホテルの桃山御殿風吹き抜けロビー。100年以上の歴史が磨いたもてなしと至福のフレンチディナーへ。',
    queries: [
      { key: 'nikko_kanaya_hotel_stay', query: '日光金谷ホテル 日光 宿泊 栃木 クラシックホテル 登録有形文化財', label: '日本最古のリゾートホテル・日光金谷ホテル＆クラシックディナー' },
      { key: 'fujiya_hotel_hakone_stay', query: '富士屋ホテル 箱根 宮ノ下 宿泊 神奈川 クラシック 登録有形文化財', label: '登録有形文化財・箱根宮ノ下富士屋ホテル＆花御殿ヘリテージ' },
      { key: 'nara_hotel_classic_stay', query: '奈良ホテル 奈良 宿泊 クラシックホテル 登録有形文化財 近鉄奈良', label: '関西の迎賓館・奈良ホテル本館＆桃山御殿風クラシックスイート' }
    ]
  },
  {
    slug: 'taisho-roman-showa-modern-art-deco-hotel-stay',
    badge: 'TAISHO ROMAN & ART DECO GUIDE',
    title: '【大正ロマン＆昭和モダン・アールデコ建築宿】ステンドグラス・意匠美 完全ガイド',
    metaDesc: 'モダンガールの憧れ・大正ロマンとアールデコの美学！昭和初期モダン建築宿完全特化！熱海起雲閣周辺、旧軽井沢クラシックホテル、横浜ホテルニューグランド、東京山の上ホテルゆかり、幾何学模様のステンドグラス、格天井、アンティーク家具宿を徹底解説。',
    heroDesc: '西洋のモダンデザインと東洋の美意識が華麗に調和した「大正ロマン＆昭和モダン建築宿」。丸窓にはめ込まれた美しいステンドグラス、重厚なマホガニーの階段手すり、幾何学模様のアールデコ調レリーフ。タイムスリップしたようなノスタルジーに浸る大人の休日へ。',
    queries: [
      { key: 'hotel_new_grand_yokohama_stay', query: 'ホテルニューグランド 横浜 宿泊 クラシック アールデコ 歴史', label: '昭和2年開業・横浜ホテルニューグランド本館＆マッカーサーゆかりの宿' },
      { key: 'atami_kiunkaku_retro_stay', query: '熱海 温泉 旅館 ホテル 起雲閣 レトロ 大正ロマン 宿泊 静岡', label: '熱海名邸起雲閣至近・ステンドグラスと大正ロマン薫る名湯旅館' },
      { key: 'kyu_karuizawa_roman_hotel_stay', query: '軽井沢 ホテル クラシック 大正ロマン 宿泊 長野 アンティーク', label: '旧軽井沢倶楽部＆アンティーク家具に包まれる高原クラシックホテル' }
    ]
  },
  {
    slug: 'tangible-cultural-property-sukiya-carpenter-ryokan-stay',
    badge: 'TANGIBLE CULTURAL PROPERTY SUKIYA INN GUIDE',
    title: '【国の登録有形文化財・宮大工建築の数寄屋旅館】釘を使わぬ木造美 完全ガイド',
    metaDesc: '日本の伝統美の極致！国の登録有形文化財・名工宮大工が建てた数寄屋造り温泉旅館完全特化！伊豆修善寺新井旅館、兵庫有馬温泉陶泉御所坊、長野角間温泉越後屋、群馬法師温泉長寿館、網代天井、透かし彫り欄間、名湯総ヒノキ風呂を徹底解説。',
    heroDesc: '樹齢数百年の銘木を一本一本選定し、釘を一切使わずに組み上げた「宮大工建築の登録有形文化財旅館」。伊豆修善寺の桂川に張り出す数寄屋客室、有馬温泉の木造格子回廊、法師温泉の明治28年築・総ヒバ造り大浴場。日本建築の最高峰に泊まる至高の文化財ステイへ。',
    queries: [
      { key: 'shuzenji_arai_ryokan_stay', query: '新井旅館 修善寺 温泉 旅館 宿泊 静岡 登録有形文化財 数寄屋', label: '全館が登録有形文化財・伊豆修善寺新井旅館＆名工宮大工建築' },
      { key: 'houshi_onsen_choujukan_stay', query: '法師温泉 長寿館 旅館 宿泊 群馬 登録有形文化財 秘湯 温泉', label: '国登録有形文化財・法師温泉長寿館本館＆明治28年築法師乃湯' },
      { key: 'arima_goshoboh_heritage_stay', query: '陶泉 御所坊 有馬温泉 旅館 宿泊 兵庫 登録有形文化財 金泉', label: '創業1191年・有馬温泉陶泉御所坊＆谷崎潤一郎ゆかりの木造名宿' }
    ]
  },
  {
    slug: 'former-aristocrat-zaibatsu-imperial-villa-resort-stay',
    badge: 'ARISTOCRAT & IMPERIAL VILLA GUIDE',
    title: '【元華族・旧財閥別邸＆皇室御用達ゆかりの宿】貴族のサロン・名園 完全ガイド',
    metaDesc: '選ばれた者だけが愛でた至高の別邸！元華族・旧財閥総帥・皇室御用達ゆかりの名門旅館＆リゾート完全特化！箱根強羅花壇（旧閑院宮別邸）、京都蹴上（旧岩崎家ゆかり）、軽井沢旧三井別邸、日光御用邸周辺、広大な日本庭園とプライベート温泉を徹底解説。',
    heroDesc: 'かつて皇族の避暑地や旧財閥総帥の迎賓館として建てられた「貴族の別荘」。箱根強羅の自然林に抱かれた旧閑院宮別邸、四季の移ろいを映す何千坪もの日本回遊式庭園、皇室献上の美食会席。日本のエリート層がプライベートサロンとして愛した本物の格式と気品に触れる旅。',
    queries: [
      { key: 'gora_kadan_hakone_villa_stay', query: '強羅花壇 箱根 旅館 宿泊 神奈川 旧閑院宮別邸 高級 温泉', label: '旧閑院宮別邸・箱根強羅花壇＆千坪の名園と至高の懐石料理' },
      { key: 'kyoto_nanzenji_zaibatsu_villa_stay', query: '京都 南禅寺 旅館 宿泊 庭園 別邸 高級 露天風呂 料理', label: '京都南禅寺界隈・旧財閥別邸庭園に佇む数寄屋プライベート宿' },
      { key: 'chuzenji_lake_imperial_villa_stay', query: '中禅寺湖 ホテル 旅館 宿泊 日光 英国大使館別邸 温泉 栃木', label: '奥日光中禅寺湖畔・各国大使館別邸文化薫るレイクサイドホテル' }
    ]
  },
  {
    slug: 'vories-frank-lloyd-wright-architecture-resort-stay',
    badge: 'VORIES & WRIGHT ARCHITECTURE GUIDE',
    title: '【巨匠建築・ヴォーリズ＆ライト様式美宿】プレイリースタイル・暖炉リゾート 完全ガイド',
    metaDesc: '世界的巨匠が遺した不朽の名建築に泊まる！W.M.ヴォーリズ＆フランク・ロイド・ライト様式ホテル完全特化！旧甲子園ホテルゆかり、軽井沢ヴォーリズ山荘、近江八幡・琵琶湖、兵庫芦屋、水平線を強調したプレイリースタイル、大谷石の幾何学暖炉を徹底解説。',
    heroDesc: '日本各地に温もりある洋風建築を遺したW.M.ヴォーリズと、有機的建築の巨匠フランク・ロイド・ライト。大谷石の彫刻が美しい暖炉、大自然と一体化する水平基調の窓、木漏れ日が差し込む吹き抜けラウンジ。建築ファンを魅了し続ける不朽の名建築リゾートへ。',
    queries: [
      { key: 'omihachiman_vories_heritage_stay', query: '近江八幡 ホテル 旅館 宿泊 ヴォーリズ 滋賀 琵琶湖 温泉', label: 'ヴォーリズ建築の聖地・近江八幡＆水郷めぐりクラシックステイ' },
      { key: 'karuizawa_vories_forest_inn_stay', query: '軽井沢 ホテル ヴォーリズ 建築 宿泊 長野 教会 リゾート', label: '軽井沢・歴史的西洋建築＆ヴォーリズ設計教会至近の森のホテル' },
      { key: 'koshien_hanshin_modernism_stay', query: '甲子園 西宮 神戸 ホテル 宿泊 建築 フランク・ロイド・ライト 兵庫', label: '阪神間モダニズム・旧甲子園ホテルゆかりのアーバンヘリテージ' }
    ]
  }
];

async function main() {
  console.log('=== Fetching direct hotel data from Rakuten Travel API for 5 Classic Heritage Hotel Hubs ===');
  const cachePath = path.join(__dirname, 'src', 'data', 'all_seasonal_rakuten_hotels.json');
  let results = {};
  if (fs.existsSync(cachePath)) {
    results = JSON.parse(fs.readFileSync(cachePath, 'utf8'));
  }

  for (const theme of classicHotelConfigs) {
    console.log(`\n========================================`);
    console.log(`Classic Hotel Hub: ${theme.title} (${theme.slug})`);
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
  console.log(`\nSuccessfully saved all Classic Heritage Hotel Hubs hotel data to: ${cachePath}`);
}

main().catch(console.error);
