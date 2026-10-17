import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, Star, MapPin, Tag, CheckCircle2, AlertCircle, Utensils, Mountain, Waves, Sparkles, Train } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: {
    canonical: "https://croud-travel.pages.dev/autumn-budget-yamanashi-kofu-station-shosenkyo-houtou-hotels-stay/",
  },

  title: '甲府駅前：特別名勝昇仙峡の紅葉＆名物ほうとう・甲州ワイン！3,000円台〜泊まれる格安ホテル5選',
  description: '日本一の渓谷美を誇る特別名勝・昇仙峡の錦秋紅葉！カボチャと根菜が染み渡る熱々の名物ほうとうや新酒甲州ワイン。JR中央本線・甲府駅周辺で1泊3,000円台〜泊まれる超高コスパ格安ホテル厳選5選。',
  openGraph: {
    title: "甲府駅前：特別名勝昇仙峡の紅葉＆名物ほうとう・甲州ワイン！3,000円台〜泊まれる格安ホテル5選",
    description: "日本一の渓谷美を誇る特別名勝・昇仙峡の錦秋紅葉！カボチャと根菜が染み渡る熱々の名物ほうとうや新酒甲州ワイン。JR中央本線・甲府駅周辺で1泊3,000円台〜泊まれる超高コスパ格安ホテル厳選5選。",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "甲府駅前：特別名勝昇仙峡の紅葉＆名物ほうとう・甲州ワイン！3,000円台〜泊まれる格安ホテル5選",
    description: "日本一の渓谷美を誇る特別名勝・昇仙峡の錦秋紅葉！カボチャと根菜が染み渡る熱々の名物ほうとうや新酒甲州ワイン。JR中央本線・甲府駅周辺で1泊3,000円台〜泊まれる超高コスパ格安ホテル厳選5選。",
  }
};

export default function AutumnBudgetHotelsPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 pb-24">
      {/* パンくずリスト */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 py-3 text-xs text-slate-500 flex items-center space-x-2 overflow-x-auto whitespace-nowrap">
          <Link href="/" className="hover:text-amber-600 transition">ホーム</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <Link href="/#autumn-features" className="hover:text-amber-600 transition">秋の特集一覧</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <span className="text-slate-800 font-medium">甲府駅前 昇仙峡紅葉・ほうとう 格安宿5選</span>
        </div>
      </div>

      {/* ヒーローセクション */}
      <section className="relative bg-gradient-to-br from-amber-950 via-stone-950 to-slate-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold tracking-wider border border-amber-400/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>国指定特別名勝昇仙峡の奇岩紅葉＆熱々ほうとう・新酒ワイン</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight leading-snug">「甲府駅前」昇仙峡の錦秋＆名物ほうとう！<br className="hidden sm:inline" />3,000円台〜泊まれる格安・高コスパ宿5選</h1>
          <p className="text-sm md:text-base text-amber-100/90 max-w-2xl mx-auto leading-relaxed">
            奇岩と清流が織りなす日本一の渓谷美「御嶽昇仙峡」。秋には覚円峰や仙娥滝を包み込むモミジやカエデの錦秋絵巻が広がります。鉄鍋でグツグツ煮込まれる山梨の郷土料理「甲州ほうとう」や解禁されたばかりの「甲州ヌーヴォー」に舌鼓！甲府駅周辺で3,000円台〜泊まれる優良ホテルを厳選。
          </p>
        </div>
      </section>

      {/* イントロダクション */}
      <section className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
          <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <Utensils className="w-5 h-5 text-amber-600" />
            特急あずさ・かいじ発着の甲府駅前に格安宿が集結！浮いた予算で甲州牛ほうとうやワイナリー巡りを満喫
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            新宿から特急で約1時間半の甲府駅周辺は、武田信玄公像が迎える南口や舞鶴城公園を望む北口にホテルが密集。1泊3,000円台〜5,000円台で快適な部屋を確保でき、浮いた旅費で駅前居酒屋の甲府鳥もつ煮や甲州牛ステーキ、勝沼醸造のグラスワインを贅沢に楽しめます。
          </p>
        </div>
      </section>

      {/* 観光地ガイド・公式Wikipedia写真＆解説 */}
      <div className="max-w-4xl mx-auto px-4">
        <section className="bg-white rounded-2xl border border-stone-200/90 overflow-hidden shadow-sm mb-10">
          <div className="bg-gradient-to-r from-stone-900 to-stone-800 text-white px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
              <h2 className="text-base md:text-lg font-bold tracking-wide">天下一の奇岩怪石と清流：特別名勝 御嶽昇仙峡</h2>
            </div>
            <span className="text-[11px] text-stone-300 bg-white/10 px-2.5 py-0.5 rounded-full border border-white/10">特別名勝・日本屈指の渓谷美</span>
          </div>
          <div className="flex flex-col gap-6 p-6">
            <div className="w-full relative aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden bg-stone-100 border border-stone-200/60 shadow-inner">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Kakuenpou_in_autumn.jpg?utm_source=ja.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
                alt="天下一の奇岩怪石と清流：特別名勝 御嶽昇仙峡"
                fill
                className="object-cover hover:scale-105 transition duration-500"
                sizes="(max-width: 768px) 100vw, 400px"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-2 text-right">
                <span className="text-[10px] text-white/90">写真：Wikimedia Commons</span>
              </div>
            </div>
            <div className="w-full space-y-3">
              <h3 className="text-lg md:text-xl font-bold text-stone-900 leading-snug">主峰覚円峰を彩る紅葉と仙娥滝・水晶発祥の渓谷美</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
                昇仙峡（しょうせんきょう）は、山梨県甲府市の荒川上流にある国の特別名勝に指定された渓谷。花崗岩が長い年月をかけて削られた断崖や奇岩が約5kmにわたって続き、高さ約180mの主峰「覚円峰（かくえんぽう）」や落差約30mの仙娥滝などダイナミックな景観を誇ります。秋には奇岩の白壁と鮮やかなモミジのコントラストが見事で、関東甲信越屈指の紅葉名所として親しまれます。
              </p>
              <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-400">
                <span>出典: フリー百科事典『ウィキペディア（Wikipedia）』</span>
                <span className="text-amber-700 font-semibold">JR甲府駅南口バスターミナルより路線バス約30分〜50分（昇仙峡口・滝上行）</span>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* 宿一覧 */}
      <section className="max-w-4xl mx-auto px-4 space-y-8">
        {/* 宿1: 甲府駅北口　徒歩１分　ホテルニューステーション＜山梨県＞ */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-amber-100 text-amber-800 text-xs font-bold rounded-md">最安3,250円〜・甲府駅前好アクセス・格安素泊まり</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>3.47</span>
                <span className="text-slate-400 text-xs font-normal">（1790件のクチコミ）</span>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="w-full relative aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden bg-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/5690/5690.jpg"
                  alt="甲府駅北口　徒歩１分　ホテルニューステーション＜山梨県＞"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="w-full space-y-3">
                <h3 className="text-xl font-bold text-slate-900 leading-snug">
                  甲府駅北口　徒歩１分　ホテルニューステーション＜山梨県＞
                </h3>
                <p className="text-xs text-slate-500 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 shrink-0 text-slate-400" />
                  甲府
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  甲府駅周辺で1名1泊3,250円〜という破格の安さを実現。無駄を省いたシンプルで清潔な個室で、浮いた予算を昇仙峡ロープウェイや駅前の老舗ほうとう店「小作」での贅沢ディナーに思い切り回せます。
                </p>
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                  <span className="text-xs font-bold text-slate-700 block mb-1">宿泊プラン目安</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs text-slate-500">1名1泊目安</span>
                    <span className="text-2xl font-black text-rose-600">¥6,490</span>
                    <span className="text-xs text-slate-500">〜（税込）</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F5690%2F5690.html"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 text-white font-bold rounded-xl shadow-sm hover:shadow transition"
              >
                <span>楽天トラベルで最安プランをチェック</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* 宿2: ホテルクラウンヒルズ甲府　甲府駅前（ＢＢＨホテルグループ） */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-amber-100 text-amber-800 text-xs font-bold rounded-md">駅南口徒歩1分・安心の無料朝食バイキング・★4.08</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>3.48</span>
                <span className="text-slate-400 text-xs font-normal">（1416件のクチコミ）</span>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="w-full relative aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden bg-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/963/963.jpg"
                  alt="ホテルクラウンヒルズ甲府　甲府駅前（ＢＢＨホテルグループ）"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="w-full space-y-3">
                <h3 className="text-xl font-bold text-slate-900 leading-snug">
                  ホテルクラウンヒルズ甲府　甲府駅前（ＢＢＨホテルグループ）
                </h3>
                <p className="text-xs text-slate-500 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 shrink-0 text-slate-400" />
                  甲府
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  甲府駅南口から徒歩1分の抜群のアクセス。清潔感のある客室と、毎朝無料で提供される健康的でおいしい朝食バイキングが人気。出張だけでなく一人旅や昇仙峡ハイキングの拠点にも最適です。
                </p>
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                  <span className="text-xs font-bold text-slate-700 block mb-1">宿泊プラン目安</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs text-slate-500">1名1泊目安</span>
                    <span className="text-2xl font-black text-rose-600">¥5,200</span>
                    <span className="text-xs text-slate-500">〜（税込）</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F963%2F963.html"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 text-white font-bold rounded-xl shadow-sm hover:shadow transition"
              >
                <span>楽天トラベルで最安プランをチェック</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* 宿3: 東横ＩＮＮ甲府駅南口１ */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-amber-100 text-amber-800 text-xs font-bold rounded-md">駅南口徒歩1分・機能的な客室空間・★3.94</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>4.08</span>
                <span className="text-slate-400 text-xs font-normal">（1283件のクチコミ）</span>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="w-full relative aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden bg-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/52640/52640.jpg"
                  alt="東横ＩＮＮ甲府駅南口１"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="w-full space-y-3">
                <h3 className="text-xl font-bold text-slate-900 leading-snug">
                  東横ＩＮＮ甲府駅南口１
                </h3>
                <p className="text-xs text-slate-500 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 shrink-0 text-slate-400" />
                  甲府
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  甲府駅南口の繁華街近くに位置し、駅前飲食店やコンビニが目の前。機能的なベッドと使い勝手の良い設備が揃い、夜遅くの到着でも安心してチェックインできます。
                </p>
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                  <span className="text-xs font-bold text-slate-700 block mb-1">宿泊プラン目安</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs text-slate-500">1名1泊目安</span>
                    <span className="text-2xl font-black text-rose-600">¥5,355</span>
                    <span className="text-xs text-slate-500">〜（税込）</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F52640%2F52640.html"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 text-white font-bold rounded-xl shadow-sm hover:shadow transition"
              >
                <span>楽天トラベルで最安プランをチェック</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* 宿4: 東横ＩＮＮ甲府駅南口２ */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-amber-100 text-amber-800 text-xs font-bold rounded-md">駅前徒歩1分・最安5,200円〜・無料朝食サービス</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>3.94</span>
                <span className="text-slate-400 text-xs font-normal">（1061件のクチコミ）</span>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="w-full relative aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden bg-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/108361/108361.jpg"
                  alt="東横ＩＮＮ甲府駅南口２"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="w-full space-y-3">
                <h3 className="text-xl font-bold text-slate-900 leading-snug">
                  東横ＩＮＮ甲府駅南口２
                </h3>
                <p className="text-xs text-slate-500 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 shrink-0 text-slate-400" />
                  甲府
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  甲府駅前通りに面した便利な立地。手頃な宿泊料金に加え、無料の朝食サービスが付いてコスパ抜群。信玄公像前での記念撮影や舞鶴城公園の散策にもすぐ出かけられます。
                </p>
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                  <span className="text-xs font-bold text-slate-700 block mb-1">宿泊プラン目安</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs text-slate-500">1名1泊目安</span>
                    <span className="text-2xl font-black text-rose-600">¥5,618</span>
                    <span className="text-xs text-slate-500">〜（税込）</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F108361%2F108361.html"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 text-white font-bold rounded-xl shadow-sm hover:shadow transition"
              >
                <span>楽天トラベルで最安プランをチェック</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* 宿5: トラベルイン甲府 */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-amber-100 text-amber-800 text-xs font-bold rounded-md">駅北口徒歩1分・好立地ビジネスホテル・★3.47</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>3.66</span>
                <span className="text-slate-400 text-xs font-normal">（132件のクチコミ）</span>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="w-full relative aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden bg-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/187168/187168.jpg"
                  alt="トラベルイン甲府"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="w-full space-y-3">
                <h3 className="text-xl font-bold text-slate-900 leading-snug">
                  トラベルイン甲府
                </h3>
                <p className="text-xs text-slate-500 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 shrink-0 text-slate-400" />
                  甲府
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  甲府駅北口を出て徒歩1分の好立地。舞鶴城公園やよっちゃばれ広場に近く、静かで落ち着いた環境。重い荷物をすぐに預けて昇仙峡行きのバス乗り場へスムーズに向かえます。
                </p>
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                  <span className="text-xs font-bold text-slate-700 block mb-1">宿泊プラン目安</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs text-slate-500">1名1泊目安</span>
                    <span className="text-2xl font-black text-rose-600">¥3,250</span>
                    <span className="text-xs text-slate-500">〜（税込）</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F187168%2F187168.html"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 text-white font-bold rounded-xl shadow-sm hover:shadow transition"
              >
                <span>楽天トラベルで最安プランをチェック</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 予約のコツ・アドバイス */}
      <section className="max-w-4xl mx-auto px-4 mt-12">
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200/80 rounded-2xl p-6 md:p-8 space-y-4">
          <h2 className="text-lg font-bold text-amber-950 flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-amber-600" />
            秋の格安旅行をお得に満喫するためのポイント
          </h2>
          <div className="grid md:grid-cols-3 gap-4 pt-2">
            <div className="bg-white/80 rounded-xl p-4 border border-amber-100">
              <h3 className="font-bold text-sm text-slate-900 mb-1">平日泊で更なる割引</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                紅葉シーズンは金曜・土曜の宿泊料金が高騰しがちですが、日〜木曜の平日泊なら最安プランが狙い目。人混みも少なく快適に名所を楽しめます。
              </p>
            </div>
            <div className="bg-white/80 rounded-xl p-4 border border-amber-100">
              <h3 className="font-bold text-sm text-slate-900 mb-1">直前割＆早割を活用</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                14日前〜28日前までの早期予約や、空室が出た直前のタイムセールを狙うことで、通常価格より1,000円〜2,000円以上安く泊まれるチャンスがあります。
              </p>
            </div>
            <div className="bg-white/80 rounded-xl p-4 border border-amber-100">
              <h3 className="font-bold text-sm text-slate-900 mb-1">浮いた予算で旬の味覚</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                宿泊を賢く格安ホテルに抑えることで、浮いた数千円の予算をご当地の豪華な旬の味覚や地酒ディナー、日帰り温泉の入浴料に贅沢に使えます。
              </p>
            </div>
          </div>
        </div>
      </section>
    
        {/* Enriched Rakuten API & Wikipedia Tourist Guide */}
        <section data-enriched-rakuten-wiki="true" className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200 space-y-8 my-10">
          <div className="space-y-2 border-b border-stone-200 pb-4">
            <span className="text-[11px] font-extrabold text-amber-700 bg-amber-50 border border-amber-200 px-3 py-0.5 rounded-full uppercase">
              RAKUTEN TRAVEL API &amp; LOCAL GUIDE
            </span>
            <h2 className="text-xl md:text-2xl font-bold text-stone-900">
              📊 甲府駅前：特別名勝昇仙峡の紅葉＆名物ほうとう・甲州ワイン！3,000円台〜泊まれる格安ホテル5選：掲載宿スペック一覧比較表＆宿泊者クチコミ・アクセス詳細分析
            </h2>
            <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
              楽天トラベル公式APIより取得した「甲府駅前：特別名勝昇仙峡の紅葉＆名物ほうとう・甲州ワイン！3,000円台〜泊まれる格安ホテル5選」掲載宿の所在地・最寄り駅・駐車場条件・クチコミ評価・参考最安料金を一覧で比較できます。公共交通機関（新幹線・在来線・送迎バス）利用の方もマイカー・レンタカー利用の方も、旅のスタイルに合った一軒をお選びください。
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
                <td className="p-3 font-bold text-stone-900">1. 甲府駅北口　徒歩１分　ホテルニューステーション＜山梨県＞</td>
                <td className="p-3 text-stone-600">山梨県甲府市北口1-4-15</td>
                <td className="p-3 text-stone-600">甲府駅周辺</td>
                <td className="p-3 text-stone-600">有料駐車場9台600円・バイク500円（ご予約がない場合は先着順　満車の場合は近隣有料駐車場へ）</td>
                <td className="p-3 font-bold text-amber-600">★3.47（1795件）</td>
                <td className="p-3 font-bold text-rose-600">¥6,490〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F5690%2F5690.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">2. ホテルクラウンヒルズ甲府　甲府駅前（ＢＢＨホテルグループ）</td>
                <td className="p-3 text-stone-600">山梨県甲府市北口1-2-17</td>
                <td className="p-3 text-stone-600">甲府駅周辺</td>
                <td className="p-3 text-stone-600">駐車場１泊800円先着制10台まで</td>
                <td className="p-3 font-bold text-amber-600">★3.49（1419件）</td>
                <td className="p-3 font-bold text-rose-600">¥5,200〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F963%2F963.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">3. 東横ＩＮＮ甲府駅南口１</td>
                <td className="p-3 text-stone-600">山梨県甲府市丸の内1-13-20</td>
                <td className="p-3 text-stone-600">甲府駅周辺</td>
                <td className="p-3 text-stone-600">駐車場有　800〜1000円（税込／泊）満車時は徒歩5分の提携コインパーキングへのご案内となります。</td>
                <td className="p-3 font-bold text-amber-600">★4.07（1286件）</td>
                <td className="p-3 font-bold text-rose-600">¥5,355〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F52640%2F52640.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">4. 東横ＩＮＮ甲府駅南口２</td>
                <td className="p-3 text-stone-600">山梨県甲府市丸の内２－３－２</td>
                <td className="p-3 text-stone-600">甲府駅周辺</td>
                <td className="p-3 text-stone-600">立体64台・平置6台（うち車いす優先1台・要予約）先着順 ￥1000／泊・時間外￥100／時</td>
                <td className="p-3 font-bold text-amber-600">★3.95（1072件）</td>
                <td className="p-3 font-bold text-rose-600">¥5,618〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F108361%2F108361.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">5. トラベルイン甲府</td>
                <td className="p-3 text-stone-600">山梨県甲府市丸の内3-19-10</td>
                <td className="p-3 text-stone-600">甲府駅周辺</td>
                <td className="p-3 text-stone-600">有り　19台　500円（税込み／泊）</td>
                <td className="p-3 font-bold text-amber-600">★3.64（135件）</td>
                <td className="p-3 font-bold text-rose-600">¥3,310〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F187168%2F187168.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
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
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">甲府駅北口　徒歩１分　ホテルニューステーション＜山梨県＞</h3>
                  <span className="text-xs text-stone-400 ml-2">（こうふえききたぐち　とほいっぷん　ほてるにゅーすてーしょん＜やまなしけん＞）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥6,490〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/5690/5690_sig.jpg" alt="甲府駅北口　徒歩１分　ホテルニューステーション＜山梨県＞ 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>JR甲府駅最寄りのホテル★徒歩1分★有料駐車場※事前予約制 【無料日替わり朝食】</p>
                  <p><strong>【所在地・アクセス】</strong>〒 山梨県甲府市北口1-4-15 ／ 最寄り駅：甲府 ／ 交通案内：JR甲府駅北口より徒歩１分　甲府南ＩＣ及び甲府昭和ＩＣより車で約15分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有料駐車場9台600円・バイク500円（ご予約がない場合は先着順　満車の場合は近隣有料駐車場へ）</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★3.69 ／ 立地 ★3.91 ／ 部屋 ★3.38 ／ 設備 ★3.29 ／ 風呂 ★3.33</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「駅チカ以外は不満、設備に難あり女子向きではないオートロックじゃないと説明もなかったしシャワーは暴れだすし駅チカって事以外評価する所はないですクチコミの詳細はこちらから　…　2026-10-08 19:45:22投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #2</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">ホテルクラウンヒルズ甲府　甲府駅前（ＢＢＨホテルグループ）</h3>
                  <span className="text-xs text-stone-400 ml-2">（ほてるくらうんひるずこうふ　こうふえきまえ）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥5,200〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/963/963_si.jpg" alt="ホテルクラウンヒルズ甲府　甲府駅前（ＢＢＨホテルグループ） 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>甲府駅北口徒歩3分、和洋バイキングや大浴場(男女交代制)、会議室も備えた快適ホテル♪</p>
                  <p><strong>【所在地・アクセス】</strong>〒 山梨県甲府市北口1-2-17 ／ 最寄り駅：甲府 ／ 交通案内：JR甲府駅北口より、徒歩3分の好立地</p>
                  <p><strong>【駐車場・マイカー利用】</strong>駐車場１泊800円先着制10台まで</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★3.57 ／ 立地 ★3.65 ／ 部屋 ★3.48 ／ 設備 ★3.44 ／ 風呂 ★3.51 ／ 食事 ★3.72</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「枕がやわらかすぎること以外は快適何年ぶりかの宿泊でした。施設も古くなってきましたが、枕がやわらかすぎること以外は不満はなかったです。クチコミの詳細はこちらから　https://revi…　2026-10-08 18:11:29投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #3</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">東横ＩＮＮ甲府駅南口１</h3>
                  <span className="text-xs text-stone-400 ml-2">（とうよこいんこうふえきみなみぐちいち）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥5,355〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/52640/52640_si.jpg" alt="東横ＩＮＮ甲府駅南口１ 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>JR甲府駅から徒歩7分で朝食・小学生以下添い寝無料のホテル！舞鶴城址公園まで徒歩1分</p>
                  <p><strong>【所在地・アクセス】</strong>〒 山梨県甲府市丸の内1-13-20 ／ 最寄り駅：甲府 ／ 交通案内：ＪＲ　甲府駅より徒歩７分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>駐車場有　800〜1000円（税込／泊）満車時は徒歩5分の提携コインパーキングへのご案内となります。</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.09 ／ 立地 ★3.98 ／ 部屋 ★4.08 ／ 設備 ★3.99 ／ 風呂 ★3.93 ／ 食事 ★3.99</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「エアウィーヴとリファ完備で快適な空間プレミアムプラスルームに1泊しましたが、ベッドもピローもエアウィーブで快適でした!リファのドライヤーとカールアイロンも良かったですね。お部屋は清潔感がありも…　2026-10-08 00:30:50投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #4</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">東横ＩＮＮ甲府駅南口２</h3>
                  <span className="text-xs text-stone-400 ml-2">（とうよこいんこうふえきみなみぐちつー）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥5,618〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/108361/108361.jpg" alt="東横ＩＮＮ甲府駅南口２ 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>JR甲府駅から徒歩1分で朝食・小学生以下添い寝無料のホテル！甲州夢小路まで車で5分</p>
                  <p><strong>【所在地・アクセス】</strong>〒 山梨県甲府市丸の内２－３－２ ／ 最寄り駅：甲府 ／ 交通案内：電車：JR甲府駅南口より徒歩1分／車：中央道甲府南ICから15分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>立体64台・平置6台（うち車いす優先1台・要予約）先着順 ￥1000／泊・時間外￥100／時</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★3.95 ／ 立地 ★4.06 ／ 部屋 ★3.96 ／ 設備 ★3.88 ／ 風呂 ★3.84 ／ 食事 ★3.86</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「駅至近で飲食店も多く、朝食の持ち帰りが便利初めての宿泊でしたが駅至近で、周辺の飲食店も充実しており出張には便利でした。朝食が部屋に持ち帰れるのが良い。クチコミの詳細はこちらから　https…　2026-10-02 17:29:46投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #5</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">トラベルイン甲府</h3>
                  <span className="text-xs text-stone-400 ml-2">（とらべるいん　こうふ）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥3,310〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/187168/187168.jpg" alt="トラベルイン甲府 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>甲府駅より徒歩10分｜軽朝食サービス（無料）｜ビジネス・観光の拠点に便利｜貸切風呂あり</p>
                  <p><strong>【所在地・アクセス】</strong>〒 山梨県甲府市丸の内3-19-10 ／ 最寄り駅：甲府 ／ 交通案内：JR中央本線甲府駅徒歩10分、中央道甲府昭和ICから車で10分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　19台　500円（税込み／泊）</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★3.83 ／ 立地 ★3.6 ／ 部屋 ★3.57 ／ 設備 ★3.43 ／ 風呂 ★3.38 ／ 食事 ★3.91</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「コスパ抜群、手作り朝食と地ビールが最高ちょっと奥まった場所ですが、駅から徒歩でも問題ありません。設備は最低限ですが、「こちらで片付けるのでそのまま置いておいてもらって大丈夫です」というサービス精神…　2026-10-05 23:05:43投稿 &lt;a href=&quot;https://img.travel.rakuten.co.jp/image/tr/api/hs/RmfmX/?f_hotel_no=187168&quot; class=&quot;3click&quot;」
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-6 border-t border-stone-200">
            <h3 className="text-lg font-bold text-stone-900 border-l-4 border-teal-600 pl-3">
              🗺️ あわせて巡りたい！山梨県の代表的な観光名所・歴史自然ガイド（Wikipedia公認画像・解説）
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              宿泊前後の1泊2日・2泊3日モデルコースに組み込みたい、山梨県を代表する名所・絶景スポットの解説です。チェックイン前後の荷物預かりや駅周辺のレンタカー・周遊バスを活用すると効率よく巡ることができます。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #1</span>
                <h3 className="text-base font-bold text-stone-900">富士山（吉田ルート/五合目）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">日本の最高峰であり世界文化遺産の象徴。富士スバルラインで行く五合目は観光施設が充実し、眼下に雲海を望む圧巻のスタート地点です。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #2</span>
                <h3 className="text-base font-bold text-stone-900">新倉山浅間公園（忠霊塔）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">五重塔（忠霊塔）越しに雄大な富士山と満開の桜を一望できる、世界中の観光客が熱望する「これぞ日本」という究極のアジアンビジュアルスポット。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #3</span>
                <h3 className="text-base font-bold text-stone-900">富士五湖（河口湖）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">富士山の北麓に位置する静かな湖畔リゾート。四季折々の富士山が水面に映る「逆さ富士」や、大石公園のコキア・ラベンダー越しのアングルが人気です。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #4</span>
                <h3 className="text-base font-bold text-stone-900">勝沼ぶどうの丘</h3>
                <p className="text-xs text-stone-600 leading-relaxed">日本有数のワイン産地・勝沼の高台に立つ総合ワインリゾート。タパスとともに100種類以上の甲州ワインを試飲できる地下ワインカーヴが魅力です。</p>
              </div>
            </div>
            </div>
          </div>

          <div className="bg-amber-50/70 rounded-2xl p-5 md:p-6 border border-amber-200 space-y-3 text-xs text-stone-700 leading-relaxed">
            <h3 className="text-sm md:text-base font-bold text-amber-950">
              💡 山梨県エリアの宿泊予約・シーズン別ベストタイミングと節約ノウハウ
            </h3>
            <p>
              <strong>1. 早期予約と楽天トラベルクーポンの併用：</strong> 山梨県の人気温泉宿・リゾートホテルは、週末や連休・紅葉・年末年始の60日〜30日前から一気に予約が埋まります。毎月5と0のつく日やスーパーSALE期間中に配布される宿クーポン・自治体クーポンを併用すると、通常より最大10〜20%お得に予約可能です。
            </p>
            <p>
              <strong>2. 夕食・朝食プランと部屋タイプの選び方：</strong> 地元産の旬魚介やブランド牛会席を味わうなら「夕朝食付きプラン」、周辺の屋台・老舗居酒屋・ご当地グルメを食べ歩くなら「朝食付き」または「素泊まり＋天然温泉大浴場付きホテル」を選ぶと予算と満足度のバランスが最適化されます。
            </p>
          </div>
        </section>

      </main>
  );
}
