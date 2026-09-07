import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '日本三大美林＆天然木アロマと森林浴・癒やしのリトリート温泉宿×ふるさと納税完全ガイド【2026年最新】青森ヒバ・秋田スギ・木曽ヒノキ',
  description: '深呼吸したくなる天然木のアロマと原生林の静寂！青森下北半島「青森ヒバ」日本最大の美林とプラザホテルむつ、秋田白神「天然秋田スギ」樹齢200年超の巨木と白神山地ホテルゆとりあ藤里、長野木曽路「木曽ヒノキ」伊勢神宮のご神木を育む御杣山とおん宿蔦屋。日本三大美林のフィトンチッドに包まれるリトリート旅を楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
  keywords: '日本三大美林・森林浴リトリート特集, 楽天ふるさと納税, 温泉宿, ふるさと納税 旅行, 高級旅館, ホテル予約, 2026年旅行',
  openGraph: {
    title: '日本三大美林＆天然木アロマと森林浴・癒やしのリトリート温泉宿×ふるさと納税完全ガイド【2026年最新】青森ヒバ・秋田スギ・木曽ヒノキ',
    description: '深呼吸したくなる天然木のアロマと原生林の静寂！青森下北半島「青森ヒバ」日本最大の美林とプラザホテルむつ、秋田白神「天然秋田スギ」樹齢200年超の巨木と白神山地ホテルゆとりあ藤里、長野木曽路「木曽ヒノキ」伊勢神宮のご神木を育む御杣山とおん宿蔦屋。日本三大美林のフィトンチッドに包まれるリトリート旅を楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    type: 'article',
    url: 'https://croud-travel.pages.dev/furusato-tax-three-great-beautiful-forests-stay',
    siteName: 'トラベルポータル',
  },
};

