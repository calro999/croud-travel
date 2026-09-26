import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import SpecialCouponBanner from '@/app/components/SpecialCouponBanner';
import ShareButtons from '@/app/components/ShareButtons';

export const metadata: Metadata = {
  title: '【2026年】和漢薬草スチームサウナ＆薬膳養生！自然治癒力を高める薬草温活温泉宿5選 ｜ 日本全国・旅宿クラウド',
  description: '2026年最新！当帰やよもぎなど十数種の国産生薬を蒸留した薬草サウナと、濃厚な薬草湯、体を芯から温める薬膳会席でデトックスできる養生宿5選。',
  keywords: ["薬草サウナ","よもぎ蒸し","薬善料理","温活デトックス","養生温泉","楽天トラベル"],
  alternates: {
    canonical: 'https://croud-travel.pages.dev/organic-medicinal-herb-sauna-detox-stay',
  },
  openGraph: {
    title: '【2026年】和漢薬草スチームサウナ＆薬膳養生！自然治癒力を高める薬草温活温泉宿5選',
    description: '2026年最新！当帰やよもぎなど十数種の国産生薬を蒸留した薬草サウナと、濃厚な薬草湯、体を芯から温める薬膳会席でデトックスできる養生宿5選。',
    url: 'https://croud-travel.pages.dev/organic-medicinal-herb-sauna-detox-stay',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【2026年】和漢薬草スチームサウナ＆薬膳養生！自然治癒力を高める薬草温活温泉宿5選",
    "description": "2026年最新！当帰やよもぎなど十数種の国産生薬を蒸留した薬草サウナと、濃厚な薬草湯、体を芯から温める薬膳会席でデトックスできる養生宿5選。",
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
    "mainEntityOfPage": "https://croud-travel.pages.dev/organic-medicinal-herb-sauna-detox-stay"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "和漢薬草サウナ＆薬膳温活デトックス宿の旅行でおすすめの予約時期やタイミングは？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "人気の日程（連休や週末）は1〜2ヶ月前には満室になることが多いため、早期予約（早割プラン）の利用がおすすめです。また楽天トラベルの「5と0のつく日」キャンペーンを活用すると最大20%オフのクーポンが併用でき、最もお得に予約できます。"
        }
      },
      {
        "@type": "Question",
        "name": "和漢薬草サウナ＆薬膳温活デトックス宿の宿選びで失敗しないためのポイントは？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "宿泊者レビューのお風呂・お食事・接客評価が4.3以上の宿を選ぶと満足度が非常に高くなります。またアクセス手段（送迎バスの有無など）やプランに含まれる特典を事前に確認しておくと安心です。"
        }
      }
    ]
  };

  const hotels: any[] = [
  {
    "hotelNo": 183550,
    "hotelName": "板室別邸リトリート　SPA和薬草",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D183550",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D183550%26f_flg%3DPLAN",
    "hotelMinCharge": 21440,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/183550/183550.jpg",
    "userReview": "自分を労わる体験とヘルシーな食事に満足瞑想や自分でできるお灸など、自分を労わる体験がとてもよかったです。また自分の状況に合わせたお茶も自由にブレンドして飲めたり、バスタオルやお水も自分もペースで頂…　2026-09-06 16:27:20投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=183550\" class=\"3click\">つづきはこちら</a>",
    "reviewAverage": 4.55,
    "reviewCount": 133,
    "address": "栃木県那須塩原市板室841-14",
    "access": "【無料送迎】＜往路＞那須塩原駅西口12：30発　＜復路＞SPA和薬草10：00発",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F183550%2F183550.html"
  },
  {
    "hotelNo": 44948,
    "hotelName": "定山渓温泉　女性のための宿　翠蝶館（旧：定山渓温泉　Ｓｐａ＆Ｅｓｔｈｅｔｉｑｕｅ　翠蝶館）",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D44948",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D44948%26f_flg%3DPLAN",
    "hotelMinCharge": 12590,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/44948/44948.jpg",
    "userReview": "細やかな配慮と温かいおもてなしに感動温泉宿でおいしいものが食べたいけど、病み上がりで食事の量に不安があり、なかなか宿泊できずにいました。丁寧なHPと36時間ステイ、夕食少量が決め手で予約。当日…　2026-09-17 19:48:23投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=44948\" class=\"3click\">つづきはこちら</a>",
    "reviewAverage": 4.56,
    "reviewCount": 534,
    "address": "北海道札幌市南区定山渓温泉西3-57",
    "access": "札幌より無料送迎バス運行（要予約） ／ＪＲ札幌駅より車で60分／新千歳空港より車で約2時間",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F44948%2F44948.html"
  },
  {
    "hotelNo": 28586,
    "hotelName": "杖立温泉　葉隠館",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D28586",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D28586%26f_flg%3DPLAN",
    "hotelMinCharge": 14300,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/28586/28586.jpg",
    "userReview": "絶景のロケーションとおもてなしに心から癒やされました。",
    "reviewAverage": 3.78,
    "reviewCount": 538,
    "address": "熊本県阿蘇郡小国町下城3336",
    "access": "九州大分道日田インターより国道２１２号阿蘇方面へ車で３０分",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F28586%2F28586.html"
  },
  {
    "hotelNo": 38783,
    "hotelName": "びわ湖畔　味覚の宿　双葉荘",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D38783",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D38783%26f_flg%3DPLAN",
    "hotelMinCharge": 10450,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/38783/38783.jpg",
    "userReview": "お客様ファーストで食事も美味しい90点の宿家族経営の旅館は、基本?って思う所が多い中なか、双葉荘はちゃんとお客様ファーストのいい旅館でした。夜は近江牛、朝は地元の佃煮や温泉玉子、海苔、点数をつける…　2026-09-18 06:39:02投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=38783\" class=\"3click\">つづきはこちら</a>",
    "reviewAverage": 4.6,
    "reviewCount": 131,
    "address": "滋賀県彦根市松原町網代口1377",
    "access": "JR琵琶湖線彦根駅下車、タクシー約7分　名神高速道路彦根ＩＣより湖岸方面へ10分 　無料駐車場",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F38783%2F38783.html"
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
          <span className="text-stone-800 font-semibold truncate">薬草スチームサウナ×薬膳温活宿</span>
        </div>
      </div>

      {/* ヒーローヘッダー */}
      <header className="relative bg-emerald-950 text-white py-12 px-4 md:px-8 border-b border-emerald-900">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-800/80 text-emerald-200 text-xs font-bold rounded-full">
            <span>✨ 2026年最新版</span>
            <span>•</span>
            <span>薬草スチームサウナ×薬膳温活宿</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight font-journal-serif leading-tight">
            【2026年】和漢薬草スチームサウナ＆薬膳養生！自然治癒力を高める薬草温活温泉宿5選
          </h1>
          <p className="text-stone-300 text-sm md:text-base leading-relaxed">
            香ばしい和漢ハーブの蒸気に包まれる薬草スチームサウナ。古来より湯治客を癒やしてきた薬草風呂で発汗を促し、旬の生薬と地場野菜を取り入れた本格薬膳料理で体内環境を整える。疲れた現代人の心身を内側から再生する本格温活ステイ。
          </p>
          <div className="pt-2">
            <ShareButtons title="【2026年】和漢薬草スチームサウナ＆薬膳養生！自然治癒力を高める薬草温活温泉宿5選" url="https://croud-travel.pages.dev/organic-medicinal-herb-sauna-detox-stay" />
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
