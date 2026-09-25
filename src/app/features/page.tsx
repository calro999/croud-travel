import fs from "fs";
import path from "path";
import { Metadata } from "next";
import Link from "next/link";
import FeaturesGrid, { FeaturePost } from "./FeaturesGrid";

export const metadata: Metadata = {
  title: "厳選！特集・まとめ記事一覧 ｜ 日本全国・旅宿クラウド",
  description: "楽天トラベルで人気の高級宿、絶景リゾート、温泉旅館、カップル旅行、ファミリー向けホテルなどを旅の目的別にまとめた特設ページです。",
  keywords: ["特集", "まとめ", "楽天トラベル", "おすすめ宿", "リゾート", "温泉", "高級ホテル"],
  openGraph: {
    title: "厳選！特集・まとめ記事一覧",
    description: "人気の高級宿、絶景リゾート、温泉旅館、カップル旅行、ファミリー向けホテルなどを旅の目的別にまとめた特設ページです。",
  }
};

export const dynamic = 'force-static';

async function getFeaturePosts(): Promise<FeaturePost[]> {
  const postsDir = path.join(process.cwd(), "src", "data", "posts");
  if (!fs.existsSync(postsDir)) {
    return [];
  }
  const files = fs.readdirSync(postsDir).filter(f => f.endsWith(".json"));
  const posts: FeaturePost[] = [];

  for (const file of files) {
    try {
      const data = JSON.parse(fs.readFileSync(path.join(postsDir, file), "utf-8"));
      // is_special_feature === true のもののみ抽出
      if (data.is_special_feature === true) {
        posts.push({
          id: data.id,
          title: data.title,
          image: data.image || (data.other_images && data.other_images[0]) || "",
          date: data.date,
          categories: data.categories || [],
          description: data.description || "",
          prefecture: data.prefecture || "全国",
        });
      }
    } catch (e) {
      console.error(`Error reading ${file}:`, e);
    }
  }

  // 新しい順（降順）にソート
  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
}

