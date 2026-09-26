import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import SpecialCouponBanner from '@/app/components/SpecialCouponBanner';
import ShareButtons from '@/app/components/ShareButtons';

export const metadata: Metadata = {
  title: '専属パティシエ特製スイーツ＆デザートビュッフェ！甘美なご褒美を味わう極上美食ホテル ｜ 日本全国・旅宿クラウド',
  description: '2026年最新！専属パティシエの特製スイーツや豪華デザートビュッフェが自慢のホテル＆温泉旅館。記念日や女子旅、自分へのご褒美に最高の甘美なステイ。',
  keywords: ["ホテルスイーツ","デザートビュッフェ","パティシエ","ご褒美旅","楽天トラベル"],
  alternates: {
    canonical: 'https://croud-travel.pages.dev/luxury-pastry-chef-sweets-dessert-gourmet-stay',
  },
  openGraph: {
    title: '専属パティシエ特製スイーツ＆デザートビュッフェ！甘美なご褒美を味わう極上美食ホテル',
    description: '2026年最新！専属パティシエの特製スイーツや豪華デザートビュッフェが自慢のホテル＆温泉旅館。記念日や女子旅、自分へのご褒美に最高の甘美なステイ。',
    url: 'https://croud-travel.pages.dev/luxury-pastry-chef-sweets-dessert-gourmet-stay',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "専属パティシエ特製スイーツ＆デザートビュッフェ！甘美なご褒美を味わう極上美食ホテル",
    "description": "2026年最新！専属パティシエの特製スイーツや豪華デザートビュッフェが自慢のホテル＆温泉旅館。記念日や女子旅、自分へのご褒美に最高の甘美なステイ。",
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
    "mainEntityOfPage": "https://croud-travel.pages.dev/luxury-pastry-chef-sweets-dessert-gourmet-stay"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "専属パティシエスイーツ＆デザートホテルの旅行でおすすめの予約時期やタイミングは？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "人気の日程（連休や週末）は1〜2ヶ月前には満室になることが多いため、早期予約（早割プラン）の利用がおすすめです。また楽天トラベルの「5と0のつく日」キャンペーンを活用すると最大20%オフのクーポンが併用でき、最もお得に予約できます。"
        }
      },
      {
        "@type": "Question",
        "name": "専属パティシエスイーツ＆デザートホテルの宿選びで失敗しないためのポイントは？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "宿泊者レビューのお風呂・お食事・接客評価が4.3以上の宿を選ぶと満足度が非常に高くなります。またアクセス手段（送迎バスの有無など）やプランに含まれる特典を事前に確認しておくと安心です。"
        }
      }
    ]
  };

  const hotels: any[] = [
  {
    "hotelNo": 149369,
    "hotelName": "ホテルグレイスリー那覇",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D149369",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D149369%26f_flg%3DPLAN",
    "hotelMinCharge": 7500,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/149369/149369.jpg",
    "userReview": "国際通り散策に便利な好立地素泊まりで利用しました。立地がよく国際通りを散策するのに便利です。クチコミの詳細はこちらから　https://review.travel.rakuten.co.j…　2026-09-19 07:26:14投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=149369\" class=\"3click\">つづきはこちら</a>",
    "reviewAverage": 4.32,
    "reviewCount": 927,
    "address": "沖縄県那覇市松尾1-3-6",
    "access": "●ゆいレール「県庁前」駅徒歩5分／●「国際通り」徒歩0分。荷物が多くても、車が無くても楽々♪",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F149369%2F149369.html"
  },
  {
    "hotelNo": 164935,
    "hotelName": "アートホテル大阪ベイタワー",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D164935",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D164935%26f_flg%3DPLAN",
    "hotelMinCharge": 2841,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/164935/164935.jpg",
    "userReview": "仕事終わりに気軽に寄れる最高のロケーションと丁寧な印象の朝食を食べについつい訪れるホテル久々に訪れました今回も友人とおしゃべりをするために利用させていただきました部屋はいつもよりも少しアッ…　2026-09-20 02:23:55投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=164935\" class=\"3click\">つづきはこちら</a>",
    "reviewAverage": 4.48,
    "reviewCount": 2698,
    "address": "大阪府大阪市港区弁天1-2-1",
    "access": "地下鉄中央線／JR環状線「弁天町」駅からすぐ。USJまで電車で約7分！",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F164935%2F164935.html"
  },
  {
    "hotelNo": 184275,
    "hotelName": "ＴＨＥ　ＨＯＴＥＬ　ＳＡＮＲＡＫＵ　ＫＡＮＡＺＡＷＡ（ザ　ホテル山楽　金沢）",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D184275",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D184275%26f_flg%3DPLAN",
    "hotelMinCharge": 9900,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/184275/184275.jpg",
    "userReview": "ブッフェがどれもおいしく種類も豊富でとても良い旅行になりました。部屋も綺麗で広い。備付の設備も充実していました。強いて言えば温泉や大浴場が無いので部屋の風呂が広いと嬉しかったです。クチコミ…　2026-09-14 12:56:13投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=184275\" class=\"3click\">つづきはこちら</a>",
    "reviewAverage": 4.7,
    "reviewCount": 878,
    "address": "石川県金沢市尾張町1丁目1番1号",
    "access": "JR金沢駅東口よりバスで約１０分「武蔵が辻・近江町市場」下車徒歩４分／近江町市場へ徒歩１分、金沢城公園へ徒歩３分",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F184275%2F184275.html"
  },
  {
    "hotelNo": 179887,
    "hotelName": "月のホテル",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D179887",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D179887%26f_flg%3DPLAN",
    "hotelMinCharge": 5800,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/179887/179887.jpg",
    "userReview": "チェックインの対応が不快、部屋の造りも残念チェックイン時の対応が不快極まりなかった。また、ユニットバスがベッドからガラスとカーテンで仕切られラブホテルのようだった。クチコミの詳細はこちらか…　2026-09-18 20:30:03投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=179887\" class=\"3click\">つづきはこちら</a>",
    "reviewAverage": 4.41,
    "reviewCount": 1242,
    "address": "山形県酒田市幸町1-10-20",
    "access": "酒田駅正面（徒歩約１分）・酒田ICより10分・庄内空港より車で30分",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F179887%2F179887.html"
  },
  {
    "hotelNo": 39175,
    "hotelName": "登別温泉　登別グランドホテル",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D39175",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D39175%26f_flg%3DPLAN",
    "hotelMinCharge": 15400,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/39175/39175.jpg",
    "userReview": "風呂が良いクチコミの詳細はこちらから　https://review.travel.rakuten.co.jp/hotel/voice/39175?reviewId=33123479436925　2026-09-19 09:17:48投稿",
    "reviewAverage": 4.25,
    "reviewCount": 3320,
    "address": "北海道登別市登別温泉町154",
    "access": "JR登別駅からタクシーにて約13分、路線バスにて登別駅⇒登別温泉ターミナル約15分（バス運賃片道350円）",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F39175%2F39175.html"
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
          <span className="text-stone-800 font-semibold truncate">パティシエ特製スイーツ×極上美食</span>
        </div>
      </div>

      {/* ヒーローヘッダー */}
      <header className="relative bg-emerald-950 text-white py-12 px-4 md:px-8 border-b border-emerald-900">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-800/80 text-emerald-200 text-xs font-bold rounded-full">
            <span>✨ 2026年最新版</span>
            <span>•</span>
            <span>パティシエ特製スイーツ×極上美食</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight font-journal-serif leading-tight">
            専属パティシエ特製スイーツ＆デザートビュッフェ！甘美なご褒美を味わう極上美食ホテル
          </h1>
          <p className="text-stone-300 text-sm md:text-base leading-relaxed">
            旅の醍醐味は美味しいデザート！一流パティシエが目の前で仕上げる出来立てミルフィーユや旬フルーツのパフェ、豪華なワゴンデザートサービスまで。スイーツ好きの夢を叶える贅沢な美食リゾート＆温泉ホテルを厳選しました。
          </p>
          <div className="pt-2">
            <ShareButtons title="専属パティシエ特製スイーツ＆デザートビュッフェ！甘美なご褒美を味わう極上美食ホテル" url="https://croud-travel.pages.dev/luxury-pastry-chef-sweets-dessert-gourmet-stay" />
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
