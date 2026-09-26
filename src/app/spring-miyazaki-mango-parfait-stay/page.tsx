import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { Star, MapPin, Sparkles, CheckCircle2, ChevronRight, Award, ExternalLink } from 'lucide-react';

export const metadata: Metadata = {
  title: '【2026年】とろける黄金の果肉・太陽のタマゴ！宮崎完熟マンゴースイーツ＆青島オーシャン宿5選 | 日本全国・旅宿クラウド',
  description: '2026年最新！最高峰の宮崎完熟マンゴー「太陽のタマゴ」デザート＆宮崎牛炭火ステーキディナー！青島・日南海岸の絶景太平洋を望むリゾートホテル5選。',
  keywords: ["宮崎マンゴー","太陽のタマゴ","青島温泉","宮崎牛","オーシャンビュー","南国リゾート","楽天トラベル"],
  openGraph: {
    title: '【2026年】とろける黄金の果肉・太陽のタマゴ！宮崎完熟マンゴースイーツ＆青島オーシャン宿5選',
    description: '2026年最新！最高峰の宮崎完熟マンゴー「太陽のタマゴ」デザート＆宮崎牛炭火ステーキディナー！青島・日南海岸の絶景太平洋を望むリゾートホテル5選。',
    type: 'article',
    url: 'https://croud-travel.com/spring-miyazaki-mango-parfait-stay',
  },
  alternates: {
    canonical: 'https://croud-travel.com/spring-miyazaki-mango-parfait-stay',
  },
};

