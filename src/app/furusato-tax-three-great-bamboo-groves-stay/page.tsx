import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '日本三大竹林＆風にそよぐ緑の回廊・静寂の美林と風雅名宿×ふるさと納税完全ガイド【2026年最新】嵯峨野・報国寺・さつま町',
  description: '風の音と竹葉のささやきに包まれる禅の空間！京都嵐山「嵯峨野・竹林の小径」平安貴族の美意識と嵐山温泉渡月亭、神奈川鎌倉「報国寺（竹の寺）」千本の孟宗竹と鎌倉パークホテル、鹿児島北薩摩「さつま町竹林」日本一の竹林面積と四季の杜紫尾庵。日本三大竹林の幻想的な緑の回廊と風雅な宿を楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
  keywords: '日本三大竹林・森林セラピー特集, 楽天ふるさと納税, 温泉宿, ふるさと納税 旅行, 高級旅館, ホテル予約, 2026年旅行',
  openGraph: {
    title: '日本三大竹林＆風にそよぐ緑の回廊・静寂の美林と風雅名宿×ふるさと納税完全ガイド【2026年最新】嵯峨野・報国寺・さつま町',
    description: '風の音と竹葉のささやきに包まれる禅の空間！京都嵐山「嵯峨野・竹林の小径」平安貴族の美意識と嵐山温泉渡月亭、神奈川鎌倉「報国寺（竹の寺）」千本の孟宗竹と鎌倉パークホテル、鹿児島北薩摩「さつま町竹林」日本一の竹林面積と四季の杜紫尾庵。日本三大竹林の幻想的な緑の回廊と風雅な宿を楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    type: 'article',
    url: 'https://croud-travel.pages.dev/furusato-tax-three-great-bamboo-groves-stay',
    siteName: 'トラベルポータル',
  },
};

