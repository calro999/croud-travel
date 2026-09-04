import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";
import SpecialCouponBanner from "@/app/components/SpecialCouponBanner";

export const metadata: Metadata = {
  title: "【熱海・伊豆 カップル客室露天風呂宿おすすめ】相模湾一望オーシャンビュー＆記念日ディナーの隠れ家 ｜ 日本全国・旅宿クラウド",
  description:
    "二人だけの海絶景を独占する熱海・伊豆高原のカップル向け客室露天風呂宿！水平線から昇る朝日や夜の海上花火を眺めながら過ごす贅沢な時間。記念日特典付きの大人限定リゾート旅館まとめ。",
  keywords: [
    "熱海 客室露天風呂 カップル",
    "伊豆 客室露天風呂 オーシャンビュー",
    "熱海 記念日 温泉宿",
    "伊豆高原 カップル 記念日 ディナー",
    "相模湾 海絶景 温泉",
    "熱海 海上花火大会 部屋から見える宿",
    "楽天トラベル 熱海 伊豆 カップル"
  ],
};

interface Hotel {
  hotelNo: number;
  hotelName: string;
  hotelSpecial?: string;
  hotelImageUrl?: string;
  hotelMinCharge?: number;
  affiliateUrl: string;
  address1?: string;
  address2?: string;
  access?: string;
  nearestStation?: string;
  reviewAverage?: number;
  reviewCount?: number;
}

function loadHotels(): Hotel[] {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["izu-ocean-view-couple-anniversary-guide"]?.hotels || [];
    }
  } catch (e) {
    console.error("Failed to load hotels for izu-ocean-view-couple-anniversary-guide", e);
  }
  return [];
}

