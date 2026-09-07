import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '日本三大銘菓＆城下町の伝統茶寮・老舗和菓子文化宿×ふるさと納税完全ガイド【2026年最新】金沢・長岡・京都',
  description: '茶道文化と職人技が生んだ和菓子の最高峰！石川金沢「長生殿」加賀前田家の茶の湯と山中温泉吉祥やまなか、新潟長岡「越乃雪」越後藩主を癒やした淡雪の口どけと蓬平温泉和泉屋、京都「京銘菓文化」御所御用達の至高の甘美と京都祇園料理旅館花楽。日本三大銘菓の城下町と名湯を巡る大人の甘美ステイを楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
  keywords: '日本三大銘菓・伝統和菓子文化特集, 楽天ふるさと納税, 温泉宿, ふるさと納税 旅行, 高級旅館, ホテル予約, 2026年旅行',
  openGraph: {
    title: '日本三大銘菓＆城下町の伝統茶寮・老舗和菓子文化宿×ふるさと納税完全ガイド【2026年最新】金沢・長岡・京都',
    description: '茶道文化と職人技が生んだ和菓子の最高峰！石川金沢「長生殿」加賀前田家の茶の湯と山中温泉吉祥やまなか、新潟長岡「越乃雪」越後藩主を癒やした淡雪の口どけと蓬平温泉和泉屋、京都「京銘菓文化」御所御用達の至高の甘美と京都祇園料理旅館花楽。日本三大銘菓の城下町と名湯を巡る大人の甘美ステイを楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    type: 'article',
    url: 'https://croud-travel.pages.dev/furusato-tax-three-famous-confections-historic-town-stay',
    siteName: 'トラベルポータル',
  },
};

