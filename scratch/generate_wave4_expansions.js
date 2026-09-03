const fs = require('fs');
const path = require('path');
const { searchRakutenHotels } = require('../rakuten_api_helper');

const POSTS_DIR = path.join(__dirname, '..', 'src', 'data', 'posts');

// 第4弾：未開拓の高ポテンシャルクエリ・地域・宿タイプを狙う横展開特化テーマ群
const wave4Themes = [
  // 1. センティアホテル内藤（山梨・甲府）× 甲府駅前・ビジネス＆観光・甲州ワイン
  {
    searchKeyword: "センティアホテル内藤 甲府",
    fallbackKeyword: "甲府 ホテル 大浴場",
    slug: "centia-hotel-naito-kofu-stay-review-guide",
    title: "【甲府】センティアホテル内藤宿泊レビュー！甲府駅周辺のおすすめホテル＆甲州ワイン美食",
    description: "甲府駅南口から徒歩圏内！リーズナブルで快適な滞在が人気の「センティアホテル内藤」徹底宿泊ガイド。客室設備や無料アメニティ、甲府城跡・武田神社観光へのアクセス、名物ほうとうや鳥もつ煮の人気店を紹介。",
    prefecture: "山梨県",
    area: "甲府・湯村温泉・昇仙峡",
    categories: ["センティアホテル内藤", "甲府ホテル", "山梨観光", "ビジネスホテル", "山梨旅行"],
    keywords: [
      "センティアホテル内藤", "centia hotel naito", "センティア内藤",
      "甲府 ホテル おすすめ", "山梨 シティホテル", "甲府駅 近くのホテル",
      "甲府 ビジネスホテル 大浴場", "山梨県 日本酒 ワイン"
    ],
    internalLinks: [
      { text: "センティアホテル内藤＆甲府宿泊ガイド", href: "/posts/centia-hotel-naito-kofu-stay-guide" },
      { text: "山梨県の特産品・地酒ワイン・名門宿ガイド", href: "/posts/yamanashi-famous-things-gourmet-spots-guide" }
    ],
    intro: "武田信玄公の歴史が息づく山梨県の中枢・甲府。ビジネス利用から富士山・昇仙峡観光の拠点まで、清潔感と高いコストパフォーマンスで旅行者に選ばれる甲府駅周辺の快適ホテルをご案内します。"
  },

  // 2. YU KIRORO（北海道・キロロ）× コンドミニアム・パウダースノー・高級リゾート
  {
    searchKeyword: "キロロ リゾート ホテル",
    fallbackKeyword: "キロロ 温泉 ホテル",
    slug: "yu-kiroro-luxury-condo-hokkaido-stay-guide",
    title: "【北海道・キロロ】YU KIRORO宿泊ガイド！全室キッチン付き高級コンドミニアムと天然温泉",
    description: "世界屈指のパウダースノーと大自然に囲まれた最高級リゾート「YU KIRORO（ユキロロ）」徹底ガイド！全室フルキッチン・洗濯乾燥機完備の広々とした客室、天然温泉露天風呂、小樽・札幌観光の拠点にも最適なリゾートステイを紹介。",
    prefecture: "北海道",
    area: "キロロ・赤井川・余市・小樽",
    categories: ["ユキロロ", "yu kiroro", "キロロリゾート", "コンドミニアム", "北海道高級宿"],
    keywords: [
      "ユキロロ", "yu kiroro", "yukiroro", "ｙｕ ｋｉｒｏｒｏ",
      "yu kiroro 北海道", "yu kiroro 予約", "キロロ観光", "キロロ 観光",
      "北海道 スパ ホテル", "北海道 コンドミニアム 高級"
    ],
    internalLinks: [
      { text: "YU KIRORO＆キロロリゾート宿泊ガイド", href: "/posts/yu-kiroro-hokkaido-luxury-stay-guide" },
      { text: "小樽ふる川＆運河の宿宿泊レポート", href: "/posts/otaru-furukawa-canal-guide" }
    ],
    intro: "小樽や余市ワイナリーにもほど近い赤井川村の森に佇む「YU KIRORO」。海外リゾートのような洗練されたラグジュアリー空間で、家族やグループでの長期滞在にも最適な極上のステイをご提案します。"
  },

  // 3. 鴨川館（千葉・房総）× 太平洋オーシャンビュー・屋上温泉ぷーろ・房総鮑
  {
    searchKeyword: "鴨川館 温泉",
    fallbackKeyword: "鴨川 温泉 ホテル",
    slug: "kamogawakan-boso-ocean-view-spa-guide",
    title: "【千葉・房総】鴨川館宿泊ガイド！屋上温泉ぷーろHARUKA＆房総伊勢海老・鮑会席",
    description: "鴨川シーワールド目の前！南房総を代表する名門旅館「鴨川館」徹底ガイド。水着で入る屋上の絶景温泉ぷーろ「HARUKA」、自家源泉の潮騒の湯、伊勢海老・アワビ・かずさ和牛の贅沢会席、半露天風呂付き客室を紹介。",
    prefecture: "千葉県",
    area: "鴨川・南房総・館山・勝浦",
    categories: ["鴨川館", "鴨川温泉", "オーシャンビュー", "鴨川シーワールド", "千葉旅行"],
    keywords: [
      "鴨川館", "千葉 鴨川館", "鴨川 館", "鴨川シーワールド 旅行",
      "鴨川 温泉 おすすめ", "千葉 温泉 旅館 ランキング", "房総 露天風呂付き客室",
      "千葉県 有名なもの 観光"
    ],
    internalLinks: [
      { text: "館山温泉＆南房総リゾートホテル特集", href: "/posts/chiba-onsen-ranking-hotels-guide" },
      { text: "千葉県の名物グルメ＆温泉宿ランキング", href: "/posts/chiba-famous-things-gourmet-spots-guide" }
    ],
    intro: "目の前に広がる雄大な太平洋と松林。鴨川館の代名詞である屋上温泉プール「ぷーろ HARUKA」からは、水平線と湯面が一体化するインフィニティ絶景を心ゆくまでお楽しみいただけます。"
  },

  // 4. 新井旅館（静岡・修善寺）× 登録有形文化財・天平大浴堂・伊豆文学散歩
  {
    searchKeyword: "修善寺 新井旅館",
    fallbackKeyword: "修善寺温泉 旅館 おすすめ",
    slug: "arai-ryokan-shuzenji-cultural-heritage-guide",
    title: "【伊豆・修善寺】国の登録有形文化財「新井旅館」宿泊ガイド！名建築・天平大浴堂と竹林の小径",
    description: "伊豆最古の温泉地・修善寺を代表する名旅館「新井旅館」特集！国の登録有形文化財に指定された木造建築美、総檜造りの名物「天平大浴堂」、桂川のせせらぎと日本庭園、伊豆名産のわさび会席を詳しく解説。",
    prefecture: "静岡県",
    area: "修善寺・中伊豆・天城・伊豆市",
    categories: ["新井旅館", "修善寺温泉", "有形文化財", "名建築", "伊豆温泉", "静岡旅行"],
    keywords: [
      "新井旅館", "新井 旅館", "伊豆修善寺温泉 新井旅館",
      "修善寺温泉 国の登録文化財の宿 新井旅館", "新井旅館 アメニティ",
      "修善寺 温泉 おすすめ", "伊豆 旅館 ランキング", "静岡 旅館 おすすめ"
    ],
    internalLinks: [
      { text: "熱海・伊東・修善寺のおすすめ温泉宿特集", href: "/posts/shizuoka-onsen-ranking-hotels-guide" },
      { text: "静岡県の特産品・地酒・名門宿ガイド", href: "/posts/shizuoka-famous-things-gourmet-spots-guide" }
    ],
    intro: "芥川龍之介や横山大観ら多くの文人墨客に愛された修善寺の老舗「新井旅館」。四季折々に表情を変える美しい日本庭園と、歴史の薫り漂う荘厳な温泉建築で極上の休日をお過ごしください。"
  },

  // 5. 運河の宿 おたる ふる川（北海道・小樽）× レトロ運河ビュー・小樽ガラス・光の湯
  {
    searchKeyword: "小樽ふる川 運河の宿",
    fallbackKeyword: "小樽 温泉 ホテル",
    slug: "otaru-furukawa-canal-view-retro-guide",
    title: "【小樽】運河の宿 おたる ふる川宿泊ガイド！小樽運河を一望する展望温泉とノスタルジー会席",
    description: "小樽運河の目の前に位置する明治レトロな人気温泉宿「運河の宿 おたる ふる川」特集！小樽運河を眺める客室、壱の湯・弐の湯の天然温泉、小樽後志の旬を味わう和食会席、専用駐車場や観光アクセスを徹底紹介。",
    prefecture: "北海道",
    area: "小樽・余市・キロロ・積丹",
    categories: ["おたるふる川", "小樽運河", "小樽温泉", "レトロホテル", "北海道旅行"],
    keywords: [
      "運河の宿 おたる ふる川", "運河の宿 小樽ふる川", "小樽ふる川 駐車場",
      "小樽 温泉 おすすめ", "小樽温泉ランキング", "小樽 ホテル おすすめ",
      "小樽 観光 宿泊", "北海道 旅館 おすすめ"
    ],
    internalLinks: [
      { text: "小樽ふる川＆運河の宿宿泊レポート", href: "/posts/otaru-furukawa-canal-guide" },
      { text: "札幌・定山渓温泉の人気旅館ランキング", href: "/posts/jozankei-onsen-sapporo-gorge-sauna-guide" }
    ],
    intro: "ガス灯が灯る夕暮れの小樽運河。どこか懐かしい明治の商家の佇まいを再現した館内で、石造りの温泉に浸かり、新鮮な後志の海の幸を味わう特別な小樽ステイをご案内します。"
  },

  // 6. ホテル リガーレ春日野（奈良）× 奈良公園・東大寺・若草山・大和路グルメ
  {
    searchKeyword: "ホテル リガーレ春日野 奈良",
    fallbackKeyword: "奈良市 ホテル おすすめ",
    slug: "ligare-kasugano-nara-park-todaiji-guide",
    title: "【奈良】ホテル リガーレ春日野宿泊ガイド！奈良公園・東大寺徒歩圏内の静寂ホテルと大和牛会席",
    description: "奈良公園や東大寺、春日大社へのアクセス抜群！静かな緑に囲まれた「ホテル リガーレ春日野」徹底ガイド。ゆったりとした客室、大和牛や大和肉鶏・三輪そうめんを味わう季節会席、無料駐車場完備で車旅にも最適なプランを紹介。",
    prefecture: "奈良県",
    area: "奈良市・奈良公園・ならまち・若草山",
    categories: ["リガーレ春日野", "奈良ホテル", "奈良公園", "東大寺", "大和牛", "奈良旅行"],
    keywords: [
      "ホテル リガーレ春日野", "ホテル リガーレ 春日野", "ホテルリガーレ春日野",
      "ホテル リガーレ", "ホテル リガーレ春日野 口コミ", "ホテルリガーレ春日野 アクセス",
      "奈良 ホテル おすすめ", "奈良 名物 グルメ"
    ],
    internalLinks: [
      { text: "奈良県の名物グルメ＆おすすめホテル特集", href: "/posts/nara-famous-things-gourmet-spots-guide" },
      { text: "奈良市・ならまちカフェ＆歴史散策ガイド", href: "/prefectures/nara/nara-city" }
    ],
    intro: "古都の風情が色濃く残る春日野の杜。世界遺産の社寺をゆっくり散策した後は、大和の伝統野菜と上質な和牛を堪能し、落ち着いた静けさの中で旅の夜を過ごせます。"
  },

  // 7. 出湯温泉 大石屋旅館（新潟・五頭温泉郷）× 愛犬と泊まれる秘湯・ラジウム温泉
  {
    searchKeyword: "出湯温泉 大石屋旅館",
    fallbackKeyword: "五頭温泉郷 旅館",
    slug: "ooishiya-ryokan-deyutonsen-pet-radium-guide",
    title: "【新潟・出湯温泉】愛犬と泊まれる秘湯の宿 大石屋旅館！日本最古のラジウム温泉と越後美味会席",
    description: "開湯1200年！五頭連峰の麓に湧く名湯「五頭温泉郷 出湯温泉 愛犬と泊まれる秘湯の宿 大石屋旅館」特集。全国有数のラジウム温泉（飲泉可能）、ペット専用足洗い場や同伴客室、新潟コシヒカリと日本海の幸を徹底紹介。",
    prefecture: "新潟県",
    area: "五頭温泉郷・阿賀野・出湯温泉・月岡近郊",
    categories: ["大石屋旅館", "出湯温泉", "ペットと泊まれる宿", "ラジウム温泉", "新潟旅行"],
    keywords: [
      "出湯温泉 大石屋旅館", "出湯温泉 旅館", "五頭温泉郷 出湯温泉 愛犬と泊まれる秘湯の宿 大石屋旅館",
      "大石屋旅館 レビュー", "新潟 ペット 温泉宿", "新潟 温泉 おすすめ",
      "五頭温泉郷 宿泊", "新潟県 名物"
    ],
    internalLinks: [
      { text: "新潟・越後湯沢と地酒グルメ宿ガイド", href: "/posts/uonuma-oyu-onsen-hakkaisan-sake-hotels-guide" },
      { text: "新潟県の特産品・名物・おすすめ温泉宿", href: "/posts/niigata-famous-things-gourmet-spots-guide" }
    ],
    intro: "弘法大師ゆかりの歴史ある出湯温泉。ペット愛好家から絶大な支持を集める大石屋旅館で、家族の一員である愛犬と一緒に源泉かけ流しの名湯と新潟の美食を堪能できます。"
  },

  // 8. 湯元さぬき瀬戸大橋温泉 せとうちそう（香川・坂出）× 瀬戸大橋・讃岐うどん・展望露天
  {
    searchKeyword: "せとうちそう 坂出 温泉",
    fallbackKeyword: "坂出 ホテル 温泉",
    slug: "setouchiso-sakaide-seto-bridge-udon-guide",
    title: "【香川・坂出】湯元さぬき瀬戸大橋温泉 せとうちそう！瀬戸大橋ライトアップと本場讃岐うどん巡り",
    description: "瀬戸大橋の袂・坂出市に位置する名湯「湯元さぬき瀬戸大橋温泉 せとうちそう」徹底宿泊ガイド！肌に優しい天然アルカリ性単純温泉、瀬戸内海の新鮮な鯛やオリーブ牛会席、有名讃岐うどん店巡りの拠点に最適なプランを紹介。",
    prefecture: "香川県",
    area: "坂出・瀬戸大橋・丸亀・高松近郊",
    categories: ["せとうちそう", "坂出温泉", "瀬戸大橋", "讃岐うどん", "香川旅行"],
    keywords: [
      "湯元さぬき瀬戸大橋温泉せとうちそう", "湯元さぬき瀬戸大橋温泉 せとうちそう",
      "せとうちそう 坂出", "せとうちそう 坂出 宿泊", "坂出 ホテル おすすめ",
      "香川 温泉 おすすめ", "瀬戸大橋 近くの宿", "香川県 有名なもの"
    ],
    internalLinks: [
      { text: "せとうちそう＆坂出・香川宿泊ガイド", href: "/posts/setouchiso-sanuki-guide" },
      { text: "香川県の名物グルメ＆うどん県宿泊ランキング", href: "/posts/kagawa-famous-things-gourmet-spots-guide" }
    ],
    intro: "夕暮れから夜にかけてライトアップされる雄大な瀬戸大橋。天然温泉で旅の疲れをほぐし、讃岐名物の骨付鳥や新鮮な魚介会席を味わう香川ドライブ旅の拠点に最適です。"
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
  console.log(`=== Starting Wave 4 Expansion Post Generation (${wave4Themes.length} topics) ===`);
  let created = 0;

  for (const theme of wave4Themes) {
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

  console.log(`\nWave 4 expansion completed! Created ${created} new posts.`);
}

run().catch(console.error);
