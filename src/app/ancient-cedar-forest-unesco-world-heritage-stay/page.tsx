import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import SpecialCouponBanner from '@/app/components/SpecialCouponBanner';
import ShareButtons from '@/app/components/ShareButtons';

export const metadata: Metadata = {
  title: '【2026年】悠久の歴史と祈りの道を歩く！世界遺産・熊野古道＆聖地巡礼の秘湯名宿5選 ｜ 日本全国・旅宿クラウド',
  description: '2026年最新！世界遺産・熊野古道や吉野、那智の滝を巡る旅。千年以上の歴史を誇る日本最古の湯峰温泉や川湯温泉など、神秘の霊場に佇む名宿5選。',
  keywords: ["熊野古道","世界遺産","湯峰温泉","川湯温泉","歴史の道","楽天トラベル"],
  alternates: {
    canonical: 'https://croud-travel.pages.dev/ancient-cedar-forest-unesco-world-heritage-stay',
  },
  openGraph: {
    title: '【2026年】悠久の歴史と祈りの道を歩く！世界遺産・熊野古道＆聖地巡礼の秘湯名宿5選',
    description: '2026年最新！世界遺産・熊野古道や吉野、那智の滝を巡る旅。千年以上の歴史を誇る日本最古の湯峰温泉や川湯温泉など、神秘の霊場に佇む名宿5選。',
    url: 'https://croud-travel.pages.dev/ancient-cedar-forest-unesco-world-heritage-stay',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【2026年】悠久の歴史と祈りの道を歩く！世界遺産・熊野古道＆聖地巡礼の秘湯名宿5選",
    "description": "2026年最新！世界遺産・熊野古道や吉野、那智の滝を巡る旅。千年以上の歴史を誇る日本最古の湯峰温泉や川湯温泉など、神秘の霊場に佇む名宿5選。",
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
    "mainEntityOfPage": "https://croud-travel.pages.dev/ancient-cedar-forest-unesco-world-heritage-stay"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "世界遺産・熊野古道＆聖地巡礼の名湯宿の旅行でおすすめの予約時期やタイミングは？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "人気の日程（連休や週末）は1〜2ヶ月前には満室になることが多いため、早期予約（早割プラン）の利用がおすすめです。また楽天トラベルの「5と0のつく日」キャンペーンを活用すると最大20%オフのクーポンが併用でき、最もお得に予約できます。"
        }
      },
      {
        "@type": "Question",
        "name": "世界遺産・熊野古道＆聖地巡礼の名湯宿の宿選びで失敗しないためのポイントは？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "宿泊者レビューのお風呂・お食事・接客評価が4.3以上の宿を選ぶと満足度が非常に高くなります。またアクセス手段（送迎バスの有無など）やプランに含まれる特典を事前に確認しておくと安心です。"
        }
      }
    ]
  };

  const hotels: any[] = [
  {
    "hotelNo": 68262,
    "hotelName": "洞川温泉　桝源旅館",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D68262",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D68262%26f_flg%3DPLAN",
    "hotelMinCharge": 15466,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/68262/68262.jpg",
    "userReview": "縁側で癒やされたが、離れの部屋はジメジメ秋雨前線の影響で雨続きでしたが、幸い宿泊中は、天気に恵まれどろ川温泉を楽しむことが出来ました。お宿の方はとても良い方達ばかりで、ゆっくり滞在出来まし…　2026-09-15 13:05:22投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=68262\" class=\"3click\">つづきはこちら</a>",
    "reviewAverage": 4.13,
    "reviewCount": 133,
    "address": "奈良県吉野郡天川村洞川189",
    "access": "近鉄吉野線　下市口駅より洞川温泉行きバス１本。　車：国道169号から309号。　世界遺産の高野山、熊野古道へも120分圏",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F68262%2F68262.html"
  },
  {
    "hotelNo": 129554,
    "hotelName": "旅館あづまや　＜和歌山県＞",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D129554",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D129554%26f_flg%3DPLAN",
    "hotelMinCharge": 10890,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/129554/129554.jpg",
    "userReview": "趣のある空間と温泉、丁寧な接客に大満足趣があり、立地も最高、お風呂も本当によかったです。仲居さんたちもフランクでありながらも丁寧でした。また伺いたいと思います。クチコミの詳細はこちらか…　2026-09-15 17:48:51投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=129554\" class=\"3click\">つづきはこちら</a>",
    "reviewAverage": 4.48,
    "reviewCount": 152,
    "address": "和歌山県田辺市本宮町湯峰122",
    "access": "紀伊田辺駅よりバス・タクシーで約９０分/新宮駅よりバス、タクシーで６０分「湯峰温泉」下車すぐ/南紀田辺ＩＣから車で70分",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F129554%2F129554.html"
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
    "hotelNo": 9133,
    "hotelName": "白浜温泉　家族とすごす白浜の宿　柳屋",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D9133",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D9133%26f_flg%3DPLAN",
    "hotelMinCharge": 6050,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/9133/9133.jpg",
    "userReview": "料理と温泉は最高だが館内の匂いが気になるゆっくり過ごさせていただきましたお料理は地元の食材をふんだんに利用した素敵な内容でした温泉も良いお湯でした残念だったのは脱衣所や廊下等での匂いが…　2026-09-16 18:59:51投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=9133\" class=\"3click\">つづきはこちら</a>",
    "reviewAverage": 4.5,
    "reviewCount": 1328,
    "address": "和歌山県西牟婁郡白浜町1870",
    "access": "ＪＲ白浜駅：車で約１１分／南紀白浜空港：車で約７分／南紀白浜ＩＣ：車で約１5分／アドベンチャーワールド：車で約１０分",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F9133%2F9133.html"
  },
  {
    "hotelNo": 41962,
    "hotelName": "割烹旅館　美よし荘",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D41962",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D41962%26f_flg%3DPLAN",
    "hotelMinCharge": 10450,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/41962/41962.jpg",
    "userReview": "絶景のロケーションとおもてなしに心から癒やされました。",
    "reviewAverage": 5,
    "reviewCount": 13,
    "address": "和歌山県有田郡湯浅町別所166-1",
    "access": "紀勢本線　湯浅駅より車で２～３分、徒歩で７分",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F41962%2F41962.html"
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
          <span className="text-stone-800 font-semibold truncate">世界遺産×聖地巡礼の秘湯</span>
        </div>
      </div>

      {/* ヒーローヘッダー */}
      <header className="relative bg-emerald-950 text-white py-12 px-4 md:px-8 border-b border-emerald-900">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-800/80 text-emerald-200 text-xs font-bold rounded-full">
            <span>✨ 2026年最新版</span>
            <span>•</span>
            <span>世界遺産×聖地巡礼の秘湯</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight font-journal-serif leading-tight">
            【2026年】悠久の歴史と祈りの道を歩く！世界遺産・熊野古道＆聖地巡礼の秘湯名宿5選
          </h1>
          <p className="text-stone-300 text-sm md:text-base leading-relaxed">
            苔むした石畳と鬱蒼とした杉木立が続く祈りの道・熊野古道。熊野三山を巡る聖地巡礼の旅で疲れた体を癒やすのは、河原を掘れば湯が湧く川湯温泉や、1日に7回湯の色が変わる世界遺産の湯・湯峰温泉。神秘的な大自然と歴史の深さに浸る旅をご案内します。
          </p>
          <div className="pt-2">
            <ShareButtons title="【2026年】悠久の歴史と祈りの道を歩く！世界遺産・熊野古道＆聖地巡礼の秘湯名宿5選" url="https://croud-travel.pages.dev/ancient-cedar-forest-unesco-world-heritage-stay" />
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
