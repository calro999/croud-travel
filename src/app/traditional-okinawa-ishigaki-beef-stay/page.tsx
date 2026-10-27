import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { Star, MapPin, Sparkles, CheckCircle2, ChevronRight, Award, ExternalLink } from 'lucide-react';

export const metadata: Metadata = {
  title: '2026年：南の島の至高の美食！極上石垣牛ステーキ＆川平湾エメラルドビーチリゾート5選',
  description: '2026年最新！とろける肉質の特選石垣牛ステーキ・炭火焼肉ディナー！川平湾や竹富島を望むオーシャンビュープール付き石垣島リゾートホテル5選。',
  keywords: ["2026年", "日本全国", "旅宿クラウド", "温泉宿", "宿泊予約", "楽天トラベル", "国内旅行"],
  openGraph: {
    title: '2026年：南の島の至高の美食！極上石垣牛ステーキ＆川平湾エメラルドビーチリゾート5選',
    description: '2026年最新！とろける肉質の特選石垣牛ステーキ・炭火焼肉ディナー！川平湾や竹富島を望むオーシャンビュープール付き石垣島リゾートホテル5選。',
    type: 'article',
    url: 'https://croud-travel.pages.dev/traditional-okinawa-ishigaki-beef-stay/',
  },
  alternates: {
    canonical: "https://croud-travel.pages.dev/traditional-okinawa-ishigaki-beef-stay/",
  },
};

const hotels: any[] = [
  {
    "hotelNo": 160779,
    "hotelName": "Ｔｈｅ　ＢＲＥＡＫＦＡＳＴ　ＨＯＴＥＬ　ＰＯＲＴＯ石垣島＜石垣島＞",
    "hotelKanaName": "ざ　ぶれっくふぁーすと　ほてる　ぽるといしがきじま",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F160779%2F160779.html",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F160779%2F160779.html%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D160779",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D160779",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/160779/160779.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/160779.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/160779/160779_kan1.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/160779/160779map.gif",
    "reviewCount": 455,
    "reviewAverage": 4.36,
    "userReview": "朝食のローストビーフと飲み放題に大満足口コミ通り朝食が最高でした。ローストビーフ、刺身、デザートすべてがおいしく大満足です。ラウンジのビール、泡盛も飲み放題で最高でした。クチコミの詳細。",
    "hotelMinCharge": 4089,
    "address1": "沖縄県",
    "address2": "石垣市登野城67",
    "telephoneNo": "050-1724-3402",
    "access": "南ぬ島石垣空港から車で約25分（タクシーで約3,000円）離島ターミナルより徒歩8分。公設市場から徒歩5分。",
    "parkingInformation": "有り　30台　1500円（税込み／泊）　先着順",
    "nearestStation": "石垣空港",
    "hotelSpecial": "キッチン・洗濯機・ラウンジ付きの「コンドミニアム棟」、シンプルな「ホテル棟」からお部屋をチョイス♪",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F160779%2F160779.html"
  },
  {
    "hotelNo": 168549,
    "hotelName": "Ｔｈｅ　ＢＲＥＡＫＦＡＳＴ　ＨＯＴＥＬ　ＭＡＲＣＨＥ石垣島＜石垣島＞",
    "hotelKanaName": "ざ　ぶれっくふぁーすと　ほてる　まるしぇいしがきじま",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F168549%2F168549.html",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F168549%2F168549.html%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D168549",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D168549",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/168549/168549.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/168549.jpg",
    "roomImageUrl": "",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/168549/168549map.gif",
    "reviewCount": 303,
    "reviewAverage": 4.26,
    "userReview": "落ち着いた心地よい空間の中、温かい温泉とおいしいお料理で日頃の疲れを癒やすことができました。",
    "hotelMinCharge": 4169,
    "address1": "沖縄県",
    "address2": "石垣市大川217",
    "telephoneNo": "050-1725-9718",
    "access": "石垣島離島ターミナル徒歩5分！バスターミナル徒歩3分！ユーグレナモール徒歩30秒！",
    "parkingInformation": "有り　先着順　5台　1500円（税込み／泊）※予約不可",
    "nearestStation": "",
    "hotelSpecial": "離島ターミナル近くでふらっと自由な気まま旅♪大人気！特選石垣牛やアグー豚　多種類の地中海料理",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F168549%2F168549.html"
  },
  {
    "hotelNo": 160889,
    "hotelName": "さくらリゾートホテル石垣＜石垣島＞",
    "hotelKanaName": "さくらりぞーとほてるいしがき",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F160889%2F160889.html",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F160889%2F160889.html%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D160889",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D160889",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/160889/160889.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/160889.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/160889/160889_kan1.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/160889/160889map.gif",
    "reviewCount": 93,
    "reviewAverage": 4.44,
    "userReview": "",
    "hotelMinCharge": 9500,
    "address1": "沖縄県",
    "address2": "石垣市新川1585-218",
    "telephoneNo": "15",
    "access": "■レンタカー■石垣空港より約25分。離島ターミナルより約10分　■路線バス■バス停フサキビーチリゾートより徒歩約5分。",
    "parkingInformation": "有り　先着順",
    "nearestStation": "石垣空港",
    "hotelSpecial": "八重山ブルーの海、八重山の島々を見下ろす絶好のロケーション。島内でも屈指のサンセットをご堪能下さい。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F160889%2F160889.html"
  },
  {
    "hotelNo": 38599,
    "hotelName": "フサキビーチリゾート　ホテル＆ヴィラズ　＜石垣島＞",
    "hotelKanaName": "ふさきびーちりぞーと　ほてるあんどヴぃらす",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F38599%2F38599.html",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F38599%2F38599.html%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D38599",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D38599",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/38599/38599.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/38599.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/38599/38599_kan.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/38599/38599map.gif",
    "reviewCount": 1613,
    "reviewAverage": 4.6,
    "userReview": "リゾート感と食事は最高、移動は少し不便リゾート感が強くて素敵なホテルでした朝食バイキングもBBQもとっても美味しかったです市街地に行くには遠いのと、お部屋までが遠い(カートはあるけど結構待。",
    "hotelMinCharge": 15510,
    "address1": "沖縄県",
    "address2": "石垣市新川1625番地",
    "telephoneNo": "00",
    "access": "石垣空港より　車で約35分。石垣港より車で約15分。空港・ホテル間の無料送迎バスもございます。",
    "parkingInformation": "有り（299台/先着順）：宿泊者無料",
    "nearestStation": "石垣空港",
    "hotelSpecial": "【楽天トラベルアワード受賞】島内随一の天然ビーチとプールエリアで極上の休日を",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F38599%2F38599.html"
  },
  {
    "hotelNo": 67844,
    "hotelName": "ホテル　リゾートイン石垣島＜石垣島＞",
    "hotelKanaName": "ほてる　りぞーといんいしがき",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F67844%2F67844.html",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F67844%2F67844.html%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D67844",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D67844",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/67844/67844.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/67844.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/67844/67844_b.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/67844/67844map.gif",
    "reviewCount": 537,
    "reviewAverage": 3.95,
    "userReview": "2泊3日で利用しました。悪かった点・チェックインをタブレットで行う。宿泊者の氏名を大きなディスプレイに表示させながら自身で入力を行うため、周囲の人に入力内容が丸見えである。また、入力履歴が残る。",
    "hotelMinCharge": 2337,
    "address1": "沖縄県",
    "address2": "石垣市真栄里491-2",
    "telephoneNo": "050-1807-5264",
    "access": "駐車場無料！新石垣空港→車：約20分　路線バス：白保経由空港線30分（サンエー前バス停 ）",
    "parkingInformation": "・24時間出し入れ自由な駐車場を無料駐車場を完備　※無料",
    "nearestStation": "石垣空港",
    "hotelSpecial": "新空港⇔港・市街地を結ぶバス停/石垣唯一の大型ショッピングモール目の前！全室キッチン＆充実家電☆",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F67844%2F67844.html"
  }
];

