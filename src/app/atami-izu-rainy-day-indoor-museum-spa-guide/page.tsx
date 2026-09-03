import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";
import SpecialCouponBanner from "@/app/components/SpecialCouponBanner";

export const metadata: Metadata = {
  title: "【熱海 雨の日の観光＆温泉】MOA美術館・起雲閣・昭和レトロ喫茶＆インフィニティ露天風呂",
  description:
    "雨でも濡れずに楽しめる熱海観光！絶景パノラマと国宝を誇るMOA美術館、文豪が愛した名邸「起雲閣」、平和通り商店街のアーケード散歩、雨天でも心地よい海一望温泉リゾートまとめ。",
  keywords: [
    "熱海 雨の日 観光",
    "熱海 室内 観光スポット",
    "MOA美術館 雨",
    "熱海 起雲閣 雨の日",
    "熱海 昭和レトロ 喫茶店",
    "熱海 平和通り アーケード 雨",
    "熱海温泉 インフィニティ露天風呂",
    "熱海 雨 デート",
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
      return data["atami-izu-rainy-day-indoor-museum-spa-guide"]?.hotels || [];
    }
  } catch (e) {
    console.error("Failed to load hotels for atami-izu-rainy-day-indoor-museum-spa-guide", e);
  }
  return [];
}

