import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '日本三大美肌の湯＆とろとろ重曹泉・美肌会席宿×ふるさと納税完全ガイド【2026年最新】嬉野・斐乃上・喜連川',
  description: '浸かるだけでつるつる美肌！佐賀「嬉野温泉」ナトリウム炭酸水素塩泉の名湯と和多屋別荘、島根奥出雲「斐乃上温泉」pH9.9驚異の高アルカリ単純温泉と奥出雲町サイクリングターミナル、栃木さくら市「喜連川温泉」硫黄・塩分・重曹が織りなす良質な天然温泉とゴルフ＆ホテルベルセルバ。日本三大美肌の湯の極上湯治を楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
  keywords: '日本三大美肌の湯・極上湯治特集, 楽天ふるさと納税, 温泉宿, ふるさと納税 旅行, 高級旅館, ホテル予約, 2026年旅行',
  openGraph: {
    title: '日本三大美肌の湯＆とろとろ重曹泉・美肌会席宿×ふるさと納税完全ガイド【2026年最新】嬉野・斐乃上・喜連川',
    description: '浸かるだけでつるつる美肌！佐賀「嬉野温泉」ナトリウム炭酸水素塩泉の名湯と和多屋別荘、島根奥出雲「斐乃上温泉」pH9.9驚異の高アルカリ単純温泉と奥出雲町サイクリングターミナル、栃木さくら市「喜連川温泉」硫黄・塩分・重曹が織りなす良質な天然温泉とゴルフ＆ホテルベルセルバ。日本三大美肌の湯の極上湯治を楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    type: 'article',
    url: 'https://croud-travel.pages.dev/furusato-tax-three-great-bihada-onsen-stay',
    siteName: 'トラベルポータル',
  },
};

