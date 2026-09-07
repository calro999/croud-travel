import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '日本三大車窓＆絶景スイッチバック・高原パノラマ温泉宿×ふるさと納税完全ガイド【2026年最新】姨捨・矢岳越え・狩勝峠',
  description: '車窓を流れる息をのむ大パノラマ！長野千曲「姨捨駅」善光寺平を見下ろすスイッチバックの絶景と戸倉上山田温泉リバーサイド上田館、宮崎熊本鹿児島「肥薩線矢岳越え」霧島連峰と桜島を望む天空路線と霧島温泉ホテル霧島キャッスル、北海道十勝「旧狩勝峠」大雪山系と十勝平野を望む雄大な大地とサホロリゾートホテル。日本三大車窓の鉄旅ロマンを楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
  keywords: '日本三大車窓・天空鉄旅特集, 楽天ふるさと納税, 温泉宿, ふるさと納税 旅行, 高級旅館, ホテル予約, 2026年旅行',
  openGraph: {
    title: '日本三大車窓＆絶景スイッチバック・高原パノラマ温泉宿×ふるさと納税完全ガイド【2026年最新】姨捨・矢岳越え・狩勝峠',
    description: '車窓を流れる息をのむ大パノラマ！長野千曲「姨捨駅」善光寺平を見下ろすスイッチバックの絶景と戸倉上山田温泉リバーサイド上田館、宮崎熊本鹿児島「肥薩線矢岳越え」霧島連峰と桜島を望む天空路線と霧島温泉ホテル霧島キャッスル、北海道十勝「旧狩勝峠」大雪山系と十勝平野を望む雄大な大地とサホロリゾートホテル。日本三大車窓の鉄旅ロマンを楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    type: 'article',
    url: 'https://croud-travel.pages.dev/furusato-tax-three-great-train-window-views-stay',
    siteName: 'トラベルポータル',
  },
};

