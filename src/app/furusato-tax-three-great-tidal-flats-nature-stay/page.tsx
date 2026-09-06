import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '日本三大干潟＆野鳥と海の満ち引きパノラマ・絶景海鮮シーサイド宿×ふるさと納税完全ガイド【2026年最新】有明海・諫早湾・曽根干潟',
  description: '最大6mの干満差が描く地球の鼓動！佐賀太良「有明海干潟」竹崎カニと絶景露天風呂の太良嶽温泉ホテル蟹御殿、長崎諫早「諫早湾干潟」ムツゴロウの楽園と雲仙温泉名湯雲仙いわき旅館、福岡北九州「曽根干潟」カブトガニ息づく瀬戸内海最大の干潟とプレミアホテル門司港。日本三大干潟（三大干潟湿地）の雄大な海景と海鮮グルメを楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
  keywords: '日本三大干潟・湿地ネイチャー特集, 楽天ふるさと納税, 温泉宿, ふるさと納税 旅行, 高級旅館, ホテル予約, 2026年旅行',
  openGraph: {
    title: '日本三大干潟＆野鳥と海の満ち引きパノラマ・絶景海鮮シーサイド宿×ふるさと納税完全ガイド【2026年最新】有明海・諫早湾・曽根干潟',
    description: '最大6mの干満差が描く地球の鼓動！佐賀太良「有明海干潟」竹崎カニと絶景露天風呂の太良嶽温泉ホテル蟹御殿、長崎諫早「諫早湾干潟」ムツゴロウの楽園と雲仙温泉名湯雲仙いわき旅館、福岡北九州「曽根干潟」カブトガニ息づく瀬戸内海最大の干潟とプレミアホテル門司港。日本三大干潟（三大干潟湿地）の雄大な海景と海鮮グルメを楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    type: 'article',
    url: 'https://croud-travel.pages.dev/furusato-tax-three-great-tidal-flats-nature-stay',
    siteName: 'トラベルポータル',
  },
};

