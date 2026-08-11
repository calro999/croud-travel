import fs from "fs";
import path from "path";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "【2026年最新】全国の秋の味覚＆紅葉を満喫する絶品温泉宿特集まとめ35選 ｜ 日本全国・旅宿クラウド",
  description: "北海道のカニ・いくら、北陸のズワイガニ・甘エビ、関西・箱根の松茸、長野のシャインマスカット・信州りんご、九州の伊勢海老・車海老など、全国8エリアの秋の味覚＆紅葉名湯旅館35選を網羅！",
  keywords: ["秋の味覚", "カニ食べ放題", "松茸料理", "シャインマスカット", "伊勢海老", "紅葉温泉", "楽天トラベル", "秋旅行"],
  openGraph: {
    title: "【2026年最新】全国の秋の味覚＆紅葉を満喫する絶品温泉宿特集まとめ35選",
    description: "カニ・松茸・フルーツ狩り・伊勢海老・秋鮭・和牛など、全国エリア別の秋の味覚＆名湯温泉宿を一挙まとめ！",
  }
};

export const dynamic = 'force-static';

interface AutumnPostSummary {
  id: string;
  title: string;
  prefecture: string;
  area: string;
  hotel_name: string;
  image: string;
  affiliate_url: string;
  description: string;
  categories: string[];
}

async function getAutumnPosts(): Promise<AutumnPostSummary[]> {
  const postsDir = path.join(process.cwd(), "src", "data", "posts");
  if (!fs.existsSync(postsDir)) return [];

  const files = fs.readdirSync(postsDir).filter(f => f.startsWith("autumn-") && f.endsWith(".json"));
  const posts: AutumnPostSummary[] = [];

  for (const file of files) {
    try {
      const data = JSON.parse(fs.readFileSync(path.join(postsDir, file), "utf-8"));
      posts.push({
        id: data.id,
        title: data.title,
        prefecture: data.prefecture || "全国",
        area: data.area || "",
        hotel_name: data.hotel_name || "",
        image: data.image || "",
        affiliate_url: data.affiliate_url || "",
        description: data.description || "",
        categories: data.categories || []
      });
    } catch (e) {
      console.error(`Error loading ${file}:`, e);
    }
  }

  // 都道府県順にソート
  return posts;
}

