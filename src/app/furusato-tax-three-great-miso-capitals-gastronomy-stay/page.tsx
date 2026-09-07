import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '日本三大味噌の郷＆百花繚乱の郷土発酵美・老舗蔵と郷土鍋の名湯宿×ふるさと納税完全ガイド【2026年最新】信州味噌・八丁味噌・仙台味噌',
  description: '日本の食文化の根幹を支える日本三大味噌の郷巡り！長野「信州味噌」全国シェア4割を誇る澄んだ名水米麹と上諏訪温泉ホテル紅や、愛知岡崎「八丁味噌」大豆と塩のみで二夏二冬熟成させる赤出汁とホテルトレンド岡崎駅前、宮城仙台「仙台味噌」伊達政宗ゆかりの辛口赤味噌と作並温泉ゆづくしSalon一の坊。三大味噌の奥深い風味と郷土会席を楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
  keywords: '日本三大味噌・伝統発酵特集, 楽天ふるさと納税, 温泉宿, ふるさと納税 旅行, 高級旅館, ホテル予約, 2026年旅行',
  openGraph: {
    title: '日本三大味噌の郷＆百花繚乱の郷土発酵美・老舗蔵と郷土鍋の名湯宿×ふるさと納税完全ガイド【2026年最新】信州味噌・八丁味噌・仙台味噌',
    description: '日本の食文化の根幹を支える日本三大味噌の郷巡り！長野「信州味噌」全国シェア4割を誇る澄んだ名水米麹と上諏訪温泉ホテル紅や、愛知岡崎「八丁味噌」大豆と塩のみで二夏二冬熟成させる赤出汁とホテルトレンド岡崎駅前、宮城仙台「仙台味噌」伊達政宗ゆかりの辛口赤味噌と作並温泉ゆづくしSalon一の坊。三大味噌の奥深い風味と郷土会席を楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    type: 'article',
    url: 'https://croud-travel.pages.dev/furusato-tax-three-great-miso-capitals-gastronomy-stay',
    siteName: 'トラベルポータル',
  },
};

