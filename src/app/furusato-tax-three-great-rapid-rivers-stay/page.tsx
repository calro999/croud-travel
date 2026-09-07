import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '日本三大急流＆爽快川下り舟と清流鮎グルメ宿×ふるさと納税完全ガイド【2026年最新】最上川・富士川・球磨川',
  description: '激流を駆け抜ける大迫力の川下りと清流の恵み！山形「最上川」芭蕉ゆかりの舟下りと全室リバービュー高見屋最上川別邸紅、静岡「富士川」富士山を仰ぐ日本屈指の急流とホテルルートイン富士中央公園東、熊本「球磨川」球磨川下りと天然アユ・球磨焼酎を味わう登録有形文化財の宿人吉温泉芳野旅館。日本三大急流の豪快な自然美を楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
  keywords: '日本三大急流・川下り特集, 楽天ふるさと納税, 温泉宿, ふるさと納税 旅行, 高級旅館, ホテル予約, 2026年旅行',
  openGraph: {
    title: '日本三大急流＆爽快川下り舟と清流鮎グルメ宿×ふるさと納税完全ガイド【2026年最新】最上川・富士川・球磨川',
    description: '激流を駆け抜ける大迫力の川下りと清流の恵み！山形「最上川」芭蕉ゆかりの舟下りと全室リバービュー高見屋最上川別邸紅、静岡「富士川」富士山を仰ぐ日本屈指の急流とホテルルートイン富士中央公園東、熊本「球磨川」球磨川下りと天然アユ・球磨焼酎を味わう登録有形文化財の宿人吉温泉芳野旅館。日本三大急流の豪快な自然美を楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    type: 'article',
    url: 'https://croud-travel.pages.dev/furusato-tax-three-great-rapid-rivers-stay',
    siteName: 'トラベルポータル',
  },
};

