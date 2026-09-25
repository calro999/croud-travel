import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import SpecialCouponBanner from '@/app/components/SpecialCouponBanner';
import ShareButtons from '@/app/components/ShareButtons';

export const metadata: Metadata = {
  title: '雪道運転の心配なし！新幹線駅から直結・徒歩圏内のスキー＆天然温泉スノーリゾート ｜ 日本全国・旅宿クラウド',
  description: '越後湯沢や軽井沢など東京から新幹線1本、駅から直結や徒歩圏内でアクセス抜群のスキー＆温泉ホテル。ノーマルタイヤや運転不要で冬の白銀世界を満喫。',
  keywords: ["新幹線アクセス","越後湯沢","スキー","スノーボード","駅直結","雪見温泉"],
  alternates: {
    canonical: 'https://croud-travel.pages.dev/shinkansen-station-direct-ski-onsen-resorts',
  },
  openGraph: {
    title: '雪道運転の心配なし！新幹線駅から直結・徒歩圏内のスキー＆天然温泉スノーリゾート',
    description: '越後湯沢や軽井沢など東京から新幹線1本、駅から直結や徒歩圏内でアクセス抜群のスキー＆温泉ホテル。ノーマルタイヤや運転不要で冬の白銀世界を満喫。',
    url: 'https://croud-travel.pages.dev/shinkansen-station-direct-ski-onsen-resorts',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "雪道運転の心配なし！新幹線駅から直結・徒歩圏内のスキー＆天然温泉スノーリゾート",
    "description": "越後湯沢や軽井沢など東京から新幹線1本、駅から直結や徒歩圏内でアクセス抜群のスキー＆温泉ホテル。ノーマルタイヤや運転不要で冬の白銀世界を満喫。",
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
    "mainEntityOfPage": "https://croud-travel.pages.dev/shinkansen-station-direct-ski-onsen-resorts"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "車なし・新幹線アクセスの旅行でおすすめの予約時期やタイミングは？",
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
    "hotelNo": 5735,
    "hotelName": "越後湯沢温泉　音羽屋旅館",
    "hotelKanaName": "えちごゆざわおんせん　おとわやりょかん",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D5735",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D5735%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D5735",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D5735",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/5735/5735.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/5735.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/5735/5735_war.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/5735/5735map.gif",
    "reviewCount": 695,
    "reviewAverage": 4.13,
    "userReview": "24時間入れる温泉最高2回目の訪問です。今回は素泊まりプランで湯沢の食べ歩きを楽しみました!のんびり出来ました。またお仕事頑張れそうです。ありがとうございました。クチコミの詳細…　2026-09-07 12:56:09投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=5735\" class=\"3click\">つづきはこちら</a>",
    "hotelMinCharge": 5500,
    "address1": "新潟県",
    "address2": "南魚沼郡湯沢町湯沢419",
    "telephoneNo": "0257-84-3412",
    "access": "JR上越新幹線、越後湯沢駅西口より徒歩７分。関越自動車道、越後湯沢ＩＣより、越後湯沢駅方面に向かって約6分。駐車場完備。",
    "parkingInformation": "有り　15台　無料",
    "nearestStation": "越後湯沢",
    "hotelSpecial": "温泉街中央高台にあり、料理自慢・風呂自慢のこじんまりとした純和風宿",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F5735%2F5735.html"
  },
  {
    "hotelNo": 16403,
    "hotelName": "舞子温泉　飯士の湯　舞子高原ホテル",
    "hotelKanaName": "まいここうげんほてる",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D16403",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D16403%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D16403",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D16403",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/16403/16403.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/16403.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/16403/16403_twn.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/16403/16403map.gif",
    "reviewCount": 1509,
    "reviewAverage": 4.43,
    "userReview": "料理が美味しくアメニティの心遣いも素敵口コミが良かったのでお料理を楽しみにしていました。ご飯が美味しくローストビーフも柔らかくて美味しいです。全種類を少しずつ食べてバイキングを楽しみました。ク…　2026-09-13 17:07:15投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=16403\" class=\"3click\">つづきはこちら</a>",
    "hotelMinCharge": 8800,
    "address1": "新潟県",
    "address2": "南魚沼市舞子2056-108",
    "telephoneNo": "025-783-3511",
    "access": "関越自動車道「塩沢石打IC」より直進1km、約2分！越後湯沢駅からは無料シャトルバスで約20分(春～秋は予約制)",
    "parkingInformation": "有り　100台　宿泊者専用（無料）",
    "nearestStation": "越後湯沢",
    "hotelSpecial": "夏休みの早期予約がオススメ！！ホテル館内で宝探し、謎解きも開催中！",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F16403%2F16403.html"
  },
  {
    "hotelNo": 7518,
    "hotelName": "湯沢温泉（自家源泉）　ＨＯＴＥＬシャーレゆざわ銀水",
    "hotelKanaName": "しゃーれゆざわ　ぎんすい",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D7518",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D7518%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D7518",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D7518",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/7518/7518.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/7518.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/7518/7518_com.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/7518/7518map.gif",
    "reviewCount": 342,
    "reviewAverage": 4.15,
    "userReview": "フロントの対応が丁寧で好印象フロントの対応が良かったです。クチコミの詳細はこちらから　https://review.travel.rakuten.co.jp/hotel/voice/7518?…　2026-09-10 21:38:43投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=7518\" class=\"3click\">つづきはこちら</a>",
    "hotelMinCharge": 3980,
    "address1": "新潟県",
    "address2": "南魚沼郡湯沢町大字土樽6301-7",
    "telephoneNo": "025-787-4141",
    "access": "関越道 湯沢ＩＣから１．５km。ＪＲ越後湯沢から２．５km、送迎有り。",
    "parkingInformation": "有り：１００台（無料・予約制）",
    "nearestStation": "越後湯沢",
    "hotelSpecial": "岩原ゲレンデまで徒歩1分！四季折々の大自然×自家源泉×美食★新潟のお米・お酒・魚介を堪能。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F7518%2F7518.html"
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
        <span className="text-emerald-950/40 line-clamp-1">新幹線駅直結スキー温泉</span>
      </nav>

      {/* ヒーローヘッダー */}
      <div className="border border-emerald-950/10 bg-white rounded-3xl p-6 md:p-12 shadow-sm space-y-6">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="bg-amber-100 text-amber-900 font-extrabold text-[10px] px-3 py-1 rounded-full uppercase tracking-wider">
              車なし・新幹線アクセス 特選ガイド
            </span>
            <span className="text-[10px] text-slate-400 font-bold">2026年最新版</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-black font-journal-serif text-emerald-950 leading-tight">
            雪道運転の心配なし！新幹線駅から直結・徒歩圏内のスキー＆天然温泉スノーリゾート
          </h1>
          <p className="text-xs md:text-sm text-emerald-950/80 leading-relaxed font-medium pt-2">
            冬の雪道運転が不安な方でも、東京駅から上越新幹線や北陸新幹線で1時間〜1時間半。駅から直結、あるいは無料送迎ですぐにゲレンデと天然温泉にアクセスできる宿なら、重い荷物やレンタカーのチェーン着脱に悩まされることなく、スマートに冬のリゾートステイを楽しめます。
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
            title="雪道運転の心配なし！新幹線駅から直結・徒歩圏内のスキー＆天然温泉スノーリゾート"
            url="https://croud-travel.pages.dev/shinkansen-station-direct-ski-onsen-resorts"
          />
        </div>

        {/* よくある質問 FAQ */}
        <div className="pt-8 border-t border-emerald-950/10 space-y-4">
          <h3 className="text-lg font-bold font-journal-serif text-emerald-950 flex items-center gap-2">
            <span>❓</span>
            <span>車なし・新幹線アクセスに関するよくある質問</span>
          </h3>
          <div className="space-y-3 text-xs">
            <div className="p-4 rounded-xl bg-teal-50/30 border border-teal-900/10 space-y-1.5">
              <h4 className="font-bold text-teal-950">Q. 車なし・新幹線アクセスの予約でお得な方法はありますか？</h4>
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
