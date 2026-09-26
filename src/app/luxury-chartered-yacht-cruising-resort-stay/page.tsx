import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import SpecialCouponBanner from '@/app/components/SpecialCouponBanner';
import ShareButtons from '@/app/components/ShareButtons';

export const metadata: Metadata = {
  title: '【2026年】プライベートクルーズ＆ヨットハーバー！海から絶景を望む極上マリーナリゾート5選 ｜ 日本全国・旅宿クラウド',
  description: '2026年最新！専用クルーザーでのサンセットクルージングやマリーナ直結のオーシャンビュー客室と天然温泉を楽しめるラグジュアリーホテル5選。',
  keywords: ["クルージング","マリーナホテル","ヨットハーバー","オーシャンビュー","記念日旅行","楽天トラベル"],
  alternates: {
    canonical: 'https://croud-travel.pages.dev/luxury-chartered-yacht-cruising-resort-stay',
  },
  openGraph: {
    title: '【2026年】プライベートクルーズ＆ヨットハーバー！海から絶景を望む極上マリーナリゾート5選',
    description: '2026年最新！専用クルーザーでのサンセットクルージングやマリーナ直結のオーシャンビュー客室と天然温泉を楽しめるラグジュアリーホテル5選。',
    url: 'https://croud-travel.pages.dev/luxury-chartered-yacht-cruising-resort-stay',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【2026年】プライベートクルーズ＆ヨットハーバー！海から絶景を望む極上マリーナリゾート5選",
    "description": "2026年最新！専用クルーザーでのサンセットクルージングやマリーナ直結のオーシャンビュー客室と天然温泉を楽しめるラグジュアリーホテル5選。",
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
    "mainEntityOfPage": "https://croud-travel.pages.dev/luxury-chartered-yacht-cruising-resort-stay"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "プライベートクルーズ＆マリーナリゾートホテルの旅行でおすすめの予約時期やタイミングは？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "人気の日程（連休や週末）は1〜2ヶ月前には満室になることが多いため、早期予約（早割プラン）の利用がおすすめです。また楽天トラベルの「5と0のつく日」キャンペーンを活用すると最大20%オフのクーポンが併用でき、最もお得に予約できます。"
        }
      },
      {
        "@type": "Question",
        "name": "プライベートクルーズ＆マリーナリゾートホテルの宿選びで失敗しないためのポイントは？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "宿泊者レビューのお風呂・お食事・接客評価が4.3以上の宿を選ぶと満足度が非常に高くなります。またアクセス手段（送迎バスの有無など）やプランに含まれる特典を事前に確認しておくと安心です。"
        }
      }
    ]
  };

  const hotels: any[] = [
  {
    "hotelNo": 108118,
    "hotelName": "洲本温泉　海のホテル　島花　＜淡路島＞",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D108118",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D108118%26f_flg%3DPLAN",
    "hotelMinCharge": 9900,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/108118/108118.jpg",
    "userReview": "何度泊まっても最高、本当におすすめ!もう何回目かわからないくらい泊まってます!最高の一言に尽きます。全てが素晴らしい本当におすすめです。他の画像やクチコミの詳細はこちらから　https…　2026-09-15 12:10:47投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=108118\" class=\"3click\">つづきはこちら</a>",
    "reviewAverage": 4.46,
    "reviewCount": 1208,
    "address": "兵庫県洲本市小路谷1277-5",
    "access": "車：洲本ICから18分／高速バス：大阪120分・三宮80分で洲本BCへ",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F108118%2F108118.html"
  },
  {
    "hotelNo": 183875,
    "hotelName": "朝里川温泉ホテル",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D183875",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D183875%26f_flg%3DPLAN",
    "hotelMinCharge": 4850,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/183875/183875.jpg",
    "userReview": "温泉に浸かって良い一日を過ごせた久々にゆったりと温泉に浸かり、のんびりした気持ちになり、とても良い一日を過ごせました。クチコミの詳細はこちらから　https://review.travel.r…　2026-09-15 13:16:26投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=183875\" class=\"3click\">つづきはこちら</a>",
    "reviewAverage": 4.01,
    "reviewCount": 170,
    "address": "北海道小樽市朝里川温泉2-670",
    "access": "小樽築港駅より路線バスで20分。お車にて約15分。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F183875%2F183875.html"
  },
  {
    "hotelNo": 54978,
    "hotelName": "日光中禅寺湖温泉　ホテル花庵",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D54978",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D54978%26f_flg%3DPLAN",
    "hotelMinCharge": 15500,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/54978/54978.jpg",
    "userReview": "中禅寺湖の絶景と2種類の温泉に癒される中禅寺湖の眼の前で、眺めが最高!朝起きたら朝日が湖に、光って癒されました。温泉も硫黄泉と肌によい弱アルカリ泉と、2種類あり、ゆったりできました。地元の野菜のせ…　2026-09-12 17:19:44投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=54978\" class=\"3click\">つづきはこちら</a>",
    "reviewAverage": 4.64,
    "reviewCount": 1291,
    "address": "栃木県日光市中宮祠2480",
    "access": "ＪＲ日光駅又は東武日光駅より中禅寺温泉方面行きバス「中禅寺温泉バス停」下車。バス停より徒歩5分。日光東照宮より車で25分",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F54978%2F54978.html"
  },
  {
    "hotelNo": 17916,
    "hotelName": "天然温泉”たまゆらの湯”　宮崎観光ホテル",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D17916",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D17916%26f_flg%3DPLAN",
    "hotelMinCharge": 5500,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/17916/17916.jpg",
    "userReview": "朝食の種類が豊富で、部屋もゆったり快適夜は、有名店のチキン南蛮を食べたかったので、朝食付きのプランにしました。ツインのお部屋は、ゆったりした広さで良かったです部屋の鍵が2つ、又…　2026-09-19 14:11:41投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=17916\" class=\"3click\">つづきはこちら</a>",
    "reviewAverage": 4.17,
    "reviewCount": 2657,
    "address": "宮崎県宮崎市松山1-1-1",
    "access": "JR宮崎駅よりタクシーで約5分　宮崎空港より車で約15分　橘通1丁目バス停より徒歩約10分",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F17916%2F17916.html"
  },
  {
    "hotelNo": 187181,
    "hotelName": "庄川温泉郷　美肌の湯　となみ野庄川荘一萬亭（ＢＢＨホテルグループ）",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D187181",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D187181%26f_flg%3DPLAN",
    "hotelMinCharge": 6500,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/187181/187181.jpg",
    "userReview": "6回目の利用、サウナ後のビールと食事が最高今回6回目の利用です、相変わらず居心地が良くてスタッフも親切 風呂の脱衣所のロッカーも新しいのが納入されていて良かった(前回は鍵の無いロッカーが多くて難儀…　2026-09-18 16:26:37投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=187181\" class=\"3click\">つづきはこちら</a>",
    "reviewAverage": 4.09,
    "reviewCount": 151,
    "address": "富山県砺波市庄川町庄4984-1",
    "access": "JR城端線砺波駅南口より車で15分",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F187181%2F187181.html"
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
          <span className="text-stone-800 font-semibold truncate">プライベートクルーズ×マリーナリゾート</span>
        </div>
      </div>

      {/* ヒーローヘッダー */}
      <header className="relative bg-emerald-950 text-white py-12 px-4 md:px-8 border-b border-emerald-900">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-800/80 text-emerald-200 text-xs font-bold rounded-full">
            <span>✨ 2026年最新版</span>
            <span>•</span>
            <span>プライベートクルーズ×マリーナリゾート</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight font-journal-serif leading-tight">
            【2026年】プライベートクルーズ＆ヨットハーバー！海から絶景を望む極上マリーナリゾート5選
          </h1>
          <p className="text-stone-300 text-sm md:text-base leading-relaxed">
            青く輝く海をプライベートクルーザーで巡る爽快なサンセットクルーズ。マリーナに面した開放的なテラス、波音を聞きながら浸かる天然温泉露天風呂、そして新鮮な海の幸を味わう極上ディナー。海を愛する大人のための贅沢なマリンリゾートをご案内します。
          </p>
          <div className="pt-2">
            <ShareButtons title="【2026年】プライベートクルーズ＆ヨットハーバー！海から絶景を望む極上マリーナリゾート5選" url="https://croud-travel.pages.dev/luxury-chartered-yacht-cruising-resort-stay" />
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
