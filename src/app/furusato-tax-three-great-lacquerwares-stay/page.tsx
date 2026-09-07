import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '日本三大漆器＆匠の塗りと会席料理・伝統工芸名旅館宿×ふるさと納税完全ガイド【2026年最新】越前・山中・会津',
  description: '艶やかな漆と蒔絵が織りなす日本の美意識！福井鯖江「越前漆器」1500年の技と名湯あわら温泉まつや千千、石川加賀「山中漆器」木地挽きの最高峰と山中温泉吉祥やまなか、福島「会津塗」蒲生氏郷公ゆかりの金粉蒔絵と会津芦ノ牧温泉丸峰観光ホテル。日本三大漆器の工芸美と名湯を楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
  keywords: '日本三大漆器・漆芸文化特集, 楽天ふるさと納税, 温泉宿, ふるさと納税 旅行, 高級旅館, ホテル予約, 2026年旅行',
  openGraph: {
    title: '日本三大漆器＆匠の塗りと会席料理・伝統工芸名旅館宿×ふるさと納税完全ガイド【2026年最新】越前・山中・会津',
    description: '艶やかな漆と蒔絵が織りなす日本の美意識！福井鯖江「越前漆器」1500年の技と名湯あわら温泉まつや千千、石川加賀「山中漆器」木地挽きの最高峰と山中温泉吉祥やまなか、福島「会津塗」蒲生氏郷公ゆかりの金粉蒔絵と会津芦ノ牧温泉丸峰観光ホテル。日本三大漆器の工芸美と名湯を楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    type: 'article',
    url: 'https://croud-travel.pages.dev/furusato-tax-three-great-lacquerwares-stay',
    siteName: 'トラベルポータル',
  },
};

