import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";
import SpecialCouponBanner from "@/app/components/SpecialCouponBanner";

export const metadata: Metadata = {
  title: "【彼女の誕生日サプライズホテル東京おすすめ5選】夜景ビュー・ホールケーキ＆バルーン装飾確約プラン",
  description: "彼女や彼氏の誕生日・記念日を極上にする東京のラグジュアリーホテル特集！東京タワーや摩天楼を望む高層階客室、メッセージプレート付きケーキ・シャンパン付きプラン、憧れのサプライズ演出徹底比較。",
  keywords: [
    "東京 誕生日 サプライズ ホテル",
    "彼女 誕生日 ホテル 東京",
    "東京 夜景 ホテル 記念日",
    "東京 バルーン装飾 ホテル プラン",
    "東京ステーションホテル 記念日",
    "インターコンチネンタル東京ベイ 夜景",
    "ラビスタ東京ベイ 誕生日",
    "東京 ホテル ケーキ付きプラン",
    "誕生日 ホテル サプライズ バースデー"
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
      return data["tokyo-birthday-surprise-luxury-hotel-guide"]?.hotels || [];
    }
  } catch (e) {
    console.error("Failed to load hotels for tokyo-birthday-surprise-luxury-hotel-guide", e);
  }
  return [];
}

export default function TokyoBirthdaySurpriseHotelPage() {
  const hotels = loadHotels();

  // サプライズ演出スタイル比較
  const surpriseStyles = [
    {
      title: "煌めくウォーターフロント＆パノラマ夜景",
      subtitle: "ベイブリッジや摩天楼を眺めながら乾杯",
      icon: "🌃",
      recommend: "竹芝・豊洲ベイエリア",
      points: [
        "窓一面に広がる大パノラマ夜景とカクテルタイム",
        "テラスや展望露天風呂から東京湾を一望",
        "非日常のリゾート感と都心の洗練を両立"
      ]
    },
    {
      title: "歴史と格式を紡ぐクラシックステイ",
      subtitle: "一生の記憶に刻まれる重要文化財の重厚感",
      icon: "🏛️",
      recommend: "東京駅丸の内エリア",
      points: [
        "東京駅直結の荘厳なヨーロピアンクラシック空間",
        "洗練されたコンシェルジュによるオーダーメイド演出",
        "駅舎ドームを望むプレミアムな客室ビュー"
      ]
    },
    {
      title: "贅沢バルーン＆ケーキ確約のアニバーサリー",
      subtitle: "ドアを開けた瞬間の歓声とフォトジェニック空間",
      icon: "🎈",
      recommend: "記念日特化プラン対象ホテル",
      points: [
        "ベッド周り・窓ガラスのメッセージ装飾手配",
        "パティシエ特製ホールケーキ＆ハーフシャンパン",
        "翌日レイトチェックアウトで余韻をゆっくり楽しむ"
      ]
    }
  ];

  // 誕生日サプライズ 成功タイムライン
  const birthdayTimeline = [
    {
      time: "15:00",
      action: "スマートチェックイン ＆ 客室直行",
      detail: "事前決済を済ませておき、フロントではスムーズにカードキーを受け取るだけ。客室に入った瞬間、窓から広がる東京のスカイラインに彼女も大興奮。"
    },
    {
      time: "17:30",
      action: "黄昏のトワイライトタイム ＆ シャンパン抜栓",
      detail: "夕日が沈み、ビル群やレインボーブリッジに灯りが灯り始めるマジックアワー。プラン特典の冷えたシャンパンを開けて、まずは2人だけで最初の乾杯。"
    },
    {
      time: "19:00",
      action: "ホテル内メインダイニングで記念日フルコース",
      detail: "夜景を一望する窓際確約席。旬の食材を使ったフレンチや鉄板焼きディナーを堪能。スタッフのさりげないエスコートで特別感を高めます。"
    },
    {
      time: "21:30",
      action: "客室へ戻ると…バルーン装飾＆特製ケーキのサプライズ！",
      detail: "食事中にホテルスタッフがセットした「Happy Birthday」のバルーンアート、花束、ろうそく揺れるホールケーキが二人を出迎えます。"
    },
    {
      time: "23:00",
      action: "深夜の展望バスタイム ＆ 語り合うバータイム",
      detail: "ビューバス付きルームなら、深夜の静かな夜景を眺めながらのバスタイム。ラウンジや客室で手紙を渡し、日頃の感謝と愛を伝えます。"
    },
    {
      time: "翌朝 11:00",
      action: "贅沢ビュッフェ朝食 ＆ レイトチェックアウト",
      detail: "名物のいくらかけ放題や焼き立てクロワッサンをゆったり味わい、出発直前までお部屋で寛ぐ最高のバースデーフィナーレ。"
    }
  ];

  return (
    <div className="bg-amber-50/30 text-stone-800 min-h-screen font-sans antialiased">
      {/* ヒーローヘッダー（Amber/Gold Luxury） */}
      <header className="relative bg-gradient-to-b from-stone-950 via-amber-950 to-stone-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:20px_20px]" />

        <div className="relative max-w-4xl mx-auto px-4 pt-14 pb-16 md:pt-20 md:pb-24 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/20 border border-amber-400/50 text-amber-300 text-xs md:text-sm font-semibold tracking-wide">
            <span>✨</span>
            <span>ANNIVERSARY & BIRTHDAY LUXURY HOTELS IN TOKYO</span>
          </div>

          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight md:leading-[1.2] text-amber-50">
            【彼女の誕生日サプライズホテル東京おすすめ5選】<br className="hidden sm:inline" />
            夜景ビュー・ホールケーキ＆<br className="hidden sm:inline" />
            バルーン装飾確約プラン徹底解説
          </h1>

          <p className="text-sm md:text-base text-amber-100/90 max-w-2xl mx-auto leading-relaxed font-light">
            「絶対に喜ばせたい」特別な誕生日。息をのむ東京夜景、ドアを開けた瞬間のバルーン装飾、パティシエ特製ホールケーキまで。パートナーの笑顔が確約された極上ラグジュアリーホテルを厳選しました。
          </p>

          <div className="flex flex-wrap justify-center gap-2.5 pt-2 text-xs text-amber-200">
            <span className="bg-amber-950/70 border border-amber-700/60 px-3 py-1 rounded-lg">🌃 東京タワー＆東京湾ビュー</span>
            <span className="bg-amber-950/70 border border-amber-700/60 px-3 py-1 rounded-lg">🎂 メッセージプレート付ケーキ手配</span>
            <span className="bg-amber-950/70 border border-amber-700/60 px-3 py-1 rounded-lg">🍾 シャンパン特典付きプラン</span>
            <span className="bg-amber-950/70 border border-amber-700/60 px-3 py-1 rounded-lg">💎 楽天トラベル厳選ラグジュアリー</span>
          </div>
        </div>
      </header>

      {/* メインコンテンツ */}
      <main className="max-w-4xl mx-auto px-4 py-10 space-y-12">
        {/* サプライズ演出のスタイル選び */}
        <section className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-amber-200/80 space-y-6">
          <div className="border-b border-amber-100 pb-4 text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-600">CHOOSE YOUR SURPRISE STYLE</span>
            <h2 className="text-xl md:text-2xl font-bold font-journal-serif text-stone-900 mt-1">
              彼女の好みに合わせて選ぶ「3つのサプライズスタイル」
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {surpriseStyles.map((style, idx) => (
              <div
                key={idx}
                className="bg-amber-50/50 border border-amber-200/70 rounded-2xl p-5 space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="text-3xl">{style.icon}</div>
                  <h3 className="font-bold text-stone-900 text-base">{style.title}</h3>
                  <p className="text-xs text-amber-800 font-semibold">{style.subtitle}</p>
                  <div className="text-[11px] bg-amber-100 text-amber-900 px-2 py-0.5 rounded inline-block font-bold">
                    おすすめ: {style.recommend}
                  </div>
                  <ul className="text-xs text-stone-600 space-y-1 pt-1">
                    {style.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-1.5">
                        <span className="text-amber-500 font-bold">✓</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 楽天トラベル スペシャルクーポンバナー */}
        <SpecialCouponBanner variant="prominent" />

        {/* 内部リンク（ディズニー・東京近郊） */}
        <nav className="bg-amber-100/60 border border-amber-300/80 rounded-2xl p-5 md:p-6 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-xs md:text-sm font-bold text-amber-950 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-600" />
              記念日＆ディズニー旅行の関連ガイド（あわせて読む）
            </h2>
            <span className="text-[10px] text-amber-800 bg-amber-200/70 font-semibold px-2 py-0.5 rounded">
              オフィシャルホテル比較
            </span>
          </div>
          <div>
            <Link
              href="/tokyo-disney-resort-family-hotel-comparison"
              className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-amber-200/90 hover:border-amber-400 hover:shadow-md transition group"
            >
              <span className="text-amber-600 font-bold text-xl">🏰</span>
              <div>
                <span className="font-bold text-stone-900 group-hover:text-amber-700 transition block text-sm">
                  東京ディズニーリゾート オフィシャル＆周辺ホテル徹底比較
                </span>
                <span className="text-xs text-stone-500">
                  舞浜エリアのホテル客室眺望・大浴場・シャトルバス利便性を網羅！記念日ディズニーデートにもおすすめ
                </span>
              </div>
            </Link>
          </div>
        </nav>

        {/* 理想の誕生日サプライズ当日の流れ */}
        <section className="bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-amber-200/80 space-y-6">
          <div className="border-b border-amber-100 pb-4">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-600">PERFECT SURPRISE TIMELINE</span>
            <h2 className="text-xl md:text-2xl font-black font-journal-serif text-stone-900 mt-1">
              感動の涙を誘う！東京誕生日ホテルステイ タイムスケジュール
            </h2>
            <p className="text-xs md:text-sm text-stone-600 mt-1">
              事前の準備から当日のスマートな段取りまで、失敗しない完全シミュレーション。
            </p>
          </div>

          <div className="relative border-l-2 border-amber-300 ml-4 md:ml-6 pl-4 md:pl-6 space-y-6">
            {birthdayTimeline.map((item, idx) => (
              <div key={idx} className="relative group">
                <div className="absolute -left-[23px] md:-left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-amber-500 border-2 border-white shadow" />
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-extrabold text-amber-800 bg-amber-100 px-2 py-0.5 rounded">
                    {item.time}
                  </span>
                  <h3 className="text-sm md:text-base font-bold text-stone-900">
                    {item.action}
                  </h3>
                </div>
                <p className="text-xs md:text-sm text-stone-600 leading-relaxed pl-1">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 厳選5選 ホテル一覧表示 */}
        <section className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-2 border-b border-amber-200 pb-3">
            <div>
              <div className="flex items-center gap-2 text-amber-600 font-bold text-xs uppercase tracking-wider">
                <span>💎 TOP 5 LUXURY SELECTION</span>
              </div>
              <h2 className="text-xl md:text-2xl font-black font-journal-serif text-stone-900 mt-1">
                誕生日・記念日に選ばれる東京の人気ラグジュアリーホテル5選
              </h2>
            </div>
            <span className="text-xs text-stone-500 font-medium">
              楽天トラベル掲載・記念日特典対象ホテル
            </span>
          </div>

          <div className="space-y-6">
            {hotels.length > 0 ? (
              hotels.map((hotel, index) => (
                <article
                  key={hotel.hotelNo || index}
                  className="bg-white rounded-3xl overflow-hidden border border-amber-200/80 shadow-sm hover:shadow-xl transition-all duration-300 grid grid-cols-1 md:grid-cols-12"
                >
                  {/* 画像エリア */}
                  <div className="relative md:col-span-5 bg-stone-100 aspect-[16/10] md:aspect-auto min-h-[220px]">
                    {hotel.hotelImageUrl ? (
                      <img
                        src={hotel.hotelImageUrl}
                        alt={hotel.hotelName}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-stone-400 text-xs">
                        画像準備中
                      </div>
                    )}
                    <div className="absolute top-3 left-3 bg-amber-600 text-white text-[11px] font-black px-3 py-1 rounded-full shadow-md">
                      RANK #{index + 1}
                    </div>
                  </div>

                  {/* テキスト詳細エリア */}
                  <div className="md:col-span-7 p-6 flex flex-col justify-between space-y-4">
                    <div className="space-y-3">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div className="flex items-center gap-2 bg-amber-50 border border-amber-200 px-2.5 py-1 rounded-lg text-xs">
                          <span className="text-amber-500 font-bold">★</span>
                          <span className="font-bold text-stone-900">{hotel.reviewAverage ? hotel.reviewAverage.toFixed(1) : "高評価"}</span>
                          {hotel.reviewCount ? (
                            <span className="text-stone-500 text-[11px]">
                              ({hotel.reviewCount.toLocaleString()}件)
                            </span>
                          ) : null}
                        </div>
                        {hotel.hotelMinCharge ? (
                          <div className="text-right">
                            <span className="text-[10px] text-stone-500">1名あたり最安目安 </span>
                            <span className="text-base font-black text-amber-700">
                              ¥{hotel.hotelMinCharge.toLocaleString()}〜
                            </span>
                          </div>
                        ) : null}
                      </div>

                      <h3 className="font-bold font-journal-serif text-lg md:text-xl text-stone-900 leading-snug">
                        {hotel.hotelName}
                      </h3>

                      {hotel.access ? (
                        <p className="text-xs text-stone-500 flex items-start gap-1.5">
                          <span className="text-amber-600 font-bold shrink-0">📍</span>
                          <span>{hotel.access}</span>
                        </p>
                      ) : null}

                      <p className="text-xs md:text-sm text-stone-600 leading-relaxed font-normal bg-stone-50 p-3 rounded-xl border border-stone-100">
                        {hotel.hotelSpecial || ""}
                      </p>
                    </div>

                    <div>
                      <a
                        href={hotel.affiliateUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-full py-3.5 text-xs md:text-sm font-black text-stone-900 bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 hover:from-amber-500 hover:to-amber-400 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 group cursor-pointer"
                      >
                        <span>🥂 記念日プラン・空室状況を楽天トラベルで確認</span>
                        <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                      </a>
                    </div>
                  </div>
                </article>
              ))
            ) : (
              <div className="p-10 text-center text-stone-500 text-xs">
                ホテル情報を読み込み中です。
              </div>
            )}
          </div>
        </section>

        {/* 失敗しない！記念日プラン予約の秘訣 */}
        <section className="bg-stone-950 text-stone-100 rounded-3xl p-6 md:p-10 shadow-xl border border-amber-900/50 space-y-6">
          <div className="border-b border-amber-900/40 pb-4">
            <span className="text-xs font-bold tracking-widest text-amber-400 uppercase">HOTEL SECRET GUIDE</span>
            <h2 className="text-xl md:text-2xl font-black font-journal-serif text-white mt-1">
              コンシェルジュに相談すべき「3大サプライズリクエスト」
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-xs md:text-sm">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 space-y-2">
              <span className="text-amber-400 font-bold text-sm block">1. 高層階・方角（夜景）の希望</span>
              <p className="text-stone-300 leading-relaxed text-xs">
                予約時の備考欄に「彼女の誕生日記念です。可能であれば高層階、または夜景の綺麗な東京タワー側/ベイブリッジ側を希望します」と一言添えるだけで、空室状況に応じて配慮してもらえる確率が高まります。
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 space-y-2">
              <span className="text-amber-400 font-bold text-sm block">2. ケーキの提供タイミング</span>
              <p className="text-stone-300 leading-relaxed text-xs">
                ディナーのデザートの瞬間にキャンドル付きで出すか、ディナーから部屋に戻ったタイミングでテーブルにセッティングしておくかを指定。部屋戻り時のサプライズは驚きが倍増します。
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 space-y-2">
              <span className="text-amber-400 font-bold text-sm block">3. バルーンや花束の持ち込み受取</span>
              <p className="text-stone-300 leading-relaxed text-xs">
                ネット注文した花束やバルーンギフトをホテル気付で事前配送可能か確認。多くのラグジュアリーホテルでは、チェックイン前にお部屋に綺麗に並べておいてくれます。
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
