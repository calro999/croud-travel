import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '日本三大名塔＆国宝五重塔の木造美と悠久の古都歴史宿×ふるさと納税完全ガイド【2026年最新】羽黒山・瑠璃光寺・醍醐寺',
  description: '幾星霜を超えて立ち続ける木造建築の最高峰！山形鶴岡「出羽三山・羽黒山五重塔」樹齢数百年の杉木立に佇む国宝塔と温海温泉萬国屋、山口「瑠璃光寺五重塔」大内文化の粋・桧皮葺き屋根の流麗な名塔と湯田温泉古稀庵、京都伏見「世界遺産・醍醐寺五重塔」京都最古の木造建造物とホテルエミオン京都。日本の美意識が結晶した国宝五重塔と名湯・会席ディナーを楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
  keywords: '日本三大名塔・木造建築美特集, 楽天ふるさと納税, 温泉宿, ふるさと納税 旅行, 高級旅館, ホテル予約, 2026年旅行',
  openGraph: {
    title: '日本三大名塔＆国宝五重塔の木造美と悠久の古都歴史宿×ふるさと納税完全ガイド【2026年最新】羽黒山・瑠璃光寺・醍醐寺',
    description: '幾星霜を超えて立ち続ける木造建築の最高峰！山形鶴岡「出羽三山・羽黒山五重塔」樹齢数百年の杉木立に佇む国宝塔と温海温泉萬国屋、山口「瑠璃光寺五重塔」大内文化の粋・桧皮葺き屋根の流麗な名塔と湯田温泉古稀庵、京都伏見「世界遺産・醍醐寺五重塔」京都最古の木造建造物とホテルエミオン京都。日本の美意識が結晶した国宝五重塔と名湯・会席ディナーを楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    type: 'article',
    url: 'https://croud-travel.pages.dev/furusato-tax-three-great-pagodas-scenic-stay',
    siteName: 'トラベルポータル',
  },
};

