import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '日本三大名城＆不落の巨城を望む城見ステイ×ふるさと納税完全ガイド【2026年最新】熊本・名古屋・大阪',
  description: '戦国武将たちの夢と最高峰の築城技術が宿る日本の名城巡り！熊本「熊本城」加藤清正の武者返しと石垣を望むホテル日航熊本、愛知「名古屋城」徳川尾張藩の金鯱天守と名古屋観光ホテル、大阪「大阪城」豊臣秀吉の栄華と広大な緑に抱かれるホテルニューオータニ大阪。歴史ロマンと夜のライトアップ、豪華ディナーを楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
  keywords: '日本三大名城・歴史紀行特集, 楽天ふるさと納税, 温泉宿, ふるさと納税 旅行, 高級旅館, ホテル予約, 2026年旅行',
  openGraph: {
    title: '日本三大名城＆不落の巨城を望む城見ステイ×ふるさと納税完全ガイド【2026年最新】熊本・名古屋・大阪',
    description: '戦国武将たちの夢と最高峰の築城技術が宿る日本の名城巡り！熊本「熊本城」加藤清正の武者返しと石垣を望むホテル日航熊本、愛知「名古屋城」徳川尾張藩の金鯱天守と名古屋観光ホテル、大阪「大阪城」豊臣秀吉の栄華と広大な緑に抱かれるホテルニューオータニ大阪。歴史ロマンと夜のライトアップ、豪華ディナーを楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    type: 'article',
    url: 'https://croud-travel.pages.dev/furusato-tax-three-great-castles-historic-stay',
    siteName: 'トラベルポータル',
  },
};

