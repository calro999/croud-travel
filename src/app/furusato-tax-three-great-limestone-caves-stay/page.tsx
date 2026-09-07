import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '日本三大鍾乳洞＆地底の神秘美・涼感アドベンチャー宿×ふるさと納税完全ガイド【2026年最新】龍泉洞・秋芳洞・龍河洞',
  description: '一億年の時が育んだ大自然の造形美！岩手「龍泉洞」世界有数の透明度を誇るドラゴンブルーの地底湖と浄土ヶ浜パークホテル、山口「秋芳洞」百枚皿と傘づくしの巨大カルスト洞窟と長門湯本温泉大谷山荘、高知「龍河洞」弥生人の神壺遺構と土佐の美食を誇る名門城西館。日本三大鍾乳洞の神秘的な地底空間と天然温泉を楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
  keywords: '日本三大鍾乳洞・地底ジオアドベンチャー特集, 楽天ふるさと納税, 温泉宿, ふるさと納税 旅行, 高級旅館, ホテル予約, 2026年旅行',
  openGraph: {
    title: '日本三大鍾乳洞＆地底の神秘美・涼感アドベンチャー宿×ふるさと納税完全ガイド【2026年最新】龍泉洞・秋芳洞・龍河洞',
    description: '一億年の時が育んだ大自然の造形美！岩手「龍泉洞」世界有数の透明度を誇るドラゴンブルーの地底湖と浄土ヶ浜パークホテル、山口「秋芳洞」百枚皿と傘づくしの巨大カルスト洞窟と長門湯本温泉大谷山荘、高知「龍河洞」弥生人の神壺遺構と土佐の美食を誇る名門城西館。日本三大鍾乳洞の神秘的な地底空間と天然温泉を楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    type: 'article',
    url: 'https://croud-travel.pages.dev/furusato-tax-three-great-limestone-caves-stay',
    siteName: 'トラベルポータル',
  },
};

