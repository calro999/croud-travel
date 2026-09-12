import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '紫に染まるラベンダー畑と神秘の青い池！富良野・美瑛の十勝岳連峰一望リゾート＆源泉かけ流し名湯×ふるさと納税完全攻略ガイド【2026年最新】新富良野プリンス・オリカ・白金温泉ゆゆ',
  description: '見渡す限りのパッチワークの丘と紫のラベンダー畑！北海道中央部・富良野と美瑛。「新富良野プリンスホテル」「富良野リゾート オリカ」「碧の美 ゆゆ（旧湯元白金温泉ホテル）」を、富良野市・中富良野町・美瑛町の楽天ふるさと納税トラベルクーポンで実質2,000円負担で予約する完全ガイド。ニングルテラス、富良野温泉、美瑛青い池、ふらの和牛を満喫。',
  keywords: [
    'ふるさと納税 旅行',
    'ふるさと納税 温泉',
    '富良野・美瑛 ラベンダー＆絶景名宿特集',
    '楽天ふるさと納税 トラベル',
    '新富良野プリンスホテル',
    '富良野リゾート　オリカ',
    '碧の美　ゆゆ（旧：湯元白金温泉ホテル）',
    '高級リゾートホテル',
    'プライベートプール',
    '実質2000円'
  ],
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-furano-biei-lavender-nature-stay/',
  },
  openGraph: {
    title: '紫に染まるラベンダー畑と神秘の青い池！富良野・美瑛の十勝岳連峰一望リゾート＆源泉かけ流し名湯×ふるさと納税完全攻略ガイド【2026年最新】新富良野プリンス・オリカ・白金温泉ゆゆ',
    description: '見渡す限りのパッチワークの丘と紫のラベンダー畑！北海道中央部・富良野と美瑛。「新富良野プリンスホテル」「富良野リゾート オリカ」「碧の美 ゆゆ（旧湯元白金温泉ホテル）」を、富良野市・中富良野町・美瑛町の楽天ふるさと納税トラベルクーポンで実質2,000円負担で予約する完全ガイド。ニングルテラス、富良野温泉、美瑛青い池、ふらの和牛を満喫。',
    url: 'https://croud-travel.pages.dev/furusato-tax-furano-biei-lavender-nature-stay',
    siteName: '旅行とホテル・ふるさと納税の総合ポータル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function FurusatoFuranoBieiLuxuryStayPage() {
  return (
    <article className="max-w-5xl mx-auto px-4 py-8 text-gray-800 leading-relaxed font-sans">
      {/* パンくずリスト */}
      <nav className="text-sm text-gray-500 mb-6 flex flex-wrap items-center gap-1.5" aria-label="Breadcrumb">
        <Link href="/" className="hover:underline hover:text-amber-700">ホーム</Link>
        <span>&gt;</span>
        <Link href="/travel-savings-guide" className="hover:underline hover:text-amber-700">ふるさと納税トラベル完全攻略ガイド</Link>
        <span>&gt;</span>
        <span className="text-gray-800 font-semibold">富良野・美瑛 ラベンダー＆絶景名宿特集</span>
      </nav>

      {/* ヘッダー */}
      <header className="mb-10 pb-6 border-b border-gray-200">
        <div className="inline-block bg-gradient-to-r from-amber-600 to-amber-800 text-white text-xs md:text-sm font-bold px-3 py-1 rounded-full mb-3 shadow-sm">
          パッチワークの丘と満開のラベンダー！北海道富良野・美瑛特集
        </div>
        <h1 className="text-2xl md:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight mb-4">
          紫に染まるラベンダー畑と神秘の青い池！富良野・美瑛の十勝岳連峰一望リゾート＆源泉かけ流し名湯×ふるさと納税完全攻略ガイド【2026年最新】新富良野プリンス・オリカ・白金温泉ゆゆ
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
          風にそよぐ紫のラベンダー、美瑛の丘を彩る色彩のパレット。雄大な十勝岳連峰を望む富良野・美瑛の休日へ
        </h2>
        <p className="text-base md:text-lg text-gray-800 leading-relaxed mb-6">
          北海道のほぼ中央に位置し、どこまでも続く波状丘陵と雄大な大雪山・十勝岳連峰のパノラマが広がる日本屈指の絶景地「富良野（ふらの）・美瑛（びえい）」。初夏から夏にかけて丘一面を鮮やかな紫色と甘い香りで染め上げるラベンダー畑をはじめ、四季折々の農作物が幾重にも重なる「パッチワークの丘」、そしてコバルトブルーの水面と枯れ木が神秘的な光景を描き出す「白金 青い池」など、世界中の旅人を魅了する奇跡の自然景観が広がります。富良野・美瑛の滞在は、大自然の静寂と澄んだ空気、そして大地から湧き出る良質な温泉が最大の魅力。森の中にログハウス風のクラフトショップが並ぶ「ニングルテラス」の幻想的なライトアップ散策や、十勝岳連峰を正面に望む絶景展望露天風呂での湯浴みは、日常を忘れさせてくれる至福のひとときです。さらに北海道屈指の食糧庫である富良野・美瑛はグルメの楽園。厳しい寒暖差が育んだ極上の黒毛和牛「ふらの和牛」のステーキ、甘みたっぷりの富良野メロンや美瑛産とうもろこし、濃厚な富良野チーズや搾りたて牛乳など、北海道の大地の恵みを五感で堪能できます。本特集では、富良野温泉「紫彩の湯」とニングルテラスを擁し十勝岳連峰を一望する一大リゾート「新富良野プリンスホテル」、ラベンダー畑と丘のパノラマを見晴らす丘の上に佇み全室展望風呂付き極上ホテル「富良野リゾート オリカ」、そして青い池や白ひげの滝のすぐそばで源泉100％かけ流し温泉を堪能できる老舗「碧の美 ゆゆ（旧：湯元白金温泉ホテル）」の3宿を厳選。北海道富良野市・美瑛町への楽天ふるさと納税トラベルクーポン（寄付額の最大30％割引・有効期限3年）を活用して、実質自己負担2,000円で憧れの富良野・美瑛ステイをお得に予約しましょう。
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
          <li><a href="#three-points" className="text-amber-800 hover:underline font-medium">富良野・美瑛 ラベンダー＆絶景名宿特集が選ばれる3つの理由</a></li>
          <li><a href="#hotel-1" className="text-amber-800 hover:underline font-medium">【第1選】新富良野プリンスホテル</a></li>
          <li><a href="#hotel-2" className="text-amber-800 hover:underline font-medium">【第2選】富良野リゾート　オリカ</a></li>
          <li><a href="#hotel-3" className="text-amber-800 hover:underline font-medium">【第3選】碧の美　ゆゆ（旧：湯元白金温泉ホテル）</a></li>
          <li><a href="#furusato-step" className="text-amber-800 hover:underline font-medium">実質自己負担2,000円で予約する簡単4ステップ手順</a></li>
          <li><a href="#faq" className="text-amber-800 hover:underline font-medium">よくある質問（Q&A）</a></li>
        </ol>
      </section>

      {/* 3つの魅力セクション */}
      <section id="three-points" className="mb-14">
        <h2 className="text-xl md:text-3xl font-extrabold text-gray-900 mb-6 pb-2 border-b-2 border-amber-600 flex items-center gap-2">
          <span>🌟</span> 富良野・美瑛 ラベンダー＆絶景名宿特集が選ばれる3つの理由
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <span className="text-3xl font-black text-amber-600 block mb-2">01</span>
            <h3 className="font-bold text-gray-900 text-lg mb-3 leading-snug">満開のラベンダー畑と美瑛の青い池！北海道を代表する感動的な大自然パノラマ</h3>
            <p className="text-sm text-gray-600 leading-relaxed">丘一面に広がる色鮮やかな花畑や神秘的なコバルトブルーの青い池。十勝岳連峰を借景にした絵画のような風景に心癒やされます。</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <span className="text-3xl font-black text-amber-600 block mb-2">02</span>
            <h3 className="font-bold text-gray-900 text-lg mb-3 leading-snug">ブランド黒毛和牛「ふらの和牛」と採れたてメロン！大地の恵みを味わう北海道ビュッフェ</h3>
            <p className="text-sm text-gray-600 leading-relaxed">甘み豊かなふらの和牛や新鮮な乳製品、旬の富良野メロンなど、北海道ならではの贅沢食材をフレンチやビュッフェで存分に満喫。</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <span className="text-3xl font-black text-amber-600 block mb-2">03</span>
            <h3 className="font-bold text-gray-900 text-lg mb-3 leading-snug">富良野市・美瑛町ふるさと納税で最大30％OFF！3年間有効クーポンで夏のピーク時期に予約</h3>
            <p className="text-sm text-gray-600 leading-relaxed">夏期に大人気で予約が集中する富良野・美瑛のリゾートホテルもふるさと納税なら実質2,000円。3年間の有効期間で安心して計画できます。</p>
          </div>
        </div>
      </section>

      {/* 宿紹介 1 */}
      <section id="hotel-1" className="mb-16 bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
        <div className="bg-gradient-to-r from-amber-700 to-amber-900 text-white p-4 md:p-6">
          <span className="bg-amber-500 text-white text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider mb-2 inline-block">厳選名宿 第1選</span>
          <h2 className="text-xl md:text-3xl font-bold leading-tight mb-2">
            新富良野プリンスホテル
          </h2>
          <p className="text-xs md:text-sm text-amber-100">北海道富良野市・十勝岳連峰一望の大パノラマ！自家源泉「紫彩の湯」＆森のロマンチック小道「ニングルテラス」が人気（口コミ1,500件超）</p>
        </div>
        <div className="p-6 md:p-8">
          <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600 bg-gray-50 p-4 rounded-xl">
            <div><strong>所在地:</strong> 北海道富良野市中御料</div>
            <div><strong>アクセス:</strong> ＪＲ富良野駅タクシー10分／道央自動車道 三笠ＩＣより車で約60分／旭川空港・新千歳空港から路線バスあり（終点当ホテル）</div>
            <div><strong>楽天評価:</strong> <span className="text-amber-600 font-bold text-base">★ 4.34</span> (1555件)</div>
            <div><strong>参考価格:</strong> 1名あたり約5,834円〜</div>
          </div>
          <p className="text-base text-gray-800 leading-relaxed mb-6">富良野の大自然に抱かれた高台に位置し、富良野観光の拠点として絶大な知名度と人気を誇る一大高原リゾート。館内には地下1,023mから湧出する富良野温泉「紫彩の湯」があり、なめらかな肌触りの名湯とフィンランド式サウナで心身をリフレッシュできます。敷地内には倉本聰氏プロデュースのクラフトショップが連なる「ニングルテラス」や「珈琲 森の時計」があり、夜のライトアップされた木漏れ日散歩は夢のような美しさ。夕食は富良野の大地の恵みや北海道の海鮮が勢揃いする豪華ディナービュッフェや、最上階メインダイニングでの本格創作フレンチを十勝岳連峰の夜景とともに味わえます。</p>
          <div className="hotel-special-wrapper">
            <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded-r-xl mb-6 text-sm text-amber-950">
              <strong className="block mb-1 font-bold">宿のこだわり・特徴:</strong>
              冬の富良野を満喫するチャンス！期間限定タイムセール開催中。今だけ使えるクーポン配布中！
            </div>
          </div>
          <div className="user-review-wrapper">
            <blockquote className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-xl mb-6 text-xs md:text-sm text-gray-700 italic">
              <strong>宿泊者の声:</strong> “期待外れな点もあったけど...もろもろ満足5階の部屋に3泊しました。高台にあるので眺めを期待していたのですが、木々とうっすら山が見える程度。少し残念でした。洗面台コーナーが狭いので仕方がないのです…　2026-09-05 15:11:21投稿 つづきはこちら”
            </blockquote>
          </div>
          <div className="pt-2">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D30804%26f_flg%3DPLAN"
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
            富良野リゾート　オリカ
          </h2>
          <p className="text-xs md:text-sm text-amber-100">北海道中富良野町・ラベンダー畑と十勝岳連峰を見下ろす丘の上！口コミ評価4.8超・全室パノラマビュー展望風呂付き最高峰ホテル</p>
        </div>
        <div className="p-6 md:p-8">
          <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600 bg-gray-50 p-4 rounded-xl">
            <div><strong>所在地:</strong> 北海道空知郡中富良野町西2線北17号</div>
            <div><strong>アクセス:</strong> ■新千歳空港からお車で約2時間30分　■札幌からお車で約2時間　■旭川空港からお車で約45分</div>
            <div><strong>楽天評価:</strong> <span className="text-amber-600 font-bold text-base">★ 4.8</span> (199件)</div>
            <div><strong>参考価格:</strong> 1名あたり約34,100円〜</div>
          </div>
          <p className="text-base text-gray-800 leading-relaxed mb-6">中富良野の丘の頂、十勝岳連峰と広大な田園風景をパノラマで見下ろす最高のロケーションに建つラグジュアリーホテル。客室は全室が東向きのパノラマビューとなっており、広々とした展望ビューバスからも美しい丘陵地帯と連峰の稜線を一望できます。館内には大浴場や露天風呂、ゴルフコースも併設。夕食はミシュラン星付きレストランで腕を磨いたシェフによるオリカ・フレンチ。美瑛牛や十勝産黒毛和牛、契約農家から毎朝届く瑞々しい野菜の旨味を極限まで引き出した一皿一皿が、五感を揺さぶる至高のディナータイムを演出します。</p>
          <div className="hotel-special-wrapper">
            <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded-r-xl mb-6 text-sm text-amber-950">
              <strong className="block mb-1 font-bold">宿のこだわり・特徴:</strong>
              上質で魅力あるステイを「丘の上の邸宅」で。　※11月と4月は休館
            </div>
          </div>
          <div className="user-review-wrapper">
            <blockquote className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-xl mb-6 text-xs md:text-sm text-gray-700 italic">
              <strong>宿泊者の声:</strong> “スタッフの皆様の温かいおもてなしとお料理に大満足の滞在でした。”
            </blockquote>
          </div>
          <div className="pt-2">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D9215%26f_flg%3DPLAN"
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
            碧の美　ゆゆ（旧：湯元白金温泉ホテル）
          </h2>
          <p className="text-xs md:text-sm text-amber-100">北海道美瑛町・「青い池」車で5分＆「白ひげの滝」すぐ！十勝岳の恵み・源泉100％完全かけ流し名湯と北海道会席（碧の美 ゆゆ）</p>
        </div>
        <div className="p-6 md:p-8">
          <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600 bg-gray-50 p-4 rounded-xl">
            <div><strong>所在地:</strong> 北海道上川郡美瑛町白金</div>
            <div><strong>アクセス:</strong> 国道237号線美瑛町より966号線/『JR美瑛駅』より20km</div>
            <div><strong>楽天評価:</strong> <span className="text-amber-600 font-bold text-base">★ 4.42</span> (305件)</div>
            <div><strong>参考価格:</strong> 1名あたり約16,720円〜</div>
          </div>
          <p className="text-base text-gray-800 leading-relaxed mb-6">美瑛の白金温泉郷に位置し、世界的な名所「白金 青い池」やエメラルドグリーンの「白ひげの滝」へ徒歩・車ですぐの絶好の立地を誇る老舗温泉ホテル（旧：湯元白金温泉ホテル）。最大の自慢は、活火山・十勝岳の地中深くから自噴する褐色の含硫黄-マグネシウム・カルシウム硫酸塩泉。一切の加水・加温を行わない100％源泉掛け流しの湯船は、神経痛や冷え性に優れた効能を発揮します。大自然の森林に囲まれた渓流露天風呂からは、四季折々の渓谷美と星空を満喫。夕食は美瑛豚や道産黒毛和牛、近海産の魚介を使った温かな和食会席膳で、北海道の素朴な温もりに包まれる滞在が叶います。</p>
          <div className="hotel-special-wrapper">
            <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded-r-xl mb-6 text-sm text-amber-950">
              <strong className="block mb-1 font-bold">宿のこだわり・特徴:</strong>
              十勝岳山麓の原生林に抱かれた天然温泉
            </div>
          </div>
          <div className="user-review-wrapper">
            <blockquote className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-xl mb-6 text-xs md:text-sm text-gray-700 italic">
              <strong>宿泊者の声:</strong> “白髭の滝と濁り湯は最高、デザートは残念ホテルからすぐのとこに歩いて白髭の滝が見れます!旬の食材のバイキングが楽しめて良かったです!デザートの盛り付けがオシャレでどれも美味しいそうで、最後に…　2026-08-24 12:49:24投稿 つづきはこちら”
            </blockquote>
          </div>
          <div className="pt-2">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D10727%26f_flg%3DPLAN"
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
            href="/furusato-tax-noboribetsu-jigokudani-onsen-luxury-stay"
            className="block p-3 rounded-lg bg-white border border-gray-200 hover:border-amber-400 hover:shadow-xs transition-all text-sm text-amber-900 font-medium"
          >
            ▸ 【登別温泉 地獄谷＆名湯ビュッフェ宿×ふるさと納税】第一滝本館・まほろば・グランドホテル
          </Link>
          <Link
            href="/furusato-tax-kamikochi-japan-alps-resort-stay"
            className="block p-3 rounded-lg bg-white border border-gray-200 hover:border-amber-400 hover:shadow-xs transition-all text-sm text-amber-900 font-medium"
          >
            ▸ 【上高地 北アルプス山岳名宿×ふるさと納税】ルミエスタ・大正池ホテル・上高地温泉ホテル
          </Link>
          <Link
            href="/furusato-tax-karuizawa-luxury-resort-villa-stay"
            className="block p-3 rounded-lg bg-white border border-gray-200 hover:border-amber-400 hover:shadow-xs transition-all text-sm text-amber-900 font-medium"
          >
            ▸ 【軽井沢 高原リゾート＆名門ホテル×ふるさと納税】マリオット・プリンスイースト・音羽ノ森
          </Link>
          <Link
            href="/furusato-tax-luxury-buffet-gourmet-resort-stay"
            className="block p-3 rounded-lg bg-white border border-gray-200 hover:border-amber-400 hover:shadow-xs transition-all text-sm text-amber-900 font-medium"
          >
            ▸ 【豪華ビュッフェ＆オープンキッチン名宿×ふるさと納税】美食リゾート
          </Link>
        </div>
      </section>
    </article>
  );
}
