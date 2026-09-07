import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '日本三大白砂青松＆海の絶景パノラマ・海岸リゾート温泉宿×ふるさと納税完全ガイド【2026年最新】天橋立・三保松原・気比の松原',
  description: '白砂と幾千の青松が描く日本の原風景！京都宮津「天橋立」日本三景股のぞきパノラマと和のリゾート文珠荘、静岡「三保松原」世界遺産富士山と羽衣の松望む風景美術館日本平ホテル、福井敦賀「気比の松原」万葉の海浜とホテルルートイン敦賀駅前。日本三大白砂青松（三大松原名勝）のシーサイドオーシャンビューを楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
  keywords: '日本三大白砂青松・海浜絶景特集, 楽天ふるさと納税, 温泉宿, ふるさと納税 旅行, 高級旅館, ホテル予約, 2026年旅行',
  openGraph: {
    title: '日本三大白砂青松＆海の絶景パノラマ・海岸リゾート温泉宿×ふるさと納税完全ガイド【2026年最新】天橋立・三保松原・気比の松原',
    description: '白砂と幾千の青松が描く日本の原風景！京都宮津「天橋立」日本三景股のぞきパノラマと和のリゾート文珠荘、静岡「三保松原」世界遺産富士山と羽衣の松望む風景美術館日本平ホテル、福井敦賀「気比の松原」万葉の海浜とホテルルートイン敦賀駅前。日本三大白砂青松（三大松原名勝）のシーサイドオーシャンビューを楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    type: 'article',
    url: 'https://croud-travel.pages.dev/furusato-tax-three-great-coastal-sceneries-stay',
    siteName: 'トラベルポータル',
  },
};

