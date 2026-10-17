import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import SpecialCouponBanner from '@/app/components/SpecialCouponBanner';
import ShareButtons from '@/app/components/ShareButtons';

export const metadata: Metadata = {
  title: '開園直前から閉園後まで遊び尽くす！全国の水族館・テーマパーク直結＆オフィシャルホテル ｜ 日本全国・旅宿クラウド',
  description: '鴨川シーワールド・美ら海水族館・アドベンチャーワールド・富士急など人気施設直結のホテル。入園パスポート付きプランやキャラクタールームが充実。',
  keywords: ["テーマパーク直結", "オフィシャルホテル", "温泉宿", "宿泊予約", "楽天トラベル", "国内旅行", "観光ガイド"],
  alternates: {
    canonical: "https://croud-travel.pages.dev/aquarium-themepark-official-family-hotel-stay/",
  },
  openGraph: {
    title: '開園直前から閉園後まで遊び尽くす！全国の水族館・テーマパーク直結＆オフィシャルホテル',
    description: '鴨川シーワールド・美ら海水族館・アドベンチャーワールド・富士急など人気施設直結のホテル。入園パスポート付きプランやキャラクタールームが充実。',
    url: 'https://croud-travel.pages.dev/aquarium-themepark-official-family-hotel-stay',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "開園直前から閉園後まで遊び尽くす！全国の水族館・テーマパーク直結＆オフィシャルホテル",
    "description": "鴨川シーワールド・美ら海水族館・アドベンチャーワールド・富士急など人気施設直結のホテル。入園パスポート付きプランやキャラクタールームが充実。",
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
    "mainEntityOfPage": "https://croud-travel.pages.dev/aquarium-themepark-official-family-hotel-stay"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "水族館・テーマパーク旅の旅行でおすすめの予約時期やタイミングは？",
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
    "hotelNo": 145419,
    "hotelName": "オリオンホテル　モトブリゾート＆スパ",
    "hotelKanaName": "おりおんほてるもとぶりぞーとあんどすぱ",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D145419",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D145419%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D145419",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D145419",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/145419/145419.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/145419.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/145419/145419_room.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/145419/145419map.gif",
    "reviewCount": 950,
    "reviewAverage": 4.56,
    "userReview": "子連れに最適、部屋のお風呂も広くて快適子連れにはぴったりだと思います。泊まった部屋はフローリングで、歩きたての一歳も伸び伸びお部屋で過ごせました。看護師常駐のエメラルドビーチにも出やすく、ビー。",
    "hotelMinCharge": 21120,
    "address1": "沖縄県",
    "address2": "国頭郡本部町備瀬148-1",
    "telephoneNo": "00",
    "access": "那覇空港からお車で高速利用約100分。空港バス利用約150分ホテル前停車。美ら海水族館へ徒歩7分、海洋博公園隣接",
    "parkingInformation": "駐車場無料",
    "nearestStation": "那覇空港",
    "hotelSpecial": "【楽天トラベル ブロンズアワード2024受賞】「しぜんとしぜんに」を体現する洗練された南国リゾート",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F145419%2F145419.html"
  },
  {
    "hotelNo": 16654,
    "hotelName": "ホテル近鉄ユニバーサル・シティ",
    "hotelKanaName": "きんてつ　ゆにばーさる・してぃ",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D16654",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D16654%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D16654",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D16654",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/16654/16654.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/16654.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/16654/16654_room.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/16654/16654map.gif",
    "reviewCount": 13579,
    "reviewAverage": 4.53,
    "userReview": "予約金額に宿泊税を含めてほしい予約金額に宿泊税も含めて欲しい。",
    "hotelMinCharge": 4655,
    "address1": "大阪府",
    "address2": "大阪市此花区島屋6-2-68",
    "telephoneNo": "06-6465-6000",
    "access": "JRユニバーサルシティ駅より徒歩約2分【大阪駅から直通列車で約12分】／阪神高速湾岸線ユニバーサルシティ出口より約5分",
    "parkingInformation": "先着52台、入庫～24時間3,000円（駐車券をフロントで提示要）、提携有、両方満車時は待機要",
    "nearestStation": "ユニバーサルシティ",
    "hotelSpecial": "【楽天トラベルゴールドアワード７年連続受賞】宿泊者特典有り",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F16654%2F16654.html"
  },
  {
    "hotelNo": 71921,
    "hotelName": "ホテル京阪　ユニバーサル・タワー",
    "hotelKanaName": "けいはん　ゆにばーさる・たわー",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D71921",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D71921%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D71921",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D71921",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/71921/71921.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/71921.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/71921/71921_kan.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/71921/71921map.gif",
    "reviewCount": 9711,
    "reviewAverage": 4.59,
    "userReview": "USJを満喫するのに最高の立地素泊まりでしが、USJを満喫するには最高でした。",
    "hotelMinCharge": 6700,
    "address1": "大阪府",
    "address2": "大阪市此花区島屋6-2-45",
    "telephoneNo": "06-6465-1001",
    "access": "JRユニバーサルシティ駅・USJへ徒歩スグ！阪神高速ユニバーサルシティ出口より車で約5分！大阪駅まで電車で約11分！",
    "parkingInformation": "有り/先着順/有料※駐車場料金については、公式HPをご確認ください。",
    "nearestStation": "ユニバーサルシティ",
    "hotelSpecial": "駅・USJ徒歩スグのオフィシャルホテル！31階天然展望温泉（有料）は大人気",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F71921%2F71921.html"
  }
];


  return (
    <div className="space-y-10 max-w-4xl mx-auto">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"ホーム","item":"https://croud-travel.pages.dev/"},{"@type":"ListItem","position":2,"name":"特集一覧","item":"https://croud-travel.pages.dev/features"},{"@type":"ListItem","position":3,"name":"開園直前から閉園後まで遊び尽くす！全国の水族館・テーマパーク直結＆オフィシャルホテル ｜ 日本全国・旅宿クラウド","item":"https://croud-travel.pages.dev/aquarium-themepark-official-family-hotel-stay"}]}) }}
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
        <Link href="/features" className="hover:text-teal-800 transition">特集一覧</Link>
        <span>/</span>
        <span className="text-emerald-950/40 line-clamp-1">水族館＆テーマパーク直結ホテル</span>
      </nav>

      {/* ヒーローヘッダー */}
      <div className="border border-emerald-950/10 bg-white rounded-3xl p-6 md:p-12 shadow-sm space-y-6">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="bg-amber-100 text-amber-900 font-extrabold text-[10px] px-3 py-1 rounded-full uppercase tracking-wider">
              水族館・テーマパーク旅 特選ガイド
            </span>
            <span className="text-[10px] text-slate-400 font-bold">2026年最新版</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-black font-journal-serif text-emerald-950 leading-tight">開園直前から閉園後まで遊び尽くす！全国の水族館・テーマパーク直結＆オフィシャルホテル</h1>
          <p className="text-xs md:text-sm text-emerald-950/80 leading-relaxed font-medium pt-2">
            朝一番の空いている時間に人気アトラクションを楽しんだり、閉園後のナイトツアーに参加したり。パーク直結や徒歩数分のホテルなら、途中で部屋に戻って休憩できるため小さなお子様連れやシニアも安心。感動体験を余すところなく味わえる特等席ステイをご提案します。
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
            title="開園直前から閉園後まで遊び尽くす！全国の水族館・テーマパーク直結＆オフィシャルホテル"
            url="https://croud-travel.pages.dev/aquarium-themepark-official-family-hotel-stay"
          />
        </div>

        {/* よくある質問 FAQ */}
        <div className="pt-8 border-t border-emerald-950/10 space-y-4">
          <h3 className="text-lg font-bold font-journal-serif text-emerald-950 flex items-center gap-2">
            <span>❓</span>
            <span>水族館・テーマパーク旅に関するよくある質問</span>
          </h3>
          <div className="space-y-3 text-xs">
            <div className="p-4 rounded-xl bg-teal-50/30 border border-teal-900/10 space-y-1.5">
              <h4 className="font-bold text-teal-950">Q. 水族館・テーマパーク旅の予約でお得な方法はありますか？</h4>
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
              📊 開園直前から閉園後まで遊び尽くす！全国の水族館・テーマパーク直結＆オフィシャルホテル：掲載宿スペック一覧比較表＆宿泊者クチコミ・アクセス詳細分析
            </h2>
            <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
              楽天トラベル公式APIより取得した「開園直前から閉園後まで遊び尽くす！全国の水族館・テーマパーク直結＆オフィシャルホテル」掲載宿の所在地・最寄り駅・駐車場条件・クチコミ評価・参考最安料金を一覧で比較できます。公共交通機関（新幹線・在来線・送迎バス）利用の方もマイカー・レンタカー利用の方も、旅のスタイルに合った一軒をお選びください。
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
                <td className="p-3 font-bold text-stone-900">1. オリオンホテル　モトブリゾート＆スパ</td>
                <td className="p-3 text-stone-600">沖縄県国頭郡本部町備瀬148-1</td>
                <td className="p-3 text-stone-600">那覇空港駅周辺</td>
                <td className="p-3 text-stone-600">駐車場無料</td>
                <td className="p-3 font-bold text-amber-600">★4.57（970件）</td>
                <td className="p-3 font-bold text-rose-600">¥18,480〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F145419%2F145419.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">2. ホテル近鉄ユニバーサル・シティ</td>
                <td className="p-3 text-stone-600">大阪府大阪市此花区島屋6-2-68</td>
                <td className="p-3 text-stone-600">ユニバーサルシティ駅周辺</td>
                <td className="p-3 text-stone-600">先着52台、入庫〜24時間3,000円（駐車券をフロントで提示要）、提携有、両方満車時は待機要</td>
                <td className="p-3 font-bold text-amber-600">★4.54（13868件）</td>
                <td className="p-3 font-bold text-rose-600">¥6,400〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F16654%2F16654.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">3. ホテル京阪　ユニバーサル・タワー</td>
                <td className="p-3 text-stone-600">大阪府大阪市此花区島屋6-2-45</td>
                <td className="p-3 text-stone-600">ユニバーサルシティ駅周辺</td>
                <td className="p-3 text-stone-600">有り/先着順/有料※駐車場料金については、公式HPをご確認ください。</td>
                <td className="p-3 font-bold text-amber-600">★4.59（9794件）</td>
                <td className="p-3 font-bold text-rose-600">¥6,700〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F71921%2F71921.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
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
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">オリオンホテル　モトブリゾート＆スパ</h3>
                  <span className="text-xs text-stone-400 ml-2">（おりおんほてるもとぶりぞーとあんどすぱ）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥18,480〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/145419/145419_room.jpg" alt="オリオンホテル　モトブリゾート＆スパ 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>【楽天トラベル ブロンズアワード2024受賞】「しぜんとしぜんに」を体現する洗練された南国リゾート</p>
                  <p><strong>【所在地・アクセス】</strong>〒 沖縄県国頭郡本部町備瀬148-1 ／ 最寄り駅：那覇空港 ／ 交通案内：那覇空港からお車で高速利用約100分。空港バス利用約150分ホテル前停車。美ら海水族館へ徒歩7分、海洋博公園隣接</p>
                  <p><strong>【駐車場・マイカー利用】</strong>駐車場無料</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.56 ／ 立地 ★4.77 ／ 部屋 ★4.75 ／ 設備 ★4.57 ／ 風呂 ★4.45 ／ 食事 ★4.51</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「オーシャンビューと食事は満足、内装はシンプル系オーシャンビューがとても良かったです。館内はどこも清潔で、ご飯も美味しかったです。ただ内装はどちらかというとシンプル系で、ラグジュアリー感にはやや欠け…　2026-10-10 10:44:36投稿 &lt;a href=&quot;https://img.travel.rakuten.co.jp/image/tr/api/hs/RmfmX/?f_hotel_no=145419&quot; class=&quot;3click&quot;」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #2</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">ホテル近鉄ユニバーサル・シティ</h3>
                  <span className="text-xs text-stone-400 ml-2">（きんてつ　ゆにばーさる・してぃ）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥6,400〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/16654/16654_room.jpg" alt="ホテル近鉄ユニバーサル・シティ 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>【楽天トラベルゴールドアワード７年連続受賞】宿泊者特典有り</p>
                  <p><strong>【所在地・アクセス】</strong>〒 大阪府大阪市此花区島屋6-2-68 ／ 最寄り駅：ユニバーサルシティ ／ 交通案内：JRユニバーサルシティ駅より徒歩約2分【大阪駅から直通列車で約12分】／阪神高速湾岸線ユニバーサルシティ出口より約5分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>先着52台、入庫〜24時間3,000円（駐車券をフロントで提示要）、提携有、両方満車時は待機要</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.53 ／ 立地 ★4.6 ／ 部屋 ★4.55 ／ 設備 ★4.44 ／ 風呂 ★4.28 ／ 食事 ★4.52</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「パーク側のお部屋でパークの余韻に浸れる利便性最高!パーク側だったのでお部屋に戻ってからも余韻を楽しめましたクチコミの詳細はこちらから　https://review.travel.rakut…　2026-10-11 01:50:37投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #3</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">ホテル京阪　ユニバーサル・タワー</h3>
                  <span className="text-xs text-stone-400 ml-2">（けいはん　ゆにばーさる・たわー）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥6,700〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/71921/71921_kan.jpg" alt="ホテル京阪　ユニバーサル・タワー 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>駅・USJ徒歩スグのオフィシャルホテル！31階天然展望温泉（有料）は大人気</p>
                  <p><strong>【所在地・アクセス】</strong>〒 大阪府大阪市此花区島屋6-2-45 ／ 最寄り駅：ユニバーサルシティ ／ 交通案内：JRユニバーサルシティ駅・USJへ徒歩スグ！阪神高速ユニバーサルシティ出口より車で約5分！大阪駅まで電車で約11分！</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り/先着順/有料※駐車場料金については、公式HPをご確認ください。</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.55 ／ 立地 ★4.62 ／ 部屋 ★4.62 ／ 設備 ★4.57 ／ 風呂 ★4.42 ／ 食事 ★4.43</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「USJやコンビニが近く、部屋も清潔で快適部屋も清潔だったし、コンビニも近いUSJの入り口も近いしとても良かったです。また利用させていただきます。クチコミの詳細はこちらから　https://re…　2026-10-10 17:43:08投稿」
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-6 border-t border-stone-200">
            <h3 className="text-lg font-bold text-stone-900 border-l-4 border-teal-600 pl-3">
              🗺️ あわせて巡りたい！大阪府の代表的な観光名所・歴史自然ガイド（Wikipedia公認画像・解説）
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              宿泊前後の1泊2日・2泊3日モデルコースに組み込みたい、大阪府を代表する名所・絶景スポットの解説です。チェックイン前後の荷物預かりや駅周辺のレンタカー・周遊バスを活用すると効率よく巡ることができます。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #1</span>
                <h3 className="text-base font-bold text-stone-900">大阪城公園（大阪城天守閣）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">豊臣秀吉公が築城した天下の名城。黄金の飾りが映える重厚な天守閣と、壮大な石垣・巨石、春には桜が咲き誇る広大な都会のオアシスです。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #2</span>
                <h3 className="text-base font-bold text-stone-900">道頓堀・グリコサイン</h3>
                <p className="text-xs text-stone-600 leading-relaxed">食い倒れの街・大阪を象徴するネオン街。グリコの巨大看板前での記念撮影や、道頓堀川沿いでのたこ焼き・串カツ食べ歩きで活気にあふれています。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #3</span>
                <h3 className="text-base font-bold text-stone-900">ユニバーサル・スタジオ・ジャパン（USJ）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">「ウィザーディング・ワールド・オブ・ハリー・ポッター」や「スーパー・ニンテンドー・ワールド」など世界最高峰のエンターテインメントが体験できる世界級テーマパーク。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #4</span>
                <h3 className="text-base font-bold text-stone-900">通天閣・新世界</h3>
                <p className="text-xs text-stone-600 leading-relaxed">なにわのシンボルタワー「通天閣」と、昭和レトロな雰囲気が色濃く残る新世界。幸運の神様「ビリケンさん」の足の裏を撫でて幸運を祈願できます。</p>
              </div>
            </div>
            </div>
          </div>

          <div className="bg-amber-50/70 rounded-2xl p-5 md:p-6 border border-amber-200 space-y-3 text-xs text-stone-700 leading-relaxed">
            <h3 className="text-sm md:text-base font-bold text-amber-950">
              💡 大阪府エリアの宿泊予約・シーズン別ベストタイミングと節約ノウハウ
            </h3>
            <p>
              <strong>1. 早期予約と楽天トラベルクーポンの併用：</strong> 大阪府の人気温泉宿・リゾートホテルは、週末や連休・紅葉・年末年始の60日〜30日前から一気に予約が埋まります。毎月5と0のつく日やスーパーSALE期間中に配布される宿クーポン・自治体クーポンを併用すると、通常より最大10〜20%お得に予約可能です。
            </p>
            <p>
              <strong>2. 夕食・朝食プランと部屋タイプの選び方：</strong> 地元産の旬魚介やブランド牛会席を味わうなら「夕朝食付きプラン」、周辺の屋台・老舗居酒屋・ご当地グルメを食べ歩くなら「朝食付き」または「素泊まり＋天然温泉大浴場付きホテル」を選ぶと予算と満足度のバランスが最適化されます。
            </p>
          </div>
        </section>

      <HubRelatedPosts currentSlug="aquarium-themepark-official-family-hotel-stay" />
</div>
  );
}
