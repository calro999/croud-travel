import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '【城崎温泉×ふるさと納税】七田外湯めぐり＆絶品松葉ガニ・但馬牛を味わう名旅館ステイ完全ガイド｜西村屋本館・三木屋・川口屋リバーサイドホテル',
  description: '開湯1300年の歴史を誇る名湯・城崎温泉の極上旅を楽天ふるさと納税で最大お得に！七田外湯めぐりの風情、文豪・志賀直哉ゆかりの宿、冬の味覚の王様・津居山港産松葉ガニや但馬牛の会席料理を徹底解説。西村屋本館、三木屋、川口屋リバーサイドホテルの宿泊記とクーポン利用法を網羅。',
  keywords: '城崎温泉 ふるさと納税,城崎 外湯めぐり 浴衣 旅館,西村屋本館 楽天トラベル,城崎 松葉ガニ 温泉宿,豊岡市 ふるさと納税 旅行クーポン',
  openGraph: {
    title: '【城崎温泉×ふるさと納税】七田外湯めぐり＆絶品松葉ガニ・但馬牛を味わう名旅館ステイ完全ガイド｜西村屋本館・三木屋・川口屋リバーサイドホテル',
    description: '開湯1300年の歴史を誇る名湯・城崎温泉の極上旅を楽天ふるさと納税で最大お得に！七田外湯めぐりの風情、文豪・志賀直哉ゆかりの宿、冬の味覚の王様・津居山港産松葉ガニや但馬牛の会席料理を徹底解説。西村屋本館、三木屋、川口屋リバーサイドホテルの宿泊記とクーポン利用法を網羅。',
    type: 'article',
    url: 'https://croud-travel.pages.dev/furusato-tax-kinosaki-onsen-sotoyu-crab-stay',
  },
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-kinosaki-onsen-sotoyu-crab-stay',
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
            【城崎温泉×ふるさと納税】七田外湯めぐり＆絶品松葉ガニ・但馬牛を味わう名旅館ステイ完全ガイド｜西村屋本館・三木屋・川口屋リバーサイドホテル
          </h1>
          <p className="text-stone-300 text-sm md:text-base max-w-2xl mx-auto pt-2 leading-relaxed">
            開湯1300年の歴史を誇る名湯・城崎温泉の極上旅を楽天ふるさと納税で最大お得に！七田外湯めぐりの風情、文豪・志賀直哉ゆかりの宿、冬の味覚の王様・津居山港産松葉ガニや但馬牛の会席料理を徹底解説。西村屋本館、三木屋、川口屋リバーサイドホテルの宿泊記とクーポン利用法を網羅。
          </p>
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4 text-xs text-stone-400">
            <span>対象自治体: <strong className="text-amber-300">兵庫県豊岡市</strong></span>
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
            大谿川の柳並木と下駄の音、冬の松葉ガニと文学の薫り——城崎温泉で叶える至高のふるさと納税旅
          </h2>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            浴衣に下駄を鳴らし、柳揺れる大谿川沿いをそぞろ歩きながら七つの外湯を巡る——関西随一の情緒を誇る城崎温泉は、開湯1300年を超える由緒正しき湯の街です。街全体を一軒の大きな温泉宿に見立てる「街全体がひとつの宿」という伝統思想が今も息づいており、旅館で浴衣に着替えて街へ繰り出す外湯めぐり体験は、他のどの温泉地とも異なる唯一無二の旅情感を醸し出しています。駅は玄関、道路は廊下、旅館は客室、そして外湯は大浴場。この温かい共同体意識が、旅人を優しく迎え入れてくれます。
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            さらに冬期には、近海・津居山港や柴山港で水揚げされた極上の「松葉ガニ」が解禁され、全国から食通が押し寄せる美食の聖地へと変貌します。幻のブランド牛「但馬牛」のすき焼きや炭火焼き会席とともに味わう旬の味覚は、一生に一度は味わいたい贅沢そのもの。楽天ふるさと納税のトラベルクーポンを活用すれば、豊岡市への寄付を通じて数万円単位の宿泊補助を受けられ、普段は敷居の高い憧れの最高級旅館や老舗文化財宿にお得に滞在できます。
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
            <h3 className="text-lg sm:text-xl font-bold font-serif">兵庫県豊岡市のふるさと納税クーポンをチェック</h3>
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/75399/75399.jpg"
                alt="城崎温泉　西村屋本館"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第1選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 5（口コミ 338件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">兵庫県豊岡市</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  城崎温泉　西村屋本館
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  創業百六十年の歴史が息づく山陰随一の純日本旅館！名匠・平田雅哉棟梁による数寄屋建築と松葉ガニ極上会席
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  城崎温泉 西村屋本館 —— 枯山水の中庭を囲む奇跡の数寄屋建築と、細部まで磨き抜かれたおもてなしの神髄
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 登録有形文化財指定の大広間と庭園美
                    </h5>
                    <p className="text-stone-600 leading-relaxed">安政年間の創業より160余年、城崎温泉の象徴として君臨する西村屋本館。昭和の名工・平田雅哉が手掛けた平田館をはじめ、各客室から眺める手入れの行き届いた日本庭園は息をのむ美しさです。伝統的な数寄屋造りの意匠と静謐な佇まいが、訪れる者を非日常の極みへと誘います。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 津居山港・柴山港から直仕入れの極上松葉ガニ
                    </h5>
                    <p className="text-stone-600 leading-relaxed">冬の西村屋を語る上で欠かせないのが、職人が厳選した最上級の活松葉ガニ。花咲くカニ刺し、炭火で香ばしく焼き上げる焼きガニ、濃厚なカニ味噌甲羅焼き、旨味が溶け出すカニ鍋から締めの雑炊まで、余すところなく堪能できます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 吉の湯・福の湯・尚の湯の三つの館内名湯
                    </h5>
                    <p className="text-stone-600 leading-relaxed">外湯めぐりだけでなく、檜の芳香漂う大浴場「吉の湯」や中国の古瓦・青石をあしらったモダンな「福の湯」、プライベートな「尚の湯」など、館内でも自家源泉の滑らかな湯を心ゆくまで愉しめます。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価5.0点満点を叩き出す究極の名門旅館。隅々まで行き届いた仲居さんの洗練された接客、歴史ある調度品、一品一品が美術品のような料理会席など、宿泊者のほぼ全員が「人生最高の滞在」と絶賛しています。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div>住所: 兵庫県 豊岡市城崎町湯島469</div>
                <div>最寄り駅・アクセス: 【車】北近畿豊岡自動車道　豊岡出石ICより約18分　【電車】城崎温泉駅より徒歩15分（旅館組合無料バス有）</div>
                <div>参考料金: <span className="font-bold text-stone-800">要問い合わせ</span></div>
                <div>ホテル番号: No.75399</div>
              </div>

              {/* アフィリエイト予約ボタン */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D75399"
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/106245/106245.jpg"
                alt="城崎温泉　登録有形文化財の宿　三木屋"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第2選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.76（口コミ 244件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">兵庫県豊岡市</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  城崎温泉　登録有形文化財の宿　三木屋
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  志賀直哉が名作「城の崎にて」を執筆した登録有形文化財の宿！三百坪の日本庭園と洗練の和モダンリノベーション
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  城崎温泉 三木屋 —— 文豪の筆を走らせた静寂の木造建築と、現代の快適性が調和するブック＆ガーデンステイ
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 昭和2年建築の登録有形文化財の風情
                    </h5>
                    <p className="text-stone-600 leading-relaxed">志賀直哉をはじめとする多くの文豪・墨客に愛されてきた三木屋。登録有形文化財に指定された木造3階建ての趣ある回廊や階段の手すり、ガラス窓の歪み一つひとつに大正・昭和初期の温もりが宿ります。志賀直哉が逗留した26号室は当時の姿のまま大切に保存されています。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 三百坪の四季折々の日本庭園を眺める時間
                    </h5>
                    <p className="text-stone-600 leading-relaxed">館内ロビーやラウンジ、多くの客室から望むのは手入れされた広大な日本庭園。春の新緑、夏の深緑、秋の紅葉、冬の雪景色と、移ろう季節を静かに眺めながら過ごす読書時間は格別の贅沢です。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 但馬牛と日本海の旬の幸を繊細な和会席で
                    </h5>
                    <p className="text-stone-600 leading-relaxed">地元・但馬牛を中心とした贅沢なコース仕立ての夕食。冬期には本場の松葉ガニプランも用意され、文豪の愛した特別な空間で滋味深い兵庫の美味を心ゆくまで堪能できます。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.76点。「城の崎にて」の舞台となった26号室の特別感はもちろん、リノベーションされた清潔で洗練された館内、スタッフの温かな気配り、ライブラリーラウンジの居心地の良さに高評価が集中しています。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div>住所: 兵庫県 豊岡市城崎町湯島487</div>
                <div>最寄り駅・アクセス: 城崎温泉駅より徒歩にて１３分</div>
                <div>参考料金: <span className="font-bold text-stone-800">¥28,600〜</span></div>
                <div>ホテル番号: No.106245</div>
              </div>

              {/* アフィリエイト予約ボタン */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D106245"
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/5307/5307.jpg"
                alt="城崎温泉　川口屋城崎リバーサイドホテル"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第3選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.45（口コミ 576件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">兵庫県豊岡市</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  城崎温泉　川口屋城崎リバーサイドホテル
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  大谿川沿いに佇む絶景眺望自慢の本格旅館！多彩な貸切露天風呂と但馬牛・香住ガニの美食饗宴
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  城崎温泉 川口屋城崎リバーサイドホテル —— リバービューの絶好ロケーションと、贅沢なプライベート湯巡り
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 大谿川を望むワイドな客室眺望と便利な立地
                    </h5>
                    <p className="text-stone-600 leading-relaxed">城崎温泉街の中心を流れる大谿川に面し、窓からは柳並木と川の流れを一望できます。駅や外湯街へのアクセスも至便で、外湯めぐりの拠点として抜群のロケーションを誇ります。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 風情溢れる趣の異なる貸切露天風呂
                    </h5>
                    <p className="text-stone-600 leading-relaxed">プライベートな湯浴みを堪能できる貸切露天風呂が充実。家族連れやカップルで気兼ねなく温泉を満喫でき、夜風に吹かれながら星空と湯気を楽しむ贅沢なひとときを過ごせます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 選べる但馬牛ステーキと旬魚舟盛り・カニ料理
                    </h5>
                    <p className="text-stone-600 leading-relaxed">但馬牛の鉄板焼きやしゃぶしゃぶ、そして日本海で獲れた新鮮な海の幸が並ぶ豪華会席。コストパフォーマンスに優れ、ふるさと納税クーポンを適用することで驚くほどリーズナブルに高級宿泊が叶います。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.45点。スタッフの親しみやすい接客、浴衣の無料貸出サービス、駅からの送迎や外湯めぐりへのサポートなど、きめ細やかな配慮と充実した食事内容に多くのリピーターが支持を寄せています。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div>住所: 兵庫県 豊岡市城崎町湯島880-1</div>
                <div>最寄り駅・アクセス: 北近畿豊岡道　但馬空港Ｉ．Ｃより国道９号約２５分。</div>
                <div>参考料金: <span className="font-bold text-stone-800">¥11,550〜</span></div>
                <div>ホテル番号: No.5307</div>
              </div>

              {/* アフィリエイト予約ボタン */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D5307"
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
            城崎温泉 外湯めぐり＆街歩き完全攻略ガイド
          </h2>
          <div className="grid gap-4">

            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/60 space-y-2">
              <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                <span className="text-amber-600">◆</span> 七田外湯めぐりの知っておくべき特徴
              </h3>
              <p className="text-stone-700 text-sm leading-relaxed">城崎には「一の湯」「御所の湯」「曼陀羅湯」「さとの湯」「柳湯」「地蔵湯」「鴻の湯」という7つの外湯が存在します。旅館宿泊客に配布される「外湯めぐりデジタルパス（ゆめぱ）」を使えば、チェックインから翌日チェックアウトまで何回でも無料で入浴可能。野趣あふれる滝を望む露天風呂が人気の「御所の湯」や、合格祈願・開運の「一の湯」は必訪です。</p>
            </div>

            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/60 space-y-2">
              <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                <span className="text-amber-600">◆</span> 松葉ガニの旬（11月上旬〜3月下旬）の選び方
              </h3>
              <p className="text-stone-700 text-sm leading-relaxed">冬の城崎の主役は、日本海で水揚げされるズワイガニの雄「松葉ガニ」。特に津居山港で揚がるカニには青いタグが付けられ、身の甘みとぎっしり詰まった味噌の濃厚さは全国屈指。ふるさと納税クーポンをカニ解禁シーズンに合わせることで、通常1泊7〜10万円を超える極上カニプランの自己負担を大幅に圧縮できます。</p>
            </div>

            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/60 space-y-2">
              <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                <span className="text-amber-600">◆</span> 大谿川沿いの柳並木と浴衣散策の楽しみ方
              </h3>
              <p className="text-stone-700 text-sm leading-relaxed">城崎では、浴衣と下駄で街を歩くことが正装とされます。川沿いにはレトロなカフェ、地ビールスタンド、但馬牛メンチカツや温泉卵の食べ歩きスポットが並び、夜にはガス灯が川面を照らす幻想的な夜景を楽しめます。</p>
            </div>
          </div>
        </section>

        {/* ふるさと納税活用ステップ */}
        <section className="bg-gradient-to-br from-amber-900 via-stone-900 to-stone-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-amber-300 font-semibold">How to Use Coupon</span>
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-amber-50">
              豊岡市ふるさと納税×楽天トラベルクーポン活用手順
            </h2>
            <p className="text-stone-300 text-xs sm:text-sm">
              初めての方でも迷わず利用できる3ステップ。予約済みのプランにも後から適用可能です。
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 text-xs sm:text-sm">

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/10 space-y-2">
              <div className="font-bold text-amber-300 text-sm">Step 1: 豊岡市の返礼品「楽天トラベルクーポン」を獲得</div>
              <p className="text-stone-200 leading-relaxed">楽天ふるさと納税で「兵庫県豊岡市」のトラベルクーポン（寄付額の30%相当補助）を返礼品として申し込みます。寄付完了後、即座に楽天会員アカウントへクーポンが付与されます。</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/10 space-y-2">
              <div className="font-bold text-amber-300 text-sm">Step 2: 寄付日から3年間の有効期間内に予約</div>
              <p className="text-stone-200 leading-relaxed">クーポンの有効期限はたっぷり3年間。冬の松葉ガニシーズンはもちろん、新緑の春や紅葉の秋など、自分の旅行スケジュールに合わせて宿泊日を自由に選べます。</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/10 space-y-2">
              <div className="font-bold text-amber-300 text-sm">Step 3: 楽天トラベルで対象ホテルを予約＆クーポン適用</div>
              <p className="text-stone-200 leading-relaxed">予約確認画面で「ふるさと納税クーポン」を選択するだけで、宿泊代金から即座に寄付控除分が差し引かれます。予約済み後の「あとから適用」にも対応しているため安心です。</p>
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
