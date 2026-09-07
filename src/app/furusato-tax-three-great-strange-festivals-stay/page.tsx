import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '日本三大奇祭＆天下の奇祭・熱狂の伝統文化と歴史名宿×ふるさと納税完全ガイド【2026年最新】諏訪御柱祭・国府宮はだか祭・男鹿ナマハゲ',
  description: '魂を揺さぶる熱狂と千年の祈り！長野諏訪「諏訪大社御柱祭」巨木落としの勇壮と上諏訪天然温泉ホテルルートイン上諏訪、愛知稲沢「国府宮はだか祭」数千の裸男がもみ合う厄除神事とお宿和陽館、秋田男鹿「男鹿のナマハゲ」ユネスコ無形文化遺産・荒ぶる神の咆哮と男鹿温泉セイコーグランドホテル。日本三大奇祭の迫力と伝統を楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
  keywords: '日本三大奇祭・伝統文化特集, 楽天ふるさと納税, 温泉宿, ふるさと納税 旅行, 高級旅館, ホテル予約, 2026年旅行',
  openGraph: {
    title: '日本三大奇祭＆天下の奇祭・熱狂の伝統文化と歴史名宿×ふるさと納税完全ガイド【2026年最新】諏訪御柱祭・国府宮はだか祭・男鹿ナマハゲ',
    description: '魂を揺さぶる熱狂と千年の祈り！長野諏訪「諏訪大社御柱祭」巨木落としの勇壮と上諏訪天然温泉ホテルルートイン上諏訪、愛知稲沢「国府宮はだか祭」数千の裸男がもみ合う厄除神事とお宿和陽館、秋田男鹿「男鹿のナマハゲ」ユネスコ無形文化遺産・荒ぶる神の咆哮と男鹿温泉セイコーグランドホテル。日本三大奇祭の迫力と伝統を楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    type: 'article',
    url: 'https://croud-travel.pages.dev/furusato-tax-three-great-strange-festivals-stay',
    siteName: 'トラベルポータル',
  },
};

