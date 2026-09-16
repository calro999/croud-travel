import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '11月3日解禁！山梨ヌーボー＆甲州勝沼ワイナリー巡り×石和温泉美食リゾート【ふるさと納税完全ガイド2026】 | 旅宿クラウド',
  description: '10〜11月は日本ワイン発祥の地・山梨甲州勝沼がもっとも輝く収穫と新酒（山梨ヌーボー）のシーズン！約30軒の個性豊かなワイナリーでの試飲巡りと、美肌の名湯・石和温泉の掛け流し湯に癒やされる「ホテル古柏園」「ホテル平安」「中村屋旅館」。甲州牛ステーキとワインのマリアージュを、楽天ふるさと納税トラベルクーポンで実質2,000円で楽しむ完全ガイド。',
  keywords: [
    'ふるさと納税 温泉',
    'ふるさと納税 宿泊券',
    'ふるさと納税 トラベルクーポン',
    '山梨甲州勝沼ワイナリー新酒ワイン＆石和名湯リゾート特集',
    '10月 旅行 おすすめ',
    '11月 旅行 おすすめ',
    '秋 旅行 温泉',
    '紅葉 温泉旅館',
    '楽天トラベル ふるさと納税',
    '実質2000円 温泉'
  ],
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-koshu-winery-harvest-autumn-wine-resort-stay/'
  },
  openGraph: {
    title: '11月3日解禁！山梨ヌーボー＆甲州勝沼ワイナリー巡り×石和温泉美食リゾート【ふるさと納税完全ガイド2026】',
    description: '10〜11月は日本ワイン発祥の地・山梨甲州勝沼がもっとも輝く収穫と新酒（山梨ヌーボー）のシーズン！約30軒の個性豊かなワイナリーでの試飲巡りと、美肌の名湯・石和温泉の掛け流し湯に癒やされる「ホテル古柏園」「ホテル平安」「中村屋旅館」。甲州牛ステーキとワインのマリアージュを、楽天ふるさと納税トラベルクーポンで実質2,000円で楽しむ完全ガイド。',
    url: 'https://croud-travel.pages.dev/furusato-tax-koshu-winery-harvest-autumn-wine-resort-stay',
    siteName: '旅宿クラウド',
    locale: 'ja_JP',
    type: 'article',
  }
};

