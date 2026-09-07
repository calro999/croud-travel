import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '日本三大古代湖＆数十万年の歴史美・湖畔リゾートと温泉名宿×ふるさと納税完全ガイド【2026年最新】琵琶湖・諏訪湖・三方五湖',
  description: '地球の記憶を宿す悠久の古代湖！400万年の歴史を誇る日本最大の古代湖「琵琶湖」琵琶湖ホテル、フォッサマグナに誕生し御神渡りの神話息づく「諏訪湖」上諏訪温泉しんゆ、7万年の年縞が世界標準となった奇跡の湖群「三方五湖（水月湖）」若狭きらら温泉水月花。日本三大古代湖の静かな湖面と温泉ステイを楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
  keywords: '日本三大古代湖・水辺リトリート特集, 楽天ふるさと納税, 温泉宿, ふるさと納税 旅行, 高級旅館, ホテル予約, 2026年旅行',
  openGraph: {
    title: '日本三大古代湖＆数十万年の歴史美・湖畔リゾートと温泉名宿×ふるさと納税完全ガイド【2026年最新】琵琶湖・諏訪湖・三方五湖',
    description: '地球の記憶を宿す悠久の古代湖！400万年の歴史を誇る日本最大の古代湖「琵琶湖」琵琶湖ホテル、フォッサマグナに誕生し御神渡りの神話息づく「諏訪湖」上諏訪温泉しんゆ、7万年の年縞が世界標準となった奇跡の湖群「三方五湖（水月湖）」若狭きらら温泉水月花。日本三大古代湖の静かな湖面と温泉ステイを楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    type: 'article',
    url: 'https://croud-travel.pages.dev/furusato-tax-three-great-ancient-lakes-resort-stay',
    siteName: 'トラベルポータル',
  },
};

