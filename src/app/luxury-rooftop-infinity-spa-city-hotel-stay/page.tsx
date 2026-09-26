import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import SpecialCouponBanner from '@/app/components/SpecialCouponBanner';
import ShareButtons from '@/app/components/ShareButtons';

export const metadata: Metadata = {
  title: '【2026年】都会の摩天楼を見下ろすルーフトップ温泉＆夜景インフィニティスパホテル5選 ｜ 日本全国・旅宿クラウド',
  description: '2026年最新！東京・横浜・大阪・福岡など都心の最上階ルーフトップで夜景と天然温泉を楽しむ極上アーバンリゾートホテル5選。非日常のシティステイ。',
  keywords: ["ルーフトップ温泉","夜景ホテル","インフィニティスパ","シティリゾート","ご褒美ステイ","楽天トラベル"],
  alternates: {
    canonical: 'https://croud-travel.pages.dev/luxury-rooftop-infinity-spa-city-hotel-stay',
  },
  openGraph: {
    title: '【2026年】都会の摩天楼を見下ろすルーフトップ温泉＆夜景インフィニティスパホテル5選',
    description: '2026年最新！東京・横浜・大阪・福岡など都心の最上階ルーフトップで夜景と天然温泉を楽しむ極上アーバンリゾートホテル5選。非日常のシティステイ。',
    url: 'https://croud-travel.pages.dev/luxury-rooftop-infinity-spa-city-hotel-stay',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【2026年】都会の摩天楼を見下ろすルーフトップ温泉＆夜景インフィニティスパホテル5選",
    "description": "2026年最新！東京・横浜・大阪・福岡など都心の最上階ルーフトップで夜景と天然温泉を楽しむ極上アーバンリゾートホテル5選。非日常のシティステイ。",
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
    "mainEntityOfPage": "https://croud-travel.pages.dev/luxury-rooftop-infinity-spa-city-hotel-stay"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "ルーフトップ温泉＆夜景インフィニティスパホテルの旅行でおすすめの予約時期やタイミングは？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "人気の日程（連休や週末）は1〜2ヶ月前には満室になることが多いため、早期予約（早割プラン）の利用がおすすめです。また楽天トラベルの「5と0のつく日」キャンペーンを活用すると最大20%オフのクーポンが併用でき、最もお得に予約できます。"
        }
      },
      {
        "@type": "Question",
        "name": "ルーフトップ温泉＆夜景インフィニティスパホテルの宿選びで失敗しないためのポイントは？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "宿泊者レビューのお風呂・お食事・接客評価が4.3以上の宿を選ぶと満足度が非常に高くなります。またアクセス手段（送迎バスの有無など）やプランに含まれる特典を事前に確認しておくと安心です。"
        }
      }
    ]
  };

  const hotels: any[] = [
  {
    "hotelNo": 4730,
    "hotelName": "下呂温泉　湯あそびの宿　下呂観光ホテル本館",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D4730",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D4730%26f_flg%3DPLAN",
    "hotelMinCharge": 2750,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/4730/4730.jpg",
    "userReview": "大浴場と同じ階で移動が楽、母も大満足大浴場と部屋が同じ階にあるのが気に入り予約しました。足の弱った母親も移動が楽で2泊3日の間に5回も入浴出来ました。スタッフの対応も良かったです。クチコミ…　2026-09-17 20:18:49投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=4730\" class=\"3click\">つづきはこちら</a>",
    "reviewAverage": 4.44,
    "reviewCount": 1468,
    "address": "岐阜県下呂市萩原町西上田2148-1",
    "access": "【JR】高山線下呂駅から徒歩1５分【車】中央道中津川I.Cより車で50分",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F4730%2F4730.html"
  },
  {
    "hotelNo": 178447,
    "hotelName": "ＨＯＴＥＬ　ＳＡＮＳＵＩ　ＮＡＨＡ　琉球温泉　波之上の湯",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D178447",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D178447%26f_flg%3DPLAN",
    "hotelMinCharge": 3312,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/178447/178447.jpg",
    "userReview": "駐車場が満車、夜遅くまで騒がしく眠れずホテルの駐車場が止められない。5階だったがプールで遊ぶ声が23時までずっと響いて眠れなかた。クチコミの詳細はこちらから　https://review.tr…　2026-09-19 07:49:07投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=178447\" class=\"3click\">つづきはこちら</a>",
    "reviewAverage": 4.02,
    "reviewCount": 1208,
    "address": "沖縄県那覇市辻2-25-1",
    "access": "空港から車で約8分◆ホテルと那覇空港を結ぶシャトルバスも運行中◆崖の上の「縁結びパワースポット」波上宮まで【徒歩4分】",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F178447%2F178447.html"
  },
  {
    "hotelNo": 178590,
    "hotelName": "リブマックスリゾート宮浜温泉Ｏｃｅａｎ",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D178590",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D178590%26f_flg%3DPLAN",
    "hotelMinCharge": 12250,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/178590/178590.jpg",
    "userReview": "部屋は広々快適だが食事会場は混雑気味オーシャンスイートに泊まりました。部屋は広々しており居心地も良く設備等含め快適でした。食事はバイキング会場が狭く隣との間隔があまりないので、テーブルを仕切っ…　2026-09-19 15:26:12投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=178590\" class=\"3click\">つづきはこちら</a>",
    "reviewAverage": 4.21,
    "reviewCount": 911,
    "address": "広島県廿日市市宮浜温泉2-13-10",
    "access": "山陽本線 [大野浦駅]から車で5分・[玖波駅]から車で5分・[宮島口駅]から車で15分　岩国空港から車で30分",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F178590%2F178590.html"
  },
  {
    "hotelNo": 149298,
    "hotelName": "神戸みなと温泉　蓮",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D149298",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D149298%26f_flg%3DPLAN",
    "hotelMinCharge": 10230,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/149298/149298.jpg",
    "userReview": "料理が美味しく、部屋も広くて清潔料理内容がよく、部屋は広く清潔感あるクチコミの詳細はこちらから　https://review.travel.rakuten.co.jp/hotel/voice/…　2026-09-18 16:57:51投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=149298\" class=\"3click\">つづきはこちら</a>",
    "reviewAverage": 4.64,
    "reviewCount": 1206,
    "address": "兵庫県神戸市中央区新港町1-1",
    "access": "JR大阪駅より新快速で21分、各線三宮駅からシャトルバスで5分。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F149298%2F149298.html"
  },
  {
    "hotelNo": 177866,
    "hotelName": "アスティルホテル十三　プレシャス",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D177866",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D177866%26f_flg%3DPLAN",
    "hotelMinCharge": 3250,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/177866/177866.jpg",
    "userReview": "ロケーションも良く駐車場もあり設備もよく値段も安くまた使いたいです。クチコミの詳細はこちらから　https://review.travel.rakuten.co.jp/hotel/voice/17…　2026-09-18 15:39:19投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=177866\" class=\"3click\">つづきはこちら</a>",
    "reviewAverage": 4.5,
    "reviewCount": 1199,
    "address": "大阪府大阪市淀川区十三本町1-10-13",
    "access": "梅田から約5分、新大阪から約15分。阪急「十三駅」西口より徒歩約2分の好立地です。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F177866%2F177866.html"
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
          <span className="text-stone-800 font-semibold truncate">ルーフトップ温泉×夜景インフィニティ</span>
        </div>
      </div>

      {/* ヒーローヘッダー */}
      <header className="relative bg-emerald-950 text-white py-12 px-4 md:px-8 border-b border-emerald-900">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-800/80 text-emerald-200 text-xs font-bold rounded-full">
            <span>✨ 2026年最新版</span>
            <span>•</span>
            <span>ルーフトップ温泉×夜景インフィニティ</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight font-journal-serif leading-tight">
            【2026年】都会の摩天楼を見下ろすルーフトップ温泉＆夜景インフィニティスパホテル5選
          </h1>
          <p className="text-stone-300 text-sm md:text-base leading-relaxed">
            都会のきらめく夜景と満天の星を最上階から一望できるルーフトップ露天風呂＆インフィニティスパ。日々の忙しさを忘れ、都市のパノラマを眼下にぬるめの天然温泉に浮かぶ贅沢。洗練されたバーラウンジやエステも備えた大人の極上シティリゾートを厳選しました。
          </p>
          <div className="pt-2">
            <ShareButtons title="【2026年】都会の摩天楼を見下ろすルーフトップ温泉＆夜景インフィニティスパホテル5選" url="https://croud-travel.pages.dev/luxury-rooftop-infinity-spa-city-hotel-stay" />
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
