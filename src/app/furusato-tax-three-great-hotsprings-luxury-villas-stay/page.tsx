import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '日本三大名湯の別邸＆極上離れ・客室露天風呂とおこもり贅沢宿×ふるさと納税完全ガイド【2026年最新】草津・有馬・下呂',
  description: '日本三大名湯（草津・有馬・下呂）の最高峰ステイ！群馬草津「草津温泉 奈良屋」湯守が仕込む極上名湯と歴史情緒、兵庫有馬「有馬温泉 中の坊瑞苑」大人のための金泉銀泉露天風呂スイート、岐阜下呂「下呂温泉 水明館」飛騨川のせせらぎと臨川閣の客室温泉。日本三大名湯の格式ある別邸・離れ宿を楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
  keywords: '日本三大名湯・最高峰離れ特集, 楽天ふるさと納税, 温泉宿, ふるさと納税 旅行, 高級旅館, ホテル予約, 2026年旅行',
  openGraph: {
    title: '日本三大名湯の別邸＆極上離れ・客室露天風呂とおこもり贅沢宿×ふるさと納税完全ガイド【2026年最新】草津・有馬・下呂',
    description: '日本三大名湯（草津・有馬・下呂）の最高峰ステイ！群馬草津「草津温泉 奈良屋」湯守が仕込む極上名湯と歴史情緒、兵庫有馬「有馬温泉 中の坊瑞苑」大人のための金泉銀泉露天風呂スイート、岐阜下呂「下呂温泉 水明館」飛騨川のせせらぎと臨川閣の客室温泉。日本三大名湯の格式ある別邸・離れ宿を楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    type: 'article',
    url: 'https://croud-travel.pages.dev/furusato-tax-three-great-hotsprings-luxury-villas-stay',
    siteName: 'トラベルポータル',
  },
};

