import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【京都寺社巡り 靴と服装の失敗談まとめ】1日2万歩で足崩壊＆靴の脱ぎ履き地獄を回避するスマート参拝術 ｜ 日本全国・旅宿クラウド",
  description: "京都観光で多くの人が後悔するポイントを徹底分析！靴紐を結ぶ靴で行って拝観ごとに大渋滞、冬の板の間で足裏底冷え、夏の日傘マナー、スリッポン選びのコツと歩き疲れた足を癒やす大浴場付き京都ホテル。",
  keywords: [
    "京都 寺社巡り 服装",
    "京都 観光 靴 おすすめ",
    "京都 拝観 靴 脱ぎ履き",
    "京都 1日2万歩 疲れない靴",
    "京都 冬 底冷え 靴下",
    "京都 大浴場 ホテル 楽天トラベル",
    "京都 失敗談 持ち物",
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
      return data["kyoto-temple-walking-shoes-outfit-mistakes-guide"]?.hotels || [];
    }
  } catch (e) {
    console.error("Failed to load hotels for kyoto-temple-walking-shoes-outfit-mistakes-guide", e);
  }
  return [];
}

export default function KyotoTempleWalkingShoesGuidePage() {
  const hotels = loadHotels();

  // 寺社巡り 4大リアル失敗談
  const templeMistakes = [
    {
      num: "01",
      theme: "靴紐スニーカー＆ブーツの脱ぎ履き地獄",
      trap: "ハイカットスニーカーや編み上げブーツ、金具付き革靴で参拝へ。有名寺院（清水寺・三十三間堂・銀閣寺・天龍寺など）に入るたびに、狭い上がり框でかがんで靴紐をほどき、結び直す作業が発生。混雑時は後ろに行列ができ、プレッシャーと腰痛で拝観の楽しさが半減。",
      hack: "「手を使わずにスポッと脱ぎ履きできるスリッポン型スニーカー」または「ダイヤル式/ゴム紐スニーカー」が正解。立ったまま1秒で脱ぎ履きできる靴こそ京都最強の巡礼ギアです。"
    },
    {
      num: "02",
      theme: "冬・春先の「板の間・石段」極寒底冷えショック",
      trap: "暖冬だと思って薄手の靴下やパンストで訪問。国宝の本堂や渡り廊下は暖房設備がなく、下からシンシンと冷気が上がる木板張り。わずか10分の拝観で足先の感覚がなくなり、関節が痛むほどの激冷えに。",
      hack: "内側パイル編みやメリノウール製の厚手ソックスを持参（またはバッグに予備を忍ばせて拝観直前に重ね履き）。携帯用フリースルームシューズや厚手ソックスカバーが劇的に効きます。"
    },
    {
      num: "03",
      theme: "砂利道・石段・苔庭でソールが薄い靴による足裏崩壊",
      trap: "フラットパンプスやおしゃれな薄底スニーカーで歩き回り、伏見稲荷の千本鳥居階段や嵐山の竹林、御所の玉砂利に足裏を痛打。夕方には足裏のアーチが悲鳴を上げ、1万5千歩で歩行不能に。",
      hack: "クッション性の高い厚底EVAソール、またはリカバリーシューズブランド（HOKA、On、New Balance、OOFOS）の高クッションインソール入りシューズを選ぶのが必須条件。"
    },
    {
      num: "04",
      theme: "寺院境内での日傘・大荷物リュックのトラブル",
      trap: "混雑する参道や木造回廊で日傘をさして周囲の参拝者の目に当たりそうになったり、巨大なバックパックを背負ったまま狭い堂内に入り重要文化財の柱や他の人にぶつかりそうになるトラブルが続出。",
      hack: "境内では日傘ではなく「つば広UVハット（あご紐付き）」に切り替え。荷物は駅やホテルのロッカーに預け、貴重品と御朱印帳、靴入れ袋が入る軽量サコッシュや小型ボディバッグで軽快に回るのが粋なマナーです。"
    }
  ];

  // 京都参拝 スマートギアチェックリスト
  const smartGearList = [
    { name: "ハンズフリースリッポン / ゴム紐スニーカー", cat: "足元", desc: "かがまず1秒で脱ぎ履き完了。行列の玄関口でもノンストレスで参拝。" },
    { name: "マイ靴入れ袋（巾着ナイロンバッグ）", cat: "マナー・持ち物", desc: "寺院で配られる使い捨てビニール袋は破れやすくカサカサ音が響く。撥水巾着が便利。" },
    { name: "メリノウール厚手ソックス", cat: "防寒・底冷え", desc: "冬の板の間の底冷えを遮断。夏は汗を素早く発散し、靴を脱いだ際の足の臭いを防ぐ。" },
    { name: "小型軽量サコッシュ＆御朱印帳ポーチ", cat: "バッグ", desc: "両手を空けて手水舎や参拝へ。満員バスや狭い回廊でも邪魔になりません。" },
    { name: "あご紐付きUVハット（折りたたみ式）", cat: "紫外線対策", desc: "人混みの境内でも周囲に迷惑をかけない。日傘禁止エリアでも安心の日除け。" },
    { name: "湿布＆足指セパレーター（宿用）", cat: "リカバリー", desc: "2万歩歩いた夜、ホテルの大浴場上がりに貼るだけで翌朝の足の軽さが復活。" },
  ];

  return (
    <div className="min-h-screen bg-teal-950 text-slate-100 selection:bg-teal-500 selection:text-white pb-20">
      {/* ヒーローヘッダー（Elegant Teal & Bamboo Green Palette） */}
      <header className="relative overflow-hidden bg-gradient-to-b from-teal-900 via-emerald-950 to-teal-950 border-b border-teal-800/40 py-16 md:py-24">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#14b8a6_1px,transparent_1px)] [background-size:18px_18px] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-black tracking-widest uppercase bg-teal-500/20 text-teal-300 border border-teal-400/40">
            <span>⛩️ KYOTO TEMPLE WALKING SMART GUIDE</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-tight md:leading-tight text-white font-journal-serif">
            【京都寺社巡り 靴と服装の失敗談まとめ】<br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-emerald-200 to-amber-200">
              1日2万歩で足崩壊＆靴の脱ぎ履き地獄を回避するスマート参拝術
            </span>
          </h1>

          <p className="text-sm md:text-base text-teal-100/90 max-w-2xl mx-auto leading-relaxed">
            京都観光は「とにかく歩く」「とにかく靴を脱ぎ履きする」旅。おしゃれ重視で選んだ靴が招く悲劇、冬の板の間の底冷え、夏の人混み日傘マナーまで。古都を優雅に巡るための実践的ギアと歩き疲れた身体を癒やす大浴場付きホテルを特集。
          </p>

          <div className="flex flex-wrap justify-center gap-3 pt-2 text-xs font-bold text-teal-200">
            <span className="bg-teal-950/90 px-3.5 py-1.5 rounded-lg border border-teal-800">👟 1秒脱ぎ履きスリッポン</span>
            <span className="bg-teal-950/90 px-3.5 py-1.5 rounded-lg border border-teal-800">🧊 板の間底冷え遮断ソックス</span>
            <span className="bg-teal-950/90 px-3.5 py-1.5 rounded-lg border border-teal-800">🛍️ マイ靴袋マナー</span>
            <span className="bg-teal-950/90 px-3.5 py-1.5 rounded-lg border border-teal-800">♨️ 疲労回復天然温泉ステイ</span>
          </div>
        </div>
      </header>

      {/* メインコンテンツ */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 pt-12 space-y-16">
        {/* ⛩️ 4大リアル失敗談 */}
        <section className="space-y-8">
          <div className="border-b border-teal-800/60 pb-4 space-y-1">
            <div className="flex items-center gap-2 text-teal-400 text-xs font-black tracking-wider uppercase">
              <span>⚠️ 4 MAJOR PITFALLS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white font-journal-serif">
              京都寺社巡りで本当によくある服装・靴の落とし穴
            </h2>
            <p className="text-xs sm:text-sm text-teal-200/80">
              「歩きやすい靴で行ったはずなのに…」多くの旅行者が現地で直面する想定外のトラブル。
            </p>
          </div>

          <div className="space-y-6">
            {templeMistakes.map((mistake) => (
              <div
                key={mistake.num}
                className="bg-slate-900/90 border border-teal-900/60 hover:border-teal-400/50 transition duration-200 rounded-3xl p-6 sm:p-8 space-y-4 shadow-xl"
              >
                <div className="flex items-center gap-3 border-b border-teal-900/40 pb-3">
                  <span className="text-xs font-black bg-teal-600 text-white px-2.5 py-1 rounded-lg">
                    CASE {mistake.num}
                  </span>
                  <h3 className="text-base sm:text-lg font-black text-white">
                    {mistake.theme}
                  </h3>
                </div>

                <div className="bg-rose-950/20 border-l-4 border-rose-500 p-3.5 rounded-r-xl space-y-1">
                  <span className="text-xs font-black text-rose-300">💥 実際の悲劇と現場のストレス</span>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {mistake.trap}
                  </p>
                </div>

                <div className="bg-teal-950/50 border-l-4 border-teal-400 p-3.5 rounded-r-xl space-y-1">
                  <span className="text-xs font-black text-teal-300">💡 スマートな解決ハック</span>
                  <p className="text-xs sm:text-sm text-teal-100/90 leading-relaxed">
                    {mistake.hack}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 🎒 スマート参拝 厳選ギアリスト */}
        <section className="bg-slate-900/90 border border-teal-900/50 rounded-3xl p-6 sm:p-8 space-y-6">
          <div className="border-b border-teal-800/40 pb-4 space-y-1">
            <div className="flex items-center gap-2 text-teal-400 text-xs font-black tracking-wider uppercase">
              <span>🎒 ESSENTIAL SMART GEAR</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-white font-journal-serif">
              古都を快適＆優雅に歩くためのスマート参拝ギア6選
            </h2>
            <p className="text-xs text-teal-300/80">
              荷物を最小限に抑えつつ、参拝ストレスを極限まで減らすプロ仕様のセレクト。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {smartGearList.map((gear, idx) => (
              <div
                key={idx}
                className="bg-teal-950/30 border border-teal-900/50 rounded-2xl p-4 space-y-1.5 hover:border-teal-400/40 transition"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-bold text-teal-400 bg-teal-950 px-2 py-0.5 rounded border border-teal-800">
                    {gear.cat}
                  </span>
                  <span className="text-xs text-emerald-400">推奨アイテム</span>
                </div>
                <h3 className="text-sm font-black text-white">
                  {gear.name}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {gear.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 🗺️ 1日2万歩モデル巡礼ルートと休憩スポットのコツ */}
        <section className="bg-gradient-to-br from-teal-950 via-slate-900 to-emerald-950 border border-teal-500/30 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl">
          <div className="space-y-1 border-b border-teal-800/50 pb-4">
            <div className="flex items-center gap-2 text-amber-400 text-xs font-black tracking-wider uppercase">
              <span>👣 20,000 STEPS ROUTE & PAUSE</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-white">
              足を潰さない！「東山〜祇園」スマート巡回タイム配分
            </h2>
            <p className="text-xs sm:text-sm text-teal-200">
              坂道と石段が続く東山エリアを、途中の茶屋休憩と大浴場ゴールで完璧に乗り切るプラン。
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-start gap-3 bg-slate-950/60 p-3.5 rounded-xl border border-teal-900/40">
              <span className="text-xs font-black text-amber-300 bg-amber-950/80 px-2 py-1 rounded shrink-0">
                08:30 (朝一番)
              </span>
              <div className="space-y-0.5">
                <div className="text-sm font-bold text-white">清水寺の開門直後参拝（混雑前の舞台）</div>
                <div className="text-xs text-slate-300">朝の清々しい空気の中、靴の着脱も待たずにスムーズ参拝。音羽の滝へ。</div>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-slate-950/60 p-3.5 rounded-xl border border-teal-900/40">
              <span className="text-xs font-black text-teal-300 bg-teal-950 px-2 py-1 rounded shrink-0">
                10:30 (産寧坂・二年坂)
              </span>
              <div className="space-y-0.5">
                <div className="text-sm font-bold text-white">石畳の下り坂散策＆老舗甘味処で足休め</div>
                <div className="text-xs text-slate-300">急な石段は下りの方が膝・ふくらはぎに負荷大。途中でお抹茶とわらび餅休憩を挟むのがコツ。</div>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-slate-950/60 p-3.5 rounded-xl border border-teal-900/40">
              <span className="text-xs font-black text-teal-300 bg-teal-950 px-2 py-1 rounded shrink-0">
                12:30 (高台寺〜祇園)
              </span>
              <div className="space-y-0.5">
                <div className="text-sm font-bold text-white">庭園鑑賞＆祇園おばんざいランチ</div>
                <div className="text-xs text-slate-300">枯山水の縁側に腰掛けて足を休め、町家レストランで旬の京野菜ランチ。</div>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-slate-950/60 p-3.5 rounded-xl border border-teal-900/40">
              <span className="text-xs font-black text-emerald-300 bg-emerald-950 px-2 py-1 rounded shrink-0">
                16:00 (ゴール)
              </span>
              <div className="space-y-0.5">
                <div className="text-sm font-bold text-white">京都駅前・烏丸の大浴場付きホテルへチェックイン</div>
                <div className="text-xs text-slate-300">歩き疲れた足を広い天然温泉やサウナに沈めて極楽リフレッシュ！</div>
              </div>
            </div>
          </div>
        </section>

        {/* 🏨 歩き疲れた足を癒やす！京都駅・烏丸の大浴場・サウナ付きホテル */}
        <section className="space-y-6">
          <div className="border-b border-teal-800/60 pb-4 space-y-1">
            <div className="flex items-center gap-2 text-teal-400 text-xs font-black tracking-wider uppercase">
              <span>♨️ KYOTO HOTELS WITH HOT SPRINGS & BATHS</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-white font-journal-serif">
              2万歩の疲れを完全リセット！京都駅・四条烏丸の天然温泉＆大浴場ホテル
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              京都観光の宿は「大浴場付き」が絶対条件。広い湯船でふくらはぎを伸ばし、翌朝スッキリ目覚められる人気宿です。
            </p>
          </div>

          {hotels.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {hotels.map((hotel) => (
                <article
                  key={hotel.hotelNo}
                  className="flex flex-col justify-between bg-slate-900/90 border border-teal-900/50 hover:border-teal-400/50 rounded-2xl overflow-hidden shadow-lg transition duration-200"
                >
                  <div>
                    <div className="aspect-video relative overflow-hidden bg-slate-800">
                      {hotel.hotelImageUrl ? (
                        <img
                          src={hotel.hotelImageUrl}
                          alt={hotel.hotelName}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-slate-500 text-xs">
                          {hotel.hotelName}
                        </div>
                      )}
                      {hotel.hotelMinCharge && hotel.hotelMinCharge > 0 && (
                        <span className="absolute bottom-2 right-2 text-[10px] font-black bg-teal-950/90 text-teal-200 px-2.5 py-0.5 rounded border border-teal-800">
                          ¥{hotel.hotelMinCharge.toLocaleString()}〜
                        </span>
                      )}
                      {hotel.nearestStation && (
                        <span className="absolute top-2 left-2 text-[10px] font-black bg-slate-950/80 text-teal-200 px-2 py-0.5 rounded">
                          🚉 {hotel.nearestStation}駅
                        </span>
                      )}
                    </div>

                    <div className="p-4 space-y-2">
                      {hotel.reviewAverage && hotel.reviewAverage > 0 && (
                        <div className="flex items-center text-xs font-bold text-amber-400">
                          <span>⭐ {hotel.reviewAverage}点（{hotel.reviewCount || 0}件）</span>
                        </div>
                      )}
                      <h3 className="text-sm font-black text-white line-clamp-2">
                        {hotel.hotelName}
                      </h3>
                      {hotel.hotelSpecial && (
                        <p className="text-xs text-slate-400 line-clamp-2">
                          {hotel.hotelSpecial}
                        </p>
                      )}
                      {hotel.access && (
                        <p className="text-[11px] text-slate-500 line-clamp-1">
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
                      className="block w-full text-center py-2.5 text-xs font-black text-white bg-teal-600 hover:bg-teal-500 rounded-xl transition shadow"
                    >
                      ♨️ 楽天トラベルで大浴場＆宿泊プランを見る
                    </a>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 text-xs text-slate-500">
              ホテル情報を読み込み中または該当ホテルがありません。
            </div>
          )}
        </section>

        {/* 内部リンク＆京都特集導線 */}
        <section className="bg-slate-900/60 border border-teal-900/40 rounded-3xl p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-2 text-teal-400 text-xs font-black tracking-wider uppercase">
            <span>🔗 KYOTO TRAVEL GUIDES</span>
          </div>
          <h2 className="text-lg font-black text-white">
            京都観光の予算・雨の日プランもあわせてチェック
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <Link
              href="/kyoto-travel-budget-how-many-nights"
              className="p-4 rounded-2xl bg-slate-950/80 border border-teal-900/40 hover:border-teal-400 transition space-y-1.5 group"
            >
              <div className="text-xs font-black text-teal-400 group-hover:text-teal-300">
                💰 京都旅の予算相場
              </div>
              <h3 className="text-sm font-bold text-white">
                京都旅行の予算は何泊でいくら？拝観料・交通費・ホテル費用のリアル内訳
              </h3>
              <p className="text-[11px] text-slate-400 line-clamp-2">
                宿泊税や市バス地下鉄1日券の活用術、一人旅からカップル旅までの費用シミュレーション。
              </p>
            </Link>

            <Link
              href="/kyoto-rainy-day-temple-cafe-guide"
              className="p-4 rounded-2xl bg-slate-950/80 border border-teal-900/40 hover:border-teal-400 transition space-y-1.5 group"
            >
              <div className="text-xs font-black text-teal-400 group-hover:text-teal-300">
                🌧️ 雨の京都しっとり散歩
              </div>
              <h3 className="text-sm font-bold text-white">
                雨の京都だからこそ美しい名刹・苔寺＆町家ブックカフェ巡り
              </h3>
              <p className="text-[11px] text-slate-400 line-clamp-2">
                雨に濡れる三千院の苔庭、ぬくもりある町家カフェで過ごす静謐な大人の京都時間。
              </p>
            </Link>
          </div>
        </section>

        {/* 全国都道府県一覧 */}
        <div className="text-center pt-4">
          <Link
            href="/prefectures"
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-300 bg-slate-900 hover:bg-slate-800 border border-teal-900/60 px-8 py-3.5 rounded-2xl transition shadow-sm"
          >
            <span>🗾</span>
            <span>全国47都道府県の観光＆宿泊ガイド一覧へ</span>
            <span>→</span>
          </Link>
        </div>
      </main>
    </div>
  );
}
