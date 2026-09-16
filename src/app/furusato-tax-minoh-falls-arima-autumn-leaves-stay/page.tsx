import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '日本の滝百選・箕面大滝の紅葉美＆日本最古の名湯・有馬温泉金泉銀泉名宿×ふるさと納税完全ガイド【2026年最新秋旅】関西 | 旅宿クラウド',
  description: '11月中旬〜12月上旬に見頃を迎える関西屈指の紅葉名所「箕面大滝（大阪）」と、日本三古湯・三名泉の最高峰「有馬温泉（神戸）」。鉄分と塩分濃厚な赤褐色の「金泉」と無色透明の「銀泉」を誇る「欽山」「有馬御苑」「兵衛向陽閣」。最高級神戸牛会席を、楽天ふるさと納税トラベルクーポンで実質2,000円で楽しむ完全ガイド。',
  keywords: [
    'ふるさと納税 温泉',
    'ふるさと納税 宿泊券',
    'ふるさと納税 トラベルクーポン',
    '箕面大滝紅葉＆有馬温泉・金泉銀泉極上名門旅館特集',
    '10月 旅行 おすすめ',
    '11月 旅行 おすすめ',
    '秋 旅行 温泉',
    '紅葉 温泉旅館',
    '楽天トラベル ふるさと納税',
    '実質2000円 温泉'
  ],
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-minoh-falls-arima-autumn-leaves-stay/'
  },
  openGraph: {
    title: '日本の滝百選・箕面大滝の紅葉美＆日本最古の名湯・有馬温泉金泉銀泉名宿×ふるさと納税完全ガイド【2026年最新秋旅】関西',
    description: '11月中旬〜12月上旬に見頃を迎える関西屈指の紅葉名所「箕面大滝（大阪）」と、日本三古湯・三名泉の最高峰「有馬温泉（神戸）」。鉄分と塩分濃厚な赤褐色の「金泉」と無色透明の「銀泉」を誇る「欽山」「有馬御苑」「兵衛向陽閣」。最高級神戸牛会席を、楽天ふるさと納税トラベルクーポンで実質2,000円で楽しむ完全ガイド。',
    url: 'https://croud-travel.pages.dev/furusato-tax-minoh-falls-arima-autumn-leaves-stay',
    siteName: '旅宿クラウド',
    locale: 'ja_JP',
    type: 'article',
  }
};

