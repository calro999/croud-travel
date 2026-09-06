import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '日本三大水城＆海を抱く名城天守・海水堀クルーズ宿×ふるさと納税完全ガイド【2026年最新】高松城・今治城・中津城',
  description: '海水を湛えた水堀と白亜の天守！香川高松「高松城（玉藻城）」瀬戸内海の海水門とJRホテルクレメント高松、愛媛今治「今治城」藤堂高虎公の築城技術と今治国際ホテル、大分中津「中津城」黒田官兵衛ゆかりの石垣とグランプラザ中津ホテル。日本三大水城（三大海城）の歴史浪漫と瀬戸内・豊後水道の海鮮グルメを楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
  keywords: '日本三大水城・海城遺産特集, 楽天ふるさと納税, 温泉宿, ふるさと納税 旅行, 高級旅館, ホテル予約, 2026年旅行',
  openGraph: {
    title: '日本三大水城＆海を抱く名城天守・海水堀クルーズ宿×ふるさと納税完全ガイド【2026年最新】高松城・今治城・中津城',
    description: '海水を湛えた水堀と白亜の天守！香川高松「高松城（玉藻城）」瀬戸内海の海水門とJRホテルクレメント高松、愛媛今治「今治城」藤堂高虎公の築城技術と今治国際ホテル、大分中津「中津城」黒田官兵衛ゆかりの石垣とグランプラザ中津ホテル。日本三大水城（三大海城）の歴史浪漫と瀬戸内・豊後水道の海鮮グルメを楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    type: 'article',
    url: 'https://croud-travel.pages.dev/furusato-tax-three-great-water-castles-stay',
    siteName: 'トラベルポータル',
  },
};