const hotels: any[] = [
  {
    "hotelNo": 191880,
    "hotelName": "マンゴーホテル宮崎",
    "hotelKanaName": "まんごーほてるみやざき",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D191880",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D191880%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D191880",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D191880",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/191880/191880.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/191880.jpg",
    "roomImageUrl": "",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/191880/191880map.gif",
    "reviewCount": 141,
    "reviewAverage": 3.98,
    "userReview": "安定のマンゴー部屋の広さがお気に入り。ゆったりできる。派手さはないが、安定のマンゴーホテル。安心して利用できる。クチコミの詳細はこちらから　https://review.travel.…　2026-08-11 23:43:43投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=191880\" class=\"3click\">つづきはこちら</a>",
    "hotelMinCharge": 2925,
    "address1": "宮崎県",
    "address2": "宮崎市橘通東1-5-8",
    "telephoneNo": "0985-65-8640",
    "access": "ＪＲ日豊本線　宮崎駅から車で約１０分。宮崎空港から空港リムジンバスで約１５分。",
    "parkingInformation": "有/有料【普通車まで】1泊1000円/予約不可先着順【中型車】1泊3000円/要予約【駐輪】無料",
    "nearestStation": "宮崎",
    "hotelSpecial": "宮崎最大の飲食店街ニシタチが徒歩圏内！マンゴージュースとアイスを24時間無料提供中！",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F191880%2F191880.html"
  },
  {
    "hotelNo": 138067,
    "hotelName": "ＴＨＥ　ＭＥＩＢＩＡ　ＭＩＹＡＺＡＫＩ（ザ・メイビア宮崎）",
    "hotelKanaName": "ザ　メイビア　ミヤザキ（ザ・メイビアミヤザキ）",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D138067",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D138067%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D138067",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D138067",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/138067/138067.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/138067.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/138067/138067_you.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/138067/138067map.gif",
    "reviewCount": 160,
    "reviewAverage": 4.63,
    "userReview": "念願の滞在、図書室も朝食も大満足泊まってみたいの以前から思っていましたところ、念願かなって宿泊できました。華美な装飾などはありませんが、大変落ち着く館内でした。今回の部屋は和室でしたが、洋室にも泊…　2026-09-05 19:58:38投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=138067\" class=\"3click\">つづきはこちら</a>",
    "hotelMinCharge": 11900,
    "address1": "宮崎県",
    "address2": "宮崎市下原町247-18",
    "telephoneNo": "0985-78-0777",
    "access": "宮崎駅東口から徒歩10分。宮崎駅から要予約で送迎可。(16時～18時/9時～12時)宮崎自動車道宮崎ＩＣから車で20分。",
    "parkingInformation": "平面駐車場完備(無���)/24時間出し入れ自由。",
    "nearestStation": "宮崎",
    "hotelSpecial": "静寂の中に佇む凛とした空間。竹林が奏でるシンフォニー。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F138067%2F138067.html"
  },
  {
    "hotelNo": 182521,
    "hotelName": "マンゴーホテル日南（旧：日南第一ホテル）",
    "hotelKanaName": "まんごーほてるにちなん（きゅう：にちなんだいいちほてる）",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D182521",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D182521%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D182521",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D182521",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/182521/182521.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/182521.jpg",
    "roomImageUrl": "",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/182521/182521map.gif",
    "reviewCount": 103,
    "reviewAverage": 3.69,
    "userReview": "フリードリンクなどサービスが充実今回は利用しませんでしたが、フリードリンクなどサービスが充実してきました。クチコミの詳細はこちらから　https://review.travel.rakuten…　2026-09-09 17:13:49投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=182521\" class=\"3click\">つづきはこちら</a>",
    "hotelMinCharge": 3450,
    "address1": "宮崎県",
    "address2": "日南市岩崎3-3-13",
    "telephoneNo": "0987-23-9111",
    "access": "JR日南線油津駅より徒歩７分、宮崎ICより車約50分。宮崎空港より車で約50分。",
    "parkingInformation": "有り　43台　1泊1台：1000円　先着順",
    "nearestStation": "油津",
    "hotelSpecial": "日南の市街地、国道沿いに位置しアクセス抜群。都会的なシンプルなデザインと清潔感あふれる内装。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F182521%2F182521.html"
  },
  {
    "hotelNo": 30939,
    "hotelName": "ホテルシーズン日南",
    "hotelKanaName": "しーずん　にちなん",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D30939",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D30939%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D30939",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D30939",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/30939/30939.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/30939.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/30939/30939_t.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/30939/30939map.gif",
    "reviewCount": 787,
    "reviewAverage": 4.11,
    "userReview": "シャワーがボタン式で少し戸惑ったシャワーがボタン式に気づきませんでした。クチコミの詳細はこちらから　https://review.travel.rakuten.co.jp/hotel/voic…　2026-09-17 13:48:32投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=30939\" class=\"3click\">つづきはこちら</a>",
    "hotelMinCharge": 4860,
    "address1": "宮崎県",
    "address2": "日南市園田3-11-1",
    "telephoneNo": "0987-22-5151",
    "access": "宮崎ICから車で約40分/宮崎空港より車で約50分・宮崎交通バス梅ヶ浜下車徒歩3分/日南線JR油津駅より車で約3分",
    "parkingInformation": "有　第一駐車場38台　第二駐車場12台　無料　先着順",
    "nearestStation": "油津",
    "hotelSpecial": "全室、太平洋を一望できるオーシャンビュー。キャンプでは広島東洋カープ選手常宿のホテルです。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F30939%2F30939.html"
  },
  {
    "hotelNo": 19738,
    "hotelName": "ホテルルートイン熊本駅前",
    "hotelKanaName": "ほてるるーといん　くまもとえきまえ",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D19738",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D19738%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D19738",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D19738",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/19738/19738.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/19738.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/19738/19738_twn.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/19738/19738map.gif",
    "reviewCount": 1627,
    "reviewAverage": 3.96,
    "userReview": "笑顔の出迎えと広い部屋、駐車場も便利到着時のフロントの方に笑顔でお出迎えいらだきツインをトリプルの広い部屋を案内して頂き助かりました。また自走式の立体駐車場からフロンまでが近く便利でした。立地も熊…　2026-09-15 11:52:13投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=19738\" class=\"3click\">つづきはこちら</a>",
    "hotelMinCharge": 6475,
    "address1": "熊本県",
    "address2": "熊本市西区春日1-14-19",
    "telephoneNo": "050-5847-7557",
    "access": "ＪＲ熊本駅白川口(東口)より徒歩3分！熊本ＩＣから車で35分、熊本空港からリムジンバス50分",
    "parkingInformation": "自走式立体駐車場６０台完備・立体に比べ楽々出庫　1000円（税込/泊）　高さ制限２．１Ｍ　先着順",
    "nearestStation": "熊本",
    "hotelSpecial": "ＷＯＷＯＷ全室で無料視聴可■VODルームシアター無料視聴可能（一般映画のみ：コンフォートルーム特典）",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F19738%2F19738.html"
  }
];

