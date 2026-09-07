import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '日本三大名鐘＆心の琴線に響く梵鐘・悠久の寺町宿×ふるさと納税完全ガイド【2026年最新】知恩院・平等院・三井寺',
  description: '澄んだ音色と歴史の重みを感じる日本三大名鐘巡り！京都東山「知恩院・大鐘楼」大晦日の除夜の鐘で知られる日本最大級の鐘と知恩院和順会館、京都宇治「平等院」天人の姿が浮彫にされた国宝名鐘と花やしき浮舟園、滋賀大津「三井寺」弁慶の引き摺り鐘と近江八景の晩鐘・びわ湖大津プリンスホテル。心洗われる鐘の余韻と古都の風情を楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
  keywords: '日本三大名鐘・古寺祈り特集, 楽天ふるさと納税, 温泉宿, ふるさと納税 旅行, 高級旅館, ホテル予約, 2026年旅行',
  openGraph: {
    title: '日本三大名鐘＆心の琴線に響く梵鐘・悠久の寺町宿×ふるさと納税完全ガイド【2026年最新】知恩院・平等院・三井寺',
    description: '澄んだ音色と歴史の重みを感じる日本三大名鐘巡り！京都東山「知恩院・大鐘楼」大晦日の除夜の鐘で知られる日本最大級の鐘と知恩院和順会館、京都宇治「平等院」天人の姿が浮彫にされた国宝名鐘と花やしき浮舟園、滋賀大津「三井寺」弁慶の引き摺り鐘と近江八景の晩鐘・びわ湖大津プリンスホテル。心洗われる鐘の余韻と古都の風情を楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    type: 'article',
    url: 'https://croud-travel.pages.dev/furusato-tax-three-great-bell-towers-historic-stay',
    siteName: 'トラベルポータル',
  },
};

