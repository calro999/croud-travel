import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '日本三大鍾乳石洞窟＆無数の石筍が創る地底宮殿・ジオアドベンチャー名湯宿×ふるさと納税完全ガイド【2026年最新】あぶくま洞・玉泉洞・井倉洞',
  description: '数十万年の滴が創り上げた天然のシャンデリア！福島「あぶくま洞」東洋一の鍾乳石種類と磐梯熱海温泉ホテル華の湯、沖縄南城「玉泉洞」100万本の石筍とサザンビーチホテル＆リゾート沖縄、岡山新見「井倉洞」高さ240m絶壁と地底滝の奇観・新見グランドホテルみよしや。日本三大鍾乳石洞窟の神秘の地底美を楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
  keywords: '日本三大鍾乳石・地底アート特集, 楽天ふるさと納税, 温泉宿, ふるさと納税 旅行, 高級旅館, ホテル予約, 2026年旅行',
  openGraph: {
    title: '日本三大鍾乳石洞窟＆無数の石筍が創る地底宮殿・ジオアドベンチャー名湯宿×ふるさと納税完全ガイド【2026年最新】あぶくま洞・玉泉洞・井倉洞',
    description: '数十万年の滴が創り上げた天然のシャンデリア！福島「あぶくま洞」東洋一の鍾乳石種類と磐梯熱海温泉ホテル華の湯、沖縄南城「玉泉洞」100万本の石筍とサザンビーチホテル＆リゾート沖縄、岡山新見「井倉洞」高さ240m絶壁と地底滝の奇観・新見グランドホテルみよしや。日本三大鍾乳石洞窟の神秘の地底美を楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    type: 'article',
    url: 'https://croud-travel.pages.dev/furusato-tax-three-great-stalactite-caves-stay',
    siteName: 'トラベルポータル',
  },
};

