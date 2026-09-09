import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '子どもが主役の夢の国！レゴランド・ジャパン公式ホテル＆名古屋ファミリー名宿×ふるさと納税完全攻略ガイド【2026年最新】レゴランドホテル・マリオット・ベッセル',
  description: 'レゴブロックの世界に泊まる感動体験！パークエントランス目の前の公式「レゴランド・ジャパン・ホテル」、JR名古屋駅直結の高級パートナー「名古屋マリオットアソシアホテル」、18歳以下添い寝無料で大人気の「ベッセルホテルカンパーナ名古屋」を、愛知県名古屋市の楽天ふるさと納税トラベルクーポンで実質2,000円負担で予約する完全ガイド。',
  keywords: [
    'ふるさと納税 旅行',
    'ふるさと納税 ホテル',
    'レゴランド公式＆名古屋ホテル特集',
    '楽天ふるさと納税 トラベル',
    'レゴランド・ジャパン・ホテル',
    '名古屋マリオットアソシアホテル',
    'ベッセルホテルカンパーナ名古屋　サウナ付大浴場（名古屋駅桜通口）',
    '露天風呂付き客室',
    'オーシャンビュー',
    '実質2000円'
  ],
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-legoland-japan-official-hotel-stay/',
  },
  openGraph: {
    title: '子どもが主役の夢の国！レゴランド・ジャパン公式ホテル＆名古屋ファミリー名宿×ふるさと納税完全攻略ガイド【2026年最新】レゴランドホテル・マリオット・ベッセル',
    description: 'レゴブロックの世界に泊まる感動体験！パークエントランス目の前の公式「レゴランド・ジャパン・ホテル」、JR名古屋駅直結の高級パートナー「名古屋マリオットアソシアホテル」、18歳以下添い寝無料で大人気の「ベッセルホテルカンパーナ名古屋」を、愛知県名古屋市の楽天ふるさと納税トラベルクーポンで実質2,000円負担で予約する完全ガイド。',
    url: 'https://croud-travel.pages.dev/furusato-tax-legoland-japan-official-hotel-stay',
    siteName: '旅行とホテル・ふるさと納税の総合ポータル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function FurusatoLegolandOfficialHotelStayPage() {
  return (
    <article className="max-w-5xl mx-auto px-4 py-8 text-gray-800 leading-relaxed font-sans">
      {/* パンくずリスト */}
      <nav className="text-sm text-gray-500 mb-6 flex flex-wrap items-center gap-1.5" aria-label="Breadcrumb">
        <Link href="/" className="hover:underline hover:text-amber-700">ホーム</Link>
        <span>&gt;</span>
        <Link href="/travel-savings-guide" className="hover:underline hover:text-amber-700">ふるさと納税トラベル完全攻略ガイド</Link>
        <span>&gt;</span>
        <span className="text-gray-800 font-semibold">レゴランド公式＆名古屋ホテル特集</span>
      </nav>

      {/* ヘッダー */}
      <header className="mb-10 pb-6 border-b border-gray-200">
        <div className="inline-block bg-gradient-to-r from-amber-600 to-amber-800 text-white text-xs md:text-sm font-bold px-3 py-1 rounded-full mb-3 shadow-sm">
          家族旅行大人気！レゴランド・ジャパン公式宿特集
        </div>
        <h1 className="text-2xl md:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight mb-4">
          子どもが主役の夢の国！レゴランド・ジャパン公式ホテル＆名古屋ファミリー名宿×ふるさと納税完全攻略ガイド【2026年最新】レゴランドホテル・マリオット・ベッセル
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
          海賊・ニンジャゴー・プリンセス！客室まるごとレゴの世界に泊まる、子どもたちの一生モノの思い出旅行へ
        </h2>
        <p className="text-base md:text-lg text-gray-800 leading-relaxed mb-6">
          2歳から12歳の子どもを持つファミリーから絶大な人気を集めるキッズテーマパーク「レゴランド・ジャパン・リゾート」。パークで一日中アトラクションやワークショップを満喫した後は、パークエントランスのすぐ目の前に建つ公式「レゴランド・ジャパン・ホテル」へ。エントランスからエレベーター、客室に至るまで無数のレゴブロックで彩られ、お部屋の中には宝箱の暗号解読ゲームや二段ベッド付き子ども部屋が完備。ホテルに戻っても冒険が続く夢のような演出に、子どもたちの瞳は輝きっぱなしです。さらに名古屋駅直結で利便性抜群のマリオットや、18歳以下添い寝無料・サウナ付き大浴場でコスパ最強と評されるベッセルホテルなど、家族のスタイルに合わせて選べる提携ホテルも大充実。本特集では、「レゴランド・ジャパン・ホテル」「名古屋マリオットアソシアホテル」「ベッセルホテルカンパーナ名古屋」の3宿を厳選。愛知県名古屋市への楽天ふるさと納税トラベルクーポン（寄付額の最大30％割引・有効期限3年）を活用して、実質自己負担2,000円でお得に家族の笑顔あふれるテーマパーク旅行を実現しましょう。
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
          <li><a href="#three-points" className="text-amber-800 hover:underline font-medium">レゴランド公式＆名古屋ホテル特集が選ばれる3つの理由</a></li>
          <li><a href="#hotel-1" className="text-amber-800 hover:underline font-medium">【第1選】レゴランド・ジャパン・ホテル</a></li>
          <li><a href="#hotel-2" className="text-amber-800 hover:underline font-medium">【第2選】名古屋マリオットアソシアホテル</a></li>
          <li><a href="#hotel-3" className="text-amber-800 hover:underline font-medium">【第3選】ベッセルホテルカンパーナ名古屋　サウナ付大浴場（名古屋駅桜通口）</a></li>
          <li><a href="#furusato-step" className="text-amber-800 hover:underline font-medium">実質自己負担2,000円で予約する簡単4ステップ手順</a></li>
          <li><a href="#faq" className="text-amber-800 hover:underline font-medium">よくある質問（Q&A）</a></li>
        </ol>
      </section>

      {/* 3つの魅力セクション */}
      <section id="three-points" className="mb-14">
        <h2 className="text-xl md:text-3xl font-extrabold text-gray-900 mb-6 pb-2 border-b-2 border-amber-600 flex items-center gap-2">
          <span>🌟</span> レゴランド公式＆名古屋ホテル特集が選ばれる3つの理由
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <span className="text-3xl font-black text-amber-600 block mb-2">01</span>
            <h3 className="font-bold text-gray-900 text-lg mb-3 leading-snug">全客室がテーマフロア＆宝探し付き！客室に入った瞬間から冒険がスタート</h3>
            <p className="text-sm text-gray-600 leading-relaxed">パイレーツ、アドベンチャー、キングダム、レゴニンジャゴー、レゴフレンズの5つのテーマ。全室に独立した子ども部屋と二段ベッド、トレジャーハントの宝箱が用意されています。</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <span className="text-3xl font-black text-amber-600 block mb-2">02</span>
            <h3 className="font-bold text-gray-900 text-lg mb-3 leading-snug">パーク目の前で移動ストレスゼロ！宿泊者限定のウォータープレイエリアも大人気</h3>
            <p className="text-sm text-gray-600 leading-relaxed">エントランスまで徒歩数十秒。小さな子どもが疲れてもすぐにお部屋で休憩でき、ホテル内にはレゴブロックが浮かぶ屋内水遊びエリア「ウォータープレイ」も完備しています。</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <span className="text-3xl font-black text-amber-600 block mb-2">03</span>
            <h3 className="font-bold text-gray-900 text-lg mb-3 leading-snug">名古屋市ふるさと納税で最大30％OFF！3年間有効クーポンで記念日旅行に最適</h3>
            <p className="text-sm text-gray-600 leading-relaxed">誕生日や進学祝い、大型連休に合わせて計画的に利用可能。1回の寄付で高額なオフィシャルホテル代金を賢く節約し、実質自己負担2,000円で予約できます。</p>
          </div>
        </div>
      </section>

      {/* 宿紹介 1 */}
      <section id="hotel-1" className="mb-16 bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
        <div className="bg-gradient-to-r from-amber-700 to-amber-900 text-white p-4 md:p-6">
          <span className="bg-amber-500 text-white text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider mb-2 inline-block">厳選名宿 第1選</span>
          <h2 className="text-xl md:text-3xl font-bold leading-tight mb-2">
            レゴランド・ジャパン・ホテル
          </h2>
          <p className="text-xs md:text-sm text-amber-100">愛知県名古屋市・レゴランドエントランスの目の前！客室全室に宝探しトレジャーボックス＆子ども専用ベッドルーム完備</p>
        </div>
        <div className="p-6 md:p-8">
          <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600 bg-gray-50 p-4 rounded-xl">
            <div><strong>所在地:</strong> 愛知県名古屋市港区金城ふ頭2-7-1</div>
            <div><strong>アクセス:</strong> あおなみ線　金城ふ頭駅</div>
            <div><strong>楽天評価:</strong> <span className="text-amber-600 font-bold text-base">★ 4.55</span> (863件)</div>
            <div><strong>参考価格:</strong> 1名あたり約26,000円〜</div>
          </div>
          <p className="text-base text-gray-800 leading-relaxed mb-6">レゴランド・ジャパンのゲート真正面に位置する唯一の公式ホテル。外観から客室まで数千万個のレゴブロックの世界観で統一され、ディスコ音楽が鳴り響くエレベーターやレゴブロックプールなど仕掛けが満載。客室は全室に大人用クイーンベッドと子ども用二段ベッドが別室で設けられ、お部屋に隠された暗号を解くと宝箱が開いてレゴのプレゼントが手に入るトレジャーボックスゲームに子どもたちが大歓喜。朝食ビュッフェではレゴブロック型のフライドポテトや多彩なキッズメニューが並び、パーク体験を何倍にも引き上げる夢の宿です。</p>
          <div className="hotel-special-wrapper">
            <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded-r-xl mb-6 text-sm text-amber-950">
              <strong className="block mb-1 font-bold">宿のこだわり・特徴:</strong>
              外観から内観に至るまでレゴブロックの世界が広がり、楽しさと喜びに満ちた思い出を築くことができます。
            </div>
          </div>
          <div className="user-review-wrapper">
            <blockquote className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-xl mb-6 text-xs md:text-sm text-gray-700 italic">
              <strong>宿泊者の声:</strong> “男児大歓喜男児大歓喜の楽しさでした!また行きたい!レゴランドホテルで泊まりたい!と毎日のように言っています。夏休みだったのでお高かったですが、その価値はあります。また来たいです。クチコミの…　2026-09-04 19:29:52投稿 つづきはこちら”
            </blockquote>
          </div>
          <div className="pt-2">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D167248%26f_flg%3DPLAN"
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
            名古屋マリオットアソシアホテル
          </h2>
          <p className="text-xs md:text-sm text-amber-100">愛知県名古屋市・JR名古屋駅直結の超高層ランドマーク！レゴランド提携パートナー最高峰のラグジュアリーホテル</p>
        </div>
        <div className="p-6 md:p-8">
          <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600 bg-gray-50 p-4 rounded-xl">
            <div><strong>所在地:</strong> 愛知県名古屋市中村区名駅1-1-4</div>
            <div><strong>アクセス:</strong> 新幹線到着⇒名古屋駅直結★フロント15階 または、中部国際空港⇒名鉄特急約30分⇒名古屋駅直結★フロント15階</div>
            <div><strong>楽天評価:</strong> <span className="text-amber-600 font-bold text-base">★ 4.64</span> (4978件)</div>
            <div><strong>参考価格:</strong> 1名あたり約17,500円〜</div>
          </div>
          <p className="text-base text-gray-800 leading-relaxed mb-6">JR名古屋駅の真上にそびえ立つ地上52階建てのインターナショナルホテル。レゴランド・ジャパンのパートナーホテルとして認定されており、あおなみ線でレゴランド最寄りの金城ふ頭駅まで直通約24分という抜群のアクセスを誇ります。客室はすべて20階以上の高層階に位置し、名古屋市街のパノラマ夜景を一望。一流のベッドと上質なアメニティが揃い、パークでアクティブに遊んだ夜も極上の眠りで疲れをリセットできます。シェフ自慢の朝食ビュッフェでは名古屋名物のひつまぶしやきしめん、オムレツが楽しめ、大人の満足度も妥協しない家族旅行に最適です。</p>
          <div className="hotel-special-wrapper">
            <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded-r-xl mb-6 text-sm text-amber-950">
              <strong className="block mb-1 font-bold">宿のこだわり・特徴:</strong>
              かつてない上質のくつろぎと、世界のおもてなしを、あなたに・・・。
            </div>
          </div>
          <div className="user-review-wrapper">
            <blockquote className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-xl mb-6 text-xs md:text-sm text-gray-700 italic">
              <strong>宿泊者の声:</strong> “名古屋駅直結で幼児連れの移動が楽でした名古屋駅直結で、幼児連れの旅行には、移動が少なく助かりました。他の宿泊者は、インバウンドのアジアの方が多い印象でした。クチコミの詳細はこちらから　http…　2026-09-05 08:43:15投稿 つづきはこちら”
            </blockquote>
          </div>
          <div className="pt-2">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D12543%26f_flg%3DPLAN"
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
            ベッセルホテルカンパーナ名古屋　サウナ付大浴場（名古屋駅桜通口）
          </h2>
          <p className="text-xs md:text-sm text-amber-100">愛知県名古屋市・18歳以下添い寝無料＆サウナ付き天然鉱石大浴場！ファミリーから絶大な支持を集める高コスパ宿</p>
        </div>
        <div className="p-6 md:p-8">
          <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600 bg-gray-50 p-4 rounded-xl">
            <div><strong>所在地:</strong> 愛知県名古屋市中村区名駅2-30-7</div>
            <div><strong>アクセス:</strong> JR名古屋駅桜通口より徒歩約９分　近鉄名古屋駅・名鉄名古屋駅・地下鉄名古屋駅　亀島駅から１駅　国際センター駅から１駅</div>
            <div><strong>楽天評価:</strong> <span className="text-amber-600 font-bold text-base">★ 4.44</span> (2216件)</div>
            <div><strong>参考価格:</strong> 1名あたり約6,980円〜</div>
          </div>
          <p className="text-base text-gray-800 leading-relaxed mb-6">名古屋駅桜通口から徒歩9分、子連れ旅行に特化した手厚いサービスで楽天トラベルアワードを連続受賞する大人気ホテル。18歳以下の子どもの添い寝が無料（両親と同室の場合）という破格のサービスに加え、紙おむつやおしりふき、ベビーベッド、ベビーカーの無料貸出などウェルカムベビーのおもてなしが徹底されています。館内にはサウナと水風呂を備えた清潔な大浴場があり、足を伸ばしてゆったりリフレッシュ。朝食ビュッフェでは名古屋めし（ひつまぶし・味噌カツ・小倉トースト）が食べ放題で、コスパと快適性を両立した賢い家族旅行に一番人気の宿です。</p>
          <div className="hotel-special-wrapper">
            <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded-r-xl mb-6 text-sm text-amber-950">
              <strong className="block mb-1 font-bold">宿のこだわり・特徴:</strong>
              名古屋駅から徒歩９分で名古屋ステイに便利。サウナ付大浴場完備で旅に安らぎを。
            </div>
          </div>
          <div className="user-review-wrapper">
            <blockquote className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-xl mb-6 text-xs md:text-sm text-gray-700 italic">
              <strong>宿泊者の声:</strong> “レゴランド前泊に最適レゴランドの前泊で利用しました。朝ごはんをゆっくり食べても、開園まで十分間に合いました。お盆期間中でしたが、早い時間の朝食にしたためかそこまで混み合わず、朝からマグロ丼が食べら…　2026-09-04 21:13:04投稿 つづきはこちら”
            </blockquote>
          </div>
          <div className="pt-2">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D167499%26f_flg%3DPLAN"
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
            href="/furusato-tax-indoor-pool-kids-family-resort-stay"
            className="block p-3 rounded-lg bg-white border border-gray-200 hover:border-amber-400 hover:shadow-xs transition-all text-sm text-amber-900 font-medium"
          >
            ▸ 【一年中泳げる室内温水プール宿×ふるさと納税】那須・草津・別府リゾート
          </Link>
          <Link
            href="/furusato-tax-tokyo-disney-resort-official-hotel-stay"
            className="block p-3 rounded-lg bg-white border border-gray-200 hover:border-amber-400 hover:shadow-xs transition-all text-sm text-amber-900 font-medium"
          >
            ▸ 【東京ディズニーリゾート公式ホテル×ふるさと納税】舞浜直結オフィシャル
          </Link>
          <Link
            href="/furusato-tax-usj-osaka-official-partner-hotel-stay"
            className="block p-3 rounded-lg bg-white border border-gray-200 hover:border-amber-400 hover:shadow-xs transition-all text-sm text-amber-900 font-medium"
          >
            ▸ 【USJ公式オフィシャルホテル×ふるさと納税】パーク徒歩圏・天然温泉
          </Link>
          <Link
            href="/furusato-tax-themepark-aquarium-family-hotel-stay"
            className="block p-3 rounded-lg bg-white border border-gray-200 hover:border-amber-400 hover:shadow-xs transition-all text-sm text-amber-900 font-medium"
          >
            ▸ 【テーマパーク＆水族館満喫ホテル×ふるさと納税】家族旅行におすすめの宿
          </Link>
        </div>
      </section>
    </article>
  );
}
