import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '日本三大峠＆雲海パノラマ・歴史街道の難所と高原温泉宿×ふるさと納税完全ガイド【2026年最新】碓氷峠・箱根峠・天城峠',
  description: '山脈を越える風と絶景パノラマを体感する日本の名峠ドライブ！長野・群馬「碓氷峠」めがね橋の煉瓦アーチと旧軽井沢ホテル音羽ノ森、神奈川・静岡「箱根峠」東海道随一の天下の険・芦ノ湖富士山ビュー龍宮殿、静岡伊豆「天城峠」川端康成伊豆の踊子の天城隧道と伊豆長岡温泉ホテル天坊。四季折々の峠道ドライブと高原フレンチ、名湯露天風呂を楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
  keywords: '日本三大峠・高原ドライブ特集, 楽天ふるさと納税, 温泉宿, ふるさと納税 旅行, 高級旅館, ホテル予約, 2026年旅行',
  openGraph: {
    title: '日本三大峠＆雲海パノラマ・歴史街道の難所と高原温泉宿×ふるさと納税完全ガイド【2026年最新】碓氷峠・箱根峠・天城峠',
    description: '山脈を越える風と絶景パノラマを体感する日本の名峠ドライブ！長野・群馬「碓氷峠」めがね橋の煉瓦アーチと旧軽井沢ホテル音羽ノ森、神奈川・静岡「箱根峠」東海道随一の天下の険・芦ノ湖富士山ビュー龍宮殿、静岡伊豆「天城峠」川端康成伊豆の踊子の天城隧道と伊豆長岡温泉ホテル天坊。四季折々の峠道ドライブと高原フレンチ、名湯露天風呂を楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    type: 'article',
    url: 'https://croud-travel.pages.dev/furusato-tax-three-great-scenic-passes-panorama-stay',
    siteName: 'トラベルポータル',
  },
};

