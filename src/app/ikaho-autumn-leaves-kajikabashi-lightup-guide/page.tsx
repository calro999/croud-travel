import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";
import SpecialCouponBanner from "@/app/components/SpecialCouponBanner";

export const metadata: Metadata = {
  title: "【伊香保温泉 河鹿橋紅葉ライトアップ2026】見頃時期・石段街散策＆黄金の湯に浸かる秋の湯治旅 ｜ 日本全国・旅宿クラウド",
  description:
    "伊香保温泉のシンボル「河鹿橋」の鮮やかな紅葉ライトアップ！朱塗りの太鼓橋とモミジのコントラスト、365段の石段街食べ歩き、名物水沢うどんランチ、茶褐色の名湯「黄金の湯」に癒やされる秋旅ガイド。",
  keywords: [
    "伊香保温泉 紅葉 2026",
    "河鹿橋 ライトアップ 時間",
    "伊香保 河鹿橋 見頃",
    "伊香保 365段 石段街 食べ歩き",
    "黄金の湯 露天風呂 宿泊",
    "水沢うどん ランチ おすすめ",
    "伊香保 楽天トラベル 紅葉温泉",
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
      return data["ikaho-autumn-leaves-kajikabashi-lightup-guide"]?.hotels || [];
    }
  } catch (e) {
    console.error("Failed to load hotels for ikaho-autumn-leaves-kajikabashi-lightup-guide", e);
  }
  return [];
}

