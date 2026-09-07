import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '日本三大仏＆歴史古都の門前町・国宝仏閣と伝統会席宿×ふるさと納税完全ガイド【2026年最新】奈良・鎌倉・高岡大仏',
  description: '千年の祈りと威風堂々の尊顔！奈良「東大寺盧舎那仏」世界最大の木造建築と大仏殿・若草山麓ホテルニューわかさ、神奈川「鎌倉大仏」国宝・青空の下に鎮座する高徳院と湘南フレンチ鎌倉パークホテル、富山「高岡大仏」銅器の町が誇る日本一の美男仏とホテルクラウンヒルズ高岡駅前。日本三大仏の歴史ロマンと門前町文化を楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
  keywords: '日本三大仏・歴史古都特集, 楽天ふるさと納税, 温泉宿, ふるさと納税 旅行, 高級旅館, ホテル予約, 2026年旅行',
  openGraph: {
    title: '日本三大仏＆歴史古都の門前町・国宝仏閣と伝統会席宿×ふるさと納税完全ガイド【2026年最新】奈良・鎌倉・高岡大仏',
    description: '千年の祈りと威風堂々の尊顔！奈良「東大寺盧舎那仏」世界最大の木造建築と大仏殿・若草山麓ホテルニューわかさ、神奈川「鎌倉大仏」国宝・青空の下に鎮座する高徳院と湘南フレンチ鎌倉パークホテル、富山「高岡大仏」銅器の町が誇る日本一の美男仏とホテルクラウンヒルズ高岡駅前。日本三大仏の歴史ロマンと門前町文化を楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    type: 'article',
    url: 'https://croud-travel.pages.dev/furusato-tax-three-great-buddhas-heritage-stay',
    siteName: 'トラベルポータル',
  },
};

