import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '日本三大夜景＆煌めく光の海・100万ドルのパノラマ名宿×ふるさと納税完全ガイド【2026年最新】函館・神戸・長崎',
  description: '息をのむ美しさを誇る日本三大夜景！北海道函館「函館山」津軽海峡と函館湾が挟む光の扇・望楼NOGUCHI函館、兵庫神戸「摩耶山・掬星台」大阪湾から神戸港へ広がる宝石の海・有馬温泉欽山、長崎「稲佐山」世界新三大夜景のすり鉢状パノラマ・ガーデンテラス長崎ホテル＆リゾート。ロマンチックな絶景夜景と極上温泉・ディナーを楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
  keywords: '日本三大夜景・ロマンチック絶景特集, 楽天ふるさと納税, 温泉宿, ふるさと納税 旅行, 高級旅館, ホテル予約, 2026年旅行',
  openGraph: {
    title: '日本三大夜景＆煌めく光の海・100万ドルのパノラマ名宿×ふるさと納税完全ガイド【2026年最新】函館・神戸・長崎',
    description: '息をのむ美しさを誇る日本三大夜景！北海道函館「函館山」津軽海峡と函館湾が挟む光の扇・望楼NOGUCHI函館、兵庫神戸「摩耶山・掬星台」大阪湾から神戸港へ広がる宝石の海・有馬温泉欽山、長崎「稲佐山」世界新三大夜景のすり鉢状パノラマ・ガーデンテラス長崎ホテル＆リゾート。ロマンチックな絶景夜景と極上温泉・ディナーを楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    type: 'article',
    url: 'https://croud-travel.pages.dev/furusato-tax-three-great-night-views-romantic-stay',
    siteName: 'トラベルポータル',
  },
};

