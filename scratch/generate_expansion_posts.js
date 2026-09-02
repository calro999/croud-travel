const fs = require('fs');
const path = require('path');
const { searchRakutenHotels } = require('../rakuten_api_helper');

const POSTS_DIR = path.join(__dirname, '..', 'src', 'data', 'posts');

// 検索パフォーマンスが高い主要クラスタと、横展開する切り口（カニバリ回避・ロングテール特化）
const expansionThemes = [
  // 1. グランピング・アウトドア横展開
  {
    searchKeyword: "グランピング サウナ 富士山",
    slug: "fuji-glamping-sauna-private-view-guide",
    title: "【富士山×サウナ付き】プライベートグランピング厳選5選！富士山麓の絶景外気浴と星空BBQ",
    description: "富士山を正面に望む極上サウナ付きグランピング特集！河口湖・山中湖・朝霧高原でバレルサウナやテントサウナを完備したプライベート空間。焚き火や本格BBQ、秋のシルバーウィークや週末リトリートに最適な宿を紹介。",
    prefecture: "山梨県",
    area: "富士五湖・河口湖・山中湖",
    categories: ["グランピング", "サウナ", "富士山", "絶景", "BBQ", "アウトドア"],
    keywords: [
      "富士山 サウナ グランピング", "グランピング サウナ 富士山", "河口湖 グランピング サウナ",
      "山中湖 グランピング 富士山ビュー", "バレルサウナ グランピング 関東", "富士五湖 プライベートサウナ 宿泊",
      "シルバーウィーク グランピング 富士山", "秋 サウナ グランピング"
    ],
    internalLinks: [
      { text: "シルバーウィーク厳選グランピング特集", href: "/posts/silver-week-glamping-luxury-guide" },
      { text: "ドットグランピング富士山の宿泊レポート", href: "/posts/dot-glamping-fuji-guide" }
    ],
    intro: "雄大な富士山を間近に仰ぎながら、本格的なロウリュサウナと富士の天然水風呂でととのう至福の休日。周囲の視線を気にせず過ごせる完全プライベートなドームテントやヴィラを厳選しました。"
  },
  {
    searchKeyword: "グランピング 関西 温泉",
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
      { text: "関西エリアのグランピング＆秋旅ガイド", href: "/posts/silver-week-glamping-luxury-guide" },
      { text: "淡路島・洲本温泉の旅館おすすめ", href: "/posts/sumoto-onsen-awaji-hotels-guide" }
    ],
    intro: "アウトドアの開放感と、極上の温泉癒やしを同時に叶える関西の温泉付きグランピング。手ぶらで豪華BBQを楽しんだ後は、星空の下でプライベート温泉に浸かる贅沢なひとときをお過ごしいただけます。"
  },

  // 2. 下呂温泉横展開（露天風呂付き客室・飛騨牛美食・一人旅）
  {
    searchKeyword: "下呂温泉 露天風呂付き客室",
    slug: "gero-onsen-private-open-air-bath-hotels-guide",
    title: "【下呂温泉】客室露天風呂付きおすすめ宿6選！カップル・記念日に泊まりたい美肌の湯",
    description: "日本三名泉・下呂温泉で客室露天風呂を備えた人気旅館・ホテルを厳選！飛騨川の渓流美や温泉街の夜景を独り占めできるプライベート温泉、お部屋食で味わうA5等級飛騨牛懐石プランを詳しく紹介。",
    prefecture: "岐阜県",
    area: "下呂・飛騨",
    categories: ["下呂温泉", "客室露天風呂", "カップル旅行", "飛騨牛", "岐阜温泉"],
    keywords: [
      "下呂温泉 露天風呂付き客室", "下呂温泉 客室露天風呂 おすすめ", "下呂 露天風呂付き 部屋食",
      "下呂温泉 カップル 宿", "下呂温泉 記念日 高級宿", "下呂温泉 飛騨牛 部屋食 露天風呂",
      "下呂温泉 プライベート温泉", "岐阜 露天風呂付き客室 ランキング"
    ],
    internalLinks: [
      { text: "下呂温泉おすすめ人気宿ランキング＆アクセスガイド", href: "/posts/gero-onsen-ranking-gourmet-hotels-guide" },
      { text: "岐阜県の有名ご当地グルメ＆地酒特集", href: "/posts/gifu-famous-hida-beef-sake-hotels-guide" }
    ],
    intro: "「日本三名泉」と讃えられる下呂の滑らかな美肌湯を、お部屋の露天風呂で24時間いつでも堪能。周囲に気兼ねなく大切な人と語らい、飛騨の美味に舌鼓を打つ極上の宿泊体験をお届けします。"
  },
  {
    searchKeyword: "下呂温泉 飛騨牛 料理",
    slug: "gero-onsen-hida-beef-gourmet-ryokan-guide",
    title: "【下呂温泉】A5等級飛騨牛を堪能できる美食旅館7選！ステーキ・しゃぶしゃぶ・朴葉味噌焼き",
    description: "下呂温泉で最高級の飛騨牛料理が味わえる料理自慢の温泉旅館特集！とろけるようなA5ランク飛騨牛サーロイン、伝統の朴葉味噌焼き、飛騨牛握り寿司から温泉街の食べ歩きグルメまで徹底解説。",
    prefecture: "岐阜県",
    area: "下呂・高山・飛騨古川",
    categories: ["下呂温泉", "飛騨牛", "ご当地グルメ", "美食旅館", "岐阜旅行"],
    keywords: [
      "下呂温泉 飛騨牛 旅館", "下呂温泉 美食 宿 おすすめ", "下呂 飛騨牛 ステーキ 宿泊",
      "下呂温泉 朴葉味噌 旅館", "下呂温泉 料理が美味しい宿", "下呂 飛騨牛 食べ比べ プラン",
      "下呂温泉 ご当地グルメ 宿", "岐阜 飛騨牛 温泉旅館"
    ],
    internalLinks: [
      { text: "下呂温泉おすすめ人気宿ランキング", href: "/posts/gero-onsen-ranking-gourmet-hotels-guide" },
      { text: "飛騨高山・白川郷周辺の美食宿ガイド", href: "/posts/hida-takayama-onsen-hotels-guide" }
    ],
    intro: "きめ細やかなサシと芳醇な香りが自慢の岐阜のブランド和牛「飛騨牛」。下呂温泉の老舗旅館が腕を振るう炭火焼きやしゃぶしゃぶは、旅の記憶に深く残る感動の味わいです。"
  },

  // 3. 東北新幹線×温泉横展開（駅直結・レンタカー不要・秋の秘湯）
  {
    searchKeyword: "東北新幹線 温泉 駅から近い",
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

  // 4. 洞窟温泉・秘湯の横展開（自然湧出・手掘り・絶景岩風呂）
  {
    searchKeyword: "勝浦温泉 ホテル浦島 忘帰洞",
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

  // 5. 雲海テラス・絶景高台ホテル横展開
  {
    searchKeyword: "雲海 ホテル 長野 絶景",
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

  // 6. 果物狩り・ぶどう狩り×ワイナリー・温泉宿横展開
  {
    searchKeyword: "山梨 勝沼 ぶどう狩り 石和温泉",
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

  // 7. 泥パック・泥温泉横展開
  {
    searchKeyword: "別府 泥湯 鉱泥温泉 杉乃井ホテル",
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
  },

  // 8. しまなみ海道×絶景展望温泉横展開
  {
    searchKeyword: "しまなみ海道 温泉 今治",
    slug: "shimanami-kaido-view-onsen-hotels-imabari-guide",
    title: "【しまなみ海道】瀬戸内海を一望する絶景温泉宿！今治・来島海峡大橋の夕景と海鮮会席",
    description: "しまなみ海道のサイクリング・ドライブ拠点となる今治・瀬戸内エリアの絶景温泉ホテル特集！来島海峡大橋や多島美を見渡す展望露天風呂、来島鯛や伊勢海老の海鮮料理、湯ノ浦温泉の名宿を紹介。",
    prefecture: "愛媛県",
    area: "今治・しまなみ海道・湯ノ浦温泉",
    categories: ["しまなみ海道", "今治温泉", "絶景露天風呂", "サイクリング", "愛媛旅行"],
    keywords: [
      "しまなみ海道 温泉 宿", "今治 温泉旅館 おすすめ", "しまなみ海道 絶景 ホテル 温泉",
      "来島海峡大橋 見える 温泉宿", "湯ノ浦温泉 おすすめ ホテル", "しまなみ海道 サイクリング 宿泊 温泉",
      "愛媛 海鮮 美食 温泉宿", "今治 露天風呂付き客室"
    ],
    internalLinks: [
      { text: "しまなみ海道・今治の温泉宿＆絶景特集", href: "/posts/shimanami-kaido-imabari-onsen-hotels-guide" },
      { text: "愛媛県の名物グルメ＆道後・今治宿泊ガイド", href: "/posts/ehime-famous-things-gourmet-spots-guide" }
    ],
    intro: "青い海と島々を渡る風が心地よい「しまなみ海道」。夕暮れ時に茜色へ染まる瀬戸内海を展望露天風呂から眺め、獲れたての新鮮な魚介を味わう極上の島旅をご案内します。"
  }
];

async function generateAll() {
  console.log(`Starting generation of ${expansionThemes.length} specialized expansion posts using Rakuten API...`);
  
  let successCount = 0;

  for (const theme of expansionThemes) {
    console.log(`\n--- Fetching hotels for theme: ${theme.title} (Keyword: "${theme.searchKeyword}") ---`);
    try {
      const hotels = await searchRakutenHotels(theme.searchKeyword, 4);
      if (!hotels || hotels.length === 0) {
        console.warn(`No hotels found for ${theme.searchKeyword}, trying broader keyword...`);
        continue;
      }

      const mainHotel = hotels[0];
      const otherHotels = hotels.slice(1);

      // Build structured review content
      let reviewHtml = `<h2 class="text-2xl font-bold text-stone-900 border-b-2 border-amber-500 pb-2 mb-4">${theme.title}</h2>\n`;
      reviewHtml += `<p class="text-xs text-stone-700 leading-relaxed my-2">${theme.intro}</p>\n\n`;

      reviewHtml += `<h3 class="text-lg font-bold text-stone-900 border-b border-amber-300 pb-1 mt-6 mb-3">🏨 厳選おすすめ宿泊施設</h3>\n`;
      reviewHtml += `<div class="space-y-6 my-4">\n`;

      // Main hotel card
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

      // Other hotels list
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

      // Internal Links Section
      if (theme.internalLinks && theme.internalLinks.length > 0) {
        reviewHtml += `<div class="my-6 p-4 bg-amber-50/50 rounded-xl border border-amber-200">
  <h4 class="font-bold text-xs text-amber-950 mb-2">📌 あわせて読みたい関連旅行ガイド</h4>
  <ul class="text-xs text-amber-900 space-y-1.5 list-disc list-inside">
    ${theme.internalLinks.map(l => `<li><a href="${l.href}" class="underline hover:text-amber-700">${l.text}</a></li>`).join('\n    ')}
  </ul>
</div>\n\n`;
      }

      // Final CTA
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

      const outPath = path.join(POSTS_DIR, `${theme.slug}.json`);
      fs.writeFileSync(outPath, JSON.stringify(postJson, null, 2), 'utf8');
      console.log(`✓ Created post: ${theme.slug}`);
      successCount++;

      // Small delay to respect API rate limits
      await new Promise(r => setTimeout(r, 600));
    } catch (err) {
      console.error(`Error generating for ${theme.slug}:`, err);
    }
  }

  console.log(`\nSuccessfully created ${successCount} high-quality specialized expansion posts!`);
}

generateAll().catch(console.error);
