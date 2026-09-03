"use client";

import { useState } from "react";
import Link from "next/link";

interface TransitCard {
  slug: string;
  title: string;
  shortLabel: string;
  fromTo: string;
  priceNote: string;
  desc: string;
  badge: string;
}

const TRANSIT_HUBS_BY_ORIGIN: Record<string, { label: string; icon: string; items: TransitCard[] }> = {
  tokyo: {
    label: "東京・新宿発",
    icon: "🗼",
    items: [
      {
        slug: "tokyo-kanazawa-bus-vs-shinkansen-guide",
        title: "【東京〜金沢】安く行く方法徹底比較！新幹線 vs 高速バス",
        shortLabel: "東京 ⇄ 金沢",
        fromTo: "東京 ⇄ 石川（金沢）",
        priceNote: "高速バス ¥3,500〜 / 新幹線 ¥14,380",
        desc: "差額1万円以上！浮いたお金で近江町市場海鮮丼＆駅前天然温泉ホテルを満喫。",
        badge: "人気No.1"
      },
      {
        slug: "tokyo-kusatsu-onsen-highway-bus-guide",
        title: "【東京・新宿〜草津温泉】乗り換えなし直行バス完全ガイド",
        shortLabel: "東京・新宿 ⇄ 草津温泉",
        fromTo: "東京・新宿 ⇄ 群馬（草津温泉）",
        priceNote: "直行バス ¥3,600〜 / 特急＋バス ¥6,100",
        desc: "湯畑徒歩5分に完全直行！乗換・荷物ストレスゼロの極上名湯旅。",
        badge: "直行便"
      },
      {
        slug: "tokyo-osaka-bus-vs-shinkansen-guide",
        title: "【東京〜大阪】安く行く方法！新幹線 vs 夜行高速バス",
        shortLabel: "東京 ⇄ 大阪・USJ",
        fromTo: "東京 ⇄ 大阪（難波・梅田・USJ）",
        priceNote: "夜行バス ¥2,500〜 / のぞみ指定席 ¥14,920",
        desc: "差額2万円でUSJ開園待ち＆道頓堀たこ焼き爆食。学生・遠征派に最強コスパ。",
        badge: "格安夜行"
      },
      {
        slug: "tokyo-kyoto-bus-vs-shinkansen-guide",
        title: "【東京〜京都】安く行く方法！新幹線 vs 夜行高速バス",
        shortLabel: "東京 ⇄ 京都",
        fromTo: "東京 ⇄ 京都（京都駅・烏丸）",
        priceNote: "夜行バス ¥3,000〜 / のぞみ指定席 ¥14,170",
        desc: "早朝6時台着で人混みゼロの清水寺・嵐山竹林独占。極上町家ホテルステイ。",
        badge: "早朝独占"
      },
      {
        slug: "tokyo-fujikawaguchiko-highway-bus-guide",
        title: "【新宿・東京〜富士急・河口湖】直行高速バス完全ガイド",
        shortLabel: "新宿 ⇄ 富士急・河口湖",
        fromTo: "新宿 ⇄ 山梨（富士急・河口湖）",
        priceNote: "直行バス ¥2,000〜 / 特急富士回遊 ¥4,130",
        desc: "特急の半額！遊園地・河口湖駅直着＆忍野八海・逆さ富士露天風呂。",
        badge: "半額直行"
      },
      {
        slug: "tokyo-nagano-karuizawa-bus-vs-shinkansen",
        title: "【東京〜長野・軽井沢】新幹線 vs 高速バス徹底比較",
        shortLabel: "東京 ⇄ 軽井沢・長野",
        fromTo: "東京 ⇄ 長野（軽井沢・長野駅）",
        priceNote: "軽井沢バス ¥1,500〜 / 新幹線 ¥5,940",
        desc: "片道1,500円〜！善光寺お戒壇巡り・小布施スイーツ＆アウトレット買い物旅。",
        badge: "コスパ抜群"
      }
    ]
  },
  osaka: {
    label: "大阪・関西発",
    icon: "🐙",
    items: [
      {
        slug: "osaka-kanazawa-highway-bus-model-course",
        title: "【大阪〜金沢】高速バスで行く1泊2日モデルコース！新幹線・特急比較",
        shortLabel: "大阪・京都 ⇄ 金沢",
        fromTo: "大阪・京都 ⇄ 石川（金沢）",
        priceNote: "直行バス ¥2,800〜 / サンダーバード乗換 ¥9,410",
        desc: "サンダーバード敦賀乗換不要！乗り換えゼロで21世紀美術館＆茶屋街を満喫。",
        badge: "乗換ゼロ"
      },
      {
        slug: "osaka-fukuoka-bus-vs-shinkansen-guide",
        title: "【大阪〜福岡・博多】新幹線 vs 夜行バス徹底比較！",
        shortLabel: "大阪 ⇄ 博多・天神",
        fromTo: "大阪 ⇄ 福岡（博多・天神）",
        priceNote: "夜行バス ¥3,000〜 / 山陽新幹線 ¥15,600",
        desc: "片道3,000円〜！中洲屋台はしご酒・本場もつ鍋・太宰府天満宮1泊2日。",
        badge: "爆食遠征"
      },
      {
        slug: "osaka-tokushima-naruto-bus-vs-car-guide",
        title: "【大阪・神戸〜徳島・鳴門】高速バスが圧倒的に便利！大塚国際美術館旅",
        shortLabel: "大阪・神戸 ⇄ 鳴門・徳島",
        fromTo: "大阪・神戸 ⇄ 徳島（鳴門・徳島市）",
        priceNote: "直行バス ¥2,500〜 / 電車乗換 ¥10,500",
        desc: "明石海峡大橋を直通！大塚国際美術館前直着＆鳴門鯛会席・うずしお観潮船。",
        badge: "絶景橋越え"
      },
      {
        slug: "osaka-tottori-matsue-bus-vs-train-guide",
        title: "【大阪・神戸〜鳥取・出雲】高速バス vs 特急スーパーはくと徹底比較",
        shortLabel: "大阪・神戸 ⇄ 鳥取・出雲",
        fromTo: "大阪・神戸 ⇄ 鳥取・島根（出雲大社）",
        priceNote: "高速バス ¥3,200〜 / 特急やくも ¥11,300",
        desc: "特急の半額以下！鳥取砂丘＆縁結び出雲大社参拝・玉造温泉美肌ステイ。",
        badge: "縁結び"
      },
      {
        slug: "osaka-kochi-bus-vs-train-guide",
        title: "【大阪・神戸〜高知】高速バス「よさこい号」vs 特急南風比較",
        shortLabel: "大阪・神戸 ⇄ 高知",
        fromTo: "大阪・神戸 ⇄ 高知（ひろめ市場・桂浜）",
        priceNote: "高速バス ¥3,500〜 / 特急乗換 ¥11,500",
        desc: "乗り換えなし直行！ひろめ市場で藁焼きカツオ塩タタキ昼飲み＆龍馬像。",
        badge: "グルメ旅"
      },
      {
        slug: "tokyo-shirahama-kumano-bus-vs-train-guide",
        title: "【大阪〜南紀白浜】高速バス vs 特急くろしお徹底比較",
        shortLabel: "大阪 ⇄ 南紀白浜",
        fromTo: "大阪（難波・天王寺） ⇄ 和歌山（白浜）",
        priceNote: "直行バス ¥3,000〜 / 特急くろしお ¥5,800",
        desc: "白良浜の砂浜まで徒歩1分直着！海辺の崎の湯露天風呂＆とれとれ市場海鮮。",
        badge: "ビーチ直行"
      }
    ]
  },
  nagoya: {
    label: "名古屋・中部発",
    icon: "🏯",
    items: [
      {
        slug: "nagoya-kanazawa-bus-vs-train-guide",
        title: "【名古屋〜金沢】特急しらさぎ vs 直行高速バス徹底比較",
        shortLabel: "名古屋 ⇄ 金沢",
        fromTo: "名古屋 ⇄ 石川（金沢駅）",
        priceNote: "直行バス ¥3,000〜 / しらさぎ乗換 ¥8,010",
        desc: "しらさぎ敦賀乗換の手間解消！乗り換えゼロ＆半額以下で行くひがし茶屋街。",
        badge: "乗換ゼロ"
      },
      {
        slug: "nagoya-kyoto-bus-vs-shinkansen-guide",
        title: "【名古屋〜京都】新幹線 vs 名神ハイウェイバス徹底比較",
        shortLabel: "名古屋 ⇄ 京都",
        fromTo: "名古屋 ⇄ 京都（京都駅烏丸口）",
        priceNote: "高速バス ¥1,500〜 / 新幹線 ¥5,940",
        desc: "新幹線の4分の1（片道約1,500円〜）！伏見稲荷千本鳥居＆宇治抹茶カフェ巡り。",
        badge: "激安トリップ"
      },
      {
        slug: "tokyo-nagoya-bus-vs-shinkansen-guide",
        title: "【名古屋〜東京】新幹線 vs 高速バス徹底比較",
        shortLabel: "名古屋 ⇄ 東京",
        fromTo: "名古屋 ⇄ 東京・新宿",
        priceNote: "高速バス ¥2,000〜 / のぞみ指定席 ¥11,300",
        desc: "片道2,000円台〜！新幹線の半額以下で楽しむ東京観光＆ライブ遠征。",
        badge: "定番ルート"
      },
      {
        slug: "tokyo-takayama-shirakawago-highway-bus-guide",
        title: "【名古屋・東京〜飛騨高山・白川郷】直行バスで行く世界遺産旅",
        shortLabel: "高山 ⇄ 白川郷・東京",
        fromTo: "高山濃飛BC ⇄ 白川郷・東京",
        priceNote: "高速バス片道 ¥6,500〜 / JR特急 ¥15,500",
        desc: "古い町並み散策＆飛騨牛握り寿司食べ歩き。合掌造り集落へシャトル直結。",
        badge: "世界遺産"
      }
    ]
  },
  fukuoka: {
    label: "福岡・九州発",
    icon: "🍜",
    items: [
      {
        slug: "fukuoka-kumamoto-bus-vs-shinkansen-guide",
        title: "【博多〜熊本】ひのくに号 vs 九州新幹線比較",
        shortLabel: "福岡 ⇄ 熊本",
        fromTo: "福岡（博多・天神） ⇄ 熊本（桜町・熊本城）",
        priceNote: "ひのくに号 ¥2,500 / 九州新幹線 ¥5,230",
        desc: "10分〜15分間隔運行！桜町・熊本城前直着＆名物あか牛丼と馬刺し。",
        badge: "超頻発便"
      },
      {
        slug: "fukuoka-beppu-yufuin-bus-vs-train-guide",
        title: "【博多〜由布院・別府】特急ゆふいんの森 vs 高速バス比較",
        shortLabel: "福岡 ⇄ 由布院・別府",
        fromTo: "福岡（博多・天神） ⇄ 大分（由布院・別府）",
        priceNote: "高速バス ¥2,800〜 / 特急ゆふいんの森 ¥5,000〜",
        desc: "JR特急の半額！天神・博多・福岡空港から由布院金鱗湖・別府地獄めぐり直行。",
        badge: "温泉直行"
      },
      {
        slug: "fukuoka-kagoshima-bus-vs-shinkansen-guide",
        title: "【博多〜鹿児島】桜島号 vs 九州新幹線徹底比較",
        shortLabel: "福岡 ⇄ 鹿児島",
        fromTo: "福岡（博多・天神） ⇄ 鹿児島（天文館・中央駅）",
        priceNote: "高速バス ¥3,000〜 / 九州新幹線 ¥10,640",
        desc: "新幹線の半額！繁華街天文館直着＆黒豚しゃぶしゃぶ・仙巌園・桜島フェリー。",
        badge: "天文館直着"
      },
      {
        slug: "osaka-fukuoka-bus-vs-shinkansen-guide",
        title: "【福岡〜大阪】山陽新幹線 vs 夜行高速バス比較",
        shortLabel: "福岡 ⇄ 大阪・USJ",
        fromTo: "福岡（博多・天神） ⇄ 大阪（難波・梅田）",
        priceNote: "夜行バス ¥3,000〜 / 山陽新幹線 ¥15,600",
        desc: "寝ている間に移動完了！USJ朝イチ入園＆道頓堀グルメ旅。",
        badge: "格安遠征"
      }
    ]
  }
};

