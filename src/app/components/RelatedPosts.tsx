import Link from 'next/link';
import { PREFECTURES_DATA } from '@/data/prefecturesData';

export interface PostSummary {
  id: string;
  title: string;
  hotel_name: string;
  prefecture: string;
  area: string;
  image: string;
  price?: string | number;
  rating?: string | number;
  categories?: string[];
  is_special_feature?: boolean;
}

interface RelatedPostsProps {
  currentPostId: string;
  prefecture: string;
  allPosts: PostSummary[];
  currentArea?: string;
  currentCategories?: string[];
  isSpecialFeature?: boolean;
}

export default function RelatedPosts({
  currentPostId,
  prefecture,
  allPosts,
  currentArea = "",
  currentCategories = [],
  isSpecialFeature = false,
}: RelatedPostsProps) {
  const otherPosts = allPosts.filter(p => p.id !== currentPostId);

  // 記事IDのハッシュに基づいて決定論的なシードを生成（クロール予算＆内部リンク分散も維持）
  let seed = 0;
  for (let i = 0; i < currentPostId.length; i++) {
    seed = (seed * 31 + currentPostId.charCodeAt(i)) % 10000;
  }

  const safePref = (prefecture || "").replace(/(県|府|東京都)$/, "");
  const cleanArea = (currentArea || "").trim();

  // 同じ都道府県の宿
  const samePrefPosts = otherPosts.filter(p => {
    const pPref = (p.prefecture || "").replace(/(県|府|東京都)$/, "");
    return p.prefecture === prefecture || (safePref && pPref === safePref);
  });
  const diffPrefPosts = otherPosts.filter(p => {
    const pPref = (p.prefecture || "").replace(/(県|府|東京都)$/, "");
    return p.prefecture !== prefecture && (!safePref || pPref !== safePref);
  });

  // 関連度スコアリング（同一サブエリア、カテゴリ一致、高評価、特集/単一宿バランス＋決定論的ローテーション）
  const scorePost = (p: PostSummary, idx: number) => {
    let score = 0;
    if (cleanArea && p.area && (p.area === cleanArea || p.area.includes(cleanArea) || cleanArea.includes(p.area))) {
      score += 40;
    }
    if (currentCategories.length > 0 && Array.isArray(p.categories)) {
      const overlap = p.categories.filter(c => currentCategories.includes(c)).length;
      score += overlap * 15;
    }
    if (Boolean(p.is_special_feature) === Boolean(isSpecialFeature)) {
      score += 8;
    }
    const r = Number(p.rating);
    if (!isNaN(r) && r > 0) {
      score += r * 4;
    }
    // 同一スコア帯の中で全記事へ均等に内部リンクを分散させる決定論的タイブレーカー
    const tieBreaker = ((idx * 37 + seed) % 23) * 0.5;
    return score + tieBreaker;
  };

  const sortedSamePref = [...samePrefPosts]
    .map((p, idx) => ({ post: p, score: scorePost(p, idx) }))
    .sort((a, b) => b.score - a.score)
    .map(item => item.post);

  const rotateArray = (arr: PostSummary[], shift: number) => {
    if (arr.length === 0) return [];
    const offset = shift % arr.length;
    return [...arr.slice(offset), ...arr.slice(0, offset)];
  };

  const rotatedDiffPref = rotateArray(diffPrefPosts, seed * 7);

  // 同都道府県から関連度上位6件、他エリアから3件、合計最大9件の内部リンクを配備
  const selectedPosts = [
    ...sortedSamePref.slice(0, 6),
    ...rotatedDiffPref.slice(0, Math.max(0, 9 - Math.min(sortedSamePref.length, 6)))
  ].slice(0, 9);

  // 都道府県ページへのリンク用slug
  const prefSlug = PREFECTURES_DATA.find(p => p.name === prefecture || p.name.replace(/(県|府|東京都)$/, "") === safePref)?.slug;

  if (selectedPosts.length === 0) return null;

  return (
    <div id="section-related" className="scroll-mt-24 pt-10 border-t border-emerald-950/10 space-y-8">
      {/* 都道府県ページへの誘導リンク */}
      {prefSlug && (
        <div className="flex items-center justify-between p-4 rounded-2xl bg-teal-50 border border-teal-800/10">
          <div className="space-y-0.5">
            <p className="text-[10px] font-extrabold text-teal-900/60 uppercase tracking-widest">MORE FROM THIS AREA</p>
            <p className="text-sm font-bold text-teal-950">
              {prefecture}の宿・観光ガイドをもっと見る
            </p>
          </div>
          <Link
            href={`/prefectures/${prefSlug}/`}
            className="shrink-0 text-xs font-extrabold text-white bg-teal-800 hover:bg-teal-700 px-4 py-2.5 rounded-xl transition"
          >
            {prefecture}を見る →
          </Link>
        </div>
      )}

      {/* 🔥 2026-2027年最重要メガヒット特集（全国キラー決定版ガイドTOP7） */}
      <div className="p-5 md:p-6 rounded-3xl bg-gradient-to-r from-stone-950 via-teal-950 to-stone-900 text-white shadow-xl border border-amber-500/30 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3">
          <div>
            <span className="text-[10px] font-black tracking-widest text-amber-300 bg-amber-950/80 px-2.5 py-0.5 rounded-full border border-amber-400/40 uppercase">
              EDITORIAL EXCLUSIVE 2026-2027
            </span>
            <h4 className="text-base md:text-lg font-black text-white mt-1 font-journal-serif">
              🔥 編集部総力取材！日本全国メガヒット決定版キラー特集
            </h4>
          </div>
          <span className="text-[11px] text-stone-400">楽天トラベル公式データ連携</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-1">
          <Link
            href="/posts/japan-onsen-ranking-best-hotels-guide/"
            className="p-3 rounded-2xl bg-white/10 hover:bg-white/20 border border-amber-400/30 hover:border-amber-400 transition block group space-y-1"
          >
            <span className="text-[10px] text-amber-300 font-bold block">♨️ 全国温泉地ランキングTOP12</span>
            <p className="text-xs font-bold text-white group-hover:text-amber-200 transition line-clamp-2">
              草津・箱根・有馬・由布院・別府・城崎の名旅館徹底比較（14,000文字）
            </p>
          </Link>
          <Link
            href="/posts/all-inclusive-onsen-resort-ranking-japan-hotels-guide/"
            className="p-3 rounded-2xl bg-white/10 hover:bg-white/20 border border-indigo-400/30 hover:border-indigo-400 transition block group space-y-1"
          >
            <span className="text-[10px] text-indigo-300 font-bold block">🍷 オールインクルーシブTOP12</span>
            <p className="text-xs font-bold text-white group-hover:text-indigo-200 transition line-clamp-2">
              ビール・地酒・夜食・貸切風呂まで全て無料の極上リゾート（15,000文字）
            </p>
          </Link>
          <Link
            href="/posts/sauna-resort-hotels-ranking-japan-guide/"
            className="p-3 rounded-2xl bg-white/10 hover:bg-white/20 border border-teal-400/30 hover:border-teal-400 transition block group space-y-1"
          >
            <span className="text-[10px] text-teal-300 font-bold block">🧖 サウナシュラン受賞宿TOP12</span>
            <p className="text-xs font-bold text-white group-hover:text-teal-200 transition line-clamp-2">
              らかんの湯・北こぶし知床・マウント富士の絶景ととのい（14,000文字）
            </p>
          </Link>
          <Link
            href="/posts/japan-private-open-air-bath-onsen-hotels-ranking-guide/"
            className="p-3 rounded-2xl bg-white/10 hover:bg-white/20 border border-teal-400/30 hover:border-teal-400 transition block group space-y-1"
          >
            <span className="text-[10px] text-teal-300 font-bold block">♨️ 客室露天＆貸切風呂TOP12</span>
            <p className="text-xs font-bold text-white group-hover:text-teal-200 transition line-clamp-2">
              箱根・草津・有馬・由布院！誰の目も気にせず名湯独占（14,000文字）
            </p>
          </Link>
          <Link
            href="/posts/japan-infinity-sky-onsen-hotels-ranking-best-guide/"
            className="p-3 rounded-2xl bg-white/10 hover:bg-white/20 border border-cyan-400/30 hover:border-cyan-400 transition block group space-y-1"
          >
            <span className="text-[10px] text-cyan-300 font-bold block">🌅 絶景インフィニティ温泉TOP12</span>
            <p className="text-xs font-bold text-white group-hover:text-cyan-200 transition line-clamp-2">
              熱海・河口湖・別府・洞爺湖！海と空に浮かぶ奇跡の天空露天（14,000文字）
            </p>
          </Link>
          <Link
            href="/posts/newyear-hatsumode-sunrise-ryokan-ranking-japan-hotels-guide/"
            className="p-3 rounded-2xl bg-white/10 hover:bg-white/20 border border-rose-400/30 hover:border-rose-400 transition block group space-y-1"
          >
            <span className="text-[10px] text-rose-300 font-bold block">⛩️ 年末年始・初詣＆初日の出</span>
            <p className="text-xs font-bold text-white group-hover:text-rose-200 transition line-clamp-2">
              伊勢神宮・出雲大社・富士山近くの開運旅館ランキング（12,000文字）
            </p>
          </Link>
          <Link
            href="/posts/furusato-tax-luxury-ryokan-ranking-japan-hotels-guide/"
            className="p-3 rounded-2xl bg-white/10 hover:bg-white/20 border border-amber-400/30 hover:border-amber-400 transition block group space-y-1"
          >
            <span className="text-[10px] text-amber-300 font-bold block">💰 実質2000円宿泊</span>
            <p className="text-xs font-bold text-white group-hover:text-amber-200 transition line-clamp-2">
              楽天ふるさと納税×高級宿！還元率30%クーポンで泊まる憧れの宿12選
            </p>
          </Link>
          <Link
            href="/posts/winter-crab-onsen-hotels-ranking-matuba-echizen-guide/"
            className="p-3 rounded-2xl bg-white/10 hover:bg-white/20 border border-red-400/30 hover:border-red-400 transition block group space-y-1"
          >
            <span className="text-[10px] text-red-300 font-bold block">🦀 冬の味覚・カニ解禁</span>
            <p className="text-xs font-bold text-white group-hover:text-red-200 transition line-clamp-2">
              松葉ガニ・越前がに・間人ガニ解禁！タグ付き活蟹が食べられる宿12選
            </p>
          </Link>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg md:text-xl font-bold font-journal-serif text-emerald-950 flex items-center gap-2">
            <span>🧭</span> <span>あわせて読みたい【{prefecture}{cleanArea && cleanArea !== prefecture ? `・${cleanArea}` : ""}＆近隣エリア】よく比較される人気宿＆宿泊記</span>
          </h3>
          <Link href="/" className="text-xs font-bold text-teal-800 hover:underline">
            すべての記事を見る →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {selectedPosts.map((post) => (
            <Link
              key={post.id}
              href={`/posts/${post.id}/`}
              className="group border border-emerald-950/10 bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition duration-200 flex flex-col"
            >
              <div className="aspect-video relative overflow-hidden bg-emerald-50">
                {post.image ? (
                  <img
                    src={post.image}
                    alt={`${post.hotel_name}（${post.prefecture}・${post.area || ""}）外観・客室イメージ`}
                    width={600}
                    height={338}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                    loading="lazy"
                    decoding="async"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-emerald-950/30 text-xs font-semibold">
                    No Image
                  </div>
                )}
                <span className="absolute top-2 left-2 bg-emerald-900/80 text-white text-[9px] font-bold px-2 py-0.5 rounded-full backdrop-blur-sm">
                  {post.prefecture}{post.area && post.area !== post.prefecture ? `・${post.area}` : ""}
                </span>
              </div>
              <div className="p-4 flex flex-col justify-between flex-grow space-y-2">
                <h4 className="text-xs font-bold text-emerald-950 line-clamp-2 group-hover:text-teal-800 transition">
                  {post.title}
                </h4>
                <div className="flex items-center justify-between text-[10px] text-teal-900/60 font-semibold pt-2 border-t border-emerald-950/5">
                  <span className="truncate max-w-[140px]">{post.hotel_name}</span>
                  {post.rating && <span className="text-amber-600 font-bold shrink-0">⭐ {post.rating}</span>}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
