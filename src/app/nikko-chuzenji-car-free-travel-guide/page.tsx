import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【日光・中禅寺湖 車なし観光 1泊2日モデルコース】東武特急スペーシアX＆東武バスで行く世界遺産＆奥日光湯宿 ｜ 日本全国・旅宿クラウド",
  description: "電車とバスだけで巡る日光完全ガイド！新型特急スペーシアX、日光WEBフリーパス、東武バスを活用して東照宮・いろは坂・華厳の滝・中禅寺湖遊覧船・奥日光硫黄泉旅館をスムーズに回る乗り継ぎタイムテーブル。",
  keywords: ["nikko-chuzenji-car-free-travel-guide", "日光 車なし", "スペーシアX 車なし", "日光東照宮 電車 バス", "中禅寺湖 バス", "いろは坂 東武バス", "奥日光 温泉 楽天トラベル"],
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
      return data["nikko-chuzenji-car-free-travel-guide"]?.hotels || [];
    }
  } catch (e) {
    console.error("Failed to load hotels for nikko-chuzenji-car-free-travel-guide", e);
  }
  return [];
}

export default function NikkoChuzenjiCarFreeTravelGuidePage() {
  const hotels = loadHotels();

  const transitHighlights = [
    {
      title: "新型フラッグシップ特急「スペーシア X」",
      route: "浅草・北千住・春日部 ⇄ 東武日光（最速約1時間50分）",
      desc: "浅草から日光までを結ぶ次世代特急。コックピットラウンジやカフェカウンター（GOEN CAFÉ）を備え、移動時間そのものが極上のエンターテインメントに。",
      point: "全席指定・事前予約必須"
    },
    {
      title: "NIKKO PASS all area（日光WEBフリーパス）",
      route: "浅草〜下今市往復鉄道 ＋ 東武日光駅発着の東武バス（奥日光エリア全線）乗り放題",
      desc: "世界遺産エリアからいろは坂、中禅寺湖、戦場ヶ原、湯元温泉まで東武バスが4日間乗り放題！中禅寺湖遊覧船や明智平ロープウェイの割引も付帯する決定版パス。",
      point: "4日間有効で圧倒的コスパ"
    },
    {
      title: "東武バス日光「奥日光・中禅寺温泉行き」",
      route: "JR・東武日光駅 ⇄ 神橋 ⇄ 西参道（東照宮） ⇄ 中禅寺温泉 ⇄ 湯元温泉",
      frequency: "日中約15〜30分間隔で頻発運行",
      desc: "急カーブが続く名所『いろは坂』もプロドライバーの大型路線バスなら安心。車窓から男体山や滝の雄姿を眺めながら快適に奥日光へ到達できます。",
      point: "冬期もチェーン装着で安心運行"
    }
  ];

  const itinerary = [
    {
      day: "1日目：スペーシアXで日光へ！世界遺産「日光東照宮」と中禅寺湖の夕景",
      steps: [
        {
          time: "07:50",
          title: "東武浅草駅より新型特急「スペーシア X」に乗車",
          desc: "浅草駅からモダンな白い車体のスペーシアXで出発。車内カフェで日光クラフトビールやクラフトコーヒーを味わいながら車窓の田園風景を堪能。"
        },
        {
          time: "09:45",
          title: "東武日光駅 到着 ＆ 駅前手荷物預かり・フリーパス提示でバスへ",
          desc: "駅前バスターミナル（2Bのりば）から『世界遺産めぐりバス』または中禅寺温泉行き路線バスに乗車。わずか7分で神橋・西参道エリアへ。"
        },
        {
          time: "10:15",
          title: "世界遺産「日光東照宮・日光山輪王寺・二荒山神社」参拝",
          desc: "国宝『陽明門』の精緻な彫刻や『三猿』『眠り猫』をじっくり鑑賞。樹齢数百年を超える杉木立の参道を歩き、静謐な神気に包まれます。"
        },
        {
          time: "12:45",
          title: "西参道茶屋で日光名物「湯波（ゆば）そば＆湯波むすび」ランチ",
          desc: "日光名産の引き上げ湯波をふんだんに使った贅沢なお蕎麦。だし巻き湯波や揚げ湯波など、上品な大豆の旨味を味わいます。"
        },
        {
          time: "14:00",
          title: "東武バスで「いろは坂」を登り、中禅寺湖畔へ（乗車約35分）",
          desc: "第二いろは坂のヘアピンカーブを巧みに登るバス旅。途中、明智平で途中下車してロープウェイに乗れば、華厳の滝と中禅寺湖を同時に望む大パノラマ（※上りのみ停車）。"
        },
        {
          time: "15:30",
          title: "日本三大名瀑「華厳の滝」エレベーターで観瀑台へ",
          desc: "中禅寺温泉バスターミナルから徒歩5分。専用エレベーターで岩盤を一気に100m下り、大迫力の瀑布を間近から見上げる轟音の絶景体験。"
        },
        {
          time: "17:00",
          title: "中禅寺湖畔または奥日光の温泉旅館にチェックイン",
          desc: "湖畔を望むリゾートホテル、またはさらにバスで進んだ奥日光湯元温泉の宿へ。白濁したエメラルド色の濃厚な天然硫黄泉に浸かり、旅の疲れを芯から癒やします。"
        }
      ]
    },
    {
      day: "2日目：中禅寺湖遊覧船・英国大使館別荘記念公園＆戦場ヶ原ウォーキング",
      steps: [
        {
          time: "09:00",
          title: "中禅寺湖「機船遊覧船」で湖上クルーズ（船の駅中禅寺より）",
          desc: "波穏やかな中禅寺湖を進む遊覧船。湖上から仰ぎ見る男体山は格別の迫力。菖蒲ヶ浜や立木観音へ船で渡ることができます。"
        },
        {
          time: "10:30",
          title: "「英国大使館別荘記念公園・イタリア大使館別荘」のレトロ洋館散策",
          desc: "かつて国際的避暑地として賑わった中禅寺湖畔。杉皮張りの美しい洋館の広縁から湖を眺めながら、スコーンと紅茶を味わう優雅なティータイム。"
        },
        {
          time: "12:30",
          title: "湖畔レストランで「中禅寺産ヒメマス・虹鱒のムニエル」ランチ",
          desc: "中禅寺湖の清流で育った名物・ヒメマスの塩焼きやバタームニエル。奥日光ならではの極上川魚料理を堪能。"
        },
        {
          time: "14:15",
          title: "中禅寺温泉バスターミナルより第一いろは坂を下り日光駅へ",
          desc: "下り専用の第一いろは坂を経由して日光市街地へ。車なしなら下りの急カーブ運転の気苦労もなく、のんびり車窓を楽しめます。"
        },
        {
          time: "15:30",
          title: "東武日光駅前通りで「さかえやの揚げ湯波まんじゅう」を食べ歩き＆帰路",
          desc: "駅前でお塩が効いたアツアツの揚げ湯波まんじゅうや日光カステラをお土産に。夕方の特急スペーシアまたはリバティで東京へ快適帰路。"
        }
      ]
    }
  ];

  const busRules = [
    {
      title: "いろは坂は上りと下りでルートが完全に異なる",
      desc: "上りは『第二いろは坂（明智平経由）』、下りは『第一いろは坂』の一方通行。明智平ロープウェイへ立ち寄れるのは『日光駅→中禅寺湖の上りバス』だけなので、初日の午前〜午後に組み込むのが鉄則です。"
    },
    {
      title: "紅葉シーズン（10月中旬〜11月上旬）のバス渋滞対策",
      desc: "大人気の紅葉ピーク期はいろは坂で渋滞が発生することがあります。この時期は早朝7時台のバスに乗車するか、中禅寺湖畔での宿泊を組み合わせて混雑を賢く回避しましょう。"
    },
    {
      title: "バス乗車はICカード対応＆デジタルパスが超スムーズ",
      desc: "東武バスはSuica・PASMOなど交通系ICに対応。スマートフォン画面を見せるだけの『NIKKO PASS デジタル版』ならチケット購入の列に並ばず乗降できます。"
    },
    {
      title: "標高差による気温低下に注意（上着を持参）",
      desc: "日光駅周辺（標高約530m）と中禅寺湖（標高約1,269m）、奥日光湯元（標高約1,480m）では気温が5〜8度以上下がります。夏でも羽織りもの、春秋は防寒具が必須です。"
    }
  ];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16 font-sans text-slate-800">
      {/* ヒーローセクション（Emerald & Forest Green Palette） */}
      <section className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-emerald-800 via-teal-800 to-slate-900 text-white p-8 md:p-14 shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-400/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 text-[180px] text-white/5 font-black select-none pointer-events-none tracking-wider">
          NIKKO
        </div>

        <div className="relative z-10 max-w-3xl space-y-5">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[11px] md:text-xs font-black tracking-widest bg-white text-emerald-800 px-3.5 py-1 rounded-full uppercase shadow-md">
              WORLD HERITAGE & MOUNTAIN BUS TRIP
            </span>
            <span className="text-xs font-bold bg-emerald-950/40 text-emerald-100 px-3.5 py-1 rounded-full border border-emerald-300/30">
              スペーシアX ＆ 東武フリーパス
            </span>
          </div>

          <h1 className="text-2xl md:text-4xl lg:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white drop-shadow-sm">
            【日光・中禅寺湖 車なし観光 1泊2日モデルコース】<br />
            <span className="text-emerald-300">東武特急スペーシアX＆東武バスで行く世界遺産＆奥日光湯宿</span>
          </h1>

          <p className="text-sm md:text-base text-emerald-50 leading-relaxed font-medium pt-2">
            急カーブのいろは坂や山道運転に自信がなくても大丈夫！浅草から最新特急「スペーシアX」で東武日光駅へダイレクト。そこから頻発する東武バスに乗り換えれば、日光東照宮、華厳の滝、中禅寺湖のレトロ洋館、そして奥日光の名湯まで、公共交通機関だけで快適かつ優雅に巡ることができます。
          </p>

          <div className="pt-3 flex flex-wrap gap-3 text-xs font-bold text-emerald-100">
            <div className="flex items-center gap-1.5 bg-emerald-900/60 px-3 py-1.5 rounded-lg border border-emerald-400/20">
              <span className="text-emerald-300">🚆</span> 浅草からスペーシアXで最速1時間50分
            </div>
            <div className="flex items-center gap-1.5 bg-emerald-900/60 px-3 py-1.5 rounded-lg border border-emerald-400/20">
              <span className="text-emerald-300">🚌</span> 東武バス日光フリーパスで奥日光まで網羅
            </div>
            <div className="flex items-center gap-1.5 bg-emerald-900/60 px-3 py-1.5 rounded-lg border border-emerald-400/20">
              <span className="text-emerald-300">♨️</span> 乳白色の硫黄泉＆日光湯波グルメ
            </div>
          </div>
        </div>
      </section>

      {/* 公共交通の乗り継ぎガイド */}
      <section className="bg-white border-2 border-emerald-100 rounded-3xl p-6 md:p-10 shadow-sm space-y-6">
        <div className="border-b border-emerald-100 pb-4">
          <div className="inline-flex items-center gap-2 text-emerald-700 font-black text-xs tracking-wider uppercase mb-1">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            TRANSIT PASS & TRAIN
          </div>
          <h2 className="text-2xl md:text-3xl font-black text-slate-800 tracking-tight">
            車なし日光観光を劇的に快適にする「電車＆バス」3大ポイント
          </h2>
          <p className="text-slate-600 text-sm mt-2">
            広大な日光・奥日光エリアを車なしで楽しむための必須交通ネットワークを解説。
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {transitHighlights.map((item, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-b from-emerald-50/60 to-slate-50 border border-emerald-200/80 rounded-2xl p-5 flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div className="space-y-3">
                <span className="inline-block bg-emerald-700 text-white text-[10px] font-black tracking-wider px-2.5 py-0.5 rounded-full">
                  {item.point}
                </span>
                <h3 className="font-black text-slate-900 text-lg leading-snug">{item.title}</h3>
                <div className="text-emerald-700 font-extrabold text-xs bg-emerald-100/50 p-2 rounded-lg border border-emerald-200">
                  {item.route}
                </div>
                {item.frequency && (
                  <div className="text-[11px] font-bold text-slate-500">⏱ {item.frequency}</div>
                )}
                <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-emerald-950 text-emerald-100 rounded-2xl p-5 text-xs md:text-sm flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="font-bold text-white flex items-center gap-2">
              <span>💡</span> 東京からの新幹線・高速バス長距離移動ガイドもチェック
            </div>
            <p className="text-emerald-200">
              東北・北関東方面の公共交通ネットワークや新幹線と高速バスの費用比較も掲載中。
            </p>
          </div>
          <Link
            href="/tokyo-sendai-bus-vs-shinkansen-guide"
            className="shrink-0 bg-white text-emerald-950 hover:bg-emerald-100 font-black px-4 py-2.5 rounded-xl transition shadow text-xs"
          >
            東京〜東北・仙台 交通費比較を見る →
          </Link>
        </div>
      </section>

      {/* 1泊2日モデルコース */}
      <section className="space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-black tracking-widest text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            TIME TABLE & ROUTE
          </span>
          <h2 className="text-2xl md:text-3xl font-black text-slate-800">
            【完全タイムテーブル】日光・中禅寺湖 1泊2日 車なしモデルコース
          </h2>
          <p className="text-slate-600 text-xs md:text-sm">
            バスの乗り継ぎ・拝観時間・ランチ休憩を計算し尽くした、無理なく回れるタイムスケジュール。
          </p>
        </div>

        <div className="space-y-8">
          {itinerary.map((dayPlan, dayIdx) => (
            <div
              key={dayIdx}
              className="bg-white border-2 border-emerald-100 rounded-3xl p-6 md:p-8 shadow-sm space-y-6"
            >
              <div className="flex items-center gap-3 border-b border-emerald-100 pb-4">
                <span className="w-9 h-9 bg-emerald-700 text-white rounded-xl flex items-center justify-center font-black text-sm shadow-sm">
                  D{dayIdx + 1}
                </span>
                <h3 className="text-lg md:text-xl font-black text-slate-900">{dayPlan.day}</h3>
              </div>

              <div className="relative pl-6 md:pl-8 border-l-2 border-emerald-300 space-y-8 ml-3">
                {dayPlan.steps.map((step, sIdx) => (
                  <div key={sIdx} className="relative group">
                    <div className="absolute -left-[31px] md:-left-[39px] top-1 w-4 h-4 rounded-full bg-white border-4 border-emerald-600 group-hover:scale-125 transition-transform" />
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-black text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200 font-mono">
                          {step.time}
                        </span>
                        <h4 className="font-bold text-slate-900 text-sm md:text-base">
                          {step.title}
                        </h4>
                      </div>
                      <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* いろは坂＆路線バス実践ルール */}
      <section className="bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900 text-white rounded-3xl p-8 md:p-10 shadow-xl space-y-6">
        <div>
          <span className="text-emerald-400 text-xs font-black tracking-widest uppercase">
            LOCAL EXPERT RULES
          </span>
          <h2 className="text-2xl md:text-3xl font-black text-white mt-1">
            日光・奥日光の「車なしバス移動」で知っておくべき4つの鉄則
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {busRules.map((rule, idx) => (
            <div
              key={idx}
              className="bg-white/5 border border-emerald-500/20 rounded-2xl p-5 space-y-2 backdrop-blur-sm"
            >
              <div className="flex items-center gap-2 font-bold text-emerald-300 text-sm">
                <span className="text-base">📌</span>
                {rule.title}
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">{rule.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ホテル＆旅館紹介（Rakuten Travel） */}
      <section className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 border-b border-emerald-200 pb-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-black text-emerald-700 tracking-wider uppercase mb-1">
              <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
              HOTEL & ONSEN SELECTION
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
              車なし旅に嬉しい！日光・中禅寺湖・鬼怒川の駅近＆バス直通温泉宿
            </h2>
            <p className="text-xs md:text-sm text-slate-600 mt-1">
              東武日光駅前・バス停徒歩すぐ、または無料送迎付きの温泉旅館を厳選。
            </p>
          </div>
          <a
            href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Fcoupon%2F"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-black text-xs px-4 py-2.5 rounded-xl shadow-md transition shrink-0"
          >
            <span>🎟️</span> 楽天トラベル日光宿クーポンを獲得する
          </a>
        </div>

        {hotels.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-6">
            {hotels.map((hotel) => {
              const specialText = hotel.hotelSpecial || "";
              const minCharge = hotel.hotelMinCharge
                ? `${hotel.hotelMinCharge.toLocaleString()}円〜`
                : "プラン参照";
              return (
                <div
                  key={hotel.hotelNo}
                  className="bg-white border-2 border-emerald-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="relative h-52 bg-slate-100 overflow-hidden">
                      {hotel.hotelImageUrl ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={hotel.hotelImageUrl}
                          alt={hotel.hotelName}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-slate-400 text-sm font-bold">
                          NO IMAGE
                        </div>
                      )}
                      {hotel.nearestStation && (
                        <span className="absolute top-3 left-3 bg-emerald-800/90 backdrop-blur-sm text-white text-[11px] font-bold px-3 py-1 rounded-full shadow">
                          🚉 {hotel.nearestStation}駅アクセス
                        </span>
                      )}
                      {hotel.reviewAverage && (
                        <span className="absolute top-3 right-3 bg-amber-500 text-white text-[11px] font-black px-2.5 py-1 rounded-full shadow flex items-center gap-1">
                          ★ {hotel.reviewAverage.toFixed(1)}
                          {hotel.reviewCount && (
                            <span className="text-[9px] opacity-80">({hotel.reviewCount})</span>
                          )}
                        </span>
                      )}
                    </div>

                    <div className="p-5 space-y-3">
                      <h3 className="font-black text-slate-900 text-lg leading-snug group-hover:text-emerald-700 transition-colors">
                        {hotel.hotelName}
                      </h3>

                      {specialText && (
                        <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed bg-emerald-50/50 p-2.5 rounded-xl border border-emerald-100">
                          {specialText}
                        </p>
                      )}

                      <div className="text-xs text-slate-500 space-y-1">
                        {hotel.access && (
                          <div className="flex items-start gap-1.5">
                            <span className="text-emerald-700 font-bold shrink-0">交通:</span>
                            <span className="line-clamp-2">{hotel.access}</span>
                          </div>
                        )}
                        {hotel.address1 && hotel.address2 && (
                          <div className="flex items-center gap-1.5 text-[11px] text-slate-400">
                            <span className="shrink-0">📍</span>
                            <span>{hotel.address1}{hotel.address2}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="p-5 pt-0 border-t border-slate-100 mt-2">
                    <div className="flex items-baseline justify-between mb-3 pt-3">
                      <span className="text-xs font-bold text-slate-500">最安料金目安 (1名)</span>
                      <span className="text-xl font-black text-emerald-700">{minCharge}</span>
                    </div>

                    <a
                      href={hotel.affiliateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full block text-center bg-gradient-to-r from-emerald-700 to-teal-700 hover:from-emerald-600 hover:to-teal-600 text-white font-black text-sm py-3 px-4 rounded-xl shadow-md transition-all group-hover:shadow-emerald-200"
                    >
                      楽天トラベルでプラン空室を見る ➜
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="bg-emerald-50 border border-emerald-200 p-8 rounded-3xl text-center text-slate-600">
            宿泊施設情報を取得中、または該当施設を更新中です。
          </div>
        )}
      </section>

      {/* 内部リンク＆関連記事 */}
      <section className="bg-slate-50 border border-slate-200 rounded-3xl p-6 md:p-8 space-y-4">
        <h3 className="font-black text-slate-800 text-base md:text-lg flex items-center gap-2">
          <span>🔗</span> あわせて読みたい公共交通・長距離移動ガイド
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          <Link
            href="/tokyo-sendai-bus-vs-shinkansen-guide"
            className="p-4 bg-white rounded-2xl border border-slate-200 hover:border-emerald-400 hover:shadow-sm transition group"
          >
            <div className="text-[11px] font-bold text-emerald-700 mb-1">新幹線 vs 高速バス</div>
            <div className="font-black text-slate-800 group-hover:text-emerald-700 text-sm">
              【東京から仙台 安く行く方法】新幹線 vs 高速バス徹底比較！松島・温泉モデルコース →
            </div>
          </Link>
          <Link
            href="/tokyo-izu-atami-bus-vs-train-guide"
            className="p-4 bg-white rounded-2xl border border-slate-200 hover:border-emerald-400 hover:shadow-sm transition group"
          >
            <div className="text-[11px] font-bold text-emerald-700 mb-1">特急＆普通列車お得旅</div>
            <div className="font-black text-slate-800 group-hover:text-emerald-700 text-sm">
              【東京から熱海・伊豆 安く行く方法】新幹線・特急踊り子・普通列車を徹底比較！ →
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}