export default function FurusatoKoshuWineryHarvestStayPage() {
  return (
    <main className="min-h-screen bg-stone-100/60 text-stone-900 pb-20">
      {/* パンくずナビ */}
      <nav aria-label="Breadcrumb" className="max-w-5xl mx-auto px-4 sm:px-6 pt-6 pb-2 text-xs text-stone-500 flex items-center gap-2 flex-wrap">
        <Link href="/" className="hover:text-stone-800 underline">ホーム</Link>
        <span>&gt;</span>
        <Link href="/features" className="hover:text-stone-800 underline">特集一覧</Link>
        <span>&gt;</span>
        <span className="text-stone-800 font-bold">山梨甲州ワイナリー新酒＆石和温泉特集</span>
      </nav>

      {/* ヒーローセクション */}
      <header className="max-w-5xl mx-auto px-4 sm:px-6 pt-4 pb-10">
        <div className="bg-gradient-to-br from-stone-900 via-amber-950 to-stone-900 text-white rounded-3xl p-8 md:p-12 shadow-xl border border-amber-900/40 relative overflow-hidden">
          <div className="relative z-10 space-y-4">
            <span className="inline-block bg-amber-500/20 text-amber-300 text-xs md:text-sm font-bold px-3.5 py-1.5 rounded-full border border-amber-400/30">
              山梨甲州勝沼ワイナリー新酒ワイン＆石和名湯リゾート特集
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold font-serif tracking-tight leading-snug">
              11月3日解禁！山梨ヌーボー＆甲州勝沼ワイナリー巡り×石和温泉美食リゾート【ふるさと納税完全ガイド2026】
            </h1>
            <p className="text-stone-300 text-sm md:text-base max-w-3xl leading-relaxed">
              10〜11月は日本ワイン発祥の地・山梨甲州勝沼がもっとも輝く収穫と新酒（山梨ヌーボー）のシーズン！約30軒の個性豊かなワイナリーでの試飲巡りと、美肌の名湯・石和温泉の掛け流し湯に癒やされる「ホテル古柏園」「ホテル平安」「中村屋旅館」。甲州牛ステーキとワインのマリアージュを、楽天ふるさと納税トラベルクーポンで実質2,000円で楽しむ完全ガイド。
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
            ぶどう畑が黄金に染まる勝沼の丘、樽から注がれる出来立て新酒。美肌温泉と甲州牛マリアージュに酔いしれる秋の休日
          </h2>
          <p className="text-stone-700 text-sm md:text-base leading-relaxed">
            日本ワインの銘醸地として世界から注目を集める山梨県・甲州市勝沼および笛吹市エリア。10月から11月にかけては、ぶどうの収穫が最盛期を迎え、毎年11月3日には出来立ての新酒「山梨ヌーボー（甲州・マスカット・ベーリーA）」が一斉に解禁されます。丘一面に広がるぶどう畑が秋色に色づく中、歴史あるワイナリーを巡って限定ワインや搾りたてのぶどうジュースを試飲し、お気に入りの一本を見つける旅はワイン愛好家にとって至福の体験。そして観光の後は、山梨屈指の湧出量を誇る「石和温泉」のアルカリ性単純温泉でゆったりと湯浴み。さらりとして肌に優しい名湯でリフレッシュした後は、最高級「甲州牛」の鉄板焼きや溶岩焼きとともに、地元ソムリエが厳選した勝沼ワインとの極上ペアリングを心ゆくまで満喫できます。屋上展望露天風呂から甲府盆地の夜景と南アルプスを望む「ホテル古柏園」、広大な日本庭園と自家源泉掛け流しの大浴場を誇る「ホテル平安」、そして勝沼ぶどうの丘やワイナリーへのアクセス抜群な老舗「中村屋旅館」。楽天ふるさと納税トラベルクーポン（寄付額の最大30％割引・有効期限3年）を活用して実質自己負担2,000円でお得に予約し、芳醇な秋のワインリゾート旅へ出かけましょう。
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
                  11月3日「山梨ヌーボー」解禁！30軒以上の勝沼ワイナリー試飲＆ぶどう畑巡り
                </h3>
              </div>
              <p className="text-stone-600 text-sm md:text-base leading-relaxed pl-11">
                日本固有の品種「甲州」と「マスカット・ベーリーA」の新酒が味わえる秋限定の特別シーズン。ワインカーヴやワイナリーレストランで出来立ての味を堪能できます。
              </p>
            </div>
  

            <div className="bg-white rounded-2xl p-6 md:p-8 border border-stone-200/80 shadow-xs">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-full bg-amber-100 text-amber-800 font-bold text-sm flex items-center justify-center shrink-0">
                  02
                </span>
                <h3 className="text-lg md:text-xl font-bold text-stone-900 font-serif">
                  アルカリ性単純温泉の美肌湯！湯量豊富な石和温泉で湯巡りとリラクゼーション
                </h3>
              </div>
              <p className="text-stone-600 text-sm md:text-base leading-relaxed pl-11">
                刺激が少なく肌触り滑らかな石和の湯は、老若男女問わず何度でも浸かれる美肌の名湯。展望露天風呂からは甲府盆地の夜景や富士山を望むことができます。
              </p>
            </div>
  

            <div className="bg-white rounded-2xl p-6 md:p-8 border border-stone-200/80 shadow-xs">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-full bg-amber-100 text-amber-800 font-bold text-sm flex items-center justify-center shrink-0">
                  03
                </span>
                <h3 className="text-lg md:text-xl font-bold text-stone-900 font-serif">
                  極上「甲州牛」ステーキ×地元ワイナリー厳選ワインの至高のペアリング会席
                </h3>
              </div>
              <p className="text-stone-600 text-sm md:text-base leading-relaxed pl-11">
                山梨の自然が育んだきめ細やかな霜降り甲州牛や、富士桜ポーク、甲斐サーモンなど地場食材の贅を尽くしたディナーと、芳醇な山梨ワインのマリアージュを堪能できます。
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

            <div key="isawa_kohakuen" className="bg-white rounded-3xl border border-stone-200/90 shadow-md overflow-hidden hover:shadow-xl transition duration-300">
              <div className="bg-gradient-to-r from-amber-700 to-amber-900 text-amber-50 px-6 py-3 text-xs md:text-sm font-bold flex justify-between items-center">
                <span>山梨県笛吹市・最上階7階の展望露天風呂から甲府盆地の夜景と南アルプスを一望する温泉宿</span>
                <span className="bg-amber-500/30 text-amber-200 text-xs px-2.5 py-0.5 rounded-full border border-amber-400/40">厳選名宿 第1選</span>
              </div>
              <div className="p-6 md:p-8 space-y-6">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="bg-amber-100 text-amber-900 text-xs font-bold px-2.5 py-1 rounded-md">
                      ふるさと納税トラベルクーポン対象
                    </span>
                    <span className="text-amber-800 font-bold text-sm">
                      ★ 4.20 <span className="text-stone-400 text-xs">(979件)</span>
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold font-serif text-stone-900">
                    石和温泉　ホテル古柏園
                  </h3>
                  <p className="text-xs md:text-sm text-stone-500 mt-1">
                    📍 山梨県笛吹市石和町市部822 ｜ ＪＲ中央線 石和温泉駅下車徒歩7分、高速バス徒歩１０分（送迎無料）。中央高速 御坂一宮ＩＣよりＲ２０経由で１０分。
                  </p>
                </div>

                <div className="grid md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-6">
                    <div className="relative aspect-video rounded-2xl overflow-hidden shadow-inner bg-stone-100 group">
                      <img
                        src="https://img.travel.rakuten.co.jp/share/HOTEL/7024/7024.jpg"
                        alt="石和温泉　ホテル古柏園"
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-6 space-y-4">
                    <p className="text-stone-700 text-sm md:text-base leading-relaxed">
                      石和温泉駅から徒歩5分の好立地に建ち、最上階の展望露天風呂「輝きの湯」から甲府盆地のパノラマ夜景や遠く富士山を望む絶景宿。石和の名湯を掛け流しで楽しめる大浴場やサウナも完備。夕食には甲州名物の甲州牛や富士の介（キングサーモン×ニジマス）を使った季節の会席料理を提供し、山梨県産ワインの品揃えも抜群。ワイナリー巡りの拠点として最高の利便性と快適さを誇る人気ホテルです。
                    </p>
                    <div className="bg-stone-50 rounded-xl p-4 border border-stone-200/60 text-xs space-y-1.5 text-stone-600">
                      <div><strong className="text-stone-800">♨️ 温泉・特徴：</strong> 楽天ブロンズアワード2025受賞★甲州会席が好評の宿◆展望ラウンジで山梨ワインを堪能！</div>
                      <div><strong className="text-stone-800">🚗 駐車場：</strong> 有り：６０台（無料）</div>
                      <div><strong className="text-stone-800">💰 料金目安：</strong> <span className="text-amber-900 font-bold text-sm">1名あたり 7,315円〜</span>（※クーポン利用で実質2,000円）</div>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F7024%2F7024.html"
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
    

            <div key="isawa_heian" className="bg-white rounded-3xl border border-stone-200/90 shadow-md overflow-hidden hover:shadow-xl transition duration-300">
              <div className="bg-gradient-to-r from-amber-700 to-amber-900 text-amber-50 px-6 py-3 text-xs md:text-sm font-bold flex justify-between items-center">
                <span>山梨県笛吹市・豊かな自家源泉掛け流しの大浴場と風情あふれる日本庭園に癒やされる名湯宿</span>
                <span className="bg-amber-500/30 text-amber-200 text-xs px-2.5 py-0.5 rounded-full border border-amber-400/40">厳選名宿 第2選</span>
              </div>
              <div className="p-6 md:p-8 space-y-6">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="bg-amber-100 text-amber-900 text-xs font-bold px-2.5 py-1 rounded-md">
                      ふるさと納税トラベルクーポン対象
                    </span>
                    <span className="text-amber-800 font-bold text-sm">
                      ★ 3.49 <span className="text-stone-400 text-xs">(204件)</span>
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold font-serif text-stone-900">
                    石和温泉　ホテル平安
                  </h3>
                  <p className="text-xs md:text-sm text-stone-500 mt-1">
                    📍 山梨県笛吹市石和町川中島538 ｜ ＪＲ石和温泉駅：徒歩15分無料送迎5分（15～17時）有/中央道一宮・御坂IC車10分
                  </p>
                </div>

                <div className="grid md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-6">
                    <div className="relative aspect-video rounded-2xl overflow-hidden shadow-inner bg-stone-100 group">
                      <img
                        src="https://img.travel.rakuten.co.jp/share/HOTEL/72719/72719.jpg"
                        alt="石和温泉　ホテル平安"
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-6 space-y-4">
                    <p className="text-stone-700 text-sm md:text-base leading-relaxed">
                      落ち着きある純和風の佇まいと広々とした日本庭園が旅人を迎える石和温泉の正統派旅館。敷地内から湧き出る毎分数百リットルの自家源泉を贅沢に掛け流した大浴場と露天風呂は、とろりとした肌触りで湯上がり後も身体がポカポカと温まります。夕食には地元山梨の旬の幸をふんだんに盛り込んだ創作会席膳。ゆったりとした広さの客室でプライベートな時間を過ごす大人の温泉休日に最適です。
                    </p>
                    <div className="bg-stone-50 rounded-xl p-4 border border-stone-200/60 text-xs space-y-1.5 text-stone-600">
                      <div><strong className="text-stone-800">♨️ 温泉・特徴：</strong> 石和温泉駅無料送迎有◆温泉24時間OK◆水晶焼ステーキ・ほうとう鍋など郷土の味を堪能</div>
                      <div><strong className="text-stone-800">🚗 駐車場：</strong> 有り　６０台　無料　予約不要</div>
                      <div><strong className="text-stone-800">💰 料金目安：</strong> <span className="text-amber-900 font-bold text-sm">1名あたり 8,030円〜</span>（※クーポン利用で実質2,000円）</div>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F72719%2F72719.html"
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
    

            <div key="koshu_nakamuraya" className="bg-white rounded-3xl border border-stone-200/90 shadow-md overflow-hidden hover:shadow-xl transition duration-300">
              <div className="bg-gradient-to-r from-amber-700 to-amber-900 text-amber-50 px-6 py-3 text-xs md:text-sm font-bold flex justify-between items-center">
                <span>山梨県甲州市・勝沼ワイナリーやぶどうの丘へのアクセス至便！塩山駅前の心温まる料理旅館</span>
                <span className="bg-amber-500/30 text-amber-200 text-xs px-2.5 py-0.5 rounded-full border border-amber-400/40">厳選名宿 第3選</span>
              </div>
              <div className="p-6 md:p-8 space-y-6">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="bg-amber-100 text-amber-900 text-xs font-bold px-2.5 py-1 rounded-md">
                      ふるさと納税トラベルクーポン対象
                    </span>
                    <span className="text-amber-800 font-bold text-sm">
                      ★ 4.09 <span className="text-stone-400 text-xs">(168件)</span>
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold font-serif text-stone-900">
                    中村屋旅館＜山梨県＞
                  </h3>
                  <p className="text-xs md:text-sm text-stone-500 mt-1">
                    📍 山梨県甲州市塩山上於曽1225 ｜ 中央高速道勝沼IC15分／JR中央線塩山駅北口より徒歩10分
                  </p>
                </div>

                <div className="grid md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-6">
                    <div className="relative aspect-video rounded-2xl overflow-hidden shadow-inner bg-stone-100 group">
                      <img
                        src="https://img.travel.rakuten.co.jp/share/HOTEL/9093/9093.jpg"
                        alt="中村屋旅館＜山梨県＞"
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-6 space-y-4">
                    <p className="text-stone-700 text-sm md:text-base leading-relaxed">
                      JR中央本線・塩山駅南口の目の前に位置し、勝沼のワイナリーエリアや「甲州市勝沼ぶどうの丘」へのアクセスが非常にスムーズな老舗料理旅館。アットホームで心温まるおもてなしと、甲州名物のほうとうや馬刺し、季節の手作り和食が評判。ワイナリー巡りで電車やタクシーを利用したい旅行者や、気ままに山梨の秋の味覚を楽しみたい一人旅・カップルに選ばれている穴場の名宿です。
                    </p>
                    <div className="bg-stone-50 rounded-xl p-4 border border-stone-200/60 text-xs space-y-1.5 text-stone-600">
                      <div><strong className="text-stone-800">♨️ 温泉・特徴：</strong> 大理石と木曽檜を使ったお風呂が好評☆JR中央線塩山駅北口より徒歩10分。</div>
                      <div><strong className="text-stone-800">🚗 駐車場：</strong> 有り　15台　先着順　無料</div>
                      <div><strong className="text-stone-800">💰 料金目安：</strong> <span className="text-amber-900 font-bold text-sm">1名あたり 6,000円〜</span>（※クーポン利用で実質2,000円）</div>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F9093%2F9093.html"
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

            <li key="furusato-tax-sake-brewery-pairing-onsen-stay">
              <Link
                href="/furusato-tax-sake-brewery-pairing-onsen-stay"
                className="block p-4 rounded-2xl bg-white border border-stone-200 hover:border-amber-400 hover:shadow-sm transition text-stone-800 text-sm font-bold group"
              >
                <span className="text-amber-700 group-hover:text-amber-900 mr-1.5">👉</span>
                【名門酒蔵＆日本酒ペアリング温泉宿×ふるさと納税】美酒と美食の極上旅
              </Link>
            </li>
  

            <li key="furusato-tax-french-italian-auberge-luxury-stay">
              <Link
                href="/furusato-tax-french-italian-auberge-luxury-stay"
                className="block p-4 rounded-2xl bg-white border border-stone-200 hover:border-amber-400 hover:shadow-sm transition text-stone-800 text-sm font-bold group"
              >
                <span className="text-amber-700 group-hover:text-amber-900 mr-1.5">👉</span>
                【極上フレンチ＆本格オーベルジュ×ふるさと納税】美食を堪能する大人の休日
              </Link>
            </li>
  

            <li key="furusato-tax-highland-ranch-farm-resort-hotel-stay">
              <Link
                href="/furusato-tax-highland-ranch-farm-resort-hotel-stay"
                className="block p-4 rounded-2xl bg-white border border-stone-200 hover:border-amber-400 hover:shadow-sm transition text-stone-800 text-sm font-bold group"
              >
                <span className="text-amber-700 group-hover:text-amber-900 mr-1.5">👉</span>
                【高原観光牧場＆ファーム体験×ふるさと納税】那須・トマム・阿蘇の休日
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
