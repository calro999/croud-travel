import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import SpecialCouponBanner from '@/app/components/SpecialCouponBanner';
import ShareButtons from '@/app/components/ShareButtons';

export const metadata: Metadata = {
  title: '【2026年】ふっくら香ばしい秘伝の炭火蒲焼き！極上うなぎ尽くし会席＆名湯の温泉宿5選 ｜ 日本全国・旅宿クラウド',
  description: '2026年最新！浜名湖・三島・柳川など名産地の厳選うなぎを炭火で香ばしく焼き上げたうな重やひつまぶし、白焼きを堪能できる美食温泉宿5選。',
  keywords: ["うなぎ料理","炭火蒲焼き","うな重","浜名湖温泉","名物グルメ","楽天トラベル"],
  alternates: {
    canonical: 'https://croud-travel.pages.dev/traditional-eel-unagi-charcoal-kabayaki-stay',
  },
  openGraph: {
    title: '【2026年】ふっくら香ばしい秘伝の炭火蒲焼き！極上うなぎ尽くし会席＆名湯の温泉宿5選',
    description: '2026年最新！浜名湖・三島・柳川など名産地の厳選うなぎを炭火で香ばしく焼き上げたうな重やひつまぶし、白焼きを堪能できる美食温泉宿5選。',
    url: 'https://croud-travel.pages.dev/traditional-eel-unagi-charcoal-kabayaki-stay',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【2026年】ふっくら香ばしい秘伝の炭火蒲焼き！極上うなぎ尽くし会席＆名湯の温泉宿5選",
    "description": "2026年最新！浜名湖・三島・柳川など名産地の厳選うなぎを炭火で香ばしく焼き上げたうな重やひつまぶし、白焼きを堪能できる美食温泉宿5選。",
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
    "mainEntityOfPage": "https://croud-travel.pages.dev/traditional-eel-unagi-charcoal-kabayaki-stay"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "炭火うなぎ蒲焼き＆うなぎ会席温泉宿の旅行でおすすめの予約時期やタイミングは？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "人気の日程（連休や週末）は1〜2ヶ月前には満室になることが多いため、早期予約（早割プラン）の利用がおすすめです。また楽天トラベルの「5と0のつく日」キャンペーンを活用すると最大20%オフのクーポンが併用でき、最もお得に予約できます。"
        }
      },
      {
        "@type": "Question",
        "name": "炭火うなぎ蒲焼き＆うなぎ会席温泉宿の宿選びで失敗しないためのポイントは？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "宿泊者レビューのお風呂・お食事・接客評価が4.3以上の宿を選ぶと満足度が非常に高くなります。またアクセス手段（送迎バスの有無など）やプランに含まれる特典を事前に確認しておくと安心です。"
        }
      }
    ]
  };

  const hotels: any[] = [
  {
    "hotelNo": 141230,
    "hotelName": "下部温泉　旅館いしもと",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D141230",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D141230%26f_flg%3DPLAN",
    "hotelMinCharge": 6500,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/141230/141230.jpg",
    "userReview": "ぬる湯と熱湯の交互浴が最高、名湯名宿ぬる湯と熱湯の2槽あって交互に入浴、特にぬる湯はツルトロで時間があれば半日でも入っていたいお風呂。リーズナブルで旅情あふれる名湯名宿。下部は本当に大…　2026-09-18 18:51:38投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=141230\" class=\"3click\">つづきはこちら</a>",
    "reviewAverage": 3.82,
    "reviewCount": 201,
    "address": "山梨県南巨摩郡身延町下部80-1",
    "access": "下部温泉駅よりお車にて３分、徒歩にて２０分",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F141230%2F141230.html"
  },
  {
    "hotelNo": 4688,
    "hotelName": "成田山門前　旅館　若松本店",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D4688",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D4688%26f_flg%3DPLAN",
    "hotelMinCharge": 10780,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/4688/4688.jpg",
    "userReview": "新勝寺の目の前、ウナギ料理と気遣いが嬉しい新勝寺の目の前という好立地の場所です。自分の場合は成田駅から歩き、表参道のお店や街並みを楽しみながら歩き15分ほどで宿に到着しました。大雨でしたが、宿…　2026-09-10 09:06:06投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=4688\" class=\"3click\">つづきはこちら</a>",
    "reviewAverage": 4.55,
    "reviewCount": 396,
    "address": "千葉県成田市本町355",
    "access": "ＪＲ・京成成田駅より徒歩１５分 または　タクシー３分・成田空港より車で２０分",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F4688%2F4688.html"
  },
  {
    "hotelNo": 139823,
    "hotelName": "和牛とのどぐろの温泉旅館　四季荘",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D139823",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D139823%26f_flg%3DPLAN",
    "hotelMinCharge": 4400,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/139823/139823.jpg",
    "userReview": "森の中のサウナで最高に整ったとにかくサウナが最高です。森の中で整いましたクチコミの詳細はこちらから　https://review.travel.rakuten.co.jp/hotel/voic…　2026-09-18 01:56:21投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=139823\" class=\"3click\">つづきはこちら</a>",
    "reviewAverage": 3.94,
    "reviewCount": 279,
    "address": "島根県出雲市斐川町学頭1369",
    "access": "山陰道宍道IC・斐川ICよりそれぞれ約車で約10分　出雲縁結び空港より車で約15分　ＪＲ荘原駅から徒歩約20分",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F139823%2F139823.html"
  },
  {
    "hotelNo": 84819,
    "hotelName": "養老渓谷温泉郷　温泉旅館　川の家",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D84819",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D84819%26f_flg%3DPLAN",
    "hotelMinCharge": 18700,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/84819/84819.jpg",
    "userReview": "うな丼と過去最高に美味しいしじみ汁うな丼が美味しかったです。夕飯のしじみも、しじみ汁史上最高に美味しかったです。クチコミの詳細はこちらから　https://review.travel.ra…　2026-08-30 17:56:05投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=84819\" class=\"3click\">つづきはこちら</a>",
    "reviewAverage": 4.57,
    "reviewCount": 134,
    "address": "千葉県夷隅郡大多喜町葛藤932",
    "access": "養老渓谷駅よりお車にて５分",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F84819%2F84819.html"
  },
  {
    "hotelNo": 38827,
    "hotelName": "岩室温泉　高志の宿　高島屋",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D38827",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D38827%26f_flg%3DPLAN",
    "hotelMinCharge": 22468,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/38827/38827.jpg",
    "userReview": "趣のある庭園と丁寧な接客でゆったりと趣きがありゆっくりできました。庭園がとても綺麗でした。スタッフも丁寧で親切に対応してくれました。クチコミの詳細はこちらから　https://revi…　2026-09-12 21:15:29投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=38827\" class=\"3click\">つづきはこちら</a>",
    "reviewAverage": 4.57,
    "reviewCount": 418,
    "address": "新潟県新潟市西蒲区岩室温泉678甲",
    "access": "【無料送迎サービス有・２名様より】燕三条駅１４：４０・岩室駅・弥彦駅はご到着時刻（いずれも３日前までの予約制）",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F38827%2F38827.html"
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
          <span className="text-stone-800 font-semibold truncate">炭火うなぎ蒲焼き×ひつまぶし宿</span>
        </div>
      </div>

      {/* ヒーローヘッダー */}
      <header className="relative bg-emerald-950 text-white py-12 px-4 md:px-8 border-b border-emerald-900">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-800/80 text-emerald-200 text-xs font-bold rounded-full">
            <span>✨ 2026年最新版</span>
            <span>•</span>
            <span>炭火うなぎ蒲焼き×ひつまぶし宿</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight font-journal-serif leading-tight">
            【2026年】ふっくら香ばしい秘伝の炭火蒲焼き！極上うなぎ尽くし会席＆名湯の温泉宿5選
          </h1>
          <p className="text-stone-300 text-sm md:text-base leading-relaxed">
            立ち上る香ばしい煙と秘伝タレの甘辛い香り。皮目はパリッと香ばしく、身は口の中でとろけるほどふっくら柔らかな極上うなぎ。白焼き、うざく、う巻き、そして贅沢なうな重まで。スタミナ満点の美味と名湯で活力をチャージする至高の旅。
          </p>
          <div className="pt-2">
            <ShareButtons title="【2026年】ふっくら香ばしい秘伝の炭火蒲焼き！極上うなぎ尽くし会席＆名湯の温泉宿5選" url="https://croud-travel.pages.dev/traditional-eel-unagi-charcoal-kabayaki-stay" />
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
