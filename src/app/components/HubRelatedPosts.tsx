import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import { PREFECTURES_DATA } from '@/data/prefecturesData';

export interface PostSummary {
  id: string;
  title: string;
  hotel_name?: string;
  description?: string;
  image?: string;
  affiliate_url?: string;
  prefecture?: string;
  area?: string;
  categories?: string[];
  price?: string | number;
  rating?: string | number;
  date?: string;
}

let cachedPostsList: PostSummary[] | null = null;
function getPostsListData(): PostSummary[] {
  if (cachedPostsList) return cachedPostsList;
  try {
    const p = path.join(process.cwd(), 'public', 'data', 'posts-list.json');
    if (fs.existsSync(p)) {
      cachedPostsList = JSON.parse(fs.readFileSync(p, 'utf8'));
      return cachedPostsList || [];
    }
  } catch (e) {
    console.error('Failed to load posts-list.json for HubRelatedPosts:', e);
  }
  return [];
}

interface HubRelatedPostsProps {
  currentSlug: string;
  prefecture?: string;
}

export default function HubRelatedPosts({ currentSlug, prefecture }: HubRelatedPostsProps) {
  const allPosts: PostSummary[] = getPostsListData();
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

  // スラッグからテーマキーワードを推測して関連度を高める
  const themeKeywords: string[] = [];
  if (currentSlug.includes("onsen") || currentSlug.includes("hotspring") || currentSlug.includes("ryokan")) themeKeywords.push("温泉", "露天", "旅館");
  if (currentSlug.includes("sauna")) themeKeywords.push("サウナ", "水風呂");
  if (currentSlug.includes("family") || currentSlug.includes("kids") || currentSlug.includes("baby")) themeKeywords.push("子連れ", "ファミリー", "キッズ", "プール");
  if (currentSlug.includes("couple") || currentSlug.includes("anniversary") || currentSlug.includes("luxury")) themeKeywords.push("カップル", "記念日", "露天風呂付き客室", "高級");
  if (currentSlug.includes("solo") || currentSlug.includes("workation")) themeKeywords.push("一人旅", "ビジネス", "駅近");
  if (currentSlug.includes("pet") || currentSlug.includes("dog")) themeKeywords.push("ペット", "犬", "ドッグ");
  if (currentSlug.includes("all-inclusive") || currentSlug.includes("buffet") || currentSlug.includes("crab") || currentSlug.includes("gourmet")) themeKeywords.push("バイキング", "ビュッフェ", "食べ放題", "美食", "懐石");

  // ハッシュによる決定論的シード
  let seed = 0;
  for (let i = 0; i < currentSlug.length; i++) {
    seed = (seed * 31 + currentSlug.charCodeAt(i)) % 10000;
  }

  const scoreCandidate = (p: PostSummary, idx: number) => {
    let score = 0;
    const text = `${p.title || ""} ${p.hotel_name || ""} ${p.area || ""} ${p.description || ""}`;
    for (const kw of themeKeywords) {
      if (text.includes(kw)) score += 15;
    }
    const r = Number(p.rating);
    if (!isNaN(r) && r > 0) score += r * 4;
    return score + (((idx * 29 + seed) % 19) * 0.5);
  };

  // 同都道府県の宿を優先、なければテーマ合致＆高評価宿
  const samePref = targetPref ? allPosts.filter(p => p.prefecture === targetPref) : [];
  const otherPosts = allPosts.filter(p => p.prefecture !== targetPref);

  const sortedSame = [...samePref]
    .map((p, idx) => ({ p, s: scoreCandidate(p, idx) }))
    .sort((a, b) => b.s - a.s)
    .map(x => x.p);

  const sortedOther = [...otherPosts]
    .map((p, idx) => ({ p, s: scoreCandidate(p, idx) }))
    .sort((a, b) => b.s - a.s)
    .map(x => x.p);

  const selected = [
    ...sortedSame.slice(0, 4),
    ...sortedOther.slice(0, Math.max(0, 6 - Math.min(sortedSame.length, 4)))
  ].slice(0, 6);

  const prefSlug = PREFECTURES_DATA.find(p => p.name === targetPref)?.slug;
  const isFurusatoPost = currentSlug.startsWith('furusato-tax-') || currentSlug === 'furusato';

  return (
    <section className="pt-12 mt-12 border-t border-emerald-950/10 space-y-6">
      {isFurusatoPost && (
        <div className="bg-gradient-to-br from-amber-500/10 via-orange-500/5 to-amber-50 rounded-2xl p-6 border border-amber-300/80 shadow-xs mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-1.5">
              <span className="text-[11px] font-black tracking-wider text-amber-800 bg-amber-100/80 px-2.5 py-0.5 rounded-full inline-block">
                ふるさと納税トラベル公式ガイド
              </span>
              <h4 className="text-base md:text-lg font-black text-amber-950 font-journal-serif">
                楽天トラベルふるさと納税 宿泊クーポン総合案内
              </h4>
              <p className="text-xs text-stone-600 leading-relaxed max-w-2xl">
                寄付額の最大30%相当の宿泊クーポン進呈。有効期限はたっぷり3年間で予約後の「あとから適用」も可能。控除上限枠の目安計算や全国の自治体クーポン一覧もチェックできます。
              </p>
            </div>
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-2.5 shrink-0">
              <Link
                href="/furusato/"
                className="px-4 py-2.5 bg-amber-700 hover:bg-amber-800 text-white text-xs font-bold rounded-xl shadow-xs transition text-center"
              >
                総合ハブトップ →
              </Link>
              <Link
                href="/furusato/simulator/"
                className="px-4 py-2.5 bg-teal-800 hover:bg-teal-900 text-white text-xs font-bold rounded-xl shadow-xs transition text-center"
              >
                上限シミュレーター
              </Link>
              <Link
                href="/furusato/coupon-table/"
                className="px-4 py-2.5 bg-stone-800 hover:bg-stone-900 text-white text-xs font-bold rounded-xl shadow-xs transition text-center"
              >
                自治体クーポン一覧表
              </Link>
            </div>
          </div>
        </div>
      )}

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <span className="text-[10px] font-extrabold text-teal-800 uppercase tracking-widest block">
            RECOMMENDED STAYS & REVIEWS
          </span>
          <h3 className="text-xl md:text-2xl font-black font-journal-serif text-emerald-950">{targetPref ? `${targetPref}＆周辺エリアの厳選宿ルポ` : "全国の注目・高評価宿ルポ"}</h3>
        </div>
        {prefSlug && (
          <Link
            href={`/prefectures/${prefSlug}/`}
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
                  alt={`${post.hotel_name}（${post.prefecture}・${post.area || ""}）`}
                  width={600}
                  height={375}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  decoding="async"
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
                <h4 className="text-sm font-black font-journal-serif text-emerald-950 group-hover:text-teal-800 transition">{post.hotel_name}</h4>
                <p className="text-[11px] text-emerald-950/70 leading-relaxed font-medium">
                  {post.description || post.title}
                </p>
              </div>

              <div className="pt-2 border-t border-emerald-950/5">
                <Link
                  href={`/posts/${post.id}/`}
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
