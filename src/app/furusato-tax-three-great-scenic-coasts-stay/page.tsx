import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '日本三大名勝海岸＆奇岩断崖パノラマ・白砂青松の絶景オーシャンビュー宿×ふるさと納税完全ガイド【2026年最新】東尋坊・浄土ヶ浜・白良浜',
  description: '日本列島の海岸美の極致を巡る旅！福井「東尋坊」柱状節理の断崖絶壁とあわら温泉まつや千千、岩手三陸「浄土ヶ浜」白き鋭鋒奇岩とエメラルドの海浄土ヶ浜パークホテル、和歌山南紀「白良浜」延長620mの白砂青松ビーチとホテル三楽荘。日本三大名勝海岸の絶景パノラマと海の幸を楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
  keywords: '日本三大名勝海岸・海景特集, 楽天ふるさと納税, 温泉宿, ふるさと納税 旅行, 高級旅館, ホテル予約, 2026年旅行',
  openGraph: {
    title: '日本三大名勝海岸＆奇岩断崖パノラマ・白砂青松の絶景オーシャンビュー宿×ふるさと納税完全ガイド【2026年最新】東尋坊・浄土ヶ浜・白良浜',
    description: '日本列島の海岸美の極致を巡る旅！福井「東尋坊」柱状節理の断崖絶壁とあわら温泉まつや千千、岩手三陸「浄土ヶ浜」白き鋭鋒奇岩とエメラルドの海浄土ヶ浜パークホテル、和歌山南紀「白良浜」延長620mの白砂青松ビーチとホテル三楽荘。日本三大名勝海岸の絶景パノラマと海の幸を楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    type: 'article',
    url: 'https://croud-travel.pages.dev/furusato-tax-three-great-scenic-coasts-stay',
    siteName: 'トラベルポータル',
  },
};

