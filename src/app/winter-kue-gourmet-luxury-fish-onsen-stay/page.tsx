import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import SpecialCouponBanner from '@/app/components/SpecialCouponBanner';
import ShareButtons from '@/app/components/ShareButtons';

export const metadata: Metadata = {
  title: '白身のトロと称される幻の高級魚！天然本クエ鍋＆クエフルコースを味わう冬の温泉宿 ｜ 日本全国・旅宿クラウド',
  description: '南紀白浜・五島列島・高知室戸など冬に旬を迎える幻の高級魚「天然クエ」。上品な脂の乗った薄造り、コラーゲンたっぷりのクエ鍋、雑炊を堪能。',
  keywords: ["クエ料理","本クエ鍋","南紀白浜","冬の味覚","幻の魚","温泉グルメ"],
  alternates: {
    canonical: 'https://croud-travel.pages.dev/winter-kue-gourmet-luxury-fish-onsen-stay',
  },
  openGraph: {
    title: '白身のトロと称される幻の高級魚！天然本クエ鍋＆クエフルコースを味わう冬の温泉宿',
    description: '南紀白浜・五島列島・高知室戸など冬に旬を迎える幻の高級魚「天然クエ」。上品な脂の乗った薄造り、コラーゲンたっぷりのクエ鍋、雑炊を堪能。',
    url: 'https://croud-travel.pages.dev/winter-kue-gourmet-luxury-fish-onsen-stay',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "白身のトロと称される幻の高級魚！天然本クエ鍋＆クエフルコースを味わう冬の温泉宿",
    "description": "南紀白浜・五島列島・高知室戸など冬に旬を迎える幻の高級魚「天然クエ」。上品な脂の乗った薄造り、コラーゲンたっぷりのクエ鍋、雑炊を堪能。",
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
    "mainEntityOfPage": "https://croud-travel.pages.dev/winter-kue-gourmet-luxury-fish-onsen-stay"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "天然クエ鍋・冬の幻グルメの旅行でおすすめの予約時期やタイミングは？",
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
    "hotelNo": 8113,
    "hotelName": "白浜温泉　民宿Ａコース",
    "hotelKanaName": "しらはまおんせん　みんしゅくえーこーす",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D8113",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D8113%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D8113",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D8113",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/8113/8113.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/8113.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/8113/8113_bath.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/8113/8113map.gif",
    "reviewCount": 1450,
    "reviewAverage": 3.93,
    "userReview": "オーナーの対応が良く、価格も手頃オーナーが感じ良いです。安いです。クチコミの詳細はこちらから　https://review.travel.rakuten.co.jp/hotel/voice…　2026-09-16 16:04:53投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=8113\" class=\"3click\">つづきはこちら</a>",
    "hotelMinCharge": 6600,
    "address1": "和歌山県",
    "address2": "西牟婁郡白浜町1091-6",
    "telephoneNo": "0739-42-3680",
    "access": "JR白浜駅よりバスで10分、旭ヶ丘下車3分。",
    "parkingInformation": "有り　30台　無料",
    "nearestStation": "白浜",
    "hotelSpecial": "旅館並みの設備を兼ね備えた民宿。シーフードが自慢。「インターネット無線スポット」ご利用いただけます",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F8113%2F8113.html"
  },
  {
    "hotelNo": 5174,
    "hotelName": "温泉めい想倶楽部　富士屋旅館",
    "hotelKanaName": "やましろおんせん　おんせんめいそうくらぶ　ふじや",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D5174",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D5174%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D5174",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D5174",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/5174/5174.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/5174.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/5174/5174_ro.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/5174/5174map.gif",
    "reviewCount": 990,
    "reviewAverage": 4.03,
    "userReview": "高校の友達と食事を楽しみ、大浴場も満喫高校の友達6人と宿泊しました。ゆっくりできて食事美味しかったです。大浴場のお湯が熱かったですが、楽しい思い出になりました。クチコミの詳細はこちらから　ht…　2026-09-08 17:07:48投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=5174\" class=\"3click\">つづきはこちら</a>",
    "hotelMinCharge": 7040,
    "address1": "石川県",
    "address2": "加賀市山代温泉桔梗ヶ丘2-121-3",
    "telephoneNo": "0761-77-1122",
    "access": "【ＪＲ】北陸本線加賀温泉駅より送迎有（１4：３０～１８：００）要事前予約／【車】北陸道加賀IC又は片山津ICより約20分",
    "parkingInformation": "有り　５０台　無料",
    "nearestStation": "加賀温泉",
    "hotelSpecial": "【料理高評価】ライブラリ・ギャラリー・無料卓球・など嬉しいがいっぱい♪◆楽天トラベルアワード受賞の宿",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F5174%2F5174.html"
  },
  {
    "hotelNo": 10994,
    "hotelName": "鎌先温泉　すヾきや旅館（すずきや）",
    "hotelKanaName": "かまさきおんせん　すずきやりょかん",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D10994",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D10994%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D10994",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D10994",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/10994/10994.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/10994.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/10994/10994_heya.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/10994/10994map.gif",
    "reviewCount": 873,
    "reviewAverage": 4.47,
    "userReview": "温泉は良いが接客や設備に不満あり口コミに食事が美味しいとあったが普通です。温泉は良かったのですが、子供には熱すぎてあまり入れませんでした。脱衣場はエアコンもほぼ効いてなくて湯上りに汗びっし…　2026-09-16 11:45:40投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=10994\" class=\"3click\">つづきはこちら</a>",
    "hotelMinCharge": 8000,
    "address1": "宮城県",
    "address2": "白石市福岡蔵本鎌先1-38",
    "telephoneNo": "0224-26-3111",
    "access": "東北新幹線白石蔵王駅より車で1５分／東北自動車道白石ＩＣより約１５分",
    "parkingInformation": "有り　30台　無料",
    "nearestStation": "白石蔵王",
    "hotelSpecial": "全プランゆったりお部屋食の人気宿♪仙台・福島・山形エリアにも好アクセス！",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F10994%2F10994.html"
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
        <span className="text-emerald-950/40 line-clamp-1">天然本クエ鍋＆幻の高級魚宿</span>
      </nav>

      {/* ヒーローヘッダー */}
      <div className="border border-emerald-950/10 bg-white rounded-3xl p-6 md:p-12 shadow-sm space-y-6">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="bg-amber-100 text-amber-900 font-extrabold text-[10px] px-3 py-1 rounded-full uppercase tracking-wider">
              天然クエ鍋・冬の幻グルメ 特選ガイド
            </span>
            <span className="text-[10px] text-slate-400 font-bold">2026年最新版</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-black font-journal-serif text-emerald-950 leading-tight">
            白身のトロと称される幻の高級魚！天然本クエ鍋＆クエフルコースを味わう冬の温泉宿
          </h1>
          <p className="text-xs md:text-sm text-emerald-950/80 leading-relaxed font-medium pt-2">
            「クエを食ったら他の魚は食えん」と食通たちを唸らせる幻の高級魚・クエ。引き締まった上品な白身と、皮と身の間に凝縮されたプルプルの濃厚なコラーゲン。熱々のクエ鍋から立ち上る芳醇な出汁と、旨味をすべて吸い込んだ締めの雑炊。冬にしか味わえない最高峰の美味旅へ。
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
            title="白身のトロと称される幻の高級魚！天然本クエ鍋＆クエフルコースを味わう冬の温泉宿"
            url="https://croud-travel.pages.dev/winter-kue-gourmet-luxury-fish-onsen-stay"
          />
        </div>

        {/* よくある質問 FAQ */}
        <div className="pt-8 border-t border-emerald-950/10 space-y-4">
          <h3 className="text-lg font-bold font-journal-serif text-emerald-950 flex items-center gap-2">
            <span>❓</span>
            <span>天然クエ鍋・冬の幻グルメに関するよくある質問</span>
          </h3>
          <div className="space-y-3 text-xs">
            <div className="p-4 rounded-xl bg-teal-50/30 border border-teal-900/10 space-y-1.5">
              <h4 className="font-bold text-teal-950">Q. 天然クエ鍋・冬の幻グルメの予約でお得な方法はありますか？</h4>
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