export default function Page() {
  const officialAffUrl = 'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F';

  const hotels = [
  {
    "hotelNo": 15707,
    "hotelName": "ホテル日航熊本",
    "hotelKanaName": "にっこうくまもと",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D15707",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D15707%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D15707",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D15707",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/15707/15707.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/15707.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/15707/15707_heya1.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/15707/15707map.gif",
    "reviewCount": 3019,
    "reviewAverage": 4.61,
    "userReview": "朝食が充実、熊本観光の拠点に良い部屋は少し狭い。ビジネスホテルと大差ないレベル。朝食のバイキングは満足度が高い。目の前で焼いてくれるオムレツがあったり、タイピーエンがあったり。…",
    "hotelMinCharge": 6500,
    "address1": "熊本県",
    "address2": "熊本市中央区上通町2-1",
    "telephoneNo": "096-211-1111",
    "access": "ＪＲ鹿児島本線「熊本駅」から市電約１５分「通町筋」下車０分／九州自動車道　熊本ＩＣより約８ｋｍ／鶴屋百貨店向い側",
    "parkingInformation": "3か所の外部駐車場と提携しております。地図、規定料金等はホテル公式HPを参照願います。",
    "nearestStation": "熊本",
    "hotelSpecial": "熊本城と市街を一望、贅沢な眺望と上質なサービスで心に残るホテルステイを。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F15707%2F15707.html",
    "label": "熊本県熊本市ふるさと納税・加藤清正が築いた不落の巨城「熊本城」を望むホテル日航熊本",
    "themeTitle": "熊本県熊本市ふるさと納税：客室から熊本城天守を一望・上質なもてなしが息づく「ホテル日航熊本」",
    "themeDesc": "熊本市中心部・通町筋に面し、客室の窓や上層階から熊本城の威容を間近に望むラグジュアリーホテル。被災から力強く復興を遂げた天守閣のライトアップを眺めながら、熊本名物の馬刺しやあか牛、郷土の旬食材を取り入れた洗練された料理を堪能できます。",
    "revAvg": "4.6",
    "minCharge": "6,500"
  },
  {
    "hotelNo": 2046,
    "hotelName": "名古屋観光ホテル",
    "hotelKanaName": "なごやかんこうほてる",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D2046",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D2046%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D2046",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D2046",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/2046/2046.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/2046.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/2046/2046_room.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/2046/2046map.gif",
    "reviewCount": 4404,
    "reviewAverage": 4.55,
    "userReview": "4人一緒でも快適なお部屋4人1部屋で泊まらせていただきましたエキストラベッドを2台入れても充分な広さがあり、ゆったりと過ごすことができましたスタッフの方も丁寧な対応で、お部屋も綺麗で大…",
    "hotelMinCharge": 9000,
    "address1": "愛知県",
    "address2": "名古屋市中区錦1-19-30",
    "telephoneNo": "052-231-7711",
    "access": "名古屋駅よりタクシーで５分、名古屋駅より地下鉄 東山線 １駅目「伏見」よりすぐの徒歩２分、宿泊の方は駐車場「無料」",
    "parkingInformation": "250台分有り（車高制限2.1メートル・予約不要）チェックインからチェックアウトまで無料",
    "nearestStation": "伏見（愛知）",
    "hotelSpecial": "市内で最も長い歴史あるホテルで洗練されたおもてなしを体験。滞在中は駐車場を無料でご利用頂けます。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F2046%2F2046.html",
    "label": "愛知県名古屋市ふるさと納税・金鯱輝く天下の名城「名古屋城」名古屋観光ホテル",
    "themeTitle": "愛知県名古屋市ふるさと納税：中部の迎賓館として愛される伝統・名古屋城散策拠点「名古屋観光ホテル」",
    "themeDesc": "昭和11年創業、名古屋の歴史と共に歩んできた伝統と気品を誇る名門グランドホテル。名古屋城へのアクセスも良好で、歴史散策を満喫した後は重厚で上質な客室で寛ぎ、名古屋コーチンや伝統のフレンチ、日本料理会席に舌鼓を打てます。",
    "revAvg": "4.5",
    "minCharge": "9,000"
  },
  {
    "hotelNo": 91,
    "hotelName": "ホテルニューオータニ大阪",
    "hotelKanaName": "にゅーおーたに　おおさか",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D91",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D91%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D91",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D91",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/91/91.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/91.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/91/91_st.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/91/91map.gif",
    "reviewCount": 5034,
    "reviewAverage": 4.63,
    "userReview": "大阪城ホールまで徒歩圏内で快適な2泊3日大阪城ホールでのファンミの為に利用させてもらいました。会場へも徒歩で10分かからないくらい程で1日2本ある時は、空き時間に部屋に一旦戻って、涼めたし会場のト…",
    "hotelMinCharge": 9180,
    "address1": "大阪府",
    "address2": "大阪市中央区城見1-4-1",
    "telephoneNo": "06-6941-1111",
    "access": "ＪＲ大阪環状線 大阪城公園駅より徒歩約３分。Osaka Metro 長堀鶴見緑地線 大阪ビジネスパーク駅より徒歩約３分。",
    "parkingInformation": "有り(有料　1泊につき1台￥2,000）",
    "nearestStation": "大阪城公園",
    "hotelSpecial": "大阪のシンボル「大阪城天守閣」を間近に望むアーバンリゾート",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F91%2F91.html",
    "label": "大阪府大阪市ふるさと納税・豊臣秀吉の栄華を今に伝える巨城「大阪城」ホテルニューオータニ大阪",
    "themeTitle": "大阪府大阪市ふるさと納税：大阪城公園の豊かな緑と天守閣を眼下に望むキャッスルビュー「ホテルニューオータニ大阪」",
    "themeDesc": "大阪城公園のすぐ隣に位置し、キャッスルビューの客室からはライトアップされた大阪城天守閣と濠の広大な夜景を一望。四季折々の自然の美しさに包まれながら、ニューオータニ伝統の極上スイーツや多彩なレストランでの美食ディナーを楽しめます。",
    "revAvg": "4.6",
    "minCharge": "9,180"
  }
];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* パンくずリスト */}
      <nav className="bg-white border-b border-slate-200 py-3 px-4 text-xs text-slate-500">
        <div className="max-w-5xl mx-auto flex items-center space-x-2">
          <Link href="/" className="hover:text-emerald-600 transition">ホーム</Link>
          <span>&gt;</span>
          <span className="text-slate-700 font-medium">日本三大名城＆不落の巨城を望む城見ステイ×ふるさと納税ガイド</span>
        </div>
      </nav>

      {/* ヒーローヘッダー */}
      <header className="relative bg-gradient-to-br from-emerald-950 via-slate-900 to-teal-950 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-block bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-semibold px-3 py-1 rounded-full mb-2">
            日本三大名城・歴史紀行特集
          </div>
          <h1 className="text-2xl md:text-4xl font-bold leading-tight tracking-tight">
            日本三大名城＆不落の巨城を望む城見ステイ×ふるさと納税ガイド
          </h1>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-3xl mx-auto pt-2">
            戦国から江戸の天下泰平へと移り変わる激動の時代に築かれ、日本の築城技術の極致を示す「日本三大名城」――武者返しと呼ばれる美しい反りの石垣と加藤清正の軍事要塞としての知恵が詰まった熊本の「熊本城」、徳川家康が天下普請で築かせ壮麗な金鯱が天を衝く尾張徳川家の居城・愛知の「名古屋城」、そして豊臣秀吉が威信をかけて築き大坂の陣の歴史を今に刻む難攻不落の要塞・大阪の「大阪城」。ライトアップされた天守を客室やレストランから眺め、城下町の極上グルメを堪能する特別なひとときを楽天ふるさと納税でお楽しみください。
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
            空にそびえる天守閣と壮麗な石垣。日本の歴史ロマンと城下町ステイ
          </h2>
          <p className="text-slate-600 leading-relaxed text-sm md:text-base">
            戦国から江戸の天下泰平へと移り変わる激動の時代に築かれ、日本の築城技術の極致を示す「日本三大名城」――武者返しと呼ばれる美しい反りの石垣と加藤清正の軍事要塞としての知恵が詰まった熊本の「熊本城」、徳川家康が天下普請で築かせ壮麗な金鯱が天を衝く尾張徳川家の居城・愛知の「名古屋城」、そして豊臣秀吉が威信をかけて築き大坂の陣の歴史を今に刻む難攻不落の要塞・大阪の「大阪城」。ライトアップされた天守を客室やレストランから眺め、城下町の極上グルメを堪能する特別なひとときを楽天ふるさと納税でお楽しみください。
          </p>
        </section>

        {/* メリット3選 */}
        <section className="space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
              ふるさと納税×日本三大名城歴史紀行 3つのメリット
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
                  客室やレストランから天守閣・ライトアップ城景を独り占めする贅沢なキャッスルビューステイ
                </h3>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                  夕暮れから夜にかけて美しく照らし出される天守閣や石垣を、静かなプライベート空間からゆったり鑑賞。
                </p>
              </div>
            </div>
            <div key="1" className="bg-white rounded-xl p-6 shadow-sm border border-slate-200/80 flex flex-col justify-between hover:border-emerald-300 transition duration-200">
              <div className="space-y-3">
                <span className="inline-block w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 font-bold text-center leading-8 text-sm">
                  02
                </span>
                <h3 className="font-bold text-base text-slate-900 leading-snug">
                  馬刺し会席・名古屋コーチン・なにわ割烹など城下町が誇る最高峰グルメの数々
                </h3>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                  歴史ある名城の城下町で磨かれてきた伝統の郷土料理や極上食材ディナーをホテル内の名店で堪能。
                </p>
              </div>
            </div>
            <div key="2" className="bg-white rounded-xl p-6 shadow-sm border border-slate-200/80 flex flex-col justify-between hover:border-emerald-300 transition duration-200">
              <div className="space-y-3">
                <span className="inline-block w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 font-bold text-center leading-8 text-sm">
                  03
                </span>
                <h3 className="font-bold text-base text-slate-900 leading-snug">
                  楽天ふるさと納税宿泊クーポンで憧れのシティホテル・ラグジュアリーステイをお得に予約
                </h3>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                  歴史探訪や夫婦旅行でも、寄付金額に応じた最大30%オフの即時割引クーポンでスマートにお得ステイ。
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
            
            <Link href="/furusato-tax-three-great-night-views-romantic-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三大夜景＆極上パノラマビュー名宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                函館・摩耶山・稲佐山。
              </p>
            </Link>
            <Link href="/furusato-tax-three-great-torii-sacred-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三大鳥居＆古都の聖域・参道名宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                厳島・春日大社・気比神宮。
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
      
        {/* Model Course Section */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200/80">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              【1泊2日】おすすめモデルコース＆旅の過ごし方
            </h2>
          </div>
          <p className="text-stone-600 mb-8 text-sm md:text-base leading-relaxed">
            本特集の魅力を最大限に満喫するための理想的な1泊2日旅程モデルプランです。周辺の観光名所やグルメスポットとあわせて、無理のないスケジュールで最高の旅をお楽しみください。
          </p>
          <div className="space-y-6">
            <div className="border-l-2 border-amber-500 pl-4 md:pl-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="bg-amber-500 text-white text-xs font-bold px-2.5 py-1 rounded">1日目</span>
                <h3 className="font-bold text-stone-900 text-base md:text-lg">出発〜チェックイン・夕食と名湯を満喫</h3>
              </div>
              <ul className="text-xs md:text-sm text-stone-600 space-y-2 leading-relaxed">
                <li>・<strong className="text-stone-800">13:30〜</strong> 現地到着後、周辺の散策や名物カフェ・観光スポットをのんびり観光。</li>
                <li>・<strong className="text-stone-800">15:00〜</strong> お宿へチェックイン。ウェルカムドリンクや特製スイーツを楽しみながら客室で一息。</li>
                <li>・<strong className="text-stone-800">16:30〜</strong> 夕暮れ時の露天風呂・サウナで日頃の疲れを癒やす極上の湯浴み。</li>
                <li>・<strong className="text-stone-800">18:30〜</strong> 地元厳選食材をふんだんに使用した旬の会席料理やディナーを堪能。</li>
                <li>・<strong className="text-stone-800">21:00〜</strong> 星空を仰ぐ夜の露天風呂やラウンジで贅沢な大人の時間を。</li>
              </ul>
            </div>
            <div className="border-l-2 border-teal-500 pl-4 md:pl-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="bg-teal-600 text-white text-xs font-bold px-2.5 py-1 rounded">2日目</span>
                <h3 className="font-bold text-stone-900 text-base md:text-lg">朝風呂〜朝食・お土産選びと帰路へ</h3>
              </div>
              <ul className="text-xs md:text-sm text-stone-600 space-y-2 leading-relaxed">
                <li>・<strong className="text-stone-800">07:00〜</strong> 朝の清々しい空気の中で目覚めの朝風呂・サウナ。</li>
                <li>・<strong className="text-stone-800">08:00〜</strong> 炊きたて地元産ごはんと郷土の味覚が並ぶこだわりの朝食。</li>
                <li>・<strong className="text-stone-800">10:00〜</strong> チェックアウト後、近隣の道の駅や特産品店でお土産選び。</li>
                <li>・<strong className="text-stone-800">12:00〜</strong> 地元で愛される名物ランチを堪能して、大満足の帰路へ。</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-stone-50 rounded-2xl p-6 md:p-10 border border-stone-200/80">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              よくある質問（FAQ）と旅のノウハウ
            </h2>
          </div>
          <div className="space-y-4">
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 予約に最適な時期やタイミングはいつ頃ですか？</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 露天風呂付き客室や特選料理プランは数ヶ月前から予約が埋まりやすいため、旅行日程が決まり次第2〜3ヶ月前の早期予約が最も確実です。楽天トラベルの限定クーポンや早期割引プランを活用するとお得に宿泊できます。
              </p>
            </details>
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 車でのアクセスと公共交通機関のどちらが便利ですか？</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 多くの主要旅館・リゾートホテルは最寄り駅から無料送迎バスを運行しています。周辺の観光名所や景勝地を巡る場合は、最寄り駅前でレンタカーを借りると移動がスムーズでおすすめです。
              </p>
            </details>
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 食事のアレルギー対応や部屋食の指定は可能ですか？</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 多くの宿泊施設で事前連絡によりアレルギー対応が可能です。部屋食や個室食事処プランはプラン予約時に指定するか、予約時の備考欄で宿へ相談することをおすすめします。
              </p>
            </details>
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 一人旅や子連れファミリーでの宿泊にも向いていますか？</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. はい。一人旅歓迎プランや、家族向けの広い和洋室・貸切風呂完備の宿を厳選しています。プラン詳細の受入条件をご確認の上、安心してお申し込みください。
              </p>
            </details>
          </div>
        </section>

        {/* Internal Link Mesh: Related Features & Prefectures */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200/80">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-xl md:text-2xl font-bold text-stone-900">
              あわせて読みたい人気特集＆全国エリアガイド
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">

          </div>
          <div className="pt-6 border-t border-stone-100">
            <h3 className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-3">人気の都道府県から宿を探す</h3>
            <div className="flex flex-wrap gap-2">
              <Link
                href="/prefectures/mie"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                三重県の宿・温泉
              </Link>
              <Link
                href="/prefectures/oita"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                大分県の宿・温泉
              </Link>
              <Link
                href="/prefectures/ibaraki"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                茨城県の宿・温泉
              </Link>
              <Link
                href="/prefectures/okinawa"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                沖縄県の宿・温泉
              </Link>
            </div>
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
