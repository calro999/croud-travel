import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import SpecialCouponBanner from '@/app/components/SpecialCouponBanner';
import ShareButtons from '@/app/components/ShareButtons';

export const metadata: Metadata = {
  title: '【2026年】プラネタリウム＆星空シアター付き！満天の星と宇宙の神秘に浸るリゾート宿5選 ｜ 日本全国・旅宿クラウド',
  description: '2026年最新！館内に本格プラネタリウムや星空観察シアターを備え、夜は満天の天の川を眺められる宇宙体験リゾートホテル5選。',
  keywords: ["プラネタリウム","星空シアター","天体観測","宇宙ステイ","星空リゾート","楽天トラベル"],
  alternates: {
    canonical: 'https://croud-travel.pages.dev/private-observatory-planetarium-luxury-villa-stay',
  },
  openGraph: {
    title: '【2026年】プラネタリウム＆星空シアター付き！満天の星と宇宙の神秘に浸るリゾート宿5選',
    description: '2026年最新！館内に本格プラネタリウムや星空観察シアターを備え、夜は満天の天の川を眺められる宇宙体験リゾートホテル5選。',
    url: 'https://croud-travel.pages.dev/private-observatory-planetarium-luxury-villa-stay',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【2026年】プラネタリウム＆星空シアター付き！満天の星と宇宙の神秘に浸るリゾート宿5選",
    "description": "2026年最新！館内に本格プラネタリウムや星空観察シアターを備え、夜は満天の天の川を眺められる宇宙体験リゾートホテル5選。",
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
    "mainEntityOfPage": "https://croud-travel.pages.dev/private-observatory-planetarium-luxury-villa-stay"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "館内プラネタリウム＆星空シアターリゾートの旅行でおすすめの予約時期やタイミングは？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "人気の日程（連休や週末）は1〜2ヶ月前には満室になることが多いため、早期予約（早割プラン）の利用がおすすめです。また楽天トラベルの「5と0のつく日」キャンペーンを活用すると最大20%オフのクーポンが併用でき、最もお得に予約できます。"
        }
      },
      {
        "@type": "Question",
        "name": "館内プラネタリウム＆星空シアターリゾートの宿選びで失敗しないためのポイントは？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "宿泊者レビューのお風呂・お食事・接客評価が4.3以上の宿を選ぶと満足度が非常に高くなります。またアクセス手段（送迎バスの有無など）やプランに含まれる特典を事前に確認しておくと安心です。"
        }
      }
    ]
  };

  const hotels: any[] = [
  {
    "hotelNo": 188816,
    "hotelName": "星空と清流の森　グランピングＩＲＯＤＯＲＩ",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D188816",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D188816%26f_flg%3DPLAN",
    "hotelMinCharge": 5000,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/188816/188816.jpg",
    "userReview": "せっかく自然の多い秩父に泊まるということで、雰囲気の良さげな宿を予約しました。風呂トイレは共用ですが、部屋の数が3部屋のみのため混みあうこともなく、風呂は時間帯で交代性でとても良かったです。夜はバ…　2026-09-16 06:37:33投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=188816\" class=\"3click\">つづきはこちら</a>",
    "reviewAverage": 4.25,
    "reviewCount": 74,
    "address": "埼玉県秩父市定峰245",
    "access": "西武秩父駅よりお車で約１５分　西武秩父駅より終点バス停（定峰）から徒歩1分   関越自動車道花園ＩＣよりお車で約３０分",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F188816%2F188816.html"
  },
  {
    "hotelNo": 149038,
    "hotelName": "ホテル　白竜湖リゾート",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D149038",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D149038%26f_flg%3DPLAN",
    "hotelMinCharge": 5600,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/149038/149038.jpg",
    "userReview": "近くのゴルフ場が雷の為中断になり早めにチェックインさせて頂きました助かりました。料理も量もちょうどよくとてもおいしかったです。スタッフの方達も皆さん 感じがよく安いプランなどあれば…　2026-09-15 14:04:58投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=149038\" class=\"3click\">つづきはこちら</a>",
    "reviewAverage": 4.56,
    "reviewCount": 192,
    "address": "広島県三原市大和町箱川4007-7",
    "access": "山陽本線　河内駅より車で約１０分　　広島空港より車で約２０分　　山陽道河内ＩＣより車で約25分",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F149038%2F149038.html"
  },
  {
    "hotelNo": 38754,
    "hotelName": "八ヶ岳グレイスホテル",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D38754",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D38754%26f_flg%3DPLAN",
    "hotelMinCharge": 8925,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/38754/38754.jpg",
    "userReview": "スタッフの対応と食事が最高、また行きたい皆さんのレビュー通り、スタッフの方々は感じのよい方ばかりで、お部屋は古いながらも清潔で掃除が行き届いており、お食事が全てとても美味しく、大変気持ちよく利用さ…　2026-09-16 17:27:24投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=38754\" class=\"3click\">つづきはこちら</a>",
    "reviewAverage": 4.53,
    "reviewCount": 2208,
    "address": "長野県南佐久郡南牧村野辺山217-1",
    "access": "野辺山駅より車で約5分（無料送迎あり・予約制／お電話ま��は公式HPのご予約フォームより） 中央道・長坂ICより約20分",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F38754%2F38754.html"
  },
  {
    "hotelNo": 28045,
    "hotelName": "ホテル一宮シーサイドオーツカ",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D28045",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D28045%26f_flg%3DPLAN",
    "hotelMinCharge": 11495,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/28045/28045.jpg",
    "userReview": "送迎や細やかな心遣いに感謝、最高の旅行に電車で行きましたが、駅までお迎えに来てくださりありがとうございました。お部屋は広くて快適で、窓から海が見え、朝食もとてもおいしかったです。次の日は大雨の…　2026-09-19 16:58:06投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=28045\" class=\"3click\">つづきはこちら</a>",
    "reviewAverage": 4.5,
    "reviewCount": 594,
    "address": "千葉県長生郡一宮町一宮10000",
    "access": "JR外房線「上総一ノ宮駅」タクシー約7分（定時送迎バス有）九十九里有料道路終点（一宮）より約3ｋｍ/ドイツ村まで60分",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F28045%2F28045.html"
  },
  {
    "hotelNo": 184118,
    "hotelName": "ウォーターマークホテル沖縄　宮古島＜伊良部島＞",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D184118",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D184118%26f_flg%3DPLAN",
    "hotelMinCharge": 10440,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/184118/184118.jpg",
    "userReview": "海を望む眺望と広い浴室、朝食も大満足部屋からすぐ近くで海が見えるので眺めは良かったです。天気が良ければ夕日もきれいに見えそうです。浴室が広くてゆっくりできました。朝食のビュッフェもおいしか…　2026-09-19 09:29:19投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=184118\" class=\"3click\">つづきはこちら</a>",
    "reviewAverage": 4.39,
    "reviewCount": 239,
    "address": "沖縄県宮古島市伊良部佐和田前原1725",
    "access": "宮古島空港より車で約35分、みやこ下地島空港より車で約5分",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F184118%2F184118.html"
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
          <span className="text-stone-800 font-semibold truncate">プラネタリウム×星空シアター宿</span>
        </div>
      </div>

      {/* ヒーローヘッダー */}
      <header className="relative bg-emerald-950 text-white py-12 px-4 md:px-8 border-b border-emerald-900">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-800/80 text-emerald-200 text-xs font-bold rounded-full">
            <span>✨ 2026年最新版</span>
            <span>•</span>
            <span>プラネタリウム×星空シアター宿</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight font-journal-serif leading-tight">
            【2026年】プラネタリウム＆星空シアター付き！満天の星と宇宙の神秘に浸るリゾート宿5選
          </h1>
          <p className="text-stone-300 text-sm md:text-base leading-relaxed">
            天候を気にせずいつでも満天の星空解説が楽しめる館内プラネタリウム。夜空を見上げるルーフトップテラスや大型望遠鏡での惑星観察会、そして星空を映す露天風呂。日常を忘れて宇宙のロマンに浸る幻想的なリゾートステイ。
          </p>
          <div className="pt-2">
            <ShareButtons title="【2026年】プラネタリウム＆星空シアター付き！満天の星と宇宙の神秘に浸るリゾート宿5選" url="https://croud-travel.pages.dev/private-observatory-planetarium-luxury-villa-stay" />
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
