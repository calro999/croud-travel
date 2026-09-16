import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '黄金に輝く2.4kmの並木道！マキノ高原メタセコイア並木＆びわ湖おごと温泉名宿×ふるさと納税完全ガイド【2026年最新秋旅】滋賀 | 旅宿クラウド',
  description: '11月下旬〜12月上旬、約500本の巨木がレンガ色・黄金色に染まる日本屈指の並木道「マキノ高原メタセコイア並木」と、びわ湖畔の美肌名湯「おごと温泉」。全室客室露天風呂やレイクビューを誇る「びわこ緑水亭」「びわ湖花街道」「暖灯館 きくのや」。最高峰近江牛会席を、楽天ふるさと納税トラベルクーポンで実質2,000円で楽しむ完全ガイド。',
  keywords: [
    'ふるさと納税 温泉',
    'ふるさと納税 宿泊券',
    'ふるさと納税 トラベルクーポン',
    'メタセコイア並木黄金紅葉＆びわ湖おごと美肌温泉旅館特集',
    '10月 旅行 おすすめ',
    '11月 旅行 おすすめ',
    '秋 旅行 温泉',
    '紅葉 温泉旅館',
    '楽天トラベル ふるさと納税',
    '実質2000円 温泉'
  ],
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-lake-biwa-metasequoia-autumn-leaves-stay/'
  },
  openGraph: {
    title: '黄金に輝く2.4kmの並木道！マキノ高原メタセコイア並木＆びわ湖おごと温泉名宿×ふるさと納税完全ガイド【2026年最新秋旅】滋賀',
    description: '11月下旬〜12月上旬、約500本の巨木がレンガ色・黄金色に染まる日本屈指の並木道「マキノ高原メタセコイア並木」と、びわ湖畔の美肌名湯「おごと温泉」。全室客室露天風呂やレイクビューを誇る「びわこ緑水亭」「びわ湖花街道」「暖灯館 きくのや」。最高峰近江牛会席を、楽天ふるさと納税トラベルクーポンで実質2,000円で楽しむ完全ガイド。',
    url: 'https://croud-travel.pages.dev/furusato-tax-lake-biwa-metasequoia-autumn-leaves-stay',
    siteName: '旅宿クラウド',
    locale: 'ja_JP',
    type: 'article',
  }
};

