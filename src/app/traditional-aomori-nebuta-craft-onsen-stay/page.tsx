import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { Star, MapPin, Sparkles, CheckCircle2, ChevronRight, Award, ExternalLink } from 'lucide-react';

export const metadata: Metadata = {
  title: '【2026年】勇壮なねぶたの熱気に包まれる！ねぶたアート空間＆青森ヒバ名湯と海鮮極上宿5選 | 日本全国・旅宿クラウド',
  description: '2026年最新！職人が手掛けた巨大ねぶたの光アートと祭り囃子！大間マグロ・陸奥湾ホタテ会席と香り高い青森ヒバ温泉で津軽・南部の文化に触れる名宿5選。',
  keywords: ["ねぶたの宿","青森ねぶた","青森ヒバ風呂","大間マグロ","陸奥湾ホタテ","津軽文化体験","楽天トラベル"],
  openGraph: {
    title: '【2026年】勇壮なねぶたの熱気に包まれる！ねぶたアート空間＆青森ヒバ名湯と海鮮極上宿5選',
    description: '2026年最新！職人が手掛けた巨大ねぶたの光アートと祭り囃子！大間マグロ・陸奥湾ホタテ会席と香り高い青森ヒバ温泉で津軽・南部の文化に触れる名宿5選。',
    type: 'article',
    url: 'https://croud-travel.com/traditional-aomori-nebuta-craft-onsen-stay',
  },
  alternates: {
    canonical: 'https://croud-travel.com/traditional-aomori-nebuta-craft-onsen-stay',
  },
};

