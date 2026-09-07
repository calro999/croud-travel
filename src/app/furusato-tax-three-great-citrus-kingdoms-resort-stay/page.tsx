import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '日本三大柑橘王国＆黄金色の果樹園・海風薫る爽快リゾートと名湯宿×ふるさと納税完全ガイド【2026年最新】愛媛・和歌山・静岡',
  description: '太陽の光と潮風を浴びて実る黄金の果実！愛媛松山「温州みかん・紅まどんな・伊予柑」道後温泉ホテルルナパーク、和歌山有田・白浜「有田みかん400年の歴史」白浜古賀の井リゾート＆スパ、静岡熱海・三ヶ日「三ヶ日みかん・ニューサマーオレンジ」熱海温泉ホテル大野屋。日本三大柑橘王国の爽快な海風と温泉ステイを楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
  keywords: '日本三大柑橘・黄金ロード特集, 楽天ふるさと納税, 温泉宿, ふるさと納税 旅行, 高級旅館, ホテル予約, 2026年旅行',
  openGraph: {
    title: '日本三大柑橘王国＆黄金色の果樹園・海風薫る爽快リゾートと名湯宿×ふるさと納税完全ガイド【2026年最新】愛媛・和歌山・静岡',
    description: '太陽の光と潮風を浴びて実る黄金の果実！愛媛松山「温州みかん・紅まどんな・伊予柑」道後温泉ホテルルナパーク、和歌山有田・白浜「有田みかん400年の歴史」白浜古賀の井リゾート＆スパ、静岡熱海・三ヶ日「三ヶ日みかん・ニューサマーオレンジ」熱海温泉ホテル大野屋。日本三大柑橘王国の爽快な海風と温泉ステイを楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    type: 'article',
    url: 'https://croud-travel.pages.dev/furusato-tax-three-great-citrus-kingdoms-resort-stay',
    siteName: 'トラベルポータル',
  },
};