export default function IzuOceanViewCoupleAnniversaryGuidePage() {
  const hotels = loadHotels();

  // カップル客室露天風呂選びの極意
  const oceanSelectionPoints = [
    {
      num: "POINT 01",
      title: "テラスから水平線と湯船がつながる「インフィニティ露天風呂」",
      desc: "誰の視線も気にせず、相模湾の波音に耳を傾けながら好きな時に何度でも入浴。朝は海から昇る神々しいサンライズ、夜は水面に映る月明かり（ムーンロード）を二人だけで独占できます。",
      badge: "海抜・遮るもののない眺望"
    },
    {
      num: "POINT 02",
      title: "金目鯛姿煮・伊勢海老・特選和牛の「アニバーサリー会席」",
      desc: "伊豆・熱海ならではの朝獲れ地魚や伊豆牛を贅沢に使った記念日ディナー。半個室や部屋食に対応した宿なら、乾杯シャンパンやメッセージ入りデザートプレートのサプライズも自然に演出可能。",
      badge: "部屋食 or 半個室確約"
    },
    {
      num: "POINT 03",
      title: "熱海海上花火大会や夜景を客室バルコニーから見下ろす高台ロケーション",
      desc: "熱海市街地の喧騒から少し上がった高台の隠れ家なら、きらめく夜景と相模湾のパノラマビューが広がります。花火大会の日程に合わせれば、テラスの露天風呂に入りながら花火を鑑賞する究極の体験も。",
      badge: "特等席の花火＆パノラマ夜景"
    }
  ];

  // 1泊2日 恋人・夫婦の記念日タイムスケジュール
  const anniversarySchedule = [
    {
      time: "14:00",
      spot: "熱海駅前商店街で食べ歩き＆レトロ散策",
      desc: "熱海プリンや焼きたての温泉まんじゅうをつまみながら、ノスタルジックな仲見世通りをぶらり。海辺の親水公園まで散歩して潮風を感じるスタート。"
    },
    {
      time: "15:30",
      spot: "チェックイン＆客室テラスのウェルカムドリンク",
      desc: "オーシャンビューの客室に入った瞬間、目の前に広がる青い水平線。挽きたてコーヒーやシャンパンで乾杯し、まずは移動の疲れを癒します。"
    },
    {
      time: "16:30",
      spot: "夕暮れのマジックアワーに客室露天風呂で乾杯",
      desc: "空と海が茜色から深い藍色へと移り変わる至福の黄昏時。温泉に浸かりながら、日常を忘れて二人きりの会話に花を咲かせます。"
    },
    {
      time: "18:30",
      spot: "伊豆山海の恵みを味わう記念日懐石ディナー",
      desc: "伊勢海老のお造り、金目鯛の煮付け、静岡そだちサーロインステーキ。デザートには内緒で手配したケーキとメッセージプレートをサプライズ演出！"
    },
    {
      time: "22:00",
      spot: "波音と星空、夜のムーンロードを眺める星空露天",
      desc: "夜風が心地よい客室露天で2度目の湯浴み。天気が良ければ満天の星と、月が海面に描く幻想的な「月の道」を静かに見守ります。"
    },
    {
      time: "06:00",
      spot: "相模湾の水平線から昇る朝日を露天風呂から拝む",
      desc: "早起きして温泉に入りながら待つ日の出。オレンジ色の光が海を照らし出す瞬間は、一生忘れられない旅のハイライトに。"
    }
  ];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-20 font-sans text-slate-800">
      {/* ヒーローセクション（Cyan & Ocean Palette） */}
      <section className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-cyan-950 via-teal-900 to-cyan-900 text-white p-8 md:p-14 shadow-2xl border border-cyan-700/50">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-400/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-teal-300/10 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl space-y-5">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[11px] md:text-xs font-black tracking-widest bg-cyan-500/30 text-cyan-200 border border-cyan-400/40 px-3.5 py-1 rounded-full uppercase shadow-sm">
              ANNIVERSARY & OCEAN RETREAT
            </span>
            <span className="text-xs font-semibold text-teal-200 bg-teal-950/60 px-2.5 py-1 rounded-full border border-teal-500/30">
              熱海・伊豆高原の海絶景宿
            </span>
          </div>

          <h1 className="text-2xl md:text-4xl lg:text-5xl font-black leading-tight tracking-tight text-white drop-shadow-sm font-journal-serif">
            【熱海・伊豆 カップル客室露天風呂宿おすすめ】<br />
            <span className="bg-gradient-to-r from-cyan-200 via-teal-100 to-emerald-200 bg-clip-text text-transparent">
              相模湾一望オーシャンビュー＆記念日ディナーの隠れ家
            </span>
          </h1>

          <p className="text-sm md:text-base text-cyan-100/90 leading-relaxed max-w-2xl font-medium">
            誰の目も気にせず、目の前に広がる相模湾の水平線と波音を二人だけで独占する贅沢。客室露天風呂から眺める朝焼け、金目鯛や伊豆牛を堪能するお祝いディナー、夜のムーンロードまで、大切なパートナーの誕生日や記念日を忘れられない特別な時間にする大人のための隠れ家宿をご案内します。
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3 text-xs text-cyan-200/90">
            <span className="flex items-center gap-1.5 bg-cyan-900/60 px-3 py-1.5 rounded-lg border border-cyan-600/40">
              <span>🌊</span> 全室オーシャンビュー＆専用露天
            </span>
            <span className="flex items-center gap-1.5 bg-cyan-900/60 px-3 py-1.5 rounded-lg border border-cyan-600/40">
              <span>🎂</span> 記念日ホールケーキ＆プレート対応
            </span>
            <span className="flex items-center gap-1.5 bg-cyan-900/60 px-3 py-1.5 rounded-lg border border-cyan-600/40">
              <span>🚅</span> 東京駅から新幹線45分〜踊り子号
            </span>
          </div>
        </div>
      </section>

      {/* 楽天トラベル クーポンバナー */}
      <SpecialCouponBanner variant="prominent" />

      {/* 目次・イントロダクション */}
      <nav aria-label="記事の目次" className="bg-gradient-to-r from-cyan-50 via-teal-50/50 to-white rounded-2xl p-6 border border-cyan-200 shadow-sm">
        <h2 className="text-lg font-black text-cyan-950 mb-3 flex items-center gap-2">
          <span>📑</span> この記事のインデックス
        </h2>
        <ul className="grid sm:grid-cols-2 gap-2.5 text-xs md:text-sm text-cyan-900 font-bold">
          <li>
            <a href="#points" className="hover:text-cyan-600 flex items-center gap-1.5 transition">
              <span className="text-cyan-500">▶</span> カップルで泊まる客室露天宿 失敗しない3大条件
            </a>
          </li>
          <li>
            <a href="#hotels" className="hover:text-cyan-600 flex items-center gap-1.5 transition">
              <span className="text-cyan-500">▶</span> 熱海・伊豆 厳選オーシャンビュー客室露天宿
            </a>
          </li>
          <li>
            <a href="#schedule" className="hover:text-cyan-600 flex items-center gap-1.5 transition">
              <span className="text-cyan-500">▶</span> 二人の絆が深まる1泊2日モデルスケジュール
            </a>
          </li>
          <li>
            <a href="#internal-guides" className="hover:text-cyan-600 flex items-center gap-1.5 transition">
              <span className="text-cyan-500">▶</span> 熱海・伊豆旅行の費用＆日帰りランチ関連記事
            </a>
          </li>
        </ul>
      </nav>

      {/* 失敗しない選び方 3つのポイント */}
      <section id="points" className="space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-black tracking-widest text-cyan-600 uppercase bg-cyan-100 px-3 py-1 rounded-full">
            FOR SPECIAL OCCASION
          </span>
          <h2 className="text-2xl md:text-3xl font-black text-slate-900">
            熱海・伊豆で特別な記念日を叶える客室露天風呂選びの極意
          </h2>
          <p className="text-xs md:text-sm text-slate-600">
            写真だけで選ぶと「隣から丸見えだった」「海が遠かった」という失敗も。大人のカップル旅で重視すべきチェックリストです。
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {oceanSelectionPoints.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border-2 border-cyan-100 hover:border-cyan-400 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black text-cyan-700 bg-cyan-100/80 px-2.5 py-0.5 rounded-md tracking-wider">
                    {item.num}
                  </span>
                  <span className="text-[11px] font-bold text-teal-700 bg-teal-50 border border-teal-200 px-2 py-0.5 rounded-full">
                    {item.badge}
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 厳選ホテルリスト */}
      <section id="hotels" className="space-y-8">
        <div className="border-l-4 border-cyan-500 pl-4 space-y-1">
          <span className="text-xs font-bold text-cyan-600 tracking-wider">RECOMMENDED HOTELS</span>
          <h2 className="text-2xl md:text-3xl font-black text-slate-900">
            熱海・伊豆高原 海絶景と美食に酔いしれるカップル向け厳選宿
          </h2>
          <p className="text-xs md:text-sm text-slate-600">
            楽天トラベルで今すぐ予約可能な、客室露天風呂・オーシャンビュー・記念日プラン対応の名宿です。
          </p>
        </div>

        <div className="space-y-8">
          {hotels.map((hotel, index) => {
            const specialText = hotel.hotelSpecial || "";
            const minChargeFormatted = hotel.hotelMinCharge
              ? hotel.hotelMinCharge.toLocaleString()
              : "要問い合わせ";

            return (
              <article
                key={hotel.hotelNo}
                className="bg-white rounded-3xl overflow-hidden border border-cyan-200 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row group"
              >
                {/* 画像エリア */}
                <div className="md:w-5/12 relative min-h-[260px] md:min-h-[320px] bg-slate-100 overflow-hidden shrink-0">
                  {hotel.hotelImageUrl ? (
                    <img
                      src={hotel.hotelImageUrl}
                      alt={hotel.hotelName}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-cyan-900 text-cyan-200">
                      <span>No Image Available</span>
                    </div>
                  )}
                  <div className="absolute top-3 left-3 bg-cyan-900/90 backdrop-blur-sm text-cyan-100 text-xs font-black px-3 py-1 rounded-full shadow-md border border-cyan-600/50">
                    厳選宿 #{index + 1}
                  </div>
                  {hotel.reviewAverage && hotel.reviewAverage > 0 ? (
                    <div className="absolute bottom-3 left-3 bg-slate-950/85 backdrop-blur-sm text-amber-300 text-xs font-bold px-2.5 py-1 rounded-lg border border-amber-400/30 flex items-center gap-1">
                      <span>★</span>
                      <span className="text-white font-black">{hotel.reviewAverage.toFixed(1)}</span>
                      {hotel.reviewCount ? (
                        <span className="text-[10px] text-slate-300 font-normal">({hotel.reviewCount}件)</span>
                      ) : null}
                    </div>
                  ) : null}
                </div>

                {/* 詳細・スペックエリア */}
                <div className="p-6 md:p-8 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    <div className="flex flex-wrap items-center gap-2 text-xs">
                      {hotel.address1 ? (
                        <span className="bg-cyan-50 text-cyan-800 font-bold px-2.5 py-0.5 rounded-md border border-cyan-200">
                          {hotel.address1} {hotel.address2 ? hotel.address2.slice(0, 8) : ""}
                        </span>
                      ) : null}
                      {hotel.nearestStation ? (
                        <span className="bg-slate-100 text-slate-700 font-medium px-2.5 py-0.5 rounded-md">
                          最寄: {hotel.nearestStation}駅
                        </span>
                      ) : null}
                    </div>

                    <h3 className="text-xl md:text-2xl font-black text-slate-900 group-hover:text-cyan-700 transition">
                      {hotel.hotelName}
                    </h3>

                    {specialText ? (
                      <p className="text-xs md:text-sm text-slate-700 leading-relaxed bg-cyan-50/60 p-3.5 rounded-xl border border-cyan-100">
                        {specialText}
                      </p>
                    ) : null}

                    {hotel.access ? (
                      <div className="text-xs text-slate-500 flex items-start gap-1.5">
                        <span className="shrink-0 text-cyan-600 font-bold">アクセス:</span>
                        <span>{hotel.access}</span>
                      </div>
                    ) : null}
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                    <div>
                      <span className="text-[11px] text-slate-500 block">参考宿泊料金（2名1室時/1名あたり）</span>
                      <div className="text-cyan-700 font-black text-2xl md:text-3xl flex items-baseline gap-1">
                        <span>¥{minChargeFormatted}</span>
                        <span className="text-xs text-slate-500 font-medium">〜（税込）</span>
                      </div>
                    </div>

                    <a
                      href={hotel.affiliateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-700 hover:to-teal-700 text-white font-black px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 text-sm group/btn cursor-pointer"
                    >
                      <span>楽天トラベルで空室・記念日プランを見る</span>
                      <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* 記念日旅行 モデルスケジュール */}
      <section id="schedule" className="bg-gradient-to-b from-cyan-950 to-slate-900 text-white rounded-3xl p-6 md:p-10 shadow-xl space-y-8 border border-cyan-800/40">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-xs font-black tracking-widest text-cyan-300 uppercase bg-cyan-900/60 px-3 py-1 rounded-full border border-cyan-500/30">
            MODEL ITINERARY
          </span>
          <h2 className="text-2xl md:text-3xl font-black text-white font-journal-serif">
            相模湾オーシャンビュー宿で過ごす 1泊2日記念日旅
          </h2>
          <p className="text-xs md:text-sm text-cyan-200/80">
            チェックインから日の出露天まで、パートナーを喜ばせるスマートな過ごし方の時間割です。
          </p>
        </div>

        <div className="relative border-l-2 border-cyan-500/30 ml-4 md:ml-8 pl-6 space-y-6">
          {anniversarySchedule.map((step, idx) => (
            <div key={idx} className="relative group">
              <div className="absolute -left-[31px] top-1 w-3.5 h-3.5 rounded-full bg-cyan-400 border-4 border-cyan-950 group-hover:scale-125 transition-transform" />
              <div className="bg-cyan-900/30 rounded-2xl p-4 md:p-5 border border-cyan-700/30 hover:border-cyan-500/60 transition">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <span className="text-cyan-300 font-mono font-black text-xs md:text-sm">
                    {step.time}
                  </span>
                  <h3 className="text-sm md:text-base font-bold text-white">
                    {step.spot}
                  </h3>
                </div>
                <p className="text-xs md:text-sm text-cyan-100/80 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 内部リンク セクション */}
      <section id="internal-guides" className="bg-white rounded-3xl p-6 md:p-8 border border-cyan-200 shadow-sm space-y-6">
        <div className="space-y-1">
          <span className="text-xs font-bold text-cyan-600">RELATED GUIDES</span>
          <h2 className="text-xl md:text-2xl font-black text-slate-900">
            熱海・伊豆旅行をさらに満喫する関連ガイド
          </h2>
          <p className="text-xs md:text-sm text-slate-600">
            記念日旅行の交通費計算や日帰りグルメコースもあわせてチェックしておきましょう。
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <Link
            href="/atami-izu-travel-budget-guide"
            className="group block p-5 rounded-2xl border-2 border-slate-100 hover:border-cyan-400 bg-slate-50 hover:bg-cyan-50/40 transition-all duration-200"
          >
            <div className="text-xs font-bold text-cyan-600 mb-1 flex items-center gap-1">
              <span>💰</span> 費用・交通費詳細
            </div>
            <h3 className="font-bold text-slate-900 text-sm md:text-base group-hover:text-cyan-700 transition">
              【熱海・伊豆旅行 費用】日帰り・1泊2日でいくら？東京から片道2,000円で行ける温泉リゾートの全費用
            </h3>
            <p className="text-xs text-slate-500 mt-2 line-clamp-2">
              JR普通列車・新幹線・踊り子号の料金比較から、ランチ海鮮丼や入場料を含めたリアル予算を徹底シミュレーション。
            </p>
          </Link>

          <Link
            href="/atami-daytrip-hotspring-lunch-guide"
            className="group block p-5 rounded-2xl border-2 border-slate-100 hover:border-cyan-400 bg-slate-50 hover:bg-cyan-50/40 transition-all duration-200"
          >
            <div className="text-xs font-bold text-cyan-600 mb-1 flex items-center gap-1">
              <span>♨️</span> 日帰り温泉＆ランチ
            </div>
            <h3 className="font-bold text-slate-900 text-sm md:text-base group-hover:text-cyan-700 transition">
              【熱海 日帰り温泉＆海鮮ランチおすすめ】絶景露天風呂と獲れたて地魚を堪能する大人の週末リセット旅
            </h3>
            <p className="text-xs text-slate-500 mt-2 line-clamp-2">
              宿泊前後の寄り道にも最適！相模湾を望む立ち寄り露天風呂と金目鯛・アジのたたきが絶品のお食事処まとめ。
            </p>
          </Link>
        </div>
      </section>

      {/* 予約前チェックリスト＆FAQ */}
      <section className="bg-slate-50 rounded-3xl p-6 md:p-8 border border-slate-200 space-y-6">
        <h2 className="text-xl font-black text-slate-900 flex items-center gap-2">
          <span>💡</span> カップル旅行・記念日ステイの予約前確認ポイント
        </h2>

        <div className="grid md:grid-cols-2 gap-4 text-xs md:text-sm text-slate-700">
          <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-1">
            <h3 className="font-bold text-cyan-800">Q. ケーキや花束のサプライズ手配は可能？</h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              多くの宿で記念日プランが用意されており、ホールケーキや花束の手配が可能です。夕食のデザート時やチェックイン前の部屋入れなど、タイミングを事前に宿泊施設へ連絡しておくとスムーズです。
            </p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-1">
            <h3 className="font-bold text-cyan-800">Q. 客室露天風呂は温泉ですか？</h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              今回厳選した宿は天然温泉を引いている客室が中心ですが、一部沸かし湯の場合もあります。泉質や掛け流しにこだわりたい場合は各宿のプラン詳細をご確認ください。
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