export default async function AutumnGourmetTravelPage() {
  const posts = await getAutumnPosts();

  // エリア別グループ化
  const regions: { [key: string]: AutumnPostSummary[] } = {
    "北海道エリア 🦀鮭いくら": posts.filter(p => p.prefecture === "北海道"),
    "東北エリア 🍎秋鮭山形牛": posts.filter(p => ["青森県", "宮城県", "山形県"].includes(p.prefecture)),
    "関東・甲信越エリア 🍁松茸栗フルーツ": posts.filter(p => ["栃木県", "埼玉県", "神奈川県", "山梨県", "長野県"].includes(p.prefecture)),
    "北陸エリア 🦀ズワイガニ能登牛": posts.filter(p => ["石川県", "福井県", "富山県"].includes(p.prefecture)),
    "東海エリア 🦐伊勢海老飛騨牛": posts.filter(p => ["静岡県", "岐阜県", "三重県"].includes(p.prefecture)),
    "関西エリア 🍄但馬牛丹波松茸クエ": posts.filter(p => ["京都府", "兵庫県", "和歌山県"].includes(p.prefecture)),
    "中国・四国エリア 🦪カツオ牡蠣オリーブ牛": posts.filter(p => ["鳥取県", "島根県", "広島県", "香川県", "愛媛県", "高知県"].includes(p.prefecture)),
    "九州エリア 🦞活車海老佐賀牛砂むし": posts.filter(p => ["佐賀県", "熊本県", "大分県", "宮崎県", "鹿児島県"].includes(p.prefecture)),
  };

  return (
    <div className="space-y-10 max-w-6xl mx-auto px-4 py-6">
      {/* パンくずナビ */}
      <nav aria-label="Breadcrumb" className="text-xs font-bold text-teal-900/60 flex items-center gap-2">
        <Link href="/" className="hover:text-teal-800 transition">ホーム</Link>
        <span>/</span>
        <Link href="/features" className="hover:text-teal-800 transition">特集・まとめ記事一覧</Link>
        <span>/</span>
        <span className="text-amber-950 font-bold">秋の味覚＆紅葉温泉宿35選</span>
      </nav>

      {/* ヒーローヘッダー */}
      <section className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-amber-600 via-orange-600 to-amber-800 p-8 md:p-12 text-white shadow-xl space-y-4">
        <span className="inline-block text-[10px] font-black tracking-widest bg-white/20 border border-white/30 px-3.5 py-1 rounded-full uppercase">
          AUTUMN GOURMET & HOT SPRINGS 🍁
        </span>
        <h1 className="text-2xl md:text-4xl font-black font-journal-serif leading-snug">
          【2026年最新】全国の秋の味覚＆紅葉を満喫する絶品温泉宿特集 35選
        </h1>
        <p className="text-amber-100/90 text-xs md:text-sm max-w-3xl leading-relaxed font-medium">
          ズワイガニ・タラバガニ食べ放題、丹波松茸の土瓶蒸し、シャインマスカット・完熟みかん狩り、伊勢海老・活車海老の踊り食い、A5ブランド和牛など！日本全国のエリア別「秋の最上級グルメ」と絶景名湯を同時に愉しめる厳選特集を一挙にまとめました。
        </p>
      </section>

      {/* エリア別コンテンツ一覧 */}
      <div className="space-y-12">
        {Object.entries(regions).map(([regionName, regionPosts]) => {
          if (regionPosts.length === 0) return null;

          return (
            <section key={regionName} className="space-y-6">
              <h2 className="text-xl md:text-2xl font-black text-amber-950 border-b-4 border-amber-500 pb-2 flex items-center gap-2">
                <span>{regionName}</span>
                <span className="text-xs font-bold text-amber-700 bg-amber-100 px-3 py-1 rounded-full">
                  {regionPosts.length} 特集
                </span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {regionPosts.map((post) => (
                  <article
                    key={post.id}
                    className="bg-white rounded-3xl border border-stone-200 shadow-md hover:shadow-xl transition duration-300 overflow-hidden flex flex-col justify-between"
                  >
                    <div>
                      <div className="relative aspect-video overflow-hidden bg-stone-100">
                        {post.image ? (
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover hover:scale-105 transition duration-500"
                            loading="lazy"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-amber-800 font-bold text-sm bg-amber-50">
                            🍁 秋の味覚 温泉宿
                          </div>
                        )}
                        <span className="absolute top-3 left-3 bg-amber-600 text-white text-[10px] font-black px-3 py-1 rounded-full shadow">
                          {post.prefecture}
                        </span>
                      </div>

                      <div className="p-5 space-y-3">
                        <h3 className="text-sm font-bold text-stone-900 line-clamp-2 leading-snug">
                          {post.title}
                        </h3>

                        <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed">
                          {post.description}
                        </p>

                        <div className="pt-2 border-t border-stone-100">
                          <p className="text-[11px] font-bold text-amber-900 flex items-center gap-1">
                            <span>🏨 おすすめ宿:</span>
                            <span className="text-stone-800 line-clamp-1">{post.hotel_name}</span>
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="p-5 pt-0 space-y-2">
                      <Link
                        href={`/posts/${post.id}`}
                        className="block w-full text-center px-4 py-2.5 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white text-xs font-black rounded-xl shadow transition"
                      >
                        特集記事を詳しく読む 📖
                      </Link>

                      {post.affiliate_url && (
                        <a
                          href={post.affiliate_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block w-full text-center px-4 py-2 bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-300 text-[11px] font-extrabold rounded-xl transition"
                        >
                          ✈️ 楽天トラベルでプランを見る
                        </a>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            </section>
          );
        })}
      </div>

      {/* ボトム案内 */}
      <section className="bg-amber-50 border border-amber-200 rounded-3xl p-8 text-center space-y-4">
        <h2 className="text-lg md:text-xl font-black text-amber-950">
          🍁 秋の旅行予約は「楽天トラベル 5と0のつく日」が一番おトク！
        </h2>
        <p className="text-xs text-stone-700 max-w-2xl mx-auto leading-relaxed font-medium">
          毎月「5」と「0」のつく日は対象の高級宿・温泉宿で使える最大20%OFFクーポンが配布されます。秋の味覚プランや紅葉時期のお部屋は大変人気ですので、事前エントリーと早めのチェックがおすすめです。
        </p>
        <div className="pt-2">
          <Link
            href="/campaigns"
            className="inline-block px-8 py-3.5 bg-amber-600 hover:bg-amber-700 text-white text-xs font-black rounded-2xl shadow-lg transition"
          >
            最新の楽天トラベルクーポン・セール一覧へ 🎁
          </Link>
        </div>
      </section>
    </div>
  );
}