export default function AtamiIzuRainyDayIndoorMuseumSpaPage() {
  const hotels = loadHotels();

  // 熱海 雨の日 4大室内ハイライト
  const indoorHighlights = [
    {
      num: "01",
      title: "MOA美術館：雨霧の相模灘と国宝を愛でるアートの殿堂",
      badge: "完全屋内＆超大型ミュージアム",
      description:
        "高台に位置し、総延長200mに及ぶ幻想的なエスカレーターと万華鏡のようなドーム天井を抜けて入館。尾形光琳の国宝『紅白梅図屏風』をはじめとする至宝の数々をガラスのない展示ケースで間近に鑑賞できます。海を見下ろすカフェ『the cafe』でオーガニックコーヒーを片手に雨に煙る水平線を眺める時間は格別です。",
      features: [
        "雨天でも濡れずに移動できる巨大エスカレーター空間",
        "杉本博司氏設計の現代的で洗練された展示室",
        "館内に点在する本格茶室や鎧塚俊彦氏プロデュースのスイーツ店",
      ],
      access: "JR熱海駅バスターミナル8番乗り場より「MOA美術館行き」直行バスで約7分（終点下車すぐ）",
    },
    {
      num: "02",
      title: "起雲閣（きうんかく）：文豪が逗留した大正・昭和の絢爛建築",
      badge: "大正ロマン＆文豪おこもり",
      description:
        "熱海三大別荘の一つとして知られ、太宰治、谷崎潤一郎、志賀直哉ら名だたる文豪が愛した歴史的邸宅。日本庭園を囲む日本家屋と、ステンドグラスやローマ風タイル風呂が美しい洋館が融合。雨滴が滴る池の波紋を縁側から眺めながら、贅沢な静寂に浸ることができます。",
      features: [
        "雨粒がしっとりと映える名園と大正硝子越しの庭園景観",
        "螺鈿細工やステンドグラスが鮮やかに灯る洋館「玉渓」「金碧」",
        "敷地内の「やすらぎ喫茶」でお抹茶や珈琲を味わいながら雨宿り",
      ],
      access: "熱海駅から「起雲閣前」バス停下車すぐ（所要約10分）",
    },
    {
      num: "03",
      title: "平和通り・仲見世名店街：雨濡れなしのアーケード食べ歩き",
      badge: "駅直結アーケード＆昭和レトロ",
      description:
        "熱海駅改札を出てすぐ目の前に広がる2つの商店街は、頭上をアーケードが覆っているため傘を差さずに散策できます。温泉まんじゅうや熱海プリン、金目鯛の揚げかまぼこなど、温かい名物グルメをハシゴ。創業数十年の純喫茶『パインツリー』などでクリームソーダやプリンアラモードを楽しむのも定番。",
      features: [
        "改札から徒歩10秒でアクセスできるアーケード構造",
        "蒸したての湯気立ちのぼる温泉まんじゅうの試食",
        "昭和レトロなゲーム機やテーブル席が残る老舗純喫茶巡り",
      ],
      access: "JR熱海駅東口を出て右手すぐ",
    },
    {
      num: "04",
      title: "インフィニティ温泉＆オーシャンスパ：雨を眺める絶景温浴",
      badge: "絶景スパ＆日帰り温浴",
      description:
        "熱海ならではの贅沢は、海と空と湯船が一体化するインフィニティ露天風呂。雨の日は白波と雨霧が相まって、まるで水墨画の世界に浮かんでいるかのような幻想的な入浴が叶います。屋内大浴場やサウナ、温水ジェットバスも完備されたリゾートで極上のリラクゼーションを。",
      features: [
        "肌触り柔らかな弱アルカリ性・塩化物温泉で身体の芯から温まる",
        "波の音と雨音がシンクロする唯一無二の癒やし環境",
        "館内ラウンジやリラクゼーションスペースで湯上がり読書",
      ],
      access: "熱海サンビーチ沿い・熱海港周辺各ホテル＆スパ施設",
    },
  ];

  // 雨の日モデルスケジュール
  const rainyDayCourse = [
    {
      time: "10:30",
      spot: "JR熱海駅 到着 ＆ 平和通りアーケードで名物食べ歩き",
      detail:
        "東海道新幹線で東京から最速35分。駅直結の平和通り・仲見世商店街へ。屋根付きの通りで熱々の揚げかまぼこや温泉まんじゅうを頬張りながら雨宿り散歩。",
    },
    {
      time: "11:45",
      spot: "MOA美術館へ直行バスで移動 ＆ 絶景アートランチ",
      detail:
        "駅前バスターミナルから直行バスでMOA美術館へ。雨に煙る相模灘をガラス越しに望みながら、館内『the cafe』や二條新町そば処で上品なランチを堪能。国宝コレクションを鑑賞。",
    },
    {
      time: "14:30",
      spot: "起雲閣（きうんかく）で大正ロマンの意匠とお抹茶",
      detail:
        "バスで起雲閣へ。太宰治が『人間失格』を執筆した部屋やステンドグラス輝くサンルームを歩き、雨に濡れる庭園を眺めながらやすらぎ喫茶でお抹茶をいただく至福の時間。",
    },
    {
      time: "16:00",
      spot: "オーシャンビュー温泉ホテルへチェックイン ＆ インフィニティ風呂",
      detail:
        "早めに宿へチェックイン。相模湾を一望する展望露天風呂や内湯に浸かり、雨の海のグラデーションを眺めながら旅の疲れを完全に癒やします。",
    },
    {
      time: "18:30",
      spot: "金目鯛の煮付け＆相模湾鮮魚の舟盛り会席ディナー",
      detail:
        "伊豆名物の金目鯛を濃厚な甘辛タレで炊き上げた逸品や、朝獲れの地魚刺身に舌鼓。雨の夜景を眺めながら地酒で乾杯。",
    },
  ];

  return (
    <div className="min-h-screen bg-stone-950 text-amber-50 selection:bg-amber-700 selection:text-white pb-20 font-sans">
      {/* ヒーローヘッダー (Warm Amber / Bronze Palette) */}
      <header className="relative bg-gradient-to-b from-stone-950 via-amber-950/40 to-stone-900 border-b border-amber-900/50 pt-16 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:24px_24px]"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-950/80 border border-amber-700 text-amber-300 text-xs font-semibold tracking-wide mb-6 shadow-inner">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
            雨でも濡れない！熱海のアート・名邸・レトロ喫茶＆名湯
          </div>

          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-amber-100 leading-tight tracking-tight mb-6">
            【熱海 雨の日の観光＆温泉】
            <br />
            <span className="bg-gradient-to-r from-amber-200 via-orange-300 to-amber-400 bg-clip-text text-transparent">
              MOA美術館・起雲閣・昭和レトロ喫茶＆インフィニティ露天風呂
            </span>
          </h1>

          <p className="text-amber-200/90 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto mb-8">
            雨の熱海は、風情とぬくもりに満ちた大人の隠れ家リゾート。山上に聳えるMOA美術館の巨大パノラマと至高の美術品、文豪たちが静養に訪れた起雲閣のレトロ建築、駅前のアーケード商店街に立ち並ぶ純喫茶、そして雨音と潮騒が交錯するオーシャンビュー温泉。雨の日だからこそ心ゆくまで満喫できる熱海旅をご案内します。
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs sm:text-sm text-amber-200">
            <span className="flex items-center gap-1.5 bg-amber-950/60 px-3 py-1.5 rounded-lg border border-amber-800/80">
              🏛️ MOA美術館 直行バス完備
            </span>
            <span className="flex items-center gap-1.5 bg-amber-950/60 px-3 py-1.5 rounded-lg border border-amber-800/80">
              🏮 平和通りアーケード食べ歩き
            </span>
            <span className="flex items-center gap-1.5 bg-amber-950/60 px-3 py-1.5 rounded-lg border border-amber-800/80">
              ♨️ 海一望インフィニティ温泉
            </span>
          </div>
        </div>
      </header>

      {/* 楽天トラベルスペシャルクーポンバナー */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 -mt-8 relative z-20">
        <div className="bg-amber-950/90 backdrop-blur-md rounded-2xl p-5 border border-amber-700/80 shadow-2xl">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <span className="inline-block px-2.5 py-0.5 rounded bg-amber-500/20 text-amber-300 text-xs font-bold border border-amber-500/30 mb-1">
                熱海・伊豆宿泊応援キャンペーン
              </span>
              <h2 className="text-base sm:text-lg font-bold text-white">
                楽天トラベル 熱海温泉ホテル割引クーポン配布中！
              </h2>
              <p className="text-xs text-amber-200/90">
                オーシャンビュー露天風呂や金目鯛会席付きプランに使えるお得な限定クーポン
              </p>
            </div>
            <div className="w-full sm:w-auto">
              <SpecialCouponBanner variant="inline" />
            </div>
          </div>
        </div>
      </section>

      {/* メインコンテンツ */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 mt-14 space-y-16">
        {/* セクション1: 熱海 雨の日の4大インドアハイライト */}
        <section className="space-y-6">
          <div className="border-b border-amber-900/60 pb-3">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block mb-1">
              INDOOR ATTRACTIONS
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-amber-100">
              雨でも濡れない＆風情深まる熱海の4大室内スポット
            </h2>
          </div>

          <div className="space-y-8">
            {indoorHighlights.map((spot, idx) => (
              <div
                key={idx}
                className="bg-stone-900/80 rounded-2xl p-6 sm:p-8 border border-amber-900/60 shadow-xl space-y-4 hover:border-amber-700/80 transition-colors"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <span className="text-xl font-black text-amber-400 font-mono">
                      {spot.num}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-white">
                      {spot.title}
                    </h3>
                  </div>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-amber-950 border border-amber-700 text-amber-300">
                    {spot.badge}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-amber-100/90 leading-relaxed">
                  {spot.description}
                </p>

                <div className="bg-stone-950/70 rounded-xl p-4 border border-amber-950 space-y-2">
                  <div className="text-xs font-bold text-amber-300">💡 雨の日の魅力・ポイント:</div>
                  <ul className="space-y-1 text-xs text-amber-200/90">
                    {spot.features.map((f, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2">
                        <span className="text-amber-400">◆</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="text-[11px] text-amber-400/80 pt-1 border-t border-amber-950">
                    🚌 {spot.access}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* セクション2: 雨の日のモデルコースタイムライン */}
        <section className="space-y-6">
          <div className="border-b border-amber-900/60 pb-3">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block mb-1">
              MODEL TIMELINE
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-amber-100">
              雨の熱海を満喫する日帰り〜1泊2日タイムスケジュール
            </h2>
            <p className="text-xs sm:text-sm text-amber-200/80 mt-1">
              駅前アーケードからスタートし、直行バスとタクシーをスマートに組み合わせて雨を避ける王道行程です。
            </p>
          </div>

          <div className="bg-stone-900/60 rounded-2xl p-6 sm:p-8 border border-amber-900/50">
            <div className="relative border-l-2 border-amber-800/80 ml-4 pl-6 space-y-8">
              {rainyDayCourse.map((item, cIdx) => (
                <div key={cIdx} className="relative group">
                  <div className="absolute -left-[31px] top-1 w-3.5 h-3.5 rounded-full bg-amber-500 border-2 border-stone-950 group-hover:scale-125 transition-transform"></div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-mono font-bold text-amber-300 bg-stone-950 px-2 py-0.5 rounded border border-amber-900">
                      {item.time}
                    </span>
                    <h3 className="text-base font-bold text-white">{item.spot}</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-amber-200/80 leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* セクション3: 掲載宿一覧（loadHotels() による楽天トラベル提携宿） */}
        <section className="space-y-6">
          <div className="border-b border-amber-900/60 pb-3">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block mb-1">
              HOTEL & RESORT
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-amber-100">
              熱海のおすすめ温泉リゾート
            </h2>
            <p className="text-xs sm:text-sm text-amber-200/80 mt-1">
              海を望む展望風呂や美味しい海鮮料理、雨天時でも心地よい滞在ができる人気宿です。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {hotels.map((hotel) => {
              const special = hotel.hotelSpecial || "";
              const minCharge = hotel.hotelMinCharge
                ? `${hotel.hotelMinCharge.toLocaleString()}円〜`
                : "プラン一覧参照";

              return (
                <article
                  key={hotel.hotelNo}
                  className="bg-stone-900 rounded-2xl overflow-hidden border border-amber-900/70 shadow-xl flex flex-col justify-between hover:border-amber-600 transition-all duration-300"
                >
                  <div>
                    {hotel.hotelImageUrl ? (
                      <div className="relative aspect-[16/10] w-full overflow-hidden bg-stone-950">
                        <img
                          src={hotel.hotelImageUrl}
                          alt={hotel.hotelName}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                        <div className="absolute top-3 left-3 bg-stone-950/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-amber-300 border border-amber-800">
                          {hotel.nearestStation ? `最寄: ${hotel.nearestStation}駅` : "熱海温泉"}
                        </div>
                      </div>
                    ) : (
                      <div className="aspect-[16/10] w-full bg-stone-950 flex items-center justify-center text-amber-400">
                        ♨️ 画像準備中
                      </div>
                    )}

                    <div className="p-5 space-y-3">
                      <div className="flex items-center justify-between gap-2">
                        {hotel.reviewAverage && (
                          <div className="flex items-center gap-1 text-xs font-bold text-amber-400 bg-amber-950/80 px-2 py-0.5 rounded border border-amber-700">
                            <span>★</span>
                            <span>{hotel.reviewAverage.toFixed(2)}</span>
                            {hotel.reviewCount && (
                              <span className="text-amber-200 text-[10px]">({hotel.reviewCount}件)</span>
                            )}
                          </div>
                        )}
                        <span className="text-xs text-amber-300">
                          {hotel.address1} {hotel.address2}
                        </span>
                      </div>

                      <h3 className="text-base sm:text-lg font-bold text-white line-clamp-2 leading-snug">
                        {hotel.hotelName}
                      </h3>

                      {special && (
                        <p className="text-xs text-amber-200/90 line-clamp-3 leading-relaxed bg-stone-950/60 p-2.5 rounded-lg border border-amber-950">
                          {special}
                        </p>
                      )}

                      {hotel.access && (
                        <p className="text-[11px] text-amber-300">
                          🚗 アクセス: {hotel.access}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="p-5 pt-0 border-t border-amber-900/60 mt-2">
                    <div className="flex items-baseline justify-between pt-3 mb-3">
                      <span className="text-xs text-amber-300 font-medium">最安参考料金（1名）:</span>
                      <span className="text-lg font-extrabold text-amber-300 font-mono">
                        {minCharge}
                      </span>
                    </div>

                    <a
                      href={hotel.affiliateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white font-bold text-xs sm:text-sm text-center shadow-lg shadow-amber-950/50 transition-all flex items-center justify-center gap-2"
                    >
                      <span>楽天トラベルで空室・プランを見る</span>
                      <span>✈️</span>
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* 内部リンク・関連ガイド */}
        <section className="bg-stone-900/60 rounded-2xl p-6 sm:p-8 border border-amber-900/60">
          <h2 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
            <span>🔗</span> 熱海・伊豆旅行の役立つ関連ガイド
          </h2>
          <p className="text-xs text-amber-200/80 mb-4">
            日帰り温泉ランチや旅行費用の徹底検証ガイドも合わせてお読みいただけます。
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              href="/atami-daytrip-hotspring-lunch-guide"
              className="group block p-4 rounded-xl bg-stone-950/80 border border-amber-900/70 hover:border-amber-500/60 transition-all"
            >
              <span className="text-xs font-bold text-amber-400 block mb-1">日帰りプラン ♨️</span>
              <h3 className="text-sm font-bold text-white group-hover:text-amber-200 transition-colors">
                【熱海 日帰り温泉 ランチ付きおすすめ】絶景露天風呂＆海鮮ランチ・個室休憩プラン
              </h3>
              <p className="text-xs text-amber-300/80 mt-1 line-clamp-2">
                宿泊せずに贅沢ランチと名湯を堪能できる日帰りプランを徹底比較。
              </p>
            </Link>

            <Link
              href="/atami-izu-travel-budget-guide"
              className="group block p-4 rounded-xl bg-stone-950/80 border border-amber-900/70 hover:border-amber-500/60 transition-all"
            >
              <span className="text-xs font-bold text-amber-400 block mb-1">費用シミュレーション 💰</span>
              <h3 className="text-sm font-bold text-white group-hover:text-amber-200 transition-colors">
                【熱海・伊豆旅行 費用】日帰り・1泊2日・2泊3日いくら？新幹線代・宿代・温泉代
              </h3>
              <p className="text-xs text-amber-300/80 mt-1 line-clamp-2">
                交通費や食事代、観光入場料を含めたリアルな出費計算ガイド。
              </p>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
