import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";
import SpecialCouponBanner from "@/app/components/SpecialCouponBanner";

export const metadata: Metadata = {
  title: "【箱根 紅葉露天風呂＆ライトアップ2026】箱根登山鉄道・強羅公園・美術館の紅葉巡り＆にごり湯旅館 ｜ 日本全国・旅宿クラウド",
  description:
    "箱根の秋を彩る紅葉名所と絶景露天風呂！箱根美術館の苔庭紅葉、彫刻の森、芦ノ湖遊覧船からの富士と紅葉パノラマ、強羅・仙石原の秋限定懐石ディナー付き名門温泉旅館を徹底比較。",
  keywords: [
    "箱根 紅葉 2026",
    "箱根登山鉄道 紅葉ライトアップ",
    "箱根美術館 苔庭 紅葉",
    "強羅温泉 にごり湯 露天風呂",
    "仙石原 すすき草原",
    "芦ノ湖 海賊船 紅葉富士",
    "箱根 楽天トラベル 紅葉温泉プラン",
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
      return data["hakone-autumn-leaves-lightup-hotspring-guide"]?.hotels || [];
    }
  } catch (e) {
    console.error("Failed to load hotels for hakone-autumn-leaves-lightup-hotspring-guide", e);
  }
  return [];
}

export default function HakoneAutumnLeavesHotspringGuidePage() {
  const hotels = loadHotels();

  // 箱根エリア別・標高差紅葉リレー
  const hakoneZones = [
    {
      zone: "芦ノ湖・元箱根・大涌谷",
      elevation: "標高 約720m〜1,040m",
      period: "10月下旬 〜 11月中旬",
      highlight: "冠雪の富士山 × 湖面に映える真っ赤なカエデ",
      desc: "芦ノ湖海賊船のデッキから見渡す外輪山の紅葉グラデーション。大涌谷のダイナミックな噴煙と荒涼とした山肌に寄り添う草紅葉の対比も見応え抜群。",
      mustSee: ["芦ノ湖海賊船・遊覧船", "箱根神社 平和の鳥居", "恩賜箱根公園 弁天の鼻展望台"],
      tag: "富士見パノラマ",
    },
    {
      zone: "仙石原（すすき草原・長安寺）",
      elevation: "標高 約650m〜700m",
      period: "10月下旬 〜 11月中旬",
      highlight: "黄金色に波打つススキ大草原 × 五百羅漢の紅葉寺",
      desc: "台ヶ岳の斜面を埋め尽くすススキが一斉に黄金色へと輝く仙石原の秋。曹洞宗の名刹「長安寺」では、豊かな自然林の中に佇む五百羅漢像と散り紅葉の静寂美に出会えます。",
      mustSee: ["仙石原すすき草原遊歩道", "長安寺の五百羅漢と紅葉", "ポーラ美術館 森の遊歩道"],
      tag: "黄金の草原＆静寂",
    },
    {
      zone: "強羅・宮城野（箱根美術館・強羅公園）",
      elevation: "標高 約500m〜600m",
      period: "11月上旬 〜 11月下旬",
      highlight: "緑の苔庭に降り注ぐ200本のモミジ＆クラフト体験",
      desc: "箱根随一の紅葉名所「箱根美術館」。約130種類の苔が広がる国登録記念物の庭園に、深紅と黄色のモミジが降り注ぐ光景は圧巻。隣接する強羅公園のローズガーデン秋バラとの競演も。",
      mustSee: ["箱根美術館 苔庭・茶室真和亭", "箱根強羅公園 噴水池", "箱根クラフトハウス"],
      tag: "箱根No.1紅葉美",
    },
    {
      zone: "宮ノ下・小涌谷・塔ノ沢・箱根湯本",
      elevation: "標高 約100m〜400m",
      period: "11月中旬 〜 12月上旬",
      highlight: "箱根登山鉄道の出山の鉄橋 × 渓谷美露天風呂",
      desc: "箱根登山鉄道が走る早川渓谷「出山の鉄橋（早川橋梁）」からの紅葉渓谷ビュー。温泉街の中心部・箱根湯本では、遅い時期まで川沿いの紅葉狩りと足湯散策が楽しめます。",
      mustSee: ["出山の鉄橋（徐行運転）", "宮ノ下 富士屋ホテル庭園", "湯本 玉簾の瀧・飛烟の瀧"],
      tag: "晩秋ロングラン",
    },
  ];

  // 紅葉巡りルート攻略法
  const routingTips = [
    {
      title: "箱根フリーパスで逆回り（反時計回り）ルートを選択",
      desc: "大半の観光客は「湯本 → 強羅 → 大涌谷 → 芦ノ湖」の順序で回るため、午前中のロープウェイや海賊船が大混雑します。あらかじめ箱根登山バスで芦ノ湖（元箱根）へ直行し、逆ルートで強羅へ戻る『反時計回り』を選ぶと混雑を大幅に回避できます。",
      icon: "🔄",
    },
    {
      title: "箱根美術館「苔庭」は朝一番（9:00開館直後）を死守",
      desc: "紅葉ピーク期の箱根美術館は正午前後に入館待ち行列が発生します。午前9時の開館と同時に苔庭へ入り、木漏れ日が差し込む静寂のモミジを鑑賞するのが至高の体験です。",
      icon: "⛩️",
    },
    {
      title: "強羅のにごり湯（大涌谷源泉の酸性硫酸塩泉）に浸かる",
      desc: "秋風で冷えた体を包み込むのは、白濁の濃厚な硫黄泉。強羅温泉の上層エリアには乳白色のにごり湯を引く客室露天風呂宿が多く、色づく山並みを眺めながらのプライベート湯浴みが叶います。",
      icon: "♨️",
    },
  ];

  return (
    <div className="min-h-screen bg-rose-50/30 text-neutral-800 antialiased selection:bg-rose-600 selection:text-white">
      {/* ヒーローヘッダー */}
      <header className="relative overflow-hidden bg-gradient-to-br from-rose-950 via-stone-900 to-red-950 text-rose-50 pt-16 pb-24 px-4 sm:px-6 lg:px-8 border-b-4 border-rose-600">
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#f43f5e_1px,transparent_1px)] [background-size:18px_18px]" />

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="bg-rose-600 text-white font-black text-xs px-3 py-1 rounded-full uppercase tracking-wider shadow">
              Autumn Leaves & Onsen 2026
            </span>
            <span className="bg-rose-950/80 text-rose-300 border border-rose-700/60 text-xs px-3 py-1 rounded-full font-bold">
              箱根全山グラデーション紀行
            </span>
            <span className="text-rose-300/80 text-xs">
              更新日: 2026年9月
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight sm:leading-snug mb-6 text-white drop-shadow">
            【箱根 紅葉露天風呂＆ライトアップ2026】<br className="hidden sm:inline" />
            箱根登山鉄道・強羅公園・美術館の紅葉巡り＆<span className="text-rose-400">にごり湯旅館</span>
          </h1>

          <p className="text-sm sm:text-lg text-rose-100/90 leading-relaxed max-w-3xl mb-8">
            芦ノ湖の青と富士山を借景に映える外輪山の赤、苔庭に零れ落ちる箱根美術館のモミジ、そして幻想的な夜間ライトアップ。
            標高差により10月下旬から12月上旬まで約1ヶ月半にわたって紅葉前線が移りゆく箱根の秋を、極上の白濁にごり湯宿・秋懐石ディナーとともに巡る贅沢プランをお届けします。
          </p>

          {/* 見どころカード */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
            <div className="bg-rose-900/50 border border-rose-700/50 backdrop-blur rounded-2xl p-3.5">
              <span className="text-rose-300 text-xs block mb-1 font-bold">見頃時期</span>
              <span className="text-lg sm:text-xl font-black text-white">10月下旬〜11月下旬</span>
            </div>
            <div className="bg-rose-900/50 border border-rose-700/50 backdrop-blur rounded-2xl p-3.5">
              <span className="text-rose-300 text-xs block mb-1 font-bold">一押し名所</span>
              <span className="text-lg sm:text-xl font-black text-rose-300">箱根美術館 苔庭</span>
            </div>
            <div className="bg-rose-900/50 border border-rose-700/50 backdrop-blur rounded-2xl p-3.5">
              <span className="text-rose-300 text-xs block mb-1 font-bold">混雑回避</span>
              <span className="text-lg sm:text-xl font-black text-white">反時計回りルート</span>
            </div>
            <div className="bg-rose-900/50 border border-rose-700/50 backdrop-blur rounded-2xl p-3.5">
              <span className="text-rose-300 text-xs block mb-1 font-bold">温泉の醍醐味</span>
              <span className="text-lg sm:text-xl font-black text-rose-300">強羅 白濁にごり湯</span>
            </div>
          </div>
        </div>
      </header>

      {/* メインエリア */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">

        {/* クーポンバナー */}
        <section>
          <SpecialCouponBanner variant="prominent" />
        </section>

        {/* 1. 箱根4大紅葉ゾーン 見頃と特徴 */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-rose-200">
          <div className="border-l-4 border-rose-600 pl-4 mb-6">
            <span className="text-rose-600 text-xs font-black tracking-widest uppercase block">Autumn Front Progression</span>
            <h2 className="text-xl sm:text-3xl font-black text-neutral-900">
              箱根紅葉前線2026 標高1,000mから湯本へと下る4大ゾーン
            </h2>
          </div>
          <p className="text-neutral-600 text-sm sm:text-base leading-relaxed mb-6">
            カルデラ地形の箱根は、芦ノ湖や仙石原（標高700m前後）から色づき始め、強羅（500m）、そして箱根湯本（100m）へと紅葉がリレーされます。
            時期ごとの最適ゾーンを狙うことで、常にピークの錦秋風景を満喫できます。
          </p>

          <div className="grid md:grid-cols-2 gap-5">
            {hakoneZones.map((item, idx) => (
              <div
                key={idx}
                className="bg-rose-50/40 rounded-2xl p-6 border border-rose-200/80 hover:border-rose-400 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="bg-rose-600 text-white text-[11px] font-black px-2.5 py-0.5 rounded-full">
                      ZONE {idx + 1}
                    </span>
                    <span className="text-xs font-bold text-rose-800 bg-rose-100 px-2.5 py-0.5 rounded-full border border-rose-200">
                      {item.period}
                    </span>
                  </div>

                  <h3 className="text-lg font-black text-neutral-900 mb-1">
                    {item.zone}
                  </h3>
                  <p className="text-xs font-bold text-stone-500 mb-3">
                    {item.elevation} ｜ <span className="text-rose-700">{item.tag}</span>
                  </p>

                  <div className="text-xs font-bold text-rose-900 mb-2 bg-white/80 p-2.5 rounded-xl border border-rose-100">
                    🍂 {item.highlight}
                  </div>
                  <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed mb-4">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-rose-200/60">
                  <span className="text-[11px] font-bold text-neutral-700 block mb-1.5">主要スポット：</span>
                  <div className="flex flex-wrap gap-1.5">
                    {item.mustSee.map((spot, sIdx) => (
                      <span key={sIdx} className="text-xs bg-white text-stone-700 px-2 py-0.5 rounded-md border border-rose-200">
                        📍 {spot}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 2. 混雑回避＆スマート散策術 */}
        <section className="bg-gradient-to-br from-rose-950 via-stone-900 to-red-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-rose-800">
          <div className="border-l-4 border-rose-500 pl-4 mb-6">
            <span className="text-rose-400 text-xs font-black tracking-widest uppercase block">Smart Travel Tips</span>
            <h2 className="text-xl sm:text-3xl font-black text-rose-100">
              紅葉シーズンの箱根を快適に巡る3大攻略ルール
            </h2>
          </div>

          <div className="space-y-4">
            {routingTips.map((tip, tIdx) => (
              <div
                key={tIdx}
                className="bg-rose-900/40 border border-rose-700/50 rounded-2xl p-5 flex items-start gap-4"
              >
                <div className="text-2xl sm:text-3xl bg-rose-800/60 w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border border-rose-600">
                  {tip.icon}
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-rose-100 mb-1">
                    {tip.title}
                  </h3>
                  <p className="text-rose-200/80 text-xs sm:text-sm leading-relaxed">
                    {tip.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 3. ライトアップと秋限定イベント */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-rose-200">
          <div className="border-l-4 border-rose-600 pl-4 mb-6">
            <span className="text-rose-600 text-xs font-black tracking-widest uppercase block">Night Scenic Moments</span>
            <h2 className="text-xl sm:text-3xl font-black text-neutral-900">
              秋の夜長を彩るライトアップ＆夜間絶景スポット
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            <div className="border border-rose-200 rounded-2xl p-5 bg-rose-50/30">
              <span className="text-rose-700 font-bold text-xs block mb-1">箱根登山鉄道</span>
              <h3 className="font-black text-neutral-900 text-base mb-2">
                出山の鉄橋 夜間徐行ライトアップ
              </h3>
              <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed">
                塔ノ沢〜出山信号場間の早川橋梁で、列車内の照明を落としてライトアップされた渓谷の紅葉を車窓から鑑賞。夜闇に浮かぶ真っ赤なカエデが幻想的。
              </p>
            </div>

            <div className="border border-rose-200 rounded-2xl p-5 bg-rose-50/30">
              <span className="text-rose-700 font-bold text-xs block mb-1">箱根強羅公園</span>
              <h3 className="font-black text-neutral-900 text-base mb-2">
                秋の夜間特別開園＆イルミネーション
              </h3>
              <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed">
                噴水池を中心に歴史ある洋風庭園の紅葉樹がライトアップ。澄み切った秋の夜空の下、温かいホットワインやショコラを味わいながら散策できます。
              </p>
            </div>

            <div className="border border-rose-200 rounded-2xl p-5 bg-rose-50/30">
              <span className="text-rose-700 font-bold text-xs block mb-1">小涌谷 岡田美術館</span>
              <h3 className="font-black text-neutral-900 text-base mb-2">
                開化亭とモミジ庭園の夕暮れライト
              </h3>
              <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed">
                名画鑑賞の後は、敷地内の日本庭園へ。夕暮れ時から仄かに照らされる紅葉と、足湯カフェから眺める大壁画「風・刻」の贅沢な時間。
              </p>
            </div>
          </div>
        </section>

        {/* 4. 楽天トラベル提携宿セクション */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-rose-200">
          <div className="border-l-4 border-rose-600 pl-4 mb-4">
            <span className="text-rose-600 text-xs font-black tracking-widest uppercase block">Featured Onsen Ryokan</span>
            <h2 className="text-xl sm:text-3xl font-black text-neutral-900">
              紅葉露天風呂と秋懐石に酔いしれる！箱根の厳選宿
            </h2>
          </div>
          <p className="text-neutral-600 text-sm sm:text-base leading-relaxed mb-8">
            白濁した大涌谷源泉のにごり湯露天風呂、客室専用露天から望む箱根外輪山の山紅葉、そして松茸や戻り鰹など秋の味覚満載の懐石料理。
            楽天トラベルで高評価を獲得する箱根の名門旅館・隠れ宿をピックアップ。
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hotels.map((hotel) => (
              <div
                key={hotel.hotelNo}
                className="bg-stone-50 rounded-2xl overflow-hidden border border-rose-200/80 hover:border-rose-500 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[4/3] w-full bg-stone-200 overflow-hidden">
                    {hotel.hotelImageUrl ? (
                      <img
                        src={hotel.hotelImageUrl}
                        alt={hotel.hotelName}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-stone-400">
                        No Image
                      </div>
                    )}
                    {hotel.reviewAverage && (
                      <div className="absolute top-3 right-3 bg-rose-600 text-white font-black text-xs px-2 py-1 rounded-md shadow flex items-center gap-1">
                        ★ {hotel.reviewAverage.toFixed(1)}
                        {hotel.reviewCount && (
                          <span className="text-[10px] font-normal text-rose-100">
                            ({hotel.reviewCount}件)
                          </span>
                        )}
                      </div>
                    )}
                  </div>

                  <div className="p-5">
                    <h3 className="font-bold text-base text-neutral-900 mb-2 leading-snug line-clamp-2">
                      {hotel.hotelName}
                    </h3>
                    {hotel.hotelSpecial && (
                      <p className="text-xs text-rose-950 line-clamp-2 mb-3 bg-rose-100/60 p-2 rounded-lg border border-rose-200">
                        {hotel.hotelSpecial}
                      </p>
                    )}
                    <div className="text-xs text-stone-500 space-y-1 mb-4">
                      {hotel.nearestStation && (
                        <p className="flex items-center gap-1">
                          <span>🚉 最寄：</span>
                          <span>{hotel.nearestStation}駅</span>
                        </p>
                      )}
                      {hotel.access && (
                        <p className="line-clamp-1">
                          <span>🚗 </span>{hotel.access}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <div className="flex items-baseline justify-between mb-3 border-t border-stone-200 pt-3">
                    <span className="text-xs text-stone-500">参考最安料金</span>
                    <span className="text-rose-700 font-black text-lg">
                      {hotel.hotelMinCharge
                        ? `¥${hotel.hotelMinCharge.toLocaleString()}〜`
                        : "プラン参照"}
                    </span>
                  </div>

                  <a
                    href={hotel.affiliateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-700 hover:to-red-700 text-white font-bold py-2.5 px-4 rounded-xl text-xs sm:text-sm shadow hover:shadow-md transition-all duration-200"
                  >
                    空室確認・紅葉プランを予約 🍁
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* 楽天トラベル箱根ツアー＆クーポン案内 */}
          <div className="mt-10 p-6 rounded-2xl bg-gradient-to-r from-rose-100 to-orange-100 border-2 border-rose-300 text-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="bg-rose-600 text-white text-[10px] font-black px-2 py-0.5 rounded-full">
                直行・快適アクセス
              </span>
              <h4 className="text-base sm:text-lg font-black text-rose-950">
                新宿・東京発！楽天トラベル 箱根紅葉めぐり特選バスツアー＆宿泊パック
              </h4>
              <p className="text-xs sm:text-sm text-neutral-600">
                箱根海賊船クルーズ・箱根美術館入場券・強羅温泉の入浴がセットになった人気秋プランが楽天ポイント対象でお得に予約可能。
              </p>
            </div>
            <a
              href="https://travel.rakuten.co.jp/bus/"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 bg-neutral-900 hover:bg-neutral-800 text-rose-300 font-bold px-5 py-3 rounded-xl text-xs sm:text-sm shadow transition"
            >
              秋のバスツアーを検索 🚌
            </a>
          </div>
        </section>

        {/* 5. 内部リンク＆関連記事 */}
        <section className="bg-stone-100 rounded-3xl p-6 sm:p-8 border border-stone-300/80">
          <h2 className="text-lg sm:text-xl font-bold text-neutral-900 mb-4 flex items-center gap-2">
            <span>🔗</span> あわせて読みたい箱根トラベルガイド
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link
              href="/hakone-travel-budget-guide"
              className="block p-4 rounded-2xl bg-white border border-stone-200 hover:border-rose-500 hover:shadow transition group"
            >
              <span className="text-xs text-rose-700 font-bold block mb-1">予算・費用ガイド</span>
              <h3 className="text-sm sm:text-base font-bold text-neutral-800 group-hover:text-rose-700 transition">
                【箱根旅行 予算シミュレーション】宿泊費・ロマンスカー・飲食代まとめ →
              </h3>
              <p className="text-xs text-stone-500 mt-1">
                カップル・家族旅行で賢く楽しむ箱根のベストコスパ旅行術。
              </p>
            </Link>

            <Link
              href="/hakone-rainy-day-indoor-model-course"
              className="block p-4 rounded-2xl bg-white border border-stone-200 hover:border-rose-500 hover:shadow transition group"
            >
              <span className="text-xs text-rose-700 font-bold block mb-1">雨の日・室内プラン</span>
              <h3 className="text-sm sm:text-base font-bold text-neutral-800 group-hover:text-rose-700 transition">
                【箱根 雨の日の観光モデルコース】ポーラ美術館＆おこもり温泉旅館 →
              </h3>
              <p className="text-xs text-stone-500 mt-1">
                雨天でも濡れずに楽しめる室内アート＆工芸体験の決定版。
              </p>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
