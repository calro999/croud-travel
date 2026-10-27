import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { Star, MapPin, Sparkles, CheckCircle2, ChevronRight, Award, ExternalLink } from 'lucide-react';

export const metadata: Metadata = {
  title: '2026年：本格茶室で一服の静寂を。お点前体験＆日本庭園露天風呂が自慢の和モダン宿5選',
  description: '2026年最新！格式ある本格茶室で楽しむ抹茶とお抹茶菓子のおもてなし。美しい日本庭園を眺める露天風呂と和の美意識に浸る大人の癒やし宿5選。',
  keywords: ["2026年", "日本全国", "旅宿クラウド", "温泉宿", "宿泊予約", "楽天トラベル", "国内旅行"],
  openGraph: {
    title: '2026年：本格茶室で一服の静寂を。お点前体験＆日本庭園露天風呂が自慢の和モダン宿5選',
    description: '2026年最新！格式ある本格茶室で楽しむ抹茶とお抹茶菓子のおもてなし。美しい日本庭園を眺める露天風呂と和の美意識に浸る大人の癒やし宿5選。',
    type: 'article',
    url: 'https://croud-travel.pages.dev/luxury-private-onsen-with-tea-ceremony-lounge/',
  },
  alternates: {
    canonical: "https://croud-travel.pages.dev/luxury-private-onsen-with-tea-ceremony-lounge/",
  },
};

const hotels: any[] = [
  {
    "hotelNo": 7027,
    "hotelName": "宮津温泉　料理旅館　茶六別館",
    "hotelKanaName": "みやづおんせん　ちゃろくべっかん",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F7027%2F7027.html",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F7027%2F7027.html%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D7027",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D7027",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/7027/7027.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/7027.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/7027/7027_room.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/7027/7027map.gif",
    "reviewCount": 202,
    "reviewAverage": 4.55,
    "userReview": "趣ある建物と絶品の生ガキに大満足建物は非常に趣があり、興味を持てました。お部屋も昔ながらの雰囲気でよかったです。窓からは天橋立が見えました。ちょっと霞んでいましたが、冬ならもっとはっきり見えるかも。",
    "hotelMinCharge": 17600,
    "address1": "京都府",
    "address2": "宮津市島崎2039-4",
    "telephoneNo": "77",
    "access": "車：京都縦貫自動車道宮津天橋立ＩＣより約５分　電車：京都丹後鉄道宮津駅より徒歩１０分　高速バス：キセンバ港館より徒歩７分",
    "parkingInformation": "有り　１２台　無料　宿の左斜め前にございます",
    "nearestStation": "宮津（京都）",
    "hotelSpecial": "天橋立を望む数奇屋造りの料理宿。春夏には岩牡蠣など丹後の海の幸を生かした京風会席をご堪能下さい。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F7027%2F7027.html"
  },
  {
    "hotelNo": 13755,
    "hotelName": "浅虫温泉　椿館",
    "hotelKanaName": "あさむしおんせん　つばきかん",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F13755%2F13755.html",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F13755%2F13755.html%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D13755",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D13755",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/13755/13755.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/13755.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/13755/13755_war.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/13755/13755map.gif",
    "reviewCount": 622,
    "reviewAverage": 4.55,
    "userReview": "棟方志功縁の宿、料理もサービスも最高棟方志功縁の宿。料理最高サ-ビスも満点。",
    "hotelMinCharge": 13200,
    "address1": "青森県",
    "address2": "青森市浅虫内野14",
    "telephoneNo": "017-752-3341",
    "access": "青い森鉄道「浅虫温泉駅」下車 / 東北自動車道 青森東ICより1５分 / 青森空港より５０分",
    "parkingInformation": "有り　35台　無料　先着順",
    "nearestStation": "浅虫温泉",
    "hotelSpecial": "９つ自家源泉・飲泉・源泉料理。版画家棟方志功の直筆画多数",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F13755%2F13755.html"
  },
  {
    "hotelNo": 38847,
    "hotelName": "金沢辰口温泉　まつさき",
    "hotelKanaName": "たつのくちおんせん　まつさき",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F38847%2F38847.html",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F38847%2F38847.html%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D38847",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D38847",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/38847/38847.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/38847.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/38847/38847_kya.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/38847/38847map.gif",
    "reviewCount": 417,
    "reviewAverage": 4.7,
    "userReview": "十数年ぶりに利用させていだだいたのですが、おもてなしなど変わる事なく、今回の滞在も、のんびりとくつろぐ事ができ、家族にも喜んでもらうことができました。また、利用させていただきたいです。クチコミ。",
    "hotelMinCharge": 20625,
    "address1": "石川県",
    "address2": "能美市辰口町3-1",
    "telephoneNo": "11",
    "access": "関東方面：IR松任駅より車20分、関西方面：JR小松駅より車20分　小松空港より車25分　※要予約で送迎がございます",
    "parkingInformation": "有り　８０台　無料",
    "nearestStation": "小松",
    "hotelSpecial": "温泉客室24室【鳳凰は露天風呂付】料理自慢＆全て個室食。金沢駅から電車と送迎で30分。お一人様歓迎",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F38847%2F38847.html"
  },
  {
    "hotelNo": 31801,
    "hotelName": "有馬温泉　高山荘　華野",
    "hotelKanaName": "ありまおんせん　たかやまそう　はなの",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F31801%2F31801.html",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F31801%2F31801.html%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D31801",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D31801",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/31801/31801.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/31801.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/31801/31801_r1.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/31801/31801map.gif",
    "reviewCount": 359,
    "reviewAverage": 4.44,
    "userReview": "金泉と銀泉を堪能、静かで落ち着いた大人の空間有馬温泉の駅からブラブラと道沿いのお店を見ながら、徒歩で宿に向かいましたが、ちょうど良い距離でした。館内は良い香りがして落ち着いた雰囲気。温泉は金泉、銀。",
    "hotelMinCharge": 17545,
    "address1": "兵庫県",
    "address2": "神戸市北区有馬町400-1",
    "telephoneNo": "078-904-0744",
    "access": "大阪より約60分/三ノ宮・新神戸より約30分／神戸電鉄、バス 有馬温泉駅から徒歩10分 送迎有(要電話)",
    "parkingInformation": "無料駐車場12台（15:00～翌朝11:00迄）完全予約制　満車時は近隣駐車場 送迎有。大型車不可。",
    "nearestStation": "有馬温泉",
    "hotelSpecial": "神戸有馬の温泉街を見下ろす高台に、アートとお花、旬の美食、上質な金泉・銀泉。心に溶け合う小さなお宿。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F31801%2F31801.html"
  },
  {
    "hotelNo": 19206,
    "hotelName": "庭園と感動の宿　富士山温泉　ホテル鐘山苑",
    "hotelKanaName": "ていえんとかんどうのやど　ふじさんおんせん　ほてるかねやまえん",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F19206%2F19206.html",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F19206%2F19206.html%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D19206",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D19206",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/19206/19206.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/19206.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/19206/19206_bath.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/19206/19206map.gif",
    "reviewCount": 1138,
    "reviewAverage": 4.7,
    "userReview": "天気が悪くても庭や室内が綺麗でとても快適天気はあまりよくありませんでしたが室内や大きな庭がきれいに維持されており気持ちよく過ごすことができました。夜の手品ショーや太鼓の演舞なども良かったで。",
    "hotelMinCharge": 22000,
    "address1": "山梨県",
    "address2": "富士吉田市上吉田東9-1-18",
    "telephoneNo": "68",
    "access": "富士急行線富士山駅より１３時～１８時の間無料送迎あり／車８分／駅到着時にお電話下さい／翌日のお送りは８：００より３０分毎",
    "parkingInformation": "有り　5００台　無料",
    "nearestStation": "富士吉田",
    "hotelSpecial": "富士山の見える絶景露天風呂！【２０２４年プロが選んだ旅館１００選・全国総合８位】",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F19206%2F19206.html"
  }
];