export default function Page() {
  const officialAffUrl = 'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F';

  const hotels = [
  {
    "hotelNo": 7520,
    "hotelName": "道後温泉　ホテルルナパーク",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D7520",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D7520%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D7520",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D7520",
    "hotelKanaName": "どうごおんせん　るなぱーく",
    "hotelSpecial": "道後温泉本館まで徒歩2分の便利な立地。晴れた夜には、展望露天風呂から星や月をご覧いただけます。",
    "hotelMinCharge": 7507,
    "address1": "愛媛県",
    "address2": "松山市道後鷺谷町5-19",
    "telephoneNo": "089-931-1234",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/7520/7520.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/7520/7520_bath.jpg",
    "reviewCount": 606,
    "reviewAverage": 3.84,
    "userReview": "部屋が狭くフロントまでの階段が負担部屋が狭くてびっくりした!部屋に入ると既に布団がひいてあり余計に部屋が狭く感じた!後、建物じょう仕方ないと思うがフロントに行くまで階段が数段あり 高齢者の…　 ",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D7520",
    "access": "JR松山駅から私鉄乗り継ぎ伊予鉄道後温泉駅下車、徒歩5分。",
    "label": "愛媛県松山市・八幡浜市ふるさと納税・太陽の光と潮風が育む温州みかんと高級柑橘「愛媛みかん海道」道後温泉茶玻瑠",
    "themeTitle": "愛媛県松山市ふるさと納税：道後温泉本館へ徒歩圏内・屋上露天風呂と柑橘の香り「道後温泉 ホテルルナパーク」",
    "themeDesc": "道後温泉の中心部に位置し、日本最古の名湯・道後温泉本館の湯巡りや松山市内の柑橘ショップ巡りに便利な洋風ホテル。大浴場や露天風呂で旅の疲れを癒やし、愛媛名物の鯛めしや旬の柑橘デザートを楽しめます。",
    "revAvg": "3.8",
    "minCharge": "7,507"
  },
  {
    "hotelNo": 18253,
    "hotelName": "白浜古賀の井リゾート＆スパ",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D18253",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D18253%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D18253",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D18253",
    "hotelKanaName": "しらはまこがのいりぞーとあんどすぱ",
    "hotelSpecial": "優雅に美しく贅沢な休日を。露天風呂やスパエリアも充実！南紀白浜の温泉リゾートホテル。",
    "hotelMinCharge": 11900,
    "address1": "和歌山県",
    "address2": "西牟婁郡白浜町3212-1",
    "telephoneNo": "0739-43-6000",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/18253/18253.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/18253/18253_onsen.jpg",
    "reviewCount": 5673,
    "reviewAverage": 4.42,
    "userReview": "バイキングは豊富で美味、扉の汚れが気になるバイキングのメニューは豊富で、どれも美味しかったです。建物の造りが古いのか、部屋の入口の扉に汚れが目立つのが気になりました。クチコミの詳細はこ…　 ",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D18253",
    "access": "JR白浜駅から車で約10分※無料送迎バス運行中／南紀白浜空港から車で約8分／大阪から車で阪和道南紀田辺IC経由で約2時間",
    "label": "和歌山県白浜町・有田市ふるさと納税・有田みかんと紀州の味覚・全室オーシャンビューリゾート「和歌山柑橘ロード」白浜古賀の井リゾート＆スパ",
    "themeTitle": "和歌山県白浜町ふるさと納税：有田みかんの郷へのアクセス良好・全室オーシャンビュー温泉リゾート「白浜古賀の井リゾート＆スパ」",
    "themeDesc": "白浜の穏やかな内湾を見下ろす丘の上に建ち、優雅なスパや日本庭園に包まれたラグジュアリーホテル。自社源泉の温泉「深海の湯」やイルミネーション、紀州の海の幸と有田みかんを使用した贅沢なビュッフェ・会席が魅力です。",
    "revAvg": "4.4",
    "minCharge": "11,900"
  },
  {
    "hotelNo": 54209,
    "hotelName": "熱海温泉　ホテル大野屋（伊東園ホテルズ）",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D54209",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D54209%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D54209",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D54209",
    "hotelKanaName": "あたみおんせん　ほてるおおのや",
    "hotelSpecial": "４本の自家源泉を所有し、３００人同時入浴可能なローマ風呂など、大小９ヶ所自慢のお風呂がございます。",
    "hotelMinCharge": 7898,
    "address1": "静岡県",
    "address2": "熱海市和田浜南町3-9",
    "telephoneNo": "0570-024-780",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/54209/54209.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/54209/54209_k.jpg",
    "reviewCount": 2145,
    "reviewAverage": 3.93,
    "userReview": "館内の清掃不足と危険な温度設定に不満建物の老朽は致し方のないことですが、館内室内の清潔さは努力できると思います。ロビーに置かれた椅子は長年お客様に愛用されてきた暁なのでしょうか、背もたれの首の…　 ",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D54209",
    "access": "熱海駅より路線バス（乗り場７）にて、「マリンスパあたみ」下車　／　車で「長泉IC」から伊豆縦貫・函熱道路で６０分",
    "label": "静岡県熱海市・伊東市ふるさと納税・三ヶ日みかんとニューサマーオレンジ香る「静岡柑橘リゾート」熱海温泉ホテル大野屋",
    "themeTitle": "静岡県熱海市ふるさと納税：相模湾の潮風と三ヶ日みかんの郷・名物ローマ風呂「熱海温泉 ホテル大野屋」",
    "themeDesc": "熱海海岸にほど近く、三ヶ日や伊豆の柑橘ロードドライブの拠点に親しまれる老舗温泉ホテル。三百人が一度に入れる名物「ローマ風呂」や相模湾一望の露天風呂で寛ぎ、静岡の地魚やバイキングをリーズナブルに楽しめます。",
    "revAvg": "3.9",
    "minCharge": "7,898"
  }
];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* パンくずリスト */}
      <nav className="bg-white border-b border-slate-200 py-3 px-4 text-xs text-slate-500">
        <div className="max-w-5xl mx-auto flex items-center space-x-2">
          <Link href="/" className="hover:text-emerald-600 transition">ホーム</Link>
          <span>&gt;</span>
          <span className="text-slate-700 font-medium">日本三大柑橘王国＆爽快な果樹園パノラマ・美肌名湯宿×ふるさと納税ガイド</span>
        </div>
      </nav>

      {/* ヒーローヘッダー */}
      <header className="relative bg-gradient-to-br from-emerald-950 via-slate-900 to-teal-950 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-block bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-semibold px-3 py-1 rounded-full mb-2">
            日本三大柑橘・黄金ロード特集
          </div>
          <h1 className="text-2xl md:text-4xl font-bold leading-tight tracking-tight">
            日本三大柑橘王国＆爽快な果樹園パノラマ・美肌名湯宿×ふるさと納税ガイド
          </h1>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-3xl mx-auto pt-2">
            南国の太陽光線と黒潮が運ぶ潮風、段々畑の水はけの良い石垣が極上の甘みと酸味を凝縮させる「日本三大柑橘王国」――柑橘の品種数が日本一を誇り「蛇口からみかんジュース」でも有名な愛媛の「愛媛・松山・八幡浜」、天正年間に始まり400年の歴史を誇る最高峰ブランド・有田みかんが段々畑一面を黄金色に染める和歌山の「紀州・有田・白浜」、そして富士山と駿河湾を望む温暖な斜面で三ヶ日みかんや青島みかん・ニューサマーオレンジを育む静岡の「伊豆・熱海・浜名湖」。果樹園が広がるシーサイドロードをドライブし、搾りたての柑橘ジュースや名湯露天風呂、ご当地ブランド海の幸を満喫する爽やかな旅を楽天ふるさと納税でお楽しみください。
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
            青い海と空に映えるオレンジ色の果樹園。ビタミンカラーの絶景と名湯リゾート
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>有田みかん・せとか・紅まどんな・三ヶ日みかん！濃厚な甘みの高級柑橘巡り</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                段々畑の壮大なみかん山パノラマや、ジューススタンドでの飲み比べを満喫。
              </p>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>愛媛の真鯛と宇和島鯛めし、和歌山の紀州クエと勝浦マグロ、静岡の金目鯛と駿河湾桜えび</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                柑橘の酸味と相性抜群な、黒潮・瀬戸内海が育んだ最高峰の海鮮ディナーを堪能。
              </p>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>楽天ふるさと納税宿泊クーポンでシーサイドリゾートや道後・白浜・熱海の名湯をお得に予約</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                爽快な海沿いドライブ旅や家族旅行でも、寄付金額に応じた最大30%オフの即時割引クーポンでスマートにお得ステイ。
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
            
            <Link href="/furusato-tax-three-great-fruit-kingdoms-auberge-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三大フルーツ王国＆もぎたて果実の美食リゾート×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                山梨・山形・長野。
              </p>
            </Link>
            
            <Link href="/furusato-tax-oceanfront-wave-sound-healing-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                絶景オーシャンフロント×波音ヒーリングの海宿ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                稲取・南房総・読谷村。
              </p>
            </Link>
            
            <Link href="/furusato-tax-three-major-bihada-hotspring-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三大美肌の湯×炭酸水素塩泉・美肌温泉ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                嬉野・喜連川・玉造。
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
