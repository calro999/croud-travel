import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import SpecialCouponBanner from '@/app/components/SpecialCouponBanner';
import ShareButtons from '@/app/components/ShareButtons';

export const metadata: Metadata = {
  title: '海を望む絶景オーシャンビュー＆獲れたて海鮮浜焼き・磯料理が自慢の温泉宿 ｜ 日本全国・旅宿クラウド',
  description: '2026年最新！目の前に広がる絶景オーシャンビューと、新鮮なサザエやホタテ、伊勢海老を豪快に焼く海鮮浜焼き・舟盛りが自慢の厳選温泉宿。海の恵みと波音に癒やされる旅へ。',
  keywords: ["海鮮浜焼き","オーシャンビュー","温泉旅行","楽天トラベル","磯料理"],
  alternates: {
    canonical: 'https://croud-travel.pages.dev/ocean-view-seafood-bbq-hamayaki-onsen-stay',
  },
  openGraph: {
    title: '海を望む絶景オーシャンビュー＆獲れたて海鮮浜焼き・磯料理が自慢の温泉宿',
    description: '2026年最新！目の前に広がる絶景オーシャンビューと、新鮮なサザエやホタテ、伊勢海老を豪快に焼く海鮮浜焼き・舟盛りが自慢の厳選温泉宿。海の恵みと波音に癒やされる旅へ。',
    url: 'https://croud-travel.pages.dev/ocean-view-seafood-bbq-hamayaki-onsen-stay',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "海を望む絶景オーシャンビュー＆獲れたて海鮮浜焼き・磯料理が自慢の温泉宿",
    "description": "2026年最新！目の前に広がる絶景オーシャンビューと、新鮮なサザエやホタテ、伊勢海老を豪快に焼く海鮮浜焼き・舟盛りが自慢の厳選温泉宿。海の恵みと波音に癒やされる旅へ。",
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
    "mainEntityOfPage": "https://croud-travel.pages.dev/ocean-view-seafood-bbq-hamayaki-onsen-stay"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "絶景オーシャンビュー＆海鮮浜焼き温泉宿の旅行でおすすめの予約時期やタイミングは？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "人気の日程（連休や週末）は1〜2ヶ月前には満室になることが多いため、早期予約（早割プラン）の利用がおすすめです。また楽天トラベルの「5と0のつく日」キャンペーンを活用すると最大20%オフのクーポンが併用でき、最もお得に予約できます。"
        }
      },
      {
        "@type": "Question",
        "name": "絶景オーシャンビュー＆海鮮浜焼き温泉宿の宿選びで失敗しないためのポイントは？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "宿泊者レビューのお風呂・お食事・接客評価が4.3以上の宿を選ぶと満足度が非常に高くなります。またアクセス手段（送迎バスの有無など）やプランに含まれる特典を事前に確認しておくと安心です。"
        }
      }
    ]
  };

  const hotels: any[] = [
  {
    "hotelNo": 73924,
    "hotelName": "熱海温泉　海辺の宿　長濱苑",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D73924",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D73924%26f_flg%3DPLAN",
    "hotelMinCharge": 8800,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/73924/73924.jpg",
    "userReview": "料理と温泉を満喫、砂浜での花火も最高の思い出料理も美味しく、温泉もたくさんあって良かった色んな旅館が協力して、砂浜で家族で花火も出来たのも思い出になったクチコミの詳細はこちらから　http…　2026-09-04 21:57:41投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=73924\" class=\"3click\">つづきはこちら</a>",
    "reviewAverage": 4.44,
    "reviewCount": 564,
    "address": "静岡県熱海市下多賀1484-19",
    "access": "■ＪＲ伊東線　伊豆多賀駅より＜徒歩5分＞急坂あり　■熱海駅～バス２５分　バス停「長浜」目の前",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F73924%2F73924.html"
  },
  {
    "hotelNo": 53414,
    "hotelName": "湯野浜温泉　竹屋ホテル（鶴岡・酒田）",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D53414",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D53414%26f_flg%3DPLAN",
    "hotelMinCharge": 8800,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/53414/53414.jpg",
    "userReview": "兜揚げが絶品、日没の景色も最高でした以前家族と旅行に来て良い記憶がありました。今回はパートナーと利用。兜揚げは過去1おいしくて感動しました。手は確実に汚れますね(^^)/女将さんの対応が少…　2026-08-26 23:30:52投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=53414\" class=\"3click\">つづきはこちら</a>",
    "reviewAverage": 3.75,
    "reviewCount": 476,
    "address": "山形県鶴岡市湯野浜温泉1-9-25",
    "access": "ＪＲ　鶴岡駅から湯の浜温泉まで車で２０分、バスで３５分",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F53414%2F53414.html"
  },
  {
    "hotelNo": 38764,
    "hotelName": "越後湯沢温泉　湯沢グランドホテル＜新潟県＞",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D38764",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D38764%26f_flg%3DPLAN",
    "hotelMinCharge": 9680,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/38764/38764.jpg",
    "userReview": "クチコミの詳細はこちらから　https://review.travel.rakuten.co.jp/hotel/voice/38764?reviewId=33123479438468　2026-09-19 12:24:01投稿",
    "reviewAverage": 4.53,
    "reviewCount": 2470,
    "address": "新潟県南魚沼郡湯沢町大字湯沢2494",
    "access": "駅から徒歩3分＆湯沢ＩＣから5分！入口はセブンイレブンが目印！※ホテル前の坂道は急なので遠慮なく送迎をご依頼ください。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F38764%2F38764.html"
  },
  {
    "hotelNo": 140798,
    "hotelName": "内海温泉　いち豆",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D140798",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D140798%26f_flg%3DPLAN",
    "hotelMinCharge": 7700,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/140798/140798.jpg",
    "userReview": "スタッフの気遣いと食事が良く、子連れに最適小学生の子どもと一緒に海水浴でお世話になりました。宿は築年数なりに古さはあるものの、スタッフさんのお気遣いなどもあり快適に過ごす事ができました。ご飯も…　2026-08-16 02:38:23投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=140798\" class=\"3click\">つづきはこちら</a>",
    "reviewAverage": 3.87,
    "reviewCount": 476,
    "address": "愛知県知多郡南知多町内海新田48",
    "access": "■□名鉄内海駅より徒歩約１５分内海海水浴場の目の前■□選べる色浴衣や内海温泉の貸切露天風呂が無料■□",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F140798%2F140798.html"
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
          <span className="text-stone-800 font-semibold truncate">海鮮浜焼き×絶景オーシャンビュー</span>
        </div>
      </div>

      {/* ヒーローヘッダー */}
      <header className="relative bg-emerald-950 text-white py-12 px-4 md:px-8 border-b border-emerald-900">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-800/80 text-emerald-200 text-xs font-bold rounded-full">
            <span>✨ 2026年最新版</span>
            <span>•</span>
            <span>海鮮浜焼き×絶景オーシャンビュー</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight font-journal-serif leading-tight">
            海を望む絶景オーシャンビュー＆獲れたて海鮮浜焼き・磯料理が自慢の温泉宿
          </h1>
          <p className="text-stone-300 text-sm md:text-base leading-relaxed">
            どこまでも続く青い海と水平線を眺めながら、旬のサザエやホタテ、伊勢海老を目の前で香ばしく焼き上げる浜焼きバイキング＆舟盛り磯会席。波音をBGMに湯浴みを楽しむ至福のオーシャンフロント温泉宿を厳選しました。
          </p>
          <div className="pt-2">
            <ShareButtons title="海を望む絶景オーシャンビュー＆獲れたて海鮮浜焼き・磯料理が自慢の温泉宿" url="https://croud-travel.pages.dev/ocean-view-seafood-bbq-hamayaki-onsen-stay" />
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
