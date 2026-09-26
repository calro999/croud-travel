import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import SpecialCouponBanner from '@/app/components/SpecialCouponBanner';
import ShareButtons from '@/app/components/ShareButtons';

export const metadata: Metadata = {
  title: '【2026年】天然の清流へダイブ！森林バレルサウナ＆天然川水風呂で極上のととのい宿5選 ｜ 日本全国・旅宿クラウド',
  description: '2026年最新！薪サウナでアツアツに温まった後、目の前を流れる雪解け水の清流へ飛び込む究極の水風呂体験と森林外気浴が楽しめるサウナ名宿5選。',
  keywords: ["バレルサウナ","清流ダイブ","天然水風呂","薪サウナ","究極のととのい","楽天トラベル"],
  alternates: {
    canonical: 'https://croud-travel.pages.dev/organic-forest-sauna-cold-water-stream-stay',
  },
  openGraph: {
    title: '【2026年】天然の清流へダイブ！森林バレルサウナ＆天然川水風呂で極上のととのい宿5選',
    description: '2026年最新！薪サウナでアツアツに温まった後、目の前を流れる雪解け水の清流へ飛び込む究極の水風呂体験と森林外気浴が楽しめるサウナ名宿5選。',
    url: 'https://croud-travel.pages.dev/organic-forest-sauna-cold-water-stream-stay',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【2026年】天然の清流へダイブ！森林バレルサウナ＆天然川水風呂で極上のととのい宿5選",
    "description": "2026年最新！薪サウナでアツアツに温まった後、目の前を流れる雪解け水の清流へ飛び込む究極の水風呂体験と森林外気浴が楽しめるサウナ名宿5選。",
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
    "datePublished": "2026-09-27",
    "dateModified": "2026-09-27",
    "mainEntityOfPage": "https://croud-travel.pages.dev/organic-forest-sauna-cold-water-stream-stay"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "清流ダイブ天然水風呂＆森林薪サウナ宿の旅行でおすすめの予約時期やタイミングは？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "人気の日程（連休や週末）は1〜2ヶ月前には満室になることが多いため、早期予約（早割プラン）の利用がおすすめです。また楽天トラベルの「5と0のつく日」キャンペーンを活用すると最大20%オフのクーポンが併用でき、最もお得に予約できます。"
        }
      },
      {
        "@type": "Question",
        "name": "清流ダイブ天然水風呂＆森林薪サウナ宿の宿選びで失敗しないためのポイントは？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "宿泊者レビューのお風呂・お食事・接客評価が4.3以上の宿を選ぶと満足度が非常に高くなります。またアクセス手段（送迎バスの有無など）やプランに含まれる特典を事前に確認しておくと安心です。"
        }
      }
    ]
  };

  const hotels: any[] = [
  {
    "hotelNo": 194868,
    "hotelName": "空と海が満ちる高台の天然温泉サウナＳＰＡ　Ｖｉｌｌａ　＾",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D194868",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D194868%26f_flg%3DPLAN",
    "hotelMinCharge": 41839,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/194868/194868.jpg",
    "userReview": "絶景のロケーションとおもてなしに心から癒やされました。",
    "reviewAverage": 4.4,
    "reviewCount": 100,
    "address": "静岡県賀茂郡東伊豆町奈良本1213-119　グラン熱川",
    "access": "伊豆北川駅から徒歩で約１１分",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F194868%2F194868.html"
  },
  {
    "hotelNo": 41071,
    "hotelName": "亀島川温泉　新川の湯　ドーミーイン東京八丁堀",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D41071",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D41071%26f_flg%3DPLAN",
    "hotelMinCharge": 8023,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/41071/41071.jpg",
    "userReview": "バイキングも美味しいし、サウナもお風呂も最高でした。また、行きたいです。クチコミの詳細はこちらから　https://review.travel.rakuten.co.jp/hotel/voice/…　2026-09-17 20:53:55投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=41071\" class=\"3click\">つづきはこちら</a>",
    "reviewAverage": 4.37,
    "reviewCount": 6828,
    "address": "東京都中央区新川2－20－4",
    "access": "ＪＲ京葉線東京メトロ日比谷線八丁堀駅Ｂ４出口より徒歩約1分（EVなし）・Ｂ２出口より徒歩約5分（EVあり）",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F41071%2F41071.html"
  },
  {
    "hotelNo": 14736,
    "hotelName": "湯河原温泉　川堰苑いすゞホテル（いすず）",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D14736",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D14736%26f_flg%3DPLAN",
    "hotelMinCharge": 8800,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/14736/14736.jpg",
    "userReview": "清潔感ある館内と温泉、美味しい食事に大満足建物自体は古かったですが、全体に清潔感があり、気持ち良く滞在できました。温泉もお湯がオーバーフローしていて気持ち良かったです。夕食もどれも綺麗に盛り付…　2026-09-17 17:55:55投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=14736\" class=\"3click\">つづきはこちら</a>",
    "reviewAverage": 4.11,
    "reviewCount": 1237,
    "address": "神奈川県静岡県熱海市泉266",
    "access": "ＪＲ東海道線湯河原駅より車で５分",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F14736%2F14736.html"
  },
  {
    "hotelNo": 8385,
    "hotelName": "長良川温泉　岐阜グランドホテル",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D8385",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D8385%26f_flg%3DPLAN",
    "hotelMinCharge": 6160,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/8385/8385.jpg",
    "userReview": "目の前で上がる花火と鵜飼に感動鵜飼が始まる時に花火が上がったんですが、目の前で上がって良かったです。他の画像やクチコミの詳細はこちらから　https://review.travel.rakut…　2026-09-17 18:17:35投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=8385\" class=\"3click\">つづきはこちら</a>",
    "reviewAverage": 4.37,
    "reviewCount": 2805,
    "address": "岐阜県岐阜市長良648",
    "access": "ＪＲ岐阜駅、名鉄岐阜駅より岐阜バスで２０分・うかいミュージアム前下車すぐ。または、車で１５分",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F8385%2F8385.html"
  },
  {
    "hotelNo": 80792,
    "hotelName": "黒川温泉　旅館湯本荘",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D80792",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D80792%26f_flg%3DPLAN",
    "hotelMinCharge": 22000,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/80792/80792.jpg",
    "userReview": "日本語が堪能なスタッフと心遣いに感謝スタッフは外国人でしたが、日本語がとてもお上手で、浴衣も夫と私のピッタリサイズを持って来て頂いて、気持ちよく過ごせました。クチコミの詳細はこちらから　htt…　2026-09-17 17:23:47投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=80792\" class=\"3click\">つづきはこちら</a>",
    "reviewAverage": 4.7,
    "reviewCount": 211,
    "address": "熊本県阿蘇郡南小国町満願寺6700",
    "access": "大分道日田ＩＣから小国方面へ車で５０分",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F80792%2F80792.html"
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
          <span className="text-stone-800 font-semibold truncate">清流ダイブ水風呂×森林薪サウナ</span>
        </div>
      </div>

      {/* ヒーローヘッダー */}
      <header className="relative bg-emerald-950 text-white py-12 px-4 md:px-8 border-b border-emerald-900">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-800/80 text-emerald-200 text-xs font-bold rounded-full">
            <span>✨ 2026年最新版</span>
            <span>•</span>
            <span>清流ダイブ水風呂×森林薪サウナ</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight font-journal-serif leading-tight">
            【2026年】天然の清流へダイブ！森林バレルサウナ＆天然川水風呂で極上のととのい宿5選
          </h1>
          <p className="text-stone-300 text-sm md:text-base leading-relaxed">
            パチパチと薪が燃えるバレルサウナでセルフロウリュを満喫した後は、そのまま目の前の澄み切った天然清流へダイブ！キンキンに冷えた天然水風呂と、木漏れ日と野鳥の声に包まれる森林外気浴。大自然と一体化する究極のととのい体験へ。
          </p>
          <div className="pt-2">
            <ShareButtons title="【2026年】天然の清流へダイブ！森林バレルサウナ＆天然川水風呂で極上のととのい宿5選" url="https://croud-travel.pages.dev/organic-forest-sauna-cold-water-stream-stay" />
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
