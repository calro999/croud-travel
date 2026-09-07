import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '日本三大美林清流渓谷＆エメラルドグリーンの激流と原生林リトリート温泉宿×ふるさと納税完全ガイド【2026年最新】奥入瀬・抱返り・阿寺渓谷',
  description: '苔むす岩とエメラルドブルーの奇跡！青森十和田「奥入瀬渓流」千変万化の滝と星野リゾート奥入瀬渓流ホテル、秋田角館「抱返り渓谷」東北の耶馬渓と称される原生林・川口温泉奥羽山荘、長野木曽路「阿寺渓谷・木曽川」息をのむ透明度の阿寺ブルーとTAOYA木曽路。日本三大美林清流渓谷のマイナスイオンを楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
  keywords: '日本三大美林渓流・清流絶景特集, 楽天ふるさと納税, 温泉宿, ふるさと納税 旅行, 高級旅館, ホテル予約, 2026年旅行',
  openGraph: {
    title: '日本三大美林清流渓谷＆エメラルドグリーンの激流と原生林リトリート温泉宿×ふるさと納税完全ガイド【2026年最新】奥入瀬・抱返り・阿寺渓谷',
    description: '苔むす岩とエメラルドブルーの奇跡！青森十和田「奥入瀬渓流」千変万化の滝と星野リゾート奥入瀬渓流ホテル、秋田角館「抱返り渓谷」東北の耶馬渓と称される原生林・川口温泉奥羽山荘、長野木曽路「阿寺渓谷・木曽川」息をのむ透明度の阿寺ブルーとTAOYA木曽路。日本三大美林清流渓谷のマイナスイオンを楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    type: 'article',
    url: 'https://croud-travel.pages.dev/furusato-tax-three-great-clear-stream-valleys-stay',
    siteName: 'トラベルポータル',
  },
};

