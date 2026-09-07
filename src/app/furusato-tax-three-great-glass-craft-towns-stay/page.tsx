import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '日本三大ガラス工芸の町＆光の芸術・切子の輝きと風雅名宿×ふるさと納税完全ガイド【2026年最新】小樽・東京・鹿児島',
  description: '光と色彩が織りなす工芸の最高峰！北海道「小樽切子・北一硝子」ランプ揺れる運河の街とオーセントホテル小樽、東京「江戸切子」繊細なカットが生む下町の技と浅草ビューホテルアネックス六区、鹿児島「薩摩切子」重厚なクリスタルと紅・藍のグラデーションに城山ホテル鹿児島。日本三大ガラス工芸の町を巡り、伝統の美と洗練されたホテルステイを楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
  keywords: '日本三大ガラス工芸・伝統美特集, 楽天ふるさと納税, 温泉宿, ふるさと納税 旅行, 高級旅館, ホテル予約, 2026年旅行',
  openGraph: {
    title: '日本三大ガラス工芸の町＆光の芸術・切子の輝きと風雅名宿×ふるさと納税完全ガイド【2026年最新】小樽・東京・鹿児島',
    description: '光と色彩が織りなす工芸の最高峰！北海道「小樽切子・北一硝子」ランプ揺れる運河の街とオーセントホテル小樽、東京「江戸切子」繊細なカットが生む下町の技と浅草ビューホテルアネックス六区、鹿児島「薩摩切子」重厚なクリスタルと紅・藍のグラデーションに城山ホテル鹿児島。日本三大ガラス工芸の町を巡り、伝統の美と洗練されたホテルステイを楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    type: 'article',
    url: 'https://croud-travel.pages.dev/furusato-tax-three-great-glass-craft-towns-stay',
    siteName: 'トラベルポータル',
  },
};

