import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '日本三大奇橋＆木造アーチ・断崖渓谷の刎橋と名湯宿×ふるさと納税完全ガイド【2026年最新】錦帯橋・猿橋・日光神橋',
  description: '釘を使わない驚異の木造建築美！山口岩国「錦帯橋」五連の木造アーチと宮浜温泉湯の宿宮浜グランドホテル、山梨大月「甲斐の猿橋」桂川渓谷に橋脚なしで架かる刎橋と東横INN富士山大月駅、栃木日光「日光神橋」世界遺産二社一寺の玄関口と名門日光金谷ホテル。日本三大奇橋の歴史ロマンと渓谷美を楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
  keywords: '日本三大奇橋・木造建築美特集, 楽天ふるさと納税, 温泉宿, ふるさと納税 旅行, 高級旅館, ホテル予約, 2026年旅行',
  openGraph: {
    title: '日本三大奇橋＆木造アーチ・断崖渓谷の刎橋と名湯宿×ふるさと納税完全ガイド【2026年最新】錦帯橋・猿橋・日光神橋',
    description: '釘を使わない驚異の木造建築美！山口岩国「錦帯橋」五連の木造アーチと宮浜温泉湯の宿宮浜グランドホテル、山梨大月「甲斐の猿橋」桂川渓谷に橋脚なしで架かる刎橋と東横INN富士山大月駅、栃木日光「日光神橋」世界遺産二社一寺の玄関口と名門日光金谷ホテル。日本三大奇橋の歴史ロマンと渓谷美を楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    type: 'article',
    url: 'https://croud-travel.pages.dev/furusato-tax-three-great-unusual-bridges-stay',
    siteName: 'トラベルポータル',
  },
};

