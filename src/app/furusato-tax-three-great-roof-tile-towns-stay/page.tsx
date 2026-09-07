import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '日本三大瓦の町＆美しいいぶし銀の街並み・赤瓦景観と名湯美食宿×ふるさと納税完全ガイド【2026年最新】淡路瓦・三州瓦・石州瓦',
  description: '日本の屋根を守り抜いた匠の技と伝統の景観！兵庫「淡路瓦」いぶし銀の風情と淡路牛・あわかん釣りと家族の体験型旅館、愛知「三州瓦」日本一の瓦産地・刈谷エースイン刈谷、島根「石州瓦」日本海の夕日に輝く赤瓦の町並みとMASCOS HOTEL。日本三大瓦の町を巡る工芸と美食の旅を楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
  keywords: '日本三大瓦の町・伝統窯元特集, 楽天ふるさと納税, 温泉宿, ふるさと納税 旅行, 高級旅館, ホテル予約, 2026年旅行',
  openGraph: {
    title: '日本三大瓦の町＆美しいいぶし銀の街並み・赤瓦景観と名湯美食宿×ふるさと納税完全ガイド【2026年最新】淡路瓦・三州瓦・石州瓦',
    description: '日本の屋根を守り抜いた匠の技と伝統の景観！兵庫「淡路瓦」いぶし銀の風情と淡路牛・あわかん釣りと家族の体験型旅館、愛知「三州瓦」日本一の瓦産地・刈谷エースイン刈谷、島根「石州瓦」日本海の夕日に輝く赤瓦の町並みとMASCOS HOTEL。日本三大瓦の町を巡る工芸と美食の旅を楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    type: 'article',
    url: 'https://croud-travel.pages.dev/furusato-tax-three-great-roof-tile-towns-stay',
    siteName: 'トラベルポータル',
  },
};

