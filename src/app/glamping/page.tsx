import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【完全網羅グランピング大百科2026】エリア・目的・設備・予算・人数別の最強ナビゲーション",
  description: "日本全国のグランピングを完全網羅！グランピングとは？キャンプとの違い、ベストシーズン、必携持ち物リスト、失敗しない選び方までプロが徹底解説。エリア別・こだわり設備別・同行者別の特化ガイド全34本へ直通リンク！",
  keywords: [
    "グランピング", "グランピング おすすめ", "グランピングとは", "グランピング 持ち物", 
    "グランピング 関東", "グランピング 関西", "グランピング サウナ", "グランピング ペット可",
    "グランピング 子連れ", "グランピング 安い", "シルバーウィーク グランピング", "楽天トラベル"
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
      return data["glamping"]?.hotels || [];
    }
  } catch (e) {
    console.error("Failed to load hotels for glamping hub", e);
  }
  return [];
}

export default function GlampingHubPage() {
  const hotels = loadHotels();

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "グランピングと一般のキャンプの違いは何ですか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "一般のキャンプはテント設営・シュラフ準備・火起こし・片付けをすべて自分で行いますが、グランピング（Glamorous Camping）は冷暖房完備の快適なドームテントやヴィラ、シモンズ製ベッド、個別シャワー・トイレ、シェフ監修の豪華BBQ食材がすべて用意された贅沢なアウトドアリゾートです。重い荷物を持たずに『手ぶら』でホテルステイと同等以上の快適さを味わえるのが決定的な違いです。"
        }
      },
      {
        "@type": "Question",
        "name": "グランピングに行くおすすめのベストシーズンはいつですか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "最もおすすめなのは秋（9月〜11月）です。真夏の猛暑や蚊などの虫が落ち着き、夜風が心地よく焚き火やサウナ、星空観賞が最も快適に楽しめる季節です。春（4月〜5月）の新緑や桜、冬（12月〜2月）のこたつ・薪ストーブ体験も非常に人気があります。"
        }
      },
      {
        "@type": "Question",
        "name": "グランピングに持っていくべき持ち物は何ですか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "基本アメニティやタオル、食器は施設に完備されていますが、夜間の寒暖差に対応できる羽織りもの（ウインドブレーカーやフリース）、脱ぎ履きしやすいサンダル、夜の散策用スマホ充電器（モバイルバッテリー）、虫除けスプレー、焚き火用の防汚アウターがあるとより快適に過ごせます。"
        }
      },
      {
        "@type": "Question",
        "name": "雨が降った場合でもグランピングは楽しめますか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "全天候型の施設を選べば全く問題ありません。現在の最新グランピング施設は、開閉式ルーフや屋根付きウッドデッキBBQスペース、断熱ドームテント、天然温泉大浴場や室内シアターが完備されており、雨天時でも濡れずにバーベキューや映画鑑賞を満喫できます。"
        }
      }
    ]
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      {/* ヒーローセクション */}
      <section className="relative bg-gradient-to-br from-emerald-950 via-teal-900 to-slate-900 text-white py-16 md:py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:24px_24px]"></div>
        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-300 px-4 py-1.5 rounded-full text-sm font-bold mb-6 border border-emerald-400/30 backdrop-blur-sm">
            🏕️ 日本最大級のグランピング総合ポータル
          </div>
          <h1 className="font-journal-serif text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6">
            【完全網羅グランピング大百科2026】<br className="hidden md:block" />
            <span className="text-emerald-400">目的・エリア・設備・予算・人数別</span>の決定版ガイド
          </h1>
          <p className="text-base md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8">
            「大自然を満喫したいけれど、準備や片付けは面倒」「テント泊でもホテル並みに快適に過ごしたい」。<br className="hidden md:block"/>
            進化し続ける全国のグランピングリゾートを、専門エディターが徹底取材。
            あなたにぴったりの宿泊プランが必ず見つかる全34の特化ナビゲーションです。
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-xs md:text-sm font-medium">
            <a href="#about" className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-xl border border-white/20 transition">グランピングとは？</a>
            <a href="#season" className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-xl border border-white/20 transition">ベストシーズン</a>
            <a href="#packing" className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-xl border border-white/20 transition">必携持ち物</a>
            <a href="#categories" className="bg-emerald-500 text-slate-950 font-bold px-4 py-2 rounded-xl hover:bg-emerald-400 transition">カテゴリー別ナビ</a>
          </div>
        </div>
      </section>

      {/* 楽天トラベル クーポン還元訴求バナー */}
      <div className="max-w-5xl mx-auto px-4 -mt-6 relative z-20">
        <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl p-4 md:p-6 shadow-xl text-white flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <span className="text-3xl md:text-4xl">🏷️</span>
            <div>
              <div className="font-extrabold text-lg md:text-xl">楽天トラベル グランピング＆秋旅応援キャンペーン</div>
              <div className="text-xs md:text-sm opacity-90">最大10,000円割引クーポン配布中！5と0のつく日はさらにポイント高還元</div>
            </div>
          </div>
          <a
            href="https://hb.afl.rakuten.co.jp/hgc/g0190dd6.20811eef.g0190dd6.20811340/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fcamp%2Fglamping%2F"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto text-center bg-slate-900 hover:bg-black text-amber-300 font-bold px-6 py-3 rounded-xl shadow transition"
          >
            クーポンを獲得する
          </a>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-16 space-y-20">
        {/* 基礎知識：グランピングとは？ */}
        <section id="about" className="scroll-mt-24">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-2.5 h-8 bg-emerald-600 rounded-full"></span>
            <h2 className="font-journal-serif text-2xl md:text-3xl font-bold text-slate-900">
              1. そもそもグランピングとは？一般キャンプとの決定的な違い
            </h2>
          </div>
          <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-200">
            <p className="text-slate-700 leading-relaxed mb-6">
              グランピング（Glamping）とは、<strong>「Glamorous（魅力的で贅沢な）」</strong>と<strong>「Camping（キャンプ）」</strong>を掛け合わせた造語です。
              従来のキャンプのように、重いテントを運び、ペグを打ち、火を起こし、寝袋で寒さに耐える苦労は一切不要。
              ホテルのような快適空間で、大自然の心地よい風や鳥のさえずりを五感で楽しめる、今最も注目される旅行スタイルです。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm border-collapse">
                <thead>
                  <tr className="bg-slate-100 text-slate-700 border-b border-slate-200">
                    <th className="p-3">比較項目</th>
                    <th className="p-3 font-bold text-emerald-800">グランピング</th>
                    <th className="p-3 text-slate-500">一般キャンプ</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-600">
                  <tr>
                    <td className="p-3 font-semibold text-slate-700">宿泊設備</td>
                    <td className="p-3 text-emerald-900 font-medium">冷暖房完備の大型ドームテント・一棟貸しヴィラ</td>
                    <td className="p-3">持参またはレンタルの簡易テント</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-slate-700">寝具</td>
                    <td className="p-3 text-emerald-900 font-medium">シモンズ製などの高級ベッド・清潔な羽毛布団</td>
                    <td className="p-3">スリーピングマット＋寝袋（シュラフ）</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-slate-700">水回り（風呂・トイレ）</td>
                    <td className="p-3 text-emerald-900 font-medium">客室専用のシャワー・温水洗浄便座・天然温泉付きも多数</td>
                    <td className="p-3">キャンプ場内の共用コインシャワー・共用トイレ</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-slate-700">食事（BBQ）</td>
                    <td className="p-3 text-emerald-900 font-medium">シェフ監修のブランド牛・海鮮食材完備、片付け不要</td>
                    <td className="p-3">食材の買い出し、下ごしらえ、炭の片付けがすべて自前</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-slate-700">持ち物</td>
                    <td className="p-3 text-emerald-900 font-medium">着替えとスマホだけでOK（手ぶら）</td>
                    <td className="p-3">テント、タープ、調理器具、寝具など大型荷物多数</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* 季節別の魅力とベストシーズン */}
        <section id="season" className="scroll-mt-24">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-2.5 h-8 bg-teal-600 rounded-full"></span>
            <h2 className="font-journal-serif text-2xl md:text-3xl font-bold text-slate-900">
              2. グランピングのおすすめベストシーズン
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col">
              <div className="text-2xl mb-2">🌸 春（4〜5月）</div>
              <h3 className="font-bold text-slate-800 text-base mb-2">お花見＆爽快新緑</h3>
              <p className="text-xs text-slate-600 leading-relaxed flex-grow">
                桜の下でのBBQや新緑が美しい季節。昼夜の寒暖差に備えて羽織りものが1枚あると快適です。
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col">
              <div className="text-2xl mb-2">☀️ 夏（7〜8月）</div>
              <h3 className="font-bold text-slate-800 text-base mb-2">川遊び＆プール・星空</h3>
              <p className="text-xs text-slate-600 leading-relaxed flex-grow">
                海・湖畔・高原の避暑地が大人気。SUPや川遊び、ナイトプールを存分に楽しめます。虫除け対策は必須。
              </p>
            </div>
            <div className="bg-emerald-50 p-5 rounded-2xl border border-emerald-200 shadow-sm flex flex-col relative overflow-hidden">
              <span className="absolute top-2 right-2 bg-emerald-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">一番人気</span>
              <div className="text-2xl mb-2">🍁 秋（9〜11月）</div>
              <h3 className="font-bold text-emerald-950 text-base mb-2">焚き火＆紅葉の黄金期</h3>
              <p className="text-xs text-emerald-900 leading-relaxed flex-grow">
                猛暑が去り、蚊がいなくなる最高の季節。秋風の中でのサウナ外気浴、紅葉、焚き火BARが絶品。
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col">
              <div className="text-2xl mb-2">❄️ 冬（12〜2月）</div>
              <h3 className="font-bold text-slate-800 text-base mb-2">薪ストーブ＆澄んだ星空</h3>
              <p className="text-xs text-slate-600 leading-relaxed flex-grow">
                ドーム内は床暖房や薪ストーブで暖か。空気が澄み渡り、1年で最も星空が美しく輝く穴場シーズン。
              </p>
            </div>
          </div>
        </section>

        {/* 初心者が後悔しないための必携持ち物チェックリスト */}
        <section id="packing" className="scroll-mt-24">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-2.5 h-8 bg-amber-600 rounded-full"></span>
            <h2 className="font-journal-serif text-2xl md:text-3xl font-bold text-slate-900">
              3. グランピングで後悔しない！プロが教える必携持ち物
            </h2>
          </div>
          <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-200">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-3">
                <h3 className="font-bold text-slate-800 flex items-center gap-2 text-base">
                  <span className="text-emerald-600 font-extrabold">01</span> 防寒・衣類アイテム
                </h3>
                <ul className="text-xs text-slate-600 space-y-2">
                  <li className="flex items-start gap-1.5">✔ <strong>着脱しやすい羽織りもの</strong>（フリースやマウンテンパーカー）</li>
                  <li className="flex items-start gap-1.5">✔ <strong>焚き火用のコットン服</strong>（化学繊維は火の粉で穴が空くため注意）</li>
                  <li className="flex items-start gap-1.5">✔ <strong>脱ぎ履きしやすいスリッポンやサンダル</strong>（テント出入りに超便利）</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="font-bold text-slate-800 flex items-center gap-2 text-base">
                  <span className="text-emerald-600 font-extrabold">02</span> 身だしなみ・衛生用品
                </h3>
                <ul className="text-xs text-slate-600 space-y-2">
                  <li className="flex items-start gap-1.5">✔ <strong>虫除けスプレー＆かゆみ止め</strong>（屋外散策やテラスBBQ用）</li>
                  <li className="flex items-start gap-1.5">✔ <strong>日焼け止め＆サングラス</strong>（高原や水辺の強い日差し対策）</li>
                  <li className="flex items-start gap-1.5">✔ <strong>ウェットティッシュ</strong>（BBQで手が汚れた時に大活躍）</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="font-bold text-slate-800 flex items-center gap-2 text-base">
                  <span className="text-emerald-600 font-extrabold">03</span> あると快適度が倍増するもの
                </h3>
                <ul className="text-xs text-slate-600 space-y-2">
                  <li className="flex items-start gap-1.5">✔ <strong>モバイルバッテリー</strong>（屋外での写真・動画撮影ですぐ減る）</li>
                  <li className="flex items-start gap-1.5">✔ <strong>お気に入りの飲み物・おつまみ</strong>（深夜の語り合い用）</li>
                  <li className="flex items-start gap-1.5">✔ <strong>水着・サウナハット</strong>（サウナやプール付き施設の場合）</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 bg-slate-50 p-4 rounded-2xl">
              <span className="text-xs text-slate-600">失敗談や服装のさらに詳しい解説はこちら：</span>
              <Link
                href="/glamping-first-time-regrets-packing-guide"
                className="text-emerald-700 hover:text-emerald-800 font-bold text-sm flex items-center gap-1 underline"
              >
                【実録】初めてのグランピングで後悔したことワースト5＆持ち物サバイバル →
              </Link>
            </div>
          </div>
        </section>

        {/* 目的・テーマ別ナビゲーション（ここがクラスターの中核） */}
        <section id="categories" className="scroll-mt-24">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-emerald-600 font-extrabold text-sm uppercase tracking-wider">Comprehensive Directory</span>
            <h2 className="font-journal-serif text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-4">
              グランピング完全網羅ナビゲーション（全34記事）
            </h2>
            <p className="text-sm md:text-base text-slate-600">
              エリア、同行者、こだわり設備、予算帯など、あらゆる切り口から最適なグランピング記事をご案内します。
            </p>
          </div>

          <div className="space-y-12">
            {/* 1. エリア・ロケーション別 */}
            <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-200">
              <h3 className="font-bold text-xl text-slate-900 mb-6 flex items-center gap-3">
                <span className="p-2 bg-emerald-100 text-emerald-800 rounded-xl text-lg">🗾</span>
                エリア・ロケーションから探す
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <Link href="/silver-week-glamping-kanto-fuji-guide" className="p-4 rounded-2xl border border-slate-100 hover:border-emerald-300 hover:shadow-md transition bg-slate-50/50 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold text-emerald-700">関東・甲信越</span>
                    <h4 className="font-bold text-slate-800 text-sm mt-1 mb-2">富士山・関東グランピング</h4>
                    <p className="text-xs text-slate-500">客室から富士山を望むドームテント＆専用温泉露天風呂</p>
                  </div>
                  <span className="text-xs font-bold text-emerald-600 mt-3 flex items-center">記事を読む →</span>
                </Link>

                <Link href="/silver-week-glamping-kansai-biwako-awaji-guide" className="p-4 rounded-2xl border border-slate-100 hover:border-emerald-300 hover:shadow-md transition bg-slate-50/50 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold text-teal-700">関西</span>
                    <h4 className="font-bold text-slate-800 text-sm mt-1 mb-2">関西 琵琶湖＆淡路島</h4>
                    <p className="text-xs text-slate-500">レイクビュー＆オーシャンビュー！水辺リゾートと近江牛・淡路牛BBQ</p>
                  </div>
                  <span className="text-xs font-bold text-emerald-600 mt-3 flex items-center">記事を読む →</span>
                </Link>

                <Link href="/silver-week-glamping-tokai-shizuoka-aichi-guide" className="p-4 rounded-2xl border border-slate-100 hover:border-emerald-300 hover:shadow-md transition bg-slate-50/50 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold text-orange-700">東海・中部</span>
                    <h4 className="font-bold text-slate-800 text-sm mt-1 mb-2">東海・静岡・伊豆・愛知</h4>
                    <p className="text-xs text-slate-500">金目鯛・アワビの海鮮浜焼き、浜名湖や知多半島のサンセットドーム</p>
                  </div>
                  <span className="text-xs font-bold text-emerald-600 mt-3 flex items-center">記事を読む →</span>
                </Link>

                <Link href="/silver-week-glamping-kyushu-fukuoka-kumamoto-guide" className="p-4 rounded-2xl border border-slate-100 hover:border-emerald-300 hover:shadow-md transition bg-slate-50/50 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold text-emerald-700">九州</span>
                    <h4 className="font-bold text-slate-800 text-sm mt-1 mb-2">九州・阿蘇・糸島・由布院</h4>
                    <p className="text-xs text-slate-500">阿蘇カルデラの大草原パノラマ、糸島ビーチ、由布院温泉グランピング</p>
                  </div>
                  <span className="text-xs font-bold text-emerald-600 mt-3 flex items-center">記事を読む →</span>
                </Link>

                <Link href="/silver-week-glamping-tohoku-sendai-fukushima-guide" className="p-4 rounded-2xl border border-slate-100 hover:border-emerald-300 hover:shadow-md transition bg-slate-50/50 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold text-rose-700">東北</span>
                    <h4 className="font-bold text-slate-800 text-sm mt-1 mb-2">東北・仙台・福島・宮城</h4>
                    <p className="text-xs text-slate-500">蔵王や裏磐梯の雄大な大自然。一足早い紅葉の兆しとブランド牛</p>
                  </div>
                  <span className="text-xs font-bold text-emerald-600 mt-3 flex items-center">記事を読む →</span>
                </Link>

                <Link href="/silver-week-glamping-hokkaido-sapporo-furano-guide" className="p-4 rounded-2xl border border-slate-100 hover:border-emerald-300 hover:shadow-md transition bg-slate-50/50 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold text-blue-700">北海道</span>
                    <h4 className="font-bold text-slate-800 text-sm mt-1 mb-2">北海道・札幌・富良野・トマム</h4>
                    <p className="text-xs text-slate-500">湿気ゼロの爽快ステイ！富良野の丘陵、トマム雲海、秋サケBBQ</p>
                  </div>
                  <span className="text-xs font-bold text-emerald-600 mt-3 flex items-center">記事を読む →</span>
                </Link>

                <Link href="/silver-week-glamping-chugoku-shikoku-setouchi-guide" className="p-4 rounded-2xl border border-slate-100 hover:border-emerald-300 hover:shadow-md transition bg-slate-50/50 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold text-amber-700">中国・四国</span>
                    <h4 className="font-bold text-slate-800 text-sm mt-1 mb-2">瀬戸内・しまなみ・四国</h4>
                    <p className="text-xs text-slate-500">しまなみ海道の多島美、小豆島オリーブ牛、夕暮れマジックアワー</p>
                  </div>
                  <span className="text-xs font-bold text-emerald-600 mt-3 flex items-center">記事を読む →</span>
                </Link>

                <Link href="/silver-week-glamping-sea-kayak-marine-guide" className="p-4 rounded-2xl border border-slate-100 hover:border-emerald-300 hover:shadow-md transition bg-slate-50/50 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold text-cyan-700">海・ビーチ</span>
                    <h4 className="font-bold text-slate-800 text-sm mt-1 mb-2">海チカSUP・カヤック</h4>
                    <p className="text-xs text-slate-500">波音を聞いて眠るウォーターフロント。海釣り＆海鮮BBQ体験</p>
                  </div>
                  <span className="text-xs font-bold text-emerald-600 mt-3 flex items-center">記事を読む →</span>
                </Link>

                <Link href="/silver-week-glamping-riverside-valley-fishing-guide" className="p-4 rounded-2xl border border-slate-100 hover:border-emerald-300 hover:shadow-md transition bg-slate-50/50 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold text-emerald-700">清流・渓谷</span>
                    <h4 className="font-bold text-slate-800 text-sm mt-1 mb-2">清流リバーサイド＆イワナ釣り</h4>
                    <p className="text-xs text-slate-500">マイナスイオン溢れる渓流の目の前！釣った魚の塩焼きと川遊び</p>
                  </div>
                  <span className="text-xs font-bold text-emerald-600 mt-3 flex items-center">記事を読む →</span>
                </Link>

                <Link href="/silver-week-glamping-stargazing-astronomy-guide" className="p-4 rounded-2xl border border-slate-100 hover:border-emerald-300 hover:shadow-md transition bg-slate-50/50 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold text-indigo-700">高原・星空</span>
                    <h4 className="font-bold text-slate-800 text-sm mt-1 mb-2">標高1,000m 星空天体観測</h4>
                    <p className="text-xs text-slate-500">長野阿智村や八ヶ岳！客室専用の天体望遠鏡と焚き火シネマ</p>
                  </div>
                  <span className="text-xs font-bold text-emerald-600 mt-3 flex items-center">記事を読む →</span>
                </Link>
              </div>
            </div>

            {/* 2. こだわり設備・ラグジュアリー体験別 */}
            <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-200">
              <h3 className="font-bold text-xl text-slate-900 mb-6 flex items-center gap-3">
                <span className="p-2 bg-rose-100 text-rose-800 rounded-xl text-lg">♨️</span>
                こだわり設備・体験から探す
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <Link href="/silver-week-glamping-private-sauna-guide" className="p-4 rounded-2xl border border-slate-100 hover:border-rose-300 hover:shadow-md transition bg-slate-50/50 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold text-rose-700">ととのい</span>
                    <h4 className="font-bold text-slate-800 text-sm mt-1 mb-2">プライベートサウナ＆水風呂</h4>
                    <p className="text-xs text-slate-500">完全貸切バレルサウナ、天然地下水風呂、星空インフィニティ外気浴</p>
                  </div>
                  <span className="text-xs font-bold text-rose-600 mt-3 flex items-center">記事を読む →</span>
                </Link>

                <Link href="/silver-week-glamping-hotspring-onsen-spa-guide" className="p-4 rounded-2xl border border-slate-100 hover:border-rose-300 hover:shadow-md transition bg-slate-50/50 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold text-amber-700">名湯直結</span>
                    <h4 className="font-bold text-slate-800 text-sm mt-1 mb-2">源泉かけ流し本格温泉付き</h4>
                    <p className="text-xs text-slate-500">名門温泉宿直営！敷地内自家源泉を引いた客室半露天風呂リゾート</p>
                  </div>
                  <span className="text-xs font-bold text-rose-600 mt-3 flex items-center">記事を読む →</span>
                </Link>

                <Link href="/silver-week-glamping-private-pool-jacuzzi-guide" className="p-4 rounded-2xl border border-slate-100 hover:border-rose-300 hover:shadow-md transition bg-slate-50/50 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold text-cyan-700">ラグジュアリー</span>
                    <h4 className="font-bold text-slate-800 text-sm mt-1 mb-2">プライベートプール＆温水ジャグジー</h4>
                    <p className="text-xs text-slate-500">客室専用温水プールとジェットバス。シャンパン片手に楽しむ極上泊</p>
                  </div>
                  <span className="text-xs font-bold text-rose-600 mt-3 flex items-center">記事を読む →</span>
                </Link>

                <Link href="/silver-week-glamping-luxury-suite-villa-guide" className="p-4 rounded-2xl border border-slate-100 hover:border-rose-300 hover:shadow-md transition bg-slate-50/50 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold text-indigo-700">1日3組限定</span>
                    <h4 className="font-bold text-slate-800 text-sm mt-1 mb-2">最高峰ラグジュアリーヴィラ</h4>
                    <p className="text-xs text-slate-500">誰にも会わない完全独立型の一棟貸し。専属出張シェフディナー</p>
                  </div>
                  <span className="text-xs font-bold text-rose-600 mt-3 flex items-center">記事を読む →</span>
                </Link>

                <Link href="/silver-week-glamping-air-conditioning-luxury-bed-guide" className="p-4 rounded-2xl border border-slate-100 hover:border-rose-300 hover:shadow-md transition bg-slate-50/50 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold text-emerald-700">快適性重視</span>
                    <h4 className="font-bold text-slate-800 text-sm mt-1 mb-2">個別トイレバス＆シモンズ製ベッド</h4>
                    <p className="text-xs text-slate-500">共用設備・虫嫌いな女性も安心！一流ホテル級の快眠設備を完備</p>
                  </div>
                  <span className="text-xs font-bold text-rose-600 mt-3 flex items-center">記事を読む →</span>
                </Link>

                <Link href="/silver-week-glamping-cinema-theater-projector-guide" className="p-4 rounded-2xl border border-slate-100 hover:border-rose-300 hover:shadow-md transition bg-slate-50/50 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold text-indigo-700">エンタメ・推し活</span>
                    <h4 className="font-bold text-slate-800 text-sm mt-1 mb-2">巨大シアター＆プロジェクター</h4>
                    <p className="text-xs text-slate-500">100インチ超えの大画面！テント内での映画鑑賞会＆推し活お泊まり</p>
                  </div>
                  <span className="text-xs font-bold text-rose-600 mt-3 flex items-center">記事を読む →</span>
                </Link>

                <Link href="/silver-week-glamping-rainy-weather-indoor-guide" className="p-4 rounded-2xl border border-slate-100 hover:border-rose-300 hover:shadow-md transition bg-slate-50/50 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold text-slate-700">雨天安心</span>
                    <h4 className="font-bold text-slate-800 text-sm mt-1 mb-2">雨でも安心！全天候型グランピング</h4>
                    <p className="text-xs text-slate-500">屋根付きBBQデッキ＆室内プレイルーム。台風・秋雨でも快適</p>
                  </div>
                  <span className="text-xs font-bold text-rose-600 mt-3 flex items-center">記事を読む →</span>
                </Link>

                <Link href="/silver-week-glamping-bonfire-marshmallow-bar-guide" className="p-4 rounded-2xl border border-slate-100 hover:border-rose-300 hover:shadow-md transition bg-slate-50/50 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold text-amber-700">夜のチルタイム</span>
                    <h4 className="font-bold text-slate-800 text-sm mt-1 mb-2">焚き火BAR＆焼きマシュマロ</h4>
                    <p className="text-xs text-slate-500">ウイスキーやクラフトビール飲み放題、巨大スモア体験で大人の夜長</p>
                  </div>
                  <span className="text-xs font-bold text-rose-600 mt-3 flex items-center">記事を読む →</span>
                </Link>

                <Link href="/silver-week-glamping-morning-yoga-mindfulness-guide" className="p-4 rounded-2xl border border-slate-100 hover:border-rose-300 hover:shadow-md transition bg-slate-50/50 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold text-teal-700">美と健康</span>
                    <h4 className="font-bold text-slate-800 text-sm mt-1 mb-2">朝ヨガ＆森林セラピー女子旅</h4>
                    <p className="text-xs text-slate-500">朝陽と鳥の声で目覚める！オーガニック朝食とデトックスリトリート</p>
                  </div>
                  <span className="text-xs font-bold text-rose-600 mt-3 flex items-center">記事を読む →</span>
                </Link>
              </div>
            </div>

            {/* 3. 食事・グルメスタイル別 */}
            <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-200">
              <h3 className="font-bold text-xl text-slate-900 mb-6 flex items-center gap-3">
                <span className="p-2 bg-amber-100 text-amber-800 rounded-xl text-lg">🍖</span>
                食事・グルメスタイルから探す
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <Link href="/silver-week-glamping-bbq-empty-handed-guide" className="p-4 rounded-2xl border border-slate-100 hover:border-amber-300 hover:shadow-md transition bg-slate-50/50 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold text-amber-700">手ぶら・片付け不要</span>
                    <h4 className="font-bold text-slate-800 text-sm mt-1 mb-2">手ぶら黒毛和牛BBQ</h4>
                    <p className="text-xs text-slate-500">買い出し・火起こし不要！黒毛和牛サーロインや海鮮アヒージョの贅沢ディナー</p>
                  </div>
                  <span className="text-xs font-bold text-amber-600 mt-3 flex items-center">記事を読む →</span>
                </Link>

                <Link href="/silver-week-glamping-kitchen-cooking-local-food-guide" className="p-4 rounded-2xl border border-slate-100 hover:border-amber-300 hover:shadow-md transition bg-slate-50/50 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold text-emerald-700">自炊派・こだわり</span>
                    <h4 className="font-bold text-slate-800 text-sm mt-1 mb-2">キッチン付き＆道の駅買い出し料理</h4>
                    <p className="text-xs text-slate-500">地元の高原野菜や名産肉を自分たちで調理！調理器具・IH完備ヴィラ</p>
                  </div>
                  <span className="text-xs font-bold text-amber-600 mt-3 flex items-center">記事を読む →</span>
                </Link>

                <Link href="/silver-week-glamping-wine-brewery-craftbeer-guide" className="p-4 rounded-2xl border border-slate-100 hover:border-amber-300 hover:shadow-md transition bg-slate-50/50 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold text-rose-700">お酒好き・美酒</span>
                    <h4 className="font-bold text-slate-800 text-sm mt-1 mb-2">ワイナリー＆クラフトビール飲み放題</h4>
                    <p className="text-xs text-slate-500">山梨勝沼や長野のワイン巡り！ビールタップ飲み放題付きドームテント</p>
                  </div>
                  <span className="text-xs font-bold text-amber-600 mt-3 flex items-center">記事を読む →</span>
                </Link>
              </div>
            </div>

            {/* 4. 同行者・人数・予算別 */}
            <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-200">
              <h3 className="font-bold text-xl text-slate-900 mb-6 flex items-center gap-3">
                <span className="p-2 bg-blue-100 text-blue-800 rounded-xl text-lg">👥</span>
                同行者・人数・予算から探す
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <Link href="/silver-week-glamping-with-dogs-pets-guide" className="p-4 rounded-2xl border border-slate-100 hover:border-blue-300 hover:shadow-md transition bg-slate-50/50 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold text-amber-700">愛犬家・ペット</span>
                    <h4 className="font-bold text-slate-800 text-sm mt-1 mb-2">愛犬と泊まる！プライベートドッグラン付き</h4>
                    <p className="text-xs text-slate-500">客室直結の芝生ドッグラン＆ノーリードOK。足洗い場・ペット備品完備</p>
                  </div>
                  <span className="text-xs font-bold text-blue-600 mt-3 flex items-center">記事を読む →</span>
                </Link>

                <Link href="/silver-week-glamping-kids-play-activity-guide" className="p-4 rounded-2xl border border-slate-100 hover:border-blue-300 hover:shadow-md transition bg-slate-50/50 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold text-emerald-700">ファミリー・子供</span>
                    <h4 className="font-bold text-slate-800 text-sm mt-1 mb-2">子連れ巨大遊具＆収穫体験付き</h4>
                    <p className="text-xs text-slate-500">アスレチック、動物ふれあい牧場、秋のサツマイモ・栗拾い体験</p>
                  </div>
                  <span className="text-xs font-bold text-blue-600 mt-3 flex items-center">記事を読む →</span>
                </Link>

                <Link href="/silver-week-glamping-three-generation-family-guide" className="p-4 rounded-2xl border border-slate-100 hover:border-blue-300 hover:shadow-md transition bg-slate-50/50 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold text-teal-700">3世代家族</span>
                    <h4 className="font-bold text-slate-800 text-sm mt-1 mb-2">3世代（祖父母・親・孫）バリアフリー</h4>
                    <p className="text-xs text-slate-500">シニアも足腰安心の段差なし設計！和洋室ヴィラと敬老の日の記念旅</p>
                  </div>
                  <span className="text-xs font-bold text-blue-600 mt-3 flex items-center">記事を読む →</span>
                </Link>

                <Link href="/silver-week-glamping-cheap-student-budget-guide" className="p-4 rounded-2xl border border-slate-100 hover:border-blue-300 hover:shadow-md transition bg-slate-50/50 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold text-slate-700">学生・コスパ重視</span>
                    <h4 className="font-bold text-slate-800 text-sm mt-1 mb-2">1人1万円台前半！格安高コスパ宿</h4>
                    <p className="text-xs text-slate-500">4〜6人頭割り＆食材持ち込みで大幅節約。学生・若者グループ向け</p>
                  </div>
                  <span className="text-xs font-bold text-blue-600 mt-3 flex items-center">記事を読む →</span>
                </Link>

                <Link href="/silver-week-glamping-car-free-bus-train-guide" className="p-4 rounded-2xl border border-slate-100 hover:border-blue-300 hover:shadow-md transition bg-slate-50/50 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold text-teal-700">車なし・送迎あり</span>
                    <h4 className="font-bold text-slate-800 text-sm mt-1 mb-2">電車と無料送迎で行けるグランピング</h4>
                    <p className="text-xs text-slate-500">免許なし＆ペーパードライバーも安心！駅から徒歩や直行シャトルバス</p>
                  </div>
                  <span className="text-xs font-bold text-blue-600 mt-3 flex items-center">記事を読む →</span>
                </Link>

                <Link href="/silver-week-glamping-solo-stay-retreat-guide" className="p-4 rounded-2xl border border-slate-100 hover:border-blue-300 hover:shadow-md transition bg-slate-50/50 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold text-indigo-700">おひとり様</span>
                    <h4 className="font-bold text-slate-800 text-sm mt-1 mb-2">おひとり様歓迎ソログランピング</h4>
                    <p className="text-xs text-slate-500">1名泊プラン確約！静寂の森で読書・焚き火・温泉リトリート</p>
                  </div>
                  <span className="text-xs font-bold text-blue-600 mt-3 flex items-center">記事を読む →</span>
                </Link>

                <Link href="/silver-week-glamping-large-group-charter-guide" className="p-4 rounded-2xl border border-slate-100 hover:border-blue-300 hover:shadow-md transition bg-slate-50/50 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold text-indigo-700">10人以上・貸切</span>
                    <h4 className="font-bold text-slate-800 text-sm mt-1 mb-2">大人数・10人以上全棟貸切</h4>
                    <p className="text-xs text-slate-500">サークル合宿や社員旅行に！プライベートBBQと敷地貸切</p>
                  </div>
                  <span className="text-xs font-bold text-blue-600 mt-3 flex items-center">記事を読む →</span>
                </Link>

                <Link href="/silver-week-glamping-last-minute-empty-rooms-guide" className="p-4 rounded-2xl border border-slate-100 hover:border-blue-300 hover:shadow-md transition bg-slate-50/50 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold text-rose-700">直前駆け込み</span>
                    <h4 className="font-bold text-slate-800 text-sm mt-1 mb-2">まだ間に合う！直前予約・空室穴場</h4>
                    <p className="text-xs text-slate-500">連休直前でも取れる穴場エリアとキャンセル拾いの裏ワザ解説</p>
                  </div>
                  <span className="text-xs font-bold text-blue-600 mt-3 flex items-center">記事を読む →</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 楽天API連携：全国の人気グランピング施設ピックアップ */}
        {hotels.length > 0 && (
          <section className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-200">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
              <div>
                <span className="text-emerald-600 font-extrabold text-xs uppercase tracking-wider">Rakuten Travel Featured</span>
                <h2 className="font-journal-serif text-2xl md:text-3xl font-bold text-slate-900 mt-1">
                  全国の高評価グランピング施設ピックアップ
                </h2>
              </div>
              <span className="text-xs text-slate-500 bg-slate-100 px-3 py-1.5 rounded-full self-start md:self-auto">
                楽天トラベル公式API リアルタイムデータ
              </span>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {hotels.map((hotel, idx) => (
                <div key={idx} className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 flex flex-col hover:shadow-md transition">
                  <div className="h-48 relative overflow-hidden bg-slate-200">
                    <img
                      src={hotel.hotelImageUrl || "https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=800&q=80"}
                      alt={hotel.hotelName}
                      className="w-full h-full object-cover transition duration-300 hover:scale-105"
                    />
                    {hotel.reviewAverage && (
                      <div className="absolute bottom-2 left-2 bg-slate-900/80 backdrop-blur-sm text-amber-300 text-xs font-bold px-2.5 py-1 rounded-md flex items-center gap-1">
                        ★ {hotel.reviewAverage.toFixed(1)}
                        <span className="text-slate-300 font-normal">({hotel.reviewCount}件)</span>
                      </div>
                    )}
                  </div>
                  <div className="p-5 flex-grow flex flex-col justify-between">
                    <div>
                      <h3 className="font-bold text-slate-900 text-base mb-2 line-clamp-2">
                        {hotel.hotelName}
                      </h3>
                      <p className="text-xs text-slate-600 line-clamp-3 mb-4 leading-relaxed">
                        {hotel.hotelSpecial || "大自然に囲まれた極上グランピング体験。快適なドームテントと豪華BBQを満喫。"}
                      </p>
                    </div>
                    <div className="pt-4 border-t border-slate-200">
                      <div className="flex items-baseline justify-between mb-3">
                        <span className="text-xs text-slate-500">宿泊目安（1名〜）</span>
                        <span className="text-base font-extrabold text-emerald-700">
                          {hotel.hotelMinCharge ? `¥${hotel.hotelMinCharge.toLocaleString()}〜` : "プラン詳細参照"}
                        </span>
                      </div>
                      <a
                        href={hotel.affiliateUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full text-center bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 rounded-xl text-sm transition shadow-sm"
                      >
                        空室・プランを確認する
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* よくある質問 FAQ */}
        <section className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-200">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-2.5 h-8 bg-indigo-600 rounded-full"></span>
            <h2 className="font-journal-serif text-2xl md:text-3xl font-bold text-slate-900">
              グランピングに関するよくある質問（FAQ）
            </h2>
          </div>
          <div className="space-y-4">
            <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200">
              <h3 className="font-bold text-slate-900 text-base mb-2">Q. グランピングとキャンプの違いは何ですか？</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                キャンプはテント設営から調理・片付けまで全て自分で行いますが、グランピングは冷暖房・ベッド・専用水回りが完備され、食事も豪華食材が用意されるため、重い荷物を持たずに「手ぶら」でホテルと同等以上に快適なアウトドアを楽しめます。
              </p>
            </div>
            <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200">
              <h3 className="font-bold text-slate-900 text-base mb-2">Q. グランピングのベストシーズンはいつですか？</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                最もおすすめなのは秋（9月〜11月）です。猛暑や蚊などの虫が落ち着き、涼しい夜風の中で焚き火やサウナ、星空観賞が最も心地よく楽しめます。冬の薪ストーブや春のお花見グランピングも人気です。
              </p>
            </div>
            <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200">
              <h3 className="font-bold text-slate-900 text-base mb-2">Q. 雨が降っても楽しめますか？</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                全天候型の施設を選べば安心です。屋根付きの専用BBQデッキや開閉式ルーフ、断熱ドームテント、天然温泉大浴場が完備されており、雨の日でも濡れずにバーベキューや室内シアターを満喫できます。
              </p>
            </div>
          </div>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
          />
        </section>
      </div>
    </main>
  );
}
