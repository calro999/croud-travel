import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '日本三大名瀑ヒーリング＆マイナスイオンの清流・名水と豪快な滝見温泉宿×ふるさと納税完全ガイド【2026年最新】白糸の滝・吹割の滝・鮎帰りの滝',
  description: '大自然のマイナスイオンを浴びる名瀑ヒーリング旅！静岡富士宮「白糸の滝」富士山伏流水の絹糸カーテンと休暇村富士、群馬沼田「吹割の滝」東洋のナイアガラと老神温泉仙郷、長崎南島原「鮎帰りの滝」名水百選の清流巨岩と小浜温泉旅館國崎。日本三大名瀑の豪快な水煙と温泉ステイを楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
  keywords: '日本三大名瀑・清流ヒーリング特集, 楽天ふるさと納税, 温泉宿, ふるさと納税 旅行, 高級旅館, ホテル予約, 2026年旅行',
  openGraph: {
    title: '日本三大名瀑ヒーリング＆マイナスイオンの清流・名水と豪快な滝見温泉宿×ふるさと納税完全ガイド【2026年最新】白糸の滝・吹割の滝・鮎帰りの滝',
    description: '大自然のマイナスイオンを浴びる名瀑ヒーリング旅！静岡富士宮「白糸の滝」富士山伏流水の絹糸カーテンと休暇村富士、群馬沼田「吹割の滝」東洋のナイアガラと老神温泉仙郷、長崎南島原「鮎帰りの滝」名水百選の清流巨岩と小浜温泉旅館國崎。日本三大名瀑の豪快な水煙と温泉ステイを楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    type: 'article',
    url: 'https://croud-travel.pages.dev/furusato-tax-three-famous-waterfalls-healing-stay',
    siteName: 'トラベルポータル',
  },
};

