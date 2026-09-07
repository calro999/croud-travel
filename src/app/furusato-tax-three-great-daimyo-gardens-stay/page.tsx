import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '日本三大名園＆江戸大名庭園の四季美と城下町風雅宿×ふるさと納税完全ガイド【2026年最新】偕楽園・兼六園・後楽園',
  description: '大名文化の粋を集めた回遊式庭園の最高峰！茨城水戸「偕楽園」徳川斉昭公の梅林とホテル・ザ・ウエストヒルズ・水戸、石川金沢「兼六園」六勝を兼ね備える加賀百万石の雪吊りと金沢白鳥路ホテル山楽、岡山「後楽園」旭川と岡山城を借景にする岡山プラザホテル。日本三大名園の四季折々の庭園美と藩主ゆかりの郷土会席を楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
  keywords: '日本三大名園・大名庭園特集, 楽天ふるさと納税, 温泉宿, ふるさと納税 旅行, 高級旅館, ホテル予約, 2026年旅行',
  openGraph: {
    title: '日本三大名園＆江戸大名庭園の四季美と城下町風雅宿×ふるさと納税完全ガイド【2026年最新】偕楽園・兼六園・後楽園',
    description: '大名文化の粋を集めた回遊式庭園の最高峰！茨城水戸「偕楽園」徳川斉昭公の梅林とホテル・ザ・ウエストヒルズ・水戸、石川金沢「兼六園」六勝を兼ね備える加賀百万石の雪吊りと金沢白鳥路ホテル山楽、岡山「後楽園」旭川と岡山城を借景にする岡山プラザホテル。日本三大名園の四季折々の庭園美と藩主ゆかりの郷土会席を楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    type: 'article',
    url: 'https://croud-travel.pages.dev/furusato-tax-three-great-daimyo-gardens-stay',
    siteName: 'トラベルポータル',
  },
};

