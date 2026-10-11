import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: { canonical: "https://croud-travel.pages.dev/furusato-tax-three-great-ancient-shrines-sacred-stay/" },
  title: '日本三大古社＆神話と悠久の祈り・神域に寄り添う聖地宿×ふるさと納税厳選ガイド伊勢神宮・出雲大社・大神神社',
  description: '日本人の心のふるさとを巡る神聖なる古社ステイ！三重伊勢「伊勢神宮」内宮まで徒歩圏内・早朝参拝の静寂とおかげ横丁いにしえの宿伊久、島根出雲「出雲大社」縁結びの聖地・正門前に佇む純和風老舗竹野屋旅館、奈良桜井「三輪山・大神神社」本殿を持たず山をご神体とする日本最古の神社と多武峰観光ホテル。清らかな神域散策と名物グルメを楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
  keywords: '日本三大古社・神話と聖地特集, 楽天ふるさと納税, 温泉宿, ふるさと納税 旅行, 高級旅館, ホテル予約, 2026年旅行',
  openGraph: {
    title: '日本三大古社＆神話と悠久の祈り・神域に寄り添う聖地宿×ふるさと納税厳選ガイド伊勢神宮・出雲大社・大神神社',
    description: '日本人の心のふるさとを巡る神聖なる古社ステイ！三重伊勢「伊勢神宮」内宮まで徒歩圏内・早朝参拝の静寂とおかげ横丁いにしえの宿伊久、島根出雲「出雲大社」縁結びの聖地・正門前に佇む純和風老舗竹野屋旅館、奈良桜井「三輪山・大神神社」本殿を持たず山をご神体とする日本最古の神社と多武峰観光ホテル。清らかな神域散策と名物グルメを楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    type: 'article',
    url: 'https://croud-travel.pages.dev/furusato-tax-three-great-ancient-shrines-sacred-stay',
    siteName: 'トラベルポータル',
  },
};

