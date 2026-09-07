import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '日本三大松原＆白砂青松ドライブ・絶景シーサイドオーシャンビュー温泉宿×ふるさと納税完全ガイド【2026年最新】三保松原・虹の松原・気比松原',
  description: '白砂と青松、青い海が描く日本の原風景！静岡清水「三保松原」羽衣伝説と霊峰富士の絶景パノラマ・天女の館羽衣ホテル、佐賀唐津「虹の松原」鏡山から見下ろす4.5km100万本の松林と全室東シナ海一望唐津シーサイドホテル、福井敦賀「気比の松原」若狭湾の白砂と赤松・ホテルルートイン敦賀駅前。日本三大松原の海岸美を楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
  keywords: '日本三大松原・白砂青松特集, 楽天ふるさと納税, 温泉宿, ふるさと納税 旅行, 高級旅館, ホテル予約, 2026年旅行',
  openGraph: {
    title: '日本三大松原＆白砂青松ドライブ・絶景シーサイドオーシャンビュー温泉宿×ふるさと納税完全ガイド【2026年最新】三保松原・虹の松原・気比松原',
    description: '白砂と青松、青い海が描く日本の原風景！静岡清水「三保松原」羽衣伝説と霊峰富士の絶景パノラマ・天女の館羽衣ホテル、佐賀唐津「虹の松原」鏡山から見下ろす4.5km100万本の松林と全室東シナ海一望唐津シーサイドホテル、福井敦賀「気比の松原」若狭湾の白砂と赤松・ホテルルートイン敦賀駅前。日本三大松原の海岸美を楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    type: 'article',
    url: 'https://croud-travel.pages.dev/furusato-tax-three-great-pine-groves-stay',
    siteName: 'トラベルポータル',
  },
};

