"use client";

import { useState, useEffect } from "react";

interface Post {
  id: string;
  title: string;
  hotel_name: string;
  description?: string;
  review: string;
  image: string;
  other_images: string[];
  affiliate_url: string;
  prefecture: string;
  area: string;
  categories: string[];
  price: string | number;
  rating: string | number;
  date: string;
}

const AREAS = ["すべて", "北海道", "東北", "関東", "甲信越", "北陸", "東海", "近畿", "中国", "四国", "九州", "沖縄"];
const CATEGORIES = ["すべて", "温泉旅行", "高級宿・リゾート", "グルメ・美食", "アクティビティ・自然", "ファミリー・女子旅"];

const PREFECTURES = [
  "すべて", "北海道", "青森県", "岩手県", "宮城県", "秋田県", "山形県", "福島県",
  "茨城県", "栃木県", "群馬県", "埼玉県", "千葉県", "東京都", "神奈川県",
  "新潟県", "富山県", "石川県", "福井県", "山梨県", "長野県", "岐阜県", "静岡県",
  "愛知県", "三重県", "滋賀県", "京都府", "大阪府", "兵庫県", "奈良県", "和歌山県",
  "鳥取県", "島根県", "岡山県", "広島県", "山口県", "徳島県", "香川県", "愛媛県",
  "高知県", "福岡県", "佐賀県", "長崎県", "熊本県", "大分県", "宮崎県", "鹿児島県", "沖縄県"
];

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedArea, setSelectedArea] = useState<string>("すべて");
  const [selectedCategory, setSelectedCategory] = useState<string>("すべて");
  const [selectedPref, setSelectedPref] = useState<string>("すべて");
  const [loading, setLoading] = useState<boolean>(true);
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);

  useEffect(() => {
    fetch("/data/posts.json")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error loading posts:", err);
        setLoading(false);
      });
  }, []);

  // フィルタリング処理
  const filteredPosts = posts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.hotel_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.review.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesArea = selectedArea === "すべて" || post.area === selectedArea;
    const matchesCategory = selectedCategory === "すべて" || post.categories?.includes(selectedCategory);
    const matchesPref = selectedPref === "すべて" || post.prefecture === selectedPref;

    return matchesSearch && matchesArea && matchesCategory && matchesPref;
  });

  const hasActiveFilters = searchQuery || selectedArea !== "すべて" || selectedCategory !== "すべて" || selectedPref !== "すべて";

  return (
    <div className="space-y-8 md:space-y-12">
      {/* 旅行雑誌風 ヒーロービジュアル */}
      <section className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-teal-900 to-emerald-950 p-8 md:p-14 border border-emerald-950/20 shadow-lg flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-amber-500/[0.04] rounded-full filter blur-3xl pointer-events-none" />
        
        <div className="relative max-w-2xl space-y-5">
          <span className="inline-flex text-[10px] font-extrabold tracking-widest text-amber-500 bg-amber-500/10 border border-amber-500/20 px-3.5 py-1 rounded-full uppercase">
            厳選宿のデジタル旅行誌 📜
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            日本の、まだ見ぬ美景と<br />
            <span className="bg-gradient-to-r from-teal-100 via-amber-200 to-emerald-100 bg-clip-text text-transparent">
              極上の湯宿をめぐる旅
            </span>
          </h1>
          <p className="text-emerald-100/80 leading-relaxed text-xs md:text-sm max-w-lg font-medium">
            旅ライターが厳選した、楽天トラベルでおもわず予約したくなる「一生に一度は泊まりたい宿」を特集。地方や目的別に簡単検索。あなただけの至福の旅がここから始まります。
          </p>
        </div>

        {/* 雑誌スタッツカウンター風UI */}
        <div className="w-full md:w-auto grid grid-cols-2 gap-4 bg-white/5 border border-white/10 p-6 rounded-2xl md:min-w-[240px] backdrop-blur-md">
          <div className="text-center space-y-1">
            <span className="block text-3xl font-black text-amber-400 tracking-tight font-journal-serif">{posts.length}</span>
            <span className="text-[10px] font-bold text-emerald-200/60 uppercase tracking-widest block">特集記事</span>
          </div>
          <div className="text-center space-y-1 border-l border-white/10">
            <span className="block text-3xl font-black text-white tracking-tight font-journal-serif">47</span>
            <span className="text-[10px] font-bold text-emerald-200/60 uppercase tracking-widest block">都道府県対応</span>
          </div>
        </div>
      </section>

      {/* 検索・絞り込みコントロールパネル */}
      <section className="bg-white border border-emerald-900/5 rounded-2xl p-5 md:p-6 shadow-sm space-y-5">
        <div className="flex items-center justify-between md:hidden">
          <span className="text-xs font-bold text-emerald-950/80 flex items-center gap-1">🔍 旅を探す</span>
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="text-xs font-bold text-teal-800 bg-teal-50 px-4 py-2 rounded-xl border border-teal-800/10 cursor-pointer"
          >
            {isFilterOpen ? "閉じる" : "フィルターを表示"}
          </button>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-4 gap-4 ${isFilterOpen ? "block" : "hidden md:grid"}`}>
          {/* キーワード */}
          <div className="space-y-1.5">
            <label className="text-[10px] font-extrabold text-teal-900/60 uppercase tracking-wider block">キーワード検索</label>
            <input
              type="text"
              placeholder="宿名・エリア・温泉など..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full text-xs bg-emerald-50/30 border border-emerald-950/10 rounded-xl px-4 py-3 text-emerald-950 placeholder-emerald-950/30 focus:outline-none focus:border-teal-700 transition"
            />
          </div>

          {/* エリア/地方 */}
          <div className="space-y-1.5">
            <label className="text-[10px] font-extrabold text-teal-900/60 uppercase tracking-wider block">地方・エリア</label>
            <select
              value={selectedArea}
              onChange={(e) => {
                setSelectedArea(e.target.value);
                setSelectedPref("すべて"); // エリア変更時に都道府県をリセット
              }}
              className="w-full text-xs bg-emerald-50/30 border border-emerald-950/10 rounded-xl px-4 py-3 text-emerald-950 focus:outline-none focus:border-teal-700 transition cursor-pointer"
            >
              {AREAS.map((a) => (
                <option key={a} value={a}>{a}</option>
              ))}
            </select>
          </div>

          {/* 都道府県 */}
          <div className="space-y-1.5">
            <label className="text-[10px] font-extrabold text-teal-900/60 uppercase tracking-wider block">都道府県</label>
            <select
              value={selectedPref}
              onChange={(e) => setSelectedPref(e.target.value)}
              className="w-full text-xs bg-emerald-50/30 border border-emerald-950/10 rounded-xl px-4 py-3 text-emerald-950 focus:outline-none focus:border-teal-700 transition cursor-pointer"
            >
              {PREFECTURES.map((p) => (
                <option key={p} value={p}>{p}</option>
              ))}
            </select>
          </div>

          {/* 旅行テーマ/カテゴリ */}
          <div className="space-y-1.5">
            <label className="text-[10px] font-extrabold text-teal-900/60 uppercase tracking-wider block">旅のテーマ</label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full text-xs bg-emerald-50/30 border border-emerald-950/10 rounded-xl px-4 py-3 text-emerald-950 focus:outline-none focus:border-teal-700 transition cursor-pointer"
            >
              {CATEGORIES.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>
        </div>

        {hasActiveFilters && (
          <div className="flex items-center justify-between text-xs pt-4 border-t border-emerald-950/5">
            <span className="text-emerald-950/60 font-medium">
              該当の旅行特集: <strong className="text-teal-800 font-bold">{filteredPosts.length}</strong> 件
            </span>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedArea("すべて");
                setSelectedCategory("すべて");
                setSelectedPref("すべて");
              }}
              className="text-teal-800 font-bold hover:text-teal-700 cursor-pointer"
            >
              条件をリセット ×
            </button>
          </div>
        )}
      </section>

      {/* 特集カードグリッド */}
      {loading ? (
        <div className="text-center py-24">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-teal-700 border-r-2" />
          <p className="mt-4 text-xs text-emerald-950/40 font-semibold">最新記事を編集中...</p>
        </div>
      ) : filteredPosts.length === 0 ? (
        <div className="text-center py-24 border border-dashed border-emerald-950/10 rounded-2xl bg-white shadow-sm">
          <p className="text-emerald-950/40 text-xs font-semibold">ご指定のエリア・テーマにマッチする特集記事は現在準備中です。</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="flex flex-col rounded-2xl overflow-hidden bg-white border border-emerald-950/5 card-hover-effect shadow-sm"
            >
              {/* 大画像アイキャッチ */}
              <div className="aspect-[16/10] relative overflow-hidden bg-emerald-50 flex items-center justify-center border-b border-emerald-950/5">
                {post.image ? (
                  <img
                    src={post.image}
                    alt={post.hotel_name}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-105"
                    loading="lazy"
                  />
                ) : (
                  <span className="text-emerald-950/30 text-xs font-semibold">No Image</span>
                )}
                {/* 地方/都道府県タグ */}
                <div className="absolute top-4 left-4 flex gap-1.5">
                  <span className="text-[9px] font-extrabold bg-teal-800 text-white px-3 py-1 rounded-full shadow-sm">
                    {post.area}
                  </span>
                  <span className="text-[9px] font-extrabold bg-amber-600 text-white px-3 py-1 rounded-full shadow-sm">
                    {post.prefecture}
                  </span>
                </div>
                {post.price && (
                  <span className="absolute bottom-4 right-4 text-[10px] font-black bg-slate-900/90 text-amber-300 px-3 py-1 rounded-lg">
                    目安: ¥{Number(post.price).toLocaleString()}〜
                  </span>
                )}
              </div>

              {/* メモリアルな情報レイアウト */}
              <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-[9px] font-bold text-emerald-950/40">
                    <span>{post.date}</span>
                    {post.rating && (
                      <span className="text-amber-600 font-extrabold flex items-center gap-0.5">
                        ⭐ {post.rating}
                      </span>
                    )}
                  </div>
                  <h2 className="text-base md:text-lg font-black font-journal-serif leading-snug text-emerald-950 line-clamp-2 hover:text-teal-800 transition">
                    {post.hotel_name}
                  </h2>
                  <div
                    className="text-xs text-emerald-950/60 leading-relaxed line-clamp-3 font-medium"
                    dangerouslySetInnerHTML={{ __html: post.review }}
                  />
                </div>

                <div className="pt-4 flex flex-col gap-3 border-t border-emerald-950/5">
                  {/* カテゴリ表示 */}
                  <div className="flex flex-wrap gap-1">
                    {post.categories?.map((cat) => (
                      <span key={cat} className="text-[9px] font-bold text-teal-800 bg-teal-50 border border-teal-800/10 px-2.5 py-0.5 rounded-full">
                        #{cat}
                      </span>
                    ))}
                  </div>
                  <a
                    href={`/posts/${post.id}`}
                    className="w-full text-center text-xs font-extrabold text-white bg-gradient-to-r from-teal-800 to-emerald-900 hover:from-teal-700 hover:to-emerald-800 py-3 rounded-xl shadow transition duration-200 cursor-pointer"
                  >
                    この宿の特集ルポを読む 🧭
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
