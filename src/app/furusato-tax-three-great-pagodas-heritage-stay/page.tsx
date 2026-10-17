import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: { canonical: "https://croud-travel.pages.dev/furusato-tax-three-great-pagodas-heritage-stay/" },
  title: '日本三大五重塔＆天を衝く木造美・国宝の塔と古都・門前名宿×ふるさと納税厳選ガイド法隆寺・東寺・羽黒山',
  description: '日本木造建築の最高峰！世界最古の木造建築群を擁する飛鳥の至宝「法隆寺五重塔」門前宿和空法隆寺、現存木造塔として日本一の高さ約55mを誇る密教のシンボル「東寺五重塔」リーガロイヤルホテル京都、杉並木の深山に溶け込む東北最古の国宝美「羽黒山五重塔」湯田川温泉九兵衛旅館。日本三大五重塔の美と歴史ロマンを楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
  keywords: '日本三大五重塔・国宝建築特集, 楽天ふるさと納税, 温泉宿, ふるさと納税 旅行, 高級旅館, ホテル予約, 2026年旅行',
  openGraph: {
    title: '日本三大五重塔＆天を衝く木造美・国宝の塔と古都・門前名宿×ふるさと納税厳選ガイド法隆寺・東寺・羽黒山',
    description: '日本木造建築の最高峰！世界最古の木造建築群を擁する飛鳥の至宝「法隆寺五重塔」門前宿和空法隆寺、現存木造塔として日本一の高さ約55mを誇る密教のシンボル「東寺五重塔」リーガロイヤルホテル京都、杉並木の深山に溶け込む東北最古の国宝美「羽黒山五重塔」湯田川温泉九兵衛旅館。日本三大五重塔の美と歴史ロマンを楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    type: 'article',
    url: 'https://croud-travel.pages.dev/furusato-tax-three-great-pagodas-heritage-stay',
    siteName: 'トラベルポータル',
  },
};

