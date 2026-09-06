import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '日本三大高原＆爽快マウンテンリゾート・白樺と星空の露天風呂宿×ふるさと納税完全ガイド【2026年最新】志賀高原・軽井沢・白樺湖霧ヶ峰',
  description: '標高1000〜2000mを吹き抜ける涼風！長野山ノ内「志賀高原」ユネスコエコパークと志賀高原ホテル一望閣、長野「軽井沢高原」明治以来の憧れ避暑地とアパホテル軽井沢駅前軽井沢荘、長野茅野・諏訪「霧ヶ峰・白樺湖」ニッコウキスゲ咲くスカイラインと芹ヶ沢温泉白樺湖ビューホテル。日本三大高原（三大高原リゾート）の爽快ステイを楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
  keywords: '日本三大高原・避暑マウンテン特集, 楽天ふるさと納税, 温泉宿, ふるさと納税 旅行, 高級旅館, ホテル予約, 2026年旅行',
  openGraph: {
    title: '日本三大高原＆爽快マウンテンリゾート・白樺と星空の露天風呂宿×ふるさと納税完全ガイド【2026年最新】志賀高原・軽井沢・白樺湖霧ヶ峰',
    description: '標高1000〜2000mを吹き抜ける涼風！長野山ノ内「志賀高原」ユネスコエコパークと志賀高原ホテル一望閣、長野「軽井沢高原」明治以来の憧れ避暑地とアパホテル軽井沢駅前軽井沢荘、長野茅野・諏訪「霧ヶ峰・白樺湖」ニッコウキスゲ咲くスカイラインと芹ヶ沢温泉白樺湖ビューホテル。日本三大高原（三大高原リゾート）の爽快ステイを楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    type: 'article',
    url: 'https://croud-travel.pages.dev/furusato-tax-three-great-highlands-resort-stay',
    siteName: 'トラベルポータル',
  },
};

