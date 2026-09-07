import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '日本三大八幡宮＆厄除開運・勝運祈願の聖地巡礼宿×ふるさと納税完全ガイド【2026年最新】宇佐神宮・石清水八幡宮・筥崎宮',
  description: '全国4万社の総本宮と国家鎮護の神域！大分宇佐「宇佐神宮」国宝本殿と宇佐ホテルリバーサイド、京都八幡「石清水八幡宮」エジソンゆかりの男山と京都竹の郷温泉ホテル京都エミナース、福岡博多「筥崎宮」勝運と敵国降伏の扁額と都ホテル博多。日本三大八幡宮の開運・厄除け祈願と名湯・グルメを楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
  keywords: '日本三大八幡宮・開運聖地特集, 楽天ふるさと納税, 温泉宿, ふるさと納税 旅行, 高級旅館, ホテル予約, 2026年旅行',
  openGraph: {
    title: '日本三大八幡宮＆厄除開運・勝運祈願の聖地巡礼宿×ふるさと納税完全ガイド【2026年最新】宇佐神宮・石清水八幡宮・筥崎宮',
    description: '全国4万社の総本宮と国家鎮護の神域！大分宇佐「宇佐神宮」国宝本殿と宇佐ホテルリバーサイド、京都八幡「石清水八幡宮」エジソンゆかりの男山と京都竹の郷温泉ホテル京都エミナース、福岡博多「筥崎宮」勝運と敵国降伏の扁額と都ホテル博多。日本三大八幡宮の開運・厄除け祈願と名湯・グルメを楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    type: 'article',
    url: 'https://croud-travel.pages.dev/furusato-tax-three-sacred-hachiman-shrines-stay',
    siteName: 'トラベルポータル',
  },
};

