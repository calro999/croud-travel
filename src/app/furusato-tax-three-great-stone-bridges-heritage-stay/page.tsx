import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '日本三大眼鏡橋＆石造アーチの造形美・川風感じる水辺宿×ふるさと納税完全ガイド【2026年最新】長崎眼鏡橋・諫早眼鏡橋・熊本霊台橋',
  description: '石工たちの知恵と技術が生んだアーチの奇跡！長崎「長崎眼鏡橋」中島川の水面に丸い眼鏡を描く日本最古の石橋とホテルモントレ長崎、長崎「諫早眼鏡橋」本明川の洪水に耐えた雄大な二連石橋と喜々津ステーションホテル、熊本美里「霊台橋」単一アーチ橋として日本最大級の緑川の名橋と美里・熊本ステイ。川辺の散策と名物グルメ、温泉を楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
  keywords: '日本三大石橋・土木遺産特集, 楽天ふるさと納税, 温泉宿, ふるさと納税 旅行, 高級旅館, ホテル予約, 2026年旅行',
  openGraph: {
    title: '日本三大眼鏡橋＆石造アーチの造形美・川風感じる水辺宿×ふるさと納税完全ガイド【2026年最新】長崎眼鏡橋・諫早眼鏡橋・熊本霊台橋',
    description: '石工たちの知恵と技術が生んだアーチの奇跡！長崎「長崎眼鏡橋」中島川の水面に丸い眼鏡を描く日本最古の石橋とホテルモントレ長崎、長崎「諫早眼鏡橋」本明川の洪水に耐えた雄大な二連石橋と喜々津ステーションホテル、熊本美里「霊台橋」単一アーチ橋として日本最大級の緑川の名橋と美里・熊本ステイ。川辺の散策と名物グルメ、温泉を楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    type: 'article',
    url: 'https://croud-travel.pages.dev/furusato-tax-three-great-stone-bridges-heritage-stay',
    siteName: 'トラベルポータル',
  },
};

