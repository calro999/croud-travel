import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import SpecialCouponBanner from '@/app/components/SpecialCouponBanner';
import ShareButtons from '@/app/components/ShareButtons';

export const metadata: Metadata = {
  title: '【2026年】ぷりぷり甘い極上伊勢海老！お造り・鬼殻焼き・伊勢海老出汁雑炊の名宿5選 ｜ 日本全国・旅宿クラウド',
  description: '2026年最新！伊勢志摩・南紀・伊豆で水揚げされた活伊勢海老のお造りや香ばしい鬼殻焼き、濃厚な味噌汁・雑炊を堪能できる贅沢グルメ温泉宿5選。',
  keywords: ["伊勢海老","鬼殻焼き","伊勢志摩温泉","南紀白浜","海の幸会席","楽天トラベル"],
  alternates: {
    canonical: 'https://croud-travel.pages.dev/winter-ise-ebi-lobster-luxury-gourmet-stay',
  },
  openGraph: {
    title: '【2026年】ぷりぷり甘い極上伊勢海老！お造り・鬼殻焼き・伊勢海老出汁雑炊の名宿5選',
    description: '2026年最新！伊勢志摩・南紀・伊豆で水揚げされた活伊勢海老のお造りや香ばしい鬼殻焼き、濃厚な味噌汁・雑炊を堪能できる贅沢グルメ温泉宿5選。',
    url: 'https://croud-travel.pages.dev/winter-ise-ebi-lobster-luxury-gourmet-stay',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【2026年】ぷりぷり甘い極上伊勢海老！お造り・鬼殻焼き・伊勢海老出汁雑炊の名宿5選",
    "description": "2026年最新！伊勢志摩・南紀・伊豆で水揚げされた活伊勢海老のお造りや香ばしい鬼殻焼き、濃厚な味噌汁・雑炊を堪能できる贅沢グルメ温泉宿5選。",
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
    "mainEntityOfPage": "https://croud-travel.pages.dev/winter-ise-ebi-lobster-luxury-gourmet-stay"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "特大活伊勢海老尽くし＆美食温泉宿の旅行でおすすめの予約時期やタイミングは？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "人気の日程（連休や週末）は1〜2ヶ月前には満室になることが多いため、早期予約（早割プラン）の利用がおすすめです。また楽天トラベルの「5と0のつく日」キャンペーンを活用すると最大20%オフのクーポンが併用でき、最もお得に予約できます。"
        }
      },
      {
        "@type": "Question",
        "name": "特大活伊勢海老尽くし＆美食温泉宿の宿選びで失敗しないためのポイントは？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "宿泊者レビューのお風呂・お食事・接客評価が4.3以上の宿を選ぶと満足度が非常に高くなります。またアクセス手段（送迎バスの有無など）やプランに含まれる特典を事前に確認しておくと安心です。"
        }
      }
    ]
  };

  const hotels: any[] = [
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
    "hotelNo": 12599,
    "hotelName": "湯の山温泉　旅館寿亭",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D12599",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D12599%26f_flg%3DPLAN",
    "hotelMinCharge": 12650,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/12599/12599.jpg",
    "userReview": "素晴らしい景色と趣ある空間、食事も絶品部屋からの景色が素晴らしいです。食事も凝った内容で量が丁度いい感じです。趣がある宿です。クチコミの詳細はこちらから　https://review.trav…　2026-09-19 19:13:47投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=12599\" class=\"3click\">つづきはこちら</a>",
    "reviewAverage": 4.62,
    "reviewCount": 1444,
    "address": "三重県三重郡菰野町菰野8585",
    "access": "【車】新名神：菰野ＩＣ（※ＥＴＣ専用）約１０分　東名阪：四日市ＩＣ約２５分【電車】湯の山温泉駅から無料送迎（約１０分）",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F12599%2F12599.html"
  },
  {
    "hotelNo": 15864,
    "hotelName": "信州別所温泉　玉屋旅館",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D15864",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D15864%26f_flg%3DPLAN",
    "hotelMinCharge": 30800,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/15864/15864.jpg",
    "userReview": "部屋付き温泉と豪華な食事で大満足部屋に温泉がひいてあって、いつでも温泉を楽しめました。食事も豪華でした。値段分の価値を感じることができました。クチコミの詳細はこちらから　https://rev…　2026-09-16 16:22:28投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=15864\" class=\"3click\">つづきは���ちら</a>",
    "reviewAverage": 4.78,
    "reviewCount": 666,
    "address": "長野県上田市別所温泉227",
    "access": "北陸新幹線上田駅乗り換え、別所温泉駅より徒歩7分（14時～17時は無料送迎バス有）、上信越道「上田菅平IC」から車30分",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F15864%2F15864.html"
  },
  {
    "hotelNo": 31822,
    "hotelName": "いわき湯本温泉　吹の湯旅館",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D31822",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D31822%26f_flg%3DPLAN",
    "hotelMinCharge": 8800,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/31822/31822.jpg",
    "userReview": "温泉の泉質が最高、食事も景色も大満足歴史がある宿、温泉の泉質が最高でした!!食事も高齢者には丁度良い量で美味しくいただきました。お部屋は角部屋で自然の景色で癒されました。また紅葉の季節にう…　2026-09-16 14:25:41投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=31822\" class=\"3click\">つづきはこちら</a>",
    "reviewAverage": 4.4,
    "reviewCount": 281,
    "address": "福島県いわき市常磐湯本町吹谷48",
    "access": "ＪＲ常磐線　湯本駅よりタクシー５分／常磐自動車道　湯本ＩＣより約１５分",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F31822%2F31822.html"
  },
  {
    "hotelNo": 54665,
    "hotelName": "熱海温泉　さくらや旅館",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D54665",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D54665%26f_flg%3DPLAN",
    "hotelMinCharge": 18150,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/54665/54665.jpg",
    "userReview": "食事は美味しかったが接客にがっかり古さはありますが清潔感は保たれています。部屋はリノベーションされていてきれいでしたが、ソファがいかにも古くて気になりました。お食事は美味しく、夜ごはんはお…　2026-08-28 09:12:54投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=54665\" class=\"3click\">つづきはこちら</a>",
    "reviewAverage": 4.37,
    "reviewCount": 717,
    "address": "静岡県熱海市東海岸町9-11",
    "access": "ＪＲ　熱海駅から徒歩５分　",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F54665%2F54665.html"
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
          <span className="text-stone-800 font-semibold truncate">特大活伊勢海老×極上鬼殻焼き会席</span>
        </div>
      </div>

      {/* ヒーローヘッダー */}
      <header className="relative bg-emerald-950 text-white py-12 px-4 md:px-8 border-b border-emerald-900">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-800/80 text-emerald-200 text-xs font-bold rounded-full">
            <span>✨ 2026年最新版</span>
            <span>•</span>
            <span>特大活伊勢海老×極上鬼殻焼き会席</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight font-journal-serif leading-tight">
            【2026年】ぷりぷり甘い極上伊勢海老！お造り・鬼殻焼き・伊勢海老出汁雑炊の名宿5選
          </h1>
          <p className="text-stone-300 text-sm md:text-base leading-relaxed">
            透き通るような身の甘みと弾力ある歯ごたえがたまらない活伊勢海老のお造り。炭火で香ばしく焼き上げる鬼殻焼き、頭から溢れ出る濃厚な海老味噌の旨味を吸い尽くす締めのお雑炊。海の王様・伊勢海老を余すところなく味わう贅沢な美食旅。
          </p>
          <div className="pt-2">
            <ShareButtons title="【2026年】ぷりぷり甘い極上伊勢海老！お造り・鬼殻焼き・伊勢海老出汁雑炊の名宿5選" url="https://croud-travel.pages.dev/winter-ise-ebi-lobster-luxury-gourmet-stay" />
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
