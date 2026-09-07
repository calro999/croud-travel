import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '日本三大和紙＆清流の里の手漉き体験・紙漉き文化の湯宿×ふるさと納税完全ガイド【2026年最新】越前・美濃・土佐',
  description: '千年の時を超える手漉きの温もりと強靭さ！福井越前「越前和紙」1500年の技とホテルクラウンヒルズ武生駅前、岐阜美濃「美濃和紙」うだつの上がる町並みと長良川の恵み料理旅館いずみ荘、高知いの町「土佐和紙」奇跡の清流仁淀ブルーと土佐和紙工芸村くらうど。日本三大和紙の工房見学と清流温泉を楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
  keywords: '日本三大和紙・伝統手漉き工芸特集, 楽天ふるさと納税, 温泉宿, ふるさと納税 旅行, 高級旅館, ホテル予約, 2026年旅行',
  openGraph: {
    title: '日本三大和紙＆清流の里の手漉き体験・紙漉き文化の湯宿×ふるさと納税完全ガイド【2026年最新】越前・美濃・土佐',
    description: '千年の時を超える手漉きの温もりと強靭さ！福井越前「越前和紙」1500年の技とホテルクラウンヒルズ武生駅前、岐阜美濃「美濃和紙」うだつの上がる町並みと長良川の恵み料理旅館いずみ荘、高知いの町「土佐和紙」奇跡の清流仁淀ブルーと土佐和紙工芸村くらうど。日本三大和紙の工房見学と清流温泉を楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    type: 'article',
    url: 'https://croud-travel.pages.dev/furusato-tax-three-great-washi-papers-stay',
    siteName: 'トラベルポータル',
  },
};

