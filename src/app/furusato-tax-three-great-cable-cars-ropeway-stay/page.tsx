import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '日本三大山岳ロープウェイ＆雲上パノラマ・絶景空中散歩のリゾート名宿×ふるさと納税完全ガイド【2026年最新】千畳敷・立山・箱根駒ヶ岳',
  description: '天空の世界へと一気に誘う大迫力のロープウェイ旅！長野「中央アルプス駒ヶ岳ロープウェイ」標高2,612m千畳敷カールと駒ヶ根高原リゾートリンクス、富山「立山ロープウェイ」支柱が1本もないワンスパン絶景と日本最高所のホテル立山、神奈川「箱根駒ヶ岳ロープウェイ」芦ノ湖と富士山の大パノラマと箱根星のあかり。雲上のアルプス絶景と名湯温泉、高原フレンチを楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
  keywords: '山岳ロープウェイ・雲上パノラマ特集, 楽天ふるさと納税, 温泉宿, ふるさと納税 旅行, 高級旅館, ホテル予約, 2026年旅行',
  openGraph: {
    title: '日本三大山岳ロープウェイ＆雲上パノラマ・絶景空中散歩のリゾート名宿×ふるさと納税完全ガイド【2026年最新】千畳敷・立山・箱根駒ヶ岳',
    description: '天空の世界へと一気に誘う大迫力のロープウェイ旅！長野「中央アルプス駒ヶ岳ロープウェイ」標高2,612m千畳敷カールと駒ヶ根高原リゾートリンクス、富山「立山ロープウェイ」支柱が1本もないワンスパン絶景と日本最高所のホテル立山、神奈川「箱根駒ヶ岳ロープウェイ」芦ノ湖と富士山の大パノラマと箱根星のあかり。雲上のアルプス絶景と名湯温泉、高原フレンチを楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    type: 'article',
    url: 'https://croud-travel.pages.dev/furusato-tax-three-great-cable-cars-ropeway-stay',
    siteName: 'トラベルポータル',
  },
};

