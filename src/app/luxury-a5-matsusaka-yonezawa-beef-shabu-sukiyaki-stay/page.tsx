import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import SpecialCouponBanner from '@/app/components/SpecialCouponBanner';
import ShareButtons from '@/app/components/ShareButtons';

export const metadata: Metadata = {
  title: '【2026年】とろける極上の霜降り！A5松阪牛・米沢牛の特選すき焼き＆しゃぶしゃぶ名宿5選 ｜ 日本全国・旅宿クラウド',
  description: '2026年最新！日本三大和牛の松阪牛や米沢牛を贅沢に使った絶品すき焼き・しゃぶしゃぶ会席と極上名湯を満喫できる厳選美食宿5選。',
  keywords: ["松阪牛","米沢牛","すき焼き","しゃぶしゃぶ","和牛会席","楽天トラベル"],
  alternates: {
    canonical: 'https://croud-travel.pages.dev/luxury-a5-matsusaka-yonezawa-beef-shabu-sukiyaki-stay',
  },
  openGraph: {
    title: '【2026年】とろける極上の霜降り！A5松阪牛・米沢牛の特選すき焼き＆しゃぶしゃぶ名宿5選',
    description: '2026年最新！日本三大和牛の松阪牛や米沢牛を贅沢に使った絶品すき焼き・しゃぶしゃぶ会席と極上名湯を満喫できる厳選美食宿5選。',
    url: 'https://croud-travel.pages.dev/luxury-a5-matsusaka-yonezawa-beef-shabu-sukiyaki-stay',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【2026年】とろける極上の霜降り！A5松阪牛・米沢牛の特選すき焼き＆しゃぶしゃぶ名宿5選",
    "description": "2026年最新！日本三大和牛の松阪牛や米沢牛を贅沢に使った絶品すき焼き・しゃぶしゃぶ会席と極上名湯を満喫できる厳選美食宿5選。",
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
    "datePublished": "2026-09-26",
    "dateModified": "2026-09-26",
    "mainEntityOfPage": "https://croud-travel.pages.dev/luxury-a5-matsusaka-yonezawa-beef-shabu-sukiyaki-stay"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "A5ブランド牛すき焼き・しゃぶしゃぶ美食宿の旅行でおすすめの予約時期やタイミングは？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "人気の日程（連休や週末）は1〜2ヶ月前には満室になることが多いため、早期予約（早割プラン）の利用がおすすめです。また楽天トラベルの「5と0のつく日」キャンペーンを活用すると最大20%オフのクーポンが併用でき、最もお得に予約できます。"
        }
      },
      {
        "@type": "Question",
        "name": "A5ブランド牛すき焼き・しゃぶしゃぶ美食宿の宿選びで失敗しないためのポイントは？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "宿泊者レビューのお風呂・お食事・接客評価が4.3以上の宿を選ぶと満足度が非常に高くなります。またアクセス手段（送迎バスの有無など）やプランに含まれる特典を事前に確認しておくと安心です。"
        }
      }
    ]
  };

  const hotels: any[] = [
  {
    "hotelNo": 37898,
    "hotelName": "榊原温泉　旅館　清少納言",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D37898",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D37898%26f_flg%3DPLAN",
    "hotelMinCharge": 8250,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/37898/37898.jpg",
    "userReview": "榊原温泉を満喫榊原温泉満喫しました。混雑なくゆっくり温泉楽しみました。クチコミの詳細はこちらから　https://review.travel.rakuten.co.jp/hotel/voi…　2026-09-16 18:52:21投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=37898\" class=\"3click\">つづきはこちら</a>",
    "reviewAverage": 3.97,
    "reviewCount": 769,
    "address": "三重県津市榊原町6010",
    "access": "近畿日本鉄道大阪線「榊原温泉口駅」より車で約10分 送迎あり／伊勢自動車道ICより車で約15分",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F37898%2F37898.html"
  },
  {
    "hotelNo": 15042,
    "hotelName": "塩田温泉旅館　湯元　うえやま",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D15042",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D15042%26f_flg%3DPLAN",
    "hotelMinCharge": 9900,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/15042/15042.jpg",
    "userReview": "雰囲気抜群の温泉と食事に大満足、また来たい建物の外観、内観ともに雰囲気があり、とても素敵な温泉旅館です。お部屋も大変快適に過ごすことができました。温泉も最高で、食事も大満足です。自信をもっておすす…　2026-09-16 16:59:06投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=15042\" class=\"3click\">つづきはこちら</a>",
    "reviewAverage": 4.5,
    "reviewCount": 215,
    "address": "兵庫県姫路市夢前町塩田287",
    "access": "ＪＲ姫路→神姫バス塩田温泉～前之庄３５分　中国道福崎ＩＣ２０分　山陽道姫路西ＩＣ２５分  中国道夢前スマートＩＣ５分",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F15042%2F15042.html"
  },
  {
    "hotelNo": 183218,
    "hotelName": "日本料理　旅館　いすゞ",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D183218",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D183218%26f_flg%3DPLAN",
    "hotelMinCharge": 7500,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/183218/183218.jpg",
    "userReview": "料理旅館の食事とアットホームな接客に大満足料理旅館は初めてでしたが、大人も子どももおいしく頂けました。接客もアットホームな感じで気さくにお話しできました。また三重に行く時は利用したいてす。クチ…　2026-08-16 09:37:22投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=183218\" class=\"3click\">つづきはこちら</a>",
    "reviewAverage": 4.16,
    "reviewCount": 57,
    "address": "三重県鈴鹿市庄野共進1-4-51",
    "access": "加佐登駅より車で8分",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F183218%2F183218.html"
  },
  {
    "hotelNo": 7624,
    "hotelName": "赤目温泉　山の湯　湯元赤目　山水園",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D7624",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D7624%26f_flg%3DPLAN",
    "hotelMinCharge": 9900,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/7624/7624.jpg",
    "userReview": "一人でも快適、食事や風呂も大満足一人でも宿泊できるのが良いです。一人部屋は普通ですが、食事、風呂、接客サービスなど、大変満足しました。クチコミの詳細はこちらから　https://review.…　2026-09-10 09:48:43投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=7624\" class=\"3click\">つづきはこちら</a>",
    "reviewAverage": 4.47,
    "reviewCount": 498,
    "address": "三重県名張市赤目町柏原1203",
    "access": "近鉄大阪線「赤目口駅」より車で5分。送迎もございます（事前予約は不要ですが、当日の到着時間はお電話でご連絡ください）",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F7624%2F7624.html"
  },
  {
    "hotelNo": 5644,
    "hotelName": "磨洞温泉　涼風荘",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D5644",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D5644%26f_flg%3DPLAN",
    "hotelMinCharge": 7260,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/5644/5644.jpg",
    "userReview": "清掃が行き届いておらずほこりだらけ設備は古く階段のアップダウンがあるので足の悪い方にはおすすめできません。その辺りは事前に調べればわかるので問題なかったのですが、清掃が全く行き届いておらず、共有の…　2026-08-15 22:55:21投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=5644\" class=\"3click\">つづきはこちら</a>",
    "reviewAverage": 3.52,
    "reviewCount": 265,
    "address": "三重県津市半田2860-1",
    "access": "電車：近鉄津新町駅下車（送迎バス有り）。車:伊勢道久居ＩＣより１０分。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F5644%2F5644.html"
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
          <span className="text-stone-800 font-semibold truncate">A5ブランド牛×極上すき焼き・しゃぶしゃぶ</span>
        </div>
      </div>

      {/* ヒーローヘッダー */}
      <header className="relative bg-emerald-950 text-white py-12 px-4 md:px-8 border-b border-emerald-900">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-800/80 text-emerald-200 text-xs font-bold rounded-full">
            <span>✨ 2026年最新版</span>
            <span>•</span>
            <span>A5ブランド牛×極上すき焼き・しゃぶしゃぶ</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight font-journal-serif leading-tight">
            【2026年】とろける極上の霜降り！A5松阪牛・米沢牛の特選すき焼き＆しゃぶしゃぶ名宿5選
          </h1>
          <p className="text-stone-300 text-sm md:text-base leading-relaxed">
            きめ細やかなサシが入った最高ランクA5ブランド和牛。秘伝の割り下でさっと煮込む極上すき焼きや、昆布出汁にくぐらせてポン酢でいただく霜降りしゃぶしゃぶ。口に入れた瞬間に広がる芳醇な甘みと旨味、そして名湯に癒やされる至福の肉グルメ旅へ。
          </p>
          <div className="pt-2">
            <ShareButtons title="【2026年】とろける極上の霜降り！A5松阪牛・米沢牛の特選すき焼き＆しゃぶしゃぶ名宿5選" url="https://croud-travel.pages.dev/luxury-a5-matsusaka-yonezawa-beef-shabu-sukiyaki-stay" />
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
