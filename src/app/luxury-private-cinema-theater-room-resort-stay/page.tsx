import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import SpecialCouponBanner from '@/app/components/SpecialCouponBanner';
import ShareButtons from '@/app/components/ShareButtons';

export const metadata: Metadata = {
  title: '【2026年】大画面プロジェクター＆高音質音響！客室シアタールームで映画に没入する温泉宿5選 ｜ 日本全国・旅宿クラウド',
  description: '2026年最新！100インチ以上の大画面プロジェクターや最新音響システム、動画配信見放題を備えたシアタールーム完備の極上温泉ホテル5選。',
  keywords: ["シアタールーム","プロジェクター","映画鑑賞","ポップインアラジン","おこもりステイ","楽天トラベル"],
  alternates: {
    canonical: 'https://croud-travel.pages.dev/luxury-private-cinema-theater-room-resort-stay',
  },
  openGraph: {
    title: '【2026年】大画面プロジェクター＆高音質音響！客室シアタールームで映画に没入する温泉宿5選',
    description: '2026年最新！100インチ以上の大画面プロジェクターや最新音響システム、動画配信見放題を備えたシアタールーム完備の極上温泉ホテル5選。',
    url: 'https://croud-travel.pages.dev/luxury-private-cinema-theater-room-resort-stay',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【2026年】大画面プロジェクター＆高音質音響！客室シアタールームで映画に没入する温泉宿5選",
    "description": "2026年最新！100インチ以上の大画面プロジェクターや最新音響システム、動画配信見放題を備えたシアタールーム完備の極上温泉ホテル5選。",
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
    "mainEntityOfPage": "https://croud-travel.pages.dev/luxury-private-cinema-theater-room-resort-stay"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "客室専用シアタールーム＆映画没入温泉宿の旅行でおすすめの予約時期やタイミングは？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "人気の日程（連休や週末）は1〜2ヶ月前には満室になることが多いため、早期予約（早割プラン）の利用がおすすめです。また楽天トラベルの「5と0のつく日」キャンペーンを活用すると最大20%オフのクーポンが併用でき、最もお得に予約できます。"
        }
      },
      {
        "@type": "Question",
        "name": "客室専用シアタールーム＆映画没入温泉宿の宿選びで失敗しないためのポイントは？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "宿泊者レビューのお風呂・お食事・接客評価が4.3以上の宿を選ぶと満足度が非常に高くなります。またアクセス手段（送迎バスの有無など）やプランに含まれる特典を事前に確認しておくと安心です。"
        }
      }
    ]
  };

  const hotels: any[] = [
  {
    "hotelNo": 177729,
    "hotelName": "天然温泉　ひなたの湯　スーパーホテルＰｒｅｍｉｅｒ宮崎一番街",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D177729",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D177729%26f_flg%3DPLAN",
    "hotelMinCharge": 4750,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/177729/177729.jpg",
    "userReview": "スタッフの心遣いと温かい言葉に安心感スタッフ皆さんのお心遣いや言葉全てにおいて安心感を持てる素晴らしいホテルです。クチコミの詳細はこちらから　https://review.travel.r…　2026-09-18 14:39:10投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=177729\" class=\"3click\">つづきはこちら</a>",
    "reviewAverage": 4.43,
    "reviewCount": 1100,
    "address": "宮崎県宮崎市中央通7-18",
    "access": "宮崎駅よりお車にて約６分、宮崎空港よりリムジンバスで１本「橘通り３丁目」下車徒歩３分、繁華街へ徒歩０分と好立地",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F177729%2F177729.html"
  },
  {
    "hotelNo": 16089,
    "hotelName": "湯田上温泉　ホテル小柳",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D16089",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D16089%26f_flg%3DPLAN",
    "hotelMinCharge": 11500,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/16089/16089.jpg",
    "userReview": "秋の味覚とベッドは快適だが階段が不便秋の味覚会席料理が美味でした。シモンズベッドも快適。足の不自由な家族とお邪魔したのですが、部屋には階段があり昇降が不便でした。できれば、バリアフリーがよかったで…　2026-09-15 21:55:23投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=16089\" class=\"3click\">つづきはこちら</a>",
    "reviewAverage": 4.27,
    "reviewCount": 1258,
    "address": "新潟県南蒲原郡田上町田上乙1322-1",
    "access": "関越道 三条・燕ICよりR403を車で30分／JR信越線 田上駅下車（無料送迎あり）",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F16089%2F16089.html"
  },
  {
    "hotelNo": 180260,
    "hotelName": "天然温泉　石鎚の湯　スーパーホテル伊予西条",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D180260",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D180260%26f_flg%3DPLAN",
    "hotelMinCharge": 3740,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/180260/180260.jpg",
    "userReview": "スタッフの親切な対応と笑顔に感謝初日はお遍路で回って次の日は皿ヶ嶺に登山する為にこちらを選びました。夕食のお店を探していると、海鮮のお店を紹介して下さり、県外で道がわからない私達に…　2026-09-17 22:54:04投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=180260\" class=\"3click\">つづきはこちら</a>",
    "reviewAverage": 4.41,
    "reviewCount": 650,
    "address": "愛媛県西条市朔日市777-1",
    "access": "伊��西条駅よりお車にて約７分  伊予西条ICより車にて約15分",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F180260%2F180260.html"
  },
  {
    "hotelNo": 29493,
    "hotelName": "鬼怒川温泉　鬼怒川プラザホテル",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D29493",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D29493%26f_flg%3DPLAN",
    "hotelMinCharge": 9350,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/29493/29493.jpg",
    "userReview": "お気に入りの露天風呂と野菜たっぷりの夕食何度もお邪魔してますが外にある露天風呂はとっても気にいってます料理は夕食しゃぶしゃぶですが肉より野菜メインで頂いてますクチコミの詳細はこちら…　2026-09-18 09:16:38投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=29493\" class=\"3click\">つづきはこちら</a>",
    "reviewAverage": 3.72,
    "reviewCount": 4814,
    "address": "栃木県日光市鬼怒川温泉滝530",
    "access": "東武鉄道　鬼怒川温泉駅から１ｋｍ（徒歩１５分、車５分）／日光宇都宮自動車道　今市ＩＣより国道１２１号で約３０分",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F29493%2F29493.html"
  },
  {
    "hotelNo": 19786,
    "hotelName": "箱根湯本温泉　女性に優しい癒しの宿　ホテルマイユクール祥月",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D19786",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D19786%26f_flg%3DPLAN",
    "hotelMinCharge": 8500,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/19786/19786.jpg",
    "userReview": "期待以上の素晴らしさで心身ともにリフレッシュ日頃の疲れを癒やすために宿泊しましたが、期待を大きく上回る素晴らしさでした。お部屋は清潔感があり広々としていて、到着時に用意していただいたウェルカム…　2026-09-19 21:11:25投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=19786\" class=\"3click\">つづきはこちら</a>",
    "reviewAverage": 4.55,
    "reviewCount": 6648,
    "address": "神奈川県足柄下郡箱根町湯本468-1",
    "access": "箱根湯本駅下車徒歩１２分／小田原厚木道路箱根口ＩＣから2ｋｍ　箱根神社約40分／箱根ターンパイク約10分",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F19786%2F19786.html"
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
          <span className="text-stone-800 font-semibold truncate">客室シアター×大画面映画没入</span>
        </div>
      </div>

      {/* ヒーローヘッダー */}
      <header className="relative bg-emerald-950 text-white py-12 px-4 md:px-8 border-b border-emerald-900">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-800/80 text-emerald-200 text-xs font-bold rounded-full">
            <span>✨ 2026年最新版</span>
            <span>•</span>
            <span>客室シアター×大画面映画没入</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight font-journal-serif leading-tight">
            【2026年】大画面プロジェクター＆高音質音響！客室シアタールームで映画に没入する温泉宿5選
          </h1>
          <p className="text-stone-300 text-sm md:text-base leading-relaxed">
            お気に入りの映画やライブ映像を、大画面スクリーンと高音質スピーカーで心ゆくまで鑑賞。ルームサービスのお酒やおつまみを片手にソファで寛ぎ、合間には美肌名湯の露天風呂へ。プライベートシアターと温泉が融合した究極のエンタメステイ。
          </p>
          <div className="pt-2">
            <ShareButtons title="【2026年】大画面プロジェクター＆高音質音響！客室シアタールームで映画に没入する温泉宿5選" url="https://croud-travel.pages.dev/luxury-private-cinema-theater-room-resort-stay" />
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
