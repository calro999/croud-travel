import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '日本三大砂丘＆雄大な風紋美と夕日オーシャンビュー宿×ふるさと納税完全ガイド【2026年最新】鳥取砂丘・中田島砂丘・吹上浜',
  description: '海と風が描く奇跡の造形美！鳥取「鳥取砂丘」日本海の夕日と自家源泉の鳥取温泉観水庭こぜにや、静岡浜松「中田島砂丘」遠州灘の風紋と天然温泉スーパーホテル浜松出世の湯、鹿児島薩摩半島「吹上浜」47km続く日本最長の白砂青松と砂むし温泉指宿白水館。日本三大砂丘の絶景と温泉を楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
  keywords: '日本三大砂丘・風紋絶景特集, 楽天ふるさと納税, 温泉宿, ふるさと納税 旅行, 高級旅館, ホテル予約, 2026年旅行',
  openGraph: {
    title: '日本三大砂丘＆雄大な風紋美と夕日オーシャンビュー宿×ふるさと納税完全ガイド【2026年最新】鳥取砂丘・中田島砂丘・吹上浜',
    description: '海と風が描く奇跡の造形美！鳥取「鳥取砂丘」日本海の夕日と自家源泉の鳥取温泉観水庭こぜにや、静岡浜松「中田島砂丘」遠州灘の風紋と天然温泉スーパーホテル浜松出世の湯、鹿児島薩摩半島「吹上浜」47km続く日本最長の白砂青松と砂むし温泉指宿白水館。日本三大砂丘の絶景と温泉を楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    type: 'article',
    url: 'https://croud-travel.pages.dev/furusato-tax-three-great-sand-dunes-stay',
    siteName: 'トラベルポータル',
  },
};

