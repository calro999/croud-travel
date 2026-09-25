import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import SpecialCouponBanner from '@/app/components/SpecialCouponBanner';
import ShareButtons from '@/app/components/ShareButtons';

export const metadata: Metadata = {
  title: 'パチパチ爆ぜる炭火の温もり！囲炉裏料理と清流川魚・ジビエを味わう里山名湯宿 ｜ 日本全国・旅宿クラウド',
  description: '奥飛騨・白川郷・秩父など古き良き日本の風情が残る囲炉裏のある名旅館。炭火でじっくり焼く岩魚や鮎、朴葉味噌、飛騨牛ステーキを堪能する休日。',
  keywords: ["囲炉裏料理","炭火焼き","古民家宿","奥飛騨温泉郷","ジビエ料理","里山リゾート"],
  alternates: {
    canonical: 'https://croud-travel.pages.dev/traditional-irori-charcoal-hearth-satoyama-stay',
  },
  openGraph: {
    title: 'パチパチ爆ぜる炭火の温もり！囲炉裏料理と清流川魚・ジビエを味わう里山名湯宿',
    description: '奥飛騨・白川郷・秩父など古き良き日本の風情が残る囲炉裏のある名旅館。炭火でじっくり焼く岩魚や鮎、朴葉味噌、飛騨牛ステーキを堪能する休日。',
    url: 'https://croud-travel.pages.dev/traditional-irori-charcoal-hearth-satoyama-stay',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "パチパチ爆ぜる炭火の温もり！囲炉裏料理と清流川魚・ジビエを味わう里山名湯宿",
    "description": "奥飛騨・白川郷・秩父など古き良き日本の風情が残る囲炉裏のある名旅館。炭火でじっくり焼く岩魚や鮎、朴葉味噌、飛騨牛ステーキを堪能する休日。",
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
    "mainEntityOfPage": "https://croud-travel.pages.dev/traditional-irori-charcoal-hearth-satoyama-stay"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "囲炉裏料理・古民家情緒の旅行でおすすめの予約時期やタイミングは？",
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
    "hotelNo": 53420,
    "hotelName": "離れのある囲炉裏温泉旅館　早水荘",
    "hotelKanaName": "はなれのあるいろりおんせんりょかん　はやみずそう",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D53420",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D53420%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D53420",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D53420",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/53420/53420.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/53420.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/53420/53420_da.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/53420/53420map.gif",
    "reviewCount": 95,
    "reviewAverage": 4.53,
    "userReview": "愛犬と温泉を満喫、囲炉裏の夕食も最高ワンコ達と一緒に食事も取れて、お部屋に温泉もあるのですごくゆっくり出来ました。夕飯は囲炉裏で焼くお肉が最高でした。クチコミの詳細はこちらから　https…　2026-09-05 16:04:19投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=53420\" class=\"3click\">つづきはこちら</a>",
    "hotelMinCharge": 8800,
    "address1": "鹿児島県",
    "address2": "伊佐市菱刈川北2280-14",
    "telephoneNo": "0995-26-1141",
    "access": "肥薩線　栗野駅より南国交通バスで１２～１３分／鹿児島本線　水俣駅より南国交通バスで１時間",
    "parkingInformation": "有り　２０台　無料　予約不要",
    "nearestStation": "栗野",
    "hotelSpecial": "囲炉裏があり、、昔懐かしい雰囲気の静かな温泉宿です。離れはペットも一緒に泊まれます。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F53420%2F53420.html"
  },
  {
    "hotelNo": 2628,
    "hotelName": "四万温泉　源泉掛け流しの貸切風呂と囲炉裏料理宿　湯の宿　山ばと",
    "hotelKanaName": "しまおんせん　げんせんかけながしのかしきりぶろといろりりょうりやど　ゆのやど　やまばと",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D2628",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D2628%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D2628",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D2628",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/2628/2628.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/2628.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/2628/2628_heya.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/2628/2628map.gif",
    "reviewCount": 243,
    "reviewAverage": 4.61,
    "userReview": "奥四万ダムに近く、温泉と地産料理に癒される奥四万ダムから比較的近いです。料理は量がちょうどよく群馬の食材をつかっておりとても美味しかったです。温泉の湯質は最高でした。何もすることが…　2026-09-19 12:41:07投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=2628\" class=\"3click\">つづきはこちら</a>",
    "hotelMinCharge": 14000,
    "address1": "群馬県",
    "address2": "吾妻郡中之条町四万4358-11",
    "telephoneNo": "0279-64-2217",
    "access": "関越自動車道・渋川伊香保Ｉ.Ｃから国道353経由60分JR中之条駅からバスで30分　終点から徒歩20分",
    "parkingInformation": "建物の前後６台、　日向見駐車場徒歩２分　20台、　日向見公園駐車場徒歩1分　7台　無料",
    "nearestStation": "中之条",
    "hotelSpecial": "夕食は個室ダイニングで炭火焼きやここならではの【温泉蒸し】など地産地消料理をお召し上がりください。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F2628%2F2628.html"
  },
  {
    "hotelNo": 40916,
    "hotelName": "山梨県の温泉旅館　下部温泉郷　下部ホテル",
    "hotelKanaName": "やまなしけんのおんせんりょかん　しもべおんせんきょう　しもべほてる",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D40916",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D40916%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D40916",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D40916",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/40916/40916.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/40916.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/40916/40916_hu.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/40916/40916map.gif",
    "reviewCount": 1284,
    "reviewAverage": 4.38,
    "userReview": "温泉と接客は良いが食事が期待外れ老舗の人気ホテルで念願の初訪問。温泉と食事がとても楽しみでした。ドアマンがチェックイン、ルーム案内まで世間話しながら丁寧に対応してくれました。館内も部屋…　2026-09-13 22:30:45投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=40916\" class=\"3click\">つづきはこちら</a>",
    "hotelMinCharge": 15400,
    "address1": "山梨県",
    "address2": "南巨摩郡身延町上之平1900",
    "telephoneNo": "0556-36-0311",
    "access": "ＪＲ身延線下部温泉駅徒歩１分／車：中部横断道下部温泉早川ＩＣより５分",
    "parkingInformation": "有り　１００台　無料　予約不要",
    "nearestStation": "下部温泉",
    "hotelSpecial": "泉質の異なる「三種類の源泉」を、七つの露天風呂を含む大浴場など「十二の湯舟」でご堪能いただけます",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F40916%2F40916.html"
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
        <span className="text-emerald-950/40 line-clamp-1">囲炉裏料理＆里山名湯古民家宿</span>
      </nav>

      {/* ヒーローヘッダー */}
      <div className="border border-emerald-950/10 bg-white rounded-3xl p-6 md:p-12 shadow-sm space-y-6">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="bg-amber-100 text-amber-900 font-extrabold text-[10px] px-3 py-1 rounded-full uppercase tracking-wider">
              囲炉裏料理・古民家情緒 特選ガイド
            </span>
            <span className="text-[10px] text-slate-400 font-bold">2026年最新版</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-black font-journal-serif text-emerald-950 leading-tight">
            パチパチ爆ぜる炭火の温もり！囲炉裏料理と清流川魚・ジビエを味わう里山名湯宿
          </h1>
          <p className="text-xs md:text-sm text-emerald-950/80 leading-relaxed font-medium pt-2">
            自在鉤から下がる鉄鍋から立ち上る湯気と、炭火で香ばしく焼き上がる串刺しの川魚。どこか懐かしい木の香りに包まれながら、赤々と燃える炭火を囲んで地酒を傾ける贅沢な時間。日本の原風景に出会う、心温まる里山ステイをお届けします。
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
            title="パチパチ爆ぜる炭火の温もり！囲炉裏料理と清流川魚・ジビエを味わう里山名湯宿"
            url="https://croud-travel.pages.dev/traditional-irori-charcoal-hearth-satoyama-stay"
          />
        </div>

        {/* よくある質問 FAQ */}
        <div className="pt-8 border-t border-emerald-950/10 space-y-4">
          <h3 className="text-lg font-bold font-journal-serif text-emerald-950 flex items-center gap-2">
            <span>❓</span>
            <span>囲炉裏料理・古民家情緒に関するよくある質問</span>
          </h3>
          <div className="space-y-3 text-xs">
            <div className="p-4 rounded-xl bg-teal-50/30 border border-teal-900/10 space-y-1.5">
              <h4 className="font-bold text-teal-950">Q. 囲炉裏料理・古民家情緒の予約でお得な方法はありますか？</h4>
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
