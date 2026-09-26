import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import SpecialCouponBanner from '@/app/components/SpecialCouponBanner';
import ShareButtons from '@/app/components/ShareButtons';

export const metadata: Metadata = {
  title: '【2026年】透明な水面を滑るレイクカヌー＆SUP！神秘の湖畔パノラマ温泉リゾート5選 ｜ 日本全国・旅宿クラウド',
  description: '2026年最新！支笏湖・中禅寺湖・本栖湖など、鏡のような美しい湖でカヌーやSUPを楽しみ、湖畔を望む展望温泉で寛げるレイクサイドアクティブ宿5選。',
  keywords: ["カヌー体験","SUP","レイクサイドリゾート","湖畔温泉","アウトドア","楽天トラベル"],
  alternates: {
    canonical: 'https://croud-travel.pages.dev/super-panoramic-lake-canoe-kayak-resort-stay',
  },
  openGraph: {
    title: '【2026年】透明な水面を滑るレイクカヌー＆SUP！神秘の湖畔パノラマ温泉リゾート5選',
    description: '2026年最新！支笏湖・中禅寺湖・本栖湖など、鏡のような美しい湖でカヌーやSUPを楽しみ、湖畔を望む展望温泉で寛げるレイクサイドアクティブ宿5選。',
    url: 'https://croud-travel.pages.dev/super-panoramic-lake-canoe-kayak-resort-stay',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【2026年】透明な水面を滑るレイクカヌー＆SUP！神秘の湖畔パノラマ温泉リゾート5選",
    "description": "2026年最新！支笏湖・中禅寺湖・本栖湖など、鏡のような美しい湖でカヌーやSUPを楽しみ、湖畔を望む展望温泉で寛げるレイクサイドアクティブ宿5選。",
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
    "mainEntityOfPage": "https://croud-travel.pages.dev/super-panoramic-lake-canoe-kayak-resort-stay"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "湖畔カヌー・SUP＆レイクビュー温泉リゾートの旅行でおすすめの予約時期やタイミングは？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "人気の日程（連休や週末）は1〜2ヶ月前には満室になることが多いため、早期予約（早割プラン）の利用がおすすめです。また楽天トラベルの「5と0のつく日」キャンペーンを活用すると最大20%オフのクーポンが併用でき、最もお得に予約できます。"
        }
      },
      {
        "@type": "Question",
        "name": "湖畔カヌー・SUP＆レイクビュー温泉リゾートの宿選びで失敗しないためのポイントは？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "宿泊者レビューのお風呂・お食事・接客評価が4.3以上の宿を選ぶと満足度が非常に高くなります。またアクセス手段（送迎バスの有無など）やプランに含まれる特典を事前に確認しておくと安心です。"
        }
      }
    ]
  };

  const hotels: any[] = [
  {
    "hotelNo": 4869,
    "hotelName": "河口湖温泉　足和田ホテル",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D4869",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D4869%26f_flg%3DPLAN",
    "hotelMinCharge": 7425,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/4869/4869.jpg",
    "userReview": "クチコミの詳細はこちらから　https://review.travel.rakuten.co.jp/hotel/voice/4869?reviewId=33123479365627　2026-09-13 12:10:47投稿",
    "reviewAverage": 4.34,
    "reviewCount": 939,
    "address": "山梨県南都留郡富士河口湖町長浜395",
    "access": "【電車】富士急行線河口湖駅より車で約10分【車】河口湖ICより約3キロ・約15分。勝山から湖畔道路を大石方面へ湖畔沿いへ",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F4869%2F4869.html"
  },
  {
    "hotelNo": 10731,
    "hotelName": "河口湖温泉　ホテル湖龍",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D10731",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D10731%26f_flg%3DPLAN",
    "hotelMinCharge": 10197,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/10731/10731.jpg",
    "userReview": "スタッフの対応も食事も素晴らしく大満足9/8連泊させて頂きました。温かく迎えてもらいチェックイン時のサァビスも大変良かった。スタッフの対応も大変良かった。食事も大変美味しくいただきました。部屋も大…　2026-09-11 13:30:02投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=10731\" class=\"3click\">つづきはこちら</a>",
    "reviewAverage": 4.31,
    "reviewCount": 378,
    "address": "山梨県南都留郡富士河口湖町浅川630-1",
    "access": "中央線「大月駅」乗換、富士急行線終点「河口湖駅」よりお車・バスにて5分。中央高速河口湖IC��り10分。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F10731%2F10731.html"
  },
  {
    "hotelNo": 41095,
    "hotelName": "富士河口湖温泉　河口湖パークホテル",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D41095",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D41095%26f_flg%3DPLAN",
    "hotelMinCharge": 8500,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/41095/41095.jpg",
    "userReview": "ホスピタリティとドリンクに大満足まずホスピタリティが素晴らしい細やかな付属設備がいいですドリンク類が文句なしありがとうございましたクチコミの詳細はこちらから　https://rev…　2026-09-08 13:27:15投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=41095\" class=\"3click\">つづきはこちら</a>",
    "reviewAverage": 4.28,
    "reviewCount": 264,
    "address": "山梨県南都留郡富士河口湖町船津6713-6",
    "access": "富士急行線　河口湖駅から徒歩17分（無料送迎あり）／中央道 河口湖ＩＣより約１０分",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F41095%2F41095.html"
  },
  {
    "hotelNo": 14467,
    "hotelName": "洞爺湖温泉　ホテルグランド　トーヤ",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D14467",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D14467%26f_flg%3DPLAN",
    "hotelMinCharge": 5500,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/14467/14467.jpg",
    "userReview": "トイレの入り口に段差があり中も狭いトイレ入り口の段差があり入りづらく、中が狭かった。クチコミの詳細はこちらから　https://review.travel.rakuten.co.jp/hote…　2026-09-19 18:11:40投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=14467\" class=\"3click\">つづきはこちら</a>",
    "reviewAverage": 4.12,
    "reviewCount": 490,
    "address": "北海道虻田郡洞爺湖町洞爺湖温泉 144",
    "access": "ＪＲ室蘭本線洞爺駅より車で約15分／道央道虻田洞爺湖ＩＣより20分",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F14467%2F14467.html"
  },
  {
    "hotelNo": 18658,
    "hotelName": "山中湖旭日丘温泉　ホテル清渓",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D18658",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D18658%26f_flg%3DPLAN",
    "hotelMinCharge": 6750,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/18658/18658.jpg",
    "userReview": "スタッフの親切な対応と充実した共有施設チェックインの際からスタッフの方が親切でした^ ^卓球台やウォーターサーバも共有施設にあり、良かったです。クチコミの詳細はこちらから　https://re…　2026-09-14 12:08:35投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=18658\" class=\"3click\">つづきはこちら</a>",
    "reviewAverage": 3.86,
    "reviewCount": 524,
    "address": "山梨県南都留郡山中湖村平野506-296",
    "access": "中央高速バス 山中湖旭日丘より徒歩約15分 ／ 東富士五湖道路山中湖ＩＣを出て国道138号線を旭日丘方面乗用車約5分",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F18658%2F18658.html"
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
          <span className="text-stone-800 font-semibold truncate">湖畔カヌー×レイクビュー温泉</span>
        </div>
      </div>

      {/* ヒーローヘッダー */}
      <header className="relative bg-emerald-950 text-white py-12 px-4 md:px-8 border-b border-emerald-900">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-800/80 text-emerald-200 text-xs font-bold rounded-full">
            <span>✨ 2026年最新版</span>
            <span>•</span>
            <span>湖畔カヌー×レイクビュー温泉</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight font-journal-serif leading-tight">
            【2026年】透明な水面を滑るレイクカヌー＆SUP！神秘の湖畔パノラマ温泉リゾート5選
          </h1>
          <p className="text-stone-300 text-sm md:text-base leading-relaxed">
            朝霧立ち込める静寂の湖に漕ぎ出すカヌーの旅。水底まで透き通るクリスタルブルーの水面、水鳥の羽音、周囲の山々が織りなすパノラマビュー。心地よい疲労感をレイクサイドの展望露天風呂で癒やす、自然と一体になる休日。
          </p>
          <div className="pt-2">
            <ShareButtons title="【2026年】透明な水面を滑るレイクカヌー＆SUP！神秘の湖畔パノラマ温泉リゾート5選" url="https://croud-travel.pages.dev/super-panoramic-lake-canoe-kayak-resort-stay" />
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
