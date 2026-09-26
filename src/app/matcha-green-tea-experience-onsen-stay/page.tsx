import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import SpecialCouponBanner from '@/app/components/SpecialCouponBanner';
import ShareButtons from '@/app/components/ShareButtons';

export const metadata: Metadata = {
  title: '【2026年】宇治・静岡・八女の銘茶香る！本格茶室体験とお茶風呂・茶懐石の美肌宿5選 ｜ 日本全国・旅宿クラウド',
  description: '2026年最新！名産地のお茶を五感で楽しむお茶旅。本格茶室での点前体験、カテキンたっぷりの茶湯露天風呂、茶葉を使った特製茶懐石が自慢の宿5選。',
  keywords: ["お茶旅","抹茶体験","茶室","茶湯温泉","茶懐石","楽天トラベル"],
  alternates: {
    canonical: 'https://croud-travel.pages.dev/matcha-green-tea-experience-onsen-stay',
  },
  openGraph: {
    title: '【2026年】宇治・静岡・八女の銘茶香る！本格茶室体験とお茶風呂・茶懐石の美肌宿5選',
    description: '2026年最新！名産地のお茶を五感で楽しむお茶旅。本格茶室での点前体験、カテキンたっぷりの茶湯露天風呂、茶葉を使った特製茶懐石が自慢の宿5選。',
    url: 'https://croud-travel.pages.dev/matcha-green-tea-experience-onsen-stay',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【2026年】宇治・静岡・八女の銘茶香る！本格茶室体験とお茶風呂・茶懐石の美肌宿5選",
    "description": "2026年最新！名産地のお茶を五感で楽しむお茶旅。本格茶室での点前体験、カテキンたっぷりの茶湯露天風呂、茶葉を使った特製茶懐石が自慢の宿5選。",
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
    "mainEntityOfPage": "https://croud-travel.pages.dev/matcha-green-tea-experience-onsen-stay"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "銘茶の香り＆本格茶室・茶湯温泉宿の旅行でおすすめの予約時期やタイミングは？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "人気の日程（連休や週末）は1〜2ヶ月前には満室になることが多いため、早期予約（早割プラン）の利用がおすすめです。また楽天トラベルの「5と0のつく日」キャンペーンを活用すると最大20%オフのクーポンが併用でき、最もお得に予約できます。"
        }
      },
      {
        "@type": "Question",
        "name": "銘茶の香り＆本格茶室・茶湯温泉宿の宿選びで失敗しないためのポイントは？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "宿泊者レビューのお風呂・お食事・接客評価が4.3以上の宿を選ぶと満足度が非常に高くなります。またアクセス手段（送迎バスの有無など）やプランに含まれる特典を事前に確認しておくと安心です。"
        }
      }
    ]
  };

  const hotels: any[] = [
  {
    "hotelNo": 4674,
    "hotelName": "塩原温泉　旅館　上会津屋",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D4674",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D4674%26f_flg%3DPLAN",
    "hotelMinCharge": 9900,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/4674/4674.jpg",
    "userReview": "ありがとうございました。女将さんが優しくて、とてもほっこりした気持ちになる旅館でした!!初めて温泉の入り方を教わりました。教わった通りにしたら疲れの取れ方が違います!!源泉かけ流しが最高!…　2026-08-30 23:05:32投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=4674\" class=\"3click\">つづきはこちら</a>",
    "reviewAverage": 4.13,
    "reviewCount": 317,
    "address": "栃木県那須塩原市塩原745",
    "access": "東北道・西那須野塩原ＩＣから２０分。東北新幹線那須塩原駅からバス６５分終点下車、徒歩２分。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F4674%2F4674.html"
  },
  {
    "hotelNo": 108788,
    "hotelName": "長湯温泉　大丸旅館",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D108788",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D108788%26f_flg%3DPLAN",
    "hotelMinCharge": 19800,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/108788/108788.jpg",
    "userReview": "何十年ぶりかに訪れましたが、相変わらず温泉は最高です。今回の旅館は、初めてでしたが長い歴史を感じさせる雰囲気のある旅館でした。テレビの調子が悪くてほとんど見れませんでしたが、それがまた良かった…　2026-09-14 18:41:51投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=108788\" class=\"3click\">つづきはこちら</a>",
    "reviewAverage": 4.37,
    "reviewCount": 199,
    "address": "大分県竹田市直入町長湯7992-1",
    "access": "JR豊肥本線・豊後竹田駅よりお車にて25分。（駅から路線バスもあります。長湯行き約40分、長湯下車。）",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F108788%2F108788.html"
  },
  {
    "hotelNo": 7027,
    "hotelName": "宮津温泉　料理旅館　茶六別館",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D7027",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D7027%26f_flg%3DPLAN",
    "hotelMinCharge": 17600,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/7027/7027.jpg",
    "userReview": "趣ある建物と絶品の生ガキに大満足建物は非常に趣があり、興味を持てました。お部屋も昔ながらの雰囲気でよかったです。窓からは天橋立が見えました。ちょっと霞んでいましたが、冬ならもっとはっきり見えるかも…　2026-08-01 09:40:26投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=7027\" class=\"3click\">つづきはこちら</a>",
    "reviewAverage": 4.55,
    "reviewCount": 202,
    "address": "京都府宮津市島崎2039-4",
    "access": "車：京都縦貫自動車道宮津天橋立ＩＣより約５分　電車：京都丹後鉄道宮津駅より徒歩１０分　高速バス：キセンバ港館より徒歩７分",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F7027%2F7027.html"
  },
  {
    "hotelNo": 13630,
    "hotelName": "四万温泉　春木亭　なかざわ旅館",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D13630",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D13630%26f_flg%3DPLAN",
    "hotelMinCharge": 13650,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/13630/13630.jpg",
    "userReview": "温泉を堪能し、女将さんの想いに感銘を受けたその節はありがとうございました。全ての貸切風呂にも入ることができましたし、部屋の温泉にも入りたい時に入れましたし、本当に温泉を堪能することができました…　2026-09-06 19:13:41投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=13630\" class=\"3click\">つづきはこちら</a>",
    "reviewAverage": 4.82,
    "reviewCount": 704,
    "address": "群馬県吾妻郡中之条町大字四万4238-41",
    "access": "関越自動車道『渋川伊香保IC』→R１７→R３５３で５０分　JR吾妻線『中之条駅』下車バス四万温泉『桐の木平』下車徒歩２分",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F13630%2F13630.html"
  },
  {
    "hotelNo": 14889,
    "hotelName": "からつ温泉　かぐや姫の湯　旅館　綿屋",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D14889",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D14889%26f_flg%3DPLAN",
    "hotelMinCharge": 18340,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/14889/14889.jpg",
    "userReview": "食事の美味しいお宿です名物の呼子イカ佐賀牛の大満足会席プランを利用させていただきました。大満足のお食事で唐津城を見ながら食事をすることができ気持ちよく食事をいただきました。お宿は歴史のある…　2026-09-07 15:21:50投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=14889\" class=\"3click\">つづきはこちら</a>",
    "reviewAverage": 3.64,
    "reviewCount": 282,
    "address": "佐賀県唐津市大名小路5-10",
    "access": "福岡空港、JR博多駅よりＪＲ唐津行唐津駅下車、車３分　徒歩１5分／長崎自動車道多久ＩＣより４０分",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F14889%2F14889.html"
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
          <span className="text-stone-800 font-semibold truncate">銘茶の香り×本格茶室温泉</span>
        </div>
      </div>

      {/* ヒーローヘッダー */}
      <header className="relative bg-emerald-950 text-white py-12 px-4 md:px-8 border-b border-emerald-900">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-800/80 text-emerald-200 text-xs font-bold rounded-full">
            <span>✨ 2026年最新版</span>
            <span>•</span>
            <span>銘茶の香り×本格茶室温泉</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight font-journal-serif leading-tight">
            【2026年】宇治・静岡・八女の銘茶香る！本格茶室体験とお茶風呂・茶懐石の美肌宿5選
          </h1>
          <p className="text-stone-300 text-sm md:text-base leading-relaxed">
            淹れたての日本茶の香ばしいアロマに包まれる上質な休日。本格的な数寄屋造りの茶室で味わう抹茶と季節の上生菓子、美肌効果の高い緑茶エキスを浮かべた茶湯露天風呂、そして茶葉の天ぷらやほうじ茶ご飯を堪能する大人の風流ステイ。
          </p>
          <div className="pt-2">
            <ShareButtons title="【2026年】宇治・静岡・八女の銘茶香る！本格茶室体験とお茶風呂・茶懐石の美肌宿5選" url="https://croud-travel.pages.dev/matcha-green-tea-experience-onsen-stay" />
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
