import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '日本三大名瀑＆豪快な水煙と滝見リゾート・温泉宿×ふるさと納税完全ガイド【2026年最新】華厳の滝・那智の滝・袋田の滝',
  description: '轟く爆音と立ち昇る水煙！栃木日光「華厳の滝」落差97mの一大パノラマと中禅寺金谷ホテル、和歌山那智勝浦「那智の滝」落差133m日本一の直瀑・熊野信仰と大洞窟温泉ホテル浦島、茨城大子町「袋田の滝」四段の岩肌を流れる氷瀑の美と袋田温泉思い出浪漫館。日本三大名瀑の大迫力景観と温泉を楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
  keywords: '日本三大名瀑・大迫力絶景特集, 楽天ふるさと納税, 温泉宿, ふるさと納税 旅行, 高級旅館, ホテル予約, 2026年旅行',
  openGraph: {
    title: '日本三大名瀑＆豪快な水煙と滝見リゾート・温泉宿×ふるさと納税完全ガイド【2026年最新】華厳の滝・那智の滝・袋田の滝',
    description: '轟く爆音と立ち昇る水煙！栃木日光「華厳の滝」落差97mの一大パノラマと中禅寺金谷ホテル、和歌山那智勝浦「那智の滝」落差133m日本一の直瀑・熊野信仰と大洞窟温泉ホテル浦島、茨城大子町「袋田の滝」四段の岩肌を流れる氷瀑の美と袋田温泉思い出浪漫館。日本三大名瀑の大迫力景観と温泉を楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    type: 'article',
    url: 'https://croud-travel.pages.dev/furusato-tax-three-great-waterfalls-resort-stay',
    siteName: 'トラベルポータル',
  },
};

