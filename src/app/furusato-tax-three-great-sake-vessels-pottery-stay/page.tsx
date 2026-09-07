import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '日本三大酒器＆銘酒を引き立てる名陶の里・窯元巡りと美食名宿×ふるさと納税完全ガイド【2026年最新】備前・萩・唐津',
  description: '酒器ひとつで日本酒の味わいが劇的に変わる！岡山「備前焼」釉薬を使わず土と炎の窯変が酒をまろやかにする赤穂温泉銀波荘、山口「萩焼」茶陶の伝統を受け継ぎ使い込むほどに育つ萩温泉郷萩小町、佐賀「唐津焼」料理と美酒を引き立てる土の温もり・純和風の老舗洋々閣。窯元散策やぐい呑み選び、地酒ペアリング会席ディナーを楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
  keywords: '日本三大酒器・伝統陶芸特集, 楽天ふるさと納税, 温泉宿, ふるさと納税 旅行, 高級旅館, ホテル予約, 2026年旅行',
  openGraph: {
    title: '日本三大酒器＆銘酒を引き立てる名陶の里・窯元巡りと美食名宿×ふるさと納税完全ガイド【2026年最新】備前・萩・唐津',
    description: '酒器ひとつで日本酒の味わいが劇的に変わる！岡山「備前焼」釉薬を使わず土と炎の窯変が酒をまろやかにする赤穂温泉銀波荘、山口「萩焼」茶陶の伝統を受け継ぎ使い込むほどに育つ萩温泉郷萩小町、佐賀「唐津焼」料理と美酒を引き立てる土の温もり・純和風の老舗洋々閣。窯元散策やぐい呑み選び、地酒ペアリング会席ディナーを楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    type: 'article',
    url: 'https://croud-travel.pages.dev/furusato-tax-three-great-sake-vessels-pottery-stay',
    siteName: 'トラベルポータル',
  },
};