export default function Page() {
  const officialAffUrl = 'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F';

  const hotels = [
  {
    "hotelNo": 53097,
    "hotelName": "太良嶽温泉ホテル　蟹御殿",
    "hotelKanaName": "たらだけおんせんほてる　かにごてん",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D53097",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D53097%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D53097",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D53097",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/53097/53097.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/53097.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/53097/53097_h.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/53097/53097map.gif",
    "reviewCount": 594,
    "reviewAverage": 4.72,
    "userReview": "有明海の絶景と竹崎ガニ、サウナの熱さには注意佐賀と長崎の県境の有明海に面して、島原半島の雲仙岳を遠方する絶景のロケーションです。穏やかな有明海を堪能でき、スタッフも親切で、何よりホテル名にもな…　2026-08-26 11:08:57投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=53097\" class=\"3click\">つづきはこちら</a>",
    "hotelMinCharge": 39930,
    "address1": "佐賀県",
    "address2": "藤津郡太良町大浦乙316-3",
    "telephoneNo": "0954-68-2260",
    "access": "武雄北方ＩＣ車で６０分（４９８号線を鹿島方面に２０７号線を諫早方面に）・長崎本線肥前大浦駅より無料送迎有　要予約",
    "parkingInformation": "電気自動車５台。普通車35台。",
    "nearestStation": "肥前大浦",
    "hotelSpecial": "竹崎蟹、サウナ、有明海の絶景を楽しめる新客室。非日常な景色で心身を開放するプレミアムリゾートです。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D53097",
    "label": "佐賀県太良町・鹿島市ふるさと納税・最大6mの干満差が描く神秘の大泥潟「有明海干潟」名物竹崎カニと絶景温泉太良嶽温泉蟹御殿",
    "themeTitle": "佐賀県太良町ふるさと納税：最大6mの干満差が目の前に広がる「有明海干潟」と「太良嶽温泉ホテル 蟹御殿」",
    "themeDesc": "月の引力が見える町・太良の海辺に佇む極上宿。有明海をパノラマで見渡す絶景露天風呂や離れ客室で寛ぎ、名物の濃厚な「竹崎カニ」や佐賀牛、有明海の新鮮な魚介会席を心ゆくまで堪能できます。",
    "revAvg": "4.7",
    "minCharge": "39,930"
  },
  {
    "hotelNo": 6000,
    "hotelName": "雲仙温泉　名湯の宿　　雲仙いわき旅館",
    "hotelKanaName": "うんぜんおんせん　めいとうのゆ　うんぜんいわきりょかん",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D6000",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D6000%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D6000",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D6000",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/6000/6000.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/6000.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/6000/6000_k.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/6000/6000map.gif",
    "reviewCount": 344,
    "reviewAverage": 4.08,
    "userReview": "泉質と食事は最高、接客の距離感に改善希望お風呂の泉質、温度、清潔さは最高でした。部屋も広々でゆっくり過ごせました。食事も美味しく、急なグルテンフリーに対応して頂きました。親切で温かいもてなしに感謝…　2026-08-27 07:32:59投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=6000\" class=\"3click\">つづきはこちら</a>",
    "hotelMinCharge": 9900,
    "address1": "長崎県",
    "address2": "雲仙市小浜町雲仙318",
    "telephoneNo": "0957-73-3338",
    "access": "JR長崎本線諌早駅よりバスにて80分（雲仙行）",
    "parkingInformation": "有り　25台　無料",
    "nearestStation": "諫早",
    "hotelSpecial": "【避暑にもオススメの雲仙エリア！】雲仙地獄まで徒歩3分！源泉100%かけ流しの名湯をどうぞ",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D6000",
    "label": "長崎県諫早市・雲仙市ふるさと納税・ムツゴロウやトビハゼが息づく肥沃な湿地「諫早湾干潟」雲仙地獄と名門雲仙宮崎旅館",
    "themeTitle": "長崎県諫早市・雲仙市ふるさと納税：野鳥とムツゴロウが息づく「諫早湾干潟」と白濁名湯「雲仙温泉 名湯の宿 雲仙いわき旅館」",
    "themeDesc": "諫早湾干潟堤防道路からのドライブとあわせて訪れたい雲仙の老舗名湯宿。自家源泉から湧く白濁の硫黄泉露天風呂で心身を解きほぐし、長崎和牛や島原半島の旬野菜・海鮮を使った本格会席を満喫します。",
    "revAvg": "4.1",
    "minCharge": "9,900"
  },
  {
    "hotelNo": 3164,
    "hotelName": "プレミアホテル門司港",
    "hotelKanaName": "もじこうほてる",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D3164",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D3164%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D3164",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D3164",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/3164/3164.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/3164.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/3164/3164_heya1.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/3164/3164map.gif",
    "reviewCount": 3649,
    "reviewAverage": 4.48,
    "userReview": "クチコミの詳細はこちらから　https://review.travel.rakuten.co.jp/hotel/voice/3164?reviewId=33123479167150　2026-08-27 07:09:05投稿",
    "hotelMinCharge": 6035,
    "address1": "福岡県",
    "address2": "北九州市門司区港町9-11",
    "telephoneNo": "093-321-1111",
    "access": "【JR】 門司港駅から徒歩約2分（JR小倉駅から3駅15分で門司港駅到着）、【車】九州自動車道門司ICから約8分",
    "parkingInformation": "65台　1泊\\1,100円（税込） ／ チェックアウト日の12時まで駐車可能です",
    "nearestStation": "門司港",
    "hotelSpecial": "関門海峡の絶景を望むデザイナーズホテル◆門司港駅へ徒歩2分！唐戸市場も好アクセス◆高評価朝食ブッフェ",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D3164",
    "label": "福岡県北九州市ふるさと納税・カブトガニやズグロカモメが飛来する瀬戸内海最大級「曽根干潟」門司港レトロとプレミアホテル門司港",
    "themeTitle": "福岡県北九州市ふるさと納税：生きた化石カブトガニが棲む「曽根干潟」とレトロ港町の「プレミアホテル門司港」",
    "themeDesc": "瀬戸内海最大級の曽根干潟を探索した後は、門司港レトロの中心に建つ名建築ホテルへ。関門海峡を望むクラシカルな客室で寛ぎ、名物焼きカレーや豊前海の海鮮、関門ふぐ料理を優雅に堪能できます。",
    "revAvg": "4.5",
    "minCharge": "6,035"
  }
];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* パンくずリスト */}
      <nav className="bg-white border-b border-slate-200 py-3 px-4 text-xs text-slate-500">
        <div className="max-w-5xl mx-auto flex items-center space-x-2">
          <Link href="/" className="hover:text-emerald-600 transition">ホーム</Link>
          <span>&gt;</span>
          <span className="text-slate-700 font-medium">日本三大干潟＆海の満ち引き海鮮宿×ふるさと納税ガイド</span>
        </div>
      </nav>

      {/* ヒーローヘッダー */}
      <header className="relative bg-gradient-to-br from-emerald-950 via-slate-900 to-teal-950 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-block bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-semibold px-3 py-1 rounded-full mb-2">
            日本三大干潟・湿地ネイチャー特集
          </div>
          <h1 className="text-2xl md:text-4xl font-bold leading-tight tracking-tight">
            日本三大干潟＆海の満ち引き海鮮宿×ふるさと納税ガイド
          </h1>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-3xl mx-auto pt-2">
            月の引力によって海水が大きく満ち引きし、日本最大の干満差と多様な生き物を育む「日本三大干潟（三大干潟湿地）」――最大6メートルもの潮位差を誇り、ムツゴロウやワラスボなど固有の珍魚が棲息し夕日に照らされる広大な泥干潟が神秘的な佐賀・福岡にまたがる「有明海干潟」、有明海奥部に位置し渡り鳥の重要な中継地として広大な干潟風景が広がる長崎の「諫早湾干潟」、そして瀬戸内海最大級の約8.8平方キロメートルの泥干潟が広がり、生きた化石・カブトガニの貴重な産卵地として守られる福岡北九州の「曽根干潟」。潮の満ち引きによって刻一刻と表情を変える干潟の景色は、地球のダイナミズムをありのままに伝えてくれます。海を間近に望むオーシャンビュー温泉旅館や港町ホテルを拠点に、名物竹崎カニや関門海峡の海の幸を堪能する特別な休日を楽天ふるさと納税でお楽しみください。
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
            潮が引けば見渡す限りの泥潟と生命の躍動。潮騒と夕景に包まれるシーサイドステイ
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>干満差が生む神秘の干潟パノラマ！海と一体になるインフィニティ露天風呂</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                満潮時の広大な海と、干潮時に現れる広大な干潟の二つの絶景を、宿の展望風呂から贅沢に満喫。
              </p>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>名物竹崎カニ・竹崎カキ、有明海海苔、関門ふぐ＆焼きカレーディナー</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                干潟の豊かな栄養分で育った極上のカニや魚介類を、茹で・焼き・刺身で贅沢に味わい尽くす夕食。
              </p>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>楽天ふるさと納税宿泊クーポンでオーシャンビューの温泉旅館をお得に予約</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                予約困難な海鮮名宿も、寄付金額に応じた最大30%オフの即時割引クーポンでスマートにお得ステイ。
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
                        {h.hotelSpecial || '日本三大うどん巡り、三霊山パノラマ、漆器の文化美、広大な干潟の自然探訪に最適な上質拠点。四季折々の美食と名湯でお寛ぎください。'}
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
            あわせて読みたい日本の伝統美食・絶景特集
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            
            <Link href="/furusato-tax-three-great-precipitous-coasts-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三大名勝断崖海岸＆パノラマ海宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                北山崎・東尋坊・足摺岬。
              </p>
            </Link>
            
            <Link href="/furusato-tax-three-coastal-pine-glamping-resort-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三大松原・海岸グランピング宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                虹の松原・気比松原・三保松原。
              </p>
            </Link>
            
            <Link href="/furusato-tax-three-great-sand-dunes-coastal-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三大砂丘＆風紋パノラマ・海宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                鳥取・吹上浜・中田島。
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
