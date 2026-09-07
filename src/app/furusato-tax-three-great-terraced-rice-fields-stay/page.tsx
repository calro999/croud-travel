import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '日本三大美田・棚田百選＆水鏡と黄金色の日本の原風景・農村リトリート宿×ふるさと納税完全ガイド【2026年最新】星峠・白米千枚田・丸山千枚田',
  description: '四季折々に輝く日本の原風景と大地の彫刻！新潟十日町「星峠の棚田」雲海と水鏡の幻想世界・まつだい芝峠温泉雲海、石川奥能登「白米千枚田」日本海へ傾斜する千枚の田とホテルルートイン輪島、三重熊野「丸山千枚田」千三百枚の精巧な石垣群と入鹿温泉ホテル瀞流荘。日本三大棚田の壮大な美景と郷土の恵みを楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
  keywords: '日本三大棚田・日本の原風景特集, 楽天ふるさと納税, 温泉宿, ふるさと納税 旅行, 高級旅館, ホテル予約, 2026年旅行',
  openGraph: {
    title: '日本三大美田・棚田百選＆水鏡と黄金色の日本の原風景・農村リトリート宿×ふるさと納税完全ガイド【2026年最新】星峠・白米千枚田・丸山千枚田',
    description: '四季折々に輝く日本の原風景と大地の彫刻！新潟十日町「星峠の棚田」雲海と水鏡の幻想世界・まつだい芝峠温泉雲海、石川奥能登「白米千枚田」日本海へ傾斜する千枚の田とホテルルートイン輪島、三重熊野「丸山千枚田」千三百枚の精巧な石垣群と入鹿温泉ホテル瀞流荘。日本三大棚田の壮大な美景と郷土の恵みを楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    type: 'article',
    url: 'https://croud-travel.pages.dev/furusato-tax-three-great-terraced-rice-fields-stay',
    siteName: 'トラベルポータル',
  },
};

