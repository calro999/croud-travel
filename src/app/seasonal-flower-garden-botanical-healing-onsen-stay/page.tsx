import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import SpecialCouponBanner from '@/app/components/SpecialCouponBanner';
import ShareButtons from '@/app/components/ShareButtons';

export const metadata: Metadata = {
  title: '四季折々の花畑と名園美に包まれる！美しい日本庭園と美肌温泉で心潤す花巡り宿 ｜ 日本全国・旅宿クラウド',
  description: '2026年最新！美しい四季の花畑と名園を散策できる極上の日本庭園温泉宿。季節ごとの草花と名湯に癒やされる心潤う女子旅・夫婦旅におすすめの宿。',
  keywords: ["日本庭園","花巡り","露天風呂","美肌温泉","楽天トラベル"],
  alternates: {
    canonical: 'https://croud-travel.pages.dev/seasonal-flower-garden-botanical-healing-onsen-stay',
  },
  openGraph: {
    title: '四季折々の花畑と名園美に包まれる！美しい日本庭園と美肌温泉で心潤す花巡り宿',
    description: '2026年最新！美しい四季の花畑と名園を散策できる極上の日本庭園温泉宿。季節ごとの草花と名湯に癒やされる心潤う女子旅・夫婦旅におすすめの宿。',
    url: 'https://croud-travel.pages.dev/seasonal-flower-garden-botanical-healing-onsen-stay',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "四季折々の花畑と名園美に包まれる！美しい日本庭園と美肌温泉で心潤す花巡り宿",
    "description": "2026年最新！美しい四季の花畑と名園を散策できる極上の日本庭園温泉宿。季節ごとの草花と名湯に癒やされる心潤う女子旅・夫婦旅におすすめの宿。",
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
    "mainEntityOfPage": "https://croud-travel.pages.dev/seasonal-flower-garden-botanical-healing-onsen-stay"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "四季の名園＆花巡り日本庭園温泉宿の旅行でおすすめの予約時期やタイミングは？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "人気の日程（連休や週末）は1〜2ヶ月前には満室になることが多いため、早期予約（早割プラン）の利用がおすすめです。また楽天トラベルの「5と0のつく日」キャンペーンを活用すると最大20%オフのクーポンが併用でき、最もお得に予約できます。"
        }
      },
      {
        "@type": "Question",
        "name": "四季の名園＆花巡り日本庭園温泉宿の宿選びで失敗しないためのポイントは？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "宿泊者レビューのお風呂・お食事・接客評価が4.3以上の宿を選ぶと満足度が非常に高くなります。またアクセス手段（送迎バスの有無など）やプランに含まれる特典を事前に確認しておくと安心です。"
        }
      }
    ]
  };

  const hotels: any[] = [
  {
    "hotelNo": 68475,
    "hotelName": "中ノ沢温泉　庭園露天風呂の宿　朝日屋旅館",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D68475",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D68475%26f_flg%3DPLAN",
    "hotelMinCharge": 5500,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/68475/68475.jpg",
    "userReview": "部屋はきれいで広く、お風呂も心地良いエントランス辺りは雑然としていたが、部屋はきれいで広かった。お風呂はとても心地良かった。食事はないので、公共交通機関で来る方は気をつけてください。ク…　2026-09-16 12:31:30投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=68475\" class=\"3click\">つづきはこちら</a>",
    "reviewAverage": 3.09,
    "reviewCount": 229,
    "address": "福島県耶麻郡猪苗代町蚕養沼尻山甲2855-111",
    "access": "ＪＲ磐越西線　猪苗代駅より路線バスで３０分、又は車で２０分",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F68475%2F68475.html"
  },
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
    "hotelNo": 80709,
    "hotelName": "玉名温泉　1350坪の日本庭園の宿　尚玄山荘",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D80709",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D80709%26f_flg%3DPLAN",
    "hotelMinCharge": 7000,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/80709/80709.jpg",
    "userReview": "庭園の景色と温泉、食事に両親も大満足部屋から見える庭園の景色が良く、池の鯉を眺めて癒やされました。温泉の温度が熱すぎず、ゆったり入浴できてとても気持ちよかったです。夜と朝の食事は大変美味しく、スタ…　2026-09-17 00:05:43投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=80709\" class=\"3click\">つづきはこちら</a>",
    "reviewAverage": 4.21,
    "reviewCount": 293,
    "address": "熊本県玉名市河崎1-1",
    "access": "ＪＲ玉名駅から車で8分　新玉名駅より車で5分��九州自動車道菊水インターより15分",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F80709%2F80709.html"
  },
  {
    "hotelNo": 19206,
    "hotelName": "庭園と感動の宿　富士山温泉　ホテル鐘山苑",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D19206",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D19206%26f_flg%3DPLAN",
    "hotelMinCharge": 22000,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/19206/19206.jpg",
    "userReview": "天気が悪くても庭や室内が綺麗でとても快適天気はあまりよくありませんでしたが室内や大きな庭がきれいに維持されており気持ちよく過ごすことができました。夜の手品ショーや太鼓の演舞なども良かったで…　2026-09-13 10:28:14投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=19206\" class=\"3click\">つづきはこちら</a>",
    "reviewAverage": 4.7,
    "reviewCount": 1138,
    "address": "山梨県富士吉田市上吉田東9-1-18",
    "access": "富士急行線富士山駅より１３時～１８時の間無料送迎あり／車８分／駅到着時にお電話下さい／翌日のお送りは８：００より３０分毎",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F19206%2F19206.html"
  },
  {
    "hotelNo": 31681,
    "hotelName": "箱根湯本温泉　庭園露天を味わう宿　湯さか荘",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D31681",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D31681%26f_flg%3DPLAN",
    "hotelMinCharge": 22000,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/31681/31681.jpg",
    "userReview": "赤ちゃん連れに最適、部屋食と設備が充実赤ちゃん連れで宿泊しましたが、とても快適に過ごせました!オムツやオムツ用のゴミ箱、ベビーベッド、ベビーソープなど、赤ちゃん向けの設備が整っていて助かり…　2026-08-17 09:31:36投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=31681\" class=\"3click\">つづきはこちら</a>",
    "reviewAverage": 4.59,
    "reviewCount": 558,
    "address": "神奈川県足柄下郡箱根町湯本茶屋35",
    "access": "箱根湯本駅より徒歩約15分または旅館共同送迎バス（200円）で約5分／小田原厚木道路箱根口ＩＣ→国道1号→県道732号",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F31681%2F31681.html"
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
          <span className="text-stone-800 font-semibold truncate">四季の名園×花巡り温泉</span>
        </div>
      </div>

      {/* ヒーローヘッダー */}
      <header className="relative bg-emerald-950 text-white py-12 px-4 md:px-8 border-b border-emerald-900">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-800/80 text-emerald-200 text-xs font-bold rounded-full">
            <span>✨ 2026年最新版</span>
            <span>•</span>
            <span>四季の名園×花巡り温泉</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight font-journal-serif leading-tight">
            四季折々の花畑と名園美に包まれる！美しい日本庭園と美肌温泉で心潤す花巡り宿
          </h1>
          <p className="text-stone-300 text-sm md:text-base leading-relaxed">
            春の桜やツツジ、初夏の紫陽花、秋の紅葉、冬の寒椿まで。丹精込めて手入れされた広大な日本庭園や四季折々の花々を愛でながら、湯量豊富な美肌の湯に浸かる贅沢。花の香りと鳥のさえずりに包まれる優美な温泉宿をご紹介します。
          </p>
          <div className="pt-2">
            <ShareButtons title="四季折々の花畑と名園美に包まれる！美しい日本庭園と美肌温泉で心潤す花巡り宿" url="https://croud-travel.pages.dev/seasonal-flower-garden-botanical-healing-onsen-stay" />
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