export default function Page() {
  const officialAffUrl = 'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F';

  const hotels = [
  {
    "hotelNo": 12577,
    "hotelName": "温海温泉　萬国屋",
    "hotelKanaName": "あつみおんせん　ばんこくや",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D12577",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D12577%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D12577",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D12577",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/12577/12577.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/12577.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/12577/12577_heya.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/12577/12577map.gif",
    "reviewCount": 2640,
    "reviewAverage": 4.58,
    "userReview": "心温まるたくさんのおもてなしに感謝たくさんのおもてなしありがとうございますクチコミの詳細はこちらから　https://review.travel.rakuten.co.jp/hotel/voi…",
    "hotelMinCharge": 11000,
    "address1": "山形県",
    "address2": "鶴岡市湯温海丁1",
    "telephoneNo": "0570-00-8598",
    "access": "日本海東北自動車道 あつみ温泉ICから車5分/ＪＲ羽越本線 あつみ温泉駅からタクシー５分/庄内空港から車40分",
    "parkingInformation": "有り　３００台　無料　先着順",
    "nearestStation": "あつみ温泉",
    "hotelSpecial": "山里のどこか懐かしい風情とおもてなしの心に癒される老舗旅館。所々に飾られた生花が心を和ませてくれます",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D12577",
    "label": "山形県鶴岡市ふるさと納税・杉木立の中に佇む国宝美「出羽三山・羽黒山五重塔」温海温泉萬国屋",
    "themeTitle": "山形県鶴岡市ふるさと納税：羽黒山五重塔参拝の拠点・創業三百余年の名湯宿「温海温泉 萬国屋」",
    "themeDesc": "庄内平野の南端、清流あつみ川のほとりに佇む老舗温泉旅館。羽黒山五重塔の厳かな杉並木参道を散策した後は、自家源泉の豊富な湯をたたえる庭園露天風呂で寛ぎ、日本海の新鮮な海の幸や山形牛を取り入れた名物会席を味わえます。",
    "revAvg": "4.6",
    "minCharge": "11,000"
  },
  {
    "hotelNo": 109362,
    "hotelName": "やまぐち・湯田温泉　古稀庵",
    "hotelKanaName": "やまぐち　ゆだおんせん　こきあん",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D109362",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D109362%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D109362",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D109362",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/109362/109362.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/109362.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/109362/109362_rm1.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/109362/109362map.gif",
    "reviewCount": 192,
    "reviewAverage": 4.71,
    "userReview": "のんびりと贅沢な時間をありがとうございました毎年夏の思い出に高齢の両親と宿泊させていただいています。スタッフさんがとても丁寧で笑顔で対応してくださり感じの良い接客で居心地が良いです。夕食は…",
    "hotelMinCharge": 34100,
    "address1": "山口県",
    "address2": "山口市湯田温泉2-7-1",
    "telephoneNo": "083-920-1810",
    "access": "湯田温泉駅から徒歩で１０分／お車で３分",
    "parkingInformation": "有り　無料",
    "nearestStation": "湯田温泉",
    "hotelSpecial": "お部屋は露天風呂付和洋室。お料理は地産地味にこだわった“旬菜”会席をお楽しみ下さい。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D109362",
    "label": "山口県山口市ふるさと納税・桧皮葺きの屋根が描く流麗な曲線美「国宝・瑠璃光寺五重塔」湯田温泉古稀庵",
    "themeTitle": "山口県山口市ふるさと納税：瑠璃光寺五重塔を擁する西の京の隠れ家・全室源泉かけ流し露天風呂付「やまぐち・湯田温泉 古稀庵」",
    "themeDesc": "瑠璃光寺五重塔から至近、湯田温泉の街中にありながら緑豊かな庭園に包まれたラグジュアリー旅館。全客室に源泉かけ流しの露天風呂とテラスを備え、山口名物の天然とらふぐや見島牛など極上の郷土懐石を心静かに堪能できます。",
    "revAvg": "4.7",
    "minCharge": "34,100"
  },
  {
    "hotelNo": 178440,
    "hotelName": "ホテルエミオン京都",
    "hotelKanaName": "えみおん　きょうと",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D178440",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D178440%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D178440",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D178440",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/178440/178440.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/178440.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/178440/178440_kan1.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/178440/178440map.gif",
    "reviewCount": 601,
    "reviewAverage": 4.68,
    "userReview": "予約ミスにも迅速対応、家族でゆっくり過ごせた今回は家族4人で2度目の宿泊でした。前回も泊まったエミオンフォースで。予約時に誤って4名ではなく1名で予約をしてしまったらしく、チェックイン時にフロント…",
    "hotelMinCharge": 3990,
    "address1": "京都府",
    "address2": "京都市下京区朱雀堂ノ口町20-4",
    "telephoneNo": "075-323-2727",
    "access": "JR嵯峨野線「梅小路京都西」駅より連絡通路で徒歩2分　※JR京都駅より１駅（３分）",
    "parkingInformation": "駐車場なし。近隣に提携先コインパーキング「ナビパーク朱雀宝蔵町」あり、先着順37台まで",
    "nearestStation": "",
    "hotelSpecial": "京都駅よりJR嵯峨野線で１駅3分「梅小路京都西」駅より徒接2分。館内に飲食店や伝統体験のお店も充実。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D178440",
    "label": "京都府京都市ふるさと納税・平安時代建立の京都最古の木造建築「世界遺産・醍醐寺五重塔」ホテルエミオン京都",
    "themeTitle": "京都府京都市ふるさと納税：大浴場完備・醍醐寺五重塔や世界遺産巡りに至便な洗練のホテル「ホテルエミオン京都」",
    "themeDesc": "JR梅小路京都西駅に直結し、醍醐寺五重塔をはじめとする古都の名所巡りに抜群のアクセスを誇るシティホテル。宿泊者専用の大浴場や本格的な日本料理・イタリアンレストランを擁し、快適で洗練された京都ステイを提供します。",
    "revAvg": "4.7",
    "minCharge": "3,990"
  }
];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* パンくずリスト */}
      <nav className="bg-white border-b border-slate-200 py-3 px-4 text-xs text-slate-500">
        <div className="max-w-5xl mx-auto flex items-center space-x-2">
          <Link href="/" className="hover:text-emerald-600 transition">ホーム</Link>
          <span>&gt;</span>
          <span className="text-slate-700 font-medium">日本三大名塔＆国宝五重塔の美と古都歴史宿×ふるさと納税ガイド</span>
        </div>
      </nav>

      {/* ヒーローヘッダー */}
      <header className="relative bg-gradient-to-br from-emerald-950 via-slate-900 to-teal-950 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-block bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-semibold px-3 py-1 rounded-full mb-2">
            日本三大名塔・木造建築美特集
          </div>
          <h1 className="text-2xl md:text-4xl font-bold leading-tight tracking-tight">
            日本三大名塔＆国宝五重塔の美と古都歴史宿×ふるさと納税ガイド
          </h1>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-3xl mx-auto pt-2">
            地震や風雪に耐え抜き、千年の時を超えて均整美と荘厳さを保ち続ける「日本三大名塔」――修験道の聖地・出羽三山の深い杉木立の中に佇み、白木素木造りの素朴さと力強さが息をのむ美しさを放つ山形の「羽黒山五重塔」、室町時代の大内文化の美意識を結集し池の水面に映る桧皮葺き屋根の曲線美が西の京を象徴する山口の「瑠璃光寺五重塔」、そして平安時代建立で京都府内に現存する最古の木造建造物として豊臣秀吉の醍醐の花見でも名高い京都の「醍醐寺五重塔」。四季折々の自然と調和する名塔の姿を鑑賞し、名湯温泉や旬の味覚を心ゆくまで味わう贅沢なひとときを楽天ふるさと納税でお楽しみください。
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
            空に向かって幾重にも重なる優美な軒の反り。日本屈指の国宝五重塔を巡る旅
          </h2>
          <p className="text-slate-600 leading-relaxed text-sm md:text-base">
            地震や風雪に耐え抜き、千年の時を超えて均整美と荘厳さを保ち続ける「日本三大名塔」――修験道の聖地・出羽三山の深い杉木立の中に佇み、白木素木造りの素朴さと力強さが息をのむ美しさを放つ山形の「羽黒山五重塔」、室町時代の大内文化の美意識を結集し池の水面に映る桧皮葺き屋根の曲線美が西の京を象徴する山口の「瑠璃光寺五重塔」、そして平安時代建立で京都府内に現存する最古の木造建造物として豊臣秀吉の醍醐の花見でも名高い京都の「醍醐寺五重塔」。四季折々の自然と調和する名塔の姿を鑑賞し、名湯温泉や旬の味覚を心ゆくまで味わう贅沢なひとときを楽天ふるさと納税でお楽しみください。
          </p>
        </section>

        {/* メリット3選 */}
        <section className="space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
              ふるさと納税×日本三大名塔木造建築美 3つのメリット
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
                  四季の光や雪景色に映える国宝建築美！朝夕の静けさの中で名塔と対峙する贅沢な時間
                </h3>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                  観光客が少ない時間帯に、杉木立のざわめきや池の水鏡とともに五重塔の美しいシルエットを心静かに堪能。
                </p>
              </div>
            </div>
            <div key="1" className="bg-white rounded-xl p-6 shadow-sm border border-slate-200/80 flex flex-col justify-between hover:border-emerald-300 transition duration-200">
              <div className="space-y-3">
                <span className="inline-block w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 font-bold text-center leading-8 text-sm">
                  02
                </span>
                <h3 className="font-bold text-base text-slate-900 leading-snug">
                  庄内浜の寒鱈・のどぐろ、山口のとらふぐや長州黒かしわ、京野菜と出汁の京会席ディナー
                </h3>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                  名塔が建つ歴史ある土地で育まれた、海山の極上食材と伝統の割烹料理を心ゆくまで満喫。
                </p>
              </div>
            </div>
            <div key="2" className="bg-white rounded-xl p-6 shadow-sm border border-slate-200/80 flex flex-col justify-between hover:border-emerald-300 transition duration-200">
              <div className="space-y-3">
                <span className="inline-block w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 font-bold text-center leading-8 text-sm">
                  03
                </span>
                <h3 className="font-bold text-base text-slate-900 leading-snug">
                  楽天ふるさと納税宿泊クーポンで老舗温泉旅館やハイクラスホテルをお得に予約
                </h3>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                  歴史建築巡りや記念日旅行でも、寄付金額に応じた最大30%オフの即時割引クーポンでスマートにお得ステイ。
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
            
            <Link href="/furusato-tax-three-great-zen-temples-mindfulness-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三大禅寺＆静寂の枯山水・心洗われる禅寺名宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                南禅寺・建長寺・永平寺。
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
            <Link href="/furusato-tax-famous-castles-stone-walls-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本百名城＆石垣美を訪ねる名城ステイふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                姫路・松本・犬山。
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
