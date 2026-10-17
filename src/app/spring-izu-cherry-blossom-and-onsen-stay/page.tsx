import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { Star, MapPin, Sparkles, CheckCircle2, ChevronRight, Award, ExternalLink } from 'lucide-react';

export const metadata: Metadata = {
  title: '2026年：一足早い春の訪れ！早咲き河津桜＆伊豆金目鯛姿煮と海一望露天風呂の宿5選 | 日本全国・旅宿クラウド',
  description: '2026年最新！濃いピンク色に染まる河津桜並木と菜の花の絶景！名物金目鯛の姿煮・舟盛り会席と太平洋を一望する絶景露天風呂が自慢の伊豆名宿5選。',
  keywords: ["2026年", "一足早い春の訪れ！早咲き河津桜", "日本全国", "旅宿クラウド", "温泉宿", "宿泊予約", "楽天トラベル"],
  openGraph: {
    title: '2026年：一足早い春の訪れ！早咲き河津桜＆伊豆金目鯛姿煮と海一望露天風呂の宿5選',
    description: '2026年最新！濃いピンク色に染まる河津桜並木と菜の花の絶景！名物金目鯛の姿煮・舟盛り会席と太平洋を一望する絶景露天風呂が自慢の伊豆名宿5選。',
    type: 'article',
    url: 'https://croud-travel.pages.dev/spring-izu-cherry-blossom-and-onsen-stay',
  },
  alternates: {
    canonical: "https://croud-travel.pages.dev/spring-izu-cherry-blossom-and-onsen-stay/",
  },
};

const hotels: any[] = [
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
    "userReview": "ロビーからの富士山とドリンク飲み放題に大満足朝ロビーから富士山を見ることができました。ラウンジにも飲み物があり、お食事の時も後の支払いを気にすることなくドリンクが飲むことができ、大満足でした。",
    "hotelMinCharge": 9900,
    "address1": "静岡県",
    "address2": "伊東市吉田901-75",
    "telephoneNo": "11",
    "access": "【最寄り駅】川奈駅より車で約15分（※無料送迎／予約制）【最寄りIC】小田原西ICから車で約90分",
    "parkingInformation": "有り　35台（無料）予約不要　　　Wi-fi　：有り（館内全て）",
    "nearestStation": "川奈（静岡）",
    "hotelSpecial": "広大な大自然に佇む大人の癒し空間でオールインクルーシブを満喫◇伊豆の味覚と四季折々の景色を味わう",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F158403%2F158403.html"
  },
  {
    "hotelNo": 128493,
    "hotelName": "伊豆高原　記念日を祝う宿　自然家．Ｈａｃｏ（しぜんや．ハコ）",
    "hotelKanaName": "いずこうげん　きねんびをいわうやど　しぜんや．はこ",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D128493",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D128493%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D128493",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D128493",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/128493/128493.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/128493.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/128493/128493_room.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/128493/128493map.gif",
    "reviewCount": 336,
    "reviewAverage": 4.69,
    "userReview": "初めて宿泊しました。特別室は、ゆったりくつろぐことができました。なにより、客室露天風呂が最高でした。部屋食も充実していました。Wi-Fiはあまりつながりませんでしたが、それがまたよかったです。スタッフ。",
    "hotelMinCharge": 18800,
    "address1": "静岡県",
    "address2": "伊東市富戸1160-11",
    "telephoneNo": "08",
    "access": "富戸駅より送迎可能（要予約）徒歩２０分／東名厚木ＩＣ、沼津ＩＣより約９０分 電気自動車でお越しの方 充電可能！",
    "parkingInformation": "有り　　無料　",
    "nearestStation": "富戸",
    "hotelSpecial": "【全室露天風呂付客室＆お部屋食の安心Relaxスタイル】海一望、絶景ロケーションで二人きり癒しステイ",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F128493%2F128493.html"
  },
  {
    "hotelNo": 52947,
    "hotelName": "Ｇａｌｌｅｒｙ　Ｃｏｕｒｔ　Ｏｆａ　ａｔｕ",
    "hotelKanaName": "ぎゃらりー　こーと　おふぁ　あとぅ",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D52947",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D52947%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D52947",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D52947",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/52947/52947.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/52947.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/52947/52947_w.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/52947/52947map.gif",
    "reviewCount": 137,
    "reviewAverage": 3.88,
    "userReview": "夕食メインディッシュ格別に上手い!居心地が良い夕食のメインディッシュが格別に上手い!",
    "hotelMinCharge": 4800,
    "address1": "静岡県",
    "address2": "賀茂郡河津町谷津233-7",
    "telephoneNo": "06",
    "access": "伊豆急河津駅より徒歩１０分。伊豆高原よりR135車で30分、沼津ICからR414車で90分。",
    "parkingInformation": "有　敷地内22台　無料　予約不要",
    "nearestStation": "河津",
    "hotelSpecial": "吹き抜けの館内は海洋画の小美術館。潮の薫りを添えたディナーが好評。無料貸切露天は24時間対応。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F52947%2F52947.html"
  },
  {
    "hotelNo": 128262,
    "hotelName": "旅師の宿　やかた",
    "hotelKanaName": "たびしのやど　やかた",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D128262",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D128262%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D128262",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D128262",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/128262/128262.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/128262.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/128262/128262_ru.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/128262/128262map.gif",
    "reviewCount": 67,
    "reviewAverage": 4.31,
    "userReview": "魚料理が最高、店主の気配りも温かい宿 夕食の魚料理が最高でした。宿は店主自ら夕食時に各テーブルを回るなど気配りや、イレギュラーにも応えてくれでとても良い時間を過ごせました。建物自体は古いも。",
    "hotelMinCharge": 8800,
    "address1": "静岡県",
    "address2": "賀茂郡河津町谷津333",
    "telephoneNo": "91",
    "access": "河津駅より徒歩５分　河津桜並木迄徒歩1分",
    "parkingInformation": "専用無料駐車場　車３０台　大型バス駐車可能　バイク専用屋内駐輪場 駐車場２０台",
    "nearestStation": "河津",
    "hotelSpecial": "地魚は水揚げ即下処理　当宿ならではの美味しい地魚を味わってください",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F128262%2F128262.html"
  },
  {
    "hotelNo": 138065,
    "hotelName": "野の花亭こむらさき",
    "hotelKanaName": "ののはなていこむらさき",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D138065",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D138065%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D138065",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D138065",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/138065/138065.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/138065.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/138065/138065_rm1.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/138065/138065map.gif",
    "reviewCount": 58,
    "reviewAverage": 4.22,
    "userReview": "食事の美味しさに大満足ご飯美味しかったです。",
    "hotelMinCharge": 8800,
    "address1": "静岡県",
    "address2": "下田市西本郷1-5-30",
    "telephoneNo": "26",
    "access": "伊豆急下田駅から徒歩３分　降車改札を出て右に進む、線路沿いを進みビジネスホテルTSUMEKIの角を左に曲がり道路を渡る。",
    "parkingInformation": "同敷地内旅館建物沿い裏手に屋外駐車場有り　宿泊者無料",
    "nearestStation": "伊豆急下田",
    "hotelSpecial": "１日僅か５組みだけ　おもてなしの日本旅館　全室露天風呂付き客室",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F138065%2F138065.html"
  }
];

