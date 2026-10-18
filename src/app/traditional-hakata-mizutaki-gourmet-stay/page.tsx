import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { Star, MapPin, Sparkles, CheckCircle2, ChevronRight, Award, ExternalLink } from 'lucide-react';

export const metadata: Metadata = {
  title: '2026年：博多名物・濃厚鶏白湯水炊き！呼子イカ活造り＆福岡名湯・サウナの極上宿5選',
  description: '2026年最新！じっくり煮込んだ黄金スープの博多水炊き会席＆透き通る呼子イカ活造り！福岡・博多の天然温泉＆極上サウナ付きホテル5選。',
  keywords: ["2026年", "博多名物", "福岡名湯", "サウナの極上宿5選", "日本全国", "旅宿クラウド", "温泉宿"],
  openGraph: {
    title: '2026年：博多名物・濃厚鶏白湯水炊き！呼子イカ活造り＆福岡名湯・サウナの極上宿5選',
    description: '2026年最新！じっくり煮込んだ黄金スープの博多水炊き会席＆透き通る呼子イカ活造り！福岡・博多の天然温泉＆極上サウナ付きホテル5選。',
    type: 'article',
    url: 'https://croud-travel.pages.dev/traditional-hakata-mizutaki-gourmet-stay',
  },
  alternates: {
    canonical: "https://croud-travel.pages.dev/traditional-hakata-mizutaki-gourmet-stay/",
  },
};

const hotels: any[] = [
  {
    "hotelNo": 165706,
    "hotelName": "エスペリアホテル博多",
    "hotelKanaName": "えすぺりあほてるはかた",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F165706%2F165706.html",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F165706%2F165706.html%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D165706",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D165706",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/165706/165706.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/165706.jpg",
    "roomImageUrl": "",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/165706/165706map.gif",
    "reviewCount": 1787,
    "reviewAverage": 4.21,
    "userReview": "ソファーは座れないくらい狭い笑笑。",
    "hotelMinCharge": 7380,
    "address1": "福岡県",
    "address2": "福岡市博多区博多駅前2-11-4",
    "telephoneNo": "092-412-7272",
    "access": "地下鉄「博多駅」P５番出口より徒歩約分。JR「博多駅」より徒歩約５分、福岡空港から博多へは地下鉄約１０分",
    "parkingInformation": "有り　16台　1,600円（税込み／泊）　先着順 予約不可　※提携の駐車場はございません",
    "nearestStation": "博多",
    "hotelSpecial": "割引クーポン配布中。バス・トイレ・洗面台が独立、高セキュリティーのＩＣカードシステム導入。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F165706%2F165706.html"
  },
  {
    "hotelNo": 180583,
    "hotelName": "ホテル・トリフィート博多祇園",
    "hotelKanaName": "ほてるとりふぃーとはかたぎおん",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F180583%2F180583.html",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F180583%2F180583.html%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D180583",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D180583",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/180583/180583.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/180583.jpg",
    "roomImageUrl": "",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/180583/180583map.gif",
    "reviewCount": 798,
    "reviewAverage": 4.15,
    "userReview": "博多駅にも天神にもゆっくり歩いて行けるし、夜は静かでゆっくり休めました。お部屋も和テイストで落ち着いて過ごせました。朝食は他の方の口コミにもありましたが、本当に美味しかったです。朝からちょっと食べ過ぎ。",
    "hotelMinCharge": 5370,
    "address1": "福岡県",
    "address2": "福岡市博多区冷泉町8-24",
    "telephoneNo": "092-283-7060",
    "access": "■地下鉄「祇園駅」徒歩5分■西鉄バス停「奥の堂」徒歩3分■福岡空港 地下鉄利用で最短15分■マリンメッセまでバスで7分",
    "parkingInformation": "有り（屋外/高さ制限無し）　7台　1980円（税込み/泊）　先着順（事前予約不可）",
    "nearestStation": "祇園（福岡）",
    "hotelSpecial": "■大浴場完備■自慢の朝食■ 地下鉄「祇園駅」徒歩5分「櫛田神社前」徒歩6分■3名宿泊可■無料WIFI",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F180583%2F180583.html"
  },
  {
    "hotelNo": 41372,
    "hotelName": "西鉄ホテル　クルーム博多",
    "hotelKanaName": "にしてつほてる　くるーむはかた",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F41372%2F41372.html",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F41372%2F41372.html%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D41372",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D41372",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/41372/41372.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/41372.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/41372/41372_dai.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/41372/41372map.gif",
    "reviewCount": 6902,
    "reviewAverage": 4.27,
    "userReview": "窓から電車が見えて親子で大満足!駅近くで電車が見えそうなホテルを探してこちらに宿泊。部屋の窓から電車や新幹線が見れて親子で楽しめました。ホテル内は清潔でスタッフの対応もよかったです。また機。",
    "hotelMinCharge": 9000,
    "address1": "福岡県",
    "address2": "福岡市博多区博多駅前一丁目１７番６号",
    "telephoneNo": "092-413-5454",
    "access": "ＪＲ　博多駅「博多口」より徒歩約４分    　　　地下鉄　博多駅「西４番出口」より徒歩約４分",
    "parkingInformation": "１泊1台２，０００円（税込）14:30～翌12：30",
    "nearestStation": "博多",
    "hotelSpecial": "天然温泉・サウナ完備／博多駅すぐ隣／開放的で居心地のよいロビー空間／コンビニ併設",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F41372%2F41372.html"
  },
  {
    "hotelNo": 179590,
    "hotelName": "ホテルリファレンス博多冷泉",
    "hotelKanaName": "ほてるりふぁれんすはかたれいせん",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F179590%2F179590.html",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F179590%2F179590.html%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D179590",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D179590",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/179590/179590.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/179590.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/179590/179590_kan1.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/179590/179590map.gif",
    "reviewCount": 386,
    "reviewAverage": 4.11,
    "userReview": "静かな環境と便利な立地、荷物預かりは有料周りは銀行やビルが多いので静かでした、セブンイレブンも駅からの動線にあったので便利でしたね部屋の広かったですただチェックアウト後の荷物預かりが有料な。",
    "hotelMinCharge": 4905,
    "address1": "福岡県",
    "address2": "福岡市博多区冷泉町9-29",
    "telephoneNo": "092-283-5133",
    "access": "地下鉄祇園駅2番出口より徒歩で約3分　博多駅からも徒歩12分　福岡空港から地下鉄祇園駅までは7分",
    "parkingInformation": "先着順 6台 ご宿泊者様は1泊1,500円(チェックアウトまで) 通常25分200円(最大料金無し)",
    "nearestStation": "祇園（福岡）",
    "hotelSpecial": "2020年4月開業 祇園駅徒歩3分 博多駅徒歩11分。閑静でシンプルなビジネスホテルです。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F179590%2F179590.html"
  },
  {
    "hotelNo": 177601,
    "hotelName": "ホテルトラッド博多",
    "hotelKanaName": "とらっどはかた",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F177601%2F177601.html",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F177601%2F177601.html%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D177601",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D177601",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/177601/177601.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/177601.jpg",
    "roomImageUrl": "",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/177601/177601map.gif",
    "reviewCount": 1012,
    "reviewAverage": 4.32,
    "userReview": "天候不良で急遽宿泊したので、本当ならちゃんとホテル滞在も楽しめばよかった..と後悔するレベルでいいホテルでした。今度はウェルカムドリンクもいただける時間にちゃんと行きたいです。クチコミの詳細は。",
    "hotelMinCharge": 6160,
    "address1": "福岡県",
    "address2": "福岡市博多区住吉3-12-1",
    "telephoneNo": "092-710-7675",
    "access": "博多駅から散歩気分で徒歩12分。バスは「博多駅前Ａ（300番台）・Ｂ乗場」から約5分「住吉」バス停下車、すぐ。",
    "parkingInformation": "タワー式22台：先着順 15時～11時30分 税込1500円現金のみ 入出庫不可(22時～7時)",
    "nearestStation": "博多",
    "hotelSpecial": "ツイン以上はバス・トイレ・洗面台がセパレート！朝は博多駅まで無料シャトルバス運行中！",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F177601%2F177601.html"
  }
];