export default function FurusatoMinohFallsArimaAutumnLeavesStayPage() {
  return (
    <main className="min-h-screen bg-stone-100/60 text-stone-900 pb-20">
      {/* パンくずナビ */}
      <nav aria-label="Breadcrumb" className="max-w-5xl mx-auto px-4 sm:px-6 pt-6 pb-2 text-xs text-stone-500 flex items-center gap-2 flex-wrap">
        <Link href="/" className="hover:text-stone-800 underline">ホーム</Link>
        <span>&gt;</span>
        <Link href="/features" className="hover:text-stone-800 underline">特集一覧</Link>
        <span>&gt;</span>
        <span className="text-stone-800 font-bold">箕面大滝紅葉＆有馬温泉金泉銀泉名宿特集</span>
      </nav>

      {/* ヒーローセクション */}
      <header className="max-w-5xl mx-auto px-4 sm:px-6 pt-4 pb-10">
        <div className="bg-gradient-to-br from-stone-900 via-amber-950 to-stone-900 text-white rounded-3xl p-8 md:p-12 shadow-xl border border-amber-900/40 relative overflow-hidden">
          <div className="relative z-10 space-y-4">
            <span className="inline-block bg-amber-500/20 text-amber-300 text-xs md:text-sm font-bold px-3.5 py-1.5 rounded-full border border-amber-400/30">
              箕面大滝紅葉＆有馬温泉・金泉銀泉極上名門旅館特集
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold font-serif tracking-tight leading-snug">
              日本の滝百選・箕面大滝の紅葉美＆日本最古の名湯・有馬温泉金泉銀泉名宿×ふるさと納税完全ガイド【2026年最新秋旅】関西
            </h1>
            <p className="text-stone-300 text-sm md:text-base max-w-3xl leading-relaxed">
              11月中旬〜12月上旬に見頃を迎える関西屈指の紅葉名所「箕面大滝（大阪）」と、日本三古湯・三名泉の最高峰「有馬温泉（神戸）」。鉄分と塩分濃厚な赤褐色の「金泉」と無色透明の「銀泉」を誇る「欽山」「有馬御苑」「兵衛向陽閣」。最高級神戸牛会席を、楽天ふるさと納税トラベルクーポンで実質2,000円で楽しむ完全ガイド。
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs md:text-sm text-amber-200/90 font-medium">
              <span className="flex items-center gap-1.5">
                <span>🗓️</span> 2026年最新版（10-11月秋シーズン）
              </span>
              <span className="flex items-center gap-1.5">
                <span>🎫</span> 楽天ふるさと納税トラベルクーポン対象
              </span>
              <span className="flex items-center gap-1.5">
                <span>✨</span> 実質自己負担2,000円
              </span>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-16">
        {/* リード文セクション */}
        <section className="bg-white rounded-3xl p-8 md:p-10 border border-stone-200/80 shadow-sm">
          <h2 className="text-xl md:text-2xl font-bold font-serif text-stone-800 mb-4 border-l-4 border-amber-600 pl-4">
            落差三十三メートルの瀑布を彩る燃えるような紅葉と、地球の恵み湧き出る濃厚な金泉。大人の極上関西秋旅へ
          </h2>
          <p className="text-stone-700 text-sm md:text-base leading-relaxed">
            大阪都心から電車でわずか約30分、日本の滝百選にも選ばれている「箕面大滝（明治の森箕面国定公園）」。11月中旬から12月上旬にかけて、落差33mの大滝を取り囲むモミジが一斉に真紅に染まり、轟音とともに流れ落ちる清流と紅葉のコントラストは圧巻の美しさを誇ります。箕面名物の「もみじの天ぷら」を片手に紅葉狩りを楽しんだ後は、六甲山を越えて日本最古の名湯「神戸・有馬温泉」へ。地底深くから湧き出る濃厚な含鉄ナトリウム塩化物強塩高温泉「金泉」は、冷え性や関節痛を和らげ身体の芯から温めてくれる世界屈指の泉質。さらにラドンや炭酸を含む「銀泉」との贅沢な入り比べが叶います。数寄屋造りの静寂とミシュラン掲載の京風創作懐石を誇る最高級料亭旅館「有馬温泉 欽山」、有馬の中心街に位置し金泉・銀泉の両方と神戸牛を堪能できる「有馬御苑」、そして創業七百年・三つの趣異なる大浴場「一の湯・二の湯・三の湯」を誇る老舗名門「兵衛向陽閣」。楽天ふるさと納税トラベルクーポン（寄付額の最大30％割引・有効期限3年）を使って実質自己負担2,000円で賢く予約し、贅沢至極の秋の有馬温泉ステイを満喫しましょう。
          </p>
        </section>

        {/* 3つの魅力ポイント */}
        <section className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold font-serif text-stone-900 text-center">
            この特集で厳選した宿をおすすめする3つの理由
          </h2>
          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-white rounded-2xl p-6 md:p-8 border border-stone-200/80 shadow-xs">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-full bg-amber-100 text-amber-800 font-bold text-sm flex items-center justify-center shrink-0">
                  01
                </span>
                <h3 className="text-lg md:text-xl font-bold text-stone-900 font-serif">
                  日本の滝百選「箕面大滝」の紅葉ライトアップ＆伝統「もみじの天ぷら」散策
                </h3>
              </div>
              <p className="text-stone-600 text-sm md:text-base leading-relaxed pl-11">
                滝道沿いに続く紅葉のアーチ。夜間にはライトアップされた箕面大滝が漆黒の闇に浮かび上がり、昼間とは一変した幽玄な美しさに包まれます。
              </p>
            </div>
  

            <div className="bg-white rounded-2xl p-6 md:p-8 border border-stone-200/80 shadow-xs">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-full bg-amber-100 text-amber-800 font-bold text-sm flex items-center justify-center shrink-0">
                  02
                </span>
                <h3 className="text-lg md:text-xl font-bold text-stone-900 font-serif">
                  日本最古の名湯！赤褐色の濃厚「金泉」と肌を滑らかにする「銀泉」の湯巡り
                </h3>
              </div>
              <p className="text-stone-600 text-sm md:text-base leading-relaxed pl-11">
                海水よりも塩分濃度が高く保温・保湿効果抜群の金泉と、新陳代謝を高める炭酸ラジウム銀泉。二つの異なる名湯を一度に味わう贅沢が叶います。
              </p>
            </div>
  

            <div className="bg-white rounded-2xl p-6 md:p-8 border border-stone-200/80 shadow-xs">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-full bg-amber-100 text-amber-800 font-bold text-sm flex items-center justify-center shrink-0">
                  03
                </span>
                <h3 className="text-lg md:text-xl font-bold text-stone-900 font-serif">
                  世界に誇る「最高級神戸牛」のステーキ・しゃぶしゃぶ＆本格京風懐石料理
                </h3>
              </div>
              <p className="text-stone-600 text-sm md:text-base leading-relaxed pl-11">
                きめ細やかな霜降りと上品な甘みが口の中でとろける神戸牛。旬の松茸や丹波栗を取り入れた繊細な秋の懐石料理が特別な夜を彩ります。
              </p>
            </div>
  
          </div>
        </section>

        {/* ホテル一覧 */}
        <section className="space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-2xl md:text-3xl font-bold font-serif text-stone-900">
              【2026年最新】ふるさと納税で行く極上おすすめ宿3選
            </h2>
            <p className="text-stone-600 text-sm">
              宿泊予約時にトラベルクーポンを適用することで、最大30％割引＆実質2,000円で泊まれます。
            </p>
          </div>

          <div className="space-y-8">

            <div key="arima_kinzan" className="bg-white rounded-3xl border border-stone-200/90 shadow-md overflow-hidden hover:shadow-xl transition duration-300">
              <div className="bg-gradient-to-r from-amber-700 to-amber-900 text-amber-50 px-6 py-3 text-xs md:text-sm font-bold flex justify-between items-center">
                <span>兵庫県神戸市・小学生以下宿泊不可の大人の静寂！ミシュラン掲載の最高峰料亭旅館と極上金泉</span>
                <span className="bg-amber-500/30 text-amber-200 text-xs px-2.5 py-0.5 rounded-full border border-amber-400/40">厳選名宿 第1選</span>
              </div>
              <div className="p-6 md:p-8 space-y-6">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="bg-amber-100 text-amber-900 text-xs font-bold px-2.5 py-1 rounded-md">
                      ふるさと納税トラベルクーポン対象
                    </span>
                    <span className="text-amber-800 font-bold text-sm">
                      ★ 4.60 <span className="text-stone-400 text-xs">(498件)</span>
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold font-serif text-stone-900">
                    有馬温泉　欽山
                  </h3>
                  <p className="text-xs md:text-sm text-stone-500 mt-1">
                    📍 兵庫県神戸市北区有馬町1302-4 ｜ 神戸電鉄「有馬温泉駅」より徒歩５分・山陽新幹線「新神戸駅」よりバスにて約30分・大阪（梅田）より高速バスにて約55分
                  </p>
                </div>

                <div className="grid md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-6">
                    <div className="relative aspect-video rounded-2xl overflow-hidden shadow-inner bg-stone-100 group">
                      <img
                        src="https://img.travel.rakuten.co.jp/share/HOTEL/53390/53390.jpg"
                        alt="有馬温泉　欽山"
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-6 space-y-4">
                    <p className="text-stone-700 text-sm md:text-base leading-relaxed">
                      有馬温泉の静かな高台に佇み、小学生以下の入館をご遠慮いただくことで大人の上質な静寂と安らぎを守り続ける高級料亭旅館。数寄屋造りの風情ある客室からは四季折々の庭園美を望め、名湯・金泉を湛えた大浴場やサウナで至福の湯浴みが楽しめます。宿の最大の誇りは、熟練の料理人が一品一品手作りにこだわる京風創作懐石。お部屋食プランも充実しており、極上の神戸牛や瀬戸内の新鮮魚介とともに特別な記念日を過ごせます。
                    </p>
                    <div className="bg-stone-50 rounded-xl p-4 border border-stone-200/60 text-xs space-y-1.5 text-stone-600">
                      <div><strong className="text-stone-800">♨️ 温泉・特徴：</strong> 幾千年、伝えゆきたい日本の風雅。風情薫る欽山で雅な休日をお過ごしください。</div>
                      <div><strong className="text-stone-800">🚗 駐車場：</strong> 有り 60台 無料 予約不要 【お車はお客様ご自身で地下駐車場へのご移動をお願いしております。】</div>
                      <div><strong className="text-stone-800">💰 料金目安：</strong> <span className="text-amber-900 font-bold text-sm">1名あたり 23,650円〜</span>（※クーポン利用で実質2,000円）</div>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F53390%2F53390.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-bold py-3.5 px-6 rounded-2xl shadow-md text-center transition flex items-center justify-center gap-2 text-sm"
                  >
                    <span>🏨 楽天トラベルで空室・宿泊プランを見る</span>
                    <span>→</span>
                  </a>
                  <a
                    href="https://event.travel.rakuten.co.jp/furusato/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="sm:w-auto bg-stone-100 hover:bg-stone-200 text-stone-800 font-bold py-3.5 px-6 rounded-2xl border border-stone-300 text-center transition text-sm flex items-center justify-center gap-1.5"
                  >
                    <span>🎫 自治体クーポン獲得</span>
                  </a>
                </div>
              </div>
            </div>
    

            <div key="arima_koyoen" className="bg-white rounded-3xl border border-stone-200/90 shadow-md overflow-hidden hover:shadow-xl transition duration-300">
              <div className="bg-gradient-to-r from-amber-700 to-amber-900 text-amber-50 px-6 py-3 text-xs md:text-sm font-bold flex justify-between items-center">
                <span>兵庫県神戸市・有馬温泉駅徒歩約2分！敷地内で「金泉」と「銀泉」の両方と神戸牛を堪能する名宿</span>
                <span className="bg-amber-500/30 text-amber-200 text-xs px-2.5 py-0.5 rounded-full border border-amber-400/40">厳選名宿 第2選</span>
              </div>
              <div className="p-6 md:p-8 space-y-6">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="bg-amber-100 text-amber-900 text-xs font-bold px-2.5 py-1 rounded-md">
                      ふるさと納税トラベルクーポン対象
                    </span>
                    <span className="text-amber-800 font-bold text-sm">
                      ★ 4.39 <span className="text-stone-400 text-xs">(2,832件)</span>
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold font-serif text-stone-900">
                    神戸牛と有馬温泉　天然金泉・銀泉の宿　有馬御苑
                  </h3>
                  <p className="text-xs md:text-sm text-stone-500 mt-1">
                    📍 兵庫県神戸市北区有馬町1296 ｜ 神戸電鉄線有馬温泉駅から徒歩２分、阪急バス有馬停より徒歩２分、阪神高速有馬口ＩＣより車３分、中国道西宮北ＩＣより車１０分
                  </p>
                </div>

                <div className="grid md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-6">
                    <div className="relative aspect-video rounded-2xl overflow-hidden shadow-inner bg-stone-100 group">
                      <img
                        src="https://img.travel.rakuten.co.jp/share/HOTEL/1206/1206.jpg"
                        alt="神戸牛と有馬温泉　天然金泉・銀泉の宿　有馬御苑"
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-6 space-y-4">
                    <p className="text-stone-700 text-sm md:text-base leading-relaxed">
                      有馬温泉街の玄関口に位置し、観光や散策の拠点として抜群のアクセスを誇る人気の温泉宿。館内の大浴場では、有馬名物の赤褐色のにごり湯「金泉」と、無色透明で肌触りのよい「銀泉（ラジウム泉）」の両方を一度に湯巡り可能。夕食には神戸肉取扱指定店ならではの厳選された最高ランク神戸牛のステーキやしゃぶしゃぶ、すき焼き会席を提供。本物の神戸牛と名湯を気軽に満喫したい旅行者に絶大な人気を誇ります。
                    </p>
                    <div className="bg-stone-50 rounded-xl p-4 border border-stone-200/60 text-xs space-y-1.5 text-stone-600">
                      <div><strong className="text-stone-800">♨️ 温泉・特徴：</strong> 【楽天ゴールド＆日本の宿アワード受賞】部屋食プラン多数★温泉街すぐ！金銀２種の温泉と神戸牛が自慢♪</div>
                      <div><strong className="text-stone-800">🚗 駐車場：</strong> 有（50台）ご宿泊者様は利用室数分まで無料　※場所が分かりづらいため当館HPアクセスページ参照下さい</div>
                      <div><strong className="text-stone-800">💰 料金目安：</strong> <span className="text-amber-900 font-bold text-sm">1名あたり 10,890円〜</span>（※クーポン利用で実質2,000円）</div>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F1206%2F1206.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-bold py-3.5 px-6 rounded-2xl shadow-md text-center transition flex items-center justify-center gap-2 text-sm"
                  >
                    <span>🏨 楽天トラベルで空室・宿泊プランを見る</span>
                    <span>→</span>
                  </a>
                  <a
                    href="https://event.travel.rakuten.co.jp/furusato/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="sm:w-auto bg-stone-100 hover:bg-stone-200 text-stone-800 font-bold py-3.5 px-6 rounded-2xl border border-stone-300 text-center transition text-sm flex items-center justify-center gap-1.5"
                  >
                    <span>🎫 自治体クーポン獲得</span>
                  </a>
                </div>
              </div>
            </div>
    

            <div key="arima_hyoe" className="bg-white rounded-3xl border border-stone-200/90 shadow-md overflow-hidden hover:shadow-xl transition duration-300">
              <div className="bg-gradient-to-r from-amber-700 to-amber-900 text-amber-50 px-6 py-3 text-xs md:text-sm font-bold flex justify-between items-center">
                <span>兵庫県神戸市・創業七百年の伝統を誇る名門！三つの大浴場「一の湯・二の湯・三の湯」九つの湯船</span>
                <span className="bg-amber-500/30 text-amber-200 text-xs px-2.5 py-0.5 rounded-full border border-amber-400/40">厳選名宿 第3選</span>
              </div>
              <div className="p-6 md:p-8 space-y-6">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="bg-amber-100 text-amber-900 text-xs font-bold px-2.5 py-1 rounded-md">
                      ふるさと納税トラベルクーポン対象
                    </span>
                    <span className="text-amber-800 font-bold text-sm">
                      ★ 4.55 <span className="text-stone-400 text-xs">(2,597件)</span>
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold font-serif text-stone-900">
                    有馬温泉　兵衛向陽閣
                  </h3>
                  <p className="text-xs md:text-sm text-stone-500 mt-1">
                    📍 兵庫県神戸市北区有馬町1904 ｜ 神戸より電車で約３０分／神戸電鉄有馬温泉駅・バス有馬温泉駅より徒歩約６分／阪神高速道路北神戸線有馬口出口より約５分
                  </p>
                </div>

                <div className="grid md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-6">
                    <div className="relative aspect-video rounded-2xl overflow-hidden shadow-inner bg-stone-100 group">
                      <img
                        src="https://img.travel.rakuten.co.jp/share/HOTEL/8636/8636.jpg"
                        alt="有馬温泉　兵衛向陽閣"
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-6 space-y-4">
                    <p className="text-stone-700 text-sm md:text-base leading-relaxed">
                      太閤秀吉から「兵衛」の名を授かったと伝えられる創業700年の歴史を誇る有馬屈指の老舗温泉旅館。趣の異なる3つの大浴場「一の湯（和風）」「二の湯（ローマ風）」「三の湯（湯治場風）」に計9つの湯船が揃い、宿にいながら本格的な金泉めぐりを堪能できます。夕食は伝統の技を受け継ぐ季節の会席料理、またはオープンキッチンの豪華バイキングから選択可能。あらゆる世代に愛される安心と信頼の最高峰宿です。
                    </p>
                    <div className="bg-stone-50 rounded-xl p-4 border border-stone-200/60 text-xs space-y-1.5 text-stone-600">
                      <div><strong className="text-stone-800">♨️ 温泉・特徴：</strong> 創業700年の老舗旅館。有馬温泉の高台に位置し、有馬最大級の悠々とした三大浴場でお寛ぎいただけます。</div>
                      <div><strong className="text-stone-800">🚗 駐車場：</strong> 有り：120台（無料・先着順）</div>
                      <div><strong className="text-stone-800">💰 料金目安：</strong> <span className="text-amber-900 font-bold text-sm">1名あたり 15,950円〜</span>（※クーポン利用で実質2,000円）</div>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F8636%2F8636.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-bold py-3.5 px-6 rounded-2xl shadow-md text-center transition flex items-center justify-center gap-2 text-sm"
                  >
                    <span>🏨 楽天トラベルで空室・宿泊プランを見る</span>
                    <span>→</span>
                  </a>
                  <a
                    href="https://event.travel.rakuten.co.jp/furusato/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="sm:w-auto bg-stone-100 hover:bg-stone-200 text-stone-800 font-bold py-3.5 px-6 rounded-2xl border border-stone-300 text-center transition text-sm flex items-center justify-center gap-1.5"
                  >
                    <span>🎫 自治体クーポン獲得</span>
                  </a>
                </div>
              </div>
            </div>
    
          </div>
        </section>

        {/* ふるさと納税クーポン使い方ステップ */}
        <section className="bg-white rounded-3xl p-8 md:p-10 border border-stone-200/80 shadow-sm mb-16">
          <h2 className="text-xl md:text-2xl font-bold font-serif text-stone-800 mb-6 text-center">
            ふるさと納税トラベルクーポンの簡単3ステップ
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/60 text-center">
              <div className="w-10 h-10 rounded-full bg-amber-600 text-white font-bold flex items-center justify-center mx-auto mb-3">1</div>
              <h3 className="font-bold text-stone-900 text-sm mb-2">旅行先自治体に寄付</h3>
              <p className="text-xs text-stone-600 leading-relaxed">楽天ふるさと納税で泊まりたい宿がある市町村のトラベルクーポンを選んで寄付します。</p>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/60 text-center">
              <div className="w-10 h-10 rounded-full bg-amber-600 text-white font-bold flex items-center justify-center mx-auto mb-3">2</div>
              <h3 className="font-bold text-stone-900 text-sm mb-2">クーポンが付与される</h3>
              <p className="text-xs text-stone-600 leading-relaxed">寄付完了後、楽天トラベルのマイクーポンに即時〜数日で付与（有効期間は3年間）。</p>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/60 text-center">
              <div className="w-10 h-10 rounded-full bg-amber-600 text-white font-bold flex items-center justify-center mx-auto mb-3">3</div>
              <h3 className="font-bold text-stone-900 text-sm mb-2">予約時に割引適用</h3>
              <p className="text-xs text-stone-600 leading-relaxed">宿泊予約画面でクーポンを選択。すでに予約済みの宿でも「あとから適用」が可能です。</p>
            </div>
          </div>
          <div className="text-center mt-6">
            <Link
              href="/furusato-tax-travel-beginners-complete-guide"
              className="text-amber-800 font-bold text-xs sm:text-sm hover:underline"
            >
              👉 詳しいお金の流れやワンストップ特例の手順はこちらの完全マニュアルへ
            </Link>
          </div>
        </section>

        {/* 関連特集クロスリンク */}
        <section className="bg-stone-50 rounded-3xl p-8 border border-stone-200/80 mb-16">
          <h2 className="text-lg md:text-xl font-bold font-serif text-stone-800 mb-4">
            あわせて読みたい関連特集
          </h2>
          <ul className="grid sm:grid-cols-2 gap-2">

            <li key="furusato-tax-three-medicinal-hotsprings-stay">
              <Link
                href="/furusato-tax-three-medicinal-hotsprings-stay"
                className="block p-4 rounded-2xl bg-white border border-stone-200 hover:border-amber-400 hover:shadow-sm transition text-stone-800 text-sm font-bold group"
              >
                <span className="text-amber-700 group-hover:text-amber-900 mr-1.5">👉</span>
                【日本三大薬湯×ふるさと納税】有馬・草津・松之山の万病を癒やす名湯宿
              </Link>
            </li>
  

            <li key="furusato-tax-kyoto-arashiyama-autumn-leaves-illumination-stay">
              <Link
                href="/furusato-tax-kyoto-arashiyama-autumn-leaves-illumination-stay"
                className="block p-4 rounded-2xl bg-white border border-stone-200 hover:border-amber-400 hover:shadow-sm transition text-stone-800 text-sm font-bold group"
              >
                <span className="text-amber-700 group-hover:text-amber-900 mr-1.5">👉</span>
                【京都嵐山紅葉ライトアップ＆名門温泉宿×ふるさと納税】古都の錦秋旅
              </Link>
            </li>
  

            <li key="furusato-tax-matsuba-echizen-crab-season-opening-onsen-stay">
              <Link
                href="/furusato-tax-matsuba-echizen-crab-season-opening-onsen-stay"
                className="block p-4 rounded-2xl bg-white border border-stone-200 hover:border-amber-400 hover:shadow-sm transition text-stone-800 text-sm font-bold group"
              >
                <span className="text-amber-700 group-hover:text-amber-900 mr-1.5">👉</span>
                【松葉ガニ・越前ガニ解禁名宿×ふるさと納税】本場の初物カニ尽くし旅
              </Link>
            </li>
  

            <li key="furusato-tax-luxury-hotspring-ryokan-stay">
              <Link
                href="/furusato-tax-luxury-hotspring-ryokan-stay"
                className="block p-4 rounded-2xl bg-white border border-stone-200 hover:border-amber-400 hover:shadow-sm transition text-stone-800 text-sm font-bold group"
              >
                <span className="text-amber-700 group-hover:text-amber-900 mr-1.5">👉</span>
                【実質2,000円で泊まる名湯】高級温泉旅館＆憧れの老舗宿完全ガイド
              </Link>
            </li>
  
          </ul>
        </section>

        {/* ハブページへの誘導フッター */}
        <div className="bg-gradient-to-r from-stone-900 via-amber-950 to-stone-900 text-white rounded-3xl p-8 md:p-10 shadow-xl border border-amber-900/40 text-center mb-12">
          <h2 className="text-xl sm:text-2xl font-bold font-serif mb-3 text-amber-50">
            もっとお得に旅を楽しむためのハブページへ
          </h2>
          <p className="text-stone-300 text-xs sm:text-sm mb-6 max-w-xl mx-auto">
            全国のテーマ別宿特集や、旅行費を最大30％安くする裏ワザを網羅した総合ガイドを公開中。
          </p>
          <Link
            href="/travel-savings-guide"
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 text-stone-950 font-black px-7 py-3.5 rounded-2xl shadow-xl hover:opacity-95 transition text-sm"
          >
            🏨 旅行節約総合ハブページを見る ➔
          </Link>
        </div>

        {/* フッター */}
        <footer className="text-center text-xs text-stone-400 pt-6 border-t border-stone-200">
          <p>※表示内容は2026年9月時点の情報です。最新の宿泊プラン・クーポン対象施設は楽天トラベルにてご確認ください。</p>
          <p className="mt-2">
            <Link href="/" className="text-stone-500 hover:text-stone-800 underline transition">旅宿クラウド トップページへ</Link>
          </p>
        </footer>
      </div>
    </main>
  );
}
