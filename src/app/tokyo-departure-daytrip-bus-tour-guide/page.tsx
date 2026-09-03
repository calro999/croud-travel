import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【東京・新宿発 日帰りバスツアーおすすめ2026】季節のフルーツ狩り・絶景温泉・食べ放題の最強プラン徹底比較",
  description: "東京・新宿発の日帰りバスツアーを徹底解説！シャインマスカット狩り、桔梗信玄餅詰め放題、海鮮浜焼き食べ放題、箱根・伊豆の露天風呂入浴付きまで、人気定番＆穴場ツアーの料金・時間・集合場所まとめ。",
  keywords: [
    "東京発 日帰りバスツアー",
    "新宿発 バスツアー",
    "シャインマスカット狩り バスツアー",
    "桔梗信玄餅詰め放題",
    "日帰り温泉 バスツアー",
    "房総 浜焼き食べ放題",
    "楽天トラベル バスツアー"
  ],
};

function loadHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["tokyo-departure-daytrip-bus-tour-guide"]?.hotels || [];
    }
  } catch (e) {
    console.error("Failed to load hotels for tokyo-departure-daytrip-bus-tour-guide", e);
  }
  return [];
}

export default function TokyoDepartureDaytripBusTourPage() {
  const hotels = loadHotels();

  const tourComparison = [
    {
      course: "山梨 フルーツ王国＆桔梗信玄餅詰め放題・勝沼ワイナリー",
      price: "9,800円〜13,500円",
      duration: "約10時間（7:30発〜18:00着）",
      highlights: "シャインマスカット/桃30分食べ放題・信玄餅袋詰めチャレンジ・ワイン試飲",
      departure: "新宿（バスタ新宿/都庁大型バス駐車場）・東京駅鍛冶橋",
      season: "7月〜11月（初夏は桃・さくらんぼ、秋は巨峰・シャインマスカット）",
      tag: "1番人気"
    },
    {
      course: "房総 浜焼き海鮮バイキング食べ放題＆濃溝の滝・マザー牧場",
      price: "10,500円〜14,000円",
      duration: "約10.5時間（7:45発〜18:30着）",
      highlights: "サザエ・ホタテ・牡蠣・海鮮丼50種食べ放題・東京湾アクアライン爽快ドライブ",
      departure: "新宿・東京駅八重洲口・横浜駅東口",
      season: "通年（春の花摘み・冬のイルミネーション連動）",
      tag: "グルメ満腹"
    },
    {
      course: "箱根芦ノ湖海賊船・絶景富士山＆日帰り温泉「小涌園ユネッサン」",
      price: "11,800円〜15,200円",
      duration: "約11時間（7:15発〜19:00着）",
      highlights: "芦ノ湖クルーズ・箱根神社平和の鳥居・露天風呂森の湯で名湯リフレッシュ",
      departure: "新宿西口・東京駅丸の内口",
      season: "通年（新緑5〜6月、紅葉10月下旬〜11月中旬が特におすすめ）",
      tag: "温泉癒やし"
    },
    {
      course: "群馬 吹割の滝・原田農園りんご/いちご狩り＆伊香保石段街",
      price: "9,500円〜12,800円",
      duration: "約11.5時間（7:00発〜19:30着）",
      highlights: "東洋のナイアガラ散策・自家製アップルパイ試食・伊香保黄金の湯足湯巡り",
      departure: "新宿・池袋東口・上野駅",
      season: "5月〜12月（春いちご、秋紅葉＆りんご、冬雪景色）",
      tag: "自然・絶景"
    }
  ];

  const travelModes = [
    {
      mode: "日帰りバスツアー",
      cost: "約10,000円〜13,000円",
      effort: "★☆☆☆☆（座っているだけで現地直行）",
      alcohol: "◎ 全員心ゆくまで地酒・ワイン試飲OK",
      merit: "果物狩り園地や工場など駅から遠いスポットも乗換なしで一気に直結。高速料金・ガソリン代・入場料・昼食込で圧倒的ハイコスパ。"
    },
    {
      mode: "マイカー / レンタカー",
      cost: "約18,000円〜24,000円（車代＋高速往復＋ガソリン＋体験料）",
      effort: "★★★★☆（運転者の疲労大・渋滞時の神経消耗）",
      alcohol: "× 運転者は試飲・ビール完全不可",
      merit: "出発時間や寄り道の自由度は高いが、小仏トンネルやアクアラインの週末大渋滞で運転手がヘトヘトになるリスク大。"
    },
    {
      mode: "電車・路線バス乗り継ぎ",
      cost: "約12,000円〜17,000円（特急券＋路線バス運賃＋食事代）",
      effort: "★★★☆☆（時刻表の管理とバス待ちの手間）",
      alcohol: "◯ 車内や現地で飲酒可能",
      merit: "渋滞遅延を避けられるメリットはあるが、郊外の観光農園へのバス本数が極端に少なく待ち時間ロスが発生しやすい。"
    }
  ];

  const sampleItinerary = [
    {
      time: "07:30",
      spot: "バスタ新宿 / 都庁大型バス駐車場 集合・出発",
      detail: "添乗員が受付。大型リクライニングシートで朝のコーヒーを飲みながらリラックス。中央道へスムーズに合流。"
    },
    {
      time: "09:45〜11:00",
      spot: "山梨・勝沼 観光農園でシャインマスカット30分もぎとり食べ放題",
      detail: "完熟の朝採れ大粒ぶどうをその場でハサミで収穫。パリッとはじける甘い果汁を心ゆくまで堪能。お土産用の直売所も併設。"
    },
    {
      time: "11:30〜12:45",
      spot: "甲州名物「ほうとう」＆富士桜ポークせいろ蒸し御膳ランチ",
      detail: "自家製味噌で煮込んだアツアツのほうとう鍋。バスツアー専用シートで団体待ち時間なくスムーズに配膳されます。"
    },
    {
      time: "13:15〜14:20",
      spot: "桔梗信玄餅工場テーマパーク（信玄餅詰め放題体験）",
      detail: "テレビで話題の詰め放題！専用ビニール袋を丁寧に伸ばし、15個〜20個以上を詰める技を添乗員がレクチャー。信玄餅ソフトも人気。"
    },
    {
      time: "14:50〜15:50",
      spot: "甲州老舗ワイナリー見学＆名醸ワイン試飲・ぶどう果汁ジュース",
      detail: "地下貯蔵庫の樽を見学後、辛口白ワイン「甲州」や芳醇な赤ワインをテイスティング。お酒を飲まない方向けの100%ぶどうジュースも絶品。"
    },
    {
      time: "16:20〜17:00",
      spot: "富士山絶景スポット（新倉山浅間公園またはハーブ庭園）",
      detail: "四季折々の花々と雄大な富士山のパノラマを背景に記念撮影。旅の締めくくりに清々しい空気をチャージ。"
    },
    {
      time: "19:00〜19:30",
      spot: "新宿駅西口周辺 到着・解散",
      detail: "手荷物にはお土産のフルーツと信玄餅がぎっしり。車内でお昼寝しながら帰着できるため、夜のスケジュールも快適。"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 antialiased">
      {/* 🌲 Hero Header - Emerald Theme */}
      <header className="relative bg-gradient-to-br from-emerald-950 via-teal-900 to-emerald-900 text-white overflow-hidden py-14 md:py-20 px-4 sm:px-6 lg:px-8 border-b border-emerald-800/40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.15),transparent_50%)] pointer-events-none" />
        <div className="max-w-5xl mx-auto relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-bold tracking-wide">
            <span>🚌 2026年最新 関東発バス旅特集</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>車なし・手ぶらで大満足</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight leading-tight md:leading-[1.2] text-white">
            【東京・新宿発 日帰りバスツアーおすすめ2026】
            <br />
            <span className="text-emerald-300">季節のフルーツ狩り・絶景温泉・食べ放題</span>
            <span className="text-emerald-100">の最強プラン徹底比較</span>
          </h1>

          <p className="text-emerald-100/90 text-sm md:text-base max-w-3xl leading-relaxed pt-2">
            新宿・東京駅から出発する人気日帰りバスツアーの完全ガイド。シャインマスカットや桃狩り、桔梗信玄餅詰め放題、房総の海鮮浜焼き食べ放題、箱根の露天風呂入浴まで、電車や自家用車では真似できない圧倒的なコストパフォーマンスと満足度の秘訣を徹底比較します。
          </p>

          <div className="flex flex-wrap gap-2 pt-3">
            <span className="px-2.5 py-1 rounded bg-emerald-900/60 border border-emerald-700/50 text-emerald-200 text-xs font-medium">#新宿発バスツアー</span>
            <span className="px-2.5 py-1 rounded bg-emerald-900/60 border border-emerald-700/50 text-emerald-200 text-xs font-medium">#シャインマスカット食べ放題</span>
            <span className="px-2.5 py-1 rounded bg-emerald-900/60 border border-emerald-700/50 text-emerald-200 text-xs font-medium">#信玄餅詰め放題</span>
            <span className="px-2.5 py-1 rounded bg-emerald-900/60 border border-emerald-700/50 text-emerald-200 text-xs font-medium">#日帰り温泉付き</span>
          </div>
        </div>
      </header>

      {/* 🚀 Breadcrumbs */}
      <nav className="bg-emerald-900/10 border-b border-emerald-900/10 py-2.5 px-4 text-xs text-slate-600">
        <div className="max-w-5xl mx-auto flex items-center gap-2">
          <Link href="/" className="hover:text-emerald-700 transition">ホーム</Link>
          <span>›</span>
          <span className="text-emerald-900 font-bold">東京・新宿発 日帰りバスツアー徹底比較</span>
        </div>
      </nav>

      {/* Main Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14 space-y-12">
        {/* 🌟 Official Banner Section */}
        <section className="bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 rounded-3xl p-6 md:p-8 text-white shadow-xl shadow-emerald-900/10 flex flex-col md:flex-row items-center justify-between gap-6 border border-emerald-400/30">
          <div className="space-y-2 text-center md:text-left">
            <span className="inline-block px-3 py-0.5 rounded-full bg-white/20 text-white text-xs font-extrabold uppercase tracking-wider">
              Rakuten Travel Official
            </span>
            <h2 className="text-xl md:text-2xl font-black leading-snug">
              楽天トラベル「日帰りバスツアー」公式予約
            </h2>
            <p className="text-emerald-50 text-xs md:text-sm max-w-xl">
              フルーツ狩り、食べ放題、温泉入浴、工場見学がセットになった人気プランが勢揃い！楽天ポイントが貯まる＆割引クーポン配布中。
            </p>
          </div>
          <a
            href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fbus%2Ftour%2F"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center justify-center gap-2 px-7 py-4 bg-amber-400 hover:bg-amber-300 text-emerald-950 font-black text-sm md:text-base rounded-2xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition duration-200"
          >
            <span>🚌 楽天トラベルで関東発バスツアーを探す</span>
            <span className="text-base">→</span>
          </a>
        </section>

        {/* 📊 1. 東京・新宿発 定番＆人気日帰りバスツアー4大ルート比較 */}
        <section className="bg-white rounded-3xl p-6 md:p-10 border border-emerald-100 shadow-sm space-y-6">
          <div className="border-b border-emerald-100 pb-4">
            <div className="flex items-center gap-2 text-emerald-700 font-extrabold text-xs tracking-wider uppercase mb-1">
              <span>ROUTE COMPARISON</span>
            </div>
            <h2 className="text-xl md:text-2xl font-black text-slate-900">
              【目的別】東京・新宿発 おすすめ日帰りバスツアー4大コース比較
            </h2>
            <p className="text-xs md:text-sm text-slate-600 mt-1">
              果物狩り・海鮮バイキング・温泉癒やし・渓谷美など、休日を120%楽しむ主要プランの料金と特徴。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {tourComparison.map((item, idx) => (
              <div
                key={idx}
                className="bg-emerald-50/40 border border-emerald-200/70 rounded-2xl p-5 flex flex-col justify-between hover:border-emerald-400 hover:shadow-md transition duration-200"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-600 text-white text-[10px] font-black tracking-wide">
                      {item.tag}
                    </span>
                    <span className="text-xs font-bold text-emerald-800 bg-emerald-100/80 px-2 py-0.5 rounded">
                      {item.season}
                    </span>
                  </div>
                  <h3 className="text-base font-black text-slate-900 leading-snug">
                    {item.course}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    <strong className="text-emerald-950 font-bold">見どころ：</strong>{item.highlights}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-emerald-200/60 space-y-1.5 text-xs">
                  <div className="flex justify-between items-baseline">
                    <span className="text-slate-500 font-medium">ツアー目安料金:</span>
                    <span className="text-sm font-black text-emerald-700">{item.price}</span>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <span className="text-slate-500 font-medium">所要時間:</span>
                    <span className="font-bold text-slate-700">{item.duration}</span>
                  </div>
                  <div className="text-[11px] text-slate-500 pt-1">
                    集合地: {item.departure}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-emerald-900/5 border border-emerald-900/10 rounded-2xl p-4 text-xs text-slate-700 leading-relaxed">
            💡 <strong>予約のコツ：</strong>秋のシャインマスカット狩り（9〜10月）や信玄餅詰め放題コースは土日を中心に1ヶ月前から満席になる定番コースです。楽天トラベルの「日帰りバスツアー特集」では、キャンセル待ちや増便枠がリアルタイムで反映されるため、2〜3週間前のこまめなチェックがおすすめです。
          </div>
        </section>

        {/* ⚖️ 2. 日帰りバスツアー vs 車・電車 コスパ・快適度徹底検証 */}
        <section className="bg-white rounded-3xl p-6 md:p-10 border border-emerald-100 shadow-sm space-y-6">
          <div className="border-b border-emerald-100 pb-4">
            <div className="flex items-center gap-2 text-emerald-700 font-extrabold text-xs tracking-wider uppercase mb-1">
              <span>VALUE ANALYSIS</span>
            </div>
            <h2 className="text-xl md:text-2xl font-black text-slate-900">
              なぜバスツアーが最強？自家用車・電車との費用＆快適度比較
            </h2>
            <p className="text-xs md:text-sm text-slate-600 mt-1">
              レンタカー代、高速代、ガソリン代が高騰する昨今、バスツアーの圧倒的なお得度と気軽さを数値化。
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs md:text-sm border-collapse">
              <thead>
                <tr className="bg-emerald-900 text-white">
                  <th className="p-3 md:p-4 rounded-tl-xl font-bold">移動手段</th>
                  <th className="p-3 md:p-4 font-bold">1人あたり総費用（昼食・体験込）</th>
                  <th className="p-3 md:p-4 font-bold">疲労度・運転負荷</th>
                  <th className="p-3 md:p-4 font-bold">お酒・試飲</th>
                  <th className="p-3 md:p-4 rounded-tr-xl font-bold">総合評価・特徴</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-emerald-100">
                {travelModes.map((m, idx) => (
                  <tr key={idx} className={idx === 0 ? "bg-emerald-50/70 font-semibold" : "bg-white"}>
                    <td className="p-3 md:p-4 font-bold text-slate-900">{m.mode}</td>
                    <td className="p-3 md:p-4 text-emerald-800 font-black">{m.cost}</td>
                    <td className="p-3 md:p-4 text-slate-700">{m.effort}</td>
                    <td className="p-3 md:p-4 text-slate-700">{m.alcohol}</td>
                    <td className="p-3 md:p-4 text-xs text-slate-600 leading-relaxed">{m.merit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 🗺️ 3. 体験レポ風！山梨フルーツ狩り＆信玄餅詰め放題モデルスケジュール */}
        <section className="bg-white rounded-3xl p-6 md:p-10 border border-emerald-100 shadow-sm space-y-6">
          <div className="border-b border-emerald-100 pb-4">
            <div className="flex items-center gap-2 text-emerald-700 font-extrabold text-xs tracking-wider uppercase mb-1">
              <span>DAYTRIP TIMELINE</span>
            </div>
            <h2 className="text-xl md:text-2xl font-black text-slate-900">
              【人気No.1】山梨シャインマスカット＆信玄餅詰め放題 1日満喫タイムライン
            </h2>
            <p className="text-xs md:text-sm text-slate-600 mt-1">
              朝7:30に新宿を出発して夜19:00に戻る、王道黄金ルートの具体的な過ごし方。
            </p>
          </div>

          <div className="relative pl-6 space-y-6 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-emerald-200">
            {sampleItinerary.map((step, sIdx) => (
              <div key={sIdx} className="relative space-y-1">
                <div className="absolute -left-[27px] top-1 w-3.5 h-3.5 rounded-full bg-emerald-600 border-2 border-white shadow-sm" />
                <div className="flex flex-wrap items-baseline gap-2">
                  <span className="text-xs font-black text-emerald-900 bg-emerald-100 px-2 py-0.5 rounded border border-emerald-300">
                    {step.time}
                  </span>
                  <h3 className="text-sm md:text-base font-bold text-slate-900">
                    {step.spot}
                  </h3>
                </div>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed pt-0.5 pl-0.5">
                  {step.detail}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 🏨 4. 前泊・後泊や連休に使える！おすすめ宿泊ホテル・温泉旅館 */}
        <section className="bg-white rounded-3xl p-6 md:p-10 border border-emerald-100 shadow-sm space-y-6">
          <div className="border-b border-emerald-100 pb-4">
            <div className="flex items-center gap-2 text-emerald-700 font-extrabold text-xs tracking-wider uppercase mb-1">
              <span>HOTELS & ONSEN RYOKAN</span>
            </div>
            <h2 className="text-xl md:text-2xl font-black text-slate-900">
              集合場所近くの前泊ホテル ＆ 日帰り目的地（山梨・石和）の贅沢温泉宿
            </h2>
            <p className="text-xs md:text-sm text-slate-600 mt-1">
              朝早い新宿発バスツアーのための前泊拠点や、「日帰りじゃ物足りない！」という方向けの美肌温泉旅館です。
            </p>
          </div>

          {hotels.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {hotels.map((hotel: any) => (
                <article
                  key={hotel.hotelNo}
                  className="flex flex-col justify-between border border-emerald-100 bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:border-emerald-300 transition duration-200"
                >
                  <div>
                    <div className="aspect-video relative overflow-hidden bg-slate-100 border-b border-emerald-50">
                      {hotel.hotelImageUrl ? (
                        <img
                          src={hotel.hotelImageUrl}
                          alt={hotel.hotelName}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-slate-400 text-xs font-bold">
                          {hotel.hotelName}
                        </div>
                      )}
                      {hotel.hotelMinCharge > 0 && (
                        <span className="absolute bottom-2 right-2 text-[10px] font-black bg-emerald-950/90 text-emerald-300 px-2 py-0.5 rounded shadow">
                          ¥{Number(hotel.hotelMinCharge).toLocaleString()}〜
                        </span>
                      )}
                    </div>

                    <div className="p-4 space-y-2">
                      {hotel.reviewAverage > 0 && (
                        <div className="flex items-center justify-between text-[11px] font-bold text-amber-600">
                          <span>⭐ {hotel.reviewAverage}点（{hotel.reviewCount}件）</span>
                          <span className="text-[10px] text-slate-500">{hotel.address1}</span>
                        </div>
                      )}
                      <h3 className="text-xs md:text-sm font-black text-slate-900 line-clamp-2">
                        {hotel.hotelName}
                      </h3>
                      {hotel.hotelSpecial && (
                        <p className="text-[11px] text-slate-600 line-clamp-2 font-medium">
                          {hotel.hotelSpecial}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="p-4 pt-0">
                    <a
                      href={hotel.affiliateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full text-center py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl shadow transition duration-150"
                    >
                      空室状況・プランを確認する →
                    </a>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <p className="text-sm text-slate-500">宿泊施設情報を読み込み中...</p>
          )}
        </section>

        {/* 💡 5. バスツアー初心者のためのチェックリスト＆よくある質問 */}
        <section className="bg-emerald-900/5 rounded-3xl p-6 md:p-8 border border-emerald-900/10 space-y-6">
          <h2 className="text-lg md:text-xl font-black text-emerald-950">
            日帰りバスツアー参加前の重要チェックポイント＆FAQ
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs md:text-sm">
            <div className="bg-white p-5 rounded-2xl border border-emerald-100 shadow-sm space-y-2">
              <h3 className="font-bold text-emerald-900 flex items-center gap-1.5">
                <span>🎒</span> 持ち物・おすすめ服装
              </h3>
              <p className="text-slate-600 leading-relaxed text-xs">
                ・フルーツ狩りや農園散策用：歩きやすいスニーカー＆汚れが目立ちにくい服<br />
                ・車内冷暖房対策：カーディガンや大判ストール<br />
                ・お土産用：ウェットティッシュ・保冷バッグ・保冷剤（海鮮や果物の鮮度維持に必須）
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-emerald-100 shadow-sm space-y-2">
              <h3 className="font-bold text-emerald-900 flex items-center gap-1.5">
                <span>🕒</span> 集合場所の注意点
              </h3>
              <p className="text-slate-600 leading-relaxed text-xs">
                新宿の集合場所は「バスタ新宿」「都庁大型バス駐車場」「新宿センタービル前」など会社によって異なります。集合時間は出発の15〜20分前厳守。週末の新宿駅構内は混雑するため、余裕を持って移動しましょう。
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-emerald-100 shadow-sm space-y-2">
              <h3 className="font-bold text-emerald-900 flex items-center gap-1.5">
                <span>🚻</span> トイレ休憩・車内設備
              </h3>
              <p className="text-slate-600 leading-relaxed text-xs">
                バスツアーでは高速道路のSA/PAで約1.5時間〜2時間おきに15〜20分のトイレ休憩が設けられます。トイレ付きバス確約プランを選ぶと渋滞時でも安心です。
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-emerald-100 shadow-sm space-y-2">
              <h3 className="font-bold text-emerald-900 flex items-center gap-1.5">
                <span>🏷️</span> クーポン利用でお得に予約
              </h3>
              <p className="text-slate-600 leading-relaxed text-xs">
                楽天トラベルでは定期的に「日帰りバスツアー割引クーポン」や「楽天スーパーSALE連動ポイント倍増」を実施。予約前にクーポン獲得をお忘れなく！
              </p>
            </div>
          </div>
        </section>

        {/* 🔗 関連記事（内部リンク） */}
        <section className="border-t border-slate-200 pt-8 space-y-4">
          <h2 className="text-base font-bold text-slate-800">
            あわせて読みたい関東発バス旅＆温泉ガイド
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              href="/tokyo-fujikawaguchiko-highway-bus-guide"
              className="p-4 bg-white rounded-2xl border border-slate-200 hover:border-emerald-500 hover:shadow-sm transition duration-150 flex items-center justify-between group"
            >
              <div>
                <p className="text-xs text-emerald-700 font-bold mb-1">直行バス比較ガイド</p>
                <p className="text-sm font-bold text-slate-800 group-hover:text-emerald-700 transition">
                  新宿・東京から富士急・河口湖 直行バスと特急の徹底比較 →
                </p>
              </div>
            </Link>
            <Link
              href="/tokyo-kusatsu-onsen-highway-bus-guide"
              className="p-4 bg-white rounded-2xl border border-slate-200 hover:border-emerald-500 hover:shadow-sm transition duration-150 flex items-center justify-between group"
            >
              <div>
                <p className="text-xs text-emerald-700 font-bold mb-1">名湯温泉ガイド</p>
                <p className="text-sm font-bold text-slate-800 group-hover:text-emerald-700 transition">
                  東京・新宿から草津温泉へ直行！高速バスと新幹線どっちが安い？ →
                </p>
              </div>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
