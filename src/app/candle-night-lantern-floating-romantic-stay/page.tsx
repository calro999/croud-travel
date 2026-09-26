import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import SpecialCouponBanner from '@/app/components/SpecialCouponBanner';
import ShareButtons from '@/app/components/ShareButtons';

export const metadata: Metadata = {
  title: '【2026年】無数のキャンドルとランタンの揺らめき！幻想的な夜を彩るロマンティック温泉宿5選 ｜ 日本全国・旅宿クラウド',
  description: '2026年最新！竹灯籠やスカイランタン、無数のキャンドルが灯る温泉街と宿の庭園。記念日やカップル旅行にぴったりの幻想的な灯りイベントと名湯宿5選。',
  keywords: ["キャンドルナイト","竹灯籠","ランタン","ライトアップ温泉","記念日旅行","楽天トラベル"],
  alternates: {
    canonical: 'https://croud-travel.pages.dev/candle-night-lantern-floating-romantic-stay',
  },
  openGraph: {
    title: '【2026年】無数のキャンドルとランタンの揺らめき！幻想的な夜を彩るロマンティック温泉宿5選',
    description: '2026年最新！竹灯籠やスカイランタン、無数のキャンドルが灯る温泉街と宿の庭園。記念日やカップル旅行にぴったりの幻想的な灯りイベントと名湯宿5選。',
    url: 'https://croud-travel.pages.dev/candle-night-lantern-floating-romantic-stay',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【2026年】無数のキャンドルとランタンの揺らめき！幻想的な夜を彩るロマンティック温泉宿5選",
    "description": "2026年最新！竹灯籠やスカイランタン、無数のキャンドルが灯る温泉街と宿の庭園。記念日やカップル旅行にぴったりの幻想的な灯りイベントと名湯宿5選。",
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
    "mainEntityOfPage": "https://croud-travel.pages.dev/candle-night-lantern-floating-romantic-stay"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "キャンドルナイト＆幻想ランタン温泉宿の旅行でおすすめの予約時期やタイミングは？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "人気の日程（連休や週末）は1〜2ヶ月前には満室になることが多いため、早期予約（早割プラン）の利用がおすすめです。また楽天トラベルの「5と0のつく日」キャンペーンを活用すると最大20%オフのクーポンが併用でき、最もお得に予約できます。"
        }
      },
      {
        "@type": "Question",
        "name": "キャンドルナイト＆幻想ランタン温泉宿の宿選びで失敗しないためのポイントは？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "宿泊者レビューのお風呂・お食事・接客評価が4.3以上の宿を選ぶと満足度が非常に高くなります。またアクセス手段（送迎バスの有無など）やプランに含まれる特典を事前に確認しておくと安心です。"
        }
      }
    ]
  };

  const hotels: any[] = [
  {
    "hotelNo": 29110,
    "hotelName": "鹿教湯温泉　旅館　斉北荘",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D29110",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D29110%26f_flg%3DPLAN",
    "hotelMinCharge": 8250,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/29110/29110.jpg",
    "userReview": "ご飯と味噌汁が絶品、とてもくつろげた旅館の宣伝通り、ご飯と味噌汁がすごく美味しかった。お湯も滑らかで肌にも優しい感じがしました。設備は古いですが隅々まで清掃されており、また、旅館の人も親切で、とて…　2026-09-18 19:03:52投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=29110\" class=\"3click\">つづきはこちら</a>",
    "reviewAverage": 4.15,
    "reviewCount": 201,
    "address": "長野県上田市西内1262",
    "access": "北陸新幹線上田駅、中央線松本駅よりバスで50分/中央自動車道松本IC、上信越自動車道東部湯の丸ICよりお車で40分",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F29110%2F29110.html"
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
    "hotelNo": 29387,
    "hotelName": "伊香保温泉　名物畳風呂と料理自慢の宿　ホテルきむら",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D29387",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D29387%26f_flg%3DPLAN",
    "hotelMinCharge": 7150,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/29387/29387.jpg",
    "userReview": "食事も部屋も素晴らしく、スタッフも親切夕食もとても美味しくてお部屋も綺麗でした!スタッフさんも親切な方ばかりで良かったです!また来たいと思いました^_^クチコミの詳細はこちらから　ht…　2026-09-14 18:15:50投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=29387\" class=\"3click\">つづきはこちら</a>",
    "reviewAverage": 3.72,
    "reviewCount": 2084,
    "address": "群馬県渋川市伊香保町伊香保557-32",
    "access": "ＪＲ渋川駅→路線バス（30分）→伊香保バスターミナル下車、またはタクシー（15分）／関越自動車道・渋川伊香保ＩＣ～20分",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F29387%2F29387.html"
  },
  {
    "hotelNo": 2628,
    "hotelName": "四万温泉　源泉掛け流しの貸切風呂と囲炉裏料理宿　湯の宿　山ばと",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D2628",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D2628%26f_flg%3DPLAN",
    "hotelMinCharge": 14000,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/2628/2628.jpg",
    "userReview": "奥四万ダムに近く、温泉と地産料理に癒される奥四万ダムから比較的近いです。料理は量がちょうどよく群馬の食材をつかっておりとても美味しかったです。温泉の湯質は最高でした。何もすることが…　2026-09-19 12:41:07投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=2628\" class=\"3click\">つづきはこちら</a>",
    "reviewAverage": 4.61,
    "reviewCount": 243,
    "address": "群馬県吾妻郡中之条町四万4358-11",
    "access": "関越自動車道・渋川伊香保Ｉ.Ｃから国道353経由60分JR中之条駅からバスで30分　終点から徒歩20分",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F2628%2F2628.html"
  },
  {
    "hotelNo": 56778,
    "hotelName": "下呂温泉　ホテルくさかべアルメリア",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D56778",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D56778%26f_flg%3DPLAN",
    "hotelMinCharge": 7920,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/56778/56778.jpg",
    "userReview": "温泉とショーに大満足、また行きたい!アジアンスイートを利用させていただきましたが、スタッフさん方はみなさん丁寧に接客してくれますし、温泉も最高でしたし、平日限定の湯上がりサロンのビールがめちゃくち…　2026-09-19 08:21:55投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=56778\" class=\"3click\">つづきはこちら</a>",
    "reviewAverage": 4.2,
    "reviewCount": 4750,
    "address": "岐阜県下呂市幸田1811",
    "access": "ＪＲ高山線　下呂駅より車で３分（無料送迎バス有り）/東海環状道富加関ＩＣより７０分又は中央道中津川ＩＣより６０分",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F56778%2F56778.html"
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
          <span className="text-stone-800 font-semibold truncate">キャンドルナイト×幻想ランタン温泉</span>
        </div>
      </div>

      {/* ヒーローヘッダー */}
      <header className="relative bg-emerald-950 text-white py-12 px-4 md:px-8 border-b border-emerald-900">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-800/80 text-emerald-200 text-xs font-bold rounded-full">
            <span>✨ 2026年最新版</span>
            <span>•</span>
            <span>キャンドルナイト×幻想ランタン温泉</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight font-journal-serif leading-tight">
            【2026年】無数のキャンドルとランタンの揺らめき！幻想的な夜を彩るロマンティック温泉宿5選
          </h1>
          <p className="text-stone-300 text-sm md:text-base leading-relaxed">
            夕闇が訪れると、回廊や日本庭園に無数の竹灯籠やキャンドルの灯りが灯る幻想的な夜。柔らかなオレンジ色の光に包まれて歩く夜の散策、ライトアップされた露天風呂に浮かぶ灯篭。非日常のロマンティックな美しさに心が満たされる特別な滞在へ。
          </p>
          <div className="pt-2">
            <ShareButtons title="【2026年】無数のキャンドルとランタンの揺らめき！幻想的な夜を彩るロマンティック温泉宿5選" url="https://croud-travel.pages.dev/candle-night-lantern-floating-romantic-stay" />
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
