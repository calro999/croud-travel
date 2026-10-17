import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, Star, MapPin, Tag, CheckCircle2, AlertCircle, Utensils, Mountain, Waves, Sparkles, Train } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: {
    canonical: "https://croud-travel.pages.dev/autumn-budget-tokushima-iya-valley-momiji-ramen-hotels-stay/",
  },

  title: '徳島：大歩危・祖谷渓の秘境紅葉と阿波尾鶏！4,000円台〜泊まれる格安ホテル5選',
  description: '日本三大秘境「祖谷渓のかずら橋」や大歩危峡の絶壁紅葉！甘辛スープの徳島ラーメンや地鶏阿波尾鶏を堪能。徳島駅前で1泊4,000円台から泊まれる格安・高評価ホテル厳選5選。',
  openGraph: {
    title: "徳島：大歩危・祖谷渓の秘境紅葉と阿波尾鶏！4,000円台〜泊まれる格安ホテル5選",
    description: "日本三大秘境「祖谷渓のかずら橋」や大歩危峡の絶壁紅葉！甘辛スープの徳島ラーメンや地鶏阿波尾鶏を堪能。徳島駅前で1泊4,000円台から泊まれる格安・高評価ホテル厳選5選。",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "徳島：大歩危・祖谷渓の秘境紅葉と阿波尾鶏！4,000円台〜泊まれる格安ホテル5選",
    description: "日本三大秘境「祖谷渓のかずら橋」や大歩危峡の絶壁紅葉！甘辛スープの徳島ラーメンや地鶏阿波尾鶏を堪能。徳島駅前で1泊4,000円台から泊まれる格安・高評価ホテル厳選5選。",
  }
};

export default function AutumnBudgetTokushimaHotelsPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 pb-24">
      {/* パンくずリスト */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 py-3 text-xs text-slate-500 flex items-center space-x-2 overflow-x-auto whitespace-nowrap">
          <Link href="/" className="hover:text-teal-600 transition">ホーム</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <Link href="/#autumn-features" className="hover:text-teal-600 transition">秋の特集一覧</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <span className="text-slate-800 font-medium">徳島 祖谷渓紅葉・阿波尾鶏 格安宿5選</span>
        </div>
      </div>

      {/* ヒーローセクション */}
      <section className="relative bg-gradient-to-br from-teal-950 via-emerald-950 to-slate-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 text-xs font-semibold tracking-wider border border-teal-400/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>日本三大秘境祖谷の紅葉＆名物阿波尾鶏</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight leading-snug">「徳島」祖谷渓の秘境紅葉＆徳島ラーメン！<br className="hidden sm:inline" />4,000円台〜泊まれる格安・高コスパ宿5選</h1>
          <p className="text-sm md:text-base text-teal-100/90 max-w-2xl mx-auto leading-relaxed">
            エメラルドグリーンの吉野川と燃えるような紅葉が崖を彩る「大歩危・祖谷渓」。祖谷のかずら橋を渡るスリルと錦秋の絶景を味わった後は、徳島駅前で豚骨醤油スープと生卵が絡む「徳島ラーメン」やコク豊かな「地鶏阿波尾鶏」に舌鼓！4,000円台〜の優良ホテルをご紹介。
          </p>
        </div>
      </section>

      {/* イントロダクション */}
      <section className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
          <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <Utensils className="w-5 h-5 text-teal-600" />
            宿泊代4,000円台！浮いた予算で鳴門鯛・阿波牛・すだち酒を堪能
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            本州から明石海峡大橋・大鳴門橋経由で直行できる四国の玄関口・徳島。秘境温泉宿は秋に高額になりがちですが、徳島駅前に泊まれば4,000円台で快適なホテルを確保可能。浮いた予算をレンタカーや吉野川観光遊覧船、夜の鳴門鯛会席や徳島ラーメン食べ比べに贅沢に充てるのがスマートです。
          </p>
        </div>
      </section>

      
        {/* 観光地ガイド・公式Wikipedia写真＆解説 */}
        <section className="bg-white rounded-2xl border border-stone-200/90 overflow-hidden shadow-sm mb-10">
          <div className="bg-gradient-to-r from-stone-900 to-stone-800 text-white px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
              <h2 className="text-base md:text-lg font-bold tracking-wide">阿波・大歩危祖谷秘境ガイド：日本三大秘境・祖谷渓谷と祖谷のかずら橋</h2>
            </div>
            <span className="text-[11px] text-stone-300 bg-white/10 px-2.5 py-0.5 rounded-full border border-white/10">地域名所ガイド</span>
          </div>
          <div className="flex flex-col gap-6 p-6">
            <div className="w-full relative aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden bg-stone-100 border border-stone-200/60 shadow-inner">
              <Image
                src="https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2e/Iya_Valley_seen_from_the_Iya_Valley_Observatory_001.jpg/1280px-Iya_Valley_seen_from_the_Iya_Valley_Observatory_001.jpg"
                alt="日本三大秘境・祖谷渓谷と祖谷のかずら橋"
                fill
                className="object-cover hover:scale-105 transition duration-500"
                sizes="(max-width: 768px) 100vw, 400px"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-2 text-right">
                <span className="text-[10px] text-white/90">写真：Wikimedia Commons</span>
              </div>
            </div>
            <div className="w-full space-y-3">
              <h3 className="text-lg md:text-xl font-bold text-stone-900 leading-snug">日本三大秘境・祖谷渓谷と祖谷のかずら橋の歴史と見どころ</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">祖谷渓（いやだに／いやけい）は、徳島県の三好市の祖谷川による深いV字谷の続く渓谷。祖谷谷、祖谷渓谷ともいう。</p>
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
              <span className="px-2.5 py-1 bg-teal-100 text-teal-800 text-xs font-bold rounded-md">2026年8月新規オープン・新築快適</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>{4.15}</span>
                <span className="text-slate-400 text-xs font-normal">（新規開業）</span>
              </div>
            </div>
            <h3 className="text-xl font-bold text-slate-900 leading-snug">
              ＣＯＺＹ　ＣＯＭＦＯＲＴＳ　ＨＯＴＥＬ（コージーコンフォーツホテル）新規オープン
            </h3>
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span>徳島</span>
            </div>
            <div className="grid md:grid-cols-2 gap-4 pt-2">
              <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-100">
                <Image src="https://img.travel.rakuten.co.jp/share/HOTEL/202210/202210.jpg" alt="ＣＯＺＹ　ＣＯＭＦＯＲＴＳ　ＨＯＴＥＬ（コージーコンフォーツホテル）新規オープン" fill className="object-cover" unoptimized />
              </div>
              <div className="flex flex-col justify-between space-y-3">
                <p className="text-xs text-slate-600 leading-relaxed">新規オープンの最新ホテル！ピカピカの清潔な客室と最新の設備で、4,000円台前半とは思えない抜群の快適性を誇る注目の一軒です。
                </p>
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <div className="text-xs text-slate-500">最安参考料金（1名利用時）</div>
                  <div className="text-lg font-black text-rose-600">¥4,200<span className="text-xs font-normal text-slate-500">〜 / 人</span></div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F202210%2F202210.html" target="_blank" rel="noopener noreferrer" className="block w-full py-3 bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white font-bold text-center rounded-xl transition shadow-sm">
                楽天トラベルでプラン・空室を見る
              </a>
            </div>
          </div>
        </div>

        {/* 宿2 */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-blue-100 text-blue-800 text-xs font-bold rounded-md">JR徳島駅直結・プレミアムステイ</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>{4.33}</span>
                <span className="text-slate-400 text-xs font-normal">（駅直結便利）</span>
              </div>
            </div>
            <h3 className="text-xl font-bold text-slate-900 leading-snug">
              ＪＲホテルクレメント徳島
            </h3>
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span>徳島</span>
            </div>
            <div className="grid md:grid-cols-2 gap-4 pt-2">
              <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-100">
                <Image src="https://img.travel.rakuten.co.jp/share/HOTEL/4721/4721.jpg" alt="ＪＲホテルクレメント徳島" fill className="object-cover" unoptimized />
              </div>
              <div className="flex flex-col justify-between space-y-3">
                <p className="text-xs text-slate-600 leading-relaxed">
                  JR徳島駅ビル直結の最高立地。雨に濡れずにチェックインでき、駅ナカの土産物街や飲食店へも直行。上質なおもてなしと洗練された客室でクチコミ★4.33を獲得しています。
                </p>
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <div className="text-xs text-slate-500">最安参考料金（1名利用時）</div>
                  <div className="text-lg font-black text-rose-600">¥4,350<span className="text-xs font-normal text-slate-500">〜 / 人</span></div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F4721%2F4721.html" target="_blank" rel="noopener noreferrer" className="block w-full py-3 bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white font-bold text-center rounded-xl transition shadow-sm">
                楽天トラベルでプラン・空室を見る
              </a>
            </div>
          </div>
        </div>

        {/* 宿3 */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-md">眉山展望・絶景スカイビュー</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>{4.36}</span>
                <span className="text-slate-400 text-xs font-normal">（眉山夜景）</span>
              </div>
            </div>
            <h3 className="text-xl font-bold text-slate-900 leading-snug">
              天空のスカイビューホテル　眉山海月
            </h3>
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span>徳島</span>
            </div>
            <div className="grid md:grid-cols-2 gap-4 pt-2">
              <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-100">
                <Image src="https://img.travel.rakuten.co.jp/share/HOTEL/187619/187619.jpg" alt="天空のスカイビューホテル　眉山海月" fill className="object-cover" unoptimized />
              </div>
              <div className="flex flex-col justify-between space-y-3">
                <p className="text-xs text-slate-600 leading-relaxed">
                  徳島のシンボル・眉山に位置し、客室やレストランから徳島市街の煌めく夜景と紀伊水道を一望。大自然に囲まれた静寂の空間でリゾート気分を4,000円台で満喫できます。
                </p>
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <div className="text-xs text-slate-500">最安参考料金（1名利用時）</div>
                  <div className="text-lg font-black text-rose-600">¥4,500<span className="text-xs font-normal text-slate-500">〜 / 人</span></div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F187619%2F187619.html" target="_blank" rel="noopener noreferrer" className="block w-full py-3 bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white font-bold text-center rounded-xl transition shadow-sm">
                楽天トラベルでプラン・空室を見る
              </a>
            </div>
          </div>
        </div>

        {/* 宿4 */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-amber-100 text-amber-800 text-xs font-bold rounded-md">駅徒歩3分・老舗の温もり</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>{4.21}</span>
                <span className="text-slate-400 text-xs font-normal">（駅近安心）</span>
              </div>
            </div>
            <h3 className="text-xl font-bold text-slate-900 leading-snug">
              ホテル千秋閣＜徳島県＞
            </h3>
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span>徳島</span>
            </div>
            <div className="grid md:grid-cols-2 gap-4 pt-2">
              <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-100">
                <Image src="https://img.travel.rakuten.co.jp/share/HOTEL/28052/28052.jpg" alt="ホテル千秋閣＜徳島県＞" fill className="object-cover" unoptimized />
              </div>
              <div className="flex flex-col justify-between space-y-3">
                <p className="text-xs text-slate-600 leading-relaxed">
                  JR徳島駅より徒歩3分。親しみやすいサービスと清潔な客室でビジネス・一人旅に定評がある老舗ホテル。周辺の徳島ラーメン名店へも歩いてすぐです。
                </p>
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <div className="text-xs text-slate-500">最安参考料金（1名利用時）</div>
                  <div className="text-lg font-black text-rose-600">¥4,500<span className="text-xs font-normal text-slate-500">〜 / 人</span></div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F28052%2F28052.html" target="_blank" rel="noopener noreferrer" className="block w-full py-3 bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white font-bold text-center rounded-xl transition shadow-sm">
                楽天トラベルでプラン・空室を見る
              </a>
            </div>
          </div>
        </div>

        {/* 宿5 */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-purple-100 text-purple-800 text-xs font-bold rounded-md">評価★4.34・上質シティホテル</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>{4.34}</span>
                <span className="text-slate-400 text-xs font-normal">（クチコミ高評価）</span>
              </div>
            </div>
            <h3 className="text-xl font-bold text-slate-900 leading-snug">
              ホテル　グランドパレス徳島
            </h3>
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span>徳島</span>
            </div>
            <div className="grid md:grid-cols-2 gap-4 pt-2">
              <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-100">
                <Image src="https://img.travel.rakuten.co.jp/share/HOTEL/9417/9417.jpg" alt="ホテル　グランドパレス徳島" fill className="object-cover" unoptimized />
              </div>
              <div className="flex flex-col justify-between space-y-3">
                <p className="text-xs text-slate-600 leading-relaxed">
                  徳島市街の中心に位置し、落ち着いた風格を漂わせるシティホテル。広々としたベッドと充実の設備、クチコミ★4.34に裏付けられた丁寧な接客で心地よい夜を約束します。
                </p>
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <div className="text-xs text-slate-500">最安参考料金（1名利用時）</div>
                  <div className="text-lg font-black text-rose-600">¥4,600<span className="text-xs font-normal text-slate-500">〜 / 人</span></div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F9417%2F9417.html" target="_blank" rel="noopener noreferrer" className="block w-full py-3 bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white font-bold text-center rounded-xl transition shadow-sm">
                楽天トラベルでプラン・空室を見る
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* まとめ */}
      <section className="max-w-4xl mx-auto px-4 mt-12">
        <div className="bg-gradient-to-r from-slate-900 to-teal-950 text-white rounded-2xl p-6 sm:p-8 space-y-4">
          <h2 className="text-xl font-bold flex items-center gap-2 text-teal-300">
            <CheckCircle2 className="w-5 h-5" />
            秋の大歩危・祖谷渓ドライブの満喫ポイント
          </h2>
          <p className="text-sm text-teal-100 leading-relaxed">
            大歩危峡の遊覧船から見上げる紅葉の渓谷美は11月中旬が見頃。祖谷のかずら橋周辺の茶屋でいただく「祖谷そば」や「あゆの塩焼き」も絶品です。夜は徳島駅前で甘辛く煮込んだ豚バラ肉が乗った徳島ラーメンを白ご飯とともに味わってみてください。
          </p>
          <div className="pt-2">
            <Link href="/#autumn-features" className="inline-flex items-center gap-1.5 text-xs text-teal-300 hover:text-white transition underline">
              秋の旅行特集一覧へ戻る <ChevronRight className="w-3.5 h-3.5" />
            </Link>
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
              📊 徳島：大歩危・祖谷渓の秘境紅葉と阿波尾鶏！4,000円台〜泊まれる格安ホテル5選：掲載宿スペック一覧比較表＆宿泊者クチコミ・アクセス詳細分析
            </h2>
            <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
              楽天トラベル公式APIより取得した「徳島：大歩危・祖谷渓の秘境紅葉と阿波尾鶏！4,000円台〜泊まれる格安ホテル5選」掲載宿の所在地・最寄り駅・駐車場条件・クチコミ評価・参考最安料金を一覧で比較できます。公共交通機関（新幹線・在来線・送迎バス）利用の方もマイカー・レンタカー利用の方も、旅のスタイルに合った一軒をお選びください。
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
                <td className="p-3 font-bold text-stone-900">1. ＣＯＺＹ　ＣＯＭＦＯＲＴＳ　ＨＯＴＥＬ（コージーコンフォーツホテル）２０２６年８月８日新規オープン</td>
                <td className="p-3 text-stone-600">徳島県徳島市仲之町1-40</td>
                <td className="p-3 text-stone-600">徳島駅周辺</td>
                <td className="p-3 text-stone-600">ホテル専用P(先着順)または提携P（平日･日祝：1000円、金土･祝前：1500円）※お盆期間除く</td>
                <td className="p-3 font-bold text-amber-600">★4.22（32件）</td>
                <td className="p-3 font-bold text-rose-600">¥4,900〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F202210%2F202210.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">2. ＪＲホテルクレメント徳島</td>
                <td className="p-3 text-stone-600">徳島県徳島市寺島本町西1-61</td>
                <td className="p-3 text-stone-600">徳島駅周辺</td>
                <td className="p-3 text-stone-600">1泊1台1,300円(24時間入出庫可能)※2026/4/1より1,300円へ変更になりました</td>
                <td className="p-3 font-bold text-amber-600">★4.34（5160件）</td>
                <td className="p-3 font-bold text-rose-600">¥4,200〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F4721%2F4721.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
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
                <td className="p-3 font-bold text-stone-900">4. ホテル　グランドパレス徳島</td>
                <td className="p-3 text-stone-600">徳島県徳島市寺島本町西1-60-1</td>
                <td className="p-3 text-stone-600">徳島駅周辺</td>
                <td className="p-3 text-stone-600">有り　　無料</td>
                <td className="p-3 font-bold text-amber-600">★4.33（1152件）</td>
                <td className="p-3 font-bold text-rose-600">¥4,600〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F9417%2F9417.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
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
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">ＣＯＺＹ　ＣＯＭＦＯＲＴＳ　ＨＯＴＥＬ（コージーコンフォーツホテル）２０２６年８月８日新規オープン</h3>
                  <span className="text-xs text-stone-400 ml-2">（こーじーこんふぉーつほてる）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥4,900〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/202210/202210.jpg" alt="ＣＯＺＹ　ＣＯＭＦＯＲＴＳ　ＨＯＴＥＬ（コージーコンフォーツホテル）２０２６年８月８日新規オープン 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>★令和８年８月８日★新築グランドオープン！〜デザイン性と快適性を兼ね備え快適なご滞在をお届けします〜</p>
                  <p><strong>【所在地・アクセス】</strong>〒 徳島県徳島市仲之町1-40 ／ 最寄り駅：徳島 ／ 交通案内：JR徳島駅より車で約4分／徳島阿波おどり空港より車で約25分／徳島最大の歓楽街「秋田町」徒歩1分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>ホテル専用P(先着順)または提携P（平日･日祝：1000円、金土･祝前：1500円）※お盆期間除く</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.29 ／ 立地 ★4 ／ 部屋 ★4.22 ／ 設備 ★4.03 ／ 風呂 ★3.97</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「朝食の豪華さとスタッフの対応に大満足コメントを残さずいられないくらい最高のホテルでした!初めての口コミです。初の徳島市内にての宿泊でしたが、こちらを選んでよかったです。シックで落ち…　2026-10-08 08:10:47投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #2</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">ＪＲホテルクレメント徳島</h3>
                  <span className="text-xs text-stone-400 ml-2">（くれめんと　とくしま）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥4,200〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/4721/4721_heya.jpg" alt="ＪＲホテルクレメント徳島 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>ＪＲ徳島駅直結の好立地なシティーホテル</p>
                  <p><strong>【所在地・アクセス】</strong>〒 徳島県徳島市寺島本町西1-61 ／ 最寄り駅：徳島 ／ 交通案内：ＪＲ徳島駅直結０分・高速バス降り場より徒歩１分・徳島阿波おどり空港より車で約30分・徳島Ｉ．Ｃ．から車で１５分。</p>
                  <p><strong>【駐車場・マイカー利用】</strong>1泊1台1,300円(24時間入出庫可能)※2026/4/1より1,300円へ変更になりました</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「室内が古くエアコンの音が気になった室内が古かった。エアコンの音がうるさかった。クチコミの詳細はこちらから　https://review.travel.rakuten.co.jp/hotel/v…　2026-08-26 17:42:51投稿」
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
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">ホテル　グランドパレス徳島</h3>
                  <span className="text-xs text-stone-400 ml-2">（ぐらんどぱれす　とくしま）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥4,600〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/9417/9417_room.jpg" alt="ホテル　グランドパレス徳島 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>徳島駅より徒歩３分の市中心部に位置し、観光ビジネスに便利。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 徳島県徳島市寺島本町西1-60-1 ／ 最寄り駅：徳島 ／ 交通案内：ＪＲ徳島駅より徒歩３分。徳島空港より車で２０分。</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　　無料</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.36 ／ 立地 ★4.35 ／ 部屋 ★4.37 ／ 設備 ★4.27 ／ 風呂 ★4.17 ／ 食事 ★4.48</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「朝食の混雑とスタッフの対応に不満朝食会場が、系列ホテルと共用のため6時台から非常に混雑していた。席を采配する女性スタッフから相席を打診されたため出直すと伝えたが、ロビーで待機する様に指示された。失…　2026-10-10 18:42:56投稿」
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
