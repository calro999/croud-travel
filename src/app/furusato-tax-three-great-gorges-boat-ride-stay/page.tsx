import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '日本三大渓谷＆爽快舟下り・清流の奇岩と水辺の温泉名宿×ふるさと納税完全ガイド【2026年最新】保津川・最上川・長瀞',
  description: '船頭の竿さばきで水しぶきを上げる日本の名舟下り！京都「嵐山・保津川下り」亀岡から嵐山へ巨岩と急流を抜けるスリルと嵐山温泉渡月亭、山形「最上川舟下り」松尾芭蕉の句で知られる大河の舟唄と高見屋最上川別邸紅、埼玉「長瀞ライン下り」天然記念物岩畳の渓谷美と長生館。四季の渓谷美と水辺の老舗温泉旅館を楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
  keywords: '日本三大渓谷・清流舟下り特集, 楽天ふるさと納税, 温泉宿, ふるさと納税 旅行, 高級旅館, ホテル予約, 2026年旅行',
  openGraph: {
    title: '日本三大渓谷＆爽快舟下り・清流の奇岩と水辺の温泉名宿×ふるさと納税完全ガイド【2026年最新】保津川・最上川・長瀞',
    description: '船頭の竿さばきで水しぶきを上げる日本の名舟下り！京都「嵐山・保津川下り」亀岡から嵐山へ巨岩と急流を抜けるスリルと嵐山温泉渡月亭、山形「最上川舟下り」松尾芭蕉の句で知られる大河の舟唄と高見屋最上川別邸紅、埼玉「長瀞ライン下り」天然記念物岩畳の渓谷美と長生館。四季の渓谷美と水辺の老舗温泉旅館を楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    type: 'article',
    url: 'https://croud-travel.pages.dev/furusato-tax-three-great-gorges-boat-ride-stay',
    siteName: 'トラベルポータル',
  },
};

