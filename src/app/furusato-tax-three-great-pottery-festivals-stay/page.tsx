import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '日本三大陶器まつり＆名窯の里・器と美食を愛でる工芸温泉宿×ふるさと納税完全ガイド【2026年最新】有田・波佐見・信楽',
  description: '日本を代表する焼き物の聖地を巡る！佐賀「有田陶器市」400年の磁器文化と嬉野温泉大正屋椎葉山荘、長崎「波佐見陶器まつり」モダンで使いやすい日常の器とホテルブリスヴィラ波佐見、滋賀「信楽陶器まつり」日本六古窯の狸と登り窯・ホテルレイクヴィラ。日本三大陶器まつりの買い付け巡礼と名窯の器でいただく極上会席を楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
  keywords: '日本三大陶器まつり・名窯の里特集, 楽天ふるさと納税, 温泉宿, ふるさと納税 旅行, 高級旅館, ホテル予約, 2026年旅行',
  openGraph: {
    title: '日本三大陶器まつり＆名窯の里・器と美食を愛でる工芸温泉宿×ふるさと納税完全ガイド【2026年最新】有田・波佐見・信楽',
    description: '日本を代表する焼き物の聖地を巡る！佐賀「有田陶器市」400年の磁器文化と嬉野温泉大正屋椎葉山荘、長崎「波佐見陶器まつり」モダンで使いやすい日常の器とホテルブリスヴィラ波佐見、滋賀「信楽陶器まつり」日本六古窯の狸と登り窯・ホテルレイクヴィラ。日本三大陶器まつりの買い付け巡礼と名窯の器でいただく極上会席を楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    type: 'article',
    url: 'https://croud-travel.pages.dev/furusato-tax-three-great-pottery-festivals-stay',
    siteName: 'トラベルポータル',
  },
};

