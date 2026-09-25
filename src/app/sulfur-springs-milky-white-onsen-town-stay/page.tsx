import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import SpecialCouponBanner from '@/app/components/SpecialCouponBanner';
import ShareButtons from '@/app/components/ShareButtons';

export const metadata: Metadata = {
  title: '立ち上る湯けむりと濃密な硫黄の香り！乳白色のにごり湯と風情ある温泉街めぐりの宿 ｜ 日本全国・旅宿クラウド',
  description: '草津・蔵王・野沢温泉・別府明礬など、湯の花が舞うエメラルドグリーンや乳白色の硫黄泉。浴衣と下駄で温泉街の湯めぐりや足湯散策を楽しむ名湯宿。',
  keywords: ["にごり湯","乳白色温泉","硫黄泉","草津温泉","蔵王温泉","湯めぐり"],
  alternates: {
    canonical: 'https://croud-travel.pages.dev/sulfur-springs-milky-white-onsen-town-stay',
  },
  openGraph: {
    title: '立ち上る湯けむりと濃密な硫黄の香り！乳白色のにごり湯と風情ある温泉街めぐりの宿',
    description: '草津・蔵王・野沢温泉・別府明礬など、湯の花が舞うエメラルドグリーンや乳白色の硫黄泉。浴衣と下駄で温泉街の湯めぐりや足湯散策を楽しむ名湯宿。',
    url: 'https://croud-travel.pages.dev/sulfur-springs-milky-white-onsen-town-stay',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "立ち上る湯けむりと濃密な硫黄の香り！乳白色のにごり湯と風情ある温泉街めぐりの宿",
    "description": "草津・蔵王・野沢温泉・別府明礬など、湯の花が舞うエメラルドグリーンや乳白色の硫黄泉。浴衣と下駄で温泉街の湯めぐりや足湯散策を楽しむ名湯宿。",
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
    "mainEntityOfPage": "https://croud-travel.pages.dev/sulfur-springs-milky-white-onsen-town-stay"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "にごり湯・温泉街散策の旅行でおすすめの予約時期やタイミングは？",
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
    "hotelNo": 106120,
    "hotelName": "秘湯にごり湯の宿　渓雲閣",
    "hotelKanaName": "ひとうにごりゆのやど　けいうんかく",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D106120",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D106120%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D106120",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D106120",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/106120/106120.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/106120.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/106120/106120_spa.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/106120/106120map.gif",
    "reviewCount": 398,
    "reviewAverage": 4.39,
    "userReview": "0歳児連れでも満喫設備まだ歩けない0歳3人連れて伺いました。荷物もたくさんありましたがとても親切にしていただきました。食事が部屋食で助かりました。旅館なので当然ベビーカーは玄関まで、階段のみです。…　2026-09-05 17:58:57投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=106120\" class=\"3click\">つづきはこちら</a>",
    "hotelMinCharge": 13612,
    "address1": "栃木県",
    "address2": "那須塩原市湯本塩原37",
    "telephoneNo": "0287-32-2361",
    "access": "ＪＲ　那須塩原駅より路線バスにて69分「塩原温泉バスターミナル」下車後定時送迎有（要予約）",
    "parkingInformation": "有り　２０台　無料　予約不要",
    "nearestStation": "那須塩原",
    "hotelSpecial": "硫黄の香り漂う秘湯にごり湯！展望風呂や無料の貸切露天風呂からの四季絶景！食事お部屋出し料理も絶品！",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F106120%2F106120.html"
  },
  {
    "hotelNo": 5650,
    "hotelName": "塩原温泉　やまの宿　下藤屋",
    "hotelKanaName": "しおばらあらゆおんせん　やまのやど　しもふじや",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D5650",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D5650%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D5650",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D5650",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/5650/5650.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/5650.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/5650/5650_bath.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/5650/5650map.gif",
    "reviewCount": 1259,
    "reviewAverage": 4.6,
    "userReview": "露天風呂の泉質だけが少し残念全てOKでしたと言いたいけれど、露天風呂だけ温泉の泉質が違い残念でした。露天風呂も硫黄泉だったら星五つ!クチコミの詳細はこちらから　https://revi…　2026-09-13 08:02:25投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=5650\" class=\"3click\">つづきはこちら</a>",
    "hotelMinCharge": 17575,
    "address1": "栃木県",
    "address2": "那須塩原市湯本塩原11",
    "telephoneNo": "0287-31-1111",
    "access": "東北自動車道　西那須野塩原I.Cより35分。東北新幹線那須塩原より路線バス55分終点下車。送迎車有り、要予約。",
    "parkingInformation": "有り　25台　無料",
    "nearestStation": "那須塩原",
    "hotelSpecial": "平成温泉旅館番付にも掲載された栃木県を代表する　にごり湯の温泉です。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F5650%2F5650.html"
  },
  {
    "hotelNo": 32030,
    "hotelName": "塩原温泉　奥塩原高原ホテル",
    "hotelKanaName": "しおばらおんせん　しおばらこうげん　ほてる",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D32030",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D32030%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D32030",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D32030",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/32030/32030.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/32030.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/32030/32030_kan.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/32030/32030map.gif",
    "reviewCount": 535,
    "reviewAverage": 4.41,
    "userReview": "源泉かけ流しの硫黄泉と旬の料理に大満足夜通し入れる源泉かけ流しのお風呂(硫黄泉)が一番の魅力の宿です。夕食は男性でちょうどよいボリュームで品数も豊富、季節ごとに旬の素材を織り交ぜたコース料理で味も…　2026-09-18 20:51:08投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=32030\" class=\"3click\">つづきはこちら</a>",
    "hotelMinCharge": 14300,
    "address1": "栃木県",
    "address2": "那須塩原市湯本塩原113-4",
    "telephoneNo": "0287-32-2464",
    "access": "JR東北新幹線　那須塩原駅　東北自動車道　西那須野塩原I.C　R400　日塩��みじライン経由",
    "parkingInformation": "有　３０台　無料",
    "nearestStation": "那須塩原",
    "hotelSpecial": "にごり湯(硫黄泉）掛流しの温泉が自慢です。　柔らかな木漏れ日と爽やかな風が渡る高原の温泉ホテル",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F32030%2F32030.html"
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
        <span className="text-emerald-950/40 line-clamp-1">乳白色硫黄泉＆温泉街情緒宿</span>
      </nav>

      {/* ヒーローヘッダー */}
      <div className="border border-emerald-950/10 bg-white rounded-3xl p-6 md:p-12 shadow-sm space-y-6">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="bg-amber-100 text-amber-900 font-extrabold text-[10px] px-3 py-1 rounded-full uppercase tracking-wider">
              にごり湯・温泉街散策 特選ガイド
            </span>
            <span className="text-[10px] text-slate-400 font-bold">2026年最新版</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-black font-journal-serif text-emerald-950 leading-tight">
            立ち上る湯けむりと濃密な硫黄の香り！乳白色のにごり湯と風情ある温泉街めぐりの宿
          </h1>
          <p className="text-xs md:text-sm text-emerald-950/80 leading-relaxed font-medium pt-2">
            浴槽を満たす青みがかった乳白色の湯に浸かると、肌にじんわりと染み渡る濃厚な天然成分。温泉街の石畳に響く下駄の音と、立ち込める湯けむりの情緒。温泉情緒を120%味わい尽くす、本物の名湯宿をラインナップしました。
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
            title="立ち上る湯けむりと濃密な硫黄の香り！乳白色のにごり湯と風情ある温泉街めぐりの宿"
            url="https://croud-travel.pages.dev/sulfur-springs-milky-white-onsen-town-stay"
          />
        </div>

        {/* よくある質問 FAQ */}
        <div className="pt-8 border-t border-emerald-950/10 space-y-4">
          <h3 className="text-lg font-bold font-journal-serif text-emerald-950 flex items-center gap-2">
            <span>❓</span>
            <span>にごり湯・温泉街散策に関するよくある質問</span>
          </h3>
          <div className="space-y-3 text-xs">
            <div className="p-4 rounded-xl bg-teal-50/30 border border-teal-900/10 space-y-1.5">
              <h4 className="font-bold text-teal-950">Q. にごり湯・温泉街散策の予約でお得な方法はありますか？</h4>
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
