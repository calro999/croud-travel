import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '日本三大山城＆天空の要塞・雲海に浮かぶ石垣美ホテル宿×ふるさと納税完全ガイド【2026年最新】大和高取城・美濃岩村城・備中松山城',
  description: '雲海に浮かぶ天空の要塞！奈良「大和高取城」日本一の比高390mとカンデオホテルズ奈良橿原、岐阜恵那「美濃岩村城」標高717m日本一高い山城と天然温泉岩寿荘、岡山高梁「備中松山城」現存天守唯一の山城と吉備高原リゾートホテル。日本三大山城の壮大な石垣群と雲海パノラマを楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
  keywords: '日本三大山城・天空の要塞特集, 楽天ふるさと納税, 温泉宿, ふるさと納税 旅行, 高級旅館, ホテル予約, 2026年旅行',
  openGraph: {
    title: '日本三大山城＆天空の要塞・雲海に浮かぶ石垣美ホテル宿×ふるさと納税完全ガイド【2026年最新】大和高取城・美濃岩村城・備中松山城',
    description: '雲海に浮かぶ天空の要塞！奈良「大和高取城」日本一の比高390mとカンデオホテルズ奈良橿原、岐阜恵那「美濃岩村城」標高717m日本一高い山城と天然温泉岩寿荘、岡山高梁「備中松山城」現存天守唯一の山城と吉備高原リゾートホテル。日本三大山城の壮大な石垣群と雲海パノラマを楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    type: 'article',
    url: 'https://croud-travel.pages.dev/furusato-tax-three-great-mountain-castles-stay',
    siteName: 'トラベルポータル',
  },
};

