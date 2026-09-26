import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import SpecialCouponBanner from '@/app/components/SpecialCouponBanner';
import ShareButtons from '@/app/components/ShareButtons';

export const metadata: Metadata = {
  title: '【2026年】本格BAR＆銘酒ウイスキー・クラフトジン！大人の夜を愉しむオーセンティックホテル5選 ｜ 日本全国・旅宿クラウド',
  description: '2026年最新！希少なジャパニーズウイスキーやクラフトジンのテイスティングができる本格バー併設の温泉ホテル5選。大人の贅沢な夜を満喫。',
  keywords: ["ウイスキーバー","クラフトジン","BARホテル","大人の隠れ家","美酒旅","楽天トラベル"],
  alternates: {
    canonical: 'https://croud-travel.pages.dev/craft-gin-whisky-distillery-boutique-stay',
  },
  openGraph: {
    title: '【2026年】本格BAR＆銘酒ウイスキー・クラフトジン！大人の夜を愉しむオーセンティックホテル5選',
    description: '2026年最新！希少なジャパニーズウイスキーやクラフトジンのテイスティングができる本格バー併設の温泉ホテル5選。大人の贅沢な夜を満喫。',
    url: 'https://croud-travel.pages.dev/craft-gin-whisky-distillery-boutique-stay',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【2026年】本格BAR＆銘酒ウイスキー・クラフトジン！大人の夜を愉しむオーセンティックホテル5選",
    "description": "2026年最新！希少なジャパニーズウイスキーやクラフトジンのテイスティングができる本格バー併設の温泉ホテル5選。大人の贅沢な夜を満喫。",
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
    "mainEntityOfPage": "https://croud-travel.pages.dev/craft-gin-whisky-distillery-boutique-stay"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "ウイスキーBAR＆銘酒テイスティング宿の旅行でおすすめの予約時期やタイミングは？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "人気の日程（連休や週末）は1〜2ヶ月前には満室になることが多いため、早期予約（早割プラン）の利用がおすすめです。また楽天トラベルの「5と0のつく日」キャンペーンを活用すると最大20%オフのクーポンが併用でき、最もお得に予約できます。"
        }
      },
      {
        "@type": "Question",
        "name": "ウイスキーBAR＆銘酒テイスティング宿の宿選びで失敗しないためのポイントは？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "宿泊者レビューのお風呂・お食事・接客評価が4.3以上の宿を選ぶと満足度が非常に高くなります。またアクセス手段（送迎バスの有無など）やプランに含まれる特典を事前に確認しておくと安心です。"
        }
      }
    ]
  };

  const hotels: any[] = [
  {
    "hotelNo": 56778,
    "hotelName": "下呂温泉　ホテルくさかべアルメリア",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D56778",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D56778%26f_flg%3DPLAN",
    "hotelMinCharge": 7920,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/56778/56778.jpg",
    "userReview": "温泉とショーに大満足、また行きたい!アジアンスイートを利用させていただきましたが、スタッフさん方はみなさん丁寧に接客してくれますし、温泉も最高でしたし、平日限定の湯上がりサロンのビールがめちゃくち…　2026-09-19 08:21:55投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=56778\" class=\"3click\">つづきはこちら</a>",
    "reviewAverage": 4.2,
    "reviewCount": 4750,
    "address": "岐阜県下呂市幸田1811",
    "access": "ＪＲ高山線　下呂駅より車で３分（無料送迎バス有り）/東海環状道富加関ＩＣより７０分又は中央道中津川ＩＣより６０分",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F56778%2F56778.html"
  },
  {
    "hotelNo": 38879,
    "hotelName": "山代温泉　雄山閣（ＢＢＨホテルグループ）",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D38879",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D38879%26f_flg%3DPLAN",
    "hotelMinCharge": 9300,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/38879/38879.jpg",
    "userReview": "接客もサービスも最高、カニと海鮮に大満足!綺麗で接客も過去イチな宿!無料の卓球、おでん、アイスなどのサービスが充実し、夕食のカニ、海鮮食べ放題も絶品でした!家族4人で快適に滞在できました。絶対にま…　2026-09-15 13:42:19投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=38879\" class=\"3click\">つづきはこちら</a>",
    "reviewAverage": 3.77,
    "reviewCount": 712,
    "address": "石川県加賀市山代温泉東山町16番地の1",
    "access": "JR加賀温泉駅より、ホテル送迎バス(電話で要予約)、又は路線バスで約15分、タクシーで約10分",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F38879%2F38879.html"
  },
  {
    "hotelNo": 13536,
    "hotelName": "湯の山温泉　鹿の湯ホテル",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D13536",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D13536%26f_flg%3DPLAN",
    "hotelMinCharge": 9900,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/13536/13536.jpg",
    "userReview": "両親との旅行に最適、料理も部屋も大満足当日雨で、早く到着してしまいましたが快くロビーへ案内くださいました。高齢の両親を連れていましたので本当に助かりました。ありがとうございました。夕飯…　2026-09-15 10:56:02投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=13536\" class=\"3click\">つづきはこちら</a>",
    "reviewAverage": 4.54,
    "reviewCount": 814,
    "address": "三重県三重郡菰野町菰野8520-1",
    "access": "湯の山駅まで無料送迎有（21時まで）／湯の山駅よりタクシー5分／新名神菰野ICより約5分（ナビでは湯の山郵便局で検索）",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F13536%2F13536.html"
  },
  {
    "hotelNo": 73998,
    "hotelName": "那須温泉　ホテルハーヴェスト那須",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D73998",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D73998%26f_flg%3DPLAN",
    "hotelMinCharge": 13500,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/73998/73998.jpg",
    "userReview": "ゆったりとした食事会場と果てまで続く高原の眺望は得難いもの那須の同種の某リゾートより部屋数が多いしと期待値を下げていったのですが、広い分、ゆったり感は優っており、特に朝夕食会場のテーブルが余裕を持…　2026-09-09 16:26:05投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=73998\" class=\"3click\">つづきはこちら</a>",
    "reviewAverage": 4.34,
    "reviewCount": 685,
    "address": "栃木県那須郡那須町高久丙1792",
    "access": "那須塩原駅より無料シャトルバス運行（定期・前日までの完全予約制）",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F73998%2F73998.html"
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
          <span className="text-stone-800 font-semibold truncate">銘酒ウイスキー×本格BARホテル</span>
        </div>
      </div>

      {/* ヒーローヘッダー */}
      <header className="relative bg-emerald-950 text-white py-12 px-4 md:px-8 border-b border-emerald-900">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-800/80 text-emerald-200 text-xs font-bold rounded-full">
            <span>✨ 2026年最新版</span>
            <span>•</span>
            <span>銘酒ウイスキー×本格BARホテル</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight font-journal-serif leading-tight">
            【2026年】本格BAR＆銘酒ウイスキー・クラフトジン！大人の夜を愉しむオーセンティックホテル5選
          </h1>
          <p className="text-stone-300 text-sm md:text-base leading-relaxed">
            暖炉の火が静かに揺れる重厚なメインバーで、バーテンダーが注ぐ至極のシングルモルトやクラフトカクテル。温泉で心地よく温まったあとに、グラスを傾けながら語らう極上のひととき。お酒を愛する大人のためのハイエンドなオーセンティックステイ。
          </p>
          <div className="pt-2">
            <ShareButtons title="【2026年】本格BAR＆銘酒ウイスキー・クラフトジン！大人の夜を愉しむオーセンティックホテル5選" url="https://croud-travel.pages.dev/craft-gin-whisky-distillery-boutique-stay" />
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
