import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '日本三大禅寺＆静寂の枯山水庭園・心洗われる坐禅・精進料理宿×ふるさと納税完全ガイド【2026年最新】京都南禅寺・鎌倉建長寺・福井永平寺',
  description: '心を調え雑念を解き放つ日本の名刹禅寺ステイ！京都「南禅寺」水路閣と名庭の静寂・料亭旅館南禅寺八千代、神奈川鎌倉「建長寺」巨木ビャクシンと鎌倉五山第一位・鎌倉プリンスホテル、福井「大本山永平寺」荘厳な七堂伽藍と本格坐禅体験・親禅の宿柏樹關。枯山水庭園の美、朝の静かな勤行、伝統の精進料理を楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
  keywords: '日本三大禅寺・マインドフルネス特集, 楽天ふるさと納税, 温泉宿, ふるさと納税 旅行, 高級旅館, ホテル予約, 2026年旅行',
  openGraph: {
    title: '日本三大禅寺＆静寂の枯山水庭園・心洗われる坐禅・精進料理宿×ふるさと納税完全ガイド【2026年最新】京都南禅寺・鎌倉建長寺・福井永平寺',
    description: '心を調え雑念を解き放つ日本の名刹禅寺ステイ！京都「南禅寺」水路閣と名庭の静寂・料亭旅館南禅寺八千代、神奈川鎌倉「建長寺」巨木ビャクシンと鎌倉五山第一位・鎌倉プリンスホテル、福井「大本山永平寺」荘厳な七堂伽藍と本格坐禅体験・親禅の宿柏樹關。枯山水庭園の美、朝の静かな勤行、伝統の精進料理を楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    type: 'article',
    url: 'https://croud-travel.pages.dev/furusato-tax-three-great-zen-temples-mindfulness-stay',
    siteName: 'トラベルポータル',
  },
};