export default function Page() {
  const officialAffUrl = 'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F';

  const hotels = [
  {
    "hotelNo": 7314,
    "hotelName": "天女の館　羽衣ホテル",
    "hotelKanaName": "てんにょのやかた　はごろもほてる",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D7314",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D7314%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D7314",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D7314",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/7314/7314.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/7314.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/7314/7314_war.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/7314/7314map.gif",
    "reviewCount": 307,
    "reviewAverage": 4.17,
    "userReview": "夕食と接客が期待外れで残念正直言って夕食も期待外れで 女将さんの対応もイマイチ微妙 次はないかなクチコミの詳細はこちらから　https://review.travel.rakuten.…　 ",
    "hotelMinCharge": 13200,
    "address1": "静岡県",
    "address2": "静岡市清水区三保1282-1",
    "telephoneNo": "054-334-1234",
    "access": "東名高速清水ICより三保方面へ、羽衣の松を目標に。",
    "parkingInformation": "有り　平地15台(乗用車)　無料 ★EV(電気自動車)充電スタンド有り★",
    "nearestStation": "清水（静岡）",
    "hotelSpecial": "三保の松原中心にあり、羽衣伝説の「羽衣の松」迄庭続きで徒歩１分",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D7314",
    "featureKey": "pine_miho",
    "featureLabel": "静岡県静岡市清水区ふるさと納税・羽衣伝説と世界遺産富士山を望む白砂青松「三保松原」三保シーサイドステイ",
    "themeTitle": "静岡県静岡市清水区ふるさと納税：三保松原・羽衣の松すぐ・純和風庭園に佇む老舗割烹旅館「天女の館 羽衣ホテル」",
    "themeDesc": "世界遺産・三保松原まで徒歩1分、樹齢百余年の銘木が茂る日本庭園に囲まれた名宿。潮風と松の香りに包まれる総檜大浴場で癒やされ、駿河湾の由比桜えびや清水港水揚げの南マグロ、地場野菜を活かした伝統の割烹会席を贅沢に味わえます。",
    "revAvg": "4.2",
    "minCharge": "13,200"
  },
  {
    "hotelNo": 52129,
    "hotelName": "唐津シーサイドホテル",
    "hotelKanaName": "からつしーさいどほてる",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D52129",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D52129%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D52129",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D52129",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/52129/52129.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/52129.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/52129/52129_you1.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/52129/52129map.gif",
    "reviewCount": 2445,
    "reviewAverage": 4.6,
    "userReview": "カブトムシカブトムシをオス・メスペアで頂き、息子が喜んで今も飼育しています。海は荒れていましたが、プールで沢山遊べました。ありがとう御座いました。クチコミの詳細はこちらから　https…　 ",
    "hotelMinCharge": 10300,
    "address1": "佐賀県",
    "address2": "唐津市東唐津4-182",
    "telephoneNo": "0955-75-3300",
    "access": "ＪＲ　東唐津駅より車にて約３分",
    "parkingInformation": "有り　105台　無料　※障がい者スペースは要予約",
    "nearestStation": "東唐津",
    "hotelSpecial": "唐津湾と虹の松原に囲まれた景色と海の幸・山の幸。天然温泉で心身ともにリラックス！",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D52129",
    "featureKey": "pine_nijinomatsubara",
    "featureLabel": "佐賀県唐津市ふるさと納税・鏡山から見下ろす4.5km100万本の黒松林「虹の松原」絶景オーシャンビュー唐津シーサイドホテル",
    "themeTitle": "佐賀県唐津市ふるさと納税：虹の松原と唐津湾を一望する全室オーシャンビュー「唐津シーサイドホテル」",
    "themeDesc": "国の特別名勝・虹の松原に隣接し、白砂の唐津湾ビーチが目の前に広がる名門リゾートホテル。天然温泉のルーフトップサーマルクライムやインフィニティプールを備え、夕食は呼子直送のイカ活造りや極上佐賀牛ステーキを堪能できます。",
    "revAvg": "4.6",
    "minCharge": "10,300"
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
    "reviewCount": 1596,
    "reviewAverage": 4.02,
    "userReview": "久しぶりのルートインホテル駅前で立地がよく、コンビニ近く便利。おふろもちょっと狭いけど、疲れがとれました。食事もおいしく満足。クチコミの詳細はこちらから　https://review.trav…　 ",
    "hotelMinCharge": 5650,
    "address1": "福井県",
    "address2": "敦賀市鉄輪町1-6-2",
    "telephoneNo": "050-5576-8005",
    "access": "JR北陸本線敦賀駅西口より約200m徒歩で2分、北陸自動車道敦賀ICより約3.0km車で約5分",
    "parkingInformation": "有　89台分　無料　（先着順）　満車時は有料駐車場のご案内（料金はお客様ご負担となります）",
    "nearestStation": "敦賀",
    "hotelSpecial": "◆無料朝食バイキング6:00～9:00（本館1階）　◆男女別大浴場　◆Ｗｉ-Ｆｉ完備",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D70274",
    "featureKey": "pine_kehi",
    "featureLabel": "福井県敦賀市ふるさと納税・若狭湾の白砂と赤松青松が織りなす名勝「気比の松原」越前若狭の海の幸ステイ",
    "themeTitle": "福井県敦賀市ふるさと納税：気比の松原と敦賀港への拠点・天然温泉大浴場完備「ホテルルートイン敦賀駅前」",
    "themeDesc": "北陸新幹線敦賀駅前に位置し、名勝・気比の松原や気比神宮への観光アクセス抜群なホテル。ラジウム人工温泉大浴場で疲れを癒やし、無料バイキング朝食付き。夜は敦賀港直送の越前ガニや甘エビ、名物ソースカツ丼など福井グルメを楽しめます。",
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
          <span className="text-slate-700 font-medium">日本三大松原＆白砂青松オーシャンビュー宿×ふるさと納税ガイド</span>
        </div>
      </nav>

      {/* ヒーローヘッダー */}
      <header className="relative bg-gradient-to-br from-emerald-950 via-slate-900 to-teal-950 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-block bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-semibold px-3 py-1 rounded-full mb-2">
            日本三大松原・白砂青松特集
          </div>
          <h1 className="text-2xl md:text-4xl font-bold leading-tight tracking-tight">
            日本三大松原＆白砂青松オーシャンビュー宿×ふるさと納税ガイド
          </h1>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-3xl mx-auto pt-2">
            古来より詩歌や浮世絵に描かれ、日本の海岸景観の最高峰として讃えられてきた「日本三大松原」――駿河湾越しに世界文化遺産・富士山を仰ぎ羽衣伝説の松が今も息づく静岡の「三保松原」、玄界灘の唐津湾沿いに弓なりに4.5kmにわたって100万本の黒松が緑の虹のように連なる佐賀唐津の「虹の松原」、そして敦賀湾の奥深くに赤松と黒松が交錯し白砂の浜辺がどこまでも広がる福井敦賀の「気比の松原」。潮風に揺れる松の緑と寄せては返す白波、そして水平線に沈む夕日を眺める時間は、日常の喧騒を忘れさせてくれる至福のひとときです。松原沿いのシーサイドリゾートや温泉宿を拠点に、清水マグロ・唐津の呼子イカ・越前若狭の海の幸を堪能するドライブ旅を楽天ふるさと納税でお楽しみください。
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
            幾千の青松が防風林となり海を守る。寄せては返す波と松風が奏でる日本の美
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>富士山×松原、玄界灘の100万本黒松、若狭湾の白砂！日本屈指のシーサイドパノラマ</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                松林の木漏れ日を浴びる遊歩道散策や、海と松原を一望する展望露天風呂で絶景を体感。
              </p>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>清水港直送ミナミマグロ、唐津呼子の透明な活イカ＆佐賀牛、敦賀の越前ガニ＆焼き鯖</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                松原が守る豊かな海がもたらす、獲れたて新鮮な海鮮グルメの極上会席を満喫。
              </p>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>楽天ふるさと納税宿泊クーポンで海岸沿いのリゾートホテル・名旅館をお得に予約</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                海岸ドライブや記念日旅行でも、寄付金額に応じた最大30%オフの即時割引クーポンでスマートにお得ステイ。
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
            
            <Link href="/furusato-tax-three-great-sand-dunes-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三大砂丘＆絶景オーシャンビュー温泉宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                鳥取砂丘・中田島砂丘・吹上浜。
              </p>
            </Link>
            
            <Link href="/furusato-tax-three-great-beautiful-ports-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三大美港＆夜景オーシャンビュー宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                清水港・長崎港・神戸港。
              </p>
            </Link>
            
            <Link href="/furusato-tax-three-great-rapid-tidal-currents-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三大急潮＆うず潮絶景・海鮮グルメ宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                鳴門海峡・来島海峡・関門海峡。
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
