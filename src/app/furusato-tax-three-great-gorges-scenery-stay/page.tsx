import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '日本三大渓谷美＆エメラルドグリーンの清流・奇岩絶景宿×ふるさと納税完全ガイド【2026年最新】清津峡・黒部峡谷・大杉谷',
  description: '大自然が刻んだ圧倒的造形美！新潟十日町「清津峡」巨大柱状節理のパノラマトンネルと清津峡温泉いろりとほたるの宿せとぐち、富山黒部「黒部峡谷」トロッコ電車で行く大峡谷と宇奈月温泉老舗旅館延対寺荘、三重松阪・大台「大杉谷」手つかずの秘境原生渓谷とエースイン松阪。日本三大渓谷の絶景と清流の癒やしを楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
  keywords: '日本三大渓谷・奇岩清流特集, 楽天ふるさと納税, 温泉宿, ふるさと納税 旅行, 高級旅館, ホテル予約, 2026年旅行',
  openGraph: {
    title: '日本三大渓谷美＆エメラルドグリーンの清流・奇岩絶景宿×ふるさと納税完全ガイド【2026年最新】清津峡・黒部峡谷・大杉谷',
    description: '大自然が刻んだ圧倒的造形美！新潟十日町「清津峡」巨大柱状節理のパノラマトンネルと清津峡温泉いろりとほたるの宿せとぐち、富山黒部「黒部峡谷」トロッコ電車で行く大峡谷と宇奈月温泉老舗旅館延対寺荘、三重松阪・大台「大杉谷」手つかずの秘境原生渓谷とエースイン松阪。日本三大渓谷の絶景と清流の癒やしを楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    type: 'article',
    url: 'https://croud-travel.pages.dev/furusato-tax-three-great-gorges-scenery-stay',
    siteName: 'トラベルポータル',
  },
};

