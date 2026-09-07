import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '日本三大鳥居＆神聖なる巨木の門・古都の歴史宿×ふるさと納税完全ガイド【2026年最新】宮島・奈良・敦賀',
  description: '神域と俗界を分かつ壮麗なる日本の巨鳥居巡り！広島廿日市「宮島・厳島神社」海上にそびえる朱塗りの大鳥居と宮島グランドホテル有もと、奈良「春日大社」世界遺産春日山原始林の一之鳥居と伝統の奈良ホテル、福井敦賀「気比神宮」重要文化財の木造大鳥居と敦賀マンテンホテル駅前。古社寺の神聖な祈りと歴史、門前町の名宿を楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
  keywords: '日本三大鳥居・神域巡礼特集, 楽天ふるさと納税, 温泉宿, ふるさと納税 旅行, 高級旅館, ホテル予約, 2026年旅行',
  openGraph: {
    title: '日本三大鳥居＆神聖なる巨木の門・古都の歴史宿×ふるさと納税完全ガイド【2026年最新】宮島・奈良・敦賀',
    description: '神域と俗界を分かつ壮麗なる日本の巨鳥居巡り！広島廿日市「宮島・厳島神社」海上にそびえる朱塗りの大鳥居と宮島グランドホテル有もと、奈良「春日大社」世界遺産春日山原始林の一之鳥居と伝統の奈良ホテル、福井敦賀「気比神宮」重要文化財の木造大鳥居と敦賀マンテンホテル駅前。古社寺の神聖な祈りと歴史、門前町の名宿を楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    type: 'article',
    url: 'https://croud-travel.pages.dev/furusato-tax-three-great-torii-sacred-stay',
    siteName: 'トラベルポータル',
  },
};

