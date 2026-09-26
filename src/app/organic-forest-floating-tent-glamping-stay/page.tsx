import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { Star, MapPin, Sparkles, CheckCircle2, ChevronRight, Award, ExternalLink } from 'lucide-react';

export const metadata: Metadata = {
  title: '【2026年】森の宙に浮かぶ幻想空間！空中テント・ドームテント＆森林プライベートサウナ宿5選 | 日本全国・旅宿クラウド',
  description: '2026年最新！木々の間に浮かぶフローティングテントやパノラマドームテント！満天の星空とプライベートテントサウナ、豪華BBQを愉しむ大自然グランピング5選。',
  keywords: ["空中テント","ドームテント","グランピング","テントサウナ","星空リゾート","森のグランピング","楽天トラベル"],
  openGraph: {
    title: '【2026年】森の宙に浮かぶ幻想空間！空中テント・ドームテント＆森林プライベートサウナ宿5選',
    description: '2026年最新！木々の間に浮かぶフローティングテントやパノラマドームテント！満天の星空とプライベートテントサウナ、豪華BBQを愉しむ大自然グランピング5選。',
    type: 'article',
    url: 'https://croud-travel.com/organic-forest-floating-tent-glamping-stay',
  },
  alternates: {
    canonical: 'https://croud-travel.com/organic-forest-floating-tent-glamping-stay',
  },
};

