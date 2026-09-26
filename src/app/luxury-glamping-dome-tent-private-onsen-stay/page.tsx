import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import SpecialCouponBanner from '@/app/components/SpecialCouponBanner';
import ShareButtons from '@/app/components/ShareButtons';

export const metadata: Metadata = {
  title: '【2026年】天然温泉付きドームテント＆星空グランピング！大自然を満喫する極上アウトドアリゾート5選 ｜ 日本全国・旅宿クラウド',
  description: '2026年最新！冷暖房完備の大型ドームテントに専用温泉露天風呂やBBQスペースを完備した最高峰のグランピング施設5選。満天の星と手ぶらアウトドアを満喫。',
  keywords: ["グランピング","ドームテント","温泉リゾート","BBQ","星空キャンプ","楽天トラベル"],
  alternates: {
    canonical: 'https://croud-travel.pages.dev/luxury-glamping-dome-tent-private-onsen-stay',
  },
  openGraph: {
    title: '【2026年】天然温泉付きドームテント＆星空グランピング！大自然を満喫する極上アウトドアリゾート5選',
    description: '2026年最新！冷暖房完備の大型ドームテントに専用温泉露天風呂やBBQスペースを完備した最高峰のグランピング施設5選。満天の星と手ぶらアウトドアを満喫。',
    url: 'https://croud-travel.pages.dev/luxury-glamping-dome-tent-private-onsen-stay',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【2026年】天然温泉付きドームテント＆星空グランピング！大自然を満喫する極上アウトドアリゾート5選",
    "description": "2026年最新！冷暖房完備の大型ドームテントに専用温泉露天風呂やBBQスペースを完備した最高峰のグランピング施設5選。満天の星と手ぶらアウトドアを満喫。",
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
    "mainEntityOfPage": "https://croud-travel.pages.dev/luxury-glamping-dome-tent-private-onsen-stay"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "温泉付きドームテント＆星空グランピングの旅行でおすすめの予約時期やタイミングは？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "人気の日程（連休や週末）は1〜2ヶ月前には満室になることが多いため、早期予約（早割プラン）の利用がおすすめです。また楽天トラベルの「5と0のつく日」キャンペーンを活用すると最大20%オフのクーポンが併用でき、最もお得に予約できます。"
        }
      },
      {
        "@type": "Question",
        "name": "温泉付きドームテント＆星空グランピングの宿選びで失敗しないためのポイントは？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "宿泊者レビューのお風呂・お食事・接客評価が4.3以上の宿を選ぶと満足度が非常に高くなります。またアクセス手段（送迎バスの有無など）やプランに含まれる特典を事前に確認しておくと安心です。"
        }
      }
    ]
  };

  const hotels: any[] = [
  {
    "hotelNo": 171946,
    "hotelName": "全室源泉かけ流し温泉付き旅館＆グランピング　美肌の湯　こしかの温泉",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D171946",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D171946%26f_flg%3DPLAN",
    "hotelMinCharge": 4620,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/171946/171946.jpg",
    "userReview": "温泉の成分が湯船に折出るほど良いお湯で、チェックインして、夕食前、就寝前、起床後の三度、堪能しました。部屋に温泉がある幸せを満喫できます。次はサウナ付きの部屋に泊まってみたいですね。夕食も…　2026-09-19 21:17:13投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=171946\" class=\"3click\">つづきはこちら</a>",
    "reviewAverage": 4.61,
    "reviewCount": 509,
    "address": "鹿児島県霧島市隼人町松永2625",
    "access": "鹿児島空港より車で約15分【19時までなら鹿児島空港・国分駅まで無料送迎（要予約）】",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F171946%2F171946.html"
  },
  {
    "hotelNo": 180797,
    "hotelName": "Ｔｈｅ　Ｖｉｌｌａｇｅ由布院　温泉グランピング",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D180797",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D180797%26f_flg%3DPLAN",
    "hotelMinCharge": 17725,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/180797/180797.jpg",
    "userReview": "初のグランピング、設備も食事も大満足!初のグランピングで利用させていただきました。結果、とても良かったです!部屋もとても綺麗で広く、冷房もあり、快適に過ごせました!冷蔵庫もついていたので良かっ…　2026-08-22 17:06:57投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=180797\" class=\"3click\">つづきはこちら</a>",
    "reviewAverage": 4.56,
    "reviewCount": 86,
    "address": "大分県由布市湯布院町川上1996-1",
    "access": "JR由布院駅から車で6分。湯布院インターチェンジから車で12分。金鱗湖まで車で8分。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F180797%2F180797.html"
  },
  {
    "hotelNo": 187285,
    "hotelName": "由布院温泉グランピング　風の響き",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D187285",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D187285%26f_flg%3DPLAN",
    "hotelMinCharge": 18900,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/187285/187285.jpg",
    "userReview": "絶景のロケーションとおもてなしに心から癒やされました。",
    "reviewAverage": 5,
    "reviewCount": 46,
    "address": "大分県由布市湯布院町川上1314-1",
    "access": "ＪＲ由布院駅よりお車にて約7分/金鱗湖から車で5分",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F187285%2F187285.html"
  },
  {
    "hotelNo": 149269,
    "hotelName": "ＳＰＲＩＮＧＳ　ＶＩＬＬＡＧＥ　足柄・丹沢　温泉リゾート＆グランピング",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D149269",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D149269%26f_flg%3DPLAN",
    "hotelMinCharge": 6100,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/149269/149269.jpg",
    "userReview": "部屋と温泉は最高だが運営が残念部屋と温泉がすごく良いのに、オペレーションが全くボロボロなのが残念!もったいない!クチコミの詳細はこちらから　https://review.travel.raku…　2026-08-30 16:51:53投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=149269\" class=\"3click\">つづきはこちら</a>",
    "reviewAverage": 3.39,
    "reviewCount": 236,
    "address": "神奈川県足柄上郡山北町中川448-2",
    "access": "新松田駅またはＪＲ谷峨駅から富士急湘南バス丹沢ホテル時之栖入口駅下車徒歩3分　車の場合大井松田ＩＣより車で30分",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F149269%2F149269.html"
  },
  {
    "hotelNo": 165626,
    "hotelName": "湖畔の温泉宿くにびき　グランピングベースＩＺＵＭＯ",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D165626",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D165626%26f_flg%3DPLAN",
    "hotelMinCharge": 7720,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/165626/165626.jpg",
    "userReview": "温泉とBBQ、贅沢な朝食で大満足!グランピングですが、温泉入り放題、BBQもボリュームがあり、大満足です。朝はカワイイバスケットにサラダやジュース、ヨーグルト、温かいパンに、ハンドドリップでコーヒ…　2026-09-13 17:38:23投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=165626\" class=\"3click\">つづきはこちら</a>",
    "reviewAverage": 4.4,
    "reviewCount": 456,
    "address": "島根県出雲市湖陵町二部1230",
    "access": "ＪＲ江南駅よりお車で約５分　送迎をご希望の際は事前にお問い合わせ下さい。時間帯や状況によって送迎できない場合がございます",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F165626%2F165626.html"
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
          <span className="text-stone-800 font-semibold truncate">温泉ドームテント×星空グランピング</span>
        </div>
      </div>

      {/* ヒーローヘッダー */}
      <header className="relative bg-emerald-950 text-white py-12 px-4 md:px-8 border-b border-emerald-900">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-800/80 text-emerald-200 text-xs font-bold rounded-full">
            <span>✨ 2026年最新版</span>
            <span>•</span>
            <span>温泉ドームテント×星空グランピング</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight font-journal-serif leading-tight">
            【2026年】天然温泉付きドームテント＆星空グランピング！大自然を満喫する極上アウトドアリゾート5選
          </h1>
          <p className="text-stone-300 text-sm md:text-base leading-relaxed">
            冷暖房完備でホテルのような快適さを誇るおしゃれな大型ドームテント。夜は満天の星空の下で本格グリルBBQを楽しみ、敷地内の天然温泉や客室専用ジャグジーで心地よく癒やされる、贅沢なアウトドアリゾートを厳選しました。
          </p>
          <div className="pt-2">
            <ShareButtons title="【2026年】天然温泉付きドームテント＆星空グランピング！大自然を満喫する極上アウトドアリゾート5選" url="https://croud-travel.pages.dev/luxury-glamping-dome-tent-private-onsen-stay" />
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
