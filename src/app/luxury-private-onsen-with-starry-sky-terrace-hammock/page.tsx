import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import SpecialCouponBanner from '@/app/components/SpecialCouponBanner';
import ShareButtons from '@/app/components/ShareButtons';

export const metadata: Metadata = {
  title: '【2026年】星空ハンモックテラス＆貸切露天風呂！心地よい夜風と天の川に癒やされる宿5選 ｜ 日本全国・旅宿クラウド',
  description: '2026年最新！客室専用ウッドテラスのハンモックに揺られながら満天の星と月を眺め、天然温泉で心身を解きほぐす大人のリゾートホテル5選。',
  keywords: ["ハンモック","星空テラス","客室露天風呂","天の川","リゾートホテル","楽天トラベル"],
  alternates: {
    canonical: 'https://croud-travel.pages.dev/luxury-private-onsen-with-starry-sky-terrace-hammock',
  },
  openGraph: {
    title: '【2026年】星空ハンモックテラス＆貸切露天風呂！心地よい夜風と天の川に癒やされる宿5選',
    description: '2026年最新！客室専用ウッドテラスのハンモックに揺られながら満天の星と月を眺め、天然温泉で心身を解きほぐす大人のリゾートホテル5選。',
    url: 'https://croud-travel.pages.dev/luxury-private-onsen-with-starry-sky-terrace-hammock',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【2026年】星空ハンモックテラス＆貸切露天風呂！心地よい夜風と天の川に癒やされる宿5選",
    "description": "2026年最新！客室専用ウッドテラスのハンモックに揺られながら満天の星と月を眺め、天然温泉で心身を解きほぐす大人のリゾートホテル5選。",
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
    "mainEntityOfPage": "https://croud-travel.pages.dev/luxury-private-onsen-with-starry-sky-terrace-hammock"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "星空ハンモックテラス＆プライベート温泉宿の旅行でおすすめの予約時期やタイミングは？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "人気の日程（連休や週末）は1〜2ヶ月前には満室になることが多いため、早期予約（早割プラン）の利用がおすすめです。また楽天トラベルの「5と0のつく日」キャンペーンを活用すると最大20%オフのクーポンが併用でき、最もお得に予約できます。"
        }
      },
      {
        "@type": "Question",
        "name": "星空ハンモックテラス＆プライベート温泉宿の宿選びで失敗しないためのポイントは？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "宿泊者レビューのお風呂・お食事・接客評価が4.3以上の宿を選ぶと満足度が非常に高くなります。またアクセス手段（送迎バスの有無など）やプランに含まれる特典を事前に確認しておくと安心です。"
        }
      }
    ]
  };

  const hotels: any[] = [
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
    "hotelNo": 29835,
    "hotelName": "妙義温泉　妙義グリーンホテル＆テラス",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D29835",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D29835%26f_flg%3DPLAN",
    "hotelMinCharge": 9070,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/29835/29835.jpg",
    "userReview": "とても良かったです!快適に過ごすことが出来ました!バイキングの料理もおいしかったです朝も夜もとてもよかったです種類も豊富で!この辺りを観光するなら、とてもいい宿だと思いますお風呂も…　2026-09-16 03:08:30投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=29835\" class=\"3click\">つづきはこちら</a>",
    "reviewAverage": 4.27,
    "reviewCount": 1914,
    "address": "群馬県富岡市妙義町菅原2678",
    "access": "JR松井田駅よりタクシー12分／磯部駅よりタクシー17分／松井田妙義IC（上信越自動車道）より１２分",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F29835%2F29835.html"
  },
  {
    "hotelNo": 167316,
    "hotelName": "宙の森ホテル　花郷里",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D167316",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D167316%26f_flg%3DPLAN",
    "hotelMinCharge": 3850,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/167316/167316.jpg",
    "userReview": "絶景のロケーションとおもてなしに心から癒やされました。",
    "reviewAverage": 4.3,
    "reviewCount": 41,
    "address": "兵庫県美方郡香美町小代区大谷300",
    "access": "八鹿駅より���但バス「秋岡」行に乗車（約1時間）、「小代大谷」バス停下車、徒歩で約10分",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F167316%2F167316.html"
  },
  {
    "hotelNo": 59633,
    "hotelName": "ＨＯＴＥＬ　ＡＺＵＭＡ＜佐渡島＞",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D59633",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D59633%26f_flg%3DPLAN",
    "hotelMinCharge": 12857,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/59633/59633.jpg",
    "userReview": "ロケーション抜群、朝食とアクティビティを満喫ローケーション抜群!当日予約だったので夕食をつけることができませんでし��が、朝食バイキングは抜群でした。カンパチのお刺身が個人的には1番でした。到着する…　2026-09-18 09:56:02投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=59633\" class=\"3click\">つづきはこちら</a>",
    "reviewAverage": 4.39,
    "reviewCount": 362,
    "address": "新潟県佐渡市相川大浦548-1",
    "access": "両津港より車で５０分／小木港より車で６０分",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F59633%2F59633.html"
  },
  {
    "hotelNo": 184085,
    "hotelName": "ＧＲＡＸ（ＡＳＯＢＩＹＵＫＵ　京都るり渓温泉）",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D184085",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D184085%26f_flg%3DPLAN",
    "hotelMinCharge": 6655,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/184085/184085.jpg",
    "userReview": "アレルギーにも対応してくれました。家族で何度か利用させてもらっています。今回は子供が友人と泊まりたいといことで2泊お世話になりました。友人が乳製品アレルギーということで何度か問合せしたようで、アレ…　2026-09-15 22:31:15投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=184085\" class=\"3click\">つづきはこちら</a>",
    "reviewAverage": 4.4,
    "reviewCount": 354,
    "address": "京都府南丹市園部町大河内広谷1-20",
    "access": "【車以外】能勢電鉄日生中央駅／JR嵯峨野線園部駅～送迎バス有（事前予約）　【車】千代川IC・池田木部IC～るり渓方面へ",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F184085%2F184085.html"
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
          <span className="text-stone-800 font-semibold truncate">星空ハンモック×テラス露天風呂</span>
        </div>
      </div>

      {/* ヒーローヘッダー */}
      <header className="relative bg-emerald-950 text-white py-12 px-4 md:px-8 border-b border-emerald-900">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-800/80 text-emerald-200 text-xs font-bold rounded-full">
            <span>✨ 2026年最新版</span>
            <span>•</span>
            <span>星空ハンモック×テラス露天風呂</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight font-journal-serif leading-tight">
            【2026年】星空ハンモックテラス＆貸切露天風呂！心地よい夜風と天の川に癒やされる宿5選
          </h1>
          <p className="text-stone-300 text-sm md:text-base leading-relaxed">
            ゆらゆらと揺れるハンモックに身を委ね、見上げる夜空に広がる無数の星々と天の川。心地よい夜風と虫の音をBGMに温かいハーブティーを味わい、テラス直結の客室露天風呂で温まる。日常のストレスから完全に解き放たれる極上の星空リトリート。
          </p>
          <div className="pt-2">
            <ShareButtons title="【2026年】星空ハンモックテラス＆貸切露天風呂！心地よい夜風と天の川に癒やされる宿5選" url="https://croud-travel.pages.dev/luxury-private-onsen-with-starry-sky-terrace-hammock" />
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
