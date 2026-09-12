import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '【嬉野温泉×ふるさと納税】日本三大美肌の湯＆名物とろける温泉湯豆腐！茶香る歴史宿完全ガイド｜和多屋別荘・大正屋・茶心の宿和楽園',
  description: '日本三大美肌の湯として名高い佐賀県・嬉野温泉を楽天ふるさと納税でお得に旅する！二万坪の広大な敷地を誇る「和多屋別荘」、吉村順三設計の美学が光る大正十四年創業の名門「大正屋」、日本初のお茶風呂を愉しむ「茶心の宿 和楽園」を徹底比較。とろける温泉湯豆腐・佐賀牛会席・嬉野市トラベルクーポン活用術を網羅。',
  keywords: '嬉野温泉 ふるさと納税,嬉野温泉 美肌 旅館,和多屋別荘 ふるさと納税,大正屋 嬉野 クーポン,嬉野市 ふるさと納税 宿泊',
  openGraph: {
    title: '【嬉野温泉×ふるさと納税】日本三大美肌の湯＆名物とろける温泉湯豆腐！茶香る歴史宿完全ガイド｜和多屋別荘・大正屋・茶心の宿和楽園',
    description: '日本三大美肌の湯として名高い佐賀県・嬉野温泉を楽天ふるさと納税でお得に旅する！二万坪の広大な敷地を誇る「和多屋別荘」、吉村順三設計の美学が光る大正十四年創業の名門「大正屋」、日本初のお茶風呂を愉しむ「茶心の宿 和楽園」を徹底比較。とろける温泉湯豆腐・佐賀牛会席・嬉野市トラベルクーポン活用術を網羅。',
    type: 'article',
    url: 'https://croud-travel.pages.dev/furusato-tax-ureshino-onsen-bihada-tofu-stay',
  },
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-ureshino-onsen-bihada-tofu-stay',
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
            【嬉野温泉×ふるさと納税】日本三大美肌の湯＆名物とろける温泉湯豆腐！茶香る歴史宿完全ガイド｜和多屋別荘・大正屋・茶心の宿和楽園
          </h1>
          <p className="text-stone-300 text-sm md:text-base max-w-2xl mx-auto pt-2 leading-relaxed">
            日本三大美肌の湯として名高い佐賀県・嬉野温泉を楽天ふるさと納税でお得に旅する！二万坪の広大な敷地を誇る「和多屋別荘」、吉村順三設計の美学が光る大正十四年創業の名門「大正屋」、日本初のお茶風呂を愉しむ「茶心の宿 和楽園」を徹底比較。とろける温泉湯豆腐・佐賀牛会席・嬉野市トラベルクーポン活用術を網羅。
          </p>
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4 text-xs text-stone-400">
            <span>対象自治体: <strong className="text-amber-300">佐賀県嬉野市</strong></span>
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
            化粧水に浸かるようなトロトロの湯ざわり、朝食名物「温泉湯豆腐」の感動——嬉野温泉で叶える至高の美肌リトリート
          </h2>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            島根の斐乃上温泉、栃木の喜連川温泉とともに「日本三大美肌の湯」と称される佐賀県・嬉野温泉。ナトリウム炭酸水素塩・塩化物泉の泉質は、皮膚の余分な角質をやさしく洗い流し、水分をたっぷり補給してしっとりすべすべに仕上げる天然の美容液そのものです。嬉野川を挟んで広がる温泉街には、お茶の産地ならではの茶畑の緑が広がり、温泉の香りと香ばしい嬉野茶の香りが漂う穏やかな空気に包まれています。
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            嬉野温泉の朝のハイライトといえば、名物「温泉湯豆腐」。アルカリ性の温泉水で豆腐をコトコト煮込むことで、豆腐の角が溶け出し、スープが白濁してトロトロの口当たりに変化する奇跡の郷土料理です。さらに夕食には、全国トップクラスの肉質を誇るブランド牛「佐賀牛」のすき焼きやステーキ。佐賀県嬉野市へのふるさと納税を利用すれば、30%相当のトラベルクーポンにより名門温泉旅館へお得に滞在でき、心もお肌も潤う贅沢な休日が実現します。
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
            <h3 className="text-lg sm:text-xl font-bold font-serif">佐賀県嬉野市のふるさと納税クーポンをチェック</h3>
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/40527/40527.jpg"
                alt="嬉野温泉　和多屋別荘"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第1選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.14（口コミ 1328件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">佐賀県嬉野市</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  嬉野温泉　和多屋別荘
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  嬉野川沿い二万坪の壮大な日本庭園！世界的建築家・黒川紀章設計のタワー棟と三光の湯で愉しむ極上リゾート
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  嬉野温泉 和多屋別荘 —— 二万坪の大空間に広がるカルチャーと美肌湯。アートと伝統が交差する大型名宿
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 嬉野川のせせらぎを望む大浴場「御影殿」と露天風呂
                    </h5>
                    <p className="text-stone-600 leading-relaxed">美肌の湯が贅沢に注がれる広大な大浴場。御影石と檜をふんだんに使った湯処で、トロトロとした至極の泉質を全身で堪能できます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 二万坪の敷地に点在する足湯ラウンジやブックカフェ
                    </h5>
                    <p className="text-stone-600 leading-relaxed">「BOOKS & TEA 三服」をはじめ、嬉野茶を味わいながら読書を楽しめる洗練されたラウンジ。川沿いのテラス足湯でのんびりと憩えます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 佐賀牛のステーキや伝統会席を味わう選べるダイニング
                    </h5>
                    <p className="text-stone-600 leading-relaxed">ミシュラン掲載の日本料理店や佐賀牛専門レストランなど、多彩な食のスタイル。素材本来の旨味を極限まで引き出したディナーが楽しめます。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.14点、口コミ1300件超。「広大な館内の雰囲気が素晴らしい」「お湯が本当に化粧水のようで、お茶のカフェラウンジも居心地最高だった」と高い満足度を獲得しています。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div>住所: 佐賀県 嬉野市嬉野町下宿乙738</div>
                <div>最寄り駅・アクセス: JR嬉野温泉駅から車で5分/長崎自動車道 嬉野ICより約5分</div>
                <div>参考料金: <span className="font-bold text-stone-800">¥9,900〜</span></div>
                <div>ホテル番号: No.40527</div>
              </div>

              {/* 予約プラン確認ボタン */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D40527"
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/19923/19923.jpg"
                alt="嬉野温泉　大正屋"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第2選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.46（口コミ 1253件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">佐賀県嬉野市</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  嬉野温泉　大正屋
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  大正十四年創業・名建築家・吉村順三が手掛けた美の殿堂！四季の庭園と滝の湯・元祖とろける温泉湯豆腐
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  嬉野温泉 大正屋 —— 皇族も逗留した嬉野最高峰の老舗。手入れの行き届いた日本庭園と洗練のおもてなし
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 名建築家・吉村順三が設計した光と木が調和する空間
                    </h5>
                    <p className="text-stone-600 leading-relaxed">昭和から平成にかけて増改築を重ねた美しい和風モダン建築。自然の緑を巧みに取り入れた窓や廊下の意匠が、静謐で上質な時間を紡ぎ出します。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 庭園の滝を眺めながら入浴する大浴場「四季の湯」「滝の湯」
                    </h5>
                    <p className="text-stone-600 leading-relaxed">吹き抜けの高い天井とガラス張りの大浴場。目の前に流れる滝と手入れされた庭園を眺めながら、極上の美肌温泉に浸かる贅沢な時間が流れます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 元祖「大正屋特製どうふ」の朝食と最高級佐賀牛会席
                    </h5>
                    <p className="text-stone-600 leading-relaxed">専用工場で作られる自慢の豆腐を温泉水で煮込んだ朝の温泉湯豆腐。夕食にはA5ランク佐賀牛や有明海の海の幸を取り入れた正統派日本料理を味わえます。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.46点、口コミ1200件超。「建物の美しさと清潔感、スタッフの洗練された所作に感動した」「朝の湯豆腐の美味しさは一生忘れられない」と絶賛されています。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div>住所: 佐賀県 嬉野市嬉野町下宿乙2276-1　</div>
                <div>最寄り駅・アクセス: 西九州新幹線嬉野温泉駅よりタクシー約5分／九州長崎自動車道 嬉野ICより約10分/ 博多駅交通センターより高速バス2時間</div>
                <div>参考料金: <span className="font-bold text-stone-800">¥13,915〜</span></div>
                <div>ホテル番号: No.19923</div>
              </div>

              {/* 予約プラン確認ボタン */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D19923"
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/52858/52858.jpg"
                alt="嬉野温泉　茶心の宿　和楽園"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第3選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.33（口コミ 640件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">佐賀県嬉野市</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  嬉野温泉　茶心の宿　和楽園
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  日本初！特産うれしの茶を贅沢に浮かべた名物「緑茶風呂」！お茶の香りと美肌温泉の至福コラボレーション
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  嬉野温泉 茶心の宿 和楽園 —— お茶をテーマにした癒しの宿。緑茶露天風呂とお茶すり体験・特選佐賀牛会席
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 大きな茶つぼからお茶のエキスが注ぐ名物「緑茶風呂」
                    </h5>
                    <p className="text-stone-600 leading-relaxed">嬉野特産の高級緑茶を温泉に浸したユニークなお風呂。カテキンの殺菌作用とビタミンCの美白効果が美肌温泉と合わさり、極上の肌触りを実現しています。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> お茶パックで全身をパッティングする贅沢な湯浴み
                    </h5>
                    <p className="text-stone-600 leading-relaxed">湯船の脇に用意された特製のお茶パック。顔や体に優しく当てることで、豊かなお茶の香りに包まれながらリフレッシュできます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> うれしの茶を使った創作料理と佐賀牛のしゃぶしゃぶ
                    </h5>
                    <p className="text-stone-600 leading-relaxed">お茶の葉を天ぷらや出汁に活用した独自の創作会席。柔らかくとろける佐賀牛とともに、嬉野ならではの食の魅力を満喫できます。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.33点。「お茶風呂の香りがとても良く肌がツルツルになった」「お茶の演出が随所にあり料理も美味しく大満足」と女性やカップルから大好評です。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div>住所: 佐賀県 嬉野市嬉野町下野甲33</div>
                <div>最寄り駅・アクセス: ＪＲ　嬉野温泉駅より車で約５分／長崎自動車道　嬉野ＩＣより約５分</div>
                <div>参考料金: <span className="font-bold text-stone-800">¥8,900〜</span></div>
                <div>ホテル番号: No.52858</div>
              </div>

              {/* 予約プラン確認ボタン */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D52858"
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
            嬉野温泉街の足湯散歩＆茶畑・肥前吉田焼観光ガイド
          </h2>
          <div className="grid gap-4">

            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/60 space-y-2">
              <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                <span className="text-amber-600">◆</span> シーボルトの湯と湯宿広場の「足湯・足蒸し湯」
              </h3>
              <p className="text-stone-700 text-sm leading-relaxed">大正ロマンを感じさせる洋館風の共同浴場「シーボルトの湯」。温泉街中心の「湯宿広場」では、全国的にも珍しい温泉蒸気を使った「足蒸し湯」を無料で体験できます。</p>
            </div>

            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/60 space-y-2">
              <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                <span className="text-amber-600">◆</span> 嬉野茶畑の茶空間「茶室テラス」での絶景ティータイム
              </h3>
              <p className="text-stone-700 text-sm leading-relaxed">緑豊かな茶畑の中に設けられたプライベートな屋外茶室テラス「茶空間」。専属の茶農家が淹れる最高級の嬉野茶を、絶景を眺めながら味わう非日常の体験が人気です。</p>
            </div>

            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/60 space-y-2">
              <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                <span className="text-amber-600">◆</span> 肥前吉田焼の窯元めぐりと有田焼への立ち寄り
              </h3>
              <p className="text-stone-700 text-sm leading-relaxed">嬉野温泉から車で約10分の「肥前吉田焼」の窯元群。素朴でモダンな器を探す陶器市やショップ巡りが楽しめます。日本屈指の陶磁器の街・有田や伊万里へのドライブにも最適です。</p>
            </div>
          </div>
        </section>

        {/* ふるさと納税活用ステップ */}
        <section className="bg-gradient-to-br from-amber-900 via-stone-900 to-stone-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-amber-300 font-semibold">How to Use Coupon</span>
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-amber-50">
              佐賀県嬉野市ふるさと納税×楽天トラベルクーポン活用手順
            </h2>
            <p className="text-stone-300 text-xs sm:text-sm">
              初めての方でも迷わず利用できる3ステップ。予約済みのプランにも後から適用可能です。
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 text-xs sm:text-sm">

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/10 space-y-2">
              <div className="font-bold text-amber-300 text-sm">Step 1: 楽天ふるさと納税で「佐賀県嬉野市」のクーポンを獲得</div>
              <p className="text-stone-200 leading-relaxed">楽天ふるさと納税で「嬉野市」のトラベルクーポン（寄付額の30%相当補助）を返礼品として申し込みます。寄付完了と同時にアカウントへクーポンが付与されます。</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/10 space-y-2">
              <div className="font-bold text-amber-300 text-sm">Step 2: 3年間の有効期間内で美肌温泉旅行をじっくり計画</div>
              <p className="text-stone-200 leading-relaxed">クーポンの有効期限は発行から3年間。新茶が香る春や、温泉が恋しい冬、秋の味覚シーズンなど、希望の日程に合わせて自由に予約できます。</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/10 space-y-2">
              <div className="font-bold text-amber-300 text-sm">Step 3: 楽天トラベル予約画面でクーポン割引を適用</div>
              <p className="text-stone-200 leading-relaxed">和多屋別荘、大正屋、和楽園などの対象宿を予約する際、確認画面でクーポンを選択。宿泊代金から30%相当額がダイレクトに値引きされます。</p>
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