export default function Page() {
  const officialAffUrl = 'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F';

  const hotels = [
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
    "themeTitle": "佐賀県嬉野市ふるさと納税：重曹泉のぬめりと広大な日本庭園に包まれる老舗名館「和多屋別荘」",
    "themeDesc": "嬉野川沿い二万坪の広大な敷地に佇む名門湯宿。嬉野の誇るナトリウム炭酸水素塩泉を引いた大浴場や露天風呂で心ゆくまで美肌湯を堪能し、嬉野名物とろける温泉湯豆腐や佐賀牛の会席料理に舌鼓を打つ極上のひとときを過ごせます。",
    "revAvg": "4.1",
    "minCharge": "9,900"
  },
  {
    "hotelNo": 180135,
    "hotelName": "奥出雲町サイクリングターミナル",
    "hotelKanaName": "おくいずもちょう　さいくりんぐたーみなる",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D180135",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D180135%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D180135",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D180135",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/180135/180135.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/180135.jpg",
    "roomImageUrl": "",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/180135/180135map.gif",
    "reviewCount": 123,
    "reviewAverage": 4.35,
    "userReview": "食事とコスパは最高、温泉がなくて残念お盆休みのツーリングで宿泊させて頂きました。食事が美味しかったのとコスパは最高でした。お風呂(温泉)が無く共同のシャワーのみだったのがちょっと残念でした。近場の…　 ",
    "hotelMinCharge": 3850,
    "address1": "島根県",
    "address2": "仁多郡奥出雲町三成558-6",
    "telephoneNo": "0854-54-2100",
    "access": "三成駅より徒歩にて約3分",
    "parkingInformation": "無料（大型2台、普通車40台）",
    "nearestStation": "出雲三成",
    "hotelSpecial": "2022年4月リニューアル！神話の里奥出雲の中心にある観光ビジネスの拠点として利用できる宿泊施設",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D180135",
    "featureKey": "bihada_hinokami",
    "featureLabel": "島根県奥出雲町ふるさと納税・船通山麓の秘境に湧くpH9.9のアルカリ単純温泉「斐乃上温泉」奥出雲の山里ステイ",
    "themeTitle": "島根県奥出雲町ふるさと納税：pH9.9の奇跡の美肌泉・船通山の豊かな自然に抱かれた「奥出雲町サイクリングターミナル」",
    "themeDesc": "船通山の麓、斐乃上温泉のすぐそばに位置し、出雲神話の里・奥出雲の大自然を満喫できる快適ステイ。日本屈指の高アルカリ温泉でつるつるの肌を手に入れ、日本一の評価を受けるブランド米「仁多米」と奥出雲の旬の山菜・川魚を存分に味わえます。",
    "revAvg": "4.3",
    "minCharge": "3,850"
  },
  {
    "hotelNo": 40906,
    "hotelName": "喜連川温泉　ゴルフ＆ホテルベルセルバ",
    "hotelKanaName": "きつれがわおんせん　ごるふあんどべるせるば",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D40906",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D40906%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D40906",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D40906",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/40906/40906.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/40906.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/40906/40906_s.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/40906/40906map.gif",
    "reviewCount": 130,
    "reviewAverage": 4.4,
    "userReview": "窓からゴルフ場が見えて大浴場も快適部屋は少し古ぼけてきてはいますが、広さは普通のビジネスホテルよりも若干広め。ただ窓の外は9H、18Hが目の前に見えるのでテンションが上がりますよ!大浴場で…　 ",
    "hotelMinCharge": 7000,
    "address1": "栃木県",
    "address2": "さくら市鹿子畑1408-2",
    "telephoneNo": "028-685-1511",
    "access": "車：東北道・矢板ＩＣから２０分。電車：東北本線・氏家駅からタクシー２０分、送迎有（20名様迄・要予約）",
    "parkingInformation": "有り　１５０台　無料　予約不要",
    "nearestStation": "氏家",
    "hotelSpecial": "トロリとした質感の「美人の湯」が自慢！天然温泉の露天風呂が楽しめる、ゴルフ場に隣接したスパリゾート",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D40906",
    "featureKey": "bihada_kitsuregawa",
    "featureLabel": "栃木県さくら市ふるさと納税・硫黄・塩分・重曹が織りなす良質な泉質「喜連川温泉」美肌の湯と水車の里ステイ",
    "themeTitle": "栃木県さくら市ふるさと納税：硫黄・塩分・重曹のトリプル美肌泉を満喫するリゾート「ゴルフ＆ホテルベルセルバ」",
    "themeDesc": "さくら市の丘陵地に広がり、地下から湧き出る自家源泉の天然温泉が自慢のリゾートホテル。露天風呂からは四季折々の景色を望み、良質な弱アルカリ性温泉で肌を磨いた後は、栃木県産とちぎ和牛や地場産野菜を贅沢に使った料理を堪能できます。",
    "revAvg": "4.4",
    "minCharge": "7,000"
  }
];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* パンくずリスト */}
      <nav className="bg-white border-b border-slate-200 py-3 px-4 text-xs text-slate-500">
        <div className="max-w-5xl mx-auto flex items-center space-x-2">
          <Link href="/" className="hover:text-emerald-600 transition">ホーム</Link>
          <span>&gt;</span>
          <span className="text-slate-700 font-medium">日本三大美肌の湯＆とろとろ美肌温泉宿×ふるさと納税ガイド</span>
        </div>
      </nav>

      {/* ヒーローヘッダー */}
      <header className="relative bg-gradient-to-br from-emerald-950 via-slate-900 to-teal-950 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-block bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-semibold px-3 py-1 rounded-full mb-2">
            日本三大美肌の湯・極上湯治特集
          </div>
          <h1 className="text-2xl md:text-4xl font-bold leading-tight tracking-tight">
            日本三大美肌の湯＆とろとろ美肌温泉宿×ふるさと納税ガイド
          </h1>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-3xl mx-auto pt-2">
            日本各地の温泉の中でも、類まれなる美肌効果と高アルカリ・重曹成分で知られる「日本三大美肌の湯」――佐賀県嬉野市の「嬉野温泉」、島根県奥出雲町の「斐乃上温泉」、そして栃木県さくら市の「喜連川温泉」。嬉野温泉はナトリウム炭酸水素塩泉（重曹泉）が皮脂や分泌物を乳化して洗い流し、名物「温泉湯豆腐」でも有名なとろとろの湯。奥出雲の斐乃上温泉はpH9.9を誇る驚異のアルカリ性単純温泉で、肌の古い角質をやさしく落として滑らかなシルク肌へと導きます。喜連川温泉は塩分・硫黄・炭酸水素塩のトリプル美肌成分が角質ケアから保湿・保温までを完璧に整えます。極上の湯浴みと地元食材を活かした美肌会席を、楽天ふるさと納税の宿泊クーポンでお得に堪能しましょう。
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
            化粧水のように肌に吸い付くトロトロの湯ざわり。日本三大美肌の湯で心身を解き放つ
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>圧倒的なとろみとpH値！浸かるだけで角質ケア＆潤い補給を叶える奇跡の天然泉</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                重曹や高アルカリの成分が肌をやさしくピーリングし、湯上がりにはまるで化粧水を全身に纏ったかのような感動の肌ざわりを実感。
              </p>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>嬉野とろける温泉湯豆腐・奥出雲仁多米＆山陰海鮮・栃木とちぎ和牛会席</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                温泉水で煮込んでとろける嬉野名物湯豆腐や、島根のブランド米・仁多米、栃木の極上牛など滋養あふれる美食を堪能。
              </p>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>楽天ふるさと納税宿泊クーポンで憧れの美肌名湯旅館をお得に予約</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                日常の疲れを癒やす湯治旅や女子旅・記念日旅行でも、寄付額に応じた最大30%オフの即時割引クーポンでスマートにお得ステイ。
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
            
            <Link href="/furusato-tax-three-major-hotsprings-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三大名湯＆極上温泉宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                有馬温泉・草津温泉・下呂温泉。
              </p>
            </Link>
            
            <Link href="/furusato-tax-three-ancient-springs-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三大古湯＆歴史の湯宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                道後温泉・有馬温泉・白浜温泉。
              </p>
            </Link>
            
            <Link href="/furusato-tax-three-great-medicinal-springs-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三大薬湯＆湯治デトックス宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                松之山・有馬・草津。
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