export default function Page() {
  const officialAffUrl = 'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F';

  const hotels = [
  {
    "hotelNo": 84545,
    "hotelName": "北陸　あわら温泉　まつや千千",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D84545",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D84545%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D84545",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D84545",
    "hotelKanaName": "まつやせんせん",
    "hotelSpecial": "源泉大浴場・大露天風呂「千のこぼれ湯」北陸最大級スケール♪日本の宿の贅沢は、お風呂から始まります。",
    "hotelMinCharge": 10450,
    "address1": "福井県",
    "address2": "あわら市舟津31-24",
    "telephoneNo": "0776-77-2560",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/84545/84545.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/84545/84545_ky1.jpg",
    "reviewCount": 2004,
    "reviewAverage": 4.61,
    "userReview": "スタッフの対応が素晴らしく、全てが最高!夕飯時間に遅れてしまいましたが、とても親切に対応していただきました。出迎え、フロント、案内、どのスタッフの方も対応が良く、気持ちよく過ごせました。お…　 ",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D84545",
    "access": "■車：金津ＩＣより15分 ■ＪＲ：芦原温泉駅より送迎有（約10分）14時～18時（事前要予約）",
    "label": "福井県坂井市・あわら市ふるさと納税・日本海の荒波が削り出した柱状節理の奇勝「東尋坊」あわら温泉まつや千千",
    "themeTitle": "福井県坂井市・あわら市ふるさと納税：東尋坊へアクセス抜群・北陸屈指の庭園露天風呂「北陸 あわら温泉 まつや千千」",
    "themeDesc": "東尋坊の夕日鑑賞拠点に最適な、名湯あわら温泉を代表する大型老舗旅館。北陸最大級の広さを誇る大浴場「千のこぼれ湯」や露天風呂で寛ぎ、冬の越前ガニや若狭牛、日本海の旬の海の幸を取り入れた豪華会席を楽しめます。",
    "revAvg": "4.6",
    "minCharge": "10,450"
  },
  {
    "hotelNo": 64789,
    "hotelName": "浄土ヶ浜パークホテル",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D64789",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D64789%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D64789",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D64789",
    "hotelKanaName": "じょうどがはまぱーく",
    "hotelSpecial": "浄土ヶ浜の高台に建つ和の景観と四季の恵みあふれるホテル。三陸の海の幸をご用意してお待ちしております",
    "hotelMinCharge": 11110,
    "address1": "岩手県",
    "address2": "宮古市日立浜町32-4",
    "telephoneNo": "0193-62-2321",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/64789/64789.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/64789/64789_si.jpg",
    "reviewCount": 1566,
    "reviewAverage": 4.43,
    "userReview": "眺めと朝日が最高、食事は少し残念部屋からの眺めが素晴らしく、とても贅沢な時間を過ごすことが出来ました。朝日も美しく良い思い出になりました。お食事は期待したほどではなく少し残念でしたが、朝の…　 ",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D64789",
    "access": "ＪＲ山田線　宮古駅から奥浄土ヶ浜行きバスにて１５分、浄土ヶ浜ビジターセンター下車後、徒歩５分。【ペットと宿泊可※小型犬】",
    "label": "岩手県宮古市ふるさと納税・極楽浄土の如き白き奇岩とエメラルドの海「三陸・浄土ヶ浜」浄土ヶ浜パークホテル",
    "themeTitle": "岩手県宮古市ふるさと納税：浄土ヶ浜を見下ろす高台・三陸復興国立公園の極上リゾート「浄土ヶ浜パークホテル」",
    "themeDesc": "名勝・浄土ヶ浜へ徒歩圏内に佇み、アカマツの美林と宮古湾を見渡す絶景ホテル。三陸の豊かな海の幸を贅沢に味わえるビュッフェや和食会席、大浴場からの松林パノラマが旅人の心を深く癒やしてくれます。",
    "revAvg": "4.4",
    "minCharge": "11,110"
  },
  {
    "hotelNo": 8226,
    "hotelName": "白浜温泉　ホテル三楽荘",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D8226",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D8226%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D8226",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D8226",
    "hotelKanaName": "しらはまおんせん　さんらくそう",
    "hotelSpecial": "得旅ポイント最大15倍■全室オーシャンビュー&amp;白良浜徒歩1分■露天風呂付き客室はすべて源泉掛け流し",
    "hotelMinCharge": 11000,
    "address1": "和歌山県",
    "address2": "西牟婁郡白浜町3078",
    "telephoneNo": "0570-012-358",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/8226/8226.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/8226/8226_room.jpg",
    "reviewCount": 2605,
    "reviewAverage": 4.54,
    "userReview": "リニューアル後の食事と水着移動が快適毎年のように白浜海水浴ではホテル三楽荘に泊まってました。今回3年振りにお世話になり、リニューアルされてから初めて利用したので、新鮮でした。くまの膳は、予想の倍以…　 ",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D8226",
    "access": "車：紀勢自動車道南紀白浜ICより県道34号線を白浜温泉方面へ約20分 電車：JR白浜駅よりバスで15分",
    "label": "和歌山県白浜町ふるさと納税・白砂青松の白良浜を正面に望む全室オーシャンビュー「南紀白浜・白良浜」ホテル三楽荘",
    "themeTitle": "和歌山県白浜町ふるさと納税：白良浜の目の前・全室オーシャンビューと二つの自家源泉「白浜温泉 ホテル三楽荘」",
    "themeDesc": "白良浜まで徒歩1分、すべての客室からエメラルドグリーンの海と白い砂浜を一望できる絶景の宿。成分の異なる二つの天然温泉掛け流しの湯巡りと、紀州名物のクエ鍋や伊勢海老、熊野牛会席を客室で優雅に堪能できます。",
    "revAvg": "4.5",
    "minCharge": "11,000"
  }
];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* パンくずリスト */}
      <nav className="bg-white border-b border-slate-200 py-3 px-4 text-xs text-slate-500">
        <div className="max-w-5xl mx-auto flex items-center space-x-2">
          <Link href="/" className="hover:text-emerald-600 transition">ホーム</Link>
          <span>&gt;</span>
          <span className="text-slate-700 font-medium">日本三大名勝海岸＆白砂青松オーシャンビュー宿×ふるさと納税ガイド</span>
        </div>
      </nav>

      {/* ヒーローヘッダー */}
      <header className="relative bg-gradient-to-br from-emerald-950 via-slate-900 to-teal-950 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-block bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-semibold px-3 py-1 rounded-full mb-2">
            日本三大名勝海岸・海景特集
          </div>
          <h1 className="text-2xl md:text-4xl font-bold leading-tight tracking-tight">
            日本三大名勝海岸＆白砂青松オーシャンビュー宿×ふるさと納税ガイド
          </h1>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-3xl mx-auto pt-2">
            日本列島をめぐる荒波と潮流が創り上げた、息をのむ美しさを誇る「日本三大名勝海岸」――輝石安山岩の柱状節理が約1kmにわたりそびえ立ち国の名勝・天然記念物に指定されている福井越前の「東尋坊」、宮古湾の内海に白陶土の白い奇岩が林立し松の緑と透き通る海のコントラストが極楽浄土を思わせる岩手三陸の「浄土ヶ浜」、そして珪砂90%を含むさらさらの白い砂浜が弧を描きヤシの木とエメラルドグリーンの遠浅の海が南国情緒を醸す和歌山南紀の「白良浜」。海岸美の感動に浸った後は、越前ガニや三陸のアワビ・ウニ、紀州のクエや伊勢海老の美食ディナーを堪能する特別な旅を楽天ふるさと納税でお楽しみください。
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
            怒濤が削った柱状節理、白き岩峰の極楽浄土、まばゆい白砂ビーチ。日本を代表する海岸美
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>断崖クルーズ・浄土ヶ浜の青の洞窟さっぱ船・白良浜の茜色サンセット！圧倒的海の絶景</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                海上からの迫力あるクルーズ観光や、客室・露天風呂からの全室オーシャンビューを体感。
              </p>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>越前ガニと若狭牛、三陸宮古の毛ガニ・生ウニ、南紀白浜の幻の高級魚クエと熊野牛</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                日本海・三陸沖・黒潮の三大漁場がもたらす最高峰の天然魚介とブランド肉会席を満喫。
              </p>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>楽天ふるさと納税宿泊クーポンでオーシャンビュー温泉ホテルや老舗旅館をお得に予約</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                海沿いドライブや記念日旅行でも、寄付金額に応じた最大30%オフの即時割引クーポンでスマートにお得ステイ。
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
                        {h.hotelSpecial || '各地域屈指の絶景ロケーションと名湯温泉、地元の豊かなテロワールを活かした四季折々の会席料理でお寛ぎいただけます。'}
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
            あわせて読みたい全国の海岸美・名瀑・名湯別邸特集
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            
            <Link href="/furusato-tax-three-great-capes-ocean-panorama-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三大岬＆地球の丸みを感じる断崖海宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                知床岬・足摺岬・佐多岬。
              </p>
            </Link>
            
            <Link href="/furusato-tax-three-great-sea-caves-mystery-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三大海食洞＆青の洞窟・波濤の造形美宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                堂ヶ島天窓洞・芥屋の大門・七ツ釜。
              </p>
            </Link>
            
            <Link href="/furusato-tax-three-great-coastal-sceneries-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三大白砂青松＆海岸絶景パノラマ宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                天橋立・三保松原・気比の松原。
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
