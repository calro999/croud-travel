import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import SpecialCouponBanner from '@/app/components/SpecialCouponBanner';
import ShareButtons from '@/app/components/ShareButtons';

export const metadata: Metadata = {
  title: '【2026年】黄金の輝きと加賀百万石の雅！金箔貼り体験＆金箔風呂が自慢の金沢温泉宿5選 ｜ 日本全国・旅宿クラウド',
  description: '2026年最新！金沢の伝統工芸「金箔」の貼り体験や、金箔が舞う贅沢な金箔風呂、金箔をあしらった豪華加賀会席を満喫できる名門温泉旅館5選。',
  keywords: ["金箔体験","金沢温泉","加賀会席","加賀百万石","伝統工芸宿","楽天トラベル"],
  alternates: {
    canonical: 'https://croud-travel.pages.dev/traditional-gold-leaf-craft-kanazawa-stay',
  },
  openGraph: {
    title: '【2026年】黄金の輝きと加賀百万石の雅！金箔貼り体験＆金箔風呂が自慢の金沢温泉宿5選',
    description: '2026年最新！金沢の伝統工芸「金箔」の貼り体験や、金箔が舞う贅沢な金箔風呂、金箔をあしらった豪華加賀会席を満喫できる名門温泉旅館5選。',
    url: 'https://croud-travel.pages.dev/traditional-gold-leaf-craft-kanazawa-stay',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【2026年】黄金の輝きと加賀百万石の雅！金箔貼り体験＆金箔風呂が自慢の金沢温泉宿5選",
    "description": "2026年最新！金沢の伝統工芸「金箔」の貼り体験や、金箔が舞う贅沢な金箔風呂、金箔をあしらった豪華加賀会席を満喫できる名門温泉旅館5選。",
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
    "mainEntityOfPage": "https://croud-travel.pages.dev/traditional-gold-leaf-craft-kanazawa-stay"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "加賀金箔工芸＆金箔風呂温泉宿の旅行でおすすめの予約時期やタイミングは？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "人気の日程（連休や週末）は1〜2ヶ月前には満室になることが多いため、早期予約（早割プラン）の利用がおすすめです。また楽天トラベルの「5と0のつく日」キャンペーンを活用すると最大20%オフのクーポンが併用でき、最もお得に予約できます。"
        }
      },
      {
        "@type": "Question",
        "name": "加賀金箔工芸＆金箔風呂温泉宿の宿選びで失敗しないためのポイントは？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "宿泊者レビューのお風呂・お食事・接客評価が4.3以上の宿を選ぶと満足度が非常に高くなります。またアクセス手段（送迎バスの有無など）やプランに含まれる特典を事前に確認しておくと安心です。"
        }
      }
    ]
  };

  const hotels: any[] = [
  {
    "hotelNo": 5174,
    "hotelName": "温泉めい想倶楽部　富士屋旅館",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D5174",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D5174%26f_flg%3DPLAN",
    "hotelMinCharge": 7040,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/5174/5174.jpg",
    "userReview": "高校の友達と食事を楽しみ、大浴場も満喫高校の友達6人と宿泊しました。ゆっくりできて食事美味しかったです。大浴場のお湯が熱かったですが、楽しい思い出になりました。クチコミの詳細はこちらから　ht…　2026-09-08 17:07:48投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=5174\" class=\"3click\">つづきはこちら</a>",
    "reviewAverage": 4.03,
    "reviewCount": 990,
    "address": "石川県加賀市山代温泉桔梗ヶ丘2-121-3",
    "access": "【ＪＲ】北陸本線加賀温泉駅より送迎有（１4：３０～１８：００）要事前予約／【車】北陸道加賀IC又は片山津ICより約20分",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F5174%2F5174.html"
  },
  {
    "hotelNo": 1616,
    "hotelName": "山代温泉　ゆのくに天祥",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D1616",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D1616%26f_flg%3DPLAN",
    "hotelMinCharge": 9900,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/1616/1616.jpg",
    "userReview": "食事も温泉も接客も最高、また来たい旅館大変満足した1日でした。夕食、朝食共に見栄えに味申し分ありません。朝食は胃にとてもやさしい味付け。お風呂もとても素敵でした。担当に付いてくれた…　2026-09-19 13:47:08投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=1616\" class=\"3click\">つづきはこちら</a>",
    "reviewAverage": 4.5,
    "reviewCount": 3744,
    "address": "石川県加賀市山代温泉19-49-1",
    "access": "【車】北陸自動車道加賀IC、片山津ICより約15分【電車】JR・IRいしかわ鉄道加賀温泉駅より無料送迎 予約制",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F1616%2F1616.html"
  },
  {
    "hotelNo": 68251,
    "hotelName": "山中温泉　かがり吉祥亭",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D68251",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D68251%26f_flg%3DPLAN",
    "hotelMinCharge": 14500,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/68251/68251.jpg",
    "userReview": "子供が楽しめる旅館子供が楽しめるサービス満点で家族連れには良いと思います。貸切温泉とても良かったです。タオルを部屋から持って行かなくても良いのも楽でした。フリードリンクもありがたいです。…　2026-09-19 16:11:19投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=68251\" class=\"3click\">つづきはこちら</a>",
    "reviewAverage": 4.64,
    "reviewCount": 1890,
    "address": "石川県加賀市山中温泉こおろぎ町ニ1-1",
    "access": "加賀温泉駅・小松空港から無料送迎あり（要予約/定時便）【車】加賀ICより16分。金沢・福井へは車で1時間",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F68251%2F68251.html"
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
          <span className="text-stone-800 font-semibold truncate">加賀金箔工芸×金箔風呂名宿</span>
        </div>
      </div>

      {/* ヒーローヘッダー */}
      <header className="relative bg-emerald-950 text-white py-12 px-4 md:px-8 border-b border-emerald-900">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-800/80 text-emerald-200 text-xs font-bold rounded-full">
            <span>✨ 2026年最新版</span>
            <span>•</span>
            <span>加賀金箔工芸×金箔風呂名宿</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight font-journal-serif leading-tight">
            【2026年】黄金の輝きと加賀百万石の雅！金箔貼り体験＆金箔風呂が自慢の金沢温泉宿5選
          </h1>
          <p className="text-stone-300 text-sm md:text-base leading-relaxed">
            1万分の1ミリの薄さまで打ち延ばされた黄金の芸術・金沢箔。箸や小箱に金箔を施す伝統工芸体験、湯船に金箔がキラキラと舞う優美な金箔風呂、そして金箔をあしらった華やかな治部煮や加賀会席。百万石の贅と美意識に包まれる雅な金沢ステイ。
          </p>
          <div className="pt-2">
            <ShareButtons title="【2026年】黄金の輝きと加賀百万石の雅！金箔貼り体験＆金箔風呂が自慢の金沢温泉宿5選" url="https://croud-travel.pages.dev/traditional-gold-leaf-craft-kanazawa-stay" />
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
