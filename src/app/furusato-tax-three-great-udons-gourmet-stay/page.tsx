import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '日本三大うどん＆名水と小麦の麺道・ご当地名湯宿×ふるさと納税完全ガイド【2026年最新】讃岐・稲庭・五島',
  description: '日本屈指の麺文化を味わい尽くす！香川琴平「讃岐うどん」強烈なコシとイリコ出汁に唸る湯元こんぴら温泉華の湯紅梅亭、秋田湯沢「稲庭うどん」宮内庁御用達の絹の喉ごしと秘湯泥湯温泉奥山旅館、長崎五島列島「五島うどん」椿油とあご出汁の地獄炊きと五島コンカナ王国ワイナリー＆リゾート。日本三大うどんの聖地と極上湯を楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
  keywords: '日本三大うどん・麺文化探訪特集, 楽天ふるさと納税, 温泉宿, ふるさと納税 旅行, 高級旅館, ホテル予約, 2026年旅行',
  openGraph: {
    title: '日本三大うどん＆名水と小麦の麺道・ご当地名湯宿×ふるさと納税完全ガイド【2026年最新】讃岐・稲庭・五島',
    description: '日本屈指の麺文化を味わい尽くす！香川琴平「讃岐うどん」強烈なコシとイリコ出汁に唸る湯元こんぴら温泉華の湯紅梅亭、秋田湯沢「稲庭うどん」宮内庁御用達の絹の喉ごしと秘湯泥湯温泉奥山旅館、長崎五島列島「五島うどん」椿油とあご出汁の地獄炊きと五島コンカナ王国ワイナリー＆リゾート。日本三大うどんの聖地と極上湯を楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    type: 'article',
    url: 'https://croud-travel.pages.dev/furusato-tax-three-great-udons-gourmet-stay',
    siteName: 'トラベルポータル',
  },
};

