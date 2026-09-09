import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '渡月橋と竹林の小径を巡る！京都・嵐山温泉の名門旅館＆客室露天×ふるさと納税完全攻略ガイド【2026年最新】渡月亭・翠嵐・花伝抄',
  description: '世界遺産・天龍寺や渡月橋、嵯峨野の竹林に抱かれた京都随一の名勝・嵐山温泉！「京都 嵐山温泉 渡月亭」「翠嵐 ラグジュアリーコレクションホテル 京都」「京都 嵐山温泉 花伝抄」を、京都市の楽天ふるさと納税トラベルクーポンで実質2,000円負担で予約する完全ガイド。伝統の京会席料理、保津川を望む天然温泉露天風呂、全館畳敷きの雅な和モダンステイを堪能。',
  keywords: [
    'ふるさと納税 旅行',
    'ふるさと納税 ホテル',
    '京都嵐山温泉＆名門宿特集',
    '楽天ふるさと納税 トラベル',
    '京都　嵐山温泉　渡月亭',
    '翠嵐ラグジュアリーコレクションホテル京都',
    '京都　嵐山温泉　花伝抄（共立リゾート）（２０２６年５月１日リニューアルオープン）',
    '露天風呂付き客室',
    'オーシャンビュー',
    '実質2000円'
  ],
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-kyoto-onsen-ryokan-machiya-stay',
  },
  openGraph: {
    title: '渡月橋と竹林の小径を巡る！京都・嵐山温泉の名門旅館＆客室露天×ふるさと納税完全攻略ガイド【2026年最新】渡月亭・翠嵐・花伝抄',
    description: '世界遺産・天龍寺や渡月橋、嵯峨野の竹林に抱かれた京都随一の名勝・嵐山温泉！「京都 嵐山温泉 渡月亭」「翠嵐 ラグジュアリーコレクションホテル 京都」「京都 嵐山温泉 花伝抄」を、京都市の楽天ふるさと納税トラベルクーポンで実質2,000円負担で予約する完全ガイド。伝統の京会席料理、保津川を望む天然温泉露天風呂、全館畳敷きの雅な和モダンステイを堪能。',
    url: 'https://croud-travel.pages.dev/furusato-tax-kyoto-onsen-ryokan-machiya-stay',
    siteName: '旅行とホテル・ふるさと納税の総合ポータル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function FurusatoKyotoOnsenRyokanStayPage() {
  return (
    <article className="max-w-5xl mx-auto px-4 py-8 text-gray-800 leading-relaxed font-sans">
      {/* パンくずリスト */}
      <nav className="text-sm text-gray-500 mb-6 flex flex-wrap items-center gap-1.5" aria-label="Breadcrumb">
        <Link href="/" className="hover:underline hover:text-amber-700">ホーム</Link>
        <span>&gt;</span>
        <Link href="/travel-savings-guide" className="hover:underline hover:text-amber-700">ふるさと納税トラベル完全攻略ガイド</Link>
        <span>&gt;</span>
        <span className="text-gray-800 font-semibold">京都嵐山温泉＆名門宿特集</span>
      </nav>

      {/* ヘッダー */}
      <header className="mb-10 pb-6 border-b border-gray-200">
        <div className="inline-block bg-gradient-to-r from-amber-600 to-amber-800 text-white text-xs md:text-sm font-bold px-3 py-1 rounded-full mb-3 shadow-sm">
          古都の最高峰！京都嵐山温泉名門宿特集
        </div>
        <h1 className="text-2xl md:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight mb-4">
          渡月橋と竹林の小径を巡る！京都・嵐山温泉の名門旅館＆客室露天×ふるさと納税完全攻略ガイド【2026年最新】渡月亭・翠嵐・花伝抄
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
          川のせせらぎと竹林を渡る風。開湯以来愛される嵐山温泉の名湯と繊細な京料理に心酔する大人の京都旅へ
        </h2>
        <p className="text-base md:text-lg text-gray-800 leading-relaxed mb-6">
          千年の都・京都の中でも、平安貴族たちが風流な別荘を構え舟遊びや紅葉狩りに興じた風光明媚の地「嵐山」。名勝・渡月橋のたもとを流れる桂川（保津川）、青々と天に伸びる竹林の小径、世界遺産・天龍寺の壮麗な庭園など、日本が世界に誇る美意識が凝縮されています。そして散策の疲れを優しく包み込んでくれるのが、まろやかな肌触りで「美肌の湯」として親しまれる嵐山温泉の天然温泉。数奇屋造りの静閑な空間でいただく出汁の利いた本格京会席、保津川の渓谷美を眺めながら浸かる客室露天風呂、そして全館畳敷きの素足の心地よさは、日常を忘れさせる至高の癒やしをもたらします。本特集では、明治30年創業・渡月橋の南詰に佇み歴代の文人墨客に愛された老舗「京都 嵐山温泉 渡月亭」、保津川の清流沿いに建ち世界的ラグジュアリーと和の伝統が融合した最高峰ホテル「翠嵐 ラグジュアリーコレクションホテル 京都」、そして阪急嵐山駅徒歩1分・全館畳敷きで5つの無料貸切風呂と京都旬会席ビュッフェが評判の「京都 嵐山温泉 花伝抄」の3宿を厳選。京都市への楽天ふるさと納税トラベルクーポン（寄付額の最大30％割引・有効期限3年）を活用して、実質自己負担2,000円で憧れの嵐山名門ステイを叶えましょう。
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
          <li><a href="#three-points" className="text-amber-800 hover:underline font-medium">京都嵐山温泉＆名門宿特集が選ばれる3つの理由</a></li>
          <li><a href="#hotel-1" className="text-amber-800 hover:underline font-medium">【第1選】京都　嵐山温泉　渡月亭</a></li>
          <li><a href="#hotel-2" className="text-amber-800 hover:underline font-medium">【第2選】翠嵐ラグジュアリーコレクションホテル京都</a></li>
          <li><a href="#hotel-3" className="text-amber-800 hover:underline font-medium">【第3選】京都　嵐山温泉　花伝抄（共立リゾート）（２０２６年５月１日リニューアルオープン）</a></li>
          <li><a href="#furusato-step" className="text-amber-800 hover:underline font-medium">実質自己負担2,000円で予約する簡単4ステップ手順</a></li>
          <li><a href="#faq" className="text-amber-800 hover:underline font-medium">よくある質問（Q&A）</a></li>
        </ol>
      </section>

      {/* 3つの魅力セクション */}
      <section id="three-points" className="mb-14">
        <h2 className="text-xl md:text-3xl font-extrabold text-gray-900 mb-6 pb-2 border-b-2 border-amber-600 flex items-center gap-2">
          <span>🌟</span> 京都嵐山温泉＆名門宿特集が選ばれる3つの理由
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <span className="text-3xl font-black text-amber-600 block mb-2">01</span>
            <h3 className="font-bold text-gray-900 text-lg mb-3 leading-snug">渡月橋や竹林の小径へ徒歩圏内！朝夕の静寂に包まれた嵐山を独占できる立地</h3>
            <p className="text-sm text-gray-600 leading-relaxed">日中の観光客で賑わう時間を避け、早朝の澄んだ空気の中で竹林の小径を散歩したり、夕暮れの渡月橋を眺めたりと、宿泊者だけの特別な京都時間を過ごせます。</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <span className="text-3xl font-black text-amber-600 block mb-2">02</span>
            <h3 className="font-bold text-gray-900 text-lg mb-3 leading-snug">肌を滑らかに包む嵐山温泉！渓流を望む露天風呂や多彩な貸切風呂で湯浴み</h3>
            <p className="text-sm text-gray-600 leading-relaxed">微白色の低張性弱アルカリ性温泉は湯あたりしにくく、湯上がりは肌がしっとりすべすべに。客室専用露天風呂や趣の異なる貸切風呂で心ゆくまで名湯を堪能できます。</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <span className="text-3xl font-black text-amber-600 block mb-2">03</span>
            <h3 className="font-bold text-gray-900 text-lg mb-3 leading-snug">京都市ふるさと納税で最大30％OFF！3年間有効クーポンで四季の京都旅行に使える</h3>
            <p className="text-sm text-gray-600 leading-relaxed">桜の春、新緑の初夏、紅葉の秋、静寂の雪景色と、訪れる季節ごとに異なる表情を見せる嵐山。有効期限が3年あるため、最も訪れたい季節に合わせて計画的に予約できます。</p>
          </div>
        </div>
      </section>

      {/* 宿紹介 1 */}
      <section id="hotel-1" className="mb-16 bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
        <div className="bg-gradient-to-r from-amber-700 to-amber-900 text-white p-4 md:p-6">
          <span className="bg-amber-500 text-white text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider mb-2 inline-block">厳選名宿 第1選</span>
          <h2 className="text-xl md:text-3xl font-bold leading-tight mb-2">
            京都　嵐山温泉　渡月亭
          </h2>
          <p className="text-xs md:text-sm text-amber-100">京都府京都市・創業百二十七年！名勝渡月橋南詰に佇む嵐山温泉の老舗料理旅館と本格京会席</p>
        </div>
        <div className="p-6 md:p-8">
          <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600 bg-gray-50 p-4 rounded-xl">
            <div><strong>所在地:</strong> 京都府京都市西京区嵐山中尾下町54-4（渡月橋南詰め）</div>
            <div><strong>アクセス:</strong> 京都駅よりＪＲ嵯峨野線嵯峨嵐山駅下車徒歩１５分。阪急京都線桂駅より嵐山線嵐山駅下車徒歩５分。名神京都南ＩＣより約４０分</div>
            <div><strong>楽天評価:</strong> <span className="text-amber-600 font-bold text-base">★ 3.82</span> (253件)</div>
            <div><strong>参考価格:</strong> 1名あたり約23,400円〜</div>
          </div>
          <p className="text-base text-gray-800 leading-relaxed mb-6">明治30年創業、渡月橋を渡ってすぐ南の静閑な愛宕山山麓に佇む老舗名門旅館。創業以来受け継がれてきた伝統の京料理は、旬の京野菜や若狭の鮮魚、丹波牛を職人が一品一品丁寧に仕上げ、お部屋食でゆっくりと味わえます。天然温泉「嵐山温泉」を引いた大浴場や露天風呂はヒノキの香り漂う落ち着いた造りで、旅の疲れを優しく癒やしてくれます。嵐山の自然景観に溶け込む数寄屋風の客室からは四季の山並みが望め、京都の歴史と雅やかな情緒に浸りたい大人の旅に選ばれ続けている名宿です。</p>
          <div className="hotel-special-wrapper">
            <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded-r-xl mb-6 text-sm text-amber-950">
              <strong className="block mb-1 font-bold">宿のこだわり・特徴:</strong>
              【料亭旅館】嵐山・嵯峨野散策に最適な京都・嵐山温泉の宿。
            </div>
          </div>
          <div className="user-review-wrapper">
            <blockquote className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-xl mb-6 text-xs md:text-sm text-gray-700 italic">
              <strong>宿泊者の声:</strong> “眺望も素晴らしく、温泉もお料理も大満足でした。また利用します。”
            </blockquote>
          </div>
          <div className="pt-2">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D8838%26f_flg%3DPLAN"
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
            翠嵐ラグジュアリーコレクションホテル京都
          </h2>
          <p className="text-xs md:text-sm text-amber-100">京都府京都市・保津川の清流を望む世界最高峰ラグジュアリー！全客室に天然温泉露天風呂完備の極上空間</p>
        </div>
        <div className="p-6 md:p-8">
          <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600 bg-gray-50 p-4 rounded-xl">
            <div><strong>所在地:</strong> 京都府京都市右京区嵯峨天龍寺芒ノ馬場町12</div>
            <div><strong>アクセス:</strong> 京福電鉄嵐山本線 嵐山駅 より徒歩約６分　阪急嵐山線 嵐山駅  、JR山陰本線 嵯峨野線  嵯峨嵐山駅 より徒歩約15分</div>
            <div><strong>楽天評価:</strong> <span className="text-amber-600 font-bold text-base">★ 4.69</span> (30件)</div>
            <div><strong>参考価格:</strong> 1名あたり約49,525円〜</div>
          </div>
          <p className="text-base text-gray-800 leading-relaxed mb-6">マリオットの最高級ブランド「ラグジュアリーコレクション」として嵐山・保津川沿いに誕生した珠玉のリゾートホテル。かつて貴族が別荘を構えた風光明媚な敷地に佇み、全客室の多くに嵐山温泉を湛えた専用露天風呂またはプライベートバルコニーを完備。築100年を超える歴史的建造物を改装したカフェ「茶寮 八翠」では、保津川の絶景を眺めながらシャンパンのフリーフローが楽しめるイブニングレセプションを開催。伝統的な和の美意識とグローバルな最高級サービスが融合した、京都で最も贅沢な時間を約束する名門宿です。</p>
          <div className="hotel-special-wrapper">
            <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded-r-xl mb-6 text-sm text-amber-950">
              <strong className="block mb-1 font-bold">宿のこだわり・特徴:</strong>
              京都の歴史に育まれた伝統とモダンの美が融け合う空間で、この地ならではの格別な体験をご提供いたします。
            </div>
          </div>
          <div className="user-review-wrapper">
            <blockquote className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-xl mb-6 text-xs md:text-sm text-gray-700 italic">
              <strong>宿泊者の声:</strong> “スタッフの方のおもてなしが素晴らしく、ゆったりと寛げました。”
            </blockquote>
          </div>
          <div className="pt-2">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D158466%26f_flg%3DPLAN"
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
            京都　嵐山温泉　花伝抄（共立リゾート）（２０２６年５月１日リニューアルオープン）
          </h2>
          <p className="text-xs md:text-sm text-amber-100">京都府京都市・阪急嵐山駅徒歩1分！全館畳敷き＆趣の異なる5つの無料貸切風呂と京の味覚バイキング</p>
        </div>
        <div className="p-6 md:p-8">
          <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600 bg-gray-50 p-4 rounded-xl">
            <div><strong>所在地:</strong> 京都府京都市西京区嵐山西一川町5-4</div>
            <div><strong>アクセス:</strong> 阪急嵐山線「嵐山駅」より徒歩１分。JR「京都駅」より約30分、阪急「梅田駅」より約50分。</div>
            <div><strong>楽天評価:</strong> <span className="text-amber-600 font-bold text-base">★ 4.42</span> (1955件)</div>
            <div><strong>参考価格:</strong> 1名あたり約10,700円〜</div>
          </div>
          <p className="text-base text-gray-800 leading-relaxed mb-6">阪急嵐山駅の目の前に建ち、館内全館が畳敷きとなっており素足でゆったりと過ごせる共立リゾートの人気温泉旅館。大浴場「平安の湯」に加えて、樽風呂やレンガ風呂、竹炭風呂など趣の異なる5つの貸切露天風呂が空いていれば何度でも無料で利用できるのが最大の魅力。客室は和の風情とローベッドの快適性を兼ね備えた和モダン設計。夕食は季節の和食会席に加えて、揚げたての天ぷらや京のおばんざいを好きなだけ注文できるオーダービュッフェスタイルで、京都の美食を気兼ねなく満喫できます。</p>
          <div className="hotel-special-wrapper">
            <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded-r-xl mb-6 text-sm text-amber-950">
              <strong className="block mb-1 font-bold">宿のこだわり・特徴:</strong>
              渡月橋まで徒歩約5分！目の前の阪急嵐山駅より京都の中心街まですぐ！天然温泉と5つの貸切風呂が無料！
            </div>
          </div>
          <div className="user-review-wrapper">
            <blockquote className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-xl mb-6 text-xs md:text-sm text-gray-700 italic">
              <strong>宿泊者の声:</strong> “天ぷらとおばんざいが絶品、また泊まりたい懐石料理を頼みました天ぷらはすっごく美味しかったです!!おばんざいも京都ならではの優しいお出汁と湯葉が美味しかったです!次回も旅行の際は泊まりたいです…　2026-09-01 22:32:51投稿 つづきはこちら”
            </blockquote>
          </div>
          <div className="pt-2">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D130702%26f_flg%3DPLAN"
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
              <span>花火大会や京都の紅葉・桜シーズンでも利用できますか？</span>
              <span className="text-amber-600 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="mt-3 text-xs md:text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
              はい、対象ホテルの空室があれば、花火開催日や桜・紅葉のピークシーズンでも除外日なくクーポンをご利用いただけます。
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
            href="/furusato-tax-traditional-crafts-pottery-gold-leaf-washi-stay"
            className="block p-3 rounded-lg bg-white border border-gray-200 hover:border-amber-400 hover:shadow-xs transition-all text-sm text-amber-900 font-medium"
          >
            ▸ 【伝統工芸・日本文化体験宿×ふるさと納税】京都・金沢の名門旅館
          </Link>
          <Link
            href="/furusato-tax-tangible-cultural-property-sukiya-carpenter-ryokan-stay"
            className="block p-3 rounded-lg bg-white border border-gray-200 hover:border-amber-400 hover:shadow-xs transition-all text-sm text-amber-900 font-medium"
          >
            ▸ 【登録有形文化財・宮大工数寄屋造り旅館×ふるさと納税】木造建築美の宿
          </Link>
          <Link
            href="/furusato-tax-hakone-onsen-open-air-bath-stay"
            className="block p-3 rounded-lg bg-white border border-gray-200 hover:border-amber-400 hover:shadow-xs transition-all text-sm text-amber-900 font-medium"
          >
            ▸ 【箱根湯本名湯温泉＆大露天風呂宿×ふるさと納税】ロマンスカー直通名宿
          </Link>
          <Link
            href="/furusato-tax-atami-ocean-view-fireworks-hotel-stay"
            className="block p-3 rounded-lg bg-white border border-gray-200 hover:border-amber-400 hover:shadow-xs transition-all text-sm text-amber-900 font-medium"
          >
            ▸ 【熱海花火大会＆オーシャンビューホテル×ふるさと納税】特等席鑑賞
          </Link>
        </div>
      </section>
    </article>
  );
}
