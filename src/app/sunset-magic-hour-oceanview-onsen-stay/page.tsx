import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import SpecialCouponBanner from '@/app/components/SpecialCouponBanner';
import ShareButtons from '@/app/components/ShareButtons';

export const metadata: Metadata = {
  title: '黄金色に染まる海と空のマジックアワー！夕日絶景オーシャンビュー露天風呂宿',
  description: '西伊豆堂ヶ島・丹後夕日ヶ浦・庄内浜など日本海・太平洋の夕陽の名所に佇む温泉宿。夕暮れどきに露天風呂から眺める黄金のサンセットグラデーション。',
  keywords: ["温泉宿", "宿泊予約", "楽天トラベル", "国内旅行", "観光ガイド"],
  alternates: {
    canonical: "https://croud-travel.pages.dev/sunset-magic-hour-oceanview-onsen-stay/",
  },
  openGraph: {
    title: '黄金色に染まる海と空のマジックアワー！夕日絶景オーシャンビュー露天風呂宿',
    description: '西伊豆堂ヶ島・丹後夕日ヶ浦・庄内浜など日本海・太平洋の夕陽の名所に佇む温泉宿。夕暮れどきに露天風呂から眺める黄金のサンセットグラデーション。',
    url: 'https://croud-travel.pages.dev/sunset-magic-hour-oceanview-onsen-stay/',
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
    "datePublished": "",
    "dateModified": "",
    "mainEntityOfPage": "https://croud-travel.pages.dev/sunset-magic-hour-oceanview-onsen-stay/"
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
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F129440%2F129440.html",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F129440%2F129440.html%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D129440",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D129440",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/129440/129440.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/129440.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/129440/129440_kya.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/129440/129440map.gif",
    "reviewCount": 99,
    "reviewAverage": 4.26,
    "userReview": "海水浴するには近くて便利お部屋は綺麗で素敵でした。和室も広々しておりくつろげました。お料理はうーむ...悩みます。チェックアウトしてから海で泳いでお風呂を使わせていただきましたがシャワーは。",
    "hotelMinCharge": 10400,
    "address1": "京都府",
    "address2": "京丹後市網野町浜詰391",
    "telephoneNo": "81",
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
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F67435%2F67435.html",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F67435%2F67435.html%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D67435",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D67435",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/67435/67435.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/67435.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/67435/67435_k.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/67435/67435map.gif",
    "reviewCount": 483,
    "reviewAverage": 4.56,
    "userReview": "こだわり抜かれた空間と細やかなサービスに感動お部屋のつくりや建物もセンスがあり、とてもオシャレで快適で高級感がありました。スタッフの方たちのサービスもきめ細かく、気持ちよく過ごせました。すべてにお。",
    "hotelMinCharge": 30000,
    "address1": "京都府",
    "address2": "京丹後市丹後町間人3718",
    "telephoneNo": "05",
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
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F79373%2F79373.html",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F79373%2F79373.html%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D79373",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D79373",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/79373/79373.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/79373.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/79373/79373_wy.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/79373/79373map.gif",
    "reviewCount": 393,
    "reviewAverage": 4.53,
    "userReview": "スタッフの心温まるおもてなしに感動感動や心配りは人からしか得られない心に刻まれるものを、静花扇のスタッフ皆様は与えてくださいました。お宿のコンセプト「おかえりなさい」は、亡くなった夫にはもう言。",
    "hotelMinCharge": 14850,
    "address1": "京都府",
    "address2": "京丹後市網野町浜詰767",
    "telephoneNo": "06",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"ホーム","item":"https://croud-travel.pages.dev/"},{"@type":"ListItem","position":2,"name":"特集一覧","item":"https://croud-travel.pages.dev/features/"},{"@type":"ListItem","position":3,"name":"黄金色に染まる海と空のマジックアワー！夕日絶景オーシャンビュー露天風呂宿 ｜ 日本全国・旅宿クラウド","item":"https://croud-travel.pages.dev/sunset-magic-hour-oceanview-onsen-stay/"}]}) }}
      />
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
        <Link href="/features/" className="hover:text-teal-800 transition">特集一覧</Link>
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
          <h1 className="text-2xl md:text-4xl font-black font-journal-serif text-emerald-950 leading-tight">黄金色に染まる海と空のマジックアワー！夕日絶景オーシャンビュー露天風呂宿</h1>
          <p className="text-xs md:text-sm text-emerald-950/80 leading-relaxed font-medium pt-2">
            昼から夜へと移り変わるわずか30分間、空と海がオレンジから茜色、紫へと息をのむような美しいグラデーションを描くマジックアワー。波の音をBGMに、水平線にゆっくりと沈みゆく夕日を露天風呂から眺める時間は、どんな贅沢にも勝る特別な癒やしをもたらしてくれます。
          </p>
        </div>

        {/* クーポン特大バナー */}
        <SpecialCouponBanner />

        {/* 厳選ホテル・宿ランキング比較一覧 */}
        <div className="space-y-8 pt-4">
          <h2 className="text-xl md:text-2xl font-black font-journal-serif text-emerald-950 flex items-center gap-2 border-b border-emerald-950/10 pb-3"><span>🏆</span>
            <span>編集部が厳選したおすすめ宿泊施設 TOP3</span></h2>

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
                  <div className="md:col-span-1 aspect-[16/9] sm:aspect-[21/9] rounded-2xl overflow-hidden bg-slate-100 relative">
                    {h.hotelImageUrl ? (
                      <img
                        src={h.hotelImageUrl}
                        alt={h.hotelName}
                        className="w-full h-full object-cover"
                        loading="eager" fetchPriority="high"
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
                        rel="sponsored noopener noreferrer"
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
            url="https://croud-travel.pages.dev/sunset-magic-hour-oceanview-onsen-stay/"
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
              <p className="text-emerald-950/80 leading-relaxed">楽天トラベルの「5と0のつく日セール」による最大20%割引や、控除上限内であれば自己負担実質2,000円で宿泊できる（寄付額の最大30%クーポン還元）「楽天ふるさと納税宿泊クーポン」の併用が最もお得でおすすめです。
              </p>
            </div>
            <div className="p-4 rounded-xl bg-teal-50/30 border border-teal-900/10 space-y-1.5">
              <h4 className="font-bold text-teal-950">Q. キャンセル料や予約変更はどうなっていますか？</h4>
              <p className="text-emerald-950/80 leading-relaxed">各宿泊施設および予約プランによってキャンセル規定が異なります。ご予約完了前に楽天トラベルの詳細ページにてキャンセルポリシーを必ずご確認ください。
              </p>
            </div>
          </div>
        </div>
      </div>
    
      
        {/* Enriched Rakuten Travel Hotel Specs */}
        <section data-enriched-rakuten-wiki="true" className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200 space-y-8 my-10">
          <div className="space-y-2 border-b border-stone-200 pb-4">
            <span className="text-[11px] font-extrabold text-amber-700 bg-amber-50 border border-amber-200 px-3 py-0.5 rounded-full uppercase">
              RAKUTEN TRAVEL API &amp; LOCAL GUIDE
            </span>
            <h2 className="text-xl md:text-2xl font-bold text-stone-900">
              📊 黄金色に染まる海と空のマジックアワー！夕日絶景オーシャンビュー露天風呂宿：掲載宿スペック一覧比較表＆宿泊者クチコミ・アクセス詳細分析
            </h2>
            <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
              楽天トラベル公式APIより取得した「黄金色に染まる海と空のマジックアワー！夕日絶景オーシャンビュー露天風呂宿」掲載宿の所在地・最寄り駅・駐車場条件・クチコミ評価・参考最安料金を一覧で比較できます。公共交通機関（新幹線・在来線・送迎バス）利用の方もマイカー・レンタカー利用の方も、旅のスタイルに合った一軒をお選びください。
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse bg-white rounded-xl overflow-hidden border border-stone-200">
              <thead>
                <tr className="bg-stone-900 text-white font-bold">
                  <th className="p-3">宿名</th>
                  <th className="p-3">所在地</th>
                  <th className="p-3">最寄り駅・交通</th>
                  <th className="p-3">駐車場情報</th>
                  <th className="p-3">楽天評価</th>
                  <th className="p-3">最安目安</th>
                  <th className="p-3">予約・詳細</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200">
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">1. 夕日ヶ浦温泉　旅館　海の華</td>
                <td className="p-3 text-stone-600">京都府京丹後市網野町浜詰391</td>
                <td className="p-3 text-stone-600">網野駅周辺</td>
                <td className="p-3 text-stone-600">有り　無料</td>
                <td className="p-3 font-bold text-amber-600">★4.1（100件）</td>
                <td className="p-3 font-bold text-rose-600">¥10,400〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F129440%2F129440.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">2. 窓に広がる夕日と海　美食を奏で１５０有余年　間人温泉　炭平</td>
                <td className="p-3 text-stone-600">京都府京丹後市丹後町間人3718</td>
                <td className="p-3 text-stone-600">網野駅周辺</td>
                <td className="p-3 text-stone-600">無料駐車場有（予約不要）　※館内の階段を迂回する非常口での入館も出来ますのでご希望の方はお伝え下さい</td>
                <td className="p-3 font-bold text-amber-600">★4.64（492件）</td>
                <td className="p-3 font-bold text-rose-600">¥32,000〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F67435%2F67435.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">3. 夕日ヶ浦温泉　静花扇</td>
                <td className="p-3 text-stone-600">京都府京丹後市網野町浜詰767</td>
                <td className="p-3 text-stone-600">木津温泉駅周辺</td>
                <td className="p-3 text-stone-600">有り　２５台　無料　予約不要</td>
                <td className="p-3 font-bold text-amber-600">★4.56（402件）</td>
                <td className="p-3 font-bold text-rose-600">¥14,850〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F79373%2F79373.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              </tbody>
            </table>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold text-stone-900 border-l-4 border-amber-600 pl-3">
              🏨 黄金色に染まる海と空のマジックアワー！夕日絶景オーシャンビュー露天風呂宿エリアの宿泊施設別スペック＆滞在チェックポイント
            </h3>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #1</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">夕日ヶ浦温泉　旅館　海の華</h3>
                  <span className="text-xs text-stone-400 ml-2">（ゆうひがうらおんせん　りょかん　うみのはな）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥10,400〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/129440/129440_kya.jpg" alt="夕日ヶ浦温泉　旅館　海の華 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>★2023年3月GRAND OPEN！★目の前は「夕日百選」に選ばれた絶景！</p>
                  <p><strong>【所在地・アクセス】</strong>〒 京都府京丹後市網野町浜詰391 ／ 最寄り駅：網野 ／ 交通案内：京都丹後鉄道　夕日ヶ浦木津温泉駅からお車で約5分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　無料</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.05 ／ 立地 ★3.8 ／ 部屋 ★4.3 ／ 設備 ★4.16 ／ 風呂 ★3.79 ／ 食事 ★4.16</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「当日急に温泉が調子悪く変更して頂いた、同金額で、料理旅館夕日ヶ浦に変更して頂いた、温泉風呂付きで、料理も大変美味しいかったです、海もお部屋も大きく、前日夕方8時くらいのネット予約にも関わらず…」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #2</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">窓に広がる夕日と海　美食を奏で１５０有余年　間人温泉　炭平</h3>
                  <span className="text-xs text-stone-400 ml-2">（まどにひろがるゆうひとうみ　びしょくをかなで１５０ゆうよねん　たいざおんせん　すみへい）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥32,000〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/67435/67435_k.jpg" alt="窓に広がる夕日と海　美食を奏で１５０有余年　間人温泉　炭平 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>ここは、いにしえの皇后が愛した桃源郷、悠久から変わらぬ情景の中で、美食を奏で百五十有余年</p>
                  <p><strong>【所在地・アクセス】</strong>〒 京都府京丹後市丹後町間人3718 ／ 最寄り駅：網野 ／ 交通案内：京都丹後鉄道・網野駅から約20分無料送迎有（要予約）/　山陰近畿自動車道【京丹後大宮IC】から車で約30分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>無料駐車場有（予約不要）　※館内の階段を迂回する非常口での入館も出来ますのでご希望の方はお伝え下さい</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.74 ／ 立地 ★4.7 ／ 部屋 ★4.77 ／ 設備 ★4.78 ／ 風呂 ★4.8 ／ 食事 ★4.89</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「子供用料理の配慮が嬉しく、また来年も利用したい子連れで宿泊しましたが、子供用の料理を用意して頂けたりと楽しく過ごすことができました。また来年も利用させて頂きたいです。」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #3</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">夕日ヶ浦温泉　静花扇</h3>
                  <span className="text-xs text-stone-400 ml-2">（ゆうひがうらおんせん　しずかはなおうぎ）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥14,850〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/79373/79373_wy.jpg" alt="夕日ヶ浦温泉　静花扇 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>目の前が海！小走り3秒で砂浜へ！海岸線に沈む雄大な夕日を見て、温泉にお食事におもてなし致します。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 京都府京丹後市網野町浜詰767 ／ 最寄り駅：木津温泉 ／ 交通案内：京都丹後鉄道　夕日ヶ浦木津温泉駅より送迎（車で約5分）、京都縦貫道/京丹後大宮IC下車約40分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　２５台　無料　予約不要</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.6 ／ 立地 ★4.62 ／ 部屋 ★4.56 ／ 設備 ★4.46 ／ 風呂 ★4.36 ／ 食事 ★4.69</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「海を一望できる絶景と美味しい料理に大満足夕日が浦の奥の方なので、静かでゆっくり出来ました。部屋からは海が一望できて、最高の眺めでした。屋上テラスからの眺めも良く、天気が良ければ最高の夕日が…」
                  </blockquote>
                </div>
              </div>
            </div>
          </div></section>

      <HubRelatedPosts currentSlug="sunset-magic-hour-oceanview-onsen-stay" />
</div>
  );
}
