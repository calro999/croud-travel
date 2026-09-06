import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '日本三大美林＆巨木の薫香に癒やされる森林浴リトリート温泉宿×ふるさと納税完全ガイド【2026年最新】青森ヒバ・秋田スギ・木曽ヒノキ',
  description: '数百年を生き抜く巨木たちの生命力！青森下北「青森ヒバ」清冽な芳香と耐朽性を誇る天然美林とむつグランドホテル斗南温泉、秋田能代・大館「秋田スギ」曲げわっぱを生んだ天を衝く美木と大館ぽかぽか温泉ホテル、長野木曽路「木曽ヒノキ」伊勢神宮式年遷宮の御神木を育む樹林と街道浪漫おん宿蔦屋。日本三大美林のフィトンチッドと名湯を楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
  keywords: '日本三大美林・森林セラピー特集, 楽天ふるさと納税, 温泉宿, ふるさと納税 旅行, 高級旅館, ホテル予約, 2026年旅行',
  openGraph: {
    title: '日本三大美林＆巨木の薫香に癒やされる森林浴リトリート温泉宿×ふるさと納税完全ガイド【2026年最新】青森ヒバ・秋田スギ・木曽ヒノキ',
    description: '数百年を生き抜く巨木たちの生命力！青森下北「青森ヒバ」清冽な芳香と耐朽性を誇る天然美林とむつグランドホテル斗南温泉、秋田能代・大館「秋田スギ」曲げわっぱを生んだ天を衝く美木と大館ぽかぽか温泉ホテル、長野木曽路「木曽ヒノキ」伊勢神宮式年遷宮の御神木を育む樹林と街道浪漫おん宿蔦屋。日本三大美林のフィトンチッドと名湯を楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    type: 'article',
    url: 'https://croud-travel.pages.dev/furusato-tax-three-great-beautiful-forests-stay',
    siteName: 'トラベルポータル',
  },
};

