import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '日本三大伝統的町並み＆小江戸・白壁土蔵の重伝建と歴史情緒宿×ふるさと納税完全ガイド【2026年最新】倉敷・川越・竹原',
  description: '往時の繁栄と美しい商家建築が息づく重要伝統的建造物群保存地区！岡山「倉敷美観地区」白壁土蔵となまこ壁・倉敷川沿いの老舗料理旅館鶴形、埼玉「小江戸川越」黒漆喰の蔵造り商家と時の鐘・川越プリンスホテル、広島「安芸の小京都・竹原」製塩と酒造りの重伝建・グリーンスカイホテル竹原。格子戸の路地散策と地酒、名物料理を楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
  keywords: '日本三大町並み・重伝建特集, 楽天ふるさと納税, 温泉宿, ふるさと納税 旅行, 高級旅館, ホテル予約, 2026年旅行',
  openGraph: {
    title: '日本三大伝統的町並み＆小江戸・白壁土蔵の重伝建と歴史情緒宿×ふるさと納税完全ガイド【2026年最新】倉敷・川越・竹原',
    description: '往時の繁栄と美しい商家建築が息づく重要伝統的建造物群保存地区！岡山「倉敷美観地区」白壁土蔵となまこ壁・倉敷川沿いの老舗料理旅館鶴形、埼玉「小江戸川越」黒漆喰の蔵造り商家と時の鐘・川越プリンスホテル、広島「安芸の小京都・竹原」製塩と酒造りの重伝建・グリーンスカイホテル竹原。格子戸の路地散策と地酒、名物料理を楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    type: 'article',
    url: 'https://croud-travel.pages.dev/furusato-tax-three-great-traditional-townscapes-stay',
    siteName: 'トラベルポータル',
  },
};

