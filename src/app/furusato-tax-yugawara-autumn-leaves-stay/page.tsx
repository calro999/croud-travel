import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '都心から70分！湯河原温泉・万葉公園の紅葉散策＆文豪が愛した名湯旅館×ふるさと納税厳選ガイド神奈川',
  description: '11月中旬〜12月上旬に見頃を迎える神奈川・湯河原温泉の紅葉！リニューアルした万葉公園「湯河原惣湯 Books and Retreat。」のせせらぎ散策、夏目漱石や島崎藤村が逗留した老舗旅館「伊藤屋」「富士屋旅館」「ふきや」で弱食塩泉の極上美肌湯と相模湾の朝獲れ地魚会席を堪能。楽天ふるさと納税で実質2,000円。',
  keywords: ["都心から70分！湯河原温泉", "万葉公園の紅葉散策", "2026年最新秋旅", "神奈川", "温泉宿", "宿泊予約", "楽天トラベル"],
  alternates: {
    canonical: "https://croud-travel.pages.dev/furusato-tax-yugawara-autumn-leaves-stay/"
  },
  openGraph: {
    title: '都心から70分！湯河原温泉・万葉公園の紅葉散策＆文豪が愛した名湯旅館×ふるさと納税厳選ガイド神奈川',
    description: '11月中旬〜12月上旬に見頃を迎える神奈川・湯河原温泉の紅葉！リニューアルした万葉公園「湯河原惣湯 Books and Retreat。」のせせらぎ散策、夏目漱石や島崎藤村が逗留した老舗旅館「伊藤屋」「富士屋旅館」「ふきや」で弱食塩泉の極上美肌湯と相模湾の朝獲れ地魚会席を堪能。楽天ふるさと納税で実質2,000円。',
    url: 'https://croud-travel.pages.dev/furusato-tax-yugawara-autumn-leaves-stay',
    siteName: '旅宿クラウド',
    locale: 'ja_JP',
    type: 'article',
  }
};