export default function Page() {
  const officialAffUrl = 'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F';

  const hotels = [
  {
    "hotelNo": 18848,
    "hotelName": "宮島グランドホテル　有もと",
    "hotelKanaName": "みやじま　ぐらんどほてる　ありもと",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D18848",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D18848%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D18848",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D18848",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/18848/18848.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/18848.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/18848/18848_rm.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/18848/18848map.gif",
    "reviewCount": 1281,
    "reviewAverage": 4.58,
    "userReview": "ケトルの沸騰が遅く電源も切れない部屋のケトル湧くのが遅い湧いて居るけど、電源が切れてなくずっと湧いたままになってます。よろしくお願い致しますクチコミの詳細はこちらから　https://…",
    "hotelMinCharge": 14200,
    "address1": "広島県",
    "address2": "廿日市市宮島町南町364",
    "telephoneNo": "0829-44-2411",
    "access": "宮島口桟橋よりフェリーで１０分～宮島桟橋よりマイクロバスにて送迎",
    "parkingInformation": "有り　５台　無料　先着順",
    "nearestStation": "宮島口",
    "hotelSpecial": "すべてはお客様の満足と笑顔のために。宮島の歴史とともに時を重ねる、世界遺産「厳島神社」に最も近い宿。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D18848",
    "label": "広島県廿日市市ふるさと納税・海上に浮かぶ朱塗りの大鳥居「世界遺産・厳島神社」蔵宿いろは",
    "themeTitle": "広島県廿日市市ふるさと納税：厳島神社大鳥居へ徒歩数分・数寄屋造りの老舗名旅館「宮島グランドホテル 有もと」",
    "themeDesc": "江戸初期の創業以来、宮島・厳島神社への参拝客を迎えてきた歴史ある純和風旅館。夜のライトアップされた海上大鳥居の散策や、早朝の静謐な境内参拝に最高の立地を誇り、瀬戸内海の天然真鯛や厳選された広島牡蠣会席を心ゆくまで堪能できます。",
    "revAvg": "4.6",
    "minCharge": "14,200"
  },
  {
    "hotelNo": 1148,
    "hotelName": "奈良ホテル",
    "hotelKanaName": "ならほてる",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D1148",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D1148%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D1148",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D1148",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/1148/1148.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/1148.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/1148/1148_twn.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/1148/1148map.gif",
    "reviewCount": 1721,
    "reviewAverage": 4.63,
    "userReview": "朝食スタッフの笑顔と心配りに感激!朝食時のスタッフの対応の美しさと心配りに感激しました!素晴らしい笑顔とスムーズな動きでした! クチコミの詳細はこちらから　https://review.tra…",
    "hotelMinCharge": 14720,
    "address1": "奈良県",
    "address2": "奈良市高畑町1096",
    "telephoneNo": "0570-66-6088",
    "access": "近鉄奈良駅東改札口B出口より徒歩約15分。タクシーで5分。路線バス（天理方面行き3番のりば）約7分",
    "parkingInformation": "有り　100台　１泊　無料",
    "nearestStation": "近鉄奈良",
    "hotelSpecial": "関西の迎賓館として1909年創業。伝統のおもてなしで心に残る旅を。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D1148",
    "label": "奈良県奈良市ふるさと納税・原生林に抱かれた一之鳥居と古都の祈り「春日大社」ホテルニュー若草",
    "themeTitle": "奈良県奈良市ふるさと納税：春日大社一之鳥居の参道に寄り添う関西の迎賓館「奈良ホテル」",
    "themeDesc": "明治42年創業、辰野金吾氏が手がけた桃山御殿風檜造りの重厚な建築美を誇る名門クラシックホテル。春日大社や奈良公園の緑に抱かれ、名画やアンティーク家具に囲まれた上質な空間で、伝統のフランス料理や大和野菜を贅沢に味わえます。",
    "revAvg": "4.6",
    "minCharge": "14,720"
  },
  {
    "hotelNo": 128494,
    "hotelName": "敦賀マンテンホテル駅前（マンテンホテルグループ）",
    "hotelKanaName": "つるがまんてんほてるえきまえ（まんてんほてるぐるーぷ）",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D128494",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D128494%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D128494",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D128494",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/128494/128494.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/128494.jpg",
    "roomImageUrl": "",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/128494/128494map.gif",
    "reviewCount": 1517,
    "reviewAverage": 4.2,
    "userReview": "駅近で便利、ビジネス利用には十分な環境旅の経由地として利用しました。当日までキャンセル無料ということで予約しました。駅から近くて良かったです。ビジネスで利用するには十分でしょうが、旅行者としては、…",
    "hotelMinCharge": 4900,
    "address1": "福井県",
    "address2": "敦賀市国広町401-4",
    "telephoneNo": "0770-25-0100",
    "access": "ＪＲ敦賀駅西口より徒歩約１分　／　敦賀ＩＣより車で５分",
    "parkingInformation": "無料駐車場４５台（先着順・予約不可・車椅子専用P有）／満車時は近隣駐車場へ案内いたします（有料）",
    "nearestStation": "敦賀",
    "hotelSpecial": "ＪＲ敦賀駅西口徒歩１分・男女別大浴場・シモンズベッド・個別エアコン・温便座シャワートイレ",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D128494",
    "label": "福井県敦賀市ふるさと納税・木造大鳥居がそびえる北陸道総鎮守「気比神宮」敦賀マンテンホテル駅前",
    "themeTitle": "福井県敦賀市ふるさと納税：重要文化財の大鳥居・気比神宮への参拝拠点「敦賀マンテンホテル駅前」",
    "themeDesc": "JR敦賀駅前に位置し、北陸道総鎮守・気比神宮の大鳥居参拝や若狭湾観光の拠点として抜群の利便性を誇るシティホテル。開放的な大浴場（サウナ付）で旅の疲れを癒やし、日本海の新鮮な海の幸や福井名物のソースカツ丼など地産グルメを楽しめます。",
    "revAvg": "4.2",
    "minCharge": "4,900"
  }
];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* パンくずリスト */}
      <nav className="bg-white border-b border-slate-200 py-3 px-4 text-xs text-slate-500">
        <div className="max-w-5xl mx-auto flex items-center space-x-2">
          <Link href="/" className="hover:text-emerald-600 transition">ホーム</Link>
          <span>&gt;</span>
          <span className="text-slate-700 font-medium">日本三大鳥居＆神聖なる巨木の門・古都名宿×ふるさと納税ガイド</span>
        </div>
      </nav>

      {/* ヒーローヘッダー */}
      <header className="relative bg-gradient-to-br from-emerald-950 via-slate-900 to-teal-950 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-block bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-semibold px-3 py-1 rounded-full mb-2">
            日本三大鳥居・神域巡礼特集
          </div>
          <h1 className="text-2xl md:text-4xl font-bold leading-tight tracking-tight">
            日本三大鳥居＆神聖なる巨木の門・古都名宿×ふるさと納税ガイド
          </h1>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-3xl mx-auto pt-2">
            日本古来の神仏への祈りを象徴し、その壮大なスケールと美しさから語り継がれる「日本三大鳥居」――瀬戸内海の潮の満ち引きによって海中に浮かび、あるいは歩いて間近まで近づける世界遺産・広島の「宮島・厳島神社大鳥居」、春日山原始林を背景に古都奈良の参道を堂々と迎える奈良の「春日大社一之鳥居」、そして北陸道総鎮守として国の重要文化財に指定され佐渡の神木で建てられた福井の「敦賀・気比神宮大鳥居」。神聖な朝の参拝や静かな参道散策、土地の伝統食材を味わう旅を楽天ふるさと納税でお楽しみください。
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
            青空や海に映える朱と木の神門。悠久の歴史と祈りに触れる聖地ステイ
          </h2>
          <p className="text-slate-600 leading-relaxed text-sm md:text-base">
            日本古来の神仏への祈りを象徴し、その壮大なスケールと美しさから語り継がれる「日本三大鳥居」――瀬戸内海の潮の満ち引きによって海中に浮かび、あるいは歩いて間近まで近づける世界遺産・広島の「宮島・厳島神社大鳥居」、春日山原始林を背景に古都奈良の参道を堂々と迎える奈良の「春日大社一之鳥居」、そして北陸道総鎮守として国の重要文化財に指定され佐渡の神木で建てられた福井の「敦賀・気比神宮大鳥居」。神聖な朝の参拝や静かな参道散策、土地の伝統食材を味わう旅を楽天ふるさと納税でお楽しみください。
          </p>
        </section>

        {/* メリット3選 */}
        <section className="space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
              ふるさと納税×日本三大鳥居神域巡礼 3つのメリット
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
                  観光客が少ない静寂の早朝参拝！鳥居の神秘的な姿を心ゆくまで体感できる門前町ステイ
                </h3>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                  朝靄や朝日に照らされる大鳥居と社殿の荘厳な姿を、近隣の宿に宿泊するからこそゆったりと拝観。
                </p>
              </div>
            </div>
            <div key="1" className="bg-white rounded-xl p-6 shadow-sm border border-slate-200/80 flex flex-col justify-between hover:border-emerald-300 transition duration-200">
              <div className="space-y-3">
                <span className="inline-block w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 font-bold text-center leading-8 text-sm">
                  02
                </span>
                <h3 className="font-bold text-base text-slate-900 leading-snug">
                  瀬戸内の牡蠣・穴子、大和牛や奈良茶粥、若狭湾の越前ガニや甘エビなど地産美味
                </h3>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                  古代から続く門前町や港町で育まれてきた、滋味深く華やかな郷土の会席料理を満喫。
                </p>
              </div>
            </div>
            <div key="2" className="bg-white rounded-xl p-6 shadow-sm border border-slate-200/80 flex flex-col justify-between hover:border-emerald-300 transition duration-200">
              <div className="space-y-3">
                <span className="inline-block w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 font-bold text-center leading-8 text-sm">
                  03
                </span>
                <h3 className="font-bold text-base text-slate-900 leading-snug">
                  楽天ふるさと納税宿泊クーポンで憧れの老舗クラシックホテルや温泉旅館をお得に予約
                </h3>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                  歴史旅や夫婦の神社巡拝でも、寄付金額に応じた最大30%オフの即時割引クーポンでスマートにお得ステイ。
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
            
            <Link href="/furusato-tax-three-great-castles-historic-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三大名城＆不落の巨城を望む城見ステイ×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                熊本・名古屋・大阪。
              </p>
            </Link>
            <Link href="/furusato-tax-three-great-bell-towers-historic-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三大名鐘＆心の琴線に響く鐘楼・寺町宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                知恩院・平等院・三井寺。
              </p>
            </Link>
            <Link href="/furusato-tax-three-great-inari-shrines-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三大稲荷＆朱鳥居回廊・門前宿ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                伏見・笠間・祐徳。
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
