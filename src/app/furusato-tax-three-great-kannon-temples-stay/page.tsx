import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '日本三大観音＆諸願成就の霊場・下町風情と湖畔の祈り宿×ふるさと納税完全ガイド【2026年最新】浅草観音・石山観音・大須観音',
  description: '人々の信仰と江戸・上方・尾張の文化を育んだ名刹！都内最古の寺で雷門の賑わいを誇る「浅草寺（浅草観音）」御宿野乃浅草別邸、紫式部ゆかりの西国霊場で瀬田川の清流を望む「石山寺（石山観音）」南郷温泉二葉屋、大須商店街の活気と七ツ寺の歴史薫る「大須観音」ホテルアベスト大須観音駅前。日本三大観音霊場の参拝と名宿ステイを楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
  keywords: '日本三大観音・聖地祈願特集, 楽天ふるさと納税, 温泉宿, ふるさと納税 旅行, 高級旅館, ホテル予約, 2026年旅行',
  openGraph: {
    title: '日本三大観音＆諸願成就の霊場・下町風情と湖畔の祈り宿×ふるさと納税完全ガイド【2026年最新】浅草観音・石山観音・大須観音',
    description: '人々の信仰と江戸・上方・尾張の文化を育んだ名刹！都内最古の寺で雷門の賑わいを誇る「浅草寺（浅草観音）」御宿野乃浅草別邸、紫式部ゆかりの西国霊場で瀬田川の清流を望む「石山寺（石山観音）」南郷温泉二葉屋、大須商店街の活気と七ツ寺の歴史薫る「大須観音」ホテルアベスト大須観音駅前。日本三大観音霊場の参拝と名宿ステイを楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    type: 'article',
    url: 'https://croud-travel.pages.dev/furusato-tax-three-great-kannon-temples-stay',
    siteName: 'トラベルポータル',
  },
};