export default function Page() {
  const officialAffUrl = 'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F';

  const hotels = [
  {
    "hotelNo": 84545,
    "hotelName": "北陸　あわら温泉　まつや千千",
    "hotelKanaName": "まつやせんせん",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D84545",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D84545%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D84545",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D84545",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/84545/84545.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/84545.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/84545/84545_ky1.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/84545/84545map.gif",
    "reviewCount": 1999,
    "reviewAverage": 4.61,
    "userReview": "舟盛りでお腹いっぱい、温玉作りも楽しめた夫婦での利用で夕食は1人1台の舟盛りプラン。お腹いっぱいになりました。チェックインが夕方になってしまったので温玉作りとウェルカムコーヒーがギリギリでしたが、…　 ",
    "hotelMinCharge": 10450,
    "address1": "福井県",
    "address2": "あわら市舟津31-24",
    "telephoneNo": "0776-77-2560",
    "access": "■車：金津ＩＣより15分 ■ＪＲ：芦原温泉駅より送迎有（約10分）14時～18時（事前要予約）",
    "parkingInformation": "約200台(無料・屋外)　200V普通充電2台-TerraChargeアプリ要(有料・予約優先)",
    "nearestStation": "芦原温泉",
    "hotelSpecial": "源泉大浴場・大露天風呂「千のこぼれ湯」北陸最大級スケール♪日本の宿の贅沢は、お風呂から始まります。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D84545",
    "label": "福井県鯖江市・あわら市ふるさと納税・1500年の伝統と業務用漆器8割を誇る「越前漆器」名湯あわら温泉まつや千千",
    "themeTitle": "福井県鯖江市・あわら市ふるさと納税：1500年の歴史誇る「越前漆器」の里と北陸の名湯「北陸 あわら温泉 まつや千千」",
    "themeDesc": "鯖江河和田の越前漆器の里へアクセス良好。北陸屈指の規模を誇る大浴場「千のこぼれ湯」や露天風呂で寛ぎ、越前がにや若狭牛など日本海の旬魚旬菜を美しい越前漆器とともに味わう至福のひとときを過ごせます。",
    "revAvg": "4.6",
    "minCharge": "10,450"
  },
  {
    "hotelNo": 67124,
    "hotelName": "山中温泉　吉祥やまなか",
    "hotelKanaName": "やまなかおんせん　きっしょうやまなか",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D67124",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D67124%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D67124",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D67124",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/67124/67124.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/67124.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/67124/67124_gen.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/67124/67124map.gif",
    "reviewCount": 1626,
    "reviewAverage": 4.72,
    "userReview": "これまでで一番満足、料理も温泉も最高!これまで行った旅館の中でいちばん満足できるところでした!お料理も美味しくて、温泉も最高でした!クチコミの詳細はこちらから　https://review.t…　 ",
    "hotelMinCharge": 10800,
    "address1": "石川県",
    "address2": "加賀市山中温泉東町1-ホ14-3",
    "telephoneNo": "0761-78-5656",
    "access": "加賀温泉駅・小松空港から無料送迎あり（要予約/定時便）【車】加賀ICより14分。金沢・福井へは車で1時間",
    "parkingInformation": "有（無料）２０台　※正面玄関前にお越しください。スタッフがご案内いたします。",
    "nearestStation": "加賀温泉",
    "hotelSpecial": "清流と名湯、美食に包まれるラグジュアリー宿。山中温泉の文化に触れ、心ほどける静寂の滞在。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D67124",
    "label": "石川県加賀市ふるさと納税・木地挽きの極致と山中塗の器で愉しむ加賀料理「山中漆器」鶴仙渓の景観とかがり吉祥亭",
    "themeTitle": "石川県加賀市ふるさと納税：轆轤挽きの極致「山中漆器」と鶴仙渓の絶景「山中温泉 吉祥やまなか」",
    "themeDesc": "開湯1300年の名湯と山中塗の器文化が息づく温泉街。渓流を望む客室や露天風呂で癒やされ、山中漆器や九谷焼に盛り付けられた加賀能登の厳選懐石、揚げたて天ぷらなど目と舌で愉しむ極上料理を堪能します。",
    "revAvg": "4.7",
    "minCharge": "10,800"
  },
  {
    "hotelNo": 20623,
    "hotelName": "会津芦ノ牧温泉　丸峰観光ホテル",
    "hotelKanaName": "あいづあしのまきおんせん　まるみねかんこうほてる",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D20623",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D20623%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D20623",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D20623",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/20623/20623.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/20623.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/20623/20623_kan.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/20623/20623map.gif",
    "reviewCount": 3227,
    "reviewAverage": 4.24,
    "userReview": "客室露天風呂は良いが、全体的に暗め全体的に宿の雰囲気が暗く感じました。客室露天風呂は、ヒノキのお風呂でとてもよかったです。部屋に段差があり、狭く感じました。期待しすぎなければ、普通に泊…　 ",
    "hotelMinCharge": 7000,
    "address1": "福島県",
    "address2": "会津若松市大戸町芦ノ牧下夕平1128",
    "telephoneNo": "0242-92-2121",
    "access": "会津鉄道・芦ノ牧温泉駅／JR会津若松駅～タクシーで40分／磐越道・会津若松IC～40分/東北道・白河ＩＣ～60分",
    "parkingInformation": "有り　１７０台　無料　先着順",
    "nearestStation": "会津若松",
    "hotelSpecial": "2024年3月1日ビュッフェレストランオープン！山々に抱かれた渓谷美を望む【露天風呂付き客室】が人気",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D20623",
    "label": "福島県会津若松市ふるさと納税・蒲生氏郷公が奨励した金粉蒔絵の美「会津塗」渓谷露天風呂と郷土会席・会津芦ノ牧温泉丸峰",
    "themeTitle": "福島県会津若松市ふるさと納税：蒲生氏郷公が育んだ華麗なる「会津塗」と渓谷美「会津芦ノ牧温泉 丸峰観光ホテル」",
    "themeDesc": "会津若松市街の漆器店街散策と合わせて訪れたい大川渓谷沿いの名宿。渓流を望む展望風呂や古代檜風呂で湯浴みを楽しみ、会津塗の器に彩られた郷土会席料理や銘酒をじっくりと味わえます。",
    "revAvg": "4.2",
    "minCharge": "7,000"
  }
];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* パンくずリスト */}
      <nav className="bg-white border-b border-slate-200 py-3 px-4 text-xs text-slate-500">
        <div className="max-w-5xl mx-auto flex items-center space-x-2">
          <Link href="/" className="hover:text-emerald-600 transition">ホーム</Link>
          <span>&gt;</span>
          <span className="text-slate-700 font-medium">日本三大漆器＆伝統工芸名湯宿×ふるさと納税ガイド</span>
        </div>
      </nav>

      {/* ヒーローヘッダー */}
      <header className="relative bg-gradient-to-br from-emerald-950 via-slate-900 to-teal-950 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-block bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-semibold px-3 py-1 rounded-full mb-2">
            日本三大漆器・漆芸文化特集
          </div>
          <h1 className="text-2xl md:text-4xl font-bold leading-tight tracking-tight">
            日本三大漆器＆伝統工芸名湯宿×ふるさと納税ガイド
          </h1>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-3xl mx-auto pt-2">
            縄文の昔から受け継がれ、海外では「japan」の名で賞賛される日本の伝統工芸の最高峰「日本三大漆器」――継体天皇への献上から1500年以上の歴史を紡ぎ、日本の業務用漆器の約8割を一手に担う福井鯖江・河和田地区の「越前漆器」、木目の美しさを生かした挽物轆轤（ろくろ）技術が日本一と称され山中漆器祭でも賑わう石川加賀の「山中漆器」、そして名将・蒲生氏郷が近江から木地師や塗師を招聘して奨励し、華麗な消粉蒔絵で知られる福島会津若松の「会津塗」。職人が何層にも重ねて塗り上げた漆器に盛られる料理は、視覚と触覚の双方に極上の喜びをもたらします。漆器文化の息づく名湯宿に泊まり、伝統の器で供される本格懐石と名湯に心ほどける大人の旅を楽天ふるさと納税でお楽しみください。
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
            手になじむ温もりと深遠な漆黒・朱の輝き。器が料理を引き立てる職人美の宿へ
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>漆器のギャラリーや工房見学へアクセス抜群！職人の手仕事に直接触れる旅</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                宿の展示コーナーや周辺の漆器会館で、職人の蒔絵体験やこだわりのマイ漆器選びを満喫。
              </p>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>越前ガニ＆若狭牛、加賀懐石＆のどぐろ、会津馬刺し＆会津地鶏の極上ディナー</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                伝統の漆器に盛られた美しい料理の数々と、名水で仕込まれた地酒のマリアージュを堪能。
              </p>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>楽天ふるさと納税宿泊クーポンで老舗旅館の特別室を実質2,000円負担で予約</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                工芸文化を愛でるワンランク上の滞在も、寄付金額に応じた即時割引クーポンで賢くお得にステイ。
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
                        {h.hotelSpecial || '日本三大うどん巡り、三霊山パノラマ、漆器の文化美、広大な干潟の自然探訪に最適な上質拠点。四季折々の美食と名湯でお寛ぎください。'}
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
            あわせて読みたい日本の伝統美食・絶景特集
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
            
            <Link href="/furusato-tax-three-famous-confections-historic-town-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三大銘菓＆城下町茶寮・老舗和菓子文化宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                長生殿・越乃雪・京銘菓。
              </p>
            </Link>
            
            <Link href="/furusato-tax-three-great-bridges-history-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三大名橋＆歴史街道宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                錦帯橋・眼鏡橋・日本橋。
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
