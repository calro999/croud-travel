import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import SpecialCouponBanner from '@/app/components/SpecialCouponBanner';
import ShareButtons from '@/app/components/ShareButtons';

export const metadata: Metadata = {
  title: '朝から贅沢の極み！いくら盛り放題＆ご当地海鮮ビュッフェが自慢の朝食日本一ホテル特集 ｜ 日本全国・旅宿クラウド',
  description: '函館・金沢・神戸など全国の朝食フェスやランキングで常に話題をさらう名門ホテルを特集。山盛りのいくら丼や焼き立てクロワッサンを味わう贅沢な朝。',
  keywords: ["朝食美味しい","いくら食べ放題","ホテルビュッフェ","函館","朝ごはん","グルメ旅"],
  alternates: {
    canonical: 'https://croud-travel.pages.dev/award-winning-breakfast-gourmet-hotel-ranking',
  },
  openGraph: {
    title: '朝から贅沢の極み！いくら盛り放題＆ご当地海鮮ビュッフェが自慢の朝食日本一ホテル特集',
    description: '函館・金沢・神戸など全国の朝食フェスやランキングで常に話題をさらう名門ホテルを特集。山盛りのいくら丼や焼き立てクロワッサンを味わう贅沢な朝。',
    url: 'https://croud-travel.pages.dev/award-winning-breakfast-gourmet-hotel-ranking',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "朝から贅沢の極み！いくら盛り放題＆ご当地海鮮ビュッフェが自慢の朝食日本一ホテル特集",
    "description": "函館・金沢・神戸など全国の朝食フェスやランキングで常に話題をさらう名門ホテルを特集。山盛りのいくら丼や焼き立てクロワッサンを味わう贅沢な朝。",
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
    "mainEntityOfPage": "https://croud-travel.pages.dev/award-winning-breakfast-gourmet-hotel-ranking"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "絶品朝食・ホテルビュッフェの旅行でおすすめの予約時期やタイミングは？",
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
    "hotelNo": 137023,
    "hotelName": "イマジンホテル＆リゾート函館",
    "hotelKanaName": "いまじんほてるあんどりぞーとはこだて",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D137023",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D137023%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D137023",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D137023",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/137023/137023.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/137023.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/137023/137023_kan.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/137023/137023map.gif",
    "reviewCount": 2416,
    "reviewAverage": 4.42,
    "userReview": "海を一望できる絶景とバイキングに大満足海が一望。大浴場にはサウナ付き、水風呂もぬるめの設置だけどそれがまたのんびりできる。最上階の露天風呂は少し手狭な感じだが充分。卓球やゲームも出来て家族で楽しめ…　2026-09-19 17:15:16投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=137023\" class=\"3click\">つづきはこちら</a>",
    "hotelMinCharge": 4641,
    "address1": "北海道",
    "address2": "函館市湯川町3-1-17",
    "telephoneNo": "0138-57-9161",
    "access": "『函館空港』からお車にて約6分/『函館駅』よりお車にて約12分/バス停『熱帯植物園前』から徒歩約3分",
    "parkingInformation": "有り　無料　約90台　湯の川最大級青空平面",
    "nearestStation": "函館",
    "hotelSpecial": "【楽天トラベルゴールドアワード2025受賞！】海と星空が広がる【絶景露天風呂】",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F137023%2F137023.html"
  },
  {
    "hotelNo": 168681,
    "hotelName": "センチュリーマリーナ函館",
    "hotelKanaName": "せんちゅりーまりーなはこだて",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D168681",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D168681%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D168681",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D168681",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/168681/168681.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/168681.jpg",
    "roomImageUrl": "",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/168681/168681map.gif",
    "reviewCount": 3966,
    "reviewAverage": 4.66,
    "userReview": "朝食の質と寝湯の設計に改善の余地あり朝食バイキングのマグロの質が前回より落ちたような。。。また露天風呂の寝湯ですが、枕部分に頭を乗せるとお湯に浸りあっという間にのぼせてしまう仕様で、設計者はその事…　2026-09-18 17:15:03投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=168681\" class=\"3click\">つづきはこちら</a>",
    "hotelMinCharge": 15400,
    "address1": "北海道",
    "address2": "函館市大手町22-13",
    "telephoneNo": "0138-23-2121",
    "access": "ＪＲ　函館駅より徒歩にて約５分　　函館空港より車にて約２０分",
    "parkingInformation": "有り(1,000円/日）",
    "nearestStation": "函館",
    "hotelSpecial": "2026年5月1日で開業7周年！　宿泊者専用の無料フィットネスジムを新設♪",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F168681%2F168681.html"
  },
  {
    "hotelNo": 1341,
    "hotelName": "函館国際ホテル",
    "hotelKanaName": "はこだて　こくさいほてる",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D1341",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D1341%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D1341",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D1341",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/1341/1341.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/1341.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/1341/1341_room.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/1341/1341map.gif",
    "reviewCount": 4049,
    "reviewAverage": 4.32,
    "userReview": "バス付きは昭和のユニットバスバス付き=昭和のユニットバスおまけにトイレの水漏れ最悪予約時ユニットバスと明記すべきです フロントはチェックインで常に行列で市電一日券購入では面倒くさそうな扱い…　2026-09-19 22:01:35投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=1341\" class=\"3click\">つづきはこちら</a>",
    "hotelMinCharge": 8316,
    "address1": "北海道",
    "address2": "函館市大手町5-10",
    "telephoneNo": "0138-23-5151",
    "access": "ＪＲ函館駅から徒歩約8分／函館空港から車で約20分 バスで約30分（函館国際ホテル前下車 バス停目の前）",
    "parkingInformation": "1泊1000円 (宿泊日当日の11時～出発日の14時まで出し入れ自由／先着順）",
    "nearestStation": "函館",
    "hotelSpecial": "3つのレストランを備えた全435室のシティホテル。本館最上階には函館港を望む天然温泉展望大浴場も。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F1341%2F1341.html"
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
        <span className="text-emerald-950/40 line-clamp-1">朝食日本一・海鮮ビュッフェホテル</span>
      </nav>

      {/* ヒーローヘッダー */}
      <div className="border border-emerald-950/10 bg-white rounded-3xl p-6 md:p-12 shadow-sm space-y-6">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="bg-amber-100 text-amber-900 font-extrabold text-[10px] px-3 py-1 rounded-full uppercase tracking-wider">
              絶品朝食・ホテルビュッフェ 特選ガイド
            </span>
            <span className="text-[10px] text-slate-400 font-bold">2026年最新版</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-black font-journal-serif text-emerald-950 leading-tight">
            朝から贅沢の極み！いくら盛り放題＆ご当地海鮮ビュッフェが自慢の朝食日本一ホテル特集
          </h1>
          <p className="text-xs md:text-sm text-emerald-950/80 leading-relaxed font-medium pt-2">
            旅の最大の楽しみの一つであるホテルの朝ごはん。炊きたてのご飯の上にこぼれんばかりに盛る天然いくらや新鮮な魚介、シェフが目の前で焼き上げるふわとろオムレツ、焼き立てパンの芳醇な香り。朝起きるのが待ち遠しくなる、圧倒的なクオリティを誇る朝食自慢のホテルをご案内します。
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
            title="朝から贅沢の極み！いくら盛り放題＆ご当地海鮮ビュッフェが自慢の朝食日本一ホテル特集"
            url="https://croud-travel.pages.dev/award-winning-breakfast-gourmet-hotel-ranking"
          />
        </div>

        {/* よくある質問 FAQ */}
        <div className="pt-8 border-t border-emerald-950/10 space-y-4">
          <h3 className="text-lg font-bold font-journal-serif text-emerald-950 flex items-center gap-2">
            <span>❓</span>
            <span>絶品朝食・ホテルビュッフェに関するよくある質問</span>
          </h3>
          <div className="space-y-3 text-xs">
            <div className="p-4 rounded-xl bg-teal-50/30 border border-teal-900/10 space-y-1.5">
              <h4 className="font-bold text-teal-950">Q. 絶品朝食・ホテルビュッフェの予約でお得な方法はありますか？</h4>
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