const hotels: any[] = [
  {
    "hotelNo": 142919,
    "hotelName": "蔦温泉旅館－足元から源泉湧出の自噴温泉－",
    "hotelKanaName": "つたおんせんりょかん",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D142919",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D142919%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D142919",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D142919",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/142919/142919.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/142919.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/142919/142919_gen.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/142919/142919map.gif",
    "reviewCount": 376,
    "reviewAverage": 4.78,
    "userReview": "源泉の真上の温泉と食事が最高、また伺いたい露天風呂好きの私ですが、源泉の真上に風呂があり、屋内温泉でしたが、その室内空間がなぜか居心地良く大変気に入りました。食事も良かったです。周りの散策も素敵で…　2026-09-16 13:21:00投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=142919\" class=\"3click\">つづきはこちら</a>",
    "hotelMinCharge": 20900,
    "address1": "青森県",
    "address2": "十和田市奥瀬蔦野湯1",
    "telephoneNo": "0176-74-2311",
    "access": "七戸十和田駅よりお車にて１時間／青森駅よりお車にて1時間20分",
    "parkingInformation": "有り　50台　無料　予約不要",
    "nearestStation": "青森",
    "hotelSpecial": "約千年前から源泉のやさしい湯が湧き出てくる全国でも希少な「源泉湧き流し」の湯をお楽しみ下さい",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F142919%2F142919.html"
  },
  {
    "hotelNo": 41009,
    "hotelName": "酸ヶ湯温泉旅館",
    "hotelKanaName": "すかゆおんせん　りょかん",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D41009",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D41009%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D41009",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D41009",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/41009/41009.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/41009.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/41009/41009_ka.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/41009/41009map.gif",
    "reviewCount": 1535,
    "reviewAverage": 4.41,
    "userReview": "歴史ある建物と温泉に癒やされ、次は数泊したい酸ヶ湯温泉はお風呂だけでも最高ですが、歴史を積んだ建物の中にいるだけで体の中が清められていくのを感じます。ピカピカに磨き上げられた廊下は裸足で歩きたいく…　2026-09-18 15:40:17投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=41009\" class=\"3click\">つづきはこちら</a>",
    "hotelMinCharge": 15675,
    "address1": "青森県",
    "address2": "青森市荒川字南荒川山国有林小字酸湯沢50",
    "telephoneNo": "017-738-6400",
    "access": "ＪＲ　青森駅より十和田湖行ＪＲバスで７０分",
    "parkingInformation": "有り　１５０台　無料　先着順",
    "nearestStation": "青森",
    "hotelSpecial": "広さ１６０畳の大浴場「ひば千人風呂」にぜひ一度お入り下さい。昔ながらの混浴を守っています。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F41009%2F41009.html"
  },
  {
    "hotelNo": 7026,
    "hotelName": "浅虫温泉　津軽藩本陣の宿　旅館柳の湯",
    "hotelKanaName": "あさむしおんせん　つがるはんほんじんのやど　りょかん　やなぎのゆ",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D7026",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D7026%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D7026",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D7026",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/7026/7026.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/7026.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/7026/7026_room.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/7026/7026map.gif",
    "reviewCount": 515,
    "reviewAverage": 4.2,
    "userReview": "親切な接客と食事に満足、ドライヤーは不足スタッフの方もとても親切でご飯もとてもおいしかったお風呂のドライヤーが1つしかないのはちょい辛い。クチコミの詳細はこちらから　https…　2026-09-16 04:59:24投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=7026\" class=\"3click\">つづきはこちら</a>",
    "hotelMinCharge": 11350,
    "address1": "青森県",
    "address2": "青森市大字浅虫字山下236",
    "telephoneNo": "017-752-2023",
    "access": "ＪＲ浅虫温泉駅から徒歩6分/東北自動車道青森東出口より10分【浅虫温泉駅⇔当館まで無料送迎OK(要予約）】",
    "parkingInformation": "有り：15台(無料）",
    "nearestStation": "浅虫温泉",
    "hotelSpecial": "浅虫温泉湯本｜源泉かけ流し×津軽藩本陣の宿 柳の湯 静かに過ごす温泉旅",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F7026%2F7026.html"
  },
  {
    "hotelNo": 108987,
    "hotelName": "沢渡温泉　まるほん旅館",
    "hotelKanaName": "さわたりおんせん　まるほんりょかん",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D108987",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D108987%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D108987",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D108987",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/108987/108987.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/108987.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/108987/108987_sy1.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/108987/108987map.gif",
    "reviewCount": 166,
    "reviewAverage": 4.41,
    "userReview": "温泉が最高で心身ともにリフレッシュ温泉が最高クチコミの詳細はこちらから　https://review.travel.rakuten.co.jp/hotel/voice/108987?revie…　2026-09-16 22:59:05投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=108987\" class=\"3click\">つづきはこちら</a>",
    "hotelMinCharge": 11850,
    "address1": "群馬県",
    "address2": "吾妻郡中之条町上沢渡甲2301",
    "telephoneNo": "0279-66-2011",
    "access": "ＪＲ　中之条駅よりバスで２５分",
    "parkingInformation": "有り　２０台　無料　予約不要",
    "nearestStation": "中之条",
    "hotelSpecial": "「婦人風呂」JCDデザインアワード2016金賞受賞！「一浴玉の肌」といわれる美肌の湯",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F108987%2F108987.html"
  },
  {
    "hotelNo": 84875,
    "hotelName": "温湯温泉　飯塚旅館",
    "hotelKanaName": "ぬるゆおんせん　いいづかりょかん",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D84875",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D84875%26f_flg%3DPLAN",
    "dpPlanListUrl": "",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D84875",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/84875/84875.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/84875.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/84875/84875_kan.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/84875/84875map.gif",
    "reviewCount": 81,
    "reviewAverage": 4.55,
    "userReview": "",
    "hotelMinCharge": 14300,
    "address1": "青森県",
    "address2": "黒石市温湯鶴泉60",
    "telephoneNo": "0172-54-8303",
    "access": "黒石駅よりバスにて20分／東北道黒石ICより10分",
    "parkingInformation": "無料の駐車場12台分ご用意しています（※要予約）",
    "nearestStation": "黒石（青森）",
    "hotelSpecial": "大正建造物の館内は情趣たっぷり。かけ流しの天然温泉を堪能し、季節の料理お部屋でお楽しみ下さい。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F84875%2F84875.html"
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
            ねぶた光アート空間＆青森ヒバ名湯と大間マグロ宿
          </span>
        </div>
      </div>

      {/* ヒーローヘッダー */}
      <header className="relative bg-gradient-to-r from-amber-900 via-stone-800 to-slate-900 text-white py-16 px-4">
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-300 px-4 py-1.5 rounded-full text-sm font-semibold backdrop-blur-sm border border-amber-400/30">
            <Sparkles className="w-4 h-4" /> ねぶた光アート×青森ヒバ名湯・大間マグロ
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight leading-tight">
            【2026年】勇壮なねぶたの熱気に包まれる！ねぶたアート空間＆青森ヒバ名湯と海鮮極上宿5選
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed pt-2">
            和紙と光が織りなす極彩色の巨大「ねぶた」が館内を彩る圧巻の空間。毎夜響く祭り囃子の生演奏に心躍らせ、大間産天然本マグロや陸奥湾ホタテの極上海鮮会席、青森ヒバ造りの名湯で芯から温まる青森の文化リトリート。
          </p>
        </div>
      </header>

      {/* メインコンテンツ */}
      <main className="max-w-5xl mx-auto px-4 py-12 space-y-12">
        {/* 特集の魅力と選び方 */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200 space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
            <Award className="w-6 h-6 text-amber-600" />
            ねぶた光アート空間＆青森ヒバ名湯と大間マグロ宿の楽しみ方＆おすすめの選び方
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
                    src="https://img.travel.rakuten.co.jp/share/HOTEL/142919/142919.jpg"
                    alt="蔦温泉旅館－足元から源泉湧出の自噴温泉－"
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
                      <span className="bg-slate-100 text-slate-700 font-medium px-2 py-0.5 rounded">青森県</span>
                      <span>十和田市奥瀬蔦野湯1</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2 hover:text-amber-600 transition-colors">
                      <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D142919" target="_blank" rel="noopener noreferrer">
                        蔦温泉旅館－足元から源泉湧出の自噴温泉－
                      </a>
                    </h3>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center text-amber-500">
                        <Star className="w-4 h-4 fill-amber-400" />
                        <span className="font-bold text-sm ml-1 text-slate-800">4.78</span>
                      </div>
                      <span className="text-xs text-slate-400">（口コミ 376 件）</span>
                      <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">楽天高評価</span>
                    </div>
                    <ul className="space-y-1 mb-4 text-xs text-slate-600 bg-slate-50 p-3 rounded-lg">
                      <li className="flex items-start gap-1"><span className="text-amber-500 shrink-0">•</span><span>約千年前から源泉のやさしい湯が湧き出てくる全国でも希少な「源泉湧き流し」の湯をお楽しみ下さい…</span></li>
                      <li className="flex items-start gap-1"><span className="text-amber-500 shrink-0">•</span><span>アクセス: 七戸十和田駅よりお車にて１時間／青森駅よりお車にて1時間20分</span></li>
                      <li className="flex items-start gap-1"><span className="text-amber-500 shrink-0">•</span><span>楽天トラベル総合評価: ★4.78（レビュー 376件）</span></li>
                    </ul>
                  </div>
                  
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="text-xs text-slate-400">最安目安（税込）/人</span>
                      <div className="text-lg font-bold text-rose-600">¥20,900〜</div>
                    </div>
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D142919%26f_flg%3DPLAN"
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
                    src="https://img.travel.rakuten.co.jp/share/HOTEL/41009/41009.jpg"
                    alt="酸ヶ湯温泉旅館"
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
                      <span>青森市荒川字南荒川山国有林小字酸湯沢50</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2 hover:text-amber-600 transition-colors">
                      <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D41009" target="_blank" rel="noopener noreferrer">
                        酸ヶ湯温泉旅館
                      </a>
                    </h3>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center text-amber-500">
                        <Star className="w-4 h-4 fill-amber-400" />
                        <span className="font-bold text-sm ml-1 text-slate-800">4.41</span>
                      </div>
                      <span className="text-xs text-slate-400">（口コミ 1535 件）</span>
                      <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">楽天高評価</span>
                    </div>
                    <ul className="space-y-1 mb-4 text-xs text-slate-600 bg-slate-50 p-3 rounded-lg">
                      <li className="flex items-start gap-1"><span className="text-amber-500 shrink-0">•</span><span>広さ１６０畳の大浴場「ひば千人風呂」にぜひ一度お入り下さい。昔ながらの混浴を守っています。…</span></li>
                      <li className="flex items-start gap-1"><span className="text-amber-500 shrink-0">•</span><span>アクセス: ＪＲ　青森駅より十和田湖行ＪＲバスで７０分</span></li>
                      <li className="flex items-start gap-1"><span className="text-amber-500 shrink-0">•</span><span>楽天トラベル総合評価: ★4.41（レビュー 1535件）</span></li>
                    </ul>
                  </div>
                  
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="text-xs text-slate-400">最安目安（税込）/人</span>
                      <div className="text-lg font-bold text-rose-600">¥15,675〜</div>
                    </div>
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D41009%26f_flg%3DPLAN"
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
                    src="https://img.travel.rakuten.co.jp/share/HOTEL/7026/7026.jpg"
                    alt="浅虫温泉　津軽藩本陣の宿　旅館柳の湯"
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
                      <span className="bg-slate-100 text-slate-700 font-medium px-2 py-0.5 rounded">青森県</span>
                      <span>青森市大字浅虫字山下236</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2 hover:text-amber-600 transition-colors">
                      <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D7026" target="_blank" rel="noopener noreferrer">
                        浅虫温泉　津軽藩本陣の宿　旅館柳の湯
                      </a>
                    </h3>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center text-amber-500">
                        <Star className="w-4 h-4 fill-amber-400" />
                        <span className="font-bold text-sm ml-1 text-slate-800">4.20</span>
                      </div>
                      <span className="text-xs text-slate-400">（口コミ 515 件）</span>
                      <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">楽天高評価</span>
                    </div>
                    <ul className="space-y-1 mb-4 text-xs text-slate-600 bg-slate-50 p-3 rounded-lg">
                      <li className="flex items-start gap-1"><span className="text-amber-500 shrink-0">•</span><span>浅虫温泉湯本｜源泉かけ流し×津軽藩本陣の宿 柳の湯 静かに過ごす温泉旅…</span></li>
                      <li className="flex items-start gap-1"><span className="text-amber-500 shrink-0">•</span><span>アクセス: ＪＲ浅虫温泉駅から徒歩6分/東北自動車道青森東出口より10分【浅虫温泉駅⇔当館まで無料送迎OK(要予約）】</span></li>
                      <li className="flex items-start gap-1"><span className="text-amber-500 shrink-0">•</span><span>楽天トラベル総合評価: ★4.20（レビュー 515件）</span></li>
                    </ul>
                  </div>
                  
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="text-xs text-slate-400">最安目安（税込）/人</span>
                      <div className="text-lg font-bold text-rose-600">¥11,350〜</div>
                    </div>
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D7026%26f_flg%3DPLAN"
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
                    src="https://img.travel.rakuten.co.jp/share/HOTEL/108987/108987.jpg"
                    alt="沢渡温泉　まるほん旅館"
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
                      <span className="bg-slate-100 text-slate-700 font-medium px-2 py-0.5 rounded">群馬県</span>
                      <span>吾妻郡中之条町上沢渡甲2301</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2 hover:text-amber-600 transition-colors">
                      <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D108987" target="_blank" rel="noopener noreferrer">
                        沢渡温泉　まるほん旅館
                      </a>
                    </h3>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center text-amber-500">
                        <Star className="w-4 h-4 fill-amber-400" />
                        <span className="font-bold text-sm ml-1 text-slate-800">4.41</span>
                      </div>
                      <span className="text-xs text-slate-400">（口コミ 166 件）</span>
                      <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">楽天高評価</span>
                    </div>
                    <ul className="space-y-1 mb-4 text-xs text-slate-600 bg-slate-50 p-3 rounded-lg">
                      <li className="flex items-start gap-1"><span className="text-amber-500 shrink-0">•</span><span>「婦人風呂」JCDデザインアワード2016金賞受賞！「一浴玉の肌」といわれる美肌の湯…</span></li>
                      <li className="flex items-start gap-1"><span className="text-amber-500 shrink-0">•</span><span>アクセス: ＪＲ　中之条駅よりバスで２５分</span></li>
                      <li className="flex items-start gap-1"><span className="text-amber-500 shrink-0">•</span><span>楽天トラベル総合評価: ★4.41（レビュー 166件）</span></li>
                    </ul>
                  </div>
                  
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="text-xs text-slate-400">最安目安（税込）/人</span>
                      <div className="text-lg font-bold text-rose-600">¥11,850〜</div>
                    </div>
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D108987%26f_flg%3DPLAN"
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
                    src="https://img.travel.rakuten.co.jp/share/HOTEL/84875/84875.jpg"
                    alt="温湯温泉　飯塚旅館"
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
                      <span className="bg-slate-100 text-slate-700 font-medium px-2 py-0.5 rounded">青森県</span>
                      <span>黒石市温湯鶴泉60</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2 hover:text-amber-600 transition-colors">
                      <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D84875" target="_blank" rel="noopener noreferrer">
                        温湯温泉　飯塚旅館
                      </a>
                    </h3>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center text-amber-500">
                        <Star className="w-4 h-4 fill-amber-400" />
                        <span className="font-bold text-sm ml-1 text-slate-800">4.55</span>
                      </div>
                      <span className="text-xs text-slate-400">（口コミ 81 件）</span>
                      <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">楽天高評価</span>
                    </div>
                    <ul className="space-y-1 mb-4 text-xs text-slate-600 bg-slate-50 p-3 rounded-lg">
                      <li className="flex items-start gap-1"><span className="text-amber-500 shrink-0">•</span><span>大正建造物の館内は情趣たっぷり。かけ流しの天然温泉を堪能し、季節の料理お部屋でお楽しみ下さい。…</span></li>
                      <li className="flex items-start gap-1"><span className="text-amber-500 shrink-0">•</span><span>アクセス: 黒石駅よりバスにて20分／東北道黒石ICより10分</span></li>
                      <li className="flex items-start gap-1"><span className="text-amber-500 shrink-0">•</span><span>楽天トラベル総合評価: ★4.55（レビュー 81件）</span></li>
                    </ul>
                  </div>
                  
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="text-xs text-slate-400">最安目安（税込）/人</span>
                      <div className="text-lg font-bold text-rose-600">¥14,300〜</div>
                    </div>
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D84875%26f_flg%3DPLAN"
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
            <span className="text-xs bg-slate-100 text-slate-600 px-3 py-1.5 rounded-lg">#ねぶたの宿</span>
            <span className="text-xs bg-slate-100 text-slate-600 px-3 py-1.5 rounded-lg">#青森ねぶた</span>
            <span className="text-xs bg-slate-100 text-slate-600 px-3 py-1.5 rounded-lg">#青森ヒバ風呂</span>
            <span className="text-xs bg-slate-100 text-slate-600 px-3 py-1.5 rounded-lg">#大間マグロ</span>
            <span className="text-xs bg-slate-100 text-slate-600 px-3 py-1.5 rounded-lg">#陸奥湾ホタテ</span>
            <span className="text-xs bg-slate-100 text-slate-600 px-3 py-1.5 rounded-lg">#津軽文化体験</span>
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
