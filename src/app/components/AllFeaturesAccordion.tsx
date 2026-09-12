import Link from "next/link";

export default function AllFeaturesAccordion() {
  const popularCategories = [
    { href: "/autumn-leaves", label: "全国 紅葉露天風呂", icon: "🍁", badge: "秋の旬" },
    { href: "/winter-crab-gourmet", label: "冬のカニ食べ尽くし宿", icon: "🦀", badge: "冬の味覚" },
    { href: "/winter-snow-onsen", label: "雪見露天風呂＆秘湯", icon: "❄️", badge: "冬の絶景" },
    { href: "/autumn-winter-sauna-retreat", label: "絶景サウナ＆天然水風呂", icon: "🧖", badge: "ととのう" },
    { href: "/autumn-winter-all-inclusive-luxury", label: "極上オールインクルーシブ", icon: "🍹", badge: "贅沢ステイ" },
    { href: "/autumn-winter-private-bath-ryokan", label: "客室露天＆貸切風呂", icon: "🛁", badge: "おこもり" },
    { href: "/spring-cherry-blossoms", label: "桜・お花見絶景宿", icon: "🌸", badge: "春の予感" },
    { href: "/silver-week", label: "連休・人気リゾート宿", icon: "🎯", badge: "旅行計画" },
  ];

  return (
    <section className="bg-gradient-to-br from-stone-50 to-emerald-50/40 border border-emerald-950/10 rounded-3xl p-6 md:p-8 space-y-6 shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-emerald-950/10 pb-4">
        <div className="space-y-1">
          <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100/80 px-2.5 py-0.5 rounded-full uppercase tracking-wider inline-block">
            SPECIAL CURATED HUBS
          </span>
          <h2 className="text-lg md:text-xl font-bold text-emerald-950 flex items-center gap-2 font-journal-serif">
            <span>📚</span>
            <span>目的・テーマ別の厳選特集ナビゲーション</span>
          </h2>
          <p className="text-xs text-stone-600 leading-relaxed">
            紅葉・カニ・雪見温泉からサウナ・客室露天・ひとり旅まで、編集部が厳選した人気テーマ別まとめをご案内。
          </p>
        </div>
        <Link
          href="/features"
          className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 text-xs font-bold text-teal-950 bg-teal-100 hover:bg-teal-200 border border-teal-300 rounded-xl transition shadow-sm whitespace-nowrap self-start sm:self-auto"
        >
          <span>全特集一覧（530件以上）を見る</span>
          <span>→</span>
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {popularCategories.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="group p-4 bg-white rounded-2xl border border-stone-200/80 hover:border-teal-600/40 hover:shadow-md transition flex items-center justify-between gap-2"
          >
            <div className="space-y-1">
              <span className="text-[9px] font-bold text-teal-800 bg-teal-50 px-2 py-0.5 rounded-md inline-block">
                {item.badge}
              </span>
              <span className="block text-xs md:text-sm font-bold text-stone-900 group-hover:text-teal-900 transition">
                {item.icon} {item.label}
              </span>
            </div>
            <span className="text-xs text-stone-400 group-hover:text-teal-600 group-hover:translate-x-0.5 transition-transform">
              →
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
