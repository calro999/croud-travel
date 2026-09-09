import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '冬の味覚の王様！本場カニ食べ放題＆極上松葉ガニ名門宿×ふるさと納税完全攻略ガイド【2026年最新】夕日ヶ浦・城崎温泉で絶品カニ旅',
  description: '焼きガニ・カニ刺し・茹でガニ・カニすき鍋・カニ雑炊のフルコースから、ズワイガニ食べ放題まで！「夕日ヶ浦温泉 佳松苑」「城崎温泉 西村屋本館」「城崎温泉 心の宿 三國屋」を、京都府京丹後市・兵庫県豊岡市の楽天ふるさと納税トラベルクーポンで実質2,000円負担で予約する完全ガイド。冬の日本海の名湯と最高峰ガニ料理を堪能。',
  keywords: [
    'ふるさと納税 旅行',
    'ふるさと納税 ホテル',
    'カニ食べ放題＆松葉ガニ名宿特集',
    '楽天ふるさと納税 トラベル',
    '夕日ヶ浦温泉　時季を彩る　佳松苑',
    '城崎温泉　西村屋本館',
    '城崎温泉　心の宿　三國屋',
    '高級温泉旅館',
    'オフィシャルホテル',
    '実質2000円'
  ],
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-crab-all-you-can-eat-winter-buffet-stay/',
  },
  openGraph: {
    title: '冬の味覚の王様！本場カニ食べ放題＆極上松葉ガニ名門宿×ふるさと納税完全攻略ガイド【2026年最新】夕日ヶ浦・城崎温泉で絶品カニ旅',
    description: '焼きガニ・カニ刺し・茹でガニ・カニすき鍋・カニ雑炊のフルコースから、ズワイガニ食べ放題まで！「夕日ヶ浦温泉 佳松苑」「城崎温泉 西村屋本館」「城崎温泉 心の宿 三國屋」を、京都府京丹後市・兵庫県豊岡市の楽天ふるさと納税トラベルクーポンで実質2,000円負担で予約する完全ガイド。冬の日本海の名湯と最高峰ガニ料理を堪能。',
    url: 'https://croud-travel.pages.dev/furusato-tax-crab-all-you-can-eat-winter-buffet-stay',
    siteName: '旅行とホテル・ふるさと納税の総合ポータル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function FurusatoCrabAllYouCanEatBuffetStayPage() {
  return (
    <article className="max-w-5xl mx-auto px-4 py-8 text-gray-800 leading-relaxed font-sans">
      {/* パンくずリスト */}
      <nav className="text-sm text-gray-500 mb-6 flex flex-wrap items-center gap-1.5" aria-label="Breadcrumb">
        <Link href="/" className="hover:underline hover:text-amber-700">ホーム</Link>
        <span>&gt;</span>
        <Link href="/travel-savings-guide" className="hover:underline hover:text-amber-700">ふるさと納税トラベル完全攻略ガイド</Link>
        <span>&gt;</span>
        <span className="text-gray-800 font-semibold">カニ食べ放題＆松葉ガニ名宿特集</span>
      </nav>

      {/* ヘッダー */}
      <header className="mb-10 pb-6 border-b border-gray-200">
        <div className="inline-block bg-gradient-to-r from-amber-600 to-amber-800 text-white text-xs md:text-sm font-bold px-3 py-1 rounded-full mb-3 shadow-sm">
          冬の検索激増！本場カニ尽くし＆食べ放題宿特集
        </div>
        <h1 className="text-2xl md:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight mb-4">
          冬の味覚の王様！本場カニ食べ放題＆極上松葉ガニ名門宿×ふるさと納税完全攻略ガイド【2026年最新】夕日ヶ浦・城崎温泉で絶品カニ旅
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
          甘くトロけるカニ刺し、香ばしい焼きガニ、旨味凝縮のカニすき鍋。本場日本海の冬の王様をふるさと納税で贅沢に味わう
        </h2>
        <p className="text-base md:text-lg text-gray-800 leading-relaxed mb-6">
          冬の温泉旅行の代名詞といえば、何といっても「蟹（カニ）料理」。11月の漁解禁とともに日本海沿岸の温泉街はカニの甘い香りと活気に包まれます。透き通るような身をほおばると上品な甘みが広がる「カニ刺し」、香ばしい煙とともに旨味が凝縮する「焼きガニ」、身がぎっしり詰まった「茹でガニ」、そして特製出汁にカニの濃厚なエキスが溶け出す「カニすき鍋」と締めのごちそう「カニ雑炊」——。さらに近年では、心ゆくまでカニを頬張れる「ズワイガニ食べ放題ビュッフェプラン」も大人気です。本特集では、美人の湯として名高い丹後半島・夕日ヶ浦温泉に位置し、カニ尽くし会席やズワイガニ食べ放題が絶賛される「夕日ヶ浦温泉 佳松苑」、創業160年・国登録有形文化財の数寄屋建築と広大な日本庭園を誇り、津居山港・柴山港水揚げの最高峰松葉ガニを供する城崎温泉の最高峰「城崎温泉 西村屋本館」、そして城崎温泉街の柳並木や外湯巡りに至近で、本場カニ料理と但馬牛を温かな木造宿で味わえる「城崎温泉 心の宿 三國屋」の3大名宿を厳選。楽天ふるさと納税トラベルクーポン（寄付額の最大30％割引・有効期限3年）を活用して、実質自己負担2,000円で一生モノのカニ三昧温泉旅を実現しましょう。
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
          <li><a href="#three-points" className="text-amber-800 hover:underline font-medium">カニ食べ放題＆松葉ガニ名宿特集が選ばれる3つの理由</a></li>
          <li><a href="#hotel-1" className="text-amber-800 hover:underline font-medium">【第1選】夕日ヶ浦温泉　時季を彩る　佳松苑</a></li>
          <li><a href="#hotel-2" className="text-amber-800 hover:underline font-medium">【第2選】城崎温泉　西村屋本館</a></li>
          <li><a href="#hotel-3" className="text-amber-800 hover:underline font-medium">【第3選】城崎温泉　心の宿　三國屋</a></li>
          <li><a href="#furusato-step" className="text-amber-800 hover:underline font-medium">実質自己負担2,000円で予約する簡単4ステップ手順</a></li>
          <li><a href="#faq" className="text-amber-800 hover:underline font-medium">よくある質問（Q&A）</a></li>
        </ol>
      </section>

      {/* 3つの魅力セクション */}
      <section id="three-points" className="mb-14">
        <h2 className="text-xl md:text-3xl font-extrabold text-gray-900 mb-6 pb-2 border-b-2 border-amber-600 flex items-center gap-2">
          <span>🌟</span> カニ食べ放題＆松葉ガニ名宿特集が選ばれる3つの理由
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <span className="text-3xl font-black text-amber-600 block mb-2">01</span>
            <h3 className="font-bold text-gray-900 text-lg mb-3 leading-snug">本場日本海港直送の鮮度！カニ刺し・焼きガニ・茹で・鍋のフルコース三昧</h3>
            <p className="text-sm text-gray-600 leading-relaxed">水揚げされたばかりの活ガニは甘みと繊維のプリプリ感が格別。カニ味噌甲羅焼きやカニ雑炊まで、余すところなくカニの旨味を味わい尽くせます。</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <span className="text-3xl font-black text-amber-600 block mb-2">02</span>
            <h3 className="font-bold text-gray-900 text-lg mb-3 leading-snug">心ゆくまで頬張る食べ放題プラン！ズワイガニを好きなだけ満喫する満足感</h3>
            <p className="text-sm text-gray-600 leading-relaxed">身の詰まった茹でズワイガニや焼きガニを思う存分味わえる食べ放題ビュッフェも大好評。家族連れやグループで笑顔あふれるカニパーティーが楽しめます。</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <span className="text-3xl font-black text-amber-600 block mb-2">03</span>
            <h3 className="font-bold text-gray-900 text-lg mb-3 leading-snug">ふるさと納税で高額なカニ宿泊プランを最大30％OFF！実質2,000円で予約</h3>
            <p className="text-sm text-gray-600 leading-relaxed">冬のハイシーズンに価格が高騰しやすいカニプランも、ふるさと納税クーポンを使えば自己負担を大幅に抑えてお得に泊まれるため満足度が段違いです。</p>
          </div>
        </div>
      </section>

      {/* 宿紹介 1 */}
      <section id="hotel-1" className="mb-16 bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
        <div className="bg-gradient-to-r from-amber-700 to-amber-900 text-white p-4 md:p-6">
          <span className="bg-amber-500 text-white text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider mb-2 inline-block">厳選名宿 第1選</span>
          <h2 className="text-xl md:text-3xl font-bold leading-tight mb-2">
            夕日ヶ浦温泉　時季を彩る　佳松苑
          </h2>
          <p className="text-xs md:text-sm text-amber-100">京都府京丹後市・夕日百選の夕日ヶ浦温泉！カニ尽くし会席＆ズワイガニ食べ放題プランが大好評の美食宿</p>
        </div>
        <div className="p-6 md:p-8">
          <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600 bg-gray-50 p-4 rounded-xl">
            <div><strong>所在地:</strong> 京都府京丹後市網野町木津247</div>
            <div><strong>アクセス:</strong> 京都丹後鉄道・夕日ヶ浦木津温泉駅から徒歩で約15分、送迎バスで約3分／京都縦貫道・京丹後大宮IC下車約40分※カニバス有</div>
            <div><strong>楽天評価:</strong> <span className="text-amber-600 font-bold text-base">★ 4.36</span> (1177件)</div>
            <div><strong>参考価格:</strong> 1名あたり約18,240円〜</div>
          </div>
          <p className="text-base text-gray-800 leading-relaxed mb-6">丹後半島の白砂青松・夕日ヶ浦海岸近くに建ち、冬の味覚カニ料理で圧倒的なリピート率を誇る大型温泉旅館。冬期には本場のズワイガニを茹で・焼き・鍋で堪能できるカニフルコース会席や、好きなだけカニを頬張れるカニ食べ放題プランが登場。ぷりぷりのカニ身と濃厚なカニ味噌を心ゆくまで味わえます。温泉は「美人の湯」と称される弱アルカリ性単純温泉で、広々とした大浴場や露天風呂、貸切風呂でしっとりとお肌を潤せます。客室からは日本海の水平線や美しい夕暮れを望み、家族旅行やグループ旅行に大人気の名宿です。</p>
          <div className="hotel-special-wrapper">
            <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded-r-xl mb-6 text-sm text-amber-950">
              <strong className="block mb-1 font-bold">宿のこだわり・特徴:</strong>
              全室海側の客室で日本海を一望◇絶景夕日に時季を彩る旬の美味と温泉を存分にお楽しみください。
            </div>
          </div>
          <div className="user-review-wrapper">
            <blockquote className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-xl mb-6 text-xs md:text-sm text-gray-700 italic">
              <strong>宿泊者の声:</strong> “7階からの景色と食事が素晴らしく静かな時間7階だったので景色が良かったです(その日は夕日は見えませんでしたが)。部屋風呂は良かったですがちょっと熱すぎました。夕食と朝食も素晴らしかったです。後…　2026-09-03 11:53:55投稿 つづきはこちら”
            </blockquote>
          </div>
          <div className="pt-2">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D29771%26f_flg%3DPLAN"
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
            城崎温泉　西村屋本館
          </h2>
          <p className="text-xs md:text-sm text-amber-100">兵庫県豊岡市・創業百六十年を誇る有形文化財宿！津居山港・柴山港水揚げの最高峰「松葉ガニ会席」の真髄</p>
        </div>
        <div className="p-6 md:p-8">
          <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600 bg-gray-50 p-4 rounded-xl">
            <div><strong>所在地:</strong> 兵庫県豊岡市城崎町湯島469</div>
            <div><strong>アクセス:</strong> 【車】北近畿豊岡自動車道　豊岡出石ICより約18分　【電車】城崎温泉駅より徒歩15分（旅館組合無料バス有）</div>
            <div><strong>楽天評価:</strong> <span className="text-amber-600 font-bold text-base">★ 5</span> (338件)</div>
            <div><strong>参考価格:</strong> 1名あたり約16,000円〜</div>
          </div>
          <p className="text-base text-gray-800 leading-relaxed mb-6">開湯千三百年・城崎温泉を代表する日本最高峰の純和風旅館。国登録有形文化財に指定された数寄屋造りの建築と、四季の移ろいを映す壮麗な日本庭園が出迎えてくれます。冬の夕食では、近隣の津居山港や柴山港で水揚げされた青タグ付き特選松葉ガニを、熟練の料理人が一匹ずつ丹念に調理。炭火で香ばしく焼き上げる焼きガニや繊細なカニ刺し、カニすきなど、芸術品のようなカニ料理を客室で至福のひとときとともに堪能できます。歴史と風格、完璧なおもてなしに満ちた唯一無二の名門宿です。</p>
          <div className="hotel-special-wrapper">
            <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded-r-xl mb-6 text-sm text-amber-950">
              <strong className="block mb-1 font-bold">宿のこだわり・特徴:</strong>
              ◆売切れの日は公式サイトもご確認下さい◆江戸安政期創業、山陰隋一の純日本旅館として皆様をお迎致します
            </div>
          </div>
          <div className="user-review-wrapper">
            <blockquote className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-xl mb-6 text-xs md:text-sm text-gray-700 italic">
              <strong>宿泊者の声:</strong> “お料理も温泉も最高でした。非日常を存分に味わえました。”
            </blockquote>
          </div>
          <div className="pt-2">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D75399%26f_flg%3DPLAN"
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
            城崎温泉　心の宿　三國屋
          </h2>
          <p className="text-xs md:text-sm text-amber-100">兵庫県豊岡市・城崎温泉駅徒歩3分の木造老舗！本場津居山かに＆特選但馬牛を味わう隠れ家温泉旅館</p>
        </div>
        <div className="p-6 md:p-8">
          <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600 bg-gray-50 p-4 rounded-xl">
            <div><strong>所在地:</strong> 兵庫県豊岡市城崎町湯島221</div>
            <div><strong>アクセス:</strong> 電車：京都・大阪より約2時間半。城崎温泉駅より徒歩３分　車：北近畿豊岡道但馬空港ICから30分　専用駐車場あり</div>
            <div><strong>楽天評価:</strong> <span className="text-amber-600 font-bold text-base">★ 4.44</span> (243件)</div>
            <div><strong>参考価格:</strong> 1名あたり約13,750円〜</div>
          </div>
          <p className="text-base text-gray-800 leading-relaxed mb-6">JR城崎温泉駅から徒歩わずか3分、柳並木の温泉街散策や外湯巡りに抜群のロケーションを誇る木造3階建ての老舗旅館。館内には畳の温もりが広がり、趣の異なる3つの無料貸切風呂でプライベートな温泉浴を楽しめます。冬の料理は地元の津居山港直送の松葉ガニを中心に、焼きガニやカニ刺し、茹でガニ、そして兵庫の至宝「但馬牛」のステーキを組み合わせた豪華会席が自慢。女将やスタッフの温かく細やかな気配りが好評で、大人のカップルや夫婦の記念日旅行に高い支持を集めています。</p>
          <div className="hotel-special-wrapper">
            <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded-r-xl mb-6 text-sm text-amber-950">
              <strong className="block mb-1 font-bold">宿のこだわり・特徴:</strong>
              客室12室のこじんまりした駅通りの隠れ宿。当館前にある人力車が目印の好立地な宿。
            </div>
          </div>
          <div className="user-review-wrapper">
            <blockquote className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-xl mb-6 text-xs md:text-sm text-gray-700 italic">
              <strong>宿泊者の声:</strong> “スタッフの対応と朝食は最高、部屋への移動は少し大変スタッフの皆様がとてもあたたかく迎えてくれました。お風呂も綺麗ですし、朝食も大変美味しかったです。部屋も綺麗でしたが、部屋までの道のりが思…　2026-08-24 20:28:39投稿 つづきはこちら”
            </blockquote>
          </div>
          <div className="pt-2">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D70350%26f_flg%3DPLAN"
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
              <span>星野リゾートやカニ料理のハイシーズンでも利用できますか？</span>
              <span className="text-amber-600 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="mt-3 text-xs md:text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
              はい、対象ホテルの空室があれば、ゴールデンウィークや年末年始、カニ解禁シーズンでも除外日なくクーポンをご利用いただけます。
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
            href="/furusato-tax-winter-crab-gourmet-luxury-stay"
            className="block p-3 rounded-lg bg-white border border-gray-200 hover:border-amber-400 hover:shadow-xs transition-all text-sm text-amber-900 font-medium"
          >
            ▸ 【冬のカニ尽くし名門温泉旅館×ふるさと納税】越前ガニ・松葉ガニ
          </Link>
          <Link
            href="/furusato-tax-luxury-buffet-gourmet-resort-stay"
            className="block p-3 rounded-lg bg-white border border-gray-200 hover:border-amber-400 hover:shadow-xs transition-all text-sm text-amber-900 font-medium"
          >
            ▸ 【豪華ディナービュッフェ・バイキング宿×ふるさと納税】ライブキッチン
          </Link>
          <Link
            href="/furusato-tax-hakone-onsen-open-air-bath-stay"
            className="block p-3 rounded-lg bg-white border border-gray-200 hover:border-amber-400 hover:shadow-xs transition-all text-sm text-amber-900 font-medium"
          >
            ▸ 【箱根湯本名湯大露天風呂宿×ふるさと納税】ロマンスカー直通名宿
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
