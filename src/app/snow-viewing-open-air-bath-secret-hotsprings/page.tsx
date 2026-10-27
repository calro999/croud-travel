import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import SpecialCouponBanner from '@/app/components/SpecialCouponBanner';
import ShareButtons from '@/app/components/ShareButtons';

export const metadata: Metadata = {
  title: '白銀の世界に抱かれる至福！雪見露天風呂と濁り湯が自慢の極上秘湯宿',
  description: '乳頭温泉・万座・奥飛騨など一面の白銀世界を望む雪見露天風呂と濃厚なにごり湯が評判の秘湯旅館を徹底ガイド。冬ならではの絶景温泉ステイ。',
  keywords: ["温泉宿", "宿泊予約", "楽天トラベル", "国内旅行", "観光ガイド"],
  alternates: {
    canonical: "https://croud-travel.pages.dev/snow-viewing-open-air-bath-secret-hotsprings/",
  },
  openGraph: {
    title: '白銀の世界に抱かれる至福！雪見露天風呂と濁り湯が自慢の極上秘湯宿',
    description: '乳頭温泉・万座・奥飛騨など一面の白銀世界を望む雪見露天風呂と濃厚なにごり湯が評判の秘湯旅館を徹底ガイド。冬ならではの絶景温泉ステイ。',
    url: 'https://croud-travel.pages.dev/snow-viewing-open-air-bath-secret-hotsprings/',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "白銀の世界に抱かれる至福！雪見露天風呂と濁り湯が自慢の極上秘湯宿",
    "description": "乳頭温泉・万座・奥飛騨など一面の白銀世界を望む雪見露天風呂と濃厚なにごり湯が評判の秘湯旅館を徹底ガイド。冬ならではの絶景温泉ステイ。",
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
    "mainEntityOfPage": "https://croud-travel.pages.dev/snow-viewing-open-air-bath-secret-hotsprings/"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "雪見露天・秘湯の旅行でおすすめの予約時期やタイミングは？",
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
    "hotelNo": 3033,
    "hotelName": "万座温泉　日進舘",
    "hotelKanaName": "まんざおんせん　にっしんかん",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F3033%2F3033.html",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F3033%2F3033.html%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D3033",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D3033",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/3033/3033.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/3033.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/3033/3033_rm1.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/3033/3033map.gif",
    "reviewCount": 2516,
    "reviewAverage": 4.23,
    "userReview": "食事も温泉も最高、ジャズライブも素敵朝食、夕食ともバイキング。2年前より美味しくなってると思います。朝食の卵がすこぶる美味い。夕食の焼いてくれるカットステーキは、ちょっと硬めだけど肉の旨味があ。",
    "hotelMinCharge": 7320,
    "address1": "群馬県",
    "address2": "吾妻郡嬬恋村大字干俣万座温泉２４０１",
    "telephoneNo": "31",
    "access": "上信越自動車道碓氷軽井沢ＩＣより車で９０分。",
    "parkingInformation": "有り　１００台　無料",
    "nearestStation": "万座・鹿沢口",
    "hotelSpecial": "標高1800ｍ万座温泉の老舗宿『日進舘』＜エントリーで最大ポイント15倍！得旅キャンペーン実施中！＞",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F3033%2F3033.html"
  },
  {
    "hotelNo": 30739,
    "hotelName": "万座温泉　万座プリンスホテル",
    "hotelKanaName": "まんざおんせん　まんざ　ぷりんすほてる",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F30739%2F30739.html",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F30739%2F30739.html%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D30739",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D30739",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/30739/30739.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/30739.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/30739/30739_t1.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/30739/30739map.gif",
    "reviewCount": 2172,
    "reviewAverage": 3.79,
    "userReview": "カーテンを開けると目の前に広がる絶景南館4階の窓からのロケーションが最高でしたよ。チェックインの時は濃霧で窓の前の景色はわかりませんでしたが、朝カーテンを開けると絶景でした万座の「空吹」が目の。",
    "hotelMinCharge": 3893,
    "address1": "群馬県",
    "address2": "吾妻郡嬬恋村万座温泉",
    "telephoneNo": "11",
    "access": "北陸新幹線「軽井沢駅南口」より送迎バスあり（約９０分：要事前予約）／上信越自動車道「碓氷軽井沢IC」より約６４km",
    "parkingInformation": "有　１９０台　無料",
    "nearestStation": "万座・鹿沢口",
    "hotelSpecial": "極上にごり湯と、標高1800ｍの絶景。地元食材を取り入れたバラエティ豊かなブッフェを堪能。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F30739%2F30739.html"
  },
  {
    "hotelNo": 6267,
    "hotelName": "岸権旅館　石段街隣接　希少源泉「黄金の湯」の宿",
    "hotelKanaName": "きしごんりょかん　いしだんがいりんせつ　きしょうげんせん「おうごんのゆ」のやど",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F6267%2F6267.html",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F6267%2F6267.html%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D6267",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D6267",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/6267/6267.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/6267.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/6267/6267_ky.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/6267/6267map.gif",
    "reviewCount": 1682,
    "reviewAverage": 4.47,
    "userReview": "眺めと夕食は最高、大浴場の改装に期待一番人気の部屋でした。眺めが良く、一日見ていても飽きません。夕食は薄味で、とても美味しく、おや?って思うものはひとつもありませんでした。後は、古くなった大浴場が。",
    "hotelMinCharge": 9900,
    "address1": "群馬県",
    "address2": "渋川市伊香保町伊香保甲48",
    "telephoneNo": "05",
    "access": "関越自動車道　渋川伊香保ＩＣから車で２０分　上越線渋川駅下車バスで３０分、タクシー１５分",
    "parkingInformation": "無料駐車場150台あり。旅館専用駐車場は伊香保小学校の道向かいにあり。専用駐車場から送迎いたします。",
    "nearestStation": "渋川",
    "hotelSpecial": "露天・大浴場・貸切など全てが「黄金の湯」地産地消にこだわった創作会席と絶景が自慢の老舗旅館",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F6267%2F6267.html"
  }
];


  return (
    <div className="space-y-10 max-w-4xl mx-auto">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"ホーム","item":"https://croud-travel.pages.dev/"},{"@type":"ListItem","position":2,"name":"特集一覧","item":"https://croud-travel.pages.dev/features/"},{"@type":"ListItem","position":3,"name":"白銀の世界に抱かれる至福！雪見露天風呂と濁り湯が自慢の極上秘湯宿 ｜ 日本全国・旅宿クラウド","item":"https://croud-travel.pages.dev/snow-viewing-open-air-bath-secret-hotsprings/"}]}) }}
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
        <span className="text-emerald-950/40 line-clamp-1">雪見露天＆にごり湯秘湯</span>
      </nav>

      {/* ヒーローヘッダー */}
      <div className="border border-emerald-950/10 bg-white rounded-3xl p-6 md:p-12 shadow-sm space-y-6">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="bg-amber-100 text-amber-900 font-extrabold text-[10px] px-3 py-1 rounded-full uppercase tracking-wider">
              雪見露天・秘湯 特選ガイド
            </span>
            <span className="text-[10px] text-slate-400 font-bold">2026年最新版</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-black font-journal-serif text-emerald-950 leading-tight">白銀の世界に抱かれる至福！雪見露天風呂と濁り湯が自慢の極上秘湯宿</h1>
          <p className="text-xs md:text-sm text-emerald-950/80 leading-relaxed font-medium pt-2">
            しんしんと降り積もる雪の中、立ち上る湯けむりに包まれる雪見露天風呂は、冬の日本旅における究極の贅沢。白濁した硫黄泉やエメラルドグリーンの濁り湯に身を委ね、凛とした冷気に火照った肌を冷ましながら雪景色を眺める時間は、日常の喧騒を完全に忘れさせてくれます。
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
                        loading="eager" fetchPriority="high"
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
            title="白銀の世界に抱かれる至福！雪見露天風呂と濁り湯が自慢の極上秘湯宿"
            url="https://croud-travel.pages.dev/snow-viewing-open-air-bath-secret-hotsprings/"
          />
        </div>

        {/* よくある質問 FAQ */}
        <div className="pt-8 border-t border-emerald-950/10 space-y-4">
          <h3 className="text-lg font-bold font-journal-serif text-emerald-950 flex items-center gap-2">
            <span>❓</span>
            <span>雪見露天・秘湯に関するよくある質問</span>
          </h3>
          <div className="space-y-3 text-xs">
            <div className="p-4 rounded-xl bg-teal-50/30 border border-teal-900/10 space-y-1.5">
              <h4 className="font-bold text-teal-950">Q. 雪見露天・秘湯の予約でお得な方法はありますか？</h4>
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
              📊 白銀の世界に抱かれる至福！雪見露天風呂と濁り湯が自慢の極上秘湯宿：掲載宿スペック一覧比較表＆宿泊者クチコミ・アクセス詳細分析
            </h2>
            <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
              楽天トラベル公式APIより取得した「白銀の世界に抱かれる至福！雪見露天風呂と濁り湯が自慢の極上秘湯宿」掲載宿の所在地・最寄り駅・駐車場条件・クチコミ評価・参考最安料金を一覧で比較できます。公共交通機関（新幹線・在来線・送迎バス）利用の方もマイカー・レンタカー利用の方も、旅のスタイルに合った一軒をお選びください。
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
                <td className="p-3 font-bold text-stone-900">1. 万座温泉　日進舘</td>
                <td className="p-3 text-stone-600">群馬県吾妻郡嬬恋村大字干俣万座温泉２４０１</td>
                <td className="p-3 text-stone-600">万座・鹿沢口駅周辺</td>
                <td className="p-3 text-stone-600">有り　１００台　無料</td>
                <td className="p-3 font-bold text-amber-600">★4.22（2592件）</td>
                <td className="p-3 font-bold text-rose-600">¥5,770〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F3033%2F3033.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">2. 万座温泉　万座プリンスホテル</td>
                <td className="p-3 text-stone-600">群馬県吾妻郡嬬恋村万座温泉</td>
                <td className="p-3 text-stone-600">万座・鹿沢口駅周辺</td>
                <td className="p-3 text-stone-600">有　１９０台　無料</td>
                <td className="p-3 font-bold text-amber-600">★3.79（2232件）</td>
                <td className="p-3 font-bold text-rose-600">¥3,893〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F30739%2F30739.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">3. 岸権旅館　石段街隣接　希少源泉「黄金の湯」の宿</td>
                <td className="p-3 text-stone-600">群馬県渋川市伊香保町伊香保甲48</td>
                <td className="p-3 text-stone-600">渋川駅周辺</td>
                <td className="p-3 text-stone-600">無料駐車場150台あり。旅館専用駐車場は伊香保小学校の道向かいにあり。専用駐車場から送迎いたします。</td>
                <td className="p-3 font-bold text-amber-600">★4.44（1716件）</td>
                <td className="p-3 font-bold text-rose-600">¥13,200〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F6267%2F6267.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
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
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">万座温泉　日進舘</h3>
                  <span className="text-xs text-stone-400 ml-2">（まんざおんせん　にっしんかん）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥5,770〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/3033/3033_rm1.jpg" alt="万座温泉　日進舘 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>標高1800ｍ万座温泉の老舗宿『日進舘』＜エントリーで最大ポイント15倍！得旅キャンペーン実施中！＞</p>
                  <p><strong>【所在地・アクセス】</strong>〒 群馬県吾妻郡嬬恋村大字干俣万座温泉２４０１ ／ 最寄り駅：万座・鹿沢口 ／ 交通案内：上信越自動車道碓氷軽井沢ＩＣより車で９０分。</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　１００台　無料</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.24 ／ 立地 ★4.26 ／ 部屋 ★4.02 ／ 設備 ★3.98 ／ 風呂 ★4.58 ／ 食事 ★4.12</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「泉質は最高だが雨で露天風呂に行けず残念お風呂(泉質)最高~露天風呂が野外の離れたところにあり雨で行けなかったのが残念クチコミの詳細はこちらから　https://review.travel.…　2026-10-10 19:57:52投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #2</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">万座温泉　万座プリンスホテル</h3>
                  <span className="text-xs text-stone-400 ml-2">（まんざおんせん　まんざ　ぷりんすほてる）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥3,893〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/30739/30739_t1.jpg" alt="万座温泉　万座プリンスホテル 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>極上にごり湯と、標高1800ｍの絶景。地元食材を取り入れたバラエティ豊かなブッフェを堪能。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 群馬県吾妻郡嬬恋村万座温泉 ／ 最寄り駅：万座・鹿沢口 ／ 交通案内：北陸新幹線「軽井沢駅南口」より送迎バスあり（約９０分：要事前予約）／上信越自動車道「碓氷軽井沢IC」より約６４km</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有　１９０台　無料</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★3.83 ／ 立地 ★4.01 ／ 部屋 ★3.58 ／ 設備 ★3.53 ／ 風呂 ★4.07 ／ 食事 ★3.81</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「家族で入れる温泉とビュッフェに満足異性の家族と一緒に広い温泉に入れるのが魅力で行きました。多少の建物の古さなど気になる部分はありますが、食べ盛りの息子にはありがたいビュッフェスタイルですし、各…　2026-10-10 12:00:11投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #3</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">岸権旅館　石段街隣接　希少源泉「黄金の湯」の宿</h3>
                  <span className="text-xs text-stone-400 ml-2">（きしごんりょかん　いしだんがいりんせつ　きしょうげんせん「おうごんのゆ」のやど）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥13,200〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/6267/6267_ky.jpg" alt="岸権旅館　石段街隣接　希少源泉「黄金の湯」の宿 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>露天・大浴場・貸切など全てが「黄金の湯」地産地消にこだわった創作会席と絶景が自慢の老舗旅館</p>
                  <p><strong>【所在地・アクセス】</strong>〒 群馬県渋川市伊香保町伊香保甲48 ／ 最寄り駅：渋川 ／ 交通案内：関越自動車道　渋川伊香保ＩＣから車で２０分　上越線渋川駅下車バスで３０分、タクシー１５分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>無料駐車場150台あり。旅館専用駐車場は伊香保小学校の道向かいにあり。専用駐車場から送迎いたします。</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.44 ／ 立地 ★4.46 ／ 部屋 ★4.39 ／ 設備 ★4.27 ／ 風呂 ★4.49 ／ 食事 ★4.49</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「接客と料理は最高だがスリッパ紛失が残念伊香保温泉は仕事では来た事があったが、泊まった事が無かった為、今回妻と宿泊先を検討し石段沿いの岸権旅館さんにお世話になる事としました。宿は老舗旅館らしく建…　2026-10-10 17:18:24投稿」
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-6 border-t border-stone-200">
            <h3 className="text-lg font-bold text-stone-900 border-l-4 border-teal-600 pl-3">
              🗺️ あわせて巡りたい！群馬県の代表的な観光名所・歴史自然ガイド（Wikipedia公認画像・解説）
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              宿泊前後の1泊2日・2泊3日モデルコースに組み込みたい、群馬県を代表する名所・絶景スポットの解説です。チェックイン前後の荷物預かりや駅周辺のレンタカー・周遊バスを活用すると効率よく巡ることができます。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              <div className="aspect-video relative overflow-hidden bg-stone-200"><img src="https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6b/Yubatake_%28Kusatsu_Onsen%29.jpg/1280px-Yubatake_%28Kusatsu_Onsen%29.jpg?utm_source=ja.wikipedia.org&amp;utm_campaign=api&amp;utm_content=thumbnail" alt="草津温泉（湯畑）" className="w-full h-full object-cover" loading="lazy" /></div>
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #1</span>
                <h3 className="text-base font-bold text-stone-900">草津温泉（湯畑）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">日本三名泉の一つで自然湧出量日本一を誇る温泉街のシンボル。毎分4,000リットルの源泉が湯滝となって湧き出し、湯もみ体験や夜のライトアップも人気です。 草津温泉（くさつおんせん）は、群馬県吾妻郡草津町草津界隈（江戸時代における上野国吾妻郡草津村界隈、幕藩体制下の上州御料草津村界隈〈初期は沼田藩知行〉）に所在する温泉である。草津白根山東麓に位置する。 毎分3万2300リットル以上の自然湧出量は日本一。室町時代には万里集九が有馬温泉や下呂温泉とともに「三名泉」とし、江戸時代には林羅山もこれらの三温泉を「天下の三…</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              <div className="aspect-video relative overflow-hidden bg-stone-200"><img src="https://thumb.wikimedia.org/wikipedia/commons/thumb/8/82/Ikaho_Onsen_03.jpg/1280px-Ikaho_Onsen_03.jpg?utm_source=ja.wikipedia.org&amp;utm_campaign=api&amp;utm_content=thumbnail" alt="伊香保温泉（石段街）" className="w-full h-full object-cover" loading="lazy" /></div>
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #2</span>
                <h3 className="text-base font-bold text-stone-900">伊香保温泉（石段街）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">365段の石段が続く情緒溢れる温泉街。石段の両脇には射的場や土産物店、足湯が立ち並び、温泉まんじゅう発祥の地としても知られています。 伊香保温泉（いかほおんせん）は、群馬県渋川市伊香保町にある温泉。草津温泉と並んで県を代表する名湯で、上毛かるたでは「伊香保温泉 日本の名湯」と歌われている。 「伊香保温泉」として地域団体商標に登録されている。…</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #3</span>
                <h3 className="text-base font-bold text-stone-900">富岡製糸場</h3>
                <p className="text-xs text-stone-600 leading-relaxed">明治政府が設立した日本初の本格的な製糸工場であり、世界文化遺産。木骨レンガ造りの巨大な繰糸所や蚕室が良好に保存されており、日本の近代化の足跡を辿れます。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #4</span>
                <h3 className="text-base font-bold text-stone-900">吹割の滝（ふきわれのたき）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">「東洋のナイアガラ」と称されるダイナミックな滝。巨大な岩盤が割れ目の中に河川の水が吸い込まれるように流れ落ちる迫力ある景観が魅力です。</p>
              </div>
            </div>
            </div>
          </div>

          <div className="bg-amber-50/70 rounded-2xl p-5 md:p-6 border border-amber-200 space-y-3 text-xs text-stone-700 leading-relaxed">
            <h3 className="text-sm md:text-base font-bold text-amber-950">
              💡 群馬県エリアの宿泊予約・シーズン別ベストタイミングと節約ノウハウ
            </h3>
            <p>
              <strong>1. 早期予約と楽天トラベルクーポンの併用：</strong> 群馬県の人気温泉宿・リゾートホテルは、週末や連休・紅葉・年末年始の60日〜30日前から一気に予約が埋まります。毎月5と0のつく日やスーパーSALE期間中に配布される宿クーポン・自治体クーポンを併用すると、通常より最大10〜20%お得に予約可能です。
            </p>
            <p>
              <strong>2. 夕食・朝食プランと部屋タイプの選び方：</strong> 地元産の旬魚介やブランド牛会席を味わうなら「夕朝食付きプラン」、周辺の屋台・老舗居酒屋・ご当地グルメを食べ歩くなら「朝食付き」または「素泊まり＋天然温泉大浴場付きホテル」を選ぶと予算と満足度のバランスが最適化されます。
            </p>
          </div>
        </section>

      <HubRelatedPosts currentSlug="snow-viewing-open-air-bath-secret-hotsprings" />
</div>
  );
}
