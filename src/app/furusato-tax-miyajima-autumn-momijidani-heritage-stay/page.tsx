import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '海に浮かぶ大鳥居と紅葉谷の錦絵！世界遺産・安芸の宮島＆厳島神社秋詣名門旅館×ふるさと納税完全ガイド【2026年最新秋旅】 | 旅宿クラウド',
  description: '11月中旬〜下旬、約700本のもみじが朱に染まる宮島屈指の名所「紅葉谷公園」と世界遺産「厳島神社」。大鳥居の夜間ライトアップや弥山の絶景パノラマを島内宿泊で独占！「宮島グランドホテル 有もと」「宮島ホテル まこと」「ホテル 菊乃家」。名物牡蠣・穴子飯・広島牛を、楽天ふるさと納税トラベルクーポンで実質2,000円で楽しむ完全ガイド。',
  keywords: [
    'ふるさと納税 温泉',
    'ふるさと納税 宿泊券',
    'ふるさと納税 トラベルクーポン',
    '世界遺産宮島・紅葉谷公園＆厳島神社秋詣名旅館特集',
    '10月 旅行 おすすめ',
    '11月 旅行 おすすめ',
    '秋 旅行 温泉',
    '紅葉 温泉旅館',
    '楽天トラベル ふるさと納税',
    '実質2000円 温泉'
  ],
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-miyajima-autumn-momijidani-heritage-stay/'
  },
  openGraph: {
    title: '海に浮かぶ大鳥居と紅葉谷の錦絵！世界遺産・安芸の宮島＆厳島神社秋詣名門旅館×ふるさと納税完全ガイド【2026年最新秋旅】',
    description: '11月中旬〜下旬、約700本のもみじが朱に染まる宮島屈指の名所「紅葉谷公園」と世界遺産「厳島神社」。大鳥居の夜間ライトアップや弥山の絶景パノラマを島内宿泊で独占！「宮島グランドホテル 有もと」「宮島ホテル まこと」「ホテル 菊乃家」。名物牡蠣・穴子飯・広島牛を、楽天ふるさと納税トラベルクーポンで実質2,000円で楽しむ完全ガイド。',
    url: 'https://croud-travel.pages.dev/furusato-tax-miyajima-autumn-momijidani-heritage-stay',
    siteName: '旅宿クラウド',
    locale: 'ja_JP',
    type: 'article',
  }
};