export default function Page() {
  const officialAffUrl = 'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F';

  const hotels = [
  {
    "hotelNo": 13743,
    "hotelName": "宮浜温泉　湯の宿　宮浜グランドホテル",
    "hotelKanaName": "みやはまおんせん　ゆのやど　みやはまぐらんどほてる",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D13743",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D13743%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D13743",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D13743",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/13743/13743.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/13743.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/13743/13743_war.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/13743/13743map.gif",
    "reviewCount": 746,
    "reviewAverage": 4.22,
    "userReview": "9年ぶりの再訪、変わらぬ料理と海を望む露天風呂9年ぶり2度目の宿泊でした。料理の美味しさを記憶していたのですが、やはり、料理長は同じ方で美味しゅうございました。ご馳走様でした。3世帯7名での宿…　2026-09-03 15:25:50投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=13743\" class=\"3click\">つづきはこちら</a>",
    "hotelMinCharge": 10890,
    "address1": "広島県",
    "address2": "廿日市市宮浜温泉2-5-4",
    "telephoneNo": "0829-55-2255",
    "access": "ＪＲ大野浦駅より送迎有り／山陽自動車道大野ＩＣより約７～８分",
    "parkingInformation": "有り　３０台　先着順　無料",
    "nearestStation": "大野浦",
    "hotelSpecial": "展望大浴場と旬の素材を使った料理が好評。宮島口から車で12分。無料駐車場有！",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D13743",
    "featureKey": "bridge_kintaikyo",
    "featureLabel": "山口県岩国市ふるさと納税・五連のアーチが清流錦川に架かる木造美「錦帯橋」橋を一望する岩国国際観光ホテル",
    "themeTitle": "山口県岩国市・広島県廿日市市ふるさと納税：錦帯橋と宮島を望む温泉宿「宮浜温泉 湯の宿 宮浜グランドホテル」",
    "themeDesc": "五連木造アーチの名橋・錦帯橋から車でアクセス良好な宮浜温泉の名宿。瀬戸内海と宮島を一望する露天風呂「マルミエロテン」で癒やされ、夕食は瀬戸内の旬の地魚や広島牛、郷土の岩国寿司を取り入れた会席料理を贅沢に堪能できます。",
    "revAvg": "4.2",
    "minCharge": "10,890"
  },
  {
    "hotelNo": 183891,
    "hotelName": "東横ＩＮＮ富士山大月駅",
    "hotelKanaName": "とうよこいんふじさんおおつきえき",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D183891",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D183891%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D183891",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D183891",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/183891/183891.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/183891.jpg",
    "roomImageUrl": "",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/183891/183891map.gif",
    "reviewCount": 468,
    "reviewAverage": 4.05,
    "userReview": "ペット用フロアで犬の鳴き声が気になったペット連れではないのにペット同伴部屋に案内されたのが不満。そのフロアでは犬の吠える声が聞こえて、不満。別のフロアに通すべき。クチコミの詳細はこちらから　h…　2026-09-05 14:00:39投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=183891\" class=\"3click\">つづきはこちら</a>",
    "hotelMinCharge": 6347,
    "address1": "山梨県",
    "address2": "大月市御太刀2-3-1",
    "telephoneNo": "0554-21-2045",
    "access": "JR中央本線・富士急行線「大月駅」から徒歩5分",
    "parkingInformation": "有り／136台／無料／先着順　※内、大型バス2台／予約制",
    "nearestStation": "大月",
    "hotelSpecial": "大月駅から徒歩5分で朝食・小学生以下添い寝無料のホテル！岩殿山まで徒歩30分",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D183891",
    "featureKey": "bridge_saruhashi",
    "featureLabel": "山梨県大月市ふるさと納税・桂川の深い渓谷に橋脚を使わず架かる刎橋構造「甲斐の猿橋」渓谷の自然と富士山ステイ",
    "themeTitle": "山梨県大月市ふるさと納税：名勝・甲斐の猿橋観光の玄関口「東横INN富士山大月駅」",
    "themeDesc": "桂川の断崖絶壁に架かる奇橋・猿橋まで車で約10分、JR大月駅前すぐの抜群の立地。清潔で機能的な客室と無料の朝食サービスで快適に滞在でき、甲州街道の宿場町の面影や富士山・桂川渓谷のアクティビティの拠点として最適です。",
    "revAvg": "4.0",
    "minCharge": "6,347"
  },
  {
    "hotelNo": 28760,
    "hotelName": "日光金谷ホテル",
    "hotelKanaName": "にっこうかなやほてる",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D28760",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D28760%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D28760",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D28760",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/28760/28760.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/28760.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/28760/28760_kan.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/28760/28760map.gif",
    "reviewCount": 893,
    "reviewAverage": 4.49,
    "userReview": "派手さの無い本物本当に落ち着く部屋でした。夕食の後のバーも雰囲気があって本当に良かったです。必ずまた行きます。出来れば数泊することをお勧めします。クチコミの詳細はこちらから　https://r…　2026-09-01 08:05:07投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=28760\" class=\"3click\">つづきはこちら</a>",
    "hotelMinCharge": 11135,
    "address1": "栃木県",
    "address2": "日光市上鉢石町1300",
    "telephoneNo": "0288-54-0001",
    "access": "東武・ＪＲ日光駅よりバス約５分、神橋バス停下車／日光－宇都宮有料道路日光ＩＣより神橋交差点近く　日光東照宮より徒歩15分",
    "parkingInformation": "有り（屋外）　６０台　無料　予約不要",
    "nearestStation": "東武日光",
    "hotelSpecial": "創業明治６年、日本最古のクラシックリゾートホテル。明治の薫り漂う館内で時間旅行をご堪能下さい。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D28760",
    "featureKey": "bridge_shinkyo",
    "featureLabel": "栃木県日光市ふるさと納税・世界遺産二社一寺の玄関口を飾る朱塗りの名橋「日光神橋」伝統薫る日光金谷ホテル",
    "themeTitle": "栃木県日光市ふるさと納税：日光神橋すぐ・世界遺産の玄関口に佇む現存日本最古のクラシックホテル「日光金谷ホテル」",
    "themeDesc": "朱塗りの日光神橋を渡ってすぐの高台に建ち、アインシュタインやヘレン・ケラーなど世界の賓客を迎えてきた名門ホテル。登録有形文化財の重厚な空間で寛ぎ、伝統の百年ライスカレーや本格フランス料理コースを優雅に味わえます。",
    "revAvg": "4.5",
    "minCharge": "11,135"
  }
];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* パンくずリスト */}
      <nav className="bg-white border-b border-slate-200 py-3 px-4 text-xs text-slate-500">
        <div className="max-w-5xl mx-auto flex items-center space-x-2">
          <Link href="/" className="hover:text-emerald-600 transition">ホーム</Link>
          <span>&gt;</span>
          <span className="text-slate-700 font-medium">日本三大奇橋＆渓谷美・歴史ロマンの名宿×ふるさと納税ガイド</span>
        </div>
      </nav>

      {/* ヒーローヘッダー */}
      <header className="relative bg-gradient-to-br from-emerald-950 via-slate-900 to-teal-950 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-block bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-semibold px-3 py-1 rounded-full mb-2">
            日本三大奇橋・木造建築美特集
          </div>
          <h1 className="text-2xl md:text-4xl font-bold leading-tight tracking-tight">
            日本三大奇橋＆渓谷美・歴史ロマンの名宿×ふるさと納税ガイド
          </h1>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-3xl mx-auto pt-2">
            急峻な渓谷や激流を越えるため、江戸時代以前の匠たちが知恵を絞って築き上げた「日本三大奇橋」――清流錦川に優美な五連の木造アーチを描き、釘を一本も使わずに組み上げられた山口岩国の「錦帯橋」、桂川の深い断崖絶壁の両岸から斜めに木材を突き出して橋を支える「刎橋（はねばし）」構造で歌川広重の浮世絵にも描かれた山梨の「甲斐の猿橋」、そして世界遺産・日光の社寺への神聖な入り口として大谷川の急流に鮮やかな朱色で架かる「日光神橋」。四季折々の新緑や紅葉、雪景色に映えるその姿は、まさに生きた芸術品です。歴史ある名橋を渡り匠の技に圧倒された後は、周辺の名湯宿で名物鮎料理や岩国寿司、甲州ワインビーフ、伝統の西洋料理を楽天ふるさと納税でお楽しみください。
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
            川床に橋脚を立てず宙に張り出す知恵。先人の驚異的な技術が息づく奇橋巡礼
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>釘を使わない精巧な木組みや断崖に張り出す刎橋構造！唯一無二の建築美</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                写真映え抜群の優美なアーチや渓谷の岩肌と調和した木造美を、橋上と川岸の両面から鑑賞。
              </p>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>岩国寿司＆瀬戸内小魚会席、甲州ワインビーフ＆ほうとう、日光伝統フランス料理</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                街道と城下町、門前町が育んだ伝統の食文化を、老舗宿や名門ホテルでゆったり堪能。
              </p>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>楽天ふるさと納税宿泊クーポンで歴史薫る名宿・リゾートをお得に予約</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                文化財巡りや週末のドライブ旅行でも、寄付金額に応じた最大30%オフの即時割引クーポンでスマートにお得ステイ。
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
            
            <Link href="/furusato-tax-three-great-mountain-castles-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三大山城＆天空の雲海要塞宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                大和高取城・美濃岩村城・備中松山城。
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
            
            <Link href="/furusato-tax-three-great-gorges-scenery-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三大渓谷美＆清流大自然絶景宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                清津峡・黒部峡谷・大杉谷。
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
