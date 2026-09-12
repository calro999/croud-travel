import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'エメラルドグリーンの海と満天の星！石垣島の天然ビーチ直結リゾート＆赤瓦プライベートヴィラ×ふるさと納税完全攻略ガイド【2026年最新】フサキ・ANAインターコンチネンタル・グランヴィリオ',
  description: '日本屈指の南国アイランド・沖縄県石垣島！エメラルドの川平湾、八重山諸島の絶景パノラマ。「フサキビーチリゾート」「ANAインターコンチネンタル石垣リゾート」「グランヴィリオリゾート石垣島」を、沖縄県石垣市の楽天ふるさと納税トラベルクーポンで実質2,000円負担で予約する完全ガイド。天然ビーチ直結、県内最大級ウォータースライダー、石垣牛ステーキを満喫。',
  keywords: [
    'ふるさと納税 旅行',
    'ふるさと納税 温泉',
    '石垣島 ビーチリゾート＆ヴィラ特集',
    '楽天ふるさと納税 トラベル',
    'フサキビーチリゾート　ホテル＆ヴィラズ　＜石垣島＞',
    'ＡＮＡインターコンチネンタル石垣リゾート　ｂｙ　ＩＨＧ　＜石垣島＞',
    'グランヴィリオリゾート石垣島　Ｏｃｅａｎ’ｓ　Ｗｉｎｇ　＆　Ｖｉｌｌａ　Ｇａｒｄｅｎ＜石垣島＞',
    '高級リゾートホテル',
    'プライベートプール',
    '実質2000円'
  ],
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-ishigakijima-resort-villa-luxury-stay/',
  },
  openGraph: {
    title: 'エメラルドグリーンの海と満天の星！石垣島の天然ビーチ直結リゾート＆赤瓦プライベートヴィラ×ふるさと納税完全攻略ガイド【2026年最新】フサキ・ANAインターコンチネンタル・グランヴィリオ',
    description: '日本屈指の南国アイランド・沖縄県石垣島！エメラルドの川平湾、八重山諸島の絶景パノラマ。「フサキビーチリゾート」「ANAインターコンチネンタル石垣リゾート」「グランヴィリオリゾート石垣島」を、沖縄県石垣市の楽天ふるさと納税トラベルクーポンで実質2,000円負担で予約する完全ガイド。天然ビーチ直結、県内最大級ウォータースライダー、石垣牛ステーキを満喫。',
    url: 'https://croud-travel.pages.dev/furusato-tax-ishigakijima-resort-villa-luxury-stay',
    siteName: '旅行とホテル・ふるさと納税の総合ポータル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function FurusatoIshigakijimaLuxuryStayPage() {
  return (
    <article className="max-w-5xl mx-auto px-4 py-8 text-gray-800 leading-relaxed font-sans">
      {/* パンくずリスト */}
      <nav className="text-sm text-gray-500 mb-6 flex flex-wrap items-center gap-1.5" aria-label="Breadcrumb">
        <Link href="/" className="hover:underline hover:text-amber-700">ホーム</Link>
        <span>&gt;</span>
        <Link href="/travel-savings-guide" className="hover:underline hover:text-amber-700">ふるさと納税トラベル完全攻略ガイド</Link>
        <span>&gt;</span>
        <span className="text-gray-800 font-semibold">石垣島 ビーチリゾート＆ヴィラ特集</span>
      </nav>

      {/* ヘッダー */}
      <header className="mb-10 pb-6 border-b border-gray-200">
        <div className="inline-block bg-gradient-to-r from-amber-600 to-amber-800 text-white text-xs md:text-sm font-bold px-3 py-1 rounded-full mb-3 shadow-sm">
          八重山の豊かな大自然と美ら海！沖縄県石垣島特集
        </div>
        <h1 className="text-2xl md:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight mb-4">
          エメラルドグリーンの海と満天の星！石垣島の天然ビーチ直結リゾート＆赤瓦プライベートヴィラ×ふるさと納税完全攻略ガイド【2026年最新】フサキ・ANAインターコンチネンタル・グランヴィリオ
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-xs md:text-sm text-gray-500">
          <time dateTime="2026-09-10">2026年9月10日公開</time>
          <span>•</span>
          <span className="bg-amber-100 text-amber-900 px-2 py-0.5 rounded font-medium">楽天トラベル公式連携</span>
          <span>•</span>
          <span className="bg-green-100 text-green-900 px-2 py-0.5 rounded font-medium">実質負担2,000円対象</span>
        </div>
      </header>

      {/* リード文ブロック */}
      <section className="bg-gradient-to-br from-amber-50/70 via-orange-50/40 to-yellow-50/60 p-6 md:p-8 rounded-2xl border border-amber-200/80 mb-12 shadow-sm">
        <h2 className="text-xl md:text-2xl font-bold text-amber-950 mb-4 flex items-center gap-2">
          <span className="text-2xl">✨</span>
          透き通るエメラルドグリーンの美ら海、夜空を埋め尽くす満天の天の川。南の楽園・石垣島で叶える極上リゾートステイへ
        </h2>
        <p className="text-base md:text-lg text-gray-800 leading-relaxed mb-6">
          八重山諸島の玄関口であり、世界屈指の透明度を誇る海に囲まれた南国の楽園「沖縄県・石垣島（いしがきじま）」。世界的ガイドブックで最高評価三ツ星を獲得した景勝地「川平湾」のエメラルドグリーンのグラデーションをはじめ、亜熱帯のマングローブ林、そして日本初の星空保護区に認定された満天の星空と南十字星——。五感のすべてを解き放つ大自然の魅力に溢れています。石垣島のリゾート滞在の醍醐味は、手付かずの天然白砂ビーチに直結した広大な敷地、沖縄伝統の赤瓦屋根が連なるプライベートヴィラ、そして水平線に沈む夕日を一望するインフィニティプール。日常の喧騒から完全に隔絶された南国時間が流れています。さらに食の感動も見逃せません。温暖な気候とミネラル豊富な牧草で育った幻の最高級黒毛和牛「石垣牛（いしがきぎゅう）」のジューシーな炭火ステーキや鉄板焼き、獲れたて新鮮な島魚のお造り、香り高い八重山そばや島野菜など、南国ならではの豊かな恵みを贅沢に堪能できます。本特集では、天然ビーチ直結で赤瓦ヴィラと県内最大級のスプラッシュパークがファミリー・カップルに絶大な人気を誇る「フサキビーチリゾート ホテル＆ヴィラズ」、マエサトビーチを望みワンランク上のクラブインターコンチネンタル棟を擁する世界水準の「ANAインターコンチネンタル石垣リゾート」、そして八重山諸島を見晴らすパノラマと充実の露天風呂・岩盤浴スパが魅力の「グランヴィリオリゾート石垣島」の3大リゾートを厳選。沖縄県石垣市への楽天ふるさと納税トラベルクーポン（寄付額の最大30％割引・有効期限3年）を活用して、実質自己負担2,000円で憧れの石垣島リゾート旅をお得に予約しましょう。
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
          <li><a href="#three-points" className="text-amber-800 hover:underline font-medium">石垣島 ビーチリゾート＆ヴィラ特集が選ばれる3つの理由</a></li>
          <li><a href="#hotel-1" className="text-amber-800 hover:underline font-medium">【第1選】フサキビーチリゾート　ホテル＆ヴィラズ　＜石垣島＞</a></li>
          <li><a href="#hotel-2" className="text-amber-800 hover:underline font-medium">【第2選】ＡＮＡインターコンチネンタル石垣リゾート　ｂｙ　ＩＨＧ　＜石垣島＞</a></li>
          <li><a href="#hotel-3" className="text-amber-800 hover:underline font-medium">【第3選】グランヴィリオリゾート石垣島　Ｏｃｅａｎ’ｓ　Ｗｉｎｇ　＆　Ｖｉｌｌａ　Ｇａｒｄｅｎ＜石垣島＞</a></li>
          <li><a href="#furusato-step" className="text-amber-800 hover:underline font-medium">実質自己負担2,000円で予約する簡単4ステップ手順</a></li>
          <li><a href="#faq" className="text-amber-800 hover:underline font-medium">よくある質問（Q&A）</a></li>
        </ol>
      </section>

      {/* 3つの魅力セクション */}
      <section id="three-points" className="mb-14">
        <h2 className="text-xl md:text-3xl font-extrabold text-gray-900 mb-6 pb-2 border-b-2 border-amber-600 flex items-center gap-2">
          <span>🌟</span> 石垣島 ビーチリゾート＆ヴィラ特集が選ばれる3つの理由
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <span className="text-3xl font-black text-amber-600 block mb-2">01</span>
            <h3 className="font-bold text-gray-900 text-lg mb-3 leading-snug">天然白砂ビーチ直結＆インフィニティプール！八重山の海を五感で楽しむリゾート</h3>
            <p className="text-sm text-gray-600 leading-relaxed">ウミガメや熱帯魚が泳ぐ天然ビーチが目の前。夕暮れには息を呑む美しいサンセット、夜には満天の星空をプールサイドから鑑賞できます。</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <span className="text-3xl font-black text-amber-600 block mb-2">02</span>
            <h3 className="font-bold text-gray-900 text-lg mb-3 leading-snug">日本最高峰のブランド黒毛和牛「石垣牛」と八重山郷土の美食ディナー</h3>
            <p className="text-sm text-gray-600 leading-relaxed">豊かな旨味と甘みのある脂が特徴の石垣牛ステーキや、新鮮な島魚・海ぶどう・あぐー豚など、石垣島ならではの贅を尽くした料理を満喫。</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <span className="text-3xl font-black text-amber-600 block mb-2">03</span>
            <h3 className="font-bold text-gray-900 text-lg mb-3 leading-snug">石垣市ふるさと納税で最大30％OFF！3年間有効クーポンでオフシーズン・連休も自在に予約</h3>
            <p className="text-sm text-gray-600 leading-relaxed">宿泊料金が高騰しやすい南国リゾートもふるさと納税なら実質2,000円。寄付から3年間有効なので、ベストシーズンの夏休みや冬の避寒旅行に最適です。</p>
          </div>
        </div>
      </section>

      {/* 宿紹介 1 */}
      <section id="hotel-1" className="mb-16 bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
        <div className="bg-gradient-to-r from-amber-700 to-amber-900 text-white p-4 md:p-6">
          <span className="bg-amber-500 text-white text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider mb-2 inline-block">厳選名宿 第1選</span>
          <h2 className="text-xl md:text-3xl font-bold leading-tight mb-2">
            フサキビーチリゾート　ホテル＆ヴィラズ　＜石垣島＞
          </h2>
          <p className="text-xs md:text-sm text-amber-100">沖縄県石垣市・名所フサキビーチ直結！赤瓦ヴィラ＆県内最大級ウォータースライダー付きプールと極上石垣牛BBQ（口コミ1,500件超）</p>
        </div>
        <div className="p-6 md:p-8">
          <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600 bg-gray-50 p-4 rounded-xl">
            <div><strong>所在地:</strong> 沖縄県石垣市新川1625番地</div>
            <div><strong>アクセス:</strong> 石垣空港より　車で約35分。石垣港より車で約15分。空港・ホテル間の無料送迎バスもございます。</div>
            <div><strong>楽天評価:</strong> <span className="text-amber-600 font-bold text-base">★ 4.61</span> (1595件)</div>
            <div><strong>参考価格:</strong> 1名あたり約11,490円〜</div>
          </div>
          <p className="text-base text-gray-800 leading-relaxed mb-6">石垣島の西海岸、ウミガメが産卵に訪れる美しい天然フサキビーチに面した広大な敷地を誇るアイランドリゾート。琉球伝統の赤瓦屋根とブーゲンビリアが咲き誇る小道に佇むプライベートヴィラは、南国リゾート情緒満点。巨大なスプラッシュパークや流れるプール、インフィニティプールを備え、ファミリーからカップルまで一日中楽しめます。ビーチに突き出たシンボルの桟橋「フサキエンジェルピア」から眺めるサンセットは息を呑む美しさ。夕食は潮風を感じながら味わう極上石垣牛のビーチサイドBBQや、八重山の旬の食材を使った創作島料理ビュッフェを心ゆくまで満喫できます。</p>
          <div className="hotel-special-wrapper">
            <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded-r-xl mb-6 text-sm text-amber-950">
              <strong className="block mb-1 font-bold">宿のこだわり・特徴:</strong>
              【楽天トラベルアワード受賞】島内随一の天然ビーチとプールエリアで極上の休日を
            </div>
          </div>
          <div className="user-review-wrapper">
            <blockquote className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-xl mb-6 text-xs md:text-sm text-gray-700 italic">
              <strong>宿泊者の声:</strong> “プールや大浴場に近く、食事も美味しく大満足スタンダードヴィラでしたが、プールや大浴場、フロントにも近く、大変便利でした。水着はベランダに干せました。大浴場は子供連れで混んでいたので、部屋でサッ…　2026-09-04 21:03:59投稿 つづきはこちら”
            </blockquote>
          </div>
          <div className="pt-2">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D38599%26f_flg%3DPLAN"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-700 hover:to-amber-700 text-white font-bold px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all text-sm md:text-base w-full sm:w-auto"
            >
              <span>🏝</span>
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
            ＡＮＡインターコンチネンタル石垣リゾート　ｂｙ　ＩＨＧ　＜石垣島＞
          </h2>
          <p className="text-xs md:text-sm text-amber-100">沖縄県石垣市・マエサトビーチを望む世界水準の最高峰！専用ラウンジを備えた「クラブインターコンチネンタル」と本格スパ</p>
        </div>
        <div className="p-6 md:p-8">
          <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600 bg-gray-50 p-4 rounded-xl">
            <div><strong>所在地:</strong> 沖縄県石垣市真栄里354-1</div>
            <div><strong>アクセス:</strong> 石垣空港からお車で約20分, 空港バスで約25分（ホテル前下車）</div>
            <div><strong>楽天評価:</strong> <span className="text-amber-600 font-bold text-base">★ 4.4</span> (1521件)</div>
            <div><strong>参考価格:</strong> 1名あたり約15,040円〜</div>
          </div>
          <p className="text-base text-gray-800 leading-relaxed mb-6">白砂のマエサトビーチに寄り添うように広がる、石垣島を代表する最高級インターナショナルリゾート。広大な敷地には多彩な客室棟や屋外プール、ゴルフコース、タラソスパが揃い、優雅で洗練されたバカンスを演出します。特に専用ラウンジでアフタヌーンティーやイブニングカクテルが楽しめる「クラブインターコンチネンタル」棟は、贅を極めた大人のステイに最適。客室のプライベートバルコニーからはコバルトブルーの海と八重山の島々を一望。ディナーは沖縄県産黒毛和牛「石垣牛」を目の前で焼き上げる鉄板焼きや本格日本料理、琉球フレンチなど、世界基準の美食が揃っています。</p>
          <div className="hotel-special-wrapper">
            <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded-r-xl mb-6 text-sm text-amber-950">
              <strong className="block mb-1 font-bold">宿のこだわり・特徴:</strong>
              豊かな自然と文化が根付いた島で、心の琴線に触れる出会いと発見に満ちた、ラグジュアリーリゾート
            </div>
          </div>
          <div className="user-review-wrapper">
            <blockquote className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-xl mb-6 text-xs md:text-sm text-gray-700 italic">
              <strong>宿泊者の声:</strong> “サービスも食事も大満足の素晴らしい内容サービス、ご飯も大満足でした!クチコミの詳細はこちらから　https://review.travel.rakuten.co.jp/hotel/voice/…　2026-09-05 21:07:35投稿 つづきはこちら”
            </blockquote>
          </div>
          <div className="pt-2">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D1973%26f_flg%3DPLAN"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-700 hover:to-amber-700 text-white font-bold px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all text-sm md:text-base w-full sm:w-auto"
            >
              <span>🏝</span>
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
            グランヴィリオリゾート石垣島　Ｏｃｅａｎ’ｓ　Ｗｉｎｇ　＆　Ｖｉｌｌａ　Ｇａｒｄｅｎ＜石垣島＞
          </h2>
          <p className="text-xs md:text-sm text-amber-100">沖縄県石垣市・竹富島を正面に望む絶景オーシャンビュー！露天風呂付き展望大浴場とプール付きスイートヴィラが魅力</p>
        </div>
        <div className="p-6 md:p-8">
          <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600 bg-gray-50 p-4 rounded-xl">
            <div><strong>所在地:</strong> 沖縄県石垣市新川舟蔵2481-1</div>
            <div><strong>アクセス:</strong> 新石垣空港より車で40分</div>
            <div><strong>楽天評価:</strong> <span className="text-amber-600 font-bold text-base">★ 4.48</span> (1227件)</div>
            <div><strong>参考価格:</strong> 1名あたり約8,760円〜</div>
          </div>
          <p className="text-base text-gray-800 leading-relaxed mb-6">竹富島をはじめとする八重山の島々を真正面に望む抜群のロケーションに建つ大型リゾートホテル。ホテル棟「オーシャンズウイング」とプライベートプール付き客室を擁する「ヴィラガーデン」の2つのエリアからなり、旅のスタイルに合わせて選べます。沖縄の離島では珍しい露天風呂付き大浴場やサウナ、岩盤浴が完備されており、海水浴や観光でアクティブに動いた後の疲れを心地よくリフレッシュ。夜には屋上展望デッキで満天の星空鑑賞ツアーも開催。食事は地元食材と石垣牛を堪能できるバイキングや焼肉、郷土料理など多彩なレストランで舌鼓を打てます。</p>
          <div className="hotel-special-wrapper">
            <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded-r-xl mb-6 text-sm text-amber-950">
              <strong className="block mb-1 font-bold">宿のこだわり・特徴:</strong>
              オーシャンズウィングとヴィラガーデン　趣の異なる２つの宿泊エリアと充実の施設が魅力的な南国リゾート
            </div>
          </div>
          <div className="user-review-wrapper">
            <blockquote className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-xl mb-6 text-xs md:text-sm text-gray-700 italic">
              <strong>宿泊者の声:</strong> “家族旅行でゆったり過ごせた最高の思い出毎年恒例の夏の旅行に初めての石垣島!そして息子が高校3年できっと最後になるであろう家族揃っての旅行を計画し、今回はヴィラタイプを選びました。ウェルカムドリンク…　2026-08-30 00:03:46投稿 つづきはこちら”
            </blockquote>
          </div>
          <div className="pt-2">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D69360%26f_flg%3DPLAN"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-700 hover:to-amber-700 text-white font-bold px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all text-sm md:text-base w-full sm:w-auto"
            >
              <span>🏝</span>
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
              <p className="text-xs md:text-sm text-gray-600">訪れたいホテルや温泉宿のある自治体へ寄付。寄付額の最大30％相当の楽天トラベルクーポンが数日以内にマイクーポンへ自動付与されます。</p>
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
              <span>ハイシーズンや連休でも利用できますか？</span>
              <span className="text-amber-600 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="mt-3 text-xs md:text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
              はい、対象ホテルの空室があれば、ゴールデンウィークや夏休み、年末年始や紅葉シーズンのハイシーズンでも除外日なくクーポンをご利用いただけます。
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
            href="/furusato-tax-miyakojima-allamanda-resort-stay"
            className="block p-3 rounded-lg bg-white border border-gray-200 hover:border-amber-400 hover:shadow-xs transition-all text-sm text-amber-900 font-medium"
          >
            ▸ 【宮古島 シギラリゾート＆ウミガメスイート×ふるさと納税】アラマンダ・ヒルトン・ミラージュ
          </Link>
          <Link
            href="/furusato-tax-okinawa-beach-resort-luxury-stay"
            className="block p-3 rounded-lg bg-white border border-gray-200 hover:border-amber-400 hover:shadow-xs transition-all text-sm text-amber-900 font-medium"
          >
            ▸ 【沖縄本島最高峰ビーチリゾート×ふるさと納税】ハレクラニ・ルネッサンス・ロワジール
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
