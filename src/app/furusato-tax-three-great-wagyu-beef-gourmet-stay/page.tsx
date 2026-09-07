import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '日本三大和牛＆最高峰霜降り肉会席・本場美食宿×ふるさと納税完全ガイド【2026年最新】松阪牛・神戸牛・近江牛',
  description: '肉の芸術品を本場で味わい尽くす贅沢！三重松阪「松阪牛」とろける甘みと芳醇な香り本場すき焼きとエースイン松阪、兵庫神戸「神戸牛」世界が認めたキメ細やかなサシと有馬温泉有馬御苑、滋賀近江八幡「近江牛」400年の歴史誇る元祖ブランド牛と琵琶湖一望の休暇村近江八幡。日本三大和牛の極上鉄板焼き・すき焼きディナーを楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
  keywords: '日本三大和牛・極上美食特集, 楽天ふるさと納税, 温泉宿, ふるさと納税 旅行, 高級旅館, ホテル予約, 2026年旅行',
  openGraph: {
    title: '日本三大和牛＆最高峰霜降り肉会席・本場美食宿×ふるさと納税完全ガイド【2026年最新】松阪牛・神戸牛・近江牛',
    description: '肉の芸術品を本場で味わい尽くす贅沢！三重松阪「松阪牛」とろける甘みと芳醇な香り本場すき焼きとエースイン松阪、兵庫神戸「神戸牛」世界が認めたキメ細やかなサシと有馬温泉有馬御苑、滋賀近江八幡「近江牛」400年の歴史誇る元祖ブランド牛と琵琶湖一望の休暇村近江八幡。日本三大和牛の極上鉄板焼き・すき焼きディナーを楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    type: 'article',
    url: 'https://croud-travel.pages.dev/furusato-tax-three-great-wagyu-beef-gourmet-stay',
    siteName: 'トラベルポータル',
  },
};

