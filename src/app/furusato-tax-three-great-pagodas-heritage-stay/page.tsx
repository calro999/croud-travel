import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '日本三大五重塔＆天を衝く木造美・国宝の塔と古都・門前名宿×ふるさと納税完全ガイド【2026年最新】法隆寺・東寺・羽黒山',
  description: '日本木造建築の最高峰！世界最古の木造建築群を擁する飛鳥の至宝「法隆寺五重塔」門前宿和空法隆寺、現存木造塔として日本一の高さ約55mを誇る密教のシンボル「東寺五重塔」リーガロイヤルホテル京都、杉並木の深山に溶け込む東北最古の国宝美「羽黒山五重塔」湯田川温泉九兵衛旅館。日本三大五重塔の美と歴史ロマンを楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
  keywords: '日本三大五重塔・国宝建築特集, 楽天ふるさと納税, 温泉宿, ふるさと納税 旅行, 高級旅館, ホテル予約, 2026年旅行',
  openGraph: {
    title: '日本三大五重塔＆天を衝く木造美・国宝の塔と古都・門前名宿×ふるさと納税完全ガイド【2026年最新】法隆寺・東寺・羽黒山',
    description: '日本木造建築の最高峰！世界最古の木造建築群を擁する飛鳥の至宝「法隆寺五重塔」門前宿和空法隆寺、現存木造塔として日本一の高さ約55mを誇る密教のシンボル「東寺五重塔」リーガロイヤルホテル京都、杉並木の深山に溶け込む東北最古の国宝美「羽黒山五重塔」湯田川温泉九兵衛旅館。日本三大五重塔の美と歴史ロマンを楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    type: 'article',
    url: 'https://croud-travel.pages.dev/furusato-tax-three-great-pagodas-heritage-stay',
    siteName: 'トラベルポータル',
  },
};

