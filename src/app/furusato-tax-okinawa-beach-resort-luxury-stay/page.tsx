import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '美ら海と白い砂浜が目の前！沖縄本島最高峰ビーチリゾートホテル×ふるさと納税完全攻略ガイド【2026年最新】ハレクラニ・ルネッサンス・ロワジール',
  description: 'エメラルドグリーンの東シナ海と白い砂浜！ハワイの名門「ハレクラニ沖縄」、イルカと触れ合えるファミリー人気No.1「ルネッサンス リゾート オキナワ」、那覇空港近くで天然温泉大浴場と屋外プールを誇る「ロワジールホテル 那覇」を、沖縄県恩納村・那覇市の楽天ふるさと納税トラベルクーポンで実質2,000円負担で予約する完全ガイド。',
  keywords: [
    'ふるさと納税 旅行',
    'ふるさと納税 ホテル',
    '沖縄本島ビーチリゾートホテル特集',
    '楽天ふるさと納税 トラベル',
    'ハレクラニ沖縄',
    'ルネッサンスリゾートオキナワ',
    'ロワジールホテル那覇',
    '高級温泉旅館',
    'プライベートステイ',
    '実質2000円'
  ],
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-okinawa-beach-resort-luxury-stay/',
  },
  openGraph: {
    title: '美ら海と白い砂浜が目の前！沖縄本島最高峰ビーチリゾートホテル×ふるさと納税完全攻略ガイド【2026年最新】ハレクラニ・ルネッサンス・ロワジール',
    description: 'エメラルドグリーンの東シナ海と白い砂浜！ハワイの名門「ハレクラニ沖縄」、イルカと触れ合えるファミリー人気No.1「ルネッサンス リゾート オキナワ」、那覇空港近くで天然温泉大浴場と屋外プールを誇る「ロワジールホテル 那覇」を、沖縄県恩納村・那覇市の楽天ふるさと納税トラベルクーポンで実質2,000円負担で予約する完全ガイド。',
    url: 'https://croud-travel.pages.dev/furusato-tax-okinawa-beach-resort-luxury-stay',
    siteName: '旅行とホテル・ふるさと納税の総合ポータル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function FurusatoOkinawaBeachResortStayPage() {
  return (
    <article className="max-w-5xl mx-auto px-4 py-8 text-gray-800 leading-relaxed font-sans">
      {/* パンくずリスト */}
      <nav className="text-sm text-gray-500 mb-6 flex flex-wrap items-center gap-1.5" aria-label="Breadcrumb">
        <Link href="/" className="hover:underline hover:text-amber-700">ホーム</Link>
        <span>&gt;</span>
        <Link href="/travel-savings-guide" className="hover:underline hover:text-amber-700">ふるさと納税トラベル完全攻略ガイド</Link>
        <span>&gt;</span>
        <span className="text-gray-800 font-semibold">沖縄本島ビーチリゾートホテル特集</span>
      </nav>

      {/* ヘッダー */}
      <header className="mb-10 pb-6 border-b border-gray-200">
        <div className="inline-block bg-gradient-to-r from-amber-600 to-amber-800 text-white text-xs md:text-sm font-bold px-3 py-1 rounded-full mb-3 shadow-sm">
          憧れの南国！沖縄本島最高峰ビーチリゾート特集
        </div>
        <h1 className="text-2xl md:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight mb-4">
          美ら海と白い砂浜が目の前！沖縄本島最高峰ビーチリゾートホテル×ふるさと納税完全攻略ガイド【2026年最新】ハレクラニ・ルネッサンス・ロワジール
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
          どこまでも広がるコバルトブルーの海と心地よい島風。南国沖縄の極上リゾートステイをふるさと納税で賢く実現
        </h2>
        <p className="text-base md:text-lg text-gray-800 leading-relaxed mb-6">
          透き通るエメラルドグリーンの美ら海、眩しい白い砂浜、赤く染まるドラマチックなサンセット。日本屈指のビーチリゾートである「沖縄本島」は、日常のすべてを脱ぎ捨てて心からリフレッシュできる南国の楽園です。中でも屈指のリゾートエリアである西海岸・恩納村には、名門ホテルやプライベートビーチを備えた極上リゾートが集中。プライベートバルコニーから水平線を眺め、名物のオーキッドプールで涼み、イルカや熱帯魚と戯れ、夜は波音を聞きながら島唄や沖縄創作フレンチ・BBQを堪能する滞在は、家族旅行・新婚旅行・女子旅のすべてにおいて最高の思い出となります。本特集では、ハワイで百年の歴史を誇り「天国にふさわしい館」と称される最高峰ラグジュアリー「ハレクラニ沖縄」、敷地内ビーチでイルカと泳ぐドルフィンプログラムや充実のマリンアクティビティでファミリー満足度No.1の「ルネッサンス リゾート オキナワ」、そして那覇空港から車で約7分・天然化石海水温泉大浴場とプールを備えた都市型リゾート「ロワジールホテル 那覇」の3宿を厳選。沖縄県恩納村・那覇市への楽天ふるさと納税トラベルクーポン（寄付額の最大30％割引・有効期限3年）を活用して、実質自己負担2,000円でお得に憧れの沖縄バカンスを実現しましょう。
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
          <li><a href="#three-points" className="text-amber-800 hover:underline font-medium">沖縄本島ビーチリゾートホテル特集が選ばれる3つの理由</a></li>
          <li><a href="#hotel-1" className="text-amber-800 hover:underline font-medium">【第1選】ハレクラニ沖縄</a></li>
          <li><a href="#hotel-2" className="text-amber-800 hover:underline font-medium">【第2選】ルネッサンスリゾートオキナワ</a></li>
          <li><a href="#hotel-3" className="text-amber-800 hover:underline font-medium">【第3選】ロワジールホテル那覇</a></li>
          <li><a href="#furusato-step" className="text-amber-800 hover:underline font-medium">実質自己負担2,000円で予約する簡単4ステップ手順</a></li>
          <li><a href="#faq" className="text-amber-800 hover:underline font-medium">よくある質問（Q&A）</a></li>
        </ol>
      </section>

      {/* 3つの魅力セクション */}
      <section id="three-points" className="mb-14">
        <h2 className="text-xl md:text-3xl font-extrabold text-gray-900 mb-6 pb-2 border-b-2 border-amber-600 flex items-center gap-2">
          <span>🌟</span> 沖縄本島ビーチリゾートホテル特集が選ばれる3つの理由
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <span className="text-3xl font-black text-amber-600 block mb-2">01</span>
            <h3 className="font-bold text-gray-900 text-lg mb-3 leading-snug">全室オーシャンビュー＆白砂ビーチ直結！目の前に広がるエメラルドグリーンの海</h3>
            <p className="text-sm text-gray-600 leading-relaxed">客室のテラスに出れば、東シナ海の爽快な大パノラマ。波音をBGMに目覚め、夕暮れには海に沈む黄金の夕陽を独占できる最高のロケーションです。</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <span className="text-3xl font-black text-amber-600 block mb-2">02</span>
            <h3 className="font-bold text-gray-900 text-lg mb-3 leading-snug">イルカと泳ぐ体験や名物プール！大人も子どもも夢中になれるアクティビティ</h3>
            <p className="text-sm text-gray-600 leading-relaxed">ホテル敷地内でのドルフィンプログラムやシュノーケリング、屋内温水プールやスライダーなど、リゾート内だけで一日中遊び尽くせる充実設備が揃います。</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <span className="text-3xl font-black text-amber-600 block mb-2">03</span>
            <h3 className="font-bold text-gray-900 text-lg mb-3 leading-snug">恩納村・那覇市ふるさと納税で最大30％OFF！3年間有効クーポンで旅程に合わせて予約</h3>
            <p className="text-sm text-gray-600 leading-relaxed">夏休みのハイシーズンから秋・春の過ごしやすい時期まで、有効期限3年間で自由に計画可能。高額になりがちな沖縄旅行の宿泊代を大幅に節約できます。</p>
          </div>
        </div>
      </section>

      {/* 宿紹介 1 */}
      <section id="hotel-1" className="mb-16 bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
        <div className="bg-gradient-to-r from-amber-700 to-amber-900 text-white p-4 md:p-6">
          <span className="bg-amber-500 text-white text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider mb-2 inline-block">厳選名宿 第1選</span>
          <h2 className="text-xl md:text-3xl font-bold leading-tight mb-2">
            ハレクラニ沖縄
          </h2>
          <p className="text-xs md:text-sm text-amber-100">沖縄県恩納村・ハワイで1世紀以上の歴史を誇る名門「ハレクラニ」世界2号店！全室50平米以上オーシャンビュー</p>
        </div>
        <div className="p-6 md:p-8">
          <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600 bg-gray-50 p-4 rounded-xl">
            <div><strong>所在地:</strong> 沖縄県国頭郡恩納村名嘉真1967-1</div>
            <div><strong>アクセス:</strong> 那覇空港よりお車にて約７５分</div>
            <div><strong>楽天評価:</strong> <span className="text-amber-600 font-bold text-base">★ 4.81</span> (717件)</div>
            <div><strong>参考価格:</strong> 1名あたり約36,021円〜</div>
          </div>
          <p className="text-base text-gray-800 leading-relaxed mb-6">沖縄海岸国定公園の美しい海岸線沿いに佇む、世界屈指のラグジュアリーリゾートホテル。「天国にふさわしい館」を意味するハレクラニの名の通り、全360室が東シナ海を望むオーシャンビュー設計。ホテルのシンボルである約150万枚のモザイクタイルで描かれた「オーキッドプール」をはじめ、静寂の大人専用クワイエットプールなど5つのプールを完備。客室は「セブンシェイズ・オブ・ホワイト（7色の白）」を基調とした洗練の極み。ミシュラン二つ星シェフ監修のイノベーティブフレンチ「SHIROUX（シルー）」やサンセットバーで過ごす時間は、人生最高のバカンスを約束してくれます。</p>
          <div className="hotel-special-wrapper">
            <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded-r-xl mb-6 text-sm text-amber-950">
              <strong className="block mb-1 font-bold">宿のこだわり・特徴:</strong>
              ハワイで育まれたラグジュアリーリゾート「ハレクラニ」が沖縄に誕生
            </div>
          </div>
          <div className="user-review-wrapper">
            <blockquote className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-xl mb-6 text-xs md:text-sm text-gray-700 italic">
              <strong>宿泊者の声:</strong> “サンセットと朝の眺めが最高、清潔感も抜群サンセットビーチvillaに宿泊しました。朝の眺めも日が落ちる瞬間も最高に綺麗でした!お部屋も清潔感があり安心して泊まることができました!クチコミの詳細…　2026-09-05 18:36:27投稿 つづきはこちら”
            </blockquote>
          </div>
          <div className="pt-2">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D172611%26f_flg%3DPLAN"
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
            ルネッサンスリゾートオキナワ
          </h2>
          <p className="text-xs md:text-sm text-amber-100">沖縄県恩納村・イルカと泳げるプライベートビーチ！全室バルコニー付き＆キッズサービス満足度No.1リゾート</p>
        </div>
        <div className="p-6 md:p-8">
          <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600 bg-gray-50 p-4 rounded-xl">
            <div><strong>所在地:</strong> 沖縄県国頭郡恩納村山田3425-2</div>
            <div><strong>アクセス:</strong> 那覇空港より沖縄自動車道利用で車で約60分。</div>
            <div><strong>楽天評価:</strong> <span className="text-amber-600 font-bold text-base">★ 4.66</span> (904件)</div>
            <div><strong>参考価格:</strong> 1名あたり約21,000円〜</div>
          </div>
          <p className="text-base text-gray-800 leading-relaxed mb-6">恩納村の美しい入り江に位置し、全国のファミリーから圧倒的な支持を集める大型ビーチリゾート。最大の特徴は、ホテル敷地内のプライベートラグーンにイルカが暮らしており、イルカと触れ合える多彩なドルフィンプログラムを開催している点。一年中利用できる屋内温水プールや大型ウォータースライダー、屋外プール、シュノーケリングなどマリンアクティビティも充実。客室は全室バルコニー付きで東シナ海を一望。3連泊以上でランチやマリンアクティビティが無料になる「クラブサビー（Club Savvy）」特典も大好評で、家族全員の笑顔が弾ける名宿です。</p>
          <div className="hotel-special-wrapper">
            <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded-r-xl mb-6 text-sm text-amber-950">
              <strong className="block mb-1 font-bold">宿のこだわり・特徴:</strong>
              イルカが暮らすプライベートリゾート！
            </div>
          </div>
          <div className="user-review-wrapper">
            <blockquote className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-xl mb-6 text-xs md:text-sm text-gray-700 italic">
              <strong>宿泊者の声:</strong> “リニューアルで綺麗、また泊まりたいホテル自体はリニューアルされててとても綺麗になってました。ただ、朝食の生搾りオレンジジュースを子供が楽しみにしてたので機械になってたのが残念でした。アメニ…　2026-09-04 21:02:20投稿 つづきはこちら”
            </blockquote>
          </div>
          <div className="pt-2">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D54315%26f_flg%3DPLAN"
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
            ロワジールホテル那覇
          </h2>
          <p className="text-xs md:text-sm text-amber-100">沖縄県那覇市・那覇空港から車で約7分！地下1000mから湧く「三重城温泉」天然温泉大浴場と屋外クアプール</p>
        </div>
        <div className="p-6 md:p-8">
          <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600 bg-gray-50 p-4 rounded-xl">
            <div><strong>所在地:</strong> 沖縄県那覇市西3-2-1</div>
            <div><strong>アクセス:</strong> 【車】那覇空港より約7分（那覇うみそらトンネル～西海岸道路経由）　【ゆいレール】「旭橋」駅下車、徒歩約15分</div>
            <div><strong>楽天評価:</strong> <span className="text-amber-600 font-bold text-base">★ 3.93</span> (1912件)</div>
            <div><strong>参考価格:</strong> 1名あたり約5,620円〜</div>
          </div>
          <p className="text-base text-gray-800 leading-relaxed mb-6">那覇市街に位置しながら、約800万年前の化石海水を源泉とする天然温泉「三重城温泉 海人の湯」を完備した希少な都市型リゾートホテル。塩分を含んだ保温効果抜群の名湯で、旅や観光の疲れをゆったりと解きほぐせます。蝶をモチーフにした屋外プールや年中利用できる室内温水プール、フィットネスジムも併設。那覇空港や国際通りへのアクセスに優れ、沖縄到着日や最終日の宿泊拠点としても大人気。朝食ビュッフェでは沖縄そばやゴーヤチャンプルーなど豊富な琉球料理が並び、利便性とリゾート感を兼ね備えた高コスパ宿です。</p>
          <div className="hotel-special-wrapper">
            <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded-r-xl mb-6 text-sm text-amber-950">
              <strong className="block mb-1 font-bold">宿のこだわり・特徴:</strong>
              空港から車で約7分。天然温泉大浴場、室内外プールと館内施設が充実♪■楽天認定プレミアムホテル■
            </div>
          </div>
          <div className="user-review-wrapper">
            <blockquote className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-xl mb-6 text-xs md:text-sm text-gray-700 italic">
              <strong>宿泊者の声:</strong> “クチコミの詳細はこちらから　https://review.travel.rakuten.co.jp/hotel/voice/16443?reviewId=33123479226105　2026-09-01 17:31:51投稿”
            </blockquote>
          </div>
          <div className="pt-2">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D16443%26f_flg%3DPLAN"
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
            href="/furusato-tax-indoor-pool-kids-family-resort-stay"
            className="block p-3 rounded-lg bg-white border border-gray-200 hover:border-amber-400 hover:shadow-xs transition-all text-sm text-amber-900 font-medium"
          >
            ▸ 【一年中泳げる室内温水プール宿×ふるさと納税】那須・草津・別府リゾート
          </Link>
          <Link
            href="/furusato-tax-ocean-view-infinity-bath-luxury-stay"
            className="block p-3 rounded-lg bg-white border border-gray-200 hover:border-amber-400 hover:shadow-xs transition-all text-sm text-amber-900 font-medium"
          >
            ▸ 【海一望インフィニティ温泉×ふるさと納税】波打ち際と水平線に溶け込む宿
          </Link>
          <Link
            href="/furusato-tax-themepark-aquarium-family-hotel-stay"
            className="block p-3 rounded-lg bg-white border border-gray-200 hover:border-amber-400 hover:shadow-xs transition-all text-sm text-amber-900 font-medium"
          >
            ▸ 【テーマパーク＆水族館満喫ホテル×ふるさと納税】家族旅行におすすめの宿
          </Link>
          <Link
            href="/furusato-tax-atami-ocean-view-fireworks-hotel-stay"
            className="block p-3 rounded-lg bg-white border border-gray-200 hover:border-amber-400 hover:shadow-xs transition-all text-sm text-amber-900 font-medium"
          >
            ▸ 【熱海花火大会特等席＆オーシャンビュー温泉宿×ふるさと納税】特等席鑑賞
          </Link>
        </div>
      </section>
    </article>
  );
}
