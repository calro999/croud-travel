import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";
import SpecialCouponBanner from "@/app/components/SpecialCouponBanner";

export const metadata: Metadata = {
  title: "【京都 雨の日こそ行きたい名所＆町家カフェ】緑鮮やかな苔寺・瑠璃光院・三千院＆おこもり温泉宿",
  description:
    "雨の日に最も美しく輝く京都の庭園！雨露に濡れる大原三千院や西芳寺（苔寺）の緑、静寂の瑠璃光院、町家ブックカフェで読書タイム、嵐山温泉旅館のしっとり贅沢ステイ。",
  keywords: [
    "京都 雨の日 観光",
    "京都 苔寺 雨",
    "瑠璃光院 雨の日",
    "大原 三千院 庭園 雨",
    "京都 町家カフェ 雨宿り",
    "京都 温泉 ホテル 楽天トラベル",
    "京都 おこもり温泉宿"
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
      return data["kyoto-rainy-day-temple-cafe-guide"]?.hotels || [];
    }
  } catch (e) {
    console.error("Failed to load hotels for kyoto-rainy-day-temple-cafe-guide", e);
  }
  return [];
}

export default function KyotoRainyDayTempleCafeGuidePage() {
  const hotels = loadHotels();

  // 雨の京都で息を呑む3大しっとり庭園＆隠れ家
  const rainGardens = [
    {
      spot: "西芳寺（苔寺）＆大原三千院",
      tag: "深緑の苔絨毯と水滴の輝き",
      description:
        "雨水を吸った約120種もの苔が最も鮮やかにエメラルドグリーンへ染まる瞬間。雨露が苔の上に小さな水晶のように宿り、静寂の境内に響く雨垂れの音が日常の喧騒を洗い流してくれます。",
      charm: "晴れた日には見られない、濃密で深い緑の世界"
    },
    {
      spot: "八瀬 瑠璃光院（特別拝観）",
      tag: "黒漆の机に反射する雨の青もみじ",
      description:
        "二階書院の漆塗り机に外の庭園が鏡のように映り込む絶景。雨に煙る比叡山麓の青もみじが漆黒の天板に艶やかに反射し、まるで水墨画と現代アートが融合したかのような幻想空間を作り出します。",
      charm: "雨煙に包まれる八瀬の山並みとリフレクション"
    },
    {
      spot: "京都町家ブックカフェ＆老舗喫茶",
      tag: "坪庭の雨音を聞きながら読書とお抹茶",
      description:
        "築100年を超える京町家の奥にある「坪庭（中庭）」。軒先から落ちる雨粒を眺めながら、深煎りネルドリップ珈琲や和三盆の和菓子を片手に静かに本を開く贅沢な雨宿り時間。",
      charm: "町家独特の薄暗がりと坪庭の光のコントラスト"
    }
  ];

  // 1日の雨宿り情緒スケジュール
  const sereneSchedule = [
    {
      time: "09:00",
      title: "大原 三千院「有清園」で雨粒光る苔とわらべ地蔵に出会う",
      note: "山合の大原は市街地より一層雨露が深く、静寂が漂います。杉木立と苔の絨毯から顔を覗かせるわらべ地蔵に癒やされる朝のひととき。"
    },
    {
      time: "11:30",
      title: "大原の名店で温かい「手打ち蕎麦＆名物しば漬け」ランチ",
      note: "雨に濡れた体を、湯気立ちのぼるにしん蕎麦や鴨南蛮で芯から温める。窓の外に広がる山里の雨景色もご馳走。"
    },
    {
      time: "13:30",
      title: "八瀬へ移動し瑠璃光院で雨のリフレクション鑑賞",
      note: "写経用紙に願いをしたため、静かに心と向き合う時間。雨音だけが静かに響く書院で、黒漆に映り込む翠嶺のグラデーションに息を呑みます。"
    },
    {
      time: "15:30",
      title: "四条・烏丸エリアの町家カフェで坪庭雨宿りカフェタイム",
      note: "町家の格子窓から通りを眺めつつ、温かい抹茶ラテと出来立てのわらび餅。雨の京都ならではのゆったりとした時間の流れを堪能。"
    },
    {
      time: "17:30",
      title: "京都の天然温泉宿へ。雨を見上げる露天風呂とおこもりディナー",
      note: "チェックイン後は天然温泉へ直行。しっとり降る雨を眺めながらの温泉露天風呂は、最高の旅のクライマックス。"
    }
  ];

  return (
    <main className="min-h-screen bg-rose-950/20 text-stone-800 selection:bg-rose-600 selection:text-white pb-24">
      {/* ヒーローセクション（Rose / 和モダン緋色系統） */}
      <section className="relative overflow-hidden bg-gradient-to-b from-stone-900 via-rose-950 to-stone-900 text-stone-100 py-16 sm:py-24 border-b border-rose-900/40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(244,63,94,0.18),transparent_55%)] pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-rose-500/15 border border-rose-400/30 text-rose-300 text-xs font-bold tracking-wider mb-6">
            <span>🍁 雨に濡れるほどに艶めく、古都千年の深緑と静寂</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight tracking-tight mb-6">
            【京都 雨の日こそ行きたい名所＆町家カフェ】<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-300 via-pink-200 to-amber-200">
              緑鮮やかな苔寺・瑠璃光院・三千院＆おこもり温泉宿
            </span>
          </h1>

          <p className="text-stone-300 text-base sm:text-lg leading-relaxed max-w-3xl mb-8">
            「京都旅行の予報が雨マークでがっかり…」そんな方にこそ知ってほしい事実があります。
            実は、京都の庭園や寺院が1年で最も美しく輝くのは、雨に濡れた瞬間です。
            乾いた砂埃が洗い流され、青苔は瑞々しく息を吹き返し、濡れた黒漆の床や石畳には周囲の緑が鏡のように映り込みます。
            傘を打つ静かな雨音とともに巡る、大人のための極上京都インドア旅へようこそ。
          </p>

          {/* 内部リンクバナー */}
          <div className="flex flex-wrap gap-3">
            <Link
              href="/kyoto-travel-budget-how-many-nights"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-rose-900/70 hover:bg-rose-800 border border-rose-600/50 rounded-xl text-rose-200 text-xs sm:text-sm font-semibold transition"
            >
              <span>🏮 京都旅行 何泊がベスト？費用＆日数比較</span>
              <span>→</span>
            </Link>
            <Link
              href="/kyoto-couple-luxury-ryokan-guide"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-stone-800/90 hover:bg-stone-700 border border-stone-700 rounded-xl text-stone-300 text-xs sm:text-sm font-semibold transition"
            >
              <span>♨️ 京都 カップル向け高級旅館・客室温泉宿</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 楽天トラベルクーポンプロモーション */}
      <section className="max-w-5xl mx-auto px-4 -mt-8 relative z-20">
        <SpecialCouponBanner />
      </section>

      {/* コンテンツ本体 */}
      <div className="max-w-5xl mx-auto px-4 mt-16 space-y-16">
        {/* セクション1：雨で輝く3大名所＆カフェ */}
        <section>
          <div className="border-l-4 border-rose-600 pl-4 mb-8">
            <span className="text-rose-700 text-xs font-black tracking-widest uppercase">RAIN GARDENS & CAFES</span>
            <h2 className="text-2xl sm:text-3xl font-black text-stone-900 mt-1">
              晴れの日より圧倒的に美しい！雨の京都が魅せる3大情景
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {rainGardens.map((item, idx) => (
              <div
                key={idx}
                className="bg-white border border-rose-200/80 rounded-3xl p-6 shadow-md hover:shadow-xl hover:border-rose-400 transition flex flex-col justify-between"
              >
                <div>
                  <div className="inline-block px-3 py-1 bg-rose-50 text-rose-800 text-xs font-bold rounded-full mb-3 border border-rose-200">
                    {item.tag}
                  </div>
                  <h3 className="text-lg font-bold text-stone-900 mb-3 leading-snug">{item.spot}</h3>
                  <p className="text-stone-600 text-xs sm:text-sm leading-relaxed mb-4">{item.description}</p>
                </div>
                <div className="pt-3 border-t border-rose-100 text-xs font-semibold text-rose-700">
                  ✦ {item.charm}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* セクション2：雨情にひたる1日モデルプラン */}
        <section className="bg-stone-900 text-stone-100 rounded-3xl p-6 sm:p-8 border border-rose-950/80 shadow-xl">
          <div className="border-l-4 border-rose-500 pl-4 mb-8">
            <span className="text-rose-400 text-xs font-black tracking-widest uppercase">DAY PLAN</span>
            <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
              雨露と静寂に包まれる！大人の京都しっとり1日スケジュール
            </h2>
            <p className="text-stone-400 text-xs sm:text-sm mt-1">
              市街地の雑踏を離れ、八瀬・大原の山里と中心部の町家カフェを心地よいテンポで結ぶ雨宿りルート。
            </p>
          </div>

          <div className="relative border-l-2 border-rose-800/60 ml-4 sm:ml-6 space-y-8 pl-6 sm:pl-8 py-2">
            {sereneSchedule.map((step, idx) => (
              <div key={idx} className="relative group">
                <div className="absolute -left-[31px] sm:-left-[39px] top-0 w-4 h-4 rounded-full bg-rose-500 border-4 border-stone-900 shadow" />
                <div className="text-xs font-mono text-rose-300 font-bold mb-1">{step.time}</div>
                <h3 className="text-base sm:text-lg font-bold text-white mb-1.5">{step.title}</h3>
                <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">{step.note}</p>
              </div>
            ))}
          </div>
        </section>

        {/* セクション3：雨の日の京都おこもり温泉宿特選 */}
        <section>
          <div className="border-l-4 border-rose-600 pl-4 mb-8">
            <span className="text-rose-700 text-xs font-black tracking-widest uppercase">COZY ONSEN RETREATS</span>
            <h2 className="text-2xl sm:text-3xl font-black text-stone-900 mt-1">
              雨音を聞きながら湯に浸かる「京都の天然温泉＆おこもり宿」
            </h2>
            <p className="text-stone-600 text-xs sm:text-sm mt-1">
              雨で冷えた体を包み込む自家源泉の天然温泉。駅直結や中心街立地で、雨天でも移動ストレスなくチェックイン。
            </p>
          </div>

          {hotels.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {hotels.map((hotel) => {
                const minCharge = hotel.hotelMinCharge ? hotel.hotelMinCharge.toLocaleString() : null;
                return (
                  <div
                    key={hotel.hotelNo}
                    className="flex flex-col justify-between bg-white border border-rose-200/90 rounded-3xl overflow-hidden shadow-md hover:shadow-xl hover:border-rose-400 transition group"
                  >
                    <div>
                      {hotel.hotelImageUrl && (
                        <div className="h-44 overflow-hidden relative">
                          <img
                            src={hotel.hotelImageUrl}
                            alt={hotel.hotelName}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            loading="lazy"
                          />
                          <div className="absolute top-3 left-3 bg-stone-900/80 backdrop-blur-md px-2.5 py-0.5 rounded-full text-[10px] font-bold text-rose-200 border border-rose-600/40">
                            最寄: {hotel.nearestStation || "京都"}
                          </div>
                          {hotel.reviewAverage && (
                            <div className="absolute top-3 right-3 bg-rose-600 text-white px-2 py-0.5 rounded-full text-xs font-black shadow flex items-center gap-1">
                              <span>★</span>
                              <span>{hotel.reviewAverage.toFixed(2)}</span>
                            </div>
                          )}
                        </div>
                      )}
                      <div className="p-5">
                        <h3 className="text-base sm:text-lg font-bold text-stone-900 mb-2 group-hover:text-rose-600 transition leading-snug">
                          {hotel.hotelName}
                        </h3>
                        <p className="text-xs text-stone-500 mb-3">
                          {hotel.address1} {hotel.address2}
                        </p>
                        <p className="text-xs text-stone-600 leading-relaxed line-clamp-3 mb-3">
                          {hotel.hotelSpecial || "京都観光の拠点に便利な立地。天然温泉で雨の日の旅の疲れを心地よく癒やします。"}
                        </p>
                        {hotel.access && (
                          <div className="text-[11px] text-rose-900 bg-rose-50/80 p-2 rounded-xl border border-rose-200/60">
                            📍 {hotel.access}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="p-5 pt-0 border-t border-rose-100 mt-2 flex items-center justify-between">
                      <div>
                        <span className="text-[10px] text-stone-500 block">参考最安（目安）</span>
                        <span className="text-base font-black text-rose-600">
                          {minCharge ? `¥${minCharge}〜` : "プラン確認"}
                        </span>
                      </div>
                      <a
                        href={hotel.affiliateUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-700 hover:to-rose-800 text-white font-bold text-xs shadow hover:shadow-rose-600/20 transition"
                      >
                        <span>プランを見る</span>
                        <span>→</span>
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="bg-white rounded-2xl p-8 text-center text-stone-500 border border-stone-200">
              現在、京都エリアの宿泊プランを読み込み中です。
            </div>
          )}
        </section>

        {/* セクション4：雨の日京都の移動指南（市バス混雑回避） */}
        <section className="bg-white border-2 border-rose-200 rounded-3xl p-6 sm:p-8 shadow-sm">
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-4 flex items-center gap-2">
            <span>💡</span> 雨の京都をスマートに楽しむ！混雑回避の移動術
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-xs sm:text-sm text-stone-700">
            <div className="p-4 bg-rose-50/50 rounded-2xl border border-rose-100">
              <strong className="text-rose-900 block mb-1 text-sm">① 雨の日は「地下鉄＋私鉄」が鉄則</strong>
              雨天時は京都市内の道路が極端に渋滞し、市バスは30分〜1時間平気で遅延します。地下鉄烏丸線・東西線や叡山電車、阪急を軸に移動しましょう。
            </div>
            <div className="p-4 bg-rose-50/50 rounded-2xl border border-rose-100">
              <strong className="text-rose-900 block mb-1 text-sm">② 替えの靴下を2足バッグに忍ばせる</strong>
              寺院の拝観は靴を脱ぐケースがほとんど。雨水で靴下が濡れたまま上がると冷えの原因に。濡れたらすぐ履き替えられる予備があると快適度が段違いです。
            </div>
            <div className="p-4 bg-rose-50/50 rounded-2xl border border-rose-100">
              <strong className="text-rose-900 block mb-1 text-sm">③ 屋根付き新京極・寺町・錦市場を組み合わせる</strong>
              夕方以降の散策は、四条烏丸〜河原町にまたがる巨大アーケード商店街へ。雨に濡れずに京都のお土産探しや立ち飲みを楽しめます。
            </div>
          </div>
        </section>

        {/* 内部リンク回遊 */}
        <div className="pt-8 border-t border-rose-200/80 text-center">
          <p className="text-xs text-stone-500 mb-3">あわせて読みたい京都旅行ガイド</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/kyoto-travel-budget-how-many-nights"
              className="text-xs sm:text-sm font-semibold text-rose-700 hover:text-rose-800 underline underline-offset-4"
            >
              【京都旅行 何泊がベスト？】1泊2日 vs 2泊3日 費用・満足度・モデルコース比較
            </Link>
            <span className="text-stone-400">|</span>
            <Link
              href="/kyoto-couple-luxury-ryokan-guide"
              className="text-xs sm:text-sm font-semibold text-rose-700 hover:text-rose-800 underline underline-offset-4"
            >
              【京都 カップル温泉旅館】客室露天風呂・記念日サプライズ付き極上宿
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
