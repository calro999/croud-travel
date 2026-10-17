import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, Star, MapPin, Tag, CheckCircle2, AlertCircle, Utensils, Mountain, Waves, Sparkles, Train } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: {
    canonical: "https://croud-travel.pages.dev/autumn-budget-kagawa-takamatsu-ritsurin-udon-hotels-stay/",
  },

  title: '高松：栗林公園の秋紅葉ライトアップと讃岐うどん巡り！格安ホテル5選',
  description: 'ミシュラン三ツ星の名園「栗林公園」の錦秋ライトアップと、本場香川の讃岐うどん名店巡り！高松駅・市内中心部で1泊3,000円台〜4,000円台で泊まれる格安・高コスパホテル厳選5選。',
  openGraph: {
    title: "高松：栗林公園の秋紅葉ライトアップと讃岐うどん巡り！格安ホテル5選",
    description: "ミシュラン三ツ星の名園「栗林公園」の錦秋ライトアップと、本場香川の讃岐うどん名店巡り！高松駅・市内中心部で1泊3,000円台〜4,000円台で泊まれる格安・高コスパホテル厳選5選。",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "高松：栗林公園の秋紅葉ライトアップと讃岐うどん巡り！格安ホテル5選",
    description: "ミシュラン三ツ星の名園「栗林公園」の錦秋ライトアップと、本場香川の讃岐うどん名店巡り！高松駅・市内中心部で1泊3,000円台〜4,000円台で泊まれる格安・高コスパホテル厳選5選。",
  }
};

