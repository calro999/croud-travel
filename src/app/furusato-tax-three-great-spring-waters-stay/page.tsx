import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '日本三大名水・湧水水源地＆清流酒蔵グルメ・名水露天風呂宿×ふるさと納税完全ガイド【2026年最新】黒部湧水群・白州尾白川・南阿蘇白川水源',
  description: '日本屈指の清らかな湧水と名水仕込みの絶品グルメ！富山黒部「黒部川扇状地湧水群」北アルプス雪解けの名水と大江戸温泉物語宇奈月グランドホテル、山梨北杜「白州尾白川名水」南アルプスの天然水・ウイスキーの聖地とグランドメルキュール八ヶ岳リゾート＆スパ、熊本南阿蘇「白川水源」毎分60トン自噴する阿蘇の恵みとオーベルジュ森のアトリエ南阿蘇ルナ天文台。日本三大名水の地を巡る極上ステイを楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
  keywords: '日本三大名水・湧水水源地特集, 楽天ふるさと納税, 温泉宿, ふるさと納税 旅行, 高級旅館, ホテル予約, 2026年旅行',
  openGraph: {
    title: '日本三大名水・湧水水源地＆清流酒蔵グルメ・名水露天風呂宿×ふるさと納税完全ガイド【2026年最新】黒部湧水群・白州尾白川・南阿蘇白川水源',
    description: '日本屈指の清らかな湧水と名水仕込みの絶品グルメ！富山黒部「黒部川扇状地湧水群」北アルプス雪解けの名水と大江戸温泉物語宇奈月グランドホテル、山梨北杜「白州尾白川名水」南アルプスの天然水・ウイスキーの聖地とグランドメルキュール八ヶ岳リゾート＆スパ、熊本南阿蘇「白川水源」毎分60トン自噴する阿蘇の恵みとオーベルジュ森のアトリエ南阿蘇ルナ天文台。日本三大名水の地を巡る極上ステイを楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    type: 'article',
    url: 'https://croud-travel.pages.dev/furusato-tax-three-great-spring-waters-stay',
    siteName: 'トラベルポータル',
  },
};

