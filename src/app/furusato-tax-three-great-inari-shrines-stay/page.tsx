import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '日本三大稲荷＆千本鳥居・商売繁盛開運祈願と門前町グルメ宿×ふるさと納税完全ガイド【2026年最新】伏見・豊川・祐徳稲荷',
  description: '朱塗りの鳥居が連なる神域と開運の杜！京都「伏見稲荷大社」千本鳥居の幻想美とアーバンホテル京都、愛知「豊川稲荷」妙厳寺の千体狐・霊狐塚と豊川グランドホテル、佐賀鹿島「祐徳稲荷神社」鎮西日光と称される極彩色の楼門と有明海鮮・嬉野温泉和多屋別荘。日本三大稲荷の商売繁盛祈願を楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
  keywords: '日本三大稲荷・開運商売繁盛特集, 楽天ふるさと納税, 温泉宿, ふるさと納税 旅行, 高級旅館, ホテル予約, 2026年旅行',
  openGraph: {
    title: '日本三大稲荷＆千本鳥居・商売繁盛開運祈願と門前町グルメ宿×ふるさと納税完全ガイド【2026年最新】伏見・豊川・祐徳稲荷',
    description: '朱塗りの鳥居が連なる神域と開運の杜！京都「伏見稲荷大社」千本鳥居の幻想美とアーバンホテル京都、愛知「豊川稲荷」妙厳寺の千体狐・霊狐塚と豊川グランドホテル、佐賀鹿島「祐徳稲荷神社」鎮西日光と称される極彩色の楼門と有明海鮮・嬉野温泉和多屋別荘。日本三大稲荷の商売繁盛祈願を楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    type: 'article',
    url: 'https://croud-travel.pages.dev/furusato-tax-three-great-inari-shrines-stay',
    siteName: 'トラベルポータル',
  },
};

