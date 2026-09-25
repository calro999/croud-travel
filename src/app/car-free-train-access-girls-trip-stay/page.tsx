import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import SpecialCouponBanner from '@/app/components/SpecialCouponBanner';
import ShareButtons from '@/app/components/ShareButtons';

export const metadata: Metadata = {
  title: '新幹線・特急駅から徒歩ですぐ！車なし・電車アクセス抜群の駅近名湯＆女子旅ホテル ｜ 日本全国・旅宿クラウド',
  description: '金沢・松本・仙台・別府など主要駅から徒歩数分や無料送迎でアクセス至便な温泉宿。レンタカーなしでも周辺の観光名所やグルメスポットを身軽に満喫。',
  keywords: ["車なし旅行","駅近ホテル","女子旅","電車旅","新幹線アクセス","手ぶら観光"],
  alternates: {
    canonical: 'https://croud-travel.pages.dev/car-free-train-access-girls-trip-stay',
  },
  openGraph: {
    title: '新幹線・特急駅から徒歩ですぐ！車なし・電車アクセス抜群の駅近名湯＆女子旅ホテル',
    description: '金沢・松本・仙台・別府など主要駅から徒歩数分や無料送迎でアクセス至便な温泉宿。レンタカーなしでも周辺の観光名所やグルメスポットを身軽に満喫。',
    url: 'https://croud-travel.pages.dev/car-free-train-access-girls-trip-stay',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "新幹線・特急駅から徒歩ですぐ！車なし・電車アクセス抜群の駅近名湯＆女子旅ホテル",
    "description": "金沢・松本・仙台・別府など主要駅から徒歩数分や無料送迎でアクセス至便な温泉宿。レンタカーなしでも周辺の観光名所やグルメスポットを身軽に満喫。",
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
    "mainEntityOfPage": "https://croud-travel.pages.dev/car-free-train-access-girls-trip-stay"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "車なし・駅近アクセス旅の旅行でおすすめの予約時期やタイミングは？",
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
    "hotelNo": 191668,
    "hotelName": "スーパーホテル仙台駅東口天然温泉",
    "hotelKanaName": "すーぱーほてるせんだいえきひがしぐちてんねんおんせん",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D191668",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D191668%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D191668",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D191668",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/191668/191668.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/191668.jpg",
    "roomImageUrl": "",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/191668/191668map.gif",
    "reviewCount": 1074,
    "reviewAverage": 4.48,
    "userReview": "機能的な部屋と最高の温泉、仙台らしい朝食部屋は狭いですが機能的で無駄がなくよかったです。温泉が最高に気持ち良く体に良さそうです。朝食は種類は少ないけど 仙台らしいものが複数あり 焼きたてパンも美味…　2026-09-19 11:40:40投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=191668\" class=\"3click\">つづきはこちら</a>",
    "hotelMinCharge": 5320,
    "address1": "宮城県",
    "address2": "仙台市宮城野区名掛丁203-12",
    "telephoneNo": "022-204-9001",
    "access": "仙台駅東口より徒歩で約５分/北部名掛丁自由通路」を通り出口を出てから徒歩2分/高速バス「仙台駅前」のりばから徒歩5分",
    "parkingInformation": "無し（近隣コインパーキングをご利用ください）",
    "nearestStation": "仙台",
    "hotelSpecial": "【仙台駅徒歩5分の好立地】天然温泉◆無料健康朝食とウェルカムバー◆ぐっすり眠れるホテル◆全館禁煙",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F191668%2F191668.html"
  },
  {
    "hotelNo": 50750,
    "hotelName": "天然温泉プレミアホテル―ＣＡＢＩＮ―旭川",
    "hotelKanaName": "てんねんおんせんぷれみあほてる　きゃびん　あさひかわ",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D50750",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D50750%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D50750",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D50750",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/50750/50750.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/50750.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/50750/50750_twi.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/50750/50750map.gif",
    "reviewCount": 5272,
    "reviewAverage": 4.22,
    "userReview": "旭川でゆっくり、お風呂と朝食が最高初めての旭川。2泊。ゆっくり楽しめました。風呂、朝食が、ポイント高いですクチコミの詳細はこちらから　https://review.travel.rakuten…　2026-09-19 12:11:49投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=50750\" class=\"3click\">つづきはこちら</a>",
    "hotelMinCharge": 2688,
    "address1": "北海道",
    "address2": "旭川市1条通7丁目",
    "telephoneNo": "0166-73-7430",
    "access": "ＪＲ旭川駅『北口(西側)』より徒歩３分",
    "parkingInformation": "先着順800円~1,100円車種により異なります。満車時とワゴン、バイクは徒歩圏内の提携先へご案内。",
    "nearestStation": "旭川",
    "hotelSpecial": "旭川駅徒歩3分！天然温泉とサウナが人気！展望レストランでの朝食ブッフェをお楽しみください",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F50750%2F50750.html"
  },
  {
    "hotelNo": 168794,
    "hotelName": "変なホテル大阪　なんば",
    "hotelKanaName": "へんなほてるおおさか　なんば",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D168794",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D168794%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D168794",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D168794",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/168794/168794.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/168794.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/168794/168794_kan1.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/168794/168794map.gif",
    "reviewCount": 736,
    "reviewAverage": 4.06,
    "userReview": "駅近で恐竜が可愛く、お風呂とトイレが別で快適近鉄難波駅や道頓堀も近く、恐竜のお出迎えが可愛くてまた行きたくなりました何よりお風呂とトイレが分かれているのが良かったです。クチコミの詳細はこちらか…　2026-09-16 16:31:29投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=168794\" class=\"3click\">つづきはこちら</a>",
    "hotelMinCharge": 4050,
    "address1": "大阪府",
    "address2": "大阪市中央区西心斎橋2-10-16",
    "telephoneNo": "050-5576-8355",
    "access": "大阪メトロ心斎橋駅8番出口より徒歩6分／なんば駅25番出口より徒歩6分／近鉄難波駅より徒歩9分 好立地で評価◎",
    "parkingInformation": "近隣のコインパーキングをご利用下さいませ。",
    "nearestStation": "心斎橋",
    "hotelSpecial": "バス・トイレ別☆USJ・京セラドーム・大阪城へ好アクセス！非対面型の恐竜チェックインが好評♪",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F168794%2F168794.html"
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
        <span className="text-emerald-950/40 line-clamp-1">車なし・駅近アクセス女子旅宿</span>
      </nav>

      {/* ヒーローヘッダー */}
      <div className="border border-emerald-950/10 bg-white rounded-3xl p-6 md:p-12 shadow-sm space-y-6">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="bg-amber-100 text-amber-900 font-extrabold text-[10px] px-3 py-1 rounded-full uppercase tracking-wider">
              車なし・駅近アクセス旅 特選ガイド
            </span>
            <span className="text-[10px] text-slate-400 font-bold">2026年最新版</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-black font-journal-serif text-emerald-950 leading-tight">
            新幹線・特急駅から徒歩ですぐ！車なし・電車アクセス抜群の駅近名湯＆女子旅ホテル
          </h1>
          <p className="text-xs md:text-sm text-emerald-950/80 leading-relaxed font-medium pt-2">
            運転免許がない方や、慣れない土地での雪道・長距離運転を避けたい方に最適な「駅チカ名宿」。新幹線や特急を降りてチェックインしたら、すぐに荷物を預けて身軽に城下町散策やご当地カフェめぐりへ。夜は天然温泉とおしゃれなラウンジで寛ぐ、スマートな電車旅をお届けします。
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
            title="新幹線・特急駅から徒歩ですぐ！車なし・電車アクセス抜群の駅近名湯＆女子旅ホテル"
            url="https://croud-travel.pages.dev/car-free-train-access-girls-trip-stay"
          />
        </div>

        {/* よくある質問 FAQ */}
        <div className="pt-8 border-t border-emerald-950/10 space-y-4">
          <h3 className="text-lg font-bold font-journal-serif text-emerald-950 flex items-center gap-2">
            <span>❓</span>
            <span>車なし・駅近アクセス旅に関するよくある質問</span>
          </h3>
          <div className="space-y-3 text-xs">
            <div className="p-4 rounded-xl bg-teal-50/30 border border-teal-900/10 space-y-1.5">
              <h4 className="font-bold text-teal-950">Q. 車なし・駅近アクセス旅の予約でお得な方法はありますか？</h4>
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