export default function Page() {
  const officialAffUrl = 'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F';

  const hotels = [
  {
    "hotelNo": 3076,
    "hotelName": "上諏訪天然温泉「七釜混合」ホテルルートイン上諏訪",
    "hotelKanaName": "るーといん　かみすわ",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D3076",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D3076%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D3076",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D3076",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/3076/3076.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/3076.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/3076/3076_sgl.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/3076/3076map.gif",
    "reviewCount": 815,
    "reviewAverage": 3.99,
    "userReview": "湖岸まで近く花火大会の拠点に最適花火大会を見るためにいつも利用してます。湖岸まで近いので大変便利ですクチコミの詳細はこちらから　https://review.travel.rakuten.co…　 ",
    "hotelMinCharge": 6025,
    "address1": "長野県",
    "address2": "諏訪市湖岸通り4-9-25",
    "telephoneNo": "050-5576-8011",
    "access": "上諏訪駅より徒歩５分、中央道諏訪Ｉ．Ｃより約15分。",
    "parkingInformation": "有り　３０台　無料",
    "nearestStation": "上諏訪",
    "hotelSpecial": "天然温泉大浴場◆駐車場無料◆WiFi接続無料◆朝食バイキング無料",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D3076",
    "featureKey": "matsuri_onbashira",
    "featureLabel": "長野県諏訪市ふるさと納税・七年に一度の天下の大祭・巨木落としの勇壮「諏訪大社御柱祭」上諏訪温泉油屋旅館",
    "themeTitle": "長野県諏訪市ふるさと納税：諏訪大社上社・下社巡礼の拠点・天然温泉「ホテルルートイン上諏訪」",
    "themeDesc": "諏訪湖のほとりに位置し、御柱祭の舞台である諏訪大社へのアクセス良好なホテル。敷地内から湧出する上諏訪天然温泉大浴場で寛ぎ、無料の健康バイキング朝食付き。夜は諏訪五蔵の銘酒巡りや諏訪湖の夜景散策を楽しめます。",
    "revAvg": "4.0",
    "minCharge": "6,025"
  },
  {
    "hotelNo": 8713,
    "hotelName": "お宿　和陽館",
    "hotelKanaName": "おやど　わようかん",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D8713",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D8713%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D8713",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D8713",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/8713/8713.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/8713.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/8713/8713_syo.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/8713/8713map.gif",
    "reviewCount": 353,
    "reviewAverage": 4.08,
    "userReview": "駐車場が便利で、駅に程よく近い家族が泊まりにくる時に利用させていただいております。駐車場もチェックイン前からチェックイン後まで停めさせてもらえるのでとても助かっています!いつも泊まっている…　 ",
    "hotelMinCharge": 5747,
    "address1": "愛知県",
    "address2": "稲沢市長野2-10-8",
    "telephoneNo": "0587-23-5565",
    "access": "JR東海道本線稲沢駅より徒歩５分・名神高速 一宮I.C.より車で10分",
    "parkingInformation": "大駐車場有り：50台（無料・先着順）到着されたらフロントにて場所をご確認下さい。",
    "nearestStation": "稲沢",
    "hotelSpecial": "名古屋から電車で10分。実家のようにくつろげる、心温まるおもてなしの宿。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D8713",
    "featureKey": "matsuri_hadaka",
    "featureLabel": "愛知県稲沢市・一宮市ふるさと納税・数千の裸男が神男に群がる熱気の厄除け「国府宮はだか祭」尾張の美食ステイ",
    "themeTitle": "愛知県稲沢市・一宮市ふるさと納税：国府宮神社参拝の拠点・純和風の温もり「お宿 和陽館」",
    "themeDesc": "天下の奇祭・国府宮はだか祭が執り行われる尾張大国霊神社（国府宮）のお膝元、一宮市街に位置する老舗旅館。真心を込めた手作りの和食会席と静かな和室で寛ぎ、尾張の伝統文化とグルメを満喫できます。",
    "revAvg": "4.1",
    "minCharge": "5,747"
  },
  {
    "hotelNo": 52102,
    "hotelName": "男鹿温泉　湯けむりリゾート　セイコーグランドホテル",
    "hotelKanaName": "せいこーぐらんどほてる",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D52102",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D52102%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D52102",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D52102",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/52102/52102.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/52102.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/52102/52102_wa.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/52102/52102map.gif",
    "reviewCount": 688,
    "reviewAverage": 4.1,
    "userReview": "温泉は良いが清掃と食事の改善を希望温泉は良かったですが、ソファの影にお菓子が落ちていたり、洗面所が詰まっていたり、と残念でした。食事の味付けなども工夫が欲しいです。クチコミの詳細はこちらか…　 ",
    "hotelMinCharge": 11110,
    "address1": "秋田県",
    "address2": "男鹿市北浦湯本草木原50-1",
    "telephoneNo": "0185-33-2131",
    "access": "秋田自動車道秋田北IC下車６０ｋｍ７０分／JR羽立駅～路線バスで４５分／JR男鹿駅～無料送迎バスあり詳しくは公式HPへ",
    "parkingInformation": "有り　２０台　無料　予約不要",
    "nearestStation": "羽立",
    "hotelSpecial": "源泉かけ流し！当館自慢の「美肌の湯」と日本海の海幸を満喫。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D52102",
    "featureKey": "matsuri_namahage",
    "featureLabel": "秋田県男鹿市ふるさと納税・ユネスコ無形文化遺産・泣く子はいねがの咆哮「男鹿のナマハゲ」男鹿温泉郷別邸つばき",
    "themeTitle": "秋田県男鹿市ふるさと納税：男鹿ナマハゲ伝承館至近・名物石焼料理と名湯「男鹿温泉 湯けむりリゾート セイコーグランドホテル」",
    "themeDesc": "ナマハゲ発祥の地・男鹿半島の温泉リゾート。男鹿温泉郷の源泉かけ流し大浴場と露天風呂で温まり、夕食は真っ赤に焼けた溶岩石を桶に投入して一瞬で煮立てる名物「男鹿名物石焼料理」や日本海の新鮮な海の幸を豪快に堪能できます。",
    "revAvg": "4.1",
    "minCharge": "11,110"
  }
];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* パンくずリスト */}
      <nav className="bg-white border-b border-slate-200 py-3 px-4 text-xs text-slate-500">
        <div className="max-w-5xl mx-auto flex items-center space-x-2">
          <Link href="/" className="hover:text-emerald-600 transition">ホーム</Link>
          <span>&gt;</span>
          <span className="text-slate-700 font-medium">日本三大奇祭＆熱気と伝統の文化体験宿×ふるさと納税ガイド</span>
        </div>
      </nav>

      {/* ヒーローヘッダー */}
      <header className="relative bg-gradient-to-br from-emerald-950 via-slate-900 to-teal-950 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-block bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-semibold px-3 py-1 rounded-full mb-2">
            日本三大奇祭・伝統文化特集
          </div>
          <h1 className="text-2xl md:text-4xl font-bold leading-tight tracking-tight">
            日本三大奇祭＆熱気と伝統の文化体験宿×ふるさと納税ガイド
          </h1>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-3xl mx-auto pt-2">
            日本各地の風土と信仰が育み、常識を超えたスケールと迫力で人々を圧倒する「日本三大奇祭」――七年に一度、樹齢数百年の巨木を山から引き倒し急坂を滑り落ちる木落としで天下に知られる長野の「諏訪大社御柱祭」、極寒の旧暦正月に数千人の裸男たちが厄落としのため神男に群がり揉み合う愛知稲沢の「国府宮はだか祭」、そして大晦日の夜に鬼の面を着けた神の化身が家々を巡り悪疫退散と怠惰を戒めるユネスコ無形文化遺産・秋田男鹿の「ナマハゲ」。五穀豊穣や無病息災を願う人々の純粋な熱気は、見る者の魂を激しく揺さぶります。祭りの歴史を伝える資料館や神社仏閣を巡り、上諏訪温泉や男鹿温泉の名湯に浸かって信州そば・尾張郷土料理・秋田名物石焼料理を堪能する旅を楽天ふるさと納税でお楽しみください。
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
            大地を揺るがす木遣りの声、吹き荒れる熱気と咆哮。日本人の魂が躍動する奇祭巡礼
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>御柱の木落とし・数千人の裸もみ合い・ナマハゲの咆哮！唯一無二の伝統神事</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                全国から観衆が集まる熱狂の現場や、常設展示館での迫真の体験を通じて日本文化の深淵を体感。
              </p>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>信州諏訪のわかさぎ＆地酒、尾張の名古屋めし＆三河ポーク、男鹿名物天然真鯛の石焼料理</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                祭りの熱気とともに受け継がれてきた、地域色豊かな豪快グルメと地酒の数々を堪能。
              </p>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>楽天ふるさと納税宿泊クーポンで歴史薫る温泉旅館・ホテルをお得に予約</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                お祭り鑑賞や文化探訪の旅でも、寄付金額に応じた最大30%オフの即時割引クーポンでスマートにお得ステイ。
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
                        {h.hotelSpecial || '日本三大急坂峠道の雲海パノラマ、日本三大棚田の黄金色に輝く原風景、日本三大奇祭の熱気と伝統、日本三大瓦の町の美しい街並みを巡る極上の拠点。四季折々の美食と名湯でお寛ぎください。'}
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
            あわせて読みたい日本の峠道・棚田・奇祭特集
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
            
            <Link href="/furusato-tax-three-great-inari-shrines-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三大稲荷＆商売繁盛・開運祈願の名宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                伏見・豊川・祐徳稲荷。
              </p>
            </Link>
            
            <Link href="/furusato-tax-three-great-buddhas-heritage-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三大仏＆歴史古都・門前町の名宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                奈良大仏・鎌倉大仏・高岡大仏。
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
