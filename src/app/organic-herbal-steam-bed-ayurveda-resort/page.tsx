import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import SpecialCouponBanner from '@/app/components/SpecialCouponBanner';
import ShareButtons from '@/app/components/ShareButtons';

export const metadata: Metadata = {
  title: '【2026年】本場アーユルヴェーダ＆ハーブ温活！極上シロダーラと薬草温泉のデトックスリゾート5選 ｜ 日本全国・旅宿クラウド',
  description: '2026年最新！額に温かいオイルを垂らす本格シロダーラやハーブサウナ、体質別オーガニック薬膳料理と名湯で心身を再生するウェルネスホテル5選。',
  keywords: ["アーユルヴェーダ","シロダーラ","薬草温泉","デトックス","ウェルネス旅","楽天トラベル"],
  alternates: {
    canonical: 'https://croud-travel.pages.dev/organic-herbal-steam-bed-ayurveda-resort',
  },
  openGraph: {
    title: '【2026年】本場アーユルヴェーダ＆ハーブ温活！極上シロダーラと薬草温泉のデトックスリゾート5選',
    description: '2026年最新！額に温かいオイルを垂らす本格シロダーラやハーブサウナ、体質別オーガニック薬膳料理と名湯で心身を再生するウェルネスホテル5選。',
    url: 'https://croud-travel.pages.dev/organic-herbal-steam-bed-ayurveda-resort',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【2026年】本場アーユルヴェーダ＆ハーブ温活！極上シロダーラと薬草温泉のデトックスリゾート5選",
    "description": "2026年最新！額に温かいオイルを垂らす本格シロダーラやハーブサウナ、体質別オーガニック薬膳料理と名湯で心身を再生するウェルネスホテル5選。",
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
    "mainEntityOfPage": "https://croud-travel.pages.dev/organic-herbal-steam-bed-ayurveda-resort"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "本格アーユルヴェーダ＆薬草温活スパ宿の旅行でおすすめの予約時期やタイミングは？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "人気の日程（連休や週末）は1〜2ヶ月前には満室になることが多いため、早期予約（早割プラン）の利用がおすすめです。また楽天トラベルの「5と0のつく日」キャンペーンを活用すると最大20%オフのクーポンが併用でき、最もお得に予約できます。"
        }
      },
      {
        "@type": "Question",
        "name": "本格アーユルヴェーダ＆薬草温活スパ宿の宿選びで失敗しないためのポイントは？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "宿泊者レビューのお風呂・お食事・接客評価が4.3以上の宿を選ぶと満足度が非常に高くなります。またアクセス手段（送迎バスの有無など）やプランに含まれる特典を事前に確認しておくと安心です。"
        }
      }
    ]
  };

  const hotels: any[] = [
  {
    "hotelNo": 78094,
    "hotelName": "ロワジールスパタワー那覇",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D78094",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D78094%26f_flg%3DPLAN",
    "hotelMinCharge": 7368,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/78094/78094.jpg",
    "userReview": "部屋は広くて綺麗、温泉と利便性も抜群部屋も綺麗で広くて最高です。特に温泉が最高。全体的に清潔感があり、1階にコンビニやお土産屋もありとても便利。クチコミの詳細はこちらから　http…　2026-09-05 20:45:17投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=78094\" class=\"3click\">つづきはこちら</a>",
    "reviewAverage": 4.35,
    "reviewCount": 695,
    "address": "沖縄県那覇市西3-2-1",
    "access": "【車】那覇空港より約7分（那覇うみそらトンネル～西海岸道路経由）　【ゆいレール】「旭橋」駅下車、徒歩約15分",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F78094%2F78094.html"
  },
  {
    "hotelNo": 192183,
    "hotelName": "ＲｅＬａｂｏ　ＭｅｄｉｃａｌＳｐａ＆Ｓｔａｙ",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D192183",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D192183%26f_flg%3DPLAN",
    "hotelMinCharge": 12000,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/192183/192183.jpg",
    "userReview": "チェックアウト時間の表記が分かりにくいチェックアウトが午前7時のプランであるとチェックインの際に初め知った。よく見ればたしかに予約画面には「チェックアウト7時。早めの出発でも味わえるスマートス…　2026-09-18 13:25:54投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=192183\" class=\"3click\">つづきはこちら</a>",
    "reviewAverage": 4.59,
    "reviewCount": 212,
    "address": "青森県青森市柳川1-1-5",
    "access": "JR青森駅東口ビル内直結",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F192183%2F192183.html"
  },
  {
    "hotelNo": 1657,
    "hotelName": "洲本温泉　夢海游　淡路島",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D1657",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D1657%26f_flg%3DPLAN",
    "hotelMinCharge": 8250,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/1657/1657.jpg",
    "userReview": "景観ゼロの部屋があることを明記してほしいこのような景観ゼロの部屋があり、オーシャンビューの部屋と同じ価格で提供されていることを明記して頂きたかったです。クチコミの詳細はこちらから　https:…　2026-09-16 16:23:21投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=1657\" class=\"3click\">つづきはこちら</a>",
    "reviewAverage": 4.41,
    "reviewCount": 2416,
    "address": "兵庫県洲本市山手1-1-50",
    "access": "車：洲本ICから10分／高速バス：大阪120分・三宮80分で洲本BCへ",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F1657%2F1657.html"
  },
  {
    "hotelNo": 153333,
    "hotelName": "ＨＯＴＥＬ　ＫＥＹＦＯＲＥＳＴ　ＨＯＫＵＴＯ",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D153333",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D153333%26f_flg%3DPLAN",
    "hotelMinCharge": 21600,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/153333/153333.jpg",
    "userReview": "絶景のロケーションとおもてなしに心から癒やされました。",
    "reviewAverage": 4.83,
    "reviewCount": 31,
    "address": "山梨県北杜市小淵沢町10248-16",
    "access": "小淵沢ICより車で約5分／小淵沢駅より車で約７分（駅より無料送迎バス有／予約不要）",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F153333%2F153333.html"
  },
  {
    "hotelNo": 158555,
    "hotelName": "箱根リトリートｆｏｒｅ",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D158555",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D158555%26f_flg%3DPLAN",
    "hotelMinCharge": 14155,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/158555/158555.jpg",
    "userReview": "緑に囲まれた落ち着く空間と親切なスタッフ緑に囲まれてとても落ち着く空間でした。カフェや温泉もあって、どこも清潔感があり、スタッフの方も親切です。また利用したいと思います。クチコミの詳細はこちら…　2026-07-30 13:08:19投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=158555\" class=\"3click\">つづきはこちら</a>",
    "reviewAverage": 4.42,
    "reviewCount": 343,
    "address": "神奈川県足柄下郡箱根町仙石原1286-116",
    "access": "小田原駅よりお車で約40分（週末は混雑しますので余裕をもってお越しください）",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F158555%2F158555.html"
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
          <span className="text-stone-800 font-semibold truncate">アーユルヴェーダ×薬草温活スパ</span>
        </div>
      </div>

      {/* ヒーローヘッダー */}
      <header className="relative bg-emerald-950 text-white py-12 px-4 md:px-8 border-b border-emerald-900">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-800/80 text-emerald-200 text-xs font-bold rounded-full">
            <span>✨ 2026年最新版</span>
            <span>•</span>
            <span>アーユルヴェーダ×薬草温活スパ</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight font-journal-serif leading-tight">
            【2026年】本場アーユルヴェーダ＆ハーブ温活！極上シロダーラと薬草温泉のデトックスリゾート5選
          </h1>
          <p className="text-stone-300 text-sm md:text-base leading-relaxed">
            深い瞑想状態へと導くシロダーラや温かい薬草オイルトリートメント。体内の毒素を排出し自律神経を整えるハーブスチームバスと、ミネラル豊富な天然温泉。静寂に包まれた自然の中で自分自身を深く癒やす、究極のホリスティックウェルネス。
          </p>
          <div className="pt-2">
            <ShareButtons title="【2026年】本場アーユルヴェーダ＆ハーブ温活！極上シロダーラと薬草温泉のデトックスリゾート5選" url="https://croud-travel.pages.dev/organic-herbal-steam-bed-ayurveda-resort" />
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
