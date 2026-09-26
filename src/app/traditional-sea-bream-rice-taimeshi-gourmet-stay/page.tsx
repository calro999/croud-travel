import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import SpecialCouponBanner from '@/app/components/SpecialCouponBanner';
import ShareButtons from '@/app/components/ShareButtons';

export const metadata: Metadata = {
  title: '【2026年】愛媛・明石・鳴門の極上天然真鯛！名物「鯛めし」＆鯛しゃぶ会席が自慢の温泉宿5選 ｜ 日本全国・旅宿クラウド',
  description: '2026年最新！宇和島風・松山風の名物鯛めしや、身が引き締まった天然鳴門鯛のお造り・鯛しゃぶを堪能できる瀬戸内の絶景グルメ温泉旅館5選。',
  keywords: ["鯛めし","天然真鯛","鯛しゃぶ","瀬戸内グルメ","海の幸温泉","楽天トラベル"],
  alternates: {
    canonical: 'https://croud-travel.pages.dev/traditional-sea-bream-rice-taimeshi-gourmet-stay',
  },
  openGraph: {
    title: '【2026年】愛媛・明石・鳴門の極上天然真鯛！名物「鯛めし」＆鯛しゃぶ会席が自慢の温泉宿5選',
    description: '2026年最新！宇和島風・松山風の名物鯛めしや、身が引き締まった天然鳴門鯛のお造り・鯛しゃぶを堪能できる瀬戸内の絶景グルメ温泉旅館5選。',
    url: 'https://croud-travel.pages.dev/traditional-sea-bream-rice-taimeshi-gourmet-stay',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【2026年】愛媛・明石・鳴門の極上天然真鯛！名物「鯛めし」＆鯛しゃぶ会席が自慢の温泉宿5選",
    "description": "2026年最新！宇和島風・松山風の名物鯛めしや、身が引き締まった天然鳴門鯛のお造り・鯛しゃぶを堪能できる瀬戸内の絶景グルメ温泉旅館5選。",
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
    "mainEntityOfPage": "https://croud-travel.pages.dev/traditional-sea-bream-rice-taimeshi-gourmet-stay"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "天然真鯛尽くし＆名物鯛めし温泉宿の旅行でおすすめの予約時期やタイミングは？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "人気の日程（連休や週末）は1〜2ヶ月前には満室になることが多いため、早期予約（早割プラン）の利用がおすすめです。また楽天トラベルの「5と0のつく日」キャンペーンを活用すると最大20%オフのクーポンが併用でき、最もお得に予約できます。"
        }
      },
      {
        "@type": "Question",
        "name": "天然真鯛尽くし＆名物鯛めし温泉宿の宿選びで失敗しないためのポイントは？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "宿泊者レビューのお風呂・お食事・接客評価が4.3以上の宿を選ぶと満足度が非常に高くなります。またアクセス手段（送迎バスの有無など）やプランに含まれる特典を事前に確認しておくと安心です。"
        }
      }
    ]
  };

  const hotels: any[] = [
  {
    "hotelNo": 14505,
    "hotelName": "熱海温泉　旅館　立花",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D14505",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D14505%26f_flg%3DPLAN",
    "hotelMinCharge": 12100,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/14505/14505.jpg",
    "userReview": "お風呂は良いが水が有料で食事の配膳が雑お風呂はすごく良かったです。接客は普通。部屋も綺麗で良かったですが水まで有料なところにびっくりです。今まで泊まった旅館で水が有料だったところはなかったので…　2026-09-16 16:54:06投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=14505\" class=\"3click\">つづきはこちら</a>",
    "reviewAverage": 4.15,
    "reviewCount": 525,
    "address": "静岡県熱海市昭和町5-13",
    "access": "東名厚木ＩＣより小田原厚木有料道路経由、国道１３５号で熱海へ／ＪＲ熱海駅",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F14505%2F14505.html"
  },
  {
    "hotelNo": 39597,
    "hotelName": "浜詰　夕日ヶ浦温泉　旅館　夕日ヶ浦",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D39597",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D39597%26f_flg%3DPLAN",
    "hotelMinCharge": 7700,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/39597/39597.jpg",
    "userReview": "クチコミの詳細はこちらから　https://review.travel.rakuten.co.jp/hotel/voice/39597?reviewId=33123479159571　2026-08-26 19:39:45投稿",
    "reviewAverage": 4.22,
    "reviewCount": 386,
    "address": "京都府京丹後市網野町浜詰351",
    "access": "京都丹後鉄道夕日ヶ浦木津温泉駅（送迎有）／豊岡自動車道　但馬空港ＩＣより５０分／京都縦貫道　丹後大宮ＩＣより４０分",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F39597%2F39597.html"
  },
  {
    "hotelNo": 144560,
    "hotelName": "クリスタル旅館　白浜　灯りや",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D144560",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D144560%26f_flg%3DPLAN",
    "hotelMinCharge": 3040,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/144560/144560.jpg",
    "userReview": "白良浜に近く朝食も最高、来年もまた行きたいここ数年、夏に利用させて頂いてます。白良浜からも近く海から出ても直ぐですし、ハマギンザへも歩いて直ぐ。部屋も広くてキレイ。スタッフの方々の接客も気持ちが良…　2026-09-19 22:52:00投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=144560\" class=\"3click\">つづきはこちら</a>",
    "reviewAverage": 4.16,
    "reviewCount": 339,
    "address": "和歌山県西牟婁郡白浜町2411-1",
    "access": "JR白浜駅より車で約10分／南紀白浜空港より車で約6分／アドベンチャーワールドより車で約10分",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F144560%2F144560.html"
  },
  {
    "hotelNo": 76822,
    "hotelName": "割烹旅館　寿美礼",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D76822",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D76822%26f_flg%3DPLAN",
    "hotelMinCharge": 8650,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/76822/76822.jpg",
    "userReview": "ふく料理と骨酒が最高、お風呂も充実朝夕共にお食事がふく料理でとっても美味しかったです。お酒の種類も色々あり選ぶ楽しみもあります。ふくの骨酒最高でした!貸切風呂や食事で宿を決めたい方に是非泊まってほ…　2026-09-18 22:59:10投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=76822\" class=\"3click\">つづきはこちら</a>",
    "reviewAverage": 4.54,
    "reviewCount": 174,
    "address": "山口県下関市竹崎町3-13-23",
    "access": "ＪＲ　下関駅より徒歩にて3分",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F76822%2F76822.html"
  },
  {
    "hotelNo": 12577,
    "hotelName": "温海温泉　萬国屋",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D12577",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D12577%26f_flg%3DPLAN",
    "hotelMinCharge": 11000,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/12577/12577.jpg",
    "userReview": "フロントの心温まる対応と温泉に大満足旅館に到着して同伴の方が乗り物酔いで体調崩してしまい困っていたところ、フロントの方に酔い止め薬を頂いてほんと助かりました。良いお湯の温泉で温まったうえに心温まる…　2026-09-18 22:48:18投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=12577\" class=\"3click\">つづきはこちら</a>",
    "reviewAverage": 4.59,
    "reviewCount": 2668,
    "address": "山形県鶴岡市湯温海丁1",
    "access": "日本海東北自動車道 あつみ温泉ICから車5分/ＪＲ羽越本線 あつみ温泉駅からタクシー５分/庄内空港から車40分",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F12577%2F12577.html"
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
          <span className="text-stone-800 font-semibold truncate">名物鯛めし×天然真鯛会席宿</span>
        </div>
      </div>

      {/* ヒーローヘッダー */}
      <header className="relative bg-emerald-950 text-white py-12 px-4 md:px-8 border-b border-emerald-900">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-800/80 text-emerald-200 text-xs font-bold rounded-full">
            <span>✨ 2026年最新版</span>
            <span>•</span>
            <span>名物鯛めし×天然真鯛会席宿</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight font-journal-serif leading-tight">
            【2026年】愛媛・明石・鳴門の極上天然真鯛！名物「鯛めし」＆鯛しゃぶ会席が自慢の温泉宿5選
          </h1>
          <p className="text-stone-300 text-sm md:text-base leading-relaxed">
            激しい潮流に揉まれて身が引き締まった最高峰の天然真鯛。土鍋でふっくら炊き上げる鯛めし、新鮮な鯛の刺身に出汁卵を絡める宇和島鯛めし、サッと出汁にくぐらせる鯛しゃぶ。瀬戸内海の多島美を望む露天風呂とともに味わう至高の魚グルメステイ。
          </p>
          <div className="pt-2">
            <ShareButtons title="【2026年】愛媛・明石・鳴門の極上天然真鯛！名物「鯛めし」＆鯛しゃぶ会席が自慢の温泉宿5選" url="https://croud-travel.pages.dev/traditional-sea-bream-rice-taimeshi-gourmet-stay" />
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