export default function Page() {
  const officialAffUrl = 'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F';

  const hotels = [
  {
    "hotelNo": 70807,
    "hotelName": "草津温泉　奈良屋",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D70807",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D70807%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D70807",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D70807",
    "hotelKanaName": "くさつおんせん　ならや",
    "hotelSpecial": "湯畑すぐ。草津最古の源泉『白旗の湯』を楽しめる老舗宿。",
    "hotelMinCharge": 31036,
    "address1": "群馬県",
    "address2": "吾妻郡草津町草津396",
    "telephoneNo": "0279-88-2311",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/70807/70807.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/70807/70807_h.jpg",
    "reviewCount": 910,
    "reviewAverage": 4.68,
    "userReview": "食事はどの料理も美味しかったです目の前で握っていただけるお寿司も良いパフォーマンスですね部屋にある冷蔵庫に飲みかけの水(部屋に置いてあるペットボトルと同じもの)が入っていたので 前のお客さ…　 ",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D70807",
    "access": "ＪＲ長野原草津口駅よりＪＲバスで草温泉へ２５分、下車後送迎バスあり。（原則　8:30～18:00 ）",
    "label": "群馬県草津町ふるさと納税・明治創業の純和風名旅館・職人が湯守する極上の名湯「草津温泉 奈良屋」",
    "themeTitle": "群馬県草津町ふるさと納税：湯畑至近の老舗最高峰・湯守が管理する極上の白旗源泉「草津温泉 奈良屋」",
    "themeDesc": "明治十年の創業以来、草津最古の白旗源泉を引き湯し熟練の湯守が最高の湯加減に整える格式ある名旅館。木の温もりあふれる客室や露天風呂付き客室、上州牛や群馬の山の幸を贅沢に盛り込んだ月替わりの本格会席が至高の夜を約束します。",
    "revAvg": "4.7",
    "minCharge": "31,036"
  },
  {
    "hotelNo": 25288,
    "hotelName": "有馬温泉　中の坊　瑞苑",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D25288",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D25288%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D25288",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D25288",
    "hotelKanaName": "ありまおんせん　なかのぼう　ずいえん",
    "hotelSpecial": "13歳未満のお子様のご入館はご遠慮いただいております。大人料金での予約であっても同様です。",
    "hotelMinCharge": 28750,
    "address1": "兵庫県",
    "address2": "神戸市北区有馬町808",
    "telephoneNo": "078-904-0781",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/25288/25288.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/25288/25288_kan.jpg",
    "reviewCount": 787,
    "reviewAverage": 4.72,
    "userReview": "息子の誕生日旅行今回で4回目でしたが、いつも完璧なおもてなしで大満足です。癒されましたまた泊まりに行こうと思いますクチコミの詳細はこちらから　https://review.travel.r…　 ",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D25288",
    "access": "神戸電鉄 有馬温泉駅より徒歩５分以内 ／ 大阪より１時間・神戸より３０分",
    "label": "兵庫県神戸市ふるさと納税・十三歳未満お断りの大人の隠れ家・金泉銀泉「有馬温泉 中の坊瑞苑」",
    "themeTitle": "兵庫県神戸市ふるさと納税：十三歳未満お断りの大人の静寂・金泉を独占する露天風呂付き客室「有馬温泉 中の坊 瑞苑」",
    "themeDesc": "有馬温泉の中心に佇み、静けさと上質な寛ぎを追求した大人のための名門宿。客室露天風呂で有馬名物の濃厚な金泉を独り占めでき、最高級A5ランク神戸牛のフィレステーキや明石浦直送の海の幸を使った会席料理が絶品です。",
    "revAvg": "4.7",
    "minCharge": "28,750"
  },
  {
    "hotelNo": 8886,
    "hotelName": "下呂温泉　水明館",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D8886",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D8886%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D8886",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D8886",
    "hotelKanaName": "げろおんせん　すいめいかん",
    "hotelSpecial": "趣のことなる三箇所の大浴場と充実した設備が自慢です。",
    "hotelMinCharge": 8250,
    "address1": "岐阜県",
    "address2": "下呂市幸田1268",
    "telephoneNo": "0576-25-2800",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/8886/8886.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/8886/8886_ryu.jpg",
    "reviewCount": 6222,
    "reviewAverage": 4.35,
    "userReview": "館内の素晴らしさと温泉三昧で大満足水明館は一人旅にはちょっと泊まりにくい宿のイメージがあり今回初の宿泊をさせてもらいました。さすがに館内素晴らしく驚嘆せざるを得ませんでした.三箇所ある温泉もどれも…　 ",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D8886",
    "access": "ＪＲ高山本線下呂駅より徒歩３分【下呂駅まで随時送迎バス有】／中央自動車道 中津川ＩＣよりＲ２５７で約６０分",
    "label": "岐阜県下呂市ふるさと納税・飛騨川のせせらぎと最高級の客室露天「下呂温泉 水明館（臨川閣）」",
    "themeTitle": "岐阜県下呂市ふるさと納税：飛騨川沿いの一万坪・客室温泉風呂を備えた最高峰フロア「下呂温泉 水明館（臨川閣）」",
    "themeDesc": "日本三名湯・下呂温泉を代表する名旅館の最高級棟「臨川閣」。すべての客室に美肌の湯が注ぐ檜の内風呂を備え、飛騨牛のステーキや朴葉味噌焼き、伝統の技が光る京風会席料理をお部屋食で優雅に堪能できます。",
    "revAvg": "4.3",
    "minCharge": "8,250"
  }
];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* パンくずリスト */}
      <nav className="bg-white border-b border-slate-200 py-3 px-4 text-xs text-slate-500">
        <div className="max-w-5xl mx-auto flex items-center space-x-2">
          <Link href="/" className="hover:text-emerald-600 transition">ホーム</Link>
          <span>&gt;</span>
          <span className="text-slate-700 font-medium">日本三大名湯の別邸＆客室露天・極上おこもり宿×ふるさと納税ガイド</span>
        </div>
      </nav>

      {/* ヒーローヘッダー */}
      <header className="relative bg-gradient-to-br from-emerald-950 via-slate-900 to-teal-950 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-block bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-semibold px-3 py-1 rounded-full mb-2">
            日本三大名湯・最高峰離れ特集
          </div>
          <h1 className="text-2xl md:text-4xl font-bold leading-tight tracking-tight">
            日本三大名湯の別邸＆客室露天・極上おこもり宿×ふるさと納税ガイド
          </h1>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-3xl mx-auto pt-2">
            室町時代の僧・万里集九や江戸幕府の儒学者・林羅山によって選定され、古来より日本一の温泉として愛され続ける「日本三名湯」――日本屈指の酸性度と豊富な自噴湯量を誇り職人が湯守する群馬の「草津温泉」、太古の海水が地下深くから湧き出し鉄分と塩分が濃厚な金泉・銀泉の二つの湯を誇る兵庫の「有馬温泉」、そして美肌の湯として名高く無色透明のなめらかなアルカリ性単純温泉が肌を包み込む岐阜の「下呂温泉」。その中でも名門宿の特別フロアや離れ客室を厳選。誰にも邪魔されない客室露天風呂とプライベートダイニングで、上州牛・神戸牛・飛騨牛を味わい尽くす至高の休日を楽天ふるさと納税でお楽しみください。
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
            千数百年の歴史が磨き上げた名湯の頂点。客室露天と極上のおもてなしに浸る
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>客室専用露天風呂・専任仲居のおもてなし・贅を尽くした離れスイートステイ</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                誰にも気兼ねなく三名湯の名湯を独占し、至高のプライベート空間で極上のリラックス。
              </p>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>上州黒毛和牛、最高級A5ランク神戸ビーフ、飛騨牛の炭火焼きステーキ会席</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                日本三大名湯エリアが誇る日本最高峰のブランド和牛食べ比べと、旬の懐石料理を満喫。
              </p>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>楽天ふるさと納税宿泊クーポンで憧れの高級ハイクラス宿をお得に予約</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                記念日旅行や両親へのプレゼント旅行でも、寄付金額に応じた最大30%オフの即時割引クーポンでスマートにお得ステイ。
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
            
            <Link href="/furusato-tax-three-great-daimyo-gardens-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三名園＆大名庭園風雅宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                偕楽園・兼六園・後楽園。
              </p>
            </Link>
            
            <Link href="/furusato-tax-three-major-bihada-hotspring-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三大美肌の湯×炭酸水素塩泉・美肌温泉ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                嬉野・喜連川・玉造。
              </p>
            </Link>
            
            <Link href="/furusato-tax-private-villa-hanare-hideaway-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                全室離れの隠れ家おこもり宿×極上プライベートヴィラふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                由布院・伊豆高原・定山渓。
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
