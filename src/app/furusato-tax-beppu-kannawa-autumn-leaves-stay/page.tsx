import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '湯けむり立ち上る別府鉄輪温泉＆別府ロープウェイ鶴見岳紅葉！地獄蒸し名宿×ふるさと納税完全ガイド【2026年最新秋旅】大分',
  description: '10月中旬〜11月中旬に鶴見岳の紅葉と湯けむりが織りなす「別府鉄輪（かんなわ）温泉」。標高1,375mから別府湾を見下ろす別府ロープウェイの紅葉パノラマ、高温の温泉蒸気で蒸し上げる名物「地獄蒸し料理」、名宿「旅館 みゆき屋」「日本旅館 器」「かんなわ荘」で豊後牛や関アジ・関サバを堪能。ふるさと納税で実質2,000円。',
  keywords: ["湯けむり立ち上る別府鉄輪温泉", "2026年最新秋旅", "大分", "温泉宿", "宿泊予約", "楽天トラベル", "国内旅行"],
  alternates: {
    canonical: "https://croud-travel.pages.dev/furusato-tax-beppu-kannawa-autumn-leaves-stay/"
  },
  openGraph: {
    title: '湯けむり立ち上る別府鉄輪温泉＆別府ロープウェイ鶴見岳紅葉！地獄蒸し名宿×ふるさと納税完全ガイド【2026年最新秋旅】大分',
    description: '10月中旬〜11月中旬に鶴見岳の紅葉と湯けむりが織りなす「別府鉄輪（かんなわ）温泉」。標高1,375mから別府湾を見下ろす別府ロープウェイの紅葉パノラマ、高温の温泉蒸気で蒸し上げる名物「地獄蒸し料理」、名宿「旅館 みゆき屋」「日本旅館 器」「かんなわ荘」で豊後牛や関アジ・関サバを堪能。ふるさと納税で実質2,000円。',
    url: 'https://croud-travel.pages.dev/furusato-tax-beppu-kannawa-autumn-leaves-stay',
    siteName: '旅宿クラウド',
    locale: 'ja_JP',
    type: 'article',
  }
};

