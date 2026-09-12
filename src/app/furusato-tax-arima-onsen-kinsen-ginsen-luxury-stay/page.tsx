import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '日本最古の名湯！有馬温泉の金泉・銀泉めぐり＆最高峰神戸牛会席老舗旅館×ふるさと納税完全攻略ガイド【2026年最新】兵衛向陽閣・御所坊・月光園鴻朧館',
  description: '日本三古湯・日本三名泉の頂点に君臨する有馬温泉！鉄分と塩分を豊富に含む赤褐色の「金泉」と無色透明の炭酸ラドン泉「銀泉」。「兵衛向陽閣」「陶泉 御所坊」「月光園 鴻朧館」を、兵庫県神戸市の楽天ふるさと納税トラベルクーポンで実質2,000円負担で予約する完全ガイド。創業七百年の格式、半混浴金泉掛け流し、極上神戸牛会席を満喫。',
  keywords: [
    'ふるさと納税 旅行',
    'ふるさと納税 温泉',
    '有馬温泉 金泉銀泉＆名門旅館特集',
    '楽天ふるさと納税 トラベル',
    '有馬温泉　兵衛向陽閣',
    '有馬温泉　陶泉　御所坊',
    '有馬温泉　月光園　鴻朧館',
    '高級温泉旅館',
    '源泉かけ流し',
    '実質2000円'
  ],
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-arima-onsen-kinsen-ginsen-luxury-stay/',
  },
  openGraph: {
    title: '日本最古の名湯！有馬温泉の金泉・銀泉めぐり＆最高峰神戸牛会席老舗旅館×ふるさと納税完全攻略ガイド【2026年最新】兵衛向陽閣・御所坊・月光園鴻朧館',
    description: '日本三古湯・日本三名泉の頂点に君臨する有馬温泉！鉄分と塩分を豊富に含む赤褐色の「金泉」と無色透明の炭酸ラドン泉「銀泉」。「兵衛向陽閣」「陶泉 御所坊」「月光園 鴻朧館」を、兵庫県神戸市の楽天ふるさと納税トラベルクーポンで実質2,000円負担で予約する完全ガイド。創業七百年の格式、半混浴金泉掛け流し、極上神戸牛会席を満喫。',
    url: 'https://croud-travel.pages.dev/furusato-tax-arima-onsen-kinsen-ginsen-luxury-stay',
    siteName: '旅行とホテル・ふるさと納税の総合ポータル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function FurusatoArimaOnsenKinsenGinsenStayPage() {
  return (
    <article className="max-w-5xl mx-auto px-4 py-8 text-gray-800 leading-relaxed font-sans">
      {/* パンくずリスト */}
      <nav className="text-sm text-gray-500 mb-6 flex flex-wrap items-center gap-1.5" aria-label="Breadcrumb">
        <Link href="/" className="hover:underline hover:text-amber-700">ホーム</Link>
        <span>&gt;</span>
        <Link href="/travel-savings-guide" className="hover:underline hover:text-amber-700">ふるさと納税トラベル完全攻略ガイド</Link>
        <span>&gt;</span>
        <span className="text-gray-800 font-semibold">有馬温泉 金泉銀泉＆名門旅館特集</span>
      </nav>

      {/* ヘッダー */}
      <header className="mb-10 pb-6 border-b border-gray-200">
        <div className="inline-block bg-gradient-to-r from-amber-600 to-amber-800 text-white text-xs md:text-sm font-bold px-3 py-1 rounded-full mb-3 shadow-sm">
          日本三名泉・最古の湯！兵庫県有馬温泉特集
        </div>
        <h1 className="text-2xl md:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight mb-4">
          日本最古の名湯！有馬温泉の金泉・銀泉めぐり＆最高峰神戸牛会席老舗旅館×ふるさと納税完全攻略ガイド【2026年最新】兵衛向陽閣・御所坊・月光園鴻朧館
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
          千数百年の歴史が育んだ黄金の湯と銀の湯。太閤秀吉も愛した天下の名湯・有馬温泉の至福の休日へ
        </h2>
        <p className="text-base md:text-lg text-gray-800 leading-relaxed mb-6">
          六甲山の豊かな大自然の北麓に位置し、日本三古湯および日本三名泉の一つに数えられる「有馬温泉（ありまおんせん）」。神代の時代から湧き出で、飛鳥時代の天皇行幸や、戦国武将・太閤豊臣秀吉が度重なる戦の傷を癒やし愛した天下の名湯として知られます。有馬温泉の最大の魅力は、地球規模の地殻深部から湧出する神秘的な二大名湯「金泉（赤湯）」と「銀泉（白湯）」。空気に触れると酸化して濃い赤褐色に輝く含鉄強塩泉の金泉は、濃厚な塩分が肌に薄い皮膜を作り抜群の保温・保湿効果を発揮します。一方、炭酸泉とラジウム泉からなる透明な銀泉は、肌をすっきりと引き締め血行を促進。この二つの奇跡の湯を贅沢に満喫できるのが、有馬に軒を連ねる一流旅館です。さらに夕食の主役は、世界中の美食家を虜にする世界一の和牛ブランド「神戸ビーフ（神戸牛）」。とろけるような極上の霜降り肉を、名門宿秘伝のすき焼き、しゃぶしゃぶ、あるいは炭火ステーキで味わう歓びは至高の贅沢です。本特集では、創業七百年を誇り趣の異なる三つの大浴場で金泉を堪能できる「兵衛向陽閣」、創業八百年の格式を受け継ぎ谷崎潤一郎ら文豪に愛された金泉半混浴の名宿「陶泉 御所坊」、そして落葉山と清流・滝川の絶景を望み最高級神戸牛会席を誇るハイグレード宿「月光園 鴻朧館」の3大老舗を厳選。兵庫県神戸市への楽天ふるさと納税トラベルクーポン（寄付額の最大30％割引・有効期限3年）を活用して、実質自己負担2,000円で憧れの有馬温泉ステイをお得に予約しましょう。
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
          <li><a href="#three-points" className="text-amber-800 hover:underline font-medium">有馬温泉 金泉銀泉＆名門旅館特集が選ばれる3つの理由</a></li>
          <li><a href="#hotel-1" className="text-amber-800 hover:underline font-medium">【第1選】有馬温泉　兵衛向陽閣</a></li>
          <li><a href="#hotel-2" className="text-amber-800 hover:underline font-medium">【第2選】有馬温泉　陶泉　御所坊</a></li>
          <li><a href="#hotel-3" className="text-amber-800 hover:underline font-medium">【第3選】有馬温泉　月光園　鴻朧館</a></li>
          <li><a href="#furusato-step" className="text-amber-800 hover:underline font-medium">実質自己負担2,000円で予約する簡単4ステップ手順</a></li>
          <li><a href="#faq" className="text-amber-800 hover:underline font-medium">よくある質問（Q&A）</a></li>
        </ol>
      </section>

      {/* 3つの魅力セクション */}
      <section id="three-points" className="mb-14">
        <h2 className="text-xl md:text-3xl font-extrabold text-gray-900 mb-6 pb-2 border-b-2 border-amber-600 flex items-center gap-2">
          <span>🌟</span> 有馬温泉 金泉銀泉＆名門旅館特集が選ばれる3つの理由
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <span className="text-3xl font-black text-amber-600 block mb-2">01</span>
            <h3 className="font-bold text-gray-900 text-lg mb-3 leading-snug">地球の神秘が凝縮した「金泉」と「銀泉」！日本最高峰の濃厚な泉質を満喫</h3>
            <p className="text-sm text-gray-600 leading-relaxed">海水よりも塩分濃度が高く芯まで温まる赤褐色の金泉と、肌がすべすべになる透明な銀泉。宿にいながら二大名湯の贅沢な湯浴みが叶います。</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <span className="text-3xl font-black text-amber-600 block mb-2">02</span>
            <h3 className="font-bold text-gray-900 text-lg mb-3 leading-snug">世界に誇る最高級黒毛和牛「神戸牛」の極上会席！とろける霜降りの美食体験</h3>
            <p className="text-sm text-gray-600 leading-relaxed">厳しい認定基準をクリアした本物の神戸ビーフを、ステーキやすき焼きで堪能。丹波・播磨の旬の食材と合わせた繊細な京風会席に舌鼓を打てます。</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <span className="text-3xl font-black text-amber-600 block mb-2">03</span>
            <h3 className="font-bold text-gray-900 text-lg mb-3 leading-snug">神戸市ふるさと納税で最大30％OFF！3年間有効クーポンで記念日や両親への親孝行旅に最適</h3>
            <p className="text-sm text-gray-600 leading-relaxed">格式高い有馬の名門旅館もふるさと納税なら実質自己負担2,000円。有効期限が3年あるため、結婚記念日や還暦祝いなどの特別な旅行に賢く使えます。</p>
          </div>
        </div>
      </section>

      {/* 宿紹介 1 */}
      <section id="hotel-1" className="mb-16 bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
        <div className="bg-gradient-to-r from-amber-700 to-amber-900 text-white p-4 md:p-6">
          <span className="bg-amber-500 text-white text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider mb-2 inline-block">厳選名宿 第1選</span>
          <h2 className="text-xl md:text-3xl font-bold leading-tight mb-2">
            有馬温泉　兵衛向陽閣
          </h2>
          <p className="text-xs md:text-sm text-amber-100">兵庫県神戸市・秀吉から「兵衛」の名を授かった創業七百年の老舗！趣異なる三つの大浴場で金泉を堪能＆豪華バイキング・部屋食会席</p>
        </div>
        <div className="p-6 md:p-8">
          <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600 bg-gray-50 p-4 rounded-xl">
            <div><strong>所在地:</strong> 兵庫県神戸市北区有馬町1904</div>
            <div><strong>アクセス:</strong> 神戸より電車で約３０分／神戸電鉄有馬温泉駅・バス有馬温泉駅より徒歩約６分／阪神高速道路北神戸線有馬口出口より約５分</div>
            <div><strong>楽天評価:</strong> <span className="text-amber-600 font-bold text-base">★ 4.55</span> (2592件)</div>
            <div><strong>参考価格:</strong> 1名あたり約15,950円〜</div>
          </div>
          <p className="text-base text-gray-800 leading-relaxed mb-6">有馬温泉の高台に位置し、太閤豊臣秀吉ゆかりの創業七百年の歴史を誇る有馬屈指の老舗旅館。最大の魅力は、「一の湯（和風大浴場）」「二の湯（ローマ風大浴場）」「三の湯（湯治場風露天風呂）」という趣の異なる3つの大浴場すべてに名湯「金泉」が注がれている点。広々とした露天風呂で六甲の豊かな緑と澄んだ空気に包まれながら、濃厚な赤湯を心ゆくまで満喫できます。夕食は四季折々の旬の味覚と神戸牛を贅沢に使った伝統の会席料理をお部屋食で味わえるプランのほか、約50種類の出来立て料理が並ぶ人気のプレミアムビュッフェも好評。老舗ならではの細やかな気配りと安心のおもてなしで、ファミリーからシニアまで満足度の高い滞在を提供します。</p>
          <div className="hotel-special-wrapper">
            <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded-r-xl mb-6 text-sm text-amber-950">
              <strong className="block mb-1 font-bold">宿のこだわり・特徴:</strong>
              創業700年の老舗旅館。有馬温泉の高台に位置し、有馬最大級の悠々とした三大浴場でお寛ぎいただけます。
            </div>
          </div>
          <div className="user-review-wrapper">
            <blockquote className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-xl mb-6 text-xs md:text-sm text-gray-700 italic">
              <strong>宿泊者の声:</strong> “憧れのお宿で心温まるおもてなしと温泉を満喫憧れのお宿に泊まることができて、とても嬉しかったです。こちらの事情で、チェックインが遅くなり、夕飯が遅いスタートになってしまったのですが、荷物や車など様々…　2026-09-05 08:23:30投稿 つづきはこちら”
            </blockquote>
          </div>
          <div className="pt-2">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D8636%26f_flg%3DPLAN"
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
            有馬温泉　陶泉　御所坊
          </h2>
          <p className="text-xs md:text-sm text-amber-100">兵庫県神戸市・創業八百年・谷崎潤一郎ら文豪逗留の最高峰名宿！足元湧出の金泉掛け流し半混浴と神戸牛料理</p>
        </div>
        <div className="p-6 md:p-8">
          <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600 bg-gray-50 p-4 rounded-xl">
            <div><strong>所在地:</strong> 兵庫県神戸市北区有馬町858</div>
            <div><strong>アクセス:</strong> 神戸電鉄有馬温泉駅から徒歩5分／中国自動車道西宮北ＩＣより５ｋｍ／神戸空港より電車乗り継ぎで約60分</div>
            <div><strong>楽天評価:</strong> <span className="text-amber-600 font-bold text-base">★ 4.44</span> (311件)</div>
            <div><strong>参考価格:</strong> 1名あたり約17,800円〜</div>
          </div>
          <p className="text-base text-gray-800 leading-relaxed mb-6">鎌倉時代初期の建久二年創業、有馬温泉で最も古い歴史を誇る老舗旅館。文豪・谷崎潤一郎や吉川英治ら数多くの文人墨客が逗留した格式ある宿で、木造建築の粋を集めた迷路のような館内は国の登録有形文化財のような風情を漂わせます。名物「金郷泉」は、敷地内の泉源から湧く新鮮な金泉を100％源泉掛け流しで使用。男女の仕切りが低く設計された伝統の「半混浴サロン風呂」は、薄暗い灯りの中で湯煙が立ちのぼる神秘的な空間です。料理は、契約農家から仕入れる無農薬野菜や明石港直送の昼網の魚、そして但馬血統の極上神戸牛を、素材の味を最大限に引き出した独自の山家料理会席で提供。大人の静寂と本物の歴史に浸れる唯一無二の宿です。</p>
          <div className="hotel-special-wrapper">
            <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded-r-xl mb-6 text-sm text-amber-950">
              <strong className="block mb-1 font-bold">宿のこだわり・特徴:</strong>
              鎌倉以来八百年　古式温泉館　有馬最古の湯宿で100％源泉掛け流しの新鮮な有馬の湯と風情を堪能
            </div>
          </div>
          <div className="user-review-wrapper">
            <blockquote className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-xl mb-6 text-xs md:text-sm text-gray-700 italic">
              <strong>宿泊者の声:</strong> “蒸し風呂も楽しめる!とにかく濃厚な温泉を楽しみに5度目くらい?の利用です。母がとても気に入っており、有馬に行きたい!となると必ずお世話になっています。お宿としての雰囲気、空間、サービスも最高で…　2026-08-03 22:35:14投稿 つづきはこちら”
            </blockquote>
          </div>
          <div className="pt-2">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D80572%26f_flg%3DPLAN"
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
            有馬温泉　月光園　鴻朧館
          </h2>
          <p className="text-xs md:text-sm text-amber-100">兵庫県神戸市・落葉山と滝川の清流を一望する絶景ロケーション！金泉露天風呂と最高級A5ランク神戸牛会席を誇るハイグレード宿</p>
        </div>
        <div className="p-6 md:p-8">
          <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600 bg-gray-50 p-4 rounded-xl">
            <div><strong>所在地:</strong> 兵庫県神戸市北区有馬町318</div>
            <div><strong>アクセス:</strong> 中国自動車道 西宮北ＩＣより有馬温泉方面約１０分／神戸電鉄「有馬温泉」駅下車 徒歩１０分（※毎日８時～１９時は無料送迎可</div>
            <div><strong>楽天評価:</strong> <span className="text-amber-600 font-bold text-base">★ 4.55</span> (1679件)</div>
            <div><strong>参考価格:</strong> 1名あたり約15,180円〜</div>
          </div>
          <p className="text-base text-gray-800 leading-relaxed mb-6">有馬温泉の奥座敷、自然豊かな落葉山と滝川のせせらぎに面した絶好のロケーションに建つハイグレード温泉旅館。全客室の大きな窓から四季折々の山峡の景色が広がり、春の新緑や秋の紅葉は息を呑む美しさです。大浴場と露天風呂には名湯「金泉」が湛えられ、滝川のせせらぎを聞きながら優雅な湯浴みが楽しめます。姉妹館「游月山荘」の温泉施設へも木造の風流な橋を渡って自由に湯巡り可能。夕食は全国でも名高い月光園自慢の京風懐石料理。厳選された最高級A5ランク神戸牛の石焼きステーキやすき焼きをメインに、料理人が一品一品手作りにこだわった繊細な料理をお部屋や個室食事処でゆったりと堪能できます。</p>
          <div className="hotel-special-wrapper">
            <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded-r-xl mb-6 text-sm text-amber-950">
              <strong className="block mb-1 font-bold">宿のこだわり・特徴:</strong>
              ロビーや浴場等随所より壮大な景色がご覧頂ける有馬随一の立地条件。有馬の元湯をお楽しみくださいませ。
            </div>
          </div>
          <div className="user-review-wrapper">
            <blockquote className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-xl mb-6 text-xs md:text-sm text-gray-700 italic">
              <strong>宿泊者の声:</strong> “上品な会席料理と部屋風呂で記念日を祝福会席料理が前菜からデザートまですごく上品で美味しかったです。部屋風呂も清潔に保たれており、リラックスして過ごすことができました。結婚記念日に旅行に行ったのです…　2026-09-01 22:20:48投稿 つづきはこちら”
            </blockquote>
          </div>
          <div className="pt-2">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D18252%26f_flg%3DPLAN"
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
            href="/furusato-tax-kinosaki-onsen-sotoyu-meguri-ryokan-stay"
            className="block p-3 rounded-lg bg-white border border-gray-200 hover:border-amber-400 hover:shadow-xs transition-all text-sm text-amber-900 font-medium"
          >
            ▸ 【城崎温泉 七田外湯めぐり＆柳並木宿×ふるさと納税】招月庭・小宿縁・つちや旅館
          </Link>
          <Link
            href="/furusato-tax-dogo-onsen-honkan-walk-luxury-stay"
            className="block p-3 rounded-lg bg-white border border-gray-200 hover:border-amber-400 hover:shadow-xs transition-all text-sm text-amber-900 font-medium"
          >
            ▸ 【道後温泉 本館散策＆老舗旅館×ふるさと納税】ふなや・道後御湯・道後プリンス
          </Link>
          <Link
            href="/furusato-tax-kurokawa-onsen-yumeguri-luxury-stay"
            className="block p-3 rounded-lg bg-white border border-gray-200 hover:border-amber-400 hover:shadow-xs transition-all text-sm text-amber-900 font-medium"
          >
            ▸ 【黒川温泉 入湯手形＆渓流露天風呂宿×ふるさと納税】山みず木・奥の湯・新明館
          </Link>
          <Link
            href="/furusato-tax-three-great-wagyu-beef-gourmet-stay"
            className="block p-3 rounded-lg bg-white border border-gray-200 hover:border-amber-400 hover:shadow-xs transition-all text-sm text-amber-900 font-medium"
          >
            ▸ 【日本三大和牛・神戸牛＆松阪牛×ふるさと納税】最高峰ステーキ名宿
          </Link>
        </div>
      </section>
    </article>
  );
}
