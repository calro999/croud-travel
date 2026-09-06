import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '日本三大名橋＆伝統建築美を渡る歴史街道宿×ふるさと納税完全ガイド【2026年最新】錦帯橋・眼鏡橋・日本橋',
  description: '幾星霜の歴史を刻む日本の名架橋！山口岩国「錦帯橋」五連の木造アーチ美と錦帯橋温泉岩国国際観光ホテル、長崎「眼鏡橋」日本最古の国重文アーチ石橋と異国情緒漂うホテルモントレ長崎、東京中央区「日本橋」五街道の起点たる石造二連アーチと三井ガーデンホテル日本橋プレミア。日本三大名橋の建築美と老舗グルメを楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
  keywords: '日本三大名橋・伝統架橋建築特集, 楽天ふるさと納税, 温泉宿, ふるさと納税 旅行, 高級旅館, ホテル予約, 2026年旅行',
  openGraph: {
    title: '日本三大名橋＆伝統建築美を渡る歴史街道宿×ふるさと納税完全ガイド【2026年最新】錦帯橋・眼鏡橋・日本橋',
    description: '幾星霜の歴史を刻む日本の名架橋！山口岩国「錦帯橋」五連の木造アーチ美と錦帯橋温泉岩国国際観光ホテル、長崎「眼鏡橋」日本最古の国重文アーチ石橋と異国情緒漂うホテルモントレ長崎、東京中央区「日本橋」五街道の起点たる石造二連アーチと三井ガーデンホテル日本橋プレミア。日本三大名橋の建築美と老舗グルメを楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    type: 'article',
    url: 'https://croud-travel.pages.dev/furusato-tax-three-great-bridges-history-stay',
    siteName: 'トラベルポータル',
  },
};