export default function Page() {
  const officialAffUrl = 'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F';

  const hotels = [
  {
    "hotelNo": 825,
    "hotelName": "オーセントホテル小樽",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D825",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D825%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D825",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D825",
    "hotelKanaName": "おーせんとほてる　おたる",
    "hotelSpecial": "小樽駅より徒歩5分で観光便利♪海と街を望むノスタルジックなホテル。地産地消の美食も口コミ高評価！",
    "hotelMinCharge": 6100,
    "address1": "北海道",
    "address2": "小樽市稲穂2-15-1",
    "telephoneNo": "0134-27-8100",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/825/825.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/825/825_room.jpg",
    "reviewCount": 2052,
    "reviewAverage": 4.37,
    "userReview": "バーと朝食に大満足、また利用したいホテル内のバーがすごくよかったです。お酒が好きな主人との旅行でしたので、こちらのホテルを選ばせていただきました。朝食もおいしくフロントの女性の方の対応も大…　2026-09-05 19:42:38投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=825\" class=\"3click\">つづきはこちら</a>",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D825",
    "label": "北海道小樽市ふるさと納税・北一硝子やガラス工房めぐりの拠点「小樽ガラスの街」オーセントホテル小樽",
    "themeTitle": "北海道小樽市ふるさと納税：北一硝子やオルゴール堂へアクセス良好・小樽の気品漂うクラシック「オーセントホテル小樽」",
    "themeDesc": "小樽市街の中心に位置し、堺町通りのガラス工芸館巡りや小樽運河散策の拠点に最適な本格シティホテル。落ち着いた英国調のインテリアと広々とした客室、天然ラジウム人工温泉サウナ付き大浴場、小樽近海の海の幸と道産牛フレンチ・和食会席が魅力です。",
    "revAvg": "4.4",
    "minCharge": "6,100",
    "access": "最寄り駅・主要道路よりアクセス良好"
  },
  {
    "hotelNo": 177986,
    "hotelName": "浅草ビューホテル　アネックス　六区",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D177986",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D177986%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D177986",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D177986",
    "hotelKanaName": "あさくさびゅーほてるあねっくすろっく",
    "hotelSpecial": "和の伝統文化に触れ、“本当の浅草”を感じる体験型ホテル",
    "hotelMinCharge": 6460,
    "address1": "東京都",
    "address2": "台東区浅草2丁目９番10号",
    "telephoneNo": "0570-003-235",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/177986/177986.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/177986/177986_kan1.jpg",
    "reviewCount": 92,
    "reviewAverage": 4.5,
    "userReview": "お風呂とトイレ別は良いが清掃と接客に難ありお風呂とトイレ別が嬉しかったけど、水周りの清掃が今ひとつ朝ご飯まだ残ってるのに下げられそうになったクチコミの詳細はこちらから　https://re…　2026-08-21 18:55:58投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=177986\" class=\"3click\">つづきはこちら</a>",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D177986",
    "label": "東京都墨田区・台東区ふるさと納税・繊細なカットが生む光の芸術「江戸切子」下町情緒と浅草ビューホテル",
    "themeTitle": "東京都台東区・墨田区ふるさと納税：江戸切子の町・墨田浅草の下町文化と粋を体感「浅草ビューホテル アネックス 六区」",
    "themeDesc": "江戸切子の工房が集まる墨田・浅草エリアに位置し、伝統芸能とモダンが融合した和のホテル。江戸の粋を感じさせる客室や、浅草六区の伝統文化を体験できるラウンジを備え、下町の切子ギャラリー巡りや東京スカイツリー観光の拠点にぴったりです。",
    "revAvg": "4.5",
    "minCharge": "6,460",
    "access": "最寄り駅・主要道路よりアクセス良好"
  },
  {
    "hotelNo": 5305,
    "hotelName": "ＳＨＩＲＯＹＡＭＡ　ＨＯＴＥＬ　ｋａｇｏｓｈｉｍａ（城山ホテル鹿児島）",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D5305",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D5305%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D5305",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D5305",
    "hotelKanaName": "しろやまほてるかごしま",
    "hotelSpecial": "城山観光ホテルは、「SHIROYAMA HOTEL kagoshima」へ名称変更いたしました。",
    "hotelMinCharge": 9100,
    "address1": "鹿児島県",
    "address2": "鹿児島市新照院町41-1",
    "telephoneNo": "0570-07-4680",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/5305/5305.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/5305/5305_room.jpg",
    "reviewCount": 3837,
    "reviewAverage": 4.63,
    "userReview": "大きな窓からの景色と美味しい朝食に大満足部屋の窓が大きく、景色も素晴らしい、朝食ビュッフェもとても美味しかったですスタッフのホスピタリティも最高ですこちらのホテルを選んで本当に良か…　2026-09-05 22:24:41投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=5305\" class=\"3click\">つづきはこちら</a>",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D5305",
    "label": "鹿児島県鹿児島市ふるさと納税・透明ガラスに色ガラスを被せた幻のぼかし美「薩摩切子」桜島一望露天風呂城山ホテル鹿児島",
    "themeTitle": "鹿児島県鹿児島市ふるさと納税：薩摩切子の美意識と桜島一望の絶景展望露天風呂「SHIROYAMA HOTEL kagoshima（城山ホテル鹿児島）」",
    "themeDesc": "仙巌園の薩摩切子ギャラリーや磯工芸館へのアクセス至便、城山の高台から桜島と錦江湾を正面に望む名門ホテル。地下1,000mから湧き出る展望露天温泉「さつま乃湯」や、鹿児島県産黒豚・黒毛和牛会席、薩摩切子で味わう本格芋焼酎バーが至福の夜を約束します。",
    "revAvg": "4.6",
    "minCharge": "9,100",
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
          <span className="text-slate-700 font-medium">日本三大ガラス工芸の町＆切子の輝きと名宿×ふるさと納税ガイド</span>
        </div>
      </nav>

      {/* ヒーローヘッダー */}
      <header className="relative bg-gradient-to-br from-emerald-950 via-slate-900 to-teal-950 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-block bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-semibold px-3 py-1 rounded-full mb-2">
            日本三大ガラス工芸・伝統美特集
          </div>
          <h1 className="text-2xl md:text-4xl font-bold leading-tight tracking-tight">
            日本三大ガラス工芸の町＆切子の輝きと名宿×ふるさと納税ガイド
          </h1>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-3xl mx-auto pt-2">
            卓越した職人技によってガラスに命を吹き込み、光の屈折と鮮やかな色彩で人々を魅了し続ける「日本三大ガラス工芸の町」――ニシン漁の浮き玉や石油ランプ製造から発展しレトロな洋館にガラスショップや工房が立ち並ぶ北海道の「小樽ガラス（小樽切子・北一硝子）」、江戸時代末期に発祥し十数種類の伝統文様を透明な色ガラスに精緻に刻み込む東京下町の「江戸切子」、そして薩摩藩主・島津斉彬が集成館事業で興し厚い色ガラスにグラデーションを施す「ぼかし」の技術で世界に誇る美を確立した鹿児島の「薩摩切子」。工房での吹きガラス体験やギャラリー鑑賞を堪能した後は、地域の美酒を切子のグラスで傾け、名湯露天風呂と郷土会席に酔いしれる上質な旅を楽天ふるさと納税でお楽しみください。
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
            灯りと色彩が奏でるクリスタルの小宇宙。日本三大ガラス工芸の町と優雅な宿
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>小樽硝子のランプ灯・江戸切子のシャープな輝き・薩摩切子の幽玄なぼかし美</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                日本が誇る三大ガラスの美意識と、工房見学・切子制作体験で伝統工芸の真髄に触れる旅。
              </p>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>切子グラスでいただく地酒・銘醸ワイン、蝦夷前握り寿司・黒豚しゃぶしゃぶ</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                ガラスの町ならではの器へのこだわり。美しいカットグラスで味わうご当地ディナーを満喫。
              </p>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>楽天ふるさと納税宿泊クーポンでクラシックホテルや温泉宿をお得に予約</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                クラフト体験や美術館巡りの旅でも、寄付金額に応じた最大30%オフの即時割引クーポンでスマートにお得ステイ。
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
            
            <Link href="/furusato-tax-three-great-pottery-festivals-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三大陶器まつり＆名窯工芸宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                有田・波佐見・信楽。
              </p>
            </Link>
            
            <Link href="/furusato-tax-three-great-roof-tile-towns-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三大瓦の町＆伝統美・いぶし瓦情趣の名宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                淡路瓦・三州瓦・石州瓦。
              </p>
            </Link>
            
            <Link href="/furusato-tax-three-great-washi-papers-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三大和紙＆清流文化湯宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                越前・美濃・土佐和紙。
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
