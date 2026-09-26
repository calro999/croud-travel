import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import SpecialCouponBanner from '@/app/components/SpecialCouponBanner';
import ShareButtons from '@/app/components/ShareButtons';

export const metadata: Metadata = {
  title: '【2026年】駿河湾の宝石！サクサク桜えびかき揚げ＆獲れたて生しらす会席の温泉宿5選 ｜ 日本全国・旅宿クラウド',
  description: '2026年最新！静岡・由比港や用宗港で水揚げされた新鮮な生桜えび・生しらすや香ばしいかき揚げ、富士山を望む絶景温泉を満喫できる名宿5選。',
  keywords: ["桜えび","生しらす","駿河湾グルメ","富士山ビュー","静岡温泉","楽天トラベル"],
  alternates: {
    canonical: 'https://croud-travel.pages.dev/traditional-sakura-ebi-shirasu-suruga-bay-stay',
  },
  openGraph: {
    title: '【2026年】駿河湾の宝石！サクサク桜えびかき揚げ＆獲れたて生しらす会席の温泉宿5選',
    description: '2026年最新！静岡・由比港や用宗港で水揚げされた新鮮な生桜えび・生しらすや香ばしいかき揚げ、富士山を望む絶景温泉を満喫できる名宿5選。',
    url: 'https://croud-travel.pages.dev/traditional-sakura-ebi-shirasu-suruga-bay-stay',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【2026年】駿河湾の宝石！サクサク桜えびかき揚げ＆獲れたて生しらす会席の温泉宿5選",
    "description": "2026年最新！静岡・由比港や用宗港で水揚げされた新鮮な生桜えび・生しらすや香ばしいかき揚げ、富士山を望む絶景温泉を満喫できる名宿5選。",
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
    "mainEntityOfPage": "https://croud-travel.pages.dev/traditional-sakura-ebi-shirasu-suruga-bay-stay"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "駿河湾桜えび＆生しらすグルメ温泉宿の旅行でおすすめの予約時期やタイミングは？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "人気の日程（連休や週末）は1〜2ヶ月前には満室になることが多いため、早期予約（早割プラン）の利用がおすすめです。また楽天トラベルの「5と0のつく日」キャンペーンを活用すると最大20%オフのクーポンが併用でき、最もお得に予約できます。"
        }
      },
      {
        "@type": "Question",
        "name": "駿河湾桜えび＆生しらすグルメ温泉宿の宿選びで失敗しないためのポイントは？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "宿泊者レビューのお風呂・お食事・接客評価が4.3以上の宿を選ぶと満足度が非常に高くなります。またアクセス手段（送迎バスの有無など）やプランに含まれる特典を事前に確認しておくと安心です。"
        }
      }
    ]
  };

  const hotels: any[] = [
  {
    "hotelNo": 16668,
    "hotelName": "熱海温泉　古屋旅館",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D16668",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D16668%26f_flg%3DPLAN",
    "hotelMinCharge": 38280,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/16668/16668.jpg",
    "userReview": "母との旅行で部屋食と露天風呂を満喫脚の悪い母との旅行だったため、朝夕ともに部屋食で、露天風呂付きのお部屋という点に魅力を感じ、こちらにお世話になりました。結果、こちらを選んで大正解でした。…　2026-09-17 17:10:33投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=16668\" class=\"3click\">つづきはこちら</a>",
    "reviewAverage": 4.86,
    "reviewCount": 571,
    "address": "静岡県熱海市東海岸町5-24",
    "access": "ＪＲ熱海駅からタクシーで５分。徒歩１３分。熱海サンビーチまでは徒歩３分♪",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F16668%2F16668.html"
  },
  {
    "hotelNo": 7960,
    "hotelName": "料理旅館わたなべ",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D7960",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D7960%26f_flg%3DPLAN",
    "hotelMinCharge": 8250,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/7960/7960.jpg",
    "userReview": "個室での食事と広いお部屋で大満足!家族4人で宿泊しました。夕食は家族だけで食べられる個室のようなところで、順番に運んでいただいたのですが、大好きなお刺身はもちろんどれもとっても美味しかったです…　2026-08-21 17:23:50投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=7960\" class=\"3click\">つづきはこちら</a>",
    "reviewAverage": 3.88,
    "reviewCount": 126,
    "address": "愛知県名古屋市千種区千種2-1-17",
    "access": "◆名古屋駅より地下鉄＋徒歩で２０分（地下鉄東山線「千種駅」下車徒歩１０分）　◆名古屋高速１号線吹上インターから降りてすぐ",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F7960%2F7960.html"
  },
  {
    "hotelNo": 2974,
    "hotelName": "縄文のふる里　大湯温泉　ホテル鹿角",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D2974",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D2974%26f_flg%3DPLAN",
    "hotelMinCharge": 6000,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/2974/2974.jpg",
    "userReview": "建物は古いが居心地が良く食事も美味しい少し建物は古いけれど、居心地が良かったです。食事も美味しかったです。クチコミの詳細はこちらから　https://review.travel.rakut…　2026-09-19 16:41:37投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=2974\" class=\"3click\">つづきはこちら</a>",
    "reviewAverage": 4.17,
    "reviewCount": 1517,
    "address": "秋田県鹿角市十和田大湯字中谷地５－１",
    "access": "■十和田湖より車で30分■ＪＲ花輪線十和田南駅から車で１２分■東北道十和田ＩＣから国道１０３号線を十和田湖方面へ１２分",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F2974%2F2974.html"
  },
  {
    "hotelNo": 17912,
    "hotelName": "さぎの湯温泉　さぎの湯荘",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D17912",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D17912%26f_flg%3DPLAN",
    "hotelMinCharge": 20900,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/17912/17912.jpg",
    "userReview": "おもてなしの接客からお食事、温泉、客室まで全てにおいて完璧でした。非常に快適な宿泊になりました、ありがとうございます。急遽予約しての宿泊で、前後の移動もありバタバタとした宿泊になってしまいまし…　2026-09-19 19:20:56投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=17912\" class=\"3click\">つづきはこちら</a>",
    "reviewAverage": 4.74,
    "reviewCount": 769,
    "address": "島根県安来市古川町478-1",
    "access": "ＪＲ安来駅よりバスにて１５分／山陰道安来ＩＣより１０分",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F17912%2F17912.html"
  },
  {
    "hotelNo": 192089,
    "hotelName": "箱根リトリート　ｖｉｌｌａ　１／ｆ",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D192089",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D192089%26f_flg%3DPLAN",
    "hotelMinCharge": 33892,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/192089/192089.jpg",
    "userReview": "絶景のロケーションとおもてなしに心から癒やされました。",
    "reviewAverage": 4.4,
    "reviewCount": 2,
    "address": "神奈川県足柄下郡箱根町仙石原1286-116",
    "access": "小田原駅から、 バスで約４０分、  「俵石・ガラスの森」バス停下車、徒歩約５分",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F192089%2F192089.html"
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
          <span className="text-stone-800 font-semibold truncate">桜えびかき揚げ×生しらす会席宿</span>
        </div>
      </div>

      {/* ヒーローヘッダー */}
      <header className="relative bg-emerald-950 text-white py-12 px-4 md:px-8 border-b border-emerald-900">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-800/80 text-emerald-200 text-xs font-bold rounded-full">
            <span>✨ 2026年最新版</span>
            <span>•</span>
            <span>桜えびかき揚げ×生しらす会席宿</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight font-journal-serif leading-tight">
            【2026年】駿河湾の宝石！サクサク桜えびかき揚げ＆獲れたて生しらす会席の温泉宿5選
          </h1>
          <p className="text-stone-300 text-sm md:text-base leading-relaxed">
            日本で唯一駿河湾でのみ水揚げされる「海の宝石」桜えび。甘み際立つ生の桜えびやサクサクのかき揚げ、朝獲れのぷりぷり生しらす丼。富士山と駿河湾のパノラマを望む温泉露天風呂とともに味わう、静岡ならではの絶品海の恵み旅。
          </p>
          <div className="pt-2">
            <ShareButtons title="【2026年】駿河湾の宝石！サクサク桜えびかき揚げ＆獲れたて生しらす会席の温泉宿5選" url="https://croud-travel.pages.dev/traditional-sakura-ebi-shirasu-suruga-bay-stay" />
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
