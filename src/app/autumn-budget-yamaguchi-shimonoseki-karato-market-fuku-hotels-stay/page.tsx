import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, Star, MapPin, Tag, CheckCircle2, AlertCircle, Utensils, Mountain, Waves, Sparkles, Train } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '【下関】唐戸市場の秋ふく・海鮮握り＆関門海峡絶景！2,000円台〜泊まれる格安ホテル5選',
  description: '関門海峡の秋風と唐戸市場の活気！旬の天然とらふぐや新鮮握り寿司、関門人道トンネル散策。下関駅・唐戸周辺で1泊2,000円台〜3,000円台から泊まれる格安・高コスパホテル5選。',
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
          <span className="text-slate-800 font-medium">下関 唐戸市場ふく・海峡絶景 格安宿5選</span>
        </div>
      </div>

      {/* ヒーローセクション */}
      <section className="relative bg-gradient-to-br from-teal-950 via-slate-900 to-sky-950 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 text-xs font-semibold tracking-wider border border-teal-400/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>唐戸市場の秋ふく握り＆関門海峡の秋風</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight leading-snug">
            【下関】唐戸市場の秋ふく＆関門海峡絶景へ！<br className="hidden sm:inline" />2,000円台〜泊まれる格安・高コスパ宿5選
          </h1>
          <p className="text-sm md:text-base text-teal-100/90 max-w-2xl mx-auto leading-relaxed">
            関門海峡を行き交う大型船と海峡ゆめタワーのパノラマ絶景！秋から本格シーズンに突入する本場下関の「ふく（河豚）」や、週末の唐戸市場「活きいき馬関街」で味わう出来立て海鮮寿司。門司港レトロへの渡船散策も楽しい下関で、1泊2,000円台〜3,000円台の厳選宿をご紹介。
          </p>
        </div>
      </section>

      {/* イントロダクション */}
      <section className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
          <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <Utensils className="w-5 h-5 text-teal-600" />
            宿泊代2,000円台〜！浮いた予算で唐戸市場の贅沢ふく刺し＆市場直送寿司バイキングへ
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            本州最西端の港町・下関は、本場の下関ふくや日本海・瀬戸内海の旬魚が集まる西日本屈指の美食タウン。秋は気候も穏やかで関門海峡沿いの散策が最も心地よい季節です。駅周辺には2,000円台〜3,000円台で快適に泊まれる高コスパホテルが充実しており、浮いた費用で絶品ふく料理や瓦そばを堪能できます。
          </p>
        </div>
      </section>

      {/* 宿一覧 */}
      <section className="max-w-4xl mx-auto px-4 space-y-8">

        {/* 宿1 */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-teal-100 text-teal-800 text-xs font-bold rounded-md">天然温泉大浴場「維新の湯」・駅徒歩2分の超人気宿</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>{4.19}</span>
                <span className="text-slate-400 text-xs font-normal">（レビュー1006件）</span>
              </div>
            </div>
            <h3 className="text-xl font-bold text-slate-900 leading-snug">
              ヴィアイン下関＜維新の湯＞（ＪＲ西日本グループ）
            </h3>
            <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs text-slate-500">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                山口県下関市竹崎町4丁目2番33号
              </span>
              <span className="flex items-center gap-1">
                <Train className="w-3.5 h-3.5 text-teal-600" />
                下関駅近く
              </span>
            </div>
            <div className="grid md:grid-cols-12 gap-6 items-center pt-2">
              <div className="md:col-span-5 relative h-48 md:h-56 rounded-xl overflow-hidden bg-slate-100 border border-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/178561/178561.jpg"
                  alt="ヴィアイン下関＜維新の湯＞（ＪＲ西日本グループ）"
                  fill
                  className="object-cover hover:scale-105 transition duration-300"
                  sizes="(max-width: 768px) 100vw, 350px"
                />
              </div>
              <div className="md:col-span-7 space-y-3">
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                  下関駅から徒歩わずか2分という好立地にありながら、館内に天然温泉「維新の湯」を完備。温かい天然温泉で旅の疲れをほぐし、清潔感あふれる客室で快適に過ごせます。ビジネス・観光どちらにも大人気。
                </p>
                <div className="pt-2 border-t border-slate-100 flex flex-wrap items-baseline justify-between gap-2">
                  <div>
                    <span className="text-xs text-slate-400 block">最安目安（1名/1室利用時）</span>
                    <span className="text-xl md:text-2xl font-black text-rose-600">¥3,010〜</span>
                    <span className="text-xs text-slate-500 ml-1">（税込）</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F178561%2F178561.html"
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
              <span className="px-2.5 py-1 bg-teal-100 text-teal-800 text-xs font-bold rounded-md">関門海峡一望・唐戸市場徒歩圏のオーシャンフロント名門</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>{4.29}</span>
                <span className="text-slate-400 text-xs font-normal">（レビュー1584件）</span>
              </div>
            </div>
            <h3 className="text-xl font-bold text-slate-900 leading-snug">
              下関グランドホテル
            </h3>
            <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs text-slate-500">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                山口県下関市南部町31-2
              </span>
              <span className="flex items-center gap-1">
                <Train className="w-3.5 h-3.5 text-teal-600" />
                下関駅近く
              </span>
            </div>
            <div className="grid md:grid-cols-12 gap-6 items-center pt-2">
              <div className="md:col-span-5 relative h-48 md:h-56 rounded-xl overflow-hidden bg-slate-100 border border-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/7013/7013.jpg"
                  alt="下関グランドホテル"
                  fill
                  className="object-cover hover:scale-105 transition duration-300"
                  sizes="(max-width: 768px) 100vw, 350px"
                />
              </div>
              <div className="md:col-span-7 space-y-3">
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                  関門海峡と唐戸市場のすぐそばに位置し、客室の窓から海峡を行き交う船を眺められる絶好のロケーション。市場での朝食や海響館、門司港へのフェリー乗り場も徒歩圏内で、贅沢な立地ながらお手頃プランが魅力。
                </p>
                <div className="pt-2 border-t border-slate-100 flex flex-wrap items-baseline justify-between gap-2">
                  <div>
                    <span className="text-xs text-slate-400 block">最安目安（1名/1室利用時）</span>
                    <span className="text-xl md:text-2xl font-black text-rose-600">¥4,500〜</span>
                    <span className="text-xs text-slate-500 ml-1">（税込）</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F7013%2F7013.html"
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
              <span className="px-2.5 py-1 bg-teal-100 text-teal-800 text-xs font-bold rounded-md">海峡ゆめタワーすぐ・リニューアル快適ステイ</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>{4.13}</span>
                <span className="text-slate-400 text-xs font-normal">（レビュー1542件）</span>
              </div>
            </div>
            <h3 className="text-xl font-bold text-slate-900 leading-snug">
              プラザホテル下関
            </h3>
            <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs text-slate-500">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                山口県下関市岬之町11-10
              </span>
              <span className="flex items-center gap-1">
                <Train className="w-3.5 h-3.5 text-teal-600" />
                下関駅近く
              </span>
            </div>
            <div className="grid md:grid-cols-12 gap-6 items-center pt-2">
              <div className="md:col-span-5 relative h-48 md:h-56 rounded-xl overflow-hidden bg-slate-100 border border-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/9134/9134.jpg"
                  alt="プラザホテル下関"
                  fill
                  className="object-cover hover:scale-105 transition duration-300"
                  sizes="(max-width: 768px) 100vw, 350px"
                />
              </div>
              <div className="md:col-span-7 space-y-3">
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                  下関のランドマーク「海峡ゆめタワー」に隣接し、市内観光や唐戸市場へのアクセスが良好。ゆとりある客室と丁寧なサービス、リーズナブルな価格設定で高いリピート率を誇るシティホテルです。
                </p>
                <div className="pt-2 border-t border-slate-100 flex flex-wrap items-baseline justify-between gap-2">
                  <div>
                    <span className="text-xs text-slate-400 block">最安目安（1名/1室利用時）</span>
                    <span className="text-xl md:text-2xl font-black text-rose-600">¥4,620〜</span>
                    <span className="text-xs text-slate-500 ml-1">（税込）</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F9134%2F9134.html"
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
              <span className="px-2.5 py-1 bg-teal-100 text-teal-800 text-xs font-bold rounded-md">下関駅徒歩圏・朝食無料＆高コスパシンプルステイ</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>{3.96}</span>
                <span className="text-slate-400 text-xs font-normal">（レビュー1188件）</span>
              </div>
            </div>
            <h3 className="text-xl font-bold text-slate-900 leading-snug">
              スカイハートホテル下関
            </h3>
            <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs text-slate-500">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                山口県下関市岬之町6-7
              </span>
              <span className="flex items-center gap-1">
                <Train className="w-3.5 h-3.5 text-teal-600" />
                下関駅近く
              </span>
            </div>
            <div className="grid md:grid-cols-12 gap-6 items-center pt-2">
              <div className="md:col-span-5 relative h-48 md:h-56 rounded-xl overflow-hidden bg-slate-100 border border-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/15701/15701.jpg"
                  alt="スカイハートホテル下関"
                  fill
                  className="object-cover hover:scale-105 transition duration-300"
                  sizes="(max-width: 768px) 100vw, 350px"
                />
              </div>
              <div className="md:col-span-7 space-y-3">
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                  下関駅東口からアクセス良好で、観光やビジネスに使い勝手抜群。充実したアメニティや無料朝食サービスが好評で、手頃な価格で安心して宿泊できる王道の高コスパビジネスホテルです。
                </p>
                <div className="pt-2 border-t border-slate-100 flex flex-wrap items-baseline justify-between gap-2">
                  <div>
                    <span className="text-xs text-slate-400 block">最安目安（1名/1室利用時）</span>
                    <span className="text-xl md:text-2xl font-black text-rose-600">¥3,825〜</span>
                    <span className="text-xs text-slate-500 ml-1">（税込）</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F15701%2F15701.html"
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
              <span className="px-2.5 py-1 bg-teal-100 text-teal-800 text-xs font-bold rounded-md">驚きの2,000円台！駅近スマート＆機能的ホテル</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>{3.84}</span>
                <span className="text-slate-400 text-xs font-normal">（レビュー1551件）</span>
              </div>
            </div>
            <h3 className="text-xl font-bold text-slate-900 leading-snug">
              ＫＯＫＯ　ＳＴＡＹ　下関
            </h3>
            <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs text-slate-500">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                山口県下関市竹崎町3-11-2
              </span>
              <span className="flex items-center gap-1">
                <Train className="w-3.5 h-3.5 text-teal-600" />
                下関駅近く
              </span>
            </div>
            <div className="grid md:grid-cols-12 gap-6 items-center pt-2">
              <div className="md:col-span-5 relative h-48 md:h-56 rounded-xl overflow-hidden bg-slate-100 border border-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/4831/4831.jpg"
                  alt="ＫＯＫＯ　ＳＴＡＹ　下関"
                  fill
                  className="object-cover hover:scale-105 transition duration-300"
                  sizes="(max-width: 768px) 100vw, 350px"
                />
              </div>
              <div className="md:col-span-7 space-y-3">
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                  下関駅徒歩圏内に位置し、1泊2,000円台という圧倒的なリーズナブルさを誇るスマートホテル。シンプルで無駄のない客室設計と快眠ベッドで、滞在費を極限まで抑えてグルメに集中したい方に最適です。
                </p>
                <div className="pt-2 border-t border-slate-100 flex flex-wrap items-baseline justify-between gap-2">
                  <div>
                    <span className="text-xs text-slate-400 block">最安目安（1名/1室利用時）</span>
                    <span className="text-xl md:text-2xl font-black text-rose-600">¥2,921〜</span>
                    <span className="text-xs text-slate-500 ml-1">（税込）</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F4831%2F4831.html"
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
            <li>秋の紅葉・グルメシーズンは週末を中心に満室になりやすいため、平日の宿泊や早めの予約がお得です。</li>
            <li>表示価格は各宿の最安プラン目安（税込）です。日程や人数、予約時期によって変動するため最新状況をご確認ください。</li>
            <li>楽天トラベルの毎月「0と5のつく日クーポン」や「宿クーポン」を併用すると、さらに割引が適用される場合があります。</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