export default function Page() {
  const officialAffUrl = 'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F';

  const hotels = [
  {
    "hotelNo": 187462,
    "hotelName": "天然温泉　凌天の湯　御宿　野乃浅草別邸（ドーミーイン・御宿野乃　ホテルズグループ）",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D187462",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D187462%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D187462",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D187462",
    "hotelKanaName": "てんねんおんせん　りょうてんのゆ　おんやど　ののあさくさべってい",
    "hotelSpecial": "天然温泉大浴場は浅草観音温泉の黒湯を使用♪セルフロウリュサウナ完備！",
    "hotelMinCharge": 9407,
    "address1": "東京都",
    "address2": "台東区浅草2-7-26",
    "telephoneNo": "03-5830-0130",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/187462/187462.jpg",
    "roomImageUrl": "",
    "reviewCount": 147,
    "reviewAverage": 4.6,
    "userReview": "館内も綺麗でサウナとバイキングが最高館内もきれいだしお風呂、サウナとてもよかったですバイキングも最高でした。またきます。クチコミの詳細はこちらから　https://review.travel.…　 ",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D187462",
    "access": "つくばEXPRESS「浅草」駅A1出口(EV有り)より徒歩約4分、銀座線「浅草」駅1番出口(EV有り)より徒歩約8分",
    "label": "東京都台東区ふるさと納税・江戸庶民の信仰を集める都内最古の霊場「浅草寺（浅草観音）」浅草ビューホテル",
    "themeTitle": "東京都台東区ふるさと納税：浅草寺へ徒歩すぐ・全館畳敷きと黒湯天然温泉「天然温泉 凌天の湯 御宿 野乃 浅草別邸」",
    "themeDesc": "浅草寺や花やしきの至近に位置し、和の温もりを五感で感じられる全館畳敷きの和風プレミアムホテル。地下から湧出する黒湯の天然温泉大浴場やサウナを備え、朝食にはいくら盛り放題の海鮮丼や下町グルメを楽しめます。",
    "revAvg": "4.6",
    "minCharge": "9,407"
  },
  {
    "hotelNo": 7606,
    "hotelName": "南郷温泉　二葉屋",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D7606",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D7606%26f_flg%3DPLAN",
    "dpPlanListUrl": "",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D7606",
    "hotelKanaName": "なんごうおんせん　ふたばや",
    "hotelSpecial": "瀬田川を望む四季折々の風景。近江牛がメインの湖国会席などのお料理と南郷温泉を満喫！",
    "hotelMinCharge": 6050,
    "address1": "滋賀県",
    "address2": "大津市南郷5-15-7",
    "telephoneNo": "077-537-1255",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/7606/7606.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/7606/7606_room.jpg",
    "reviewCount": 76,
    "reviewAverage": 4.27,
    "userReview": "",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D7606",
    "access": "JR石山駅下車、京阪バスで大石行「南郷」下車すぐ。",
    "label": "滋賀県大津市ふるさと納税・紫式部が源氏物語を起筆した西国第十三番札所「石山寺（石山観音）」びわ湖大津プリンスホテル",
    "themeTitle": "滋賀県大津市ふるさと納税：石山寺の門前・瀬田川の清流を望む料理温泉旅館「南郷温泉 二葉屋」",
    "themeDesc": "石山寺から車で約5分、瀬田川のほとりに佇み静かな川のせせらぎに包まれた老舗料理旅館。ラドンを含む天然南郷温泉で温まった後は、名物の瀬田川シジミ料理や近江牛すき焼き、季節の川魚料理を温かなもてなしで堪能できます。",
    "revAvg": "4.3",
    "minCharge": "6,050"
  },
  {
    "hotelNo": 4933,
    "hotelName": "ホテルアベスト大須観音駅前　羽ノ湯",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D4933",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D4933%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D4933",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D4933",
    "hotelKanaName": "ほてるあべすとおおすかんのんえきまえ　はねのゆ",
    "hotelSpecial": "日本一の商店街「大須商店街」入口すぐ。大須観音が目の前に位置するホテル。",
    "hotelMinCharge": 5430,
    "address1": "愛知県",
    "address2": "名古屋市中区大須2-24-45",
    "telephoneNo": "052-231-0303",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/4933/4933.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/4933/4933_sgl.jpg",
    "reviewCount": 2752,
    "reviewAverage": 3.98,
    "userReview": "アメニティ充実とシモンズのベッドで満足久しぶりのリピート宿泊。以前からの懸案事項の風呂の化粧水がなかった件は解消されていた。フロント前で自分でアメニティを選ぶ場所に化粧水、乳液、クレンジング、洗顔…　 ",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D4933",
    "access": "地下鉄鶴舞線「大須観音駅」より徒歩1分。",
    "label": "愛知県名古屋市ふるさと納税・尾張名所図会に描かれた下町の信仰と賑わい「大須観音」名古屋観光ホテル",
    "themeTitle": "愛知県名古屋市ふるさと納税：大須観音駅直結・展望露天風呂と大須商店街歩きの拠点「ホテルアベスト大須観音駅前 羽ノ湯」",
    "themeDesc": "地下鉄大須観音駅から徒歩1分、大須観音の境内や大須商店街へのアクセス抜群なホテル。最上階には足を伸ばしてくつろげる大浴場「羽ノ湯」を完備し、名古屋めし巡りや観音参拝の拠点として快適な滞在を提供します。",
    "revAvg": "4.0",
    "minCharge": "5,430"
  }
];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* パンくずリスト */}
      <nav className="bg-white border-b border-slate-200 py-3 px-4 text-xs text-slate-500">
        <div className="max-w-5xl mx-auto flex items-center space-x-2">
          <Link href="/" className="hover:text-emerald-600 transition">ホーム</Link>
          <span>&gt;</span>
          <span className="text-slate-700 font-medium">日本三大観音＆諸願成就の霊場・門前町名宿×ふるさと納税ガイド</span>
        </div>
      </nav>

      {/* ヒーローヘッダー */}
      <header className="relative bg-gradient-to-br from-emerald-950 via-slate-900 to-teal-950 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-block bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-semibold px-3 py-1 rounded-full mb-2">
            日本三大観音・聖地祈願特集
          </div>
          <h1 className="text-2xl md:text-4xl font-bold leading-tight tracking-tight">
            日本三大観音＆諸願成就の霊場・門前町名宿×ふるさと納税ガイド
          </h1>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-3xl mx-auto pt-2">
            観世音菩薩の慈悲にすがり、人々の現世利益と心の安らぎを叶えてきた「日本三大観音（三大霊場）」――推古天皇の時代に隅田川から引き揚げられた聖観音像を本尊とし雷門から仲見世の賑わいが江戸情緒を伝える東京の「浅草寺（浅草観音）」、奈良時代に良弁僧正が開山し紫式部が参籠して源氏物語を起筆したと伝わる滋賀大津の「石山寺（石山観音）」、そして美濃国大須から徳川家康の名古屋城築城とともに移転し日本三大経蔵を擁する愛知名古屋の「大須観音（寶生院）」。門前町の名物グルメを味わいながら心洗われる参拝の旅路を、快適なホテルや温泉宿とともに楽天ふるさと納税でお楽しみください。
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
            千数百年の祈りが紡ぐ慈悲の光。門前町の賑わいと安らぎの名宿ステイ
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>浅草仲見世の活気・石山寺の紅葉と硅灰石・大須商店街の食べ歩き！多彩な門前文化</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                朝の静かな勤行体験や、歴史的寺宝の特別拝観、門前町ならではの名物グルメを堪能。
              </p>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>浅草の江戸前天ぷら・もんじゃ、滋賀の近江牛・瀬田川の鮎とシジミ、名古屋ひつまぶし・手羽先</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                門前町の発展とともに洗練されてきた、各地を代表する名物料理ディナーを満喫。
              </p>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>楽天ふるさと納税宿泊クーポンで駅近シティホテルや天然温泉宿をお得に予約</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                開運厄除けの寺社巡り旅でも、寄付金額に応じた最大30%オフの即時割引クーポンでスマートにお得ステイ。
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
                        {h.hotelSpecial || '日本三大海食洞のエメラルドに輝く神秘、日本三大五重塔の国宝木造建築美、日本三大駅弁の旅情と極上グルメ、日本三大観音霊場の諸願成就と門前町風情を巡る特別な拠点。四季折々の美食と名湯でお寛ぎください。'}
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
            あわせて読みたい全国の神秘洞窟・名塔建築・美食駅弁特集
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            
            <Link href="/furusato-tax-three-great-inari-shrines-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三大稲荷＆商売繁盛・開運祈願の名宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                伏見・豊川・祐徳稲荷。
              </p>
            </Link>
            
            <Link href="/furusato-tax-three-sacred-hachiman-shrines-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三大八幡宮＆開運厄除け宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                宇佐・石清水・筥崎宮。
              </p>
            </Link>
            
            <Link href="/furusato-tax-three-great-pagodas-heritage-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三大五重塔＆国宝木造美・古都門前宿×ふるさと納税ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                法隆寺・東寺・羽黒山。
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
