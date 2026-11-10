import React from "react";
import Link from "next/link";

interface NicheTopic {
  title: string;
  badge: string;
  desc: string;
  href: string;
  icon: string;
}

const NICHE_TOPICS: NicheTopic[] = [
  {
    icon: "🕳️",
    badge: "大人気急上昇",
    title: "洞窟温泉＆地熱秘湯の宿",
    desc: "岩肌に囲まれた神秘的な湯船。大地のエネルギーを肌で感じる全国の隠れ名湯を厳選。",
    href: "/posts/cave-bath-geothermal-secret-onsen-hotels-guide/",
  },
  {
    icon: "🧗",
    badge: "アクティブ旅",
    title: "ボルダリング・スポーツ体験宿",
    desc: "館内に本格クライミングウォール完備！大人も子どもも夢中で遊べる体験型リゾート。",
    href: "/posts/bouldering-climbing-wall-sports-resort-hotels-guide/",
  },
  {
    icon: "⛺️",
    badge: "アウトドア癒やし",
    title: "贅沢グランピング＆温泉リゾート",
    desc: "手ぶらBBQと星空シアター、源泉かけ流し温泉を同時に叶える極上アウトドアステイ。",
    href: "/posts/silverweek-glamping-outdoor-guide/",
  },
  {
    icon: "🍇",
    badge: "旬の味覚",
    title: "フルーツ狩り・果物園めぐり旅",
    desc: "ぶどう・梨・りんご狩り園へ好アクセス！新鮮なもぎたて果実と温泉を贅沢に楽しむ休日。",
    href: "/posts/silverweek-flower-fruit-harvest-guide/",
  },
  {
    icon: "🎬",
    badge: "おこもり推し活",
    title: "プロジェクター・シアタールーム宿",
    desc: "大画面スクリーンで映画・ライブ鑑賞！女子会やカップルのおこもりステイに大好評。",
    href: "/posts/projector-theater-room-hotels-guide/",
  },
  {
    icon: "🍣",
    badge: "海鮮グルメ",
    title: "豪快舟盛り＆海鮮浜焼きの温泉宿",
    desc: "朝獲れの伊勢海老・アワビ・地魚がずらり！海の幸をお腹いっぱい満喫できる漁港宿。",
    href: "/posts/funamori-sashimi-boat-seafood-onsen-hotels-guide/",
  },
  {
    icon: "☁️",
    badge: "奇跡の絶景",
    title: "雲海ビュー＆高台のパノラマリゾート",
    desc: "早朝の窓の外に広がる幻想的な雲海。一生に一度は見たい天空の温泉ホテルランキング。",
    href: "/posts/unkai-view-hotel-resort-japan-ranking/",
  },
  {
    icon: "🚅",
    badge: "車なし安心",
    title: "新幹線駅直結＆送迎付き温泉宿",
    desc: "運転不要でラクちんアクセス！新幹線駅から徒歩圏内または無料シャトルバスで行ける名宿。",
    href: "/posts/shinkansen-tokudane-pack-onsen-guide/",
  },
];

export default function NicheExperienceSection() {
  return (
    <section className="bg-gradient-to-br from-teal-950 via-emerald-950 to-stone-900 text-white rounded-3xl p-6 md:p-10 space-y-6 shadow-xl border border-teal-500/20">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-5">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 text-[10px] font-black tracking-widest uppercase border border-teal-400/30">
            <span>🎯 目的・こだわりから選ぶ</span>
          </div>
          <h2 className="text-xl md:text-3xl font-black text-white mt-2 font-journal-serif">
            大手が載せない！ニッチなこだわり・体験で選ぶ厳選テーマ宿
          </h2>
        </div>
        <p className="text-xs text-teal-200/80 max-w-md leading-relaxed">
          「ただ泊まるだけじゃ物足りない」あなたへ。洞窟風呂やボルダリング、シアタールームなど、旅の目的が明確な読者に選ばれている高満足度特集です。
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {NICHE_TOPICS.map((topic) => (
          <Link
            key={topic.href}
            href={topic.href}
            className="p-5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-teal-400/50 transition-all duration-200 group flex flex-col justify-between space-y-3"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-2xl">{topic.icon}</span>
                <span className="text-[9px] font-black text-amber-300 bg-amber-950/80 px-2 py-0.5 rounded-full border border-amber-500/30">
                  {topic.badge}
                </span>
              </div>
              <h3 className="text-sm md:text-base font-bold text-white group-hover:text-teal-300 transition line-clamp-1">
                {topic.title}
              </h3>
              <p className="text-xs text-stone-300 line-clamp-2 leading-relaxed">
                {topic.desc}
              </p>
            </div>
            <div className="text-[11px] font-bold text-teal-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
              <span>特集ガイドを見る</span>
              <span>→</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