export default function Page() {
  const officialAffUrl = 'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F';

  const hotels = [
  {
    "hotelNo": 76861,
    "hotelName": "休暇村富士",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D76861",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D76861%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D76861",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D76861",
    "hotelKanaName": "きゅうかむらふじ",
    "hotelSpecial": "富士山の西麓、田貫湖のほとりに立地する当館ではすべてのお部屋から美しい富士山を望むことができます。",
    "hotelMinCharge": 11000,
    "address1": "静岡県",
    "address2": "富士宮市佐折634",
    "telephoneNo": "0544-54-5200",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/76861/76861.jpg",
    "roomImageUrl": "",
    "reviewCount": 499,
    "reviewAverage": 4.53,
    "userReview": "ひとり旅には少し割高?いつも満足している。ただ、私はひとり旅なので、もう少し値段が安くなればと思う?コテージもしかりです。クチコミの詳細はこちらから　https://review.travel…　 ",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D76861",
    "access": "ＪＲ身延線　富士宮駅より休暇村富士行き路線バスにて約４５分",
    "label": "静岡県富士宮市ふるさと納税・富士山の伏流水が幾筋もの絹糸となって流れ落ちる「白糸の滝」田貫湖畔休暇村富士",
    "themeTitle": "静岡県富士宮市ふるさと納税：白糸の滝から車で約15分・田貫湖畔の富士山展望リゾート「休暇村 富士」",
    "themeDesc": "白糸の滝や朝霧高原への観光拠点に最適、田貫湖の正面に霊峰富士を望む絶景リゾートホテル。富士山恵みの湯に浸かりながら逆さ富士を眺め、静岡県産ブランド肉や駿河湾の魚介をふんだんに取り入れたディナービュッフェが好評です。",
    "revAvg": "4.5",
    "minCharge": "11,000"
  },
  {
    "hotelNo": 8427,
    "hotelName": "群馬県・老神温泉　仙郷",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D8427",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D8427%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D8427",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D8427",
    "hotelKanaName": "せんきょう",
    "hotelSpecial": "心づくしのおもてなし。奥利根の大自然に抱かれた癒しと静寂の宿。尾瀬の拠点に最適。",
    "hotelMinCharge": 15246,
    "address1": "群馬県",
    "address2": "沼田市利根町大楊2-1",
    "telephoneNo": "0278-56-2601",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/8427/8427.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/8427/8427_room.jpg",
    "reviewCount": 455,
    "reviewAverage": 4.43,
    "userReview": "女将のこだわりが随所に感じられるおもてなしです。吹割の滝散策で疲れてしまいチェックイン30分前に到着しても快くロビーで待たせていただきました。お部屋も館内も食事処も清潔感溢れ気持ち良く過ごすことが…　 ",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D8427",
    "access": "関越道沼田ICより約18Km車で約20分。上毛高原駅14:00～沼田駅経由14:20の無料送迎バス有（※要問い合わせ）",
    "label": "群馬県沼田市ふるさと納税・東洋のナイアガラと称される大迫力の瀑布「吹割の滝」老神温泉仙郷",
    "themeTitle": "群馬県沼田市ふるさと納税：東洋のナイアガラ吹割の滝へ至近・全十室の静寂な大人の隠れ家「老神温泉 仙郷」",
    "themeDesc": "吹割の滝から車で約10分、片品川の渓谷沿いにひっそりと佇む高級温泉旅館。敷地内に湧き出る源泉掛け流しの湯と、上州牛や尾瀬の岩魚、朝採れ野菜を美しく仕立てた創作会席料理で、都会の喧騒を忘れる極上のひとときを約束します。",
    "revAvg": "4.4",
    "minCharge": "15,246"
  },
  {
    "hotelNo": 18245,
    "hotelName": "小浜温泉　旅館　國崎",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D18245",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D18245%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D18245",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D18245",
    "hotelKanaName": "おばまおんせん　くにさき",
    "hotelSpecial": "【全館禁煙】客室10の小さな温泉宿。雲仙の麓にある小浜温泉。３つの貸切風呂を【何度でも】【無料】で♪",
    "hotelMinCharge": 9900,
    "address1": "長崎県",
    "address2": "雲仙市小浜町南本町10-8",
    "telephoneNo": "0957-74-3500",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/18245/18245.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/18245/18245_wa1.jpg",
    "reviewCount": 274,
    "reviewAverage": 4.55,
    "userReview": "趣きある離れと美味しい料理に大満足2度目です趣きがあり、大変良い旅館です離れに宿泊しました、料理も程よい量でスタッフも気持ち良く、また、訪れたい宿です他の画像やクチコミの詳細は…　 ",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D18245",
    "access": "ＪＲ諫早駅より車で６０分　ＪＲ長崎駅・ＪＲ諫早駅より、口之津方面行き乗車。公立小浜病院前下車。",
    "label": "長崎県南島原市・雲仙市ふるさと納税・名水百選の清流と豪快な岩肌を穿つ「鮎帰りの滝」小浜温泉旅館國崎",
    "themeTitle": "長崎県南島原市・雲仙市ふるさと納税：鮎帰りの滝巡り拠点・源泉かけ流しと島原郷土料理「小浜温泉 旅館 國崎」",
    "themeDesc": "鮎帰りの滝へのドライブアクセス良好、小浜温泉の源泉が湧き出る木造のぬくもりあふれる温泉宿。橘湾の新鮮な地魚や名物の島原そうめん、長崎和牛の会席料理と、日本一の熱量を誇る小浜の名湯露天風呂で心身が癒やされます。",
    "revAvg": "4.5",
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
          <span className="text-slate-700 font-medium">日本三大名瀑ヒーリング＆豪快な滝見温泉宿×ふるさと納税ガイド</span>
        </div>
      </nav>

      {/* ヒーローヘッダー */}
      <header className="relative bg-gradient-to-br from-emerald-950 via-slate-900 to-teal-950 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-block bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-semibold px-3 py-1 rounded-full mb-2">
            日本三大名瀑・清流ヒーリング特集
          </div>
          <h1 className="text-2xl md:text-4xl font-bold leading-tight tracking-tight">
            日本三大名瀑ヒーリング＆豪快な滝見温泉宿×ふるさと納税ガイド
          </h1>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-3xl mx-auto pt-2">
            豊かな山林と清らかな水源に恵まれた日本列島が誇る、個性際立つ名瀑の数々「日本三大名瀑ヒーリング」――富士山の雪解け水が溶岩の断層から幅約150mにわたって絹糸のように流れ落ちる国の名勝・天然記念物・静岡の「白糸の滝」、片品川の清流が岩盤を浸食し幅約30m・高さ約7mにわたって三方から水煙を上げて落下し「東洋のナイアガラ」と称される群馬沼田の「吹割の滝」、そして島原半島の名峰・雲仙山麓の巨岩を割るように清流が滝壺へと雪崩れ落ち絵画のような景観を誇る長崎南島原の「鮎帰りの滝」。轟く滝音に心を清め、天然温泉に身を委ねて地域の山海の馳走を味わう極上の休日を楽天ふるさと納税でお楽しみください。
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
            轟音とともに立ち込める水煙、幾筋もの白き糸。大地の鼓動と清冽なマイナスイオン
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>絹糸のカーテン・豪快な川底の割れ目・巨岩の清流！三者三様のマイナスイオン浴</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                遊歩道を歩きながら間近で水煙を浴び、四季折々の新緑や紅葉と滝のコントラストを満喫。
              </p>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>富士宮の富士山虹鱒と朝霧高原豚、上州牛と尾瀬の高原野菜、長崎島原の手延べそうめんと雲仙牛</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                清流と名水が育んだ最高峰のブランド食材ディナーをホテルや温泉旅館で堪能。
              </p>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>楽天ふるさと納税宿泊クーポンで湖畔リゾートや名湯旅館をお得に予約</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                ドライブ観光やハイキング旅でも、寄付金額に応じた最大30%オフの即時割引クーポンでスマートにお得ステイ。
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
                        {h.hotelSpecial || '各地域屈指の絶景ロケーションと名湯温泉、地元の豊かなテロワールを活かした四季折々の会席料理でお寛ぎいただけます。'}
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
            あわせて読みたい全国の海岸美・名瀑・名湯別邸特集
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            
            <Link href="/furusato-tax-waterfall-river-gorge-healing-onsen-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                清流渓谷＆名瀑ヒーリング温泉宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                奥入瀬渓流・天城湯ヶ島・作並温泉。
              </p>
            </Link>
            
            <Link href="/furusato-tax-three-great-clear-rivers-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三大清流＆名水リバーサイド宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                四万十川・長良川・柿田川。
              </p>
            </Link>
            
            <Link href="/furusato-tax-three-great-clear-stream-valleys-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三大美林清流渓谷＆エメラルドブルー絶景宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                奥入瀬・抱返り・阿寺渓谷。
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
