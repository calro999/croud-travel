import Link from "next/link";

export default function FeaturedThemesNav() {
  const themes = [
    { href: "/winter-snow-viewing-open-air-bath-ski-resort-hotels-guide/", icon: "❄️", label: "雪見露天風呂10選", desc: "白銀の絶景とにごり湯名湯" },
    { href: "/winter-crab-onsen-hotels-ranking-matuba-echizen-guide/", icon: "🦀", label: "本場カニ解禁特集", desc: "松葉・越前ガニフルコース" },
    { href: "/newyear-hatsumode-sunrise-ryokan-ranking-japan-hotels-guide/", icon: "🌅", label: "年末年始・初日の出", desc: "富士山ビュー＆開運初詣宿" },
    { href: "/posts/mineral-mud-pack-beauty-skin-onsen-hotels-guide/", icon: "🧴", label: "奇跡の美肌泥湯", desc: "別府明礬温泉の泥パック湯治" },
    { href: "/posts/gero-suimeikan-guide/", icon: "♨️", label: "下呂温泉 水明館", desc: "3つの名湯大浴場と飛騨牛" },
    { href: "/posts/charcoal-hearth-matsuba-echizen-crab-hotels-guide/", icon: "👘", label: "城崎温泉 外湯めぐり", desc: "七湯めぐりと極上松葉ガニ" },
    { href: "/posts/kusatsu-onsen-yubatake-hotels-guide/", icon: "🧪", label: "草津温泉 湯畑至近", desc: "湯畑＆白旗源泉かけ流し" },
    { href: "/posts/zao-onsen-yamagata-ranking-hotels-guide/", icon: "🌲", label: "蔵王温泉 樹氷ライトアップ", desc: "強酸性エメラルド美肌の湯" },
    { href: "/posts/arima-hyoe-koyokaku-guide/", icon: "🏯", label: "有馬温泉 兵衛向陽閣", desc: "秀吉ゆかりの老舗と濃厚金泉" },
    { href: "/posts/ibusuki-vs-kirishima-kagoshima-onsen-guide/", icon: "🏖️", label: "指宿 vs 霧島 徹底比較", desc: "天然砂むし風呂と高原温泉" },
    { href: "/posts/theme-baby-family-welcome-onsen-guide/", icon: "👑", label: "鬼怒川温泉 あさや", desc: "空中庭園露天と100種ブッフェ" },
    { href: "/furusato-tax-karuizawa-luxury-resort-villa-stay/", icon: "🎁", label: "ふるさと納税 旅行クーポン", desc: "最大30%割引で泊まる憧れリゾート" }
  ];

  return (
    <section className="bg-stone-50 rounded-3xl p-6 md:p-8 space-y-6 border border-stone-200 shadow-sm">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-stone-200 pb-4">
        <div>
          <span className="text-[10px] font-extrabold text-amber-800 bg-amber-100 px-3 py-0.5 rounded-full uppercase tracking-wider inline-block mb-1">
            SEASONAL & THEME FEATURES
          </span>
          <h2 className="text-xl md:text-2xl font-black font-journal-serif text-stone-900 flex items-center gap-2"><span>今注目の厳選テーマ・特集ガイド</span></h2>
        </div>
        <Link
          href="/features/"
          className="text-xs font-bold text-amber-800 hover:text-amber-900 bg-amber-50 hover:bg-amber-100 border border-amber-200 px-4 py-2 rounded-xl transition inline-flex items-center gap-1 self-start md:self-auto"
        >
          <span>全国の特集・特設テーマ一覧を見る</span>
          <span>→</span>
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {themes.map((t, idx) => (
          <Link
            key={idx}
            href={t.href}
            className="group bg-white hover:bg-amber-50/50 p-4 rounded-2xl border border-stone-200 hover:border-amber-300 transition-all shadow-sm flex items-start gap-3"
          >
            <span className="text-2xl group-hover:scale-110 transition-transform">{t.icon}</span>
            <div className="space-y-0.5">
              <span className="text-sm font-bold text-stone-900 group-hover:text-amber-900 block">
                {t.label}
              </span>
              <span className="text-xs text-stone-500 block leading-relaxed">
                {t.desc}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
