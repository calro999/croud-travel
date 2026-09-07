import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '日本三大そうめん＆手延べ極細麺の伝統技・名水と古都の湯宿×ふるさと納税完全ガイド【2026年最新】三輪・播州・小豆島',
  description: '糸のように細く強いコシ！日本の麺の原点！奈良桜井「三輪そうめん」手延べそうめん発祥の地の大和橿原シティホテル、兵庫たつの「播州手延そうめん揖保乃糸」清流揖保川と瀬戸内オーシャンビューHOTEL万葉岬、香川小豆島「小豆島そうめん」ごま油が香る400年の島伝統とアクアホテル小豆島リゾート。日本三大そうめんの麺道と郷土の恵みを楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
  keywords: '日本三大そうめん・伝統手延べ特集, 楽天ふるさと納税, 温泉宿, ふるさと納税 旅行, 高級旅館, ホテル予約, 2026年旅行',
  openGraph: {
    title: '日本三大そうめん＆手延べ極細麺の伝統技・名水と古都の湯宿×ふるさと納税完全ガイド【2026年最新】三輪・播州・小豆島',
    description: '糸のように細く強いコシ！日本の麺の原点！奈良桜井「三輪そうめん」手延べそうめん発祥の地の大和橿原シティホテル、兵庫たつの「播州手延そうめん揖保乃糸」清流揖保川と瀬戸内オーシャンビューHOTEL万葉岬、香川小豆島「小豆島そうめん」ごま油が香る400年の島伝統とアクアホテル小豆島リゾート。日本三大そうめんの麺道と郷土の恵みを楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    type: 'article',
    url: 'https://croud-travel.pages.dev/furusato-tax-three-great-somen-noodles-stay',
    siteName: 'トラベルポータル',
  },
};