export default function Page() {
  const officialAffUrl = 'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F';

  const hotels = [
  {
    "hotelNo": 165797,
    "hotelName": "ＣＡＮＤＥＯ　ＨＯＴＥＬＳ（カンデオホテルズ）奈良橿原",
    "hotelKanaName": "かんでおほてるず　ならかしはら",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D165797",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D165797%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D165797",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D165797",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/165797/165797.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/165797.jpg",
    "roomImageUrl": "",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/165797/165797map.gif",
    "reviewCount": 1843,
    "reviewAverage": 4.48,
    "userReview": "サウナと露天風呂が快適、次は朝食も食べたい当日予約で、サウナ付きのホテルを近場で探していたので良かったです部屋も清潔で、何より露天風呂、サウナは広くて快適でした今回は素泊まりでしたが、次回…　 ",
    "hotelMinCharge": 6600,
    "address1": "奈良県",
    "address2": "橿原市内膳町1-1-50",
    "telephoneNo": "0744-21-8700",
    "access": "【大和八木駅より徒歩3分】＜近鉄難波駅より特急で35分・京都駅より特急で50分＞吉野の紅葉まで特急で約50分♪",
    "parkingInformation": "専用駐車場無し。当館地下は最大料金無し。割引券のある駐車場あり※詳細は公式HPをご確認ください",
    "nearestStation": "大和八木",
    "hotelSpecial": "最上階に大展望風呂を備えるジャパンクールデザインホテル／全室禁煙",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D165797",
    "label": "奈良県高取町・橿原市ふるさと納税・日本一の比高390mを誇る難攻不落の山城「大和高取城」大和三山と橿原ホテルステイ",
    "themeTitle": "奈良県高取町・橿原市ふるさと納税：比高日本一の巨大山城「大和高取城」と最上階スカイスパ「カンデオホテルズ奈良橿原」",
    "themeDesc": "日本屈指の山城・高取城址の散策拠点。大和八木駅前の「カンデオホテルズ奈良橿原」は、最上階に大和三山を一望する露天風呂付きスカイスパとサウナを備え、歴史探訪の疲れを癒やすスタイリッシュな滞在を満喫できます。",
    "revAvg": "4.5",
    "minCharge": "6,600"
  },
  {
    "hotelNo": 30961,
    "hotelName": "山×星×川の温泉宿　岩寿荘（ＩＷＡＳＵＳＯ）",
    "hotelKanaName": "やまほしかわのおんせんやど　いわすそう",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D30961",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D30961%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D30961",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D30961",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/30961/30961.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/30961.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/30961/30961_kan.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/30961/30961map.gif",
    "reviewCount": 249,
    "reviewAverage": 4.3,
    "userReview": "子供が多く騒がしく落ち着かない環境子供向け。大人同士で落ち着いて行くホテルじゃない。子供が飛び回りぎゃーぎゃーうるさい。自分がいけないのだか。もっとよく口コミ観れば良かった。クチコミの詳細…　 ",
    "hotelMinCharge": 9750,
    "address1": "岐阜県",
    "address2": "中津川市蛭川4467-4",
    "telephoneNo": "0573-45-2188",
    "access": "JR恵那駅より無料送迎バスあり／恵那・中津川ICよりともにお車にて20分",
    "parkingInformation": "有　５０台　無料　先着順",
    "nearestStation": "恵那",
    "hotelSpecial": "【山の恵み　星の輝き　川のせせらぎ】森の中の一軒宿。飛騨牛料理指定店◆貸切風呂、貸切露天風呂無料◆",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D30961",
    "label": "岐阜県恵那市ふるさと納税・標高717mの日本一高い山城・女城主の悲話「美濃岩村城」美肌温泉と恵那峡温泉ホテル花更紗",
    "themeTitle": "岐阜県恵那市ふるさと納税：標高717m日本一の山城「美濃岩村城」と秘湯「山×星×川の温泉宿 岩寿荘」",
    "themeDesc": "六段壁の石垣が圧巻の岩村城跡と城下町散策の拠点。山懐の静寂に佇む「岩寿荘」では、ラジウム温泉の貸切風呂で寛ぎ、恵那名産の松茸や飛騨牛、地元の清流川魚を使った里山会席に舌鼓を打ちます。",
    "revAvg": "4.3",
    "minCharge": "9,750"
  },
  {
    "hotelNo": 12654,
    "hotelName": "吉備高原リゾートホテル",
    "hotelKanaName": "きびこうげんりぞーとほてる",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D12654",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D12654%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D12654",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D12654",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/12654/12654.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/12654.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/12654/12654_twn.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/12654/12654map.gif",
    "reviewCount": 269,
    "reviewAverage": 4.21,
    "userReview": "食事も温泉も大満足、家族で楽しめた一日今回、夕食なしのプランでお願いしましたが、近隣にレストランが少ないことと、お天気が崩れそうなこともあり、ホテルのごっつおうを利用させていただきました。麻婆…　 ",
    "hotelMinCharge": 6930,
    "address1": "岡山県",
    "address2": "加賀郡吉備中央町吉川4860-6きびプラザ3F",
    "telephoneNo": "0866-56-7170",
    "access": "岡山空港より車で約20分／[E73]岡山道 賀陽ICより約15分／岡山市内より約40分／JR岡山駅より中鉄バスで約60分",
    "parkingInformation": "無料駐車場完備＜170台＞★大型車・観光バス・トラック駐車可能",
    "nearestStation": "岡山",
    "hotelSpecial": "豊かな自然と澄んだ空気に囲まれた吉備高原。岡山県の食材を使用した自慢の料理をお楽しみください",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D12654",
    "label": "岡山県高梁市ふるさと納税・現存12天守で唯一の山城・天空の山城「備中松山城」雲海パノラマと備中高梁ホテルステイ",
    "themeTitle": "岡山県高梁市・吉備中央町ふるさと納税：現存天守唯一の天空の山城「備中松山城」と「吉備高原リゾートホテル」",
    "themeDesc": "雲海に浮かぶ備中松山城展望台へのアクセスに便利な高原リゾート。緑豊かな自然に囲まれた広い客室で寛ぎ、岡山名物のブランド牛「千屋牛」や吉備高原の新鮮野菜を使ったディナーを堪能できます。",
    "revAvg": "4.2",
    "minCharge": "6,930"
  }
];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* パンくずリスト */}
      <nav className="bg-white border-b border-slate-200 py-3 px-4 text-xs text-slate-500">
        <div className="max-w-5xl mx-auto flex items-center space-x-2">
          <Link href="/" className="hover:text-emerald-600 transition">ホーム</Link>
          <span>&gt;</span>
          <span className="text-slate-700 font-medium">日本三大山城＆天空の雲海要塞宿×ふるさと納税ガイド</span>
        </div>
      </nav>

      {/* ヒーローヘッダー */}
      <header className="relative bg-gradient-to-br from-emerald-950 via-slate-900 to-teal-950 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-block bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-semibold px-3 py-1 rounded-full mb-2">
            日本三大山城・天空の要塞特集
          </div>
          <h1 className="text-2xl md:text-4xl font-bold leading-tight tracking-tight">
            日本三大山城＆天空の雲海要塞宿×ふるさと納税ガイド
          </h1>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-3xl mx-auto pt-2">
            戦国から江戸初期にかけて標高数百メートルの山上に築かれ、天険の要害と驚異の石垣土木技術を今に伝える「日本三大山城」――城下町との比高が約390mと日本一を誇り「南郷に雪降るかと見れば雪ではござらぬ高取の城」と謳われた奈良の「大和高取城」、標高717mに位置し日本一高い場所にある山城として六段壁の石垣美と女城主の哀話が残る岐阜恵那の「美濃岩村城」、そして標高430mの臥牛山頂に現存12天守の中で唯一現存する山城天守を持ち秋冬の早朝には見事な雲海に浮かぶ岡山の「備中松山城」。鬱蒼とした森の中に突然現れる巨大な石垣の遺構は、中世武士たちの執念とロマンを肌で感じさせます。山麓のホテルや隠れ家温泉旅館を拠点に、早朝の雲海展望台アタックや飛鳥・美濃・備中の郷土料理を味わう特別な休日を楽天ふるさと納税でお楽しみください。
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
            朝霧の彼方にそびえ立つ白亜の天守と無数の巨石垣。難攻不落を誇った三大山城へ
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>雲海展望台や登城口へ早朝アクセス抜群！朝靄に浮かぶ天空の城を激写</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                天候の条件が揃った朝、宿からスムーズに展望地へ向かい、幻想的な雲海の絶景を鑑賞。
              </p>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>大和牛＆飛鳥鍋、飛騨牛＆恵那山菜川魚会席、千屋牛ステーキ＆備中郷土料理</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                山城の歴史が息づく城下町ならではの伝統の味覚を、宿の本格ディナーで堪能。
              </p>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>楽天ふるさと納税宿泊クーポンでスカイスパホテルや温泉宿をお得にリザーブ</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                山城探訪のベストシーズンでも、寄付金額に応じた即時割引クーポンで実質2,000円負担の快適宿泊。
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
                        {h.hotelSpecial || '日本三大美港の夜景、天空の山城の石垣美、手延べそうめんの伝統技、鍾乳石洞窟の地底宮殿を巡る極上の拠点。四季折々の美食と名湯でお寛ぎください。'}
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
            あわせて読みたい日本の名城・麺道・絶景特集
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            
            <Link href="/furusato-tax-five-national-treasure-castles-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                国宝五城＆名城天守を望む城下町宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                姫路・松本・犬山・彦根・松江。
              </p>
            </Link>
            
            <Link href="/furusato-tax-three-great-water-castles-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三大水城＆名城パノラマ宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                高松城・今治城・中津城。
              </p>
            </Link>
            
            <Link href="/furusato-tax-three-great-bridges-history-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三大名橋＆歴史街道宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                錦帯橋・眼鏡橋・日本橋。
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
