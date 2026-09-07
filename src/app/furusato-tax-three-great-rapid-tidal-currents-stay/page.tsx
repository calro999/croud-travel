import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '日本三大急潮＆激流うず潮パノラマ・鳴門鯛と関門ふぐ美食宿×ふるさと納税完全ガイド【2026年最新】鳴門・来島・関門海峡',
  description: '白波が逆巻く海の難所と海の王者！徳島鳴門「鳴門海峡」世界最大級のうず潮とアオアヲナルトリゾート、愛媛今治「来島海峡」しまなみ海道の八艘飛び急流とホテル菊水今治、山口下関「関門海峡」本州と九州を分かつ早鞆ノ瀬戸と下関グランドホテル。日本三大急潮のダイナミックな海景と海の幸を楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
  keywords: '日本三大急潮・激流うず潮特集, 楽天ふるさと納税, 温泉宿, ふるさと納税 旅行, 高級旅館, ホテル予約, 2026年旅行',
  openGraph: {
    title: '日本三大急潮＆激流うず潮パノラマ・鳴門鯛と関門ふぐ美食宿×ふるさと納税完全ガイド【2026年最新】鳴門・来島・関門海峡',
    description: '白波が逆巻く海の難所と海の王者！徳島鳴門「鳴門海峡」世界最大級のうず潮とアオアヲナルトリゾート、愛媛今治「来島海峡」しまなみ海道の八艘飛び急流とホテル菊水今治、山口下関「関門海峡」本州と九州を分かつ早鞆ノ瀬戸と下関グランドホテル。日本三大急潮のダイナミックな海景と海の幸を楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    type: 'article',
    url: 'https://croud-travel.pages.dev/furusato-tax-three-great-rapid-tidal-currents-stay',
    siteName: 'トラベルポータル',
  },
};

