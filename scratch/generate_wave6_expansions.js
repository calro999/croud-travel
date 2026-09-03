const fs = require('fs');
const path = require('path');
const { searchRakutenHotels } = require('../rakuten_api_helper');

const POSTS_DIR = path.join(__dirname, '..', 'src', 'data', 'posts');

// 第6弾：高ポテンシャルな地域・宿・テーマの横展開特化記事
const wave6Themes = [
  // 1. 岩手・花巻温泉郷 × バラ風呂・宮沢賢治・名物わんこそば
  {
    searchKeyword: "花巻温泉 旅館 おすすめ",
    fallbackKeyword: "花巻温泉 ホテル",
    slug: "hanamaki-onsen-rose-bath-kenji-guide",
    title: "【岩手・花巻温泉郷】名物バラ風呂＆宮沢賢治ゆかりの宿7選！前沢牛・白金豚美食と渓流露天",
    description: "宮沢賢治の故郷に広がる名湯「花巻温泉郷」特集！女性に大人気の名物バラ風呂、豊沢川の渓流露天風呂、岩手の極上ブランド「前沢牛」「白金豚」のしゃぶしゃぶ会席、イーハトーブの森巡りや新花巻駅からのアクセスを徹底解説。",
    prefecture: "岩手県",
    area: "花巻・花巻温泉郷・新花巻・北上",
    categories: ["花巻温泉", "花巻温泉郷", "宮沢賢治", "バラ風呂", "前沢牛", "岩手旅行"],
    keywords: [
      "花巻温泉 旅館 おすすめ", "花巻温泉 ホテル ランキング", "花巻温泉 おすすめ宿",
      "花巻 温泉 ランキング", "花巻温泉 バラ風呂", "宮沢賢治 花巻 宿",
      "岩手 温泉 おすすめ", "東北 温泉 旅館 おすすめ"
    ],
    internalLinks: [
      { text: "東北新幹線駅から徒歩・送迎で行ける名湯宿", href: "/posts/tohoku-shinkansen-station-walk-onsen-hotels-guide" },
      { text: "岩手県の特産品・地酒・名門宿ガイド", href: "/posts/iwate-famous-things-gourmet-spots-guide" }
    ],
    intro: "童話作家・宮沢賢治が愛したイーハトーブの里、花巻温泉郷。豊かな木々に囲まれた渓流露天風呂と華やかなバラ風呂で心身を解きほぐし、岩手の誇る極上ブランド肉の美食をご堪能ください。"
  },

  // 2. 栃木・奥日光湯元温泉 × 乳白色の濃厚硫黄泉・中禅寺湖・湯滝
  {
    searchKeyword: "日光湯元温泉 旅館 おすすめ",
    fallbackKeyword: "奥日光 温泉 ホテル",
    slug: "okunikko-yumoto-onsen-sulfur-springs-guide",
    title: "【奥日光湯元温泉】乳白色のにごり湯源泉かけ流し宿6選！中禅寺湖・湯滝ハイキングととちぎ和牛",
    description: "日光国立公園の最奥部に佇む名湯「奥日光湯元温泉」特集！日本で4番目に濃い白濁硫黄泉、湯ノ湖や湯滝の爽快なネイチャー散策、とちぎ和牛ステーキや名物湯波会席、四季折々の絶景露天風呂を詳しく紹介。",
    prefecture: "栃木県",
    area: "奥日光・日光湯元温泉・中禅寺湖・日光",
    categories: ["日光湯元温泉", "奥日光", "にごり湯", "硫黄泉", "中禅寺湖", "栃木旅行"],
    keywords: [
      "日光湯元温泉 旅館 おすすめ", "奥日光 温泉 ランキング", "日光湯元温泉 おすすめ",
      "奥日光 にごり湯 宿", "日光 硫黄泉 露天風呂", "中禅寺湖 近くの温泉宿",
      "栃木 温泉 おすすめ", "日光 旅館 おすすめ"
    ],
    internalLinks: [
      { text: "栃木県の温泉おすすめ旅館＆ホテルランキング10選", href: "/posts/tochigi-onsen-ranking-hotels-guide" },
      { text: "栃木県の特産品・名物・おすすめ温泉宿", href: "/posts/tochigi-famous-things-gourmet-spots-guide" }
    ],
    intro: "標高約1,500m、手つかずの自然に囲まれた奥日光湯元温泉。湯畑からこんこんと湧き出るエメラルドグリーンから乳白色へと変化する濃厚な硫黄泉で、極上の湯治気分を味わえます。"
  },

  // 3. 神奈川・湯河原温泉 × 文豪の隠れ家・貸切露天風呂・相模湾海の幸
  {
    searchKeyword: "湯河原温泉 旅館 おすすめ",
    fallbackKeyword: "湯河原温泉 ホテル",
    slug: "yugawara-onsen-bungo-retreat-luxury-guide",
    title: "【神奈川・湯河原温泉】文豪が愛した名湯の隠れ宿6選！プライベート貸切露天と相模湾地魚会席",
    description: "万葉集にも詠まれた歴史ある名湯「湯河原温泉」特集！夏目漱石や芥川龍之介ら文豪が逗留した老舗宿、竹林や渓流を望む貸切露天風呂、相模湾で獲れたばかりの地魚舟盛り会席、東京から特急踊り子で直行できるおすすめ宿を解説。",
    prefecture: "神奈川県",
    area: "湯河原温泉・真鶴・箱根南麓",
    categories: ["湯河原温泉", "文豪の宿", "貸切露天風呂", "相模湾海の幸", "神奈川温泉", "大人旅"],
    keywords: [
      "湯河原温泉 旅館 おすすめ", "湯河原 温泉 ランキング", "湯河原温泉 おすすめ宿",
      "湯河原 高級旅館 露天風呂", "湯河原温泉 カップル 宿", "湯河原 料理自慢 宿",
      "神奈川 温泉 おすすめ", "湯河原 旅行"
    ],
    internalLinks: [
      { text: "神奈川県の温泉おすすめ旅館＆ホテルランキング10選", href: "/posts/kanagawa-onsen-ranking-hotels-guide" },
      { text: "伊豆・修善寺の新井旅館宿泊ガイド", href: "/posts/arai-ryokan-shuzenji-cultural-heritage-guide" }
    ],
    intro: "都心から約70分、千歳川のせせらぎが心地よい大人の隠れ里・湯河原。やわらかな弱アルカリ性の美肌湯と、相模湾の獲れたて地魚を心ゆくまで味わう上質なリトリートをお届けします。"
  },

  // 4. 富山・氷見温泉郷 × 富山湾の寒ブリ・立山連峰海越しパノラマ
  {
    searchKeyword: "氷見温泉 旅館 おすすめ",
    fallbackKeyword: "氷見 ホテル 温泉",
    slug: "himi-onsen-tateyama-view-buri-guide",
    title: "【富山・氷見温泉郷】富山湾越しに立山連峰を望む絶景宿6選！名物「氷見寒ブリ」＆白えび三昧",
    description: "世界でも稀有な「海越しに3,000m級の立山連峰を望む」絶景名湯「氷見温泉郷」特集！冬の最高峰ブランド「ひみ寒ぶり」のブリしゃぶ・刺身、富山湾の宝石「白えび」会席、朝日が昇るオーシャンビュー露天風呂を詳しく紹介。",
    prefecture: "富山県",
    area: "氷見・氷見温泉郷・雨晴海岸・高岡",
    categories: ["氷見温泉", "氷見寒ブリ", "立山連峰", "絶景露天風呂", "富山湾の幸", "富山旅行"],
    keywords: [
      "氷見温泉 旅館 おすすめ", "氷見 温泉 ランキング", "氷見 寒ブリ 宿泊",
      "氷見 ホテル おすすめ", "雨晴海岸 近くの温泉宿", "富山 温泉 おすすめ",
      "富山 旅館 おすすめ", "氷見 温泉 絶景"
    ],
    internalLinks: [
      { text: "宇奈月温泉・黒部峡谷トロッコ電車＆名湯ガイド", href: "/posts/unazuki-kurobe-gorge-trolley-ryokan-guide" },
      { text: "富山県の温泉おすすめ旅館＆ホテルランキング10選", href: "/posts/toyama-onsen-ranking-hotels-guide" }
    ],
    intro: "雨晴海岸から富山湾越しに浮かび上がる白銀の立山連峰。息をのむ大パノラマを湯船から眺め、富山湾の王者「氷見寒ブリ」や新鮮魚介を堪能する感動の北陸旅へご案内します。"
  },

  // 5. 兵庫・城崎温泉 × 七つの外湯めぐり・浴衣散策・但馬牛
  {
    searchKeyword: "城崎温泉 旅館 おすすめ",
    fallbackKeyword: "城崎温泉 ホテル",
    slug: "kinosaki-onsen-seven-baths-yukata-guide",
    title: "【兵庫・城崎温泉】七つの外湯めぐり＆浴衣散策おすすめ宿7選！但馬牛＆冬の松葉ガニ会席",
    description: "開湯1300年の名湯「城崎温泉」特集！カランコロンと下駄を鳴らして巡る「外湯めぐりパス」付き宿、柳並木の大谿川沿い散策、兵庫の最高峰「但馬牛」ステーキや冬の極上「津居山かに・松葉ガニ」、貸切風呂充実の宿を紹介。",
    prefecture: "兵庫県",
    area: "城崎温泉・豊岡・但馬・日本海沿岸",
    categories: ["城崎温泉", "外湯めぐり", "浴衣散策", "但馬牛", "松葉ガニ", "兵庫旅行"],
    keywords: [
      "城崎温泉 旅館 おすすめ", "城崎温泉 ランキング", "城崎温泉 人気宿",
      "城崎温泉 外湯めぐり 宿", "城崎 温泉 ホテル おすすめ", "城崎温泉 但馬牛 プラン",
      "兵庫 温泉 おすすめ", "城崎温泉 カップル 宿泊"
    ],
    internalLinks: [
      { text: "淡路島・洲本温泉インフィニティ絶景宿ガイド", href: "/posts/sumoto-onsen-awaji-luxury-ocean-view-guide" },
      { text: "兵庫県の温泉おすすめ旅館＆ホテルランキング10選", href: "/posts/hyogo-onsen-ranking-hotels-guide" }
    ],
    intro: "川沿いの柳並木と太鼓橋、風情ある木造建築が連なる城崎温泉。色とりどりの浴衣に身を包んで名物外湯を巡り、但馬牛や日本海の冬の味覚を贅沢に味わう情緒豊かな温泉街ステイをお楽しみください。"
  },

  // 6. 島根・玉造温泉 × 日本最古の美肌温泉・勾玉・宍道湖七道
  {
    searchKeyword: "玉造温泉 旅館 おすすめ",
    fallbackKeyword: "玉造温泉 ホテル",
    slug: "tamatsukuri-onsen-bihada-magatama-guide",
    title: "【島根・玉造温泉】神の湯・日本最古の美肌温泉おすすめ宿7選！出雲大社参拝としまね和牛",
    description: "出雲風土記に「一度入れば美しく、二度入れば病が治る」と記された美肌温泉の最高峰「玉造温泉」特集！天然の化粧水と評される源泉かけ流し宿、出雲大社参拝の拠点、宍道湖の七珍やしまね和牛を堪能できる人気旅館を徹底比較。",
    prefecture: "島根県",
    area: "玉造温泉・松江・出雲・宍道湖",
    categories: ["玉造温泉", "美肌温泉", "神の湯", "出雲大社", "しまね和牛", "島根旅行"],
    keywords: [
      "玉造温泉 旅館 おすすめ", "玉造温泉 ランキング", "玉造温泉 おすすめ宿",
      "玉造温泉 美肌の湯 宿", "出雲大社 玉造温泉 宿泊", "玉造温泉 カップル 宿",
      "島根 温泉 おすすめ", "松江 玉造温泉 ホテル"
    ],
    internalLinks: [
      { text: "鳥取・三朝温泉ラジウム湯治＆松葉ガニガイド", href: "/posts/misasa-onsen-radium-healing-crab-guide" },
      { text: "島根県の特産品・地酒・おすすめ名門宿", href: "/posts/shimane-famous-things-gourmet-spots-guide" }
    ],
    intro: "古くから「美肌の湯」として名高い玉造温泉。玉湯川沿いの足湯や温泉街散策を楽しみ、出雲大社へのご縁結び参拝と合わせた極上の山陰温泉トリップをご案内します。"
  },

  // 7. 愛媛・道後温泉 × 日本最古の名湯・本館・坊っちゃん・伊予牛
  {
    searchKeyword: "道後温泉 旅館 おすすめ",
    fallbackKeyword: "道後温泉 ホテル",
    slug: "dogo-onsen-honkan-botchan-ehime-guide",
    title: "【愛媛・道後温泉】日本最古の湯・道後温泉本館周辺の人気宿7選！坊っちゃんゆかりの湯と鯛めし",
    description: "3000年の歴史を誇る日本三古湯の筆頭「道後温泉」特集！保存修理を終えた道後温泉本館や飛鳥乃湯泉を巡る湯めぐり、愛媛名物の宇和島鯛めし・伊予牛会席、屋上展望露天風呂や温泉情緒あふれる名宿を徹底紹介。",
    prefecture: "愛媛県",
    area: "松山・道後温泉・道後・愛媛中予",
    categories: ["道後温泉", "道後温泉本館", "日本最古の湯", "鯛めし", "坊っちゃん", "愛媛旅行"],
    keywords: [
      "道後温泉 旅館 おすすめ", "道後温泉 ホテル ランキング", "道後温泉 おすすめ宿",
      "道後温泉 本館 近くの宿", "道後 温泉 ランキング", "松山 道後温泉 宿泊",
      "愛媛 温泉 おすすめ", "道後温泉 鯛めし 宿"
    ],
    internalLinks: [
      { text: "しまなみ海道・絶景展望温泉宿ガイド（今治）", href: "/posts/shimanami-kaido-view-onsen-hotels-imabari-guide" },
      { text: "高知・三翠園＆高知城下温泉宿泊ガイド", href: "/posts/kochi-sansuien-castle-history-tataki-guide" }
    ],
    intro: "夏目漱石の小説『坊っちゃん』の舞台としても知られる道後温泉。歴史と現代アートが調和するレトロな街並みを散策し、やわらかなアルカリ性単純温泉と絶品鯛めしを味わう四国名湯の旅をお届けします。"
  },

  // 8. 佐賀・武雄温泉 × 楼門・竜宮城・美肌の湯・佐賀牛
  {
    searchKeyword: "武雄温泉 旅館 おすすめ",
    fallbackKeyword: "武雄温泉 ホテル",
    slug: "takeo-onsen-romon-saga-beef-guide",
    title: "【佐賀・武雄温泉】辰野金吾設計の楼門が迎える名湯宿6選！とろとろ美肌湯と極上佐賀牛ステーキ",
    description: "開湯1300年！東京駅を設計した辰野金吾ゆかりの朱塗りの楼門がシンボルの「武雄温泉」特集！透明で柔らかな弱アルカリ性美肌泉、全国トップクラスの肉質を誇る佐賀牛ステーキ会席、御船山楽園の四季折々の絶景を楽しむ宿を解説。",
    prefecture: "佐賀県",
    area: "武雄・武雄温泉・御船山・嬉野近郊",
    categories: ["武雄温泉", "辰野金吾", "美肌の湯", "佐賀牛", "御船山楽園", "佐賀旅行"],
    keywords: [
      "武雄温泉 旅館 おすすめ", "武雄温泉 ランキング", "武雄温泉 おすすめ宿",
      "武雄 温泉 ホテル", "御船山楽園 近くの宿", "武雄温泉 佐賀牛 プラン",
      "佐賀 温泉 おすすめ", "武雄温泉 露天風呂 宿泊"
    ],
    internalLinks: [
      { text: "佐賀県の温泉おすすめ旅館＆ホテルランキング10選", href: "/posts/saga-onsen-ranking-hotels-guide" },
      { text: "別府天然泥湯＆泥パック名湯宿ガイド", href: "/posts/beppu-doroyu-mud-pack-onsen-hotels-guide" }
    ],
    intro: "竜宮城を思わせる鮮やかな朱塗りの楼門が出迎える武雄温泉。宮本武蔵や伊能忠敬も浸かった歴史ある名湯で、とろけるような佐賀牛の美食とともに贅沢な休日をお過ごしください。"
  }
];

