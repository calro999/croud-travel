import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '日本三大急潮＆豪快うず潮パノラマ・激流海峡オーシャンビュー宿×ふるさと納税完全ガイド【2026年最新】鳴門・来島・関門',
  description: '海が滝のように唸りを上げる地球のダイナミズム！徳島「鳴門海峡」世界最大級の渦潮パノラマとベイリゾートホテル鳴門海月、愛媛今治「来島海峡」日本三大急潮の八艘飛び潮流とホテル菊水今治、山口下関「関門海峡」早鞆ノ瀬戸の急潮と本場とらふぐの下関グランドホテル。日本三大急潮の迫力ある海峡クルーズと旬魚を楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
  keywords: '日本三大急潮・海峡絶景特集, 楽天ふるさと納税, 温泉宿, ふるさと納税 旅行, 高級旅館, ホテル予約, 2026年旅行',
  openGraph: {
    title: '日本三大急潮＆豪快うず潮パノラマ・激流海峡オーシャンビュー宿×ふるさと納税完全ガイド【2026年最新】鳴門・来島・関門',
    description: '海が滝のように唸りを上げる地球のダイナミズム！徳島「鳴門海峡」世界最大級の渦潮パノラマとベイリゾートホテル鳴門海月、愛媛今治「来島海峡」日本三大急潮の八艘飛び潮流とホテル菊水今治、山口下関「関門海峡」早鞆ノ瀬戸の急潮と本場とらふぐの下関グランドホテル。日本三大急潮の迫力ある海峡クルーズと旬魚を楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    type: 'article',
    url: 'https://croud-travel.pages.dev/furusato-tax-three-great-rapid-currents-strait-stay',
    siteName: 'トラベルポータル',
  },
};

