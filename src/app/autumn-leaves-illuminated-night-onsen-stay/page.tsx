import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import SpecialCouponBanner from '@/app/components/SpecialCouponBanner';
import ShareButtons from '@/app/components/ShareButtons';

export const metadata: Metadata = {
  title: '【2026年】黄金と深紅の幻想美！紅葉ライトアップ＆夜の庭園露天風呂が美しい秋の名宿5選 ｜ 日本全国・旅宿クラウド',
  description: '2026年最新！京都・日光・箱根・黒川など、鮮やかに色づく紅葉のライトアップと湯けむり立ち上る夜の露天風呂を堪能できる厳選秋旅名宿5選。',
  keywords: ["紅葉温泉","ライトアップ","秋旅行","庭園露天風呂","京都紅葉","楽天トラベル"],
  alternates: {
    canonical: 'https://croud-travel.pages.dev/autumn-leaves-illuminated-night-onsen-stay',
  },
  openGraph: {
    title: '【2026年】黄金と深紅の幻想美！紅葉ライトアップ＆夜の庭園露天風呂が美しい秋の名宿5選',
    description: '2026年最新！京都・日光・箱根・黒川など、鮮やかに色づく紅葉のライトアップと湯けむり立ち上る夜の露天風呂を堪能できる厳選秋旅名宿5選。',
    url: 'https://croud-travel.pages.dev/autumn-leaves-illuminated-night-onsen-stay',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【2026年】黄金と深紅の幻想美！紅葉ライトアップ＆夜の庭園露天風呂が美しい秋の名宿5選",
    "description": "2026年最新！京都・日光・箱根・黒川など、鮮やかに色づく紅葉のライトアップと湯けむり立ち上る夜の露天風呂を堪能できる厳選秋旅名宿5選。",
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
    "mainEntityOfPage": "https://croud-travel.pages.dev/autumn-leaves-illuminated-night-onsen-stay"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "紅葉ライトアップ＆夜景庭園露天風呂宿の旅行でおすすめの予約時期やタイミングは？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "人気の日程（連休や週末）は1〜2ヶ月前には満室になることが多いため、早期予約（早割プラン）の利用がおすすめです。また楽天トラベルの「5と0のつく日」キャンペーンを活用すると最大20%オフのクーポンが併用でき、最もお得に予約できます。"
        }
      },
      {
        "@type": "Question",
        "name": "紅葉ライトアップ＆夜景庭園露天風呂宿の宿選びで失敗しないためのポイントは？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "宿泊者レビューのお風呂・お食事・接客評価が4.3以上の宿を選ぶと満足度が非常に高くなります。またアクセス手段（送迎バスの有無など）やプランに含まれる特典を事前に確認しておくと安心です。"
        }
      }
    ]
  };

  const hotels: any[] = [
  {
    "hotelNo": 106139,
    "hotelName": "鳴子温泉郷　極上の貸切露天風呂　旅館大沼",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D106139",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D106139%26f_flg%3DPLAN",
    "hotelMinCharge": 13530,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/106139/106139.jpg",
    "userReview": "またゆきたい設備は古いが、清潔に保たれてます。夕食とても美味しかったです。離れた所にある露天風呂も良い。蒸し風呂(サウナ)に入れます方法が内湯から入れるようになると入りやすいと思います…　2026-09-12 11:02:52投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=106139\" class=\"3click\">つづきはこちら</a>",
    "reviewAverage": 4.58,
    "reviewCount": 614,
    "address": "宮城県大崎市鳴子温泉赤湯34",
    "access": "東北新幹線『古川駅』よりＪＲ陸羽東線に乗り換え、『鳴子御殿湯駅』下車、徒歩５分。鳴子温泉からはタクシーで約5分。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F106139%2F106139.html"
  },
  {
    "hotelNo": 37846,
    "hotelName": "長湯温泉　紅葉館＜大分県＞",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D37846",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D37846%26f_flg%3DPLAN",
    "hotelMinCharge": 7150,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/37846/37846.jpg",
    "userReview": "清潔だがカビ臭く、風呂の設備も不満新館に泊まりましたが、確かにトイレはウォッシュレットで綺麗でした。部屋も清潔でしたが、カビ臭くてエアコンを見ると見たく無いくらいにホコリだらけ...カビ臭くて当た…　2026-09-19 18:22:38投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=37846\" class=\"3click\">つづきはこちら</a>",
    "reviewAverage": 3.84,
    "reviewCount": 147,
    "address": "大分県竹田市直入町長湯7996",
    "access": "ＪＲ豊肥本線　豊後竹田駅より車で２０分",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F37846%2F37846.html"
  },
  {
    "hotelNo": 9340,
    "hotelName": "１１種類の貸切露天風呂　水上高原／奥利根温泉　ホテルサンバード",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D9340",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D9340%26f_flg%3DPLAN",
    "hotelMinCharge": 8800,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/9340/9340.jpg",
    "userReview": "露天風呂三昧と美味しい食事でゆったり満喫1人で露天風呂付きのお風呂に2泊宿泊させていただきました。部屋の露天風呂に入ったり、貸切露天風呂に入ったり、またまた大浴場に行ったりとゆったりと過ご…　2026-09-15 23:41:28投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=9340\" class=\"3click\">つづきはこちら</a>",
    "reviewAverage": 4.05,
    "reviewCount": 797,
    "address": "群馬県利根郡みなかみ町藤原4957-1",
    "access": "車で関越自動車道・水上ＩＣから３０分・ＪＲで上越線　水上駅より　湯ノ小屋行きバスで藤原スキー場入口下車900M",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F9340%2F9340.html"
  },
  {
    "hotelNo": 54007,
    "hotelName": "奥飛騨　平湯温泉　岡田旅館",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D54007",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D54007%26f_flg%3DPLAN",
    "hotelMinCharge": 15950,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/54007/54007.jpg",
    "userReview": "食事と温泉は満足食事に関しては味も良く、囲炉裏の雰囲気もあり、食事対応の方の接客も好感が持ててよかった。温泉に関しては、浴槽の変色やヌメヌメ感、硫黄の匂いも強く、温泉らしい温泉に思えた。客…　2026-09-18 18:39:47投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=54007\" class=\"3click\">つづきはこちら</a>",
    "reviewAverage": 3.91,
    "reviewCount": 627,
    "address": "岐阜県高山市奥飛騨温泉郷平湯",
    "access": "平湯温泉方面行きバス乗車、「平湯温泉駅」下車／松本ＩＣより６０分／富山ＩＣより９０分／清見ＩＣより８０分",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F54007%2F54007.html"
  },
  {
    "hotelNo": 142919,
    "hotelName": "蔦温泉旅館－足元から源泉湧出の自噴温泉－",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D142919",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D142919%26f_flg%3DPLAN",
    "hotelMinCharge": 20900,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/142919/142919.jpg",
    "userReview": "源泉の真上の温泉と食事が最高、また伺いたい露天風呂好きの私ですが、源泉の真上に風呂があり、屋内温泉でしたが、その室内空間がなぜか居心地良く大変気に入りました。食事も良かったです。周りの散策も素敵で…　2026-09-16 13:21:00投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=142919\" class=\"3click\">つづきはこちら</a>",
    "reviewAverage": 4.78,
    "reviewCount": 376,
    "address": "青森県十和田市奥瀬蔦野湯1",
    "access": "七戸十和田駅よりお車にて１時間／青森駅よりお車にて1時間20分",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F142919%2F142919.html"
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
          <span className="text-stone-800 font-semibold truncate">紅葉ライトアップ×庭園露天風呂</span>
        </div>
      </div>

      {/* ヒーローヘッダー */}
      <header className="relative bg-emerald-950 text-white py-12 px-4 md:px-8 border-b border-emerald-900">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-800/80 text-emerald-200 text-xs font-bold rounded-full">
            <span>✨ 2026年最新版</span>
            <span>•</span>
            <span>紅葉ライトアップ×庭園露天風呂</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight font-journal-serif leading-tight">
            【2026年】黄金と深紅の幻想美！紅葉ライトアップ＆夜の庭園露天風呂が美しい秋の名宿5選
          </h1>
          <p className="text-stone-300 text-sm md:text-base leading-relaxed">
            秋の夜長を彩る幻想的な紅葉のライトアップ。漆黒の夜空に浮かび上がる燃えるような赤と黄金のグラデーション、水面に映る逆さ紅葉、そして澄んだ秋空の下で浸かる至福の露天風呂。心奪われる日本の秋の絶景美を宿にいながら独占できる名旅館を厳選しました。
          </p>
          <div className="pt-2">
            <ShareButtons title="【2026年】黄金と深紅の幻想美！紅葉ライトアップ＆夜の庭園露天風呂が美しい秋の名宿5選" url="https://croud-travel.pages.dev/autumn-leaves-illuminated-night-onsen-stay" />
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