export default function Page() {
  const officialAffUrl = 'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F';

  const hotels = [
  {
    "hotelNo": 5901,
    "hotelName": "湯元こんぴら温泉華の湯　紅梅亭",
    "hotelKanaName": "もとゆこんぴらおんせん　はなのゆ　こうばいてい",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D5901",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D5901%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D5901",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D5901",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/5901/5901.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/5901.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/5901/5901_k1.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/5901/5901map.gif",
    "reviewCount": 1747,
    "reviewAverage": 4.61,
    "userReview": "3度目の利用、愛犬と家族で大満足のひととき今回は3度目の宿泊でわんちゃんと家族と一緒に泊まりました。いつも美味しい食事と綺麗なお部屋と従業員の方の心遣いで楽しい時間を過ごせてますクチコミの詳細…　2026-08-27 17:21:41投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=5901\" class=\"3click\">つづきはこちら</a>",
    "hotelMinCharge": 12100,
    "address1": "香川県",
    "address2": "仲多度郡琴平町556-1",
    "telephoneNo": "0877-75-1111",
    "access": "ＪＲ琴平駅下車、徒歩5分（無料送迎有・要予約）。車：道善通寺ＩＣ下車約15分。高松空港より約40分",
    "parkingInformation": "有り：70台（無料）／EV充電器設置",
    "nearestStation": "琴平",
    "hotelSpecial": "露天風呂付スイートOPEN◆2種の源泉を楽しむ＜3箇所15種類の湯処＞でのんびり湯巡り",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D5901",
    "label": "香川県琴平町・高松市ふるさと納税・コシとイリコ出汁の最高峰「讃岐うどん」金刀比羅宮の参道とことひら温泉琴参閣",
    "themeTitle": "香川県琴平町ふるさと納税：讃岐うどん巡礼の総本山・金刀比羅宮参道と名門「湯元こんぴら温泉華の湯 紅梅亭」",
    "themeDesc": "こんぴらさんの麓に佇む数寄屋造りの名館。多種多彩な露天風呂や大浴場で湯巡りを愉しみ、夕食には讃岐牛や瀬戸内旬魚の会席、そして本場ならではのコシが光る手打ち讃岐うどんを贅沢に味わいます。",
    "revAvg": "4.6",
    "minCharge": "12,100"
  },
  {
    "hotelNo": 141266,
    "hotelName": "泥湯温泉　奥山旅館",
    "hotelKanaName": "どろゆおんせん　おくやまりょかん",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D141266",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D141266%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D141266",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D141266",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/141266/141266.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/141266.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/141266/141266_room.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/141266/141266map.gif",
    "reviewCount": 116,
    "reviewAverage": 4.47,
    "userReview": "二度目の訪問、料理も美味しく部屋も綺麗二度目の訪問です。前回はステーキももっと大きかったかなぁと思いましたが、十分な量でした。料理も美味しく、部屋も奇麗、泥湯の露天風呂は、下に砂利があるので歩くと…　2026-07-09 18:29:49投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=141266\" class=\"3click\">つづきはこちら</a>",
    "hotelMinCharge": 24200,
    "address1": "秋田県",
    "address2": "湯沢市高松泥湯沢25",
    "telephoneNo": "0183-79-3021",
    "access": "JR奥羽本線湯沢駅下車、車で50分。国道13号、県道51号を経て泥湯へ。",
    "parkingInformation": "有り　１５台　無料　予約不要",
    "nearestStation": "湯沢",
    "hotelSpecial": "手つかずの自然という贅沢が当館のおもてなし。3種の源泉からかけ流しの泥湯温泉が自慢、秘境の湯宿です。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D141266",
    "label": "秋田県湯沢市ふるさと納税・宮内庁御用達のなめらかな喉ごし「稲庭うどん」名湯秋ノ宮温泉郷湯けむりの宿稲住温泉",
    "themeTitle": "秋田県湯沢市ふるさと納税：宮内庁御用達の至高の喉ごし「稲庭うどん」と秘境の白濁名湯「泥湯温泉 奥山旅館」",
    "themeDesc": "350年以上の歴史を誇る稲庭うどん発祥の地・湯沢。天狗森の山懐に湧く秘湯・泥湯温泉の奥山旅館で、乳白色の濃厚な硫黄泉に癒やされ、比内地鶏の出汁でいただく極上稲庭うどんと山菜・岩魚料理を堪能します。",
    "revAvg": "4.5",
    "minCharge": "24,200"
  },
  {
    "hotelNo": 16581,
    "hotelName": "五島コンカナ王国ワイナリー＆リゾート　＜五島・福江島＞",
    "hotelKanaName": "ゴトウコンカナオウコクワイナリー＆リゾート",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D16581",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D16581%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D16581",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D16581",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/16581/16581.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/16581.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/16581/16581_f.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/16581/16581map.gif",
    "reviewCount": 277,
    "reviewAverage": 3.96,
    "userReview": "夕食は満足だが子供の食事と朝食は残念初めて利用しました。夕食は五島牛のすき焼きはとても美味しかった。刺し身も良かった。しかし、子供のワンプレートの食事は他のホテルと比較すると、手抜き感が際立ってい…　2026-08-24 20:26:47投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=16581\" class=\"3click\">つづきはこちら</a>",
    "hotelMinCharge": 9225,
    "address1": "長崎県",
    "address2": "五島市上大津町2413",
    "telephoneNo": "0959-72-1348",
    "access": "福江港から福江空港方面へ 途中の広域農道の案内看板に従い左折し、約3ｋｍ",
    "parkingInformation": "有り（200台／無料／先着順）",
    "nearestStation": "福江空港",
    "hotelSpecial": "五島の大自然に囲まれ、自社農園のワインと島食材の美食を堪能。異国情緒溢れる空間で寛ぐ離島リゾート。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D16581",
    "label": "長崎県新上五島町ふるさと納税・椿油とあご出汁が香る幻の手延べ「五島うどん」教会群と五島列島リゾートホテルマルゲリータ",
    "themeTitle": "長崎県新上五島町・五島市ふるさと納税：椿油香る手延べ「五島うどん（地獄炊き）」と「五島コンカナ王国ワイナリー＆リゾート」",
    "themeDesc": "五島列島の伝統麺・五島手延うどんの聖地。福江島の丘陵に広がるワイナリーリゾート「コンカナ王国」では、褐色の鬼岳温泉露天風呂と、自家製ワイン、あご出汁でいただく熱々の五島うどん・海鮮会席をゆったり味わえます。",
    "revAvg": "4.0",
    "minCharge": "9,225"
  }
];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* パンくずリスト */}
      <nav className="bg-white border-b border-slate-200 py-3 px-4 text-xs text-slate-500">
        <div className="max-w-5xl mx-auto flex items-center space-x-2">
          <Link href="/" className="hover:text-emerald-600 transition">ホーム</Link>
          <span>&gt;</span>
          <span className="text-slate-700 font-medium">日本三大うどん＆極上麺道湯宿×ふるさと納税ガイド</span>
        </div>
      </nav>

      {/* ヒーローヘッダー */}
      <header className="relative bg-gradient-to-br from-emerald-950 via-slate-900 to-teal-950 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-block bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-semibold px-3 py-1 rounded-full mb-2">
            日本三大うどん・麺文化探訪特集
          </div>
          <h1 className="text-2xl md:text-4xl font-bold leading-tight tracking-tight">
            日本三大うどん＆極上麺道湯宿×ふるさと納税ガイド
          </h1>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-3xl mx-auto pt-2">
            日本各地の気候風土と名水、そして職人の手仕事によって磨き抜かれた麺料理の最高峰「日本三大うどん」――圧倒的なコシと弾力、イリコの風味豊かな黄金出汁が舌を唸らせ、うどん県として全国の巡礼者を惹きつける香川の「讃岐うどん」、平庭打ちの製法を数百年にわたり一子相伝で守り、絹のようになめらかな喉ごしがかつて宮内庁御用達にも選ばれた秋田湯沢の「稲庭うどん」、そして遣唐使の時代に伝わり島特産の椿油を練り込んで細身ながら強いコシを生み出した幻の麺・長崎の「五島うどん（地獄炊き）」。シンプルだからこそ素材の質と職人の技が極限まで問われる一杯は、旅先での体験として忘れがたい感動を与えてくれます。門前町や秘湯、離島のリゾートを拠点に、出来立てのうどんと地元食材の会席を堪能する特別な休日を楽天ふるさと納税でお楽しみください。
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
            すすれば広がる小麦の芳醇と澄んだ出汁の旨味。名水が育んだ三大うどんの聖地へ
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>早朝うどん巡礼や名店ハシゴに抜群の立地！朝からできたて麺を満喫</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                行列必至の人気製麺所や名店へ朝一番でアクセスし、湯上がりの贅沢な朝食うどんを堪能。
              </p>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>讃岐オリーブ牛、秋田比内地鶏＆きりたんぽ、五島美豚＆獲れたて天然クエ</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                ご当地うどんと合わせ、各宿自慢のブランド肉や新鮮な山海の幸ディナーに舌鼓。
              </p>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>楽天ふるさと納税宿泊クーポンで憧れの温泉旅館やアイランドリゾートをお得に予約</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                人気の温泉街や離島ホテルでも、寄付金額に応じた即時割引クーポンで実質2,000円負担の快適宿泊。
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
                        {h.hotelSpecial || '日本三大うどん巡り、三霊山パノラマ、漆器の文化美、広大な干潟の自然探訪に最適な上質拠点。四季折々の美食と名湯でお寛ぎください。'}
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
            あわせて読みたい日本の伝統美食・絶景特集
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            
            <Link href="/furusato-tax-three-great-sake-capitals-brewery-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三大酒どころ＆酒蔵ツーリズム宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                灘五郷・伏見・西条。
              </p>
            </Link>
            
            <Link href="/furusato-tax-three-famous-confections-historic-town-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三大銘菓＆城下町茶寮・老舗和菓子文化宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                長生殿・越乃雪・京銘菓。
              </p>
            </Link>
            
            <Link href="/furusato-tax-three-great-morning-markets-seafood-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三大朝市＆獲れたて海鮮・朝ごはん宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                輪島・呼子・勝浦。
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
