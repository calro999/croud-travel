import Link from 'next/link';
import { PREFECTURES_DATA } from '@/data/prefecturesData';
import { POSTS_LIST_DATA, PostSummary } from '@/data/postsListData';

interface HubRelatedPostsProps {
  currentSlug: string;
  prefecture?: string;
}

export default function HubRelatedPosts({ currentSlug, prefecture }: HubRelatedPostsProps) {
  const allPosts: PostSummary[] = POSTS_LIST_DATA;
  if (!allPosts || allPosts.length === 0) return null;

  // 都道府県の特定（propsまたはslugから推測）
  let targetPref = prefecture || "";
  if (!targetPref) {
    for (const p of PREFECTURES_DATA) {
      if (currentSlug.includes(p.slug) || currentSlug.startsWith(p.slug)) {
        targetPref = p.name;
        break;
      }
    }
  }

  // 同都道府県の宿を優先、なければ人気宿
  const samePref = targetPref ? allPosts.filter(p => p.prefecture === targetPref) : [];
  const otherPosts = allPosts.filter(p => p.prefecture !== targetPref);

  // ハッシュによるローテーション
  let seed = 0;
  for (let i = 0; i < currentSlug.length; i++) {
    seed = (seed + currentSlug.charCodeAt(i)) % 1000;
  }

  const offsetSame = samePref.length > 0 ? seed % samePref.length : 0;
  const rotatedSame = [...samePref.slice(offsetSame), ...samePref.slice(0, offsetSame)];

  const offsetOther = otherPosts.length > 0 ? (seed * 13) % otherPosts.length : 0;
  const rotatedOther = [...otherPosts.slice(offsetOther), ...otherPosts.slice(0, offsetOther)];

  const selected = [
    ...rotatedSame.slice(0, 4),
    ...rotatedOther.slice(0, Math.max(0, 6 - Math.min(rotatedSame.length, 4)))
  ].slice(0, 6);

  const prefSlug = PREFECTURES_DATA.find(p => p.name === targetPref)?.slug;

  return (
    <section className="pt-12 mt-12 border-t border-emerald-950/10 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <span className="text-[10px] font-extrabold text-teal-800 uppercase tracking-widest block">
            RECOMMENDED STAYS & REVIEWS
          </span>
          <h3 className="text-xl md:text-2xl font-black font-journal-serif text-emerald-950">
            {targetPref ? `${targetPref}＆周辺エリアの厳選宿ルポ` : "全国の注目・人気宿ルポ"}
          </h3>
        </div>
        {prefSlug && (
          <Link
            href={`/prefectures/${prefSlug}`}
            className="text-xs font-bold text-teal-800 hover:text-teal-900 underline flex items-center gap-1"
          >
            {targetPref}の宿泊・観光ガイド一覧へ →
          </Link>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {selected.map((post) => (
          <article
            key={post.id}
            className="flex flex-col rounded-2xl overflow-hidden bg-white border border-emerald-950/10 hover:shadow-md transition duration-200 group"
          >
            <div className="aspect-[16/10] relative overflow-hidden bg-emerald-50">
              {post.image ? (
                <img
                  src={post.image}
                  alt={post.hotel_name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-xs text-emerald-950/30">
                  No Image
                </div>
              )}
              <div className="absolute top-2.5 left-2.5 flex gap-1">
                <span className="text-[9px] font-extrabold bg-teal-800 text-white px-2.5 py-0.5 rounded-full shadow-sm">
                  {post.prefecture}
                </span>
                <span className="text-[9px] font-extrabold bg-amber-600 text-white px-2.5 py-0.5 rounded-full shadow-sm">
                  {post.area}
                </span>
              </div>
              {post.price && (
                <span className="absolute bottom-2 right-2 text-[9px] font-black bg-slate-900/90 text-amber-300 px-2 py-0.5 rounded">
                  目安: ¥{Number(post.price).toLocaleString()}〜
                </span>
              )}
            </div>

            <div className="p-4 flex-grow flex flex-col justify-between space-y-3">
              <div className="space-y-1.5">
                {post.rating && (
                  <div className="text-[10px] font-extrabold text-amber-600 flex items-center gap-1">
                    <span>⭐ {post.rating}</span>
                  </div>
                )}
                <h4 className="text-sm font-black font-journal-serif text-emerald-950 line-clamp-2 group-hover:text-teal-800 transition">
                  {post.hotel_name}
                </h4>
                <p className="text-[11px] text-emerald-950/70 line-clamp-2 leading-relaxed font-medium">
                  {post.description || post.title}
                </p>
              </div>

              <div className="pt-2 border-t border-emerald-950/5">
                <Link
                  href={`/posts/${post.id}`}
                  className="block w-full text-center py-2 text-xs font-bold text-teal-950 bg-teal-50 hover:bg-teal-100 rounded-xl transition"
                >
                  宿泊ルポを読む →
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
