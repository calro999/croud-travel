import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, Star, MapPin, Tag, CheckCircle2, AlertCircle, Utensils, Mountain, Waves, Sparkles, Train } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: {
    canonical: "https://croud-travel.pages.dev/autumn-budget-shizuoka-nihondaira-fuji-oden-hotels-stay/",
  },

  title: '静岡：日本平の富士山絶景と黒おでん！1,000円台〜泊まれる格安ホテル5選',
  description: '澄み渡る秋空に映える霊峰富士と日本平の秋景色、青葉横丁で熱々の静岡黒おでんを堪能！静岡駅前で1泊1,000円台〜3,000円台で泊まれる超高コスパ格安ホテル厳選5選。',
  openGraph: {
    title: "静岡：日本平の富士山絶景と黒おでん！1,000円台〜泊まれる格安ホテル5選",
    description: "澄み渡る秋空に映える霊峰富士と日本平の秋景色、青葉横丁で熱々の静岡黒おでんを堪能！静岡駅前で1泊1,000円台〜3,000円台で泊まれる超高コスパ格安ホテル厳選5選。",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "静岡：日本平の富士山絶景と黒おでん！1,000円台〜泊まれる格安ホテル5選",
    description: "澄み渡る秋空に映える霊峰富士と日本平の秋景色、青葉横丁で熱々の静岡黒おでんを堪能！静岡駅前で1泊1,000円台〜3,000円台で泊まれる超高コスパ格安ホテル厳選5選。",
  }
};

export default function AutumnBudgetShizuokaHotelsPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 pb-24">
      {/* パンくずリスト */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 py-3 text-xs text-slate-500 flex items-center space-x-2 overflow-x-auto whitespace-nowrap">
          <Link href="/" className="hover:text-teal-600 transition">ホーム</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <Link href="/#autumn-features" className="hover:text-teal-600 transition">秋の特集一覧</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <span className="text-slate-800 font-medium">静岡 日本平富士山・静岡おでん 格安宿5選</span>
        </div>
      </div>

      {/* ヒーローセクション */}
      <section className="relative bg-gradient-to-br from-teal-950 via-cyan-950 to-slate-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 text-xs font-semibold tracking-wider border border-teal-400/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>日本平富士山パノラマ＆名物黒おでん</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight leading-snug">「静岡」日本平の富士山絶景＆静岡黒おでん！<br className="hidden sm:inline" />1,000円台〜泊まれる格安・高コスパ宿5選</h1>
          <p className="text-sm md:text-base text-teal-100/90 max-w-2xl mx-auto leading-relaxed">
            空気が澄み、雪化粧を始めた富士山と駿河湾を一望できる日本平夢テラスの秋景色。夜は提灯が灯る青葉おでん街で、黒はんぺんや牛すじにだし粉をたっぷりかけた名物「静岡おでん」を地酒とともに！驚きの1,000円台〜3,000円台で泊まれる優良ホテルを厳選。
          </p>
        </div>
      </section>

      {/* イントロダクション */}
      <section className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
          <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <Utensils className="w-5 h-5 text-teal-600" />
            宿泊代1,000円〜3,000円台！浮いた予算で駿河湾の秋の幸を食べ尽くす
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            東海道新幹線ひかり・こだまが停車する静岡駅周辺は、全国でも屈指のホテル価格競争エリア。★4.0以上の高クオリティホテルが1泊1,000円台〜3,000円台という破格の価格帯で利用できます。宿代を抑えて、由比港の秋獲れ生桜えびや清水港の極上マグロ、銘酒磯自慢の味わい旅に出かけましょう。
          </p>
        </div>
      </section>

      
        {/* 観光地ガイド・公式Wikipedia写真＆解説 */}
        <section className="bg-white rounded-2xl border border-stone-200/90 overflow-hidden shadow-sm mb-10">
          <div className="bg-gradient-to-r from-stone-900 to-stone-800 text-white px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
              <h2 className="text-base md:text-lg font-bold tracking-wide">駿河・富士展望名勝ガイド：名勝・日本平山頂から望む富士山と駿河湾パノラマ</h2>
            </div>
            <span className="text-[11px] text-stone-300 bg-white/10 px-2.5 py-0.5 rounded-full border border-white/10">地域名所ガイド</span>
          </div>
          <div className="flex flex-col gap-6 p-6">
            <div className="w-full relative aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden bg-stone-100 border border-stone-200/60 shadow-inner">
              <Image
                src="https://thumb.wikimedia.org/wikipedia/commons/thumb/8/82/Shizuoka_g%C3%A9olocalisation_relief.svg/1280px-Shizuoka_g%C3%A9olocalisation_relief.svg.png"
                alt="名勝・日本平山頂から望む富士山と駿河湾パノラマ"
                fill
                className="object-cover hover:scale-105 transition duration-500"
                sizes="(max-width: 768px) 100vw, 400px"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-2 text-right">
                <span className="text-[10px] text-white/90">写真：Wikimedia Commons</span>
              </div>
            </div>
            <div className="w-full space-y-3">
              <h3 className="text-lg md:text-xl font-bold text-stone-900 leading-snug">名勝・日本平山頂から望む富士山と駿河湾パノラマの歴史と見どころ</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">日本平（にほんだいら）は、静岡県静岡市駿河区と清水区の境界にある丘陵地、および景勝地である。名称は日本武尊（やまとたけるのみこと）が東征の際に山頂から四方を眺めたという伝説に由来する。</p>
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
              <span className="px-2.5 py-1 bg-cyan-100 text-cyan-800 text-xs font-bold rounded-md">衝撃の1,000円台〜・デザイン客室</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>{4.27}</span>
                <span className="text-slate-400 text-xs font-normal">（破格プライス）</span>
              </div>
            </div>
            <h3 className="text-xl font-bold text-slate-900 leading-snug">
              ＫＯＫＯ　ＨＯＴＥＬ　静岡
            </h3>
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span>静岡</span>
            </div>
            <div className="grid md:grid-cols-2 gap-4 pt-2">
              <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-100">
                <Image src="https://img.travel.rakuten.co.jp/share/HOTEL/187219/187219.jpg" alt="ＫＯＫＯ　ＨＯＴＥＬ　静岡" fill className="object-cover" unoptimized />
              </div>
              <div className="flex flex-col justify-between space-y-3">
                <p className="text-xs text-slate-600 leading-relaxed">
                  1泊1,800円台〜という驚天動地のプライス！シンプルで洗練されたデザイナーズ空間と高速Wi-Fiを備え、安さだけでなく居心地の良さでも高評価★4.27を獲得している注目のホテルです。
                </p>
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <div className="text-xs text-slate-500">最安参考料金（1名利用時）</div>
                  <div className="text-lg font-black text-rose-600">¥1,875<span className="text-xs font-normal text-slate-500">〜 / 人</span></div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F187219%2F187219.html" target="_blank" rel="noopener noreferrer" className="block w-full py-3 bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white font-bold text-center rounded-xl transition shadow-sm">
                楽天トラベルでプラン・空室を見る
              </a>
            </div>
          </div>
        </div>

        {/* 宿2 */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-teal-100 text-teal-800 text-xs font-bold rounded-md">大好評ウェルカム地酒＆おつまみ</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>{4.15}</span>
                <span className="text-slate-400 text-xs font-normal">（サービス満点）</span>
              </div>
            </div>
            <h3 className="text-xl font-bold text-slate-900 leading-snug">
              ホテルドルフ静岡
            </h3>
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span>静岡</span>
            </div>
            <div className="grid md:grid-cols-2 gap-4 pt-2">
              <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-100">
                <Image src="https://img.travel.rakuten.co.jp/share/HOTEL/13725/13725.jpg" alt="ホテルドルフ静岡" fill className="object-cover" unoptimized />
              </div>
              <div className="flex flex-col justify-between space-y-3">
                <p className="text-xs text-slate-600 leading-relaxed">
                  夕方には静岡地酒や生ビール、おでんなどのウェルカムサービスが無料で振る舞われる至れり尽くせりの大人気宿。温もりあるおもてなしと充実の無料サービスでリピーターが絶えません。
                </p>
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <div className="text-xs text-slate-500">最安参考料金（1名利用時）</div>
                  <div className="text-lg font-black text-rose-600">¥2,600<span className="text-xs font-normal text-slate-500">〜 / 人</span></div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F13725%2F13725.html" target="_blank" rel="noopener noreferrer" className="block w-full py-3 bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white font-bold text-center rounded-xl transition shadow-sm">
                楽天トラベルでプラン・空室を見る
              </a>
            </div>
          </div>
        </div>

        {/* 宿3 */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-amber-100 text-amber-800 text-xs font-bold rounded-md">繁華街・おでん街すぐの好立地</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>{4.06}</span>
                <span className="text-slate-400 text-xs font-normal">（飲み歩き最適）</span>
              </div>
            </div>
            <h3 className="text-xl font-bold text-slate-900 leading-snug">
              静岡タウンホテル
            </h3>
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span>静岡</span>
            </div>
            <div className="grid md:grid-cols-2 gap-4 pt-2">
              <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-100">
                <Image src="https://img.travel.rakuten.co.jp/share/HOTEL/4611/4611.jpg" alt="静岡タウンホテル" fill className="object-cover" unoptimized />
              </div>
              <div className="flex flex-col justify-between space-y-3">
                <p className="text-xs text-slate-600 leading-relaxed">
                  青葉おでん街や両替町の飲食店街へ徒歩数分のベストロケーション。夜遅くまで静岡グルメとお酒を楽しんでもすぐにホテルへ戻れる気軽さが魅力。シンプルで清潔感ある客室を提供します。
                </p>
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <div className="text-xs text-slate-500">最安参考料金（1名利用時）</div>
                  <div className="text-lg font-black text-rose-600">¥2,995<span className="text-xs font-normal text-slate-500">〜 / 人</span></div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F4611%2F4611.html" target="_blank" rel="noopener noreferrer" className="block w-full py-3 bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white font-bold text-center rounded-xl transition shadow-sm">
                楽天トラベルでプラン・空室を見る
              </a>
            </div>
          </div>
        </div>

        {/* 宿4 */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-orange-100 text-orange-800 text-xs font-bold rounded-md">駅前北口すぐ・清潔モダン空間</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>{4.07}</span>
                <span className="text-slate-400 text-xs font-normal">（駅前安心）</span>
              </div>
            </div>
            <h3 className="text-xl font-bold text-slate-900 leading-snug">
              アパホテル〈静岡駅北〉
            </h3>
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span>静岡</span>
            </div>
            <div className="grid md:grid-cols-2 gap-4 pt-2">
              <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-100">
                <Image src="https://img.travel.rakuten.co.jp/share/HOTEL/172407/172407.jpg" alt="アパホテル〈静岡駅北〉" fill className="object-cover" unoptimized />
              </div>
              <div className="flex flex-col justify-between space-y-3">
                <p className="text-xs text-slate-600 leading-relaxed">
                  JR静岡駅北口より徒歩5分。快眠ベッドと大型液晶テレビ、充実のアメニティでビジネス・一人旅を快適にサポート。駅前ロータリーからの路線バスで日本平や久能山東照宮へも直行できます。
                </p>
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <div className="text-xs text-slate-500">最安参考料金（1名利用時）</div>
                  <div className="text-lg font-black text-rose-600">¥3,420<span className="text-xs font-normal text-slate-500">〜 / 人</span></div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F172407%2F172407.html" target="_blank" rel="noopener noreferrer" className="block w-full py-3 bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white font-bold text-center rounded-xl transition shadow-sm">
                楽天トラベルでプラン・空室を見る
              </a>
            </div>
          </div>
        </div>

        {/* 宿5 */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-md">クチコミ★4.21・朝食充実</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>{4.21}</span>
                <span className="text-slate-400 text-xs font-normal">（満足度抜群）</span>
              </div>
            </div>
            <h3 className="text-xl font-bold text-slate-900 leading-snug">
              ガーデンホテル静岡
            </h3>
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span>静岡</span>
            </div>
            <div className="grid md:grid-cols-2 gap-4 pt-2">
              <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-100">
                <Image src="https://img.travel.rakuten.co.jp/share/HOTEL/161182/161182.jpg" alt="ガーデンホテル静岡" fill className="object-cover" unoptimized />
              </div>
              <div className="flex flex-col justify-between space-y-3">
                <p className="text-xs text-slate-600 leading-relaxed">
                  静岡駅北口徒歩5分。落ち着いた雰囲気の客室と、地元食材を取り入れた朝食バイキングが好評のホテル。クチコミ★4.21を誇り、3,000円台半ばで安心の滞在が手に入ります。
                </p>
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <div className="text-xs text-slate-500">最安参考料金（1名利用時）</div>
                  <div className="text-lg font-black text-rose-600">¥3,575<span className="text-xs font-normal text-slate-500">〜 / 人</span></div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F161182%2F161182.html" target="_blank" rel="noopener noreferrer" className="block w-full py-3 bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white font-bold text-center rounded-xl transition shadow-sm">
                楽天トラベルでプラン・空室を見る
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* まとめ */}
      <section className="max-w-4xl mx-auto px-4 mt-12">
        <div className="bg-gradient-to-r from-slate-950 to-teal-950 text-white rounded-2xl p-6 sm:p-8 space-y-4">
          <h2 className="text-xl font-bold flex items-center gap-2 text-teal-300">
            <CheckCircle2 className="w-5 h-5" />
            秋の静岡・日本平観光の満喫ポイント
          </h2>
          <p className="text-sm text-teal-100 leading-relaxed">
            秋の日本平ロープウェイから見下ろす久能山東照宮の谷あいは、緑と紅葉のコントラストが秀逸。静岡おでん街（青葉横丁・青葉おでん街）はカウンター席の数が限られるため、18時前後の早めの入店が名物おでんをじっくり楽しむ秘訣です。
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
              📊 静岡：日本平の富士山絶景と黒おでん！1,000円台〜泊まれる格安ホテル5選：掲載宿スペック一覧比較表＆宿泊者クチコミ・アクセス詳細分析
            </h2>
            <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
              楽天トラベル公式APIより取得した「静岡：日本平の富士山絶景と黒おでん！1,000円台〜泊まれる格安ホテル5選」掲載宿の所在地・最寄り駅・駐車場条件・クチコミ評価・参考最安料金を一覧で比較できます。公共交通機関（新幹線・在来線・送迎バス）利用の方もマイカー・レンタカー利用の方も、旅のスタイルに合った一軒をお選びください。
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
                <td className="p-3 font-bold text-stone-900">1. アパホテル〈静岡駅北〉</td>
                <td className="p-3 text-stone-600">静岡県静岡市葵区昭和町4-5</td>
                <td className="p-3 text-stone-600">静岡駅周辺</td>
                <td className="p-3 text-stone-600">提携駐車場『稲森パーキング』を1泊　1,800円（先着順） でご案内いたします。</td>
                <td className="p-3 font-bold text-amber-600">★4.11（537件）</td>
                <td className="p-3 font-bold text-rose-600">¥3,420〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F172407%2F172407.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">2. ガーデンホテル静岡</td>
                <td className="p-3 text-stone-600">静岡県静岡市葵区紺屋町3-10</td>
                <td className="p-3 text-stone-600">静岡駅周辺</td>
                <td className="p-3 text-stone-600">有料提携駐車場有</td>
                <td className="p-3 font-bold text-amber-600">★4.21（1528件）</td>
                <td className="p-3 font-bold text-rose-600">¥3,575〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F161182%2F161182.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">3. 富士宮　富士急ホテル</td>
                <td className="p-3 text-stone-600">静岡県富士宮市中央町15-18</td>
                <td className="p-3 text-stone-600">富士宮駅周辺</td>
                <td className="p-3 text-stone-600">有（先着順）30台 有料  乗用車1泊1台600円(税込)。</td>
                <td className="p-3 font-bold text-amber-600">★3.84（764件）</td>
                <td className="p-3 font-bold text-rose-600">¥6,500〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F210%2F210.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">4. ハイセットホテル静岡インター</td>
                <td className="p-3 text-stone-600">静岡県静岡市駿河区中村町322-1</td>
                <td className="p-3 text-stone-600">静岡駅周辺</td>
                <td className="p-3 text-stone-600">普通車まで無料でお停めいただけます。※大型車（2t車以上）は事前の申込みが必要です。</td>
                <td className="p-3 font-bold text-amber-600">★4.12（1970件）</td>
                <td className="p-3 font-bold text-rose-600">¥4,510〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F619%2F619.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">5. 熱海温泉　月の栖　熱海聚楽ホテル</td>
                <td className="p-3 text-stone-600">静岡県熱海市田原本町2-19</td>
                <td className="p-3 text-stone-600">熱海駅周辺</td>
                <td className="p-3 text-stone-600">有り（有料）１泊　1760円（税込）　お車は当館の玄関前に直接お寄せください。</td>
                <td className="p-3 font-bold text-amber-600">★4.4（2598件）</td>
                <td className="p-3 font-bold text-rose-600">¥17,600〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F859%2F859.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
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
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">アパホテル〈静岡駅北〉</h3>
                  <span className="text-xs text-stone-400 ml-2">（あぱほてる　しずおかえききた）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥3,420〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/172407/172407.jpg" alt="アパホテル〈静岡駅北〉 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>【全室禁煙】商店街や観光地に近い好立地！静岡茶でおもてなし♪</p>
                  <p><strong>【所在地・アクセス】</strong>〒 静岡県静岡市葵区昭和町4-5 ／ 最寄り駅：静岡 ／ 交通案内：「静岡駅」北口から徒歩5分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>提携駐車場『稲森パーキング』を1泊　1,800円（先着順） でご案内いたします。</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「選べる朝食が良かった朝食が定食で選べて名物のかつおのたたきがあったので嬉しかった。屋上にお風呂があるのがアパホテルの良いところだと思っていたけど、ここはなかったのは残念でした。クチコミの詳…　2026-08-18 17:13:06投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #2</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">ガーデンホテル静岡</h3>
                  <span className="text-xs text-stone-400 ml-2">（がーでんほてるしずおか）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥3,575〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/161182/161182_kan1.jpg" alt="ガーデンホテル静岡 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>静岡駅徒歩5分の繁華街近く/朝食評価4.5以上★/有名メーカーのマットレス使用/レディースフロア完備</p>
                  <p><strong>【所在地・アクセス】</strong>〒 静岡県静岡市葵区紺屋町3-10 ／ 最寄り駅：静岡 ／ 交通案内：ＪＲ　静岡駅より徒歩にて約５分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有料提携駐車場有</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.2 ／ 立地 ★4.23 ／ 部屋 ★4.24 ／ 設備 ★4.15 ／ 風呂 ★4.13</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「朝食メニューが充実していて大満足朝食メニューが充実しており美味しかったです。クチコミの詳細はこちらから　https://review.travel.rakuten.co.jp/hotel/vo…　2026-10-08 20:10:39投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #3</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">富士宮　富士急ホテル</h3>
                  <span className="text-xs text-stone-400 ml-2">（ふじのみや　ふじきゅうほてる）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥6,500〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/210/210_room.jpg" alt="富士宮　富士急ホテル 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>富士宮駅目の前！ビジネスや観光の拠点に！富士宮焼きそば等、地元食材を取り入れた無料朝食バイキング！</p>
                  <p><strong>【所在地・アクセス】</strong>〒 静岡県富士宮市中央町15-18 ／ 最寄り駅：富士宮 ／ 交通案内：ＪＲ身延線富士宮駅北口から徒歩約２分。 東海道新幹線新富士駅下車、車で４０分（駐車場は先着順・約30台収容）</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有（先着順）30台 有料  乗用車1泊1台600円(税込)。</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★3.87 ／ 立地 ★3.93 ／ 部屋 ★3.76 ／ 設備 ★3.7 ／ 風呂 ★3.63 ／ 食事 ★3.95</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「富士宮観光や富士山登山の起点に最適駅やバスターミナルが目の前にあり富士宮観光や富士山登山の起点にするには大変ロケーションが良かったです。今回は富士宮ルートでの富士山登山の起点にしましたが早朝のバス…　2026-10-07 10:37:11投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #4</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">ハイセットホテル静岡インター</h3>
                  <span className="text-xs text-stone-400 ml-2">（はいせっとほてるしずおかいんたー）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥4,510〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/619/619_sgl.jpg" alt="ハイセットホテル静岡インター 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>無料駐車場完備。静岡インターに最も近いホテル！うなぎご飯、ネギトロ、しらす、静岡茶など朝食が大好評！</p>
                  <p><strong>【所在地・アクセス】</strong>〒 静岡県静岡市駿河区中村町322-1 ／ 最寄り駅：静岡 ／ 交通案内：お車で　東名静岡ＩＣ2分　新東名静岡ＳＡ２７分　ＪＲ静岡駅１０分　富士山空港３５分　久能山１９分　ツインメッセ１２分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>普通車まで無料でお停めいただけます。※大型車（2t車以上）は事前の申込みが必要です。</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.12 ／ 立地 ★4.05 ／ 部屋 ★4.04 ／ 設備 ★3.94 ／ 風呂 ★3.92 ／ 食事 ★4.52</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「丁寧な接客と朝食は満足、上層階の足音が響くホテル従業員様はとても丁寧でフランドリー。朝食は、地元食材?で満足。施設は古いので、設備はそれなり。上層階の方が連日ドタバタしておりうるさかっ…　2026-10-07 06:50:55投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #5</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">熱海温泉　月の栖　熱海聚楽ホテル</h3>
                  <span className="text-xs text-stone-400 ml-2">（あたみおんせん　つきのす　あたみじゅらくほてる）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥17,600〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/859/859_room.jpg" alt="熱海温泉　月の栖　熱海聚楽ホテル 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>【熱海温泉】楽天トラベルマイスター＆アワード受賞！お部屋へご用意する会席料理がクチコミ高評価！</p>
                  <p><strong>【所在地・アクセス】</strong>〒 静岡県熱海市田原本町2-19 ／ 最寄り駅：熱海 ／ 交通案内：ＪＲ東海道線「熱海駅」～仲見世通り商店街を抜けて徒歩３分。高台に建つ和風旅館。海と街の景色が人気。露天風呂付客室3室有り</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り（有料）１泊　1760円（税込）　お車は当館の玄関前に直接お寄せください。</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「ご飯が美味しくボリューム満点で大満足今回2回目の宿泊です。とてもご飯が美味しく、ボリューム満点で大満足です。ここより美味しく満足できるご飯は、なかなかないと思います。商店街からも近く、立地も最…　2026-08-22 20:09:30投稿」
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-6 border-t border-stone-200">
            <h3 className="text-lg font-bold text-stone-900 border-l-4 border-teal-600 pl-3">
              🗺️ あわせて巡りたい！静岡県の代表的な観光名所・歴史自然ガイド（Wikipedia公認画像・解説）
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              宿泊前後の1泊2日・2泊3日モデルコースに組み込みたい、静岡県を代表する名所・絶景スポットの解説です。チェックイン前後の荷物預かりや駅周辺のレンタカー・周遊バスを活用すると効率よく巡ることができます。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #1</span>
                <h3 className="text-base font-bold text-stone-900">三島スカイウォーク</h3>
                <p className="text-xs text-stone-600 leading-relaxed">日本一長い歩行者専用吊り橋（全長400m）。富士山と駿河湾のパノラマ絶景を空中散歩感覚で楽しめ、ジップラインなどのアクティビティも充実しています。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #2</span>
                <h3 className="text-base font-bold text-stone-900">熱海温泉・サンビーチ</h3>
                <p className="text-xs text-stone-600 leading-relaxed">都心からのアクセスが抜群な海辺の温泉リゾート。地中海リゾートを彷彿とさせるサンビーチや年間を通して開催される熱海海上花火大会が人気です。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #3</span>
                <h3 className="text-base font-bold text-stone-900">伊豆シャボテン動物公園</h3>
                <p className="text-xs text-stone-600 leading-relaxed">1,500種類のサボテンと世界中の動物たちが暮らすテーマパーク。冬限定の「元祖カピバラの露天風呂」の癒やされる姿は全国的に有名です。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #4</span>
                <h3 className="text-base font-bold text-stone-900">白糸の滝</h3>
                <p className="text-xs text-stone-600 leading-relaxed">富士山の湧水が幅150mの湾曲した絶壁から千本の絹糸のように流れ落ちる国指定の名勝・天然記念物。清涼なマイナスイオンと富士の恵みを体感できます。</p>
              </div>
            </div>
            </div>
          </div>

          <div className="bg-amber-50/70 rounded-2xl p-5 md:p-6 border border-amber-200 space-y-3 text-xs text-stone-700 leading-relaxed">
            <h3 className="text-sm md:text-base font-bold text-amber-950">
              💡 静岡県エリアの宿泊予約・シーズン別ベストタイミングと節約ノウハウ
            </h3>
            <p>
              <strong>1. 早期予約と楽天トラベルクーポンの併用：</strong> 静岡県の人気温泉宿・リゾートホテルは、週末や連休・紅葉・年末年始の60日〜30日前から一気に予約が埋まります。毎月5と0のつく日やスーパーSALE期間中に配布される宿クーポン・自治体クーポンを併用すると、通常より最大10〜20%お得に予約可能です。
            </p>
            <p>
              <strong>2. 夕食・朝食プランと部屋タイプの選び方：</strong> 地元産の旬魚介やブランド牛会席を味わうなら「夕朝食付きプラン」、周辺の屋台・老舗居酒屋・ご当地グルメを食べ歩くなら「朝食付き」または「素泊まり＋天然温泉大浴場付きホテル」を選ぶと予算と満足度のバランスが最適化されます。
            </p>
          </div>
        </section>

      </main>
  );
}
