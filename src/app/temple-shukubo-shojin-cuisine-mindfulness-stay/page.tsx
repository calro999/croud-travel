import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import SpecialCouponBanner from '@/app/components/SpecialCouponBanner';
import ShareButtons from '@/app/components/ShareButtons';

export const metadata: Metadata = {
  title: '歴史ある古刹で心を洗う！本格精進料理＆朝のお勤め体験ができる名門宿坊',
  description: '高野山・善光寺・京都の歴史寺院で体験する非日常のマインドフルネス滞在。滋味あふれる伝統の精進料理、早朝の護摩祈祷や写経で心を整える旅。',
  keywords: ["朝のお勤め体験ができる名門宿坊", "温泉宿", "宿泊予約", "楽天トラベル", "国内旅行", "観光ガイド"],
  alternates: {
    canonical: "https://croud-travel.pages.dev/temple-shukubo-shojin-cuisine-mindfulness-stay/",
  },
  openGraph: {
    title: '歴史ある古刹で心を洗う！本格精進料理＆朝のお勤め体験ができる名門宿坊',
    description: '高野山・善光寺・京都の歴史寺院で体験する非日常のマインドフルネス滞在。滋味あふれる伝統の精進料理、早朝の護摩祈祷や写経で心を整える旅。',
    url: 'https://croud-travel.pages.dev/temple-shukubo-shojin-cuisine-mindfulness-stay/',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "歴史ある古刹で心を洗う！本格精進料理＆朝のお勤め体験ができる名門宿坊",
    "description": "高野山・善光寺・京都の歴史寺院で体験する非日常のマインドフルネス滞在。滋味あふれる伝統の精進料理、早朝の護摩祈祷や写経で心を整える旅。",
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
    "datePublished": "",
    "dateModified": "",
    "mainEntityOfPage": "https://croud-travel.pages.dev/temple-shukubo-shojin-cuisine-mindfulness-stay/"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "宿坊体験・マインドフルネスの旅行でおすすめの予約時期やタイミングは？",
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
    "hotelNo": 135569,
    "hotelName": "信州善光寺　薬王院",
    "hotelKanaName": "やくおういん",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F135569%2F135569.html",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F135569%2F135569.html%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D135569",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D135569",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/135569/135569.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/135569.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/135569/135569_ro.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/135569/135569map.gif",
    "reviewCount": 151,
    "reviewAverage": 4.42,
    "userReview": "ベッドヘッドの埃と連絡のつかない対応に不安黒いベッドヘッドが埃で全面真っ白でした。拭き残しなどというレベルではありませんでしたので、気づいてないのかもしれませんが、拭いたお風呂タオルは真っ黒に。",
    "hotelMinCharge": 13800,
    "address1": "長野県",
    "address2": "長野市元善町657",
    "telephoneNo": "026-232-8901",
    "access": "長野駅よりお車で10分。バスで15分（長野駅-善光寺西　180円。バス停から当院まで200m。）",
    "parkingInformation": "有り　有料",
    "nearestStation": "長野",
    "hotelSpecial": "善光寺本堂まで徒歩3分の好立地。善光寺が建立された1400年前に、阿弥陀堂として建てられた伝統の宿坊",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F135569%2F135569.html"
  },
  {
    "hotelNo": 13751,
    "hotelName": "恵光院",
    "hotelKanaName": "えこういん",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F13751%2F13751.html",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F13751%2F13751.html%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D13751",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D13751",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/13751/13751.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/13751.jpg",
    "roomImageUrl": "",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/13751/13751map.gif",
    "reviewCount": 593,
    "reviewAverage": 4.53,
    "userReview": "以前より値上がりし料理の質も低下宿坊なのにこの金額は高過ぎる。以前は1万円代で泊まれた。食事もガラリと変わり全然美味しくない。以前の料理の方が良かった。",
    "hotelMinCharge": 35000,
    "address1": "和歌山県",
    "address2": "伊都郡高野町高野山497",
    "telephoneNo": "14",
    "access": "南海『難波駅』より南海電鉄高野線で『高野山駅』より南海バス10分",
    "parkingInformation": "有り　30台　無料　先着順",
    "nearestStation": "極楽橋",
    "hotelSpecial": "霊峰高野山。静かな宿坊でのひとときが心を癒します。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F13751%2F13751.html"
  },
  {
    "hotelNo": 135369,
    "hotelName": "大進坊",
    "hotelKanaName": "だいしんぼう",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F135369%2F135369.html",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F135369%2F135369.html%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D135369",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D135369",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/135369/135369.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/135369.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/135369/135369_hi.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/135369/135369map.gif",
    "reviewCount": 44,
    "reviewAverage": 4.08,
    "userReview": "",
    "hotelMinCharge": 11000,
    "address1": "山形県",
    "address2": "鶴岡市羽黒町手向95",
    "telephoneNo": "72",
    "access": "羽越線鶴岡駅より車で20分／庄内空港より車で30分／山形自動車道 庄内あさひICより車で40分",
    "parkingInformation": "屋外駐車場30台完備　無料　予約不要",
    "nearestStation": "鶴岡",
    "hotelSpecial": "三百年の歴史ある宿坊。地元の素材に拘った手作り精進料理、ごま豆腐・栃餅が好評。希望者は祈祷体験可能。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F135369%2F135369.html"
  }
];


  return (
    <div className="space-y-10 max-w-4xl mx-auto">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"ホーム","item":"https://croud-travel.pages.dev/"},{"@type":"ListItem","position":2,"name":"特集一覧","item":"https://croud-travel.pages.dev/features/"},{"@type":"ListItem","position":3,"name":"歴史ある古刹で心を洗う！本格精進料理＆朝のお勤め体験ができる名門宿坊 ｜ 日本全国・旅宿クラウド","item":"https://croud-travel.pages.dev/temple-shukubo-shojin-cuisine-mindfulness-stay/"}]}) }}
      />
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
        <Link href="/features/" className="hover:text-teal-800 transition">特集一覧</Link>
        <span>/</span>
        <span className="text-emerald-950/40 line-clamp-1">古刹宿坊＆本格精進料理ステイ</span>
      </nav>

      {/* ヒーローヘッダー */}
      <div className="border border-emerald-950/10 bg-white rounded-3xl p-6 md:p-12 shadow-sm space-y-6">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="bg-amber-100 text-amber-900 font-extrabold text-[10px] px-3 py-1 rounded-full uppercase tracking-wider">
              宿坊体験・マインドフルネス 特選ガイド
            </span>
            <span className="text-[10px] text-slate-400 font-bold">2026年最新版</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-black font-journal-serif text-emerald-950 leading-tight">歴史ある古刹で心を洗う！本格精進料理＆朝のお勤め体験ができる名門宿坊</h1>
          <p className="text-xs md:text-sm text-emerald-950/80 leading-relaxed font-medium pt-2">
            凛とした空気が漂う境内で、静かに響く鐘の音と僧侶の読経。旬の野菜や豆類を丁寧に調理した美しい精進料理を味わい、朝のお勤めや瞑想で雑念を手放す。忙しい現代人にこそ必要な、心と体をリセットする静寂の宿坊ステイをお届けします。
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
                  <div className="md:col-span-1 aspect-[16/9] sm:aspect-[21/9] rounded-2xl overflow-hidden bg-slate-100 relative">
                    {h.hotelImageUrl ? (
                      <img
                        src={h.hotelImageUrl}
                        alt={h.hotelName}
                        className="w-full h-full object-cover"
                        loading="eager" fetchPriority="high"
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
                        rel="sponsored noopener noreferrer"
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
            title="歴史ある古刹で心を洗う！本格精進料理＆朝のお勤め体験ができる名門宿坊"
            url="https://croud-travel.pages.dev/temple-shukubo-shojin-cuisine-mindfulness-stay/"
          />
        </div>

        {/* よくある質問 FAQ */}
        <div className="pt-8 border-t border-emerald-950/10 space-y-4">
          <h3 className="text-lg font-bold font-journal-serif text-emerald-950 flex items-center gap-2">
            <span>❓</span>
            <span>宿坊体験・マインドフルネスに関するよくある質問</span>
          </h3>
          <div className="space-y-3 text-xs">
            <div className="p-4 rounded-xl bg-teal-50/30 border border-teal-900/10 space-y-1.5">
              <h4 className="font-bold text-teal-950">Q. 宿坊体験・マインドフルネスの予約でお得な方法はありますか？</h4>
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
    
      
        {/* Enriched Rakuten API & Wikipedia Tourist Guide */}
        <section data-enriched-rakuten-wiki="true" className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200 space-y-8 my-10">
          <div className="space-y-2 border-b border-stone-200 pb-4">
            <span className="text-[11px] font-extrabold text-amber-700 bg-amber-50 border border-amber-200 px-3 py-0.5 rounded-full uppercase">
              RAKUTEN TRAVEL API &amp; LOCAL GUIDE
            </span>
            <h2 className="text-xl md:text-2xl font-bold text-stone-900">
              📊 歴史ある古刹で心を洗う！本格精進料理＆朝のお勤め体験ができる名門宿坊：掲載宿スペック一覧比較表＆宿泊者クチコミ・アクセス詳細分析
            </h2>
            <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
              楽天トラベル公式APIより取得した「歴史ある古刹で心を洗う！本格精進料理＆朝のお勤め体験ができる名門宿坊」掲載宿の所在地・最寄り駅・駐車場条件・クチコミ評価・参考最安料金を一覧で比較できます。公共交通機関（新幹線・在来線・送迎バス）利用の方もマイカー・レンタカー利用の方も、旅のスタイルに合った一軒をお選びください。
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse bg-white rounded-xl overflow-hidden border border-stone-200">
              <thead>
                <tr className="bg-stone-900 text-white font-bold">
                  <th className="p-3">宿名</th>
                  <th className="p-3">所在地</th>
                  <th className="p-3">最寄り駅・交通</th>
                  <th className="p-3">駐車場情報</th>
                  <th className="p-3">楽天評価</th>
                  <th className="p-3">最安目安</th>
                  <th className="p-3">予約・詳細</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200">
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">1. 信州善光寺　薬王院</td>
                <td className="p-3 text-stone-600">長野県長野市元善町657</td>
                <td className="p-3 text-stone-600">長野駅周辺</td>
                <td className="p-3 text-stone-600">有り　有料</td>
                <td className="p-3 font-bold text-amber-600">★4.39（150件）</td>
                <td className="p-3 font-bold text-rose-600">¥13,800〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F135569%2F135569.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">2. 恵光院</td>
                <td className="p-3 text-stone-600">和歌山県伊都郡高野町高野山497</td>
                <td className="p-3 text-stone-600">極楽橋駅周辺</td>
                <td className="p-3 text-stone-600">有り　30台　無料　先着順</td>
                <td className="p-3 font-bold text-amber-600">★4.5（596件）</td>
                <td className="p-3 font-bold text-rose-600">¥35,000〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F13751%2F13751.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">3. 大進坊</td>
                <td className="p-3 text-stone-600">山形県鶴岡市羽黒町手向95</td>
                <td className="p-3 text-stone-600">鶴岡駅周辺</td>
                <td className="p-3 text-stone-600">屋外駐車場30台完備　無料　予約不要</td>
                <td className="p-3 font-bold text-amber-600">★4.22（41件）</td>
                <td className="p-3 font-bold text-rose-600">¥11,000〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F135369%2F135369.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              </tbody>
            </table>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold text-stone-900 border-l-4 border-amber-600 pl-3">
              🏨 各宿の宿泊者リアルクチコミ・客室イメージ・項目別評価データ
            </h3>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #1</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">信州善光寺　薬王院</h3>
                  <span className="text-xs text-stone-400 ml-2">（やくおういん）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥13,800〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/135569/135569_ro.jpg" alt="信州善光寺　薬王院 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>善光寺本堂まで徒歩3分の好立地。善光寺が建立された1400年前に、阿弥陀堂として建てられた伝統の宿坊</p>
                  <p><strong>【所在地・アクセス】</strong>〒 長野県長野市元善町657 ／ 最寄り駅：長野 ／ 交通案内：長野駅よりお車で10分。バスで15分（長野駅-善光寺西　180円。バス停から当院まで200m。）</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　有料</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「ベッドヘッドの埃と連絡のつかない対応に不安黒いベッドヘッドが埃で全面真っ白でした。拭き残しなどというレベルではありませんでしたので、気づいてないのかもしれませんが、拭いたお風呂タオルは真っ黒に…　2026-08-06 08:01:26投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #2</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">恵光院</h3>
                  <span className="text-xs text-stone-400 ml-2">（えこういん）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥35,000〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/13751/13751.jpg" alt="恵光院 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>霊峰高野山。静かな宿坊でのひとときが心を癒します。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 和歌山県伊都郡高野町高野山497 ／ 最寄り駅：極楽橋 ／ 交通案内：南海『難波駅』より南海電鉄高野線で『高野山駅』より南海バス10分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　30台　無料　先着順</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.56 ／ 立地 ★4.5 ／ 部屋 ★4.5 ／ 設備 ★4.5 ／ 風呂 ★4.33 ／ 食事 ★4.56</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「8年ぶりの再訪、非日常の体験に大満足家族で泊まりました。以前にも、恵光院さんへ泊まらせもらったあ事があったので2回目になりますが、8年ぶりでした。すべてにおいての、気づかいやお部屋の凄さにもビ…　2026-10-05 14:43:27投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #3</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">大進坊</h3>
                  <span className="text-xs text-stone-400 ml-2">（だいしんぼう）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥11,000〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/135369/135369_hi.jpg" alt="大進坊 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>三百年の歴史ある宿坊。地元の素材に拘った手作り精進料理、ごま豆腐・栃餅が好評。希望者は祈祷体験可能。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 山形県鶴岡市羽黒町手向95 ／ 最寄り駅：鶴岡 ／ 交通案内：羽越線鶴岡駅より車で20分／庄内空港より車で30分／山形自動車道 庄内あさひICより車で40分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>屋外駐車場30台完備　無料　予約不要</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「大進坊は立地・設備・ホスピタリティのバランスに優れ、観光拠点としても記念日や週末リフレッシュ滞在としても高い満足度を得ています。」
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-6 border-t border-stone-200">
            <h3 className="text-lg font-bold text-stone-900 border-l-4 border-teal-600 pl-3">
              🗺️ あわせて巡りたい！山形県の代表的な観光名所・歴史自然ガイド（Wikipedia公認画像・解説）
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              宿泊前後の1泊2日・2泊3日モデルコースに組み込みたい、山形県を代表する名所・絶景スポットの解説です。チェックイン前後の荷物預かりや駅周辺のレンタカー・周遊バスを活用すると効率よく巡ることができます。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #1</span>
                <h3 className="text-base font-bold text-stone-900">宝珠山 立石寺（山寺）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">松尾芭蕉が「閑さや岩にしみ入る蝉の声」と詠んだことで名高い名刹。1015段の石段を登りきった五大堂からは、山形の大自然と里山を一望する壮大な絶景が広がります。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              <div className="aspect-video relative overflow-hidden bg-stone-200"><img src="https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0b/Evening_twilight_in_Ginzan_Onsen_town_January_2022_A.jpg/1280px-Evening_twilight_in_Ginzan_Onsen_town_January_2022_A.jpg?utm_source=ja.wikipedia.org&amp;utm_campaign=api&amp;utm_content=thumbnail" alt="銀山温泉" className="w-full h-full object-cover" loading="lazy" /></div>
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #2</span>
                <h3 className="text-base font-bold text-stone-900">銀山温泉</h3>
                <p className="text-xs text-stone-600 leading-relaxed">銀山川の両岸に木造多層の温泉旅館が立ち並ぶ、大正ロマンあふれる温泉街。夕暮れ時にガス灯の温かな光が雪景色や大正建築を照らし出す風景は感動的です。 銀山温泉（ぎんざんおんせん）は、山形県尾花沢市（旧国出羽国、明治以降は羽前国）にある温泉である。 NHK連続テレビ小説『おしん』の舞台となったことで一躍脚光を浴び、全国的にその名を知られることになった。…</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              <div className="aspect-video relative overflow-hidden bg-stone-200"><img src="https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6d/Zaou_Gongen_Circumstancial_appearance_of_Mount_Yoshino.jpg/1280px-Zaou_Gongen_Circumstancial_appearance_of_Mount_Yoshino.jpg?utm_source=ja.wikipedia.org&amp;utm_campaign=api&amp;utm_content=thumbnail" alt="蔵王の樹氷" className="w-full h-full object-cover" loading="lazy" /></div>
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #3</span>
                <h3 className="text-base font-bold text-stone-900">蔵王の樹氷</h3>
                <p className="text-xs text-stone-600 leading-relaxed">冬の蔵王連峰で見られる自然の芸術「アイスモンスター」。アオモリトドマツに雪と氷が吹き付けられて巨大化した樹氷群を、ロープウェイやナイターライトアップで楽しめます。 蔵王、藏王（ざ-おう） 読みとしては、「蔵王」の本来の読み、旧仮名づかい「ざう-わう(ぞう-おう)」（音読み）が連声化したもの。 修験道の神である蔵王権現のこと。日本各地にみられる「蔵王」という名称は、後述の地名を含め、その大半が蔵王権現（奈良県吉野の発祥）に由来している（蔵王権現を参照）。 上述の蔵王権現を祭っている神社（蔵王権現社、御嶽神社（御岳神社）、…</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #4</span>
                <h3 className="text-base font-bold text-stone-900">羽黒山 三重塔</h3>
                <p className="text-xs text-stone-600 leading-relaxed">出羽三山神社への参道杉木立の中に佇む、東北最古の国宝木造塔。樹齢数百年の巨大な老杉に囲まれた静寂な空間は、強いパワースポットとして知られています。</p>
              </div>
            </div>
            </div>
          </div>

          <div className="bg-amber-50/70 rounded-2xl p-5 md:p-6 border border-amber-200 space-y-3 text-xs text-stone-700 leading-relaxed">
            <h3 className="text-sm md:text-base font-bold text-amber-950">
              💡 山形県エリアの宿泊予約・シーズン別ベストタイミングと節約ノウハウ
            </h3>
            <p>
              <strong>1. 早期予約と楽天トラベルクーポンの併用：</strong> 山形県の人気温泉宿・リゾートホテルは、週末や連休・紅葉・年末年始の60日〜30日前から一気に予約が埋まります。毎月5と0のつく日やスーパーSALE期間中に配布される宿クーポン・自治体クーポンを併用すると、通常より最大10〜20%お得に予約可能です。
            </p>
            <p>
              <strong>2. 夕食・朝食プランと部屋タイプの選び方：</strong> 地元産の旬魚介やブランド牛会席を味わうなら「夕朝食付きプラン」、周辺の屋台・老舗居酒屋・ご当地グルメを食べ歩くなら「朝食付き」または「素泊まり＋天然温泉大浴場付きホテル」を選ぶと予算と満足度のバランスが最適化されます。
            </p>
          </div>
        </section>

      <HubRelatedPosts currentSlug="temple-shukubo-shojin-cuisine-mindfulness-stay" />
</div>
  );
}
