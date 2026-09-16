import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '黄金色に輝くススキの大海原！箱根仙石原ススキ草原＆大涌谷にごり湯温泉名宿×ふるさと納税完全ガイド【2026年最新秋旅】 | 旅宿クラウド',
  description: '10月中旬〜11月上旬に見頃を迎える箱根屈指の秋の風物詩「仙石原ススキ草原」。台ヶ岳の山裾一面が黄金色に輝く絶景の散策道と、大涌谷から引湯する乳白色の濃厚にごり湯を堪能！「万寿屋旅館」「箱根ホテル花月園」「センチュリオン箱根別邸」など厳選宿を、楽天ふるさと納税トラベルクーポンで実質2,000円で楽しむ完全ガイド。',
  keywords: [
    'ふるさと納税 温泉',
    'ふるさと納税 宿泊券',
    'ふるさと納税 トラベルクーポン',
    '箱根仙石原黄金ススキ草原＆大涌谷白濁にごり湯温泉宿特集',
    '10月 旅行 おすすめ',
    '11月 旅行 おすすめ',
    '秋 旅行 温泉',
    '紅葉 温泉旅館',
    '楽天トラベル ふるさと納税',
    '実質2000円 温泉'
  ],
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-autumn-sengokuhara-silver-grass-hotspring-stay/'
  },
  openGraph: {
    title: '黄金色に輝くススキの大海原！箱根仙石原ススキ草原＆大涌谷にごり湯温泉名宿×ふるさと納税完全ガイド【2026年最新秋旅】',
    description: '10月中旬〜11月上旬に見頃を迎える箱根屈指の秋の風物詩「仙石原ススキ草原」。台ヶ岳の山裾一面が黄金色に輝く絶景の散策道と、大涌谷から引湯する乳白色の濃厚にごり湯を堪能！「万寿屋旅館」「箱根ホテル花月園」「センチュリオン箱根別邸」など厳選宿を、楽天ふるさと納税トラベルクーポンで実質2,000円で楽しむ完全ガイド。',
    url: 'https://croud-travel.pages.dev/furusato-tax-autumn-sengokuhara-silver-grass-hotspring-stay',
    siteName: '旅宿クラウド',
    locale: 'ja_JP',
    type: 'article',
  }
};

