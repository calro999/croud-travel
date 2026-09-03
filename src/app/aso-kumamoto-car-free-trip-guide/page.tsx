import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【熊本・阿蘇 車なし観光 1泊2日モデルコース】観光特急あそぼーい！＆産交バスで行くカルデラ大自然旅 ｜ 日本全国・旅宿クラウド",
  description: "運転免許なしでも阿蘇の絶景は回れる！熊本駅から特急あそぼーい！・九州横断特急、阿蘇火口シャトルバス、草千里ヶ浜、あか牛丼ランチ、阿蘇駅チカ温泉宿を満喫する公共交通パーフェクトプラン。",
  keywords: [
    "阿蘇 車なし 観光",
    "特急あそぼーい",
    "阿蘇火口シャトル",
    "草千里ヶ浜 バス",
    "阿蘇 1泊2日 モデルコース 電車",
    "熊本駅 阿蘇駅 アクセス",
    "産交バス 阿蘇火口線",
    "あか牛丼",
    "楽天トラベル 阿蘇"
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
      return data["aso-kumamoto-car-free-trip-guide"]?.hotels || [];
    }
  } catch (e) {
    console.error("Failed to load hotels for aso-kumamoto-car-free-trip-guide", e);
  }
  return [];
}

export default function AsoKumamotoCarFreePage() {
  const hotels = loadHotels();

  const transitSummary = [
    {
      title: "JR豊肥本線（特急あそぼーい！／九州横断特急）",
      route: "熊本駅 ⇄ 阿蘇駅",
      time: "約1時間10分〜1時間25分",
      fare: "片道 約2,280円〜2,600円（乗車券＋指定席特急券）",
      point: "パノラマシートやカフェカウンターを擁する人気観光列車。スイッチバックで立野の急勾配を越えるダイナミックな車窓は必見！"
    },
    {
      title: "産交バス「阿蘇火口線」",
      route: "阿蘇駅前 ⇄ 草千里阿蘇火山博物館前 ⇄ 阿蘇山上ターミナル",
      time: "阿蘇駅〜草千里：約25分 / 山上ターミナル：約35分",
      fare: "阿蘇駅〜草千里 730円 / 山上ターミナル 860円（1日乗車券1,500円がお得）",
      point: "阿蘇駅前から直通でカルデラを登坂。名所「草千里ヶ浜」と火口直下のターミナルを効率よく結びます。"
    },
    {
      title: "阿蘇山火口シャトル",
      route: "阿蘇山上ターミナル ⇄ 中岳第1火口展望所",
      time: "約5分（随時運行）",
      fare: "大人往復 1,500円（片道800円）",
      point: "ロープウェイ運休後も安全運行を続ける専用シャトル。エメラルドグリーンの湯だまりと立ち上る白煙を間近で体感。"
    },
    {
      title: "特急やまびこ号／九州横断バス",
      route: "熊本駅・阿蘇くまもと空港 ⇄ 阿蘇駅前 ⇄ 黒川温泉・湯布院・別府",
      time: "熊本駅〜阿蘇駅：約1時間50分",
      fare: "熊本駅〜阿蘇駅 約1,600円",
      point: "空港から阿蘇へ直接アクセスしたい場合に極めて便利。黒川温泉への直通連絡にも重宝します。"
    }
  ];

  const itineraryDay1 = [
    {
      time: "09:05",
      title: "熊本駅を出発（観光特急「あそぼーい！」乗車）",
      desc: "黒船を思わせるスタイリッシュな外観と木の温もりあふれる客室。3号車のカフェで阿蘇サイダーやオリジナルアイスを購入し、立野駅の3段式スイッチバック車窓を楽しみながら阿蘇山麓へ。"
    },
    {
      time: "10:30",
      title: "JR阿蘇駅に到着・手荷物を預けて駅前散策",
      desc: "駅構内のコインロッカーにスーツケースを預け、駅前の案内所で産交バス「阿蘇火口線1日乗車券（1,500円）」を購入。黒川温泉行きの乗り継ぎ時間もここで確認。"
    },
    {
      time: "10:45",
      title: "産交バス阿蘇火口線で「草千里ヶ浜」へ",
      desc: "広大な放牧地と烏帽子岳を背景にした阿蘇屈指のシンボルスポット。一面に広がる緑の草原（秋冬は黄金色の枯野）と点在する馬たちの牧歌的風景に息を呑みます。"
    },
    {
      time: "11:30",
      title: "ランチ：草千里展望レストランで「あか牛丼」",
      desc: "柔らかくジューシーな阿蘇名物あか牛のローストビーフに、半熟玉子と特製甘辛タレが絡む極上丼。パノラマガラス越しに草千里ヶ浜を眺めながらの至福ランチ。"
    },
    {
      time: "13:10",
      title: "阿蘇火口シャトルで中岳第1火口見学",
      desc: "山上ターミナルからシャトルバスに乗り換えて火口縁へ。エメラルドグリーンに輝く神秘的な火口湖と立ち込める硫黄の噴煙、地球の鼓動を全身で体感します。"
    },
    {
      time: "15:15",
      title: "産交バスで下山し、阿蘇駅へ帰着",
      desc: "車窓から阿蘇五岳の絶景を眺めながら駅へ。駅隣接の道の駅「阿蘇」で、名物ASO MILKソフトクリームや地元特産のお土産を物色。"
    },
    {
      time: "16:00",
      title: "阿蘇駅前／熊本市街の名湯宿へチェックイン",
      desc: "阿蘇駅直近の温泉旅館や、熊本駅直結の最新シティホテルに宿泊。美肌の湯に浸かり、馬刺しや辛子蓮根など熊本郷土の美食会席を堪能。"
    }
  ];

  const itineraryDay2 = [
    {
      time: "09:00",
      title: "宿を出発・阿蘇神社門前町水基めぐり（宮地駅へ）",
      desc: "JR豊肥本線でひと駅（約5分）の宮地駅へ。2,000年以上の歴史を誇る「阿蘇神社」を参拝。震災から見事に復旧した楼門を仰ぎ見ます。"
    },
    {
      time: "10:00",
      title: "門前町通りで湧水「水基」と食べ歩き",
      desc: "阿蘇の清冽な天然地下水が湧き出る水基が点在するレトロな参道。馬ロッケ（馬肉コロッケ）やシュークリーム、湧水珈琲を片手にのんびり散策。"
    },
    {
      time: "12:15",
      title: "宮地駅から熊本行き特急列車で熊本駅へ帰還",
      desc: "「九州横断特急」に乗車し、カルデラ盆地をあとに熊本駅へ。駅ビル「アミュプラザくまもと」で熊本ラーメンやいきなり団子を購入して旅を締めくくります。"
    }
  ];

  const busHacks = [
    {
      badge: "お得技 01",
      title: "産交バス「阿蘇火口線1日乗車券」を買うべし",
      detail: "阿蘇駅〜草千里往復（往復1,460円）に少し足すだけの1,500円で1日乗り放題。山上ターミナルまで行けば片道860円なので、往復するだけで即元が取れます。阿蘇駅前バス案内所で乗車前に購入可能です。"
    },
    {
      badge: "お得技 02",
      title: "特急あそぼーい！は週末中心運行！JR九州ネット予約を活用",
      detail: "「あそぼーい！」は土休日や多客期を中心に1日1往復運行（別府発着便もあり）。満席になりやすいため、JR九州インターネット列車予約で1ヶ月前の10時に座席指定を確保するのが鉄則です。平日なら「九州横断特急」が便利。"
    },
    {
      badge: "お得技 03",
      title: "火山ガス規制・天候情報を事前にWEBチェック",
      detail: "阿蘇中岳は現在も活発な活火山です。風向きや火山ガス濃度（SO2）によって火口見学ゾーンが一時立ち入り規制されることがあります。「阿蘇火山火口規制情報」サイトを当日の朝チェックしておくと安心です。"
    }
  ];

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans pb-16">
      {/* ヒーローセクション */}
      <div className="relative bg-gradient-to-br from-amber-900 via-amber-800 to-stone-900 text-white overflow-hidden py-14 md:py-20 px-4">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#fbbf24_1px,transparent_1px)] [background-size:16px_16px]" />
        
        <div className="relative max-w-5xl mx-auto space-y-6">
          <div className="flex flex-wrap items-center gap-2 text-xs md:text-sm font-black">
            <span className="bg-amber-400 text-stone-950 px-3 py-1 rounded-full uppercase tracking-wider">
              車なし・公共交通モデルコース
            </span>
            <span className="bg-white/20 text-amber-200 px-3 py-1 rounded-full backdrop-blur-sm">
              JR豊肥本線 ＋ 産交バス ＋ 火口シャトル
            </span>
            <span className="text-amber-200/90 ml-auto hidden sm:inline">
              所要期間：1泊2日
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-tight tracking-tight font-journal-serif text-amber-50">
            【熊本・阿蘇 車なし観光 1泊2日】<br className="hidden sm:inline" />
            特急あそぼーい！＆産交バスで行くカルデラ大自然旅
          </h1>

          <p className="text-sm md:text-base text-amber-100/90 max-w-3xl leading-relaxed">
            「阿蘇は大自然すぎてマイカーやレンタカーがないと無理…」と思っていませんか？実は熊本駅から大人気観光特急「あそぼーい！」に乗り、阿蘇駅前から路線バスと火口シャトルを乗り継げば、草千里ヶ浜の絶景・火口の煙・名物あか牛丼まで、運転ストレスゼロで贅沢に満喫できます！
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="#itinerary"
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-stone-950 font-black px-6 py-3 rounded-xl shadow-lg transition duration-200 text-xs sm:text-sm"
            >
              <span>🗺️</span>
              <span>1泊2日スケジュールを見る</span>
            </a>
            <a
              href="#hotels"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold border border-white/30 px-6 py-3 rounded-xl backdrop-blur-sm transition duration-200 text-xs sm:text-sm"
            >
              <span>🏨</span>
              <span>駅チカ厳選ホテル・旅館</span>
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 mt-8 space-y-12">
        {/* 🎫 クーポン＆予約バナーセクション */}
        <div className="bg-gradient-to-r from-amber-500 via-amber-600 to-yellow-600 rounded-2xl p-4 sm:p-6 text-white shadow-md flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center md:text-left">
            <div className="inline-block bg-stone-950/40 text-amber-200 text-xs font-black px-2.5 py-0.5 rounded">
              楽天トラベル限定クーポン配布中
            </div>
            <h3 className="text-base sm:text-lg font-black font-journal-serif">
              阿蘇・熊本エリアの宿泊が最大20%OFF！駅前宿・名湯旅館クーポン
            </h3>
            <p className="text-xs text-amber-100">
              5と0のつく日はさらにポイント還元率アップ。特急列車＋宿のダイナミックパッケージも対象！
            </p>
          </div>
          <a
            href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fcoupon%2F"
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap px-6 py-3 bg-stone-950 hover:bg-stone-900 text-amber-300 hover:text-amber-200 text-xs sm:text-sm font-black rounded-xl shadow-lg transition flex items-center gap-1.5"
          >
            <span>🏷️ クーポンを獲得する</span>
            <span>→</span>
          </a>
        </div>

        {/* 🚄 公共交通アクセス一覧表 */}
        <section className="bg-white border border-amber-200/80 rounded-3xl p-6 md:p-8 shadow-sm space-y-6">
          <div className="border-b border-amber-100 pb-3">
            <div className="text-xs font-black text-amber-700 tracking-wider uppercase flex items-center gap-1">
              <span>🚆 PUBLIC TRANSIT NETWORK</span>
            </div>
            <h2 className="text-xl md:text-2xl font-black font-journal-serif text-stone-900 mt-1">
              車なしで阿蘇を巡る！4つの公共交通機関ハイライト
            </h2>
            <p className="text-xs md:text-sm text-stone-600 mt-1">
              熊本駅・熊本空港から阿蘇山火口までの接続ルートと運賃・所要時間の完全まとめ。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {transitSummary.map((item, idx) => (
              <div
                key={idx}
                className="border border-amber-100 bg-amber-50/40 rounded-2xl p-5 space-y-3 flex flex-col justify-between hover:bg-amber-50 transition"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-black text-stone-900 text-sm md:text-base font-journal-serif">
                      {item.title}
                    </h3>
                  </div>
                  <div className="text-xs font-bold text-amber-800 bg-amber-100/80 inline-block px-2.5 py-1 rounded">
                    区間：{item.route}
                  </div>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-stone-600 font-semibold pt-1">
                    <span>⏱ 所要：{item.time}</span>
                    <span>💴 運賃：{item.fare}</span>
                  </div>
                  <p className="text-xs text-stone-700 leading-relaxed pt-1">
                    {item.point}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* 楽天トラベル高速バス・特急ダイナミックバナー */}
          <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-100 to-yellow-50 border border-amber-300 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs md:text-sm text-stone-800 space-y-0.5 text-center sm:text-left">
              <span className="font-bold text-amber-900">💡 福岡（博多・天神）から阿蘇へ直接行くなら？</span>
              <p className="text-stone-600 text-xs">
                西鉄・産交高速バス「ひのくに号」で熊本駅へ出て特急に乗るか、高速バス「ASOエクスプレス」で阿蘇直行も便利！
              </p>
            </div>
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fbus%2F"
              target="_blank"
              rel="noopener noreferrer"
              className="whitespace-nowrap px-5 py-2.5 bg-amber-600 hover:bg-amber-700 text-white text-xs font-black rounded-xl shadow transition"
            >
              🚌 九州の高速バスを検索
            </a>
          </div>
        </section>

        {/* 🗺️ 1泊2日タイムスケジュール */}
        <section id="itinerary" className="bg-white border border-stone-200 rounded-3xl p-6 md:p-8 shadow-sm space-y-8">
          <div className="border-b border-stone-100 pb-3">
            <div className="text-xs font-black text-amber-700 tracking-wider uppercase">
              🗓️ 1 NIGHT 2 DAYS TIMETABLE
            </div>
            <h2 className="text-xl md:text-2xl font-black font-journal-serif text-stone-900 mt-1">
              阿蘇の大自然を味わい尽くす！公共交通1泊2日モデルコース
            </h2>
            <p className="text-xs md:text-sm text-stone-600 mt-1">
              乗り継ぎ時間を計算し尽くした、無理なく阿蘇火口と草千里、門前町を巡る王道スケジュール。
            </p>
          </div>

          {/* 1日目 */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="bg-amber-700 text-white font-black text-xs px-3 py-1 rounded-full">
                DAY 1
              </span>
              <h3 className="font-black text-base md:text-lg text-stone-900 font-journal-serif">
                特急あそぼーい！で阿蘇入り ➔ 草千里ヶ浜あか牛丼 ➔ 中岳火口
              </h3>
            </div>
            <div className="relative pl-6 space-y-6 before:absolute before:left-2.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-amber-200">
              {itineraryDay1.map((step, idx) => (
                <div key={idx} className="relative space-y-1">
                  <div className="absolute -left-[27px] top-1.5 w-3.5 h-3.5 rounded-full bg-amber-600 border-2 border-white shadow-sm" />
                  <div className="flex flex-wrap items-baseline gap-2">
                    <span className="text-xs font-black text-amber-900 bg-amber-100 px-2 py-0.5 rounded border border-amber-300">
                      {step.time}
                    </span>
                    <h4 className="text-sm md:text-base font-bold text-stone-900">
                      {step.title}
                    </h4>
                  </div>
                  <p className="text-xs md:text-sm text-stone-600 leading-relaxed pl-0.5">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 2日目 */}
          <div className="space-y-4 pt-4 border-t border-stone-100">
            <div className="flex items-center gap-2">
              <span className="bg-amber-800 text-white font-black text-xs px-3 py-1 rounded-full">
                DAY 2
              </span>
              <h3 className="font-black text-base md:text-lg text-stone-900 font-journal-serif">
                復興を遂げた阿蘇神社 ➔ 門前町水基めぐり＆グルメ ➔ 熊本駅
              </h3>
            </div>
            <div className="relative pl-6 space-y-6 before:absolute before:left-2.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-amber-200">
              {itineraryDay2.map((step, idx) => (
                <div key={idx} className="relative space-y-1">
                  <div className="absolute -left-[27px] top-1.5 w-3.5 h-3.5 rounded-full bg-amber-700 border-2 border-white shadow-sm" />
                  <div className="flex flex-wrap items-baseline gap-2">
                    <span className="text-xs font-black text-amber-900 bg-amber-100 px-2 py-0.5 rounded border border-amber-300">
                      {step.time}
                    </span>
                    <h4 className="text-sm md:text-base font-bold text-stone-900">
                      {step.title}
                    </h4>
                  </div>
                  <p className="text-xs md:text-sm text-stone-600 leading-relaxed pl-0.5">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 💡 車なし阿蘇観光の3大攻略ハック */}
        <section className="bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 border border-amber-200 rounded-3xl p-6 md:p-8 space-y-6">
          <div className="border-b border-amber-200/60 pb-3">
            <div className="text-xs font-black text-amber-800 tracking-wider uppercase">
              💡 PRO TRAVEL TIPS
            </div>
            <h2 className="text-xl md:text-2xl font-black font-journal-serif text-stone-900 mt-1">
              失敗しない！公共交通で行く阿蘇旅の攻略テクニック3選
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {busHacks.map((hack, idx) => (
              <div key={idx} className="bg-white/80 backdrop-blur-sm border border-amber-200/80 rounded-2xl p-5 space-y-2">
                <span className="text-[10px] font-black uppercase tracking-wider text-amber-700 bg-amber-100 px-2 py-0.5 rounded">
                  {hack.badge}
                </span>
                <h3 className="font-bold text-stone-900 text-sm font-journal-serif">
                  {hack.title}
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {hack.detail}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 🏨 ホテルカードセクション */}
        <section id="hotels" className="bg-white border border-stone-200 rounded-3xl p-6 md:p-8 shadow-sm space-y-6">
          <div className="border-b border-stone-100 pb-3">
            <div className="text-xs font-black text-amber-700 tracking-wider uppercase">
              🏨 SELECTED HOTELS & RYOKAN
            </div>
            <h2 className="text-xl md:text-2xl font-black font-journal-serif text-stone-900 mt-1">
              車なし旅行に最適！阿蘇・熊本駅アクセスの厳選宿
            </h2>
            <p className="text-xs md:text-sm text-stone-600 mt-1">
              阿蘇駅・熊本駅からのアクセスが良く、観光後の温泉や極上郷土料理が楽しめる評価の高い宿泊施設です。
            </p>
          </div>

          {hotels.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {hotels.map((hotel) => (
                <article
                  key={hotel.hotelNo}
                  className="flex flex-col justify-between border border-stone-200 rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition duration-200 group"
                >
                  <div>
                    <div className="aspect-video relative overflow-hidden bg-stone-100 border-b border-stone-100">
                      {hotel.hotelImageUrl ? (
                        <img
                          src={hotel.hotelImageUrl}
                          alt={hotel.hotelName}
                          className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                          loading="lazy"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-stone-400 text-xs font-bold">
                          {hotel.hotelName}
                        </div>
                      )}
                      {hotel.hotelMinCharge && hotel.hotelMinCharge > 0 && (
                        <span className="absolute bottom-2 right-2 text-[10px] font-black bg-stone-950/90 text-amber-300 px-2 py-0.5 rounded shadow">
                          1名 ¥{Number(hotel.hotelMinCharge).toLocaleString()}〜
                        </span>
                      )}
                    </div>

                    <div className="p-4 space-y-2">
                      <div className="flex items-center justify-between gap-1 text-[11px]">
                        {hotel.nearestStation && (
                          <span className="text-amber-800 font-bold bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                            🚉 {hotel.nearestStation}駅
                          </span>
                        )}
                        {hotel.reviewAverage && hotel.reviewAverage > 0 && (
                          <span className="text-amber-600 font-black">
                            ⭐ {hotel.reviewAverage} ({hotel.reviewCount}件)
                          </span>
                        )}
                      </div>

                      <h3 className="text-xs md:text-sm font-black font-journal-serif text-stone-900 line-clamp-2">
                        {hotel.hotelName}
                      </h3>

                      {hotel.hotelSpecial && (
                        <p className="text-[11px] text-stone-600 line-clamp-2 leading-relaxed font-medium">
                          {hotel.hotelSpecial}
                        </p>
                      )}

                      {hotel.access && (
                        <p className="text-[10px] text-stone-500 line-clamp-1">
                          📍 {hotel.access}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="p-4 pt-0">
                    <a
                      href={hotel.affiliateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full text-center py-2.5 text-xs font-black text-white bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 rounded-xl shadow transition"
                    >
                      ♨️ 楽天トラベルでプラン・空室を確認
                    </a>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="p-8 text-center text-stone-500 text-xs">
              現在ホテルデータを更新中です。
            </div>
          )}
        </section>

        {/* 🔗 内部リンク・関連ガイド */}
        <section className="bg-stone-100 border border-stone-200 rounded-3xl p-6 md:p-8 space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-xl">🧭</span>
            <h2 className="text-base md:text-lg font-black font-journal-serif text-stone-900">
              あわせて読みたい九州・熊本の旅行交通ガイド
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
            <Link
              href="/fukuoka-kumamoto-bus-vs-shinkansen-guide"
              className="p-4 bg-white border border-stone-200 rounded-2xl hover:border-amber-400 hover:shadow-sm transition group"
            >
              <div className="text-[11px] text-amber-700 font-bold mb-1">九州新幹線 vs 高速バス</div>
              <h3 className="text-xs md:text-sm font-bold text-stone-900 group-hover:text-amber-700 transition">
                【福岡・博多〜熊本】新幹線 vs 高速バス（ひのくに号）徹底比較！最安往復と所要時間まとめ
              </h3>
              <p className="text-[11px] text-stone-500 mt-1 line-clamp-2">
                博多・天神から熊本への移動コストを半額に抑えるコツと乗り換えテクニック。
              </p>
            </Link>

            <Link
              href="/kyushu-travel-budget-how-many-nights"
              className="p-4 bg-white border border-stone-200 rounded-2xl hover:border-amber-400 hover:shadow-sm transition group"
            >
              <div className="text-[11px] text-amber-700 font-bold mb-1">旅行予算＆宿泊日数目安</div>
              <h3 className="text-xs md:text-sm font-bold text-stone-900 group-hover:text-amber-700 transition">
                【九州旅行 何泊何日？予算ガイド】1泊2日・2泊3日・3泊4日の費用内訳と周遊ルート
              </h3>
              <p className="text-[11px] text-stone-500 mt-1 line-clamp-2">
                電車＆バスで回る九州一周や熊本・阿蘇・湯布院を組み合わせたモデルコースの予算感。
              </p>
            </Link>
          </div>
        </section>

        {/* 47都道府県トップリンク */}
        <div className="text-center pt-2">
          <Link
            href="/prefectures"
            className="inline-flex items-center gap-2 text-xs font-bold text-stone-700 bg-white hover:bg-stone-50 border border-stone-300 px-8 py-3.5 rounded-2xl transition shadow-sm"
          >
            <span>🗾</span>
            <span>全国47都道府県の観光＆宿泊ガイド一覧へ戻る</span>
            <span>→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