export default function Page() {
  const officialAffUrl = 'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F';

  const hotels = [
  {
    "hotelNo": 76913,
    "hotelName": "天橋立温泉　和のリゾート　文珠荘",
    "hotelKanaName": "あまのはしだておんせん　わのりぞーと　もんじゅそう",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D76913",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D76913%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D76913",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D76913",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/76913/76913.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/76913.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/76913/76913_to.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/76913/76913map.gif",
    "reviewCount": 539,
    "reviewAverage": 4.5,
    "userReview": "清潔で雰囲気の良い館内と最高の景色に感動館内は清潔で雰囲気も良く素敵な宿でした特別室に滞在しましたが、部屋のお風呂や窓からの景色が最高に良かったですリピートしたいと思いますクチコミの詳…　 ",
    "hotelMinCharge": 16500,
    "address1": "京都府",
    "address2": "宮津市字文珠510",
    "telephoneNo": "0772-22-7111",
    "access": "京都丹後鉄道　天橋立駅より徒歩3分",
    "parkingInformation": "有り　３０台　無料　予約不要",
    "nearestStation": "天橋立",
    "hotelSpecial": "日本三景天橋立の運河に佇む宿。2023年春サウナ付大浴場誕生。新しい和のリゾートをお楽しみください。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D76913",
    "label": "京都府宮津市ふるさと納税・日本三景白砂青松の奇跡の砂州「天橋立」股のぞきパノラマと天橋立温泉文珠荘",
    "themeTitle": "京都府宮津市ふるさと納税：日本三景・白砂青松の奇跡の回廊「天橋立」と名匠設計「天橋立温泉 和のリゾート 文珠荘」",
    "themeDesc": "天橋立運河のほとりに佇み、吉村順三氏の近代数寄屋建築美が光る名宿。全室から松並木と庭園を望み、天橋立温泉の露天風呂で寛ぎ、丹後の松葉ガニや寒ブリしゃぶしゃぶ、丹後コシヒカリの美味に心奪われます。",
    "revAvg": "4.5",
    "minCharge": "16,500"
  },
  {
    "hotelNo": 13913,
    "hotelName": "日本平ホテル",
    "hotelKanaName": "にっぽんだいらほてる",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D13913",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D13913%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D13913",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D13913",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/13913/13913.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/13913.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/13913/13913_you.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/13913/13913map.gif",
    "reviewCount": 1074,
    "reviewAverage": 4.68,
    "userReview": "花火に癒やされ、リラックスして大会へ翌日の陸上大会の為宿泊しました夜には10分程花火が上がり最高でしたお部屋もリラックス出来る空間でしっかりと疲れも睡眠もとれ大会に挑むことが出来ました…　 ",
    "hotelMinCharge": 8100,
    "address1": "静岡県",
    "address2": "静岡市清水区馬走1500-2",
    "telephoneNo": "054-335-1131",
    "access": "ＪＲ静岡駅よりバス４０分・タクシー25分（駅からシャトルバス有り）／静岡・清水ＩＣより車で25分",
    "parkingInformation": "有り（400台）　無料　",
    "nearestStation": "静岡",
    "hotelSpecial": "日本平が日本夜景遺産に認定★三保の松原を眼下に富士山を望む絶景を堪能",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D13913",
    "label": "静岡県静岡市清水区ふるさと納税・世界遺産富士山と羽衣伝説の松原「三保松原」風景美術館・日本平ホテル",
    "themeTitle": "静岡県静岡市清水区ふるさと納税：三保松原と富士山パノラマを仰ぐ風景美術館「日本平ホテル」",
    "themeDesc": "日本平山頂に位置し、全面ガラス張りのロビーから三保松原・駿河湾・富士山の雄大な絵画的絶景を一望。広大な芝生庭園を散策し、清水港の極上マグロや駿河湾の桜えび、静岡そだち牛のフレンチディナーを優雅に堪能できます。",
    "revAvg": "4.7",
    "minCharge": "8,100"
  },
  {
    "hotelNo": 70274,
    "hotelName": "ホテルルートイン敦賀駅前",
    "hotelKanaName": "るーといんつるがえきまえ",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D70274",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D70274%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D70274",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D70274",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/70274/70274.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/70274.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/70274/70274_gr.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/70274/70274map.gif",
    "reviewCount": 1590,
    "reviewAverage": 4,
    "userReview": "駅近で便利、朝食は少し時間をずらすのがコツ敦賀訪問時は常宿にしています。駅に近く、コンビニやスーパーも徒歩圏内にあり非常に便利な立地です。設備は少し古めですが、清掃はこまめに行われていて清潔感はあ…　 ",
    "hotelMinCharge": 5650,
    "address1": "福井県",
    "address2": "敦賀市鉄輪町1-6-2",
    "telephoneNo": "050-5576-8005",
    "access": "JR北陸本線敦賀駅西口より約200m徒歩で2分、北陸自動車道敦賀ICより約3.0km車で約5分",
    "parkingInformation": "有　89台分　無料　（先着順）　満車時は有料駐車場のご案内（料金はお客様ご負担となります）",
    "nearestStation": "敦賀",
    "hotelSpecial": "◆無料朝食バイキング6:00～9:00（本館1階）　◆男女別大浴場　◆Ｗｉ-Ｆｉ完備",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D70274",
    "label": "福井県敦賀市ふるさと納税・白砂青松の景勝地「気比の松原」越前ガニ・若狭ふぐとホテルルートイン敦賀駅前",
    "themeTitle": "福井県敦賀市ふるさと納税：万葉の歴史を刻む敦賀湾の名勝「気比の松原」と「ホテルルートイン敦賀駅前」",
    "themeDesc": "三保松原・虹の松原と並ぶ名勝・気比の松原へアクセス良好。敦賀駅前至近の「ルートイン敦賀駅前」を拠点に、ラジウム人工温泉大浴場で寛ぎ、敦賀港直送の越前がにや敦賀真鯛、名物ソースカツ丼など若狭湾の味覚を楽しめます。",
    "revAvg": "4.0",
    "minCharge": "5,650"
  }
];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* パンくずリスト */}
      <nav className="bg-white border-b border-slate-200 py-3 px-4 text-xs text-slate-500">
        <div className="max-w-5xl mx-auto flex items-center space-x-2">
          <Link href="/" className="hover:text-emerald-600 transition">ホーム</Link>
          <span>&gt;</span>
          <span className="text-slate-700 font-medium">日本三大白砂青松＆海岸絶景パノラマ宿×ふるさと納税ガイド</span>
        </div>
      </nav>

      {/* ヒーローヘッダー */}
      <header className="relative bg-gradient-to-br from-emerald-950 via-slate-900 to-teal-950 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-block bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-semibold px-3 py-1 rounded-full mb-2">
            日本三大白砂青松・海浜絶景特集
          </div>
          <h1 className="text-2xl md:text-4xl font-bold leading-tight tracking-tight">
            日本三大白砂青松＆海岸絶景パノラマ宿×ふるさと納税ガイド
          </h1>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-3xl mx-auto pt-2">
            日本古来の歌枕として万葉集や百人一首に詠まれ、絵画や庭園の理想景とされてきた「日本三大白砂青松（三大松原）」――神が天と地を架けるために創ったという神話が残り約5000本の松が砂州を覆う日本三景・京都の「天橋立」、駿河湾越しに仰ぎ見る霊峰富士と波打ち際の松林が世界文化遺産の構成資産に登録された静岡の「三保松原」、そして聖徳太子の時代に一夜にして出現したという伝説が残り敦賀湾の穏やかな波とアカマツ・クロマツが広がる福井の「気比の松原」。寄せては返す波の音と潮の香り、そして緑の松のコントラストは、日本人の美意識の原点と言えます。松原や海を一望する海辺のリゾートホテルや老舗料理旅館に泊まり、日本海の松葉ガニや駿河湾の桜えび・駿河湾鮮魚を味わう特別な休日を楽天ふるさと納税でお楽しみください。
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
            青い海と白い砂浜、風にそよぐ緑の松林。古人が愛した白砂青松の美しき弓状海岸へ
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>松原の遊歩道や海岸線へ徒歩すぐ！朝夕の幻想的な海辺をプライベート散策</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                夕日に染まる砂浜や、朝靄に包まれる松林の静けさを、宿のすぐ前から贅沢に満喫。
              </p>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>丹後松葉ガニ＆寒ブリ、駿河湾桜えび＆清水マグロ、越前ガニ＆若狭ふぐ</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                豊かな海浜が育んだ最高級の海の幸を、宿自慢の本格会席で心ゆくまで堪能。
              </p>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>楽天ふるさと納税宿泊クーポンでオーシャンビュー名旅館をお得にステイ</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                名勝地の特等席に佇む人気ホテルも、寄付金額に応じた即時割引クーポンで実質2,000円負担の快適宿泊。
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
                        {h.hotelSpecial || '日本三大清流のせせらぎ、千年の巨樹パワースポット、三大八幡宮の開運、白砂青松の海浜絶景を巡る極上の旅路。四季折々の美食と名湯でお寛ぎください。'}
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
            あわせて読みたい日本の清流・名勝・聖地特集
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            
            <Link href="/furusato-tax-three-coastal-pine-glamping-resort-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三大松原・海岸グランピング宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                虹の松原・気比の松原・三保松原。
              </p>
            </Link>
            
            <Link href="/furusato-tax-three-great-precipitous-coasts-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三大名勝断崖海岸＆パノラマ海宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                北山崎・東尋坊・足摺岬。
              </p>
            </Link>
            
            <Link href="/furusato-tax-three-great-tidal-flats-nature-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三大干潟＆海の満ち引き海鮮宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                有明海・諫早湾・曽根干潟。
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