export default function Page() {
  const officialAffUrl = 'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F';

  const hotels = [
  {
    "hotelNo": 14862,
    "hotelName": "ＪＲホテルクレメント高松",
    "hotelKanaName": "じぇいあーるほてるくれめんとたかまつ",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D14862",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D14862%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D14862",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D14862",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/14862/14862.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/14862.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/14862/14862_rm.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/14862/14862map.gif",
    "reviewCount": 4256,
    "reviewAverage": 4.49,
    "userReview": "部屋のメイン照明が薄暗かった。窓付近のソファーに座ると本当に暗かった。窓からは、海と街が見え景色はとてもよかった。朝のバイキングは取ったものを乗せるためのトレーが追いついていなくて私以…　2026-08-29 09:57:12投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=14862\" class=\"3click\">つづきはこちら</a>",
    "hotelMinCharge": 6700,
    "address1": "香川県",
    "address2": "高松市浜ノ町1-1",
    "telephoneNo": "087-811-1111",
    "access": "ＪＲ高松駅徒歩１分　高松空港よりバスにて４５分　タクシーにて３０分　サンポートホール隣接　レクザムホール徒歩８分",
    "parkingInformation": "ホテル地下駐車場５７台 /　高松市営駐車場（高松駅前広場）396台　１４００円（税込／泊）先着順",
    "nearestStation": "高松空港",
    "hotelSpecial": "高松駅徒歩1分　瀬戸内海や高松市内を一望出来る地上２０階建てのシティホテル。ＷｉＦｉ＆有線ＬＡＮ完備",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D14862",
    "label": "香川県高松市ふるさと納税・瀬戸内海の海水を引き込んだ水城「高松城（玉藻公園）」玉藻港を望むJRホテルクレメント高松",
    "themeTitle": "香川県高松市ふるさと納税：海水を引き込んだ玉藻城「高松城」とサンポート高松の最高峰「ＪＲホテルクレメント高松」",
    "themeDesc": "高松城（玉藻公園）に隣接し、瀬戸内海と高松港を一望するシティリゾート。高層階の客室からは行き交うフェリーや城の緑が広がり、館内レストランでは讃岐コーチンや瀬戸内の旬魚会席、名物讃岐うどんの朝食ビュッフェを堪能できます。",
    "revAvg": "4.5",
    "minCharge": "6,700"
  },
  {
    "hotelNo": 1036,
    "hotelName": "今治国際ホテル",
    "hotelKanaName": "いまばり　こくさいほてる",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D1036",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D1036%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D1036",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D1036",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/1036/1036.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/1036.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/1036/1036_twn.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/1036/1036map.gif",
    "reviewCount": 2048,
    "reviewAverage": 4.45,
    "userReview": "プールとジムを満喫、朝食の鯛茶漬けも絶品プールやジムが綺麗で満喫できました。今治城がすぐ近くに見え、瀬戸内海からの日の出が綺麗に見えて感動しました。朝食の鯛茶漬けが特に美味しかったのと、ポンジ…　2026-08-30 02:05:45投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=1036\" class=\"3click\">つづきはこちら</a>",
    "hotelMinCharge": 7830,
    "address1": "愛媛県",
    "address2": "今治市旭町2-3-4",
    "telephoneNo": "0898-36-1111",
    "access": "予讃線今治駅から徒歩で10分。",
    "parkingInformation": "有料　１泊　　800円（車高2.1Ｍまで。250台収容可能。車イス専用駐車場完備）",
    "nearestStation": "今治",
    "hotelSpecial": "ビジネス・観光に好立地・館内WIFI・全室インタ－ネット利用可能（ＬＡＮケ－ブル対応可）",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D1036",
    "label": "愛媛県今治市ふるさと納税・藤堂高虎公が築いた海城・広大な海水堀「今治城」しまなみ海道の玄関口・今治国際ホテル",
    "themeTitle": "愛媛県今治市ふるさと納税：藤堂高虎公の傑作・海水堀に浮かぶ「今治城」としなまみ海道のランドマーク「今治国際ホテル」",
    "themeDesc": "広大な海水堀を持つ今治城から車で数分。地域最大級の高層ランドマークホテル「今治国際ホテル」は、天然温泉露天風呂や温水プールを備え、来島海峡の荒波で育った来島鯛めしや伊予牛の本格ディナーを優雅に味わえます。",
    "revAvg": "4.5",
    "minCharge": "7,830"
  },
  {
    "hotelNo": 18954,
    "hotelName": "グランプラザ中津ホテル",
    "hotelKanaName": "ぐらんぷらざ　なかつほてる",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D18954",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D18954%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D18954",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D18954",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/18954/18954.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/18954.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/18954/18954_s.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/18954/18954map.gif",
    "reviewCount": 952,
    "reviewAverage": 3.98,
    "userReview": "アクセスは抜群だが接客と設備に課題あり出張で数日間お世話になりました。昔ながらのシティホテルといった雰囲気のお宿です。きちんとした車寄せ、ロビーにティーラウンジや居酒屋を備えていて、館…　2026-08-14 16:04:31投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=18954\" class=\"3click\">つづきはこちら</a>",
    "hotelMinCharge": 4500,
    "address1": "大分県",
    "address2": "中津市東本町1-2",
    "telephoneNo": "0979-24-7111",
    "access": "ＪＲ日豊本線・中津駅より徒歩３分／大分自動車道・日田ＩＣよりお車で６０分　",
    "parkingInformation": "有り　80台　無料　先着順",
    "nearestStation": "中津（大分）",
    "hotelSpecial": "【アパポイントが貯まります】チェックアウトAM11:00！駐車場(屋根付きバイク専用有り) 無料",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D18954",
    "label": "大分県中津市ふるさと納税・周防灘の河口に築かれた黒田官兵衛ゆかりの水城「中津城」福沢諭吉旧居とグランプラザ中津ホテル",
    "themeTitle": "大分県中津市ふるさと納税：黒田官兵衛ゆかりの水城「中津城」と福沢諭吉の城下町「グランプラザ中津ホテル」",
    "themeDesc": "日本最古級の近世石垣が残る中津城へ徒歩圏内。中津駅南口至近の「グランプラザ中津ホテル」を拠点に、周防灘で獲れる高級魚ハモ料理や名物中津からあげ、耶馬渓の自然と城下町の歴史散策を快適に楽しめます。",
    "revAvg": "4.0",
    "minCharge": "4,500"
  }
];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* パンくずリスト */}
      <nav className="bg-white border-b border-slate-200 py-3 px-4 text-xs text-slate-500">
        <div className="max-w-5xl mx-auto flex items-center space-x-2">
          <Link href="/" className="hover:text-emerald-600 transition">ホーム</Link>
          <span>&gt;</span>
          <span className="text-slate-700 font-medium">日本三大水城＆名城パノラマ宿×ふるさと納税ガイド</span>
        </div>
      </nav>

      {/* ヒーローヘッダー */}
      <header className="relative bg-gradient-to-br from-emerald-950 via-slate-900 to-teal-950 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-block bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-semibold px-3 py-1 rounded-full mb-2">
            日本三大水城・海城遺産特集
          </div>
          <h1 className="text-2xl md:text-4xl font-bold leading-tight tracking-tight">
            日本三大水城＆名城パノラマ宿×ふるさと納税ガイド
          </h1>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-3xl mx-auto pt-2">
            海から直接船で城内へ出入りでき、防御と海上交易の要塞として築かれた「日本三大水城（三大海城）」――瀬戸内海の海水を取り入れた広大な堀を持ち、堀の中を泳ぐ真鯛に「鯛の餌やり」ができる風雅な香川の「高松城（玉藻城）」、築城の名手・藤堂高虎が卓越した土木技術で築き、海水堀に浮かぶように立つ日本初の層塔型天守が美しい愛媛の「今治城」、そして軍師・黒田官兵衛が築城を始め細川忠興が完成させた周防灘の河口に位置する奥平十万石の城・大分の「中津城」。満ち引きによって水位が変わる海水堀と、石垣や櫓のコントラストは、陸の山城や平城にはない独特の優美さと迫力を誇ります。名城天守や港を一望するハイグレードホテルを拠点に、瀬戸内海の真鯛や来島海峡の海の幸、中津名物ハモやからあげを味わう歴史旅を楽天ふるさと納税でお楽しみください。
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
            堀を泳ぐ鯛に餌をやり、舟から天守を仰ぐ。海と城が一体となった三大水城の絶景ステイ
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>城内庭園や天守閣へ徒歩至近！混雑のない朝夕に水堀と石垣の風情を満喫</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                観光客で賑わう前の朝の澄んだ空気の中、海水堀に映る天守の影や美しい石垣を心ゆくまで散策。
              </p>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>讃岐うどん＆オリーブ地鶏、来島鯛めし＆今治焼鳥、中津ハモ会席＆からあげ</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                港町と城下町ならではの海鮮と郷土の美味を、ホテルの上質レストランや周辺の名店で贅沢に堪能。
              </p>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>楽天ふるさと納税宿泊クーポンで名門シティホテル＆温泉をお得に予約</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                瀬戸内・九州の観光拠点となる一等地ホテルでも、寄付金額に応じた即時割引で実質2,000円負担の快適宿泊。
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
            
            <Link href="/furusato-tax-three-great-bridges-history-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三大名橋＆歴史街道宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                錦帯橋・眼鏡橋・日本橋。
              </p>
            </Link>
            
            <Link href="/furusato-tax-five-national-treasure-castles-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                国宝五城＆名城天守を望む城下町宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                姫路・松本・犬山・彦根・松江。
              </p>
            </Link>
            
            <Link href="/furusato-tax-three-great-famous-stones-gardens-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三大銘石＆枯山水庭園・名湯宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                佐渡赤玉石・揖斐川石・鴨川真黒石。
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