export default function Page() {
  const officialAffUrl = 'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F';

  const hotels = [
  {
    "hotelNo": 5822,
    "hotelName": "エースイン・松阪",
    "hotelKanaName": "えーすいん・まつざか",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D5822",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D5822%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D5822",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D5822",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/5822/5822.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/5822.jpg",
    "roomImageUrl": "",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/5822/5822map.gif",
    "reviewCount": 2936,
    "reviewAverage": 3.93,
    "userReview": "ウェルカムドリンクは豊富だが設備に難ありウェルカムドリンクがアルコールからソフトドリンクまで種類豊富でよかったです。朝食がついていたのですが、こちらの出発の都合で食べられなかったのは残念です。…　 ",
    "hotelMinCharge": 3800,
    "address1": "三重県",
    "address2": "松阪市京町516-1",
    "telephoneNo": "0598-25-2311",
    "access": "JR・近鉄松阪駅南口から徒歩1分。松阪ICから車で10分。伊勢神宮内宮までお車で約40分",
    "parkingInformation": "□館周り無料駐車場8台【先着優先】※満車等の場合は近隣有料パーキングをご案内致します。",
    "nearestStation": "松阪",
    "hotelSpecial": "無料朝食バイキング・伊勢市まで電車で15分・松阪駅近く・セブンイレブン隣接の好立地です",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D5822",
    "label": "三重県松阪市ふるさと納税・肉の芸術品と称される世界最高峰「松阪牛」本場すき焼き会席とエースイン松阪",
    "themeTitle": "三重県松阪市ふるさと納税：肉の芸術品「松阪牛」本場すき焼き老舗巡りと駅前拠点「エースイン・松阪」",
    "themeDesc": "和田金や牛銀本店など松阪牛の名店が建ち並ぶ城下町・松阪。松阪駅徒歩1分の好立地ホテル「エースイン松阪」を拠点に、本場ならではのとろける極上すき焼きや網焼きを心ゆくまで堪能し、無料朝食や快適客室で寛ぎます。",
    "revAvg": "3.9",
    "minCharge": "3,800"
  },
  {
    "hotelNo": 1206,
    "hotelName": "神戸牛と有馬温泉　天然金泉・銀泉の宿　有馬御苑",
    "hotelKanaName": "こうべぎゅうとありまおんせん　きんせんぎんせんのやど　ありまぎょえん",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D1206",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D1206%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D1206",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D1206",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/1206/1206.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/1206.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/1206/1206_heya.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/1206/1206map.gif",
    "reviewCount": 2796,
    "reviewAverage": 4.39,
    "userReview": "喜寿のお祝いに豪華な食事、お風呂は残念今回、父親の喜寿のお祝いに客室露天風呂付きのいいお部屋に宿泊しましたお料理は神戸牛のステーキに和牛しゃぶしゃぶ他にも沢山品数もあり食べきれない程でした。金…　 ",
    "hotelMinCharge": 9900,
    "address1": "兵庫県",
    "address2": "神戸市北区有馬町1296",
    "telephoneNo": "078-904-3737",
    "access": "神戸電鉄線有馬温泉駅から徒歩２分、阪急バス有馬停より徒歩２分、阪神高速有馬口ＩＣより車３分、中国道西宮北ＩＣより車１０分",
    "parkingInformation": "有（50台）ご宿泊者様は利用室数分まで無料　※場所が分かりづらいため当館HPアクセスページ参照下さい",
    "nearestStation": "有馬温泉",
    "hotelSpecial": "【楽天ゴールド＆日本の宿アワード受賞】部屋食プラン多数★温泉街すぐ！金銀２種の温泉と神戸牛が自慢♪",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D1206",
    "label": "兵庫県神戸市北区ふるさと納税・きめ細やかなサシと芳醇な香り「神戸ビーフ」金泉名湯と有馬温泉兵衛向陽閣",
    "themeTitle": "兵庫県神戸市・有馬温泉ふるさと納税：世界最高峰「神戸牛」と金泉名湯「神戸牛と有馬温泉 天然金泉・銀泉の宿 有馬御苑」",
    "themeDesc": "神戸ビーフ取扱指定店として極上の神戸牛料理を提供する有馬温泉の老舗宿。きめ細やかなサシがとろける神戸牛のしゃぶしゃぶやすき焼きを部屋食で味わい、赤褐色の名湯「金泉」と無色透明の「銀泉」のダブル温泉で癒やされます。",
    "revAvg": "4.4",
    "minCharge": "9,900"
  },
  {
    "hotelNo": 76886,
    "hotelName": "休暇村　近江八幡",
    "hotelKanaName": "きゅうかむら　おうみはちまん",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D76886",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D76886%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D76886",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D76886",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/76886/76886.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/76886.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/76886/76886_hwa.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/76886/76886map.gif",
    "reviewCount": 781,
    "reviewAverage": 4.31,
    "userReview": "微妙だった点プールの更衣室がかなり蒸し暑く、着替えるスペースも小さいすのこが1.2枚ひかれてるだけでした。ほかに一人いると、着替えにくい広さでした。小学生(身長135cm)の子どもに合…　 ",
    "hotelMinCharge": 13000,
    "address1": "滋賀県",
    "address2": "近江八幡市沖島町宮ヶ浜",
    "telephoneNo": "0748-32-3138",
    "access": "JR　近江八幡駅より近江鉄道バス休暇村行きにて約43分　※近江鉄道バス休暇村行き、土日祝日運休",
    "parkingInformation": "有り　５００台　無料　予約不要",
    "nearestStation": "近江八幡",
    "hotelSpecial": "目の前は琵琶湖です。近江牛や郷土料理に舌鼓。温泉に入りながら琵琶湖を眺めるひとときをお楽しみ下さい",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D76886",
    "label": "滋賀県近江八幡市ふるさと納税・400年の歴史誇る日本最古のブランド牛「近江牛」琵琶湖パノラマと休暇村近江八幡",
    "themeTitle": "滋賀県近江八幡市ふるさと納税：400年の歴史誇る元祖ブランド牛「近江牛」と琵琶湖パノラマ「休暇村 近江八幡」",
    "themeDesc": "近江商人発祥の地・近江八幡。宮ヶ浜の白砂青松が広がる琵琶湖畔の「休暇村近江八幡」では、近江牛のすき焼きビュッフェや会席料理で近江牛を贅沢に食べ比べ、天然温泉「宮ヶ浜の湯」とレイクビューを満喫できます。",
    "revAvg": "4.3",
    "minCharge": "13,000"
  }
];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* パンくずリスト */}
      <nav className="bg-white border-b border-slate-200 py-3 px-4 text-xs text-slate-500">
        <div className="max-w-5xl mx-auto flex items-center space-x-2">
          <Link href="/" className="hover:text-emerald-600 transition">ホーム</Link>
          <span>&gt;</span>
          <span className="text-slate-700 font-medium">日本三大和牛＆最高峰霜降り美食宿×ふるさと納税ガイド</span>
        </div>
      </nav>

      {/* ヒーローヘッダー */}
      <header className="relative bg-gradient-to-br from-emerald-950 via-slate-900 to-teal-950 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-block bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-semibold px-3 py-1 rounded-full mb-2">
            日本三大和牛・極上美食特集
          </div>
          <h1 className="text-2xl md:text-4xl font-bold leading-tight tracking-tight">
            日本三大和牛＆最高峰霜降り美食宿×ふるさと納税ガイド
          </h1>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-3xl mx-auto pt-2">
            血統の徹底管理と職人たちの愛情によって極限まで高められた黒毛和牛の頂点「日本三大和牛」――人肌で溶ける不飽和脂肪酸の甘い脂と深みのある香味が「肉の芸術品」と称される三重の「松阪牛」、細かく入り込んだ霜降り（サシ）が熱によって溶け出し世界中の美食家を魅了する兵庫の「神戸ビーフ（神戸牛）」、そして江戸時代には彦根藩から将軍家へ養生薬として味噌漬けが献上された歴史を持ち、豊かな琵琶湖水系の自然で育まれた滋賀の「近江牛」。本場ならではの鮮度と職人の火入れでいただくステーキやすき焼き、しゃぶしゃぶは、一口ごとに至福の感動をもたらします。名店直営の料理旅館や有馬の名湯、レイクビューリゾートを拠点に、極上の肉料理と地酒に酔いしれる特別な夜を楽天ふるさと納税でお楽しみください。
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
            舌の上でとろける至高の脂と芳醇な旨味。日本が世界に誇る三大和牛の故郷へ
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>老舗精肉店・本場ステーキハウス至近！極上A5ランクのブランド牛ディナー</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                宿の夕食や周辺の有名老舗料亭で、本場ならではの極上すき焼きや炭火焼き会席を堪能。
              </p>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>伊勢志摩アワビ、有馬温泉金泉・銀泉、近江八幡水郷めぐりと地酒ペアリング</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                三大和牛の美食とともに、名湯での湯浴みや歴史ある城下町散策を優雅に満喫。
              </p>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>楽天ふるさと納税宿泊クーポンで憧れの高級肉会席付きプランを賢くリザーブ</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                普段は贅沢な高級和牛プランも、寄付金額に応じた即時割引クーポンで実質2,000円負担の快適ステイ。
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
                        {h.hotelSpecial || '日本三大和牛の美食、三大急潮のダイナミズム、和紙工芸の伝統、高原マウンテンリゾートの爽快ステイを満喫する極上の拠点。名湯と美食でお寛ぎください。'}
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
            あわせて読みたい日本の美食・海峡・高原特集
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            
            <Link href="/furusato-tax-three-great-sake-capitals-brewery-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三大酒どころ＆酒蔵ツーリズム宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                灘五郷・伏見・西条。
              </p>
            </Link>
            
            <Link href="/furusato-tax-three-great-udons-gourmet-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三大うどん＆極上麺道湯宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                讃岐・稲庭・五島。
              </p>
            </Link>
            
            <Link href="/furusato-tax-three-great-morning-markets-seafood-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三大朝市＆獲れたて海鮮・朝ごはん宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                輪島・呼子・勝浦。
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
