import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '【皆生温泉×ふるさと納税】日本海の絶景オーシャンビュー＆境港直送松葉ガニ！米子名門宿ガイド｜皆生つるや・華水亭・白扇',
  description: '日本海と白砂青松の弓ヶ浜を望む山陰屈指の美肌リゾート・鳥取県皆生温泉を楽天ふるさと納税でお得に満喫！数寄屋造りの名門老舗「皆生つるや」、全室海一望のパノラマ露天風呂「華水亭」、全室展望ジャグジー付き「湯喜望 白扇」を徹底比較。松葉ガニや鳥取和牛会席、米子市トラベルクーポン活用術を網羅。',
  keywords: '皆生温泉 ふるさと納税,皆生温泉 松葉ガニ ふるさと納税,皆生つるや クーポン,華水亭 皆生温泉 宿泊,米子市 ふるさと納税 旅行',
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-kaike-onsen-ocean-crab-stay',
  },
  openGraph: {
    title: '【皆生温泉×ふるさと納税】日本海の絶景オーシャンビュー＆境港直送松葉ガニ！米子名門宿ガイド｜皆生つるや・華水亭・白扇',
    description: '日本海と白砂青松の弓ヶ浜を望む山陰屈指の美肌リゾート・鳥取県皆生温泉を楽天ふるさと納税でお得に満喫！数寄屋造りの名門老舗「皆生つるや」、全室海一望のパノラマ露天風呂「華水亭」、全室展望ジャグジー付き「湯喜望 白扇」を徹底比較。松葉ガニや鳥取和牛会席、米子市トラベルクーポン活用術を網羅。',
    url: 'https://croud-travel.pages.dev/furusato-tax-kaike-onsen-ocean-crab-stay',
    siteName: 'トラベルガイド - クラウドトラベル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function FurusatoArticlePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '【皆生温泉×ふるさと納税】日本海の絶景オーシャンビュー＆境港直送松葉ガニ！米子名門宿ガイド｜皆生つるや・華水亭・白扇',
    description: '日本海と白砂青松の弓ヶ浜を望む山陰屈指の美肌リゾート・鳥取県皆生温泉を楽天ふるさと納税でお得に満喫！数寄屋造りの名門老舗「皆生つるや」、全室海一望のパノラマ露天風呂「華水亭」、全室展望ジャグジー付き「湯喜望 白扇」を徹底比較。松葉ガニや鳥取和牛会席、米子市トラベルクーポン活用術を網羅。',
    author: {
      '@type': 'Organization',
      name: 'クラウドトラベル 観光・ふるさと納税調査班',
      url: 'https://croud-travel.pages.dev/',
    },
    publisher: {
      '@type': 'Organization',
      name: 'クラウドトラベル',
      logo: {
        '@type': 'ImageObject',
        url: 'https://croud-travel.pages.dev/logo.png',
      },
    },
    datePublished: '2026-09-10T16:48:00+09:00',
    dateModified: '2026-09-10T16:48:00+09:00',
    mainEntityOfPage: 'https://croud-travel.pages.dev/furusato-tax-kaike-onsen-ocean-crab-stay',
  };

  return (
    <main className="min-h-screen bg-stone-50 text-stone-800 antialiased font-sans pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* パンくずリスト */}
      <nav className="max-w-4xl mx-auto px-4 sm:px-6 pt-6 pb-2 text-xs text-stone-500 flex items-center gap-1.5">
        <Link href="/" className="hover:underline">ホーム</Link>
        <span>/</span>
        <Link href="/travel-savings-guide" className="hover:underline">ふるさと納税旅行ガイド</Link>
        <span>/</span>
        <span className="text-stone-700 font-medium truncate">【皆生温泉×ふるさと納税】日本海の絶景オーシャンビュー＆境港直送松葉ガニ！米子名門宿ガイド｜皆生つるや・華水亭・白扇</span>
      </nav>

      {/* ヒーローセクション */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-4">
        <div className="inline-flex items-center gap-2 bg-amber-100/80 text-amber-900 text-xs font-semibold px-3 py-1 rounded-full border border-amber-200">
          <span>♨️</span>
          <span>鳥取県米子市 ふるさと納税・名湯宿特集</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold font-serif text-stone-900 tracking-tight leading-snug">
          【皆生温泉×ふるさと納税】日本海の絶景オーシャンビュー＆境港直送松葉ガニ！米子名門宿ガイド｜皆生つるや・華水亭・白扇
        </h1>
        <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
          日本海と白砂青松の弓ヶ浜を望む山陰屈指の美肌リゾート・鳥取県皆生温泉を楽天ふるさと納税でお得に満喫！数寄屋造りの名門老舗「皆生つるや」、全室海一望のパノラマ露天風呂「華水亭」、全室展望ジャグジー付き「湯喜望 白扇」を徹底比較。松葉ガニや鳥取和牛会席、米子市トラベルクーポン活用術を網羅。
        </p>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-12">
        {/* リード文セクション */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-stone-200/80 space-y-4">
          <h2 className="text-lg sm:text-xl font-bold font-serif text-amber-900 border-b border-amber-100 pb-3">
            海から湧き出る塩類泉と大山・日本海の絶景——境港直送の活松葉ガニと鳥取和牛を味わい尽くす山陰のリゾート
          </h2>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            鳥取県米子市、弓ヶ浜半島の日本海に面した皆生（かいけ）温泉。明治33年に地元の漁師が海中に湧き出す温泉を発見したことから始まった「海から湧く温泉」です。泉質はナトリウム・カルシウム塩化物泉で、豊富な塩分が肌に薄いヴェールを作り出し、入浴後の保温・保湿効果が極めて高いことから「塩の美肌湯」として全国に名を馳せています。客室や露天風呂からは、青く広がる日本海と白砂青松の海岸線、そして背後には名峰・大山（だいせん）の雄姿を望むことができます。
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            皆生温泉の最大の魅力は、隣接する日本有数の漁港「境港」から毎日直送される新鮮な海の幸。冬には身がぎっしりと詰まった本場「松葉ガニ」のフルコース、春から夏には脂の乗ったノドグロや幻のモサエビ、そして肉質日本一に輝いた「鳥取和牛」のステーキなど、山陰屈指の美食が揃います。鳥取県米子市へのふるさと納税を利用すれば、30%相当の楽天トラベルクーポンによりオーシャンビューの名門宿へお得に宿泊でき、特別な記念日や家族旅行が最高の思い出になります。
          </p>
        </section>

        {/* 比較サマリー表 */}
        <section className="bg-amber-50/50 rounded-3xl p-6 sm:p-8 border border-amber-100/80 space-y-4">
          <h3 className="text-base sm:text-lg font-bold font-serif text-stone-900">
            今回ご紹介する厳選3名宿の比較サマリー
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm border-collapse bg-white rounded-xl shadow-xs">
              <thead>
                <tr className="border-b border-stone-200 bg-stone-100/70 text-stone-700">
                  <th className="p-3 font-bold">宿名</th>
                  <th className="p-3 font-bold">評価</th>
                  <th className="p-3 font-bold">最大の特徴</th>
                  <th className="p-3 font-bold">おすすめの過ごし方</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                
                <tr>
                  <td className="p-3 font-bold text-amber-900">皆生温泉　皆生つるや　四季を奏でるさらさの宿</td>
                  <td className="p-3 font-bold">★ 4.42</td>
                  <td className="p-3 text-stone-600">創業から受け継ぐ数寄屋建築の美と名庭園！日本海を望む大浴場と境港の松葉ガニ・鳥取和牛会席</td>
                  <td className="p-3 text-stone-600">最高峰の歴史・名庭園ステイ</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-amber-900">皆生温泉　華水亭</td>
                  <td className="p-3 font-bold">★ 4.58</td>
                  <td className="p-3 text-stone-600">全室オーシャンビューの絶景名門リゾート！日本海と弓ヶ浜の水平線を望む展望露天風呂と贅沢スパ</td>
                  <td className="p-3 text-stone-600">絶景の眺望・美食の饗宴</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-amber-900">皆生温泉　湯喜望　白扇</td>
                  <td className="p-3 font-bold">★ 4.3</td>
                  <td className="p-3 text-stone-600">全室に展望ジャグジーまたは露天風呂を完備！白砂青松の海岸線を望む畳敷きの和モダンリゾート</td>
                  <td className="p-3 text-stone-600">アットホーム・快適な温泉街散歩</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ホテル詳細カード一覧 */}
        <section className="space-y-8">
          <h2 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 flex items-center gap-2">
            <span>🏆</span> 厳選3宿の詳細レビュー＆ふるさと納税活用ガイド
          </h2>

          {/* ホテル 1 */}
          <article className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200/80 transition hover:shadow-md">
            <div className="relative aspect-video sm:aspect-[16/9] w-full overflow-hidden bg-stone-100">
              <img
                src="https://img.travel.rakuten.co.jp/share/HOTEL/12537/12537.jpg"
                alt="皆生温泉　皆生つるや　四季を奏でるさらさの宿"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第1選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.42（口コミ 1163件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">鳥取県米子市</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  皆生温泉　皆生つるや　四季を奏でるさらさの宿
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  創業から受け継ぐ数寄屋建築の美と名庭園！日本海を望む大浴場と境港の松葉ガニ・鳥取和牛会席
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  皆生温泉 皆生つるや 四季を奏でるさらさの宿 —— 伝統と格式の老舗旅館。真心のこもったもてなしと山陰の旬味
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 優美な数寄屋造りの建築と四季折々の草花が彩る館内
                    </h5>
                    <p className="text-stone-600 leading-relaxed">日本旅館の落ち着きと品格が漂う館内。手入れの行き届いた日本庭園や生花が飾られ、静かで上質な大人の寛ぎを提供します。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 海風を感じながら入る名湯皆生の塩化物泉大浴場と露天風呂
                    </h5>
                    <p className="text-stone-600 leading-relaxed">体の芯までぽかぽかと温まる良質な皆生の湯。露天風呂や広々とした内湯で、旅の疲れを心地よく癒やすことができます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 境港水揚げの松葉ガニや鳥取和牛を盛り込んだ本格会席
                    </h5>
                    <p className="text-stone-600 leading-relaxed">鮮度抜群の日本海の魚介や、ブランド牛「鳥取和牛」を贅沢に使用。出汁の風味豊かな会席料理をお部屋や個室食事処で味わえます。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.60点、口コミ1300件超。「スタッフのおもてなしが素晴らしく料理も一つひとつ丁寧で美味しい」「お風呂のお湯が良くてぐっすり眠れた」と大好評。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div><span className="font-semibold text-stone-700">住所：</span>鳥取県 米子市皆生温泉2-5-1</div>
                <div><span className="font-semibold text-stone-700">宿泊目安：</span>¥7,260〜 /人</div>
                <div><span className="font-semibold text-stone-700">楽天施設ID：</span>12537</div>
                <div><span className="font-semibold text-stone-700">予約区分：</span>楽天ふるさと納税トラベルクーポン対象</div>
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D12537"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-stone-900 text-white font-bold py-3.5 px-6 rounded-xl shadow transition"
                >
                  【楽天トラベル】皆生温泉　皆生つるや　四季を奏でるさらさの宿 の宿泊プランとクーポン適用はこちら →
                </a>
              </div>
            </div>
          </article>

          {/* ホテル 2 */}
          <article className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200/80 transition hover:shadow-md">
            <div className="relative aspect-video sm:aspect-[16/9] w-full overflow-hidden bg-stone-100">
              <img
                src="https://img.travel.rakuten.co.jp/share/HOTEL/2038/2038.jpg"
                alt="皆生温泉　華水亭"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第2選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.58（口コミ 923件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">鳥取県米子市</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  皆生温泉　華水亭
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  全室オーシャンビューの絶景名門リゾート！日本海と弓ヶ浜の水平線を望む展望露天風呂と贅沢スパ
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  皆生温泉 華水亭（かすいてい） —— 海の気品漂うラグジュアリーホテル。波の音を聞く展望露天と極上ダイニング
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 窓一面に広がる日本海と弓ヶ浜の雄大なオーシャンビュー
                    </h5>
                    <p className="text-stone-600 leading-relaxed">すべての客室が海に面した贅沢な設計。朝日に輝く水面や夕暮れの茜空、夜の漁火（いさりび）など、時間とともに移ろう海の表情を独り占めできます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 水平線と一体化する展望大浴場と波打ち際の露天風呂
                    </h5>
                    <p className="text-stone-600 leading-relaxed">潮騒に包まれながら楽しむ名湯の湯浴み。自家源泉を引く良質な温泉とサウナで、極上のリラクゼーションを体験できます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 松葉ガニや鮑、鳥取和牛を五感で味わう季節の特選会席
                    </h5>
                    <p className="text-stone-600 leading-relaxed">料理長が選び抜いた山陰の最高級食材。彩り鮮やかな器に盛り付けられた芸術的な料理が、特別な夜を優雅に演出します。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.66点、口コミ1500件超。「部屋からの海の眺めが息を呑むほど美しく、お風呂も最高」「お料理もサービスも一流で大満足の滞在だった」と高評価。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div><span className="font-semibold text-stone-700">住所：</span>鳥取県 米子市皆生温泉4-19-10</div>
                <div><span className="font-semibold text-stone-700">宿泊目安：</span>¥8,800〜 /人</div>
                <div><span className="font-semibold text-stone-700">楽天施設ID：</span>2038</div>
                <div><span className="font-semibold text-stone-700">予約区分：</span>楽天ふるさと納税トラベルクーポン対象</div>
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D2038"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-stone-900 text-white font-bold py-3.5 px-6 rounded-xl shadow transition"
                >
                  【楽天トラベル】皆生温泉　華水亭 の宿泊プランとクーポン適用はこちら →
                </a>
              </div>
            </div>
          </article>

          {/* ホテル 3 */}
          <article className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200/80 transition hover:shadow-md">
            <div className="relative aspect-video sm:aspect-[16/9] w-full overflow-hidden bg-stone-100">
              <img
                src="https://img.travel.rakuten.co.jp/share/HOTEL/13895/13895.jpg"
                alt="皆生温泉　湯喜望　白扇"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第3選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.3（口コミ 1938件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">鳥取県米子市</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  皆生温泉　湯喜望　白扇
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  全室に展望ジャグジーまたは露天風呂を完備！白砂青松の海岸線を望む畳敷きの和モダンリゾート
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  皆生温泉 湯喜望 白扇（はくせん） —— 素足で過ごす全館畳敷きの温もり。海を一望する客室展望風呂の贅
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 全室から日本海を一望できる展望風呂・ジャグジー付き客室
                    </h5>
                    <p className="text-stone-600 leading-relaxed">お部屋にいながら波の音を聞き、水平線を眺めて入浴できる贅沢なプライベートバス。誰にも気兼ねなく温泉タイムを楽しめます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 玄関から全館畳敷きの心地よい空間と海を望む大浴場
                    </h5>
                    <p className="text-stone-600 leading-relaxed">スリッパなしで歩ける畳敷きの館内は足触りが良くリラックス効果抜群。海を真正面に望む大浴場や露天風呂も完備しています。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 境港直送の新鮮なカニ料理や山陰の山海の恵み会席
                    </h5>
                    <p className="text-stone-600 leading-relaxed">日本海の旬魚のお造りやカニ料理、鳥取和牛など、山陰ならではの味覚をプライベートなお部屋食または個室でゆっくり味わえます。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.52点、口コミ1100件超。「全館畳敷きがとても気持ちよく、部屋のお風呂からの海の景色が最高」「お料理がボリューム満点で美味しかった」と評判です。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div><span className="font-semibold text-stone-700">住所：</span>鳥取県 米子市皆生温泉3-12-33</div>
                <div><span className="font-semibold text-stone-700">宿泊目安：</span>¥7,120〜 /人</div>
                <div><span className="font-semibold text-stone-700">楽天施設ID：</span>13895</div>
                <div><span className="font-semibold text-stone-700">予約区分：</span>楽天ふるさと納税トラベルクーポン対象</div>
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D13895"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-stone-900 text-white font-bold py-3.5 px-6 rounded-xl shadow transition"
                >
                  【楽天トラベル】皆生温泉　湯喜望　白扇 の宿泊プランとクーポン適用はこちら →
                </a>
              </div>
            </div>
          </article>
        </section>

        {/* エリア観光・見どころ */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 flex items-center gap-2">
            <span>🗺️</span> 皆生温泉・境港水木しげるロード＆名峰大山ドライブガイド
          </h2>
          <div className="grid gap-4">

            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center text-xs font-sans font-bold">1</span>
                境港「水木しげるロード」と海鮮市場での買い物
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
                皆生温泉から車で約20分。170体以上のブロンズ像が並ぶ水木しげるロードの散策や、境港水産物直売センターで獲れたての松葉ガニや干物を購入できます。
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center text-xs font-sans font-bold">2</span>
                名峰・大山（伯耆富士）のドライブと大山まきばみるくの里
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
                標高1,729メートルの中国地方最高峰・大山。放牧された牛たちを眺めながら濃厚なソフトクリームを味わえる「大山まきばみるくの里」や大山寺の参拝が人気です。
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center text-xs font-sans font-bold">3</span>
                皆生海岸遊歩道での朝の散歩と日本の夕陽百選
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
                温泉街の目の前に広がる海岸遊歩道。白砂青松の海岸線と日本海に沈む夕日は「日本の夕陽百選」にも選ばれる絶景スポットです。
              </p>
            </div>
          </div>
        </section>

        {/* ふるさと納税活用ステップ */}
        <section className="bg-gradient-to-br from-amber-900 via-stone-900 to-stone-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-amber-300 font-semibold">How to Use Coupon</span>
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-amber-50">
              鳥取県米子市ふるさと納税×楽天トラベルクーポン活用手順
            </h2>
            <p className="text-stone-300 text-xs sm:text-sm">
              初めての方でも迷わず利用できる3ステップ。予約済みのプランにも後から適用可能です。
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 text-xs sm:text-sm">

            <div className="bg-stone-900/60 p-4 rounded-2xl border border-amber-500/20 space-y-2">
              <span className="inline-block bg-amber-500/20 text-amber-300 font-mono text-xs px-2.5 py-0.5 rounded font-semibold">
                Step 1: 楽天ふるさと納税で「鳥取県米子市」クーポンを獲得
              </span>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                楽天ふるさと納税で米子市を寄付先に選び、トラベルクーポンを返礼品として申し込みます。寄付額の30%相当のクーポンがアカウントに付与されます。
              </p>
            </div>
            <div className="bg-stone-900/60 p-4 rounded-2xl border border-amber-500/20 space-y-2">
              <span className="inline-block bg-amber-500/20 text-amber-300 font-mono text-xs px-2.5 py-0.5 rounded font-semibold">
                Step 2: 米子鬼太郎空港や山陰道・JR米子駅経由で快適アクセス
              </span>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                米子鬼太郎空港からタクシーやバスで約20分、米子駅からも約15分の好立地。3年間の有効期間内で、冬のカニシーズンや夏の海レジャーに合わせて計画できます。
              </p>
            </div>
            <div className="bg-stone-900/60 p-4 rounded-2xl border border-amber-500/20 space-y-2">
              <span className="inline-block bg-amber-500/20 text-amber-300 font-mono text-xs px-2.5 py-0.5 rounded font-semibold">
                Step 3: 楽天トラベル予約画面でクーポン割引を適用して予約完了
              </span>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                皆生つるや、華水亭、白扇などのオーシャンビュー客室プランを選び、決済時にクーポンを選択すれば宿泊代金から大幅な割引が適用されます。
              </p>
            </div>
          </div>

          <div className="text-center pt-2">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-amber-500 text-white font-extrabold px-8 py-3.5 rounded-xl shadow-lg hover:opacity-95 transition"
            >
              <span>楽天ふるさと納税トラベルクーポンを獲得する</span>
              <span>→</span>
            </a>
          </div>
        </section>

        {/* 内部リンク・ハブ導線 */}
        <section className="border-t border-stone-200 pt-8 space-y-4">
          <h3 className="text-base sm:text-lg font-bold font-serif text-stone-900">
            関連するふるさと納税トラベル特集
          </h3>
          <ul className="grid sm:grid-cols-2 gap-3 text-xs sm:text-sm text-stone-600">
            <li>
              <Link href="/travel-savings-guide" className="hover:text-amber-800 underline flex items-center gap-1.5 py-1">
                <span>▸</span> ふるさと納税×旅行 完全攻略ハブページトップ
              </Link>
            </li>
            <li>
              <Link href="/furusato-tax-travel-after-booking-discount-guide" className="hover:text-amber-800 underline flex items-center gap-1.5 py-1">
                <span>▸</span> 予約済みでも間に合う！楽天トラベル「あとから適用」ガイド
              </Link>
            </li>
            <li>
              <Link href="/furusato-tax-kusatsu-onsen-yubatake-heritage-stay" className="hover:text-amber-800 underline flex items-center gap-1.5 py-1">
                <span>▸</span> 草津温泉 湯畑徒歩圏内の老舗名宿特集
              </Link>
            </li>
            <li>
              <Link href="/furusato-tax-arima-onsen-gold-silver-kobe-beef-stay" className="hover:text-amber-800 underline flex items-center gap-1.5 py-1">
                <span>▸</span> 有馬温泉 金泉・銀泉＆極上神戸牛ステイ特集
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
