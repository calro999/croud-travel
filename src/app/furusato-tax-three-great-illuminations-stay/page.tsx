import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '日本三大イルミネーション＆光の祭典・ファンタジーリゾートホテル宿×ふるさと納税完全ガイド【2026年最新】あしかが・ハウステンボス・さっぽろ',
  description: '夜空を埋め尽くす数百〜数千万球の煌めき！栃木足利「あしかがフラワーパーク」光の藤棚とホテルルートイン第２足利、長崎佐世保「ハウステンボス」世界最大1,300万球の光の王国と直営ホテルアムステルダム、北海道札幌「さっぽろホワイトイルミネーション」大通公園の雪景色とホテルルートイン札幌北四条。日本三大イルミネーションの幻想ステイを楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
  keywords: '日本三大イルミネーション・夜景遺産特集, 楽天ふるさと納税, 温泉宿, ふるさと納税 旅行, 高級旅館, ホテル予約, 2026年旅行',
  openGraph: {
    title: '日本三大イルミネーション＆光の祭典・ファンタジーリゾートホテル宿×ふるさと納税完全ガイド【2026年最新】あしかが・ハウステンボス・さっぽろ',
    description: '夜空を埋め尽くす数百〜数千万球の煌めき！栃木足利「あしかがフラワーパーク」光の藤棚とホテルルートイン第２足利、長崎佐世保「ハウステンボス」世界最大1,300万球の光の王国と直営ホテルアムステルダム、北海道札幌「さっぽろホワイトイルミネーション」大通公園の雪景色とホテルルートイン札幌北四条。日本三大イルミネーションの幻想ステイを楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    type: 'article',
    url: 'https://croud-travel.pages.dev/furusato-tax-three-great-illuminations-stay',
    siteName: 'トラベルポータル',
  },
};

