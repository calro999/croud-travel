import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '日本三大朝市＆獲れたて鮮魚と旬の恵み・活気あふれる市場宿×ふるさと納税完全ガイド【2026年最新】勝浦・高山・呼子',
  description: '早起きして出かけたい活気と笑顔の日本の三大朝市！千葉房総「勝浦朝市」430年の歴史と水揚げ鮮魚・旬野菜・三日月イン、岐阜飛騨「高山宮川朝市」宮川のせせらぎ沿いに並ぶ新鮮野菜と赤かぶら・本陣平野屋花兆庵、佐賀玄界灘「呼子朝市」名物いかしゅうまいと干物の香ばしい匂い・旅館金丸。朝の散策と地元の人々との温かいふれあい、名物グルメを楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
  keywords: '日本三大朝市・朝活グルメ特集, 楽天ふるさと納税, 温泉宿, ふるさと納税 旅行, 高級旅館, ホテル予約, 2026年旅行',
  openGraph: {
    title: '日本三大朝市＆獲れたて鮮魚と旬の恵み・活気あふれる市場宿×ふるさと納税完全ガイド【2026年最新】勝浦・高山・呼子',
    description: '早起きして出かけたい活気と笑顔の日本の三大朝市！千葉房総「勝浦朝市」430年の歴史と水揚げ鮮魚・旬野菜・三日月イン、岐阜飛騨「高山宮川朝市」宮川のせせらぎ沿いに並ぶ新鮮野菜と赤かぶら・本陣平野屋花兆庵、佐賀玄界灘「呼子朝市」名物いかしゅうまいと干物の香ばしい匂い・旅館金丸。朝の散策と地元の人々との温かいふれあい、名物グルメを楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    type: 'article',
    url: 'https://croud-travel.pages.dev/furusato-tax-three-great-morning-markets-gourmet-stay',
    siteName: 'トラベルポータル',
  },
};

