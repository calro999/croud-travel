import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '日本三大車窓＆鉄道浪漫・絶景パノラマ展望温泉宿×ふるさと納税完全ガイド【2026年最新】姨捨・矢岳越え・狩勝峠',
  description: '車窓を流れる息をのむ雄大な大地！長野篠ノ井線「姨捨」千曲川と善光寺平・田毎の月パノラマと戸倉上山田温泉クラブウィンダム千曲館、熊本・宮崎肥薩線「矢岳越え」えびの高原霧島連山と国登録有形文化財人吉温泉芳野旅館、北海道根室本線「狩勝峠」大十勝平野原野パノラマとトマムザ・タワーby星野リゾート。日本三大車窓の鉄道ロマンと名湯を楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
  keywords: '日本三大車窓・鉄道遺産特集, 楽天ふるさと納税, 温泉宿, ふるさと納税 旅行, 高級旅館, ホテル予約, 2026年旅行',
  openGraph: {
    title: '日本三大車窓＆鉄道浪漫・絶景パノラマ展望温泉宿×ふるさと納税完全ガイド【2026年最新】姨捨・矢岳越え・狩勝峠',
    description: '車窓を流れる息をのむ雄大な大地！長野篠ノ井線「姨捨」千曲川と善光寺平・田毎の月パノラマと戸倉上山田温泉クラブウィンダム千曲館、熊本・宮崎肥薩線「矢岳越え」えびの高原霧島連山と国登録有形文化財人吉温泉芳野旅館、北海道根室本線「狩勝峠」大十勝平野原野パノラマとトマムザ・タワーby星野リゾート。日本三大車窓の鉄道ロマンと名湯を楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    type: 'article',
    url: 'https://croud-travel.pages.dev/furusato-tax-three-great-train-window-views-stay',
    siteName: 'トラベルポータル',
  },
};

