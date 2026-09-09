import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '都心から85分の極上名湯！箱根湯本温泉の絶景大露天風呂＆客室露天名門宿×ふるさと納税完全攻略ガイド【2026年最新】天成園・おかだ・南風荘',
  description: '小田急ロマンスカー直通！豊かな湯量と箱根十七湯の歴史を誇る箱根湯本温泉。「箱根湯本温泉 天成園」「箱根湯本温泉 ホテル おかだ」「箱根湯本温泉 ホテル南風荘」を、神奈川県箱根町の楽天ふるさと納税トラベルクーポンで実質2,000円負担で楽しむ完全ガイド。全長17mの天空大露天風呂、13種の湯巡り、客室露天風呂付き客室で癒やしの温泉旅を。',
  keywords: [
    'ふるさと納税 旅行',
    'ふるさと納税 ホテル',
    '箱根湯本名湯露天風呂宿特集',
    '楽天ふるさと納税 トラベル',
    '箱根湯本温泉　天成園',
    '箱根湯本温泉　ホテル　おかだ',
    '箱根湯本温泉　ホテル南風荘',
    '高級温泉旅館',
    'オフィシャルホテル',
    '実質2000円'
  ],
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-hakone-onsen-open-air-bath-stay/',
  },
  openGraph: {
    title: '都心から85分の極上名湯！箱根湯本温泉の絶景大露天風呂＆客室露天名門宿×ふるさと納税完全攻略ガイド【2026年最新】天成園・おかだ・南風荘',
    description: '小田急ロマンスカー直通！豊かな湯量と箱根十七湯の歴史を誇る箱根湯本温泉。「箱根湯本温泉 天成園」「箱根湯本温泉 ホテル おかだ」「箱根湯本温泉 ホテル南風荘」を、神奈川県箱根町の楽天ふるさと納税トラベルクーポンで実質2,000円負担で楽しむ完全ガイド。全長17mの天空大露天風呂、13種の湯巡り、客室露天風呂付き客室で癒やしの温泉旅を。',
    url: 'https://croud-travel.pages.dev/furusato-tax-hakone-onsen-open-air-bath-stay',
    siteName: '旅行とホテル・ふるさと納税の総合ポータル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function FurusatoHakoneOnsenOpenAirBathStayPage() {
  return (
    <article className="max-w-5xl mx-auto px-4 py-8 text-gray-800 leading-relaxed font-sans">
      {/* パンくずリスト */}
      <nav className="text-sm text-gray-500 mb-6 flex flex-wrap items-center gap-1.5" aria-label="Breadcrumb">
        <Link href="/" className="hover:underline hover:text-amber-700">ホーム</Link>
        <span>&gt;</span>
        <Link href="/travel-savings-guide" className="hover:underline hover:text-amber-700">ふるさと納税トラベル完全攻略ガイド</Link>
        <span>&gt;</span>
        <span className="text-gray-800 font-semibold">箱根湯本名湯露天風呂宿特集</span>
      </nav>

      {/* ヘッダー */}
      <header className="mb-10 pb-6 border-b border-gray-200">
        <div className="inline-block bg-gradient-to-r from-amber-600 to-amber-800 text-white text-xs md:text-sm font-bold px-3 py-1 rounded-full mb-3 shadow-sm">
          全国屈指の超人気温泉地！箱根湯本温泉特集
        </div>
        <h1 className="text-2xl md:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight mb-4">
          都心から85分の極上名湯！箱根湯本温泉の絶景大露天風呂＆客室露天名門宿×ふるさと納税完全攻略ガイド【2026年最新】天成園・おかだ・南風荘
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
          ロマンスカーを降りればそこは名湯の郷。豊かな自家源泉と渓流のせせらぎに包まれる箱根湯本の贅沢な休日へ
        </h2>
        <p className="text-base md:text-lg text-gray-800 leading-relaxed mb-6">
          新宿からロマンスカーでわずか85分。奈良時代の開湯以来、東海道随一の温泉地として親しまれてきた「箱根湯本温泉」。箱根の玄関口として駅前には賑やかなお土産物街が広がり、一歩奥へ入れば早川や須雲川の清流、四季折々の豊かな緑に囲まれた静閑な名旅館が立ち並びます。弱アルカリ性単純温泉を中心とする柔らかな泉質は肌に優しく、旅の疲れをじんわりと解きほぐしてくれる極上の湯浴み体験を約束してくれます。本特集では、屋上に全長17mの天空大露天風呂を誇り、庭園には名勝「飛烟の滝」やパワースポット玉簾神社を抱く「箱根湯本温泉 天成園」、須雲川の渓流沿いに建ち、5本の自家源泉から湧く豊富な湯で13種類もの湯巡りが楽しめる大型名旅館「箱根湯本温泉 ホテル おかだ」、そして奥湯本の自然に包まれ、露天風呂付き客室と上質な会席料理で絶大なリピート率を誇る「箱根湯本温泉 ホテル南風荘」の3大名宿を厳選。神奈川県箱根町への楽天ふるさと納税トラベルクーポン（寄付額の最大30％割引・有効期限3年）を活用して、実質自己負担2,000円で最高峰の箱根温泉旅を満喫しましょう。
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
          <li><a href="#three-points" className="text-amber-800 hover:underline font-medium">箱根湯本名湯露天風呂宿特集が選ばれる3つの理由</a></li>
          <li><a href="#hotel-1" className="text-amber-800 hover:underline font-medium">【第1選】箱根湯本温泉　天成園</a></li>
          <li><a href="#hotel-2" className="text-amber-800 hover:underline font-medium">【第2選】箱根湯本温泉　ホテル　おかだ</a></li>
          <li><a href="#hotel-3" className="text-amber-800 hover:underline font-medium">【第3選】箱根湯本温泉　ホテル南風荘</a></li>
          <li><a href="#furusato-step" className="text-amber-800 hover:underline font-medium">実質自己負担2,000円で予約する簡単4ステップ手順</a></li>
          <li><a href="#faq" className="text-amber-800 hover:underline font-medium">よくある質問（Q&A）</a></li>
        </ol>
      </section>

      {/* 3つの魅力セクション */}
      <section id="three-points" className="mb-14">
        <h2 className="text-xl md:text-3xl font-extrabold text-gray-900 mb-6 pb-2 border-b-2 border-amber-600 flex items-center gap-2">
          <span>🌟</span> 箱根湯本名湯露天風呂宿特集が選ばれる3つの理由
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <span className="text-3xl font-black text-amber-600 block mb-2">01</span>
            <h3 className="font-bold text-gray-900 text-lg mb-3 leading-snug">都心から85分の圧倒的アクセス！ロマンスカーで気軽に行ける日本一の温泉郷</h3>
            <p className="text-sm text-gray-600 leading-relaxed">思い立ったらすぐ行ける抜群の立地。駅周辺の食べ歩きや芦ノ湖・強羅への観光アクセスも抜群で、移動疲れのない快適な休日旅行が叶います。</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <span className="text-3xl font-black text-amber-600 block mb-2">02</span>
            <h3 className="font-bold text-gray-900 text-lg mb-3 leading-snug">豊富な湯量を誇る自家源泉！天空露天風呂・渓流露天・客室専用風呂を満喫</h3>
            <p className="text-sm text-gray-600 leading-relaxed">空を仰ぐパノラマ露天風呂や川のせせらぎが間近に迫る風情ある湯船。アルカリ性のまろやかな美肌の湯に何度も浸かり、至福の癒やしを味わえます。</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <span className="text-3xl font-black text-amber-600 block mb-2">03</span>
            <h3 className="font-bold text-gray-900 text-lg mb-3 leading-snug">箱根町ふるさと納税で最大30％OFF！3年間有効クーポンで四季の旅行に使える</h3>
            <p className="text-sm text-gray-600 leading-relaxed">新緑、夏の避暑、紅葉、冬の雪景色など、箱根の四季折々の魅力に合わせて予約可能。直前予約の「あとからクーポン適用」にも対応しています。</p>
          </div>
        </div>
      </section>

      {/* 宿紹介 1 */}
      <section id="hotel-1" className="mb-16 bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
        <div className="bg-gradient-to-r from-amber-700 to-amber-900 text-white p-4 md:p-6">
          <span className="bg-amber-500 text-white text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider mb-2 inline-block">厳選名宿 第1選</span>
          <h2 className="text-xl md:text-3xl font-bold leading-tight mb-2">
            箱根湯本温泉　天成園
          </h2>
          <p className="text-xs md:text-sm text-amber-100">神奈川県箱根町・屋上に広がる全長17mの天空大露天風呂！敷地内に名勝「飛烟の滝」と玉簾神社を抱く大人気宿</p>
        </div>
        <div className="p-6 md:p-8">
          <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600 bg-gray-50 p-4 rounded-xl">
            <div><strong>所在地:</strong> 神奈川県足柄下郡箱根町湯本682</div>
            <div><strong>アクセス:</strong> 箱根湯本駅から徒歩で15分。または旅館協同組合の送迎バス（有料200円）Aコース『滝通り行き』にて5分。</div>
            <div><strong>楽天評価:</strong> <span className="text-amber-600 font-bold text-base">★ 4.19</span> (4344件)</div>
            <div><strong>参考価格:</strong> 1名あたり約10,769円〜</div>
          </div>
          <p className="text-base text-gray-800 leading-relaxed mb-6">箱根湯本のシンボル的存在として口コミ4,300件超を集める人気温泉ホテル。最上階の屋上には遮るもののない大空と箱根の山並みを見渡す全長17mの「天空大露天風呂」があり、夜には満天の星と月を眺めながらの湯浴みが楽しめます。敷地内庭園には与謝野晶子も愛でた名勝「飛烟の滝」「玉簾の滝」や縁結びの玉簾神社があり、散策も魅力的。夕食は目の前で握る寿司や揚げたて天ぷら、鉄板焼きステーキが並ぶライブキッチンバイキングで、子どもから大人まで大満足の滞在を提供しています。</p>
          <div className="hotel-special-wrapper">
            <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded-r-xl mb-6 text-sm text-amber-950">
              <strong className="block mb-1 font-bold">宿のこだわり・特徴:</strong>
              瀧の流れる庭園と、大自然に抱かれた天空大露天風呂が魅力な箱根湯本温泉の人気宿。
            </div>
          </div>
          <div className="user-review-wrapper">
            <blockquote className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-xl mb-6 text-xs md:text-sm text-gray-700 italic">
              <strong>宿泊者の声:</strong> “食事も温泉も大満足、庭の散策も楽しめた小学生と高齢者と宿泊しました。2回目です。食事、温泉、サービス全て満足です。お庭の散策も楽しめます。クチコミの詳細はこちらから　https…　2026-09-06 02:04:11投稿 つづきはこちら”
            </blockquote>
          </div>
          <div className="pt-2">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D84721%26f_flg%3DPLAN"
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
            箱根湯本温泉　ホテル　おかだ
          </h2>
          <p className="text-xs md:text-sm text-amber-100">神奈川県箱根町・5本の自家源泉から毎分270リットルの天然温泉！須雲川の渓流を望む13種類の温泉巡り名旅館</p>
        </div>
        <div className="p-6 md:p-8">
          <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600 bg-gray-50 p-4 rounded-xl">
            <div><strong>所在地:</strong> 神奈川県足柄下郡箱根町湯本茶屋191</div>
            <div><strong>アクセス:</strong> 箱根湯本駅～徒歩２０分（温泉郷共同バス有料（詳細は公式ＨＰをご参照下さい）／小田原厚木道路・箱根口～国道１号線経由１５分</div>
            <div><strong>楽天評価:</strong> <span className="text-amber-600 font-bold text-base">★ 4.4</span> (1755件)</div>
            <div><strong>参考価格:</strong> 1名あたり約11,400円〜</div>
          </div>
          <p className="text-base text-gray-800 leading-relaxed mb-6">箱根湯本の奥座敷、須雲川のせせらぎを眼下に望む豊かな緑に包まれた老舗大型温泉旅館。敷地内に5本の自家源泉を所有し、毎分270リットル湧出する豊富な湯量を活かして、渓流沿いの露天風呂や打たせ湯、ジェットバスなど13種類もの多彩な温泉巡りを満喫できます。客室は落ち着いた和室から展望風呂付き客室までバリエーション豊か。夕食には相模湾の新鮮な海の幸や足柄牛など地元の旬の味覚をふんだんに取り入れた季節の会席料理を個室やお部屋でゆったりと味わえます。</p>
          <div className="hotel-special-wrapper">
            <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded-r-xl mb-6 text-sm text-amber-950">
              <strong className="block mb-1 font-bold">宿のこだわり・特徴:</strong>
              ５本の源泉持ち、豊富な湯量、良質の温泉が楽しめる宿。展望大浴場、足湯、湯の里（特別優待）と種類も豊富
            </div>
          </div>
          <div className="user-review-wrapper">
            <blockquote className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-xl mb-6 text-xs md:text-sm text-gray-700 italic">
              <strong>宿泊者の声:</strong> “お寿司は絶品、ステーキは焼きたてが理想お寿司は美味しいですねステーキが作り置きではなく焼きたてが良いなクチコミの詳細はこちらから　https://review.travel.rakuten…　2026-09-03 18:21:48投稿 つづきはこちら”
            </blockquote>
          </div>
          <div className="pt-2">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D19684%26f_flg%3DPLAN"
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
            箱根湯本温泉　ホテル南風荘
          </h2>
          <p className="text-xs md:text-sm text-amber-100">神奈川県箱根町・奥湯本の静寂に佇む癒しの宿！客室露天風呂付き客室と丁寧な会席料理でリピーター続出</p>
        </div>
        <div className="p-6 md:p-8">
          <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600 bg-gray-50 p-4 rounded-xl">
            <div><strong>所在地:</strong> 神奈川県足柄下郡箱根町湯本茶屋179番地</div>
            <div><strong>アクセス:</strong> 箱根湯本駅より有料旅館共同バス７分片道大人２００円小学生１００円</div>
            <div><strong>楽天評価:</strong> <span className="text-amber-600 font-bold text-base">★ 4.44</span> (1782件)</div>
            <div><strong>参考価格:</strong> 1名あたり約9,900円〜</div>
          </div>
          <p className="text-base text-gray-800 leading-relaxed mb-6">箱根湯本駅から車で約7分、須雲川沿いの閑静な奥湯本エリアに佇むおもてなしの名宿。自然と一体になれるウッドテラス付き客室露天風呂や広々とした大浴場「一の湯」「二の湯」では、木々のざわめきと川音を聞きながら良質なアルカリ性単純温泉に浸かれます。露天風呂付き客室が充実しており、カップルの記念日や小さな子ども連れ旅行でもプライベート感満点。夕食は旬の山海の幸を美しく盛り込んだ本格和食会席膳がお部屋または個室で提供され、温かな接客に心癒される極上のひとときを過ごせます。</p>
          <div className="hotel-special-wrapper">
            <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded-r-xl mb-6 text-sm text-amber-950">
              <strong className="block mb-1 font-bold">宿のこだわり・特徴:</strong>
              花崗や青石をふんだんに用いた大浴場や露天風呂で箱根の自然を満喫　旬の味覚を揃えたお料理をご堪能下さい
            </div>
          </div>
          <div className="user-review-wrapper">
            <blockquote className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-xl mb-6 text-xs md:text-sm text-gray-700 italic">
              <strong>宿泊者の声:</strong> “露天風呂付き客室とサービスに大満足大大大満足の旅行でした。クーポン利用で安くなりとても助かりました。私たちは露天風呂付き客室が絶対条件。今回2回目なので部屋タイプはお任せにし、前回とは…　2026-09-05 20:19:04投稿 つづきはこちら”
            </blockquote>
          </div>
          <div className="pt-2">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D30888%26f_flg%3DPLAN"
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
            href="/furusato-tax-station-walk-car-free-onsen-stay"
            className="block p-3 rounded-lg bg-white border border-gray-200 hover:border-amber-400 hover:shadow-xs transition-all text-sm text-amber-900 font-medium"
          >
            ▸ 【駅徒歩圏内・車なし電車で行ける温泉宿×ふるさと納税】アクセス抜群の名宿
          </Link>
          <Link
            href="/furusato-tax-river-stream-canyon-view-onsen-stay"
            className="block p-3 rounded-lg bg-white border border-gray-200 hover:border-amber-400 hover:shadow-xs transition-all text-sm text-amber-900 font-medium"
          >
            ▸ 【清流・渓谷美を望む絶景露天風呂×ふるさと納税】水音と自然に包まれる旅
          </Link>
          <Link
            href="/furusato-tax-hoshino-resorts-risonare-family-stay"
            className="block p-3 rounded-lg bg-white border border-gray-200 hover:border-amber-400 hover:shadow-xs transition-all text-sm text-amber-900 font-medium"
          >
            ▸ 【星野リゾート リゾナーレ×ふるさと納税】八ヶ岳・熱海・那須
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
