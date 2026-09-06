import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '日本三霊山＆神聖なる霊峰パノラマ・天空露天風呂宿×ふるさと納税完全ガイド【2026年最新】富士山・立山・白山',
  description: '日本人の心の原風景たる神の峰！山梨・静岡「富士山」富士五湖と逆さ富士パノラマの大池ホテル、富山「立山」立山黒部アルペンルートと美肌湯ホテル森の風立山、石川・岐阜「霊峰白山」泰澄大師が開山した白き神峰と白山麓春風旅館。日本三霊山（三大名山）の霊峰絶景と温泉を楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
  keywords: '日本三霊山・名峰ネイチャー特集, 楽天ふるさと納税, 温泉宿, ふるさと納税 旅行, 高級旅館, ホテル予約, 2026年旅行',
  openGraph: {
    title: '日本三霊山＆神聖なる霊峰パノラマ・天空露天風呂宿×ふるさと納税完全ガイド【2026年最新】富士山・立山・白山',
    description: '日本人の心の原風景たる神の峰！山梨・静岡「富士山」富士五湖と逆さ富士パノラマの大池ホテル、富山「立山」立山黒部アルペンルートと美肌湯ホテル森の風立山、石川・岐阜「霊峰白山」泰澄大師が開山した白き神峰と白山麓春風旅館。日本三霊山（三大名山）の霊峰絶景と温泉を楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    type: 'article',
    url: 'https://croud-travel.pages.dev/furusato-tax-three-sacred-mountains-stay',
    siteName: 'トラベルポータル',
  },
};