export default function Page() {
  const officialAffUrl = 'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F';

  const hotels = [
  {
    "hotelNo": 11145,
    "hotelName": "むつグランドホテル　斗南温泉",
    "hotelKanaName": "むつ　ぐらんどほてる　となみおんせん",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D11145",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D11145%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D11145",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D11145",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/11145/11145.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/11145.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/11145/11145_room.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/11145/11145map.gif",
    "reviewCount": 946,
    "reviewAverage": 4.15,
    "userReview": "絶景の温泉と青森グルメを堪能できる宿むつグランドホテルの温泉はピカイチ。斗南温泉の宿泊者専用浴場は静かで、トロっとした泉質が肌に優しく、露天風呂からは釜臥山の雄大な景色が広がります。春には桜吹雪も…　2026-08-26 00:31:59投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=11145\" class=\"3click\">つづきはこちら</a>",
    "hotelMinCharge": 7350,
    "address1": "青森県",
    "address2": "むつ市田名部下道4",
    "telephoneNo": "0175-22-2331",
    "access": "JR大湊線下北駅から車で８分",
    "parkingInformation": "有り 500台 無料",
    "nearestStation": "下北",
    "hotelSpecial": "【Ｗｉ-Ｆｉ利用可】むつ市の東部に位置し、下北を一望できるホテルです。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D11145",
    "label": "青森県むつ市・下北半島ふるさと納税・清冽な芳香と耐朽性を誇る銘木「青森ヒバ美林」下北の恵みと天然温泉むつグランドホテル",
    "themeTitle": "青森県むつ市・下北半島ふるさと納税：清冽な芳香と耐朽性を誇る「青森ヒバ天然林」と美肌の「むつグランドホテル 斗南温泉」",
    "themeDesc": "下北半島の薬研渓流や川内川渓谷に広がるヒバの原生林。むつ市街の高台に位置する「むつグランドホテル」では、下北の雄大な自然を望み、美肌効果抜群の天然温泉「斗南温泉 美人の湯」と、陸奥湾のホタテや下北の旬魚会席を心ゆくまで味わいます。",
    "revAvg": "4.2",
    "minCharge": "7,350"
  },
  {
    "hotelNo": 149238,
    "hotelName": "大館ぽかぽか温泉ホテル",
    "hotelKanaName": "おおだてぽかぽかおんせんほてる",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D149238",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D149238%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D149238",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D149238",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/149238/149238.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/149238.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/149238/149238_kan1.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/149238/149238map.gif",
    "reviewCount": 494,
    "reviewAverage": 4.12,
    "userReview": "次回帰省時も利用したい、温泉が最高でしたお盆の帰省で利用しました。新館、素泊まりです。到着時すでにお布団が敷いてありました。部屋広さは二人に対して十分広く、テーブル、椅子一脚ありました。テレビ…　2026-08-12 10:29:55投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=149238\" class=\"3click\">つづきはこちら</a>",
    "hotelMinCharge": 5530,
    "address1": "秋田県",
    "address2": "大館市清水4-4-34",
    "telephoneNo": "0186-49-0003",
    "access": "JR大館駅より徒歩12分/秋田道大館北ICより車で10分/大館能代空港よりリムジンバス約40分「清水四丁目」下車目の前",
    "parkingInformation": "無料平面駐車場１００台完備",
    "nearestStation": "大館",
    "hotelSpecial": "★ＪＲ大館駅、国道７号線から１Ｋｍ以内★人気の温泉施設がリーズナブルな料金で広々とご利用頂けます♪",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D149238",
    "label": "秋田県能代市・大館市ふるさと納税・曲げわっぱを生んだ天を衝く美の巨木「秋田スギ美林」きりたんぽ鍋と大館ぽかぽか温泉ホテル",
    "themeTitle": "秋田県大館市・能代市ふるさと納税：伝統工芸曲げわっぱの故郷「秋田スギ美林」と自家源泉の「大館ぽかぽか温泉ホテル」",
    "themeDesc": "仁鮒水沢スギ植物群落保護林など天を衝く巨木が連なる秋田スギの聖地。大館駅からも至近の「大館ぽかぽか温泉ホテル」は、天然温泉かけ流しの大浴場とサウナを備え、本場大館の比内地鶏やきりたんぽ鍋のグルメを堪能する快適な拠点です。",
    "revAvg": "4.1",
    "minCharge": "5,530"
  },
  {
    "hotelNo": 6067,
    "hotelName": "きそふくしま温泉　街道浪漫　おん宿　蔦屋",
    "hotelKanaName": "きそふくしまおんせん　かいどうろまん　おんやど　つたや",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D6067",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D6067%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D6067",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D6067",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/6067/6067.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/6067.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/6067/6067_lob.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/6067/6067map.gif",
    "reviewCount": 563,
    "reviewAverage": 4.25,
    "userReview": "日本の歴史ある宿らしい接客将軍ディナーなど、工夫を凝らした趣向は外国の方には喜ばれそうですね。う～ん...日本人には味も含め、好みの分かれるところです。スタッフの方達の接客は「歴史ある日本…　2026-08-27 09:41:43投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=6067\" class=\"3click\">つづきはこちら</a>",
    "hotelMinCharge": 8090,
    "address1": "長野県",
    "address2": "木曽郡木曽町福島本町5162",
    "telephoneNo": "0264-22-2010",
    "access": "JR木曽福島駅～徒歩約10分【15：30分16：40分送迎有要予約】伊那IC約40分塩尻IC約60分中津川I約70分",
    "parkingInformation": "有り　20台　無料",
    "nearestStation": "木曽福島",
    "hotelSpecial": "創業300年☆評判料理と木曽川沿い露天風呂【きそふくしま温泉】で心もからだもリフレッシュ♪",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D6067",
    "label": "長野県上松町・木曽町ふるさと納税・伊勢神宮式年遷宮の御神木を育む樹齢数百年の「木曽ヒノキ美林」中山道の宿場町と木曽路の宿いわや",
    "themeTitle": "長野県木曽町・上松町ふるさと納税：伊勢神宮御神木を育む「木曽ヒノキ赤沢自然休養林」と中山道宿場町「街道浪漫 おん宿 蔦屋」",
    "themeDesc": "森林浴発祥の地・赤沢自然休養林のヒノキ美林。木曽福島宿の清流・木曽川沿いに建つ創業300余年の老舗旅館「おん宿 蔦屋」では、木曽ヒノキの香り漂う露天風呂や、信州プレミアム牛肉・岩魚・名物木曽蕎麦を並べた創作会席を堪能します。",
    "revAvg": "4.3",
    "minCharge": "8,090"
  }
];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* パンくずリスト */}
      <nav className="bg-white border-b border-slate-200 py-3 px-4 text-xs text-slate-500">
        <div className="max-w-5xl mx-auto flex items-center space-x-2">
          <Link href="/" className="hover:text-emerald-600 transition">ホーム</Link>
          <span>&gt;</span>
          <span className="text-slate-700 font-medium">日本三大美林＆森林浴名湯宿×ふるさと納税ガイド</span>
        </div>
      </nav>

      {/* ヒーローヘッダー */}
      <header className="relative bg-gradient-to-br from-emerald-950 via-slate-900 to-teal-950 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-block bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-semibold px-3 py-1 rounded-full mb-2">
            日本三大美林・森林セラピー特集
          </div>
          <h1 className="text-2xl md:text-4xl font-bold leading-tight tracking-tight">
            日本三大美林＆森林浴名湯宿×ふるさと納税ガイド
          </h1>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-3xl mx-auto pt-2">
            厳しい自然環境の中で数百年の星霜を重ね、日本建築や伝統工芸の最高峰を支えてきた「日本三大美林」――特有のヒノキチオール成分による強い抗菌力と清々しい芳香を放ち、下北半島や津軽の森を覆う「青森ヒバ（天然美林）」、年輪が緻密で木目が美しく、名工たちの「秋田杉曲げわっぱ」を生み出した出羽山地の「秋田スギ（天然美林）」、そして尾張徳川家による「木一本、首一つ」の厳重な保護令によって守り抜かれ、伊勢神宮の式年遷宮の御神木として用いられる木曽谷の「木曽ヒノキ（天然美林）」。深い緑の森に一歩足を踏み入れれば、天然アロマのような森林浴効果と木漏れ日が日々の疲れを心地よく解きほぐします。木造建築の美学が息づく宿や総ヒノキ・ヒバ造りの湯船に身を委ね、ご当地の山川の味覚を味わう至高のリトリートを楽天ふるさと納税でお楽しみください。
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
            深呼吸するたび、心身が解き放たれる。天然林のフィトンチッドと木のぬくもりに包まれる極上休日
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>天然ヒバ風呂・総ヒノキ露天風呂で極上の湯浴み！木のアロマに包まれる癒やし</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                湯船に注がれる名湯と木の芳香成分が溶け合い、五感を研ぎ澄ます最高のリラクゼーションを体感。
              </p>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>下北の海鮮＆馬肉料理、秋田比内地鶏きりたんぽ鍋、信州牛＆木曽蕎麦会席</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                豊かな美林が育んだ清流と土壌の恵み。山菜や川魚、ブランド肉など郷土の味覚を贅沢に味わい尽くす夕食。
              </p>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>楽天ふるさと納税宿泊クーポンで自然豊かな秘湯・名門旅館をお得に満喫</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                喧騒を離れた森の隠れ宿も、寄付額に応じた即時割引クーポンを活用して実質2,000円負担でスマートにステイ。
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
                        {h.hotelSpecial || '歴史ある名橋や城下町、鍾乳洞、美林の自然探訪に最適な上質拠点。四季折々の美味と温かなおもてなしでお寛ぎください。'}
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
                宿泊当日は通常通りチェックイン。割引されたお得な価格で、名湯や美食、歴史情緒溢れる極上滞在を満喫できます。
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
            あわせて読みたい日本の伝統美・絶景特集
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            
            <Link href="/furusato-tax-three-great-waterfalls-hotsprings-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三大名瀑＆飛瀑の轟音に癒やされる温泉宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                那智・華厳・袋田。
              </p>
            </Link>
            
            <Link href="/furusato-tax-three-great-famous-stones-gardens-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三大銘石庭園＆巨石美に触れる宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                佐渡赤玉石・揖斐川石・鴨川真黒石。
              </p>
            </Link>
            
            <Link href="/furusato-tax-three-hidden-unexplored-regions-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三大秘境＆仙境温泉リトリート宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                祖谷・白川郷・椎葉村。
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
