import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '日本三大古都＆千年千載の雅と武家の誇り・歴史息づく町並み宿×ふるさと納税完全ガイド【2026年最新】京都・奈良・鎌倉',
  description: '日本の美と歴史の原点を巡る三大古都グランドツアー！京都「平安京・祇園」千年の美意識と伝統の雅・京乃宿ギオン福住、奈良「平城京・ならまち」シルクロードの終着点と天平文化・ホテルアジール奈良、神奈川「鎌倉幕府・由比ヶ浜」源頼朝の武家文化と相模湾の潮風・鎌倉パークホテル。国宝寺社巡り、路地散策、伝統会席とフレンチを楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
  keywords: '日本三大古都・歴史遺産特集, 楽天ふるさと納税, 温泉宿, ふるさと納税 旅行, 高級旅館, ホテル予約, 2026年旅行',
  openGraph: {
    title: '日本三大古都＆千年千載の雅と武家の誇り・歴史息づく町並み宿×ふるさと納税完全ガイド【2026年最新】京都・奈良・鎌倉',
    description: '日本の美と歴史の原点を巡る三大古都グランドツアー！京都「平安京・祇園」千年の美意識と伝統の雅・京乃宿ギオン福住、奈良「平城京・ならまち」シルクロードの終着点と天平文化・ホテルアジール奈良、神奈川「鎌倉幕府・由比ヶ浜」源頼朝の武家文化と相模湾の潮風・鎌倉パークホテル。国宝寺社巡り、路地散策、伝統会席とフレンチを楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    type: 'article',
    url: 'https://croud-travel.pages.dev/furusato-tax-three-great-ancient-capitals-heritage-stay',
    siteName: 'トラベルポータル',
  },
};

