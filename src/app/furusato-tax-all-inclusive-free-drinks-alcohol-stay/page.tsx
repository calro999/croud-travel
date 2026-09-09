import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '生ビール・地酒・ワインが飲み放題！お財布を気にせず寛ぐオールインクルーシブ名宿×ふるさと納税完全ガイド【2026年最新】作並・松島・伊勢志摩',
  description: 'チェックインからアウトまで、ラウンジのお酒・スイーツ・湯上がりビール・出来立て料理がすべて宿泊代金込み！追加料金ゼロで贅沢な休日を叶えるオールインクルーシブ温泉宿。「ゆづくしSalon一の坊」「松島一の坊」「グランドメルキュール伊勢志摩リゾート＆スパ」を、楽天ふるさと納税トラベルクーポンで実質2,000円負担で楽しむ完全ガイド。',
  keywords: [
    'ふるさと納税 旅行',
    'ふるさと納税 ホテル',
    '飲み放題オールインクルーシブ名宿特集',
    '楽天ふるさと納税 トラベル',
    '仙台・作並温泉　ゆづくしＳａｌｏｎ一の坊',
    '松島温泉　松島一の坊',
    'グランドメルキュール伊勢志摩リゾート＆スパ',
    'オフィシャルホテル',
    'ファミリー旅行',
    '実質2000円'
  ],
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-all-inclusive-free-drinks-alcohol-stay',
  },
  openGraph: {
    title: '生ビール・地酒・ワインが飲み放題！お財布を気にせず寛ぐオールインクルーシブ名宿×ふるさと納税完全ガイド【2026年最新】作並・松島・伊勢志摩',
    description: 'チェックインからアウトまで、ラウンジのお酒・スイーツ・湯上がりビール・出来立て料理がすべて宿泊代金込み！追加料金ゼロで贅沢な休日を叶えるオールインクルーシブ温泉宿。「ゆづくしSalon一の坊」「松島一の坊」「グランドメルキュール伊勢志摩リゾート＆スパ」を、楽天ふるさと納税トラベルクーポンで実質2,000円負担で楽しむ完全ガイド。',
    url: 'https://croud-travel.pages.dev/furusato-tax-all-inclusive-free-drinks-alcohol-stay',
    siteName: '旅行とホテル・ふるさと納税の総合ポータル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function FurusatoAllInclusiveFreeDrinksStayPage() {
  return (
    <article className="max-w-5xl mx-auto px-4 py-8 text-gray-800 leading-relaxed font-sans">
      {/* パンくずリスト */}
      <nav className="text-sm text-gray-500 mb-6 flex flex-wrap items-center gap-1.5" aria-label="Breadcrumb">
        <Link href="/" className="hover:underline hover:text-amber-700">ホーム</Link>
        <span>&gt;</span>
        <Link href="/travel-savings-guide" className="hover:underline hover:text-amber-700">ふるさと納税トラベル完全攻略ガイド</Link>
        <span>&gt;</span>
        <span className="text-gray-800 font-semibold">飲み放題オールインクルーシブ名宿特集</span>
      </nav>

      {/* ヘッダー */}
      <header className="mb-10 pb-6 border-b border-gray-200">
        <div className="inline-block bg-gradient-to-r from-amber-600 to-amber-800 text-white text-xs md:text-sm font-bold px-3 py-1 rounded-full mb-3 shadow-sm">
          大人気！お酒飲み放題オールインクルーシブ宿特集
        </div>
        <h1 className="text-2xl md:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight mb-4">
          生ビール・地酒・ワインが飲み放題！お財布を気にせず寛ぐオールインクルーシブ名宿×ふるさと納税完全ガイド【2026年最新】作並・松島・伊勢志摩
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
          暖炉ラウンジで地酒やワインを片手に読書、湯上がりに冷たい生ビール。お財布フリーで心からくつろぐ至福のリトリートへ
        </h2>
        <p className="text-base md:text-lg text-gray-800 leading-relaxed mb-6">
          宿泊料金に滞在中の食事、夕朝食時のアルコール・ソフトドリンク、クラブラウンジでの生ビールやスパークリングワイン、おつまみ、スイーツ、アクティビティまで全てが含まれる「オールインクルーシブ（All-Inclusive）」。チェックアウト時の追加精算を気にする必要が一切なく、食べたい時に食べ、飲みたい時に上質なお酒をグラスに注ぎ、好きな場所で気ままに寛ぐ——。これまでの温泉旅館の概念を覆す、自由でストレスフリーな大人の休日スタイルとして今絶大な支持を集めています。本特集では、広瀬川の渓流沿いに建ち、暖炉のあるサイレントラウンジで仙台銘酒や生ビール、挽きたて珈琲を片手に源泉巡りを楽しむ「仙台・作並温泉 ゆづくしSalon一の坊」、日本三景・松島のパノラマビューと生演奏、目の前で料理人が腕を振るうオーダービュッフェ食べ飲み放題が圧巻の「松島温泉 松島一の坊」、そして伊勢志摩の豊かな自然に抱かれ、宿泊者全員が利用できる贅沢なクラブラウンジでアルコールやイブニングソーシャルを堪能できる話題のリブランド名宿「グランドメルキュール伊勢志摩リゾート＆スパ」の3宿を厳選。楽天ふるさと納税トラベルクーポン（寄付額の最大30％割引・有効期限3年）を活用して、実質自己負担2,000円で最高峰のお財布フリー温泉旅へ出かけましょう。
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
          <li><a href="#three-points" className="text-amber-800 hover:underline font-medium">飲み放題オールインクルーシブ名宿特集が選ばれる3つの理由</a></li>
          <li><a href="#hotel-1" className="text-amber-800 hover:underline font-medium">【第1選】仙台・作並温泉　ゆづくしＳａｌｏｎ一の坊</a></li>
          <li><a href="#hotel-2" className="text-amber-800 hover:underline font-medium">【第2選】松島温泉　松島一の坊</a></li>
          <li><a href="#hotel-3" className="text-amber-800 hover:underline font-medium">【第3選】グランドメルキュール伊勢志摩リゾート＆スパ</a></li>
          <li><a href="#furusato-step" className="text-amber-800 hover:underline font-medium">実質自己負担2,000円で予約する簡単4ステップ手順</a></li>
          <li><a href="#faq" className="text-amber-800 hover:underline font-medium">よくある質問（Q&A）</a></li>
        </ol>
      </section>

      {/* 3つの魅力セクション */}
      <section id="three-points" className="mb-14">
        <h2 className="text-xl md:text-3xl font-extrabold text-gray-900 mb-6 pb-2 border-b-2 border-amber-600 flex items-center gap-2">
          <span>🌟</span> 飲み放題オールインクルーシブ名宿特集が選ばれる3つの理由
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <span className="text-3xl font-black text-amber-600 block mb-2">01</span>
            <h3 className="font-bold text-gray-900 text-lg mb-3 leading-snug">追加料金ゼロの安心感！チェックインからアウトまでお酒・おつまみ・カフェが自由</h3>
            <p className="text-sm text-gray-600 leading-relaxed">ラウンジの生ビールサーバー、厳選ワイン、ご当地地酒、ハーブティーや特製スイーツまで全てフリー。お財布を持たずに館内を行き来できるストレスフリーな滞在が叶います。</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <span className="text-3xl font-black text-amber-600 block mb-2">02</span>
            <h3 className="font-bold text-gray-900 text-lg mb-3 leading-snug">料理人のライブキッチン×出来立て美食！好きなものを好きなだけ味わう贅沢</h3>
            <p className="text-sm text-gray-600 leading-relaxed">作り置きをせず、目の前で炭火焼きされる特選牛や握りたて寿司、揚げたて天ぷら。料理長厳選の旬の料理に合わせてペアリングのお酒を自由に楽しめます。</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <span className="text-3xl font-black text-amber-600 block mb-2">03</span>
            <h3 className="font-bold text-gray-900 text-lg mb-3 leading-snug">楽天ふるさと納税で最大30％OFF！3年間有効クーポンで記念日や週末旅に賢く活用</h3>
            <p className="text-sm text-gray-600 leading-relaxed">オールインクルーシブの上質な宿泊プランもふるさと納税なら自己負担実質2,000円。寄付額の最大30％相当が割引となり、夫婦の記念日や大人の女子旅に最適です。</p>
          </div>
        </div>
      </section>

      {/* 宿紹介 1 */}
      <section id="hotel-1" className="mb-16 bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
        <div className="bg-gradient-to-r from-amber-700 to-amber-900 text-white p-4 md:p-6">
          <span className="bg-amber-500 text-white text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider mb-2 inline-block">厳選名宿 第1選</span>
          <h2 className="text-xl md:text-3xl font-bold leading-tight mb-2">
            仙台・作並温泉　ゆづくしＳａｌｏｎ一の坊
          </h2>
          <p className="text-xs md:text-sm text-amber-100">宮城県仙台市・広瀬川源流の自然に溶け込むオールインクルーシブ温泉！3つの源泉八つの湯船と静寂のサロンラウンジ</p>
        </div>
        <div className="p-6 md:p-8">
          <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600 bg-gray-50 p-4 rounded-xl">
            <div><strong>所在地:</strong> 宮城県仙台市青葉区作並長原3</div>
            <div><strong>アクセス:</strong> 最寄駅／ＪＲ仙山線「作並駅」無料送迎あり【要事前予約】　仙台駅～作並駅（快速約30分）作並駅～一の坊（送迎車で約5分）</div>
            <div><strong>楽天評価:</strong> <span className="text-amber-600 font-bold text-base">★ 4.55</span> (1824件)</div>
            <div><strong>参考価格:</strong> 1名あたり約29,355円〜</div>
          </div>
          <p className="text-base text-gray-800 leading-relaxed mb-6">仙台の奥座敷・作並温泉の渓流沿いに佇む、「理想の日常を過す」をコンセプトにした日本屈指のオールインクルーシブ温泉リゾート。館内の「くつろぎSalon」では、挽きたての珈琲や手作りスイーツ、夕刻からの生ビールや宮城の厳選地酒、ワイン、おつまみが全て無料。清流のせせらぎを聞きながら暖炉の火を眺め、読書や語らいの時間を楽しめます。3つの異なる源泉から湧き出る「八の坊温泉巡り」では広瀬川渓流露天風呂や立ち湯を満喫。夕食は宮城の山海の幸を料理人が目の前で調理するオーダービュッフェで、出来立ての逸品とお酒を心ゆくまで味わえます。</p>
          <div className="hotel-special-wrapper">
            <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded-r-xl mb-6 text-sm text-amber-950">
              <strong className="block mb-1 font-bold">宿のこだわり・特徴:</strong>
              【新客室“Seyryu”2023年4月OPEN】オールインクルーシブで過ごす、里山リトリートステイ
            </div>
          </div>
          <div className="user-review-wrapper">
            <blockquote className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-xl mb-6 text-xs md:text-sm text-gray-700 italic">
              <strong>宿泊者の声:</strong> “料理も露天風呂も最高、また利用したいチェックインからゆっくり過ごさせていただきました。お料理もとても美味しく頂きました。露天風呂も良かったです!また利用させていただきたいです!クチコミの詳…　2026-09-05 10:04:33投稿 つづきはこちら”
            </blockquote>
          </div>
          <div className="pt-2">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D28670%26f_flg%3DPLAN"
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
            松島温泉　松島一の坊
          </h2>
          <p className="text-xs md:text-sm text-amber-100">宮城県松島町・日本三景「松島」を一望するオーシャンビュー！七千坪の水上庭園と料理人が目の前で創る出来立て会席</p>
        </div>
        <div className="p-6 md:p-8">
          <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600 bg-gray-50 p-4 rounded-xl">
            <div><strong>所在地:</strong> 宮城県宮城郡松島町高城浜1-4</div>
            <div><strong>アクセス:</strong> ＪＲ東北本線松島駅またはＪＲ仙石線松島海岸駅より無料送迎サービスあり／三陸道　松島海岸ＩＣより15分</div>
            <div><strong>楽天評価:</strong> <span className="text-amber-600 font-bold text-base">★ 4.62</span> (1379件)</div>
            <div><strong>参考価格:</strong> 1名あたり約39,600円〜</div>
          </div>
          <p className="text-base text-gray-800 leading-relaxed mb-6">松島の穏やかな海と島々を望む、七千坪の敷地を有する最高峰のオーシャンビュー・オールインクルーシブ宿。松島湾に浮かぶような水上庭園や開放的なラウンジでは、生演奏の音色とともに生ビールやスパークリングワイン、特製おつまみを自由にテイクアウト可能。夕食はオーダービュッフェ「青海波」にて、三陸の新鮮な海の幸のお造りや仙台牛の炭火焼きステーキ、出来立ての天ぷらを職人が目の前で仕上げて提供。美肌の「松島温泉」の展望露天風呂に浸かりながら、日常の疲れを完全に解き放つ大人の休日が過ごせます。</p>
          <div className="hotel-special-wrapper">
            <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded-r-xl mb-6 text-sm text-amber-950">
              <strong className="block mb-1 font-bold">宿のこだわり・特徴:</strong>
              オールインクルーシブ温泉リゾート。無料でアクティビティやドリンク、スイーツをお好きなだけどうぞ。
            </div>
          </div>
          <div className="user-review-wrapper">
            <blockquote className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-xl mb-6 text-xs md:text-sm text-gray-700 italic">
              <strong>宿泊者の声:</strong> “温泉とビュッフェを満喫、彼も大満足!露天風呂やサウナ、岩盤浴でリフレッシュできたし、ライブキッチンのオーダービュッフェで地元の料理を贅沢にお腹いっぱいいただきました。一緒に行った彼も大満足だっ…　2026-09-05 23:43:52投稿 つづきはこちら”
            </blockquote>
          </div>
          <div className="pt-2">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D29234%26f_flg%3DPLAN"
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
            グランドメルキュール伊勢志摩リゾート＆スパ
          </h2>
          <p className="text-xs md:text-sm text-amber-100">三重県志摩市・話題のリブランドホテル！宿泊者全員無料のクラブラウンジでアルコールとおつまみを優雅に満喫</p>
        </div>
        <div className="p-6 md:p-8">
          <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600 bg-gray-50 p-4 rounded-xl">
            <div><strong>所在地:</strong> 三重県志摩市磯部町的矢笠取939-6</div>
            <div><strong>アクセス:</strong> 近鉄 鵜方駅より定時シャトルバス約15分(予約不要　定時運行　公式HP参照)／伊勢西ＩＣよりお車約45分</div>
            <div><strong>楽天評価:</strong> <span className="text-amber-600 font-bold text-base">★ 3.94</span> (4177件)</div>
            <div><strong>参考価格:</strong> 1名あたり約5,120円〜</div>
          </div>
          <p className="text-base text-gray-800 leading-relaxed mb-6">リアス海岸が織りなす伊勢志摩国立公園の高台に位置し、全面リニューアルで誕生した話題のオールインクルーシブホテル。宿泊者全員がアクセスできるラウンジでは、スパークリングワインや地元のクラフトビール、ワイン、ウィスキー、地元銘菓やおつまみがチェックインからナイトタイムまで無料で楽しめます。広々とした大浴場と露天風呂にはアルカリ性単純温泉が満ち、湯上がり処でも冷たいドリンクを完備。夕食ビュッフェでは伊勢志摩の豊かな海の幸や地元郷土料理を取り入れた多彩なグルメをライブキッチンで提供し、圧倒的なコストパフォーマンスを誇ります。</p>
          <div className="hotel-special-wrapper">
            <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded-r-xl mb-6 text-sm text-amber-950">
              <strong className="block mb-1 font-bold">宿のこだわり・特徴:</strong>
              心と身体が満たされる、海と森に抱かれる贅沢なひととき
            </div>
          </div>
          <div className="user-review-wrapper">
            <blockquote className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-xl mb-6 text-xs md:text-sm text-gray-700 italic">
              <strong>宿泊者の声:</strong> “朝食ビュッフェが美味しくプールも満喫親族8人2部屋で利用しました。朝食のビュッフェも美味しいプールもあったので次回は水着を忘れないようにしようと思います!クチコミの詳細はこちらから　https…　2026-09-06 01:08:04投稿 つづきはこちら”
            </blockquote>
          </div>
          <div className="pt-2">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D13971%26f_flg%3DPLAN"
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
              <p className="text-xs md:text-sm text-gray-600">翌年の住民税・所得税から控除され、実質負担は年間2,000円のみ！浮いた予算でお土産やテーマパークグッズを満喫できます。</p>
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
              <span>複数人や家族での宿泊代金全体に対して割引されますか？</span>
              <span className="text-amber-600 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="mt-3 text-xs md:text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
              はい、1回の予約の「総宿泊代金」に対してクーポンが適用されますので、家族全員分やグループ旅行の宿泊費全体から割引を受けることが可能です。
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
            href="/furusato-tax-wine-brewery-winery-resort-stay"
            className="block p-3 rounded-lg bg-white border border-gray-200 hover:border-amber-400 hover:shadow-xs transition-all text-sm text-amber-900 font-medium"
          >
            ▸ 【ワイナリー直営＆ワインペアリング宿×ふるさと納税】勝沼・十勝・余市
          </Link>
          <Link
            href="/furusato-tax-craft-beer-brewery-onsen-stay"
            className="block p-3 rounded-lg bg-white border border-gray-200 hover:border-amber-400 hover:shadow-xs transition-all text-sm text-amber-900 font-medium"
          >
            ▸ 【クラフトビール醸造所直営・地ビール飲み放題宿×ふるさと納税】
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
        </div>
      </section>
    </article>
  );
}
