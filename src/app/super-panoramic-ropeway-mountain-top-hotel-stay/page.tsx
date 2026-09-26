import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import SpecialCouponBanner from '@/app/components/SpecialCouponBanner';
import ShareButtons from '@/app/components/ShareButtons';

export const metadata: Metadata = {
  title: '【2026年】標高1,000m以上の絶景パノラマ！ロープウェイ直結＆雲上展望山頂ホテル5選 ｜ 日本全国・旅宿クラウド',
  description: '2026年最新！中央アルプス・蔵王・八甲田など、ロープウェイで登る雲上の山頂リゾートホテル5選。眼下に広がる雲海とパノラマ展望露天風呂の感動。',
  keywords: ["雲海ホテル","山頂リゾート","絶景パノラマ","ロープウェイ","高原温泉","楽天トラベル"],
  alternates: {
    canonical: 'https://croud-travel.pages.dev/super-panoramic-ropeway-mountain-top-hotel-stay',
  },
  openGraph: {
    title: '【2026年】標高1,000m以上の絶景パノラマ！ロープウェイ直結＆雲上展望山頂ホテル5選',
    description: '2026年最新！中央アルプス・蔵王・八甲田など、ロープウェイで登る雲上の山頂リゾートホテル5選。眼下に広がる雲海とパノラマ展望露天風呂の感動。',
    url: 'https://croud-travel.pages.dev/super-panoramic-ropeway-mountain-top-hotel-stay',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【2026年】標高1,000m以上の絶景パノラマ！ロープウェイ直結＆雲上展望山頂ホテル5選",
    "description": "2026年最新！中央アルプス・蔵王・八甲田など、ロープウェイで登る雲上の山頂リゾートホテル5選。眼下に広がる雲海とパノラマ展望露天風呂の感動。",
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
    "mainEntityOfPage": "https://croud-travel.pages.dev/super-panoramic-ropeway-mountain-top-hotel-stay"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "雲上マウンテンビュー＆山頂展望温泉ホテルの旅行でおすすめの予約時期やタイミングは？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "人気の日程（連休や週末）は1〜2ヶ月前には満室になることが多いため、早期予約（早割プラン）の利用がおすすめです。また楽天トラベルの「5と0のつく日」キャンペーンを活用すると最大20%オフのクーポンが併用でき、最もお得に予約できます。"
        }
      },
      {
        "@type": "Question",
        "name": "雲上マウンテンビュー＆山頂展望温泉ホテルの宿選びで失敗しないためのポイントは？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "宿泊者レビューのお風呂・お食事・接客評価が4.3以上の宿を選ぶと満足度が非常に高くなります。またアクセス手段（送迎バスの有無など）やプランに含まれる特典を事前に確認しておくと安心です。"
        }
      }
    ]
  };

  const hotels: any[] = [
  {
    "hotelNo": 54556,
    "hotelName": "南紀勝浦温泉　ホテル浦島",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D54556",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D54556%26f_flg%3DPLAN",
    "hotelMinCharge": 8250,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/54556/54556.jpg",
    "userReview": "お客様目線の接客で気持ちよく過ごせたお客様目線の接客で、気持ちよく泊まることができました。クチコミの詳細はこちらから　https://review.travel.rakuten.co.jp/h…　2026-09-19 13:06:01投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=54556\" class=\"3click\">つづきはこちら</a>",
    "reviewAverage": 4.22,
    "reviewCount": 6399,
    "address": "和歌山県東牟婁郡那智勝浦町勝浦1165-2",
    "access": "ＪＲ紀勢線　紀伊勝浦駅から徒歩6分で桟橋へ。更に専用ボート又は、シャトルバスで５分　詳しくは交通案内ページをご覧ください",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F54556%2F54556.html"
  },
  {
    "hotelNo": 79432,
    "hotelName": "八甲田城ヶ倉温泉　ホテル城ヶ倉－ＨＯＴＥＬ　Ｊｏｇａｋｕｒａ－",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D79432",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D79432%26f_flg%3DPLAN",
    "hotelMinCharge": 5900,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/79432/79432.jpg",
    "userReview": "静かな山の中で落ち着いた大人向けの空間山の中で静かなところで、落ち着いた大人向けの宿でした。奥入瀬から酸ヶ湯を経由してきました。新青森にもスムーズに行けました!クチコミの詳細はこちらから　ht…　2026-09-19 20:52:12投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=79432\" class=\"3click\">つづきはこちら</a>",
    "reviewAverage": 4.51,
    "reviewCount": 421,
    "address": "青森県青森市荒川八甲田山中",
    "access": "ＪＲ　青森駅よりＪＲバス十和田湖行き乗車後、城ヶ倉温泉前にて下車",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F79432%2F79432.html"
  },
  {
    "hotelNo": 50545,
    "hotelName": "下田温泉　下田伊東園ホテルはな岬",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D50545",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D50545%26f_flg%3DPLAN",
    "hotelMinCharge": 6248,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/50545/50545.jpg",
    "userReview": "湯温が丁度よく、気持ちよく入浴できた風呂の湯温が丁度よく気持ち良く入浴できましたクチコミの詳細はこちらから　https://review.travel.rakuten.co.jp/hotel/…　2026-09-15 17:07:08投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=50545\" class=\"3click\">つづきはこちら</a>",
    "reviewAverage": 3.78,
    "reviewCount": 1170,
    "address": "静岡県下田市武が浜6-12",
    "access": "伊豆急行　伊豆急下田駅より徒歩５分",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F50545%2F50545.html"
  },
  {
    "hotelNo": 13890,
    "hotelName": "鬼首温泉　リゾートパーク　ホテル　オニコウベ",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D13890",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D13890%26f_flg%3DPLAN",
    "hotelMinCharge": 3850,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/13890/13890.jpg",
    "userReview": "伝統を感じさせる趣のある空間伝統を感じさせる好きなホテルです。クチコミの詳細はこちらから　https://review.travel.rakuten.co.jp/hotel/voice/138…　2026-09-17 16:55:09投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=13890\" class=\"3click\">つづきはこちら</a>",
    "reviewAverage": 4.4,
    "reviewCount": 471,
    "address": "宮城県大崎市鳴子温泉鬼首大清水26-29",
    "access": "東北自動車道古川ICより47号線を鳴子方面へ、岩下こけし資料館前交差点から108号線を秋田方面に入り約20分",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F13890%2F13890.html"
  },
  {
    "hotelNo": 68532,
    "hotelName": "白馬姫川温泉　白馬ハイランドホテル",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D68532",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D68532%26f_flg%3DPLAN",
    "hotelMinCharge": 9500,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/68532/68532.jpg",
    "userReview": "お天気に恵まれまし���今回は連泊しましたが、ビュッフェメニューも豊富で良かったです。朝のお散歩は土日しかないとのことで残念でしたが、夏休み期間は毎日やって欲しいです。また季節を変えて訪ね…　2026-09-19 16:49:05投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=68532\" class=\"3click\">つづきはこちら</a>",
    "reviewAverage": 4.32,
    "reviewCount": 1349,
    "address": "長野県北安曇郡白馬村北城21582",
    "access": "ＪＲ白馬駅より徒歩２０分（無料送迎あり）／長野自動車道安曇野ＩＣより６０分／上信越自動車道長野ＩＣより６０分",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F68532%2F68532.html"
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
          <span className="text-stone-800 font-semibold truncate">雲上パノラマ×山頂展望温泉</span>
        </div>
      </div>

      {/* ヒーローヘッダー */}
      <header className="relative bg-emerald-950 text-white py-12 px-4 md:px-8 border-b border-emerald-900">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-800/80 text-emerald-200 text-xs font-bold rounded-full">
            <span>✨ 2026年最新版</span>
            <span>•</span>
            <span>雲上パノラマ×山頂展望温泉</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight font-journal-serif leading-tight">
            【2026年】標高1,000m以上の絶景パノラマ！ロープウェイ直結＆雲上展望山頂ホテル5選
          </h1>
          <p className="text-stone-300 text-sm md:text-base leading-relaxed">
            下界の喧騒をはるか遠くに望む標高1,000m以上の雲上世界。ロープウェイに乗って訪れる山頂ホテルでは、朝は幻想的な雲海、夕方は山々を染める夕暮れ、夜は満天の星空が広がります。大自然の圧倒的スケールを体感できる絶景マウンテンリゾートをご紹介します。
          </p>
          <div className="pt-2">
            <ShareButtons title="【2026年】標高1,000m以上の絶景パノラマ！ロープウェイ直結＆雲上展望山頂ホテル5選" url="https://croud-travel.pages.dev/super-panoramic-ropeway-mountain-top-hotel-stay" />
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
