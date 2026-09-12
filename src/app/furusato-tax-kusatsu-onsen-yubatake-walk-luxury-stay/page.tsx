import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '天下の名湯・草津温泉の真髄を味わう！湯畑徒歩圏＆名物源泉掛け流し名門旅館×ふるさと納税完全攻略ガイド【2026年最新】櫻井・一井・奈良屋',
  description: '日本三名泉の筆頭・草津温泉！立ちのぼる湯煙と幻想的な夜のライトアップに包まれる湯畑へ徒歩すぐ。「草津温泉 ホテル櫻井」「草津温泉 ホテル一井」「草津温泉 奈良屋」を、群馬県草津町の楽天ふるさと納税トラベルクーポンで実質2,000円負担で予約する完全ガイド。約30mの大浴場、湯守が守る白旗源泉、湯畑一望客室を堪能。',
  keywords: [
    'ふるさと納税 旅行',
    'ふるさと納税 ホテル',
    '草津温泉 湯畑散策＆名湯名門宿特集',
    '楽天ふるさと納税 トラベル',
    '草津温泉　ホテル櫻井',
    '草津温泉　ホテル一井',
    '草津温泉　奈良屋',
    '高級温泉旅館',
    'プライベートステイ',
    '実質2000円'
  ],
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-kusatsu-onsen-yubatake-walk-luxury-stay/',
  },
  openGraph: {
    title: '天下の名湯・草津温泉の真髄を味わう！湯畑徒歩圏＆名物源泉掛け流し名門旅館×ふるさと納税完全攻略ガイド【2026年最新】櫻井・一井・奈良屋',
    description: '日本三名泉の筆頭・草津温泉！立ちのぼる湯煙と幻想的な夜のライトアップに包まれる湯畑へ徒歩すぐ。「草津温泉 ホテル櫻井」「草津温泉 ホテル一井」「草津温泉 奈良屋」を、群馬県草津町の楽天ふるさと納税トラベルクーポンで実質2,000円負担で予約する完全ガイド。約30mの大浴場、湯守が守る白旗源泉、湯畑一望客室を堪能。',
    url: 'https://croud-travel.pages.dev/furusato-tax-kusatsu-onsen-yubatake-walk-luxury-stay',
    siteName: '旅行とホテル・ふるさと納税の総合ポータル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function FurusatoKusatsuYubatakeWalkStayPage() {
  return (
    <article className="max-w-5xl mx-auto px-4 py-8 text-gray-800 leading-relaxed font-sans">
      {/* パンくずリスト */}
      <nav className="text-sm text-gray-500 mb-6 flex flex-wrap items-center gap-1.5" aria-label="Breadcrumb">
        <Link href="/" className="hover:underline hover:text-amber-700">ホーム</Link>
        <span>&gt;</span>
        <Link href="/travel-savings-guide" className="hover:underline hover:text-amber-700">ふるさと納税トラベル完全攻略ガイド</Link>
        <span>&gt;</span>
        <span className="text-gray-800 font-semibold">草津温泉 湯畑散策＆名湯名門宿特集</span>
      </nav>

      {/* ヘッダー */}
      <header className="mb-10 pb-6 border-b border-gray-200">
        <div className="inline-block bg-gradient-to-r from-amber-600 to-amber-800 text-white text-xs md:text-sm font-bold px-3 py-1 rounded-full mb-3 shadow-sm">
          日本一の名湯！草津温泉 湯畑名門宿特集
        </div>
        <h1 className="text-2xl md:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight mb-4">
          天下の名湯・草津温泉の真髄を味わう！湯畑徒歩圏＆名物源泉掛け流し名門旅館×ふるさと納税完全攻略ガイド【2026年最新】櫻井・一井・奈良屋
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-xs md:text-sm text-gray-500">
          <time dateTime="2026-09-09">2026年9月9日公開</time>
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
          エメラルドグリーンに輝く湯畑と立ちのぼる硫黄の湯煙。天下の名湯・草津で過ごす、心洗われる贅沢な温泉旅へ
        </h2>
        <p className="text-base md:text-lg text-gray-800 leading-relaxed mb-6">
          毎分3万2千リットル以上という日本一の自然湧出量を誇り、古くから「恋の病以外なら何でも治す」と称えられてきた天下の名湯「草津温泉」。その中心に位置する湯畑（ゆばたけ）は、湯滝が豪快にしぶきを上げ、夜には幻想的なライティングで照らし出される草津の象徴です。浴衣に下駄を鳴らして温泉街をそぞろ歩き、温泉まんじゅうを食べ比べ、射的や足湯を楽しんだ後は、宿の源泉掛け流しの大浴場へ。草津温泉の強酸性泉（pH2前後）は抜群の殺菌力と温まり効果を持ち、日頃のストレスや身体の疲れを芯から洗い流してくれます。本特集では、草津最大級・約30mの大浴場と毎晩の湯もみショー・和太鼓演奏が圧巻の「草津温泉 ホテル櫻井」、江戸時代創業・湯畑の一番街正面に建ち湯畑を眼下に望む客室が評判の「草津温泉 ホテル一井」、そして明治10年創業・熟練の「湯守（ゆもり）」が絶妙な湯加減と滑らかな肌触りに仕立てる白旗源泉の名門「草津温泉 奈良屋」の3大老舗を厳選。群馬県草津町への楽天ふるさと納税トラベルクーポン（寄付額の最大30％割引・有効期限3年）を活用して、実質自己負担2,000円で最高峰の草津名湯ステイを予約しましょう。
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
          <li><a href="#three-points" className="text-amber-800 hover:underline font-medium">草津温泉 湯畑散策＆名湯名門宿特集が選ばれる3つの理由</a></li>
          <li><a href="#hotel-1" className="text-amber-800 hover:underline font-medium">【第1選】草津温泉　ホテル櫻井</a></li>
          <li><a href="#hotel-2" className="text-amber-800 hover:underline font-medium">【第2選】草津温泉　ホテル一井</a></li>
          <li><a href="#hotel-3" className="text-amber-800 hover:underline font-medium">【第3選】草津温泉　奈良屋</a></li>
          <li><a href="#furusato-step" className="text-amber-800 hover:underline font-medium">実質自己負担2,000円で予約する簡単4ステップ手順</a></li>
          <li><a href="#faq" className="text-amber-800 hover:underline font-medium">よくある質問（Q&A）</a></li>
        </ol>
      </section>

      {/* 3つの魅力セクション */}
      <section id="three-points" className="mb-14">
        <h2 className="text-xl md:text-3xl font-extrabold text-gray-900 mb-6 pb-2 border-b-2 border-amber-600 flex items-center gap-2">
          <span>🌟</span> 草津温泉 湯畑散策＆名湯名門宿特集が選ばれる3つの理由
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <span className="text-3xl font-black text-amber-600 block mb-2">01</span>
            <h3 className="font-bold text-gray-900 text-lg mb-3 leading-snug">湯畑へ徒歩すぐの絶好ロケーション！浴衣でそぞろ歩く情緒あふれる温泉街</h3>
            <p className="text-sm text-gray-600 leading-relaxed">夜の湯畑ライトアップや足湯「湯けむり亭」、お土産物屋巡りも浴衣のまま気兼ねなく散策。草津情緒を朝から晩まで余すところなく満喫できます。</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <span className="text-3xl font-black text-amber-600 block mb-2">02</span>
            <h3 className="font-bold text-gray-900 text-lg mb-3 leading-snug">酸性度日本屈指の強酸性美肌泉！湯畑・万代鉱・西の河原など多彩な源泉巡り</h3>
            <p className="text-sm text-gray-600 leading-relaxed">加水・加温なしの圧倒的な天然温泉掛け流し。湯守が手作業で湯もみを行い、空気を含ませてまろやかに整えた極上の湯を肌で体感できます。</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <span className="text-3xl font-black text-amber-600 block mb-2">03</span>
            <h3 className="font-bold text-gray-900 text-lg mb-3 leading-snug">草津町ふるさと納税で最大30％OFF！3年間有効クーポンで四季の湯治旅に使える</h3>
            <p className="text-sm text-gray-600 leading-relaxed">雪見露天が美しい冬、爽やかな夏の避暑、秋の紅葉など、草津のベストシーズンに合わせて柔軟に利用可能。直前の予約でも「あとからクーポン適用」が可能です。</p>
          </div>
        </div>
      </section>

      {/* 宿紹介 1 */}
      <section id="hotel-1" className="mb-16 bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
        <div className="bg-gradient-to-r from-amber-700 to-amber-900 text-white p-4 md:p-6">
          <span className="bg-amber-500 text-white text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider mb-2 inline-block">厳選名宿 第1選</span>
          <h2 className="text-xl md:text-3xl font-bold leading-tight mb-2">
            草津温泉　ホテル櫻井
          </h2>
          <p className="text-xs md:text-sm text-amber-100">群馬県草津町・草津最大級！長さ約30mの大浴場＆毎晩開催される「湯もみショー」「和太鼓演奏」が圧巻の名門宿</p>
        </div>
        <div className="p-6 md:p-8">
          <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600 bg-gray-50 p-4 rounded-xl">
            <div><strong>所在地:</strong> 群馬県吾妻郡草津町大字草津465-4</div>
            <div><strong>アクセス:</strong> ＪＲ吾妻線長野原草津口駅からバスで約28分／関越道渋川伊香保ＩＣ又は上信越道碓井軽井沢IC経由／ＪＲ高速バスゆめぐり号</div>
            <div><strong>楽天評価:</strong> <span className="text-amber-600 font-bold text-base">★ 4.52</span> (5001件)</div>
            <div><strong>参考価格:</strong> 1名あたり約14,300円〜</div>
          </div>
          <p className="text-base text-gray-800 leading-relaxed mb-6">草津温泉の高台に位置し、口コミ5,000件超・総合4.5以上の圧倒的な実績を誇る大型名門ホテル。館内には長さ約30mを誇る草津最大級の大浴場「千歳の湯」があり、貴重な「万代鉱・西の河原・綿の湯」の3源泉を贅沢に引き込んでいます。白濁した綿の湯の露天風呂は美肌効果抜群。毎晩お祭り広場で開催される伝統の「湯もみショー」や勇壮な「櫻井太鼓」の生演奏は宿泊者から大絶賛。夕食は上州牛のステーキやすき焼きをはじめ、出来立ての天ぷらや郷土料理が並ぶ豪華バイキング、または数寄屋造り料亭での会席料理を堪能できます。</p>
          <div className="hotel-special-wrapper">
            <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded-r-xl mb-6 text-sm text-amber-950">
              <strong className="block mb-1 font-bold">宿のこだわり・特徴:</strong>
              5ツ星★認定の宿　華やかな近代和風旅館で草津最大級の源泉100%かけ流し温泉を堪能
            </div>
          </div>
          <div className="user-review-wrapper">
            <blockquote className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-xl mb-6 text-xs md:text-sm text-gray-700 italic">
              <strong>宿泊者の声:</strong> “ファミリー向けバイキングバイキングを楽しみにして行きました。もっと肉肉なのかなーと思ってましたが、そんなに肉の種類が多いとは感じませんでした。ステーキはとてもおいしかったです。それ以外も全世代が満…　2026-09-05 08:43:15投稿 つづきはこちら”
            </blockquote>
          </div>
          <div className="pt-2">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D56137%26f_flg%3DPLAN"
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
            草津温泉　ホテル一井
          </h2>
          <p className="text-xs md:text-sm text-amber-100">群馬県草津町・湯畑の目の前一番街！江戸時代創業・湯畑を見下ろす特等席客室と二つの貴重な源泉掛け流し</p>
        </div>
        <div className="p-6 md:p-8">
          <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600 bg-gray-50 p-4 rounded-xl">
            <div><strong>所在地:</strong> 群馬県吾妻郡草津町草津411</div>
            <div><strong>アクセス:</strong> ＪＲ吾妻線　長野原草津口駅より路線バス２５分</div>
            <div><strong>楽天評価:</strong> <span className="text-amber-600 font-bold text-base">★ 4.62</span> (3251件)</div>
            <div><strong>参考価格:</strong> 1名あたり約18,700円〜</div>
          </div>
          <p className="text-base text-gray-800 leading-relaxed mb-6">草津温泉のランドマーク「湯畑」の真正面に建ち、江戸時代から旅人を迎え続けてきた創業三百有余年の老舗旅館。最大の魅力は、窓を開ければ眼下にエメラルドグリーンの湯畑と立ちのぼる湯煙が広がる「湯畑前客室」。夜にはライトアップされた湯畑を部屋から見下ろす贅沢な時間が流れます。大浴場には白濁した肌触りの「湯畑前白旗源泉」を、露天風呂には透明でピリッとした刺激が心地よい「白根山万代鉱源泉」を引き、2つの異なる泉質を楽しめます。夕食は群馬の旬の味覚を盛り込んだ和食会席をお部屋や食事処でじっくりと味わえます。</p>
          <div className="hotel-special-wrapper">
            <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded-r-xl mb-6 text-sm text-amber-950">
              <strong className="block mb-1 font-bold">宿のこだわり・特徴:</strong>
              20室のみの湯畑眺望客室は希少！すき焼きやライブキッチンでのお寿司などを楽しめるビュッフェが話題
            </div>
          </div>
          <div className="user-review-wrapper">
            <blockquote className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-xl mb-6 text-xs md:text-sm text-gray-700 italic">
              <strong>宿泊者の声:</strong> “バイキングとラウンジを満喫、大満足の旅バイキングが食べきれないくらい種類が多く、ライブのお寿司もとても美味しかったです。お部屋は湯畑の見えないら部屋でしたか、湯畑の見えてゆっくりできるラウンジがあ…　2026-09-05 07:03:38投稿 つづきはこちら”
            </blockquote>
          </div>
          <div className="pt-2">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D39705%26f_flg%3DPLAN"
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
            草津温泉　奈良屋
          </h2>
          <p className="text-xs md:text-sm text-amber-100">群馬県草津町・明治十年創業！湯守が丹念に育てる「白旗源泉」の極上湯と大人のための静寂純和風旅館</p>
        </div>
        <div className="p-6 md:p-8">
          <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600 bg-gray-50 p-4 rounded-xl">
            <div><strong>所在地:</strong> 群馬県吾妻郡草津町草津396</div>
            <div><strong>アクセス:</strong> ＪＲ長野原草津口駅よりＪＲバスで草温泉へ２５分、下車後送迎バスあり。（原則　8:30～18:00 ）</div>
            <div><strong>楽天評価:</strong> <span className="text-amber-600 font-bold text-base">★ 4.68</span> (910件)</div>
            <div><strong>参考価格:</strong> 1名あたり約34,303円〜</div>
          </div>
          <p className="text-base text-gray-800 leading-relaxed mb-6">湯畑から徒歩1分、賑わう温泉街のすぐそばにありながら一歩足を踏み入れると別世界の静寂が広がる純和風名旅館。奈良屋の代名詞は、専任の「湯守（ゆもり）」が温度や天候に応じて一晩かけて湯をもみ、肌当たりを驚くほどまろやかに熟成させた「白旗源泉」のお湯。木造の風格ある大浴場「御汲上の湯」や信楽焼の貸切風呂で極上の湯浴みが叶います。館内には囲炉裏のあるサロンやモダンな「喫茶去」が備わり、大人の隠れ家に最適。夕食は地場の上州牛や旬の山菜を繊細に仕立てた本格和会席膳を個室食事処でゆったりと堪能できます。</p>
          <div className="hotel-special-wrapper">
            <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded-r-xl mb-6 text-sm text-amber-950">
              <strong className="block mb-1 font-bold">宿のこだわり・特徴:</strong>
              湯畑すぐ。草津最古の源泉『白旗の湯』を楽しめる老舗宿。
            </div>
          </div>
          <div className="user-review-wrapper">
            <blockquote className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-xl mb-6 text-xs md:text-sm text-gray-700 italic">
              <strong>宿泊者の声:</strong> “食事はどの料理も美味しかったです目の前で握っていただけるお寿司も良いパフォーマンスですね部屋にある冷蔵庫に飲みかけの水(部屋に置いてあるペットボトルと同じもの)が入っていたので 前のお客さ…　2026-09-05 17:17:57投稿 つづきはこちら”
            </blockquote>
          </div>
          <div className="pt-2">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D70807%26f_flg%3DPLAN"
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
            href="/furusato-tax-pure-100-percent-kakenagashi-onsen-stay"
            className="block p-3 rounded-lg bg-white border border-gray-200 hover:border-amber-400 hover:shadow-xs transition-all text-sm text-amber-900 font-medium"
          >
            ▸ 【源泉かけ流し100％名湯×ふるさと納税】加水加温なしの本物の温泉宿
          </Link>
          <Link
            href="/furusato-tax-indoor-pool-kids-family-resort-stay"
            className="block p-3 rounded-lg bg-white border border-gray-200 hover:border-amber-400 hover:shadow-xs transition-all text-sm text-amber-900 font-medium"
          >
            ▸ 【一年中泳げる室内温水プール宿×ふるさと納税】那須・草津・別府リゾート
          </Link>
          <Link
            href="/furusato-tax-hakone-onsen-open-air-bath-stay"
            className="block p-3 rounded-lg bg-white border border-gray-200 hover:border-amber-400 hover:shadow-xs transition-all text-sm text-amber-900 font-medium"
          >
            ▸ 【箱根湯本名湯温泉＆大露天風呂宿×ふるさと納税】ロマンスカー直通名宿
          </Link>
          <Link
            href="/furusato-tax-all-inclusive-free-drinks-alcohol-stay"
            className="block p-3 rounded-lg bg-white border border-gray-200 hover:border-amber-400 hover:shadow-xs transition-all text-sm text-amber-900 font-medium"
          >
            ▸ 【お酒飲み放題オールインクルーシブ宿×ふるさと納税】贅沢ラウンジステイ
          </Link>
        </div>
      </section>
    </article>
  );
}