export default function Page() {
  const officialAffUrl = 'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F';

  const hotels = [
  {
    "hotelNo": 1445,
    "hotelName": "アーバンホテル京都",
    "hotelKanaName": "あーばんほてる　きょうと",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D1445",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D1445%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D1445",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D1445",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/1445/1445.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/1445.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/1445/1445_room.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/1445/1445map.gif",
    "reviewCount": 4469,
    "reviewAverage": 4.01,
    "userReview": "部屋は狭いけれど価格が安く大満足部屋は狭かったですが、何といっても安かったので、大満足です。クチコミの詳細はこちらから　https://review.travel.rakuten.co.jp/…　 ",
    "hotelMinCharge": 3740,
    "address1": "京都府",
    "address2": "京都市伏見区深草西浦町4-59",
    "telephoneNo": "075-647-0606",
    "access": "車：京都南ＩＣ5分、京都駅10分　電車：JR稲荷10分、京阪龍谷大前深草5分、地下鉄くいな橋12分　バス龍谷大学前3分",
    "parkingInformation": "【普通車100台収容】普通車￥1500／滞在　中型￥3000／泊　大型￥4000／泊",
    "nearestStation": "京都",
    "hotelSpecial": "伏見稲荷徒歩約10分／Wi-Fi完備／Ｐ有（先着順・大型要予約）／全室禁煙（1階喫煙スペースあり）",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D1445",
    "featureKey": "inari_fushimi",
    "featureLabel": "京都府京都市伏見区ふるさと納税・千本鳥居が連なる全国稲荷神社の総本宮「伏見稲荷大社」伏見の銘酒とアーバンホテル京都",
    "themeTitle": "京都府京都市伏見区ふるさと納税：千本鳥居の伏見稲荷大社へ好アクセス「アーバンホテル京都」",
    "themeDesc": "全国稲荷の総本宮・伏見稲荷大社まで電車や徒歩圏内に位置するスタイリッシュホテル。朝一番の混雑前の千本鳥居参拝の拠点として最適で、観光やビジネスの疲れを清潔な客室で癒やし、伏見十石舟や伏見酒蔵巡りのお得な旅を楽しめます。",
    "revAvg": "4.0",
    "minCharge": "3,740"
  },
  {
    "hotelNo": 151304,
    "hotelName": "豊川グランドホテル",
    "hotelKanaName": "とよかわぐらんどほてる",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D151304",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D151304%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D151304",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D151304",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/151304/151304.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/151304.jpg",
    "roomImageUrl": "",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/151304/151304map.gif",
    "reviewCount": 25,
    "reviewAverage": 3,
    "userReview": "",
    "hotelMinCharge": 4180,
    "address1": "愛知県",
    "address2": "豊川市市田町東堤上1-66",
    "telephoneNo": "0533-89-6161",
    "access": "東名豊川ＩＣから約１５分・音羽蒲郡ＩＣから約２０分。　名鉄本線　国府駅よりお車。",
    "parkingInformation": "有り　４０台　無料　予約不要",
    "nearestStation": "国府（愛知）",
    "hotelSpecial": "東名豊川ＩＣ・音羽蒲郡ＩＣから近く、豊橋・田原・蒲郡・新城への移動は短時間。無料駐車場完備。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D151304",
    "featureKey": "inari_toyokawa",
    "featureLabel": "愛知県豊川市ふるさと納税・商売繁盛と霊狐塚の千体狐「豊川稲荷」門前町名物いなり寿司と快適ホテルステイ",
    "themeTitle": "愛知県豊川市ふるさと納税：豊川稲荷参拝の玄関口・門前町いなり寿司巡りの拠点「豊川グランドホテル」",
    "themeDesc": "商売繁盛の神仏として名高い豊川稲荷（妙厳寺）の表参道近くに位置する老舗ホテル。霊狐塚の圧倒的なパワーを体感した後は、門前町の多彩ないなり寿司食べ歩きや三河湾の海の幸、三河ポークの郷土グルメを堪能できます。",
    "revAvg": "3.0",
    "minCharge": "4,180"
  },
  {
    "hotelNo": 40527,
    "hotelName": "嬉野温泉　和多屋別荘",
    "hotelKanaName": "うれしのおんせん　わたや　べっそう",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D40527",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D40527%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D40527",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D40527",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/40527/40527.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/40527.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/40527/40527_fu.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/40527/40527map.gif",
    "reviewCount": 1328,
    "reviewAverage": 4.14,
    "userReview": "部屋の臭いと空調の効きが悪く残念予約していた部屋の臭いが我慢出来ずにフロントに連絡し、同価格の部屋に移動させてもらいましたが、ランクダウンした気がします。廊下など空調が効いてなく、暑かったです。…　 ",
    "hotelMinCharge": 9900,
    "address1": "佐賀県",
    "address2": "嬉野市嬉野町下宿乙738",
    "telephoneNo": "0954-42-0210",
    "access": "JR嬉野温泉駅から車で5分/長崎自動車道 嬉野ICより約5分",
    "parkingInformation": "ご宿泊者の方は無料でご利用頂けます。",
    "nearestStation": "武雄温泉",
    "hotelSpecial": "嬉野WELL-BEING「河畔サウナ」「色写経」「創香室」等館内で体験できるアクティビティが充実。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D40527",
    "featureKey": "bihada_ureshino",
    "featureLabel": "佐賀県嬉野市ふるさと納税・日本三大美肌の湯の筆頭「嬉野温泉」重曹泉のぬめりと和多屋別荘",
    "themeTitle": "佐賀県鹿島市・嬉野市ふるさと納税：祐徳稲荷神社参拝の拠点・美肌名湯の老舗「嬉野温泉 和多屋別荘」",
    "themeDesc": "日本三大稲荷の一角・祐徳稲荷神社から車で約25分、日本三大美肌の湯・嬉野温泉を代表する名旅館。豪華絢爛な祐徳稲荷の本殿を参拝した後は、和多屋別荘の重曹泉露天風呂で心身を清め、佐賀牛や名物温泉湯豆腐会席に酔いしれる至福の時間を過ごせます。",
    "revAvg": "4.1",
    "minCharge": "9,900"
  }
];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* パンくずリスト */}
      <nav className="bg-white border-b border-slate-200 py-3 px-4 text-xs text-slate-500">
        <div className="max-w-5xl mx-auto flex items-center space-x-2">
          <Link href="/" className="hover:text-emerald-600 transition">ホーム</Link>
          <span>&gt;</span>
          <span className="text-slate-700 font-medium">日本三大稲荷＆商売繁盛・開運祈願の名宿×ふるさと納税ガイド</span>
        </div>
      </nav>

      {/* ヒーローヘッダー */}
      <header className="relative bg-gradient-to-br from-emerald-950 via-slate-900 to-teal-950 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-block bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-semibold px-3 py-1 rounded-full mb-2">
            日本三大稲荷・開運商売繁盛特集
          </div>
          <h1 className="text-2xl md:text-4xl font-bold leading-tight tracking-tight">
            日本三大稲荷＆商売繁盛・開運祈願の名宿×ふるさと納税ガイド
          </h1>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-3xl mx-auto pt-2">
            五穀豊穣、商売繁盛、家内安全を祈る庶民の信仰のシンボルとして日本全国で愛されてきた「日本三大稲荷」――三万社を超える稲荷神社の総本宮として稲荷山の山頂まで朱色の千本鳥居がトンネルのように続く京都の「伏見稲荷大社」、室町時代開山のお寺（妙厳寺）であり奉納された無数の狐像が並ぶ「霊狐塚」が圧倒的なパワースポットとして知られる愛知の「豊川稲荷」、そして有明海に面する山腹に日光東照宮を思わせる極彩色の本殿が聳え立つ佐賀鹿島の「祐徳稲荷神社」。朱塗りの楼門をくぐり狐の神使に手を合わせれば、日々の迷いが晴れて力強い開運のパワーが湧き上がってきます。門前町名物のいなり寿司やきつねうどん、伏見の日本酒、三河一色産うなぎ、有明海の海の幸を堪能する旅を楽天ふるさと納税でお楽しみください。
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
            幾重にも連なる鮮烈な朱の回廊、狐が守護する神聖な杜。心洗われる大願成就の旅
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>朱塗りの千本鳥居・霊狐塚・懸崖造りの本殿！圧倒的な霊気あふれるパワースポット</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                早朝の静謐な境内の散策や夕暮れ時の灯篭ライトアップなど、厳かな神域で大願成就を祈願。
              </p>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>伏見の銘酒＆京会席、豊川名物いなり寿司＆三河一色うなぎ、有明海竹崎カニ＆佐賀牛</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                門前町の伝統の味覚から地域の最高峰ブランドグルメまで、ご利益旅を彩る美食の数々を満喫。
              </p>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>楽天ふるさと納税宿泊クーポンで門前町近くのホテル・名旅館をお得に予約</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                初詣やビジネスの商売繁盛祈願でも、寄付金額に応じた最大30%オフの即時割引クーポンでスマートにお得ステイ。
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
                        {h.hotelSpecial || '日本三大急潮のうず潮絶景、日本三大車窓の天空パノラマ、日本三大稲荷の商売繁盛祈願、日本三大美林の森林浴アロマを巡る極上の拠点。四季折々の美食と名湯でお寛ぎください。'}
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
            あわせて読みたい日本の名景・急潮・美林特集
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            
            <Link href="/furusato-tax-three-sacred-hachiman-shrines-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三大八幡宮＆開運厄除け宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                宇佐神宮・石清水八幡宮・筥崎宮。
              </p>
            </Link>
            
            <Link href="/furusato-tax-three-great-bihada-onsen-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三大美肌の湯＆とろとろ美肌温泉宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                嬉野・斐乃上・喜連川。
              </p>
            </Link>
            
            <Link href="/furusato-tax-three-great-unusual-bridges-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三大奇橋＆渓谷美・歴史ロマンの名宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                錦帯橋・猿橋・日光神橋。
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