export default function Page() {
  const officialAffUrl = 'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F';

  const hotels = [
  {
    "hotelNo": 177058,
    "hotelName": "門前宿　和空法隆寺",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D177058",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D177058%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D177058",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D177058",
    "hotelKanaName": "もんぜんやど　わくう　ほうりゅうじ",
    "hotelSpecial": "◆日本唯一のハイクラス門前旅館◆名店神田川の懐石◆文化体験◆語り部と巡る法隆寺ツアー",
    "hotelMinCharge": 9300,
    "address1": "奈良県",
    "address2": "西方館：生駒郡班鳩町法隆寺1-5-32  東方館：生駒郡班鳩町法隆寺1-4-46",
    "telephoneNo": "0745-70-1155",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/177058/177058.jpg",
    "roomImageUrl": "",
    "reviewCount": 409,
    "reviewAverage": 4.58,
    "userReview": "法隆寺のすぐそばで立地最高、案内も充実法隆寺のすぐそばで立地最高でした。無料での案内も非常に良かったです。時期を変えまた法隆寺の案内を聞きたいです。部屋も綺麗でしたが家族4人で泊まるに…　 ",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D177058",
    "access": "JR法隆寺駅よりお車にて約５分／徒歩にて約１８分",
    "label": "奈良県斑鳩町・奈良市ふるさと納税・世界最古の木造五重塔「法隆寺五重塔」奈良ホテル・和空ステイ",
    "themeTitle": "奈良県斑鳩町ふるさと納税：世界遺産・法隆寺のすぐ目の前・歴史に浸る上質な門前ステイ「門前宿 和空 法隆寺」",
    "themeDesc": "法隆寺参道に面し、東大寺や法隆寺の歴史を深く学べる語り部プログラムも好評な和の宿。奈良の木材を贅沢に使った温かみのある客室と、大和牛や奈良野菜を使った本格的な和会席で、悠久の飛鳥・斑鳩の夜を心静かに過ごせます。",
    "revAvg": "4.6",
    "minCharge": "9,300"
  },
  {
    "hotelNo": 108,
    "hotelName": "リーガロイヤルホテル京都",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D108",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D108%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D108",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D108",
    "hotelKanaName": "りーがろいやるほてる　きょうと",
    "hotelSpecial": "京都駅より徒歩約７分、名神京都南ICから車で約１０分",
    "hotelMinCharge": 5040,
    "address1": "���都府",
    "address2": "京都市下京区東堀川通り塩小路下ル松明町１番地",
    "telephoneNo": "075-341-1121",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/108/108.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/108/108_stwn.jpg",
    "reviewCount": 7171,
    "reviewAverage": 4.26,
    "userReview": "一流です。レストランすばらしい、接客もよかった。クチコミの詳細はこちらから　https://review.travel.rakuten.co.jp/hotel/voice/108?revi…　 ",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D108",
    "access": "京都駅より徒歩約７分、名神京都南ICから車で１０分",
    "label": "京都府京都市ふるさと納税・日本一の高さを誇る木造塔「東寺五重塔」リーガロイヤルホテル京都",
    "themeTitle": "京都府京都市ふるさと納税：東寺五重塔を借景に望むラグジュアリーホテル「リーガロイヤルホテル京都」",
    "themeDesc": "京都駅から徒歩圏内に位置し、東寺への朝の散策に最適なプレミアムホテル。フレンチや京料理、鉄板焼きなど多彩な名レストランを備え、観光後のくつろぎを約束する上質な客室とおもてなしで古都の滞在を優雅に彩ります。",
    "revAvg": "4.3",
    "minCharge": "5,040"
  },
  {
    "hotelNo": 12536,
    "hotelName": "湯田川温泉　九兵衛旅館",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D12536",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D12536%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D12536",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D12536",
    "hotelKanaName": "ゆだがわおんせん　くへえりょかん",
    "hotelSpecial": "13室の小さな湯宿♪珠玉の手づくりできたて料理を朝夕個室で堪能♪温泉は源泉かけ流しで露天、無料貸切♪",
    "hotelMinCharge": 9020,
    "address1": "山形県",
    "address2": "鶴岡市湯田川乙19",
    "telephoneNo": "0235-35-2777",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/12536/12536.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/12536/12536_ky.jpg",
    "reviewCount": 375,
    "reviewAverage": 4.81,
    "userReview": "全てが素晴らしく、その場で次回の予約を入れた接客や料理、部屋の設備や清潔さ全て良かったので、チエックアウト時に次の予約を入れました。良さを維持しているスタッフの皆さんありがとうございました…　 ",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D12536",
    "access": "ＪＲ羽越線鶴岡駅よりバス25分／庄内空港よりタクシー30分／山形自動車道鶴岡ＩＣより15分",
    "label": "山形県鶴岡市ふるさと納税・杉木立に佇む国宝の美「羽黒山五重塔」庄内名湯湯野浜温泉亀や",
    "themeTitle": "山形県鶴岡市ふるさと納税：羽黒山五重塔巡りの拠点・開湯千三百年を誇る名湯「湯田川温泉 九兵衛旅館」",
    "themeDesc": "出羽三山・羽黒山への参拝拠点として愛される、創業数百年の老舗木造名旅館。自家源泉の掛け流し温泉「山の湯」や金魚が泳ぐ大浴場、山形牛や庄内浜の朝獲れ地魚、名物の孟宗汁など極上の庄内会席が旅人を魅了します。",
    "revAvg": "4.8",
    "minCharge": "9,020"
  }
];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* パンくずリスト */}
      <nav className="bg-white border-b border-slate-200 py-3 px-4 text-xs text-slate-500">
        <div className="max-w-5xl mx-auto flex items-center space-x-2">
          <Link href="/" className="hover:text-emerald-600 transition">ホーム</Link>
          <span>&gt;</span>
          <span className="text-slate-700 font-medium">日本三大五重塔＆国宝木造美・古都門前宿×ふるさと納税ガイド</span>
        </div>
      </nav>

      {/* ヒーローヘッダー */}
      <header className="relative bg-gradient-to-br from-emerald-950 via-slate-900 to-teal-950 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-block bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-semibold px-3 py-1 rounded-full mb-2">
            日本三大五重塔・国宝建築特集
          </div>
          <h1 className="text-2xl md:text-4xl font-bold leading-tight tracking-tight">
            日本三大五重塔＆国宝木造美・古都門前宿×ふるさと納税ガイド
          </h1>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-3xl mx-auto pt-2">
            地震大国・日本において千数百年もの間倒れることなく立ち続け、心柱構造による免震の知恵と宮大工の神技を今に伝える「日本三大五重塔（国宝指定の最高峰）」――推古天皇の時代に建立され法隆寺西院伽藍の中心にそびえる世界最古の木造塔である奈良斑鳩の「法隆寺五重塔」、弘法大師空海が構想し徳川家光の再建によって約55mという日本一の木造高さを誇る古都の象徴・京都の「東寺五重塔」、そして樹齢数百年の爺スギが立ち並ぶ羽黒山の杜にひっそりと佇み杮葺き（こけらぶき）の素木造りが静謐な美を放つ山形庄内の「羽黒山五重塔」。凛とした歴史建築の美に心を洗われた後は、古都の精進・京懐石や庄内の山菜・日本海鮮魚を堪能する特別な旅を楽天ふるさと納税でお楽しみください。
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
            幾星霜の風雪を耐え抜いた木組みの奇跡。天を仰ぐ三重・五重の美しいシルエット
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>飛鳥の古代美・京都の壮大パノラマ・羽黒山の神秘の森！三者三様の国宝建築鑑賞</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                夕暮れにシルエットが浮かび上がる瞬間や、早朝の澄んだ空気の中での静寂参拝を体感。
              </p>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>大和牛と奈良茶粥、京都の旬の京懐石と湯葉、庄内豚と日本海寒鱈・山菜料理</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                歴史ある門前町と温泉郷が育んだ、洗練された郷土美食ディナーを満喫。
              </p>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>楽天ふるさと納税宿泊クーポンで門前宿や老舗温泉旅館をお得に予約</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                寺社巡礼や歴史散策の旅でも、寄付金額に応じた最大30%オフの即時割引クーポンでスマートにお得ステイ。
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
            
            <Link href="/furusato-tax-three-great-buddhas-heritage-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三大仏＆歴史古都・門前町の名宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                奈良・鎌倉・高岡大仏。
              </p>
            </Link>
            
            <Link href="/furusato-tax-temple-shukubo-shojin-mindfulness-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                古刹宿坊＆本格精進料理ステイ×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                高野山・善光寺・京都寺院。
              </p>
            </Link>
            
            <Link href="/furusato-tax-tangible-cultural-property-architectural-ryokan-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                登録有形文化財・宮大工名建築旅館×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                修善寺新井旅館・渋温泉金具屋。
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
