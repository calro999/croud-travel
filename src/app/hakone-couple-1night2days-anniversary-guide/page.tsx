import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";
import SpecialCouponBanner from "@/app/components/SpecialCouponBanner";

export const metadata: Metadata = {
  title: "【箱根カップル温泉旅行 1泊2日モデルコース】客室露天風呂・フレンチ懐石ディナー＆記念日サプライズ宿",
  description: "カップルで過ごす特別な箱根1泊2日旅行！客室専用露天風呂付きのおこもり宿、サプライズケーキや花束手配可能な記念日プラン、大涌谷や彫刻の森美術館をゆったり巡る大人の贅沢デートコース。",
  keywords: [
    "箱根 カップル 温泉 1泊2日",
    "箱根 記念日 ホテル",
    "箱根 客室露天風呂 カップル",
    "箱根 誕生日 サプライズ 宿",
    "箱根 露天風呂付き客室",
    "箱根 デート 1泊2日 モデルコース",
    "箱根にごりの湯宿 のうのう箱根",
    "ホテルインディゴ箱根強羅",
    "箱根 フレンチ懐石"
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
      return data["hakone-couple-1night2days-anniversary-guide"]?.hotels || [];
    }
  } catch (e) {
    console.error("Failed to load hotels for hakone-couple-1night2days-anniversary-guide", e);
  }
  return [];
}

