import FurusatoStepSection from "@/app/components/FurusatoStepSection";
import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '国指定天然記念物・長瀞岩畳の紅葉舟下り！秩父夜祭・錦秋ハイキング＆秩父七湯温泉宿×ふるさと納税厳選ガイド埼玉 | 旅宿クラウド',
  description: '11月上旬〜11月下旬に見頃を迎える首都圏屈指の紅葉名所「長瀞岩畳（ながとろいわだたみ）」。和舟で豪快に下る「長瀞ラインくだり」と「月の石もみじ公園」のライトアップ、江戸時代から続く秩父七湯の名湯「新木鉱泉」「梁山泊」「宮本の湯」！名物豚味噌漬けや秩父そばを、楽天ふるさと納税トラベルクーポンで実質2,000円で楽しむ完全ガイド。',
  keywords: ["国指定天然記念物", "長瀞岩畳の紅葉舟下り！秩父夜祭", "錦秋ハイキング", "秩父七湯温泉宿×ふるさと納税", "2026年最新秋旅", "埼玉", "旅宿クラウド"],
  alternates: {
    canonical: "https://croud-travel.pages.dev/furusato-tax-chichibu-nagatoro-autumn-leaves-stay/"
  },
  openGraph: {
    title: '国指定天然記念物・長瀞岩畳の紅葉舟下り！秩父夜祭・錦秋ハイキング＆秩父七湯温泉宿×ふるさと納税厳選ガイド埼玉',
    description: '11月上旬〜11月下旬に見頃を迎える首都圏屈指の紅葉名所「長瀞岩畳（ながとろいわだたみ）」。和舟で豪快に下る「長瀞ラインくだり」と「月の石もみじ公園」のライトアップ、江戸時代から続く秩父七湯の名湯「新木鉱泉」「梁山泊」「宮本の湯」！名物豚味噌漬けや秩父そばを、楽天ふるさと納税トラベルクーポンで実質2,000円で楽しむ完全ガイド。',
    url: 'https://croud-travel.pages.dev/furusato-tax-chichibu-nagatoro-autumn-leaves-stay',
    siteName: '旅宿クラウド',
    locale: 'ja_JP',
    type: 'article',
  }
};

