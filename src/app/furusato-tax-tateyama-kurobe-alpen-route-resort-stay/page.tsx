import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '標高2000m超の雲上リゾート！立山黒部アルペンルートの夕日・満天の星と高山植物トレッキング名宿×ふるさと納税完全攻略ガイド【2026年最新】弥陀ヶ原・立山高原・森の風',
  description: '世界有数の山岳観光ルート・立山黒部アルペンルート！雪の大谷、みくりが池、大パノラマの雲海。「弥陀ヶ原ホテル」「立山高原ホテル」「立山連峰の宿 ホテル森の風立山」を、富山県立山町・富山市の楽天ふるさと納税トラベルクーポンで実質2,000円負担で予約する完全ガイド。標高1900m雲上の露天風呂、富山湾の海の幸、星空ツアーを満喫。',
  keywords: [
    'ふるさと納税 旅行',
    'ふるさと納税 温泉',
    '立山黒部 雲上リゾート＆アルペン名宿特集',
    '楽天ふるさと納税 トラベル',
    '立山黒部アルペンルートオフィシャルホテル　弥陀ヶ原ホテル',
    '立山高原ホテル',
    '立山連峰の宿　ホテル森の風立山',
    '高級温泉旅館',
    '絶景露天風呂',
    '実質2000円'
  ],
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-tateyama-kurobe-alpen-route-resort-stay/',
  },
  openGraph: {
    title: '標高2000m超の雲上リゾート！立山黒部アルペンルートの夕日・満天の星と高山植物トレッキング名宿×ふるさと納税完全攻略ガイド【2026年最新】弥陀ヶ原・立山高原・森の風',
    description: '世界有数の山岳観光ルート・立山黒部アルペンルート！雪の大谷、みくりが池、大パノラマの雲海。「弥陀ヶ原ホテル」「立山高原ホテル」「立山連峰の宿 ホテル森の風立山」を、富山県立山町・富山市の楽天ふるさと納税トラベルクーポンで実質2,000円負担で予約する完全ガイド。標高1900m雲上の露天風呂、富山湾の海の幸、星空ツアーを満喫。',
    url: 'https://croud-travel.pages.dev/furusato-tax-tateyama-kurobe-alpen-route-resort-stay',
    siteName: '旅行とホテル・ふるさと納税の総合ポータル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function FurusatoTateyamaAlpenRouteStayPage() {
  return (
    <article className="max-w-5xl mx-auto px-4 py-8 text-gray-800 leading-relaxed font-sans">
      {/* パンくずリスト */}
      <nav className="text-sm text-gray-500 mb-6 flex flex-wrap items-center gap-1.5" aria-label="Breadcrumb">
        <Link href="/" className="hover:underline hover:text-amber-700">ホーム</Link>
        <span>&gt;</span>
        <Link href="/travel-savings-guide" className="hover:underline hover:text-amber-700">ふるさと納税トラベル完全攻略ガイド</Link>
        <span>&gt;</span>
        <span className="text-gray-800 font-semibold">立山黒部 雲上リゾート＆アルペン名宿特集</span>
      </nav>

      {/* ヘッダー */}
      <header className="mb-10 pb-6 border-b border-gray-200">
        <div className="inline-block bg-gradient-to-r from-amber-600 to-amber-800 text-white text-xs md:text-sm font-bold px-3 py-1 rounded-full mb-3 shadow-sm">
          雪の大谷と雲上の星空！立山黒部アルペンルート特集
        </div>
        <h1 className="text-2xl md:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight mb-4">
          標高2000m超の雲上リゾート！立山黒部アルペンルートの夕日・満天の星と高山植物トレッキング名宿×ふるさと納税完全攻略ガイド【2026年最新】弥陀ヶ原・立山高原・森の風
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
          見渡す限りの雲海に沈む夕日、手に届きそうな満天の星。標高2000メートルの大自然に抱かれる立山黒部の極上ホリデーへ
        </h2>
        <p className="text-base md:text-lg text-gray-800 leading-relaxed mb-6">
          富山県と長野県を標高3,000メートル級の北アルプスを貫いて結ぶ、世界屈指の山岳観光ルート「立山黒部アルペンルート」。春の風物詩である高さ20メートルにも迫る雪の壁「雪の大谷」をはじめ、コバルトブルーの水面に立山連峰を映す神秘の「みくりが池」、ラムサール条約湿地に登録された「弥陀ヶ原（みだがはら）」の高山植物群落、そして毎秒10トン以上の水煙を上げる「黒部ダム」の大放水など、地球の息吹を肌で感じる大迫力のパノラマが広がります。立山黒部アルペンルートの醍醐味は、一般車両が入れない標高2,000メートル前後の高地に位置する雲上のリゾートホテルへの宿泊。日中の喧騒が静まり返った夕暮れ、眼下一面に広がる大雲海を黄金色に染めながら沈みゆく夕日や、遮るもののない漆黒の夜空を埋め尽くす満天の天の川は、宿泊者だけが出会える奇跡の絶景です。さらに山麓エリアには良質な美肌温泉が湧出しており、山歩きの疲れを優雅に癒やしてくれます。ディナーは、標高の高い山岳ホテルでありながら富山湾から直送される新鮮な海の幸（白えび、寒ブリ、ホタルイカ）や、富山県産黒毛和牛、名水ポークなどを贅沢に取り入れた本格フレンチフルコースや和食会席。本特集では、標高1,930mの高原湿原に佇み雲海と星空観察会が名物の「弥陀ヶ原ホテル」、標高2,300m天狗平に位置し大日連峰の稜線を望む「立山高原ホテル」、そして立山山麓の美肌温泉と壮大な吹き抜けロビーを誇る「立山連峰の宿 ホテル森の風立山」の3宿を厳選。富山県立山町・富山市への楽天ふるさと納税トラベルクーポン（寄付額の最大30％割引・有効期限3年）を活用して、実質自己負担2,000円で一生に一度は体験したい立山黒部の雲上旅をお得に予約しましょう。
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
          <li><a href="#three-points" className="text-amber-800 hover:underline font-medium">立山黒部 雲上リゾート＆アルペン名宿特集が選ばれる3つの理由</a></li>
          <li><a href="#hotel-1" className="text-amber-800 hover:underline font-medium">【第1選】立山黒部アルペンルートオフィシャルホテル　弥陀ヶ原ホテル</a></li>
          <li><a href="#hotel-2" className="text-amber-800 hover:underline font-medium">【第2選】立山高原ホテル</a></li>
          <li><a href="#hotel-3" className="text-amber-800 hover:underline font-medium">【第3選】立山連峰の宿　ホテル森の風立山</a></li>
          <li><a href="#furusato-step" className="text-amber-800 hover:underline font-medium">実質自己負担2,000円で予約する簡単4ステップ手順</a></li>
          <li><a href="#faq" className="text-amber-800 hover:underline font-medium">よくある質問（Q&A）</a></li>
        </ol>
      </section>

      {/* 3つの魅力セクション */}
      <section id="three-points" className="mb-14">
        <h2 className="text-xl md:text-3xl font-extrabold text-gray-900 mb-6 pb-2 border-b-2 border-amber-600 flex items-center gap-2">
          <span>🌟</span> 立山黒部 雲上リゾート＆アルペン名宿特集が選ばれる3つの理由
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <span className="text-3xl font-black text-amber-600 block mb-2">01</span>
            <h3 className="font-bold text-gray-900 text-lg mb-3 leading-snug">標高2000mの雲海とプラネタリウムのような満天の星！宿泊者だけの特別な感動体験</h3>
            <p className="text-sm text-gray-600 leading-relaxed">夕暮れの大雲海や、頭上に降るような天の川。ホテルの星空観察会や早朝散策で、大自然の神秘を肌で体感できます。</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <span className="text-3xl font-black text-amber-600 block mb-2">02</span>
            <h3 className="font-bold text-gray-900 text-lg mb-3 leading-snug">雪の大谷やみくりが池トレッキングの拠点！混雑を避けて優雅に巡るアルペンルート</h3>
            <p className="text-sm text-gray-600 leading-relaxed">朝一番の空いている時間帯に観光スポットへ直行可能。体力に合わせて高山植物や雄大な山岳パノラマを堪能できます。</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <span className="text-3xl font-black text-amber-600 block mb-2">03</span>
            <h3 className="font-bold text-gray-900 text-lg mb-3 leading-snug">立山町ふるさと納税で最大30％OFF！3年間有効クーポンで春の雪の大谷や秋の紅葉に予約</h3>
            <p className="text-sm text-gray-600 leading-relaxed">宿泊予約が集中するアルペンルートのホテルもふるさと納税なら実質2,000円。寄付から3年間有効なので安心して旅行を計画できます。</p>
          </div>
        </div>
      </section>

      {/* 宿紹介 1 */}
      <section id="hotel-1" className="mb-16 bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
        <div className="bg-gradient-to-r from-amber-700 to-amber-900 text-white p-4 md:p-6">
          <span className="bg-amber-500 text-white text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider mb-2 inline-block">厳選名宿 第1選</span>
          <h2 className="text-xl md:text-3xl font-bold leading-tight mb-2">
            立山黒部アルペンルートオフィシャルホテル　弥陀ヶ原ホテル
          </h2>
          <p className="text-xs md:text-sm text-amber-100">富山県立山町・標高1930m雲上の高原湿原！大パノラマの夕日と満天の星空観察会＆本格フレンチディナー（弥陀ヶ原ホテル・口コミ4.7超）</p>
        </div>
        <div className="p-6 md:p-8">
          <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600 bg-gray-50 p-4 rounded-xl">
            <div><strong>所在地:</strong> 富山県中新川郡立山町芦峅寺弥陀ヶ原</div>
            <div><strong>アクセス:</strong> 立山駅よりケーブルカーとバスで約40分　「弥陀ヶ原バス停」下りてすぐ</div>
            <div><strong>楽天評価:</strong> <span className="text-amber-600 font-bold text-base">★ 4.72</span> (77件)</div>
            <div><strong>参考価格:</strong> 1名あたり約28,600円〜</div>
          </div>
          <p className="text-base text-gray-800 leading-relaxed mb-6">ラムサール条約湿地に登録された広大な弥陀ヶ原湿原の目の前に佇む、雲上のネイチャーリゾートホテル。客室の大きな窓からは、見渡す限りの緑の湿原や大雲海、遠く富山湾の海岸線まで見渡すことができます。夕暮れ時にはラウンジやテラスで雲海に沈む神々しい夕日を眺め、夜にはホテル専属スタッフによる星空観察会やスライド上映会を開催。大浴場からは高原の清々しい景色を眺めながらゆったりと入浴できます。食事は山の上とは思えないクオリティを誇る本格フレンチフルコースまたは和食会席で、富山湾の新鮮な海の幸や地元食材を活かした極上のディナーを堪能できます。</p>
          <div className="hotel-special-wrapper">
            <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded-r-xl mb-6 text-sm text-amber-950">
              <strong className="block mb-1 font-bold">宿のこだわり・特徴:</strong>
              立川黒部アルペンルート内　標高1930ｍの雄大な自然に包まれながら過ごす特別な時間
            </div>
          </div>
          <div className="user-review-wrapper">
            <blockquote className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-xl mb-6 text-xs md:text-sm text-gray-700 italic">
              <strong>宿泊者の声:</strong> “とても楽しい滞在でした立山黒部を訪れる時にどこかで1泊したいと思い、こちらのホテルを選びました。弥陀ヶ原湿原のガイドツアーやスライドショーなど、滞在中のイベントが盛りだくさんでとても楽しめまし…　2026-09-03 17:28:53投稿 つづきはこちら”
            </blockquote>
          </div>
          <div className="pt-2">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D184017%26f_flg%3DPLAN"
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
            立山高原ホテル
          </h2>
          <p className="text-xs md:text-sm text-amber-100">富山県立山町・標高2300m天狗平！大日連峰を望む絶景ロケーション＆室堂やみくりが池へのアクセス抜群（立山高原ホテル）</p>
        </div>
        <div className="p-6 md:p-8">
          <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600 bg-gray-50 p-4 rounded-xl">
            <div><strong>所在地:</strong> 富山県中新川郡立山町天狗平</div>
            <div><strong>アクセス:</strong> 富山地方鉄道立山駅よりケーブルカーと高原バスを利用して約６０分</div>
            <div><strong>楽天評価:</strong> <span className="text-amber-600 font-bold text-base">★ 4.57</span> (14件)</div>
            <div><strong>参考価格:</strong> 1名あたり約34,400円〜</div>
          </div>
          <p className="text-base text-gray-800 leading-relaxed mb-6">アルペンルートの中心地・室堂のすぐ手前、標高2,300メートルの天狗平に位置する山岳高原ホテル。大日連峰の荒々しい岩峰と剱岳の雄姿を間近に仰ぐ圧倒的なロケーションが魅力です。春にはホテル周辺が巨大な雪壁に囲まれ、夏にはチングルマなどの高山植物が咲き乱れます。館内には展望大浴場やサウナを完備し、トレッキングの後の疲れた体を温かくリフレッシュ。夕食は富山の味覚を散りばめた季節の和食会席膳で、富山湾の白えびや新鮮な魚介、温かな鍋料理など、山岳ホテルならではの温もりあふれるおもてなしで心洗われる時間を過ごせます。</p>
          <div className="hotel-special-wrapper">
            <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded-r-xl mb-6 text-sm text-amber-950">
              <strong className="block mb-1 font-bold">宿のこだわり・特徴:</strong>
              【立山高原ホテル】　標高2,300ｍにある、北アルプス山岳リゾートホテル
            </div>
          </div>
          <div className="user-review-wrapper">
            <blockquote className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-xl mb-6 text-xs md:text-sm text-gray-700 italic">
              <strong>宿泊者の声:</strong> “露天風呂からの景色が最高で、お料理もとても美味しかったです。”
            </blockquote>
          </div>
          <div className="pt-2">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D197399%26f_flg%3DPLAN"
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
            立山連峰の宿　ホテル森の風立山
          </h2>
          <p className="text-xs md:text-sm text-amber-100">富山県富山市・立山山麓に佇む北欧風リゾート！つるつる美肌の天然温泉＆壮大な吹き抜けロビーと富山湾の旬魚会席（森の風立山）</p>
        </div>
        <div className="p-6 md:p-8">
          <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600 bg-gray-50 p-4 rounded-xl">
            <div><strong>所在地:</strong> 富山県富山市原3-6</div>
            <div><strong>アクセス:</strong> 立山駅よりお車にて約７分（送迎有り）</div>
            <div><strong>楽天評価:</strong> <span className="text-amber-600 font-bold text-base">★ 4.44</span> (656件)</div>
            <div><strong>参考価格:</strong> 1名あたり約19,250円〜</div>
          </div>
          <p className="text-base text-gray-800 leading-relaxed mb-6">立山黒部アルペンルートの富山側玄関口・立山駅近くの山麓に佇むハイグレード温泉リゾートホテル。館内に入ると、ガラス張りの壮大な吹き抜けロビーと暖炉が旅人を温かく迎え入れます。最大の自慢は、重曹成分を豊富に含み、入浴した瞬間に肌が滑らかになるアルカリ性単純温泉の大浴場。広々とした露天風呂やサウナ、箱蒸し風呂など多彩な温浴設備で名湯をじっくり満喫できます。夕食は富山湾の旬の魚介（白えび、寒ブリ、バイ貝）や地元産黒毛和牛を使った贅沢な創作和食会席で、翌日のアルペンルート観光に向けた最高の拠点となります。</p>
          <div className="hotel-special-wrapper">
            <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded-r-xl mb-6 text-sm text-amber-950">
              <strong className="block mb-1 font-bold">宿のこだわり・特徴:</strong>
              アルペンルート観光に絶好のホテルです。源泉掛け流し露天風呂付き『別邸 四季彩』が大好評です。
            </div>
          </div>
          <div className="user-review-wrapper">
            <blockquote className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-xl mb-6 text-xs md:text-sm text-gray-700 italic">
              <strong>宿泊者の声:</strong> “創作料理とスタッフの心遣いに癒される時間夕食の創作料理は、料理長の思いが込められており、とても美味しくいただけました。さらにスタッフの皆様の親切丁寧なもてなしにも癒されました。眺望がない部屋でした…　2026-08-26 08:01:10投稿 つづきはこちら”
            </blockquote>
          </div>
          <div className="pt-2">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D147597%26f_flg%3DPLAN"
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
            href="/furusato-tax-kurobe-unazuki-onsen-gorge-stay"
            className="block p-3 rounded-lg bg-white border border-gray-200 hover:border-amber-400 hover:shadow-xs transition-all text-sm text-amber-900 font-medium"
          >
            ▸ 【宇奈月温泉 黒部峡谷＆名門宿×ふるさと納税】延対寺荘・やまのは・延楽
          </Link>
          <Link
            href="/furusato-tax-kamikochi-japan-alps-resort-stay"
            className="block p-3 rounded-lg bg-white border border-gray-200 hover:border-amber-400 hover:shadow-xs transition-all text-sm text-amber-900 font-medium"
          >
            ▸ 【上高地 穂高連峰絶景＆山岳名宿×ふるさと納税】ルミエスタ・大正池ホテル・上高地温泉ホテル
          </Link>
          <Link
            href="/furusato-tax-furano-biei-lavender-nature-stay"
            className="block p-3 rounded-lg bg-white border border-gray-200 hover:border-amber-400 hover:shadow-xs transition-all text-sm text-amber-900 font-medium"
          >
            ▸ 【富良野・美瑛 ラベンダー＆青い池絶景宿×ふるさと納税】新富良野プリンス・オリカ・白金温泉ゆゆ
          </Link>
          <Link
            href="/furusato-tax-karuizawa-luxury-resort-villa-stay"
            className="block p-3 rounded-lg bg-white border border-gray-200 hover:border-amber-400 hover:shadow-xs transition-all text-sm text-amber-900 font-medium"
          >
            ▸ 【軽井沢 高原リゾート＆名門ホテル×ふるさと納税】マリオット・プリンスイースト・音羽ノ森
          </Link>
        </div>
      </section>
    </article>
  );
}
