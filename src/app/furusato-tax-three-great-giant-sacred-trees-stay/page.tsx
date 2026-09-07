import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '日本三大巨樹＆樹齢千年の神木パワースポット・森林浴名湯宿×ふるさと納税完全ガイド【2026年最新】蒲生の大楠・阿川の大杉・北金ヶ沢の大イチョウ',
  description: '幹周り数十メートル！千年の時を生きる命の巨木！鹿児島姶良「蒲生の大楠」日本最大の巨樹とフォンタナの丘かもう、徳島神山「阿川の大杉」四国の名木と神山温泉ホテル四季の里、青森深浦「北金ヶ沢の大イチョウ」日本一の大銀杏（ビッグイエロー）と黄金崎不老ふ死温泉。日本三大巨樹（三大神木）の神聖なエネルギーと天然温泉を楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
  keywords: '日本三大巨樹・生命の神木特集, 楽天ふるさと納税, 温泉宿, ふるさと納税 旅行, 高級旅館, ホテル予約, 2026年旅行',
  openGraph: {
    title: '日本三大巨樹＆樹齢千年の神木パワースポット・森林浴名湯宿×ふるさと納税完全ガイド【2026年最新】蒲生の大楠・阿川の大杉・北金ヶ沢の大イチョウ',
    description: '幹周り数十メートル！千年の時を生きる命の巨木！鹿児島姶良「蒲生の大楠」日本最大の巨樹とフォンタナの丘かもう、徳島神山「阿川の大杉」四国の名木と神山温泉ホテル四季の里、青森深浦「北金ヶ沢の大イチョウ」日本一の大銀杏（ビッグイエロー）と黄金崎不老ふ死温泉。日本三大巨樹（三大神木）の神聖なエネルギーと天然温泉を楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    type: 'article',
    url: 'https://croud-travel.pages.dev/furusato-tax-three-great-giant-sacred-trees-stay',
    siteName: 'トラベルポータル',
  },
};

