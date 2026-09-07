import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '日本三大茶園＆天空の緑の絨毯・茶畑パノラマと最高峰の抹茶文化・茶香宿×ふるさと納税完全ガイド【2026年最新】牧之原・宇治・八女',
  description: '日本列島の茶文化の最高峰を訪ねる！静岡「牧之原大茶園」富士山と緑の大パノラマにホテルアンビア松風閣、京都「宇治茶の里」世界遺産平等院と宇治川のせせらぎホテルトレンドJR宇治駅前、福岡「八女中央大茶園」玉露の日本一の里とくつろぎの森グリーンピア八女。日本三大茶園の美しい茶畑景観と茶懐石を楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
  keywords: '日本三大茶園・茶香リトリート特集, 楽天ふるさと納税, 温泉宿, ふるさと納税 旅行, 高級旅館, ホテル予約, 2026年旅行',
  openGraph: {
    title: '日本三大茶園＆天空の緑の絨毯・茶畑パノラマと最高峰の抹茶文化・茶香宿×ふるさと納税完全ガイド【2026年最新】牧之原・宇治・八女',
    description: '日本列島の茶文化の最高峰を訪ねる！静岡「牧之原大茶園」富士山と緑の大パノラマにホテルアンビア松風閣、京都「宇治茶の里」世界遺産平等院と宇治川のせせらぎホテルトレンドJR宇治駅前、福岡「八女中央大茶園」玉露の日本一の里とくつろぎの森グリーンピア八女。日本三大茶園の美しい茶畑景観と茶懐石を楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    type: 'article',
    url: 'https://croud-travel.pages.dev/furusato-tax-three-great-tea-plantations-stay',
    siteName: 'トラベルポータル',
  },
};

