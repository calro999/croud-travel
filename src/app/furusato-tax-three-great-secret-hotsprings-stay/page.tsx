import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '日本三大秘湯＆原生林の一軒宿・ケーブルカー露天風呂×ふるさと納税完全ガイド【2026年最新】谷地温泉・祖谷温泉・乳頭温泉郷',
  description: '秘境の静寂と湧き出る大地の恵み！青森八甲田「谷地温泉」開湯400年の霊泉足元湧出と日本三秘湯谷地温泉、徳島三好「祖谷温泉」断崖絶壁をケーブルカーで下る露天風呂と新祖谷温泉ホテルかずら橋、秋田仙北「乳頭温泉郷」白濁の濁り湯とブナ原生林に抱かれる田沢湖高原温泉ロッジアイリス。日本三大秘湯の神秘を楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
  keywords: '日本三大秘湯・大自然秘境特集, 楽天ふるさと納税, 温泉宿, ふるさと納税 旅行, 高級旅館, ホテル予約, 2026年旅行',
  openGraph: {
    title: '日本三大秘湯＆原生林の一軒宿・ケーブルカー露天風呂×ふるさと納税完全ガイド【2026年最新】谷地温泉・祖谷温泉・乳頭温泉郷',
    description: '秘境の静寂と湧き出る大地の恵み！青森八甲田「谷地温泉」開湯400年の霊泉足元湧出と日本三秘湯谷地温泉、徳島三好「祖谷温泉」断崖絶壁をケーブルカーで下る露天風呂と新祖谷温泉ホテルかずら橋、秋田仙北「乳頭温泉郷」白濁の濁り湯とブナ原生林に抱かれる田沢湖高原温泉ロッジアイリス。日本三大秘湯の神秘を楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    type: 'article',
    url: 'https://croud-travel.pages.dev/furusato-tax-three-great-secret-hotsprings-stay',
    siteName: 'トラベルポータル',
  },
};