export default function Page() {
  const officialAffUrl = 'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F';

  const hotels = [
  {
    "hotelNo": 15103,
    "hotelName": "まつだい芝峠温泉雲海",
    "hotelKanaName": "まつだいしばとうげおんせんうんかい",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D15103",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D15103%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D15103",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D15103",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/15103/15103.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/15103.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/15103/15103_wa.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/15103/15103map.gif",
    "reviewCount": 436,
    "reviewAverage": 4.48,
    "userReview": "食事は豪勢だが布団や設備に難あり煎餅布団が気に入らなかったが食事が豪勢で妻は食べきれずにかなり残したのが残念朝食のおかずに鯖の塩焼きがあったが自分は万歳だったが、妻はアレルギーのため食べられず…　 ",
    "hotelMinCharge": 8800,
    "address1": "新潟県",
    "address2": "十日町市蓬平11-1",
    "telephoneNo": "025-597-3939",
    "access": "ほくほく線　まつだい駅より車で７分／関越道六日町ＩＣよりＲ２５３経由約４０分",
    "parkingInformation": "有り　７０台　無料",
    "nearestStation": "松代",
    "hotelSpecial": "★雲海を見下ろす絶景露天風呂＆貸切露天が好評！",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D15103",
    "featureKey": "tanada_hoshitoge",
    "featureLabel": "新潟県十日町市ふるさと納税・雲海と水鏡が織りなす東洋の絶景「星峠の棚田」雲海を望むまつだい芝峠温泉雲海",
    "themeTitle": "新潟県十日町市ふるさと納税：星峠の棚田観光の特等席・雲海を見下ろす露天風呂「まつだい芝峠温泉 雲海」",
    "themeDesc": "峠の頂に建ち、露天風呂から魚沼の山並みと広大な雲海を一望できる絶景温泉宿。星峠の棚田への早朝撮影に最適な立地で、ナトリウムー塩化物温泉で温まった後は、極上の魚沼産コシヒカリと山菜、地元越後の味覚会席を堪能できます。",
    "revAvg": "4.5",
    "minCharge": "8,800"
  },
  {
    "hotelNo": 52983,
    "hotelName": "輪島天然温泉「旅人の湯」ホテルルートイン輪島",
    "hotelKanaName": "わじまてんねんおんせん　ほてる　るーといんわじま",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D52983",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D52983%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D52983",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D52983",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/52983/52983.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/52983.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/52983/52983_tu.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/52983/52983map.gif",
    "reviewCount": 1215,
    "reviewAverage": 0,
    "userReview": "",
    "hotelMinCharge": 11200,
    "address1": "石川県",
    "address2": "輪島市マリンタウン1-2",
    "telephoneNo": "050-5576-7801",
    "access": "特急バス　輪島マリンタウンから徒歩１分／のと里山海道　能登空港ＩＣより車で３０分（２５ｋｍ）",
    "parkingInformation": "有り　137台　無料　予約不可（※先着順）",
    "nearestStation": "穴水",
    "hotelSpecial": "輪島朝市まで徒歩１分！天然温泉大浴場・ツインルームからは日本海が一望できます。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D52983",
    "featureKey": "tanada_shiroyone",
    "featureLabel": "石川県輪島市ふるさと納税・日本海へ雪崩れ込む千枚のあぜ道「白米千枚田」能登牛と輪島温泉八汐",
    "themeTitle": "石川県輪島市ふるさと納税：世界農業遺産・白米千枚田への拠点「輪島天然温泉 旅人の湯 ホテルルートイン輪島」",
    "themeDesc": "輪島市街の中心、輪島朝市や白米千枚田へのドライブアクセス抜群なホテル。自家源泉の天然温泉大浴場を備え、旅の疲れをリフレッシュ。能登の復興を応援しながら、輪島ならではの新鮮な海の幸や能登牛グルメの旅を楽しめます。",
    "revAvg": "4.6",
    "minCharge": "11,200"
  },
  {
    "hotelNo": 79263,
    "hotelName": "入鹿温泉ホテル瀞流荘",
    "hotelKanaName": "いるかおんせんほてるせいりゅうそう",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D79263",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D79263%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D79263",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D79263",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/79263/79263.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/79263.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/79263/79263_room.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/79263/79263map.gif",
    "reviewCount": 228,
    "reviewAverage": 4.47,
    "userReview": "建物は古いが料理は美味しく接客も丁寧お世話になりました。建物が古くて仕方ないですが部屋から機械音のような音がたびたびしていました。でも部屋はきれいでしたし、お料理も美味しかったです。ありがとう…　 ",
    "hotelMinCharge": 5000,
    "address1": "三重県",
    "address2": "熊野市紀和町小川口158",
    "telephoneNo": "0597-97-1180",
    "access": "自家用車以外の場合　ＪＲ紀勢本線・熊野市駅で降り、三重交通バス熊野古道瀞流荘線・瀞流荘行きに乗車。約50分。",
    "parkingInformation": "有り　７０台　無料　予約不要",
    "nearestStation": "熊野市",
    "hotelSpecial": "大自然にかこまれた温泉。あふれでる良質の湯に身も心もいやされる。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D79263",
    "featureKey": "tanada_maruyama",
    "featureLabel": "三重県熊野市ふるさと納税・千三百枚の石積みが描く日本の原風景「丸山千枚田」瀞峡の美と入鹿温泉ホテル瀞流荘",
    "themeTitle": "三重県熊野市ふるさと納税：丸山千枚田と瀞峡巡りの拠点・トロッコで行く秘湯「入鹿温泉ホテル瀞流荘」",
    "themeDesc": "千三百枚の棚田が広がる丸山千枚田から車で約15分、北山川の清流を望む温泉宿。名物トロッコ電車で行く湯ノ口温泉の湯巡りも楽しめ、熊野地鶏や美熊野牛、清流アユを取り入れた贅沢な会席料理を心ゆくまで味わえます。",
    "revAvg": "4.5",
    "minCharge": "5,000"
  }
];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* パンくずリスト */}
      <nav className="bg-white border-b border-slate-200 py-3 px-4 text-xs text-slate-500">
        <div className="max-w-5xl mx-auto flex items-center space-x-2">
          <Link href="/" className="hover:text-emerald-600 transition">ホーム</Link>
          <span>&gt;</span>
          <span className="text-slate-700 font-medium">日本三大美田・棚田百選＆日本の原風景リトリート宿×ふるさと納税ガイド</span>
        </div>
      </nav>

      {/* ヒーローヘッダー */}
      <header className="relative bg-gradient-to-br from-emerald-950 via-slate-900 to-teal-950 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-block bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-semibold px-3 py-1 rounded-full mb-2">
            日本三大棚田・日本の原風景特集
          </div>
          <h1 className="text-2xl md:text-4xl font-bold leading-tight tracking-tight">
            日本三大美田・棚田百選＆日本の原風景リトリート宿×ふるさと納税ガイド
          </h1>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-3xl mx-auto pt-2">
            先人たちが山あいの急斜面を切り拓き、石を積み上げて築き上げてきた「日本三大美田（棚田百選の最高峰）」――魚沼コシヒカリの産地で早朝の雲海と棚田の水鏡が織りなす息をのむ美しさで知られる新潟十日町の「星峠の棚田」、日本海の青い水平線をバックに小さな田が幾重にも重なり夕暮れ時のイルミネーション（あぜのきらめき）が幻想的な石川能登の「白米千枚田」、そして千三百枚もの石積みが山肌一面を覆い「一枚足りないと思ったら笠の下にあった」と言われるほどの壮大さを誇る三重熊野の「丸山千枚田」。春の水鏡、初夏の新緑、秋の黄金色の稲穂、冬の雪景色と、訪れるたびに日本の美しさを再発見させてくれます。棚田を見渡す温泉宿で寛ぎ、魚沼コシヒカリ・能登牛・熊野地鶏を味わう特別な旅を楽天ふるさと納税でお楽しみください。
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
            斜面を幾重にも刻む幾何学模様のあぜ道、水鏡に映る朝焼け。心震える大地のシンフォニー
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>雲海に浮かぶ水鏡・日本海一望の海辺棚田・千三百枚の石積み！圧倒的な景観美</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                夜明けの朝霧や夕日が水面を染めるマジックアワーなど、写真愛好家を魅了する奇跡の瞬間を体感。
              </p>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>魚沼産棚田米コシヒカリ、能登牛＆輪島朝市の海の幸、熊野地鶏＆瀞峡の鮎</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                清らかな山水と豊かな大地が育んだ最高峰のブランド米と、地域自慢の郷土美食を満喫。
              </p>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>楽天ふるさと納税宿泊クーポンで絶景の温泉旅館・ホテルをお得に予約</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                写真撮影旅や日本の原風景を巡る癒やし旅でも、寄付金額に応じた最大30%オフの即時割引クーポンでスマートにお得ステイ。
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
            
            <Link href="/furusato-tax-three-great-clear-stream-valleys-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三大美林渓流＆原生林マイナスイオン宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                奥入瀬・抱返り・阿寺渓谷。
              </p>
            </Link>
            
            <Link href="/furusato-tax-three-great-mountain-castles-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三大山城＆天空の雲海要塞宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                大和高取城・美濃岩村城・備中松山城。
              </p>
            </Link>
            
            <Link href="/furusato-tax-three-great-spring-waters-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三大名水＆湧水水源地・清流酒蔵美食宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                黒部湧水・白州尾白川・南阿蘇白川水源。
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