export default function Page() {
  const officialAffUrl = 'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F';

  const hotels = [
  {
    "hotelNo": 177058,
    "hotelName": "門前宿　和空法隆寺",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D177058",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D177058%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D177058",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D177058",
    "hotelKanaName": "もんぜんやど　わくう　ほうりゅうじ",
    "hotelSpecial": "◆日本唯一のハイクラス門前旅館◆名店神田川の懐石◆文化体験◆語り部と巡る法隆寺ツアー",
    "hotelMinCharge": 9300,
    "address1": "奈良県",
    "address2": "西方館：生駒郡班鳩町法隆寺1-5-32  東方館：生駒郡班鳩町法隆寺1-4-46",
    "telephoneNo": "55",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/177058/177058.jpg",
    "roomImageUrl": "",
    "reviewCount": 409,
    "reviewAverage": 4.58,
    "userReview": "法隆寺のすぐそばで立地最高、案内も充実法隆寺のすぐそばで立地最高でした。無料での案内も非常に良かったです。時期を変えまた法隆寺の案内を聞きたいです。部屋も綺麗でしたが家族4人で泊まるに。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F177058%2F177058.html",
    "access": "JR法隆寺駅よりお車にて約５分／徒歩にて約１８分",
    "label": "奈良県斑鳩町・奈良市ふるさと納税・世界最古の木造五重塔「法隆寺五重塔」奈良ホテル・和空ステイ",
    "themeTitle": "奈良県斑鳩町ふるさと納税：世界遺産・法隆寺のすぐ目の前・歴史に浸る上質な門前ステイ「門前宿 和空 法隆寺」",
    "themeDesc": "法隆寺参道に面し、東大寺や法隆寺の歴史を深く学べる語り部プログラムも好評な和の宿。奈良の木材を贅沢に使った温かみのある客室と、大和牛や奈良野菜を使った本格的な和会席で、悠久の飛鳥・斑鳩の夜を心静かに過ごせます。",
    "revAvg": "4.6",
    "minCharge": "9,300"
  },
  {
    "hotelNo": 108,
    "hotelName": "リーガロイヤルホテル京都",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D108",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D108%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D108",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D108",
    "hotelKanaName": "りーがろいやるほてる　きょうと",
    "hotelSpecial": "京都駅より徒歩約７分、名神京都南ICから車で約１０分",
    "hotelMinCharge": 5040,
    "address1": "京都府",
    "address2": "京都市下京区東堀川通り塩小路下ル松明町１番地",
    "telephoneNo": "075-341-1121",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/108/108.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/108/108_stwn.jpg",
    "reviewCount": 7171,
    "reviewAverage": 4.26,
    "userReview": "一流です。レストランすばらしい、接客もよかった。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F108%2F108.html",
    "access": "京都駅より徒歩約７分、名神京都南ICから車で１０分",
    "label": "京都府京都市ふるさと納税・日本一の高さを誇る木造塔「東寺五重塔」リーガロイヤルホテル京都",
    "themeTitle": "京都府京都市ふるさと納税：東寺五重塔を借景に望むラグジュアリーホテル「リーガロイヤルホテル京都」",
    "themeDesc": "京都駅から徒歩圏内に位置し、東寺への朝の散策に最適なプレミアムホテル。フレンチや京料理、鉄板焼きなど多彩な名レストランを備え、観光後のくつろぎを約束する上質な客室とおもてなしで古都の滞在を優雅に彩ります。",
    "revAvg": "4.3",
    "minCharge": "5,040"
  },
  {
    "hotelNo": 12536,
    "hotelName": "湯田川温泉　九兵衛旅館",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D12536",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D12536%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D12536",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D12536",
    "hotelKanaName": "ゆだがわおんせん　くへえりょかん",
    "hotelSpecial": "13室の小さな湯宿♪珠玉の手づくりできたて料理を朝夕個室で堪能♪温泉は源泉かけ流しで露天、無料貸切♪",
    "hotelMinCharge": 9020,
    "address1": "山形県",
    "address2": "鶴岡市湯田川乙19",
    "telephoneNo": "77",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/12536/12536.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/12536/12536_ky.jpg",
    "reviewCount": 375,
    "reviewAverage": 4.81,
    "userReview": "全てが素晴らしく、その場で次回の予約を入れた接客や料理、部屋の設備や清潔さ全て良かったので、チエックアウト時に次の予約を入れました。良さを維持しているスタッフの皆さんありがとうございました。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F12536%2F12536.html",
    "access": "ＪＲ羽越線鶴岡駅よりバス25分／庄内空港よりタクシー30分／山形自動車道鶴岡ＩＣより15分",
    "label": "山形県鶴岡市ふるさと納税・杉木立に佇む国宝の美「羽黒山五重塔」庄内名湯湯野浜温泉亀や",
    "themeTitle": "山形県鶴岡市ふるさと納税：羽黒山五重塔巡りの拠点・開湯千三百年を誇る名湯「湯田川温泉 九兵衛旅館」",
    "themeDesc": "出羽三山・羽黒山への参拝拠点として愛される、創業数百年の老舗木造名旅館。自家源泉の掛け流し温泉「山の湯」や金魚が泳ぐ大浴場、山形牛や庄内浜の朝獲れ地魚、名物の孟宗汁など極上の庄内会席が旅人を魅了します。",
    "revAvg": "4.8",
    "minCharge": "9,020"
  }
];


  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "日本三大五重塔＆天を衝く木造美・国宝の塔と古都・門前名宿×ふるさと納税完全ガイド【2026年最新】法隆寺・東寺・羽黒山",
    "description": "日本木造建築の最高峰！世界最古の木造建築群を擁する飛鳥の至宝「法隆寺五重塔」門前宿和空法隆寺、現存木造塔として日本一の高さ約55mを誇る密教のシンボル「東寺五重塔」リーガロイヤルホテル京都、杉並木の深山に溶け込む東北最古の国宝美「羽黒山五重塔」湯田川温泉九兵衛旅館。日本三大五重塔の美と歴史ロマンを楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。",
    "url": "https://croud-travel.pages.dev/furusato-tax-three-great-pagodas-heritage-stay/",
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
      { "@type": "ListItem", "position": 2, "name": "日本三大五重塔＆天を衝く木造美・国宝の塔と古都・門前名宿×ふるさと納税完全ガイド【2026年最新】法隆寺・東寺・羽黒山", "item": "https://croud-travel.pages.dev/furusato-tax-three-great-pagodas-heritage-stay/" }
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
          <span className="text-slate-700 font-medium">日本三大五重塔＆国宝木造美・古都門前宿×ふるさと納税ガイド</span>
        </div>
      </nav>

      {/* ヒーローヘッダー */}
      <header className="relative bg-gradient-to-br from-emerald-950 via-slate-900 to-teal-950 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-block bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-semibold px-3 py-1 rounded-full mb-2">
            日本三大五重塔・国宝建築特集
          </div>
          <h1 className="text-2xl md:text-4xl font-bold leading-tight tracking-tight">日本三大五重塔＆国宝木造美・古都門前宿×ふるさと納税ガイド</h1>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-3xl mx-auto pt-2">
            地震大国・日本において千数百年もの間倒れることなく立ち続け、心柱構造による免震の知恵と宮大工の神技を今に伝える「日本三大五重塔（国宝指定の最高峰）」――推古天皇の時代に建立され法隆寺西院伽藍の中心にそびえる世界最古の木造塔である奈良斑鳩の「法隆寺五重塔」、弘法大師空海が構想し徳川家光の再建によって約55mという日本一の木造高さを誇る古都の象徴・京都の「東寺五重塔」、そして樹齢数百年の爺スギが立ち並ぶ羽黒山の杜にひっそりと佇み杮葺き（こけらぶき）の素木造りが静謐な美を放つ山形庄内の「羽黒山五重塔」。凛とした歴史建築の美に心を洗われた後は、古都の精進・京懐石や庄内の山菜・日本海鮮魚を堪能する特別な旅を楽天ふるさと納税でお楽しみください。
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"「門前宿 和空法隆寺」へのアクセスや移動方法について","acceptedAnswer":{"@type":"Answer","text":"「門前宿 和空法隆寺」へは、JR法隆寺駅よりお車にて約５分／徒歩にて約１８分。詳しい送迎情報や道順は楽天トラベルの最新宿情報をご確認ください。"}},{"@type":"Question","name":"「門前宿 和空法隆寺」の魅力や予約時のポイントは？","acceptedAnswer":{"@type":"Answer","text":"「門前宿 和空法隆寺」は『◆日本唯一のハイクラス門前旅館◆名店神田川の懐石◆文化体験◆語り部と巡る法隆寺ツアー。』という点が旅行者から高く支持されています。連休や人気シーズンは予約が集中しやすいため、空室状況はお早めのチェックが安心です。"}},{"@type":"Question","name":"プラン選びや宿の比較で意識すべき点は？","acceptedAnswer":{"@type":"Answer","text":"「門前宿 和空法隆寺」と「リーガロイヤルホテル京都」はそれぞれ立地や施設設備に独自の魅力があります。湯巡り重視か、料理やお部屋の寛ぎ重視かなど、今回の旅の目的に合わせてお選びください。"}}]}) }}
      />
        
        {/* 特集の魅力セクション */}
        <section className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200/80">
          <h2 className="text-xl md:text-2xl font-bold text-slate-900 border-l-4 border-emerald-500 pl-3 mb-6">
            幾星霜の風雪を耐え抜いた木組みの奇跡。天を仰ぐ三重・五重の美しいシルエット
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>飛鳥の古代美・京都の壮大パノラマ・羽黒山の神秘の森！三者三様の国宝建築鑑賞</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                夕暮れにシルエットが浮かび上がる瞬間や、早朝の澄んだ空気の中での静寂参拝を体感。
              </p>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>大和牛と奈良茶粥、京都の旬の京懐石と湯葉、庄内豚と日本海寒鱈・山菜料理</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                歴史ある門前町と温泉郷が育んだ、洗練された郷土美食ディナーを満喫。
              </p>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>楽天ふるさと納税宿泊クーポンで門前宿や老舗温泉旅館をお得に予約</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                寺社巡礼や歴史散策の旅でも、寄付金額に応じた最大30%オフの即時割引クーポンでスマートにお得ステイ。
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
                        {h.hotelSpecial || '日本三大海食洞のエメラルドに輝く神秘、日本三大五重塔の国宝木造建築美、日本三大駅弁の旅情と極上グルメ、日本三大観音霊場の諸願成就と門前町風情を巡る特別な拠点。四季折々の美食と名湯でお寛ぎください。'}
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
            あわせて読みたい全国の神秘洞窟・名塔建築・美食駅弁特集
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            
            <Link href="/furusato-tax-three-great-buddhas-heritage-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三大仏＆歴史古都・門前町の名宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                奈良・鎌倉・高岡大仏。
              </p>
            </Link>
            
            <Link href="/furusato-tax-temple-shukubo-shojin-mindfulness-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                古刹宿坊＆本格精進料理ステイ×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                高野山・善光寺・京都寺院。
              </p>
            </Link>
            
            <Link href="/furusato-tax-tangible-cultural-property-architectural-ryokan-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                登録有形文化財・宮大工名建築旅館×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                修善寺新井旅館・渋温泉金具屋。
              </p>
            </Link>
            
          </div>
        </section>
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200/80 mb-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-xl md:text-2xl font-bold text-stone-900">
              【1泊2日】門前宿 和空法隆寺を拠点にするおすすめ滞在モデルコース
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-l-2 border-amber-500 pl-4 md:pl-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="bg-amber-600 text-white text-xs font-bold px-2.5 py-1 rounded">1日目</span>
                <h3 className="font-bold text-stone-900 text-base md:text-lg">到着〜チェックインと名湯巡り</h3>
              </div>
              <ul className="text-xs md:text-sm text-stone-600 space-y-2 leading-relaxed">
                <li>・<strong className="text-stone-800">14:00〜</strong> JR法隆寺駅よりお車にて約５分／徒歩にて約１８分で現地へ到着。</li>
                <li>・<strong className="text-stone-800">15:30〜</strong> 「門前宿 和空法隆寺」にチェックイン。◆日本唯一のハイクラス門前旅館◆名店神田川の懐石◆文化体験◆語り部と巡る法隆寺ツアーなどの宿の特徴に期待を高めつつ客室へ。</li>
                <li>・<strong className="text-stone-800">17:00〜</strong> 「門前宿 和空法隆寺」の湯処へ。◆日本唯一のハイクラス門前旅館◆名店神田川の懐石◆文化体験◆語り部と巡とともに、夕暮れの特別な寛ぎを満喫。</li>
                <li>・<strong className="text-stone-800">19:00〜</strong> 「門前宿 和空法隆寺」でいただく旬の夕食。地場産の味覚を取り入れたおもてなし料理を五感でじっくり味わう贅沢なひととき。</li>
              </ul>
            </div>
            <div className="border-l-2 border-teal-500 pl-4 md:pl-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="bg-teal-600 text-white text-xs font-bold px-2.5 py-1 rounded">2日目</span>
                <h3 className="font-bold text-stone-900 text-base md:text-lg">爽快な朝湯〜周辺散策と帰路へ</h3>
              </div>
              <ul className="text-xs md:text-sm text-stone-600 space-y-2 leading-relaxed">
                <li>・<strong className="text-stone-800">07:00〜</strong> 朝の光が差し込む「門前宿 和空法隆寺」の湯船へ。清々しい空気の中で手足を伸ばし、心地よい目覚めを迎える。</li>
                <li>・<strong className="text-stone-800">08:00〜</strong> 「門前宿 和空法隆寺」こだわりの朝食を堪能。炊きたてのごはんや身体に優しい料理で、一日のエネルギーをチャージ。</li>
                <li>・<strong className="text-stone-800">10:00〜</strong> チェックアウト後は近隣エリアを観光。本記事でご紹介した「リーガロイヤルホテル京都」の周辺スポットや名産店に立ち寄り、お土産を選んで帰路へ。</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-stone-50 rounded-2xl p-6 md:p-10 border border-stone-200/80 mb-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              よくある質問（FAQ）と門前宿 和空法隆寺の滞在ポイント
            </h2>
          </div>
          <div className="space-y-4">
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 「門前宿 和空法隆寺」へのアクセスや移動方法について</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 「門前宿 和空法隆寺」へは、JR法隆寺駅よりお車にて約５分／徒歩にて約１８分。詳しい送迎情報や道順は楽天トラベルの最新宿情報をご確認ください。
              </p>
            </details>
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 「門前宿 和空法隆寺」の魅力や予約時のポイントは？</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 「門前宿 和空法隆寺」は『◆日本唯一のハイクラス門前旅館◆名店神田川の懐石◆文化体験◆語り部と巡る法隆寺ツアー。』という点が旅行者から高く支持されています。連休や人気シーズンは予約が集中しやすいため、空室状況はお早めのチェックが安心です。
              </p>
            </details>
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. プラン選びや宿の比較で意識すべき点は？</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 「門前宿 和空法隆寺」と「リーガロイヤルホテル京都」はそれぞれ立地や施設設備に独自の魅力があります。湯巡り重視か、料理やお部屋の寛ぎ重視かなど、今回の旅の目的に合わせてお選びください。
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
            <a href="/winter-yamagata-tendo-onsen-lafrance-yamagata-beef-stay/" className="block p-4 rounded-xl bg-stone-50 hover:bg-amber-50 border border-stone-200 transition group">
              <span className="text-[10px] font-bold text-amber-700 block mb-1">関連特集ガイド</span>
              <span className="text-xs font-bold text-stone-800 group-hover:text-amber-800 line-clamp-2 leading-relaxed">天童温泉で過ごす冬の旅（11・12月）！A5山形牛すき焼き！名宿5選</span>
            </a>
            <a href="/yamagata-sakata-sankyo-warehouse-shonai-stay/" className="block p-4 rounded-xl bg-stone-50 hover:bg-amber-50 border border-stone-200 transition group">
              <span className="text-[10px] font-bold text-amber-700 block mb-1">関連特集ガイド</span>
              <span className="text-xs font-bold text-stone-800 group-hover:text-amber-800 line-clamp-2 leading-relaxed">山形・酒田＆山居倉庫・庄内砂丘：北前船豪商の港町・酒田ラーメン＆日本海夕陽宿 厳選ガイド</span>
            </a>
            <a href="/yamagata-zao-onsen-frost-stay/" className="block p-4 rounded-xl bg-stone-50 hover:bg-amber-50 border border-stone-200 transition group">
              <span className="text-[10px] font-bold text-amber-700 block mb-1">関連特集ガイド</span>
              <span className="text-xs font-bold text-stone-800 group-hover:text-amber-800 line-clamp-2 leading-relaxed">山形・蔵王温泉：樹氷スノーモンスター・強酸性硫黄泉＆山形牛極上宿 厳選ガイド</span>
            </a>
            <a href="/furusato-tax-sake-bar-unlimited-tasting-stay/" className="block p-4 rounded-xl bg-stone-50 hover:bg-amber-50 border border-stone-200 transition group">
              <span className="text-[10px] font-bold text-amber-700 block mb-1">関連特集ガイド</span>
              <span className="text-xs font-bold text-stone-800 group-hover:text-amber-800 line-clamp-2 leading-relaxed">地酒BAR＆日本酒利き酒し放題の名湯宿×ふるさと納税厳選ガイド越後湯沢・山形赤湯・京都伏見の酒蔵ステイ</span>
            </a>
          </div>
          <div className="pt-6 border-t border-stone-100">
            <h3 className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-3">人気の都道府県から宿を探す</h3>
            <div className="flex flex-wrap gap-2">
              <Link
                href="/prefectures/shimane"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                島根県の宿・温泉
              </Link>
              <Link
                href="/prefectures/yamanashi"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                山梨県の宿・温泉
              </Link>
              <Link
                href="/prefectures/nara"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                奈良県の宿・温泉
              </Link>
              <Link
                href="/prefectures/kumamoto"
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
              📊 日本三大五重塔＆天を衝く木造美・国宝の塔と古都・門前名宿×ふるさと納税厳選ガイド法隆寺・東寺・羽黒山：掲載宿スペック一覧比較表＆宿泊者クチコミ・アクセス詳細分析
            </h2>
            <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
              楽天トラベル公式APIより取得した「日本三大五重塔＆天を衝く木造美・国宝の塔と古都・門前名宿×ふるさと納税厳選ガイド法隆寺・東寺・羽黒山」掲載宿の所在地・最寄り駅・駐車場条件・クチコミ評価・参考最安料金を一覧で比較できます。公共交通機関（新幹線・在来線・送迎バス）利用の方もマイカー・レンタカー利用の方も、旅のスタイルに合った一軒をお選びください。
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
                <td className="p-3 font-bold text-stone-900">1. 門前宿　和空法隆寺</td>
                <td className="p-3 text-stone-600">奈良県西方館：生駒郡班鳩町法隆寺1-5-32  東方館：生駒郡班鳩町法隆寺1-4-46</td>
                <td className="p-3 text-stone-600">法隆寺駅周辺</td>
                <td className="p-3 text-stone-600">無料駐車場あり</td>
                <td className="p-3 font-bold text-amber-600">★4.58（416件）</td>
                <td className="p-3 font-bold text-rose-600">¥10,500〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F177058%2F177058.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">2. リーガロイヤルホテル京都</td>
                <td className="p-3 text-stone-600">京都府京都市下京区東堀川通り塩小路下ル松明町１番地</td>
                <td className="p-3 text-stone-600">京都駅周辺</td>
                <td className="p-3 text-stone-600">有り　先着117台（事前予約不可）</td>
                <td className="p-3 font-bold text-amber-600">★4.24（7248件）</td>
                <td className="p-3 font-bold text-rose-600">¥11,220〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F108%2F108.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">3. 湯田川温泉　九兵衛旅館</td>
                <td className="p-3 text-stone-600">山形県鶴岡市湯田川乙19</td>
                <td className="p-3 text-stone-600">鶴岡駅周辺</td>
                <td className="p-3 text-stone-600">有り　20台　無料</td>
                <td className="p-3 font-bold text-amber-600">★4.82（386件）</td>
                <td className="p-3 font-bold text-rose-600">¥9,020〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F12536%2F12536.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
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
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">門前宿　和空法隆寺</h3>
                  <span className="text-xs text-stone-400 ml-2">（もんぜんやど　わくう　ほうりゅうじ）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥10,500〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/177058/177058.jpg" alt="門前宿　和空法隆寺 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>◆日本唯一のハイクラス門前旅館◆名店神田川の懐石◆文化体験◆語り部と巡る法隆寺ツアー</p>
                  <p><strong>【所在地・アクセス】</strong>〒 奈良県西方館：生駒郡班鳩町法隆寺1-5-32  東方館：生駒郡班鳩町法隆寺1-4-46 ／ 最寄り駅：法隆寺 ／ 交通案内：JR法隆寺駅よりお車にて約５分／徒歩にて約１８分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>無料駐車場あり</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.67 ／ 立地 ★4.6 ／ 部屋 ★4.58 ／ 設備 ★4.49 ／ 風呂 ★4.24 ／ 食事 ★4.65</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「語り部さんツアーは絶対参加すべし!お出迎えのお茶とおしぼりに癒やされました。法隆寺駅から歩いてもそれほど遠く感じませんでした。お部屋も夕食も、3種おためしのお酒も、朝食も丁寧でやさしい味付け。どれ…　2026-10-09 16:40:15投稿 &lt;a href=&quot;https://img.travel.rakuten.co.jp/image/tr/api/hs/RmfmX/?f_hotel_no=177058&quot; class=&quot;3click&quot;」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #2</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">リーガロイヤルホテル京都</h3>
                  <span className="text-xs text-stone-400 ml-2">（りーがろいやるほてる　きょうと）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥11,220〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/108/108_stwn.jpg" alt="リーガロイヤルホテル京都 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>京都駅より徒歩約７分、名神京都南ICから車で約１０分</p>
                  <p><strong>【所在地・アクセス】</strong>〒 京都府京都市下京区東堀川通り塩小路下ル松明町１番地 ／ 最寄り駅：京都 ／ 交通案内：京都駅より徒歩約７分、名神京都南ICから車で１０分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　先着117台（事前予約不可）</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.31 ／ 立地 ★4.22 ／ 部屋 ★4.24 ／ 設備 ★4.16 ／ 風呂 ★4.08 ／ 食事 ★4.2</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「京都駅への送迎は便利だが部屋が遠い京都駅に近いだけでなく、駅までの無料送迎もあるのでとても便利でした。今回、宿泊した部屋がホテルの端だったため、メインエレベーターからかなり歩かないといけません…　2026-10-06 11:27:24投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #3</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">湯田川温泉　九兵衛旅館</h3>
                  <span className="text-xs text-stone-400 ml-2">（ゆだがわおんせん　くへえりょかん）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥9,020〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/12536/12536_ky.jpg" alt="湯田川温泉　九兵衛旅館 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>13室の小さな湯宿♪珠玉の手づくりできたて料理を朝夕個室で堪能♪温泉は源泉かけ流しで露天、無料貸切♪</p>
                  <p><strong>【所在地・アクセス】</strong>〒 山形県鶴岡市湯田川乙19 ／ 最寄り駅：鶴岡 ／ 交通案内：ＪＲ羽越線鶴岡駅よりバス25分／庄内空港よりタクシー30分／山形自動車道鶴岡ＩＣより15分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　20台　無料</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.82 ／ 立地 ★4.34 ／ 部屋 ★4.75 ／ 設備 ★4.64 ／ 風呂 ★4.71 ／ 食事 ★4.89</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「心のこもった食事に大満足夕食、朝食共に心のこもった品々に感激!大変おいしかった。夕食を8分目のプランにし満腹になったけれど次回は通常のプランで全てを食べたいと思った。季節を変えて食事を堪能しに行き…　2026-10-09 20:40:48投稿」
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-6 border-t border-stone-200">
            <h3 className="text-lg font-bold text-stone-900 border-l-4 border-teal-600 pl-3">
              🗺️ あわせて巡りたい！山形県の代表的な観光名所・歴史自然ガイド（Wikipedia公認画像・解説）
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              宿泊前後の1泊2日・2泊3日モデルコースに組み込みたい、山形県を代表する名所・絶景スポットの解説です。チェックイン前後の荷物預かりや駅周辺のレンタカー・周遊バスを活用すると効率よく巡ることができます。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #1</span>
                <h3 className="text-base font-bold text-stone-900">宝珠山 立石寺（山寺）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">松尾芭蕉が「閑さや岩にしみ入る蝉の声」と詠んだことで名高い名刹。1015段の石段を登りきった五大堂からは、山形の大自然と里山を一望する壮大な絶景が広がります。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              <div className="aspect-video relative overflow-hidden bg-stone-200"><img src="https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0b/Evening_twilight_in_Ginzan_Onsen_town_January_2022_A.jpg/1280px-Evening_twilight_in_Ginzan_Onsen_town_January_2022_A.jpg?utm_source=ja.wikipedia.org&amp;utm_campaign=api&amp;utm_content=thumbnail" alt="銀山温泉" className="w-full h-full object-cover" loading="lazy" /></div>
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #2</span>
                <h3 className="text-base font-bold text-stone-900">銀山温泉</h3>
                <p className="text-xs text-stone-600 leading-relaxed">銀山川の両岸に木造多層の温泉旅館が立ち並ぶ、大正ロマンあふれる温泉街。夕暮れ時にガス灯の温かな光が雪景色や大正建築を照らし出す風景は感動的です。 銀山温泉（ぎんざんおんせん）は、山形県尾花沢市（旧国出羽国、明治以降は羽前国）にある温泉である。 NHK連続テレビ小説『おしん』の舞台となったことで一躍脚光を浴び、全国的にその名を知られることになった。…</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              <div className="aspect-video relative overflow-hidden bg-stone-200"><img src="https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6d/Zaou_Gongen_Circumstancial_appearance_of_Mount_Yoshino.jpg/1280px-Zaou_Gongen_Circumstancial_appearance_of_Mount_Yoshino.jpg?utm_source=ja.wikipedia.org&amp;utm_campaign=api&amp;utm_content=thumbnail" alt="蔵王の樹氷" className="w-full h-full object-cover" loading="lazy" /></div>
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #3</span>
                <h3 className="text-base font-bold text-stone-900">蔵王の樹氷</h3>
                <p className="text-xs text-stone-600 leading-relaxed">冬の蔵王連峰で見られる自然の芸術「アイスモンスター」。アオモリトドマツに雪と氷が吹き付けられて巨大化した樹氷群を、ロープウェイやナイターライトアップで楽しめます。 蔵王、藏王（ざ-おう） 読みとしては、「蔵王」の本来の読み、旧仮名づかい「ざう-わう(ぞう-おう)」（音読み）が連声化したもの。 修験道の神である蔵王権現のこと。日本各地にみられる「蔵王」という名称は、後述の地名を含め、その大半が蔵王権現（奈良県吉野の発祥）に由来している（蔵王権現を参照）。 上述の蔵王権現を祭っている神社（蔵王権現社、御嶽神社（御岳神社）、…</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #4</span>
                <h3 className="text-base font-bold text-stone-900">羽黒山 三重塔</h3>
                <p className="text-xs text-stone-600 leading-relaxed">出羽三山神社への参道杉木立の中に佇む、東北最古の国宝木造塔。樹齢数百年の巨大な老杉に囲まれた静寂な空間は、強いパワースポットとして知られています。</p>
              </div>
            </div>
            </div>
          </div>

          <div className="bg-amber-50/70 rounded-2xl p-5 md:p-6 border border-amber-200 space-y-3 text-xs text-stone-700 leading-relaxed">
            <h3 className="text-sm md:text-base font-bold text-amber-950">
              💡 山形県エリアの宿泊予約・シーズン別ベストタイミングと節約ノウハウ
            </h3>
            <p>
              <strong>1. 早期予約と楽天トラベルクーポンの併用：</strong> 山形県の人気温泉宿・リゾートホテルは、週末や連休・紅葉・年末年始の60日〜30日前から一気に予約が埋まります。毎月5と0のつく日やスーパーSALE期間中に配布される宿クーポン・自治体クーポンを併用すると、通常より最大10〜20%お得に予約可能です。
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
    
      <HubRelatedPosts currentSlug="furusato-tax-three-great-pagodas-heritage-stay" />
</div>
  );
}