export default function Page() {
  const officialAffUrl = 'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F';

  const hotels = [
  {
    "hotelNo": 2975,
    "hotelName": "プラザホテル　むつ　ＪＲ大湊線下北駅前（ＢＢＨホテルグループ）",
    "hotelKanaName": "ぷらざほてる　むつ　じぇいあーるおおみなとせんしもきたえきまえ（びーびーえいちほてるぐるーぷ）",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D2975",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D2975%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D2975",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D2975",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/2975/2975.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/2975.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/2975/2975_sgl.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/2975/2975map.gif",
    "reviewCount": 1193,
    "reviewAverage": 3.9,
    "userReview": "立地が便利でかき氷や朝食も楽しめた設備は古い感じかしますが、隣にコンビニやお土産屋などもあり立地的には便利でした。ウェルカムかき氷などもあり嬉しいサービスもありました。朝食は最低限ですがセ…　2026-09-05 19:42:31投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=2975\" class=\"3click\">つづきはこちら</a>",
    "hotelMinCharge": 5000,
    "address1": "青森県",
    "address2": "むつ市下北町2-46",
    "telephoneNo": "050-1724-2576",
    "access": "ＪＲ大湊線下北駅から徒歩3分。",
    "parkingInformation": "有り　２７０台　無料",
    "nearestStation": "下北",
    "hotelSpecial": "★浴室に窓のついたビューバスルームあり★JR下北駅より徒歩3分！恐山観光にも便利な好立地♪",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D2975",
    "featureKey": "forest_hiba",
    "featureLabel": "青森県むつ市・風間浦村ふるさと納税・天然ヒバの清々しいアロマと渓流露天「青森ヒバ美林」下北半島名湯ステイ",
    "themeTitle": "青森県むつ市ふるさと納税：日本最大の青森ヒバ美林への玄関口「プラザホテルむつ」",
    "themeDesc": "下北半島の中心・むつ市に位置し、川内川渓谷や薬研温泉の青森ヒバ美林トレッキングの拠点ホテル。駅前すぐの好立地で、下北名物の大間マグロやホタテ、海峡サーモンなど津軽海峡の獲れたての海の幸を味わうグルメ旅をお得に満喫できます。",
    "revAvg": "3.9",
    "minCharge": "5,000"
  },
  {
    "hotelNo": 141606,
    "hotelName": "白神山地　ホテルゆとりあ藤里",
    "hotelKanaName": "しらかみさんち　ほてるゆとりあふじさと",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D141606",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D141606%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D141606",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D141606",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/141606/141606.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/141606.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/141606/141606_kya.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/141606/141606map.gif",
    "reviewCount": 195,
    "reviewAverage": 4.37,
    "userReview": "停電のアクシデントも夕食と雰囲気で満足大雨により停電が発生し、朝のお風呂がお湯が出ないアクシデントがありましたが、全体的に落ち着ける宿です。夕食も工夫されており、満足できました。また、利用…　2026-09-03 18:39:02投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=141606\" class=\"3click\">つづきはこちら</a>",
    "hotelMinCharge": 7850,
    "address1": "秋田県",
    "address2": "山本郡藤里町藤琴上湯ノ沢1-2",
    "telephoneNo": "0185-79-1070",
    "access": "JR二ツ井駅より路線バスもしくは車で約20分・大館能代空港から車で約35分・秋田空港より車で約1時間40分",
    "parkingInformation": "有り　１００台　無料　予約不要",
    "nearestStation": "",
    "hotelSpecial": "★世界遺産白神山地の麓に佇む宿★秋田の≪郷土料理≫と≪美肌の湯≫で人気の湯の沢温泉を堪能",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D141606",
    "featureKey": "forest_sugi",
    "featureLabel": "秋田県能代市・北秋田市ふるさと納税・樹齢200年超の美しき巨木林「天然秋田杉」きりたんぽと能代ステイ",
    "themeTitle": "秋田県藤里町・能代市ふるさと納税：世界遺産白神山地と天然秋田杉の懐に抱かれる「ホテルゆとりあ藤里」",
    "themeDesc": "白神山地の南麓、天然秋田杉の原生林を望む静かな温泉リゾート。秋田杉の温もりあふれる館内と肌をつるつるにする天然温泉露天風呂で森林浴の疲れを癒やし、白神山地の湧水で育った鮎や比内地鶏、秋田名物のきりたんぽ鍋を堪能できます。",
    "revAvg": "4.4",
    "minCharge": "7,850"
  },
  {
    "hotelNo": 6067,
    "hotelName": "きそふくしま温泉　街道浪漫　おん宿　蔦屋",
    "hotelKanaName": "きそふくしまおんせん　かいどうろまん　おんやど　つたや",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D6067",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D6067%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D6067",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D6067",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/6067/6067.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/6067.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/6067/6067_lob.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/6067/6067map.gif",
    "reviewCount": 573,
    "reviewAverage": 4.24,
    "userReview": "中山道歩きの疲れを癒やす将軍ディナーと温泉中山道を歩き、いただいた将軍ディナーがとてもしみました。部屋風呂でゆっくりして、いい夏旅でしたクチコミの詳細はこちらから　https://review…　2026-09-05 20:32:48投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=6067\" class=\"3click\">つづきはこちら</a>",
    "hotelMinCharge": 8090,
    "address1": "長野県",
    "address2": "木曽郡木曽町福島本町5162",
    "telephoneNo": "0264-22-2010",
    "access": "JR木曽福島駅～徒歩約10分【15：30分16：40分送迎有要予約】伊那IC約40分塩尻IC約60分中津川I約70分",
    "parkingInformation": "有り　20台　無料",
    "nearestStation": "木曽福島",
    "hotelSpecial": "創業300年☆評判料理と木曽川沿い露天風呂【きそふくしま温泉】で心もからだもリフレッシュ♪",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D6067",
    "featureKey": "forest_hinoki",
    "featureLabel": "長野県木曽町・南木曽町ふるさと納税・伊勢神宮のご神木を育む伊勢神宮御杣山「木曽ヒノキ美林」木曽路温泉郷ステイ",
    "themeTitle": "長野県木曽町ふるさと納税：木曽ヒノキの香る宿場町・創業三百余年の歴史を紡ぐ「きそふくしま温泉 街道浪漫 おん宿 蔦屋」",
    "themeDesc": "中山道福島宿の木曽川沿いに建つ、江戸享保年間創業の老舗温泉宿。木曽ヒノキをふんだんに使った大浴場や露天風呂で心地よいアロマに包まれ、夕食は極上の信州牛ステーキや木曽川のイワナ塩焼き、信州十割蕎麦を風情ある個室で楽しめます。",
    "revAvg": "4.2",
    "minCharge": "8,090"
  }
];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* パンくずリスト */}
      <nav className="bg-white border-b border-slate-200 py-3 px-4 text-xs text-slate-500">
        <div className="max-w-5xl mx-auto flex items-center space-x-2">
          <Link href="/" className="hover:text-emerald-600 transition">ホーム</Link>
          <span>&gt;</span>
          <span className="text-slate-700 font-medium">日本三大美林＆森林浴・天然木アロマ温泉宿×ふるさと納税ガイド</span>
        </div>
      </nav>

      {/* ヒーローヘッダー */}
      <header className="relative bg-gradient-to-br from-emerald-950 via-slate-900 to-teal-950 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-block bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-semibold px-3 py-1 rounded-full mb-2">
            日本三大美林・森林浴リトリート特集
          </div>
          <h1 className="text-2xl md:text-4xl font-bold leading-tight tracking-tight">
            日本三大美林＆森林浴・天然木アロマ温泉宿×ふるさと納税ガイド
          </h1>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-3xl mx-auto pt-2">
            悠久の時を生き抜いた日本を代表する最高級木材の原生林「日本三大美林」――下北半島の厳しい風雪に耐え抗菌・リラックス効果抜群のヒノキチオールを豊富に含む青森の「青森ヒバ」、出羽山地から白神山地にかけての厳しい寒暖差が美しい年輪と真紅の木肌を育てる秋田の「天然秋田スギ」、そして尾張徳川家が「木一本、首一つ」と厳格に保護し伊勢神宮の式年遷宮のご神木として使われる長野の「木曽ヒノキ」。木々の放つ芳醇なアロマ（フィトンチッド）に包まれて歩く森林セラピーは、現代人の乱れた自律神経を整え深い安らぎをもたらします。総ヒバ風呂やヒノキ風呂を備えた温泉宿で寛ぎ、大間マグロ・比内地鶏・信州牛と木曽蕎麦を味わう極上の休日を楽天ふるさと納税でお楽しみください。
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
            木漏れ日のカーテン、針葉樹が放つ清らかなフィトンチッド。五感で癒やされる森林リトリート
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>天然のヒノキチオールとフィトンチッド！森林セラピーで心身を最高のリラックスへ</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                樹齢数百年の巨木林を散策し、木造風呂に注がれる名湯温泉で天然アロマの芳香を独占。
              </p>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>下北海峡サーモン＆大間マグロ、秋田比内地鶏＆きりたんぽ、木曽牛＆信州十割蕎麦</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                清らかな森の水が育てた日本屈指の山の幸・川の幸、名物肉料理の贅沢ディナーを堪能。
              </p>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>楽天ふるさと納税宿泊クーポンで自然あふれる森林宿・温泉旅館をお得に予約</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                週末の避暑リゾートや湯治旅でも、寄付金額に応じた最大30%オフの即時割引クーポンでスマートにお得ステイ。
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
                        {h.hotelSpecial || '日本三大急潮のうず潮絶景、日本三大車窓の天空パノラマ、日本三大稲荷の商売繁盛祈願、日本三大美林の森林浴アロマを巡る極上の拠点。四季折々の美食と名湯でお寛ぎください。'}
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
            あわせて読みたい日本の名景・急潮・美林特集
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            
            <Link href="/furusato-tax-three-great-secret-hotsprings-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三大秘湯＆秘境の大自然一軒宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                谷地温泉・祖谷温泉・乳頭温泉郷。
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
            
            <Link href="/furusato-tax-three-great-bihada-onsen-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三大美肌の湯＆とろとろ美肌温泉宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                嬉野・斐乃上・喜連川。
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