export default function Page() {
  const officialAffUrl = 'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F';

  const hotels = [
  {
    "hotelNo": 69254,
    "hotelName": "早太郎温泉　駒ヶ根高原リゾートリンクス",
    "hotelKanaName": "はやたろうおんせん　こまがねこうげんりぞーとりんくす",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D69254",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D69254%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D69254",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D69254",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/69254/69254.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/69254.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/69254/69254_g.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/69254/69254map.gif",
    "reviewCount": 1098,
    "reviewAverage": 4.25,
    "userReview": "食事は美味しく満足、隣の音が気になる食事は美味しく満足しました部屋の壁が薄いのか、隣の声、音が聞こえるので自分達も気を使ったクチコミの詳細はこちらから　https://review.tra…",
    "hotelMinCharge": 13800,
    "address1": "長野県",
    "address2": "駒ヶ根市赤穂5-1086",
    "telephoneNo": "0265-82-8511",
    "access": "中央道駒ヶ根ICより車で３分 / JR飯田線駒ヶ根駅よりバス15分　/　左記まで無料送迎有り　10:00～17:00",
    "parkingInformation": "有り　６０台　無料　予約不要",
    "nearestStation": "",
    "hotelSpecial": "自然に温泉にあっぷる豚に！！大人のリゾートホテルで寛ぎのひとときをどうぞ★",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F69254%2F69254.html",
    "label": "長野県駒ヶ根市ふるさと納税・千畳敷カールと富士山・アルプス大パノラマ「駒ヶ岳ロープウェイ」駒ヶ根高原リゾートリンクス",
    "themeTitle": "長野県駒ヶ根市ふるさと納税：駒ヶ岳ロープウェイ山麓駅へのアクセス至近・高原の欧風美食リゾート「早太郎温泉 駒ヶ根高原リゾートリンクス」",
    "themeDesc": "中央アルプス駒ヶ岳ロープウェイの玄関口に位置し、大自然の静寂に抱かれた森のリゾート。早太郎温泉の美肌の湯に浸かり、地元の信州牛や駒ヶ根の新鮮野菜を取り入れた本格フレンチビュッフェ・コース料理を心ゆくまで堪能できます。",
    "revAvg": "4.3",
    "minCharge": "13,800"
  },
  {
    "hotelNo": 25126,
    "hotelName": "ホテル立山",
    "hotelKanaName": "たてやま",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D25126",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D25126%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D25126",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D25126",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/25126/25126.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/25126.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/25126/25126_food2.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/25126/25126map.gif",
    "reviewCount": 293,
    "reviewAverage": 4.6,
    "userReview": "",
    "hotelMinCharge": 0,
    "address1": "富山県",
    "address2": "中新川郡立山町芦峅寺室堂",
    "telephoneNo": "076-463-3345",
    "access": "アルペンルート室堂駅下車、立山高原バス、立山トンネルトロリーバスに併設",
    "parkingInformation": "なし",
    "nearestStation": "立山",
    "hotelSpecial": "星に一番近いリゾート。標高２４５０ｍ、立山黒部アルペンルートの中心地室堂に位置する日本最高所のホテル",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F25126%2F25126.html",
    "label": "富山県立山町ふるさと納税・日本最高所の雲上リゾート・大観峰「立山ロープウェイ」立山ステイ",
    "themeTitle": "富山県立山町ふるさと納税：立山黒部アルペンルート・日本最高所の雲上リゾート「ホテル立山」",
    "themeDesc": "標高2,450m・室堂平に位置し、立山ロープウェイや黒部ダム散策の拠点として名高い山岳リゾートホテル。天候が合えば部屋の窓から夕日や雲海、星空を眺めることができ、富山湾直送の海の幸や山菜をふんだんに使った贅沢な和洋会席が自慢です。",
    "revAvg": "4.6",
    "minCharge": "8,000"
  },
  {
    "hotelNo": 147481,
    "hotelName": "絶景の癒しの湯宿　箱根　星のあかり",
    "hotelKanaName": "ぜっけいのいやしのゆやど　はこね　ほしのあかり",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D147481",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D147481%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D147481",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D147481",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/147481/147481.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/147481.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/147481/147481_kan1.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/147481/147481map.gif",
    "reviewCount": 651,
    "reviewAverage": 4.48,
    "userReview": "露天風呂と食事が最高、必ずリピートします。今月27日に宿泊させていただきました。客室露天風呂(温泉)で食事も美味しく、リーズナブルな値段で宿泊できることに感動しました。特に露天風呂からの景…",
    "hotelMinCharge": 24035,
    "address1": "神奈川県",
    "address2": "足柄下郡箱根町仙石原1245-432",
    "telephoneNo": "0288-53-6050",
    "access": "箱根湯本駅から箱根登山バスにて約３０分、箱根カントリー入口下車（バス停からは送迎有り・要予約）",
    "parkingInformation": "有り　１４台　無料　予約不要",
    "nearestStation": "箱根湯本",
    "hotelSpecial": "温かみのあるおもてなしと絶景に心癒される湯宿。２０１４年７月１２日オープン。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F147481%2F147481.html",
    "label": "神奈川県箱根町ふるさと納税・富士山と芦ノ湖を眼下に望む「箱根駒ヶ岳ロープウェイ」箱根星のあかり",
    "themeTitle": "神奈川県箱根町ふるさと納税：芦ノ湖駒ヶ岳ロープウェイ至近・全客室露天風呂から箱根連山一望「絶景の癒しの湯宿 箱根 星のあかり」",
    "themeDesc": "箱根仙石原・強羅の高台に位置し、箱根外輪山を見渡す絶景の露天風呂を備えた大人の隠れ宿。箱根駒ヶ岳ロープウェイでの芦ノ湖散策の後に、弱食塩泉と美肌の白濁湯の2種類の温泉を楽しめ、相模湾の地魚やブランド牛の会席料理が好評です。",
    "revAvg": "4.5",
    "minCharge": "24,035"
  }
];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* パンくずリスト */}
      <nav className="bg-white border-b border-slate-200 py-3 px-4 text-xs text-slate-500">
        <div className="max-w-5xl mx-auto flex items-center space-x-2">
          <Link href="/" className="hover:text-emerald-600 transition">ホーム</Link>
          <span>&gt;</span>
          <span className="text-slate-700 font-medium">日本三大山岳ロープウェイ＆雲上パノラマ・絶景リゾート×ふるさと納税ガイド</span>
        </div>
      </nav>

      {/* ヒーローヘッダー */}
      <header className="relative bg-gradient-to-br from-emerald-950 via-slate-900 to-teal-950 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-block bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-semibold px-3 py-1 rounded-full mb-2">
            山岳ロープウェイ・雲上パノラマ特集
          </div>
          <h1 className="text-2xl md:text-4xl font-bold leading-tight tracking-tight">
            日本三大山岳ロープウェイ＆雲上パノラマ・絶景リゾート×ふるさと納税ガイド
          </h1>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-3xl mx-auto pt-2">
            高低差数百メートルを一気に昇り、四季折々の絶壁や高山植物、満天の星空が広がる別天地へと案内してくれる「日本の絶景山岳ロープウェイ」――日本最高の高低差（950m）を誇り氷河地形の千畳敷カールと富士山・南アルプス連峰を望む長野の「中央アルプス駒ヶ岳ロープウェイ」、景観保護のため支柱を1本も設けないワンスパン方式として日本最長を誇り黒部湖を眼下に見下ろす富山の「立山ロープウェイ」、そして芦ノ湖畔から箱根最高峰の神山・富士山と相模湾の全景を一望する神奈川の「箱根 駒ヶ岳ロープウェイ」。澄んだ空気に包まれる雲上ステイや温泉露天風呂、地元牛ステーキディナーを満喫する爽快な旅を楽天ふるさと納税でお楽しみください。
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
        {/* リードセクション */}
        <section className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200/80 space-y-4">
          <h2 className="text-xl md:text-2xl font-bold text-slate-900 border-l-4 border-emerald-500 pl-3">
            空へと駆け上がるゴンドラ。手の届きそうな白雲と大山脈の絶景リゾート
          </h2>
          <p className="text-slate-600 leading-relaxed text-sm md:text-base">
            高低差数百メートルを一気に昇り、四季折々の絶壁や高山植物、満天の星空が広がる別天地へと案内してくれる「日本の絶景山岳ロープウェイ」――日本最高の高低差（950m）を誇り氷河地形の千畳敷カールと富士山・南アルプス連峰を望む長野の「中央アルプス駒ヶ岳ロープウェイ」、景観保護のため支柱を1本も設けないワンスパン方式として日本最長を誇り黒部湖を眼下に見下ろす富山の「立山ロープウェイ」、そして芦ノ湖畔から箱根最高峰の神山・富士山と相模湾の全景を一望する神奈川の「箱根 駒ヶ岳ロープウェイ」。澄んだ空気に包まれる雲上ステイや温泉露天風呂、地元牛ステーキディナーを満喫する爽快な旅を楽天ふるさと納税でお楽しみください。
          </p>
        </section>

        {/* メリット3選 */}
        <section className="space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
              ふるさと納税×山岳ロープウェイ雲上パノラマ 3つのメリット
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
                  朝一番のロープウェイで混雑知らず！雲海や朝日に染まるアルプス・富士山を特等席で体感
                </h3>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                  山麓や雲上の宿に宿泊するからこそ、一般観光客が訪れる前の澄んだ時間帯に大自然を満喫。
                </p>
              </div>
            </div>
            <div key="1" className="bg-white rounded-xl p-6 shadow-sm border border-slate-200/80 flex flex-col justify-between hover:border-emerald-300 transition duration-200">
              <div className="space-y-3">
                <span className="inline-block w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 font-bold text-center leading-8 text-sm">
                  02
                </span>
                <h3 className="font-bold text-base text-slate-900 leading-snug">
                  信州牛ステーキ・富山湾の白えびや紅ズワイガニ、相模湾の鮮魚や箱根山麓豚の美食会席
                </h3>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                  標高差が生み出す清らかな伏流水と、山海の新鮮食材を活かした高原リゾートディナーを堪能。
                </p>
              </div>
            </div>
            <div key="2" className="bg-white rounded-xl p-6 shadow-sm border border-slate-200/80 flex flex-col justify-between hover:border-emerald-300 transition duration-200">
              <div className="space-y-3">
                <span className="inline-block w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 font-bold text-center leading-8 text-sm">
                  03
                </span>
                <h3 className="font-bold text-base text-slate-900 leading-snug">
                  楽天ふるさと納税宿泊クーポンで山岳リゾートホテルや温泉展望宿をお得に予約
                </h3>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                  登山や紅葉ドライブ、記念日旅行でも、寄付金額に応じた最大30%オフの即時割引クーポンでスマートにお得ステイ。
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
            
            <Link href="/furusato-tax-scenic-drives-highland-resort-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本百名道＆高原パノラマドライブ名宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                ビーナスライン・志賀草津・伊吹山。
              </p>
            </Link>
            <Link href="/furusato-tax-three-great-karsts-highland-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三大カルスト＆雲海高原リゾート名宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                秋吉台・四国カルスト・平尾台。
              </p>
            </Link>
            <Link href="/furusato-tax-three-great-night-views-romantic-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三大夜景＆極上パノラマビュー名宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                函館・摩耶山・稲佐山。
              </p>
            </Link>
          </div>
        </section>
      
        {/* Model Course Section */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200/80">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              【1泊2日】おすすめモデルコース＆旅の過ごし方
            </h2>
          </div>
          <p className="text-stone-600 mb-8 text-sm md:text-base leading-relaxed">
            本特集の魅力を最大限に満喫するための理想的な1泊2日旅程モデルプランです。周辺の観光名所やグルメスポットとあわせて、無理のないスケジュールで最高の旅をお楽しみください。
          </p>
          <div className="space-y-6">
            <div className="border-l-2 border-amber-500 pl-4 md:pl-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="bg-amber-500 text-white text-xs font-bold px-2.5 py-1 rounded">1日目</span>
                <h3 className="font-bold text-stone-900 text-base md:text-lg">出発〜チェックイン・夕食と名湯を満喫</h3>
              </div>
              <ul className="text-xs md:text-sm text-stone-600 space-y-2 leading-relaxed">
                <li>・<strong className="text-stone-800">13:30〜</strong> 現地到着後、周辺の散策や名物カフェ・観光スポットをのんびり観光。</li>
                <li>・<strong className="text-stone-800">15:00〜</strong> お宿へチェックイン。ウェルカムドリンクや特製スイーツを楽しみながら客室で一息。</li>
                <li>・<strong className="text-stone-800">16:30〜</strong> 夕暮れ時の露天風呂・サウナで日頃の疲れを癒やす極上の湯浴み。</li>
                <li>・<strong className="text-stone-800">18:30〜</strong> 地元厳選食材をふんだんに使用した旬の会席料理やディナーを堪能。</li>
                <li>・<strong className="text-stone-800">21:00〜</strong> 星空を仰ぐ夜の露天風呂やラウンジで贅沢な大人の時間を。</li>
              </ul>
            </div>
            <div className="border-l-2 border-teal-500 pl-4 md:pl-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="bg-teal-600 text-white text-xs font-bold px-2.5 py-1 rounded">2日目</span>
                <h3 className="font-bold text-stone-900 text-base md:text-lg">朝風呂〜朝食・お土産選びと帰路へ</h3>
              </div>
              <ul className="text-xs md:text-sm text-stone-600 space-y-2 leading-relaxed">
                <li>・<strong className="text-stone-800">07:00〜</strong> 朝の清々しい空気の中で目覚めの朝風呂・サウナ。</li>
                <li>・<strong className="text-stone-800">08:00〜</strong> 炊きたて地元産ごはんと郷土の味覚が並ぶこだわりの朝食。</li>
                <li>・<strong className="text-stone-800">10:00〜</strong> チェックアウト後、近隣の道の駅や特産品店でお土産選び。</li>
                <li>・<strong className="text-stone-800">12:00〜</strong> 地元で愛される名物ランチを堪能して、大満足の帰路へ。</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-stone-50 rounded-2xl p-6 md:p-10 border border-stone-200/80">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              よくある質問（FAQ）と旅のノウハウ
            </h2>
          </div>
          <div className="space-y-4">
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 予約に最適な時期やタイミングはいつ頃ですか？</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 露天風呂付き客室や特選料理プランは数ヶ月前から予約が埋まりやすいため、旅行日程が決まり次第2〜3ヶ月前の早期予約が最も確実です。楽天トラベルの限定クーポンや早期割引プランを活用するとお得に宿泊できます。
              </p>
            </details>
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 車でのアクセスと公共交通機関のどちらが便利ですか？</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 多くの主要旅館・リゾートホテルは最寄り駅から無料送迎バスを運行しています。周辺の観光名所や景勝地を巡る場合は、最寄り駅前でレンタカーを借りると移動がスムーズでおすすめです。
              </p>
            </details>
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 食事のアレルギー対応や部屋食の指定は可能ですか？</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 多くの宿泊施設で事前連絡によりアレルギー対応が可能です。部屋食や個室食事処プランはプラン予約時に指定するか、予約時の備考欄で宿へ相談することをおすすめします。
              </p>
            </details>
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 一人旅や子連れファミリーでの宿泊にも向いていますか？</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. はい。一人旅歓迎プランや、家族向けの広い和洋室・貸切風呂完備の宿を厳選しています。プラン詳細の受入条件をご確認の上、安心してお申し込みください。
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
                href="/prefectures/fukui"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                福井県の宿・温泉
              </Link>
              <Link
                href="/prefectures/chiba"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                千葉県の宿・温泉
              </Link>
              <Link
                href="/prefectures/mie"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                三重県の宿・温泉
              </Link>
              <Link
                href="/prefectures/nara"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                奈良県の宿・温泉
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
    </div>
  );
}