export default function FurusatoAutumnSengokuharaSilverGrassStayPage() {
  return (
    <main className="min-h-screen bg-stone-100/60 text-stone-900 pb-20">
      {/* パンくずナビ */}
      <nav aria-label="Breadcrumb" className="max-w-5xl mx-auto px-4 sm:px-6 pt-6 pb-2 text-xs text-stone-500 flex items-center gap-2 flex-wrap">
        <Link href="/" className="hover:text-stone-800 underline">ホーム</Link>
        <span>&gt;</span>
        <Link href="/features" className="hover:text-stone-800 underline">特集一覧</Link>
        <span>&gt;</span>
        <span className="text-stone-800 font-bold">箱根仙石原ススキ草原＆にごり湯名宿特集</span>
      </nav>

      {/* ヒーローセクション */}
      <header className="max-w-5xl mx-auto px-4 sm:px-6 pt-4 pb-10">
        <div className="bg-gradient-to-br from-stone-900 via-amber-950 to-stone-900 text-white rounded-3xl p-8 md:p-12 shadow-xl border border-amber-900/40 relative overflow-hidden">
          <div className="relative z-10 space-y-4">
            <span className="inline-block bg-amber-500/20 text-amber-300 text-xs md:text-sm font-bold px-3.5 py-1.5 rounded-full border border-amber-400/30">
              箱根仙石原黄金ススキ草原＆大涌谷白濁にごり湯温泉宿特集
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold font-serif tracking-tight leading-snug">
              黄金色に輝くススキの大海原！箱根仙石原ススキ草原＆大涌谷にごり湯温泉名宿×ふるさと納税完全ガイド【2026年最新秋旅】
            </h1>
            <p className="text-stone-300 text-sm md:text-base max-w-3xl leading-relaxed">
              10月中旬〜11月上旬に見頃を迎える箱根屈指の秋の風物詩「仙石原ススキ草原」。台ヶ岳の山裾一面が黄金色に輝く絶景の散策道と、大涌谷から引湯する乳白色の濃厚にごり湯を堪能！「万寿屋旅館」「箱根ホテル花月園」「センチュリオン箱根別邸」など厳選宿を、楽天ふるさと納税トラベルクーポンで実質2,000円で楽しむ完全ガイド。
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
            夕陽に照らされ黄金に波打つススキの海と、大涌谷の恵み宿る乳白色の美肌湯。秋の箱根を五感で味わい尽くす贅沢
          </h2>
          <p className="text-stone-700 text-sm md:text-base leading-relaxed">
            秋の深まりとともに、台ヶ岳の山裾に広がる広大な仙石原草原が一面黄金色に染まる10月中旬から11月。風に揺れる銀色・金色のススキの波を眺めながら遊歩道を歩けば、日常の喧騒を忘れさせる圧倒的な開放感と旅情に包まれます。そして仙石原のもう一つの醍醐味が、大涌谷から湧き出るミネラル豊富な「乳白色のにごり湯（酸性硫酸塩泉）」。高い殺菌力と温まり効果を持ち、冷え込む秋の身体を芯からじんわりと温めて肌を滑らかに整えてくれます。大涌谷源泉100％掛け流しの名湯と家庭的な温もりに憩う「万寿屋旅館」、広大な高原の敷地に自家源泉大浴場と大涌谷温泉貸切風呂を併せ持つ「箱根ホテル花月園」、そして全室に森を望む客室専用露天風呂を備えた隠れ家スモールラグジュアリー「センチュリオン箱根別邸」。秋の箱根ドライブやカップル・ご夫婦旅行に最適な名宿を、楽天ふるさと納税トラベルクーポン（寄付額の最大30％割引・有効期限3年）を活用して実質2,000円の自己負担で賢く予約し、記憶に残る錦秋の箱根ステイを満喫しましょう。
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
                  一面が黄金色に波打つ！仙石原ススキ草原遊歩道の絶景ウォーキング
                </h3>
              </div>
              <p className="text-stone-600 text-sm md:text-base leading-relaxed pl-11">
                見頃となる10月〜11月には、青空と秋風に揺れるススキが圧巻のグラデーションを描きます。夕暮れ時のマジックアワーにはススキが夕陽に照らされ、幻想的な黄金の海へと変化します。
              </p>
            </div>
  

            <div className="bg-white rounded-2xl p-6 md:p-8 border border-stone-200/80 shadow-xs">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-full bg-amber-100 text-amber-800 font-bold text-sm flex items-center justify-center shrink-0">
                  02
                </span>
                <h3 className="text-lg md:text-xl font-bold text-stone-900 font-serif">
                  大涌谷から引湯する濃厚な「白濁にごり湯」！身体の芯から温まる極上の美肌泉
                </h3>
              </div>
              <p className="text-stone-600 text-sm md:text-base leading-relaxed pl-11">
                箱根でも希少な白濁した硫黄・酸性硫酸塩泉。肌を引き締めつるつるにする美肌作用と抜群の保温効果があり、秋の冷気で冷えた身体を心地よく包み込んでくれます。
              </p>
            </div>
  

            <div className="bg-white rounded-2xl p-6 md:p-8 border border-stone-200/80 shadow-xs">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-full bg-amber-100 text-amber-800 font-bold text-sm flex items-center justify-center shrink-0">
                  03
                </span>
                <h3 className="text-lg md:text-xl font-bold text-stone-900 font-serif">
                  ポーラ美術館やガラスの森など秋のアート鑑賞＆旬の創作会席ディナー
                </h3>
              </div>
              <p className="text-stone-600 text-sm md:text-base leading-relaxed pl-11">
                紅葉と自然林に囲まれた箱根仙石原の美術館巡りを楽しんだ後は、相模湾の旬魚や足柄牛、秋の茸を贅沢に盛り込んだ極上の会席料理やディナーを堪能できます。
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

            <div key="sengokuhara_manjuya" className="bg-white rounded-3xl border border-stone-200/90 shadow-md overflow-hidden hover:shadow-xl transition duration-300">
              <div className="bg-gradient-to-r from-amber-700 to-amber-900 text-amber-50 px-6 py-3 text-xs md:text-sm font-bold flex justify-between items-center">
                <span>神奈川県箱根町・大涌谷源泉100％掛け流し！24時間いつでも入れる濃厚白濁湯の老舗宿</span>
                <span className="bg-amber-500/30 text-amber-200 text-xs px-2.5 py-0.5 rounded-full border border-amber-400/40">厳選名宿 第1選</span>
              </div>
              <div className="p-6 md:p-8 space-y-6">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="bg-amber-100 text-amber-900 text-xs font-bold px-2.5 py-1 rounded-md">
                      ふるさと納税トラベルクーポン対象
                    </span>
                    <span className="text-amber-800 font-bold text-sm">
                      ★ 3.92 <span className="text-stone-400 text-xs">(165件)</span>
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold font-serif text-stone-900">
                    箱根仙石原温泉　万寿屋旅館
                  </h3>
                  <p className="text-xs md:text-sm text-stone-500 mt-1">
                    📍 神奈川県足柄下郡箱根町仙石原160 ｜ 小田原駅よりバスで４０分／箱根湯本よりバスで３０分　仙石案内所前バス停下車、徒歩３分で当館に到着します
                  </p>
                </div>

                <div className="grid md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-6">
                    <div className="relative aspect-video rounded-2xl overflow-hidden shadow-inner bg-stone-100 group">
                      <img
                        src="https://img.travel.rakuten.co.jp/share/HOTEL/53165/53165.jpg"
                        alt="箱根仙石原温泉　万寿屋旅館"
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-6 space-y-4">
                    <p className="text-stone-700 text-sm md:text-base leading-relaxed">
                      仙石原のバス停から徒歩3分、仙石原ススキ草原へも車でわずか数分という好立地に佇む湯宿。自慢のお風呂は大涌谷から引湯した源泉を一切加水・加温せず100％掛け流しで使用しており、乳白色の濃厚な湯の花が舞う本物の温泉を24時間いつでも堪能できます。素朴で落ち着いた和室の客室と、手作りの温もりあふれる季節の会席料理が好評。気取らずに箱根の名湯をじっくりと堪能したい温泉通に愛され続ける名宿です。
                    </p>
                    <div className="bg-stone-50 rounded-xl p-4 border border-stone-200/60 text-xs space-y-1.5 text-stone-600">
                      <div><strong className="text-stone-800">♨️ 温泉・特徴：</strong> 大涌谷の源泉１００％掛け流しの白濁天然温泉がございます。２４時間入浴可です。</div>
                      <div><strong className="text-stone-800">🚗 駐車場：</strong> 有り　１０台　無料　予約不要</div>
                      <div><strong className="text-stone-800">💰 料金目安：</strong> <span className="text-amber-900 font-bold text-sm">1名あたり 6,175円〜</span>（※クーポン利用で実質2,000円）</div>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F53165%2F53165.html"
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
    

            <div key="sengokuhara_kagetuen" className="bg-white rounded-3xl border border-stone-200/90 shadow-md overflow-hidden hover:shadow-xl transition duration-300">
              <div className="bg-gradient-to-r from-amber-700 to-amber-900 text-amber-50 px-6 py-3 text-xs md:text-sm font-bold flex justify-between items-center">
                <span>神奈川県箱根町・自家源泉大浴場＆大涌谷温泉の貸切風呂！広大な庭園に囲まれた高原リゾート</span>
                <span className="bg-amber-500/30 text-amber-200 text-xs px-2.5 py-0.5 rounded-full border border-amber-400/40">厳選名宿 第2選</span>
              </div>
              <div className="p-6 md:p-8 space-y-6">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="bg-amber-100 text-amber-900 text-xs font-bold px-2.5 py-1 rounded-md">
                      ふるさと納税トラベルクーポン対象
                    </span>
                    <span className="text-amber-800 font-bold text-sm">
                      ★ 4.09 <span className="text-stone-400 text-xs">(1,827件)</span>
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold font-serif text-stone-900">
                    仙石原温泉　箱根ホテル花月園
                  </h3>
                  <p className="text-xs md:text-sm text-stone-500 mt-1">
                    📍 神奈川県足柄下郡箱根町仙石原イタリ1244-2 ｜ 東名高速御殿場ＩＣより１３８号線で箱根方面へ。仙石原交差点（県道75号線分岐）を芦ノ湖方面へ。
                  </p>
                </div>

                <div className="grid md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-6">
                    <div className="relative aspect-video rounded-2xl overflow-hidden shadow-inner bg-stone-100 group">
                      <img
                        src="https://img.travel.rakuten.co.jp/share/HOTEL/8968/8968.jpg"
                        alt="仙石原温泉　箱根ホテル花月園"
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-6 space-y-4">
                    <p className="text-stone-700 text-sm md:text-base leading-relaxed">
                      芦ノ湖畔や仙石原高原の自然林に囲まれた静寂のリゾートホテル。館内には自家源泉を引き込んだ広々とした大浴場に加え、大涌谷から引湯した白濁硫黄泉をプライベートに独占できる複数の貸切風呂を完備。カップルやご家族で気兼ねなく名湯巡りが楽しめます。夕食は旬の地元食材を活かした本格和洋会席コース。ススキ草原の散策や箱根神社への参拝拠点としても抜群のロケーションです。
                    </p>
                    <div className="bg-stone-50 rounded-xl p-4 border border-stone-200/60 text-xs space-y-1.5 text-stone-600">
                      <div><strong className="text-stone-800">♨️ 温泉・特徴：</strong> 自家源泉の天然温泉（大浴場）と、大涌谷からの硫黄泉を供給する「貸切風呂」が楽しめる高原のホテル</div>
                      <div><strong className="text-stone-800">🚗 駐車場：</strong> 有り　５０台　無料　先着順</div>
                      <div><strong className="text-stone-800">💰 料金目安：</strong> <span className="text-amber-900 font-bold text-sm">1名あたり 6,930円〜</span>（※クーポン利用で実質2,000円）</div>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F8968%2F8968.html"
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
    

            <div key="sengokuhara_centurion" className="bg-white rounded-3xl border border-stone-200/90 shadow-md overflow-hidden hover:shadow-xl transition duration-300">
              <div className="bg-gradient-to-r from-amber-700 to-amber-900 text-amber-50 px-6 py-3 text-xs md:text-sm font-bold flex justify-between items-center">
                <span>神奈川県箱根町・全13室すべて客室露天風呂付き！静寂の森に佇むラグジュアリー隠れ宿</span>
                <span className="bg-amber-500/30 text-amber-200 text-xs px-2.5 py-0.5 rounded-full border border-amber-400/40">厳選名宿 第3選</span>
              </div>
              <div className="p-6 md:p-8 space-y-6">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="bg-amber-100 text-amber-900 text-xs font-bold px-2.5 py-1 rounded-md">
                      ふるさと納税トラベルクーポン対象
                    </span>
                    <span className="text-amber-800 font-bold text-sm">
                      ★ 4.54 <span className="text-stone-400 text-xs">(172件)</span>
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold font-serif text-stone-900">
                    全室露天風呂付客室　仙石原温泉　センチュリオン箱根別邸
                  </h3>
                  <p className="text-xs md:text-sm text-stone-500 mt-1">
                    📍 神奈川県足柄下郡箱根町仙石原1285-389 ｜ 箱根湯本駅よりお車にて約25分、東名高速道路御殿場ICからお車で約25分。
                  </p>
                </div>

                <div className="grid md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-6">
                    <div className="relative aspect-video rounded-2xl overflow-hidden shadow-inner bg-stone-100 group">
                      <img
                        src="https://img.travel.rakuten.co.jp/share/HOTEL/176633/176633.jpg"
                        alt="全室露天風呂付客室　仙石原温泉　センチュリオン箱根別邸"
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-6 space-y-4">
                    <p className="text-stone-700 text-sm md:text-base leading-relaxed">
                      仙石原の緑豊かな別荘地に隠れ家のように佇む全13室のスモールラグジュアリー旅館。すべての客室テラスに専用の露天風呂が備わっており、誰にも邪魔されずに仙石原の澄んだ空気と湯浴みを満喫できます。洗練された和モダンなインテリアとシモンズ社製ベッドで極上の寛ぎを提供。夕食は選び抜かれた最高級和牛や相模湾の新鮮魚介を贅沢に使った創作ディナーをお部屋や専用ダイニングで味わえます。
                    </p>
                    <div className="bg-stone-50 rounded-xl p-4 border border-stone-200/60 text-xs space-y-1.5 text-stone-600">
                      <div><strong className="text-stone-800">♨️ 温泉・特徴：</strong> ◆自然に囲まれた13室の隠れ温泉宿◆全室客室露天風呂完備  オーナーこだわりの世界をお愉しみ下さい。</div>
                      <div><strong className="text-stone-800">🚗 駐車場：</strong> 13台。スポーツカー等車高の低いお車でのお越しは事前にお知らせくださいませ。</div>
                      <div><strong className="text-stone-800">💰 料金目安：</strong> <span className="text-amber-900 font-bold text-sm">1名あたり 27,000円〜</span>（※クーポン利用で実質2,000円）</div>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F176633%2F176633.html"
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

            <li key="furusato-tax-autumn-foliage-open-air-bath-stay">
              <Link
                href="/furusato-tax-autumn-foliage-open-air-bath-stay"
                className="block p-4 rounded-2xl bg-white border border-stone-200 hover:border-amber-400 hover:shadow-sm transition text-stone-800 text-sm font-bold group"
              >
                <span className="text-amber-700 group-hover:text-amber-900 mr-1.5">👉</span>
                【絶景紅葉露天風呂＆名所旅館×ふるさと納税】定山渓・日光・黒川の名宿
              </Link>
            </li>
  

            <li key="furusato-tax-autumn-foliage-gorge-onsen-stay">
              <Link
                href="/furusato-tax-autumn-foliage-gorge-onsen-stay"
                className="block p-4 rounded-2xl bg-white border border-stone-200 hover:border-amber-400 hover:shadow-sm transition text-stone-800 text-sm font-bold group"
              >
                <span className="text-amber-700 group-hover:text-amber-900 mr-1.5">👉</span>
                【紅葉渓谷美＆清流露天風呂×ふるさと納税】鬼怒川・鳴子・祖谷渓の隠れ宿
              </Link>
            </li>
  

            <li key="furusato-tax-private-room-open-air-bath-luxury-stay">
              <Link
                href="/furusato-tax-private-room-open-air-bath-luxury-stay"
                className="block p-4 rounded-2xl bg-white border border-stone-200 hover:border-amber-400 hover:shadow-sm transition text-stone-800 text-sm font-bold group"
              >
                <span className="text-amber-700 group-hover:text-amber-900 mr-1.5">👉</span>
                【客室露天風呂付き客室×ふるさと納税】修善寺・箱根・嵐山の大人の隠れ宿
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