export default function FeatureDetailPage() {

  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【2026年】一足早い春の訪れ！早咲き河津桜＆伊豆金目鯛姿煮と海一望露天風呂の宿5選 | 日本全国・旅宿クラウド",
    "description": "2026年最新！濃いピンク色に染まる河津桜並木と菜の花の絶景！名物金目鯛の姿煮・舟盛り会席と太平洋を一望する絶景露天風呂が自慢の伊豆名宿5選。",
    "url": "https://croud-travel.pages.dev/spring-izu-cherry-blossom-and-onsen-stay/",
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
      { "@type": "ListItem", "position": 2, "name": "【2026年】一足早い春の訪れ！早咲き河津桜＆伊豆金目鯛姿煮と海一望露天風呂の宿5選 | 日本全国・旅宿クラウド", "item": "https://croud-travel.pages.dev/spring-izu-cherry-blossom-and-onsen-stay/" }
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
            早咲き河津桜＆名物金目鯛姿煮の伊豆名湯宿
          </span>
        </div>
      </div>

      {/* ヒーローヘッダー */}
      <header className="relative bg-gradient-to-r from-amber-900 via-stone-800 to-slate-900 text-white py-16 px-4">
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-300 px-4 py-1.5 rounded-full text-sm font-semibold backdrop-blur-sm border border-amber-400/30">
            <Sparkles className="w-4 h-4" /> 早咲き河津桜×名物金目鯛姿煮
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight leading-tight">「2026年」一足早い春の訪れ！早咲き河津桜＆伊豆金目鯛姿煮と海一望露天風呂の宿5選</h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed pt-2">
            ひと足早く春を告げる濃密なピンクの「河津桜」と黄色い菜の花のコントラスト。桜のトンネルを散策した後は、甘辛く煮付けた極上金目鯛の姿煮と獲れたて地魚舟盛り、青い海を見渡す絶景温泉で温まる春の伊豆トリップ。
          </p>
        </div>
      </header>

      {/* メインコンテンツ */}
      <main className="max-w-5xl mx-auto px-4 py-12 space-y-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"「伊豆高原温泉ホテル 森の泉」へのアクセスや移動方法について","acceptedAnswer":{"@type":"Answer","text":"「伊豆高原温泉ホテル 森の泉」へは、最寄り駅 川奈駅より車で約15分（※無料送迎／予約制） 最寄りIC 小田原西ICから車で約90分。最寄りの川奈（静岡）駅からの経路案内も充実しています。"}},{"@type":"Question","name":"「伊豆高原温泉ホテル 森の泉」の魅力や予約時のポイントは？","acceptedAnswer":{"@type":"Answer","text":"「伊豆高原温泉ホテル 森の泉」は『広大な大自然に佇む大人の癒し空間でオールインクルーシブを満喫◇伊豆の味覚と四季折々の景色を。』という点が旅行者から高く支持されています。連休や人気シーズンは予約が集中しやすいため、空室状況はお早めのチェックが安心です。"}},{"@type":"Question","name":"プラン選びや宿の比較で意識すべき点は？","acceptedAnswer":{"@type":"Answer","text":"「伊豆高原温泉ホテル 森の泉」と「伊豆高原 記念日を祝う宿 自然家．Ｈａｃｏ」はそれぞれ立地や施設設備に独自の魅力があります。湯巡り重視か、料理やお部屋の寛ぎ重視かなど、今回の旅の目的に合わせてお選びください。"}}]}) }}
      />
        {/* 特集の魅力と選び方 */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200 space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
            <Award className="w-6 h-6 text-amber-600" />
            早咲き河津桜＆名物金目鯛姿煮の伊豆名湯宿の楽しみ方＆おすすめの選び方
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
                    src="https://img.travel.rakuten.co.jp/share/HOTEL/158403/158403.jpg"
                    alt="伊豆高原温泉ホテル　森の泉"
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
                      <span className="bg-slate-100 text-slate-700 font-medium px-2 py-0.5 rounded">静岡県</span>
                      <span>伊東市吉田901-75</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2 hover:text-amber-600 transition-colors">
                      <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D158403" target="_blank" rel="noopener noreferrer">
                        伊豆高原温泉ホテル　森の泉
                      </a>
                    </h3>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center text-amber-500">
                        <Star className="w-4 h-4 fill-amber-400" />
                        <span className="font-bold text-sm ml-1 text-slate-800">4.31</span>
                      </div>
                      <span className="text-xs text-slate-400">（口コミ 861 件）</span>
                      <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">楽天高評価</span>
                    </div>
                    <ul className="space-y-1 mb-4 text-xs text-slate-600 bg-slate-50 p-3 rounded-lg">
                      <li className="flex items-start gap-1"><span className="text-amber-500 shrink-0">•</span><span>広大な大自然に佇む大人の癒し空間でオールインクルーシブを満喫◇伊豆の味覚と四季折々の景色を味わう…</span></li>
                      <li className="flex items-start gap-1"><span className="text-amber-500 shrink-0">•</span><span>アクセス: 【最寄り駅】川奈駅より車で約15分（※無料送迎／予約制）【最寄りIC】小田原西ICから車で約90分</span></li>
                      <li className="flex items-start gap-1"><span className="text-amber-500 shrink-0">•</span><span>楽天トラベル総合評価: ★4.31（レビュー 861件）</span></li>
                    </ul>
                  </div>
                  
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="text-xs text-slate-400">最安目安（税込）/人</span>
                      <div className="text-lg font-bold text-rose-600">¥9,900〜</div>
                    </div>
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D158403%26f_flg%3DPLAN"
                      target="_blank"
                      rel="noopener noreferrer"
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
                    src="https://img.travel.rakuten.co.jp/share/HOTEL/128493/128493.jpg"
                    alt="伊豆高原　記念日を祝う宿　自然家．Ｈａｃｏ（しぜんや．ハコ）"
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
                      <span className="bg-slate-100 text-slate-700 font-medium px-2 py-0.5 rounded">静岡県</span>
                      <span>伊東市富戸1160-11</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2 hover:text-amber-600 transition-colors">
                      <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D128493" target="_blank" rel="noopener noreferrer">
                        伊豆高原　記念日を祝う宿　自然家．Ｈａｃｏ（しぜんや．ハコ）
                      </a>
                    </h3>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center text-amber-500">
                        <Star className="w-4 h-4 fill-amber-400" />
                        <span className="font-bold text-sm ml-1 text-slate-800">4.69</span>
                      </div>
                      <span className="text-xs text-slate-400">（口コミ 336 件）</span>
                      <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">楽天高評価</span>
                    </div>
                    <ul className="space-y-1 mb-4 text-xs text-slate-600 bg-slate-50 p-3 rounded-lg">
                      <li className="flex items-start gap-1"><span className="text-amber-500 shrink-0">•</span><span>【全室露天風呂付客室＆お部屋食の安心Relaxスタイル】海一望、絶景ロケーションで二人きり癒しステイ…</span></li>
                      <li className="flex items-start gap-1"><span className="text-amber-500 shrink-0">•</span><span>アクセス: 富戸駅より送迎可能（要予約）徒歩２０分／東名厚木ＩＣ、沼津ＩＣより約９０分 電気自動車でお越しの方 充電可能！</span></li>
                      <li className="flex items-start gap-1"><span className="text-amber-500 shrink-0">•</span><span>楽天トラベル総合評価: ★4.69（レビュー 336件）</span></li>
                    </ul>
                  </div>
                  
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="text-xs text-slate-400">最安目安（税込）/人</span>
                      <div className="text-lg font-bold text-rose-600">¥18,800〜</div>
                    </div>
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D128493%26f_flg%3DPLAN"
                      target="_blank"
                      rel="noopener noreferrer"
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
                    src="https://img.travel.rakuten.co.jp/share/HOTEL/52947/52947.jpg"
                    alt="Ｇａｌｌｅｒｙ　Ｃｏｕｒｔ　Ｏｆａ　ａｔｕ"
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
                      <span className="bg-slate-100 text-slate-700 font-medium px-2 py-0.5 rounded">静岡県</span>
                      <span>賀茂郡河津町谷津233-7</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2 hover:text-amber-600 transition-colors">
                      <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D52947" target="_blank" rel="noopener noreferrer">
                        Ｇａｌｌｅｒｙ　Ｃｏｕｒｔ　Ｏｆａ　ａｔｕ
                      </a>
                    </h3>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center text-amber-500">
                        <Star className="w-4 h-4 fill-amber-400" />
                        <span className="font-bold text-sm ml-1 text-slate-800">3.88</span>
                      </div>
                      <span className="text-xs text-slate-400">（口コミ 137 件）</span>
                      <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">楽天高評価</span>
                    </div>
                    <ul className="space-y-1 mb-4 text-xs text-slate-600 bg-slate-50 p-3 rounded-lg">
                      <li className="flex items-start gap-1"><span className="text-amber-500 shrink-0">•</span><span>吹き抜けの館内は海洋画の小美術館。潮の薫りを添えたディナーが好評。無料貸切露天は24時間対応。…</span></li>
                      <li className="flex items-start gap-1"><span className="text-amber-500 shrink-0">•</span><span>アクセス: 伊豆急河津駅より徒歩１０分。伊豆高原よりR135車で30分、沼津ICからR414車で90分。</span></li>
                      <li className="flex items-start gap-1"><span className="text-amber-500 shrink-0">•</span><span>楽天トラベル総合評価: ★3.88（レビュー 137件）</span></li>
                    </ul>
                  </div>
                  
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="text-xs text-slate-400">最安目安（税込）/人</span>
                      <div className="text-lg font-bold text-rose-600">¥4,800〜</div>
                    </div>
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D52947%26f_flg%3DPLAN"
                      target="_blank"
                      rel="noopener noreferrer"
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
                    src="https://img.travel.rakuten.co.jp/share/HOTEL/128262/128262.jpg"
                    alt="旅師の宿　やかた"
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
                      <span>賀茂郡河津町谷津333</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2 hover:text-amber-600 transition-colors">
                      <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D128262" target="_blank" rel="noopener noreferrer">
                        旅師の宿　やかた
                      </a>
                    </h3>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center text-amber-500">
                        <Star className="w-4 h-4 fill-amber-400" />
                        <span className="font-bold text-sm ml-1 text-slate-800">4.31</span>
                      </div>
                      <span className="text-xs text-slate-400">（口コミ 67 件）</span>
                      <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">楽天高評価</span>
                    </div>
                    <ul className="space-y-1 mb-4 text-xs text-slate-600 bg-slate-50 p-3 rounded-lg">
                      <li className="flex items-start gap-1"><span className="text-amber-500 shrink-0">•</span><span>地魚は水揚げ即下処理　当宿ならではの美味しい地魚を味わってください…</span></li>
                      <li className="flex items-start gap-1"><span className="text-amber-500 shrink-0">•</span><span>アクセス: 河津駅より徒歩５分　河津桜並木迄徒歩1分</span></li>
                      <li className="flex items-start gap-1"><span className="text-amber-500 shrink-0">•</span><span>楽天トラベル総合評価: ★4.31（レビュー 67件）</span></li>
                    </ul>
                  </div>
                  
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="text-xs text-slate-400">最安目安（税込）/人</span>
                      <div className="text-lg font-bold text-rose-600">¥8,800〜</div>
                    </div>
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D128262%26f_flg%3DPLAN"
                      target="_blank"
                      rel="noopener noreferrer"
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
                    src="https://img.travel.rakuten.co.jp/share/HOTEL/138065/138065.jpg"
                    alt="野の花亭こむらさき"
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
                      <span className="bg-slate-100 text-slate-700 font-medium px-2 py-0.5 rounded">静岡県</span>
                      <span>下田市西本郷1-5-30</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2 hover:text-amber-600 transition-colors">
                      <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D138065" target="_blank" rel="noopener noreferrer">
                        野の花亭こむらさき
                      </a>
                    </h3>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center text-amber-500">
                        <Star className="w-4 h-4 fill-amber-400" />
                        <span className="font-bold text-sm ml-1 text-slate-800">4.22</span>
                      </div>
                      <span className="text-xs text-slate-400">（口コミ 58 件）</span>
                      <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">楽天高評価</span>
                    </div>
                    <ul className="space-y-1 mb-4 text-xs text-slate-600 bg-slate-50 p-3 rounded-lg">
                      <li className="flex items-start gap-1"><span className="text-amber-500 shrink-0">•</span><span>１日僅か５組みだけ　おもてなしの日本旅館　全室露天風呂付き客室…</span></li>
                      <li className="flex items-start gap-1"><span className="text-amber-500 shrink-0">•</span><span>アクセス: 伊豆急下田駅から徒歩３分　降車改札を出て右に進む、線路沿いを進みビジネスホテルTSUMEKIの角を左に曲がり道路を渡る。</span></li>
                      <li className="flex items-start gap-1"><span className="text-amber-500 shrink-0">•</span><span>楽天トラベル総合評価: ★4.22（レビュー 58件）</span></li>
                    </ul>
                  </div>
                  
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="text-xs text-slate-400">最安目安（税込）/人</span>
                      <div className="text-lg font-bold text-rose-600">¥8,800〜</div>
                    </div>
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D138065%26f_flg%3DPLAN"
                      target="_blank"
                      rel="noopener noreferrer"
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
            <span className="text-xs bg-slate-100 text-slate-600 px-3 py-1.5 rounded-lg">#河津桜</span>
            <span className="text-xs bg-slate-100 text-slate-600 px-3 py-1.5 rounded-lg">#金目鯛姿煮</span>
            <span className="text-xs bg-slate-100 text-slate-600 px-3 py-1.5 rounded-lg">#伊豆温泉</span>
            <span className="text-xs bg-slate-100 text-slate-600 px-3 py-1.5 rounded-lg">#海一望露天</span>
            <span className="text-xs bg-slate-100 text-slate-600 px-3 py-1.5 rounded-lg">#東伊豆</span>
            <span className="text-xs bg-slate-100 text-slate-600 px-3 py-1.5 rounded-lg">#春の花見旅行</span>
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
              【1泊2日】伊豆高原温泉ホテル 森の泉を拠点にするおすすめ滞在モデルコース
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-l-2 border-amber-500 pl-4 md:pl-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="bg-amber-600 text-white text-xs font-bold px-2.5 py-1 rounded">1日目</span>
                <h3 className="font-bold text-stone-900 text-base md:text-lg">到着〜チェックインと名湯巡り</h3>
              </div>
              <ul className="text-xs md:text-sm text-stone-600 space-y-2 leading-relaxed">
                <li>・<strong className="text-stone-800">14:00〜</strong> 川奈（静岡）駅よりアクセス。最寄り駅 川奈駅より車で約15分（※無料送迎／予約制） 最寄りIC 小田原西ICから車で約90分。</li>
                <li>・<strong className="text-stone-800">15:30〜</strong> 「伊豆高原温泉ホテル 森の泉」にチェックイン。広大な大自然に佇む大人の癒し空間でオールインクルーシブを満喫◇伊豆の味覚と四季折々の景色を味わうなどの宿の特徴に期待を高めつつ客室へ。</li>
                <li>・<strong className="text-stone-800">17:00〜</strong> 「伊豆高原温泉ホテル 森の泉」の湯処へ。広大な大自然に佇む大人の癒し空間でオールインクルーシブを満喫◇伊豆の味とともに、夕暮れの特別な寛ぎを満喫。</li>
                <li>・<strong className="text-stone-800">19:00〜</strong> 「伊豆高原温泉ホテル 森の泉」でいただく旬の夕食。地場産の味覚を取り入れたおもてなし料理を五感でじっくり味わう贅沢なひととき。</li>
              </ul>
            </div>
            <div className="border-l-2 border-teal-500 pl-4 md:pl-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="bg-teal-600 text-white text-xs font-bold px-2.5 py-1 rounded">2日目</span>
                <h3 className="font-bold text-stone-900 text-base md:text-lg">爽快な朝湯〜周辺散策と帰路へ</h3>
              </div>
              <ul className="text-xs md:text-sm text-stone-600 space-y-2 leading-relaxed">
                <li>・<strong className="text-stone-800">07:00〜</strong> 朝の光が差し込む「伊豆高原温泉ホテル 森の泉」の湯船へ。清々しい空気の中で手足を伸ばし、心地よい目覚めを迎える。</li>
                <li>・<strong className="text-stone-800">08:00〜</strong> 「伊豆高原温泉ホテル 森の泉」こだわりの朝食を堪能。炊きたてのごはんや身体に優しい料理で、一日のエネルギーをチャージ。</li>
                <li>・<strong className="text-stone-800">10:00〜</strong> チェックアウト後は近隣エリアを観光。本記事でご紹介した「伊豆高原 記念日を祝う宿 自然家．Ｈａｃｏ」の周辺スポットや名産店に立ち寄り、お土産を選んで帰路へ。</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-stone-50 rounded-2xl p-6 md:p-10 border border-stone-200/80 mb-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              よくある質問（FAQ）と伊豆高原温泉ホテル 森の泉の滞在ポイント
            </h2>
          </div>
          <div className="space-y-4">
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 「伊豆高原温泉ホテル 森の泉」へのアクセスや移動方法について</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 「伊豆高原温泉ホテル 森の泉」へは、最寄り駅 川奈駅より車で約15分（※無料送迎／予約制） 最寄りIC 小田原西ICから車で約90分。最寄りの川奈（静岡）駅からの経路案内も充実しています。
              </p>
            </details>
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 「伊豆高原温泉ホテル 森の泉」の魅力や予約時のポイントは？</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 「伊豆高原温泉ホテル 森の泉」は『広大な大自然に佇む大人の癒し空間でオールインクルーシブを満喫◇伊豆の味覚と四季折々の景色を。』という点が旅行者から高く支持されています。連休や人気シーズンは予約が集中しやすいため、空室状況はお早めのチェックが安心です。
              </p>
            </details>
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. プラン選びや宿の比較で意識すべき点は？</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 「伊豆高原温泉ホテル 森の泉」と「伊豆高原 記念日を祝う宿 自然家．Ｈａｃｏ」はそれぞれ立地や施設設備に独自の魅力があります。湯巡り重視か、料理やお部屋の寛ぎ重視かなど、今回の旅の目的に合わせてお選びください。
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
            <a href="/furusato-tax-nasu-chause-autumn-leaves-stay/" className="block p-4 rounded-xl bg-stone-50 hover:bg-amber-50 border border-stone-200 transition group">
              <span className="text-[10px] font-bold text-amber-700 block mb-1">関連特集ガイド</span>
              <span className="text-xs font-bold text-stone-800 group-hover:text-amber-800 line-clamp-2 leading-relaxed">那須高原・茶臼岳の山岳紅葉ロープウェイ＆殺生石！那須温泉名湯・鹿の湯白濁泉×ふるさと納税厳選ガイド栃木</span>
            </a>
            <a href="/tochigi-nasu-shiobara-itamuro-kuroiso-stay/" className="block p-4 rounded-xl bg-stone-50 hover:bg-amber-50 border border-stone-200 transition group">
              <span className="text-[10px] font-bold text-amber-700 block mb-1">関連特集ガイド</span>
              <span className="text-xs font-bold text-stone-800 group-hover:text-amber-800 line-clamp-2 leading-relaxed">栃木・那須塩原＆板室・黒磯：茶臼岳・板室立ち湯＆黒磯カフェ・那須牛宿 厳選ガイド</span>
            </a>
            <a href="/winter-tochigi-nasu-itamuro-onsen-toji-tochigigyu-stay/" className="block p-4 rounded-xl bg-stone-50 hover:bg-amber-50 border border-stone-200 transition group">
              <span className="text-[10px] font-bold text-amber-700 block mb-1">関連特集ガイド</span>
              <span className="text-xs font-bold text-stone-800 group-hover:text-amber-800 line-clamp-2 leading-relaxed">那須で過ごす冬の旅（11・12月）！名物立ち湯と極上那須黒毛和牛！名宿5選</span>
            </a>
            <a href="/winter-tochigi-shiobara-onsen-yukimi-tochigi-beef-radish-stay/" className="block p-4 rounded-xl bg-stone-50 hover:bg-amber-50 border border-stone-200 transition group">
              <span className="text-[10px] font-bold text-amber-700 block mb-1">関連特集ガイド</span>
              <span className="text-xs font-bold text-stone-800 group-hover:text-amber-800 line-clamp-2 leading-relaxed">栃木・塩原温泉で過ごす冬の旅（11・12月）！極上とちぎ和牛会席！名宿5選</span>
            </a>
          </div>
          <div className="pt-6 border-t border-stone-100">
            <h3 className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-3">人気の都道府県から宿を探す</h3>
            <div className="flex flex-wrap gap-2">
              <Link
                href="/prefectures/saga"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                佐賀県の宿・温泉
              </Link>
              <Link
                href="/prefectures/yamanashi"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                山梨県の宿・温泉
              </Link>
              <Link
                href="/prefectures/kagoshima"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                鹿児島県の宿・温泉
              </Link>
              <Link
                href="/prefectures/tochigi"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                栃木県の宿・温泉
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
              📊 2026年：一足早い春の訪れ！早咲き河津桜＆伊豆金目鯛姿煮と海一望露天風呂の宿5選：掲載宿スペック一覧比較表＆宿泊者クチコミ・アクセス詳細分析
            </h2>
            <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
              楽天トラベル公式APIより取得した「2026年：一足早い春の訪れ！早咲き河津桜＆伊豆金目鯛姿煮と海一望露天風呂の宿5選」掲載宿の所在地・最寄り駅・駐車場条件・クチコミ評価・参考最安料金を一覧で比較できます。公共交通機関（新幹線・在来線・送迎バス）利用の方もマイカー・レンタカー利用の方も、旅のスタイルに合った一軒をお選びください。
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
                <td className="p-3 font-bold text-stone-900">1. 伊豆高原温泉ホテル　森の泉</td>
                <td className="p-3 text-stone-600">静岡県伊東市吉田901-75</td>
                <td className="p-3 text-stone-600">川奈（静岡）駅周辺</td>
                <td className="p-3 text-stone-600">有り　35台（無料）予約不要　　　Wi-fi　：有り（館内全て）</td>
                <td className="p-3 font-bold text-amber-600">★4.29（868件）</td>
                <td className="p-3 font-bold text-rose-600">¥9,900〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F158403%2F158403.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">2. 伊豆高原　記念日を祝う宿　自然家．Ｈａｃｏ（しぜんや．ハコ）</td>
                <td className="p-3 text-stone-600">静岡県伊東市富戸1160-11</td>
                <td className="p-3 text-stone-600">富戸駅周辺</td>
                <td className="p-3 text-stone-600">有り　　無料</td>
                <td className="p-3 font-bold text-amber-600">★4.74（342件）</td>
                <td className="p-3 font-bold text-rose-600">¥18,800〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F128493%2F128493.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">3. Ｇａｌｌｅｒｙ　Ｃｏｕｒｔ　Ｏｆａ　ａｔｕ</td>
                <td className="p-3 text-stone-600">静岡県賀茂郡河津町谷津233-7</td>
                <td className="p-3 text-stone-600">河津駅周辺</td>
                <td className="p-3 text-stone-600">有　敷地内22台　無料　予約不要</td>
                <td className="p-3 font-bold text-amber-600">★3.87（136件）</td>
                <td className="p-3 font-bold text-rose-600">¥4,800〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F52947%2F52947.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">4. 旅師の宿　やかた</td>
                <td className="p-3 text-stone-600">静岡県賀茂郡河津町谷津333</td>
                <td className="p-3 text-stone-600">河津駅周辺</td>
                <td className="p-3 text-stone-600">専用無料駐車場　車３０台　大型バス駐車可能　バイク専用屋内駐輪場 駐車場２０台</td>
                <td className="p-3 font-bold text-amber-600">★4.33（67件）</td>
                <td className="p-3 font-bold text-rose-600">¥8,800〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F128262%2F128262.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">5. 野の花亭こむらさき</td>
                <td className="p-3 text-stone-600">静岡県下田市西本郷1-5-30</td>
                <td className="p-3 text-stone-600">伊豆急下田駅周辺</td>
                <td className="p-3 text-stone-600">同敷地内旅館建物沿い裏手に屋外駐車場有り　宿泊者無料</td>
                <td className="p-3 font-bold text-amber-600">★4.18（57件）</td>
                <td className="p-3 font-bold text-rose-600">¥9,900〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F138065%2F138065.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
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
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">伊豆高原温泉ホテル　森の泉</h3>
                  <span className="text-xs text-stone-400 ml-2">（いずこうげんおんせんほてる　もりのいずみ）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥9,900〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/158403/158403_kan1.jpg" alt="伊豆高原温泉ホテル　森の泉 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>広大な大自然に佇む大人の癒し空間でオールインクルーシブを満喫◇伊豆の味覚と四季折々の景色を味わう</p>
                  <p><strong>【所在地・アクセス】</strong>〒 静岡県伊東市吉田901-75 ／ 最寄り駅：川奈（静岡） ／ 交通案内：【最寄り駅】川奈駅より車で約15分（※無料送迎／予約制）【最寄りIC】小田原西ICから車で約90分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　35台（無料）予約不要　　　Wi-fi　：有り（館内全て）</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.28 ／ 立地 ★4.21 ／ 部屋 ★4.25 ／ 設備 ★4.1 ／ 風呂 ★4.3 ／ 食事 ★4.47</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「食事と接客は素晴らしく、全体的に満足食事は夕食、朝食ともに美味しく頂きました。その際の外人スタッフの接客対応も素晴らしかったです。また出向のスタッフも親切で好印象を持ちました。部屋もきれいで満…　2026-10-09 21:25:51投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #2</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">伊豆高原　記念日を祝う宿　自然家．Ｈａｃｏ（しぜんや．ハコ）</h3>
                  <span className="text-xs text-stone-400 ml-2">（いずこうげん　きねんびをいわうやど　しぜんや．はこ）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥18,800〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/128493/128493_room.jpg" alt="伊豆高原　記念日を祝う宿　自然家．Ｈａｃｏ（しぜんや．ハコ） 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>【全室露天風呂付客室＆お部屋食の安心Relaxスタイル】海一望、絶景ロケーションで二人きり癒しステイ</p>
                  <p><strong>【所在地・アクセス】</strong>〒 静岡県伊東市富戸1160-11 ／ 最寄り駅：富戸 ／ 交通案内：富戸駅より送迎可能（要予約）徒歩２０分／東名厚木ＩＣ、沼津ＩＣより約９０分 電気自動車でお越しの方 充電可能！</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　　無料</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.78 ／ 立地 ★4.69 ／ 部屋 ★4.67 ／ 設備 ★4.64 ／ 風呂 ★4.89 ／ 食事 ★4.92</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「1日5組限定の細やかなサービスと絶景に感動今回2回目の利用です。1日5組限定ゆえのサービスの細やかさに大変満足しました。従業員の方のご対応も丁寧で気持ちがよかったです。特にご飯の満足度が高く、量も…　2026-10-08 17:31:58投稿 &lt;a href=&quot;https://img.travel.rakuten.co.jp/image/tr/api/hs/RmfmX/?f_hotel_no=128493&quot; class=&quot;3click&quot;」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #3</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">Ｇａｌｌｅｒｙ　Ｃｏｕｒｔ　Ｏｆａ　ａｔｕ</h3>
                  <span className="text-xs text-stone-400 ml-2">（ぎゃらりー　こーと　おふぁ　あとぅ）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥4,800〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/52947/52947_w.jpg" alt="Ｇａｌｌｅｒｙ　Ｃｏｕｒｔ　Ｏｆａ　ａｔｕ 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>吹き抜けの館内は海洋画の小美術館。潮の薫りを添えたディナーが好評。無料貸切露天は24時間対応。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 静岡県賀茂郡河津町谷津233-7 ／ 最寄り駅：河津 ／ 交通案内：伊豆急河津駅より徒歩１０分。伊豆高原よりR135車で30分、沼津ICからR414車で90分。</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有　敷地内22台　無料　予約不要</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「夕食メインディッシュ格別に上手い!居心地が良い夕食のメインディッシュが格別に上手い!クチコミの詳細はこちらから　https://review.travel.rakuten.co.jp/…　2026-06-26 05:04:31投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #4</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">旅師の宿　やかた</h3>
                  <span className="text-xs text-stone-400 ml-2">（たびしのやど　やかた）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥8,800〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/128262/128262_ru.jpg" alt="旅師の宿　やかた 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>地魚は水揚げ即下処理　当宿ならではの美味しい地魚を味わってください</p>
                  <p><strong>【所在地・アクセス】</strong>〒 静岡県賀茂郡河津町谷津333 ／ 最寄り駅：河津 ／ 交通案内：河津駅より徒歩５分　河津桜並木迄徒歩1分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>専用無料駐車場　車３０台　大型バス駐車可能　バイク専用屋内駐輪場 駐車場２０台</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.4 ／ 立地 ★4.07 ／ 部屋 ★3.87 ／ 設備 ★4 ／ 風呂 ★4.2 ／ 食事 ★4.73</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「魚料理が最高、店主の気配りも温かい宿 夕食の魚料理が最高でした。宿は店主自ら夕食時に各テーブルを回るなど気配りや、イレギュラーにも応えてくれでとても良い時間を過ごせました。建物自体は古いも…　2026-08-17 22:06:53投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #5</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">野の花亭こむらさき</h3>
                  <span className="text-xs text-stone-400 ml-2">（ののはなていこむらさき）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥9,900〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/138065/138065_rm1.jpg" alt="野の花亭こむらさき 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>１日僅か５組みだけ　おもてなしの日本旅館　全室露天風呂付き客室</p>
                  <p><strong>【所在地・アクセス】</strong>〒 静岡県下田市西本郷1-5-30 ／ 最寄り駅：伊豆急下田 ／ 交通案内：伊豆急下田駅から徒歩３分　降車改札を出て右に進む、線路沿いを進みビジネスホテルTSUMEKIの角を左に曲がり道路を渡る。</p>
                  <p><strong>【駐車場・マイカー利用】</strong>同敷地内旅館建物沿い裏手に屋外駐車場有り　宿泊者無料</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「食事の美味しさに大満足ご飯美味しかったですクチコミの詳細はこちらから　https://review.travel.rakuten.co.jp/hotel/voice/138065?review…　2026-08-16 22:53:58投稿」
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-6 border-t border-stone-200">
            <h3 className="text-lg font-bold text-stone-900 border-l-4 border-teal-600 pl-3">
              🗺️ あわせて巡りたい！栃木県の代表的な観光名所・歴史自然ガイド（Wikipedia公認画像・解説）
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              宿泊前後の1泊2日・2泊3日モデルコースに組み込みたい、栃木県を代表する名所・絶景スポットの解説です。チェックイン前後の荷物預かりや駅周辺のレンタカー・周遊バスを活用すると効率よく巡ることができます。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #1</span>
                <h3 className="text-base font-bold text-stone-900">日光東照宮</h3>
                <p className="text-xs text-stone-600 leading-relaxed">徳川家康公を祀る世界遺産「日光の社寺」の代表格。陽明門の豪華絢爛な彫刻や「三猿」「眠り猫」など、日本の伝統美と歴史の深さを実感できます。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #2</span>
                <h3 className="text-base font-bold text-stone-900">華厳の滝</h3>
                <p className="text-xs text-stone-600 leading-relaxed">中禅寺湖の水が高さ97mの断崖を一気に落下する日本三大名瀑の一つ。観瀑エレベーターで滝つぼ近くまで下りると、水煙と爆音の圧倒的なスケールに圧倒されます。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #3</span>
                <h3 className="text-base font-bold text-stone-900">あしかがフラワーパーク</h3>
                <p className="text-xs text-stone-600 leading-relaxed">樹齢150年を超える大藤棚や長さ80mの白藤のトンネルが有名な花のテーマパーク。CNN「世界のアメイジングな旅行先10選」にも選ばれた幻想的な美しさです。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              <div className="aspect-video relative overflow-hidden bg-stone-200"><img src="https://upload.wikimedia.org/wikipedia/commons/a/a3/20090321%E9%82%A3%E9%A0%88%E5%B2%B3.jpg?utm_source=ja.wikipedia.org&amp;utm_campaign=api&amp;utm_content=thumbnail_unscaled" alt="那須高原" className="w-full h-full object-cover" loading="lazy" /></div>
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #4</span>
                <h3 className="text-base font-bold text-stone-900">那須高原</h3>
                <p className="text-xs text-stone-600 leading-relaxed">那須岳の裾野に広がる日本有数のロイヤルリゾート。おしゃれなカフェや美術館、温泉、アミューズメント施設が点在し、爽やかな高原ドライブに最適です。 那須高原（なすこうげん）とは、栃木県北部の那須岳の南側山麓地域を言い、那須岳の標高千数百メートルの地域より東北本線、国道4号が通る標高300m辺りまで、緩やかな斜面が広がる。また、那珂川を挟んで那須野が原、那須高原の北西側は福島県の甲子高原に連なる。…</p>
              </div>
            </div>
            </div>
          </div>

          <div className="bg-amber-50/70 rounded-2xl p-5 md:p-6 border border-amber-200 space-y-3 text-xs text-stone-700 leading-relaxed">
            <h3 className="text-sm md:text-base font-bold text-amber-950">
              💡 栃木県エリアの宿泊予約・シーズン別ベストタイミングと節約ノウハウ
            </h3>
            <p>
              <strong>1. 早期予約と楽天トラベルクーポンの併用：</strong> 栃木県の人気温泉宿・リゾートホテルは、週末や連休・紅葉・年末年始の60日〜30日前から一気に予約が埋まります。毎月5と0のつく日やスーパーSALE期間中に配布される宿クーポン・自治体クーポンを併用すると、通常より最大10〜20%お得に予約可能です。
            </p>
            <p>
              <strong>2. 夕食・朝食プランと部屋タイプの選び方：</strong> 地元産の旬魚介やブランド牛会席を味わうなら「夕朝食付きプラン」、周辺の屋台・老舗居酒屋・ご当地グルメを食べ歩くなら「朝食付き」または「素泊まり＋天然温泉大浴場付きホテル」を選ぶと予算と満足度のバランスが最適化されます。
            </p>
          </div>
        </section>

      </main>
    
      <HubRelatedPosts currentSlug="spring-izu-cherry-blossom-and-onsen-stay" />
</div>
  );
}