export default function Page() {
  const officialAffUrl = 'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F';

  const hotels = [
  {
    "hotelNo": 37465,
    "hotelName": "戸倉上山田温泉　リバーサイド上田館（伊東園ホテルズ）",
    "hotelKanaName": "とくらかみやまだおんせん　りばーさいどうえだかん",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D37465",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D37465%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D37465",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D37465",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/37465/37465.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/37465.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/37465/37465_kya.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/37465/37465map.gif",
    "reviewCount": 980,
    "reviewAverage": 3.94,
    "userReview": "ゆったり過ごせてバイキングも快適絶妙な希望で、想像以上にゆったりできました。バイキングも品数と通路等の距離が確保されており、ストレスを感じずにいただけました。クチコミの詳細はこちらから　htt…　 ",
    "hotelMinCharge": 6248,
    "address1": "長野県",
    "address2": "千曲市戸倉温泉3055",
    "telephoneNo": "0570-081-780",
    "access": "北陸新幹線上田駅乗換しなの鉄道　戸倉駅よりタクシーで５分、上信越自動車道坂城ＩＣよりＲ１８号線経由１５分",
    "parkingInformation": "有り　８０台　無料　",
    "nearestStation": "戸倉",
    "hotelSpecial": "美人の湯に癒され、千曲川の自然に包まれる宿。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D37465",
    "featureKey": "train_obasute",
    "featureLabel": "長野県千曲市ふるさと納税・善光寺平を一望するスイッチバックの名駅「姨捨の車窓」美肌の名湯戸倉上山田温泉",
    "themeTitle": "長野県千曲市ふるさと納税：姨捨の棚田と善光寺平夜景の拠点・千曲川沿いの名湯「戸倉上山田温泉 リバーサイド上田館」",
    "themeDesc": "日本三大車窓・名月の里「姨捨」から車で約15分、開湯130年を超える名湯・戸倉上山田温泉に位置する温泉ホテル。肌触りの良い天然温泉の大浴場と露天風呂で寛ぎ、千曲川の清流を眺めながら信州の山菜や旬の味覚バイキングをお得に満喫できます。",
    "revAvg": "3.9",
    "minCharge": "6,248"
  },
  {
    "hotelNo": 20183,
    "hotelName": "霧島温泉　ホテル霧島キャッスル",
    "hotelKanaName": "きりしまおんせん　きしりま　きゃっする",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D20183",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D20183%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D20183",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D20183",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/20183/20183.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/20183.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/20183/20183_wa.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/20183/20183map.gif",
    "reviewCount": 1449,
    "reviewAverage": 3.91,
    "userReview": "露天風呂と美味しい食事、縁日で夏を満喫露天風呂は、利用客が少なくのんびりと自然を感じながらお風呂を楽しめました。初めてのビュッフェだったのですが、釜飯・焼肉・鍋、鶏飯、デザートもあり食べ過ぎて…　 ",
    "hotelMinCharge": 8100,
    "address1": "鹿児島県",
    "address2": "霧島市牧園町高千穂3878-49",
    "telephoneNo": "0995-78-2211",
    "access": "鹿児島空港～車で約30分／塩湯温泉バス停～徒歩2分／丸尾バス停～徒歩5分　☆霧島神宮までは車で約15分☆",
    "parkingInformation": "150台　無料",
    "nearestStation": "霧島神宮",
    "hotelSpecial": "充実のバイキング、５４㎡の広々お部屋、掛け流し温泉と露天風呂が当館の自慢です！",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D20183",
    "featureKey": "train_yatake",
    "featureLabel": "宮崎県えびの市・鹿児島県霧島市ふるさと納税・霧島連峰と桜島を望む矢岳越えパノラマ「肥薩線の車窓」霧島温泉ステイ",
    "themeTitle": "鹿児島県霧島市・宮崎県えびの市ふるさと納税：肥薩線矢岳越えを望む霧島連峰の高原温泉リゾート「霧島温泉 ホテル霧島キャッスル」",
    "themeDesc": "矢岳越えのパノラマが広がる霧島連峰の麓に位置し、全室54平米以上の広々とした客室を誇る温泉リゾート。湯量豊富な霧島温泉の源泉かけ流し露天風呂で癒やされ、鹿児島黒豚しゃぶしゃぶやさつま揚げ、鹿児島の本格芋焼酎を心ゆくまで堪能できます。",
    "revAvg": "3.9",
    "minCharge": "8,100"
  },
  {
    "hotelNo": 10773,
    "hotelName": "サホロリゾートホテル",
    "hotelKanaName": "さほろ　りぞーとほてる",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D10773",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D10773%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D10773",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D10773",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/10773/10773.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/10773.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/10773/10773_heya.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/10773/10773map.gif",
    "reviewCount": 293,
    "reviewAverage": 3.4,
    "userReview": "",
    "hotelMinCharge": 9900,
    "address1": "北海道",
    "address2": "上川郡新得町字新内西5線148番地5",
    "telephoneNo": "0156-64-7111",
    "access": "ＪＲ石勝線新得駅から車で約１５分",
    "parkingInformation": "有　100台　先着順　無料",
    "nearestStation": "新得",
    "hotelSpecial": "ベアマウンテンでヒグマを観察！ホテル内のセルフロウリュできるサウナも人気です。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D10773",
    "featureKey": "train_karikachi",
    "featureLabel": "北海道新得町ふるさと納税・広大な十勝平野と大雪山系を見晴らす旧狩勝峠「日本三大車窓」十勝サホロリゾート",
    "themeTitle": "北海道新得町ふるさと納税：旧狩勝峠の雄大な十勝平野を見晴らす北欧風高原リゾート「サホロリゾートホテル」",
    "themeDesc": "日本三大車窓・旧狩勝峠のすぐそば、十勝サホロ岳の裾野に広がる高原リゾートホテル。マイナスイオンあふれる森に囲まれた露天風呂とサウナで寛ぎ、北海道十勝産牛肉のグリルや地元新得名物の手打ち蕎麦、新鮮な十勝産チーズ料理を堪能できます。",
    "revAvg": "3.4",
    "minCharge": "9,900"
  }
];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* パンくずリスト */}
      <nav className="bg-white border-b border-slate-200 py-3 px-4 text-xs text-slate-500">
        <div className="max-w-5xl mx-auto flex items-center space-x-2">
          <Link href="/" className="hover:text-emerald-600 transition">ホーム</Link>
          <span>&gt;</span>
          <span className="text-slate-700 font-medium">日本三大車窓＆天空パノラマ・絶景温泉宿×ふるさと納税ガイド</span>
        </div>
      </nav>

      {/* ヒーローヘッダー */}
      <header className="relative bg-gradient-to-br from-emerald-950 via-slate-900 to-teal-950 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-block bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-semibold px-3 py-1 rounded-full mb-2">
            日本三大車窓・天空鉄旅特集
          </div>
          <h1 className="text-2xl md:text-4xl font-bold leading-tight tracking-tight">
            日本三大車窓＆天空パノラマ・絶景温泉宿×ふるさと納税ガイド
          </h1>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-3xl mx-auto pt-2">
            鉄道の黄金時代から旅情あふれる名景として語り継がれてきた「日本三大車窓」――JR篠ノ井線の姨捨駅から見下ろす千曲川と棚田・善光寺平の夜景パノラマが美しい長野の「姨捨の車窓」、熊本から宮崎・鹿児島へと抜けるJR肥薩線の山岳区間で霧島連峰と遠く桜島を仰ぐ九州の「矢岳越え」、そして旧国鉄根室本線で大雪山系の山並みとどこまでも続く十勝平野の原生林を見晴らした北海道の「狩勝峠」。山を越えるために工夫されたスイッチバックやループ線、トンネルを抜けた瞬間に視界が開ける圧倒的な感動は、鉄道旅ならではの醍醐味です。名車窓の余韻に浸りながら名湯温泉に身を委ね、信州十割蕎麦・薩摩黒豚・十勝牛とチーズを堪能する特別な旅を楽天ふるさと納税でお楽しみください。
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
            列車が山を登りきった瞬間に広がる大平原。旅人を魅了し続ける車窓の奇跡
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>棚田の夜景・霧島連峰の雄姿・十勝平野の大平原！旅情あふれる天空パノラマ</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                鉄道ファンのみならずすべての旅人の心を奪う、標高差が生み出すダイナミックな大パノラマを体感。
              </p>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>信州和牛＆千曲のアンズ、鹿児島黒豚＆地鶏炭火焼き、十勝和牛ステーキ＆新鮮乳製品</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                高原と盆地、肥沃な大地の恵みがもたらす、日本各地の選りすぐりブランドグルメを満喫。
              </p>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>楽天ふるさと納税宿泊クーポンで高原リゾート・名湯旅館をお得に予約</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                鉄道旅やドライブ旅行でも、寄付金額に応じた最大30%オフの即時割引クーポンでスマートにお得ステイ。
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
            
            <Link href="/furusato-tax-three-great-rapid-rivers-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三大急流＆川下り舟体験・清流鮎グルメ宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                最上川・富士川・球磨川。
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
            
            <Link href="/furusato-tax-three-great-secret-hotsprings-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三大秘湯＆秘境の大自然一軒宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                谷地温泉・祖谷温泉・乳頭温泉郷。
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
