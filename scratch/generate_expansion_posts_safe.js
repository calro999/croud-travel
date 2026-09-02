const fs = require('fs');
const path = require('path');
const { searchRakutenHotels } = require('../rakuten_api_helper');

const POSTS_DIR = path.join(__dirname, '..', 'src', 'data', 'posts');

const expansionThemes = [
  {
    searchKeyword: "淡路島 グランピング",
    fallbackKeyword: "淡路島 温泉 ホテル",
    slug: "kansai-glamping-onsen-dome-tent-guide",
    title: "【関西】温泉併設グランピングおすすめ7選！客室露天風呂・天然温泉付きドームテント",
    description: "関西エリアで天然温泉も同時に満喫できる高規格グランピング特集！淡路島・京都るり渓・滋賀琵琶湖・兵庫神鍋高原など、客室専用露天風呂や大浴場温泉を備えた快適アウトドアリゾートを徹底比較。",
    prefecture: "兵庫県",
    area: "淡路島・るり渓・琵琶湖・神鍋",
    categories: ["グランピング", "関西温泉", "淡路島", "露天風呂付き客室", "アウトドア"],
    keywords: [
      "グランピング 関西 温泉", "関西 温泉付き グランピング", "淡路島 グランピング 温泉",
      "京都 グランピング 温泉", "琵琶湖 ドームテント 温泉", "客室露天風呂 グランピング 関西",
      "子連れ グランピング 関西 温泉", "シルバーウィーク 関西 グランピング"
    ],
    internalLinks: [
      { text: "シルバーウィーク厳選グランピング特集", href: "/posts/silver-week-glamping-luxury-guide" },
      { text: "淡路島・洲本温泉の旅館おすすめ", href: "/posts/sumoto-onsen-awaji-hotels-guide" }
    ],
    intro: "アウトドアの開放感と、極上の温泉癒やしを同時に叶える関西の温泉付きグランピング。手ぶらで豪華BBQを楽しんだ後は、星空の下でプライベート温泉に浸かる贅沢なひとときをお過ごしいただけます。"
  },
  {
    searchKeyword: "盛岡 温泉 つなぎ",
    fallbackKeyword: "盛岡 ホテル",
    slug: "tohoku-shinkansen-station-walk-onsen-hotels-guide",
    title: "【東北新幹線】駅から徒歩・送迎ですぐ行ける名湯宿8選！車なしで巡る東北温泉旅",
    description: "東北新幹線（はやぶさ・こまち・つばさ・やまびこ）の停車駅から徒歩圏内、または無料シャトルバスで楽々アクセスできる温泉宿特集！盛岡つなぎ温泉、郡山磐梯熱海、那須塩原、かみのやま温泉など車なし女子旅・一人旅にも最適。",
    prefecture: "岩手県",
    area: "盛岡・花巻・郡山・山形・那須塩原",
    categories: ["東北新幹線", "駅近温泉", "車なし旅行", "女子旅", "東北旅行"],
    keywords: [
      "東北新幹線 温泉 駅近", "新幹線 駅から徒歩 温泉 東北", "車なし 東北 温泉 おすすめ",
      "盛岡駅 送迎 温泉宿", "郡山 磐梯熱海温泉 新幹線", "新幹線 シルバーウィーク 東北",
      "東北新幹線 一人旅 温泉", "東北新幹線 週末温泉旅行"
    ],
    internalLinks: [
      { text: "シルバーウィーク東北新幹線で行く温泉特集", href: "/posts/silver-week-tohoku-shinkansen-travel-guide" },
      { text: "盛岡つなぎ温泉＆三大麺グルメ宿ガイド", href: "/posts/morioka-tsunagi-onsen-three-noodles-hotels-guide" }
    ],
    intro: "運転の心配なく、駅弁やお酒を楽しみながら快適に移動できる新幹線温泉旅。新幹線停車駅から直結または専用送迎バスが出ているアクセス抜群の名湯宿をご紹介します。"
  },
  {
    searchKeyword: "ホテル浦島",
    fallbackKeyword: "南紀勝浦 温泉",
    slug: "nachikatsuura-urashima-bokido-cave-bath-guide",
    title: "【南紀勝浦】ホテル浦島「大洞窟風呂 忘帰洞」完全宿泊ルポ！海蝕洞窟の絶景温泉と生マグロ会席",
    description: "太平洋の怒濤が間近に迫る日本屈指の大洞窟温泉「ホテル浦島・忘帰洞」徹底宿泊ガイド！帰るのを忘れる名湯の泉質・効能、名物山上館からの絶景、勝浦港水揚げの新鮮な生マグロバイキングを満喫。",
    prefecture: "和歌山県",
    area: "南紀勝浦・那智山・熊野古道",
    categories: ["洞窟温泉", "南紀勝浦", "ホテル浦島", "忘帰洞", "生マグロ", "熊野古道"],
    keywords: [
      "勝浦温泉 忘帰洞", "ホテル浦島 忘帰洞 宿泊", "南紀勝浦 洞窟温泉 旅館",
      "ホテル浦島 温泉 評判", "勝浦 生マグロ ホテル浦島", "和歌山 洞窟風呂 おすすめ",
      "熊野古道 宿泊 勝浦温泉", "那智勝浦 観光 ホテル浦島"
    ],
    internalLinks: [
      { text: "全国洞窟温泉・洞窟風呂おすすめランキング", href: "/posts/cave-onsen-dokutsu-furo-japan-ranking-guide" },
      { text: "和歌山・那智勝浦の観光と温泉宿特集", href: "/posts/wakayama-nachikatsuura-kumano-kodo-stay" }
    ],
    intro: "自然が何万年もの歳月をかけて波で削り出した巨大な天然海蝕洞窟の中に湧き出る硫黄泉。太平洋の水平線を眺めながら波音に包まれる入浴は、まさに一生に一度は味わいたい神秘の体験です。"
  },
  {
    searchKeyword: "美ヶ原 高原ホテル",
    fallbackKeyword: "北志賀 竜王 ホテル",
    slug: "nagano-unkai-terrace-highland-resort-hotels-guide",
    title: "【長野・信州】雲海テラスが見える絶景ホテル5選！早朝の雲海パノラマと満天の星空",
    description: "長野県の標高1,500m〜2,000m超に位置する雲海リゾート特集！竜王マウンテンパークSORA terrace、美ヶ原高原、志賀高原、阿智村などで早朝に広がる幻想的な雲海と夜の星空観察が楽しめる人気ホテルを徹底紹介。",
    prefecture: "長野県",
    area: "北志賀・美ヶ原・志賀高原・阿智村",
    categories: ["雲海ホテル", "長野リゾート", "絶景", "星空", "信州", "高原ホテル"],
    keywords: [
      "長野 雲海 見える ホテル", "信州 雲海テラス 宿泊", "SORA terrace 近くのホテル",
      "美ヶ原高原 雲海 宿", "長野 標高高い ホテル 雲海", "阿智村 星空 雲海 ホテル",
      "秋 雲海 シーズン 長野", "雲海が見える宿 ランキング 長野"
    ],
    internalLinks: [
      { text: "全国の雲海が見える宿・ホテルランキング", href: "/posts/unkai-view-hotel-resort-japan-ranking" },
      { text: "長野県のおすすめ温泉宿＆信州グルメ特集", href: "/posts/nagano-onsen-ranking-hotels-guide" }
    ],
    intro: "足元一面に真っ白な雲の海が広がり、朝陽が山々を茜色に染め上げる奇跡の瞬間。雲海発生率が高まる秋の信州高原で、非日常の絶景に包まれる高原ステイをご案内します。"
  },
  {
    searchKeyword: "石和温泉 慶山",
    fallbackKeyword: "石和温泉 旅館",
    slug: "yamanashi-katsunuma-grape-isawa-onsen-hotels-guide",
    title: "【山梨・勝沼】シャインマスカット狩り×石和温泉！ワイナリー巡りと美肌湯おすすめ宿",
    description: "日本一のぶどうの郷・勝沼のぶどう狩り（シャインマスカット・巨峰）と、すぐ隣の石和温泉に泊まる秋の王道ドライブコース！ワイナリー試飲や甲州ワインビーフ、源泉かけ流し温泉宿を徹底紹介。",
    prefecture: "山梨県",
    area: "勝沼・石和温泉・笛吹・甲府",
    categories: ["果物狩り", "ぶどう狩り", "シャインマスカット", "石和温泉", "山梨ワイナリー"],
    keywords: [
      "勝沼 ぶどう狩り 石和温泉 宿泊", "山梨 シャインマスカット狩り 温泉宿",
      "石和温泉 果物狩り プラン", "勝沼 ワイナリー 宿泊 おすすめ", "石和温泉 おすすめ 旅館",
      "山梨 秋の味覚 温泉旅行", "シルバーウィーク 山梨 ぶどう狩り 宿"
    ],
    internalLinks: [
      { text: "シルバーウィーク果物狩り＆ぶどう狩り温泉旅行特集", href: "/posts/silver-week-fruit-picking-grape-travel-guide" },
      { text: "山梨県の特産品・地酒ワイン・名門宿ガイド", href: "/posts/yamanashi-famous-things-gourmet-spots-guide" }
    ],
    intro: "みずみずしく甘みたっぷりのシャインマスカットを収穫した後は、地元ワイナリーで銘醸ワインをテイスティング。夕暮れは石和温泉のやわらかな名湯で癒やされる、秋の贅沢満喫ルートです。"
  },
  {
    searchKeyword: "杉乃井ホテル",
    fallbackKeyword: "別府 温泉 ホテル",
    slug: "beppu-doroyu-mud-pack-onsen-hotels-guide",
    title: "【別府温泉】天然泥湯＆泥パックが体験できる名湯宿！美肌泥パック・鉱泥温泉ガイド",
    description: "おんせん県おおいた・別府のミネラルたっぷり天然泥湯特集！別府温泉保養ランドの濃厚な泥湯や、別府市街を見渡す大型リゾートホテルの棚湯・温泉泥パック体験、地獄蒸し料理が楽しめる人気宿を紹介。",
    prefecture: "大分県",
    area: "別府・明野・鉄輪・観海寺",
    categories: ["泥温泉", "泥パック", "別府温泉", "美肌温泉", "大分旅行"],
    keywords: [
      "別府 泥湯 宿泊", "別府温泉 泥パック ホテル", "別府温泉保養ランド 周辺 宿",
      "大分 泥温泉 おすすめ", "別府 美肌 泥パック 温泉", "別府温泉 露天風呂 ランキング",
      "別府 観海寺温泉 ホテル", "別府 地獄蒸し 温泉旅館"
    ],
    internalLinks: [
      { text: "全国の泥パック・泥温泉（泥湯）名湯ガイド", href: "/posts/mud-onsen-doroyu-pack-japan-guide" },
      { text: "大分県・別府＆由布院のおすすめ温泉宿ランキング", href: "/posts/oita-onsen-ranking-hotels-guide" }
    ],
    intro: "地下から湧き出る濃厚な天然クレイ（鉱泥）は、毛穴の汚れを吸着し古い角質を落とす天然の美容液。別府ならではの個性豊かな泥湯体験と、湯けむり立ち上る温泉街の情緒を満喫できます。"
  }
];

async function fetchWithRetry(kw, fallbackKw, retries = 3) {
  for (let i = 0; i < retries; i++) {
    await new Promise(r => setTimeout(r, 1500));
    try {
      const hotels = await searchRakutenHotels(kw, 4);
      if (hotels && hotels.length > 0) return hotels;
    } catch (e) {
      console.warn(`Retry ${i+1} for ${kw}:`, e.message);
    }
  }
  if (fallbackKw) {
    console.log(`Trying fallback keyword: "${fallbackKw}"`);
    await new Promise(r => setTimeout(r, 1500));
    return await searchRakutenHotels(fallbackKw, 4);
  }
  return [];
}

async function run() {
  for (const theme of expansionThemes) {
    const outPath = path.join(POSTS_DIR, `${theme.slug}.json`);
    if (fs.existsSync(outPath)) {
      console.log(`Already exists: ${theme.slug}`);
      continue;
    }

    console.log(`Fetching for ${theme.slug} ("${theme.searchKeyword}")...`);
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
    console.log(`✓ Created post: ${theme.slug}`);
  }
}

run().catch(console.error);