export default function Page() {
  const officialAffUrl = 'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F';

  const hotels = [
  {
    "hotelNo": 67124,
    "hotelName": "山中温泉　吉祥やまなか",
    "hotelKanaName": "やまなかおんせん　きっしょうやまなか",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D67124",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D67124%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D67124",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D67124",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/67124/67124.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/67124.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/67124/67124_gen.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/67124/67124map.gif",
    "reviewCount": 1626,
    "reviewAverage": 4.72,
    "userReview": "これまでで一番満足、料理も温泉も最高!これまで行った旅館の中でいちばん満足できるところでした!お料理も美味しくて、温泉も最高でした!クチコミの詳細はこちらから　https://review.t…　 ",
    "hotelMinCharge": 10800,
    "address1": "石川県",
    "address2": "加賀市山中温泉東町1-ホ14-3",
    "telephoneNo": "0761-78-5656",
    "access": "加賀温泉駅・小松空港から無料送迎あり（要予約/定時便）【車】加賀ICより14分。金沢・福井へは車で1時間",
    "parkingInformation": "有（無料）２０台　※正面玄関前にお越しください。スタッフがご案内いたします。",
    "nearestStation": "加賀温泉",
    "hotelSpecial": "清流と名湯、美食に包まれるラグジュアリー宿。山中温泉の文化に触れ、心ほどける静寂の滞在。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D67124",
    "label": "石川県金沢市ふるさと納税・加賀百万石の茶の湯文化が育んだ日本三大銘菓「長生殿（落雁）」金沢城下町の伝統美と金沢白鳥路ホテル山楽",
    "themeTitle": "石川県金沢市・加賀市ふるさと納税：落雁の最高峰「長生殿」と加賀茶の湯文化息づく「山中温泉 吉祥やまなか」",
    "themeDesc": "加賀前田家が愛した名菓「長生殿（森八）」を生んだ金沢の奥座敷。鶴仙渓の絶景を望む名宿「吉祥やまなか」では、加賀棒茶のウェルカムサービスや山中漆器に盛られた本格加賀懐石、天然温泉の露天風呂で至福の湯浴みを満喫します。",
    "revAvg": "4.7",
    "minCharge": "10,800"
  },
  {
    "hotelNo": 109516,
    "hotelName": "よもぎひら温泉　和泉屋",
    "hotelKanaName": "よもぎひらおんせん　いずみや",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D109516",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D109516%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D109516",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D109516",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/109516/109516.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/109516.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/109516/109516_wa.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/109516/109516map.gif",
    "reviewCount": 353,
    "reviewAverage": 4.62,
    "userReview": "ご飯が夕・朝とも、とても美味しかった。お風呂は夜2回・朝2回入ったがほぼ貸切だった。泉質もトロトロしていて、温度も丁度良かった。他の画像やクチコミの詳細はこちらから　https://revie…　 ",
    "hotelMinCharge": 14080,
    "address1": "新潟県",
    "address2": "長岡市蓬平町甲1508-2",
    "telephoneNo": "0258-23-2231",
    "access": "長岡駅よりお車にて２５分",
    "parkingInformation": "有り　60台　無料　予約不要",
    "nearestStation": "長岡",
    "hotelSpecial": "よもぎひら温泉は、越後長岡を南東に抜け、 豊かな自然と渓流に抱かれた 山あいに湧く静かな温泉地です。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D109516",
    "label": "新潟県長岡市ふるさと納税・越後銘菓の頂点に君臨する口どけの至宝「越乃雪」錦鯉発祥の地・山懐の隠れ湯蓬平温泉和泉屋",
    "themeTitle": "新潟県長岡市ふるさと納税：越後銘菓の頂点に君臨する口どけの至宝「越乃雪」と隠れ里「よもぎひら温泉 和泉屋」",
    "themeDesc": "240余年の歴史を紡ぐ「越乃雪（大和屋）」の城下町・長岡。霊峰高龍神社のお膝元、山懐に湧くよもぎひら温泉の和泉屋で、肌に滑らかなとろとろの美肌湯と、越後もち豚・山菜・長岡コシヒカリの絶品料理を堪能します。",
    "revAvg": "4.6",
    "minCharge": "14,080"
  },
  {
    "hotelNo": 1849,
    "hotelName": "京都祇園　料理旅館　花楽",
    "hotelKanaName": "きょうとぎおん　りょうりりょかん　からく",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D1849",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D1849%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D1849",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D1849",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/1849/1849.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/1849.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/1849/1849_heya.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/1849/1849map.gif",
    "reviewCount": 326,
    "reviewAverage": 3.95,
    "userReview": "白米が絶品、風呂トイレ別で快適な空間朝ごはん付きコースにしました白米がめちゃくちゃに美味い 3杯食べた部屋も思いのほか広く、なんといっても風呂トイレが別なのが良い 歯ブラシとかヘアブラ…　 ",
    "hotelMinCharge": 8470,
    "address1": "京都府",
    "address2": "京都市東山区祇園町南側499",
    "telephoneNo": "075-541-2525",
    "access": "京都駅からタクシーで10分、市バス祇園バス停下車徒歩5分",
    "parkingInformation": "有り　6台　要予約 　1泊2,000円／台",
    "nearestStation": "京都",
    "hotelSpecial": "華やかな祇園がすぐそこに。抜群のロケーションでこだわり鍋と京野菜を愉しめる、「料理旅館 花楽」。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D1849",
    "label": "京都府京都市東山区・中京区ふるさと納税・幽玄なる御所御用達の有平糖やきぬた「京銘菓文化」鴨川の風情と数寄屋造りの祇園名門宿",
    "themeTitle": "京都府京都市東山区ふるさと納税：千年の茶道文化を紡ぐ京銘菓の聖地と八坂神社至近の「京都祇園 料理旅館 花楽」",
    "themeDesc": "鍵善良房やくずきり、老舗茶寮が建ち並ぶ祇園の真ん中。八坂神社や高台寺へ徒歩数分の好立地に佇む「花楽」で、旬の京野菜をふんだんに取り入れた京懐石と、中庭を望む情緒豊かな和室で古都の奥深さに浸ります。",
    "revAvg": "4.0",
    "minCharge": "8,470"
  }
];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* パンくずリスト */}
      <nav className="bg-white border-b border-slate-200 py-3 px-4 text-xs text-slate-500">
        <div className="max-w-5xl mx-auto flex items-center space-x-2">
          <Link href="/" className="hover:text-emerald-600 transition">ホーム</Link>
          <span>&gt;</span>
          <span className="text-slate-700 font-medium">日本三大銘菓＆城下町茶寮宿×ふるさと納税ガイド</span>
        </div>
      </nav>

      {/* ヒーローヘッダー */}
      <header className="relative bg-gradient-to-br from-emerald-950 via-slate-900 to-teal-950 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-block bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-semibold px-3 py-1 rounded-full mb-2">
            日本三大銘菓・伝統和菓子文化特集
          </div>
          <h1 className="text-2xl md:text-4xl font-bold leading-tight tracking-tight">
            日本三大銘菓＆城下町茶寮宿×ふるさと納税ガイド
          </h1>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-3xl mx-auto pt-2">
            千利休以来の茶の湯の精神が受け継がれ、各大名家の庇護のもとで独自の発展を遂げた「日本三大銘菓」の街――加賀前田家の豊かな文化政策のもと、森八の三代目八幡太郎道清が創案した落雁の王様「長生殿」を誇る石川の城下町「金沢」、長岡藩三代藩主・牧野忠辰の病を平癒させたことから名付けられた越後特産の餅粉と和三盆が織りなす「越乃雪」の大和屋が息づく新潟「長岡」、そして平安遷都以来の公家文化と禅寺の茶礼が融合し、亀末廣の京のよすがや鍵善良房のくずきりなど無数の名菓を紡ぎ出してきた古都「京都」。名水と厳選素材、職人の研ぎ澄まされた感性によって作られる銘菓は、旅のひとときに格別の深みを与えてくれます。茶室や庭園を備えた格式ある料理旅館や名湯宿を拠点に、お茶と和菓子のマリアージュと郷土懐石に心洗われる贅沢なひとときを楽天ふるさと納税でお楽しみください。
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
            舌の上でふわりと消える和三盆と、凛と澄んだ薄茶の一碗。茶の湯が育んだ老舗銘菓の街を訪ねる
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>老舗和菓子店や名勝庭園・茶寮へ徒歩至近！出来立ての生菓子を堪能</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                午前中の静かな茶房でいただく点てたてのお抹茶と季節の上生菓子は、旅人だけに許された格別の贅沢。
              </p>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>加賀懐石・越後地酒と雪国山菜・京会席料理！美食の粋を集めた夕食</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                茶の湯文化と表裏一体である「茶懐石」の美学が息づく極上の料理を、落ち着いた個室や部屋食でゆったり満喫。
              </p>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>楽天ふるさと納税宿泊クーポンで伝統旅館の特別室や温泉宿をお得にリザーブ</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                予約困難なハイグレード料理旅館も、寄付額に応じた即時割引クーポンを活用して賢くラグジュアリーに滞在。
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
                        {h.hotelSpecial || '歴史ある名橋や城下町、鍾乳洞、美林の自然探訪に最適な上質拠点。四季折々の美味と温かなおもてなしでお寛ぎください。'}
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
                宿泊当日は通常通りチェックイン。割引されたお得な価格で、名湯や美食、歴史情緒溢れる極上滞在を満喫できます。
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
            あわせて読みたい日本の伝統美・絶景特集
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            
            <Link href="/furusato-tax-three-national-treasure-teahouses-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三大茶室＆侘び寂び数寄屋建築宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                待庵・如庵・密庵。
              </p>
            </Link>
            
            <Link href="/furusato-tax-three-great-gardens-heritage-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三名園＆四季の大名庭園散策宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                兼六園・後楽園・偕楽園。
              </p>
            </Link>
            
            <Link href="/furusato-tax-three-pottery-towns-heritage-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                三大陶磁器の里＆窯元巡り工芸宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                有田・瀬戸・美濃。
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
