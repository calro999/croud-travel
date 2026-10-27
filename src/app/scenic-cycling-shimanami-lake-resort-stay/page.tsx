import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import SpecialCouponBanner from '@/app/components/SpecialCouponBanner';
import ShareButtons from '@/app/components/ShareButtons';

export const metadata: Metadata = {
  title: '青い海と島々を渡る風になれ！しまなみ海道・ビワイチ絶景サイクリスト温泉リゾート',
  description: 'しまなみ海道や琵琶湖を走るサイクリスト必見。自転車の部屋持ち込み対応、メンテナンススペース完備、ライド後の疲れを癒やすオーシャンビュー温泉。',
  keywords: ["温泉宿", "宿泊予約", "楽天トラベル", "国内旅行", "観光ガイド"],
  alternates: {
    canonical: "https://croud-travel.pages.dev/scenic-cycling-shimanami-lake-resort-stay/",
  },
  openGraph: {
    title: '青い海と島々を渡る風になれ！しまなみ海道・ビワイチ絶景サイクリスト温泉リゾート',
    description: 'しまなみ海道や琵琶湖を走るサイクリスト必見。自転車の部屋持ち込み対応、メンテナンススペース完備、ライド後の疲れを癒やすオーシャンビュー温泉。',
    url: 'https://croud-travel.pages.dev/scenic-cycling-shimanami-lake-resort-stay/',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "青い海と島々を渡る風になれ！しまなみ海道・ビワイチ絶景サイクリスト温泉リゾート",
    "description": "しまなみ海道や琵琶湖を走るサイクリスト必見。自転車の部屋持ち込み対応、メンテナンススペース完備、ライド後の疲れを癒やすオーシャンビュー温泉。",
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
    "mainEntityOfPage": "https://croud-travel.pages.dev/scenic-cycling-shimanami-lake-resort-stay/"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "絶景サイクリング・アクティブ旅の旅行でおすすめの予約時期やタイミングは？",
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
    "hotelNo": 470,
    "hotelName": "尾道国際ホテル",
    "hotelKanaName": "おのみち　こくさいほてる",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F470%2F470.html",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F470%2F470.html%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D470",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D470",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/470/470.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/470.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/470/470_yk.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/470/470map.gif",
    "reviewCount": 832,
    "reviewAverage": 4.01,
    "userReview": "尾道ナンバーワンの接客と質の高いサービス安心の尾道国際ホテル。尾道ナンバーワンホテルとの称号に相応しくどの従業員の対応も素晴らしい。今回は食べなかったが食事の質も高い。またお伺いします。",
    "hotelMinCharge": 4800,
    "address1": "広島県",
    "address2": "尾道市新浜1-13-6",
    "telephoneNo": "31",
    "access": "JR尾道駅より車で3分。尾道駅から送迎可（要オンライン予約）／山陽道尾道・福山西の各ICより20分",
    "parkingInformation": "有り／駐車料金無料（チェックイン日15:00～翌11:00）／先着順／大型車は有料で要予約",
    "nearestStation": "尾道",
    "hotelSpecial": "【広島食べんさい店グランプリ受賞】尾道駅から無料送迎＆無料駐車場あり！コンビニ徒歩1分で便利",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F470%2F470.html"
  },
  {
    "hotelNo": 4612,
    "hotelName": "尾道第一ホテル",
    "hotelKanaName": "おのみち　だいいちほてる",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F4612%2F4612.html",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F4612%2F4612.html%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D4612",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D4612",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/4612/4612.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/4612.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/4612/4612_heya.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/4612/4612map.gif",
    "reviewCount": 915,
    "reviewAverage": 3.78,
    "userReview": "立地が良く館内禁煙で快適、また利用したい【まとめ】やや古いが、いたって普通のビジネスホテル。立地の良さが魅力的で、尾道滞在時はまた利用するかも?【部屋・清潔さ】古さを考えると綺。",
    "hotelMinCharge": 5225,
    "address1": "広島県",
    "address2": "尾道市西御所町4-7",
    "telephoneNo": "67",
    "access": "ＪＲ尾道駅より徒歩３分、新尾道駅より車で７分。",
    "parkingInformation": "無料駐車場有り　３０台。　※トラックや大型バスなどは有料。（要事前相談）",
    "nearestStation": "尾道",
    "hotelSpecial": "【尾道駅から徒歩3分】◆無料駐車場◆しまなみ海道観光＆サイクリングの拠点に＜尾道水道を望む客室あり＞",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F4612%2F4612.html"
  },
  {
    "hotelNo": 4766,
    "hotelName": "尾道ロイヤルホテル",
    "hotelKanaName": "おのみち　ろいやるほてる",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F4766%2F4766.html",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F4766%2F4766.html%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D4766",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D4766",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/4766/4766.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/4766.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/4766/4766_heya.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/4766/4766map.gif",
    "reviewCount": 808,
    "reviewAverage": 4,
    "userReview": "ロケーション抜群でサービスも丁寧ロケーションが抜群。サービスも丁寧で好感が持てました。また利用させてもらいます。",
    "hotelMinCharge": 5200,
    "address1": "広島県",
    "address2": "尾道市土堂2-9-27",
    "telephoneNo": "11",
    "access": "◆JR尾道駅から徒歩で約10分◆JR新尾道駅から車で約10分◆広島空港からバス⇒在来線⇒徒歩で約1時間",
    "parkingInformation": "あり16台／先着順／予約不可／大型車不可",
    "nearestStation": "尾道",
    "hotelSpecial": "眼下に尾道水道を望み観光歓楽の拠点に最適。桜の名所、千光寺公園行きロープウェイ乗り場まで徒歩５分",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F4766%2F4766.html"
  }
];


  return (
    <div className="space-y-10 max-w-4xl mx-auto">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"ホーム","item":"https://croud-travel.pages.dev/"},{"@type":"ListItem","position":2,"name":"特集一覧","item":"https://croud-travel.pages.dev/features/"},{"@type":"ListItem","position":3,"name":"青い海と島々を渡る風になれ！しまなみ海道・ビワイチ絶景サイクリスト温泉リゾート ｜ 日本全国・旅宿クラウド","item":"https://croud-travel.pages.dev/scenic-cycling-shimanami-lake-resort-stay/"}]}) }}
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
        <span className="text-emerald-950/40 line-clamp-1">しまなみ＆ビワイチ絶景サイクリング宿</span>
      </nav>

      {/* ヒーローヘッダー */}
      <div className="border border-emerald-950/10 bg-white rounded-3xl p-6 md:p-12 shadow-sm space-y-6">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="bg-amber-100 text-amber-900 font-extrabold text-[10px] px-3 py-1 rounded-full uppercase tracking-wider">
              絶景サイクリング・アクティブ旅 特選ガイド
            </span>
            <span className="text-[10px] text-slate-400 font-bold">2026年最新版</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-black font-journal-serif text-emerald-950 leading-tight">青い海と島々を渡る風になれ！しまなみ海道・ビワイチ絶景サイクリスト温泉リゾート</h1>
          <p className="text-xs md:text-sm text-emerald-950/80 leading-relaxed font-medium pt-2">
            瀬戸内海の多島美を望む橋の上を、爽快な潮風を浴びながら駆け抜けるしまなみ海道サイクリング。愛車をお部屋まで持ち込める専用バイクラックや安心の整備スペース、そしてライド後の筋肉をほぐす展望露天風呂。アクティブな旅を最高のホスピタリティで支える宿をご紹介します。
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
            title="青い海と島々を渡る風になれ！しまなみ海道・ビワイチ絶景サイクリスト温泉リゾート"
            url="https://croud-travel.pages.dev/scenic-cycling-shimanami-lake-resort-stay/"
          />
        </div>

        {/* よくある質問 FAQ */}
        <div className="pt-8 border-t border-emerald-950/10 space-y-4">
          <h3 className="text-lg font-bold font-journal-serif text-emerald-950 flex items-center gap-2">
            <span>❓</span>
            <span>絶景サイクリング・アクティブ旅に関するよくある質問</span>
          </h3>
          <div className="space-y-3 text-xs">
            <div className="p-4 rounded-xl bg-teal-50/30 border border-teal-900/10 space-y-1.5">
              <h4 className="font-bold text-teal-950">Q. 絶景サイクリング・アクティブ旅の予約でお得な方法はありますか？</h4>
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
              📊 青い海と島々を渡る風になれ！しまなみ海道・ビワイチ絶景サイクリスト温泉リゾート：掲載宿スペック一覧比較表＆宿泊者クチコミ・アクセス詳細分析
            </h2>
            <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
              楽天トラベル公式APIより取得した「青い海と島々を渡る風になれ！しまなみ海道・ビワイチ絶景サイクリスト温泉リゾート」掲載宿の所在地・最寄り駅・駐車場条件・クチコミ評価・参考最安料金を一覧で比較できます。公共交通機関（新幹線・在来線・送迎バス）利用の方もマイカー・レンタカー利用の方も、旅のスタイルに合った一軒をお選びください。
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
                <td className="p-3 font-bold text-stone-900">1. 尾道国際ホテル</td>
                <td className="p-3 text-stone-600">広島県尾道市新浜1-13-6</td>
                <td className="p-3 text-stone-600">尾道駅周辺</td>
                <td className="p-3 text-stone-600">有り／駐車料金無料（チェックイン日15:00～翌11:00）／先着順／大型車は有料で要予約</td>
                <td className="p-3 font-bold text-amber-600">★3.99（827件）</td>
                <td className="p-3 font-bold text-rose-600">¥4,800〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F470%2F470.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">2. 尾道第一ホテル</td>
                <td className="p-3 text-stone-600">広島県尾道市西御所町4-7</td>
                <td className="p-3 text-stone-600">尾道駅周辺</td>
                <td className="p-3 text-stone-600">無料駐車場有り　３０台。　※トラックや大型バスなどは有料。（要事前相談）</td>
                <td className="p-3 font-bold text-amber-600">★3.73（901件）</td>
                <td className="p-3 font-bold text-rose-600">¥4,963〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F4612%2F4612.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">3. 尾道ロイヤルホテル</td>
                <td className="p-3 text-stone-600">広島県尾道市土堂2-9-27</td>
                <td className="p-3 text-stone-600">尾道駅周辺</td>
                <td className="p-3 text-stone-600">あり16台／先着順／予約不可／大型車不可</td>
                <td className="p-3 font-bold text-amber-600">★3.98（819件）</td>
                <td className="p-3 font-bold text-rose-600">¥5,200〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F4766%2F4766.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
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
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">尾道国際ホテル</h3>
                  <span className="text-xs text-stone-400 ml-2">（おのみち　こくさいほてる）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥4,800〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/470/470_yk.jpg" alt="尾道国際ホテル 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>【広島食べんさい店グランプリ受賞】尾道駅から無料送迎＆無料駐車場あり！コンビニ徒歩1分で便利</p>
                  <p><strong>【所在地・アクセス】</strong>〒 広島県尾道市新浜1-13-6 ／ 最寄り駅：尾道 ／ 交通案内：JR尾道駅より車で3分。尾道駅から送迎可（要オンライン予約）／山陽道尾道・福山西の各ICより20分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り／駐車料金無料（チェックイン日15:00～翌11:00）／先着順／大型車は有料で要予約</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「サービスがとてもよかったです。お部屋も広くて大満足です。大浴場は無いですが、近くの温泉施設に無料で送迎してもらえるのが非常にありがたかったです。しかも入浴のチケットもフロントで購入すれば割引もありタオ…　2026-08-16 11:55:04投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #2</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">尾道第一ホテル</h3>
                  <span className="text-xs text-stone-400 ml-2">（おのみち　だいいちほてる）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥4,963〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/4612/4612_heya.jpg" alt="尾道第一ホテル 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>【尾道駅から徒歩3分】◆無料駐車場◆しまなみ海道観光＆サイクリングの拠点に＜尾道水道を望む客室あり＞</p>
                  <p><strong>【所在地・アクセス】</strong>〒 広島県尾道市西御所町4-7 ／ 最寄り駅：尾道 ／ 交通案内：ＪＲ尾道駅より徒歩３分、新尾道駅より車で７分。</p>
                  <p><strong>【駐車場・マイカー利用】</strong>無料駐車場有り　３０台。　※トラックや大型バスなどは有料。（要事前相談）</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「清潔感があり中心部へも徒歩圏内で大満足綺麗で中心部まで徒歩圏内とロケーションも適度で非常に満足でした。クチコミの詳細はこちらから　https://review.travel.rakuten.c…　2026-08-14 09:05:24投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #3</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">尾道ロイヤルホテル</h3>
                  <span className="text-xs text-stone-400 ml-2">（おのみち　ろいやるほてる）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥5,200〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/4766/4766_heya.jpg" alt="尾道ロイヤルホテル 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>眼下に尾道水道を望み観光歓楽の拠点に最適。桜の名所、千光寺公園行きロープウェイ乗り場まで徒歩５分</p>
                  <p><strong>【所在地・アクセス】</strong>〒 広島県尾道市土堂2-9-27 ／ 最寄り駅：尾道 ／ 交通案内：◆JR尾道駅から徒歩で約10分◆JR新尾道駅から車で約10分◆広島空港からバス⇒在来線⇒徒歩で約1時間</p>
                  <p><strong>【駐車場・マイカー利用】</strong>あり16台／先着順／予約不可／大型車不可</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.2 ／ 立地 ★4.26 ／ 部屋 ★3.88 ／ 設備 ★3.89 ／ 風呂 ★3.67 ／ 食事 ★4.47</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「9階ラウンジからの景色が素晴らしかった9階ラウンジからの景色は素晴らしかったですクチコミの詳細はこちらから　https://review.travel.rakuten.co.jp/hotel/…　2026-10-09 16:49:43投稿」
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-6 border-t border-stone-200">
            <h3 className="text-lg font-bold text-stone-900 border-l-4 border-teal-600 pl-3">
              🗺️ あわせて巡りたい！広島県の代表的な観光名所・歴史自然ガイド（Wikipedia公認画像・解説）
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              宿泊前後の1泊2日・2泊3日モデルコースに組み込みたい、広島県を代表する名所・絶景スポットの解説です。チェックイン前後の荷物預かりや駅周辺のレンタカー・周遊バスを活用すると効率よく巡ることができます。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              <div className="aspect-video relative overflow-hidden bg-stone-200"><img src="https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d1/Miyajima_From_The_Ferry_%2830093845%29.jpeg/1280px-Miyajima_From_The_Ferry_%2830093845%29.jpeg?utm_source=ja.wikipedia.org&amp;utm_campaign=api&amp;utm_content=thumbnail" alt="厳島神社（宮島）" className="w-full h-full object-cover" loading="lazy" /></div>
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #1</span>
                <h3 className="text-base font-bold text-stone-900">厳島神社（宮島）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">世界文化遺産に登録された安芸の宮島。海上に浮かぶ鮮やかな朱塗りの大鳥居と社殿は潮の満ち引きで表情を変え、日本三景に相応しい神秘の美しさです。 厳島（いつくしま）は、広島県廿日市市宮島町にある島。瀬戸内海西部、広島湾の北西部に位置する。通称は安芸の宮島（あきのみやじま）、または宮島。かつて島全体が佐伯郡宮島町と一致していたが、2005年（平成17年）に廿日市市と合併した。 古代より、島そのものが自然崇拝の対象であったと考えられる。平安時代末期以降は、厳島神社の影響力の強さや海上交通の拠点としての重要…</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #2</span>
                <h3 className="text-base font-bold text-stone-900">原爆ドーム・平和記念公園</h3>
                <p className="text-xs text-stone-600 leading-relaxed">世界へ恒久平和を訴え続ける負の遺産・世界文化遺産。元産業奨励館の被爆した姿が今も残され、平和記念資料館には世界中から多くの人が訪れます。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #3</span>
                <h3 className="text-base font-bold text-stone-900">尾道（千光寺公園）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">坂と猫と映画の街として愛される港町。千光寺山の山頂からロープウェイで登れば、尾道水道と造船所、瀬戸内海の島々を一望するノスタルジックな風景が広がります。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #4</span>
                <h3 className="text-base font-bold text-stone-900">呉・大和ミュージアム</h3>
                <p className="text-xs text-stone-600 leading-relaxed">かつて東洋一の軍港・造船の街として栄えた呉の歴史を伝える博物館。館内中央に鎮座する10分の1スケールの戦艦「大和」の精巧な復元モデルは圧巻です。</p>
              </div>
            </div>
            </div>
          </div>

          <div className="bg-amber-50/70 rounded-2xl p-5 md:p-6 border border-amber-200 space-y-3 text-xs text-stone-700 leading-relaxed">
            <h3 className="text-sm md:text-base font-bold text-amber-950">
              💡 広島県エリアの宿泊予約・シーズン別ベストタイミングと節約ノウハウ
            </h3>
            <p>
              <strong>1. 早期予約と楽天トラベルクーポンの併用：</strong> 広島県の人気温泉宿・リゾートホテルは、週末や連休・紅葉・年末年始の60日〜30日前から一気に予約が埋まります。毎月5と0のつく日やスーパーSALE期間中に配布される宿クーポン・自治体クーポンを併用すると、通常より最大10〜20%お得に予約可能です。
            </p>
            <p>
              <strong>2. 夕食・朝食プランと部屋タイプの選び方：</strong> 地元産の旬魚介やブランド牛会席を味わうなら「夕朝食付きプラン」、周辺の屋台・老舗居酒屋・ご当地グルメを食べ歩くなら「朝食付き」または「素泊まり＋天然温泉大浴場付きホテル」を選ぶと予算と満足度のバランスが最適化されます。
            </p>
          </div>
        </section>

      <HubRelatedPosts currentSlug="scenic-cycling-shimanami-lake-resort-stay" />
</div>
  );
}
