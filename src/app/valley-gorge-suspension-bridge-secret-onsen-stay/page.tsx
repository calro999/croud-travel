import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import SpecialCouponBanner from '@/app/components/SpecialCouponBanner';
import ShareButtons from '@/app/components/ShareButtons';

export const metadata: Metadata = {
  title: 'エメラルドグリーンの渓谷美と秘境吊り橋！大自然の峡谷露天風呂に癒やされる隠れ家温泉宿 ｜ 日本全国・旅宿クラウド',
  description: '2026年最新！エメラルドグリーンの清流と峡谷の絶景を望む秘境温泉宿。スリル満点の吊り橋散策とマイナスイオン溢れる渓流露天風呂で極上の癒やしを。',
  keywords: ["渓谷露天風呂","秘境温泉","吊り橋","温泉旅行","楽天トラベル"],
  alternates: {
    canonical: 'https://croud-travel.pages.dev/valley-gorge-suspension-bridge-secret-onsen-stay',
  },
  openGraph: {
    title: 'エメラルドグリーンの渓谷美と秘境吊り橋！大自然の峡谷露天風呂に癒やされる隠れ家温泉宿',
    description: '2026年最新！エメラルドグリーンの清流と峡谷の絶景を望む秘境温泉宿。スリル満点の吊り橋散策とマイナスイオン溢れる渓流露天風呂で極上の癒やしを。',
    url: 'https://croud-travel.pages.dev/valley-gorge-suspension-bridge-secret-onsen-stay',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "エメラルドグリーンの渓谷美と秘境吊り橋！大自然の峡谷露天風呂に癒やされる隠れ家温泉宿",
    "description": "2026年最新！エメラルドグリーンの清流と峡谷の絶景を望む秘境温泉宿。スリル満点の吊り橋散策とマイナスイオン溢れる渓流露天風呂で極上の癒やしを。",
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
    "mainEntityOfPage": "https://croud-travel.pages.dev/valley-gorge-suspension-bridge-secret-onsen-stay"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "渓谷美＆秘境峡谷露天風呂宿の旅行でおすすめの予約時期やタイミングは？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "人気の日程（連休や週末）は1〜2ヶ月前には満室になることが多いため、早期予約（早割プラン）の利用がおすすめです。また楽天トラベルの「5と0のつく日」キャンペーンを活用すると最大20%オフのクーポンが併用でき、最もお得に予約できます。"
        }
      },
      {
        "@type": "Question",
        "name": "渓谷美＆秘境峡谷露天風呂宿の宿選びで失敗しないためのポイントは？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "宿泊者レビューのお風呂・お食事・接客評価が4.3以上の宿を選ぶと満足度が非常に高くなります。またアクセス手段（送迎バスの有無など）やプランに含まれる特典を事前に確認しておくと安心です。"
        }
      }
    ]
  };

  const hotels: any[] = [
  {
    "hotelNo": 173176,
    "hotelName": "松川渓谷に佇む宿　信州山田温泉　山田館",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D173176",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D173176%26f_flg%3DPLAN",
    "hotelMinCharge": 30000,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/173176/173176.jpg",
    "userReview": "温泉好き必見、貸切状態でゆったり満喫温泉好きなら、一度は行っておきたい旅館我が家は善光寺など長野周辺の観光とセットにしました大きい建物で満室でしたが、客室が少なくほとんど他のお客さんと顔会…　2026-08-15 09:49:38投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=173176\" class=\"3click\">つづきはこちら</a>",
    "reviewAverage": 4.6,
    "reviewCount": 54,
    "address": "長野県上高井郡高山村山田温泉3604",
    "access": "長野電鉄須坂駅または小布施駅下車、当館無料送迎バスをご利用ください（要事前予約）",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F173176%2F173176.html"
  },
  {
    "hotelNo": 28021,
    "hotelName": "志賀高原　白い温泉　渓谷の湯",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D28021",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D28021%26f_flg%3DPLAN",
    "hotelMinCharge": 21700,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/28021/28021.jpg",
    "userReview": "信州の懐かしい味と露天風呂で良い思い出にお食事が、丁寧で、美味しい。信州の名産をいただきました。私が北信出身で、成人した子達とトレッキング目的で宿泊しました。朝食のシソジュース、たけのこ汁、夕食の…　2026-09-05 14:49:09投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=28021\" class=\"3click\">つづきはこちら</a>",
    "reviewAverage": 4.8,
    "reviewCount": 182,
    "address": "長野県下高井郡山ノ内町大字平穏7148 　※カーナビは【電話0269-34-2207】でご設定ください",
    "access": "信州中野ICお車30分　ナビは0269-34-2207でご設定下さい/JR長野駅バス70分志賀高原山の駅下車、送迎有り",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F28021%2F28021.html"
  },
  {
    "hotelNo": 11206,
    "hotelName": "名勝天龍峡温泉　渓谷に佇む隠れ宿　峡泉",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D11206",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D11206%26f_flg%3DPLAN",
    "hotelMinCharge": 40900,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/11206/11206.jpg",
    "userReview": "絶景のロケーションとおもてなしに心から癒やされました。",
    "reviewAverage": 5,
    "reviewCount": 209,
    "address": "長野県飯田市川路4942-2",
    "access": "JR飯田線「天竜峡駅」より徒歩５分 / 天龍峡ICより車で３分 / 新宿・名古屋（高速バス）→飯田駅（JR）→天竜峡駅",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F11206%2F11206.html"
  },
  {
    "hotelNo": 188070,
    "hotelName": "全室温泉半露天風呂付リゾート　日光ガーデンホテル",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D188070",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D188070%26f_flg%3DPLAN",
    "hotelMinCharge": 13700,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/188070/188070.jpg",
    "userReview": "子供への細やかな配慮と対応に大満足家族あげての旅行で利用しました。 露天風呂は小さな子たちはお風呂のおもちゃで思う存分遊べて良かったです。あげく、お風呂におもちゃを忘れて連絡までいただき助かり…　2026-09-18 21:57:47投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=188070\" class=\"3click\">つづきはこちら</a>",
    "reviewAverage": 4.33,
    "reviewCount": 188,
    "address": "栃木県那須塩原市塩原1330",
    "access": "JR那須塩原駅からお車で約35分　野岩鉄道 上三依塩原温泉口駅からバスで20分",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F188070%2F188070.html"
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
          <span className="text-stone-800 font-semibold truncate">渓谷美×秘境峡谷露天風呂</span>
        </div>
      </div>

      {/* ヒーローヘッダー */}
      <header className="relative bg-emerald-950 text-white py-12 px-4 md:px-8 border-b border-emerald-900">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-800/80 text-emerald-200 text-xs font-bold rounded-full">
            <span>✨ 2026年最新版</span>
            <span>•</span>
            <span>渓谷美×秘境峡谷露天風呂</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight font-journal-serif leading-tight">
            エメラルドグリーンの渓谷美と秘境吊り橋！大自然の峡谷露天風呂に癒やされる隠れ家温泉宿
          </h1>
          <p className="text-stone-300 text-sm md:text-base leading-relaxed">
            清らかな渓流のせせらぎ、深い緑や錦秋の峡谷、そしてスリルと絶景が広がる吊り橋。手つかずの大自然に抱かれた秘境の露天風呂で、日常の喧騒を完全に忘れて心身をリセットできる隠れ家宿をご紹介します。
          </p>
          <div className="pt-2">
            <ShareButtons title="エメラルドグリーンの渓谷美と秘境吊り橋！大自然の峡谷露天風呂に癒やされる隠れ家温泉宿" url="https://croud-travel.pages.dev/valley-gorge-suspension-bridge-secret-onsen-stay" />
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