export default function FurusatoChichibuNagatoroAutumnLeavesStayPage() {

  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "国指定天然記念物・長瀞岩畳の紅葉舟下り！秩父夜祭・錦秋ハイキング＆秩父七湯温泉宿×ふるさと納税完全ガイド【2026年最新秋旅】埼玉 | 旅宿クラウド",
    "description": "11月上旬〜11月下旬に見頃を迎える首都圏屈指の紅葉名所「長瀞岩畳（ながとろいわだたみ）」。和舟で豪快に下る「長瀞ラインくだり」と「月の石もみじ公園」のライトアップ、江戸時代から続く秩父七湯の名湯「新木鉱泉」「梁山泊」「宮本の湯」！名物豚味噌漬けや秩父そばを、楽天ふるさと納税トラベルクーポンで実質2,000円で楽しむ完全ガイド。",
    "url": "https://croud-travel.pages.dev/furusato-tax-chichibu-nagatoro-autumn-leaves-stay/",
    "publisher": {
      "@type": "Organization",
      "name": "日本全国・旅宿クラウド",
      "logo": { "@type": "ImageObject", "url": "https://croud-travel.pages.dev/icon.png" }
    }
  };
  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "ホーム", "item": "https://croud-travel.pages.dev" },
      { "@type": "ListItem", "position": 2, "name": "国指定天然記念物・長瀞岩畳の紅葉舟下り！秩父夜祭・錦秋ハイキング＆秩父七湯温泉宿×ふるさと納税完全ガイド【2026年最新秋旅】埼玉 | 旅宿クラウド", "item": "https://croud-travel.pages.dev/furusato-tax-chichibu-nagatoro-autumn-leaves-stay/" }
    ]
  };

  return (
    <main className="min-h-screen bg-stone-100/60 text-stone-900 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"「秩父七湯『御代の湯』 新木鉱泉旅館」へのアクセスや移動方法について","acceptedAnswer":{"@type":"Answer","text":"「秩父七湯『御代の湯』 新木鉱泉旅館」へは、◆送迎有◆その他、西武秩父駅よりタクシー10分又は定峰行きバス25分金昌寺下車徒歩4分●関越道花園ICより40分●。最寄りの西武秩父駅からの経路案内も充実しています。"}},{"@type":"Question","name":"「秩父七湯『御代の湯』 新木鉱泉旅館」の魅力や予約時のポイントは？","acceptedAnswer":{"@type":"Answer","text":"「秩父七湯『御代の湯』 新木鉱泉旅館」は『2025楽天トラベルアワード13度目の受賞！民芸調のほのぼの宿！滑らかな卵水と云われる温泉。』という点が旅行者から高く支持されています。連休や人気シーズンは予約が集中しやすいため、空室状況はお早めのチェックが安心です。"}},{"@type":"Question","name":"プラン選びや宿の比較で意識すべき点は？","acceptedAnswer":{"@type":"Answer","text":"「秩父七湯『御代の湯』 新木鉱泉旅館」と「秩父小鹿野温泉旅館 梁山泊」はそれぞれ立地や施設設備に独自の魅力があります。湯巡り重視か、料理やお部屋の寛ぎ重視かなど、今回の旅の目的に合わせてお選びください。"}}]}) }}
      />
      {/* パンくずナビ */}
      <nav aria-label="Breadcrumb" className="max-w-5xl mx-auto px-4 sm:px-6 pt-6 pb-2 text-xs text-stone-500 flex items-center gap-2 flex-wrap">
        <Link href="/" className="hover:text-stone-800 underline">ホーム</Link>
        <span>&gt;</span>
        <Link href="/features" className="hover:text-stone-800 underline">特集一覧</Link>
        <span>&gt;</span>
        <span className="text-stone-800 font-bold">長瀞岩畳紅葉ライン下り＆秩父温泉名宿特集</span>
      </nav>

      {/* ヒーローセクション */}
      <header className="max-w-5xl mx-auto px-4 sm:px-6 pt-4 pb-10">
        <div className="bg-gradient-to-br from-stone-900 via-amber-950 to-stone-900 text-white rounded-3xl p-8 md:p-12 shadow-xl border border-amber-900/40 relative overflow-hidden">
          <div className="relative z-10 space-y-4">
            <span className="inline-block bg-amber-500/20 text-amber-300 text-xs md:text-sm font-bold px-3.5 py-1.5 rounded-full border border-amber-400/30">
              長瀞ライン下り岩畳紅葉＆秩父名湯鉱泉旅館特集
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold font-serif tracking-tight leading-snug">国指定天然記念物・長瀞岩畳の紅葉舟下り！秩父夜祭・錦秋ハイキング＆秩父七湯温泉宿×ふるさと納税厳選ガイド埼玉</h1>
            <p className="text-stone-300 text-sm md:text-base max-w-3xl leading-relaxed">
              11月上旬〜11月下旬に見頃を迎える首都圏屈指の紅葉名所「長瀞岩畳（ながとろいわだたみ）」。和舟で豪快に下る「長瀞ラインくだり」と「月の石もみじ公園」のライトアップ、江戸時代から続く秩父七湯の名湯「新木鉱泉」「梁山泊」「宮本の湯」！名物豚味噌漬けや秩父そばを、楽天ふるさと納税トラベルクーポンで実質2,000円で楽しむ完全ガイド。
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs md:text-sm text-amber-200/90 font-medium">
              <span className="flex items-center gap-1.5">
                <span>🗓️</span> 2026年最新版（10-11月秋シーズン）
              </span>
              <span className="flex items-center gap-1.5">
                <span>🎫</span> 楽天ふるさと納税トラベルクーポン対象
              </span>
              <span className="flex items-center gap-1.5">
                <span>✨</span> 実質自己負担2,000円
              </span>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-16">
        {/* リード文セクション */}
        <section className="bg-white rounded-3xl p-8 md:p-10 border border-stone-200/80 shadow-sm">
          <h2 className="text-xl md:text-2xl font-bold font-serif text-stone-800 mb-4 border-l-4 border-amber-600 pl-4">
            荒川の清流に映る紅葉の岸壁を和舟で下るスリルと感動。ノスタルジックな秩父路と卵水の名湯に憩う秋の休日へ
          </h2>
          <p className="text-stone-700 text-sm md:text-base leading-relaxed">
            都心から特急ラビューでわずか約80分、豊かな山々と清流に抱かれた埼玉県「秩父・長瀞（ながとろ）」。11月上旬から下旬にかけて、国の天然記念物「岩畳」の周囲を取り囲む木々が一斉に赤や黄金に色づき、船頭が竿一本で操る和舟に乗って荒川を下る「長瀞ラインくだり」からは、水面すれすれの特等席からダイナミックな紅葉の断崖絶壁を仰ぎ見ることができます。さらに夜には「月の石もみじ公園」で幻想的な紅葉ライトアップが催され、秋の夜長をロマンチックに演出。そんな長瀞観光の拠点となるのが、古くから秩父札所巡りの旅人を癒やしてきた「秩父七湯・秩父温泉郷」の歴史ある名宿群です。創業約190年・江戸末期から湧くつるつるの「卵水（たまごみず）」を湛える老舗「新木鉱泉旅館」、小鹿野の自然林に佇み天然温泉と地元食材の囲炉裏料理が評判の「梁山泊」、そして元力士当主の土俵露天風呂と自家農園野菜が人気の「宮本の湯」。名物・豚肉の味噌漬けや新そばを味わいながら、楽天ふるさと納税トラベルクーポン（寄付額の最大30％割引・有効期限3年）を使って実質自己負担2,000円で予約し、心洗われる秩父路の秋旅へ出かけましょう。
          </p>
        </section>

        {/* 3つの魅力ポイント */}
        <section className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold font-serif text-stone-900 text-center">
            この特集で厳選した宿をおすすめする3つの理由
          </h2>
          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-white rounded-2xl p-6 md:p-8 border border-stone-200/80 shadow-xs">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-full bg-amber-100 text-amber-800 font-bold text-sm flex items-center justify-center shrink-0">
                  01
                </span>
                <h3 className="text-lg md:text-xl font-bold text-stone-900 font-serif">
                  国の天然記念物「長瀞岩畳」の紅葉ラインくだり＆月の石もみじ公園ライトアップ
                </h3>
              </div>
              <p className="text-stone-600 text-sm md:text-base leading-relaxed pl-11">
                荒川沿いに広がる奇岩・岩畳と紅葉のコントラスト。夜間ライトアップでは、色鮮やかなモミジが光に照らされ幻想的な世界が広がります。
              </p>
            </div>
  

            <div className="bg-white rounded-2xl p-6 md:p-8 border border-stone-200/80 shadow-xs">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-full bg-amber-100 text-amber-800 font-bold text-sm flex items-center justify-center shrink-0">
                  02
                </span>
                <h3 className="text-lg md:text-xl font-bold text-stone-900 font-serif">
                  江戸時代から続く秩父七湯「卵水」！肌がすべすべになる極上の天然美肌鉱泉
                </h3>
              </div>
              <p className="text-stone-600 text-sm md:text-base leading-relaxed pl-11">
                硫黄分を含みとろりとした肌触りの名湯。冷え性や神経痛を和らげ、露天風呂や檜風呂で木の香りに包まれながらじっくりと身体を温められます。
              </p>
            </div>
  

            <div className="bg-white rounded-2xl p-6 md:p-8 border border-stone-200/80 shadow-xs">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-full bg-amber-100 text-amber-800 font-bold text-sm flex items-center justify-center shrink-0">
                  03
                </span>
                <h3 className="text-lg md:text-xl font-bold text-stone-900 font-serif">
                  秩父名物「豚肉の味噌漬け」・打ちたて「新そば」・旬のいのしし鍋会席
                </h3>
              </div>
              <p className="text-stone-600 text-sm md:text-base leading-relaxed pl-11">
                伝統の特製味噌にじっくり漬け込んだジューシーな豚肉や、秋に収穫されたばかりの香り高い秩父そば、里山のジビエ料理を堪能できます。
              </p>
            </div>
  
          </div>
        </section>

        {/* ホテル一覧 */}
        <section className="space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-2xl md:text-3xl font-bold font-serif text-stone-900">
              【2026年最新】ふるさと納税で行く極上おすすめ宿3選
            </h2>
            <p className="text-stone-600 text-sm">
              宿泊予約時にトラベルクーポンを適用することで、最大30％割引＆実質2,000円で泊まれます。
            </p>
          </div>

          <div className="space-y-8">

            <div key="chichibu_araki" className="bg-white rounded-3xl border border-stone-200/90 shadow-md overflow-hidden hover:shadow-xl transition duration-300">
              <div className="bg-gradient-to-r from-amber-700 to-amber-900 text-amber-50 px-6 py-3 text-xs md:text-sm font-bold flex justify-between items-center">
                <span>埼玉県秩父市・文政十年（約190年）創業！秩父七湯「御代の湯」つるつる卵水の温泉露天風呂付き客室</span>
                <span className="bg-amber-500/30 text-amber-200 text-xs px-2.5 py-0.5 rounded-full border border-amber-400/40">厳選名宿 第1選</span>
              </div>
              <div className="p-6 md:p-8 space-y-6">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="bg-amber-100 text-amber-900 text-xs font-bold px-2.5 py-1 rounded-md">
                      ふるさと納税トラベルクーポン対象
                    </span>
                    <span className="text-amber-800 font-bold text-sm">
                      ★ 4.59 <span className="text-stone-400 text-xs">(2,169件)</span>
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold font-serif text-stone-900">
                    秩父七湯『御代の湯』　新木鉱泉旅館
                  </h3>
                  <p className="text-xs md:text-sm text-stone-500 mt-1">
                    📍 埼玉県秩父市山田1538番地1 ｜ ◆送迎有◆その他、西武秩父駅よりタクシー10分又は定峰行きバス25分金昌寺下車徒歩4分●関越道花園ICより40分●
                  </p>
                </div>

                <div className="flex flex-col gap-5 items-center">
                  <div className="md:col-span-6">
                    <div className="relative aspect-video rounded-2xl overflow-hidden shadow-inner bg-stone-100 group">
                      <img
                        src="https://img.travel.rakuten.co.jp/share/HOTEL/5828/5828.jpg"
                        alt="秩父七湯『御代の湯』　新木鉱泉旅館"
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-6 space-y-4">
                    <p className="text-stone-700 text-sm md:text-base leading-relaxed">
                      江戸末期の文政10年創業、秩父札所四番のすぐ近くに建つ秩父随一の歴史を誇る老舗温泉旅館。宿の自慢は、古くから「卵水（たまごみず）」と親しまれてきた単純硫黄冷鉱泉。肌につけた瞬間にぬるぬるとした滑らかさを実感でき、湯上がり肌がしっとり整います。リニューアルされた温泉露天風呂付き和モダン客室も大好評。夕食には秩父名物の豚肉味噌漬けや岩魚の塩焼き、季節の山里会席料理を堪能できます。
                    </p>
                    <div className="bg-stone-50 rounded-xl p-4 border border-stone-200/60 text-xs space-y-1.5 text-stone-600">
                      <div><strong className="text-stone-800">♨️ 温泉・特徴：</strong> 2025楽天トラベルアワード13度目の受賞！民芸調のほのぼの宿！滑らかな卵水と云われる温泉が自慢です</div>
                      <div><strong className="text-stone-800">🚗 駐車場：</strong> 　３０台　　【無料・予約不要】</div>
                      <div><strong className="text-stone-800">💰 料金目安：</strong> <span className="text-amber-900 font-bold text-sm">1名あたり 8,220円〜</span>（※クーポン利用で実質2,000円）</div>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F5828%2F5828.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-bold py-3.5 px-6 rounded-2xl shadow-md text-center transition flex items-center justify-center gap-2 text-sm"
                  >
                    <span>🏨 楽天トラベルで空室・宿泊プランを見る</span>
                    <span>→</span>
                  </a>
                  <a
                    href="https://event.travel.rakuten.co.jp/furusato/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="sm:w-auto bg-stone-100 hover:bg-stone-200 text-stone-800 font-bold py-3.5 px-6 rounded-2xl border border-stone-300 text-center transition text-sm flex items-center justify-center gap-1.5"
                  >
                    <span>🎫 自治体クーポン獲得</span>
                  </a>
                </div>
              </div>
            </div>
    

            <div key="chichibu_ryozanpaku" className="bg-white rounded-3xl border border-stone-200/90 shadow-md overflow-hidden hover:shadow-xl transition duration-300">
              <div className="bg-gradient-to-r from-amber-700 to-amber-900 text-amber-50 px-6 py-3 text-xs md:text-sm font-bold flex justify-between items-center">
                <span>埼玉県小鹿野町・奥秩父の静かな里山に佇む名湯宿！大浴場・露天風呂と無料送迎付き観光サポート</span>
                <span className="bg-amber-500/30 text-amber-200 text-xs px-2.5 py-0.5 rounded-full border border-amber-400/40">厳選名宿 第2選</span>
              </div>
              <div className="p-6 md:p-8 space-y-6">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="bg-amber-100 text-amber-900 text-xs font-bold px-2.5 py-1 rounded-md">
                      ふるさと納税トラベルクーポン対象
                    </span>
                    <span className="text-amber-800 font-bold text-sm">
                      ★ 4.19 <span className="text-stone-400 text-xs">(770件)</span>
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold font-serif text-stone-900">
                    秩父小鹿野温泉旅館　梁山泊
                  </h3>
                  <p className="text-xs md:text-sm text-stone-500 mt-1">
                    📍 埼玉県秩父郡小鹿野町般若260 ｜ 【車】関越道花園ＩＣから車で35分　【電車】西武秩父駅または秩父駅より送迎有
                  </p>
                </div>

                <div className="flex flex-col gap-5 items-center">
                  <div className="md:col-span-6">
                    <div className="relative aspect-video rounded-2xl overflow-hidden shadow-inner bg-stone-100 group">
                      <img
                        src="https://img.travel.rakuten.co.jp/share/HOTEL/14195/14195.jpg"
                        alt="秩父小鹿野温泉旅館　梁山泊"
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-6 space-y-4">
                    <p className="text-stone-700 text-sm md:text-base leading-relaxed">
                      奥秩父・小鹿野の自然に囲まれた静寂のロケーションに位置し、きめ細やかなおもてなしと良質な温泉が自慢の宿。アルカリ性の肌に優しい天然温泉を引いた大浴場や露天風呂からは、四季折々の里山の景観を楽しめます。夕食には手作りの田舎会席や旬の鍋料理を提供。西武秩父駅からの無料送迎や長瀞観光への案内サービスも充実しており、首都圏からの気軽な秋の小旅行に絶大な支持を集めています。
                    </p>
                    <div className="bg-stone-50 rounded-xl p-4 border border-stone-200/60 text-xs space-y-1.5 text-stone-600">
                      <div><strong className="text-stone-800">♨️ 温泉・特徴：</strong> 【埼玉おもてなし大賞☆特別賞】２年連続受賞★露天風呂付き客室☆美人の湯と呼ばれる温泉☆懐石料理が人気</div>
                      <div><strong className="text-stone-800">🚗 駐車場：</strong> 100台以上駐車できる無料駐車場を完備</div>
                      <div><strong className="text-stone-800">💰 料金目安：</strong> <span className="text-amber-900 font-bold text-sm">1名あたり 16,500円〜</span>（※クーポン利用で実質2,000円）</div>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F14195%2F14195.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-bold py-3.5 px-6 rounded-2xl shadow-md text-center transition flex items-center justify-center gap-2 text-sm"
                  >
                    <span>🏨 楽天トラベルで空室・宿泊プランを見る</span>
                    <span>→</span>
                  </a>
                  <a
                    href="https://event.travel.rakuten.co.jp/furusato/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="sm:w-auto bg-stone-100 hover:bg-stone-200 text-stone-800 font-bold py-3.5 px-6 rounded-2xl border border-stone-300 text-center transition text-sm flex items-center justify-center gap-1.5"
                  >
                    <span>🎫 自治体クーポン獲得</span>
                  </a>
                </div>
              </div>
            </div>
    

            <div key="chichibu_miyamoto" className="bg-white rounded-3xl border border-stone-200/90 shadow-md overflow-hidden hover:shadow-xl transition duration-300">
              <div className="bg-gradient-to-r from-amber-700 to-amber-900 text-amber-50 px-6 py-3 text-xs md:text-sm font-bold flex justify-between items-center">
                <span>埼玉県小鹿野町・元力士当主が営む名物相撲風呂！自家農園の採れたて野菜と本場ちゃんこ鍋の宿</span>
                <span className="bg-amber-500/30 text-amber-200 text-xs px-2.5 py-0.5 rounded-full border border-amber-400/40">厳選名宿 第3選</span>
              </div>
              <div className="p-6 md:p-8 space-y-6">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="bg-amber-100 text-amber-900 text-xs font-bold px-2.5 py-1 rounded-md">
                      ふるさと納税トラベルクーポン対象
                    </span>
                    <span className="text-amber-800 font-bold text-sm">
                      ★ 4.17 <span className="text-stone-400 text-xs">(303件)</span>
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold font-serif text-stone-900">
                    秩父西谷津の湯　里山香ぐはし　宮本の湯
                  </h3>
                  <p className="text-xs md:text-sm text-stone-500 mt-1">
                    📍 埼玉県秩父郡小鹿野町長留510 ｜ 西武秩父駅より送迎バス（要予約）で２５分・秩父駅でも可／西武秩父駅・秩父駅より西武路線バスも有
                  </p>
                </div>

                <div className="flex flex-col gap-5 items-center">
                  <div className="md:col-span-6">
                    <div className="relative aspect-video rounded-2xl overflow-hidden shadow-inner bg-stone-100 group">
                      <img
                        src="https://img.travel.rakuten.co.jp/share/HOTEL/20394/20394.jpg"
                        alt="秩父西谷津の湯　里山香ぐはし　宮本の湯"
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-6 space-y-4">
                    <p className="text-stone-700 text-sm md:text-base leading-relaxed">
                      元幕内力士が当主を務め、館内に本物の土俵や仕切り線をあしらった「土俵露天風呂」を備えたユニークで温かな温泉旅館。自家農園で丹精込めて育てられた新鮮野菜や、元力士直伝の秘伝出汁で作る本場ちゃんこ鍋・囲炉裏会席が絶品と大評判です。敷地内には貸切風呂や農園体験施設もあり、ファミリーやグループ、カップルで笑顔あふれる滞在を楽しめます。
                    </p>
                    <div className="bg-stone-50 rounded-xl p-4 border border-stone-200/60 text-xs space-y-1.5 text-stone-600">
                      <div><strong className="text-stone-800">♨️ 温泉・特徴：</strong> 貸切風呂と囲炉裏料理の宿</div>
                      <div><strong className="text-stone-800">🚗 駐車場：</strong> 有　５０台　無料　先着順</div>
                      <div><strong className="text-stone-800">💰 料金目安：</strong> <span className="text-amber-900 font-bold text-sm">1名あたり 11,550円〜</span>（※クーポン利用で実質2,000円）</div>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F20394%2F20394.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-bold py-3.5 px-6 rounded-2xl shadow-md text-center transition flex items-center justify-center gap-2 text-sm"
                  >
                    <span>🏨 楽天トラベルで空室・宿泊プランを見る</span>
                    <span>→</span>
                  </a>
                  <a
                    href="https://event.travel.rakuten.co.jp/furusato/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="sm:w-auto bg-stone-100 hover:bg-stone-200 text-stone-800 font-bold py-3.5 px-6 rounded-2xl border border-stone-300 text-center transition text-sm flex items-center justify-center gap-1.5"
                  >
                    <span>🎫 自治体クーポン獲得</span>
                  </a>
                </div>
              </div>
            </div>
    
          </div>
        </section>

        <FurusatoStepSection />

        {/* 関連特集クロスリンク */}
        <section className="bg-stone-50 rounded-3xl p-8 border border-stone-200/80 mb-16">
          <h2 className="text-lg md:text-xl font-bold font-serif text-stone-800 mb-4">
            あわせて読みたい関連特集
          </h2>
          <ul className="grid sm:grid-cols-2 gap-2">

            <li key="furusato-tax-spring-water-soba-tofu-onsen-stay">
              <Link
                href="/furusato-tax-spring-water-soba-tofu-onsen-stay"
                className="block p-4 rounded-2xl bg-white border border-stone-200 hover:border-amber-400 hover:shadow-sm transition text-stone-800 text-sm font-bold group"
              >
                <span className="text-amber-700 group-hover:text-amber-900 mr-1.5">👉</span>
                【湧水手打ち蕎麦＆名水とうふ温泉宿×ふるさと納税】清らかな水の恵み旅
              </Link>
            </li>
  

            <li key="furusato-tax-historical-kaido-post-town-ryokan-stay">
              <Link
                href="/furusato-tax-historical-kaido-post-town-ryokan-stay"
                className="block p-4 rounded-2xl bg-white border border-stone-200 hover:border-amber-400 hover:shadow-sm transition text-stone-800 text-sm font-bold group"
              >
                <span className="text-amber-700 group-hover:text-amber-900 mr-1.5">👉</span>
                【歴史街道・宿場町の名旅館×ふるさと納税】中山道・東海道の情緒を巡る旅
              </Link>
            </li>
  

            <li key="furusato-tax-tangible-cultural-property-architectural-ryokan-stay">
              <Link
                href="/furusato-tax-tangible-cultural-property-architectural-ryokan-stay"
                className="block p-4 rounded-2xl bg-white border border-stone-200 hover:border-amber-400 hover:shadow-sm transition text-stone-800 text-sm font-bold group"
              >
                <span className="text-amber-700 group-hover:text-amber-900 mr-1.5">👉</span>
                【登録有形文化財の宿×ふるさと納税】匠の建築美と歴史を味わう名門旅館
              </Link>
            </li>
  

            <li key="furusato-tax-luxury-hotspring-ryokan-stay">
              <Link
                href="/furusato-tax-luxury-hotspring-ryokan-stay"
                className="block p-4 rounded-2xl bg-white border border-stone-200 hover:border-amber-400 hover:shadow-sm transition text-stone-800 text-sm font-bold group"
              >
                <span className="text-amber-700 group-hover:text-amber-900 mr-1.5">👉</span>
                【実質2,000円で泊まる名湯】高級温泉旅館＆憧れの老舗宿完全ガイド
              </Link>
            </li>
  
          </ul>
        </section>

        {/* ハブページへの誘導フッター */}
        <div className="bg-gradient-to-r from-stone-900 via-amber-950 to-stone-900 text-white rounded-3xl p-8 md:p-10 shadow-xl border border-amber-900/40 text-center mb-12">
          <h2 className="text-xl sm:text-2xl font-bold font-serif mb-3 text-amber-50">
            もっとお得に旅を楽しむためのハブページへ
          </h2>
          <p className="text-stone-300 text-xs sm:text-sm mb-6 max-w-xl mx-auto">
            全国のテーマ別宿特集や、旅行費を最大30％安くする裏ワザを網羅した総合ガイドを公開中。
          </p>
          <Link
            href="/travel-savings-guide"
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 text-stone-950 font-black px-7 py-3.5 rounded-2xl shadow-xl hover:opacity-95 transition text-sm"
          >
            🏨 旅行節約総合ハブページを見る ➔
          </Link>
        </div>

        {/* フッター */}
        <footer className="text-center text-xs text-stone-400 pt-6 border-t border-stone-200">
          <p>※表示内容は2026年9月時点の情報です。最新の宿泊プラン・クーポン対象施設は楽天トラベルにてご確認ください。</p>
          <p className="mt-2">
            <Link href="/" className="text-stone-500 hover:text-stone-800 underline transition">旅宿クラウド トップページへ</Link>
          </p>
        </footer>
      </div>
    
        {/* Model Course Section */}
                {/* Model Course Section */}
                {/* Model Course Section */}
                {/* Model Course Section */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200/80 mb-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-xl md:text-2xl font-bold text-stone-900">
              【1泊2日】秩父七湯『御代の湯』 新木鉱泉旅館を拠点にするおすすめ滞在モデルコース
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-l-2 border-amber-500 pl-4 md:pl-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="bg-amber-600 text-white text-xs font-bold px-2.5 py-1 rounded">1日目</span>
                <h3 className="font-bold text-stone-900 text-base md:text-lg">到着〜チェックインと名湯巡り</h3>
              </div>
              <ul className="text-xs md:text-sm text-stone-600 space-y-2 leading-relaxed">
                <li>・<strong className="text-stone-800">14:00〜</strong> 西武秩父駅よりアクセス。◆送迎有◆その他、西武秩父駅よりタクシー10分又は定峰行きバス25分金昌寺下車徒歩4分●関越道花園ICより40分●。</li>
                <li>・<strong className="text-stone-800">15:30〜</strong> 「秩父七湯『御代の湯』 新木鉱泉旅館」にチェックイン。2025楽天トラベルアワード13度目の受賞！民芸調のほのぼの宿！滑らかな卵水と云われる温泉が自慢ですなどの宿の特徴に期待を高めつつ客室へ。</li>
                <li>・<strong className="text-stone-800">17:00〜</strong> 「秩父七湯『御代の湯』 新木鉱泉旅館」の湯処へ。2025楽天トラベルアワード13度目の受賞！民芸調のほのぼの宿！滑らかとともに、夕暮れの特別な寛ぎを満喫。</li>
                <li>・<strong className="text-stone-800">19:00〜</strong> 「秩父七湯『御代の湯』 新木鉱泉旅館」でいただく旬の夕食。地場産の味覚を取り入れたおもてなし料理を五感でじっくり味わう贅沢なひととき。</li>
              </ul>
            </div>
            <div className="border-l-2 border-teal-500 pl-4 md:pl-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="bg-teal-600 text-white text-xs font-bold px-2.5 py-1 rounded">2日目</span>
                <h3 className="font-bold text-stone-900 text-base md:text-lg">爽快な朝湯〜周辺散策と帰路へ</h3>
              </div>
              <ul className="text-xs md:text-sm text-stone-600 space-y-2 leading-relaxed">
                <li>・<strong className="text-stone-800">07:00〜</strong> 朝の光が差し込む「秩父七湯『御代の湯』 新木鉱泉旅館」の湯船へ。清々しい空気の中で手足を伸ばし、心地よい目覚めを迎える。</li>
                <li>・<strong className="text-stone-800">08:00〜</strong> 「秩父七湯『御代の湯』 新木鉱泉旅館」こだわりの朝食を堪能。炊きたてのごはんや身体に優しい料理で、一日のエネルギーをチャージ。</li>
                <li>・<strong className="text-stone-800">10:00〜</strong> チェックアウト後は近隣エリアを観光。本記事でご紹介した「秩父小鹿野温泉旅館 梁山泊」の周辺スポットや名産店に立ち寄り、お土産を選んで帰路へ。</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-stone-50 rounded-2xl p-6 md:p-10 border border-stone-200/80 mb-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              よくある質問（FAQ）と秩父七湯『御代の湯』 新木鉱泉旅館の滞在ポイント
            </h2>
          </div>
          <div className="space-y-4">
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 「秩父七湯『御代の湯』 新木鉱泉旅館」へのアクセスや移動方法について</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 「秩父七湯『御代の湯』 新木鉱泉旅館」へは、◆送迎有◆その他、西武秩父駅よりタクシー10分又は定峰行きバス25分金昌寺下車徒歩4分●関越道花園ICより40分●。最寄りの西武秩父駅からの経路案内も充実しています。
              </p>
            </details>
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 「秩父七湯『御代の湯』 新木鉱泉旅館」の魅力や予約時のポイントは？</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 「秩父七湯『御代の湯』 新木鉱泉旅館」は『2025楽天トラベルアワード13度目の受賞！民芸調のほのぼの宿！滑らかな卵水と云われる温泉。』という点が旅行者から高く支持されています。連休や人気シーズンは予約が集中しやすいため、空室状況はお早めのチェックが安心です。
              </p>
            </details>
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. プラン選びや宿の比較で意識すべき点は？</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 「秩父七湯『御代の湯』 新木鉱泉旅館」と「秩父小鹿野温泉旅館 梁山泊」はそれぞれ立地や施設設備に独自の魅力があります。湯巡り重視か、料理やお部屋の寛ぎ重視かなど、今回の旅の目的に合わせてお選びください。
              </p>
            </details>
          </div>
        </section>

        {/* Internal Link Mesh: Related Features & Prefectures */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200/80">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-xl md:text-2xl font-bold text-stone-900">
              あわせて読みたい人気特集＆全国エリアガイド
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">

          </div>
          <div className="pt-6 border-t border-stone-100">
            <h3 className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-3">人気の都道府県から宿を探す</h3>
            <div className="flex flex-wrap gap-2">
              <Link
                href="/prefectures/osaka"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                大阪府の宿・温泉
              </Link>
              <Link
                href="/prefectures/kumamoto"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                熊本県の宿・温泉
              </Link>
              <Link
                href="/prefectures/tokushima"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                徳島県の宿・温泉
              </Link>
              <Link
                href="/prefectures/wakayama"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                和歌山県の宿・温泉
              </Link>
            </div>
          
      <HubRelatedPosts currentSlug="furusato-tax-chichibu-nagatoro-autumn-leaves-stay" />
</div>
        </section>

      </main>
  );
}
