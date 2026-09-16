import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '深さ100mの絶壁が燃える錦秋絵巻！鳴子峡大紅葉＆鳴子温泉郷源泉かけ流し名宿×ふるさと納税完全ガイド【2026年最新秋旅】宮城 | 旅宿クラウド',
  description: '10月中旬〜11月上旬に見頃を迎える東北屈指の紅葉絶景「鳴子峡」。深さ約100mの大峡谷を彩る紅葉と大深沢橋を渡る列車の絶景、日本にある11の旧泉質のうち8種類が集まる奇跡の名湯「鳴子温泉郷」！「旅館大沼」「旅館すがわら」「旅館弁天閣」。仙台牛と宮城の秋の味覚を、楽天ふるさと納税トラベルクーポンで実質2,000円で楽しむ完全ガイド。',
  keywords: [
    'ふるさと納税 温泉',
    'ふるさと納税 宿泊券',
    'ふるさと納税 トラベルクーポン',
    '鳴子峡大紅葉＆鳴子温泉郷・多彩な泉質湯めぐり名宿特集',
    '10月 旅行 おすすめ',
    '11月 旅行 おすすめ',
    '秋 旅行 温泉',
    '紅葉 温泉旅館',
    '楽天トラベル ふるさと納税',
    '実質2000円 温泉'
  ],
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-narukokyo-akiu-autumn-foliage-stay/'
  },
  openGraph: {
    title: '深さ100mの絶壁が燃える錦秋絵巻！鳴子峡大紅葉＆鳴子温泉郷源泉かけ流し名宿×ふるさと納税完全ガイド【2026年最新秋旅】宮城',
    description: '10月中旬〜11月上旬に見頃を迎える東北屈指の紅葉絶景「鳴子峡」。深さ約100mの大峡谷を彩る紅葉と大深沢橋を渡る列車の絶景、日本にある11の旧泉質のうち8種類が集まる奇跡の名湯「鳴子温泉郷」！「旅館大沼」「旅館すがわら」「旅館弁天閣」。仙台牛と宮城の秋の味覚を、楽天ふるさと納税トラベルクーポンで実質2,000円で楽しむ完全ガイド。',
    url: 'https://croud-travel.pages.dev/furusato-tax-narukokyo-akiu-autumn-foliage-stay',
    siteName: '旅宿クラウド',
    locale: 'ja_JP',
    type: 'article',
  }
};

