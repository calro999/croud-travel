import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import SpecialCouponBanner from '@/app/components/SpecialCouponBanner';
import ShareButtons from '@/app/components/ShareButtons';

export const metadata: Metadata = {
  title: '海と空に溶け込む究極の開放感！全国の絶景インフィニティ露天風呂名門宿 ｜ 日本全国・旅宿クラウド',
  description: '熱海・南紀白浜・赤穂・指宿など湯船と水平線が一体化するインフィニティ温泉。波音を聞きながら海風に包まれる、一生に一度は訪れたい極上リゾート。',
  keywords: ["インフィニティ温泉","絶景露天風呂","オーシャンビュー","熱海温泉","南紀白浜","海一望"],
  alternates: {
    canonical: 'https://croud-travel.pages.dev/infinity-ocean-onsen-panoramic-luxury-stay',
  },
  openGraph: {
    title: '海と空に溶け込む究極の開放感！全国の絶景インフィニティ露天風呂名門宿',
    description: '熱海・南紀白浜・赤穂・指宿など湯船と水平線が一体化するインフィニティ温泉。波音を聞きながら海風に包まれる、一生に一度は訪れたい極上リゾート。',
    url: 'https://croud-travel.pages.dev/infinity-ocean-onsen-panoramic-luxury-stay',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "海と空に溶け込む究極の開放感！全国の絶景インフィニティ露天風呂名門宿",
    "description": "熱海・南紀白浜・赤穂・指宿など湯船と水平線が一体化するインフィニティ温泉。波音を聞きながら海風に包まれる、一生に一度は訪れたい極上リゾート。",
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
    "mainEntityOfPage": "https://croud-travel.pages.dev/infinity-ocean-onsen-panoramic-luxury-stay"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "インフィニティ温泉・絶景宿の旅行でおすすめの予約時期やタイミングは？",
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
    "hotelNo": 49347,
    "hotelName": "指宿温泉　夫婦露天風呂の宿　吟松（ぎんしょう）",
    "hotelKanaName": "いぶすきおんせん　ふうふろてんぶろのやど　ぎんしょう",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D49347",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D49347%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D49347",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D49347",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/49347/49347.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/49347.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/49347/49347_wa.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/49347/49347map.gif",
    "reviewCount": 1565,
    "reviewAverage": 4.63,
    "userReview": "接客は最高だが朝食の海鮮には期待外れホスピタリティはさすが!という感じだった。ただ、朝ごはんが少し期待外れだった。温泉宿に来たなら旨い海鮮を朝から食べたいと思ってしまいました。クチコミの詳…　2026-09-16 20:07:39投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=49347\" class=\"3click\">つづきはこちら</a>",
    "hotelMinCharge": 13200,
    "address1": "鹿児島県",
    "address2": "指宿市湯の浜5-26-29",
    "telephoneNo": "0993-22-2217",
    "access": "車やレンタカー：カーナビに0993-22-3231をご設定下さい　タクシー：ＪＲ指宿駅から４分　",
    "parkingInformation": "有り　５０台　無料　予約不要",
    "nearestStation": "指宿",
    "hotelSpecial": "≪2025年9月に新客室がリニューアルオープン≫天空野天風呂から錦江湾を一望。砂むし会館「砂楽」隣",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F49347%2F49347.html"
  },
  {
    "hotelNo": 40498,
    "hotelName": "犬吠埼潮の湯温泉　犬吠埼観光ホテル",
    "hotelKanaName": "いぬぼうざき　うしおのゆおんせん　いぬぼうざき　かんこうほてる",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D40498",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D40498%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D40498",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D40498",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/40498/40498.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/40498.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/40498/40498_he.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/40498/40498map.gif",
    "reviewCount": 626,
    "reviewAverage": 4.29,
    "userReview": "灯台の光と海を望む絶景、温泉と食事に大満足部屋から望める灯台の光はとてもよかったです。食事の広間でも海、灯台が見れて銚子を満喫できました。夜、朝食もボリュームがあり満足です。何より温泉はとてもよか…　2026-09-16 08:45:13投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=40498\" class=\"3click\">つづきはこちら</a>",
    "hotelMinCharge": 13750,
    "address1": "千葉県",
    "address2": "銚子市犬吠埼10293",
    "telephoneNo": "0479-23-5111",
    "access": "銚子電鉄　犬吠駅より車で３分　犬吠駅よりお電話にて送迎承ります。銚子駅より車で15分",
    "parkingInformation": "有り　８０台　無料　先着順",
    "nearestStation": "犬吠",
    "hotelSpecial": "全室オーシャンビュー！まるで海と繋がるかのような露天風呂？！◆温泉宿ホテル総選挙´２１犬吠埼地区１位",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F40498%2F40498.html"
  },
  {
    "hotelNo": 40685,
    "hotelName": "湯の川温泉　湯の浜ホテル",
    "hotelKanaName": "ゆのはまほてる",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D40685",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D40685%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D40685",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D40685",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/40685/40685.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/40685.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/40685/40685_gr.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/40685/40685map.gif",
    "reviewCount": 1403,
    "reviewAverage": 4.11,
    "userReview": "温泉の質は良いが、座布団の下に大量のホコリ温泉の質は良いけど、部屋の座布団移動させたら、ヤバい量のホコリが溜まってた。クチコミの詳細はこちらから　https://review.travel.r…　2026-09-18 12:45:05投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=40685\" class=\"3click\">つづきはこちら</a>",
    "hotelMinCharge": 5500,
    "address1": "北海道",
    "address2": "函館市湯川町1-2-30",
    "telephoneNo": "0138-59-2231",
    "access": "JR函館駅から車で約12分・市電で約30分／函館空港から車で約5分・バスで約15分",
    "parkingInformation": "無料駐車場50台有り／ホテル前は先着順(20台)",
    "nearestStation": "函館",
    "hotelSpecial": "2種類の温泉をお楽しみ頂けます。展望風呂付客室もございます。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F40685%2F40685.html"
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
        <span className="text-emerald-950/40 line-clamp-1">インフィニティ露天風呂名宿</span>
      </nav>

      {/* ヒーローヘッダー */}
      <div className="border border-emerald-950/10 bg-white rounded-3xl p-6 md:p-12 shadow-sm space-y-6">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="bg-amber-100 text-amber-900 font-extrabold text-[10px] px-3 py-1 rounded-full uppercase tracking-wider">
              インフィニティ温泉・絶景宿 特選ガイド
            </span>
            <span className="text-[10px] text-slate-400 font-bold">2026年最新版</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-black font-journal-serif text-emerald-950 leading-tight">
            海と空に溶け込む究極の開放感！全国の絶景インフィニティ露天風呂名門宿
          </h1>
          <p className="text-xs md:text-sm text-emerald-950/80 leading-relaxed font-medium pt-2">
            湯船の縁が見えず、まるでどこまでも広がる大海原にそのまま浮かんでいるかのような錯覚を覚えるインフィニティ露天風呂。朝日に輝く波光、夕暮れに茜色に染まる海空のマジックアワー、そして満月の夜に海面に現れる月光の道「月の階段」。圧巻の絶景と名湯が織りなす極上ステイを厳選しました。
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
            title="海と空に溶け込む究極の開放感！全国の絶景インフィニティ露天風呂名門宿"
            url="https://croud-travel.pages.dev/infinity-ocean-onsen-panoramic-luxury-stay"
          />
        </div>

        {/* よくある質問 FAQ */}
        <div className="pt-8 border-t border-emerald-950/10 space-y-4">
          <h3 className="text-lg font-bold font-journal-serif text-emerald-950 flex items-center gap-2">
            <span>❓</span>
            <span>インフィニティ温泉・絶景宿に関するよくある質問</span>
          </h3>
          <div className="space-y-3 text-xs">
            <div className="p-4 rounded-xl bg-teal-50/30 border border-teal-900/10 space-y-1.5">
              <h4 className="font-bold text-teal-950">Q. インフィニティ温泉・絶景宿の予約でお得な方法はありますか？</h4>
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
