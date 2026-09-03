import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";
import SpecialCouponBanner from "@/app/components/SpecialCouponBanner";

export const metadata: Metadata = {
  title: "【箱根 雨の日の観光モデルコース】ポーラ美術館・ガラスの森・彫刻の森室内＆早めチェックイン温泉おこもり旅",
  description:
    "雨でも大満足の箱根1泊2日！森の中に佇むポーラ美術館のコレクション、ガラスの森美術館、箱根クラフトハウスの陶芸体験、雨音を聞きながら過ごす強羅温泉・客室露天風呂旅館完全ガイド。",
  keywords: [
    "箱根 雨の日 観光",
    "箱根 室内 モデルコース",
    "ポーラ美術館 雨",
    "箱根ガラスの森美術館 雨の日",
    "箱根クラフトハウス 陶芸体験",
    "強羅温泉 おこもり 旅館",
    "箱根 雨 デート",
    "箱根 室内 観光スポット",
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
      return data["hakone-rainy-day-indoor-model-course"]?.hotels || [];
    }
  } catch (e) {
    console.error("Failed to load hotels for hakone-rainy-day-indoor-model-course", e);
  }
  return [];
}

export default function HakoneRainyDayIndoorCoursePage() {
  const hotels = loadHotels();

  // 雨の日特化 1泊2日タイムスケジュール
  const rainySchedule = [
    {
      day: "DAY 1：雨の仙石原＆強羅で満喫する、美の鑑賞とものづくり体験",
      theme: "傘をさす時間を最小限に抑え、アートと工芸、早めの温泉チェックインを楽しむ",
      timeline: [
        {
          time: "10:30",
          title: "箱根湯本駅到着 ＆ キャリーサービスで荷物を宿へ直送",
          desc: "箱根湯本駅の改札を出たら、まず右手奥の「箱根キャリーサービス」カウンターへ。スーツケースを預ければ宿へ直接届けてくれるため、傘を持ちながら重い荷物を運ぶストレスが一切なくなります。箱根登山バス（仙石原方面）に乗車。",
          rainTip: "移動はバス直行が最適。濡れずに移動できる大型傘を駅構内で調達可能",
          badge: "ストレスゼロ移動",
        },
        {
          time: "11:20",
          title: "ポーラ美術館（仙石原）：雨滴とガラス越しに森を眺める至高のコレクション",
          desc: "ブナやヒメシャラの自生林に包まれた地下建築の美術館。モネの『睡蓮』やルノワールなど印象派の名画をゆったり鑑賞。館内レストラン「アレイ」で森の雨景色を大きなパノラマ窓から眺めながら欧風ランチ＆カフェタイム。",
          rainTip: "館内は地下まで自然光が優しく差し込み、雨の日特有のしっとりとした幻想美が漂います",
          badge: "屋内で完結",
        },
        {
          time: "14:15",
          title: "箱根クラフトハウス（強羅公園内）：吹きガラス・陶芸ろくろ体験",
          desc: "強羅公園内にある本格クラフト体験施設。雨音を遠くに聞きながら、電動ろくろで湯呑みやお茶碗を作ったり、色鮮やかな吹きガラスの一輪挿し作りに没頭。完全屋内工房なので服や靴が濡れる心配もなし。",
          rainTip: "事前予約または空き枠の当日受付が可能。作った作品は後日自宅へ丁寧に焼き上げ配送",
          badge: "思い出の品作り",
        },
        {
          time: "16:00",
          title: "強羅温泉・にごり湯のおこもり宿へ早めのチェックイン",
          desc: "雨の日旅の醍醐味は「早めの宿入り」。チェックイン可能時刻に合わせて宿へ。大涌谷源泉の濃厚な白濁湯や露天風呂付き客室で、濡れた身体を芯まで温めます。湯上がりに雨音と湯けむりを愛でる至福のひととき。",
          rainTip: "16時前のチェックインで大浴場の一番風呂を独り占め。客室の茶菓子とお茶で一息",
          badge: "極上の湯治時間",
        },
        {
          time: "18:30",
          title: "地場食材と季節の味覚を愛でるお部屋食ディナー",
          desc: "外へ出ることなく、温かいお部屋や個室食事処でゆったりいただく旬の懐石料理。相模湾の地魚や足柄牛、箱根山麓の根菜を使った温かい鍋物とお酒で心身ともに満たされます。",
          rainTip: "外食の移動が不要なお部屋食または館内個室プランが雨の日は圧倒的におすすめ",
          badge: "贅沢ディナー",
        },
      ],
    },
    {
      day: "DAY 2：クリスタルの輝きと屋内ピカソ館、駅前アーケード巡り",
      theme: "雨の日の光を浴びて煌めくガラス芸術と、帰り道の屋根付き通り散策",
      timeline: [
        {
          time: "08:30",
          title: "朝風呂の白濁湯 ＆ 滋養たっぷりの和朝食",
          desc: "朝霧と雨煙が立ち込める静寂の中、朝の露天風呂へ。小田原名産の蒲鉾や鯵の干物、箱根豆腐の湯豆腐など、温かい朝食で贅沢な1日の始まり。",
          rainTip: "雨の朝は外気温が下がりやすいため、朝風呂でしっかり血行を促進",
          badge: "朝の静寂",
        },
        {
          time: "10:30",
          title: "箱根ガラスの森美術館：雨露に光るヴェネチアングラスの宮殿",
          desc: "中世ヴェネチアン・グラスの名品が並ぶ美術館。雨の日には庭園のクリスタルガラスアーチが雨粒を浴びてキラキラと輝き、晴天時とは異なる神秘的な表情を見せてくれます。カンツォーネの生演奏やカフェも充実。",
          rainTip: "雨の日限定で傘の貸出サービスあり。屋内展示館とカフェを結ぶ通路も整備",
          badge: "煌めく別世界",
        },
        {
          time: "13:00",
          title: "箱根彫刻の森美術館：ピカソ館＆室内展示ギャラリー",
          desc: "屋外のイメージが強い彫刻の森ですが、本館ギャラリーや世界屈指のコレクションを誇る「ピカソ館」は完全屋内展示。ピカソの絵画や陶芸、彫刻など約300点をじっくり鑑賞できます。カフェやミュージアムショップも充実。",
          rainTip: "ステンドグラスの塔「幸せをよぶシンフォニー彫刻」も内部階段から天窓を望めます",
          badge: "巨匠の息吹",
        },
        {
          time: "15:30",
          title: "箱根湯本駅前アーケード街：屋根付き通りでお土産選び＆足湯カフェ",
          desc: "箱根湯本駅前の商店街はアーケード付きで傘なしでも散策可能。焼きたての温泉まんじゅう、焼きモンブラン、箱根の寄せ木細工などを吟味。カフェで淹れたて珈琲を楽しみ、ロマンスカーで快適に帰路へ。",
          rainTip: "駅直結の連絡デッキからアーケード街まで段差なく移動できます",
          badge: "雨濡れゼロ散歩",
        },
      ],
    },
  ];

  // 雨の日の持ち物・対策Tips
  const rainyTips = [
    {
      icon: "🧳",
      title: "箱根キャリーサービスをフル活用",
      desc: "箱根湯本駅で手荷物を預ければ、宿泊先の旅館まで夕方までに運んでくれます。傘を差しながらの荷物持ちから解放され、初日から手ぶらで美術館を満喫できます。",
    },
    {
      icon: "🚌",
      title: "観光施設めぐりバスを乗りこなす",
      desc: "強羅・仙石原エリアの主要ミュージアム（ポーラ美術館、ガラスの森、ラリック美術館等）は「観光施設めぐりバス（S/M路線）」が目の前のエントランスまで直付けしてくれます。",
    },
    {
      icon: "🎫",
      title: "前売り電子チケットで窓口行列を回避",
      desc: "雨天時はチケット売り場に行列ができることがあります。WEB前売りチケットを事前購入しておくと、濡れずに即時入場可能です。",
    },
    {
      icon: "👟",
      title: "防水スニーカー＆吸水タオルの持参が鉄則",
      desc: "石畳や美術館の屋外アプローチは滑りやすいため、防滑仕様の靴がおすすめ。またマイクロファイバーのミニタオルを1枚バッグに入れておくと傘の露拭きや足湯後に重宝します。",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 selection:bg-slate-700 selection:text-white pb-20">
      {/* ヒーローヘッダー (Slate Palette) */}
      <header className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800 border-b border-slate-700/60 pt-16 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#94a3b8_1px,transparent_1px)] [background-size:20px_20px]"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800/80 border border-slate-600 text-slate-300 text-xs font-medium tracking-wide mb-6">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            雨の日・梅雨・秋雨でも120%楽しむ箱根観光決定版
          </div>
          
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-white leading-tight tracking-tight mb-6">
            【箱根 雨の日の観光モデルコース】
            <br />
            <span className="bg-gradient-to-r from-slate-200 via-cyan-200 to-slate-400 bg-clip-text text-transparent">
              ポーラ美術館・ガラスの森・彫刻の森室内＆早めチェックイン温泉おこもり旅
            </span>
          </h1>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto mb-8">
            「箱根旅行が雨予報…どうしよう」と落ち込む必要はありません！緑深い仙石原の森に溶け込むポーラ美術館、雨粒に反射して神秘的に輝くガラスの森、完全屋内で熱中できる本格クラフト体験。そして早めに宿へチェックインして、雨音を聞きながら浸かるにごり湯露天風呂。雨の日だからこそ味わえる、心洗われる大人の箱根1泊2日プランをお届けします。
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-slate-400">
            <span className="flex items-center gap-1.5 bg-slate-800/60 px-3 py-1.5 rounded-lg border border-slate-700">
              🌧️ 屋内中心＆移動最短ルート
            </span>
            <span className="flex items-center gap-1.5 bg-slate-800/60 px-3 py-1.5 rounded-lg border border-slate-700">
              ♨️ 強羅温泉にごり湯宿
            </span>
            <span className="flex items-center gap-1.5 bg-slate-800/60 px-3 py-1.5 rounded-lg border border-slate-700">
              🎨 陶芸＆ガラス工芸体験
            </span>
          </div>
        </div>
      </header>

      {/* 楽天トラベルスペシャルクーポンバナー */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 -mt-8 relative z-20">
        <div className="bg-slate-800/90 backdrop-blur-md rounded-2xl p-5 border border-slate-600 shadow-2xl">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <span className="inline-block px-2.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300 text-xs font-bold border border-cyan-500/30 mb-1">
                お得なおこもり宿泊予約
              </span>
              <h2 className="text-base sm:text-lg font-bold text-white">
                楽天トラベル 雨の日応援＆温泉割引クーポン配布中！
              </h2>
              <p className="text-xs text-slate-300">
                強羅温泉・箱根湯本の露天風呂付き客室・にごり湯旅館で使える限定クーポン
              </p>
            </div>
            <div className="w-full sm:w-auto">
              <SpecialCouponBanner variant="inline" />
            </div>
          </div>
        </div>
      </section>

      {/* 目次・ナビゲーション */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 mt-12">
        <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
          <h2 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
            <span>📑</span> この記事のコンテンツ目次
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-cyan-300">
            <li>
              <a href="#itinerary" className="hover:underline hover:text-cyan-200 flex items-center gap-1.5">
                <span>▶</span> 1泊2日 雨の日特化モデルコース行程
              </a>
            </li>
            <li>
              <a href="#indoor-spots" className="hover:underline hover:text-cyan-200 flex items-center gap-1.5">
                <span>▶</span> 雨でも濡れない箱根の屋内おすすめスポット
              </a>
            </li>
            <li>
              <a href="#rainy-tips" className="hover:underline hover:text-cyan-200 flex items-center gap-1.5">
                <span>▶</span> 雨の日の箱根観光をストレスフリーにする4大秘訣
              </a>
            </li>
            <li>
              <a href="#hotels" className="hover:underline hover:text-cyan-200 flex items-center gap-1.5">
                <span>▶</span> 雨音に癒やされる箱根のおすすめ温泉旅館
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* メインコンテンツ */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 mt-12 space-y-16">
        {/* セクション1: モデルコースタイムライン */}
        <section id="itinerary" className="space-y-8">
          <div>
            <div className="inline-block text-xs font-bold uppercase tracking-widest text-cyan-400 mb-2">
              SCHEDULE & ROUTE
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              雨の箱根を極上の休日に変える 1泊2日モデルコース
            </h2>
            <p className="text-slate-300 text-sm mt-2">
              外歩きの時間を可能な限り短縮し、施設間の移動は直行バスまたはタクシーを活用。屋内での体験と温泉滞在を最大化させた緻密なタイムスケジュールです。
            </p>
          </div>

          <div className="space-y-10">
            {rainySchedule.map((dayPlan, dayIdx) => (
              <div key={dayIdx} className="bg-slate-800/70 rounded-2xl p-6 sm:p-8 border border-slate-700 shadow-xl">
                <div className="border-b border-slate-700 pb-4 mb-6">
                  <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider block mb-1">
                    DAY {dayIdx + 1}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                    {dayPlan.day}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300">
                    💡 {dayPlan.theme}
                  </p>
                </div>

                <div className="relative border-l-2 border-slate-700 ml-4 pl-6 space-y-8">
                  {dayPlan.timeline.map((item, itemIdx) => (
                    <div key={itemIdx} className="relative group">
                      <div className="absolute -left-[31px] top-1 w-3.5 h-3.5 rounded-full bg-slate-600 border-2 border-slate-900 group-hover:bg-cyan-400 transition-colors"></div>

                      <div className="flex flex-wrap items-center gap-2 mb-1.5">
                        <span className="text-xs font-mono font-bold text-cyan-300 bg-slate-900/80 px-2 py-0.5 rounded border border-slate-700">
                          {item.time}
                        </span>
                        <span className="text-[11px] font-semibold text-slate-300 bg-slate-700/60 px-2 py-0.5 rounded">
                          {item.badge}
                        </span>
                      </div>

                      <h4 className="text-base font-bold text-white mb-1.5">
                        {item.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-2">
                        {item.desc}
                      </p>
                      <div className="bg-slate-900/60 rounded-lg p-2.5 border border-slate-700/80 text-[12px] text-cyan-200 flex items-start gap-2">
                        <span className="text-cyan-400 font-bold shrink-0">☔ 雨の日ワンポイント:</span>
                        <span>{item.rainTip}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* セクション2: 雨でも濡れない箱根の屋内観光スポット詳細 */}
        <section id="indoor-spots" className="space-y-6">
          <div>
            <div className="inline-block text-xs font-bold uppercase tracking-widest text-cyan-400 mb-2">
              INDOOR ATTRACTIONS
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              雨の日だからこそ訪れたい！箱根の極上屋内スポット4選
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-800/80 rounded-2xl p-6 border border-slate-700 flex flex-col justify-between">
              <div>
                <div className="text-xs font-bold text-cyan-300 mb-1">仙石原 / 美術館</div>
                <h3 className="text-lg font-bold text-white mb-2">ポーラ美術館（POLA MUSEUM OF ART）</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  国立公園の緑陰に調和するよう建物の大半を地下に埋設した名建築。雨の日はガラス屋根を滴る雨と周囲のブナ林が幻想的な陰影を描き出します。モネ、ルノワール、セザンヌなど世界水準の西洋名画を快適な室内で鑑賞。館内カフェのハーブティーも絶品です。
                </p>
              </div>
              <div className="bg-slate-900/70 p-3 rounded-xl border border-slate-700/60 text-xs text-slate-400 space-y-1">
                <div>📍 神奈川県足柄下郡箱根町仙石原小塚山1285</div>
                <div>🚌 箱根湯本駅から箱根登山バス（施設めぐりバス）で約40分</div>
                <div>💰 大人 1,800円（オンライン前売りで割引あり）</div>
              </div>
            </div>

            <div className="bg-slate-800/80 rounded-2xl p-6 border border-slate-700 flex flex-col justify-between">
              <div>
                <div className="text-xs font-bold text-cyan-300 mb-1">仙石原 / 庭園＆ガラス工芸</div>
                <h3 className="text-lg font-bold text-white mb-2">箱根ガラスの森美術館</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  中世ヴェネチアン・グラスを専門に展示する優雅な洋館。雨粒を浴びてキラキラと輝く屋外のクリスタルガラスのツリーやアーチは、雨天時限定のフォトジェニックな情景を生み出します。カフェレストランでは毎日カンツォーネの生演奏が開催され、優雅なティータイムを過ごせます。
                </p>
              </div>
              <div className="bg-slate-900/70 p-3 rounded-xl border border-slate-700/60 text-xs text-slate-400 space-y-1">
                <div>📍 神奈川県足柄下郡箱根町仙石原940-48</div>
                <div>🚌 箱根湯本駅から箱根登山バス（湖尻・桃源台行）「俵石・箱根ガラスの森前」すぐ</div>
                <div>💰 大人 1,800円（公式WEB割あり）</div>
              </div>
            </div>

            <div className="bg-slate-800/80 rounded-2xl p-6 border border-slate-700 flex flex-col justify-between">
              <div>
                <div className="text-xs font-bold text-cyan-300 mb-1">強羅 / ものづくり・陶芸工房</div>
                <h3 className="text-lg font-bold text-white mb-2">箱根クラフトハウス（強羅公園内）</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  完全屋内でじっくり集中できるものづくり工房。プロの工芸作家の手ほどきを受けながら、本格的な電動ろくろ陶芸、吹きガラス、とんぼ玉、サンドブラストなどを体験できます。雨音を聞きながら粘土と向き合う時間は、旅の何よりの思い出の品になります。
                </p>
              </div>
              <div className="bg-slate-900/70 p-3 rounded-xl border border-slate-700/60 text-xs text-slate-400 space-y-1">
                <div>📍 神奈川県足柄下郡箱根町強羅1300 強羅公園内</div>
                <div>🚊 箱根登山ケーブルカー「公園下駅」または「公園上駅」から徒歩3分</div>
                <div>💰 ろくろ体験 3,800円〜（作品配送料別途）</div>
              </div>
            </div>

            <div className="bg-slate-800/80 rounded-2xl p-6 border border-slate-700 flex flex-col justify-between">
              <div>
                <div className="text-xs font-bold text-cyan-300 mb-1">二ノ平 / 現代美術＆ピカソ館</div>
                <h3 className="text-lg font-bold text-white mb-2">彫刻の森美術館（屋内ピカソ館・本館ギャラリー）</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  広大な庭園彫刻が有名ですが、実は雨天時にも鑑賞できる充実した屋内展示棟を擁しています。特に「ピカソ館」は絵画、彫刻、陶芸など300点以上のコレクションを誇り圧巻。ステンドグラスの塔「幸せをよぶシンフォニー彫刻」も雨の光に照らされて荘厳な煌めきを放ちます。
                </p>
              </div>
              <div className="bg-slate-900/70 p-3 rounded-xl border border-slate-700/60 text-xs text-slate-400 space-y-1">
                <div>📍 神奈川県足柄下郡箱根町二ノ平1121</div>
                <div>🚊 箱根登山鉄道「彫刻の森駅」徒歩2分</div>
                <div>💰 大人 1,600円（公式HPインターネット割引あり）</div>
              </div>
            </div>
          </div>
        </section>

        {/* セクション3: 雨の日の箱根旅を快適にする4つのTips */}
        <section id="rainy-tips" className="bg-slate-800/40 rounded-2xl p-6 sm:p-8 border border-slate-700/80">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider block mb-1">
              TRAVEL HACKS
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-white">
              雨の箱根をストレスフリーにする4大秘訣
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              事前のちょっとした準備と知識で、雨の日特有の不快感をすべて回避できます。
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {rainyTips.map((tip, idx) => (
              <div key={idx} className="bg-slate-900/70 rounded-xl p-5 border border-slate-700/60 flex items-start gap-4">
                <span className="text-3xl p-2 bg-slate-800 rounded-lg border border-slate-700 shrink-0">
                  {tip.icon}
                </span>
                <div>
                  <h3 className="text-sm font-bold text-white mb-1">{tip.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">{tip.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* セクション4: 掲載宿一覧（loadHotels() による楽天トラベル提携宿） */}
        <section id="hotels" className="space-y-6">
          <div className="border-b border-slate-700 pb-4">
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest block mb-1">
              RECOMMENDED HOTELS & RYOKAN
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              雨音に癒やされる箱根のおすすめ温泉宿
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm mt-1">
              客室露天風呂付きのお部屋や大浴場のにごり湯が自慢。雨の日は早めにチェックインして贅沢な館内時間を過ごせる厳選宿です。
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
                  className="bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 shadow-xl flex flex-col justify-between hover:border-slate-500 transition-all duration-300"
                >
                  <div>
                    {hotel.hotelImageUrl ? (
                      <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
                        <img
                          src={hotel.hotelImageUrl}
                          alt={hotel.hotelName}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                        <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-cyan-300 border border-slate-700">
                          {hotel.nearestStation ? `最寄: ${hotel.nearestStation}駅` : "箱根温泉郷"}
                        </div>
                      </div>
                    ) : (
                      <div className="aspect-[16/10] w-full bg-slate-900 flex items-center justify-center text-slate-500">
                        ♨️ 画像準備中
                      </div>
                    )}

                    <div className="p-5 space-y-3">
                      <div className="flex items-center justify-between gap-2">
                        {hotel.reviewAverage && (
                          <div className="flex items-center gap-1 text-xs font-bold text-amber-400 bg-amber-950/50 px-2 py-0.5 rounded border border-amber-800/60">
                            <span>★</span>
                            <span>{hotel.reviewAverage.toFixed(2)}</span>
                            {hotel.reviewCount && (
                              <span className="text-slate-400 text-[10px]">({hotel.reviewCount}件)</span>
                            )}
                          </div>
                        )}
                        <span className="text-xs text-slate-400">
                          {hotel.address1} {hotel.address2}
                        </span>
                      </div>

                      <h3 className="text-base sm:text-lg font-bold text-white line-clamp-2 leading-snug">
                        {hotel.hotelName}
                      </h3>

                      {special && (
                        <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed bg-slate-900/50 p-2.5 rounded-lg border border-slate-700/60">
                          {special}
                        </p>
                      )}

                      {hotel.access && (
                        <p className="text-[11px] text-slate-400">
                          🚗 アクセス: {hotel.access}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="p-5 pt-0 border-t border-slate-700/60 mt-2">
                    <div className="flex items-baseline justify-between pt-3 mb-3">
                      <span className="text-xs text-slate-400 font-medium">最安参考料金（1名）:</span>
                      <span className="text-lg font-extrabold text-cyan-300 font-mono">
                        {minCharge}
                      </span>
                    </div>

                    <a
                      href={hotel.affiliateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold text-xs sm:text-sm text-center shadow-lg shadow-cyan-900/30 transition-all flex items-center justify-center gap-2"
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
        <section className="bg-slate-800/60 rounded-2xl p-6 sm:p-8 border border-slate-700">
          <h2 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
            <span>🔗</span> 箱根旅行の計画に役立つ関連ガイド
          </h2>
          <p className="text-xs text-slate-300 mb-4">
            旅行費用のシミュレーションや、日帰りで満喫するランチ＆個室温泉プランもあわせてチェック！
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              href="/hakone-travel-budget-guide"
              className="group block p-4 rounded-xl bg-slate-900/70 border border-slate-700 hover:border-cyan-500/60 transition-all"
            >
              <span className="text-xs font-bold text-cyan-400 block mb-1">費用シミュレーション 💰</span>
              <h3 className="text-sm font-bold text-white group-hover:text-cyan-200 transition-colors">
                【箱根旅行 費用】日帰り・1泊2日いくら？フリーパス活用の交通費＆宿泊相場
              </h3>
              <p className="text-xs text-slate-400 mt-1 line-clamp-2">
                ロマンスカー代や美術館入場料、旅館相場を徹底検証した実用的な予算ガイド。
              </p>
            </Link>

            <Link
              href="/hakone-daytrip-hotspring-lunch-guide"
              className="group block p-4 rounded-xl bg-slate-900/70 border border-slate-700 hover:border-cyan-500/60 transition-all"
            >
              <span className="text-xs font-bold text-cyan-400 block mb-1">日帰りプラン ♨️</span>
              <h3 className="text-sm font-bold text-white group-hover:text-cyan-200 transition-colors">
                【箱根 日帰り温泉 ランチ付きおすすめ】個室休憩＆貸切風呂・老舗旅館の贅沢日帰り
              </h3>
              <p className="text-xs text-slate-400 mt-1 line-clamp-2">
                宿泊せずに贅沢懐石とお部屋休憩が楽しめる日帰り温泉プランをエリア別に徹底比較。
              </p>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