export default function IkahoAutumnLeavesGuidePage() {
  const hotels = loadHotels();

  // 河鹿橋ライトアップ基本仕様
  const lightupInfo = {
    period: "10月下旬 〜 11月中旬（見頃のピーク：11月上旬）",
    time: "16:30 〜 22:00（毎日点灯）",
    admission: "無料（自由散策）",
    location: "群馬県渋川市伊香保町伊香保（湯元通り奥・源泉湧出地手前）",
    parking: "河鹿橋駐車場（普通車18台・無料、紅葉期は極めて混雑）／ロープウェイ市営駐車場（有料）推奨",
  };

  // 1泊2日 秋の伊香保満喫モデルスケジュール
  const autumnModelCourse = [
    {
      time: "11:30",
      spot: "水沢うどん街道でコシの強いざるうどん＆舞茸天ぷら",
      desc: "日本三大うどんの一つ「水沢うどん」。創業400年を超える老舗が並ぶ街道で、透き通るような強いコシの冷水締めうどんと、揚げたてサクサクの上州産舞茸天ぷらを堪能。",
      badge: "秋の絶品ランチ",
    },
    {
      time: "13:30",
      spot: "365段の石段街へ！湯の花まんじゅう＆射的散策",
      desc: "温泉情緒が凝縮された365段の石段を登る。温泉まんじゅう発祥の地で蒸したてアツアツの「勝月堂」湯乃花まんじゅうを頬張り、足湯「岸権 辰の湯」でひと休み。",
      badge: "レトロ温泉街歩き",
    },
    {
      time: "15:30",
      spot: "温泉宿へチェックイン ＆ 茶褐色の「黄金の湯」へダイブ",
      desc: "鉄分を豊富に含み、空気に触れると独特の茶褐色に濁る伊香保伝統の名湯「黄金の湯（こがねのゆ）」。硫酸塩泉の優れた保温効果で、体の芯からポカポカに。",
      badge: "名湯湯治体験",
    },
    {
      time: "17:30",
      spot: "夕闇に浮かぶ「河鹿橋」紅葉ライトアップへ出陣",
      desc: "朱塗りの太鼓橋を真っ赤なイロハモミジやヤマモミジが包み込み、光に照らし出される幻想の世界。日没直後のブルーアワー（17:00〜17:45）が最も美しい撮影タイミング。",
      badge: "旅のハイライト",
    },
    {
      time: "19:30",
      spot: "宿で上州牛のすき焼き・しゃぶしゃぶ懐石に舌鼓",
      desc: "群馬の豊かな大自然が育んだ上州牛や、特産の蒟蒻・下仁田葱・キノコをふんだんに取り入れた秋懐石ディナーを満喫。食後は夜の静まった石段街を浴衣で夜散歩。",
      badge: "上州秋の味覚",
    },
  ];

  // 河鹿橋・石段街の混雑回避テクニック
  const localHacks = [
    {
      title: "河鹿橋駐車場に車で突っ込まない（徒歩アクセスが鉄則）",
      desc: "河鹿橋直近の駐車場は18台分しかなく、見頃の夜は入場待ちで1時間以上の大渋滞になります。宿に車を置くか、石段街下の市営駐車場に停めて、石段街〜湯元通りを歩いて向かうのが圧倒的にスムーズです。",
      point: "徒歩15分の紅葉坂道ウォーク",
    },
    {
      title: "夕暮れの「マジックアワー（17:00〜17:40）」がベストショット",
      desc: "完全に真っ暗になる前、空に深い群青色が残る時間帯が最も橋の朱色とモミジの赤が際立ちます。日没時間を事前に調べ、16:45には現地に到着しておきましょう。",
      point: "写真映えの決定打",
    },
    {
      title: "伊香保ロープウェイで「見晴下」から赤城山・谷川連峰を一望",
      desc: "温泉街と標高955mの上ノ山公園を結ぶロープウェイ。展望台「ときめきデッキ」からは、色づく山裾と遠くの山並みまで360度の大パノラマが広がります。",
      point: "秋晴れ昼間の絶景スポット",
    },
  ];

  return (
    <div className="min-h-screen bg-orange-50/40 text-stone-800 antialiased selection:bg-orange-600 selection:text-white">
      {/* ヒーローセクション */}
      <header className="relative overflow-hidden bg-gradient-to-br from-orange-950 via-stone-900 to-amber-950 text-orange-50 pt-16 pb-24 px-4 sm:px-6 lg:px-8 border-b-4 border-orange-600">
        <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#ea580c_1px,transparent_1px)] [background-size:16px_16px]" />

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="bg-orange-600 text-white font-black text-xs px-3 py-1 rounded-full uppercase tracking-wider shadow">
              Ikaho Autumn Leaf Guide 2026
            </span>
            <span className="bg-orange-950/80 text-orange-300 border border-orange-600/60 text-xs px-3 py-1 rounded-full font-bold">
              朱塗りの太鼓橋 × 黄金の湯
            </span>
            <span className="text-orange-300/80 text-xs">
              更新日: 2026年9月
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight sm:leading-snug mb-6 text-white drop-shadow">
            【伊香保温泉 河鹿橋紅葉ライトアップ2026】<br className="hidden sm:inline" />
            見頃時期・石段街散策＆<span className="text-orange-400">黄金の湯に浸かる</span>秋の湯治旅
          </h1>

          <p className="text-sm sm:text-lg text-orange-100/90 leading-relaxed max-w-3xl mb-8">
            榛名山の中腹に位置する名湯・伊香保。秋になると湯元に架かる朱塗りの「河鹿橋」を取り囲むモミジが一斉に燃え上がり、夜には息を呑むライトアップが点灯します。
            365段の石段街食べ歩き、名物水沢うどん、そして茶褐色の濁り湯「黄金の湯」に癒やされる秋旅の決定版。
          </p>

          {/* クイックインフォ */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
            <div className="bg-orange-900/50 border border-orange-700/50 backdrop-blur rounded-2xl p-3.5">
              <span className="text-orange-300 text-xs block mb-1 font-bold">見頃のピーク</span>
              <span className="text-lg sm:text-xl font-black text-white">10月下旬〜11月中旬</span>
            </div>
            <div className="bg-orange-900/50 border border-orange-700/50 backdrop-blur rounded-2xl p-3.5">
              <span className="text-orange-300 text-xs block mb-1 font-bold">点灯時間</span>
              <span className="text-lg sm:text-xl font-black text-orange-300">16:30〜22:00</span>
            </div>
            <div className="bg-orange-900/50 border border-orange-700/50 backdrop-blur rounded-2xl p-3.5">
              <span className="text-orange-300 text-xs block mb-1 font-bold">ライトアップ観覧料</span>
              <span className="text-lg sm:text-xl font-black text-white">無料</span>
            </div>
            <div className="bg-orange-900/50 border border-orange-700/50 backdrop-blur rounded-2xl p-3.5">
              <span className="text-orange-300 text-xs block mb-1 font-bold">名物グルメ</span>
              <span className="text-lg sm:text-xl font-black text-orange-300">水沢うどん・湯乃花饅頭</span>
            </div>
          </div>
        </div>
      </header>

      {/* メインボディ */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">

        {/* クーポンバナー */}
        <section>
          <SpecialCouponBanner variant="prominent" />
        </section>

        {/* 1. 河鹿橋ライトアップ概要＆見どころ */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-orange-200">
          <div className="border-l-4 border-orange-600 pl-4 mb-6">
            <span className="text-orange-600 text-xs font-black tracking-widest uppercase block">Kajikabashi Light-up Guide</span>
            <h2 className="text-xl sm:text-3xl font-black text-stone-900">
              紅葉名所「河鹿橋」ライトアップ2026 鑑賞ガイド
            </h2>
          </div>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-6">
            伊香保温泉の源泉湧出口（伊香保露天風呂）のすぐそばに架かる「河鹿橋（かじかばし）」。
            春の新緑、初夏のカジカガエルの鳴き声とともに親しまれますが、一年で最も美しいのがカエデやウルシ、クヌギが艶やかに色づく10月下旬〜11月中旬。
            ライトアップ期間中は夜間特別照明により、橋の朱色とモミジの深紅が闇夜に浮かび上がります。
          </p>

          <div className="bg-orange-50/60 rounded-2xl p-5 sm:p-6 border border-orange-200/90 mb-6">
            <h3 className="font-bold text-base sm:text-lg text-orange-950 mb-3 flex items-center gap-2">
              <span>📅</span> 2026年ライトアップ開催要項
            </h3>
            <div className="grid sm:grid-cols-2 gap-3 text-xs sm:text-sm text-stone-700">
              <div className="bg-white p-3 rounded-xl border border-orange-200">
                <strong className="text-orange-900 block mb-1">点灯期間</strong>
                {lightupInfo.period}
              </div>
              <div className="bg-white p-3 rounded-xl border border-orange-200">
                <strong className="text-orange-900 block mb-1">点灯時間・入場料</strong>
                {lightupInfo.time} ｜ 観覧無料
              </div>
              <div className="bg-white p-3 rounded-xl border border-orange-200">
                <strong className="text-orange-900 block mb-1">所在地・アクセス</strong>
                伊香保温泉石段街最上段（伊香保神社）より徒歩約10分
              </div>
              <div className="bg-white p-3 rounded-xl border border-orange-200">
                <strong className="text-orange-900 block mb-1">駐車場利用の注意</strong>
                {lightupInfo.parking}
              </div>
            </div>
          </div>
        </section>

        {/* 2. 1泊2日モデルコース */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-orange-200">
          <div className="border-l-4 border-orange-600 pl-4 mb-6">
            <span className="text-orange-600 text-xs font-black tracking-widest uppercase block">Recommended Itinerary</span>
            <h2 className="text-xl sm:text-3xl font-black text-stone-900">
              秋の伊香保を満喫する 1泊2日ベストモデルコース
            </h2>
          </div>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-6">
            水沢うどんのランチから始まり、石段街の食べ歩き、夕暮れのマジックアワーに合わせる河鹿橋ライトアップ、そして名湯での湯浴みまで、無駄なく秋の魅力を凝縮した王道スケジュールです。
          </p>

          <div className="relative border-l-2 border-orange-300 ml-4 pl-6 space-y-6">
            {autumnModelCourse.map((step, idx) => (
              <div key={idx} className="relative group">
                <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-orange-600 border-4 border-white shadow" />
                <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200 group-hover:border-orange-400 transition-colors">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="font-mono font-black text-orange-600 text-sm bg-orange-100 px-2.5 py-0.5 rounded-md">
                      {step.time}
                    </span>
                    <span className="text-xs font-bold text-stone-600 bg-stone-200/70 px-2.5 py-0.5 rounded-full">
                      {step.badge}
                    </span>
                  </div>
                  <h3 className="font-bold text-base sm:text-lg text-stone-900 mb-2">
                    {step.spot}
                  </h3>
                  <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 3. 混雑回避＆快適散策のコツ */}
        <section className="bg-gradient-to-br from-orange-950 via-stone-900 to-amber-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-orange-700">
          <div className="border-l-4 border-orange-400 pl-4 mb-6">
            <span className="text-orange-400 text-xs font-black tracking-widest uppercase block">Pro Travel Hacks</span>
            <h2 className="text-xl sm:text-3xl font-black text-orange-100">
              伊香保紅葉をストレスゼロで楽しむ3つの裏ワザ
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {localHacks.map((hack, hIdx) => (
              <div
                key={hIdx}
                className="bg-orange-900/40 border border-orange-700/50 rounded-2xl p-5 flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-bold text-orange-300 bg-orange-800/80 px-2.5 py-0.5 rounded-full inline-block mb-3 border border-orange-600/50">
                    {hack.point}
                  </span>
                  <h3 className="font-bold text-base text-white mb-2">
                    {hack.title}
                  </h3>
                  <p className="text-orange-100/70 text-xs sm:text-sm leading-relaxed">
                    {hack.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. 楽天トラベル提携宿セクション */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-orange-200">
          <div className="border-l-4 border-orange-600 pl-4 mb-4">
            <span className="text-orange-600 text-xs font-black tracking-widest uppercase block">Featured Hot Spring Inns</span>
            <h2 className="text-xl sm:text-3xl font-black text-stone-900">
              河鹿橋・石段街まで至近！黄金の湯を楽しむ厳選温泉宿
            </h2>
          </div>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-8">
            ライトアップを夜遅くまで楽しむなら、石段街や河鹿橋まで歩いて行ける宿がベスト。
            伊香保名物の畳風呂や展望露天風呂、茶褐色の「黄金の湯」を心ゆくまで堪能できる楽天トラベル提携の名宿をご紹介します。
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            {hotels.map((hotel) => (
              <div
                key={hotel.hotelNo}
                className="bg-stone-50 rounded-2xl overflow-hidden border border-orange-200/80 hover:border-orange-500 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[16/9] w-full bg-stone-200 overflow-hidden">
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
                      <div className="absolute top-3 right-3 bg-orange-600 text-white font-black text-xs px-2 py-1 rounded-md shadow flex items-center gap-1">
                        ★ {hotel.reviewAverage.toFixed(1)}
                        {hotel.reviewCount && (
                          <span className="text-[10px] font-normal text-orange-100">
                            ({hotel.reviewCount}件)
                          </span>
                        )}
                      </div>
                    )}
                  </div>

                  <div className="p-5">
                    <h3 className="font-bold text-base sm:text-lg text-stone-900 mb-2 leading-snug">
                      {hotel.hotelName}
                    </h3>
                    {hotel.hotelSpecial && (
                      <p className="text-xs text-orange-950 mb-3 bg-orange-100/70 p-2.5 rounded-lg border border-orange-200">
                        {hotel.hotelSpecial}
                      </p>
                    )}
                    <div className="text-xs text-stone-500 space-y-1 mb-4">
                      {hotel.nearestStation && (
                        <p className="flex items-center gap-1">
                          <span>🚉 最寄：</span>
                          <span>JR{hotel.nearestStation}駅</span>
                        </p>
                      )}
                      {hotel.access && (
                        <p className="line-clamp-2">
                          <span>🚗 </span>{hotel.access}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <div className="flex items-baseline justify-between mb-3 border-t border-stone-200 pt-3">
                    <span className="text-xs text-stone-500">参考最安料金</span>
                    <span className="text-orange-700 font-black text-lg">
                      {hotel.hotelMinCharge
                        ? `¥${hotel.hotelMinCharge.toLocaleString()}〜`
                        : "プラン参照"}
                    </span>
                  </div>

                  <a
                    href={hotel.affiliateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white font-bold py-2.5 px-4 rounded-xl text-xs sm:text-sm shadow hover:shadow-md transition-all duration-200"
                  >
                    空室確認・秋の温泉プランを予約 🍁
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* 楽天トラベルバスツアー訴求 */}
          <div className="mt-10 p-6 rounded-2xl bg-gradient-to-r from-orange-100 to-amber-100 border-2 border-orange-300 text-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="bg-orange-600 text-white text-[10px] font-black px-2 py-0.5 rounded-full">
                直通バス・マイカー不要
              </span>
              <h4 className="text-base sm:text-lg font-black text-orange-950">
                東京・新宿発！楽天トラベル 伊香保温泉日帰り＆宿泊バスツアー
              </h4>
              <p className="text-xs sm:text-sm text-stone-600">
                高速バス「上州ゆめぐり号」や、水沢うどんランチ付き紅葉バスツアーで、運転疲れなしに河鹿橋ライトアップへアクセス。
              </p>
            </div>
            <a
              href="https://travel.rakuten.co.jp/bus/"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 bg-stone-900 hover:bg-stone-800 text-orange-300 font-bold px-5 py-3 rounded-xl text-xs sm:text-sm shadow transition"
            >
              秋のバスツアーを検索 🚌
            </a>
          </div>
        </section>

        {/* 5. 内部リンク＆関連記事 */}
        <section className="bg-stone-100 rounded-3xl p-6 sm:p-8 border border-stone-300/80">
          <h2 className="text-lg sm:text-xl font-bold text-stone-900 mb-4 flex items-center gap-2">
            <span>🔗</span> あわせて読みたい群馬名湯トラベルガイド
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link
              href="/kusatsu-vs-ikaho-onsen-comparison"
              className="block p-4 rounded-2xl bg-white border border-stone-200 hover:border-orange-500 hover:shadow transition group"
            >
              <span className="text-xs text-orange-700 font-bold block mb-1">二大名湯比較</span>
              <h3 className="text-sm sm:text-base font-bold text-stone-800 group-hover:text-orange-700 transition">
                【草津温泉 vs 伊香保温泉 どっちがいい？】泉質・街歩き・宿を徹底比較 →
              </h3>
              <p className="text-xs text-stone-500 mt-1">
                酸性硫黄泉の草津と茶褐色の黄金の湯・伊香保の違いを分かりやすく解説。
              </p>
            </Link>

            <Link
              href="/kusatsu-daytrip-hotspring-lunch-guide"
              className="block p-4 rounded-2xl bg-white border border-stone-200 hover:border-orange-500 hover:shadow transition group"
            >
              <span className="text-xs text-orange-700 font-bold block mb-1">群馬日帰り温泉</span>
              <h3 className="text-sm sm:text-base font-bold text-stone-800 group-hover:text-orange-700 transition">
                【草津温泉 日帰り温泉＆ランチ】湯畑周辺で楽しむ源泉かけ流し名湯ガイド →
              </h3>
              <p className="text-xs text-stone-500 mt-1">
                上州牛すき焼きと石臼挽き手打ちそば、西の河原露天風呂めぐり。
              </p>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
