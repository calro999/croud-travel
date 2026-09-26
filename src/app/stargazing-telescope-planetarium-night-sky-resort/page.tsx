import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import SpecialCouponBanner from '@/app/components/SpecialCouponBanner';
import ShareButtons from '@/app/components/ShareButtons';

export const metadata: Metadata = {
  title: '本格天体望遠鏡＆星空ガイド付き！満天の星と天の川に包まれる高原星空リゾート ｜ 日本全国・旅宿クラウド',
  description: '2026年最新！大型天体望遠鏡や星空ツアー、露天風呂が楽しめる満天の星空リゾートホテル。澄んだ空気の高原で天の川や流星群を眺める非日常体験。',
  keywords: ["星空リゾート","天体望遠鏡","星空露天風呂","天の川","楽天トラベル"],
  alternates: {
    canonical: 'https://croud-travel.pages.dev/stargazing-telescope-planetarium-night-sky-resort',
  },
  openGraph: {
    title: '本格天体望遠鏡＆星空ガイド付き！満天の星と天の川に包まれる高原星空リゾート',
    description: '2026年最新！大型天体望遠鏡や星空ツアー、露天風呂が楽しめる満天の星空リゾートホテル。澄んだ空気の高原で天の川や流星群を眺める非日常体験。',
    url: 'https://croud-travel.pages.dev/stargazing-telescope-planetarium-night-sky-resort',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "本格天体望遠鏡＆星空ガイド付き！満天の星と天の川に包まれる高原星空リゾート",
    "description": "2026年最新！大型天体望遠鏡や星空ツアー、露天風呂が楽しめる満天の星空リゾートホテル。澄んだ空気の高原で天の川や流星群を眺める非日常体験。",
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
    "mainEntityOfPage": "https://croud-travel.pages.dev/stargazing-telescope-planetarium-night-sky-resort"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "本格天体望遠鏡＆星空満天リゾートの旅行でおすすめの予約時期やタイミングは？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "人気の日程（連休や週末）は1〜2ヶ月前には満室になることが多いため、早期予約（早割プラン）の利用がおすすめです。また楽天トラベルの「5と0のつく日」キャンペーンを活用すると最大20%オフのクーポンが併用でき、最もお得に予約できます。"
        }
      },
      {
        "@type": "Question",
        "name": "本格天体望遠鏡＆星空満天リゾートの宿選びで失敗しないためのポイントは？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "宿泊者レビューのお風呂・お食事・接客評価が4.3以上の宿を選ぶと満足度が非常に高くなります。またアクセス手段（送迎バスの有無など）やプランに含まれる特典を事前に確認しておくと安心です。"
        }
      }
    ]
  };

  const hotels: any[] = [
  {
    "hotelNo": 67476,
    "hotelName": "星空の見えるリゾートホテル　峰山高原ホテルリラクシア",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D67476",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D67476%26f_flg%3DPLAN",
    "hotelMinCharge": 8800,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/67476/67476.jpg",
    "userReview": "高原の空気と夕食は満足、朝食の提供に改善希望家内と暑すぎた夏のおわりに、ちょうどいい頃かなと思い、出かけました。雨が少し残り、湿度が高かったのですが、思った通り涼しい高原の空気を満喫でき、夕食で久…　2026-09-16 18:29:14投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=67476\" class=\"3click\">つづきはこちら</a>",
    "reviewAverage": 4.37,
    "reviewCount": 306,
    "address": "兵庫県神崎郡神河町上小田881-146",
    "access": "■播但道神崎南ICより県道8号線を約30分",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F67476%2F67476.html"
  },
  {
    "hotelNo": 109464,
    "hotelName": "芦別温泉スターライトホテル＆おふろｃａｆｅ星遊館　満天の星空×サウナリゾート",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D109464",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D109464%26f_flg%3DPLAN",
    "hotelMinCharge": 10395,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/109464/109464.jpg",
    "userReview": "BBQと星空の露天風呂で大満足の旅友達との旅行で利用しました!夜ご飯のBBQは色んなお肉や野菜などが食べられてとても満足でき、お風呂もチェックイン、チェックアウト後も利用できたため、何回もお風呂に…　2026-09-16 16:15:43投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=109464\" class=\"3click\">つづきはこちら</a>",
    "reviewAverage": 4.35,
    "reviewCount": 1024,
    "address": "北海道芦別市旭町油谷1",
    "access": "芦別駅から10分／旭川駅から約60分／旭川空港から約80分／札幌・新千歳空港から約120分（車移動）",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F109464%2F109464.html"
  },
  {
    "hotelNo": 14738,
    "hotelName": "かえで庵　伊豆高原　英国調アンティークホテル　全室露天風呂付き客室の宿",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D14738",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D14738%26f_flg%3DPLAN",
    "hotelMinCharge": 17020,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/14738/14738.jpg",
    "userReview": "従業員さんの皆さんの対応が良くて、とても気持ちよく過ごすことができました!食事も美味しかったです!ネコちゃんと触れ合うこともできる施設です。クチコミの詳細はこちらから　https://re…　2026-07-16 00:45:37投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=14738\" class=\"3click\">つづきはこちら</a>",
    "reviewAverage": 4.78,
    "reviewCount": 762,
    "address": "静岡県伊東市八幡野1258-11",
    "access": "東名厚木ＩＣ、沼津ＩＣより約９０分／伊豆急伊豆高原駅よりタクシー５分",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F14738%2F14738.html"
  },
  {
    "hotelNo": 6116,
    "hotelName": "露天風呂の宿　開運の湯　ロイヤルホテル河口湖",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D6116",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D6116%26f_flg%3DPLAN",
    "hotelMinCharge": 5500,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/6116/6116.jpg",
    "userReview": "絶景のロケーションとおもてなしに心から癒やされました。",
    "reviewAverage": 3.2,
    "reviewCount": 493,
    "address": "山梨県南都留郡富士河口湖町船津6713-22",
    "access": "中央道河口湖ＩＣ－Ｒ１３９を河口湖方面へ約１０分",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F6116%2F6116.html"
  },
  {
    "hotelNo": 9340,
    "hotelName": "１１種類の貸切露天風呂　水上高原／奥利根温泉　ホテルサンバード",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D9340",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D9340%26f_flg%3DPLAN",
    "hotelMinCharge": 8800,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/9340/9340.jpg",
    "userReview": "露天風呂三昧と美味しい食事でゆったり満喫1人で露天風呂付きのお風呂に2泊宿泊させていただきました。部屋の露天風呂に入ったり、貸切露天風呂に入ったり、またまた大浴場に行ったりとゆったりと過ご…　2026-09-15 23:41:28投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=9340\" class=\"3click\">つづきはこちら</a>",
    "reviewAverage": 4.05,
    "reviewCount": 797,
    "address": "群馬県利根郡みなかみ町藤原4957-1",
    "access": "車で関越自動車道・水上ＩＣから３０分・ＪＲで上越線　水上駅より　湯ノ小屋行きバスで藤原スキー場入口下車900M",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F9340%2F9340.html"
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
          <span className="text-stone-800 font-semibold truncate">天体観測×満天の星空リゾート</span>
        </div>
      </div>

      {/* ヒーローヘッダー */}
      <header className="relative bg-emerald-950 text-white py-12 px-4 md:px-8 border-b border-emerald-900">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-800/80 text-emerald-200 text-xs font-bold rounded-full">
            <span>✨ 2026年最新版</span>
            <span>•</span>
            <span>天体観測×満天の星空リゾート</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight font-journal-serif leading-tight">
            本格天体望遠鏡＆星空ガイド付き！満天の星と天の川に包まれる高原星空リゾート
          </h1>
          <p className="text-stone-300 text-sm md:text-base leading-relaxed">
            標高1,000m以上の澄み切った夜空に広がる無数の星々と天の川。本格的な天体望遠鏡での惑星観測や、星空案内人によるナイトツアー、展望露天風呂など、宇宙の神秘に触れる感動のステイが楽しめる高原リゾートホテルをご紹介します。
          </p>
          <div className="pt-2">
            <ShareButtons title="本格天体望遠鏡＆星空ガイド付き！満天の星と天の川に包まれる高原星空リゾート" url="https://croud-travel.pages.dev/stargazing-telescope-planetarium-night-sky-resort" />
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