export default function Page() {
  const officialAffUrl = 'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F';

  const hotels = [
  {
    "hotelNo": 11295,
    "hotelName": "錦帯橋温泉　岩国国際観光ホテル",
    "hotelKanaName": "いわくに　こくさいかんこうほてる",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D11295",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D11295%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D11295",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D11295",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/11295/11295.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/11295.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/11295/11295_war.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/11295/11295map.gif",
    "reviewCount": 1295,
    "reviewAverage": 4.29,
    "userReview": "夏休みに13泊しましたが、他のホテルに比べて金額がちょっと高めだったかなぁと思います由緒あるホテルで内装やお風呂も素敵だったので、しょうがないのかなぁとは思いますが食事の金額もかなり上げないと、そ…　2026-08-29 21:29:07投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=11295\" class=\"3click\">つづきはこちら</a>",
    "hotelMinCharge": 15400,
    "address1": "山口県",
    "address2": "岩国市岩国1-1-7",
    "telephoneNo": "0827-43-1111",
    "access": "JR山陽新幹線新岩国駅より車で10分 山陽自動車道岩国ICより車で8分 岩国錦帯橋空港より車で15分、宮島より車で40分",
    "parkingInformation": "有り　50台　無料　先着順　★ただし万一満車の場合、駐車の事は必ず責任持って対応いたします★",
    "nearestStation": "新岩国",
    "hotelSpecial": "日本一の名橋『錦帯橋』より徒歩2分、岩国錦帯橋空港より車で約15分、宮島より車で約40分",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D11295",
    "label": "山口県岩国市ふるさと納税・五連の優美な木造アーチ名橋「錦帯橋」岩国城を望む清流美と錦帯橋温泉岩国国際観光ホテル",
    "themeTitle": "山口県岩国市ふるさと納税：五連の優美な木造アーチ名橋「錦帯橋」と岩国城を望む「錦帯橋温泉 岩国国際観光ホテル」",
    "themeDesc": "錦川にかかる国指定名勝・錦帯橋のすぐ目の前に佇む名門ホテル。展望露天風呂「いつつばしの湯」からは錦帯橋と岩国城をパノラマで一望でき、夕食には郷土料理「岩国寿司」や清流の鮎料理、山口名産のふぐ会席に舌鼓を打ちます。",
    "revAvg": "4.3",
    "minCharge": "15,400"
  },
  {
    "hotelNo": 1027,
    "hotelName": "ホテルモントレ長崎",
    "hotelKanaName": "もんとれ　ながさき",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D1027",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D1027%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D1027",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D1027",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/1027/1027.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/1027.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/1027/1027_ky.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/1027/1027map.gif",
    "reviewCount": 2457,
    "reviewAverage": 4.22,
    "userReview": "レトロで可愛い部屋と充実した朝食に大満足異国情緒な長崎で更に異国気分を味わえるホテルでした。エレベーターがレトロで素敵、部屋も可愛かったです。床がタイルで窓が木の感じなのがまた雰囲気がありました。…　2026-08-30 01:00:33投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=1027\" class=\"3click\">つづきはこちら</a>",
    "hotelMinCharge": 4200,
    "address1": "長崎県",
    "address2": "長崎市大浦町1-22",
    "telephoneNo": "095-827-7111",
    "access": "ＪＲ長崎駅から車で5分。路面電車・大浦海岸通駅より徒歩1分。グラバー園、オランダ坂、軍艦島クルーズ船乗場も徒歩圏内。",
    "parkingInformation": "1800円/泊（先着順）満車時には近隣駐車場をご案内させていただきます。（最大2880円/泊）",
    "nearestStation": "長崎（長崎）",
    "hotelSpecial": "グラバー園に程近いオランダ通りに面した白いホテル。【全室Wi-Fi /  加湿機能付空気清浄器完備】",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D1027",
    "label": "長崎県長崎市ふるさと納税・日本最古の国重要文化財アーチ石橋「眼鏡橋」中島川の石畳散策と異国情緒漂うホテルモントレ長崎",
    "themeTitle": "長崎県長崎市ふるさと納税：中島川に架かる日本最古の石造二連アーチ「眼鏡橋」と南欧情緒「ホテルモントレ長崎」",
    "themeDesc": "寛永11年（1634年）架橋の国重要文化財・眼鏡橋へアクセス抜群。ポルトガルの伝統意匠を取り入れた瀟洒な館内で寛ぎ、長崎卓袱料理や長崎和牛、名物ちゃんぽんなど和華蘭文化の美食を心ゆくまで味わいます。",
    "revAvg": "4.2",
    "minCharge": "4,200"
  },
  {
    "hotelNo": 166107,
    "hotelName": "三井ガーデンホテル日本橋プレミア",
    "hotelKanaName": "みついがーでんほてるにほんばしぷれみあ",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D166107",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D166107%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D166107",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D166107",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/166107/166107.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/166107.jpg",
    "roomImageUrl": "",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/166107/166107map.gif",
    "reviewCount": 604,
    "reviewAverage": 4.55,
    "userReview": "接客も立地も素晴らしく、定宿にしたいです。5泊しましたが、前回泊まったお隣のもっと高級な外資よりも接客が素晴らしく、どの方も感じ良く笑顔で挨拶もして下さって、期待以上の良さに正直驚きました。スーペ…　2026-06-01 08:50:43投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=166107\" class=\"3click\">つづきはこちら</a>",
    "hotelMinCharge": 12733,
    "address1": "東京都",
    "address2": "中央区日本橋室町3丁目4番地4号",
    "telephoneNo": "03-3270-1131",
    "access": "東京メトロ銀座線・半蔵門線「三越前」駅地下通路直結/JR「新日本橋」駅地下直結（1・3番出口）",
    "parkingInformation": "無し",
    "nearestStation": "三越前",
    "hotelSpecial": "三越前・新日本橋駅直結、レジャー・ビジネスに最適なロケーション",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D166107",
    "label": "東京都中央区ふるさと納税・五街道の起点となる日本国道路元標の石造二連アーチ「日本橋」老舗百貨店と三井ガーデンホテル日本橋プレミア",
    "themeTitle": "東京都中央区ふるさと納税：日本の道路原標を守る名橋「日本橋」と老舗街の洗練「三井ガーデンホテル日本橋プレミア」",
    "themeDesc": "1911年架橋の重厚な石造アーチ日本橋から徒歩圏内。江戸の粋と現代のモダンが調和した上質空間で、最上階の大浴場「湯心」で旅の疲れを癒やし、老舗百貨店や江戸前寿司・うなぎ割烹の名店巡りを楽しむ大人の都心ステイです。",
    "revAvg": "4.5",
    "minCharge": "12,733"
  }
];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* パンくずリスト */}
      <nav className="bg-white border-b border-slate-200 py-3 px-4 text-xs text-slate-500">
        <div className="max-w-5xl mx-auto flex items-center space-x-2">
          <Link href="/" className="hover:text-emerald-600 transition">ホーム</Link>
          <span>&gt;</span>
          <span className="text-slate-700 font-medium">日本三大名橋＆歴史街道宿×ふるさと納税ガイド</span>
        </div>
      </nav>

      {/* ヒーローヘッダー */}
      <header className="relative bg-gradient-to-br from-emerald-950 via-slate-900 to-teal-950 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-block bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-semibold px-3 py-1 rounded-full mb-2">
            日本三大名橋・伝統架橋建築特集
          </div>
          <h1 className="text-2xl md:text-4xl font-bold leading-tight tracking-tight">
            日本三大名橋＆歴史街道宿×ふるさと納税ガイド
          </h1>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-3xl mx-auto pt-2">
            日本各地の街道や城下町、交易の要所を支えてきた橋梁の最高峰「日本三大名橋」――錦川の清流に描かれる五連の優美な木造アーチが釘を一本も使わぬ木組みの精緻さを誇る山口岩国の「錦帯橋」、興福寺の黙子如定禅師によって架橋された日本最古の国重要文化財アーチ石橋であり水面に映る円環が幻想的な長崎の「眼鏡橋」、そして徳川家康による開府以来、五街道の起点として日本の近代化と物流の中心を担ってきた東京都中央区の石造二連アーチ「日本橋」。古人の知恵と土木工学の粋が結集したこれらの名橋は、四季折々の水辺の景色とともに訪れる者をタイムトラベルへと誘います。名橋を間近に望む老舗料理旅館やラグジュアリーホテルを拠点に、郷土会席や老舗の味を堪能する特別なひとときを楽天ふるさと納税でお楽しみください。
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
            清流に架かる木と石の幾何学美。街道の起点を歩き、数百年受け継がれた匠の技に息をのむ
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>名橋のたもとや城下町・都心好立地！朝夕の静かな時間帯に名橋を独占散策</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                観光客で賑わう日中を避け、早朝の朝靄や夕暮れのライトアップに浮かび上がる名橋のシルエットを優雅に鑑賞。
              </p>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>岩国寿司・アユ会席、長崎卓袱料理、日本橋江戸前割烹と地酒のペアリング</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                名橋が育んだ街道と河川・港湾の豊かな食材を、各宿自慢の本格会席や伝統レストランで贅沢に堪能。
              </p>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>楽天ふるさと納税宿泊クーポンで憧れの名門ホテル＆温泉宿を実質2,000円で予約</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                歴史的観光地の一等地ホテルでも、寄付金額に応じた最大30%オフ即時割引クーポンでスマートにお得旅。
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
                        {h.hotelSpecial || '歴史ある名橋や城下町、鍾乳洞、美林の自然探訪に最適な上質拠点。四季折々の美味と温かなおもてなしでお寛ぎください。'}
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
                宿泊当日は通常通りチェックイン。割引されたお得な価格で、名湯や美食、歴史情緒溢れる極上滞在を満喫できます。
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
            あわせて読みたい日本の伝統美・絶景特集
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            
            <Link href="/furusato-tax-five-national-treasure-castles-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                国宝五城＆名城天守を望む城下町宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                姫路・松本・犬山・彦根・松江。
              </p>
            </Link>
            
            <Link href="/furusato-tax-three-great-waterfalls-hotsprings-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三名瀑＆飛瀑の轟音に癒やされる温泉宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                那智・華厳・袋田。
              </p>
            </Link>
            
            <Link href="/furusato-tax-three-great-peculiar-festivals-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三大奇祭＆情熱の神事体験宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                御柱・吉田の火祭・なまはげ。
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
