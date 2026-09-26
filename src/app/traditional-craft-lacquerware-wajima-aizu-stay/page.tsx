import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import SpecialCouponBanner from '@/app/components/SpecialCouponBanner';
import ShareButtons from '@/app/components/ShareButtons';

export const metadata: Metadata = {
  title: '【2026年】艶やかな漆の器と伝統の技！輪島塗・会津塗の手仕事美を愛でる名湯の宿5選 ｜ 日本全国・旅宿クラウド',
  description: '2026年最新！職人が手塗りを重ねた本漆の器で供される優美な日本料理と、伝統工芸のギャラリーや体験が楽しめる文化薫る名旅館5選。',
  keywords: ["輪島塗","会津塗","漆器の器","伝統工芸","文化の宿","楽天トラベル"],
  alternates: {
    canonical: 'https://croud-travel.pages.dev/traditional-craft-lacquerware-wajima-aizu-stay',
  },
  openGraph: {
    title: '【2026年】艶やかな漆の器と伝統の技！輪島塗・会津塗の手仕事美を愛でる名湯の宿5選',
    description: '2026年最新！職人が手塗りを重ねた本漆の器で供される優美な日本料理と、伝統工芸のギャラリーや体験が楽しめる文化薫る名旅館5選。',
    url: 'https://croud-travel.pages.dev/traditional-craft-lacquerware-wajima-aizu-stay',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【2026年】艶やかな漆の器と伝統の技！輪島塗・会津塗の手仕事美を愛でる名湯の宿5選",
    "description": "2026年最新！職人が手塗りを重ねた本漆の器で供される優美な日本料理と、伝統工芸のギャラリーや体験が楽しめる文化薫る名旅館5選。",
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
    "mainEntityOfPage": "https://croud-travel.pages.dev/traditional-craft-lacquerware-wajima-aizu-stay"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "伝統漆器と手仕事美＆名湯の宿の旅行でおすすめの予約時期やタイミングは？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "人気の日程（連休や週末）は1〜2ヶ月前には満室になることが多いため、早期予約（早割プラン）の利用がおすすめです。また楽天トラベルの「5と0のつく日」キャンペーンを活用すると最大20%オフのクーポンが併用でき、最もお得に予約できます。"
        }
      },
      {
        "@type": "Question",
        "name": "伝統漆器と手仕事美＆名湯の宿の宿選びで失敗しないためのポイントは？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "宿泊者レビューのお風呂・お食事・接客評価が4.3以上の宿を選ぶと満足度が非常に高くなります。またアクセス手段（送迎バスの有無など）やプランに含まれる特典を事前に確認しておくと安心です。"
        }
      }
    ]
  };

  const hotels: any[] = [
  {
    "hotelNo": 39377,
    "hotelName": "会津東山温泉　今昔亭（こんじゃくてい）",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D39377",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D39377%26f_flg%3DPLAN",
    "hotelMinCharge": 12100,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/39377/39377.jpg",
    "userReview": "広々とした展望露天風呂が最高!部屋の展望露天風呂が広々として最高でした!クチコミの詳細はこちらから　https://review.travel.rakuten.co.jp/hotel/voic…　2026-09-09 07:38:14投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=39377\" class=\"3click\">つづきはこちら</a>",
    "reviewAverage": 4.35,
    "reviewCount": 395,
    "address": "福島県会津若松市東山町湯本247",
    "access": "ＪＲ磐越西線　会津若松駅からタクシーで１５分／磐越自動車道　会津若松ＩＣから２０分☆送迎は要連絡☆",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F39377%2F39377.html"
  },
  {
    "hotelNo": 67124,
    "hotelName": "山中温泉　吉祥やまなか",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D67124",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D67124%26f_flg%3DPLAN",
    "hotelMinCharge": 16500,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/67124/67124.jpg",
    "userReview": "美味しい食事と誕生日への配慮に大満足食事もとても美味しかったです。誕生日のケーキなど色々配慮して下さってとても楽しく過ごせました。お風呂もとても気持ちよかったです。クチコミの詳細はこちらか…　2026-09-16 22:30:33投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=67124\" class=\"3click\">つづきはこちら</a>",
    "reviewAverage": 4.73,
    "reviewCount": 1657,
    "address": "石川県加賀市山中温泉東町1-ホ14-3",
    "access": "加賀温泉駅・小松空港から無料送迎あり（要予約/定時便）【車】加賀ICより14分。金沢・福井へは車で1時間",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F67124%2F67124.html"
  },
  {
    "hotelNo": 69244,
    "hotelName": "磐梯熱海温泉　あたたかい記憶が宿る　守田屋",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D69244",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D69244%26f_flg%3DPLAN",
    "hotelMinCharge": 21200,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/69244/69244.jpg",
    "userReview": "食事は楽しめたが、すだれの交換を希望楽しい食事をさせてもらいました。すだれは交換した方がいいとおもいます。クチコミの詳細はこちらから　https://review.travel.rakut…　2026-08-10 12:41:13投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=69244\" class=\"3click\">つづきはこちら</a>",
    "reviewAverage": 4.56,
    "reviewCount": 285,
    "address": "福島県郡山市熱海町5-271",
    "access": "磐越西線　磐梯熱海駅よりタクシー３分「送迎なし」／磐越自動車道　磐梯熱海ＩＣより車で１０分",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F69244%2F69244.html"
  },
  {
    "hotelNo": 6067,
    "hotelName": "きそふくしま温泉　街道浪漫　おん宿　蔦屋",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D6067",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D6067%26f_flg%3DPLAN",
    "hotelMinCharge": 8090,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/6067/6067.jpg",
    "userReview": "駐車場の案内が不親切で非常に危険だった駐車場について、隣の奥を案内されたが、バックで進入しなければならず非常に狭く危うく壁にぶつかりそうになった。後からチェックインした人が宿の前のスペースに駐車さ…　2026-09-13 19:14:31投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=6067\" class=\"3click\">つづきはこちら</a>",
    "reviewAverage": 4.25,
    "reviewCount": 582,
    "address": "長野県木曽郡木曽町福島本町5162",
    "access": "JR木曽福島駅～徒歩約10分【15：30分16：40分送迎有要予約】伊那IC約40分塩尻IC約60分中津川I約70分",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F6067%2F6067.html"
  },
  {
    "hotelNo": 18143,
    "hotelName": "駅前フジグランドホテル",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D18143",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D18143%26f_flg%3DPLAN",
    "hotelMinCharge": 6600,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/18143/18143.jpg",
    "userReview": "駅近で温泉も無料、ベッドも快適で満足付近の徒歩2～3分の温泉施設が無料で使えるため、快適でした。1人部屋でしたがベッドはフカフカですしそれなりの清潔さです。駅の目の前にあるため、公共交通機…　2026-09-17 17:47:49投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=18143\" class=\"3click\">つづきはこちら</a>",
    "reviewAverage": 4,
    "reviewCount": 3306,
    "address": "福島県会津若松市駅前町5-25",
    "access": "★JR会津若松駅徒歩３０秒の超好立地★駅に近いホテルって最高！",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F18143%2F18143.html"
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
          <span className="text-stone-800 font-semibold truncate">伝統漆器×手仕事の美宿</span>
        </div>
      </div>

      {/* ヒーローヘッダー */}
      <header className="relative bg-emerald-950 text-white py-12 px-4 md:px-8 border-b border-emerald-900">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-800/80 text-emerald-200 text-xs font-bold rounded-full">
            <span>✨ 2026年最新版</span>
            <span>•</span>
            <span>伝統漆器×手仕事の美宿</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight font-journal-serif leading-tight">
            【2026年】艶やかな漆の器と伝統の技！輪島塗・会津塗の手仕事美を愛でる名湯の宿5選
          </h1>
          <p className="text-stone-300 text-sm md:text-base leading-relaxed">
            しっとりと手に馴染む本漆の器の優しい温もり。輪島塗や会津塗の美しい蒔絵が施された器に盛り付けられる四季の会席料理は、目にも舌にも贅沢。何百年もの伝統を受け継ぐ匠の技と、歴史ある名湯に心を委ねる格調高いステイ。
          </p>
          <div className="pt-2">
            <ShareButtons title="【2026年】艶やかな漆の器と伝統の技！輪島塗・会津塗の手仕事美を愛でる名湯の宿5選" url="https://croud-travel.pages.dev/traditional-craft-lacquerware-wajima-aizu-stay" />
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
