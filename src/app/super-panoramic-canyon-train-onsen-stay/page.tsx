import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import SpecialCouponBanner from '@/app/components/SpecialCouponBanner';
import ShareButtons from '@/app/components/ShareButtons';

export const metadata: Metadata = {
  title: '【2026年】風を感じる絶景トロッコ列車！黒部峡谷・嵯峨野など渓谷美と沿線名湯の温泉宿5選 ｜ 日本全国・旅宿クラウド',
  description: '2026年最新！黒部峡谷トロッコ電車や嵯峨野観光鉄道など、爽快なトロッコ列車旅と沿線の絶景峡谷温泉を満喫できる人気宿5選。',
  keywords: ["トロッコ列車","黒部峡谷","嵯峨野トロッコ","鉄道旅","渓谷温泉","楽天トラベル"],
  alternates: {
    canonical: 'https://croud-travel.pages.dev/super-panoramic-canyon-train-onsen-stay',
  },
  openGraph: {
    title: '【2026年】風を感じる絶景トロッコ列車！黒部峡谷・嵯峨野など渓谷美と沿線名湯の温泉宿5選',
    description: '2026年最新！黒部峡谷トロッコ電車や嵯峨野観光鉄道など、爽快なトロッコ列車旅と沿線の絶景峡谷温泉を満喫できる人気宿5選。',
    url: 'https://croud-travel.pages.dev/super-panoramic-canyon-train-onsen-stay',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【2026年】風を感じる絶景トロッコ列車！黒部峡谷・嵯峨野など渓谷美と沿線名湯の温泉宿5選",
    "description": "2026年最新！黒部峡谷トロッコ電車や嵯峨野観光鉄道など、爽快なトロッコ列車旅と沿線の絶景峡谷温泉を満喫できる人気宿5選。",
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
    "mainEntityOfPage": "https://croud-travel.pages.dev/super-panoramic-canyon-train-onsen-stay"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "絶景トロッコ列車旅＆峡谷沿線温泉宿の旅行でおすすめの予約時期やタイミングは？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "人気の日程（連休や週末）は1〜2ヶ月前には満室になることが多いため、早期予約（早割プラン）の利用がおすすめです。また楽天トラベルの「5と0のつく日」キャンペーンを活用すると最大20%オフのクーポンが併用でき、最もお得に予約できます。"
        }
      },
      {
        "@type": "Question",
        "name": "絶景トロッコ列車旅＆峡谷沿線温泉宿の宿選びで失敗しないためのポイントは？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "宿泊者レビューのお風呂・お食事・接客評価が4.3以上の宿を選ぶと満足度が非常に高くなります。またアクセス手段（送迎バスの有無など）やプランに含まれる特典を事前に確認しておくと安心です。"
        }
      }
    ]
  };

  const hotels: any[] = [
  {
    "hotelNo": 40625,
    "hotelName": "黒部峡谷・宇奈月温泉　ホテル黒部",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D40625",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D40625%26f_flg%3DPLAN",
    "hotelMinCharge": 6600,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/40625/40625.jpg",
    "userReview": "お風呂のメッセージとスタッフの温かい見送りとても良かったです。お風呂の入り口に貼ってあるメッセージも感動しました。あれは貰って良かったのかな?ご飯も美味しく、お腹いっぱいになりました。チェ…　2026-09-16 22:25:29投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=40625\" class=\"3click\">つづきはこちら</a>",
    "reviewAverage": 4.45,
    "reviewCount": 1246,
    "address": "富山県黒部市宇奈月温泉７番地",
    "access": "北陸新幹線黒部宇奈月温泉駅から富山地鉄乗り換え25分。 宇奈月温泉駅から歩10分／北陸道 黒部ＩＣから約20分。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F40625%2F40625.html"
  },
  {
    "hotelNo": 9273,
    "hotelName": "洞川温泉　行者の宿　角甚",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D9273",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D9273%26f_flg%3DPLAN",
    "hotelMinCharge": 20900,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/9273/9273.jpg",
    "userReview": "露天風呂と牡丹鍋、縁側でのんびり満喫露天風呂付きのお部屋で、ゆっくり過ごす事が出来ました!料理も牡丹鍋など、とても美味しかったです。どうしても鮎の塩焼きが食べたかったので、追加で注文させて頂き…　2026-09-07 21:01:09投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=9273\" class=\"3click\">つづきはこちら</a>",
    "reviewAverage": 4.73,
    "reviewCount": 295,
    "address": "奈良県吉野郡天川村洞川240",
    "access": "近鉄電車下市口駅より、奈良交通バスで約８０分。タクシ-で４０分。南阪奈道路　橿原終点より車で約７０分。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F9273%2F9273.html"
  },
  {
    "hotelNo": 17905,
    "hotelName": "会津湯野上温泉　花鳥華やか風月の宿　藤龍館",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D17905",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D17905%26f_flg%3DPLAN",
    "hotelMinCharge": 22080,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/17905/17905.jpg",
    "userReview": "食事が絶品、雪の時期に再訪したい朝晩の食事がとっても美味しいです。なので、連泊での昼軽食を ”まかない” で食せるプラン(特注)があるといいですねー。 雪の時期にぜひ再訪したいです。クチコミの…　2026-09-17 19:26:05投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=17905\" class=\"3click\">つづきはこちら</a>",
    "reviewAverage": 4.75,
    "reviewCount": 262,
    "address": "福島県南会津郡下郷町湯野上舘本乙1338",
    "access": "湯野上温泉駅より徒歩１��分／東北自動車道・白河ＩＣより６０分／磐越自動車道・会津若松ＩＣより５０分",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F17905%2F17905.html"
  },
  {
    "hotelNo": 69393,
    "hotelName": "つるぎ恋月　立山連峰を望む天然温泉旅館",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D69393",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D69393%26f_flg%3DPLAN",
    "hotelMinCharge": 9900,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/69393/69393.jpg",
    "userReview": "食事も部屋も文句なし、また泊まりたい食事朝も夜も美味しく頂きました部屋も設備も文句なしですまた泊まりたいホテルですクチコミの詳細はこちらから　https://review.trav…　2026-09-14 13:41:03投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=69393\" class=\"3click\">つづきはこちら</a>",
    "reviewAverage": 4.08,
    "reviewCount": 1072,
    "address": "富山県中新川郡上市町湯上野1",
    "access": "立山ICより10分。上市駅より車にて7分。アルペンルート立山駅、宇奈月トロッコまで各50分。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F69393%2F69393.html"
  },
  {
    "hotelNo": 71930,
    "hotelName": "湯宿　丸文",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D71930",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D71930%26f_flg%3DPLAN",
    "hotelMinCharge": 11000,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/71930/71930.jpg",
    "userReview": "3月中旬に利用三連休で初めて洞川温泉へ行った際に利用させていただきました。施設は全体的に年季の入ったお宿でエントランスはキレイで畳のスリッパは履き心地が良かったです。構造上仕方ないのかもし…　2026-03-24 23:37:57投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=71930\" class=\"3click\">つづきはこちら</a>",
    "reviewAverage": 3.5,
    "reviewCount": 52,
    "address": "奈良県吉野郡天川村洞川209",
    "access": "近鉄吉野線　下市口駅よりバスで９０分、バス停洞川温泉下車徒歩７分",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F71930%2F71930.html"
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
          <span className="text-stone-800 font-semibold truncate">トロッコ列車×峡谷絶景温泉</span>
        </div>
      </div>

      {/* ヒーローヘッダー */}
      <header className="relative bg-emerald-950 text-white py-12 px-4 md:px-8 border-b border-emerald-900">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-800/80 text-emerald-200 text-xs font-bold rounded-full">
            <span>✨ 2026年最新版</span>
            <span>•</span>
            <span>トロッコ列車×峡谷絶景温泉</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight font-journal-serif leading-tight">
            【2026年】風を感じる絶景トロッコ列車！黒部峡谷・嵯峨野など渓谷美と沿線名湯の温泉宿5選
          </h1>
          <p className="text-stone-300 text-sm md:text-base leading-relaxed">
            窓のないオープン客車からダイナミックな峡谷美と清流のしぶきを肌で感じるトロッコ列車の旅。四季折々のトンネルをくぐり抜けた先に広がる秘境の名湯。川のせせらぎを眼下に望む露天風呂と、地元の山海の幸に舌鼓を打つ感動の鉄道温泉旅へ。
          </p>
          <div className="pt-2">
            <ShareButtons title="【2026年】風を感じる絶景トロッコ列車！黒部峡谷・嵯峨野など渓谷美と沿線名湯の温泉宿5選" url="https://croud-travel.pages.dev/super-panoramic-canyon-train-onsen-stay" />
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
