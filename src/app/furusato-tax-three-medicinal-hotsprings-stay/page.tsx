import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '日本三大薬湯＆万病平癒・極上の濃厚泉質湯治リトリート宿×ふるさと納税完全ガイド【2026年最新】草津・有馬・松之山',
  description: '日本屈指の薬効成分を誇る奇跡の湯！群馬「草津温泉」強酸性の殺菌力と湯畑一望の老舗ホテル一井、兵庫「有馬温泉」太古の海水と鉄分が濃縮された金泉の兵衛向陽閣、新潟十日町「松之山温泉」千二百万年前の化石海水が湧くひなの宿ちとせ。日本三大薬湯の濃厚温泉浴と滋養強壮の美食を楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
  keywords: '日本三大薬湯・万病平癒特集, 楽天ふるさと納税, 温泉宿, ふるさと納税 旅行, 高級旅館, ホテル予約, 2026年旅行',
  openGraph: {
    title: '日本三大薬湯＆万病平癒・極上の濃厚泉質湯治リトリート宿×ふるさと納税完全ガイド【2026年最新】草津・有馬・松之山',
    description: '日本屈指の薬効成分を誇る奇跡の湯！群馬「草津温泉」強酸性の殺菌力と湯畑一望の老舗ホテル一井、兵庫「有馬温泉」太古の海水と鉄分が濃縮された金泉の兵衛向陽閣、新潟十日町「松之山温泉」千二百万年前の化石海水が湧くひなの宿ちとせ。日本三大薬湯の濃厚温泉浴と滋養強壮の美食を楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    type: 'article',
    url: 'https://croud-travel.pages.dev/furusato-tax-three-medicinal-hotsprings-stay',
    siteName: 'トラベルポータル',
  },
};