export default function TransitNavigationSection() {
  const [activeTab, setActiveTab] = useState<string>("tokyo");

  const currentHub = TRANSIT_HUBS_BY_ORIGIN[activeTab] || TRANSIT_HUBS_BY_ORIGIN.tokyo;

  return (
    <section className="bg-gradient-to-br from-slate-900 via-sky-950 to-indigo-950 text-white rounded-3xl p-6 md:p-10 shadow-2xl border border-white/10 space-y-6">
      {/* 見出し */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-5">
        <div className="space-y-1.5">
          <div className="flex items-center gap-2">
            <span className="text-[10px] md:text-xs font-black tracking-widest bg-gradient-to-r from-amber-400 to-orange-400 text-slate-950 px-3 py-0.5 rounded-full uppercase">
              SMART TRANSIT & COST COMPARISON
            </span>
            <span className="text-xs text-cyan-300 font-bold hidden sm:inline">
              交通費を浮かせて宿をランクアップ！
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-black font-journal-serif text-white tracking-tight flex items-center gap-2.5">
            <span>🚅</span> <span>新幹線 vs 高速バス 安く行く方法＆1泊2日モデルコース</span>
          </h2>
          <p className="text-xs md:text-sm text-cyan-100/80 leading-relaxed font-medium">
            「新幹線と高速バス、どっちが安い？」「乗り換えなしで行く方法は？」移動費を1万円以上節約して、現地の美味しいグルメや温泉宿を贅沢にするスマートな旅の意思決定ガイド。
          </p>
        </div>

        <a
          href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fbus%2F"
          target="_blank"
          rel="noopener noreferrer"
          className="self-start md:self-auto px-5 py-2.5 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-white font-black text-xs rounded-xl shadow-md transition flex items-center gap-1.5 whitespace-nowrap"
        >
          <span>🎫</span>
          <span>楽天トラベル 高速バスクーポン</span>
          <span>→</span>
        </a>
      </div>

      {/* 発着地タブ切り替え */}
      <div className="flex flex-wrap gap-2 pt-1">
        {Object.entries(TRANSIT_HUBS_BY_ORIGIN).map(([key, data]) => {
          const isActive = activeTab === key;
          return (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-5 py-2.5 rounded-2xl text-xs md:text-sm font-black transition duration-200 flex items-center gap-2 border ${
                isActive
                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white border-cyan-400 shadow-lg scale-105"
                  : "bg-white/5 hover:bg-white/10 text-slate-300 border-white/10"
              }`}
            >
              <span>{data.icon}</span>
              <span>{data.label}</span>
            </button>
          );
        })}
      </div>

      {/* 人気ルートカードグリッド */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
        {currentHub.items.map((item) => (
          <Link
            key={item.slug}
            href={`/${item.slug}`}
            className="group block p-5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-400/60 transition duration-200 space-y-3 relative overflow-hidden"
          >
            {/* 上部バッジ＆区間 */}
            <div className="flex items-center justify-between text-[11px]">
              <span className="font-extrabold text-cyan-300 bg-cyan-950/90 px-2.5 py-0.5 rounded border border-cyan-700/60">
                📍 {item.fromTo}
              </span>
              <span className="text-[10px] font-black bg-amber-400 text-slate-950 px-2 py-0.5 rounded-full">
                {item.badge}
              </span>
            </div>

            {/* タイトル */}
            <h3 className="text-sm md:text-base font-black text-white group-hover:text-cyan-200 transition font-journal-serif line-clamp-2 leading-snug">
              {item.title}
            </h3>

            {/* 料金目安 */}
            <div className="text-[11px] font-bold text-amber-300 bg-amber-950/40 border border-amber-500/30 px-3 py-1 rounded-lg">
              💰 {item.priceNote}
            </div>

            {/* 説明文 */}
            <p className="text-xs text-slate-300/90 line-clamp-2 leading-relaxed font-medium">
              {item.desc}
            </p>

            {/* リンク誘導 */}
            <div className="text-[11px] font-bold text-cyan-400 group-hover:text-cyan-300 group-hover:translate-x-1 transition flex items-center gap-1 pt-1 border-t border-white/5">
              <span>料金比較＆1泊2日モデルコースを見る</span>
              <span>→</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
