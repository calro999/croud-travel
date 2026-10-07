import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, Star, MapPin, Tag, CheckCircle2, AlertCircle, Utensils, Mountain, Waves, Sparkles, Train } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '【甲府】新酒甲州ワインと名物ほうとう！3,000円台〜泊まれる格安ホテル5選',
  description: '秋に解禁される山梨の新酒甲州ワインと、かぼちゃの甘みが溶け込む熱々の名物ほうとう！甲府駅周辺・天然温泉付きで1泊3,000円台〜泊まれる超高コスパ格安宿厳選5選。',
};

export default function AutumnBudgetKofuHotelsPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 pb-24">
      {/* パンくずリスト */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 py-3 text-xs text-slate-500 flex items-center space-x-2 overflow-x-auto whitespace-nowrap">
          <Link href="/" className="hover:text-purple-600 transition">ホーム</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <Link href="/#autumn-features" className="hover:text-purple-600 transition">秋の特集一覧</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <span className="text-slate-800 font-medium">甲府 新酒ワイン・甲府城 格安宿5選</span>
        </div>
      </div>

      {/* ヒーローセクション */}
      <section className="relative bg-gradient-to-br from-slate-950 via-purple-950 to-indigo-950 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs font-semibold tracking-wider border border-purple-400/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>秋の山梨新酒ワイン＆甲州名物グルメ</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight leading-snug">
            【甲府】新酒甲州ワイン＆具だくさん熱々ほうとう！<br className="hidden sm:inline" />3,000円台〜泊まれる格安・高コスパ宿5選
          </h1>
          <p className="text-sm md:text-base text-purple-100/90 max-w-2xl mx-auto leading-relaxed">
            11月3日に解禁される山梨ヌーボー（甲州・マスカット・ベーリーAの新酒）と、秋の旬野菜がたっぷり入った熱々の名物ほうとう。武田信玄ゆかりの甲府城跡（舞鶴城公園）を望みながら、自家源泉や天然温泉大浴場を備えた駅近の3,000円台〜格安宿を厳選。
          </p>
        </div>
      </section>

      {/* イントロダクション */}
      <section className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
          <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <Utensils className="w-5 h-5 text-purple-600" />
            天然温泉完備で1泊3,000円台〜！浮いた予算で甲州牛とワイナリー巡り
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            甲府は駅前や中心街に良質な天然温泉を引いたビジネスホテルが密集する、全国でも屈指の「温泉×コスパ」エリア。夜鳴きそばや朝食バイキングが人気のドーミーインやスーパーホテルも手頃な価格帯で利用でき、浮いた予算で地元ワイナリーのグラスワイン飲み比べや名物鳥もつ煮を楽しめます。
          </p>
        </div>
      </section>

      {/* 観光地ガイド・公式Wikipedia写真＆解説 */}
      <div className="max-w-4xl mx-auto px-4">
        <section className="bg-white rounded-2xl border border-stone-200/90 overflow-hidden shadow-sm mb-10">
          <div className="bg-gradient-to-r from-stone-900 to-stone-800 text-white px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
              <h2 className="text-base md:text-lg font-bold tracking-wide">甲州歴史散策ガイド：甲府城（舞鶴城公園・野面積みの天守台）</h2>
            </div>
            <span className="text-[11px] text-stone-300 bg-white/10 px-2.5 py-0.5 rounded-full border border-white/10">地域名所ガイド</span>
          </div>
          <div className="grid md:grid-cols-12 gap-6 p-6 items-center">
            <div className="md:col-span-5 relative h-56 md:h-64 rounded-xl overflow-hidden bg-stone-100 border border-stone-200/60 shadow-inner">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/3/3b/Koufu_Castle_%284936837377%29.jpg"
                alt="甲府城（舞鶴城公園）天守台"
                fill
                className="object-cover hover:scale-105 transition duration-500"
                sizes="(max-width: 768px) 100vw, 400px"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-2 text-right">
                <span className="text-[10px] text-white/90">写真：Wikimedia Commons</span>
              </div>
            </div>
            <div className="md:col-span-7 space-y-3">
              <h3 className="text-lg md:text-xl font-bold text-stone-900 leading-snug">武田氏滅亡後に築かれた名城・天守台から望む富士山と甲府盆地</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
                甲府城（こうふじょう）は、山梨県甲府市にあった城で、「舞鶴城（まいづるじょう）」の雅号を持つ国指定史跡。武田氏滅亡後に豊臣秀吉の命により築城され、巨大な野面積みの石垣が今も残ります。天守台に登ると秋の甲府盆地や遠く富士山を一望でき、城内を彩る紅葉のグラデーションも見事です。
              </p>
              <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-400">
                <span>出典: フリー百科事典『ウィキペディア（Wikipedia）』</span>
                <span className="text-purple-700 font-semibold">JR甲府駅南口より徒歩約3分</span>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* 宿一覧 */}
      <section className="max-w-4xl mx-auto px-4 space-y-8">
        {/* 宿1: トラベルイン甲府 */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-purple-100 text-purple-800 text-xs font-bold rounded-md">破格の3,200円台〜・全室広めベッド</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>3.66</span>
                <span className="text-slate-400 text-xs font-normal">（超格安プライス）</span>
              </div>
            </div>
            <div className="grid md:grid-cols-12 gap-6">
              <div className="md:col-span-5 relative h-52 md:h-auto rounded-xl overflow-hidden bg-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/187168/187168.jpg"
                  alt="トラベルイン甲府"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="md:col-span-7 space-y-3">
                <h3 className="text-xl font-bold text-slate-900 leading-snug">
                  トラベルイン甲府
                </h3>
                <p className="text-xs text-slate-500 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 shrink-0 text-slate-400" />
                  甲府昭和ICすぐ / 甲府駅より車で約10分（駐車場完備）
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  1泊3,200円台〜という驚異のコストパフォーマンス。ゆったりサイズのベッドと静かな室内環境が整っており、ドライブでのワイナリー巡りや昇仙峡観光の拠点に最適。浮いた予算をほうとうや甲州ワインに回したい方にうってつけです。
                </p>
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                  <span className="text-xs font-bold text-slate-700 block mb-1">宿泊プラン目安</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs text-slate-500">1名1泊素泊まり</span>
                    <span className="text-2xl font-black text-rose-600">¥3,250</span>
                    <span className="text-xs text-slate-500">〜（税込）</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/g0190dd6.2qbwy9f5.g0190dd6.2qbwzc3e/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F187168%2F187168.html"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3.5 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-center rounded-xl shadow-md transition transform active:scale-[0.99]"
              >
                楽天トラベルで空室・最安料金を確認する
              </a>
            </div>
          </div>
        </div>

        {/* 宿2: 天然温泉 甲州隠し湯 スーパーホテル甲府昭和インター */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-amber-100 text-amber-800 text-xs font-bold rounded-md">天然温泉「隠し湯」＆健康朝食ビュッフェ無料</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>4.06</span>
                <span className="text-slate-400 text-xs font-normal">（天然温泉＆朝食無料）</span>
              </div>
            </div>
            <div className="grid md:grid-cols-12 gap-6">
              <div className="md:col-span-5 relative h-52 md:h-auto rounded-xl overflow-hidden bg-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/129530/129530.jpg"
                  alt="スーパーホテル甲府昭和インター"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="md:col-span-7 space-y-3">
                <h3 className="text-xl font-bold text-slate-900 leading-snug">
                  天然温泉　甲州隠し湯　スーパーホテル甲府昭和インター
                </h3>
                <p className="text-xs text-slate-500 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 shrink-0 text-slate-400" />
                  甲府昭和ICすぐ / 無料平面駐車場完備
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  館内には信玄公ゆかりの「甲州隠し湯」と名付けられた男女別天然温泉を完備。焼きたてパンや有機野菜サラダが並ぶ健康朝食バイキングが完全無料で提供されます。ぐっすり眠れる選べる枕や快眠ベッドで、旅の疲れを心地よく癒やせます。
                </p>
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                  <span className="text-xs font-bold text-slate-700 block mb-1">宿泊プラン目安</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs text-slate-500">1名1泊朝食込・天然温泉付</span>
                    <span className="text-2xl font-black text-rose-600">¥3,800</span>
                    <span className="text-xs text-slate-500">〜（税込）</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/g0190dd6.2qbwy9f5.g0190dd6.2qbwzc3e/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F129530%2F129530.html"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3.5 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-center rounded-xl shadow-md transition transform active:scale-[0.99]"
              >
                楽天トラベルで空室・最安料金を確認する
              </a>
            </div>
          </div>
        </div>

        {/* 宿3: 東横ＩＮＮ甲府駅南口１ */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-md">★4.08・甲府駅南口徒歩1分・甲府城跡すぐ</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>4.08</span>
                <span className="text-slate-400 text-xs font-normal">（駅至近＆無料朝食）</span>
              </div>
            </div>
            <div className="grid md:grid-cols-12 gap-6">
              <div className="md:col-span-5 relative h-52 md:h-auto rounded-xl overflow-hidden bg-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/52640/52640.jpg"
                  alt="東横ＩＮＮ甲府駅南口１"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="md:col-span-7 space-y-3">
                <h3 className="text-xl font-bold text-slate-900 leading-snug">
                  東横ＩＮＮ甲府駅南口１
                </h3>
                <p className="text-xs text-slate-500 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 shrink-0 text-slate-400" />
                  JR甲府駅南口より徒歩1分 / 舞鶴城公園すぐ
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  改札を出てすぐの絶好ロケーション。名物ほうとう店「小作」や居酒屋が並ぶ駅前通りも目の前で、甲府城址公園への散策もスムーズです。手作りおにぎりやお惣菜の無料朝食バイキングが付き、チェックイン前後の手荷物預かりも親切に対応してくれます。
                </p>
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                  <span className="text-xs font-bold text-slate-700 block mb-1">宿泊プラン目安</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs text-slate-500">1名1泊朝食込</span>
                    <span className="text-2xl font-black text-rose-600">¥5,355</span>
                    <span className="text-xs text-slate-500">〜（税込）</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/g0190dd6.2qbwy9f5.g0190dd6.2qbwzc3e/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F52640%2F52640.html"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3.5 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-center rounded-xl shadow-md transition transform active:scale-[0.99]"
              >
                楽天トラベルで空室・最安料金を確認する
              </a>
            </div>
          </div>
        </div>

        {/* 宿4: センティア・ホテル内藤 */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-blue-100 text-blue-800 text-xs font-bold rounded-md">広々客室・甲府中心街飲食店街すぐ</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>3.94</span>
                <span className="text-slate-400 text-xs font-normal">（飲食店街至近）</span>
              </div>
            </div>
            <div className="grid md:grid-cols-12 gap-6">
              <div className="md:col-span-5 relative h-52 md:h-auto rounded-xl overflow-hidden bg-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/9474/9474.jpg"
                  alt="センティア・ホテル内藤"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="md:col-span-7 space-y-3">
                <h3 className="text-xl font-bold text-slate-900 leading-snug">
                  センティア・ホテル内藤
                </h3>
                <p className="text-xs text-slate-500 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 shrink-0 text-slate-400" />
                  JR甲府駅南口より徒歩12分 / 中心歓楽街の中心地
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  甲府の繁華街・春日モール通り至近に位置し、夜のワインバルやご当地居酒屋巡りに最高の立地。シングルでもゆとりのある客室設計で、清潔感のあるベッドと使い勝手の良いデスクが好評。夜遅くまで山梨のグルメとお酒を堪能したい方におすすめです。
                </p>
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                  <span className="text-xs font-bold text-slate-700 block mb-1">宿泊プラン目安</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs text-slate-500">1名1泊素泊まり</span>
                    <span className="text-2xl font-black text-rose-600">¥5,500</span>
                    <span className="text-xs text-slate-500">〜（税込）</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/g0190dd6.2qbwy9f5.g0190dd6.2qbwzc3e/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F9474%2F9474.html"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3.5 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-center rounded-xl shadow-md transition transform active:scale-[0.99]"
              >
                楽天トラベルで空室・最安料金を確認する
              </a>
            </div>
          </div>
        </div>

        {/* 宿5: 天然温泉 甲斐路の湯 ドーミーイン甲府 */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-red-100 text-red-800 text-xs font-bold rounded-md">自家源泉天然温泉＆サウナ・名物夜鳴きそば無料</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>4.18</span>
                <span className="text-slate-400 text-xs font-normal">（自家源泉＆夜鳴きそば）</span>
              </div>
            </div>
            <div className="grid md:grid-cols-12 gap-6">
              <div className="md:col-span-5 relative h-52 md:h-auto rounded-xl overflow-hidden bg-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/68069/68069.jpg"
                  alt="天然温泉 甲斐路の湯 ドーミーイン甲府"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="md:col-span-7 space-y-3">
                <h3 className="text-xl font-bold text-slate-900 leading-snug">
                  天然温泉　甲斐路の湯　ドーミーイン甲府
                </h3>
                <p className="text-xs text-slate-500 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 shrink-0 text-slate-400" />
                  JR甲府駅南口より徒歩13分 / 甲府市役所すぐ
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  ホテル敷地内から湧き出る自家源泉の天然温泉大浴場・露天風呂と高温サウナを完備。湯上がりアイスや乳酸菌飲料、名物の特製醤油ラーメン「夜鳴きそば」がすべて無料で振る舞われます。上質な温泉宿さながらの満足度を6,000円台〜で満喫できます。
                </p>
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                  <span className="text-xs font-bold text-slate-700 block mb-1">宿泊プラン目安</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs text-slate-500">1名1泊素泊まり・天然温泉付</span>
                    <span className="text-2xl font-black text-rose-600">¥6,102</span>
                    <span className="text-xs text-slate-500">〜（税込）</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/g0190dd6.2qbwy9f5.g0190dd6.2qbwzc3e/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F68069%2F68069.html"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3.5 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-center rounded-xl shadow-md transition transform active:scale-[0.99]"
              >
                楽天トラベルで空室・最安料金を確認する
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* まとめ */}
      <section className="max-w-4xl mx-auto px-4 mt-12">
        <div className="bg-gradient-to-br from-slate-900 to-purple-950 text-white rounded-2xl p-6 sm:p-8 space-y-4">
          <h2 className="text-xl font-bold flex items-center gap-2 text-purple-300">
            <CheckCircle2 className="w-5 h-5" />
            秋の甲府ワイン＆ほうとう旅を格安に満喫するポイント
          </h2>
          <ul className="space-y-2 text-sm text-purple-100/90 leading-relaxed">
            <li>・11月上旬は山梨ヌーボー解禁のベストシーズン。甲府駅前のワインバーや立ち飲みで新酒のフレッシュな味を楽しめる。</li>
            <li>・駅前「小作」や「ちよだ」で味わう名物ほうとうや、B級グルメグランプリ初代王者の鳥もつ煮は必食。</li>
            <li>・甲府城跡（舞鶴城公園）天守台からは、雪化粧を始めた富士山と色鮮やかな紅葉のパノラマビューが無料で楽しめます。</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
