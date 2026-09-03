import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【松本・上高地 車なし旅行完全ガイド】特急あずさ＆上高地線・シャトルバスで行く国宝城下町＆神の降り立つ地 ｜ 日本全国・旅宿クラウド",
  description: "自家用車規制のある上高地こそ公共交通が最強！特急あずさ・松本電鉄上高地線・アルピコシャトルバスを活用し、松本城下町散策と大正池〜河童橋トレッキング、松本駅前大浴場ホテルを満喫する1泊2日。",
  keywords: [
    "上高地 車なし 旅行",
    "松本 上高地 電車 バス",
    "松本電鉄上高地線",
    "アルピコシャトルバス",
    "上高地 1泊2日 モデルコース",
    "大正池 河童橋 ウォーキング",
    "松本駅 ホテル 大浴場",
    "特急あずさ 上高地",
    "楽天トラベル 上高地"
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
      return data["kamikochi-matsumoto-car-free-guide"]?.hotels || [];
    }
  } catch (e) {
    console.error("Failed to load hotels for kamikochi-matsumoto-car-free-guide", e);
  }
  return [];
}

export default function KamikochiMatsumotoCarFreePage() {
  const hotels = loadHotels();

  const publicTransitLegs = [
    {
      stepNum: "STEP 1",
      title: "JR中央線 特急あずさ",
      route: "新宿駅 ⇄ 松本駅",
      duration: "最速約2時間25分",
      cost: "指定席 約6,620円（えきねっとトクだ値ならさらに割引）",
      desc: "全席コンセント完備＆静粛性の高いE353系。週末でも渋滞なしで定刻通りに信州・松本へアプローチできます。"
    },
    {
      stepNum: "STEP 2",
      title: "アルピコ交通 上高地線（電車）",
      route: "松本駅 ⇄ 新島々（しんしましま）駅",
      duration: "約30分（終点）",
      cost: "710円（上高地往復乗車券に含む）",
      desc: "松本駅7番線から発車。のどかな安曇野・松本平の田園風景を抜け、北アルプスの麓である新島々バスターミナルへ。"
    },
    {
      stepNum: "STEP 3",
      title: "アルピコ路線バス（シャトルバス）",
      route: "新島々駅 ⇄ 大正池 ⇄ 帝国ホテル前 ⇄ 上高地バスターミナル",
      duration: "約1時間5分",
      cost: "電車＋バス往復割引切符 5,400円（新島々〜上高地片道2,450円）",
      desc: "梓川の深い渓谷を縫うように登る山岳バス。大正池で途中下車して河童橋までウォーキングするのが黄金ルート！"
    },
    {
      stepNum: "DIRECT",
      title: "直行高速バス「さわやか信州号」",
      route: "バスタ新宿・東京駅・大阪・京都 ⇄ 上高地バスターミナル直行",
      duration: "昼行約5時間 / 夜行約7時間",
      cost: "片道約 7,000円〜12,000円",
      desc: "乗り換え一切なしで河童橋直下へ。夜行便を利用すれば、朝靄が立ち込める早朝5時台の大正池に降り立てます。"
    }
  ];

  const walkingCourse = [
    {
      spot: "大正池（バス停下車）",
      timeSpent: "写真撮影 15分",
      highlight: "焼岳の噴火で梓川がせき止められてできた神秘の池。立ち枯れの木々と穂高連峰の水鏡は息を呑む美しさ。"
    },
    {
      spot: "田代池・田代湿原",
      timeSpent: "徒歩約20分",
      highlight: "原生林の木道を進むと開ける湿原。浅い澄んだ水面に原生林と空が映り、季節の高山植物や野鳥が出迎えます。"
    },
    {
      spot: "田代橋・穂高橋",
      timeSpent: "徒歩約20分",
      highlight: "梓川にかかる美しい木橋。川岸のベンチで北アルプスの清涼な風を感じながらひと息つける絶好の休憩ポイント。"
    },
    {
      spot: "上高地帝国ホテル周辺",
      timeSpent: "徒歩約10分（寄り道カフェ30分）",
      highlight: "赤い三角屋根が印象的な日本屈指のクラシック山岳ホテル。カフェで味わう伝統のアップルパイは必食。"
    },
    {
      spot: "ウェストン碑",
      timeSpent: "徒歩約10分",
      highlight: "日本アルプスを世界に広めた英国人宣教師ウォルター・ウェストンを顕彰するレリーフ。"
    },
    {
      spot: "河童橋（かっぱばし）＆上高地BT",
      timeSpent: "徒歩約15分（ランチ・買い物1時間）",
      highlight: "上高地のシンボル吊り橋。背後にそびえる標高3,190mの奥穂高岳の雄姿を眺めながら信州そばや山賊焼きを堪能。"
    }
  ];

  const itinerary = [
    {
      day: "DAY 1：国宝松本城下町巡りと信州そば＆駅前大浴場ホテル",
      events: [
        {
          time: "10:00",
          title: "特急あずさでJR松本駅に到着",
          desc: "松本駅前のホテルへ荷物を預け、身軽になって城下町へ。松本周遊タウンスニーカーバス（1日券500円）も便利。"
        },
        {
          time: "10:45",
          title: "現存十二天守「国宝 松本城」登閣",
          desc: "黒漆と白漆喰の美しいコントラストを誇る五重六階の天守。急な木製階段を登り、最上階から北アルプスの稜線と城下町を一望。"
        },
        {
          time: "12:30",
          title: "縄手通り・中町通りの蔵造りカフェで信州そばランチ",
          desc: "カエルの街として親しまれる縄手通りと、白壁土蔵が美しい中町通りを散策。名店の手打ち十割そばと山菜天ぷらを舌鼓。"
        },
        {
          time: "14:30",
          title: "松本市美術館（草間彌生アート）見学",
          desc: "松本出身の前衛芸術家・草間彌生の巨大な野外彫刻「幻の華」や水玉アートコレクションを鑑賞。"
        },
        {
          time: "16:30",
          title: "松本駅前ホテルにチェックイン＆天然温泉大浴場",
          desc: "翌朝の早起きに備え、駅前すぐの大浴場付きホテルへ。旅の疲れを湯船でじんわり解きほぐし、信州サーモンや郷土料理で夕食。"
        }
      ]
    },
    {
      day: "DAY 2：早朝出発！上高地大正池〜河童橋絶景ウォーキング",
      events: [
        {
          time: "06:30",
          title: "松本駅7番線から松本電鉄上高地線に乗車",
          desc: "朝の澄んだ空気の中、ローカル電車で新島々駅へ。連絡シャトルバスへ乗り継ぎ、マイカー規制の山岳ゲートを抜けて上高地へ。"
        },
        {
          time: "08:15",
          title: "「大正池」バス停で途中下車！ハイキング開始",
          desc: "河童橋まで行かずに大正池で降りるのが最大のポイント！朝靄煙る池に映る焼岳と穂高連峰の絶景に息を呑みます。"
        },
        {
          time: "08:30〜11:00",
          title: "大正池 ➔ 田代湿原 ➔ 帝国ホテル ➔ 河童橋トレッキング",
          desc: "平坦で整備された木道をのんびり約1時間半〜2時間のウォーキング。梓川のエメラルドグリーンの清流と原生林のバードサンクチュアリを満喫。"
        },
        {
          time: "11:30",
          title: "河童橋の絶景テラスでランチ＆ご当地アップルパイ",
          desc: "五千尺ホテルや河童食堂で、穂高の山並みを目の前に望みながら信州豚カツカレーやクラシックアップルパイを堪能。"
        },
        {
          time: "13:30",
          title: "上高地バスターミナルからシャトルバスで新島々・松本へ",
          desc: "（※帰りのバス乗車整理券は到着時に確保しておくのが鉄則）。新島々で電車に乗り継ぎ松本駅へ戻り、特急あずさで帰路へ。"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-rose-50/30 text-stone-900 font-sans pb-16">
      {/* ヒーローセクション：Rose＆Wineの洗練アルパインラグジュアリートーン */}
      <div className="relative bg-gradient-to-br from-rose-950 via-stone-900 to-rose-900 text-white overflow-hidden py-14 md:py-20 px-4">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#f43f5e_1px,transparent_1px)] [background-size:20px_20px]" />
        
        <div className="relative max-w-5xl mx-auto space-y-6">
          <div className="flex flex-wrap items-center gap-2 text-xs md:text-sm font-black">
            <span className="bg-rose-500 text-white px-3 py-1 rounded-full uppercase tracking-wider">
              マイカー規制エリア完全対応
            </span>
            <span className="bg-white/10 text-rose-200 border border-rose-400/30 px-3 py-1 rounded-full backdrop-blur-sm">
              特急あずさ ＋ 上高地線 ＋ アルピコシャトル
            </span>
            <span className="text-stone-300 ml-auto hidden sm:inline">
              おすすめ期間：春（4月開山）〜秋（11月閉山）
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-tight tracking-tight font-journal-serif text-white">
            【松本・上高地 車なし旅行完全ガイド】<br className="hidden sm:inline" />
            特急あずさ＆上高地線・バスで行く国宝城下町＆神の降り立つ地
          </h1>

          <p className="text-sm md:text-base text-rose-100/90 max-w-3xl leading-relaxed">
            通年マイカー規制が敷かれ、自家用車では立ち入れない上高地。だからこそ「公共交通＋徒歩」が最もスマートで快適な正攻法です！新宿から特急あずさで松本に入り、レトロな上高地線とシャトルバスを乗り継ぐ、感動の1泊2日モデルコースを余すところなく解説します。
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="#transit"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-400 hover:to-rose-500 text-white font-black px-6 py-3 rounded-xl shadow-lg transition duration-200 text-xs sm:text-sm"
            >
              <span>🚆</span>
              <span>乗り継ぎルート＆運賃を見る</span>
            </a>
            <a
              href="#walking"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold border border-white/20 px-6 py-3 rounded-xl backdrop-blur-sm transition duration-200 text-xs sm:text-sm"
            >
              <span>🥾</span>
              <span>大正池〜河童橋ハイキングコース</span>
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 mt-8 space-y-12">
        {/* 🎟️ 楽天トラベル クーポン＆バス予約バナー */}
        <div className="bg-gradient-to-r from-rose-800 via-rose-900 to-stone-900 rounded-2xl p-5 md:p-6 text-white shadow-md flex flex-col md:flex-row items-center justify-between gap-4 border border-rose-700/50">
          <div className="space-y-1 text-center md:text-left">
            <span className="inline-block bg-rose-500 text-white text-[11px] font-black px-2.5 py-0.5 rounded">
              楽天トラベル 信州・上高地特集
            </span>
            <h3 className="text-base sm:text-lg font-black font-journal-serif">
              松本駅前ホテル＆上高地・美ヶ原温泉が最大割引クーポン対象！
            </h3>
            <p className="text-xs text-rose-200">
              直行高速バス「さわやか信州号」予約や、駅前大浴場ホテルのタイムセールをチェック。
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fcoupon%2F"
              target="_blank"
              rel="noopener noreferrer"
              className="whitespace-nowrap px-5 py-2.5 bg-rose-500 hover:bg-rose-400 text-white text-xs font-black rounded-xl shadow transition"
            >
              🏷️ 宿泊割引クーポン
            </a>
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fbus%2F"
              target="_blank"
              rel="noopener noreferrer"
              className="whitespace-nowrap px-5 py-2.5 bg-white/15 hover:bg-white/25 text-white border border-white/30 text-xs font-black rounded-xl shadow transition"
            >
              🚌 高速バス・直行便
            </a>
          </div>
        </div>

        {/* 🚆 公共交通ステップ・乗り継ぎ完全解剖 */}
        <section id="transit" className="bg-white border border-rose-100 rounded-3xl p-6 md:p-8 shadow-sm space-y-6">
          <div className="border-b border-rose-100 pb-3">
            <div className="text-xs font-black text-rose-700 tracking-wider uppercase flex items-center gap-1">
              <span>🚊 PUBLIC TRANSIT STEP-BY-STEP</span>
            </div>
            <h2 className="text-xl md:text-2xl font-black font-journal-serif text-stone-900 mt-1">
              東京・新宿から上高地へ！公共交通の乗り継ぎステップ
            </h2>
            <p className="text-xs md:text-sm text-stone-600 mt-1">
              電車とバスの連絡が完璧にダイヤ設計されており、初めてでも一切迷わず移動できます。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {publicTransitLegs.map((leg, idx) => (
              <div
                key={idx}
                className="border border-rose-100 bg-rose-50/20 rounded-2xl p-5 space-y-3 flex flex-col justify-between hover:bg-rose-50/50 transition"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] font-black bg-rose-600 text-white px-2 py-0.5 rounded">
                      {leg.stepNum}
                    </span>
                    <span className="text-xs text-rose-800 font-bold">⏱ {leg.duration}</span>
                  </div>
                  <h3 className="font-black text-stone-900 text-base font-journal-serif">
                    {leg.title}
                  </h3>
                  <div className="text-xs font-bold text-stone-700 bg-rose-100/70 inline-block px-2.5 py-1 rounded">
                    区間：{leg.route}
                  </div>
                  <div className="text-xs text-rose-900 font-bold">
                    💴 {leg.cost}
                  </div>
                  <p className="text-xs text-stone-600 leading-relaxed pt-1">
                    {leg.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs md:text-sm text-amber-950 space-y-1">
            <div className="font-bold flex items-center gap-1.5 text-amber-900">
              <span>⚠️ 上高地旅行の最重要注意点：帰りのバス整理券</span>
            </div>
            <p className="text-stone-700 text-xs leading-relaxed">
              繁忙期（週末・紅葉シーズン）の上高地バスターミナル発・新島々行き路線バスは大変混雑します。上高地に到着したら、まずバスターミナルの窓口で「帰りの乗車便の整理券」を事前に確保しておくことがスムーズな下山の絶対条件です！
            </p>
          </div>
        </section>

        {/* 🥾 大正池〜河童橋ウォーキングコースMAP */}
        <section id="walking" className="bg-white border border-rose-100 rounded-3xl p-6 md:p-8 shadow-sm space-y-6">
          <div className="border-b border-rose-100 pb-3">
            <div className="text-xs font-black text-rose-700 tracking-wider uppercase">
              🚶‍♂️ HIKING HIGHLIGHTS
            </div>
            <h2 className="text-xl md:text-2xl font-black font-journal-serif text-stone-900 mt-1">
              初心者でも安心！大正池〜河童橋 黄金ハイキングルート（約3.5km）
            </h2>
            <p className="text-xs md:text-sm text-stone-600 mt-1">
              高低差がほぼなく平坦な木道が整備されているため、スニーカーと歩きやすい服装で手軽に大自然を満喫できます。
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {walkingCourse.map((item, idx) => (
              <div
                key={idx}
                className="border border-stone-200 bg-white rounded-2xl p-4 space-y-2 hover:border-rose-300 hover:shadow-sm transition flex flex-col justify-between"
              >
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black text-rose-700">POINT {idx + 1}</span>
                    <span className="text-[10px] font-bold text-stone-500 bg-stone-100 px-2 py-0.5 rounded">
                      {item.timeSpent}
                    </span>
                  </div>
                  <h3 className="text-sm font-bold text-stone-900 font-journal-serif">
                    {item.spot}
                  </h3>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    {item.highlight}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 🗓️ 1泊2日タイムスケジュール */}
        <section className="bg-white border border-stone-200 rounded-3xl p-6 md:p-8 shadow-sm space-y-8">
          <div className="border-b border-stone-100 pb-3">
            <div className="text-xs font-black text-rose-700 tracking-wider uppercase">
              🗓️ 1 NIGHT 2 DAYS ITINERARY
            </div>
            <h2 className="text-xl md:text-2xl font-black font-journal-serif text-stone-900 mt-1">
              松本城下町と上高地を両方味わう！理想の1泊2日プラン
            </h2>
            <p className="text-xs md:text-sm text-stone-600 mt-1">
              1日目は松本市内で国宝とアート、夜は駅前大浴場で寛ぎ、2日目の朝一番に上高地へ突入する究極の時間配分。
            </p>
          </div>

          <div className="space-y-8">
            {itinerary.map((dayPlan, dIdx) => (
              <div key={dIdx} className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="bg-rose-700 text-white font-black text-xs px-3 py-1 rounded-full">
                    DAY {dIdx + 1}
                  </span>
                  <h3 className="font-black text-base md:text-lg text-stone-900 font-journal-serif">
                    {dayPlan.day}
                  </h3>
                </div>

                <div className="relative pl-6 space-y-6 before:absolute before:left-2.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-rose-200">
                  {dayPlan.events.map((event, eIdx) => (
                    <div key={eIdx} className="relative space-y-1">
                      <div className="absolute -left-[27px] top-1.5 w-3.5 h-3.5 rounded-full bg-rose-600 border-2 border-white shadow-sm" />
                      <div className="flex flex-wrap items-baseline gap-2">
                        <span className="text-xs font-black text-rose-900 bg-rose-100 px-2 py-0.5 rounded border border-rose-200">
                          {event.time}
                        </span>
                        <h4 className="text-sm md:text-base font-bold text-stone-900">
                          {event.title}
                        </h4>
                      </div>
                      <p className="text-xs md:text-sm text-stone-600 leading-relaxed pl-0.5">
                        {event.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 🏨 ホテルカードセクション */}
        <section id="hotels" className="bg-white border border-stone-200 rounded-3xl p-6 md:p-8 shadow-sm space-y-6">
          <div className="border-b border-stone-100 pb-3">
            <div className="text-xs font-black text-rose-700 tracking-wider uppercase">
              🏨 SELECTED MATSUMOTO & KAMIKOCHI HOTELS
            </div>
            <h2 className="text-xl md:text-2xl font-black font-journal-serif text-stone-900 mt-1">
              松本駅前大浴場ホテル ＆ 上高地リゾートの厳選宿
            </h2>
            <p className="text-xs md:text-sm text-stone-600 mt-1">
              朝一番の上高地線に乗車しやすい松本駅前ホテルから、憧れの上高地大自然ステイまで。
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
                        <span className="absolute bottom-2 right-2 text-[10px] font-black bg-stone-950/90 text-rose-300 px-2 py-0.5 rounded shadow">
                          1名 ¥{Number(hotel.hotelMinCharge).toLocaleString()}〜
                        </span>
                      )}
                    </div>

                    <div className="p-4 space-y-2">
                      <div className="flex items-center justify-between gap-1 text-[11px]">
                        {hotel.nearestStation && (
                          <span className="text-rose-800 font-bold bg-rose-50 px-2 py-0.5 rounded border border-rose-200">
                            🚉 {hotel.nearestStation}駅アクセス
                          </span>
                        )}
                        {hotel.reviewAverage && hotel.reviewAverage > 0 && (
                          <span className="text-rose-700 font-black">
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
                      className="block w-full text-center py-2.5 text-xs font-black text-white bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-500 hover:to-rose-600 rounded-xl shadow transition"
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
              あわせて読みたい東京・信州の交通比較ガイド
            </h2>
          </div>
          <div className="pt-1">
            <Link
              href="/tokyo-matsumoto-kamikochi-bus-vs-train-guide"
              className="block p-5 bg-white border border-stone-200 rounded-2xl hover:border-rose-400 hover:shadow-sm transition group"
            >
              <div className="text-[11px] text-rose-700 font-bold mb-1">特急あずさ vs 高速バス徹底比較</div>
              <h3 className="text-sm md:text-base font-bold text-stone-900 group-hover:text-rose-700 transition">
                【東京・新宿〜松本・上高地】特急あずさ vs 直行高速バス徹底比較！片道2,500円〜行く国宝松本城＆上高地1泊2日モデルコース
              </h3>
              <p className="text-xs text-stone-500 mt-1 leading-relaxed">
                新宿から松本バスターミナルへの中央高速バスと、上高地直行「さわやか信州号」、JR特急あずさの料金差・メリット・注意点を徹底解説した大人気ガイド。
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
