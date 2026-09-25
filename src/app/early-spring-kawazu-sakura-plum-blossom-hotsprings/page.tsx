import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import SpecialCouponBanner from '@/app/components/SpecialCouponBanner';
import ShareButtons from '@/app/components/ShareButtons';

export const metadata: Metadata = {
  title: '一足早い春の訪れ！早咲き河津桜＆梅まつりを愛でる花見露天風呂温泉旅館 ｜ 日本全国・旅宿クラウド',
  description: '伊豆河津・南伊豆・熱海など2月から濃いピンク色の花を咲かせる早咲きの河津桜や名木が揃う梅まつり。春の息吹を感じながら浸かる絶景露天風呂。',
  keywords: ["河津桜","早咲き桜","梅まつり","伊豆河津","熱海温泉","春先取り温泉"],
  alternates: {
    canonical: 'https://croud-travel.pages.dev/early-spring-kawazu-sakura-plum-blossom-hotsprings',
  },
  openGraph: {
    title: '一足早い春の訪れ！早咲き河津桜＆梅まつりを愛でる花見露天風呂温泉旅館',
    description: '伊豆河津・南伊豆・熱海など2月から濃いピンク色の花を咲かせる早咲きの河津桜や名木が揃う梅まつり。春の息吹を感じながら浸かる絶景露天風呂。',
    url: 'https://croud-travel.pages.dev/early-spring-kawazu-sakura-plum-blossom-hotsprings',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "一足早い春の訪れ！早咲き河津桜＆梅まつりを愛でる花見露天風呂温泉旅館",
    "description": "伊豆河津・南伊豆・熱海など2月から濃いピンク色の花を咲かせる早咲きの河津桜や名木が揃う梅まつり。春の息吹を感じながら浸かる絶景露天風呂。",
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
    "mainEntityOfPage": "https://croud-travel.pages.dev/early-spring-kawazu-sakura-plum-blossom-hotsprings"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "早咲き桜・梅まつりの旅行でおすすめの予約時期やタイミングは？",
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
    "hotelNo": 29100,
    "hotelName": "伊豆高原温泉　海望む露天風呂付客室　夢海月(ゆめみづき)",
    "hotelKanaName": "いずこうげんおんせん うみのぞむろてんぶろつききゃくしつ ゆめみづき（ゆめみづ",
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
    "hotelNo": 158403,
    "hotelName": "伊豆高原温泉ホテル　森の泉",
    "hotelKanaName": "いずこうげんおんせんほてる　もりのいずみ",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D158403",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D158403%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D158403",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D158403",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/158403/158403.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/158403.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/158403/158403_kan1.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/158403/158403map.gif",
    "reviewCount": 861,
    "reviewAverage": 4.31,
    "userReview": "ロビーからの富士山とドリンク飲み放題に大満足朝ロビーから富士山を見ることができました。ラウンジにも飲み物があり、お食事の時も後の支払いを気にすることなくドリンクが飲むことができ、大満足でした。…　2026-09-16 23:49:00投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=158403\" class=\"3click\">つづきはこちら</a>",
    "hotelMinCharge": 9900,
    "address1": "静岡県",
    "address2": "伊東市吉田901-75",
    "telephoneNo": "0557-44-2111",
    "access": "【最寄り駅】川奈駅より車で約15分（※無料送迎／予約制）【最寄りIC】小田原西ICから車で約90分",
    "parkingInformation": "有り　35台（無料）予約不要　　　Wi-fi　：有り（館内全て）",
    "nearestStation": "川奈（静岡）",
    "hotelSpecial": "広大な大自然に佇む大人の癒し空間でオールインクルーシブを満喫◇伊豆の味覚と四季折々の景色を味わう",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F158403%2F158403.html"
  },
  {
    "hotelNo": 135962,
    "hotelName": "松崎温泉　公共の宿　伊豆まつざき荘",
    "hotelKanaName": "こうきょうのやど　いずまつざきそう",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D135962",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D135962%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D135962",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D135962",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/135962/135962.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/135962.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/135962/135962_ru1.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/135962/135962map.gif",
    "reviewCount": 773,
    "reviewAverage": 4.4,
    "userReview": "駿河湾の絶景と静寂、かけ流しの温泉に癒やされる部屋から駿河湾を一望でき何より静か。波の音、鳥の鳴き声、虫の声など人口音が聞こえないのでとても居心地が良い。もちろんかけ流しの温泉も私は好きです。…　2026-09-17 13:18:11投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=135962\" class=\"3click\">つづきはこちら</a>",
    "hotelMinCharge": 5090,
    "address1": "静岡県",
    "address2": "賀茂郡松崎町江奈210-1",
    "telephoneNo": "0558-42-0450",
    "access": "伊豆急下田駅よりバスにて５０分　東名沼津I.C.／新東名長泉沼津ＩＣより約７６km（約90分）",
    "parkingInformation": "有り　６０台　無料　予約不要　ツーリングの方には屋根付き駐車場あり",
    "nearestStation": "伊豆急下田",
    "hotelSpecial": "源泉掛け流し湯！最上階の展望露天からは駿河湾を一望",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F135962%2F135962.html"
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
        <span className="text-emerald-950/40 line-clamp-1">早咲き河津桜＆梅まつり温泉</span>
      </nav>

      {/* ヒーローヘッダー */}
      <div className="border border-emerald-950/10 bg-white rounded-3xl p-6 md:p-12 shadow-sm space-y-6">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="bg-amber-100 text-amber-900 font-extrabold text-[10px] px-3 py-1 rounded-full uppercase tracking-wider">
              早咲き桜・梅まつり 特選ガイド
            </span>
            <span className="text-[10px] text-slate-400 font-bold">2026年最新版</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-black font-journal-serif text-emerald-950 leading-tight">
            一足早い春の訪れ！早咲き河津桜＆梅まつりを愛でる花見露天風呂温泉旅館
          </h1>
          <p className="text-xs md:text-sm text-emerald-950/80 leading-relaxed font-medium pt-2">
            まだ冬の寒さが残る2月から、鮮やかな濃いピンク色の花びらで春の先陣を切る河津桜。川沿いに咲き誇る桜並木と黄色の菜の花のコントラストを楽しんだ後は、湯量豊富な天然温泉露天風呂で温まる。春の訪れを日本でいち早く実感できる、風情あふれるお花見名宿をご紹介します。
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
            title="一足早い春の訪れ！早咲き河津桜＆梅まつりを愛でる花見露天風呂温泉旅館"
            url="https://croud-travel.pages.dev/early-spring-kawazu-sakura-plum-blossom-hotsprings"
          />
        </div>

        {/* よくある質問 FAQ */}
        <div className="pt-8 border-t border-emerald-950/10 space-y-4">
          <h3 className="text-lg font-bold font-journal-serif text-emerald-950 flex items-center gap-2">
            <span>❓</span>
            <span>早咲き桜・梅まつりに関するよくある質問</span>
          </h3>
          <div className="space-y-3 text-xs">
            <div className="p-4 rounded-xl bg-teal-50/30 border border-teal-900/10 space-y-1.5">
              <h4 className="font-bold text-teal-950">Q. 早咲き桜・梅まつりの予約でお得な方法はありますか？</h4>
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
