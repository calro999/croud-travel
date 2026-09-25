import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import SpecialCouponBanner from '@/app/components/SpecialCouponBanner';
import ShareButtons from '@/app/components/ShareButtons';

export const metadata: Metadata = {
  title: '黄金色に染まる海と空のマジックアワー！夕日絶景オーシャンビュー露天風呂宿 ｜ 日本全国・旅宿クラウド',
  description: '西伊豆堂ヶ島・丹後夕日ヶ浦・庄内浜など日本海・太平洋の夕陽の名所に佇む温泉宿。夕暮れどきに露天風呂から眺める黄金のサンセットグラデーション。',
  keywords: ["夕日絶景","サンセット露天","マジックアワー","西伊豆堂ヶ島","夕日ヶ浦温泉","海一望"],
  alternates: {
    canonical: 'https://croud-travel.pages.dev/sunset-magic-hour-oceanview-onsen-stay',
  },
  openGraph: {
    title: '黄金色に染まる海と空のマジックアワー！夕日絶景オーシャンビュー露天風呂宿',
    description: '西伊豆堂ヶ島・丹後夕日ヶ浦・庄内浜など日本海・太平洋の夕陽の名所に佇む温泉宿。夕暮れどきに露天風呂から眺める黄金のサンセットグラデーション。',
    url: 'https://croud-travel.pages.dev/sunset-magic-hour-oceanview-onsen-stay',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "黄金色に染まる海と空のマジックアワー！夕日絶景オーシャンビュー露天風呂宿",
    "description": "西伊豆堂ヶ島・丹後夕日ヶ浦・庄内浜など日本海・太平洋の夕陽の名所に佇む温泉宿。夕暮れどきに露天風呂から眺める黄金のサンセットグラデーション。",
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
    "mainEntityOfPage": "https://croud-travel.pages.dev/sunset-magic-hour-oceanview-onsen-stay"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "サンセット・夕日絶景の旅行でおすすめの予約時期やタイミングは？",
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
    "hotelNo": 129440,
    "hotelName": "夕日ヶ浦温泉　旅館　海の華",
    "hotelKanaName": "ゆうひがうらおんせん　りょかん　うみのはな",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D129440",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D129440%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D129440",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D129440",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/129440/129440.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/129440.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/129440/129440_kya.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/129440/129440map.gif",
    "reviewCount": 99,
    "reviewAverage": 4.26,
    "userReview": "海水浴するには近くて便利お部屋は綺麗で素敵でした。和室も広々しておりくつろげました。お料理はうーむ...悩みます。チェックアウトしてから海で泳いでお風呂を使わせていただきましたがシャワーは…　2026-09-01 16:59:06投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=129440\" class=\"3click\">つづきはこちら</a>",
    "hotelMinCharge": 10400,
    "address1": "京都府",
    "address2": "京丹後市網野町浜詰391",
    "telephoneNo": "0772-74-0081",
    "access": "京都丹後鉄道　夕日ヶ浦木津温泉駅からお車で約5分",
    "parkingInformation": "有り　無料",
    "nearestStation": "網野",
    "hotelSpecial": "★2023年3月GRAND OPEN！★目の前は「夕日百選」に選ばれた絶景！",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F129440%2F129440.html"
  },
  {
    "hotelNo": 67435,
    "hotelName": "窓に広がる夕日と海　美食を奏で１５０有余年　間人温泉　炭平",
    "hotelKanaName": "まどにひろがるゆうひとうみ　びしょくをかなで１５０ゆうよねん　たいざおんせん　すみへい",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D67435",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D67435%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D67435",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D67435",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/67435/67435.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/67435.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/67435/67435_k.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/67435/67435map.gif",
    "reviewCount": 483,
    "reviewAverage": 4.56,
    "userReview": "こだわり抜かれた空間と細やかなサービスに感動お部屋のつくりや建物もセンスがあり、とてもオシャレで快適で高級感がありました。スタッフの方たちのサービスもきめ細かく、気持ちよく過ごせました。すべてにお…　2026-09-19 10:06:31投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=67435\" class=\"3click\">つづきはこちら</a>",
    "hotelMinCharge": 30000,
    "address1": "京都府",
    "address2": "京丹後市丹後町間人3718",
    "telephoneNo": "0772-75-0005",
    "access": "京都丹後鉄道・網野駅から約20分無料送迎有（要予約）/　山陰近畿自動車道【京丹後大宮IC】から車で約30分",
    "parkingInformation": "無料駐車場有（予約不要）　※館内の階段を迂回する非常口での入館も出来ますのでご希望の方はお伝え下さい",
    "nearestStation": "網野",
    "hotelSpecial": "ここは、いにしえの皇后が愛した桃源郷、悠久から変わらぬ情景の中で、美食を奏で百五十有余年",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F67435%2F67435.html"
  },
  {
    "hotelNo": 79373,
    "hotelName": "夕日ヶ浦温泉　静花扇",
    "hotelKanaName": "ゆうひがうらおんせん　しずかはなおうぎ",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D79373",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D79373%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D79373",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D79373",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/79373/79373.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/79373.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/79373/79373_wy.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/79373/79373map.gif",
    "reviewCount": 393,
    "reviewAverage": 4.53,
    "userReview": "スタッフの心温まるおもてなしに感動感動や心配りは人からしか得られない心に刻まれるものを、静花扇のスタッフ皆様は与えてくださいました。お宿のコンセプト「おかえりなさい」は、亡くなった夫にはもう言…　2026-08-26 17:24:49投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=79373\" class=\"3click\">つづきはこちら</a>",
    "hotelMinCharge": 14850,
    "address1": "京都府",
    "address2": "京丹後市網野町浜詰767",
    "telephoneNo": "0772-74-0606",
    "access": "京都丹後鉄道　夕日ヶ浦木津温泉駅より送迎（車で約5分）、京都縦貫道/京丹後大宮IC下車約40分",
    "parkingInformation": "有り　２５台　無料　予約不要",
    "nearestStation": "木津温泉",
    "hotelSpecial": "目の前が海！小走り3秒で砂浜へ！海岸線に沈む雄大な夕日を見て、温泉にお食事におもてなし致します。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F79373%2F79373.html"
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
        <span className="text-emerald-950/40 line-clamp-1">夕日絶景・マジックアワー海宿</span>
      </nav>

      {/* ヒーローヘッダー */}
      <div className="border border-emerald-950/10 bg-white rounded-3xl p-6 md:p-12 shadow-sm space-y-6">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="bg-amber-100 text-amber-900 font-extrabold text-[10px] px-3 py-1 rounded-full uppercase tracking-wider">
              サンセット・夕日絶景 特選ガイド
            </span>
            <span className="text-[10px] text-slate-400 font-bold">2026年最新版</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-black font-journal-serif text-emerald-950 leading-tight">
            黄金色に染まる海と空のマジックアワー！夕日絶景オーシャンビュー露天風呂宿
          </h1>
          <p className="text-xs md:text-sm text-emerald-950/80 leading-relaxed font-medium pt-2">
            昼から夜へと移り変わるわずか30分間、空と海がオレンジから茜色、紫へと息をのむような美しいグラデーションを描くマジックアワー。波の音をBGMに、水平線にゆっくりと沈みゆく夕日を露天風呂から眺める時間は、どんな贅沢にも勝る特別な癒やしをもたらしてくれます。
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
            title="黄金色に染まる海と空のマジックアワー！夕日絶景オーシャンビュー露天風呂宿"
            url="https://croud-travel.pages.dev/sunset-magic-hour-oceanview-onsen-stay"
          />
        </div>

        {/* よくある質問 FAQ */}
        <div className="pt-8 border-t border-emerald-950/10 space-y-4">
          <h3 className="text-lg font-bold font-journal-serif text-emerald-950 flex items-center gap-2">
            <span>❓</span>
            <span>サンセット・夕日絶景に関するよくある質問</span>
          </h3>
          <div className="space-y-3 text-xs">
            <div className="p-4 rounded-xl bg-teal-50/30 border border-teal-900/10 space-y-1.5">
              <h4 className="font-bold text-teal-950">Q. サンセット・夕日絶景の予約でお得な方法はありますか？</h4>
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
