import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";
import SpecialCouponBanner from "@/app/components/SpecialCouponBanner";

export const metadata: Metadata = {
  alternates: { canonical: "https://croud-travel.pages.dev/kyoto-night-bus-early-morning-onsen-breakfast-guide/" },
  title: "【京都 夜行バス早朝到着の過ごし方】朝6時から入れる銭湯・天然温泉＆京都名物「朝粥」完全ガイド",
  description:
    "京都駅に朝6時台に到着した後の救済マニュアル！京都タワー大浴場や駅前天然温泉での朝風呂、早朝から並ばずに食べられる老舗の朝粥・湯豆腐・喫茶モーニング、人混みゼロの早朝清水寺参拝ルート。",
  keywords: ["京都", "夜行バス早朝到着の過ごし方", "朝6時から入れる銭湯", "天然温泉", "京都名物「朝粥」", "温泉宿", "宿泊予約"],
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
      return data["kyoto-night-bus-early-morning-onsen-breakfast-guide"]?.hotels || [];
    }
  } catch (e) {
    console.error("Failed to load hotels for kyoto-night-bus-early-morning-onsen-breakfast-guide", e);
  }
  return [];
}

export default function KyotoEarlyMorningGuidePage() {
  const hotels = loadHotels();

  const morningBaths = [
    {
      name: "京都タワー大浴場〜YUU〜（リニューアル関連施設・提携スパ）",
      time: "朝7:00〜営業（※近隣ホテル提携朝風呂・SPAプランあり）",
      fee: "約900円〜1,500円",
      access: "JR京都駅烏丸中央口より徒歩2分（地下直結）",
      points: "夜行バス下車直後に地下通路直行で雨・寒さを回避。大型ロッカー完備でキャリーバッグも安心。",
      badge: "駅直結・最速"
    },
    {
      name: "天然温泉 花蛍の湯（ドーミーインPREMIUM京都駅前 日帰りプラン）",
      time: "朝6:00〜利用可能（デイユース・朝風呂プラン対象）",
      fee: "プランによる（朝食付セット約2,800円〜）",
      access: "京都駅烏丸中央口より徒歩3分",
      points: "本格天然温泉＆高温サウナ・水風呂。長旅で固まった腰と足を完璧にリセット可能。",
      badge: "天然温泉＆極上サウナ"
    },
    {
      name: "白山湯 高辻店（京都名物・地下水天然掛け流し銭湯）",
      time: "土日祝 朝7:00〜営業（平日は15:00〜）",
      fee: "入浴料 490円（サウナ込み）",
      access: "地下鉄烏丸線「四条駅」徒歩6分 / 京都駅から地下鉄3分",
      points: "京都の銭湯通が絶賛する超軟水地下水の水風呂と110度の激アツサウナ。外気浴スペースも充実。",
      badge: "京都ローカルサウナ聖地"
    }
  ];

  const morningGourmet = [
    {
      spot: "瓢亭 別館（ひょうてい べっかん）",
      menu: "名物『朝粥』（瓢亭玉子・季節の八寸・粥・吉野葛あん）",
      hours: "朝8:00〜11:00（要予約推奨）",
      price: "約4,500円〜",
      area: "南禅寺エリア（地下鉄東西線「蹴上駅」徒歩5分）",
      reason: "400年の歴史を誇る老舗料亭。本館と同等の名物「瓢亭玉子」の半熟加減と、温かい出汁あんかけの滋味が早朝の胃袋に染み渡ります。"
    },
    {
      spot: "伊右衛門サロン Kyoto / 旬菜ダイニング",
      menu: "『釜炊きご飯とおばんざい朝定食』",
      hours: "朝8:00〜11:00",
      price: "約1,800円〜2,400円",
      area: "烏丸御池・河原町エリア",
      reason: "羽釜でふっくら炊き上げた京都丹波産コシヒカリと、色とりどりの京野菜おばんざいが並ぶ贅沢モーニング。"
    },
    {
      spot: "イノダコーヴィ 本店",
      menu: "『京の朝食』（クロワッサン、ボンレスハム、スクランブルエッグ、アラビアの真珠）",
      hours: "朝7:00〜18:00",
      price: "約1,600円",
      area: "堺町通三条下ル（地下鉄「烏丸御池駅」徒歩6分）",
      reason: "京都の旦那衆が通うサロン的純喫茶。モカベースの濃厚ネルドリップ珈琲と芳醇なバターの香りで目覚めの贅沢を。"
    },
    {
      spot: "都野菜 賀茂 烏丸店",
      menu: "『朝食バイキング』（契約農家の摘みたて京野菜・うどん・お粥・パン）",
      hours: "朝7:00〜10:00（L.O. 9:30）※朝7時整理券配布",
      price: "驚きの 600円（税込）",
      area: "地下鉄烏丸線「四条駅」徒歩3分",
      reason: "コスパ最強！京都近郊の有機・無農薬野菜が食べ放題。ヘルシーに京都の旬を味わいたいバックパッカーにも絶大人気。"
    }
  ];

  const morningTimeline = [
    {
      time: "06:15",
      action: "京都駅烏丸口 / 八条口の高速バスターミナル到着",
      desc: "夜行バスの到着ラッシュ。まずは地下コインロッカー（中央改札地下または八条口側コインロッカー群）へ手荷物を預けて身軽に。"
    },
    {
      time: "06:40",
      action: "駅前朝風呂スポットへ直行！シャワー＆サウナで覚醒",
      desc: "バス車内の冷房・硬いシートで強張った背中と腰を湯船で解凍。温冷交代浴で血行を促せば、移動の疲労感ゼロに。"
    },
    {
      time: "07:45",
      action: "京都の伝統朝食（朝粥・おばんざい・純喫茶）を堪能",
      desc: "混雑する昼夜を避け、朝一番の上質な京都グルメをゆったり味わう至福の時間。"
    },
    {
      time: "08:45",
      action: "人混みゼロの「清水寺」「八坂の塔」静寂参拝へ",
      desc: "通常は観光客でごった返す産寧坂・二寧坂も、朝9時前なら静寂そのもの。澄んだ空気の中で記念撮影が自由自在！"
    }
  ];

  return (
    <main className="min-h-screen bg-rose-50/40 text-slate-800 font-sans pb-20">
      {/* Hero Header */}
      <section className="bg-gradient-to-br from-rose-950 via-rose-900 to-stone-900 text-white py-14 px-4 sm:px-6 relative overflow-hidden shadow-xl">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/30 border border-rose-300/40 text-rose-200 text-xs sm:text-sm font-medium mb-4 backdrop-blur-sm">
            <span>♨️ 6:00 AM START REVIVAL GUIDE</span>
            <span className="w-1.5 h-1.5 rounded-full bg-rose-400 animate-ping" />
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight leading-snug mb-4 text-balance">
            【京都 夜行バス早朝到着の過ごし方】<br />
            朝6時から入れる銭湯・天然温泉＆京都名物「朝粥」完全ガイド
          </h1>
          <p className="text-rose-100/90 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            京都駅に朝6時台に放り出されても途方に暮れる必要なし！
            バス旅の疲れを洗い流す朝風呂スポットから、並ばずに味わえる絶品朝粥・喫茶モーニング、人混み皆無の早朝散策ルートまでプロが徹底指南します。
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-2 text-xs text-rose-200">
            <span className="bg-white/10 px-3 py-1 rounded-md">#京都駅朝風呂</span>
            <span className="bg-white/10 px-3 py-1 rounded-md">#瓢亭の朝粥</span>
            <span className="bg-white/10 px-3 py-1 rounded-md">#白山湯サウナ</span>
            <span className="bg-white/10 px-3 py-1 rounded-md">#早朝清水寺ルート</span>
          </div>
        </div>
      </section>

      {/* Main Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 mt-8 space-y-12">
        {/* Special Coupon */}
        <SpecialCouponBanner />

        {/* Section 1: Post-Night-Bus Revival Hack */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-rose-100">
          <div className="flex items-center gap-3 mb-5 border-b border-rose-100 pb-3">
            <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-rose-100 text-rose-700 font-bold text-lg">
              01
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-800">
              夜行バス下車直後！京都駅到着直後の3大レスキュー行動
            </h2>
          </div>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
            早朝6時台の京都駅は、寺社仏閣の拝観受付や一般カフェがまだ開いておらず、待合室のベンチも埋まりがちです。最初の30分をどう動くかで、その日一日の旅行クオリティが180度変わります。
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-rose-50/70 border border-rose-200/70 rounded-xl p-4">
              <div className="text-rose-700 font-bold text-sm mb-1 flex items-center gap-1.5">
                <span>🧳 ① 荷物は地下街ロッカーへ</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                中央口改札前ロッカーは7時で埋まります。地下中央口通路やポルタ奥の大型ロッカー、八条口1階通路が狙い目。Suica/ICOCA決済ロッカーなら小銭不要です。
              </p>
            </div>
            <div className="bg-rose-50/70 border border-rose-200/70 rounded-xl p-4">
              <div className="text-rose-700 font-bold text-sm mb-1 flex items-center gap-1.5">
                <span>♨️ ② まずは朝風呂で血流改善</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                座りっぱなしでむくんだふくらはぎと肩こりを42度前後の熱湯と水風呂でリセット。メイク直しスペースやドライヤーが使えるのも大浴場の強み。
              </p>
            </div>
            <div className="bg-rose-50/70 border border-rose-200/70 rounded-xl p-4">
              <div className="text-rose-700 font-bold text-sm mb-1 flex items-center gap-1.5">
                <span>🎫 ③ 地下鉄・バス1日券を確保</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                駅前バス案内所や券売機で「地下鉄・バス1日券」を朝イチ入手しておけば、混雑するバス窓口に並ばず、東西線・烏丸線で渋滞を回避して即移動できます。
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Morning Bath & Sauna Guide */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-rose-100">
          <div className="flex items-center gap-3 mb-5 border-b border-rose-100 pb-3">
            <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-rose-100 text-rose-700 font-bold text-lg">
              02
            </span>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-800">
                朝6:00〜7:00から入れる！京都駅周辺の朝風呂＆天然温泉スポット
              </h2>
              <p className="text-xs text-rose-600 font-medium">身体の強張りをほぐす極楽スポット徹底比較</p>
            </div>
          </div>

          <div className="space-y-4">
            {morningBaths.map((bath, idx) => (
              <div key={idx} className="p-5 rounded-xl border border-stone-200 hover:border-rose-300 transition-colors bg-stone-50/40">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <h3 className="font-bold text-base sm:text-lg text-slate-800">{bath.name}</h3>
                  <span className="bg-rose-100 text-rose-800 text-xs px-2.5 py-0.5 rounded-full font-semibold">
                    {bath.badge}
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-600 mb-3 bg-white p-3 rounded-lg border border-stone-100">
                  <div>⏰ <strong className="text-slate-700">営業時間:</strong> {bath.time}</div>
                  <div>💰 <strong className="text-slate-700">料金目安:</strong> {bath.fee}</div>
                  <div className="sm:col-span-2">📍 <strong className="text-slate-700">アクセス:</strong> {bath.access}</div>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  💡 <strong className="text-slate-700">記者の体感レビュー:</strong> {bath.points}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Morning Breakfast & Porridge (朝粥) */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-rose-100">
          <div className="flex items-center gap-3 mb-5 border-b border-rose-100 pb-3">
            <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-rose-100 text-rose-700 font-bold text-lg">
              03
            </span>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-800">
                京都の朝は「名物朝粥・湯豆腐・老舗喫茶」で至福の湯浴み体験
              </h2>
              <p className="text-xs text-rose-600 font-medium">混雑前に名店の味をいただく賢者のモーニング</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {morningGourmet.map((item, idx) => (
              <div key={idx} className="border border-rose-100 rounded-xl p-5 bg-gradient-to-b from-white to-rose-50/20 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-semibold text-rose-600 mb-1">{item.area}</div>
                  <h3 className="font-bold text-base sm:text-lg text-slate-800 mb-2">{item.spot}</h3>
                  <div className="text-xs sm:text-sm text-rose-800 bg-rose-50 px-2.5 py-1 rounded inline-block font-medium mb-3">
                    {item.menu}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {item.reason}
                  </p>
                </div>
                <div className="border-t border-rose-100 pt-3 flex items-center justify-between text-xs text-slate-500">
                  <span>⏰ {item.hours}</span>
                  <span className="font-bold text-rose-700">{item.price}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: Time Schedule / Model Route */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-rose-100">
          <div className="flex items-center gap-3 mb-6 border-b border-rose-100 pb-3">
            <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-rose-100 text-rose-700 font-bold text-lg">
              04
            </span>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-800">
                【早朝6:00着〜10:00】人混みゼロ！早朝京都黄金タイムテーブル
              </h2>
              <p className="text-xs text-rose-600 font-medium">昼の喧騒が嘘のような静寂の古都を独り占め</p>
            </div>
          </div>

          <div className="relative border-l-2 border-rose-200 ml-4 pl-6 space-y-6">
            {morningTimeline.map((step, idx) => (
              <div key={idx} className="relative">
                <div className="absolute -left-[31px] top-0.5 w-4 h-4 rounded-full bg-rose-600 border-4 border-white shadow-sm" />
                <div className="inline-block px-2.5 py-0.5 rounded bg-rose-100 text-rose-800 text-xs font-bold mb-1">
                  {step.time}
                </div>
                <h3 className="text-base font-bold text-slate-800 mb-1">{step.action}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 bg-rose-50/60 p-4 rounded-xl border border-rose-200/60 text-xs sm:text-sm text-slate-700">
            <strong className="text-rose-800">🌟 記者の一言アドバイス:</strong>
            清水寺の開門は毎朝<strong>朝6:00</strong>。バスツアー客や修学旅行生が押し寄せるのは朝9:30以降のため、朝7:30〜8:30の清水の舞台や音羽の滝はほぼ貸切状態です。静まり返った境内で響く読経の声を聴く体験は、夜行バス早朝組だけの特別な特権です。
          </div>
        </section>

        {/* Section 5: Hotel Recommendations */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-rose-100">
          <div className="flex items-center gap-3 mb-6 border-b border-rose-100 pb-3">
            <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-rose-100 text-rose-700 font-bold text-lg">
              05
            </span>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-800">
                夜行バス旅の拠点に最適！大浴場・サウナ付おすすめ京都ホテル
              </h2>
              <p className="text-xs text-rose-600 font-medium">荷物預かり対応・朝食高評価の厳選宿</p>
            </div>
          </div>

          {hotels.length === 0 ? (
            <p className="text-sm text-slate-500">ホテル情報を読み込み中...</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {hotels.map((hotel) => (
                <div
                  key={hotel.hotelNo}
                  className="bg-white rounded-xl border border-rose-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
                >
                  <div>
                    {hotel.hotelImageUrl && (
                      <div className="relative h-44 w-full bg-slate-100 overflow-hidden">
                        <img
                          src={hotel.hotelImageUrl}
                          alt={hotel.hotelName}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                        {hotel.nearestStation && (
                          <div className="absolute top-2 left-2 bg-black/70 backdrop-blur-sm text-white text-[11px] px-2 py-0.5 rounded font-medium">
                            最寄: {hotel.nearestStation}駅
                          </div>
                        )}
                        {hotel.reviewAverage && (
                          <div className="absolute top-2 right-2 bg-rose-600 text-white text-xs px-2 py-0.5 rounded font-bold shadow">
                            ★ {hotel.reviewAverage.toFixed(1)}
                          </div>
                        )}
                      </div>
                    )}
                    <div className="p-4">
                      <h3 className="font-bold text-base text-slate-800 line-clamp-2 mb-2 hover:text-rose-700">
                        {hotel.hotelName}
                      </h3>
                      <p className="text-xs text-slate-600 line-clamp-3 mb-3 leading-relaxed">
                        {hotel.hotelSpecial || "大浴場・サウナ完備で夜行バス到着後や観光後のリフレッシュに最適な京都駅近郊ホテル。"}
                      </p>
                      {hotel.access && (
                        <p className="text-[11px] text-slate-500 mb-2 truncate">
                          🚶 {hotel.access}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="p-4 pt-0">
                    <div className="border-t border-rose-50 pt-3 mb-3 flex items-baseline justify-between">
                      <span className="text-xs text-slate-500">最安目安 / 人</span>
                      <span className="text-lg font-bold text-rose-700">
                        {hotel.hotelMinCharge ? `¥${hotel.hotelMinCharge.toLocaleString()}〜` : "料金確認"}
                      </span>
                    </div>
                    <a
                      href={hotel.affiliateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full text-center py-2.5 px-3 bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-700 hover:to-rose-800 text-white font-bold text-xs sm:text-sm rounded-lg shadow hover:shadow-md transition-all"
                    >
                      楽天トラベルで空室・プランを見る
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Section 6: Internal Links */}
        <section className="bg-stone-50 rounded-2xl p-6 sm:p-8 border border-stone-200">
          <h2 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
            <span>🔗</span> 合わせて読みたい京都・交通攻略ガイド
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              href="/tokyo-kyoto-bus-vs-shinkansen-guide"
              className="p-4 bg-white rounded-xl border border-stone-200 hover:border-rose-400 hover:shadow-sm transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-[11px] text-rose-600 font-semibold mb-1 block">交通比較</span>
                <h3 className="font-bold text-sm text-slate-800 mb-1">
                  【東京〜京都】新幹線 vs 高速夜行バス 徹底比較！
                </h3>
                <p className="text-xs text-slate-500 line-clamp-2">
                  料金差額・所要時間・体力の消耗度を徹底検証。おすすめの夜行便運行会社も紹介。
                </p>
              </div>
              <span className="text-xs text-rose-600 font-bold mt-3 inline-flex items-center gap-1">
                記事を読む →
              </span>
            </Link>

            <Link
              href="/kyoto-subway-bus-1day-pass-golden-route"
              className="p-4 bg-white rounded-xl border border-stone-200 hover:border-rose-400 hover:shadow-sm transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-[11px] text-rose-600 font-semibold mb-1 block">市内観光</span>
                <h3 className="font-bold text-sm text-slate-800 mb-1">
                  地下鉄・バス1日券で巡る京都ゴールデン観光ルート
                </h3>
                <p className="text-xs text-slate-500 line-clamp-2">
                  バス渋滞を完全回避！地下鉄をフル活用して伏見稲荷・嵐山・祇園をスムーズに巡るコツ。
                </p>
              </div>
              <span className="text-xs text-rose-600 font-bold mt-3 inline-flex items-center gap-1">
                記事を読む →
              </span>
            </Link>
          </div>
        </section>
      </div>
    
        {/* Model Course Section */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200/80">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              【1泊2日】おすすめモデルコース＆旅の過ごし方
            </h2>
          </div>
          <p className="text-stone-600 mb-8 text-sm md:text-base leading-relaxed">
            本特集の魅力を最大限に満喫するための理想的な1泊2日旅程モデルプランです。周辺の観光名所やグルメスポットとあわせて、無理のないスケジュールで最高の旅をお楽しみください。
          </p>
          <div className="space-y-6">
            <div className="border-l-2 border-amber-500 pl-4 md:pl-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="bg-amber-500 text-white text-xs font-bold px-2.5 py-1 rounded">1日目</span>
                <h3 className="font-bold text-stone-900 text-base md:text-lg">出発〜チェックイン・夕食と名湯を満喫</h3>
              </div>
              <ul className="text-xs md:text-sm text-stone-600 space-y-2 leading-relaxed">
                <li>・<strong className="text-stone-800">13:30〜</strong> 現地到着後、周辺の散策や名物カフェ・観光スポットをのんびり観光。</li>
                <li>・<strong className="text-stone-800">15:00〜</strong> お宿へチェックイン。ウェルカムドリンクや特製スイーツを楽しみながら客室で一息。</li>
                <li>・<strong className="text-stone-800">16:30〜</strong> 夕暮れ時の露天風呂・サウナで日頃の疲れを癒やす極上の湯浴み。</li>
                <li>・<strong className="text-stone-800">18:30〜</strong> 地元厳選食材をふんだんに使用した旬の会席料理やディナーを堪能。</li>
                <li>・<strong className="text-stone-800">21:00〜</strong> 星空を仰ぐ夜の露天風呂やラウンジで贅沢な大人の時間を。</li>
              </ul>
            </div>
            <div className="border-l-2 border-teal-500 pl-4 md:pl-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="bg-teal-600 text-white text-xs font-bold px-2.5 py-1 rounded">2日目</span>
                <h3 className="font-bold text-stone-900 text-base md:text-lg">朝風呂〜朝食・お土産選びと帰路へ</h3>
              </div>
              <ul className="text-xs md:text-sm text-stone-600 space-y-2 leading-relaxed">
                <li>・<strong className="text-stone-800">07:00〜</strong> 朝の清々しい空気の中で目覚めの朝風呂・サウナ。</li>
                <li>・<strong className="text-stone-800">08:00〜</strong> 炊きたて地元産ごはんと郷土の味覚が並ぶこだわりの朝食。</li>
                <li>・<strong className="text-stone-800">10:00〜</strong> チェックアウト後、近隣の道の駅や特産品店でお土産選び。</li>
                <li>・<strong className="text-stone-800">12:00〜</strong> 地元で愛される名物ランチを堪能して、大満足の帰路へ。</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-stone-50 rounded-2xl p-6 md:p-10 border border-stone-200/80">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              よくある質問（FAQ）と旅のノウハウ
            </h2>
          </div>
          <div className="space-y-4">
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 予約に最適な時期やタイミングはいつ頃ですか？</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 露天風呂付き客室や特選料理プランは数ヶ月前から予約が埋まりやすいため、旅行日程が決まり次第2〜3ヶ月前の早期予約が最も確実です。楽天トラベルの限定クーポンや早期割引プランを活用するとお得に宿泊できます。
              </p>
            </details>
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 車でのアクセスと公共交通機関のどちらが便利ですか？</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 多くの主要旅館・リゾートホテルは最寄り駅から無料送迎バスを運行しています。周辺の観光名所や景勝地を巡る場合は、最寄り駅前でレンタカーを借りると移動がスムーズでおすすめです。
              </p>
            </details>
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 食事のアレルギー対応や部屋食の指定は可能ですか？</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 多くの宿泊施設で事前連絡によりアレルギー対応が可能です。部屋食や個室食事処プランはプラン予約時に指定するか、予約時の備考欄で宿へ相談することをおすすめします。
              </p>
            </details>
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 一人旅や子連れファミリーでの宿泊にも向いていますか？</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. はい。一人旅歓迎プランや、家族向けの広い和洋室・貸切風呂完備の宿を厳選しています。プラン詳細の受入条件をご確認の上、安心してお申し込みください。
              </p>
            </details>
          </div>
        </section>

        {/* Internal Link Mesh: Related Features & Prefectures */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200/80">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-xl md:text-2xl font-bold text-stone-900">
              あわせて読みたい人気特集＆全国エリアガイド
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">

          </div>
          <div className="pt-6 border-t border-stone-100">
            <h3 className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-3">人気の都道府県から宿を探す</h3>
            <div className="flex flex-wrap gap-2">
              <Link
                href="/prefectures/shiga"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                滋賀県の宿・温泉
              </Link>
              <Link
                href="/prefectures/yamaguchi"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                山口県の宿・温泉
              </Link>
              <Link
                href="/prefectures/iwate"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                岩手県の宿・温泉
              </Link>
              <Link
                href="/prefectures/tochigi"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                栃木県の宿・温泉
              </Link>
            </div>
          </div>
        </section>

      </main>
  );
}
