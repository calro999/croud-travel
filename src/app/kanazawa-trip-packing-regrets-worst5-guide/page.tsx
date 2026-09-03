import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";
import SpecialCouponBanner from "@/app/components/SpecialCouponBanner";

export const metadata: Metadata = {
  title: "【金沢旅行で後悔したことワースト5】月曜定休トラップ＆21美予約忘れ！海鮮丼行列を回避する持ち物＆知恵袋",
  description:
    "金沢観光のよくある落とし穴を全解説！21世紀美術館スイミングプールの事前予約逃し、主要名所・飲食店の月曜一斉定休日トラップ、近江町市場の早仕舞い、折りたたみ傘必須の気候対策と駅前温泉宿。",
  keywords: [
    "金沢旅行 後悔 ワースト5",
    "21世紀美術館 プール 予約 失敗",
    "金沢 月曜定休日 トラップ",
    "近江町市場 海鮮丼 混雑回避",
    "金沢 持ち物 折りたたみ傘",
    "金沢駅前 ホテル 楽天トラベル"
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
      return data["kanazawa-trip-packing-regrets-worst5-guide"]?.hotels || [];
    }
  } catch (e) {
    console.error("Failed to load hotels for kanazawa-trip-packing-regrets-worst5-guide", e);
  }
  return [];
}

