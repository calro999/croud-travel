import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【草津温泉で後悔したことワースト5】銀製品が真っ黒に変色！？強酸性泉の注意点＆必須持ち物チェックリスト ｜ 日本全国・旅宿クラウド",
  description: "草津温泉に行く前に絶対読んでほしいリアル失敗談！pH2.1の強酸性泉でシルバーアクセサリーが変色する事故、湯あたり対策、白いタオルが黄色く染まる問題、持っていくべき便利グッズ完全リスト。",
  keywords: [
    "草津温泉 持ち物",
    "草津温泉 失敗談",
    "草津温泉 シルバー 変色",
    "草津温泉 服装",
    "草津温泉 湯あたり",
    "草津温泉 便利グッズ",
    "草津温泉 宿泊"
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
      return data["kusatsu-onsen-packing-mistakes-silver-guide"]?.hotels || [];
    }
  } catch (e) {
    console.error("Failed to load hotels for kusatsu-onsen-packing-mistakes-silver-guide", e);
  }
  return [];
}

export default function KusatsuPackingMistakesPage() {
  const hotels = loadHotels();

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 md:py-16 font-sans text-slate-800 space-y-12">
      {/* ヒーローヘッダー - Amber & 硫黄イエローの温もりと警告感 */}
      <section className="bg-gradient-to-br from-amber-500 via-amber-600 to-yellow-600 rounded-3xl p-8 md:p-12 text-white shadow-xl relative overflow-hidden">
        <div className="absolute -top-16 -right-16 w-56 h-56 bg-white/10 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-10 w-64 h-64 bg-amber-400/20 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 bg-amber-900/40 backdrop-blur-sm border border-amber-300/40 text-amber-100 text-xs font-bold px-3.5 py-1.5 rounded-full">
            <span>⚠️</span> 実録！現地で青ざめる前に知っておくべきこと
          </div>
          <h1 className="text-2xl md:text-4xl lg:text-[2.6rem] font-black tracking-tight leading-snug">
            【草津温泉で後悔したことワースト5】<br />
            銀製品が真っ黒に変色！？強酸性泉の落とし穴＆持ち物リスト
          </h1>
          <p className="text-amber-100 text-sm md:text-base leading-relaxed max-w-2xl pt-2">
            日本屈指の天下の名湯・草津温泉。毎分3万リットル以上の湧出量とpH2.1前後の圧倒的な酸性度が魅力ですが、そのパワフルさゆえに「知らずに行って大失敗した…」と泣き寝入りする旅行者が後を絶ちません。実際のトラブル事例から学んで、万全の装備で出かけましょう！
          </p>
        </div>
      </section>

      {/* 警告アラートカード */}
      <div className="bg-amber-50 border-2 border-amber-400/80 rounded-2xl p-6 shadow-sm">
        <div className="flex items-start gap-3">
          <span className="text-2xl mt-0.5">💡</span>
          <div>
            <h2 className="text-lg font-bold text-amber-950 mb-1">
              草津温泉の泉質スペック：pH2.1（塩酸・硫酸・硫化水素）
            </h2>
            <p className="text-sm text-amber-900/90 leading-relaxed">
              草津の湯はレモン果汁と同等以上の強酸性です。1円玉を浸けると1週間で溶け、雑菌は数秒で死滅すると言われるほどの殺菌力。肌の角質を溶かすピーリング効果も抜群ですが、一般的な温泉（弱アルカリ性や単純温泉）と同じノリで入ると痛い目を見ます。
            </p>
          </div>
        </div>
      </div>

      {/* ワースト5解説セクション */}
      <section className="space-y-6">
        <div className="border-b-2 border-amber-200 pb-3">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-700">Reality Check</span>
          <h2 className="text-2xl md:text-3xl font-black text-slate-900">
            草津温泉で旅行者が実際に後悔したことワースト5
          </h2>
        </div>

        {/* ワースト1 */}
        <div className="bg-white rounded-2xl p-6 md:p-8 border border-amber-200/70 shadow-sm relative pl-6 md:pl-8 border-l-8 border-l-amber-600">
          <div className="flex items-center gap-3 mb-3">
            <span className="bg-amber-600 text-white font-black text-sm px-2.5 py-0.5 rounded-full">第1位</span>
            <h3 className="text-lg md:text-xl font-bold text-slate-900">
              お気に入りのシルバーアクセサリー（銀製品）が一瞬で真っ黒に
            </h3>
          </div>
          <p className="text-sm md:text-base text-slate-700 leading-relaxed mb-4">
            一番多い絶叫ポイントがこれです。ネックレスや指輪をつけたまま湯船に入った瞬間、あるいは湯畑周辺の強い湯煙を浴びただけで、硫化反応により銀が瞬時に黒ずみ（硫化銀化）ます。
          </p>
          <div className="bg-amber-50/70 rounded-xl p-4 border border-amber-200 text-xs md:text-sm text-amber-950 space-y-1.5">
            <div className="font-bold text-amber-800">📌 回避策＆リカバリー術：</div>
            <p>・入浴前はもちろん、宿に着いた時点で貴金属はすべて外してポーチに封印するのが鉄則。</p>
            <p>・プラチナや純金（K18以上）は比較的変色しにくいですが、割り金（合金）部分が酸化・変色するリスクがあるため外すのが安全。</p>
            <p>・万が一黒くなってしまったら、アルミホイルを敷いた耐熱皿に重曹と熱湯を注いで浸けると還元作用でピカピカに戻ります！</p>
          </div>
        </div>

        {/* ワースト2 */}
        <div className="bg-white rounded-2xl p-6 md:p-8 border border-amber-200/70 shadow-sm relative pl-6 md:pl-8 border-l-8 border-l-amber-500">
          <div className="flex items-center gap-3 mb-3">
            <span className="bg-amber-500 text-white font-black text-sm px-2.5 py-0.5 rounded-full">第2位</span>
            <h3 className="text-lg md:text-xl font-bold text-slate-900">
              顔を洗って激痛！目や剃刀負けの傷口にしみて悶絶
            </h3>
          </div>
          <p className="text-sm md:text-base text-slate-700 leading-relaxed mb-4">
            美肌の湯だからと温泉水でバシャバシャ顔を洗った瞬間、目に強酸が染みて激痛が走ります。また、前夜や当朝にヒゲ剃り・除毛をした箇所、小さな擦り傷にも激しく染みて痛みを伴います。
          </p>
          <div className="bg-amber-50/70 rounded-xl p-4 border border-amber-200 text-xs md:text-sm text-amber-950">
            <div className="font-bold text-amber-800 mb-1">📌 回避策：</div>
            <p>目に入ったら絶対に擦らず、洗い場のシャワー（真水）で直ちに洗い流しましょう。洗顔は温泉水ではなく水道水で行うのが基本です。また、旅行前日はカミソリでの深剃りを避けるのが得策です。</p>
          </div>
        </div>

        {/* ワースト3 */}
        <div className="bg-white rounded-2xl p-6 md:p-8 border border-amber-200/70 shadow-sm relative pl-6 md:pl-8 border-l-8 border-l-yellow-500">
          <div className="flex items-center gap-3 mb-3">
            <span className="bg-yellow-500 text-white font-black text-sm px-2.5 py-0.5 rounded-full">第3位</span>
            <h3 className="text-lg md:text-xl font-bold text-slate-900">
              お気に入りの白タオルや服が硫黄と酸で黄ばみ・臭い移り
            </h3>
          </div>
          <p className="text-sm md:text-base text-slate-700 leading-relaxed mb-4">
            高級な白い今治タオルや、お気に入りの白いTシャツを持参して大後悔するパターン。草津の硫黄成分や湯の花、微量な鉄分が付着すると黄色く染まり、洗濯しても二度と落ちません。またスーツケース内に硫黄臭が充満します。
          </p>
          <div className="bg-amber-50/70 rounded-xl p-4 border border-amber-200 text-xs md:text-sm text-amber-950">
            <div className="font-bold text-amber-800 mb-1">📌 回避策：</div>
            <p>使い捨て前提の薄手フェイスタオルか、宿の名入れ温泉タオル（染まっても気にならないもの）を使いましょう。使用後の濡れタオルは密封ジップロックに密閉して持ち帰ると衣類への臭い移りを防げます。</p>
          </div>
        </div>

        {/* ワースト4 */}
        <div className="bg-white rounded-2xl p-6 md:p-8 border border-amber-200/70 shadow-sm relative pl-6 md:pl-8 border-l-8 border-l-amber-400">
          <div className="flex items-center gap-3 mb-3">
            <span className="bg-amber-400 text-slate-900 font-black text-sm px-2.5 py-0.5 rounded-full">第4位</span>
            <h3 className="text-lg md:text-xl font-bold text-slate-900">
              「草津よいとこ」と調子に乗って何軒もハシゴ…強烈な湯あたり
            </h3>
          </div>
          <p className="text-sm md:text-base text-slate-700 leading-relaxed mb-4">
            「大滝乃湯」「西の河原露天風呂」「御座之湯」と三名湯巡りをしたり無料の共同浴場をハシゴした結果、夕方には体がだるくて起き上がれなくなる「湯あたり」を起こす人が続出します。
          </p>
          <div className="bg-amber-50/70 rounded-xl p-4 border border-amber-200 text-xs md:text-sm text-amber-950">
            <div className="font-bold text-amber-800 mb-1">📌 回避策：</div>
            <p>1回の入浴は5分〜10分以内にとどめ、1日の入浴回数は最大2〜3回まで。入浴前後には必ずコップ1杯以上の水分補給（麦茶やスポーツドリンク）を行い、肌がデリケートな人は最後にシャワーの真水で上がり湯をして酸を流しましょう。</p>
          </div>
        </div>

        {/* ワースト5 */}
        <div className="bg-white rounded-2xl p-6 md:p-8 border border-amber-200/70 shadow-sm relative pl-6 md:pl-8 border-l-8 border-l-slate-400">
          <div className="flex items-center gap-3 mb-3">
            <span className="bg-slate-400 text-white font-black text-sm px-2.5 py-0.5 rounded-full">第5位</span>
            <h3 className="text-lg md:text-xl font-bold text-slate-900">
              標高1,200mの寒さを舐めていた！湯上がり湯冷めで風邪をひく
            </h3>
          </div>
          <p className="text-sm md:text-base text-slate-700 leading-relaxed mb-4">
            草津温泉街は標高約1,200メートルの高地に位置します。東京や平野部と比べて気温は常に7〜10℃低く、春や秋でも夜は一桁台まで冷え込みます。浴衣一枚にペラペラの羽織で湯畑のライトアップを見に行き、激しい湯冷めをする人が多数。
          </p>
          <div className="bg-amber-50/70 rounded-xl p-4 border border-amber-200 text-xs md:text-sm text-amber-950">
            <div className="font-bold text-amber-800 mb-1">📌 回避策：</div>
            <p>夏でも薄手のパーカーやカーディガン、春・秋・冬はインナーダウンやストールが必須。また、坂道と濡れた石畳が多いため、ヒールや滑りやすい革靴は転倒の原因になります。</p>
          </div>
        </div>
      </section>

      {/* 持ち物チェックリスト */}
      <section className="bg-white rounded-3xl p-6 md:p-10 border border-amber-200 shadow-md space-y-6">
        <div className="text-center space-y-2">
          <span className="bg-amber-100 text-amber-800 text-xs font-bold px-3 py-1 rounded-full">Packing Checklist</span>
          <h2 className="text-2xl md:text-3xl font-black text-slate-900">
            草津温泉 必須＆持って行って助かった持ち物チェックリスト
          </h2>
          <p className="text-slate-600 text-xs md:text-sm">
            パッキング時にそのまま見返せる実用リストです。
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="border border-amber-200/80 rounded-2xl p-5 bg-amber-50/40">
            <h3 className="font-bold text-amber-900 mb-3 flex items-center gap-2 text-base">
              <span>🎒</span> 必須レベル（忘れると現地で困る）
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <span className="text-amber-600 font-bold">☑</span>
                <span><strong>ジッパー付き密封保存袋（ジップロック）：</strong> 硫黄臭遮断＆濡れタオル密閉用</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-600 font-bold">☑</span>
                <span><strong>アクセサリー専用ケース/巾着：</strong> 宿に到着後すぐに金属類を隔離するため</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-600 font-bold">☑</span>
                <span><strong>高保湿ボディクリーム＆リップクリーム：</strong> 強酸で皮脂が落ちるため入浴後の乾燥対策</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-600 font-bold">☑</span>
                <span><strong>滑りにくいスニーカーやフラットシューズ：</strong> 湯畑周りの坂道＆濡れた石畳対策</span>
              </li>
            </ul>
          </div>

          <div className="border border-amber-200/80 rounded-2xl p-5 bg-amber-50/40">
            <h3 className="font-bold text-amber-900 mb-3 flex items-center gap-2 text-base">
              <span>✨</span> あると感動する便利アイテム
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <span className="text-amber-600 font-bold">☑</span>
                <span><strong>使い捨ての薄手フェイスタオル：</strong> 共同浴場巡り用。黄ばんでも捨てて帰れる</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-600 font-bold">☑</span>
                <span><strong>重曹小袋（予備）：</strong> 万が一シルバーが変色したときの緊急レスキュー用</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-600 font-bold">☑</span>
                <span><strong>羽織れるコンパクト防寒着：</strong> 標高1,200mの夜風対策（ウルトラライトダウン等）</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-600 font-bold">☑</span>
                <span><strong>小銭入れ（100円玉）：</strong> コインロッカーや足湯巡りの自動販売機用</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 楽天トラベル割引クーポン＆湯畑周辺おすすめ旅館セクション */}
      <section className="space-y-6">
        <div className="bg-gradient-to-r from-red-600 to-rose-600 rounded-3xl p-6 md:p-8 text-white shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="bg-white/20 text-white text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider inline-block">
              Rakuten Travel Deal
            </span>
            <h3 className="text-xl md:text-2xl font-black">
              草津温泉の旅館で使える「5と0のつく日」最大20%OFFクーポン
            </h3>
            <p className="text-rose-100 text-xs md:text-sm">
              草津の人気老舗宿・湯畑前宿は早期満室になりがち。クーポン獲得＆事前エントリーでお得に予約しましょう。
            </p>
          </div>
          <a
            href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fcamp%2F50coupon%2F"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-rose-600 hover:bg-rose-50 font-black px-6 py-3.5 rounded-full text-sm shadow-md transition-all shrink-0 text-center"
          >
            楽天トラベル限定クーポンを見る →
          </a>
        </div>

        <div className="border-b-2 border-amber-200 pb-3">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-700">Featured Accommodations</span>
          <h2 className="text-2xl md:text-3xl font-black text-slate-900">
            湯畑徒歩圏内！泉質と立地で選ぶ草津温泉おすすめ旅館
          </h2>
          <p className="text-slate-600 text-xs md:text-sm mt-1">
            湯畑の散策にすぐ出かけられ、良質な源泉掛け流しを堪能できる高評価宿を厳選しました。
          </p>
        </div>

        <div className="grid gap-6">
          {hotels.slice(0, 4).map((hotel) => (
            <div
              key={hotel.hotelNo}
              className="bg-white rounded-3xl p-5 md:p-6 border border-slate-200 hover:border-amber-400 shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row gap-6 items-start"
            >
              {hotel.hotelImageUrl && (
                <div className="w-full md:w-56 h-44 rounded-2xl overflow-hidden bg-slate-100 shrink-0">
                  <img
                    src={hotel.hotelImageUrl}
                    alt={hotel.hotelName}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
              )}
              <div className="flex-1 space-y-3 w-full">
                <div className="flex flex-wrap items-center gap-2">
                  {hotel.reviewAverage && (
                    <span className="bg-amber-100 text-amber-900 text-xs font-extrabold px-2.5 py-1 rounded-full flex items-center gap-1">
                      ★ {hotel.reviewAverage.toFixed(2)}
                      {hotel.reviewCount && <span className="font-normal text-amber-700">({hotel.reviewCount}件)</span>}
                    </span>
                  )}
                  {hotel.nearestStation && (
                    <span className="bg-slate-100 text-slate-600 text-xs px-2.5 py-1 rounded-full">
                      最寄: {hotel.nearestStation}
                    </span>
                  )}
                </div>

                <h3 className="text-lg md:text-xl font-bold text-slate-900 leading-snug">
                  {hotel.hotelName}
                </h3>

                <p className="text-xs md:text-sm text-slate-600 line-clamp-2">
                  {hotel.hotelSpecial || "草津温泉の極上源泉を掛け流しで楽しめる温泉宿。観光名所へのアクセスも良好です。"}
                </p>

                {hotel.access && (
                  <p className="text-xs text-slate-500">
                    <span className="font-medium text-slate-700">アクセス：</span>{hotel.access}
                  </p>
                )}

                <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-slate-100">
                  <div>
                    {hotel.hotelMinCharge ? (
                      <div className="text-xs text-slate-500">
                        最安目安：<span className="text-lg font-black text-amber-700">{hotel.hotelMinCharge.toLocaleString()}円〜</span> /人
                      </div>
                    ) : (
                      <div className="text-xs text-slate-400">プラン詳細はリンク先で確認</div>
                    )}
                  </div>

                  <a
                    href={hotel.affiliateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-amber-600 hover:bg-amber-700 text-white text-xs md:text-sm font-bold px-5 py-2.5 rounded-full shadow transition-colors"
                  >
                    楽天トラベルで空室・プランを見る →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 内部リンクカード */}
      <section className="bg-slate-50 rounded-3xl p-6 md:p-8 border border-slate-200 space-y-4">
        <h3 className="text-lg font-bold text-slate-900">草津温泉の関連記事もあわせてチェック</h3>
        <div className="grid md:grid-cols-3 gap-4 text-sm">
          <Link
            href="/kusatsu-onsen-travel-budget-guide"
            className="p-4 bg-white rounded-2xl border border-slate-200 hover:border-amber-400 hover:shadow-sm transition group"
          >
            <div className="text-amber-700 text-xs font-bold mb-1">費用シミュレーション</div>
            <div className="font-bold text-slate-800 group-hover:text-amber-600">
              草津温泉 1泊2日いくらかかる？予算ガイド
            </div>
            <p className="text-xs text-slate-500 mt-1">宿泊・食事・湯めぐりの総額内訳</p>
          </Link>

          <Link
            href="/kusatsu-vs-ikaho-onsen-comparison"
            className="p-4 bg-white rounded-2xl border border-slate-200 hover:border-amber-400 hover:shadow-sm transition group"
          >
            <div className="text-amber-700 text-xs font-bold mb-1">温泉地比較</div>
            <div className="font-bold text-slate-800 group-hover:text-amber-600">
              草津 vs 伊香保 どっちがいい？7項目で比較
            </div>
            <p className="text-xs text-slate-500 mt-1">泉質や街歩き、アクセスを比較解説</p>
          </Link>

          <Link
            href="/tokyo-kusatsu-onsen-highway-bus-guide"
            className="p-4 bg-white rounded-2xl border border-slate-200 hover:border-amber-400 hover:shadow-sm transition group"
          >
            <div className="text-amber-700 text-xs font-bold mb-1">アクセス完全攻略</div>
            <div className="font-bold text-slate-800 group-hover:text-amber-600">
              東京〜草津温泉 高速バス vs 電車 徹底比較
            </div>
            <p className="text-xs text-slate-500 mt-1">乗り換えなし直行バスと特急草津・四万</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
