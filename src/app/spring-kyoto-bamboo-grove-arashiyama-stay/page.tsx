import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { Star, MapPin, Sparkles, CheckCircle2, ChevronRight, Award, ExternalLink } from 'lucide-react';

export const metadata: Metadata = {
  title: '2026年：竹林の小径と渡月橋の風情。嵐山温泉＆極上京懐石を味わう京都の名旅館5選',
  description: '2026年最新！早朝の静寂に包まれる嵐山竹林の小径散策！名物湯豆腐・旬の京懐石とトロトロの嵐山温泉露天風呂で古都の風情に浸るおすすめ名宿5選。',
  keywords: ["2026年", "日本全国", "旅宿クラウド", "温泉宿", "宿泊予約", "楽天トラベル", "国内旅行"],
  openGraph: {
    title: '2026年：竹林の小径と渡月橋の風情。嵐山温泉＆極上京懐石を味わう京都の名旅館5選',
    description: '2026年最新！早朝の静寂に包まれる嵐山竹林の小径散策！名物湯豆腐・旬の京懐石とトロトロの嵐山温泉露天風呂で古都の風情に浸るおすすめ名宿5選。',
    type: 'article',
    url: 'https://croud-travel.pages.dev/spring-kyoto-bamboo-grove-arashiyama-stay',
  },
  alternates: {
    canonical: "https://croud-travel.pages.dev/spring-kyoto-bamboo-grove-arashiyama-stay/",
  },
};

const hotels: any[] = [
  {
    "hotelNo": 73923,
    "hotelName": "嵐山温泉彩四季の宿　花筏",
    "hotelKanaName": "あらしやまおんせんさいしきのやど　はないかだ",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F73923%2F73923.html",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F73923%2F73923.html%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D73923",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D73923",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/73923/73923.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/73923.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/73923/73923_bath.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/73923/73923map.gif",
    "reviewCount": 311,
    "reviewAverage": 4.18,
    "userReview": "仲居さんの親切な提案で身軽に観光できたこちらは2回目の利用でした。前回は3~4年前に家族3人で冬だったので、今回は暑い夏でお食事は、夜は部屋食で少し違っていて美味しかったです。朝食は湯豆腐が出。",
    "hotelMinCharge": 24035,
    "address1": "京都府",
    "address2": "京都市西京区嵐山中尾下町57",
    "telephoneNo": "075-861-0228",
    "access": "阪急嵐山駅より徒歩５分（渡月橋渡らず）、ＪＲ嵯峨嵐山駅より徒歩約１５分(渡月橋渡る)。JR京都駅３０分、阪急梅田駅５０分",
    "parkingInformation": "有り　１０台　無料　要予約。最寄りICは大原野IC(花筏まで１５分）",
    "nearestStation": "嵯峨嵐山",
    "hotelSpecial": "嵐山散策に便利な渡月橋南詰に位置し、嵐山温泉と京懐石が自慢の癒しの宿。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F73923%2F73923.html"
  },
  {
    "hotelNo": 9696,
    "hotelName": "京都　湯の花温泉　すみや亀峰菴",
    "hotelKanaName": "きょうと　ゆのはなおんせん　すみやきほうあん",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F9696%2F9696.html",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F9696%2F9696.html%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D9696",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D9696",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/9696/9696.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/9696.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/9696/9696_heya.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/9696/9696map.gif",
    "reviewCount": 279,
    "reviewAverage": 4.38,
    "userReview": "工夫された食事と露天風呂付きの広い部屋お食事内容が大変工夫されていました。お味も見た目の美しさも量も種類も満足にいただきました。露天風呂付きお部屋でしたが、広く落ち着いた雰囲気で湯量もたっぷり出て。",
    "hotelMinCharge": 24200,
    "address1": "京都府",
    "address2": "亀岡市湯の花温泉",
    "telephoneNo": "94",
    "access": "JR亀岡駅より車で２０分/京都縦貫道亀岡ICよりR372で約１０分/阪神高速池田線木部ICよりR423で約４０分",
    "parkingInformation": "有り　２０台　無料　先着順",
    "nearestStation": "亀岡",
    "hotelSpecial": "京都の旅館ならではの日本の伝統美と現代アートの空間で四季折々の京懐石とオーストリアワインを愉しむ",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F9696%2F9696.html"
  },
  {
    "hotelNo": 29131,
    "hotelName": "別府温泉　割烹旅館もみや",
    "hotelKanaName": "もみや",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F29131%2F29131.html",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F29131%2F29131.html%26f_flg%3DPLAN",
    "dpPlanListUrl": "",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D29131",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/29131/29131.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/29131.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/29131/29131_b.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/29131/29131map.gif",
    "reviewCount": 19,
    "reviewAverage": 5,
    "userReview": "",
    "hotelMinCharge": 23370,
    "address1": "大分県",
    "address2": "別府市上田の湯町５－２２",
    "telephoneNo": "21",
    "access": "日豊本線・別府駅～タクシーで２、３分/徒歩１０分",
    "parkingInformation": "有り　２０台　無料　",
    "nearestStation": "別府（大分）",
    "hotelSpecial": "古き良き別府の面影を今に残す街上田の湯の一角にあり、静かな時間をゆっくり過ごして頂くのがモットーです",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F29131%2F29131.html"
  },
  {
    "hotelNo": 187409,
    "hotelName": "修善寺　離れ宿　鬼の栖",
    "hotelKanaName": "しゅぜんじ　はなれやど　おにのすみか",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F187409%2F187409.html",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F187409%2F187409.html%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D187409",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D187409",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/187409/187409.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/187409.jpg",
    "roomImageUrl": "",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/187409/187409map.gif",
    "reviewCount": 13,
    "reviewAverage": 5,
    "userReview": "",
    "hotelMinCharge": 37000,
    "address1": "静岡県",
    "address2": "伊豆市修善寺1163",
    "telephoneNo": "51",
    "access": "伊豆箱根鉄道駿豆線「修善寺駅」駅からタクシーで約10分。",
    "parkingInformation": "有り　15台　無料　先着順",
    "nearestStation": "修善寺",
    "hotelSpecial": "風情漂う日本庭園と全室離れの各お部屋には専用風呂あり。修善寺の奥座敷、大人の離れ宿をご堪能ください。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F187409%2F187409.html"
  },
  {
    "hotelNo": 139802,
    "hotelName": "料亭旅館　京平荘",
    "hotelKanaName": "りょうていりょかん　きょうへいそう",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F139802%2F139802.html",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F139802%2F139802.html%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D139802",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D139802",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/139802/139802.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/139802.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/139802/139802_ara.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/139802/139802map.gif",
    "reviewCount": 12,
    "reviewAverage": 2.33,
    "userReview": "",
    "hotelMinCharge": 37510,
    "address1": "三重県",
    "address2": "伊勢市通町511",
    "telephoneNo": "88",
    "access": "宇治山田駅からお車にて７分",
    "parkingInformation": "有り　２０台　無料　予約不要",
    "nearestStation": "宇治山田",
    "hotelSpecial": "本格数寄屋造りの佇まいの中で味わう懐石料理。館内全て畳の廊下と畳階段。平安時代に思いを馳せて白足袋で贅沢にお過ごし下さい",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F139802%2F139802.html"
  }
];

