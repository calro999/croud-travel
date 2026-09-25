import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import SpecialCouponBanner from '@/app/components/SpecialCouponBanner';
import ShareButtons from '@/app/components/ShareButtons';

export const metadata: Metadata = {
  title: 'ラウンド後は名湯で極上リフレッシュ！名門ゴルフコース併設の天然温泉リゾートホテル ｜ 日本全国・旅宿クラウド',
  description: '川奈・軽井沢・那須など富士山や雄大な自然を望むチャンピオンコースでのラウンドと、プレー後の疲れを癒やす天然温泉・サウナが揃った贅沢リゾート。',
  keywords: ["ゴルフ","温泉リゾート","ゴルフ場併設","軽井沢","那須","大人旅"],
  alternates: {
    canonical: 'https://croud-travel.pages.dev/golf-resort-natural-hotspring-luxury-stay',
  },
  openGraph: {
    title: 'ラウンド後は名湯で極上リフレッシュ！名門ゴルフコース併設の天然温泉リゾートホテル',
    description: '川奈・軽井沢・那須など富士山や雄大な自然を望むチャンピオンコースでのラウンドと、プレー後の疲れを癒やす天然温泉・サウナが揃った贅沢リゾート。',
    url: 'https://croud-travel.pages.dev/golf-resort-natural-hotspring-luxury-stay',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "ラウンド後は名湯で極上リフレッシュ！名門ゴルフコース併設の天然温泉リゾートホテル",
    "description": "川奈・軽井沢・那須など富士山や雄大な自然を望むチャンピオンコースでのラウンドと、プレー後の疲れを癒やす天然温泉・サウナが揃った贅沢リゾート。",
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
    "mainEntityOfPage": "https://croud-travel.pages.dev/golf-resort-natural-hotspring-luxury-stay"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "ゴルフ＆温泉ステイの旅行でおすすめの予約時期やタイミングは？",
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
    "hotelNo": 53749,
    "hotelName": "湯ヶ島温泉　湯ヶ島ゴルフ倶楽部＆ホテルリゾート",
    "hotelKanaName": "ゆがしまおんせん　ゆがしまごるふくらぶ　あんど　ほてるりぞーと",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D53749",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D53749%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D53749",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D53749",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/53749/53749.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/53749.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/53749/53749_k.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/53749/53749map.gif",
    "reviewCount": 202,
    "reviewAverage": 4.13,
    "userReview": "露天風呂がなくても、十分いいお風呂でゆっくりできた。料理もおいしく、肉魚両方あって、静かに眠れた。クチコミの詳細はこちらから　https://review.travel.rakuten.co.jp…　2026-06-22 17:10:07投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=53749\" class=\"3click\">つづきはこちら</a>",
    "hotelMinCharge": 4060,
    "address1": "静岡県",
    "address2": "伊豆市湯ヶ島2571-10",
    "telephoneNo": "0558-85-2100",
    "access": "伊豆箱根鉄道駿豆線：修善寺駅から送迎バス運行　約25分　(ご利用日前日までに要予約)　詳細はお電話にてお問合せください。",
    "parkingInformation": "有り　１２０台　無料",
    "nearestStation": "修善寺",
    "hotelSpecial": "自家源泉から湧き出る美肌の湯と食材の宝庫・伊豆の味覚を楽しむ『富士山を眺めながら天空ゴルフリゾート』",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F53749%2F53749.html"
  },
  {
    "hotelNo": 8631,
    "hotelName": "高山龍神温泉　自家源泉１００％かけ流し　龍リゾート＆スパ",
    "hotelKanaName": "たかやまりゅうじんおんせん　じかげんせんひゃくぱーせんとかけながし　りゅうりぞーとあんどすぱ",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D8631",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D8631%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D8631",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D8631",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/8631/8631.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/8631.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/8631/8631_room.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/8631/8631map.gif",
    "reviewCount": 1060,
    "reviewAverage": 4.2,
    "userReview": "温泉と料理、幻想的な空間で非日常を満喫温泉がすごくよかったです。温めなのでゆっくり浸かれてお肌がしっとりしました。また料理もすごく美味しく食堂から窓の外のロケーションもよく廊下も灯りが幻想的で…　2026-09-05 11:19:31投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=8631\" class=\"3click\">つづきはこちら</a>",
    "hotelMinCharge": 17600,
    "address1": "岐阜県",
    "address2": "高山市荘川町新渕892-11",
    "telephoneNo": "05769-2-2611",
    "access": "車で名古屋から約90分（東海北陸自動車道「荘川I.C」より約7分）車でJR高山駅まで約50分、白川郷まで約45分",
    "parkingInformation": "有り　100台(無料)",
    "nearestStation": "高山",
    "hotelSpecial": "≪PH9.1★奇跡の美肌の湯≫加水・循環・消毒薬一切無し！美食と自然に癒される魅惑のリゾート♪",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F8631%2F8631.html"
  },
  {
    "hotelNo": 13487,
    "hotelName": "あてま温泉　当間高原リゾート　ベルナティオ",
    "hotelKanaName": "あてまおんせん　あてまこうげんりぞーと　べるなてぃお",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D13487",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D13487%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D13487",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D13487",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/13487/13487.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/13487.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/13487/13487_fro.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/13487/13487map.gif",
    "reviewCount": 4338,
    "reviewAverage": 4.7,
    "userReview": "愛犬と広々コテージで大満足の休日初めてご利用させて頂きました。愛犬と一緒に過ごしたいなと思いコテージ利用させていただきました。十分すぎる広さでウェルカムドリンクも沢山用意してあり感動です。愛犬もと…　2026-09-19 21:05:37投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=13487\" class=\"3click\">つづきはこちら</a>",
    "hotelMinCharge": 10340,
    "address1": "新潟県",
    "address2": "十日町市珠川",
    "telephoneNo": "025-758-4888",
    "access": "【車】塩沢石打ICより約20分【新幹線】無料送迎バスにて、JR越後湯沢駅から約40分、JR十日町駅から約20分（要予約）",
    "parkingInformation": "有り　200台　無料　先着順",
    "nearestStation": "越後湯沢",
    "hotelSpecial": "9年連続アワード受賞！朝フェス2019全国1位！食事評価の高い宿全国8位！ウェルカムベビー のお宿",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F13487%2F13487.html"
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
        <span className="text-emerald-950/40 line-clamp-1">名門ゴルフ＆天然温泉リゾート</span>
      </nav>

      {/* ヒーローヘッダー */}
      <div className="border border-emerald-950/10 bg-white rounded-3xl p-6 md:p-12 shadow-sm space-y-6">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="bg-amber-100 text-amber-900 font-extrabold text-[10px] px-3 py-1 rounded-full uppercase tracking-wider">
              ゴルフ＆温泉ステイ 特選ガイド
            </span>
            <span className="text-[10px] text-slate-400 font-bold">2026年最新版</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-black font-journal-serif text-emerald-950 leading-tight">
            ラウンド後は名湯で極上リフレッシュ！名門ゴルフコース併設の天然温泉リゾートホテル
          </h1>
          <p className="text-xs md:text-sm text-emerald-950/80 leading-relaxed font-medium pt-2">
            雄大な山々や海を望む美しい名門コースで爽快にスイングした後は、クラブハウス直結の天然温泉露天風呂や本格サウナで汗を流し、極上のディナーに舌鼓。移動のストレスなくプレーと上質なリゾートステイをシームレスに満喫できる、大人のためのゴルフ温泉宿を厳選しました。
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
            title="ラウンド後は名湯で極上リフレッシュ！名門ゴルフコース併設の天然温泉リゾートホテル"
            url="https://croud-travel.pages.dev/golf-resort-natural-hotspring-luxury-stay"
          />
        </div>

        {/* よくある質問 FAQ */}
        <div className="pt-8 border-t border-emerald-950/10 space-y-4">
          <h3 className="text-lg font-bold font-journal-serif text-emerald-950 flex items-center gap-2">
            <span>❓</span>
            <span>ゴルフ＆温泉ステイに関するよくある質問</span>
          </h3>
          <div className="space-y-3 text-xs">
            <div className="p-4 rounded-xl bg-teal-50/30 border border-teal-900/10 space-y-1.5">
              <h4 className="font-bold text-teal-950">Q. ゴルフ＆温泉ステイの予約でお得な方法はありますか？</h4>
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
