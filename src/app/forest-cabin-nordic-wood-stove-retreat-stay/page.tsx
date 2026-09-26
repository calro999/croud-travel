import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import SpecialCouponBanner from '@/app/components/SpecialCouponBanner';
import ShareButtons from '@/app/components/ShareButtons';

export const metadata: Metadata = {
  title: '【2026年】パチパチ爆ぜる薪ストーブと木の香り！北欧風ログキャビン＆森林温泉リトリート5選 ｜ 日本全国・旅宿クラウド',
  description: '2026年最新！本物の薪ストーブの炎に癒やされ、針葉樹の森でマイナスイオンを深呼吸する北欧風ログハウス＆コテージ温泉宿5選。心温まる休日。',
  keywords: ["薪ストーブ","ログハウス","コテージ","森林浴温泉","冬旅","楽天トラベル"],
  alternates: {
    canonical: 'https://croud-travel.pages.dev/forest-cabin-nordic-wood-stove-retreat-stay',
  },
  openGraph: {
    title: '【2026年】パチパチ爆ぜる薪ストーブと木の香り！北欧風ログキャビン＆森林温泉リトリート5選',
    description: '2026年最新！本物の薪ストーブの炎に癒やされ、針葉樹の森でマイナスイオンを深呼吸する北欧風ログハウス＆コテージ温泉宿5選。心温まる休日。',
    url: 'https://croud-travel.pages.dev/forest-cabin-nordic-wood-stove-retreat-stay',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【2026年】パチパチ爆ぜる薪ストーブと木の香り！北欧風ログキャビン＆森林温泉リトリート5選",
    "description": "2026年最新！本物の薪ストーブの炎に癒やされ、針葉樹の森でマイナスイオンを深呼吸する北欧風ログハウス＆コテージ温泉宿5選。心温まる休日。",
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
    "mainEntityOfPage": "https://croud-travel.pages.dev/forest-cabin-nordic-wood-stove-retreat-stay"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "薪ストーブ＆北欧ログキャビン森林温泉宿の旅行でおすすめの予約時期やタイミングは？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "人気の日程（連休や週末）は1〜2ヶ月前には満室になることが多いため、早期予約（早割プラン）の利用がおすすめです。また楽天トラベルの「5と0のつく日」キャンペーンを活用すると最大20%オフのクーポンが併用でき、最もお得に予約できます。"
        }
      },
      {
        "@type": "Question",
        "name": "薪ストーブ＆北欧ログキャビン森林温泉宿の宿選びで失敗しないためのポイントは？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "宿泊者レビューのお風呂・お食事・接客評価が4.3以上の宿を選ぶと満足度が非常に高くなります。またアクセス手段（送迎バスの有無など）やプランに含まれる特典を事前に確認しておくと安心です。"
        }
      }
    ]
  };

  const hotels: any[] = [
  {
    "hotelNo": 190680,
    "hotelName": "薪ストーブ付き貸切コテージ【千一の宿】－　ガイアリゾート　＾",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D190680",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D190680%26f_flg%3DPLAN",
    "hotelMinCharge": 10826,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/190680/190680.jpg",
    "userReview": "絶景のロケーションとおもてなしに心から癒やされました。",
    "reviewAverage": 4.4,
    "reviewCount": 100,
    "address": "宮城県刈田郡蔵王町遠刈田温泉字八山4-２4３　薪ストーブ付き貸切コテージ【千一の宿】-　ガイアリゾート",
    "access": "東白石駅から車で約２３分",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F190680%2F190680.html"
  },
  {
    "hotelNo": 136041,
    "hotelName": "カナディアンログコテージＴＡＫＩＴＡＲＯ",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D136041",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D136041%26f_flg%3DPLAN",
    "hotelMinCharge": 3500,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/136041/136041.jpg",
    "userReview": "静かなコテージで仕事も休日も大満喫!静かなところで集中して仕事をしつつリラックスしたいな、、と思いこちらに宿泊しました。イメージどおりの素敵なコテージ!平日だったせいか大きめの棟を貸してく…　2026-09-17 17:44:13投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=136041\" class=\"3click\">つづきはこちら</a>",
    "reviewAverage": 4.62,
    "reviewCount": 83,
    "address": "長野県安曇野市穂高有明8953",
    "access": "ＪＲ　穂高駅よりお車にて８分 安曇野インターから車18分",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F136041%2F136041.html"
  },
  {
    "hotelNo": 7445,
    "hotelName": "安曇野高原リゾート（旧：ＡＭＢＩＥＮＴ安曇野ホテル／ＡＭＢＩＥＮＴ安曇野コテージ）",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D7445",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D7445%26f_flg%3DPLAN",
    "hotelMinCharge": 6690,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/7445/7445.jpg",
    "userReview": "チェックイン時の案内不足があったけれど、お食事とお風呂は大満足でした。自動チェックイン機で18時くらいにチェックインしたのですが、お風呂の時間、朝食の時間、朝食の場所など何もわかりませんでした。チ…　2026-09-19 10:53:36投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=7445\" class=\"3click\">つづきはこちら</a>",
    "reviewAverage": 3.91,
    "reviewCount": 2640,
    "address": "長野県安曇野市穂高牧2230",
    "access": "長野自動車道　安曇野ＩＣから穂高方面に約30分",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F7445%2F7445.html"
  },
  {
    "hotelNo": 166560,
    "hotelName": "わんわんパラダイス　安曇野（旧：安曇野わんわんパラダイス　コテージ）",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D166560",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D166560%26f_flg%3DPLAN",
    "hotelMinCharge": 14230,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/166560/166560.jpg",
    "userReview": "愛犬とのお部屋は清潔で眺めも最高!愛犬とはじめて宿泊しました。駐車場からのアクセスは急斜面と階段で少々きつかったです。外観は古めですがお部屋の中はとっても清潔で素敵なお部屋でし…　2026-09-15 23:57:20投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=166560\" class=\"3click\">つづきはこちら</a>",
    "reviewAverage": 3.94,
    "reviewCount": 142,
    "address": "長野県安曇野市穂高牧2230",
    "access": "長野自動車道　安曇野ＩＣから約30分。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F166560%2F166560.html"
  },
  {
    "hotelNo": 196250,
    "hotelName": "富良野コテージ　富夢",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D196250",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D196250%26f_flg%3DPLAN",
    "hotelMinCharge": 6200,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/196250/196250.jpg",
    "userReview": "大人の隠れ家で過ごす、格別なコーヒータイム美瑛・富良野方面の観光のため、妻と2人で1泊させていただきました。3泊4日の行程の中で、1泊はコテージに泊まりたいと考えて探していたところ、一棟貸…　2026-09-19 19:44:07投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=196250\" class=\"3click\">つづきはこちら</a>",
    "reviewAverage": 4.81,
    "reviewCount": 83,
    "address": "北海道空知郡中富良野町東4線北14号",
    "access": "ＪＲ中富良野駅よりお車で約５分、旭川空港よりお車で約４5分",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F196250%2F196250.html"
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
          <span className="text-stone-800 font-semibold truncate">薪ストーブ×北欧ログキャビン</span>
        </div>
      </div>

      {/* ヒーローヘッダー */}
      <header className="relative bg-emerald-950 text-white py-12 px-4 md:px-8 border-b border-emerald-900">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-800/80 text-emerald-200 text-xs font-bold rounded-full">
            <span>✨ 2026年最新版</span>
            <span>•</span>
            <span>薪ストーブ×北欧ログキャビン</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight font-journal-serif leading-tight">
            【2026年】パチパチ爆ぜる薪ストーブと木の香り！北欧風ログキャビン＆森林温泉リトリート5選
          </h1>
          <p className="text-stone-300 text-sm md:text-base leading-relaxed">
            揺らめく炎を眺めながら温かいココアやウイスキーを傾ける薪ストーブの贅沢な時間。木の温もりにあふれた北欧風のログハウスやキャビンで、深い森の静寂に包まれるステイ。敷地内の天然温泉や薪サウナで芯から温まるヒーリングリトリートへ。
          </p>
          <div className="pt-2">
            <ShareButtons title="【2026年】パチパチ爆ぜる薪ストーブと木の香り！北欧風ログキャビン＆森林温泉リトリート5選" url="https://croud-travel.pages.dev/forest-cabin-nordic-wood-stove-retreat-stay" />
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