export default function FeatureDetailPage() {

  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【2026年】博多名物・濃厚鶏白湯水炊き！呼子イカ活造り＆福岡名湯・サウナの極上宿5選 | 日本全国・旅宿クラウド",
    "description": "2026年最新！じっくり煮込んだ黄金スープの博多水炊き会席＆透き通る呼子イカ活造り！福岡・博多の天然温泉＆極上サウナ付きホテル5選。",
    "url": "https://croud-travel.pages.dev/traditional-hakata-mizutaki-gourmet-stay/",
    "publisher": {
      "@type": "Organization",
      "name": "日本全国・旅宿クラウド",
      "logo": { "@type": "ImageObject", "url": "https://croud-travel.pages.dev/icon.png" }
    }
  };
  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "ホーム", "item": "https://croud-travel.pages.dev" },
      { "@type": "ListItem", "position": 2, "name": "【2026年】博多名物・濃厚鶏白湯水炊き！呼子イカ活造り＆福岡名湯・サウナの極上宿5選 | 日本全国・旅宿クラウド", "item": "https://croud-travel.pages.dev/traditional-hakata-mizutaki-gourmet-stay/" }
    ]
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
      {/* パンくずリスト */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-3 text-sm text-slate-500 flex items-center space-x-2">
          <Link href="/" className="hover:text-amber-600">トップ</Link>
          <span>&gt;</span>
          <Link href="/features" className="hover:text-amber-600">厳選特集一覧</Link>
          <span>&gt;</span>
          <span className="text-slate-800 font-medium truncate max-w-xs sm:max-w-md md:max-w-none">
            博多名物水炊き＆呼子イカ会席と福岡名湯宿
          </span>
        </div>
      </div>

      {/* ヒーローヘッダー */}
      <header className="relative bg-gradient-to-r from-amber-900 via-stone-800 to-slate-900 text-white py-16 px-4">
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-300 px-4 py-1.5 rounded-full text-sm font-semibold backdrop-blur-sm border border-amber-400/30">
            <Sparkles className="w-4 h-4" /> 博多名物水炊き×極上福岡天然温泉
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight leading-tight">「2026年」博多名物・濃厚鶏白湯水炊き！呼子イカ活造り＆福岡名湯・サウナの極上宿5選</h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed pt-2">
            鶏ガラをじっくり煮込んだコラーゲンたっぷりの濃厚白湯スープでいただく本場博多の水炊き。透き通る鮮度抜群の呼子直送イカ活造りとともに、天然温泉大浴場やサウナで寛ぐ贅沢な福岡グルメ旅。
          </p>
        </div>
      </header>

      {/* メインコンテンツ */}
      <main className="max-w-5xl mx-auto px-4 py-12 space-y-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"「エスペリアホテル博多」へのアクセスや移動方法について","acceptedAnswer":{"@type":"Answer","text":"「エスペリアホテル博多」へは、公共交通機関またはお車でのアクセスが可能です。詳しい送迎情報や道順は楽天トラベルの最新宿情報をご確認ください。"}},{"@type":"Question","name":"「エスペリアホテル博多」の魅力や予約時のポイントは？","acceptedAnswer":{"@type":"Answer","text":"「エスペリアホテル博多」は『割引クーポン配布中。バス・トイレ・洗面台が独立、高セキュリティーのＩＣカードシステム導入。』という点が旅行者から高く支持されています。連休や人気シーズンは予約が集中しやすいため、空室状況はお早めのチェックが安心です。"}},{"@type":"Question","name":"プラン選びや宿の比較で意識すべき点は？","acceptedAnswer":{"@type":"Answer","text":"「エスペリアホテル博多」と「西鉄ホテル クルーム博多」はそれぞれ立地や施設設備に独自の魅力があります。湯巡り重視か、料理やお部屋の寛ぎ重視かなど、今回の旅の目的に合わせてお選びください。"}}]}) }}
      />
        {/* 特集の魅力と選び方 */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200 space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
            <Award className="w-6 h-6 text-amber-600" />
            博多名物水炊き＆呼子イカ会席と福岡名湯宿の楽しみ方＆おすすめの選び方
          </h2>
          <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
            楽天トラベルに寄せられたリアルな宿泊者口コミの中から、特に評価の高いハイクラス宿・隠れ家宿を厳選。テーマに特化した最高峰の体験とおもてなしをお約束します。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
            <div className="bg-amber-50/60 p-4 rounded-xl border border-amber-100">
              <h3 className="font-bold text-amber-900 text-sm mb-1">① 圧倒的な世界観と体験</h3>
              <p className="text-xs text-amber-800">ここでしか味わえない非日常の空間と贅沢なひとときを追求。</p>
            </div>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <h3 className="font-bold text-slate-900 text-sm mb-1">② 口コミ高評価の宿を厳選</h3>
              <p className="text-xs text-slate-600">総合評価★4.2以上を中心に満足度の高い宿のみをセレクト。</p>
            </div>
            <div className="bg-emerald-50/60 p-4 rounded-xl border border-emerald-100">
              <h3 className="font-bold text-emerald-900 text-sm mb-1">③ 楽天トラベル直結予約</h3>
              <p className="text-xs text-emerald-800">リアルタイムの空室・プラン・限定クーポンを今すぐチェック可能。</p>
            </div>
          </div>
        </section>

        {/* 厳選宿リスト */}
        <section className="space-y-6">
          <div className="border-l-4 border-amber-600 pl-4">
            <h2 className="text-2xl font-bold text-slate-900">
              編集部が選ぶおすすめ名宿一覧（全{hotels.length}選）
            </h2>
            <p className="text-sm text-slate-500 mt-1">楽天トラベル公式APIから最新の空室・料金情報を取得しています</p>
          </div>

          <div className="space-y-6">
            
            {/* 宿カード 1 */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow">
              <div className="md:flex">
                <div className="md:w-1/3 relative h-64 md:h-auto min-h-[240px] bg-slate-100">
                  <img
                    src="https://img.travel.rakuten.co.jp/share/HOTEL/165706/165706.jpg"
                    alt="エスペリアホテル博多"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-amber-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                    第 1 位
                  </div>
                </div>
                <div className="md:w-2/3 p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-xs text-slate-500 mb-1">
                      <span className="bg-slate-100 text-slate-700 font-medium px-2 py-0.5 rounded">福岡県</span>
                      <span>福岡市博多区博多駅前2-11-4</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2 hover:text-amber-600 transition-colors">
                      <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F165706%2F165706.html" target="_blank" rel="sponsored noopener noreferrer">
                        エスペリアホテル博多
                      </a>
                    </h3>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center text-amber-500">
                        <Star className="w-4 h-4 fill-amber-400" />
                        <span className="font-bold text-sm ml-1 text-slate-800">4.21</span>
                      </div>
                      <span className="text-xs text-slate-400">（口コミ 1787 件）</span>
                      <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">楽天高評価</span>
                    </div>
                    <ul className="space-y-1 mb-4 text-xs text-slate-600 bg-slate-50 p-3 rounded-lg">
                      <li className="flex items-start gap-1"><span className="text-amber-500 shrink-0">•</span><span>割引クーポン配布中。バス・トイレ・洗面台が独立、高セキュリティーのＩＣカードシステム導入。…</span></li>
                      <li className="flex items-start gap-1"><span className="text-amber-500 shrink-0">•</span><span>アクセス: 地下鉄「博多駅」P５番出口より徒歩約分。JR「博多駅」より徒歩約５分、福岡空港から博多へは地下鉄約１０分</span></li>
                      <li className="flex items-start gap-1"><span className="text-amber-500 shrink-0">•</span><span>楽天トラベル総合評価: ★4.21（レビュー 1787件）</span></li>
                    </ul>
                  </div>
                  
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="text-xs text-slate-400">最安目安（税込）/人</span>
                      <div className="text-lg font-bold text-rose-600">¥7,380〜</div>
                    </div>
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F165706%2F165706.html%26f_flg%3DPLAN"
                      target="_blank"
                      rel="sponsored noopener noreferrer"
                      className="inline-flex items-center gap-1 bg-amber-600 hover:bg-amber-700 text-white font-bold text-sm px-5 py-2.5 rounded-xl shadow-sm transition-all"
                    >
                      <span>プラン・空室を見る</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* 宿カード 2 */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow">
              <div className="md:flex">
                <div className="md:w-1/3 relative h-64 md:h-auto min-h-[240px] bg-slate-100">
                  <img
                    src="https://img.travel.rakuten.co.jp/share/HOTEL/180583/180583.jpg"
                    alt="ホテル・トリフィート博多祇園"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-amber-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                    第 2 位
                  </div>
                </div>
                <div className="md:w-2/3 p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-xs text-slate-500 mb-1">
                      <span className="bg-slate-100 text-slate-700 font-medium px-2 py-0.5 rounded">福岡県</span>
                      <span>福岡市博多区冷泉町8-24</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2 hover:text-amber-600 transition-colors">
                      <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F180583%2F180583.html" target="_blank" rel="sponsored noopener noreferrer">
                        ホテル・トリフィート博多祇園
                      </a>
                    </h3>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center text-amber-500">
                        <Star className="w-4 h-4 fill-amber-400" />
                        <span className="font-bold text-sm ml-1 text-slate-800">4.15</span>
                      </div>
                      <span className="text-xs text-slate-400">（口コミ 798 件）</span>
                      <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">楽天高評価</span>
                    </div>
                    <ul className="space-y-1 mb-4 text-xs text-slate-600 bg-slate-50 p-3 rounded-lg">
                      <li className="flex items-start gap-1"><span className="text-amber-500 shrink-0">•</span><span>■大浴場完備■自慢の朝食■ 地下鉄「祇園駅」徒歩5分「櫛田神社前」徒歩6分■3名宿泊可■無料WIFI…</span></li>
                      <li className="flex items-start gap-1"><span className="text-amber-500 shrink-0">•</span><span>アクセス: ■地下鉄「祇園駅」徒歩5分■西鉄バス停「奥の堂」徒歩3分■福岡空港 地下鉄利用で最短15分■マリンメッセまでバスで7分</span></li>
                      <li className="flex items-start gap-1"><span className="text-amber-500 shrink-0">•</span><span>楽天トラベル総合評価: ★4.15（レビュー 798件）</span></li>
                    </ul>
                  </div>
                  
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="text-xs text-slate-400">最安目安（税込）/人</span>
                      <div className="text-lg font-bold text-rose-600">¥5,370〜</div>
                    </div>
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F180583%2F180583.html%26f_flg%3DPLAN"
                      target="_blank"
                      rel="sponsored noopener noreferrer"
                      className="inline-flex items-center gap-1 bg-amber-600 hover:bg-amber-700 text-white font-bold text-sm px-5 py-2.5 rounded-xl shadow-sm transition-all"
                    >
                      <span>プラン・空室を見る</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* 宿カード 3 */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow">
              <div className="md:flex">
                <div className="md:w-1/3 relative h-64 md:h-auto min-h-[240px] bg-slate-100">
                  <img
                    src="https://img.travel.rakuten.co.jp/share/HOTEL/41372/41372.jpg"
                    alt="西鉄ホテル　クルーム博多"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-amber-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                    第 3 位
                  </div>
                </div>
                <div className="md:w-2/3 p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-xs text-slate-500 mb-1">
                      <span className="bg-slate-100 text-slate-700 font-medium px-2 py-0.5 rounded">福岡県</span>
                      <span>福岡市博多区博多駅前一丁目１７番６号</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2 hover:text-amber-600 transition-colors">
                      <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F41372%2F41372.html" target="_blank" rel="sponsored noopener noreferrer">
                        西鉄ホテル　クルーム博多
                      </a>
                    </h3>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center text-amber-500">
                        <Star className="w-4 h-4 fill-amber-400" />
                        <span className="font-bold text-sm ml-1 text-slate-800">4.27</span>
                      </div>
                      <span className="text-xs text-slate-400">（口コミ 6902 件）</span>
                      <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">楽天高評価</span>
                    </div>
                    <ul className="space-y-1 mb-4 text-xs text-slate-600 bg-slate-50 p-3 rounded-lg">
                      <li className="flex items-start gap-1"><span className="text-amber-500 shrink-0">•</span><span>天然温泉・サウナ完備／博多駅すぐ隣／開放的で居心地のよいロビー空間／コンビニ併設…</span></li>
                      <li className="flex items-start gap-1"><span className="text-amber-500 shrink-0">•</span><span>アクセス: ＪＲ　博多駅「博多口」より徒歩約４分    　　　地下鉄　博多駅「西４番出口」より徒歩約４分</span></li>
                      <li className="flex items-start gap-1"><span className="text-amber-500 shrink-0">•</span><span>楽天トラベル総合評価: ★4.27（レビュー 6902件）</span></li>
                    </ul>
                  </div>
                  
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="text-xs text-slate-400">最安目安（税込）/人</span>
                      <div className="text-lg font-bold text-rose-600">¥9,000〜</div>
                    </div>
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F41372%2F41372.html%26f_flg%3DPLAN"
                      target="_blank"
                      rel="sponsored noopener noreferrer"
                      className="inline-flex items-center gap-1 bg-amber-600 hover:bg-amber-700 text-white font-bold text-sm px-5 py-2.5 rounded-xl shadow-sm transition-all"
                    >
                      <span>プラン・空室を見る</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* 宿カード 4 */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow">
              <div className="md:flex">
                <div className="md:w-1/3 relative h-64 md:h-auto min-h-[240px] bg-slate-100">
                  <img
                    src="https://img.travel.rakuten.co.jp/share/HOTEL/179590/179590.jpg"
                    alt="ホテルリファレンス博多冷泉"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-amber-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                    第 4 位
                  </div>
                </div>
                <div className="md:w-2/3 p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-xs text-slate-500 mb-1">
                      <span className="bg-slate-100 text-slate-700 font-medium px-2 py-0.5 rounded">福岡県</span>
                      <span>福岡市博多区冷泉町9-29</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2 hover:text-amber-600 transition-colors">
                      <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F179590%2F179590.html" target="_blank" rel="sponsored noopener noreferrer">
                        ホテルリファレンス博多冷泉
                      </a>
                    </h3>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center text-amber-500">
                        <Star className="w-4 h-4 fill-amber-400" />
                        <span className="font-bold text-sm ml-1 text-slate-800">4.11</span>
                      </div>
                      <span className="text-xs text-slate-400">（口コミ 386 件）</span>
                      <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">楽天高評価</span>
                    </div>
                    <ul className="space-y-1 mb-4 text-xs text-slate-600 bg-slate-50 p-3 rounded-lg">
                      <li className="flex items-start gap-1"><span className="text-amber-500 shrink-0">•</span><span>2020年4月開業 祇園駅徒歩3分 博多駅徒歩11分。閑静でシンプルなビジネスホテルです。…</span></li>
                      <li className="flex items-start gap-1"><span className="text-amber-500 shrink-0">•</span><span>アクセス: 地下鉄祇園駅2番出口より徒歩で約3分　博多駅からも徒歩12分　福岡空港から地下鉄祇園駅までは7分</span></li>
                      <li className="flex items-start gap-1"><span className="text-amber-500 shrink-0">•</span><span>楽天トラベル総合評価: ★4.11（レビュー 386件）</span></li>
                    </ul>
                  </div>
                  
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="text-xs text-slate-400">最安目安（税込）/人</span>
                      <div className="text-lg font-bold text-rose-600">¥4,905〜</div>
                    </div>
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F179590%2F179590.html%26f_flg%3DPLAN"
                      target="_blank"
                      rel="sponsored noopener noreferrer"
                      className="inline-flex items-center gap-1 bg-amber-600 hover:bg-amber-700 text-white font-bold text-sm px-5 py-2.5 rounded-xl shadow-sm transition-all"
                    >
                      <span>プラン・空室を見る</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* 宿カード 5 */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow">
              <div className="md:flex">
                <div className="md:w-1/3 relative h-64 md:h-auto min-h-[240px] bg-slate-100">
                  <img
                    src="https://img.travel.rakuten.co.jp/share/HOTEL/177601/177601.jpg"
                    alt="ホテルトラッド博多"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-amber-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                    第 5 位
                  </div>
                </div>
                <div className="md:w-2/3 p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-xs text-slate-500 mb-1">
                      <span className="bg-slate-100 text-slate-700 font-medium px-2 py-0.5 rounded">福岡県</span>
                      <span>福岡市博多区住吉3-12-1</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2 hover:text-amber-600 transition-colors">
                      <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F177601%2F177601.html" target="_blank" rel="sponsored noopener noreferrer">
                        ホテルトラッド博多
                      </a>
                    </h3>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center text-amber-500">
                        <Star className="w-4 h-4 fill-amber-400" />
                        <span className="font-bold text-sm ml-1 text-slate-800">4.32</span>
                      </div>
                      <span className="text-xs text-slate-400">（口コミ 1012 件）</span>
                      <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">楽天高評価</span>
                    </div>
                    <ul className="space-y-1 mb-4 text-xs text-slate-600 bg-slate-50 p-3 rounded-lg">
                      <li className="flex items-start gap-1"><span className="text-amber-500 shrink-0">•</span><span>ツイン以上はバス・トイレ・洗面台がセパレート！朝は博多駅まで無料シャトルバス運行中！…</span></li>
                      <li className="flex items-start gap-1"><span className="text-amber-500 shrink-0">•</span><span>アクセス: 博多駅から散歩気分で徒歩12分。バスは「博多駅前Ａ（300番台）・Ｂ乗場」から約5分「住吉」バス停下車、すぐ。</span></li>
                      <li className="flex items-start gap-1"><span className="text-amber-500 shrink-0">•</span><span>楽天トラベル総合評価: ★4.32（レビュー 1012件）</span></li>
                    </ul>
                  </div>
                  
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="text-xs text-slate-400">最安目安（税込）/人</span>
                      <div className="text-lg font-bold text-rose-600">¥6,160〜</div>
                    </div>
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F177601%2F177601.html%26f_flg%3DPLAN"
                      target="_blank"
                      rel="sponsored noopener noreferrer"
                      className="inline-flex items-center gap-1 bg-amber-600 hover:bg-amber-700 text-white font-bold text-sm px-5 py-2.5 rounded-xl shadow-sm transition-all"
                    >
                      <span>プラン・空室を見る</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 関連タグ */}
        <section className="bg-white rounded-2xl p-6 border border-slate-200">
          <h3 className="text-sm font-bold text-slate-700 mb-3">関連キーワード・タグ</h3>
          <div className="flex flex-wrap gap-2">
            <span className="text-xs bg-slate-100 text-slate-600 px-3 py-1.5 rounded-lg">#博多水炊き</span>
            <span className="text-xs bg-slate-100 text-slate-600 px-3 py-1.5 rounded-lg">#呼子イカ</span>
            <span className="text-xs bg-slate-100 text-slate-600 px-3 py-1.5 rounded-lg">#博多温泉</span>
            <span className="text-xs bg-slate-100 text-slate-600 px-3 py-1.5 rounded-lg">#福岡グルメ</span>
            <span className="text-xs bg-slate-100 text-slate-600 px-3 py-1.5 rounded-lg">#サウナホテル</span>
            <span className="text-xs bg-slate-100 text-slate-600 px-3 py-1.5 rounded-lg">#楽天トラベル</span>
          </div>
        </section>

        {/* 特集トップへのリンク */}
        <div className="text-center pt-4">
          <Link
            href="/features"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-bold px-8 py-4 rounded-2xl shadow-md transition-all"
          >
            <span>他の厳選特集一覧を見る</span>
            <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200/80 mb-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-xl md:text-2xl font-bold text-stone-900">
              【1泊2日】エスペリアホテル博多を拠点にするおすすめ滞在モデルコース
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-l-2 border-amber-500 pl-4 md:pl-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="bg-amber-600 text-white text-xs font-bold px-2.5 py-1 rounded">1日目</span>
                <h3 className="font-bold text-stone-900 text-base md:text-lg">到着〜チェックインと名湯巡り</h3>
              </div>
              <ul className="text-xs md:text-sm text-stone-600 space-y-2 leading-relaxed">
                <li>・<strong className="text-stone-800">14:00〜</strong> 福岡県福岡市博多区博多駅前2-11-4へ到着後、チェックイン前の散策へ。</li>
                <li>・<strong className="text-stone-800">15:30〜</strong> 「エスペリアホテル博多」にチェックイン。割引クーポン配布中。バス・トイレ・洗面台が独立、高セキュリティーのＩＣカードシステム導入。などの宿の特徴に期待を高めつつ客室へ。</li>
                <li>・<strong className="text-stone-800">17:00〜</strong> 「エスペリアホテル博多」の湯処へ。割引クーポン配布中。バス・トイレ・洗面台が独立、高セキュリティーのＩＣとともに、夕暮れの特別な寛ぎを満喫。</li>
                <li>・<strong className="text-stone-800">19:00〜</strong> 「エスペリアホテル博多」でいただく旬の夕食。地場産の味覚を取り入れたおもてなし料理を五感でじっくり味わう贅沢なひととき。</li>
              </ul>
            </div>
            <div className="border-l-2 border-teal-500 pl-4 md:pl-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="bg-teal-600 text-white text-xs font-bold px-2.5 py-1 rounded">2日目</span>
                <h3 className="font-bold text-stone-900 text-base md:text-lg">爽快な朝湯〜周辺散策と帰路へ</h3>
              </div>
              <ul className="text-xs md:text-sm text-stone-600 space-y-2 leading-relaxed">
                <li>・<strong className="text-stone-800">07:00〜</strong> 朝の光が差し込む「エスペリアホテル博多」の湯船へ。清々しい空気の中で手足を伸ばし、心地よい目覚めを迎える。</li>
                <li>・<strong className="text-stone-800">08:00〜</strong> 「エスペリアホテル博多」こだわりの朝食を堪能。炊きたてのごはんや身体に優しい料理で、一日のエネルギーをチャージ。</li>
                <li>・<strong className="text-stone-800">10:00〜</strong> チェックアウト後は近隣エリアを観光。本記事でご紹介した「西鉄ホテル クルーム博多」の周辺スポットや名産店に立ち寄り、お土産を選んで帰路へ。</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-stone-50 rounded-2xl p-6 md:p-10 border border-stone-200/80 mb-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              よくある質問（FAQ）とエスペリアホテル博多の滞在ポイント
            </h2>
          </div>
          <div className="space-y-4">
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 「エスペリアホテル博多」へのアクセスや移動方法について</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 「エスペリアホテル博多」へは、公共交通機関またはお車でのアクセスが可能です。詳しい送迎情報や道順は楽天トラベルの最新宿情報をご確認ください。
              </p>
            </details>
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 「エスペリアホテル博多」の魅力や予約時のポイントは？</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 「エスペリアホテル博多」は『割引クーポン配布中。バス・トイレ・洗面台が独立、高セキュリティーのＩＣカードシステム導入。』という点が旅行者から高く支持されています。連休や人気シーズンは予約が集中しやすいため、空室状況はお早めのチェックが安心です。
              </p>
            </details>
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. プラン選びや宿の比較で意識すべき点は？</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 「エスペリアホテル博多」と「西鉄ホテル クルーム博多」はそれぞれ立地や施設設備に独自の魅力があります。湯巡り重視か、料理やお部屋の寛ぎ重視かなど、今回の旅の目的に合わせてお選びください。
              </p>
            </details>
          </div>
        </section>

        {/* Internal Link Mesh: Related Features & Prefectures */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200/80">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-xl md:text-2xl font-bold text-stone-900">
              あわせて読みたい人気特集＆全国エリアガイド
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <a href="/furusato-tax-aomori-hirosaki-tsugaru-autumn-stay/" className="block p-4 rounded-xl bg-stone-50 hover:bg-amber-50 border border-stone-200 transition group">
              <span className="text-[10px] font-bold text-amber-700 block mb-1">関連特集ガイド</span>
              <span className="text-xs font-bold text-stone-800 group-hover:text-amber-800 line-clamp-2 leading-relaxed">青森・弘前城菊と紅葉まつり＆津軽の秋！岩木山麓温泉と津軽りんご収穫・極上大間まぐろ</span>
            </a>
            <a href="/furusato-tax-three-great-beautiful-forests-stay/" className="block p-4 rounded-xl bg-stone-50 hover:bg-amber-50 border border-stone-200 transition group">
              <span className="text-[10px] font-bold text-amber-700 block mb-1">関連特集ガイド</span>
              <span className="text-xs font-bold text-stone-800 group-hover:text-amber-800 line-clamp-2 leading-relaxed">日本三大美林＆天然木アロマと森林浴・癒やしのリトリート温泉宿×ふるさと納税厳選ガイド青森ヒバ・秋田スギ・木曽ヒノキ</span>
            </a>
            <a href="/winter-aomori-asamushi-onsen-mutsu-bay-maguro-stay/" className="block p-4 rounded-xl bg-stone-50 hover:bg-amber-50 border border-stone-200 transition group">
              <span className="text-[10px] font-bold text-amber-700 block mb-1">関連特集ガイド</span>
              <span className="text-xs font-bold text-stone-800 group-hover:text-amber-800 line-clamp-2 leading-relaxed">浅虫温泉で過ごす冬の旅（11・12月）！津軽海峡冬本マグロ！名宿5選</span>
            </a>
            <a href="/aomori-asamushi-solo-retreat-mutsubay-onsen-stay/" className="block p-4 rounded-xl bg-stone-50 hover:bg-amber-50 border border-stone-200 transition group">
              <span className="text-[10px] font-bold text-amber-700 block mb-1">関連特集ガイド</span>
              <span className="text-xs font-bold text-stone-800 group-hover:text-amber-800 line-clamp-2 leading-relaxed">青森の奥座敷・浅虫温泉ひとり旅・陸奥湾夕日おこもり：開湯1200年名湯・津軽三味線生演奏・名物陸奥湾ホタテづくし！青い森鉄道直通の海辺厳選3宿</span>
            </a>
          </div>
          <div className="pt-6 border-t border-stone-100">
            <h3 className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-3">人気の都道府県から宿を探す</h3>
            <div className="flex flex-wrap gap-2">
              <Link
                href="/prefectures/aomori/"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                青森県の宿・温泉
              </Link>
              <Link
                href="/prefectures/hiroshima/"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                広島県の宿・温泉
              </Link>
              <Link
                href="/prefectures/akita/"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                秋田県の宿・温泉
              </Link>
              <Link
                href="/prefectures/kochi/"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                高知県の宿・温泉
              </Link>
            </div>
          </div>
        </section>

      
        {/* Enriched Rakuten API & Wikipedia Tourist Guide */}
        <section data-enriched-rakuten-wiki="true" className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200 space-y-8 my-10">
          <div className="space-y-2 border-b border-stone-200 pb-4">
            <span className="text-[11px] font-extrabold text-amber-700 bg-amber-50 border border-amber-200 px-3 py-0.5 rounded-full uppercase">
              RAKUTEN TRAVEL API &amp; LOCAL GUIDE
            </span>
            <h2 className="text-xl md:text-2xl font-bold text-stone-900">
              📊 2026年：博多名物・濃厚鶏白湯水炊き！呼子イカ活造り＆福岡名湯・サウナの極上宿5選：掲載宿スペック一覧比較表＆宿泊者クチコミ・アクセス詳細分析
            </h2>
            <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
              楽天トラベル公式APIより取得した「2026年：博多名物・濃厚鶏白湯水炊き！呼子イカ活造り＆福岡名湯・サウナの極上宿5選」掲載宿の所在地・最寄り駅・駐車場条件・クチコミ評価・参考最安料金を一覧で比較できます。公共交通機関（新幹線・在来線・送迎バス）利用の方もマイカー・レンタカー利用の方も、旅のスタイルに合った一軒をお選びください。
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
                <td className="p-3 font-bold text-stone-900">1. エスペリアホテル博多</td>
                <td className="p-3 text-stone-600">福岡県福岡市博多区博多駅前2-11-4</td>
                <td className="p-3 text-stone-600"></td>
                <td className="p-3 text-stone-600">施設へ要確認</td>
                <td className="p-3 font-bold text-amber-600">★4.2（1738件）</td>
                <td className="p-3 font-bold text-rose-600">¥6,776〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F165706%2F165706.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">2. ホテル・トリフィート博多祇園</td>
                <td className="p-3 text-stone-600">福岡県福岡市博多区冷泉町8-24</td>
                <td className="p-3 text-stone-600">祇園（福岡）駅周辺</td>
                <td className="p-3 text-stone-600">有り（屋外/高さ制限無し）　7台　1980円（税込み/泊）　先着順（事前予約不可）</td>
                <td className="p-3 font-bold text-amber-600">★4.18（767件）</td>
                <td className="p-3 font-bold text-rose-600">¥4,850〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F180583%2F180583.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">3. 西鉄ホテル　クルーム博多</td>
                <td className="p-3 text-stone-600">福岡県福岡市博多区博多駅前一丁目１７番６号</td>
                <td className="p-3 text-stone-600">博多駅周辺</td>
                <td className="p-3 text-stone-600">１泊1台２，０００円（税込）14:30～翌12：30</td>
                <td className="p-3 font-bold text-amber-600">★4.24（6869件）</td>
                <td className="p-3 font-bold text-rose-600">¥7,600〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F41372%2F41372.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">4. ホテルリファレンス博多冷泉</td>
                <td className="p-3 text-stone-600">福岡県福岡市博多区冷泉町9-29</td>
                <td className="p-3 text-stone-600">祇園（福岡）駅周辺</td>
                <td className="p-3 text-stone-600">先着順 6台 ご宿泊者様は1泊1,500円(チェックアウトまで) 通常25分200円(最大料金無し)</td>
                <td className="p-3 font-bold text-amber-600">★4.11（372件）</td>
                <td className="p-3 font-bold text-rose-600">¥5,040〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F179590%2F179590.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">5. ホテルトラッド博多</td>
                <td className="p-3 text-stone-600">福岡県福岡市博多区住吉3-12-1</td>
                <td className="p-3 text-stone-600">博多駅周辺</td>
                <td className="p-3 text-stone-600">タワー式22台：先着順 15時～11時30分 税込1500円現金のみ 入出庫不可(22時～7時)</td>
                <td className="p-3 font-bold text-amber-600">★4.31（999件）</td>
                <td className="p-3 font-bold text-rose-600">¥6,600〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F177601%2F177601.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              </tbody>
            </table>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold text-stone-900 border-l-4 border-amber-600 pl-3">
              🏨 各宿の宿泊者リアルクチコミ・客室イメージ・項目別評価データ
            </h3>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #1</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">エスペリアホテル博多</h3>
                  <span className="text-xs text-stone-400 ml-2">（えすぺりあほてるはかた）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥6,776〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/165706/165706.jpg" alt="エスペリアホテル博多 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>割引クーポン配布中。バス・トイレ・洗面台が独立、高セキュリティーのＩＣカードシステム導入。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 福岡県福岡市博多区博多駅前2-11-4 ／ 最寄り駅：主要駅 ／ 交通案内：</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り（詳細はプラン画面参照）</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「博多駅近くでセキュリティも安心、備品も充実博多駅からも徒歩圏内にあるホテルカードキー方式になっており、エレベーターもルームカードキーをかざすと宿泊階にしか止まらない仕組みになっている。おの…　2026-09-04 20:28:30投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #2</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">ホテル・トリフィート博多祇園</h3>
                  <span className="text-xs text-stone-400 ml-2">（ほてるとりふぃーとはかたぎおん）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥4,850〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/180583/180583.jpg" alt="ホテル・トリフィート博多祇園 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>■大浴場完備■自慢の朝食■ 地下鉄「祇園駅」徒歩5分「櫛田神社前」徒歩6分■3名宿泊可■無料WIFI</p>
                  <p><strong>【所在地・アクセス】</strong>〒 福岡県福岡市博多区冷泉町8-24 ／ 最寄り駅：祇園（福岡） ／ 交通案内：■地下鉄「祇園駅」徒歩5分■西鉄バス停「奥の堂」徒歩3分■福岡空港 地下鉄利用で最短15分■マリンメッセまでバスで7分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り（屋外/高さ制限無し）　7台　1980円（税込み/泊）　先着順（事前予約不可）</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「部屋を含めた設備はWEB掲載通りで期待外れはありませんでした。風呂はマイナスコメント多くありましたが十分に広く空いていました。フロントの方も親切に対応頂きました。朝食は大満足です。一点マイナスは廊下に…　2026-08-20 20:29:44投稿 &lt;a href=&quot;https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=180583&quot; class=&quot;3clic」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #3</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">西鉄ホテル　クルーム博多</h3>
                  <span className="text-xs text-stone-400 ml-2">（にしてつほてる　くるーむはかた）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥7,600〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/41372/41372_dai.jpg" alt="西鉄ホテル　クルーム博多 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>天然温泉・サウナ完備／博多駅すぐ隣／開放的で居心地のよいロビー空間／コンビニ併設</p>
                  <p><strong>【所在地・アクセス】</strong>〒 福岡県福岡市博多区博多駅前一丁目１７番６号 ／ 最寄り駅：博多 ／ 交通案内：ＪＲ　博多駅「博多口」より徒歩約４分    　　　地下鉄　博多駅「西４番出口」より徒歩約４分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>１泊1台２，０００円（税込）14:30～翌12：30</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「ユニットバスの臭いが気になるが全体的に満足気になったのは、物っ凄くユニットバスが臭かった点です。何が臭いのか分からず備え付けのスプレーをかけても、不快感は拭えなかった。手の届く範囲で、拭いて取れる…　2026-08-17 19:22:26投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #4</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">ホテルリファレンス博多冷泉</h3>
                  <span className="text-xs text-stone-400 ml-2">（ほてるりふぁれんすはかたれいせん）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥5,040〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/179590/179590_kan1.jpg" alt="ホテルリファレンス博多冷泉 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>2020年4月開業 祇園駅徒歩3分 博多駅徒歩11分。閑静でシンプルなビジネスホテルです。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 福岡県福岡市博多区冷泉町9-29 ／ 最寄り駅：祇園（福岡） ／ 交通案内：地下鉄祇園駅2番出口より徒歩で約3分　博多駅からも徒歩12分　福岡空港から地下鉄祇園駅までは7分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>先着順 6台 ご宿泊者様は1泊1,500円(チェックアウトまで) 通常25分200円(最大料金無し)</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「お風呂が少し狭く感じた風呂が狭かったクチコミの詳細はこちらから　https://review.travel.rakuten.co.jp/hotel/voice/179590?reviewId=…　2026-08-22 17:01:01投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #5</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">ホテルトラッド博多</h3>
                  <span className="text-xs text-stone-400 ml-2">（とらっどはかた）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥6,600〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/177601/177601.jpg" alt="ホテルトラッド博多 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>ツイン以上はバス・トイレ・洗面台がセパレート！朝は博多駅まで無料シャトルバス運行中！</p>
                  <p><strong>【所在地・アクセス】</strong>〒 福岡県福岡市博多区住吉3-12-1 ／ 最寄り駅：博多 ／ 交通案内：博多駅から散歩気分で徒歩12分。バスは「博多駅前Ａ（300番台）・Ｂ乗場」から約5分「住吉」バス停下車、すぐ。</p>
                  <p><strong>【駐車場・マイカー利用】</strong>タワー式22台：先着順 15時～11時30分 税込1500円現金のみ 入出庫不可(22時～7時)</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「館内は非常にきれいでサービスも良好館内も非常にきれいで、サービスも良かったです。クチコミの詳細はこちらから　https://review.travel.rakuten.co.jp/hotel/…　2026-08-11 21:59:36投稿」
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-6 border-t border-stone-200">
            <h3 className="text-lg font-bold text-stone-900 border-l-4 border-teal-600 pl-3">
              🗺️ あわせて巡りたい！青森県の代表的な観光名所・歴史自然ガイド（Wikipedia公認画像・解説）
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              宿泊前後の1泊2日・2泊3日モデルコースに組み込みたい、青森県を代表する名所・絶景スポットの解説です。チェックイン前後の荷物預かりや駅周辺のレンタカー・周遊バスを活用すると効率よく巡ることができます。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #1</span>
                <h3 className="text-base font-bold text-stone-900">弘前公園（弘前城）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">日本屈指の桜の名所として知られる城郭公園。春には約2,600本の桜が咲き誇り、お堀を埋め尽くす「花いかだ」の幻想的な景色は世界中から絶賛されています。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              <div className="aspect-video relative overflow-hidden bg-stone-200"><img src="https://thumb.wikimedia.org/wikipedia/commons/thumb/6/63/Oirase-keiryu.jpg/1280px-Oirase-keiryu.jpg?utm_source=ja.wikipedia.org&amp;utm_campaign=api&amp;utm_content=thumbnail" alt="奥入瀬渓流" className="w-full h-full object-cover" loading="lazy" /></div>
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #2</span>
                <h3 className="text-base font-bold text-stone-900">奥入瀬渓流</h3>
                <p className="text-xs text-stone-600 leading-relaxed">十和田湖から流れる約14kmの美しい清流。豊かな樹木と苔むした岩々、無数の滝が織りなすせせらぎに沿って遊歩道が整備されており、極上のネイチャーウォークを楽しめます。 奥入瀬渓流（おいらせけいりゅう）は、青森県十和田市の十和田湖東岸の子ノ口（ねのくち）から北東に、焼山（十和田市法量（大字）焼山（字））までの約14 kmにわたる奥入瀬川の渓流。十和田八幡平国立公園に属する。国指定の特別名勝及び天然記念物（天然保護区域）。…</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #3</span>
                <h3 className="text-base font-bold text-stone-900">ねぶたの家 ワ・ラッセ</h3>
                <p className="text-xs text-stone-600 leading-relaxed">青森夏の風物詩「青森ねぶた祭」の歴史と魅力を一年中体感できる大型展示施設。実際に祭りで運行された大型ねぶたの迫力を間近で鑑賞できます。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #4</span>
                <h3 className="text-base font-bold text-stone-900">仏ヶ浦（ほとけがうら）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">下北半島にある、白緑色の奇岩群が約2kmにわたって続く国の名勝。巨大な如来や観音に見立てられた壮大な自然の彫刻と、澄み渡る陸奥湾の青さが圧巻です。</p>
              </div>
            </div>
            </div>
          </div>

          <div className="bg-amber-50/70 rounded-2xl p-5 md:p-6 border border-amber-200 space-y-3 text-xs text-stone-700 leading-relaxed">
            <h3 className="text-sm md:text-base font-bold text-amber-950">
              💡 青森県エリアの宿泊予約・シーズン別ベストタイミングと節約ノウハウ
            </h3>
            <p>
              <strong>1. 早期予約と楽天トラベルクーポンの併用：</strong> 青森県の人気温泉宿・リゾートホテルは、週末や連休・紅葉・年末年始の60日〜30日前から一気に予約が埋まります。毎月5と0のつく日やスーパーSALE期間中に配布される宿クーポン・自治体クーポンを併用すると、通常より最大10〜20%お得に予約可能です。
            </p>
            <p>
              <strong>2. 夕食・朝食プランと部屋タイプの選び方：</strong> 地元産の旬魚介やブランド牛会席を味わうなら「夕朝食付きプラン」、周辺の屋台・老舗居酒屋・ご当地グルメを食べ歩くなら「朝食付き」または「素泊まり＋天然温泉大浴場付きホテル」を選ぶと予算と満足度のバランスが最適化されます。
            </p>
          </div>
        </section>

      </main>
    
      <HubRelatedPosts currentSlug="traditional-hakata-mizutaki-gourmet-stay" />
</div>
  );
}