export default function KanazawaTripPackingRegretsWorst5Page() {
  const hotels = loadHotels();

  // 金沢旅行リアル後悔ワースト5
  const worstRegrets = [
    {
      rank: "第1位",
      title: "「弁当忘れても傘忘れるな」を軽視！突然の豪雨でスニーカー浸水＆観光中断",
      tag: "北陸特有の気候トラップ",
      incident:
        "金沢は年間を通じて降水日数が日本トップクラス。金沢の古い格言『弁当忘れても傘忘れるな』を知らず、東京や大阪の感覚で傘を持たずに散策。突然の冷たい通り雨や霙（みぞれ）に打たれ、靴がぐしょ濡れになり、予定していたひがし茶屋街の散策を泣く泣く切り上げてカフェに避難する旅行者が続出。",
      countermeasure:
        "頑丈な耐風折りたたみ傘（または晴雨兼用軽量傘）と撥水スニーカー、防水スプレー処理が年間通じて必須装備。予備の靴下もカバンに1足常備。",
      regretScore: "97%"
    },
    {
      rank: "第2位",
      title: "金沢21世紀美術館「スイミング・プール」当日行けば見られると誤認して地下入場不可",
      tag: "WEB事前予約（日付指定）の盲点",
      incident:
        "レアンドロ・エルリッヒ作の世界的名作「スイミング・プール（地下部）」は事前予約制。これを知らずに美術館の券売窓口へ行き、『本日の地下入場枠はすべて満枠です』と告げられて愕然とする観光客が毎日のように発生。地上から覗き込むだけで終わってしまい、最大のフォトスポットを逃す羽目に。",
      countermeasure:
        "来館日の1週間前朝9:00に公式WEBサイトで予約枠が開放されます。日程が決まり次第即座に事前予約を完了させておくこと（当日枠は争奪戦激化）。",
      regretScore: "94%"
    },
    {
      rank: "第3位",
      title: "月曜日に主要施設・名物寿司店・甘味処が一斉休業！街がゴーストタウン化",
      tag: "月曜定休日トラップ",
      incident:
        "日・月の日程で旅行を組んだところ、月曜日は21世紀美術館、国立工芸館、鈴木大拙館などの人気ミュージアムが揃って休館。さらに近江町市場の一部店舗や、ひがし茶屋街・長町武家屋敷跡の老舗カフェ・和食割烹も定休日が集中し、行きたかった店がことごとくシャッター通りで絶望。",
      countermeasure:
        "月曜日に金沢観光が入る場合は、年中無休の兼六園・金沢城公園・尾山神社を中心にスケジュールを組み、営業中の飲食店を事前リサーチ＆予約しておくのが絶対ルール。",
      regretScore: "92%"
    },
    {
      rank: "第4位",
      title: "12時に近江町市場へ行ったら海鮮丼90分待ち！さらに14時にはネタ切れ閉店ラッシュ",
      tag: "市場の時間帯・行列トラップ",
      incident:
        "お昼ご飯に海鮮丼を食べようと12時過ぎに近江町市場に到着すると、有名店前には階段下まで続く長蛇の列で70〜90分待ち。さらに昼のピークを過ぎた14時〜15時には、多くの店舗が『本日分完売』で早々に暖簾を下ろしてしまい、市場内を歩き回るもランチ難民に陥るパターン。",
      countermeasure:
        "近江町市場の海鮮丼は『朝8時〜9時の朝食利用』または『11時前の超早ランチ』が正解。待たずに極上ののどぐろや甘海老を堪能できます。",
      regretScore: "88%"
    },
    {
      rank: "第5位",
      title: "ひがし茶屋街や武家屋敷の石畳で足裏激痛！キャリーケースの車輪破損トラブル",
      tag: "風情ある石畳・坂道の落とし穴",
      incident:
        "金沢の歴史的景観を形作る美しい「石畳」や「小路の段差」。ヒールや硬いソールで歩いて足裏やふくらはぎを痛めるだけでなく、重い大型キャリーケースを石畳の上で無理にガラガラ引きずった結果、キャスターが破損・ガタついて動かなくなるトラブルが多発。",
      countermeasure:
        "金沢駅に到着した瞬間、駅構内やホテルの手荷物配送サービス（または駅コインロッカー）に重い荷物を預け、身軽なスニーカー姿で散策に出発すること。",
      regretScore: "85%"
    }
  ];

  // 金沢パッキング持ち物チェックリスト
  const packingChecklist = [
    {
      category: "金沢の気候を制する【雨天・防寒3点セット】",
      badge: "絶対必須",
      badgeColor: "bg-amber-600 text-white",
      items: [
        { name: "耐風軽量折りたたみ傘（晴雨兼用）", reason: "金沢名物の急な通り雨・強風に対応。コンビニ傘では突風で裏返るリスク大。" },
        { name: "撥水スニーカー＋予備の靴下", reason: "兼六園の砂利道やひがし茶屋街の石畳を歩き回り、雨の跳ね返りから足を守る。" },
        { name: "防風性のあるアウター・羽織り", reason: "日本海側からの冷たい北風は春や秋でも体感温度を激下げするため必須。" }
      ]
    },
    {
      category: "街歩き＆グルメを快適にする【散策ギア】",
      badge: "推奨",
      badgeColor: "bg-amber-100 text-amber-900 border border-amber-300",
      items: [
        { name: "現金（小銭・千円札）", reason: "老舗和菓子店、近江町市場の串焼き、神社仏閣の拝観料など現金のみの店舗が多数健在。" },
        { name: "小型ウエットティッシュ", reason: "近江町市場での食べ歩きや、金箔ソフトクリームを食べた後の指先ケアに重宝。" },
        { name: "サブバッグ（お土産・和菓子用エコバッグ）", reason: "伝統菓子や地酒、工芸品など金沢のお土産は箱が大きいため手提げがあると快適。" }
      ]
    },
    {
      category: "予約・デジタル管理【知恵袋アイテム】",
      badge: "事前準備",
      badgeColor: "bg-yellow-100 text-yellow-900 border border-yellow-300",
      items: [
        { name: "21美プール事前予約画面のスクリーンショット", reason: "電波状況に関わらず入場時間とQRコードをスムーズに提示できるよう保存。" },
        { name: "城下まち金沢周遊バスの1日フリー乗車券（Web/アプリ）", reason: "主要観光地を巡る周遊バスを小銭要らずで何回でも乗降可能にする神パス。" }
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-[#fffdfa] text-stone-800 antialiased pb-20">
      {/* ヒーローヘッダー */}
      <header className="relative bg-gradient-to-b from-amber-950 via-stone-900 to-amber-900 text-white pt-16 pb-24 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-200 text-xs font-bold tracking-wider uppercase mb-4 backdrop-blur-md">
            <span>🏮</span> Smart Travel Guide • 加賀百万石 金沢
          </div>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black leading-tight tracking-tight mb-6">
            【金沢旅行で後悔したこと<span className="text-amber-400">ワースト5</span>】
            <br />
            月曜定休トラップ＆21美予約忘れ！海鮮丼行列を回避する持ち物＆知恵袋
          </h1>
          <p className="text-amber-100 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-medium">
            風情あふれる城下町・金沢で観光客がハマりやすい『見落としがちな罠』。
            突然の通り雨、美術館の予約漏れ、月曜一斉定休日、市場の行列地獄を完全回避するための必勝ノウハウ。
          </p>
        </div>
      </header>

      {/* 楽天トラベルクーポンプロモーション */}
      <section className="max-w-4xl mx-auto px-4 -mt-10 relative z-20">
        <SpecialCouponBanner />
      </section>

      {/* メインコンテンツ */}
      <div className="max-w-4xl mx-auto px-4 mt-12 space-y-16">
        {/* セクション1：後悔ワースト5 */}
        <section>
          <div className="border-l-4 border-amber-600 pl-4 mb-8">
            <span className="text-amber-700 text-xs font-black tracking-widest uppercase">KANAZAWA REGRETS</span>
            <h2 className="text-2xl sm:text-3xl font-black text-stone-900 mt-1">
              旅の満足度が激変！金沢観光でありがちな後悔ワースト5
            </h2>
            <p className="text-stone-600 text-xs sm:text-sm mt-1">
              事前の下調べがないと当日必ず悔しい思いをするリアルな失敗パターン。
            </p>
          </div>

          <div className="space-y-6">
            {worstRegrets.map((item, idx) => (
              <div
                key={idx}
                className="bg-white border-2 border-amber-200/80 rounded-3xl p-6 sm:p-7 shadow-sm hover:shadow-md transition relative overflow-hidden"
              >
                <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <span className="bg-gradient-to-r from-amber-600 to-amber-800 text-white font-black text-xs px-3 py-1 rounded-full shadow-sm">
                      {item.rank}
                    </span>
                    <span className="text-xs font-bold text-amber-900 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200">
                      {item.tag}
                    </span>
                  </div>
                  <div className="text-xs font-black text-stone-400">
                    後悔実感度 <span className="text-amber-600 text-base">{item.regretScore}</span>
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl font-black text-stone-900 mb-3 leading-snug">
                  {item.title}
                </h3>

                <div className="text-xs sm:text-sm text-stone-600 leading-relaxed bg-amber-50/40 p-4 rounded-2xl border border-amber-100 mb-4">
                  <strong className="text-amber-950 block mb-1 font-bold">💥 実際に起きた失敗談：</strong>
                  {item.incident}
                </div>

                <div className="text-xs sm:text-sm text-stone-800 leading-relaxed bg-emerald-50/80 p-4 rounded-2xl border border-emerald-200">
                  <strong className="text-emerald-950 block mb-1 font-bold">🛡️ 回避するプロの知恵袋：</strong>
                  {item.countermeasure}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* セクション2：金沢持ち物チェックリスト */}
        <section className="bg-white border-2 border-amber-200/80 rounded-3xl p-6 sm:p-8 shadow-sm">
          <div className="border-l-4 border-amber-600 pl-4 mb-6">
            <span className="text-amber-700 text-xs font-black tracking-widest uppercase">PACKING SURVIVAL LIST</span>
            <h2 className="text-2xl sm:text-3xl font-black text-stone-900 mt-1">
              金沢散策を120%楽しむための持ち物＆準備リスト
            </h2>
            <p className="text-stone-600 text-xs sm:text-sm mt-1">
              石川・北陸ならではの気候と街歩きに最適化した必携アイテム。
            </p>
          </div>

          <div className="space-y-6">
            {packingChecklist.map((group, gIdx) => (
              <div key={gIdx} className="border border-amber-100 rounded-2xl p-5 bg-amber-50/30">
                <div className="flex items-center gap-2 mb-4">
                  <span className={`text-[11px] font-black px-2.5 py-0.5 rounded-full ${group.badgeColor}`}>
                    {group.badge}
                  </span>
                  <h3 className="text-base font-bold text-stone-900">{group.category}</h3>
                </div>

                <ul className="space-y-3">
                  {group.items.map((it, itIdx) => (
                    <li key={itIdx} className="bg-white p-3.5 rounded-xl border border-amber-200/70 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                      <div className="font-bold text-xs sm:text-sm text-stone-900 flex items-center gap-2">
                        <span className="text-amber-600 font-black">✔</span>
                        <span>{it.name}</span>
                      </div>
                      <div className="text-[11px] sm:text-xs text-stone-500 sm:text-right">
                        {it.reason}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* セクション3：金沢駅前・観光便利ホテル */}
        <section>
          <div className="border-l-4 border-amber-600 pl-4 mb-8">
            <span className="text-amber-700 text-xs font-black tracking-widest uppercase">STATION & DOWNTOWN HOTELS</span>
            <h2 className="text-2xl sm:text-3xl font-black text-stone-900 mt-1">
              雨でも濡れない駅近＆観光拠点！金沢のおすすめホテル
            </h2>
            <p className="text-stone-600 text-xs sm:text-sm mt-1">
              金沢駅直結・徒歩圏内、大浴場付きや近江町市場至近のコスパ抜群宿。
            </p>
          </div>

          {hotels.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {hotels.map((hotel) => {
                const minCharge = hotel.hotelMinCharge ? hotel.hotelMinCharge.toLocaleString() : null;
                return (
                  <div
                    key={hotel.hotelNo}
                    className="flex flex-col justify-between bg-white border-2 border-amber-200/80 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:border-amber-400 transition group"
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
                          <div className="absolute top-3 left-3 bg-stone-900/80 backdrop-blur-md px-2.5 py-0.5 rounded-full text-[10px] font-bold text-amber-200 border border-amber-500/30">
                            最寄: {hotel.nearestStation || "金沢"}
                          </div>
                          {hotel.reviewAverage && (
                            <div className="absolute top-3 right-3 bg-amber-600 text-white px-2 py-0.5 rounded-full text-xs font-black shadow flex items-center gap-1">
                              <span>★</span>
                              <span>{hotel.reviewAverage.toFixed(2)}</span>
                            </div>
                          )}
                        </div>
                      )}
                      <div className="p-5">
                        <h3 className="text-base sm:text-lg font-bold text-stone-900 mb-2 group-hover:text-amber-600 transition leading-snug">
                          {hotel.hotelName}
                        </h3>
                        <p className="text-xs text-stone-500 mb-2">
                          {hotel.address1} {hotel.address2}
                        </p>
                        <p className="text-xs text-stone-600 leading-relaxed line-clamp-3 mb-3">
                          {hotel.hotelSpecial || "金沢駅や主要観光名所へのフットワークが抜群の快適ホテル。"}
                        </p>
                        {hotel.access && (
                          <div className="text-[11px] text-amber-950 bg-amber-50 p-2 rounded-xl border border-amber-200">
                            📍 {hotel.access}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="p-5 pt-0 border-t border-amber-100 mt-2 flex items-center justify-between">
                      <div>
                        <span className="text-[10px] text-stone-500 block">参考最安（1名〜）</span>
                        <span className="text-base font-black text-amber-600">
                          {minCharge ? `¥${minCharge}〜` : "プラン確認"}
                        </span>
                      </div>
                      <a
                        href={hotel.affiliateUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-bold text-xs shadow hover:shadow-amber-600/20 transition"
                      >
                        <span>空室・プランを見る</span>
                        <span>→</span>
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="bg-white rounded-2xl p-8 text-center text-stone-500 border border-stone-200">
              現在、金沢エリアの宿泊プランを読み込み中です。
            </div>
          )}
        </section>

        {/* 内部リンク回遊 */}
        <div className="pt-8 border-t border-amber-200 text-center">
          <p className="text-xs text-stone-500 mb-3">あわせて読みたい金沢旅行ガイド</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/kanazawa-travel-budget-guide"
              className="text-xs sm:text-sm font-semibold text-amber-800 hover:text-amber-900 underline underline-offset-4"
            >
              【金沢旅行 予算ガイド】1泊2日・2泊3日の宿泊費・食費・新幹線代シミュレーション
            </Link>
            <span className="text-stone-300">|</span>
            <Link
              href="/kanazawa-rainy-day-indoor-guide"
              className="text-xs sm:text-sm font-semibold text-amber-800 hover:text-amber-900 underline underline-offset-4"
            >
              【金沢 雨の日観光】雨情に浸る美術館・室内体験・近江町市場グルメ
            </Link>
            <span className="text-stone-300">|</span>
            <Link
              href="/tokyo-kanazawa-bus-vs-shinkansen-guide"
              className="text-xs sm:text-sm font-semibold text-amber-800 hover:text-amber-900 underline underline-offset-4"
            >
              【東京〜金沢 移動比較】北陸新幹線かがやき vs 高速バス 料金・所要時間・快適度
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
