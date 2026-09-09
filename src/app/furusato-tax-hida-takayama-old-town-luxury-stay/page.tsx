import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '出格子の町家と宮川朝市！飛騨高山の古い町並み徒歩圏＆とろとろ美肌温泉・最高峰飛騨牛会席名宿×ふるさと納税完全攻略ガイド【2026年最新】花兆庵・花扇・光風館',
  description: 'ミシュラン三ツ星の小京都・岐阜県飛騨高山！出格子の古い町並み、赤い中橋、宮川朝市。「本陣平野屋 花兆庵」「飛騨亭 花扇」「本陣平野屋 光風館」を、岐阜県高山市の楽天ふるさと納税トラベルクーポンで実質2,000円負担で予約する完全ガイド。古い町並み徒歩1分、神代欅の木造美、A5ランク飛騨牛づくし会席を満喫。',
  keywords: [
    'ふるさと納税 旅行',
    'ふるさと納税 温泉',
    '飛騨高山 古い町並み＆飛騨牛宿特集',
    '楽天ふるさと納税 トラベル',
    '飛騨高山　本陣平野屋　花兆庵',
    '飛騨亭　花扇',
    '飛騨高山　本陣平野屋　光風館（旧：飛騨高山　本陣平野屋　別館）',
    '高級温泉旅館',
    '絶景露天風呂',
    '実質2000円'
  ],
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-hida-takayama-old-town-luxury-stay/',
  },
  openGraph: {
    title: '出格子の町家と宮川朝市！飛騨高山の古い町並み徒歩圏＆とろとろ美肌温泉・最高峰飛騨牛会席名宿×ふるさと納税完全攻略ガイド【2026年最新】花兆庵・花扇・光風館',
    description: 'ミシュラン三ツ星の小京都・岐阜県飛騨高山！出格子の古い町並み、赤い中橋、宮川朝市。「本陣平野屋 花兆庵」「飛騨亭 花扇」「本陣平野屋 光風館」を、岐阜県高山市の楽天ふるさと納税トラベルクーポンで実質2,000円負担で予約する完全ガイド。古い町並み徒歩1分、神代欅の木造美、A5ランク飛騨牛づくし会席を満喫。',
    url: 'https://croud-travel.pages.dev/furusato-tax-hida-takayama-old-town-luxury-stay',
    siteName: '旅行とホテル・ふるさと納税の総合ポータル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function FurusatoHidaTakayamaStayPage() {
  return (
    <article className="max-w-5xl mx-auto px-4 py-8 text-gray-800 leading-relaxed font-sans">
      {/* パンくずリスト */}
      <nav className="text-sm text-gray-500 mb-6 flex flex-wrap items-center gap-1.5" aria-label="Breadcrumb">
        <Link href="/" className="hover:underline hover:text-amber-700">ホーム</Link>
        <span>&gt;</span>
        <Link href="/travel-savings-guide" className="hover:underline hover:text-amber-700">ふるさと納税トラベル完全攻略ガイド</Link>
        <span>&gt;</span>
        <span className="text-gray-800 font-semibold">飛騨高山 古い町並み＆飛騨牛宿特集</span>
      </nav>

      {/* ヘッダー */}
      <header className="mb-10 pb-6 border-b border-gray-200">
        <div className="inline-block bg-gradient-to-r from-amber-600 to-amber-800 text-white text-xs md:text-sm font-bold px-3 py-1 rounded-full mb-3 shadow-sm">
          飛騨の匠の技とミシュラン三ツ星の町！岐阜県高山市特集
        </div>
        <h1 className="text-2xl md:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight mb-4">
          出格子の町家と宮川朝市！飛騨高山の古い町並み徒歩圏＆とろとろ美肌温泉・最高峰飛騨牛会席名宿×ふるさと納税完全攻略ガイド【2026年最新】花兆庵・花扇・光風館
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-xs md:text-sm text-gray-500">
          <time dateTime="2026-09-10">2026年9月10日公開</time>
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
          出格子の連なる商家、宮川に架かる赤い中橋。飛騨の匠が遺した小京都・高山で過ごす雅な休日へ
        </h2>
        <p className="text-base md:text-lg text-gray-800 leading-relaxed mb-6">
          北アルプスの山々に抱かれ、江戸時代の城下町・商人町の面影を色濃く残す岐阜県「飛騨高山（ひだたかやま）」。世界的な観光ガイドブックで最高評価の三ツ星を獲得した「古い町並み（上三之町・上二之町）」には、黒い出格子が美しい商家が連なり、造り酒屋の杉玉や宮川沿いに立つ「宮川朝市」など、歩くだけで日本の伝統文化の粋に触れることができます。高山観光の拠点は、古い町並みや陣屋へ徒歩で行ける中心街、あるいは高台の静寂な温泉旅館。飛騨高山温泉は、肌にまとわりつくようなとろみのある美容液のような美肌泉質が自慢で、散策で歩き疲れた体を芯からやさしく包み込んでくれます。さらに高山を語る上で欠かせないのが、全国にその名を轟かせるブランド黒毛和牛の最高峰「飛騨牛（ひだぎゅう）」。きめ細やかな霜降りと芳醇な香りを誇る最高ランクA5飛騨牛を、名物朴葉味噌（ほおばみそ）焼き、炭火ステーキ、しゃぶしゃぶ、にぎり寿司で味わう歓びはまさに至福の極みです。本特集では、古い町並みまで徒歩1分の好立地で楽天トラベル口コミ総合4.9超を誇る最高峰旅館「飛騨高山 本陣平野屋 花兆庵」、樹齢数百年の神代欅を贅沢に配した木造美と自家源泉のトロトロ温泉が人気の「飛騨亭 花扇」、そして中橋のたもとに位置し最上階展望大浴場から町並みを一望できる「飛騨高山 本陣平野屋 光風館」の3大名宿を厳選。岐阜県高山市への楽天ふるさと納税トラベルクーポン（寄付額の最大30％割引・有効期限3年）を活用して、実質自己負担2,000円で憧れの飛騨高山ステイをお得に予約しましょう。
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
          <li><a href="#three-points" className="text-amber-800 hover:underline font-medium">飛騨高山 古い町並み＆飛騨牛宿特集が選ばれる3つの理由</a></li>
          <li><a href="#hotel-1" className="text-amber-800 hover:underline font-medium">【第1選】飛騨高山　本陣平野屋　花兆庵</a></li>
          <li><a href="#hotel-2" className="text-amber-800 hover:underline font-medium">【第2選】飛騨亭　花扇</a></li>
          <li><a href="#hotel-3" className="text-amber-800 hover:underline font-medium">【第3選】飛騨高山　本陣平野屋　光風館（旧：飛騨高山　本陣平野屋　別館）</a></li>
          <li><a href="#furusato-step" className="text-amber-800 hover:underline font-medium">実質自己負担2,000円で予約する簡単4ステップ手順</a></li>
          <li><a href="#faq" className="text-amber-800 hover:underline font-medium">よくある質問（Q&A）</a></li>
        </ol>
      </section>

      {/* 3つの魅力セクション */}
      <section id="three-points" className="mb-14">
        <h2 className="text-xl md:text-3xl font-extrabold text-gray-900 mb-6 pb-2 border-b-2 border-amber-600 flex items-center gap-2">
          <span>🌟</span> 飛騨高山 古い町並み＆飛騨牛宿特集が選ばれる3つの理由
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <span className="text-3xl font-black text-amber-600 block mb-2">01</span>
            <h3 className="font-bold text-gray-900 text-lg mb-3 leading-snug">古い町並みや中橋、宮川朝市へ徒歩すぐ！飛騨高山の風情を余すところなく堪能</h3>
            <p className="text-sm text-gray-600 leading-relaxed">早朝の静かな古い町並み散歩や朝市での地元の人との交流。宿泊者だからこそ味わえる高山の本物の魅力を体感できます。</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <span className="text-3xl font-black text-amber-600 block mb-2">02</span>
            <h3 className="font-bold text-gray-900 text-lg mb-3 leading-snug">最高ランクA5「飛騨牛」の極上会席！朴葉味噌焼きや炭火ステーキの贅沢な饗宴</h3>
            <p className="text-sm text-gray-600 leading-relaxed">とろけるような柔らかさと豊かな旨味を誇る飛騨牛を贅沢に使用。飛騨の地酒とともに味わう美食ディナーを満喫できます。</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <span className="text-3xl font-black text-amber-600 block mb-2">03</span>
            <h3 className="font-bold text-gray-900 text-lg mb-3 leading-snug">高山市ふるさと納税で最大30％OFF！3年間有効クーポンで高山祭や秋の紅葉に予約</h3>
            <p className="text-sm text-gray-600 leading-relaxed">国内外から大人気の飛騨高山の格式宿もふるさと納税なら実質2,000円。寄付から3年間有効なので、春・秋の高山祭や冬の白川郷観光にも最適です。</p>
          </div>
        </div>
      </section>

      {/* 宿紹介 1 */}
      <section id="hotel-1" className="mb-16 bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
        <div className="bg-gradient-to-r from-amber-700 to-amber-900 text-white p-4 md:p-6">
          <span className="bg-amber-500 text-white text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider mb-2 inline-block">厳選名宿 第1選</span>
          <h2 className="text-xl md:text-3xl font-bold leading-tight mb-2">
            飛騨高山　本陣平野屋　花兆庵
          </h2>
          <p className="text-xs md:text-sm text-amber-100">岐阜県高山市・古い町並み＆高山陣屋へ徒歩1分！口コミ評価4.9超・飛騨随一の格式とおもてなしを誇る最高峰料亭旅館（本陣平野屋 花兆庵）</p>
        </div>
        <div className="p-6 md:p-8">
          <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600 bg-gray-50 p-4 rounded-xl">
            <div><strong>所在地:</strong> 岐阜県高山市本町1-34</div>
            <div><strong>アクセス:</strong> 高山駅より徒歩10分　駅まで無料送迎：随時　車：東海北陸　高山ＩＣ～10分・中央道　松本ＩＣ～120分</div>
            <div><strong>楽天評価:</strong> <span className="text-amber-600 font-bold text-base">★ 4.91</span> (832件)</div>
            <div><strong>参考価格:</strong> 1名あたり約21,631円〜</div>
          </div>
          <p className="text-base text-gray-800 leading-relaxed mb-6">高山の中心部、宮川にかかる赤い中橋のたもとに位置し、楽天トラベル口コミ総合4.9点以上という驚異的な高評価を誇る最高峰旅館。古い町並みや高山陣屋まで歩いてすぐという絶好の立地にありながら、館内は静寂と和の気品に満ちています。女性専用のりらっくす蔵風呂や姉妹館の大浴場も自由に利用可能。宿最大の自慢は、飛騨の匠の技を器と料理に映し出した本格日本料理会席。最高ランクA5等級の極上飛騨牛を炭火焼きやしゃぶしゃぶで味わえるほか、専任の客室係による温かく細やかなおもてなしは一生の思い出に残る滞在を約束してくれます。</p>
          <div className="hotel-special-wrapper">
            <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded-r-xl mb-6 text-sm text-amber-950">
              <strong className="block mb-1 font-bold">宿のこだわり・特徴:</strong>
              【高山陣屋】【古い町並】に最も近い宿。上質なおもてなしでさりげなく満たされる極上の時間をゆっくりと…
            </div>
          </div>
          <div className="user-review-wrapper">
            <blockquote className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-xl mb-6 text-xs md:text-sm text-gray-700 italic">
              <strong>宿泊者の声:</strong> “リピーターも大満足、食事と接客が素晴らしい昨年に引き続き今年はリピータとして9月4日に宿泊した60代と50代の夫婦です。総合評価は今回も大満足でした。来年も機会あえば是非とも利用したいと思いま…　2026-09-05 17:36:16投稿 つづきはこちら”
            </blockquote>
          </div>
          <div className="pt-2">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D8327%26f_flg%3DPLAN"
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
            飛騨亭　花扇
          </h2>
          <p className="text-xs md:text-sm text-amber-100">岐阜県高山市・樹齢数百年の神代欅が香る木の温もり！自家源泉100％の「とろとろ美肌温泉」と個室飛騨牛料理（飛騨亭 花扇）</p>
        </div>
        <div className="p-6 md:p-8">
          <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600 bg-gray-50 p-4 rounded-xl">
            <div><strong>所在地:</strong> 岐阜県高山市本母町411-1</div>
            <div><strong>アクセス:</strong> ＪＲ高山駅より車で10分。東海北陸自動車道　高山ICより5分。長野自動車道　松本ICより90分。バス送迎有要予約。</div>
            <div><strong>楽天評価:</strong> <span className="text-amber-600 font-bold text-base">★ 4.83</span> (652件)</div>
            <div><strong>参考価格:</strong> 1名あたり約28,215円〜</div>
          </div>
          <p className="text-base text-gray-800 leading-relaxed mb-6">高山市街から少し離れた静かな高台に佇み、神代杉や神代欅、吉野杉など銘木を贅沢に使った木造建築美が光る高級温泉旅館。館内に一歩足を踏み入れると、木の芳醇な香りと畳敷きの回廊が旅人を優しく迎えます。宿の最大の誇りは、敷地内の地下1,200mから湧出する自家源泉。重曹泉のとろりとした美容液のようなお湯は「美肌の湯」として名高く、庭園露天風呂や客室露天風呂で贅沢な掛け流しの湯浴みが楽しめます。夕食は全席個室食事処にて、極上の飛騨牛ステーキや飛騨の郷土の味覚を職人が丁寧に仕立てた京風会席をゆったりと堪能できます。</p>
          <div className="hotel-special-wrapper">
            <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded-r-xl mb-6 text-sm text-amber-950">
              <strong className="block mb-1 font-bold">宿のこだわり・特徴:</strong>
              天然温泉で神代欅をあしらった落ち着きの有る和風旅館
            </div>
          </div>
          <div className="user-review-wrapper">
            <blockquote className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-xl mb-6 text-xs md:text-sm text-gray-700 italic">
              <strong>宿泊者の声:</strong> “初めての利用で大満足、価格高騰が少し残念私は初めて行きましたがとってもよかったです!でも、インバウンドの影響でどんどん値段が上がってるみたいでなかなか行けなくなるのが悲しいです。ゆっくり、まったり…　2026-09-04 23:13:10投稿 つづきはこちら”
            </blockquote>
          </div>
          <div className="pt-2">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D4711%26f_flg%3DPLAN"
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
            飛騨高山　本陣平野屋　光風館（旧：飛騨高山　本陣平野屋　別館）
          </h2>
          <p className="text-xs md:text-sm text-amber-100">岐阜県高山市・赤い中橋目前！最上階展望大浴場から古い町並みと北アルプスを一望＆女性専用りらっくす蔵（本陣平野屋 光風館）</p>
        </div>
        <div className="p-6 md:p-8">
          <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600 bg-gray-50 p-4 rounded-xl">
            <div><strong>所在地:</strong> 岐阜県高山市本町1-5</div>
            <div><strong>アクセス:</strong> 高山駅・バスセンターより徒歩10分　駅まで無料送迎：随時　車：東海北陸　高山ＩＣ～１０分・中央道　松本ＩＣ～120分</div>
            <div><strong>楽天評価:</strong> <span className="text-amber-600 font-bold text-base">★ 4.66</span> (1396件)</div>
            <div><strong>参考価格:</strong> 1名あたり約15,982円〜</div>
          </div>
          <p className="text-base text-gray-800 leading-relaxed mb-6">宮川と赤い中橋のたもとに建ち、観光散策の拠点としてこれ以上ない抜群のロケーションを誇る名門温泉旅館（旧別館）。最上階にある展望大浴場からは、高山の町並みと遠く連なる北アルプスの山並みが広がり、朝夕で異なる絶景パノラマを楽しめます。江戸時代の土蔵を改装した女性専用の「りらっくす蔵」では、白壁と木造の風情ある空間で癒やしの湯浴みが大好評。夕食は個室食事処で提供される旬の飛騨牛会席で、香ばしい朴葉味噌焼きや季節の炊き込みご飯など、飛騨高山ならではの温もりあふれる美食を心ゆくまで味わえます。</p>
          <div className="hotel-special-wrapper">
            <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded-r-xl mb-6 text-sm text-amber-950">
              <strong className="block mb-1 font-bold">宿のこだわり・特徴:</strong>
              2026年4月より名称変更（旧：本陣平野屋別館）古い町並・陣屋前朝市まで徒歩1分！
            </div>
          </div>
          <div className="user-review-wrapper">
            <blockquote className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-xl mb-6 text-xs md:text-sm text-gray-700 italic">
              <strong>宿泊者の声:</strong> “食事も部屋も快適で立地も良く大満足食事も美味しく、部屋、風呂なども快適で大満足です。また、街歩きの基点として良好な基点で、立地も良いです。クチコミの詳細はこちらから　https://revie…　2026-09-01 17:54:56投稿 つづきはこちら”
            </blockquote>
          </div>
          <div className="pt-2">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D8326%26f_flg%3DPLAN"
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
            href="/furusato-tax-traditional-hearth-irori-charcoal-stay"
            className="block p-3 rounded-lg bg-white border border-gray-200 hover:border-amber-400 hover:shadow-xs transition-all text-sm text-amber-900 font-medium"
          >
            ▸ 【古民家囲炉裏炭火会席＆奇跡の湯×ふるさと納税】白川郷・法師・祖谷
          </Link>
          <Link
            href="/furusato-tax-kamikochi-japan-alps-resort-stay"
            className="block p-3 rounded-lg bg-white border border-gray-200 hover:border-amber-400 hover:shadow-xs transition-all text-sm text-amber-900 font-medium"
          >
            ▸ 【上高地 穂高連峰絶景＆山岳名宿×ふるさと納税】ルミエスタ・大正池ホテル・上高地温泉ホテル
          </Link>
          <Link
            href="/furusato-tax-echigo-yuzawa-onsen-sake-stay"
            className="block p-3 rounded-lg bg-white border border-gray-200 hover:border-amber-400 hover:shadow-xs transition-all text-sm text-amber-900 font-medium"
          >
            ▸ 【越後湯沢温泉 雪国名湯＆魚沼コシヒカリ宿×ふるさと納税】双葉・NASPAニューオータニ・いなもと
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