export default function Page() {
  const officialAffUrl = 'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F';

  const hotels = [
  {
    "hotelNo": 8089,
    "hotelName": "戸倉上山田温泉　クラブウィンダム千曲館長野",
    "hotelKanaName": "とぐらかみやまだおんせん　くらぶうぃんだむちくまかんながの",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D8089",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D8089%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D8089",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D8089",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/8089/8089.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/8089.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/8089/8089_heya.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/8089/8089map.gif",
    "reviewCount": 507,
    "reviewAverage": 4.33,
    "userReview": "丁寧な接客と食事、温泉に大満足!先ずは到着後、お迎え頂いたスタッフが丁寧な対応でとても安心しました。ありがとうございました!部屋は綺麗で設備も新しく快適に過ごせました。食事は夕食が食べきれないほど…　2026-08-28 22:32:04投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=8089\" class=\"3click\">つづきはこちら</a>",
    "hotelMinCharge": 9000,
    "address1": "長野県",
    "address2": "千曲市上山田温泉1-33-4",
    "telephoneNo": "026-275-1111",
    "access": "しなの鉄道戸倉駅からタクシーで約６分。上信越道坂城ＩＣから国道１８号経由で約１５分。姨捨スマートＩＣから約１５分",
    "parkingInformation": "無料駐車場有り（約40台収容）",
    "nearestStation": "戸倉",
    "hotelSpecial": "名湯百選で温泉三昧！二本の源泉、六つの湯殿。もちろん、源泉掛け流し。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D8089",
    "label": "長野県千曲市ふるさと納税・日本三大車窓と棚田の月見名所「篠ノ井線姨捨駅・善光寺平パノラマ」美肌の湯・戸倉上山田温泉ホテル亀屋本店",
    "themeTitle": "長野県千曲市ふるさと納税：善光寺平と田毎の月パノラマ「姨捨駅車窓」と美肌の湯「戸倉上山田温泉 クラブウィンダム千曲館長野」",
    "themeDesc": "日本三大車窓・姨捨駅の夜景と棚田展望台へ車で約15分。千曲川のほとりに佇む「千曲館」は、100%源泉かけ流しの美肌温泉と信州会席が自慢の老舗名湯宿。六つの湯舟で湯巡りを愉しみ、旅情豊かなひとときを過ごせます。",
    "revAvg": "4.3",
    "minCharge": "9,000"
  },
  {
    "hotelNo": 16280,
    "hotelName": "国登録有形文化財の宿　人吉温泉　芳野旅館",
    "hotelKanaName": "くに��うろくゆうけいぶんかざいのやど　ひとよしおんせん　よしのりょかん",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D16280",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D16280%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D16280",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D16280",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/16280/16280.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/16280.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/16280/16280_w.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/16280/16280map.gif",
    "reviewCount": 126,
    "reviewAverage": 4.5,
    "userReview": "10年ぶりの再訪、貸切風呂と温泉に大満足10年ぶりにお世話になりました。台風被害を経て、古き良きと新しさと清潔感のお宿にバージョンアップされておりました。やっぱり人吉のお湯は最高ですね…　2026-07-29 18:28:31投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=16280\" class=\"3click\">つづきはこちら</a>",
    "hotelMinCharge": 7700,
    "address1": "熊本県",
    "address2": "人吉市上青井町180",
    "telephoneNo": "0966-22-2244",
    "access": "人吉ICより車で約8分",
    "parkingInformation": "有り　30台　無料　先着順",
    "nearestStation": "人吉",
    "hotelSpecial": "【国登録有形文化財の宿】歴史感じる純和風旅館　源泉掛け流し天然温泉と旬の会席料理で心和むひと時を",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D16280",
    "label": "熊本県人吉市ふるさと納税・矢岳越えの霧島連山ループ線絶景「肥薩線鉄道浪漫」球磨川の清流と人吉温泉清流山水花あゆの里",
    "themeTitle": "熊本県人吉市ふるさと納税：霧島連山を望む矢岳越えの起点「肥薩線鉄道浪漫」と「国登録有形文化財の宿 人吉温泉 芳野旅館」",
    "themeDesc": "SL人吉やいさぶろう・しんぺい号で親しまれた鉄道の街・人吉。明治42年創業、重厚な数寄屋造りの「芳野旅館」で、美肌成分メタケイ酸を豊富に含む天然温泉と、球磨川の天然鮎・球磨焼酎・馬刺し会席を贅沢に味わいます。",
    "revAvg": "4.5",
    "minCharge": "7,700"
  },
  {
    "hotelNo": 30110,
    "hotelName": "トマム　ザ・タワー　ｂｙ　星野リゾート",
    "hotelKanaName": "とまむざたわー　ばい　ほしのりぞーと",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D30110",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D30110%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D30110",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D30110",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/30110/30110.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/30110.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/30110/30110_room.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/30110/30110map.gif",
    "reviewCount": 1571,
    "reviewAverage": 4.11,
    "userReview": "大浴場への移動が面倒でベッドも小さめ大浴場が離れていて移動に面倒かな・・感が出てしまう。寝室のベッドが小さめ。古いのかな。クチコミの詳細はこちらから　https://review.trav…　2026-08-29 20:08:57投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=30110\" class=\"3click\">つづきはこちら</a>",
    "hotelMinCharge": 15500,
    "address1": "北海道",
    "address2": "勇払郡占冠村字中トマム",
    "telephoneNo": "0167-58-1111",
    "access": "新千歳空港から車100分、札幌から特急100分、トマム駅から無料送迎バス5分。",
    "parkingInformation": "あり：約300台　※屋外（一部未舗装となります）",
    "nearestStation": "トマム",
    "hotelSpecial": "北海道随一のリゾート地でアクティブステイ。新千歳・札幌から楽々アクセス＆トマム駅無料送迎あり",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D30110",
    "label": "北海道新得町・占冠村ふるさと納税・十勝平野を一望する雄大なる旧狩勝峠「根室本線大パノラマ」大自然リゾート星野リゾートトマムザ・タワー",
    "themeTitle": "北海道占冠村・新得町ふるさと納税：十勝平野原野を一望する「旧狩勝峠大パノラマ」と「トマム ザ・タワー ｂｙ 星野リゾート」",
    "themeDesc": "旧根室本線の狩勝峠が誇る雄大な大地。トマムの広大な原生林リゾート「トマム ザ・タワー」に滞在し、早朝の雲海テラスや森に囲まれた露天風呂「木林の湯」、北海道の旬素材を活かした多彩なレストランディナーを満喫します。",
    "revAvg": "4.1",
    "minCharge": "15,500"
  }
];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* パンくずリスト */}
      <nav className="bg-white border-b border-slate-200 py-3 px-4 text-xs text-slate-500">
        <div className="max-w-5xl mx-auto flex items-center space-x-2">
          <Link href="/" className="hover:text-emerald-600 transition">ホーム</Link>
          <span>&gt;</span>
          <span className="text-slate-700 font-medium">日本三大車窓＆鉄道浪漫パノラマ宿×ふるさと納税ガイド</span>
        </div>
      </nav>

      {/* ヒーローヘッダー */}
      <header className="relative bg-gradient-to-br from-emerald-950 via-slate-900 to-teal-950 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-block bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-semibold px-3 py-1 rounded-full mb-2">
            日本三大車窓・鉄道遺産特集
          </div>
          <h1 className="text-2xl md:text-4xl font-bold leading-tight tracking-tight">
            日本三大車窓＆鉄道浪漫パノラマ宿×ふるさと納税ガイド
          </h1>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-3xl mx-auto pt-2">
            日本の鉄道史において最も車窓景観が美しいと称えられてきた伝説の絶景区間「日本三大車窓」――スイッチバックで知られる駅ホームや車窓から千曲川の蛇行と善光寺平、そして棚田に映る月「田毎の月」が一望できる長野の「JR篠ノ井線・姨捨駅付近」、肥薩線の最高地点を越える際に霧島連山の雄大な峰々とえびの盆地がパノラマで広がる熊本・宮崎県境の「肥薩線・矢岳越え」、そして十勝平野の広大なパッチワークと日高山脈の雄姿を望み大自然のスケールを肌で体感する北海道の「旧根室本線・狩勝峠」。鉄道ファンのみならず、旅人を魅了してやまない鉄道絶景は、日本の国土の美しさを教えてくれます。車窓の余韻に浸りながら名湯や文豪ゆかりの旅館、高原リゾートに泊まり、信州蕎麦・球磨焼酎と鮎・十勝牛を味わう贅沢なひとときを楽天ふるさと納税でお楽しみください。
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
            列車が峠を越える瞬間、眼下に広がる大パノラマ。鉄路の旅情と極上湯に酔いしれる休日
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>駅舎や峠の絶景スポット至近！朝夕の澄み切った光の中でパノラマを独占鑑賞</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                日中の車窓だけでなく、夕焼けや夜景、早朝の雲海に包まれる絶景ポイントを心ゆくまで探索。
              </p>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>信州サーモン＆千曲地酒、球磨川のアユ＆極上球磨焼酎、十勝ラクレットチーズ＆牛</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                鉄道が繋いできた地方色豊かな名物料理と銘酒のペアリングを各宿の料理長自慢のディナーで堪能。
              </p>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>楽天ふるさと納税宿泊クーポンで歴史ある温泉旅館や名門リゾートをお得に利用</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                一度は訪れたい鉄道旅の名拠点も、寄付金額に応じた即時割引クーポンで実質2,000円負担の快適宿泊。
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
            
            <Link href="/furusato-tax-three-great-rapids-river-boat-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三大急流＆舟下り・リバーサイド宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                最上川・富士川・球磨川。
              </p>
            </Link>
            
            <Link href="/furusato-tax-three-great-karst-highlands-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三大カルスト台地＆天空パノラマ宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                秋吉台・四国カルスト・平尾台。
              </p>
            </Link>
            
            <Link href="/furusato-tax-three-great-beautiful-forests-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三大美林＆森林浴名湯宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                青森ヒバ・秋田スギ・木曽ヒノキ。
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