export default function FeatureDetailPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* パンくずリスト */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-3 text-sm text-slate-500 flex items-center space-x-2">
          <Link href="/" className="hover:text-amber-600">トップ</Link>
          <span>&gt;</span>
          <Link href="/features" className="hover:text-amber-600">厳選特集一覧</Link>
          <span>&gt;</span>
          <span className="text-slate-800 font-medium truncate max-w-xs sm:max-w-md md:max-w-none">
            宮崎完熟マンゴースイーツ＆青島オーシャンビュー宿
          </span>
        </div>
      </div>

      {/* ヒーローヘッダー */}
      <header className="relative bg-gradient-to-r from-amber-900 via-stone-800 to-slate-900 text-white py-16 px-4">
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-300 px-4 py-1.5 rounded-full text-sm font-semibold backdrop-blur-sm border border-amber-400/30">
            <Sparkles className="w-4 h-4" /> 太陽のタマゴ完熟マンゴー×青島オーシャン展望
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight leading-tight">
            【2026年】とろける黄金の果肉・太陽のタマゴ！宮崎完熟マンゴースイーツ＆青島オーシャン宿5選
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed pt-2">
            樹上で完全に熟して自然落果した最高級ブランド「太陽のタマゴ」。濃厚な甘みと果汁があふれる完熟マンゴーパフェを堪能し、青島神社や鬼の洗濯板を一望する展望温泉と宮崎牛ディナーで南国気分を満喫する宮崎リゾート。
          </p>
        </div>
      </header>

      {/* メインコンテンツ */}
      <main className="max-w-5xl mx-auto px-4 py-12 space-y-12">
        {/* 特集の魅力と選び方 */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200 space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
            <Award className="w-6 h-6 text-amber-600" />
            宮崎完熟マンゴースイーツ＆青島オーシャンビュー宿の楽しみ方＆おすすめの選び方
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
                    src="https://img.travel.rakuten.co.jp/share/HOTEL/191880/191880.jpg"
                    alt="マンゴーホテル宮崎"
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
                      <span className="bg-slate-100 text-slate-700 font-medium px-2 py-0.5 rounded">宮崎県</span>
                      <span>宮崎市橘通東1-5-8</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2 hover:text-amber-600 transition-colors">
                      <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D191880" target="_blank" rel="noopener noreferrer">
                        マンゴーホテル宮崎
                      </a>
                    </h3>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center text-amber-500">
                        <Star className="w-4 h-4 fill-amber-400" />
                        <span className="font-bold text-sm ml-1 text-slate-800">3.98</span>
                      </div>
                      <span className="text-xs text-slate-400">（口コミ 141 件）</span>
                      <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">楽天高評価</span>
                    </div>
                    <ul className="space-y-1 mb-4 text-xs text-slate-600 bg-slate-50 p-3 rounded-lg">
                      <li className="flex items-start gap-1"><span className="text-amber-500 shrink-0">•</span><span>宮崎最大の飲食店街ニシタチが徒歩圏内！マンゴージュースとアイスを24時間無料提供中！…</span></li>
                      <li className="flex items-start gap-1"><span className="text-amber-500 shrink-0">•</span><span>アクセス: ＪＲ日豊本線　宮崎駅から車で約１０分。宮崎空港から空港リムジンバスで約１５分。</span></li>
                      <li className="flex items-start gap-1"><span className="text-amber-500 shrink-0">•</span><span>楽天トラベル総合評価: ★3.98（レビュー 141件）</span></li>
                    </ul>
                  </div>
                  
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="text-xs text-slate-400">最安目安（税込）/人</span>
                      <div className="text-lg font-bold text-rose-600">¥2,925〜</div>
                    </div>
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D191880%26f_flg%3DPLAN"
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
                    src="https://img.travel.rakuten.co.jp/share/HOTEL/138067/138067.jpg"
                    alt="ＴＨＥ　ＭＥＩＢＩＡ　ＭＩＹＡＺＡＫＩ（ザ・メイビア宮崎）"
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
                      <span className="bg-slate-100 text-slate-700 font-medium px-2 py-0.5 rounded">宮崎県</span>
                      <span>宮崎市下原町247-18</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2 hover:text-amber-600 transition-colors">
                      <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D138067" target="_blank" rel="noopener noreferrer">
                        ＴＨＥ　ＭＥＩＢＩＡ　ＭＩＹＡＺＡＫＩ（ザ・メイビア宮崎）
                      </a>
                    </h3>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center text-amber-500">
                        <Star className="w-4 h-4 fill-amber-400" />
                        <span className="font-bold text-sm ml-1 text-slate-800">4.63</span>
                      </div>
                      <span className="text-xs text-slate-400">（口コミ 160 件）</span>
                      <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">楽天高評価</span>
                    </div>
                    <ul className="space-y-1 mb-4 text-xs text-slate-600 bg-slate-50 p-3 rounded-lg">
                      <li className="flex items-start gap-1"><span className="text-amber-500 shrink-0">•</span><span>静寂の中に佇む凛とした空間。竹林が奏でるシンフォニー。…</span></li>
                      <li className="flex items-start gap-1"><span className="text-amber-500 shrink-0">•</span><span>アクセス: 宮崎駅東口から徒歩10分。宮崎駅から要予約で送迎可。(16時～18時/9時～12時)宮崎自動車道宮崎ＩＣから車で20分。</span></li>
                      <li className="flex items-start gap-1"><span className="text-amber-500 shrink-0">•</span><span>楽天トラベル総合評価: ★4.63（レビュー 160件）</span></li>
                    </ul>
                  </div>
                  
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="text-xs text-slate-400">最安目安（税込）/人</span>
                      <div className="text-lg font-bold text-rose-600">¥11,900〜</div>
                    </div>
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D138067%26f_flg%3DPLAN"
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
                    src="https://img.travel.rakuten.co.jp/share/HOTEL/182521/182521.jpg"
                    alt="マンゴーホテル日南（旧：日南第一ホテル）"
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
                      <span className="bg-slate-100 text-slate-700 font-medium px-2 py-0.5 rounded">宮崎県</span>
                      <span>日南市岩崎3-3-13</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2 hover:text-amber-600 transition-colors">
                      <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D182521" target="_blank" rel="noopener noreferrer">
                        マンゴーホテル日南（旧：日南第一ホテル）
                      </a>
                    </h3>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center text-amber-500">
                        <Star className="w-4 h-4 fill-amber-400" />
                        <span className="font-bold text-sm ml-1 text-slate-800">3.69</span>
                      </div>
                      <span className="text-xs text-slate-400">（口コミ 103 件）</span>
                      <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">楽天高評価</span>
                    </div>
                    <ul className="space-y-1 mb-4 text-xs text-slate-600 bg-slate-50 p-3 rounded-lg">
                      <li className="flex items-start gap-1"><span className="text-amber-500 shrink-0">•</span><span>日南の市街地、国道沿いに位置しアクセス抜群。都会的なシンプルなデザインと清潔感あふれる内装。…</span></li>
                      <li className="flex items-start gap-1"><span className="text-amber-500 shrink-0">•</span><span>アクセス: JR日南線油津駅より徒歩７分、宮崎ICより車約50分。宮崎空港より車で約50分。</span></li>
                      <li className="flex items-start gap-1"><span className="text-amber-500 shrink-0">•</span><span>楽天トラベル総合評価: ★3.69（レビュー 103件）</span></li>
                    </ul>
                  </div>
                  
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="text-xs text-slate-400">最安目安（税込）/人</span>
                      <div className="text-lg font-bold text-rose-600">¥3,450〜</div>
                    </div>
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D182521%26f_flg%3DPLAN"
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
                    src="https://img.travel.rakuten.co.jp/share/HOTEL/30939/30939.jpg"
                    alt="ホテルシーズン日南"
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
                      <span className="bg-slate-100 text-slate-700 font-medium px-2 py-0.5 rounded">宮崎県</span>
                      <span>日南市園田3-11-1</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2 hover:text-amber-600 transition-colors">
                      <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D30939" target="_blank" rel="noopener noreferrer">
                        ホテルシーズン日南
                      </a>
                    </h3>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center text-amber-500">
                        <Star className="w-4 h-4 fill-amber-400" />
                        <span className="font-bold text-sm ml-1 text-slate-800">4.11</span>
                      </div>
                      <span className="text-xs text-slate-400">（口コミ 787 件）</span>
                      <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">楽天高評価</span>
                    </div>
                    <ul className="space-y-1 mb-4 text-xs text-slate-600 bg-slate-50 p-3 rounded-lg">
                      <li className="flex items-start gap-1"><span className="text-amber-500 shrink-0">•</span><span>全室、太平洋を一望できるオーシャンビュー。キャンプでは広島東洋カープ選手常宿のホテルです。…</span></li>
                      <li className="flex items-start gap-1"><span className="text-amber-500 shrink-0">•</span><span>アクセス: 宮崎ICから車で約40分/宮崎空港より車で約50分・宮崎交通バス梅ヶ浜下車徒歩3分/日南線JR油津駅より車で約3分</span></li>
                      <li className="flex items-start gap-1"><span className="text-amber-500 shrink-0">•</span><span>楽天トラベル総合評価: ★4.11（レビュー 787件）</span></li>
                    </ul>
                  </div>
                  
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="text-xs text-slate-400">最安目安（税込）/人</span>
                      <div className="text-lg font-bold text-rose-600">¥4,860〜</div>
                    </div>
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D30939%26f_flg%3DPLAN"
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
                    src="https://img.travel.rakuten.co.jp/share/HOTEL/19738/19738.jpg"
                    alt="ホテルルートイン熊本駅前"
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
                      <span className="bg-slate-100 text-slate-700 font-medium px-2 py-0.5 rounded">熊本県</span>
                      <span>熊本市西区春日1-14-19</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2 hover:text-amber-600 transition-colors">
                      <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D19738" target="_blank" rel="noopener noreferrer">
                        ホテルルートイン熊本駅前
                      </a>
                    </h3>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center text-amber-500">
                        <Star className="w-4 h-4 fill-amber-400" />
                        <span className="font-bold text-sm ml-1 text-slate-800">3.96</span>
                      </div>
                      <span className="text-xs text-slate-400">（口コミ 1627 件）</span>
                      <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">楽天高評価</span>
                    </div>
                    <ul className="space-y-1 mb-4 text-xs text-slate-600 bg-slate-50 p-3 rounded-lg">
                      <li className="flex items-start gap-1"><span className="text-amber-500 shrink-0">•</span><span>ＷＯＷＯＷ全室で無料視聴可■VODルームシアター無料視聴可能（一般映画のみ：コンフォートルーム特典）…</span></li>
                      <li className="flex items-start gap-1"><span className="text-amber-500 shrink-0">•</span><span>アクセス: ＪＲ熊本駅白川口(東口)より徒歩3分！熊本ＩＣから車で35分、熊本空港からリムジンバス50分</span></li>
                      <li className="flex items-start gap-1"><span className="text-amber-500 shrink-0">•</span><span>楽天トラベル総合評価: ★3.96（レビュー 1627件）</span></li>
                    </ul>
                  </div>
                  
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="text-xs text-slate-400">最安目安（税込）/人</span>
                      <div className="text-lg font-bold text-rose-600">¥6,475〜</div>
                    </div>
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D19738%26f_flg%3DPLAN"
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
            <span className="text-xs bg-slate-100 text-slate-600 px-3 py-1.5 rounded-lg">#宮崎マンゴー</span>
            <span className="text-xs bg-slate-100 text-slate-600 px-3 py-1.5 rounded-lg">#太陽のタマゴ</span>
            <span className="text-xs bg-slate-100 text-slate-600 px-3 py-1.5 rounded-lg">#青島温泉</span>
            <span className="text-xs bg-slate-100 text-slate-600 px-3 py-1.5 rounded-lg">#宮崎牛</span>
            <span className="text-xs bg-slate-100 text-slate-600 px-3 py-1.5 rounded-lg">#オーシャンビュー</span>
            <span className="text-xs bg-slate-100 text-slate-600 px-3 py-1.5 rounded-lg">#南国リゾート</span>
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
      </main>
    </div>
  );
}