export default function Page() {
  const officialAffUrl = 'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F';

  const hotels = [
  {
    "hotelNo": 44936,
    "hotelName": "清津峡温泉　いろりとほたるの宿せとぐち",
    "hotelKanaName": "きよつきょうおんせん　いろりとほたるのやどせとぐち",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D44936",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D44936%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D44936",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D44936",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/44936/44936.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/44936.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/44936/44936_room.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/44936/44936map.gif",
    "reviewCount": 51,
    "reviewAverage": 4.75,
    "userReview": "",
    "hotelMinCharge": 12500,
    "address1": "新潟県",
    "address2": "十日町市西田尻辛168番地",
    "telephoneNo": "025-763-2431",
    "access": "上越新幹線越後湯沢駅下車　車で２５分／関越自動車道 ・塩沢石打インターより　車で２０分",
    "parkingInformation": "有り　３０台　無料　予約不要",
    "nearestStation": "越後湯沢",
    "hotelSpecial": "【最大22時間滞在可能】昭和初期の建築で過ごす 囲炉裏の空間で田舎料理 美しい景色 蛍の季節も―",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D44936",
    "featureKey": "gorge_kiyotsu",
    "featureLabel": "新潟県十日町市・湯沢町ふるさと納税・巨大な柱状節理とアートが融合する峡谷トンネル「清津峡」越後湯沢温泉ステイ",
    "themeTitle": "新潟県十日町市ふるさと納税：清津峡渓谷トンネルすぐ・囲炉裏炭火料理と美肌温泉の隠れ宿「いろりとほたるの宿 せとぐち」",
    "themeDesc": "清津峡の入り口に佇む、温もりあふれる温泉宿。清津峡渓谷トンネルの観光拠点として絶好のロケーションを誇り、夜は囲炉裏を囲んで地元十日町の魚沼産コシヒカリ、山菜、清流イワナを炭火焼きで堪能。弱アルカリ性の天然温泉が優しく体を癒やします。",
    "revAvg": "4.8",
    "minCharge": "12,500"
  },
  {
    "hotelNo": 4804,
    "hotelName": "宇奈月温泉の老舗旅館　延対寺荘",
    "hotelKanaName": "うなづきおんせんのしにせりょかん　えんたいじそう",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D4804",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D4804%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D4804",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D4804",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/4804/4804.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/4804.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/4804/4804_take.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/4804/4804map.gif",
    "reviewCount": 1554,
    "reviewAverage": 4.31,
    "userReview": "お部屋は綺麗で景観も最高、温泉も大満足お宿の外観は古そうに思いましたが、お部屋はリフォーム後だったのかとてもきれいで、峡谷側で景観もとてもよく大満足です。夕食は...カジュアルプランだったのも…　 ",
    "hotelMinCharge": 13200,
    "address1": "富山県",
    "address2": "黒部市宇奈月温泉53",
    "telephoneNo": "0765-62-1234",
    "access": "北陸自動車道黒部 Ｉ．Ｃより２０分。富山地方鉄道「宇奈月温泉駅」より徒歩５分。",
    "parkingInformation": "有り　5０台　無料",
    "nearestStation": "宇奈月温泉",
    "hotelSpecial": "温泉街でも最も眺望の良い場所に立地し、源泉１００％の加温・加水無しの湯がお楽しみいただけます。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D4804",
    "featureKey": "gorge_kurobe",
    "featureLabel": "富山県黒部市ふるさと納税・V字峡谷をトロッコ電車が走る大自然の絶景「黒部峡谷」黒部川一望の宇奈月温泉延対寺荘",
    "themeTitle": "富山県黒部市ふるさと納税：黒部峡谷の絶景を眼下に望む文豪ゆかりの老舗宿「宇奈月温泉 延対寺荘」",
    "themeDesc": "黒部川沿いの断崖に建ち、全客室や露天風呂から黒部峡谷のダイナミックな景観を一望できる名門旅館。トロッコ電車の発着駅からも近く、美肌効果抜群の宇奈月温泉の湯に浸かった後は、富山湾直送の白えびやホタルイカ、ズワイガニの旬会席を堪能できます。",
    "revAvg": "4.3",
    "minCharge": "13,200"
  },
  {
    "hotelNo": 5822,
    "hotelName": "エースイン・松阪",
    "hotelKanaName": "えーすいんまつさか",
    "hotelInformationUrl": "https://travel.rakuten.co.jp/HOTEL/5822/5822.html",
    "planListUrl": "https://travel.rakuten.co.jp/HOTEL/5822/5822.html",
    "dpPlanListUrl": "",
    "reviewUrl": "https://travel.rakuten.co.jp/HOTEL/5822/review.html",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/5822/5822.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/5822.jpg",
    "roomImageUrl": "",
    "hotelMapImageUrl": "",
    "reviewCount": 2890,
    "reviewAverage": 3.98,
    "userReview": "松阪駅前すぐの好立地で大杉谷や奥香肌峡へのトレッキング拠点、松阪牛グルメの拠点に最適。",
    "hotelMinCharge": 4200,
    "address1": "三重県",
    "address2": "松阪市京町516-1",
    "telephoneNo": "0598-23-8585",
    "access": "ＪＲ・近鉄松阪駅北口より徒歩１分",
    "parkingInformation": "有り　無料",
    "nearestStation": "松阪",
    "hotelSpecial": "日本百名谷・大杉谷峡谷への玄関口。松阪牛の名店巡りと無料朝食バイキングが魅力の快適ホテル。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F5822%2F5822.html",
    "featureKey": "gorge_osugidani",
    "featureLabel": "三重県大台町・松阪市ふるさと納税・近畿の秘境にして手つかずの原生渓谷美「大杉谷」宮川の清流とエースイン松阪",
    "themeTitle": "三重県松阪市・大台町ふるさと納税：近畿の秘境・大杉谷への玄関口！松阪牛グルメの拠点「エースイン・松阪」",
    "themeDesc": "日本百名谷の筆頭・大杉谷渓谷へのアクセス拠点となる松阪駅北口徒歩1分の好立地ホテル。早朝のトレッキング出発にも便利で、全室無料の健康朝食バイキング付き。夜は松阪市内の名店で本場の極上松阪牛すき焼きや焼肉を存分に味わえます。",
    "revAvg": "4.0",
    "minCharge": "4,200"
  }
];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* パンくずリスト */}
      <nav className="bg-white border-b border-slate-200 py-3 px-4 text-xs text-slate-500">
        <div className="max-w-5xl mx-auto flex items-center space-x-2">
          <Link href="/" className="hover:text-emerald-600 transition">ホーム</Link>
          <span>&gt;</span>
          <span className="text-slate-700 font-medium">日本三大渓谷美＆清流大自然絶景宿×ふるさと納税ガイド</span>
        </div>
      </nav>

      {/* ヒーローヘッダー */}
      <header className="relative bg-gradient-to-br from-emerald-950 via-slate-900 to-teal-950 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-block bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-semibold px-3 py-1 rounded-full mb-2">
            日本三大渓谷・奇岩清流特集
          </div>
          <h1 className="text-2xl md:text-4xl font-bold leading-tight tracking-tight">
            日本三大渓谷美＆清流大自然絶景宿×ふるさと納税ガイド
          </h1>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-3xl mx-auto pt-2">
            何万年もの歳月をかけて清流が岩を削り出して生み出した「日本三大渓谷美」――国の名勝・天然記念物に指定され、水鏡のトンネルアートで世界中から注目を集める新潟十日町の「清津峡」、北アルプスの険しい峰々を縫うようにトロッコ電車が走り抜ける日本一深いV字峡の富山「黒部峡谷」、そして吉野熊野国立公園の最奥部に位置し、滝と原生林が織りなす近畿最後の秘境・三重の「大杉谷」。垂直に聳え立つ岩肌のダイナミズム、川面を渡る清々しい風、そしてエメラルドグリーンに輝く水面は、訪れる人の五感を澄み渡らせてくれます。清流の息吹を感じる温泉宿を拠点に、新潟コシヒカリ・富山湾の白えび・三重の松阪牛を味わう至福の絶景旅を楽天ふるさと納税でお楽しみください。
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
            垂直に切り立つ柱状節理の岩壁と、息をのむほど透き通った清流。大地の彫刻に魅せられる
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>巨大な柱状節理とエメラルドグリーンの清流！日本屈指の大渓谷パノラマ</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                清津峡の水鏡トンネル、黒部のトロッコ列車、大杉谷の秘境ハイキングなど、ここでしか見られない絶景を堪能。
              </p>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>魚沼コシヒカリ＆清流魚、富山湾の宝石白えび＆ズワイガニ、三重が誇る松阪牛</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                名峰と清流がもたらす極上の水が育てた、地域色豊かな日本最高峰の特産グルメを満喫。
              </p>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>楽天ふるさと納税宿泊クーポンで自然豊かな渓谷リゾート・温泉宿をお得に予約</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                トレッキングや絶景巡りの旅でも、寄付金額に応じた最大30%オフの即時割引クーポンでスマートにお得ステイ。
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
                        {h.hotelSpecial || '日本三大美肌の湯のとろとろ泉質、大自然の原生林に抱かれた秘湯の一軒宿、エメラルドグリーンに輝く渓谷美、轟音とともに飛沫をあげる日本三大名瀑を巡る極上の拠点。四季折々の美食と名湯でお寛ぎください。'}
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
            あわせて読みたい日本の名湯・秘境・絶景特集
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            
            <Link href="/furusato-tax-three-great-stalactite-caves-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三大鍾乳洞＆地底探検・大自然パノラマ宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                あぶくま洞・玉泉洞・井倉洞。
              </p>
            </Link>
            
            <Link href="/furusato-tax-three-major-karst-highland-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三大カルスト＆天空の白銀パノラマ宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                四国カルスト・秋吉台・平尾台。
              </p>
            </Link>
            
            <Link href="/furusato-tax-three-great-waterfalls-resort-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三大名瀑＆豪快な滝見リゾート宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                華厳の滝・那智の滝・袋田の滝。
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
