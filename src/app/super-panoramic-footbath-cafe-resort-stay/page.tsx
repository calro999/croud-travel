import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import SpecialCouponBanner from '@/app/components/SpecialCouponBanner';
import ShareButtons from '@/app/components/ShareButtons';

export const metadata: Metadata = {
  title: '【2026年】絶景足湯カフェ＆テラスBAR！ぽかぽか足湯とドリンクを楽しむ展望リゾート5選 ｜ 日本全国・旅宿クラウド',
  description: '2026年最新！海や山、満天の星を眺めながら足湯に浸かり、クラフトビールやハーブティーを楽しめる絶景足湯カフェ＆バー併設の人気ホテル5選。',
  keywords: ["足湯カフェ","足湯バー","展望テラス","絶景ホテル","温泉リゾート","楽天トラベル"],
  alternates: {
    canonical: 'https://croud-travel.pages.dev/super-panoramic-footbath-cafe-resort-stay',
  },
  openGraph: {
    title: '【2026年】絶景足湯カフェ＆テラスBAR！ぽかぽか足湯とドリンクを楽しむ展望リゾート5選',
    description: '2026年最新！海や山、満天の星を眺めながら足湯に浸かり、クラフトビールやハーブティーを楽しめる絶景足湯カフェ＆バー併設の人気ホテル5選。',
    url: 'https://croud-travel.pages.dev/super-panoramic-footbath-cafe-resort-stay',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【2026年】絶景足湯カフェ＆テラスBAR！ぽかぽか足湯とドリンクを楽しむ展望リゾート5選",
    "description": "2026年最新！海や山、満天の星を眺めながら足湯に浸かり、クラフトビールやハーブティーを楽しめる絶景足湯カフェ＆バー併設の人気ホテル5選。",
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
    "mainEntityOfPage": "https://croud-travel.pages.dev/super-panoramic-footbath-cafe-resort-stay"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "絶景足湯カフェ＆足湯テラスバー付きホテルの旅行でおすすめの予約時期やタイミングは？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "人気の日程（連休や週末）は1〜2ヶ月前には満室になることが多いため、早期予約（早割プラン）の利用がおすすめです。また楽天トラベルの「5と0のつく日」キャンペーンを活用すると最大20%オフのクーポンが併用でき、最もお得に予約できます。"
        }
      },
      {
        "@type": "Question",
        "name": "絶景足湯カフェ＆足湯テラスバー付きホテルの宿選びで失敗しないためのポイントは？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "宿泊者レビューのお風呂・お食事・接客評価が4.3以上の宿を選ぶと満足度が非常に高くなります。またアクセス手段（送迎バスの有無など）やプランに含まれる特典を事前に確認しておくと安心です。"
        }
      }
    ]
  };

  const hotels: any[] = [
  {
    "hotelNo": 146144,
    "hotelName": "湯田中渋温泉郷　ホテル水明館（伊東園ホテルズ）",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D146144",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D146144%26f_flg%3DPLAN",
    "hotelMinCharge": 5698,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/146144/146144.jpg",
    "userReview": "隅々まで清潔に保たれていました清潔に保たれてました。クチコミの詳細はこちらから　https://review.travel.rakuten.co.jp/hotel/voice/146144?r…　2026-09-18 11:11:56投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=146144\" class=\"3click\">つづきはこちら</a>",
    "reviewAverage": 3.81,
    "reviewCount": 755,
    "address": "長野県下高井郡山ノ内町平穏2941",
    "access": "長野電鉄　湯田中駅より徒歩にて約5分",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F146144%2F146144.html"
  },
  {
    "hotelNo": 180101,
    "hotelName": "湯川テラス",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D180101",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D180101%26f_flg%3DPLAN",
    "hotelMinCharge": 19935,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/180101/180101.jpg",
    "userReview": "絶景のロケーションとおもてなしに心から癒やされました。",
    "reviewAverage": 4.38,
    "reviewCount": 35,
    "address": "群馬県吾妻郡草津町草津375",
    "access": "JR長野原草津口下車、路線バス25分",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F180101%2F180101.html"
  },
  {
    "hotelNo": 172310,
    "hotelName": "都ホテル博多",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D172310",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D172310%26f_flg%3DPLAN",
    "hotelMinCharge": 17800,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/172310/172310.jpg",
    "userReview": "駅から近くて田舎者には分かり易くて大変良かったです。ウェルカムドリンクも最高でした。涼しくなってからも利用したいと思います。クチコミの詳細はこちらから　https://review.tra…　2026-09-16 17:10:32投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=172310\" class=\"3click\">つづきはこちら</a>",
    "reviewAverage": 4.61,
    "reviewCount": 1159,
    "address": "福岡県福岡市博多区博多駅東2-1-1",
    "access": "博多駅直結！徒歩約１分。＜東７番出口＞福岡空港から地下鉄で約７分、車で約15分。一歩足を踏み入れたらもうそこはリゾート！",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F172310%2F172310.html"
  },
  {
    "hotelNo": 70310,
    "hotelName": "休暇村　岩手網張温泉",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D70310",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D70310%26f_flg%3DPLAN",
    "hotelMinCharge": 15600,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/70310/70310.jpg",
    "userReview": "Excellent View テラスや食堂からの眺めが素晴らしい。温泉も泉質が良く、気持ち良かったです。クチコミの詳細はこちらから　https://review.travel.rakute…　2026-09-19 18:09:56投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=70310\" class=\"3click\">つづきはこちら</a>",
    "reviewAverage": 4.44,
    "reviewCount": 534,
    "address": "岩手県岩手郡雫石町網張温泉",
    "access": "ＪＲ　盛岡駅⇔網張温泉　宿泊者専用無料シャトルバス　※要予約",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F70310%2F70310.html"
  },
  {
    "hotelNo": 179785,
    "hotelName": "伊豆ホテル　リゾート＆スパ",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D179785",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D179785%26f_flg%3DPLAN",
    "hotelMinCharge": 42500,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/179785/179785.jpg",
    "userReview": "スタッフの対応と朝食は最高、夕食は改善の余地あり台風が近づいていてお天気が心配でしたが、晴れ間があり景色を楽しむことができました。スタッフの方々は皆さま大変丁寧で感じがよかったです。ウェルカム…　2026-08-13 16:47:28投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=179785\" class=\"3click\">つづきはこちら</a>",
    "reviewAverage": 4.61,
    "reviewCount": 77,
    "address": "静岡県賀茂郡東伊豆町奈良本1457-30　リゾートパーク伊豆あたがわ別荘地内",
    "access": "【電車】伊豆熱川駅より送迎車（予約制）にて約15分　【お車】国道135号からの道は公式HPのアクセス情報をご確認ください",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F179785%2F179785.html"
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
          <span className="text-stone-800 font-semibold truncate">絶景足湯カフェ×テラスBAR</span>
        </div>
      </div>

      {/* ヒーローヘッダー */}
      <header className="relative bg-emerald-950 text-white py-12 px-4 md:px-8 border-b border-emerald-900">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-800/80 text-emerald-200 text-xs font-bold rounded-full">
            <span>✨ 2026年最新版</span>
            <span>•</span>
            <span>絶景足湯カフェ×テラスBAR</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight font-journal-serif leading-tight">
            【2026年】絶景足湯カフェ＆テラスBAR！ぽかぽか足湯とドリンクを楽しむ展望リゾート5選
          </h1>
          <p className="text-stone-300 text-sm md:text-base leading-relaxed">
            心地よい温もりに足を浸しながら、目の前に広がる水平線やアルプスの山並みを眺める至福の時間。オープンテラスの足湯カフェで味わう特製スイーツや地ビール、夜はライトアップされた足湯バーでカクテルを片手に星空観賞ができるリゾートホテル。
          </p>
          <div className="pt-2">
            <ShareButtons title="【2026年】絶景足湯カフェ＆テラスBAR！ぽかぽか足湯とドリンクを楽しむ展望リゾート5選" url="https://croud-travel.pages.dev/super-panoramic-footbath-cafe-resort-stay" />
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