export default function Page() {
  const officialAffUrl = 'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F';

  const hotels = [
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
    "reviewCount": 2462,
    "reviewAverage": 4.22,
    "userReview": "観光に便利な立地、レトロな雰囲気で静かサッカー観戦のため長崎へ前回行けなかった軍艦島クルーズの乗り場から近くスタジアムに行く前にチェックインできるようホテルを選びました。路面電車の駅からも近く大浦…",
    "hotelMinCharge": 4200,
    "address1": "長崎県",
    "address2": "長崎市大浦町1-22",
    "telephoneNo": "095-827-7111",
    "access": "ＪＲ長崎駅から車で5分。路面電車・大浦海岸通駅より徒歩1分。グラバー園、オランダ坂、軍艦島クルーズ船乗場も徒歩圏内。",
    "parkingInformation": "1800円/泊（先着順）満車時には近隣駐車場をご案内させていただきます。（最大2880円/泊）",
    "nearestStation": "長崎（長崎）",
    "hotelSpecial": "グラバー園に程近いオランダ通りに面した白いホテル。【全室Wi-Fi /  加湿機能付空気清浄器完備】",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D1027",
    "label": "長崎県長崎市ふるさと納税・中島川に架かる日本最古のアーチ式石橋「長崎眼鏡橋」ホテルモントレ長崎",
    "themeTitle": "長崎県長崎市ふるさと納税：中島川眼鏡橋へ好アクセス・南欧ポルトガルの薫り漂うクラシックホテル「ホテルモントレ長崎」",
    "themeDesc": "ポルトガルの職人が手がけた伝統の装飾タイル（アズレージョ）やアンティーク家具が館内を彩る異国情緒あふれるホテル。長崎眼鏡橋やグラバー園への観光散策に絶好の立地で、長崎の旬食材を活かした本格イタリアンディナーを楽しめます。",
    "revAvg": "4.2",
    "minCharge": "4,200"
  },
  {
    "hotelNo": 165115,
    "hotelName": "喜々津ステーションホテル",
    "hotelKanaName": "ききつすてーしょんほてる",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D165115",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D165115%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D165115",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D165115",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/165115/165115.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/165115.jpg",
    "roomImageUrl": "",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/165115/165115map.gif",
    "reviewCount": 331,
    "reviewAverage": 4.31,
    "userReview": "清潔で設備充実、快適な滞在でしたトイレとお風呂が場所は一緒ですが、別でした。部屋はとても綺麗で壁紙も素敵でした。足のマッサージ機もあって至れり尽くせり。ありがとうございました。クチコミの詳細は…",
    "hotelMinCharge": 5450,
    "address1": "長崎県",
    "address2": "諫早市多良見町化屋331-1",
    "telephoneNo": "0957-43-7722",
    "access": "ＪＲ　喜々津駅より徒歩にて約５分",
    "parkingInformation": "有　乗用車1室1台無料（2台目より1台500円/日）、大型車有料　※事前にご連絡ください。",
    "nearestStation": "喜々津",
    "hotelSpecial": "喜々津駅から徒歩約５分。レストランから大村湾が一望できます。全客室ＷｉＦｉ、ＬＡＮ対応。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D165115",
    "label": "長崎県諫早市ふるさと納税・石造二連アーチの雄大な重要文化財「諫早眼鏡橋」諫早ステイ",
    "themeTitle": "長崎県諫早市ふるさと納税：諫早公園の巨大眼鏡橋散策に便利・大浴場完備「喜々津ステーションホテル」",
    "themeDesc": "JR喜々津駅前に位置し、国の重要文化財である諫早眼鏡橋の散策や有明海・大村湾観光の拠点として抜群のアクセスを誇るホテル。男性専用大浴場を備え、本明川の伏流水が育んだ諫早名物の楽焼うなぎなど郷土グルメを満喫できます。",
    "revAvg": "4.3",
    "minCharge": "5,450"
  },
  {
    "hotelNo": 67258,
    "hotelName": "黒川温泉　旅館　美里",
    "hotelKanaName": "くろかわおんせん　りょかん　みさと",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D67258",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D67258%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D67258",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D67258",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/67258/67258.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/67258.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/67258/67258_wa.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/67258/67258map.gif",
    "reviewCount": 447,
    "reviewAverage": 4.62,
    "userReview": "宿泊者限定の内湯は落ち着けて良かった外湯巡りが出来る温泉地なので、人の出入りが当たり前にある旅館なのですが、宿泊者限定の内湯があるのは落ち着けて良かったですクチコミの詳細はこちらから　http…",
    "hotelMinCharge": 11000,
    "address1": "熊本県",
    "address2": "阿蘇郡南小国町満願寺6690",
    "telephoneNo": "0967-44-0331",
    "access": "阿蘇駅から車で約４０分／九州横断バスにて約１時間",
    "parkingInformation": "有り　１３台　無料　予約不要",
    "nearestStation": "阿蘇",
    "hotelSpecial": "黒川唯一の時間によって色が変わる不思議な硫黄泉、露天風呂・内湯・家族湯にてご堪能ください♪",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D67258",
    "label": "熊本県美里町ふるさと納税・緑川水系に架かる日本屈指の単一アーチ石橋「霊台橋」熊本ステイ",
    "themeTitle": "熊本県美里町・南小国町ふるさと納税：霊台橋ドライブの疲れを癒やす名湯・川のせせらぎ「黒川温泉 旅館 美里」",
    "themeDesc": "熊本県が誇る石橋文化（霊台橋や通潤橋）巡りドライブの拠点に最適な黒川温泉の中心に佇む名旅館。時間によって硫黄成分で湯の色が変化する神秘的な自家源泉の露天風呂と、熊本県産あか牛や肥後馬刺し会席を贅沢に味わえます。",
    "revAvg": "4.6",
    "minCharge": "11,000"
  }
];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* パンくずリスト */}
      <nav className="bg-white border-b border-slate-200 py-3 px-4 text-xs text-slate-500">
        <div className="max-w-5xl mx-auto flex items-center space-x-2">
          <Link href="/" className="hover:text-emerald-600 transition">ホーム</Link>
          <span>&gt;</span>
          <span className="text-slate-700 font-medium">日本三大眼鏡橋＆石造アーチの美・水辺の名宿×ふるさと納税ガイド</span>
        </div>
      </nav>

      {/* ヒーローヘッダー */}
      <header className="relative bg-gradient-to-br from-emerald-950 via-slate-900 to-teal-950 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-block bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-semibold px-3 py-1 rounded-full mb-2">
            日本三大石橋・土木遺産特集
          </div>
          <h1 className="text-2xl md:text-4xl font-bold leading-tight tracking-tight">
            日本三大眼鏡橋＆石造アーチの美・水辺の名宿×ふるさと納税ガイド
          </h1>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-3xl mx-auto pt-2">
            西洋や中国の架橋技術を取り入れ、自然の猛威に耐えるべく匠の技で組み上げられた「日本三大眼鏡橋・石橋」――寛永11年に架設され水面に映る影が美しい二つの円を描く日本最古のアーチ式石橋・長崎の「中島川・長崎眼鏡橋」、諫早公園の池に優雅な姿をとどめ国の重要文化財に指定された雄大な石造二連アーチ・長崎の「諫早眼鏡橋」、そして熊本の緑川水系に架かり江戸時代の単一アーチ石橋として日本一の径間を誇る熊本の「美里・霊台橋」。石畳の川沿いを散策し、ハートストーンを探し、土地の銘菓や新鮮魚介を堪能する特別な旅を楽天ふるさと納税でお楽しみください。
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
            水面に映る完全なる円。石工の魂が宿る三大眼鏡橋・アーチ石橋を巡る
          </h2>
          <p className="text-slate-600 leading-relaxed text-sm md:text-base">
            西洋や中国の架橋技術を取り入れ、自然の猛威に耐えるべく匠の技で組み上げられた「日本三大眼鏡橋・石橋」――寛永11年に架設され水面に映る影が美しい二つの円を描く日本最古のアーチ式石橋・長崎の「中島川・長崎眼鏡橋」、諫早公園の池に優雅な姿をとどめ国の重要文化財に指定された雄大な石造二連アーチ・長崎の「諫早眼鏡橋」、そして熊本の緑川水系に架かり江戸時代の単一アーチ石橋として日本一の径間を誇る熊本の「美里・霊台橋」。石畳の川沿いを散策し、ハートストーンを探し、土地の銘菓や新鮮魚介を堪能する特別な旅を楽天ふるさと納税でお楽しみください。
          </p>
        </section>

        {/* メリット3選 */}
        <section className="space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
              ふるさと納税×日本三大石橋土木遺産 3つのメリット
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
                  夕暮れやライトアップで浮かび上がる石造アーチ！水面に映る幻想的な眼鏡模様を撮影
                </h3>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                  川面に映る完璧な円形や、石垣の歴史的風情を時間を気にせずゆったり鑑賞。
                </p>
              </div>
            </div>
            <div key="1" className="bg-white rounded-xl p-6 shadow-sm border border-slate-200/80 flex flex-col justify-between hover:border-emerald-300 transition duration-200">
              <div className="space-y-3">
                <span className="inline-block w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 font-bold text-center leading-8 text-sm">
                  02
                </span>
                <h3 className="font-bold text-base text-slate-900 leading-snug">
                  長崎ちゃんぽん・卓袱料理・諫早名物うなぎ蒲焼、熊本の馬刺しやあか牛グルメ
                </h3>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                  街道と川運が交わる歴史ある宿場・港町で受け継がれてきた伝統の名物料理を味わい尽くす。
                </p>
              </div>
            </div>
            <div key="2" className="bg-white rounded-xl p-6 shadow-sm border border-slate-200/80 flex flex-col justify-between hover:border-emerald-300 transition duration-200">
              <div className="space-y-3">
                <span className="inline-block w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 font-bold text-center leading-8 text-sm">
                  03
                </span>
                <h3 className="font-bold text-base text-slate-900 leading-snug">
                  楽天ふるさと納税宿泊クーポンで異国情緒あふれるホテルや名湯温泉宿をお得に予約
                </h3>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                  歴史土木散策やドライブ旅行でも、寄付金額に応じた最大30%オフの即時割引クーポンでスマートにお得ステイ。
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
            
            <Link href="/furusato-tax-three-great-bridges-history-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三大名橋＆歴史を刻む名構造物ステイ×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                日本橋・錦帯橋・眼鏡橋。
              </p>
            </Link>
            <Link href="/furusato-tax-three-great-unusual-bridges-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三大奇橋＆秘境に架かる名橋宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                猿橋・祖谷かずら橋・錦帯橋。
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