export default async function FeaturesPage() {
  const posts = await getFeaturePosts();

  return (
    <div className="space-y-10 max-w-6xl mx-auto">
      {/* パンくずナビゲーション */}
      <nav aria-label="Breadcrumb" className="text-xs font-bold text-teal-900/60 flex items-center gap-2">
        <Link href="/" className="hover:text-teal-800 transition">ホーム</Link>
        <span>/</span>
        <span className="text-emerald-950 font-bold">特集・まとめ記事一覧</span>
      </nav>

      {/* ヒーローヘッダー */}
      <section className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-teal-800 via-emerald-800 to-teal-900 p-8 md:p-12 text-white shadow-md space-y-4">
        <span className="inline-block text-[10px] font-extrabold tracking-widest bg-white/20 border border-white/30 px-3.5 py-1 rounded-full uppercase">
          EDITOR&apos;S PICK 💎
        </span>
        <h1 className="text-2xl md:text-4xl font-black font-journal-serif leading-snug">
          厳選！特集・まとめ記事一覧
        </h1>
        <p className="text-teal-100/90 text-xs md:text-sm max-w-2xl leading-relaxed font-medium">
          「特別な記念日に行きたい高級旅館」や「赤ちゃん連れでも安心のウェルカムベビーのお宿」「話題のサウナ付き絶景ホテル」など、旅の目的やテーマに合わせて厳選した最高品質のまとめ記事をお届けします。気になるタグをクリックして、あなたにぴったりの旅行プランを見つけてください。
        </p>
      </section>

      {/* 🍁 秋の行楽・美食温泉宿35選 特設まとめバナー */}
      <section className="bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 rounded-3xl p-6 md:p-8 text-white shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2">
          <span className="inline-block text-[10px] font-black tracking-wider bg-white/20 px-3 py-0.5 rounded-full uppercase">
            季節の超特別企画 🍁
          </span>
          <h2 className="text-xl md:text-2xl font-black font-journal-serif">
            【2026年最新】全国の秋の味覚＆紅葉を満喫する絶品温泉宿35選 まとめ
          </h2>
          <p className="text-amber-100 text-xs md:text-sm max-w-2xl leading-relaxed">
            北海道のカニ食べ放題から、丹波松茸、シャインマスカット狩り、伊勢海老・車海老、ブランド和牛まで！全国エリア別の秋限定グルメ＆名湯旅館を一挙公開。
          </p>
        </div>
        <Link
          href="/campaigns/autumn-gourmet-travel"
          className="w-full md:w-auto px-8 py-4 bg-white text-amber-900 hover:bg-amber-50 font-black text-xs md:text-sm rounded-2xl shadow-md transition text-center whitespace-nowrap"
        >
          秋の味覚 35選まとめを見る →
        </Link>
      </section>

      {/* ❄️ 先回り！秋冬〜春の超人気目的別・厳選比較特集 */}
      <section className="space-y-4">
        <div className="flex items-center justify-between border-b border-emerald-950/10 pb-3">
          <div>
            <span className="text-[10px] font-extrabold text-teal-800 uppercase tracking-widest block">SEARCH TREND TOPICS</span>
            <h2 className="text-lg md:text-xl font-black font-journal-serif text-emerald-950 flex items-center gap-2">
              <span>🔥</span> <span>注目検索トレンド！テーマ別・厳選宿比較ランキング特集</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              slug: 'winter-crab-gourmet-luxury-inn-ranking',
              title: '🦀 冬の活蟹・カニ尽くし名宿',
              desc: '城崎・三国・皆生のタグ付き松葉ガニ＆越前ガニ会席',
              badge: '冬グルメ'
            },
            {
              slug: 'snow-viewing-open-air-bath-secret-hotsprings',
              title: '❄️ 雪見露天＆にごり湯秘湯',
              desc: '乳頭温泉・万座・奥飛騨の白銀パノラマ露天風呂',
              badge: '雪見温泉'
            },
            {
              slug: 'new-year-sunrise-ocean-view-resorts',
              title: '🌅 初日の出・海一望リゾート',
              desc: '客室から太平洋の初日の出を拝む年末年始ステイ',
              badge: '正月旅行'
            },
            {
              slug: 'welcome-baby-family-indoor-pool-hotels',
              title: '👶 子連れ・温水プールリゾート',
              desc: '那須・熱海など室内プール＆ウェルカムベビー宿',
              badge: 'ファミリー'
            },
            {
              slug: 'couples-anniversary-private-villa-hanare',
              title: '💍 大人の離れ・客室露天宿',
              desc: '由布院・箱根の全室離れプライベートヴィラ＆部屋食',
              badge: '記念日'
            },
            {
              slug: 'private-sauna-cold-bath-retreat-hotels',
              title: '🧖 貸切サウナ＆水風呂リトリート',
              desc: '富士山・野尻湖の薪ストーブ＆湧水水風呂サウナ宿',
              badge: 'サウナ旅'
            },
            {
              slug: 'shinkansen-station-direct-ski-onsen-resorts',
              title: '🚅 新幹線駅直結スキー温泉',
              desc: '越後湯沢・軽井沢など雪道運転不要の駅直結スノー宿',
              badge: '車なし旅'
            },
            {
              slug: 'solo-travel-in-room-dining-peaceful-hotsprings',
              title: '🍵 一人旅・お部屋食の静寂温泉',
              desc: '四万・別所温泉の部屋食＆客室風呂ソロリトリート',
              badge: '一人旅'
            },
            {
              slug: 'award-winning-breakfast-gourmet-hotel-ranking',
              title: '🍳 朝食日本一・海鮮ビュッフェ',
              desc: '函館・金沢のいくら盛り放題＆焼きたてパン名門ホテル',
              badge: '絶品朝食'
            },
            {
              slug: 'golf-resort-natural-hotspring-luxury-stay',
              title: '⛳ 名門ゴルフ＆天然温泉リゾート',
              desc: '川奈・軽井沢のチャンピオンコース併設温泉ホテル',
              badge: 'ゴルフ旅'
            },
            {
              slug: 'cultural-property-heritage-sukiya-ryokan-stay',
              title: '🏛️ 登録有形文化財・名建築旅館',
              desc: '修善寺・渋温泉の宮大工の技が息づく百年の歴史宿',
              badge: '建築美'
            },
            {
              slug: 'pet-friendly-private-dogrun-luxury-villa',
              title: '🐶 愛犬同伴・ドッグラン付きヴィラ',
              desc: '伊豆高原・那須の専用ドッグラン＆客室露天風呂宿',
              badge: 'ペット旅'
            },
            {
              slug: 'early-spring-kawazu-sakura-plum-blossom-hotsprings',
              title: '🌸 早咲き河津桜＆梅まつり温泉',
              desc: '伊豆河津・熱海のひと足早い春の絶景花見露天風呂',
              badge: '春先取り'
            },
            {
              slug: 'craft-beer-brewery-hotel-ranking-stay',
              title: '🍺 クラフトビール＆ブルワリー宿',
              desc: '軽井沢・修善寺の醸造所直結＆出来立て生ビール宿',
              badge: 'ビール旅'
            },
            {
              slug: 'dark-sky-starry-observatory-resort-stay',
              title: '🌌 星空保護区・天体観測リゾート',
              desc: '阿智村・八ヶ岳の満天の天の川＆大型天体望遠鏡ホテル',
              badge: '星空ツアー'
            },
            {
              slug: 'infinity-ocean-onsen-panoramic-luxury-stay',
              title: '🌊 インフィニティ露天風呂名宿',
              desc: '熱海・南紀白浜の海と空に溶け込むパノラマ温泉',
              badge: '絶景温泉'
            },
            {
              slug: 'girls-trip-afternoon-tea-luxury-spa-stay',
              title: '🫖 アフタヌーンティー＆極上スパ',
              desc: '京都・横浜の三段スタンドスイーツ＆アロマリゾート',
              badge: '女子旅'
            },
            {
              slug: 'sea-of-clouds-sky-terrace-resort-stay',
              title: '☁️ 雲海テラス＆天空パノラマ宿',
              desc: 'トマム・志賀高原の早朝雲上デッキ＆天空露天風呂',
              badge: '天空ホテル'
            },
            {
              slug: 'private-onsen-sauna-charter-luxury-villa',
              title: '🏡 一棟貸切・温泉＆サウナ付きヴィラ',
              desc: '白馬・那須の完全貸切プライベートサウナ＆源泉掛け流し',
              badge: '一棟貸し'
            },
          ].map(item => (
            <Link
              key={item.slug}
              href={`/${item.slug}`}
              className="group bg-white p-5 rounded-2xl border border-emerald-950/10 hover:border-teal-700/40 hover:shadow-md transition space-y-2 block"
            >
              <span className="text-[9px] font-extrabold text-teal-800 bg-teal-50 px-2.5 py-0.5 rounded-full inline-block">
                {item.badge}
              </span>
              <h3 className="text-sm font-bold text-emerald-950 group-hover:text-teal-800 transition line-clamp-1">
                {item.title}
              </h3>
              <p className="text-xs text-emerald-950/70 line-clamp-2">
                {item.desc}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* 特集記事グリッド（クライアントコンポーネント） */}
      <FeaturesGrid initialPosts={posts} />
    </div>
  );
}
