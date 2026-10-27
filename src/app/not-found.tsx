import Link from "next/link";
import { Metadata } from "next";
import { PREFECTURES_DATA } from "@/data/prefecturesData";

export const metadata: Metadata = {
  title: "ページが見つかりませんでした（404 Not Found）",
  description: "指定されたURLの旅行記事・宿泊施設ページは見つかりませんでした。日本全国47都道府県の厳選温泉宿や最新の旅行特集からご希望の宿をお探しいただけます。",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  const popularPrefs = PREFECTURES_DATA.slice(0, 12);

  return (
    <div className="max-w-4xl mx-auto space-y-10 py-6 md:py-12">
      {/* 404 ヘッダー */}
      <div className="bg-gradient-to-br from-teal-950 via-emerald-950 to-slate-900 text-white rounded-3xl p-8 md:p-12 shadow-lg border border-teal-800/20 text-center space-y-5">
        <span className="inline-block text-[10px] font-extrabold tracking-widest text-amber-300 uppercase bg-amber-400/10 border border-amber-400/20 px-3.5 py-1 rounded-full">
          404 NOT FOUND 🧭
        </span>
        <h1 className="text-2xl md:text-4xl font-black font-journal-serif tracking-tight leading-snug">
          お探しのページが見つかりませんでした
        </h1>
        <p className="text-xs md:text-sm text-emerald-100/80 max-w-xl mx-auto leading-relaxed">
          アクセスいただいた記事は、掲載期間の終了に伴い統合・更新されたか、URLが変更された可能性があります。以下の最新特集や全国の旅宿ガイドから、気になる旅先をお探しください。
        </p>

        <div className="pt-2 flex flex-wrap justify-center gap-3">
          <Link
            href="/"
            className="px-6 py-3 text-xs md:text-sm font-extrabold text-teal-950 bg-gradient-to-r from-amber-300 via-amber-200 to-yellow-300 hover:from-amber-200 hover:to-yellow-200 rounded-2xl shadow-md transition transform hover:-translate-y-0.5"
          >
            🏠 トップページへ戻る
          </Link>
          <Link
            href="/posts/"
            className="px-6 py-3 text-xs md:text-sm font-extrabold text-white bg-white/10 hover:bg-white/15 border border-white/20 rounded-2xl transition"
          >
            🏨 厳選宿泊記・全件一覧を見る
          </Link>
        </div>
      </div>

      {/* 注目のおすすめ特集＆お役立ちガイド */}
      <div className="space-y-4">
        <h2 className="text-base md:text-lg font-black font-journal-serif text-emerald-950 flex items-center gap-2">
          <span>🌟</span> <span>いま注目の厳選旅行特集＆お得な予約術</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <Link
            href="/winter-travel-special/"
            className="group p-5 bg-gradient-to-br from-teal-50 to-sky-50/50 border border-sky-500/20 rounded-2xl shadow-sm hover:shadow-md transition space-y-2 block"
          >
            <span className="text-[9px] font-extrabold text-sky-800 bg-sky-100 px-2.5 py-0.5 rounded-full inline-block">
              ❄️ 秋冬〜年末年始特設
            </span>
            <h3 className="text-sm font-bold text-emerald-950 group-hover:text-teal-800 transition">
              冬の絶景温泉＆冬の味覚（カニ・フグ）特集
            </h3>
            <p className="text-xs text-emerald-950/70 line-clamp-2">
              越前がに・松葉ガニ解禁、雪見露天風呂、年末年始・お正月におすすめの名宿を厳選。
            </p>
          </Link>

          <Link
            href="/campaigns/"
            className="group p-5 bg-gradient-to-br from-amber-50 to-orange-50/50 border border-amber-500/20 rounded-2xl shadow-sm hover:shadow-md transition space-y-2 block"
          >
            <span className="text-[9px] font-extrabold text-amber-800 bg-amber-100 px-2.5 py-0.5 rounded-full inline-block">
              🏷️ お得な割引情報
            </span>
            <h3 className="text-sm font-bold text-emerald-950 group-hover:text-amber-800 transition">
              楽天トラベル最新セール＆限定クーポン
            </h3>
            <p className="text-xs text-emerald-950/70 line-clamp-2">
              「5と0のつく日」最大20%OFFクーポンや宿限定クーポンの最新獲得リンク一覧。
            </p>
          </Link>

          <Link
            href="/travel-savings-guide/"
            className="group p-5 bg-gradient-to-br from-emerald-50 to-teal-50/50 border border-teal-500/20 rounded-2xl shadow-sm hover:shadow-md transition space-y-2 block"
          >
            <span className="text-[9px] font-extrabold text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-full inline-block">
              💰 実質2,000円で泊まる
            </span>
            <h3 className="text-sm font-bold text-emerald-950 group-hover:text-emerald-800 transition">
              ふるさと納税宿泊クーポンの賢い活用法
            </h3>
            <p className="text-xs text-emerald-950/70 line-clamp-2">
              予約済みの宿泊予約にも「あとから割引」可能！賢く旅費を節約する完全ガイド。
            </p>
          </Link>
        </div>
      </div>

      {/* 都道府県から探す */}
      <div className="bg-white border border-emerald-950/10 rounded-3xl p-6 md:p-8 space-y-5 shadow-sm">
        <div className="flex items-center justify-between border-b border-emerald-950/5 pb-3">
          <h2 className="text-sm md:text-base font-black font-journal-serif text-emerald-950 flex items-center gap-2">
            <span>🗾</span> <span>人気の都道府県から探す</span>
          </h2>
          <Link href="/prefectures/" className="text-xs font-bold text-teal-800 hover:underline">
            全国47都道府県一覧 →
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5">
          {popularPrefs.map((pref) => (
            <Link
              key={pref.slug}
              href={`/prefectures/${pref.slug}/`}
              className="p-3 rounded-xl border border-emerald-950/5 bg-emerald-50/20 hover:bg-teal-50 hover:border-teal-800/20 transition text-center space-y-0.5 group"
            >
              <span className="block text-xs font-bold text-emerald-950 group-hover:text-teal-800">
                {pref.name}
              </span>
              <span className="block text-[10px] text-teal-900/50 line-clamp-1">
                {pref.highlights[0]}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
