import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '日本三大ラーメン＆ご当地麺文化・名湯と屋台街の美食宿×ふるさと納税完全ガイド【2026年最新】喜多方・札幌・博多',
  description: '日本三大ご当地ラーメンの聖地巡礼！福島「喜多方ラーメン」飯豊山の伏流水が育む多加水熟成縮れ麺と会津芦ノ牧温泉丸峰観光ホテル、北海道「札幌味噌ラーメン」濃厚ラードと炒め野菜の黄色い縮れ麺とプレミアホテル中島公園札幌、福岡「博多長浜ラーメン」極細ストレート麺と濃厚白濁豚骨スープに屋台街直結エスペリアホテル博多。日本三大ラーメンの旅を楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
  keywords: '日本三大ラーメン・ご当地麺特集, 楽天ふるさと納税, 温泉宿, ふるさと納税 旅行, 高級旅館, ホテル予約, 2026年旅行',
  openGraph: {
    title: '日本三大ラーメン＆ご当地麺文化・名湯と屋台街の美食宿×ふるさと納税完全ガイド【2026年最新】喜多方・札幌・博多',
    description: '日本三大ご当地ラーメンの聖地巡礼！福島「喜多方ラーメン」飯豊山の伏流水が育む多加水熟成縮れ麺と会津芦ノ牧温泉丸峰観光ホテル、北海道「札幌味噌ラーメン」濃厚ラードと炒め野菜の黄色い縮れ麺とプレミアホテル中島公園札幌、福岡「博多長浜ラーメン」極細ストレート麺と濃厚白濁豚骨スープに屋台街直結エスペリアホテル博多。日本三大ラーメンの旅を楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    type: 'article',
    url: 'https://croud-travel.pages.dev/furusato-tax-three-great-ramen-capitals-stay',
    siteName: 'トラベルポータル',
  },
};