export default function Page() {
  const officialAffUrl = 'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F';

  const hotels = [
  {
    "hotelNo": 14072,
    "hotelName": "鳥取温泉　観水庭こぜにや",
    "hotelKanaName": "とっとりおんせん　かんすいていこぜにや",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D14072",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D14072%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D14072",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D14072",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/14072/14072.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/14072.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/14072/14072_room.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/14072/14072map.gif",
    "reviewCount": 1461,
    "reviewAverage": 4.76,
    "userReview": "住宅街の異空間、親切なスタッフと温泉ビジネス素泊まりで利用しました。鳥取市の住宅街に急に現れる異空間の温泉。お部屋は普通でやや年季を感じましたが、スタッフの方はとても親切で気持ちよく止まれました。…　 ",
    "hotelMinCharge": 6300,
    "address1": "鳥取県",
    "address2": "鳥取市永楽温泉町651",
    "telephoneNo": "0857-23-3311",
    "access": "鳥取駅より徒歩10分・無料送迎バス有 / 中国道佐用JCT経由鳥取ＩＣより車８分　鳥取砂丘へ車２０分　コンビニ徒歩2分",
    "parkingInformation": "無料　　平面駐車場につき、容易に自由に何度でも出し入れでき、車両制限はありません。",
    "nearestStation": "鳥取",
    "hotelSpecial": "鳥取市街地にありながら天然温泉かけ流しの湯を満喫できる閑静な佇まいの小宿。◆WIFI全室対応◆",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D14072",
    "featureKey": "dune_tottori",
    "featureLabel": "鳥取県鳥取市ふるさと納税・風と光が織りなす風紋と日本海の夕日「鳥取砂丘」源泉かけ流し鳥取温泉観水庭こぜにや",
    "themeTitle": "鳥取県鳥取市ふるさと納税：鳥取砂丘の観光拠点・二つの源泉かけ流しを誇る老舗湯宿「鳥取温泉 観水庭こぜにや」",
    "themeDesc": "鳥取砂丘から車で約15分、鳥取市街地に湧く天然温泉の静かな隠れ宿。完全源泉かけ流しの貸切風呂や庭園露天風呂で砂丘歩きの疲れを芯から癒やし、日本海直送の白イカや冬の味覚の王様・松葉ガニ、鳥取和牛を贅沢に味わえます。",
    "revAvg": "4.8",
    "minCharge": "6,300"
  },
  {
    "hotelNo": 167675,
    "hotelName": "スーパーホテル浜松　天然温泉「浜松出世の湯」",
    "hotelKanaName": "すーぱーほてるはままつ　てんねんおんせん　はままつしゅっせのゆ",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D167675",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D167675%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D167675",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D167675",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/167675/167675.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/167675.jpg",
    "roomImageUrl": "",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/167675/167675map.gif",
    "reviewCount": 879,
    "reviewAverage": 4.22,
    "userReview": "焼き立てパンと天然温泉を満喫、ツインがないのは残念無料の朝食はありがたいです、特に、焼き立てのベーカリーはとても美味しく頂きました。そして、天然温泉があるのは最高の贅沢ですね。ただ、ツインの部…　 ",
    "hotelMinCharge": 2800,
    "address1": "静岡県",
    "address2": "浜松市中央区西伊場町58-7",
    "telephoneNo": "053-451-9000",
    "access": "浜松駅からタクシーで約10分、バスで約15分！浜松西インターよりお車で約20分！　",
    "parkingInformation": "有り 無料※駐車場利用不可プランにご注意 ※駐車場は全長5m以下の普通車のみ トラック・バス駐車不可",
    "nearestStation": "浜松",
    "hotelSpecial": "【無料駐車場＆無料健康朝食＆男女別天然温泉】※駐車場利用不可プランにご注意。駐車は普通自動車のみ可能",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D167675",
    "featureKey": "dune_nakatajima",
    "featureLabel": "静岡県浜松市ふるさと納税・遠州灘の強い海風が描く風紋美「中田島砂丘」地上45階オークラアクトシティホテル浜松",
    "themeTitle": "静岡県浜松市ふるさと納税：中田島砂丘の風紋巡り拠点・自家源泉の天然温泉「スーパーホテル浜松 出世の湯」",
    "themeDesc": "遠州灘の海岸線に広がる中田島砂丘へのアクセス抜群な快適ホテル。敷地内に湧出する弱アルカリ性の天然温泉「出世の湯」で旅の疲れをリフレッシュ。夜は浜松市街で本場の浜名湖うなぎや名物浜松餃子を味わうグルメ旅の拠点に最適です。",
    "revAvg": "4.2",
    "minCharge": "2,800"
  },
  {
    "hotelNo": 12529,
    "hotelName": "鹿児島　砂むし温泉　指宿白水館",
    "hotelKanaName": "かごしま　すなむしおんせん　いぶすきはくすいかん",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D12529",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D12529%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D12529",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D12529",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/12529/12529.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/12529.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/12529/12529_war.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/12529/12529map.gif",
    "reviewCount": 2442,
    "reviewAverage": 4.49,
    "userReview": "・こんなにバイキング料理が充実してるのは初めて!1つ1つ美味しいし会場の席案内や 料理も スーツのスタッフさんがちゃんとみていて 食事の時間が楽しく過ごせる様に 気を利かせてらっしゃいました。…　 ",
    "hotelMinCharge": 14630,
    "address1": "鹿児島県",
    "address2": "指宿市東方12126-12",
    "telephoneNo": "0993-22-3131",
    "access": "ＪＲ指宿駅下車、タクシー７分、無料送迎バスあり。 空港直行バス（JR指宿駅下車）",
    "parkingInformation": "有り　２００台　無料　予約不要",
    "nearestStation": "指宿",
    "hotelSpecial": "地元食材の郷土料理と指宿温泉美肌の湯、砂むし風呂と岩盤浴で贅沢にデトックス！指宿駅まで無料送迎あり♪",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D12529",
    "featureKey": "dune_fukiagehama",
    "featureLabel": "鹿児島県南さつま市・日置市ふるさと納税・白砂青松が47km続く日本最長の砂丘「吹上浜」薩摩半島の湯と美食ステイ",
    "themeTitle": "鹿児島県日置市・指宿市ふるさと納税：日本最長の砂丘・吹上浜と名物砂むし温泉の最高峰「指宿白水館」",
    "themeDesc": "47km続く吹上浜のドライブを満喫した後に訪れたい、錦江湾に面した元禄風呂と名物砂むし温泉を擁する名門旅館。砂丘と海がもたらす大地の温もりを砂むし温泉で全身に浴び、極上の鹿児島県産黒毛和牛や黒豚しゃぶしゃぶ、薩摩の地焼酎に酔いしれます。",
    "revAvg": "4.5",
    "minCharge": "14,630"
  }
];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* パンくずリスト */}
      <nav className="bg-white border-b border-slate-200 py-3 px-4 text-xs text-slate-500">
        <div className="max-w-5xl mx-auto flex items-center space-x-2">
          <Link href="/" className="hover:text-emerald-600 transition">ホーム</Link>
          <span>&gt;</span>
          <span className="text-slate-700 font-medium">日本三大砂丘＆絶景オーシャンビュー温泉宿×ふるさと納税ガイド</span>
        </div>
      </nav>

      {/* ヒーローヘッダー */}
      <header className="relative bg-gradient-to-br from-emerald-950 via-slate-900 to-teal-950 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-block bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-semibold px-3 py-1 rounded-full mb-2">
            日本三大砂丘・風紋絶景特集
          </div>
          <h1 className="text-2xl md:text-4xl font-bold leading-tight tracking-tight">
            日本三大砂丘＆絶景オーシャンビュー温泉宿×ふるさと納税ガイド
          </h1>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-3xl mx-auto pt-2">
            海風と大地が何万年もの歳月をかけて織り成した「日本三大砂丘」――山陰の海岸線に広がり、日本海の碧と砂のコントラストが息をのむ美しさを誇る鳥取の「鳥取砂丘」、遠州灘の強風「遠州のからっ風」が美しい幾何学的な風紋を描きウミガメの産卵地としても知られる静岡浜松の「中田島砂丘」、そして薩摩半島の西岸を47kmにわたって白砂青松が続く日本最長の砂丘・鹿児島の「吹上浜」。砂丘の稜線に立ち、海へと沈む夕日と刻々と表情を変える風紋を眺める時間は、日常を完全に忘れさせてくれる贅沢なひとときです。砂丘散策を楽しんだ後は、名湯温泉で砂と旅の疲れを洗い流し、鳥取松葉ガニ・浜松うなぎ・薩摩黒豚と海の幸を堪能する特別な旅を楽天ふるさと納税でお楽しみください。
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
            風が描く一期一会の風紋と、地平線に沈む黄金の夕日。雄大な砂の王国へ
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>大地と風のアート「風紋」と日本海・太平洋・東シナ海の絶景サンセット</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                早朝の足跡のない清らかな風紋や、夕暮れ時に黄金色に染まる壮大な砂丘パノラマを体感。
              </p>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>鳥取松葉ガニ＆白イカ、浜名湖うなぎ＆遠州灘鮮魚、薩摩黒豚＆本格芋焼酎</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                砂丘の背後に広がる豊かな海と大地が育んだ、全国屈指のブランド美味を心ゆくまで堪能。
              </p>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>楽天ふるさと納税宿泊クーポンで憧れの温泉旅館・ホテルをお得に予約</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                絶景ドライブや家族旅行でも、寄付金額に応じた最大30%オフの即時割引クーポンでスマートにお得ステイ。
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
                        {h.hotelSpecial || '日本三大砂丘の風紋絶景、木造建築の奇跡を伝える日本三大奇橋、豪快な川下り舟が走る日本三大急流、お濠と夜空を染める日本三大夜桜を巡る極上の拠点。四季折々の美食と名湯でお寛ぎください。'}
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
            あわせて読みたい日本の絶景・名橋・急流特集
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            
            <Link href="/furusato-tax-three-great-coastal-sceneries-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三大白砂青松＆海岸絶景パノラマ宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                天橋立・三保松原・気比の松原。
              </p>
            </Link>
            
            <Link href="/furusato-tax-three-great-beautiful-ports-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三大美港＆夜景オーシャンビュー宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                清水港・長崎港・神戸港。
              </p>
            </Link>
            
            <Link href="/furusato-tax-three-major-strange-sceneries-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三大奇景＆奇岩絶壁パノラマ宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                妙義山・寒霞渓・耶馬渓。
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