export default function Page() {
  const officialAffUrl = 'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F';

  const hotels = [
  {
    "hotelNo": 108920,
    "hotelName": "知恩院　和順会館",
    "hotelKanaName": "ちおんいん　わじゅんかいかん",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D108920",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D108920%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D108920",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D108920",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/108920/108920.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/108920.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/108920/108920_kya.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/108920/108920map.gif",
    "reviewCount": 327,
    "reviewAverage": 4.61,
    "userReview": "駐車場無料と円山公園の景色、朝風呂も最高駐車場が無料なのと出し入れ自由なのは助かりました。ご飯もおいしかったです。部屋から円山公園が見えて景色も最高でした。大浴場も朝入れるので良かったです。…",
    "hotelMinCharge": 8800,
    "address1": "京都府",
    "address2": "京都市東山区林下町400-2",
    "telephoneNo": "075-205-5013",
    "access": "市バス206系統　知恩院前下車、徒歩５分",
    "parkingInformation": "タイムズ総本山知恩院光玄院跡(東山区林下町413)をご利用ください。宿泊者は駐車無料券をご用意します",
    "nearestStation": "",
    "hotelSpecial": "喧騒の日々から離れ、 ゆったりとした時を過ごし、お念仏で心を整える 知恩院らしいおもてなし",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D108920",
    "label": "京都府京都市ふるさと納税・七十七人がかりで突く日本最大級の大鐘「知恩院・大鐘楼」知恩院和順会館",
    "themeTitle": "京都府京都市ふるさと納税：知恩院の境内地に建ち大鐘楼や朝のお勤め体験ができる「知恩院 和順会館」",
    "themeDesc": "知恩院の三門を望む清浄な境内に位置し、一般の宿泊客も快適に利用できる本格的な宿坊ホテル。毎朝の本堂でのお勤め体験や大鐘楼の拝観に最適で、大浴場で身体を温め、伝統の京会席や精進料理で心身を整える穏やかな時間を過ごせます。",
    "revAvg": "4.6",
    "minCharge": "8,800"
  },
  {
    "hotelNo": 73944,
    "hotelName": "花やしき浮舟園",
    "hotelKanaName": "はなやしきうきふねえん",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D73944",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D73944%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D73944",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D73944",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/73944/73944.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/73944.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/73944/73944_kya.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/73944/73944map.gif",
    "reviewCount": 298,
    "reviewAverage": 4.06,
    "userReview": "宇治川沿いの好立地、価格維持がありがたい宇治川のすぐ側という立地が素晴らしいです。設備の古さは否めませんが、ほぼ問題ありませんでした。というか新しくなって高くなるよりも、このまま今の値段の方があり…",
    "hotelMinCharge": 0,
    "address1": "京都府",
    "address2": "宇治市宇治塔川20",
    "telephoneNo": "0774-21-2126",
    "access": "ＪＲ・京阪　宇治駅よりお車で約5分",
    "parkingInformation": "ホテル前にございます。無料です！（予約不要）",
    "nearestStation": "宇治（京都）",
    "hotelSpecial": "全室から宇治川を一望、四季折々京都宇治の絶景を楽しむ旅館。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D73944",
    "label": "京都府宇治市ふるさと納税・美しい天人レリーフが刻まれた国宝名鐘「平等院の鐘」花やしき浮舟園",
    "themeTitle": "京都府宇治市ふるさと納税：宇治川の清流と平等院鳳凰堂・国宝の鐘を間近に感じる「花やしき浮舟園」",
    "themeDesc": "宇治川のほとりに佇み、すべての客室から川のせせらぎを望む老舗料理旅館。平等院鳳凰堂まで徒歩すぐの距離にあり、優美な名鐘の姿を鑑賞した後は、宇治茶を活かした創作茶料理や旬の京会席ディナーを展望大浴場と共に満喫できます。",
    "revAvg": "4.1",
    "minCharge": "8,000"
  },
  {
    "hotelNo": 16068,
    "hotelName": "びわ湖大津プリンスホテル",
    "hotelKanaName": "びわこおおつぷりんすほてる",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D16068",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D16068%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D16068",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D16068",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/16068/16068.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/16068.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/16068/16068_w.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/16068/16068map.gif",
    "reviewCount": 5029,
    "reviewAverage": 4.42,
    "userReview": "琵琶湖一望でコスパ最高、また利用したい 琵琶湖が一望できるロケーションで、琵琶湖周辺に泊まるならお薦めのホテルです。食事なし、17時以降チェックインのプランでしたが、クーポン使用で、一人5,600…",
    "hotelMinCharge": 5000,
    "address1": "滋賀県",
    "address2": "大津市におの浜4-7-7",
    "telephoneNo": "077-521-1111",
    "access": "ＪＲ東海道本線（琵琶湖線）大津駅から無料シャトルバスで10分／名神高速道路・大津ＩＣより3.7ｋm（平常時10分）",
    "parkingInformation": "約500台。（有料・1泊500円）満車でご利用いただけない場合がございます。",
    "nearestStation": "大津",
    "hotelSpecial": "ＪＲ京都駅から2駅10分のリゾート　38階建て、高層階のレストラン、全客室からレイクビューを満喫",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D16068",
    "label": "滋賀県大津市ふるさと納税・弁慶の引き摺り鐘と近江八景の晩鐘「三井寺の鐘」びわ湖大津プリンスホテル",
    "themeTitle": "滋賀県大津市ふるさと納税：三井寺の晩鐘響く大津の湖畔・全室レイクビュー「びわ湖大津プリンスホテル」",
    "themeDesc": "びわ湖の湖畔にそびえ立つ丹下健三氏設計の美しい半円形高層ホテル。三井寺（園城寺）へのアクセスも良好で、客室の大きな窓から琵琶湖の大パノラマを眺めながら、滋賀が誇る日本三大和牛・近江牛のステーキや多彩なブッフェを堪能できます。",
    "revAvg": "4.4",
    "minCharge": "5,000"
  }
];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* パンくずリスト */}
      <nav className="bg-white border-b border-slate-200 py-3 px-4 text-xs text-slate-500">
        <div className="max-w-5xl mx-auto flex items-center space-x-2">
          <Link href="/" className="hover:text-emerald-600 transition">ホーム</Link>
          <span>&gt;</span>
          <span className="text-slate-700 font-medium">日本三大名鐘＆悠久の古鐘・寺町癒やしの宿×ふるさと納税ガイド</span>
        </div>
      </nav>

      {/* ヒーローヘッダー */}
      <header className="relative bg-gradient-to-br from-emerald-950 via-slate-900 to-teal-950 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-block bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-semibold px-3 py-1 rounded-full mb-2">
            日本三大名鐘・古寺祈り特集
          </div>
          <h1 className="text-2xl md:text-4xl font-bold leading-tight tracking-tight">
            日本三大名鐘＆悠久の古鐘・寺町癒やしの宿×ふるさと納税ガイド
          </h1>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-3xl mx-auto pt-2">
            古来より「姿の平等院」「銘の神護寺（知恩院）」「音の三井寺」と称えられ、日本の仏教文化と鋳造工芸の最高峰として尊ばれてきた「日本三大名鐘」――重量約70トン・僧侶数十名が力を合わせて打ち鳴らす除夜の鐘の壮観さで知られる京都の「知恩院」、天人や楽器が舞う優美な浮彫彫刻が施され国宝に指定されている京都宇治の「平等院鳳凰堂」、そして弁慶の引き摺り伝説や近江八景「三井の晩鐘」として琵琶湖に美しく響く滋賀の「園城寺（三井寺）」。歴史ある寺町を歩き、心静かに祈りと鐘の音に触れ、贅沢な京料理や琵琶湖の恵みを味わう旅を楽天ふるさと納税でお楽しみください。
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
            深山幽谷に響き渡る重厚な余韻。「姿」「銘」「音」に称えられる三大名鐘の里へ
          </h2>
          <p className="text-slate-600 leading-relaxed text-sm md:text-base">
            古来より「姿の平等院」「銘の神護寺（知恩院）」「音の三井寺」と称えられ、日本の仏教文化と鋳造工芸の最高峰として尊ばれてきた「日本三大名鐘」――重量約70トン・僧侶数十名が力を合わせて打ち鳴らす除夜の鐘の壮観さで知られる京都の「知恩院」、天人や楽器が舞う優美な浮彫彫刻が施され国宝に指定されている京都宇治の「平等院鳳凰堂」、そして弁慶の引き摺り伝説や近江八景「三井の晩鐘」として琵琶湖に美しく響く滋賀の「園城寺（三井寺）」。歴史ある寺町を歩き、心静かに祈りと鐘の音に触れ、贅沢な京料理や琵琶湖の恵みを味わう旅を楽天ふるさと納税でお楽しみください。
          </p>
        </section>

        {/* メリット3選 */}
        <section className="space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
              ふるさと納税×日本三大名鐘古寺祈り 3つのメリット
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
                  早朝の静かな勤行や鐘の音を体感！寺院至近の宿だからこそ叶う心静かなヒーリングステイ
                </h3>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                  観光客で賑わう前の清らかな空気の中で寺院境内を散策し、悠久の歴史に思いを馳せる非日常の時間。
                </p>
              </div>
            </div>
            <div key="1" className="bg-white rounded-xl p-6 shadow-sm border border-slate-200/80 flex flex-col justify-between hover:border-emerald-300 transition duration-200">
              <div className="space-y-3">
                <span className="inline-block w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 font-bold text-center leading-8 text-sm">
                  02
                </span>
                <h3 className="font-bold text-base text-slate-900 leading-snug">
                  京の伝統精進料理・宇治抹茶会席、近江牛や琵琶湖の湖魚料理など郷土の美食
                </h3>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                  古都と湖国が育んできた、出汁の旨味と四季の旬が際立つ伝統の料理をゆったり堪能。
                </p>
              </div>
            </div>
            <div key="2" className="bg-white rounded-xl p-6 shadow-sm border border-slate-200/80 flex flex-col justify-between hover:border-emerald-300 transition duration-200">
              <div className="space-y-3">
                <span className="inline-block w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 font-bold text-center leading-8 text-sm">
                  03
                </span>
                <h3 className="font-bold text-base text-slate-900 leading-snug">
                  楽天ふるさと納税宿泊クーポンで宿坊ホテルや湖畔リゾートをお得に予約
                </h3>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                  文化財探訪や寺社巡りの旅でも、寄付金額に応じた最大30%オフの即時割引クーポンでスマートにお得ステイ。
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
            あわせて読みたい日本の名所・絶景ホテル特集
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            
            <Link href="/furusato-tax-three-great-castles-historic-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三大名城＆不落の巨城を望む城見ステイ×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                熊本・名古屋・大阪。
              </p>
            </Link>
            <Link href="/furusato-tax-three-great-torii-sacred-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三大鳥居＆神聖なる巨木の門・古都名宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                宮島・奈良・敦賀。
              </p>
            </Link>
            <Link href="/furusato-tax-three-great-tea-plantations-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三大茶＆薫り高い茶畑パノラマ名宿ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                牧之原・宇治・八女。
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