export default function Page() {
  const officialAffUrl = 'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F';

  const hotels = [
  {
    "hotelNo": 40344,
    "hotelName": "南禅寺　八千代",
    "hotelKanaName": "なんぜんじ　やちよ",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D40344",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D40344%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D40344",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D40344",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/40344/40344.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/40344.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/40344/40344_hon.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/40344/40344map.gif",
    "reviewCount": 321,
    "reviewAverage": 5,
    "userReview": "",
    "hotelMinCharge": 15950,
    "address1": "京都府",
    "address2": "京都市左京区南禅寺福地町34  南禅寺八千代",
    "telephoneNo": "075-771-4148",
    "access": "桜の名所・南禅寺の参道にございます。京都駅より地下鉄烏丸線御池駅にて乗り換え、地下鉄東西線「蹴上駅」より徒歩５分。",
    "parkingInformation": "先着8台2000円。満車の際はタイムズ 京都市左京区粟田口鳥居町53-4 1000円（予約不可)",
    "nearestStation": "蹴上",
    "hotelSpecial": "京都随一の文化エリアである平安神宮・永観堂・南禅寺参道に面し、のんびり東山散策に便利です。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D40344",
    "label": "京都府京都市ふるさと納税・臨済宗五山別格・名庭と湯豆腐の郷「南禅寺参道」南禅寺八千代",
    "themeTitle": "京都府京都市ふるさと納税：南禅寺参道に佇み植治の名庭と伝統の名物湯豆腐を味わう料亭旅館「南禅寺 八千代」",
    "themeDesc": "南禅寺の門前に位置し、近代日本庭園の先駆者・小川治兵衛（植治）が作庭した池泉回遊式庭園を望む老舗料亭旅館。京の風情を満喫できる数寄屋造りの客室で寛ぎ、名物の極上湯豆腐や季節の京懐石ディナーを贅沢に堪能できます。",
    "revAvg": "5.0",
    "minCharge": "15,950"
  },
  {
    "hotelNo": 1679,
    "hotelName": "鎌倉プリンスホテル",
    "hotelKanaName": "かまくら　ぷりんすほてる",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D1679",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D1679%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D1679",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D1679",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/1679/1679.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/1679.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/1679/1679_twn.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/1679/1679map.gif",
    "reviewCount": 1801,
    "reviewAverage": 4.37,
    "userReview": "静寂が保たれた空間で連泊してゆっくり過ごす高いレベルのスタッフの多い高級リゾートホテル正規のレートで利用するのはかなりツラいがこまめに探せば納得いくレートが探せるはずシャトルバスの…",
    "hotelMinCharge": 11236,
    "address1": "神奈川県",
    "address2": "鎌倉市七里ヶ浜東1-2-18",
    "telephoneNo": "0467-32-1111",
    "access": "江ノ島電鉄七里ヶ浜駅～徒歩約8分。無料送迎バスあり。または有料バスにて潮騒通り下車徒歩約1分。",
    "parkingInformation": "あり、有料（入庫より24時間￥1,000）。",
    "nearestStation": "七里ヶ浜",
    "hotelSpecial": "相模湾を望む、七里ヶ浜の丘に建つホテル。すべてのお部屋から相模湾の風景が望めます。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D1679",
    "label": "神奈川県鎌倉市ふるさと納税・日本最初の禅宗専門道場・巨木ビャクシンが息づく「建長寺」鎌倉プリンスホテル",
    "themeTitle": "神奈川県鎌倉市ふるさと納税：七里ヶ浜の高台から相模湾と富士山を一望・鎌倉五山巡り拠点「鎌倉プリンスホテル」",
    "themeDesc": "全室オーシャンビューを誇り、湘南の海と江の島、富士山の絶景が広がるリゾートホテル。建長寺や円覚寺など古都鎌倉の禅寺巡りの拠点に最適で、相模湾の新鮮な海の幸や旬の鎌倉野菜を取り入れた本格フレンチを満喫できます。",
    "revAvg": "4.4",
    "minCharge": "11,236"
  },
  {
    "hotelNo": 173065,
    "hotelName": "永平寺　親禅の宿　柏樹關",
    "hotelKanaName": "えいへいじ　しんぜ���のやど　はくじゅかん",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D173065",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D173065%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D173065",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D173065",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/173065/173065.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/173065.jpg",
    "roomImageUrl": "",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/173065/173065map.gif",
    "reviewCount": 85,
    "reviewAverage": 4.65,
    "userReview": "お部屋もおもてなしも食事も最高でした先日はお世話になりましたお部屋もとても素敵で、ゆっくりと落ち着いて過ごすことができました。スタッフの皆さまも親切で、温かいお心遣いがとても嬉しかったです…",
    "hotelMinCharge": 26647,
    "address1": "福井県",
    "address2": "吉田郡永平寺町志比6-1",
    "telephoneNo": "050-3504-9914",
    "access": "ＪＲ　福井駅よりお車にて約３０分",
    "parkingInformation": "有料（2023年4月1日～）大本山永平寺駐車場（第1駐車場・半勺橋駐車場1日/500円）",
    "nearestStation": "福井（福井）",
    "hotelSpecial": "「旅館と宿坊の中間」をコンセプトとし、快適な設備・サービスと本格的な坐禅など禅の世界が体験できます",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D173065",
    "label": "福井県永平寺町ふるさと納税・曹洞宗大本山・七堂伽藍に包まれる禅の世界「永平寺」親禅の宿 柏樹関",
    "themeTitle": "福井県永平寺町ふるさと納税：大本山永平寺の門前に佇み禅の体験と上質なくつろぎを融合した名宿「永平寺 親禅の宿 柏樹關」",
    "themeDesc": "永平寺の深い杉木立に寄り添い、開祖道元禅師の教えと現代の上質なホスピタリティが調和した話題の宿。永平寺監修の精進料理を味わえるほか、専属のコンシェルジュ（禅コンシェルジュ）による坐禅や朝のお勤め案内など、心洗われる滞在が叶います。",
    "revAvg": "4.7",
    "minCharge": "26,647"
  }
];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* パンくずリスト */}
      <nav className="bg-white border-b border-slate-200 py-3 px-4 text-xs text-slate-500">
        <div className="max-w-5xl mx-auto flex items-center space-x-2">
          <Link href="/" className="hover:text-emerald-600 transition">ホーム</Link>
          <span>&gt;</span>
          <span className="text-slate-700 font-medium">日本三大禅寺＆静寂の枯山水・心洗われる禅寺名宿×ふるさと納税ガイド</span>
        </div>
      </nav>

      {/* ヒーローヘッダー */}
      <header className="relative bg-gradient-to-br from-emerald-950 via-slate-900 to-teal-950 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-block bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-semibold px-3 py-1 rounded-full mb-2">
            日本三大禅寺・マインドフルネス特集
          </div>
          <h1 className="text-2xl md:text-4xl font-bold leading-tight tracking-tight">
            日本三大禅寺＆静寂の枯山水・心洗われる禅寺名宿×ふるさと納税ガイド
          </h1>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-3xl mx-auto pt-2">
            多忙な日常を離れ、呼吸を整え己と向き合う「禅（Zen）」の精神文化を今に伝える名刹「日本三大禅寺」――臨済宗五山別格の格式を誇り石川五右衛門の絶景かなで名高い三門や水路閣が美しい京都の「南禅寺」、北条時頼が建立し日本最初の禅宗専門道場としてビャクシンの古木が荘厳さを漂わせる神奈川の「鎌倉・建長寺」、そして道元禅師が開創し鬱蒼とした杉木立のなか修行僧（雲水）が厳しい修行を続ける曹洞宗大本山・福井の「大本山永平寺」。静寂の枯山水庭園を鑑賞し、朝の勤行や坐禅体験で心を研ぎ澄まし、心身に染み渡る精進料理や旬の美味を味わう旅を楽天ふるさと納税でお楽しみください。
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
            凛とした静寂に包まれる境内。日本の禅の美学と心をリセットする極上宿
          </h2>
          <p className="text-slate-600 leading-relaxed text-sm md:text-base">
            多忙な日常を離れ、呼吸を整え己と向き合う「禅（Zen）」の精神文化を今に伝える名刹「日本三大禅寺」――臨済宗五山別格の格式を誇り石川五右衛門の絶景かなで名高い三門や水路閣が美しい京都の「南禅寺」、北条時頼が建立し日本最初の禅宗専門道場としてビャクシンの古木が荘厳さを漂わせる神奈川の「鎌倉・建長寺」、そして道元禅師が開創し鬱蒼とした杉木立のなか修行僧（雲水）が厳しい修行を続ける曹洞宗大本山・福井の「大本山永平寺」。静寂の枯山水庭園を鑑賞し、朝の勤行や坐禅体験で心を研ぎ澄まし、心身に染み渡る精進料理や旬の美味を味わう旅を楽天ふるさと納税でお楽しみください。
          </p>
        </section>

        {/* メリット3選 */}
        <section className="space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
              ふるさと納税×日本三大禅寺マインドフルネス 3つのメリット
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
                  早朝の静謐な境内参拝や本格的な坐禅体験！観光客で混雑する前の特別な祈りの時間
                </h3>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                  宿坊や近隣の名宿に宿泊するからこそ叶う、澄み切った朝の空気の中でのマインドフルネスな体験。
                </p>
              </div>
            </div>
            <div key="1" className="bg-white rounded-xl p-6 shadow-sm border border-slate-200/80 flex flex-col justify-between hover:border-emerald-300 transition duration-200">
              <div className="space-y-3">
                <span className="inline-block w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 font-bold text-center leading-8 text-sm">
                  02
                </span>
                <h3 className="font-bold text-base text-slate-900 leading-snug">
                  出汁の真髄を極めた湯豆腐・伝統の胡麻豆腐や精進料理、若狭や相模湾の新鮮な地魚会席
                </h3>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                  禅寺の門前町で受け継がれてきたヘルシーで奥深い精進料理と、ご当地の高級食材を贅沢に堪能。
                </p>
              </div>
            </div>
            <div key="2" className="bg-white rounded-xl p-6 shadow-sm border border-slate-200/80 flex flex-col justify-between hover:border-emerald-300 transition duration-200">
              <div className="space-y-3">
                <span className="inline-block w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 font-bold text-center leading-8 text-sm">
                  03
                </span>
                <h3 className="font-bold text-base text-slate-900 leading-snug">
                  楽天ふるさと納税宿泊クーポンで憧れの老舗料亭旅館や本格宿坊ホテルをお得に予約
                </h3>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                  大人の一人旅や夫婦の癒やし旅でも、寄付金額に応じた最大30%オフの即時割引クーポンでスマートにお得ステイ。
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
            あわせて読みたい日本の名所・歴史と絶景ホテル特集
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            
            <Link href="/furusato-tax-three-great-bell-towers-historic-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三大名鐘＆心の琴線に響く梵鐘・悠久の寺町宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                知恩院・平等院・三井寺。
              </p>
            </Link>
            <Link href="/furusato-tax-three-great-pagodas-scenic-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三大名塔＆国宝五重塔の美と古都歴史宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                羽黒山・瑠璃光寺・醍醐寺。
              </p>
            </Link>
            <Link href="/furusato-tax-three-great-torii-sacred-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三大鳥居＆神聖なる巨木の門・古都名宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                宮島・奈良・敦賀。
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
