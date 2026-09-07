import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '日本三大醤油の醸造地＆木桶仕込みの芳香・白壁の蔵元巡りと発酵美名宿×ふるさと納税完全ガイド【2026年最新】銚子・小豆島・龍野',
  description: '和食の魂を醸す日本の三大醤油の聖地巡礼！千葉「銚子の醤油蔵」太平洋の黒潮気候と犬吠埼ホテル、香川「小豆島・醤の郷」木桶仕込み天然醸造とベイリゾートホテル小豆島、兵庫「播州龍野」揖保川清流が育む淡口醤油と赤穂温泉銀波荘。歴史ある醤油蔵の見学と美食温泉ステイを楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
  keywords: '日本三大醤油・醸造発酵特集, 楽天ふるさと納税, 温泉宿, ふるさと納税 旅行, 高級旅館, ホテル予約, 2026年旅行',
  openGraph: {
    title: '日本三大醤油の醸造地＆木桶仕込みの芳香・白壁の蔵元巡りと発酵美名宿×ふるさと納税完全ガイド【2026年最新】銚子・小豆島・龍野',
    description: '和食の魂を醸す日本の三大醤油の聖地巡礼！千葉「銚子の醤油蔵」太平洋の黒潮気候と犬吠埼ホテル、香川「小豆島・醤の郷」木桶仕込み天然醸造とベイリゾートホテル小豆島、兵庫「播州龍野」揖保川清流が育む淡口醤油と赤穂温泉銀波荘。歴史ある醤油蔵の見学と美食温泉ステイを楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    type: 'article',
    url: 'https://croud-travel.pages.dev/furusato-tax-three-great-shoyu-capitals-brewery-stay',
    siteName: 'トラベルポータル',
  },
};