export default function FeatureArticlePage() {

  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "都心から70分！湯河原温泉・万葉公園の紅葉散策＆文豪が愛した名湯旅館×ふるさと納税完全ガイド【2026年最新秋旅】神奈川",
    "description": "11月中旬〜12月上旬に見頃を迎える神奈川・湯河原温泉の紅葉！リニューアルした万葉公園「湯河原惣湯 Books and Retreat。」のせせらぎ散策、夏目漱石や島崎藤村が逗留した老舗旅館「伊藤屋」「富士屋旅館」「ふきや」で弱食塩泉の極上美肌湯と相模湾の朝獲れ地魚会席を堪能。楽天ふるさと納税で実質2,000円。",
    "url": "https://croud-travel.pages.dev/furusato-tax-yugawara-autumn-leaves-stay/",
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
      { "@type": "ListItem", "position": 2, "name": "都心から70分！湯河原温泉・万葉公園の紅葉散策＆文豪が愛した名湯旅館×ふるさと納税完全ガイド【2026年最新秋旅】神奈川", "item": "https://croud-travel.pages.dev/furusato-tax-yugawara-autumn-leaves-stay/" }
    ]
  };

  return (
    <main className="min-h-screen bg-stone-100/60 text-stone-900 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"「湯河原温泉 島崎藤村ゆかりの宿 伊藤屋」へのアクセスや移動方法について","acceptedAnswer":{"@type":"Answer","text":"「湯河原温泉 島崎藤村ゆかりの宿 伊藤屋」へは、ＪＲ東海道線「湯河原駅」より「温泉場・奥湯河原方面行」バスにて約１3分公園入口下車／小田原厚木道路石橋ＩＣより２５分。最寄りの湯河原駅からの経路案内も充実しています。"}},{"@type":"Question","name":"「湯河原温泉 島崎藤村ゆかりの宿 伊藤屋」の魅力や予約時のポイントは？","acceptedAnswer":{"@type":"Answer","text":"「湯河原温泉 島崎藤村ゆかりの宿 伊藤屋」は『貸切風呂は無料・予約不要。万葉公園入口2分、美術館5分で散策便利。門柱・石垣と本館一部は登。』という点が旅行者から高く支持されています。連休や人気シーズンは予約が集中しやすいため、空室状況はお早めのチェックが安心です。"}},{"@type":"Question","name":"プラン選びや宿の比較で意識すべき点は？","acceptedAnswer":{"@type":"Answer","text":"「湯河原温泉 島崎藤村ゆかりの宿 伊藤屋」と「富士屋旅館 湯河原」はそれぞれ立地や施設設備に独自の魅力があります。湯巡り重視か、料理やお部屋の寛ぎ重視かなど、今回の旅の目的に合わせてお選びください。"}}]}) }}
      />
      {/* パンくずナビ */}
      <nav aria-label="Breadcrumb" className="max-w-5xl mx-auto px-4 sm:px-6 pt-6 pb-2 text-xs text-stone-500 flex items-center gap-2 flex-wrap">
        <Link href="/" className="hover:text-stone-800 underline">ホーム</Link>
        <span>&gt;</span>
        <Link href="/features" className="hover:text-stone-800 underline">特集一覧</Link>
        <span>&gt;</span>
        <span className="text-stone-800 font-bold">神奈川・湯河原温泉 万葉公園もみじ狩り＆文豪ゆかりの名湯宿特集</span>
      </nav>

      {/* ヒーローセクション */}
      <header className="max-w-5xl mx-auto px-4 sm:px-6 pt-4 pb-10">
        <div className="bg-gradient-to-br from-stone-900 via-amber-950 to-stone-900 text-white rounded-3xl p-8 md:p-12 shadow-xl border border-amber-900/40 relative overflow-hidden">
          <div className="relative z-10 space-y-4">
            <span className="inline-block bg-amber-500/20 text-amber-300 text-xs md:text-sm font-bold px-3.5 py-1.5 rounded-full border border-amber-400/30">
              神奈川・湯河原温泉＆万葉公園紅葉特集
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold font-serif tracking-tight leading-snug">都心から70分！湯河原温泉・万葉公園の紅葉散策＆文豪が愛した名湯旅館×ふるさと納税厳選ガイド神奈川</h1>
            <p className="text-stone-300 text-sm md:text-base max-w-3xl leading-relaxed">
              11月中旬〜12月上旬に見頃を迎える神奈川・湯河原温泉の紅葉！リニューアルした万葉公園「湯河原惣湯 Books and Retreat。」のせせらぎ散策、夏目漱石や島崎藤村が逗留した老舗旅館「伊藤屋」「富士屋旅館」「ふきや」で弱食塩泉の極上美肌湯と相模湾の朝獲れ地魚会席を堪能。楽天ふるさと納税で実質2,000円。
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs md:text-sm text-amber-200/90 font-medium">
              <span className="flex items-center gap-1.5">
                <span>🗓️</span> 11月中旬〜12月上旬（万葉公園・もみじの郷見頃期）
              </span>
              <span className="flex items-center gap-1.5">
                <span>🎫</span> 楽天ふるさと納税トラベルクーポン対象
              </span>
              <span className="flex items-center gap-1.5">
                <span>💰</span> 寄付額の最大30%クーポン還元（実質2,000円）
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* イントロダクション */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 mb-12">
        <div className="bg-white rounded-3xl p-6 md:p-10 border border-stone-200/80 shadow-sm space-y-6">
          <div className="border-l-4 border-amber-600 pl-4">
            <h2 className="text-xl md:text-2xl font-bold font-serif text-stone-900">
              万葉集に詠まれた古湯と文豪の愛した静寂！川のせせらぎとモミジのトンネル
            </h2>
          </div>
          <p className="text-stone-700 text-sm md:text-base leading-relaxed">
            万葉集に東日本で唯一詠まれた名湯として知られ、夏目漱石、芥川龍之介、島崎藤村など名だたる文豪が愛した神奈川県・湯河原温泉。温暖な気候のため、11月中旬から12月上旬にかけてゆっくりと紅葉の見頃を迎えます。リノベーションで生まれ変わった「万葉公園・湯河原惣湯」では、清流沿いのテラスで本を読みながら真っ赤に染まるもみじのトンネルを鑑賞。散策の後は、肌にやさしく芯から温まる弱食塩泉に浸かり、相模湾で獲れたての地魚や伊勢海老、旬の懐石料理をふるさと納税トラベルクーポンでお得に贅沢に味わいましょう。
          </p>

          <div className="grid md:grid-cols-3 gap-4 pt-2">
            
            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm space-y-2">
              <h3 className="font-bold text-stone-900 text-lg flex items-center gap-2">
                <span className="w-7 h-7 rounded-full bg-amber-100 text-amber-800 text-sm font-bold flex items-center justify-center">1</span>
                万葉公園「湯河原惣湯 Books and Retreat。」の紅葉散策
              </h3>
              <p className="text-stone-700 text-sm leading-relaxed pl-9">
                千歳川の渓流沿いに広がる緑豊かな公園。滝や木製デッキテラスが整備され、カフェでコーヒーを片手に頭上を覆う鮮やかなモミジを眺めながら優雅な時間を過ごせます。
              </p>
            </div>
  

            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm space-y-2">
              <h3 className="font-bold text-stone-900 text-lg flex items-center gap-2">
                <span className="w-7 h-7 rounded-full bg-amber-100 text-amber-800 text-sm font-bold flex items-center justify-center">2</span>
                島崎藤村や夏目漱石が執筆に没頭した文化財宿の風情
              </h3>
              <p className="text-stone-700 text-sm leading-relaxed pl-9">
                藤村が『夜明け前』を起稿した部屋が残る宿など、明治・大正の面影を残す数寄屋造りの建築美と日本庭園が、秋の紅葉によって一層艶やかに引き立ちます。
              </p>
            </div>
  

            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm space-y-2">
              <h3 className="font-bold text-stone-900 text-lg flex items-center gap-2">
                <span className="w-7 h-7 rounded-full bg-amber-100 text-amber-800 text-sm font-bold flex items-center justify-center">3</span>
                相模湾の朝獲れ鮮魚＆名物金目鯛・伊勢海老の極上会席
              </h3>
              <p className="text-stone-700 text-sm leading-relaxed pl-9">
                真鶴や小田原港から届く新鮮な地魚のお造り、ふっくら煮付けた金目鯛、香ばしい伊勢海老の鬼殻焼きなど、海の幸を贅を尽くした和懐石で堪能できます。
              </p>
            </div>
  
          </div>
        </div>
      </section>

      {/* 厳選ホテル一覧 */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 mb-12">
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <span className="text-amber-800 text-xs md:text-sm font-bold tracking-wider uppercase">Recommended Ryokan & Hotels</span>
            <h2 className="text-2xl md:text-3xl font-extrabold font-serif text-stone-900">
              ふるさと納税トラベルクーポンで泊まりたい厳選宿3選
            </h2>
            <p className="text-stone-500 text-xs md:text-sm max-w-2xl mx-auto">
              楽天トラベルで高評価を獲得し、ふるさと納税クーポンが使える注目の名宿を徹底紹介。
            </p>
          </div>

          <div className="space-y-8">
            
            <div key="yugawara_itoya" className="bg-white rounded-3xl border border-stone-200/90 shadow-md overflow-hidden hover:shadow-xl transition duration-300">
              <div className="bg-gradient-to-r from-amber-700 to-amber-900 text-amber-50 px-6 py-3 text-xs md:text-sm font-bold flex justify-between items-center">
                <span>島崎藤村が逗留した登録有形文化財の老舗宿！源泉掛け流しの貸切風呂と季節の月替わり会席</span>
                <span className="bg-amber-500/30 text-amber-200 text-xs px-2.5 py-0.5 rounded-full border border-amber-400/40">厳選名宿 第1選</span>
              </div>
              <div className="p-6 md:p-8 space-y-6">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="bg-amber-100 text-amber-900 text-xs font-bold px-2.5 py-1 rounded-md">
                      ふるさと納税トラベルクーポン対象
                    </span>
                    <span className="text-amber-800 font-bold text-sm">
                      ★ 4.81 <span className="text-stone-400 text-xs">(610件)</span>
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold font-serif text-stone-900">
                    湯河原温泉　島崎藤村ゆかりの宿　伊藤屋
                  </h3>
                  <p className="text-xs md:text-sm text-stone-500 mt-1">
                    📍 神奈川県足柄下郡湯河原町宮上488 ｜ ＪＲ東海道線「湯河原駅」より「温泉場・奥湯河原方面行」バスにて約１3分公園入口下車／小田原厚木道路石橋ＩＣより２５分
                  </p>
                </div>

                <div className="grid md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-6">
                    <div className="relative aspect-video rounded-2xl overflow-hidden shadow-inner bg-stone-100 group">
                      <img
                        src="https://img.travel.rakuten.co.jp/share/HOTEL/19405/19405.jpg"
                        alt="湯河原温泉　島崎藤村ゆかりの宿　伊藤屋"
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-6 space-y-4">
                    <p className="text-stone-700 text-sm md:text-base leading-relaxed">
                      貸切風呂は無料・予約不要。万葉公園入口2分、美術館5分で散策便利。門柱・石垣と本館一部は登録文化財
                    </p>
                    <div className="bg-stone-50 rounded-xl p-4 border border-stone-200/60 text-xs space-y-1.5 text-stone-600">
                      <div><strong className="text-stone-800">♨️ 特徴・魅力：</strong> 貸切風呂は無料・予約不要。万葉公園入口2分、美術館5分で散策便利。門柱・石垣と本館一部は登録文化財...</div>
                      <div><strong className="text-stone-800">🚗 アクセス：</strong> ＪＲ東海道線「湯河原駅」より「温泉場・奥湯河原方面行」バスにて約１3分公園入口下車／小田原厚木道路石橋ＩＣより２５分</div>
                      <div><strong className="text-stone-800">💰 料金目安：</strong> <span className="text-amber-900 font-bold text-sm">1名あたり 24,750円〜</span>（※クーポン利用で実質2,000円）</div>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F19405%2F19405.html"
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
    

            <div key="yugawara_fujiya" className="bg-white rounded-3xl border border-stone-200/90 shadow-md overflow-hidden hover:shadow-xl transition duration-300">
              <div className="bg-gradient-to-r from-amber-700 to-amber-900 text-amber-50 px-6 py-3 text-xs md:text-sm font-bold flex justify-between items-center">
                <span>大正十二年創業の建物を再生した極上リゾート！瓢箪池を望む日本庭園と鰻・炭火会席</span>
                <span className="bg-amber-500/30 text-amber-200 text-xs px-2.5 py-0.5 rounded-full border border-amber-400/40">厳選名宿 第2選</span>
              </div>
              <div className="p-6 md:p-8 space-y-6">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="bg-amber-100 text-amber-900 text-xs font-bold px-2.5 py-1 rounded-md">
                      ふるさと納税トラベルクーポン対象
                    </span>
                    <span className="text-amber-800 font-bold text-sm">
                      ★ 4.79 <span className="text-stone-400 text-xs">(243件)</span>
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold font-serif text-stone-900">
                    富士屋旅館　湯河原
                  </h3>
                  <p className="text-xs md:text-sm text-stone-500 mt-1">
                    📍 神奈川県足柄下郡湯河原町宮上557 ｜ ＪＲ　湯河原駅よりお車にて約８分、または、不動滝行き・奥湯河原行きバスで約15分 「公園入口」下車徒歩2分
                  </p>
                </div>

                <div className="grid md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-6">
                    <div className="relative aspect-video rounded-2xl overflow-hidden shadow-inner bg-stone-100 group">
                      <img
                        src="https://img.travel.rakuten.co.jp/share/HOTEL/173166/173166.jpg"
                        alt="富士屋旅館　湯河原"
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-6 space-y-4">
                    <p className="text-stone-700 text-sm md:text-base leading-relaxed">
                      美食の宿、馳走の宿「富士屋旅館」唯一無二の時をお過ごしください
                    </p>
                    <div className="bg-stone-50 rounded-xl p-4 border border-stone-200/60 text-xs space-y-1.5 text-stone-600">
                      <div><strong className="text-stone-800">♨️ 特徴・魅力：</strong> 美食の宿、馳走の宿「富士屋旅館」唯一無二の時をお過ごしください...</div>
                      <div><strong className="text-stone-800">🚗 アクセス：</strong> ＪＲ　湯河原駅よりお車にて約８分、または、不動滝行き・奥湯河原行きバスで約15分 「公園入口」下車徒歩2分</div>
                      <div><strong className="text-stone-800">💰 料金目安：</strong> <span className="text-amber-900 font-bold text-sm">1名あたり 24,750円〜</span>（※クーポン利用で実質2,000円）</div>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F173166%2F173166.html"
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
    

            <div key="yugawara_fukiya" className="bg-white rounded-3xl border border-stone-200/90 shadow-md overflow-hidden hover:shadow-xl transition duration-300">
              <div className="bg-gradient-to-r from-amber-700 to-amber-900 text-amber-50 px-6 py-3 text-xs md:text-sm font-bold flex justify-between items-center">
                <span>屋上貸切露天風呂から湯河原の山並みを一望！ミシュラン掲載歴を持つ最高峰の本格懐石宿</span>
                <span className="bg-amber-500/30 text-amber-200 text-xs px-2.5 py-0.5 rounded-full border border-amber-400/40">厳選名宿 第3選</span>
              </div>
              <div className="p-6 md:p-8 space-y-6">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="bg-amber-100 text-amber-900 text-xs font-bold px-2.5 py-1 rounded-md">
                      ふるさと納税トラベルクーポン対象
                    </span>
                    <span className="text-amber-800 font-bold text-sm">
                      ★ 4.46 <span className="text-stone-400 text-xs">(178件)</span>
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold font-serif text-stone-900">
                    湯河原温泉　ふきや
                  </h3>
                  <p className="text-xs md:text-sm text-stone-500 mt-1">
                    📍 神奈川県足柄下郡湯河原町宮上398 ｜ ＪＲ東海道線・湯河原駅～タクシーで８分／東名高速・厚木ＩＣ～小田原厚木道路・石橋ＩＣ～２０分
                  </p>
                </div>

                <div className="grid md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-6">
                    <div className="relative aspect-video rounded-2xl overflow-hidden shadow-inner bg-stone-100 group">
                      <img
                        src="https://img.travel.rakuten.co.jp/share/HOTEL/27959/27959.jpg"
                        alt="湯河原温泉　ふきや"
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-6 space-y-4">
                    <p className="text-stone-700 text-sm md:text-base leading-relaxed">
                      館内七つの湯めぐりで名湯をご堪能ください。また和の風情を大切に、調度品にもこだわったお宿です。
                    </p>
                    <div className="bg-stone-50 rounded-xl p-4 border border-stone-200/60 text-xs space-y-1.5 text-stone-600">
                      <div><strong className="text-stone-800">♨️ 特徴・魅力：</strong> 館内七つの湯めぐりで名湯をご堪能ください。また和の風情を大切に、調度品にもこだわったお宿です。...</div>
                      <div><strong className="text-stone-800">🚗 アクセス：</strong> ＪＲ東海道線・湯河原駅～タクシーで８分／東名高速・厚木ＩＣ～小田原厚木道路・石橋ＩＣ～２０分</div>
                      <div><strong className="text-stone-800">💰 料金目安：</strong> <span className="text-amber-900 font-bold text-sm">1名あたり 47,300円〜</span>（※クーポン利用で実質2,000円）</div>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F27959%2F27959.html"
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
        </div>
      </section>

      {/* ふるさと納税クーポンの活用手順 */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 mb-12">
        <div className="bg-gradient-to-br from-amber-50 to-stone-50 rounded-3xl p-6 md:p-10 border border-amber-200/70 shadow-sm space-y-6">
          <div className="text-center space-y-2">
            <span className="text-amber-800 text-xs font-bold tracking-wider uppercase">How to use</span>
            <h2 className="text-xl md:text-2xl font-bold font-serif text-stone-900">
              楽天ふるさと納税トラベルクーポンの簡単3ステップ
            </h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 pt-4">
            <div className="bg-white rounded-2xl p-6 border border-stone-200/80 shadow-sm text-center space-y-3">
              <div className="w-10 h-10 mx-auto rounded-full bg-amber-600 text-white font-bold text-lg flex items-center justify-center shadow">1</div>
              <h3 className="font-bold text-stone-900 text-base">寄付してクーポン獲得</h3>
              <p className="text-stone-600 text-xs leading-relaxed">
                対象自治体へ寄付を申し込むと、寄付額の最大30%相当の楽天トラベルクーポンが即時または数日でマイクーポンに付与されます。
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-stone-200/80 shadow-sm text-center space-y-3">
              <div className="w-10 h-10 mx-auto rounded-full bg-amber-600 text-white font-bold text-lg flex items-center justify-center shadow">2</div>
              <h3 className="font-bold text-stone-900 text-base">対象宿を予約</h3>
              <p className="text-stone-600 text-xs leading-relaxed">
                楽天トラベルで希望の宿・宿泊プランを選択。予約画面で取得したふるさと納税クーポンを適用して割引を受けます。
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-stone-200/80 shadow-sm text-center space-y-3">
              <div className="w-10 h-10 mx-auto rounded-full bg-amber-600 text-white font-bold text-lg flex items-center justify-center shadow">3</div>
              <h3 className="font-bold text-stone-900 text-base">実質2,000円で贅沢旅行</h3>
              <p className="text-stone-600 text-xs leading-relaxed">
                自己負担額は年間2,000円のみ（上限額内）。翌年の住民税控除や所得税還付を受けながら、最高の秋旅をお楽しみいただけます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* フッター誘導 */}
      <footer className="max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-4">
        <Link
          href="/features"
          className="inline-flex items-center gap-2 bg-stone-800 hover:bg-stone-900 text-white font-bold py-3 px-8 rounded-full shadow transition text-sm"
        >
          <span>← 特集記事一覧に戻る</span>
        </Link>
      </footer>
    
        {/* Model Course Section */}
                {/* Model Course Section */}
                {/* Model Course Section */}
                {/* Model Course Section */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200/80 mb-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-xl md:text-2xl font-bold text-stone-900">
              【1泊2日】湯河原温泉 島崎藤村ゆかりの宿 伊藤屋を拠点にするおすすめ滞在モデルコース
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-l-2 border-amber-500 pl-4 md:pl-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="bg-amber-600 text-white text-xs font-bold px-2.5 py-1 rounded">1日目</span>
                <h3 className="font-bold text-stone-900 text-base md:text-lg">到着〜チェックインと名湯巡り</h3>
              </div>
              <ul className="text-xs md:text-sm text-stone-600 space-y-2 leading-relaxed">
                <li>・<strong className="text-stone-800">14:00〜</strong> 湯河原駅よりアクセス。ＪＲ東海道線「湯河原駅」より「温泉場・奥湯河原方面行」バスにて約１3分公園入口下車／小田原厚木道路石橋ＩＣより２５分。</li>
                <li>・<strong className="text-stone-800">15:30〜</strong> 「湯河原温泉 島崎藤村ゆかりの宿 伊藤屋」にチェックイン。貸切風呂は無料・予約不要。万葉公園入口2分、美術館5分で散策便利。門柱・石垣と本館一部は登録文化財などの宿の特徴に期待を高めつつ客室へ。</li>
                <li>・<strong className="text-stone-800">17:00〜</strong> 「湯河原温泉 島崎藤村ゆかりの宿 伊藤屋」の湯処へ。貸切風呂は無料・予約不要。万葉公園入口2分、美術館5分で散策便利。門柱とともに、夕暮れの特別な寛ぎを満喫。</li>
                <li>・<strong className="text-stone-800">19:00〜</strong> 「湯河原温泉 島崎藤村ゆかりの宿 伊藤屋」でいただく旬の夕食。地場産の味覚を取り入れたおもてなし料理を五感でじっくり味わう贅沢なひととき。</li>
              </ul>
            </div>
            <div className="border-l-2 border-teal-500 pl-4 md:pl-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="bg-teal-600 text-white text-xs font-bold px-2.5 py-1 rounded">2日目</span>
                <h3 className="font-bold text-stone-900 text-base md:text-lg">爽快な朝湯〜周辺散策と帰路へ</h3>
              </div>
              <ul className="text-xs md:text-sm text-stone-600 space-y-2 leading-relaxed">
                <li>・<strong className="text-stone-800">07:00〜</strong> 朝の光が差し込む「湯河原温泉 島崎藤村ゆかりの宿 伊藤屋」の湯船へ。清々しい空気の中で手足を伸ばし、心地よい目覚めを迎える。</li>
                <li>・<strong className="text-stone-800">08:00〜</strong> 「湯河原温泉 島崎藤村ゆかりの宿 伊藤屋」こだわりの朝食を堪能。炊きたてのごはんや身体に優しい料理で、一日のエネルギーをチャージ。</li>
                <li>・<strong className="text-stone-800">10:00〜</strong> チェックアウト後は近隣エリアを観光。本記事でご紹介した「富士屋旅館 湯河原」の周辺スポットや名産店に立ち寄り、お土産を選んで帰路へ。</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-stone-50 rounded-2xl p-6 md:p-10 border border-stone-200/80 mb-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              よくある質問（FAQ）と湯河原温泉 島崎藤村ゆかりの宿 伊藤屋の滞在ポイント
            </h2>
          </div>
          <div className="space-y-4">
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 「湯河原温泉 島崎藤村ゆかりの宿 伊藤屋」へのアクセスや移動方法について</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 「湯河原温泉 島崎藤村ゆかりの宿 伊藤屋」へは、ＪＲ東海道線「湯河原駅」より「温泉場・奥湯河原方面行」バスにて約１3分公園入口下車／小田原厚木道路石橋ＩＣより２５分。最寄りの湯河原駅からの経路案内も充実しています。
              </p>
            </details>
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 「湯河原温泉 島崎藤村ゆかりの宿 伊藤屋」の魅力や予約時のポイントは？</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 「湯河原温泉 島崎藤村ゆかりの宿 伊藤屋」は『貸切風呂は無料・予約不要。万葉公園入口2分、美術館5分で散策便利。門柱・石垣と本館一部は登。』という点が旅行者から高く支持されています。連休や人気シーズンは予約が集中しやすいため、空室状況はお早めのチェックが安心です。
              </p>
            </details>
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. プラン選びや宿の比較で意識すべき点は？</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 「湯河原温泉 島崎藤村ゆかりの宿 伊藤屋」と「富士屋旅館 湯河原」はそれぞれ立地や施設設備に独自の魅力があります。湯巡り重視か、料理やお部屋の寛ぎ重視かなど、今回の旅の目的に合わせてお選びください。
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
                href="/prefectures/gunma"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                群馬県の宿・温泉
              </Link>
              <Link
                href="/prefectures/kagawa"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                香川県の宿・温泉
              </Link>
              <Link
                href="/prefectures/shiga"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                滋賀県の宿・温泉
              </Link>
            </div>
          
      <HubRelatedPosts currentSlug="furusato-tax-yugawara-autumn-leaves-stay" />
</div>
        </section>

      </main>
  );
}
