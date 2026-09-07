import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '日本三大宿場町＆木曽路の出桁造り・江戸の面影残す街道名宿×ふるさと納税完全ガイド【2026年最新】妻籠宿・馬籠宿・奈良井宿',
  description: 'タイムスリップしたかのような木曽路の町並み！長野木曽「妻籠宿」電線地中化で守られた日本初の重要伝統的建造物群保存地区とおん宿蔦屋、岐阜中津川「馬籠宿」坂道に沿って石畳が続く島崎藤村の故郷と天然温泉ホテル花更紗、長野塩尻「奈良井宿」奈良井千軒の壮麗な出桁造りと歴史の宿場町御宿伊勢屋。木曽檜の薫り、信州そば、木曽牛すき焼きを楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
  keywords: '日本三大宿場町・中山道街道特集, 楽天ふるさと納税, 温泉宿, ふるさと納税 旅行, 高級旅館, ホテル予約, 2026年旅行',
  openGraph: {
    title: '日本三大宿場町＆木曽路の出桁造り・江戸の面影残す街道名宿×ふるさと納税完全ガイド【2026年最新】妻籠宿・馬籠宿・奈良井宿',
    description: 'タイムスリップしたかのような木曽路の町並み！長野木曽「妻籠宿」電線地中化で守られた日本初の重要伝統的建造物群保存地区とおん宿蔦屋、岐阜中津川「馬籠宿」坂道に沿って石畳が続く島崎藤村の故郷と天然温泉ホテル花更紗、長野塩尻「奈良井宿」奈良井千軒の壮麗な出桁造りと歴史の宿場町御宿伊勢屋。木曽檜の薫り、信州そば、木曽牛すき焼きを楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    type: 'article',
    url: 'https://croud-travel.pages.dev/furusato-tax-three-great-post-towns-nakasendo-stay',
    siteName: 'トラベルポータル',
  },
};