export default function Page() {
  const officialAffUrl = 'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F';

  const hotels = [
  {
    "hotelNo": 6123,
    "hotelName": "アオアヲナルトリゾート",
    "hotelKanaName": "あおあをなるとりぞーと",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D6123",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D6123%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D6123",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D6123",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/6123/6123.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/6123.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/6123/6123_meal1.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/6123/6123map.gif",
    "reviewCount": 4254,
    "reviewAverage": 4.46,
    "userReview": "子供も大人も大満足、海辺の遊びと食事を満喫家族で伺いました。チェックインは15時でしたが.12時にホテルにつきチェックインまで海辺や、釣りぼり、職業体験などでとても楽しむことができました。…　 ",
    "hotelMinCharge": 16500,
    "address1": "徳島県",
    "address2": "鳴門市鳴門町土佐泊浦字大毛16-45",
    "telephoneNo": "088-687-2580",
    "access": "神戸淡路鳴門自動車道　鳴門北ＩＣより１分　ＪＲ鳴門駅より車で約１０分　大塚美術館まで車で3分",
    "parkingInformation": "有り　２００台　無料　（ホテル地下駐車場は全高2.1ｍまで。第2、第3駐車場は屋外）",
    "nearestStation": "鳴門",
    "hotelSpecial": "温泉もお部屋もオーシャンビュー！瀬戸内海国立公園内に位置する南欧風リゾートホテルです。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D6123",
    "featureKey": "current_naruto",
    "featureLabel": "徳島県鳴門市ふるさと納税・最大時速20km世界屈指の大渦「鳴門海峡」アオアヲナルトリゾート",
    "themeTitle": "徳島県鳴門市ふるさと納税：鳴門海峡と大鳴門橋を一望する南欧風オーシャンリゾート「アオアヲ ナルト リゾート」",
    "themeDesc": "鳴門海峡の渦潮に最も近い絶景リゾートホテル。全室オーシャンビューのバルコニーから鳴門の海景を望み、天然温泉露天風呂「気泡風呂」「展望風呂」で潮風を満喫。夕食は鳴門鯛や阿波尾鶏、徳島の旬の味覚を炭火焼バイキングや会席で堪能できます。",
    "revAvg": "4.5",
    "minCharge": "16,500"
  },
  {
    "hotelNo": 10758,
    "hotelName": "ホテル菊水今治（Ｈｏｔｅｌ　Ｋｉｋｕｓｕｉ　Ｉｍａｂａｒｉ）",
    "hotelKanaName": "きくすい　いまばり",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D10758",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D10758%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D10758",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D10758",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/10758/10758.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/10758.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/10758/10758_room.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/10758/10758map.gif",
    "reviewCount": 1778,
    "reviewAverage": 4.28,
    "userReview": "朝食が美味しく、ライブ会場へのアクセスも抜群時間の都合で朝食だけ頂きましたが美味しかったです。海のそばにあり、前にある施設でのライブに参加したので近くで良かったですクチコミの詳細はこちらから　…　 ",
    "hotelMinCharge": 3240,
    "address1": "愛媛県",
    "address2": "今治市中浜町1-2-5",
    "telephoneNo": "0898-23-3330",
    "access": "【平面駐車場無料】／JR今治駅徒歩15分・車5分／しまなみ海道【今治IC】車10分／しまなみライナー【今治桟橋】徒歩1分",
    "parkingInformation": "無料平面駐車場59台（出入自由）／バイク屋根付／自転車客室持込可／大型車応相談",
    "nearestStation": "今治",
    "hotelSpecial": "Serta社製ベッド／今治タオル／貸切風呂／雪肌精アメニティ／真鯛の絶品夕食／Wi-Fi完備",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D10758",
    "featureKey": "current_kurushima",
    "featureLabel": "愛媛県今治市ふるさと納税・しまなみ海道と激流うず潮「来島海峡」今治国際ホテル",
    "themeTitle": "愛媛県今治市ふるさと納税：来島海峡大橋としまなみ海道の玄関口に佇む「ホテル菊水今治」",
    "themeDesc": "今治港の目の前に位置し、来島海峡の急潮クルーズやしまなみ海道サイクリングの拠点として至便なホテル。瀬戸内海の激流で育った新鮮な来島鯛の鯛めしや今治名物の鉄板焼き鳥を味わい、快適な客室でサイクリングや島巡りの疲れを癒やせます。",
    "revAvg": "4.3",
    "minCharge": "3,240"
  },
  {
    "hotelNo": 7013,
    "hotelName": "下関グランドホテル",
    "hotelKanaName": "しものせき　ぐらんどほてる",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D7013",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D7013%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D7013",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D7013",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/7013/7013.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/7013.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/7013/7013_heya1.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/7013/7013map.gif",
    "reviewCount": 1556,
    "reviewAverage": 4.28,
    "userReview": "唐戸市場に近く、豪華で綺麗な空間綺麗で豪華なホテルでした。唐戸市場にも近くて満足です。クチコミの詳細はこちらから　https://review.travel.rakuten.co.jp/hot…　 ",
    "hotelMinCharge": 4500,
    "address1": "山口県",
    "address2": "下関市南部町31-2",
    "telephoneNo": "083-231-5000",
    "access": "ＪＲ下関から車で５分、ＪＲ門司港駅横から船で５分",
    "parkingInformation": "有り　３０台　無料",
    "nearestStation": "下関",
    "hotelSpecial": "目の前は関門海峡☆徒歩圏内に唐戸市場、海響館と便利です♪",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D7013",
    "featureKey": "current_kanmon",
    "featureLabel": "山口県下関市ふるさと納税・本州と九州を分かつ急潮「関門海峡」下関グランドホテル",
    "themeTitle": "山口県下関市ふるさと納税：関門海峡が目の前に広がる特等席・昭和天皇もご宿泊の名門「下関グランドホテル」",
    "themeDesc": "唐戸市場やカモンワーフに隣接し、関門海峡を行き交う大型船を間近に望むウォーターフロントホテル。歴史の舞台・早鞆ノ瀬戸の潮流を眺めながら、下関伝統の本場とらふぐフルコースや長州黒かしわを贅沢に味わう極上のひとときを過ごせます。",
    "revAvg": "4.3",
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
          <span className="text-slate-700 font-medium">日本三大急潮＆うず潮絶景・海鮮グルメ宿×ふるさと納税ガイド</span>
        </div>
      </nav>

      {/* ヒーローヘッダー */}
      <header className="relative bg-gradient-to-br from-emerald-950 via-slate-900 to-teal-950 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-block bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-semibold px-3 py-1 rounded-full mb-2">
            日本三大急潮・激流うず潮特集
          </div>
          <h1 className="text-2xl md:text-4xl font-bold leading-tight tracking-tight">
            日本三大急潮＆うず潮絶景・海鮮グルメ宿×ふるさと納税ガイド
          </h1>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-3xl mx-auto pt-2">
            狭い海峡に満潮と干潮の潮位差が激しい海水が流れ込むことで生まれる「日本三大急潮」――最大時速20kmに達し直径20mもの大渦を生み出す世界最大級の渦潮・徳島兵庫の「鳴門海峡」、瀬戸内海の多島美を背景に複雑な潮流「八艘飛び」が船乗りたちを恐れさせた愛媛今治の「来島海峡」、そして壇ノ浦の源平合戦や宮本武蔵・佐々木小次郎の巌流島の舞台となり急潮が唸りをあげる山口福岡の「関門海峡」。激しい潮流にもまれた魚は身が引き締まり、日本一の旨味を凝縮しています。海峡を見晴らす絶景ホテルやオーシャンリゾートに滞在し、激流に鍛えられた鳴門鯛・来島海峡のアジ・サバ・下関のとらふぐ会席に舌鼓を打つ至高の旅を楽天ふるさと納税でお楽しみください。
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
            轟く潮鳴り、海面が渦を巻き湧き上がる海の激流。海峡のダイナミズムを五感で味わう
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>世界最大級のうず潮や早鞆ノ瀬戸！激しく渦巻く海のスペクタクルを間近に鑑賞</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                観潮船からの大迫力クルーズや海峡を一望する客室テラスから、潮の満ち引きが描く大自然の営みを体感。
              </p>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>引き締まった鳴門鯛の舟盛り、来島海峡の真鯛釜飯、本場下関のとらふぐ刺し＆ちり鍋</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                日本屈指の急流が生んだ最高峰の天然白身魚と海の幸を、料理人こだわりの海峡会席で堪能。
              </p>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>楽天ふるさと納税宿泊クーポンで憧れのオーシャンフロント宿をお得に予約</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                記念日や家族の絶景クルーズ旅でも、寄付金額に応じた最大30%オフの即時割引クーポンでスマートにお得ステイ。
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
                        {h.hotelSpecial || '日本三大急潮のうず潮絶景、日本三大車窓の天空パノラマ、日本三大稲荷の商売繁盛祈願、日本三大美林の森林浴アロマを巡る極上の拠点。四季折々の美食と名湯でお寛ぎください。'}
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
            あわせて読みたい日本の名景・急潮・美林特集
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            
            <Link href="/furusato-tax-three-great-beautiful-ports-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三大美港＆夜景オーシャンビュー宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                清水港・長崎港・神戸港。
              </p>
            </Link>
            
            <Link href="/furusato-tax-three-great-rapid-rivers-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三大急流＆川下り舟体験・清流鮎グルメ宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                最上川・富士川・球磨川。
              </p>
            </Link>
            
            <Link href="/furusato-tax-three-great-coastal-sceneries-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三大白砂青松＆海岸絶景パノラマ宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                天橋立・三保松原・気比松原。
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
