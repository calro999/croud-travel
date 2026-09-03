import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";
import SpecialCouponBanner from "@/app/components/SpecialCouponBanner";

export const metadata: Metadata = {
  title: "【ディズニー旅行で後悔したことワースト5】スマホ電池切れ・開園待ち寒暖差・靴擦れで地獄を見たリアル失敗談",
  description:
    "東京ディズニーリゾートでありがちな失敗を徹底回避！公式アプリ連動で昼にスマホバッテリーが尽きる悲劇、開園待ちの強風極寒・極暑、新エリアDPA争奪戦の罠、モバイルバッテリーとクッションシート必須リスト。",
  keywords: [
    "ディズニー 後悔 ワースト5",
    "ディズニー 失敗談 持ち物",
    "ディズニー モバイルバッテリー 必須",
    "ディズニー 開園待ち 寒さ対策",
    "ディズニー 新エリア DPA 攻略",
    "ディズニーリゾート ホテル 楽天トラベル"
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
      return data["disney-trip-packing-regrets-worst5-guide"]?.hotels || [];
    }
  } catch (e) {
    console.error("Failed to load hotels for disney-trip-packing-regrets-worst5-guide", e);
  }
  return [];
}

export default function DisneyTripPackingRegretsWorst5Page() {
  const hotels = loadHotels();

  // ディズニー旅行リアル後悔ワースト5
  const worstRegrets = [
    {
      rank: "第1位",
      title: "13時にスマホ残量10％！公式アプリ依存によるバッテリー即死の悲劇",
      tag: "電子チケット・スタンバイパス全滅",
      incident:
        "入園チケット、プレミアアクセス（DPA）、プライオリティパス、モバイルオーダー、スタンバイパス、待ち時間マップ確認…すべてをスマホに頼る現代ディズニー。写真や動画を撮っていると昼過ぎには残量ゼロ寸前に。園内のモバイルバッテリーレンタルスタンドはピーク時に長蛇の列または全台貸出中で、パーク内で途方に暮れる人が続出。",
      countermeasure:
        "10,000〜20,000mAhの急速充電対応モバイルバッテリーを【1人1台】必携。家族やカップルで1台共有は厳禁。接続ケーブルも忘れないこと。",
      regretScore: "99%"
    },
    {
      rank: "第2位",
      title: "「海風を舐めていた…」開園待ち2時間で芯まで冷え切る・熱中症寸前の寒暖差地獄",
      tag: "コンクリート直座りの拷問",
      incident:
        "舞浜は東京湾に面した吹きさらしの埋立地。冬〜春先は冷たい強風が吹き荒れ、冷え切ったコンクリートに直座りするとお尻から体温が奪われ足腰が激痛に。夏は照り返しで早朝から40度近い体感温度になり、入園前から体力を9割削られるケースが後を絶ちません。",
      countermeasure:
        "折りたたみ式クッションマット（ポータブル座布団）と大判ストール/羽織り物は年中必須。冬は靴用カイロ＋防風アウター、夏は日傘＋冷感タオルを。",
      regretScore: "94%"
    },
    {
      rank: "第3位",
      title: "新エリア・人気アトラクションのDPA争奪戦に惨敗！入園直後の通信混雑罠",
      tag: "入園直後5分間の生死を分ける勝負",
      incident:
        "ファンタジースプリングスや美女と野獣などの人気アトラクションは、開園直後にディズニー・プレミアアクセス（DPA）やスタンバイパスが瞬殺。パークエントランス付近は数万人の同時アクセスで通信キャリア回線が極度に重くなり、クレカ決済エラーで弾かれている間に完売して涙を呑むゲストが多数。",
      countermeasure:
        "入園前にアプリのカード情報登録・3Dセキュア認証を済ませ、電波が詰まったらWi-FiをOFFにして少し歩きながら素早く決済画面へ進む手順を予習しておくこと。",
      regretScore: "91%"
    },
    {
      rank: "第4位",
      title: "「可愛いから」と選んだ靴で2万歩歩破！両足靴擦れ＆足裏激痛リタイア",
      tag: "映え重視パンプス・おろしたてスニーカーの罠",
      incident:
        "ディズニーランド・シーは普通に楽しむだけでも1日で15,000〜25,000歩（約12〜18km）歩きます。コーディネートを優先したヒールや硬い革靴、おろしたてのスニーカーを履いていき、昼前にはかかとが血まみれ・足裏の激痛でベンチから動けなくなる人が続出します。",
      countermeasure:
        "履き慣れたクッション性の高いランニングシューズ一択。万が一に備えてクッション性絆創膏（キズパワーパッド系）を最低5枚ポーチに常備しておくべし。",
      regretScore: "88%"
    },
    {
      rank: "第5位",
      title: "レストラン予約なしでランチ難民！12時のレジ待ち45分で貴重な時間を浪費",
      tag: "空腹のイライラとスケジュール崩壊",
      incident:
        "プライオリティ・シーティング（事前予約）を取らず、モバイルオーダーも朝のうちに枠を確保しなかった結果、12時前後に主要レストランへ向かうと建物外まで伸びる絶望の長蛇の列。注文と受け取りだけで40〜60分を消費し、パレードの場所取りに間に合わないダブルパンチに。",
      countermeasure:
        "入園ゲートを通過した瞬間に、昼食（11時台）と夕食（16時台半端な時間）の「モバイルオーダー」を真っ先に枠押さえするのが現代ディズニーの鉄則。",
      regretScore: "85%"
    }
  ];

  // パッキングサバイバル持ち物チェックリスト
  const packingChecklist = [
    {
      category: "絶対忘れると詰む【生命線3点】",
      badge: "超必須",
      badgeColor: "bg-rose-600 text-white",
      items: [
        { name: "大容量モバイルバッテリー（10,000mAh以上）＋専用コード", reason: "公式アプリ（DPA・マップ・撮影）常時稼働のため必須。1人1台。" },
        { name: "折りたたみコンパクト座布団（クッションシート）", reason: "開園待ちやパレード待ちの冷たい硬いアスファルトから腰・お尻を守る。" },
        { name: "クレジットカード（アプリ登録済み＋3Dセキュア解除）", reason: "DPA購入やモバイルオーダー決済を0コンマ1秒でも速く完了させる。" }
      ]
    },
    {
      category: "快適度が天と地ほど変わる【身体防衛グッズ】",
      badge: "推奨",
      badgeColor: "bg-rose-100 text-rose-800 border border-rose-300",
      items: [
        { name: "厚手靴下＋クッション絆創膏（靴擦れ防止）", reason: "1日2万歩歩く舞浜では、摩擦対策の有無が午後の活動限界を左右。" },
        { name: "チャック付き密閉袋（ジップロック複数枚）", reason: "ポップコーンの残り、濡れたタオル、食べかけスナックの一時保管に万能。" },
        { name: "折りたたみエコバッグ（大サイズ）", reason: "お土産袋が有料化された今、パーク限定グッズのまとめ買いや防寒具入れに。" },
        { name: "体温調節用の羽織り（軽量ウインドブレーカー）", reason: "舞浜特有の海風は夕方から急変。夏場でも夜は冷えることがある。" }
      ]
    },
    {
      category: "子連れ・雨天・季節の【特効アイテム】",
      badge: "シーズン",
      badgeColor: "bg-amber-100 text-amber-800 border border-amber-300",
      items: [
        { name: "折りたたみ軽量晴雨兼用傘", reason: "突然のスコールや真夏のエントランス炎天下待ちにこれ1本で対応。" },
        { name: "ベビーカー用レインカバー＆目印バンダナ", reason: "アトラクション前のベビーカー置き場は数百台が並ぶため目印が命。" },
        { name: "ウェットティッシュ（アルコール＆ノンアルコール）", reason: "チュロスやチキンで手がベタついた時、近くに手洗い場がないストレスをゼロに。" }
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-[#fff5f5] text-stone-800 antialiased pb-20">
      {/* ヒーローヘッダー */}
      <header className="relative bg-gradient-to-b from-rose-950 via-rose-900 to-rose-800 text-white pt-16 pb-24 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#f43f5e_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/20 border border-rose-400/30 text-rose-200 text-xs font-bold tracking-wider uppercase mb-4 backdrop-blur-md">
            <span>⚠️</span> Brutal Reality Guide • 東京ディズニーリゾート
          </div>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black leading-tight tracking-tight mb-6">
            【ディズニー旅行で後悔したこと<span className="text-rose-400">ワースト5</span>】
            <br />
            スマホ電池切れ・開園待ち寒暖差・靴擦れで地獄を見たリアル失敗談
          </h1>
          <p className="text-rose-100 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-medium">
            夢の国で待ち受ける「現実の厳しさ」。現代ディズニーはスマホと体調管理の準備不足が命取りになります。
            何万人もの先輩ゲストが涙を流したリアルな失敗と、後悔をゼロにするパッキング装備を完全網羅。
          </p>
        </div>
      </header>

      {/* 楽天トラベルクーポンプロモーション */}
      <section className="max-w-4xl mx-auto px-4 -mt-10 relative z-20">
        <SpecialCouponBanner />
      </section>

      {/* 本文エリア */}
      <div className="max-w-4xl mx-auto px-4 mt-12 space-y-16">
        {/* セクション1：後悔ワースト5 */}
        <section>
          <div className="border-l-4 border-rose-600 pl-4 mb-8">
            <span className="text-rose-700 text-xs font-black tracking-widest uppercase">REGRET RANKING</span>
            <h2 className="text-2xl sm:text-3xl font-black text-stone-900 mt-1">
              夢の国が一瞬で修羅場に！ディズニー後悔ワースト5
            </h2>
            <p className="text-stone-600 text-xs sm:text-sm mt-1">
              現地で実際に「これさえ知っていれば…」と痛感するリアルなトラブルと回避策。
            </p>
          </div>

          <div className="space-y-6">
            {worstRegrets.map((item, idx) => (
              <div
                key={idx}
                className="bg-white border-2 border-rose-200 rounded-3xl p-6 sm:p-7 shadow-sm hover:shadow-md transition relative overflow-hidden"
              >
                <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <span className="bg-gradient-to-r from-rose-600 to-rose-700 text-white font-black text-xs px-3 py-1 rounded-full shadow-sm">
                      {item.rank}
                    </span>
                    <span className="text-xs font-bold text-rose-700 bg-rose-50 px-2.5 py-0.5 rounded-full border border-rose-200">
                      {item.tag}
                    </span>
                  </div>
                  <div className="text-xs font-black text-stone-400">
                    後悔度共感率 <span className="text-rose-600 text-base">{item.regretScore}</span>
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl font-black text-stone-900 mb-3 leading-snug">
                  {item.title}
                </h3>

                <div className="text-xs sm:text-sm text-stone-600 leading-relaxed bg-rose-50/40 p-4 rounded-2xl border border-rose-100 mb-4">
                  <strong className="text-rose-950 block mb-1 font-bold">💥 実際に起きた大惨事：</strong>
                  {item.incident}
                </div>

                <div className="text-xs sm:text-sm text-stone-800 leading-relaxed bg-emerald-50/70 p-4 rounded-2xl border border-emerald-200">
                  <strong className="text-emerald-900 block mb-1 font-bold">🛡️ 回避するプロの知恵袋：</strong>
                  {item.countermeasure}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* セクション2：持ち物サバイバルチェックリスト */}
        <section className="bg-white border-2 border-rose-200 rounded-3xl p-6 sm:p-8 shadow-sm">
          <div className="border-l-4 border-rose-600 pl-4 mb-6">
            <span className="text-rose-700 text-xs font-black tracking-widest uppercase">PACKING SURVIVAL LIST</span>
            <h2 className="text-2xl sm:text-3xl font-black text-stone-900 mt-1">
              ディズニー完全攻略！パッキング・サバイバル装備表
            </h2>
            <p className="text-stone-600 text-xs sm:text-sm mt-1">
              リュックにこれが入っているだけで安心感が100倍変わる必須アイテム一覧。
            </p>
          </div>

          <div className="space-y-6">
            {packingChecklist.map((group, gIdx) => (
              <div key={gIdx} className="border border-rose-100 rounded-2xl p-5 bg-rose-50/30">
                <div className="flex items-center gap-2 mb-4">
                  <span className={`text-[11px] font-black px-2.5 py-0.5 rounded-full ${group.badgeColor}`}>
                    {group.badge}
                  </span>
                  <h3 className="text-base font-bold text-stone-900">{group.category}</h3>
                </div>

                <ul className="space-y-3">
                  {group.items.map((it, itIdx) => (
                    <li key={itIdx} className="bg-white p-3.5 rounded-xl border border-rose-200/70 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                      <div className="font-bold text-xs sm:text-sm text-stone-900 flex items-center gap-2">
                        <span className="text-rose-500 font-black">✔</span>
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

        {/* セクション3：疲労困憊を防ぐ！TDR周辺・駅チカ宿 */}
        <section>
          <div className="border-l-4 border-rose-600 pl-4 mb-8">
            <span className="text-rose-700 text-xs font-black tracking-widest uppercase">PARK ACCESS HOTELS</span>
            <h2 className="text-2xl sm:text-3xl font-black text-stone-900 mt-1">
              閉園後の満員電車を完全回避！大浴場・シャトル付きおすすめ拠点
            </h2>
            <p className="text-stone-600 text-xs sm:text-sm mt-1">
              2万歩歩いた足を大浴場や温泉で伸ばせる！舞浜アクセス抜群の楽天トラベル高評価ホテル。
            </p>
          </div>

          {hotels.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {hotels.map((hotel) => {
                const minCharge = hotel.hotelMinCharge ? hotel.hotelMinCharge.toLocaleString() : null;
                return (
                  <div
                    key={hotel.hotelNo}
                    className="flex flex-col justify-between bg-white border-2 border-rose-200/90 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:border-rose-400 transition group"
                  >
                    <div>
                      {hotel.hotelImageUrl && (
                        <div className="h-48 overflow-hidden relative">
                          <img
                            src={hotel.hotelImageUrl}
                            alt={hotel.hotelName}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            loading="lazy"
                          />
                          <div className="absolute top-3 left-3 bg-stone-900/80 backdrop-blur-md px-2.5 py-0.5 rounded-full text-[10px] font-bold text-rose-200 border border-rose-500/30">
                            最寄: {hotel.nearestStation || "舞浜・新浦安"}
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
                        <p className="text-xs text-stone-500 mb-2">
                          {hotel.address1} {hotel.address2}
                        </p>
                        <p className="text-xs text-stone-600 leading-relaxed line-clamp-3 mb-3">
                          {hotel.hotelSpecial || "ディズニーリゾート滞在に快適な設備と便利なアクセスを誇る人気ホテル。"}
                        </p>
                        {hotel.access && (
                          <div className="text-[11px] text-rose-900 bg-rose-50 p-2 rounded-xl border border-rose-200">
                            📍 {hotel.access}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="p-5 pt-0 border-t border-rose-100 mt-2 flex items-center justify-between">
                      <div>
                        <span className="text-[10px] text-stone-500 block">参考最安（1名〜）</span>
                        <span className="text-base font-black text-rose-600">
                          {minCharge ? `¥${minCharge}〜` : "プラン確認"}
                        </span>
                      </div>
                      <a
                        href={hotel.affiliateUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-700 hover:to-rose-800 text-white font-bold text-xs shadow hover:shadow-rose-600/20 transition"
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
              現在、ディズニーリゾート周辺ホテルのプランを読み込み中です。
            </div>
          )}
        </section>

        {/* 内部リンク回遊 */}
        <div className="pt-8 border-t border-rose-200 text-center">
          <p className="text-xs text-stone-500 mb-3">あわせて読みたい関連記事</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/tokyo-disney-resort-family-hotel-comparison"
              className="text-xs sm:text-sm font-semibold text-rose-700 hover:text-rose-800 underline underline-offset-4"
            >
              【子連れディズニーホテル徹底比較】無料シャトル・洗い場付きお風呂・添い寝無料の厳選宿
            </Link>
            <span className="text-stone-300">|</span>
            <Link
              href="/tokyo-osaka-bus-vs-shinkansen-guide"
              className="text-xs sm:text-sm font-semibold text-rose-700 hover:text-rose-800 underline underline-offset-4"
            >
              【東京〜大阪 移動徹底比較】夜行バス vs 新幹線 所要時間・料金・快適度まとめ
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
