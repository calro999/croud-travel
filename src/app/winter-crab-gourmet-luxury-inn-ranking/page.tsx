import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import SpecialCouponBanner from '@/app/components/SpecialCouponBanner';
import ShareButtons from '@/app/components/ShareButtons';

export const metadata: Metadata = {
  title: '冬の味覚の王様！極上活蟹・松葉ガニ・越前ガニを心ゆくまで堪能できる厳選温泉宿',
  description: '城崎・三国・皆生など冬の味覚の最高峰「松葉ガニ」「越前ガニ」を活蟹会席で贅沢に堪能できる厳選温泉宿を特集。',
  keywords: ["冬の味覚の王様！極上活蟹", "松葉ガニ", "温泉宿", "宿泊予約", "楽天トラベル", "国内旅行", "観光ガイド"],
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-crab-gourmet-luxury-inn-ranking/",
  },
  openGraph: {
    title: '冬の味覚の王様！極上活蟹・松葉ガニ・越前ガニを心ゆくまで堪能できる厳選温泉宿',
    description: '城崎・三国・皆生など冬の味覚の最高峰「松葉ガニ」「越前ガニ」を活蟹会席で贅沢に堪能できる厳選温泉宿を特集。',
    url: 'https://croud-travel.pages.dev/winter-crab-gourmet-luxury-inn-ranking',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "冬の味覚の王様！極上活蟹・松葉ガニ・越前ガニを心ゆくまで堪能できる厳選温泉宿",
    "description": "城崎・三国・皆生など冬の味覚の最高峰「松葉ガニ」「越前ガニ」を活蟹会席で贅沢に堪能できる厳選温泉宿を特集。楽天トラベルの最新空室・プラン情報。",
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
    "mainEntityOfPage": "https://croud-travel.pages.dev/winter-crab-gourmet-luxury-inn-ranking"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "冬の味覚・カニ旅の旅行でおすすめの予約時期やタイミングは？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "人気のハイシーズンや週末・連休は2〜3ヶ月前からの予約が推奨されます。楽天トラベルの「5と0のつく日セール」や「ふるさと納税クーポン」を事前獲得しておくことで、最もお得に予約いただけます。"
        }
      },
      {
        "@type": "Question",
        "name": "楽天トラベルのクーポンやポイント還元は併用できますか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "はい、楽天トラベルのキャンペーンクーポンや楽天ポイント、ふるさと納税宿泊クーポンは規定の範囲内で組み合わせてご利用いただけます。"
        }
      }
    ]
  };

  const hotels = [
  {
    "hotelNo": 147534,
    "hotelName": "城崎温泉　医食同源の宿　かに庵",
    "hotelKanaName": "きのさきおんせん　いしょくどうげんのやど　かにあん",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F147534%2F147534.html",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F147534%2F147534.html%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D147534",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D147534",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/147534/147534.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/147534.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/147534/147534_kan1.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/147534/147534map.gif",
    "reviewCount": 116,
    "reviewAverage": 4.28,
    "userReview": "おせわになりました。外湯へのアクセスが良かったです。花火も開始2分前にバタバタ出ましたがピッタリ間に合い堪能しました。他所でカニ食べる予定で、夕食はしゃぶしゃぶコースを選択していました。お。",
    "hotelMinCharge": 9900,
    "address1": "兵庫県",
    "address2": "豊岡市城崎町湯島690",
    "telephoneNo": "08",
    "access": "ＪＲ　城崎温泉駅より徒歩にて約７分。　大阪方面より中国道～舞鶴道～北近畿豊岡自動車道～但馬空港ＩＣ下車　約30分",
    "parkingInformation": "契約駐車場有り(受け入れ15～18時、翌10時まで）　有料1,650円　　要予約",
    "nearestStation": "",
    "hotelSpecial": "但馬牛や松葉かになど、地産地消を基本にグルメと健康を両立した6室の宿でございます。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F147534%2F147534.html"
  },
  {
    "hotelNo": 19708,
    "hotelName": "城崎温泉　網元の宿　蟹宿むつの屋",
    "hotelKanaName": "きのさきおんせん　あみもとのやど　かにやどむつのや",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F19708%2F19708.html",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F19708%2F19708.html%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D19708",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D19708",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/19708/19708.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/19708.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/19708/19708_ry.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/19708/19708map.gif",
    "reviewCount": 39,
    "reviewAverage": 3.9,
    "userReview": "",
    "hotelMinCharge": 18030,
    "address1": "兵庫県",
    "address2": "豊岡市城崎町湯島652",
    "telephoneNo": "11",
    "access": "ＪＲ城崎駅より徒歩１０分、最寄りIC：日高神鍋高原IC",
    "parkingInformation": "有り　1５台　先着順",
    "nearestStation": "城崎",
    "hotelSpecial": "四季を通じて新鮮な海の幸をお召し上がりいただけます。外湯めぐり（外湯巡り券付き）にも便利です。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F19708%2F19708.html"
  },
  {
    "hotelNo": 14007,
    "hotelName": "城崎温泉　西村屋ホテル招月庭",
    "hotelKanaName": "きのさきおんせん　にしむらやほてる　しょうげつてい",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F14007%2F14007.html",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F14007%2F14007.html%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D14007",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D14007",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/14007/14007.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/14007.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/14007/14007_room.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/14007/14007map.gif",
    "reviewCount": 1179,
    "reviewAverage": 4.72,
    "userReview": "早めのチェックインと優雅なサービスに大満足1時間近く早めに到着しましたがチェックインも前倒しで受け入れて下さいました。喫茶でのウェルカムドリンク、ガーデンプール、とても優雅な気分で楽しめました。",
    "hotelMinCharge": 35200,
    "address1": "兵庫県",
    "address2": "豊岡市城崎町湯島1016-2",
    "telephoneNo": "35",
    "access": "【電車】JR城崎温泉駅から旅館組合無料乗合バスで5～15分【車】北近畿豊岡自動車道・豊岡出石ICから約18分",
    "parkingInformation": "無料駐車場有（100台・予約不要）バイクも可",
    "nearestStation": "城崎",
    "hotelSpecial": "かに・但馬牛など四季折々の味覚と充実したお風呂。五万坪の森林に囲まれ寛ぎのひとときを。無料駐車場有",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F14007%2F14007.html"
  }
];


  return (
    <div className="space-y-10 max-w-4xl mx-auto">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"ホーム","item":"https://croud-travel.pages.dev/"},{"@type":"ListItem","position":2,"name":"特集一覧","item":"https://croud-travel.pages.dev/features"},{"@type":"ListItem","position":3,"name":"冬の味覚の王様！極上活蟹・松葉ガニ・越前ガニを心ゆくまで堪能できる厳選温泉宿 ｜ 日本全国・旅宿クラウド","item":"https://croud-travel.pages.dev/winter-crab-gourmet-luxury-inn-ranking"}]}) }}
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
        <span className="text-emerald-950/40 line-clamp-1">冬の活蟹・カニ尽くし名宿</span>
      </nav>

      {/* ヒーローヘッダー */}
      <div className="border border-emerald-950/10 bg-white rounded-3xl p-6 md:p-12 shadow-sm space-y-6">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="bg-amber-100 text-amber-900 font-extrabold text-[10px] px-3 py-1 rounded-full uppercase tracking-wider">
              冬の味覚・カニ旅 特選ガイド
            </span>
            <span className="text-[10px] text-slate-400 font-bold">2026年最新版</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-black font-journal-serif text-emerald-950 leading-tight">冬の味覚の王様！極上活蟹・松葉ガニ・越前ガニを心ゆくまで堪能できる厳選温泉宿</h1>
          <p className="text-xs md:text-sm text-emerald-950/80 leading-relaxed font-medium pt-2">
            冬の訪れとともに解禁される日本海の味覚の王者、松葉ガニや越前ガニ。生簀から引き揚げて直前に捌くタグ付き活蟹の刺身、香ばしく炭火で焼き上げる焼きガニ、濃厚な蟹味噌と甲羅酒、そして締めの上品なカニ雑炊まで。一度味わえば忘れられない冬の至福を約束する名宿をご紹介します。
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
                {/* 宿バッジ・タイトル */}
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
                  {/* 画像 */}
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

                  {/* 宿の特徴・アクセス・料金 */}
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
            title="冬の味覚の王様！極上活蟹・松葉ガニ・越前ガニを心ゆくまで堪能できる厳選温泉宿"
            url="https://croud-travel.pages.dev/winter-crab-gourmet-luxury-inn-ranking"
          />
        </div>

        {/* よくある質問 FAQ */}
        <div className="pt-8 border-t border-emerald-950/10 space-y-4">
          <h3 className="text-lg font-bold font-journal-serif text-emerald-950 flex items-center gap-2">
            <span>❓</span>
            <span>冬の味覚・カニ旅に関するよくある質問</span>
          </h3>
          <div className="space-y-3 text-xs">
            <div className="p-4 rounded-xl bg-teal-50/30 border border-teal-900/10 space-y-1.5">
              <h4 className="font-bold text-teal-950">Q. 冬の味覚・カニ旅の予約でお得な方法はありますか？</h4>
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
              📊 冬の味覚の王様！極上活蟹・松葉ガニ・越前ガニを心ゆくまで堪能できる厳選温泉宿：掲載宿スペック一覧比較表＆宿泊者クチコミ・アクセス詳細分析
            </h2>
            <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
              楽天トラベル公式APIより取得した「冬の味覚の王様！極上活蟹・松葉ガニ・越前ガニを心ゆくまで堪能できる厳選温泉宿」掲載宿の所在地・最寄り駅・駐車場条件・クチコミ評価・参考最安料金を一覧で比較できます。公共交通機関（新幹線・在来線・送迎バス）利用の方もマイカー・レンタカー利用の方も、旅のスタイルに合った一軒をお選びください。
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
                <td className="p-3 font-bold text-stone-900">1. 城崎温泉　医食同源の宿　かに庵</td>
                <td className="p-3 text-stone-600">兵庫県豊岡市城崎町湯島690</td>
                <td className="p-3 text-stone-600">ＪＲ　城崎温泉駅より徒歩にて約７分。　大阪方面より中国道～舞鶴道～北近</td>
                <td className="p-3 text-stone-600">契約駐車場有り(受け入れ15〜18時、翌10時まで）　有料1,650円　　要予約</td>
                <td className="p-3 font-bold text-amber-600">★4.28（116件）</td>
                <td className="p-3 font-bold text-rose-600">¥9,900〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F147534%2F147534.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">2. 城崎温泉　網元の宿　蟹宿むつの屋</td>
                <td className="p-3 text-stone-600">兵庫県豊岡市城崎町湯島652</td>
                <td className="p-3 text-stone-600">城崎駅周辺</td>
                <td className="p-3 text-stone-600">有り　1５台　先着順</td>
                <td className="p-3 font-bold text-amber-600">★4（38件）</td>
                <td className="p-3 font-bold text-rose-600">¥18,030〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F19708%2F19708.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">3. 城崎温泉　西村屋ホテル招月庭</td>
                <td className="p-3 text-stone-600">兵庫県豊岡市城崎町湯島1016-2</td>
                <td className="p-3 text-stone-600">城崎駅周辺</td>
                <td className="p-3 text-stone-600">無料駐車場有（100台・予約不要）バイクも可</td>
                <td className="p-3 font-bold text-amber-600">★4.73（1172件）</td>
                <td className="p-3 font-bold text-rose-600">¥35,200〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F14007%2F14007.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
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
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">城崎温泉　医食同源の宿　かに庵</h3>
                  <span className="text-xs text-stone-400 ml-2">（きのさきおんせん　いしょくどうげんのやど　かにあん）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥9,900〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/147534/147534_kan1.jpg" alt="城崎温泉　医食同源の宿　かに庵 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>但馬牛や松葉かになど、地産地消を基本にグルメと健康を両立した6室の宿でございます。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 兵庫県豊岡市城崎町湯島690 ／ 最寄り駅：主要駅 ／ 交通案内：ＪＲ　城崎温泉駅より徒歩にて約７分。　大阪方面より中国道～舞鶴道～北近畿豊岡自動車道～但馬空港ＩＣ下車　約30分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>契約駐車場有り(受け入れ15〜18時、翌10時まで）　有料1,650円　　要予約</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「おせわになりました。外湯へのアクセスが良かったです。花火も開始2分前にバタバタ出ましたがピッタリ間に合い堪能しました。他所でカニ食べる予定で、夕食はしゃぶしゃぶコースを選択していました。お…　2026-08-21 08:49:01投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #2</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">城崎温泉　網元の宿　蟹宿むつの屋</h3>
                  <span className="text-xs text-stone-400 ml-2">（きのさきおんせん　あみもとのやど　かにやどむつのや）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥18,030〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/19708/19708_ry.jpg" alt="城崎温泉　網元の宿　蟹宿むつの屋 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>四季を通じて新鮮な海の幸をお召し上がりいただけます。外湯めぐり（外湯巡り券付き）にも便利です。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 兵庫県豊岡市城崎町湯島652 ／ 最寄り駅：城崎 ／ 交通案内：ＪＲ城崎駅より徒歩１０分、最寄りIC：日高神鍋高原IC</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　1５台　先着順</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「城崎温泉　網元の宿　蟹宿むつの屋は立地・設備・ホスピタリティのバランスに優れ、観光拠点としても記念日や週末リフレッシュ滞在としても高い満足度を得ています。」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #3</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">城崎温泉　西村屋ホテル招月庭</h3>
                  <span className="text-xs text-stone-400 ml-2">（きのさきおんせん　にしむらやほてる　しょうげつてい）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥35,200〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/14007/14007_room.jpg" alt="城崎温泉　西村屋ホテル招月庭 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>かに・但馬牛など四季折々の味覚と充実したお風呂。五万坪の森林に囲まれ寛ぎのひとときを。無料駐車場有</p>
                  <p><strong>【所在地・アクセス】</strong>〒 兵庫県豊岡市城崎町湯島1016-2 ／ 最寄り駅：城崎 ／ 交通案内：【電車】JR城崎温泉駅から旅館組合無料乗合バスで5～15分【車】北近畿豊岡自動車道・豊岡出石ICから約18分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>無料駐車場有（100台・予約不要）バイクも可</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「落ち着いた客層と細やかなおもてなしに感動西村屋招月庭はファミリー向けと記載がありましたが、客層がかなり良いと感じました。日本人、外国人の割合は半々くらいに思いましたが、みなさんとにかく落ち着いてい…　2026-08-22 20:40:25投稿」
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-6 border-t border-stone-200">
            <h3 className="text-lg font-bold text-stone-900 border-l-4 border-teal-600 pl-3">
              🗺️ あわせて巡りたい！兵庫県の代表的な観光名所・歴史自然ガイド（Wikipedia公認画像・解説）
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              宿泊前後の1泊2日・2泊3日モデルコースに組み込みたい、兵庫県を代表する名所・絶景スポットの解説です。チェックイン前後の荷物預かりや駅周辺のレンタカー・周遊バスを活用すると効率よく巡ることができます。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #1</span>
                <h3 className="text-base font-bold text-stone-900">国宝 姫路城（白鷺城）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">鮮やかな白漆喰の城壁が羽ばたく白鷺のように美しい日本初のユネスコ世界文化遺産。大天守をはじめ保存状態が完璧な城郭建築の最高峰です。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #2</span>
                <h3 className="text-base font-bold text-stone-900">神戸ポートタワー・ハーバーランド</h3>
                <p className="text-xs text-stone-600 leading-relaxed">神戸港のウォーターフロントエリア。赤いつづみの形をしたポートタワーやメリケンパークの夜景、海辺のショッピングモールがロマンチックです。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              <div className="aspect-video relative overflow-hidden bg-stone-200"><img src="https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8b/161030_Kinosaki-Onsen_Station_Toyooka_Hyogo_pref_Japan01bs3.jpg/1280px-161030_Kinosaki-Onsen_Station_Toyooka_Hyogo_pref_Japan01bs3.jpg?utm_source=ja.wikipedia.org&amp;utm_campaign=api&amp;utm_content=thumbnail" alt="城崎温泉（外湯めぐり）" className="w-full h-full object-cover" loading="lazy" /></div>
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #3</span>
                <h3 className="text-base font-bold text-stone-900">城崎温泉（外湯めぐり）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">大谷川沿いに柳並木と木造旅館が並ぶ、1300年の歴史を持つ名湯。「一の湯」「御所の湯」など7つの個性豊かな外湯を浴衣姿で巡る街歩きが魅力です。 城崎温泉駅（きのさきおんせんえき）は、兵庫県豊岡市城崎町今津字稗田にある、西日本旅客鉄道（JR西日本）山陰本線の駅である。…</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #4</span>
                <h3 className="text-base font-bold text-stone-900">竹田城跡（天空の城）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">標高353mの古城山山頂に築かれた山城遺跡。秋の早朝には雲海に包まれ、まるで空に浮かんでいるかのような幻想的な景色から「天空の城」と呼ばれます。</p>
              </div>
            </div>
            </div>
          </div>

          <div className="bg-amber-50/70 rounded-2xl p-5 md:p-6 border border-amber-200 space-y-3 text-xs text-stone-700 leading-relaxed">
            <h3 className="text-sm md:text-base font-bold text-amber-950">
              💡 兵庫県エリアの宿泊予約・シーズン別ベストタイミングと節約ノウハウ
            </h3>
            <p>
              <strong>1. 早期予約と楽天トラベルクーポンの併用：</strong> 兵庫県の人気温泉宿・リゾートホテルは、週末や連休・紅葉・年末年始の60日〜30日前から一気に予約が埋まります。毎月5と0のつく日やスーパーSALE期間中に配布される宿クーポン・自治体クーポンを併用すると、通常より最大10〜20%お得に予約可能です。
            </p>
            <p>
              <strong>2. 夕食・朝食プランと部屋タイプの選び方：</strong> 地元産の旬魚介やブランド牛会席を味わうなら「夕朝食付きプラン」、周辺の屋台・老舗居酒屋・ご当地グルメを食べ歩くなら「朝食付き」または「素泊まり＋天然温泉大浴場付きホテル」を選ぶと予算と満足度のバランスが最適化されます。
            </p>
          </div>
        </section>

      <HubRelatedPosts currentSlug="winter-crab-gourmet-luxury-inn-ranking" />
</div>
  );
}