export default function Page() {
  const officialAffUrl = 'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F';

  const hotels = [
  {
    "hotelNo": 20623,
    "hotelName": "会津芦ノ牧温泉　丸峰観光ホテル",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D20623",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D20623%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D20623",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D20623",
    "hotelKanaName": "あいづあしのまきおんせん　まるみねかんこうほてる",
    "hotelSpecial": "2024年3月1日ビュッフェレストランオープン！山々に抱かれた渓谷美を望む【露天風呂付き客室】が人気",
    "hotelMinCharge": 7000,
    "address1": "福島県",
    "address2": "会津若松市大戸町芦ノ牧下夕平1128",
    "telephoneNo": "0242-92-2121",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/20623/20623.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/20623/20623_kan.jpg",
    "reviewCount": 3259,
    "reviewAverage": 4.26,
    "userReview": "心温まる空間で大満足多分3度目、結婚記念日での利用です。毎度変わらずとても気持ちよく利用させていただきました。客室露天も食事も接客もとても満足しています。心が暖かくなる空間です。ま…　 ",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D20623",
    "label": "福島県喜多方市・会津若松市ふるさと納税・朝ラー文化と熟成多加水平打ち縮れ麺「喜多方ラーメン」会津東山温泉名宿",
    "themeTitle": "福島県喜多方市・会津若松市ふるさと納税：喜多方朝ラー巡り拠点・渓流露天風呂と会津馳走「会津芦ノ牧温泉 丸峰観光ホテル」",
    "themeDesc": "喜多方の蔵の町から車で快適にアクセスでき、阿賀川の渓谷美を見下ろす老舗温泉リゾート。自家源泉の渓流露天風呂や広々とした大浴場でリフレッシュした後は、会津牛や岩魚、手打ち蕎麦など会津の豊かな山河の恵み会席を堪能できます。",
    "revAvg": "4.3",
    "minCharge": "7,000",
    "access": "最寄り駅・主要道路よりアクセス良好"
  },
  {
    "hotelNo": 41399,
    "hotelName": "プレミアホテル　中島公園　札幌",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D41399",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D41399%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D41399",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D41399",
    "hotelKanaName": "プレミアホテル　なかじまこうえん　さっぽろ",
    "hotelSpecial": "【中島公園隣接】宿泊者無料ドリンク／北海道食材のハーフブッフェ付ビストロ朝食が高評価★シティホテル",
    "hotelMinCharge": 4000,
    "address1": "北海道",
    "address2": "札幌市中央区南10条西6丁目1-21",
    "telephoneNo": "011-561-1000",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/41399/41399.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/41399/41399_room.jpg",
    "reviewCount": 2475,
    "reviewAverage": 4.34,
    "userReview": "路面電車の乗り場が近く市内散策に便利夫婦での1週間の北海道旅行のうち3泊利用しました。お部屋はバージョンアップで広く綺麗で公園もみえ快適でした。車を置い路面電車で市内を散策しましたが乗…　 ",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D41399",
    "label": "北海道札幌市ふるさと納税・ラード浮かぶ濃厚スープと黄色い縮れ卵麺「札幌味噌ラーメン」すすきの至近美食ステイ",
    "themeTitle": "北海道札幌市ふるさと納税：すすきのラーメン横丁へ徒歩圏内・中島公園の緑を望むシティホテル「プレミアホテル 中島公園 札幌」",
    "themeDesc": "すすきののラーメン名店街や地下鉄駅へ近く、豊平館を望む中島公園の静寂に包まれたハイグレードホテル。高層階からの札幌夜景、北海道産食材を贅沢に取り入れた和洋朝食ビュッフェで、快適な麺巡りステイを楽しめます。",
    "revAvg": "4.3",
    "minCharge": "4,000",
    "access": "最寄り駅・主要道路よりアクセス良好"
  },
  {
    "hotelNo": 165706,
    "hotelName": "エスペリアホテル博多",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D165706",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D165706%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D165706",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D165706",
    "hotelKanaName": "えすぺりあほてるはかた",
    "hotelSpecial": "割引クーポン配布中。バス・トイレ・洗面台が独立、高セキュリティーのＩＣカードシステム導入。",
    "hotelMinCharge": 6776,
    "address1": "福岡県",
    "address2": "福岡市博多区博多駅前2-11-4",
    "telephoneNo": "092-412-7272",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/165706/165706.jpg",
    "roomImageUrl": "",
    "reviewCount": 1738,
    "reviewAverage": 4.2,
    "userReview": "博多駅近くでセキュリティも安心、備品も充実博多駅からも徒歩圏内にあるホテルカードキー方式になっており、エレベーターもルームカードキーをかざすと宿泊階にしか止まらない仕組みになっている。おの…　 ",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D165706",
    "label": "福岡県福岡市ふるさと納税・極細ストレート麺と白濁濃厚豚骨スープ「博多ラーメン」中洲屋台街直結プレミアムステイ",
    "themeTitle": "福岡県福岡市ふるさと納税：博多駅・中洲屋台街の絶好拠点・洗練された大人の隠れ家「エスペリアホテル博多」",
    "themeDesc": "JR博多駅博多口から徒歩数分、中洲の屋台街やキャナルシティへもアクセス抜群なスタイリッシュホテル。全室独立型のバス・トイレ・洗面台を完備し、博多ラーメンのハシゴ旅やもつ鍋・明太子グルメを味わい尽くす旅に最適です。",
    "revAvg": "4.2",
    "minCharge": "6,776",
    "access": "最寄り駅・主要道路よりアクセス良好"
  }
];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* パンくずリスト */}
      <nav className="bg-white border-b border-slate-200 py-3 px-4 text-xs text-slate-500">
        <div className="max-w-5xl mx-auto flex items-center space-x-2">
          <Link href="/" className="hover:text-emerald-600 transition">ホーム</Link>
          <span>&gt;</span>
          <span className="text-slate-700 font-medium">日本三大ラーメン＆名湯・屋台街めぐり美食宿×ふるさと納税ガイド</span>
        </div>
      </nav>

      {/* ヒーローヘッダー */}
      <header className="relative bg-gradient-to-br from-emerald-950 via-slate-900 to-teal-950 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-block bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-semibold px-3 py-1 rounded-full mb-2">
            日本三大ラーメン・ご当地麺特集
          </div>
          <h1 className="text-2xl md:text-4xl font-bold leading-tight tracking-tight">
            日本三大ラーメン＆名湯・屋台街めぐり美食宿×ふるさと納税ガイド
          </h1>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-3xl mx-auto pt-2">
            日本全国津々浦々にあるご当地麺のなかでも、圧倒的な知名度と歴史的背景を誇る「日本三大ラーメン」――飯豊山のまろやかな伏流水を使い「朝ラー」文化が定着した平打ち熟成多加水麺に澄んだ豚骨醤油スープが絶品の福島の「喜多方ラーメン」、極寒の北国で冷めないよう熱々のラードを張り香ばしい炒め野菜と濃厚味噌が絡み合う黄色い縮れ卵麺が特徴の北海道の「札幌味噌ラーメン」、そして替玉発祥の地として知られ白濁するまで強火で炊き出した豚骨スープに極細ストレート麺を合わせ中洲の屋台文化とともに愛される福岡の「博多ラーメン」。麺巡りの合間には美肌の温泉に浸かり、ご当地ブランド牛や市場の海鮮も味わう満腹美食旅を楽天ふるさと納税でお楽しみください。
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
            朝ラーから深夜の〆まで！日本を代表する三大ラーメンの聖地で味わう熱き一杯と快適ホテル
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>喜多方の朝ラー・札幌すすきのの深夜味噌・博多中洲の屋台ハシゴ麺巡り</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                有名店から地元民御用達の名店まで、行列に並んででも食べたいご当地本場の味を完全制覇。
              </p>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>会津地鶏と馬刺し、北海道ジンギスカンと毛ガニ、博多もつ鍋と水炊き</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                ラーメンだけにとどまらない、各都市が誇る名物郷土料理と地酒のペアリングを満喫。
              </p>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>楽天ふるさと納税宿泊クーポンで駅前シティホテルや名湯旅館をお得に予約</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                食べ歩きやグルメ旅でも、寄付金額に応じた最大30%オフの即時割引クーポンでスマートにお得ステイ。
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
                        {h.hotelSpecial || '日本三大そばの打ち立ての香り、日本三大運河のレトロな水郷風景、日本三大ラーメンの熱気溢れる極上スープ、日本三大ガラス工芸の町の繊細な輝きを巡る特別な拠点。四季折々の美食と名湯でお寛ぎください。'}
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
            あわせて読みたい全国の麺文化・水辺・工芸名宿特集
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            
            <Link href="/furusato-tax-three-great-soba-noodles-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三大そば＆打ち立て蕎麦の芳香・名水と門前宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                戸隠・出雲・盛岡。
              </p>
            </Link>
            
            <Link href="/furusato-tax-three-great-udons-gourmet-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三大うどん＆極上出汁・麺匠の技が光る名宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                讃岐うどん・稲庭うどん・水沢うどん。
              </p>
            </Link>
            
            <Link href="/furusato-tax-award-winning-breakfast-gourmet-hotel-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                朝食日本一受賞・究極の朝ごはんホテル×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                函館・神戸・金沢の贅沢朝食。
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
