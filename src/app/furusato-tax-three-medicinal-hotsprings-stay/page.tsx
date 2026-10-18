import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: { canonical: "https://croud-travel.pages.dev/furusato-tax-three-medicinal-hotsprings-stay/" },
  title: '日本三大薬湯＆万病平癒・極上の濃厚泉質湯治リトリート宿×ふるさと納税厳選ガイド草津・有馬・松之山',
  description: '日本屈指の薬効成分を誇る奇跡の湯！群馬「草津温泉」強酸性の殺菌力と湯畑一望の老舗ホテル一井、兵庫「有馬温泉」太古の海水と鉄分が濃縮された金泉の兵衛向陽閣、新潟十日町「松之山温泉」千二百万年前の化石海水が湧くひなの宿ちとせ。日本三大薬湯の濃厚温泉浴と滋養強壮の美食を楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
  keywords: '日本三大薬湯・万病平癒特集, 楽天ふるさと納税, 温泉宿, ふるさと納税 旅行, 高級旅館, ホテル予約, 2026年旅行',
  openGraph: {
    title: '日本三大薬湯＆万病平癒・極上の濃厚泉質湯治リトリート宿×ふるさと納税厳選ガイド草津・有馬・松之山',
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
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F39705%2F39705.html",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F39705%2F39705.html%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D39705",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D39705",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/39705/39705.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/39705.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/39705/39705_ro.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/39705/39705map.gif",
    "reviewCount": 3251,
    "reviewAverage": 4.62,
    "userReview": "バイキングとラウンジを満喫、大満足の旅バイキングが食べきれないくらい種類が多く、ライブのお寿司もとても美味しかったです。お部屋は湯畑の見えないら部屋でしたか、湯畑の見えてゆっくりできるラウンジがあ。",
    "hotelMinCharge": 18700,
    "address1": "群馬県",
    "address2": "吾妻郡草津町草津411",
    "telephoneNo": "11",
    "access": "ＪＲ吾妻線　長野原草津口駅より路線バス２５分",
    "parkingInformation": "有り　駐車は正午12時～翌正午12時まで　駐車料金：1律1泊1台あたり500円　バレーパーキング",
    "nearestStation": "長野原草津口",
    "hotelSpecial": "20室のみの湯畑眺望客室は希少！すき焼きやライブキッチンでのお寿司などを楽しめるビュッフェが話題",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F39705%2F39705.html",
    "label": "群馬県草津町ふるさと納税・日本三大名湯にして日本屈指の強酸性薬湯「草津温泉」湯畑目の前の老舗草津温泉ホテル一井",
    "themeTitle": "群馬県草津町ふるさと納税：湯畑の目の前に佇む江戸時代創業の老舗「草津温泉 ホテル一井」",
    "themeDesc": "草津のシンボル・湯畑の真ん前に建つ創業三百余年の老舗名宿。湯畑前白旗源泉と白根山万代鉱源泉の二つの貴重な源泉かけ流し大浴場で強酸性薬湯を堪能し、上州牛や群馬の山海の恵みを彩った和食会席を味わえます。",
    "revAvg": "4.6",
    "minCharge": "18,700"
  },
  {
    "hotelNo": 8636,
    "hotelName": "有馬温泉　兵衛向陽閣",
    "hotelKanaName": "ありまおんせん　ひょうえこうようかく",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F8636%2F8636.html",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F8636%2F8636.html%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D8636",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D8636",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/8636/8636.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/8636.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/8636/8636_roten.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/8636/8636map.gif",
    "reviewCount": 2592,
    "reviewAverage": 4.55,
    "userReview": "憧れのお宿で心温まるおもてなしと温泉を満喫憧れのお宿に泊まることができて、とても嬉しかったです。こちらの事情で、チェックインが遅くなり、夕飯が遅いスタートになってしまったのですが、荷物や車など様々。",
    "hotelMinCharge": 15950,
    "address1": "兵庫県",
    "address2": "神戸市北区有馬町1904",
    "telephoneNo": "078-904-0501",
    "access": "神戸より電車で約３０分／神戸電鉄有馬温泉駅・バス有馬温泉駅より徒歩約６分／阪神高速道路北神戸線有馬口出口より約５分",
    "parkingInformation": "有り：120台（無料・先着順）",
    "nearestStation": "有馬温泉",
    "hotelSpecial": "創業700年の老舗旅館。有馬温泉の高台に位置し、有馬最大級の悠々とした三大浴場でお寛ぎいただけます。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F8636%2F8636.html",
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
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F14679%2F14679.html",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F14679%2F14679.html%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D14679",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D14679",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/14679/14679.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/14679.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/14679/14679_war.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/14679/14679map.gif",
    "reviewCount": 368,
    "reviewAverage": 4.58,
    "userReview": "ゆっくり過ごせる最高の宿夜ご飯、朝ご飯共に最高でした。お風呂もとても気持ちよかったです。松之山温泉自体落ち着いた温泉街でとてもゆっくりできました。オススメの宿です。クチコミの詳細。",
    "hotelMinCharge": 20200,
    "address1": "新潟県",
    "address2": "十日町市松之山湯本49-1",
    "telephoneNo": "025-596-2525",
    "access": "ほくほく線まつだい駅より定時送迎あり（要予約）/ 関越道・塩沢石打ICより353号約50分/無料屋内駐車場（最大17台）",
    "parkingInformation": "地下駐車場を完備してございます。雨風の当らない場所でお預かりします。（１７台を超えると屋外の場合有）",
    "nearestStation": "まつだい",
    "hotelSpecial": "日本三大薬湯、地産料理、里山朝ごはん、靴を脱いだら畳敷きの館内。素朴さが贅沢な心にも身体にも優しい宿",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F14679%2F14679.html",
    "label": "新潟県十日町市ふるさと納税・化石海水が湧く日本三大薬湯の秘湯「松之山温泉」棚田の味覚とひなの宿ちとせ",
    "themeTitle": "新潟県十日町市ふるさと納税：千二百万年前の化石海水が湧く秘境の名宿「松之山温泉 ひなの宿 ちとせ」",
    "themeDesc": "日本三大薬湯・松之山温泉の中心に建つ風情豊かな木造宿。塩分とホウ酸が凝縮された源泉かけ流しの露天風呂「月見の湯」で温まり、名物「湯治豚」や里山山菜、魚沼棚田コシヒカリの絶品料理を堪能します。",
    "revAvg": "4.6",
    "minCharge": "20,200"
  }
];


  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "日本三大薬湯＆万病平癒・極上の濃厚泉質湯治リトリート宿×ふるさと納税完全ガイド【2026年最新】草津・有馬・松之山",
    "description": "日本屈指の薬効成分を誇る奇跡の湯！群馬「草津温泉」強酸性の殺菌力と湯畑一望の老舗ホテル一井、兵庫「有馬温泉」太古の海水と鉄分が濃縮された金泉の兵衛向陽閣、新潟十日町「松之山温泉」千二百万年前の化石海水が湧くひなの宿ちとせ。日本三大薬湯の濃厚温泉浴と滋養強壮の美食を楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。",
    "url": "https://croud-travel.pages.dev/furusato-tax-three-medicinal-hotsprings-stay/",
    "publisher": {
      "@type": "Organization",
      "name": "日本全国・旅宿クラウド",
      "logo": { "@type": "ImageObject", "url": "https://croud-travel.pages.dev/icon.png" }
    }
  };
  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "ホーム", "item": "https://croud-travel.pages.dev" },
      { "@type": "ListItem", "position": 2, "name": "日本三大薬湯＆万病平癒・極上の濃厚泉質湯治リトリート宿×ふるさと納税完全ガイド【2026年最新】草津・有馬・松之山", "item": "https://croud-travel.pages.dev/furusato-tax-three-medicinal-hotsprings-stay/" }
    ]
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
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
          <h1 className="text-2xl md:text-4xl font-bold leading-tight tracking-tight">日本三大薬湯＆極上湯治リトリート宿×ふるさと納税ガイド</h1>
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"「草津温泉 ホテル一井」へのアクセスや移動方法について","acceptedAnswer":{"@type":"Answer","text":"「草津温泉 ホテル一井」へは、ＪＲ吾妻線 長野原草津口駅より路線バス２５分。最寄りの長野原草津口駅からの経路案内も充実しています。"}},{"@type":"Question","name":"「草津温泉 ホテル一井」の魅力や予約時のポイントは？","acceptedAnswer":{"@type":"Answer","text":"「草津温泉 ホテル一井」は『20室のみの湯畑眺望客室は希少！すき焼きやライブキッチンでのお寿司などを楽しめるビュッフェ。』という点が旅行者から高く支持されています。連休や人気シーズンは予約が集中しやすいため、空室状況はお早めのチェックが安心です。"}},{"@type":"Question","name":"プラン選びや宿の比較で意識すべき点は？","acceptedAnswer":{"@type":"Answer","text":"「草津温泉 ホテル一井」と「有馬温泉 兵衛向陽閣」はそれぞれ立地や施設設備に独自の魅力があります。湯巡り重視か、料理やお部屋の寛ぎ重視かなど、今回の旅の目的に合わせてお選びください。"}}]}) }}
      />
        
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

                <div className="flex flex-col gap-5 p-6">
                  <div className="md:col-span-5 space-y-2">
                    <div className="relative aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden bg-slate-100 border border-slate-200">
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

                  <div className="w-full flex flex-col justify-between space-y-4">
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
            
            <Link href="/furusato-tax-three-famous-bridges-heritage-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三名泉＆天下の名湯巡り極上宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                有馬・草津・下呂。
              </p>
            </Link>
            
            <Link href="/furusato-tax-three-great-ancient-baths-heritage-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三古湯＆飛鳥時代からの歴史名湯宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                道後・有馬・白浜。
              </p>
            </Link>
            
            <Link href="/furusato-tax-three-great-hotsprings-luxury-villas-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三大美肌の湯＆とろとろ美容液温泉宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                嬉野・斐乃上・喜連川。
              </p>
            </Link>
            
          </div>
        </section>
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200/80 mb-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-xl md:text-2xl font-bold text-stone-900">
              【1泊2日】草津温泉 ホテル一井を拠点にするおすすめ滞在モデルコース
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-l-2 border-amber-500 pl-4 md:pl-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="bg-amber-600 text-white text-xs font-bold px-2.5 py-1 rounded">1日目</span>
                <h3 className="font-bold text-stone-900 text-base md:text-lg">到着〜チェックインと名湯巡り</h3>
              </div>
              <ul className="text-xs md:text-sm text-stone-600 space-y-2 leading-relaxed">
                <li>・<strong className="text-stone-800">14:00〜</strong> 長野原草津口駅よりアクセス。ＪＲ吾妻線 長野原草津口駅より路線バス２５分。</li>
                <li>・<strong className="text-stone-800">15:30〜</strong> 「草津温泉 ホテル一井」にチェックイン。20室のみの湯畑眺望客室は希少！すき焼きやライブキッチンでのお寿司などを楽しめるビュッフェが話題などの宿の特徴に期待を高めつつ客室へ。</li>
                <li>・<strong className="text-stone-800">17:00〜</strong> 「草津温泉 ホテル一井」の湯処へ。20室のみの湯畑眺望客室は希少！すき焼きやライブキッチンでのお寿司などとともに、夕暮れの特別な寛ぎを満喫。</li>
                <li>・<strong className="text-stone-800">19:00〜</strong> 「草津温泉 ホテル一井」でいただく旬の夕食。地場産の味覚を取り入れたおもてなし料理を五感でじっくり味わう贅沢なひととき。</li>
              </ul>
            </div>
            <div className="border-l-2 border-teal-500 pl-4 md:pl-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="bg-teal-600 text-white text-xs font-bold px-2.5 py-1 rounded">2日目</span>
                <h3 className="font-bold text-stone-900 text-base md:text-lg">爽快な朝湯〜周辺散策と帰路へ</h3>
              </div>
              <ul className="text-xs md:text-sm text-stone-600 space-y-2 leading-relaxed">
                <li>・<strong className="text-stone-800">07:00〜</strong> 朝の光が差し込む「草津温泉 ホテル一井」の湯船へ。清々しい空気の中で手足を伸ばし、心地よい目覚めを迎える。</li>
                <li>・<strong className="text-stone-800">08:00〜</strong> 「草津温泉 ホテル一井」こだわりの朝食を堪能。炊きたてのごはんや身体に優しい料理で、一日のエネルギーをチャージ。</li>
                <li>・<strong className="text-stone-800">10:00〜</strong> チェックアウト後は近隣エリアを観光。本記事でご紹介した「有馬温泉 兵衛向陽閣」の周辺スポットや名産店に立ち寄り、お土産を選んで帰路へ。</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-stone-50 rounded-2xl p-6 md:p-10 border border-stone-200/80 mb-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              よくある質問（FAQ）と草津温泉 ホテル一井の滞在ポイント
            </h2>
          </div>
          <div className="space-y-4">
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 「草津温泉 ホテル一井」へのアクセスや移動方法について</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 「草津温泉 ホテル一井」へは、ＪＲ吾妻線 長野原草津口駅より路線バス２５分。最寄りの長野原草津口駅からの経路案内も充実しています。
              </p>
            </details>
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 「草津温泉 ホテル一井」の魅力や予約時のポイントは？</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 「草津温泉 ホテル一井」は『20室のみの湯畑眺望客室は希少！すき焼きやライブキッチンでのお寿司などを楽しめるビュッフェ。』という点が旅行者から高く支持されています。連休や人気シーズンは予約が集中しやすいため、空室状況はお早めのチェックが安心です。
              </p>
            </details>
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. プラン選びや宿の比較で意識すべき点は？</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 「草津温泉 ホテル一井」と「有馬温泉 兵衛向陽閣」はそれぞれ立地や施設設備に独自の魅力があります。湯巡り重視か、料理やお部屋の寛ぎ重視かなど、今回の旅の目的に合わせてお選びください。
              </p>
            </details>
          </div>
        </section>

        {/* Internal Link Mesh: Related Features & Prefectures */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200/80">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-xl md:text-2xl font-bold text-stone-900">
              あわせて読みたい人気特集＆全国エリアガイド
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <a href="/gunma-shima-onsen-okushima-lake-stay/" className="block p-4 rounded-xl bg-stone-50 hover:bg-amber-50 border border-stone-200 transition group">
              <span className="text-[10px] font-bold text-amber-700 block mb-1">関連特集ガイド</span>
              <span className="text-xs font-bold text-stone-800 group-hover:text-amber-800 line-clamp-2 leading-relaxed">群馬・四万温泉＆奥四万湖：奇跡の四万ブルー・千と千尋レトロ木造湯宿 厳選ガイド</span>
            </a>
            <a href="/winter-gunma-kiryu-houtokuji-hatsumode-himokawa-udon-joshugyu-stay/" className="block p-4 rounded-xl bg-stone-50 hover:bg-amber-50 border border-stone-200 transition group">
              <span className="text-[10px] font-bold text-amber-700 block mb-1">関連特集ガイド</span>
              <span className="text-xs font-bold text-stone-800 group-hover:text-amber-800 line-clamp-2 leading-relaxed">11・12・1月群馬：桐生新町と床もみじの名刹「宝徳寺」新春初詣！名宿5選</span>
            </a>
            <a href="/winter-gunma-oigami-onsen-fukiware-joshugyu-soba-stay/" className="block p-4 rounded-xl bg-stone-50 hover:bg-amber-50 border border-stone-200 transition group">
              <span className="text-[10px] font-bold text-amber-700 block mb-1">関連特集ガイド</span>
              <span className="text-xs font-bold text-stone-800 group-hover:text-amber-800 line-clamp-2 leading-relaxed">老神温泉で過ごす冬の旅（11・12月）！赤城山北麓！名宿5選</span>
            </a>
            <a href="/furusato-tax-minakami-tanigawa-autumn-stay/" className="block p-4 rounded-xl bg-stone-50 hover:bg-amber-50 border border-stone-200 transition group">
              <span className="text-[10px] font-bold text-amber-700 block mb-1">関連特集ガイド</span>
              <span className="text-xs font-bold text-stone-800 group-hover:text-amber-800 line-clamp-2 leading-relaxed">谷川岳の紅葉ロープウェイとみなかみ十八湯！利根川源流の渓谷美と上州牛・舞茸を味わう秋の群馬旅</span>
            </a>
          </div>
          <div className="pt-6 border-t border-stone-100">
            <h3 className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-3">人気の都道府県から宿を探す</h3>
            <div className="flex flex-wrap gap-2">
              <Link
                href="/prefectures/kochi/"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                高知県の宿・温泉
              </Link>
              <Link
                href="/prefectures/kagawa/"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                香川県の宿・温泉
              </Link>
              <Link
                href="/prefectures/hiroshima/"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                広島県の宿・温泉
              </Link>
              <Link
                href="/prefectures/kumamoto/"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                熊本県の宿・温泉
              </Link>
            </div>
          </div>
        </section>

      
        {/* Enriched Rakuten API & Wikipedia Tourist Guide */}
        <section data-enriched-rakuten-wiki="true" className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200 space-y-8 my-10">
          <div className="space-y-2 border-b border-stone-200 pb-4">
            <span className="text-[11px] font-extrabold text-amber-700 bg-amber-50 border border-amber-200 px-3 py-0.5 rounded-full uppercase">
              RAKUTEN TRAVEL API &amp; LOCAL GUIDE
            </span>
            <h2 className="text-xl md:text-2xl font-bold text-stone-900">
              📊 日本三大薬湯＆万病平癒・極上の濃厚泉質湯治リトリート宿×ふるさと納税厳選ガイド草津・有馬・松之山：掲載宿スペック一覧比較表＆宿泊者クチコミ・アクセス詳細分析
            </h2>
            <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
              楽天トラベル公式APIより取得した「日本三大薬湯＆万病平癒・極上の濃厚泉質湯治リトリート宿×ふるさと納税厳選ガイド草津・有馬・松之山」掲載宿の所在地・最寄り駅・駐車場条件・クチコミ評価・参考最安料金を一覧で比較できます。公共交通機関（新幹線・在来線・送迎バス）利用の方もマイカー・レンタカー利用の方も、旅のスタイルに合った一軒をお選びください。
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse bg-white rounded-xl overflow-hidden border border-stone-200">
              <thead>
                <tr className="bg-stone-900 text-white font-bold">
                  <th className="p-3">宿名</th>
                  <th className="p-3">所在地</th>
                  <th className="p-3">最寄り駅・交通</th>
                  <th className="p-3">駐車場情報</th>
                  <th className="p-3">楽天評価</th>
                  <th className="p-3">最安目安</th>
                  <th className="p-3">予約・詳細</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200">
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">1. 草津温泉　ホテル一井</td>
                <td className="p-3 text-stone-600">群馬県吾妻郡草津町草津411</td>
                <td className="p-3 text-stone-600">長野原草津口駅周辺</td>
                <td className="p-3 text-stone-600">有り　駐車は正午12時〜翌正午12時まで　駐車料金：1律1泊1台あたり500円　バレーパーキング</td>
                <td className="p-3 font-bold text-amber-600">★4.63（3292件）</td>
                <td className="p-3 font-bold text-rose-600">¥19,800〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F39705%2F39705.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">2. 有馬温泉　兵衛向陽閣</td>
                <td className="p-3 text-stone-600">兵庫県神戸市北区有馬町1904</td>
                <td className="p-3 text-stone-600">有馬温泉駅周辺</td>
                <td className="p-3 text-stone-600">有り：120台（無料・先着順）</td>
                <td className="p-3 font-bold text-amber-600">★4.57（2640件）</td>
                <td className="p-3 font-bold text-rose-600">¥17,600〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F8636%2F8636.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">3. 松之山温泉　ひなの宿　ちとせ</td>
                <td className="p-3 text-stone-600">新潟県十日町市松之山湯本49-1</td>
                <td className="p-3 text-stone-600">まつだい駅周辺</td>
                <td className="p-3 text-stone-600">地下駐車場を完備してございます。雨風の当らない場所でお預かりします。（１７台を超えると屋外の場合有）</td>
                <td className="p-3 font-bold text-amber-600">★4.58（368件）</td>
                <td className="p-3 font-bold text-rose-600">¥20,200〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F14679%2F14679.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              </tbody>
            </table>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold text-stone-900 border-l-4 border-amber-600 pl-3">
              🏨 各宿の宿泊者リアルクチコミ・客室イメージ・項目別評価データ
            </h3>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #1</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">草津温泉　ホテル一井</h3>
                  <span className="text-xs text-stone-400 ml-2">（くさつおんせん　いちい）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥19,800〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/39705/39705_ro.jpg" alt="草津温泉　ホテル一井 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>20室のみの湯畑眺望客室は希少！すき焼きやライブキッチンでのお寿司などを楽しめるビュッフェが話題</p>
                  <p><strong>【所在地・アクセス】</strong>〒 群馬県吾妻郡草津町草津411 ／ 最寄り駅：長野原草津口 ／ 交通案内：ＪＲ吾妻線　長野原草津口駅より路線バス２５分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　駐車は正午12時〜翌正午12時まで　駐車料金：1律1泊1台あたり500円　バレーパーキング</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.62 ／ 立地 ★4.69 ／ 部屋 ★4.41 ／ 設備 ★4.39 ／ 風呂 ★4.69 ／ 食事 ★4.73</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「料理がとてもおいしくて大満足料理がおいしかったクチコミの詳細はこちらから　https://review.travel.rakuten.co.jp/hotel/voice/39705?revie…　2026-10-10 09:41:07投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #2</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">有馬温泉　兵衛向陽閣</h3>
                  <span className="text-xs text-stone-400 ml-2">（ありまおんせん　ひょうえこうようかく）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥17,600〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/8636/8636_roten.jpg" alt="有馬温泉　兵衛向陽閣 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>創業700年の老舗旅館。有馬温泉の高台に位置し、有馬最大級の悠々とした三大浴場でお寛ぎいただけます。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 兵庫県神戸市北区有馬町1904 ／ 最寄り駅：有馬温泉 ／ 交通案内：神戸より電車で約３０分／神戸電鉄有馬温泉駅・バス有馬温泉駅より徒歩約６分／阪神高速道路北神戸線有馬口出口より約５分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り：120台（無料・先着順）</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.62 ／ 立地 ★4.48 ／ 部屋 ★4.49 ／ 設備 ★4.44 ／ 風呂 ★4.72 ／ 食事 ★4.64</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「両親と有馬温泉、食事と温泉に大満足「有馬温泉に行きたい」という高齢の両親を連れて利用しました。有馬温泉でも有名なお宿ということで選びましたが、どのスタッフの方もとても丁寧にご対応くださり、落ち着い…　2026-10-09 15:39:11投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #3</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">松之山温泉　ひなの宿　ちとせ</h3>
                  <span className="text-xs text-stone-400 ml-2">（まつのやまおんせん　ひなのやど　ちとせ）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥20,200〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/14679/14679_war.jpg" alt="松之山温泉　ひなの宿　ちとせ 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>日本三大薬湯、地産料理、里山朝ごはん、靴を脱いだら畳敷きの館内。素朴さが贅沢な心にも身体にも優しい宿</p>
                  <p><strong>【所在地・アクセス】</strong>〒 新潟県十日町市松之山湯本49-1 ／ 最寄り駅：まつだい ／ 交通案内：ほくほく線まつだい駅より定時送迎あり（要予約）/ 関越道・塩沢石打ICより353号約50分/無料屋内駐車場（最大17台）</p>
                  <p><strong>【駐車場・マイカー利用】</strong>地下駐車場を完備してございます。雨風の当らない場所でお預かりします。（１７台を超えると屋外の場合有）</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「ゆっくり過ごせる最高の宿夜ご飯、朝ご飯共に最高でした。お風呂もとても気持ちよかったです。 松之山温泉自体落ち着いた温泉街でとてもゆっくりできました。オススメの宿です。クチコミの詳細…　2026-09-04 20:39:55投稿」
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-6 border-t border-stone-200">
            <h3 className="text-lg font-bold text-stone-900 border-l-4 border-teal-600 pl-3">
              🗺️ あわせて巡りたい！群馬県の代表的な観光名所・歴史自然ガイド（Wikipedia公認画像・解説）
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              宿泊前後の1泊2日・2泊3日モデルコースに組み込みたい、群馬県を代表する名所・絶景スポットの解説です。チェックイン前後の荷物預かりや駅周辺のレンタカー・周遊バスを活用すると効率よく巡ることができます。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              <div className="aspect-video relative overflow-hidden bg-stone-200"><img src="https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6b/Yubatake_%28Kusatsu_Onsen%29.jpg/1280px-Yubatake_%28Kusatsu_Onsen%29.jpg?utm_source=ja.wikipedia.org&amp;utm_campaign=api&amp;utm_content=thumbnail" alt="草津温泉（湯畑）" className="w-full h-full object-cover" loading="lazy" /></div>
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #1</span>
                <h3 className="text-base font-bold text-stone-900">草津温泉（湯畑）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">日本三名泉の一つで自然湧出量日本一を誇る温泉街のシンボル。毎分4,000リットルの源泉が湯滝となって湧き出し、湯もみ体験や夜のライトアップも人気です。 草津温泉（くさつおんせん）は、群馬県吾妻郡草津町草津界隈（江戸時代における上野国吾妻郡草津村界隈、幕藩体制下の上州御料草津村界隈〈初期は沼田藩知行〉）に所在する温泉である。草津白根山東麓に位置する。 毎分3万2300リットル以上の自然湧出量は日本一。室町時代には万里集九が有馬温泉や下呂温泉とともに「三名泉」とし、江戸時代には林羅山もこれらの三温泉を「天下の三…</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              <div className="aspect-video relative overflow-hidden bg-stone-200"><img src="https://thumb.wikimedia.org/wikipedia/commons/thumb/8/82/Ikaho_Onsen_03.jpg/1280px-Ikaho_Onsen_03.jpg?utm_source=ja.wikipedia.org&amp;utm_campaign=api&amp;utm_content=thumbnail" alt="伊香保温泉（石段街）" className="w-full h-full object-cover" loading="lazy" /></div>
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #2</span>
                <h3 className="text-base font-bold text-stone-900">伊香保温泉（石段街）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">365段の石段が続く情緒溢れる温泉街。石段の両脇には射的場や土産物店、足湯が立ち並び、温泉まんじゅう発祥の地としても知られています。 伊香保温泉（いかほおんせん）は、群馬県渋川市伊香保町にある温泉。草津温泉と並んで県を代表する名湯で、上毛かるたでは「伊香保温泉 日本の名湯」と歌われている。 「伊香保温泉」として地域団体商標に登録されている。…</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #3</span>
                <h3 className="text-base font-bold text-stone-900">富岡製糸場</h3>
                <p className="text-xs text-stone-600 leading-relaxed">明治政府が設立した日本初の本格的な製糸工場であり、世界文化遺産。木骨レンガ造りの巨大な繰糸所や蚕室が良好に保存されており、日本の近代化の足跡を辿れます。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #4</span>
                <h3 className="text-base font-bold text-stone-900">吹割の滝（ふきわれのたき）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">「東洋のナイアガラ」と称されるダイナミックな滝。巨大な岩盤が割れ目の中に河川の水が吸い込まれるように流れ落ちる迫力ある景観が魅力です。</p>
              </div>
            </div>
            </div>
          </div>

          <div className="bg-amber-50/70 rounded-2xl p-5 md:p-6 border border-amber-200 space-y-3 text-xs text-stone-700 leading-relaxed">
            <h3 className="text-sm md:text-base font-bold text-amber-950">
              💡 群馬県エリアの宿泊予約・シーズン別ベストタイミングと節約ノウハウ
            </h3>
            <p>
              <strong>1. 早期予約と楽天トラベルクーポンの併用：</strong> 群馬県の人気温泉宿・リゾートホテルは、週末や連休・紅葉・年末年始の60日〜30日前から一気に予約が埋まります。毎月5と0のつく日やスーパーSALE期間中に配布される宿クーポン・自治体クーポンを併用すると、通常より最大10〜20%お得に予約可能です。
            </p>
            <p>
              <strong>2. 夕食・朝食プランと部屋タイプの選び方：</strong> 地元産の旬魚介やブランド牛会席を味わうなら「夕朝食付きプラン」、周辺の屋台・老舗居酒屋・ご当地グルメを食べ歩くなら「朝食付き」または「素泊まり＋天然温泉大浴場付きホテル」を選ぶと予算と満足度のバランスが最適化されます。
            </p>
          </div>
        </section>

      </main>

      {/* フッター */}
      <footer className="bg-slate-950 text-slate-400 py-8 px-4 text-center text-xs border-t border-slate-800">
        <p>© 2026 トラベルポータル All Rights Reserved. 掲載情報は最新の楽天トラベル公式APIに基づきます。</p>
      </footer>
    
      <HubRelatedPosts currentSlug="furusato-tax-three-medicinal-hotsprings-stay" />
</div>
  );
}