export default function Page() {
  const officialAffUrl = 'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F';

  const hotels = [
  {
    "hotelNo": 68235,
    "hotelName": "ホテルルートイン第２足利ー国道50号沿ー",
    "hotelKanaName": "るーといんだいにあしかが",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D68235",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D68235%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D68235",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D68235",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/68235/68235.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/68235.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/68235/68235_k.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/68235/68235map.gif",
    "reviewCount": 900,
    "reviewAverage": 4.09,
    "userReview": "テレビの映りが悪く民放が見られない部屋のテレビが、電波悪いせいか、民放が全然映らなくて最悪でした。以前も同じ事があったので、改善して欲しい。クチコミの詳細はこちらから　https://revi…　2026-08-28 22:47:59投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=68235\" class=\"3click\">つづきはこちら</a>",
    "hotelMinCharge": 5850,
    "address1": "栃木県",
    "address2": "足利市掘込町2460",
    "telephoneNo": "050-1724-5324",
    "access": "◆ＪＲ足利駅→車で10分 ◆東武線足利市駅→車で7分　◆高速道太田桐生IC→車で10分 ◆高速道佐野藤岡IC→車で25分",
    "parkingInformation": "平面駐車場100台無料完備！※先着順・予約不要　★満車の場合は近隣駐車場へご案内",
    "nearestStation": "足利",
    "hotelSpecial": "【朝食無料・大浴場完備・駐車場無料】あしかがフラワーパークや佐野プレミアムアウトレットへアクセス抜群",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D68235",
    "label": "栃木県足利市ふるさと納税・500万球の光の藤と花の芸術「あしかがフラワーパーク」歴史ある足利学校とニューミヤコホテル足利本館",
    "themeTitle": "栃木県足利市ふるさと納税：500万球の光の花が咲き誇る「あしかがフラワーパーク」と機能的拠点「ホテルルートイン第２足利」",
    "themeDesc": "全国イルミネーションランキングで連続第1位を獲得した奇蹟の大藤の輝き。国道50号沿いでパークへのアクセスも抜群の「ルートイン第２足利」は、旅の疲れを癒やすラジウム人工温泉大浴場と充実の無料バイキング朝食を備えます。",
    "revAvg": "4.1",
    "minCharge": "5,850"
  },
  {
    "hotelNo": 9157,
    "hotelName": "ホテルアムステルダム　ハウステンボス",
    "hotelKanaName": "ほてるあむすてるだむ　はうすてんぼす",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D9157",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D9157%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D9157",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D9157",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/9157/9157.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/9157.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/9157/9157_twn.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/9157/9157map.gif",
    "reviewCount": 2445,
    "reviewAverage": 4.58,
    "userReview": "朝食バイキングを利用しましたが、少し時間が遅くなると待ち組数がすごいことになっていました。我が家は早めに行ったので並ばずに入れましたが朝食を取るまでに並び、動線が少し悪いかなと感じました。もし朝食をご…　2026-08-29 17:03:02投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=9157\" class=\"3click\">つづきはこちら</a>",
    "hotelMinCharge": 12700,
    "address1": "長崎県",
    "address2": "佐世保市ハウステンボス町7-7",
    "telephoneNo": "0570-064-300",
    "access": "博多駅→特急約100分／長崎駅→快速約90分／長崎空港→高速船約45分・バス約60分",
    "parkingInformation": "フロントにて無料券を発行しますので「宿泊者専用駐車場」をご利用ください。必ず出庫前にご精算ください。",
    "nearestStation": "ハウステンボス",
    "hotelSpecial": "ハウステンボス直営／ハウステンボステーマパーク内に位置する唯一のホテルで、抜群の立地と癒しの滞在を。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D9157",
    "label": "長崎県佐世保市ふるさと納税・1,300万球が輝く世界最大の光の王国「ハウステンボス」場内直営クラシックホテルアムステルダム",
    "themeTitle": "長崎県佐世保市ふるさと納税：世界最大1,300万球の光の王国「ハウステンボス」唯一の場内ホテル「ホテルアムステルダム」",
    "themeDesc": "ヨーロッパの街並みが丸ごと光に包まれる世界最大級のエンターテインメント。パークの中心・アムステルダム広場に面した直営クラシックホテルに泊まり、客室の窓から夜景を眺め、翌朝は開園前の静寂な街並みを独占散歩できます。",
    "revAvg": "4.6",
    "minCharge": "12,700"
  },
  {
    "hotelNo": 19546,
    "hotelName": "ホテルルートイン札幌北四条",
    "hotelKanaName": "るーといん　さっぽろきたよじょう",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D19546",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D19546%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D19546",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D19546",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/19546/19546.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/19546.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/19546/19546_r.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/19546/19546map.gif",
    "reviewCount": 977,
    "reviewAverage": 3.91,
    "userReview": "周辺の飲食店が残念、駅周辺の案内が欲しかったホテル周辺の飲食店がパッとしない。近くの居酒屋さんを紹介してもらったが、コスパ低かった。それ程の距離でもないのだから、いっそのこと駅周辺まで足を伸ば…　2026-08-20 22:03:07投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=19546\" class=\"3click\">つづきはこちら</a>",
    "hotelMinCharge": 7500,
    "address1": "北海道",
    "address2": "札幌市中央区北4条西13-1-53",
    "telephoneNo": "050-1725-6618",
    "access": "JR線 札幌駅徒歩15分",
    "parkingInformation": "駐車場38台有【立体駐車場】※先着順。料金：500円/日、延長代金別途",
    "nearestStation": "桑園",
    "hotelSpecial": "駐車場38台完備！大浴場大好評♪",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D19546",
    "label": "北海道札幌市ふるさと納税・冬の銀世界を彩る元祖イルミネーション「さっぽろホワイトイルミネーション」大通公園沿い札幌グランドホテル",
    "themeTitle": "北海道札幌市ふるさと納税：雪と光が織りなす白銀の元祖ライトアップ「さっぽろホワイトイルミネーション」と「ホテルルートイン札幌北四条」",
    "themeDesc": "大通公園や駅前通が数万個の電球で輝く札幌の冬のシンボル。大通エリアへアクセス良好な「ホテルルートイン札幌北四条」を拠点に、天然温泉大浴場「旅人の湯」で冷えた体をじっくり温め、すすきの名物海鮮やジンギスカンを堪能します。",
    "revAvg": "3.9",
    "minCharge": "7,500"
  }
];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* パンくずリスト */}
      <nav className="bg-white border-b border-slate-200 py-3 px-4 text-xs text-slate-500">
        <div className="max-w-5xl mx-auto flex items-center space-x-2">
          <Link href="/" className="hover:text-emerald-600 transition">ホーム</Link>
          <span>&gt;</span>
          <span className="text-slate-700 font-medium">日本三大イルミネーション＆光の祭典宿×ふるさと納税ガイド</span>
        </div>
      </nav>

      {/* ヒーローヘッダー */}
      <header className="relative bg-gradient-to-br from-emerald-950 via-slate-900 to-teal-950 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-block bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-semibold px-3 py-1 rounded-full mb-2">
            日本三大イルミネーション・夜景遺産特集
          </div>
          <h1 className="text-2xl md:text-4xl font-bold leading-tight tracking-tight">
            日本三大イルミネーション＆光の祭典宿×ふるさと納税ガイド
          </h1>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-3xl mx-auto pt-2">
            一般社団法人夜景観光コンベンション・ビューローが認定する冬の風物詩の最高峰「日本三大イルミネーション」――樹齢160年におよぶ大藤を光の芸術として再現した奇蹟の大藤や光のバラ園が500万球超で輝く栃木足利の「あしかがフラワーパーク『光の花の庭』」、1300万球という世界最大の圧倒的スケールを誇り運河や宮殿が黄金にライトアップされる長崎佐世保の「ハウステンボス『光の王国』」、そして日本におけるイルミネーションの発祥として大通公園の銀世界を幻想的なオブジェで彩る北海道の「さっぽろホワイトイルミネーション」。澄み切った冬の夜空に瞬く光の海は、日常を忘れさせる感動を与えてくれます。会場まで好アクセスの直営クラシックホテルや快適ホテルを拠点に、冬の味覚やご当地ディナーに酔いしれる特別な夜を楽天ふるさと納税でお楽しみください。
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
            闇夜に咲き誇る光の花とキャンドルナイト。大切な人と息をのむイルミネーションリゾートへ
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>点灯時間ギリギリまで光の世界を満喫！冷えた体を温める大浴場＆快適ベッド</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                混雑する帰り道を気にせず、夜遅くまでイルミネーションを散策した後は、温かな湯船と上質な客室でリラックス。
              </p>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>とちぎ和牛、長崎和牛＆レモンステーキ、北海道カニ・海鮮・味噌ラーメン</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                光の感動に包まれた後は、冬の寒さを吹き飛ばすご当地プレミアムグルメと美酒で乾杯。
              </p>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>楽天ふるさと納税宿泊クーポンでハイシーズンの冬旅をスマートにお得予約</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                予約が集中するイルミネーション期間でも、寄付金額に応じた即時割引クーポンで実質2,000円負担の快適宿泊。
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
                        {h.hotelSpecial || '日本三大奇景やイルミネーション、日本三大車窓、水城巡りの拠点に最適な上質ステイ。ご当地の美味と名湯でお寛ぎください。'}
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
            あわせて読みたい日本の絶景・名城・鉄道特集
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            
            <Link href="/furusato-tax-new-three-major-night-views-sky-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                新日本三大夜景＆天空スカイパノラマ宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                皿倉山・若草山・フルーツ公園。
              </p>
            </Link>
            
            <Link href="/furusato-tax-three-great-fireworks-riverside-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三大花火大会＆リバーサイド展望宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                長岡・大曲・土浦。
              </p>
            </Link>
            
            <Link href="/furusato-tax-three-great-night-cherry-blossoms-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三大夜桜＆お花見ライトアップ宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                弘前・高田城・高遠城址。
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