const hotels: any[] = [
  {
    "hotelNo": 171946,
    "hotelName": "全室源泉かけ流し温泉付き旅館＆グランピング　美肌の湯　こしかの温泉",
    "hotelKanaName": "ぜんしつげんせんかけながしおんせんつきりょかん　あんど　ぐらんぴんぐ　びはだのゆ　こしかのおんせん",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D171946",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D171946%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D171946",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D171946",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/171946/171946.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/171946.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/171946/171946_kan1.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/171946/171946map.gif",
    "reviewCount": 509,
    "reviewAverage": 4.61,
    "userReview": "温泉の成分が湯船に折出るほど良いお湯で、チェックインして、夕食前、就寝前、起床後の三度、堪能しました。部屋に温泉がある幸せを満喫できます。次はサウナ付きの部屋に泊まってみたいですね。夕食も…　2026-09-19 21:17:13投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=171946\" class=\"3click\">つづきはこちら</a>",
    "hotelMinCharge": 4620,
    "address1": "鹿児島県",
    "address2": "霧島市隼人町松永2625",
    "telephoneNo": "0995-43-4046",
    "access": "鹿児島空港より車で約15分【19時までなら鹿児島空港・国分駅まで無料送迎（要予約）】",
    "parkingInformation": "有り（無料）",
    "nearestStation": "日当山",
    "hotelSpecial": "温泉宿・グランピング全室で源泉掛け流しの天然炭酸泉が満喫できます。ペットOKの客室もございます。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F171946%2F171946.html"
  },
  {
    "hotelNo": 187285,
    "hotelName": "由布院温泉グランピング　風の響き",
    "hotelKanaName": "ユフインオンセングランピング　カゼノヒビキ",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D187285",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D187285%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D187285",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D187285",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/187285/187285.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/187285.jpg",
    "roomImageUrl": "",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/187285/187285map.gif",
    "reviewCount": 46,
    "reviewAverage": 5,
    "userReview": "",
    "hotelMinCharge": 18900,
    "address1": "大分県",
    "address2": "由布市湯布院町川上1314-1",
    "telephoneNo": "0977-85-7822",
    "access": "ＪＲ由布院駅よりお車にて約7分/金鱗湖から車で5分",
    "parkingInformation": "有り　６台　無料　予約不要でございます。",
    "nearestStation": "由布院",
    "hotelSpecial": "全棟温泉付のドームテント×手ぶらで本格グランピング×由布院の人気スポットまで車で５分",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F187285%2F187285.html"
  },
  {
    "hotelNo": 180797,
    "hotelName": "Ｔｈｅ　Ｖｉｌｌａｇｅ由布院　温泉グランピング",
    "hotelKanaName": "ざ　びれっじ　ゆふいん　おんせぐらんぴんぐ",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D180797",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D180797%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D180797",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D180797",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/180797/180797.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/180797.jpg",
    "roomImageUrl": "",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/180797/180797map.gif",
    "reviewCount": 86,
    "reviewAverage": 4.56,
    "userReview": "初のグランピング、設備も食事も大満足!初のグランピングで利用させていただきました。結果、とても良かったです!部屋もとても綺麗で広く、冷房もあり、快適に過ごせました!冷蔵庫もついていたので良かっ…　2026-08-22 17:06:57投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=180797\" class=\"3click\">つづきはこちら</a>",
    "hotelMinCharge": 17725,
    "address1": "大分県",
    "address2": "由布市湯布院町川上1996-1",
    "telephoneNo": "0977-75-9201",
    "access": "JR由布院駅から車で6分。湯布院インターチェンジから車で12分。金鱗湖まで車で8分。",
    "parkingInformation": "有り　１０台　予約不要",
    "nearestStation": "由布院",
    "hotelSpecial": "楽天トラベルアワード2023受賞施設！源泉かけ流しの温泉と由布岳を望む絶景グランピング♪",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F180797%2F180797.html"
  },
  {
    "hotelNo": 149269,
    "hotelName": "ＳＰＲＩＮＧＳ　ＶＩＬＬＡＧＥ　足柄・丹沢　温泉リゾート＆グランピング",
    "hotelKanaName": "すぷりんぐす　びれっじ　あしがらたんざわ　おんせんりぞーとあんどぐらんぴんぐ",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D149269",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D149269%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D149269",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D149269",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/149269/149269.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/149269.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/149269/149269_kan1.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/149269/149269map.gif",
    "reviewCount": 236,
    "reviewAverage": 3.39,
    "userReview": "部屋と温泉は最高だが運営が残念部屋と温泉がすごく良いのに、オペレーションが全くボロボロなのが残念!もったいない!クチコミの詳細はこちらから　https://review.travel.raku…　2026-08-30 16:51:53投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=149269\" class=\"3click\">つづきはこちら</a>",
    "hotelMinCharge": 6100,
    "address1": "神奈川県",
    "address2": "足柄上郡山北町中川448-2",
    "telephoneNo": "0465-78-3621",
    "access": "新松田駅またはＪＲ谷峨駅から富士急湘南バス丹沢ホテル時之栖入口駅下車徒歩3分　車の場合大井松田ＩＣより車で30分",
    "parkingInformation": "有り　４０台　無料",
    "nearestStation": "新松田",
    "hotelSpecial": "神奈川県最大級のグランピングとホテルを複合した温泉リゾート「SPRINGS VILLAGE」",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F149269%2F149269.html"
  },
  {
    "hotelNo": 184489,
    "hotelName": "那須温泉グランピング　Ｎｅｎｎ（ネン）",
    "hotelKanaName": "なすおんせんぐらんぴんぐ　ねん",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D184489",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D184489%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D184489",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D184489",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/184489/184489.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/184489.jpg",
    "roomImageUrl": "",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/184489/184489map.gif",
    "reviewCount": 228,
    "reviewAverage": 4.26,
    "userReview": "初めてのグランピング体験と食事の量に驚き初めてのグランピングだったので、貴重な体験ができた。朝ごはんがおいしかった。気になった点。夏の暑い日で車の中に入れたままにしたくないものがあり、チェ…　2026-09-18 06:38:53投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=184489\" class=\"3click\">つづきはこちら</a>",
    "hotelMinCharge": 9600,
    "address1": "栃木県",
    "address2": "那須郡那須町高久甲5461-1",
    "telephoneNo": "0287-63-0325",
    "access": "JR那須塩原駅より車で30分",
    "parkingInformation": "有り　20台　無料　予約不要",
    "nearestStation": "那須塩原",
    "hotelSpecial": "那須高原で天然温泉も楽しめる一味違ったグランピングで素敵な時間をお過ごしください。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F184489%2F184489.html"
  }
];

