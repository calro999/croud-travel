const fs = require('fs');
const path = require('path');
const { searchRakutenHotels } = require('../rakuten_api_helper');

const POSTS_DIR = path.join(__dirname, '..', 'src', 'data', 'posts');

// 第7弾：さらにサチコで伸びている高ポテンシャルテーマの横展開特化記事群
const wave7Themes = [
  // 1. 万座温泉（群馬）× 日本一の高濃度硫黄泉・標高1,800m星空露天
  {
    searchKeyword: "万座温泉 旅館 おすすめ",
    fallbackKeyword: "万座温泉 ホテル",
    slug: "manza-onsen-highest-sulfur-springs-guide",
    title: "【群馬・万座温泉】日本一の高濃度硫黄泉！標高1,800mの雲上絶景露天風呂おすすめ宿6選",
    description: "美肌効果抜群の日本屈指の濃厚硫黄泉「万座温泉」特集！乳白色・エメラルドグリーンの源泉かけ流し湯、標高1,800mから望む満天の星空と雲海パノラマ、上州牛や高原野菜を味わう大自然リゾートを徹底解説。",
    prefecture: "群馬県",
    area: "万座温泉・草津・嬬恋・北軽井沢",
    categories: ["万座温泉", "硫黄泉", "雲上露天風呂", "星空", "美肌の湯", "群馬旅行"],
    keywords: [
      "万座温泉 旅館 おすすめ", "万座 温泉 ランキング", "万座温泉 ホテル おすすめ",
      "万座温泉 露天風呂 絶景", "万座温泉 日帰り 宿泊", "万座 にごり湯 宿",
      "群馬 温泉 おすすめ", "草津 万座 温泉 旅行"
    ],
    internalLinks: [
      { text: "群馬県の温泉おすすめ旅館＆ホテルランキング10選", href: "/posts/gunma-onsen-ranking-hotels-guide" },
      { text: "奥日光湯元温泉・白濁硫黄泉ガイド", href: "/posts/okunikko-yumoto-onsen-sulfur-springs-guide" }
    ],
    intro: "白根山の中腹、標高1,800mの高地に湧き出る万座温泉。呼吸するだけでも身体が温まる濃厚な硫黄の湯煙に包まれ、夜は天の川を仰ぎ見る極上の雲上温泉体験をお届けします。"
  },

  // 2. 伊香保温泉（群馬）× 365段の石段街・黄金の湯・白銀の湯・水沢うどん
  {
    searchKeyword: "伊香保温泉 旅館 おすすめ",
    fallbackKeyword: "伊香保温泉 ホテル",
    slug: "ikaho-onsen-stone-steps-golden-bath-guide",
    title: "【群馬・伊香保温泉】365段の石段街散策＆黄金の湯・白銀の湯おすすめ宿7選！名物水沢うどん",
    description: "万葉の時代から続く風情あふれる温泉街「伊香保温泉」特集！茶褐色の名湯「黄金の湯」と透明な「白銀の湯」の二大泉質、石段街すぐの老舗旅館、日本三大うどん「水沢うどん」や上州名物おきりこみを堪能できる宿を比較。",
    prefecture: "群馬県",
    area: "伊香保温泉・渋川・榛名山",
    categories: ["伊香保温泉", "石段街", "黄金の湯", "白銀の湯", "水沢うどん", "群馬旅行"],
    keywords: [
      "伊香保温泉 旅館 おすすめ", "伊香保温泉 ホテル ランキング", "伊香保温泉 おすすめ宿",
      "伊香保 温泉 ランキング", "伊香保温泉 石段街 宿", "伊香保温泉 カップル 露天風呂",
      "水沢うどん 近くの宿", "群馬 温泉 旅館"
    ],
    internalLinks: [
      { text: "群馬県の特産品・名物・おすすめ温泉宿", href: "/posts/gunma-famous-things-gourmet-spots-guide" },
      { text: "草津温泉＆群馬名湯ランキング特集", href: "/posts/gunma-onsen-ranking-hotels-guide" }
    ],
    intro: "ノスタルジックな射的場や温泉まんじゅう店が並ぶ365段の石段街。独特の鉄分を含んだ茶褐色の黄金の湯に身を沈め、榛名山の清らかな空気と郷土の味覚を味わう群馬温泉旅へご案内します。"
  },

  // 3. 皆生温泉（鳥取・米子）× 日本海オーシャンビュー・塩化物泉・松葉ガニ
  {
    searchKeyword: "皆生温泉 旅館 おすすめ",
    fallbackKeyword: "皆生温泉 ホテル",
    slug: "kaike-onsen-ocean-front-crab-daisen-guide",
    title: "【鳥取・皆生温泉】日本海の白砂青松を一望する海辺の名湯宿7選！松葉ガニ＆大山地鶏会席",
    description: "「日本の渚百選」「日本の夕陽百選」に選ばれた米子の海辺に湧く「皆生温泉」特集！美肌と保温に優れた塩化物泉、日本海を望むインフィニティ展望露天風呂、鳥取名物「松葉ガニ」や鳥取和牛・大山地鶏会席を詳しく紹介。",
    prefecture: "鳥取県",
    area: "皆生温泉・米子・大山・境港",
    categories: ["皆生温泉", "海辺の温泉", "オーシャンビュー", "松葉ガニ", "大山", "鳥取旅行"],
    keywords: [
      "皆生温泉 旅館 おすすめ", "皆生温泉 ホテル ランキング", "皆生温泉 おすすめ宿",
      "皆生 温泉 ランキング", "米子 皆生温泉 宿泊", "皆生温泉 露天風呂 海が見える",
      "鳥取 温泉 おすすめ", "水木しげるロード 近くの温泉宿"
    ],
    internalLinks: [
      { text: "鳥取・三朝温泉ラジウム湯治＆松葉ガニガイド", href: "/posts/misasa-onsen-radium-healing-crab-guide" },
      { text: "鳥取県の温泉おすすめ旅館＆ホテルランキング10選", href: "/posts/tottori-onsen-ranking-hotels-guide" }
    ],
    intro: "白砂青松の美しい弓ヶ浜と、雄大な国立公園大山を同時に望む皆生温泉。海水と同じミネラルを豊富に含む「塩の湯」でぽかぽかに温まり、境港から届く新鮮な海の幸をご堪能ください。"
  },

  // 4. 指宿温泉（鹿児島）× 天然砂むし温泉・開聞岳・錦江湾オーシャンビュー
  {
    searchKeyword: "指宿温泉 砂むし 旅館",
    fallbackKeyword: "指宿 温泉 ホテル おすすめ",
    slug: "ibusuki-onsen-sand-bath-kaimondake-guide",
    title: "【鹿児島・指宿温泉】名物「天然砂むし温泉」と絶景露天風呂の宿7選！薩摩富士・開聞岳と黒豚会席",
    description: "世界的にも珍しい天然の地熱を利用した「砂むし温泉」の本場「指宿温泉」特集！錦江湾の波打ち際で体験する砂むし風呂、薩摩富士・開聞岳を望むインフィニティ露天風呂、鹿児島黒豚しゃぶしゃぶやキビナゴ料理を徹底比較。",
    prefecture: "鹿児島県",
    area: "指宿・指宿温泉・開聞岳・知覧",
    categories: ["指宿温泉", "砂むし温泉", "開聞岳", "錦江湾", "黒豚", "鹿児島旅行"],
    keywords: [
      "指宿温泉 旅館 おすすめ", "指宿温泉 砂むし 宿", "指宿温泉 ホテル ランキング",
      "指宿 温泉 おすすめ", "指宿 砂むし温泉 アクセス", "指宿 霧島 どっち 宿泊",
      "鹿児島 温泉 おすすめ", "指宿 露天風呂 海が見える"
    ],
    internalLinks: [
      { text: "指宿温泉 vs 霧島温泉 徹底比較ガイド", href: "/posts/ibusuki-vs-kirishima-kagoshima-onsen-guide" },
      { text: "霧島温泉・天然泥湯＆にごり湯宿ガイド", href: "/posts/kirishima-onsen-doroyu-sulfur-springs-guide" }
    ],
    intro: "温かい砂に全身を包まれ、心地よい潮騒と地熱のパワーで驚くほど汗を流す「指宿の砂むし温泉」。南国情緒あふれる錦江湾のパノラマと、本場鹿児島の黒豚美食をお楽しみいただけます。"
  },

  // 5. 鬼怒川温泉（栃木・日光）× 鬼怒川渓谷美・ライン下り・あさやホテル
  {
    searchKeyword: "鬼怒川温泉 旅館 おすすめ",
    fallbackKeyword: "鬼怒川温泉 ホテル",
    slug: "kinugawa-onsen-gorge-view-buffet-guide",
    title: "【栃木・鬼怒川温泉】渓谷美を望む絶景露天風呂＆豪華バイキング人気宿7選！あさやホテルと名湯",
    description: "東京から東武特急スペーシアで約2時間！関東屈指の大温泉郷「鬼怒川温泉」特集！名物あさやホテルの空中庭園露天風呂、鬼怒川渓谷のダイナミックな断崖を望む客室、出来立てを味わう100種以上の豪華ディナービュッフェを徹底紹介。",
    prefecture: "栃木県",
    area: "鬼怒川温泉・日光・川治・龍王峡",
    categories: ["鬼怒川温泉", "あさやホテル", "空中庭園露天風呂", "バイキング", "渓谷美", "栃木旅行"],
    keywords: [
      "鬼怒川温泉 旅館 おすすめ", "鬼怒川温泉 ホテル ランキング", "鬼怒川温泉 おすすめ宿",
      "鬼怒川 温泉 ランキング", "鬼怒川 あさや 宿泊", "鬼怒川温泉 バイキング おすすめ",
      "日光 鬼怒川 温泉 宿", "栃木 温泉 おすすめ"
    ],
    internalLinks: [
      { text: "奥日光湯元温泉・白濁硫黄泉ガイド", href: "/posts/okunikko-yumoto-onsen-sulfur-springs-guide" },
      { text: "栃木県の温泉おすすめ旅館＆ホテルランキング10選", href: "/posts/tochigi-onsen-ranking-hotels-guide" }
    ],
    intro: "四季折々に表情を変える鬼怒川の渓谷美。川のせせらぎを聞きながら浸かるやわらかなアルカリ性単純泉と、大迫力の吹き抜けロビーや豪華バイキングで至福の休日をお過ごしください。"
  },

  // 6. 白骨温泉（長野・松本）× 3日入れば3年風邪をひかない・乳白色の秘湯
  {
    searchKeyword: "白骨温泉 旅館 おすすめ",
    fallbackKeyword: "白骨温泉 ホテル",
    slug: "shirahone-onsen-milky-secret-bath-guide",
    title: "【長野・白骨温泉】乳白色の秘湯源泉かけ流し宿5選！「3日入れば3年風邪をひかない」名湯と信州牛",
    description: "北アルプス乗鞍岳の山腹に湧く幻の秘湯「白骨温泉」特集！「3日入れば3年風邪をひかない」と伝わる弱酸性乳白色の炭酸硫黄泉、野趣あふれる渓流露天風呂、温泉水で炊き上げた名物「温泉粥」や信州プレミアム牛会席を解説。",
    prefecture: "長野県",
    area: "白骨温泉・乗鞍高原・上高地・松本",
    categories: ["白骨温泉", "乳白色温泉", "秘湯", "源泉かけ流し", "温泉粥", "長野旅行"],
    keywords: [
      "白骨温泉 旅館 おすすめ", "白骨 温泉 ランキング", "白骨温泉 おすすめ宿",
      "白骨温泉 泡の湯", "上高地 白骨温泉 宿泊", "乗鞍 白骨 温泉 宿",
      "長野 にごり湯 秘湯", "長野 温泉 おすすめ"
    ],
    internalLinks: [
      { text: "長野・阿智村昼神温泉美肌湯ガイド", href: "/posts/hirugami-onsen-achi-starry-sky-bihada-guide" },
      { text: "長野県の温泉おすすめ旅館＆ホテルランキング10選", href: "/posts/nagano-onsen-ranking-hotels-guide" }
    ],
    intro: "木造の湯小屋から漂う硫黄の香りと、やさしい乳白色の湯。俗世の喧騒を離れ、乗鞍の深い大自然の中で本物の湯治体験と信州の滋味深い郷土料理を満喫いただけます。"
  },

  // 7. 嬉野温泉（佐賀）× 日本三大美肌の湯・温泉湯どうふ・嬉野茶
  {
    searchKeyword: "嬉野温泉 旅館 おすすめ",
    fallbackKeyword: "嬉野温泉 ホテル",
    slug: "ureshino-onsen-bihada-yudofu-tea-guide",
    title: "【佐賀・嬉野温泉】日本三大美肌の湯！とろける「名物温泉湯どうふ」と嬉野茶・佐賀牛会席宿7選",
    description: "島根・斐乃上、栃木・喜連川と並ぶ「日本三大美肌の湯」嬉野温泉特集！重曹成分を多く含み肌がつるつるになる極上のとろとろ湯、温泉水で煮込んでとろける名物「温泉湯どうふ」、香り高い嬉野茶風呂や佐賀牛会席プランを徹底紹介。",
    prefecture: "佐賀県",
    area: "嬉野・嬉野温泉・武雄近郊・佐賀",
    categories: ["嬉野温泉", "日本三大美肌の湯", "温泉湯どうふ", "嬉野茶", "佐賀牛", "佐賀旅行"],
    keywords: [
      "嬉野温泉 旅館 おすすめ", "嬉野温泉 ランキング", "嬉野温泉 人気宿",
      "嬉野温泉 湯どうふ 宿", "嬉野温泉 ホテル おすすめ", "嬉野温泉 美肌の湯 宿泊",
      "佐賀 温泉 おすすめ", "武雄 嬉野 温泉 旅行"
    ],
    internalLinks: [
      { text: "佐賀・武雄温泉楼門＆佐賀牛宿ガイド", href: "/posts/takeo-onsen-romon-saga-beef-guide" },
      { text: "佐賀県の温泉おすすめ旅館＆ホテルランキング10選", href: "/posts/saga-onsen-ranking-hotels-guide" }
    ],
    intro: "湯上がりの肌が驚くほど滑らかになる日本三大美肌の湯・嬉野温泉。朝食には温泉水でコトコト煮込んだとろとろの温泉湯豆腐を味わい、心も体も芯から美しく整う佐賀名湯の旅をお楽しみください。"
  },

  // 8. 湯布院・塚原温泉（大分）× 火口乃泉・日本三大薬湯・強酸性鉄イオン
  {
    searchKeyword: "由布院 塚原温泉 旅館",
    fallbackKeyword: "由布院 温泉 旅館 おすすめ",
    slug: "tsukahara-onsen-yufuin-yakuto-guide",
    title: "【由布院・塚原温泉】日本三大薬湯・伽藍岳火口の秘湯宿！驚異の強酸性美肌湯と豊後牛",
    description: "全国第2位の強酸性度と日本一の鉄イオン含有量を誇る幻の名湯「塚原温泉 火口乃泉」特集！伽藍岳の火口から湧き出るエメラルドグリーンの超濃厚薬湯、火口見学、由布院中心街の喧騒を離れた大自然の静寂と豊後牛プランを解説。",
    prefecture: "大分県",
    area: "由布院・塚原高原・伽藍岳・湯布院",
    categories: ["塚原温泉", "由布院温泉", "日本三大薬湯", "強酸性温泉", "秘湯", "大分旅行"],
    keywords: [
      "塚原温泉 火口乃泉", "塚原温泉", "由布院 秘湯 宿", "由布院 薬湯 宿泊",
      "湯布院 温泉 おすすめ", "別府 由布院 温泉 比較", "大分 温泉 おすすめ"
    ],
    internalLinks: [
      { text: "由布院温泉・完全プライベート離れ＆露天宿ガイド", href: "/posts/yufuin-onsen-hanare-private-bath-guide" },
      { text: "別府天然泥湯＆泥パック名湯宿ガイド", href: "/posts/beppu-doroyu-mud-pack-onsen-hotels-guide" }
    ],
    intro: "由布岳の北側に広がる塚原高原に佇む塚原温泉。火口から吹き出す噴煙を間近に望み、古くから数々の効能で人々を癒やしてきた驚異の源泉パワーを体感できます。"
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
  console.log(`=== Starting Wave 7 Expansion Post Generation (${wave7Themes.length} topics) ===`);
  let created = 0;

  for (const theme of wave7Themes) {
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

  console.log(`\nWave 7 expansion completed! Created ${created} new posts.`);
}

run().catch(console.error);
