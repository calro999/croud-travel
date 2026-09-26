import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import SpecialCouponBanner from '@/app/components/SpecialCouponBanner';
import ShareButtons from '@/app/components/ShareButtons';

export const metadata: Metadata = {
  title: '【2026年】生バラの花びらが浮かぶ優美な湯船！華やかなローズ風呂＆フラワーアロマ宿5選 ｜ 日本全国・旅宿クラウド',
  description: '2026年最新！数百輪の色鮮やかな生バラを浮かべた贅沢なバラ風呂やハーブフラワーバス、天然アロマトリートメントで特別な記念日を彩る温泉宿5選。',
  keywords: ["バラ風呂","ローズバス","記念日旅行","フラワーアロマ","女子旅温泉","楽天トラベル"],
  alternates: {
    canonical: 'https://croud-travel.pages.dev/organic-flower-bath-rose-herb-spa-stay',
  },
  openGraph: {
    title: '【2026年】生バラの花びらが浮かぶ優美な湯船！華やかなローズ風呂＆フラワーアロマ宿5選',
    description: '2026年最新！数百輪の色鮮やかな生バラを浮かべた贅沢なバラ風呂やハーブフラワーバス、天然アロマトリートメントで特別な記念日を彩る温泉宿5選。',
    url: 'https://croud-travel.pages.dev/organic-flower-bath-rose-herb-spa-stay',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【2026年】生バラの花びらが浮かぶ優美な湯船！華やかなローズ風呂＆フラワーアロマ宿5選",
    "description": "2026年最新！数百輪の色鮮やかな生バラを浮かべた贅沢なバラ風呂やハーブフラワーバス、天然アロマトリートメントで特別な記念日を彩る温泉宿5選。",
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
    "mainEntityOfPage": "https://croud-travel.pages.dev/organic-flower-bath-rose-herb-spa-stay"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "生バラ風呂＆フラワーアロマ温泉宿の旅行でおすすめの予約時期やタイミングは？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "人気の日程（連休や週末）は1〜2ヶ月前には満室になることが多いため、早期予約（早割プラン）の利用がおすすめです。また楽天トラベルの「5と0のつく日」キャンペーンを活用すると最大20%オフのクーポンが併用でき、最もお得に予約できます。"
        }
      },
      {
        "@type": "Question",
        "name": "生バラ風呂＆フラワーアロマ温泉宿の宿選びで失敗しないためのポイントは？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "宿泊者レビューのお風呂・お食事・接客評価が4.3以上の宿を選ぶと満足度が非常に高くなります。またアクセス手段（送迎バスの有無など）やプランに含まれる特典を事前に確認しておくと安心です。"
        }
      }
    ]
  };

  const hotels: any[] = [
  {
    "hotelNo": 37464,
    "hotelName": "寒河江温泉　割烹旅館　吉本",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D37464",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D37464%26f_flg%3DPLAN",
    "hotelMinCharge": 7700,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/37464/37464.jpg",
    "userReview": "絶景のロケーションとおもてなしに心から癒やされました。",
    "reviewAverage": 3.33,
    "reviewCount": 60,
    "address": "山形県寒河江市本町2丁目1-23",
    "access": "寒河江駅より徒歩５分",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F37464%2F37464.html"
  },
  {
    "hotelNo": 29364,
    "hotelName": "割烹旅館　城山",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D29364",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D29364%26f_flg%3DPLAN",
    "hotelMinCharge": 10000,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/29364/29364.jpg",
    "userReview": "設備が老朽化し清潔感に欠ける残念な環境部屋のトイレ便座はガタつき 風呂場の扉は壊れて閉まらない 洗面台の下に風呂のフタが敷かれていたあちこちにゴキリキャップが設置されて 冷蔵庫下の床は捲れ上が…　2026-08-13 05:19:47投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=29364\" class=\"3click\">つづきはこちら</a>",
    "reviewAverage": 4.2,
    "reviewCount": 80,
    "address": "茨城県笠間市笠間14-1",
    "access": "JR水戸線笠間駅より約1.5km　タクシーで約3分／北関東自動車道友部ICよりR３５５にて１０分",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F29364%2F29364.html"
  },
  {
    "hotelNo": 108575,
    "hotelName": "古湯温泉　旅館　大和屋",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D108575",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D108575%26f_flg%3DPLAN",
    "hotelMinCharge": 12060,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/108575/108575.jpg",
    "userReview": "趣あるレトロな雰囲気と豪華な食事に満足キングダムコラボ目当てで宿泊しました。旅館は趣があり、レトロな雰囲気がとても素敵でした!夕食朝食共に豪華で美味しかったです。大満足しました。他の宿…　2026-09-08 08:26:54投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=108575\" class=\"3click\">つづきはこちら</a>",
    "reviewAverage": 4.62,
    "reviewCount": 320,
    "address": "佐賀県佐賀市富士町古湯860",
    "access": "佐賀大和ICよりお車にて15分、JR長崎本線佐賀駅→昭和バス乗車→古湯温泉前下車→徒歩2分",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F108575%2F108575.html"
  },
  {
    "hotelNo": 31249,
    "hotelName": "蒲郡温泉　銀河伝説煌めく天空の宿　天の丸",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D31249",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D31249%26f_flg%3DPLAN",
    "hotelMinCharge": 8400,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/31249/31249.jpg",
    "userReview": "施設は古いが清潔、記念日の心遣いに感動施設は古いですが館内は清潔で綺麗です。記念日の連絡はしませんでしたが、覚えていてくれたか赤飯のサービスと記念撮影をしていただきました。クチコミの詳細は…　2026-09-07 20:04:01投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=31249\" class=\"3click\">つづきはこちら</a>",
    "reviewAverage": 4.17,
    "reviewCount": 1611,
    "address": "愛知県額田郡幸田町荻遠峰10",
    "access": "ＪＲ東海道本線　蒲郡駅／東名岡崎ＩＣより県道２６号、国道２４８号経由三河湾スカイラインへ ※送迎バス送り10時発",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F31249%2F31249.html"
  },
  {
    "hotelNo": 52574,
    "hotelName": "南あわじ温泉郷　うずしお温泉　淡路島海上ホテル",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D52574",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D52574%26f_flg%3DPLAN",
    "hotelMinCharge": 7700,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/52574/52574.jpg",
    "userReview": "食事と夕日が最高、温泉は少し物足りない淡路島は初めてでしたが、関東と違い出汁が利いていて魚も新鮮で食事が美味しかったです。部屋も綺麗で夕日もよかったです。熱湯でお湯に個性がある温泉好きには物足りな…　2026-09-13 17:30:13投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=52574\" class=\"3click\">つづきはこちら</a>",
    "reviewAverage": 4.19,
    "reviewCount": 900,
    "address": "兵庫県南あわじ市福良甲21-1",
    "access": "明石海峡大橋海峡　垂水ＪＣＴより車で約１時間（６７ｋｍ）",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F52574%2F52574.html"
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
          <span className="text-stone-800 font-semibold truncate">生バラ風呂×ローズアロマ温泉</span>
        </div>
      </div>

      {/* ヒーローヘッダー */}
      <header className="relative bg-emerald-950 text-white py-12 px-4 md:px-8 border-b border-emerald-900">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-800/80 text-emerald-200 text-xs font-bold rounded-full">
            <span>✨ 2026年最新版</span>
            <span>•</span>
            <span>生バラ風呂×ローズアロマ温泉</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight font-journal-serif leading-tight">
            【2026年】生バラの花びらが浮かぶ優美な湯船！華やかなローズ風呂＆フラワーアロマ宿5選
          </h1>
          <p className="text-stone-300 text-sm md:text-base leading-relaxed">
            湯船いっぱいに敷き詰められた赤やピンクの生バラの花びら。甘く高貴なローズの香りに包まれる非日常のバスタイムは、まさに映画のワンシーン。記念日や誕生日、自分への最高のご褒美にふさわしい華やかなフラワー温泉ステイ。
          </p>
          <div className="pt-2">
            <ShareButtons title="【2026年】生バラの花びらが浮かぶ優美な湯船！華やかなローズ風呂＆フラワーアロマ宿5選" url="https://croud-travel.pages.dev/organic-flower-bath-rose-herb-spa-stay" />
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
