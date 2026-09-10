import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '【伊香保温泉×ふるさと納税】365段の石段街と黄金の湯＆白銀の湯！名門老舗旅館ステイ完全ガイド｜福一・ホテル木暮・岸権旅館',
  description: '万葉集にも詠まれた名湯・伊香保温泉を楽天ふるさと納税でお得に旅する！石段街最上段に鎮座する創業四百四十年の「福一」、毎分千リットルの湯量を誇る北関東最大級大浴場の「ホテル木暮」、天正四年創業・完全掛け流しの黄金の湯「岸権旅館」を徹底比較。上州牛会席や群馬県渋川市クーポン活用術を網羅。',
  keywords: '伊香保温泉 ふるさと納税,伊香保 石段街 旅館,福一 伊香保 ふるさと納税,ホテル木暮 クーポン,渋川市 ふるさと納税 宿泊',
  openGraph: {
    title: '【伊香保温泉×ふるさと納税】365段の石段街と黄金の湯＆白銀の湯！名門老舗旅館ステイ完全ガイド｜福一・ホテル木暮・岸権旅館',
    description: '万葉集にも詠まれた名湯・伊香保温泉を楽天ふるさと納税でお得に旅する！石段街最上段に鎮座する創業四百四十年の「福一」、毎分千リットルの湯量を誇る北関東最大級大浴場の「ホテル木暮」、天正四年創業・完全掛け流しの黄金の湯「岸権旅館」を徹底比較。上州牛会席や群馬県渋川市クーポン活用術を網羅。',
    type: 'article',
    url: 'https://croud-travel.pages.dev/furusato-tax-ikaho-stone-steps-retro-luxury-stay',
  },
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-ikaho-stone-steps-retro-luxury-stay',
  },
};

