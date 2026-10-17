import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, Star, MapPin, Tag, CheckCircle2, AlertCircle, Utensils, Mountain, Waves, Sparkles, Train } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: {
    canonical: "https://croud-travel.pages.dev/autumn-budget-tokushima-city-bizan-tokushima-ramen-hotels-stay/",
  },

  title: '徳島市街：眉山秋パノラマ＆甘辛豚バラ徳島ラーメン！4,000円台〜泊まれる格安ホテル5選',
  description: '眉山ロープウェイから眺める阿波の秋景色と吉野川の清流！濃厚甘辛スープに生卵が絡む名物徳島ラーメンや阿波尾鶏。徳島駅・繁華街周辺で1泊4,000円台から泊まれる格安・高コスパホテル5選。',
  openGraph: {
    title: "徳島市街：眉山秋パノラマ＆甘辛豚バラ徳島ラーメン！4,000円台〜泊まれる格安ホテル5選",
    description: "眉山ロープウェイから眺める阿波の秋景色と吉野川の清流！濃厚甘辛スープに生卵が絡む名物徳島ラーメンや阿波尾鶏。徳島駅・繁華街周辺で1泊4,000円台から泊まれる格安・高コスパホテル5選。",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "徳島市街：眉山秋パノラマ＆甘辛豚バラ徳島ラーメン！4,000円台〜泊まれる格安ホテル5選",
    description: "眉山ロープウェイから眺める阿波の秋景色と吉野川の清流！濃厚甘辛スープに生卵が絡む名物徳島ラーメンや阿波尾鶏。徳島駅・繁華街周辺で1泊4,000円台から泊まれる格安・高コスパホテル5選。",
  }
};