export default function Page() {
  const officialAffUrl = 'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F';

  const hotels = [
  {
    "hotelNo": 138111,
    "hotelName": "宇佐ホテルリバーサイド",
    "hotelKanaName": "うさほてるりばーさいど",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D138111",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D138111%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D138111",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D138111",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/138111/138111.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/138111.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/138111/138111_room.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/138111/138111map.gif",
    "reviewCount": 222,
    "reviewAverage": 4.02,
    "userReview": "建物は古いが接客が丁寧で静かに過ごせたホテルは少し古いですが、ホテルの方の接客が丁寧で好感を持てました川沿いの静かな場所でゆっくり出来ましたクチコミの詳細はこちらから　https://re…　 ",
    "hotelMinCharge": 3400,
    "address1": "大分県",
    "address2": "宇佐市別府6",
    "telephoneNo": "0978-33-2222",
    "access": "電車：JR日豊本線、柳ヶ浦駅より車で8分／お車：東九州自動車道、宇佐ICより5分",
    "parkingInformation": "有り　５０台　無料　予約不要",
    "nearestStation": "柳ヶ浦",
    "hotelSpecial": "【フロントは安心の24時間対応】国宝宇佐神宮のお膝元、駅館川のほとり、今日もなごやかに営業中♪",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D138111",
    "label": "大分県宇佐市ふるさと納税・全国4万社の八幡宮総本宮「宇佐神宮」国宝本殿の荘厳と宇佐ホテルリバーサイド",
    "themeTitle": "大分県宇佐市ふるさと納税：全国4万社八幡宮の総本宮「宇佐神宮」と駅前好立地「宇佐ホテルリバーサイド」",
    "themeDesc": "宇佐神宮の大鳥居まで車で約8分。駅館川の清流沿いに建つ「宇佐ホテルリバーサイド」は、ビジネスから観光まで快適な客室を備え、名物宇佐からあげや安心院ワイン、豊後牛ステーキなど大分の味覚を満喫できます。",
    "revAvg": "4.0",
    "minCharge": "3,400"
  },
  {
    "hotelNo": 10854,
    "hotelName": "京都竹の郷温泉　万葉の湯　ホテル京都エミナース",
    "hotelKanaName": "きょうとたけのさとおんせん　まんようのゆ　ほてるきょうとえみなーす",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D10854",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D10854%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D10854",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D10854",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/10854/10854.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/10854.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/10854/10854_war.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/10854/10854map.gif",
    "reviewCount": 843,
    "reviewAverage": 4.14,
    "userReview": "日帰り入浴施設に宿泊機能がついた印象入ってすぐにたくさんの竹灯籠がお出迎えで雰囲気は良かったです。部屋は和室を取りましたが、普通な感じでした。ただ、布団は各自で敷いてくださいというようだったので、…　 ",
    "hotelMinCharge": 6600,
    "address1": "京都府",
    "address2": "京都市西京区大原野東境谷町2-4",
    "telephoneNo": "075-332-5800",
    "access": "最寄駅（ＪＲ桂川、阪急洛西口）から無料送迎バス有。阪急「桂駅」西口より市バス西１、２、５で１５分「境谷大橋」下車すぐ。",
    "parkingInformation": "有り　250台　無料　",
    "nearestStation": "桂",
    "hotelSpecial": "ご宿泊者は24時間万葉の湯入り放題！.心ゆくまで温泉を満喫下さい。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D10854",
    "label": "京都府八幡市ふるさと納税・厄除け開運の三大八幡「国宝 石清水八幡宮」男山ケーブルと京都ホテルステイ",
    "themeTitle": "京都府八幡市・西京区ふるさと納税：男山山上に鎮座する国宝「石清水八幡宮」と「京都竹の郷温泉 万葉の湯 ホテル京都エミナース」",
    "themeDesc": "厄除け開運の総本山・石清水八幡宮への参拝拠点。敷地内から湧く二つの自家源泉による美肌の天然温泉と多彩な露天風呂で癒やされ、京の旬素材を活かした本格京会席を心ゆくまで味わえます。",
    "revAvg": "4.1",
    "minCharge": "6,600"
  },
  {
    "hotelNo": 172310,
    "hotelName": "都ホテル博多",
    "hotelKanaName": "みやこほてるはかた",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D172310",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D172310%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D172310",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D172310",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/172310/172310.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/172310.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/172310/172310_kan1.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/172310/172310map.gif",
    "reviewCount": 1133,
    "reviewAverage": 4.62,
    "userReview": "朝食時の配慮に欠ける対応が残念清潔感があり、フロントの方の対応なども丁寧で いつも安心感がもてています。しかしながら朝食時、薬を飲むため、口に粉薬を入れている最中に『空いているお皿お下げしてよ…　 ",
    "hotelMinCharge": 16400,
    "address1": "福岡県",
    "address2": "福岡市博多区博多駅東2-1-1",
    "telephoneNo": "092-441-3111",
    "access": "博多駅直結！徒歩約１分。＜東７番出口＞福岡空港から地下鉄で約７分、車で約15分。一歩足を踏み入れたらもうそこはリゾート！",
    "parkingInformation": "1泊 2,000円　先着順36台 屋内機械式（長5.3m 幅1.96m 高2m)／提携有り：20m先",
    "nearestStation": "博多",
    "hotelSpecial": "さあ、都心のリゾートへ！ここは、いつでも夏休み。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D172310",
    "label": "福岡県福岡市東区・博多区ふるさと納税・日本三大八幡宮・勝運と放生会の聖地「筥崎宮」天然温泉スパと都ホテル博多",
    "themeTitle": "福岡県福岡市博多区・東区ふるさと納税：勝運の神として名高い日本三大八幡「筥崎宮」と屋上温泉スパ「都ホテル 博多」",
    "themeDesc": "筥崎宮へ地下鉄で直結。博多駅直結のラグジュアリーホテル「都ホテル博多」は、最上階にアウトドア温泉プールや内湯スパを備え、九州の食材をふんだんに取り入れたディナーと極上のベッドで洗練された滞在を楽しめます。",
    "revAvg": "4.6",
    "minCharge": "16,400"
  }
];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* パンくずリスト */}
      <nav className="bg-white border-b border-slate-200 py-3 px-4 text-xs text-slate-500">
        <div className="max-w-5xl mx-auto flex items-center space-x-2">
          <Link href="/" className="hover:text-emerald-600 transition">ホーム</Link>
          <span>&gt;</span>
          <span className="text-slate-700 font-medium">日本三大八幡宮＆開運厄除け宿×ふるさと納税ガイド</span>
        </div>
      </nav>

      {/* ヒーローヘッダー */}
      <header className="relative bg-gradient-to-br from-emerald-950 via-slate-900 to-teal-950 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-block bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-semibold px-3 py-1 rounded-full mb-2">
            日本三大八幡宮・開運聖地特集
          </div>
          <h1 className="text-2xl md:text-4xl font-bold leading-tight tracking-tight">
            日本三大八幡宮＆開運厄除け宿×ふるさと納税ガイド
          </h1>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-3xl mx-auto pt-2">
            皇室や武家からの篤い信仰を集め、全国に4万社以上点在する八幡神社の最高峰「日本三大八幡宮」――神仏習合発祥の霊地であり、一之御殿から三之御殿まで国宝の壮麗な本殿が森の中に立ち並ぶ全国八幡宮の総本宮・大分の「宇佐神宮」、平安京の裏鬼門を守護し織田信長や豊臣秀吉も社殿を修復した山上の国宝・京都の「石清水八幡宮」、そして蒙古襲来の際に神風を呼んだとされ勝運・厄除けの神として名将たちの崇敬を集めた福岡の「筥崎宮（または鎌倉鶴岡八幡宮）」。静謐な境内に足を踏み入れれば、背筋がすっと伸びるような神聖な気に包まれます。門前町や近隣の天然温泉ホテルを拠点に、厄除け祈願とともにご当地グルメや名湯を満喫する心清らかな旅を楽天ふるさと納税でお楽しみください。
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
            朱塗りの楼門と神聖なる杜の息吹。源氏の氏神として崇敬を集めた三大八幡の神域へ
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>早朝の静謐な神域へ参拝！混雑のない時間帯に国宝本殿や参道を独占散策</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                朝靄に包まれる境内を静かに歩き、澄み切った空気の中で心願成就と厄除けのご祈祷を体感。
              </p>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>宇佐唐揚げ＆豊後牛、京懐石＆精進料理、博多もつ鍋＆玄界灘の活イカ</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                歴史ある門前町と港町ならではの美味を、各宿の本格レストランや周辺名店で堪能。
              </p>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>楽天ふるさと納税宿泊クーポンでハイグレード温泉ホテルを実質2,000円予約</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                格式ある宿や都心のスパホテルも、寄付金額に応じた最大30%オフ即時割引クーポンでスマートにお得旅。
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
                        {h.hotelSpecial || '日本三大清流のせせらぎ、千年の巨樹パワースポット、三大八幡宮の開運、白砂青松の海浜絶景を巡る極上の旅路。四季折々の美食と名湯でお寛ぎください。'}
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
            あわせて読みたい日本の清流・名勝・聖地特集
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            
            <Link href="/furusato-tax-three-great-torii-gates-sacred-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三大鳥居＆聖地パワースポット宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                厳島神社・大神神社・平安神宮。
              </p>
            </Link>
            
            <Link href="/furusato-tax-three-great-peculiar-festivals-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三大奇祭＆情熱の神事体験宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                御柱・吉田の火祭・なまはげ。
              </p>
            </Link>
            
            <Link href="/furusato-tax-three-national-treasure-teahouses-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                国宝三大茶室＆数寄屋建築の名旅館宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                待庵・如庵・密庵。
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
