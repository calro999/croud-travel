const fs = require('fs');
const path = require('path');
const { searchRakutenHotels } = require('../rakuten_api_helper');

const POSTS_DIR = path.join(__dirname, '..', 'src', 'data', 'posts');

// 掲載順位・表示回数が高く、さらなるロングテール横展開余地が大きいターゲットテーマ群
const wave2Themes = [
  // 1. ラルク PVロケ地 × 金沢観光・女子旅・おしゃれホテル
  {
    searchKeyword: "金沢 21世紀美術館 ホテル",
    fallbackKeyword: "金沢 香林坊 ホテル",
    slug: "kanazawa-art-museum-girls-trip-hotels-guide",
    title: "【金沢21世紀美術館】周辺のおしゃれホテル＆天然温泉宿6選！アート巡り・女子旅・カップル宿泊",
    description: "金沢21世紀美術館・兼六園徒歩圏内のおしゃれなデザインホテル＆天然温泉付き人気宿特集！ラルクPVロケ地巡りや現代アート鑑賞、ひがし茶屋街のカフェ巡り、近江町市場の海鮮グルメを堪能する金沢モデルコース。",
    prefecture: "石川県",
    area: "金沢・香林坊・兼六園・ひがし茶屋街",
    categories: ["金沢21世紀美術館", "女子旅", "金沢ホテル", "アート巡り", "天然温泉", "石川旅行"],
    keywords: [
      "金沢 21世紀美術館 ホテル", "金沢21世紀美術館 近くの宿", "金沢 女子旅 おしゃれ ホテル",
      "金沢 アート巡り 宿泊", "香林坊 ホテル おすすめ", "金沢駅 温泉 大浴場 ホテル",
      "金沢 カップル ホテル 記念日", "石川県 有名なもの 観光"
    ],
    internalLinks: [
      { text: "【聖地巡礼】ラルク『Link』PVロケ地・金沢21世紀美術館ガイド", href: "/posts/larc-link-location-travel-guide" },
      { text: "金沢21世紀美術館のスポット解説", href: "/spots/kanazawa-21st-century-museum" }
    ],
    intro: "世界的名所「金沢21世紀美術館」を中心に、歴史ある城下町の風情とモダンなアートが美しく融合する金沢。美術館から歩いてすぐのスタイリッシュなホテルや、旅の疲れを癒やす天然温泉付きの宿を厳選しました。"
  },

  // 2. 蔵王温泉 × 樹氷・露天風呂・ジンギスカン美食
  {
    searchKeyword: "蔵王温泉 露天風呂 旅館",
    fallbackKeyword: "蔵王温泉 ホテル",
    slug: "zao-onsen-rotenburo-jingisukan-gourmet-guide",
    title: "【蔵王温泉】名物大露天風呂＆蔵王牛・ジンギスカンが旨い人気宿7選！強酸性美肌湯ガイド",
    description: "開湯1900年の名湯・蔵王温泉の強酸性硫黄泉を満喫できるおすすめ温泉旅館特集！乳白色の源泉かけ流し露天風呂、山形名物ジンギスカンや蔵王牛ステーキ、ロープウェイ観光や秋の紅葉・冬の樹氷鑑賞に最適な宿を紹介。",
    prefecture: "山形県",
    area: "蔵王温泉・山形市・上山",
    categories: ["蔵王温泉", "大露天風呂", "ジンギスカン", "強酸性温泉", "山形旅行"],
    keywords: [
      "蔵王温泉 旅館 おすすめ", "蔵王温泉 露天風呂 人気", "蔵王温泉 ジンギスカン 宿",
      "蔵王 温泉 ランキング", "蔵王温泉 ホテル おすすめ", "山形 蔵王温泉 硫黄泉",
      "蔵王温泉 カップル 宿泊", "山形県 温泉 おすすめ"
    ],
    internalLinks: [
      { text: "蔵王・銀山・秋保・松島・鳴子温泉ガイド", href: "/posts/zao-ginzan-akyu-matsushima-naruko-tohoku-onsen-guide" },
      { text: "山形県の有名ご当地グルメ＆地酒特集", href: "/posts/yamagata-famous-beef-imoni-sake-hotels-guide" }
    ],
    intro: "皮膚病や美肌に絶大な効能を誇る蔵王の強酸性硫黄泉。湯けむり漂う風情豊かな温泉街で、名物のジンギスカンや山形のブランド牛に舌鼓を打つ極上の東北温泉旅をご案内します。"
  },

  // 3. 松島温泉 × 日本三景・オーシャンビュー・松島牡蠣
  {
    searchKeyword: "松島 温泉 絶景 ホテル",
    fallbackKeyword: "松島温泉 旅館",
    slug: "matsushima-onsen-ocean-view-oyster-guide",
    title: "【松島温泉】日本三景・松島湾を一望する絶景ホテル7選！松島牡蠣＆仙台牛会席",
    description: "日本三景・松島のパノラマビューを望む松島温泉の温泉旅館・ホテル特集！松島湾から昇る朝日を望む展望露天風呂、旬のぷりぷり松島牡蠣・仙台牛ステーキ、遊覧船クルーズや瑞厳寺観光の拠点に最適な人気宿を徹底解説。",
    prefecture: "宮城県",
    area: "松島・塩釜・仙台近郊",
    categories: ["松島温泉", "日本三景", "オーシャンビュー", "松島牡蠣", "仙台牛", "宮城旅行"],
    keywords: [
      "松島温泉 ホテル おすすめ", "松島 温泉 旅館 ランキング", "松島 絶景 露天風呂 宿",
      "松島 牡蠣 宿泊 プラン", "松島温泉 ランキング", "松島 オーシャンビュー 温泉",
      "宮城 温泉 おすすめ", "仙台 松島 温泉 旅行"
    ],
    internalLinks: [
      { text: "宮城・松島温泉＆秋保温泉ランキング特集", href: "/posts/zao-ginzan-akyu-matsushima-naruko-tohoku-onsen-guide" },
      { text: "宮城県の定番お土産・特産品・名門宿ガイド", href: "/posts/miyagi-famous-things-gourmet-spots-guide" }
    ],
    intro: "松尾芭蕉も心を奪われた日本三景・松島。海と島々が織りなす絵画のような風景を客室や露天風呂から眺め、三陸の豊かな海の幸を味わう贅沢な滞在をお楽しみいただけます。"
  },

  // 4. 洲本温泉（淡路島）× インフィニティ温泉・淡路牛・由良ウニ
  {
    searchKeyword: "淡路島 洲本温泉 露天風呂",
    fallbackKeyword: "洲本温泉 ホテル",
    slug: "sumoto-onsen-awaji-luxury-ocean-view-guide",
    title: "【淡路島・洲本温泉】海と空が繋がる絶景インフィニティ温泉宿6選！淡路牛＆天然鯛の美食旅",
    description: "瀬戸内海・紀淡海峡の大海原を望む洲本温泉（淡路島）の人気高級旅館・リゾートホテル特集！海に浮かぶようなインフィニティ露天風呂、淡路島名物の淡路牛ステーキ・活け造り会席、記念日や家族旅行におすすめの宿を紹介。",
    prefecture: "兵庫県",
    area: "淡路島・洲本・南あわじ",
    categories: ["洲本温泉", "淡路島", "インフィニティ温泉", "淡路牛", "兵庫旅行"],
    keywords: [
      "洲本温泉 ホテル おすすめ", "洲本温泉 旅館 ランキング", "淡路島 洲本温泉 露天風呂",
      "洲本温泉 インフィニティ風呂", "淡路島 記念日 高級宿", "洲本温泉 淡路牛 部屋食",
      "兵庫 温泉 ランキング", "淡路島 家族旅行 温泉宿"
    ],
    internalLinks: [
      { text: "関西・淡路島のグランピング＆温泉宿ガイド", href: "/posts/kansai-glamping-onsen-dome-tent-guide" },
      { text: "兵庫県のお土産・地酒・名湯ガイド", href: "/posts/hyogo-famous-things-gourmet-spots-guide" }
    ],
    intro: "神戸・大阪から車で約1時間半とアクセス抜群のリゾートアイランド・淡路島。洲本温泉の波打ち際露天風呂で心地よい潮風を感じながら、島の豊かな海山の恵みを心ゆくまでご堪能ください。"
  },

  // 5. 霧島温泉（鹿児島）× 泥湯・硫黄泉・龍馬ハネムーン
  {
    searchKeyword: "霧島温泉 泥湯 露天風呂",
    fallbackKeyword: "霧島温泉 旅館",
    slug: "kirishima-onsen-doroyu-sulfur-springs-guide",
    title: "【霧島温泉】天然泥湯＆源泉かけ流しにごり湯の宿6選！霧島神宮参拝と黒豚料理",
    description: "天孫降臨の神話が息づく霧島温泉郷特集！名物さくらさくら温泉の天然泥パック、霧島神宮参拝に便利な老舗旅館、客室露天風呂付き離れ、かごしま黒豚しゃぶしゃぶや地鶏の炭火焼きを味わう極上温泉ステイ。",
    prefecture: "鹿児島県",
    area: "霧島・霧島神宮・霧島温泉郷",
    categories: ["霧島温泉", "泥湯", "にごり湯", "霧島神宮", "黒豚", "鹿児島旅行"],
    keywords: [
      "霧島温泉 旅館 おすすめ", "霧島温泉 泥湯 宿泊", "霧島温泉 ランキング",
      "霧島 温泉 露天風呂 人気", "霧島神宮 近くの宿", "霧島温泉 離れ 客室露天風呂",
      "鹿児島 霧島温泉 黒豚", "指宿 霧島 どっち 宿泊"
    ],
    internalLinks: [
      { text: "指宿温泉 vs 霧島温泉 徹底比較ガイド", href: "/posts/ibusuki-vs-kirishima-kagoshima-onsen-guide" },
      { text: "ホテルグリーンヒル鹿児島＆霧島指宿ガイド", href: "/posts/hotel-greenhill-kagoshima-stay-guide" }
    ],
    intro: "坂本龍馬とお龍が日本初の新婚旅行で訪れたことでも知られる名湯・霧島温泉郷。もくもくと立ち上る湯煙と豊かな天然泥湯は、心と身体を芯から清らかに整えてくれます。"
  },

  // 6. 弘前・津軽温泉 × りんご風呂・弘前城・レトロ建築
  {
    searchKeyword: "弘前 温泉 ホテル",
    fallbackKeyword: "弘前 旅館",
    slug: "hirosaki-tsugaru-apple-bath-retro-hotels-guide",
    title: "【弘前・津軽】名物りんご風呂＆レトロ洋館巡りおすすめ宿6選！津軽三味線と郷土料理",
    description: "城下町・弘前の名物「りんご風呂」や源泉かけ流し天然温泉が自慢の宿特集！弘前城公園やレトロな洋館群、津軽三味線の生演奏が楽しめる旅館、嶽きみ（とうもろこし）や貝焼き味噌など津軽の郷土会席を紹介。",
    prefecture: "青森県",
    area: "弘前・嶽温泉・岩木山・大鰐温泉",
    categories: ["弘前温泉", "りんご風呂", "弘前城", "津軽三味線", "青森旅行"],
    keywords: [
      "弘前 旅館 おすすめ", "弘前 温泉 ランキング", "弘前 りんご風呂 ホテル",
      "弘前城 近くの温泉宿", "弘前市 温泉宿 おすすめ", "岩木山 温泉 おすすめ",
      "津軽 温泉 おすすめ", "青森 旅館 おすすめ"
    ],
    internalLinks: [
      { text: "弘前パークホテル＆青森宿泊ガイド", href: "/posts/hirosaki-park-hotel-aomori-stay-guide" },
      { text: "青森県の特産品・名物・温泉宿ランキング", href: "/posts/aomori-famous-things-gourmet-spots-guide" }
    ],
    intro: "甘酸っぱい香りが湯船いっぱいに広がる「りんご風呂」と、雄大な岩木山を望む城下町の風情。津軽三味線の力強い音色と温かい郷土の味覚に触れる癒やしの旅をお届けします。"
  },

  // 7. 鹿嶋・神栖 × 鹿島神宮参拝・常陸牛・天然温泉
  {
    searchKeyword: "鹿島神宮 ホテル",
    fallbackKeyword: "鹿嶋市 ホテル",
    slug: "kashima-jingu-power-spot-hotels-gourmet-guide",
    title: "【鹿島神宮】東国三社参り＆パワースポット巡りおすすめホテル6選！常陸牛＆鹿島灘はまぐり",
    description: "勝負運・開運の総本山「鹿島神宮」参拝の拠点となる鹿嶋・神栖・潮来エリアの人気ホテル特集！天然温泉大浴場付きホテル、常陸牛や鹿島灘名物焼きはまぐりのご当地グルメ、東国三社巡りモデルコースを徹底解説。",
    prefecture: "茨城県",
    area: "鹿嶋・神栖・潮来・鉾田",
    categories: ["鹿島神宮", "東国三社", "パワースポット", "常陸牛", "はまぐり", "茨城旅行"],
    keywords: [
      "鹿島神宮 ホテル おすすめ", "鹿島神宮 近くの宿", "スーパーホテル鹿嶋 夕食",
      "鹿島 グルメ 名物", "鹿嶋市 グルメ ホテル", "東国三社巡り 宿泊",
      "茨城 温泉 おすすめ", "鹿島神宮 パワースポット 宿泊"
    ],
    internalLinks: [
      { text: "鹿島神宮のスポット解説", href: "/spots/kashima-jingu" },
      { text: "茨城県の特産品・地酒・おすすめ温泉宿ガイド", href: "/posts/ibaraki-famous-things-gourmet-spots-guide" }
    ],
    intro: "人生の新たなスタートや勝利を祈願するパワースポット「鹿島神宮」。御手洗池の清らかな湧水や杉木立の参道を巡った後は、天然温泉と鹿島灘の海の幸で力をチャージできます。"
  },

  // 8. 宇奈月温泉・黒部峡谷 × トロッコ電車・秘境露天風呂
  {
    searchKeyword: "宇奈月温泉 旅館 おすすめ",
    fallbackKeyword: "宇奈月温泉 ホテル",
    slug: "unazuki-kurobe-gorge-trolley-ryokan-guide",
    title: "【宇奈月温泉】黒部峡谷トロッコ電車の拠点！日本一の透明度を誇る名湯旅館7選",
    description: "富山県・黒部峡谷の玄関口「宇奈月温泉」特集！日本一の透明度を誇る弱アルカリ性美肌温泉、黒部川の渓谷美を望む露天風呂、富山湾の白えび・紅ズワイガニ会席、トロッコ電車観光に最適な人気宿を徹底比較。",
    prefecture: "富山県",
    area: "宇奈月温泉・黒部峡谷・魚津",
    categories: ["宇奈月温泉", "黒部峡谷", "トロッコ電車", "白えび", "富山旅行"],
    keywords: [
      "宇奈月温泉 ランキング", "宇奈月 温泉 おすすめ宿", "宇奈月温泉 旅館 ランキング",
      "黒部峡谷 トロッコ電車 ホテル", "宇奈月温泉 富山湾の幸 宿", "宇奈月温泉 露天風呂 おすすめ",
      "富山 おすすめ 温泉", "黒部 温泉 宿泊"
    ],
    internalLinks: [
      { text: "宇奈月・黒部・三朝温泉ガイド", href: "/posts/unazuki-kurobe-misasa-onsen-chubu-chugoku-guide" },
      { text: "富山県の名物グルメ＆立山黒部アルペンルート宿", href: "/posts/toyama-famous-things-gourmet-spots-guide" }
    ],
    intro: "エメラルドグリーンの黒部川渓谷に沿って広がる宇奈月温泉。肌に優しい弱アルカリ性の清らかな湯に浸かり、富山湾の「天然の生け簀」から届く白えびやホタルイカを味わう贅沢をご堪能ください。"
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
  console.log(`=== Starting Wave 2 Expansion Post Generation (${wave2Themes.length} topics) ===`);
  let created = 0;

  for (const theme of wave2Themes) {
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
      date: "2026-09-02",
      categories: theme.categories,
      keywords: theme.keywords,
      is_special_feature: true,
      review: reviewHtml
    };

    fs.writeFileSync(outPath, JSON.stringify(postJson, null, 2), 'utf8');
    console.log(`✓ Successfully generated: ${theme.slug}`);
    created++;
  }

  console.log(`\nWave 2 expansion completed! Created ${created} new posts.`);
}

run().catch(console.error);
