import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '大観覧車とベイブリッジの煌めく夜景！横浜みなとみらい夜景ラグジュアリーホテル×ふるさと納税完全攻略ガイド【2026年最新】Pier8・グランドインターコンチ・ベイ東急',
  description: 'きらめく大観覧車「コスモクロック21」と東京湾・横浜港のパノラマ夜景！「インターコンチネンタル横浜Pier 8」「ヨコハマ グランド インターコンチネンタル ホテル」「横浜ベイホテル東急」を、神奈川県横浜市の楽天ふるさと納税トラベルクーポンで実質2,000円負担で予約する完全ガイド。ルーフトップテラス、全室バルコニー付き客室、クラブフロアで至高の記念日ステイ。',
  keywords: [
    'ふるさと納税 旅行',
    'ふるさと納税 ホテル',
    '横浜みなとみらい夜景ホテル特集',
    '楽天ふるさと納税 トラベル',
    'インターコンチネンタル横浜Ｐｉｅｒ　８　ｂｙ　ＩＨＧ',
    'ヨコハマ　グランド　インターコンチネンタル　ホテル　ｂｙ　ＩＨＧ',
    '横浜ベイホテル東急',
    '高級温泉旅館',
    'プライベートステイ',
    '実質2000円'
  ],
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-yokohama-minatomirai-nightview-luxury-stay',
  },
  openGraph: {
    title: '大観覧車とベイブリッジの煌めく夜景！横浜みなとみらい夜景ラグジュアリーホテル×ふるさと納税完全攻略ガイド【2026年最新】Pier8・グランドインターコンチ・ベイ東急',
    description: 'きらめく大観覧車「コスモクロック21」と東京湾・横浜港のパノラマ夜景！「インターコンチネンタル横浜Pier 8」「ヨコハマ グランド インターコンチネンタル ホテル」「横浜ベイホテル東急」を、神奈川県横浜市の楽天ふるさと納税トラベルクーポンで実質2,000円負担で予約する完全ガイド。ルーフトップテラス、全室バルコニー付き客室、クラブフロアで至高の記念日ステイ。',
    url: 'https://croud-travel.pages.dev/furusato-tax-yokohama-minatomirai-nightview-luxury-stay',
    siteName: '旅行とホテル・ふるさと納税の総合ポータル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function FurusatoYokohamaNightviewStayPage() {
  return (
    <article className="max-w-5xl mx-auto px-4 py-8 text-gray-800 leading-relaxed font-sans">
      {/* パンくずリスト */}
      <nav className="text-sm text-gray-500 mb-6 flex flex-wrap items-center gap-1.5" aria-label="Breadcrumb">
        <Link href="/" className="hover:underline hover:text-amber-700">ホーム</Link>
        <span>&gt;</span>
        <Link href="/travel-savings-guide" className="hover:underline hover:text-amber-700">ふるさと納税トラベル完全攻略ガイド</Link>
        <span>&gt;</span>
        <span className="text-gray-800 font-semibold">横浜みなとみらい夜景ホテル特集</span>
      </nav>

      {/* ヘッダー */}
      <header className="mb-10 pb-6 border-b border-gray-200">
        <div className="inline-block bg-gradient-to-r from-amber-600 to-amber-800 text-white text-xs md:text-sm font-bold px-3 py-1 rounded-full mb-3 shadow-sm">
          全国屈指の夜景美！横浜みなとみらい宿特集
        </div>
        <h1 className="text-2xl md:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight mb-4">
          大観覧車とベイブリッジの煌めく夜景！横浜みなとみらい夜景ラグジュアリーホテル×ふるさと納税完全攻略ガイド【2026年最新】Pier8・グランドインターコンチ・ベイ東急
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-xs md:text-sm text-gray-500">
          <time dateTime="2026-09-09">2026年9月9日公開</time>
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
          水面に反射する大観覧車のイルミネーションと潮風。横浜みなとみらいの特等席で過ごす、洗練された大人のナイトステイへ
        </h2>
        <p className="text-base md:text-lg text-gray-800 leading-relaxed mb-6">
          異国情緒漂う港町の歴史と、未来的なウォーターフロント都市が美しく調和する「横浜みなとみらい21」。夕暮れとともに赤レンガ倉庫やベイブリッジ、大観覧車「コスモクロック21」がライトアップされ、水面に宝石を散りばめたような眩い夜景が広がります。記念日や誕生日、週末のプレミアムなご褒美ステイとして、客室のバルコニーや大きなピクチャーウィンドウから夜景を独占できるホテルステイは圧倒的な人気を誇ります。クラブラウンジでシャンパンを傾け、一流シェフによるフレンチや中国料理のディナーを堪能し、翌朝は海風を感じながらベイサイドのブレックファストを味わう——。本特集では、三方を海に囲まれた埠頭に佇み、宿泊者限定ルーフトップテラスを誇る国内最高峰の埠頭ホテル「インターコンチネンタル横浜Pier 8」、みなとみらいのシンボル「ヨットの帆」の形でおなじみのランドマーク「ヨコハマ グランド インターコンチネンタル ホテル」、そして全室バルコニー完備で大観覧車が目の前に迫る抜群の臨場感を誇る「横浜ベイホテル東急」の3大ホテルを厳選。神奈川県横浜市への楽天ふるさと納税トラベルクーポン（寄付額の最大30％割引・有効期限3年）を活用して、実質自己負担2,000円で憧れの横浜夜景ホテルステイを叶えましょう。
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
          <li><a href="#three-points" className="text-amber-800 hover:underline font-medium">横浜みなとみらい夜景ホテル特集が選ばれる3つの理由</a></li>
          <li><a href="#hotel-1" className="text-amber-800 hover:underline font-medium">【第1選】インターコンチネンタル横浜Ｐｉｅｒ　８　ｂｙ　ＩＨＧ</a></li>
          <li><a href="#hotel-2" className="text-amber-800 hover:underline font-medium">【第2選】ヨコハマ　グランド　インターコンチネンタル　ホテル　ｂｙ　ＩＨＧ</a></li>
          <li><a href="#hotel-3" className="text-amber-800 hover:underline font-medium">【第3選】横浜ベイホテル東急</a></li>
          <li><a href="#furusato-step" className="text-amber-800 hover:underline font-medium">実質自己負担2,000円で予約する簡単4ステップ手順</a></li>
          <li><a href="#faq" className="text-amber-800 hover:underline font-medium">よくある質問（Q&A）</a></li>
        </ol>
      </section>

      {/* 3つの魅力セクション */}
      <section id="three-points" className="mb-14">
        <h2 className="text-xl md:text-3xl font-extrabold text-gray-900 mb-6 pb-2 border-b-2 border-amber-600 flex items-center gap-2">
          <span>🌟</span> 横浜みなとみらい夜景ホテル特集が選ばれる3つの理由
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <span className="text-3xl font-black text-amber-600 block mb-2">01</span>
            <h3 className="font-bold text-gray-900 text-lg mb-3 leading-snug">客室バルコニーから見上げる大観覧車＆ベイブリッジ！息をのむ絶景パノラマ夜景</h3>
            <p className="text-sm text-gray-600 leading-relaxed">部屋の明かりを消せば、窓一面に広がるみなとみらいの100万ドルの夜景。刻一刻と表情を変える大観覧車のイルミネーションを誰にも邪魔されず堪能できます。</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <span className="text-3xl font-black text-amber-600 block mb-2">02</span>
            <h3 className="font-bold text-gray-900 text-lg mb-3 leading-snug">クラブラウンジの優雅なフードプレゼンテーション！シャンパンと海の絶景</h3>
            <p className="text-sm text-gray-600 leading-relaxed">アフタヌーンティー、カクテルタイム、イブニングカクテルなど専任スタッフによる極上のおもてなし。非日常のホテルステイをさらにラグジュアリーに引き上げます。</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <span className="text-3xl font-black text-amber-600 block mb-2">03</span>
            <h3 className="font-bold text-gray-900 text-lg mb-3 leading-snug">横浜市ふるさと納税で最大30％OFF！3年間有効クーポンで記念日やクリスマスに利用</h3>
            <p className="text-sm text-gray-600 leading-relaxed">クリスマスや花火大会、プロポーズや記念日など、価格が高騰しやすい時期でもふるさと納税ならお得。実質自己負担2,000円で最高峰の都市型ホテルを満喫できます。</p>
          </div>
        </div>
      </section>

      {/* 宿紹介 1 */}
      <section id="hotel-1" className="mb-16 bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
        <div className="bg-gradient-to-r from-amber-700 to-amber-900 text-white p-4 md:p-6">
          <span className="bg-amber-500 text-white text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider mb-2 inline-block">厳選名宿 第1選</span>
          <h2 className="text-xl md:text-3xl font-bold leading-tight mb-2">
            インターコンチネンタル横浜Ｐｉｅｒ　８　ｂｙ　ＩＨＧ
          </h2>
          <p className="text-xs md:text-sm text-amber-100">神奈川県横浜市・新港ふ頭客船ターミナル直結！三方を海に囲まれた唯一無二の埠頭ホテル＆クラブインターコンチネンタル</p>
        </div>
        <div className="p-6 md:p-8">
          <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600 bg-gray-50 p-4 rounded-xl">
            <div><strong>所在地:</strong> 神奈川県横浜市中区新港2-14-1</div>
            <div><strong>アクセス:</strong> 横浜高速鉄道みなとみらい線「馬車道」駅４番出口より徒歩約１０分／「みなとみらい」駅より徒歩約１２分</div>
            <div><strong>楽天評価:</strong> <span className="text-amber-600 font-bold text-base">★ 4.71</span> (322件)</div>
            <div><strong>参考価格:</strong> 1名あたり約17,170円〜</div>
          </div>
          <p className="text-base text-gray-800 leading-relaxed mb-6">横浜ハンマーヘッドに位置し、海に突き出た埠頭の先端に建つ国内唯一の低層ラグジュアリーホテル。客室はすべて46平米以上とゆとりある広さを誇り、船旅を連想させる上質なキャビンデザインで統一。専用バルコニーや大きな開口部からは、横浜港を行き交う船やベイブリッジのきらめく夜景が一望できます。宿泊者限定の屋上デッキ「Rooftop 1859」では潮風とともに360度の港パノラマを体感。クラブインターコンチネンタルでは時間帯ごとにアフタヌーンティーやバータイムの洗練された美食が振る舞われ、最高級のプライベート滞在を約束します。</p>
          <div className="hotel-special-wrapper">
            <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded-r-xl mb-6 text-sm text-amber-950">
              <strong className="block mb-1 font-bold">宿のこだわり・特徴:</strong>
              みなとみらいの海に浮かぶ、品格と遊び心が共存する新しいラグジュアリーステイ
            </div>
          </div>
          <div className="user-review-wrapper">
            <blockquote className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-xl mb-6 text-xs md:text-sm text-gray-700 italic">
              <strong>宿泊者の声:</strong> “期待していた内容と異なり残念とても残念でした!クチコミの詳細はこちらから　https://review.travel.rakuten.co.jp/hotel/voice/177505?revi…　2026-09-04 18:17:07投稿 つづきはこちら”
            </blockquote>
          </div>
          <div className="pt-2">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D177505%26f_flg%3DPLAN"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-700 hover:to-amber-700 text-white font-bold px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all text-sm md:text-base w-full sm:w-auto"
            >
              <span>🏨</span>
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
            ヨコハマ　グランド　インターコンチネンタル　ホテル　ｂｙ　ＩＨＧ
          </h2>
          <p className="text-xs md:text-sm text-amber-100">神奈川県横浜市・みなとみらいのシンボル「風をはらんだヨットの帆」！海一望のオーシャンビューと伝統の国際ホテルサービス</p>
        </div>
        <div className="p-6 md:p-8">
          <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600 bg-gray-50 p-4 rounded-xl">
            <div><strong>所在地:</strong> 神奈川県横浜市西区みなとみらい1-1-1</div>
            <div><strong>アクセス:</strong> みなとみらい駅から徒歩約5分、桜木町駅から徒歩約10分。みなとみらいのシンボルホテル♪</div>
            <div><strong>楽天評価:</strong> <span className="text-amber-600 font-bold text-base">★ 4.47</span> (9494件)</div>
            <div><strong>参考価格:</strong> 1名あたり約9,775円〜</div>
          </div>
          <p className="text-base text-gray-800 leading-relaxed mb-6">横浜のウォーターフロントを象徴する、ヨットの帆を模した美しい外観でおなじみのインターナショナルホテル。海側に面した客室からは横浜港やベイブリッジから昇る日の出、街側に面した客室からは大観覧車を中心とするみなとみらいのダイナミックな夜景が広がります。館内には中国料理「カリュウ」やフランス料理「アジュール」など名門レストランが揃い、美食の宝庫。ホテル専用のクルーズ船「ル・グラン・ブルー」での運河クルージングなど海辺のホテルならではの体験も充実しており、カップルや夫婦の特別な記念日旅行に不動の人気を誇ります。</p>
          <div className="hotel-special-wrapper">
            <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded-r-xl mb-6 text-sm text-amber-950">
              <strong className="block mb-1 font-bold">宿のこだわり・特徴:</strong>
              みなとみらいのシンボル、風をはらんだヨットの帆の形が特徴のインターナショナルブランドホテル。
            </div>
          </div>
          <div className="user-review-wrapper">
            <blockquote className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-xl mb-6 text-xs md:text-sm text-gray-700 italic">
              <strong>宿泊者の声:</strong> “なだ万の朝食がとても美味しくて大満足なだ万の朝食は、とても美味しかったです。ホテルだから仕方ないですが、エアコンの調整は難しく、夜中に何回も起きてしまいました。クチコミの詳細はこちらか…　2026-09-05 20:58:48投稿 つづきはこちら”
            </blockquote>
          </div>
          <div className="pt-2">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D5731%26f_flg%3DPLAN"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-700 hover:to-amber-700 text-white font-bold px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all text-sm md:text-base w-full sm:w-auto"
            >
              <span>🏨</span>
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
            横浜ベイホテル東急
          </h2>
          <p className="text-xs md:text-sm text-amber-100">神奈川県横浜市・みなとみらい駅直結！全室にウッドデッキバルコニー完備・大観覧車が目の前真正面に迫る絶景宿</p>
        </div>
        <div className="p-6 md:p-8">
          <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600 bg-gray-50 p-4 rounded-xl">
            <div><strong>所在地:</strong> 神奈川県横浜市西区みなとみらい2-3-7</div>
            <div><strong>アクセス:</strong> みなとみらい線みなとみらい駅徒歩約１分／ＪＲ・市営地下鉄線桜木町駅徒歩１０分</div>
            <div><strong>楽天評価:</strong> <span className="text-amber-600 font-bold text-base">★ 4.63</span> (10693件)</div>
            <div><strong>参考価格:</strong> 1名あたり約8,533円〜</div>
          </div>
          <p className="text-base text-gray-800 leading-relaxed mb-6">クイーンズスクエア横浜内に位置し、みなとみらい駅から直結するアクセス抜群のアーバンオアシスホテル。最大の特徴は、横浜エリアのホテルでは希少な「客室バルコニー」を全客室に備えている点。ウッドデッキのバルコニーに出れば、世界最大級の観覧車「コスモクロック21」が目の前すぐそこに迫り、風を感じながらイルミネーションの光のショーを特等席で楽しめます。ディナーは名店「カフェ トスカ」でのパルミジャーノ・レッジャーノを使った出来立てパスタやローストビーフが味わえるナイト・キッチンスタジアムが大盛況です。</p>
          <div className="hotel-special-wrapper">
            <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded-r-xl mb-6 text-sm text-amber-950">
              <strong className="block mb-1 font-bold">宿のこだわり・特徴:</strong>
              横浜港を一望できるアーバンリゾートで最上のくつろぎを
            </div>
          </div>
          <div className="user-review-wrapper">
            <blockquote className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-xl mb-6 text-xs md:text-sm text-gray-700 italic">
              <strong>宿泊者の声:</strong> “また泊まりたい清潔感があり、良いホテルに宿泊出来たと思える実感があります。クチコミの詳細はこちらから　https://review.travel.rakuten.co.jp/hotel/v…　2026-09-05 09:39:09投稿 つづきはこちら”
            </blockquote>
          </div>
          <div className="pt-2">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D2003%26f_flg%3DPLAN"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-700 hover:to-amber-700 text-white font-bold px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all text-sm md:text-base w-full sm:w-auto"
            >
              <span>🏨</span>
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
              <p className="text-xs md:text-sm text-gray-600">訪れたいホテルのある自治体へ寄付。寄付額の最大30％相当の楽天トラベルクーポンが数日以内にマイクーポンへ自動付与されます。</p>
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
              <span>草津や沖縄、京都などの繁忙期でも利用できますか？</span>
              <span className="text-amber-600 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="mt-3 text-xs md:text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
              はい、対象ホテルの空室があれば、ゴールデンウィークや夏休み、年末年始などのピークシーズンでも除外日なくクーポンをご利用いただけます。
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
            href="/furusato-tax-atami-ocean-view-fireworks-hotel-stay"
            className="block p-3 rounded-lg bg-white border border-gray-200 hover:border-amber-400 hover:shadow-xs transition-all text-sm text-amber-900 font-medium"
          >
            ▸ 【熱海花火大会特等席＆オーシャンビュー温泉宿×ふるさと納税】特等席鑑賞
          </Link>
          <Link
            href="/furusato-tax-tokyo-disney-resort-official-hotel-stay"
            className="block p-3 rounded-lg bg-white border border-gray-200 hover:border-amber-400 hover:shadow-xs transition-all text-sm text-amber-900 font-medium"
          >
            ▸ 【東京ディズニーリゾート公式ホテル×ふるさと納税】舞浜直結オフィシャル
          </Link>
          <Link
            href="/furusato-tax-all-inclusive-free-drinks-alcohol-stay"
            className="block p-3 rounded-lg bg-white border border-gray-200 hover:border-amber-400 hover:shadow-xs transition-all text-sm text-amber-900 font-medium"
          >
            ▸ 【お酒飲み放題オールインクルーシブ宿×ふるさと納税】贅沢ラウンジステイ
          </Link>
          <Link
            href="/furusato-tax-hakone-onsen-open-air-bath-stay"
            className="block p-3 rounded-lg bg-white border border-gray-200 hover:border-amber-400 hover:shadow-xs transition-all text-sm text-amber-900 font-medium"
          >
            ▸ 【箱根湯本名湯温泉＆大露天風呂宿×ふるさと納税】ロマンスカー直通名宿
          </Link>
        </div>
      </section>
    </article>
  );
}