export default function Page() {
  const officialAffUrl = 'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F';

  const hotels = [
  {
    "hotelNo": 51868,
    "hotelName": "三日月イン",
    "hotelKanaName": "みかづきいん",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D51868",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D51868%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D51868",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D51868",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/51868/51868.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/51868.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/51868/51868_wa.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/51868/51868map.gif",
    "reviewCount": 587,
    "reviewAverage": 4.08,
    "userReview": "美味しい魚と丁寧な接客、駅近で安心感抜群魚祭の魚が美味しかった接客が良くおすすめですね駅近、交番近 朝市にも歩けとても安心できましたクチコミの詳細はこちらから　https:…",
    "hotelMinCharge": 7700,
    "address1": "千葉県",
    "address2": "勝浦市墨名258",
    "telephoneNo": "0470-73-1331",
    "access": "ＪＲ外房線勝浦駅下車　徒歩０分（ロータリー脇）・館山道市原ＩＣ又は圏央道市原鶴舞ＩＣより国道297号線勝浦方面へ。",
    "parkingInformation": "先着２５台（無料）",
    "nearestStation": "勝浦",
    "hotelSpecial": "勝浦駅至近、全室バストイレ付。プラズマクラスタ空気清浄機常備。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D51868",
    "label": "千葉県勝浦市ふるさと納税・430年続く活気・獲れたて鮮魚と旬野菜「勝浦朝市」三日月シーパークホテル勝浦",
    "themeTitle": "千葉県勝浦市ふるさと納税：勝浦朝市まで徒歩すぐ・勝浦駅前で大浴場と海鮮を気軽に楽しむ「三日月イン」",
    "themeDesc": "JR勝浦駅から徒歩約1分、毎朝開催される勝浦朝市会場へも徒歩数分という抜群の好立地を誇るホテル。勝浦港直送の新鮮な魚介を堪能できるほか、近隣の勝浦ホテル三日月の展望温泉大浴場やスパも利用でき、アクティブな朝市散策の拠点に最適です。",
    "revAvg": "4.1",
    "minCharge": "7,700"
  },
  {
    "hotelNo": 8327,
    "hotelName": "飛騨高山　本陣平野屋　花兆庵",
    "hotelKanaName": "ひだたかやま　ほんじんひらのや　かちょうあん",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D8327",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D8327%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D8327",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D8327",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/8327/8327.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/8327.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/8327/8327_heya.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/8327/8327map.gif",
    "reviewCount": 832,
    "reviewAverage": 4.91,
    "userReview": "リピーターも大満足、食事と接客が素晴らしい昨年に引き続き今年はリピータとして9月4日に宿泊した60代と50代の夫婦です。総合評価は今回も大満足でした。来年も機会あえば是非とも利用したいと思いま…",
    "hotelMinCharge": 21631,
    "address1": "岐阜県",
    "address2": "高山市本町1-34",
    "telephoneNo": "0577-34-1234",
    "access": "高山駅より徒歩10分　駅まで無料送迎：随時　車：東海北陸　高山ＩＣ～10分・中央道　松本ＩＣ～120分",
    "parkingInformation": "無料　50台　チェックイン前・チェックアウト後もお預かりいたします",
    "nearestStation": "高山",
    "hotelSpecial": "【高山陣屋】【古い町並】に最も近い宿。上質なおもてなしでさりげなく満たされる極上の時間をゆっくりと…",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D8327",
    "label": "岐阜県高山市ふるさと納税・宮川沿いに並ぶ新鮮野菜と民芸品・飛騨弁が飛び交う「宮川朝市」本陣平野屋 花兆庵",
    "themeTitle": "岐阜県高山市ふるさと納税：宮川朝市や古い町並みへ徒歩数分・飛騨高山屈指の高級料亭旅館「本陣平野屋 花兆庵」",
    "themeDesc": "赤い中橋のたもとに位置し、宮川朝市や陣屋前朝市の散策に最高の立地を誇るハイクラス和風旅館。飛騨高山の風情を映した上質な客室で寛ぎ、極上の飛騨牛や山の恵み・清流川魚を取り入れた四季折々の本格会席料理を堪能できます。",
    "revAvg": "4.9",
    "minCharge": "21,631"
  },
  {
    "hotelNo": 56912,
    "hotelName": "旅館　金丸",
    "hotelKanaName": "かなまる",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D56912",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D56912%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D56912",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D56912",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/56912/56912.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/56912.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/56912/56912_ky.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/56912/56912map.gif",
    "reviewCount": 199,
    "reviewAverage": 3.79,
    "userReview": "料理は絶品だがお風呂の設備に難あり料理が美味しかったです。特に、夕食のイカの刺身、下足の天ぷらが、呼子にきてよかったと満足できる内容でした。朝市もすぐ近く、部屋から船が見えて港町の風情を味わえ…",
    "hotelMinCharge": 6650,
    "address1": "佐賀県",
    "address2": "唐津市呼子町呼子3068",
    "telephoneNo": "0955-82-3921",
    "access": "ＪＲ　西唐津駅より「呼子行」バスにて２５分、「呼子」下車、徒歩５分",
    "parkingInformation": "有り　１５台　無料　予約不要",
    "nearestStation": "西唐津",
    "hotelSpecial": "呼子港の真中に位置し、呼子朝市へ徒歩５分。イカの活造をはじめ、玄界灘の海の幸をお楽しみ下さい",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D56912",
    "label": "佐賀県唐津市呼子町ふるさと納税・呼子の活イカと干物がずらりと並ぶ海辺の市場「呼子朝市」大望閣",
    "themeTitle": "佐賀県唐津市呼子町ふるさと納税：呼子朝市通りまで徒歩圏内・呼子港を望む老舗海鮮宿「旅館 金丸」",
    "themeDesc": "呼子港の目の前に佇み、呼子朝市の散策や活気あふれる港町の情景を楽しむのに最適な純和風旅館。透き通るように美しい名物の呼子活イカ姿造りをはじめ、玄界灘の荒波で育った新鮮な海の幸尽くしの夕食コースが自慢です。",
    "revAvg": "3.8",
    "minCharge": "6,650"
  }
];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* パンくずリスト */}
      <nav className="bg-white border-b border-slate-200 py-3 px-4 text-xs text-slate-500">
        <div className="max-w-5xl mx-auto flex items-center space-x-2">
          <Link href="/" className="hover:text-emerald-600 transition">ホーム</Link>
          <span>&gt;</span>
          <span className="text-slate-700 font-medium">日本三大朝市＆活気あふれる旬市場・ご当地美食宿×ふるさと納税ガイド</span>
        </div>
      </nav>

      {/* ヒーローヘッダー */}
      <header className="relative bg-gradient-to-br from-emerald-950 via-slate-900 to-teal-950 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-block bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-semibold px-3 py-1 rounded-full mb-2">
            日本三大朝市・朝活グルメ特集
          </div>
          <h1 className="text-2xl md:text-4xl font-bold leading-tight tracking-tight">
            日本三大朝市＆活気あふれる旬市場・ご当地美食宿×ふるさと納税ガイド
          </h1>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-3xl mx-auto pt-2">
            土地の人々の暮らしと旬の味覚がぎゅっと凝縮された、日本を代表する青空市場「日本三大朝市」――天正年間から430年以上の歴史を誇り勝浦港の獲れたて鮮魚や房総の採れたて野菜がずらりと並ぶ千葉の「勝浦朝市」、清流宮川のほとりに毎朝テントが並び飛騨弁のおばあちゃんたちとの会話が心温まる岐阜の「飛騨高山・宮川朝市」、そして日本三大呼子イカの産地として名高く露店で焼き立ての干物やいかしゅうまいを頬張れる佐賀の「呼子朝市」。朝市の近くに前泊するからこそ体験できる、混雑前の清々しい朝の活気と至高の朝ごはんを楽天ふるさと納税でお楽しみください。
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
            夜明けと共に響く威勢のよい掛け声。土地の美味と温もりに触れる朝市ステイ
          </h2>
          <p className="text-slate-600 leading-relaxed text-sm md:text-base">
            土地の人々の暮らしと旬の味覚がぎゅっと凝縮された、日本を代表する青空市場「日本三大朝市」――天正年間から430年以上の歴史を誇り勝浦港の獲れたて鮮魚や房総の採れたて野菜がずらりと並ぶ千葉の「勝浦朝市」、清流宮川のほとりに毎朝テントが並び飛騨弁のおばあちゃんたちとの会話が心温まる岐阜の「飛騨高山・宮川朝市」、そして日本三大呼子イカの産地として名高く露店で焼き立ての干物やいかしゅうまいを頬張れる佐賀の「呼子朝市」。朝市の近くに前泊するからこそ体験できる、混雑前の清々しい朝の活気と至高の朝ごはんを楽天ふるさと納税でお楽しみください。
          </p>
        </section>

        {/* メリット3選 */}
        <section className="space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
              ふるさと納税×日本三大朝市朝活グルメ 3つのメリット
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
                  朝市会場まで徒歩圏内！朝一番の品揃えが最も充実した時間帯にゆっくりお買い物
                </h3>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                  人気の限定品や獲れたて魚介を一番乗りで確保し、市場ならではの食べ歩きを満喫。
                </p>
              </div>
            </div>
            <div key="1" className="bg-white rounded-xl p-6 shadow-sm border border-slate-200/80 flex flex-col justify-between hover:border-emerald-300 transition duration-200">
              <div className="space-y-3">
                <span className="inline-block w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 font-bold text-center leading-8 text-sm">
                  02
                </span>
                <h3 className="font-bold text-base text-slate-900 leading-snug">
                  勝浦の金目鯛・生カツオ、飛騨牛ステーキや朴葉味噌、呼子の透き通る活イカ姿造り
                </h3>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                  夕食には各地最高峰のブランド食材会席を味わい、朝食は朝市の活気と共に楽しむ贅沢。
                </p>
              </div>
            </div>
            <div key="2" className="bg-white rounded-xl p-6 shadow-sm border border-slate-200/80 flex flex-col justify-between hover:border-emerald-300 transition duration-200">
              <div className="space-y-3">
                <span className="inline-block w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 font-bold text-center leading-8 text-sm">
                  03
                </span>
                <h3 className="font-bold text-base text-slate-900 leading-snug">
                  楽天ふるさと納税宿泊クーポンで老舗旅館や快適なシティホテルをお得に予約
                </h3>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                  家族旅行や気ままな一人旅でも、寄付金額に応じた最大30%オフの即時割引クーポンでスマートにお得ステイ。
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
            あわせて読みたい日本の名所・伝統文化と絶景宿特集
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            
            <Link href="/furusato-tax-three-great-ekiben-gourmet-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三大駅弁＆ご当地名物グルメ旅名宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                森・横川・松阪。
              </p>
            </Link>
            <Link href="/furusato-tax-three-great-ramen-capitals-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三大ラーメン＆本場の名店巡り名宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                喜多方・札幌・博多。
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
