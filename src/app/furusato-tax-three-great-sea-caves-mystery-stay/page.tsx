import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: { canonical: "https://croud-travel.pages.dev/furusato-tax-three-great-sea-caves-mystery-stay/" },
  title: '日本三大海食洞＆波濤が穿った奇跡の洞門・神秘の青の洞窟と絶景海宿×ふるさと納税厳選ガイド堂ヶ島・芥屋の大門・七ツ釜',
  description: '荒波と大自然の彫刻が織りなす神秘の海食洞窟！西伊豆「堂ヶ島天窓洞」天然記念物の青の洞窟と堂ヶ島温泉ホテル、福岡糸島「芥屋の大門」日本最大の玄武岩柱状節理洞門とグローカルホテル糸島、佐賀唐津「屋形石の七ツ釜」玄界灘の激浪が穿った七つの洞窟と唐津シーサイドホテル。日本三大海食洞の神秘と海の幸を楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
  keywords: '日本三大海食洞・秘境ジオ特集, 楽天ふるさと納税, 温泉宿, ふるさと納税 旅行, 高級旅館, ホテル予約, 2026年旅行',
  openGraph: {
    title: '日本三大海食洞＆波濤が穿った奇跡の洞門・神秘の青の洞窟と絶景海宿×ふるさと納税厳選ガイド堂ヶ島・芥屋の大門・七ツ釜',
    description: '荒波と大自然の彫刻が織りなす神秘の海食洞窟！西伊豆「堂ヶ島天窓洞」天然記念物の青の洞窟と堂ヶ島温泉ホテル、福岡糸島「芥屋の大門」日本最大の玄武岩柱状節理洞門とグローカルホテル糸島、佐賀唐津「屋形石の七ツ釜」玄界灘の激浪が穿った七つの洞窟と唐津シーサイドホテル。日本三大海食洞の神秘と海の幸を楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    type: 'article',
    url: 'https://croud-travel.pages.dev/furusato-tax-three-great-sea-caves-mystery-stay',
    siteName: 'トラベルポータル',
  },
};

