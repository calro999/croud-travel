import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import SpecialCouponBanner from '@/app/components/SpecialCouponBanner';
import ShareButtons from '@/app/components/ShareButtons';

export const metadata: Metadata = {
  title: '【2026年】滋味あふれる天然猪肉と特製味噌出汁！伝統の「ぼたん鍋」＆里山ジビエ会席宿5選 ｜ 日本全国・旅宿クラウド',
  description: '2026年最新！丹波篠山や奥飛騨の厳選された天然イノシシ肉を美しい牡丹の花のように盛り付け、特製味噌で煮込む絶品ぼたん鍋と名湯の宿5選。',
  keywords: ["ぼたん鍋","ジビエ料理","猪肉","丹波篠山","冬の鍋旅","楽天トラベル"],
  alternates: {
    canonical: 'https://croud-travel.pages.dev/winter-hot-pot-gibier-wild-game-satoyama-stay',
  },
  openGraph: {
    title: '【2026年】滋味あふれる天然猪肉と特製味噌出汁！伝統の「ぼたん鍋」＆里山ジビエ会席宿5選',
    description: '2026年最新！丹波篠山や奥飛騨の厳選された天然イノシシ肉を美しい牡丹の花のように盛り付け、特製味噌で煮込む絶品ぼたん鍋と名湯の宿5選。',
    url: 'https://croud-travel.pages.dev/winter-hot-pot-gibier-wild-game-satoyama-stay',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【2026年】滋味あふれる天然猪肉と特製味噌出汁！伝統の「ぼたん鍋」＆里山ジビエ会席宿5選",
    "description": "2026年最新！丹波篠山や奥飛騨の厳選された天然イノシシ肉を美しい牡丹の花のように盛り付け、特製味噌で煮込む絶品ぼたん鍋と名湯の宿5選。",
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
    "mainEntityOfPage": "https://croud-travel.pages.dev/winter-hot-pot-gibier-wild-game-satoyama-stay"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "天然猪肉ぼたん鍋＆里山ジビエ温泉宿の旅行でおすすめの予約時期やタイミングは？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "人気の日程（連休や週末）は1〜2ヶ月前には満室になることが多いため、早期予約（早割プラン）の利用がおすすめです。また楽天トラベルの「5と0のつく日」キャンペーンを活用すると最大20%オフのクーポンが併用でき、最もお得に予約できます。"
        }
      },
      {
        "@type": "Question",
        "name": "天然猪肉ぼたん鍋＆里山ジビエ温泉宿の宿選びで失敗しないためのポイントは？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "宿泊者レビューのお風呂・お食事・接客評価が4.3以上の宿を選ぶと満足度が非常に高くなります。またアクセス手段（送迎バスの有無など）やプランに含まれる特典を事前に確認しておくと安心です。"
        }
      }
    ]
  };

  const hotels: any[] = [
  {
    "hotelNo": 29695,
    "hotelName": "厚木飯山温泉　元湯旅館",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D29695",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D29695%26f_flg%3DPLAN",
    "hotelMinCharge": 20850,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/29695/29695.jpg",
    "userReview": "3年連続で通うほどお気に入りの美人の湯お墓参りの帰りに、今年も寄らせてもらいました!気づけば3年連続です。大女将さんも女将さんも本当に愛嬌があって、いつも温かく迎えてくださるから、日頃の疲…　2026-08-15 11:38:14投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=29695\" class=\"3click\">つづきはこちら</a>",
    "reviewAverage": 4.63,
    "reviewCount": 404,
    "address": "神奈川県厚木市飯山4916",
    "access": "小田急線本厚木駅よりバスで飯山温泉入口下車徒歩3分/東名厚木ICより厚木方面へ向い国道129号線厚木市立病院前左折10分",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F29695%2F29695.html"
  },
  {
    "hotelNo": 9362,
    "hotelName": "洞川温泉　いろは旅館＜奈良県＞",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D9362",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D9362%26f_flg%3DPLAN",
    "hotelMinCharge": 14500,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/9362/9362.jpg",
    "userReview": "温泉街の風情と料理を満喫、立地も最高昔ながらの温泉街という風情が、とってもよかった。お料理も、美味しく量があり、高齢者には少し多いかなと思いましたが、40代の息子が平らげました。名所も近く、向…　2026-09-15 18:27:11投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=9362\" class=\"3click\">つづきはこちら</a>",
    "reviewAverage": 4.58,
    "reviewCount": 220,
    "address": "奈良県吉野郡天川村洞川248",
    "access": "近鉄　下市口駅より奈良交通バス（洞川温泉行き）終点",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F9362%2F9362.html"
  },
  {
    "hotelNo": 15042,
    "hotelName": "塩田温泉旅館　湯元　うえやま",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D15042",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D15042%26f_flg%3DPLAN",
    "hotelMinCharge": 9900,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/15042/15042.jpg",
    "userReview": "雰囲気抜群の温泉と食事に大満足、また来たい建物の外観、内観ともに雰囲気があり、とても素敵な温泉旅館です。お部屋も大変快適に過ごすことができました。温泉も最高で、食事も大満足です。自信をもっておすす…　2026-09-16 16:59:06投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=15042\" class=\"3click\">つづきはこちら</a>",
    "reviewAverage": 4.5,
    "reviewCount": 215,
    "address": "兵庫県姫路市夢前町塩田287",
    "access": "ＪＲ姫路→神姫バス塩田温泉～前之庄３５分　中国道福崎ＩＣ２０分　山陽道姫路西ＩＣ２５分  中国道夢前スマートＩＣ５分",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F15042%2F15042.html"
  },
  {
    "hotelNo": 19409,
    "hotelName": "薬師湯温泉　旅館　竹屋敷",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D19409",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D19409%26f_flg%3DPLAN",
    "hotelMinCharge": 14600,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/19409/19409.jpg",
    "userReview": "絶景のロケーションとおもてなしに心から癒やされました。",
    "reviewAverage": 4.56,
    "reviewCount": 54,
    "address": "香川県さぬき市多和竹屋敷123-1",
    "access": "高松空港より車で約50分/高松自動車道さぬき志度ICより30分/徳島自動車道脇町ICより30分",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F19409%2F19409.html"
  },
  {
    "hotelNo": 7840,
    "hotelName": "天川・洞川温泉　温泉・名水・後鬼の里　旅館　紀の国屋甚八",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D7840",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D7840%26f_flg%3DPLAN",
    "hotelMinCharge": 13800,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/7840/7840.jpg",
    "userReview": "珍しい食事に大満足、夜の街歩きも最高めずらしいお食事をいただけて満足です!夜に街をぶらぶらしましたが雰囲気がよかったですクチコミの詳細はこちらから　https://review.t…　2026-09-15 19:56:14投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=7840\" class=\"3click\">つづきはこちら</a>",
    "reviewAverage": 4.23,
    "reviewCount": 307,
    "address": "奈良県吉野郡天川村洞川222-1",
    "access": "近鉄下市口駅より奈良交通バス(洞川温泉行)で80分。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F7840%2F7840.html"
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
          <span className="text-stone-800 font-semibold truncate">天然猪肉ぼたん鍋×里山ジビエ宿</span>
        </div>
      </div>

      {/* ヒーローヘッダー */}
      <header className="relative bg-emerald-950 text-white py-12 px-4 md:px-8 border-b border-emerald-900">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-800/80 text-emerald-200 text-xs font-bold rounded-full">
            <span>✨ 2026年最新版</span>
            <span>•</span>
            <span>天然猪肉ぼたん鍋×里山ジビエ宿</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight font-journal-serif leading-tight">
            【2026年】滋味あふれる天然猪肉と特製味噌出汁！伝統の「ぼたん鍋」＆里山ジビエ会席宿5選
          </h1>
          <p className="text-stone-300 text-sm md:text-base leading-relaxed">
            冬の寒さとともに脂が乗って旨味が凝縮される天然イノシシ肉。大皿に牡丹の花のように並べられた美しい霜降り肉を、地元の熟成味噌出汁で煮込む熱々のぼたん鍋。野趣あふれる里山の恵みと体の芯まで温まる名湯で冬の寒さを忘れる美味旅。
          </p>
          <div className="pt-2">
            <ShareButtons title="【2026年】滋味あふれる天然猪肉と特製味噌出汁！伝統の「ぼたん鍋」＆里山ジビエ会席宿5選" url="https://croud-travel.pages.dev/winter-hot-pot-gibier-wild-game-satoyama-stay" />
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