export default function FeatureArticlePage() {

  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "湯けむり立ち上る別府鉄輪温泉＆別府ロープウェイ鶴見岳紅葉！地獄蒸し名宿×ふるさと納税完全ガイド【2026年最新秋旅】大分",
    "description": "10月中旬〜11月中旬に鶴見岳の紅葉と湯けむりが織りなす「別府鉄輪（かんなわ）温泉」。標高1,375mから別府湾を見下ろす別府ロープウェイの紅葉パノラマ、高温の温泉蒸気で蒸し上げる名物「地獄蒸し料理」、名宿「旅館 みゆき屋」「日本旅館 器」「かんなわ荘」で豊後牛や関アジ・関サバを堪能。ふるさと納税で実質2,000円。",
    "url": "https://croud-travel.pages.dev/furusato-tax-beppu-kannawa-autumn-leaves-stay/",
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
      { "@type": "ListItem", "position": 2, "name": "湯けむり立ち上る別府鉄輪温泉＆別府ロープウェイ鶴見岳紅葉！地獄蒸し名宿×ふるさと納税完全ガイド【2026年最新秋旅】大分", "item": "https://croud-travel.pages.dev/furusato-tax-beppu-kannawa-autumn-leaves-stay/" }
    ]
  };

  return (
    <main className="min-h-screen bg-stone-100/60 text-stone-900 pb-20">
      {/* パンくずナビ */}
      <nav aria-label="Breadcrumb" className="max-w-5xl mx-auto px-4 sm:px-6 pt-6 pb-2 text-xs text-stone-500 flex items-center gap-2 flex-wrap">
        <Link href="/" className="hover:text-stone-800 underline">ホーム</Link>
        <span>&gt;</span>
        <Link href="/features" className="hover:text-stone-800 underline">特集一覧</Link>
        <span>&gt;</span>
        <span className="text-stone-800 font-bold">大分・別府鉄輪温泉 湯けむり展望＆名物地獄蒸し温泉宿特集</span>
      </nav>

      {/* ヒーローセクション */}
      <header className="max-w-5xl mx-auto px-4 sm:px-6 pt-4 pb-10">
        <div className="bg-gradient-to-br from-stone-900 via-amber-950 to-stone-900 text-white rounded-3xl p-8 md:p-12 shadow-xl border border-amber-900/40 relative overflow-hidden">
          <div className="relative z-10 space-y-4">
            <span className="inline-block bg-amber-500/20 text-amber-300 text-xs md:text-sm font-bold px-3.5 py-1.5 rounded-full border border-amber-400/30">
              大分・別府鉄輪温泉＆鶴見岳紅葉特集
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold font-serif tracking-tight leading-snug">
              湯けむり立ち上る別府鉄輪温泉＆別府ロープウェイ鶴見岳紅葉！地獄蒸し名宿×ふるさと納税完全ガイド【2026年最新秋旅】大分
            </h1>
            <p className="text-stone-300 text-sm md:text-base max-w-3xl leading-relaxed">
              10月中旬〜11月中旬に鶴見岳の紅葉と湯けむりが織りなす「別府鉄輪（かんなわ）温泉」。標高1,375mから別府湾を見下ろす別府ロープウェイの紅葉パノラマ、高温の温泉蒸気で蒸し上げる名物「地獄蒸し料理」、名宿「旅館 みゆき屋」「日本旅館 器」「かんなわ荘」で豊後牛や関アジ・関サバを堪能。ふるさと納税で実質2,000円。
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs md:text-sm text-amber-200/90 font-medium">
              <span className="flex items-center gap-1.5">
                <span>🗓️</span> 10月中旬〜11月中旬（鶴見岳紅葉ロープウェイ運行期）
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
              重要文化的景観の湯けむりと鶴見岳の錦秋！名湯別府八湯の中心・鉄輪
            </h2>
          </div>
          <p className="text-stone-700 text-sm md:text-base leading-relaxed">
            日本一の湧出量と源泉数を誇る温泉天国・別府。その中でも最も温泉情緒が色濃く残るのが、街のあちこちから白煙が立ち上る「鉄輪（かんなわ）温泉」です。秋のハイライトは、別府ロープウェイで登る「鶴見岳」。山頂から山麓へと駆け下りる紅葉グラデーションと、眼下に広がる別府湾・由布岳の360度大パノラマは圧巻です。観光後は、石畳の路地から立ち上る湯けむりを眺めながら、約100度の温泉蒸気釜で素材の旨味を凝縮させた名物「地獄蒸し料理」や豊後牛を、ふるさと納税トラベルクーポンでお得に心ゆくまで満喫しましょう。
          </p>

          <div className="grid md:grid-cols-3 gap-4 pt-2">
            
            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm space-y-2">
              <h3 className="font-bold text-stone-900 text-lg flex items-center gap-2">
                <span className="w-7 h-7 rounded-full bg-amber-100 text-amber-800 text-sm font-bold flex items-center justify-center">1</span>
                別府ロープウェイで行く鶴見岳の錦秋パノラマ
              </h3>
              <p className="text-stone-700 text-sm leading-relaxed pl-9">
                標高1,375mの山頂まで約10分の空中散歩。秋にはナナカマドやモミジが山肌を赤く染め、天気が良ければ遠く四国まで見渡せる絶景が広がります。
              </p>
            </div>
  

            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm space-y-2">
              <h3 className="font-bold text-stone-900 text-lg flex items-center gap-2">
                <span className="w-7 h-7 rounded-full bg-amber-100 text-amber-800 text-sm font-bold flex items-center justify-center">2</span>
                江戸時代から続く伝統の調理法「地獄蒸し料理」体験
              </h3>
              <p className="text-stone-700 text-sm leading-relaxed pl-9">
                高温の温泉噴気で一気に蒸し上げる地獄蒸し。余分な脂が落ち、温泉の塩分とミネラルが素材本来の甘みと旨味を極限まで引き出します。
              </p>
            </div>
  

            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm space-y-2">
              <h3 className="font-bold text-stone-900 text-lg flex items-center gap-2">
                <span className="w-7 h-7 rounded-full bg-amber-100 text-amber-800 text-sm font-bold flex items-center justify-center">3</span>
                大分ブランド「豊後牛（おおいた和牛）」＆関アジ・関サバ
              </h3>
              <p className="text-stone-700 text-sm leading-relaxed pl-9">
                きめ細かな霜降りととろける旨味の「おおいた和牛」、豊後水道の激流で育った身の引き締まった高級魚「関アジ」「関サバ」の姿造りを贅沢に堪能できます。
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
            
            <div key="kannawa_miyukiso" className="bg-white rounded-3xl border border-stone-200/90 shadow-md overflow-hidden hover:shadow-xl transition duration-300">
              <div className="bg-gradient-to-r from-amber-700 to-amber-900 text-amber-50 px-6 py-3 text-xs md:text-sm font-bold flex justify-between items-center">
                <span>民芸調の温もりと絶品の手作り地獄蒸し会席！源泉掛け流し露天風呂と心のこもったおもてなし</span>
                <span className="bg-amber-500/30 text-amber-200 text-xs px-2.5 py-0.5 rounded-full border border-amber-400/40">厳選名宿 第1選</span>
              </div>
              <div className="p-6 md:p-8 space-y-6">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="bg-amber-100 text-amber-900 text-xs font-bold px-2.5 py-1 rounded-md">
                      ふるさと納税トラベルクーポン対象
                    </span>
                    <span className="text-amber-800 font-bold text-sm">
                      ★ 4.75 <span className="text-stone-400 text-xs">(192件)</span>
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold font-serif text-stone-900">
                    別府鉄輪温泉　旅館　みゆき屋
                  </h3>
                  <p className="text-xs md:text-sm text-stone-500 mt-1">
                    📍 大分県別府市鉄輪東6組 ｜ 別府駅よりタクシーで約１５分／別府ＩＣから約７分※ナビは正確でない場合があります。お電話でお尋ねください。
                  </p>
                </div>

                <div className="grid md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-6">
                    <div className="relative aspect-video rounded-2xl overflow-hidden shadow-inner bg-stone-100 group">
                      <img
                        src="https://img.travel.rakuten.co.jp/share/HOTEL/30969/30969.jpg"
                        alt="別府鉄輪温泉　旅館　みゆき屋"
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-6 space-y-4">
                    <p className="text-stone-700 text-sm md:text-base leading-relaxed">
                      名物！蒸し湯も人気♪レトロな空間と心温まるおもてなしが自慢！
                    </p>
                    <div className="bg-stone-50 rounded-xl p-4 border border-stone-200/60 text-xs space-y-1.5 text-stone-600">
                      <div><strong className="text-stone-800">♨️ 特徴・魅力：</strong> 名物！蒸し湯も人気♪レトロな空間と心温まるおもてなしが自慢！...</div>
                      <div><strong className="text-stone-800">🚗 アクセス：</strong> 別府駅よりタクシーで約１５分／別府ＩＣから約７分※ナビは正確でない場合があります。お電話でお尋ねください。</div>
                      <div><strong className="text-stone-800">💰 料金目安：</strong> <span className="text-amber-900 font-bold text-sm">1名あたり 7,700円〜</span>（※クーポン利用で実質2,000円）</div>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F30969%2F30969.html"
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
    

            <div key="kannawa_utsuwa" className="bg-white rounded-3xl border border-stone-200/90 shadow-md overflow-hidden hover:shadow-xl transition duration-300">
              <div className="bg-gradient-to-r from-amber-700 to-amber-900 text-amber-50 px-6 py-3 text-xs md:text-sm font-bold flex justify-between items-center">
                <span>日本伝統の器と現代アートが調和する隠れ家温泉旅館！旬の大分食材を美しく盛り付けた懐石</span>
                <span className="bg-amber-500/30 text-amber-200 text-xs px-2.5 py-0.5 rounded-full border border-amber-400/40">厳選名宿 第2選</span>
              </div>
              <div className="p-6 md:p-8 space-y-6">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="bg-amber-100 text-amber-900 text-xs font-bold px-2.5 py-1 rounded-md">
                      ふるさと納税トラベルクーポン対象
                    </span>
                    <span className="text-amber-800 font-bold text-sm">
                      ★ 4.60 <span className="text-stone-400 text-xs">(329件)</span>
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold font-serif text-stone-900">
                    日本旅館　器　別府鉄輪
                  </h3>
                  <p className="text-xs md:text-sm text-stone-500 mt-1">
                    📍 大分県別府市鉄輪東4組-2 ｜ 鉄輪バスターミナルより徒歩5分・別府ICより車で10分・別府駅より車で15分・大分空港より車で50分
                  </p>
                </div>

                <div className="grid md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-6">
                    <div className="relative aspect-video rounded-2xl overflow-hidden shadow-inner bg-stone-100 group">
                      <img
                        src="https://img.travel.rakuten.co.jp/share/HOTEL/166919/166919.jpg"
                        alt="日本旅館　器　別府鉄輪"
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-6 space-y-4">
                    <p className="text-stone-700 text-sm md:text-base leading-relaxed">
                      本館は総檜造り貸切露天風呂や無料生ビールなど本館限定特典が充実　離れは全室露天風呂・内湯付き
                    </p>
                    <div className="bg-stone-50 rounded-xl p-4 border border-stone-200/60 text-xs space-y-1.5 text-stone-600">
                      <div><strong className="text-stone-800">♨️ 特徴・魅力：</strong> 本館は総檜造り貸切露天風呂や無料生ビールなど本館限定特典が充実　離れは全室露天風呂・内湯付き...</div>
                      <div><strong className="text-stone-800">🚗 アクセス：</strong> 鉄輪バスターミナルより徒歩5分・別府ICより車で10分・別府駅より車で15分・大分空港より車で50分</div>
                      <div><strong className="text-stone-800">💰 料金目安：</strong> <span className="text-amber-900 font-bold text-sm">1名あたり 9,053円〜</span>（※クーポン利用で実質2,000円）</div>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F166919%2F166919.html"
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
    

            <div key="kannawa_kannawaso" className="bg-white rounded-3xl border border-stone-200/90 shadow-md overflow-hidden hover:shadow-xl transition duration-300">
              <div className="bg-gradient-to-r from-amber-700 to-amber-900 text-amber-50 px-6 py-3 text-xs md:text-sm font-bold flex justify-between items-center">
                <span>源泉100%掛け流しの美肌湯とアットホームな滞在！地獄蒸しと豊後牛をリーズナブルに満喫</span>
                <span className="bg-amber-500/30 text-amber-200 text-xs px-2.5 py-0.5 rounded-full border border-amber-400/40">厳選名宿 第3選</span>
              </div>
              <div className="p-6 md:p-8 space-y-6">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="bg-amber-100 text-amber-900 text-xs font-bold px-2.5 py-1 rounded-md">
                      ふるさと納税トラベルクーポン対象
                    </span>
                    <span className="text-amber-800 font-bold text-sm">
                      ★ 4.38 <span className="text-stone-400 text-xs">(191件)</span>
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold font-serif text-stone-900">
                    別府鉄輪温泉　かんなわ荘
                  </h3>
                  <p className="text-xs md:text-sm text-stone-500 mt-1">
                    📍 大分県別府市井田2組 ｜ JR別府駅から車で13分、亀の井バス停から徒歩5分、大分交通バス停から徒歩1分
                  </p>
                </div>

                <div className="grid md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-6">
                    <div className="relative aspect-video rounded-2xl overflow-hidden shadow-inner bg-stone-100 group">
                      <img
                        src="https://img.travel.rakuten.co.jp/share/HOTEL/137784/137784.jpg"
                        alt="別府鉄輪温泉　かんなわ荘"
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-6 space-y-4">
                    <p className="text-stone-700 text-sm md:text-base leading-relaxed">
                      【貸切湯無料】鉄輪散策に抜群の立地！掛け流しの温泉と手作り料理で心も身体もほっこり♪
                    </p>
                    <div className="bg-stone-50 rounded-xl p-4 border border-stone-200/60 text-xs space-y-1.5 text-stone-600">
                      <div><strong className="text-stone-800">♨️ 特徴・魅力：</strong> 【貸切湯無料】鉄輪散策に抜群の立地！掛け流しの温泉と手作り料理で心も身体もほっこり♪...</div>
                      <div><strong className="text-stone-800">🚗 アクセス：</strong> JR別府駅から車で13分、亀の井バス停から徒歩5分、大分交通バス停から徒歩1分</div>
                      <div><strong className="text-stone-800">💰 料金目安：</strong> <span className="text-amber-900 font-bold text-sm">1名あたり 6,300円〜</span>（※クーポン利用で実質2,000円）</div>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F137784%2F137784.html"
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
              【1泊2日】別府鉄輪温泉 旅館 みゆき屋を拠点にするおすすめ滞在モデルコース
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-l-2 border-amber-500 pl-4 md:pl-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="bg-amber-600 text-white text-xs font-bold px-2.5 py-1 rounded">1日目</span>
                <h3 className="font-bold text-stone-900 text-base md:text-lg">到着〜チェックインと名湯巡り</h3>
              </div>
              <ul className="text-xs md:text-sm text-stone-600 space-y-2 leading-relaxed">
                <li>・<strong className="text-stone-800">14:00〜</strong> 別府（大分）駅よりアクセス。別府駅よりタクシーで約１５分／別府ＩＣから約７分※ナビは正確でない場合があります。</li>
                <li>・<strong className="text-stone-800">15:30〜</strong> 「別府鉄輪温泉 旅館 みゆき屋」にチェックイン。名物！蒸し湯も人気♪レトロな空間と心温まるおもてなしが自慢！などの宿の特徴に期待を高めつつ客室へ。</li>
                <li>・<strong className="text-stone-800">17:00〜</strong> 「別府鉄輪温泉 旅館 みゆき屋」の湯処へ。名物！蒸し湯も人気♪レトロな空間と心温まるおもてなしが自慢！とともに、夕暮れの特別な寛ぎを満喫。</li>
                <li>・<strong className="text-stone-800">19:00〜</strong> 「別府鉄輪温泉 旅館 みゆき屋」でいただく旬の夕食。地場産の味覚を取り入れたおもてなし料理を五感でじっくり味わう贅沢なひととき。</li>
              </ul>
            </div>
            <div className="border-l-2 border-teal-500 pl-4 md:pl-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="bg-teal-600 text-white text-xs font-bold px-2.5 py-1 rounded">2日目</span>
                <h3 className="font-bold text-stone-900 text-base md:text-lg">爽快な朝湯〜周辺散策と帰路へ</h3>
              </div>
              <ul className="text-xs md:text-sm text-stone-600 space-y-2 leading-relaxed">
                <li>・<strong className="text-stone-800">07:00〜</strong> 朝の光が差し込む「別府鉄輪温泉 旅館 みゆき屋」の湯船へ。清々しい空気の中で手足を伸ばし、心地よい目覚めを迎える。</li>
                <li>・<strong className="text-stone-800">08:00〜</strong> 「別府鉄輪温泉 旅館 みゆき屋」こだわりの朝食を堪能。炊きたてのごはんや身体に優しい料理で、一日のエネルギーをチャージ。</li>
                <li>・<strong className="text-stone-800">10:00〜</strong> チェックアウト後は近隣エリアを観光。本記事でご紹介した「日本旅館 器 別府鉄輪」の周辺スポットや名産店に立ち寄り、お土産を選んで帰路へ。</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-stone-50 rounded-2xl p-6 md:p-10 border border-stone-200/80 mb-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              よくある質問（FAQ）と別府鉄輪温泉 旅館 みゆき屋の滞在ポイント
            </h2>
          </div>
          <div className="space-y-4">
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 「別府鉄輪温泉 旅館 みゆき屋」へのアクセスや移動方法について</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 「別府鉄輪温泉 旅館 みゆき屋」へは、別府駅よりタクシーで約１５分／別府ＩＣから約７分※ナビは正確でない場合があります。最寄りの別府（大分）駅からの経路案内も充実しています。
              </p>
            </details>
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 「別府鉄輪温泉 旅館 みゆき屋」の魅力や予約時のポイントは？</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 「別府鉄輪温泉 旅館 みゆき屋」は『名物！蒸し湯も人気♪レトロな空間と心温まるおもてなしが自慢！』という点が旅行者から高く支持されています。連休や人気シーズンは予約が集中しやすいため、空室状況はお早めのチェックが安心です。
              </p>
            </details>
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. プラン選びや宿の比較で意識すべき点は？</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 「別府鉄輪温泉 旅館 みゆき屋」と「日本旅館 器 別府鉄輪」はそれぞれ立地や施設設備に独自の魅力があります。湯巡り重視か、料理やお部屋の寛ぎ重視かなど、今回の旅の目的に合わせてお選びください。
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
                href="/prefectures/yamaguchi"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                山口県の宿・温泉
              </Link>
              <Link
                href="/prefectures/fukui"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                福井県の宿・温泉
              </Link>
              <Link
                href="/prefectures/iwate"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                岩手県の宿・温泉
              </Link>
            </div>
          
      <HubRelatedPosts currentSlug="furusato-tax-beppu-kannawa-autumn-leaves-stay" />
</div>
        </section>

      </main>
  );
}