export default function Page() {
  const officialAffUrl = 'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F';

  const hotels = [
  {
    "hotelNo": 39705,
    "hotelName": "草津温泉　ホテル一井",
    "hotelKanaName": "くさつおんせん　いちい",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D39705",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D39705%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D39705",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D39705",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/39705/39705.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/39705.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/39705/39705_ro.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/39705/39705map.gif",
    "reviewCount": 3251,
    "reviewAverage": 4.62,
    "userReview": "バイキングとラウンジを満喫、大満足の旅バイキングが食べきれないくらい種類が多く、ライブのお寿司もとても美味しかったです。お部屋は湯畑の見えないら部屋でしたか、湯畑の見えてゆっくりできるラウンジがあ…　2026-09-05 07:03:38投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=39705\" class=\"3click\">つづきはこちら</a>",
    "hotelMinCharge": 18700,
    "address1": "群馬県",
    "address2": "吾妻郡草津町草津411",
    "telephoneNo": "0279-88-0011",
    "access": "ＪＲ吾妻線　長野原草津口駅より路線バス２５分",
    "parkingInformation": "有り　駐車は正午12時～翌正午12時まで　駐車料金：1律1泊1台あたり500円　バレーパーキング",
    "nearestStation": "長野原草津口",
    "hotelSpecial": "20室のみの湯畑眺望客室は希少！すき焼きやライブキッチンでのお寿司などを楽しめるビュッフェが話題",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D39705",
    "label": "群馬県草津町ふるさと納税・日本三大名湯にして日本屈指の強酸性薬湯「草津温泉」湯畑目の前の老舗草津温泉ホテル一井",
    "themeTitle": "群馬県草津町ふるさと納税：湯畑の目の前に佇む江戸時代創業の老舗「草津温泉 ホテル一井」",
    "themeDesc": "草津のシンボル・湯畑の真ん前に建つ創業三百余年の老舗名宿。湯畑前白旗源泉と白根山万代鉱源泉の二つの貴重な源泉かけ流し大浴場で強酸性薬湯を堪能し、上州牛や群馬の山海の恵みを彩った和食会席を味わえます。",
    "revAvg": "4.6",
    "minCharge": "18,700"
  },
  {
    "hotelNo": 8636,
    "hotelName": "有馬温泉　兵衛向陽閣",
    "hotelKanaName": "ありまおんせん　ひょうえこう��うかく",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D8636",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D8636%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D8636",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D8636",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/8636/8636.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/8636.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/8636/8636_roten.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/8636/8636map.gif",
    "reviewCount": 2592,
    "reviewAverage": 4.55,
    "userReview": "憧れのお宿で心温まるおもてなしと温泉を満喫憧れのお宿に泊まることができて、とても嬉しかったです。こちらの事情で、チェックインが遅くなり、夕飯が遅いスタートになってしまったのですが、荷物や車など様々…　2026-09-05 08:23:30投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=8636\" class=\"3click\">つづきはこちら</a>",
    "hotelMinCharge": 15950,
    "address1": "兵庫県",
    "address2": "神戸市北区有馬町1904",
    "telephoneNo": "078-904-0501",
    "access": "神戸より電車で約３０分／神戸電鉄有馬温泉駅・バス有馬温泉駅より徒歩約６分／阪神高速道路北神戸線有馬口出口より約５分",
    "parkingInformation": "有り：120台（無料・先着順）",
    "nearestStation": "有馬温泉",
    "hotelSpecial": "創業700年の老舗旅館。有馬温泉の高台に位置し、有馬最大級の悠々とした三大浴場でお寛ぎいただけます。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D8636",
    "label": "兵庫県神戸市有馬温泉ふるさと納税・日本最古の含鉄ナトリウム塩化物泉「有馬温泉 金泉」創業700年の名門兵衛向陽閣",
    "themeTitle": "兵庫県神戸市・有馬温泉ふるさと納税：太閤秀吉公も愛した黄金の薬湯「有馬温泉 兵衛向陽閣」",
    "themeDesc": "創業700年、有馬温泉を代表する名門旅館。三つの趣異なる大浴場で濃厚な赤褐色名湯「金泉」を巡り、神戸牛や瀬戸内海の旬魚をふんだんに取り入れた本格会席料理と伝統のおもてなしに心癒やされます。",
    "revAvg": "4.5",
    "minCharge": "15,950"
  },
  {
    "hotelNo": 14679,
    "hotelName": "松之山温泉　ひなの宿　ちとせ",
    "hotelKanaName": "まつのやまおんせん　ひなのやど　ちとせ",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D14679",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D14679%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D14679",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D14679",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/14679/14679.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/14679.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/14679/14679_war.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/14679/14679map.gif",
    "reviewCount": 368,
    "reviewAverage": 4.58,
    "userReview": "ゆっくり過ごせる最高の宿夜ご飯、朝ご飯共に最高でした。お風呂もとても気持ちよかったです。 松之山温泉自体落ち着いた温泉街でとてもゆっくりできました。オススメの宿です。クチコミの詳細…　2026-09-04 20:39:55投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=14679\" class=\"3click\">つづきはこちら</a>",
    "hotelMinCharge": 20200,
    "address1": "新潟県",
    "address2": "十日町市松之山湯本49-1",
    "telephoneNo": "025-596-2525",
    "access": "ほくほく線まつだい駅より定時送迎あり（要予約）/ 関越道・塩沢石打ICより353号約50分/無料屋内駐車場（最大17台）",
    "parkingInformation": "地下駐車場を完備してございます。雨風の当らない場所でお預かりします。（１７台を超えると屋外の場合有）",
    "nearestStation": "まつだい",
    "hotelSpecial": "日本三大薬湯、地産料理、里山朝ごはん、靴を脱いだら畳敷きの館内。素朴さが贅沢な心にも身体にも優しい宿",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D14679",
    "label": "新潟県十日町市ふるさと納税・化石海水が湧く日本三大薬湯の秘湯「松之山温泉」棚田の味覚とひなの宿ちとせ",
    "themeTitle": "新潟県十日町市ふるさと納税：千二百万年前の化石海水が湧く秘境の名宿「松之山温泉 ひなの宿 ちとせ」",
    "themeDesc": "日本三大薬湯・松之山温泉の中心に建つ風情豊かな木造宿。塩分とホウ酸が凝縮された源泉かけ流しの露天風呂「月見の湯」で温まり、名物「湯治豚」や里山山菜、魚沼棚田コシヒカリの絶品料理を堪能します。",
    "revAvg": "4.6",
    "minCharge": "20,200"
  }
];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* パンくずリスト */}
      <nav className="bg-white border-b border-slate-200 py-3 px-4 text-xs text-slate-500">
        <div className="max-w-5xl mx-auto flex items-center space-x-2">
          <Link href="/" className="hover:text-emerald-600 transition">ホーム</Link>
          <span>&gt;</span>
          <span className="text-slate-700 font-medium">日本三大薬湯＆極上湯治リトリート宿×ふるさと納税ガイド</span>
        </div>
      </nav>

      {/* ヒーローヘッダー */}
      <header className="relative bg-gradient-to-br from-emerald-950 via-slate-900 to-teal-950 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-block bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-semibold px-3 py-1 rounded-full mb-2">
            日本三大薬湯・万病平癒特集
          </div>
          <h1 className="text-2xl md:text-4xl font-bold leading-tight tracking-tight">
            日本三大薬湯＆極上湯治リトリート宿×ふるさと納税ガイド
          </h1>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-3xl mx-auto pt-2">
            温泉大国・日本に数千ある温泉地の中でも、群を抜く有効成分の濃さと卓越した効能によって古くから「日本三大薬湯」と称えられてきた三名湯――pH2前後の強酸性で驚異の殺菌力を誇り湯畑からもうもうと湯煙が立ち上る群馬の「草津温泉」、活断層の深部から地熱と圧力によって湧き出し海水の約1.5〜2倍の塩分と鉄分を含む茶褐色の名湯・兵庫の「有馬温泉（金泉）」、そして約1200万年前の化石海水が閉じ込められて湧き出しホウ酸含有量が日本一と称される豪雪地帯の秘湯・新潟十日町の「松之山温泉」。ひとたび湯船に身を沈めれば、濃厚な泉質が肌を包み込み、湯上がり後も温もりが何時間も持続します。歴史ある名門旅館や木造の風情ある湯宿に泊まり、滋味あふれる郷土料理とともに心身を根本からリセットする極上の休日を楽天ふるさと納税でお楽しみください。
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
            身体の芯から温まり、細胞が蘇る。古来より多くの人々を癒やし続けてきた三大薬湯へ
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>源泉かけ流しの濃厚薬湯を堪能！何度でも入りたくなる至高の泉質と湯守の技</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                成分の濃い本物の源泉にじっくり浸かり、冷え性改善や美肌、疲労回復を実感。
              </p>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>上州牛すき焼き、神戸牛しゃぶしゃぶ、越後雪室熟成豚と棚田米コシヒカリ</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                湯治の後は、各温泉地が誇る最高峰の滋養強壮グルメと地酒を心ゆくまで満喫。
              </p>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>楽天ふるさと納税宿泊クーポンで憧れの老舗湯宿や高級温泉ホテルをお得に利用</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                全国屈指の人気温泉地でも、寄付金額に応じた最大30%オフの即時割引クーポンで実質2,000円負担の快適滞在。
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
                        {h.hotelSpecial || '日本三大柱状節理の奇岩絶壁、陶器まつりの工芸美、日本三大薬湯の湯治、大名庭園の四季散策を満喫する極上の滞在。四季折々の美食と名湯でお寛ぎください。'}
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
            あわせて読みたい日本の名湯・工芸・庭園特集
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            
            <Link href="/furusato-tax-three-famous-hotsprings-heritage-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三名泉＆天下の名湯巡り極上宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                有馬・草津・下呂。
              </p>
            </Link>
            
            <Link href="/furusato-tax-three-ancient-hotsprings-heritage-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三古湯＆飛鳥時代からの歴史名湯宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                道後・有馬・白浜。
              </p>
            </Link>
            
            <Link href="/furusato-tax-three-beautifying-hotsprings-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三大美肌の湯＆とろとろ美容液温泉宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                嬉野・斐乃上・喜連川。
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