export default function Page() {
  const officialAffUrl = 'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F';

  const hotels = [
  {
    "hotelNo": 109498,
    "hotelName": "望楼ＮＯＧＵＣＨＩ函館",
    "hotelKanaName": "ぼうろうのぐちはこだて",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D109498",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D109498%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D109498",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D109498",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/109498/109498.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/109498.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/109498/109498_hey.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/109498/109498map.gif",
    "reviewCount": 473,
    "reviewAverage": 4.45,
    "userReview": "食事や部屋は良いが館内の香りが残念館内のフレグランスが、土地のイメージに合っておらず、非常に残念でした。それ以外の食事、部屋、風呂などはよかったのですが、?クチコミの詳細はこちらから　ht…",
    "hotelMinCharge": 0,
    "address1": "北海道",
    "address2": "函館市湯の川1-17-22",
    "telephoneNo": "0570-026-573",
    "access": "函館空港より車で約10分／JR函館駅より車で約15分／市電湯の川温泉駅から徒歩約3分",
    "parkingInformation": "有り。50台収容（無料）",
    "nearestStation": "函館空港",
    "hotelSpecial": "一人という“贅”と、三世代の“憩”がかなう場所",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D109498",
    "label": "北海道函館市ふるさと納税・津軽海峡と函館湾を望む100万ドルの夜景「函館山」望楼NOGUCHI函館",
    "themeTitle": "北海道函館市ふるさと納税：湯の川温泉の洗練されたデザイナーズ空間・函館山夜景散策拠点「望楼NOGUCHI函館」",
    "themeDesc": "全室客室温泉を備え、和モダンと洗練されたモダンデザインが融合した函館最高峰の温泉ホテル。函館山からの夜景観賞バスツアーや観光へのアクセスも抜群で、最上階の展望大浴場や函館近海のウニ・アワビを取り入れた和洋会席が極上の時間を演出します。",
    "revAvg": "4.5",
    "minCharge": "8,000"
  },
  {
    "hotelNo": 53390,
    "hotelName": "有馬温泉　欽山",
    "hotelKanaName": "ありまおんせん　きんざん",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D53390",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D53390%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D53390",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D53390",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/53390/53390.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/53390.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/53390/53390_ta.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/53390/53390map.gif",
    "reviewCount": 497,
    "reviewAverage": 4.6,
    "userReview": "誕生日祝いに最適、食事と接客に感動母親の誕生日祝いに初めてお世話になりました。部屋はとても広く清潔で快適でした。但、段差があちこちあるので、高齢者には常に注意を払う必要がありました。夕食、朝食共に…",
    "hotelMinCharge": 23650,
    "address1": "兵庫県",
    "address2": "神戸市北区有馬町1302-4",
    "telephoneNo": "078-904-0701",
    "access": "神戸電鉄「有馬温泉駅」より徒歩５分・山陽新幹線「新神戸駅」よりバスにて約30分・大阪（梅田）より高速バスにて約55分",
    "parkingInformation": "有り 60台 無料 予約不要 【お車はお客様ご自身で地下駐車場へのご移動をお願いしております。】",
    "nearestStation": "有馬温泉",
    "hotelSpecial": "幾千年、伝えゆきたい日本の風雅。風情薫る欽山で雅な休日をお過ごしください。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D53390",
    "label": "兵庫県神戸市ふるさと納税・掬星台から望む煌めく大パノラマ「摩耶山・六甲山」有馬温泉欽山",
    "themeTitle": "兵庫県神戸市ふるさと納税：六甲山・摩耶山の夜景と有馬の金泉・純和風の格式と静寂「有馬温泉 欽山」",
    "themeDesc": "摩耶山・掬星台の壮大な夜景ドライブの拠点として愛される、静寂を守る大人のための高級料亭旅館。ミシュラン星獲得歴を持つ本格的な京風創作懐石と、有馬特有の名湯・金泉に浸かり、都会の喧騒を離れた極上の癒やしを堪能できます。",
    "revAvg": "4.6",
    "minCharge": "23,650"
  },
  {
    "hotelNo": 74749,
    "hotelName": "ガーデンテラス長崎ホテル＆リゾート",
    "hotelKanaName": "がーでんてらすながさきほてるあんどりぞーと",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D74749",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D74749%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D74749",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D74749",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/74749/74749.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/74749.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/74749/74749_ru.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/74749/74749map.gif",
    "reviewCount": 328,
    "reviewAverage": 4.57,
    "userReview": "ロケーション、部屋からの眺めは最高です。長崎駅からの送迎もあって便利です。唯一残念だったのが部屋の掃除。ベットの隙間に前に宿泊していた方のヘアブラシが落ちてたり、バスタブに水アカが残ってい…",
    "hotelMinCharge": 12250,
    "address1": "長崎県",
    "address2": "長崎市秋月町2-3",
    "telephoneNo": "0570-014-173",
    "access": "長崎駅より車で約10分。稲佐山中腹にある当ホテルまで毎日16：00～19：00長崎駅無料シャトルバス運行あり。",
    "parkingInformation": "有り　１４０台　無料　先着順",
    "nearestStation": "長崎（長崎）",
    "hotelSpecial": "全室テラス付。46平米以上の客室から眺める世界新三大夜景と世界遺産の街。大人の夜景リゾートホテル。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D74749",
    "label": "長崎県長崎市ふるさと納税・世界新三大夜景のすり鉢状パノラマ「稲佐山」ガーデンテラス長崎ホテル＆リゾート",
    "themeTitle": "長崎県長崎市ふるさと納税：稲佐山の中腹から長崎の夜景を全室から見下ろす絶景リゾート「ガーデンテラス長崎ホテル＆リゾート」",
    "themeDesc": "世界的建築家・隈研吾氏が設計を手がけ、全室から世界新三大夜景に選ばれた長崎港のすり鉢状パノラマを一望できるラグジュアリーリゾート。テラスで心地よい風を感じながら夜景を眺め、長崎の厳選食材を用いた創作フレンチや鉄板焼きを楽しめます。",
    "revAvg": "4.6",
    "minCharge": "12,250"
  }
];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* パンくずリスト */}
      <nav className="bg-white border-b border-slate-200 py-3 px-4 text-xs text-slate-500">
        <div className="max-w-5xl mx-auto flex items-center space-x-2">
          <Link href="/" className="hover:text-emerald-600 transition">ホーム</Link>
          <span>&gt;</span>
          <span className="text-slate-700 font-medium">日本三大夜景＆煌めく光のパノラマ名宿×ふるさと納税ガイド</span>
        </div>
      </nav>

      {/* ヒーローヘッダー */}
      <header className="relative bg-gradient-to-br from-emerald-950 via-slate-900 to-teal-950 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-block bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-semibold px-3 py-1 rounded-full mb-2">
            日本三大夜景・ロマンチック絶景特集
          </div>
          <h1 className="text-2xl md:text-4xl font-bold leading-tight tracking-tight">
            日本三大夜景＆煌めく光のパノラマ名宿×ふるさと納税ガイド
          </h1>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-3xl mx-auto pt-2">
            地形と港、人々の暮らしの灯りが織りなす奇跡の夜景として名高い「日本三大夜景」――津軽海峡と函館湾のくびれが創り出す扇状の光が幻想的な北海道の「函館・函館山」、眼下に広がる神戸から大阪ベイエリアの光がまるで星を掬えるかのように輝く兵庫の「神戸・摩耶山 掬星台」、そして長崎港を取り囲む斜面都市の光がすり鉢状に立体的に輝く長崎の「長崎・稲佐山」。ロープウェイで登る夜の展望台や、客室のテラス・露天風呂から夜景を独占し、至高の美食に酔いしれる贅沢な旅を楽天ふるさと納税でお楽しみください。
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
            眼下に広がる無数の光の宝石。一生に一度は見たい三大夜景の感動ステイ
          </h2>
          <p className="text-slate-600 leading-relaxed text-sm md:text-base">
            地形と港、人々の暮らしの灯りが織りなす奇跡の夜景として名高い「日本三大夜景」――津軽海峡と函館湾のくびれが創り出す扇状の光が幻想的な北海道の「函館・函館山」、眼下に広がる神戸から大阪ベイエリアの光がまるで星を掬えるかのように輝く兵庫の「神戸・摩耶山 掬星台」、そして長崎港を取り囲む斜面都市の光がすり鉢状に立体的に輝く長崎の「長崎・稲佐山」。ロープウェイで登る夜の展望台や、客室のテラス・露天風呂から夜景を独占し、至高の美食に酔いしれる贅沢な旅を楽天ふるさと納税でお楽しみください。
          </p>
        </section>

        {/* メリット3選 */}
        <section className="space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
              ふるさと納税×日本三大夜景ロマンチック絶景 3つのメリット
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
                  100万ドルの夜景を望む特等席！夜景観賞へのアクセスや客室からの感動的なパノラマ
                </h3>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                  夕暮れのマジックアワーから漆黒の海に浮かぶ街明かりまで、時間を忘れて眺めるロマンチックな滞在。
                </p>
              </div>
            </div>
            <div key="1" className="bg-white rounded-xl p-6 shadow-sm border border-slate-200/80 flex flex-col justify-between hover:border-emerald-300 transition duration-200">
              <div className="space-y-3">
                <span className="inline-block w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 font-bold text-center leading-8 text-sm">
                  02
                </span>
                <h3 className="font-bold text-base text-slate-900 leading-snug">
                  津軽海峡のウニ・イカ、神戸牛と有馬の名湯、長崎卓袱や新鮮魚介のフレンチ
                </h3>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                  三大夜景都市が誇る最高峰の食文化とご当地ブランド食材を贅沢に味わうディナー。
                </p>
              </div>
            </div>
            <div key="2" className="bg-white rounded-xl p-6 shadow-sm border border-slate-200/80 flex flex-col justify-between hover:border-emerald-300 transition duration-200">
              <div className="space-y-3">
                <span className="inline-block w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 font-bold text-center leading-8 text-sm">
                  03
                </span>
                <h3 className="font-bold text-base text-slate-900 leading-snug">
                  楽天ふるさと納税宿泊クーポンで憧れのラグジュアリーホテルや名旅館をお得に予約
                </h3>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                  記念日やご褒美旅行でも、寄付金額に応じた最大30%オフの即時割引クーポンでスマートにお得ステイ。
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
            あわせて読みたい日本の名所・絶景ホテル特集
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            
            <Link href="/furusato-tax-three-great-castles-historic-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三大名城＆不落の巨城を望む城見ステイ×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                熊本・名古屋・大阪。
              </p>
            </Link>
            <Link href="/furusato-tax-three-great-torii-sacred-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三大鳥居＆古都の聖域・参道名宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                厳島・春日大社・気比神宮。
              </p>
            </Link>
            <Link href="/furusato-tax-three-great-illuminations-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三大イルミネーション＆幻想的な光の祭典名宿ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                あしかが・江の島・ハウステンボス。
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