export default function Page() {
  const officialAffUrl = 'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F';

  const hotels = [
  {
    "hotelNo": 40293,
    "hotelName": "嬉野温泉　大正屋　椎葉山荘",
    "hotelKanaName": "うれしのおんせん　たいしょうや　しいばさんそう",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D40293",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D40293%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D40293",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D40293",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/40293/40293.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/40293.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/40293/40293_kya.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/40293/40293map.gif",
    "reviewCount": 548,
    "reviewAverage": 4.54,
    "userReview": "丁寧な接客と清掃に感動、葉書も嬉しかった接客、清掃共に大変心地好い感じで大変満足しました。帰宅後も葉書でご挨拶が届き、またお世話になりたいと感じました。大変お世話になりました。クチコミの詳…　 ",
    "hotelMinCharge": 19332,
    "address1": "佐賀県",
    "address2": "嬉野市嬉野町岩屋川内椎葉乙1586",
    "telephoneNo": "0954-42-3600",
    "access": "ＪＲ佐世保線武雄温泉駅よりＪＲバスで３０分、終点嬉野温泉より送迎車で５分／九州長崎自動車道 嬉野ICより約１０分",
    "parkingInformation": "有り　１００台　無料",
    "nearestStation": "武雄温泉",
    "hotelSpecial": "県内最大級の露天風呂「しいばの湯」と５つの温泉湯巡りが大好評！",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D40293",
    "label": "佐賀県有田町・武雄市ふるさと納税・400年の磁器文化と120万人集う日本最大級「有田陶器市」美肌名湯と有田焼の器会席",
    "themeTitle": "佐賀県有田町・嬉野市ふるさと納税：400年の磁器の都「有田陶器市」と美肌名湯「嬉野温泉 大正屋 椎葉山荘」",
    "themeDesc": "有田陶器市の散策拠点に最適な嬉野温泉の奥座敷。椎葉川沿いの大自然に抱かれた露天風呂「しいばの湯」で日本三大美肌の湯に浸かり、有田焼の器に美しく盛られた特選佐賀牛会席や名物温泉湯豆腐を堪能します。",
    "revAvg": "4.5",
    "minCharge": "19,332"
  },
  {
    "hotelNo": 147617,
    "hotelName": "ホテル　ブリスヴィラ波佐見",
    "hotelKanaName": "ぶりすう゛ぃらはさみ",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D147617",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D147617%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D147617",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D147617",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/147617/147617.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/147617.jpg",
    "roomImageUrl": "",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/147617/147617map.gif",
    "reviewCount": 637,
    "reviewAverage": 4.42,
    "userReview": "綺麗な部屋と茶道のおもてなしに癒される部屋は、綺麗で茶道のお持てなしは、癒されましだ、又行きたいですクチコミの詳細はこちらから　https://review.travel.rakute…　 ",
    "hotelMinCharge": 3510,
    "address1": "長崎県",
    "address2": "東彼杵郡波佐見町長野郷567-1",
    "telephoneNo": "0956-85-8338",
    "access": "【ハウステンボス】車で約２５分　【ＪＲ】川棚駅：車で約１２分／有田駅：車で約１５分　【お車】波佐見有田IC：約１０分",
    "parkingInformation": "有り　４０台　無料　予約不要",
    "nearestStation": "川棚",
    "hotelSpecial": "ハウステンボスから車で約３０分◆全室禁煙◆Ｗｉ－Ｆｉ全室完備",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D147617",
    "label": "長崎県波佐見町ふるさと納税・モダンでおしゃれな日常の器「波佐見陶器まつり」源泉かけ流し温泉とホテルブリスヴィラ波佐見",
    "themeTitle": "長崎県波佐見町ふるさと納税：モダンな日常の器「波佐見陶器まつり」と源泉温泉「ホテル ブリスヴィラ波佐見」",
    "themeDesc": "波佐見焼のギャラリーや陶器まつり本会場に隣接するリゾートホテル。隣接する天然温泉「はさみ温泉 湯治楼」の源泉かけ流し美肌湯で寛ぎ、波佐見焼の茶器や器を使った朝食、カフェ散策を快適に楽しめます。",
    "revAvg": "4.4",
    "minCharge": "3,510"
  },
  {
    "hotelNo": 31159,
    "hotelName": "ホテル　レイクヴィラ",
    "hotelKanaName": "れいくう゛ぃら",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D31159",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D31159%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D31159",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D31159",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/31159/31159.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/31159.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/31159/31159_kan1.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/31159/31159map.gif",
    "reviewCount": 333,
    "reviewAverage": 4.45,
    "userReview": "もう20年近く毎年夏にロッジを利用しているが、室内は清潔で手入れが行き届いており、係りの皆さんのホスピタリティにも満足している。温泉、食事とも素晴らしく私はイチオシにしたい宿だと思っている。…　 ",
    "hotelMinCharge": 21450,
    "address1": "滋賀県",
    "address2": "甲賀市信楽町多羅尾1",
    "telephoneNo": "0748-85-0250",
    "access": "ＪＲ伊賀上野駅から送迎有り（要事前予約3日前迄11:00～17：00  20分/新名神信楽ICより35分",
    "parkingInformation": "有　２００台　無料",
    "nearestStation": "伊賀上野",
    "hotelSpecial": "36Ｈゴルフコースやショートコースそして本格スパなど、贅沢な休日が過ごせる総合リゾート施設へ",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D31159",
    "label": "滋賀県甲賀市信楽町ふるさと納税・日本六古窯の伝統とたぬき焼「信楽陶器まつり」信楽焼の器と信楽温泉ホテルレイクヴィラ",
    "themeTitle": "滋賀県甲賀市信楽町ふるさと納税：日本六古窯の土の温もり「信楽陶器まつり」と「信楽温泉 ホテル レイクヴィラ」",
    "themeDesc": "信楽伝統産業会館や陶芸の森へアクセス良好。広大な高原ゴルフリゾート内のホテルで、信楽温泉の露天風呂やサウナを満喫し、信楽焼の器に盛られた近江牛すき焼きや旬の会席料理を贅沢に味わえます。",
    "revAvg": "4.5",
    "minCharge": "21,450"
  }
];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* パンくずリスト */}
      <nav className="bg-white border-b border-slate-200 py-3 px-4 text-xs text-slate-500">
        <div className="max-w-5xl mx-auto flex items-center space-x-2">
          <Link href="/" className="hover:text-emerald-600 transition">ホーム</Link>
          <span>&gt;</span>
          <span className="text-slate-700 font-medium">日本三大陶器まつり＆名窯工芸宿×ふるさと納税ガイド</span>
        </div>
      </nav>

      {/* ヒーローヘッダー */}
      <header className="relative bg-gradient-to-br from-emerald-950 via-slate-900 to-teal-950 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-block bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-semibold px-3 py-1 rounded-full mb-2">
            日本三大陶器まつり・名窯の里特集
          </div>
          <h1 className="text-2xl md:text-4xl font-bold leading-tight tracking-tight">
            日本三大陶器まつり＆名窯工芸宿×ふるさと納税ガイド
          </h1>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-3xl mx-auto pt-2">
            全国から数十万〜百万人を超える器ファンが集い、作家や職人との語らいの中で特別な器を探す「日本三大陶器まつり（三大名窯の里）」――日本初の磁器として400年以上の歴史を誇りゴールデンウィークに街中が器で埋め尽くされる佐賀の「有田陶器市」、隣接する波佐見町で機能美とモダンなデザインが若者を中心に絶大な人気を集める長崎の「波佐見陶器まつり」、そして日本六古窯の一つとして信楽粘土が醸し出す素朴な土味と愛嬌ある狸の置物で親しまれる滋賀の「信楽陶器まつり」。手作りの器は、使うほどに手に馴染み、毎日の食卓に温もりを添えてくれます。名窯の里や美肌温泉宿に泊まり、職人の器に美しく盛り付けられた佐賀牛や近江牛会席を味わう豊かな休日を楽天ふるさと納税でお楽しみください。
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
            窯元の煙突が連なる小路を歩き、一生モノの器に出会う。職人の情熱と美肌湯に触れる旅
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>陶器市の早朝オープンに直行！混雑前に人気作家や限定アウトレット品をゲット</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                会場近くの宿や温泉街に滞在することで、ゆったりとしたスケジュールで窯元散策と買い物を満喫。
              </p>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>佐賀牛・有田鶏、長崎和牛・大村湾鮮魚、近江牛・琵琶湖鮎の器コラボ会席</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                宿の夕食では、名窯の器に盛り付けられた目にも鮮やかな本格会席と地酒のマリアージュを堪能。
              </p>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>楽天ふるさと納税宿泊クーポンで名門旅館やリゾートホテルをお得にリザーブ</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                陶器市シーズンの人気宿も、寄付金額に応じた即時割引クーポンで実質2,000円負担の快適ステイ。
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
                        {h.hotelSpecial || '日本三大柱状節理の奇岩絶壁、陶器まつりの工芸美、日本三大薬湯の湯治、大名庭園の四季散策を満喫する極上の滞在。四季折々の美食と名湯でお寛ぎください。'}
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
            あわせて読みたい日本の名湯・工芸・庭園特集
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            
            <Link href="/furusato-tax-three-pottery-towns-heritage-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                三大陶磁器の里＆窯元巡り工芸宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                有田・瀬戸・美濃。
              </p>
            </Link>
            
            <Link href="/furusato-tax-three-great-lacquerwares-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三大漆器＆伝統工芸名湯宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                越前・山中・会津。
              </p>
            </Link>
            
            <Link href="/furusato-tax-three-great-washi-papers-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三大和紙＆清流文化湯宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                越前・美濃・土佐。
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
