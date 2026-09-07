import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '日本三大駅弁＆鉄道旅情・元祖の味と極上ブランド牛・名湯宿×ふるさと納税完全ガイド【2026年最新】峠の釜めし・いかめし・松阪牛弁当',
  description: '旅の情緒と地域の美味が詰まった日本三大駅弁の聖地巡り！群馬安中「峠の釜めし」益子焼の器に山の幸とおもてなし磯部温泉ホテル磯部ガーデン、北海道森町「元祖森名物いかめし」秘伝タレ炊き込みとラ・ジェント・ステイ函館駅前、三重松阪「松阪牛駅弁・モー太郎弁当」極上黒毛和牛の贅とホテルAU松阪。日本三大駅弁の旅情と美食を楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
  keywords: '日本三大駅弁・鉄道美味特集, 楽天ふるさと納税, 温泉宿, ふるさと納税 旅行, 高級旅館, ホテル予約, 2026年旅行',
  openGraph: {
    title: '日本三大駅弁＆鉄道旅情・元祖の味と極上ブランド牛・名湯宿×ふるさと納税完全ガイド【2026年最新】峠の釜めし・いかめし・松阪牛弁当',
    description: '旅の情緒と地域の美味が詰まった日本三大駅弁の聖地巡り！群馬安中「峠の釜めし」益子焼の器に山の幸とおもてなし磯部温泉ホテル磯部ガーデン、北海道森町「元祖森名物いかめし」秘伝タレ炊き込みとラ・ジェント・ステイ函館駅前、三重松阪「松阪牛駅弁・モー太郎弁当」極上黒毛和牛の贅とホテルAU松阪。日本三大駅弁の旅情と美食を楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    type: 'article',
    url: 'https://croud-travel.pages.dev/furusato-tax-three-great-ekiben-gourmet-stay',
    siteName: 'トラベルポータル',
  },
};