export default function FurusatoTaxArticle() {
  return (
    <main className="min-h-screen bg-stone-50 text-stone-900 leading-relaxed font-sans">
      {/* ヒーローヘッダー */}
      <header className="relative bg-gradient-to-br from-stone-900 via-amber-950 to-stone-900 text-amber-50 py-16 px-4 md:px-8 border-b border-amber-900/50 shadow-2xl">
        <div className="max-w-4xl mx-auto space-y-4 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold tracking-wider border border-amber-400/30 mb-2">
            <span>楽天ふるさと納税 宿泊クーポン完全攻略</span>
            <span>•</span>
            <span>自治体公認 宿泊割引</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-tight text-white font-serif leading-tight">
            【伊香保温泉×ふるさと納税】365段の石段街と黄金の湯＆白銀の湯！名門老舗旅館ステイ完全ガイド｜福一・ホテル木暮・岸権旅館
          </h1>
          <p className="text-stone-300 text-sm md:text-base max-w-2xl mx-auto pt-2 leading-relaxed">
            万葉集にも詠まれた名湯・伊香保温泉を楽天ふるさと納税でお得に旅する！石段街最上段に鎮座する創業四百四十年の「福一」、毎分千リットルの湯量を誇る北関東最大級大浴場の「ホテル木暮」、天正四年創業・完全掛け流しの黄金の湯「岸権旅館」を徹底比較。上州牛会席や群馬県渋川市クーポン活用術を網羅。
          </p>
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4 text-xs text-stone-400">
            <span>対象自治体: <strong className="text-amber-300">群馬県渋川市</strong></span>
            <span>•</span>
            <span>還元率: 寄付額の最大30%</span>
            <span>•</span>
            <span>有効期限: クーポン獲得から3年間</span>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 space-y-12">
        {/* リード文セクション */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-stone-200/80 space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 border-l-4 border-amber-700 pl-4">
            伊香保名物365段の石段、茶褐色の「黄金の湯」と透明な「白銀の湯」——伊香保温泉で過ごす極上のレトロモダン休日
          </h2>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            榛名山の東麓、標高約700メートルの高地に広がる伊香保温泉。街の象徴である「365段の石段街」は、戦国時代に武田勝頼の命によって日本初の計画的な温泉街として築かれた歴史を持ちます。石段の中央には温泉が流れる「小間口」が設けられ、石段を挟んで土産物店や射的場、足湯が立ち並ぶノスタルジックな風景は、歩くだけで昭和の時代にタイムスリップしたかのような旅情を感じさせます。
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            伊香保の誇りは、鉄分を含み空気に触れて独特の茶褐色に変化する「黄金（こがね）の湯」と、近年湧出したメタケイ酸豊富な透明な「白銀（しろがね）の湯」という二大名湯。二つの異なる湯に浸かり、名物・上州牛のすき焼きや水沢うどんを味わう滞在は至福そのものです。群馬県渋川市へのふるさと納税を利用すれば、30%相当のトラベルクーポンにより名門旅館へお得に宿泊でき、情緒あふれる温泉旅行を最高のコスパで満喫できます。
          </p>
          <div className="bg-amber-50 rounded-2xl p-4 sm:p-5 border border-amber-200/80 text-amber-950 text-xs sm:text-sm space-y-2">
            <h3 className="font-bold text-amber-900 flex items-center gap-2">
              <span>💡</span> この記事でわかること
            </h3>
            <ul className="grid sm:grid-cols-2 gap-2 text-stone-800 list-disc list-inside">
              <li>ふるさと納税で泊まれる名門宿のリアルな魅力と特徴</li>
              <li>楽天トラベルクーポンを使った最大割引予約の手順</li>
              <li>失敗しない現地観光モデルルート＆名物グルメ</li>
              <li>予約済みでも間に合う「クーポンあとから適用」のやり方</li>
            </ul>
          </div>
        </section>

        {/* 楽天トラベル クーポン獲得バナー導線 */}
        <div className="bg-gradient-to-r from-red-600 via-rose-600 to-amber-600 text-white rounded-2xl p-6 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <p className="text-xs uppercase tracking-widest font-bold text-amber-200">Rakuten Travel Furusato Tax</p>
            <h3 className="text-lg sm:text-xl font-bold font-serif">群馬県渋川市のふるさと納税クーポンをチェック</h3>
            <p className="text-xs text-rose-100">寄付額の最大30%オフ！3年間有効・予約済み日程にも適用可能</p>
          </div>
          <a
            href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 bg-white text-rose-700 font-extrabold px-6 py-3 rounded-xl shadow hover:bg-stone-100 transition text-sm flex items-center gap-1.5"
          >
            <span>クーポン一覧を見る</span>
            <span>→</span>
          </a>
        </div>

        {/* 厳選ホテル徹底解剖 */}
        <section className="space-y-10">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-stone-900">
              ふるさと納税で泊まる厳選名宿3選
            </h2>
            <p className="text-stone-600 text-xs sm:text-sm">
              実際に楽天トラベルで圧倒的な高評価を獲得している名門ホテル・老舗旅館をピックアップ
            </p>
          </div>


          {/* ホテル 1 */}
          <article className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200/80 transition hover:shadow-md">
            <div className="relative aspect-video sm:aspect-[16/9] w-full overflow-hidden bg-stone-100">
              <img
                src="https://img.travel.rakuten.co.jp/share/HOTEL/28606/28606.jpg"
                alt="伊香保温泉　福一"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第1選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.3（口コミ 1701件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">群馬県渋川市</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  伊香保温泉　福一
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  創業四百四十余年・石段街最上段の特等席！黄金の湯と白銀の湯の二大名湯を両方愉しむ伊香保最高峰の格式宿
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  伊香保温泉 福一 —— 戦国時代から続く名門の矜持。石段街への専用出入口と至極の二湯巡り
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 伊香保の二大名湯「黄金の湯」「白銀の湯」の両方を完備
                    </h5>
                    <p className="text-stone-600 leading-relaxed">歴史ある茶褐色の黄金の湯と、肌に優しい透明な白銀の湯。大浴場や露天風呂で両方の源泉に浸かり比べができる贅沢な湯処です。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 石段街の最上段（19階）に直結する専用アクセス
                    </h5>
                    <p className="text-stone-600 leading-relaxed">宿のエレベーターから石段街の最上段、伊香保神社付近へ直結。坂道を登ることなくスムーズに石段街散策や足湯巡りに出かけられます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 上州牛ステーキと旬の恵みを味わう格調高い和会席
                    </h5>
                    <p className="text-stone-600 leading-relaxed">料理長が選び抜いた群馬の山の幸、川の幸、そして柔らかな上州牛。器や盛り付けにも老舗の気品が宿る洗練された夕食を堪能できます。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.30点、口コミ1700件超。「石段街直結の立地が最高で二つの源泉にも大満足」「お部屋の眺望が良くスタッフの対応も格式を感じた」と高い評価を得ています。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div>住所: 群馬県 渋川市伊香保町伊香保香湯5-4</div>
                <div>最寄り駅・アクセス: 渋川駅より伊香保温泉行きバス30分、終点伊香保温泉下車。新宿駅新南口発着の高速バス有※バス停から徒歩数分バス停まで送迎有</div>
                <div>参考料金: <span className="font-bold text-stone-800">¥9,636〜</span></div>
                <div>ホテル番号: No.28606</div>
              </div>

              {/* アフィリエイト予約ボタン */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D28606"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-bold py-3 px-6 rounded-xl shadow transition text-sm flex items-center justify-center gap-2"
                >
                  <span>楽天トラベルで空室・プランを見る</span>
                  <span>→</span>
                </a>
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center bg-amber-100 hover:bg-amber-200 text-amber-900 font-semibold py-3 px-6 rounded-xl transition text-sm flex items-center justify-center gap-1.5"
                >
                  <span>ふるさと納税クーポン獲得</span>
                </a>
              </div>
            </div>
          </article>

          {/* ホテル 2 */}
          <article className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200/80 transition hover:shadow-md">
            <div className="relative aspect-video sm:aspect-[16/9] w-full overflow-hidden bg-stone-100">
              <img
                src="https://img.travel.rakuten.co.jp/share/HOTEL/6266/6266.jpg"
                alt="伊香保温泉　ホテル木暮"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第2選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.75（口コミ 1989件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">群馬県渋川市</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  伊香保温泉　ホテル木暮
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  創業四百年の湯守！毎分千リットルを誇る北関東最大級の湯処「子の湯千両」と展望大浴場パノラマ
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  伊香保温泉 ホテル木暮 —— 黄金の湯の総湧出量の四分の一を保有。圧倒的な湯量と美食のエンターテインメント
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 伊香保随一の湯量を誇る大浴殿「子の湯千両」
                    </h5>
                    <p className="text-stone-600 leading-relaxed">広大な敷地に広がる露天風呂、庭園風呂、立ち湯、座り湯など多彩な湯船。黄金の湯が惜しみなく注がれ、心ゆくまで名湯を満喫できます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 上州の山並みを一望する開放的なロケーション
                    </h5>
                    <p className="text-stone-600 leading-relaxed">高台に位置し、客室やロビーラウンジからは赤城山や榛名山の雄大な稜線を一望。朝夕で刻々と変わる山景が旅の気分を高めます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 上州牛と地元契約農家の旬野菜を味わう創作和食会席
                    </h5>
                    <p className="text-stone-600 leading-relaxed">群馬県産上州牛の陶板焼きやしゃぶしゃぶ、吟味された四季折々の料理。オープンキッチンから届く出来立ての美味しさが評判です。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.75点という驚異の高スコア。「お風呂の種類がとにかく多く温泉好きにはパラダイス」「館内が非常に清潔で料理も美味しく接客も満点」と圧倒的な満足度を誇ります。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div>住所: 群馬県 渋川市伊香保町伊香保135</div>
                <div>最寄り駅・アクセス: 関越道渋川伊香保ＩＣから車２０分　ＪＲ上越線渋川駅から路線バス３０分　バス下車後お電話頂ければバス停までお迎えに参ります</div>
                <div>参考料金: <span className="font-bold text-stone-800">¥19,800〜</span></div>
                <div>ホテル番号: No.6266</div>
              </div>

              {/* アフィリエイト予約ボタン */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D6266"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-bold py-3 px-6 rounded-xl shadow transition text-sm flex items-center justify-center gap-2"
                >
                  <span>楽天トラベルで空室・プランを見る</span>
                  <span>→</span>
                </a>
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center bg-amber-100 hover:bg-amber-200 text-amber-900 font-semibold py-3 px-6 rounded-xl transition text-sm flex items-center justify-center gap-1.5"
                >
                  <span>ふるさと納税クーポン獲得</span>
                </a>
              </div>
            </div>
          </article>

          {/* ホテル 3 */}
          <article className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200/80 transition hover:shadow-md">
            <div className="relative aspect-video sm:aspect-[16/9] w-full overflow-hidden bg-stone-100">
              <img
                src="https://img.travel.rakuten.co.jp/share/HOTEL/6267/6267.jpg"
                alt="岸権旅館　石段街隣接　希少源泉「黄金の湯」の宿"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第3選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.49（口コミ 1663件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">群馬県渋川市</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  岸権旅館　石段街隣接　希少源泉「黄金の湯」の宿
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  天正四年創業・石段街に面した老舗名門！創業以来引き継ぐ完全掛け流しの名湯「黄金の湯」と石段ビュー
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  岸権旅館 石段街隣接 希少源泉「黄金の湯」の宿 —— 四百年の歴史を紡ぐ正統派。純度100％の掛け流し温泉
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 敷地内まで引き湯される純度100％の「黄金の湯」
                    </h5>
                    <p className="text-stone-600 leading-relaxed">加水・加温・循環一切なしの本物の掛け流し。総檜造りの「権左衛門の湯」や展望露天風呂「六左衛門の湯」で、鉄分とメタケイ酸豊富な名湯を堪能できます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 石段街に面した抜群のロケーションと無料足湯「辰の湯」
                    </h5>
                    <p className="text-stone-600 leading-relaxed">玄関を出れば目の前が石段街。宿の入口脇には誰でも利用できる黄金の湯の足湯「辰の湯」が設けられ、温泉街の情緒を肌で感じられます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 上州の郷土色を散りばめた季節の会席膳
                    </h5>
                    <p className="text-stone-600 leading-relaxed">上州牛や名物の刺身こんにゃく、下仁田ねぎなど群馬の味覚が詰まった料理。落ち着いた和室でゆったりと食事を味わえます。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.49点、口コミ1600件超。「黄金の湯のお湯が本当に素晴らしく体が温まる」「石段街のすぐ横で観光に最高だった」と根強いリピーターを抱えています。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div>住所: 群馬県 渋川市伊香保町伊香保甲48</div>
                <div>最寄り駅・アクセス: 関越自動車道　渋川伊香保ＩＣから車で２０分　上越線渋川駅下車バスで３０分、タクシー１５分</div>
                <div>参考料金: <span className="font-bold text-stone-800">¥8,800〜</span></div>
                <div>ホテル番号: No.6267</div>
              </div>

              {/* アフィリエイト予約ボタン */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D6267"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-bold py-3 px-6 rounded-xl shadow transition text-sm flex items-center justify-center gap-2"
                >
                  <span>楽天トラベルで空室・プランを見る</span>
                  <span>→</span>
                </a>
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center bg-amber-100 hover:bg-amber-200 text-amber-900 font-semibold py-3 px-6 rounded-xl transition text-sm flex items-center justify-center gap-1.5"
                >
                  <span>ふるさと納税クーポン獲得</span>
                </a>
              </div>
            </div>
          </article>
        </section>

        {/* 周辺観光・グルメガイド */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-stone-200/80 space-y-6">
          <h2 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 border-l-4 border-amber-700 pl-4">
            伊香保石段街めぐり・榛名湖＆水沢うどん観光ガイド
          </h2>
          <div className="grid gap-4">

            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/60 space-y-2">
              <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                <span className="text-amber-600">◆</span> 365段の石段街散策と伊香保神社・河鹿橋の紅葉
              </h3>
              <p className="text-stone-700 text-sm leading-relaxed">段ごとに干支が刻まれた365段の石段。登りきった先にある「伊香保神社」で健康と縁結びを祈願し、さらに奥の「河鹿橋」へ。秋には真っ赤なモミジが朱塗りの太鼓橋を彩る絶景ライトアップが有名です。</p>
            </div>

            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/60 space-y-2">
              <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                <span className="text-amber-600">◆</span> 日本三大うどん「水沢うどん」街道でのランチ
              </h3>
              <p className="text-stone-700 text-sm leading-relaxed">伊香保温泉から車で約10分の水沢エリア。400年以上の歴史を持つ「水沢うどん」は、強いコシと透明感のあるツヤが特徴。舞茸の天ぷらとゴマだれで味わうのが定番です。</p>
            </div>

            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/60 space-y-2">
              <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                <span className="text-amber-600">◆</span> 榛名湖・榛名山ロープウェイの高原ドライブ
              </h3>
              <p className="text-stone-700 text-sm leading-relaxed">伊香保からつづら折りの峠道を登ると、カルデラ湖「榛名湖」と「榛名富士」へ。ボート遊びやロープウェイからの眺望、秋の紅葉ドライブに最高のスポットです。</p>
            </div>
          </div>
        </section>

        {/* ふるさと納税活用ステップ */}
        <section className="bg-gradient-to-br from-amber-900 via-stone-900 to-stone-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-amber-300 font-semibold">How to Use Coupon</span>
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-amber-50">
              群馬県渋川市ふるさと納税×楽天トラベルクーポン活用手順
            </h2>
            <p className="text-stone-300 text-xs sm:text-sm">
              初めての方でも迷わず利用できる3ステップ。予約済みのプランにも後から適用可能です。
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 text-xs sm:text-sm">

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/10 space-y-2">
              <div className="font-bold text-amber-300 text-sm">Step 1: 楽天ふるさと納税で「群馬県渋川市」のクーポンを獲得</div>
              <p className="text-stone-200 leading-relaxed">楽天ふるさと納税で「渋川市」のトラベルクーポン（寄付額の30%相当補助）を返礼品として申し込みます。寄付完了と同時にアカウントへクーポンが付与されます。</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/10 space-y-2">
              <div className="font-bold text-amber-300 text-sm">Step 2: 3年間の有効期間内で温泉旅行をじっくり計画</div>
              <p className="text-stone-200 leading-relaxed">クーポンの有効期限は発行から3年間。河鹿橋が紅葉に染まる秋や、雪景色が美しい冬、新緑の初夏など、希望の日程に合わせて予約できます。</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/10 space-y-2">
              <div className="font-bold text-amber-300 text-sm">Step 3: 楽天トラベル予約画面でクーポン割引を適用</div>
              <p className="text-stone-200 leading-relaxed">福一、ホテル木暮、岸権旅館などの対象宿を予約する際、確認画面でクーポンを選択。宿泊代金から30%相当額がダイレクトに値引きされます。</p>
            </div>
          </div>

          <div className="text-center pt-2">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-amber-500 text-white font-extrabold px-8 py-3.5 rounded-xl shadow-lg hover:opacity-95 transition"
            >
              <span>楽天ふるさと納税トラベルクーポンを獲得する</span>
              <span>→</span>
            </a>
          </div>
        </section>

        {/* 内部リンク・ハブ導線 */}
        <section className="border-t border-stone-200 pt-8 space-y-4">
          <h3 className="text-base sm:text-lg font-bold font-serif text-stone-900">
            関連するふるさと納税トラベル特集
          </h3>
          <ul className="grid sm:grid-cols-2 gap-3 text-xs sm:text-sm text-stone-600">
            <li>
              <Link href="/travel-savings-guide" className="hover:text-amber-800 underline flex items-center gap-1.5 py-1">
                <span>▸</span> ふるさと納税×旅行 完全攻略ハブページトップ
              </Link>
            </li>
            <li>
              <Link href="/furusato-tax-travel-after-booking-discount-guide" className="hover:text-amber-800 underline flex items-center gap-1.5 py-1">
                <span>▸</span> 予約済みでも間に合う！楽天トラベル「あとから適用」ガイド
              </Link>
            </li>
            <li>
              <Link href="/furusato-tax-travel-beginners-complete-guide" className="hover:text-amber-800 underline flex items-center gap-1.5 py-1">
                <span>▸</span> 超初心者向け ふるさと納税で旅行に安く泊まるマニュアル
              </Link>
            </li>
            <li>
              <Link href="/furusato-tax-hakone-gora-onsen-art-luxury-stay" className="hover:text-amber-800 underline flex items-center gap-1.5 py-1">
                <span>▸</span> 箱根強羅温泉 美肌にごり湯＆客室露天風呂特集
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