export default function Page() {
  const officialAffUrl = 'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F';

  const hotels = [
  {
    "hotelNo": 7379,
    "hotelName": "志賀高原　ホテル一望閣",
    "hotelKanaName": "しがこうげん　ほてるいちぼうかく",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D7379",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D7379%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D7379",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D7379",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/7379/7379.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/7379.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/7379/7379_heya.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/7379/7379map.gif",
    "reviewCount": 286,
    "reviewAverage": 3.65,
    "userReview": "温泉の泉質だけは満足できた温泉だけは良かったクチコミの詳細はこちらから　https://review.travel.rakuten.co.jp/hotel/voice/7379?reviewI…　2026-08-24 11:47:38投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=7379\" class=\"3click\">つづきはこちら</a>",
    "hotelMinCharge": 6800,
    "address1": "長野県",
    "address2": "下高井郡山ノ内町大字平穏7148-31",
    "telephoneNo": "0269-34-2031",
    "access": "上信越道信州中野ＩＣより国道２９２号線にて４５分。ＪＲ長野駅より急行バス８０分又は長電特急電車５０分＆バス利用４５分。",
    "parkingInformation": "有り　５０台。　当館前が満車の場合は徒歩３～４分の共同駐車場となります。共に無料",
    "nearestStation": "長野",
    "hotelSpecial": "2023年コンドミニアム新客室OPEN★乳緑色が珍しい100％天然かけ流し温泉が自慢★日本一のホタル",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D7379",
    "label": "長野県山ノ内町ふるさと納税・標高2000mの白銀と高山植物「志賀高原」大自然パノラマと志賀高原プリンスホテル",
    "themeTitle": "長野県山ノ内町ふるさと納税：標高2000mの絶景パノラマと自家源泉温泉「志賀高原 ホテル一望閣」",
    "themeDesc": "志賀高原・ほたる温泉に位置する山岳リゾートホテル。ほたる温泉の自家源泉かけ流し大浴場や露天風呂で寛ぎ、信州の山の幸や川魚を使った会席料理を味わい、夏の新緑・秋の紅葉・冬のスキーを満喫できます。",
    "revAvg": "3.6",
    "minCharge": "6,800"
  },
  {
    "hotelNo": 109519,
    "hotelName": "アパホテル〈軽井沢駅前〉軽井沢荘　（２０２６年５月リニューアル）",
    "hotelKanaName": "あぱほてるかるいざわえきまえかるいざわそう",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D109519",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D109519%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D109519",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D109519",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/109519/109519.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/109519.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/109519/109519_kya.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/109519/109519map.gif",
    "reviewCount": 1405,
    "reviewAverage": 3.98,
    "userReview": "清潔な部屋と充実した備品で大満足部屋も清潔で、大変満足です。備品等も充実、また、是非利用したいです。クチコミの詳細はこちらから　https://review.travel.rakuten.co…　2026-08-28 09:19:14投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=109519\" class=\"3click\">つづきはこちら</a>",
    "hotelMinCharge": 6070,
    "address1": "長野県",
    "address2": "北佐久郡軽井沢町軽井沢1178-1135",
    "telephoneNo": "0570-053-711",
    "access": "北陸新幹線、しなの鉄道　軽井沢駅北口より徒歩2分／上信越自動車道碓氷軽井沢ＩＣより車で約20分（約12km）",
    "parkingInformation": "敷地内14台　コインパーキング形式。高さ2m未満　1泊1,500円（15時から翌11時）",
    "nearestStation": "軽井沢",
    "hotelSpecial": "改札を抜けた先は高原リゾート。フットワークの軽さが思い出の数になる、リゾートの中心に滞在する特権。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D109519",
    "label": "長野県軽井沢町ふるさと納税・明治以来の日本屈指の高原保養地「軽井沢高原」白樺林と軽井沢プリンスホテルウエスト",
    "themeTitle": "長野県軽井沢町ふるさと納税：日本屈指の避暑地・駅前好立地「アパホテル〈軽井沢駅前〉軽井沢荘」",
    "themeDesc": "軽井沢駅北口から徒歩2分の抜群のロケーション。旧軽井沢銀座やアウトレットへのアクセスもスムーズで、快適な最新設備を備えた客室で高原の爽やかな風を感じながら、洗練された軽井沢リゾートステイを楽しめます。",
    "revAvg": "4.0",
    "minCharge": "6,070"
  },
  {
    "hotelNo": 72037,
    "hotelName": "芹ヶ沢温泉　白樺湖ビューホテル（伊東園ホテルズ）",
    "hotelKanaName": "せりがさわおんせん　しらかばこびゅーほてる",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D72037",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D72037%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D72037",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D72037",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/72037/72037.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/72037.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/72037/72037_wa.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/72037/72037map.gif",
    "reviewCount": 854,
    "reviewAverage": 3.68,
    "userReview": "料理は美味しいがエアコンの効きが悪く暑い料理は美味しかった。部屋のエアコンが通路側のベッドにまで届かなくて暑くて飛び起きました。クチコミの詳細はこちらから　https://review.tra…　2026-08-29 18:46:43投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=72037\" class=\"3click\">つづきはこちら</a>",
    "hotelMinCharge": 6248,
    "address1": "長野県",
    "address2": "北佐久郡立科町芦田八ヶ野白樺湖1525",
    "telephoneNo": "0570-085-780",
    "access": "ＪＲ　茅野駅よりバス乗車約５０分、西白樺湖下車徒歩４分",
    "parkingInformation": "有り　７0台　無料　予約不要",
    "nearestStation": "茅野",
    "hotelSpecial": "四季の表情の豊かな白樺湖、春の優しさ、夏は爽やかな風、秋には豊かな実り、冬は白銀の世界へ。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D72037",
    "label": "長野県茅野市・諏訪市ふるさと納税・天空のニッコウキスゲと爽快スカイライン「霧ヶ峰・美ヶ原高原」蓼科東急ホテル",
    "themeTitle": "長野県茅野市ふるさと納税：白樺湖畔のレイクビューと天然温泉「芹ヶ沢温泉 白樺湖ビューホテル」",
    "themeDesc": "ビーナスライン・霧ヶ峰高原のドライブ観光に最適な白樺湖畔のホテル。芹ヶ沢温泉の湯を引いた展望大浴場から湖の景色を眺め、種類豊富な和洋中バイキングと地酒飲み放題でアクティブな高原旅を満喫します。",
    "revAvg": "3.7",
    "minCharge": "6,248"
  }
];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* パンくずリスト */}
      <nav className="bg-white border-b border-slate-200 py-3 px-4 text-xs text-slate-500">
        <div className="max-w-5xl mx-auto flex items-center space-x-2">
          <Link href="/" className="hover:text-emerald-600 transition">ホーム</Link>
          <span>&gt;</span>
          <span className="text-slate-700 font-medium">日本三大高原＆マウンテンリゾート宿×ふるさと納税ガイド</span>
        </div>
      </nav>

      {/* ヒーローヘッダー */}
      <header className="relative bg-gradient-to-br from-emerald-950 via-slate-900 to-teal-950 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-block bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-semibold px-3 py-1 rounded-full mb-2">
            日本三大高原・避暑マウンテン特集
          </div>
          <h1 className="text-2xl md:text-4xl font-bold leading-tight tracking-tight">
            日本三大高原＆マウンテンリゾート宿×ふるさと納税ガイド
          </h1>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-3xl mx-auto pt-2">
            都会の喧騒を離れ、標高1000mから2000mを超える高地に広がる日本屈指の山岳オアシス「日本三大高原（三大高原リゾート）」――広大な原生林と湖沼群が点在しユネスコエコパークに指定され天然温泉も湧き出る長野山ノ内の「志賀高原」、明治時代に外国人避暑地として開かれて以来、洗練されたクラシックホテルや別荘文化が息づく長野の「軽井沢高原」、そしてビーナスライン沿いにニッコウキスゲの黄色い絨毯やレンゲツツジが咲き乱れ富士山やアルプスを望む「霧ヶ峰・白樺湖・美ヶ原高原」。高原の朝は鳥のさえずりで目覚め、夜は降るような満天の星空が広がります。白樺林に囲まれたリゾートホテルや高原温泉宿を拠点に、信州牛や高原野菜、信州蕎麦の美食を堪能する特別な休日を楽天ふるさと納税でお楽しみください。
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
            白樺林の木漏れ日と澄み切った高原の空気。夏は避暑、秋は紅葉、冬はパウダースノーの楽園へ
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>トレッキングやスキー場直結！アクティビティを満喫した後は高原温泉でリフレッシュ</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                ハイキングコースやゲレンデへスムーズにアクセスし、疲れた体を天然温泉大浴場や露天風呂で癒やす。
              </p>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>信州プレミアム牛ステーキ、高原夏野菜ビュッフェ、信州手打ち蕎麦と地ビール</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                標高の寒暖差が育んだ甘みたっぷりの高原野菜やブランド牛を各宿自慢のディナーで堪能。
              </p>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>楽天ふるさと納税宿泊クーポンで高原ホテルやリゾートをお得にスマート予約</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                ハイシーズンの避暑やスキー旅行でも、寄付金額に応じた即時割引クーポンで実質2,000円負担の快適滞在。
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
                        {h.hotelSpecial || '日本三大和牛の美食、三大急潮のダイナミズム、和紙工芸の伝統、高原マウンテンリゾートの爽快ステイを満喫する極上の拠点。名湯と美食でお寛ぎください。'}
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
            あわせて読みたい日本の美食・海峡・高原特集
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            
            <Link href="/furusato-tax-three-great-beautiful-forests-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三大美林＆森林浴名湯宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                青森ヒバ・秋田スギ・木曽ヒノキ。
              </p>
            </Link>
            
            <Link href="/furusato-tax-three-sacred-mountains-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三霊山＆霊峰パノラマ宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                富士山・立山・白山。
              </p>
            </Link>
            
            <Link href="/furusato-tax-three-great-train-window-views-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三大車窓＆鉄道浪漫パノラマ宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                姨捨・矢岳越え・狩勝峠。
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
