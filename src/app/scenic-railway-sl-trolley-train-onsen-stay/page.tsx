import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import SpecialCouponBanner from '@/app/components/SpecialCouponBanner';
import ShareButtons from '@/app/components/ShareButtons';

export const metadata: Metadata = {
  title: '車窓を流れる絶景とレトロな汽笛！SL・トロッコ観光列車の旅と途中下車の名湯旅館 ｜ 日本全国・旅宿クラウド',
  description: '大井川鐵道・黒部峡谷・わたらせ渓谷などダイナミックな峡谷や大自然を駆け抜ける観光列車。レトロな客車に揺られながら沿線の秘湯で寛ぐ贅沢な鉄道旅。',
  keywords: ["観光列車","SL列車","トロッコ列車","鉄道旅","黒部峡谷","大井川鐵道"],
  alternates: {
    canonical: 'https://croud-travel.pages.dev/scenic-railway-sl-trolley-train-onsen-stay',
  },
  openGraph: {
    title: '車窓を流れる絶景とレトロな汽笛！SL・トロッコ観光列車の旅と途中下車の名湯旅館',
    description: '大井川鐵道・黒部峡谷・わたらせ渓谷などダイナミックな峡谷や大自然を駆け抜ける観光列車。レトロな客車に揺られながら沿線の秘湯で寛ぐ贅沢な鉄道旅。',
    url: 'https://croud-travel.pages.dev/scenic-railway-sl-trolley-train-onsen-stay',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "車窓を流れる絶景とレトロな汽笛！SL・トロッコ観光列車の旅と途中下車の名湯旅館",
    "description": "大井川鐵道・黒部峡谷・わたらせ渓谷などダイナミックな峡谷や大自然を駆け抜ける観光列車。レトロな客車に揺られながら沿線の秘湯で寛ぐ贅沢な鉄道旅。",
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
    "mainEntityOfPage": "https://croud-travel.pages.dev/scenic-railway-sl-trolley-train-onsen-stay"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "観光列車・鉄道の旅の旅行でおすすめの予約時期やタイミングは？",
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
    "hotelNo": 40625,
    "hotelName": "黒部峡谷・宇奈月温泉　ホテル黒部",
    "hotelKanaName": "くろべきょうこく・うなづきおんせん　くろべ",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D40625",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D40625%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D40625",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D40625",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/40625/40625.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/40625.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/40625/40625_kya.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/40625/40625map.gif",
    "reviewCount": 1246,
    "reviewAverage": 4.45,
    "userReview": "お風呂のメッセージとスタッフの温かい見送りとても良かったです。お風呂の入り口に貼ってあるメッセージも感動しました。あれは貰って良かったのかな?ご飯も美味しく、お腹いっぱいになりました。チェ…　2026-09-16 22:25:29投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=40625\" class=\"3click\">つづきはこちら</a>",
    "hotelMinCharge": 6600,
    "address1": "富山県",
    "address2": "黒部市宇奈月温泉７番地",
    "telephoneNo": "0765-62-1331",
    "access": "北陸新幹線黒部宇奈月温泉駅から富山地鉄乗り換え25分。 宇奈月温泉駅から歩10分／北陸道 黒部ＩＣから約20分。",
    "parkingInformation": "有り　40台　無料 （トロッコ観光中もお預かりいたします）",
    "nearestStation": "宇奈月温泉",
    "hotelSpecial": "『宇奈月温泉随一の眺望』四季折々の地元食材と透明な美肌湯を堪能",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F40625%2F40625.html"
  },
  {
    "hotelNo": 41374,
    "hotelName": "料理旅館　有磯",
    "hotelKanaName": "りょうりりょかん　ありいそ",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D41374",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D41374%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D41374",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D41374",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/41374/41374.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/41374.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/41374/41374_kya.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/41374/41374map.gif",
    "reviewCount": 124,
    "reviewAverage": 4.19,
    "userReview": "親切なおもてなしと美味しい料理に満足親切なおもてなしでした。料理も美味しかったです。クチコミの詳細はこちらから　https://review.travel.rakuten.co.jp/hote…　2026-08-23 17:00:59投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=41374\" class=\"3click\">つづきはこちら</a>",
    "hotelMinCharge": 10120,
    "address1": "富山県",
    "address2": "下新川郡朝日町宮崎3239-1",
    "telephoneNo": "0765-82-0768",
    "access": "JR越中宮崎駅より徒歩１分",
    "parkingInformation": "有り　50台　無料　先着順",
    "nearestStation": "越中宮崎",
    "hotelSpecial": "駅近1分・翡翠海岸目の前に佇む宿。海水浴にヒスイ拾いと、夏の楽しみ方は無限大！",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F41374%2F41374.html"
  },
  {
    "hotelNo": 9591,
    "hotelName": "黒部・宇奈月温泉　やまのは（オリックスホテルズ＆リゾーツ）",
    "hotelKanaName": "くろべ・うなづきおんせん　やまのは（おりっくすほてるず＆りぞーと）",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D9591",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D9591%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D9591",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D9591",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/9591/9591.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/9591.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/9591/9591_rot.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/9591/9591map.gif",
    "reviewCount": 4242,
    "reviewAverage": 4.31,
    "userReview": "夕食のデザートがどれも美味しくて大満足夕食のデザートはどれも美味しかった。クチコミの詳細はこちらから　https://review.travel.rakuten.co.jp/hotel/voi…　2026-09-18 15:30:55投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=9591\" class=\"3click\">つづきはこちら</a>",
    "hotelMinCharge": 10800,
    "address1": "富山県",
    "address2": "黒部市宇奈月温泉352番地7",
    "telephoneNo": "0765-62-1311",
    "access": "富山地方鉄道「宇奈月温泉駅」下車徒歩３分　無料送迎バス有※要確認／北陸自動車道黒部IC下車約２０分",
    "parkingInformation": "140台の無料駐車スペースがございます。",
    "nearestStation": "宇奈月温泉",
    "hotelSpecial": "おかげさまで連続受賞！「楽天トラベル 日本の宿アワード2025 TOP47」♪",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F9591%2F9591.html"
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
        <span className="text-emerald-950/40 line-clamp-1">観光列車・SL＆トロッコ温泉宿</span>
      </nav>

      {/* ヒーローヘッダー */}
      <div className="border border-emerald-950/10 bg-white rounded-3xl p-6 md:p-12 shadow-sm space-y-6">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="bg-amber-100 text-amber-900 font-extrabold text-[10px] px-3 py-1 rounded-full uppercase tracking-wider">
              観光列車・鉄道の旅 特選ガイド
            </span>
            <span className="text-[10px] text-slate-400 font-bold">2026年最新版</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-black font-journal-serif text-emerald-950 leading-tight">
            車窓を流れる絶景とレトロな汽笛！SL・トロッコ観光列車の旅と途中下車の名湯旅館
          </h1>
          <p className="text-xs md:text-sm text-emerald-950/80 leading-relaxed font-medium pt-2">
            吹き抜ける爽快な風を浴びながらエメラルドグリーンの渓谷を渡るトロッコ列車や、力強く煙を上げて走る蒸気機関車（SL）。ガタゴトと揺れるノスタルジックな車窓風景を楽しんだ後は、沿線の名湯旅館で美味しい郷土料理に舌鼓。のんびりとした時間の流れを愛でる鉄道旅へ。
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
            title="車窓を流れる絶景とレトロな汽笛！SL・トロッコ観光列車の旅と途中下車の名湯旅館"
            url="https://croud-travel.pages.dev/scenic-railway-sl-trolley-train-onsen-stay"
          />
        </div>

        {/* よくある質問 FAQ */}
        <div className="pt-8 border-t border-emerald-950/10 space-y-4">
          <h3 className="text-lg font-bold font-journal-serif text-emerald-950 flex items-center gap-2">
            <span>❓</span>
            <span>観光列車・鉄道の旅に関するよくある質問</span>
          </h3>
          <div className="space-y-3 text-xs">
            <div className="p-4 rounded-xl bg-teal-50/30 border border-teal-900/10 space-y-1.5">
              <h4 className="font-bold text-teal-950">Q. 観光列車・鉄道の旅の予約でお得な方法はありますか？</h4>
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
