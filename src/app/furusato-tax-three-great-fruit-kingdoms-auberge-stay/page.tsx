import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '日本三大フルーツ王国＆もぎたて果実の恵み・果樹園パノラマと美食リゾート×ふるさと納税完全ガイド【2026年最新】山梨・山形・長野',
  description: '太陽を浴びた旬の果実とスイーツの楽園！山梨笛吹「ぶどう・桃の郷」甲府盆地を見下ろすフルーツパーク富士屋ホテル、山形天童「さくらんぼ佐藤錦・ラフランス」将棋と果樹園の天童温泉滝の湯、長野須坂・小布施「シャインマスカット・信州りんご」栗と果樹の欧風オーベルジュ小布施の宿ヴァンヴェール。日本三大フルーツ王国の贅沢な果実旅を楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
  keywords: '日本三大フルーツ・果樹園美味特集, 楽天ふるさと納税, 温泉宿, ふるさと納税 旅行, 高級旅館, ホテル予約, 2026年旅行',
  openGraph: {
    title: '日本三大フルーツ王国＆もぎたて果実の恵み・果樹園パノラマと美食リゾート×ふるさと納税完全ガイド【2026年最新】山梨・山形・長野',
    description: '太陽を浴びた旬の果実とスイーツの楽園！山梨笛吹「ぶどう・桃の郷」甲府盆地を見下ろすフルーツパーク富士屋ホテル、山形天童「さくらんぼ佐藤錦・ラフランス」将棋と果樹園の天童温泉滝の湯、長野須坂・小布施「シャインマスカット・信州りんご」栗と果樹の欧風オーベルジュ小布施の宿ヴァンヴェール。日本三大フルーツ王国の贅沢な果実旅を楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    type: 'article',
    url: 'https://croud-travel.pages.dev/furusato-tax-three-great-fruit-kingdoms-auberge-stay',
    siteName: 'トラベルポータル',
  },
};

