import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import SpecialCouponBanner from '@/app/components/SpecialCouponBanner';
import ShareButtons from '@/app/components/ShareButtons';

export const metadata: Metadata = {
  title: '海から昇る初日の出を客室から望む！年末年始・お正月に行きたい絶景オーシャンビュー宿 ｜ 日本全国・旅宿クラウド',
  description: '伊豆・房総・沖縄の水平線から昇る朝日を一望できる絶景リゾート。客室露天風呂やお部屋から初日の出を拝む、新年の幕開けにふさわしい贅沢宿を厳選。',
  keywords: ["初日の出","オーシャンビュー","客室露天風呂","伊豆","正月旅行","リゾート"],
  alternates: {
    canonical: 'https://croud-travel.pages.dev/new-year-sunrise-ocean-view-resorts',
  },
  openGraph: {
    title: '海から昇る初日の出を客室から望む！年末年始・お正月に行きたい絶景オーシャンビュー宿',
    description: '伊豆・房総・沖縄の水平線から昇る朝日を一望できる絶景リゾート。客室露天風呂やお部屋から初日の出を拝む、新年の幕開けにふさわしい贅沢宿を厳選。',
    url: 'https://croud-travel.pages.dev/new-year-sunrise-ocean-view-resorts',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "海から昇る初日の出を客室から望む！年末年始・お正月に行きたい絶景オーシャンビュー宿",
    "description": "伊豆・房総・沖縄の水平線から昇る朝日を一望できる絶景リゾート。客室露天風呂やお部屋から初日の出を拝む、新年の幕開けにふさわしい贅沢宿を厳選。",
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
    "mainEntityOfPage": "https://croud-travel.pages.dev/new-year-sunrise-ocean-view-resorts"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "年末年始・初日の出の旅行でおすすめの予約時期やタイミングは？",
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
    "hotelNo": 28426,
    "hotelName": "全室スイート＆オーシャンビュー　ヴィラージュ伊豆高原",
    "hotelKanaName": "ぜんしつすいーとあんどおーしゃんびゅー　う゛ぃらーじゅ　いずこうげん",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D28426",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D28426%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D28426",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D28426",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/28426/28426.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/28426.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/28426/28426_room.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/28426/28426map.gif",
    "reviewCount": 1405,
    "reviewAverage": 4.51,
    "userReview": "眺望と部屋は最高、食事は持ち込みも楽しそう夕食バイキングはステーキや天ぷらのライブビュッフェがありました。ステーキは少々固めです。お刺身もたくさんありました。お酒もいろいろありましたが、別料金です…　2026-09-17 22:52:54投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=28426\" class=\"3click\">つづきはこちら</a>",
    "hotelMinCharge": 5150,
    "address1": "静岡県",
    "address2": "伊東市富戸1317-8",
    "telephoneNo": "0557-51-7355",
    "access": "【電車】伊豆高原駅より無料送迎アリ：要予約　【お車】東京方面からのお客様＝石橋IC　近畿方面からのお客様＝天城高原IC",
    "parkingInformation": "【無料】屋外駐車場完備。予約不要。大型車・バスは事前にお知らせください。",
    "nearestStation": "伊豆高原",
    "hotelSpecial": "＼全室78㎡～オーシャンビュースイート！／ 露天風呂やプール等館内アクティビティも充実♪",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F28426%2F28426.html"
  },
  {
    "hotelNo": 29100,
    "hotelName": "伊豆高原温泉　海望む露天風呂付客室　夢海月(ゆめみづき)",
    "hotelKanaName": "いずこうげんおんせん うみの��むろてんぶろつききゃくしつ ゆめみづき（ゆめみづ",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D29100",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D29100%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D29100",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D29100",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/29100/29100.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/29100.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/29100/29100_wa.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/29100/29100map.gif",
    "reviewCount": 533,
    "reviewAverage": 4.38,
    "userReview": "宿に泊まる為に伊東を訪れたいフロントの無料かき氷が良かったです。新鮮な地元の食材を使った朝食はボリュームがあって味も安めの部屋にしましたが、十分広くて綺麗で快適でした。空気清浄機だけで…　2026-09-05 22:12:54投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=29100\" class=\"3click\">つづきはこちら</a>",
    "hotelMinCharge": 11500,
    "address1": "静岡県",
    "address2": "伊東市大室高原10丁目348",
    "telephoneNo": "0557-51-2772",
    "access": "車：東名高速厚木IC・沼津ＩＣより約100分／電車：伊豆急行線伊豆高原駅～シャボテン公園行・理想郷バス停～歩2分",
    "parkingInformation": "無料7台（ご予約不要）",
    "nearestStation": "伊豆高原",
    "hotelSpecial": "伊豆高原温泉のモダン旅館 ・海望む露天風呂付客室と個室で楽しむ伊豆金目鯛懐石・ニッポニア高原宿夢海月",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F29100%2F29100.html"
  },
  {
    "hotelNo": 38120,
    "hotelName": "伊豆北川温泉　お祝いの宿　吉祥ＣＡＲＥＮ",
    "hotelKanaName": "きっしょうかれん",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D38120",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D38120%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D38120",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D38120",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/38120/38120.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/38120.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/38120/38120_wa.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/38120/38120map.gif",
    "reviewCount": 553,
    "reviewAverage": 4.59,
    "userReview": "記念日の特典と展望風呂、日の出に大満足チェックイン時にはスタッフの対応も親切かつスピーディで大変良かったです。結婚記念日で展望風呂付の部屋で予約したので特典がいろいろあり大満足でした。天気もよく9…　2026-09-14 10:02:59投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=38120\" class=\"3click\">つづきはこちら</a>",
    "hotelMinCharge": 26500,
    "address1": "静岡県",
    "address2": "賀茂郡東伊豆町奈良本1130-1",
    "telephoneNo": "0557-23-5005",
    "access": "伊豆熱川駅より送迎有り（13:30～16:00）",
    "parkingInformation": "有り　２０台　無料　先着順",
    "nearestStation": "伊豆北川",
    "hotelSpecial": "大自然の中のかけ流し天然温泉と極上のスパトリートメントにフレンチ懐石。身体と心に安らぎのご褒美を。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F38120%2F38120.html"
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
        <span className="text-emerald-950/40 line-clamp-1">初日の出・海一望リゾート</span>
      </nav>

      {/* ヒーローヘッダー */}
      <div className="border border-emerald-950/10 bg-white rounded-3xl p-6 md:p-12 shadow-sm space-y-6">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="bg-amber-100 text-amber-900 font-extrabold text-[10px] px-3 py-1 rounded-full uppercase tracking-wider">
              年末年始・初日の出 特選ガイド
            </span>
            <span className="text-[10px] text-slate-400 font-bold">2026年最新版</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-black font-journal-serif text-emerald-950 leading-tight">
            海から昇る初日の出を客室から望む！年末年始・お正月に行きたい絶景オーシャンビュー宿
          </h1>
          <p className="text-xs md:text-sm text-emerald-950/80 leading-relaxed font-medium pt-2">
            太平洋の水平線が黄金色に染まり、ゆっくりと昇りゆく太陽の光が水面を照らす瞬間。お部屋のテラスや専用露天風呂に浸かりながら初日の出を迎える体験は、新しい一年のスタートを清々しく特別なものにしてくれます。海と空が溶け合うパノラマビュー自慢の宿をセレクトしました。
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
            title="海から昇る初日の出を客室から望む！年末年始・お正月に行きたい絶景オーシャンビュー宿"
            url="https://croud-travel.pages.dev/new-year-sunrise-ocean-view-resorts"
          />
        </div>

        {/* よくある質問 FAQ */}
        <div className="pt-8 border-t border-emerald-950/10 space-y-4">
          <h3 className="text-lg font-bold font-journal-serif text-emerald-950 flex items-center gap-2">
            <span>❓</span>
            <span>年末年始・初日の出に関するよくある質問</span>
          </h3>
          <div className="space-y-3 text-xs">
            <div className="p-4 rounded-xl bg-teal-50/30 border border-teal-900/10 space-y-1.5">
              <h4 className="font-bold text-teal-950">Q. 年末年始・初日の出の予約でお得な方法はありますか？</h4>
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
