import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import SpecialCouponBanner from '@/app/components/SpecialCouponBanner';
import ShareButtons from '@/app/components/ShareButtons';

export const metadata: Metadata = {
  title: '【2026年】ゲレンデ直結スキーイン・スキーアウト！極上パウダースノーと展望温泉リゾート5選 ｜ 日本全国・旅宿クラウド',
  description: '2026年最新！ニセコ・白馬・志賀高原など、ホテルから直接ゲレンデへ滑り出せるスキーイン・スキーアウト対応のラグジュアリー温泉ホテル5選。',
  keywords: ["スキーインスキーアウト","ゲレンデ直結","パウダースノー","スノーリゾート","冬旅温泉","楽天トラベル"],
  alternates: {
    canonical: 'https://croud-travel.pages.dev/ski-in-ski-out-powder-snow-luxury-resort',
  },
  openGraph: {
    title: '【2026年】ゲレンデ直結スキーイン・スキーアウト！極上パウダースノーと展望温泉リゾート5選',
    description: '2026年最新！ニセコ・白馬・志賀高原など、ホテルから直接ゲレンデへ滑り出せるスキーイン・スキーアウト対応のラグジュアリー温泉ホテル5選。',
    url: 'https://croud-travel.pages.dev/ski-in-ski-out-powder-snow-luxury-resort',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【2026年】ゲレンデ直結スキーイン・スキーアウト！極上パウダースノーと展望温泉リゾート5選",
    "description": "2026年最新！ニセコ・白馬・志賀高原など、ホテルから直接ゲレンデへ滑り出せるスキーイン・スキーアウト対応のラグジュアリー温泉ホテル5選。",
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
    "mainEntityOfPage": "https://croud-travel.pages.dev/ski-in-ski-out-powder-snow-luxury-resort"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "ゲレンデ直結スキーイン・スキーアウト温泉宿の旅行でおすすめの予約時期やタイミングは？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "人気の日程（連休や週末）は1〜2ヶ月前には満室になることが多いため、早期予約（早割プラン）の利用がおすすめです。また楽天トラベルの「5と0のつく日」キャンペーンを活用すると最大20%オフのクーポンが併用でき、最もお得に予約できます。"
        }
      },
      {
        "@type": "Question",
        "name": "ゲレンデ直結スキーイン・スキーアウト温泉宿の宿選びで失敗しないためのポイントは？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "宿泊者レビューのお風呂・お食事・接客評価が4.3以上の宿を選ぶと満足度が非常に高くなります。またアクセス手段（送迎バスの有無など）やプランに含まれる特典を事前に確認しておくと安心です。"
        }
      }
    ]
  };

  const hotels: any[] = [
  {
    "hotelNo": 6011,
    "hotelName": "越後湯沢温泉　ＮＡＳＰＡニューオータニ",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D6011",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D6011%26f_flg%3DPLAN",
    "hotelMinCharge": 6800,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/6011/6011.jpg",
    "userReview": "部屋もお風呂も快適、鏡が多く女性に嬉しい部屋もお風呂も良かった部屋に鏡が多く、女性は嬉しいと思うクチコミの詳細はこちらから　https://review.travel.rakuten.co…　2026-09-18 18:42:12投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=6011\" class=\"3click\">つづきはこちら</a>",
    "reviewAverage": 4.43,
    "reviewCount": 2152,
    "address": "新潟県南魚沼郡湯沢町湯沢2117-9",
    "access": "ＪＲ上越新幹線越後湯沢駅から車で3分（送迎バスあり／定時運行）、関越自動車道湯沢Ｉ．Ｃより５分",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F6011%2F6011.html"
  },
  {
    "hotelNo": 5121,
    "hotelName": "ホテルアルペンブリック",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D5121",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D5121%26f_flg%3DPLAN",
    "hotelMinCharge": 8500,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/5121/5121.jpg",
    "userReview": "清潔な部屋と美味しい食事、備品も充実お部屋も清潔で、バイキングの夕食、朝食共にとても美味しかった!お風呂のシャワーやドライヤーも、リファのシリーズで嬉しかった。有料ではありません。使い放題。シャン…　2026-08-23 23:24:08投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=5121\" class=\"3click\">つづきはこちら</a>",
    "reviewAverage": 4,
    "reviewCount": 720,
    "address": "新潟県妙高市関川2452",
    "access": "北しなの線　妙高高原駅より車で10分／上信越道 妙高高原ＩＣ～国道１８号線を通過、直進後突き当りを左折し、2.5キロ先",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F5121%2F5121.html"
  },
  {
    "hotelNo": 14585,
    "hotelName": "蔵王温泉　ＪＵＲＩＮ",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D14585",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D14585%26f_flg%3DPLAN",
    "hotelMinCharge": 12100,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/14585/14585.jpg",
    "userReview": "温泉と食事に大満足、また行きたい!温泉は言わずもがな、最高でしたさすが蔵王温泉です、4回くらい入りました夕飯の芋煮、朝飯の豚汁どちらも具がたくさんでとてもとても美味しかったです夕飯時ア…　2026-09-19 15:21:10投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=14585\" class=\"3click\">つづきはこちら</a>",
    "reviewAverage": 4.28,
    "reviewCount": 814,
    "address": "山形県山形市蔵王温泉814",
    "access": "山形自動車道『山形蔵王IC』で下り、西蔵王高原ライン経由約30分／『山形駅』『上山駅』",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F14585%2F14585.html"
  },
  {
    "hotelNo": 181791,
    "hotelName": "ＷＨＩＴＥ　ＨＯＴＥＬ　ＧＲＡＮＤ　ＨＡＫＵＢＡ",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D181791",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D181791%26f_flg%3DPLAN",
    "hotelMinCharge": 9600,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/181791/181791.jpg",
    "userReview": "絶景のロケーションとおもてなしに心から癒やされました。",
    "reviewAverage": 4.4,
    "reviewCount": 12,
    "address": "長野県大町市平23370",
    "access": "JR大糸線簗場（やなば）駅より送迎１０分／長野自動車道｜安曇野ＩＣ・上信越自動車道｜長野ＩＣより約６０分",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F181791%2F181791.html"
  },
  {
    "hotelNo": 25143,
    "hotelName": "郡上ヴァカンス村ホテル",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D25143",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D25143%26f_flg%3DPLAN",
    "hotelMinCharge": 2160,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/25143/25143.jpg",
    "userReview": "食事も美味しく、スタッフの対応も親切ご飯が美味しかったです。子ども達の対応にも、店員さんが皆親切にしてくださいました。団体さんがおられました。迷路は大人でも難しく、良い運動になります。ありがとうご…　2026-09-08 10:26:07投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=25143\" class=\"3click\">つづきはこちら</a>",
    "reviewAverage": 3.95,
    "reviewCount": 283,
    "address": "岐阜県郡上市高鷲町鷲見2363-395",
    "access": "長良川鉄道「美濃白鳥駅」より車で約30分／東海北陸自動車道「ひるがの高原SAスマートＩＣ」より６Ｋｍ（約７分）",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F25143%2F25143.html"
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
          <span className="text-stone-800 font-semibold truncate">ゲレンデ直結×パウダースノー温泉</span>
        </div>
      </div>

      {/* ヒーローヘッダー */}
      <header className="relative bg-emerald-950 text-white py-12 px-4 md:px-8 border-b border-emerald-900">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-800/80 text-emerald-200 text-xs font-bold rounded-full">
            <span>✨ 2026年最新版</span>
            <span>•</span>
            <span>ゲレンデ直結×パウダースノー温泉</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight font-journal-serif leading-tight">
            【2026年】ゲレンデ直結スキーイン・スキーアウト！極上パウダースノーと展望温泉リゾート5選
          </h1>
          <p className="text-stone-300 text-sm md:text-base leading-relaxed">
            ホテルのスキーロッカーから一歩出ればそこは白銀のパウダースノーゲレンデ。世界中のスキーヤー・スノーボーダーが憧れるJAPOW（極上雪質）を一日中滑り倒し、滑り終えたらそのまま展望温泉露天風呂へ直行できる至高のスノーリゾート。
          </p>
          <div className="pt-2">
            <ShareButtons title="【2026年】ゲレンデ直結スキーイン・スキーアウト！極上パウダースノーと展望温泉リゾート5選" url="https://croud-travel.pages.dev/ski-in-ski-out-powder-snow-luxury-resort" />
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