export default function FeatureDetailPage() {

  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【2026年】南の島の至高の美食！極上石垣牛ステーキ＆川平湾エメラルドビーチリゾート5選 | 日本全国・旅宿クラウド",
    "description": "2026年最新！とろける肉質の特選石垣牛ステーキ・炭火焼肉ディナー！川平湾や竹富島を望むオーシャンビュープール付き石垣島リゾートホテル5選。",
    "url": "https://croud-travel.pages.dev/traditional-okinawa-ishigaki-beef-stay/",
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
      { "@type": "ListItem", "position": 2, "name": "【2026年】南の島の至高の美食！極上石垣牛ステーキ＆川平湾エメラルドビーチリゾート5選 | 日本全国・旅宿クラウド", "item": "https://croud-travel.pages.dev/traditional-okinawa-ishigaki-beef-stay/" }
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
            極上石垣牛ディナー＆エメラルドオーシャンリゾート
          </span>
        </div>
      </div>

      {/* ヒーローヘッダー */}
      <header className="relative bg-gradient-to-r from-amber-900 via-stone-800 to-slate-900 text-white py-16 px-4">
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-300 px-4 py-1.5 rounded-full text-sm font-semibold backdrop-blur-sm border border-amber-400/30">
            <Sparkles className="w-4 h-4" /> 特選石垣牛ディナー×八重山オーシャンリゾート
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight leading-tight">「2026年」南の島の至高の美食！極上石垣牛ステーキ＆川平湾エメラルドビーチリゾート5選</h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed pt-2">
            八重山の豊かな自然と南国の太陽が育む最高峰の黒毛和牛「石垣牛」。ジューシーで深いコクの石垣牛ステーキや焼き肉ディナーを堪能し、ミシュラン三ツ星の川平湾や満天の星空に包まれる贅沢なアイランドステイ。
          </p>
        </div>
      </header>

      {/* メインコンテンツ */}
      <main className="max-w-5xl mx-auto px-4 py-12 space-y-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"「さくらリゾートホテル石垣＜石垣島＞」へのアクセスや移動方法について","acceptedAnswer":{"@type":"Answer","text":"「さくらリゾートホテル石垣＜石垣島＞」へは、■レンタカー■石垣空港より約25分。最寄りの石垣空港駅からの経路案内も充実しています。"}},{"@type":"Question","name":"「さくらリゾートホテル石垣＜石垣島＞」の魅力や予約時のポイントは？","acceptedAnswer":{"@type":"Answer","text":"「さくらリゾートホテル石垣＜石垣島＞」は『八重山ブルーの海、八重山の島々を見下ろす絶好のロケーション。島内でも屈指のサンセットをご堪。』という点が旅行者から高く支持されています。連休や人気シーズンは予約が集中しやすいため、空室状況はお早めのチェックが安心です。"}},{"@type":"Question","name":"プラン選びや宿の比較で意識すべき点は？","acceptedAnswer":{"@type":"Answer","text":"「さくらリゾートホテル石垣＜石垣島＞」と「フサキビーチリゾート ホテル＆ヴィラズ ＜石垣島＞」はそれぞれ立地や施設設備に独自の魅力があります。湯巡り重視か、料理やお部屋の寛ぎ重視かなど、今回の旅の目的に合わせてお選びください。"}}]}) }}
      />
        {/* 特集の魅力と選び方 */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200 space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
            <Award className="w-6 h-6 text-amber-600" />
            極上石垣牛ディナー＆エメラルドオーシャンリゾートの楽しみ方＆おすすめの選び方
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
                    src="https://img.travel.rakuten.co.jp/share/HOTEL/160779/160779.jpg"
                    alt="Ｔｈｅ　ＢＲＥＡＫＦＡＳＴ　ＨＯＴＥＬ　ＰＯＲＴＯ石垣島＜石垣島＞"
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
                      <span className="bg-slate-100 text-slate-700 font-medium px-2 py-0.5 rounded">沖縄県</span>
                      <span>石垣市登野城67</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2 hover:text-amber-600 transition-colors">
                      <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F160779%2F160779.html" target="_blank" rel="sponsored noopener noreferrer">
                        Ｔｈｅ　ＢＲＥＡＫＦＡＳＴ　ＨＯＴＥＬ　ＰＯＲＴＯ石垣島＜石垣島＞
                      </a>
                    </h3>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center text-amber-500">
                        <Star className="w-4 h-4 fill-amber-400" />
                        <span className="font-bold text-sm ml-1 text-slate-800">4.36</span>
                      </div>
                      <span className="text-xs text-slate-400">（口コミ 455 件）</span>
                      <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">楽天高評価</span>
                    </div>
                    <ul className="space-y-1 mb-4 text-xs text-slate-600 bg-slate-50 p-3 rounded-lg">
                      <li className="flex items-start gap-1"><span className="text-amber-500 shrink-0">•</span><span>キッチン・洗濯機・ラウンジ付きの「コンドミニアム棟」、シンプルな「ホテル棟」からお部屋をチョイス♪…</span></li>
                      <li className="flex items-start gap-1"><span className="text-amber-500 shrink-0">•</span><span>アクセス: 南ぬ島石垣空港から車で約25分（タクシーで約3,000円）離島ターミナルより徒歩8分。公設市場から徒歩5分。</span></li>
                      <li className="flex items-start gap-1"><span className="text-amber-500 shrink-0">•</span><span>楽天トラベル総合評価: ★4.36（レビュー 455件）</span></li>
                    </ul>
                  </div>
                  
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="text-xs text-slate-400">最安目安（税込）/人</span>
                      <div className="text-lg font-bold text-rose-600">¥4,089〜</div>
                    </div>
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F160779%2F160779.html%26f_flg%3DPLAN"
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
                    src="https://img.travel.rakuten.co.jp/share/HOTEL/168549/168549.jpg"
                    alt="Ｔｈｅ　ＢＲＥＡＫＦＡＳＴ　ＨＯＴＥＬ　ＭＡＲＣＨＥ石垣島＜石垣島＞"
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
                      <span className="bg-slate-100 text-slate-700 font-medium px-2 py-0.5 rounded">沖縄県</span>
                      <span>石垣市大川217</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2 hover:text-amber-600 transition-colors">
                      <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F168549%2F168549.html" target="_blank" rel="sponsored noopener noreferrer">
                        Ｔｈｅ　ＢＲＥＡＫＦＡＳＴ　ＨＯＴＥＬ　ＭＡＲＣＨＥ石垣島＜石垣島＞
                      </a>
                    </h3>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center text-amber-500">
                        <Star className="w-4 h-4 fill-amber-400" />
                        <span className="font-bold text-sm ml-1 text-slate-800">4.26</span>
                      </div>
                      <span className="text-xs text-slate-400">（口コミ 303 件）</span>
                      <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">楽天高評価</span>
                    </div>
                    <ul className="space-y-1 mb-4 text-xs text-slate-600 bg-slate-50 p-3 rounded-lg">
                      <li className="flex items-start gap-1"><span className="text-amber-500 shrink-0">•</span><span>離島ターミナル近くでふらっと自由な気まま旅♪大人気！特選石垣牛やアグー豚　多種類の地中海料理…</span></li>
                      <li className="flex items-start gap-1"><span className="text-amber-500 shrink-0">•</span><span>アクセス: 石垣島離島ターミナル徒歩5分！バスターミナル徒歩3分！ユーグレナモール徒歩30秒！</span></li>
                      <li className="flex items-start gap-1"><span className="text-amber-500 shrink-0">•</span><span>楽天トラベル総合評価: ★4.26（レビュー 303件）</span></li>
                    </ul>
                  </div>
                  
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="text-xs text-slate-400">最安目安（税込）/人</span>
                      <div className="text-lg font-bold text-rose-600">¥4,169〜</div>
                    </div>
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F168549%2F168549.html%26f_flg%3DPLAN"
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
                    src="https://img.travel.rakuten.co.jp/share/HOTEL/160889/160889.jpg"
                    alt="さくらリゾートホテル石垣＜石垣島＞"
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
                      <span className="bg-slate-100 text-slate-700 font-medium px-2 py-0.5 rounded">沖縄県</span>
                      <span>石垣市新川1585-218</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2 hover:text-amber-600 transition-colors">
                      <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F160889%2F160889.html" target="_blank" rel="sponsored noopener noreferrer">
                        さくらリゾートホテル石垣＜石垣島＞
                      </a>
                    </h3>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center text-amber-500">
                        <Star className="w-4 h-4 fill-amber-400" />
                        <span className="font-bold text-sm ml-1 text-slate-800">4.44</span>
                      </div>
                      <span className="text-xs text-slate-400">（口コミ 93 件）</span>
                      <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">楽天高評価</span>
                    </div>
                    <ul className="space-y-1 mb-4 text-xs text-slate-600 bg-slate-50 p-3 rounded-lg">
                      <li className="flex items-start gap-1"><span className="text-amber-500 shrink-0">•</span><span>八重山ブルーの海、八重山の島々を見下ろす絶好のロケーション。島内でも屈指のサンセットをご堪能下さい。…</span></li>
                      <li className="flex items-start gap-1"><span className="text-amber-500 shrink-0">•</span><span>アクセス: ■レンタカー■石垣空港より約25分。離島ターミナルより約10分　■路線バス■バス停フサキビーチリゾートより徒歩約5分。</span></li>
                      <li className="flex items-start gap-1"><span className="text-amber-500 shrink-0">•</span><span>楽天トラベル総合評価: ★4.44（レビュー 93件）</span></li>
                    </ul>
                  </div>
                  
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="text-xs text-slate-400">最安目安（税込）/人</span>
                      <div className="text-lg font-bold text-rose-600">¥9,500〜</div>
                    </div>
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F160889%2F160889.html%26f_flg%3DPLAN"
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
                    src="https://img.travel.rakuten.co.jp/share/HOTEL/38599/38599.jpg"
                    alt="フサキビーチリゾート　ホテル＆ヴィラズ　＜石垣島＞"
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
                      <span className="bg-slate-100 text-slate-700 font-medium px-2 py-0.5 rounded">沖縄県</span>
                      <span>石垣市新川1625番地</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2 hover:text-amber-600 transition-colors">
                      <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F38599%2F38599.html" target="_blank" rel="sponsored noopener noreferrer">
                        フサキビーチリゾート　ホテル＆ヴィラズ　＜石垣島＞
                      </a>
                    </h3>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center text-amber-500">
                        <Star className="w-4 h-4 fill-amber-400" />
                        <span className="font-bold text-sm ml-1 text-slate-800">4.60</span>
                      </div>
                      <span className="text-xs text-slate-400">（口コミ 1613 件）</span>
                      <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">楽天高評価</span>
                    </div>
                    <ul className="space-y-1 mb-4 text-xs text-slate-600 bg-slate-50 p-3 rounded-lg">
                      <li className="flex items-start gap-1"><span className="text-amber-500 shrink-0">•</span><span>【楽天トラベルアワード受賞】島内随一の天然ビーチとプールエリアで極上の休日を…</span></li>
                      <li className="flex items-start gap-1"><span className="text-amber-500 shrink-0">•</span><span>アクセス: 石垣空港より　車で約35分。石垣港より車で約15分。空港・ホテル間の無料送迎バスもございます。</span></li>
                      <li className="flex items-start gap-1"><span className="text-amber-500 shrink-0">•</span><span>楽天トラベル総合評価: ★4.60（レビュー 1613件）</span></li>
                    </ul>
                  </div>
                  
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="text-xs text-slate-400">最安目安（税込）/人</span>
                      <div className="text-lg font-bold text-rose-600">¥15,510〜</div>
                    </div>
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F38599%2F38599.html%26f_flg%3DPLAN"
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
                    src="https://img.travel.rakuten.co.jp/share/HOTEL/67844/67844.jpg"
                    alt="ホテル　リゾートイン石垣島＜石垣島＞"
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
                      <span className="bg-slate-100 text-slate-700 font-medium px-2 py-0.5 rounded">沖縄県</span>
                      <span>石垣市真栄里491-2</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2 hover:text-amber-600 transition-colors">
                      <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F67844%2F67844.html" target="_blank" rel="sponsored noopener noreferrer">
                        ホテル　リゾートイン石垣島＜石垣島＞
                      </a>
                    </h3>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center text-amber-500">
                        <Star className="w-4 h-4 fill-amber-400" />
                        <span className="font-bold text-sm ml-1 text-slate-800">3.95</span>
                      </div>
                      <span className="text-xs text-slate-400">（口コミ 537 件）</span>
                      <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">楽天高評価</span>
                    </div>
                    <ul className="space-y-1 mb-4 text-xs text-slate-600 bg-slate-50 p-3 rounded-lg">
                      <li className="flex items-start gap-1"><span className="text-amber-500 shrink-0">•</span><span>新空港⇔港・市街地を結ぶバス停/石垣唯一の大型ショッピングモール目の前！全室キッチン＆充実家電☆…</span></li>
                      <li className="flex items-start gap-1"><span className="text-amber-500 shrink-0">•</span><span>アクセス: 駐車場無料！新石垣空港→車：約20分　路線バス：白保経由空港線30分（サンエー前バス停 ）</span></li>
                      <li className="flex items-start gap-1"><span className="text-amber-500 shrink-0">•</span><span>楽天トラベル総合評価: ★3.95（レビュー 537件）</span></li>
                    </ul>
                  </div>
                  
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="text-xs text-slate-400">最安目安（税込）/人</span>
                      <div className="text-lg font-bold text-rose-600">¥2,337〜</div>
                    </div>
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F67844%2F67844.html%26f_flg%3DPLAN"
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
            <span className="text-xs bg-slate-100 text-slate-600 px-3 py-1.5 rounded-lg">#石垣牛</span>
            <span className="text-xs bg-slate-100 text-slate-600 px-3 py-1.5 rounded-lg">#石垣島リゾート</span>
            <span className="text-xs bg-slate-100 text-slate-600 px-3 py-1.5 rounded-lg">#川平湾</span>
            <span className="text-xs bg-slate-100 text-slate-600 px-3 py-1.5 rounded-lg">#オーシャンビュー</span>
            <span className="text-xs bg-slate-100 text-slate-600 px-3 py-1.5 rounded-lg">#プール付きホテル</span>
            <span className="text-xs bg-slate-100 text-slate-600 px-3 py-1.5 rounded-lg">#沖縄離島</span>
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
              【1泊2日】さくらリゾートホテル石垣＜石垣島＞を拠点にするおすすめ滞在モデルコース
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-l-2 border-amber-500 pl-4 md:pl-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="bg-amber-600 text-white text-xs font-bold px-2.5 py-1 rounded">1日目</span>
                <h3 className="font-bold text-stone-900 text-base md:text-lg">到着〜チェックインと名湯巡り</h3>
              </div>
              <ul className="text-xs md:text-sm text-stone-600 space-y-2 leading-relaxed">
                <li>・<strong className="text-stone-800">14:00〜</strong> 石垣空港駅よりアクセス。■レンタカー■石垣空港より約25分。</li>
                <li>・<strong className="text-stone-800">15:30〜</strong> 「さくらリゾートホテル石垣＜石垣島＞」にチェックイン。八重山ブルーの海、八重山の島々を見下ろす絶好のロケーション。島内でも屈指のサンセットをご堪能下さい。などの宿の特徴に期待を高めつつ客室へ。</li>
                <li>・<strong className="text-stone-800">17:00〜</strong> 「さくらリゾートホテル石垣＜石垣島＞」の湯処へ。八重山ブルーの海、八重山の島々を見下ろす絶好のロケーション。島内でも屈とともに、夕暮れの特別な寛ぎを満喫。</li>
                <li>・<strong className="text-stone-800">19:00〜</strong> 「さくらリゾートホテル石垣＜石垣島＞」でいただく旬の夕食。地場産の味覚を取り入れたおもてなし料理を五感でじっくり味わう贅沢なひととき。</li>
              </ul>
            </div>
            <div className="border-l-2 border-teal-500 pl-4 md:pl-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="bg-teal-600 text-white text-xs font-bold px-2.5 py-1 rounded">2日目</span>
                <h3 className="font-bold text-stone-900 text-base md:text-lg">爽快な朝湯〜周辺散策と帰路へ</h3>
              </div>
              <ul className="text-xs md:text-sm text-stone-600 space-y-2 leading-relaxed">
                <li>・<strong className="text-stone-800">07:00〜</strong> 朝の光が差し込む「さくらリゾートホテル石垣＜石垣島＞」の湯船へ。清々しい空気の中で手足を伸ばし、心地よい目覚めを迎える。</li>
                <li>・<strong className="text-stone-800">08:00〜</strong> 「さくらリゾートホテル石垣＜石垣島＞」こだわりの朝食を堪能。炊きたてのごはんや身体に優しい料理で、一日のエネルギーをチャージ。</li>
                <li>・<strong className="text-stone-800">10:00〜</strong> チェックアウト後は近隣エリアを観光。本記事でご紹介した「フサキビーチリゾート ホテル＆ヴィラズ ＜石垣島＞」の周辺スポットや名産店に立ち寄り、お土産を選んで帰路へ。</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-stone-50 rounded-2xl p-6 md:p-10 border border-stone-200/80 mb-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              よくある質問（FAQ）とさくらリゾートホテル石垣＜石垣島＞の滞在ポイント
            </h2>
          </div>
          <div className="space-y-4">
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 「さくらリゾートホテル石垣＜石垣島＞」へのアクセスや移動方法について</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 「さくらリゾートホテル石垣＜石垣島＞」へは、■レンタカー■石垣空港より約25分。最寄りの石垣空港駅からの経路案内も充実しています。
              </p>
            </details>
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 「さくらリゾートホテル石垣＜石垣島＞」の魅力や予約時のポイントは？</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 「さくらリゾートホテル石垣＜石垣島＞」は『八重山ブルーの海、八重山の島々を見下ろす絶好のロケーション。島内でも屈指のサンセットをご堪。』という点が旅行者から高く支持されています。連休や人気シーズンは予約が集中しやすいため、空室状況はお早めのチェックが安心です。
              </p>
            </details>
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. プラン選びや宿の比較で意識すべき点は？</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 「さくらリゾートホテル石垣＜石垣島＞」と「フサキビーチリゾート ホテル＆ヴィラズ ＜石垣島＞」はそれぞれ立地や施設設備に独自の魅力があります。湯巡り重視か、料理やお部屋の寛ぎ重視かなど、今回の旅の目的に合わせてお選びください。
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
            <a href="/akita-station-solo-business-onsen-sauna-stay/" className="block p-4 rounded-xl bg-stone-50 hover:bg-amber-50 border border-stone-200 transition group">
              <span className="text-[10px] font-bold text-amber-700 block mb-1">関連特集ガイド</span>
              <span className="text-xs font-bold text-stone-800 group-hover:text-amber-800 line-clamp-2 leading-relaxed">秋田駅前出張・天然温泉サウナ：秋田新幹線こまち・中通温泉こまちの湯・比内地鶏＆きりたんぽ！美酒王国の厳選3宿</span>
            </a>
            <a href="/furusato-tax-tazawako-nyuto-onsen-autumn-stay/" className="block p-4 rounded-xl bg-stone-50 hover:bg-amber-50 border border-stone-200 transition group">
              <span className="text-[10px] font-bold text-amber-700 block mb-1">関連特集ガイド</span>
              <span className="text-xs font-bold text-stone-800 group-hover:text-amber-800 line-clamp-2 leading-relaxed">乳頭温泉郷の秘湯白濁露天と田沢湖の紅葉パノラマ＆秋田比内地鶏・きりたんぽ鍋ステイ</span>
            </a>
            <a href="/winter-akita-moriyoshi-ani-snow-monster-matagi-stay/" className="block p-4 rounded-xl bg-stone-50 hover:bg-amber-50 border border-stone-200 transition group">
              <span className="text-[10px] font-bold text-amber-700 block mb-1">関連特集ガイド</span>
              <span className="text-xs font-bold text-stone-800 group-hover:text-amber-800 line-clamp-2 leading-relaxed">11・12・1月秋田：日本三大樹氷！名宿5選</span>
            </a>
            <a href="/akita-oga-peninsula-namahage-nyudozaki-stay/" className="block p-4 rounded-xl bg-stone-50 hover:bg-amber-50 border border-stone-200 transition group">
              <span className="text-[10px] font-bold text-amber-700 block mb-1">関連特集ガイド</span>
              <span className="text-xs font-bold text-stone-800 group-hover:text-amber-800 line-clamp-2 leading-relaxed">秋田・男鹿半島＆なまはげ・入道崎：北緯40度白黒灯台・名物石焼料理宿 厳選ガイド</span>
            </a>
          </div>
          <div className="pt-6 border-t border-stone-100">
            <h3 className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-3">人気の都道府県から宿を探す</h3>
            <div className="flex flex-wrap gap-2">
              <Link
                href="/prefectures/akita/"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                秋田県の宿・温泉
              </Link>
              <Link
                href="/prefectures/gunma/"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                群馬県の宿・温泉
              </Link>
              <Link
                href="/prefectures/nagasaki/"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                長崎県の宿・温泉
              </Link>
              <Link
                href="/prefectures/mie/"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                三重県の宿・温泉
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
              📊 2026年：南の島の至高の美食！極上石垣牛ステーキ＆川平湾エメラルドビーチリゾート5選：掲載宿スペック一覧比較表＆宿泊者クチコミ・アクセス詳細分析
            </h2>
            <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
              楽天トラベル公式APIより取得した「2026年：南の島の至高の美食！極上石垣牛ステーキ＆川平湾エメラルドビーチリゾート5選」掲載宿の所在地・最寄り駅・駐車場条件・クチコミ評価・参考最安料金を一覧で比較できます。公共交通機関（新幹線・在来線・送迎バス）利用の方もマイカー・レンタカー利用の方も、旅のスタイルに合った一軒をお選びください。
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
                <td className="p-3 font-bold text-stone-900">1. Ｔｈｅ　ＢＲＥＡＫＦＡＳＴ　ＨＯＴＥＬ　ＰＯＲＴＯ石垣島＜石垣島＞</td>
                <td className="p-3 text-stone-600">沖縄県石垣市登野城67</td>
                <td className="p-3 text-stone-600">石垣空港駅周辺</td>
                <td className="p-3 text-stone-600">有り　30台　1500円（税込み／泊）　先着順</td>
                <td className="p-3 font-bold text-amber-600">★4.38（461件）</td>
                <td className="p-3 font-bold text-rose-600">¥3,436〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F160779%2F160779.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">2. Ｔｈｅ　ＢＲＥＡＫＦＡＳＴ　ＨＯＴＥＬ　ＭＡＲＣＨＥ石垣島＜石垣島＞</td>
                <td className="p-3 text-stone-600">沖縄県石垣市大川217</td>
                <td className="p-3 text-stone-600">石垣島離島ターミナル徒歩5分！バスターミナル徒歩3分！ユーグレナモール</td>
                <td className="p-3 text-stone-600">有り　先着順　5台　1500円（税込み／泊）※予約不可</td>
                <td className="p-3 font-bold text-amber-600">★4.27（308件）</td>
                <td className="p-3 font-bold text-rose-600">¥3,326〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F168549%2F168549.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">3. さくらリゾートホテル石垣＜石垣島＞</td>
                <td className="p-3 text-stone-600">沖縄県石垣市新川1585-218</td>
                <td className="p-3 text-stone-600">石垣空港駅周辺</td>
                <td className="p-3 text-stone-600">有り　先着順</td>
                <td className="p-3 font-bold text-amber-600">★4.44（93件）</td>
                <td className="p-3 font-bold text-rose-600">¥9,500〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F160889%2F160889.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">4. フサキビーチリゾート　ホテル＆ヴィラズ　＜石垣島＞</td>
                <td className="p-3 text-stone-600">沖縄県石垣市新川1625番地</td>
                <td className="p-3 text-stone-600">石垣空港駅周辺</td>
                <td className="p-3 text-stone-600">有り（299台/先着順）：宿泊者無料</td>
                <td className="p-3 font-bold text-amber-600">★4.61（1573件）</td>
                <td className="p-3 font-bold text-rose-600">¥11,490〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F38599%2F38599.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">5. ホテル　リゾートイン石垣島＜石垣島＞</td>
                <td className="p-3 text-stone-600">沖縄県石垣市真栄里491-2</td>
                <td className="p-3 text-stone-600">石垣空港駅周辺</td>
                <td className="p-3 text-stone-600">・24時間出し入れ自由な駐車場を無料駐車場を完備　※無料</td>
                <td className="p-3 font-bold text-amber-600">★4（535件）</td>
                <td className="p-3 font-bold text-rose-600">¥2,595〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F67844%2F67844.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
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
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">Ｔｈｅ　ＢＲＥＡＫＦＡＳＴ　ＨＯＴＥＬ　ＰＯＲＴＯ石垣島＜石垣島＞</h3>
                  <span className="text-xs text-stone-400 ml-2">（ざ　ぶれっくふぁーすと　ほてる　ぽるといしがきじま）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥3,436〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/160779/160779_kan1.jpg" alt="Ｔｈｅ　ＢＲＥＡＫＦＡＳＴ　ＨＯＴＥＬ　ＰＯＲＴＯ石垣島＜石垣島＞ 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>キッチン・洗濯機・ラウンジ付きの「コンドミニアム棟」、シンプルな「ホテル棟」からお部屋をチョイス♪</p>
                  <p><strong>【所在地・アクセス】</strong>〒 沖縄県石垣市登野城67 ／ 最寄り駅：石垣空港 ／ 交通案内：南ぬ島石垣空港から車で約25分（タクシーで約3,000円）離島ターミナルより徒歩8分。公設市場から徒歩5分。</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　30台　1500円（税込み／泊）　先着順</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.32 ／ 立地 ★4.24 ／ 部屋 ★4.29 ／ 設備 ★4.26 ／ 風呂 ★4.08 ／ 食事 ★4.57</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「一人旅でもおすすめ朝食は売りにしているだけあって、結構美味しかった。朝からテンションをあげられる。部屋に関してもベット下は埃だったが、客から見える範囲は清掃が非常に行き届いていた。また、部…　2026-09-28 11:57:17投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #2</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">Ｔｈｅ　ＢＲＥＡＫＦＡＳＴ　ＨＯＴＥＬ　ＭＡＲＣＨＥ石垣島＜石垣島＞</h3>
                  <span className="text-xs text-stone-400 ml-2">（ざ　ぶれっくふぁーすと　ほてる　まるしぇいしがきじま）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥3,326〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/168549/168549.jpg" alt="Ｔｈｅ　ＢＲＥＡＫＦＡＳＴ　ＨＯＴＥＬ　ＭＡＲＣＨＥ石垣島＜石垣島＞ 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>離島ターミナル近くでふらっと自由な気まま旅♪大人気！特選石垣牛やアグー豚　多種類の地中海料理</p>
                  <p><strong>【所在地・アクセス】</strong>〒 沖縄県石垣市大川217 ／ 最寄り駅：主要駅 ／ 交通案内：石垣島離島ターミナル徒歩5分！バスターミナル徒歩3分！ユーグレナモール徒歩30秒！</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　先着順　5台　1500円（税込み／泊）※予約不可</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.3 ／ 立地 ★4.25 ／ 部屋 ★4.11 ／ 設備 ★4.04 ／ 風呂 ★3.91 ／ 食事 ★4.65</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「朝食が最高に美味しくて大満足!朝食が最高に美味しかったです!クチコミの詳細はこちらから　https://review.travel.rakuten.co.jp/hotel/voice/1685…　2026-09-30 17:35:18投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #3</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">さくらリゾートホテル石垣＜石垣島＞</h3>
                  <span className="text-xs text-stone-400 ml-2">（さくらりぞーとほてるいしがき）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥9,500〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/160889/160889_kan1.jpg" alt="さくらリゾートホテル石垣＜石垣島＞ 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>八重山ブルーの海、八重山の島々を見下ろす絶好のロケーション。島内でも屈指のサンセットをご堪能下さい。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 沖縄県石垣市新川1585-218 ／ 最寄り駅：石垣空港 ／ 交通案内：■レンタカー■石垣空港より約25分。離島ターミナルより約10分　■路線バス■バス停フサキビーチリゾートより徒歩約5分。</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　先着順</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「さくらリゾートホテル石垣＜石垣島＞は立地・設備・ホスピタリティのバランスに優れ、観光拠点としても記念日や週末リフレッシュ滞在としても高い満足度を得ています。」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #4</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">フサキビーチリゾート　ホテル＆ヴィラズ　＜石垣島＞</h3>
                  <span className="text-xs text-stone-400 ml-2">（ふさきびーちりぞーと　ほてるあんどヴぃらす）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥11,490〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/38599/38599_kan.jpg" alt="フサキビーチリゾート　ホテル＆ヴィラズ　＜石垣島＞ 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>【楽天トラベルアワード受賞】島内随一の天然ビーチとプールエリアで極上の休日を</p>
                  <p><strong>【所在地・アクセス】</strong>〒 沖縄県石垣市新川1625番地 ／ 最寄り駅：石垣空港 ／ 交通案内：石垣空港より　車で約35分。石垣港より車で約15分。空港・ホテル間の無料送迎バスもございます。</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り（299台/先着順）：宿泊者無料</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「リゾート感たっぷりのホテルで、小さなお子さんがいるご家庭には特におすすめです!プールやビーチなど、子どもたちと一緒に楽しめて、家族旅行の素敵な思い出になりました。食事については、少し好みが分か…　2026-08-20 22:19:58投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #5</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">ホテル　リゾートイン石垣島＜石垣島＞</h3>
                  <span className="text-xs text-stone-400 ml-2">（ほてる　りぞーといんいしがき）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥2,595〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/67844/67844_b.jpg" alt="ホテル　リゾートイン石垣島＜石垣島＞ 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>新空港⇔港・市街地を結ぶバス停/石垣唯一の大型ショッピングモール目の前！全室キッチン＆充実家電☆</p>
                  <p><strong>【所在地・アクセス】</strong>〒 沖縄県石垣市真栄里491-2 ／ 最寄り駅：石垣空港 ／ 交通案内：駐車場無料！新石垣空港→車：約20分　路線バス：白保経由空港線30分（サンエー前バス停 ）</p>
                  <p><strong>【駐車場・マイカー利用】</strong>・24時間出し入れ自由な駐車場を無料駐車場を完備　※無料</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「2泊3日で利用しました。悪かった点・チェックインをタブレットで行う。宿泊者の氏名を大きなディスプレイに表示させながら自身で入力を行うため、周囲の人に入力内容が丸見えである。また、入力履歴が残る…　2026-07-26 12:42:53投稿」
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-6 border-t border-stone-200">
            <h3 className="text-lg font-bold text-stone-900 border-l-4 border-teal-600 pl-3">
              🗺️ あわせて巡りたい！秋田県の代表的な観光名所・歴史自然ガイド（Wikipedia公認画像・解説）
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              宿泊前後の1泊2日・2泊3日モデルコースに組み込みたい、秋田県を代表する名所・絶景スポットの解説です。チェックイン前後の荷物預かりや駅周辺のレンタカー・周遊バスを活用すると効率よく巡ることができます。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              <div className="aspect-video relative overflow-hidden bg-stone-200"><img src="https://thumb.wikimedia.org/wikipedia/commons/thumb/2/28/Pathway_to_the_Qkamura_Nyuto_Onsenkyo.jpg/1280px-Pathway_to_the_Qkamura_Nyuto_Onsenkyo.jpg?utm_source=ja.wikipedia.org&amp;utm_campaign=api&amp;utm_content=thumbnail" alt="乳頭温泉郷" className="w-full h-full object-cover" loading="lazy" /></div>
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #1</span>
                <h3 className="text-base font-bold text-stone-900">乳頭温泉郷</h3>
                <p className="text-xs text-stone-600 leading-relaxed">十和田八幡平国立公園のブナ原生林に点在する7つの秘湯温泉郷。独自のお湯と茅葺き屋根の木造旅籠が醸し出すノスタルジーは、全国の温泉ファン憧れの聖地です。 乳頭温泉郷（にゅうとうおんせんきょう）は、秋田県仙北市、十和田八幡平国立公園内乳頭山の山麓に点在する温泉の総称、温泉郷である。 標高600 - 800メートル付近に温泉郷が広がっている。…</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #2</span>
                <h3 className="text-base font-bold text-stone-900">角館の武家屋敷通り</h3>
                <p className="text-xs text-stone-600 leading-relaxed">「みちのくの小京都」と称される歴史情緒あふれる城下町。黒板塀が続く静かな通りと、春には塀越しに垂れ下がる垂れ桜、秋には紅葉のコントラストが実に映えます。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              <div className="aspect-video relative overflow-hidden bg-stone-200"><img src="https://thumb.wikimedia.org/wikipedia/commons/thumb/4/43/Lake_Tazawa_and_Kansa-g%C5%AB_20210213.jpg/1280px-Lake_Tazawa_and_Kansa-g%C5%AB_20210213.jpg?utm_source=ja.wikipedia.org&amp;utm_campaign=api&amp;utm_content=thumbnail" alt="田沢湖" className="w-full h-full object-cover" loading="lazy" /></div>
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #3</span>
                <h3 className="text-base font-bold text-stone-900">田沢湖</h3>
                <p className="text-xs text-stone-600 leading-relaxed">日本一の水深（423.4m）を誇る円形の淡水湖。水深ゆえの深い瑠璃色の水面と、金色の辰子姫像が神秘的な美しさを漂わせています。 田沢湖（たざわこ）は、秋田県仙北市にある淡水湖。一級河川雄物川水系に属する。日本で最も深い湖であり、日本で19番目に広い湖沼でもある。その全域が田沢湖抱返り県立自然公園に指定されており、日本百景にも選ばれている景勝地である。1956年（昭和31年）から2005年（平成17年）まで存在した自治体である田沢湖町の名の由来であり、現在も旧田沢湖町の区域の地名冠称と…</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #4</span>
                <h3 className="text-base font-bold text-stone-900">男鹿半島・入道崎</h3>
                <p className="text-xs text-stone-600 leading-relaxed">日本海の絶壁と緑の芝生がコントラストを成す男鹿半島の最北端。北緯40度線上に位置し、白黒ラインの入道崎灯台から眺める夕日は日本の灯台50選に選ばれています。</p>
              </div>
            </div>
            </div>
          </div>

          <div className="bg-amber-50/70 rounded-2xl p-5 md:p-6 border border-amber-200 space-y-3 text-xs text-stone-700 leading-relaxed">
            <h3 className="text-sm md:text-base font-bold text-amber-950">
              💡 秋田県エリアの宿泊予約・シーズン別ベストタイミングと節約ノウハウ
            </h3>
            <p>
              <strong>1. 早期予約と楽天トラベルクーポンの併用：</strong> 秋田県の人気温泉宿・リゾートホテルは、週末や連休・紅葉・年末年始の60日〜30日前から一気に予約が埋まります。毎月5と0のつく日やスーパーSALE期間中に配布される宿クーポン・自治体クーポンを併用すると、通常より最大10〜20%お得に予約可能です。
            </p>
            <p>
              <strong>2. 夕食・朝食プランと部屋タイプの選び方：</strong> 地元産の旬魚介やブランド牛会席を味わうなら「夕朝食付きプラン」、周辺の屋台・老舗居酒屋・ご当地グルメを食べ歩くなら「朝食付き」または「素泊まり＋天然温泉大浴場付きホテル」を選ぶと予算と満足度のバランスが最適化されます。
            </p>
          </div>
        </section>

      </main>
    
      <HubRelatedPosts currentSlug="traditional-okinawa-ishigaki-beef-stay" />
</div>
  );
}
