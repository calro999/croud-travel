import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '舞浜直結！東京ディズニーリゾート公式オフィシャルホテル×ふるさと納税完全攻略ガイド【2026年最新】シェラトン・ヒルトン・グランドニッコーで夢の国をお得に満喫',
  description: 'パークの目の前に泊まる夢の体験！ディズニーリゾートライン駅前でパーク直通シャトル運行、入園保証やホテル内バゲッジデリバリーなど特典満載のオフィシャルホテル。「シェラトン・グランデ・トーキョーベイ・ホテル」「ヒルトン東京ベイ」「グランドニッコー東京ベイ 舞浜」を、千葉県浦安市の楽天ふるさと納税トラベルクーポンで実質2,000円負担で予約する完全ガイド。',
  keywords: [
    'ふるさと納税 旅行',
    'ふるさと納税 ホテル',
    '東京ディズニーリゾート公式ホテル特集',
    '楽天ふるさと納税 トラベル',
    'シェラトン・グランデ・トーキョーベイ・ホテル',
    'ヒルトン東京ベイ',
    'グランドニッコー東京ベイ　舞浜',
    'オフィシャルホテル',
    'ファミリー旅行',
    '実質2000円'
  ],
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-tokyo-disney-resort-official-hotel-stay/',
  },
  openGraph: {
    title: '舞浜直結！東京ディズニーリゾート公式オフィシャルホテル×ふるさと納税完全攻略ガイド【2026年最新】シェラトン・ヒルトン・グランドニッコーで夢の国をお得に満喫',
    description: 'パークの目の前に泊まる夢の体験！ディズニーリゾートライン駅前でパーク直通シャトル運行、入園保証やホテル内バゲッジデリバリーなど特典満載のオフィシャルホテル。「シェラトン・グランデ・トーキョーベイ・ホテル」「ヒルトン東京ベイ」「グランドニッコー東京ベイ 舞浜」を、千葉県浦安市の楽天ふるさと納税トラベルクーポンで実質2,000円負担で予約する完全ガイド。',
    url: 'https://croud-travel.pages.dev/furusato-tax-tokyo-disney-resort-official-hotel-stay',
    siteName: '旅行とホテル・ふるさと納税の総合ポータル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function FurusatoTokyoDisneyOfficialHotelStayPage() {
  return (
    <article className="max-w-5xl mx-auto px-4 py-8 text-gray-800 leading-relaxed font-sans">
      {/* パンくずリスト */}
      <nav className="text-sm text-gray-500 mb-6 flex flex-wrap items-center gap-1.5" aria-label="Breadcrumb">
        <Link href="/" className="hover:underline hover:text-amber-700">ホーム</Link>
        <span>&gt;</span>
        <Link href="/travel-savings-guide" className="hover:underline hover:text-amber-700">ふるさと納税トラベル完全攻略ガイド</Link>
        <span>&gt;</span>
        <span className="text-gray-800 font-semibold">東京ディズニーリゾート公式ホテル特集</span>
      </nav>

      {/* ヘッダー */}
      <header className="mb-10 pb-6 border-b border-gray-200">
        <div className="inline-block bg-gradient-to-r from-amber-600 to-amber-800 text-white text-xs md:text-sm font-bold px-3 py-1 rounded-full mb-3 shadow-sm">
          超人気！東京ディズニーリゾートオフィシャルホテル特集
        </div>
        <h1 className="text-2xl md:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight mb-4">
          舞浜直結！東京ディズニーリゾート公式オフィシャルホテル×ふるさと納税完全攻略ガイド【2026年最新】シェラトン・ヒルトン・グランドニッコーで夢の国をお得に満喫
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
          閉園後も夢の余韻に包まれて。オフィシャルホテルならではの手厚い特典とラグジュアリーステイをふるさと納税で賢く実現
        </h2>
        <p className="text-base md:text-lg text-gray-800 leading-relaxed mb-6">
          朝から夜まで一日中遊び尽くしたい東京ディズニーランド＆東京ディズニーシー。パークで思いきり楽しんだ後、満員電車に揺られることなく、わずか数分でホテルのお部屋へ戻り、ふかふかのベッドやベイサイドの夜景に癒やされる贅沢は格別です。東京ディズニーリゾート・オフィシャルホテルなら、リゾートクルーザー（無料シャトルバス）の運行やJR舞浜駅前のウェルカムセンターでの荷物預かり・ホテルへの無料配送、ホテル内ディズニーファンタジーショップ完備など、宿泊者だけの特別な利便性が満載。本特集では、巨大屋内プールやオアシス棟、ファミリー客室が絶賛される「シェラトン・グランデ・トーキョーベイ・ホテル」、童話の世界を再現したハッピーマジックルームや海一望のバルコニーを誇る「ヒルトン東京ベイ」、そして日本最大級の開放的な南欧風アトリウムと口コミ4.6超の贅沢モーニングビュッフェで話題の「グランドニッコー東京ベイ 舞浜」の3大人気宿を厳選。千葉県浦安市への楽天ふるさと納税トラベルクーポン（寄付額の最大30％割引・有効期限3年）を活用して、家族旅行やカップル記念日のディズニー旅行を実質自己負担2,000円でお得に予約しましょう。
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
          <li><a href="#three-points" className="text-amber-800 hover:underline font-medium">東京ディズニーリゾート公式ホテル特集が選ばれる3つの理由</a></li>
          <li><a href="#hotel-1" className="text-amber-800 hover:underline font-medium">【第1選】シェラトン・グランデ・トーキョーベイ・ホテル</a></li>
          <li><a href="#hotel-2" className="text-amber-800 hover:underline font-medium">【第2選】ヒルトン東京ベイ</a></li>
          <li><a href="#hotel-3" className="text-amber-800 hover:underline font-medium">【第3選】グランドニッコー東京ベイ　舞浜</a></li>
          <li><a href="#furusato-step" className="text-amber-800 hover:underline font-medium">実質自己負担2,000円で予約する簡単4ステップ手順</a></li>
          <li><a href="#faq" className="text-amber-800 hover:underline font-medium">よくある質問（Q&A）</a></li>
        </ol>
      </section>

      {/* 3つの魅力セクション */}
      <section id="three-points" className="mb-14">
        <h2 className="text-xl md:text-3xl font-extrabold text-gray-900 mb-6 pb-2 border-b-2 border-amber-600 flex items-center gap-2">
          <span>🌟</span> 東京ディズニーリゾート公式ホテル特集が選ばれる3つの理由
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <span className="text-3xl font-black text-amber-600 block mb-2">01</span>
            <h3 className="font-bold text-gray-900 text-lg mb-3 leading-snug">舞浜駅前ウェルカムセンターで手ぶらイン！直通シャトルバスやパーク内特典が充実</h3>
            <p className="text-sm text-gray-600 leading-relaxed">舞浜駅を降りてすぐ手荷物を預けてホテルへ無料配送。リゾートゲートウェイやベイサイド・ステーション直結で、混雑時でもスムーズにパークとホテルを行き来できます。</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <span className="text-3xl font-black text-amber-600 block mb-2">02</span>
            <h3 className="font-bold text-gray-900 text-lg mb-3 leading-snug">パークビューや東京湾の絶景パノラマ！夢の国と花火をお部屋から眺める非日常</h3>
            <p className="text-sm text-gray-600 leading-relaxed">客室の窓やバルコニーからは、きらめくシンデレラ城やプロメテウス火山、夜空を彩る花火、東京湾の爽快なオーシャンビュー。夜遅くまで感動が途切れません。</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <span className="text-3xl font-black text-amber-600 block mb-2">03</span>
            <h3 className="font-bold text-gray-900 text-lg mb-3 leading-snug">浦安市ふるさと納税で宿泊費を最大30％OFF！3年間有効でイベントに合わせて予約可能</h3>
            <p className="text-sm text-gray-600 leading-relaxed">ハロウィーン、クリスマス、新エリア誕生など、行きたいシーズンに合わせてクーポンを柔軟に利用可能。直前予約の「あとからクーポン適用」にも対応しています。</p>
          </div>
        </div>
      </section>

      {/* 宿紹介 1 */}
      <section id="hotel-1" className="mb-16 bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
        <div className="bg-gradient-to-r from-amber-700 to-amber-900 text-white p-4 md:p-6">
          <span className="bg-amber-500 text-white text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider mb-2 inline-block">厳選名宿 第1選</span>
          <h2 className="text-xl md:text-3xl font-bold leading-tight mb-2">
            シェラトン・グランデ・トーキョーベイ・ホテル
          </h2>
          <p className="text-xs md:text-sm text-amber-100">千葉県浦安市・ベイサイド・ステーション目の前！キッズランド＆室内プール完備の圧倒的人気オフィシャルホテル</p>
        </div>
        <div className="p-6 md:p-8">
          <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600 bg-gray-50 p-4 rounded-xl">
            <div><strong>所在地:</strong> 千葉県浦安市舞浜1-9</div>
            <div><strong>アクセス:</strong> ＪＲ京葉線 舞浜駅→ディズニーリゾートライン「ベイサイドステーション」下車徒歩１分 ※送迎バスも有り</div>
            <div><strong>楽天評価:</strong> <span className="text-amber-600 font-bold text-base">★ 4.39</span> (16066件)</div>
            <div><strong>参考価格:</strong> 1名あたり約7,200円〜</div>
          </div>
          <p className="text-base text-gray-800 leading-relaxed mb-6">ディズニーリゾートライン「ベイサイド・ステーション」の目の前に位置する、東京ディズニーリゾートを代表する大型ラグジュアリーホテル。館内には広大な室内プールや大浴場・サウナ、パターゴルフ、キッズエリア「Wizkids」を備えたアクティビティ施設「オアシス」を完備し、三世代旅行や小さな子ども連れファミリーにも大絶賛。パークの景色を望むパークウイングルームや東京湾の夕陽に染まるオーシャンビュールームなど多彩な客室が揃い、朝食ビュッフェではシェフが目の前で仕上げるオムレツや焼きたてクロワッサンなど圧巻のメニューを堪能できます。</p>
          <div className="hotel-special-wrapper">
            <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded-r-xl mb-6 text-sm text-amber-950">
              <strong className="block mb-1 font-bold">宿のこだわり・特徴:</strong>
              東京ディズニーリゾート(R)オフィシャルホテル。「ベイサイドステーション」下車、徒歩1分の好立地。
            </div>
          </div>
          <div className="user-review-wrapper">
            <blockquote className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-xl mb-6 text-xs md:text-sm text-gray-700 italic">
              <strong>宿泊者の声:</strong> “ガーデンプールが最高、来年もまた行きたいガーデンプールが最高でした!チェックインからアウトまでホテルステイで満喫させていただきました!来年もプール、行きたいです!クチコミの詳細はこちらから　h…　2026-09-05 16:57:53投稿 つづきはこちら”
            </blockquote>
          </div>
          <div className="pt-2">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D27896%26f_flg%3DPLAN"
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
            ヒルトン東京ベイ
          </h2>
          <p className="text-xs md:text-sm text-amber-100">千葉県浦安市・童話の魔法がかかったファミリールームが大人気！オーシャンビューと一流のグローバルサービス</p>
        </div>
        <div className="p-6 md:p-8">
          <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600 bg-gray-50 p-4 rounded-xl">
            <div><strong>所在地:</strong> 千葉県浦安市舞浜1-8</div>
            <div><strong>アクセス:</strong> 舞浜駅→ディズニーリゾートライン「ベイサイドステーション」下車　バス／徒歩1分。 舞浜駅→無料送迎バスで約7分。</div>
            <div><strong>楽天評価:</strong> <span className="text-amber-600 font-bold text-base">★ 4.4</span> (13311件)</div>
            <div><strong>参考価格:</strong> 1名あたり約6,923円〜</div>
          </div>
          <p className="text-base text-gray-800 leading-relaxed mb-6">東京湾とパークの美しいコントラストを望む、舞浜ベイエリアを代表する国際派リゾートホテル。森の動物たちや魔法の鍵が仕掛けられたコンセプトルーム「ハッピーマジックルーム」は、客室に入った瞬間から子どもたちの歓声が響く大人気フロア。24時間営業のコンビニエンスストアや本格ベーカリー、夏季のガーデンプールやフィットネスセンターも完備。ブッフェレストラン「フォレストガーデン」では、和洋中からアジアン料理までシェフが目の前で調理するライブ感あふれるダイニングが楽しめ、ディズニー旅行を華やかに彩ります。</p>
          <div className="hotel-special-wrapper">
            <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded-r-xl mb-6 text-sm text-amber-950">
              <strong className="block mb-1 font-bold">宿のこだわり・特徴:</strong>
              最大6名定員★お子様アメニティ★コンビニ★東京ディズニーリゾート(R)オフィシャルホテル
            </div>
          </div>
          <div className="user-review-wrapper">
            <blockquote className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-xl mb-6 text-xs md:text-sm text-gray-700 italic">
              <strong>宿泊者の声:</strong> “事前の要望が反映されず朝食も期待外れ添い寝がいるのでベッドをくっつけて欲しいと事前にメッセージを送り、チェックインでフロントさんからもくっつけときました!と言われたのに部屋に行ったら全部離れていま…　2026-09-05 22:22:02投稿 つづきはこちら”
            </blockquote>
          </div>
          <div className="pt-2">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D1405%26f_flg%3DPLAN"
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
            グランドニッコー東京ベイ　舞浜
          </h2>
          <p className="text-xs md:text-sm text-amber-100">千葉県浦安市・日本最大級の南欧風吹き抜けアトリウム！口コミ総合4.6超・100種以上の贅沢朝食ビュッフェ</p>
        </div>
        <div className="p-6 md:p-8">
          <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600 bg-gray-50 p-4 rounded-xl">
            <div><strong>所在地:</strong> 千葉県浦安市舞浜1-7</div>
            <div><strong>アクセス:</strong> 舞浜駅よりディズニーリゾートラインにて2駅目「ベイサイド・ステーション」下車後、徒歩約４分※舞浜駅より送迎バスも有り</div>
            <div><strong>楽天評価:</strong> <span className="text-amber-600 font-bold text-base">★ 4.61</span> (6993件)</div>
            <div><strong>参考価格:</strong> 1名あたり約5,850円〜</div>
          </div>
          <p className="text-base text-gray-800 leading-relaxed mb-6">南欧の街並みをイメージしたピンクの外観と、9層吹き抜け・国内最大級の開放的なアトリウムロビーが圧巻のラグジュアリーホテル。客室はパステルカラーで統一されたバルコニー付きで、海風を感じながらパークの夜景や富士山を遠望できます。特に宿泊者から絶大な支持を集めているのがオールデイダイニング「ル・ジャルダン」の朝食ビュッフェ。注文を受けてから握るおにぎりやシェフ特製のローストビーフバーガー、パフォーマンスキッチンで作られるフレンチトーストなど100種類以上の極上グルメが揃い、夢の一日を最高の朝からスタートできます。</p>
          <div className="hotel-special-wrapper">
            <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded-r-xl mb-6 text-sm text-amber-950">
              <strong className="block mb-1 font-bold">宿のこだわり・特徴:</strong>
              東京ディズニーリゾート（R）・オフィシャルホテル。上質空間で特別なひと時を
            </div>
          </div>
          <div className="user-review-wrapper">
            <blockquote className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-xl mb-6 text-xs md:text-sm text-gray-700 italic">
              <strong>宿泊者の声:</strong> “お部屋や食事は快適、立地も便利で満足とっても素敵なお部屋ですごせました。レストランは予約なしで入店できお味もよく種類も豊富でした。ベイサイド-ステーションも近くで24時間のお店もあったので…　2026-09-05 22:44:36投稿 つづきはこちら”
            </blockquote>
          </div>
          <div className="pt-2">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D179245%26f_flg%3DPLAN"
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
            href="/furusato-tax-themepark-aquarium-family-hotel-stay"
            className="block p-3 rounded-lg bg-white border border-gray-200 hover:border-amber-400 hover:shadow-xs transition-all text-sm text-amber-900 font-medium"
          >
            ▸ 【テーマパーク＆水族館満喫ホテル×ふるさと納税】家族旅行におすすめの宿
          </Link>
          <Link
            href="/furusato-tax-welcome-baby-family-kids-stay"
            className="block p-3 rounded-lg bg-white border border-gray-200 hover:border-amber-400 hover:shadow-xs transition-all text-sm text-amber-900 font-medium"
          >
            ▸ 【ウェルカムベビーのお宿認定×ふるさと納税】赤ちゃん・幼児連れ安心名宿
          </Link>
          <Link
            href="/furusato-tax-indoor-pool-kids-family-resort-stay"
            className="block p-3 rounded-lg bg-white border border-gray-200 hover:border-amber-400 hover:shadow-xs transition-all text-sm text-amber-900 font-medium"
          >
            ▸ 【一年中泳げる室内温水プール宿×ふるさと納税】那須・草津・別府リゾート
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
