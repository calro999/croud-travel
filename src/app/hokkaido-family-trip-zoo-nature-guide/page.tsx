import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";
import SpecialCouponBanner from "@/app/components/SpecialCouponBanner";

export const metadata: Metadata = {
  title: "【子連れ北海道旅行 2泊3日モデルコース】旭山動物園＆美瑛富良野ドライブ！子供が喜ぶ体験型ホテルガイド ｜ 日本全国・旅宿クラウド",
  description: "家族で楽しむ北海道旅行！旭山動物園の行動展示、もぐもぐタイムの見学、美瑛の丘散策、大自然を満喫するキッズフレンドリーな宿特集。レンタカー移動時の休憩スポットや子供用アメニティ充実のホテルまとめ。",
  keywords: [
    "子連れ北海道旅行",
    "旭山動物園 子連れ モデルコース",
    "美瑛 富良野 ドライブ 子連れ",
    "旭川 ファミリーホテル おすすめ",
    "北海道旅行 2泊3日 子供",
    "楽天トラベル 北海道"
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
      return data["hokkaido-family-trip-zoo-nature-guide"]?.hotels || [];
    }
  } catch (e) {
    console.error("Failed to load hotels for hokkaido-family-trip-zoo-nature-guide", e);
  }
  return [];
}

export default function HokkaidoFamilyTripZooNaturePage() {
  const hotels = loadHotels();

  // モデルコース詳細（2泊3日）
  const itinerary = [
    {
      day: "Day 1：旭川空港着 〜 旭山動物園の行動展示にもぐもぐタイム！",
      stops: [
        {
          time: "10:30",
          spot: "旭川空港到着 ＆ レンタカーピックアップ",
          detail: "旭川空港はコンパクトでベビーカー受け取りやレンタカー営業所への移動が最速。チャイルドシートのベルト装着をしっかりチェック！"
        },
        {
          time: "11:30",
          spot: "旭川ラーメン村で早めのランチ",
          detail: "子供が大好きなラーメン！小上がり席や子供用取り皿・チェアが充実した店舗が並び、待ち時間も少なめで子連れの聖地。"
        },
        {
          time: "13:00〜16:30",
          spot: "旭山動物園（水中トンネルペンギン＆白くまダイブ）",
          detail: "「もぐもぐタイム」のタイムテーブルを正門で確認。あざらし館の円柱水槽やホッキョクグマのダイブに子供は大興奮！坂道が多いのでベビーカー貸出（有料）の利用も便利。"
        },
        {
          time: "17:30",
          spot: "旭川市街地のホテルへチェックイン ＆ ご当地グルメディナー",
          detail: "駅近や駐車場完備のホテルへ。荷物を置いて、北海道名物の成吉思汗（ジンギスカン）や塩ホルモン、新鮮な海鮮丼を堪能。"
        }
      ]
    },
    {
      day: "Day 2：美瑛・パッチワークの丘ドライブ 〜 富良野スイーツ巡り",
      stops: [
        {
          time: "09:00",
          spot: "ホテル出発 〜 パッチワークの路・ケンとメリーの木",
          detail: "爽やかな風が吹き抜ける美瑛の丘へドライブ。車窓からの絵本のような絶景に子供もくぎ付け。駐車帯で記念撮影タイム。"
        },
        {
          time: "11:00",
          spot: "白金青い池 ＆ 白ひげの滝散策",
          detail: "幻想的なコバルトブルーの水面に感動！遊歩道は平坦で歩きやすく、小さな子供の手を引いての散策にぴったり。"
        },
        {
          time: "13:00",
          spot: "ファーム富田でラベンダーソフトクリーム ＆ お花畑カート",
          detail: "一面に広がる色鮮やかな花畑を鑑賞。濃厚なメロンや特製ラベンダーソフトを頬張りながらテラス席でゆったり休憩。"
        },
        {
          time: "15:30",
          spot: "富良野チーズ工房で手作り体験（バター作り体験）",
          detail: "子供が自分でシャカシャカ振って作るフレッシュバター体験は大人気！ピッツァ工房の焼き立てチーズピザでおやつタイム。"
        }
      ]
    },
    {
      day: "Day 3：大雪森のガーデンで自然遊び 〜 お土産調達＆帰路へ",
      stops: [
        {
          time: "09:30",
          spot: "大雪 森のガーデン「遊びの森」でアスレチック",
          detail: "大自然の中に木製遊具や鳥の目線になれるウッドデッキが広がる体験型スポット。澄んだ空気を吸いながら思いっきり体を動かせます。"
        },
        {
          time: "13:00",
          spot: "旭川空港・お土産ショップでお買い物 ＆ 帰りのフライト",
          detail: "ロイズのチョコレート、白い恋人、じゃがポックルなど定番お土産を購入。空港内の授乳室・キッズスペースで搭乗前のリラックスタイム。"
        }
      ]
    }
  ];

  // 子連れドライブ安心の心得
  const driveTips = [
    {
      title: "1回あたりの運転時間は最長60分で区切る",
      desc: "北海道の道は直線が長くスピードが出やすい反面、単調で子供が飽きやすいです。「道の駅」やコンビニ休憩を1時間おきに挟みましょう。",
      icon: "🚗"
    },
    {
      title: "朝晩の寒暖差に対応できるレイヤリング（着脱着）",
      desc: "夏でも夕方や丘陵地帯は20℃を下回ることも。薄手のウィンドブレーカーやパーカー、カーディガンを必ず車内に常備しましょう。",
      icon: "🧥"
    },
    {
      title: "旭山動物園の「くらぶ号」や無料休憩所を活用",
      desc: "園内は傾斜地になっています。上り坂に疲れたら無料シャトルバスや暖房・冷房の効いた休憩所で無理せず水分補給を。",
      icon: "🐧"
    },
    {
      title: "道産野菜＆乳製品のアレルギー表示確認",
      desc: "美味しいソフトクリームやチーズ工房が充実しています。乳製品や小麦など食物アレルギーがあるお子様は事前メニュー確認を。",
      icon: "🥛"
    }
  ];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-20 font-sans text-stone-800">
      {/* ヒーローセクション（Amber/Warm Natural Palette） */}
      <section className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-amber-700 via-amber-600 to-amber-800 text-white p-8 md:p-14 shadow-2xl border border-amber-500/50">
        <div className="absolute -top-12 -right-12 w-96 h-96 bg-yellow-300/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-950/20 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl space-y-5">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[11px] md:text-xs font-black tracking-widest bg-yellow-300 text-amber-950 px-3.5 py-1 rounded-full uppercase shadow-sm">
              HOKKAIDO FAMILY ADVENTURE
            </span>
            <span className="text-xs font-bold bg-amber-950/40 text-amber-100 border border-amber-300/30 px-3 py-1 rounded-full">
              旭山動物園・美瑛・富良野 2泊3日
            </span>
          </div>

          <h1 className="text-2xl md:text-4xl lg:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【子連れ北海道旅行 2泊3日モデルコース】<br />
            <span className="text-amber-100">旭山動物園＆美瑛富良野ドライブ！子供が喜ぶ体験型ホテルガイド</span>
          </h1>

          <p className="text-sm md:text-base text-amber-50/95 leading-relaxed font-normal pt-1">
            広大な北海道の大自然、ホッキョクグマが豪快に水しぶきを上げる旭山動物園、見渡す限りのパッチワークの丘！子連れ旅行では「移動距離」と「拠点ホテル選び」が旅の成否を分ける重要ポイントです。移動ストレスを最小限に抑えた家族みんなが笑顔になれる2泊3日の黄金ルートを大公開！
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4 text-xs md:text-sm text-amber-100">
            <span className="flex items-center gap-1.5">
              <span className="text-yellow-300 font-bold">★</span> 旭川空港発着で移動ラクラク
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-yellow-300 font-bold">★</span> 旭山動物園まで車15分の好立地宿
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-yellow-300 font-bold">★</span> 駐車場無料・朝食ビュッフェ充実
            </span>
          </div>
        </div>
      </section>

      {/* 楽天トラベル クーポンWEEKバナー */}
      <SpecialCouponBanner variant="prominent" />

      {/* 目次 */}
      <nav className="bg-amber-50/70 border border-amber-200/80 rounded-2xl p-6 shadow-sm">
        <h2 className="text-base font-black text-amber-950 mb-3 flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-amber-600"></span>
          本記事のコンテンツ一覧
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5 text-sm text-amber-950">
          <li className="flex items-center gap-2">
            <span className="text-amber-600 font-bold">01.</span>
            <a href="#itinerary" className="hover:underline hover:text-amber-700">2泊3日 完全モデルコース行程</a>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-amber-600 font-bold">02.</span>
            <a href="#drive-tips" className="hover:underline hover:text-amber-700">子連れ北海道ドライブ 4つの安心ルール</a>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-amber-600 font-bold">03.</span>
            <a href="#hotels" className="hover:underline hover:text-amber-700">旭川・旭山動物園周辺の厳選ファミリー宿</a>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-amber-600 font-bold">04.</span>
            <a href="#budget-link" className="hover:underline hover:text-amber-700">北海道旅行 予算シミュレーション連携</a>
          </li>
        </ul>
      </nav>

      {/* セクション1: 2泊3日 モデルコース詳細 */}
      <section id="itinerary" className="space-y-6">
        <div className="border-l-4 border-amber-600 pl-4">
          <span className="text-xs font-black text-amber-700 tracking-wider uppercase">MODEL ITINERARY</span>
          <h2 className="text-2xl md:text-3xl font-black text-stone-900">
            2泊3日 旭川・美瑛・富良野 子連れ満喫スケジュール
          </h2>
          <p className="text-sm text-stone-600 mt-1">
            子どものお昼寝や急なトイレ休憩にも対応できるよう、余裕を持った時間配分で組んだ安心設計。
          </p>
        </div>

        <div className="space-y-8">
          {itinerary.map((dayPlan, dIdx) => (
            <div key={dIdx} className="bg-white border-2 border-amber-200/80 rounded-3xl p-6 md:p-8 shadow-sm">
              <div className="flex items-center gap-3 pb-4 border-b border-amber-100">
                <span className="bg-amber-600 text-white font-black text-sm px-3.5 py-1 rounded-xl shadow-sm">
                  DAY {dIdx + 1}
                </span>
                <h3 className="text-lg md:text-xl font-black text-stone-900">{dayPlan.day}</h3>
              </div>

              <div className="mt-6 space-y-6">
                {dayPlan.stops.map((stop, sIdx) => (
                  <div key={sIdx} className="flex gap-4 items-start">
                    <div className="shrink-0 w-16 text-center font-black text-xs md:text-sm bg-amber-100 text-amber-900 py-1.5 rounded-lg border border-amber-200">
                      {stop.time}
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-base font-bold text-stone-900 flex items-center gap-2">
                        <span>📍</span>
                        <span>{stop.spot}</span>
                      </h4>
                      <p className="text-xs md:text-sm text-stone-600 leading-relaxed pl-1">
                        {stop.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* セクション2: 子連れ北海道ドライブ安心Tips */}
      <section id="drive-tips" className="bg-gradient-to-br from-amber-50 to-orange-50/50 border border-amber-200 rounded-3xl p-6 md:p-8 space-y-6">
        <div className="border-l-4 border-amber-600 pl-4">
          <h2 className="text-xl md:text-2xl font-black text-amber-950">
            パパママ必見！北海道子連れドライブ＆動物園の快適攻略法
          </h2>
          <p className="text-sm text-amber-800 mt-1">
            本州とは距離感も気候も異なる北海道。出発前に家族で共有しておきたいポイントです。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {driveTips.map((tip, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-5 border border-amber-100 shadow-sm space-y-2">
              <div className="flex items-center gap-3">
                <span className="text-3xl p-2 bg-amber-100 rounded-xl">{tip.icon}</span>
                <h3 className="font-black text-stone-900 text-base">{tip.title}</h3>
              </div>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed pl-1">
                {tip.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* セクション3: 厳選ファミリーホテル (all_seasonal_rakuten_hotels.json連携) */}
      <section id="hotels" className="space-y-8">
        <div className="border-l-4 border-amber-600 pl-4">
          <span className="text-xs font-black text-amber-700 tracking-wider uppercase">FAMILY-FRIENDLY HOTELS</span>
          <h2 className="text-2xl md:text-3xl font-black text-stone-900">
            旭山動物園＆美瑛富良野の観光拠点におすすめのホテル
          </h2>
          <p className="text-sm text-stone-600 mt-1">
            動物園へのアクセス抜群、駐車場無料や充実の朝食バイキングが嬉しい楽天トラベル認定宿。
          </p>
        </div>

        <div className="space-y-6">
          {hotels.map((hotel, index) => (
            <article
              key={hotel.hotelNo || index}
              className="bg-white border-2 border-amber-200/90 rounded-3xl p-6 md:p-8 shadow-md hover:shadow-xl transition-all duration-300 grid grid-cols-1 md:grid-cols-12 gap-6 items-center"
            >
              {/* ホテル画像 */}
              <div className="md:col-span-4 relative rounded-2xl overflow-hidden aspect-[4/3] bg-amber-50 shadow-inner">
                {hotel.hotelImageUrl ? (
                  <img
                    src={hotel.hotelImageUrl}
                    alt={hotel.hotelName}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-amber-400 text-sm">
                    No Image Available
                  </div>
                )}
                <span className="absolute top-3 left-3 bg-amber-700 text-white text-[11px] font-black px-3 py-1 rounded-full shadow">
                  RECOMMEND #{index + 1}
                </span>
              </div>

              {/* ホテル詳細 */}
              <div className="md:col-span-8 space-y-4">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1.5">
                    {hotel.reviewAverage && (
                      <span className="text-xs font-black bg-amber-100 text-amber-900 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                        ★ {hotel.reviewAverage.toFixed(2)}
                        {hotel.reviewCount && <span className="text-[10px] text-amber-700">({hotel.reviewCount}件)</span>}
                      </span>
                    )}
                    {hotel.nearestStation && (
                      <span className="text-xs font-bold text-stone-600 bg-stone-100 px-2.5 py-0.5 rounded-full">
                        最寄: {hotel.nearestStation}
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl md:text-2xl font-black text-stone-900 leading-snug">
                    {hotel.hotelName}
                  </h3>
                </div>

                <p className="text-xs md:text-sm text-stone-700 bg-amber-50/70 p-3.5 rounded-xl border border-amber-200/60 leading-relaxed font-medium">
                  {hotel.hotelSpecial || "旭川・富良野観光の拠点にぴったり。快適なベッドと家族みんなで安心の滞在環境が揃っています。"}
                </p>

                {hotel.access && (
                  <p className="text-xs text-stone-500 flex items-start gap-1.5">
                    <span className="font-bold text-amber-800 shrink-0">📍 アクセス:</span>
                    <span>{hotel.access}</span>
                  </p>
                )}

                <div className="pt-2 border-t border-stone-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <span className="text-[11px] text-stone-500 block">参考最安料金（1名あたり）</span>
                    <span className="text-2xl font-black text-amber-700">
                      {hotel.hotelMinCharge ? `¥${hotel.hotelMinCharge.toLocaleString()}〜` : "料金プラン参照"}
                    </span>
                    <span className="text-[10px] text-stone-500 ml-1">消費税込み</span>
                  </div>

                  <a
                    href={hotel.affiliateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-600 via-amber-700 to-amber-800 hover:from-amber-700 hover:to-amber-900 text-white font-black text-sm px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 text-center group cursor-pointer"
                  >
                    <span>楽天トラベルで空室・宿泊プランを見る</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 内部リンク・北海道旅行 予算シミュレーションへの導線 */}
      <section id="budget-link" className="bg-stone-100 border-2 border-amber-300/80 rounded-3xl p-6 md:p-8 space-y-4">
        <div className="flex items-center gap-3">
          <span className="text-3xl">✈️</span>
          <div>
            <h3 className="text-lg md:text-xl font-black text-stone-900">
              北海道旅行全体の費用シミュレーションもあわせて確認！
            </h3>
            <p className="text-xs md:text-sm text-stone-600">
              航空券・レンタカー・宿泊費・グルメの総額目安と、時期別の節約テクニックを完全網羅。
            </p>
          </div>
        </div>

        <div className="pt-2">
          <Link
            href="/hokkaido-travel-budget-plan"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-700 to-stone-800 hover:from-amber-800 hover:to-stone-900 text-white font-black text-sm px-6 py-3 rounded-xl shadow transition"
          >
            <span>【北海道旅行 予算計画】2泊3日・3泊4日の費用シミュレーションを読む</span>
            <span>→</span>
          </Link>
        </div>
      </section>

      {/* 楽天トラベル下部バナー */}
      <div className="pt-4">
        <SpecialCouponBanner variant="prominent" />
      </div>
    </div>
  );
}