export default function Page() {
  const officialAffUrl = 'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F';

  const hotels = [
  {
    "hotelNo": 8838,
    "hotelName": "京都　嵐山温泉　渡月亭",
    "hotelKanaName": "きょうと　あらしやまおんせん　とげつてい",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D8838",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D8838%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D8838",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D8838",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/8838/8838.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/8838.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/8838/8838_gen.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/8838/8838map.gif",
    "reviewCount": 253,
    "reviewAverage": 3.82,
    "userReview": "",
    "hotelMinCharge": 23400,
    "address1": "京都府",
    "address2": "京都市西京区嵐山中尾下町54-4（渡月橋南詰め）",
    "telephoneNo": "075-871-1310",
    "access": "京都駅よりＪＲ嵯峨野線嵯峨嵐山駅下車徒歩１５分。阪急京都線桂駅より嵐山線嵐山駅下車徒歩５分。名神京都南ＩＣより約４０分",
    "parkingInformation": "有り　１５台　無料　先着順",
    "nearestStation": "嵯峨嵐山",
    "hotelSpecial": "【料亭旅館】嵐山・嵯峨野散策に最適な京都・嵐山温泉の宿。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D8838",
    "label": "京都府亀岡市・京都市ふるさと納税・丹波から嵐山へ巨岩と急流を抜ける「保津川下り」嵐山温泉花伝抄",
    "themeTitle": "京都府京都市右京区ふるさと納税：保津川下りの下船場至近・創業百二十余年の名門「京都 嵐山温泉 渡月亭」",
    "themeDesc": "嵐山のシンボル・渡月橋の南詰に位置し、保津川下りを終えた後の滞在に最高の立地を誇る老舗料理旅館。嵐山温泉の肌あたりの柔らかい天然温泉で身体を温め、四季折々の京野菜や旬魚を贅沢に仕立てた伝統の京懐石ディナーを堪能できます。",
    "revAvg": "3.8",
    "minCharge": "23,400"
  },
  {
    "hotelNo": 147592,
    "hotelName": "高見屋　最上川別邸　紅",
    "hotelKanaName": "たかみや　もがみがわべってい　べに",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D147592",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D147592%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D147592",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D147592",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/147592/147592.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/147592.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/147592/147592_room.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/147592/147592map.gif",
    "reviewCount": 405,
    "reviewAverage": 4.25,
    "userReview": "川の眺めは良いが工事の視線が気になったお風呂が残念部屋から目の前の川がよく見える所でよかったが反対側で工事をしている作業員が10名ほどこれ以上言わなくてもわかると思いますがチェックイン…",
    "hotelMinCharge": 10450,
    "address1": "山形県",
    "address2": "最上郡戸沢村古口3058",
    "telephoneNo": "023-610-9602",
    "access": "東京・仙台方面→東北自動車道→村田JCT→山形自動車道→山形北IC→国道13号→国道47号→宿",
    "parkingInformation": "有り　２０台　無料　",
    "nearestStation": "高屋",
    "hotelSpecial": "～名湯一門　高見屋～全ての窓から最上川の風雅な景色を眺める、寛ぎの温泉旅館-ＢＥＮＩ-",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D147592",
    "label": "山形県戸沢村ふるさと納税・松尾芭蕉も下った五月雨を集める大河「最上川舟下り」高見屋最上川別邸 紅",
    "themeTitle": "山形県戸沢村ふるさと納税：最上川舟下りの乗船場に寄り添い全室リバービューの隠れ宿「高見屋 最上川別邸 紅」",
    "themeDesc": "雄大な最上川の川岸に佇み、すべての客室や展望露天風呂から悠然と流れる最上川のパノラマを一望できる温泉宿。白糸の滝を眺めながら草薙温泉の湯に浸かり、山形牛のすき焼きや最上川の鮎など郷土の味覚を心静かに味わえます。",
    "revAvg": "4.3",
    "minCharge": "10,450"
  },
  {
    "hotelNo": 9485,
    "hotelName": "長瀞温泉　花のおもてなし　長生館",
    "hotelKanaName": "ながとろおんせん　はなのおもてなし　ちょうせいかん",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D9485",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D9485%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D9485",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D9485",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/9485/9485.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/9485.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/9485/9485_ss.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/9485/9485map.gif",
    "reviewCount": 1308,
    "reviewAverage": 4.43,
    "userReview": "家族で大満足、温泉も食事も最高でしたウッドテラス付のお部屋に家族5人で一泊しました。スタッフの方の対応もよく、お部屋も温泉も晩ごはんも最高でした。朝ごはんのできたて豆腐は長男が美味しいとよく食べて…",
    "hotelMinCharge": 11500,
    "address1": "埼玉県",
    "address2": "秩父郡長瀞町長瀞449",
    "telephoneNo": "0494-66-1113",
    "access": "秩父鉄道：長瀞駅から徒歩3分／関越自動車道：花園ＩＣより車で30分",
    "parkingInformation": "有り 50台 無料 先着順　徒歩圏に第3駐車場までございます",
    "nearestStation": "長瀞",
    "hotelSpecial": "長瀞温泉 創業大正元年 長瀞観光の歴史と共に歩む日本旅館 長瀞渓谷岩畳を望む百年変わらぬ癒やしの眺め",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D9485",
    "label": "埼玉県長瀞町ふるさと納税・岩畳と荒川の清流を舟で巡る名勝「長瀞ライン下り」長生館",
    "themeTitle": "埼玉県長瀞町ふるさと納税：長瀞ライン下りの岩畳を望む特等席・庭園と囲炉裏の宿「長瀞温泉 花のおもてなし 長生館」",
    "themeDesc": "大正4年創業、荒川の清流と名勝岩畳を見下ろす広大な日本庭園を有する長瀞屈指の老舗旅館。長瀞ライン下りの船着場まで徒歩すぐで、竹林に囲まれた露天風呂で寛ぎ、秩父の清流鮎や埼玉ブランド豚の会席料理を贅沢に楽しめます。",
    "revAvg": "4.4",
    "minCharge": "11,500"
  }
];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* パンくずリスト */}
      <nav className="bg-white border-b border-slate-200 py-3 px-4 text-xs text-slate-500">
        <div className="max-w-5xl mx-auto flex items-center space-x-2">
          <Link href="/" className="hover:text-emerald-600 transition">ホーム</Link>
          <span>&gt;</span>
          <span className="text-slate-700 font-medium">日本三大渓谷＆爽快舟下り・水辺の名宿×ふるさと納税ガイド</span>
        </div>
      </nav>

      {/* ヒーローヘッダー */}
      <header className="relative bg-gradient-to-br from-emerald-950 via-slate-900 to-teal-950 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-block bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-semibold px-3 py-1 rounded-full mb-2">
            日本三大渓谷・清流舟下り特集
          </div>
          <h1 className="text-2xl md:text-4xl font-bold leading-tight tracking-tight">
            日本三大渓谷＆爽快舟下り・水辺の名宿×ふるさと納税ガイド
          </h1>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-3xl mx-auto pt-2">
            数万年の歳月をかけて川の流れが岩肌を削り出し、息をのむ大自然の造形美を魅せる「日本の名舟下り・渓谷下り」――丹波亀岡から嵯峨嵐山までの約16kmにわたる渓谷をスリル満点に下る京都の「保津川下り」、山形の大地を貫き船頭の情緒あふれる最上川舟唄が峡谷に響き渡る山形の「最上川舟下り」、そして国の名勝・天然記念物に指定された荒川沿いの結晶片岩（岩畳）の壮観を優雅に巡る埼玉の「長瀞ライン下り」。春の桜、夏の深緑、秋の紅葉、冬の雪景色に彩られた渓谷美を体感し、川沿いの名湯露天風呂や川魚・鮎料理に舌鼓を打つ旅を楽天ふるさと納税でお楽しみください。
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
            水しぶきと風を浴びて進む木舟。日本の渓谷美を川面から見上げる特別な冒険
          </h2>
          <p className="text-slate-600 leading-relaxed text-sm md:text-base">
            数万年の歳月をかけて川の流れが岩肌を削り出し、息をのむ大自然の造形美を魅せる「日本の名舟下り・渓谷下り」――丹波亀岡から嵯峨嵐山までの約16kmにわたる渓谷をスリル満点に下る京都の「保津川下り」、山形の大地を貫き船頭の情緒あふれる最上川舟唄が峡谷に響き渡る山形の「最上川舟下り」、そして国の名勝・天然記念物に指定された荒川沿いの結晶片岩（岩畳）の壮観を優雅に巡る埼玉の「長瀞ライン下り」。春の桜、夏の深緑、秋の紅葉、冬の雪景色に彩られた渓谷美を体感し、川沿いの名湯露天風呂や川魚・鮎料理に舌鼓を打つ旅を楽天ふるさと納税でお楽しみください。
          </p>
        </section>

        {/* メリット3選 */}
        <section className="space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
              ふるさと納税×日本三大渓谷清流舟下り 3つのメリット
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
                  船着場へのアクセス良好！朝一番の澄み切った川風を感じる爽快な舟下り体験
                </h3>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                  水辺の老舗旅館に泊まるからこそ、時間を気にせず乗船前後の渓谷散策や写真撮影を満喫。
                </p>
              </div>
            </div>
            <div key="1" className="bg-white rounded-xl p-6 shadow-sm border border-slate-200/80 flex flex-col justify-between hover:border-emerald-300 transition duration-200">
              <div className="space-y-3">
                <span className="inline-block w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 font-bold text-center leading-8 text-sm">
                  02
                </span>
                <h3 className="font-bold text-base text-slate-900 leading-snug">
                  天然鮎の塩焼き・山形牛や芋煮、京料理の旬会席、秩父のぼたん鍋や川魚料理
                </h3>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                  清流の恵みと豊かな山の幸をふんだんに取り入れた、水辺の宿ならではの贅沢ディナーを堪能。
                </p>
              </div>
            </div>
            <div key="2" className="bg-white rounded-xl p-6 shadow-sm border border-slate-200/80 flex flex-col justify-between hover:border-emerald-300 transition duration-200">
              <div className="space-y-3">
                <span className="inline-block w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 font-bold text-center leading-8 text-sm">
                  03
                </span>
                <h3 className="font-bold text-base text-slate-900 leading-snug">
                  楽天ふるさと納税宿泊クーポンで川沿いの一軒宿や老舗温泉ホテルをお得に予約
                </h3>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                  アクティブな家族旅行や風雅な夫婦旅でも、寄付金額に応じた最大30%オフの即時割引クーポンでスマートにお得ステイ。
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
            
            <Link href="/furusato-tax-three-great-clear-rivers-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三大清流＆エメラルドグリーンの川辺宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                四万十川・長良川・柿田川。
              </p>
            </Link>
            <Link href="/furusato-tax-three-great-gorges-scenery-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三大名峡＆奇岩絶壁の峡谷リゾート×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                瀞峡・大杉谷・黒部峡谷。
              </p>
            </Link>
            <Link href="/furusato-tax-three-famous-waterfalls-healing-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三大名滝＆清冽なマイナスイオン名宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                那智の滝・華厳の滝・袋田の滝。
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
