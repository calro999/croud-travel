import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import SpecialCouponBanner from '@/app/components/SpecialCouponBanner';
import ShareButtons from '@/app/components/ShareButtons';

export const metadata: Metadata = {
  title: 'シュワシュワ天然泡＆濃厚泥パック！奇跡の名湯・炭酸泉と美肌薬湯治リトリート宿 ｜ 日本全国・旅宿クラウド',
  description: '長湯温泉・別府・嬉野・玉造など全国屈指の濃厚な高濃度炭酸泉や天然泥湯。肌にしがみつく無数の気泡とミネラルたっぷりの泥湯で心身を再生。',
  keywords: ["炭酸泉","泥湯","美肌の湯","長湯温泉","湯治宿","薬湯"],
  alternates: {
    canonical: 'https://croud-travel.pages.dev/medicinal-carbonated-mud-springs-healing-stay',
  },
  openGraph: {
    title: 'シュワシュワ天然泡＆濃厚泥パック！奇跡の名湯・炭酸泉と美肌薬湯治リトリート宿',
    description: '長湯温泉・別府・嬉野・玉造など全国屈指の濃厚な高濃度炭酸泉や天然泥湯。肌にしがみつく無数の気泡とミネラルたっぷりの泥湯で心身を再生。',
    url: 'https://croud-travel.pages.dev/medicinal-carbonated-mud-springs-healing-stay',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "シュワシュワ天然泡＆濃厚泥パック！奇跡の名湯・炭酸泉と美肌薬湯治リトリート宿",
    "description": "長湯温泉・別府・嬉野・玉造など全国屈指の濃厚な高濃度炭酸泉や天然泥湯。肌にしがみつく無数の気泡とミネラルたっぷりの泥湯で心身を再生。",
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
    "mainEntityOfPage": "https://croud-travel.pages.dev/medicinal-carbonated-mud-springs-healing-stay"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "炭酸泉・泥湯・美肌湯治の旅行でおすすめの予約時期やタイミングは？",
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
    "hotelNo": 171946,
    "hotelName": "全室源泉かけ流し温泉付き旅館＆グランピング　美肌の湯　こしかの温泉",
    "hotelKanaName": "ぜんしつげんせんかけながしおんせんつきりょかん　あんど　ぐらんぴんぐ　びはだのゆ　こしかのおんせん",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D171946",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D171946%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D171946",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D171946",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/171946/171946.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/171946.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/171946/171946_kan1.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/171946/171946map.gif",
    "reviewCount": 509,
    "reviewAverage": 4.61,
    "userReview": "温泉の成分が湯船に折出るほど良いお湯で、チェックインして、夕食前、就寝前、起床後の三度、堪能しました。部屋に温泉がある幸せを満喫できます。次はサウナ付きの部屋に泊まってみたいですね。夕食も…　2026-09-19 21:17:13投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=171946\" class=\"3click\">つづきはこちら</a>",
    "hotelMinCharge": 4620,
    "address1": "鹿児島県",
    "address2": "霧島市隼人町松永2625",
    "telephoneNo": "0995-43-4046",
    "access": "鹿児島空港より車で約15分【19時までなら鹿児島空港・国分駅まで無料送迎（要予約）】",
    "parkingInformation": "有り（無料）",
    "nearestStation": "日当山",
    "hotelSpecial": "温泉宿・グランピング全室で源泉掛け流しの天然炭酸泉が満喫できます。ペットOKの客室もございます。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F171946%2F171946.html"
  },
  {
    "hotelNo": 109162,
    "hotelName": "肘折温泉　亀屋旅館",
    "hotelKanaName": "ひじおりおんせん　かめやりょかん",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D109162",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D109162%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D109162",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D109162",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/109162/109162.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/109162.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/109162/109162_wa.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/109162/109162map.gif",
    "reviewCount": 139,
    "reviewAverage": 4.21,
    "userReview": "肘折の名湯である上の湯さんと同じ源泉の旅館は亀屋さんのみとのことで、こちらの宿を選びました。宿は歴史を物語るような趣を感じ、湯治宿の気分を十分と味わえます。今回、湯治コースでしたので食事は簡易…　2026-09-07 16:56:16投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=109162\" class=\"3click\">つづきはこちら</a>",
    "hotelMinCharge": 5500,
    "address1": "山形県",
    "address2": "最上郡大蔵村南山521",
    "telephoneNo": "0233-76-2311",
    "access": "尾花沢新庄道路　舟形ＩＣより　国道４５８号線利用／新庄駅よりお車にて４０分、バスにて１時間",
    "parkingInformation": "有り（無料）・10台収容可　予約不要",
    "nearestStation": "新庄",
    "hotelSpecial": "旅情あふれる仙峡の宿。貴方の心と体を癒す２種類の源泉です。他にはない良質の源泉が自慢の宿です。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F109162%2F109162.html"
  },
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
        <span className="text-emerald-950/40 line-clamp-1">炭酸泉＆泥湯・美肌薬湯治宿</span>
      </nav>

      {/* ヒーローヘッダー */}
      <div className="border border-emerald-950/10 bg-white rounded-3xl p-6 md:p-12 shadow-sm space-y-6">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="bg-amber-100 text-amber-900 font-extrabold text-[10px] px-3 py-1 rounded-full uppercase tracking-wider">
              炭酸泉・泥湯・美肌湯治 特選ガイド
            </span>
            <span className="text-[10px] text-slate-400 font-bold">2026年最新版</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-black font-journal-serif text-emerald-950 leading-tight">
            シュワシュワ天然泡＆濃厚泥パック！奇跡の名湯・炭酸泉と美肌薬湯治リトリート宿
          </h1>
          <p className="text-xs md:text-sm text-emerald-950/80 leading-relaxed font-medium pt-2">
            湯船に身を沈めた瞬間、全身を無数のシルキーな炭酸の泡が包み込み、じんわりと血行を促進する奇跡の炭酸泉。そして天然のミネラルを豊富に含み、滑らかな美肌へと導く泥湯。日々の疲れをリセットし、体の芯から生命力を呼び覚ます本格湯治体験へご案内します。
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
            title="シュワシュワ天然泡＆濃厚泥パック！奇跡の名湯・炭酸泉と美肌薬湯治リトリート宿"
            url="https://croud-travel.pages.dev/medicinal-carbonated-mud-springs-healing-stay"
          />
        </div>

        {/* よくある質問 FAQ */}
        <div className="pt-8 border-t border-emerald-950/10 space-y-4">
          <h3 className="text-lg font-bold font-journal-serif text-emerald-950 flex items-center gap-2">
            <span>❓</span>
            <span>炭酸泉・泥湯・美肌湯治に関するよくある質問</span>
          </h3>
          <div className="space-y-3 text-xs">
            <div className="p-4 rounded-xl bg-teal-50/30 border border-teal-900/10 space-y-1.5">
              <h4 className="font-bold text-teal-950">Q. 炭酸泉・泥湯・美肌湯治の予約でお得な方法はありますか？</h4>
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
