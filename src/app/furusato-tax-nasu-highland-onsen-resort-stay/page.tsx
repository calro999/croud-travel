import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'ロイヤルリゾート那須の自然と名湯！那須温泉の美肌露天風呂＆極上とちぎ和牛・豪華高原バイキング×ふるさと納税完全攻略ガイド【2026年最新】エピナール那須・山楽・グランドメルキュール',
  description: '御用邸が置かれる日本屈指のロイヤルリゾート・栃木県那須高原！雄大な茶臼岳と豊かな森。「ホテルエピナール那須」「那須温泉 山楽」「グランドメルキュール那須高原リゾート＆スパ」を、栃木県那須町の楽天ふるさと納税トラベルクーポンで実質2,000円負担で予約する完全ガイド。大型温泉大浴場、大正創業の昭和天皇ゆかり名門、とちぎ和牛を満喫。',
  keywords: [
    'ふるさと納税 旅行',
    'ふるさと納税 温泉',
    '那須高原 温泉リゾート＆名門宿特集',
    '楽天ふるさと納税 トラベル',
    '那須温泉　ホテルエピナール那須',
    '那須温泉山楽',
    'グランドメルキュール那須高原リゾート＆スパ',
    '高級温泉旅館',
    '絶景露天風呂',
    '実質2000円'
  ],
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-nasu-highland-onsen-resort-stay',
  },
  openGraph: {
    title: 'ロイヤルリゾート那須の自然と名湯！那須温泉の美肌露天風呂＆極上とちぎ和牛・豪華高原バイキング×ふるさと納税完全攻略ガイド【2026年最新】エピナール那須・山楽・グランドメルキュール',
    description: '御用邸が置かれる日本屈指のロイヤルリゾート・栃木県那須高原！雄大な茶臼岳と豊かな森。「ホテルエピナール那須」「那須温泉 山楽」「グランドメルキュール那須高原リゾート＆スパ」を、栃木県那須町の楽天ふるさと納税トラベルクーポンで実質2,000円負担で予約する完全ガイド。大型温泉大浴場、大正創業の昭和天皇ゆかり名門、とちぎ和牛を満喫。',
    url: 'https://croud-travel.pages.dev/furusato-tax-nasu-highland-onsen-resort-stay',
    siteName: '旅行とホテル・ふるさと納税の総合ポータル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function FurusatoNasuHighlandStayPage() {
  return (
    <article className="max-w-5xl mx-auto px-4 py-8 text-gray-800 leading-relaxed font-sans">
      {/* パンくずリスト */}
      <nav className="text-sm text-gray-500 mb-6 flex flex-wrap items-center gap-1.5" aria-label="Breadcrumb">
        <Link href="/" className="hover:underline hover:text-amber-700">ホーム</Link>
        <span>&gt;</span>
        <Link href="/travel-savings-guide" className="hover:underline hover:text-amber-700">ふるさと納税トラベル完全攻略ガイド</Link>
        <span>&gt;</span>
        <span className="text-gray-800 font-semibold">那須高原 温泉リゾート＆名門宿特集</span>
      </nav>

      {/* ヘッダー */}
      <header className="mb-10 pb-6 border-b border-gray-200">
        <div className="inline-block bg-gradient-to-r from-amber-600 to-amber-800 text-white text-xs md:text-sm font-bold px-3 py-1 rounded-full mb-3 shadow-sm">
          御用邸の気品と豊かな大自然！栃木県那須町特集
        </div>
        <h1 className="text-2xl md:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight mb-4">
          ロイヤルリゾート那須の自然と名湯！那須温泉の美肌露天風呂＆極上とちぎ和牛・豪華高原バイキング×ふるさと納税完全攻略ガイド【2026年最新】エピナール那須・山楽・グランドメルキュール
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
          那須連山の雄大な稜線、緑あふれる木漏れ日の森。御用邸のある気品あふれる那須高原で過ごす優雅な休日へ
        </h2>
        <p className="text-base md:text-lg text-gray-800 leading-relaxed mb-6">
          東京から東北新幹線で約70分、雄大な茶臼岳の山麓に広がる日本を代表する高原保養地「栃木県・那須高原（なすこうげん）」。大正時代に那須御用邸が造営されて以来、「ロイヤルリゾート」として皇族方や多くの文化人に愛されてきた気品と静寂に包まれたリゾート地です。那須高原の魅力は、標高によって異なる表情を見せる雄大な自然景観。清らかな渓流や滝、四季折々の野花が咲き乱れる牧場、お洒落なカフェやベーカリー、美術館が点在し、高原の澄んだ空気を吸い込みながらのドライブや散策は格別の爽快感をもたらします。さらに開湯千三百年を超える「那須温泉郷」は、効能豊かな天然温泉の宝庫。森の中に広がる広大な岩露天風呂や、檜の香りに包まれる大浴場に浸かれば、高原の涼やかな風とともに日頃の疲れが心地よく解きほぐされていきます。そしてディナーは、栃木の豊かな大地が育んだ最高峰の食材。日本屈指のブランド黒毛和牛「とちぎ和牛」のステーキ、那須の契約農家から毎朝届く甘みたっぷりの高原野菜、那須御養卵や新鮮な乳製品を使ったスイーツなど、贅を尽くした料理が食卓を彩ります。本特集では、那須高原最大級のスケールを誇り大型露天風呂と豪華バイキングがファミリー・カップルに絶大な人気を誇る「那須温泉 ホテルエピナール那須」、大正12年創業・昭和天皇ゆかりの格式高い自家源泉大露天風呂を誇る最高峰「那須温泉 山楽」、そして那須連山を一望する大パノラマと充実の温泉スパが自慢の「グランドメルキュール那須高原リゾート＆スパ」の3大名宿を厳選。栃木県那須町への楽天ふるさと納税トラベルクーポン（寄付額の最大30％割引・有効期限3年）を活用して、実質自己負担2,000円で憧れの那須高原ステイをお得に予約しましょう。
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
          <li><a href="#three-points" className="text-amber-800 hover:underline font-medium">那須高原 温泉リゾート＆名門宿特集が選ばれる3つの理由</a></li>
          <li><a href="#hotel-1" className="text-amber-800 hover:underline font-medium">【第1選】那須温泉　ホテルエピナール那須</a></li>
          <li><a href="#hotel-2" className="text-amber-800 hover:underline font-medium">【第2選】那須温泉山楽</a></li>
          <li><a href="#hotel-3" className="text-amber-800 hover:underline font-medium">【第3選】グランドメルキュール那須高原リゾート＆スパ</a></li>
          <li><a href="#furusato-step" className="text-amber-800 hover:underline font-medium">実質自己負担2,000円で予約する簡単4ステップ手順</a></li>
          <li><a href="#faq" className="text-amber-800 hover:underline font-medium">よくある質問（Q&A）</a></li>
        </ol>
      </section>

      {/* 3つの魅力セクション */}
      <section id="three-points" className="mb-14">
        <h2 className="text-xl md:text-3xl font-extrabold text-gray-900 mb-6 pb-2 border-b-2 border-amber-600 flex items-center gap-2">
          <span>🌟</span> 那須高原 温泉リゾート＆名門宿特集が選ばれる3つの理由
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <span className="text-3xl font-black text-amber-600 block mb-2">01</span>
            <h3 className="font-bold text-gray-900 text-lg mb-3 leading-snug">御用邸のあるロイヤルリゾート！木漏れ日の森と那須連山を望む雄大な大自然</h3>
            <p className="text-sm text-gray-600 leading-relaxed">東京から新幹線で約70分。四季折々の高原の清々しい空気と、お洒落なベーカリーや美術館巡りをゆったりと楽しめます。</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <span className="text-3xl font-black text-amber-600 block mb-2">02</span>
            <h3 className="font-bold text-gray-900 text-lg mb-3 leading-snug">開湯千三百年の名湯とブランド黒毛和牛「とちぎ和牛」の極上グルメ会席</h3>
            <p className="text-sm text-gray-600 leading-relaxed">歴史ある良質な温泉で心身を癒やし、ジューシーなとちぎ和牛や採れたて高原野菜をフレンチ・会席・豪華バイキングで堪能。</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <span className="text-3xl font-black text-amber-600 block mb-2">03</span>
            <h3 className="font-bold text-gray-900 text-lg mb-3 leading-snug">那須町ふるさと納税で最大30％OFF！3年間有効クーポンで避暑や紅葉シーズンに予約</h3>
            <p className="text-sm text-gray-600 leading-relaxed">夏休みや紅葉期に大人気の那須高原リゾートもふるさと納税なら実質負担2,000円。寄付から3年間有効なので家族旅行に最適です。</p>
          </div>
        </div>
      </section>

      {/* 宿紹介 1 */}
      <section id="hotel-1" className="mb-16 bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
        <div className="bg-gradient-to-r from-amber-700 to-amber-900 text-white p-4 md:p-6">
          <span className="bg-amber-500 text-white text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider mb-2 inline-block">厳選名宿 第1選</span>
          <h2 className="text-xl md:text-3xl font-bold leading-tight mb-2">
            那須温泉　ホテルエピナール那須
          </h2>
          <p className="text-xs md:text-sm text-amber-100">栃木県那須町・那須高原最大級リゾート！大型温泉大浴場＆露天風呂と楽天トラベルアワード常連の豪華バイキング（口コミ8,500件超）</p>
        </div>
        <div className="p-6 md:p-8">
          <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600 bg-gray-50 p-4 rounded-xl">
            <div><strong>所在地:</strong> 栃木県那須郡那須町大字高久丙１番地</div>
            <div><strong>アクセス:</strong> 【お車で】那須I.Cより10分、【JRで】東北新幹線・東北本線　那須塩原駅から無料シャトルバスで30分（要予約）</div>
            <div><strong>楽天評価:</strong> <span className="text-amber-600 font-bold text-base">★ 4.44</span> (8540件)</div>
            <div><strong>参考価格:</strong> 1名あたり約7,770円〜</div>
          </div>
          <p className="text-base text-gray-800 leading-relaxed mb-6">約五万坪という広大な敷地を持ち、那須高原随一の施設規模と満足度を誇る大型総合リゾートホテル。館内には那須温泉を引いたエリア最大級の大浴場や、緑に囲まれた川のせせらぎを聞く大露天風呂、サウナ、温水室内プールを完備し、三世代旅行からカップルまで幅広く楽しめます。最大の自慢は、約90種類もの料理が並ぶ豪華ディナーバイキング「NASUバイキング エルバージュ」。シェフが目の前で焼き上げる牛ステーキや揚げたて天ぷら、那須の採れたて高原野菜、パティシエ特製スイーツが食べ放題。最上階の本格フレンチレストラン「メリメランジュ」での贅沢ディナーも選べます。</p>
          <div className="hotel-special-wrapper">
            <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded-r-xl mb-6 text-sm text-amber-950">
              <strong className="block mb-1 font-bold">宿のこだわり・特徴:</strong>
              地元の旬菜にこだわる食事＆施設充実のトップリゾート
            </div>
          </div>
          <div className="user-review-wrapper">
            <blockquote className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-xl mb-6 text-xs md:text-sm text-gray-700 italic">
              <strong>宿泊者の声:</strong> “バイキングと便利な設備で3回目のリピートバイキングがどれも美味しかったです。特にローストビーフと、那須牛乳を使ったバニラアイスが最高でした。また、廊下に氷とウォーターサーバーが設置してあるので…　2026-09-05 21:35:05投稿 つづきはこちら”
            </blockquote>
          </div>
          <div className="pt-2">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D7335%26f_flg%3DPLAN"
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
            那須温泉山楽
          </h2>
          <p className="text-xs md:text-sm text-amber-100">栃木県那須町・大正十二年創業・昭和天皇ゆかりの格式！自家源泉100％の広大な大露天風呂と最高級とちぎ和牛懐石（那須温泉 山楽）</p>
        </div>
        <div className="p-6 md:p-8">
          <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600 bg-gray-50 p-4 rounded-xl">
            <div><strong>所在地:</strong> 栃木県那須郡那須町湯本206</div>
            <div><strong>アクセス:</strong> 那須塩原駅より車で約３５分／東北自動車道　那須ＩＣより約１５分/無料送迎バスあり。要事前予約</div>
            <div><strong>楽天評価:</strong> <span className="text-amber-600 font-bold text-base">★ 4.64</span> (388件)</div>
            <div><strong>参考価格:</strong> 1名あたり約27,600円〜</div>
          </div>
          <p className="text-base text-gray-800 leading-relaxed mb-6">大正12年創業、昭和天皇が皇太子時代にご逗留された歴史を持つ、那須を代表する最高峰の純和風名門旅館。美しい日本庭園を抜けると、大正ロマンの風情漂う格式高い空間が広がります。宿最大の誇りは、約三十畳もの広さを誇る自家源泉掛け流しの大露天風呂。清らかな木漏れ日と小鳥のさえずりに包まれながら、大正時代からこんこんと湧き続ける名湯に心ゆくまで浸ることができます。客室は数寄屋造りの気品ある和室で、細やかなおもてなしが評判。夕食はA5ランクとちぎ和牛のすき焼きやしゃぶしゃぶ、旬の厳選素材を一品一品丁寧に仕上げた本格懐石料理をお部屋食で優雅に味わえます。</p>
          <div className="hotel-special-wrapper">
            <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded-r-xl mb-6 text-sm text-amber-950">
              <strong className="block mb-1 font-bold">宿のこだわり・特徴:</strong>
              五感で四季を感じられる会席料理と大露天風呂。日本情緒あふれる純和風のご滞在をご満喫いただけるお宿です
            </div>
          </div>
          <div className="user-review-wrapper">
            <blockquote className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-xl mb-6 text-xs md:text-sm text-gray-700 italic">
              <strong>宿泊者の声:</strong> “リファのドライヤーと充実したアメニティドライヤーがリファの高級品で、乾きも速く、贅沢な気持ちになれました。その他アメニティも良かったです。巾着も毎度風情が感じられて良いです。クチコミの詳細はこ…　2026-08-11 21:13:02投稿 つづきはこちら”
            </blockquote>
          </div>
          <div className="pt-2">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D56935%26f_flg%3DPLAN"
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
            グランドメルキュール那須高原リゾート＆スパ
          </h2>
          <p className="text-xs md:text-sm text-amber-100">栃木県那須町・那須連山を一望する大パノラマ！広々とした温泉露天風呂とオールインクルーシブで楽しむ極上高原リゾート</p>
        </div>
        <div className="p-6 md:p-8">
          <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600 bg-gray-50 p-4 rounded-xl">
            <div><strong>所在地:</strong> 栃木県那須郡那須町高久丙4449-2</div>
            <div><strong>アクセス:</strong> ◆那須ICから車で約10分◆那須スマートIC(ETC専用)から車で約21分◆ご宿泊者様限定バスフリーパス有（事前予約制）</div>
            <div><strong>楽天評価:</strong> <span className="text-amber-600 font-bold text-base">★ 4.22</span> (3933件)</div>
            <div><strong>参考価格:</strong> 1名あたり約5,568円〜</div>
          </div>
          <p className="text-base text-gray-800 leading-relaxed mb-6">那須高原の雄大な自然を見下ろす高台に建ち、スタイリッシュなリゾート空間を提供するハイグレードホテル。客室の大きな窓からは、緑豊かな那須の森や雄大な那須連山のパノラマビューが広がり、朝夕の清々しい高原の光に癒やされます。館内には広々とした大浴場や岩造りの露天風呂、サウナが完備され、旅の疲れを心地よくリセット。ラウンジでのドリンクサービスや、地元の厳選食材を取り入れた豪華ディナービュッフェでは、和洋中の多彩な美食を心ゆくまで堪能でき、ファミリーやグループ旅行に高い満足度を誇ります。</p>
          <div className="hotel-special-wrapper">
            <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded-r-xl mb-6 text-sm text-amber-950">
              <strong className="block mb-1 font-bold">宿のこだわり・特徴:</strong>
              ウェルカムベビーの宿｜全客室にアルコール含むドリンク・軽食が楽しめるラウンジアクセス付
            </div>
          </div>
          <div className="user-review-wrapper">
            <blockquote className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-xl mb-6 text-xs md:text-sm text-gray-700 italic">
              <strong>宿泊者の声:</strong> “遊び場と温泉が充実、家族連れに最適2歳の子連れで利用しました。外から帰ってきた後や朝食までの時間を、1階の遊び場や2階のファミリーラウンジ、併設している公園で有意義に過ごすことができました。温泉も…　2026-09-05 17:25:48投稿 つづきはこちら”
            </blockquote>
          </div>
          <div className="pt-2">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D31077%26f_flg%3DPLAN"
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
            href="/furusato-tax-kinugawa-nikko-world-heritage-stay"
            className="block p-3 rounded-lg bg-white border border-gray-200 hover:border-amber-400 hover:shadow-xs transition-all text-sm text-amber-900 font-medium"
          >
            ▸ 【日光東照宮＆奥日光乳白色硫黄泉×ふるさと納税】千姫物語・日光金谷・四季彩
          </Link>
          <Link
            href="/furusato-tax-karuizawa-luxury-resort-villa-stay"
            className="block p-3 rounded-lg bg-white border border-gray-200 hover:border-amber-400 hover:shadow-xs transition-all text-sm text-amber-900 font-medium"
          >
            ▸ 【軽井沢 高原リゾート＆名門ホテル×ふるさと納税】マリオット・プリンスイースト・音羽ノ森
          </Link>
          <Link
            href="/furusato-tax-ikaho-onsen-stone-steps-luxury-stay"
            className="block p-3 rounded-lg bg-white border border-gray-200 hover:border-amber-400 hover:shadow-xs transition-all text-sm text-amber-900 font-medium"
          >
            ▸ 【伊香保温泉 365段石段街＆二大名湯宿×ふるさと納税】福一・岸権旅館・ホテル木暮
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