export default function Page() {
  const officialAffUrl = 'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F';

  const hotels = [
  {
    "hotelNo": 141247,
    "hotelName": "ホテル・ザ・ウエストヒルズ・水戸（リッチモンドホテルズ提携ホテル）",
    "hotelKanaName": "ざ・うえすとひるずみと",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D141247",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D141247%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D141247",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D141247",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/141247/141247.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/141247.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/141247/141247_kya.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/141247/141247map.gif",
    "reviewCount": 1794,
    "reviewAverage": 4.43,
    "userReview": "水回りが清潔でリファのシャワーも最高水回りがとても良かった。お風呂が家のお風呂のようにきちんと洗い場もあって、しかもシャワーヘッドはリファ!台風の中到着したので、ゆったりと入浴できました。…　 ",
    "hotelMinCharge": 5500,
    "address1": "茨城県",
    "address2": "水戸市大工町1-2-1",
    "telephoneNo": "029-303-5111",
    "access": "ＪＲ水戸駅から路線バス大工町下車（約10分）◇常磐道水戸I.Cより約15分、北関東自動車道水戸南I.Cより約25分",
    "parkingInformation": "自走式立体駐車場、700円（１泊1台）車高制限2.1m、予約不可（満車時は近隣提携駐車場案内）",
    "nearestStation": "水戸",
    "hotelSpecial": "国営ひたち海浜公園へ車で約30分。水戸信用金庫スタジアムへ車で約25分。館内にコンビニ有り。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D141247",
    "label": "茨城県水戸市ふるさと納税・徳川斉昭公が創設した梅と千波湖の名園「偕楽園」好文亭とホテル・ザ・ウエストヒルズ・水戸",
    "themeTitle": "茨城県水戸市ふるさと納税：徳川斉昭公が創設した三千本の梅林「偕楽園」と千波湖畔「ホテル・ザ・ウエストヒルズ・水戸」",
    "themeDesc": "偕楽園や千波湖へアクセス抜群の上質シティホテル。シックで洗練された客室で寛ぎ、常陸牛ステーキや茨城の旬魚を取り入れた本格イタリアンディナー、朝食バイキングで水戸の歴史探訪を優雅に楽しめます。",
    "revAvg": "4.4",
    "minCharge": "5,500"
  },
  {
    "hotelNo": 9004,
    "hotelName": "金沢白鳥路　ホテル山楽",
    "hotelKanaName": "かなざわ　はくちょうろ　ほてるさんらく",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D9004",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D9004%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D9004",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D9004",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/9004/9004.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/9004.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/9004/9004_dtw.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/9004/9004map.gif",
    "reviewCount": 2831,
    "reviewAverage": 4.55,
    "userReview": "観光に最適な立地と郷土料理に大満足とにかくロケーションが観光に最適、施設は便利であって欲しいところはすべて新しく(ランドリーの洗濯機は洗剤自動投入など)、とても清潔で、一方で調度品や装飾などは古き…　 ",
    "hotelMinCharge": 7250,
    "address1": "石川県",
    "address2": "金沢市丸の内6-3",
    "telephoneNo": "076-216-7878",
    "access": "■金沢駅⇔ホテル無料送迎バス■金沢駅東口より車で１０分■金沢駅東口⑥、⑦乗り場【兼六園下・金沢城】バス停下車徒歩５分",
    "parkingInformation": "地下駐車場50台／料金1泊1台1,000円／24時間入出庫可／高さ制限2.1ｍ未満",
    "nearestStation": "金沢",
    "hotelSpecial": "金沢城のすぐ側で美肌の湯と金沢美食、そして心温まるおもてなしに癒されて日常をひと休みしませんか。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D9004",
    "label": "石川県金沢市ふるさと納税・加賀百万石の美の極致・六勝を兼ね備える大名庭園「兼六園」天然温泉金沢白鳥路ホテル山楽",
    "themeTitle": "石川県金沢市ふるさと納税：加賀百万石の美の極致「兼六園」と金沢城公園に隣接する「金沢白鳥路 ホテル山楽」",
    "themeDesc": "兼六園・金沢城へ徒歩約5分。大正ロマンのステンドグラスが彩る館内には美肌の天然温泉が湧き、金沢の老舗加賀料理やのどぐろ会席、加賀棒茶のスイーツなど古都の贅を心ゆくまで味わえます。",
    "revAvg": "4.5",
    "minCharge": "7,250"
  },
  {
    "hotelNo": 5890,
    "hotelName": "岡山プラザホテル",
    "hotelKanaName": "おかやま　ぷらざほてる",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D5890",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D5890%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D5890",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D5890",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/5890/5890.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/5890.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/5890/5890_tu.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/5890/5890map.gif",
    "reviewCount": 626,
    "reviewAverage": 3.8,
    "userReview": "落ち着いて過ごせました家族で利用させてもらいました。子どもが朝食のバイキングがあるホテルに泊まりたいと言うので、事前にホテルに電話連絡し確認。いつもは和洋食選べれる朝食ですが、泊まる予定日は夏休み…　 ",
    "hotelMinCharge": 4400,
    "address1": "岡山県",
    "address2": "岡山市中区浜2-3-12",
    "telephoneNo": "086-272-1201",
    "access": "JR岡山駅よりタクシーで5分☆岡山ICより車で20分 ☆ホテルから岡山後楽園へは徒歩5分！",
    "parkingInformation": "平面駐車場あり  全250台収容  高さ制限2.1ｍ  ご宿泊のお客様は駐車料金無料！",
    "nearestStation": "岡山",
    "hotelSpecial": "後楽園の北隣。ツインルームからは岡山のシンボル  岡山城が目の前に！　　　　　　　　　　　　　　　　",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D5890",
    "label": "岡山県岡山市ふるさと納税・池田綱政公が築いた回遊式大名庭園「岡山後楽園」旭川越しに岡山城を望む岡山プラザホテル",
    "themeTitle": "岡山県岡山市ふるさと納税：岡山城を借景とする大名庭園「岡山後楽園」を目の前に望む「岡山プラザホテル」",
    "themeDesc": "後楽園と旭川を挟んだ対岸に佇む絶景ホテル。客室やレストランから後楽園の緑と漆黒の岡山城（烏城）をパノラマで一望でき、瀬戸内海の旬魚や千屋牛、岡山の名産フルーツを使った料理を堪能できます。",
    "revAvg": "3.8",
    "minCharge": "4,400"
  }
];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* パンくずリスト */}
      <nav className="bg-white border-b border-slate-200 py-3 px-4 text-xs text-slate-500">
        <div className="max-w-5xl mx-auto flex items-center space-x-2">
          <Link href="/" className="hover:text-emerald-600 transition">ホーム</Link>
          <span>&gt;</span>
          <span className="text-slate-700 font-medium">日本三大名園＆大名庭園風雅宿×ふるさと納税ガイド</span>
        </div>
      </nav>

      {/* ヒーローヘッダー */}
      <header className="relative bg-gradient-to-br from-emerald-950 via-slate-900 to-teal-950 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-block bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-semibold px-3 py-1 rounded-full mb-2">
            日本三大名園・大名庭園特集
          </div>
          <h1 className="text-2xl md:text-4xl font-bold leading-tight tracking-tight">
            日本三大名園＆大名庭園風雅宿×ふるさと納税ガイド
          </h1>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-3xl mx-auto pt-2">
            国の特別名勝に指定され、日本の庭園文化の最高傑作として世界的に知られる「日本三大名園（大名庭園）」――水戸藩第九代藩主・徳川斉昭公が民と偕（とも）に楽しむ場として創設し約三千本の梅が咲き誇る茨城の「偕楽園」、加賀藩歴代藩主が百数十年をかけて作庭し「広大・幽邃・人力・蒼古・水泉・眺望」の六つの景勝を兼備する石川の「兼六園」、そして岡山藩第二代藩主・池田綱政公が憩いの場として築き、旭川の清流と岡山城天守を借景にする広大な芝生回遊式庭園・岡山の「後楽園」。池の周りを歩く回遊式庭園は、季節や天候、時間帯によって千変万化の表情を見せてくれます。名園の隣や城下町の一等地に佇むホテル・名旅館を拠点に、常陸牛・加賀懐石・瀬戸内鰆など歴代藩主が愛した美食を堪能する特別なひとときを楽天ふるさと納税でお楽しみください。
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
            歩くごとに姿を変える池と築山、四季の草木。藩主たちの美意識が結実した天下の名園へ
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>名園まで徒歩すぐ！開園直後の静寂な時間帯に庭園をプライベート散策</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                朝靄が立ち込める早朝の静かな庭園を歩き、池に映る朝焼けや木漏れ日の美しさを独占。
              </p>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>常陸牛会席＆あんこう鍋、のどぐろ＆加賀伝統会席、千屋牛＆瀬戸内鮮魚会席</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                名園が育んだ城下町の洗練された郷土割烹と地酒のペアリングを贅沢に満喫。
              </p>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>楽天ふるさと納税宿泊クーポンで城下町の上質ホテルや温泉宿をお得に予約</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                庭園散策のベストシーズンでも、寄付金額に応じた即時割引クーポンで実質2,000円負担の快適宿泊。
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
                        {h.hotelSpecial || '日本三大柱状節理の奇岩絶壁、陶器まつりの工芸美、日本三大薬湯の湯治、大名庭園の四季散策を満喫する極上の滞在。四季折々の美食と名湯でお寛ぎください。'}
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
            あわせて読みたい日本の名湯・工芸・庭園特集
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            
            <Link href="/furusato-tax-three-great-gardens-heritage-luxury-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三大名園＆大名庭園を愛でる名門宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                兼六園・後楽園・偕楽園の四季風雅。
              </p>
            </Link>
            
            <Link href="/furusato-tax-three-great-famous-stones-gardens-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三大銘石＆枯山水庭園・名湯宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                佐渡赤玉石・揖斐川石・鴨川真黒石。
              </p>
            </Link>
            
            <Link href="/furusato-tax-three-national-treasure-teahouses-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                国宝三大茶室＆数寄屋建築の名旅館宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                待庵・如庵・密庵。
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
