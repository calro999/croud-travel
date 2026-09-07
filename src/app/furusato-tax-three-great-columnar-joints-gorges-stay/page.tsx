import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '日本三大柱状節理峡谷＆幾何学絶壁とエメラルド清流名湯宿×ふるさと納税完全ガイド【2026年最新】清津峡・高千穂峡・層雲峡',
  description: 'マグマが冷え固まり生まれた地球の彫刻！新潟十日町「清津峡」巨大柱状節理と水鏡アートの清津峡湯元温泉清津館、宮崎「高千穂峡」阿蘇溶岩が刻んだ神話峡谷と名旅館大和屋、北海道「層雲峡」大雪山麓に連なる24kmの大絶壁と朝陽亭。日本三大柱状節理峡谷（三大奇岩峡谷）の圧倒的ダイナミズムを楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
  keywords: '日本三大柱状節理・峡谷ジオ特集, 楽天ふるさと納税, 温泉宿, ふるさと納税 旅行, 高級旅館, ホテル予約, 2026年旅行',
  openGraph: {
    title: '日本三大柱状節理峡谷＆幾何学絶壁とエメラルド清流名湯宿×ふるさと納税完全ガイド【2026年最新】清津峡・高千穂峡・層雲峡',
    description: 'マグマが冷え固まり生まれた地球の彫刻！新潟十日町「清津峡」巨大柱状節理と水鏡アートの清津峡湯元温泉清津館、宮崎「高千穂峡」阿蘇溶岩が刻んだ神話峡谷と名旅館大和屋、北海道「層雲峡」大雪山麓に連なる24kmの大絶壁と朝陽亭。日本三大柱状節理峡谷（三大奇岩峡谷）の圧倒的ダイナミズムを楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    type: 'article',
    url: 'https://croud-travel.pages.dev/furusato-tax-three-great-columnar-joints-gorges-stay',
    siteName: 'トラベルポータル',
  },
};

