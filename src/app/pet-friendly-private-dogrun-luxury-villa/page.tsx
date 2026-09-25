import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import SpecialCouponBanner from '@/app/components/SpecialCouponBanner';
import ShareButtons from '@/app/components/ShareButtons';

export const metadata: Metadata = {
  title: '愛犬とずっと一緒！プライベートドッグラン＆客室天然温泉付き高級リゾートヴィラ ｜ 日本全国・旅宿クラウド',
  description: '伊豆高原・那須・軽井沢など愛犬とベッドや食事も一緒に過ごせる贅沢ヴィラ。完全プライベートドッグラン、足洗い場、客室専用温泉風呂を完備。',
  keywords: ["ペットと泊まれる宿","犬連れ旅行","プライベートドッグラン","伊豆高原","那須高原","客室露天風呂"],
  alternates: {
    canonical: 'https://croud-travel.pages.dev/pet-friendly-private-dogrun-luxury-villa',
  },
  openGraph: {
    title: '愛犬とずっと一緒！プライベートドッグラン＆客室天然温泉付き高級リゾートヴィラ',
    description: '伊豆高原・那須・軽井沢など愛犬とベッドや食事も一緒に過ごせる贅沢ヴィラ。完全プライベートドッグラン、足洗い場、客室専用温泉風呂を完備。',
    url: 'https://croud-travel.pages.dev/pet-friendly-private-dogrun-luxury-villa',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "愛犬とずっと一緒！プライベートドッグラン＆客室天然温泉付き高級リゾートヴィラ",
    "description": "伊豆高原・那須・軽井沢など愛犬とベッドや食事も一緒に過ごせる贅沢ヴィラ。完全プライベートドッグラン、足洗い場、客室専用温泉風呂を完備。",
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
    "mainEntityOfPage": "https://croud-travel.pages.dev/pet-friendly-private-dogrun-luxury-villa"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "ペット・愛犬同伴旅の旅行でおすすめの予約時期やタイミングは？",
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
    "hotelNo": 14737,
    "hotelName": "別邸　石の家　伊豆高原　ペットと泊まれる全室露天付き客室の宿",
    "hotelKanaName": "べってい　いしのいえ　いずこうげん　ぺっとととまれるぜんしつろてんつききゃくしつのやど",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D14737",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D14737%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D14737",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D14737",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/14737/14737.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/14737.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/14737/14737_room.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/14737/14737map.gif",
    "reviewCount": 1061,
    "reviewAverage": 4.75,
    "userReview": "お料理と露天風呂に癒やされ愛犬も大満足初めて2泊で宿泊しましたスタッフの方に大変お世話なり、まったりと過ごさせていただきました。お料理が美味しいですまた行きたいです愛犬もスタッフさんに遊んで欲…　2026-09-19 17:37:25投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=14737\" class=\"3click\">つづきはこちら</a>",
    "hotelMinCharge": 16200,
    "address1": "静岡県",
    "address2": "伊東市大室高原6-650",
    "telephoneNo": "0557-51-8716",
    "access": "小田原厚木道路石橋ＩＣ・東名沼津ＩＣより約９０分／伊豆急・伊豆高原駅よりタクシーで５分",
    "parkingInformation": "部屋数分、全て無料となっております。",
    "nearestStation": "伊豆高原",
    "hotelSpecial": "全室お部屋食対応のペットと泊まれるホテル。全室露天風呂付客室。ペット料1頭目無料。犬以外も幅広く歓迎",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F14737%2F14737.html"
  },
  {
    "hotelNo": 107823,
    "hotelName": "ペットと泊まれる貸切天然温泉の宿　マーフィ",
    "hotelKanaName": "ぺっとととまれるかしきりてんねんおんせんのやど　まーふぃ",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D107823",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D107823%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D107823",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D107823",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/107823/107823.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/107823.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/107823/107823_rm1.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/107823/107823map.gif",
    "reviewCount": 576,
    "reviewAverage": 4.84,
    "userReview": "伊豆牛と金目鯛に舌鼓、露天風呂で癒やされる伊豆牛のすき焼きと金目鯛のしゃぶしゃぶ、お刺身がとても美味しいです。でも一番のお気に入りは、露天風呂です。設備はいつもビカビカで、柔らかいお湯に浸かりなが…　2026-09-14 10:45:34投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=107823\" class=\"3click\">つづきはこちら</a>",
    "hotelMinCharge": 18150,
    "address1": "静岡県",
    "address2": "伊東市赤沢258-87",
    "telephoneNo": "0557-54-1882",
    "access": "伊豆高原駅からお車で約１０分 別荘地入口に関係者以外進入禁止とありますがそのままお入りください",
    "parkingInformation": "有り　6台　無料　予約不要",
    "nearestStation": "伊豆高原",
    "hotelSpecial": "海を望み、緑に囲まれた温泉宿で、愛犬とゆったりした時間をお過ごし下さい。地魚や手作り和食でおもてなし",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F107823%2F107823.html"
  },
  {
    "hotelNo": 190439,
    "hotelName": "ペット連れもＯＫの宿一棟貸し貸別荘　アニマーレ　ｉｎ　伊豆高原　＾",
    "hotelKanaName": "",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D190439",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D190439%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D190439",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D190439",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/190439/190439.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/190439.jpg",
    "roomImageUrl": "",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/190439/190439map.gif",
    "reviewCount": 1,
    "reviewAverage": 0,
    "userReview": "",
    "hotelMinCharge": 0,
    "address1": "静岡県",
    "address2": "伊東市富戸1317-3921　ペット連れもＯＫの一棟貸し貸別荘　アニマーレ　ｉｎ　伊豆高原",
    "telephoneNo": "0288-53-6300",
    "access": "城ヶ崎海岸駅から徒歩で約７分",
    "parkingInformation": "有り",
    "nearestStation": "城ヶ崎海岸",
    "hotelSpecial": "　",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F190439%2F190439.html"
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
        <span className="text-emerald-950/40 line-clamp-1">愛犬同伴・ドッグラン付きヴィラ</span>
      </nav>

      {/* ヒーローヘッダー */}
      <div className="border border-emerald-950/10 bg-white rounded-3xl p-6 md:p-12 shadow-sm space-y-6">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="bg-amber-100 text-amber-900 font-extrabold text-[10px] px-3 py-1 rounded-full uppercase tracking-wider">
              ペット・愛犬同伴旅 特選ガイド
            </span>
            <span className="text-[10px] text-slate-400 font-bold">2026年最新版</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-black font-journal-serif text-emerald-950 leading-tight">
            愛犬とずっと一緒！プライベートドッグラン＆客室天然温泉付き高級リゾートヴィラ
          </h1>
          <p className="text-xs md:text-sm text-emerald-950/80 leading-relaxed font-medium pt-2">
            大切な家族の一員である愛犬と一緒に、気兼ねなく最高のリゾートステイを。芝生が広がる専用のプライベートドッグランで思いっきり駆け回り、テラスで愛犬を眺めながら客室露天風呂を満喫。愛犬用アメニティや特製メニューも充実した、愛犬家絶賛の宿をラインナップしました。
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
            title="愛犬とずっと一緒！プライベートドッグラン＆客室天然温泉付き高級リゾートヴィラ"
            url="https://croud-travel.pages.dev/pet-friendly-private-dogrun-luxury-villa"
          />
        </div>

        {/* よくある質問 FAQ */}
        <div className="pt-8 border-t border-emerald-950/10 space-y-4">
          <h3 className="text-lg font-bold font-journal-serif text-emerald-950 flex items-center gap-2">
            <span>❓</span>
            <span>ペット・愛犬同伴旅に関するよくある質問</span>
          </h3>
          <div className="space-y-3 text-xs">
            <div className="p-4 rounded-xl bg-teal-50/30 border border-teal-900/10 space-y-1.5">
              <h4 className="font-bold text-teal-950">Q. ペット・愛犬同伴旅の予約でお得な方法はありますか？</h4>
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
