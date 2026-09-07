import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '日本三大カルデラ＆地球の息吹・巨大火口原パノラマと名湯宿×ふるさと納税完全ガイド【2026年最新】阿蘇・箱根・屈斜路',
  description: '大地の鼓動を肌で感じるジオパークの驚異！世界屈指の複式カルデラと外輪山の大パノラマ「阿蘇カルデラ」阿蘇内牧温泉阿蘇プラザホテル、富士山を望むカルデラ湖畔のリゾート「箱根カルデラ（芦ノ湖）」箱根はなをり、日本最大のカルデラ湖と屈斜路ブルー「屈斜路・摩周カルデラ」屈斜路プリンスホテル。日本三大カルデラの絶景温泉宿を楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
  keywords: '日本三大カルデラ・大自然ジオ特集, 楽天ふるさと納税, 温泉宿, ふるさと納税 旅行, 高級旅館, ホテル予約, 2026年旅行',
  openGraph: {
    title: '日本三大カルデラ＆地球の息吹・巨大火口原パノラマと名湯宿×ふるさと納税完全ガイド【2026年最新】阿蘇・箱根・屈斜路',
    description: '大地の鼓動を肌で感じるジオパークの驚異！世界屈指の複式カルデラと外輪山の大パノラマ「阿蘇カルデラ」阿蘇内牧温泉阿蘇プラザホテル、富士山を望むカルデラ湖畔のリゾート「箱根カルデラ（芦ノ湖）」箱根はなをり、日本最大のカルデラ湖と屈斜路ブルー「屈斜路・摩周カルデラ」屈斜路プリンスホテル。日本三大カルデラの絶景温泉宿を楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    type: 'article',
    url: 'https://croud-travel.pages.dev/furusato-tax-three-great-calderas-geopark-stay',
    siteName: 'トラベルポータル',
  },
};

