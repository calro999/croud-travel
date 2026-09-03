const fs = require('fs');
const path = require('path');
const { searchRakutenHotels } = require('../rakuten_api_helper');

const POSTS_DIR = path.join(__dirname, '..', 'src', 'data', 'posts');

// 第8弾：更なる高需要温泉地・宿泊テーマの横展開特化記事群
const wave8Themes = [
  // 1. 乳頭温泉郷（秋田）× 秘湯鶴の湯・乳白色の露天風呂・きりたんぽ鍋
  {
    searchKeyword: "乳頭温泉郷 旅館 おすすめ",
    fallbackKeyword: "田沢湖 温泉 ホテル",
    slug: "nyuto-onsen-tsurunoyu-secret-hotspring-guide",
    title: "【秋田・乳頭温泉郷】憧れの秘湯「鶴の湯温泉」と七湯めぐり宿6選！白濁にごり湯ときりたんぽ鍋",
    description: "十和田八幡平国立公園に佇む日本屈指の秘湯「乳頭温泉郷」特集！茅葺き屋根の歴史ある鶴の湯温泉、ブナの原生林に抱かれた乳白色露天風呂、秋田名物本場きりたんぽ鍋や比内地鶏会席、湯めぐり帖を使った七湯巡りを詳しく紹介。",
    prefecture: "秋田県",
    area: "乳頭温泉郷・田沢湖・仙北・角館",
    categories: ["乳頭温泉郷", "鶴の湯", "秘湯", "にごり湯", "きりたんぽ", "秋田旅行"],
    keywords: [
      "乳頭温泉郷 旅館 おすすめ", "乳頭温泉 ランキング", "鶴の湯 宿泊",
      "乳頭温泉 湯めぐり 宿", "田沢湖 温泉 おすすめ", "秋田 にごり湯 秘湯",
      "秋田 温泉 おすすめ", "東北 秘湯 露天風呂"
    ],
    internalLinks: [
      { text: "東北新幹線駅から行ける名湯宿ガイド", href: "/posts/tohoku-shinkansen-station-walk-onsen-hotels-guide" },
      { text: "秋田県の特産品・地酒・おすすめ名門宿", href: "/posts/akita-famous-things-gourmet-spots-guide" }
    ],
    intro: "深いブナの原生林に抱かれ、江戸時代から続く湯治場の風情を今に残す乳頭温泉郷。足元からぷくぷくと湧き出る白濁の秘湯に身を委ね、囲炉裏端で味わう熱々のきりたんぽ鍋に心癒やされる至福の東北旅へご案内します。"
  },

  // 2. 銀山温泉（山形・尾花沢）× 大正ロマン・ガス灯・千と千尋・雪景色
  {
    searchKeyword: "銀山温泉 旅館 おすすめ",
    fallbackKeyword: "尾花沢 温泉 ホテル",
    slug: "ginzan-onsen-taisho-roman-snow-view-guide",
    title: "【山形・銀山温泉】大正ロマンの木造建築＆ガス灯灯る雪景色宿6選！尾花沢牛と立ち並ぶ名旅館",
    description: "銀山川沿いに大正から昭和初期の木造多層建築が立ち並ぶ「銀山温泉」特集！ガス灯が灯る幻想的な夜景、雪見露天風呂、山形ブランド「尾花沢牛」のしゃぶしゃぶや名物そば、人気の予約争奪戦を攻略する宿泊プランを徹底解説。",
    prefecture: "山形県",
    area: "銀山温泉・尾花沢・村山・山形北部",
    categories: ["銀山温泉", "大正ロマン", "雪景色", "ガス灯", "尾花沢牛", "山形旅行"],
    keywords: [
      "銀山温泉 旅館 おすすめ", "銀山温泉 ランキング", "銀山温泉 予約",
      "銀山温泉 冬 宿泊", "銀山温泉 雪景色 露天風呂", "銀山温泉 カップル 宿",
      "山形 温泉 おすすめ", "大正ロマン 温泉街"
    ],
    internalLinks: [
      { text: "山形・蔵王温泉大露天＆ジンギスカン宿ガイド", href: "/posts/zao-onsen-rotenburo-jingisukan-gourmet-guide" },
      { text: "山形県の特産品・地酒・おすすめ温泉宿", href: "/posts/yamagata-famous-things-gourmet-spots-guide" }
    ],
    intro: "夕暮れ時、ガス灯の柔らかな光が川面を照らし、まるでタイムスリップしたかのような大正ロマンの世界が広がる銀山温泉。雪化粧した木造旅館の美しい佇まいとともに、極上の山形牛と名湯をお楽しみください。"
  },

  // 3. 有馬温泉（兵庫・神戸）× 金の湯・銀の湯・日本三古湯・神戸牛
  {
    searchKeyword: "有馬温泉 旅館 おすすめ",
    fallbackKeyword: "有馬温泉 ホテル",
    slug: "arima-onsen-gold-silver-bath-kobe-beef-guide",
    title: "【兵庫・有馬温泉】日本三古湯！赤褐色の金泉＆無色の銀泉を満喫する極上宿7選！神戸牛会席",
    description: "太閤秀吉も愛した天下の名湯「有馬温泉」特集！鉄分と塩分が濃厚な赤褐色の「金泉」と炭酸泉・ラドン泉の「銀泉」、有馬温泉街の湯本坂散策、世界に誇る「神戸牛」ステーキや炭酸せんべい、客室露天風呂付き高級旅館を比較。",
    prefecture: "兵庫県",
    area: "有馬温泉・神戸・六甲山・三宮近郊",
    categories: ["有馬温泉", "金泉", "銀泉", "日本三古湯", "神戸牛", "兵庫旅行"],
    keywords: [
      "有馬温泉 旅館 おすすめ", "有馬温泉 ホテル ランキング", "有馬温泉 おすすめ宿",
      "有馬 温泉 ランキング", "有馬温泉 金泉 銀泉 宿", "有馬温泉 カップル 高級宿",
      "有馬温泉 神戸牛 プラン", "兵庫 温泉 おすすめ"
    ],
    internalLinks: [
      { text: "城崎温泉・七つの外湯めぐり＆但馬牛ガイド", href: "/posts/kinosaki-onsen-seven-baths-yukata-guide" },
      { text: "兵庫県の温泉おすすめ旅館＆ホテルランキング10選", href: "/posts/hyogo-onsen-ranking-hotels-guide" }
    ],
    intro: "都心・三宮からわずか30分でアクセスできる日本最古の名湯・有馬温泉。濃厚なミネラルを含んだ赤茶色の金泉と、肌を滑らかにする銀泉のふたつの湯を贅沢に巡り、極上の神戸牛を味わう上質な大人旅をお届けします。"
  },

  // 4. 湯布院・湯の坪街道 × 食べ歩き・金鱗湖朝霧・アート散策ホテル
  {
    searchKeyword: "由布院 湯の坪街道 ホテル",
    fallbackKeyword: "由布院 温泉 ホテル おすすめ",
    slug: "yufuin-yunotsubo-street-walking-gourmet-guide",
    title: "【由布院】湯の坪街道食べ歩き＆金鱗湖散策に便利なおすすめホテル6選！スイーツと朝霧パノラマ",
    description: "由布院観光の中心地「湯の坪街道」徒歩圏内の人気ホテル・温泉宿特集！金賞コロッケや抹茶スイーツの食べ歩き、幻想的な金鱗湖の朝霧を望む客室、源泉かけ流し天然温泉と地元大分の旬の味覚を堪能できる宿を徹底紹介。",
    prefecture: "大分県",
    area: "由布院・湯の坪街道・金鱗湖・湯布院",
    categories: ["由布院", "湯の坪街道", "金鱗湖", "食べ歩き", "由布岳", "大分旅行"],
    keywords: [
      "湯の坪街道 近くのホテル", "由布院 食べ歩き ホテル", "金鱗湖 近くの温泉宿",
      "由布院 ホテル おすすめ", "湯布院 女子旅 ホテル", "由布院 観光 宿泊",
      "大分 温泉 おすすめ", "由布院駅 徒歩 ホテル"
    ],
    internalLinks: [
      { text: "由布院温泉・完全プライベート離れ＆客室露天宿", href: "/posts/yufuin-onsen-hanare-private-bath-guide" },
      { text: "別府天然泥湯＆泥パック名湯宿ガイド", href: "/posts/beppu-doroyu-mud-pack-onsen-hotels-guide" }
    ],
    intro: "個性豊かなギャラリーやスイーツ店が軒を連ねる湯の坪街道。宿を拠点にゆったりと食べ歩きを楽しみ、朝は幻想的な湯気が立ち上る金鱗湖の静寂な風景に包まれる由布院の魅力をご堪能ください。"
  },

  // 5. 登別温泉（北海道）× 地獄谷・9種類の多彩な泉質・海鮮バイキング
  {
    searchKeyword: "登別温泉 旅館 おすすめ",
    fallbackKeyword: "登別温泉 ホテル",
    slug: "noboribetsu-onsen-jigokudani-nine-springs-guide",
    title: "【北海道・登別温泉】地獄谷の大迫力パノラマ＆9種類の多彩な泉質を誇る名湯宿7選！北海道三大蟹バイキング",
    description: "北海道随一の温泉郷「登別温泉」特集！毎分3,000リットル湧出する地獄谷の圧巻の景観、硫黄泉・食塩泉・鉄泉など多彩な湯巡りができる巨大大浴場、タラバ・ズワイ・毛ガニの北海道三大蟹食べ放題や白老牛プランを詳しく解説。",
    prefecture: "北海道",
    area: "登別・登別温泉・地獄谷・白老",
    categories: ["登別温泉", "地獄谷", "多彩な泉質", "北海道三大蟹", "バイキング", "北海道旅行"],
    keywords: [
      "登別温泉 旅館 おすすめ", "登別温泉 ホテル ランキング", "登別温泉 おすすめ宿",
      "登別 温泉 ランキング", "登別温泉 カニ 食べ放題", "登別 地獄谷 近くの宿",
      "北海道 温泉 おすすめ", "登別温泉 家族旅行"
    ],
    internalLinks: [
      { text: "札幌・定山渓温泉の渓谷美＆サウナ宿ガイド", href: "/posts/jozankei-onsen-sapporo-gorge-sauna-guide" },
      { text: "支笏湖温泉・湖畔リゾート＆美肌湯ガイド", href: "/posts/shikotsuko-onsen-lake-view-bihada-guide" }
    ],
    intro: "湯煙と硫黄の香りがダイナミックに立ち込める登別の地獄谷。日本有数の湯量を誇る広大な温泉大浴場で多彩な泉質を湯比べし、贅沢な北海道の海の幸バイキングを心ゆくまで満喫いただけます。"
  },

  // 6. 白浜温泉（和歌山・南紀）× 白良浜オーシャンビュー・崎の湯・クエ会席
  {
    searchKeyword: "白浜温泉 旅館 おすすめ",
    fallbackKeyword: "南紀白浜 ホテル 温泉",
    slug: "shirahama-onsen-ocean-view-kue-fish-guide",
    title: "【和歌山・南紀白浜温泉】白良浜の絶景オーシャンビュー＆幻の高級魚クエ鍋が旨い宿7選！日本三古湯",
    description: "エメラルドグリーンの海と真っ白な砂浜が広がる南紀のリゾート「白浜温泉」特集！太平洋の荒波が間近に迫る日本最古の露天風呂「崎の湯」、オーシャンフロント客室、冬の味覚の王様「天然クエ鍋・クエ会席」、アドベンチャーワールド観光に最適な宿を紹介。",
    prefecture: "和歌山県",
    area: "白浜・南紀白浜温泉・白良浜・田辺",
    categories: ["白浜温泉", "白良浜", "オーシャンビュー", "クエ鍋", "崎の湯", "和歌山旅行"],
    keywords: [
      "白浜温泉 旅館 おすすめ", "白浜温泉 ホテル ランキング", "南紀白浜 温泉 おすすめ",
      "白浜 温泉 ランキング", "白浜 露天風呂 海が見える", "白浜 クエ 宿泊 プラン",
      "和歌山 温泉 おすすめ", "白良浜 近くのホテル"
    ],
    internalLinks: [
      { text: "南紀勝浦・ホテル浦島「忘帰洞」宿泊ガイド", href: "/posts/nachikatsuura-urashima-bokido-cave-bath-guide" },
      { text: "和歌山県の温泉おすすめ旅館＆ホテルランキング10選", href: "/posts/wakayama-onsen-ranking-hotels-guide" }
    ],
    intro: "真っ白な白良浜と紺碧の海が広がる南紀白浜。波しぶきがかかるほどの臨場感あふれる海辺の露天風呂に浸かり、脂の乗った極上のクエ料理を堪能する贅沢なリゾート温泉旅をご案内します。"
  },

  // 7. 別府・鉄輪温泉（大分）× 地獄蒸し・湯けむり展望・貸切風呂
  {
    searchKeyword: "別府 鉄輪温泉 旅館",
    fallbackKeyword: "別府温泉 旅館 おすすめ",
    slug: "kannawa-onsen-beppu-jigokumushi-view-guide",
    title: "【別府・鉄輪温泉】名物「地獄蒸し料理」と湯けむり展望露天風呂の宿7選！別府八湯巡り",
    description: "街中から湯煙が立ち上る別府最大の温泉街「鉄輪（かんなわ）温泉」特集！高温の温泉蒸気で食材を蒸し上げるヘルシーな名物「地獄蒸し体験」、別府湾と湯けむりを一望する展望露天風呂、貸切風呂が充実した人気宿を徹底解説。",
    prefecture: "大分県",
    area: "別府・鉄輪温泉・別府八湯・明礬",
    categories: ["鉄輪温泉", "別府温泉", "地獄蒸し", "湯けむり展望", "別府八湯", "大分旅行"],
    keywords: [
      "鉄輪温泉 旅館 おすすめ", "鉄輪温泉 ランキング", "別府 鉄輪温泉 おすすめ宿",
      "別府 地獄蒸し 宿", "鉄輪 温泉 ホテル", "別府八湯 おすすめ宿",
      "別府 温泉 ランキング", "大分 温泉 おすすめ"
    ],
    internalLinks: [
      { text: "別府天然泥湯＆泥パック名湯宿ガイド", href: "/posts/beppu-doroyu-mud-pack-onsen-hotels-guide" },
      { text: "由布院・塚原温泉日本三大薬湯ガイド", href: "/posts/tsukahara-onsen-yufuin-yakuto-guide" }
    ],
    intro: "温泉街の路地や屋根からモクモクと立ち上る白い湯煙。温泉の蒸気熱で野菜や魚介の旨味を凝縮させた地獄蒸し料理を味わい、昔ながらの湯治場風情に浸る別府の真髄をお届けします。"
  },

  // 8. 下呂温泉・小川屋（岐阜）× 畳敷き大浴場・飛騨川ビュー・スパリゾート
  {
    searchKeyword: "下呂温泉 小川屋",
    fallbackKeyword: "下呂温泉 旅館 おすすめ",
    slug: "gero-ogawaya-tatami-bath-spa-guide",
    title: "【下呂温泉】名物「100帖の畳風呂」小川屋宿泊ガイド！飛騨川を望む絶景と飛騨牛三昧会席",
    description: "下呂温泉街の中心に位置する名門スパリゾート「下呂温泉 小川屋」徹底ガイド！足元が滑らず温かい名物「100帖空間の畳風呂」、飛騨川の清流を望む客室・貸切露天風呂、A5ランク飛騨牛のすき焼き・ステーキ会席プランを詳しく紹介。",
    prefecture: "岐阜県",
    area: "下呂温泉・下呂・飛騨萩原・高山近郊",
    categories: ["下呂温泉", "小川屋", "畳風呂", "飛騨牛", "日本三名泉", "岐阜旅行"],
    keywords: [
      "下呂温泉 小川屋", "下呂 小川屋", "小川屋 下呂温泉", "下呂温泉 畳風呂 小川屋",
      "下呂温泉 旅館 おすすめ", "下呂温泉 ランキング", "下呂 飛騨牛 宿泊", "岐阜 温泉 おすすめ"
    ],
    internalLinks: [
      { text: "下呂温泉・客室露天風呂付きおすすめ宿ガイド", href: "/posts/gero-onsen-private-open-air-bath-hotels-guide" },
      { text: "下呂温泉・A5飛騨牛美食旅館ガイド", href: "/posts/gero-onsen-hida-beef-gourmet-ryokan-guide" }
    ],
    intro: "日本三名泉・下呂温泉の滑らかな「美肌の湯」。小川屋ならではの足触り柔らかな名物畳風呂で贅沢に湯浴みを愉しみ、飛騨の恵みが詰まった極上の飛騨牛会席を心ゆくまでご堪能ください。"
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
  console.log(`=== Starting Wave 8 Expansion Post Generation (${wave8Themes.length} topics) ===`);
  let created = 0;

  for (const theme of wave8Themes) {
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

  console.log(`\nWave 8 expansion completed! Created ${created} new posts.`);
}

run().catch(console.error);