async function fetchWithRetry(kw, fallbackKw, retries = 3) {
  for (let i = 0; i < retries; i++) {
    await new Promise(r => setTimeout(r, 1600));
    try {
      const hotels = await searchRakutenHotels(kw, 4);
      if (hotels && hotels.length > 0) return hotels;
    } catch (e) {
      console.warn(`Retry ${i+1} for ${kw}:`, e.message);
    }
  }
  if (fallbackKw) {
    console.log(`Trying fallback keyword: "${fallbackKw}"`);
    await new Promise(r => setTimeout(r, 1600));
    return await searchRakutenHotels(fallbackKw, 4);
  }
  return [];
}

async function run() {
  console.log(`=== Starting Wave 6 Expansion Post Generation (${wave6Themes.length} topics) ===`);
  let created = 0;

  for (const theme of wave6Themes) {
    const outPath = path.join(POSTS_DIR, `${theme.slug}.json`);
    if (fs.existsSync(outPath)) {
      console.log(`Already exists: ${theme.slug}`);
      continue;
    }

    console.log(`\nFetching Rakuten data for: ${theme.slug} ("${theme.searchKeyword}")...`);
    const hotels = await fetchWithRetry(theme.searchKeyword, theme.fallbackKeyword);
    if (!hotels || hotels.length === 0) {
      console.error(`Failed to get hotels for ${theme.slug}`);
      continue;
    }

    const mainHotel = hotels[0];
    const otherHotels = hotels.slice(1);

    let reviewHtml = `<h2 class="text-2xl font-bold text-stone-900 border-b-2 border-amber-500 pb-2 mb-4">${theme.title}</h2>\n`;
    reviewHtml += `<p class="text-xs text-stone-700 leading-relaxed my-2">${theme.intro}</p>\n\n`;

    reviewHtml += `<h3 class="text-lg font-bold text-stone-900 border-b border-amber-300 pb-1 mt-6 mb-3">🏨 厳選おすすめ宿泊施設</h3>\n`;
    reviewHtml += `<div class="space-y-6 my-4">\n`;

    reviewHtml += `  <div class="p-4 bg-white rounded-2xl border border-amber-200 shadow-sm space-y-3">
    <div class="flex flex-col md:flex-row gap-4 items-center">
      ${mainHotel.hotelImageUrl ? `<img src="${mainHotel.hotelImageUrl}" alt="${mainHotel.hotelName}" class="w-full md:w-48 h-36 object-cover rounded-xl shadow-inner flex-shrink-0" />` : ''}
      <div class="flex-grow space-y-1.5">
        <span class="inline-block px-2.5 py-0.5 bg-amber-500 text-white font-bold text-[10px] rounded-full">特選おすすめ</span>
        <h4 class="font-bold text-stone-900 text-base leading-snug">${mainHotel.hotelName}</h4>
        <p class="text-[11px] text-stone-600">${mainHotel.address1}${mainHotel.address2} ｜ ${mainHotel.access || ''}</p>
        <div class="flex items-center gap-3 text-xs text-stone-700 pt-1">
          ${mainHotel.reviewAverage > 0 ? `<span class="font-bold text-amber-600">⭐ ${mainHotel.reviewAverage}（${mainHotel.reviewCount}件の評価）</span>` : ''}
          ${mainHotel.hotelMinCharge > 0 ? `<span class="font-bold text-stone-900">1名目安: ¥${mainHotel.hotelMinCharge.toLocaleString()}〜</span>` : ''}
        </div>
      </div>
    </div>
    ${mainHotel.hotelSpecial ? `<p class="text-xs text-stone-700 bg-amber-50/60 p-2.5 rounded-lg border border-amber-100">${mainHotel.hotelSpecial}</p>` : ''}
    <div class="text-right pt-2">
      <a href="${mainHotel.affiliateUrl}" target="_blank" rel="noopener noreferrer" class="inline-block px-6 py-2.5 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold text-xs rounded-xl shadow hover:opacity-95 transition">
        楽天トラベルでプラン・空室を見る ≫
      </a>
    </div>
  </div>\n`;

    for (const h of otherHotels) {
      reviewHtml += `  <div class="p-4 bg-stone-50/80 rounded-xl border border-stone-200 space-y-2.5">
    <div class="flex flex-col md:flex-row gap-3 items-center">
      ${h.hotelImageUrl ? `<img src="${h.hotelImageUrl}" alt="${h.hotelName}" class="w-full md:w-36 h-24 object-cover rounded-lg flex-shrink-0" />` : ''}
      <div class="flex-grow space-y-1">
        <h4 class="font-bold text-stone-900 text-sm">${h.hotelName}</h4>
        <p class="text-[11px] text-stone-600">${h.address1}${h.address2}</p>
        <div class="flex items-center gap-3 text-xs text-stone-700">
          ${h.reviewAverage > 0 ? `<span class="text-amber-600 font-bold">⭐ ${h.reviewAverage}</span>` : ''}
          ${h.hotelMinCharge > 0 ? `<span>参考: ¥${h.hotelMinCharge.toLocaleString()}〜</span>` : ''}
        </div>
      </div>
    </div>
    <div class="text-right pt-1">
      <a href="${h.affiliateUrl}" target="_blank" rel="noopener noreferrer" class="text-xs font-bold text-amber-700 hover:underline">
        詳細・プランを見る ≫
      </a>
    </div>
  </div>\n`;
    }

    reviewHtml += `</div>\n\n`;

    if (theme.internalLinks && theme.internalLinks.length > 0) {
      reviewHtml += `<div class="my-6 p-4 bg-amber-50/50 rounded-xl border border-amber-200">
  <h4 class="font-bold text-xs text-amber-950 mb-2">📌 あわせて読みたい関連旅行ガイド</h4>
  <ul class="text-xs text-amber-900 space-y-1.5 list-disc list-inside">
    ${theme.internalLinks.map(l => `<li><a href="${l.href}" class="underline hover:text-amber-700">${l.text}</a></li>`).join('\n    ')}
  </ul>
</div>\n\n`;
    }

    reviewHtml += `<div class="pt-4 text-center">
  <a href="${mainHotel.affiliateUrl}" target="_blank" rel="noopener noreferrer" class="inline-block w-full md:w-auto px-8 py-3.5 bg-gradient-to-r from-amber-500 via-amber-600 to-orange-500 text-white font-black text-xs rounded-2xl shadow-md hover:scale-105 transition transform">
    🛎️ 【公式楽天トラベル】${mainHotel.hotelName}の限定クーポン＆空室を見る
  </a>
</div>`;

    const postJson = {
      id: theme.slug,
      slug: theme.slug,
      title: theme.title,
      description: theme.description,
      prefecture: theme.prefecture,
      area: theme.area,
      hotel_name: mainHotel.hotelName,
      image: mainHotel.hotelImageUrl,
      other_images: otherHotels.map(h => h.hotelImageUrl).filter(Boolean),
      affiliate_url: mainHotel.affiliateUrl,
      price: mainHotel.hotelMinCharge || 12000,
      rating: mainHotel.reviewAverage || 4.85,
      date: "2026-09-03",
      categories: theme.categories,
      keywords: theme.keywords,
      is_special_feature: true,
      review: reviewHtml
    };

    fs.writeFileSync(outPath, JSON.stringify(postJson, null, 2), 'utf8');
    console.log(`✓ Successfully generated: ${theme.slug}`);
    created++;
  }

  console.log(`\nWave 6 expansion completed! Created ${created} new posts.`);
}

run().catch(console.error);