export default function Page() {
  const officialAffUrl = 'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F';

  const hotels = [
  {
    "hotelNo": 8838,
    "hotelName": "京都　嵐山温泉　渡月亭",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D8838",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D8838%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D8838",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D8838",
    "hotelKanaName": "きょうと　あらしやまおんせん　とげつてい",
    "hotelSpecial": "【料亭旅館】嵐山・嵯峨野散策に最適な京都・嵐山温泉の宿。",
    "hotelMinCharge": 23400,
    "address1": "京都府",
    "address2": "京都市西京区嵐山中尾下町54-4（渡月橋南詰め）",
    "telephoneNo": "075-871-1310",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/8838/8838.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/8838/8838_gen.jpg",
    "reviewCount": 253,
    "reviewAverage": 3.82,
    "userReview": "",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D8838",
    "access": "京都駅よりＪＲ嵯峨野線嵯峨嵐山駅下車徒歩１５分。阪急京都線桂駅より嵐山線嵐山駅下車徒歩５分。名神京都南ＩＣより約４０分",
    "label": "京都府京都市ふるさと納税・幽玄の竹音に癒やされる平安の風情「嵯峨野・竹林の小径」嵐山温泉渡月亭",
    "themeTitle": "京都府京都市ふるさと納税：渡月橋のたもと・嵯峨野竹林散策に最適な創業百余年の老舗「京都 嵐山温泉 渡月亭」",
    "themeDesc": "嵐山の象徴・渡月橋南詰に位置し、早朝の嵯峨野・竹林の小径散策にこれ以上ない立地を誇る老舗旅館。天然嵐山温泉の湯浴みと、四季折々の京野菜や旬魚を巧みに仕立てた伝統の京会席料理で、京都の雅を五感で堪能できます。",
    "revAvg": "3.8",
    "minCharge": "23,400"
  },
  {
    "hotelNo": 31648,
    "hotelName": "鎌倉パークホテル",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D31648",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D31648%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D31648",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D31648",
    "hotelKanaName": "かまくら　ぱーくほてる",
    "hotelSpecial": "ヨーロッパのインテリアが配された落ち着いた雰囲気のアーバンリゾートホテル。大仏などの観光にも便利。",
    "hotelMinCharge": 9350,
    "address1": "神奈川県",
    "address2": "鎌倉市坂ノ下33-6",
    "telephoneNo": "0467-25-5121",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/31648/31648.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/31648/31648_t.jpg",
    "reviewCount": 1317,
    "reviewAverage": 4.43,
    "userReview": "2回目の利用だが今回は残念な点が多かった2回目の利用。夏休みに家族で利用。部屋に入った際、トイレなのか非常に匂った。洋食の夕食はイマイチだった。ここは恐らく和食の方が腕がいい。今回は残念な点が多か…　 ",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D31648",
    "access": "ＪＲ鎌倉駅よりタクシーにて１０～１５分(平常時）。江ノ電長谷駅より徒歩約１３分。",
    "label": "神奈川県鎌倉市ふるさと納税・千本の孟宗竹が包む静寂の古刹「報国寺（竹の寺）」鎌倉パークホテル",
    "themeTitle": "神奈川県鎌倉市ふるさと納税：報国寺・竹の寺めぐり拠点・相模湾の潮風薫る上質なホテル「鎌倉パークホテル」",
    "themeDesc": "由比ヶ浜海岸の目の前に建ち、鎌倉市街や報国寺へのアクセス至便な欧風クラシックホテル。全室にイタリア直輸入のインテリアを配し、地元三浦半島の獲れたて野菜や相模湾の地魚を活かしたフレンチ・和食会席が魅力です。",
    "revAvg": "4.4",
    "minCharge": "9,350"
  },
  {
    "hotelNo": 143298,
    "hotelName": "全室源泉掛け流し温泉付離れの旅館　四季の杜　紫尾庵",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D143298",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D143298%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D143298",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D143298",
    "hotelKanaName": "ぜんしつげんせんかけながしおんせんつきはなれのりょかん　しきのもり　しびあん",
    "hotelSpecial": "わずか8室の離れの宿。温泉付客室で贅沢なひとときをごゆっくりとお過ごしください。",
    "hotelMinCharge": 19800,
    "address1": "鹿児島県",
    "address2": "薩摩郡さつま町紫尾1663",
    "telephoneNo": "0996-31-9270",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/143298/143298.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/143298/143298_ryo.jpg",
    "reviewCount": 169,
    "reviewAverage": 4.79,
    "userReview": "家族全員が大満足、心身ともに癒やされる宿一人旅で初めて訪れた時から超お気に入りの宿。今回は家族旅行で利用しました。相変わらず居心地の良い空間と最高の温泉に癒され、程よい距離感でのサービスと地産地消…　 ",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D143298",
    "access": "【鹿児島空港】より北薩横断道路経由お車で約50分【出水駅、川内駅】それぞれお車で約40分【横川IC】よりお車で約45分！",
    "label": "鹿児島県さつま町ふるさと納税・日本屈指の竹林面積と清流ホタルの里「さつま町宮之城温泉」手塚旅館",
    "themeTitle": "鹿児島県さつま町ふるさと納税：日本一の竹林の郷・全室源泉掛け流し露天付き離れの隠れ家「四季の杜 紫尾庵」",
    "themeDesc": "竹林の里・さつま町の奥座敷、神の湯と称される紫尾温泉に佇む全室離れの極上宿。とろりとした極上の硫黄泉が注ぐ客室露天風呂と、鹿児島黒毛和牛や地元契約農家の野菜、タケノコを取り入れた創作会席で究極の静寂を楽しめます。",
    "revAvg": "4.8",
    "minCharge": "19,800"
  }
];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* パンくずリスト */}
      <nav className="bg-white border-b border-slate-200 py-3 px-4 text-xs text-slate-500">
        <div className="max-w-5xl mx-auto flex items-center space-x-2">
          <Link href="/" className="hover:text-emerald-600 transition">ホーム</Link>
          <span>&gt;</span>
          <span className="text-slate-700 font-medium">日本三大竹林＆静寂の緑の回廊・風雅名宿×ふるさと納税ガイド</span>
        </div>
      </nav>

      {/* ヒーローヘッダー */}
      <header className="relative bg-gradient-to-br from-emerald-950 via-slate-900 to-teal-950 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-block bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-semibold px-3 py-1 rounded-full mb-2">
            日本三大竹林・森林セラピー特集
          </div>
          <h1 className="text-2xl md:text-4xl font-bold leading-tight tracking-tight">
            日本三大竹林＆静寂の緑の回廊・風雅名宿×ふるさと納税ガイド
          </h1>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-3xl mx-auto pt-2">
            すっきりと天に向かって伸びる青竹の林、風が通り抜けるたびに響く葉擦れの音、足元を覆うみずみずしい苔――日常の喧騒を離れ深い安らぎをもたらす「日本三大竹林」――平安時代から貴族の別荘地として愛され天龍寺から野宮神社へと続く緑のトンネルが幻想的な京都嵐山の「嵯峨野・竹林の小径」、足利・上杉氏の菩提寺で本堂裏に約2,000本の孟宗竹が美しく手入れされ抹茶を味わいながら眺められる神奈川鎌倉の「報国寺（竹の寺）」、そして竹林面積日本一を誇り竹工芸やタケノコ栽培の聖地として知られる鹿児島北薩摩の「さつま町竹林」。竹林の清々しい空気に包まれた後は、老舗旅館の京会席や隠れ家離れの源泉掛け流し温泉で心身をととのえる至高の旅を楽天ふるさと納税でお楽しみください。
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
            木漏れ日降り注ぐ青竹の天蓋。心を澄ませる静寂のひとときと名宿ステイ
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>早朝の静寂の中で味わう竹林の小径・木漏れ日とマイナスイオンの癒やし</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                観光客の少ない早朝の時間帯に、澄み切った竹林の空気と鳥のさえずりを独り占め。
              </p>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>朝掘りタケノコ会席・京都の湯豆腐と京懐石・鎌倉フレンチ・鹿児島黒豚しゃぶしゃぶ</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                竹林の恵みである旬のタケノコ料理と、各地の風土が育んだハイグレードなグルメを満喫。
              </p>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>楽天ふるさと納税宿泊クーポンで由緒ある老舗旅館や離れ隠れ家宿をお得に予約</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                大人の静かな一人旅や記念日の二人旅でも、寄付金額に応じた最大30%オフの即時割引クーポンでスマートにお得ステイ。
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
                        {h.hotelSpecial || '日本三大岬のダイナミックな断崖絶景、日本三大古代湖の悠久の湖畔風景、日本三大竹林の静寂の緑の回廊、日本三大カルデラの地球の息吹を巡る極上の拠点。四季折々の美食と名湯でお寛ぎください。'}
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
            あわせて読みたい全国の絶景岬・古代湖・自然回廊特集
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
            
            <Link href="/furusato-tax-three-great-daimyo-gardens-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三大名園＆大名庭園風雅宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                偕楽園・兼六園・後楽園。
              </p>
            </Link>
            
            <Link href="/furusato-tax-private-villa-hanare-hideaway-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                全室離れの隠れ家おこもり宿×極上プライベートヴィラふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                由布院・伊豆高原・定山渓。
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