export default function Page() {
  const officialAffUrl = 'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F';

  const hotels = [
  {
    "hotelNo": 142809,
    "hotelName": "いにしえの宿　伊久（共立リゾート）（リニューアルオープン）",
    "hotelKanaName": "いにしえのやど　いきゅう（きょうりつりぞーと）（２０２６ねん４がつ１にちりにゅーあるおーぷん）",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D142809",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D142809%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D142809",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D142809",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/142809/142809.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/142809.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/142809/142809_kya.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/142809/142809map.gif",
    "reviewCount": 1265,
    "reviewAverage": 4.63,
    "userReview": "温かい接客と美味しい食事に大満足!接客、サービスがとても素晴らしく、温かい心遣いがとても良かったです。朔日参りと朔日餅を今回初めて経験しようと思い、フロントで色々教えて頂き、当日は無事に全て経。",
    "hotelMinCharge": 25960,
    "address1": "三重県",
    "address2": "伊勢市宇治館町岩井田山679-2",
    "telephoneNo": "77",
    "access": "近鉄五十鈴川駅より送迎あり※詳しくは【よくある質問】Q.伊久までの送迎はありますか？をご覧ください。",
    "parkingInformation": "無料駐車場　24台",
    "nearestStation": "宇治山田",
    "hotelSpecial": "内宮までゆっくり歩いて15分の全室露天風呂付のお宿",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F142809%2F142809.html",
    "label": "三重県伊勢市ふるさと納税・内宮へ歩いて早朝参拝が叶う神宮至近の名宿「いにしえの宿 伊久」",
    "themeTitle": "三重県伊勢市ふるさと納税：伊勢神宮内宮へ徒歩約15分・全客室露天風呂付の極上宿「いにしえの宿 伊久」",
    "themeDesc": "五十鈴川のせせらぎを聞く静かな立地に佇み、伊勢神宮内宮の早朝参拝に最高のロケーションを誇る高級旅館。全室に天然温泉客室露天風呂を備え、伊勢海老や松阪牛など三重が誇る至高の山海の幸を盛り込んだ会席料理を楽しめます。",
    "revAvg": "4.6",
    "minCharge": "25,960"
  },
  {
    "hotelNo": 137361,
    "hotelName": "竹野屋旅館",
    "hotelKanaName": "たけのやりょかん",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D137361",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D137361%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D137361",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D137361",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/137361/137361.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/137361.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/137361/137361_ru.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/137361/137361map.gif",
    "reviewCount": 521,
    "reviewAverage": 4.66,
    "userReview": "30年ぶりの再訪、リノベで綺麗になり食事も満足30年前に家族で宿泊し懐かしくなってまた宿泊しました。リノベーションされてとても綺麗になっていました。出雲大社や稲佐の浜にも近く朝ご飯前に参拝できて良。",
    "hotelMinCharge": 18600,
    "address1": "島根県",
    "address2": "出雲市大社町杵築南857",
    "telephoneNo": "31",
    "access": "JR出雲市駅よりお車・バスにて約20分",
    "parkingInformation": "有 20台(無料 / 予約不要)",
    "nearestStation": "出雲市",
    "hotelSpecial": "神々の国への玄関宿 出雲大社正門前徒歩1分",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F137361%2F137361.html",
    "label": "島根県出雲市ふるさと納税・出雲大社正門前に佇む老舗名旅館「竹野屋旅館」",
    "themeTitle": "島根県出雲市ふるさと納税：出雲大社正門前・創業百四十余年の格式と気品を受け継ぐ名門「竹野屋旅館」",
    "themeDesc": "出雲大社の正門（勢溜）の目の前に位置し、大正・昭和の面影を残す純和風の木造美が旅人を迎える老舗旅館。早朝の清らかな境内参拝に最適で、出雲の旬の魚介や島根和牛、出雲名物の割子そばを取り入れた伝統の会席料理を堪能できます。",
    "revAvg": "4.7",
    "minCharge": "18,600"
  },
  {
    "hotelNo": 14788,
    "hotelName": "多武峰観光ホテル",
    "hotelKanaName": "とうのみねかんこうほてる",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D14788",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D14788%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D14788",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D14788",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/14788/14788.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/14788.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/14788/14788_war.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/14788/14788map.gif",
    "reviewCount": 128,
    "reviewAverage": 4.37,
    "userReview": "窓からの景色とヒグラシの音色に癒やされる窓から見える外の風景と夕方のヒグラシの鳴き声が非常に良い旅情をかきたてている。ホテルの方達も皆優しく居心地の良いホテル。お風呂もかなり広くリラックスできた。",
    "hotelMinCharge": 8700,
    "address1": "奈良県",
    "address2": "桜井市多武峰432",
    "telephoneNo": "11",
    "access": "近鉄JR桜井駅より車で15分（事前予約で送迎応相談）、またはバスで25分→徒歩3分　天理IC、美原JCTより車約45分",
    "parkingInformation": "乗用車は原則無料。一部有料駐車場は当館管轄外ですのでご注意ください。",
    "nearestStation": "桜井（奈良）",
    "hotelSpecial": "飛鳥・大和散策の拠点として最適の宿。名物「義経鍋」もご賞味あれ",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F14788%2F14788.html",
    "label": "奈良県桜井市ふるさと納税・三輪山をご神体とする日本最古の神社「大神神社」多武峰観光ホテル",
    "themeTitle": "奈良県桜井市ふるさと納税：三輪山・大神神社と談山神社参拝の拠点・四季の山景広がる「多武峰観光ホテル」",
    "themeDesc": "古代のロマンが眠る山の辺の道や大神神社へのアクセスが良好で、十三重塔で知られる談山神社の門前に佇む落ち着いた宿。奈良名物の郷土料理「飛鳥鍋」や名産の大和肉鶏、本場の三輪そうめん会席を心ゆくまで味わえます。",
    "revAvg": "4.4",
    "minCharge": "8,700"
  }
];


  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "日本三大古社＆神話と悠久の祈り・神域に寄り添う聖地宿×ふるさと納税完全ガイド【2026年最新】伊勢神宮・出雲大社・大神神社",
    "description": "日本人の心のふるさとを巡る神聖なる古社ステイ！三重伊勢「伊勢神宮」内宮まで徒歩圏内・早朝参拝の静寂とおかげ横丁いにしえの宿伊久、島根出雲「出雲大社」縁結びの聖地・正門前に佇む純和風老舗竹野屋旅館、奈良桜井「三輪山・大神神社」本殿を持たず山をご神体とする日本最古の神社と多武峰観光ホテル。清らかな神域散策と名物グルメを楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。",
    "url": "https://croud-travel.pages.dev/furusato-tax-three-great-ancient-shrines-sacred-stay/",
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
      { "@type": "ListItem", "position": 2, "name": "日本三大古社＆神話と悠久の祈り・神域に寄り添う聖地宿×ふるさと納税完全ガイド【2026年最新】伊勢神宮・出雲大社・大神神社", "item": "https://croud-travel.pages.dev/furusato-tax-three-great-ancient-shrines-sacred-stay/" }
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
          <span className="text-slate-700 font-medium">日本三大古社＆神話の聖域・早朝参拝の名宿×ふるさと納税ガイド</span>
        </div>
      </nav>

      {/* ヒーローヘッダー */}
      <header className="relative bg-gradient-to-br from-emerald-950 via-slate-900 to-teal-950 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-block bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-semibold px-3 py-1 rounded-full mb-2">
            日本三大古社・神話と聖地特集
          </div>
          <h1 className="text-2xl md:text-4xl font-bold leading-tight tracking-tight">日本三大古社＆神話の聖域・早朝参拝の名宿×ふるさと納税ガイド</h1>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-3xl mx-auto pt-2">
            日本神話の黎明期から連綿と人々の祈りを受け止めてきた「日本三大古社」――天照大御神を祀り日本の総氏神として至高の尊厳を誇る三重の「伊勢神宮（内宮・外宮）」、国譲り神話と巨大なしめ縄・八百万の神々が集う縁結びの総本宮として名高い島根の「出雲大社」、そして本殿を設けず三輪山そのものを神体として祀る日本最古の神社と伝わる奈良の「大神神社（三輪明神）」。一般の参拝客で混雑する前の清浄な早朝に参道を歩き、土地の伝統食材を味わう至高の祈りの時間を楽天ふるさと納税でお楽しみください。
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"「いにしえの宿 伊久」へのアクセスや移動方法について","acceptedAnswer":{"@type":"Answer","text":"「いにしえの宿 伊久」へは、近鉄五十鈴川駅より送迎あり※詳しくは よくある質問 Q.伊久までの送迎はありますか？をご覧ください。最寄りの宇治山田駅からの経路案内も充実しています。"}},{"@type":"Question","name":"「いにしえの宿 伊久」の魅力や予約時のポイントは？","acceptedAnswer":{"@type":"Answer","text":"「いにしえの宿 伊久」は『内宮までゆっくり歩いて15分の全室露天風呂付のお宿。』という点が旅行者から高く支持されています。連休や人気シーズンは予約が集中しやすいため、空室状況はお早めのチェックが安心です。"}},{"@type":"Question","name":"プラン選びや宿の比較で意識すべき点は？","acceptedAnswer":{"@type":"Answer","text":"「いにしえの宿 伊久」と「竹野屋旅館」はそれぞれ立地や施設設備に独自の魅力があります。湯巡り重視か、料理やお部屋の寛ぎ重視かなど、今回の旅の目的に合わせてお選びください。"}}]}) }}
      />
        {/* リードセクション */}
        <section className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200/80 space-y-4">
          <h2 className="text-xl md:text-2xl font-bold text-slate-900 border-l-4 border-emerald-500 pl-3">
            森厳なる神宮の杜と古の神話。神聖な気配に包まれる早朝参拝の旅へ
          </h2>
          <p className="text-slate-600 leading-relaxed text-sm md:text-base">
            日本神話の黎明期から連綿と人々の祈りを受け止めてきた「日本三大古社」――天照大御神を祀り日本の総氏神として至高の尊厳を誇る三重の「伊勢神宮（内宮・外宮）」、国譲り神話と巨大なしめ縄・八百万の神々が集う縁結びの総本宮として名高い島根の「出雲大社」、そして本殿を設けず三輪山そのものを神体として祀る日本最古の神社と伝わる奈良の「大神神社（三輪明神）」。一般の参拝客で混雑する前の清浄な早朝に参道を歩き、土地の伝統食材を味わう至高の祈りの時間を楽天ふるさと納税でお楽しみください。
          </p>
        </section>

        {/* メリット3選 */}
        <section className="space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
              ふるさと納税×日本三大古社神話と聖地 3つのメリット
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
                  静寂に包まれる早朝参拝！鳥のさえずりと朝露が輝く神聖な神域をゆったり歩く贅沢
                </h3>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                  門前・神社至近の名宿に宿泊するからこそ叶う、澄み切った空気の中での心洗われる参拝体験。
                </p>
              </div>
            </div>
            <div key="1" className="bg-white rounded-xl p-6 shadow-sm border border-slate-200/80 flex flex-col justify-between hover:border-emerald-300 transition duration-200">
              <div className="space-y-3">
                <span className="inline-block w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 font-bold text-center leading-8 text-sm">
                  02
                </span>
                <h3 className="font-bold text-base text-slate-900 leading-snug">
                  伊勢海老・松阪牛、出雲そばと日本海海鮮会席、大和三輪そうめんや飛鳥鍋など郷土美食
                </h3>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                  古社が鎮座する聖地で育まれた、神饌の伝統を受け継ぐ贅沢で滋味豊かなご当地グルメを堪能。
                </p>
              </div>
            </div>
            <div key="2" className="bg-white rounded-xl p-6 shadow-sm border border-slate-200/80 flex flex-col justify-between hover:border-emerald-300 transition duration-200">
              <div className="space-y-3">
                <span className="inline-block w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 font-bold text-center leading-8 text-sm">
                  03
                </span>
                <h3 className="font-bold text-base text-slate-900 leading-snug">
                  楽天ふるさと納税宿泊クーポンで老舗旅館や門前リゾートをお得に予約
                </h3>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                  人生の節目やお礼参り、夫婦の祈願旅でも、寄付金額に応じた最大30%オフの即時割引クーポンでスマートにお得ステイ。
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
            あわせて読みたい日本の名所・絶景と歴史の宿特集
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            
            <Link href="/furusato-tax-three-great-torii-sacred-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三大鳥居＆神聖なる巨木の門・古都名宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                厳島・春日大社・気比神宮。
              </p>
            </Link>
            <Link href="/furusato-tax-three-great-zen-temples-mindfulness-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三大禅寺＆静寂の枯山水・心洗われる禅寺名宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                南禅寺・建長寺・永平寺。
              </p>
            </Link>
            <Link href="/furusato-tax-three-great-bell-towers-historic-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三大名鐘＆心の琴線に響く梵鐘・悠久の寺町宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                知恩院・平等院・三井寺。
              </p>
            </Link>
          </div>
        </section>
      
        {/* Model Course Section */}
                {/* Model Course Section */}
                {/* Model Course Section */}
                {/* Model Course Section */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200/80 mb-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-xl md:text-2xl font-bold text-stone-900">
              【1泊2日】いにしえの宿 伊久を拠点にするおすすめ滞在モデルコース
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-l-2 border-amber-500 pl-4 md:pl-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="bg-amber-600 text-white text-xs font-bold px-2.5 py-1 rounded">1日目</span>
                <h3 className="font-bold text-stone-900 text-base md:text-lg">到着〜チェックインと名湯巡り</h3>
              </div>
              <ul className="text-xs md:text-sm text-stone-600 space-y-2 leading-relaxed">
                <li>・<strong className="text-stone-800">14:00〜</strong> 宇治山田駅よりアクセス。近鉄五十鈴川駅より送迎あり※詳しくは よくある質問 Q.伊久までの送迎はありますか？をご覧ください。</li>
                <li>・<strong className="text-stone-800">15:30〜</strong> 「いにしえの宿 伊久」にチェックイン。内宮までゆっくり歩いて15分の全室露天風呂付のお宿などの宿の特徴に期待を高めつつ客室へ。</li>
                <li>・<strong className="text-stone-800">17:00〜</strong> 「いにしえの宿 伊久」の湯処へ。内宮までゆっくり歩いて15分の全室露天風呂付のお宿とともに、夕暮れの特別な寛ぎを満喫。</li>
                <li>・<strong className="text-stone-800">19:00〜</strong> 「いにしえの宿 伊久」でいただく旬の夕食。地場産の味覚を取り入れたおもてなし料理を五感でじっくり味わう贅沢なひととき。</li>
              </ul>
            </div>
            <div className="border-l-2 border-teal-500 pl-4 md:pl-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="bg-teal-600 text-white text-xs font-bold px-2.5 py-1 rounded">2日目</span>
                <h3 className="font-bold text-stone-900 text-base md:text-lg">爽快な朝湯〜周辺散策と帰路へ</h3>
              </div>
              <ul className="text-xs md:text-sm text-stone-600 space-y-2 leading-relaxed">
                <li>・<strong className="text-stone-800">07:00〜</strong> 朝の光が差し込む「いにしえの宿 伊久」の湯船へ。清々しい空気の中で手足を伸ばし、心地よい目覚めを迎える。</li>
                <li>・<strong className="text-stone-800">08:00〜</strong> 「いにしえの宿 伊久」こだわりの朝食を堪能。炊きたてのごはんや身体に優しい料理で、一日のエネルギーをチャージ。</li>
                <li>・<strong className="text-stone-800">10:00〜</strong> チェックアウト後は近隣エリアを観光。本記事でご紹介した「竹野屋旅館」の周辺スポットや名産店に立ち寄り、お土産を選んで帰路へ。</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-stone-50 rounded-2xl p-6 md:p-10 border border-stone-200/80 mb-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              よくある質問（FAQ）といにしえの宿 伊久の滞在ポイント
            </h2>
          </div>
          <div className="space-y-4">
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 「いにしえの宿 伊久」へのアクセスや移動方法について</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 「いにしえの宿 伊久」へは、近鉄五十鈴川駅より送迎あり※詳しくは よくある質問 Q.伊久までの送迎はありますか？をご覧ください。最寄りの宇治山田駅からの経路案内も充実しています。
              </p>
            </details>
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 「いにしえの宿 伊久」の魅力や予約時のポイントは？</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 「いにしえの宿 伊久」は『内宮までゆっくり歩いて15分の全室露天風呂付のお宿。』という点が旅行者から高く支持されています。連休や人気シーズンは予約が集中しやすいため、空室状況はお早めのチェックが安心です。
              </p>
            </details>
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. プラン選びや宿の比較で意識すべき点は？</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 「いにしえの宿 伊久」と「竹野屋旅館」はそれぞれ立地や施設設備に独自の魅力があります。湯巡り重視か、料理やお部屋の寛ぎ重視かなど、今回の旅の目的に合わせてお選びください。
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

          </div>
          <div className="pt-6 border-t border-stone-100">
            <h3 className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-3">人気の都道府県から宿を探す</h3>
            <div className="flex flex-wrap gap-2">
              <Link
                href="/prefectures/okayama"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                岡山県の宿・温泉
              </Link>
              <Link
                href="/prefectures/yamaguchi"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                山口県の宿・温泉
              </Link>
              <Link
                href="/prefectures/tochigi"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                栃木県の宿・温泉
              </Link>
              <Link
                href="/prefectures/gunma"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                群馬県の宿・温泉
              </Link>
            </div>
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
    
      <HubRelatedPosts currentSlug="furusato-tax-three-great-ancient-shrines-sacred-stay" />
</div>
  );
}