export default function Page() {
  const officialAffUrl = 'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F';

  const hotels = [
  {
    "hotelNo": 5407,
    "hotelName": "大和橿原シティホテル",
    "hotelKanaName": "やまとかしはら　してぃほてる",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D5407",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D5407%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D5407",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D5407",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/5407/5407.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/5407.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/5407/5407_twn.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/5407/5407map.gif",
    "reviewCount": 716,
    "reviewAverage": 3,
    "userReview": "素泊まりには便利だが清掃と備品に難あり素泊まりには十分。駅周辺でもあり、飲食店は多いので困らない。無料駐車場は限られてて、若干狭い、少し歩く必要あり。有料も周辺にあるので困る事はない。部屋…　 ",
    "hotelMinCharge": 5500,
    "address1": "奈良県",
    "address2": "橿原市八木町1-8-16",
    "telephoneNo": "0744-23-5151",
    "access": "★大和八木駅より徒歩４分★八木西口駅より徒歩３分★ＪＲ畝傍駅より徒歩４分★南阪奈道路葛城ICより約１５分★",
    "parkingInformation": "１６台　無料　先着順　R２４『南八木』交差点東側　当館より徒歩２～３分　詳細はフロントにてご案内。",
    "nearestStation": "大和八木",
    "hotelSpecial": "橿原市の中央街で、ビジネス・観光のベースとして好適です。近鉄大和八木駅より徒歩４分。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D5407",
    "label": "奈良県桜井市ふるさと納税・手延べそうめん発祥の地・極細のコシ「三輪そうめん」大神神社参拝と大和の古都ステイ",
    "themeTitle": "奈良県桜井市・橿原市ふるさと納税：そうめん発祥の地「三輪そうめん」と大神神社参拝の拠点「大和橿原シティホテル」",
    "themeDesc": "三輪そうめんの里・三輪山大神神社へ電車で数分。大和八木駅近くの便利な拠点で、清潔な客室と温かなサービスで寛ぎ、三輪そうめんの名店散策や大和牛・飛鳥の郷土料理巡りを満喫できます。",
    "revAvg": "3.0",
    "minCharge": "5,500"
  },
  {
    "hotelNo": 56745,
    "hotelName": "ＨＯＴＥＬ万葉岬",
    "hotelKanaName": "まんようみさき",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D56745",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D56745%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D56745",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D56745",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/56745/56745.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/56745.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/56745/56745_dt.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/56745/56745map.gif",
    "reviewCount": 528,
    "reviewAverage": 4.37,
    "userReview": "非日常景色が良い。建物も味があって内装も綺麗にされていて清掃もできているので良かったが、プラスアルファが欲しいかな。クチコミの詳細はこちらから　https://review.travel.ra…　 ",
    "hotelMinCharge": 7550,
    "address1": "兵庫県",
    "address2": "相生市相生金ケ崎5321",
    "telephoneNo": "0791-22-1413",
    "access": "ＪＲ　相生駅より送迎有り（予約制）",
    "parkingInformation": "有り　４０台　無料　",
    "nearestStation": "相生（兵庫）",
    "hotelSpecial": "瀬戸内絶景パノラマ！瀬戸の山頂にひっそりと佇む癒しの宿。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D56745",
    "label": "兵庫県たつの市・姫路市ふるさと納税・清流揖保川が育んだ日本最高峰「播州手延そうめん揖保乃糸」播磨の城下町ステイ",
    "themeTitle": "兵庫県たつの市ふるさと納税：清流揖保川の至宝「揖保乃糸」の故郷と瀬戸内パノラマ「ＨＯＴＥＬ 万葉岬」",
    "themeDesc": "揖保乃糸資料館「そうめんの里」見学と合わせて訪れたい万葉岬の隠れ家ホテル。瀬戸内海を270度パノラマで見渡す絶景客室や展望風呂で癒やされ、播磨灘の獲れたて鮮魚や牡蠣料理、揖保乃糸料理を堪能します。",
    "revAvg": "4.4",
    "minCharge": "7,550"
  },
  {
    "hotelNo": 192875,
    "hotelName": "アクアホテル小豆島リゾート＜小豆島＞",
    "hotelKanaName": "あくあほてるしょうどしまりぞーと",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D192875",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D192875%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D192875",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D192875",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/192875/192875.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/192875.jpg",
    "roomImageUrl": "",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/192875/192875map.gif",
    "reviewCount": 34,
    "reviewAverage": 4.62,
    "userReview": "周りには何もない所ですが窓からの景色がとても良く、部屋もきれいで広く最高でした。スタッフの方も親しみやすく、とてもくつろげました。また、行きたいです。クチコミの詳細はこちらから　https://r…　 ",
    "hotelMinCharge": 10659,
    "address1": "香川県",
    "address2": "小豆郡小豆島町吉田乙276-2",
    "telephoneNo": "0879-62-8856",
    "access": "小豆島福田港よりお車で約８分、小豆島土庄港よりお車で約４０分",
    "parkingInformation": "有り　１６台　無料　予約不要",
    "nearestStation": "高松空港",
    "hotelSpecial": "小豆島北東の閑静なエリアに佇むオーシャンビューホテル！日常から離れた開放的空間で何もしない贅沢を♪",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D192875",
    "label": "香川県小豆島町・土庄町ふるさと納税・ごま油が香る400年の手延べ伝統「小豆島そうめん」瀬戸内海の夕日とオリビアン小豆島",
    "themeTitle": "香川県小豆島町・土庄町ふるさと納税：ごま油香る島伝統「小豆島手延そうめん」と「アクアホテル小豆島リゾート」",
    "themeDesc": "400年の手延べそうめん文化息づく小豆島。島巡りに便利なアクアホテル小豆島リゾートに滞在し、小豆島そうめんの食べ比べやオリーブ牛、瀬戸内海の夕日を眺めながら島時間をゆったり満喫できます。",
    "revAvg": "4.6",
    "minCharge": "10,659"
  }
];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* パンくずリスト */}
      <nav className="bg-white border-b border-slate-200 py-3 px-4 text-xs text-slate-500">
        <div className="max-w-5xl mx-auto flex items-center space-x-2">
          <Link href="/" className="hover:text-emerald-600 transition">ホーム</Link>
          <span>&gt;</span>
          <span className="text-slate-700 font-medium">日本三大そうめん＆手延べ麺道宿×ふるさと納税ガイド</span>
        </div>
      </nav>

      {/* ヒーローヘッダー */}
      <header className="relative bg-gradient-to-br from-emerald-950 via-slate-900 to-teal-950 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-block bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-semibold px-3 py-1 rounded-full mb-2">
            日本三大そうめん・伝統手延べ特集
          </div>
          <h1 className="text-2xl md:text-4xl font-bold leading-tight tracking-tight">
            日本三大そうめん＆手延べ麺道宿×ふるさと納税ガイド
          </h1>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-3xl mx-auto pt-2">
            千数百年の歴史を持ち、良質な小麦粉・名水・塩、そして油を用いて手作業で熟成を繰り返しながら細く延ばしていく「日本三大そうめん」――大神神社の神話に起源を持ち1200余年の歴史を誇る手延べそうめんの発祥地・奈良桜井の「三輪そうめん」、清流揖保川の恵みと播磨の熟練職人ネットワークによって国内シェアトップを誇る兵庫たつのの「播州手延そうめん（揖保乃糸）」、そしてお伊勢参りの旅人が伝えた技法をごま油を塗って熟成させることで独特の風味ともちもちのコシを生み出した香川の「小豆島そうめん」。茹で時間わずか数十秒、冷水でキュッと締めた一本は、小麦本来の甘みと清涼感あふれる喉ごしを運んでくれます。そうめんの故郷の温泉旅館やシーサイドリゾートに泊まり、冷製そうめんやにゅうめん、地元のブランド牛・海の幸を味わう特別な休日を楽天ふるさと納税でお楽しみください。
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
            箸ですくい上げれば白糸の輝き。職人が極限まで引き延ばした至高の喉ごしを求めて
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>老舗製麺所やそうめん処へ直行！できたて手延べ麺と食べ比べを満喫</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                熟成期間や細さ（緒環・神舞・特級・ひね）の違いを本場の名店でじっくり味わい尽くす贅沢。
              </p>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>大和牛会席、播磨灘の穴子・牡蠣・瀬戸内海鮮、小豆島オリーブ牛ディナー</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                手延べそうめんと合わせて、各地域が誇る海と大地の恵みを宿の本格会席で堪能。
              </p>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>楽天ふるさと納税宿泊クーポンで古都の宿やオーシャンビューリゾートをお得にステイ</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                麺巡礼の旅でも、寄付金額に応じた最大30%オフの即時割引クーポンで実質2,000円負担の快適宿泊。
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
                        {h.hotelSpecial || '日本三大美港の夜景、天空の山城の石垣美、手延べそうめんの伝統技、鍾乳石洞窟の地底宮殿を巡る極上の拠点。四季折々の美食と名湯でお寛ぎください。'}
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
            あわせて読みたい日本の名城・麺道・絶景特集
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            
            <Link href="/furusato-tax-three-great-udons-gourmet-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三大うどん＆極上麺道湯宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                讃岐・稲庭・五島。
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
            
            <Link href="/furusato-tax-three-great-sake-capitals-brewery-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三大酒どころ＆酒蔵ツーリズム宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                灘五郷・伏見・西条。
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
