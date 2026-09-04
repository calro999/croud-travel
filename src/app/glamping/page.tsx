import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【グランピング総合ガイド】目的・エリア・設備・予算・人数別のおすすめ施設と選び方",
  description: "全国のグランピング施設を目的・エリア・設備・人数別に分かりやすく整理した総合ガイド。グランピングの基本知識、キャンプとの違い、各季節の過ごし方、持ち物の目安、選び方のポイントを解説します。",
  keywords: [
    "グランピング", "グランピング おすすめ", "グランピングとは", "グランピング 持ち物", 
    "グランピング 関東", "グランピング 関西", "グランピング サウナ", "グランピング ペット可",
    "グランピング 子連れ", "グランピング 比較", "楽天トラベル"
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

  // 表示するFAQと完全に一致させた構造化データ
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "グランピングと一般的なキャンプの違いは何ですか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "一般的なキャンプは利用者がテントの設営、寝袋や調理器具の準備、火起こしや後片付けを自ら行うスタイルが中心です。一方、グランピング（Glamorous Camping）はあらかじめ常設されたドームテントやキャビン、ヴィラなどに滞在し、ベッドや冷暖房などの設備、食材や調理器具がプランに含まれているケースが多く、準備の手間を抑えて自然環境を楽しめる点が大きな違いです。ただし、トイレやシャワーが個別か共用か、食事の提供形態などは施設ごとに大きく異なります。"
        }
      },
      {
        "@type": "Question",
        "name": "グランピングはどの季節に行くのがおすすめですか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "グランピングは通年で営業している施設が多く、季節ごとに異なる楽しみ方があります。春（3〜5月）は新緑や過ごしやすい気候、夏（6〜8月）は水辺のアクティビティや高原での避暑、秋（9〜11月）は焚き火や紅葉の景観、冬（12〜2月）は薪ストーブや澄んだ星空観察などが魅力です。重視するアクティビティや寒暖差への対策に合わせて選ぶのがおすすめです。"
        }
      },
      {
        "@type": "Question",
        "name": "手ぶらで行ける施設の場合でも、持参したほうが良いものはありますか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "タオルや歯ブラシなどの基本アメニティが揃っている施設でも、屋外で過ごす時間が長いため、朝晩の冷え込みに備えた羽織りもの（マウンテンパーカーやフリース等）、テントの出入りがスムーズになる脱ぎ履きしやすい靴やサンダル、虫除け対策グッズ、モバイルバッテリーなどを用意しておくと安心です。"
        }
      },
      {
        "@type": "Question",
        "name": "雨の日でもグランピングは楽しめますか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "屋根付きの専用バーベキュースペースやガゼボが設置されている施設、室内にダイニングや調理スペースが備わっている施設を選べば、雨天時でも天候を気にせず食事や滞在を楽しむことができます。予約前に各施設の雨天時の食事場所やキャンセル規定を確認しておくと安心です。"
        }
      }
    ]
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      {/* ヒーローセクション */}
      <section className="relative bg-gradient-to-br from-emerald-950 via-teal-900 to-slate-900 text-white py-16 md:py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:24px_24px]"></div>
        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-300 px-4 py-1 rounded-full text-xs md:text-sm font-semibold mb-6 border border-emerald-400/30 backdrop-blur-sm">
            🏕️ グランピング総合ガイド
          </div>
          <h1 className="font-journal-serif text-3xl md:text-5xl font-bold tracking-tight leading-tight mb-6">
            【グランピング総合ガイド】<br className="hidden md:block" />
            <span className="text-emerald-400">目的・エリア・設備・人数別</span>の選び方とおすすめ施設
          </h1>
          <p className="text-sm md:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8">
            大自然の中で快適な滞在を楽しめるグランピング。
            ドームテント、一棟貸しヴィラ、温泉やサウナ付きなど多様化する施設の中から、
            旅の目的や同行者、エリアに合わせて最適なプランを選べるよう各テーマ別の記事をまとめました。
          </p>
          <div className="flex flex-wrap justify-center gap-2.5 text-xs md:text-sm">
            <a href="#about" className="bg-white/10 hover:bg-white/20 text-white px-3.5 py-1.5 rounded-lg border border-white/20 transition">グランピングとは？</a>
            <a href="#season" className="bg-white/10 hover:bg-white/20 text-white px-3.5 py-1.5 rounded-lg border border-white/20 transition">季節ごとの特徴</a>
            <a href="#packing" className="bg-white/10 hover:bg-white/20 text-white px-3.5 py-1.5 rounded-lg border border-white/20 transition">持ち物の目安</a>
            <a href="#categories" className="bg-emerald-500 text-slate-950 font-bold px-3.5 py-1.5 rounded-lg hover:bg-emerald-400 transition">テーマ別ガイド一覧</a>
          </div>
        </div>
      </section>

      {/* 楽天トラベル クーポン還元訴求バナー */}
      <div className="max-w-5xl mx-auto px-4 -mt-5 relative z-20">
        <div className="bg-gradient-to-r from-amber-600 to-orange-600 rounded-2xl p-4 md:p-5 shadow-lg text-white flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-2xl md:text-3xl">🏷️</span>
            <div>
              <div className="font-bold text-base md:text-lg">楽天トラベル グランピング特集</div>
              <div className="text-xs opacity-90">割引クーポンやポイントアップキャンペーンの対象プランをチェック</div>
            </div>
          </div>
          <a
            href="https://hb.afl.rakuten.co.jp/hgc/g0190dd6.20811eef.g0190dd6.20811340/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fcamp%2Fglamping%2F"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto text-center bg-slate-900 hover:bg-black text-amber-200 font-bold px-5 py-2.5 rounded-xl text-sm transition"
          >
            特集ページを見る
          </a>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-14 space-y-16">
        {/* 基礎知識：グランピングとは？ */}
        <section id="about" className="scroll-mt-24">
          <div className="flex items-center gap-3 mb-5">
            <span className="w-2 h-7 bg-emerald-600 rounded-full"></span>
            <h2 className="font-journal-serif text-2xl md:text-3xl font-bold text-slate-900">
              1. グランピングとは？一般的なキャンプとの主な違い
            </h2>
          </div>
          <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-200">
            <p className="text-slate-700 leading-relaxed mb-6 text-sm md:text-base">
              グランピング（Glamping）は、「Glamorous（魅力的な・華やかな）」と「Camping（キャンプ）」を組み合わせた言葉です。
              テントの設営や火起こし、寝袋の用意といった作業を最小限に抑え、常設されたドームテントやヴィラ、キャビンなどで快適にアウトドアの雰囲気を楽しむ宿泊形態を指します。
              ただし、設備やサービスの範囲は施設ごとに幅があるため、事前に確認することが重要です。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs md:text-sm border-collapse">
                <thead>
                  <tr className="bg-slate-100 text-slate-700 border-b border-slate-200">
                    <th className="p-3">比較項目</th>
                    <th className="p-3 font-bold text-emerald-800">グランピング（一般的な傾向）</th>
                    <th className="p-3 text-slate-500">一般的なキャンプ</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-600">
                  <tr>
                    <td className="p-3 font-semibold text-slate-700">宿泊設備</td>
                    <td className="p-3 text-emerald-900 font-medium">常設のドームテント、コテージ、トレーラーハウスなど（冷暖房付きの施設が多い）</td>
                    <td className="p-3">利用者が持参・設営するテントやタープ</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-slate-700">寝具</td>
                    <td className="p-3 text-emerald-900 font-medium">ベッドやマットレス、寝具類が備え付けられていることが一般的</td>
                    <td className="p-3">マット、コット、寝袋（シュラフ）等を持参</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-slate-700">水回り（風呂・トイレ）</td>
                    <td className="p-3 text-emerald-900 font-medium">客室専用のシャワー・トイレ付きの施設から、敷地内の共同棟を利用するタイプまで様々</td>
                    <td className="p-3">キャンプ場内の共用サニタリー棟を利用</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-slate-700">食事（BBQ等）</td>
                    <td className="p-3 text-emerald-900 font-medium">食材・機材付きの手ぶらプランが主流。持ち込み可能な施設もある</td>
                    <td className="p-3">食材の買い出しから下ごしらえ、調理、炭の後始末まで自ら行う</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-slate-700">準備・持ち物</td>
                    <td className="p-3 text-emerald-900 font-medium">着替えや個人用品中心で参加可能（大がかりな道具の持参は不要）</td>
                    <td className="p-3">テント、ランタン、調理器具、寝具など多数の道具を準備</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* 季節別の特徴 */}
        <section id="season" className="scroll-mt-24">
          <div className="flex items-center gap-3 mb-5">
            <span className="w-2 h-7 bg-teal-600 rounded-full"></span>
            <h2 className="font-journal-serif text-2xl md:text-3xl font-bold text-slate-900">
              2. 季節ごとの特徴と過ごし方
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col">
              <div className="text-xl mb-2 font-bold text-slate-700">春（3月〜5月）</div>
              <h3 className="font-bold text-slate-800 text-sm mb-2">過ごしやすい気候と新緑</h3>
              <p className="text-xs text-slate-600 leading-relaxed flex-grow">
                厳しい寒さが和らぎ、屋外での食事や散策が快適になる時期です。朝晩と日中の気温差が大きいため、脱ぎ着しやすい防寒着の準備が適しています。
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col">
              <div className="text-xl mb-2 font-bold text-slate-700">夏（6月〜8月）</div>
              <h3 className="font-bold text-slate-800 text-sm mb-2">水辺のアクティビティと避暑</h3>
              <p className="text-xs text-slate-600 leading-relaxed flex-grow">
                海沿いや湖畔、川沿い、高原エリアでの滞在が人気を集めます。プールやウォーターアクティビティが楽しめる一方、虫除け対策や日差し対策が必須です。
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col">
              <div className="text-xl mb-2 font-bold text-slate-700">秋（9月〜11月）</div>
              <h3 className="font-bold text-slate-800 text-sm mb-2">焚き火や紅葉を楽しむ季節</h3>
              <p className="text-xs text-slate-600 leading-relaxed flex-grow">
                夏の暑さが落ち着き、涼しい空気の中で焚き火やバーベキューをじっくり楽しむのに向いている季節です。標高の高いエリアでは早めの防寒対策が求められます。
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col">
              <div className="text-xl mb-2 font-bold text-slate-700">冬（12月〜2月）</div>
              <h3 className="font-bold text-slate-800 text-sm mb-2">薪ストーブと澄んだ冬空</h3>
              <p className="text-xs text-slate-600 leading-relaxed flex-grow">
                暖房設備や薪ストーブ、こたつなどが用意されたドーム内で暖かく過ごせます。空気が澄んでいるため星空観察や温泉付きプランの需要が高い季節です。
              </p>
            </div>
          </div>
        </section>

        {/* 持ち物の目安 */}
        <section id="packing" className="scroll-mt-24">
          <div className="flex items-center gap-3 mb-5">
            <span className="w-2 h-7 bg-amber-600 rounded-full"></span>
            <h2 className="font-journal-serif text-2xl md:text-3xl font-bold text-slate-900">
              3. グランピングであると便利な持ち物
            </h2>
          </div>
          <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-200">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-2.5">
                <h3 className="font-bold text-slate-800 text-sm flex items-center gap-2">
                  <span className="w-2 h-2 bg-emerald-600 rounded-full"></span>
                  衣服・寒暖差対策
                </h3>
                <ul className="text-xs text-slate-600 space-y-2">
                  <li className="flex items-start gap-1.5">・<strong>脱ぎ着しやすい上着</strong>（自然豊かな場所は朝晩冷え込む傾向があります）</li>
                  <li className="flex items-start gap-1.5">・<strong>脱ぎ履きしやすい靴やサンダル</strong>（テントやデッキの出入り時に便利です）</li>
                  <li className="flex items-start gap-1.5">・<strong>綿素材の服</strong>（焚き火をする場合、火の粉による穴あき予防に有効です）</li>
                </ul>
              </div>
              <div className="space-y-2.5">
                <h3 className="font-bold text-slate-800 text-sm flex items-center gap-2">
                  <span className="w-2 h-2 bg-emerald-600 rounded-full"></span>
                  衛生・野外対策グッズ
                </h3>
                <ul className="text-xs text-slate-600 space-y-2">
                  <li className="flex items-start gap-1.5">・<strong>虫除けスプレー・かゆみ止め</strong>（春〜秋の屋外滞在時の備え）</li>
                  <li className="flex items-start gap-1.5">・<strong>日焼け止め・帽子</strong>（屋外テラスや散策時の日差し対策）</li>
                  <li className="flex items-start gap-1.5">・<strong>ウェットティッシュ</strong>（バーベキュー時や手元を拭く際に重宝します）</li>
                </ul>
              </div>
              <div className="space-y-2.5">
                <h3 className="font-bold text-slate-800 text-sm flex items-center gap-2">
                  <span className="w-2 h-2 bg-emerald-600 rounded-full"></span>
                  快適に過ごすためのアイテム
                </h3>
                <ul className="text-xs text-slate-600 space-y-2">
                  <li className="flex items-start gap-1.5">・<strong>モバイルバッテリー</strong>（屋外での写真撮影や動画視聴用）</li>
                  <li className="flex items-start gap-1.5">・<strong>水着・ラッシュガード</strong>（サウナやプール利用が可能な施設の場合）</li>
                  <li className="flex items-start gap-1.5">・<strong>持ち込み用の飲料やお菓子</strong>（売店が早く閉まる施設もあるため）</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 pt-5 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 bg-slate-50 p-4 rounded-2xl">
              <span className="text-xs text-slate-600">実際の失敗談や事前の準備チェックはこちら：</span>
              <Link
                href="/glamping-first-time-regrets-packing-guide"
                className="text-emerald-700 hover:text-emerald-800 font-bold text-xs md:text-sm flex items-center gap-1 underline"
              >
                初めてのグランピングで後悔したことワースト5＆持ち物チェックリスト →
              </Link>
            </div>
          </div>
        </section>

        {/* テーマ別ガイド一覧 */}
        <section id="categories" className="scroll-mt-24">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-emerald-600 font-bold text-xs uppercase tracking-wider">Directory</span>
            <h2 className="font-journal-serif text-2xl md:text-4xl font-bold text-slate-900 mt-2 mb-3">
              条件・テーマ別グランピングガイド一覧
            </h2>
            <p className="text-xs md:text-sm text-slate-600">
              エリア、こだわり設備、人数や予算など、ご希望の条件に応じた詳細記事をご覧いただけます。
            </p>
          </div>

          <div className="space-y-10">
            {/* 1. エリア・ロケーション別 */}
            <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-200">
              <h3 className="font-bold text-lg md:text-xl text-slate-900 mb-5 flex items-center gap-2.5">
                <span className="p-1.5 bg-emerald-100 text-emerald-800 rounded-lg text-base">🗾</span>
                エリア・ロケーションから選ぶ
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
                <Link href="/silver-week-glamping-kanto-fuji-guide" className="p-4 rounded-xl border border-slate-100 hover:border-emerald-300 hover:shadow-sm transition bg-slate-50/50 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold text-emerald-700">関東・甲信越</span>
                    <h4 className="font-bold text-slate-800 text-sm mt-1 mb-1.5">富士山・関東グランピング</h4>
                    <p className="text-xs text-slate-500">客室から富士山を望むドームテントや天然温泉付き施設特集</p>
                  </div>
                  <span className="text-xs font-semibold text-emerald-600 mt-3">記事を読む →</span>
                </Link>

                <Link href="/silver-week-glamping-kansai-biwako-awaji-guide" className="p-4 rounded-xl border border-slate-100 hover:border-emerald-300 hover:shadow-sm transition bg-slate-50/50 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold text-teal-700">関西</span>
                    <h4 className="font-bold text-slate-800 text-sm mt-1 mb-1.5">関西 琵琶湖＆淡路島</h4>
                    <p className="text-xs text-slate-500">レイクサイドやオーシャンビューのリゾートヴィラ特集</p>
                  </div>
                  <span className="text-xs font-semibold text-emerald-600 mt-3">記事を読む →</span>
                </Link>

                <Link href="/silver-week-glamping-tokai-shizuoka-aichi-guide" className="p-4 rounded-xl border border-slate-100 hover:border-emerald-300 hover:shadow-sm transition bg-slate-50/50 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold text-orange-700">東海・中部</span>
                    <h4 className="font-bold text-slate-800 text-sm mt-1 mb-1.5">東海・静岡・伊豆・愛知</h4>
                    <p className="text-xs text-slate-500">海鮮バーベキューや浜名湖・知多半島のドーム施設特集</p>
                  </div>
                  <span className="text-xs font-semibold text-emerald-600 mt-3">記事を読む →</span>
                </Link>

                <Link href="/silver-week-glamping-kyushu-fukuoka-kumamoto-guide" className="p-4 rounded-xl border border-slate-100 hover:border-emerald-300 hover:shadow-sm transition bg-slate-50/50 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold text-emerald-700">九州</span>
                    <h4 className="font-bold text-slate-800 text-sm mt-1 mb-1.5">九州・阿蘇・糸島・由布院</h4>
                    <p className="text-xs text-slate-500">阿蘇の草原パノラマや糸島海岸、温泉地近接施設特集</p>
                  </div>
                  <span className="text-xs font-semibold text-emerald-600 mt-3">記事を読む →</span>
                </Link>

                <Link href="/silver-week-glamping-tohoku-sendai-fukushima-guide" className="p-4 rounded-xl border border-slate-100 hover:border-emerald-300 hover:shadow-sm transition bg-slate-50/50 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold text-rose-700">東北</span>
                    <h4 className="font-bold text-slate-800 text-sm mt-1 mb-1.5">東北・仙台・福島・宮城</h4>
                    <p className="text-xs text-slate-500">蔵王や裏磐梯など雄大な自然に囲まれたグランピング特集</p>
                  </div>
                  <span className="text-xs font-semibold text-emerald-600 mt-3">記事を読む →</span>
                </Link>

                <Link href="/silver-week-glamping-hokkaido-sapporo-furano-guide" className="p-4 rounded-xl border border-slate-100 hover:border-emerald-300 hover:shadow-sm transition bg-slate-50/50 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold text-blue-700">北海道</span>
                    <h4 className="font-bold text-slate-800 text-sm mt-1 mb-1.5">北海道・札幌・富良野・トマム</h4>
                    <p className="text-xs text-slate-500">開放的な北の大地で広大な風景を楽しむリゾート特集</p>
                  </div>
                  <span className="text-xs font-semibold text-emerald-600 mt-3">記事を読む →</span>
                </Link>

                <Link href="/silver-week-glamping-chugoku-shikoku-setouchi-guide" className="p-4 rounded-xl border border-slate-100 hover:border-emerald-300 hover:shadow-sm transition bg-slate-50/50 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold text-amber-700">中国・四国</span>
                    <h4 className="font-bold text-slate-800 text-sm mt-1 mb-1.5">瀬戸内・しまなみ・四国</h4>
                    <p className="text-xs text-slate-500">しまなみ海道の多島美や海沿いロケーションの施設特集</p>
                  </div>
                  <span className="text-xs font-semibold text-emerald-600 mt-3">記事を読む →</span>
                </Link>

                <Link href="/silver-week-glamping-sea-kayak-marine-guide" className="p-4 rounded-xl border border-slate-100 hover:border-emerald-300 hover:shadow-sm transition bg-slate-50/50 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold text-cyan-700">海・ビーチ</span>
                    <h4 className="font-bold text-slate-800 text-sm mt-1 mb-1.5">海沿いグランピング＆マリン体験</h4>
                    <p className="text-xs text-slate-500">海岸直結やSUP・カヤック等の水辺体験ができる施設特集</p>
                  </div>
                  <span className="text-xs font-semibold text-emerald-600 mt-3">記事を読む →</span>
                </Link>

                <Link href="/silver-week-glamping-riverside-valley-fishing-guide" className="p-4 rounded-xl border border-slate-100 hover:border-emerald-300 hover:shadow-sm transition bg-slate-50/50 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold text-emerald-700">清流・渓谷</span>
                    <h4 className="font-bold text-slate-800 text-sm mt-1 mb-1.5">清流リバーサイド＆川遊び</h4>
                    <p className="text-xs text-slate-500">川のせせらぎを聞きながら過ごせる渓流沿いの施設特集</p>
                  </div>
                  <span className="text-xs font-semibold text-emerald-600 mt-3">記事を読む →</span>
                </Link>

                <Link href="/silver-week-glamping-stargazing-astronomy-guide" className="p-4 rounded-xl border border-slate-100 hover:border-emerald-300 hover:shadow-sm transition bg-slate-50/50 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold text-indigo-700">高原・星空</span>
                    <h4 className="font-bold text-slate-800 text-sm mt-1 mb-1.5">高標高エリア・星空観察</h4>
                    <p className="text-xs text-slate-500">澄んだ夜空で天体観察が楽しめる高原グランピング特集</p>
                  </div>
                  <span className="text-xs font-semibold text-emerald-600 mt-3">記事を読む →</span>
                </Link>
              </div>
            </div>

            {/* 2. こだわり設備・体験別 */}
            <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-200">
              <h3 className="font-bold text-lg md:text-xl text-slate-900 mb-5 flex items-center gap-2.5">
                <span className="p-1.5 bg-rose-100 text-rose-800 rounded-lg text-base">♨️</span>
                設備や体験から選ぶ
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
                <Link href="/silver-week-glamping-private-sauna-guide" className="p-4 rounded-xl border border-slate-100 hover:border-rose-300 hover:shadow-sm transition bg-slate-50/50 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold text-rose-700">サウナ</span>
                    <h4 className="font-bold text-slate-800 text-sm mt-1 mb-1.5">プライベートサウナ付き</h4>
                    <p className="text-xs text-slate-500">貸切利用できるバレルサウナやテントサウナ付き施設特集</p>
                  </div>
                  <span className="text-xs font-semibold text-rose-600 mt-3">記事を読む →</span>
                </Link>

                <Link href="/silver-week-glamping-hotspring-onsen-spa-guide" className="p-4 rounded-xl border border-slate-100 hover:border-rose-300 hover:shadow-sm transition bg-slate-50/50 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold text-amber-700">温泉</span>
                    <h4 className="font-bold text-slate-800 text-sm mt-1 mb-1.5">天然温泉・露天風呂付き</h4>
                    <p className="text-xs text-slate-500">敷地内や客室に温泉が引かれているグランピング施設特集</p>
                  </div>
                  <span className="text-xs font-semibold text-rose-600 mt-3">記事を読む →</span>
                </Link>

                <Link href="/silver-week-glamping-private-pool-jacuzzi-guide" className="p-4 rounded-xl border border-slate-100 hover:border-rose-300 hover:shadow-sm transition bg-slate-50/50 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold text-cyan-700">プール・ジャグジー</span>
                    <h4 className="font-bold text-slate-800 text-sm mt-1 mb-1.5">専用プール＆ジャグジー付き</h4>
                    <p className="text-xs text-slate-500">客室専用のプールや外気浴用ジャグジーを備えたヴィラ特集</p>
                  </div>
                  <span className="text-xs font-semibold text-rose-600 mt-3">記事を読む →</span>
                </Link>

                <Link href="/silver-week-glamping-luxury-suite-villa-guide" className="p-4 rounded-xl border border-slate-100 hover:border-rose-300 hover:shadow-sm transition bg-slate-50/50 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold text-indigo-700">一棟貸し</span>
                    <h4 className="font-bold text-slate-800 text-sm mt-1 mb-1.5">独立型ラグジュアリーヴィラ</h4>
                    <p className="text-xs text-slate-500">他グループと離れたプライベート空間を確保できる宿泊棟特集</p>
                  </div>
                  <span className="text-xs font-semibold text-rose-600 mt-3">記事を読む →</span>
                </Link>

                <Link href="/silver-week-glamping-air-conditioning-luxury-bed-guide" className="p-4 rounded-xl border border-slate-100 hover:border-rose-300 hover:shadow-sm transition bg-slate-50/50 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold text-emerald-700">水回り重視</span>
                    <h4 className="font-bold text-slate-800 text-sm mt-1 mb-1.5">個別トイレ・バス＆快適ベッド</h4>
                    <p className="text-xs text-slate-500">客室内に水回りが完備され、ホテルのように過ごせる施設特集</p>
                  </div>
                  <span className="text-xs font-semibold text-rose-600 mt-3">記事を読む →</span>
                </Link>

                <Link href="/silver-week-glamping-cinema-theater-projector-guide" className="p-4 rounded-xl border border-slate-100 hover:border-rose-300 hover:shadow-sm transition bg-slate-50/50 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold text-indigo-700">シアター</span>
                    <h4 className="font-bold text-slate-800 text-sm mt-1 mb-1.5">プロジェクター付きドーム</h4>
                    <p className="text-xs text-slate-500">大画面スクリーンで映画や動画鑑賞を楽しめる施設特集</p>
                  </div>
                  <span className="text-xs font-semibold text-rose-600 mt-3">記事を読む →</span>
                </Link>

                <Link href="/silver-week-glamping-rainy-weather-indoor-guide" className="p-4 rounded-xl border border-slate-100 hover:border-rose-300 hover:shadow-sm transition bg-slate-50/50 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold text-slate-700">全天候型</span>
                    <h4 className="font-bold text-slate-800 text-sm mt-1 mb-1.5">屋根付きBBQデッキ完備</h4>
                    <p className="text-xs text-slate-500">雨天時でも屋外バーベキューが可能な屋根付きテラスのある施設特集</p>
                  </div>
                  <span className="text-xs font-semibold text-rose-600 mt-3">記事を読む →</span>
                </Link>

                <Link href="/silver-week-glamping-bonfire-marshmallow-bar-guide" className="p-4 rounded-xl border border-slate-100 hover:border-rose-300 hover:shadow-sm transition bg-slate-50/50 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold text-amber-700">夜の時間</span>
                    <h4 className="font-bold text-slate-800 text-sm mt-1 mb-1.5">焚き火スペース＆カフェBAR</h4>
                    <p className="text-xs text-slate-500">焚き火ラウンジやドリンクサービスを提供している施設特集</p>
                  </div>
                  <span className="text-xs font-semibold text-rose-600 mt-3">記事を読む →</span>
                </Link>

                <Link href="/silver-week-glamping-morning-yoga-mindfulness-guide" className="p-4 rounded-xl border border-slate-100 hover:border-rose-300 hover:shadow-sm transition bg-slate-50/50 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold text-teal-700">リトリート</span>
                    <h4 className="font-bold text-slate-800 text-sm mt-1 mb-1.5">森林浴・リフレッシュ体験</h4>
                    <p className="text-xs text-slate-500">自然環境の中で静かに過ごせるウェルネス志向の施設特集</p>
                  </div>
                  <span className="text-xs font-semibold text-rose-600 mt-3">記事を読む →</span>
                </Link>
              </div>
            </div>

            {/* 3. 食事スタイル別 */}
            <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-200">
              <h3 className="font-bold text-lg md:text-xl text-slate-900 mb-5 flex items-center gap-2.5">
                <span className="p-1.5 bg-amber-100 text-amber-800 rounded-lg text-base">🍖</span>
                食事スタイルから選ぶ
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
                <Link href="/silver-week-glamping-bbq-empty-handed-guide" className="p-4 rounded-xl border border-slate-100 hover:border-amber-300 hover:shadow-sm transition bg-slate-50/50 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold text-amber-700">手ぶら食事付き</span>
                    <h4 className="font-bold text-slate-800 text-sm mt-1 mb-1.5">手ぶらバーベキュープラン</h4>
                    <p className="text-xs text-slate-500">お肉や海鮮などの食材・機材がセットになった手軽なプラン特集</p>
                  </div>
                  <span className="text-xs font-semibold text-amber-600 mt-3">記事を読む →</span>
                </Link>

                <Link href="/silver-week-glamping-kitchen-cooking-local-food-guide" className="p-4 rounded-xl border border-slate-100 hover:border-amber-300 hover:shadow-sm transition bg-slate-50/50 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold text-emerald-700">自炊・持ち込み</span>
                    <h4 className="font-bold text-slate-800 text-sm mt-1 mb-1.5">キッチン付き・食材持ち込み自由</h4>
                    <p className="text-xs text-slate-500">道の駅などで仕入れた地元食材を自由に調理できるコテージ特集</p>
                  </div>
                  <span className="text-xs font-semibold text-amber-600 mt-3">記事を読む →</span>
                </Link>

                <Link href="/silver-week-glamping-wine-brewery-craftbeer-guide" className="p-4 rounded-xl border border-slate-100 hover:border-amber-300 hover:shadow-sm transition bg-slate-50/50 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold text-rose-700">ドリンク充実</span>
                    <h4 className="font-bold text-slate-800 text-sm mt-1 mb-1.5">ワイン・地ビール提供施設</h4>
                    <p className="text-xs text-slate-500">ワイナリー近接やクラフトビール飲み放題等のプランがある施設特集</p>
                  </div>
                  <span className="text-xs font-semibold text-amber-600 mt-3">記事を読む →</span>
                </Link>
              </div>
            </div>

            {/* 4. 同行者・人数・予算別 */}
            <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-200">
              <h3 className="font-bold text-lg md:text-xl text-slate-900 mb-5 flex items-center gap-2.5">
                <span className="p-1.5 bg-blue-100 text-blue-800 rounded-lg text-base">👥</span>
                同行者・人数・予算から選ぶ
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
                <Link href="/silver-week-glamping-with-dogs-pets-guide" className="p-4 rounded-xl border border-slate-100 hover:border-blue-300 hover:shadow-sm transition bg-slate-50/50 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold text-amber-700">ペット同伴</span>
                    <h4 className="font-bold text-slate-800 text-sm mt-1 mb-1.5">愛犬と泊まれるグランピング</h4>
                    <p className="text-xs text-slate-500">プライベートドッグラン付きやペット用アメニティが揃う宿特集</p>
                  </div>
                  <span className="text-xs font-semibold text-blue-600 mt-3">記事を読む →</span>
                </Link>

                <Link href="/silver-week-glamping-kids-play-activity-guide" className="p-4 rounded-xl border border-slate-100 hover:border-blue-300 hover:shadow-sm transition bg-slate-50/50 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold text-emerald-700">子連れファミリー</span>
                    <h4 className="font-bold text-slate-800 text-sm mt-1 mb-1.5">遊具や体験アクティビティ付き</h4>
                    <p className="text-xs text-slate-500">アスレチックや収穫体験など、子供と一緒に楽しめる施設特集</p>
                  </div>
                  <span className="text-xs font-semibold text-blue-600 mt-3">記事を読む →</span>
                </Link>

                <Link href="/silver-week-glamping-three-generation-family-guide" className="p-4 rounded-xl border border-slate-100 hover:border-blue-300 hover:shadow-sm transition bg-slate-50/50 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold text-teal-700">3世代旅行</span>
                    <h4 className="font-bold text-slate-800 text-sm mt-1 mb-1.5">3世代対応・和洋室ヴィラ</h4>
                    <p className="text-xs text-slate-500">シニア層も過ごしやすい段差の少ない設計や和室スペース付き施設特集</p>
                  </div>
                  <span className="text-xs font-semibold text-blue-600 mt-3">記事を読む →</span>
                </Link>

                <Link href="/silver-week-glamping-cheap-student-budget-guide" className="p-4 rounded-xl border border-slate-100 hover:border-blue-300 hover:shadow-sm transition bg-slate-50/50 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold text-slate-700">予算重視</span>
                    <h4 className="font-bold text-slate-800 text-sm mt-1 mb-1.5">リーズナブルなコテージ・宿</h4>
                    <p className="text-xs text-slate-500">複数名での頭割りや食材持ち込みで費用を抑えやすい施設特集</p>
                  </div>
                  <span className="text-xs font-semibold text-blue-600 mt-3">記事を読む →</span>
                </Link>

                <Link href="/silver-week-glamping-car-free-bus-train-guide" className="p-4 rounded-xl border border-slate-100 hover:border-blue-300 hover:shadow-sm transition bg-slate-50/50 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold text-teal-700">車なし・公共交通</span>
                    <h4 className="font-bold text-slate-800 text-sm mt-1 mb-1.5">電車や送迎で行ける施設</h4>
                    <p className="text-xs text-slate-500">最寄駅から徒歩圏内やシャトルバス送迎が利用できる施設特集</p>
                  </div>
                  <span className="text-xs font-semibold text-blue-600 mt-3">記事を読む →</span>
                </Link>

                <Link href="/silver-week-glamping-solo-stay-retreat-guide" className="p-4 rounded-xl border border-slate-100 hover:border-blue-300 hover:shadow-sm transition bg-slate-50/50 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold text-indigo-700">1名利用</span>
                    <h4 className="font-bold text-slate-800 text-sm mt-1 mb-1.5">ソログランピング対応施設</h4>
                    <p className="text-xs text-slate-500">1人利用プランが設定されており静かに過ごせる施設特集</p>
                  </div>
                  <span className="text-xs font-semibold text-blue-600 mt-3">記事を読む →</span>
                </Link>

                <Link href="/silver-week-glamping-large-group-charter-guide" className="p-4 rounded-xl border border-slate-100 hover:border-blue-300 hover:shadow-sm transition bg-slate-50/50 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold text-indigo-700">大人数・貸切</span>
                    <h4 className="font-bold text-slate-800 text-sm mt-1 mb-1.5">大人数向け・棟貸切プラン</h4>
                    <p className="text-xs text-slate-500">サークルや複数家族での宿泊に適した大型コテージ・貸切特集</p>
                  </div>
                  <span className="text-xs font-semibold text-blue-600 mt-3">記事を読む →</span>
                </Link>

                <Link href="/silver-week-glamping-last-minute-empty-rooms-guide" className="p-4 rounded-xl border border-slate-100 hover:border-blue-300 hover:shadow-sm transition bg-slate-50/50 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold text-rose-700">直前予約</span>
                    <h4 className="font-bold text-slate-800 text-sm mt-1 mb-1.5">直前予約・空室探しのポイント</h4>
                    <p className="text-xs text-slate-500">連休直前に予約を探す際のエリア選びやキャンセル拾いの注意点</p>
                  </div>
                  <span className="text-xs font-semibold text-blue-600 mt-3">記事を読む →</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 楽天API連携：全国の人気グランピング施設ピックアップ */}
        {hotels.length > 0 && (
          <section className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-200">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-6">
              <div>
                <span className="text-emerald-700 font-bold text-xs uppercase tracking-wider">Rakuten Travel Data</span>
                <h2 className="font-journal-serif text-xl md:text-2xl font-bold text-slate-900 mt-0.5">
                  グランピング施設ピックアップ
                </h2>
              </div>
              <span className="text-xs text-slate-500 bg-slate-100 px-3 py-1.5 rounded-full self-start md:self-auto">
                楽天トラベルAPI取得データ
              </span>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {hotels.map((hotel, idx) => (
                <div key={idx} className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 flex flex-col hover:shadow-sm transition">
                  <div className="h-44 relative overflow-hidden bg-slate-200">
                    <img
                      src={hotel.hotelImageUrl || "https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=800&q=80"}
                      alt={hotel.hotelName}
                      className="w-full h-full object-cover"
                    />
                    {hotel.reviewAverage && (
                      <div className="absolute bottom-2 left-2 bg-slate-900/80 backdrop-blur-sm text-amber-300 text-xs font-bold px-2 py-0.5 rounded flex items-center gap-1">
                        ★ {hotel.reviewAverage.toFixed(1)}
                        <span className="text-slate-300 font-normal text-[11px]">({hotel.reviewCount}件)</span>
                      </div>
                    )}
                  </div>
                  <div className="p-4 flex-grow flex flex-col justify-between">
                    <div>
                      <h3 className="font-bold text-slate-900 text-sm mb-1.5 line-clamp-2">
                        {hotel.hotelName}
                      </h3>
                      <p className="text-xs text-slate-600 line-clamp-2 mb-3 leading-relaxed">
                        {hotel.hotelSpecial || "大自然の中で快適に過ごせるグランピング施設。詳細はプラン一覧をご確認ください。"}
                      </p>
                    </div>
                    <div className="pt-3 border-t border-slate-200">
                      <div className="flex items-baseline justify-between mb-2.5">
                        <span className="text-xs text-slate-500">宿泊料金の目安</span>
                        <span className="text-sm font-bold text-emerald-700">
                          {hotel.hotelMinCharge ? `¥${hotel.hotelMinCharge.toLocaleString()}〜` : "プラン詳細参照"}
                        </span>
                      </div>
                      <a
                        href={hotel.affiliateUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full text-center bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 rounded-lg text-xs transition"
                      >
                        空室・料金プランを見る
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
            <span className="w-2 h-7 bg-indigo-600 rounded-full"></span>
            <h2 className="font-journal-serif text-xl md:text-2xl font-bold text-slate-900">
              グランピングに関するよくある質問（FAQ）
            </h2>
          </div>
          <div className="space-y-4">
            <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200">
              <h3 className="font-bold text-slate-900 text-sm md:text-base mb-2">Q. グランピングと一般的なキャンプの違いは何ですか？</h3>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                一般的なキャンプは利用者がテントの設営、寝袋や調理器具の準備、火起こしや後片付けを自ら行うスタイルが中心です。一方、グランピング（Glamorous Camping）はあらかじめ常設されたドームテントやキャビン、ヴィラなどに滞在し、ベッドや冷暖房などの設備、食材や調理器具がプランに含まれているケースが多く、準備の手間を抑えて自然環境を楽しめる点が大きな違いです。ただし、トイレやシャワーが個別か共用か、食事の提供形態などは施設ごとに大きく異なります。
              </p>
            </div>
            <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200">
              <h3 className="font-bold text-slate-900 text-sm md:text-base mb-2">Q. グランピングはどの季節に行くのがおすすめですか？</h3>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                グランピングは通年で営業している施設が多く、季節ごとに異なる楽しみ方があります。春（3〜5月）は新緑や過ごしやすい気候、夏（6〜8月）は水辺のアクティビティや高原での避暑、秋（9〜11月）は焚き火や紅葉の景観、冬（12〜2月）は薪ストーブや澄んだ星空観察などが魅力です。重視するアクティビティや寒暖差への対策に合わせて選ぶのがおすすめです。
              </p>
            </div>
            <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200">
              <h3 className="font-bold text-slate-900 text-sm md:text-base mb-2">Q. 手ぶらで行ける施設の場合でも、持参したほうが良いものはありますか？</h3>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                タオルや歯ブラシなどの基本アメニティが揃っている施設でも、屋外で過ごす時間が長いため、朝晩の冷え込みに備えた羽織りもの（マウンテンパーカーやフリース等）、テントの出入りがスムーズになる脱ぎ履きしやすい靴やサンダル、虫除け対策グッズ、モバイルバッテリーなどを用意しておくと安心です。
              </p>
            </div>
            <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200">
              <h3 className="font-bold text-slate-900 text-sm md:text-base mb-2">Q. 雨の日でもグランピングは楽しめますか？</h3>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                屋根付きの専用バーベキュースペースやガゼボが設置されている施設、室内にダイニングや調理スペースが備わっている施設を選べば、雨天時でも天候を気にせず食事や滞在を楽しむことができます。予約前に各施設の雨天時の食事場所やキャンセル規定を確認しておくと安心です。
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