export default function Page() {
  const officialAffUrl = 'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F';

  const hotels = [
  {
    "hotelNo": 162778,
    "hotelName": "大江戸温泉物語　宇奈月グランドホテル",
    "hotelKanaName": "おおえどおんせんものがたり　うなづきぐらんどほてる",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D162778",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D162778%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D162778",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D162778",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/162778/162778.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/162778.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/162778/162778_kan1.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/162778/162778map.gif",
    "reviewCount": 890,
    "reviewAverage": 3.75,
    "userReview": "夜の海鮮食べ放題が美味しくて大満足!夜のバイキングは、海鮮食べ放題で美味しかったです!クチコミの詳細はこちらから　https://review.travel.rakuten.co.jp/hot…　2026-09-05 22:14:43投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=162778\" class=\"3click\">つづきはこちら</a>",
    "hotelMinCharge": 14100,
    "address1": "富山県",
    "address2": "黒部市宇奈月温泉267",
    "telephoneNo": "050-3615-3456",
    "access": "宇奈月温泉駅より徒歩　約５分",
    "parkingInformation": "８０台　予約不要　無料",
    "nearestStation": "宇奈月温泉",
    "hotelSpecial": "雄大な黒部峡谷の麓に佇む、抜群の透明度を誇る名湯が自慢の温泉ホテル",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D162778",
    "featureKey": "water_kurobe",
    "featureLabel": "富山県黒部市ふるさと納税・北アルプスの雪解け水が湧き出る名水の里「黒部川扇状地湧水群」宇奈月温泉ステイ",
    "themeTitle": "富山県黒部市ふるさと納税：黒部名水と宇奈月の美肌温泉を満喫「大江戸温泉物語 宇奈月グランドホテル」",
    "themeDesc": "北アルプスの名水が注ぐ黒部峡谷の玄関口に佇む温泉ホテル。日本有数の透明度を誇る名湯・宇奈月温泉の大浴場と露天風呂で寛ぎ、富山湾の新鮮な海の幸や名水で炊き上げたコシヒカリを朝夕の豪華バイキングで心ゆくまで楽しめます。",
    "revAvg": "3.8",
    "minCharge": "14,100"
  },
  {
    "hotelNo": 7759,
    "hotelName": "グランドメルキュール八ヶ岳リゾート＆スパ",
    "hotelKanaName": "ぐらんどめるきゅーるやつがたけりぞーとあんどすぱ",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D7759",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D7759%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D7759",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D7759",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/7759/7759.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/7759.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/7759/7759_din1.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/7759/7759map.gif",
    "reviewCount": 4417,
    "reviewAverage": 4.23,
    "userReview": "子供の遊び場が充実、また行きたい!とにかく子供の遊び場が充実しており、4歳1歳も大喜びで、滞在中はほとんど遊んでいました。親としては旅行の工程を色々考えていましたが、ここでの遊びが楽しすぎてなかな…　2026-09-05 16:42:42投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=7759\" class=\"3click\">つづきはこちら</a>",
    "hotelMinCharge": 6104,
    "address1": "山梨県",
    "address2": "北杜市大泉町西井出8240-1039",
    "telephoneNo": "03-6830-3918",
    "access": "（電車）甲斐大泉駅より送迎バス定期便あり。ダイヤは公式HPをご覧ください。（車）長坂ＩＣより約１５分程",
    "parkingInformation": "有り 乗用車179台　無料（先着順）",
    "nearestStation": "甲斐大泉",
    "hotelSpecial": "八ヶ岳の大自然に囲まれた、家族みんなが笑顔になれる全天候型アミューズメントホテル",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D7759",
    "featureKey": "water_hakushu",
    "featureLabel": "山梨県北杜市ふるさと納税・南アルプスの天然水とウイスキーの故郷「白州尾白川名水」八ヶ岳高原リゾートステイ",
    "themeTitle": "山梨県北杜市ふるさと納税：白州名水の郷・八ヶ岳の自然に抱かれた高原リゾート「グランドメルキュール八ヶ岳リゾート＆スパ」",
    "themeDesc": "南アルプス・甲斐駒ヶ岳の麓、白州名水エリアに程近い八ヶ岳南麓の高原リゾート。星空を望む露天風呂や温泉ラウンジを備え、名水で仕込まれた山梨ワインや地酒、甲州ワインビーフをはじめとする地域色豊かなビュッフェディナーを堪能できます。",
    "revAvg": "4.2",
    "minCharge": "6,104"
  },
  {
    "hotelNo": 18413,
    "hotelName": "オーベルジュ「森のアトリエ」　南阿蘇ルナ天文台",
    "hotelKanaName": "おーべるじゅ　もりのあとりえ　みなみあそ　るな　てんもんだい",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D18413",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D18413%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D18413",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D18413",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/18413/18413.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/18413.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/18413/18413_kan.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/18413/18413map.gif",
    "reviewCount": 298,
    "reviewAverage": 4.57,
    "userReview": "メゾネットの部屋と朝食に子供も大喜びメゾネットの部屋に泊まるは初めてだったので子供がとても喜んでいました。あいにくの曇りでたくさんの星は見えませんでしたが、星のカードゲームなどをして楽しかったです…　2026-09-04 13:04:52投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=18413\" class=\"3click\">つづきはこちら</a>",
    "hotelMinCharge": 11360,
    "address1": "熊本県",
    "address2": "阿蘇郡南阿蘇村白川1810",
    "telephoneNo": "0967-62-3006",
    "access": "熊本ICより57号線経由車で約40分／熊本空港より206号線経由車で約60分／南阿蘇鉄道　高森駅よりタクシーで10分",
    "parkingInformation": "有り　50台　無料　十分余裕があります。",
    "nearestStation": "高森",
    "hotelSpecial": "南阿蘇の自然を一望。星空のプロ【星のコンシェルジュ】による天体生解説。本格フレンチが楽しめます。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D18413",
    "featureKey": "water_shirakawa",
    "featureLabel": "熊本県南阿蘇村ふるさと納税・毎分60トンの名水が滾々と湧き出る阿蘇の恵み「白川水源」阿蘇温泉郷ステイ",
    "themeTitle": "熊本県南阿蘇村ふるさと納税：白川水源すぐ・星空と阿蘇カルデラを望むオーベルジュ「森のアトリエ 南阿蘇ルナ天文台」",
    "themeDesc": "毎分60トンが自噴する名水・白川水源の近く、阿蘇の森の中に佇む本格オーベルジュ。九州屈指の巨大望遠鏡による天体観測と、阿蘇の名水と熊本あか牛を贅沢に使った本格フレンチフルコースを優雅に味わう特別な夜を過ごせます。",
    "revAvg": "4.6",
    "minCharge": "11,360"
  }
];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* パンくずリスト */}
      <nav className="bg-white border-b border-slate-200 py-3 px-4 text-xs text-slate-500">
        <div className="max-w-5xl mx-auto flex items-center space-x-2">
          <Link href="/" className="hover:text-emerald-600 transition">ホーム</Link>
          <span>&gt;</span>
          <span className="text-slate-700 font-medium">日本三大名水＆湧水水源地・清流酒蔵美食宿×ふるさと納税ガイド</span>
        </div>
      </nav>

      {/* ヒーローヘッダー */}
      <header className="relative bg-gradient-to-br from-emerald-950 via-slate-900 to-teal-950 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-block bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-semibold px-3 py-1 rounded-full mb-2">
            日本三大名水・湧水水源地特集
          </div>
          <h1 className="text-2xl md:text-4xl font-bold leading-tight tracking-tight">
            日本三大名水＆湧水水源地・清流酒蔵美食宿×ふるさと納税ガイド
          </h1>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-3xl mx-auto pt-2">
            日本各地の山々が雨や雪を受け止め、何層もの地層で磨き抜かれて湧き出す「日本三大名水（代表的水源地）」――北アルプスの雪解け水が地下をくぐり海岸近くで自噴する富山黒部の「黒部川扇状地湧水群」、甲斐駒ヶ岳の花崗岩層で濾過され世界的なウイスキーやミネラルウォーターを生む山梨白州の「尾白川名水」、そして阿蘇カルデラの裾野に毎分60トンもの常温の清泉がこんこんと湧き上がる熊本の「白川水源」。澄み切った水が育む地酒、手打ち蕎麦、清流魚、そして名水を贅沢に湛えた温泉風呂は、日常で疲れた五感を澄み渡らせてくれます。水源の森を散策し、富山湾の海の幸・甲州ワインビーフ・阿蘇あか牛を名水仕込みの美酒とともに味わう至高の旅を楽天ふるさと納税でお楽しみください。
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
            幾千年の時を経て地底から滾々と湧き出る奇跡の雫。清冽な名水に心洗われる旅
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>毎分数十トンの自噴泉や翡翠色に輝く清流！圧倒的な透明度を誇る奇跡の水源</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                ペットボトルに汲んで味わう名水の甘みや、川底の砂が舞う湧出口の神秘的な光景を体感。
              </p>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>名水仕込みの手打ち蕎麦＆地酒、富山白えび、甲州ワインビーフ、阿蘇あか牛溶岩焼き</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                澄んだ水だからこそ引き出せる食材本来の旨味と、水の名産地ならではの極上ディナーを満喫。
              </p>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>楽天ふるさと納税宿泊クーポンで自然あふれる名水リゾート・温泉宿をお得に予約</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                避暑や週末のリフレッシュ旅でも、寄付金額に応じた最大30%オフの即時割引クーポンでスマートにお得ステイ。
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
                        {h.hotelSpecial || '日本三大名水の清冽な雫、日本三大仏の荘厳な歴史美、日本三大松原の白砂青松パノラマ、日本三大美林清流渓谷のエメラルドブルーを巡る極上の拠点。四季折々の美食と名湯でお寛ぎください。'}
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
            あわせて読みたい日本の名水・古都仏閣・名松原特集
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            
            <Link href="/furusato-tax-three-great-clear-stream-valleys-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三大美林渓流＆原生林マイナスイオン宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                奥入瀬・抱返り・阿寺渓谷。
              </p>
            </Link>
            
            <Link href="/furusato-tax-three-great-rapid-rivers-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三大急流＆川下り舟体験・清流鮎グルメ宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                最上川・富士川・球磨川。
              </p>
            </Link>
            
            <Link href="/furusato-tax-three-great-gorges-scenery-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三大渓谷美＆清流大自然絶景宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                清津峡・黒部峡谷・大杉谷。
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