export default function HakoneCoupleAnniversaryGuidePage() {
  const hotels = loadHotels();

  // 箱根カップル1泊2日 記念日デート行程
  const itinerary = [
    {
      day: "DAY 1：ロマンスカー展望席から始まる、おこもり露天風呂と記念日フレンチ懐石",
      subtitle: "喧騒を離れ、二人の歩幅でゆったり巡るアートと温泉の贅沢時間",
      schedule: [
        {
          time: "10:30",
          spot: "新宿駅から小田急特急ロマンスカー（GSE/VSE）乗車",
          desc: "予約開始日に展望席やサルーン席を確保すれば、乗った瞬間から非日常デートが始まります。車内カフェでクラフトビールやオリジナルスイーツを乾杯しながら約85分の快適な車窓旅。",
          tag: "ロマンチック移動"
        },
        {
          time: "12:15",
          spot: "箱根湯本駅 到着 ＆ 駅前商店街食べ歩きランチ",
          desc: "湯葉丼 直吉で名物の「湯葉丼」を味わうか、揚げたて「箱根てゑらみす」や焼きモンブランを二人でシェア。大きな荷物は駅の「箱根キャリーサービス」で本日の宿泊宿へ直送し、身軽に観光へ出発。",
          tag: "身軽デート"
        },
        {
          time: "13:45",
          spot: "彫刻の森美術館 ＆ 幸せをよぶシンフォニー彫刻",
          desc: "箱根登山鉄道で彫刻の森へ。広大な芝生に広がる現代アートを巡り、全面ステンドグラスの幻想的な塔「幸せをよぶシンフォニー彫刻」の中で記念撮影。足湯カフェで並んで温まるのもおすすめ。",
          tag: "映え＆癒やし"
        },
        {
          time: "15:45",
          spot: "強羅・客室露天風呂付き宿へチェックイン ＆ ウエルカムシャンパン",
          desc: "早めのチェックインでお部屋へ。プライベートテラスに設えられた源泉かけ流しの露天風呂に浸かり、遮るもののない箱根連山の静寂を二人占め。アメニティや浴衣を選んでリラックス。",
          tag: "客室露天風呂"
        },
        {
          time: "18:30",
          spot: "記念日ディナー：旬の滋味を愛でるフレンチ懐石 ＆ サプライズケーキ",
          desc: "地場産相模湾の鮮魚や足柄牛をあしらったモダン懐石。食後は事前に宿スタッフと打ち合わせたアニバーサリーケーキと花束、手紙のサプライズ登場で特別な感動を演出。",
          tag: "サプライズ"
        },
        {
          time: "21:30",
          spot: "星空を仰ぐ夜の客室露天風呂 ＆ ナイトラウンジのフリーフロー",
          desc: "照明を落としたテラス露天風呂で星空を眺めながら静かに語り合う時間。ラウンジ付き宿なら暖炉の火を眺めながらワインやオリジナルハーブティーを傾けて大人の夜を満喫。",
          tag: "二人きりの夜"
        }
      ]
    },
    {
      day: "DAY 2：芦ノ湖の絶景パノラマと縁結びの杜、旅の締めくくりカフェへ",
      subtitle: "ロープウェイの空中散歩から九頭龍神社の御祈祷、余韻を噛みしめる帰路",
      schedule: [
        {
          time: "08:30",
          spot: "朝の爽快な目覚まし露天風呂 ＆ 地元野菜の彩り朝食",
          desc: "朝霧が立ち込める山並みを眺めながら朝風呂へ。炊きたての土鍋ご飯や干物、彩り豊かな小鉢が並ぶ朝食で贅沢なエネルギーチャージ。",
          tag: "朝活温泉"
        },
        {
          time: "10:30",
          spot: "箱根ロープウェイ（早雲山〜大涌谷〜桃源台）",
          desc: "早雲山駅「cu-mo箱根」の展望足湯に立ち寄った後、ロープウェイで大涌谷へ。迫力ある白煙と富士山の絶景パノラマを背景にツーショット。長寿祈願の名物「黒たまご」も忘れずに。",
          tag: "絶景空中散歩"
        },
        {
          time: "12:30",
          spot: "芦ノ湖畔・Bakery&Table 箱根で芦ノ湖ビュー足湯ランチ",
          desc: "芦ノ湖を見渡す絶景ベーカリー。テラスの天然温泉足湯席で、焼き立ての米粉カレーパンや本格ホットサンドと淹れたてコーヒーを楽しむ至福のランチタイム。",
          tag: "足湯カフェ"
        },
        {
          time: "14:00",
          spot: "箱根神社 ＆ 平和の鳥居・九頭龍神社新宮参拝",
          desc: "樹齢数百年の杉並木を歩き、芦ノ湖に浮かぶ「平和の鳥居」で記念撮影。二人の末永い良縁と幸せを願って九頭龍神社の御神水をいただき、心洗われるお参りを。",
          tag: "縁結び祈願"
        },
        {
          time: "16:00",
          spot: "箱根湯本駅へ戻りお土産選び ＆ ロマンスカーで乾杯しながら帰路へ",
          desc: "駅前商店街で「湯もち」「寄木細工のペア箸」など旅の思い出の品をお買い物。夕暮れのロマンスカー車内でスマホの写真を見返しながら、次回の記念日旅行の約束を。",
          tag: "旅の余韻"
        }
      ]
    }
  ];

  return (
    <div className="bg-rose-50/40 text-stone-800 min-h-screen font-sans antialiased">
      {/* ヒーローヘッダー */}
      <header className="relative bg-gradient-to-b from-rose-950 via-rose-900 to-stone-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#f43f5e_1px,transparent_1px)] [background-size:18px_18px]" />
        
        <div className="relative max-w-4xl mx-auto px-4 pt-14 pb-16 md:pt-20 md:pb-24 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-500/20 border border-rose-400/40 text-rose-200 text-xs md:text-sm font-medium tracking-wide">
            <span className="text-rose-400">💍</span>
            <span>カップル・記念日・誕生日サプライズ特化ガイド</span>
          </div>

          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight md:leading-[1.2] text-rose-50">
            【箱根カップル温泉旅行 1泊2日】<br className="hidden sm:inline" />
            客室露天風呂・フレンチ懐石ディナー＆<br className="hidden sm:inline" />
            記念日サプライズ宿完全ガイド
          </h1>

          <p className="text-sm md:text-base text-rose-100/90 max-w-2xl mx-auto leading-relaxed font-light">
            大切なパートナーの誕生日や交際・結婚記念日。「二人きりで静かに贅沢な時間を過ごしたい」を叶える、客室専用露天風呂付きおこもり宿と1泊2日の洗練デートコース。サプライズ手配のポイントまで徹底解説します。
          </p>

          {/* クイック特徴バッジ */}
          <div className="flex flex-wrap justify-center gap-2.5 pt-2 text-xs text-rose-200">
            <span className="bg-rose-900/60 border border-rose-700/50 px-3 py-1 rounded-lg">✨ 客室露天風呂完備宿厳選</span>
            <span className="bg-rose-900/60 border border-rose-700/50 px-3 py-1 rounded-lg">🎂 ケーキ・花束サプライズ手配</span>
            <span className="bg-rose-900/60 border border-rose-700/50 px-3 py-1 rounded-lg">🍷 こだわりの個室・モダン懐石</span>
            <span className="bg-rose-900/60 border border-rose-700/50 px-3 py-1 rounded-lg">🗺️ 1泊2日タイムスケジュール付き</span>
          </div>
        </div>
      </header>

      {/* メインコンテンツエリア */}
      <main className="max-w-4xl mx-auto px-4 py-10 space-y-12">
        {/* 記念日旅行を成功させる3大ポイント */}
        <section className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-rose-200/80 space-y-6">
          <div className="border-b border-rose-100 pb-4 text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-rose-600">ANNIVERSARY CONCIERGE</span>
            <h2 className="text-xl md:text-2xl font-bold font-journal-serif text-stone-900 mt-1">
              箱根カップル記念日旅行で失敗しない「宿選び3つの鉄則」
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="bg-rose-50/60 border border-rose-200/60 rounded-2xl p-5 space-y-2.5">
              <div className="w-9 h-9 rounded-xl bg-rose-600 text-white flex items-center justify-center font-bold text-base shadow-sm">
                1
              </div>
              <h3 className="font-bold text-stone-900 text-sm md:text-base">客室専用露天風呂でおこもり</h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                大浴場の混雑や時間を気にせず、好きな時に何度でも二人で温泉に浸かれるプライベートバス。湯上がりテラスで語り合う時間は忘れられない特別な時間に。
              </p>
            </div>

            <div className="bg-rose-50/60 border border-rose-200/60 rounded-2xl p-5 space-y-2.5">
              <div className="w-9 h-9 rounded-xl bg-rose-600 text-white flex items-center justify-center font-bold text-base shadow-sm">
                2
              </div>
              <h3 className="font-bold text-stone-900 text-sm md:text-base">半個室または部屋食の食事処</h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                周囲の視線を気にせず二人の会話を楽しめるダイニング設計が必須。ソムリエ厳選のペアリングワインや、箱根西麓野菜と黒毛和牛の贅沢ディナーを堪能。
              </p>
            </div>

            <div className="bg-rose-50/60 border border-rose-200/60 rounded-2xl p-5 space-y-2.5">
              <div className="w-9 h-9 rounded-xl bg-rose-600 text-white flex items-center justify-center font-bold text-base shadow-sm">
                3
              </div>
              <h3 className="font-bold text-stone-900 text-sm md:text-base">アニバーサリー特典・事前相談</h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                メッセージプレート付きホールケーキやフラワーアレンジメント、ベッドデコレーションなど、宿コンシェルジュと事前に連携できるプランを選びましょう。
              </p>
            </div>
          </div>
        </section>

        {/* 楽天トラベル公式 特別クーポンバナー */}
        <SpecialCouponBanner variant="prominent" />

        {/* 関連ガイド内部リンク */}
        <nav className="bg-rose-100/50 border border-rose-200 rounded-2xl p-5 md:p-6 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-xs md:text-sm font-bold text-rose-950 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-rose-600" />
              箱根旅行計画の関連ガイド（あわせて読む）
            </h2>
            <span className="text-[10px] text-rose-700 bg-rose-200/60 font-semibold px-2 py-0.5 rounded">
              お役立ち比較
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs md:text-sm">
            <Link
              href="/hakone-travel-budget-guide"
              className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-rose-200/80 hover:border-rose-400 hover:shadow-md transition group"
            >
              <span className="text-rose-600 font-bold text-base">💰</span>
              <div>
                <span className="font-bold text-stone-900 group-hover:text-rose-700 transition block">
                  箱根旅行 予算シミュレーション完全版
                </span>
                <span className="text-[11px] text-stone-500">
                  ロマンスカー・宿グレード別（露天付きvs標準）・観光費用のリアル内訳
                </span>
              </div>
            </Link>
            <Link
              href="/hakone-vs-atami-which-better"
              className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-rose-200/80 hover:border-rose-400 hover:shadow-md transition group"
            >
              <span className="text-rose-600 font-bold text-base">⚖️</span>
              <div>
                <span className="font-bold text-stone-900 group-hover:text-rose-700 transition block">
                  箱根 vs 熱海 どっちがカップルに向いてる？
                </span>
                <span className="text-[11px] text-stone-500">
                  海と花火の熱海か、森と名湯の箱根か。記念日・雰囲気・移動時間で本気比較
                </span>
              </div>
            </Link>
          </div>
        </nav>

        {/* 1泊2日 モデルコース詳細 */}
        <section className="bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-rose-200/80 space-y-8">
          <div className="border-b border-rose-100 pb-4">
            <span className="text-xs font-bold uppercase tracking-widest text-rose-600">ROMANTIC ITINERARY</span>
            <h2 className="text-xl md:text-2xl font-black font-journal-serif text-stone-900 mt-1">
              二人きりの記憶に残る【箱根1泊2日 記念日デートモデルコース】
            </h2>
            <p className="text-xs md:text-sm text-stone-600 mt-1">
              混雑を避け、お互いの会話と温泉を最優先にした大人のためのタイムスケジュールです。
            </p>
          </div>

          <div className="space-y-8">
            {itinerary.map((dayData, idx) => (
              <div key={idx} className="space-y-4">
                <div className="bg-gradient-to-r from-rose-900 to-stone-800 text-white p-4 rounded-2xl shadow-sm">
                  <div className="text-xs text-rose-300 font-bold uppercase tracking-wider">ITINERARY SCHEDULE</div>
                  <h3 className="text-base md:text-lg font-bold">{dayData.day}</h3>
                  <p className="text-xs text-rose-100/80 mt-0.5">{dayData.subtitle}</p>
                </div>

                <div className="relative border-l-2 border-rose-200 ml-4 md:ml-6 pl-4 md:pl-6 space-y-6">
                  {dayData.schedule.map((item, sIdx) => (
                    <div key={sIdx} className="relative group">
                      <div className="absolute -left-[23px] md:-left-[31px] top-1 w-3.5 h-3.5 rounded-full bg-rose-600 border-2 border-white shadow" />
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className="text-xs font-extrabold text-rose-700 bg-rose-100 px-2 py-0.5 rounded">
                          {item.time}
                        </span>
                        <span className="text-[10px] font-bold text-rose-900 bg-rose-50 border border-rose-200 px-2 py-0.5 rounded-full">
                          {item.tag}
                        </span>
                      </div>
                      <h4 className="text-sm md:text-base font-bold text-stone-900">{item.spot}</h4>
                      <p className="text-xs md:text-sm text-stone-600 mt-1 leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 厳選！記念日におすすめの箱根人気宿（楽天トラベル提携） */}
        <section className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-2 border-b border-rose-200 pb-3">
            <div>
              <div className="flex items-center gap-2 text-rose-600 font-bold text-xs uppercase tracking-wider">
                <span>🏨 FEATURED HOTELS</span>
              </div>
              <h2 className="text-xl md:text-2xl font-black font-journal-serif text-stone-900 mt-1">
                カップル記念日におすすめの箱根露天風呂・ラグジュアリー宿
              </h2>
            </div>
            <span className="text-xs text-stone-500 font-medium">
              楽天トラベル宿泊プラン・アニバーサリー特典対象
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {hotels.length > 0 ? (
              hotels.map((hotel, index) => (
                <article
                  key={hotel.hotelNo || index}
                  className="bg-white rounded-3xl overflow-hidden border border-rose-200/80 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* ホテル画像エリア */}
                    <div className="relative aspect-[16/10] w-full bg-stone-100 overflow-hidden">
                      {hotel.hotelImageUrl ? (
                        <img
                          src={hotel.hotelImageUrl}
                          alt={hotel.hotelName}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-stone-400 text-xs">
                          画像準備中
                        </div>
                      )}
                      <div className="absolute top-3 left-3 bg-rose-700/90 backdrop-blur-sm text-white text-[11px] font-bold px-2.5 py-1 rounded-full shadow">
                        おすすめ #{index + 1}
                      </div>
                      {hotel.hotelMinCharge ? (
                        <div className="absolute bottom-3 right-3 bg-stone-900/85 backdrop-blur-sm text-white px-3 py-1 rounded-lg text-xs font-bold shadow">
                          <span className="text-[10px] text-rose-200 font-normal">最安目安 </span>
                          ¥{hotel.hotelMinCharge.toLocaleString()}〜
                          <span className="text-[10px] text-stone-300 font-normal"> /人</span>
                        </div>
                      ) : null}
                    </div>

                    {/* ホテル詳細情報 */}
                    <div className="p-5 space-y-3">
                      <div>
                        <h3 className="font-bold font-journal-serif text-base md:text-lg text-stone-900 leading-snug">
                          {hotel.hotelName}
                        </h3>
                        {hotel.address1 && hotel.address2 ? (
                          <p className="text-[11px] text-stone-500 mt-1 flex items-center gap-1">
                            <span>📍</span>
                            <span>{hotel.address1}{hotel.address2}</span>
                          </p>
                        ) : null}
                      </div>

                      {/* 評価レビュー */}
                      <div className="flex items-center gap-3 bg-rose-50/70 p-2.5 rounded-xl border border-rose-100 text-xs">
                        <div className="flex items-center gap-1 text-amber-500 font-bold">
                          <span>★</span>
                          <span className="text-stone-900">{hotel.reviewAverage ? hotel.reviewAverage.toFixed(1) : "高評価"}</span>
                        </div>
                        {hotel.reviewCount ? (
                          <span className="text-stone-500 text-[11px]">
                            ({hotel.reviewCount.toLocaleString()}件のクチコミ)
                          </span>
                        ) : null}
                        {hotel.access ? (
                          <span className="text-[11px] text-stone-600 truncate ml-auto max-w-[180px]">
                            {hotel.access}
                          </span>
                        ) : null}
                      </div>

                      {/* 特徴・アピール */}
                      <p className="text-xs text-stone-600 leading-relaxed line-clamp-2">
                        {hotel.hotelSpecial || ""}
                      </p>
                    </div>
                  </div>

                  {/* 予約ボタン */}
                  <div className="p-5 pt-0">
                    <a
                      href={hotel.affiliateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full text-center py-3 text-xs md:text-sm font-bold text-white bg-gradient-to-r from-rose-600 via-rose-500 to-rose-700 hover:from-rose-500 hover:to-rose-600 rounded-xl shadow-md hover:shadow-lg transition-all duration-200"
                    >
                      🌹 楽天トラベルで記念日プラン・空室を見る
                    </a>
                  </div>
                </article>
              ))
            ) : (
              <div className="col-span-2 p-10 text-center text-stone-500 text-xs">
                提携ホテル情報を読み込み中です。
              </div>
            )}
          </div>
        </section>

        {/* サプライズ演出の手順＆スマート予約ガイド */}
        <section className="bg-gradient-to-br from-rose-900 to-stone-950 text-white rounded-3xl p-6 md:p-10 shadow-xl border border-rose-800 space-y-6">
          <div className="border-b border-rose-800/80 pb-4">
            <span className="text-[11px] font-bold tracking-widest text-rose-300 uppercase">SURPRISE TIPS</span>
            <h2 className="text-xl md:text-2xl font-black font-journal-serif text-white mt-1">
              パートナーを感動させる！サプライズ演出の段取り3ステップ
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-xs md:text-sm">
            <div className="bg-white/10 border border-white/10 rounded-2xl p-5 space-y-2">
              <span className="text-xs font-bold text-rose-300 block">STEP 1｜予約直後の連絡</span>
              <p className="text-rose-100/90 text-xs leading-relaxed">
                予約完了後すぐに宿へ電話またはメール。「記念日のサプライズ利用であること」を伝え、ケーキを出すタイミング（夕食デザート時 or 部屋戻り後）を綿密に打ち合わせます。
              </p>
            </div>
            <div className="bg-white/10 border border-white/10 rounded-2xl p-5 space-y-2">
              <span className="text-xs font-bold text-rose-300 block">STEP 2｜プレゼント・手紙の事前送付</span>
              <p className="text-rose-100/90 text-xs leading-relaxed">
                かさばるプレゼントや手紙は、宿泊前日着指定で宿気付にて郵送可能。「チェックイン前にお部屋にセッティング」を依頼しておけば、入室した瞬間に驚きの演出が完成します。
              </p>
            </div>
            <div className="bg-white/10 border border-white/10 rounded-2xl p-5 space-y-2">
              <span className="text-xs font-bold text-rose-300 block">STEP 3｜会計は事前決済でスマートに</span>
              <p className="text-rose-100/90 text-xs leading-relaxed">
                チェックアウト時のフロント精算でパートナーに金額を見せないよう、楽天トラベルでの事前カード決済がスマート。当日は入湯税や追加ドリンク代のみの支払いでスマートに退館できます。
              </p>
            </div>
          </div>

          <div className="pt-2 text-center">
            <SpecialCouponBanner variant="inline" className="max-w-xl mx-auto" />
          </div>
        </section>
      </main>
    </div>
  );
}
