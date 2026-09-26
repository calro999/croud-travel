import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import SpecialCouponBanner from '@/app/components/SpecialCouponBanner';
import ShareButtons from '@/app/components/ShareButtons';

export const metadata: Metadata = {
  title: '【2026年】老舗の銘菓と出来立て生和菓子！抹茶ラウンジ＆和スイーツが自慢の温泉宿5選 ｜ 日本全国・旅宿クラウド',
  description: '2026年最新！老舗和菓子舗コラボの生菓子や抹茶BAR、パフェが楽しめる和スイーツ好きにおすすめの温泉旅館5選。優雅なお茶時間。',
  keywords: ["和菓子","抹茶スイーツ","わらび餅","和カフェ","女子旅温泉","楽天トラベル"],
  alternates: {
    canonical: 'https://croud-travel.pages.dev/traditional-japanese-sweet-wagashi-matcha-onsen-stay',
  },
  openGraph: {
    title: '【2026年】老舗の銘菓と出来立て生和菓子！抹茶ラウンジ＆和スイーツが自慢の温泉宿5選',
    description: '2026年最新！老舗和菓子舗コラボの生菓子や抹茶BAR、パフェが楽しめる和スイーツ好きにおすすめの温泉旅館5選。優雅なお茶時間。',
    url: 'https://croud-travel.pages.dev/traditional-japanese-sweet-wagashi-matcha-onsen-stay',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【2026年】老舗の銘菓と出来立て生和菓子！抹茶ラウンジ＆和スイーツが自慢の温泉宿5選",
    "description": "2026年最新！老舗和菓子舗コラボの生菓子や抹茶BAR、パフェが楽しめる和スイーツ好きにおすすめの温泉旅館5選。優雅なお茶時間。",
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
    "mainEntityOfPage": "https://croud-travel.pages.dev/traditional-japanese-sweet-wagashi-matcha-onsen-stay"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "老舗和菓子＆抹茶BAR付き和スイーツ温泉宿の旅行でおすすめの予約時期やタイミングは？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "人気の日程（連休や週末）は1〜2ヶ月前には満室になることが多いため、早期予約（早割プラン）の利用がおすすめです。また楽天トラベルの「5と0のつく日」キャンペーンを活用すると最大20%オフのクーポンが併用でき、最もお得に予約できます。"
        }
      },
      {
        "@type": "Question",
        "name": "老舗和菓子＆抹茶BAR付き和スイーツ温泉宿の宿選びで失敗しないためのポイントは？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "宿泊者レビューのお風呂・お食事・接客評価が4.3以上の宿を選ぶと満足度が非常に高くなります。またアクセス手段（送迎バスの有無など）やプランに含まれる特典を事前に確認しておくと安心です。"
        }
      }
    ]
  };

  const hotels: any[] = [
  {
    "hotelNo": 40731,
    "hotelName": "長湯温泉　丸長旅館",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D40731",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D40731%26f_flg%3DPLAN",
    "hotelMinCharge": 17100,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/40731/40731.jpg",
    "userReview": "絶景のロケーションとおもてなしに心から癒やされました。",
    "reviewAverage": 4.85,
    "reviewCount": 54,
    "address": "大分県竹田市直入町長湯温泉７９９５－２",
    "access": "◆湯布院IC国道210号を湯平温泉経由で広域農道50分◆ＪＲ豊肥本線　豊後竹田駅から車（タクシー）で３０分",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F40731%2F40731.html"
  },
  {
    "hotelNo": 7027,
    "hotelName": "宮津温泉　料理旅館　茶六別館",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D7027",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D7027%26f_flg%3DPLAN",
    "hotelMinCharge": 17600,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/7027/7027.jpg",
    "userReview": "趣ある建物と絶品の生ガキに大満足建物は非常に趣があり、興味を持てました。お部屋も昔ながらの雰囲気でよかったです。窓からは天橋立が見えました。ちょっと霞んでいましたが、冬ならもっとはっきり見えるかも…　2026-08-01 09:40:26投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=7027\" class=\"3click\">つづきはこちら</a>",
    "reviewAverage": 4.55,
    "reviewCount": 202,
    "address": "京都府宮津市島崎2039-4",
    "access": "車：京都縦貫自動車道宮津天橋立ＩＣより約５分　電車：京都丹後鉄道宮津駅より徒歩１０分　高速バス：キセンバ港館より徒歩７分",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F7027%2F7027.html"
  },
  {
    "hotelNo": 29093,
    "hotelName": "辰口温泉　旅亭　萬葉",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D29093",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D29093%26f_flg%3DPLAN",
    "hotelMinCharge": 22000,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/29093/29093.jpg",
    "userReview": "食事と抹茶のおもてなしは最高、お風呂は修繕希望宿に着いてから、抹茶のおもてなし、食事は大変美味しく、出来立てを順番に出していただける丁寧な夕食でした。お風呂は部屋と借り切り、大浴場と沢山ありま…　2026-09-13 10:00:01投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=29093\" class=\"3click\">つづきはこちら</a>",
    "reviewAverage": 4.58,
    "reviewCount": 311,
    "address": "石川県能美市緑が丘5-31-40",
    "access": "JR北陸本線小松駅より車で約20分。北陸自動車道小松ICより約20分。金沢市中心部より加賀産業道路経由車で約35分",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F29093%2F29093.html"
  },
  {
    "hotelNo": 108973,
    "hotelName": "那須黒磯温泉　かんすい苑　覚楽",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D108973",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D108973%26f_flg%3DPLAN",
    "hotelMinCharge": 11000,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/108973/108973.jpg",
    "userReview": "川の音に癒やされ、スタッフの心遣いに感謝周りには何も無いですが、何も無いがあります!のんびりしたいなら最適です。館内はスタッフの方々が本当に親切で、カフェインが苦手だと伝えると麦茶を出して…　2026-09-17 14:09:15投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=108973\" class=\"3click\">つづきはこちら</a>",
    "reviewAverage": 4.77,
    "reviewCount": 458,
    "address": "栃木県那須塩原市黒磯402-2",
    "access": "ＪＲ　黒磯駅よりお車にて５分（送迎バス有り・要予約） 送迎時間　14時～18時　翌8時～10時",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F108973%2F108973.html"
  },
  {
    "hotelNo": 10714,
    "hotelName": "山陰湯村温泉　朝野家",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D10714",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D10714%26f_flg%3DPLAN",
    "hotelMinCharge": 6600,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/10714/10714.jpg",
    "userReview": "温泉も食事も接客も素晴らしく大満足初めての湯村温泉でしたが温泉、食事、スタッフさんの対応等、どれもとても素晴らしく大変良かったです。(食事時には女将さんの丁寧なご挨拶もありました!)帰りに気付…　2026-09-19 22:28:17投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=10714\" class=\"3click\">つづきはこちら</a>",
    "reviewAverage": 4.57,
    "reviewCount": 1194,
    "address": "兵庫県美方郡新温泉町湯1269",
    "access": "北近畿豊岡道八鹿氷ノ山ＩＣより車で約50分／阪急大阪三番街より全但特急バスで約3時間",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F10714%2F10714.html"
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
          <span className="text-stone-800 font-semibold truncate">老舗和菓子×抹茶ラウンジ宿</span>
        </div>
      </div>

      {/* ヒーローヘッダー */}
      <header className="relative bg-emerald-950 text-white py-12 px-4 md:px-8 border-b border-emerald-900">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-800/80 text-emerald-200 text-xs font-bold rounded-full">
            <span>✨ 2026年最新版</span>
            <span>•</span>
            <span>老舗和菓子×抹茶ラウンジ宿</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight font-journal-serif leading-tight">
            【2026年】老舗の銘菓と出来立て生和菓子！抹茶ラウンジ＆和スイーツが自慢の温泉宿5選
          </h1>
          <p className="text-stone-300 text-sm md:text-base leading-relaxed">
            職人が目の前で仕上げる季節の練り切りや出来立ての本わらび餅。日本庭園を眺めながら点てたての抹茶や特製和パフェを味わえるラウンジ、そして肌をしっとり潤す名湯。五感で日本の繊細な甘美と風情を愛でる癒やしの休日。
          </p>
          <div className="pt-2">
            <ShareButtons title="【2026年】老舗の銘菓と出来立て生和菓子！抹茶ラウンジ＆和スイーツが自慢の温泉宿5選" url="https://croud-travel.pages.dev/traditional-japanese-sweet-wagashi-matcha-onsen-stay" />
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