export default function Page() {
  const officialAffUrl = 'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F';

  const hotels = [
  {
    "hotelNo": 2946,
    "hotelName": "富士河口湖温泉　富士山の見える温泉旅館　大池ホテル",
    "hotelKanaName": "ふじかわぐちこおんせん　ふじさんのみえるおんせんりょかん　おおいけほてる",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D2946",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D2946%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D2946",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D2946",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/2946/2946.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/2946.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/2946/2946_wa.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/2946/2946map.gif",
    "reviewCount": 5519,
    "reviewAverage": 4.32,
    "userReview": "赤ちゃん連れに優しく、食事もゆっくり楽しめた今回11ヶ月の娘との初めての家族旅行で利用しました。キッズスペースも広く、娘も楽しく遊んでました。別館のお部屋はとっても広く、綺麗で赤ちゃんも過ごしやす…　2026-08-28 14:00:09投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=2946\" class=\"3click\">つづきはこちら</a>",
    "hotelMinCharge": 11000,
    "address1": "山梨県",
    "address2": "南都留郡富士河口湖町船津6713-103",
    "telephoneNo": "0555-72-2563",
    "access": "駅から無料送迎有■駐車場無料■河口湖駅から車で4分■富士急から車で7分河口湖ICから車で12分新宿駅からバスで約120分",
    "parkingInformation": "無料駐車場50台・河口湖駅からの無料送迎有・バイク専用の駐車場無・富士急ハイランドまで車で7分",
    "nearestStation": "河口湖",
    "hotelSpecial": "山梨 富士山 河口湖 露天風呂 温泉 バイキング ブッフェ 温泉　貸切露天風呂",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D2946",
    "label": "山梨県富士河口湖町・富士吉田市ふるさと納税・日本一の霊峰と湖畔パノラマ「富士山」逆さ富士を望む名湯富士レイクホテル",
    "themeTitle": "山梨県富士河口湖町ふるさと納税：河口湖畔から霊峰の威容を仰ぐ「富士河口湖温泉 富士山の見える温泉旅館 大池ホテル」",
    "themeDesc": "河口湖のほとりに建ち、最上階の展望大浴場「富士山」や庭園露天風呂から富士の絶景を間近に望む名宿。甲州ワインビーフや旬の味覚を彩った本格和食会席と、温泉情緒あふれる和室で富士山ステイを心ゆくまで堪能します。",
    "revAvg": "4.3",
    "minCharge": "11,000"
  },
  {
    "hotelNo": 147597,
    "hotelName": "立山連峰の宿　ホテル森の風立山",
    "hotelKanaName": "たてやまれんぽうのやど　ほてるもりのかぜたてやま",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D147597",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D147597%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D147597",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D147597",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/147597/147597.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/147597.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/147597/147597_kan1.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/147597/147597map.gif",
    "reviewCount": 654,
    "reviewAverage": 4.45,
    "userReview": "創作料理とスタッフの心遣いに癒される時間夕食の創作料理は、料理長の思いが込められており、とても美味しくいただけました。さらにスタッフの皆様の親切丁寧なもてなしにも癒されました。眺望がない部屋でした…　2026-08-26 08:01:10投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=147597\" class=\"3click\">つづきはこちら</a>",
    "hotelMinCharge": 19250,
    "address1": "富山県",
    "address2": "富山市原3-6",
    "telephoneNo": "076-481-1126",
    "access": "立山駅よりお車にて約７分（送迎有り）",
    "parkingInformation": "有り　２００台　無料　予約不要",
    "nearestStation": "立山",
    "hotelSpecial": "アルペンルート観光に絶好のホテルです。源泉掛け流し露天風呂付き『別邸 四季彩』が大好評です。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D147597",
    "label": "富山県立山町ふるさと納税・神仏習合の信仰と雄大なる立山連峰「立山」立山黒部アルペンルートと美肌の湯ホテル森の風立山",
    "themeTitle": "富山県立山町ふるさと納税：立山黒部アルペンルートの玄関口に建つ美肌の湯「立山連峰の宿 ホテル森の風立山」",
    "themeDesc": "立山連峰の大自然に抱かれた高原リゾート。美肌効果抜群のつるつる温泉大浴場や露天風呂を備え、富山湾の宝石・白えびやホタルイカ、富山牛を贅沢に使った創作会席料理で、登拝の歴史と山岳美を五感で味わえます。",
    "revAvg": "4.5",
    "minCharge": "19,250"
  },
  {
    "hotelNo": 41380,
    "hotelName": "白山麓の温泉宿　春風旅館",
    "hotelKanaName": "はくさんろくのおんせんやど　はるかぜりょかん",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D41380",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D41380%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D41380",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D41380",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/41380/41380.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/41380.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/41380/41380_kya.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/41380/41380map.gif",
    "reviewCount": 35,
    "reviewAverage": 4,
    "userReview": "",
    "hotelMinCharge": 0,
    "address1": "石川県",
    "address2": "白山市白峰ロ-7",
    "telephoneNo": "076-259-2032",
    "access": "金沢駅／白峰（北陸鉄道）バス停より徒歩３分／福井北ＩＣより５０分／金沢西ＩＣより６０分",
    "parkingInformation": "有り　７台　予約不要",
    "nearestStation": "金沢",
    "hotelSpecial": "つるつる温泉・昔風・和風の宿で、岩魚・山菜・手打ちおろしそばを、お召し上がり下さい。 総湯前",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D41380",
    "label": "石川県白山市ふるさと納税・泰澄大師が開山した白き神の峰「霊峰白山」囲炉裏炭火会席と源泉かけ流し一里野高原ホテルろあん",
    "themeTitle": "石川県白山市ふるさと納税：白山信仰の聖地・手取川の清流を望む「白山麓の温泉宿 春風旅館」",
    "themeDesc": "霊峰白山の手取峡谷や白山比咩神社への参拝に好立地。春風旅館では、白山麓の天然温泉と、白山水系の清流で育った岩魚の塩焼きや山菜料理、白山堅豆腐など素朴で温かい郷土の味に癒やされます。",
    "revAvg": "4.0",
    "minCharge": "8,000"
  }
];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* パンくずリスト */}
      <nav className="bg-white border-b border-slate-200 py-3 px-4 text-xs text-slate-500">
        <div className="max-w-5xl mx-auto flex items-center space-x-2">
          <Link href="/" className="hover:text-emerald-600 transition">ホーム</Link>
          <span>&gt;</span>
          <span className="text-slate-700 font-medium">日本三霊山＆霊峰パノラマ宿×ふるさと納税ガイド</span>
        </div>
      </nav>

      {/* ヒーローヘッダー */}
      <header className="relative bg-gradient-to-br from-emerald-950 via-slate-900 to-teal-950 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-block bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-semibold px-3 py-1 rounded-full mb-2">
            日本三霊山・名峰ネイチャー特集
          </div>
          <h1 className="text-2xl md:text-4xl font-bold leading-tight tracking-tight">
            日本三霊山＆霊峰パノラマ宿×ふるさと納税ガイド
          </h1>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-3xl mx-auto pt-2">
            日本古来の山岳信仰と修験道が息づき、その圧倒的な美しさで畏敬を集めてきた「日本三霊山（三大名山）」――言わずと知れた日本の象徴であり、四季折々に刻々と姿を変える美しき独立峰・山梨と静岡の「富士山」、雄山・大汝山・富士ノ折立が連なり、神仏習合の立山信仰と壮大な氷河地形が広がる富山の「立山」、そして養老元年（717年）に泰澄大師によって開山され、雪解けの豊かな名水が加賀平野を潤す石川・岐阜の「白山」。神が宿ると信じられてきた名峰を間近に仰ぐ体験は、訪れる者の心を洗い、新たな活力を与えてくれます。霊峰を望む絶景展望露天風呂や高原リゾートを拠点に、清流の名水料理や山の恵み、天然温泉に身を委ねる清らかな休日を楽天ふるさと納税でお楽しみください。
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
            雲海を突き抜ける神々しき峰々。古来より祈りを捧げられてきた日本三霊山の麓へ
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>霊峰の稜線や朝日・夕暮れの赤富士を独占！客室や展望露天風呂からのパノラマ</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                朝靄に浮かぶ霊峰のシルエットや茜色に染まる夕景を、宿のテラスや湯船から静かに鑑賞。
              </p>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>甲州牛＆富士桜ポーク、富山湾の白えび＆寒ブリ、加賀野菜と白山ジビエ会席</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                霊峰がもたらす清冽な伏流水で育まれた一級品の食材を、趣向を凝らしたディナーで堪能。
              </p>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>楽天ふるさと納税宿泊クーポンで山岳リゾートや歴史ある温泉宿をお得にリザーブ</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                登山や観光のベストシーズンでも、寄付金額に応じた即時割引クーポンで実質2,000円負担の快適宿泊。
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
            
            <Link href="/furusato-tax-three-great-beautiful-forests-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三大美林＆森林浴名湯宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                青森ヒバ・秋田スギ・木曽ヒノキ。
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
            
            <Link href="/furusato-tax-three-great-waterfalls-hotsprings-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三名瀑＆飛瀑の轟音に癒やされる温泉宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                那智・華厳・袋田。
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
