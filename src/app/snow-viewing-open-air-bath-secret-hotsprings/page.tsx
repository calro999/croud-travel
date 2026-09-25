import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import SpecialCouponBanner from '@/app/components/SpecialCouponBanner';
import ShareButtons from '@/app/components/ShareButtons';

export const metadata: Metadata = {
  title: '白銀の世界に抱かれる至福！雪見露天風呂と濁り湯が自慢の極上秘湯宿 ｜ 日本全国・旅宿クラウド',
  description: '乳頭温泉・万座・奥飛騨など一面の白銀世界を望む雪見露天風呂と濃厚なにごり湯が評判の秘湯旅館を徹底ガイド。冬ならではの絶景温泉ステイ。',
  keywords: ["雪見風呂","露天風呂","秘湯","濁り湯","万座温泉","冬温泉"],
  alternates: {
    canonical: 'https://croud-travel.pages.dev/snow-viewing-open-air-bath-secret-hotsprings',
  },
  openGraph: {
    title: '白銀の世界に抱かれる至福！雪見露天風呂と濁り湯が自慢の極上秘湯宿',
    description: '乳頭温泉・万座・奥飛騨など一面の白銀世界を望む雪見露天風呂と濃厚なにごり湯が評判の秘湯旅館を徹底ガイド。冬ならではの絶景温泉ステイ。',
    url: 'https://croud-travel.pages.dev/snow-viewing-open-air-bath-secret-hotsprings',
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
    "datePublished": "2026-09-26",
    "dateModified": "2026-09-26",
    "mainEntityOfPage": "https://croud-travel.pages.dev/snow-viewing-open-air-bath-secret-hotsprings"
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
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D3033",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D3033%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D3033",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D3033",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/3033/3033.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/3033.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/3033/3033_rm1.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/3033/3033map.gif",
    "reviewCount": 2516,
    "reviewAverage": 4.23,
    "userReview": "食事も温泉も最高、ジャズライブも素敵朝食、夕食ともバイキング。2年前より美味しくなってると思います。朝食の卵がすこぶる美味い。夕食の焼いてくれるカットステーキは、ちょっと硬めだけど肉の旨味があ…　2026-09-20 02:09:44投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=3033\" class=\"3click\">つづきはこちら</a>",
    "hotelMinCharge": 7320,
    "address1": "群馬県",
    "address2": "吾妻郡嬬恋村大字干俣万座温泉２４０１",
    "telephoneNo": "0279-97-3131",
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
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D30739",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D30739%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D30739",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D30739",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/30739/30739.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/30739.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/30739/30739_t1.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/30739/30739map.gif",
    "reviewCount": 2172,
    "reviewAverage": 3.79,
    "userReview": "カーテンを開けると目の前に広がる絶景南館4階の窓からのロケーションが最高でしたよ。チェックインの時は濃霧で窓の前の景色はわかりませんでしたが、朝カーテンを開けると絶景でした万座の「空吹」が目の…　2026-09-16 22:15:42投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=30739\" class=\"3click\">つづきはこちら</a>",
    "hotelMinCharge": 3893,
    "address1": "群馬県",
    "address2": "吾妻郡嬬恋村万座温泉",
    "telephoneNo": "0279-97-1111",
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
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D6267",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D6267%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D6267",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D6267",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/6267/6267.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/6267.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/6267/6267_ky.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/6267/6267map.gif",
    "reviewCount": 1682,
    "reviewAverage": 4.47,
    "userReview": "眺めと夕食は最高、大浴場の改装に期待一番人気の部屋でした。眺めが良く、一日見ていても飽きません。夕食は薄味で、とても美味しく、おや?って思うものはひとつもありませんでした。後は、古くなった大浴場が…　2026-09-19 22:43:14投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=6267\" class=\"3click\">つづきはこちら</a>",
    "hotelMinCharge": 9900,
    "address1": "群馬県",
    "address2": "渋川市伊香保町伊香保甲48",
    "telephoneNo": "0279-72-3105",
    "access": "関越自動車道　渋川伊��保ＩＣから車で２０分　上越線渋川駅下車バスで３０分、タクシー１５分",
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
          <h1 className="text-2xl md:text-4xl font-black font-journal-serif text-emerald-950 leading-tight">
            白銀の世界に抱かれる至福！雪見露天風呂と濁り湯が自慢の極上秘湯宿
          </h1>
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
            title="白銀の世界に抱かれる至福！雪見露天風呂と濁り湯が自慢の極上秘湯宿"
            url="https://croud-travel.pages.dev/snow-viewing-open-air-bath-secret-hotsprings"
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
    </div>
  );
}