export default function Page() {
  const officialAffUrl = 'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F';

  const hotels = [
  {
    "hotelNo": 8784,
    "hotelName": "堂ヶ島唯一の自家源泉掛流宿　堂ヶ島温泉ホテル",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D8784",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D8784%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D8784",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D8784",
    "hotelKanaName": "どうがしまおんせん　どうがしまおんせんほてる",
    "hotelSpecial": "東海バスフリーきっぷまたは西伊豆特急・快速バスの乗車券をご提示で2500円キャッシュバック♪",
    "hotelMinCharge": 8300,
    "address1": "静岡県",
    "address2": "賀茂郡西伊豆町仁科2960",
    "telephoneNo": "75",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/8784/8784.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/8784/8784_room.jpg",
    "reviewCount": 1633,
    "reviewAverage": 3.87,
    "userReview": "スタッフの親切な対応と温泉に大満足入口で荷物を降ろしていたらすぐにフロントの方がきてくれカートを貸してくれました とても親切で助かりました温泉用のバックも便利温泉の効能が劇的に良くリラ。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F8784%2F8784.html",
    "access": "JR特急踊り子号で伊豆急下田駅下車　路線バスで約60分",
    "label": "静岡県西伊豆町ふるさと納税・青の洞窟と天然記念物の天窓「堂ヶ島天窓洞」堂ヶ島温泉ホテル",
    "themeTitle": "静岡県西伊豆町ふるさと納税：天窓洞へ抜群のアクセス・堂ヶ島唯一の自家源泉掛け流し「堂ヶ島温泉ホテル」",
    "themeDesc": "名勝・堂ヶ島の奇岩群を眼前に望み、天窓洞遊覧船乗り場にも至近な海辺の名宿。化粧水のようにとろりとした自家源泉掛け流しの露天風呂から駿河湾の夕日を望み、西伊豆名物の金目鯛姿煮や伊勢海老会席を贅沢に味わえます。",
    "revAvg": "3.9",
    "minCharge": "8,300"
  },
  {
    "hotelNo": 183099,
    "hotelName": "グローカルホテル糸島",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D183099",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D183099%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D183099",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D183099",
    "hotelKanaName": "ぐろーかるほてるいとしま",
    "hotelSpecial": "独立型トイレ・大浴場付。徒歩圏内に温浴施設やサウナ、岩盤浴有。自然豊かな糸島を味わってみませんか。",
    "hotelMinCharge": 8450,
    "address1": "福岡県",
    "address2": "糸島市泊844-1",
    "telephoneNo": "092-332-9600",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/183099/183099.jpg",
    "roomImageUrl": "",
    "reviewCount": 443,
    "reviewAverage": 4.48,
    "userReview": "地元の食材を使ったバイキングと接客に大満足バイキングは地元の野菜、美味しいお肉、デザート等があり大変満足でした。ホテルのスタッフの方もいい方が多く、気持ちよく宿泊することが出来ました。クチ。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F183099%2F183099.html",
    "access": "「福岡空港」より「筑肥線(波多江駅)」で降り、タクシーで7分",
    "label": "福岡県糸島市ふるさと納税・日本最大の玄武岩柱状節理海食洞「芥屋の大門」糸島美食リゾートステイ",
    "themeTitle": "福岡県糸島市ふるさと納税：芥屋の大門クルーズと糸島ドライブの拠点「グローカルホテル糸島」",
    "themeDesc": "大注目のリゾート地・糸島に位置し、芥屋の大門や白糸の滝へのアクセス抜群なオーベルジュ風ホテル。糸島の豊かな海山の幸を取り入れた創作ディナーと、大浴場や温浴施設でドライブの疲れをゆったりと癒やせます。",
    "revAvg": "4.5",
    "minCharge": "8,450"
  },
  {
    "hotelNo": 52129,
    "hotelName": "唐津シーサイドホテル",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D52129",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D52129%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D52129",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D52129",
    "hotelKanaName": "からつしーさいどほてる",
    "hotelSpecial": "唐津湾と虹の松原に囲まれた景色と海の幸・山の幸。天然温泉で心身ともにリラックス！",
    "hotelMinCharge": 10300,
    "address1": "佐賀県",
    "address2": "唐津市東唐津4-182",
    "telephoneNo": "00",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/52129/52129.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/52129/52129_you1.jpg",
    "reviewCount": 2445,
    "reviewAverage": 4.6,
    "userReview": "カブトムシカブトムシをオス・メスペアで頂き、息子が喜んで今も飼育しています。海は荒れていましたが、プールで沢山遊べました。ありがとう御座いました。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F52129%2F52129.html",
    "access": "ＪＲ　東唐津駅より車にて約３分",
    "label": "佐賀県唐津市ふるさと納税・荒波が穿った七つの神秘の洞門「屋形石の七ツ釜」唐津シーサイド温泉リゾート",
    "themeTitle": "佐賀県唐津市ふるさと納税：七ツ釜と虹の松原を一望・全室オーシャンビューの温泉リゾート「唐津シーサイドホテル」",
    "themeDesc": "唐津湾の白砂青松・虹の松原に隣接し、七ツ釜観光遊覧船が出る呼子港へのドライブも快適なラグジュアリーホテル。地下から湧出する天然温泉の展望露天風呂やインフィニティプール、名物の呼子イカや佐賀牛ディナーが最高です。",
    "revAvg": "4.6",
    "minCharge": "10,300"
  }
];


  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "日本三大海食洞＆波濤が穿った奇跡の洞門・神秘の青の洞窟と絶景海宿×ふるさと納税完全ガイド【2026年最新】堂ヶ島・芥屋の大門・七ツ釜",
    "description": "荒波と大自然の彫刻が織りなす神秘の海食洞窟！西伊豆「堂ヶ島天窓洞」天然記念物の青の洞窟と堂ヶ島温泉ホテル、福岡糸島「芥屋の大門」日本最大の玄武岩柱状節理洞門とグローカルホテル糸島、佐賀唐津「屋形石の七ツ釜」玄界灘の激浪が穿った七つの洞窟と唐津シーサイドホテル。日本三大海食洞の神秘と海の幸を楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。",
    "url": "https://croud-travel.pages.dev/furusato-tax-three-great-sea-caves-mystery-stay/",
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
      { "@type": "ListItem", "position": 2, "name": "日本三大海食洞＆波濤が穿った奇跡の洞門・神秘の青の洞窟と絶景海宿×ふるさと納税完全ガイド【2026年最新】堂ヶ島・芥屋の大門・七ツ釜", "item": "https://croud-travel.pages.dev/furusato-tax-three-great-sea-caves-mystery-stay/" }
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
          <span className="text-slate-700 font-medium">日本三大海食洞＆青の洞窟・波濤の造形美宿×ふるさと納税ガイド</span>
        </div>
      </nav>

      {/* ヒーローヘッダー */}
      <header className="relative bg-gradient-to-br from-emerald-950 via-slate-900 to-teal-950 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-block bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-semibold px-3 py-1 rounded-full mb-2">
            日本三大海食洞・秘境ジオ特集
          </div>
          <h1 className="text-2xl md:text-4xl font-bold leading-tight tracking-tight">日本三大海食洞＆青の洞窟・波濤の造形美宿×ふるさと納税ガイド</h1>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-3xl mx-auto pt-2">
            何万年もの歳月にわたり打ち寄せた怒濤が岩肌を削り、神秘的なドームやトンネルを穿った「日本三大海食洞」――遊覧船で洞窟内に入ると天井が丸く抜け光が射し込む青の洞窟として世界的にも名高い静岡西伊豆の「堂ヶ島天窓洞」、玄武岩の六角柱が見事に整列した日本最大の柱状節理海食洞であり国の天然記念物にも指定されている福岡糸島の「芥屋の大門（けやのおおと）」、そして玄界灘の荒波によって深く彫り込まれた七つの洞門が並び遊覧船「イカ丸」での洞窟潜入クルーズがスリリングな佐賀唐津の「屋形石の七ツ釜」。海食洞の神秘に息をのんだ後は、伊豆の金目鯛や玄界灘の活イカ、極上のオーシャンビュー温泉露天風呂で心身を解きほぐす特別な休日を楽天ふるさと納税でお楽しみください。
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"「堂ヶ島唯一の自家源泉掛流宿 堂ヶ島温泉ホテル。」へのアクセスや移動方法について","acceptedAnswer":{"@type":"Answer","text":"「堂ヶ島唯一の自家源泉掛流宿 堂ヶ島温泉ホテル。」へは、JR特急踊り子号で伊豆急下田駅下車 路線バスで約60分。最寄りの修善寺駅からの経路案内も充実しています。"}},{"@type":"Question","name":"「堂ヶ島唯一の自家源泉掛流宿 堂ヶ島温泉ホテル。」の魅力や予約時のポイントは？","acceptedAnswer":{"@type":"Answer","text":"「堂ヶ島唯一の自家源泉掛流宿 堂ヶ島温泉ホテル。」は『東海バスフリーきっぷまたは西伊豆特急・快速バスの乗車券をご提示で2500円キャッシュバック。』という点が旅行者から高く支持されています。連休や人気シーズンは予約が集中しやすいため、空室状況はお早めのチェックが安心です。"}},{"@type":"Question","name":"プラン選びや宿の比較で意識すべき点は？","acceptedAnswer":{"@type":"Answer","text":"「堂ヶ島唯一の自家源泉掛流宿 堂ヶ島温泉ホテル。」と「グローカルホテル糸島」はそれぞれ立地や施設設備に独自の魅力があります。湯巡り重視か、料理やお部屋の寛ぎ重視かなど、今回の旅の目的に合わせてお選びください。"}}]}) }}
      />
        
        {/* 特集の魅力セクション */}
        <section className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200/80">
          <h2 className="text-xl md:text-2xl font-bold text-slate-900 border-l-4 border-emerald-500 pl-3 mb-6">
            エメラルドグリーンに輝く洞内、天窓から差し込む神聖な光。波が創り出した海の宮殿
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>エメラルドグリーンの水面・天窓から降り注ぐ光・六角柱の巨岩ゲート！感動のクルーズ体験</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                遊覧船で海から直接アプローチし、大自然が彫り上げた神秘の洞窟空間に潜入。
              </p>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>西伊豆の活金目鯛煮付け、糸島牛と朝獲れ地魚、唐津呼子の透き通る活イカ造り</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                海食洞を育んだ豊かな海がもたらす最高峰の海の恵みと、地元名産のブランド食材会席。
              </p>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>楽天ふるさと納税宿泊クーポンで絶景リゾートや温泉旅館をお得に予約</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                海岸ドライブやクルーズ旅でも、寄付金額に応じた最大30%オフの即時割引クーポンでスマートにお得ステイ。
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
            
            <Link href="/furusato-tax-three-great-stalactite-caves-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三大鍾乳石洞窟＆地底宮殿宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                あぶくま洞・玉泉洞・井倉洞。
              </p>
            </Link>
            
            <Link href="/furusato-tax-three-great-capes-ocean-panorama-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三大岬＆地球の丸みを感じる断崖海宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                知床岬・足摺岬・佐多岬。
              </p>
            </Link>
            
            <Link href="/furusato-tax-three-great-columnar-joints-gorges-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三大柱状節理峡谷＆絶景名湯宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                清津峡・高千穂峡・層雲峡。
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
              【1泊2日】堂ヶ島唯一の自家源泉掛流宿 堂ヶ島温泉ホテルを拠点にするおすすめ滞在モデルコース
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-l-2 border-amber-500 pl-4 md:pl-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="bg-amber-600 text-white text-xs font-bold px-2.5 py-1 rounded">1日目</span>
                <h3 className="font-bold text-stone-900 text-base md:text-lg">到着〜チェックインと名湯巡り</h3>
              </div>
              <ul className="text-xs md:text-sm text-stone-600 space-y-2 leading-relaxed">
                <li>・<strong className="text-stone-800">14:00〜</strong> 修善寺駅よりアクセス。JR特急踊り子号で伊豆急下田駅下車 路線バスで約60分。</li>
                <li>・<strong className="text-stone-800">15:30〜</strong> 「堂ヶ島唯一の自家源泉掛流宿 堂ヶ島温泉ホテル。」にチェックイン。東海バスフリーきっぷまたは西伊豆特急・快速バスの乗車券をご提示で2500円キャッシュバック♪などの宿の特徴に期待を高めつつ客室へ。</li>
                <li>・<strong className="text-stone-800">17:00〜</strong> 「堂ヶ島唯一の自家源泉掛流宿 堂ヶ島温泉ホテル。」の湯処へ。東海バスフリーきっぷまたは西伊豆特急・快速バスの乗車券をご提示で250とともに、夕暮れの特別な寛ぎを満喫。</li>
                <li>・<strong className="text-stone-800">19:00〜</strong> 「堂ヶ島唯一の自家源泉掛流宿 堂ヶ島温泉ホテル。」でいただく旬の夕食。地場産の味覚を取り入れたおもてなし料理を五感でじっくり味わう贅沢なひととき。</li>
              </ul>
            </div>
            <div className="border-l-2 border-teal-500 pl-4 md:pl-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="bg-teal-600 text-white text-xs font-bold px-2.5 py-1 rounded">2日目</span>
                <h3 className="font-bold text-stone-900 text-base md:text-lg">爽快な朝湯〜周辺散策と帰路へ</h3>
              </div>
              <ul className="text-xs md:text-sm text-stone-600 space-y-2 leading-relaxed">
                <li>・<strong className="text-stone-800">07:00〜</strong> 朝の光が差し込む「堂ヶ島唯一の自家源泉掛流宿 堂ヶ島温泉ホテル。」の湯船へ。清々しい空気の中で手足を伸ばし、心地よい目覚めを迎える。</li>
                <li>・<strong className="text-stone-800">08:00〜</strong> 「堂ヶ島唯一の自家源泉掛流宿 堂ヶ島温泉ホテル。」こだわりの朝食を堪能。炊きたてのごはんや身体に優しい料理で、一日のエネルギーをチャージ。</li>
                <li>・<strong className="text-stone-800">10:00〜</strong> チェックアウト後は近隣エリアを観光。本記事でご紹介した「グローカルホテル糸島」の周辺スポットや名産店に立ち寄り、お土産を選んで帰路へ。</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-stone-50 rounded-2xl p-6 md:p-10 border border-stone-200/80 mb-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              よくある質問（FAQ）と堂ヶ島唯一の自家源泉掛流宿 堂ヶ島温泉ホテルの滞在ポイント
            </h2>
          </div>
          <div className="space-y-4">
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 「堂ヶ島唯一の自家源泉掛流宿 堂ヶ島温泉ホテル。」へのアクセスや移動方法について</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 「堂ヶ島唯一の自家源泉掛流宿 堂ヶ島温泉ホテル。」へは、JR特急踊り子号で伊豆急下田駅下車 路線バスで約60分。最寄りの修善寺駅からの経路案内も充実しています。
              </p>
            </details>
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 「堂ヶ島唯一の自家源泉掛流宿 堂ヶ島温泉ホテル。」の魅力や予約時のポイントは？</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 「堂ヶ島唯一の自家源泉掛流宿 堂ヶ島温泉ホテル。」は『東海バスフリーきっぷまたは西伊豆特急・快速バスの乗車券をご提示で2500円キャッシュバック。』という点が旅行者から高く支持されています。連休や人気シーズンは予約が集中しやすいため、空室状況はお早めのチェックが安心です。
              </p>
            </details>
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. プラン選びや宿の比較で意識すべき点は？</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 「堂ヶ島唯一の自家源泉掛流宿 堂ヶ島温泉ホテル。」と「グローカルホテル糸島」はそれぞれ立地や施設設備に独自の魅力があります。湯巡り重視か、料理やお部屋の寛ぎ重視かなど、今回の旅の目的に合わせてお選びください。
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
                href="/prefectures/fukushima"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                福島県の宿・温泉
              </Link>
              <Link
                href="/prefectures/tokyo"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                東京都の宿・温泉
              </Link>
              <Link
                href="/prefectures/saga"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                佐賀県の宿・温泉
              </Link>
              <Link
                href="/prefectures/chiba"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                千葉県の宿・温泉
              </Link>
            </div>
          </div>
        </section>

      </main>

      {/* フッター */}
      <footer className="bg-slate-950 text-slate-400 py-8 px-4 text-center text-xs border-t border-slate-800">
        <p>© 2026 トラベルポータル All Rights Reserved. 掲載情報は最新の楽天トラベル公式APIに基づきます。</p>
      </footer>
    
      <HubRelatedPosts currentSlug="furusato-tax-three-great-sea-caves-mystery-stay" />
</div>
  );
}