export default function Page() {
  const officialAffUrl = 'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F';

  const hotels = [
  {
    "hotelNo": 4843,
    "hotelName": "琵琶湖ホテル",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D4843",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D4843%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D4843",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D4843",
    "hotelKanaName": "びわこほてる",
    "hotelSpecial": "【全室レイクビュー】天然温泉・露天風呂も楽しめる湖畔のリゾートホテル",
    "hotelMinCharge": 8500,
    "address1": "滋賀県",
    "address2": "大津市浜町2-40",
    "telephoneNo": "077-524-1255",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/4843/4843.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/4843/4843_room.jpg",
    "reviewCount": 2672,
    "reviewAverage": 4.53,
    "userReview": "「琵琶湖を一望できる素敵なホテル」「家族旅行で利用しました。ホテルから見える琵琶湖の景色がとてもきれいで、ゆっくり過ごすことができました。お部屋も清潔感があり、スタッフの方々の対応も丁寧で気持ちよ…　2026-09-05 21:16:50投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=4843\" class=\"3click\">つづきはこちら</a>",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D4843",
    "access": "JR大津駅より徒歩約15分／京阪びわ湖浜大津駅より徒歩約5分／名神大津ICより約10分／無料駐車場",
    "label": "滋賀県大津市ふるさと納税・400万年の時を刻む日本最大の古代湖「琵琶湖」琵琶湖ホテル",
    "themeTitle": "滋賀県大津市ふるさと納税：全室レイクビュー・琵琶湖の美景と天然温泉「琵琶湖ホテル」",
    "themeDesc": "琵琶湖畔に佇み、すべての客室から雄大な琵琶湖を一望できるリゾートホテル。天然温泉「瑠璃の湯」で旅の疲れを癒やし、近江牛や滋賀県産オーガニック野菜を使った本格フレンチや鉄板焼き、和食会席で至福のひとときを過ごせます。",
    "revAvg": "4.5",
    "minCharge": "8,500"
  },
  {
    "hotelNo": 130095,
    "hotelName": "上諏訪温泉　しんゆ（親湯）",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D130095",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D130095%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D130095",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D130095",
    "hotelKanaName": "かみすわおんせん　しんゆ",
    "hotelSpecial": "諏訪湖畔に佇む【癒し】とおもてなしの宿◯自家源泉の湯と【個室料亭】での美食【衛生消毒プログラム導入】",
    "hotelMinCharge": 12390,
    "address1": "長野県",
    "address2": "諏訪市湖岸通り2-6-30",
    "telephoneNo": "0266-54-2020",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/130095/130095.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/130095/130095_war.jpg",
    "reviewCount": 2140,
    "reviewAverage": 4.58,
    "userReview": "早期予約でお得に、4社巡りツアーも大満足早期予約で割安で予約が取れました。老舗旅館らしい良さが接客や料理など随所に感じられました。地場野菜を多く使った食事は美味しく頂けました。特に気に入ったのは、…　2026-09-05 22:44:34投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=130095\" class=\"3click\">つづきはこちら</a>",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D130095",
    "access": "JR上諏訪駅より徒歩10分(送迎バス有。最終17時)、中央道諏訪ICより車10分。諏訪湖目の前。",
    "label": "長野県諏訪市ふるさと納税・神話息づく神秘の古代湖「諏訪湖」上諏訪温泉しんゆ（親湯）",
    "themeTitle": "長野県諏訪市ふるさと納税：諏訪湖畔の癒やしの宿・神秘なる湖を望む露天風呂「上諏訪温泉 しんゆ（親湯）」",
    "themeDesc": "諏訪湖のほとりに位置し、ヒーリング音楽が流れる落ち着いた大人の湯宿。自家源泉の美肌温泉に浸かりながら諏訪湖の借景を楽しめ、地産地消の美と健康を意識した創作和食会席が女性やカップルにも高い評価を得ています。",
    "revAvg": "4.6",
    "minCharge": "12,390"
  },
  {
    "hotelNo": 72715,
    "hotelName": "若狭みかた　きらら温泉　水月花",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D72715",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D72715%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D72715",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D72715",
    "hotelKanaName": "わかさみかた　きららおんせん　すいげっか",
    "hotelSpecial": "目の前に三方五湖。美しい自然に囲まれた優雅な休日を満喫♪モーニングクルーズも人気☆全館WiFi完備☆",
    "hotelMinCharge": 8800,
    "address1": "福井県",
    "address2": "三方上中郡若狭町海山51-13",
    "telephoneNo": "0770-47-1234",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/72715/72715.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/72715/72715_wa.jpg",
    "reviewCount": 812,
    "reviewAverage": 3.96,
    "userReview": "湖を望む絶景のお部屋で素敵なひととき湖が目の前に広がるお部屋でとても素敵な時間を過ごすことができました。今回は1泊でしたが、今度はもっとゆっくり滞在したいと思いました。クチコミの詳細はこち…　2026-09-05 00:17:51投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=72715\" class=\"3click\">つづきはこちら</a>",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D72715",
    "access": "ＪＲ：三方駅よりお車で20分。車：舞鶴若狭自動車道 若狭三方ＩＣで降りて20分。",
    "label": "福井県若狭町ふるさと納税・年縞が刻む奇跡の地球史「三方五湖・水月湖」若狭きらら温泉水月花",
    "themeTitle": "福井県若狭町ふるさと納税：水月湖の湖畔に建つ唯一の温泉宿・若狭の美食「若狭みかた きらら温泉 水月花」",
    "themeDesc": "世界標準の年縞が眠る水月湖のほとりに佇み、館内すべての場所から静かな湖面を眺められる癒やしの宿。宿専用桟橋からのモーニングクルーズや、冬の若狭ふぐ・若狭牛・越前ガニの豪華会席が自慢です。",
    "revAvg": "4.0",
    "minCharge": "8,800"
  }
];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* パンくずリスト */}
      <nav className="bg-white border-b border-slate-200 py-3 px-4 text-xs text-slate-500">
        <div className="max-w-5xl mx-auto flex items-center space-x-2">
          <Link href="/" className="hover:text-emerald-600 transition">ホーム</Link>
          <span>&gt;</span>
          <span className="text-slate-700 font-medium">日本三大古代湖＆湖畔リゾート・温泉名宿×ふるさと納税ガイド</span>
        </div>
      </nav>

      {/* ヒーローヘッダー */}
      <header className="relative bg-gradient-to-br from-emerald-950 via-slate-900 to-teal-950 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-block bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-semibold px-3 py-1 rounded-full mb-2">
            日本三大古代湖・水辺リトリート特集
          </div>
          <h1 className="text-2xl md:text-4xl font-bold leading-tight tracking-tight">
            日本三大古代湖＆湖畔リゾート・温泉名宿×ふるさと納税ガイド
          </h1>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-3xl mx-auto pt-2">
            数十万年〜数百一万年以上もの長い地質時代を生き延び、固有の生態系と神話・歴史を育んできた「日本三大古代湖」――およそ400万年前に誕生し日本最大の面積を誇る滋賀の「琵琶湖」、中央構造線と糸魚川静岡構造線が交差する断層湖で冬の「御神渡り」神事が伝わる長野の「諏訪湖」、そして数万年間にわたり一度も水底がかき乱されず世界標準の地質年代時計「年縞」が堆積した奇跡の水月湖を含む福井の「三方五湖」。静寂に包まれた湖畔を散策し、レイクビューの客室や露天風呂から刻々と移ろう湖面を眺め、近江牛・信州サーモン・若狭フグの美食を堪能する特別な旅を楽天ふるさと納税でお楽しみください。
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
            悠久の時を湛える神秘の古代湖。水面のきらめきと名湯に身を委ねる極上の休息
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>湖面に映る朝日と夕景・広大なパノラマビューを望む全室レイクビューステイ</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                静けさに包まれた朝の湖畔散歩や、夕日に染まる湖水、夜の湖畔ライトアップを満喫。
              </p>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>近江牛のすき焼き、信州プレミアム牛肉とワカサギ、若狭ふぐと若狭湾の越前ガニ</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                湖と山・海がもたらす極上のご当地ブランド食材と銘酒のペアリングディナー。
              </p>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>楽天ふるさと納税宿泊クーポンで湖畔リゾートホテルや老舗温泉宿をお得に予約</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                水辺のリフレッシュ旅でも、寄付金額に応じた最大30%オフの即時割引クーポンでスマートにお得ステイ。
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
            
            <Link href="/furusato-tax-three-great-high-mountain-passes-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三大急坂・天空峠道＆雲海パノラマ絶景宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                渋峠・富士山スカイライン・温見峠。
              </p>
            </Link>
            
            <Link href="/furusato-tax-three-great-historic-canals-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三大運河＆水郷レトロ・白壁の蔵屋敷と舟流し情趣の名宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                小樽・倉敷・近江八幡。
              </p>
            </Link>
            
            <Link href="/furusato-tax-three-great-clear-rivers-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三大清流＆名水リバーサイド宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                四万十川・長良川・柿田川。
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
