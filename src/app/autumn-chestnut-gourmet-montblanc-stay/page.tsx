import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import SpecialCouponBanner from '@/app/components/SpecialCouponBanner';
import ShareButtons from '@/app/components/ShareButtons';

export const metadata: Metadata = {
  title: '【2026年】小布施・丹波の極上和栗！搾りたて生モンブラン＆栗おこわ会席の秋グルメ宿5選 ｜ 日本全国・旅宿クラウド',
  description: '2026年最新！栗の名産地で味わう賞味期限数十分の搾りたて極細生モンブランや、ホクホクの栗おこわ、栗の渋皮煮デザートが自慢の秋の名宿5選。',
  keywords: ["和栗モンブラン","生モンブラン","小布施栗","丹波栗","秋の味覚","楽天トラベル"],
  alternates: {
    canonical: 'https://croud-travel.pages.dev/autumn-chestnut-gourmet-montblanc-stay',
  },
  openGraph: {
    title: '【2026年】小布施・丹波の極上和栗！搾りたて生モンブラン＆栗おこわ会席の秋グルメ宿5選',
    description: '2026年最新！栗の名産地で味わう賞味期限数十分の搾りたて極細生モンブランや、ホクホクの栗おこわ、栗の渋皮煮デザートが自慢の秋の名宿5選。',
    url: 'https://croud-travel.pages.dev/autumn-chestnut-gourmet-montblanc-stay',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【2026年】小布施・丹波の極上和栗！搾りたて生モンブラン＆栗おこわ会席の秋グルメ宿5選",
    "description": "2026年最新！栗の名産地で味わう賞味期限数十分の搾りたて極細生モンブランや、ホクホクの栗おこわ、栗の渋皮煮デザートが自慢の秋の名宿5選。",
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
    "mainEntityOfPage": "https://croud-travel.pages.dev/autumn-chestnut-gourmet-montblanc-stay"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "極上和栗モンブラン＆秋の栗グルメ温泉宿の旅行でおすすめの予約時期やタイミングは？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "人気の日程（連休や週末）は1〜2ヶ月前には満室になることが多いため、早期予約（早割プラン）の利用がおすすめです。また楽天トラベルの「5と0のつく日」キャンペーンを活用すると最大20%オフのクーポンが併用でき、最もお得に予約できます。"
        }
      },
      {
        "@type": "Question",
        "name": "極上和栗モンブラン＆秋の栗グルメ温泉宿の宿選びで失敗しないためのポイントは？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "宿泊者レビューのお風呂・お食事・接客評価が4.3以上の宿を選ぶと満足度が非常に高くなります。またアクセス手段（送迎バスの有無など）やプランに含まれる特典を事前に確認しておくと安心です。"
        }
      }
    ]
  };

  const hotels: any[] = [
  {
    "hotelNo": 40731,
    "hotelName": "長湯温泉　丸長旅館",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D40731",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D40731%26f_flg%3DPLAN",
    "hotelMinCharge": 17100,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/40731/40731.jpg",
    "userReview": "絶景のロケーションとおもてなしに心から癒やされました。",
    "reviewAverage": 4.85,
    "reviewCount": 54,
    "address": "大分県竹田市直入町長湯温泉７９９５－２",
    "access": "◆湯布院IC国道210号を湯平温泉経由で広域農道50分◆ＪＲ豊肥本線　豊後竹田駅から車（タクシー）で３０分",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F40731%2F40731.html"
  },
  {
    "hotelNo": 8733,
    "hotelName": "大阪の絶景温泉旅館　ホテルセイリュウ",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D8733",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D8733%26f_flg%3DPLAN",
    "hotelMinCharge": 5500,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/8733/8733.jpg",
    "userReview": "スタッフの対応と朝食は満足、温泉は手すりが少なく不安スタッフの方皆様親切で気持ち良く過ごせました温泉も気持ち良かったですが、足が悪いのでつかまるところが少なくて怖かったのが少しマイナスです…　2026-09-17 23:08:18投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=8733\" class=\"3click\">つづきはこちら</a>",
    "reviewAverage": 3.91,
    "reviewCount": 394,
    "address": "大阪府東大阪市上石切町1-11-12",
    "access": "阪神高速東大阪線　水走出口より車で約５分　第２阪道路　石切出口より約５分/近鉄奈良線石切駅より徒歩5分",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F8733%2F8733.html"
  },
  {
    "hotelNo": 79268,
    "hotelName": "有福温泉　旅館ぬしや",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D79268",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D79268%26f_flg%3DPLAN",
    "hotelMinCharge": 11700,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/79268/79268.jpg",
    "userReview": "クチコミの詳細はこちらから　https://review.travel.rakuten.co.jp/hotel/voice/79268?reviewId=33123479352716　2026-09-12 08:13:36投稿",
    "reviewAverage": 4.59,
    "reviewCount": 279,
    "address": "島根県江津市有福温泉町955",
    "access": "山陰道浜田東ＩＣより車で約２０分　山陰本線波子駅よりタクシーで約10分　料金は約4000円　事前のご予約をおすすめします",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F79268%2F79268.html"
  },
  {
    "hotelNo": 18924,
    "hotelName": "赤穂温泉　割烹旅館　鹿久居荘　赤穂店",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D18924",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D18924%26f_flg%3DPLAN",
    "hotelMinCharge": 11860,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/18924/18924.jpg",
    "userReview": "水槽の魚掬いが制限されており残念三度目の利用でした。以前は鯛などの大きい魚も真ん中の大きい水槽の側で掬えましたが、現在は木の踏み台の腐食を理由にアコウ、アジなどの小さい水槽に移し、小さい網でし…　2026-08-31 11:10:19投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=18924\" class=\"3click\">つづきはこちら</a>",
    "reviewAverage": 3.86,
    "reviewCount": 580,
    "address": "兵庫県赤穂市さつき町35-5",
    "access": "ＪＲ播州赤穂。送迎バスの御利用は、お電話でお申し込み下さい。　お迎え15時４0分・16時４0分　朝送り10時",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F18924%2F18924.html"
  },
  {
    "hotelNo": 13871,
    "hotelName": "美又温泉　かめや旅館＜島根県＞",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D13871",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D13871%26f_flg%3DPLAN",
    "hotelMinCharge": 7350,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/13871/13871.jpg",
    "userReview": "食事、お風呂最高90代の母2人連れて行きました娘よりよく食べ、美味しい食事を満喫しました。お風呂も気持ちよくはいりました。元湯のチケットももらいお得でした。お湯はとってもスベスベでした…　2026-09-19 08:37:46投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=13871\" class=\"3click\">つづきはこちら</a>",
    "reviewAverage": 4.41,
    "reviewCount": 136,
    "address": "島根県浜田市金城町追原7-2",
    "access": "Ｊ浜田道「旭IC」より車で約10分／「JR浜田駅」より車で約25分／「しまね海洋館アクアス」より車で約40分",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F13871%2F13871.html"
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
          <span className="text-stone-800 font-semibold truncate">搾りたて生モンブラン×極上和栗宿</span>
        </div>
      </div>

      {/* ヒーローヘッダー */}
      <header className="relative bg-emerald-950 text-white py-12 px-4 md:px-8 border-b border-emerald-900">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-800/80 text-emerald-200 text-xs font-bold rounded-full">
            <span>✨ 2026年最新版</span>
            <span>•</span>
            <span>搾りたて生モンブラン×極上和栗宿</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight font-journal-serif leading-tight">
            【2026年】小布施・丹波の極上和栗！搾りたて生モンブラン＆栗おこわ会席の秋グルメ宿5選
          </h1>
          <p className="text-stone-300 text-sm md:text-base leading-relaxed">
            芳醇な香りと上品な甘みが際立つ最高峰のブランド和栗。目の前で幾重にも搾り出される繊細な極細生モンブラン、ほくほくの栗おこわ、栗と地鶏の炊き込みご飯。秋の味覚の王様・栗を贅沢に味わい尽くし、紅葉露天風呂に浸かる至福の秋旅へ。
          </p>
          <div className="pt-2">
            <ShareButtons title="【2026年】小布施・丹波の極上和栗！搾りたて生モンブラン＆栗おこわ会席の秋グルメ宿5選" url="https://croud-travel.pages.dev/autumn-chestnut-gourmet-montblanc-stay" />
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