export default function Page() {
  const officialAffUrl = 'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F';

  const hotels = [
  {
    "hotelNo": 4691,
    "hotelName": "‐犬吠埼温泉元湯　黒潮の湯‐　絶景の宿　犬吠埼ホテル",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D4691",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D4691%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D4691",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D4691",
    "hotelKanaName": "‐いぬぼうさきおんせんもとゆ　くろしおのゆ‐　ぜっけいのやど　いぬぼうさきほてる‐犬吠埼温泉元湯　黒",
    "hotelSpecial": "全室から太平洋が一望、新鮮魚介類中心の料理自慢の宿。海の見える露天風呂が人気です。",
    "hotelMinCharge": 13200,
    "address1": "千葉県",
    "address2": "銚子市犬吠埼9574-1",
    "telephoneNo": "0479-22-8111",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/4691/4691.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/4691/4691_heya1.jpg",
    "reviewCount": 1207,
    "reviewAverage": 4.26,
    "userReview": "朝食の品数が豊富で、部屋からの景色も絶景朝ごはんのバイキングの品数が豊富です。和食、洋食、中華、地元の食材を使ったものが並んでいて大満足ですその場で作る白身がふわふわの卵かけご飯が美味しかった…　2026-08-29 19:38:35投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=4691\" class=\"3click\">つづきはこちら</a>",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D4691",
    "access": "ＪＲ銚子駅よりバスで２０分",
    "label": "千葉県銚子市ふるさと納税・ヒゲタ・ヤマサの歴史薫る東の醤油大国「銚子の醤油蔵」絶景の宿犬吠埼ホテル",
    "themeTitle": "千葉県銚子市ふるさと納税：ヒゲタ・ヤマサの醤油蔵めぐり拠点・犬吠埼の絶景海宿「絶景の宿 犬吠埼ホテル」",
    "themeDesc": "犬吠埼灯台を間近に望み、銚子港の新鮮な魚介と天然温泉を満喫できるオーシャンビューリゾート。銚子の醤油蔵見学にも至近で、銚子名物の金目鯛煮付けや地魚刺身に本場の熟成醤油を合わせた贅沢な夕食コースが自慢です。",
    "revAvg": "4.3",
    "minCharge": "13,200"
  },
  {
    "hotelNo": 44874,
    "hotelName": "ベイリゾートホテル小豆島",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D44874",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D44874%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D44874",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D44874",
    "hotelKanaName": "べいりぞーとほてるしょうどしま",
    "hotelSpecial": "◆全室オーシャンビュー◆自家源泉の最上階展望露天風呂＆個室貸切露天風呂が魅力★",
    "hotelMinCharge": 5500,
    "address1": "香川県",
    "address2": "小豆郡小豆島町古江乙16-3",
    "telephoneNo": "0879-82-5000",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/44874/44874.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/44874/44874_yso.jpg",
    "reviewCount": 1920,
    "reviewAverage": 4.29,
    "userReview": "瀬戸内海の絶景と子供も喜ぶイベントで大満足オーシャンビューのお部屋で素晴らしい瀬戸内海を堪能させていただきました。建物は古いですが、穏やかな海とスタッフの方々に癒されました。夏休みでプールや縁日の…　2026-09-05 19:59:02投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=44874\" class=\"3click\">つづきはこちら</a>",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D44874",
    "access": "（車）坂手港3分/福田港30分/土庄港30分/草壁港10分/池田港20分★大部港以外の無料送迎有（2日前までに予約要）",
    "label": "香川県小豆島町ふるさと納税・木桶仕込みの伝統息づく天然醸造の聖地「小豆島・醤の郷」ベイリゾートホテル小豆島",
    "themeTitle": "香川県小豆島町ふるさと納税：醤の郷にほど近く全室オーシャンビュー・天然温泉「ベイリゾートホテル小豆島」",
    "themeDesc": "小豆島南岸の内海湾に面し、木桶仕込みの醤油蔵が建ち並ぶ「醤の郷」散策に最適な温泉リゾートホテル。最上階の展望露天風呂から瀬戸内海の多島美を一望し、オリーブ牛や小豆島手延べそうめん、醤の郷の醤油を使った創作ビュッフェが好評です。",
    "revAvg": "4.3",
    "minCharge": "5,500"
  },
  {
    "hotelNo": 19403,
    "hotelName": "赤穂温泉　絶景露天風呂の宿　銀波荘",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D19403",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D19403%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D19403",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D19403",
    "hotelKanaName": "あこうおんせん　ぜっけいろてんぶろのやど　ぎんぱそう",
    "hotelSpecial": "ＴＶや雑誌でも多数掲載！海と温泉が一体になって全身を包みこむ体験を堪能できる絶景露天風呂が自慢の宿。",
    "hotelMinCharge": 14300,
    "address1": "兵庫県",
    "address2": "赤穂市御崎2-8",
    "telephoneNo": "050-2018-0878",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/19403/19403.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/19403/19403_w601.jpg",
    "reviewCount": 1368,
    "reviewAverage": 4.44,
    "userReview": "瀬戸内海を望む露天風呂と食事に大満足瀬戸内海を望む露天風呂からの景色が素晴らしくいつまでも温泉を堪能できます。無料の最新のマッサージチェアもありリラックスできます。食事も美味しく満足度も高いです。…　2026-08-29 13:52:07投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=19403\" class=\"3click\">つづきはこちら</a>",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D19403",
    "access": "JR山陽本線・播州赤穂駅より路線バス約20分「御崎バス停」より徒歩1分・無料送迎あり／山陽自動車道・赤穂ＩＣより約10分",
    "label": "兵庫県たつの市・赤穂市ふるさと納税・揖保川の清流が生んだ淡口醤油のふるさと「播州龍野の白壁蔵」絶景露天風呂の宿銀波荘",
    "themeTitle": "兵庫県たつの市・赤穂市ふるさと納税：淡口醤油の龍野から至近・海と空に溶け込むインフィニティ露天風呂「赤穂温泉 絶景露天風呂の宿 銀波荘」",
    "themeDesc": "龍野の白壁蔵通りから快適にアクセスでき、瀬戸内海パノラマの絶景インフィニティ露天風呂で全国的に知られる名旅館。龍野の淡口醤油が素材の色と味を引き立てる瀬戸内の鯛やアワビ、冬の赤穂牡蠣会席を極上の空間で味わえます。",
    "revAvg": "4.4",
    "minCharge": "14,300"
  }
];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* パンくずリスト */}
      <nav className="bg-white border-b border-slate-200 py-3 px-4 text-xs text-slate-500">
        <div className="max-w-5xl mx-auto flex items-center space-x-2">
          <Link href="/" className="hover:text-emerald-600 transition">ホーム</Link>
          <span>&gt;</span>
          <span className="text-slate-700 font-medium">日本三大醤油の醸造地＆木桶仕込み・白壁蔵の美食宿×ふるさと納税ガイド</span>
        </div>
      </nav>

      {/* ヒーローヘッダー */}
      <header className="relative bg-gradient-to-br from-emerald-950 via-slate-900 to-teal-950 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-block bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-semibold px-3 py-1 rounded-full mb-2">
            日本三大醤油・醸造発酵特集
          </div>
          <h1 className="text-2xl md:text-4xl font-bold leading-tight tracking-tight">
            日本三大醤油の醸造地＆木桶仕込み・白壁蔵の美食宿×ふるさと納税ガイド
          </h1>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-3xl mx-auto pt-2">
            和食のユネスコ無形文化遺産登録を支え、日本の食卓に欠かせない深いうま味と香りを生み出してきた「日本三大醤油の醸造地」――江戸の巨大な消費を支えるため太平洋の温暖な気候と利根川水運を活かして濃口醤油の金字塔を打ち立てた千葉の「銚子」、温暖な瀬戸内海に浮かび現在も千本以上の木桶でじっくり天然醸造を続ける蔵が軒を連ねる香川の「小豆島・醤の郷」、そして揖保川の良質な伏流水と播州赤穂の塩・良質な小麦大豆から京料理に不可欠な淡口（うすくち）醤油を生み出した兵庫の「播州龍野」。白壁の蔵通りを散策し、蔵人たちの技と発酵文化に触れた後は、海の幸・山の幸に生揚げ醤油を合わせた極上ディナーを満喫する特別な旅を楽天ふるさと納税でお楽しみください。
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
            蔵に立ち込める芳醇な諸味（もろみ）の香り。日本の味覚を支える三大醤油の郷と極上宿
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>木桶仕込みの諸味蔵・白壁土蔵の町並み・醤油ソフトクリーム！五感で楽しむ蔵元巡り</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                老舗蔵の蔵見学や利き醤油体験、醤油樽が並ぶノスタルジックな風景を満喫。
              </p>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>銚子の活金目鯛・生マグロ、小豆島のオリーブ牛・瀬田川真鯛、播州赤穂の牡蠣と瀬戸内鮮魚</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                本場の生醤油や出汁醤油が引き立てる、各地最高峰の旬食材会席ディナーを堪能。
              </p>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>楽天ふるさと納税宿泊クーポンでオーシャンビュー温泉ホテルや名旅館をお得に予約</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                発酵文化とグルメを巡る大人旅でも、寄付金額に応じた最大30%オフの即時割引クーポンでスマートにお得ステイ。
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
                        {h.hotelSpecial || '日本三大醤油醸造地の木桶が醸す芳香、日本三大フルーツ王国の太陽と果実の恵み、日本三大味噌の郷の奥深い発酵美、日本三大柑橘王国の爽快な海風と黄金色の果樹園を巡る特別な拠点。四季折々の美食と名湯でお寛ぎください。'}
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
            あわせて読みたい全国の発酵美食・果樹園・酒蔵名宿特集
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            
            <Link href="/furusato-tax-three-great-sake-capitals-brewery-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三大酒処＆銘醸酒蔵・美酒ペアリング宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                灘・伏見・西条。
              </p>
            </Link>
            
            <Link href="/furusato-tax-three-great-somen-noodles-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三大そうめん＆手延べ麺道宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                三輪・播州・小豆島。
              </p>
            </Link>
            
            <Link href="/furusato-tax-oceanfront-wave-sound-healing-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                絶景オーシャンフロント×波音ヒーリングの海宿ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                稲取・南房総・読谷村。
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
