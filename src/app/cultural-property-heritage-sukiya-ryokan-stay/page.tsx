import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import SpecialCouponBanner from '@/app/components/SpecialCouponBanner';
import ShareButtons from '@/app/components/ShareButtons';

export const metadata: Metadata = {
  title: '宮大工の技と歴史が息づく！国登録有形文化財・伝統建築美に泊まる名門老舗旅館 ｜ 日本全国・旅宿クラウド',
  description: '修善寺・渋温泉・箱根など、宮大工の至高の技と百年を超える歴史が刻まれた登録有形文化財の老舗宿。タイムスリップしたかのような日本の美と名湯。',
  keywords: ["登録有形文化財","老舗旅館","数寄屋造り","修善寺温泉","渋温泉","伝統建築"],
  alternates: {
    canonical: 'https://croud-travel.pages.dev/cultural-property-heritage-sukiya-ryokan-stay',
  },
  openGraph: {
    title: '宮大工の技と歴史が息づく！国登録有形文化財・伝統建築美に泊まる名門老舗旅館',
    description: '修善寺・渋温泉・箱根など、宮大工の至高の技と百年を超える歴史が刻まれた登録有形文化財の老舗宿。タイムスリップしたかのような日本の美と名湯。',
    url: 'https://croud-travel.pages.dev/cultural-property-heritage-sukiya-ryokan-stay',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "宮大工の技と歴史が息づく！国登録有形文化財・伝統建築美に泊まる名門老舗旅館",
    "description": "修善寺・渋温泉・箱根など、宮大工の至高の技と百年を超える歴史が刻まれた登録有形文化財の老舗宿。タイムスリップしたかのような日本の美と名湯。",
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
    "mainEntityOfPage": "https://croud-travel.pages.dev/cultural-property-heritage-sukiya-ryokan-stay"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "文化財建築・歴史名宿の旅行でおすすめの予約時期やタイミングは？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "人気の週末や見頃シーズンは満室になりやすいため、2〜3ヶ月前からの予約が安心です。楽天トラベルの『5と0のつく日セール』や『ふるさと納税宿泊クーポン』を活用すると最もお得に予約いただけます。"
        }
      },
      {
        "@type": "Question",
        "name": "楽天トラベルのポイント還元やクーポンは予約後にも使えますか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "楽天トラベルの『あとからクーポン適用』対象施設であれば、予約完了後でも条件を満たすクーポンを適用して割引を受けることができます。"
        }
      }
    ]
  };

  const hotels = [
  {
    "hotelNo": 16280,
    "hotelName": "国登録有形文化財の宿　人吉温泉　芳野旅館",
    "hotelKanaName": "くにとうろくゆうけいぶんかざいのやど　ひとよしおんせん　よしのりょかん",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D16280",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D16280%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D16280",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D16280",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/16280/16280.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/16280.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/16280/16280_w.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/16280/16280map.gif",
    "reviewCount": 129,
    "reviewAverage": 4.55,
    "userReview": "広々とした落ち着く部屋と素敵な中庭お部屋がとても広く落ち着く内装で良き古さも感じられリラックスできました中庭も素敵でしたクチコミの詳細はこちらから　https://review.t…　2026-09-11 20:36:48投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=16280\" class=\"3click\">つづきはこちら</a>",
    "hotelMinCharge": 7700,
    "address1": "熊本県",
    "address2": "人吉市上青井町180",
    "telephoneNo": "0966-22-2244",
    "access": "人吉ICより車で約8分",
    "parkingInformation": "有り　30台　無料　先着順",
    "nearestStation": "人吉",
    "hotelSpecial": "【国登録有形文化財の宿】歴史感じる純和風旅館　源泉掛け流し天然温泉と旬の会席料理で心和むひと時を",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F16280%2F16280.html"
  },
  {
    "hotelNo": 13811,
    "hotelName": "美保関温泉　旅館　美保館　国文化財の宿",
    "hotelKanaName": "みほのせきおんせん　りょかん　みほかん　くにぶんかざいのやど",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D13811",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D13811%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D13811",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D13811",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/13811/13811.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/13811.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/13811/13811_room.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/13811/13811map.gif",
    "reviewCount": 370,
    "reviewAverage": 4.56,
    "userReview": "幻想的な雰囲気に包まれて癒やされたクチコミの詳細はこちらから　https://review.travel.rakuten.co.jp/hotel/voice/13811?reviewId=3312…　2026-09-07 20:48:50投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=13811\" class=\"3click\">つづきはこちら</a>",
    "hotelMinCharge": 13200,
    "address1": "島根県",
    "address2": "松江市美保関町美保関570",
    "telephoneNo": "0852-73-0111",
    "access": "境港駅・米子空港よりタクシーで２０分／松江駅よりバスで１時間／米子ＩＣより３０分／送迎有（有料）",
    "parkingInformation": "有り　５０台　無料",
    "nearestStation": "境港",
    "hotelSpecial": "美保湾・大山を一望。日本海の幸を満喫。国文化財・旧館の朝食も好評。７階展望大浴場。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F13811%2F13811.html"
  },
  {
    "hotelNo": 108580,
    "hotelName": "別所温泉　旅館　花屋",
    "hotelKanaName": "べっしょおんせん　りょかん　はなや",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D108580",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D108580%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D108580",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D108580",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/108580/108580.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/108580.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/108580/108580_ru.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/108580/108580map.gif",
    "reviewCount": 615,
    "reviewAverage": 4.56,
    "userReview": "食べる速さに合わせた料理の提供に感動夕食で、料理を一品ずつ、食べる速さを見越して出してくれるその心遣いに感動しました。クチコミの詳細はこちらから　https://review.travel.r…　2026-09-10 01:13:41投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=108580\" class=\"3click\">つづきはこちら</a>",
    "hotelMinCharge": 28400,
    "address1": "長野県",
    "address2": "上田市別所温泉169番地　【文化庁登録有形文化財選定】宮大工が造った老舗旅館　大正浪漫漂う温泉宿　旅館花屋",
    "telephoneNo": "0268-38-3131",
    "access": "JR上田駅より乗換・上田交通別所線別所温泉駅下車徒歩約５分（当地で最も駅に近い旅館）◆上信越道上田菅平ＩＣより車で３０分",
    "parkingInformation": "◆約３０台分の無料駐車場あり◆全室Wi－Fi完備◆全室禁煙（喫煙室あり）◆当地で最大湯量の天然温泉",
    "nearestStation": "別所温泉",
    "hotelSpecial": "大正浪漫漂う登録有形文化財の温泉宿～非日常の空間と温かなおもてなし、手作りの会席料理が織りなす贅沢",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F108580%2F108580.html"
  }
];

  return (
    <div className="space-y-10 max-w-4xl mx-auto">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* パンくず */}
      <nav aria-label="Breadcrumb" className="text-xs font-bold text-teal-900/60 flex items-center flex-wrap gap-2">
        <Link href="/" className="hover:text-teal-800 transition">ホーム</Link>
        <span>/</span>
        <Link href="/features" className="hover:text-teal-800 transition">特集一覧</Link>
        <span>/</span>
        <span className="text-emerald-950/40 line-clamp-1">登録有形文化財・名建築旅館</span>
      </nav>

      {/* ヒーローヘッダー */}
      <div className="border border-emerald-950/10 bg-white rounded-3xl p-6 md:p-12 shadow-sm space-y-6">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="bg-amber-100 text-amber-900 font-extrabold text-[10px] px-3 py-1 rounded-full uppercase tracking-wider">
              文化財建築・歴史名宿 特選ガイド
            </span>
            <span className="text-[10px] text-slate-400 font-bold">2026年最新版</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-black font-journal-serif text-emerald-950 leading-tight">
            宮大工の技と歴史が息づく！国登録有形文化財・伝統建築美に泊まる名門老舗旅館
          </h1>
          <p className="text-xs md:text-sm text-emerald-950/80 leading-relaxed font-medium pt-2">
            一歩足を踏み入れれば、木の温もりと凛とした静けさが広がる数寄屋造りの空間。釘を使わずに組み上げられた格天井や職人の手彫りによる欄間、月日を重ねて黒光りする磨き上げられた廊下。日本が誇る伝統建築の美意識と、受け継がれてきた細やかなもてなしを五感で味わう旅へ。
          </p>
        </div>

        {/* クーポン特大バナー */}
        <SpecialCouponBanner />

        {/* 厳選ホテル・宿ランキング比較一覧 */}
        <div className="space-y-8 pt-4">
          <h2 className="text-xl md:text-2xl font-black font-journal-serif text-emerald-950 flex items-center gap-2 border-b border-emerald-950/10 pb-3">
            <span>🏆</span>
            <span>編集部が厳選したおすすめ宿泊施設 TOP3</span>
          </h2>

          <div className="space-y-8">
            {hotels.map((h, idx) => (
              <div
                key={h.hotelNo}
                className="border border-emerald-950/10 rounded-3xl overflow-hidden bg-white shadow-sm hover:shadow-md transition space-y-4"
              >
                <div className="bg-emerald-50/50 p-5 border-b border-emerald-950/5 flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-amber-600 text-white font-black flex items-center justify-center text-sm">
                      {idx + 1}
                    </span>
                    <div>
                      <h3 className="text-base md:text-lg font-black text-emerald-950 font-journal-serif">
                        {h.hotelName}
                      </h3>
                      <p className="text-[11px] text-teal-900/60 font-medium">
                        {h.address1} {h.address2}
                      </p>
                    </div>
                  </div>
                  {h.reviewAverage > 0 && (
                    <div className="flex items-center gap-1 bg-white px-3 py-1 rounded-full border border-amber-300 shadow-sm">
                      <span className="text-amber-500 font-black text-xs">⭐ {h.reviewAverage}</span>
                      <span className="text-[10px] text-slate-500 font-bold">({h.reviewCount}件)</span>
                    </div>
                  )}
                </div>

                <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                  <div className="md:col-span-1 aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 relative">
                    {h.hotelImageUrl ? (
                      <img
                        src={h.hotelImageUrl}
                        alt={h.hotelName}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-slate-400 text-xs">No Image</div>
                    )}
                  </div>

                  <div className="md:col-span-2 space-y-4">
                    {h.hotelSpecial && (
                      <p className="text-xs md:text-sm text-emerald-950/80 leading-relaxed font-medium bg-teal-50/40 p-4 rounded-2xl border border-teal-900/10">
                        ✨ {h.hotelSpecial}
                      </p>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                      <div className="space-y-1">
                        <span className="text-[10px] font-extrabold text-slate-400 uppercase">アクセス</span>
                        <p className="text-slate-700 font-medium">{h.access || h.nearestStation || '詳細はプランページをご確認ください'}</p>
                      </div>
                      {h.hotelMinCharge > 0 && (
                        <div className="space-y-1">
                          <span className="text-[10px] font-extrabold text-slate-400 uppercase">宿泊目安料金</span>
                          <p className="text-amber-700 font-black text-base">
                            ¥{Number(h.hotelMinCharge).toLocaleString()}〜 <span className="text-[10px] text-slate-500 font-normal">/ 人</span>
                          </p>
                        </div>
                      )}
                    </div>

                    <div className="pt-2">
                      <a
                        href={h.affiliateUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block w-full sm:w-auto text-center px-6 py-3.5 bg-gradient-to-r from-amber-600 via-amber-700 to-amber-800 hover:from-amber-500 hover:to-amber-700 text-white font-black text-xs md:text-sm rounded-2xl shadow-md transition transform hover:-translate-y-0.5"
                      >
                        ✈️ {h.hotelName} の最新空室＆宿泊プランを見る
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* シェアボタン */}
        <div className="pt-6 border-t border-emerald-950/5">
          <ShareButtons
            title="宮大工の技と歴史が息づく！国登録有形文化財・伝統建築美に泊まる名門老舗旅館"
            url="https://croud-travel.pages.dev/cultural-property-heritage-sukiya-ryokan-stay"
          />
        </div>

        {/* よくある質問 FAQ */}
        <div className="pt-8 border-t border-emerald-950/10 space-y-4">
          <h3 className="text-lg font-bold font-journal-serif text-emerald-950 flex items-center gap-2">
            <span>❓</span>
            <span>文化財建築・歴史名宿に関するよくある質問</span>
          </h3>
          <div className="space-y-3 text-xs">
            <div className="p-4 rounded-xl bg-teal-50/30 border border-teal-900/10 space-y-1.5">
              <h4 className="font-bold text-teal-950">Q. 文化財建築・歴史名宿の予約でお得な方法はありますか？</h4>
              <p className="text-emerald-950/80 leading-relaxed">
                楽天トラベルの「5と0のつく日セール」による最大20%割引や、実質2,000円の自己負担で宿泊できる「楽天ふるさと納税宿泊クーポン」の併用が最もお得でおすすめです。
              </p>
            </div>
            <div className="p-4 rounded-xl bg-teal-50/30 border border-teal-900/10 space-y-1.5">
              <h4 className="font-bold text-teal-950">Q. キャンセル料や予約変更はどうなっていますか？</h4>
              <p className="text-emerald-950/80 leading-relaxed">
                各宿泊施設および予約プランによってキャンセル規定が異なります。ご予約完了前に楽天トラベルの詳細ページにてキャンセルポリシーを必ずご確認ください。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
