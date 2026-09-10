import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '【雲仙温泉×ふるさと納税】雲仙地獄の湯煙と濃厚白濁硫黄泉！名門クラシックホテル＆美食リゾート滞在ガイド｜雲仙宮崎旅館・雲仙観光ホテル・雲仙福田屋',
  description: '日本最初の国立公園に佇む名湯・雲仙温泉を楽天ふるさと納税で満喫！立ち上る地獄谷の噴気と美肌の白濁硫黄泉、国の有形文化財に指定された雲仙観光ホテル、地獄を一望する雲仙宮崎旅館、民芸モダンが魅力の福田屋を徹底紹介。長崎和牛・島原の地魚・卓袱料理の美味とクーポン利用術を網羅。',
  keywords: '雲仙温泉 ふるさと納税,雲仙地獄 旅館,雲仙観光ホテル ふるさと納税,雲仙宮崎旅館 クーポン,長崎 温泉 ふるさと納税 旅行',
  openGraph: {
    title: '【雲仙温泉×ふるさと納税】雲仙地獄の湯煙と濃厚白濁硫黄泉！名門クラシックホテル＆美食リゾート滞在ガイド｜雲仙宮崎旅館・雲仙観光ホテル・雲仙福田屋',
    description: '日本最初の国立公園に佇む名湯・雲仙温泉を楽天ふるさと納税で満喫！立ち上る地獄谷の噴気と美肌の白濁硫黄泉、国の有形文化財に指定された雲仙観光ホテル、地獄を一望する雲仙宮崎旅館、民芸モダンが魅力の福田屋を徹底紹介。長崎和牛・島原の地魚・卓袱料理の美味とクーポン利用術を網羅。',
    type: 'article',
    url: 'https://croud-travel.pages.dev/furusato-tax-unzen-onsen-jigoku-sulfur-stay',
  },
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-unzen-onsen-jigoku-sulfur-stay',
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
            【雲仙温泉×ふるさと納税】雲仙地獄の湯煙と濃厚白濁硫黄泉！名門クラシックホテル＆美食リゾート滞在ガイド｜雲仙宮崎旅館・雲仙観光ホテル・雲仙福田屋
          </h1>
          <p className="text-stone-300 text-sm md:text-base max-w-2xl mx-auto pt-2 leading-relaxed">
            日本最初の国立公園に佇む名湯・雲仙温泉を楽天ふるさと納税で満喫！立ち上る地獄谷の噴気と美肌の白濁硫黄泉、国の有形文化財に指定された雲仙観光ホテル、地獄を一望する雲仙宮崎旅館、民芸モダンが魅力の福田屋を徹底紹介。長崎和牛・島原の地魚・卓袱料理の美味とクーポン利用術を網羅。
          </p>
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4 text-xs text-stone-400">
            <span>対象自治体: <strong className="text-amber-300">長崎県雲仙市</strong></span>
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
            標高700mの雲上に広がる奇跡の白濁湯、異国情緒あふれるクラシックリゾート——雲仙温泉で味わう至高の湯治旅
          </h2>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            長崎県・島原半島の中央にそびえる雲仙岳の山懐、標高約700メートルの高地に広がる雲仙温泉。大地のエネルギーが白い湯煙とともに轟音を立てて噴き出す「雲仙地獄」を中心に、明治から昭和初期にかけて外国人の避暑地として栄えた異国情緒豊かな温泉リゾートです。酸性の強い濃厚な白濁硫黄泉は、殺菌効果と美肌効果に優れ、「一度浸かれば肌が生まれ変わる」と称される名湯として知られています。
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            雲仙の魅力は温泉だけに留まりません。日本初の国立公園に指定された雄大な山岳風景、スイスの山岳ロッジを思わせるクラシックホテル建築、そして有明海と橘湾に囲まれた島原半島の豊かな山海の幸（長崎和牛、島原の手延べそうめん、新鮮な雲仙地魚）が旅人を魅了します。雲仙市へのふるさと納税を利用すれば、最高峰の伝統ホテルや隠れ家旅館に賢く宿泊でき、一生の思い出に残る上質な雲上ステイが実現します。
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
            <h3 className="text-lg sm:text-xl font-bold font-serif">長崎県雲仙市のふるさと納税クーポンをチェック</h3>
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/28126/28126.jpg"
                alt="雲仙温泉　雲仙宮崎旅館"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第1選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.91（口コミ 870件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">長崎県雲仙市</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  雲仙温泉　雲仙宮崎旅館
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  創業九十有余年・全館リニューアルで生まれ変わった極上宿！雲仙地獄を望む絶景テラスと源泉かけ流し美肌湯
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  雲仙温泉 雲仙宮崎旅館 —— 地獄の息吹を間近に感じるパノラマビューと、四季の日本庭園に包まれるラグジュアリー
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 地獄谷の湯煙と雄大な庭園を望む客室テラス
                    </h5>
                    <p className="text-stone-600 leading-relaxed">大改修を経て全室が広々としたテラス付き客室に一新。テラスの椅子に身を委ねれば、目の前に広がる雲仙地獄のダイナミックな噴気と澄んだ山の空気をプライベートに体感できます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 地獄から湧き出る濃厚な源泉かけ流し白濁硫黄泉
                    </h5>
                    <p className="text-stone-600 leading-relaxed">大浴場や露天風呂には、一切の加水・加温を行わない新鮮な硫黄泉が注がれます。乳白色の湯に身を浸すと、立ち上る硫黄の香りと絹のような肌触りが深い安らぎをもたらします。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 長崎和牛と橘湾の鮮魚を堪能するプライベート会席
                    </h5>
                    <p className="text-stone-600 leading-relaxed">独立した個室ダイニングでいただく夕食。島原半島の新鮮な旬野菜、橘湾で獲れた地魚の造り、長崎和牛の炭火焼きなど、長崎の豊かな食文化を極上の仕立てで味わえます。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.91点という驚異的な高スコア。リニューアル後の清潔で洗練された館内空間、地獄を望むロケーションの素晴らしさ、隅々まで行き届いたホスピタリティが絶賛されています。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div>住所: 長崎県 雲仙市小浜町雲仙320番地</div>
                <div>最寄り駅・アクセス: ＪＲ諫早駅下車バス８０分、長崎自動車道諫早ICより島原道路へ乗換え長野ICより車で５０分</div>
                <div>参考料金: <span className="font-bold text-stone-800">¥30,530〜</span></div>
                <div>ホテル番号: No.28126</div>
              </div>

              {/* アフィリエイト予約ボタン */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D28126"
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/30119/30119.jpg"
                alt="雲仙観光ホテル"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第2選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.76（口コミ 235件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">長崎県雲仙市</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  雲仙観光ホテル
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  昭和十年創業・国登録有形文化財のクラシックホテル！手斧削りの梁が重なるスイス風山岳建築と伝統の本格フレンチ
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  雲仙観光ホテル —— 日本の高原リゾートの原点。重厚な木造建築美とタイムレスな優雅さに浸る滞在
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 登録有形文化財に指定された美しい山岳建築
                    </h5>
                    <p className="text-stone-600 leading-relaxed">外国人の避暑地として誕生した昭和10年当時の面影を今に伝える本館。手斧削りの重厚な丸太梁、アール・デコ調のステンドグラス、ビリヤード室や図書室など、まるで中世ヨーロッパの別荘に迷い込んだかのような空間です。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> アール・デコ調のステンドグラス輝くドーム温泉浴室
                    </h5>
                    <p className="text-stone-600 leading-relaxed">ホテル内の温泉浴室は、ドーム型の高い天井とステンドグラスが印象的なモダンレトロ空間。硫黄の香る良質な雲仙の源泉を、クラシックホテルの美学の中で堪能できます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 歴代シェフが守り継ぐ伝統の雲仙クラシックフレンチ
                    </h5>
                    <p className="text-stone-600 leading-relaxed">高い格天井が美しいメインダイニングで供されるディナーコース。地元の新鮮な食材を使い、伝統のフレンチ技法に現代の感性を重ねた至福のフルコースを味わえます。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.76点。唯一無二の歴史的建築美、静かで上質な空気感、ライブラリーでの読書時間、そしてスタッフの紳士的で温かなサービスに多くの旅人が心を奪われています。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div>住所: 長崎県 雲仙市小浜町雲仙320</div>
                <div>最寄り駅・アクセス: ＪＲ諫早駅よりバスで８０分／諫早ＩＣより車で６０分／島原外港より車・バスで４０分</div>
                <div>参考料金: <span className="font-bold text-stone-800">¥25,020〜</span></div>
                <div>ホテル番号: No.30119</div>
              </div>

              {/* アフィリエイト予約ボタン */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D30119"
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/6194/6194.jpg"
                alt="雲仙温泉　民芸モダンの宿　雲仙福田屋"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第3選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.57（口コミ 871件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">長崎県雲仙市</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  雲仙温泉　民芸モダンの宿　雲仙福田屋
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  民芸の温もりに包まれるハイセンスな温泉宿！露天風呂やパノラマサウナ、島原郷土鍋と長崎牛の饗宴
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  雲仙温泉 民芸モダンの宿 雲仙福田屋 —— 木と土の温かみを感じるモダン民芸空間と、多彩な湯巡りパラダイス
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 4つの内湯・露天風呂と2つの貸切風呂による湯巡り
                    </h5>
                    <p className="text-stone-600 leading-relaxed">自家源泉から引く濃厚な白濁湯。露天風呂「せせらぎの湯」や内湯「普賢の湯」、プライベートな貸切風呂など、館内だけで多彩な湯浴みを楽しめます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> ハイセンスな民芸モダンデザインと最新サウナ
                    </h5>
                    <p className="text-stone-600 leading-relaxed">民芸家具と現代の快適性が融合した落ち着きある客室。近年新設されたパノラマサウナやリラクゼーションスペースも人気で、温泉とサウナの極上の「ととのい」を満喫できます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 名物「雲仙鍋」と長崎牛・島原旬素材の会席
                    </h5>
                    <p className="text-stone-600 leading-relaxed">島原半島の豊かな旬の幸をふんだんに盛り込んだ創作郷土会席。出汁の効いた特製鍋料理や長崎牛のステーキなど、滋味あふれる料理が旅の夜を華やかに彩ります。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.57点、口コミ870件超。お洒落な民芸調のインテリア、湯量豊富な掛け流し温泉、居心地の良いカフェバーやサウナ施設、コストパフォーマンスの高さが高く評価されています。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div>住所: 長崎県 雲仙市小浜町雲仙380-2</div>
                <div>最寄り駅・アクセス: 長崎自動車道 諫早ＩＣ及びＪＲ諌早駅より車で５５分</div>
                <div>参考料金: <span className="font-bold text-stone-800">¥9,900〜</span></div>
                <div>ホテル番号: No.6194</div>
              </div>

              {/* アフィリエイト予約ボタン */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D6194"
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
            雲仙地獄めぐり＆島原半島観光ハイライトガイド
          </h2>
          <div className="grid gap-4">

            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/60 space-y-2">
              <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                <span className="text-amber-600">◆</span> 雲仙地獄の歩き方と名物「温泉卵」
              </h3>
              <p className="text-stone-700 text-sm leading-relaxed">大叫喚地獄、お糸地獄、清七地獄など、約30の地獄から湯煙が立ち上る雲仙地獄。遊歩道が整備されており、足元から伝わる大地の熱気を感じながら散策できます。地獄の蒸気で蒸し上げた名物の「温泉たまご」は、食べると1年長生きすると言われる人気の味覚です。</p>
            </div>

            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/60 space-y-2">
              <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                <span className="text-amber-600">◆</span> 仁田峠循環道路と雲仙ロープウェイの絶景
              </h3>
              <p className="text-stone-700 text-sm leading-relaxed">春のミヤマキリシマ、夏の深緑、秋の紅葉、冬の霧氷と、四季を通じて息をのむ絶景が広がる仁田峠。ロープウェイに乗って妙見岳山頂へ登れば、有明海や島原半島、遠く熊本の阿蘇連山まで見渡す大パノラマが広がります。</p>
            </div>

            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/60 space-y-2">
              <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                <span className="text-amber-600">◆</span> 島原城・武家屋敷と湧水群への立ち寄り
              </h3>
              <p className="text-stone-700 text-sm leading-relaxed">雲仙温泉から車で約30分の島原城下町。美しい石垣が残る武家屋敷街や、街のいたるところから清らかな名水が湧き出す「湧水庭園 四明荘」など、長崎の歴史と涼やかな水景色を楽しめる絶好の観光ルートです。</p>
            </div>
          </div>
        </section>

        {/* ふるさと納税活用ステップ */}
        <section className="bg-gradient-to-br from-amber-900 via-stone-900 to-stone-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-amber-300 font-semibold">How to Use Coupon</span>
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-amber-50">
              長崎県雲仙市ふるさと納税×楽天トラベルクーポン活用手順
            </h2>
            <p className="text-stone-300 text-xs sm:text-sm">
              初めての方でも迷わず利用できる3ステップ。予約済みのプランにも後から適用可能です。
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 text-xs sm:text-sm">

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/10 space-y-2">
              <div className="font-bold text-amber-300 text-sm">Step 1: 雲仙市の返礼品「楽天トラベルクーポン」を申し込む</div>
              <p className="text-stone-200 leading-relaxed">楽天ふるさと納税で「長崎県雲仙市」のトラベルクーポン（寄付額の30%相当補助）を選択して寄付。寄付完了と同時にアカウントへクーポンが付与されます。</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/10 space-y-2">
              <div className="font-bold text-amber-300 text-sm">Step 2: 3年間の有効期間を活用してベストシーズンを予約</div>
              <p className="text-stone-200 leading-relaxed">クーポンの有効期限は3年間。紅葉が山を染める秋や、避暑地として心地よい初夏など、希望の季節に合わせてゆっくり宿泊プランを選べます。</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/10 space-y-2">
              <div className="font-bold text-amber-300 text-sm">Step 3: 楽天トラベルで雲仙の宿を予約しクーポン割引を適用</div>
              <p className="text-stone-200 leading-relaxed">予約内容確認画面でクーポンを選択すれば、宿泊代金から即座に割引が実行されます。現地での追加精算や面倒な手続きは一切不要です。</p>
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
              <Link href="/furusato-tax-gero-onsen-bihada-luxury-stay" className="hover:text-amber-800 underline flex items-center gap-1.5 py-1">
                <span>▸</span> 日本三名泉・下呂温泉 美肌の湯名宿ステイ特集
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
