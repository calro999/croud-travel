import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import SpecialCouponBanner from '@/app/components/SpecialCouponBanner';
import ShareButtons from '@/app/components/ShareButtons';

export const metadata: Metadata = {
  title: '【2026年】笹の葉のざわめきとライトアップ！竹林の小径に佇む静寂の隠れ家温泉旅館5選 ｜ 日本全国・旅宿クラウド',
  description: '2026年最新！伊豆修善寺・京都嵐山・黒川など、美しく手入れされた青竹の林に囲まれ、幻想的な竹林ライトアップと露天風呂を満喫できる隠れ家宿5選。',
  keywords: ["竹林の宿","竹林露天風呂","修善寺温泉","嵐山","大人の隠れ家","楽天トラベル"],
  alternates: {
    canonical: 'https://croud-travel.pages.dev/traditional-bamboo-forest-path-quiet-onsen-stay',
  },
  openGraph: {
    title: '【2026年】笹の葉のざわめきとライトアップ！竹林の小径に佇む静寂の隠れ家温泉旅館5選',
    description: '2026年最新！伊豆修善寺・京都嵐山・黒川など、美しく手入れされた青竹の林に囲まれ、幻想的な竹林ライトアップと露天風呂を満喫できる隠れ家宿5選。',
    url: 'https://croud-travel.pages.dev/traditional-bamboo-forest-path-quiet-onsen-stay',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【2026年】笹の葉のざわめきとライトアップ！竹林の小径に佇む静寂の隠れ家温泉旅館5選",
    "description": "2026年最新！伊豆修善寺・京都嵐山・黒川など、美しく手入れされた青竹の林に囲まれ、幻想的な竹林ライトアップと露天風呂を満喫できる隠れ家宿5選。",
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
    "mainEntityOfPage": "https://croud-travel.pages.dev/traditional-bamboo-forest-path-quiet-onsen-stay"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "竹林の静寂＆竹林ライトアップ露天風呂宿の旅行でおすすめの予約時期やタイミングは？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "人気の日程（連休や週末）は1〜2ヶ月前には満室になることが多いため、早期予約（早割プラン）の利用がおすすめです。また楽天トラベルの「5と0のつく日」キャンペーンを活用すると最大20%オフのクーポンが併用でき、最もお得に予約できます。"
        }
      },
      {
        "@type": "Question",
        "name": "竹林の静寂＆竹林ライトアップ露天風呂宿の宿選びで失敗しないためのポイントは？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "宿泊者レビューのお風呂・お食事・接客評価が4.3以上の宿を選ぶと満足度が非常に高くなります。またアクセス手段（送迎バスの有無など）やプランに含まれる特典を事前に確認しておくと安心です。"
        }
      }
    ]
  };

  const hotels: any[] = [
  {
    "hotelNo": 27796,
    "hotelName": "竹林庭瑞穂　旅籠きこり",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D27796",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D27796%26f_flg%3DPLAN",
    "hotelMinCharge": 9400,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/27796/27796.jpg",
    "userReview": "タイムスリップしたような空間と乳児への配慮昔ながらの旅館という感じでタイムスリップしたような時間を過ごせました。広間での食事の時に乳児用の簡易ベッドも準備してくださりありがたかったです。クチコ…　2026-09-15 15:18:35投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=27796\" class=\"3click\">つづきはこちら</a>",
    "reviewAverage": 4.18,
    "reviewCount": 343,
    "address": "山梨県笛吹市石和町川中島325-1",
    "access": "ＪＲ中央線・石和温泉駅→タクシーにて５分（徒歩１０分）／中央自動車道・一宮御坂ＩＣ→Ｒ２０経由で５分",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F27796%2F27796.html"
  },
  {
    "hotelNo": 52837,
    "hotelName": "湯田上温泉　旅館　初音",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D52837",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D52837%26f_flg%3DPLAN",
    "hotelMinCharge": 5500,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/52837/52837.jpg",
    "userReview": "料理は絶品、格安で満足のいく内容料理がとても美味しくて、ランクアップして、料理をもっと楽しみたかったです。階段でトイレが階が違ったので、ちょっと気になりましたが、お値段が格安だったので満足でし…　2026-08-14 18:38:08投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=52837\" class=\"3click\">つづきはこちら</a>",
    "reviewAverage": 4.08,
    "reviewCount": 174,
    "address": "新潟県南蒲原郡田上町田上丙1318-4",
    "access": "信越本線　田上駅から車で２～３分、徒歩で２０分（田上駅まで送迎も致します）",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F52837%2F52837.html"
  },
  {
    "hotelNo": 31865,
    "hotelName": "修善寺温泉　国の登録文化財の宿　新井旅館",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D31865",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D31865%26f_flg%3DPLAN",
    "hotelMinCharge": 24420,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/31865/31865.jpg",
    "userReview": "よくメンテされた登録文化財施設は漸次更新されており(文化財なので許認可大変だと思います)食事も美味しく仲居さんもフレッシュで素晴らしいと思います。ただし、寝具類がせんべい布団で朝が来るのが待ち…　2026-09-14 20:40:38投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=31865\" class=\"3click\">つづきはこちら</a>",
    "reviewAverage": 4.58,
    "reviewCount": 267,
    "address": "静岡県伊豆市修善寺970",
    "access": "伊豆箱根鉄道線 修善寺駅よりバスまたはタクシーで10分／東名・新東名高速 沼津ICより伊豆縦貫道経由45分",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F31865%2F31865.html"
  },
  {
    "hotelNo": 31796,
    "hotelName": "黒川温泉　湯峡の響き　優彩",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D31796",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D31796%26f_flg%3DPLAN",
    "hotelMinCharge": 11627,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/31796/31796.jpg",
    "userReview": "食事と温泉は満足、部屋の機械音が残念夕食も朝食も美味しくいただき、温泉も気持ち良かったです部屋の外から機械の音が聞こえて、少し残念でした!クチコミの詳細はこちらから　https://rev…　2026-09-19 22:12:36投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=31796\" class=\"3click\">つづきはこちら</a>",
    "reviewAverage": 4.3,
    "reviewCount": 2060,
    "address": "熊本県阿蘇郡南小国町満願寺北黒川6554-1",
    "access": "ＪＲ豊肥線　阿蘇駅より別府行バスで約５０分　黒川温泉下車徒歩１０分",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F31796%2F31796.html"
  },
  {
    "hotelNo": 68544,
    "hotelName": "山中温泉　厨八十八",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D68544",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D68544%26f_flg%3DPLAN",
    "hotelMinCharge": 13000,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/68544/68544.jpg",
    "userReview": "畳敷きの館内と温泉に癒やされる心地よい時間滞在中ゆったりと過ごすことができました。館内はすべて畳敷きで、良い香りが漂い心地よかったです。大浴場も広々としており、温泉に癒やされました。スタッフの皆様…　2026-08-12 13:36:57投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=68544\" class=\"3click\">つづきはこちら</a>",
    "reviewAverage": 4.53,
    "reviewCount": 221,
    "address": "石川県加賀市山中温泉菅谷町ロ62",
    "access": "加賀温泉駅より車で約20分（事前予約制の送迎がございます。時間など詳細よくある質問をご確認ください）",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F68544%2F68544.html"
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
          <span className="text-stone-800 font-semibold truncate">竹林ライトアップ×静寂露天風呂</span>
        </div>
      </div>

      {/* ヒーローヘッダー */}
      <header className="relative bg-emerald-950 text-white py-12 px-4 md:px-8 border-b border-emerald-900">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-800/80 text-emerald-200 text-xs font-bold rounded-full">
            <span>✨ 2026年最新版</span>
            <span>•</span>
            <span>竹林ライトアップ×静寂露天風呂</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight font-journal-serif leading-tight">
            【2026年】笹の葉のざわめきとライトアップ！竹林の小径に佇む静寂の隠れ家温泉旅館5選
          </h1>
          <p className="text-stone-300 text-sm md:text-base leading-relaxed">
            天高く伸びる青竹の間を渡る心地よい風の音。夜になると竹林がライトアップされ、黄金色と緑の幻想的な光の世界が浮かび上がります。竹林に囲まれた専用露天風呂で日常を忘れ、静寂の中で心研ぎ澄まされる大人の隠れ家ステイ。
          </p>
          <div className="pt-2">
            <ShareButtons title="【2026年】笹の葉のざわめきとライトアップ！竹林の小径に佇む静寂の隠れ家温泉旅館5選" url="https://croud-travel.pages.dev/traditional-bamboo-forest-path-quiet-onsen-stay" />
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
