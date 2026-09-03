import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【上高地ハイキング 服装と靴のリアル失敗談】スニーカーで大丈夫？大正池〜河童橋で後悔しない持ち物完全版 ｜ 日本全国・旅宿クラウド",
  description: "上高地散策でよくある失敗を徹底解説！普通のスニーカー vs トレッキングシューズの境界線、山の急な天候変化に対応するレイヤリング（重ね着）、熊鈴や雨具の必要性、松本駅前・大正池ホテル宿泊情報。",
  keywords: [
    "上高地 靴 スニーカー",
    "上高地 服装 失敗",
    "上高地 持ち物 チェックリスト",
    "大正池 河童橋 明神池",
    "上高地 雨具 レイヤリング",
    "上高地 熊鈴",
    "上高地 宿泊 ホテル"
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
      return data["kamikochi-hiking-shoes-packing-checklist"]?.hotels || [];
    }
  } catch (e) {
    console.error("Failed to load hotels for kamikochi-hiking-shoes-packing-checklist", e);
  }
  return [];
}

export default function KamikochiPackingChecklistPage() {
  const hotels = loadHotels();

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 md:py-16 font-sans text-slate-800 space-y-12">
      {/* ヒーローヘッダー - Emerald/山岳フォレストグリーン */}
      <section className="bg-gradient-to-br from-emerald-700 via-teal-800 to-emerald-950 rounded-3xl p-8 md:p-12 text-white shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-teal-400/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 bg-emerald-900/60 backdrop-blur-sm border border-emerald-400/30 text-emerald-200 text-xs font-bold px-3.5 py-1.5 rounded-full">
            <span>🌲</span> 標高1,500mの山岳リゾート散策ガイド
          </div>
          <h1 className="text-2xl md:text-4xl lg:text-[2.5rem] font-black tracking-tight leading-snug">
            【上高地ハイキング 服装と靴のリアル失敗談】<br />
            スニーカーで大丈夫？大正池〜河童橋で後悔しない持ち物完全版
          </h1>
          <p className="text-emerald-100 text-sm md:text-base leading-relaxed max-w-2xl pt-2">
            「観光地だから普段履きのスニーカーで行ったら泥だらけ＆足裏が痛くて歩けなくなった…」「晴れていたのに急な雷雨でずぶ濡れ、寒さで震えた…」。平地とは全く異なる上高地の自然環境。目的地別の靴選びから山の重ね着（レイヤリング）まで、絶対に失敗しない準備を伝授します。
          </p>
        </div>
      </section>

      {/* スニーカーでOK？の結論コールアウト */}
      <div className="bg-emerald-50 border-2 border-emerald-500/70 rounded-3xl p-6 md:p-8 shadow-sm space-y-4">
        <div className="flex items-center gap-3">
          <span className="bg-emerald-700 text-white text-xs font-black px-3 py-1 rounded-full uppercase">Quick Verdict</span>
          <h2 className="text-lg md:text-xl font-black text-emerald-950">
            結論：あなたの行き先はどこ？「靴の境界線」判定表
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-4 text-sm">
          <div className="bg-white rounded-2xl p-5 border border-emerald-200 space-y-2">
            <div className="flex items-center gap-2 text-emerald-800 font-black text-base">
              <span className="text-xl">👟</span> 大正池 〜 河童橋（約1時間半）
            </div>
            <p className="text-slate-600 text-xs leading-relaxed">
              木道や砂利道がきれいに整備されているため、<strong>履き慣れた底厚スニーカー</strong>なら歩行可能。ただし雨天時は水たまりやぬかるみができるため、防水スプレー必須。ヒール・サンダル・革靴は厳禁です。
            </p>
            <div className="inline-block bg-emerald-100 text-emerald-800 font-bold text-xs px-2.5 py-0.5 rounded">
              判定：クッション性の高いスニーカーでOK
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-emerald-200 space-y-2">
            <div className="flex items-center gap-2 text-emerald-900 font-black text-base">
              <span className="text-xl">🥾</span> 河童橋 〜 明神池・徳沢（往復3〜5時間）
            </div>
            <p className="text-slate-600 text-xs leading-relaxed">
              小石がゴロゴロした未舗装路や木の根が露出した山道が続きます。薄底スニーカーだと足裏が痛くなり、捻挫のリスク大。<strong>ゴアテックス等の防水トレッキングシューズ（ローカット〜ミドルカット）</strong>が強く推奨されます。
            </p>
            <div className="inline-block bg-rose-100 text-rose-800 font-bold text-xs px-2.5 py-0.5 rounded">
              判定：トレッキングシューズ必須
            </div>
          </div>
        </div>
      </div>

      {/* リアル失敗談4選 */}
      <section className="space-y-6">
        <div className="border-b-2 border-emerald-200 pb-3">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">Honest Field Report</span>
          <h2 className="text-2xl md:text-3xl font-black text-slate-900">
            現地で身悶えした…上高地ハイキングのリアル失敗談4選
          </h2>
        </div>

        <div className="grid gap-6">
          {/* 失敗1 */}
          <div className="bg-white rounded-2xl p-6 md:p-7 border border-emerald-100 shadow-sm border-l-8 border-l-emerald-700">
            <div className="flex items-center gap-2.5 mb-2.5">
              <span className="text-lg">🤦‍♂️</span>
              <h3 className="text-lg md:text-xl font-bold text-slate-900">
                失敗1：白の新品スニーカーで行って、一瞬で泥水と砂利の犠牲に
              </h3>
            </div>
            <p className="text-sm md:text-base text-slate-700 leading-relaxed mb-3">
              「インスタ映えする写真を撮りたい」とおろしたての白いスニーカーを履いて行った旅行者。前夜の雨で木道脇の水たまりに足をとられ、乾いた砂利埃をかぶり、下山する頃には見る影もない灰色に。「洗っても落ちない汚れになり、旅行中ずっとテンションが下がった」という後悔の声が非常に多いです。
            </p>
            <div className="bg-emerald-50/70 p-3 rounded-xl text-xs text-emerald-900 font-medium">
              👉 教訓：上高地には「多少汚れても平気な、撥水性のある濃色シューズ」で行くのが賢明。
            </div>
          </div>

          {/* 失敗2 */}
          <div className="bg-white rounded-2xl p-6 md:p-7 border border-emerald-100 shadow-sm border-l-8 border-l-teal-600">
            <div className="flex items-center gap-2.5 mb-2.5">
              <span className="text-lg">🥶</span>
              <h3 className="text-lg md:text-xl font-bold text-slate-900">
                失敗2：真夏だからと半袖Tシャツ1枚…朝晩と日陰の寒さに震える
              </h3>
            </div>
            <p className="text-sm md:text-base text-slate-700 leading-relaxed mb-3">
              上高地は標高約1,500m。東京や松本市街地が35℃の猛暑日でも、上高地の早朝は15℃以下、秋口には朝の気温が5℃前後まで落ちます。日向を歩いているときは汗ばむほど暑いのに、原生林の木陰に入った瞬間に冷たい山風が吹き抜けて汗冷えを起こします。
            </p>
            <div className="bg-emerald-50/70 p-3 rounded-xl text-xs text-emerald-900 font-medium">
              👉 教訓：化繊の速乾インナー＋長袖シャツ＋着脱しやすいウィンドブレーカーの「三層重ね着」が鉄則。
            </div>
          </div>

          {/* 失敗3 */}
          <div className="bg-white rounded-2xl p-6 md:p-7 border border-emerald-100 shadow-sm border-l-8 border-l-emerald-600">
            <div className="flex items-center gap-2.5 mb-2.5">
              <span className="text-lg">☔</span>
              <h3 className="text-lg md:text-xl font-bold text-slate-900">
                失敗3：折りたたみ傘しか持っておらず、山の急な横殴り雨でリュック全滅
              </h3>
            </div>
            <p className="text-sm md:text-base text-slate-700 leading-relaxed mb-3">
              山の天気は1時間で一変します。快晴から突如として雷雨になることも日常茶飯事。木道で傘を差すとすれ違う人の迷惑になるだけでなく、強風で骨が折れて使い物にならなくなります。リュックカバーを持っていなかったため、財布や着替えまでびしょ濡れになった旅行者が後を絶ちません。
            </p>
            <div className="bg-emerald-50/70 p-3 rounded-xl text-xs text-emerald-900 font-medium">
              👉 教訓：両手が空くセパレート型レインウェア（カッパ）または撥水マウンテンパーカーを必ずリュックに常備。
            </div>
          </div>

          {/* 失敗4 */}
          <div className="bg-white rounded-2xl p-6 md:p-7 border border-emerald-100 shadow-sm border-l-8 border-l-teal-800">
            <div className="flex items-center gap-2.5 mb-2.5">
              <span className="text-lg">🐻</span>
              <h3 className="text-lg md:text-xl font-bold text-slate-900">
                失敗4：上高地はツキノワグマの生息地！熊鈴を持たずに奥へ進んで恐怖
              </h3>
            </div>
            <p className="text-sm md:text-base text-slate-700 leading-relaxed mb-3">
              河童橋周辺は多くの観光客で賑わっていますが、明神池や徳沢方面、あるいは早朝の大正池周辺は原生林が広がる野生生物の生活圏です。近年も目撃情報が多数報告されています。「静かすぎて藪の中からガサガサ音がするたびに心臓が止まりそうになった」という体験談も。
            </p>
            <div className="bg-emerald-50/70 p-3 rounded-xl text-xs text-emerald-900 font-medium">
              👉 教訓：特に朝夕や明神池方面へ行くなら熊鈴をバッグにつけておくか、人の多い時間帯に行動しましょう。
            </div>
          </div>
        </div>
      </section>

      {/* 持ち物チェックリスト */}
      <section className="bg-white rounded-3xl p-6 md:p-10 border border-emerald-200 shadow-md space-y-6">
        <div className="text-center space-y-2">
          <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full">Packing List</span>
          <h2 className="text-2xl md:text-3xl font-black text-slate-900">
            上高地ハイキング 持ち物完全チェックリスト
          </h2>
          <p className="text-slate-600 text-xs md:text-sm">
            「大正池〜河童橋」観光組も「明神池」トレッキング組も使える装備一覧。
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-emerald-50/40 rounded-2xl p-5 border border-emerald-200/80 space-y-3">
            <h3 className="font-bold text-emerald-950 flex items-center gap-1.5 text-sm md:text-base">
              <span>🎒</span> 基本装備
            </h3>
            <ul className="text-xs md:text-sm text-slate-700 space-y-2">
              <li className="flex items-start gap-1.5">
                <span className="text-emerald-600 font-bold">☑</span>
                <span>両手が空くデイパック（リュック）</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-emerald-600 font-bold">☑</span>
                <span>歩きやすいトレッキングシューズ/厚底スニーカー</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-emerald-600 font-bold">☑</span>
                <span>厚手の靴下（靴擦れ防止）</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-emerald-600 font-bold">☑</span>
                <span>飲み物（500ml以上・自動販売機は少なめ）</span>
              </li>
            </ul>
          </div>

          <div className="bg-emerald-50/40 rounded-2xl p-5 border border-emerald-200/80 space-y-3">
            <h3 className="font-bold text-emerald-950 flex items-center gap-1.5 text-sm md:text-base">
              <span>🧥</span> 服装・天候対策
            </h3>
            <ul className="text-xs md:text-sm text-slate-700 space-y-2">
              <li className="flex items-start gap-1.5">
                <span className="text-emerald-600 font-bold">☑</span>
                <span>マウンテンパーカー/ウインドブレーカー</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-emerald-600 font-bold">☑</span>
                <span>吸汗速乾インナー（綿Tシャツは汗冷えするのでNG）</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-emerald-600 font-bold">☑</span>
                <span>つば付き帽子＆UVサングラス（紫外線強め）</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-emerald-600 font-bold">☑</span>
                <span>レインコート/セパレート雨具</span>
              </li>
            </ul>
          </div>

          <div className="bg-emerald-50/40 rounded-2xl p-5 border border-emerald-200/80 space-y-3">
            <h3 className="font-bold text-emerald-950 flex items-center gap-1.5 text-sm md:text-base">
              <span>💡</span> あると助かる山岳ギア
            </h3>
            <ul className="text-xs md:text-sm text-slate-700 space-y-2">
              <li className="flex items-start gap-1.5">
                <span className="text-emerald-600 font-bold">☑</span>
                <span>熊鈴（特に明神池方面へ歩く場合）</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-emerald-600 font-bold">☑</span>
                <span>100円硬貨（有料チップ制トイレ用：1回100円）</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-emerald-600 font-bold">☑</span>
                <span>ゴミ袋（上高地はゴミ箱ゼロ！持ち帰り必須）</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-emerald-600 font-bold">☑</span>
                <span>行動食・おやつ（ナッツやチョコ等）</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 楽天トラベル宿泊特集セクション */}
      <section className="space-y-6">
        <div className="bg-gradient-to-r from-teal-700 to-emerald-800 rounded-3xl p-6 md:p-8 text-white shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="bg-white/20 text-white text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider inline-block">
              Rakuten Travel Special
            </span>
            <h3 className="text-xl md:text-2xl font-black">
              上高地・さわんど温泉・松本駅前ホテルで使える限定クーポン
            </h3>
            <p className="text-emerald-100 text-xs md:text-sm">
              マイカー規制のある上高地は、シャトルバス発着地の「さわんど温泉」か「松本駅前」の前泊が最もスムーズ！
            </p>
          </div>
          <a
            href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fcamp%2F50coupon%2F"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-emerald-900 hover:bg-emerald-50 font-black px-6 py-3.5 rounded-full text-sm shadow-md transition-all shrink-0 text-center"
          >
            楽天トラベルクーポンを獲得 →
          </a>
        </div>

        <div className="border-b-2 border-emerald-200 pb-3">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">Recommended Hotels</span>
          <h2 className="text-2xl md:text-3xl font-black text-slate-900">
            上高地散策の拠点に最適！さわんど温泉＆上高地周辺ホテル
          </h2>
          <p className="text-slate-600 text-xs md:text-sm mt-1">
            早朝の朝霧に包まれる大正池に直行できる絶好のロケーション宿をピックアップ。
          </p>
        </div>

        <div className="grid gap-6">
          {hotels.slice(0, 4).map((hotel) => (
            <div
              key={hotel.hotelNo}
              className="bg-white rounded-3xl p-5 md:p-6 border border-slate-200 hover:border-emerald-500 shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row gap-6 items-start"
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
                    <span className="bg-emerald-100 text-emerald-900 text-xs font-extrabold px-2.5 py-1 rounded-full flex items-center gap-1">
                      ★ {hotel.reviewAverage.toFixed(2)}
                      {hotel.reviewCount && <span className="font-normal text-emerald-700">({hotel.reviewCount}件)</span>}
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
                  {hotel.hotelSpecial || "上高地観光のゲートウェイに位置し、マイカー駐車やバスターミナルへのアクセスも抜群の宿です。"}
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
                        最安目安：<span className="text-lg font-black text-emerald-800">{hotel.hotelMinCharge.toLocaleString()}円〜</span> /人
                      </div>
                    ) : (
                      <div className="text-xs text-slate-400">プラン詳細はリンク先で確認</div>
                    )}
                  </div>

                  <a
                    href={hotel.affiliateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-emerald-700 hover:bg-emerald-800 text-white text-xs md:text-sm font-bold px-5 py-2.5 rounded-full shadow transition-colors"
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
        <h3 className="text-lg font-bold text-slate-900">上高地旅行の関連記事もあわせてチェック</h3>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <Link
            href="/kamikochi-matsumoto-car-free-guide"
            className="p-4 bg-white rounded-2xl border border-slate-200 hover:border-emerald-500 hover:shadow-sm transition group"
          >
            <div className="text-emerald-700 text-xs font-bold mb-1">車なし・電車バス旅</div>
            <div className="font-bold text-slate-800 group-hover:text-emerald-700">
              松本〜上高地 車なし完全アクセス攻略ガイド
            </div>
            <p className="text-xs text-slate-500 mt-1">アルピコ交通電車・バス乗り継ぎと往復割引切符</p>
          </Link>

          <Link
            href="/tokyo-matsumoto-kamikochi-bus-vs-train-guide"
            className="p-4 bg-white rounded-2xl border border-slate-200 hover:border-emerald-500 hover:shadow-sm transition group"
          >
            <div className="text-emerald-700 text-xs font-bold mb-1">直行便 vs 乗り継ぎ</div>
            <div className="font-bold text-slate-800 group-hover:text-emerald-700">
              東京〜松本・上高地 直行高速バス vs あずさ電車比較
            </div>
            <p className="text-xs text-slate-500 mt-1">さわやか信州号の夜行・昼行便と特急あずさの所要時間・料金比較</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