export default function Page() {
  const officialAffUrl = 'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F';

  const hotels = [
  {
    "hotelNo": 8692,
    "hotelName": "ホテルニューわかさ",
    "hotelKanaName": "にゅーわかさ",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D8692",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D8692%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D8692",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D8692",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/8692/8692.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/8692.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/8692/8692_rm.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/8692/8692map.gif",
    "reviewCount": 681,
    "reviewAverage": 4.56,
    "userReview": "車椅子でも安心、親切な対応で良い思い出に親子三世代で宿泊させていただきました。高齢者車椅子利用でしたが、とても親切に対応していただき、良き思い出になりました。立地も良く迷う事なく東大寺や奈良公園ま…　2026-09-02 01:19:25投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=8692\" class=\"3click\">つづきはこちら</a>",
    "hotelMinCharge": 11000,
    "address1": "奈良県",
    "address2": "奈良市北半田東町1",
    "telephoneNo": "0742-23-5858",
    "access": "車：名神高速道路京都南ICより60分　電車：近鉄奈良線近鉄奈良駅",
    "parkingInformation": "有り　車40台バス6台　15時から１０時無料（時間外有料）",
    "nearestStation": "近鉄奈良",
    "hotelSpecial": "奈良公園・東大寺まで徒歩5分！世界遺産を見渡せる屋上庭園や華やかな懐石料理で奈良をたっぷり味わえる宿",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D8692",
    "featureKey": "buddha_nara",
    "featureLabel": "奈良県奈良市ふるさと納税・世界最大級の木造建築と鎮護国家の象徴「東大寺盧舎那仏（奈良の大仏）」若草山麓ホテルニューわかさ",
    "themeTitle": "奈良県奈良市ふるさと納税：東大寺大仏殿まで徒歩5分・屋上テラスから若草山と大仏殿を望む「ホテルニューわかさ」",
    "themeDesc": "東大寺の参道近くに位置し、奈良の大仏参拝に最高の立地を誇る老舗湯宿。屋上ラウンジからは大仏殿の屋根や若草山を一望でき、古代檜の浴槽や露天風呂で寛ぎながら、大和牛や奈良の旬の食材を贅沢に使った創作会席を堪能できます。",
    "revAvg": "4.6",
    "minCharge": "11,000"
  },
  {
    "hotelNo": 31648,
    "hotelName": "鎌倉パークホテル",
    "hotelKanaName": "かまくら　ぱーくほてる",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D31648",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D31648%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D31648",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D31648",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/31648/31648.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/31648.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/31648/31648_t.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/31648/31648map.gif",
    "reviewCount": 1317,
    "reviewAverage": 4.43,
    "userReview": "2回目の利用だが今回は残念な点が多かった2回目の利用。夏休みに家族で利用。部屋に入った際、トイレなのか非常に匂った。洋食の夕食はイマイチだった。ここは恐らく和食の方が腕がいい。今回は残念な点が多か…　2026-09-05 17:36:40投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=31648\" class=\"3click\">つづきはこちら</a>",
    "hotelMinCharge": 9350,
    "address1": "神奈川県",
    "address2": "鎌倉市坂ノ下33-6",
    "telephoneNo": "0467-25-5121",
    "access": "ＪＲ鎌倉駅よりタクシーにて１０～１５分(平常時）。江ノ電長谷駅より徒歩約１３分。",
    "parkingInformation": "有 ６０台。チェックイン日は午前中から無料、チェックアウト後は１４時まで無料、それ以降は有料です。",
    "nearestStation": "鎌倉",
    "hotelSpecial": "ヨーロッパのインテリアが配された落ち着いた雰囲気のアーバンリゾートホテル。大仏などの観光にも便利。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D31648",
    "featureKey": "buddha_kamakura",
    "featureLabel": "神奈川県鎌倉市ふるさと納税・国宝にして青空の下に佇む美しき尊顔「鎌倉大仏（高徳院）」湘南オーシャンビュー鎌倉パークホテル",
    "themeTitle": "神奈川県鎌倉市ふるさと納税：鎌倉大仏（高徳院）と長谷寺へ好アクセス・湘南の海を望む「鎌倉パークホテル」",
    "themeDesc": "由比ヶ浜海岸のすぐそばに佇み、鎌倉大仏のある長谷エリアへの散策に最適な上質リゾートホテル。全室相模湾を望むゆったりとした客室で寛ぎ、朝獲れの鎌倉野菜や相模湾の新鮮魚介、三浦牛を取り入れた本格フレンチディナーを楽しめます。",
    "revAvg": "4.4",
    "minCharge": "9,350"
  },
  {
    "hotelNo": 146844,
    "hotelName": "ホテルクラウンヒルズ高岡駅前（ＢＢＨホテルグループ）",
    "hotelKanaName": "くらうんひるずたかおかえきまえ　びーびーえいちほてるぐるーぷ",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D146844",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D146844%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D146844",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D146844",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/146844/146844.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/146844.jpg",
    "roomImageUrl": "",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/146844/146844map.gif",
    "reviewCount": 798,
    "reviewAverage": 3.95,
    "userReview": "至れり尽くせりのサービスで最高でしたウェルカムドリンクやお茶漬けサービス等至れり尽くせりでサイコーのビジホでした。今回は車でしたが、駅近で列車旅にも良いかもしれません。他の画像やクチコミの詳細…　2026-08-31 22:20:17投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=146844\" class=\"3click\">つづきはこちら</a>",
    "hotelMinCharge": 3600,
    "address1": "富山県",
    "address2": "高岡市駅南5-3-3",
    "telephoneNo": "050-1807-0442",
    "access": "高岡駅瑞龍寺口より徒歩１分/新高岡駅よりバス8分/富山空港より車タクシーで約40分/高岡インターチェンジより10分",
    "parkingInformation": "ホテル駐車場１泊５００円（先着順）満車の際は近隣コインパーキング（３００円～）へのご案内となります。",
    "nearestStation": "高岡",
    "hotelSpecial": "高岡駅から徒歩１分！大浴場、夕食、アルコールサービス等無料サービス充実！観光・ビジネスにオススメ♪",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D146844",
    "featureKey": "buddha_takaoka",
    "featureLabel": "富山県高岡市ふるさと納税・銅器の町が誇る日本一の美男大仏「高岡大仏」鋳物文化と高岡マンテンホテル駅前",
    "themeTitle": "富山県高岡市ふるさと納税：日本一の美男仏・高岡大仏観光の拠点「ホテルクラウンヒルズ高岡駅前」",
    "themeDesc": "高岡駅北口から徒歩1分、高岡大仏や金屋町の鋳物小路への散策拠点として抜群のロケーション。最上階展望風呂やサウナで旅の疲れを癒やし、夜は高岡市街の名店で富山湾の新鮮な海の幸や富山ブラックラーメン、地酒巡りを満喫できます。",
    "revAvg": "4.0",
    "minCharge": "3,600"
  }
];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* パンくずリスト */}
      <nav className="bg-white border-b border-slate-200 py-3 px-4 text-xs text-slate-500">
        <div className="max-w-5xl mx-auto flex items-center space-x-2">
          <Link href="/" className="hover:text-emerald-600 transition">ホーム</Link>
          <span>&gt;</span>
          <span className="text-slate-700 font-medium">日本三大仏＆歴史古都・門前町の名宿×ふるさと納税ガイド</span>
        </div>
      </nav>

      {/* ヒーローヘッダー */}
      <header className="relative bg-gradient-to-br from-emerald-950 via-slate-900 to-teal-950 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-block bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-semibold px-3 py-1 rounded-full mb-2">
            日本三大仏・歴史古都特集
          </div>
          <h1 className="text-2xl md:text-4xl font-bold leading-tight tracking-tight">
            日本三大仏＆歴史古都・門前町の名宿×ふるさと納税ガイド
          </h1>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-3xl mx-auto pt-2">
            国家の安寧や人々の救済を願って建立され、日本の仏教美術・鋳造技術の頂点を極めた「日本三大仏」――聖武天皇の発願により国家事業として鋳造され世界遺産東大寺の大仏殿に鎮座する奈良の「奈良の大仏（盧舎那仏）」、津波で大仏殿が流失して以来六百年以上にわたり青空と潮風の中に端座する神奈川の「鎌倉大仏（高徳院 阿弥陀如来坐像）」、そして加賀前田家ゆかりの鋳物産業の粋を集め与謝野晶子をして「美男におわす」と詠ましめた富山の「高岡大仏」。見上げるほど巨大な仏身の前に立つと、時代を超えて人々が捧げてきた祈りの深さに胸が打たれます。古都の静かな小路を歩き、老舗宿で大和牛・相模湾の地魚・富山湾のキトキト鮮魚を味わう知的な旅を楽天ふるさと納税でお楽しみください。
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
            青空を背に佇む優しい眼差し、千年の歴史が刻む圧倒的な威厳。日本の美意識に触れる
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>国宝・重文の圧倒的なスケール！悠久の歴史が息づく三大仏の尊顔を拝観</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                早朝の静寂に包まれた境内や夕暮れ時の古都散策など、混雑を避けた特別な参拝時間を満喫。
              </p>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>大和牛＆大和野菜会席、鎌倉野菜＆湘南しらすフレンチ、富山湾寒ブリ＆白えび</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                古都と城下町が育んだ伝統の味覚と、海・山の幸が織りなす極上グルメを堪能。
              </p>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>楽天ふるさと納税宿泊クーポンで古都の老舗旅館・上質シティホテルをお得に予約</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                一人旅や夫婦の文化財巡りでも、寄付金額に応じた最大30%オフの即時割引クーポンでスマートにお得ステイ。
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
                        {h.hotelSpecial || '日本三大名水の清冽な雫、日本三大仏の荘厳な歴史美、日本三大松原の白砂青松パノラマ、日本三大美林清流渓谷のエメラルドブルーを巡る極上の拠点。四季折々の美食と名湯でお寛ぎください。'}
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
            あわせて読みたい日本の名水・古都仏閣・名松原特集
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            
            <Link href="/furusato-tax-three-great-unusual-bridges-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三大奇橋＆渓谷美・歴史ロマンの名宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                錦帯橋・猿橋・日光神橋。
              </p>
            </Link>
            
            <Link href="/furusato-tax-three-great-inari-shrines-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三大稲荷＆商売繁盛・開運祈願の名宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                伏見・豊川・祐徳稲荷。
              </p>
            </Link>
            
            <Link href="/furusato-tax-three-great-daimyo-gardens-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三大名園＆大名庭園風雅宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                偕楽園・兼六園・後楽園。
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
