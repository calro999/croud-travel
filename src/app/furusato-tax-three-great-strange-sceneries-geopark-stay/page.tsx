import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '日本三大奇景＆奇岩怪石ジオパーク・絶景パノラマ温泉宿×ふるさと納税完全ガイド【2026年最新】妙義山・寒霞渓・耶馬渓',
  description: '数百万年の風雨が刻んだ地球の彫刻美！群馬「妙義山」切り立つ荒々しい岩峰群と妙義温泉妙義グリーンホテル＆テラス、香川小豆島「寒霞渓」瀬戸内海を望む表十二景・裏八景とベイリゾートホテル小豆島、大分「耶馬渓」頼山陽が賞賛した奇岩絶壁と天ヶ瀬温泉成天閣。日本三大奇景の大自然ジオアートと名湯を楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
  keywords: '日本三大奇景・ジオパーク特集, 楽天ふるさと納税, 温泉宿, ふるさと納税 旅行, 高級旅館, ホテル予約, 2026年旅行',
  openGraph: {
    title: '日本三大奇景＆奇岩怪石ジオパーク・絶景パノラマ温泉宿×ふるさと納税完全ガイド【2026年最新】妙義山・寒霞渓・耶馬渓',
    description: '数百万年の風雨が刻んだ地球の彫刻美！群馬「妙義山」切り立つ荒々しい岩峰群と妙義温泉妙義グリーンホテル＆テラス、香川小豆島「寒霞渓」瀬戸内海を望む表十二景・裏八景とベイリゾートホテル小豆島、大分「耶馬渓」頼山陽が賞賛した奇岩絶壁と天ヶ瀬温泉成天閣。日本三大奇景の大自然ジオアートと名湯を楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    type: 'article',
    url: 'https://croud-travel.pages.dev/furusato-tax-three-great-strange-sceneries-geopark-stay',
    siteName: 'トラベルポータル',
  },
};