export default function AutumnBudgetTakamatsuHotelsPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 pb-24">
      {/* パンくずリスト */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 py-3 text-xs text-slate-500 flex items-center space-x-2 overflow-x-auto whitespace-nowrap">
          <Link href="/" className="hover:text-emerald-600 transition">ホーム</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <Link href="/#autumn-features" className="hover:text-emerald-600 transition">秋の特集一覧</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <span className="text-slate-800 font-medium">高松 栗林公園紅葉・讃岐うどん 格安宿5選</span>
        </div>
      </div>

      {/* ヒーローセクション */}
      <section className="relative bg-gradient-to-br from-emerald-950 via-teal-950 to-slate-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold tracking-wider border border-emerald-400/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>特別名勝栗林公園ライトアップ＆うどん名店</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight leading-snug">「高松」栗林公園の紅葉ライトアップ＆讃岐うどん！<br className="hidden sm:inline" />3,000円台〜泊まれる格安・高コスパ宿5選</h1>
          <p className="text-sm md:text-base text-emerald-100/90 max-w-2xl mx-auto leading-relaxed">
            大名庭園・栗林公園の湖面に鏡のように映し出される秋紅葉の幻想的なライトアップ。早朝から茹でたての一杯をすする本場「讃岐うどん」の名店巡りや骨付鳥など、秋の高松は五感で楽しむ旅の宝庫！3,000円台〜4,000円台の駅前・市内良質ホテルをご紹介します。
          </p>
        </div>
      </section>

      {/* イントロダクション */}
      <section className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
          <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <Utensils className="w-5 h-5 text-emerald-600" />
            1杯数百円の極上うどん巡りと名園美！賢く泊まる秋の高松トリップ
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            香川・高松の旅はうどん巡り・名所観光ともにコスパが抜群。高松市内のホテルも激戦区ならではのリーズナブルな価格設定で、★4.0以上のクオリティ宿が3,000円台〜4,000円台で予約可能。浮かせた予算で夕食に名物「骨付鳥」と地ビールを豪快に味わいましょう。
          </p>
        </div>
      </section>

      
        {/* 観光地ガイド・公式Wikipedia写真＆解説 */}
        <section className="bg-white rounded-2xl border border-stone-200/90 overflow-hidden shadow-sm mb-10">
          <div className="bg-gradient-to-r from-stone-900 to-stone-800 text-white px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
              <h2 className="text-base md:text-lg font-bold tracking-wide">讃岐・大名庭園ガイド：特別名勝・高松 栗林公園の一歩一景</h2>
            </div>
            <span className="text-[11px] text-stone-300 bg-white/10 px-2.5 py-0.5 rounded-full border border-white/10">地域名所ガイド</span>
          </div>
          <div className="flex flex-col gap-6 p-6">
            <div className="w-full relative aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden bg-stone-100 border border-stone-200/60 shadow-inner">
              <Image
                src="https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0b/Ritsurin.JPG/1280px-Ritsurin.JPG"
                alt="特別名勝・高松 栗林公園の一歩一景"
                fill
                className="object-cover hover:scale-105 transition duration-500"
                sizes="(max-width: 768px) 100vw, 400px"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-2 text-right">
                <span className="text-[10px] text-white/90">写真：Wikimedia Commons</span>
              </div>
            </div>
            <div className="w-full space-y-3">
              <h3 className="text-lg md:text-xl font-bold text-stone-900 leading-snug">特別名勝・高松 栗林公園の一歩一景の歴史と見どころ</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">栗林公園（りつりんこうえん）は、香川県高松市に所在する江戸時代初期に築庭された回遊式大名庭園（日本庭園）。1875年（明治8年）に県立公園として一般公開を開始し、1953年（昭和28年）に国の特別名勝に指定された都市公園法上の歴史公園である。</p>
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
              <span className="px-2.5 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-md">片原町駅前・デザイナーズ客室</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>{4}</span>
                <span className="text-slate-400 text-xs font-normal">（コスパ抜群）</span>
              </div>
            </div>
            <h3 className="text-xl font-bold text-slate-900 leading-snug">
              ホテルエリアワン高松シティ（ホテルエリアワングループ）
            </h3>
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span>高松（香川）</span>
            </div>
            <div className="grid md:grid-cols-2 gap-4 pt-2">
              <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-100">
                <Image src="https://img.travel.rakuten.co.jp/share/HOTEL/183326/183326.jpg" alt="ホテルエリアワン高松シティ（ホテルエリアワングループ）" fill className="object-cover" unoptimized />
              </div>
              <div className="flex flex-col justify-between space-y-3">
                <p className="text-xs text-slate-600 leading-relaxed">
                  琴電片原町駅徒歩約3分。アーケード商店街やうどん名店へのアクセス抜群。洗練された機能的なインテリアと快適なベッドで、3,000円台のリーズナブルさを感じさせない心地よさです。
                </p>
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <div className="text-xs text-slate-500">最安参考料金（1名利用時）</div>
                  <div className="text-lg font-black text-rose-600">¥3,700<span className="text-xs font-normal text-slate-500">〜 / 人</span></div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F183326%2F183326.html" target="_blank" rel="noopener noreferrer" className="block w-full py-3 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold text-center rounded-xl transition shadow-sm">
                楽天トラベルでプラン・空室を見る
              </a>
            </div>
          </div>
        </div>

        {/* 宿2 */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-blue-100 text-blue-800 text-xs font-bold rounded-md">評価★4.42・駐車場無料＆庭園ビュー</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>{4.42}</span>
                <span className="text-slate-400 text-xs font-normal">（クチコミ高評価）</span>
              </div>
            </div>
            <h3 className="text-xl font-bold text-slate-900 leading-snug">
              ホテル　パールガーデン
            </h3>
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span>高松（香川）</span>
            </div>
            <div className="grid md:grid-cols-2 gap-4 pt-2">
              <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-100">
                <Image src="https://img.travel.rakuten.co.jp/share/HOTEL/84770/84770.jpg" alt="ホテル　パールガーデン" fill className="object-cover" unoptimized />
              </div>
              <div className="flex flex-col justify-between space-y-3">
                <p className="text-xs text-slate-600 leading-relaxed">
                  市街地近くにありながら平面駐車場が無料。広々とした客室と開放的なレストラン、温かなホスピタリティでクチコミ★4.42の高評価を獲得している穴場の実力派ホテルです。
                </p>
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <div className="text-xs text-slate-500">最安参考料金（1名利用時）</div>
                  <div className="text-lg font-black text-rose-600">¥4,100<span className="text-xs font-normal text-slate-500">〜 / 人</span></div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F84770%2F84770.html" target="_blank" rel="noopener noreferrer" className="block w-full py-3 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold text-center rounded-xl transition shadow-sm">
                楽天トラベルでプラン・空室を見る
              </a>
            </div>
          </div>
        </div>

        {/* 宿3 */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-purple-100 text-purple-800 text-xs font-bold rounded-md">評価★4.36・伝統のおもてなし</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>{4.36}</span>
                <span className="text-slate-400 text-xs font-normal">（伝統の安心感）</span>
              </div>
            </div>
            <h3 className="text-xl font-bold text-slate-900 leading-snug">
              高松国際ホテル
            </h3>
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span>高松（香川）</span>
            </div>
            <div className="grid md:grid-cols-2 gap-4 pt-2">
              <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-100">
                <Image src="https://img.travel.rakuten.co.jp/share/HOTEL/13730/13730.jpg" alt="高松国際ホテル" fill className="object-cover" unoptimized />
              </div>
              <div className="flex flex-col justify-between space-y-3">
                <p className="text-xs text-slate-600 leading-relaxed">
                  緑に囲まれた老舗シティホテル。ゆったりとした広さの客室と充実の設備、地元食材をふんだんに使用した讃岐朝食バイキングで★4.36の信頼と実績を誇ります。
                </p>
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <div className="text-xs text-slate-500">最安参考料金（1名利用時）</div>
                  <div className="text-lg font-black text-rose-600">¥4,100<span className="text-xs font-normal text-slate-500">〜 / 人</span></div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F13730%2F13730.html" target="_blank" rel="noopener noreferrer" className="block w-full py-3 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold text-center rounded-xl transition shadow-sm">
                楽天トラベルでプラン・空室を見る
              </a>
            </div>
          </div>
        </div>

        {/* 宿4 */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-amber-100 text-amber-800 text-xs font-bold rounded-md">兵庫町商店街アーケード直結</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>{4.05}</span>
                <span className="text-slate-400 text-xs font-normal">（雨でも快適）</span>
              </div>
            </div>
            <h3 className="text-xl font-bold text-slate-900 leading-snug">
              リーガホテルゼスト高松
            </h3>
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span>高松（香川）</span>
            </div>
            <div className="grid md:grid-cols-2 gap-4 pt-2">
              <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-100">
                <Image src="https://img.travel.rakuten.co.jp/share/HOTEL/8869/8869.jpg" alt="リーガホテルゼスト高松" fill className="object-cover" unoptimized />
              </div>
              <div className="flex flex-col justify-between space-y-3">
                <p className="text-xs text-slate-600 leading-relaxed">
                  高松のメインアーケード「兵庫町商店街」内に位置し、雨や日差しを気にせず移動可能。高松駅や栗林公園へのアクセスも良好で、夜の骨付鳥や讃岐料理店巡りにも絶好の拠点です。
                </p>
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <div className="text-xs text-slate-500">最安参考料金（1名利用時）</div>
                  <div className="text-lg font-black text-rose-600">¥4,200<span className="text-xs font-normal text-slate-500">〜 / 人</span></div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F8869%2F8869.html" target="_blank" rel="noopener noreferrer" className="block w-full py-3 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold text-center rounded-xl transition shadow-sm">
                楽天トラベルでプラン・空室を見る
              </a>
            </div>
          </div>
        </div>

        {/* 宿5 */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-stone-100 text-stone-800 text-xs font-bold rounded-md">高松駅徒歩1分・安定の東横イン</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>{4.29}</span>
                <span className="text-slate-400 text-xs font-normal">（駅前至便）</span>
              </div>
            </div>
            <h3 className="text-xl font-bold text-slate-900 leading-snug">
              東横ＩＮＮ高松駅前
            </h3>
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span>高松（香川）</span>
            </div>
            <div className="grid md:grid-cols-2 gap-4 pt-2">
              <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-100">
                <Image src="https://img.travel.rakuten.co.jp/share/HOTEL/193287/193287.jpg" alt="東横ＩＮＮ高松駅前" fill className="object-cover" unoptimized />
              </div>
              <div className="flex flex-col justify-between space-y-3">
                <p className="text-xs text-slate-600 leading-relaxed">
                  JR高松駅改札口から徒歩わずか1分。早朝のJRやフェリーでの小豆島・直島アート巡りにも抜群の利便性。無料の朝食サービスも付いて、無駄のないスマートな旅をサポートします。
                </p>
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <div className="text-xs text-slate-500">最安参考料金（1名利用時）</div>
                  <div className="text-lg font-black text-rose-600">¥5,828<span className="text-xs font-normal text-slate-500">〜 / 人</span></div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F193287%2F193287.html" target="_blank" rel="noopener noreferrer" className="block w-full py-3 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold text-center rounded-xl transition shadow-sm">
                楽天トラベルでプラン・空室を見る
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* まとめ */}
      <section className="max-w-4xl mx-auto px-4 mt-12">
        <div className="bg-gradient-to-r from-slate-900 to-emerald-950 text-white rounded-2xl p-6 sm:p-8 space-y-4">
          <h2 className="text-xl font-bold flex items-center gap-2 text-emerald-300">
            <CheckCircle2 className="w-5 h-5" />
            秋の高松・栗林公園散策の満喫ポイント
          </h2>
          <p className="text-sm text-emerald-100 leading-relaxed">
            栗林公園の秋のライトアップは11月下旬に開催。南湖に浮かぶ和船から眺める紅葉はまるで異世界のような美しさです。うどん店は朝営業（6時〜9時オープン）の名店も多いため、早起きして朝うどんからスタートするのが高松満喫の王道です。
          </p>
          <div className="pt-2">
            <Link href="/#autumn-features" className="inline-flex items-center gap-1.5 text-xs text-emerald-300 hover:text-white transition underline">
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
              📊 高松：栗林公園の秋紅葉ライトアップと讃岐うどん巡り！格安ホテル5選：掲載宿スペック一覧比較表＆宿泊者クチコミ・アクセス詳細分析
            </h2>
            <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
              楽天トラベル公式APIより取得した「高松：栗林公園の秋紅葉ライトアップと讃岐うどん巡り！格安ホテル5選」掲載宿の所在地・最寄り駅・駐車場条件・クチコミ評価・参考最安料金を一覧で比較できます。公共交通機関（新幹線・在来線・送迎バス）利用の方もマイカー・レンタカー利用の方も、旅のスタイルに合った一軒をお選びください。
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
                <td className="p-3 font-bold text-stone-900">1. ホテルエリアワン高松シティ（ホテルエリアワングループ）</td>
                <td className="p-3 text-stone-600">香川県高松市内町2-20</td>
                <td className="p-3 text-stone-600">高松（香川）駅周辺</td>
                <td className="p-3 text-stone-600">提携駐車場有　【丸亀町壱番街駐車場／香川県高松市内町2‐1】　1泊1,000円　※予約不可</td>
                <td className="p-3 font-bold text-amber-600">★4.02（1178件）</td>
                <td className="p-3 font-bold text-rose-600">¥3,700〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F183326%2F183326.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">2. ホテル　パールガーデン</td>
                <td className="p-3 text-stone-600">香川県高松市福岡町2-2-1</td>
                <td className="p-3 text-stone-600">高松（香川）駅周辺</td>
                <td className="p-3 text-stone-600">有り　２１７台　無料　予約不要。マイクロバス、中型、大型バス、トラック等は有料</td>
                <td className="p-3 font-bold text-amber-600">★4.41（1712件）</td>
                <td className="p-3 font-bold text-rose-600">¥4,100〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F84770%2F84770.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">3. 高松国際ホテル</td>
                <td className="p-3 text-stone-600">香川県高松市木太町4区2191-1</td>
                <td className="p-3 text-stone-600">高松（香川）駅周辺</td>
                <td className="p-3 text-stone-600">【無料】平面駐車場200台　大型バス/トラック可　車で高松駅・サンメッセ15分、高松中央IC10分</td>
                <td className="p-3 font-bold text-amber-600">★4.39（3248件）</td>
                <td className="p-3 font-bold text-rose-600">¥3,700〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F13730%2F13730.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">4. リーガホテルゼスト高松</td>
                <td className="p-3 text-stone-600">香川県高松市古新町9-1</td>
                <td className="p-3 text-stone-600">高松（香川）駅周辺</td>
                <td className="p-3 text-stone-600">立体駐車場タワーパーキング30台　￥1,200（税込／泊）</td>
                <td className="p-3 font-bold text-amber-600">★4.05（2056件）</td>
                <td className="p-3 font-bold text-rose-600">¥4,600〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F8869%2F8869.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">5. 東横ＩＮＮ高松駅前</td>
                <td className="p-3 text-stone-600">香川県高松市錦町1-1-6</td>
                <td className="p-3 text-stone-600">高松（香川）駅周辺</td>
                <td className="p-3 text-stone-600">有り　101台　1000円/泊　平置き7台(予約制)　　機械式：94台(先着順)</td>
                <td className="p-3 font-bold text-amber-600">★4.29（236件）</td>
                <td className="p-3 font-bold text-rose-600">¥5,828〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F193287%2F193287.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
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
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">ホテルエリアワン高松シティ（ホテルエリアワングループ）</h3>
                  <span className="text-xs text-stone-400 ml-2">（ほてるえりあわんたかまつしてぃ（ほてるえりあわんぐるーぷ））</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥3,700〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/183326/183326.jpg" alt="ホテルエリアワン高松シティ（ホテルエリアワングループ） 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>JR高松駅徒歩10分・琴電片原町駅徒歩5分！高松中央商店街・ライオン通り目の前で抜群の好立地！</p>
                  <p><strong>【所在地・アクセス】</strong>〒 香川県高松市内町2-20 ／ 最寄り駅：高松（香川） ／ 交通案内：JR高松駅より車3分・徒歩10分　高松空港リムジンバス「兵庫町」バス停より徒歩5分　高松中央IC・高松西ICより約20分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>提携駐車場有　【丸亀町壱番街駐車場／香川県高松市内町2‐1】　1泊1,000円　※予約不可</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.1 ／ 立地 ★3.97 ／ 部屋 ★3.94 ／ 設備 ★3.86 ／ 風呂 ★3.66 ／ 食事 ★4.15</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「朝食のパンが絶品、コーヒーも美味しく大満足朝食大満足。パンは特に美味しかった。お客さんの入ってる状況によると思いますが、陳列するタイミングをある程度ふんだんに並べていただくとたくさん欲しい人にとっ…　2026-09-27 08:44:57投稿 &lt;a href=&quot;https://img.travel.rakuten.co.jp/image/tr/api/hs/RmfmX/?f_hotel_no=183326&quot; class=&quot;3click&quot;」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #2</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">ホテル　パールガーデン</h3>
                  <span className="text-xs text-stone-400 ml-2">（ぱーるがーでん）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥4,100〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/84770/84770_room.jpg" alt="ホテル　パールガーデン 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>上位ランクのシモンズベッドでぐっすり☆新館禁煙Ｒのみ・本館喫煙Ｒ有！無料ＷＩＦＩ＆駐車場無料</p>
                  <p><strong>【所在地・アクセス】</strong>〒 香川県高松市福岡町2-2-1 ／ 最寄り駅：高松（香川） ／ 交通案内：JR高松駅より徒歩約30分(車で約10分)又は路線パスで約5分/高松中央ICより5km（約25分）</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　２１７台　無料　予約不要。マイクロバス、中型、大型バス、トラック等は有料</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.39 ／ 立地 ★4.23 ／ 部屋 ★4.47 ／ 設備 ★4.38 ／ 風呂 ★4.38 ／ 食事 ★4.49</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「食事は満足だが料金が2年前の1.5倍に驚きリピーターです。今回も夕朝食付プランで宿泊しました。夕食も朝食もともに美味しく満足しました。ただ、料金が2年前に比べて1.5倍にアップしていて驚きまし…　2026-10-09 16:25:26投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #3</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">高松国際ホテル</h3>
                  <span className="text-xs text-stone-400 ml-2">（たかまつ　こくさいほてる）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥3,700〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/13730/13730_sgl.jpg" alt="高松国際ホテル 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>【車で来るならココ】平面駐車場無料・大型可【2019年リニューアル】全室シモンズベッド、空気清浄機</p>
                  <p><strong>【所在地・アクセス】</strong>〒 香川県高松市木太町4区2191-1 ／ 最寄り駅：高松（香川） ／ 交通案内：JR高松駅より車で約15分　高松道高松中央IC、サンメッセ香川より車で約10分　市内バス(高松国際ホテル前)下車徒歩1分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>【無料】平面駐車場200台　大型バス/トラック可　車で高松駅・サンメッセ15分、高松中央IC10分</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「お風呂が綺麗でした。とても快適に過ごすことができました!クチコミの詳細はこちらから　https://review.travel.rakuten.co.jp/hotel/voice/13730?re…　2026-08-17 06:15:59投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #4</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">リーガホテルゼスト高松</h3>
                  <span className="text-xs text-stone-400 ml-2">（りーがほてる　ぜすと　たかまつ）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥4,600〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/8869/8869_twn.jpg" alt="リーガホテルゼスト高松 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>【好立地】空港高速バス停正面／高松駅まで徒歩10分！香川イチを目指す朝食バイキング★</p>
                  <p><strong>【所在地・アクセス】</strong>〒 香川県高松市古新町9-1 ／ 最寄り駅：高松（香川） ／ 交通案内：ＪＲ高松駅…徒歩約１０分／あなぶきアリーナ香川…徒歩約１５分／高松空港よりリムジンバス…約３５分※兵庫町バス停ホテル正面</p>
                  <p><strong>【駐車場・マイカー利用】</strong>立体駐車場タワーパーキング30台　￥1,200（税込／泊）</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「朝食の出来立て卵料理が美味しすぎる駐車:ホテル管轄の駐車場がありますが、タワー式の立体駐車場のため大きい車は入れることができません。少し離れた所にある「丸亀町くるりん駐車場」に停めました。ホテ…　2026-08-18 21:21:06投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #5</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">東横ＩＮＮ高松駅前</h3>
                  <span className="text-xs text-stone-400 ml-2">（とうよこいんたかまつえきまえ）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥5,828〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/193287/193287.jpg" alt="東横ＩＮＮ高松駅前 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>25年3月に東横INNがNEWオープン！高松駅から徒歩圏内の好立地</p>
                  <p><strong>【所在地・アクセス】</strong>〒 香川県高松市錦町1-1-6 ／ 最寄り駅：高松（香川） ／ 交通案内：JR高徳線・予讃線「高松駅」南口徒歩5分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　101台　1000円/泊　平置き7台(予約制)　　機械式：94台(先着順)</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.26 ／ 立地 ★4.26 ／ 部屋 ★4.38 ／ 設備 ★4.25 ／ 風呂 ★4.17 ／ 食事 ★4.13</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「駅近で便利、部屋もきれいで朝食も美味駅から近く便利でした。お部屋もきれいで朝食も美味しかったです。クチコミの詳細はこちらから　https://review.travel.rakuten.c…　2026-09-28 18:30:11投稿」
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-6 border-t border-stone-200">
            <h3 className="text-lg font-bold text-stone-900 border-l-4 border-teal-600 pl-3">
              🗺️ あわせて巡りたい！香川県の代表的な観光名所・歴史自然ガイド（Wikipedia公認画像・解説）
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              宿泊前後の1泊2日・2泊3日モデルコースに組み込みたい、香川県を代表する名所・絶景スポットの解説です。チェックイン前後の荷物預かりや駅周辺のレンタカー・周遊バスを活用すると効率よく巡ることができます。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #1</span>
                <h3 className="text-base font-bold text-stone-900">栗林公園（りつりんこうえん）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">「一歩一景」と称される特別名勝の大名庭園。紫雲山を背景に6つの池と13の築山が配置され、手入れの行き届いた1,400本の松の緑が美しく広がります。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #2</span>
                <h3 className="text-base font-bold text-stone-900">金刀比羅宮（こんぴらさん）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">「さぬきのこんぴらさん」として親しまれる海の守護神。御本宮まで785段、奥社まで1,368段の石段参道を登る参拝と門前の讃岐うどん巡りが人気です。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #3</span>
                <h3 className="text-base font-bold text-stone-900">小豆島（エンジェルロード・オリーブ公園）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">瀬戸内海に浮かぶオリーブの島。引き潮の時にだけ海の中から現れる砂の道「エンジェルロード」や、ギリシャ風車が映えるオリーブ公園がロマンチックです。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #4</span>
                <h3 className="text-base font-bold text-stone-900">直島（現代アートの島）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">草間彌生氏の「赤かぼちゃ」「黄かぼちゃ」や地中美術館など、自然と現代アートが融和した世界的に有名なアートの聖地。自転車で島内散策が楽しめます。</p>
              </div>
            </div>
            </div>
          </div>

          <div className="bg-amber-50/70 rounded-2xl p-5 md:p-6 border border-amber-200 space-y-3 text-xs text-stone-700 leading-relaxed">
            <h3 className="text-sm md:text-base font-bold text-amber-950">
              💡 香川県エリアの宿泊予約・シーズン別ベストタイミングと節約ノウハウ
            </h3>
            <p>
              <strong>1. 早期予約と楽天トラベルクーポンの併用：</strong> 香川県の人気温泉宿・リゾートホテルは、週末や連休・紅葉・年末年始の60日〜30日前から一気に予約が埋まります。毎月5と0のつく日やスーパーSALE期間中に配布される宿クーポン・自治体クーポンを併用すると、通常より最大10〜20%お得に予約可能です。
            </p>
            <p>
              <strong>2. 夕食・朝食プランと部屋タイプの選び方：</strong> 地元産の旬魚介やブランド牛会席を味わうなら「夕朝食付きプラン」、周辺の屋台・老舗居酒屋・ご当地グルメを食べ歩くなら「朝食付き」または「素泊まり＋天然温泉大浴場付きホテル」を選ぶと予算と満足度のバランスが最適化されます。
            </p>
          </div>
        </section>

      </main>
  );
}
