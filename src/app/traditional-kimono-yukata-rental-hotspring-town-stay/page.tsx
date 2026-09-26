import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import SpecialCouponBanner from '@/app/components/SpecialCouponBanner';
import ShareButtons from '@/app/components/ShareButtons';

export const metadata: Metadata = {
  title: '【2026年】選べる色浴衣とカランコロン下駄歩き！風情ある温泉街湯めぐりが楽しい名宿5選 ｜ 日本全国・旅宿クラウド',
  description: '2026年最新！城崎温泉・草津・道後・黒川など、数十種類の色浴衣レンタルや外湯めぐりパス付きで街歩きが満喫できる女子旅・カップルおすすめ宿5選。',
  keywords: ["色浴衣","湯めぐり","城崎温泉","草津温泉","温泉街歩き","楽天トラベル"],
  alternates: {
    canonical: 'https://croud-travel.pages.dev/traditional-kimono-yukata-rental-hotspring-town-stay',
  },
  openGraph: {
    title: '【2026年】選べる色浴衣とカランコロン下駄歩き！風情ある温泉街湯めぐりが楽しい名宿5選',
    description: '2026年最新！城崎温泉・草津・道後・黒川など、数十種類の色浴衣レンタルや外湯めぐりパス付きで街歩きが満喫できる女子旅・カップルおすすめ宿5選。',
    url: 'https://croud-travel.pages.dev/traditional-kimono-yukata-rental-hotspring-town-stay',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【2026年】選べる色浴衣とカランコロン下駄歩き！風情ある温泉街湯めぐりが楽しい名宿5選",
    "description": "2026年最新！城崎温泉・草津・道後・黒川など、数十種類の色浴衣レンタルや外湯めぐりパス付きで街歩きが満喫できる女子旅・カップルおすすめ宿5選。",
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
    "mainEntityOfPage": "https://croud-travel.pages.dev/traditional-kimono-yukata-rental-hotspring-town-stay"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "選べる色浴衣＆外湯めぐり温泉街の宿の旅行でおすすめの予約時期やタイミングは？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "人気の日程（連休や週末）は1〜2ヶ月前には満室になることが多いため、早期予約（早割プラン）の利用がおすすめです。また楽天トラベルの「5と0のつく日」キャンペーンを活用すると最大20%オフのクーポンが併用でき、最もお得に予約できます。"
        }
      },
      {
        "@type": "Question",
        "name": "選べる色浴衣＆外湯めぐり温泉街の宿の宿選びで失敗しないためのポイントは？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "宿泊者レビューのお風呂・お食事・接客評価が4.3以上の宿を選ぶと満足度が非常に高くなります。またアクセス手段（送迎バスの有無など）やプランに含まれる特典を事前に確認しておくと安心です。"
        }
      }
    ]
  };

  const hotels: any[] = [
  {
    "hotelNo": 28425,
    "hotelName": "伊豆熱川温泉　六つの貸切風呂を湯めぐり　ふたりの湯宿　湯花満開",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D28425",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D28425%26f_flg%3DPLAN",
    "hotelMinCharge": 10500,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/28425/28425.jpg",
    "userReview": "食事の量とかは満足のいくものでしたが、少し甘さが口の中に残るのが気になりました。味の好みは人それぞれですので...お風呂は、無料の貸し切り風呂が6箇所あり、どれも趣きが違い堪能出来ました。…　2026-09-18 07:23:54投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=28425\" class=\"3click\">つづきはこちら</a>",
    "reviewAverage": 4.55,
    "reviewCount": 775,
    "address": "静岡県賀茂郡東伊豆町奈良本987-1",
    "access": "伊豆急行線・伊豆熱川温泉駅／Ｒ１３５を通り、熱海から約１時間。伊豆熱川駅から海へ徒歩３～５分。当館海側に無料駐車場あり。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F28425%2F28425.html"
  },
  {
    "hotelNo": 31173,
    "hotelName": "伊豆長岡温泉　湯めぐりの宿　吉春",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D31173",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D31173%26f_flg%3DPLAN",
    "hotelMinCharge": 14300,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/31173/31173.jpg",
    "userReview": "素敵なお宿でした!部屋→宿にいる時間が短いこともありコスパ重視で、一番お安いお部屋に泊まりましたが、今まで泊まったお部屋の中でもとても広く、子ども2人いましたが快適に過ごすことができました。畳なの…　2026-09-14 11:41:27投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=31173\" class=\"3click\">つづきはこちら</a>",
    "reviewAverage": 4.55,
    "reviewCount": 1688,
    "address": "静岡県伊豆の国市長岡989-10",
    "access": "(電車)伊豆箱根鉄道伊豆長岡駅下車 バス10分  (車)沼津IC～伊豆縦貫道～長岡北IC-414号線 25分",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F31173%2F31173.html"
  },
  {
    "hotelNo": 128586,
    "hotelName": "湯田川温泉　ますや旅館",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D128586",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D128586%26f_flg%3DPLAN",
    "hotelMinCharge": 7260,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/128586/128586.jpg",
    "userReview": "2時から翌日11時までゆっくり満喫!2時から翌日11時までゆっくり出来て最高です。直近、宿側の都合で姉妹旅館の九兵衛別館珠玉やさんに変更となりましたが立地的に九兵衛さん、ますやさんの間にあり全…　2026-09-07 23:22:55投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=128586\" class=\"3click\">つづきはこちら</a>",
    "reviewAverage": 4.59,
    "reviewCount": 60,
    "address": "山形県鶴岡市湯田川乙63",
    "access": "ＪＲ鶴岡駅から庄内交通バス乗車「湯田川温泉」下車徒歩３分",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F128586%2F128586.html"
  },
  {
    "hotelNo": 40786,
    "hotelName": "嬉野温泉　旅館　吉田屋",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D40786",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D40786%26f_flg%3DPLAN",
    "hotelMinCharge": 17600,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/40786/40786.jpg",
    "userReview": "食事も温泉も最高、また必ず行きたい宿夕食、朝食どちらも本当においしかったです。味が本当に良い主人は夕食で追加して頼んだだし巻き卵が今まで食べた中で1番美味しいと感動してました。どの料理も美味し過ぎ…　2026-09-19 20:36:38投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=40786\" class=\"3click\">つづきはこちら</a>",
    "reviewAverage": 4.32,
    "reviewCount": 1232,
    "address": "佐賀県嬉野市嬉野町岩屋川内甲379",
    "access": "博多駅～70分/長崎空港～車40分/SAGAアリーナ～車50分/御船山らかんの湯～車20分/ハウステンボス～車40分",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F40786%2F40786.html"
  },
  {
    "hotelNo": 140962,
    "hotelName": "城崎温泉　春日屋旅館",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D140962",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D140962%26f_flg%3DPLAN",
    "hotelMinCharge": 9900,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/140962/140962.jpg",
    "userReview": "絶景のロケーションとおもてなしに心から癒やされました。",
    "reviewAverage": 4,
    "reviewCount": 6,
    "address": "兵庫県豊岡市城崎町湯島601",
    "access": "城崎温泉駅より徒歩にて10分",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F140962%2F140962.html"
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
          <span className="text-stone-800 font-semibold truncate">選べる色浴衣×外湯めぐり街歩き</span>
        </div>
      </div>

      {/* ヒーローヘッダー */}
      <header className="relative bg-emerald-950 text-white py-12 px-4 md:px-8 border-b border-emerald-900">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-800/80 text-emerald-200 text-xs font-bold rounded-full">
            <span>✨ 2026年最新版</span>
            <span>•</span>
            <span>選べる色浴衣×外湯めぐり街歩き</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight font-journal-serif leading-tight">
            【2026年】選べる色浴衣とカランコロン下駄歩き！風情ある温泉街湯めぐりが楽しい名宿5選
          </h1>
          <p className="text-stone-300 text-sm md:text-base leading-relaxed">
            お気に入りの色浴衣と下駄を選んで、柳並木や温泉情緒あふれる街並みへお出かけ。射的や足湯カフェ、温泉まんじゅうの食べ歩きを楽しみ、複数の外湯を巡る贅沢な休日。写真映えも抜群の温泉街ステイを心ゆくまで満喫できる宿をピックアップ。
          </p>
          <div className="pt-2">
            <ShareButtons title="【2026年】選べる色浴衣とカランコロン下駄歩き！風情ある温泉街湯めぐりが楽しい名宿5選" url="https://croud-travel.pages.dev/traditional-kimono-yukata-rental-hotspring-town-stay" />
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