export default function Page() {
  const officialAffUrl = 'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F';

  const hotels = [
  {
    "hotelNo": 109363,
    "hotelName": "清津峡湯元温泉　清津館",
    "hotelKanaName": "きよつきょうゆもとおんせん　きよつかん",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D109363",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D109363%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D109363",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D109363",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/109363/109363.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/109363.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/109363/109363_kya.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/109363/109363map.gif",
    "reviewCount": 87,
    "reviewAverage": 4.08,
    "userReview": "階段はきついが湯質と食事に大満足エレベーターなしの三階部屋は、高齢者にはきつかったようです。でも、湯質の良さには感激  貸切露天風呂も努力賞もの食事も地産にこだわり工夫が感じられました…　 ",
    "hotelMinCharge": 10400,
    "address1": "新潟県",
    "address2": "十日町市小出癸2126-1",
    "telephoneNo": "025-763-2181",
    "access": "塩沢石打ICより車で25分/湯沢ICより車で27分/十日町市内より35分",
    "parkingInformation": "有り　１２台　無料　予約不要",
    "nearestStation": "越後湯沢",
    "hotelSpecial": "インスタ映え間違いなし☆十日町市人気No1スポット「清津峡トンネル」へ徒歩1分の秘湯の宿",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D109363",
    "label": "新潟県十日町市ふるさと納税・柱状節理の巨大峡谷と水鏡アート「清津峡渓谷」清津川沿いの一軒宿清津館",
    "themeTitle": "新潟県十日町市ふるさと納税：巨大柱状節理と水鏡アート「清津峡」渓谷に佇む一軒宿「清津峡湯元温泉 清津館」",
    "themeDesc": "清津峡渓谷トンネルのすぐ手前に建つ秘湯の一軒宿。清津川のせせらぎを聞きながら入る薬効豊かな天然温泉露天風呂と、魚沼産コシヒカリ、美雪ます、山菜やキノコなど雪国の滋味あふれる郷土料理を堪能できます。",
    "revAvg": "4.1",
    "minCharge": "10,400"
  },
  {
    "hotelNo": 14067,
    "hotelName": "旅館　大和屋",
    "hotelKanaName": "やまとや",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D14067",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D14067%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D14067",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D14067",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/14067/14067.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/14067.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/14067/14067_war.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/14067/14067map.gif",
    "reviewCount": 362,
    "reviewAverage": 4.36,
    "userReview": "お風呂も食事も快適、マッサージ機が大好評そぼの部屋に宿泊しました。熊本地震の後での宿泊ということで土日の利用だったのにも関わらず宿泊者少なかったです。だからか他の方の口コミにあったようにお風呂…　 ",
    "hotelMinCharge": 19800,
    "address1": "宮崎県",
    "address2": "西臼杵郡高千穂町三田井1148",
    "telephoneNo": "0982-72-2243",
    "access": "高千穂バスセンターより徒歩５分　延岡駅より車で１時間（２１８号経由）　熊本空港より車で１時間半（５７～３２５号線経由）",
    "parkingInformation": "有り　20台　無料　",
    "nearestStation": "高森",
    "hotelSpecial": "高千穂神社まで徒歩10分　約105年続く田舎料理が自慢のお宿です",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D14067",
    "label": "宮崎県高千穂町ふるさと納税・阿蘇溶岩が刻んだ柱状節理の神話峡谷「高千穂峡」真名井の滝と旅館神仙",
    "themeTitle": "宮崎県高千穂町ふるさと納税：阿蘇火砕流が削り出した神話の柱状節理「高千穂峡」と情緒あふれる「旅館 大和屋」",
    "themeDesc": "高千穂峡や高千穂神社へアクセス至近。木のぬくもり漂う落ち着いた和室で寛ぎ、名物高千穂牛ステーキやヤマメの塩焼き、神都高千穂の地酒を味わい、夜は高千穂神社の夜神楽鑑賞を満喫します。",
    "revAvg": "4.4",
    "minCharge": "19,800"
  },
  {
    "hotelNo": 5502,
    "hotelName": "層雲峡　朝陽亭",
    "hotelKanaName": "そううんきょう　ちょうようてい",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D5502",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D5502%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D5502",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D5502",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/5502/5502.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/5502.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/5502/5502_rro.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/5502/5502map.gif",
    "reviewCount": 1843,
    "reviewAverage": 3.88,
    "userReview": "食事と温泉、無料サービスに大満足夕食、朝食がとても良かったです。また、広い部屋を利用させていただきましたが、とてもゆっくり出来ました。温泉はもちろん良かったですが、温泉後に無料のアイスを食…　 ",
    "hotelMinCharge": 13420,
    "address1": "北海道",
    "address2": "上川郡上川町層雲峡温泉",
    "telephoneNo": "0570-026572",
    "access": "上川層雲峡ICよりR39号線を北見方面に車で25分/JR上川駅よりバスで30分/札幌旭川送迎バス運行（3/31迄・要予約",
    "parkingInformation": "有り　100台　先着順　無料",
    "nearestStation": "上川",
    "hotelSpecial": "「最上階天空露天風呂」からは四季折々の渓谷と、満天の星空をお楽しみいただけます。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D5502",
    "label": "北海道上川町ふるさと納税・大雪山麓に連なる24kmの大断崖柱状節理「層雲峡」銀河・流星の滝と層雲峡朝陽リゾートホテル",
    "themeTitle": "北海道上川町ふるさと納税：24kmに及ぶ大雪山麓の大断崖「層雲峡」を見晴らす「層雲峡 朝陽亭」",
    "themeDesc": "大雪山の柱状節理断崖を望む高台に建つ名門温泉ホテル。渓谷美を見下ろす展望大浴場「黒岳」や白濁の露天風呂で癒やされ、北海道の旬の恵みをふんだんに取り入れた和洋中ビュッフェや会席料理を楽しめます。",
    "revAvg": "3.9",
    "minCharge": "13,420"
  }
];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* パンくずリスト */}
      <nav className="bg-white border-b border-slate-200 py-3 px-4 text-xs text-slate-500">
        <div className="max-w-5xl mx-auto flex items-center space-x-2">
          <Link href="/" className="hover:text-emerald-600 transition">ホーム</Link>
          <span>&gt;</span>
          <span className="text-slate-700 font-medium">日本三大柱状節理峡谷＆絶景名湯宿×ふるさと納税ガイド</span>
        </div>
      </nav>

      {/* ヒーローヘッダー */}
      <header className="relative bg-gradient-to-br from-emerald-950 via-slate-900 to-teal-950 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-block bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-semibold px-3 py-1 rounded-full mb-2">
            日本三大柱状節理・峡谷ジオ特集
          </div>
          <h1 className="text-2xl md:text-4xl font-bold leading-tight tracking-tight">
            日本三大柱状節理峡谷＆絶景名湯宿×ふるさと納税ガイド
          </h1>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-3xl mx-auto pt-2">
            太古の火山活動とマグマの急冷によって規則正しい多角柱の割れ目が刻まれ、その後の河川の浸食によって生まれた自然の驚異「日本三大柱状節理峡谷」――国の名勝・天然記念物に指定され、巨大な岩壁トンネル越しに水鏡アートが広がる新潟の「清津峡」、阿蘇山の火砕流が急冷して形成され、真名井の滝がエメラルドの川面に注ぎ込む神話の郷・宮崎の「高千穂峡」、そして大雪山国立公園の表玄関として石狩川を挟み約24kmにわたって高さ200m級の断崖絶壁が連なる北海道の「層雲峡」。幾何学的な岩肌と滝のしぶき、四季折々の紅葉や新緑が織りなすパノラマは、息をのむ美しさです。渓谷沿いの秘湯旅館や大型温泉ホテルを拠点に、魚沼コシヒカリ・高千穂牛・北海道の山海の幸を堪能する特別な休日を楽天ふるさと納税でお楽しみください。
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
            垂直に切り立つ六角形の巨大岩壁と、深緑の滝壺。大地の鼓動を肌で感じる峡谷ステイ
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>渓谷遊歩道やアートトンネル・貸しボートへすぐ！朝一番の絶景独占散策</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                混雑する日中を避け、早朝の朝靄に包まれる柱状節理の神秘的な渓谷美を静かに鑑賞。
              </p>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>魚沼美雪ます＆山菜、高千穂牛ステーキ＆神楽酒、オホーツク海鮮＆北海道牛</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                大自然の恵みが詰まった各地域最高峰のブランド食材ディナーと地酒を心ゆくまで堪能。
              </p>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>楽天ふるさと納税宿泊クーポンで渓谷の一軒宿や温泉リゾートをお得にステイ</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                予約困難な渓谷沿いの名湯宿も、寄付金額に応じた最大30%オフ即時割引クーポンでスマートに予約。
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
            
            <Link href="/furusato-tax-three-great-gorges-canyon-scenery-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三大峡谷＆断崖絶壁・エメラルド渓谷宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                清津峡・黒部峡谷・瀞峡。
              </p>
            </Link>
            
            <Link href="/furusato-tax-three-great-strange-sceneries-geopark-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三大奇景＆奇岩パノラマ温泉宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                妙義山・寒霞渓・耶馬渓。
              </p>
            </Link>
            
            <Link href="/furusato-tax-three-great-limestone-caves-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三大鍾乳洞＆地底神秘美・名湯宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                龍泉洞・秋芳洞・龍河洞。
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