export default function Page() {
  const officialAffUrl = 'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F';

  const hotels = [
  {
    "hotelNo": 135889,
    "hotelName": "フォンタナの丘かもう",
    "hotelKanaName": "ふぉんたなのおかかもう",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D135889",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D135889%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D135889",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D135889",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/135889/135889.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/135889.jpg",
    "roomImageUrl": "",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/135889/135889map.gif",
    "reviewCount": 346,
    "reviewAverage": 4.26,
    "userReview": "スタッフの優しさと露天風呂に癒されるとても癒されるました!スタッフの方もとても優しくて嬉しかったです。温泉も最高に気持ちよかったです。露天風呂がかなり良かったです。クチコミの詳細は…　 ",
    "hotelMinCharge": 9000,
    "address1": "鹿児島県",
    "address2": "姶良市蒲生町久末434-1",
    "telephoneNo": "0120-52-1218",
    "access": "【九州自動車道】姶良インターよりお車で10分◆鹿児島空港より25分◆【ＪＲ日豊線】重富駅からお車で15分（約１０ｋｍ）",
    "parkingInformation": "有り　１４６台　無料　予約不要",
    "nearestStation": "重富",
    "hotelSpecial": "クチコミ★4!地域の健康交流拠点として親しまれる温泉ホテルです",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D135889",
    "label": "鹿児島県姶良市ふるさと納税・樹齢1500年・日本最大の巨樹幹周り24m「蒲生の大楠」天然温泉と有機野菜フォンタナの丘かもう",
    "themeTitle": "鹿児島県姶良市ふるさと納税：幹周り日本一・樹齢1500年の国特別天然記念物「蒲生の大楠」と「フォンタナの丘かもう」",
    "themeDesc": "蒲生八幡神社の大楠まで車で数分。全室に檜風呂を備えた温泉宿「フォンタナの丘かもう」では、地下から湧く良質な天然温泉と、自社農園の無農薬有機野菜や鹿児島黒豚を使った健康美食を味わい、心身のデトックスを満喫します。",
    "revAvg": "4.3",
    "minCharge": "9,000"
  },
  {
    "hotelNo": 14442,
    "hotelName": "神山温泉　ホテル四季の里＆いやしの湯",
    "hotelKanaName": "かみやまおんせん　しきのさと",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D14442",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D14442%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D14442",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D14442",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/14442/14442.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/14442.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/14442/14442_room.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/14442/14442map.gif",
    "reviewCount": 263,
    "reviewAverage": 4.36,
    "userReview": "邪馬台国阿波説探訪邪馬台国阿波説探訪に丁度良い温泉ホテルでした。近くに上一宮大粟神社や雨乞の滝もあり、日本の田舎の夏を満喫致しました。又、邪馬台国阿波説探訪に是非訪れたいと思っております。有難うご…　 ",
    "hotelMinCharge": 6490,
    "address1": "徳島県",
    "address2": "名西郡神山町神領本上角80-2",
    "telephoneNo": "088-676-1117",
    "access": "ＪＲ徳島駅よりバスにて約60分／徳島自動車道藍住ＩＣより45分／高松自動車道坂野ＩＣより55分",
    "parkingInformation": "有り120台（無料・先着順）",
    "nearestStation": "徳島",
    "hotelSpecial": "県都徳島市より車で35分の里山環境。地産の料理とぬるぬるとした泉質が自慢。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D14442",
    "label": "徳島県神山町・名西郡ふるさと納税・樹齢千年の神宿る巨樹「阿川の大杉」里山の自然と美肌湯・神山温泉ホテル四季の里",
    "themeTitle": "徳島県神山町ふるさと納税：樹齢千年の神宿る巨木「阿川の大杉」と里山の名湯「神山温泉 ホテル四季の里＆いやしの湯」",
    "themeDesc": "深い自然に囲まれた阿川の大杉の里。重曹泉のぬるぬる美肌温泉が評判の「ホテル四季の里」で、鮎川のせせらぎを聞きながら湯浴みを愉しみ、徳島名産阿波尾鶏や山菜、すだちを使った郷土会席料理を堪能できます。",
    "revAvg": "4.4",
    "minCharge": "6,490"
  },
  {
    "hotelNo": 80717,
    "hotelName": "黄金崎不老ふ死温泉",
    "hotelKanaName": "こがねざきふろうふしおんせん",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D80717",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D80717%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D80717",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D80717",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/80717/80717.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/80717.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/80717/80717_kya.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/80717/80717map.gif",
    "reviewCount": 1236,
    "reviewAverage": 4.47,
    "userReview": "海を望む露天風呂は最高、食事も美味しい海に触れながら入る露天風呂は最高です。こんなお風呂はここしかないです!食事も美味しいです!ちょっと保温が足りないのが残念。クチコミの詳細はこちらか…　 ",
    "hotelMinCharge": 10450,
    "address1": "青森県",
    "address2": "西津軽郡深浦町舮作下清滝15",
    "telephoneNo": "0173-74-3500",
    "access": "ウェスパ椿山駅よりお車で５分。",
    "parkingInformation": "有り　100台　無料　予約不要",
    "nearestStation": "ウェスパ椿山",
    "hotelSpecial": "雄大な日本海の波打ち際にある露天風呂。網元である幣社自慢の海の幸を、存分にお楽しみ下さい。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D80717",
    "label": "青森県深浦町ふるさと納税・日本一の巨木イチョウ「ビッグイエロー北金ヶ沢」海辺の露天風呂と黄金崎不老ふ死温泉",
    "themeTitle": "青森県深浦町ふるさと納税：日本一の大イチョウ「北金ヶ沢のビッグイエロー」と日本海一望「黄金崎不老ふ死温泉」",
    "themeDesc": "樹齢千年を超える日本最大のイチョウの巨木から海岸線を南下。日本海の波打ち際に湧く赤褐色の混浴露天風呂で名高い「不老ふ死温泉」で、海に沈む夕日を眺め、獲れたて深浦マグロや三陸・津軽の海の幸会席を堪能します。",
    "revAvg": "4.5",
    "minCharge": "10,450"
  }
];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* パンくずリスト */}
      <nav className="bg-white border-b border-slate-200 py-3 px-4 text-xs text-slate-500">
        <div className="max-w-5xl mx-auto flex items-center space-x-2">
          <Link href="/" className="hover:text-emerald-600 transition">ホーム</Link>
          <span>&gt;</span>
          <span className="text-slate-700 font-medium">日本三大巨樹＆神木パワースポット宿×ふるさと納税ガイド</span>
        </div>
      </nav>

      {/* ヒーローヘッダー */}
      <header className="relative bg-gradient-to-br from-emerald-950 via-slate-900 to-teal-950 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-block bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-semibold px-3 py-1 rounded-full mb-2">
            日本三大巨樹・生命の神木特集
          </div>
          <h1 className="text-2xl md:text-4xl font-bold leading-tight tracking-tight">
            日本三大巨樹＆神木パワースポット宿×ふるさと納税ガイド
          </h1>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-3xl mx-auto pt-2">
            環境省の巨樹・巨木林調査において日本を代表する最高峰の神木「日本三大巨樹」――幹周り24.2メートル、樹齢約1500年を誇り国特別天然記念物に指定される日本一の巨樹・鹿児島の「蒲生の大楠（蒲生八幡神社）」、徳島の深い山懐にそびえ立ち国の天然記念物として神聖な威厳を放つ樹齢千年の「阿川の大杉」、そして幹周り22メートル、秋には黄金色の葉を纏い「ビッグイエロー」として親しまれる日本最大のイチョウ・青森の「北金ヶ沢の大イチョウ（垂乳根のイチョウ）」。気の遠くなるような年月を生き抜いてきた巨樹の根元に立つと、言葉を失うほどの圧倒的な包容力と生命の神秘に包まれます。巨樹の里の温泉宿や海辺の絶景露天風呂を拠点に、郷土の味覚と澄み切った森の空気に癒やされる特別な休日を楽天ふるさと納税でお楽しみください。
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
            圧倒的な生命力と深い森の静寂。千年の風雪を耐え抜いた日本三大巨樹の懐へ
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>神木の立つ境内や里山へ朝一番の静寂参拝！澄んだ空気の中でパワーチャージ</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                観光客の少ない朝の時間帯に巨樹と向き合い、木漏れ日の中で深呼吸する至福のリトリート。
              </p>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>鹿児島黒豚＆地鶏、阿波尾鶏＆すだち料理、津軽海峡の旬魚＆深浦マグロ</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                大自然の力強い大地の恵みを、各宿自慢の本格会席や囲炉裏料理で贅沢に堪能。
              </p>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>楽天ふるさと納税宿泊クーポンで秘湯の一軒宿や自然派リゾートをお得に利用</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                予約困難な名湯露天風呂付き宿も、寄付金額に応じた即時割引クーポンで実質2,000円負担の快適ステイ。
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
            
            <Link href="/furusato-tax-three-great-beautiful-forests-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三大美林＆森林浴名湯宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                青森ヒバ・秋田スギ・木曽ヒノキ。
              </p>
            </Link>
            
            <Link href="/furusato-tax-three-great-primeval-forests-nature-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三大原生林＆世界遺産ネイチャー宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                知床・屋久島・白神山地。
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