export default function Page() {
  const officialAffUrl = 'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F';

  const hotels = [
  {
    "hotelNo": 1221,
    "hotelName": "フルーツパーク富士屋ホテル",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D1221",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D1221%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D1221",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D1221",
    "hotelKanaName": "ふるーつぱーく　ふじやほてる",
    "hotelSpecial": "小高い丘のホテルからは富士山などの山々を望む大パノラマと、宝石のような夜景・星空を四季折々楽しめます",
    "hotelMinCharge": 10065,
    "address1": "山梨県",
    "address2": "山梨市江曽原1388　笛吹川フルーツ公園内",
    "telephoneNo": "0553-22-8811",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/1221/1221.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/1221/1221_twn.jpg",
    "reviewCount": 779,
    "reviewAverage": 4.59,
    "userReview": "また訪れたい場所ワイナリー巡り目的で家族と宿泊しました。残念ながら当日は曇りで、富士山は一部しか眺められませんでしたが、ホテルからの夜景は素晴らしく、周辺も自然豊かで、リラックスした時間を過ごせま…　 ",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D1221",
    "access": "ＪＲ中央線山梨市駅から車で7分。",
    "label": "山梨県山梨市・笛吹市ふるさと納税・桃とぶどうの生産量日本一を誇る甲府盆地「山梨フルーツ王国」華やぎの章慶山",
    "themeTitle": "山梨県山梨市ふるさと納税：新日本三大夜景とフルーツパーク直結の丘の上リゾート「フルーツパーク富士屋ホテル」",
    "themeDesc": "甲府盆地と霊峰富士を見晴らす笛吹川フルーツ公園の頂に建つ南欧風リゾートホテル。開放的な客室や温泉大浴場を備え、山梨県産フルーツを贅沢に使った名物パフェやスイーツ、本格フレンチと甲州ワインのマリアージュを楽しめます。",
    "revAvg": "4.6",
    "minCharge": "10,065"
  },
  {
    "hotelNo": 53746,
    "hotelName": "天童温泉　ほほえみの宿　滝の湯",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D53746",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D53746%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D53746",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D53746",
    "hotelKanaName": "てんどうおんせん　ほほえみのやど　たきのゆ",
    "hotelSpecial": "天童温泉と宿泊者専用ラウンジで、心身をやさしく整える滞在をお楽しみください。",
    "hotelMinCharge": 17050,
    "address1": "山形県",
    "address2": "天童市鎌田本町1-1-30",
    "telephoneNo": "023-654-2211",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/53746/53746.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/53746/53746_ro.jpg",
    "reviewCount": 1030,
    "reviewAverage": 4.58,
    "userReview": "豪華な夕食と温泉で心身ともにリフレッシュ15時少し前に到着し、店員さんがお出迎えして下さりチェックインしました。親子4人で利用しました。夕食は豪華な料理で堪能し、お腹一杯になり大満足でした。だ…　 ",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D53746",
    "access": "ＪＲ山形新幹線　天童駅より車にて３分、徒歩にて１５分（無料送迎あり）　山形北ＩＣより２０分",
    "label": "山形県天童市・寒河江市ふるさと納税・赤いルビー佐藤錦とラ・フランスの極み「山形フルーツ街道」天童温泉滝の湯",
    "themeTitle": "山形県天童市ふるさと納税：さくらんぼの里・自家源泉の名湯とオープンキッチン「天童温泉 ほほえみの宿 滝の湯」",
    "themeDesc": "果樹園地帯に囲まれた天童温泉を代表する名旅館。豊かな湯量を誇る自家源泉の大浴場や露天風呂で温まり、山形牛ステーキや地元契約農家の有機野菜、旬のさくらんぼやラ・フランスを使ったデザートを心ゆくまで味わえます。",
    "revAvg": "4.6",
    "minCharge": "17,050"
  },
  {
    "hotelNo": 27852,
    "hotelName": "小布施の宿　ヴァンヴェール",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D27852",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D27852%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D27852",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D27852",
    "hotelKanaName": "おぶせのやど　う゛ぁんう゛ぇーる",
    "hotelSpecial": "小布施の町の中心にあり観光に町歩きに便利。和風の建物に館内はフランスのプチホテルの雰囲気。",
    "hotelMinCharge": 9900,
    "address1": "長野県",
    "address2": "上高井郡小布施町小布施34-8",
    "telephoneNo": "026-247-5512",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/27852/27852.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/27852/27852_twn.jpg",
    "reviewCount": 84,
    "reviewAverage": 4.54,
    "userReview": "",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D27852",
    "access": "長野電鉄・小布施駅より徒歩1０分、上信越自動車道・小布施スマートインターよりお車にて５分",
    "label": "長野県小布施町・須坂市ふるさと納税・栗とりんごの里の欧風オーベルジュ「小布施フルーツ街道」小布施の宿ヴァンヴェール",
    "themeTitle": "長野県小布施町ふるさと納税：栗やりんごの果樹園に囲まれた瀟洒な欧風の宿「小布施の宿 ヴァンヴェール」",
    "themeDesc": "北斎館や小布施の町並み散策に便利な、静かな佇まいのフレンチオーベルジュ風ホテル。長野県産のりんごや信州牛、小布施栗を取り入れた欧風ディナーと心づくしのおもてなしで、信州フルーツ街道の旅を優雅に締めくくります。",
    "revAvg": "4.5",
    "minCharge": "9,900"
  }
];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* パンくずリスト */}
      <nav className="bg-white border-b border-slate-200 py-3 px-4 text-xs text-slate-500">
        <div className="max-w-5xl mx-auto flex items-center space-x-2">
          <Link href="/" className="hover:text-emerald-600 transition">ホーム</Link>
          <span>&gt;</span>
          <span className="text-slate-700 font-medium">日本三大フルーツ王国＆もぎたて果実の美食リゾート×ふるさと納税ガイド</span>
        </div>
      </nav>

      {/* ヒーローヘッダー */}
      <header className="relative bg-gradient-to-br from-emerald-950 via-slate-900 to-teal-950 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-block bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-semibold px-3 py-1 rounded-full mb-2">
            日本三大フルーツ・果樹園美味特集
          </div>
          <h1 className="text-2xl md:text-4xl font-bold leading-tight tracking-tight">
            日本三大フルーツ王国＆もぎたて果実の美食リゾート×ふるさと納税ガイド
          </h1>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-3xl mx-auto pt-2">
            澄んだ空気、昼夜の寒暖差、そして清らかな山水が奇跡の甘みと香りを育む「日本三大フルーツ王国」――甲府盆地の扇状地に広大な果樹園が広がり桃とぶどうの生産量日本一を誇る山梨の「山梨・笛吹」、初夏を彩る赤いルビー佐藤錦をはじめ西洋梨ラ・フランスや桃が実る山形の「山形・天童・寒河江」、そして標高の高い冷涼な気候を活かして甘みたっぷりの信州りんご三兄弟や大粒シャインマスカットが実る長野の「信州・須坂・小布施」。果樹園での収穫体験やパフェ・ワインを堪能した後は、名湯露天風呂や地元産フルーツを取り入れた極上フレンチ・創作会席に酔いしれる贅沢な旅を楽天ふるさと納税でお楽しみください。
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
            みずみずしい果汁が溢れる旬の恵み。果樹園のパノラマと優雅なオーベルジュステイ
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>桃・ぶどう・さくらんぼ・シャインマスカット・りんご！旬のプレミアム果実三昧</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                採れたて完熟の果物を贅沢に使った特製パフェやスイーツ、ワイナリー巡りも満喫。
              </p>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>甲州牛と勝沼ワイン、山形牛と米沢牛ステーキ、信州プレミアム牛と信州サーモン</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                フルーツ王国ならではの芳醇な地元ワインと、最高級ブランド和牛ディナーを堪能。
              </p>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>楽天ふるさと納税宿泊クーポンで丘の上のリゾートホテルや老舗温泉宿をお得に予約</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                果樹園ドライブや女子旅・家族旅行でも、寄付金額に応じた最大30%オフの即時割引クーポンでスマートにお得ステイ。
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
            
            <Link href="/furusato-tax-winery-craft-beer-auberge-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                ワイン＆地ビール×醸造オーベルジュ旅ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                勝沼・富良野・余市。
              </p>
            </Link>
            
            <Link href="/furusato-tax-highland-resort-french-auberge-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                高原リゾート＆美食フレンチオーベルジュ×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                那須・清里・裏磐梯。
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