export default function Page() {
  const officialAffUrl = 'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F';

  const hotels = [
  {
    "hotelNo": 149172,
    "hotelName": "日本三秘湯　谷地温泉",
    "hotelKanaName": "にほんさんひとう　やちおんせん",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D149172",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D149172%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D149172",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D149172",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/149172/149172.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/149172.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/149172/149172_kan1.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/149172/149172map.gif",
    "reviewCount": 331,
    "reviewAverage": 4.54,
    "userReview": "クチコミの詳細はこちらから　https://review.travel.rakuten.co.jp/hotel/voice/149172?reviewId=33123479209551　",
    "hotelMinCharge": 16560,
    "address1": "青森県",
    "address2": "十和田市法量谷地1",
    "telephoneNo": "0176-74-1181",
    "access": "JR青森駅よりJRバス約120分／青森空港から車で60分／無料バス有※要予約（夏季：青森駅-新青森駅／冬季：八戸駅より）",
    "parkingInformation": "有り　６０台　無料　予約不要【マップコード：704 471 581*58】",
    "nearestStation": "青森",
    "hotelSpecial": "八甲田山中にある開湯４００年の歴史を誇る温泉で、日本三秘湯としても知られる。足下自噴の源泉かけ流し泉",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D149172",
    "featureKey": "secret_yachi",
    "featureLabel": "青森県十和田市ふるさと納税・八甲田の原生林に佇む開湯400年の霊泉自噴「谷地温泉」秘湯の一軒宿ステイ",
    "themeTitle": "青森県十和田市ふるさと納税：八甲田の原生林に佇む足元湧出の霊泉「日本三秘湯 谷地温泉」",
    "themeDesc": "開湯400年、八甲田山麓の標高約780mにひっそりと佇む純木造の秘湯宿。浴槽の底の板の間からポコポコと自噴するぬる湯の「下の湯」と白濁した「上の湯」の交互浴が格別で、素朴なイワナの塩焼きや山菜料理が疲れた体を優しく温めます。",
    "revAvg": "4.5",
    "minCharge": "16,560"
  },
  {
    "hotelNo": 20228,
    "hotelName": "新祖谷温泉　ホテルかずら橋",
    "hotelKanaName": "しんいやおんせん　ほてるかずらばし",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D20228",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D20228%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D20228",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D20228",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/20228/20228.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/20228.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/20228/20228_h.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/20228/20228map.gif",
    "reviewCount": 986,
    "reviewAverage": 4.71,
    "userReview": "心配りが行き届き、かずら橋ツアーも最高スタッフの方、お料理、温泉等、みんな心配りが行き届いており、とても良かったです。両親もすごく満足してくれました。また、夜のかずら橋ツアーは、ホテルのボンネット…　 ",
    "hotelMinCharge": 19250,
    "address1": "徳島県",
    "address2": "三好市西祖谷山村善徳３３－１",
    "telephoneNo": "0883-87-2171",
    "access": "ＪＲのお客様 大歩危駅～路線バス20分（タクシー15分）・お車のお客様　徳島自動車道井川池田ＩＣより大歩危経由で５０分　",
    "parkingInformation": "有り　３０台　無料　",
    "nearestStation": "大歩危",
    "hotelSpecial": "ケーブルカーで登る天空露天風呂と囲炉裏の宿。渓谷の絶景と郷土料理、温かなおもてなしでお迎えいたします",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D20228",
    "featureKey": "secret_iya",
    "featureLabel": "徳島県三好市ふるさと納税・日本三大秘境の断崖絶壁に湧くケーブルカーで行く露天風呂「祖谷温泉」かずら橋ステイ",
    "themeTitle": "徳島県三好市ふるさと納税：専用ケーブルカーで登る天空露天風呂と囲炉裏料理「新祖谷温泉 ホテルかずら橋」",
    "themeDesc": "日本三大秘境・祖谷渓の山腹に位置し、名物のかずら橋まで車ですぐの絶景温泉宿。専用のケーブルカーで登る「天空露天風呂」からは雄大な四国山地を一望。夕食は囲炉裏を囲んで鮎の塩焼きや名物でこまわし、阿波尾鶏を堪能できます。",
    "revAvg": "4.7",
    "minCharge": "19,250"
  },
  {
    "hotelNo": 130001,
    "hotelName": "田沢湖高原温泉　ロッジアイリス",
    "hotelKanaName": "たざわここうげんおんせん　ろっじあいりす",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D130001",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D130001%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D130001",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D130001",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/130001/130001.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/130001.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/130001/130001_wa.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/130001/130001map.gif",
    "reviewCount": 67,
    "reviewAverage": 4.4,
    "userReview": "田沢湖温泉のロッジ、食事も温泉も大満足田沢湖温泉の一角のロッジ。入り口の道はやや細くて、少し心配になった。玄関の横に車を停め、中に入ったが、中は立派で、綺麗に整備されていた。19:15に到着で、す…　 ",
    "hotelMinCharge": 7500,
    "address1": "秋田県",
    "address2": "仙北市田沢湖生保内駒ヶ岳2-139",
    "telephoneNo": "0187-58-1101",
    "access": "田沢湖駅よりお車にて３０分",
    "parkingInformation": "有り　１５台　無料　予約不要",
    "nearestStation": "田沢湖",
    "hotelSpecial": "四季豊かなこころを満たす時間がここにあります。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D130001",
    "featureKey": "secret_nyuto",
    "featureLabel": "秋田県仙北市ふるさと納税・白濁した秘湯とブナ原生林に抱かれた日本の原風景「乳頭温泉郷」湯めぐりステイ",
    "themeTitle": "秋田県仙北市ふるさと納税：乳頭温泉郷の玄関口・田沢湖と高原の風を感じる「田沢湖高原温泉 ロッジアイリス」",
    "themeDesc": "乳頭温泉郷へのアクセス抜群の田沢湖高原に佇み、効能豊かな硫黄泉の天然温泉が楽しめるアットホームな高原の宿。乳白色の湯でじっくり体を温めた後は、秋田名物きりたんぽ鍋や八幡平ポークの陶板焼きなど手作りの郷土の味を味わえます。",
    "revAvg": "4.4",
    "minCharge": "7,500"
  }
];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* パンくずリスト */}
      <nav className="bg-white border-b border-slate-200 py-3 px-4 text-xs text-slate-500">
        <div className="max-w-5xl mx-auto flex items-center space-x-2">
          <Link href="/" className="hover:text-emerald-600 transition">ホーム</Link>
          <span>&gt;</span>
          <span className="text-slate-700 font-medium">日本三大秘湯＆秘境の大自然一軒宿×ふるさと納税ガイド</span>
        </div>
      </nav>

      {/* ヒーローヘッダー */}
      <header className="relative bg-gradient-to-br from-emerald-950 via-slate-900 to-teal-950 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-block bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-semibold px-3 py-1 rounded-full mb-2">
            日本三大秘湯・大自然秘境特集
          </div>
          <h1 className="text-2xl md:text-4xl font-bold leading-tight tracking-tight">
            日本三大秘湯＆秘境の大自然一軒宿×ふるさと納税ガイド
          </h1>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-3xl mx-auto pt-2">
            俗世を離れ、手つかずの自然と滾々と湧き出る原生の湯に身を委ねる「日本三大秘湯」――十和田八幡平国立公園の八甲田山麓に佇む青森の「谷地温泉」、四国山地の急峻なV字渓谷にへばりつくように湯煙を上げる徳島の「祖谷温泉」、そして東北・秋田の乳頭山麓のブナ林に点在する名湯「乳頭温泉郷」。谷地温泉は浴槽の底から自噴する「足元湧出泉」として知られ、400年以上湯治客の体を癒やし続けてきた霊泉。祖谷温泉は専用ケーブルカーで渓谷底へと下りる唯一無二の露天風呂と祖谷のかずら橋で知られる秘境。乳頭温泉郷は七つの異なる源泉が湧き、乳白色の湯に包まれて日本の原風景を味わえます。日常の喧騒を忘れ、真の安らぎを得る秘湯巡りを楽天ふるさと納税でお楽しみください。
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
            携帯の電波も届かない静けさ、川のせせらぎと鳥の声。地球の鼓動を直に感じる秘湯旅
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>足元湧出の自噴泉やケーブルカーで行く谷底露天風呂！圧倒的な非日常体験</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                加工されていない源泉そのままのエネルギーと、目の前に広がる大自然の渓谷美を全身で体感。
              </p>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>八甲田の岩魚・山菜料理、祖谷のあゆ塩焼き＆そば米雑炊、秋田きりたんぽ鍋</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                澄んだ水と豊かな森が育んだ滋味深い郷土の味覚を、囲炉裏端や静かな個室でじっくり堪能。
              </p>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>楽天ふるさと納税宿泊クーポンで秘境の憧れ宿をお得に予約</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                予約が取りにくい人気の秘湯宿でも、寄付金額に応じた最大30%オフの即時割引クーポンで賢くお得ステイ。
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
                        {h.hotelSpecial || '日本三大美肌の湯のとろとろ泉質、大自然の原生林に抱かれた秘湯の一軒宿、エメラルドグリーンに輝く渓谷美、轟音とともに飛沫をあげる日本三大名瀑を巡る極上の拠点。四季折々の美食と名湯でお寛ぎください。'}
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
            あわせて読みたい日本の名湯・秘境・絶景特集
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            
            <Link href="/furusato-tax-three-great-medicinal-springs-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三大薬湯＆湯治デトックス宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                松之山温泉・有馬温泉・草津温泉。
              </p>
            </Link>
            
            <Link href="/furusato-tax-three-major-hotsprings-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三大名湯＆極上温泉宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                草津・有馬・下呂の三大名湯。
              </p>
            </Link>
            
            <Link href="/furusato-tax-three-great-bihada-onsen-stay" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                日本三大美肌の湯＆とろとろ美肌温泉宿×ふるさと納税完全ガイド
              </div>
              <p className="text-xs text-slate-500 mt-2">
                嬉野・斐乃上・喜連川の極上美肌湯。
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