export default function FeatureDetailPage() {

  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【2026年】本格茶室で一服の静寂を。お点前体験＆日本庭園露天風呂が自慢の和モダン宿5選 | 日本全国・旅宿クラウド",
    "description": "2026年最新！格式ある本格茶室で楽しむ抹茶とお抹茶菓子のおもてなし。美しい日本庭園を眺める露天風呂と和の美意識に浸る大人の癒やし宿5選。",
    "url": "https://croud-travel.pages.dev/luxury-private-onsen-with-tea-ceremony-lounge/",
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
      { "@type": "ListItem", "position": 2, "name": "【2026年】本格茶室で一服の静寂を。お点前体験＆日本庭園露天風呂が自慢の和モダン宿5選 | 日本全国・旅宿クラウド", "item": "https://croud-travel.pages.dev/luxury-private-onsen-with-tea-ceremony-lounge/" }
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
            本格茶室お点前体験＆日本庭園名湯宿
          </span>
        </div>
      </div>

      {/* ヒーローヘッダー */}
      <header className="relative bg-gradient-to-r from-amber-900 via-stone-800 to-slate-900 text-white py-16 px-4">
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-300 px-4 py-1.5 rounded-full text-sm font-semibold backdrop-blur-sm border border-amber-400/30">
            <Sparkles className="w-4 h-4" /> 本格茶室お点前×日本庭園名湯
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight leading-tight">「2026年」本格茶室で一服の静寂を。お点前体験＆日本庭園露天風呂が自慢の和モダン宿5選</h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed pt-2">
            掛け軸と季節の茶花が飾られた静謐な茶室でいただく、点てたての香り高い抹茶と上生菓子。日常の喧騒から解き放たれ、美しい日本庭園の移ろいを眺めながら名湯に浸かる、心洗われる和のリトリートステイ。
          </p>
        </div>
      </header>

      {/* メインコンテンツ */}
      <main className="max-w-5xl mx-auto px-4 py-12 space-y-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"「宮津温泉 料理旅館 茶六別館」へのアクセスや移動方法について","acceptedAnswer":{"@type":"Answer","text":"「宮津温泉 料理旅館 茶六別館」へは、車：京都縦貫自動車道宮津天橋立ＩＣより約５分 電車：京都丹後鉄道宮津駅より徒歩１０分 高速バス：キセンバ港館より徒歩７分。最寄りの宮津（京都）駅からの経路案内も充実しています。"}},{"@type":"Question","name":"「宮津温泉 料理旅館 茶六別館」の魅力や予約時のポイントは？","acceptedAnswer":{"@type":"Answer","text":"「宮津温泉 料理旅館 茶六別館」は『天橋立を望む数奇屋造りの料理宿。春夏には岩牡蠣など丹後の海の幸を生かした京風会席をご堪能下。』という点が旅行者から高く支持されています。連休や人気シーズンは予約が集中しやすいため、空室状況はお早めのチェックが安心です。"}},{"@type":"Question","name":"プラン選びや宿の比較で意識すべき点は？","acceptedAnswer":{"@type":"Answer","text":"「宮津温泉 料理旅館 茶六別館」と「浅虫温泉 椿館」はそれぞれ立地や施設設備に独自の魅力があります。湯巡り重視か、料理やお部屋の寛ぎ重視かなど、今回の旅の目的に合わせてお選びください。"}}]}) }}
      />
        {/* 特集の魅力と選び方 */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200 space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
            <Award className="w-6 h-6 text-amber-600" />
            本格茶室お点前体験＆日本庭園名湯宿の楽しみ方＆おすすめの選び方
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
                    src="https://img.travel.rakuten.co.jp/share/HOTEL/7027/7027.jpg"
                    alt="宮津温泉　料理旅館　茶六別館"
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
                      <span>宮津市島崎2039-4</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2 hover:text-amber-600 transition-colors">
                      <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F7027%2F7027.html" target="_blank" rel="sponsored noopener noreferrer">
                        宮津温泉　料理旅館　茶六別館
                      </a>
                    </h3>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center text-amber-500">
                        <Star className="w-4 h-4 fill-amber-400" />
                        <span className="font-bold text-sm ml-1 text-slate-800">4.55</span>
                      </div>
                      <span className="text-xs text-slate-400">（口コミ 202 件）</span>
                      <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">楽天高評価</span>
                    </div>
                    <ul className="space-y-1 mb-4 text-xs text-slate-600 bg-slate-50 p-3 rounded-lg">
                      <li className="flex items-start gap-1"><span className="text-amber-500 shrink-0">•</span><span>天橋立を望む数奇屋造りの料理宿。春夏には岩牡蠣など丹後の海の幸を生かした京風会席をご堪能下さい。…</span></li>
                      <li className="flex items-start gap-1"><span className="text-amber-500 shrink-0">•</span><span>アクセス: 車：京都縦貫自動車道宮津天橋立ＩＣより約５分　電車：京都丹後鉄道宮津駅より徒歩１０分　高速バス：キセンバ港館より徒歩７分</span></li>
                      <li className="flex items-start gap-1"><span className="text-amber-500 shrink-0">•</span><span>楽天トラベル総合評価: ★4.55（レビュー 202件）</span></li>
                    </ul>
                  </div>
                  
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="text-xs text-slate-400">最安目安（税込）/人</span>
                      <div className="text-lg font-bold text-rose-600">¥17,600〜</div>
                    </div>
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F7027%2F7027.html%26f_flg%3DPLAN"
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
                    src="https://img.travel.rakuten.co.jp/share/HOTEL/13755/13755.jpg"
                    alt="浅虫温泉　椿館"
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
                      <span className="bg-slate-100 text-slate-700 font-medium px-2 py-0.5 rounded">青森県</span>
                      <span>青森市浅虫内野14</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2 hover:text-amber-600 transition-colors">
                      <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F13755%2F13755.html" target="_blank" rel="sponsored noopener noreferrer">
                        浅虫温泉　椿館
                      </a>
                    </h3>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center text-amber-500">
                        <Star className="w-4 h-4 fill-amber-400" />
                        <span className="font-bold text-sm ml-1 text-slate-800">4.55</span>
                      </div>
                      <span className="text-xs text-slate-400">（口コミ 622 件）</span>
                      <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">楽天高評価</span>
                    </div>
                    <ul className="space-y-1 mb-4 text-xs text-slate-600 bg-slate-50 p-3 rounded-lg">
                      <li className="flex items-start gap-1"><span className="text-amber-500 shrink-0">•</span><span>９つ自家源泉・飲泉・源泉料理。版画家棟方志功の直筆画多数…</span></li>
                      <li className="flex items-start gap-1"><span className="text-amber-500 shrink-0">•</span><span>アクセス: 青い森鉄道「浅虫温泉駅」下車 / 東北自動車道 青森東ICより1５分 / 青森空港より５０分</span></li>
                      <li className="flex items-start gap-1"><span className="text-amber-500 shrink-0">•</span><span>楽天トラベル総合評価: ★4.55（レビュー 622件）</span></li>
                    </ul>
                  </div>
                  
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="text-xs text-slate-400">最安目安（税込）/人</span>
                      <div className="text-lg font-bold text-rose-600">¥13,200〜</div>
                    </div>
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F13755%2F13755.html%26f_flg%3DPLAN"
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
                    src="https://img.travel.rakuten.co.jp/share/HOTEL/38847/38847.jpg"
                    alt="金沢辰口温泉　まつさき"
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
                      <span className="bg-slate-100 text-slate-700 font-medium px-2 py-0.5 rounded">石川県</span>
                      <span>能美市辰口町3-1</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2 hover:text-amber-600 transition-colors">
                      <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F38847%2F38847.html" target="_blank" rel="sponsored noopener noreferrer">
                        金沢辰口温泉　まつさき
                      </a>
                    </h3>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center text-amber-500">
                        <Star className="w-4 h-4 fill-amber-400" />
                        <span className="font-bold text-sm ml-1 text-slate-800">4.70</span>
                      </div>
                      <span className="text-xs text-slate-400">（口コミ 417 件）</span>
                      <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">楽天高評価</span>
                    </div>
                    <ul className="space-y-1 mb-4 text-xs text-slate-600 bg-slate-50 p-3 rounded-lg">
                      <li className="flex items-start gap-1"><span className="text-amber-500 shrink-0">•</span><span>温泉客室24室【鳳凰は露天風呂付】料理自慢＆全て個室食。金沢駅から電車と送迎で30分。お一人様歓迎…</span></li>
                      <li className="flex items-start gap-1"><span className="text-amber-500 shrink-0">•</span><span>アクセス: 関東方面：IR松任駅より車20分、関西方面：JR小松駅より車20分　小松空港より車25分　※要予約で送迎がございます</span></li>
                      <li className="flex items-start gap-1"><span className="text-amber-500 shrink-0">•</span><span>楽天トラベル総合評価: ★4.70（レビュー 417件）</span></li>
                    </ul>
                  </div>
                  
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="text-xs text-slate-400">最安目安（税込）/人</span>
                      <div className="text-lg font-bold text-rose-600">¥20,625〜</div>
                    </div>
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F38847%2F38847.html%26f_flg%3DPLAN"
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
                    src="https://img.travel.rakuten.co.jp/share/HOTEL/31801/31801.jpg"
                    alt="有馬温泉　高山荘　華野"
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
                      <span className="bg-slate-100 text-slate-700 font-medium px-2 py-0.5 rounded">兵庫県</span>
                      <span>神戸市北区有馬町400-1</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2 hover:text-amber-600 transition-colors">
                      <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F31801%2F31801.html" target="_blank" rel="sponsored noopener noreferrer">
                        有馬温泉　高山荘　華野
                      </a>
                    </h3>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center text-amber-500">
                        <Star className="w-4 h-4 fill-amber-400" />
                        <span className="font-bold text-sm ml-1 text-slate-800">4.44</span>
                      </div>
                      <span className="text-xs text-slate-400">（口コミ 359 件）</span>
                      <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">楽天高評価</span>
                    </div>
                    <ul className="space-y-1 mb-4 text-xs text-slate-600 bg-slate-50 p-3 rounded-lg">
                      <li className="flex items-start gap-1"><span className="text-amber-500 shrink-0">•</span><span>神戸有馬の温泉街を見下ろす高台に、アートとお花、旬の美食、上質な金泉・銀泉。心に溶け合う小さなお宿。…</span></li>
                      <li className="flex items-start gap-1"><span className="text-amber-500 shrink-0">•</span><span>アクセス: 大阪より約60分/三ノ宮・新神戸より約30分／神戸電鉄、バス 有馬温泉駅から徒歩10分 送迎有(要電話)</span></li>
                      <li className="flex items-start gap-1"><span className="text-amber-500 shrink-0">•</span><span>楽天トラベル総合評価: ★4.44（レビュー 359件）</span></li>
                    </ul>
                  </div>
                  
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="text-xs text-slate-400">最安目安（税込）/人</span>
                      <div className="text-lg font-bold text-rose-600">¥17,545〜</div>
                    </div>
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F31801%2F31801.html%26f_flg%3DPLAN"
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
                    src="https://img.travel.rakuten.co.jp/share/HOTEL/19206/19206.jpg"
                    alt="庭園と感動の宿　富士山温泉　ホテル鐘山苑"
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
                      <span className="bg-slate-100 text-slate-700 font-medium px-2 py-0.5 rounded">山梨県</span>
                      <span>富士吉田市上吉田東9-1-18</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2 hover:text-amber-600 transition-colors">
                      <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F19206%2F19206.html" target="_blank" rel="sponsored noopener noreferrer">
                        庭園と感動の宿　富士山温泉　ホテル鐘山苑
                      </a>
                    </h3>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center text-amber-500">
                        <Star className="w-4 h-4 fill-amber-400" />
                        <span className="font-bold text-sm ml-1 text-slate-800">4.70</span>
                      </div>
                      <span className="text-xs text-slate-400">（口コミ 1138 件）</span>
                      <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">楽天高評価</span>
                    </div>
                    <ul className="space-y-1 mb-4 text-xs text-slate-600 bg-slate-50 p-3 rounded-lg">
                      <li className="flex items-start gap-1"><span className="text-amber-500 shrink-0">•</span><span>富士山の見える絶景露天風呂！【２０２４年プロが選んだ旅館１００選・全国総合８位】…</span></li>
                      <li className="flex items-start gap-1"><span className="text-amber-500 shrink-0">•</span><span>アクセス: 富士急行線富士山駅より１３時～１８時の間無料送迎あり／車８分／駅到着時にお電話下さい／翌日のお送りは８：００より３０分毎</span></li>
                      <li className="flex items-start gap-1"><span className="text-amber-500 shrink-0">•</span><span>楽天トラベル総合評価: ★4.70（レビュー 1138件）</span></li>
                    </ul>
                  </div>
                  
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="text-xs text-slate-400">最安目安（税込）/人</span>
                      <div className="text-lg font-bold text-rose-600">¥22,000〜</div>
                    </div>
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F19206%2F19206.html%26f_flg%3DPLAN"
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
            <span className="text-xs bg-slate-100 text-slate-600 px-3 py-1.5 rounded-lg">#茶室体験</span>
            <span className="text-xs bg-slate-100 text-slate-600 px-3 py-1.5 rounded-lg">#抹茶おもてなし</span>
            <span className="text-xs bg-slate-100 text-slate-600 px-3 py-1.5 rounded-lg">#日本庭園</span>
            <span className="text-xs bg-slate-100 text-slate-600 px-3 py-1.5 rounded-lg">#和モダン旅館</span>
            <span className="text-xs bg-slate-100 text-slate-600 px-3 py-1.5 rounded-lg">#数寄屋造り</span>
            <span className="text-xs bg-slate-100 text-slate-600 px-3 py-1.5 rounded-lg">#露天風呂</span>
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
              【1泊2日】宮津温泉 料理旅館 茶六別館を拠点にするおすすめ滞在モデルコース
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-l-2 border-amber-500 pl-4 md:pl-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="bg-amber-600 text-white text-xs font-bold px-2.5 py-1 rounded">1日目</span>
                <h3 className="font-bold text-stone-900 text-base md:text-lg">到着〜チェックインと名湯巡り</h3>
              </div>
              <ul className="text-xs md:text-sm text-stone-600 space-y-2 leading-relaxed">
                <li>・<strong className="text-stone-800">14:00〜</strong> 宮津（京都）駅よりアクセス。車：京都縦貫自動車道宮津天橋立ＩＣより約５分 電車：京都丹後鉄道宮津駅より徒歩１０分 高速バス：キセンバ港館より徒歩７分。</li>
                <li>・<strong className="text-stone-800">15:30〜</strong> 「宮津温泉 料理旅館 茶六別館」にチェックイン。天橋立を望む数奇屋造りの料理宿。春夏には岩牡蠣など丹後の海の幸を生かした京風会席をご堪能下さい。などの宿の特徴に期待を高めつつ客室へ。</li>
                <li>・<strong className="text-stone-800">17:00〜</strong> 「宮津温泉 料理旅館 茶六別館」の湯処へ。天橋立を望む数奇屋造りの料理宿。春夏には岩牡蠣など丹後の海の幸を生かしとともに、夕暮れの特別な寛ぎを満喫。</li>
                <li>・<strong className="text-stone-800">19:00〜</strong> 「宮津温泉 料理旅館 茶六別館」でいただく旬の夕食。地場産の味覚を取り入れたおもてなし料理を五感でじっくり味わう贅沢なひととき。</li>
              </ul>
            </div>
            <div className="border-l-2 border-teal-500 pl-4 md:pl-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="bg-teal-600 text-white text-xs font-bold px-2.5 py-1 rounded">2日目</span>
                <h3 className="font-bold text-stone-900 text-base md:text-lg">爽快な朝湯〜周辺散策と帰路へ</h3>
              </div>
              <ul className="text-xs md:text-sm text-stone-600 space-y-2 leading-relaxed">
                <li>・<strong className="text-stone-800">07:00〜</strong> 朝の光が差し込む「宮津温泉 料理旅館 茶六別館」の湯船へ。清々しい空気の中で手足を伸ばし、心地よい目覚めを迎える。</li>
                <li>・<strong className="text-stone-800">08:00〜</strong> 「宮津温泉 料理旅館 茶六別館」こだわりの朝食を堪能。炊きたてのごはんや身体に優しい料理で、一日のエネルギーをチャージ。</li>
                <li>・<strong className="text-stone-800">10:00〜</strong> チェックアウト後は近隣エリアを観光。本記事でご紹介した「浅虫温泉 椿館」の周辺スポットや名産店に立ち寄り、お土産を選んで帰路へ。</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-stone-50 rounded-2xl p-6 md:p-10 border border-stone-200/80 mb-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              よくある質問（FAQ）と宮津温泉 料理旅館 茶六別館の滞在ポイント
            </h2>
          </div>
          <div className="space-y-4">
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 「宮津温泉 料理旅館 茶六別館」へのアクセスや移動方法について</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 「宮津温泉 料理旅館 茶六別館」へは、車：京都縦貫自動車道宮津天橋立ＩＣより約５分 電車：京都丹後鉄道宮津駅より徒歩１０分 高速バス：キセンバ港館より徒歩７分。最寄りの宮津（京都）駅からの経路案内も充実しています。
              </p>
            </details>
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 「宮津温泉 料理旅館 茶六別館」の魅力や予約時のポイントは？</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 「宮津温泉 料理旅館 茶六別館」は『天橋立を望む数奇屋造りの料理宿。春夏には岩牡蠣など丹後の海の幸を生かした京風会席をご堪能下。』という点が旅行者から高く支持されています。連休や人気シーズンは予約が集中しやすいため、空室状況はお早めのチェックが安心です。
              </p>
            </details>
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. プラン選びや宿の比較で意識すべき点は？</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 「宮津温泉 料理旅館 茶六別館」と「浅虫温泉 椿館」はそれぞれ立地や施設設備に独自の魅力があります。湯巡り重視か、料理やお部屋の寛ぎ重視かなど、今回の旅の目的に合わせてお選びください。
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
            <a href="/autumn-budget-aomori-hachinohe-station-tanesashi-senbeijiru-hotels-stay/" className="block p-4 rounded-xl bg-stone-50 hover:bg-amber-50 border border-stone-200 transition group">
              <span className="text-[10px] font-bold text-amber-700 block mb-1">関連特集ガイド</span>
              <span className="text-xs font-bold text-stone-800 group-hover:text-amber-800 line-clamp-2 leading-relaxed">八戸駅・本八戸：種差海岸の秋絶景＆館鼻岸壁朝市・せんべい汁！2,000円台〜泊まれる格安ホテル5選</span>
            </a>
            <a href="/furusato-tax-hakkoda-sukayu-autumn-leaves-stay/" className="block p-4 rounded-xl bg-stone-50 hover:bg-amber-50 border border-stone-200 transition group">
              <span className="text-[10px] font-bold text-amber-700 block mb-1">関連特集ガイド</span>
              <span className="text-xs font-bold text-stone-800 group-hover:text-amber-800 line-clamp-2 leading-relaxed">八甲田山ロープウェーの錦秋パノラマ＆酸ヶ湯温泉ヒバ千人風呂！秘湯宿×ふるさと納税厳選ガイド青森</span>
            </a>
            <a href="/tokyo-aomori-bus-vs-shinkansen-guide/" className="block p-4 rounded-xl bg-stone-50 hover:bg-amber-50 border border-stone-200 transition group">
              <span className="text-[10px] font-bold text-amber-700 block mb-1">関連特集ガイド</span>
              <span className="text-xs font-bold text-stone-800 group-hover:text-amber-800 line-clamp-2 leading-relaxed">東京〜青森・弘前：新幹線はやぶさ vs 夜行バス徹底比較！料金半額以下の夜行旅＆奥入瀬渓流・弘前城1泊2日モデルコース</span>
            </a>
            <a href="/winter-aomori-owani-hirosaki-onsen-moyashi-tsugarugyu-stay/" className="block p-4 rounded-xl bg-stone-50 hover:bg-amber-50 border border-stone-200 transition group">
              <span className="text-[10px] font-bold text-amber-700 block mb-1">関連特集ガイド</span>
              <span className="text-xs font-bold text-stone-800 group-hover:text-amber-800 line-clamp-2 leading-relaxed">津軽で過ごす冬の旅（11・12月）！冬限定「大鰐温泉もやし」と開湯800年の名湯！名宿5選</span>
            </a>
          </div>
          <div className="pt-6 border-t border-stone-100">
            <h3 className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-3">人気の都道府県から宿を探す</h3>
            <div className="flex flex-wrap gap-2">
              <Link
                href="/prefectures/chiba/"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                千葉県の宿・温泉
              </Link>
              <Link
                href="/prefectures/tokyo/"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                東京都の宿・温泉
              </Link>
              <Link
                href="/prefectures/kagoshima/"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                鹿児島県の宿・温泉
              </Link>
              <Link
                href="/prefectures/fukuoka/"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                福岡県の宿・温泉
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
              📊 2026年：本格茶室で一服の静寂を。お点前体験＆日本庭園露天風呂が自慢の和モダン宿5選：掲載宿スペック一覧比較表＆宿泊者クチコミ・アクセス詳細分析
            </h2>
            <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
              楽天トラベル公式APIより取得した「2026年：本格茶室で一服の静寂を。お点前体験＆日本庭園露天風呂が自慢の和モダン宿5選」掲載宿の所在地・最寄り駅・駐車場条件・クチコミ評価・参考最安料金を一覧で比較できます。公共交通機関（新幹線・在来線・送迎バス）利用の方もマイカー・レンタカー利用の方も、旅のスタイルに合った一軒をお選びください。
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
                <td className="p-3 font-bold text-stone-900">1. 宮津温泉　料理旅館　茶六別館</td>
                <td className="p-3 text-stone-600">京都府宮津市島崎2039-4</td>
                <td className="p-3 text-stone-600">宮津（京都）駅周辺</td>
                <td className="p-3 text-stone-600">有り　１２台　無料　宿の左斜め前にございます</td>
                <td className="p-3 font-bold text-amber-600">★4.56（206件）</td>
                <td className="p-3 font-bold text-rose-600">¥18,700〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F7027%2F7027.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">2. 金沢辰口温泉　まつさき</td>
                <td className="p-3 text-stone-600">石川県能美市辰口町3-1</td>
                <td className="p-3 text-stone-600">小松駅周辺</td>
                <td className="p-3 text-stone-600">有り　８０台　無料</td>
                <td className="p-3 font-bold text-amber-600">★4.68（415件）</td>
                <td className="p-3 font-bold text-rose-600">¥20,625〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F38847%2F38847.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">3. 庭園と感動の宿　富士山温泉　ホテル鐘山苑</td>
                <td className="p-3 text-stone-600">山梨県富士吉田市上吉田東9-1-18</td>
                <td className="p-3 text-stone-600">富士吉田駅周辺</td>
                <td className="p-3 text-stone-600">有り　5００台　無料</td>
                <td className="p-3 font-bold text-amber-600">★4.69（1165件）</td>
                <td className="p-3 font-bold text-rose-600">¥22,000〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F19206%2F19206.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">4. 浅虫温泉　椿館</td>
                <td className="p-3 text-stone-600">青森県青森市浅虫内野14</td>
                <td className="p-3 text-stone-600">浅虫温泉駅周辺</td>
                <td className="p-3 text-stone-600">有り　35台　無料　先着順</td>
                <td className="p-3 font-bold text-amber-600">★4.55（622件）</td>
                <td className="p-3 font-bold text-rose-600">¥13,200〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F13755%2F13755.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">5. 有馬温泉　高山荘　華野</td>
                <td className="p-3 text-stone-600">兵庫県神戸市北区有馬町400-1</td>
                <td className="p-3 text-stone-600">有馬温泉駅周辺</td>
                <td className="p-3 text-stone-600">無料駐車場12台（15:00～翌朝11:00迄）完全予約制　満車時は近隣駐車場 送迎有。大型車不可。</td>
                <td className="p-3 font-bold text-amber-600">★4.44（359件）</td>
                <td className="p-3 font-bold text-rose-600">¥17,545〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F31801%2F31801.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
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
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">宮津温泉　料理旅館　茶六別館</h3>
                  <span className="text-xs text-stone-400 ml-2">（みやづおんせん　ちゃろくべっかん）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥18,700〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/7027/7027_room.jpg" alt="宮津温泉　料理旅館　茶六別館 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>天橋立を望む数奇屋造りの料理宿。春夏には岩牡蠣など丹後の海の幸を生かした京風会席をご堪能下さい。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 京都府宮津市島崎2039-4 ／ 最寄り駅：宮津（京都） ／ 交通案内：車：京都縦貫自動車道宮津天橋立ＩＣより約５分　電車：京都丹後鉄道宮津駅より徒歩１０分　高速バス：キセンバ港館より徒歩７分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　１２台　無料　宿の左斜め前にございます</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.49 ／ 立地 ★4.29 ／ 部屋 ★4.31 ／ 設備 ★4.26 ／ 風呂 ★4.4 ／ 食事 ★4.66</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「クチコミの詳細はこちらから　https://review.travel.rakuten.co.jp/hotel/voice/7027?reviewId=33123479537429　2026-09-27 12:08:22投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #2</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">金沢辰口温泉　まつさき</h3>
                  <span className="text-xs text-stone-400 ml-2">（たつのくちおんせん　まつさき）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥20,625〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/38847/38847_kya.jpg" alt="金沢辰口温泉　まつさき 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>温泉客室24室【鳳凰は露天風呂付】料理自慢＆全て個室食。金沢駅から電車と送迎で30分。お一人様歓迎</p>
                  <p><strong>【所在地・アクセス】</strong>〒 石川県能美市辰口町3-1 ／ 最寄り駅：小松 ／ 交通案内：関東方面：IR松任駅より車20分、関西方面：JR小松駅より車20分　小松空港より車25分　※要予約で送迎がございます</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　８０台　無料</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「心温まるおもてなしで最高の思い出に妊娠中に2人で最後の思い出に、、と思い伺いました。食事の変更など柔軟に対応してくださり、体調面も気にかけていただき、安心して過ごせました。またお部屋もグレ…　2026-08-17 15:45:45投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #3</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">庭園と感動の宿　富士山温泉　ホテル鐘山苑</h3>
                  <span className="text-xs text-stone-400 ml-2">（ていえんとかんどうのやど　ふじさんおんせん　ほてるかねやまえん）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥22,000〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/19206/19206_bath.jpg" alt="庭園と感動の宿　富士山温泉　ホテル鐘山苑 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>富士山の見える絶景露天風呂！【２０２４年プロが選んだ旅館１００選・全国総合８位】</p>
                  <p><strong>【所在地・アクセス】</strong>〒 山梨県富士吉田市上吉田東9-1-18 ／ 最寄り駅：富士吉田 ／ 交通案内：富士急行線富士山駅より１３時～１８時の間無料送迎あり／車８分／駅到着時にお電話下さい／翌日のお送りは８：００より３０分毎</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　5００台　無料</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.69 ／ 立地 ★4.71 ／ 部屋 ★4.64 ／ 設備 ★4.6 ／ 風呂 ★4.73 ／ 食事 ★4.75</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「食事と温泉は最高だが運営姿勢に疑問あり〇お食事:素晴らしい。いわゆる温泉旅館ランキング上位の旅館だということが他の上位旅館に実際宿泊して比較してみて理解できた。夕飯のお肉は少し残念。温かく出してほ…　2026-10-10 11:41:48投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #4</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">浅虫温泉　椿館</h3>
                  <span className="text-xs text-stone-400 ml-2">（あさむしおんせん　つばきかん）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥13,200〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/13755/13755_war.jpg" alt="浅虫温泉　椿館 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>９つ自家源泉・飲泉・源泉料理。版画家棟方志功の直筆画多数</p>
                  <p><strong>【所在地・アクセス】</strong>〒 青森県青森市浅虫内野14 ／ 最寄り駅：浅虫温泉 ／ 交通案内：青い森鉄道「浅虫温泉駅」下車 / 東北自動車道 青森東ICより1５分 / 青森空港より５０分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　35台　無料　先着順</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「棟方志功縁の宿、料理もサービスも最高棟方志功縁の宿。料理最高サ-ビスも満点。」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #5</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">有馬温泉　高山荘　華野</h3>
                  <span className="text-xs text-stone-400 ml-2">（ありまおんせん　たかやまそう　はなの）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥17,545〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/31801/31801_r1.jpg" alt="有馬温泉　高山荘　華野 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>神戸有馬の温泉街を見下ろす高台に、アートとお花、旬の美食、上質な金泉・銀泉。心に溶け合う小さなお宿。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 兵庫県神戸市北区有馬町400-1 ／ 最寄り駅：有馬温泉 ／ 交通案内：大阪より約60分/三ノ宮・新神戸より約30分／神戸電鉄、バス 有馬温泉駅から徒歩10分 送迎有(要電話)</p>
                  <p><strong>【駐車場・マイカー利用】</strong>無料駐車場12台（15:00～翌朝11:00迄）完全予約制　満車時は近隣駐車場 送迎有。大型車不可。</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「金泉と銀泉を堪能、静かで落ち着いた大人の空間有馬温泉の駅からブラブラと道沿いのお店を見ながら、徒歩で宿に向かいましたが、ちょうど良い距離でした。館内は良い香りがして落ち着いた雰囲気。温泉は金泉、銀。」
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
    
      <HubRelatedPosts currentSlug="luxury-private-onsen-with-tea-ceremony-lounge" />
</div>
  );
}