export default function Page() {
  const officialAffUrl = 'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F';

  const hotels = [
  {
    "hotelNo": 6067,
    "hotelName": "きそふくしま温泉　街道浪漫　おん宿　蔦屋",
    "hotelKanaName": "きそふくしまおんせん　かいどうろまん　おんやど　つたや",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D6067",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D6067%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D6067",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D6067",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/6067/6067.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/6067.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/6067/6067_lob.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/6067/6067map.gif",
    "reviewCount": 573,
    "reviewAverage": 4.24,
    "userReview": "中山道歩きの疲れを癒やす将軍ディナーと温泉中山道を歩き、いただいた将軍ディナーがとてもしみました。部屋風呂でゆっくりして、いい夏旅でしたクチコミの詳細はこちらから　https://review…",
    "hotelMinCharge": 8090,
    "address1": "長野県",
    "address2": "木曽郡木曽町福島本町5162",
    "telephoneNo": "0264-22-2010",
    "access": "JR木曽福島駅～徒歩約10分【15：30分16：40分送迎有要予約】伊那IC約40分塩尻IC約60分中津川I約70分",
    "parkingInformation": "有り　20台　無料",
    "nearestStation": "木曽福島",
    "hotelSpecial": "創業300年☆評判料理と木曽川沿い露天風呂【きそふくしま温泉】で心もからだもリフレッシュ♪",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D6067",
    "label": "長野県南木曽町・木曽町ふるさと納税・江戸時代の風情をそのまま残す木曽路の宿場「妻籠宿」木曽路の宿いわや",
    "themeTitle": "長野県木曽町・南木曽町ふるさと納税：妻籠宿散策の拠点・木曽川の清流を望む創業三百余年の老舗「きそふくしま温泉 街道浪漫 おん宿 蔦屋」",
    "themeDesc": "木曽川のほとりに佇み、島崎藤村のゆかりの宿としても知られる歴史ある温泉宿。妻籠宿や福島関所跡への散策拠点に最適で、木曽の薬草を活かした展望大浴場や、信州牛ステーキ・手打ちそばを取り入れた街道会席ディナーを堪能できます。",
    "revAvg": "4.2",
    "minCharge": "8,090"
  },
  {
    "hotelNo": 8027,
    "hotelName": "ホテル花更紗",
    "hotelKanaName": "はなさらさ",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D8027",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D8027%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D8027",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D8027",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/8027/8027.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/8027.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/8027/8027_room.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/8027/8027map.gif",
    "reviewCount": 1206,
    "reviewAverage": 4.26,
    "userReview": "クアリゾート使うときは注意久しぶりに利用しました。部屋がリフォームされたのか、すごくきれいになっていました。畳のスペースもあり、素泊まりで、夕食を買っていったので食べるのに便利でした。フロントでも…",
    "hotelMinCharge": 5000,
    "address1": "岐阜県",
    "address2": "中津川市神坂280",
    "telephoneNo": "0573-69-5111",
    "access": "中央自動車道神坂スマートＩＣ約３分、中津川ＩＣ約２０分　駐車場無料　JR中津川駅無料シャトルバス有",
    "parkingInformation": "駐車場無料　最大300台　大型バス可",
    "nearestStation": "中津川",
    "hotelSpecial": "【2024年7月リニューアル】とろとろ美人の湯が大人気。温泉館も利用可で広々露天風呂も楽しめます！",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D8027",
    "label": "岐阜県中津川市ふるさと納税・坂道に石畳が続く島崎藤村生誕の宿場「馬籠宿」ホテル花更紗",
    "themeTitle": "岐阜県中津川市ふるさと納税：馬籠宿の石畳散策至近・美肌の天然温泉クアリゾート「ホテル花更紗」",
    "themeDesc": "馬籠宿のすぐ近くに位置し、恵那山を望む豊かな自然に囲まれた温泉リゾートホテル。重曹泉のとろりとした美肌の湯を満喫できるほか、飛騨牛の陶板焼きや岐阜の清流が育んだ鮎・地元野菜を使った贅沢な和食会席ディナーが好評です。",
    "revAvg": "4.3",
    "minCharge": "5,000"
  },
  {
    "hotelNo": 70819,
    "hotelName": "奈良井宿　御宿伊勢屋",
    "hotelKanaName": "ならいじゅく　おやどいせや",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D70819",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D70819%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D70819",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D70819",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/70819/70819.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/70819.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/70819/70819_h.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/70819/70819map.gif",
    "reviewCount": 11,
    "reviewAverage": 0,
    "userReview": "",
    "hotelMinCharge": 0,
    "address1": "長野県",
    "address2": "塩尻市奈良井388",
    "telephoneNo": "0264-34-3051",
    "access": "ＪＲ中央西線　奈良井駅から徒歩１０分",
    "parkingInformation": "有り　１０台　無料　予約不要",
    "nearestStation": "奈良井",
    "hotelSpecial": "母屋は江戸時代に建てられた建物で築２００年。料理は地元の食材を活かし、木曽の味覚を存分に味わえます。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D70819",
    "label": "長野県塩尻市ふるさと納税・奈良井千軒と謳われた木曽路随一の宿場町「奈良井宿」塩尻・木曽ステイ",
    "themeTitle": "長野県塩尻市ふるさと納税：奈良井宿の重要伝統的建造物群に佇む江戸文政期創業の旅籠「奈良井宿 御宿伊勢屋」",
    "themeDesc": "奈良井宿の中心に位置し、天保年間の旅籠の風情をそのまま残す登録有形文化財の老舗宿。太い梁と格子戸が醸し出す江戸情緒の中で、信州名物の手打ちそばや木曽の山菜・川魚料理を囲炉裏端の温もりと共に味わう貴重な体験ができます。",
    "revAvg": "4.3",
    "minCharge": "8,000"
  }
];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* パンくずリスト */}
      <nav className="bg-white border-b border-slate-200 py-3 px-4 text-xs text-slate-500">
        <div className="max-w-5xl mx-auto flex items-center space-x-2">
          <Link href="/" className="hover:text-emerald-600 transition">ホーム</Link>
          <span>&gt;</span>
          <span className="text-slate-700 font-medium">日本三大宿場町＆木曽路の出桁造り・街道名宿×ふるさと納税ガイド</span>
        </div>
      </nav>

      {/* ヒーローヘッダー */}
      <header className="relative bg-gradient-to-br from-emerald-950 via-slate-900 to-teal-950 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-block bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-semibold px-3 py-1 rounded-full mb-2">
            日本三大宿場町・中山道街道特集
          </div>
          <h1 className="text-2xl md:text-4xl font-bold leading-tight tracking-tight">
            日本三大宿場町＆木曽路の出桁造り・街道名宿×ふるさと納税ガイド
          </h1>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-3xl mx-auto pt-2">
            深い山々に抱かれた中山道六十九次のうち、木曽谷を貫く「木曽路十一宿」のなかでも当時の面影を最も色濃く残す「日本三大宿場町」――保存運動の先駆けとして電柱をなくし江戸の街並みをそのまま今に伝える長野の「妻籠宿」、急勾配の坂道に敷かれた石畳の両脇に水車や旅籠が並び文豪・島崎藤村生誕の地としても名高い岐阜の「馬籠宿」、そして「奈良井千軒」と称され約1キロメートルにわたって出桁造りの町家がずらりと連なる長野の「奈良井宿」。夕暮れ時に行灯が灯る宿場をそぞろ歩き、木曽檜の湯に浸かり、信州の山の恵みを味わう情緒あふれる旅を楽天ふるさと納税でお楽しみください。
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
        {/* リードセクション */}
        <section className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200/80 space-y-4">
          <h2 className="text-xl md:text-2xl font-bold text-slate-900 border-l-4 border-emerald-500 pl-3">
            連なる格子戸と出桁造りの屋根。江戸の旅人たちが行き交った木曽路を歩く
          </h2>
          <p className="text-slate-600 leading-relaxed text-sm md:text-base">
            深い山々に抱かれた中山道六十九次のうち、木曽谷を貫く「木曽路十一宿」のなかでも当時の面影を最も色濃く残す「日本三大宿場町」――保存運動の先駆けとして電柱をなくし江戸の街並みをそのまま今に伝える長野の「妻籠宿」、急勾配の坂道に敷かれた石畳の両脇に水車や旅籠が並び文豪・島崎藤村生誕の地としても名高い岐阜の「馬籠宿」、そして「奈良井千軒」と称され約1キロメートルにわたって出桁造りの町家がずらりと連なる長野の「奈良井宿」。夕暮れ時に行灯が灯る宿場をそぞろ歩き、木曽檜の湯に浸かり、信州の山の恵みを味わう情緒あふれる旅を楽天ふるさと納税でお楽しみください。
          </p>
        </section>

        {/* メリット3選 */}
        <section className="space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
              ふるさと納税×日本三大宿場町中山道街道 3つのメリット
            </h2>
            <p className="text-xs md:text-sm text-slate-500">
              実質2,000円の自己負担で全国の名所・名宿をお得に楽しむポイント
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            
            <div key="0" className="bg-white rounded-xl p-6 shadow-sm border border-slate-200/80 flex flex-col justify-between hover:border-emerald-300 transition duration-200">
              <div className="space-y-3">
                <span className="inline-block w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 font-bold text-center leading-8 text-sm">
                  01
                </span>
                <h3 className="font-bold text-base text-slate-900 leading-snug">
                  日帰りの観光客が去った夕暮れや早朝！静寂と木造建築の美しさを独占できる街道ステイ
                </h3>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                  行灯の明かりが石畳を照らす黄昏時や、朝靄に包まれる古い町並みをプライベートに散策。
                </p>
              </div>
            </div>
            <div key="1" className="bg-white rounded-xl p-6 shadow-sm border border-slate-200/80 flex flex-col justify-between hover:border-emerald-300 transition duration-200">
              <div className="space-y-3">
                <span className="inline-block w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 font-bold text-center leading-8 text-sm">
                  02
                </span>
                <h3 className="font-bold text-base text-slate-900 leading-snug">
                  挽きたての香り高い信州手打ちそば、五平餅、木曽牛や岩魚の塩焼きなど山の滋味会席
                </h3>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                  中山道を旅する人々を温かくもてなしてきた、素朴で贅沢な木曽路の伝統グルメを満喫。
                </p>
              </div>
            </div>
            <div key="2" className="bg-white rounded-xl p-6 shadow-sm border border-slate-200/80 flex flex-col justify-between hover:border-emerald-300 transition duration-200">
              <div className="space-y-3">
                <span className="inline-block w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 font-bold text-center leading-8 text-sm">
                  03
                </span>
                <h3 className="font-bold text-base text-slate-900 leading-snug">
                  楽天ふるさと納税宿泊クーポンで歴史ある旅籠旅館や温泉ホテルをお得に予約
                </h3>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                  街道ウォーキングや家族の歴史旅でも、寄付金額に応じた最大30%オフの即時割引クーポンでスマートにお得ステイ。
                </p>
              </div>
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
                        {h.hotelSpecial || '歴史ある名所や豊かな自然に囲まれた特別な拠点。四季折々の美食と心温まるおもてなしでお寛ぎください。'}
                      </p>

                      {h.userReview && (
                        <div className="bg-amber-50/70 border border-amber-100 p-3 rounded-lg text-xs space-y-1">
                          <span className="font-semibold text-amber-900">宿泊者のクチコミ:</span>
                          <p className="text-slate-700 italic line-clamp-2 leading-relaxed">
                            “{h.userReview}”
                          </p>
                        </div>
                      )}

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
            あわせて読みたい日本の名所・歴史と絶景ホテル特集
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            
            <Link href="/furusato-tax-scenic-drives-highland-resort-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本百名道＆高原パノラマドライブ名宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                ビーナスライン・志賀草津・伊吹山。
              </p>
            </Link>
            <Link href="/furusato-tax-three-great-lacquerwares-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                伝統工芸の里＆手仕事と職人技を巡る工芸名宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                木曽漆器・輪島塗・越前漆器。
              </p>
            </Link>
            <Link href="/furusato-tax-three-great-castles-historic-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三大名城＆不落の巨城を望む城見ステイ×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                熊本・名古屋・大阪。
              </p>
            </Link>
          </div>
        </section>
      </main>

      {/* フッター */}
      <footer className="bg-slate-900 text-slate-400 py-8 px-4 text-xs text-center border-t border-slate-800 mt-16">
        <div className="max-w-5xl mx-auto space-y-3">
          <p>© 2026 トラベルポータル All Rights Reserved. 掲載の宿情報・画像は楽天トラベルAPIより取得しています。</p>
          <p>ふるさと納税クーポンの利用条件や最新の空室状況は楽天トラベル公式サイトをご確認ください。</p>
        </div>
      </footer>
    </div>
  );
}
