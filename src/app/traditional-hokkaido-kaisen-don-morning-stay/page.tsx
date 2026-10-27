import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { Star, MapPin, Sparkles, CheckCircle2, ChevronRight, Award, ExternalLink } from 'lucide-react';

export const metadata: Metadata = {
  title: '2026年：朝からいくら・ウニ・ホタテかけ放題！北海道の海鮮勝手丼朝食が凄すぎるホテル5選',
  description: '2026年最新！朝食の美味しさ日本一を競う函館・札幌・小樽の海鮮バイキング！いくら盛り放題の絶品勝手丼と天然温泉展望風呂が自慢の宿5選。',
  keywords: ["2026年", "朝からいくら", "ウニ", "日本全国", "旅宿クラウド", "温泉宿", "宿泊予約"],
  openGraph: {
    title: '2026年：朝からいくら・ウニ・ホタテかけ放題！北海道の海鮮勝手丼朝食が凄すぎるホテル5選',
    description: '2026年最新！朝食の美味しさ日本一を競う函館・札幌・小樽の海鮮バイキング！いくら盛り放題の絶品勝手丼と天然温泉展望風呂が自慢の宿5選。',
    type: 'article',
    url: 'https://croud-travel.pages.dev/traditional-hokkaido-kaisen-don-morning-stay/',
  },
  alternates: {
    canonical: "https://croud-travel.pages.dev/traditional-hokkaido-kaisen-don-morning-stay/",
  },
};

const hotels: any[] = [
  {
    "hotelNo": 137023,
    "hotelName": "イマジンホテル＆リゾート函館",
    "hotelKanaName": "いまじんほてるあんどりぞーとはこだて",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F137023%2F137023.html",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F137023%2F137023.html%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D137023",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D137023",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/137023/137023.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/137023.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/137023/137023_kan.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/137023/137023map.gif",
    "reviewCount": 2416,
    "reviewAverage": 4.42,
    "userReview": "海を一望できる絶景とバイキングに大満足海が一望。大浴場にはサウナ付き、水風呂もぬるめの設置だけどそれがまたのんびりできる。最上階の露天風呂は少し手狭な感じだが充分。卓球やゲームも出来て家族で楽しめ。",
    "hotelMinCharge": 4641,
    "address1": "北海道",
    "address2": "函館市湯川町3-1-17",
    "telephoneNo": "61",
    "access": "『函館空港』からお車にて約6分/『函館駅』よりお車にて約12分/バス停『熱帯植物園前』から徒歩約3分",
    "parkingInformation": "有り　無料　約90台　湯の川最大級青空平面",
    "nearestStation": "函館",
    "hotelSpecial": "【楽天トラベルゴールドアワード2025受賞！】海と星空が広がる【絶景露天風呂】",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F137023%2F137023.html"
  },
  {
    "hotelNo": 1477,
    "hotelName": "Ｔａｂｉｓｔ　ホテルテトラ函館駅前",
    "hotelKanaName": "たびすと　ほてるてとらはこだてえきまえ",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F1477%2F1477.html",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F1477%2F1477.html%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D1477",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D1477",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/1477/1477.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/1477.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/1477/1477_sgl.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/1477/1477map.gif",
    "reviewCount": 1843,
    "reviewAverage": 3.78,
    "userReview": "夜のお寿司と朝食のシーフードカレーが絶品夜のお寿司3貫、朝食のシーフードカレーもサービスとコスパ最強を謳うだけあると思います。",
    "hotelMinCharge": 3500,
    "address1": "北海道",
    "address2": "函館市若松町19-11",
    "telephoneNo": "21",
    "access": "ＪＲ函館駅から徒歩で5分。函館空港よりシャトルバスで20分。",
    "parkingInformation": "1台１泊800円　 数に限りあり　 GWなど特別期間は別料金。",
    "nearestStation": "函館",
    "hotelSpecial": "　寿司屋自慢の朝ごはん！活海鮮　★函館駅から徒歩3分★バス・市電乗り場も近く便利なホテル☆",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F1477%2F1477.html"
  },
  {
    "hotelNo": 1341,
    "hotelName": "函館国際ホテル",
    "hotelKanaName": "はこだて　こくさいほてる",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F1341%2F1341.html",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F1341%2F1341.html%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D1341",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D1341",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/1341/1341.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/1341.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/1341/1341_room.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/1341/1341map.gif",
    "reviewCount": 4049,
    "reviewAverage": 4.32,
    "userReview": "落ち着いた心地よい空間の中、温かい温泉とおいしいお料理で日頃の疲れを癒やすことができました。",
    "hotelMinCharge": 8316,
    "address1": "北海道",
    "address2": "函館市大手町5-10",
    "telephoneNo": "51",
    "access": "ＪＲ函館駅から徒歩約8分／函館空港から車で約20分 バスで約30分（函館国際ホテル前下車 バス停目の前）",
    "parkingInformation": "1泊1000円 (宿泊日当日の11時～出発日の14時まで出し入れ自由／先着順）",
    "nearestStation": "函館",
    "hotelSpecial": "3つのレストランを備えた全435室のシティホテル。本館最上階には函館港を望む天然温泉展望大浴場も。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F1341%2F1341.html"
  },
  {
    "hotelNo": 168681,
    "hotelName": "センチュリーマリーナ函館",
    "hotelKanaName": "せんちゅりーまりーなはこだて",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F168681%2F168681.html",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F168681%2F168681.html%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D168681",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D168681",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/168681/168681.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/168681.jpg",
    "roomImageUrl": "",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/168681/168681map.gif",
    "reviewCount": 3966,
    "reviewAverage": 4.66,
    "userReview": "朝食の質と寝湯の設計に改善の余地あり朝食バイキングのマグロの質が前回より落ちたような。また露天風呂の寝湯ですが、枕部分に頭を乗せるとお湯に浸りあっという間にのぼせてしまう仕様で、設計者はその事。",
    "hotelMinCharge": 15400,
    "address1": "北海道",
    "address2": "函館市大手町22-13",
    "telephoneNo": "21",
    "access": "ＪＲ　函館駅より徒歩にて約５分　　函館空港より車にて約２０分",
    "parkingInformation": "有り(1,000円/日）",
    "nearestStation": "函館",
    "hotelSpecial": "で開業7周年！　宿泊者専用の無料フィットネスジムを新設♪",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F168681%2F168681.html"
  },
  {
    "hotelNo": 67479,
    "hotelName": "Ｔａｂｉｓｔ　竹葉新葉亭　函館　湯の川温泉",
    "hotelKanaName": "たびすと ちくばしんようてい はこだて ゆのかわおんせん",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F67479%2F67479.html",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F67479%2F67479.html%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D67479",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D67479",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/67479/67479.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/67479.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/67479/67479_h.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/67479/67479map.gif",
    "reviewCount": 323,
    "reviewAverage": 4.28,
    "userReview": "落ち着いた温泉旅館で友人の誕生日をお祝いとても、落ち着いた温泉旅館でした。友達の誕生日に利用しました。別料金で頼んだ、ケーキもすごく美味しかったです。",
    "hotelMinCharge": 3500,
    "address1": "北海道",
    "address2": "函館市湯川町2-6-22",
    "telephoneNo": "71",
    "access": "ＪＲ　函館駅から車で１５分／函館空港から車で５分",
    "parkingInformation": "有り　２０台　無料　予約不要",
    "nearestStation": "函館",
    "hotelSpecial": "今年で創業から七十年の節目の年を迎えます。一期一會の心を大切に北の味覚を部屋食でご提供。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F67479%2F67479.html"
  }
];