export default function AutumnBudgetFeaturePage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 pb-24">
      {/* パンくずリスト */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 py-3 text-xs text-slate-500 flex items-center space-x-2 overflow-x-auto whitespace-nowrap">
          <Link href="/" className="hover:text-teal-600 transition">ホーム</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <Link href="/#autumn-features" className="hover:text-teal-600 transition">秋の特集一覧</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <span className="text-slate-800 font-medium">徳島市街 眉山秋景色・徳島ラーメン 格安宿5選</span>
        </div>
      </div>

      {/* ヒーローセクション */}
      <section className="relative bg-gradient-to-br from-teal-950 via-slate-900 to-sky-950 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 text-xs font-semibold tracking-wider border border-teal-400/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>眉山の秋パノラマ＆名物すき焼き風徳島ラーメン</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight leading-snug">「徳島市街」眉山秋パノラマ＆徳島ラーメンへ！<br className="hidden sm:inline" />4,000円台〜泊まれる駅近格安・高コスパ宿5選</h1>
          <p className="text-sm md:text-base text-teal-100/90 max-w-2xl mx-auto leading-relaxed">
            ロープウェイで登る眉山山頂からの絶景と、吉野川を渡る心地よい秋風！濃い口醤油と豚骨の甘辛スープに豚バラ肉と生卵をトッピングした本場・徳島ラーメンや、ジューシーな阿波尾鶏の炭火焼き。四国の玄関口・徳島市街で、1泊4,000円台から泊まれる厳選宿をご紹介。
          </p>
        </div>
      </section>

      {/* イントロダクション */}
      <section className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
          <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <Utensils className="w-5 h-5 text-teal-600" />
            宿泊代4,000円台！浮いた旅費で徳島ラーメン有名店ハシゴ＆阿波尾鶏の骨付き地鶏焼きへ
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            鳴門の渦潮や大歩危・祖谷への観光拠点としてもアクセス便利な徳島市。秋は阿波おどりの喧騒が落ち着き、ゆったりと城跡や眉山の紅葉、阿波グルメを楽しめる絶好のシーズンです。駅周辺や両国橋近くの高コスパ宿に宿泊し、地元っ子に愛される名店ラーメン巡りを満喫しましょう。
          </p>
        </div>
      </section>

      
        {/* 観光地ガイド・公式Wikipedia写真＆解説 */}
        <section className="bg-white rounded-2xl border border-stone-200/90 overflow-hidden shadow-sm mb-10">
          <div className="bg-gradient-to-r from-stone-900 to-stone-800 text-white px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
              <h2 className="text-base md:text-lg font-bold tracking-wide">阿波・徳島街並みガイド：徳島市のシンボル・眉山ロープウェイと阿波パノラマ</h2>
            </div>
            <span className="text-[11px] text-stone-300 bg-white/10 px-2.5 py-0.5 rounded-full border border-white/10">地域名所ガイド</span>
          </div>
          <div className="flex flex-col gap-6 p-6">
            <div className="w-full relative aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden bg-stone-100 border border-stone-200/60 shadow-inner">
              <Image
                src="https://thumb.wikimedia.org/wikipedia/commons/thumb/2/22/Mount_Bizan_from_Shimmachi_River_20200607.jpg/1280px-Mount_Bizan_from_Shimmachi_River_20200607.jpg"
                alt="徳島市のシンボル・眉山ロープウェイと阿波パノラマ"
                fill
                className="object-cover hover:scale-105 transition duration-500"
                sizes="(max-width: 768px) 100vw, 400px"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-2 text-right">
                <span className="text-[10px] text-white/90">写真：Wikimedia Commons</span>
              </div>
            </div>
            <div className="w-full space-y-3">
              <h3 className="text-lg md:text-xl font-bold text-stone-900 leading-snug">徳島市のシンボル・眉山ロープウェイと阿波パノラマの歴史と見どころ</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">眉山（びざん）は、徳島県徳島市にある山。徳島市のシンボル的存在として親しまれている。 どの方向から眺めても眉の姿に見えることからその名がついたといわれる。徳島県立城南高等学校や徳島市立高等学校をはじめ徳島市内にある多くの学校では校歌の歌詞に「眉山」が登場する。2007年にはここを舞台にした映画『眉山-びざん-』が公開された。とくしま88景に選定。</p>
              <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-400">
                <span>出典: フリー百科事典『ウィキペディア（Wikipedia）』</span>
                <span className="text-teal-700 font-semibold">現地観光・散策推奨スポット</span>
              </div>
            </div>
          </div>
        </section>

      {/* 宿一覧 */}
      <section className="max-w-4xl mx-auto px-4 space-y-8">

        {/* 宿1 */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-teal-100 text-teal-800 text-xs font-bold rounded-md">徳島駅前すぐ・アクセス抜群のアパホテル安心品質</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>{3.98}</span>
                <span className="text-slate-400 text-xs font-normal">（レビュー2107件）</span>
              </div>
            </div>
            <h3 className="text-xl font-bold text-slate-900 leading-snug">
              アパホテル〈徳島駅前〉
            </h3>
            <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs text-slate-500">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                徳島県徳島市一番町2-21
              </span>
              <span className="flex items-center gap-1">
                <Train className="w-3.5 h-3.5 text-teal-600" />
                徳島駅近く
              </span>
            </div>
            <div className="flex flex-col gap-5 items-center pt-2">
              <div className="w-full relative aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden bg-slate-100 border border-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/7503/7503.jpg"
                  alt="アパホテル〈徳島駅前〉"
                  fill
                  className="object-cover hover:scale-105 transition duration-300"
                  sizes="(max-width: 768px) 100vw, 350px"
                />
              </div>
              <div className="w-full space-y-3">
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                  JR徳島駅から徒歩ですぐの好立地。機能的な客室設備と快眠ベッド、スムーズな自動チェックインで快適そのもの。駅周辺の徳島ラーメン名店巡りや眉山ロープウェイへのアクセスも抜群です。
                </p>
                <div className="pt-2 border-t border-slate-100 flex flex-wrap items-baseline justify-between gap-2">
                  <div>
                    <span className="text-xs text-slate-400 block">最安目安（1名/1室利用時）</span>
                    <span className="text-xl md:text-2xl font-black text-rose-600">¥4,050〜</span>
                    <span className="text-xs text-slate-500 ml-1">（税込）</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F7503%2F7503.html"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs md:text-sm rounded-xl shadow-sm hover:shadow transition transform active:scale-95"
                  >
                    <span>空室・料金を確認</span>
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 宿2 */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-teal-100 text-teal-800 text-xs font-bold rounded-md">両国橋繁華街近く・全室シモンズベッド＆機能的ホテル</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>{4.03}</span>
                <span className="text-slate-400 text-xs font-normal">（レビュー1086件）</span>
              </div>
            </div>
            <h3 className="text-xl font-bold text-slate-900 leading-snug">
              ハイパーイン　ホテル越久（えちひさ）
            </h3>
            <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs text-slate-500">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                徳島県徳島市富田浜1-22
              </span>
              <span className="flex items-center gap-1">
                <Train className="w-3.5 h-3.5 text-teal-600" />
                徳島駅近く
              </span>
            </div>
            <div className="flex flex-col gap-5 items-center pt-2">
              <div className="w-full relative aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden bg-slate-100 border border-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/8830/8830.jpg"
                  alt="ハイパーイン　ホテル越久（えちひさ）"
                  fill
                  className="object-cover hover:scale-105 transition duration-300"
                  sizes="(max-width: 768px) 100vw, 350px"
                />
              </div>
              <div className="w-full space-y-3">
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                  徳島の飲食店街に近い両国橋エリアに位置し、夜のグルメ探索に最適。全室にシモンズ製ベッドを導入し、手頃な料金でワンランク上の寝心地を提供してくれる実力派ホテルです。
                </p>
                <div className="pt-2 border-t border-slate-100 flex flex-wrap items-baseline justify-between gap-2">
                  <div>
                    <span className="text-xs text-slate-400 block">最安目安（1名/1室利用時）</span>
                    <span className="text-xl md:text-2xl font-black text-rose-600">¥4,200〜</span>
                    <span className="text-xs text-slate-500 ml-1">（税込）</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F8830%2F8830.html"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs md:text-sm rounded-xl shadow-sm hover:shadow transition transform active:scale-95"
                  >
                    <span>空室・料金を確認</span>
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 宿3 */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-teal-100 text-teal-800 text-xs font-bold rounded-md">徳島城跡公園・県庁近くの落ち着いたシティホテル</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>{4.21}</span>
                <span className="text-slate-400 text-xs font-normal">（レビュー1255件）</span>
              </div>
            </div>
            <h3 className="text-xl font-bold text-slate-900 leading-snug">
              ホテル千秋閣＜徳島県＞
            </h3>
            <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs text-slate-500">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                徳島県徳島市幸町3-55
              </span>
              <span className="flex items-center gap-1">
                <Train className="w-3.5 h-3.5 text-teal-600" />
                徳島駅近く
              </span>
            </div>
            <div className="flex flex-col gap-5 items-center pt-2">
              <div className="w-full relative aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden bg-slate-100 border border-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/28052/28052.jpg"
                  alt="ホテル千秋閣＜徳島県＞"
                  fill
                  className="object-cover hover:scale-105 transition duration-300"
                  sizes="(max-width: 768px) 100vw, 350px"
                />
              </div>
              <div className="w-full space-y-3">
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                  徳島城跡の緑や吉野川の自然を感じられる閑静な立地。清潔感あふれる客室と心のこもった接客で評判が高く、落ち着いて旅の疲れを癒したい方に選ばれています。
                </p>
                <div className="pt-2 border-t border-slate-100 flex flex-wrap items-baseline justify-between gap-2">
                  <div>
                    <span className="text-xs text-slate-400 block">最安目安（1名/1室利用時）</span>
                    <span className="text-xl md:text-2xl font-black text-rose-600">¥4,500〜</span>
                    <span className="text-xs text-slate-500 ml-1">（税込）</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F28052%2F28052.html"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs md:text-sm rounded-xl shadow-sm hover:shadow transition transform active:scale-95"
                  >
                    <span>空室・料金を確認</span>
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 宿4 */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-teal-100 text-teal-800 text-xs font-bold rounded-md">眉山山頂に佇む天空リゾート・徳島市街の絶景夜景</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>{4.36}</span>
                <span className="text-slate-400 text-xs font-normal">（レビュー638件）</span>
              </div>
            </div>
            <h3 className="text-xl font-bold text-slate-900 leading-snug">
              天空のスカイビューホテル　眉山海月
            </h3>
            <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs text-slate-500">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                徳島県徳島市八万町中津山3-70
              </span>
              <span className="flex items-center gap-1">
                <Train className="w-3.5 h-3.5 text-teal-600" />
                徳島駅近く
              </span>
            </div>
            <div className="flex flex-col gap-5 items-center pt-2">
              <div className="w-full relative aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden bg-slate-100 border border-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/187619/187619.jpg"
                  alt="天空のスカイビューホテル　眉山海月"
                  fill
                  className="object-cover hover:scale-105 transition duration-300"
                  sizes="(max-width: 768px) 100vw, 350px"
                />
              </div>
              <div className="w-full space-y-3">
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                  眉山の山頂付近に建ち、ロビーや客室から徳島市街と紀伊水道を一望する息をのむ絶景が自慢。秋の澄み切った夜景を眺めながら、非日常のひとときをリーズナブルな価格で過ごせます。
                </p>
                <div className="pt-2 border-t border-slate-100 flex flex-wrap items-baseline justify-between gap-2">
                  <div>
                    <span className="text-xs text-slate-400 block">最安目安（1名/1室利用時）</span>
                    <span className="text-xl md:text-2xl font-black text-rose-600">¥4,500〜</span>
                    <span className="text-xs text-slate-500 ml-1">（税込）</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F187619%2F187619.html"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs md:text-sm rounded-xl shadow-sm hover:shadow transition transform active:scale-95"
                  >
                    <span>空室・料金を確認</span>
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 宿5 */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-teal-100 text-teal-800 text-xs font-bold rounded-md">繁華街秋田町徒歩圏・無料朝食＆リーズナブルステイ</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>{4.13}</span>
                <span className="text-slate-400 text-xs font-normal">（レビュー1547件）</span>
              </div>
            </div>
            <h3 className="text-xl font-bold text-slate-900 leading-snug">
              ハイパーイン　メイアップ徳島
            </h3>
            <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs text-slate-500">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                徳島県徳島市幸町3-108
              </span>
              <span className="flex items-center gap-1">
                <Train className="w-3.5 h-3.5 text-teal-600" />
                徳島駅近く
              </span>
            </div>
            <div className="flex flex-col gap-5 items-center pt-2">
              <div className="w-full relative aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden bg-slate-100 border border-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/17801/17801.jpg"
                  alt="ハイパーイン　メイアップ徳島"
                  fill
                  className="object-cover hover:scale-105 transition duration-300"
                  sizes="(max-width: 768px) 100vw, 350px"
                />
              </div>
              <div className="w-full space-y-3">
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                  徳島最大の繁華街・秋田町に近く、夜遅くまで食事を楽しみたい旅行者に大人気。シンプルで清潔な客室と無料の軽朝食サービスが付いて、コスパの高さが光るビジネスホテルです。
                </p>
                <div className="pt-2 border-t border-slate-100 flex flex-wrap items-baseline justify-between gap-2">
                  <div>
                    <span className="text-xs text-slate-400 block">最安目安（1名/1室利用時）</span>
                    <span className="text-xl md:text-2xl font-black text-rose-600">¥4,700〜</span>
                    <span className="text-xs text-slate-500 ml-1">（税込）</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F17801%2F17801.html"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs md:text-sm rounded-xl shadow-sm hover:shadow transition transform active:scale-95"
                  >
                    <span>空室・料金を確認</span>
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* 予約のアドバイス */}
      <section className="max-w-4xl mx-auto px-4 mt-12">
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 space-y-3">
          <h3 className="text-base font-bold text-amber-900 flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-amber-600" />
            秋の格安旅を満喫するための予約ポイント
          </h3>
          <ul className="text-xs md:text-sm text-amber-800/90 space-y-2 list-disc list-inside leading-relaxed">
            <li>秋の行楽・連休シーズンは週末を中心に満室になりやすいため、平日の宿泊や早めの予約がお得です。</li>
            <li>表示価格は各宿の最安プラン目安（税込）です。日程や人数、予約時期によって変動するため最新状況をご確認ください。</li>
            <li>楽天トラベルの毎月「0と5のつく日クーポン」や「宿クーポン」を併用すると、さらに割引が適用される場合があります。</li>
          </ul>
        </div>
      </section>
    
        {/* Enriched Rakuten API & Wikipedia Tourist Guide */}
        <section data-enriched-rakuten-wiki="true" className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200 space-y-8 my-10">
          <div className="space-y-2 border-b border-stone-200 pb-4">
            <span className="text-[11px] font-extrabold text-amber-700 bg-amber-50 border border-amber-200 px-3 py-0.5 rounded-full uppercase">
              RAKUTEN TRAVEL API &amp; LOCAL GUIDE
            </span>
            <h2 className="text-xl md:text-2xl font-bold text-stone-900">
              📊 徳島市街：眉山秋パノラマ＆甘辛豚バラ徳島ラーメン！4,000円台〜泊まれる格安ホテル5選：掲載宿スペック一覧比較表＆宿泊者クチコミ・アクセス詳細分析
            </h2>
            <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
              楽天トラベル公式APIより取得した「徳島市街：眉山秋パノラマ＆甘辛豚バラ徳島ラーメン！4,000円台〜泊まれる格安ホテル5選」掲載宿の所在地・最寄り駅・駐車場条件・クチコミ評価・参考最安料金を一覧で比較できます。公共交通機関（新幹線・在来線・送迎バス）利用の方もマイカー・レンタカー利用の方も、旅のスタイルに合った一軒をお選びください。
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse bg-white rounded-xl overflow-hidden border border-stone-200">
              <thead>
                <tr className="bg-stone-900 text-white font-bold">
                  <th className="p-3">宿名</th>
                  <th className="p-3">所在地</th>
                  <th className="p-3">最寄り駅・交通</th>
                  <th className="p-3">駐車場情報</th>
                  <th className="p-3">楽天評価</th>
                  <th className="p-3">最安目安</th>
                  <th className="p-3">予約・詳細</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200">
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">1. アパホテル〈徳島駅前〉</td>
                <td className="p-3 text-stone-600">徳島県徳島市一番町2-21</td>
                <td className="p-3 text-stone-600">徳島駅周辺</td>
                <td className="p-3 text-stone-600">敷地内有料駐車場: 4台　先着順サイズ制限有</td>
                <td className="p-3 font-bold text-amber-600">★3.96（2116件）</td>
                <td className="p-3 font-bold text-rose-600">¥3,950〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F7503%2F7503.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">2. ハイパーイン　ホテル越久（えちひさ）</td>
                <td className="p-3 text-stone-600">徳島県徳島市富田浜1-22</td>
                <td className="p-3 text-stone-600">徳島駅周辺</td>
                <td className="p-3 text-stone-600">600円/泊 日中駐車代金400円※23時以降お車の出入不可。10月1日より駐車代金改訂となります。</td>
                <td className="p-3 font-bold text-amber-600">★4.01（1092件）</td>
                <td className="p-3 font-bold text-rose-600">¥4,200〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F8830%2F8830.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">3. 天空のスカイビューホテル　眉山海月</td>
                <td className="p-3 text-stone-600">徳島県徳島市八万町中津山3-70</td>
                <td className="p-3 text-stone-600">徳島駅周辺</td>
                <td className="p-3 text-stone-600">有り　60台　無料　予約不要</td>
                <td className="p-3 font-bold text-amber-600">★4.36（650件）</td>
                <td className="p-3 font-bold text-rose-600">¥4,500〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F187619%2F187619.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">4. ハイパーイン　メイアップ徳島</td>
                <td className="p-3 text-stone-600">徳島県徳島市幸町3-108</td>
                <td className="p-3 text-stone-600">徳島駅周辺</td>
                <td className="p-3 text-stone-600">600円/泊・日中駐車400円※2026年10月1日より700円/泊・日中駐車500円に変更</td>
                <td className="p-3 font-bold text-amber-600">★4.12（1552件）</td>
                <td className="p-3 font-bold text-rose-600">¥4,700〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F17801%2F17801.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              </tbody>
            </table>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold text-stone-900 border-l-4 border-amber-600 pl-3">
              🏨 各宿の宿泊者リアルクチコミ・客室イメージ・項目別評価データ
            </h3>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #1</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">アパホテル〈徳島駅前〉</h3>
                  <span className="text-xs text-stone-400 ml-2">（あぱほてるとくしまえきまえ）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥3,950〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/7503/7503_room.jpg" alt="アパホテル〈徳島駅前〉 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>全室50型液晶テレビ・有線LAN・無線LAN（Wi-Fi）・VOD（ビデオオンデマンド）全客室完備</p>
                  <p><strong>【所在地・アクセス】</strong>〒 徳島県徳島市一番町2-21 ／ 最寄り駅：徳島 ／ 交通案内：ＪＲ徳島駅より徒歩3分、徳島阿波踊り空港から車で20分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>敷地内有料駐車場: 4台　先着順サイズ制限有</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.06 ／ 立地 ★4.01 ／ 部屋 ★3.93 ／ 設備 ★3.86 ／ 風呂 ★3.77 ／ 食事 ★3.94</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「駅近で便利だが部屋が狭く期待外れ駅から近いのはわかっていたのでアパホテルの看板?探してついつい上を見上げましたが見えずGoogleマップを使って辿り着きました 駅からすぐでよかったのですが部屋がと…　2026-10-08 16:47:14投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #2</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">ハイパーイン　ホテル越久（えちひさ）</h3>
                  <span className="text-xs text-stone-400 ml-2">（はいぱーいん　えちひさ）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥4,200〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/8830/8830.jpg" alt="ハイパーイン　ホテル越久（えちひさ） 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>繁華街、ビジネス街に近くて便利。川辺で閑静です。全館Wi-Fi接続無料(有線LANもあり)</p>
                  <p><strong>【所在地・アクセス】</strong>〒 徳島県徳島市富田浜1-22 ／ 最寄り駅：徳島 ／ 交通案内：ＪＲ徳島駅より徒歩15分/徳島ICより車で20分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>600円/泊 日中駐車代金400円※23時以降お車の出入不可。10月1日より駐車代金改訂となります。</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.1 ／ 立地 ★3.93 ／ 部屋 ★3.86 ／ 設備 ★3.71 ／ 風呂 ★3.81 ／ 食事 ★4.17</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「エレベーター完備で移動が楽、朝食も絶品エレベーターがあるので、キャリーバックがあっても問題なく部屋まで行けます。朝食のバイキングがとてもおいしかったです。クチコミの詳細はこちらから　htt…　2026-09-25 13:21:26投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #3</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">天空のスカイビューホテル　眉山海月</h3>
                  <span className="text-xs text-stone-400 ml-2">（てんくうのすかいびゅーほてる　びざんかいげつ）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥4,500〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/187619/187619.jpg" alt="天空のスカイビューホテル　眉山海月 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>絶景レストランで徳島グルメのビュッフェを堪能。お部屋から望む夜景は最高！</p>
                  <p><strong>【所在地・アクセス】</strong>〒 徳島県徳島市八万町中津山3-70 ／ 最寄り駅：徳島 ／ 交通案内：JR徳島駅から車で約15分【駐車場無料】。無料送迎は徳島駅、眉山ロープウェイ　山頂駅にて（前日までの事前予約が必要）</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　60台　無料　予約不要</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.37 ／ 立地 ★4.49 ／ 部屋 ★4.35 ／ 設備 ★4.22 ／ 風呂 ★4.29 ／ 食事 ★4.5</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「価格とサービスのバランスに少し不満あり所々、リニューアルされていました。が、人手が足りていないと感じる場面が何度もありました。お風呂場は洗い場の排水が追いついていないのか?ザブザブと溜まっ…　2026-10-09 13:26:37投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #4</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">ハイパーイン　メイアップ徳島</h3>
                  <span className="text-xs text-stone-400 ml-2">（はいぱーいん　めいあっぷとくしま）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥4,700〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/17801/17801_s.jpg" alt="ハイパーイン　メイアップ徳島 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>最終チェックイン時間が24:00となります。(チェックイン後は夜間も出入り可能)</p>
                  <p><strong>【所在地・アクセス】</strong>〒 徳島県徳島市幸町3-108 ／ 最寄り駅：徳島 ／ 交通案内：JR徳島駅より徒歩10～15分・車で5分以内／徳島ICより車で15分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>600円/泊・日中駐車400円※2026年10月1日より700円/泊・日中駐車500円に変更</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.26 ／ 立地 ★3.96 ／ 部屋 ★3.99 ／ 設備 ★4.05 ／ 風呂 ★3.96 ／ 食事 ★4.33</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「今回も美味しい朝食に大満足、また利用したい2度目のリピです。今回も美味しい朝食で、満足です。また徳島に伺う機会があれば、利用させていただきます。クチコミの詳細はこちらから　https:…　2026-10-08 13:30:17投稿」
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-6 border-t border-stone-200">
            <h3 className="text-lg font-bold text-stone-900 border-l-4 border-teal-600 pl-3">
              🗺️ あわせて巡りたい！徳島県の代表的な観光名所・歴史自然ガイド（Wikipedia公認画像・解説）
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              宿泊前後の1泊2日・2泊3日モデルコースに組み込みたい、徳島県を代表する名所・絶景スポットの解説です。チェックイン前後の荷物預かりや駅周辺のレンタカー・周遊バスを活用すると効率よく巡ることができます。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #1</span>
                <h3 className="text-base font-bold text-stone-900">鳴門の渦潮（大鳴門橋）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">播磨灘と紀伊水道の干満差によって発生する世界最大級の渦潮。「渦の道」の海上遊歩道ガラス床から見下ろす激しい潮流と渦巻きは大迫力です。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #2</span>
                <h3 className="text-base font-bold text-stone-900">祖谷のかずら橋（秘境・祖谷）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">日本三大秘境・祖谷渓谷に架かるシラクチカズラで作られたスリル満点の吊り橋。一歩踏みだすたびにギシギシと揺れ、足下の隙間から見える吉野川が爽快です。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #3</span>
                <h3 className="text-base font-bold text-stone-900">大塚国際美術館</h3>
                <p className="text-xs text-stone-600 leading-relaxed">世界初の陶板名画美術館。レオナルド・ダ・ヴィンチの『最後の晩餐』やフェルメールの『真珠の耳飾りの少女』など1,000点以上の西洋名画が原寸大で完全再現されています。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #4</span>
                <h3 className="text-base font-bold text-stone-900">眉山（びざん）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">徳島市街の中心に位置し「眉の如く雲居に見ゆる」と万葉集にも詠まれた徳島のシンボル。ロープウェイで登る山頂からは吉野川と徳島平野を一望できます。</p>
              </div>
            </div>
            </div>
          </div>

          <div className="bg-amber-50/70 rounded-2xl p-5 md:p-6 border border-amber-200 space-y-3 text-xs text-stone-700 leading-relaxed">
            <h3 className="text-sm md:text-base font-bold text-amber-950">
              💡 徳島県エリアの宿泊予約・シーズン別ベストタイミングと節約ノウハウ
            </h3>
            <p>
              <strong>1. 早期予約と楽天トラベルクーポンの併用：</strong> 徳島県の人気温泉宿・リゾートホテルは、週末や連休・紅葉・年末年始の60日〜30日前から一気に予約が埋まります。毎月5と0のつく日やスーパーSALE期間中に配布される宿クーポン・自治体クーポンを併用すると、通常より最大10〜20%お得に予約可能です。
            </p>
            <p>
              <strong>2. 夕食・朝食プランと部屋タイプの選び方：</strong> 地元産の旬魚介やブランド牛会席を味わうなら「夕朝食付きプラン」、周辺の屋台・老舗居酒屋・ご当地グルメを食べ歩くなら「朝食付き」または「素泊まり＋天然温泉大浴場付きホテル」を選ぶと予算と満足度のバランスが最適化されます。
            </p>
          </div>
        </section>

      </main>
  );
}