export default function Page() {
  const officialAffUrl = 'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F';

  const hotels = [
  {
    "hotelNo": 19403,
    "hotelName": "赤穂温泉　絶景露天風呂の宿　銀波荘",
    "hotelKanaName": "あこうおんせん　ぜっけいろてんぶろのやど　ぎんぱそう",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D19403",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D19403%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D19403",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D19403",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/19403/19403.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/19403.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/19403/19403_w601.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/19403/19403map.gif",
    "reviewCount": 1368,
    "reviewAverage": 4.44,
    "userReview": "瀬戸内海を望む露天風呂と食事に大満足瀬戸内海を望む露天風呂からの景色が素晴らしくいつまでも温泉を堪能できます。無料の最新のマッサージチェアもありリラックスできます。食事も美味しく満足度も高いです。…",
    "hotelMinCharge": 14300,
    "address1": "兵庫県",
    "address2": "赤穂市御崎2-8",
    "telephoneNo": "050-2018-0878",
    "access": "JR山陽本線・播州赤穂駅より路線バス約20分「御崎バス停」より徒歩1分・無料送迎あり／山陽自動車道・赤穂ＩＣより約10分",
    "parkingInformation": "駐車場は旅館の目の前に無料でご用意しております。20台駐車いただけますので安心してご来館下さい。",
    "nearestStation": "播州赤穂",
    "hotelSpecial": "ＴＶや雑誌でも多数掲載！海と温泉が一体になって全身を包みこむ体験を堪能できる絶景露天風呂が自慢の宿。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D19403",
    "label": "岡山県備前市・兵庫県赤穂市ふるさと納税・土と炎の窯変が酒の味を極める備前焼の里散策拠点「赤穂温泉 絶景露天風呂の宿 銀波荘」",
    "themeTitle": "岡山県備前市・兵庫県赤穂市ふるさと納税：備前焼の里・伊部から快適アクセス・海と一体になる絶景露天風呂「赤穂温泉 絶景露天風呂の宿 銀波荘」",
    "themeDesc": "備前焼の窯元が軒を連ねる伊部（いんべ）の散策拠点に絶好の立地を誇り、瀬戸内海を一望するインフィニティ露天風呂で全国的に知られる名旅館。備前焼の器に美しく盛り付けられた瀬戸内の真鯛や赤穂名物の牡蠣、厳選された地酒を波音と共に味わえます。",
    "revAvg": "4.4",
    "minCharge": "14,300"
  },
  {
    "hotelNo": 54096,
    "hotelName": "萩温泉郷　夕景の宿　海のゆりかご　萩小町",
    "hotelKanaName": "はぎおんせんきょう　ゆうけいのやど うみのゆりかご はぎこまち",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D54096",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D54096%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D54096",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D54096",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/54096/54096.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/54096.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/54096/54096_room.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/54096/54096map.gif",
    "reviewCount": 5230,
    "reviewAverage": 4.36,
    "userReview": "料理が美味しく、静かにのんびり過ごせた料理がすごく美味しいです。夕日が見える温泉、当日は小雨で夕日が見られませんでしたが、とても気持ちのよいお風呂でした。宿はとても広いのですが、他の客とあ…",
    "hotelMinCharge": 11000,
    "address1": "山口県",
    "address2": "萩市椿東越ヶ浜6509",
    "telephoneNo": "0838-25-0121",
    "access": "「JR東萩駅」より車で10分／世界遺産「松下村塾」より車で10分／無料送迎サービスも有り！詳細はお気軽に問合せ下さい。",
    "parkingInformation": "60台（無料）／予約不要",
    "nearestStation": "東萩",
    "hotelSpecial": "【楽天トラベルアワード　10年連続受賞】～日本海の絶景が楽しめる・癒し＆遊びが盛り沢山の宿～",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D54096",
    "label": "山口県萩市ふるさと納税・一楽二萩三唐津と謳われる茶陶・使い込むほど育つ「萩焼」北門屋敷",
    "themeTitle": "山口県萩市ふるさと納税：日本海を望む絶景ロケーション・萩焼ギャラリーと天然温泉「萩温泉郷 夕景の宿 海のゆりかご 萩小町」",
    "themeDesc": "萩の城下町や萩焼窯元の散策に便利で、海沿いの崖に佇み目の前に日本海の大海原が広がる温泉旅館。館内には萩焼が展示され、萩温泉の湯に浸かりながら、山口名物の天然とらふぐや甘鯛、見島牛を取り入れた郷土会席ディナーを堪能できます。",
    "revAvg": "4.4",
    "minCharge": "11,000"
  },
  {
    "hotelNo": 54215,
    "hotelName": "洋々閣",
    "hotelKanaName": "ようようかく",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D54215",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D54215%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D54215",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D54215",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/54215/54215.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/54215.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/54215/54215_ky.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/54215/54215map.gif",
    "reviewCount": 155,
    "reviewAverage": 4.68,
    "userReview": "唐津焼と庭園の風情、丁寧な接客に感動歴史のある旅館。数々の美しい唐津焼と日本庭園があり、とても風情が感じられました。旅館の方々にも丁寧に接客いただき、大変心地よい時間を過ごさせていただきました。藤…",
    "hotelMinCharge": 13200,
    "address1": "佐賀県",
    "address2": "唐津市東唐津2-4-40",
    "telephoneNo": "0955-72-7181",
    "access": "JR筑肥・唐津線　唐津駅より車で7分　東唐津駅より車で4分",
    "parkingInformation": "有り　30台　無料　予約不要",
    "nearestStation": "唐津",
    "hotelSpecial": "大正の面影に現代建築の美を調和させた木造２階建ての純和風旅館。夕食は玄界灘の新鮮な魚介類の会席。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D54215",
    "label": "佐賀県唐津市ふるさと納税・料理を引き立てる渋みと土の温もり「唐津焼」唐津網元の宿 汐湯凪の音",
    "themeTitle": "佐賀県唐津市ふるさと納税：唐津焼の巨匠たちに愛されてきた数寄屋造りの名宿「洋々閣」",
    "themeDesc": "大正初期の木造建築と静寂な黒松の庭園が美しい、唐津を代表する純和風老舗旅館。館内には人間国宝・中里無庵をはじめとする名陶・唐津焼の名品が配され、唐津焼の器で供される玄界灘の新鮮なオコゼや黒毛和牛しゃぶしゃぶディナーを堪能できます。",
    "revAvg": "4.7",
    "minCharge": "13,200"
  }
];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* パンくずリスト */}
      <nav className="bg-white border-b border-slate-200 py-3 px-4 text-xs text-slate-500">
        <div className="max-w-5xl mx-auto flex items-center space-x-2">
          <Link href="/" className="hover:text-emerald-600 transition">ホーム</Link>
          <span>&gt;</span>
          <span className="text-slate-700 font-medium">日本三大酒器＆名陶の窯元巡り・美酒と美食の名宿×ふるさと納税ガイド</span>
        </div>
      </nav>

      {/* ヒーローヘッダー */}
      <header className="relative bg-gradient-to-br from-emerald-950 via-slate-900 to-teal-950 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-block bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-semibold px-3 py-1 rounded-full mb-2">
            日本三大酒器・伝統陶芸特集
          </div>
          <h1 className="text-2xl md:text-4xl font-bold leading-tight tracking-tight">
            日本三大酒器＆名陶の窯元巡り・美酒と美食の名宿×ふるさと納税ガイド
          </h1>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-3xl mx-auto pt-2">
            酒器の素材や肌触り、口当たりによって日本酒の風味は驚くほど変化します。古来より「一楽二萩三唐津」、そして「酒器なら備前」と愛され続けてきた「日本の三大酒器・名陶の郷」――無釉焼き締めによる微細な気孔が酒の角を取りきめ細やかな泡立ちとまろやかさを生む岡山の「備前焼（伊部）」、ふんわりとした柔らかな土味と使い込むほどに茶渋や酒が染み込み色合いを変える「萩の七化け」で名高い山口の「萩焼」、そして飾らない素朴な土感と力強い絵唐津・朝鮮唐津が料理と美酒を最高に引き立てる佐賀の「唐津焼」。登り窯が並ぶ窯元小路を歩いてお気に入りの器と出会い、新鮮な海の幸と極上の地酒ペアリングを満喫する大人の旅を楽天ふるさと納税でお楽しみください。
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
            土の息づかいと炎の芸術。最高峰のぐい呑みで味わう至福の美酒ステイ
          </h2>
          <p className="text-slate-600 leading-relaxed text-sm md:text-base">
            酒器の素材や肌触り、口当たりによって日本酒の風味は驚くほど変化します。古来より「一楽二萩三唐津」、そして「酒器なら備前」と愛され続けてきた「日本の三大酒器・名陶の郷」――無釉焼き締めによる微細な気孔が酒の角を取りきめ細やかな泡立ちとまろやかさを生む岡山の「備前焼（伊部）」、ふんわりとした柔らかな土味と使い込むほどに茶渋や酒が染み込み色合いを変える「萩の七化け」で名高い山口の「萩焼」、そして飾らない素朴な土感と力強い絵唐津・朝鮮唐津が料理と美酒を最高に引き立てる佐賀の「唐津焼」。登り窯が並ぶ窯元小路を歩いてお気に入りの器と出会い、新鮮な海の幸と極上の地酒ペアリングを満喫する大人の旅を楽天ふるさと納税でお楽しみください。
          </p>
        </section>

        {/* メリット3選 */}
        <section className="space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
              ふるさと納税×日本三大酒器伝統陶芸 3つのメリット
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
                  窯元直営ギャラリーでお気に入りの酒器を選び、宿の夕食や部屋飲みで早速味わう贅沢
                </h3>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                  作家の手仕事による一点ものの徳利やぐい呑みを探す旅。現地宿泊だからこそ心ゆくまで器選びに没頭。
                </p>
              </div>
            </div>
            <div key="1" className="bg-white rounded-xl p-6 shadow-sm border border-slate-200/80 flex flex-col justify-between hover:border-emerald-300 transition duration-200">
              <div className="space-y-3">
                <span className="inline-block w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 font-bold text-center leading-8 text-sm">
                  02
                </span>
                <h3 className="font-bold text-base text-slate-900 leading-snug">
                  瀬戸内の天然真鯛・若狭や山陰ののどぐろ、玄界灘の活イカなど最高峰の海の幸会席
                </h3>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                  名陶が育まれた産地で、本場の器に盛り付けられた旬の郷土料理と銘酒の極上マリアージュを堪能。
                </p>
              </div>
            </div>
            <div key="2" className="bg-white rounded-xl p-6 shadow-sm border border-slate-200/80 flex flex-col justify-between hover:border-emerald-300 transition duration-200">
              <div className="space-y-3">
                <span className="inline-block w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 font-bold text-center leading-8 text-sm">
                  03
                </span>
                <h3 className="font-bold text-base text-slate-900 leading-snug">
                  楽天ふるさと納税宿泊クーポンで憧れの老舗純和風旅館やオーシャンビュー温泉をお得に予約
                </h3>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                  大人の嗜み旅や器好きのご褒美旅行でも、寄付金額に応じた最大30%オフの即時割引クーポンでスマートにお得ステイ。
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
            
            <Link href="/furusato-tax-six-ancient-kilns-pottery-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本六古窯＆土と炎が織りなす陶芸の里名宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                備前・信楽・丹波・越前・瀬戸・常滑。
              </p>
            </Link>
            <Link href="/furusato-tax-three-great-sake-capitals-brewery-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三大酒処＆銘醸酒蔵・美酒ペアリング宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                灘・伏見・西条。
              </p>
            </Link>
            <Link href="/furusato-tax-three-great-traditional-townscapes-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三大伝統的町並み＆小江戸・白壁の蔵宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                倉敷・川越・竹原。
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
