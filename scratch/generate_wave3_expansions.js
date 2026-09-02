const fs = require('fs');
const path = require('path');
const { searchRakutenHotels } = require('../rakuten_api_helper');

const POSTS_DIR = path.join(__dirname, '..', 'src', 'data', 'posts');

// 第3弾：さらに掲載順位・表示回数・クリック実績が高い主要テーマの深掘り横展開
const wave3Themes = [
  // 1. 秋保温泉（宮城・仙台奥座敷）× プール・バイキング・名旅館
  {
    searchKeyword: "秋保温泉 旅館 おすすめ",
    fallbackKeyword: "秋保温泉 ホテル",
    slug: "akyu-onsen-sendai-family-buffet-hotels-guide",
    title: "【秋保温泉】仙台奥座敷のおすすめ温泉旅館7選！豪華バイキング＆室内プール付きリゾート",
    description: "仙台駅からアクセス抜群の開湯1500年の名湯「秋保温泉」特集！名取川の渓谷美磊々峡を望む露天風呂、子供連れファミリーに大人気のオールシーズン温水プール付き宿、極上仙台牛や三陸の海の幸バイキングを徹底紹介。",
    prefecture: "宮城県",
    area: "仙台・秋保温泉・作並",
    categories: ["秋保温泉", "仙台奥座敷", "家族旅行", "プール付きホテル", "バイキング", "宮城旅行"],
    keywords: [
      "秋保温泉 旅館 おすすめ", "秋保温泉 ホテル ランキング", "秋保温泉 プール付きホテル",
      "秋保温泉 ランキング", "秋保温泉 人気宿", "秋保温泉 バイキング おすすめ",
      "仙台 温泉 おすすめ", "秋保温泉 子連れ 家族旅行"
    ],
    internalLinks: [
      { text: "東北名湯めぐり（蔵王・銀山・秋保・松島・鳴子）ガイド", href: "/posts/zao-ginzan-akyu-matsushima-naruko-tohoku-onsen-guide" },
      { text: "松島温泉オーシャンビュー＆牡蠣グルメ宿", href: "/posts/matsushima-onsen-ocean-view-oyster-guide" }
    ],
    intro: "仙台市街地から車で約30分とアクセス良好な「秋保温泉」。歴史ある名湯とともに、充実した温泉プールや出来立てを味わうライブキッチンビュッフェなど、三世代家族やカップルで寛げる名宿を厳選しました。"
  },

  // 2. 鳴子温泉（宮城）× 湯めぐり・多彩な泉質・湯治の情緒
  {
    searchKeyword: "鳴子温泉 旅館 ランキング",
    fallbackKeyword: "鳴子温泉 ホテル",
    slug: "naruko-onsen-kyuto-yumeguri-retro-ryokan-guide",
    title: "【鳴子温泉郷】日本屈指の多彩な泉質を巡る名湯宿7選！鳴子峡の紅葉と伝統こけしの街",
    description: "日本にある11種類の泉質のうち9種類が集まる東日本屈指の温泉天国「鳴子温泉郷」特集！乳白色の硫黄泉やエメラルドグリーンの湯、鳴子峡の絶景紅葉、昔ながらの湯治場情緒と栗だんご等の名物グルメを詳しく解説。",
    prefecture: "宮城県",
    area: "鳴子温泉・鳴子峡・大崎",
    categories: ["鳴子温泉", "湯めぐり", "鳴子峡", "紅葉", "硫黄泉", "宮城温泉"],
    keywords: [
      "鳴子温泉 ランキング", "鳴子 ホテル おすすめ", "鳴子温泉 旅館 ランキング",
      "鳴子温泉 湯めぐり 宿", "鳴子峡 紅葉 宿泊", "鳴子温泉 にごり湯 露天風呂",
      "鳴子温泉 湯治 旅館", "宮城 おすすめ 温泉"
    ],
    internalLinks: [
      { text: "東北の名湯（蔵王・秋保・鳴子・松島）ランキング", href: "/posts/zao-ginzan-akyu-matsushima-naruko-tohoku-onsen-guide" },
      { text: "宮城県の特産品・地酒・名門宿ガイド", href: "/posts/miyagi-famous-things-gourmet-spots-guide" }
    ],
    intro: "温泉街を歩くだけで漂う心地よい硫黄の香り。下駄の音を響かせながら多彩な源泉を湯巡りし、鳴子峡のダイナミックな渓谷美に癒やされる本格的な温泉リトリートをご案内します。"
  },

  // 3. 高知・三翠園 × 坂本龍馬・高知城下・土佐藁焼きカツオ
  {
    searchKeyword: "高知 三翠園 温泉",
    fallbackKeyword: "高知市 温泉 ホテル",
    slug: "kochi-sansuien-castle-history-tataki-guide",
    title: "【高知】天然温泉 三翠園宿泊ガイド！高知城下・旧藩主山内家ゆかりの名門宿と皿鉢料理",
    description: "高知城・ひろめ市場徒歩圏内！土佐藩主山内家の下屋敷跡に佇む名門老舗「高知城下の天然温泉 三翠園」特集。高知市内初の天然温泉大浴場、名物カツオの藁焼きタタキや土佐の豪快な皿鉢料理プランを徹底解説。",
    prefecture: "高知県",
    area: "高知市・高知城・桂浜",
    categories: ["三翠園", "高知温泉", "高知城", "坂本龍馬", "カツオのタタキ", "高知旅行"],
    keywords: [
      "高知 三翠園", "高知城下の天然温泉 三翠園", "高知城下の天然温泉三翠園",
      "三翠園 高知 温泉", "高知 ホテル 温泉", "ひろめ市場 近くの温泉ホテル",
      "高知 カツオ 藁焼き 旅館", "高知県 有名なもの 観光"
    ],
    internalLinks: [
      { text: "高知・三翠園＆リバーサイドホテル宿泊ガイド", href: "/posts/kochi-sansuien-riverside-hotel-guide" },
      { text: "高知県の名物グルメ＆四国温泉宿特集", href: "/posts/kochi-famous-things-gourmet-spots-guide" }
    ],
    intro: "坂本龍馬をはじめ幕末の志士たちが駆け抜けた土佐の歴史を感じる城下町。三翠園の日本庭園を眺めながら天然温泉に癒やされ、本場高知の香ばしい鰹のタタキを地酒とともに味わう贅沢な旅をお届けします。"
  },

  // 4. 定山渓温泉（北海道・札幌奥座敷）× 渓谷美露天・サウナ・道産ビュッフェ
  {
    searchKeyword: "定山渓温泉 旅館 おすすめ",
    fallbackKeyword: "定山渓温泉 ホテル",
    slug: "jozankei-onsen-sapporo-gorge-sauna-guide",
    title: "【定山渓温泉】札幌から1時間！渓谷美露天風呂＆本格サウナが自慢の人気宿7選",
    description: "札幌の奥座敷「定山渓温泉」のおすすめ旅館・リゾートホテル特集！豊平川の渓谷美を望む絶景露天風呂、近年話題のととのいサウナ完備宿、北海道産いくら・ふらの和牛を堪能できる美食プランを詳しく紹介。",
    prefecture: "北海道",
    area: "札幌・定山渓温泉・小樽近郊",
    categories: ["定山渓温泉", "札幌奥座敷", "サウナ", "渓谷露天風呂", "北海道旅行"],
    keywords: [
      "定山渓温泉 旅館 おすすめ", "定山渓温泉 おすすめ", "定山渓 おすすめ 温泉",
      "定山渓温泉おすすめ", "定山渓温泉 旅行", "札幌 定山渓 温泉 ホテル",
      "定山渓 サウナ 温泉宿", "北海道 温泉 ランキング"
    ],
    internalLinks: [
      { text: "北海道スパ・リゾート＆温泉宿ランキング", href: "/posts/hokkaido-onsen-ranking-hotels-guide" },
      { text: "小樽ふる川＆運河の宿宿泊レポート", href: "/posts/otaru-furukawa-canal-guide" }
    ],
    intro: "新千歳空港や札幌中心街から直行バスでスムーズにアクセスできる定山渓。豊かな自然に囲まれた渓谷露天風呂でリフレッシュし、夜は北海道の山海の幸バイキングを心ゆくまで堪能できます。"
  },

  // 5. 支笏湖温泉（北海道）× 日本一の水質・美肌とろとろ湯・レイクビュー
  {
    searchKeyword: "支笏湖 温泉 ホテル",
    fallbackKeyword: "支笏湖温泉 旅館",
    slug: "shikotsuko-onsen-lake-view-bihada-guide",
    title: "【支笏湖温泉】日本屈指の透明度を誇る湖畔リゾート！美肌とろとろ湯とレイクビュー宿5選",
    description: "環境省水質調査で日本一に何度も輝く「支笏湖」の温泉宿特集！湖と山々を一望する展望露天風呂、とろりとした極上の美肌泉質、名物ヒメマス（チップ）料理、カヌーやSUPアクティビティを楽しむ大人の極上ステイ。",
    prefecture: "北海道",
    area: "支笏湖・千歳・苫小牧",
    categories: ["支笏湖温泉", "支笏湖", "美肌温泉", "レイクビュー", "北海道リゾート"],
    keywords: [
      "支笏湖温泉 ランキング", "支笏湖 温泉 ランキング", "支笏湖温泉", "支笏湖 温泉",
      "支笏湖 ホテル ランキング", "支笏湖 美肌の湯 宿泊", "千歳 支笏湖 温泉宿",
      "北海道 絶景 ホテル 温泉"
    ],
    internalLinks: [
      { text: "北海道の厳選温泉＆リゾートホテル特集", href: "/posts/hokkaido-hotels-selection-guide" },
      { text: "キロロ＆ユキロロのラグジュアリーステイ", href: "/posts/yu-kiroro-hokkaido-luxury-stay-guide" }
    ],
    intro: "「支笏湖ブルー」と称される神秘的な青い湖。まるで化粧水に浸かっているかのようなとろみのある美肌湯に身を委ね、静寂な湖畔で過ごす極上のリトリート空間へご案内します。"
  },

  // 6. 三朝温泉（鳥取）× 世界屈指のラジウム温泉・名湯治・松葉ガニ
  {
    searchKeyword: "三朝温泉 旅館 おすすめ",
    fallbackKeyword: "三朝温泉 ホテル",
    slug: "misasa-onsen-radium-healing-crab-guide",
    title: "【三朝温泉】世界有数の高濃度ラジウム泉！免疫力高まる湯治の宿＆冬の松葉ガニ会席7選",
    description: "三たび朝を迎えると元気になる「三朝温泉」特集！高濃度ラドンを含む吸う・飲む・浸かる世界屈指のホルミシス温泉、三徳山三仏寺投入堂参拝の拠点、冬の日本海名物松葉ガニ・鳥取和牛プランを徹底紹介。",
    prefecture: "鳥取県",
    area: "三朝温泉・倉吉・三徳山・鳥取中部",
    categories: ["三朝温泉", "ラジウム温泉", "湯治", "松葉ガニ", "鳥取和牛", "鳥取旅行"],
    keywords: [
      "三朝温泉 ランキング", "三朝温泉 人気宿", "三朝温泉 おすすめ宿",
      "三朝温泉 旅館 ランキング", "三朝温泉 おすすめ", "三朝温泉おすすめ",
      "鳥取 温泉 ランキング", "鳥取 旅館 おすすめ"
    ],
    internalLinks: [
      { text: "宇奈月・黒部・三朝温泉（中部・中国名湯）ガイド", href: "/posts/unazuki-kurobe-misasa-onsen-chubu-chugoku-guide" },
      { text: "鳥取県の名物グルメ＆温泉宿ランキング", href: "/posts/tottori-famous-things-gourmet-spots-guide" }
    ],
    intro: "身体の自己免疫力を高めるラドンを豊富に含み、古くから名湯治場として愛されてきた三朝温泉。石畳のレトロな温泉街を散策しながら、日本海の極上カニ料理と良質な湯を味わえます。"
  },

  // 7. 黒川温泉（熊本）× 入湯手形・小国杉露天風呂・あか牛美食
  {
    searchKeyword: "黒川温泉 露天風呂 旅館",
    fallbackKeyword: "黒川温泉 旅館 おすすめ",
    slug: "kurokawa-onsen-nyuto-tegata-akagyu-guide",
    title: "【黒川温泉】入湯手形で巡る露天風呂＆あか牛料理が旨い人気宿7選！阿蘇の秘湯ガイド",
    description: "ミシュラン2ツ星の温泉郷「黒川温泉」特集！名物入湯手形で巡る個性豊かな露天風呂、阿蘇のブランド牛「あか牛」のステーキ・溶岩焼き、渓流沿いの竹林露天風呂や全室離れの隠れ宿を徹底解説。",
    prefecture: "熊本県",
    area: "黒川温泉・阿蘇・小国・南小国",
    categories: ["黒川温泉", "入湯手形", "露天風呂巡り", "あか牛", "阿蘇", "熊本旅行"],
    keywords: [
      "黒川温泉 ランキング", "黒川温泉 旅館 おすすめ", "黒川温泉 人気宿",
      "黒川温泉 おすすめ宿", "黒川温泉 ホテル おすすめ", "黒川温泉 入湯手形 おすすめ",
      "黒川温泉 ふじ屋", "熊本 温泉 おすすめ"
    ],
    internalLinks: [
      { text: "全国洞窟温泉ガイド（黒川温泉・新明館の洞窟風呂掲載）", href: "/posts/cave-onsen-dokutsu-furo-japan-ranking-guide" },
      { text: "熊本県・阿蘇＆黒川の特産品・名湯宿ガイド", href: "/posts/kumamoto-famous-things-gourmet-spots-guide" }
    ],
    intro: "温泉街全体がひとつの旅館のように調和した風情あふれる黒川温泉。小国杉の香りとせせらぎに包まれる露天風呂を巡り、阿蘇の大自然が育んだヘルシーなあか牛グルメを堪能できます。"
  },

  // 8. 由布院温泉（大分）× 離れ客室露天・金鱗湖・豊後牛
  {
    searchKeyword: "由布院 温泉 離れ 露天風呂",
    fallbackKeyword: "由布院温泉 旅館",
    slug: "yufuin-onsen-hanare-private-bath-guide",
    title: "【由布院温泉】完全プライベート離れ＆客室露天風呂の極上宿6選！金鱗湖散策と豊後牛会席",
    description: "由布岳の麓に広がる憧れの温泉リゾート「由布院温泉」特集！全室離れ・客室専用露天風呂付きのラグジュアリー旅館、朝霧が幻想的な金鱗湖や湯の坪街道の食べ歩き、大分豊後牛・地鶏鍋を味わう大人の上質旅。",
    prefecture: "大分県",
    area: "由布院・湯布院・湯平・金鱗湖",
    categories: ["由布院温泉", "離れ客室", "客室露天風呂", "金鱗湖", "豊後牛", "大分旅行"],
    keywords: [
      "ゆふいん月燈庵", "ゆふいん 月燈庵", "ゆふいん花由", "etavia 湯布院駅前",
      "湯布院 温泉 おすすめ", "由布院 離れ 露天風呂 宿", "由布院 カップル 温泉旅館",
      "大分 おすすめ 温泉"
    ],
    internalLinks: [
      { text: "別府泥湯＆泥パック温泉宿ガイド", href: "/posts/beppu-doroyu-mud-pack-onsen-hotels-guide" },
      { text: "大分県の人気温泉宿＆ご当地グルメランキング", href: "/posts/oita-onsen-ranking-hotels-guide" }
    ],
    intro: "由布岳の雄姿を望み、四季折々の豊かな自然に抱かれた由布院温泉。誰にも邪魔されない離れの客室露天風呂で贅沢なプライベート時間を過ごし、洗練されたおもてなしとお料理を満喫いただけます。"
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
  console.log(`=== Starting Wave 3 Expansion Post Generation (${wave3Themes.length} topics) ===`);
  let created = 0;

  for (const theme of wave3Themes) {
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

  console.log(`\nWave 3 expansion completed! Created ${created} new posts.`);
}

run().catch(console.error);