export default function Page() {
  const officialAffUrl = 'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F';

  const hotels = [
  {
    "hotelNo": 59645,
    "hotelName": "春夏秋雪　京乃宿　ギオン福住",
    "hotelKanaName": "ぎおんふくずみ",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D59645",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D59645%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D59645",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D59645",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/59645/59645.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/59645.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/59645/59645_k1.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/59645/59645map.gif",
    "reviewCount": 292,
    "reviewAverage": 4.45,
    "userReview": "親切なスタッフに感謝、また泊まりたい宿の方々がとても親切な宿で、色々助かりました。また泊まりたいと思います。クチコミの詳細はこちらから　https://review.travel.rakute…",
    "hotelMinCharge": 14025,
    "address1": "京都府",
    "address2": "京都市東山区東大路新橋西入",
    "telephoneNo": "075-541-5181",
    "access": "京都駅バスターミナルD乗り場より、市バス１００（快速）・２０６系統祇園バス停下車、進行方向に約５０メートル左側。",
    "parkingInformation": "有1台/1泊2500円、バイク1台/1泊1000円　4台まで要問合",
    "nearestStation": "京都",
    "hotelSpecial": "知恩院門前、八坂神社徒歩２分、清水寺や高台寺への東山散策に最適。東山を望む展望風呂と本格京会席料理。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D59645",
    "label": "京都府京都市ふるさと納税・千年の都・花街と八坂神社の情緒に包まれる「古都京都」ぎおん畑中",
    "themeTitle": "京都府京都市東山区ふるさと納税：祇園の真ん中・八坂神社へ徒歩数分・京の情緒を満喫「春夏秋雪 京乃宿 ギオン福住」",
    "themeDesc": "祇園のメインストリート知恩院道に面し、東山・八坂神社や清水寺散策の拠点に抜群のロケーションを誇る純和風旅館。数寄屋造りの客室で寛ぎ、四季折々の京野菜や厳選された旬食材をふんだんに盛り込んだ本格的な京懐石ディナーを部屋食で楽しめます。",
    "revAvg": "4.5",
    "minCharge": "14,025"
  },
  {
    "hotelNo": 9404,
    "hotelName": "ホテル　アジール・奈良",
    "hotelKanaName": "あじーる　なら",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D9404",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D9404%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D9404",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D9404",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/9404/9404.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/9404.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/9404/9404_twn.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/9404/9404map.gif",
    "reviewCount": 1504,
    "reviewAverage": 4.15,
    "userReview": "立地抜群で接客も良く、朝食も美味しい家族4人で利用させて頂きました。接客サービスが良くて、大変満足出来ました。奈良駅と東大寺、奈良公園の中間くらいにあり立地条件は抜群だと思いました。…",
    "hotelMinCharge": 3830,
    "address1": "奈良県",
    "address2": "奈良市油阪町1-58",
    "telephoneNo": "0742-22-2577",
    "access": "JR奈良駅東口より徒歩約5分、近鉄奈良駅7番出口より徒歩約7分",
    "parkingInformation": "1台1300円/泊※1週間前より予約可能、当日は14時から駐車可能です　※近隣コインパーキング有",
    "nearestStation": "近鉄奈良",
    "hotelSpecial": "JR奈良駅から徒歩5分の駅チカでありながら、ゆったりと流れる時間と人の温かさに癒される寛ぎのホテル",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D9404",
    "label": "奈良県奈良市ふるさと納税・シルクロードの終着点・天平文化息づく「古都奈良」登大路ホテル奈良",
    "themeTitle": "奈良県奈良市ふるさと納税：興福寺やならまちへ徒歩圏内・大浴場と奈良の温もり「ホテル アジール・奈良」",
    "themeDesc": "JR奈良駅から徒歩数分、火の温もりと木を基調とした落ち着いた空間が広がる隠れ家ホテル。奈良公園や東大寺散策の拠点に便利で、大浴場でリフレッシュした後は、大和牛や大和茶など奈良の地産食材をふんだんに使った創作料理を堪能できます。",
    "revAvg": "4.2",
    "minCharge": "3,830"
  },
  {
    "hotelNo": 31648,
    "hotelName": "鎌倉パークホテル",
    "hotelKanaName": "かまくら　ぱーくほてる",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D31648",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D31648%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D31648",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D31648",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/31648/31648.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/31648.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/31648/31648_t.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/31648/31648map.gif",
    "reviewCount": 1317,
    "reviewAverage": 4.43,
    "userReview": "2回目の利用だが今回は残念な点が多かった2回目の利用。夏休みに家族で利用。部屋に入った際、トイレなのか非常に匂った。洋食の夕食はイマイチだった。ここは恐らく和食の方が腕がいい。今回は残念な点が多か…",
    "hotelMinCharge": 9350,
    "address1": "神奈川県",
    "address2": "鎌倉市坂ノ下33-6",
    "telephoneNo": "0467-25-5121",
    "access": "ＪＲ鎌倉駅よりタクシーにて１０～１５分(平常時）。江ノ電長谷駅より徒歩約１３分。",
    "parkingInformation": "有 ６０台。チェックイン日は午前中から無料、チェックアウト後は１４時まで無料、それ以降は有料です。",
    "nearestStation": "鎌倉",
    "hotelSpecial": "ヨーロッパのインテリアが配された落ち着いた雰囲気のアーバンリゾートホテル。大仏などの観光にも便利。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D31648",
    "label": "神奈川県鎌倉市ふるさと納税・武士の都・切通しと相模湾の潮風が薫る「古都鎌倉」鎌倉パークホテル",
    "themeTitle": "神奈川県鎌倉市ふるさと納税：由比ヶ浜海岸まで徒歩すぐ・相模湾の潮風と古都の歴史を感じる「鎌倉パークホテル」",
    "themeDesc": "湘南・由比ヶ浜に面し、長谷寺や高徳院（鎌倉大仏）への散策に好立地な欧風リゾートホテル。ヨーロッパのインテリアで統一された洗練された客室で寛ぎ、相模湾の獲れたて鮮魚や三浦・鎌倉野菜を取り入れた本格フレンチ・日本料理を味わえます。",
    "revAvg": "4.4",
    "minCharge": "9,350"
  }
];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* パンくずリスト */}
      <nav className="bg-white border-b border-slate-200 py-3 px-4 text-xs text-slate-500">
        <div className="max-w-5xl mx-auto flex items-center space-x-2">
          <Link href="/" className="hover:text-emerald-600 transition">ホーム</Link>
          <span>&gt;</span>
          <span className="text-slate-700 font-medium">日本三大古都＆歴史絵巻の町並み・伝統名宿×ふるさと納税ガイド</span>
        </div>
      </nav>

      {/* ヒーローヘッダー */}
      <header className="relative bg-gradient-to-br from-emerald-950 via-slate-900 to-teal-950 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-block bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-semibold px-3 py-1 rounded-full mb-2">
            日本三大古都・歴史遺産特集
          </div>
          <h1 className="text-2xl md:text-4xl font-bold leading-tight tracking-tight">
            日本三大古都＆歴史絵巻の町並み・伝統名宿×ふるさと納税ガイド
          </h1>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-3xl mx-auto pt-2">
            時代ごとの政治と文化の中心地として栄え、日本の美意識と歴史の骨格を形作ってきた「日本三大古都」――平安建都以来千年にわたり雅やかな宮廷文化と茶道・花道・京料理を育んできた京都の「京都（平安京）」、シルクロードを経て伝来した仏教美術と広大な奈良公園の鹿・世界遺産社寺が息づく奈良の「奈良（平城京）」、そして三方を山に囲まれ天然の要塞に武家政権を打ち立て禅と鎌倉彫の文化が薫る神奈川の「鎌倉（鎌倉幕府）」。夕暮れの町家や古刹をそぞろ歩き、静かな宿で伝統の美味に舌鼓を打つ極上の旅を楽天ふるさと納税でお楽しみください。
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
            石畳の路地に響く下駄の音。日本の精神と文化を育んだ三大古都へ
          </h2>
          <p className="text-slate-600 leading-relaxed text-sm md:text-base">
            時代ごとの政治と文化の中心地として栄え、日本の美意識と歴史の骨格を形作ってきた「日本三大古都」――平安建都以来千年にわたり雅やかな宮廷文化と茶道・花道・京料理を育んできた京都の「京都（平安京）」、シルクロードを経て伝来した仏教美術と広大な奈良公園の鹿・世界遺産社寺が息づく奈良の「奈良（平城京）」、そして三方を山に囲まれ天然の要塞に武家政権を打ち立て禅と鎌倉彫の文化が薫る神奈川の「鎌倉（鎌倉幕府）」。夕暮れの町家や古刹をそぞろ歩き、静かな宿で伝統の美味に舌鼓を打つ極上の旅を楽天ふるさと納税でお楽しみください。
          </p>
        </section>

        {/* メリット3選 */}
        <section className="space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
              ふるさと納税×日本三大古都歴史遺産 3つのメリット
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
                  日帰りの混雑を避けて古都本来の静寂を味わう！夜のライトアップや早朝の路地散歩
                </h3>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                  観光客で溢れる日中とは異なる、静けさに包まれた古都の本来の美しさをゆったり体感。
                </p>
              </div>
            </div>
            <div key="1" className="bg-white rounded-xl p-6 shadow-sm border border-slate-200/80 flex flex-col justify-between hover:border-emerald-300 transition duration-200">
              <div className="space-y-3">
                <span className="inline-block w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 font-bold text-center leading-8 text-sm">
                  02
                </span>
                <h3 className="font-bold text-base text-slate-900 leading-snug">
                  京懐石ディナー・奈良の大和牛と伝統の葛料理、鎌倉の地魚や鎌倉野菜フレンチ
                </h3>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                  各古都で磨き抜かれてきた、素材の滋味と職人の技が光る最高峰のディナーを堪能。
                </p>
              </div>
            </div>
            <div key="2" className="bg-white rounded-xl p-6 shadow-sm border border-slate-200/80 flex flex-col justify-between hover:border-emerald-300 transition duration-200">
              <div className="space-y-3">
                <span className="inline-block w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 font-bold text-center leading-8 text-sm">
                  03
                </span>
                <h3 className="font-bold text-base text-slate-900 leading-snug">
                  楽天ふるさと納税宿泊クーポンで憧れの老舗旅館や洗練されたホテルをお得に予約
                </h3>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                  歴史探訪や大人のご褒美旅行でも、寄付金額に応じた最大30%オフの即時割引クーポンでスマートにお得ステイ。
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
            あわせて読みたい日本の名所・絶景と歴史の宿特集
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
            <Link href="/furusato-tax-three-great-post-towns-nakasendo-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三大宿場町＆木曽路の出桁造り・街道名宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                妻籠宿・馬籠宿・奈良井宿。
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