export default function Page() {
  const officialAffUrl = 'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F';

  const hotels = [
  {
    "hotelNo": 13814,
    "hotelName": "焼津温泉　ホテルアンビア松風閣",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D13814",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D13814%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D13814",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D13814",
    "hotelKanaName": "やいづおんせん　あんびあ　しょうふうかく",
    "hotelSpecial": "全客室と露天風呂より富士と駿河湾が一望できます。",
    "hotelMinCharge": 9900,
    "address1": "静岡県",
    "address2": "焼津市浜当目海岸通り星が丘",
    "telephoneNo": "054-628-3131",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/13814/13814.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/13814/13814_room.jpg",
    "reviewCount": 1333,
    "reviewAverage": 4.49,
    "userReview": "ブッフェの質が高く子供も大満足の夏休み夏休みの終わりに家族で近場でと思い隣の県からお邪魔しました。インスタやコメントを見て宿泊を決めました。楽しみにしていた夜ご飯は予想以上に良かったです。刺身…　 ",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D13814",
    "access": "【東名】焼津ICより10分/JR焼津駅より無料シャトルバスあり！焼津は静岡駅から3駅約13分のアクセス",
    "label": "静岡県牧之原市・焼津市ふるさと納税・日本一の大茶園と富士山パノラマ「牧之原大茶園」ホテルアンビア松風閣",
    "themeTitle": "静岡県牧之原市・焼津市ふるさと納税：牧之原茶園ドライブ拠点・駿河湾と富士山一望の温泉ホテル「焼津温泉 ホテルアンビア松風閣」",
    "themeDesc": "牧之原台地の大茶園から車で快適にアクセスでき、断崖から駿河湾と霊峰富士を見晴らす絶景ホテル。地下1,500mから湧く焼津温泉の展望露天風呂や、焼津港直送の天然マグロと静岡県産食材を活かした贅沢会席が魅力です。",
    "revAvg": "4.5",
    "minCharge": "9,900"
  },
  {
    "hotelNo": 180370,
    "hotelName": "ホテルトレンドＪＲ宇治駅前",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D180370",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D180370%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D180370",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D180370",
    "hotelKanaName": "ほてるとれんど　じぇいあーるうじえきまえ",
    "hotelSpecial": "JR宇治駅南口より徒歩約3分♪源氏物語ミュージアムや平等院鳳凰堂など観光にGood☆",
    "hotelMinCharge": 6400,
    "address1": "京都府",
    "address2": "宇治市宇治壱番19-2",
    "telephoneNo": "0774-20-3200",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/180370/180370.jpg",
    "roomImageUrl": "",
    "reviewCount": 335,
    "reviewAverage": 4.04,
    "userReview": "駅近で便利、駐車場の手配もスムーズJR宇治駅から1番近いですが、今回は仕事で訪れました。車で向かう予定でしたので事前にその旨を伝えたところ、駐車場の手配もして頂きありがとうございます。公共…　 ",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D180370",
    "access": "JR宇治駅より徒歩にて約3分",
    "label": "京都府宇治市ふるさと納税・平等院鳳凰堂や宇治の有名茶商めぐり至近「宇治茶の里」ホテルトレンドＪＲ宇治駅前",
    "themeTitle": "京都府宇治市ふるさと納税：平等院鳳凰堂や宇治の有名茶商めぐり至近「ホテルトレンドJR宇治駅前」",
    "themeDesc": "JR宇治駅から徒歩3分の好立地に位置し、宇治茶の老舗茶舗や抹茶カフェめぐりの拠点に最適なホテル。清潔で機能的な客室を備え、宇治川沿いの歴史散策や世界遺産の寺社巡りを軽快に楽しめます。",
    "revAvg": "4.0",
    "minCharge": "6,400"
  },
  {
    "hotelNo": 79358,
    "hotelName": "くつろぎの森　グリーンピア八女",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D79358",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D79358%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D79358",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D79358",
    "hotelKanaName": "くつろぎのもり　ぐりーんぴあやめ",
    "hotelSpecial": "四季折々の草花が咲きみだれ、お食事、温泉、合宿と　さまざまなプランで、大満足頂けます。",
    "hotelMinCharge": 12980,
    "address1": "福岡県",
    "address2": "八女市黒木町木屋10905",
    "telephoneNo": "0943-22-8813",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/79358/79358.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/79358/79358_room.jpg",
    "reviewCount": 302,
    "reviewAverage": 3.94,
    "userReview": "プールと食事に大満足、コスパ抜群でまた行きたい夏休みに2泊しました。プールの規模もほどよく、夜ご飯はお腹いっぱいすぎるくらい!施設は少々古くても、お部屋は快適に過ごせました。大浴場も十…　 ",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D79358",
    "access": "九州自動車道八女IC下車。国道442号線経由、黒木平公園線へ（県道802号）約22km、約40分",
    "label": "福岡県八女市ふるさと納税・奥八女の清流と玉露の日本一の里「八女中央大茶園」くつろぎの森グリーンピア八女",
    "themeTitle": "福岡県八女市ふるさと納税：八女中央大茶園を望む大自然・天然温泉リゾート「くつろぎの森 グリーンピア八女」",
    "themeDesc": "八女の山々に囲まれた高原リゾートホテル。八女茶の香る温泉露天風呂やサウナでリフレッシュし、八女特産の高級玉露を使った料理や福岡の旬の食材会席で心洗われる休日を過ごせます。",
    "revAvg": "3.9",
    "minCharge": "12,980"
  }
];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* パンくずリスト */}
      <nav className="bg-white border-b border-slate-200 py-3 px-4 text-xs text-slate-500">
        <div className="max-w-5xl mx-auto flex items-center space-x-2">
          <Link href="/" className="hover:text-emerald-600 transition">ホーム</Link>
          <span>&gt;</span>
          <span className="text-slate-700 font-medium">日本三大茶園＆天空の茶畑パノラマ・茶香宿×ふるさと納税ガイド</span>
        </div>
      </nav>

      {/* ヒーローヘッダー */}
      <header className="relative bg-gradient-to-br from-emerald-950 via-slate-900 to-teal-950 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-block bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-semibold px-3 py-1 rounded-full mb-2">
            日本三大茶園・茶香リトリート特集
          </div>
          <h1 className="text-2xl md:text-4xl font-bold leading-tight tracking-tight">
            日本三大茶園＆天空の茶畑パノラマ・茶香宿×ふるさと納税ガイド
          </h1>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-3xl mx-auto pt-2">
            古くは鎌倉時代に栄西禅師が種を持ち帰って以来、日本の精神文化やもてなしの心を形作ってきた「日本三大茶園」――見渡す限り緩やかな丘陵地一面に幾筋もの茶畝が広がり富士山を借景に望む日本最大規模の茶産地・静岡の「牧之原大茶園」、覆下栽培によって濃厚なうま味と鮮やかな緑色を引き出し抹茶や玉露の最高峰ブランドとして君臨する京都の「宇治」、そして八女丘陵のスロープ一面に約70ヘクタールの茶畑が広がり伝統本玉露の生産量日本一を誇る福岡の「八女中央大茶園」。茶畑の稜線を望むドライブや茶室での点前体験を楽しんだ後は、お茶のアロマ風呂や茶葉を使った懐石料理に癒やされる特別な旅を楽天ふるさと納税でお楽しみください。
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
            見渡す限りの緑の丘陵、ふわりと漂う茶葉の芳香。五感をととのえる茶園ステイ
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>富士山と茶畑・宇治川の歴史景観・八女の大茶園パノラマ！緑豊かなヒーリング景観</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                早朝の澄んだ空気の中で広がる新緑の茶畑や、茶室での本格的なお茶席体験を体感。
              </p>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>静岡駿河湾の桜えび・生しらす、京都の京懐石・抹茶スイーツ、福岡八女のブランド牛とハカタポーク</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                茶懐石の伝統を受け継ぐ、各地域自慢の高級食材ディナーをホテルや温泉旅館で満喫。
              </p>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>楽天ふるさと納税宿泊クーポンで絶景展望ホテルや温泉リゾートをお得に予約</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                茶巡りのドライブ旅や癒やしのリトリートでも、寄付金額に応じた最大30%オフの即時割引クーポンでスマートにお得ステイ。
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
                        {h.hotelSpecial || '各地域屈指の絶景ロケーションと名湯温泉、地元の豊かなテロワールを活かした四季折々の会席料理でお寛ぎいただけます。'}
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
            あわせて読みたい全国の海岸美・名瀑・名湯別邸特集
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
            
            <Link href="/furusato-tax-three-great-wagashi-tea-culture-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三大銘菓＆歴史名菓・城下町風雅宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                京都・金沢・松江。
              </p>
            </Link>
            
            <Link href="/furusato-tax-three-great-daimyo-gardens-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三大名園＆大名庭園風雅宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                偕楽園・兼六園・後楽園。
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
