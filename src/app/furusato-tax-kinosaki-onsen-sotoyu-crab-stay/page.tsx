import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '【城崎温泉×ふるさと納税】七つの外湯めぐり＆絶品松葉ガニ！老舗名旅館ガイド｜西村屋本館・招月庭・三木屋',
  description: '開湯千三百年・柳並木と太鼓橋が美しい兵庫県城崎温泉を楽天ふるさと納税でお得に贅沢旅！創業百六十年の最高峰「西村屋本館」、広大な森林庭園露天風呂を誇る「西村屋ホテル招月庭」、志賀直哉ゆかりの国登録有形文化財「三木屋」を徹底比較。松葉ガニや但馬牛会席、豊岡市トラベルクーポン活用術を網羅。',
  keywords: '城崎温泉 ふるさと納税,城崎温泉 外湯めぐり ふるさと納税,西村屋本館 クーポン,三木屋 城崎 ふるさと納税,豊岡市 ふるさと納税 旅行',
  alternates: {
    canonical: "https://croud-travel.pages.dev/furusato-tax-kinosaki-onsen-sotoyu-crab-stay/",
  },
  openGraph: {
    title: '【城崎温泉×ふるさと納税】七つの外湯めぐり＆絶品松葉ガニ！老舗名旅館ガイド｜西村屋本館・招月庭・三木屋',
    description: '開湯千三百年・柳並木と太鼓橋が美しい兵庫県城崎温泉を楽天ふるさと納税でお得に贅沢旅！創業百六十年の最高峰「西村屋本館」、広大な森林庭園露天風呂を誇る「西村屋ホテル招月庭」、志賀直哉ゆかりの国登録有形文化財「三木屋」を徹底比較。松葉ガニや但馬牛会席、豊岡市トラベルクーポン活用術を網羅。',
    url: 'https://croud-travel.pages.dev/furusato-tax-kinosaki-onsen-sotoyu-crab-stay',
    siteName: 'トラベルガイド - クラウドトラベル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function FurusatoArticlePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '【城崎温泉×ふるさと納税】七つの外湯めぐり＆絶品松葉ガニ！老舗名旅館ガイド｜西村屋本館・招月庭・三木屋',
    description: '開湯千三百年・柳並木と太鼓橋が美しい兵庫県城崎温泉を楽天ふるさと納税でお得に贅沢旅！創業百六十年の最高峰「西村屋本館」、広大な森林庭園露天風呂を誇る「西村屋ホテル招月庭」、志賀直哉ゆかりの国登録有形文化財「三木屋」を徹底比較。松葉ガニや但馬牛会席、豊岡市トラベルクーポン活用術を網羅。',
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
    datePublished: 'T16:45:00+09:00',
    dateModified: 'T16:45:00+09:00',
    mainEntityOfPage: 'https://croud-travel.pages.dev/furusato-tax-kinosaki-onsen-sotoyu-crab-stay',
  };


  return (
    <main className="min-h-screen bg-stone-50 text-stone-800 antialiased font-sans pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"「城崎温泉 西村屋本館」へのアクセスや移動方法について","acceptedAnswer":{"@type":"Answer","text":"「城崎温泉 西村屋本館」へは、車 北近畿豊岡自動車道 豊岡出石ICより約18分 電車 城崎温泉駅より徒歩15分（旅館組合無料バス有）。詳しい送迎情報や道順は楽天トラベルの最新宿情報をご確認ください。"}},{"@type":"Question","name":"「城崎温泉 西村屋本館」の魅力や予約時のポイントは？","acceptedAnswer":{"@type":"Answer","text":"「城崎温泉 西村屋本館」は『◆売切れの日は公式サイトもご確認下さい◆江戸安政期創業、山陰隋一の純日本旅館として皆様をお。』という点が旅行者から高く支持されています。連休や人気シーズンは予約が集中しやすいため、空室状況はお早めのチェックが安心です。"}},{"@type":"Question","name":"プラン選びや宿の比較で意識すべき点は？","acceptedAnswer":{"@type":"Answer","text":"「城崎温泉 西村屋本館」と「城崎温泉 西村屋ホテル招月庭」はそれぞれ立地や施設設備に独自の魅力があります。湯巡り重視か、料理やお部屋の寛ぎ重視かなど、今回の旅の目的に合わせてお選びください。"}}]}) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"ホーム","item":"https://croud-travel.pages.dev/"},{"@type":"ListItem","position":2,"name":"特集一覧","item":"https://croud-travel.pages.dev/features"},{"@type":"ListItem","position":3,"name":"【城崎温泉×ふるさと納税】七つの外湯めぐり＆絶品松葉ガニ！老舗名旅館ガイド｜西村屋本館・招月庭・三木屋","item":"https://croud-travel.pages.dev/furusato-tax-kinosaki-onsen-sotoyu-crab-stay"}]}) }}
      />
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
        <span className="text-stone-700 font-medium truncate">【城崎温泉×ふるさと納税】七つの外湯めぐり＆絶品松葉ガニ！老舗名旅館ガイド｜西村屋本館・招月庭・三木屋</span>
      </nav>

      {/* ヒーローセクション */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-4">
        <div className="inline-flex items-center gap-2 bg-amber-100/80 text-amber-900 text-xs font-semibold px-3 py-1 rounded-full border border-amber-200">
          <span>♨️</span>
          <span>兵庫県豊岡市 ふるさと納税・名湯宿特集</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold font-serif text-stone-900 tracking-tight leading-snug">
          【城崎温泉×ふるさと納税】七つの外湯めぐり＆絶品松葉ガニ！老舗名旅館ガイド｜西村屋本館・招月庭・三木屋
        </h1>
        <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
          開湯千三百年・柳並木と太鼓橋が美しい兵庫県城崎温泉を楽天ふるさと納税でお得に贅沢旅！創業百六十年の最高峰「西村屋本館」、広大な森林庭園露天風呂を誇る「西村屋ホテル招月庭」、志賀直哉ゆかりの国登録有形文化財「三木屋」を徹底比較。松葉ガニや但馬牛会席、豊岡市トラベルクーポン活用術を網羅。
        </p>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-12">
        {/* リード文セクション */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-stone-200/80 space-y-4">
          <h2 className="text-lg sm:text-xl font-bold font-serif text-amber-900 border-b border-amber-100 pb-3">
            浴衣に下駄でカランコロン——柳揺れる大谿川と七つの外湯、冬の味覚の王様・松葉ガニに酔いしれる
          </h2>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            兵庫県豊岡市城崎町、日本海へと注ぐ大谿川（おおたにがわ）沿いに広がる城崎（きのさき）温泉。奈良時代の開湯以来千三百年の歴史を誇り、「駅は玄関、道路は廊下、旅館は客室、外湯は大浴場。」という共生の理念のもと、温泉街全体が一つの大きな宿として旅人を温かく迎え入れます。柳並木と太鼓橋が織りなす情緒あふれる景観の中、色とりどりの浴衣に下駄を鳴らして「一の湯」「御所の湯」「鴻の湯」など趣の異なる七つの外湯をめぐる時間は、まさに日本の温泉旅の原点です。
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            城崎温泉の冬の主役といえば、日本海で水揚げされる冬の味覚の王様「松葉ガニ（ズワイガニ）」です。タグ付きの活松葉ガニを贅沢に使った焼きガニ、カニ刺し、カニ鍋、甲羅味噌焼き、そして幻の高級和牛「但馬牛」のステーキやしゃぶしゃぶとの饗宴は至福の極み。兵庫県豊岡市へのふるさと納税を利用すれば、30%相当の楽天トラベルクーポンにより憧れの最高峰老舗旅館へお得に宿泊でき、一生の思い出に残る美食と温泉の旅が叶います。
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
                  <td className="p-3 font-bold text-amber-900">城崎温泉　西村屋本館</td>
                  <td className="p-3 font-bold">★ 5</td>
                  <td className="p-3 text-stone-600">創業百六十年の歴史を誇る城崎最高峰の格式！伝統の数寄屋建築と名庭園、タグ付き松葉ガニ懐石</td>
                  <td className="p-3 text-stone-600">歴史と品格の最高峰ステイ</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-amber-900">城崎温泉　西村屋ホテル招月庭</td>
                  <td className="p-3 font-bold">★ 4.71</td>
                  <td className="p-3 text-stone-600">五万坪の広大な森林庭園に抱かれる極上リゾート！大自然のジャグジー露天風呂と多彩な蟹プラン</td>
                  <td className="p-3 text-stone-600">大人の洗練・絶景プライベート</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-amber-900">城崎温泉　登録有形文化財の宿　三木屋</td>
                  <td className="p-3 font-bold">★ 4.76</td>
                  <td className="p-3 text-stone-600">文豪志賀直哉が名作『城の崎にて』を執筆した歴史宿！三百坪の日本庭園と登録有形文化財の木造建築</td>
                  <td className="p-3 text-stone-600">温泉街散策・快適アクティブ旅</td>
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/75399/75399.jpg"
                alt="城崎温泉　西村屋本館"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第1選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 5（口コミ 338件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">兵庫県豊岡市</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  城崎温泉　西村屋本館
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  創業百六十年の歴史を誇る城崎最高峰の格式！伝統の数寄屋建築と名庭園、タグ付き松葉ガニ懐石
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  城崎温泉 西村屋本館 —— 日本旅館の美意識を極める名門。美しい平庭を望む客室と至高のおもてなし
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 登録有形文化財の数寄屋造りと四季を映す日本庭園
                    </h5>
                    <p className="text-stone-600 leading-relaxed">伝統的な日本の木造建築美を受け継ぐ本館。手入れの行き届いた日本庭園を囲むように回廊が巡り、静寂と気品に満ちた特別な時間が流れます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 吉野檜香る「檜扇の湯」や中国の古瓦を配した「吉の湯」
                    </h5>
                    <p className="text-stone-600 leading-relaxed">檜の温もりが心地よい大浴場と野趣あふれる露天風呂。城崎の名湯に身を浸しながら、贅沢なプライベートの湯浴みを満喫できます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 厳選された津居山港・柴山港水揚げの活松葉ガニ懐石
                    </h5>
                    <p className="text-stone-600 leading-relaxed">日本海屈指のブランド蟹を熟練の料理人が腕を振るって仕立てる至極の蟹会席。お部屋食で一品一品出来立ての最高峰の味を堪能できます。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.77点という圧倒的な名門スコア。「庭園の眺め、建物、接客、そしてカニ料理のすべてが人生最高峰の体験。」「一度は泊まるべき日本の宝」と絶賛されています。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div><span className="font-semibold text-stone-700">住所：</span>兵庫県 豊岡市城崎町湯島469</div>
                <div><span className="font-semibold text-stone-700">宿泊目安：</span>要問い合わせ /人</div>
                <div><span className="font-semibold text-stone-700">楽天施設ID：</span>75399</div>
                <div><span className="font-semibold text-stone-700">予約区分：</span>楽天ふるさと納税トラベルクーポン対象</div>
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D75399"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-stone-900 text-white font-bold py-3.5 px-6 rounded-xl shadow transition"
                >
                  【楽天トラベル】城崎温泉　西村屋本館 の宿泊プランとクーポン適用はこちら →
                </a>
              </div>
            </div>
          </article>

          {/* ホテル 2 */}
          <article className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200/80 transition hover:shadow-md">
            <div className="relative aspect-video sm:aspect-[16/9] w-full overflow-hidden bg-stone-100">
              <img
                src="https://img.travel.rakuten.co.jp/share/HOTEL/14007/14007.jpg"
                alt="城崎温泉　西村屋ホテル招月庭"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第2選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.71（口コミ 1175件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">兵庫県豊岡市</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  城崎温泉　西村屋ホテル招月庭
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  五万坪の広大な森林庭園に抱かれる極上リゾート！大自然のジャグジー露天風呂と多彩な蟹プラン
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  城崎温泉 西村屋ホテル招月庭 —— 西村屋の伝統と現代リゾートの融合。癒やしのスパと贅沢なダイニング
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 豊かな緑に包まれる広大な大浴場「月下の湯」と露天風呂
                    </h5>
                    <p className="text-stone-600 leading-relaxed">森林の心地よい風が吹き抜ける露天風呂やジャグジー、ミストサウナを完備。自然と調和した開放感あふれる空間でリフレッシュできます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 完全貸切で楽しめる森のプライベートスパ「かがり火の湯」
                    </h5>
                    <p className="text-stone-600 leading-relaxed">岩盤浴や専用ラウンジを備えたラグジュアリーな貸切風呂。カップルやご夫婦で誰にも邪魔されない贅沢な時間を過ごせます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 但馬牛と松葉ガニを贅沢に味わう季節の会席ディナー
                    </h5>
                    <p className="text-stone-600 leading-relaxed">伝統の味を受け継ぎながら、オープンキッチンの要素や彩り豊かな盛り付けを取り入れた大満足のディナー。豊富な地酒やワインとともに味わえます。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.66点、口コミ2100件超。「森林に囲まれたお風呂が最高に気持ちよく、お料理も大満足。」「スタッフの親切な対応と清潔感のある館内が素晴らしい。」と高い評価を獲得しています。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div><span className="font-semibold text-stone-700">住所：</span>兵庫県 豊岡市城崎町湯島1016-2</div>
                <div><span className="font-semibold text-stone-700">宿泊目安：</span>¥35,200〜 /人</div>
                <div><span className="font-semibold text-stone-700">楽天施設ID：</span>14007</div>
                <div><span className="font-semibold text-stone-700">予約区分：</span>楽天ふるさと納税トラベルクーポン対象</div>
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D14007"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-stone-900 text-white font-bold py-3.5 px-6 rounded-xl shadow transition"
                >
                  【楽天トラベル】城崎温泉　西村屋ホテル招月庭 の宿泊プランとクーポン適用はこちら →
                </a>
              </div>
            </div>
          </article>

          {/* ホテル 3 */}
          <article className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200/80 transition hover:shadow-md">
            <div className="relative aspect-video sm:aspect-[16/9] w-full overflow-hidden bg-stone-100">
              <img
                src="https://img.travel.rakuten.co.jp/share/HOTEL/106245/106245.jpg"
                alt="城崎温泉　登録有形文化財の宿　三木屋"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第3選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.76（口コミ 244件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">兵庫県豊岡市</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  城崎温泉　登録有形文化財の宿　三木屋
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  文豪志賀直哉が名作『城の崎にて』を執筆した歴史宿！三百坪の日本庭園と登録有形文化財の木造建築
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  城崎温泉 登録有形文化財の宿 三木屋 —— 創業三百年の歴史が息づく文豪の宿。現代的なリノベーションと外湯への好アクセス
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 国登録有形文化財に指定された木造建築と日本庭園の眺望
                    </h5>
                    <p className="text-stone-600 leading-relaxed">志賀直哉が滞在し、作品の着想を得た歴史ある空間。三百坪の美しい庭園を望む客室やブックラウンジで、文学と歴史のロマンに浸ることができます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 城崎の温泉街中心に位置し七つの外湯めぐりに絶好の立地
                    </h5>
                    <p className="text-stone-600 leading-relaxed">温泉街のメインストリートに面し、「御所の湯」や「一の湯」へ浴衣と下駄で気軽にアクセス可能。外湯めぐり用パス「ゆめぱ」で湯巡りを満喫できます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 但馬牛ステーキや季節の松葉ガニを味わう本格日本料理
                    </h5>
                    <p className="text-stone-600 leading-relaxed">地元の契約農家からの新鮮野菜と、但馬牛、日本海の鮮魚を取り入れた料理長こだわりの会席。器の美しさとともに楽しめます。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.73点、口コミ800件超。「建物の歴史とモダンな居心地の良さが共存している。」「庭園の美しさと静けさ、お料理の美味しさに感動した。」とリピーター多数。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div><span className="font-semibold text-stone-700">住所：</span>兵庫県 豊岡市城崎町湯島487</div>
                <div><span className="font-semibold text-stone-700">宿泊目安：</span>¥28,600〜 /人</div>
                <div><span className="font-semibold text-stone-700">楽天施設ID：</span>106245</div>
                <div><span className="font-semibold text-stone-700">予約区分：</span>楽天ふるさと納税トラベルクーポン対象</div>
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D106245"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-stone-900 text-white font-bold py-3.5 px-6 rounded-xl shadow transition"
                >
                  【楽天トラベル】城崎温泉　登録有形文化財の宿　三木屋 の宿泊プランとクーポン適用はこちら →
                </a>
              </div>
            </div>
          </article>
        </section>

        {/* エリア観光・見どころ */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 flex items-center gap-2">
            <span>🗺️</span> 城崎温泉・七つの外湯めぐり＆玄武洞観光ガイド
          </h2>
          <div className="grid gap-4">

            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center text-xs font-sans font-bold">1</span>
                七つの外湯めぐりと「ゆめぱ」の楽しみ方
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
                「御所の湯（美人の湯）」「一の湯（開運招福）」「鴻の湯（しあわせを招く湯）」など、それぞれ異なる御利益と風情を持つ七つの外湯。宿泊客専用のデジタル外湯券「ゆめぱ」を使えば何度でも無料で湯巡りできます。
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center text-xs font-sans font-bold">2</span>
                城崎ロープウェイとお大師山山頂からの眺望
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
                温泉街の奥から大師山山頂へと登るロープウェイ。山頂の「みはらしテラスカフェ」からは城崎の温泉街と日本海を一望でき、ミシュラン・グリーンガイドでも高評価を得ています。
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center text-xs font-sans font-bold">3</span>
                天然記念物「玄武洞公園」の六角柱状節理
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
                城崎温泉から車で約10分の場所にある奇勝。160万年前に起こった火山活動で流れ出た溶岩が冷却されてできた見事な六角形の玄武岩の柱状節理は、大自然の神秘を感じさせます。
              </p>
            </div>
          </div>
        </section>

        {/* ふるさと納税活用ステップ */}
        <section className="bg-gradient-to-br from-amber-900 via-stone-900 to-stone-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-amber-300 font-semibold">How to Use Coupon</span>
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-amber-50">
              兵庫県豊岡市ふるさと納税×楽天トラベルクーポン活用手順
            </h2>
            <p className="text-stone-300 text-xs sm:text-sm">
              初めての方でも迷わず利用できる3ステップ。予約済みのプランにも後から適用可能です。
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 text-xs sm:text-sm">

            <div className="bg-stone-900/60 p-4 rounded-2xl border border-amber-500/20 space-y-2">
              <span className="inline-block bg-amber-500/20 text-amber-300 font-mono text-xs px-2.5 py-0.5 rounded font-semibold">
                Step 1: 楽天ふるさと納税で「兵庫県豊岡市」クーポンを獲得
              </span>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                楽天ふるさと納税で豊岡市を寄付先に指定し、トラベルクーポンを返礼品として申し込みます。寄付額の30%相当のクーポンがアカウントに付与されます。
              </p>
            </div>
            <div className="bg-stone-900/60 p-4 rounded-2xl border border-amber-500/20 space-y-2">
              <span className="inline-block bg-amber-500/20 text-amber-300 font-mono text-xs px-2.5 py-0.5 rounded font-semibold">
                Step 2: JR特急こうのとり・はまかぜ等で城崎温泉へアクセス
              </span>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                京都や新大阪からJR特急で約2時間半。クーポンの有効期限は3年間あるため、冬のカニ解禁シーズン（11月〜3月）や新緑の季節に合わせてゆったり計画できます。
              </p>
            </div>
            <div className="bg-stone-900/60 p-4 rounded-2xl border border-amber-500/20 space-y-2">
              <span className="inline-block bg-amber-500/20 text-amber-300 font-mono text-xs px-2.5 py-0.5 rounded font-semibold">
                Step 3: 楽天トラベル予約画面でクーポン割引を適用して予約完了
              </span>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                西村屋本館、招月庭、三木屋などの対象宿泊プランを選び、決済時にクーポンを選択すれば宿泊代金から大幅な割引が適用されます。
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
    
        {/* Model Course Section */}
                {/* Model Course Section */}
                {/* Model Course Section */}
                {/* Model Course Section */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200/80 mb-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-xl md:text-2xl font-bold text-stone-900">
              【1泊2日】城崎温泉 西村屋本館を拠点にするおすすめ滞在モデルコース
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-l-2 border-amber-500 pl-4 md:pl-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="bg-amber-600 text-white text-xs font-bold px-2.5 py-1 rounded">1日目</span>
                <h3 className="font-bold text-stone-900 text-base md:text-lg">到着〜チェックインと名湯巡り</h3>
              </div>
              <ul className="text-xs md:text-sm text-stone-600 space-y-2 leading-relaxed">
                <li>・<strong className="text-stone-800">14:00〜</strong> 車 北近畿豊岡自動車道 豊岡出石ICより約18分 電車 城崎温泉駅より徒歩15分（旅館組合無料バス有）で現地へ到着。</li>
                <li>・<strong className="text-stone-800">15:30〜</strong> 「城崎温泉 西村屋本館」にチェックイン。◆売切れの日は公式サイトもご確認下さい◆江戸安政期創業、山陰隋一の純日本旅館として皆様をお迎致しますなどの宿の特徴に期待を高めつつ客室へ。</li>
                <li>・<strong className="text-stone-800">17:00〜</strong> 「城崎温泉 西村屋本館」の湯処へ。◆売切れの日は公式サイトもご確認下さい◆江戸安政期創業、山陰隋一の純日とともに、夕暮れの特別な寛ぎを満喫。</li>
                <li>・<strong className="text-stone-800">19:00〜</strong> 「城崎温泉 西村屋本館」でいただく旬の夕食。地場産の味覚を取り入れたおもてなし料理を五感でじっくり味わう贅沢なひととき。</li>
              </ul>
            </div>
            <div className="border-l-2 border-teal-500 pl-4 md:pl-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="bg-teal-600 text-white text-xs font-bold px-2.5 py-1 rounded">2日目</span>
                <h3 className="font-bold text-stone-900 text-base md:text-lg">爽快な朝湯〜周辺散策と帰路へ</h3>
              </div>
              <ul className="text-xs md:text-sm text-stone-600 space-y-2 leading-relaxed">
                <li>・<strong className="text-stone-800">07:00〜</strong> 朝の光が差し込む「城崎温泉 西村屋本館」の湯船へ。清々しい空気の中で手足を伸ばし、心地よい目覚めを迎える。</li>
                <li>・<strong className="text-stone-800">08:00〜</strong> 「城崎温泉 西村屋本館」こだわりの朝食を堪能。炊きたてのごはんや身体に優しい料理で、一日のエネルギーをチャージ。</li>
                <li>・<strong className="text-stone-800">10:00〜</strong> チェックアウト後は近隣エリアを観光。本記事でご紹介した「城崎温泉 西村屋ホテル招月庭」の周辺スポットや名産店に立ち寄り、お土産を選んで帰路へ。</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-stone-50 rounded-2xl p-6 md:p-10 border border-stone-200/80 mb-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              よくある質問（FAQ）と城崎温泉 西村屋本館の滞在ポイント
            </h2>
          </div>
          <div className="space-y-4">
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 「城崎温泉 西村屋本館」へのアクセスや移動方法について</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 「城崎温泉 西村屋本館」へは、車 北近畿豊岡自動車道 豊岡出石ICより約18分 電車 城崎温泉駅より徒歩15分（旅館組合無料バス有）。詳しい送迎情報や道順は楽天トラベルの最新宿情報をご確認ください。
              </p>
            </details>
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 「城崎温泉 西村屋本館」の魅力や予約時のポイントは？</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 「城崎温泉 西村屋本館」は『◆売切れの日は公式サイトもご確認下さい◆江戸安政期創業、山陰隋一の純日本旅館として皆様をお。』という点が旅行者から高く支持されています。連休や人気シーズンは予約が集中しやすいため、空室状況はお早めのチェックが安心です。
              </p>
            </details>
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. プラン選びや宿の比較で意識すべき点は？</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 「城崎温泉 西村屋本館」と「城崎温泉 西村屋ホテル招月庭」はそれぞれ立地や施設設備に独自の魅力があります。湯巡り重視か、料理やお部屋の寛ぎ重視かなど、今回の旅の目的に合わせてお選びください。
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
                href="/prefectures/saga"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                佐賀県の宿・温泉
              </Link>
              <Link
                href="/prefectures/hiroshima"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                広島県の宿・温泉
              </Link>
              <Link
                href="/prefectures/mie"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                三重県の宿・温泉
              </Link>
              <Link
                href="/prefectures/ehime"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                愛媛県の宿・温泉
              </Link>
            </div>
          
      <HubRelatedPosts currentSlug="furusato-tax-kinosaki-onsen-sotoyu-crab-stay" />
</div>
        </section>

      </main>
  );
}