export default function FeatureDetailPage() {

  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【2026年】朝からいくら・ウニ・ホタテかけ放題！北海道の海鮮勝手丼朝食が凄すぎるホテル5選 | 日本全国・旅宿クラウド",
    "description": "2026年最新！朝食の美味しさ日本一を競う函館・札幌・小樽の海鮮バイキング！いくら盛り放題の絶品勝手丼と天然温泉展望風呂が自慢の宿5選。",
    "url": "https://croud-travel.pages.dev/traditional-hokkaido-kaisen-don-morning-stay/",
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
      { "@type": "ListItem", "position": 2, "name": "【2026年】朝からいくら・ウニ・ホタテかけ放題！北海道の海鮮勝手丼朝食が凄すぎるホテル5選 | 日本全国・旅宿クラウド", "item": "https://croud-travel.pages.dev/traditional-hokkaido-kaisen-don-morning-stay/" }
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
          <Link href="/features/" className="hover:text-amber-600">厳選特集一覧</Link>
          <span>&gt;</span>
          <span className="text-slate-800 font-medium truncate max-w-xs sm:max-w-md md:max-w-none">
            いくら盛り放題海鮮朝食バイキング＆北海道名湯ホテル
          </span>
        </div>
      </div>

      {/* ヒーローヘッダー */}
      <header className="relative bg-gradient-to-r from-amber-900 via-stone-800 to-slate-900 text-white py-16 px-4">
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-300 px-4 py-1.5 rounded-full text-sm font-semibold backdrop-blur-sm border border-amber-400/30">
            <Sparkles className="w-4 h-4" /> いくら盛り放題海鮮朝食×北海道名湯
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight leading-tight">「2026年」朝からいくら・ウニ・ホタテかけ放題！北海道の海鮮勝手丼朝食が凄すぎるホテル5選</h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed pt-2">
            朝からキラキラ輝くいくらや甘いホタテ、新鮮なマグロやサーモンを好きなだけご飯にのせて作る自分だけの贅沢「勝手丼」。全国の旅行者を虜にする北海道の豪華海鮮朝食と、夜景を見渡す天然温泉で満たされる最高の朝。
          </p>
        </div>
      </header>

      {/* メインコンテンツ */}
      <main className="max-w-5xl mx-auto px-4 py-12 space-y-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"「イマジンホテル＆リゾート函館」へのアクセスや移動方法について","acceptedAnswer":{"@type":"Answer","text":"「イマジンホテル＆リゾート函館」へは、『函館空港』からお車にて約6分/『函館駅』よりお車にて約12分/バス停『熱帯植物園前』から徒歩約3分。最寄りの函館駅からの経路案内も充実しています。"}},{"@type":"Question","name":"「イマジンホテル＆リゾート函館」の魅力や予約時のポイントは？","acceptedAnswer":{"@type":"Answer","text":"「イマジンホテル＆リゾート函館」は『楽天トラベルゴールドアワード2025受賞！海と星空が広がる 絶景露天風呂。』という点が旅行者から高く支持されています。連休や人気シーズンは予約が集中しやすいため、空室状況はお早めのチェックが安心です。"}},{"@type":"Question","name":"プラン選びや宿の比較で意識すべき点は？","acceptedAnswer":{"@type":"Answer","text":"「イマジンホテル＆リゾート函館」と「Ｔａｂｉｓｔ 竹葉新葉亭 函館 湯の川温泉」はそれぞれ立地や施設設備に独自の魅力があります。湯巡り重視か、料理やお部屋の寛ぎ重視かなど、今回の旅の目的に合わせてお選びください。"}}]}) }}
      />
        {/* 特集の魅力と選び方 */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200 space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
            <Award className="w-6 h-6 text-amber-600" />
            いくら盛り放題海鮮朝食バイキング＆北海道名湯ホテルの楽しみ方＆おすすめの選び方
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
                    src="https://img.travel.rakuten.co.jp/share/HOTEL/137023/137023.jpg"
                    alt="イマジンホテル＆リゾート函館"
                    className="w-full h-full object-cover"
                    loading="eager" fetchPriority="high"
                  />
                  <div className="absolute top-3 left-3 bg-amber-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                    第 1 位
                  </div>
                </div>
                <div className="md:w-2/3 p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-xs text-slate-500 mb-1">
                      <span className="bg-slate-100 text-slate-700 font-medium px-2 py-0.5 rounded">北海道</span>
                      <span>函館市湯川町3-1-17</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2 hover:text-amber-600 transition-colors">
                      <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F137023%2F137023.html" target="_blank" rel="sponsored noopener noreferrer">
                        イマジンホテル＆リゾート函館
                      </a>
                    </h3>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center text-amber-500">
                        <Star className="w-4 h-4 fill-amber-400" />
                        <span className="font-bold text-sm ml-1 text-slate-800">4.42</span>
                      </div>
                      <span className="text-xs text-slate-400">（口コミ 2416 件）</span>
                      <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">楽天高評価</span>
                    </div>
                    <ul className="space-y-1 mb-4 text-xs text-slate-600 bg-slate-50 p-3 rounded-lg">
                      <li className="flex items-start gap-1"><span className="text-amber-500 shrink-0">•</span><span>【楽天トラベルゴールドアワード2025受賞！】海と星空が広がる【絶景露天風呂】…</span></li>
                      <li className="flex items-start gap-1"><span className="text-amber-500 shrink-0">•</span><span>アクセス: 『函館空港』からお車にて約6分/『函館駅』よりお車にて約12分/バス停『熱帯植物園前』から徒歩約3分</span></li>
                      <li className="flex items-start gap-1"><span className="text-amber-500 shrink-0">•</span><span>楽天トラベル総合評価: ★4.42（レビュー 2416件）</span></li>
                    </ul>
                  </div>
                  
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="text-xs text-slate-400">最安目安（税込）/人</span>
                      <div className="text-lg font-bold text-rose-600">¥4,641〜</div>
                    </div>
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F137023%2F137023.html%26f_flg%3DPLAN"
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
                    src="https://img.travel.rakuten.co.jp/share/HOTEL/1477/1477.jpg"
                    alt="Ｔａｂｉｓｔ　ホテルテトラ函館駅前"
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
                      <span className="bg-slate-100 text-slate-700 font-medium px-2 py-0.5 rounded">北海道</span>
                      <span>函館市若松町19-11</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2 hover:text-amber-600 transition-colors">
                      <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F1477%2F1477.html" target="_blank" rel="sponsored noopener noreferrer">
                        Ｔａｂｉｓｔ　ホテルテトラ函館駅前
                      </a>
                    </h3>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center text-amber-500">
                        <Star className="w-4 h-4 fill-amber-400" />
                        <span className="font-bold text-sm ml-1 text-slate-800">3.78</span>
                      </div>
                      <span className="text-xs text-slate-400">（口コミ 1843 件）</span>
                      <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">楽天高評価</span>
                    </div>
                    <ul className="space-y-1 mb-4 text-xs text-slate-600 bg-slate-50 p-3 rounded-lg">
                      <li className="flex items-start gap-1"><span className="text-amber-500 shrink-0">•</span><span>　寿司屋自慢の朝ごはん！活海鮮　★函館駅から徒歩3分★バス・市電乗り場も近く便利なホテル☆…</span></li>
                      <li className="flex items-start gap-1"><span className="text-amber-500 shrink-0">•</span><span>アクセス: ＪＲ函館駅から徒歩で5分。函館空港よりシャトルバスで20分。</span></li>
                      <li className="flex items-start gap-1"><span className="text-amber-500 shrink-0">•</span><span>楽天トラベル総合評価: ★3.78（レビュー 1843件）</span></li>
                    </ul>
                  </div>
                  
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="text-xs text-slate-400">最安目安（税込）/人</span>
                      <div className="text-lg font-bold text-rose-600">¥3,500〜</div>
                    </div>
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F1477%2F1477.html%26f_flg%3DPLAN"
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
                    src="https://img.travel.rakuten.co.jp/share/HOTEL/1341/1341.jpg"
                    alt="函館国際ホテル"
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
                      <span className="bg-slate-100 text-slate-700 font-medium px-2 py-0.5 rounded">北海道</span>
                      <span>函館市大手町5-10</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2 hover:text-amber-600 transition-colors">
                      <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F1341%2F1341.html" target="_blank" rel="sponsored noopener noreferrer">
                        函館国際ホテル
                      </a>
                    </h3>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center text-amber-500">
                        <Star className="w-4 h-4 fill-amber-400" />
                        <span className="font-bold text-sm ml-1 text-slate-800">4.32</span>
                      </div>
                      <span className="text-xs text-slate-400">（口コミ 4049 件）</span>
                      <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">楽天高評価</span>
                    </div>
                    <ul className="space-y-1 mb-4 text-xs text-slate-600 bg-slate-50 p-3 rounded-lg">
                      <li className="flex items-start gap-1"><span className="text-amber-500 shrink-0">•</span><span>3つのレストランを備えた全435室のシティホテル。本館最上階には函館港を望む天然温泉展望大浴場も。…</span></li>
                      <li className="flex items-start gap-1"><span className="text-amber-500 shrink-0">•</span><span>アクセス: ＪＲ函館駅から徒歩約8分／函館空港から車で約20分 バスで約30分（函館国際ホテル前下車 バス停目の前）</span></li>
                      <li className="flex items-start gap-1"><span className="text-amber-500 shrink-0">•</span><span>楽天トラベル総合評価: ★4.32（レビュー 4049件）</span></li>
                    </ul>
                  </div>
                  
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="text-xs text-slate-400">最安目安（税込）/人</span>
                      <div className="text-lg font-bold text-rose-600">¥8,316〜</div>
                    </div>
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F1341%2F1341.html%26f_flg%3DPLAN"
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
                    src="https://img.travel.rakuten.co.jp/share/HOTEL/168681/168681.jpg"
                    alt="センチュリーマリーナ函館"
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
                      <span className="bg-slate-100 text-slate-700 font-medium px-2 py-0.5 rounded">北海道</span>
                      <span>函館市大手町22-13</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2 hover:text-amber-600 transition-colors">
                      <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F168681%2F168681.html" target="_blank" rel="sponsored noopener noreferrer">
                        センチュリーマリーナ函館
                      </a>
                    </h3>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center text-amber-500">
                        <Star className="w-4 h-4 fill-amber-400" />
                        <span className="font-bold text-sm ml-1 text-slate-800">4.66</span>
                      </div>
                      <span className="text-xs text-slate-400">（口コミ 3966 件）</span>
                      <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">楽天高評価</span>
                    </div>
                    <ul className="space-y-1 mb-4 text-xs text-slate-600 bg-slate-50 p-3 rounded-lg">
                      <li className="flex items-start gap-1"><span className="text-amber-500 shrink-0">•</span><span>で開業7周年！　宿泊者専用の無料フィットネスジムを新設♪…</span></li>
                      <li className="flex items-start gap-1"><span className="text-amber-500 shrink-0">•</span><span>アクセス: ＪＲ　函館駅より徒歩にて約５分　　函館空港より車にて約２０分</span></li>
                      <li className="flex items-start gap-1"><span className="text-amber-500 shrink-0">•</span><span>楽天トラベル総合評価: ★4.66（レビュー 3966件）</span></li>
                    </ul>
                  </div>
                  
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="text-xs text-slate-400">最安目安（税込）/人</span>
                      <div className="text-lg font-bold text-rose-600">¥15,400〜</div>
                    </div>
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F168681%2F168681.html%26f_flg%3DPLAN"
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
                    src="https://img.travel.rakuten.co.jp/share/HOTEL/67479/67479.jpg"
                    alt="Ｔａｂｉｓｔ　竹葉新葉亭　函館　湯の川温泉"
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
                      <span className="bg-slate-100 text-slate-700 font-medium px-2 py-0.5 rounded">北海道</span>
                      <span>函館市湯川町2-6-22</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2 hover:text-amber-600 transition-colors">
                      <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F67479%2F67479.html" target="_blank" rel="sponsored noopener noreferrer">
                        Ｔａｂｉｓｔ　竹葉新葉亭　函館　湯の川温泉
                      </a>
                    </h3>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center text-amber-500">
                        <Star className="w-4 h-4 fill-amber-400" />
                        <span className="font-bold text-sm ml-1 text-slate-800">4.28</span>
                      </div>
                      <span className="text-xs text-slate-400">（口コミ 323 件）</span>
                      <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">楽天高評価</span>
                    </div>
                    <ul className="space-y-1 mb-4 text-xs text-slate-600 bg-slate-50 p-3 rounded-lg">
                      <li className="flex items-start gap-1"><span className="text-amber-500 shrink-0">•</span><span>今年で創業から七十年の節目の年を迎えます。一期一會の心を大切に北の味覚を部屋食でご提供。…</span></li>
                      <li className="flex items-start gap-1"><span className="text-amber-500 shrink-0">•</span><span>アクセス: ＪＲ　函館駅から車で１５分／函館空港から車で５分</span></li>
                      <li className="flex items-start gap-1"><span className="text-amber-500 shrink-0">•</span><span>楽天トラベル総合評価: ★4.28（レビュー 323件）</span></li>
                    </ul>
                  </div>
                  
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="text-xs text-slate-400">最安目安（税込）/人</span>
                      <div className="text-lg font-bold text-rose-600">¥3,500〜</div>
                    </div>
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F67479%2F67479.html%26f_flg%3DPLAN"
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
            <span className="text-xs bg-slate-100 text-slate-600 px-3 py-1.5 rounded-lg">#いくら盛り放題</span>
            <span className="text-xs bg-slate-100 text-slate-600 px-3 py-1.5 rounded-lg">#海鮮バイキング</span>
            <span className="text-xs bg-slate-100 text-slate-600 px-3 py-1.5 rounded-lg">#勝手丼</span>
            <span className="text-xs bg-slate-100 text-slate-600 px-3 py-1.5 rounded-lg">#函館朝食</span>
            <span className="text-xs bg-slate-100 text-slate-600 px-3 py-1.5 rounded-lg">#札幌ホテル</span>
            <span className="text-xs bg-slate-100 text-slate-600 px-3 py-1.5 rounded-lg">#天然温泉</span>
            <span className="text-xs bg-slate-100 text-slate-600 px-3 py-1.5 rounded-lg">#楽天トラベル</span>
          </div>
        </section>

        {/* 特集トップへのリンク */}
        <div className="text-center pt-4">
          <Link
            href="/features/"
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
              【1泊2日】イマジンホテル＆リゾート函館を拠点にするおすすめ滞在モデルコース
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-l-2 border-amber-500 pl-4 md:pl-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="bg-amber-600 text-white text-xs font-bold px-2.5 py-1 rounded">1日目</span>
                <h3 className="font-bold text-stone-900 text-base md:text-lg">到着〜チェックインと名湯巡り</h3>
              </div>
              <ul className="text-xs md:text-sm text-stone-600 space-y-2 leading-relaxed">
                <li>・<strong className="text-stone-800">14:00〜</strong> 函館駅よりアクセス。『函館空港』からお車にて約6分/『函館駅』よりお車にて約12分/バス停『熱帯植物園前』から徒歩約3分。</li>
                <li>・<strong className="text-stone-800">15:30〜</strong> 「イマジンホテル＆リゾート函館」にチェックイン。楽天トラベルゴールドアワード2025受賞！ 海と星空が広がる 絶景露天風呂などの宿の特徴に期待を高めつつ客室へ。</li>
                <li>・<strong className="text-stone-800">17:00〜</strong> 「イマジンホテル＆リゾート函館」の湯処へ。楽天トラベルゴールドアワード2025受賞！ 海と星空が広がる 絶景露天とともに、夕暮れの特別な寛ぎを満喫。</li>
                <li>・<strong className="text-stone-800">19:00〜</strong> 「イマジンホテル＆リゾート函館」でいただく旬の夕食。地場産の味覚を取り入れたおもてなし料理を五感でじっくり味わう贅沢なひととき。</li>
              </ul>
            </div>
            <div className="border-l-2 border-teal-500 pl-4 md:pl-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="bg-teal-600 text-white text-xs font-bold px-2.5 py-1 rounded">2日目</span>
                <h3 className="font-bold text-stone-900 text-base md:text-lg">爽快な朝湯〜周辺散策と帰路へ</h3>
              </div>
              <ul className="text-xs md:text-sm text-stone-600 space-y-2 leading-relaxed">
                <li>・<strong className="text-stone-800">07:00〜</strong> 朝の光が差し込む「イマジンホテル＆リゾート函館」の湯船へ。清々しい空気の中で手足を伸ばし、心地よい目覚めを迎える。</li>
                <li>・<strong className="text-stone-800">08:00〜</strong> 「イマジンホテル＆リゾート函館」こだわりの朝食を堪能。炊きたてのごはんや身体に優しい料理で、一日のエネルギーをチャージ。</li>
                <li>・<strong className="text-stone-800">10:00〜</strong> チェックアウト後は近隣エリアを観光。本記事でご紹介した「Ｔａｂｉｓｔ 竹葉新葉亭 函館 湯の川温泉」の周辺スポットや名産店に立ち寄り、お土産を選んで帰路へ。</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-stone-50 rounded-2xl p-6 md:p-10 border border-stone-200/80 mb-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              よくある質問（FAQ）とイマジンホテル＆リゾート函館の滞在ポイント
            </h2>
          </div>
          <div className="space-y-4">
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 「イマジンホテル＆リゾート函館」へのアクセスや移動方法について</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 「イマジンホテル＆リゾート函館」へは、『函館空港』からお車にて約6分/『函館駅』よりお車にて約12分/バス停『熱帯植物園前』から徒歩約3分。最寄りの函館駅からの経路案内も充実しています。
              </p>
            </details>
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 「イマジンホテル＆リゾート函館」の魅力や予約時のポイントは？</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 「イマジンホテル＆リゾート函館」は『楽天トラベルゴールドアワード2025受賞！海と星空が広がる 絶景露天風呂。』という点が旅行者から高く支持されています。連休や人気シーズンは予約が集中しやすいため、空室状況はお早めのチェックが安心です。
              </p>
            </details>
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. プラン選びや宿の比較で意識すべき点は？</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 「イマジンホテル＆リゾート函館」と「Ｔａｂｉｓｔ 竹葉新葉亭 函館 湯の川温泉」はそれぞれ立地や施設設備に独自の魅力があります。湯巡り重視か、料理やお部屋の寛ぎ重視かなど、今回の旅の目的に合わせてお選びください。
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
            <a href="/autumn-budget-hokkaido-otaru-canal-momiji-sushi-hotels-stay/" className="block p-4 rounded-xl bg-stone-50 hover:bg-amber-50 border border-stone-200 transition group">
              <span className="text-[10px] font-bold text-amber-700 block mb-1">関連特集ガイド</span>
              <span className="text-xs font-bold text-stone-800 group-hover:text-amber-800 line-clamp-2 leading-relaxed">小樽：運河のガス灯秋夜景＆旬の秋鮭・握り寿司！2,000円台〜泊まれる格安ホテル5選</span>
            </a>
            <a href="/furusato-tax-jozankei-autumn-leaves-stay/" className="block p-4 rounded-xl bg-stone-50 hover:bg-amber-50 border border-stone-200 transition group">
              <span className="text-[10px] font-bold text-amber-700 block mb-1">関連特集ガイド</span>
              <span className="text-xs font-bold text-stone-800 group-hover:text-amber-800 line-clamp-2 leading-relaxed">札幌の奥座敷・定山渓温泉の錦秋渓谷紅葉！豊平峡ダム＆二見吊橋と名湯宿×ふるさと納税厳選ガイド北海道</span>
            </a>
            <a href="/hokkaido/" className="block p-4 rounded-xl bg-stone-50 hover:bg-amber-50 border border-stone-200 transition group">
              <span className="text-[10px] font-bold text-amber-700 block mb-1">関連特集ガイド</span>
              <span className="text-xs font-bold text-stone-800 group-hover:text-amber-800 line-clamp-2 leading-relaxed">北海道旅行 完全計画ガイド 2026：2泊3日・3泊4日モデルコース＆札幌・小樽・函館・富良野・海鮮グルメ・絶景温泉宿</span>
            </a>
            <a href="/hokkaido-jozankei-solo-retreat-onsen-stay/" className="block p-4 rounded-xl bg-stone-50 hover:bg-amber-50 border border-stone-200 transition group">
              <span className="text-[10px] font-bold text-amber-700 block mb-1">関連特集ガイド</span>
              <span className="text-xs font-bold text-stone-800 group-hover:text-amber-800 line-clamp-2 leading-relaxed">定山渓温泉ひとり旅・渓谷美おこもり：札幌から60分・豊平川渓流露天・道産美食！札幌の奥座敷で静寂にととのう厳選3宿</span>
            </a>
          </div>
          <div className="pt-6 border-t border-stone-100">
            <h3 className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-3">人気の都道府県から宿を探す</h3>
            <div className="flex flex-wrap gap-2">
              <Link
                href="/prefectures/gunma/"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                群馬県の宿・温泉
              </Link>
              <Link
                href="/prefectures/yamanashi/"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                山梨県の宿・温泉
              </Link>
              <Link
                href="/prefectures/ehime/"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                愛媛県の宿・温泉
              </Link>
              <Link
                href="/prefectures/ibaraki/"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                茨城県の宿・温泉
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
              📊 2026年：朝からいくら・ウニ・ホタテかけ放題！北海道の海鮮勝手丼朝食が凄すぎるホテル5選：掲載宿スペック一覧比較表＆宿泊者クチコミ・アクセス詳細分析
            </h2>
            <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
              楽天トラベル公式APIより取得した「2026年：朝からいくら・ウニ・ホタテかけ放題！北海道の海鮮勝手丼朝食が凄すぎるホテル5選」掲載宿の所在地・最寄り駅・駐車場条件・クチコミ評価・参考最安料金を一覧で比較できます。公共交通機関（新幹線・在来線・送迎バス）利用の方もマイカー・レンタカー利用の方も、旅のスタイルに合った一軒をお選びください。
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
                <td className="p-3 font-bold text-stone-900">1. イマジンホテル＆リゾート函館</td>
                <td className="p-3 text-stone-600">北海道函館市湯川町3-1-17</td>
                <td className="p-3 text-stone-600">函館駅周辺</td>
                <td className="p-3 text-stone-600">有り　無料　約90台　湯の川最大級青空平面</td>
                <td className="p-3 font-bold text-amber-600">★4.44（2336件）</td>
                <td className="p-3 font-bold text-rose-600">¥5,259〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F137023%2F137023.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">2. Ｔａｂｉｓｔ　ホテルテトラ函館駅前</td>
                <td className="p-3 text-stone-600">北海道函館市若松町19-11</td>
                <td className="p-3 text-stone-600">函館駅周辺</td>
                <td className="p-3 text-stone-600">1台１泊800円　 数に限りあり　 GWなど特別期間は別料金。</td>
                <td className="p-3 font-bold text-amber-600">★3.74（1857件）</td>
                <td className="p-3 font-bold text-rose-600">¥3,500〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F1477%2F1477.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">3. 函館国際ホテル</td>
                <td className="p-3 text-stone-600">北海道函館市大手町5-10</td>
                <td className="p-3 text-stone-600">函館駅周辺</td>
                <td className="p-3 text-stone-600">1泊1000円 (宿泊日当日の11時〜出発日の14時まで出し入れ自由／先着順）</td>
                <td className="p-3 font-bold text-amber-600">★4.33（4102件）</td>
                <td className="p-3 font-bold text-rose-600">¥6,804〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F1341%2F1341.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">4. センチュリーマリーナ函館</td>
                <td className="p-3 text-stone-600">北海道函館市大手町22-13</td>
                <td className="p-3 text-stone-600">函館駅周辺</td>
                <td className="p-3 text-stone-600">有り(1,000円/日）</td>
                <td className="p-3 font-bold text-amber-600">★4.66（4064件）</td>
                <td className="p-3 font-bold text-rose-600">¥13,500〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F168681%2F168681.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">5. Ｔａｂｉｓｔ　竹葉新葉亭　函館　湯の川温泉</td>
                <td className="p-3 text-stone-600">北海道函館市湯川町2-6-22</td>
                <td className="p-3 text-stone-600">函館駅周辺</td>
                <td className="p-3 text-stone-600">有り　２０台　無料　予約不要</td>
                <td className="p-3 font-bold text-amber-600">★4.29（338件）</td>
                <td className="p-3 font-bold text-rose-600">¥3,600〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F67479%2F67479.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
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
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">イマジンホテル＆リゾート函館</h3>
                  <span className="text-xs text-stone-400 ml-2">（いまじんほてるあんどりぞーとはこだて）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥5,259〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/137023/137023_kan.jpg" alt="イマジンホテル＆リゾート函館 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>【楽天トラベルゴールドアワード2025受賞！】海と星空が広がる【絶景露天風呂】</p>
                  <p><strong>【所在地・アクセス】</strong>〒 北海道函館市湯川町3-1-17 ／ 最寄り駅：函館 ／ 交通案内：『函館空港』からお車にて約6分/『函館駅』よりお車にて約12分/バス停『熱帯植物園前』から徒歩約3分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　無料　約90台　湯の川最大級青空平面</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「部屋のグレードアップと美味しい食事に大満足訳あり1階のプランで宿泊したのですが、空き部屋があったとのことで3階のオーシャンビューの部屋にグレードアップしてもらえました!波の音をききながら眠りにつく…　2026-08-22 10:12:40投稿 &lt;a href=&quot;https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=137023&quot; class=&quot;3click&quot;」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #2</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">Ｔａｂｉｓｔ　ホテルテトラ函館駅前</h3>
                  <span className="text-xs text-stone-400 ml-2">（たびすと　ほてるてとらはこだてえきまえ）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥3,500〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/1477/1477_sgl.jpg" alt="Ｔａｂｉｓｔ　ホテルテトラ函館駅前 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>寿司屋自慢の朝ごはん！活海鮮　★函館駅から徒歩3分★バス・市電乗り場も近く便利なホテル☆</p>
                  <p><strong>【所在地・アクセス】</strong>〒 北海道函館市若松町19-11 ／ 最寄り駅：函館 ／ 交通案内：ＪＲ函館駅から徒歩で5分。函館空港よりシャトルバスで20分。</p>
                  <p><strong>【駐車場・マイカー利用】</strong>1台１泊800円　 数に限りあり　 GWなど特別期間は別料金。</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★3.99 ／ 立地 ★3.78 ／ 部屋 ★3.42 ／ 設備 ★3.28 ／ 風呂 ★3.23</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「バイクツーリングで利用バイクツーリングに人気の宿とのことで素泊まり利用でしたが外観から古臭く昔のビジネスホテルという感じでベッドは硬めで好みの感じ枕は1つ枕元付近にコンセントあるのでスマホやCPA…　2026-10-09 00:47:03投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #3</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">函館国際ホテル</h3>
                  <span className="text-xs text-stone-400 ml-2">（はこだて　こくさいほてる）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥6,804〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/1341/1341_room.jpg" alt="函館国際ホテル 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>3つのレストランを備えた全435室のシティホテル。本館最上階には函館港を望む天然温泉展望大浴場も。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 北海道函館市大手町5-10 ／ 最寄り駅：函館 ／ 交通案内：ＪＲ函館駅から徒歩約8分／函館空港から車で約20分 バスで約30分（函館国際ホテル前下車 バス停目の前）</p>
                  <p><strong>【駐車場・マイカー利用】</strong>1泊1000円 (宿泊日当日の11時〜出発日の14時まで出し入れ自由／先着順）</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.37 ／ 立地 ★4.38 ／ 部屋 ★4.37 ／ 設備 ★4.3 ／ 風呂 ★4.25 ／ 食事 ★4.46</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「落ち着いた食事と金森倉庫巡りで大満足ゆっくりと食事をして、チェックアウトの前に金森倉庫も堪能し、落ち着いた時間を過ごせました。また、お世話になりたいです。クチコミの詳細はこちらから　htt…　2026-10-09 12:23:51投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #4</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">センチュリーマリーナ函館</h3>
                  <span className="text-xs text-stone-400 ml-2">（せんちゅりーまりーなはこだて）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥13,500〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/168681/168681.jpg" alt="センチュリーマリーナ函館 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>2026年5月1日で開業7周年！　宿泊者専用の無料フィットネスジムを新設♪</p>
                  <p><strong>【所在地・アクセス】</strong>〒 北海道函館市大手町22-13 ／ 最寄り駅：函館 ／ 交通案内：ＪＲ　函館駅より徒歩にて約５分　　函館空港より車にて約２０分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り(1,000円/日）</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.62 ／ 立地 ★4.63 ／ 部屋 ★4.69 ／ 設備 ★4.63 ／ 風呂 ★4.66</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「枕やアロマのサービスと囲炉裏焼きに大満足たくさんの種類の中から枕を借りられたり、好きな香りを選んで、アロマストーンを部屋に置いて置けるサービスがお気に入りで、何度もリピートしています。また、温泉も…　2026-10-10 17:12:54投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #5</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">Ｔａｂｉｓｔ　竹葉新葉亭　函館　湯の川温泉</h3>
                  <span className="text-xs text-stone-400 ml-2">（たびすと ちくばしんようてい はこだて ゆのかわおんせん）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥3,600〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/67479/67479_h.jpg" alt="Ｔａｂｉｓｔ　竹葉新葉亭　函館　湯の川温泉 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>今年で創業から七十年の節目の年を迎えます。一期一會の心を大切に北の味覚を部屋食でご提供。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 北海道函館市湯川町2-6-22 ／ 最寄り駅：函館 ／ 交通案内：ＪＲ　函館駅から車で１５分／函館空港から車で５分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　２０台　無料　予約不要</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.24 ／ 立地 ★4.14 ／ 部屋 ★4.28 ／ 設備 ★4.12 ／ 風呂 ★4.32 ／ 食事 ★4.25</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「静かで落ち着く環境と無料の美鈴コーヒー古い宿です 風呂も2か所だけでも静かです外国人少ない 子供が騒がしくないご飯なしでも近くのハセスト ラッキーピエロで回転寿司かんたろうでテイクアウトメニュ…　2026-10-06 14:50:47投稿」
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-6 border-t border-stone-200">
            <h3 className="text-lg font-bold text-stone-900 border-l-4 border-teal-600 pl-3">
              🗺️ あわせて巡りたい！北海道の代表的な観光名所・歴史自然ガイド（Wikipedia公認画像・解説）
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              宿泊前後の1泊2日・2泊3日モデルコースに組み込みたい、北海道を代表する名所・絶景スポットの解説です。チェックイン前後の荷物預かりや駅周辺のレンタカー・周遊バスを活用すると効率よく巡ることができます。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              <div className="aspect-video relative overflow-hidden bg-stone-200"><img src="https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c1/Wide_view_of_Mount_Hakodate_from_Mashu-Maru.jpg/1280px-Wide_view_of_Mount_Hakodate_from_Mashu-Maru.jpg?utm_source=ja.wikipedia.org&amp;utm_campaign=api&amp;utm_content=thumbnail" alt="函館山（夜景）" className="w-full h-full object-cover" loading="lazy" /></div>
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #1</span>
                <h3 className="text-base font-bold text-stone-900">函館山（夜景）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">世界三大夜景の一つに数えられる絶景スポット。津軽海峡と函館湾に挟まれたくびれが生み出す、宝石をちりばめたような眩い夜景は一生に一度は見たい感動のロケーションです。 函館山（はこだてやま）は、北海道函館市の市街地西端にある火山であり陸繋島でもある。…</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #2</span>
                <h3 className="text-base font-bold text-stone-900">富良野 ファーム富田</h3>
                <p className="text-xs text-stone-600 leading-relaxed">一面に広がる鮮やかな紫色のラベンダー畑と、虹色に彩られた花畑が織りなすパノラマロード。富良野の雄大な自然と爽やかな香りに包まれる絶好の観光名所です。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              <div className="aspect-video relative overflow-hidden bg-stone-200"><img src="https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fd/Otaru_Hokkaido_Japan.jpg/1280px-Otaru_Hokkaido_Japan.jpg?utm_source=ja.wikipedia.org&amp;utm_campaign=api&amp;utm_content=thumbnail" alt="小樽運河" className="w-full h-full object-cover" loading="lazy" /></div>
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #3</span>
                <h3 className="text-base font-bold text-stone-900">小樽運河</h3>
                <p className="text-xs text-stone-600 leading-relaxed">大正時代に造られたノスタルジックな石造り倉庫群が立ち並ぶ小樽のシンボル。夕暮れ時にはガス灯が灯り、幻想的な雰囲気の中で散策やナイトクルーズを楽しめます。 小樽運河（おたるうんが）は、北海道小樽市にある運河。現在は物流機能としての使命を終えており、文化庁選定日本遺産「北海道の『心臓』と呼ばれたまち・小樽」を構成する遺産のひとつ。 1923年（大正12年）完成。日本国内唯一となる海岸の沖合い埋立て方式で造られており、緩やかに湾曲しているのが特徴になっている。全長1,140 mあり、幅は臨港線沿いは20 m、北部（…</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              <div className="aspect-video relative overflow-hidden bg-stone-200"><img src="https://upload.wikimedia.org/wikipedia/commons/d/d8/Asahikawa_Montage.jpg?utm_source=ja.wikipedia.org&amp;utm_campaign=api&amp;utm_content=thumbnail_unscaled" alt="旭川市旭山動物園" className="w-full h-full object-cover" loading="lazy" /></div>
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #4</span>
                <h3 className="text-base font-bold text-stone-900">旭川市旭山動物園</h3>
                <p className="text-xs text-stone-600 leading-relaxed">行動展示で全国的に有名な日本最北の動物園。水中でダイナミックに泳ぐホッキョクグマや、円柱水槽を行き来するアザラシなど、生き生きとした動物たちの姿を間近で観察できます。 旭川市（あさひかわし）は、北海道のほぼ中央に位置し、上川総合振興局に属する市。振興局所在地であり、札幌市に次ぐ北海道第2位の人口（約31万人）を有する中核市である。 北海道中央部に位置し、上川盆地に広がっている。道北の経済・産業・文化の中心都市。ユネスコの「デザイン都市」、そして「国際会議観光都市」に認定されている。交通面では国道や鉄道路線の終起点となり高速…</p>
              </div>
            </div>
            </div>
          </div>

          <div className="bg-amber-50/70 rounded-2xl p-5 md:p-6 border border-amber-200 space-y-3 text-xs text-stone-700 leading-relaxed">
            <h3 className="text-sm md:text-base font-bold text-amber-950">
              💡 北海道エリアの宿泊予約・シーズン別ベストタイミングと節約ノウハウ
            </h3>
            <p>
              <strong>1. 早期予約と楽天トラベルクーポンの併用：</strong> 北海道の人気温泉宿・リゾートホテルは、週末や連休・紅葉・年末年始の60日〜30日前から一気に予約が埋まります。毎月5と0のつく日やスーパーSALE期間中に配布される宿クーポン・自治体クーポンを併用すると、通常より最大10〜20%お得に予約可能です。
            </p>
            <p>
              <strong>2. 夕食・朝食プランと部屋タイプの選び方：</strong> 地元産の旬魚介やブランド牛会席を味わうなら「夕朝食付きプラン」、周辺の屋台・老舗居酒屋・ご当地グルメを食べ歩くなら「朝食付き」または「素泊まり＋天然温泉大浴場付きホテル」を選ぶと予算と満足度のバランスが最適化されます。
            </p>
          </div>
        </section>

      </main>
    
      <HubRelatedPosts currentSlug="traditional-hokkaido-kaisen-don-morning-stay" />
</div>
  );
}