export default function Page() {
  const officialAffUrl = 'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F';

  const hotels = [
  {
    "hotelNo": 29835,
    "hotelName": "妙義温泉　妙義グリーンホテル＆テラス",
    "hotelKanaName": "みょうぎおんせん　みょうぎぐりーんほてるあんどてらす",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D29835",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D29835%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D29835",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D29835",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/29835/29835.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/29835.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/29835/29835_d.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/29835/29835map.gif",
    "reviewCount": 1882,
    "reviewAverage": 4.29,
    "userReview": "清掃が行き届いておらず埃が酷く残念部屋の埃が酷かったです。テレビやティッシュ、お茶のコップがある棚が特に酷く、カーテンを開けるたびに大量に埃が舞っておりました。小さい子供がいたので咳が止まらず困り…　 ",
    "hotelMinCharge": 9070,
    "address1": "群馬県",
    "address2": "富岡市妙義町菅原2678",
    "telephoneNo": "0274-73-4111",
    "access": "JR松井田駅よりタクシー12分／磯部駅よりタクシー17分／松井田妙義IC（上信越自動車道）より１２分",
    "parkingInformation": "有　２００台　無料",
    "nearestStation": "松井田",
    "hotelSpecial": "【オールインクルーシブ】日本三大奇景「妙義山」を望む、緑豊かなホテルとグランピング",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D29835",
    "label": "群馬県富岡市・安中市ふるさと納税・日本三大奇景の荒々しい岩峰群「妙義山」妙義山を望む絶景温泉妙義グリーンホテル＆テラス",
    "themeTitle": "群馬県富岡市・安中市ふるさと納税：荒々しい岩峰群「妙義山」を一望する自家源泉リゾート「妙義温泉 妙義グリーンホテル＆テラス」",
    "themeDesc": "日本三大奇景・妙義山のダイナミックな景観を正面に望む極上リゾート。地下2000mから湧出する自家源泉「長寿の湯」はとろりとした美肌泉。テラスグランピングや信州・上州の厳選食材を使ったディナーを堪能できます。",
    "revAvg": "4.3",
    "minCharge": "9,070"
  },
  {
    "hotelNo": 44874,
    "hotelName": "ベイリゾートホテル小豆島",
    "hotelKanaName": "べいりぞーとほてるしょうどしま",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D44874",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D44874%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D44874",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D44874",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/44874/44874.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/44874.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/44874/44874_yso.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/44874/44874map.gif",
    "reviewCount": 1907,
    "reviewAverage": 4.29,
    "userReview": "スタッフの接客と美味しい食事に大満足従業員の皆さんの接客が本当に素晴らしく、とても気持ちよく過ごすことができました。夕食のビュッフェは、お料理はきちんと温かい状態で提供されていて、どれも美…　 ",
    "hotelMinCharge": 5500,
    "address1": "香川県",
    "address2": "小豆郡小豆島町古江乙16-3",
    "telephoneNo": "0879-82-5000",
    "access": "（車）坂手港3分/福田港30分/土庄港30分/草壁港10分/池田港20分★大部港以外の無料送迎有（2日前までに予約要）",
    "parkingInformation": "有り　６０台　無料",
    "nearestStation": "坂出",
    "hotelSpecial": "◆全室オーシャンビュー◆自家源泉の最上階展望露天風呂＆個室貸切露天風呂が魅力★",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D44874",
    "label": "香川県小豆島町・土庄町ふるさと納税・表十二景裏八景が織りなす大渓谷美「寒霞渓」瀬戸内海の夕日とエンジェルロード小豆島国際ホテル",
    "themeTitle": "香川県小豆島町・土庄町ふるさと納税：表十二景・裏八景の大渓谷「寒霞渓」と瀬戸内パノラマ「ベイリゾートホテル小豆島」",
    "themeDesc": "日本屈指の景勝地・寒霞渓ロープウェイへの観光に好立地。全室オーシャンビューの客室からは穏やかな瀬戸内海を一望。小豆島オリーブ牛や獲れたて地魚会席、展望露天風呂で島時間をゆったり満喫します。",
    "revAvg": "4.3",
    "minCharge": "5,500"
  },
  {
    "hotelNo": 37891,
    "hotelName": "天ヶ瀬温泉　成天閣",
    "hotelKanaName": "あまがせおんせんせいてんかく",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D37891",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D37891%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D37891",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D37891",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/37891/37891.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/37891.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/37891/37891_ro.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/37891/37891map.gif",
    "reviewCount": 481,
    "reviewAverage": 4.65,
    "userReview": "川沿いで涼しげなロケーションで行ってよかったです。フロントや設備はリフォーム済みで非常にきれでした。部屋は古さはあるけど清潔でリラックス出来ました。食事も全て美味しく、お酒の値段も居酒屋並みに安く楽し…　 ",
    "hotelMinCharge": 8250,
    "address1": "大分県",
    "address2": "日田市天瀬町湯山1143",
    "telephoneNo": "0973-57-2350",
    "access": "ＪＲ　天瀬駅より徒歩１０分",
    "parkingInformation": "有（無料）",
    "nearestStation": "天ヶ瀬",
    "hotelSpecial": "全室リバービューの源泉かけ流し宿｜静かに過ごす天ヶ瀬温泉の隠れ宿",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D37891",
    "label": "大分県中津市ふるさと納税・頼山陽が絶賛した奇岩絶壁の天下無双景「耶馬渓」青の洞門と天然温泉・中津名物からあげ宿",
    "themeTitle": "大分県中津市・日田市ふるさと納税：頼山陽が絶賛した奇岩絶壁の天下無双景「耶馬渓」と清流名湯「天ヶ瀬温泉 成天閣」",
    "themeDesc": "青の洞門や競秀峰、深耶馬渓の奇岩美を巡る旅。玖珠川の清流沿いに佇む「成天閣」では、川のせせらぎを間近に感じる名物露天風呂と、豊後牛や川魚・地元野菜をふんだんに取り入れた郷土会席で心身を解き放ちます。",
    "revAvg": "4.7",
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
          <span className="text-slate-700 font-medium">日本三大奇景＆奇岩パノラマ温泉宿×ふるさと納税ガイド</span>
        </div>
      </nav>

      {/* ヒーローヘッダー */}
      <header className="relative bg-gradient-to-br from-emerald-950 via-slate-900 to-teal-950 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-block bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-semibold px-3 py-1 rounded-full mb-2">
            日本三大奇景・ジオパーク特集
          </div>
          <h1 className="text-2xl md:text-4xl font-bold leading-tight tracking-tight">
            日本三大奇景＆奇岩パノラマ温泉宿×ふるさと納税ガイド
          </h1>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-3xl mx-auto pt-2">
            火山活動と数百万年におよぶ浸食作用が奇跡の岩峰地形を生み出した「日本三大奇景」――白雲山や金洞山など鋸歯状の岩稜がそそり立ち、日本屈指の岩峰美と修験の歴史を刻む群馬の「妙義山」、瀬戸内海国立公園の中心に位置し、天涯を突く奇岩怪石と四季折々の紅葉・新緑がロープウェイから一望できる小豆島の「寒霞渓」、そして江戸時代の文人・頼山陽がその絶景に感嘆して名付け、青の洞門や競秀峰など数里にわたって奇岩が連なる大分の「耶馬渓」。人間業では成し得ない大自然の圧倒的スケールは、見る者の冒険心と美的好奇心を揺さぶります。岩峰や渓谷を一望する絶景温泉宿を拠点に、上州牛・瀬戸内鮮魚・豊後牛などのご当地美食を心ゆくまで味わう特別な休日を楽天ふるさと納税でお楽しみください。
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
            天を突く奇岩怪石と燃え立つ峡谷美。大地の躍動が生んだ三大奇景の別世界へ
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>奇岩峰や渓谷を望むパノラマ絶景！客室露天風呂や展望テラスで至福の寛ぎ</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                夕日に染まる奇岩のシルエットや朝靄に包まれる峡谷美を、宿の特等席から誰にも邪魔されず鑑賞。
              </p>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>上州牛ステーキ、小豆島オリーブ牛＆旬魚、豊後牛と日田・中津郷土料理</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                大自然の滋味豊かなブランド肉や獲れたての海の幸を、料理長渾身の本格会席で贅沢に堪能。
              </p>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>楽天ふるさと納税宿泊クーポンでリゾートホテルや秘湯旅館を実質2,000円予約</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                ジオパーク観光のハイシーズンでも、寄付金額に応じた最大30%オフの即時割引でスマートにお得旅。
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
            
            <Link href="/furusato-tax-three-great-precipitous-coasts-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三大名勝断崖海岸＆パノラマ海宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                北山崎・東尋坊・足摺岬。
              </p>
            </Link>
            
            <Link href="/furusato-tax-three-great-limestone-caves-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三大鍾乳洞＆地底神秘美・名湯宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                龍泉洞・秋芳洞・龍河洞。
              </p>
            </Link>
            
            <Link href="/furusato-tax-three-great-gorges-canyon-scenery-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三大峡谷＆断崖絶壁・エメラルド渓谷宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                清津峡・黒部峡谷・瀞峡。
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
