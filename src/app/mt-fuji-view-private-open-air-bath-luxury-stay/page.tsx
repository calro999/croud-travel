import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import SpecialCouponBanner from '@/app/components/SpecialCouponBanner';
import ShareButtons from '@/app/components/ShareButtons';

export const metadata: Metadata = {
  title: '霊峰富士を独り占め！全室富士山ビュー＆客室専用露天風呂付き絶景リゾートホテル ｜ 日本全国・旅宿クラウド',
  description: '河口湖・山中湖・日本平・箱根芦ノ湖など客室の露天風呂やテラスから雄大な富士山を一望できるラグジュアリーホテル。赤富士や逆さ富士を望む贅沢な旅。',
  keywords: ["富士山ビュー","客室露天風呂","河口湖温泉","富士山一望","絶景リゾート","記念日旅行"],
  alternates: {
    canonical: 'https://croud-travel.pages.dev/mt-fuji-view-private-open-air-bath-luxury-stay',
  },
  openGraph: {
    title: '霊峰富士を独り占め！全室富士山ビュー＆客室専用露天風呂付き絶景リゾートホテル',
    description: '河口湖・山中湖・日本平・箱根芦ノ湖など客室の露天風呂やテラスから雄大な富士山を一望できるラグジュアリーホテル。赤富士や逆さ富士を望む贅沢な旅。',
    url: 'https://croud-travel.pages.dev/mt-fuji-view-private-open-air-bath-luxury-stay',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "霊峰富士を独り占め！全室富士山ビュー＆客室専用露天風呂付き絶景リゾートホテル",
    "description": "河口湖・山中湖・日本平・箱根芦ノ湖など客室の露天風呂やテラスから雄大な富士山を一望できるラグジュアリーホテル。赤富士や逆さ富士を望む贅沢な旅。",
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
    "mainEntityOfPage": "https://croud-travel.pages.dev/mt-fuji-view-private-open-air-bath-luxury-stay"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "富士山ビュー・絶景露天風呂の旅行でおすすめの予約時期やタイミングは？",
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
    "hotelNo": 2946,
    "hotelName": "富士河口湖温泉　富士山の見える温泉旅館　大池ホテル",
    "hotelKanaName": "ふじかわぐちこおんせん　ふじさんのみえるおんせんりょかん　おおいけほてる",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D2946",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D2946%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D2946",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D2946",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/2946/2946.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/2946.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/2946/2946_wa.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/2946/2946map.gif",
    "reviewCount": 5559,
    "reviewAverage": 4.35,
    "userReview": "子供が気に入る充実のサービスと朝食山梨旅行では、こちらを必ず利用します。理由は子供達が、とても気に入ってるからです。1ウェルカムドリンクが、充実している。・ジュースや茶菓子があり、とて…　2026-09-18 08:03:45投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=2946\" class=\"3click\">つづきはこちら</a>",
    "hotelMinCharge": 13000,
    "address1": "山梨県",
    "address2": "南都留郡富士河口湖町船津6713-103",
    "telephoneNo": "0555-72-2563",
    "access": "駅から無料送迎有■駐車場無料■河口湖駅から車で4分■富士急から車で7分河口湖ICから車で12分新宿駅からバスで約120分",
    "parkingInformation": "無料駐車場50台・河口湖駅からの無料送迎有・バイク専用の駐車場無・富士急ハイランドまで車で7分",
    "nearestStation": "河口湖",
    "hotelSpecial": "山梨 富士山 河口湖 露天風呂 温泉 バイキング ブッフェ 温泉　貸切露天風呂",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F2946%2F2946.html"
  },
  {
    "hotelNo": 19206,
    "hotelName": "庭園と感動の宿　富士山温泉　ホテル鐘山苑",
    "hotelKanaName": "ていえんとかんどうのやど　ふじさんおんせん　ほてるかねやまえん",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D19206",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D19206%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D19206",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D19206",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/19206/19206.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/19206.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/19206/19206_bath.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/19206/19206map.gif",
    "reviewCount": 1138,
    "reviewAverage": 4.7,
    "userReview": "天気が悪くても庭や室内が綺麗でとても快適天気はあまりよくありませんでしたが室内や大きな庭がきれいに維持されており気持ちよく過ごすことができました。夜の手品ショーや太鼓の演舞なども良かったで…　2026-09-13 10:28:14投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=19206\" class=\"3click\">つづきはこちら</a>",
    "hotelMinCharge": 22000,
    "address1": "山梨県",
    "address2": "富士吉田市上吉田東9-1-18",
    "telephoneNo": "0555-22-3168",
    "access": "富士急行線富士山駅より１３時～１８時の間無料送迎あり／車８分／駅到着時にお電話下さい／翌日のお送りは８：００より３０分毎",
    "parkingInformation": "有り　5００台　無料",
    "nearestStation": "富士吉田",
    "hotelSpecial": "富士山の見える絶景露天風呂！【２０２４年プロが選んだ旅館１００選・全国総合８位】",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F19206%2F19206.html"
  },
  {
    "hotelNo": 68084,
    "hotelName": "富士山石和温泉郷　春日居びゅーほてる",
    "hotelKanaName": "ふじさんいさおんせんきょう　かすがいびゅーほてる",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D68084",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D68084%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D68084",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D68084",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/68084/68084.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/68084.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/68084/68084_w.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/68084/68084map.gif",
    "reviewCount": 1261,
    "reviewAverage": 3.98,
    "userReview": "泉質抜群の温泉とカニ料理に大満足部屋はコメント欄に有るようにビジネスホテルの様な感じお風呂は、泉質がとても良い肌がツルツル感がします。夕食のカニも甘く美味しかった。バイキングもまあまあ…　2026-09-09 12:51:30投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=68084\" class=\"3click\">つづきはこちら</a>",
    "hotelMinCharge": 8250,
    "address1": "山梨県",
    "address2": "笛吹市春日居町鎮目178",
    "telephoneNo": "0553-26-3811",
    "access": "JR中央本線 石和温泉駅より車で5分／中央自動車道 一宮御坂ICより車で10分／中央高速バス 石和バス停より車で5分",
    "parkingInformation": "有り 100台 無料 予約不要",
    "nearestStation": "石和温泉",
    "hotelSpecial": "カニ食べ放題！充実のバイキング！姉妹館への無料湯めぐりで温泉三昧！館内は無線LAN対応。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F68084%2F68084.html"
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
        <span className="text-emerald-950/40 line-clamp-1">富士山ビュー客室露天風呂宿</span>
      </nav>

      {/* ヒーローヘッダー */}
      <div className="border border-emerald-950/10 bg-white rounded-3xl p-6 md:p-12 shadow-sm space-y-6">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="bg-amber-100 text-amber-900 font-extrabold text-[10px] px-3 py-1 rounded-full uppercase tracking-wider">
              富士山ビュー・絶景露天風呂 特選ガイド
            </span>
            <span className="text-[10px] text-slate-400 font-bold">2026年最新版</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-black font-journal-serif text-emerald-950 leading-tight">
            霊峰富士を独り占め！全室富士山ビュー＆客室専用露天風呂付き絶景リゾートホテル
          </h1>
          <p className="text-xs md:text-sm text-emerald-950/80 leading-relaxed font-medium pt-2">
            朝日に照らされて紅く染まる「赤富士」、夕暮れ時のシルエット、そして夜空に浮かび上がる神秘的な霊峰。誰の視線も気にすることなく、お部屋の専用露天風呂に浸かりながら富士山を眺める時間は、まさに日本が世界に誇る至高のリゾート体験です。
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
            title="霊峰富士を独り占め！全室富士山ビュー＆客室専用露天風呂付き絶景リゾートホテル"
            url="https://croud-travel.pages.dev/mt-fuji-view-private-open-air-bath-luxury-stay"
          />
        </div>

        {/* よくある質問 FAQ */}
        <div className="pt-8 border-t border-emerald-950/10 space-y-4">
          <h3 className="text-lg font-bold font-journal-serif text-emerald-950 flex items-center gap-2">
            <span>❓</span>
            <span>富士山ビュー・絶景露天風呂に関するよくある質問</span>
          </h3>
          <div className="space-y-3 text-xs">
            <div className="p-4 rounded-xl bg-teal-50/30 border border-teal-900/10 space-y-1.5">
              <h4 className="font-bold text-teal-950">Q. 富士山ビュー・絶景露天風呂の予約でお得な方法はありますか？</h4>
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