export default function FurusatoMiyajimaAutumnMomijidaniStayPage() {
  return (
    <main className="min-h-screen bg-stone-100/60 text-stone-900 pb-20">
      {/* パンくずナビ */}
      <nav aria-label="Breadcrumb" className="max-w-5xl mx-auto px-4 sm:px-6 pt-6 pb-2 text-xs text-stone-500 flex items-center gap-2 flex-wrap">
        <Link href="/" className="hover:text-stone-800 underline">ホーム</Link>
        <span>&gt;</span>
        <Link href="/features" className="hover:text-stone-800 underline">特集一覧</Link>
        <span>&gt;</span>
        <span className="text-stone-800 font-bold">安芸の宮島・紅葉谷公園＆厳島神社名旅館特集</span>
      </nav>

      {/* ヒーローセクション */}
      <header className="max-w-5xl mx-auto px-4 sm:px-6 pt-4 pb-10">
        <div className="bg-gradient-to-br from-stone-900 via-amber-950 to-stone-900 text-white rounded-3xl p-8 md:p-12 shadow-xl border border-amber-900/40 relative overflow-hidden">
          <div className="relative z-10 space-y-4">
            <span className="inline-block bg-amber-500/20 text-amber-300 text-xs md:text-sm font-bold px-3.5 py-1.5 rounded-full border border-amber-400/30">
              世界遺産宮島・紅葉谷公園＆厳島神社秋詣名旅館特集
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold font-serif tracking-tight leading-snug">
              海に浮かぶ大鳥居と紅葉谷の錦絵！世界遺産・安芸の宮島＆厳島神社秋詣名門旅館×ふるさと納税完全ガイド【2026年最新秋旅】
            </h1>
            <p className="text-stone-300 text-sm md:text-base max-w-3xl leading-relaxed">
              11月中旬〜下旬、約700本のもみじが朱に染まる宮島屈指の名所「紅葉谷公園」と世界遺産「厳島神社」。大鳥居の夜間ライトアップや弥山の絶景パノラマを島内宿泊で独占！「宮島グランドホテル 有もと」「宮島ホテル まこと」「ホテル 菊乃家」。名物牡蠣・穴子飯・広島牛を、楽天ふるさと納税トラベルクーポンで実質2,000円で楽しむ完全ガイド。
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
            潮風に揺れる紅葉谷のモミジと、海上に輝く嚴島神社の大鳥居。島に泊まるからこそ出会える静寂と幽玄の秋時間へ
          </h2>
          <p className="text-stone-700 text-sm md:text-base leading-relaxed">
            日本三景の一つにして世界文化遺産に登録されている広島県「安芸の宮島（厳島）」。11月中旬から下旬にかけて、弥山の麓に広がる「紅葉谷公園」では約700本ものイロハモミジやオオモミジが一斉に色づき、朱塗りの紅葉橋と燃えるような紅葉が織りなす情景は息を呑むほどの美しさです。そして宮島観光の真髄を味わうなら「宮島島内への宿泊」が絶対のおすすめ。最終フェリーが出た後の夜には観光客の喧騒が引き、美しくライトアップされた嚴島神社の大鳥居を静寂の中で参拝。早朝には清らかな朝靄に包まれた神社境内や紅葉谷公園を誰にも邪魔されずに散策できます。創業四百年余りの歴史を誇り厳島神社まで徒歩3分の名門「宮島グランドホテル 有もと」、宮島港近くの高台に位置し瀬戸内海の眺望と真心のおもてなしを届ける「宮島ホテル まこと」、そして紅葉谷公園の入口に建ち足湯カフェや宮島潮湯温泉を備えた「ホテル 菊乃家」。広島名物の秋牡蠣や焼き穴子、広島牛の会席料理を味わいながら、楽天ふるさと納税トラベルクーポン（寄付額の最大30％割引・有効期限3年）を使って実質自己負担2,000円で賢く予約し、記憶に永遠に残る宮島の秋詣へ出かけましょう。
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
                  約700本が色づく「紅葉谷公園」＆弥山展望台からの瀬戸内海多島美パノラマ
                </h3>
              </div>
              <p className="text-stone-600 text-sm md:text-base leading-relaxed pl-11">
                江戸時代から植栽された名所・紅葉谷公園の真紅のトンネル。ロープウェーで登る弥山山頂からは、紅葉と青い瀬戸内海が織りなす絶景を見渡せます。
              </p>
            </div>
  

            <div className="bg-white rounded-2xl p-6 md:p-8 border border-stone-200/80 shadow-xs">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-full bg-amber-100 text-amber-800 font-bold text-sm flex items-center justify-center shrink-0">
                  02
                </span>
                <h3 className="text-lg md:text-xl font-bold text-stone-900 font-serif">
                  島内宿泊者だけの特権！夜間ライトアップの大鳥居参拝と早朝の静寂な厳島神社
                </h3>
              </div>
              <p className="text-stone-600 text-sm md:text-base leading-relaxed pl-11">
                日帰りの観光客が帰った後の宮島は幻想的な静けさに包まれます。潮の満ち引きで表情を変える大鳥居の夜景や朝の清々しい空気の中での参拝は格別です。
              </p>
            </div>
  

            <div className="bg-white rounded-2xl p-6 md:p-8 border border-stone-200/80 shadow-xs">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-full bg-amber-100 text-amber-800 font-bold text-sm flex items-center justify-center shrink-0">
                  03
                </span>
                <h3 className="text-lg md:text-xl font-bold text-stone-900 font-serif">
                  秋が旬の「広島牡蠣」・名物「焼き穴子飯」・特選「広島牛」の極上会席
                </h3>
              </div>
              <p className="text-stone-600 text-sm md:text-base leading-relaxed pl-11">
                身が太り旨味が凝縮した秋の広島牡蠣（焼き牡蠣・カキフライ）や、ふっくら香ばしい穴子飯など、瀬戸内の豊かな恵みを贅沢に堪能できます。
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

            <div key="miyajima_arimoto" className="bg-white rounded-3xl border border-stone-200/90 shadow-md overflow-hidden hover:shadow-xl transition duration-300">
              <div className="bg-gradient-to-r from-amber-700 to-amber-900 text-amber-50 px-6 py-3 text-xs md:text-sm font-bold flex justify-between items-center">
                <span>広島県廿日市市・創業四百年余り！厳島神社まで徒歩3分の特等席に佇む宮島屈指の老舗名門旅館</span>
                <span className="bg-amber-500/30 text-amber-200 text-xs px-2.5 py-0.5 rounded-full border border-amber-400/40">厳選名宿 第1選</span>
              </div>
              <div className="p-6 md:p-8 space-y-6">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="bg-amber-100 text-amber-900 text-xs font-bold px-2.5 py-1 rounded-md">
                      ふるさと納税トラベルクーポン対象
                    </span>
                    <span className="text-amber-800 font-bold text-sm">
                      ★ 4.57 <span className="text-stone-400 text-xs">(1,285件)</span>
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold font-serif text-stone-900">
                    宮島グランドホテル　有もと
                  </h3>
                  <p className="text-xs md:text-sm text-stone-500 mt-1">
                    📍 広島県廿日市市宮島町南町364 ｜ 宮島口桟橋よりフェリーで１０分～宮島桟橋よりマイクロバスにて送迎
                  </p>
                </div>

                <div className="grid md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-6">
                    <div className="relative aspect-video rounded-2xl overflow-hidden shadow-inner bg-stone-100 group">
                      <img
                        src="https://img.travel.rakuten.co.jp/share/HOTEL/18848/18848.jpg"
                        alt="宮島グランドホテル　有もと"
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-6 space-y-4">
                    <p className="text-stone-700 text-sm md:text-base leading-relaxed">
                      江戸初期の創業以来、厳島神社の社頭で旅人を迎え続けてきた宮島で最も歴史ある格式高き名門宿。厳島神社まで徒歩3分、紅葉谷公園へもすぐという最高のロケーションに位置し、客室からは千畳閣や宮島の森の景観を望めます。大浴場には数寄屋造りの風情ある露天風呂を完備。夕食には瀬戸内の獲れたて小魚や旬の牡蠣、特選広島牛を熟練の料理人が仕立てる本格会席料理をお部屋や料亭個室で優雅に味わえます。
                    </p>
                    <div className="bg-stone-50 rounded-xl p-4 border border-stone-200/60 text-xs space-y-1.5 text-stone-600">
                      <div><strong className="text-stone-800">♨️ 温泉・特徴：</strong> すべてはお客様の満足と笑顔のために。宮島の歴史とともに時を重ねる、世界遺産「厳島神社」に最も近い宿。</div>
                      <div><strong className="text-stone-800">🚗 駐車場：</strong> 有り　５台　無料　先着順</div>
                      <div><strong className="text-stone-800">💰 料金目安：</strong> <span className="text-amber-900 font-bold text-sm">1名あたり 14,200円〜</span>（※クーポン利用で実質2,000円）</div>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F18848%2F18848.html"
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
    

            <div key="miyajima_makoto" className="bg-white rounded-3xl border border-stone-200/90 shadow-md overflow-hidden hover:shadow-xl transition duration-300">
              <div className="bg-gradient-to-r from-amber-700 to-amber-900 text-amber-50 px-6 py-3 text-xs md:text-sm font-bold flex justify-between items-center">
                <span>広島県廿日市市・宮島港から徒歩5分の閑静な高台！広々とした純和風客室と心温まるおもてなしの宿</span>
                <span className="bg-amber-500/30 text-amber-200 text-xs px-2.5 py-0.5 rounded-full border border-amber-400/40">厳選名宿 第2選</span>
              </div>
              <div className="p-6 md:p-8 space-y-6">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="bg-amber-100 text-amber-900 text-xs font-bold px-2.5 py-1 rounded-md">
                      ふるさと納税トラベルクーポン対象
                    </span>
                    <span className="text-amber-800 font-bold text-sm">
                      ★ 4.23 <span className="text-stone-400 text-xs">(414件)</span>
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold font-serif text-stone-900">
                    宮島ホテルまこと
                  </h3>
                  <p className="text-xs md:text-sm text-stone-500 mt-1">
                    📍 広島県廿日市市宮島町755 ｜ ＪＲ山陽本線または広島電鉄「宮島口駅」下車、宮島口桟橋より船にて約１０分。【厳島神社まで徒歩約10分】
                  </p>
                </div>

                <div className="grid md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-6">
                    <div className="relative aspect-video rounded-2xl overflow-hidden shadow-inner bg-stone-100 group">
                      <img
                        src="https://img.travel.rakuten.co.jp/share/HOTEL/18097/18097.jpg"
                        alt="宮島ホテルまこと"
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-6 space-y-4">
                    <p className="text-stone-700 text-sm md:text-base leading-relaxed">
                      宮島桟橋から徒歩約5分、要害山を背にした静かな高台に佇む純和風温泉旅館。ゆったりとした広さの和室客室からは宮島の町並みや瀬戸内海を望むことができ、家族連れやグループ旅行にも大好評。大浴場「嚴島の湯」で旅の疲れをほぐした後は、瀬戸内の新鮮な海の幸や旬の牡蠣、広島牛を使ったボリューム満点の郷土会席料理に舌鼓。スタッフの温かな心配りと行き届いたサービスが高く評価されています。
                    </p>
                    <div className="bg-stone-50 rounded-xl p-4 border border-stone-200/60 text-xs space-y-1.5 text-stone-600">
                      <div><strong className="text-stone-800">♨️ 温泉・特徴：</strong> いにしえの歴史と自然にふれる宿</div>
                      <div><strong className="text-stone-800">🚗 駐車場：</strong> 有り(１０台無料)島内は交通規制がございますので宮島口の有料駐車場にお止め置き下さい。</div>
                      <div><strong className="text-stone-800">💰 料金目安：</strong> <span className="text-amber-900 font-bold text-sm">1名あたり 12,100円〜</span>（※クーポン利用で実質2,000円）</div>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F18097%2F18097.html"
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
    

            <div key="miyajima_kikunoya" className="bg-white rounded-3xl border border-stone-200/90 shadow-md overflow-hidden hover:shadow-xl transition duration-300">
              <div className="bg-gradient-to-r from-amber-700 to-amber-900 text-amber-50 px-6 py-3 text-xs md:text-sm font-bold flex justify-between items-center">
                <span>広島県廿日市市・紅葉谷公園入口の好立地！宮島潮湯温泉と天然木テラスの足湯カフェが人気の宿</span>
                <span className="bg-amber-500/30 text-amber-200 text-xs px-2.5 py-0.5 rounded-full border border-amber-400/40">厳選名宿 第3選</span>
              </div>
              <div className="p-6 md:p-8 space-y-6">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="bg-amber-100 text-amber-900 text-xs font-bold px-2.5 py-1 rounded-md">
                      ふるさと納税トラベルクーポン対象
                    </span>
                    <span className="text-amber-800 font-bold text-sm">
                      ★ 4.41 <span className="text-stone-400 text-xs">(625件)</span>
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold font-serif text-stone-900">
                    宮島　ホテル菊乃家
                  </h3>
                  <p className="text-xs md:text-sm text-stone-500 mt-1">
                    📍 広島県廿日市市宮島町335 ｜ 宮島桟橋より徒歩15分（ホテルより送迎あり。フェリー乗船前にお電話いただけましたらお迎えに参ります）
                  </p>
                </div>

                <div className="grid md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-6">
                    <div className="relative aspect-video rounded-2xl overflow-hidden shadow-inner bg-stone-100 group">
                      <img
                        src="https://img.travel.rakuten.co.jp/share/HOTEL/129976/129976.jpg"
                        alt="宮島　ホテル菊乃家"
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-6 space-y-4">
                    <p className="text-stone-700 text-sm md:text-base leading-relaxed">
                      厳島神社まで徒歩5分、紅葉谷公園の入口すぐという絶好の場所に建つ和モダン旅館。館内には宮島の海水を汲み上げたミネラル豊富な「宮島潮湯温泉」の大浴場を備え、身体の芯から温まります。宿のテラスには誰でも利用できる足湯カフェがあり、宮島の自然風情を感じながらリラックス可能。夕食には旬の牡蠣料理や穴子の重ね蒸しなど広島・宮島の味覚をふんだんに盛り込んだ創作料理を堪能できます。
                    </p>
                    <div className="bg-stone-50 rounded-xl p-4 border border-stone-200/60 text-xs space-y-1.5 text-stone-600">
                      <div><strong className="text-stone-800">♨️ 温泉・特徴：</strong> ２０２５年８月菊乃家別邸オープン。宮島の自然に囲まれひっそりと佇む、大人の隠れ家宿。</div>
                      <div><strong className="text-stone-800">🚗 駐車場：</strong> 駐車場なし（フェリーご乗船前の一般の駐車場にお止めください）</div>
                      <div><strong className="text-stone-800">💰 料金目安：</strong> <span className="text-amber-900 font-bold text-sm">1名あたり 10,010円〜</span>（※クーポン利用で実質2,000円）</div>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F129976%2F129976.html"
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

            <li key="furusato-tax-kyoto-arashiyama-autumn-leaves-illumination-stay">
              <Link
                href="/furusato-tax-kyoto-arashiyama-autumn-leaves-illumination-stay"
                className="block p-4 rounded-2xl bg-white border border-stone-200 hover:border-amber-400 hover:shadow-sm transition text-stone-800 text-sm font-bold group"
              >
                <span className="text-amber-700 group-hover:text-amber-900 mr-1.5">👉</span>
                【京都嵐山紅葉ライトアップ＆名門温泉宿×ふるさと納税】古都の錦秋旅
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
    </main>
  );
}
