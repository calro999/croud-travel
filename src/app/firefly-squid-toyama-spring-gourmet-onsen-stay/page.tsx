import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import SpecialCouponBanner from '@/app/components/SpecialCouponBanner';
import ShareButtons from '@/app/components/ShareButtons';

export const metadata: Metadata = {
  title: '【2026年】富山湾の青い神秘！春のホタルイカ＆富山湾の宝石・白エビ尽くし会席の温泉宿5選 ｜ 日本全国・旅宿クラウド',
  description: '2026年最新！春に旬を迎える富山湾の「ホタルイカ」踊り食い・釜揚げと「白エビ」刺身・かき揚げを贅沢に味わう富山・宇奈月温泉の名宿5選。',
  keywords: ["ホタルイカ","白エビ","富山湾グルメ","宇奈月温泉","春の味覚","楽天トラベル"],
  alternates: {
    canonical: 'https://croud-travel.pages.dev/firefly-squid-toyama-spring-gourmet-onsen-stay',
  },
  openGraph: {
    title: '【2026年】富山湾の青い神秘！春のホタルイカ＆富山湾の宝石・白エビ尽くし会席の温泉宿5選',
    description: '2026年最新！春に旬を迎える富山湾の「ホタルイカ」踊り食い・釜揚げと「白エビ」刺身・かき揚げを贅沢に味わう富山・宇奈月温泉の名宿5選。',
    url: 'https://croud-travel.pages.dev/firefly-squid-toyama-spring-gourmet-onsen-stay',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【2026年】富山湾の青い神秘！春のホタルイカ＆富山湾の宝石・白エビ尽くし会席の温泉宿5選",
    "description": "2026年最新！春に旬を迎える富山湾の「ホタルイカ」踊り食い・釜揚げと「白エビ」刺身・かき揚げを贅沢に味わう富山・宇奈月温泉の名宿5選。",
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
    "mainEntityOfPage": "https://croud-travel.pages.dev/firefly-squid-toyama-spring-gourmet-onsen-stay"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "春の富山湾グルメ・ホタルイカ＆白エビ温泉宿の旅行でおすすめの予約時期やタイミングは？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "人気の日程（連休や週末）は1〜2ヶ月前には満室になることが多いため、早期予約（早割プラン）の利用がおすすめです。また楽天トラベルの「5と0のつく日」キャンペーンを活用すると最大20%オフのクーポンが併用でき、最もお得に予約できます。"
        }
      },
      {
        "@type": "Question",
        "name": "春の富山湾グルメ・ホタルイカ＆白エビ温泉宿の宿選びで失敗しないためのポイントは？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "宿泊者レビューのお風呂・お食事・接客評価が4.3以上の宿を選ぶと満足度が非常に高くなります。またアクセス手段（送迎バスの有無など）やプランに含まれる特典を事前に確認しておくと安心です。"
        }
      }
    ]
  };

  const hotels: any[] = [
  {
    "hotelNo": 39202,
    "hotelName": "天然温泉　剱の湯　ドーミーイン富山",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D39202",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D39202%26f_flg%3DPLAN",
    "hotelMinCharge": 5650,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/39202/39202.jpg",
    "userReview": "5/11(月)に宿泊しました。ビジネスで利用し、私含めて3名3室利用の滞在でした。部屋は清掃が行き届いていて少し狭いながらも快適でした。夜鳴きそば/ラーメン や、大浴室前のアイス食べ放題は温泉上がりに…　2026-09-05 16:28:07投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=39202\" class=\"3click\">つづきはこちら</a>",
    "reviewAverage": 4.37,
    "reviewCount": 7886,
    "address": "富山県富山市大手町4-8",
    "access": "JR富山駅より環状線セントラムで国際会議場前電停下車徒歩2分／富山空港から路線バスで「総曲輪」バス停下車すぐ",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F39202%2F39202.html"
  },
  {
    "hotelNo": 1032,
    "hotelName": "富山マンテンホテル（マンテンホテルグループ）",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D1032",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D1032%26f_flg%3DPLAN",
    "hotelMinCharge": 4680,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/1032/1032.jpg",
    "userReview": "駅から徒歩圏内、朝食と大浴場に満足駅から少し歩くが徒歩圏内。朝食が美味しく、生卵がまだおいてるよいホテル。大浴場もよい。フロントの方々も、他の全国チェーンホテルより質が高い。富山の定宿クチコミ…　2026-09-19 15:48:46投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=1032\" class=\"3click\">つづきはこちら</a>",
    "reviewAverage": 4.15,
    "reviewCount": 4232,
    "address": "富山県富山市本町2-17",
    "access": "市内路面電車「南富山駅前」行で約5分、桜橋電停下車すぐ（ＪＲ富山駅より徒歩１０分）／富山ＩＣより車で１５分",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F1032%2F1032.html"
  },
  {
    "hotelNo": 10934,
    "hotelName": "富山地鉄ホテル",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D10934",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D10934%26f_flg%3DPLAN",
    "hotelMinCharge": 5400,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/10934/10934.jpg",
    "userReview": "富山の産物を使った朝食が本当に美味しい年間に何度も富山へ参りますが、このホテルに宿泊しています。朝の食事、本当に美味しいです。富山の産物、良いですねえ。クチコミの詳細はこちらから　http…　2026-09-19 18:20:11投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=10934\" class=\"3click\">つづきはこちら</a>",
    "reviewAverage": 4.19,
    "reviewCount": 3938,
    "address": "富山県富山市桜町1-1-1",
    "access": "・ＪＲ富山駅横 　・富山空港よりバス・タクシーで約25分　・富山ＩＣより約20分",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F10934%2F10934.html"
  },
  {
    "hotelNo": 10634,
    "hotelName": "ＴＯＧＥＮ　黒部　宇奈月温泉",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D10634",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D10634%26f_flg%3DPLAN",
    "hotelMinCharge": 24200,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/10634/10634.jpg",
    "userReview": "掃除が行き届き、食事も美味しくお風呂も快適古い建物ですが掃除が行き届いておりました。夕食はとても美味しく食べ切れない程です。混雑しておらずお風呂もゆっくり入れました。クチコミの詳細はこちら…　2026-09-14 00:05:14投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=10634\" class=\"3click\">つづきはこちら</a>",
    "reviewAverage": 4.45,
    "reviewCount": 1176,
    "address": "富山県黒部市宇奈月温泉22-1",
    "access": "富山地方鉄道「宇奈月温泉駅」より徒歩５分。北陸HW黒部ＩＣより２０分。立山・黒部アルペンルート立山駅まで約８０分。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F10634%2F10634.html"
  },
  {
    "hotelNo": 70252,
    "hotelName": "船でしか行けない秘境の一軒宿　大牧温泉",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D70252",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D70252%26f_flg%3DPLAN",
    "hotelMinCharge": 33000,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/70252/70252.jpg",
    "userReview": "Wi-Fi完備で快適、食事も温泉も大満足2回目でした。1回目は携帯が全く繋がりませんでしたが、今回はWi-Fiで繋がって良かったです。露天風呂の温度がちょうど良い感じで、ずっと入っていたかったです…　2026-09-17 11:44:23投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=70252\" class=\"3click\">つづきはこちら</a>",
    "reviewAverage": 4.41,
    "reviewCount": 269,
    "address": "富山県南砺市利賀村大牧44",
    "access": "北陸新幹線 新高岡駅から車で35分、砺波ICから車で15分　→小牧から船で30分。最終16：00発(冬は15：20発）",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F70252%2F70252.html"
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
          <span className="text-stone-800 font-semibold truncate">春のホタルイカ×白エビ会席宿</span>
        </div>
      </div>

      {/* ヒーローヘッダー */}
      <header className="relative bg-emerald-950 text-white py-12 px-4 md:px-8 border-b border-emerald-900">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-800/80 text-emerald-200 text-xs font-bold rounded-full">
            <span>✨ 2026年最新版</span>
            <span>•</span>
            <span>春のホタルイカ×白エビ会席宿</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight font-journal-serif leading-tight">
            【2026年】富山湾の青い神秘！春のホタルイカ＆富山湾の宝石・白エビ尽くし会席の温泉宿5選
          </h1>
          <p className="text-stone-300 text-sm md:text-base leading-relaxed">
            春の富山湾を彩る「海の神秘」ホタルイカと「富山湾の宝石」白エビ。ぷりぷりの生ホタルイカの沖漬け、熱々の釜揚げ、そして透き通るような白エビの甘みあふれるお造り。黒部峡谷の雄大な絶景温泉とともに味わう春限定の最高峰グルメ旅。
          </p>
          <div className="pt-2">
            <ShareButtons title="【2026年】富山湾の青い神秘！春のホタルイカ＆富山湾の宝石・白エビ尽くし会席の温泉宿5選" url="https://croud-travel.pages.dev/firefly-squid-toyama-spring-gourmet-onsen-stay" />
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
