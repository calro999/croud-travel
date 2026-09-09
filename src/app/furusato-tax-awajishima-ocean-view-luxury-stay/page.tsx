import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '朝日と海の絶景インフィニティ温泉！淡路島の全室オーシャンビュー名門宿＆極上淡路牛・天然鯛会席×ふるさと納税完全攻略ガイド【2026年最新】ホテルニューアワジ・夢海游・グランシャリオ',
  description: '御食国（みけつくに）の豊かな美味と大阪湾・紀淡海峡のパノラマ！兵庫県淡路島。「ホテルニューアワジ」「夢海游 淡路島」「GRAND CHARIOT 北斗七星135°」を、兵庫県洲本市・淡路市の楽天ふるさと納税トラベルクーポンで実質2,000円負担で予約する完全ガイド。棚田状インフィニティ露天風呂、極上淡路牛ステーキ、天然鯛・鱧会席を満喫。',
  keywords: [
    'ふるさと納税 旅行',
    'ふるさと納税 温泉',
    '淡路島 オーシャンビュー＆淡路牛宿特集',
    '楽天ふるさと納税 トラベル',
    '洲本温泉　ホテルニューアワジ　＜淡路島＞',
    '洲本温泉　夢海游　淡路島',
    'グランシャリオ北斗七星１３５°＜淡路島＞',
    '高級温泉旅館',
    '源泉かけ流し',
    '実質2000円'
  ],
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-awajishima-ocean-view-luxury-stay',
  },
  openGraph: {
    title: '朝日と海の絶景インフィニティ温泉！淡路島の全室オーシャンビュー名門宿＆極上淡路牛・天然鯛会席×ふるさと納税完全攻略ガイド【2026年最新】ホテルニューアワジ・夢海游・グランシャリオ',
    description: '御食国（みけつくに）の豊かな美味と大阪湾・紀淡海峡のパノラマ！兵庫県淡路島。「ホテルニューアワジ」「夢海游 淡路島」「GRAND CHARIOT 北斗七星135°」を、兵庫県洲本市・淡路市の楽天ふるさと納税トラベルクーポンで実質2,000円負担で予約する完全ガイド。棚田状インフィニティ露天風呂、極上淡路牛ステーキ、天然鯛・鱧会席を満喫。',
    url: 'https://croud-travel.pages.dev/furusato-tax-awajishima-ocean-view-luxury-stay',
    siteName: '旅行とホテル・ふるさと納税の総合ポータル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function FurusatoAwajishimaOceanStayPage() {
  return (
    <article className="max-w-5xl mx-auto px-4 py-8 text-gray-800 leading-relaxed font-sans">
      {/* パンくずリスト */}
      <nav className="text-sm text-gray-500 mb-6 flex flex-wrap items-center gap-1.5" aria-label="Breadcrumb">
        <Link href="/" className="hover:underline hover:text-amber-700">ホーム</Link>
        <span>&gt;</span>
        <Link href="/travel-savings-guide" className="hover:underline hover:text-amber-700">ふるさと納税トラベル完全攻略ガイド</Link>
        <span>&gt;</span>
        <span className="text-gray-800 font-semibold">淡路島 オーシャンビュー＆淡路牛宿特集</span>
      </nav>

      {/* ヘッダー */}
      <header className="mb-10 pb-6 border-b border-gray-200">
        <div className="inline-block bg-gradient-to-r from-amber-600 to-amber-800 text-white text-xs md:text-sm font-bold px-3 py-1 rounded-full mb-3 shadow-sm">
          神話の島・御食国の極上リゾート！兵庫県淡路島特集
        </div>
        <h1 className="text-2xl md:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight mb-4">
          朝日と海の絶景インフィニティ温泉！淡路島の全室オーシャンビュー名門宿＆極上淡路牛・天然鯛会席×ふるさと納税完全攻略ガイド【2026年最新】ホテルニューアワジ・夢海游・グランシャリオ
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-xs md:text-sm text-gray-500">
          <time dateTime="2026-09-10">2026年9月10日公開</time>
          <span>•</span>
          <span className="bg-amber-100 text-amber-900 px-2 py-0.5 rounded font-medium">楽天トラベル公式API連携</span>
          <span>•</span>
          <span className="bg-green-100 text-green-900 px-2 py-0.5 rounded font-medium">実質負担2,000円対象</span>
        </div>
      </header>

      {/* リード文ブロック */}
      <section className="bg-gradient-to-br from-amber-50/70 via-orange-50/40 to-yellow-50/60 p-6 md:p-8 rounded-2xl border border-amber-200/80 mb-12 shadow-sm">
        <h2 className="text-xl md:text-2xl font-bold text-amber-950 mb-4 flex items-center gap-2">
          <span className="text-2xl">✨</span>
          水平線から昇る神々しい朝陽、紀淡海峡の波音。古の御食国・淡路島で味わう絶景温泉と極上山海ステイへ
        </h2>
        <p className="text-base md:text-lg text-gray-800 leading-relaxed mb-6">
          本州と四国の間に位置し、国生み神話の舞台として知られる兵庫県「淡路島（あわじしま）」。神戸や大阪から明石海峡大橋を渡ってわずか1時間前後という抜群のアクセスを誇り、関西を代表する大人気リゾートアイランドです。淡路島東海岸の洲本温泉は、目の前にどこまでも広がる紀淡海峡と大阪湾のパノラマビューが最大の自慢。海と空が一体化するインフィニティ露天風呂や、棚田のように広がる絶景大浴場に浸かり、水平線から昇る黄金の朝陽を眺める瞬間は息を呑む感動を呼び起こします。さらに淡路島は、古代より朝廷に御食材を献上してきた「御食国（みけつくに）」としての歴史を持つ食の宝庫。神戸ビーフや松阪牛の素牛として知られる最高峰の黒毛和牛「淡路牛（淡路ビーフ）」の霜降りステーキ、激しい鳴門海峡の潮流に揉まれて身が引き締まった「淡路島天然真鯛」、夏の風物詩である「淡路島鱧（はも）」のしゃぶしゃぶやすき鍋、そして甘み際立つ名物淡路島玉ねぎなど、贅を尽くした山海の幸が食卓に並びます。本特集では、全室オーシャンビューと棚田状の絶景露天風呂「淡路棚田の湯」が全国的な知名度を誇る象徴的リゾート「洲本温泉 ホテルニューアワジ」、白砂青松の大浜海岸に隣接し森と海の2つのスパが人気の「洲本温泉 夢海游 淡路島」、そして淡路島の大自然の丘陵に繭型コクーン客室が点在し満天の星と最高級淡路ビーフを味わうグランピング「GRAND CHARIOT 北斗七星135°」の3宿を厳選。兵庫県洲本市・淡路市への楽天ふるさと納税トラベルクーポン（寄付額の最大30％割引・有効期限3年）を活用して、実質自己負担2,000円で憧れの淡路島リゾート旅をお得に予約しましょう。
        </p>
        <div className="bg-white/90 rounded-xl p-4 md:p-5 border border-amber-300 shadow-sm">
          <h3 className="font-bold text-amber-900 text-sm md:text-base mb-2 flex items-center gap-1.5">
            <span>📌</span> なぜ「ふるさと納税×楽天トラベル」が選ばれているのか？
          </h3>
          <ul className="text-xs md:text-sm text-gray-700 space-y-1.5">
            <li className="flex items-start gap-1">
              <span className="text-amber-600 font-bold">✔</span>
              <span><strong>寄付額の最大30％が宿泊クーポンとして即時付与</strong>され、楽天ポイントも二重に貯まる</span>
            </li>
            <li className="flex items-start gap-1">
              <span className="text-amber-600 font-bold">✔</span>
              <span><strong>有効期限はたっぷり3年間！</strong>寄付後に旅行時期や部屋タイプをじっくり選べる安心設計</span>
            </li>
            <li className="flex items-start gap-1">
              <span className="text-amber-600 font-bold">✔</span>
              <span>予約済み日程への<strong>「あとからクーポン適用」</strong>にも対応（※条件あり）で直前でも安心</span>
            </li>
          </ul>
        </div>
      </section>

      {/* 目次 */}
      <section className="bg-gray-50 rounded-xl p-5 mb-12 border border-gray-200">
        <h2 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
          <span>📑</span> 目次
        </h2>
        <ol className="list-decimal list-inside space-y-2 text-sm text-gray-700">
          <li><a href="#three-points" className="text-amber-800 hover:underline font-medium">淡路島 オーシャンビュー＆淡路牛宿特集が選ばれる3つの理由</a></li>
          <li><a href="#hotel-1" className="text-amber-800 hover:underline font-medium">【第1選】洲本温泉　ホテルニューアワジ　＜淡路島＞</a></li>
          <li><a href="#hotel-2" className="text-amber-800 hover:underline font-medium">【第2選】洲本温泉　夢海游　淡路島</a></li>
          <li><a href="#hotel-3" className="text-amber-800 hover:underline font-medium">【第3選】グランシャリオ北斗七星１３５°＜淡路島＞</a></li>
          <li><a href="#furusato-step" className="text-amber-800 hover:underline font-medium">実質自己負担2,000円で予約する簡単4ステップ手順</a></li>
          <li><a href="#faq" className="text-amber-800 hover:underline font-medium">よくある質問（Q&A）</a></li>
        </ol>
      </section>

      {/* 3つの魅力セクション */}
      <section id="three-points" className="mb-14">
        <h2 className="text-xl md:text-3xl font-extrabold text-gray-900 mb-6 pb-2 border-b-2 border-amber-600 flex items-center gap-2">
          <span>🌟</span> 淡路島 オーシャンビュー＆淡路牛宿特集が選ばれる3つの理由
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <span className="text-3xl font-black text-amber-600 block mb-2">01</span>
            <h3 className="font-bold text-gray-900 text-lg mb-3 leading-snug">紀淡海峡を一望するインフィニティ露天風呂！水平線から昇る感動の朝陽</h3>
            <p className="text-sm text-gray-600 leading-relaxed">海と湯船が一体になる絶景の湯浴み。洲本温泉の良質な湯に浸かりながら、刻一刻と表情を変える海と空のグラデーションを満喫できます。</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <span className="text-3xl font-black text-amber-600 block mb-2">02</span>
            <h3 className="font-bold text-gray-900 text-lg mb-3 leading-snug">御食国の誇り！ブランド黒毛和牛「淡路牛」と天然真鯛・鱧の贅沢グルメ</h3>
            <p className="text-sm text-gray-600 leading-relaxed">極上の肉質を誇る淡路牛ステーキや、淡路島天然鯛の宝楽焼、夏期限定の淡路島鱧すき鍋など、新鮮な海と大地の味覚を堪能。</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <span className="text-3xl font-black text-amber-600 block mb-2">03</span>
            <h3 className="font-bold text-gray-900 text-lg mb-3 leading-snug">洲本市・淡路市ふるさと納税で最大30％OFF！3年間有効クーポンで記念日や週末旅に最適</h3>
            <p className="text-sm text-gray-600 leading-relaxed">京阪神から気軽に行ける淡路島リゾートもふるさと納税なら実質自己負担2,000円。寄付から3年間有効なので、連休や記念日に合わせて計画できます。</p>
          </div>
        </div>
      </section>

      {/* 宿紹介 1 */}
      <section id="hotel-1" className="mb-16 bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
        <div className="bg-gradient-to-r from-amber-700 to-amber-900 text-white p-4 md:p-6">
          <span className="bg-amber-500 text-white text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider mb-2 inline-block">厳選名宿 第1選</span>
          <h2 className="text-xl md:text-3xl font-bold leading-tight mb-2">
            洲本温泉　ホテルニューアワジ　＜淡路島＞
          </h2>
          <p className="text-xs md:text-sm text-amber-100">兵庫県洲本市・全室オーシャンビュー！紀淡海峡と一体になる棚田状露天風呂「淡路棚田の湯」＆名物淡路牛・海の幸会席（口コミ2,600件超）</p>
        </div>
        <div className="p-6 md:p-8">
          <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600 bg-gray-50 p-4 rounded-xl">
            <div><strong>所在地:</strong> 兵庫県洲本市小路谷20番地</div>
            <div><strong>アクセス:</strong> 車：洲本ICから15分／高速バス：大阪120分・三宮80分で洲本BCへ（洲本BCから無料の送迎バス有）</div>
            <div><strong>楽天評価:</strong> <span className="text-amber-600 font-bold text-base">★ 4.64</span> (2647件)</div>
            <div><strong>参考価格:</strong> 1名あたり約14,850円〜</div>
          </div>
          <p className="text-base text-gray-800 leading-relaxed mb-6">淡路島東海岸の洲本温泉に位置し、関西を代表する知名度と満足度を誇る老舗大型温泉リゾートホテル。全客室がオーシャンビューとなっており、バルコニーや窓から雄大な海のパノラマと心地よい潮風を感じることができます。宿の代名詞は、棚田を模したダイナミックな三段湯船が広がる露天風呂「淡路棚田の湯」と、木造の趣あふれる「くにうみの湯」。2つの異なる自家源泉「洲本温泉」と「古茂江温泉」を贅沢に引き湯しています。夕食は御食国の恵みを凝縮した豪華会席。極上の淡路牛ステーキや淡路島近海で獲れた天然真鯛、夏の鱧や冬の三年とらふぐなど、四季折々の絶品料理をお部屋食でゆったりと堪能できます。</p>
          <div className="hotel-special-wrapper">
            <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded-r-xl mb-6 text-sm text-amber-950">
              <strong className="block mb-1 font-bold">宿のこだわり・特徴:</strong>
              全客室が朝陽＆海景。三つの湯処＆二つの源泉巡り。御食国の山海の幸・淡路牛をお部屋やダイニングで堪能
            </div>
          </div>
          <div className="user-review-wrapper">
            <blockquote className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-xl mb-6 text-xs md:text-sm text-gray-700 italic">
              <strong>宿泊者の声:</strong> “高齢の家族とゆったり過ごせたお祝い旅行御祝いで利用しました。高齢なので大きな施設でゆったりすごせました。クチコミの詳細はこちらから　https://review.travel.rakute…　2026-09-05 16:39:17投稿 つづきはこちら”
            </blockquote>
          </div>
          <div className="pt-2">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D7956%26f_flg%3DPLAN"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-700 hover:to-amber-700 text-white font-bold px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all text-sm md:text-base w-full sm:w-auto"
            >
              <span>♨</span>
              <span>楽天トラベルでプラン詳細・空室・ふるさと納税クーポンを見る</span>
            </a>
          </div>
        </div>
      </section>

      {/* 宿紹介 2 */}
      <section id="hotel-2" className="mb-16 bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
        <div className="bg-gradient-to-r from-amber-700 to-amber-900 text-white p-4 md:p-6">
          <span className="bg-amber-500 text-white text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider mb-2 inline-block">厳選名宿 第2選</span>
          <h2 className="text-xl md:text-3xl font-bold leading-tight mb-2">
            洲本温泉　夢海游　淡路島
          </h2>
          <p className="text-xs md:text-sm text-amber-100">兵庫県洲本市・名所大浜海岸目前の絶好ロケーション！離れスパ「海音の森」と淡路牛ステーキ・旬魚バイキング（夢海游 淡路島）</p>
        </div>
        <div className="p-6 md:p-8">
          <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600 bg-gray-50 p-4 rounded-xl">
            <div><strong>所在地:</strong> 兵庫県洲本市山手1-1-50</div>
            <div><strong>アクセス:</strong> 車：洲本ICから10分／高速バス：大阪120分・三宮80分で洲本BCへ</div>
            <div><strong>楽天評価:</strong> <span className="text-amber-600 font-bold text-base">★ 4.41</span> (2385件)</div>
            <div><strong>参考価格:</strong> 1名あたり約8,250円〜</div>
          </div>
          <p className="text-base text-gray-800 leading-relaxed mb-6">白砂青松が広がる大浜海水浴場のすぐ目の前に佇み、ビーチリゾートの開放感と日本旅館の温かなおもてなしが融合した温泉ホテル。館内には海を望む大浴場「森のSPA」と、木々の緑に囲まれた「渚のSPA」という2つの湯処があり、滞在中に優雅な湯巡りが楽しめます。客室はモダンな和みフロアや展望風呂付き客室が揃い、カップルからファミリーまで快適。夕食はオープンキッチンのダイニングにて、淡路牛のジューシーなグリルや地魚のお造り、淡路島玉ねぎを使った多彩な料理が並ぶ豪華ディナービュッフェ、または個室での本格和会席から選べ、幅広い年代に高い評価を得ています。</p>
          <div className="hotel-special-wrapper">
            <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded-r-xl mb-6 text-sm text-amber-950">
              <strong className="block mb-1 font-bold">宿のこだわり・特徴:</strong>
              2020年7月リニューアルの大浴場「森のSPA」や離れスパ海音の森など多彩な湯処と島の山海の幸を堪能
            </div>
          </div>
          <div className="user-review-wrapper">
            <blockquote className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-xl mb-6 text-xs md:text-sm text-gray-700 italic">
              <strong>宿泊者の声:</strong> “寂しい見送り料理はまずまず!酒の品揃えが少ない上、価格が高い。土佐鶴とかうまい酒があればもっと美味しく過ごせたかな。遠いパーキングまで送迎なし!クチコミの詳細はこちらから　https:…　2026-09-04 18:30:42投稿 つづきはこちら”
            </blockquote>
          </div>
          <div className="pt-2">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D1657%26f_flg%3DPLAN"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-700 hover:to-amber-700 text-white font-bold px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all text-sm md:text-base w-full sm:w-auto"
            >
              <span>♨</span>
              <span>楽天トラベルでプラン詳細・空室・ふるさと納税クーポンを見る</span>
            </a>
          </div>
        </div>
      </section>

      {/* 宿紹介 3 */}
      <section id="hotel-3" className="mb-16 bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
        <div className="bg-gradient-to-r from-amber-700 to-amber-900 text-white p-4 md:p-6">
          <span className="bg-amber-500 text-white text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider mb-2 inline-block">厳選名宿 第3選</span>
          <h2 className="text-xl md:text-3xl font-bold leading-tight mb-2">
            グランシャリオ北斗七星１３５°＜淡路島＞
          </h2>
          <p className="text-xs md:text-sm text-amber-100">兵庫県淡路市・東経135度のエネルギー溢れる丘の上！繭型コクーン客室＆酵素風呂と最高級淡路ビーフ山海会席（北斗七星135°）</p>
        </div>
        <div className="p-6 md:p-8">
          <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600 bg-gray-50 p-4 rounded-xl">
            <div><strong>所在地:</strong> 兵庫県淡路市楠本2425-2</div>
            <div><strong>アクセス:</strong> 岩屋港よりお車にて約１０分、淡路ＩＣよりお車にて約３分（シャトルバス）※お車はF駐車場にお停めください。</div>
            <div><strong>楽天評価:</strong> <span className="text-amber-600 font-bold text-base">★ 4.7</span> (203件)</div>
            <div><strong>参考価格:</strong> 1名あたり約38,623円〜</div>
          </div>
          <p className="text-base text-gray-800 leading-relaxed mb-6">兵庫県立淡路島公園アニメパーク「ニジゲンノモリ」の最も高い丘の頂、東経135度の子午線上に位置する最高峰のグランピングヴィラリゾート。繭（コクーン）をモチーフにした全客室は天井高5mを超える開放的な木造建築で、天窓からは夜空に輝く満天の星や月をベッドから眺めることができます。全室に檜風呂が完備され、米ぬか酵素風呂でのリラクゼーションも体験可能。食事は世界的名シェフ・奥田政行氏が監修した極上の山海会席。淡路ビーフのすき焼きやしゃぶしゃぶ、由良港直送の鮮魚など、素材本来の旨味を極限まで引き出した感動の料理をプライベート空間で味わえます。</p>
          <div className="hotel-special-wrapper">
            <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded-r-xl mb-6 text-sm text-amber-950">
              <strong className="block mb-1 font-bold">宿のこだわり・特徴:</strong>
              星降る丘、眺めた北斗七星。淡路島を渡る緑の風。光輝く夜、太陽が降り注ぐ朝を、私は忘れない。
            </div>
          </div>
          <div className="user-review-wrapper">
            <blockquote className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-xl mb-6 text-xs md:text-sm text-gray-700 italic">
              <strong>宿泊者の声:</strong> “食事は絶品だが、夏場の虫と景色には注意念願の星のコクーンを利用。朝食は、洋食プレート。夜はBBQでしたが、いずれも地産地消の食材を使いどれもみなとても美味しかったです。質も量も大満足でした。…　2026-08-01 23:35:09投稿 つづきはこちら”
            </blockquote>
          </div>
          <div className="pt-2">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D167449%26f_flg%3DPLAN"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-700 hover:to-amber-700 text-white font-bold px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all text-sm md:text-base w-full sm:w-auto"
            >
              <span>♨</span>
              <span>楽天トラベルでプラン詳細・空室・ふるさと納税クーポンを見る</span>
            </a>
          </div>
        </div>
      </section>

      {/* ふるさと納税手順 */}
      <section id="furusato-step" className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 md:p-8 rounded-2xl border border-amber-200 mb-16 shadow-sm">
        <h2 className="text-xl md:text-3xl font-extrabold text-amber-950 mb-6 flex items-center gap-2">
          <span>💡</span> 楽天ふるさと納税トラベルクーポンで実質2,000円予約する4ステップ
        </h2>
        <div className="space-y-4">
          <div className="bg-white p-4 md:p-5 rounded-xl border border-amber-100 flex gap-4 items-start shadow-xs">
            <div className="bg-amber-600 text-white font-bold w-8 h-8 rounded-full flex items-center justify-center shrink-0">1</div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">控除限度額をチェック</h3>
              <p className="text-xs md:text-sm text-gray-600">年収や家族構成によって自己負担2,000円で利用できる上限額が決まります。まずは楽天ふるさと納税のシミュレーターで上限を確認しましょう。</p>
            </div>
          </div>
          <div className="bg-white p-4 md:p-5 rounded-xl border border-amber-100 flex gap-4 items-start shadow-xs">
            <div className="bg-amber-600 text-white font-bold w-8 h-8 rounded-full flex items-center justify-center shrink-0">2</div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">自治体を選んでトラベルクーポンを寄付</h3>
              <p className="text-xs md:text-sm text-gray-600">訪れたい温泉宿のある自治体へ寄付。寄付額の最大30％相当の楽天トラベルクーポンが数日以内にマイクーポンへ自動付与されます。</p>
            </div>
          </div>
          <div className="bg-white p-4 md:p-5 rounded-xl border border-amber-100 flex gap-4 items-start shadow-xs">
            <div className="bg-amber-600 text-white font-bold w-8 h-8 rounded-full flex items-center justify-center shrink-0">3</div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">楽天トラベルで宿泊予約＆クーポン適用</h3>
              <p className="text-xs md:text-sm text-gray-600">有効期限は3年間。宿泊日や部屋タイプを決め、予約画面で取得したトラベルクーポンを選択すると宿泊代金から即時値引きされます。</p>
            </div>
          </div>
          <div className="bg-white p-4 md:p-5 rounded-xl border border-amber-100 flex gap-4 items-start shadow-xs">
            <div className="bg-amber-600 text-white font-bold w-8 h-8 rounded-full flex items-center justify-center shrink-0">4</div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">ワンストップ特例または確定申告で完了</h3>
              <p className="text-xs md:text-sm text-gray-600">翌年の住民税・所得税から控除され、実質負担は年間2,000円のみ！浮いた予算で旅行をさらにアップグレードできます。</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mb-16">
        <h2 className="text-xl md:text-3xl font-extrabold text-gray-900 mb-6 pb-2 border-b-2 border-amber-600 flex items-center gap-2">
          <span>❓</span> よくある質問（Q&A）
        </h2>
        <div className="space-y-4">
          <details className="bg-white p-5 rounded-xl border border-gray-200 shadow-xs group cursor-pointer">
            <summary className="font-bold text-gray-900 text-sm md:text-base flex justify-between items-center">
              <span>すでに予約している宿泊プランにもふるさと納税クーポンは使えますか？</span>
              <span className="text-amber-600 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="mt-3 text-xs md:text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
              はい！楽天トラベルの「あとからクーポン適用」機能に対応している施設であれば、予約後でもマイページから自治体クーポンを適用して割引を受けられます。
            </p>
          </details>
          <details className="bg-white p-5 rounded-xl border border-gray-200 shadow-xs group cursor-pointer">
            <summary className="font-bold text-gray-900 text-sm md:text-base flex justify-between items-center">
              <span>トラベルクーポンの有効期限はどれくらいですか？</span>
              <span className="text-amber-600 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="mt-3 text-xs md:text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
              楽天ふるさと納税トラベルクーポンの有効期限は「寄付完了日の翌々年同月末まで（実質約3年間）」となっています。旅行予定に合わせてじっくり使えます。
            </p>
          </details>
          <details className="bg-white p-5 rounded-xl border border-gray-200 shadow-xs group cursor-pointer">
            <summary className="font-bold text-gray-900 text-sm md:text-base flex justify-between items-center">
              <span>ハイシーズンや週末でも利用できますか？</span>
              <span className="text-amber-600 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="mt-3 text-xs md:text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
              はい、対象ホテルの空室があれば、年末年始やゴールデンウィーク、お盆や紅葉・雪見シーズンのハイシーズンでも除外日なくクーポンをご利用いただけます。
            </p>
          </details>
        </div>
      </section>

      {/* 関連記事リンク */}
      <section className="bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-200">
        <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <span>🔗</span> あわせて読みたい注目のふるさと納税特集
        </h2>
        <div className="grid sm:grid-cols-2 gap-3">
          
          <Link
            href="/furusato-tax-arima-onsen-kinsen-ginsen-luxury-stay"
            className="block p-3 rounded-lg bg-white border border-gray-200 hover:border-amber-400 hover:shadow-xs transition-all text-sm text-amber-900 font-medium"
          >
            ▸ 【有馬温泉 金泉銀泉＆名門旅館×ふるさと納税】兵衛向陽閣・御所坊・月光園鴻朧館
          </Link>
          <Link
            href="/furusato-tax-kinosaki-onsen-sotoyu-meguri-ryokan-stay"
            className="block p-3 rounded-lg bg-white border border-gray-200 hover:border-amber-400 hover:shadow-xs transition-all text-sm text-amber-900 font-medium"
          >
            ▸ 【城崎温泉 七田外湯めぐり＆柳並木宿×ふるさと納税】招月庭・小宿縁・つちや旅館
          </Link>
          <Link
            href="/furusato-tax-shirahama-onsen-ocean-view-luxury-stay"
            className="block p-3 rounded-lg bg-white border border-gray-200 hover:border-amber-400 hover:shadow-xs transition-all text-sm text-amber-900 font-medium"
          >
            ▸ 【南紀白浜温泉 白良浜オーシャンビュー宿×ふるさと納税】むさし・海舟・シーモア
          </Link>
          <Link
            href="/furusato-tax-private-villa-hanare-hideaway-stay"
            className="block p-3 rounded-lg bg-white border border-gray-200 hover:border-amber-400 hover:shadow-xs transition-all text-sm text-amber-900 font-medium"
          >
            ▸ 【大人の隠れ家・離れ客室×ふるさと納税】静寂とプライベート重視の名宿
          </Link>
        </div>
      </section>
    </article>
  );
}