export default function Page() {
  const officialAffUrl = 'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F';

  const hotels = [
  {
    "hotelNo": 9567,
    "hotelName": "あわかん～釣りと家族の体験型旅館～",
    "hotelKanaName": "あわかん",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D9567",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D9567%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D9567",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D9567",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/9567/9567.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/9567.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/9567/9567_heya.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/9567/9567map.gif",
    "reviewCount": 1545,
    "reviewAverage": 4.62,
    "userReview": "子供におすすめ小学生の子供が大満足。今まで行ったホテルで1番楽しかったとのこと。また行きたいと言っている。クチコミの詳細はこちらから　https://review.travel.rakuten…　 ",
    "hotelMinCharge": 13910,
    "address1": "兵庫県",
    "address2": "洲本市小路谷1053-17　",
    "telephoneNo": "0799-26-0111",
    "access": "全室Wi-Fi無料　【お車】洲本I.C.下りて約15分【高速バス】ＪＲ三宮、新神戸より洲本BCまで約９０分",
    "parkingInformation": "有り　 80台 　無料",
    "nearestStation": "洲本",
    "hotelSpecial": "お子様支持率NO1の理由はお子様は王様なのだ！あわかん～釣りと家族の体験型旅館～",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D9567",
    "featureKey": "tile_awaji",
    "featureLabel": "兵庫県洲本市・南あわじ市ふるさと納税・日本三大瓦の筆頭・美しいいぶし銀の輝き「淡路瓦の里」淡路牛と淡路島観光ホテル",
    "themeTitle": "兵庫県洲本市・南あわじ市ふるさと納税：淡路瓦の里に程近いオーシャンフロント体験型旅館「あわかん」",
    "themeDesc": "南あわじの淡路瓦窯元エリアへのアクセス良好な洲本温泉の名宿。プライベート釣り場や海一望の大浴場で寛ぎ、淡路島が誇るブランド牛「淡路牛」の鉄板焼きや、鯛・伊勢海老を豪快に焼き上げる名物宝楽焼きを家族で堪能できます。",
    "revAvg": "4.6",
    "minCharge": "13,910"
  },
  {
    "hotelNo": 13882,
    "hotelName": "エースイン刈谷",
    "hotelKanaName": "えーすいん　かりや",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D13882",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D13882%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D13882",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D13882",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/13882/13882.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/13882.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/13882/13882_r1.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/13882/13882map.gif",
    "reviewCount": 1237,
    "reviewAverage": 3.75,
    "userReview": "スタッフの対応が冷たくて驚いた味噌汁をこぼしたら、スタッフの女性に「忙しいから自分で拭いて」と言われた...マジか?と思ったクチコミの詳細はこちらから　https://review.tra…　 ",
    "hotelMinCharge": 4350,
    "address1": "愛知県",
    "address2": "刈谷市若松町2-54",
    "telephoneNo": "0566-26-5611",
    "access": "JR・名鉄刈谷駅南出口よりウィングデッキ徒歩3分／伊勢湾岸道豊田南ＩＣより車で２０分／刈谷市総合文化センター西隣",
    "parkingInformation": "台数限定平面駐車場完備 先着順　普通車のみ",
    "nearestStation": "刈谷",
    "hotelSpecial": "朝食無料バイキング＆生ビール、焼酎他１５種類を揃えたウェルカムドリンク実施中！（１８時～２０時）",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D13882",
    "featureKey": "tile_sanshu",
    "featureLabel": "愛知県高浜市・刈谷市ふるさと納税・日本一のシェアを誇る三州瓦の窯元「三州瓦の町」三河湾の海の幸と快適ステイ",
    "themeTitle": "愛知県高浜市・刈谷市ふるさと納税：三州瓦の窯元めぐり拠点・JR刈谷駅前「エースイン刈谷」",
    "themeDesc": "日本最大の瓦産地・高浜市や碧南市に隣接する刈谷駅前の快適ホテル。かわら美術館や窯元小路の散策拠点として便利で、全室無料の健康朝食バイキング付き。夜は三河湾の海の幸や愛知名物の味噌カツ、ひつまぶしを味わえます。",
    "revAvg": "3.8",
    "minCharge": "4,350"
  },
  {
    "hotelNo": 172875,
    "hotelName": "ＭＡＳＣＯＳ　ＨＯＴＥＬ",
    "hotelKanaName": "ますこす　ほてる",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D172875",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D172875%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D172875",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D172875",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/172875/172875.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/172875.jpg",
    "roomImageUrl": "",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/172875/172875map.gif",
    "reviewCount": 841,
    "reviewAverage": 4.5,
    "userReview": "スモールラグジュアリーなホテルスモールラグジュアリーを体現したようなホテルでした。客室は清潔で快適。大浴場も広く、脱衣所にはスキンケアやウォーターサーバーがあり、ゆっくり身支度できます。朝食は、フ…　 ",
    "hotelMinCharge": 4400,
    "address1": "島根県",
    "address2": "益田市駅前町30-20",
    "telephoneNo": "0856-25-7331",
    "access": "益田駅より徒歩にて約5分 ／ 萩・石見空港から車で約10分",
    "parkingInformation": "有り　普通車800円（税込／泊）先着順　　中型・大型車2000円（税込／泊）事前予約",
    "nearestStation": "益田",
    "hotelSpecial": "地下から湧き出る美肌天然温泉・サウナ・水風呂完備！",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D172875",
    "featureKey": "tile_sekishu",
    "featureLabel": "島根県江津市・浜田市ふるさと納税・赤瓦が日本海の夕日に映える伝統工芸「石州瓦の町」開湯1300年の名湯有福温泉ステイ",
    "themeTitle": "島根県江津市・益田市ふるさと納税：赤瓦が美しい石州街道のモダン温泉ホテル「MASCOS HOTEL（マスコスホテル）」",
    "themeDesc": "赤瓦が街並みを彩る石見地方に位置し、石州瓦や地元木材、伝統工芸を取り入れたデザインホテル。地下から湧き出る天然温泉大浴場を備え、山陰日本海直送の極上のどぐろや石見ポークを活かしたクラフトダイニングを楽しめます。",
    "revAvg": "4.5",
    "minCharge": "4,400"
  }
];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* パンくずリスト */}
      <nav className="bg-white border-b border-slate-200 py-3 px-4 text-xs text-slate-500">
        <div className="max-w-5xl mx-auto flex items-center space-x-2">
          <Link href="/" className="hover:text-emerald-600 transition">ホーム</Link>
          <span>&gt;</span>
          <span className="text-slate-700 font-medium">日本三大瓦の町＆伝統美・窯元めぐり宿×ふるさと納税ガイド</span>
        </div>
      </nav>

      {/* ヒーローヘッダー */}
      <header className="relative bg-gradient-to-br from-emerald-950 via-slate-900 to-teal-950 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-block bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-semibold px-3 py-1 rounded-full mb-2">
            日本三大瓦の町・伝統窯元特集
          </div>
          <h1 className="text-2xl md:text-4xl font-bold leading-tight tracking-tight">
            日本三大瓦の町＆伝統美・窯元めぐり宿×ふるさと納税ガイド
          </h1>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-3xl mx-auto pt-2">
            台風や豪雪、塩害など厳しい日本の気候風土から家々を守り、独特の街並み景観を生み出してきた「日本三大瓦（日本三大瓦産地）」――400年の歴史を誇りキメ細やかな粘土で焼かれる美しいいぶし銀の輝きが特徴の兵庫の「淡路瓦」、三河湾の良質な土と一大窯業地帯として日本一の生産シェアを誇る愛知高浜の「三州瓦」、そして来待釉薬を使って約1300度の高温で焼かれ日本海の夕日に映える独特の赤褐色が美しい島根石見の「石州瓦」。瓦粘土を使った体験工房や歴史ある窯元の小路を散策すれば、伝統工芸の奥深さと職人たちの誇りが伝わってきます。瓦の町周辺の温泉宿を拠点に、淡路島名物の淡路牛や鯛料理、三河湾の海の幸、山陰の日本海鮮魚を堪能する旅を楽天ふるさと納税でお楽しみください。
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
            青空に映えるいぶし銀の輝き、夕暮れを染める赤瓦。日本の風景を形作る瓦の町へ
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>いぶし銀の甍（いらか）波や赤瓦の美しい景観！日本の伝統建築を支える匠の技</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                瓦の歴史を学ぶミュージアムや窯元散策、手作り瓦の粘土細工体験など充実の文化探訪。
              </p>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>淡路島名物淡路牛＆宝楽焼き、三河一色うなぎ＆大あさり、山陰のどぐろ＆松葉ガニ</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                海と窯業の町が育んできた、地元ならではの極上ご当地グルメと地酒ディナーを満喫。
              </p>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>楽天ふるさと納税宿泊クーポンで工芸の町近くの温泉旅館・ホテルをお得に予約</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                窯元巡りやクラフト旅でも、寄付金額に応じた最大30%オフの即時割引クーポンでスマートにお得ステイ。
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
                        {h.hotelSpecial || '日本三大急坂峠道の雲海パノラマ、日本三大棚田の黄金色に輝く原風景、日本三大奇祭の熱気と伝統、日本三大瓦の町の美しい街並みを巡る極上の拠点。四季折々の美食と名湯でお寛ぎください。'}
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
            あわせて読みたい日本の峠道・棚田・奇祭特集
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            
            <Link href="/furusato-tax-three-great-pottery-festivals-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三大陶器まつり＆名窯工芸宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                有田・波佐見・信楽。
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
            
            <Link href="/furusato-tax-three-great-pine-groves-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三大松原＆白砂青松オーシャンビュー宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                三保松原・虹の松原・気比松原。
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
