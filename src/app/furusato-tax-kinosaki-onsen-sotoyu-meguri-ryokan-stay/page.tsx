import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '浴衣と下駄で七つの外湯を巡る！城崎温泉の柳並木通り＆最高峰但馬牛・カニ名宿×ふるさと納税完全攻略ガイド【2026年最新】招月庭・小宿縁・つちや旅館',
  description: '「駅は玄関、道路は廊下、宿は客室、外湯は大浴場」！浴衣に下駄を鳴らして巡る城崎温泉の七湯。「西村屋ホテル招月庭」「但馬牛極みの宿 小宿 縁」「城崎温泉 つちや旅館」を、兵庫県豊岡市の楽天ふるさと納税トラベルクーポンで実質2,000円負担で予約する完全ガイド。外湯無料パス、五万坪森林庭園、但馬牛ステーキ、カニ料理を満喫。',
  keywords: [
    'ふるさと納税 旅行',
    'ふるさと納税 温泉',
    '城崎温泉 外湯めぐり＆名門宿特集',
    '楽天ふるさと納税 トラベル',
    '城崎温泉　西村屋ホテル招月庭',
    '城崎温泉　但馬牛極みの宿　小宿　縁',
    '城崎温泉　つちや旅館',
    '高級温泉旅館',
    '源泉かけ流し',
    '実質2000円'
  ],
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-kinosaki-onsen-sotoyu-meguri-ryokan-stay/',
  },
  openGraph: {
    title: '浴衣と下駄で七つの外湯を巡る！城崎温泉の柳並木通り＆最高峰但馬牛・カニ名宿×ふるさと納税完全攻略ガイド【2026年最新】招月庭・小宿縁・つちや旅館',
    description: '「駅は玄関、道路は廊下、宿は客室、外湯は大浴場」！浴衣に下駄を鳴らして巡る城崎温泉の七湯。「西村屋ホテル招月庭」「但馬牛極みの宿 小宿 縁」「城崎温泉 つちや旅館」を、兵庫県豊岡市の楽天ふるさと納税トラベルクーポンで実質2,000円負担で予約する完全ガイド。外湯無料パス、五万坪森林庭園、但馬牛ステーキ、カニ料理を満喫。',
    url: 'https://croud-travel.pages.dev/furusato-tax-kinosaki-onsen-sotoyu-meguri-ryokan-stay',
    siteName: '旅行とホテル・ふるさと納税の総合ポータル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function FurusatoKinosakiSotoyuMeguriStayPage() {
  return (
    <article className="max-w-5xl mx-auto px-4 py-8 text-gray-800 leading-relaxed font-sans">
      {/* パンくずリスト */}
      <nav className="text-sm text-gray-500 mb-6 flex flex-wrap items-center gap-1.5" aria-label="Breadcrumb">
        <Link href="/" className="hover:underline hover:text-amber-700">ホーム</Link>
        <span>&gt;</span>
        <Link href="/travel-savings-guide" className="hover:underline hover:text-amber-700">ふるさと納税トラベル完全攻略ガイド</Link>
        <span>&gt;</span>
        <span className="text-gray-800 font-semibold">城崎温泉 外湯めぐり＆名門宿特集</span>
      </nav>

      {/* ヘッダー */}
      <header className="mb-10 pb-6 border-b border-gray-200">
        <div className="inline-block bg-gradient-to-r from-amber-600 to-amber-800 text-white text-xs md:text-sm font-bold px-3 py-1 rounded-full mb-3 shadow-sm">
          全国屈指の温泉街情緒！城崎温泉 外湯めぐり特集
        </div>
        <h1 className="text-2xl md:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight mb-4">
          浴衣と下駄で七つの外湯を巡る！城崎温泉の柳並木通り＆最高峰但馬牛・カニ名宿×ふるさと納税完全攻略ガイド【2026年最新】招月庭・小宿縁・つちや旅館
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
          カランコロンと響く下駄の音、大溪川の柳並木と石橋。七つの外湯が旅人を迎える城崎温泉の風流な休日へ
        </h2>
        <p className="text-base md:text-lg text-gray-800 leading-relaxed mb-6">
          大溪川（おおたにがわ）沿いに揺れる緑の柳並木、太鼓橋の情緒、そして浴衣姿の旅人たちが行き交う温泉街——。開湯千三百年を誇る兵庫県の「城崎温泉（きのさき）」は、「街全体が一つの大きな温泉旅館」という独特の文化を受け継ぐ日本随一の風情ある名湯です。城崎の醍醐味は、宿泊者に配られる無料パス「ゆめぱ」を使って巡る「七つの外湯めぐり（一の湯、御所の湯、まんだら湯、さとの湯、柳湯、地蔵湯、鴻の湯）」。それぞれ趣やご利益が異なる名湯を巡り、湯上がりに川沿いのカフェで地ビールやジェラートを味わう時間は、日本旅行の原点とも言える幸せに満ちています。さらに食の魅力も全国トップクラス。冬の松葉ガニはもちろん、年間を通じて最高峰の黒毛和牛のルーツ「但馬牛（たじまぎゅう）」の炭火ステーキやしゃぶしゃぶが旅人を虜にします。本特集では、老舗西村屋の伝統を受け継ぎ五万坪の森林庭園と極上スパ・大浴場を誇るリゾート「西村屋ホテル招月庭」、城崎駅徒歩3分・但馬牛専門レストランを併設したスタイリッシュな大人の隠れ宿「但馬牛極みの宿 小宿 縁」、そして一の湯徒歩1分・柳並木通りに面した創業百余年の木造名門「城崎温泉 つちや旅館」の3宿を厳選。兵庫県豊岡市への楽天ふるさと納税トラベルクーポン（寄付額の最大30％割引・有効期限3年）を活用して、実質自己負担2,000円で城崎温泉の極上旅を予約しましょう。
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
          <li><a href="#three-points" className="text-amber-800 hover:underline font-medium">城崎温泉 外湯めぐり＆名門宿特集が選ばれる3つの理由</a></li>
          <li><a href="#hotel-1" className="text-amber-800 hover:underline font-medium">【第1選】城崎温泉　西村屋ホテル招月庭</a></li>
          <li><a href="#hotel-2" className="text-amber-800 hover:underline font-medium">【第2選】城崎温泉　但馬牛極みの宿　小宿　縁</a></li>
          <li><a href="#hotel-3" className="text-amber-800 hover:underline font-medium">【第3選】城崎温泉　つちや旅館</a></li>
          <li><a href="#furusato-step" className="text-amber-800 hover:underline font-medium">実質自己負担2,000円で予約する簡単4ステップ手順</a></li>
          <li><a href="#faq" className="text-amber-800 hover:underline font-medium">よくある質問（Q&A）</a></li>
        </ol>
      </section>

      {/* 3つの魅力セクション */}
      <section id="three-points" className="mb-14">
        <h2 className="text-xl md:text-3xl font-extrabold text-gray-900 mb-6 pb-2 border-b-2 border-amber-600 flex items-center gap-2">
          <span>🌟</span> 城崎温泉 外湯めぐり＆名門宿特集が選ばれる3つの理由
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <span className="text-3xl font-black text-amber-600 block mb-2">01</span>
            <h3 className="font-bold text-gray-900 text-lg mb-3 leading-snug">宿泊者全員に「外湯めぐりパス」付き！七つの外湯が入り放題の極上湯浴み</h3>
            <p className="text-sm text-gray-600 leading-relaxed">一の湯の洞窟風呂、御所の湯の滝を望む庭園露天風呂など、七湯すべてを何度でも無料で満喫。浴衣と下駄をレンタルして街巡りを楽しめます。</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <span className="text-3xl font-black text-amber-600 block mb-2">02</span>
            <h3 className="font-bold text-gray-900 text-lg mb-3 leading-snug">黒毛和牛の頂点「但馬牛」と本場日本海の海の幸！感動のグルメ会席</h3>
            <p className="text-sm text-gray-600 leading-relaxed">神戸牛や松阪牛の素牛である最高品質の但馬牛ステーキや、津居山港直送の新鮮な魚介、冬の松葉ガニなど、贅を尽くした料理を堪能できます。</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <span className="text-3xl font-black text-amber-600 block mb-2">03</span>
            <h3 className="font-bold text-gray-900 text-lg mb-3 leading-snug">豊岡市ふるさと納税で最大30％OFF！3年間有効クーポンで記念日やカニ旅に利用</h3>
            <p className="text-sm text-gray-600 leading-relaxed">人気旅館が集まる城崎温泉もふるさと納税クーポンで実質自己負担2,000円。寄付から3年間有効なので、旅行時期を柔軟に選んで予約できます。</p>
          </div>
        </div>
      </section>

      {/* 宿紹介 1 */}
      <section id="hotel-1" className="mb-16 bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
        <div className="bg-gradient-to-r from-amber-700 to-amber-900 text-white p-4 md:p-6">
          <span className="bg-amber-500 text-white text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider mb-2 inline-block">厳選名宿 第1選</span>
          <h2 className="text-xl md:text-3xl font-bold leading-tight mb-2">
            城崎温泉　西村屋ホテル招月庭
          </h2>
          <p className="text-xs md:text-sm text-amber-100">兵庫県豊岡市・創業百六十年「西村屋」の別館リゾート！五万坪の大森林庭園と趣あふれる大浴場＆プライベートスパ</p>
        </div>
        <div className="p-6 md:p-8">
          <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600 bg-gray-50 p-4 rounded-xl">
            <div><strong>所在地:</strong> 兵庫県豊岡市城崎町湯島1016-2</div>
            <div><strong>アクセス:</strong> 【電車】JR城崎温泉駅から旅館組合無料乗合バスで5～15分【車】北近畿豊岡自動車道・豊岡出石ICから約18分</div>
            <div><strong>楽天評価:</strong> <span className="text-amber-600 font-bold text-base">★ 4.71</span> (1175件)</div>
            <div><strong>参考価格:</strong> 1名あたり約35,200円〜</div>
          </div>
          <p className="text-base text-gray-800 leading-relaxed mb-6">城崎温泉の歴史を見守ってきた西村屋が、広大な自然の中に開いた新しいスタイルのラグジュアリーホテル。五万坪もの大森林庭園を借景にしたロビーやラウンジ、露天風呂「月詠の湯」は圧巻の開放感。館内には岩盤浴を備えた3つの貸切プライベートスパ「森のチャイナ」「樹のジャパニーズ」があり、極上のリラクゼーションが体験できます。もちろん七つの外湯めぐりパスも完備。夕食は但馬の豊かな風土が育んだ但馬牛のフィレステーキや、冬の厳選松葉ガニをメインにした華やかな本格会席を心ゆくまで満喫できます。</p>
          <div className="hotel-special-wrapper">
            <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded-r-xl mb-6 text-sm text-amber-950">
              <strong className="block mb-1 font-bold">宿のこだわり・特徴:</strong>
              かに・但馬牛など四季折々の味覚と充実したお風呂。五万坪の森林に囲まれ寛ぎのひとときを。無料駐車場有
            </div>
          </div>
          <div className="user-review-wrapper">
            <blockquote className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-xl mb-6 text-xs md:text-sm text-gray-700 italic">
              <strong>宿泊者の声:</strong> “食事の美味しさとスタッフの温かい対応に感動食事の美味しさに何より驚きました。さすが西村屋だなと思いました。夕食はもちろんのこと、朝食ビュッフェで何気なく並んでいるおばんざいも美味しくて、子供が大き…　2026-08-23 16:38:25投稿 つづきはこちら”
            </blockquote>
          </div>
          <div className="pt-2">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D14007%26f_flg%3DPLAN"
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
            城崎温泉　但馬牛極みの宿　小宿　縁
          </h2>
          <p className="text-xs md:text-sm text-amber-100">兵庫県豊岡市・JR城崎温泉駅徒歩3分！但馬牛専門レストラン「三國」直営・大人のためのスタイリッシュ隠れ宿</p>
        </div>
        <div className="p-6 md:p-8">
          <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600 bg-gray-50 p-4 rounded-xl">
            <div><strong>所在地:</strong> 兵庫県豊岡市城崎町湯島219</div>
            <div><strong>アクセス:</strong> JR城崎温泉駅より徒歩で３分 。北近畿豊岡道但馬空港ICより国道３１２号線、県道３号線経由で城崎温泉まで約３０分。</div>
            <div><strong>楽天評価:</strong> <span className="text-amber-600 font-bold text-base">★ 4.65</span> (281件)</div>
            <div><strong>参考価格:</strong> 1名あたり約12,650円〜</div>
          </div>
          <p className="text-base text-gray-800 leading-relaxed mb-6">城崎温泉駅から徒歩3分、柳並木へと続く駅前通りに佇む全6室の隠れ家旅館。但馬牛専門の名店「牛匠 三國」を併設しており、熟成された最高ランク但馬牛の炭火焼きステーキやコース料理を存分に味わえるのが最大の魅力。客室は木と珪藻土の自然素材を使ったモダンな落ち着きあるデザインで、大人のカップルや一人旅に最適。宿泊者には外湯めぐりパスが無料で提供されるほか、併設のカフェ＆バーで地ビールやオリジナルスイーツを楽しめ、洗練された城崎ステイを提供しています。</p>
          <div className="hotel-special-wrapper">
            <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded-r-xl mb-6 text-sm text-amber-950">
              <strong className="block mb-1 font-bold">宿のこだわり・特徴:</strong>
              日本で唯一の但馬玄一頭買い肉専門の宿。貸切風呂はじめ湯上りラウンジはビールやワインが楽しめる大人の宿
            </div>
          </div>
          <div className="user-review-wrapper">
            <blockquote className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-xl mb-6 text-xs md:text-sm text-gray-700 italic">
              <strong>宿泊者の声:</strong> “但馬牛のコース料理と親切な接客に大満足但馬牛の料理が、コースで出来たてで美味しく食べれて、とても良かったです。従業員の方々も、とても親切で良かったです。クチコミの詳細はこちらから　http…　2026-08-29 03:16:22投稿 つづきはこちら”
            </blockquote>
          </div>
          <div className="pt-2">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D144559%26f_flg%3DPLAN"
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
            城崎温泉　つちや旅館
          </h2>
          <p className="text-xs md:text-sm text-amber-100">兵庫県豊岡市・外湯「一の湯」へ徒歩1分！大溪川の柳並木通りに面した創業百余年の温かな木造老舗旅館</p>
        </div>
        <div className="p-6 md:p-8">
          <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600 bg-gray-50 p-4 rounded-xl">
            <div><strong>所在地:</strong> 兵庫県豊岡市城崎町湯島573</div>
            <div><strong>アクセス:</strong> 【電車】JR城崎温泉駅から旅館組合無料乗合バスで5～10分【車】北近畿豊岡自動車道・豊岡出石ICから約20分　無料Pあり</div>
            <div><strong>楽天評価:</strong> <span className="text-amber-600 font-bold text-base">★ 4.72</span> (246件)</div>
            <div><strong>参考価格:</strong> 1名あたり約11,000円〜</div>
          </div>
          <p className="text-base text-gray-800 leading-relaxed mb-6">城崎温泉を象徴する名湯「一の湯」のすぐそば、柳並木と石橋が続くメインストリート沿いに建つ創業百余年の木造旅館。玄関を一歩出ればすぐに城崎の風情ある温泉街が広がり、下駄を鳴らして外湯めぐりに出かけるのに最高の立地です。宿の内湯も風情ある岩風呂で24時間入浴可能。客室からは柳並木の美しい景観を眺められ、夕食には但馬牛のしゃぶしゃぶや津居山港で獲れた新鮮なお造り、冬には贅沢なカニすき鍋が部屋食で振る舞われ、家族的な温かな接客に心癒される名宿です。</p>
          <div className="hotel-special-wrapper">
            <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded-r-xl mb-6 text-sm text-amber-950">
              <strong className="block mb-1 font-bold">宿のこだわり・特徴:</strong>
              2025温泉宿総選挙全国第3位　 但馬牛をはじめ、旬を極める料理旅館
            </div>
          </div>
          <div className="user-review-wrapper">
            <blockquote className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-xl mb-6 text-xs md:text-sm text-gray-700 italic">
              <strong>宿泊者の声:</strong> “記念日のサプライズ対応と料理に大満足今回は記念日旅行で利用させていただきました。サプライズも考えていたので、宿泊前から旅館の方と連絡を取らせていただいていましたがその際からとても親切で当日がとても…　2026-08-01 20:10:51投稿 つづきはこちら”
            </blockquote>
          </div>
          <div className="pt-2">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D8766%26f_flg%3DPLAN"
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
              <span>由布院や登別、道後、城崎のハイシーズンでも利用できますか？</span>
              <span className="text-amber-600 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="mt-3 text-xs md:text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
              はい、対象ホテルの空室があれば、年末年始やゴールデンウィーク、紅葉や雪見温泉のハイシーズンでも除外日なくクーポンをご利用いただけます。
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
            href="/furusato-tax-crab-all-you-can-eat-winter-buffet-stay"
            className="block p-3 rounded-lg bg-white border border-gray-200 hover:border-amber-400 hover:shadow-xs transition-all text-sm text-amber-900 font-medium"
          >
            ▸ 【冬の蟹食べ放題＆本場松葉ガニ名宿×ふるさと納税】夕日ヶ浦・城崎温泉
          </Link>
          <Link
            href="/furusato-tax-dogo-onsen-honkan-walk-luxury-stay"
            className="block p-3 rounded-lg bg-white border border-gray-200 hover:border-amber-400 hover:shadow-xs transition-all text-sm text-amber-900 font-medium"
          >
            ▸ 【道後温泉 本館散策＆老舗旅館×ふるさと納税】ふなや・道後御湯
          </Link>
          <Link
            href="/furusato-tax-yufuin-onsen-kinrinko-luxury-stay"
            className="block p-3 rounded-lg bg-white border border-gray-200 hover:border-amber-400 hover:shadow-xs transition-all text-sm text-amber-900 font-medium"
          >
            ▸ 【由布院温泉＆金鱗湖名門宿×ふるさと納税】花由・秀峰館・梅園
          </Link>
          <Link
            href="/furusato-tax-kusatsu-onsen-yubatake-walk-luxury-stay"
            className="block p-3 rounded-lg bg-white border border-gray-200 hover:border-amber-400 hover:shadow-xs transition-all text-sm text-amber-900 font-medium"
          >
            ▸ 【草津温泉 湯畑散策＆名湯名門宿×ふるさと納税】櫻井・一井・奈良屋
          </Link>
        </div>
      </section>
    </article>
  );
}
