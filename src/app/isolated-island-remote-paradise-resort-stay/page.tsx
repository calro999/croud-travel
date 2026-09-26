import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import SpecialCouponBanner from '@/app/components/SpecialCouponBanner';
import ShareButtons from '@/app/components/ShareButtons';

export const metadata: Metadata = {
  title: '【2026年】青い海と島時間に包まれる！日本の秘境・離島リゾート＆隠れ家温泉宿5選 ｜ 日本全国・旅宿クラウド',
  description: '2026年最新！小豆島・屋久島・佐渡島・奄美大島など、豊かな自然と海に囲まれた離島の極上リゾート＆温泉宿5選。喧騒から離れた究極の島旅へ。',
  keywords: ["離島旅","島リゾート","小豆島","屋久島","ビーチホテル","楽天トラベル"],
  alternates: {
    canonical: 'https://croud-travel.pages.dev/isolated-island-remote-paradise-resort-stay',
  },
  openGraph: {
    title: '【2026年】青い海と島時間に包まれる！日本の秘境・離島リゾート＆隠れ家温泉宿5選',
    description: '2026年最新！小豆島・屋久島・佐渡島・奄美大島など、豊かな自然と海に囲まれた離島の極上リゾート＆温泉宿5選。喧騒から離れた究極の島旅へ。',
    url: 'https://croud-travel.pages.dev/isolated-island-remote-paradise-resort-stay',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【2026年】青い海と島時間に包まれる！日本の秘境・離島リゾート＆隠れ家温泉宿5選",
    "description": "2026年最新！小豆島・屋久島・佐渡島・奄美大島など、豊かな自然と海に囲まれた離島の極上リゾート＆温泉宿5選。喧騒から離れた究極の島旅へ。",
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
    "mainEntityOfPage": "https://croud-travel.pages.dev/isolated-island-remote-paradise-resort-stay"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "日本の離島リゾート＆隠れ家ビーチ温泉宿の旅行でおすすめの予約時期やタイミングは？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "人気の日程（連休や週末）は1〜2ヶ月前には満室になることが多いため、早期予約（早割プラン）の利用がおすすめです。また楽天トラベルの「5と0のつく日」キャンペーンを活用すると最大20%オフのクーポンが併用でき、最もお得に予約できます。"
        }
      },
      {
        "@type": "Question",
        "name": "日本の離島リゾート＆隠れ家ビーチ温泉宿の宿選びで失敗しないためのポイントは？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "宿泊者レビューのお風呂・お食事・接客評価が4.3以上の宿を選ぶと満足度が非常に高くなります。またアクセス手段（送迎バスの有無など）やプランに含まれる特典を事前に確認しておくと安心です。"
        }
      }
    ]
  };

  const hotels: any[] = [
  {
    "hotelNo": 145332,
    "hotelName": "伊計島温泉　AJリゾートアイランド伊計島",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D145332",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D145332%26f_flg%3DPLAN",
    "hotelMinCharge": 4300,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/145332/145332.jpg",
    "userReview": "オーシャンビューと朝食に感動、コスパ最高!沖縄旅行2日目に2名で宿泊しました。夜到着のため朝起きて窓からの素晴らしいオーシャンビューに大感動しました。夜、宿泊者用専用の卓球やダーツを楽しみまし…　2026-09-19 09:38:42投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=145332\" class=\"3click\">つづきはこちら</a>",
    "reviewAverage": 4.18,
    "reviewCount": 1188,
    "address": "沖縄県うるま市与那城伊計1286",
    "access": "那覇空港から沖縄自動車道利用で約９０分（沖縄北ＩＣより海中道路県道１０号経由約５０分）",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F145332%2F145332.html"
  },
  {
    "hotelNo": 44874,
    "hotelName": "ベイリゾートホテル小豆島",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D44874",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D44874%26f_flg%3DPLAN",
    "hotelMinCharge": 5500,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/44874/44874.jpg",
    "userReview": "プールや縁日、食事も充実した夏の思い出夏休みに利用しました。14時に手続きだけして子どもたちとプールへ。低学年と未就学児にはちょうどよいサイズで、監視員のお兄さん達も子どもたちと遊んでくださり、子…　2026-09-17 23:28:39投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=44874\" class=\"3click\">つづきはこちら</a>",
    "reviewAverage": 4.27,
    "reviewCount": 1939,
    "address": "香川県小豆郡小豆島町古江乙16-3",
    "access": "（車）坂手港3分/福田港30分/土庄港30分/草壁港10分/池田港20分★大部港以外の無料送迎有（2日前までに予約要）",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F44874%2F44874.html"
  },
  {
    "hotelNo": 54209,
    "hotelName": "熱海温泉　ホテル大野屋（伊東園ホテルズ）",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D54209",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D54209%26f_flg%3DPLAN",
    "hotelMinCharge": 7898,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/54209/54209.jpg",
    "userReview": "リピーターです麻雀が好きで4人で何度も利用してます。麻雀好きな方は2泊がオススメ、初日は13:00より0:00まで可、2日目も朝食後一日中0:00まで可 3日目も朝食後11:00まで可、麻雀の合間…　2026-09-19 19:38:46投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=54209\" class=\"3click\">つづきはこちら</a>",
    "reviewAverage": 3.92,
    "reviewCount": 2197,
    "address": "静岡県熱海市和田浜南町3-9",
    "access": "熱海駅より路線バス（乗り場７）にて��「マリンスパあたみ」下車　／　車で「長泉IC」から伊豆縦貫・函熱道路で６０分",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F54209%2F54209.html"
  },
  {
    "hotelNo": 75267,
    "hotelName": "熱海温泉　ウオミサキホテル（伊東園ホテルズ）",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D75267",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D75267%26f_flg%3DPLAN",
    "hotelMinCharge": 5698,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/75267/75267.jpg",
    "userReview": "眺望と露天風呂が最高、コスパも良く満足2食付きのプランで宿泊しました。3階の客室でしたが眺望も素晴らしく、この価格を考えるとコストパフォーマンスも良く、全体的に満足できました。そのうえで、…　2026-09-19 21:18:42投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=75267\" class=\"3click\">つづきはこちら</a>",
    "reviewAverage": 3.72,
    "reviewCount": 974,
    "address": "静岡県熱海市和田浜南町7-2",
    "access": "ＪＲ東海道新幹線　熱海駅よりバスに乗車、マリンスパあたみ下車で徒歩1分",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F75267%2F75267.html"
  },
  {
    "hotelNo": 44112,
    "hotelName": "熱海温泉　アタミシーズンホテル（伊東園ホテルズ）",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D44112",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D44112%26f_flg%3DPLAN",
    "hotelMinCharge": 10098,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/44112/44112.jpg",
    "userReview": "料理は期待外れで部屋の清掃も不十分ミニ懐石を期待していましたが美味しい料理が何一つ無かったです。部屋もホコリだらけ、特に窓やドアのガラスはとても清掃しているとは思えない程汚いです。伊東園の…　2026-09-19 16:39:02投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=44112\" class=\"3click\">つづきはこちら</a>",
    "reviewAverage": 3.89,
    "reviewCount": 806,
    "address": "静岡県熱海市咲見町6-1",
    "access": "JR  熱海駅より車で５分、徒歩１０分",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F44112%2F44112.html"
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
          <span className="text-stone-800 font-semibold truncate">離島リゾート×秘境島温泉</span>
        </div>
      </div>

      {/* ヒーローヘッダー */}
      <header className="relative bg-emerald-950 text-white py-12 px-4 md:px-8 border-b border-emerald-900">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-800/80 text-emerald-200 text-xs font-bold rounded-full">
            <span>✨ 2026年最新版</span>
            <span>•</span>
            <span>離島リゾート×秘境島温泉</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight font-journal-serif leading-tight">
            【2026年】青い海と島時間に包まれる！日本の秘境・離島リゾート＆隠れ家温泉宿5選
          </h1>
          <p className="text-stone-300 text-sm md:text-base leading-relaxed">
            船や飛行機で渡る非日常の島旅。どこまでも透明な青い海、島風がそよぐパームツリー、採れたての新鮮な島魚や郷土料理、そして波の音だけが響く露天風呂。手つかずの大自然と温かな島時間に包まれる贅沢な離島ステイをご紹介します。
          </p>
          <div className="pt-2">
            <ShareButtons title="【2026年】青い海と島時間に包まれる！日本の秘境・離島リゾート＆隠れ家温泉宿5選" url="https://croud-travel.pages.dev/isolated-island-remote-paradise-resort-stay" />
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