export default function Page() {
  const officialAffUrl = 'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F';

  const hotels = [
  {
    "hotelNo": 17766,
    "hotelName": "ベイリゾートホテル　鳴門海月",
    "hotelKanaName": "なるとかいげつ",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D17766",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D17766%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D17766",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D17766",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/17766/17766.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/17766.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/17766/17766_kan.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/17766/17766map.gif",
    "reviewCount": 3101,
    "reviewAverage": 4.45,
    "userReview": "鳴門大橋と潮の流れを望む絶景の角部屋部屋からの眺めが最高でした鳴門大橋を行き交う車そして潮の流れが目の前にちなみに部屋は7階の角部屋ウェルカムドリンクも充実していました…　 ",
    "hotelMinCharge": 6000,
    "address1": "徳島県",
    "address2": "鳴門市鳴門町土佐泊浦福池65-7",
    "telephoneNo": "050-3160-7333",
    "access": "高速道路　鳴門北ICより車で６分。高速バス鳴門公園口より徒歩10分。大塚美術館バス停などからシャトルバス送迎有。要予約",
    "parkingInformation": "有３０台　無料　予約不要。当館まではアクセスページに掲載の写真付き道順をご覧ください",
    "nearestStation": "鳴門",
    "hotelSpecial": "部屋食で鳴門の会席を♪鳴門うず潮に一番近い景色に感動の旅館",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D17766",
    "label": "徳島県鳴門市ふるさと納税・世界最大級の渦潮が渦巻くダイナミズム「鳴門海峡」鳴門鯛とアオアヲナルトリゾート",
    "themeTitle": "徳島県鳴門市ふるさと納税：世界最大級のうず潮を間近に望む大鳴門橋畔「ベイリゾートホテル 鳴門海月」",
    "themeDesc": "鳴門海峡の目の前に建ち、全室オーシャンビューの展望風呂から大鳴門橋と鳴門海峡を一望できる絶景宿。激流にもまれた鳴門鯛の骨蒸しや阿波牛、伊勢海老会席を味わい、刻々と移り変わる海の表情に浸ることができます。",
    "revAvg": "4.5",
    "minCharge": "6,000"
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
    "reviewCount": 1770,
    "reviewAverage": 4.28,
    "userReview": "鯛料理と貸切風呂に癒やされる定宿いつも帰省の時に泊まっています。追加で朝食や夕食がとれます。いつもながらの鯛のとうばん焼きや、鯛釜飯も美味しくいただきました。貸切風呂もよくてゆっくりできました…　 ",
    "hotelMinCharge": 3640,
    "address1": "愛媛県",
    "address2": "今治市中浜町1-2-5",
    "telephoneNo": "0898-23-3330",
    "access": "【平面駐車場無料】／JR今治駅徒歩15分・車5分／しまなみ海道【今治IC】車10分／しまなみライナー【今治桟橋】徒歩1分",
    "parkingInformation": "無料平面駐車場59台（出入自由）／バイク屋根付／自転車客室持込可／大型車応相談",
    "nearestStation": "今治",
    "hotelSpecial": "Serta社製ベッド／今治タオル／貸切風呂／雪肌精アメニティ／真鯛の絶品夕食／Wi-Fi完備",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D10758",
    "label": "愛媛県今治市ふるさと納税・日本三大急潮の八艘飛び潮流「来島海峡」来島鯛としまなみ海道今治国際ホテル",
    "themeTitle": "愛媛県今治市ふるさと納税：日本屈指の急潮・来島海峡としまなみ海道の玄関口「ホテル菊水今治」",
    "themeDesc": "今治港のすぐ目の前に位置し、来島海峡の島々と行き交う船を望む好立地ホテル。潮流に揉まれた身の引き締まった来島鯛を使った郷土料理「鯛めし」や、名物今治鉄板焼鳥、瀬戸内の海の幸を堪能できます。",
    "revAvg": "4.3",
    "minCharge": "3,640"
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
    "reviewCount": 1549,
    "reviewAverage": 4.28,
    "userReview": "最上階角部屋の眺望とコスパに大満足一泊朝食付きで宿泊させていただきました。部屋は最上階の3人部屋で角部屋だったんですが部屋からの眺めが最高でした。接客、清掃、サービス言うことなしでしかも料金も…　 ",
    "hotelMinCharge": 4500,
    "address1": "山口県",
    "address2": "下関市南部町31-2",
    "telephoneNo": "083-231-5000",
    "access": "ＪＲ下関から車で５分、ＪＲ門司港駅横から船で５分",
    "parkingInformation": "有り　３０台　無料",
    "nearestStation": "下関",
    "hotelSpecial": "目の前は関門海峡☆徒歩圏内に唐戸市場、海響館と便利です♪",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D7013",
    "label": "山口県下関市ふるさと納税・早鞆ノ瀬戸の急潮と巌流島「関門海峡」本場下関のとらふぐと全室露天風呂下関温泉風の海",
    "themeTitle": "山口県下関市ふるさと納税：早鞆ノ瀬戸の急潮と関門橋をパノラマで仰ぐ「下関グランドホテル」",
    "themeDesc": "唐戸市場や海響館に隣接し、関門海峡の潮流と関門橋を一望するウォーターフロントホテル。本場下関のとらふぐ刺しやふぐちり鍋のフルコースを堪能し、海峡の夜景と船の汽笛に包まれる優雅な滞在を満喫します。",
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
          <span className="text-slate-700 font-medium">日本三大急潮＆激流うず潮パノラマ宿×ふるさと納税ガイド</span>
        </div>
      </nav>

      {/* ヒーローヘッダー */}
      <header className="relative bg-gradient-to-br from-emerald-950 via-slate-900 to-teal-950 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-block bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-semibold px-3 py-1 rounded-full mb-2">
            日本三大急潮・海峡絶景特集
          </div>
          <h1 className="text-2xl md:text-4xl font-bold leading-tight tracking-tight">
            日本三大急潮＆激流うず潮パノラマ宿×ふるさと納税ガイド
          </h1>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-3xl mx-auto pt-2">
            狭い海峡に大量の海水が一気に押し寄せ、まるで激流の川や滝のように潮流が渦巻く「日本三大急潮」――最大時速20kmにおよび直径20mもの巨大な渦潮が渦巻く世界自然遺産級の徳島「鳴門海峡」、しまなみ海道の難所として知られ最大時速10ノット（約18km）の八艘飛び潮流が荒波を立てる愛媛の「来島海峡」、そして本州と九州を隔て源平合戦や宮本武蔵・佐々木小次郎の決闘の舞台となった早鞆ノ瀬戸の潮流が白波を立てる山口・福岡の「関門海峡」。潮の流れが激しい海峡で育った魚は身が引き締まり、脂の乗りと歯ごたえが抜群です。海峡大橋や行き交う大型船、渦潮を見下ろすオーシャンビューホテルを拠点に、鳴門鯛・来島鯛・下関とらふぐなどの至高の海の幸を味わう特別な休日を楽天ふるさと納税でお楽しみください。
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
            轟音とともに渦巻く大潮流と、海峡を渡る心地よい潮風。海のエネルギーを体感する海峡ステイ
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>うず潮クルーズや海峡大橋展望台へすぐ！潮流のピーク時間に合わせて観光</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                大潮・満潮干潮の時間帯をチェックし、宿からベストタイミングで迫力の潮流やうず潮を鑑賞。
              </p>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>鳴門鯛しゃぶしゃぶ、来島鯛めし＆伊予牛、下関とらふぐフルコース</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                激流にもまれて筋肉質に引き締まった海峡の最高峰ブランド魚を贅沢に味わい尽くす夕食。
              </p>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>楽天ふるさと納税宿泊クーポンで海峡一望のリゾート＆ホテルをお得にステイ</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                雄大なオーシャンビュー客室も、寄付金額に応じた最大30%オフの即時割引クーポンでスマートに予約。
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
            
            <Link href="/furusato-tax-three-great-harbor-cruises-luxury-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三大港クルーズ＆夜景ディナークルーズ宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                神戸・横浜・長崎。
              </p>
            </Link>
            
            <Link href="/furusato-tax-three-great-precipitous-coasts-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三大名勝断崖海岸＆パノラマ海宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                北山崎・東尋坊・足摺岬。
              </p>
            </Link>
            
            <Link href="/furusato-tax-three-great-water-castles-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三大水城＆名城パノラマ宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                高松城・今治城・中津城。
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
