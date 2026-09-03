const fs = require('fs');
const path = require('path');
const { searchRakutenHotels } = require('../rakuten_api_helper');

const POSTS_DIR = path.join(__dirname, '..', 'src', 'data', 'posts');

// 第5弾：サチコで継続的に上位表示・クリック獲得されている未開拓の高需要テーマ群
const wave5Themes = [
  // 1. 酸ヶ湯温泉（青森・八甲田）× 千人風呂・ヒバ造り・湯治文化
  {
    searchKeyword: "酸ヶ湯温泉 旅館",
    fallbackKeyword: "八甲田 温泉 ホテル",
    slug: "sukayu-onsen-thousand-people-bath-aomori-guide",
    title: "【青森・八甲田】酸ヶ湯温泉宿泊ガイド！名物「ヒバ千人風呂」混浴・女性専用時間と湯治文化",
    description: "開湯300年の国民保養温泉地第1号「酸ヶ湯温泉」徹底ガイド！総ヒバ造り160畳の巨大混浴大浴場「千人風呂」の入浴ルール・女性専用時間帯、白濁硫黄泉の驚異の効能、湯治棟・旅館棟の宿泊プランを詳しく紹介。",
    prefecture: "青森県",
    area: "八甲田・酸ヶ湯温泉・青森市奥座敷",
    categories: ["酸ヶ湯温泉", "千人風呂", "秘湯", "にごり湯", "湯治", "青森旅行"],
    keywords: [
      "酸ヶ湯温泉 ホテル", "酸ヶ湯温泉 旅館", "酸ヶ湯温泉", "酸ヶ湯 温泉",
      "酸ヶ湯温泉 効能", "酸ヶ湯温泉旅館 湯治棟", "酸ヶ湯温泉 観光", "青森 温泉 おすすめ"
    ],
    internalLinks: [
      { text: "弘前・津軽温泉＆りんご風呂おすすめ宿", href: "/posts/hirosaki-tsugaru-apple-bath-retro-hotels-guide" },
      { text: "青森県の特産品・名物・おすすめ温泉宿ランキング", href: "/posts/aomori-famous-things-gourmet-spots-guide" }
    ],
    intro: "八甲田山麓の豊かな自然林に包まれた「酸ヶ湯温泉」。天井高5m・柱が一本もない総ヒバ造りの巨大な「ヒバ千人風呂」に浸かり、立ち上る湯煙と濃厚な硫黄泉の力強い恵みに癒やされる本物の秘湯体験をご案内します。"
  },

  // 2. 熱川温泉 一柳閣（静岡・東伊豆）× 自家源泉・貸切露天・金目鯛会席
  {
    searchKeyword: "熱川温泉 一柳閣",
    fallbackKeyword: "熱川温泉 旅館 おすすめ",
    slug: "atagawa-ichiryukaku-hot-spring-sea-view-guide",
    title: "【東伊豆・熱川温泉】懐かしの自然湯 熱川温泉 一柳閣！7本の自家源泉と金目鯛姿煮プラン",
    description: "湯けむり立ち上る東伊豆の名湯「懐かしの自然湯 熱川温泉 一柳閣」徹底宿泊ガイド！7本の豊富な自家源泉かけ流し、海を望む貸切露天風呂、伊豆名物「金目鯛の姿煮」や新鮮魚介のお造り会席プランを詳しく解説。",
    prefecture: "静岡県",
    area: "熱川温泉・東伊豆・稲取・河津",
    categories: ["熱川温泉", "一柳閣", "自家源泉", "金目鯛", "貸切露天風呂", "伊豆旅行"],
    keywords: [
      "熱川温泉 一柳閣", "懐かしの自然湯 熱川温泉 一柳閣", "熱川 一柳閣", "熱川一柳閣",
      "熱川 温泉 おすすめ", "東伊豆 温泉 旅館", "伊豆 金目鯛 宿泊", "静岡 温泉 ランキング"
    ],
    internalLinks: [
      { text: "修善寺・新井旅館＆名建築ガイド", href: "/posts/arai-ryokan-shuzenji-cultural-heritage-guide" },
      { text: "静岡県の温泉おすすめ旅館＆ホテルランキング10選", href: "/posts/shizuoka-onsen-ranking-hotels-guide" }
    ],
    intro: "温泉櫓から勢いよく蒸気が吹き上がる熱川温泉。一柳閣自慢の豊富な自家源泉から湧き出る熱海・伊豆屈指の高温泉に浸かり、脂ののった極上金目鯛に舌鼓を打つ昔ながらの温泉情緒をお届けします。"
  },

  // 3. 阿蘇内牧温泉（熊本）× カルデラ絶景・あか牛・家族湯
  {
    searchKeyword: "阿蘇 内牧温泉 旅館",
    fallbackKeyword: "阿蘇 温泉 ホテル",
    slug: "aso-uchinomaki-onsen-caldera-view-hotels-guide",
    title: "【熊本・阿蘇】阿蘇内牧温泉おすすめ宿6選！大観峰のカルデラパノラマとあか牛・馬刺し会席",
    description: "夏目漱石や与謝野晶子も愛した文豪の湯「阿蘇内牧温泉」特集！阿蘇五岳を望む展望露天風呂、名物あか牛ステーキや本場熊本の極上馬刺し、大観峰や阿蘇中岳火口観光の拠点に最適な人気旅館・ホテルを紹介。",
    prefecture: "熊本県",
    area: "阿蘇・内牧温泉・南阿蘇",
    categories: ["阿蘇内牧温泉", "内牧温泉", "阿蘇カルデラ", "あか牛", "馬刺し", "熊本旅行"],
    keywords: [
      "内牧 温泉", "阿蘇内牧温泉", "阿蘇内牧温泉 旅館", "内牧温泉",
      "かどまん 阿蘇", "かどまん", "阿蘇 角 萬", "熊本 温泉 おすすめ"
    ],
    internalLinks: [
      { text: "黒川温泉・入湯手形＆あか牛グルメ宿ガイド", href: "/posts/kurokawa-onsen-nyuto-tegata-akagyu-guide" },
      { text: "熊本県の名物グルメ＆阿蘇・黒川温泉宿特集", href: "/posts/kumamoto-famous-things-gourmet-spots-guide" }
    ],
    intro: "世界最大級のカルデラに抱かれた阿蘇内牧温泉。町中に多彩な町湯が点在し、阿蘇の大地が生み出す新鮮な湧水と天然温泉、豊かな郷土の味覚を心ゆくまで堪能できます。"
  },

  // 4. 清里・八ヶ岳温泉（山梨）× 高原リゾート・満天星空・清泉寮ソフト
  {
    searchKeyword: "清里 温泉 ホテル",
    fallbackKeyword: "八ヶ岳 温泉 ホテル",
    slug: "kiyosato-yatsugatake-highland-starry-onsen-guide",
    title: "【山梨・八ヶ岳】清里温泉おすすめリゾートホテル5選！標高1,200mの星空露天と高原フレンチ",
    description: "八ヶ岳南麓の爽快な高原リゾート「清里温泉」特集！富士山・南アルプスを望む展望パノラマ露天風呂、日本有数の美しさを誇る星空観察、地元八ヶ岳野菜や信州サーモンの高原グルメ、清泉寮や萌木の村散策を楽しむ宿を紹介。",
    prefecture: "山梨県",
    area: "清里・八ヶ岳・小淵沢・北杜市",
    categories: ["清里温泉", "八ヶ岳", "星空露天風呂", "高原リゾート", "山梨旅行"],
    keywords: [
      "清里温泉", "清里 温泉", "八ヶ岳 温泉 ランキング", "keep 温泉",
      "清里 ホテル おすすめ", "八ヶ岳 星空 ホテル", "山梨 温泉 宿", "山梨 ホテル おすすめ"
    ],
    internalLinks: [
      { text: "勝沼ぶどう狩り＆石和温泉宿泊ガイド", href: "/posts/yamanashi-katsunuma-grape-isawa-onsen-hotels-guide" },
      { text: "山梨県の特産品・地酒ワイン・名門宿ガイド", href: "/posts/yamanashi-famous-things-gourmet-spots-guide" }
    ],
    intro: "澄み切った高原の空気と、夜空を埋め尽くす満天の星々。清里・八ヶ岳南麓の豊かな自然の中で、天然温泉に浸かりながら非日常の高原リゾートステイをお楽しみいただけます。"
  },

  // 5. 昼神温泉（長野・南信州）× 日本一の星空・阿智村・美肌トロトロ湯
  {
    searchKeyword: "昼神温泉 旅館 おすすめ",
    fallbackKeyword: "阿智村 昼神温泉 ホテル",
    slug: "hirugami-onsen-achi-starry-sky-bihada-guide",
    title: "【長野・阿智村】昼神温泉おすすめ宿7選！日本一の星空ナイトツアーと極上美肌の湯",
    description: "環境省認定「日本一星空が綺麗な村」阿智村に湧く名湯「昼神温泉」特集！pH9.7を誇る強アルカリ性のトロトロ美肌湯、天空の楽園ナイトツアー送迎付きプラン、信州プレミアム牛やイワナの塩焼きを味わう美食旅館を徹底解説。",
    prefecture: "長野県",
    area: "阿智村・昼神温泉・飯田・南信州",
    categories: ["昼神温泉", "阿智村", "日本一の星空", "美肌温泉", "アルカリ性単純温泉", "長野旅行"],
    keywords: [
      "昼神温泉 ランキング", "昼神 温泉 ランキング", "昼神温泉 おすすめ宿", "昼神温泉 人気宿",
      "ひるがみおんせん", "長野 星空 阿智 村 ホテル", "阿智村 星空 温泉宿", "ph9 温泉"
    ],
    internalLinks: [
      { text: "長野・信州雲海テラス＆絶景高原ホテル特集", href: "/posts/nagano-unkai-terrace-highland-resort-hotels-guide" },
      { text: "長野県の温泉おすすめ旅館＆ホテルランキング10選", href: "/posts/nagano-onsen-ranking-hotels-guide" }
    ],
    intro: "夜空を見上げれば息をのむ満天の星、湯船に浸かればまるで美容液のような肌触り。南信州の山あいに佇む昼神温泉で、心身ともに潤う極上の癒やしステイをご案内します。"
  },

  // 6. 湯の児温泉（熊本・水俣）× 夕陽オーシャンビュー・松原荘・タチウオ美食
  {
    searchKeyword: "湯の児温泉 松原荘",
    fallbackKeyword: "湯の児温泉 旅館",
    slug: "yunoko-matsubaraso-ocean-sunset-guide",
    title: "【熊本・水俣】湯の児温泉 松原荘宿泊ガイド！不知火海に沈む夕陽と太刀魚・海の幸会席",
    description: "不知火海を一望する海辺の名湯宿「湯の児温泉 松原荘」徹底ガイド！波打ち際の絶景露天風呂、名物太刀魚の一本釣り料理や新鮮魚介の舟盛り、アットホームな心温まるおもてなしと海辺の散策を満喫するプランを紹介。",
    prefecture: "熊本県",
    area: "水俣・湯の児温泉・芦北・八代",
    categories: ["湯の児温泉", "松原荘", "不知火海", "オーシャンビュー", "太刀魚", "熊本旅行"],
    keywords: [
      "湯の児温泉 松原荘", "湯の児温泉 松原荘＜熊本県＞", "旅館 松原荘", "松原荘",
      "松原荘 水俣市 レビュー", "松原荘 予約", "体験の宿 松原荘", "熊本 温泉 おすすめ"
    ],
    internalLinks: [
      { text: "指宿ロイヤルホテル＆絶景露天風呂ガイド", href: "/posts/ibusuki-royal-hotel-ocean-view-guide" },
      { text: "熊本県の名物グルメ＆温泉宿ランキング", href: "/posts/kumamoto-famous-things-gourmet-spots-guide" }
    ],
    intro: "波静かな不知火海が夕暮れ時に黄金色に輝く絶景の海辺。松原荘ならではの新鮮な海の幸と、潮風を感じながら浸かる源泉かけ流しの名湯で、ゆったりとした贅沢な時間をお過ごしください。"
  },

  // 7. 戸倉上山田温泉（長野・千曲）× 梅むら旅館 うぐいす亭・美肌エメラルド湯
  {
    searchKeyword: "戸倉上山田温泉 うぐいす亭",
    fallbackKeyword: "戸倉上山田温泉 旅館 おすすめ",
    slug: "togurakamiyamada-uguisutei-onsen-guide",
    title: "【長野・千曲】戸倉上山田温泉 梅むら旅館 うぐいす亭！ほのかな硫黄香る美肌湯と信州美味",
    description: "千曲川の畔に佇む純和風旅館「戸倉上山田温泉 梅むら旅館 うぐいす亭」特集！エメラルドグリーンに輝く天然美肌温泉、季節の花々が彩る館内、信州サーモンや信州牛を味わう会席料理、善光寺参りや姨捨の棚田観光拠点に最適。",
    prefecture: "長野県",
    area: "戸倉上山田温泉・千曲・長野市近郊・上田",
    categories: ["戸倉上山田温泉", "うぐいす亭", "美肌温泉", "信州牛", "善光寺参り", "長野旅行"],
    keywords: [
      "戸倉上山田温泉 梅むら旅館 うぐいす亭〈長野県〉", "梅むら旅館 うぐいす亭", "うぐいす亭", "うぐいす 亭",
      "戸倉上山田温泉 和の魁が佇む宿 梅むら旅館うぐいす亭", "戸倉上山田温泉 旅館 おすすめ", "長野 温泉 おすすめ"
    ],
    internalLinks: [
      { text: "棚田風露天風呂＆日本の棚田温泉ガイド（姨捨の棚田掲載）", href: "/posts/tanada-onsen-infinity-bath-japan-guide" },
      { text: "長野県の特産品・地酒・おすすめ温泉宿", href: "/posts/nagano-famous-things-gourmet-spots-guide" }
    ],
    intro: "「美白の湯」として古くから親しまれる戸倉上山田温泉。うぐいす亭の情緒豊かな和の空間で、やわらかな源泉の湯浴みと信州の豊かな旬の味覚を心ゆくまでお楽しみいただけます。"
  },

  // 8. 白馬五竜（長野・白馬）× ホテル ステラベラ・かたくり温泉・アルプス絶景
  {
    searchKeyword: "白馬 ホテル ステラベラ",
    fallbackKeyword: "白馬 温泉 ホテル おすすめ",
    slug: "hakuba-stellabella-alps-resort-guide",
    title: "【長野・白馬】白馬五竜ホテル ステラベラ！北アルプス山麓の天然温泉と信州バイキング",
    description: "北アルプス白馬五竜スキー場徒歩3分！四季のアウトドア拠点「白馬五竜ホテル ステラベラ」徹底ガイド。ミネラル豊富な白馬かたくり温泉「みその湯」、24時間利用可能な大浴場、信州の郷土料理バイキング、トレッキングやスキーに最適なプランを紹介。",
    prefecture: "長野県",
    area: "白馬・白馬五竜・八方尾根・栂池",
    categories: ["ホテルステラベラ", "白馬温泉", "北アルプス", "スキーリゾート", "トレッキング", "長野旅行"],
    keywords: [
      "ホテル ステラベラ", "白馬五竜ホテル ステラベラ", "白馬 ホテル おすすめ",
      "白馬 温泉 ホテル", "白馬五竜 宿泊", "北アルプス トレッキング ホテル", "長野 温泉 おすすめ"
    ],
    internalLinks: [
      { text: "信州雲海テラス＆絶景高原ホテル特集", href: "/posts/nagano-unkai-terrace-highland-resort-hotels-guide" },
      { text: "長野県の温泉おすすめ旅館＆ホテルランキング10選", href: "/posts/nagano-onsen-ranking-hotels-guide" }
    ],
    intro: "雄大な北アルプスの大自然に抱かれたオールシーズンリゾート白馬。ステラベラの温かいおもてなしと天然温泉、美味しい信州の郷土バイキングで、アクティブな旅の疲れを心地よく癒やせます。"
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
  console.log(`=== Starting Wave 5 Expansion Post Generation (${wave5Themes.length} topics) ===`);
  let created = 0;

  for (const theme of wave5Themes) {
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

  console.log(`\nWave 5 expansion completed! Created ${created} new posts.`);
}

run().catch(console.error);
