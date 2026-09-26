import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import SpecialCouponBanner from '@/app/components/SpecialCouponBanner';
import ShareButtons from '@/app/components/ShareButtons';

export const metadata: Metadata = {
  title: '【2026年】香ばしい味噌の香りと極上霜降り！名物「飛騨牛朴葉味噌焼き」会席の温泉宿5選 ｜ 日本全国・旅宿クラウド',
  description: '2026年最新！飛騨高山・下呂・奥飛騨温泉郷で味わう、自家製味噌とA5飛騨牛を朴の葉の上で香ばしく焼き上げる名物会席と日本三名泉の宿5選。',
  keywords: ["飛騨牛","朴葉味噌","下呂温泉","奥飛騨温泉郷","郷土会席","楽天トラベル"],
  alternates: {
    canonical: 'https://croud-travel.pages.dev/traditional-hida-beef-houba-miso-grill-stay',
  },
  openGraph: {
    title: '【2026年】香ばしい味噌の香りと極上霜降り！名物「飛騨牛朴葉味噌焼き」会席の温泉宿5選',
    description: '2026年最新！飛騨高山・下呂・奥飛騨温泉郷で味わう、自家製味噌とA5飛騨牛を朴の葉の上で香ばしく焼き上げる名物会席と日本三名泉の宿5選。',
    url: 'https://croud-travel.pages.dev/traditional-hida-beef-houba-miso-grill-stay',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【2026年】香ばしい味噌の香りと極上霜降り！名物「飛騨牛朴葉味噌焼き」会席の温泉宿5選",
    "description": "2026年最新！飛騨高山・下呂・奥飛騨温泉郷で味わう、自家製味噌とA5飛騨牛を朴の葉の上で香ばしく焼き上げる名物会席と日本三名泉の宿5選。",
    "author": {
      "@type": "Organization",
      "name": "日本全国・旅宿クラウド編集部"
    },
    "publisher": {
      "@type": "Organization",
      "name": "日本全国・旅宿クラウド",
      "logo": {
        "@type": "ImageObject",
        "url": "https://croud-travel.pages.dev/icon.png"
      }
    },
    "datePublished": "2026-09-27",
    "dateModified": "2026-09-27",
    "mainEntityOfPage": "https://croud-travel.pages.dev/traditional-hida-beef-houba-miso-grill-stay"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "名物飛騨牛朴葉味噌焼き＆名湯下呂温泉宿の旅行でおすすめの予約時期やタイミングは？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "人気の日程（連休や週末）は1〜2ヶ月前には満室になることが多いため、早期予約（早割プラン）の利用がおすすめです。また楽天トラベルの「5と0のつく日」キャンペーンを活用すると最大20%オフのクーポンが併用でき、最もお得に予約できます。"
        }
      },
      {
        "@type": "Question",
        "name": "名物飛騨牛朴葉味噌焼き＆名湯下呂温泉宿の宿選びで失敗しないためのポイントは？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "宿泊者レビューのお風呂・お食事・接客評価が4.3以上の宿を選ぶと満足度が非常に高くなります。またアクセス手段（送迎バスの有無など）やプランに含まれる特典を事前に確認しておくと安心です。"
        }
      }
    ]
  };

  const hotels: any[] = [
  {
    "hotelNo": 30848,
    "hotelName": "奥飛騨平湯温泉　旅館たなか＜岐阜県＞",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D30848",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D30848%26f_flg%3DPLAN",
    "hotelMinCharge": 9900,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/30848/30848.jpg",
    "userReview": "夕食が絶品、温泉で山歩きの疲れも解消食事、特に夕食がとても美味しくいただきました。長い山歩きの後宿泊しました。温泉もゆったり入れ、疲れが取れました。機会があれば是非また泊まりたいと思います。ク…　2026-09-09 11:20:00投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=30848\" class=\"3click\">つづきはこちら</a>",
    "reviewAverage": 4.7,
    "reviewCount": 303,
    "address": "岐阜県高山市奥飛騨温泉郷平湯８５－１０",
    "access": "高山駅よりバスで６０分／中央道松本ICより車でR１５８　６０分／東海北陸道・中部縦貫道高山ＩＣより車で６０分",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F30848%2F30848.html"
  },
  {
    "hotelNo": 4992,
    "hotelName": "飛騨高山温泉　飛騨の里　旅館　むら山",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D4992",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D4992%26f_flg%3DPLAN",
    "hotelMinCharge": 12650,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/4992/4992.jpg",
    "userReview": "階段が多くサービスも行き届かず残念全てが階段で部屋も入り組んでいるので年配のかたは困難です。サービスのドリンク等も見回りもしないのか空で放置状態食事の際のドリンクもスタッフ…　2026-09-11 19:58:34投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=4992\" class=\"3click\">つづきはこちら</a>",
    "reviewAverage": 4.59,
    "reviewCount": 283,
    "address": "岐阜県高山市西之一色町3-829",
    "access": "高山駅・濃飛バスセンターよりさるぼぼバスにて約１０分（飛騨の里下下車）徒歩１分。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F4992%2F4992.html"
  },
  {
    "hotelNo": 38508,
    "hotelName": "下呂温泉　源泉かけ流しのおやど　菊半旅館",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D38508",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D38508%26f_flg%3DPLAN",
    "hotelMinCharge": 7150,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/38508/38508.jpg",
    "userReview": "源泉掛け流しの湯と親切な接客に大満足源泉掛け流しの湯が最高に気持ちよかったスタッフの方も親切で質問に真摯に対応くださって大変気持ちよかったです。立地もメイン通りに近く散策しやすかったですクチコ…　2026-09-08 20:52:48投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=38508\" class=\"3click\">つづきはこちら</a>",
    "reviewAverage": 4.44,
    "reviewCount": 224,
    "address": "岐阜県下呂市湯之島281",
    "access": "ＪＲ高山線　下呂駅より徒歩１２分",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F38508%2F38508.html"
  },
  {
    "hotelNo": 5834,
    "hotelName": "飛騨高山温泉　旅館あすなろ",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D5834",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D5834%26f_flg%3DPLAN",
    "hotelMinCharge": 16500,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/5834/5834.jpg",
    "userReview": "絶景のロケーションとおもてなしに心から癒やされました。",
    "reviewAverage": 4.5,
    "reviewCount": 184,
    "address": "岐阜県高山市初田町2-96-2",
    "access": "ＪＲ高山駅より徒歩5分。東海北陸自動車道高山西ＩＣより約１５分、高山ＩＣより約１０分。朝市、古い街並、繁華街等は徒歩圏内",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F5834%2F5834.html"
  },
  {
    "hotelNo": 20046,
    "hotelName": "旅館　岐山",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D20046",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D20046%26f_flg%3DPLAN",
    "hotelMinCharge": 6600,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/20046/20046.jpg",
    "userReview": "心地よい旅館一番の感想は、スタッフの方々の笑顔が多くて接客が心地良いです。貸切露天風呂は洗い場が無いので、お部屋か大浴場で一度体を洗ってから服を着て移動する必要がありますが、予約制じゃないから…　2026-09-19 09:20:20投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=20046\" class=\"3click\">つづきはこちら</a>",
    "reviewAverage": 4.16,
    "reviewCount": 357,
    "address": "岐阜県高山市奥飛騨温泉郷一重ヶ根522-1",
    "access": "高山ICから車で70分。松本ICから車で70分。11月～3月はスタットレスタイヤの着用をお願い致します。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F20046%2F20046.html"
  }
];

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* パンくずリスト */}
      <div className="bg-white border-b border-stone-200">
        <div className="max-w-5xl mx-auto px-4 py-3 text-xs text-stone-500 flex items-center space-x-2">
          <Link href="/" className="hover:text-emerald-700">ホーム</Link>
          <span>&gt;</span>
          <Link href="/features" className="hover:text-emerald-700">特集一覧</Link>
          <span>&gt;</span>
          <span className="text-stone-800 font-semibold truncate">飛騨牛朴葉味噌焼き×日本三名泉</span>
        </div>
      </div>

      {/* ヒーローヘッダー */}
      <header className="relative bg-emerald-950 text-white py-12 px-4 md:px-8 border-b border-emerald-900">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-800/80 text-emerald-200 text-xs font-bold rounded-full">
            <span>✨ 2026年最新版</span>
            <span>•</span>
            <span>飛騨牛朴葉味噌焼き×日本三名泉</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight font-journal-serif leading-tight">
            【2026年】香ばしい味噌の香りと極上霜降り！名物「飛騨牛朴葉味噌焼き」会席の温泉宿5選
          </h1>
          <p className="text-stone-300 text-sm md:text-base leading-relaxed">
            朴の葉の上でぐつぐつと香ばしく焼ける特製山椒味噌と、とろけるようなA5ランク飛騨牛の甘い脂。炊き立てのご飯にも地酒にも相性抜群の飛騨の伝統郷土料理。つるつるの美肌湯として名高い下呂や奥飛騨の源泉掛け流し温泉とともに。
          </p>
          <div className="pt-2">
            <ShareButtons title="【2026年】香ばしい味噌の香りと極上霜降り！名物「飛騨牛朴葉味噌焼き」会席の温泉宿5選" url="https://croud-travel.pages.dev/traditional-hida-beef-houba-miso-grill-stay" />
          </div>
        </div>
      </header>

      {/* メインコンテンツ */}
      <main className="max-w-4xl mx-auto px-4 py-8 space-y-10">
        
        {/* クーポンバナー */}
        <SpecialCouponBanner />

        {/* 宿一覧 */}
        <section className="space-y-8">
          <div className="border-b-2 border-emerald-900/10 pb-3 flex items-center justify-between">
            <h2 className="text-xl md:text-2xl font-black font-journal-serif text-emerald-950 flex items-center gap-2">
              <span>🏆</span> 厳選おすすめ宿ランキング
            </h2>
            <span className="text-xs text-stone-500">楽天トラベル最新データ更新</span>
          </div>

          <div className="space-y-8">
            {hotels.map((hotel: any, index: number) => (
              <article key={hotel.hotelNo || index} className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden hover:shadow-md transition">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 p-6">
                  <div className="md:col-span-5 space-y-3">
                    <div className="relative rounded-xl overflow-hidden aspect-[4/3] bg-stone-100">
                      <img
                        src={hotel.hotelImageUrl}
                        alt={hotel.hotelName}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute top-3 left-3 bg-emerald-900 text-amber-300 text-xs font-black px-2.5 py-1 rounded-md shadow">
                        第{index + 1}位
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-xs text-stone-600 bg-stone-50 px-3 py-2 rounded-lg border border-stone-100">
                      <div>総合評価: <strong className="text-amber-600 text-sm">★ {hotel.reviewAverage.toFixed(1)}</strong></div>
                      <div>クチコミ: <strong>{hotel.reviewCount}件</strong></div>
                    </div>
                  </div>

                  <div className="md:col-span-7 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-lg md:text-xl font-bold font-journal-serif text-emerald-950 leading-snug">
                        <a href={hotel.affiliateUrl} target="_blank" rel="noopener noreferrer nofollow" className="hover:text-emerald-700">
                          {hotel.hotelName}
                        </a>
                      </h3>
                      <p className="text-xs text-stone-500">
                        📍 {hotel.address} | 🚃 {hotel.access}
                      </p>
                      <blockquote className="text-xs text-stone-700 bg-emerald-50/60 p-3 rounded-lg border-l-4 border-emerald-700 italic">
                        &ldquo;{hotel.userReview}&rdquo;
                      </blockquote>
                    </div>

                    <div className="space-y-3 pt-2 border-t border-stone-100">
                      <div className="flex items-baseline justify-between">
                        <span className="text-xs text-stone-500">最安参考料金（1名）</span>
                        <div className="text-right">
                          <span className="text-xs text-stone-400 mr-1">税込</span>
                          <span className="text-xl font-black text-rose-600">
                            {hotel.hotelMinCharge > 0 ? `${hotel.hotelMinCharge.toLocaleString()}円〜` : 'プラン一覧参照'}
                          </span>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <a
                          href={hotel.planListUrl || hotel.affiliateUrl}
                          target="_blank"
                          rel="noopener noreferrer nofollow"
                          className="flex items-center justify-center py-2.5 px-4 bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs rounded-xl shadow-sm transition"
                        >
                          空室・プラン確認 ❯
                        </a>
                        <a
                          href={hotel.affiliateUrl}
                          target="_blank"
                          rel="noopener noreferrer nofollow"
                          className="flex items-center justify-center py-2.5 px-4 bg-emerald-900 hover:bg-emerald-800 text-white font-bold text-xs rounded-xl shadow-sm transition"
                        >
                          写真・詳細を見る
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* 旅のQ&A */}
        <section className="bg-white rounded-2xl p-6 md:p-8 border border-stone-200 shadow-sm space-y-4">
          <h2 className="text-lg md:text-xl font-black font-journal-serif text-emerald-950 flex items-center gap-2">
            <span>❓</span> よくある質問・失敗しない宿選び
          </h2>
          <div className="space-y-4 text-sm">
            <div className="border border-stone-100 rounded-xl p-4 bg-stone-50/50 space-y-2">
              <h3 className="font-bold text-emerald-900 flex items-center gap-1.5">
                <span className="text-emerald-700 font-black">Q.</span> おすすめの予約時期やタイミングは？
              </h3>
              <p className="text-stone-700 text-xs md:text-sm leading-relaxed">
                人気の日程（連休や週末）は1〜2ヶ月前には満室になることが多いため、早期予約（早割プラン）の利用がおすすめです。また楽天トラベルの「5と0のつく日」キャンペーンを活用すると最大20%オフのクーポンが併用でき、最もお得に予約できます。
              </p>
            </div>
            <div className="border border-stone-100 rounded-xl p-4 bg-stone-50/50 space-y-2">
              <h3 className="font-bold text-emerald-900 flex items-center gap-1.5">
                <span className="text-emerald-700 font-black">Q.</span> 宿選びで失敗しないためのポイントは？
              </h3>
              <p className="text-stone-700 text-xs md:text-sm leading-relaxed">
                宿泊者レビューのお風呂・お食事・接客評価が4.3以上の宿を選ぶと満足度が非常に高くなります。またアクセス手段（送迎バスの有無など）やプランに含まれる特典を事前に確認しておくと安心です。
              </p>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