export default function FeatureDetailPage() {

  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【2026年】竹林の小径と渡月橋の風情。嵐山温泉＆極上京懐石を味わう京都の名旅館5選 | 日本全国・旅宿クラウド",
    "description": "2026年最新！早朝の静寂に包まれる嵐山竹林の小径散策！名物湯豆腐・旬の京懐石とトロトロの嵐山温泉露天風呂で古都の風情に浸るおすすめ名宿5選。",
    "url": "https://croud-travel.pages.dev/spring-kyoto-bamboo-grove-arashiyama-stay/",
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
      { "@type": "ListItem", "position": 2, "name": "【2026年】竹林の小径と渡月橋の風情。嵐山温泉＆極上京懐石を味わう京都の名旅館5選 | 日本全国・旅宿クラウド", "item": "https://croud-travel.pages.dev/spring-kyoto-bamboo-grove-arashiyama-stay/" }
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
            嵐山竹林散策＆極上京懐石の京都名湯宿
          </span>
        </div>
      </div>

      {/* ヒーローヘッダー */}
      <header className="relative bg-gradient-to-r from-amber-900 via-stone-800 to-slate-900 text-white py-16 px-4">
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-300 px-4 py-1.5 rounded-full text-sm font-semibold backdrop-blur-sm border border-amber-400/30">
            <Sparkles className="w-4 h-4" /> 嵐山竹林散策×極上京懐石名湯
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight leading-tight">「2026年」竹林の小径と渡月橋の風情。嵐山温泉＆極上京懐石を味わう京都の名旅館5選</h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed pt-2">
            緑陰の美しい嵐山・嵯峨野の竹林の小径や桂川のせせらぎ。早朝の澄んだ空気の中で古都の情緒を独占し、出汁香る旬の京懐石や名物湯豆腐、やわらかな嵐山温泉に浸る、大人のための風雅な京都旅行。
          </p>
        </div>
      </header>

      {/* メインコンテンツ */}
      <main className="max-w-5xl mx-auto px-4 py-12 space-y-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"「嵐山温泉彩四季の宿 花筏」へのアクセスや移動方法について","acceptedAnswer":{"@type":"Answer","text":"「嵐山温泉彩四季の宿 花筏」へは、阪急嵐山駅より徒歩５分（渡月橋渡らず）、ＪＲ嵯峨嵐山駅より徒歩約１５分(渡月橋渡る)。最寄りの嵯峨嵐山駅からの経路案内も充実しています。"}},{"@type":"Question","name":"「嵐山温泉彩四季の宿 花筏」の魅力や予約時のポイントは？","acceptedAnswer":{"@type":"Answer","text":"「嵐山温泉彩四季の宿 花筏」は『嵐山散策に便利な渡月橋南詰に位置し、嵐山温泉と京懐石が自慢の癒しの宿。』という点が旅行者から高く支持されています。連休や人気シーズンは予約が集中しやすいため、空室状況はお早めのチェックが安心です。"}},{"@type":"Question","name":"プラン選びや宿の比較で意識すべき点は？","acceptedAnswer":{"@type":"Answer","text":"「嵐山温泉彩四季の宿 花筏」と「京都 湯の花温泉 すみや亀峰菴」はそれぞれ立地や施設設備に独自の魅力があります。湯巡り重視か、料理やお部屋の寛ぎ重視かなど、今回の旅の目的に合わせてお選びください。"}}]}) }}
      />
        {/* 特集の魅力と選び方 */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200 space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
            <Award className="w-6 h-6 text-amber-600" />
            嵐山竹林散策＆極上京懐石の京都名湯宿の楽しみ方＆おすすめの選び方
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
                    src="https://img.travel.rakuten.co.jp/share/HOTEL/73923/73923.jpg"
                    alt="嵐山温泉彩四季の宿　花筏"
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
                      <span className="bg-slate-100 text-slate-700 font-medium px-2 py-0.5 rounded">京都府</span>
                      <span>京都市西京区嵐山中尾下町57</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2 hover:text-amber-600 transition-colors">
                      <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F73923%2F73923.html" target="_blank" rel="sponsored noopener noreferrer">
                        嵐山温泉彩四季の宿　花筏
                      </a>
                    </h3>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center text-amber-500">
                        <Star className="w-4 h-4 fill-amber-400" />
                        <span className="font-bold text-sm ml-1 text-slate-800">4.18</span>
                      </div>
                      <span className="text-xs text-slate-400">（口コミ 311 件）</span>
                      <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">楽天高評価</span>
                    </div>
                    <ul className="space-y-1 mb-4 text-xs text-slate-600 bg-slate-50 p-3 rounded-lg">
                      <li className="flex items-start gap-1"><span className="text-amber-500 shrink-0">•</span><span>嵐山散策に便利な渡月橋南詰に位置し、嵐山温泉と京懐石が自慢の癒しの宿。…</span></li>
                      <li className="flex items-start gap-1"><span className="text-amber-500 shrink-0">•</span><span>アクセス: 阪急嵐山駅より徒歩５分（渡月橋渡らず）、ＪＲ嵯峨嵐山駅より徒歩約１５分(渡月橋渡る)。JR京都駅３０分、阪急梅田駅５０分</span></li>
                      <li className="flex items-start gap-1"><span className="text-amber-500 shrink-0">•</span><span>楽天トラベル総合評価: ★4.18（レビュー 311件）</span></li>
                    </ul>
                  </div>
                  
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="text-xs text-slate-400">最安目安（税込）/人</span>
                      <div className="text-lg font-bold text-rose-600">¥24,035〜</div>
                    </div>
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F73923%2F73923.html%26f_flg%3DPLAN"
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
                    src="https://img.travel.rakuten.co.jp/share/HOTEL/9696/9696.jpg"
                    alt="京都　湯の花温泉　すみや亀峰菴"
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
                      <span className="bg-slate-100 text-slate-700 font-medium px-2 py-0.5 rounded">京都府</span>
                      <span>亀岡市湯の花温泉</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2 hover:text-amber-600 transition-colors">
                      <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F9696%2F9696.html" target="_blank" rel="sponsored noopener noreferrer">
                        京都　湯の花温泉　すみや亀峰菴
                      </a>
                    </h3>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center text-amber-500">
                        <Star className="w-4 h-4 fill-amber-400" />
                        <span className="font-bold text-sm ml-1 text-slate-800">4.38</span>
                      </div>
                      <span className="text-xs text-slate-400">（口コミ 279 件）</span>
                      <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">楽天高評価</span>
                    </div>
                    <ul className="space-y-1 mb-4 text-xs text-slate-600 bg-slate-50 p-3 rounded-lg">
                      <li className="flex items-start gap-1"><span className="text-amber-500 shrink-0">•</span><span>京都の旅館ならではの日本の伝統美と現代アートの空間で四季折々の京懐石とオーストリアワインを愉しむ…</span></li>
                      <li className="flex items-start gap-1"><span className="text-amber-500 shrink-0">•</span><span>アクセス: JR亀岡駅より車で２０分/京都縦貫道亀岡ICよりR372で約１０分/阪神高速池田線木部ICよりR423で約４０分</span></li>
                      <li className="flex items-start gap-1"><span className="text-amber-500 shrink-0">•</span><span>楽天トラベル総合評価: ★4.38（レビュー 279件）</span></li>
                    </ul>
                  </div>
                  
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="text-xs text-slate-400">最安目安（税込）/人</span>
                      <div className="text-lg font-bold text-rose-600">¥24,200〜</div>
                    </div>
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F9696%2F9696.html%26f_flg%3DPLAN"
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
                    src="https://img.travel.rakuten.co.jp/share/HOTEL/29131/29131.jpg"
                    alt="別府温泉　割烹旅館もみや"
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
                      <span className="bg-slate-100 text-slate-700 font-medium px-2 py-0.5 rounded">大分県</span>
                      <span>別府市上田の湯町５－２２</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2 hover:text-amber-600 transition-colors">
                      <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F29131%2F29131.html" target="_blank" rel="sponsored noopener noreferrer">
                        別府温泉　割烹旅館もみや
                      </a>
                    </h3>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center text-amber-500">
                        <Star className="w-4 h-4 fill-amber-400" />
                        <span className="font-bold text-sm ml-1 text-slate-800">5.00</span>
                      </div>
                      <span className="text-xs text-slate-400">（口コミ 19 件）</span>
                      <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">楽天高評価</span>
                    </div>
                    <ul className="space-y-1 mb-4 text-xs text-slate-600 bg-slate-50 p-3 rounded-lg">
                      <li className="flex items-start gap-1"><span className="text-amber-500 shrink-0">•</span><span>古き良き別府の面影を今に残す街上田の湯の一角にあり、静かな時間をゆっくり過ごして頂くのがモットーです…</span></li>
                      <li className="flex items-start gap-1"><span className="text-amber-500 shrink-0">•</span><span>アクセス: 日豊本線・別府駅～タクシーで２、３分/徒歩１０分</span></li>
                      <li className="flex items-start gap-1"><span className="text-amber-500 shrink-0">•</span><span>楽天トラベル総合評価: ★5.00（レビュー 19件）</span></li>
                    </ul>
                  </div>
                  
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="text-xs text-slate-400">最安目安（税込）/人</span>
                      <div className="text-lg font-bold text-rose-600">¥23,370〜</div>
                    </div>
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F29131%2F29131.html%26f_flg%3DPLAN"
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
                    src="https://img.travel.rakuten.co.jp/share/HOTEL/187409/187409.jpg"
                    alt="修善寺　離れ宿　鬼の栖"
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
                      <span className="bg-slate-100 text-slate-700 font-medium px-2 py-0.5 rounded">静岡県</span>
                      <span>伊豆市修善寺1163</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2 hover:text-amber-600 transition-colors">
                      <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F187409%2F187409.html" target="_blank" rel="sponsored noopener noreferrer">
                        修善寺　離れ宿　鬼の栖
                      </a>
                    </h3>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center text-amber-500">
                        <Star className="w-4 h-4 fill-amber-400" />
                        <span className="font-bold text-sm ml-1 text-slate-800">5.00</span>
                      </div>
                      <span className="text-xs text-slate-400">（口コミ 13 件）</span>
                      <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">楽天高評価</span>
                    </div>
                    <ul className="space-y-1 mb-4 text-xs text-slate-600 bg-slate-50 p-3 rounded-lg">
                      <li className="flex items-start gap-1"><span className="text-amber-500 shrink-0">•</span><span>風情漂う日本庭園と全室離れの各お部屋には専用風呂あり。修善寺の奥座敷、大人の離れ宿をご堪能ください。…</span></li>
                      <li className="flex items-start gap-1"><span className="text-amber-500 shrink-0">•</span><span>アクセス: 伊豆箱根鉄道駿豆線「修善寺駅」駅からタクシーで約10分。</span></li>
                      <li className="flex items-start gap-1"><span className="text-amber-500 shrink-0">•</span><span>楽天トラベル総合評価: ★5.00（レビュー 13件）</span></li>
                    </ul>
                  </div>
                  
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="text-xs text-slate-400">最安目安（税込）/人</span>
                      <div className="text-lg font-bold text-rose-600">¥37,000〜</div>
                    </div>
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F187409%2F187409.html%26f_flg%3DPLAN"
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
                    src="https://img.travel.rakuten.co.jp/share/HOTEL/139802/139802.jpg"
                    alt="料亭旅館　京平荘"
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
                      <span className="bg-slate-100 text-slate-700 font-medium px-2 py-0.5 rounded">三重県</span>
                      <span>伊勢市通町511</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2 hover:text-amber-600 transition-colors">
                      <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F139802%2F139802.html" target="_blank" rel="sponsored noopener noreferrer">
                        料亭旅館　京平荘
                      </a>
                    </h3>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center text-amber-500">
                        <Star className="w-4 h-4 fill-amber-400" />
                        <span className="font-bold text-sm ml-1 text-slate-800">2.33</span>
                      </div>
                      <span className="text-xs text-slate-400">（口コミ 12 件）</span>
                      <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">楽天高評価</span>
                    </div>
                    <ul className="space-y-1 mb-4 text-xs text-slate-600 bg-slate-50 p-3 rounded-lg">
                      <li className="flex items-start gap-1"><span className="text-amber-500 shrink-0">•</span><span>本格数寄屋造りの佇まいの中で味わう懐石料理。館内全て畳の廊下と畳階段。平安時代に思いを馳せて白足袋で贅沢にお過ごし下さい…</span></li>
                      <li className="flex items-start gap-1"><span className="text-amber-500 shrink-0">•</span><span>アクセス: 宇治山田駅からお車にて７分</span></li>
                      <li className="flex items-start gap-1"><span className="text-amber-500 shrink-0">•</span><span>楽天トラベル総合評価: ★2.33（レビュー 12件）</span></li>
                    </ul>
                  </div>
                  
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="text-xs text-slate-400">最安目安（税込）/人</span>
                      <div className="text-lg font-bold text-rose-600">¥37,510〜</div>
                    </div>
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F139802%2F139802.html%26f_flg%3DPLAN"
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
            <span className="text-xs bg-slate-100 text-slate-600 px-3 py-1.5 rounded-lg">#嵐山温泉</span>
            <span className="text-xs bg-slate-100 text-slate-600 px-3 py-1.5 rounded-lg">#京都旅館</span>
            <span className="text-xs bg-slate-100 text-slate-600 px-3 py-1.5 rounded-lg">#京懐石</span>
            <span className="text-xs bg-slate-100 text-slate-600 px-3 py-1.5 rounded-lg">#竹林の小径</span>
            <span className="text-xs bg-slate-100 text-slate-600 px-3 py-1.5 rounded-lg">#渡月橋</span>
            <span className="text-xs bg-slate-100 text-slate-600 px-3 py-1.5 rounded-lg">#湯豆腐</span>
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
              【1泊2日】嵐山温泉彩四季の宿 花筏を拠点にするおすすめ滞在モデルコース
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-l-2 border-amber-500 pl-4 md:pl-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="bg-amber-600 text-white text-xs font-bold px-2.5 py-1 rounded">1日目</span>
                <h3 className="font-bold text-stone-900 text-base md:text-lg">到着〜チェックインと名湯巡り</h3>
              </div>
              <ul className="text-xs md:text-sm text-stone-600 space-y-2 leading-relaxed">
                <li>・<strong className="text-stone-800">14:00〜</strong> 嵯峨嵐山駅よりアクセス。阪急嵐山駅より徒歩５分（渡月橋渡らず）、ＪＲ嵯峨嵐山駅より徒歩約１５分(渡月橋渡る)。</li>
                <li>・<strong className="text-stone-800">15:30〜</strong> 「嵐山温泉彩四季の宿 花筏」にチェックイン。嵐山散策に便利な渡月橋南詰に位置し、嵐山温泉と京懐石が自慢の癒しの宿。などの宿の特徴に期待を高めつつ客室へ。</li>
                <li>・<strong className="text-stone-800">17:00〜</strong> 「嵐山温泉彩四季の宿 花筏」の湯処へ。嵐山散策に便利な渡月橋南詰に位置し、嵐山温泉と京懐石が自慢の癒しの宿。とともに、夕暮れの特別な寛ぎを満喫。</li>
                <li>・<strong className="text-stone-800">19:00〜</strong> 「嵐山温泉彩四季の宿 花筏」でいただく旬の夕食。地場産の味覚を取り入れたおもてなし料理を五感でじっくり味わう贅沢なひととき。</li>
              </ul>
            </div>
            <div className="border-l-2 border-teal-500 pl-4 md:pl-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="bg-teal-600 text-white text-xs font-bold px-2.5 py-1 rounded">2日目</span>
                <h3 className="font-bold text-stone-900 text-base md:text-lg">爽快な朝湯〜周辺散策と帰路へ</h3>
              </div>
              <ul className="text-xs md:text-sm text-stone-600 space-y-2 leading-relaxed">
                <li>・<strong className="text-stone-800">07:00〜</strong> 朝の光が差し込む「嵐山温泉彩四季の宿 花筏」の湯船へ。清々しい空気の中で手足を伸ばし、心地よい目覚めを迎える。</li>
                <li>・<strong className="text-stone-800">08:00〜</strong> 「嵐山温泉彩四季の宿 花筏」こだわりの朝食を堪能。炊きたてのごはんや身体に優しい料理で、一日のエネルギーをチャージ。</li>
                <li>・<strong className="text-stone-800">10:00〜</strong> チェックアウト後は近隣エリアを観光。本記事でご紹介した「京都 湯の花温泉 すみや亀峰菴」の周辺スポットや名産店に立ち寄り、お土産を選んで帰路へ。</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-stone-50 rounded-2xl p-6 md:p-10 border border-stone-200/80 mb-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              よくある質問（FAQ）と嵐山温泉彩四季の宿 花筏の滞在ポイント
            </h2>
          </div>
          <div className="space-y-4">
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 「嵐山温泉彩四季の宿 花筏」へのアクセスや移動方法について</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 「嵐山温泉彩四季の宿 花筏」へは、阪急嵐山駅より徒歩５分（渡月橋渡らず）、ＪＲ嵯峨嵐山駅より徒歩約１５分(渡月橋渡る)。最寄りの嵯峨嵐山駅からの経路案内も充実しています。
              </p>
            </details>
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 「嵐山温泉彩四季の宿 花筏」の魅力や予約時のポイントは？</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 「嵐山温泉彩四季の宿 花筏」は『嵐山散策に便利な渡月橋南詰に位置し、嵐山温泉と京懐石が自慢の癒しの宿。』という点が旅行者から高く支持されています。連休や人気シーズンは予約が集中しやすいため、空室状況はお早めのチェックが安心です。
              </p>
            </details>
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. プラン選びや宿の比較で意識すべき点は？</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 「嵐山温泉彩四季の宿 花筏」と「京都 湯の花温泉 すみや亀峰菴」はそれぞれ立地や施設設備に独自の魅力があります。湯巡り重視か、料理やお部屋の寛ぎ重視かなど、今回の旅の目的に合わせてお選びください。
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
            <a href="/gunma-kusatsu-solo-retreat-onsen-stay/" className="block p-4 rounded-xl bg-stone-50 hover:bg-amber-50 border border-stone-200 transition group">
              <span className="text-[10px] font-bold text-amber-700 block mb-1">関連特集ガイド</span>
              <span className="text-xs font-bold text-stone-800 group-hover:text-amber-800 line-clamp-2 leading-relaxed">草津温泉ひとり旅・名湯おこもり：湯畑源泉かけ流し・貸切風呂・上州和牛！日本三名泉の湯ヂカラに浸る贅沢ソロ温泉厳選3宿</span>
            </a>
            <a href="/gunma-takasaki-solo-business-onsen-stay/" className="block p-4 rounded-xl bg-stone-50 hover:bg-amber-50 border border-stone-200 transition group">
              <span className="text-[10px] font-bold text-amber-700 block mb-1">関連特集ガイド</span>
              <span className="text-xs font-bold text-stone-800 group-hover:text-amber-800 line-clamp-2 leading-relaxed">高崎出張・天然温泉サウナ：新幹線結節点・榛名の湯・高崎パスタ！上州ビジネスハブを制する厳選3宿</span>
            </a>
            <a href="/winter-gunma-kusatsu-onsen-yubatake-yukimi-joshugyu-stay/" className="block p-4 rounded-xl bg-stone-50 hover:bg-amber-50 border border-stone-200 transition group">
              <span className="text-[10px] font-bold text-amber-700 block mb-1">関連特集ガイド</span>
              <span className="text-xs font-bold text-stone-800 group-hover:text-amber-800 line-clamp-2 leading-relaxed">草津温泉で過ごす冬の旅（11・12月）！名物上州牛すき焼き！名宿5選</span>
            </a>
            <a href="/winter-gunma-takasaki-haruna-shrine-hatsumode-isobe-onsen-joshugyu-stay/" className="block p-4 rounded-xl bg-stone-50 hover:bg-amber-50 border border-stone-200 transition group">
              <span className="text-[10px] font-bold text-amber-700 block mb-1">関連特集ガイド</span>
              <span className="text-xs font-bold text-stone-800 group-hover:text-amber-800 line-clamp-2 leading-relaxed">11・12・1月群馬：奇岩の霊場「榛名神社」新春初！名宿5選</span>
            </a>
          </div>
          <div className="pt-6 border-t border-stone-100">
            <h3 className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-3">人気の都道府県から宿を探す</h3>
            <div className="flex flex-wrap gap-2">
              <Link
                href="/prefectures/tokyo/"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                東京都の宿・温泉
              </Link>
              <Link
                href="/prefectures/okayama/"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                岡山県の宿・温泉
              </Link>
              <Link
                href="/prefectures/gunma/"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                群馬県の宿・温泉
              </Link>
              <Link
                href="/prefectures/okinawa/"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                沖縄県の宿・温泉
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
              📊 2026年：竹林の小径と渡月橋の風情。嵐山温泉＆極上京懐石を味わう京都の名旅館5選：掲載宿スペック一覧比較表＆宿泊者クチコミ・アクセス詳細分析
            </h2>
            <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
              楽天トラベル公式APIより取得した「2026年：竹林の小径と渡月橋の風情。嵐山温泉＆極上京懐石を味わう京都の名旅館5選」掲載宿の所在地・最寄り駅・駐車場条件・クチコミ評価・参考最安料金を一覧で比較できます。公共交通機関（新幹線・在来線・送迎バス）利用の方もマイカー・レンタカー利用の方も、旅のスタイルに合った一軒をお選びください。
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
                <td className="p-3 font-bold text-stone-900">1. 嵐山温泉彩四季の宿　花筏</td>
                <td className="p-3 text-stone-600">京都府京都市西京区嵐山中尾下町57</td>
                <td className="p-3 text-stone-600">嵯峨嵐山駅周辺</td>
                <td className="p-3 text-stone-600">有り　１０台　無料　要予約。最寄りICは大原野IC(花筏まで１５分）</td>
                <td className="p-3 font-bold text-amber-600">★4.29（318件）</td>
                <td className="p-3 font-bold text-rose-600">¥26,400〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F73923%2F73923.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">2. 京都　湯の花温泉　すみや亀峰菴</td>
                <td className="p-3 text-stone-600">京都府亀岡市湯の花温泉</td>
                <td className="p-3 text-stone-600">亀岡駅周辺</td>
                <td className="p-3 text-stone-600">有り　２０台　無料　先着順</td>
                <td className="p-3 font-bold text-amber-600">★4.36（280件）</td>
                <td className="p-3 font-bold text-rose-600">¥24,200〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F9696%2F9696.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">3. 修善寺　離れ宿　鬼の栖</td>
                <td className="p-3 text-stone-600">静岡県伊豆市修善寺1163</td>
                <td className="p-3 text-stone-600">修善寺駅周辺</td>
                <td className="p-3 text-stone-600">有り　15台　無料　先着順</td>
                <td className="p-3 font-bold text-amber-600">★5（13件）</td>
                <td className="p-3 font-bold text-rose-600">¥40,000〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F187409%2F187409.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">4. 別府温泉　割烹旅館もみや</td>
                <td className="p-3 text-stone-600">大分県別府市上田の湯町５－２２</td>
                <td className="p-3 text-stone-600">別府（大分）駅周辺</td>
                <td className="p-3 text-stone-600">有り　２０台　無料</td>
                <td className="p-3 font-bold text-amber-600">★5（19件）</td>
                <td className="p-3 font-bold text-rose-600">¥23,370〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F29131%2F29131.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">5. 料亭旅館　京平荘</td>
                <td className="p-3 text-stone-600">三重県伊勢市通町511</td>
                <td className="p-3 text-stone-600">宇治山田駅周辺</td>
                <td className="p-3 text-stone-600">有り　２０台　無料　予約不要</td>
                <td className="p-3 font-bold text-amber-600">★2.33（12件）</td>
                <td className="p-3 font-bold text-rose-600">¥37,510〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F139802%2F139802.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
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
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">嵐山温泉彩四季の宿　花筏</h3>
                  <span className="text-xs text-stone-400 ml-2">（あらしやまおんせんさいしきのやど　はないかだ）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥26,400〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/73923/73923_bath.jpg" alt="嵐山温泉彩四季の宿　花筏 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>嵐山散策に便利な渡月橋南詰に位置し、嵐山温泉と京懐石が自慢の癒しの宿。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 京都府京都市西京区嵐山中尾下町57 ／ 最寄り駅：嵯峨嵐山 ／ 交通案内：阪急嵐山駅より徒歩５分（渡月橋渡らず）、ＪＲ嵯峨嵐山駅より徒歩約１５分(渡月橋渡る)。JR京都駅３０分、阪急梅田駅５０分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　１０台　無料　要予約。最寄りICは大原野IC(花筏まで１５分）</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.2 ／ 立地 ★4.48 ／ 部屋 ★4.2 ／ 設備 ★3.98 ／ 風呂 ★4.14 ／ 食事 ★4.59</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「部屋風呂と食事に大満足、最高の思い出に9月11日に5名で宿泊させて頂きました。部屋も綺麗で女性陣の部屋には風呂付きで予約したのですが話を聞くとかなり良い部屋風呂だったみたく大浴場には一度も行かず部…　2026-09-28 20:04:43投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #2</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">京都　湯の花温泉　すみや亀峰菴</h3>
                  <span className="text-xs text-stone-400 ml-2">（きょうと　ゆのはなおんせん　すみやきほうあん）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥24,200〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/9696/9696_heya.jpg" alt="京都　湯の花温泉　すみや亀峰菴 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>京都の旅館ならではの日本の伝統美と現代アートの空間で四季折々の京懐石とオーストリアワインを愉しむ</p>
                  <p><strong>【所在地・アクセス】</strong>〒 京都府亀岡市湯の花温泉 ／ 最寄り駅：亀岡 ／ 交通案内：JR亀岡駅より車で２０分/京都縦貫道亀岡ICよりR372で約１０分/阪神高速池田線木部ICよりR423で約４０分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　２０台　無料　先着順</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.41 ／ 立地 ★4.26 ／ 部屋 ★4.4 ／ 設備 ★4.28 ／ 風呂 ★4.35 ／ 食事 ★4.59</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「工夫された食事と露天風呂付きの広い部屋お食事内容が大変工夫されていました。お味も見た目の美しさも量も種類も満足にいただきました。露天風呂付きお部屋でしたが、広く落ち着いた雰囲気で湯量もたっぷり出て…　2026-09-17 02:13:54投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #3</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">修善寺　離れ宿　鬼の栖</h3>
                  <span className="text-xs text-stone-400 ml-2">（しゅぜんじ　はなれやど　おにのすみか）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥40,000〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/187409/187409.jpg" alt="修善寺　離れ宿　鬼の栖 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>風情漂う日本庭園と全室離れの各お部屋には専用風呂あり。修善寺の奥座敷、大人の離れ宿をご堪能ください。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 静岡県伊豆市修善寺1163 ／ 最寄り駅：修善寺 ／ 交通案内：伊豆箱根鉄道駿豆線「修善寺駅」駅からタクシーで約10分。</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　15台　無料　先着順</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「修善寺　離れ宿　鬼の栖は立地・設備・ホスピタリティのバランスに優れ、観光拠点としても記念日や週末リフレッシュ滞在としても高い満足度を得ています。」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #4</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">別府温泉　割烹旅館もみや</h3>
                  <span className="text-xs text-stone-400 ml-2">（もみや）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥23,370〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/29131/29131_b.jpg" alt="別府温泉　割烹旅館もみや 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>古き良き別府の面影を今に残す街上田の湯の一角にあり、静かな時間をゆっくり過ごして頂くのがモットーです</p>
                  <p><strong>【所在地・アクセス】</strong>〒 大分県別府市上田の湯町５－２２ ／ 最寄り駅：別府（大分） ／ 交通案内：日豊本線・別府駅～タクシーで２、３分/徒歩１０分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　２０台　無料</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「別府温泉　割烹旅館もみやは立地・設備・ホスピタリティのバランスに優れ、観光拠点としても記念日や週末リフレッシュ滞在としても高い満足度を得ています。」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #5</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">料亭旅館　京平荘</h3>
                  <span className="text-xs text-stone-400 ml-2">（りょうていりょかん　きょうへいそう）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥37,510〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/139802/139802_ara.jpg" alt="料亭旅館　京平荘 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>本格数寄屋造りの佇まいの中で味わう懐石料理。館内全て畳の廊下と畳階段。平安時代に思いを馳せて白足袋で贅沢にお過ごし下さい</p>
                  <p><strong>【所在地・アクセス】</strong>〒 三重県伊勢市通町511 ／ 最寄り駅：宇治山田 ／ 交通案内：宇治山田駅からお車にて７分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　２０台　無料　予約不要</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「料亭旅館　京平荘は立地・設備・ホスピタリティのバランスに優れ、観光拠点としても記念日や週末リフレッシュ滞在としても高い満足度を得ています。」
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-6 border-t border-stone-200">
            <h3 className="text-lg font-bold text-stone-900 border-l-4 border-teal-600 pl-3">
              🗺️ あわせて巡りたい！群馬県の代表的な観光名所・歴史自然ガイド（Wikipedia公認画像・解説）
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              宿泊前後の1泊2日・2泊3日モデルコースに組み込みたい、群馬県を代表する名所・絶景スポットの解説です。チェックイン前後の荷物預かりや駅周辺のレンタカー・周遊バスを活用すると効率よく巡ることができます。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              <div className="aspect-video relative overflow-hidden bg-stone-200"><img src="https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6b/Yubatake_%28Kusatsu_Onsen%29.jpg/1280px-Yubatake_%28Kusatsu_Onsen%29.jpg?utm_source=ja.wikipedia.org&amp;utm_campaign=api&amp;utm_content=thumbnail" alt="草津温泉（湯畑）" className="w-full h-full object-cover" loading="lazy" /></div>
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #1</span>
                <h3 className="text-base font-bold text-stone-900">草津温泉（湯畑）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">日本三名泉の一つで自然湧出量日本一を誇る温泉街のシンボル。毎分4,000リットルの源泉が湯滝となって湧き出し、湯もみ体験や夜のライトアップも人気です。 草津温泉（くさつおんせん）は、群馬県吾妻郡草津町草津界隈（江戸時代における上野国吾妻郡草津村界隈、幕藩体制下の上州御料草津村界隈〈初期は沼田藩知行〉）に所在する温泉である。草津白根山東麓に位置する。 毎分3万2300リットル以上の自然湧出量は日本一。室町時代には万里集九が有馬温泉や下呂温泉とともに「三名泉」とし、江戸時代には林羅山もこれらの三温泉を「天下の三…</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              <div className="aspect-video relative overflow-hidden bg-stone-200"><img src="https://thumb.wikimedia.org/wikipedia/commons/thumb/8/82/Ikaho_Onsen_03.jpg/1280px-Ikaho_Onsen_03.jpg?utm_source=ja.wikipedia.org&amp;utm_campaign=api&amp;utm_content=thumbnail" alt="伊香保温泉（石段街）" className="w-full h-full object-cover" loading="lazy" /></div>
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #2</span>
                <h3 className="text-base font-bold text-stone-900">伊香保温泉（石段街）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">365段の石段が続く情緒溢れる温泉街。石段の両脇には射的場や土産物店、足湯が立ち並び、温泉まんじゅう発祥の地としても知られています。 伊香保温泉（いかほおんせん）は、群馬県渋川市伊香保町にある温泉。草津温泉と並んで県を代表する名湯で、上毛かるたでは「伊香保温泉 日本の名湯」と歌われている。 「伊香保温泉」として地域団体商標に登録されている。…</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #3</span>
                <h3 className="text-base font-bold text-stone-900">富岡製糸場</h3>
                <p className="text-xs text-stone-600 leading-relaxed">明治政府が設立した日本初の本格的な製糸工場であり、世界文化遺産。木骨レンガ造りの巨大な繰糸所や蚕室が良好に保存されており、日本の近代化の足跡を辿れます。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #4</span>
                <h3 className="text-base font-bold text-stone-900">吹割の滝（ふきわれのたき）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">「東洋のナイアガラ」と称されるダイナミックな滝。巨大な岩盤が割れ目の中に河川の水が吸い込まれるように流れ落ちる迫力ある景観が魅力です。</p>
              </div>
            </div>
            </div>
          </div>

          <div className="bg-amber-50/70 rounded-2xl p-5 md:p-6 border border-amber-200 space-y-3 text-xs text-stone-700 leading-relaxed">
            <h3 className="text-sm md:text-base font-bold text-amber-950">
              💡 群馬県エリアの宿泊予約・シーズン別ベストタイミングと節約ノウハウ
            </h3>
            <p>
              <strong>1. 早期予約と楽天トラベルクーポンの併用：</strong> 群馬県の人気温泉宿・リゾートホテルは、週末や連休・紅葉・年末年始の60日〜30日前から一気に予約が埋まります。毎月5と0のつく日やスーパーSALE期間中に配布される宿クーポン・自治体クーポンを併用すると、通常より最大10〜20%お得に予約可能です。
            </p>
            <p>
              <strong>2. 夕食・朝食プランと部屋タイプの選び方：</strong> 地元産の旬魚介やブランド牛会席を味わうなら「夕朝食付きプラン」、周辺の屋台・老舗居酒屋・ご当地グルメを食べ歩くなら「朝食付き」または「素泊まり＋天然温泉大浴場付きホテル」を選ぶと予算と満足度のバランスが最適化されます。
            </p>
          </div>
        </section>

      </main>
    
      <HubRelatedPosts currentSlug="spring-kyoto-bamboo-grove-arashiyama-stay" />
</div>
  );
}