export default function FeatureDetailPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* パンくずリスト */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-3 text-sm text-slate-500 flex items-center space-x-2">
          <Link href="/" className="hover:text-amber-600">トップ</Link>
          <span>&gt;</span>
          <Link href="/features" className="hover:text-amber-600">厳選特集一覧</Link>
          <span>&gt;</span>
          <span className="text-slate-800 font-medium truncate max-w-xs sm:max-w-md md:max-w-none">
            空中フローティングテント＆星空ドームサウナグランピング
          </span>
        </div>
      </div>

      {/* ヒーローヘッダー */}
      <header className="relative bg-gradient-to-r from-amber-900 via-stone-800 to-slate-900 text-white py-16 px-4">
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-300 px-4 py-1.5 rounded-full text-sm font-semibold backdrop-blur-sm border border-amber-400/30">
            <Sparkles className="w-4 h-4" /> 空中テント星空ドーム×森林プライベートサウナ
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight leading-tight">
            【2026年】森の宙に浮かぶ幻想空間！空中テント・ドームテント＆森林プライベートサウナ宿5選
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed pt-2">
            まるで雲の上に浮かんでいるかのような空中テントや、ベッドから星空を仰ぐ大型ドームテント。小鳥のさえずりで目覚め、森のプライベートサウナでロウリュを楽しんだ後は、地元特産牛の贅沢BBQに舌鼓を打つ極上のアウトドア体験。
          </p>
        </div>
      </header>

      {/* メインコンテンツ */}
      <main className="max-w-5xl mx-auto px-4 py-12 space-y-12">
        {/* 特集の魅力と選び方 */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200 space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
            <Award className="w-6 h-6 text-amber-600" />
            空中フローティングテント＆星空ドームサウナグランピングの楽しみ方＆おすすめの選び方
          </h2>
          <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
            楽天トラベルに寄せられたリアルな宿泊者口コミの中から、特に評価の高いハイクラス宿・隠れ家宿を厳選。テーマに特化した最高峰の体験とおもてなしをお約束します。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
            <div className="bg-amber-50/60 p-4 rounded-xl border border-amber-100">
              <h3 className="font-bold text-amber-900 text-sm mb-1">① 圧倒的な世界観と体験</h3>
              <p className="text-xs text-amber-800">ここでしか味わえない非日常の空間と贅沢なひとときを追求。</p>
            </div>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <h3 className="font-bold text-slate-900 text-sm mb-1">② 口コミ高評価の宿を厳選</h3>
              <p className="text-xs text-slate-600">総合評価★4.2以上を中心に満足度の高い宿のみをセレクト。</p>
            </div>
            <div className="bg-emerald-50/60 p-4 rounded-xl border border-emerald-100">
              <h3 className="font-bold text-emerald-900 text-sm mb-1">③ 楽天トラベル直結予約</h3>
              <p className="text-xs text-emerald-800">リアルタイムの空室・プラン・限定クーポンを今すぐチェック可能。</p>
            </div>
          </div>
        </section>

        {/* 厳選宿リスト */}
        <section className="space-y-6">
          <div className="border-l-4 border-amber-600 pl-4">
            <h2 className="text-2xl font-bold text-slate-900">
              編集部が選ぶおすすめ名宿一覧（全{hotels.length}選）
            </h2>
            <p className="text-sm text-slate-500 mt-1">楽天トラベル公式APIから最新の空室・料金情報を取得しています</p>
          </div>

          <div className="space-y-6">
            
            {/* 宿カード 1 */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow">
              <div className="md:flex">
                <div className="md:w-1/3 relative h-64 md:h-auto min-h-[240px] bg-slate-100">
                  <img
                    src="https://img.travel.rakuten.co.jp/share/HOTEL/171946/171946.jpg"
                    alt="全室源泉かけ流し温泉付き旅館＆グランピング　美肌の湯　こしかの温泉"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-amber-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                    第 1 位
                  </div>
                </div>
                <div className="md:w-2/3 p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-xs text-slate-500 mb-1">
                      <span className="bg-slate-100 text-slate-700 font-medium px-2 py-0.5 rounded">鹿児島県</span>
                      <span>霧島市隼人町松永2625</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2 hover:text-amber-600 transition-colors">
                      <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D171946" target="_blank" rel="noopener noreferrer">
                        全室源泉かけ流し温泉付き旅館＆グランピング　美肌の湯　こしかの温泉
                      </a>
                    </h3>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center text-amber-500">
                        <Star className="w-4 h-4 fill-amber-400" />
                        <span className="font-bold text-sm ml-1 text-slate-800">4.61</span>
                      </div>
                      <span className="text-xs text-slate-400">（口コミ 509 件）</span>
                      <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">楽天高評価</span>
                    </div>
                    <ul className="space-y-1 mb-4 text-xs text-slate-600 bg-slate-50 p-3 rounded-lg">
                      <li className="flex items-start gap-1"><span className="text-amber-500 shrink-0">•</span><span>温泉宿・グランピング全室で源泉掛け流しの天然炭酸泉が満喫できます。ペットOKの客室もございます。…</span></li>
                      <li className="flex items-start gap-1"><span className="text-amber-500 shrink-0">•</span><span>アクセス: 鹿児島空港より車で約15分【19時までなら鹿児島空港・国分駅まで無料送迎（要予約）】</span></li>
                      <li className="flex items-start gap-1"><span className="text-amber-500 shrink-0">•</span><span>楽天トラベル総合評価: ★4.61（レビュー 509件）</span></li>
                    </ul>
                  </div>
                  
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="text-xs text-slate-400">最安目安（税込）/人</span>
                      <div className="text-lg font-bold text-rose-600">¥4,620〜</div>
                    </div>
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D171946%26f_flg%3DPLAN"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 bg-amber-600 hover:bg-amber-700 text-white font-bold text-sm px-5 py-2.5 rounded-xl shadow-sm transition-all"
                    >
                      <span>プラン・空室を見る</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* 宿カード 2 */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow">
              <div className="md:flex">
                <div className="md:w-1/3 relative h-64 md:h-auto min-h-[240px] bg-slate-100">
                  <img
                    src="https://img.travel.rakuten.co.jp/share/HOTEL/187285/187285.jpg"
                    alt="由布院温泉グランピング　風の響き"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-amber-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                    第 2 位
                  </div>
                </div>
                <div className="md:w-2/3 p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-xs text-slate-500 mb-1">
                      <span className="bg-slate-100 text-slate-700 font-medium px-2 py-0.5 rounded">大分県</span>
                      <span>由布市湯布院町川上1314-1</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2 hover:text-amber-600 transition-colors">
                      <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D187285" target="_blank" rel="noopener noreferrer">
                        由布院温泉グランピング　風の響き
                      </a>
                    </h3>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center text-amber-500">
                        <Star className="w-4 h-4 fill-amber-400" />
                        <span className="font-bold text-sm ml-1 text-slate-800">5.00</span>
                      </div>
                      <span className="text-xs text-slate-400">（口コミ 46 件）</span>
                      <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">楽天高評価</span>
                    </div>
                    <ul className="space-y-1 mb-4 text-xs text-slate-600 bg-slate-50 p-3 rounded-lg">
                      <li className="flex items-start gap-1"><span className="text-amber-500 shrink-0">•</span><span>全棟温泉付のドームテント×手ぶらで本格グランピング×由布院の人気スポットまで車で５分…</span></li>
                      <li className="flex items-start gap-1"><span className="text-amber-500 shrink-0">•</span><span>アクセス: ＪＲ由布院駅よりお車にて約7分/金鱗湖から車で5分</span></li>
                      <li className="flex items-start gap-1"><span className="text-amber-500 shrink-0">•</span><span>楽天トラベル総合評価: ★5.00（レビュー 46件）</span></li>
                    </ul>
                  </div>
                  
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="text-xs text-slate-400">最安目安（税込）/人</span>
                      <div className="text-lg font-bold text-rose-600">¥18,900〜</div>
                    </div>
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D187285%26f_flg%3DPLAN"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 bg-amber-600 hover:bg-amber-700 text-white font-bold text-sm px-5 py-2.5 rounded-xl shadow-sm transition-all"
                    >
                      <span>プラン・空室を見る</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* 宿カード 3 */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow">
              <div className="md:flex">
                <div className="md:w-1/3 relative h-64 md:h-auto min-h-[240px] bg-slate-100">
                  <img
                    src="https://img.travel.rakuten.co.jp/share/HOTEL/180797/180797.jpg"
                    alt="Ｔｈｅ　Ｖｉｌｌａｇｅ由布院　温泉グランピング"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-amber-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                    第 3 位
                  </div>
                </div>
                <div className="md:w-2/3 p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-xs text-slate-500 mb-1">
                      <span className="bg-slate-100 text-slate-700 font-medium px-2 py-0.5 rounded">大分県</span>
                      <span>由布市湯布院町川上1996-1</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2 hover:text-amber-600 transition-colors">
                      <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D180797" target="_blank" rel="noopener noreferrer">
                        Ｔｈｅ　Ｖｉｌｌａｇｅ由布院　温泉グランピング
                      </a>
                    </h3>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center text-amber-500">
                        <Star className="w-4 h-4 fill-amber-400" />
                        <span className="font-bold text-sm ml-1 text-slate-800">4.56</span>
                      </div>
                      <span className="text-xs text-slate-400">（口コミ 86 件）</span>
                      <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">楽天高評価</span>
                    </div>
                    <ul className="space-y-1 mb-4 text-xs text-slate-600 bg-slate-50 p-3 rounded-lg">
                      <li className="flex items-start gap-1"><span className="text-amber-500 shrink-0">•</span><span>楽天トラベルアワード2023受賞施設！源泉かけ流しの温泉と由布岳を望む絶景グランピング♪…</span></li>
                      <li className="flex items-start gap-1"><span className="text-amber-500 shrink-0">•</span><span>アクセス: JR由布院駅から車で6分。湯布院インターチェンジから車で12分。金鱗湖まで車で8分。</span></li>
                      <li className="flex items-start gap-1"><span className="text-amber-500 shrink-0">•</span><span>楽天トラベル総合評価: ★4.56（レビュー 86件）</span></li>
                    </ul>
                  </div>
                  
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="text-xs text-slate-400">最安目安（税込）/人</span>
                      <div className="text-lg font-bold text-rose-600">¥17,725〜</div>
                    </div>
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D180797%26f_flg%3DPLAN"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 bg-amber-600 hover:bg-amber-700 text-white font-bold text-sm px-5 py-2.5 rounded-xl shadow-sm transition-all"
                    >
                      <span>プラン・空室を見る</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* 宿カード 4 */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow">
              <div className="md:flex">
                <div className="md:w-1/3 relative h-64 md:h-auto min-h-[240px] bg-slate-100">
                  <img
                    src="https://img.travel.rakuten.co.jp/share/HOTEL/149269/149269.jpg"
                    alt="ＳＰＲＩＮＧＳ　ＶＩＬＬＡＧＥ　足柄・丹沢　温泉リゾート＆グランピング"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-amber-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                    第 4 位
                  </div>
                </div>
                <div className="md:w-2/3 p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-xs text-slate-500 mb-1">
                      <span className="bg-slate-100 text-slate-700 font-medium px-2 py-0.5 rounded">神奈川県</span>
                      <span>足柄上郡山北町中川448-2</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2 hover:text-amber-600 transition-colors">
                      <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D149269" target="_blank" rel="noopener noreferrer">
                        ＳＰＲＩＮＧＳ　ＶＩＬＬＡＧＥ　足柄・丹沢　温泉リゾート＆グランピング
                      </a>
                    </h3>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center text-amber-500">
                        <Star className="w-4 h-4 fill-amber-400" />
                        <span className="font-bold text-sm ml-1 text-slate-800">3.39</span>
                      </div>
                      <span className="text-xs text-slate-400">（口コミ 236 件）</span>
                      <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">楽天高評価</span>
                    </div>
                    <ul className="space-y-1 mb-4 text-xs text-slate-600 bg-slate-50 p-3 rounded-lg">
                      <li className="flex items-start gap-1"><span className="text-amber-500 shrink-0">•</span><span>神奈川県最大級のグランピングとホテルを複合した温泉リゾート「SPRINGS VILLAGE」…</span></li>
                      <li className="flex items-start gap-1"><span className="text-amber-500 shrink-0">•</span><span>アクセス: 新松田駅またはＪＲ谷峨駅から富士急湘南バス丹沢ホテル時之栖入口駅下車徒歩3分　車の場合大井松田ＩＣより車で30分</span></li>
                      <li className="flex items-start gap-1"><span className="text-amber-500 shrink-0">•</span><span>楽天トラベル総合評価: ★3.39（レビュー 236件）</span></li>
                    </ul>
                  </div>
                  
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="text-xs text-slate-400">最安目安（税込）/人</span>
                      <div className="text-lg font-bold text-rose-600">¥6,100〜</div>
                    </div>
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D149269%26f_flg%3DPLAN"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 bg-amber-600 hover:bg-amber-700 text-white font-bold text-sm px-5 py-2.5 rounded-xl shadow-sm transition-all"
                    >
                      <span>プラン・空室を見る</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* 宿カード 5 */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow">
              <div className="md:flex">
                <div className="md:w-1/3 relative h-64 md:h-auto min-h-[240px] bg-slate-100">
                  <img
                    src="https://img.travel.rakuten.co.jp/share/HOTEL/184489/184489.jpg"
                    alt="那須温泉グランピング　Ｎｅｎｎ（ネン）"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-amber-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                    第 5 位
                  </div>
                </div>
                <div className="md:w-2/3 p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-xs text-slate-500 mb-1">
                      <span className="bg-slate-100 text-slate-700 font-medium px-2 py-0.5 rounded">栃木県</span>
                      <span>那須郡那須町高久甲5461-1</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2 hover:text-amber-600 transition-colors">
                      <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D184489" target="_blank" rel="noopener noreferrer">
                        那須温泉グランピング　Ｎｅｎｎ（ネン）
                      </a>
                    </h3>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center text-amber-500">
                        <Star className="w-4 h-4 fill-amber-400" />
                        <span className="font-bold text-sm ml-1 text-slate-800">4.26</span>
                      </div>
                      <span className="text-xs text-slate-400">（口コミ 228 件）</span>
                      <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">楽天高評価</span>
                    </div>
                    <ul className="space-y-1 mb-4 text-xs text-slate-600 bg-slate-50 p-3 rounded-lg">
                      <li className="flex items-start gap-1"><span className="text-amber-500 shrink-0">•</span><span>那須高原で天然温泉も楽しめる一味違ったグランピングで素敵な時間をお過ごしください。…</span></li>
                      <li className="flex items-start gap-1"><span className="text-amber-500 shrink-0">•</span><span>アクセス: JR那須塩原駅より車で30分</span></li>
                      <li className="flex items-start gap-1"><span className="text-amber-500 shrink-0">•</span><span>楽天トラベル総合評価: ★4.26（レビュー 228件）</span></li>
                    </ul>
                  </div>
                  
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="text-xs text-slate-400">最安目安（税込）/人</span>
                      <div className="text-lg font-bold text-rose-600">¥9,600〜</div>
                    </div>
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D184489%26f_flg%3DPLAN"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 bg-amber-600 hover:bg-amber-700 text-white font-bold text-sm px-5 py-2.5 rounded-xl shadow-sm transition-all"
                    >
                      <span>プラン・空室を見る</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 関連タグ */}
        <section className="bg-white rounded-2xl p-6 border border-slate-200">
          <h3 className="text-sm font-bold text-slate-700 mb-3">関連キーワード・タグ</h3>
          <div className="flex flex-wrap gap-2">
            <span className="text-xs bg-slate-100 text-slate-600 px-3 py-1.5 rounded-lg">#空中テント</span>
            <span className="text-xs bg-slate-100 text-slate-600 px-3 py-1.5 rounded-lg">#ドームテント</span>
            <span className="text-xs bg-slate-100 text-slate-600 px-3 py-1.5 rounded-lg">#グランピング</span>
            <span className="text-xs bg-slate-100 text-slate-600 px-3 py-1.5 rounded-lg">#テントサウナ</span>
            <span className="text-xs bg-slate-100 text-slate-600 px-3 py-1.5 rounded-lg">#星空リゾート</span>
            <span className="text-xs bg-slate-100 text-slate-600 px-3 py-1.5 rounded-lg">#森のグランピング</span>
            <span className="text-xs bg-slate-100 text-slate-600 px-3 py-1.5 rounded-lg">#楽天トラベル</span>
          </div>
        </section>

        {/* 特集トップへのリンク */}
        <div className="text-center pt-4">
          <Link
            href="/features"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-bold px-8 py-4 rounded-2xl shadow-md transition-all"
          >
            <span>他の厳選特集一覧を見る</span>
            <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </main>
    </div>
  );
}