export default function Page() {
  const officialAffUrl = 'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F';

  const hotels = [
  {
    "hotelNo": 108991,
    "hotelName": "料理旅館　鶴形",
    "hotelKanaName": "りょうりりょかん　つるがた",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D108991",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D108991%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D108991",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D108991",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/108991/108991.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/108991.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/108991/108991_wa1.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/108991/108991map.gif",
    "reviewCount": 162,
    "reviewAverage": 4.9,
    "userReview": "全ての料理が美味しく大満足料理が全て美味しかったです他の画像やクチコミの詳細はこちらから　https://review.travel.rakuten.co.jp/hotel/voice/108…",
    "hotelMinCharge": 23050,
    "address1": "岡山県",
    "address2": "倉敷市中央1-3-15",
    "telephoneNo": "086-424-1635",
    "access": "倉敷駅から徒歩で約15分／お車で約5分",
    "parkingInformation": "有※倉敷国際ホテル駐車場（徒歩約5分）をご利用いただきます。",
    "nearestStation": "倉敷",
    "hotelSpecial": "1744年創建の商家に逗留し瀬戸内の新鮮な魚、旬の食材を使った料理と倉敷の風情をお楽しみ下さい",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D108991",
    "label": "岡山県倉敷市ふるさと納税・白壁土蔵と柳並木が織りなす天領の風情「倉敷美観地区」倉敷アイビースクエア",
    "themeTitle": "岡山県倉敷市ふるさと納税：倉敷美観地区の心臓部に佇む江戸中期築・登録有形文化財の宿「料理旅館 鶴形」",
    "themeDesc": "倉敷美観地区の倉敷川畔に位置し、徳川第八代将軍吉宗の時代（約280年前）に建てられた商家をそのまま活かした格式ある料理旅館。樹齢数百年の松を望む客室で寛ぎ、瀬戸内海の旬の地魚や岡山の旬食材を熟練の板前が仕立てる本格会席を堪能できます。",
    "revAvg": "4.9",
    "minCharge": "23,050"
  },
  {
    "hotelNo": 29539,
    "hotelName": "川越プリンスホテル",
    "hotelKanaName": "かわごえ　ぷりんすほてる",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D29539",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D29539%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D29539",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D29539",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/29539/29539.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/29539.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/29539/29539_d.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/29539/29539map.gif",
    "reviewCount": 1791,
    "reviewAverage": 4.15,
    "userReview": "部屋に入ってホッと落ち着くホテル部屋グレードアップして頂き初めての川越散策、快適に過ごせました。部屋へ入るなり広かったせいか落ち着く感じでした。角部屋で騒音もありませんでした。また川越散策する際は…",
    "hotelMinCharge": 5143,
    "address1": "埼玉県",
    "address2": "川越市新富町1-22",
    "telephoneNo": "049-227-1111",
    "access": "西武新宿線「本川越駅」直結、JR線・東武東上線「川越駅」徒歩10分、東武東上線「川越市駅」徒歩5分",
    "parkingInformation": "有　３０６台予約不要　宿泊者はご1泊１台1000円※入庫から２４時間・途中入出庫可能",
    "nearestStation": "本川越",
    "hotelSpecial": "小江戸川越まで散策に便利　西武新宿線本川越駅直結、JR・東武東上線川越駅から徒歩10分",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D29539",
    "label": "埼玉県川越市ふるさと納税・小江戸の蔵造り商家と時の鐘「川越の町並み」川越プリンスホテル",
    "themeTitle": "埼玉県川越市ふるさと納税：小江戸川越の蔵造り通り散策に直結・本川越駅直結の快適ホテル「川越プリンスホテル」",
    "themeDesc": "西武新宿線本川越駅に直結し、時の鐘や菓子屋横丁など小江戸の町並み散策の拠点に最適なシティホテル。ゆったりとした客室と充実したアメニティを備え、埼玉のブランド牛や伝統の川越うなぎ、旬食材を味わえる多彩なレストランが揃っています。",
    "revAvg": "4.2",
    "minCharge": "5,143"
  },
  {
    "hotelNo": 147937,
    "hotelName": "グリーンスカイホテル竹原",
    "hotelKanaName": "ぐりーんすかいほてるたけはら",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D147937",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D147937%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D147937",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D147937",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/147937/147937.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/147937.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/147937/147937_kan1.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/147937/147937map.gif",
    "reviewCount": 576,
    "reviewAverage": 4.37,
    "userReview": "観光地や飲食店が近く、買い物も便利観光名所、飲食店、スーパー、コンビニが近くて便利。クチコミの詳細はこちらから　https://review.travel.rakuten.co.jp/hote…",
    "hotelMinCharge": 6750,
    "address1": "広島県",
    "address2": "竹原市中央4-2-18",
    "telephoneNo": "0846-22-1355",
    "access": "ＪＲ竹原駅すぐそば。　広島空港から竹原駅方面行き乗合バスで竹原駅前まで約25分、駅前バス停すぐそば。",
    "parkingInformation": "８０台駐車可能。宿泊者無料。　※場内でイベント開催時は駐車不可の場合有り。",
    "nearestStation": "竹原",
    "hotelSpecial": "安芸の小京都竹原のスタイリッシュなホテル。ビジネス・観光に便利な立地で広島空港からも２５分",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D147937",
    "label": "広島県竹原市ふるさと納税・安芸の小京都・製塩と酒造りで栄えた重要伝統的建造物群「竹原町並み保存地区」グリーンスカイホテル竹原",
    "themeTitle": "広島県竹原市ふるさと納税：竹原町並み保存地区へ徒歩数分・大久野島（うさぎ島）観光にも至便「グリーンスカイホテル竹原」",
    "themeDesc": "JR竹原駅前に位置し、安芸の小京都・竹原町並み保存地区へ徒歩でアクセスできる便利なホテル。瀬戸内海の穏やかな気候に包まれながら、広島県産の峠下牛（たけはら牛）や瀬戸内鮮魚を取り入れた和洋創作ディナーを楽しめます。",
    "revAvg": "4.4",
    "minCharge": "6,750"
  }
];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* パンくずリスト */}
      <nav className="bg-white border-b border-slate-200 py-3 px-4 text-xs text-slate-500">
        <div className="max-w-5xl mx-auto flex items-center space-x-2">
          <Link href="/" className="hover:text-emerald-600 transition">ホーム</Link>
          <span>&gt;</span>
          <span className="text-slate-700 font-medium">日本三大伝統的町並み＆白壁土蔵・小江戸の歴史情緒宿×ふるさと納税ガイド</span>
        </div>
      </nav>

      {/* ヒーローヘッダー */}
      <header className="relative bg-gradient-to-br from-emerald-950 via-slate-900 to-teal-950 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-block bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-semibold px-3 py-1 rounded-full mb-2">
            日本三大町並み・重伝建特集
          </div>
          <h1 className="text-2xl md:text-4xl font-bold leading-tight tracking-tight">
            日本三大伝統的町並み＆白壁土蔵・小江戸の歴史情緒宿×ふるさと納税ガイド
          </h1>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-3xl mx-auto pt-2">
            江戸から明治・大正にかけて商業や海運・産業の中心として栄え、今なお息づく暮らしの美が国の「重要伝統的建造物群保存地区」として大切に守られている「日本の三大伝統的町並み」――白壁の土蔵となまこ壁、川沿いの柳並木が詩情を誘う岡山の「倉敷美観地区」、大火に耐えるため耐火建築として建てられた黒漆喰の蔵造り商家が連なる埼玉の「小江戸・川越」、そして瀬戸内海の製塩と酒造りで財を成した豪商たちの重厚な邸宅が立ち並ぶ広島の「安芸の小京都・竹原」。夕暮れ時に行灯や街灯が灯る静かな町並みを歩き、歴史を感じる宿で土地の美味を味わう情緒豊かな旅を楽天ふるさと納税でお楽しみください。
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
            なまこ壁と黒漆喰、出桁造り。日本の美しい建築遺産が残る町を歩く
          </h2>
          <p className="text-slate-600 leading-relaxed text-sm md:text-base">
            江戸から明治・大正にかけて商業や海運・産業の中心として栄え、今なお息づく暮らしの美が国の「重要伝統的建造物群保存地区」として大切に守られている「日本の三大伝統的町並み」――白壁の土蔵となまこ壁、川沿いの柳並木が詩情を誘う岡山の「倉敷美観地区」、大火に耐えるため耐火建築として建てられた黒漆喰の蔵造り商家が連なる埼玉の「小江戸・川越」、そして瀬戸内海の製塩と酒造りで財を成した豪商たちの重厚な邸宅が立ち並ぶ広島の「安芸の小京都・竹原」。夕暮れ時に行灯や街灯が灯る静かな町並みを歩き、歴史を感じる宿で土地の美味を味わう情緒豊かな旅を楽天ふるさと納税でお楽しみください。
          </p>
        </section>

        {/* メリット3選 */}
        <section className="space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
              ふるさと納税×日本三大町並み重伝建 3つのメリット
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
                  日中の混雑を避けて早朝や夜のライトアップ散策！人影の少ない町並みを独占できる贅沢
                </h3>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                  川面に映る白壁土蔵の夜景や、静けさに包まれる朝の路地散歩を心ゆくまで満喫。
                </p>
              </div>
            </div>
            <div key="1" className="bg-white rounded-xl p-6 shadow-sm border border-slate-200/80 flex flex-col justify-between hover:border-emerald-300 transition duration-200">
              <div className="space-y-3">
                <span className="inline-block w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 font-bold text-center leading-8 text-sm">
                  02
                </span>
                <h3 className="font-bold text-base text-slate-900 leading-snug">
                  瀬戸内の鰆やタコ料理、川越名物うなぎ蒲焼やさつまいも会席、広島の牡蠣と峠下牛
                </h3>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                  歴史ある町並みの料亭やホテルで、伝統の味を受け継ぐ職人こだわりの郷土ディナーを堪能。
                </p>
              </div>
            </div>
            <div key="2" className="bg-white rounded-xl p-6 shadow-sm border border-slate-200/80 flex flex-col justify-between hover:border-emerald-300 transition duration-200">
              <div className="space-y-3">
                <span className="inline-block w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 font-bold text-center leading-8 text-sm">
                  03
                </span>
                <h3 className="font-bold text-base text-slate-900 leading-snug">
                  楽天ふるさと納税宿泊クーポンで登録有形文化財の宿やシティホテルをお得に予約
                </h3>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                  歴史建築散策や女子旅、夫婦旅行でも、寄付金額に応じた最大30%オフの即時割引クーポンでスマートにお得ステイ。
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
            あわせて読みたい日本の名所・伝統文化と絶景宿特集
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            
            <Link href="/furusato-tax-three-great-post-towns-nakasendo-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三大宿場町＆木曽路の出桁造り・街道名宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                妻籠宿・馬籠宿・奈良井宿。
              </p>
            </Link>
            <Link href="/furusato-tax-three-great-ancient-capitals-heritage-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三大古都＆千年千載の雅と武家の誇り名宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                京都・奈良・鎌倉。
              </p>
            </Link>
            <Link href="/furusato-tax-preservation-districts-heritage-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                重要伝統的建造物群保存地区＆歴史遺産名宿ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                白川郷・内子・角館。
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