export default function Page() {
  const officialAffUrl = 'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F';

  const hotels = [
  {
    "hotelNo": 29194,
    "hotelName": "磯部温泉　舌切雀のお宿　ホテル磯部ガーデン",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D29194",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D29194%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D29194",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D29194",
    "hotelKanaName": "いそべおんせん　したきりすずめのおやど　ほてるいそべがーでん",
    "hotelSpecial": "【只今割引クーポン配布中】富岡製糸場・軽井沢の近く舌切雀伝説のお宿。4つの大浴場、露天付客室も充実",
    "hotelMinCharge": 15400,
    "address1": "群馬県",
    "address2": "安中市磯部1-12-5",
    "telephoneNo": "027-385-0085",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/29194/29194.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/29194/29194_kan.jpg",
    "reviewCount": 1915,
    "reviewAverage": 4.36,
    "userReview": "露天風呂と朝食バイキングが最高でした!家族旅行で利用しました。露天風呂がとても良かったです。風呂嫌いの子どもも何度も入っていました。朝食バイキングは料理人さんがおにぎりを握ってくれたり、だし巻き卵…　2026-09-01 08:06:03投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=29194\" class=\"3click\">つづきはこちら</a>",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D29194",
    "access": "JR磯部駅から徒歩５分／上信越高速道 松井田・妙義IC～R18号で10分／北陸新幹線　安中棒名駅～タクシー25分",
    "label": "群馬県安中市ふるさと納税・益子焼陶器に山の幸を炊き込んだ元祖「峠の釜めし」磯部温泉ホテル磯部ガーデン",
    "themeTitle": "群馬県安中市ふるさと納税：峠の釜めし本店へ好アクセス・舌切雀伝説の温泉名宿「磯部温泉 舌切雀のお宿 ホテル磯部ガーデン」",
    "themeDesc": "温泉マーク発祥の地・磯部温泉に建ち、おぎのや横川本店へのアクセスも便利な大型和風旅館。美肌効果の高い塩化物泉の大浴場や露天風呂、上州牛や地元野菜を取り入れた豪華会席料理で、昔話の世界に浸る温かな休日を過ごせます。",
    "revAvg": "4.4",
    "minCharge": "15,400"
  },
  {
    "hotelNo": 177009,
    "hotelName": "ラ・ジェント・ステイ函館駅前",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D177009",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D177009%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D177009",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D177009",
    "hotelKanaName": "ら　じぇんと　すていはこだてえきまえ",
    "hotelSpecial": "ＪＲ函館駅から徒歩1分・函館空港からバス約20分の好立地　市内観光・ビジネスの拠点として便利",
    "hotelMinCharge": 7000,
    "address1": "北海道",
    "address2": "函館市若松町12-8",
    "telephoneNo": "0138-84-8861",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/177009/177009.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/177009/177009_kan1.jpg",
    "reviewCount": 1755,
    "reviewAverage": 4.39,
    "userReview": "海と電車の景色と朝食に大満足、また行きたい客室当日空きありでグレードアップしていただき海と電車の見えるお部屋で大変満足です 海の景色はいくら見ていても飽きませんでした 朝食も海鮮丼 蝦夷鹿のカレー…　2026-09-05 16:04:22投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=177009\" class=\"3click\">つづきはこちら</a>",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D177009",
    "access": "ＪＲ函館駅から徒歩1分・函館空港からバス約20分",
    "label": "北海道森町・函館市ふるさと納税・もち米と真イカの秘伝タレ炊き込み「元祖森名物いかめし」ラ・ジェント・ステイ函館駅前",
    "themeTitle": "北海道函館市・森町ふるさと納税：函館駅前・天然温泉大浴場と道南の美食が集う「ラ・ジェント・ステイ函館駅前」",
    "themeDesc": "JR函館駅直結の好立地に位置し、森駅のいかめしや函館朝市グルメの拠点に最適なスタイリッシュホテル。江戸情緒漂う天然温泉大浴場「蓬莱の湯」や、北海道産食材をふんだんに使用した朝食ビュッフェが旅の満足度を高めます。",
    "revAvg": "4.4",
    "minCharge": "7,000"
  },
  {
    "hotelNo": 38891,
    "hotelName": "ホテルAU松阪",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D38891",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D38891%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D38891",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D38891",
    "hotelKanaName": "えーゆー　まつざか",
    "hotelSpecial": "松阪駅（北口：近鉄側）より徒歩2分、繁華街まで約10分の好立地！（全室）Wi-Fi接続無料！",
    "hotelMinCharge": 4400,
    "address1": "三重県",
    "address2": "松阪市京町１区28-2",
    "telephoneNo": "0598-50-5820",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/38891/38891.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/38891/38891_k1.jpg",
    "reviewCount": 3927,
    "reviewAverage": 4.11,
    "userReview": "設備は古く朝食やエレベーターに不満あり部屋と風呂は広いが、設備がやや古く照明は暗めでベッド周りのコンセントが離れており不便だった。朝食はパンと少しのおかずがワンプレートに盛り付けてあり、パンは…　2026-09-03 09:55:00投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=38891\" class=\"3click\">つづきはこちら</a>",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D38891",
    "access": "松阪駅（北口：近鉄側）より徒歩2分、繁華街まで約10分の好立地！伊勢サンアリーナに行くなら松阪で焼肉食べましょに！",
    "label": "三重県松阪市ふるさと納税・モー太郎弁当と極上黒毛和牛の贅「松阪牛駅弁」ホテルAU松阪",
    "themeTitle": "三重県松阪市ふるさと納税：松阪駅北口すぐ・松阪牛弁当の新竹商店へ便利な拠点「ホテルAU松阪」",
    "themeDesc": "JR・近鉄松阪駅から徒歩数分、松阪牛駅弁の名店「新竹商店」や松阪牛の名店めぐりに絶好のビジネス＆レジャーホテル。大浴場やサウナを備え、リーズナブルで快適な滞在を提供し、本場松阪牛のすき焼きグルメ旅を応援します。",
    "revAvg": "4.1",
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
          <span className="text-slate-700 font-medium">日本三大駅弁＆名物ご当地グルメ・鉄道旅情宿×ふるさと納税ガイド</span>
        </div>
      </nav>

      {/* ヒーローヘッダー */}
      <header className="relative bg-gradient-to-br from-emerald-950 via-slate-900 to-teal-950 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-block bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-semibold px-3 py-1 rounded-full mb-2">
            日本三大駅弁・鉄道美味特集
          </div>
          <h1 className="text-2xl md:text-4xl font-bold leading-tight tracking-tight">
            日本三大駅弁＆名物ご当地グルメ・鉄道旅情宿×ふるさと納税ガイド
          </h1>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-3xl mx-auto pt-2">
            鉄道の発展とともに駅頭で生まれ、旅人の腹と心を満たし続けてきた「日本三大駅弁」――信越本線横川駅で誕生し益子焼の土釜に鶏肉やうずらの卵・栗・杏子など色とりどりの山の幸を炊き込んだ群馬安中の「峠の釜めし（おぎのや）」、函館本線森駅で生まれ小ぶりな真イカにもち米とうるち米を詰めて甘辛い秘伝タレでじっくり炊き上げた北海道の「いかめし（阿部商店）」、そして紀勢本線松阪駅で鉄道旅の最高峰の贅沢として愛されメロディが鳴る牛型容器でも有名な三重の「松阪牛駅弁・モー太郎弁当（新竹商店）」。駅弁の深い歴史と元祖の味を堪能した後は、名湯温泉やブランド牛ディナーに舌鼓を打つ極上の旅情を楽天ふるさと納税でお楽しみください。
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
            車窓を眺めながら紐を解く至福の瞬間。全国にその名を轟かせる名物駅弁と快適ホテル
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>益子焼の釜めし・イカ丸ごと炊き込み・松阪牛すき焼き重！圧倒的なご当地駅弁の完成度</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                駅頭での購入はもちろん、できたてアツアツを味わえる店舗や本店めぐりも満喫。
              </p>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>上州牛と安中こんにゃく会席、函館朝市の活イカ・いくら丼、本場松阪牛のすき焼き・ステーキ</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                駅弁のルーツとなった地域自慢の高級ブランド食材ディナーをホテル・旅館で贅沢に堪能。
              </p>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>楽天ふるさと納税宿泊クーポンで駅近シティホテルや温泉旅館をお得に予約</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                鉄道旅やドライブグルメ旅でも、寄付金額に応じた最大30%オフの即時割引クーポンでスマートにお得ステイ。
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
                        {h.hotelSpecial || '日本三大海食洞のエメラルドに輝く神秘、日本三大五重塔の国宝木造建築美、日本三大駅弁の旅情と極上グルメ、日本三大観音霊場の諸願成就と門前町風情を巡る特別な拠点。四季折々の美食と名湯でお寛ぎください。'}
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
            あわせて読みたい全国の神秘洞窟・名塔建築・美食駅弁特集
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            
            <Link href="/furusato-tax-three-great-ramen-capitals-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三大ラーメン＆名湯・屋台街めぐり美食宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                喜多方・札幌味噌・博多豚骨。
              </p>
            </Link>
            
            <Link href="/furusato-tax-three-great-train-window-views-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三大車窓＆天空パノラマ・絶景温泉宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                姨捨・肥薩線矢岳・狩勝峠。
              </p>
            </Link>
            
            <Link href="/furusato-tax-scenic-train-trolley-onsen-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                絶景観光列車×途中下車の名湯温泉旅館ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                黒部トロッコ・わたらせ・只見線。
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