export default function FurusatoNarukokyoAkiuAutumnFoliageStayPage() {
  return (
    <main className="min-h-screen bg-stone-100/60 text-stone-900 pb-20">
      {/* パンくずナビ */}
      <nav aria-label="Breadcrumb" className="max-w-5xl mx-auto px-4 sm:px-6 pt-6 pb-2 text-xs text-stone-500 flex items-center gap-2 flex-wrap">
        <Link href="/" className="hover:text-stone-800 underline">ホーム</Link>
        <span>&gt;</span>
        <Link href="/features" className="hover:text-stone-800 underline">特集一覧</Link>
        <span>&gt;</span>
        <span className="text-stone-800 font-bold">鳴子峡大紅葉＆鳴子温泉郷名宿特集</span>
      </nav>

      {/* ヒーローセクション */}
      <header className="max-w-5xl mx-auto px-4 sm:px-6 pt-4 pb-10">
        <div className="bg-gradient-to-br from-stone-900 via-amber-950 to-stone-900 text-white rounded-3xl p-8 md:p-12 shadow-xl border border-amber-900/40 relative overflow-hidden">
          <div className="relative z-10 space-y-4">
            <span className="inline-block bg-amber-500/20 text-amber-300 text-xs md:text-sm font-bold px-3.5 py-1.5 rounded-full border border-amber-400/30">
              鳴子峡大紅葉＆鳴子温泉郷・多彩な泉質湯めぐり名宿特集
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold font-serif tracking-tight leading-snug">
              深さ100mの絶壁が燃える錦秋絵巻！鳴子峡大紅葉＆鳴子温泉郷源泉かけ流し名宿×ふるさと納税完全ガイド【2026年最新秋旅】宮城
            </h1>
            <p className="text-stone-300 text-sm md:text-base max-w-3xl leading-relaxed">
              10月中旬〜11月上旬に見頃を迎える東北屈指の紅葉絶景「鳴子峡」。深さ約100mの大峡谷を彩る紅葉と大深沢橋を渡る列車の絶景、日本にある11の旧泉質のうち8種類が集まる奇跡の名湯「鳴子温泉郷」！「旅館大沼」「旅館すがわら」「旅館弁天閣」。仙台牛と宮城の秋の味覚を、楽天ふるさと納税トラベルクーポンで実質2,000円で楽しむ完全ガイド。
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
            大峡谷を染め上げる紅葉のグラデーションと、立ちのぼる硫黄の湯煙。国内屈指の湯力を誇る名湯巡りの秋旅へ
          </h2>
          <p className="text-stone-700 text-sm md:text-base leading-relaxed">
            東北地方を代表する秋の絶景スポット、宮城県大崎市の「鳴子峡」。大谷川が削り出した深さ約100m、長さ約2.6kmにわたるV字峡谷の絶壁が、10月中旬から11月上旬にかけてブナ、カエデ、モミジなどで一面鮮やかに色づき、大深沢橋の上から見渡すパノラマやトンネルから姿を現すJR陸羽東線の列車が織りなす情景は絵画のように感動的です。そして峡谷美を堪能した後に訪れたいのが、千百年以上の歴史を刻む「鳴子温泉郷」。日本に存在する11の旧泉質のうち実に8種類もの泉質が集結する稀有な温泉地であり、白濁の硫黄泉から琥珀色の重曹泉、とろりとした美肌湯まで、宿ごとに異なる本物の源泉掛け流しを堪能できます。裏山の離れに佇むプライベート貸切露天風呂と現代湯治が評判の「旅館大沼」、純度100％の美肌自家源泉と貸切風呂を満喫できる「旅館すがわら」、そして鳴子名物のこけしと温かいおもてなしに心和む「旅館弁天閣」。仙台牛や宮城の秋鮭・新米会席とともに、楽天ふるさと納税トラベルクーポン（寄付額の最大30％割引・有効期限3年）を使って実質自己負担2,000円で予約し、心身が解き放たれる秋の湯治旅へ出かけましょう。
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
                  深さ100mの断崖絶壁が赤や黄に染まる！鳴子峡レストハウスからの大パノラマ
                </h3>
              </div>
              <p className="text-stone-600 text-sm md:text-base leading-relaxed pl-11">
                大深沢橋から見下ろす紅葉の大峡谷と渓流。遊歩道の散策では、頭上を覆うモミジのトンネルと落ち葉の絨毯を踏みしめる贅沢な秋の自然美を体感できます。
              </p>
            </div>
  

            <div className="bg-white rounded-2xl p-6 md:p-8 border border-stone-200/80 shadow-xs">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-full bg-amber-100 text-amber-800 font-bold text-sm flex items-center justify-center shrink-0">
                  02
                </span>
                <h3 className="text-lg md:text-xl font-bold text-stone-900 font-serif">
                  日本にある11泉質中8種類が集結！宿ごとに異なる極上の自家源泉かけ流し
                </h3>
              </div>
              <p className="text-stone-600 text-sm md:text-base leading-relaxed pl-11">
                肌をつるつるにする弱アルカリ性炭酸水素塩泉から、濃厚な硫黄泉、温まり効果抜群の塩化物泉まで。多彩な湯殿や貸切風呂で湯巡りを満喫できます。
              </p>
            </div>
  

            <div className="bg-white rounded-2xl p-6 md:p-8 border border-stone-200/80 shadow-xs">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-full bg-amber-100 text-amber-800 font-bold text-sm flex items-center justify-center shrink-0">
                  03
                </span>
                <h3 className="text-lg md:text-xl font-bold text-stone-900 font-serif">
                  最高ランク仙台牛ステーキ＆宮城の新米ひとめぼれ・秋の山菜きのこ会席
                </h3>
              </div>
              <p className="text-stone-600 text-sm md:text-base leading-relaxed pl-11">
                宮城の豊かな大地が育んだ最高級A5ランク仙台牛の陶板焼きや、秋の郷土料理はらこ飯、山のきのこ鍋など、滋味豊かな秋の美食が並びます。
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

            <div key="naruko_onuma" className="bg-white rounded-3xl border border-stone-200/90 shadow-md overflow-hidden hover:shadow-xl transition duration-300">
              <div className="bg-gradient-to-r from-amber-700 to-amber-900 text-amber-50 px-6 py-3 text-xs md:text-sm font-bold flex justify-between items-center">
                <span>宮城県大崎市・裏山の庭園貸切露天風呂「母里の湯」！八つの個性豊かな湯殿を巡る自家源泉の湯治宿</span>
                <span className="bg-amber-500/30 text-amber-200 text-xs px-2.5 py-0.5 rounded-full border border-amber-400/40">厳選名宿 第1選</span>
              </div>
              <div className="p-6 md:p-8 space-y-6">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="bg-amber-100 text-amber-900 text-xs font-bold px-2.5 py-1 rounded-md">
                      ふるさと納税トラベルクーポン対象
                    </span>
                    <span className="text-amber-800 font-bold text-sm">
                      ★ 4.58 <span className="text-stone-400 text-xs">(613件)</span>
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold font-serif text-stone-900">
                    鳴子温泉郷　極上の貸切露天風呂　旅館大沼
                  </h3>
                  <p className="text-xs md:text-sm text-stone-500 mt-1">
                    📍 宮城県大崎市鳴子温泉赤湯34 ｜ 東北新幹線『古川駅』よりＪＲ陸羽東線に乗り換え、『鳴子御殿湯駅』下車、徒歩５分。鳴子温泉からはタクシーで約5分。
                  </p>
                </div>

                <div className="grid md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-6">
                    <div className="relative aspect-video rounded-2xl overflow-hidden shadow-inner bg-stone-100 group">
                      <img
                        src="https://img.travel.rakuten.co.jp/share/HOTEL/106139/106139.jpg"
                        alt="鳴子温泉郷　極上の貸切露天風呂　旅館大沼"
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-6 space-y-4">
                    <p className="text-stone-700 text-sm md:text-base leading-relaxed">
                      東鳴子温泉に位置し、創業百二十年の伝統と現代湯治（湯治リトリート）を融合させた全国的に有名な名湯宿。裏山の森の中に佇む貸切露天風呂「母里（もり）の湯」では、木々に囲まれながら極上の源泉に浸かる至福のプライベート時間を過ごせます。館内にはふかし風呂や重曹泉など趣の異なる8つの湯殿があり、館内だけで湯めぐりが完結。食事は身体に優しい一汁五菜のヘルシー会席や宮城の郷土料理を提供し、心身のデトックスに最適です。
                    </p>
                    <div className="bg-stone-50 rounded-xl p-4 border border-stone-200/60 text-xs space-y-1.5 text-stone-600">
                      <div><strong className="text-stone-800">♨️ 温泉・特徴：</strong> 美肌湯が自慢の宮城・東鳴子温泉の秘湯宿。源泉かけ流しの天然温泉を使用した大浴場・家族風呂をご堪能。</div>
                      <div><strong className="text-stone-800">🚗 駐車場：</strong> 有り　１５台　無料　予約不要</div>
                      <div><strong className="text-stone-800">💰 料金目安：</strong> <span className="text-amber-900 font-bold text-sm">1名あたり 13,530円〜</span>（※クーポン利用で実質2,000円）</div>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F106139%2F106139.html"
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
    

            <div key="naruko_sugawara" className="bg-white rounded-3xl border border-stone-200/90 shadow-md overflow-hidden hover:shadow-xl transition duration-300">
              <div className="bg-gradient-to-r from-amber-700 to-amber-900 text-amber-50 px-6 py-3 text-xs md:text-sm font-bold flex justify-between items-center">
                <span>宮城県大崎市・創業明治六年！美肌の自家源泉100％掛け流しと四つの無料貸切風呂を誇る老舗宿</span>
                <span className="bg-amber-500/30 text-amber-200 text-xs px-2.5 py-0.5 rounded-full border border-amber-400/40">厳選名宿 第2選</span>
              </div>
              <div className="p-6 md:p-8 space-y-6">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="bg-amber-100 text-amber-900 text-xs font-bold px-2.5 py-1 rounded-md">
                      ふるさと納税トラベルクーポン対象
                    </span>
                    <span className="text-amber-800 font-bold text-sm">
                      ★ 4.44 <span className="text-stone-400 text-xs">(447件)</span>
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold font-serif text-stone-900">
                    鳴子温泉　旅館すがわら
                  </h3>
                  <p className="text-xs md:text-sm text-stone-500 mt-1">
                    📍 宮城県大崎市鳴子温泉新屋敷5 ｜ ＪＲ陸羽東線『鳴子温泉駅』より徒歩10分／東北自動車道『古川ＩＣ』より約３５分/高速バス「仙台駅前」から８５分
                  </p>
                </div>

                <div className="grid md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-6">
                    <div className="relative aspect-video rounded-2xl overflow-hidden shadow-inner bg-stone-100 group">
                      <img
                        src="https://img.travel.rakuten.co.jp/share/HOTEL/13456/13456.jpg"
                        alt="鳴子温泉　旅館すがわら"
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-6 space-y-4">
                    <p className="text-stone-700 text-sm md:text-base leading-relaxed">
                      鳴子温泉街の中心に佇み、敷地内から湧き出る毎分豊富な自家源泉を惜しみなく掛け流す老舗温泉旅館。ナトリウム-硫酸塩・炭酸水素塩・塩化物泉の泉質は、メタケイ酸を豊富に含み、肌触りがとろりとした天然の化粧水のような美肌効果を誇ります。広々とした大浴場のほか、趣の異なる4つの貸切風呂を無料で何度でも利用可能。夕食には地元宮城の旬の食材を使った手作り会席料理をお部屋食などでゆっくり味わえます。
                    </p>
                    <div className="bg-stone-50 rounded-xl p-4 border border-stone-200/60 text-xs space-y-1.5 text-stone-600">
                      <div><strong className="text-stone-800">♨️ 温泉・特徴：</strong> 貸切風呂（自家源泉掛け流し）は４箇所有り全て無料！</div>
                      <div><strong className="text-stone-800">🚗 駐車場：</strong> 有り　3０台　無料　先着順 バイク用車庫有り 無料</div>
                      <div><strong className="text-stone-800">💰 料金目安：</strong> <span className="text-amber-900 font-bold text-sm">1名あたり 4,500円〜</span>（※クーポン利用で実質2,000円）</div>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F13456%2F13456.html"
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
    

            <div key="naruko_bentenkaku" className="bg-white rounded-3xl border border-stone-200/90 shadow-md overflow-hidden hover:shadow-xl transition duration-300">
              <div className="bg-gradient-to-r from-amber-700 to-amber-900 text-amber-50 px-6 py-3 text-xs md:text-sm font-bold flex justify-between items-center">
                <span>宮城県大崎市・鳴子温泉駅徒歩3分の好立地！良質な源泉と仙台牛ステーキプランが人気のアットホーム宿</span>
                <span className="bg-amber-500/30 text-amber-200 text-xs px-2.5 py-0.5 rounded-full border border-amber-400/40">厳選名宿 第3選</span>
              </div>
              <div className="p-6 md:p-8 space-y-6">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="bg-amber-100 text-amber-900 text-xs font-bold px-2.5 py-1 rounded-md">
                      ふるさと納税トラベルクーポン対象
                    </span>
                    <span className="text-amber-800 font-bold text-sm">
                      ★ 3.00 <span className="text-stone-400 text-xs">(67件)</span>
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold font-serif text-stone-900">
                    鳴子温泉　旅館弁天閣
                  </h3>
                  <p className="text-xs md:text-sm text-stone-500 mt-1">
                    📍 宮城県大崎市鳴子温泉車湯87 ｜ 【お車】東北道古川ICより約40分【電車】鳴子御殿湯駅より徒歩10分【高速バス】東鳴子赤湯より徒歩10分
                  </p>
                </div>

                <div className="grid md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-6">
                    <div className="relative aspect-video rounded-2xl overflow-hidden shadow-inner bg-stone-100 group">
                      <img
                        src="https://img.travel.rakuten.co.jp/share/HOTEL/5630/5630.jpg"
                        alt="鳴子温泉　旅館弁天閣"
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-6 space-y-4">
                    <p className="text-stone-700 text-sm md:text-base leading-relaxed">
                      JR鳴子温泉駅から徒歩3分の便利な場所に位置し、気兼ねなく寛げる温かなおもてなしが人気の温泉旅館。大浴場と露天風呂には鳴子の名湯が絶え間なく注がれ、旅の疲れをじんわりと癒やしてくれます。夕食には宮城のブランド牛・仙台牛のステーキや陶板焼きをメインにしたボリューム満点の季節会席を提供。鳴子峡へのシャトルバスや散策の拠点としても抜群のフットワークを誇ります。
                    </p>
                    <div className="bg-stone-50 rounded-xl p-4 border border-stone-200/60 text-xs space-y-1.5 text-stone-600">
                      <div><strong className="text-stone-800">♨️ 温泉・特徴：</strong> 「美肌の湯」で癒やす無料貸切露天と24時間楽しめる大浴場の宿</div>
                      <div><strong className="text-stone-800">🚗 駐車場：</strong> 有り　３０台　無料　先着順</div>
                      <div><strong className="text-stone-800">💰 料金目安：</strong> <span className="text-amber-900 font-bold text-sm">1名あたり 7,180円〜</span>（※クーポン利用で実質2,000円）</div>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F5630%2F5630.html"
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

        {/* ふるさと納税クーポン使い方ステップ */}
        <section className="bg-white rounded-3xl p-8 md:p-10 border border-stone-200/80 shadow-sm mb-16">
          <h2 className="text-xl md:text-2xl font-bold font-serif text-stone-800 mb-6 text-center">
            ふるさと納税トラベルクーポンの簡単3ステップ
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/60 text-center">
              <div className="w-10 h-10 rounded-full bg-amber-600 text-white font-bold flex items-center justify-center mx-auto mb-3">1</div>
              <h3 className="font-bold text-stone-900 text-sm mb-2">旅行先自治体に寄付</h3>
              <p className="text-xs text-stone-600 leading-relaxed">楽天ふるさと納税で泊まりたい宿がある市町村のトラベルクーポンを選んで寄付します。</p>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/60 text-center">
              <div className="w-10 h-10 rounded-full bg-amber-600 text-white font-bold flex items-center justify-center mx-auto mb-3">2</div>
              <h3 className="font-bold text-stone-900 text-sm mb-2">クーポンが付与される</h3>
              <p className="text-xs text-stone-600 leading-relaxed">寄付完了後、楽天トラベルのマイクーポンに即時〜数日で付与（有効期間は3年間）。</p>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/60 text-center">
              <div className="w-10 h-10 rounded-full bg-amber-600 text-white font-bold flex items-center justify-center mx-auto mb-3">3</div>
              <h3 className="font-bold text-stone-900 text-sm mb-2">予約時に割引適用</h3>
              <p className="text-xs text-stone-600 leading-relaxed">宿泊予約画面でクーポンを選択。すでに予約済みの宿でも「あとから適用」が可能です。</p>
            </div>
          </div>
          <div className="text-center mt-6">
            <Link
              href="/furusato-tax-travel-beginners-complete-guide"
              className="text-amber-800 font-bold text-xs sm:text-sm hover:underline"
            >
              👉 詳しいお金の流れやワンストップ特例の手順はこちらの完全マニュアルへ
            </Link>
          </div>
        </section>

        {/* 関連特集クロスリンク */}
        <section className="bg-stone-50 rounded-3xl p-8 border border-stone-200/80 mb-16">
          <h2 className="text-lg md:text-xl font-bold font-serif text-stone-800 mb-4">
            あわせて読みたい関連特集
          </h2>
          <ul className="grid sm:grid-cols-2 gap-2">

            <li key="furusato-tax-autumn-foliage-gorge-onsen-stay">
              <Link
                href="/furusato-tax-autumn-foliage-gorge-onsen-stay"
                className="block p-4 rounded-2xl bg-white border border-stone-200 hover:border-amber-400 hover:shadow-sm transition text-stone-800 text-sm font-bold group"
              >
                <span className="text-amber-700 group-hover:text-amber-900 mr-1.5">👉</span>
                【紅葉渓谷美＆清流露天風呂×ふるさと納税】鬼怒川・鳴子・祖谷渓の隠れ宿
              </Link>
            </li>
  

            <li key="furusato-tax-pure-kakenagashi-secret-hotspring-stay">
              <Link
                href="/furusato-tax-pure-kakenagashi-secret-hotspring-stay"
                className="block p-4 rounded-2xl bg-white border border-stone-200 hover:border-amber-400 hover:shadow-sm transition text-stone-800 text-sm font-bold group"
              >
                <span className="text-amber-700 group-hover:text-amber-900 mr-1.5">👉</span>
                【源泉かけ流し秘湯×ふるさと納税】加水・加温なしの本物の湯力を堪能する名宿
              </Link>
            </li>
  

            <li key="furusato-tax-three-medicinal-hotsprings-stay">
              <Link
                href="/furusato-tax-three-medicinal-hotsprings-stay"
                className="block p-4 rounded-2xl bg-white border border-stone-200 hover:border-amber-400 hover:shadow-sm transition text-stone-800 text-sm font-bold group"
              >
                <span className="text-amber-700 group-hover:text-amber-900 mr-1.5">👉</span>
                【日本三大薬湯×ふるさと納税】有馬・草津・松之山の万病を癒やす名湯宿
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
    </main>
  );
}