export default function Page() {
  const officialAffUrl = 'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F';

  const hotels = [
  {
    "hotelNo": 28759,
    "hotelName": "日光中禅寺温泉　中禅寺金谷ホテル",
    "hotelKanaName": "にっこうちゅうぜんじおんせん　ちゅうぜんじ　かなやほてる",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D28759",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D28759%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D28759",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D28759",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/28759/28759.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/28759.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/28759/28759_meal.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/28759/28759map.gif",
    "reviewCount": 882,
    "reviewAverage": 4.5,
    "userReview": "落ち着いたクラシックな空間と温泉、朝食に満足相変わらず落ち着いたクラシックホテルです。しかも、温泉付き、朝のオムレツは落ち着いて食べられて良い。クチコミの詳細はこちらから　https://re…　2026-09-02 19:59:24投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=28759\" class=\"3click\">つづきはこちら</a>",
    "hotelMinCharge": 14750,
    "address1": "栃木県",
    "address2": "日光市中宮祠2482",
    "telephoneNo": "0288-51-0001",
    "access": "日光宇都宮有料道路清滝IC～車で約25分（いろは坂経由）東武日光駅～無料送迎バス有（運行時間変動有）日光東照宮迄車40分",
    "parkingInformation": "有り（屋外）　５０台　無料　予約不要",
    "nearestStation": "東武日光",
    "hotelSpecial": "日光国立公園内、中禅寺湖畔に建つログハウス風洋式ホテル。露天温泉「空ぶろ－ＳＯＲＡＢＵＲＯ－」有り。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D28759",
    "featureKey": "waterfall_kegon",
    "featureLabel": "栃木県日光市ふるさと納税・落差97mの爆音と水煙が轟く日光の名瀑「華厳の滝」中禅寺湖畔と中禅寺金谷ホテル",
    "themeTitle": "栃木県日光市ふるさと納税：華厳の滝と中禅寺湖畔に抱かれたクラシックリゾート「日光中禅寺温泉 中禅寺金谷ホテル」",
    "themeDesc": "奥日光の大自然の中禅寺湖畔に佇む木造洋風ホテル。名瀑・華厳の滝から車でわずか数分の絶好の立地で、緑に囲まれた露天風呂「空ぶろ」では乳白色の硫黄泉を満喫。夕食は金谷ホテル伝統の本格フランス料理を優雅に堪能できます。",
    "revAvg": "4.5",
    "minCharge": "14,750"
  },
  {
    "hotelNo": 54556,
    "hotelName": "南紀勝浦温泉　ホテル浦島",
    "hotelKanaName": "なんきかつうらおんせん　ほてるうらしま",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D54556",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D54556%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D54556",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D54556",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/54556/54556.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/54556.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/54556/54556_b1.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/54556/54556map.gif",
    "reviewCount": 6326,
    "reviewAverage": 4.22,
    "userReview": "リニューアルで一新、来年もまた訪れたい浦島さんへは十数年前くらいから、毎年訪問しております。今年は特に、70周年でリニューアルされているという事で楽しみにしておりました。感想は、結構落ち着…　2026-09-03 19:36:10投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=54556\" class=\"3click\">つづきはこちら</a>",
    "hotelMinCharge": 8250,
    "address1": "和歌山県",
    "address2": "東牟婁郡那智勝浦町勝浦1165-2",
    "telephoneNo": "0735-52-1011",
    "access": "ＪＲ紀勢線　紀伊勝浦駅から徒歩6分で桟橋へ。更に専用ボート又は、シャトルバスで５分　詳しくは交通案内ページをご覧ください",
    "parkingInformation": "400台（無料）／駐車場はホテルより離れた場所にございます。詳しくは交通案内ページをご覧ください",
    "nearestStation": "紀伊勝浦",
    "hotelSpecial": "【楽天トラベルゴールドアワード受賞】圧倒的なスケールと開放感！天然洞窟温泉など湯巡りを楽しもう♪",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D54556",
    "featureKey": "waterfall_nachi",
    "featureLabel": "和歌山県那智勝浦町ふるさと納税・落差133m日本一の直瀑にして熊野信仰の御神体「那智の滝」大洞窟風呂ホテル浦島",
    "themeTitle": "和歌山県那智勝浦町ふるさと納税：那智の滝と熊野古道への拠点・太平洋を望む大洞窟風呂「南紀勝浦温泉 ホテル浦島」",
    "themeDesc": "勝浦港から専用船で渡る海に浮かぶ温泉ワンダーランド。御神体・那智の滝への観光に最適で、太平洋の荒波が間近に迫る天然洞窟露天風呂「忘帰洞」の眺望は圧巻。夕食は勝浦港水揚げの新鮮な生まぐろを心ゆくまで味わえます。",
    "revAvg": "4.2",
    "minCharge": "8,250"
  },
  {
    "hotelNo": 37878,
    "hotelName": "袋田温泉　思い出浪漫館",
    "hotelKanaName": "おもいでろまんかん",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D37878",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D37878%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D37878",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D37878",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/37878/37878.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/37878.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/37878/37878_kya.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/37878/37878map.gif",
    "reviewCount": 1986,
    "reviewAverage": 4.46,
    "userReview": "朝食と夕食は満足、夕食の時間は選択肢が欲しい朝食は品数も多くゆっくりと食べることができよかった。夕食も品数が多くよかったが、時間の選択が6時と6時半しかないので、もう少し遅い時間の選択ができればな…　2026-09-03 13:40:47投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=37878\" class=\"3click\">つづきはこちら</a>",
    "hotelMinCharge": 9000,
    "address1": "茨城県",
    "address2": "久慈郡大子町袋田978",
    "telephoneNo": "0570-200-418",
    "access": "車：常磐自動車道　那珂ＩＣより国道１１８号で約５０分",
    "parkingInformation": "無料駐車場有り　約１００台収容可",
    "nearestStation": "袋田",
    "hotelSpecial": "【オールインクルーシブ】日本三名瀑・袋田の滝まで車で5分。奥久慈さとやまバイキングと天然温泉の宿。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D37878",
    "featureKey": "waterfall_fukuroda",
    "featureLabel": "茨城県大子町ふるさと納税・四段の岩肌を白糸のように流れる四度の滝「袋田の滝」奥久慈渓流と袋田温泉思い出浪漫館",
    "themeTitle": "茨城県大子町ふるさと納税：袋田の滝まで徒歩散策！奥久慈の渓流と美肌の湯に寛ぐ「袋田温泉 思い出浪漫館」",
    "themeDesc": "名瀑・袋田の滝のすぐそば、久慈川の清流沿いに建つ大正ロマン漂う温泉宿。美肌効果の高いアルカリ単純温泉の渓流露天風呂で心地よいせせらぎに耳を傾け、夕食は奥久慈軍鶏や常陸牛、地場産野菜など大子の恵みを存分に味わえます。",
    "revAvg": "4.5",
    "minCharge": "9,000"
  }
];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* パンくずリスト */}
      <nav className="bg-white border-b border-slate-200 py-3 px-4 text-xs text-slate-500">
        <div className="max-w-5xl mx-auto flex items-center space-x-2">
          <Link href="/" className="hover:text-emerald-600 transition">ホーム</Link>
          <span>&gt;</span>
          <span className="text-slate-700 font-medium">日本三大名瀑＆豪快な滝見温泉宿×ふるさと納税ガイド</span>
        </div>
      </nav>

      {/* ヒーローヘッダー */}
      <header className="relative bg-gradient-to-br from-emerald-950 via-slate-900 to-teal-950 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-block bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-semibold px-3 py-1 rounded-full mb-2">
            日本三大名瀑・大迫力絶景特集
          </div>
          <h1 className="text-2xl md:text-4xl font-bold leading-tight tracking-tight">
            日本三大名瀑＆豪快な滝見温泉宿×ふるさと納税ガイド
          </h1>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-3xl mx-auto pt-2">
            日本各地に数ある滝の中でも、その規模・美しさ・歴史的由緒において頂点に立つ「日本三大名瀑」――世界遺産日光の中禅寺湖から落差97mを一気に落下する栃木の「華厳の滝」、落差133mという日本一の段差を誇り太古より熊野那智大社の御神体として祀られる和歌山の「那智の滝」、そして四段の岩壁を白い布を引くように滑り落ち西行法師も賞賛した茨城の「袋田の滝」。春の新緑、夏の水煙と涼風、秋の錦繍の紅葉、冬の神秘的な氷瀑（凍結した滝）と、四季折々にドラマチックな表情を見せてくれます。滝のマイナスイオンを全身に浴びてリフレッシュした後は、湖畔のリゾートや名湯露天風呂で心身を解きほぐし、日光湯波・勝浦生マグロ・奥久慈軍鶏の美食を味わう旅を楽天ふるさと納税でお楽しみください。
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
            大地を震わせる轟音、舞い上がる清らかな飛沫。圧倒的な生命力を宿す名瀑の調べ
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>落差100m級の大迫力！大地を震わせるマイナスイオンの絶景パノラマ</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                展望台から間近に迫る水しぶきと爆音を体感し、四季折々の紅葉や冬の氷瀑など神秘的な自然美を満喫。
              </p>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>日光伝統のフレンチ＆湯波、南紀勝浦の天然生マグロ尽くし、奥久慈軍鶏と常陸牛</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                滝が育む清らかな水と豊かな風土に育まれた、日本屈指のご当地ブランドグルメを贅沢に堪能。
              </p>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>楽天ふるさと納税宿泊クーポンで憧れの老舗名宿・温泉リゾートをお得に予約</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                記念日や家族旅行、絶景ドライブ旅でも、寄付金額に応じた最大30%オフの即時割引クーポンでスマートにお得ステイ。
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
                        {h.hotelSpecial || '日本三大美肌の湯のとろとろ泉質、大自然の原生林に抱かれた秘湯の一軒宿、エメラルドグリーンに輝く渓谷美、轟音とともに飛沫をあげる日本三大名瀑を巡る極上の拠点。四季折々の美食と名湯でお寛ぎください。'}
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
            あわせて読みたい日本の名湯・秘境・絶景特集
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            
            <Link href="/furusato-tax-three-great-gorges-scenery-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三大渓谷美＆清流大自然絶景宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                清津峡・黒部峡谷・大杉谷。
              </p>
            </Link>
            
            <Link href="/furusato-tax-three-great-stalactite-caves-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三大鍾乳洞＆地底探検・大自然パノラマ宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                あぶくま洞・玉泉洞・井倉洞。
              </p>
            </Link>
            
            <Link href="/furusato-tax-three-major-strange-sceneries-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三大奇景＆奇岩絶壁パノラマ宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                妙義山・寒霞渓・耶馬渓。
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
