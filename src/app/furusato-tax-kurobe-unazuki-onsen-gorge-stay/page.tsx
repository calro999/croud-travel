import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '黒部峡谷トロッコ列車とエメラルドの清流！宇奈月温泉の断崖絶景露天風呂＆富山湾キトキト海の幸名宿×ふるさと納税完全攻略ガイド【2026年最新】延対寺荘・やまのは・延楽',
  description: '日本一のV字峡・黒部峡谷の玄関口！エメラルドグリーンの黒部川とトロッコ列車。「延対寺荘」「黒部・宇奈月温泉 やまのは」「宇奈月温泉 延楽」を、富山県黒部市の楽天ふるさと納税トラベルクーポンで実質2,000円負担で予約する完全ガイド。渓谷露天風呂、展望棚湯、富山湾の白えび・紅ズワイガニ会席を満喫。',
  keywords: [
    'ふるさと納税 旅行',
    'ふるさと納税 温泉',
    '宇奈月温泉 黒部峡谷＆名門宿特集',
    '楽天ふるさと納税 トラベル',
    '宇奈月温泉の老舗旅館　延対寺荘',
    '黒部・宇奈月温泉　やまのは（オリックスホテルズ＆リゾーツ）',
    '宇奈月温泉　延楽',
    '高級温泉旅館',
    '絶景露天風呂',
    '実質2000円'
  ],
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-kurobe-unazuki-onsen-gorge-stay/',
  },
  openGraph: {
    title: '黒部峡谷トロッコ列車とエメラルドの清流！宇奈月温泉の断崖絶景露天風呂＆富山湾キトキト海の幸名宿×ふるさと納税完全攻略ガイド【2026年最新】延対寺荘・やまのは・延楽',
    description: '日本一のV字峡・黒部峡谷の玄関口！エメラルドグリーンの黒部川とトロッコ列車。「延対寺荘」「黒部・宇奈月温泉 やまのは」「宇奈月温泉 延楽」を、富山県黒部市の楽天ふるさと納税トラベルクーポンで実質2,000円負担で予約する完全ガイド。渓谷露天風呂、展望棚湯、富山湾の白えび・紅ズワイガニ会席を満喫。',
    url: 'https://croud-travel.pages.dev/furusato-tax-kurobe-unazuki-onsen-gorge-stay',
    siteName: '旅行とホテル・ふるさと納税の総合ポータル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function FurusatoKurobeUnazukiStayPage() {
  return (
    <article className="max-w-5xl mx-auto px-4 py-8 text-gray-800 leading-relaxed font-sans">
      {/* パンくずリスト */}
      <nav className="text-sm text-gray-500 mb-6 flex flex-wrap items-center gap-1.5" aria-label="Breadcrumb">
        <Link href="/" className="hover:underline hover:text-amber-700">ホーム</Link>
        <span>&gt;</span>
        <Link href="/travel-savings-guide" className="hover:underline hover:text-amber-700">ふるさと納税トラベル完全攻略ガイド</Link>
        <span>&gt;</span>
        <span className="text-gray-800 font-semibold">宇奈月温泉 黒部峡谷＆名門宿特集</span>
      </nav>

      {/* ヘッダー */}
      <header className="mb-10 pb-6 border-b border-gray-200">
        <div className="inline-block bg-gradient-to-r from-amber-600 to-amber-800 text-white text-xs md:text-sm font-bold px-3 py-1 rounded-full mb-3 shadow-sm">
          日本一のV字峡と名湯の競演！富山県黒部市宇奈月温泉特集
        </div>
        <h1 className="text-2xl md:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight mb-4">
          黒部峡谷トロッコ列車とエメラルドの清流！宇奈月温泉の断崖絶景露天風呂＆富山湾キトキト海の幸名宿×ふるさと納税完全攻略ガイド【2026年最新】延対寺荘・やまのは・延楽
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
          黒部川のエメラルドグリーンの奔流、峡谷を走るトロッコ列車。大自然の絶壁に抱かれる宇奈月温泉の極上旅へ
        </h2>
        <p className="text-base md:text-lg text-gray-800 leading-relaxed mb-6">
          北アルプスの険しい山々を削り込んで生まれた日本一深いV字峡「黒部峡谷（くろべきょうこく）」。その玄関口に位置し、トロッコ列車の起点として栄える富山県随一の名湯が「宇奈月温泉（うなづきおんせん）」です。黒部川の清流沿いに広がる温泉街は、春の新緑、夏の爽涼、秋の全山紅葉、そして冬の墨絵のような雪景色と、四季折々に息を呑むダイナミックな景観を展開。黒部川上流の黒薙温泉から引湯される湯は、日本屈指の透明度を誇る弱アルカリ性単純温泉。「つべつべ美肌の湯」として親しまれ、無色澄み切った柔らかなお湯が肌をつるつるに磨き上げます。断崖絶壁にせり出すように作られた露天風呂に浸かれば、眼下を流れるエメラルドの川音と風が心地よく吹き抜け、大自然と一体化する非日常の開放感を味わえます。さらに宇奈月温泉のもう一つの主役は、天然の生け簀と呼ばれる富山湾の恵み「キトキト（新鮮）な海の幸」。富山湾の宝石「白えび」のお造りや唐揚げ、冬の味覚の王様「紅ズワイガニ」や「本ズワイガニ」、脂がのった極上の「寒ブリ」、名水ポークなど、富山ならではの贅沢な美食が食卓を埋め尽くします。本特集では、明治三十三年創業・竹久夢二や与謝野晶子ら文人が愛した黒部川絶壁露天の老舗「延対寺荘」、黒部峡谷を一望する棚田状展望露天風呂「棚湯」と富山湾バイキングが大人気の「黒部・宇奈月温泉 やまのは」、そして全室黒部峡谷ビューと樹齢数百年の檜露天風呂・名匠の料理が光る最高峰「宇奈月温泉 延楽」の3宿を厳選。富山県黒部市への楽天ふるさと納税トラベルクーポン（寄付額の最大30％割引・有効期限3年）を活用して、実質自己負担2,000円で宇奈月温泉の絶景峡谷旅をお得に予約しましょう。
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
          <li><a href="#three-points" className="text-amber-800 hover:underline font-medium">宇奈月温泉 黒部峡谷＆名門宿特集が選ばれる3つの理由</a></li>
          <li><a href="#hotel-1" className="text-amber-800 hover:underline font-medium">【第1選】宇奈月温泉の老舗旅館　延対寺荘</a></li>
          <li><a href="#hotel-2" className="text-amber-800 hover:underline font-medium">【第2選】黒部・宇奈月温泉　やまのは（オリックスホテルズ＆リゾーツ）</a></li>
          <li><a href="#hotel-3" className="text-amber-800 hover:underline font-medium">【第3選】宇奈月温泉　延楽</a></li>
          <li><a href="#furusato-step" className="text-amber-800 hover:underline font-medium">実質自己負担2,000円で予約する簡単4ステップ手順</a></li>
          <li><a href="#faq" className="text-amber-800 hover:underline font-medium">よくある質問（Q&A）</a></li>
        </ol>
      </section>

      {/* 3つの魅力セクション */}
      <section id="three-points" className="mb-14">
        <h2 className="text-xl md:text-3xl font-extrabold text-gray-900 mb-6 pb-2 border-b-2 border-amber-600 flex items-center gap-2">
          <span>🌟</span> 宇奈月温泉 黒部峡谷＆名門宿特集が選ばれる3つの理由
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <span className="text-3xl font-black text-amber-600 block mb-2">01</span>
            <h3 className="font-bold text-gray-900 text-lg mb-3 leading-snug">黒部川の断崖絶壁にせり出す絶景露天風呂！エメラルドグリーンの清流美</h3>
            <p className="text-sm text-gray-600 leading-relaxed">峡谷を縫うように走るトロッコ列車や赤い山彦橋を一望。日本一の透明度を誇る「つべつべ美肌の湯」を心ゆくまで堪能できます。</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <span className="text-3xl font-black text-amber-600 block mb-2">02</span>
            <h3 className="font-bold text-gray-900 text-lg mb-3 leading-snug">富山湾の宝石「白えび」と本場「紅ズワイガニ」！キトキト海の幸の美食会席</h3>
            <p className="text-sm text-gray-600 leading-relaxed">天然の生け簀・富山湾から毎朝直送される鮮魚。白えびや寒ブリ、名水黒部ポークなど、富山の大自然が育んだ美味に舌鼓を打てます。</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <span className="text-3xl font-black text-amber-600 block mb-2">03</span>
            <h3 className="font-bold text-gray-900 text-lg mb-3 leading-snug">黒部市ふるさと納税で最大30％OFF！3年間有効クーポンでトロッコ列車の旅に最適</h3>
            <p className="text-sm text-gray-600 leading-relaxed">黒部峡谷トロッコ列車観光や紅葉シーズンの旅行もふるさと納税なら実質2,000円。寄付から3年間有効なので計画的に利用可能です。</p>
          </div>
        </div>
      </section>

      {/* 宿紹介 1 */}
      <section id="hotel-1" className="mb-16 bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
        <div className="bg-gradient-to-r from-amber-700 to-amber-900 text-white p-4 md:p-6">
          <span className="bg-amber-500 text-white text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider mb-2 inline-block">厳選名宿 第1選</span>
          <h2 className="text-xl md:text-3xl font-bold leading-tight mb-2">
            宇奈月温泉の老舗旅館　延対寺荘
          </h2>
          <p className="text-xs md:text-sm text-amber-100">富山県黒部市・創業明治三十三年！竹久夢二・川端康成ら文人墨客逗留の格式＆黒部川の清流を真下に見下ろす絶壁露天風呂（延対寺荘）</p>
        </div>
        <div className="p-6 md:p-8">
          <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600 bg-gray-50 p-4 rounded-xl">
            <div><strong>所在地:</strong> 富山県黒部市宇奈月温泉53</div>
            <div><strong>アクセス:</strong> 北陸自動車道黒部 Ｉ．Ｃより２０分。富山地方鉄道「宇奈月温泉駅」より徒歩５分。</div>
            <div><strong>楽天評価:</strong> <span className="text-amber-600 font-bold text-base">★ 4.31</span> (1554件)</div>
            <div><strong>参考価格:</strong> 1名あたり約13,200円〜</div>
          </div>
          <p className="text-base text-gray-800 leading-relaxed mb-6">黒部川の断崖に寄り添うように建ち、創業百二十余年の歴史を誇る宇奈月を代表する老舗旅館。与謝野晶子や川端康成など名だたる文人墨客が定宿とした格式高い宿で、客室の窓からはエメラルドグリーンに輝く黒部川の清流と対岸の切り立つ峡谷美を大迫力で見下ろせます。大浴場や露天風呂はまさに絶壁の特等席。川のせせらぎと澄み渡る風に包まれながら、名湯「つべつべ美肌の湯」を堪能できます。夕食は富山湾の旬の魚介をふんだんに盛り込んだ本格会席。富山湾の宝石・白えびの刺身や天ぷら、紅ズワイガニ、名水百選の水で育った黒部ポークの陶板焼きなど、伝統の職人技が光る美食を心ゆくまで味わえます。</p>
          <div className="hotel-special-wrapper">
            <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded-r-xl mb-6 text-sm text-amber-950">
              <strong className="block mb-1 font-bold">宿のこだわり・特徴:</strong>
              温泉街でも最も眺望の良い場所に立地し、源泉１００％の加温・加水無しの湯がお楽しみいただけます。
            </div>
          </div>
          <div className="user-review-wrapper">
            <blockquote className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-xl mb-6 text-xs md:text-sm text-gray-700 italic">
              <strong>宿泊者の声:</strong> “お部屋は綺麗で景観も最高、温泉も大満足お宿の外観は古そうに思いましたが、お部屋はリフォーム後だったのかとてもきれいで、峡谷側で景観もとてもよく大満足です。夕食は...カジュアルプランだったのも…　2026-09-05 21:29:58投稿 つづきはこちら”
            </blockquote>
          </div>
          <div className="pt-2">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D4804%26f_flg%3DPLAN"
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
            黒部・宇奈月温泉　やまのは（オリックスホテルズ＆リゾーツ）
          </h2>
          <p className="text-xs md:text-sm text-amber-100">富山県黒部市・黒部峡谷と赤い山彦橋を一望！棚田状展望露天風呂「棚湯」＆富山湾の幸が並ぶ豪華バイキング（やまのは・口コミ4,100件超）</p>
        </div>
        <div className="p-6 md:p-8">
          <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600 bg-gray-50 p-4 rounded-xl">
            <div><strong>所在地:</strong> 富山県黒部市宇奈月温泉352番地7</div>
            <div><strong>アクセス:</strong> 富山地方鉄道「宇奈月温泉駅」下車徒歩３分　無料送迎バス有※要確認／北陸自動車道黒部IC下車約２０分</div>
            <div><strong>楽天評価:</strong> <span className="text-amber-600 font-bold text-base">★ 4.31</span> (4179件)</div>
            <div><strong>参考価格:</strong> 1名あたり約12,200円〜</div>
          </div>
          <p className="text-base text-gray-800 leading-relaxed mb-6">宇奈月温泉街の中心、黒部川にかかる名所「山彦橋」やトロッコ列車を望む絶景ロケーションに建つ大型リゾートホテル。最大の魅力は、棚田のように段状に広がる大展望露天風呂「棚湯」。遮るもののない大パノラマで黒部峡谷の雄大な山並みと清流を見渡しながら、開放感抜群の湯浴みが楽しめます。食事はオープンキッチンのダイニング「Seeds」にて、富山湾の朝獲れ地魚のお刺身や揚げたて天ぷら、握り寿司、富山ブラックラーメンなど約80種類の料理が並ぶ豪華バイキング。ファミリーや三世代旅行からカップルまで圧倒的な人気を誇るエンターテインメント宿です。</p>
          <div className="hotel-special-wrapper">
            <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded-r-xl mb-6 text-sm text-amber-950">
              <strong className="block mb-1 font-bold">宿のこだわり・特徴:</strong>
              おかげさまで連続受賞！「楽天トラベル 日本の宿アワード2025 TOP47」♪
            </div>
          </div>
          <div className="user-review-wrapper">
            <blockquote className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-xl mb-6 text-xs md:text-sm text-gray-700 italic">
              <strong>宿泊者の声:</strong> “朝夕食のクオリティが他にはない高さ全体的に満足ですが、特に朝夕食のクオリティは他ではなかなか無いくらい高く感じました。クチコミの詳細はこちらから　https://review.travel.r…　2026-09-05 08:49:09投稿 つづきはこちら”
            </blockquote>
          </div>
          <div className="pt-2">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D9591%26f_flg%3DPLAN"
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
            宇奈月温泉　延楽
          </h2>
          <p className="text-xs md:text-sm text-amber-100">富山県黒部市・全客室が黒部峡谷に面した特等席！樹齢数百年の古代檜大露天風呂＆料理人の技が光る最高峰料理旅館（延楽）</p>
        </div>
        <div className="p-6 md:p-8">
          <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600 bg-gray-50 p-4 rounded-xl">
            <div><strong>所在地:</strong> 富山県黒部市宇奈月温泉347-1</div>
            <div><strong>アクセス:</strong> 富山地方鉄道「宇奈月温泉駅」より徒歩3分 / 北陸自動車道 黒部ICより約２０分</div>
            <div><strong>楽天評価:</strong> <span className="text-amber-600 font-bold text-base">★ 4.59</span> (541件)</div>
            <div><strong>参考価格:</strong> 1名あたり約31,900円〜</div>
          </div>
          <p className="text-base text-gray-800 leading-relaxed mb-6">黒部峡谷の絶景を真正面に望む、宇奈月温泉随一のハイグレード料理旅館。全客室が峡谷に面して設計されており、対岸の木々の移ろいやエメラルドの川面を絵画のように楽しめます。大浴場には、樹齢数百年の銘木を使った「古代檜露天風呂」や、宮大工の技が息づく露天風呂「華の湯」があり、大自然の静寂の中で極上の安らぎを提供。宿最大の誇りは、富山湾のキトキト海の幸を贅を尽くして仕上げる本格会席料理。活け紅ズワイガニや富山湾の白えび、寒ブリ、氷見牛など、料理長が毎朝買い付ける厳選食材を使った料理は、全国の食通を唸らせる最高水準の美味を誇ります。</p>
          <div className="hotel-special-wrapper">
            <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded-r-xl mb-6 text-sm text-amber-950">
              <strong className="block mb-1 font-bold">宿のこだわり・特徴:</strong>
              季節のお料理と樹齢四百年の総檜露天風呂。露天風呂付き客室でゆったり自分時間。
            </div>
          </div>
          <div className="user-review-wrapper">
            <blockquote className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-xl mb-6 text-xs md:text-sm text-gray-700 italic">
              <strong>宿泊者の声:</strong> “富山の食材を使った料理は絶品で大満足北海道から黒部ダムとおわら観光が目的で来た従兄夫婦、金沢に住む実母と一緒に5人で宿泊。富山の食材を使った料理はどれも美味しく、特にのどぐろ、白エビが絶品で従…　2026-09-03 12:32:30投稿 つづきはこちら”
            </blockquote>
          </div>
          <div className="pt-2">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D10719%26f_flg%3DPLAN"
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
            href="/furusato-tax-tateyama-kurobe-alpen-route-resort-stay"
            className="block p-3 rounded-lg bg-white border border-gray-200 hover:border-amber-400 hover:shadow-xs transition-all text-sm text-amber-900 font-medium"
          >
            ▸ 【立山黒部アルペンルート 雲上の星空＆高原リゾート×ふるさと納税】弥陀ヶ原・立山高原・森の風
          </Link>
          <Link
            href="/furusato-tax-kinugawa-onsen-valley-view-luxury-stay"
            className="block p-3 rounded-lg bg-white border border-gray-200 hover:border-amber-400 hover:shadow-xs transition-all text-sm text-amber-900 font-medium"
          >
            ▸ 【鬼怒川温泉 渓谷美＆名門旅館×ふるさと納税】あさや・金谷ホテル・ホテル三日月
          </Link>
          <Link
            href="/furusato-tax-scenic-open-air-trolley-train-resort-stay"
            className="block p-3 rounded-lg bg-white border border-gray-200 hover:border-amber-400 hover:shadow-xs transition-all text-sm text-amber-900 font-medium"
          >
            ▸ 【絶景トロッコ列車＆秘境温泉宿×ふるさと納税】大自然パノラマ
          </Link>
          <Link
            href="/furusato-tax-hida-takayama-old-town-luxury-stay"
            className="block p-3 rounded-lg bg-white border border-gray-200 hover:border-amber-400 hover:shadow-xs transition-all text-sm text-amber-900 font-medium"
          >
            ▸ 【飛騨高山 古い町並み＆飛騨牛宿×ふるさと納税】花兆庵・花扇・光風館
          </Link>
        </div>
      </section>
    </article>
  );
}