export default function Page() {
  const officialAffUrl = 'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F';

  const hotels = [
  {
    "hotelNo": 44868,
    "hotelName": "阿蘇内牧温泉　阿蘇プラザホテル",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D44868",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D44868%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D44868",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D44868",
    "hotelKanaName": "あそ　ぷらざほてる",
    "hotelSpecial": "人気の展望露天風呂から阿蘇のパノラマビューを満喫！旬の会席を堪能♪",
    "hotelMinCharge": 7000,
    "address1": "熊本県",
    "address2": "阿蘇市内牧1287",
    "telephoneNo": "0967-32-0711",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/44868/44868.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/44868/44868_wa.jpg",
    "reviewCount": 541,
    "reviewAverage": 3.99,
    "userReview": "懐石料理は豪華で美味、温泉も快適建物の古さは感じますが清潔感があり快適に過ごすことが出来ました。夕飯の懐石が豪華で大変美味しかったですが、小学三年生の息子には量が多かったため、柔軟に対応しても…　 ",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D44868",
    "access": "ＪＲ阿蘇駅よりバスにて１０分",
    "label": "熊本県阿蘇市ふるさと納税・世界屈指の巨大カルデラと大草原「阿蘇カルデラ」阿蘇内牧温泉阿蘇プラザホテル",
    "themeTitle": "熊本県阿蘇市ふるさと納税：阿蘇五岳とカルデラを一望・最上階展望露天風呂「阿蘇内牧温泉 阿蘇プラザホテル」",
    "themeDesc": "阿蘇カルデラの中心・内牧温泉に位置し、阿蘇五岳の涅槃像を正面に望む大型温泉ホテル。屋上展望露天風呂「峰望の湯」からの大パノラマと、熊本名物のあか牛ステーキや馬刺し、郷土料理バイキングが人気を集めています。",
    "revAvg": "4.0",
    "minCharge": "7,000"
  },
  {
    "hotelNo": 162650,
    "hotelName": "箱根・芦ノ湖　はなをり（オリックスホテルズ＆リゾーツ）",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D162650",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D162650%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D162650",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D162650",
    "hotelKanaName": "はこね・あしのこ　はなをり（おりっくすほてるず＆りぞーと）",
    "hotelSpecial": "SNSで話題の水盤テラス＆足湯♪ 色浴衣を身にまとい、五感が喜ぶ温泉リゾートでフォトジェニックな旅を",
    "hotelMinCharge": 24597,
    "address1": "神奈川県",
    "address2": "足柄下郡箱根町元箱根桃源台160",
    "telephoneNo": "0460-83-8739",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/162650/162650.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/162650/162650_kan1.jpg",
    "reviewCount": 1483,
    "reviewAverage": 4.38,
    "userReview": "芦ノ湖の絶景と充実のビュッフェに大満足部屋からの芦ノ湖の景色が良く、ビュッフェも充実していて美味しかったです。従業員の方の対応も良く、機会があればまた訪れたいです。クチコミの詳細はこちらから　…　 ",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D162650",
    "access": "桃源台駅より徒歩にて約2分",
    "label": "神奈川県箱根町ふるさと納税・複合成層カルデラと霊峰富士の絶景「箱根カルデラ」芦ノ湖はなをり",
    "themeTitle": "神奈川県箱根町ふるさと納税：芦ノ湖のカルデラ水面と一体化する水盤テラス「箱根・芦ノ湖 はなをり（オリックスホテルズ＆リゾーツ）」",
    "themeDesc": "芦ノ湖畔に佇み、カルデラ湖を見渡すオープンエアの水盤テラスや足湯が象徴的なモダン温泉リゾート。芦ノ湖を望む展望露天風呂や、二十四節気をテーマにした彩り豊かなブッフェダイニングで優雅な箱根の休日を演出します。",
    "revAvg": "4.4",
    "minCharge": "24,597"
  },
  {
    "hotelNo": 15401,
    "hotelName": "屈斜路プリンスホテル",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D15401",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D15401%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D15401",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D15401",
    "hotelKanaName": "くっしゃろ　ぷりんすほてる",
    "hotelSpecial": "全室湖面側！日本最大のカルデラ湖に佇む・湖畔のリゾートホテルで湖とともに過ごすホテルステイ♪♪",
    "hotelMinCharge": 3942,
    "address1": "北海道",
    "address2": "川上郡弟子屈町屈斜路温泉",
    "telephoneNo": "015-484-2111",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/15401/15401.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/15401/15401_room.jpg",
    "reviewCount": 950,
    "reviewAverage": 3.95,
    "userReview": "お湯最高、星空も綺麗お湯が気持ちよかったです。特にいろんな種類があるというわけではないですが、すごく入りやすい。家族旅行でしたが、ご飯も美味しく、札幌から車で長旅した甲斐がありました。星空も見えた…　 ",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D15401",
    "access": "ＪＲ釧網本線摩周駅からタクシーで２５分・事前予約制送迎バス有（4月～11月迄）／女満別空港から車で５０分",
    "label": "北海道弟子屈町ふるさと納税・日本最大のカルデラ湖と雲海摩周ブルー「屈斜路・摩周カルデラ」屈斜路プリンスホテル",
    "themeTitle": "北海道弟子屈町ふるさと納税：日本最大のカルデラ湖畔・美幌峠雲海への特等席「屈斜路プリンスホテル」",
    "themeDesc": "屈斜路湖のほとりに佇み、ホテル敷地内からカルデラ湖の雄大な自然を満喫できるリゾート。地下1,000mから湧き出る庭園露天風呂でくつろぎ、北海道産の魚介や十勝牛を取り入れたディナービュッフェを楽しめます。",
    "revAvg": "4.0",
    "minCharge": "3,942"
  }
];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* パンくずリスト */}
      <nav className="bg-white border-b border-slate-200 py-3 px-4 text-xs text-slate-500">
        <div className="max-w-5xl mx-auto flex items-center space-x-2">
          <Link href="/" className="hover:text-emerald-600 transition">ホーム</Link>
          <span>&gt;</span>
          <span className="text-slate-700 font-medium">日本三大カルデラ＆巨大火口原パノラマ名湯宿×ふるさと納税ガイド</span>
        </div>
      </nav>

      {/* ヒーローヘッダー */}
      <header className="relative bg-gradient-to-br from-emerald-950 via-slate-900 to-teal-950 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-block bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-semibold px-3 py-1 rounded-full mb-2">
            日本三大カルデラ・大自然ジオ特集
          </div>
          <h1 className="text-2xl md:text-4xl font-bold leading-tight tracking-tight">
            日本三大カルデラ＆巨大火口原パノラマ名湯宿×ふるさと納税ガイド
          </h1>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-3xl mx-auto pt-2">
            数万年前の巨大噴火によって大地が陥没し、息をのむ雄大な凹地地形を形成した「日本三大カルデラ」――東西約18km・南北約25kmにおよびカルデラ内に町や鉄道が広がる世界最大級のスケールを誇る熊本の「阿蘇カルデラ」、中央火口丘や芦ノ湖・仙石原を擁し霊峰富士を仰ぎ見る日本屈指の温泉郷を形成した神奈川の「箱根カルデラ」、そして周囲約57kmに及ぶ日本最大のカルデラ湖であり冬には白鳥が飛来し砂湯が湧き出る北海道道東の「屈斜路カルデラ」。大地の鼓動が育んだ濃厚な天然温泉に身を浸し、あか牛・相模湾の海の幸・北海道の極上ジビエや海鮮を味わうダイナミックな休日を楽天ふるさと納税でお楽しみください。
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
            見渡す限りの外輪山、噴煙を上げる火口、紺碧のカルデラ湖。地球のエネルギーを体感する旅
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>外輪山の大観峰・箱根大涌谷の噴煙・屈斜路湖の美幌峠！圧倒的な地球景観</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                カルデラを見下ろす展望台からの大雲海や、火山の恩恵による多彩な泉質の湯巡りを体感。
              </p>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>熊本あか牛の溶岩焼き、小田原漁港の朝獲れ鮮魚と足柄牛、オホーツク海の毛ガニと十勝ハーブ牛</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                火山灰土と豊かな伏流水が育んだブランド和牛と新鮮な地元食材の極上ディナー。
              </p>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>楽天ふるさと納税宿泊クーポンで絶景リゾートホテルや老舗温泉宿をお得に予約</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                ドライブ観光やジオパーク巡りでも、寄付金額に応じた最大30%オフの即時割引クーポンでスマートにお得ステイ。
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
                        {h.hotelSpecial || '日本三大岬のダイナミックな断崖絶景、日本三大古代湖の悠久の湖畔風景、日本三大竹林の静寂の緑の回廊、日本三大カルデラの地球の息吹を巡る極上の拠点。四季折々の美食と名湯でお寛ぎください。'}
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
            あわせて読みたい全国の絶景岬・古代湖・自然回廊特集
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            
            <Link href="/furusato-tax-three-great-karsts-highland-drive-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三大カルスト＆天空の白い巨岩パノラマ宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                秋吉台・四国カルスト・平尾台。
              </p>
            </Link>
            
            <Link href="/furusato-tax-sea-of-clouds-sky-terrace-hotel-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                雲海テラス＆天空パノラマリゾート×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                トマム・志賀高原・蔵王。
              </p>
            </Link>
            
            <Link href="/furusato-tax-fuji-view-onsen-resort-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                絶景富士山ビュー露天風呂宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                河口湖・山中湖・日本平。
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