export default function Page() {
  const officialAffUrl = 'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F';

  const hotels = [
  {
    "hotelNo": 64789,
    "hotelName": "浄土ヶ浜パークホテル",
    "hotelKanaName": "じょうどがはまぱーく",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D64789",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D64789%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D64789",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D64789",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/64789/64789.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/64789.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/64789/64789_si.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/64789/64789map.gif",
    "reviewCount": 1556,
    "reviewAverage": 4.44,
    "userReview": "トイレの換気扇と窓の外の景観が残念部屋のトイレの換気扇が弱すぎて臭いがひどい。せっかくの景観なのに部屋の窓、外側に大きな蜘蛛の巣があり、また雑草がかなり生い茂っていてちょっと残念でした。値…　 ",
    "hotelMinCharge": 11110,
    "address1": "岩手県",
    "address2": "宮古市日立浜町32-4",
    "telephoneNo": "0193-62-2321",
    "access": "ＪＲ山田線　宮古駅から奥浄土ヶ浜行きバスにて１５分、浄土ヶ浜ビジターセンター下車後、徒歩５分。【ペットと宿泊可※小型犬】",
    "parkingInformation": "有り　１００台　無料　先着順",
    "nearestStation": "宮古",
    "hotelSpecial": "浄土ヶ浜の高台に建つ和の景観と四季の恵みあふれるホテル。三陸の海の幸をご用意してお待ちしております",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D64789",
    "label": "岩手県岩泉町・宮古市ふるさと納税・ドラゴンブルーに輝く奇跡の地底湖「龍泉洞」天然記念物の神秘と三陸の恵み・浄土ヶ浜パークホテル",
    "themeTitle": "岩手県岩泉町・宮古市ふるさと納税：ドラゴンブルーに輝く奇跡の地底湖「龍泉洞」と三陸名勝「浄土ヶ浜パークホテル」",
    "themeDesc": "水深98mに達する第3地底湖の透明度と幻想的な青の世界。探検の後は、三陸復興国立公園・名勝浄土ヶ浜の高台に建つ「浄土ヶ浜パークホテル」で、アカマツ林越しに宮古湾を望み、獲れたて三陸海鮮ビュッフェや会席を贅沢に味わいます。",
    "revAvg": "4.4",
    "minCharge": "11,110"
  },
  {
    "hotelNo": 8178,
    "hotelName": "山口県　長門湯本温泉　大谷山荘",
    "hotelKanaName": "やまぐちけん　ながとゆもとおんせん　おおたにさんそう",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D8178",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D8178%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D8178",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D8178",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/8178/8178.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/8178.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/8178/8178_jpr.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/8178/8178map.gif",
    "reviewCount": 1457,
    "reviewAverage": 4.79,
    "userReview": "朝食が最高、夕食も温泉も大満足でまた行きたい朝食が素晴らしいかったですもちろん夕食も温泉も良かったです絶対また行きたいと思っていますクチコミの詳細はこちらから　https://revi…　 ",
    "hotelMinCharge": 22000,
    "address1": "山口県",
    "address2": "長門市深川湯本2208",
    "telephoneNo": "0837-25-3300",
    "access": "お車で角島・JR新山口駅へ60分／宇部空港へ70分／絶景元乃隅神社・萩へ35分／JR長門湯本駅より無料送迎5分",
    "parkingInformation": "無料　90台 収容　屋内駐車場もございます。背の高いお車でもご安心ください。",
    "nearestStation": "長門湯本",
    "hotelSpecial": "山間の自然に佇む明治14年創業の温泉旅館。長州藩主も湯治に訪れた長門湯本温泉で、四季折々のお寛ぎを",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D8178",
    "label": "山口県美祢市・長門市ふるさと納税・日本屈指の大カルスト台地に広がる東洋一の巨大鍾乳洞「秋芳洞」百枚皿と名湯長門湯本温泉大谷山荘",
    "themeTitle": "山口県美祢市・長門市ふるさと納税：東洋一の大鍾乳洞「秋芳洞」百枚皿の絶景と名湯「長門湯本温泉 大谷山荘」",
    "themeDesc": "秋吉台の地底深くに広がる大空間と百枚皿の造形美。車で約30分の老舗温泉街・長門湯本温泉の最高峰「大谷山荘」に滞在し、音信川のせせらぎを聞きながら露天風呂に浸かり、長州牛やふぐ・日本海の旬魚会席に心奪われる贅沢を堪能します。",
    "revAvg": "4.8",
    "minCharge": "22,000"
  },
  {
    "hotelNo": 8075,
    "hotelName": "城西館（じょうせいかん）",
    "hotelKanaName": "じょうせいかん",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D8075",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D8075%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D8075",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D8075",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/8075/8075.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/8075.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/8075/8075_heya.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/8075/8075map.gif",
    "reviewCount": 3621,
    "reviewAverage": 4.62,
    "userReview": "リニューアル和室と藁焼きのサービスに感動リューアルされた和室に宿泊しました。従業員の皆さんの教育はしっかりなされているようで安定のサービスと感じました。特に部屋に荷物も運んでくれた若い女性は素晴ら…　 ",
    "hotelMinCharge": 11999,
    "address1": "高知県",
    "address2": "高知市上町2-5-34",
    "telephoneNo": "088-875-0111",
    "access": "路面電車上町1丁目電停目の前。ＪＲ高知駅よりお車で７分、高知ＩＣよりお車で２０分",
    "parkingInformation": "有 車/1泊1,100円税込、バイク/1泊550円税込となります。",
    "nearestStation": "高知",
    "hotelSpecial": "２０１９年４月リニューアルオープン！明治７年創業の老舗宿。展望露天風呂と鰹の藁焼きタタキ工房が自慢♪",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D8075",
    "label": "高知県香美市・高知市ふるさと納税・一億年の時が刻んだ弥生人の神壺遺構「龍河洞」土佐の皿鉢料理と名門旅館城西館",
    "themeTitle": "高知県香美市・高知市ふるさと納税：一億年のタイムカプセル「龍河洞」弥生の神壺と土佐の老舗旅館「城西館」",
    "themeDesc": "世界的にも珍しい弥生土器が鍾乳石に包まれた「神壺」や迫力の鍾乳石群。見学後は、明治7年創業・皇族方をお迎えしてきた高知屈指の老舗名門「城西館」で、最上階の展望露天風呂と、名物カツオの藁焼きタタキや皿鉢料理を満喫します。",
    "revAvg": "4.6",
    "minCharge": "11,999"
  }
];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* パンくずリスト */}
      <nav className="bg-white border-b border-slate-200 py-3 px-4 text-xs text-slate-500">
        <div className="max-w-5xl mx-auto flex items-center space-x-2">
          <Link href="/" className="hover:text-emerald-600 transition">ホーム</Link>
          <span>&gt;</span>
          <span className="text-slate-700 font-medium">日本三大鍾乳洞＆地底神秘美・名湯宿×ふるさと納税ガイド</span>
        </div>
      </nav>

      {/* ヒーローヘッダー */}
      <header className="relative bg-gradient-to-br from-emerald-950 via-slate-900 to-teal-950 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-block bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-semibold px-3 py-1 rounded-full mb-2">
            日本三大鍾乳洞・地底ジオアドベンチャー特集
          </div>
          <h1 className="text-2xl md:text-4xl font-bold leading-tight tracking-tight">
            日本三大鍾乳洞＆地底神秘美・名湯宿×ふるさと納税ガイド
          </h1>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-3xl mx-auto pt-2">
            悠久の歳月をかけて地下水が石灰岩を溶かし、奇跡のような地底宮殿を形作った「日本三大鍾乳洞」――世界有数の透明度を誇るドラゴンブルーの地底湖が吸い込まれそうな青のグラデーションを描く岩手岩泉の「龍泉洞」、日本最大級のカルスト台地・秋吉台の地下100mに広がり無数の皿状石灰段丘「百枚皿」や黄金柱が圧巻のスケールを誇る山口美祢の「秋芳洞」、そして一億年の鍾乳石とともに太古の弥生人が暮らした痕跡「神壺（土器が鍾乳石と一体化した世界唯一の遺構）」が残る高知香美の「龍河洞」。洞内は年中ひんやりとした清涼な空気が漂い、夏は涼しく冬は暖かく、冒険心をくすぐる別世界が広がります。地底探検の後は、三陸・長門湯本・土佐の贅を尽くした温泉宿でゆったりと湯に浸かり、ご当地の山海の幸を味わう贅沢なひとときを楽天ふるさと納税でお楽しみください。
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
            年間を通じて10℃前後の天然クーラー。エメラルドブルーの地底湖と鍾乳石が織りなす神秘の世界へ
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>洞窟探検の興奮をそのままに！名湯露天風呂とプライベート空間でリフレッシュ</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                地底の神秘を体感した後は、天然温泉大浴場や清流露天風呂で心地よい疲労感をじっくりと癒やします。
              </p>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>三陸のウニ・アワビ、長州黒かしわ・ふぐ、土佐のカツオ藁焼きタタキ</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                大自然の恵みが詰まった各地域最高峰のブランド食材ディナーと地酒を心ゆくまで堪能。
              </p>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>楽天ふるさと納税宿泊クーポンでハイグレード温泉旅館を賢くお得にリザーブ</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                家族旅行やカップルの記念日旅行でも、寄付金額に応じた即時割引クーポンで負担を抑えて上質な宿泊が実現。
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
                        {h.hotelSpecial || '歴史ある名橋や城下町、鍾乳洞、美林の自然探訪に最適な上質拠点。四季折々の美味と温かなおもてなしでお寛ぎください。'}
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
                宿泊当日は通常通りチェックイン。割引されたお得な価格で、名湯や美食、歴史情緒溢れる極上滞在を満喫できます。
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
            あわせて読みたい日本の伝統美・絶景特集
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            
            <Link href="/furusato-tax-three-great-karst-highlands-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三大カルスト台地＆天空パノラマ宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                秋吉台・四国カルスト・平尾台。
              </p>
            </Link>
            
            <Link href="/furusato-tax-three-great-precipitous-coasts-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三大名勝断崖海岸＆パノラマ海宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                北山崎・東尋坊・足摺岬。
              </p>
            </Link>
            
            <Link href="/furusato-tax-three-great-gorges-scenic-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三大渓谷美＆清流リトリート温泉宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                黒部峡谷・清津峡・大杉谷。
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