export default function FurusatoLakeBiwaMetasequoiaAutumnLeavesStayPage() {
  return (
    <main className="min-h-screen bg-stone-100/60 text-stone-900 pb-20">
      {/* パンくずナビ */}
      <nav aria-label="Breadcrumb" className="max-w-5xl mx-auto px-4 sm:px-6 pt-6 pb-2 text-xs text-stone-500 flex items-center gap-2 flex-wrap">
        <Link href="/" className="hover:text-stone-800 underline">ホーム</Link>
        <span>&gt;</span>
        <Link href="/features" className="hover:text-stone-800 underline">特集一覧</Link>
        <span>&gt;</span>
        <span className="text-stone-800 font-bold">メタセコイア並木紅葉＆おごと温泉名宿特集</span>
      </nav>

      {/* ヒーローセクション */}
      <header className="max-w-5xl mx-auto px-4 sm:px-6 pt-4 pb-10">
        <div className="bg-gradient-to-br from-stone-900 via-amber-950 to-stone-900 text-white rounded-3xl p-8 md:p-12 shadow-xl border border-amber-900/40 relative overflow-hidden">
          <div className="relative z-10 space-y-4">
            <span className="inline-block bg-amber-500/20 text-amber-300 text-xs md:text-sm font-bold px-3.5 py-1.5 rounded-full border border-amber-400/30">
              メタセコイア並木黄金紅葉＆びわ湖おごと美肌温泉旅館特集
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold font-serif tracking-tight leading-snug">
              黄金に輝く2.4kmの並木道！マキノ高原メタセコイア並木＆びわ湖おごと温泉名宿×ふるさと納税完全ガイド【2026年最新秋旅】滋賀
            </h1>
            <p className="text-stone-300 text-sm md:text-base max-w-3xl leading-relaxed">
              11月下旬〜12月上旬、約500本の巨木がレンガ色・黄金色に染まる日本屈指の並木道「マキノ高原メタセコイア並木」と、びわ湖畔の美肌名湯「おごと温泉」。全室客室露天風呂やレイクビューを誇る「びわこ緑水亭」「びわ湖花街道」「暖灯館 きくのや」。最高峰近江牛会席を、楽天ふるさと納税トラベルクーポンで実質2,000円で楽しむ完全ガイド。
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
            天へと伸びる黄金の円錐樹が続く一本道と、朝日にきらめく琵琶湖の絶景。美肌の古湯と近江牛を味わう秋の滋賀ステイへ
          </h2>
          <p className="text-stone-700 text-sm md:text-base leading-relaxed">
            滋賀県高島市マキノ町に位置し、映画やドラマの舞台としても名高い「メタセコイア並木」。約2.4kmにわたって約500本のメタセコイアが整然と並び、11月下旬から12月上旬にかけて円錐形の巨木が一斉にレンガ色や黄金色のグラデーションに染まる光景は、まるで北欧の童話の世界に入り込んだかのような圧倒的な美しさです。並木道のドライブや散策を満喫した後は、琵琶湖の西岸に位置し開湯千二百年の歴史を誇る「おごと温泉」へ。比叡山の開祖・最澄によって開かれたと伝わるアルカリ性単純温泉（pH9.0）は、湯上がり後の肌がつるつる・ぷるぷるになる関西屈指の美肌温泉です。全館リニューアルされた客室露天風呂から雄大な琵琶湖のパノラマを望む「びわこ緑水亭」、大正ロマンの風雅と近江牛会席を誇る「びわ湖花街道」、そして愛犬同伴対応とアットホームな温もりが人気の「暖灯館 きくのや」。日本三大和牛「近江牛」のすき焼きやしゃぶしゃぶとともに、楽天ふるさと納税トラベルクーポン（寄付額の最大30％割引・有効期限3年）を活用して実質自己負担2,000円で予約し、優雅な秋のレイクサイドリゾート旅へ出かけましょう。
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
                  約500本が黄金に染まる！2.4kmの直線道路「メタセコイア並木」の絶景ドライブ
                </h3>
              </div>
              <p className="text-stone-600 text-sm md:text-base leading-relaxed pl-11">
                新・日本の街路樹百景にも選ばれた絶景ロード。黄金のトンネルをくぐるドライブや、足元を敷き詰める落ち葉の絨毯の散策は写真映え抜群です。
              </p>
            </div>
  

            <div className="bg-white rounded-2xl p-6 md:p-8 border border-stone-200/80 shadow-xs">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-full bg-amber-100 text-amber-800 font-bold text-sm flex items-center justify-center shrink-0">
                  02
                </span>
                <h3 className="text-lg md:text-xl font-bold text-stone-900 font-serif">
                  pH9.0のアルカリ性単純美肌泉！最澄開湯の歴史ある「おごと温泉」の潤い
                </h3>
              </div>
              <p className="text-stone-600 text-sm md:text-base leading-relaxed pl-11">
                肌の古い角質を落としすべすべにするクレンジング効果の高い名湯。琵琶湖から昇る朝陽を眺めながら客室露天風呂や展望大浴場で極上の湯浴みが楽しめます。
              </p>
            </div>
  

            <div className="bg-white rounded-2xl p-6 md:p-8 border border-stone-200/80 shadow-xs">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-full bg-amber-100 text-amber-800 font-bold text-sm flex items-center justify-center shrink-0">
                  03
                </span>
                <h3 className="text-lg md:text-xl font-bold text-stone-900 font-serif">
                  日本最古のブランド牛「特選近江牛」のステーキ・すき焼き＆琵琶湖の旬魚会席
                </h3>
              </div>
              <p className="text-stone-600 text-sm md:text-base leading-relaxed pl-11">
                きめ細かい霜降りと芳醇な香りが特徴の近江牛。秋の琵琶湖名物・子持ち鮎やビワマスなど、滋賀・湖国の豊かな恵みを贅沢に味わえます。
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

            <div key="ogoto_ryokusuitei" className="bg-white rounded-3xl border border-stone-200/90 shadow-md overflow-hidden hover:shadow-xl transition duration-300">
              <div className="bg-gradient-to-r from-amber-700 to-amber-900 text-amber-50 px-6 py-3 text-xs md:text-sm font-bold flex justify-between items-center">
                <span>滋賀県大津市・全室レイクビュー露天風呂付き客室が大人気！琵琶湖の水平線から昇る朝日を望む極上宿</span>
                <span className="bg-amber-500/30 text-amber-200 text-xs px-2.5 py-0.5 rounded-full border border-amber-400/40">厳選名宿 第1選</span>
              </div>
              <div className="p-6 md:p-8 space-y-6">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="bg-amber-100 text-amber-900 text-xs font-bold px-2.5 py-1 rounded-md">
                      ふるさと納税トラベルクーポン対象
                    </span>
                    <span className="text-amber-800 font-bold text-sm">
                      ★ 4.66 <span className="text-stone-400 text-xs">(2,464件)</span>
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold font-serif text-stone-900">
                    おごと温泉　びわこ緑水亭
                  </h3>
                  <p className="text-xs md:text-sm text-stone-500 mt-1">
                    📍 滋賀県大津市雄琴6-1-6 ｜ 名神京都東Ｉ．Ｃから湖西道路経由で20分。ＪＲおごと温泉駅から送迎あり（要電話）
                  </p>
                </div>

                <div className="grid md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-6">
                    <div className="relative aspect-video rounded-2xl overflow-hidden shadow-inner bg-stone-100 group">
                      <img
                        src="https://img.travel.rakuten.co.jp/share/HOTEL/3165/3165.jpg"
                        alt="おごと温泉　びわこ緑水亭"
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-6 space-y-4">
                    <p className="text-stone-700 text-sm md:text-base leading-relaxed">
                      琵琶湖の畔に建ち、多くの客室に専用の温泉露天風呂を備えたおごと温泉屈指の人気リゾート旅館。お部屋のテラスの湯船からは刻々と表情を変える琵琶湖のレイクビューや朝日のパノラマを一望。大浴場「湯の蔵」の開放的な露天風呂やサウナも完備しています。夕食には最高ランク近江牛のしゃぶしゃぶやステーキをメインとした華やかな和会席料理を提供。贅沢なプライベート空間で特別な記念日を過ごせます。
                    </p>
                    <div className="bg-stone-50 rounded-xl p-4 border border-stone-200/60 text-xs space-y-1.5 text-stone-600">
                      <div><strong className="text-stone-800">♨️ 温泉・特徴：</strong> 滋賀県おごと温泉、琵琶湖畔の旅館、露天風呂付客室や近江牛のプラン、家族・カップルに人気の旅館。</div>
                      <div><strong className="text-stone-800">🚗 駐車場：</strong> 有り　100台　無料</div>
                      <div><strong className="text-stone-800">💰 料金目安：</strong> <span className="text-amber-900 font-bold text-sm">1名あたり 19,590円〜</span>（※クーポン利用で実質2,000円）</div>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F3165%2F3165.html"
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
    

            <div key="ogoto_hanakaido" className="bg-white rounded-3xl border border-stone-200/90 shadow-md overflow-hidden hover:shadow-xl transition duration-300">
              <div className="bg-gradient-to-r from-amber-700 to-amber-900 text-amber-50 px-6 py-3 text-xs md:text-sm font-bold flex justify-between items-center">
                <span>滋賀県大津市・大正ロマンの薫り漂うハイカラな宿！近江の旬菜と近江牛を味わう街道会席</span>
                <span className="bg-amber-500/30 text-amber-200 text-xs px-2.5 py-0.5 rounded-full border border-amber-400/40">厳選名宿 第2選</span>
              </div>
              <div className="p-6 md:p-8 space-y-6">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="bg-amber-100 text-amber-900 text-xs font-bold px-2.5 py-1 rounded-md">
                      ふるさと納税トラベルクーポン対象
                    </span>
                    <span className="text-amber-800 font-bold text-sm">
                      ★ 4.59 <span className="text-stone-400 text-xs">(681件)</span>
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold font-serif text-stone-900">
                    おごと温泉　びわ湖花街道
                  </h3>
                  <p className="text-xs md:text-sm text-stone-500 mt-1">
                    📍 滋賀県大津市雄琴1-1-3 ｜ 車：名神京都東ＩＣ～約20分　電車：京都駅よりJR湖西線で20分。おごと温泉駅～無料送迎あり。（要連絡）
                  </p>
                </div>

                <div className="grid md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-6">
                    <div className="relative aspect-video rounded-2xl overflow-hidden shadow-inner bg-stone-100 group">
                      <img
                        src="https://img.travel.rakuten.co.jp/share/HOTEL/8798/8798.jpg"
                        alt="おごと温泉　びわ湖花街道"
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-6 space-y-4">
                    <p className="text-stone-700 text-sm md:text-base leading-relaxed">
                      おごと温泉の高台に位置し、大正ロマンをテーマにした格調高い和洋折衷のインテリアが旅人を迎える温泉旅館。木の温もりあふれる大浴場や露天風呂で美肌の名湯・おごと温泉をゆったりと堪能できます。料理長が腕を振るう「街道会席」は、認証近江牛をはじめ地元の契約農家から届く近江野菜や琵琶湖の旬魚を美しく仕立てた逸品揃い。落ち着いた大人の寛ぎを求めるカップルやご夫婦に選ばれています。
                    </p>
                    <div className="bg-stone-50 rounded-xl p-4 border border-stone-200/60 text-xs space-y-1.5 text-stone-600">
                      <div><strong className="text-stone-800">♨️ 温泉・特徴：</strong> 湖も碧、山の蒼。時を忘れ。そして心がほどける。湖国が織りなす季節に移ろいを感じて。</div>
                      <div><strong className="text-stone-800">🚗 駐車場：</strong> 有り　４８台　無料</div>
                      <div><strong className="text-stone-800">💰 料金目安：</strong> <span className="text-amber-900 font-bold text-sm">1名あたり 22,770円〜</span>（※クーポン利用で実質2,000円）</div>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F8798%2F8798.html"
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
    

            <div key="ogoto_kikunoya" className="bg-white rounded-3xl border border-stone-200/90 shadow-md overflow-hidden hover:shadow-xl transition duration-300">
              <div className="bg-gradient-to-r from-amber-700 to-amber-900 text-amber-50 px-6 py-3 text-xs md:text-sm font-bold flex justify-between items-center">
                <span>滋賀県大津市・心温まる灯りと木の温もり！愛犬同伴客室やバリアフリーにも配慮された名湯旅館</span>
                <span className="bg-amber-500/30 text-amber-200 text-xs px-2.5 py-0.5 rounded-full border border-amber-400/40">厳選名宿 第3選</span>
              </div>
              <div className="p-6 md:p-8 space-y-6">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="bg-amber-100 text-amber-900 text-xs font-bold px-2.5 py-1 rounded-md">
                      ふるさと納税トラベルクーポン対象
                    </span>
                    <span className="text-amber-800 font-bold text-sm">
                      ★ 4.68 <span className="text-stone-400 text-xs">(2,879件)</span>
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold font-serif text-stone-900">
                    おごと温泉　暖灯館　きくのや
                  </h3>
                  <p className="text-xs md:text-sm text-stone-500 mt-1">
                    📍 滋賀県大津市雄琴6-1-29 ｜ 京都駅より20分、JR湖西線おごと温泉駅下車、車5分＜送迎有＞。京都東ICより湖西道路経由20分558号線沿い
                  </p>
                </div>

                <div className="grid md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-6">
                    <div className="relative aspect-video rounded-2xl overflow-hidden shadow-inner bg-stone-100 group">
                      <img
                        src="https://img.travel.rakuten.co.jp/share/HOTEL/8165/8165.jpg"
                        alt="おごと温泉　暖灯館　きくのや"
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-6 space-y-4">
                    <p className="text-stone-700 text-sm md:text-base leading-relaxed">
                      琵琶湖の湖畔近くに佇み、名前の通り温かな灯りと木の温もりに包まれるアットホームな温泉宿。美肌効果抜群のおごと温泉を湛えた大浴場や露天風呂、貸切風呂で日頃の疲れを心地よく解きほぐせます。夕食には近江牛の陶板焼きや季節の彩り豊かな郷土会席を提供。愛犬と一緒に泊まれる客室や専用露天風呂付き客室も備え、家族みんなで笑顔になれる優しいおもてなしが評判です。
                    </p>
                    <div className="bg-stone-50 rounded-xl p-4 border border-stone-200/60 text-xs space-y-1.5 text-stone-600">
                      <div><strong className="text-stone-800">♨️ 温泉・特徴：</strong> 地元食材を使った会席料理■テラスラウンジでフリードリンク■8/31-12/5貸切風呂リニューアル工事</div>
                      <div><strong className="text-stone-800">🚗 駐車場：</strong> 有り　23台　先着順　無料</div>
                      <div><strong className="text-stone-800">💰 料金目安：</strong> <span className="text-amber-900 font-bold text-sm">1名あたり 16,170円〜</span>（※クーポン利用で実質2,000円）</div>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F8165%2F8165.html"
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

            <li key="furusato-tax-dog-friendly-dogrun-luxury-resort-stay">
              <Link
                href="/furusato-tax-dog-friendly-dogrun-luxury-resort-stay"
                className="block p-4 rounded-2xl bg-white border border-stone-200 hover:border-amber-400 hover:shadow-sm transition text-stone-800 text-sm font-bold group"
              >
                <span className="text-amber-700 group-hover:text-amber-900 mr-1.5">👉</span>
                【愛犬同伴＆広大ドッグラン温泉宿×ふるさと納税】那須・伊豆・びわ湖長浜
              </Link>
            </li>
  

            <li key="furusato-tax-lakeview-onsen-resort-hotel-stay">
              <Link
                href="/furusato-tax-lakeview-onsen-resort-hotel-stay"
                className="block p-4 rounded-2xl bg-white border border-stone-200 hover:border-amber-400 hover:shadow-sm transition text-stone-800 text-sm font-bold group"
              >
                <span className="text-amber-700 group-hover:text-amber-900 mr-1.5">👉</span>
                【絶景レイクビュー温泉リゾート×ふるさと納税】琵琶湖・洞爺湖・箱根芦ノ湖
              </Link>
            </li>
  

            <li key="furusato-tax-minoh-falls-arima-autumn-leaves-stay">
              <Link
                href="/furusato-tax-minoh-falls-arima-autumn-leaves-stay"
                className="block p-4 rounded-2xl bg-white border border-stone-200 hover:border-amber-400 hover:shadow-sm transition text-stone-800 text-sm font-bold group"
              >
                <span className="text-amber-700 group-hover:text-amber-900 mr-1.5">👉</span>
                【箕面大滝紅葉＆有馬温泉×ふるさと納税】金泉銀泉と神戸牛の旅
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