export default function Page() {
  const officialAffUrl = 'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F';

  const hotels = [
  {
    "hotelNo": 6113,
    "hotelName": "ホテルクラウンヒルズ武生駅前（ＢＢＨホテルグループ）",
    "hotelKanaName": "ほてるくらうんひるずたけふえきまえ",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D6113",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D6113%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D6113",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D6113",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/6113/6113.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/6113.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/6113/6113_sig.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/6113/6113map.gif",
    "reviewCount": 915,
    "reviewAverage": 4,
    "userReview": "花火会場への好立地と充実したサービスが魅力越前市サマーフェスティバルのために宿泊しました。花火会場に行くには立地は最高でした。部屋などはよくあるビジネスホテルといった感じで良くも悪くもなく…　 ",
    "hotelMinCharge": 4400,
    "address1": "福井県",
    "address2": "越前市府中1-2-3",
    "telephoneNo": "050-1807-0029",
    "access": "ハピラインふくい武生駅下車徒歩1分！　 北陸自動車道武生IC車で10分　",
    "parkingInformation": "有り　40台　840円／泊",
    "nearestStation": "武生",
    "hotelSpecial": "ハピライン武生駅より徒歩1分以内の好立地。9Fスカイレストランからは、越前市街を一望できます。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D6113",
    "label": "福井県越前市ふるさと納税・1500年の技・最高品質の奉書紙「越前和紙の里」紙漉き体験とホテルクラウンヒルズ武生駅前",
    "themeTitle": "福井県越前市ふるさと納税：1500年の紙祖神伝説が息づく「越前和紙の里」と「ホテルクラウンヒルズ武生駅前」",
    "themeDesc": "国の重要無形文化財・越前和紙のパピルス館や紙の文化博物館へアクセス良好。武生駅前の便利な拠点で、大浴場と充実の朝食サービスで寛ぎ、名物越前おろしそばやボルガライス、日本海の幸を満喫できます。",
    "revAvg": "4.0",
    "minCharge": "4,400"
  },
  {
    "hotelNo": 8028,
    "hotelName": "料理旅館いずみ荘",
    "hotelKanaName": "りょうりりょかん　いずみそう",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D8028",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D8028%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D8028",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D8028",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/8028/8028.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/8028.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/8028/8028_heya.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/8028/8028map.gif",
    "reviewCount": 73,
    "reviewAverage": 4.21,
    "userReview": "",
    "hotelMinCharge": 7700,
    "address1": "岐阜県",
    "address2": "美濃市安毛31-5",
    "telephoneNo": "0575-33-0426",
    "access": "美濃市駅より車で7分/美濃ＩＣから7分",
    "parkingInformation": "有り　60台　　無料",
    "nearestStation": "梅山",
    "hotelSpecial": "山・川・里の四季折々の食材を使用したこだわりのお料理が自慢の料理旅館",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D8028",
    "label": "岐阜県美濃市・岐阜市ふるさと納税・清流長良川が育んだ薄く強靭な「美濃和紙」うだつの町並みと長良川温泉十八楼",
    "themeTitle": "岐阜県美濃市・岐阜市ふるさと納税：ユネスコ無形文化遺産本美濃紙とうだつの町並み「料理旅館いずみ荘」",
    "themeDesc": "美濃和紙あかりアート館やうだつの上がる町並み散策の拠点。長良川水系の清流近くに建つ料理旅館で、炭火で香ばしく焼き上げる長良川の天然鮎や飛騨牛会席、美濃の地酒を静かな和室で堪能します。",
    "revAvg": "4.2",
    "minCharge": "7,700"
  },
  {
    "hotelNo": 75287,
    "hotelName": "土佐和紙工芸村「くらうど」",
    "hotelKanaName": "とさわしこうげいむらくらうど",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D75287",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D75287%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D75287",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D75287",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/75287/75287.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/75287.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/75287/75287_wa.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/75287/75287map.gif",
    "reviewCount": 278,
    "reviewAverage": 4.43,
    "userReview": "接客とロケーションが最高、食事も大満足接客対応がとても素晴らしくロケーションも抜群でした。朝食、夕食ともとても美味しく是非また利用したいです。色々、高知の宿を迷いましたが、ここにして良かったです。…　 ",
    "hotelMinCharge": 10850,
    "address1": "高知県",
    "address2": "吾川郡いの町鹿敷1226",
    "telephoneNo": "088-892-1001",
    "access": "JR伊野駅より北部交通バスで15分、岩村下車すぐ/高知市内より車で30分",
    "parkingInformation": "有り　９０台　無料　予約不要",
    "nearestStation": "伊野",
    "hotelSpecial": "【夕食評価4.8】土佐の自然の恵みを、見て、味わって、体験して。仁淀川の隠れ宿。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D75287",
    "label": "高知県いの町ふるさと納税・奇跡の清流仁淀ブルーが生んだカゲロウの羽「土佐和紙」紙漉き体験と土佐和紙工芸村くらうど",
    "themeTitle": "高知県いの町ふるさと納税：奇跡の清流仁淀ブルーと紙漉き体験リゾート「土佐和紙工芸村 くらうど」",
    "themeDesc": "仁淀川のほとりに位置する体験型スパリゾート。本格的な手漉き土佐和紙体験工房を備え、露天風呂付き大浴場やスパ、地元の食材をふんだんに取り入れたフレンチ懐石や土佐会席、自家製クラフトビールを楽しめます。",
    "revAvg": "4.4",
    "minCharge": "10,850"
  }
];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* パンくずリスト */}
      <nav className="bg-white border-b border-slate-200 py-3 px-4 text-xs text-slate-500">
        <div className="max-w-5xl mx-auto flex items-center space-x-2">
          <Link href="/" className="hover:text-emerald-600 transition">ホーム</Link>
          <span>&gt;</span>
          <span className="text-slate-700 font-medium">日本三大和紙＆清流文化湯宿×ふるさと納税ガイド</span>
        </div>
      </nav>

      {/* ヒーローヘッダー */}
      <header className="relative bg-gradient-to-br from-emerald-950 via-slate-900 to-teal-950 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-block bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-semibold px-3 py-1 rounded-full mb-2">
            日本三大和紙・伝統手漉き工芸特集
          </div>
          <h1 className="text-2xl md:text-4xl font-bold leading-tight tracking-tight">
            日本三大和紙＆清流文化湯宿×ふるさと納税ガイド
          </h1>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-3xl mx-auto pt-2">
            自然の植物繊維と清らかな名水を使い、職人が一枚一枚漉き上げる日本の伝統文化「日本三大和紙」――大滝神社の川上御前（紙祖神）を祀り、公家や武家の公用紙として奉書紙の最高峰を極めた福井の「越前和紙」、清流長良川の豊かな水と日差しの中で育まれ、薄く漉きムラのない強靭さで正倉院の戸籍帳にも残る岐阜の「美濃和紙」、そして「仁淀ブルー」で知られる奇跡の清流・仁淀川の水を用い、極薄で丈夫な典具帖紙（カゲロウの羽）を生み出した高知の「土佐和紙」。しなやかで温かみのある和紙は、触れるだけで心を和ませてくれます。清流のせせらぎを聞く名湯旅館や体験型リゾートに泊まり、紙漉き体験とともにアユ・アマゴや山菜会席を味わう豊かな休日を楽天ふるさと納税でお楽しみください。
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
            清冽な水と楮・三椏が紡ぎ出す至高の手触り。職人の魂が宿る三大和紙の里を訪ねる
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>和紙の里・工房ギャラリーへ直行！職人の手漉き実演や自分だけの和紙作り体験</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                紙漉き職人の手さばきを見学し、オリジナルの和紙ハガキやランプシェード作りに挑戦。
              </p>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>越前おろしそば＆越前ガニ、長良川の天然鮎＆飛騨牛、仁淀川アメゴ＆土佐カツオ</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                名水が育んだ清流の川魚や里山の味覚、地酒を、風情ある宿の本格料理で堪能。
              </p>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>楽天ふるさと納税宿泊クーポンで工芸リゾートや隠れ家温泉をお得にリザーブ</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                里山の上質な体験型宿泊施設も、寄付金額に応じた即時割引クーポンで実質2,000円負担の快適ステイ。
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
            
            <Link href="/furusato-tax-three-great-lacquerwares-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三大漆器＆伝統工芸名湯宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                越前・山中・会津。
              </p>
            </Link>
            
            <Link href="/furusato-tax-three-pottery-towns-heritage-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                三大陶磁器の里＆窯元巡り工芸宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                有田・瀬戸・美濃。
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