export default function Page() {
  const officialAffUrl = 'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F';

  const hotels = [
  {
    "hotelNo": 15988,
    "hotelName": "磐梯熱海温泉　ホテル華の湯",
    "hotelKanaName": "ばんだいあたみおんせん　ほてる　はなのゆ",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D15988",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D15988%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D15988",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D15988",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/15988/15988.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/15988.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/15988/15988_kan.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/15988/15988map.gif",
    "reviewCount": 3338,
    "reviewAverage": 4.42,
    "userReview": "フロントの接客が良く、清潔感があり大満足フロントの接客もすごく良かったです!ホテルも、立派で清潔感があり、大変満足しました。又、泊まりに行きます!クチコミの詳細はこちらから　https:/…　 ",
    "hotelMinCharge": 9900,
    "address1": "福島県",
    "address2": "郡山市熱海町熱海5丁目 8-60",
    "telephoneNo": "024-984-2222",
    "access": "磐越自動車道磐梯熱海ＩＣより車で8分、磐越西線磐梯熱海駅より送迎可能です。（要連絡）",
    "parkingInformation": "有り　400台　無料　先着順",
    "nearestStation": "磐梯熱海",
    "hotelSpecial": "ファミリーに人気のビュッフェダイニングや、露天風呂付客室でゆったり贅沢な大人旅を！",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D15988",
    "label": "福島県田村市ふるさと納税・東洋一の鍾乳石の種類を誇る地底宮殿「あぶくま洞」三十種類の湯巡り磐梯熱海温泉ホテル華の湯",
    "themeTitle": "福島県田村市ふるさと納税：東洋一の鍾乳石の種類を誇る「あぶくま洞」と名湯「磐梯熱海温泉 ホテル華の湯」",
    "themeDesc": "あぶくま洞の滝根御殿を満喫した後は、車でアクセスの良い名湯・磐梯熱海温泉へ。三十種類もの多彩な湯舟で湯巡りができる「ホテル華の湯」で、肌をなめらかにする美肌の湯と、福島牛や旬の会席ビュッフェを心ゆくまで堪能します。",
    "revAvg": "4.4",
    "minCharge": "9,900"
  },
  {
    "hotelNo": 76401,
    "hotelName": "サザンビーチホテル&amp;リゾート沖縄",
    "hotelKanaName": "さざんびーちほてるあんどりぞーとおきなわ",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D76401",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D76401%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D76401",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D76401",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/76401/76401.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/76401.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/76401/76401_ky1.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/76401/76401map.gif",
    "reviewCount": 2075,
    "reviewAverage": 4.31,
    "userReview": "朝食とラウンジのビールに大満足!サザンテラスの朝食が良かったです。和食、洋食が選べてお品書きもあってプールサイドを見ながらゆっくり食事が出来ました。接客もとても丁寧で良かったです。…　 ",
    "hotelMinCharge": 4910,
    "address1": "沖縄県",
    "address2": "糸満市西崎町1-6-1",
    "telephoneNo": "098-992-7500",
    "access": "空港より車で約20分・最寄り「豊見城・名嘉地IC」まで約20分／東京バス「ウミカジライナー」で空港から約45分",
    "parkingInformation": "有り　510台　予約不要　宿泊者550円　レストラン利用2時間無料　宴会利用3時間無料　",
    "nearestStation": "那覇空港",
    "hotelSpecial": "空港より車で約20分★10月末まで屋外プールOPEN！9月30日までナイトプール21時まで営業！",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D76401",
    "label": "沖縄県南城市ふるさと納税・東洋で最も美しい鍾乳洞・30万年の時が創った100万本「玉泉洞」天然温泉ユインチホテル南城",
    "themeTitle": "沖縄県南城市・糸満市ふるさと納税：100万本の鍾乳石が創る「玉泉洞」とオーシャンビュー「サザンビーチホテル＆リゾート沖縄」",
    "themeDesc": "おきなわワールド内の巨大鍾乳洞・玉泉洞を探検。美々ビーチいとまんの目の前に建つリゾートホテル「サザンビーチホテル」に滞在し、オーシャンビューの客室やプール、沖縄県産食材をふんだんに使ったブッフェディナーを楽しめます。",
    "revAvg": "4.3",
    "minCharge": "4,910"
  },
  {
    "hotelNo": 9151,
    "hotelName": "新見　グランドホテルみよしや",
    "hotelKanaName": "にいみ　ぐらんどほてるみよしや",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D9151",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D9151%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D9151",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D9151",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/9151/9151.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/9151.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/9151/9151_room.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/9151/9151map.gif",
    "reviewCount": 431,
    "reviewAverage": 4.19,
    "userReview": "和室のお部屋が広くて居心地が良かった。朝食の和定食もちょうどいいボリュームで、また味も美味しかった。セルフのコーヒーの豆の種類が2つあって嬉しかった。クチコミの詳細はこちらから　https…　 ",
    "hotelMinCharge": 5500,
    "address1": "岡山県",
    "address2": "新見市高尾２４５６",
    "telephoneNo": "0867-72-1131",
    "access": "『JR新見駅』より徒歩1分、中国道『新見IC』より1km",
    "parkingInformation": "35台あり　無料　※自動車は２ｔ（６ｍ）までです。これ以上大きいお車は駐車できません。",
    "nearestStation": "新見",
    "hotelSpecial": "新見駅に１番近く、岡山県新見市の中心にありビジネスにも観光にも　洋室はシモンズベッドにデュベスタイル",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D9151",
    "label": "岡山県新見市ふるさと納税・高さ240mの石灰岩断崖と地底滝の巨大洞窟「井倉洞」千屋牛と新見グランドホテル",
    "themeTitle": "岡山県新見市ふるさと納税：高さ240mの絶壁に開く地底滝の洞窟「井倉洞」と「新見 グランドホテルみよしや」",
    "themeDesc": "高梁川上流の巨大絶壁に開口する井倉洞・絹掛の滝の観光拠点。新見市街に位置するグランドホテルみよしやで寛ぎ、日本最古の蔓牛の血統を引く最高級ブランド黒毛和牛「千屋牛」のすき焼きやステーキを贅沢に味わえます。",
    "revAvg": "4.2",
    "minCharge": "5,500"
  }
];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* パンくずリスト */}
      <nav className="bg-white border-b border-slate-200 py-3 px-4 text-xs text-slate-500">
        <div className="max-w-5xl mx-auto flex items-center space-x-2">
          <Link href="/" className="hover:text-emerald-600 transition">ホーム</Link>
          <span>&gt;</span>
          <span className="text-slate-700 font-medium">日本三大鍾乳石洞窟＆地底宮殿宿×ふるさと納税ガイド</span>
        </div>
      </nav>

      {/* ヒーローヘッダー */}
      <header className="relative bg-gradient-to-br from-emerald-950 via-slate-900 to-teal-950 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-block bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-semibold px-3 py-1 rounded-full mb-2">
            日本三大鍾乳石・地底アート特集
          </div>
          <h1 className="text-2xl md:text-4xl font-bold leading-tight tracking-tight">
            日本三大鍾乳石洞窟＆地底宮殿宿×ふるさと納税ガイド
          </h1>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-3xl mx-auto pt-2">
            石灰岩台地の地下で炭酸ガスを含んだ地下水が数十万年もの歳月をかけて溶かし、再結晶化させることで形成された「日本三大鍾乳石洞窟（三大鍾乳洞窟美）」――鍾乳石の種類と密度の豊富さで東洋一と称され「滝根御殿」や「月の世界」のイルミネーションが輝く福島の「あぶくま洞」、全長5000mにおよび30万年の歳月が創り出した100万本以上の鍾乳石が林立する国内最大級の沖縄の「玉泉洞（おきなわワールド）」、そして高さ240mのカルスト絶壁の裂け目に広がり落差50mの地底の滝が轟音を立てる岡山の「井倉洞」。年間を通して一定の気温に保たれた洞内は、夏は涼しく冬は暖かく、一歩踏み入れれば自然が創り出した現代アートのような美しさに圧倒されます。洞窟探検の後は、名湯露天風呂やリゾートホテルでゆったり寛ぎ、福島牛・沖縄黒豚・千屋牛を味わう特別な休日を楽天ふるさと納税でお楽しみください。
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
            天井から垂れ下がる無数の鍾乳石と、天へと伸びる石筍。一滴の雫が紡いだ地底宮殿へ
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>洞窟アドベンチャーコースに挑戦！非日常の神秘体験の後は極上温泉でリラックス</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                探検服をレンタルして狭い隙間を進む探検コースを体験し、疲れた体を天然温泉で温める爽快感。
              </p>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>福島牛＆川魚会席、あぐー豚＆沖縄海鮮ディナー、千屋牛ステーキ会席</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                大自然の力強さを感じた後は、各地域のブランド肉や郷土の滋味を贅沢に堪能。
              </p>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>楽天ふるさと納税宿泊クーポンで温泉旅館やビーチリゾートをお得に利用</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                家族旅行やカップルの記念日旅行でも、寄付金額に応じた即時割引クーポンで実質2,000円負担の快適ステイ。
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
                        {h.hotelSpecial || '日本三大美港の夜景、天空の山城の石垣美、手延べそうめんの伝統技、鍾乳石洞窟の地底宮殿を巡る極上の拠点。四季折々の美食と名湯でお寛ぎください。'}
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
            あわせて読みたい日本の名城・麺道・絶景特集
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            
            <Link href="/furusato-tax-three-great-limestone-caves-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三大鍾乳洞＆地底神秘美・名湯宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                龍泉洞・秋芳洞・龍河洞。
              </p>
            </Link>
            
            <Link href="/furusato-tax-three-great-subterranean-waterfalls-caves-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三大地底滝鍾乳洞＆地底アドベンチャー宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                井倉洞・あぶくま洞・日原鍾乳洞。
              </p>
            </Link>
            
            <Link href="/furusato-tax-three-great-columnar-joints-gorges-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三大柱状節理峡谷＆絶景名湯宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                清津峡・高千穂峡・層雲峡。
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