export default function Page() {
  const officialAffUrl = 'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F';

  const hotels = [
  {
    "hotelNo": 50619,
    "hotelName": "旧軽井沢　ホテル音羽ノ森",
    "hotelKanaName": "きゅうかるいざわ　ほてるおとわのもり",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D50619",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D50619%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D50619",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D50619",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/50619/50619.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/50619.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/50619/50619kya.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/50619/50619map.gif",
    "reviewCount": 387,
    "reviewAverage": 4.56,
    "userReview": "静かで落ち着いた環境がとても良い静かでたいへんよい。クチコミの詳細はこちらから　https://review.travel.rakuten.co.jp/hotel/voice/50619?…",
    "hotelMinCharge": 11781,
    "address1": "長野県",
    "address2": "北佐久郡軽井沢町軽井沢1323-980",
    "telephoneNo": "0267-42-7711",
    "access": "鉄道：軽井沢駅北口タクシー約3分、徒歩約１２分。車：東京方面、碓氷軽井沢ＩＣ約２０分。長野・愛知方面、小諸ＩＣ約３０分",
    "parkingInformation": "有り無料40台　予約不要（先着順）チェックイン前・チェックアウト後の無料利用可。",
    "nearestStation": "軽井沢",
    "hotelSpecial": "軽井沢駅・旧軽井沢銀座まで徒歩約13分。自然豊かな旧軽井沢の景観と伝統を兼ね備えた隠れ家ホテル。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D50619",
    "label": "長野県軽井沢町・群馬県安中市ふるさと納税・めがね橋と信越国境の雲海「碓氷峠」旧軽井沢ホテル音羽ノ森",
    "themeTitle": "長野県軽井沢町ふるさと納税：碓氷峠の自然に抱かれクラシカルな静寂が漂う欧風ホテル「旧軽井沢 ホテル音羽ノ森」",
    "themeDesc": "旧軽井沢銀座や碓氷峠見晴台へのアクセスが良好で、三笠通り沿いの閑静な別荘地に佇むホテル。旧帝国ホテルを手がけた建築様式を受け継ぐ重厚な館内で、信州の旬野菜や厳選牛を使った本格フレンチコースを満喫できます。",
    "revAvg": "4.6",
    "minCharge": "11,781"
  },
  {
    "hotelNo": 54621,
    "hotelName": "龍宮殿（プリンスホテルズ＆リゾーツ）",
    "hotelKanaName": "りゅうぐうでん",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D54621",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D54621%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D54621",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D54621",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/54621/54621.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/54621.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/54621/54621_room.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/54621/54621map.gif",
    "reviewCount": 285,
    "reviewAverage": 4.4,
    "userReview": "",
    "hotelMinCharge": 15000,
    "address1": "神奈川県",
    "address2": "足柄下郡箱根町元箱根139",
    "telephoneNo": "0460-83-1121",
    "access": "ＪＲ東海道線小田原駅より無料送迎バス(予約制)にて40分、小田急箱根湯本駅よりタクシーで30分",
    "parkingInformation": "38台（ご宿泊者および日帰りご利用客専用）、無料",
    "nearestStation": "箱根湯本",
    "hotelSpecial": "富士山と芦ノ湖の絶景を満喫。箱根の雄大な自然を感じながらくつろぎのひとときをお過ごしください。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D54621",
    "label": "神奈川県箱根町ふるさと納税・東海道随一の難所・富士山と芦ノ湖を望む「箱根峠」箱根・芦ノ湖 はなをり",
    "themeTitle": "神奈川県箱根町ふるさと納税：箱根峠の裾野・芦ノ湖と富士山を一望する蛸川温泉「龍宮殿（プリンスホテルズ＆リゾーツ）」",
    "themeDesc": "宇治平等院鳳凰堂を模した国登録有形文化財の壮麗な建物が目を引く名門旅館。箱根峠越えドライブの疲れを癒やす蛸川温泉の絶景露天風呂からは、芦ノ湖越しに雄大な富士山を望み、四季折々の京風会席料理を楽しめます。",
    "revAvg": "4.4",
    "minCharge": "15,000"
  },
  {
    "hotelNo": 67097,
    "hotelName": "伊豆長岡温泉　ホテル天坊",
    "hotelKanaName": "いずながおかおんせん　ほてるてんぼう",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D67097",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D67097%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D67097",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D67097",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/67097/67097.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/67097.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/67097/67097_wa.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/67097/67097map.gif",
    "reviewCount": 699,
    "reviewAverage": 4.43,
    "userReview": "館内で食べた赤ラーメンが美味しかったお陰様でまったりのほほんと過ごす事が出来ました。夕食をつけないプランにしたので、食事どうしようかな～と考えながら館内のご案内を見ていたらホテル内にある『花わ…",
    "hotelMinCharge": 11000,
    "address1": "静岡県",
    "address2": "伊豆の国市長岡431-1",
    "telephoneNo": "055-947-1919",
    "access": "伊豆箱根鉄道　伊豆長岡駅よりバスで１０分（別所下車）",
    "parkingInformation": "有り　８０台　無料　予約不要",
    "nearestStation": "伊豆長岡",
    "hotelSpecial": "富士山を望む高台に佇む落ち着いた宿。明るく開放的な館内や本格的なアロマエステは女性に大人気。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D67097",
    "label": "静岡県伊豆市ふるさと納税・川端康成伊豆の踊子の舞台・浄蓮の滝と原生林「天城峠」伊豆長岡温泉ホテル天坊",
    "themeTitle": "静岡県伊豆の国市ふるさと納税：天城峠越えドライブの拠点・多彩な湯舟が自慢の名湯「伊豆長岡温泉 ホテル天坊」",
    "themeDesc": "天城峠や浄蓮の滝への伊豆半島縦断ドライブの拠点に最適な名湯宿。富士山を望む展望風呂や野天風呂など多彩な湯巡りを満喫できるほか、駿河湾の新鮮な地魚や伊豆名物の金目鯛、ブランド牛会席ディナーが人気です。",
    "revAvg": "4.4",
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
          <span className="text-slate-700 font-medium">日本三大峠＆雲海パノラマ・歴史街道の絶景名宿×ふるさと納税ガイド</span>
        </div>
      </nav>

      {/* ヒーローヘッダー */}
      <header className="relative bg-gradient-to-br from-emerald-950 via-slate-900 to-teal-950 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-block bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-semibold px-3 py-1 rounded-full mb-2">
            日本三大峠・高原ドライブ特集
          </div>
          <h1 className="text-2xl md:text-4xl font-bold leading-tight tracking-tight">
            日本三大峠＆雲海パノラマ・歴史街道の絶景名宿×ふるさと納税ガイド
          </h1>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-3xl mx-auto pt-2">
            険しい山々を穿ち、国と国、文化と文化を繋いできた歴史ある峠道「日本三大峠・名峠」――アプト式鉄道の遺構・めがね橋や信越国境の雲海パノラマが美しい長野・群馬の「碓氷峠」、箱根八里で「天下の険」と歌われ富士山と芦ノ湖を眼下に望む東海道最大の難所・神奈川の「箱根峠」、そして深い原生林と浄蓮の滝、川端康成の名作『伊豆の踊子』の舞台として知られる伊豆半島の分水嶺・静岡の「天城峠」。四季の紅葉や深緑に彩られたワインディングロードを抜け、静かな高原リゾートや名湯で旅の疲れを癒やす贅沢なひとときを楽天ふるさと納税でお楽しみください。
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
            雲を見下ろす峠の頂き。旅人たちの汗と歴史が刻まれた絶景ルートへ
          </h2>
          <p className="text-slate-600 leading-relaxed text-sm md:text-base">
            険しい山々を穿ち、国と国、文化と文化を繋いできた歴史ある峠道「日本三大峠・名峠」――アプト式鉄道の遺構・めがね橋や信越国境の雲海パノラマが美しい長野・群馬の「碓氷峠」、箱根八里で「天下の険」と歌われ富士山と芦ノ湖を眼下に望む東海道最大の難所・神奈川の「箱根峠」、そして深い原生林と浄蓮の滝、川端康成の名作『伊豆の踊子』の舞台として知られる伊豆半島の分水嶺・静岡の「天城峠」。四季の紅葉や深緑に彩られたワインディングロードを抜け、静かな高原リゾートや名湯で旅の疲れを癒やす贅沢なひとときを楽天ふるさと納税でお楽しみください。
          </p>
        </section>

        {/* メリット3選 */}
        <section className="space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
              ふるさと納税×日本三大峠高原ドライブ 3つのメリット
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
                  朝夕の澄み切った時間帯に峠の展望スポットへ！霧や雲海に包まれる幻想的なパノラマ
                </h3>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                  峠の麓や高原のホテルに泊まるからこそ、混雑知らずのワインディングロードドライブを満喫。
                </p>
              </div>
            </div>
            <div key="1" className="bg-white rounded-xl p-6 shadow-sm border border-slate-200/80 flex flex-col justify-between hover:border-emerald-300 transition duration-200">
              <div className="space-y-3">
                <span className="inline-block w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 font-bold text-center leading-8 text-sm">
                  02
                </span>
                <h3 className="font-bold text-base text-slate-900 leading-snug">
                  信州牛や高原野菜フレンチ、箱根山麓豚や相模湾鮮魚、伊豆の金目鯛煮付けや本わさび会席
                </h3>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                  峠を挟んだ地域それぞれの旬の山海の恵みを贅沢に取り入れたディナーに舌鼓。
                </p>
              </div>
            </div>
            <div key="2" className="bg-white rounded-xl p-6 shadow-sm border border-slate-200/80 flex flex-col justify-between hover:border-emerald-300 transition duration-200">
              <div className="space-y-3">
                <span className="inline-block w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 font-bold text-center leading-8 text-sm">
                  03
                </span>
                <h3 className="font-bold text-base text-slate-900 leading-snug">
                  楽天ふるさと納税宿泊クーポンでクラシックホテルや絶景温泉旅館をお得に予約
                </h3>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                  愛車でのツーリングや大人の高原バカンスでも、寄付金額に応じた最大30%オフの即時割引クーポンでスマートにお得ステイ。
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
            あわせて読みたい日本の名所・伝統文化と絶景宿特集
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
            <Link href="/furusato-tax-three-great-cable-cars-ropeway-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三大山岳ロープウェイ＆雲上パノラマ名宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                千畳敷・立山・箱根駒ヶ岳。
              </p>
            </Link>
            <Link href="/furusato-tax-three-great-gorges-scenery-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三大名峡＆奇岩絶壁の峡谷リゾート×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                瀞峡・大杉谷・黒部峡谷。
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