export default function Page() {
  const officialAffUrl = 'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F';

  const hotels = [
  {
    "hotelNo": 40434,
    "hotelName": "奥入瀬渓流ホテル　ｂｙ　星野リゾート",
    "hotelKanaName": "おいらせけいりゅう　ばい　ほしのりぞーと",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D40434",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D40434%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D40434",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D40434",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/40434/40434.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/40434.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/40434/40434_fn.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/40434/40434map.gif",
    "reviewCount": 1267,
    "reviewAverage": 4.36,
    "userReview": "期待していた分、全体的に普通で残念な印象初めて星野リゾートのホテルを利用するので楽しみにしていましたが、案外普通だったなという印象です。大浴場も特にこれといった特色もなく、1日目は露天風呂に枯…　 ",
    "hotelMinCharge": 27500,
    "address1": "青森県",
    "address2": "十和田市奥瀬栃久保231",
    "telephoneNo": "050-3134-8094",
    "access": "東北新幹線　八戸駅／無料送迎バス（要予約）、青森駅／有料送迎バス（要予約）、ＪＲバス　十和田湖行き、焼山下車",
    "parkingInformation": "有り　１００台　無料　先着順",
    "nearestStation": "八戸",
    "hotelSpecial": "日本屈指の景勝地奥入瀬渓流。その畔に佇むリゾートホテルで大自然が演出する非日常空間をご堪能下さい",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D40434",
    "featureKey": "valley_oirase",
    "featureLabel": "青森県十和田市ふるさと納税・苔むす岩と千変万化の渓流美「奥入瀬渓流」唯一の渓流沿いリゾート星野リゾート奥入瀬渓流ホテル",
    "themeTitle": "青森県十和田市ふるさと納税：奥入瀬渓流沿いに建つ唯一のリゾート「奥入瀬渓流ホテル by 星野リゾート」",
    "themeDesc": "奥入瀬渓流のほとりに佇む極上のネイチャーリゾート。岡本太郎作の巨大暖炉が迎えるロビー、八甲田山から湧き出る温泉露天風呂「渓流露天風呂」で渓流の音に耳を傾け、青森のりんごや郷土食材をふんだんに取り入れたフレンチビュッフェを堪能できます。",
    "revAvg": "4.4",
    "minCharge": "27,500"
  },
  {
    "hotelNo": 181765,
    "hotelName": "川口温泉　奥羽山荘",
    "hotelKanaName": "かわぐちおんせん　おううさんそう",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D181765",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D181765%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D181765",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D181765",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/181765/181765.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/181765.jpg",
    "roomImageUrl": "",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/181765/181765map.gif",
    "reviewCount": 133,
    "reviewAverage": 3.89,
    "userReview": "世界一の地ビールを堪能、オーナーとの会話も楽しい6種類の準備料、全部堪能しました。そのうち3種類は世界一を取った地ビールだそうです。気に入る1杯は見つかると思いますここのオーナーと話をしながら少し…　 ",
    "hotelMinCharge": 5750,
    "address1": "秋田県",
    "address2": "大仙市太田町太田字惣行大谷地10-5",
    "telephoneNo": "0187-88-1717",
    "access": "秋田空港より車で約60分、大曲I.Cより車で約30分、大曲駅より車で約25分、角館駅より車で約20分",
    "parkingInformation": "有り　150台　無料　予約不要",
    "nearestStation": "角館",
    "hotelSpecial": "【2020年リニューアル】旬の郷土料理やドライサウナ、奥羽山脈の伏流水かけ流し水風呂が名物な温泉宿。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D181765",
    "featureKey": "valley_dakigaeri",
    "featureLabel": "秋田県仙北市ふるさと納税・東北の耶馬渓と称されるエメラルドグリーンの激流「抱返り渓谷」みちのく小京都角館ステイ",
    "themeTitle": "秋田県大仙市・仙北市ふるさと納税：抱返り渓谷とみちのく小京都・角館への拠点「川口温泉 奥羽山荘」",
    "themeDesc": "奥羽山脈の山裾、抱返り渓谷や角館武家屋敷へのアクセス至便な温泉宿。豊かな自然に囲まれた天然温泉大浴場で寛ぎ、秋田名物の比内地鶏料理やきりたんぽ鍋、秋田こまちの新米と旬の山菜料理をアットホームな空間で楽しめます。",
    "revAvg": "3.9",
    "minCharge": "5,750"
  },
  {
    "hotelNo": 167241,
    "hotelName": "ＴＡＯＹＡ木曽路",
    "hotelKanaName": "たおやきそじ",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D167241",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D167241%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D167241",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D167241",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/167241/167241.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/167241.jpg",
    "roomImageUrl": "",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/167241/167241map.gif",
    "reviewCount": 900,
    "reviewAverage": 4.4,
    "userReview": "ゆっくりできて夕食バイキングも満足ゆっくりできます。 夕食のバイキングがいいです。季節柄今回は、トマトがなかった?と思います。これ以上ない評価ですが、プラスを言うなら、個人的には、梨やスイカ、…　 ",
    "hotelMinCharge": 19800,
    "address1": "長野県",
    "address2": "木曽郡南木曽町吾妻2278",
    "telephoneNo": "050-3615-3456",
    "access": "南木曽駅よりお車にて約１５分   中津川ＩＣより車で約40分。ナビは道の駅「しずも」を経由地に入れてください。",
    "parkingInformation": "有り",
    "nearestStation": "南木曽",
    "hotelSpecial": "化粧水のような温泉とオールインクルーシブでくつろぎのひと時をお過ごしください。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D167241",
    "featureKey": "valley_adera",
    "featureLabel": "長野県大桑村・木曽町ふるさと納税・エメラルドグリーンの阿寺ブルーと柿其渓谷「木曽谷美林渓谷」天然温泉ステイ",
    "themeTitle": "長野県南木曽町・大桑村ふるさと納税：阿寺渓谷と木曽ヒノキ美林の懐に抱かれる温泉リゾート「TAOYA木曽路」",
    "themeDesc": "エメラルドグリーンの清流・阿寺渓谷の観光拠点となるオールインクルーシブの温泉リゾート。とろみのある美肌の湯を満喫できる庭園露天風呂で森林浴の疲れを癒やし、信州牛や地元の旬菜を取り揃えた豪華バイキングとフリーフローの美酒を心ゆくまで堪能できます。",
    "revAvg": "4.4",
    "minCharge": "19,800"
  }
];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* パンくずリスト */}
      <nav className="bg-white border-b border-slate-200 py-3 px-4 text-xs text-slate-500">
        <div className="max-w-5xl mx-auto flex items-center space-x-2">
          <Link href="/" className="hover:text-emerald-600 transition">ホーム</Link>
          <span>&gt;</span>
          <span className="text-slate-700 font-medium">日本三大美林清流渓谷＆エメラルドブルー絶景宿×ふるさと納税ガイド</span>
        </div>
      </nav>

      {/* ヒーローヘッダー */}
      <header className="relative bg-gradient-to-br from-emerald-950 via-slate-900 to-teal-950 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-block bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-semibold px-3 py-1 rounded-full mb-2">
            日本三大美林渓流・清流絶景特集
          </div>
          <h1 className="text-2xl md:text-4xl font-bold leading-tight tracking-tight">
            日本三大美林清流渓谷＆エメラルドブルー絶景宿×ふるさと納税ガイド
          </h1>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-3xl mx-auto pt-2">
            日本を代表する美林と名峰が育み、手つかずの原生美を今に伝える「日本三大美林清流渓谷」――十和田湖から流れ出る14kmの渓流沿いに無数の滝と苔むす奇岩が織りなす青森の「奥入瀬渓流」、玉川の激流が削り出した断崖に青碧の清流が流れ紅葉の名所として知られる秋田角館の「抱返り渓谷」、そして「阿寺ブルー」と称される息をのむほど透明なエメラルドグリーンの水面が木曽ヒノキ美林の谷を流れる長野の「阿寺渓谷（木曽谷）」。渓流沿いの遊歩道を歩き、舞い上がる水煙とマイナスイオンを全身に浴びるひとときは、日々のストレスを根底から洗い流してくれます。渓谷沿いのリゾートホテルや名湯宿で寛ぎ、清流イワナ・青森りんご・秋田比内地鶏・信州牛を味わうリトリート旅を楽天ふるさと納税でお楽しみください。
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
            透き通る阿寺ブルー、苔むす巨岩を縫う白糸の滝。原生林が守る清流の調べ
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>阿寺ブルーの水鏡・奥入瀬の躍動する滝・抱返りの碧い渓谷！究極のマイナスイオン</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                木漏れ日きらめく清流遊歩道の散策や、渓流のせせらぎをBGMにした露天風呂で心身をリセット。
              </p>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>清流天然イワナの塩焼き、青森倉石牛＆奥入瀬シードル、比内地鶏きりたんぽ、信州牛会席</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                名水と深い森のミネラルが育んだ、地域色豊かな山川の幸と銘酒のマリアージュを満喫。
              </p>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>楽天ふるさと納税宿泊クーポンで憧れの渓流リゾートホテルをお得に予約</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                自然散策や秋の紅葉ハイキング旅でも、寄付金額に応じた最大30%オフの即時割引クーポンでスマートにお得ステイ。
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
                        {h.hotelSpecial || '日本三大名水の清冽な雫、日本三大仏の荘厳な歴史美、日本三大松原の白砂青松パノラマ、日本三大美林清流渓谷のエメラルドブルーを巡る極上の拠点。四季折々の美食と名湯でお寛ぎください。'}
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
            あわせて読みたい日本の名水・古都仏閣・名松原特集
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            
            <Link href="/furusato-tax-three-great-beautiful-forests-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三大美林＆森林浴・天然木アロマ温泉宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                青森ヒバ・秋田スギ・木曽ヒノキ。
              </p>
            </Link>
            
            <Link href="/furusato-tax-three-great-gorges-scenery-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三大渓谷美＆清流大自然絶景宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                清津峡・黒部峡谷・大杉谷。
              </p>
            </Link>
            
            <Link href="/furusato-tax-three-great-spring-waters-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三大名水＆湧水水源地・清流酒蔵美食宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                黒部湧水・白州尾白川・南阿蘇白川水源。
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