export default function Page() {
  const officialAffUrl = 'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F';

  const hotels = [
  {
    "hotelNo": 147592,
    "hotelName": "高見屋　最上川別邸　紅",
    "hotelKanaName": "たかみや　もがみがわべってい　べに",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D147592",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D147592%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D147592",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D147592",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/147592/147592.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/147592.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/147592/147592_room.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/147592/147592map.gif",
    "reviewCount": 405,
    "reviewAverage": 4.25,
    "userReview": "川の眺めは良いが工事の視線が気になったお風呂が残念部屋から目の前の川がよく見える所でよかったが反対側で工事をしている作業員が10名ほどこれ以上言わなくてもわかると思いますがチェックイン…　 ",
    "hotelMinCharge": 10450,
    "address1": "山形県",
    "address2": "最上郡戸沢村古口3058",
    "telephoneNo": "023-610-9602",
    "access": "東京・仙台方面→東北自動車道→村田JCT→山形自動車道→山形北IC→国道13号→国道47号→宿",
    "parkingInformation": "有り　２０台　無料　",
    "nearestStation": "高屋",
    "hotelSpecial": "～名湯一門　高見屋～全ての窓から最上川の風雅な景色を眺める、寛ぎの温泉旅館-ＢＥＮＩ-",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D147592",
    "featureKey": "river_mogami",
    "featureLabel": "山形県戸沢村・新庄市ふるさと納税・松尾芭蕉も句を詠んだ五月雨を集める大河「最上川舟下り」草薙温泉渓流ステイ",
    "themeTitle": "山形県戸沢村ふるさと納税：最上川舟下りの乗船場すぐ・全室リバービューの湯宿「高見屋 最上川別邸 紅」",
    "themeDesc": "雄大な最上川のほとりに佇み、客室や露天風呂から四季折々に移ろう川面を望む隠れ宿。芭蕉ライン舟下りの拠点に最適で、山形牛のすき焼きや最上川の清流が育んだ川魚、山形の旬菜会席を地酒とともにゆったりと楽しめます。",
    "revAvg": "4.3",
    "minCharge": "10,450"
  },
  {
    "hotelNo": 158683,
    "hotelName": "ホテルルートイン富士中央公園東",
    "hotelKanaName": "ほてるるーといんふじちゅうおうこうえんひがし",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D158683",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D158683%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D158683",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D158683",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/158683/158683.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/158683.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/158683/158683_kan1.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/158683/158683map.gif",
    "reviewCount": 1028,
    "reviewAverage": 4.27,
    "userReview": "お風呂も朝食も接客も大満足のちょい旅お風呂も良い!朝食も良い!そしてスタッフも良い!とても良いちょい旅になりました。クチコミの詳細はこちらから　https://review.travel.ra…　 ",
    "hotelMinCharge": 6300,
    "address1": "静岡県",
    "address2": "富士市永田町2-81-1",
    "telephoneNo": "050-5847-7477",
    "access": "東名高速道路『富士インター』より車で7分／ＪＲ東海道新幹線『新富士駅』より車で9分／JR東海道線『富士駅』より車で10分",
    "parkingInformation": "無料　87台（敷地内自走式立体駐車場）　※制限あり（高さ制限2.1m）",
    "nearestStation": "富士",
    "hotelSpecial": "★繁華街に立地★独立型デスク＆ソファで機能的な客室■人工温泉大浴場完備■朝食バイキング・駐車場無料",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D158683",
    "featureKey": "river_fujikawa",
    "featureLabel": "静岡県富士市・富士宮市ふるさと納税・富士山麓を駆け抜け駿河湾へ注ぐ日本屈指の急流「富士川」ホテルグランド富士",
    "themeTitle": "静岡県富士市ふるさと納税：富士川の急流と雄大な富士山を望む拠点「ホテルルートイン富士中央公園東」",
    "themeDesc": "富士川河口近く、富士山を一望する中央公園東に位置する快適ホテル。男女別大浴場「旅人の湯」で疲れを癒やし、バイキング朝食を無料提供。近隣の富士川楽座や由比港の桜えび、富士宮やきそばの食べ歩き拠点として抜群のロケーションです。",
    "revAvg": "4.3",
    "minCharge": "6,300"
  },
  {
    "hotelNo": 16280,
    "hotelName": "国登録有形文化財の宿　人吉温泉　芳野旅館",
    "hotelKanaName": "くにとうろくゆうけいぶんかざいのやど　ひとよしおんせん　よしのりょかん",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D16280",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D16280%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D16280",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D16280",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/16280/16280.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/16280.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/16280/16280_w.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/16280/16280map.gif",
    "reviewCount": 127,
    "reviewAverage": 4.52,
    "userReview": "10年ぶりの再訪、貸切風呂と温泉に大満足10年ぶりにお世話になりました。台風被害を経て、古き良きと新しさと清潔感のお宿にバージョンアップされておりました。やっぱり人吉のお湯は最高ですね…　 ",
    "hotelMinCharge": 7700,
    "address1": "熊本県",
    "address2": "人吉市上青井町180",
    "telephoneNo": "0966-22-2244",
    "access": "人吉ICより車で約8分",
    "parkingInformation": "有り　30台　無料　先着順",
    "nearestStation": "人吉",
    "hotelSpecial": "【国登録有形文化財の宿】歴史感じる純和風旅館　源泉掛け流し天然温泉と旬の会席料理で心和むひと時を",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D16280",
    "featureKey": "river_kumagawa",
    "featureLabel": "熊本県人吉市ふるさと納税・球磨川下りと天然アユの宝庫「球磨川」名湯人吉温泉清流山水花あゆの里",
    "themeTitle": "熊本県人吉市ふるさと納税：球磨川下りと天然アユの里・大正モダン薫る国登録有形文化財「人吉温泉 芳野旅館」",
    "themeDesc": "人吉城下町の中心に位置し、大正時代から続く国登録有形文化財の老舗温泉宿。球磨川の激流が育んだ極上の天然アユ塩焼きや馬刺し、黒毛和牛会席を味わい、美肌の湯として名高い源泉かけ流しの人吉温泉と球磨焼酎の古酒を心ゆくまで堪能できます。",
    "revAvg": "4.5",
    "minCharge": "7,700"
  }
];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* パンくずリスト */}
      <nav className="bg-white border-b border-slate-200 py-3 px-4 text-xs text-slate-500">
        <div className="max-w-5xl mx-auto flex items-center space-x-2">
          <Link href="/" className="hover:text-emerald-600 transition">ホーム</Link>
          <span>&gt;</span>
          <span className="text-slate-700 font-medium">日本三大急流＆川下り舟体験・清流鮎グルメ宿×ふるさと納税ガイド</span>
        </div>
      </nav>

      {/* ヒーローヘッダー */}
      <header className="relative bg-gradient-to-br from-emerald-950 via-slate-900 to-teal-950 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-block bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-semibold px-3 py-1 rounded-full mb-2">
            日本三大急流・川下り特集
          </div>
          <h1 className="text-2xl md:text-4xl font-bold leading-tight tracking-tight">
            日本三大急流＆川下り舟体験・清流鮎グルメ宿×ふるさと納税ガイド
          </h1>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-3xl mx-auto pt-2">
            日本の険しい山々から海へと一気に駆け下る激流「日本三大急流」――出羽三山と庄内平野を潤し松尾芭蕉が「五月雨を あつめて早し 最上川」と詠んだ山形の「最上川」、南アルプスと富士山の間を猛烈な勢いで南下し駿河湾へ注ぐ静岡の「富士川」、そして九州山地を深く穿ちラフティングや伝統の木造川下り舟で名高い熊本の「球磨川」。急流が削り出した深いV字谷や奇岩の景色、船頭さんの巧みな竿さばきと舟唄に耳を傾けるひとときは、旅の最高のハイライトです。川のせせらぎを聞きながら名湯露天風呂に浸かり、清流が育んだ天然アユの塩焼きや山形牛、富士宮やきそば、球磨焼酎に酔いしれる旅を楽天ふるさと納税でお楽しみください。
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
            水しぶきをあげて白波を越える爽快感。大地の生命線たる三大急流の息吹を感じる
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>大迫力の舟下りやラフティング！白波をかき分ける日本最高峰のリバーアクティビティ</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                船頭さんの舟唄を聞きながらの風流な舟下りや、スリル満点の急流下りで自然のダイナミズムを体感。
              </p>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>最上川の寒鱈汁＆山形牛、富士川の桜えび＆富士宮グルメ、球磨川の天然鮎＆球磨焼酎</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                ミネラル豊富な急流の水がもたらす絶品の清流魚と、流域の大地が育んだ極上グルメを満喫。
              </p>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>楽天ふるさと納税宿泊クーポンでリバーサイドの温泉旅館・ホテルをお得に予約</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                アクティビティ旅や温泉癒やし旅でも、寄付金額に応じた最大30%オフの即時割引クーポンでスマートにお得ステイ。
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
                        {h.hotelSpecial || '日本三大砂丘の風紋絶景、木造建築の奇跡を伝える日本三大奇橋、豪快な川下り舟が走る日本三大急流、お濠と夜空を染める日本三大夜桜を巡る極上の拠点。四季折々の美食と名湯でお寛ぎください。'}
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
            あわせて読みたい日本の絶景・名橋・急流特集
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            
            <Link href="/furusato-tax-three-great-gorges-scenery-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三大渓谷美＆清流大自然絶景宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                清津峡・黒部峡谷・大杉谷。
              </p>
            </Link>
            
            <Link href="/furusato-tax-three-great-stalactite-caves-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三大鍾乳洞＆地底探検・大自然パノラマ宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                あぶくま洞・玉泉洞・井倉洞。
              </p>
            </Link>
            
            <Link href="/furusato-tax-three-great-waterfalls-resort-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三大名瀑＆豪快な滝見温泉宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                華厳の滝・那智の滝・袋田の滝。
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
