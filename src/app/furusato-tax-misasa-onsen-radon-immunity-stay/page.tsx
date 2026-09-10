import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '【三朝温泉×ふるさと納税】世界屈指の高濃度ラドン温泉＆三徳山投入堂！免疫力向上湯治宿完全ガイド｜依山楼岩崎・三朝館・万翆楼',
  description: '「三たび朝を迎えると元気になる」と伝わる世界屈指のラジウム名湯・鳥取県三朝温泉を楽天ふるさと納税でお得に旅する！文豪が愛した十二の庭園風呂「依山楼 岩崎」、千坪の日本庭園露天風呂を誇る「三朝館」、自家源泉掛け流しの名門「万翆楼」を徹底比較。鳥取和牛や松葉ガニ会席、三朝町トラベルクーポン活用術を網羅。',
  keywords: '三朝温泉 ふるさと納税,三朝温泉 ラドン 旅館,依山楼岩崎 ふるさと納税,三朝館 クーポン,三朝町 ふるさと納税 宿泊',
  openGraph: {
    title: '【三朝温泉×ふるさと納税】世界屈指の高濃度ラドン温泉＆三徳山投入堂！免疫力向上湯治宿完全ガイド｜依山楼岩崎・三朝館・万翆楼',
    description: '「三たび朝を迎えると元気になる」と伝わる世界屈指のラジウム名湯・鳥取県三朝温泉を楽天ふるさと納税でお得に旅する！文豪が愛した十二の庭園風呂「依山楼 岩崎」、千坪の日本庭園露天風呂を誇る「三朝館」、自家源泉掛け流しの名門「万翆楼」を徹底比較。鳥取和牛や松葉ガニ会席、三朝町トラベルクーポン活用術を網羅。',
    type: 'article',
    url: 'https://croud-travel.pages.dev/furusato-tax-misasa-onsen-radon-immunity-stay',
  },
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-misasa-onsen-radon-immunity-stay',
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
            【三朝温泉×ふるさと納税】世界屈指の高濃度ラドン温泉＆三徳山投入堂！免疫力向上湯治宿完全ガイド｜依山楼岩崎・三朝館・万翆楼
          </h1>
          <p className="text-stone-300 text-sm md:text-base max-w-2xl mx-auto pt-2 leading-relaxed">
            「三たび朝を迎えると元気になる」と伝わる世界屈指のラジウム名湯・鳥取県三朝温泉を楽天ふるさと納税でお得に旅する！文豪が愛した十二の庭園風呂「依山楼 岩崎」、千坪の日本庭園露天風呂を誇る「三朝館」、自家源泉掛け流しの名門「万翆楼」を徹底比較。鳥取和牛や松葉ガニ会席、三朝町トラベルクーポン活用術を網羅。
          </p>
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4 text-xs text-stone-400">
            <span>対象自治体: <strong className="text-amber-300">鳥取県三朝町</strong></span>
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
            浸かって良し、飲んで良し、吸って良し——世界屈指のラドン温泉・三朝温泉で体験する心身再生の湯治ステイ
          </h2>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            平安時代末期、源義朝の家来・大久保左馬之祐が白狼の命を救ったことから湧き出たと伝わる鳥取県・三朝（みささ）温泉。高濃度のラドンを含有する世界屈指の放射能泉（ラジウム温泉）として世界的に有名で、微量の放射線が細胞を活性化し免疫力や自然治癒力を高める「ホルミシス効果」が科学的にも注目されています。温泉街の中央を流れる三徳川の清流、木造旅館が立ち並ぶノスタルジックな石畳の路地、そして河原に湧く開放感抜群の無料露天風呂「河原風呂」が、訪れる者を優しく迎えます。
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            三朝の湯の真骨頂は、温泉に浸かる「入浴」だけでなく、ラドンガスを肺から取り込む「吸入」、そして胃腸の調子を整える「飲泉」と、三位一体で健康を取り戻せること。さらに近海で獲れた新鮮な松葉ガニやモサエビ、鳥取和牛の贅沢会席が心と体を満たします。鳥取県三朝町へのふるさと納税を利用すれば、30%相当のトラベルクーポンにより名門旅館へお得に宿泊でき、本物の癒やしを実感できる湯治旅が叶います。
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
            <h3 className="text-lg sm:text-xl font-bold font-serif">鳥取県三朝町のふるさと納税クーポンをチェック</h3>
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/5840/5840.jpg"
                alt="三朝温泉　依山楼　岩崎"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第1選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.43（口コミ 2170件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">鳥取県三朝町</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  三朝温泉　依山楼　岩崎
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  創業大正九年・島崎藤村や野口雨情ら文豪が愛した名門！十二の湯船が並ぶ回遊式大庭園風呂「山の湯」
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  三朝温泉 依山楼 岩崎 —— 三朝随一の歴史を誇る老舗旅館。名取の川風を感じる回遊式庭園露天風呂
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 趣の異なる十二の湯船をめぐる回遊式大庭園風呂「山の湯」
                    </h5>
                    <p className="text-stone-600 leading-relaxed">左の湯・右の湯に分かれ、洞窟風呂、ラドン蒸気風呂、寝湯など多彩な湯処を完備。朝夕で男女入れ替えとなり、館内だけで世界屈指のラドン温泉を徹底的に堪能できます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 三徳川を見晴らす伝統の和室と文豪ゆかりの客室
                    </h5>
                    <p className="text-stone-600 leading-relaxed">川のせせらぎが心地よい落ち着いた空間。歴史ある調度品が飾られたロビーラウンジや手入れの行き届いた日本庭園が、優雅な滞在を演出します。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 鳥取和牛や日本海の鮮魚・冬の松葉ガニ会席
                    </h5>
                    <p className="text-stone-600 leading-relaxed">地元の旬の恵みを熟練の技で仕上げた会席料理。冬期には本場の松葉ガニを贅沢に使ったフルコースプランも用意され、食の満足度も抜群です。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.43点、口コミ2100件超。「お風呂の種類が豊富でラドン温泉の効能を実感した」「川沿いの静かなロケーションと丁寧な接客に癒やされた」と絶賛されています。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div>住所: 鳥取県 東伯郡三朝町三朝365-1</div>
                <div>最寄り駅・アクセス: ◆車 中国道院庄IC60分／山陰道泊東郷IC20分 ◆JR 倉吉駅送迎バス14時20分～18時 ※要予約（前日まで）</div>
                <div>参考料金: <span className="font-bold text-stone-800">¥6,050〜</span></div>
                <div>ホテル番号: No.5840</div>
              </div>

              {/* アフィリエイト予約ボタン */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D5840"
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/1939/1939.jpg"
                alt="三朝温泉　三朝館"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第2選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.45（口コミ 2254件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">鳥取県三朝町</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  三朝温泉　三朝館
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  自家源泉から湧き出る毎分数百リットルの名湯！千坪の日本庭園露天風呂と女性に大人気のバラ風呂
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  三朝温泉 三朝館 —— 圧倒的な庭園美と湯量の贅沢。自家源泉のラジウム温泉と鳥取の美食饗宴
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 千坪の広大な日本庭園に広がる名物露天風呂「庭の湯」「滝の湯」
                    </h5>
                    <p className="text-stone-600 leading-relaxed">滝が流れる日本庭園を眺めながら入浴できる大露天風呂。夕暮れ時にはライトアップされ、四季の草木と湯気が織りなす幻想的な景色の中で湯浴みを楽しめます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 毎日15時から女性限定で開催される華やかな「バラ風呂」
                    </h5>
                    <p className="text-stone-600 leading-relaxed">約200輪の生花バラが湯船一面に浮かぶ優雅なお風呂。華やかな香りに包まれながら、極上のリラックスタイムを過ごせます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 鳥取県産和牛オレイン55と季節の海鮮会席
                    </h5>
                    <p className="text-stone-600 leading-relaxed">口溶けの良い脂が特徴のブランド牛「鳥取和牛オレイン55」の陶板焼きや、近海で揚がる旬魚のお造りなど、地産地消の贅沢な夕食を提供しています。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.45点、口コミ2200件超。「庭園露天風呂の広さと雰囲気が最高」「バラ風呂がとても優雅で料理も美味しかった」と女性客やカップルから大人気です。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div>住所: 鳥取県 東伯郡三朝町山田174</div>
                <div>最寄り駅・アクセス: 中国道院庄ＩＣ下車、国道１７９号利用７０分／倉吉駅～三朝温泉行バスにて約２０分・タクシーで約１５分</div>
                <div>参考料金: <span className="font-bold text-stone-800">¥10,395〜</span></div>
                <div>ホテル番号: No.1939</div>
              </div>

              {/* アフィリエイト予約ボタン */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D1939"
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/5608/5608.jpg"
                alt="三朝薬師の湯　万翆楼"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第3選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.4（口コミ 881件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">鳥取県三朝町</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  三朝薬師の湯　万翆楼
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  自家源泉掛け流しの贅沢な湯宿！三徳川のせせらぎを聞く落ち着いた空間と熟練職人による本格会席
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  三朝薬師の湯 万翆楼 —— 木造美と現代の快適性が調和。上質な湯治を叶える大人の隠れ宿
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 一切の加水・循環を行わない自家源泉100％掛け流し
                    </h5>
                    <p className="text-stone-600 leading-relaxed">三朝温泉でも希少な自家源泉掛け流しの湯船。湧き出たばかりの新鮮なラドン温泉が注がれ、湯上がりの肌が驚くほど潤う本物の名湯を実感できます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 三徳川沿いに佇む静かなロケーションと和モダン客室
                    </h5>
                    <p className="text-stone-600 leading-relaxed">全客室が落ち着いた和の設え。窓からは三徳川の流れや三朝の山並みを望み、鳥のさえずりと川の音を聞きながら静寂の時間を過ごせます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 器と盛り付けにこだわった極上の四季創作会席
                    </h5>
                    <p className="text-stone-600 leading-relaxed">料理長が一皿一皿に真心を込めた会席ディナー。鳥取のブランド食材を繊細な味わいで仕立て、特別な記念日の夜を華やかに彩ります。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.40点。「掛け流しの温泉の泉質が素晴らしく体が軽くなった」「お料理がとても繊細で美しく、スタッフの心遣いに感謝」と高評価です。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div>住所: 鳥取県 東伯郡三朝町山田5</div>
                <div>最寄り駅・アクセス: ＪＲ倉吉駅より車で15分　中国自動車道院庄ＩＣより60分　米子自動車道湯原ICより50分</div>
                <div>参考料金: <span className="font-bold text-stone-800">¥7,700〜</span></div>
                <div>ホテル番号: No.5608</div>
              </div>

              {/* アフィリエイト予約ボタン */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D5608"
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
            三朝温泉街のレトロ散歩＆日本遺産・三徳山投入堂観光ガイド
          </h2>
          <div className="grid gap-4">

            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/60 space-y-2">
              <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                <span className="text-amber-600">◆</span> 日本一危険な国宝「三徳山三仏寺 投入堂」の参拝登山
              </h3>
              <p className="text-stone-700 text-sm leading-relaxed">標高約900mの断崖絶壁に忽然と建つ国宝「投入堂」。役行者が法力で投げ入れたと伝わる奇跡の木造建築で、険しい山道を登った者だけが出会える神秘の聖地です。</p>
            </div>

            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/60 space-y-2">
              <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                <span className="text-amber-600">◆</span> 温泉本通りのレトロ遊技場（射的・スマートボール）と足湯めぐり
              </h3>
              <p className="text-stone-700 text-sm leading-relaxed">昭和レトロな街並みが残る温泉本通り。昔懐かしい射的場やスマートボール屋で遊び、名物の「栃餅」を味わいながら「株湯」や「薬師の湯」などの足湯・飲泉場を巡るのが定番です。</p>
            </div>

            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/60 space-y-2">
              <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                <span className="text-amber-600">◆</span> 三徳川の「河原風呂」と夜のホタル観賞
              </h3>
              <p className="text-stone-700 text-sm leading-relaxed">三徳川の河川敷にある無料の混浴露天風呂「河原風呂」。川のせせらぎを間近に感じる開放感満点の入浴が名物です。初夏には三徳川沿いに無数のホタルが舞う幻想的な光景が広がります。</p>
            </div>
          </div>
        </section>

        {/* ふるさと納税活用ステップ */}
        <section className="bg-gradient-to-br from-amber-900 via-stone-900 to-stone-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-amber-300 font-semibold">How to Use Coupon</span>
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-amber-50">
              鳥取県三朝町ふるさと納税×楽天トラベルクーポン活用手順
            </h2>
            <p className="text-stone-300 text-xs sm:text-sm">
              初めての方でも迷わず利用できる3ステップ。予約済みのプランにも後から適用可能です。
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 text-xs sm:text-sm">

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/10 space-y-2">
              <div className="font-bold text-amber-300 text-sm">Step 1: 楽天ふるさと納税で「鳥取県三朝町」のクーポンを獲得</div>
              <p className="text-stone-200 leading-relaxed">楽天ふるさと納税で「三朝町」のトラベルクーポン（寄付額の30%相当補助）を返礼品として申し込みます。寄付完了と同時にアカウントへクーポンが付与されます。</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/10 space-y-2">
              <div className="font-bold text-amber-300 text-sm">Step 2: 3年間の有効期間内で湯治・健康旅行をじっくり計画</div>
              <p className="text-stone-200 leading-relaxed">クーポンの有効期限は発行から3年間。冬の松葉ガニシーズンや春の新緑、秋の三徳山登山など、希望の季節に合わせて自由に予約できます。</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/10 space-y-2">
              <div className="font-bold text-amber-300 text-sm">Step 3: 楽天トラベル予約画面でクーポン割引を適用</div>
              <p className="text-stone-200 leading-relaxed">依山楼岩崎、三朝館、万翆楼などの対象宿を予約する際、確認画面でクーポンを選択。宿泊代金から30%相当額がダイレクトに値引きされます。</p>
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
              <Link href="/furusato-tax-hakone-sengokuhara-pampas-luxury-stay" className="hover:text-amber-800 underline flex items-center gap-1.5 py-1">
                <span>▸</span> 箱根仙石原温泉 すすき草原＆美肌にごり湯特集
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