export default function Page() {
  const officialAffUrl = 'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F';

  const hotels = [
  {
    "hotelNo": 2880,
    "hotelName": "上諏訪温泉　ホテル紅や",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D2880",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D2880%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D2880",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D2880",
    "hotelKanaName": "かみすわおんせん　ほてるべにや",
    "hotelSpecial": "温泉展望浴場や岩盤浴など施設充実の温泉リゾート。和室・洋室選べるお部屋プランも多彩。",
    "hotelMinCharge": 9500,
    "address1": "長野県",
    "address2": "諏訪市湖岸通り２－７－２１",
    "telephoneNo": "0266-57-1111",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/2880/2880.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/2880/2880_heya.jpg",
    "reviewCount": 1937,
    "reviewAverage": 4.3,
    "userReview": "裏側の部屋からは湖が見えず残念な結果に紅やさんに泊まれると密かにワクワクして投宿わかっていたことですが湖畔のホテルですが裏側のお部屋からは湖は1ミリも見えませんなんだか残念感の残る結果に自…　2026-09-05 11:03:19投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=2880\" class=\"3click\">つづきはこちら</a>",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D2880",
    "access": "【電車】上諏訪駅下車徒歩10分（予約制無料送迎）【お車】諏訪ICから車で15分または諏訪湖スマートICから車で10分",
    "label": "長野県岡谷市・諏訪市ふるさと納税・全国シェア首位を誇る澄んだ名水と米麹「信州味噌の郷」諏訪湖畔名湯ステイ",
    "themeTitle": "長野県諏訪市ふるさと納税：諏訪湖畔の老舗宿・信州味噌の蔵元巡りと湖上展望温泉「上諏訪温泉 ホテル紅や」",
    "themeDesc": "諏訪湖の正面に位置し、諏訪や岡谷の有名味噌蔵巡りに便利な温泉リゾートホテル。上諏訪温泉の良質な湯を湛える展望大浴場や露天風呂から湖を一望し、信州味噌を使った鍋料理や信州牛会席を心ゆくまで味わえます。",
    "revAvg": "4.3",
    "minCharge": "9,500"
  },
  {
    "hotelNo": 172802,
    "hotelName": "ホテルトレンド岡崎駅前",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D172802",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D172802%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D172802",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D172802",
    "hotelKanaName": "ほてるとれんど　おかざきえきまえ",
    "hotelSpecial": "JR岡崎駅西口より徒歩約1分☆ コンビニまで徒歩約1分♪ 歓迎★聖地巡礼★ビジネスや観光に便利！",
    "hotelMinCharge": 3800,
    "address1": "愛知県",
    "address2": "岡崎市羽根西新町7-6",
    "telephoneNo": "0564-53-6511",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/172802/172802.jpg",
    "roomImageUrl": "",
    "reviewCount": 273,
    "reviewAverage": 3.95,
    "userReview": "駅チカで見つけやすく、中のアメニティも充実していました!豊スタにも行きやすくまた利用したいです。クチコミの詳細はこちらから　https://review.travel.rakuten.co.j…　2026-08-23 18:10:12投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=172802\" class=\"3click\">つづきはこちら</a>",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D172802",
    "access": "JR東海道本線　岡崎駅西口より徒歩約1分",
    "label": "愛知県岡崎市ふるさと納税・徳川家康ゆかりの大豆と塩のみで熟成させる赤出汁「八丁味噌の蔵元」岡崎城下町ステイ",
    "themeTitle": "愛知県岡崎市ふるさと納税：八丁味噌の本場・カクキューやまるや八丁味噌の蔵元へ至近「ホテルトレンド岡崎駅前」",
    "themeDesc": "JR岡崎駅前に位置し、八丁味噌の歴史を今に伝えるカクキュー八丁味噌や岡崎城への観光拠点に最適なホテル。清潔で快適な客室とアメニティを備え、本場の八丁味噌煮込みうどんや八丁味噌カツの食べ歩きに便利です。",
    "revAvg": "4.0",
    "minCharge": "3,800"
  },
  {
    "hotelNo": 28670,
    "hotelName": "仙台・作並温泉　ゆづくしＳａｌｏｎ一の坊",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D28670",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D28670%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D28670",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D28670",
    "hotelKanaName": "せんだい・さくなみおんせんゆづくしさろんいちのぼう",
    "hotelSpecial": "【新客室“Seyryu”2023年4月OPEN】オールインクルーシブで過ごす、里山リトリートステイ",
    "hotelMinCharge": 29355,
    "address1": "宮城県",
    "address2": "仙台市青葉区作並長原3",
    "telephoneNo": "0570-05-3973",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/28670/28670.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/28670/28670_heya.jpg",
    "reviewCount": 1824,
    "reviewAverage": 4.55,
    "userReview": "料理も露天風呂も最高、また利用したいチェックインからゆっくり過ごさせていただきました。お料理もとても美味しく頂きました。露天風呂も良かったです!また利用させていただきたいです!クチコミの詳…　2026-09-05 10:04:33投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=28670\" class=\"3click\">つづきはこちら</a>",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D28670",
    "access": "最寄駅／ＪＲ仙山線「作並駅」無料送迎あり【要事前予約】　仙台駅～作並駅（快速約30分）作並駅～一の坊（送迎車で約5分）",
    "label": "宮城県仙台市ふるさと納税・伊達政宗が御塩噌蔵を築いた赤色辛口本醸造「仙台味噌の里」作並温泉ゆづくしSalon一の坊",
    "themeTitle": "宮城県仙台市ふるさと納税：伊達政宗の歴史薫る作並の清流・オールインクルーシブ温泉「仙台・作並温泉 ゆづくしSalon一の坊」",
    "themeDesc": "広瀬川の源流に佇み、静けさと美食に包まれた大人のオールインクルーシブ名湯宿。清流露天風呂での贅沢な湯浴みと、料理人が目の前で焼き上げる仙台牛ステーキや仙台味噌仕立ての旬魚料理を美酒とともに楽しめます。",
    "revAvg": "4.5",
    "minCharge": "29,355"
  }
];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* パンくずリスト */}
      <nav className="bg-white border-b border-slate-200 py-3 px-4 text-xs text-slate-500">
        <div className="max-w-5xl mx-auto flex items-center space-x-2">
          <Link href="/" className="hover:text-emerald-600 transition">ホーム</Link>
          <span>&gt;</span>
          <span className="text-slate-700 font-medium">日本三大味噌の郷＆発酵郷土鍋・名湯美食宿×ふるさと納税ガイド</span>
        </div>
      </nav>

      {/* ヒーローヘッダー */}
      <header className="relative bg-gradient-to-br from-emerald-950 via-slate-900 to-teal-950 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-block bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-semibold px-3 py-1 rounded-full mb-2">
            日本三大味噌・伝統発酵特集
          </div>
          <h1 className="text-2xl md:text-4xl font-bold leading-tight tracking-tight">
            日本三大味噌の郷＆発酵郷土鍋・名湯美食宿×ふるさと納税ガイド
          </h1>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-3xl mx-auto pt-2">
            各地の気候風土と歴史的要請から生まれ、それぞれ独自の進化を遂げてきた「日本三大味噌の郷」――日本アルプスの清らかな伏流水と澄んだ冷気の中で米麹と大豆を熟成させ黄金色に輝くさわやかな芳香で全国一のシェアを誇る長野の「信州味噌」、矢作川の水運と温暖な三河で大豆と塩のみを使い巨石を積み上げて二夏二冬じっくり天然醸造させる黒褐色の「三河・八丁味噌」、そして伊達政宗公が兵糧として塩分を高め長期保存に耐えうる軍用味噌として仙台城下に御塩噌蔵を築かせたことに始まる宮城の「仙台味噌」。味噌汁一杯から伝わる日本の食の原点を体感し、味噌仕立ての郷土鍋や牛タン・信州牛・三河地鶏を名湯とともに堪能する旅を楽天ふるさと納税でお楽しみください。
          </p>

          <div className="pt-6">
            <a
              href={officialAffUrl}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-flex items-center justify-center bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white font-bold py-3 px-8 rounded-full shadow-lg shadow-emerald-900/30 transform hover:-translate-y-0.5 transition duration-200 text-sm md:text-base"
            >
              <span>楽天ふるさと納税トラベル公式特設ページを見る</span>
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </header>

      {/* メインコンテンツ */}
      <main className="max-w-5xl mx-auto px-4 py-12 space-y-16">
        
        {/* 特集の魅力セクション */}
        <section className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200/80">
          <h2 className="text-xl md:text-2xl font-bold text-slate-900 border-l-4 border-emerald-500 pl-3 mb-6">
            蔵の巨樽で熟成する深いコクとうま味。三大味噌の歴史を巡る滋味豊かな温泉旅
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>信州米味噌・三河豆味噌・仙台赤味噌！味も色も製法も異なる三大味噌の食べ比べ</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                伝統の蔵元見学や味噌料理専門店での食事、味噌田楽や味噌煮込みの元祖の味を堪能。
              </p>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>信州サーモンと信州牛の朴葉味噌焼き、八丁味噌煮込みうどんとみそかつ、仙台牛と仙台味噌鍋</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                味噌が素材の旨味を最大限に引き出す、各地のブランド肉と旬魚介の贅沢ディナー。
              </p>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>楽天ふるさと納税宿泊クーポンで湖畔温泉ホテルやリゾート旅館をお得に予約</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                発酵文化を訪ねる美食旅行でも、寄付金額に応じた最大30%オフの即時割引クーポンでスマートにお得ステイ。
              </p>
            </div>
            
          </div>
        </section>

        {/* 厳選ホテルリスト */}
        <section className="space-y-10">
          <div className="text-center space-y-2">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
              楽天ふるさと納税で泊まる名宿＆厳選ホテル
            </h2>
            <p className="text-xs md:text-sm text-slate-500">
              楽天トラベル公式APIより最新の宿情報・写真・最低参考価格を取得しています
            </p>
          </div>

          <div className="space-y-8">
            {hotels.map((h, idx) => (
              <div key={h.hotelNo || idx} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200/80 hover:shadow-md transition duration-300">
                <div className="p-6 border-b border-slate-100 bg-slate-50/50">
                  <span className="inline-block bg-emerald-100 text-emerald-800 text-xs font-bold px-2.5 py-1 rounded mb-2">
                    厳選スポット #{idx + 1}
                  </span>
                  <h3 className="text-lg md:text-xl font-bold text-slate-900">
                    {h.themeTitle}
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 mt-2 leading-relaxed">
                    {h.themeDesc}
                  </p>
                </div>

                <div className="grid md:grid-cols-12 gap-6 p-6">
                  <div className="md:col-span-5 space-y-2">
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-100 border border-slate-200">
                      <img
                        src={h.hotelImageUrl || h.roomImageUrl || '/images/no-image.jpg'}
                        alt={h.hotelName}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="text-xs text-slate-400 text-center">
                      写真提供: 楽天トラベル
                    </div>
                  </div>

                  <div className="md:col-span-7 flex flex-col justify-between space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="font-bold text-base md:text-lg text-slate-900 leading-snug">
                            {h.hotelName}
                          </h4>
                          <p className="text-xs text-slate-500 mt-0.5">
                            {h.address1}{h.address2}
                          </p>
                        </div>
                        <div className="bg-emerald-50 text-emerald-700 font-bold px-2.5 py-1 rounded text-xs shrink-0 flex items-center space-x-1">
                          <span>★</span>
                          <span>{h.revAvg}</span>
                        </div>
                      </div>

                      <p className="text-xs md:text-sm text-slate-600 line-clamp-3 leading-relaxed">
                        {h.hotelSpecial || '日本三大醤油醸造地の木桶が醸す芳香、日本三大フルーツ王国の太陽と果実の恵み、日本三大味噌の郷の奥深い発酵美、日本三大柑橘王国の爽快な海風と黄金色の果樹園を巡る特別な拠点。四季折々の美食と名湯でお寛ぎください。'}
                      </p>

                      <div className="bg-slate-50 p-3 rounded-lg text-xs space-y-1 border border-slate-100">
                        <div className="flex">
                          <span className="text-slate-400 w-16 shrink-0">アクセス:</span>
                          <span className="text-slate-700">{h.access || '最寄り駅・主要道路よりアクセス良好'}</span>
                        </div>
                        <div className="flex">
                          <span className="text-slate-400 w-16 shrink-0">参考価格:</span>
                          <span className="text-emerald-700 font-semibold">1名あたり目安 ¥{h.minCharge}〜</span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-2 flex flex-col sm:flex-row gap-3">
                      <a
                        href={h.hotelInformationUrl || officialAffUrl}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        className="flex-1 text-center bg-slate-900 hover:bg-slate-800 text-white text-xs md:text-sm font-semibold py-2.5 px-4 rounded-xl transition duration-150"
                      >
                        宿の詳細・プランを見る
                      </a>
                      <a
                        href={officialAffUrl}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        className="flex-1 text-center bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs md:text-sm font-bold py-2.5 px-4 rounded-xl shadow-sm transition duration-150"
                      >
                        ふるさと納税クーポンで予約
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 楽天ふるさと納税トラベル利用ステップ */}
        <section className="bg-gradient-to-br from-slate-900 to-emerald-950 text-white rounded-2xl p-6 md:p-8 space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-xl md:text-2xl font-bold">
              楽天ふるさと納税×楽天トラベル 簡単3ステップ
            </h2>
            <p className="text-xs md:text-sm text-slate-300">
              実質2,000円の自己負担で憧れの高級宿・温泉旅館をお得に予約できます
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 text-slate-200">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10 space-y-2">
              <div className="w-7 h-7 rounded-full bg-emerald-500 text-white font-bold flex items-center justify-center text-xs">
                1
              </div>
              <h3 className="font-bold text-sm text-white">自治体に寄付</h3>
              <p className="text-xs leading-relaxed text-slate-300">
                希望の自治体と寄付金額を選び、楽天ふるさと納税で寄付を行います。寄付額に応じたトラベルクーポンが即時付与されます。
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10 space-y-2">
              <div className="w-7 h-7 rounded-full bg-emerald-500 text-white font-bold flex items-center justify-center text-xs">
                2
              </div>
              <h3 className="font-bold text-sm text-white">対象宿・プランを予約</h3>
              <p className="text-xs leading-relaxed text-slate-300">
                楽天トラベルで対象地域の宿泊施設を検索。獲得したふるさと納税クーポンを予約ステップで適用します。
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10 space-y-2">
              <div className="w-7 h-7 rounded-full bg-emerald-500 text-white font-bold flex items-center justify-center text-xs">
                3
              </div>
              <h3 className="font-bold text-sm text-white">現地で贅沢ステイ</h3>
              <p className="text-xs leading-relaxed text-slate-300">
                宿泊当日は通常通りチェックイン。割引されたお得な価格で、名湯や美食、絶景体験を満喫できます。
              </p>
            </div>
          </div>

          <div className="text-center pt-2">
            <a
              href={officialAffUrl}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-flex items-center justify-center bg-white hover:bg-slate-100 text-emerald-950 font-bold py-3 px-8 rounded-full shadow-lg transition duration-200 text-sm md:text-base"
            >
              <span>楽天ふるさと納税宿泊クーポンを獲得する</span>
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </section>

        {/* 関連記事（相互内部リンク） */}
        <section className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200/80 space-y-4">
          <h2 className="text-lg md:text-xl font-bold text-slate-900 border-l-4 border-emerald-500 pl-3">
            あわせて読みたい全国の発酵美食・果樹園・酒蔵名宿特集
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            
            <Link href="/furusato-tax-three-great-shoyu-capitals-brewery-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三大醤油の醸造地＆木桶仕込みの芳香名宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                銚子・小豆島・龍野。
              </p>
            </Link>
            
            <Link href="/furusato-tax-three-great-sake-capitals-brewery-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三大酒処＆銘醸酒蔵・美酒ペアリング宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                灘・伏見・西条。
              </p>
            </Link>
            
            <Link href="/furusato-tax-local-gourmet-inn-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                ご当地グルメ宿を堪能する美食旅特集×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                高千穂牛・天然あなご・伊勢海老。
              </p>
            </Link>
            
          </div>
        </section>

      </main>

      {/* フッター */}
      <footer className="bg-slate-950 text-slate-400 py-8 px-4 text-center text-xs border-t border-slate-800">
        <p>© 2026 トラベルポータル All Rights Reserved. 掲載情報は最新の楽天トラベル公式APIに基づきます。</p>
      </footer>
    </div>
  );
}
