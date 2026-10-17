import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, Star, MapPin, Tag, CheckCircle2, AlertCircle, Utensils, Mountain, Waves, Sparkles, Train } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: {
    canonical: "https://croud-travel.pages.dev/autumn-budget-miyazaki-takachiho-gourmet-hotels-stay/",
  },

  title: '宮崎：高千穂峡紅葉ドライブ拠点＆本場チキン南蛮！2,000円台〜格安ホテル5選',
  description: '神話の里・高千穂峡の柱状節理を彩る見事な紅葉とボート遊覧、本場の絶品チキン南蛮＆極上宮崎牛！宮崎駅・橘通り周辺で1泊2,000円台〜4,000円台で泊まれる高評価ホテル厳選5選。',
  openGraph: {
    title: "宮崎：高千穂峡紅葉ドライブ拠点＆本場チキン南蛮！2,000円台〜格安ホテル5選",
    description: "神話の里・高千穂峡の柱状節理を彩る見事な紅葉とボート遊覧、本場の絶品チキン南蛮＆極上宮崎牛！宮崎駅・橘通り周辺で1泊2,000円台〜4,000円台で泊まれる高評価ホテル厳選5選。",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "宮崎：高千穂峡紅葉ドライブ拠点＆本場チキン南蛮！2,000円台〜格安ホテル5選",
    description: "神話の里・高千穂峡の柱状節理を彩る見事な紅葉とボート遊覧、本場の絶品チキン南蛮＆極上宮崎牛！宮崎駅・橘通り周辺で1泊2,000円台〜4,000円台で泊まれる高評価ホテル厳選5選。",
  }
};

export default function AutumnBudgetMiyazakiHotelsPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 pb-24">
      {/* パンくずリスト */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 py-3 text-xs text-slate-500 flex items-center space-x-2 overflow-x-auto whitespace-nowrap">
          <Link href="/" className="hover:text-rose-600 transition">ホーム</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <Link href="/#autumn-features" className="hover:text-rose-600 transition">秋の特集一覧</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <span className="text-slate-800 font-medium">宮崎 高千穂紅葉拠点・チキン南蛮 格安宿5選</span>
        </div>
      </div>

      {/* ヒーローセクション */}
      <section className="relative bg-gradient-to-br from-rose-950 via-amber-950 to-slate-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500/20 text-rose-300 text-xs font-semibold tracking-wider border border-rose-400/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>高千穂峡の神秘紅葉＆本場チキン南蛮</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight leading-snug">「宮崎」高千穂峡紅葉＆本場チキン南蛮を満喫！<br className="hidden sm:inline" />2,000円台〜泊まれる格安・高コスパ宿5選</h1>
          <p className="text-sm md:text-base text-rose-100/90 max-w-2xl mx-auto leading-relaxed">
            エメラルドグリーンの水面と真名井の滝、切り立つ柱状節理を黄金色に染める神話の郷「高千穂峡」の秋。夜は宮崎市内の歓楽街・ニシタチで元祖チキン南蛮や炭火地鶏焼き、日本一の宮崎牛を堪能！2,000円台〜4,000円台の驚異的コスパ宿を厳選。
          </p>
        </div>
      </section>

      {/* イントロダクション */}
      <section className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
          <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <Utensils className="w-5 h-5 text-rose-600" />
            宿泊代2,000円台！浮いた予算で日本一の「宮崎牛」を極上ステーキで
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            南国情緒あふれる宮崎は、秋でも穏やかで過ごしやすいドライブ旅行の天国。宮崎駅や繁華街橘通りのホテルは、2,000円台から泊まれる全国屈指のハイコスパエリアです。宿代を賢く浮かせた分で、内閣総理大臣賞を受賞した最高峰の宮崎牛や、名店「おぐら」のチキン南蛮をお腹いっぱい味わいましょう。
          </p>
        </div>
      </section>

      
        {/* 観光地ガイド・公式Wikipedia写真＆解説 */}
        <section className="bg-white rounded-2xl border border-stone-200/90 overflow-hidden shadow-sm mb-10">
          <div className="bg-gradient-to-r from-stone-900 to-stone-800 text-white px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
              <h2 className="text-base md:text-lg font-bold tracking-wide">奥日向・神話峡谷ガイド：国の名勝天然記念物・神話息づく高千穂峡と真名井の滝</h2>
            </div>
            <span className="text-[11px] text-stone-300 bg-white/10 px-2.5 py-0.5 rounded-full border border-white/10">地域名所ガイド</span>
          </div>
          <div className="flex flex-col gap-6 p-6">
            <div className="w-full relative aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden bg-stone-100 border border-stone-200/60 shadow-inner">
              <Image
                src="https://thumb.wikimedia.org/wikipedia/commons/thumb/2/28/Takachiho-kyo%28Gorge%29_-_River_-_%E5%B7%9D.jpg/1280px-Takachiho-kyo%28Gorge%29_-_River_-_%E5%B7%9D.jpg"
                alt="国の名勝天然記念物・神話息づく高千穂峡と真名井の滝"
                fill
                className="object-cover hover:scale-105 transition duration-500"
                sizes="(max-width: 768px) 100vw, 400px"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-2 text-right">
                <span className="text-[10px] text-white/90">写真：Wikimedia Commons</span>
              </div>
            </div>
            <div className="w-full space-y-3">
              <h3 className="text-lg md:text-xl font-bold text-stone-900 leading-snug">国の名勝天然記念物・神話息づく高千穂峡と真名井の滝の歴史と見どころ</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">高千穂峡（たかちほきょう）は、宮崎県西臼杵郡高千穂町三田井にある五ヶ瀬川にかかる峡谷。阿蘇山の南東25kmに位置する柱状節理が発達した深い谷で、断崖の高さは平均80m、高いところで100mにも達しており、これが東西7kmにわたり続いている。 阿蘇山の噴火活動（火砕流）による堆積溶岩が急激に冷却され、それが五ヶ瀬川による浸食作用を受けて形成されたV字峡谷である。秩父帯のスレート・砂岩層を基盤とし、阿蘇山の約12万年前の噴出による火砕流堆積物が河谷下部を構成する。さらに高千穂峡遊歩道の上部には阿蘇山の約9万年前の噴出による火砕流堆積物がみられ、両者は溶結している。 1934年（昭和9年）に「五箇瀬川峡谷（高千穂峡谷）」として国の名勝、天然記念物に指定され、昭和40年（1965年）3月25日には祖母傾国定公園の一部に指定された。真名井の滝、玉垂の滝、あららぎの滝などが有名である。</p>
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
              <span className="px-2.5 py-1 bg-rose-100 text-rose-800 text-xs font-bold rounded-md">2,000円台半ば・デザイン客室</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>{4.04}</span>
                <span className="text-slate-400 text-xs font-normal">（破格プライス）</span>
              </div>
            </div>
            <h3 className="text-xl font-bold text-slate-900 leading-snug">
              ホテルエリアワン宮崎（ホテルエリアワングループ）
            </h3>
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span>宮崎</span>
            </div>
            <div className="grid md:grid-cols-2 gap-4 pt-2">
              <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-100">
                <Image src="https://img.travel.rakuten.co.jp/share/HOTEL/12635/12635.jpg" alt="ホテルエリアワン宮崎（ホテルエリアワングループ）" fill className="object-cover" unoptimized />
              </div>
              <div className="flex flex-col justify-between space-y-3">
                <p className="text-xs text-slate-600 leading-relaxed">
                  宮崎駅より徒歩圏内。1泊2,500円台〜という驚きの低価格設定ながら、清潔感あふれるモダンなデザイン客室を提供。レンタカーでの日南海岸や高千穂ドライブの拠点にも最適です。
                </p>
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <div className="text-xs text-slate-500">最安参考料金（1名利用時）</div>
                  <div className="text-lg font-black text-rose-600">¥2,517<span className="text-xs font-normal text-slate-500">〜 / 人</span></div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F12635%2F12635.html" target="_blank" rel="noopener noreferrer" className="block w-full py-3 bg-gradient-to-r from-rose-600 to-amber-600 hover:from-rose-700 hover:to-amber-700 text-white font-bold text-center rounded-xl transition shadow-sm">
                楽天トラベルでプラン・空室を見る
              </a>
            </div>
          </div>
        </div>

        {/* 宿2 */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-amber-100 text-amber-800 text-xs font-bold rounded-md">マンゴーカラー・個性的快適ステイ</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>{4.03}</span>
                <span className="text-slate-400 text-xs font-normal">（ユニーク空間）</span>
              </div>
            </div>
            <h3 className="text-xl font-bold text-slate-900 leading-snug">
              マンゴーホテル宮崎
            </h3>
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span>宮崎</span>
            </div>
            <div className="grid md:grid-cols-2 gap-4 pt-2">
              <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-100">
                <Image src="https://img.travel.rakuten.co.jp/share/HOTEL/191880/191880.jpg" alt="マンゴーホテル宮崎" fill className="object-cover" unoptimized />
              </div>
              <div className="flex flex-col justify-between space-y-3">
                <p className="text-xs text-slate-600 leading-relaxed">
                  南国宮崎らしい明るいマンゴーカラーを取り入れたユニークなホテル。親切なスタッフと行き届いたアメニティで、女性やカップルにも人気の高コスパ宿です。
                </p>
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <div className="text-xs text-slate-500">最安参考料金（1名利用時）</div>
                  <div className="text-lg font-black text-rose-600">¥3,050<span className="text-xs font-normal text-slate-500">〜 / 人</span></div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F191880%2F191880.html" target="_blank" rel="noopener noreferrer" className="block w-full py-3 bg-gradient-to-r from-rose-600 to-amber-600 hover:from-rose-700 hover:to-amber-700 text-white font-bold text-center rounded-xl transition shadow-sm">
                楽天トラベルでプラン・空室を見る
              </a>
            </div>
          </div>
        </div>

        {/* 宿3 */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-blue-100 text-blue-800 text-xs font-bold rounded-md">大淀川リバーサイド・ゆったり客室</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>{4.09}</span>
                <span className="text-slate-400 text-xs font-normal">（リバーサイド）</span>
              </div>
            </div>
            <h3 className="text-xl font-bold text-slate-900 leading-snug">
              ホテルマイステイズ宮崎
            </h3>
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span>宮崎</span>
            </div>
            <div className="grid md:grid-cols-2 gap-4 pt-2">
              <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-100">
                <Image src="https://img.travel.rakuten.co.jp/share/HOTEL/191643/191643.jpg" alt="ホテルマイステイズ宮崎" fill className="object-cover" unoptimized />
              </div>
              <div className="flex flex-col justify-between space-y-3">
                <p className="text-xs text-slate-600 leading-relaxed">
                  大淀川の清流を望むロケーション。広々とした客室で落ち着いた滞在ができ、周辺の繁華街ニシタチへのアクセスも徒歩圏内。リバーサイドの心地よい風を感じられます。
                </p>
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <div className="text-xs text-slate-500">最安参考料金（1名利用時）</div>
                  <div className="text-lg font-black text-rose-600">¥3,590<span className="text-xs font-normal text-slate-500">〜 / 人</span></div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F191643%2F191643.html" target="_blank" rel="noopener noreferrer" className="block w-full py-3 bg-gradient-to-r from-rose-600 to-amber-600 hover:from-rose-700 hover:to-amber-700 text-white font-bold text-center rounded-xl transition shadow-sm">
                楽天トラベルでプラン・空室を見る
              </a>
            </div>
          </div>
        </div>

        {/* 宿4 */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-orange-100 text-orange-800 text-xs font-bold rounded-md">橘通り中心・アパ直結サービス</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>{4.18}</span>
                <span className="text-slate-400 text-xs font-normal">（ニシタチ至便）</span>
              </div>
            </div>
            <h3 className="text-xl font-bold text-slate-900 leading-snug">
              アパホテル〈宮崎駅橘通〉
            </h3>
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span>宮崎</span>
            </div>
            <div className="grid md:grid-cols-2 gap-4 pt-2">
              <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-100">
                <Image src="https://img.travel.rakuten.co.jp/share/HOTEL/939/939.jpg" alt="アパホテル〈宮崎駅橘通〉" fill className="object-cover" unoptimized />
              </div>
              <div className="flex flex-col justify-between space-y-3">
                <p className="text-xs text-slate-600 leading-relaxed">
                  宮崎最大の歓楽街「ニシタチ」のすぐそばに位置し、夜の地鶏炭火焼きや居酒屋巡りにはこれ以上ない好立地。機能的な客室と高品質ベッドで快眠を約束します。
                </p>
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <div className="text-xs text-slate-500">最安参考料金（1名利用時）</div>
                  <div className="text-lg font-black text-rose-600">¥4,500<span className="text-xs font-normal text-slate-500">〜 / 人</span></div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F939%2F939.html" target="_blank" rel="noopener noreferrer" className="block w-full py-3 bg-gradient-to-r from-rose-600 to-amber-600 hover:from-rose-700 hover:to-amber-700 text-white font-bold text-center rounded-xl transition shadow-sm">
                楽天トラベルでプラン・空室を見る
              </a>
            </div>
          </div>
        </div>

        {/* 宿5 */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-stone-100 text-stone-800 text-xs font-bold rounded-md">駅前徒歩すぐ・クチコミ★4.42</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>{4.42}</span>
                <span className="text-slate-400 text-xs font-normal">（駅前最高評価）</span>
              </div>
            </div>
            <h3 className="text-xl font-bold text-slate-900 leading-snug">
              リッチモンドホテル宮崎駅前
            </h3>
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span>宮崎</span>
            </div>
            <div className="grid md:grid-cols-2 gap-4 pt-2">
              <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-100">
                <Image src="https://img.travel.rakuten.co.jp/share/HOTEL/14993/14993.jpg" alt="リッチモンドホテル宮崎駅前" fill className="object-cover" unoptimized />
              </div>
              <div className="flex flex-col justify-between space-y-3">
                <p className="text-xs text-slate-600 leading-relaxed">
                  JR宮崎駅西口すぐ。クチコミ★4.42という市内最高水準の評価を誇る人気ホテル。地元食材をふんだんに取り入れた郷土朝食バイキングで贅沢な朝を迎えられます。
                </p>
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <div className="text-xs text-slate-500">最安参考料金（1名利用時）</div>
                  <div className="text-lg font-black text-rose-600">¥4,650<span className="text-xs font-normal text-slate-500">〜 / 人</span></div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F14993%2F14993.html" target="_blank" rel="noopener noreferrer" className="block w-full py-3 bg-gradient-to-r from-rose-600 to-amber-600 hover:from-rose-700 hover:to-amber-700 text-white font-bold text-center rounded-xl transition shadow-sm">
                楽天トラベルでプラン・空室を見る
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* まとめ */}
      <section className="max-w-4xl mx-auto px-4 mt-12">
        <div className="bg-gradient-to-r from-slate-900 to-rose-950 text-white rounded-2xl p-6 sm:p-8 space-y-4">
          <h2 className="text-xl font-bold flex items-center gap-2 text-rose-300">
            <CheckCircle2 className="w-5 h-5" />
            秋の宮崎・高千穂ドライブの満喫ポイント
          </h2>
          <p className="text-sm text-rose-100 leading-relaxed">
            高千穂峡の貸しボートは紅葉シーズンの週末は予約が即埋まるため、事前ネット予約が必須。宮崎市内から高千穂までは高速道路を利用して車で約2時間。早朝に出発して神話の渓谷を巡り、夜は宮崎市街地で地鶏と焼酎を満喫するルートがおすすめです。
          </p>
          <div className="pt-2">
            <Link href="/#autumn-features" className="inline-flex items-center gap-1.5 text-xs text-rose-300 hover:text-white transition underline">
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
              📊 宮崎：高千穂峡紅葉ドライブ拠点＆本場チキン南蛮！2,000円台〜格安ホテル5選：掲載宿スペック一覧比較表＆宿泊者クチコミ・アクセス詳細分析
            </h2>
            <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
              楽天トラベル公式APIより取得した「宮崎：高千穂峡紅葉ドライブ拠点＆本場チキン南蛮！2,000円台〜格安ホテル5選」掲載宿の所在地・最寄り駅・駐車場条件・クチコミ評価・参考最安料金を一覧で比較できます。公共交通機関（新幹線・在来線・送迎バス）利用の方もマイカー・レンタカー利用の方も、旅のスタイルに合った一軒をお選びください。
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
                <td className="p-3 font-bold text-stone-900">1. マンゴーホテル宮崎</td>
                <td className="p-3 text-stone-600">宮崎県宮崎市橘通東1-5-8</td>
                <td className="p-3 text-stone-600">宮崎駅周辺</td>
                <td className="p-3 text-stone-600">有/有料【普通車まで】1泊1000円/予約不可先着順【中型車】1泊3000円/要予約【駐輪】無料</td>
                <td className="p-3 font-bold text-amber-600">★4.04（153件）</td>
                <td className="p-3 font-bold text-rose-600">¥2,925〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F191880%2F191880.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">2. ホテル　ベルフォート日向</td>
                <td className="p-3 text-stone-600">宮崎県日向市上町7-3</td>
                <td className="p-3 text-stone-600">日向駅周辺</td>
                <td className="p-3 text-stone-600">100台　400円/泊(税別）2026年1月1日より駐車場料金が500円税込となります。</td>
                <td className="p-3 font-bold text-amber-600">★3.74（1055件）</td>
                <td className="p-3 font-bold text-rose-600">¥6,434〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F413%2F413.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">3. ホテルマリックスラグーン</td>
                <td className="p-3 text-stone-600">宮崎県宮崎市清水3-105</td>
                <td className="p-3 text-stone-600">宮崎駅周辺</td>
                <td className="p-3 text-stone-600">2024年8月1日より料金改定　１泊/普通車/900円→1,000円</td>
                <td className="p-3 font-bold text-amber-600">★3.94（1928件）</td>
                <td className="p-3 font-bold text-rose-600">¥5,500〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F898%2F898.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">4. 都城グリーンホテル</td>
                <td className="p-3 text-stone-600">宮崎県都城市栄町27-2-1</td>
                <td className="p-3 text-stone-600">都城駅周辺</td>
                <td className="p-3 text-stone-600">有り　250台　1台あたり普通車500円・大型車1500円・大型車は要予約</td>
                <td className="p-3 font-bold text-amber-600">★4.23（2749件）</td>
                <td className="p-3 font-bold text-rose-600">¥4,390〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F1047%2F1047.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">5. フェニックス・シーガイア・オーシャン・タワー</td>
                <td className="p-3 text-stone-600">宮崎県宮崎市山崎町浜山</td>
                <td className="p-3 text-stone-600">宮崎駅周辺</td>
                <td className="p-3 text-stone-600">無料駐車場をご用意しております（大型車・バスも駐車可能）事前のご予約は不要です。</td>
                <td className="p-3 font-bold text-amber-600">★4.53（4898件）</td>
                <td className="p-3 font-bold text-rose-600">¥6,800〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F5173%2F5173.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
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
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">マンゴーホテル宮崎</h3>
                  <span className="text-xs text-stone-400 ml-2">（まんごーほてるみやざき）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥2,925〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/191880/191880.jpg" alt="マンゴーホテル宮崎 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>宮崎最大の飲食店街ニシタチが徒歩圏内！マンゴージュースとアイスを24時間無料提供中！</p>
                  <p><strong>【所在地・アクセス】</strong>〒 宮崎県宮崎市橘通東1-5-8 ／ 最寄り駅：宮崎 ／ 交通案内：ＪＲ日豊本線　宮崎駅から車で約１０分。宮崎空港から空港リムジンバスで約１５分。</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有/有料【普通車まで】1泊1000円/予約不可先着順【中型車】1泊3000円/要予約【駐輪】無料</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★3.88 ／ 立地 ★3.88 ／ 部屋 ★4.07 ／ 設備 ★4 ／ 風呂 ★3.83 ／ 食事 ★3.77</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「ベッドが広く快適、無料のアイスも絶品大人2、子供3での宿泊でセミダブルベット4つあり2泊したのでゆっくり過ごせて快適でしたマンゴウアイスが宿泊者無料でとても美味しかったですクチコミ…　2026-09-24 11:14:30投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #2</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">ホテル　ベルフォート日向</h3>
                  <span className="text-xs text-stone-400 ml-2">（べるふぉーと　ひゅうが）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥6,434〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/413/413_ro.jpg" alt="ホテル　ベルフォート日向 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>日向市街中心部。交通至便。ビジネス、レジャー両対応。婚礼、宴会、会議等の施設も充実。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 宮崎県日向市上町7-3 ／ 最寄り駅：日向 ／ 交通案内：JR日向市駅徒歩5分。コンビニ1分。市役所4分。市街地中心。光インターネット使い放題。和洋2つのレストランにグルメ満載。</p>
                  <p><strong>【駐車場・マイカー利用】</strong>100台　400円/泊(税別）2026年1月1日より駐車場料金が500円税込となります。</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★3.76 ／ 立地 ★3.74 ／ 部屋 ★3.73 ／ 設備 ★3.67 ／ 風呂 ★3.7</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「スタッフの対応が親切で部屋も綺麗初めて宿泊させて頂きました。今回は一泊二食させて頂きました。 フロントの方、1階の居酒屋、朝食会場の方も親切な方達ばかりでした。 部屋も綺麗。シャワーだけが少し不満…　2026-10-05 17:56:00投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #3</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">ホテルマリックスラグーン</h3>
                  <span className="text-xs text-stone-400 ml-2">（まりっくす　らぐーん）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥5,500〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/898/898_f.jpg" alt="ホテルマリックスラグーン 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>男女別の大浴場完備。全室Wi-Fi＆有線LAN対応。レディース専用フロアー完備。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 宮崎県宮崎市清水3-105 ／ 最寄り駅：宮崎 ／ 交通案内：繁華街に徒歩４分！駅から西へまっすぐ車で３分。宮崎西インターより国道１０号線を市内へ車で１０分！</p>
                  <p><strong>【駐車場・マイカー利用】</strong>2024年8月1日より料金改定　１泊/普通車/900円→1,000円</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★3.96 ／ 立地 ★3.88 ／ 部屋 ★3.87 ／ 設備 ★3.91 ／ 風呂 ★4.05</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「温泉は最高だがネット環境が遅すぎて不満20年以上前から何度も利用させてもらっています。温泉が隣接しているのが最大の魅力です。ただ一点だけ大きな不満点があります。インターネットがとにかく遅い!ネット…　2026-09-28 16:33:51投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #4</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">都城グリーンホテル</h3>
                  <span className="text-xs text-stone-400 ml-2">（みやこのじょう　ぐりーんほてる）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥4,390〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/1047/1047_sgl.jpg" alt="都城グリーンホテル 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>＼朝食高評価／宮崎グルメ満載♪バイキング【近隣ホテル唯一の大浴場】館内浴場・人工炭酸カルシウム温泉！</p>
                  <p><strong>【所在地・アクセス】</strong>〒 宮崎県都城市栄町27-2-1 ／ 最寄り駅：都城 ／ 交通案内：JR都城駅から徒歩で約5分。宮崎空港よりリムジンバスで約１時間・都城駅バス停下車、徒歩5分。都城インタ－より車で１５分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　250台　1台あたり普通車500円・大型車1500円・大型車は要予約</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.23 ／ 立地 ★4.08 ／ 部屋 ★4.19 ／ 設備 ★4.18 ／ 風呂 ★4.23 ／ 食事 ★4.41</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「初めて本館泊まったけど、いつもの部屋でいいかな。臭いが気になった。クチコミの詳細はこちらから　https://review.travel.rakuten.co.jp/hotel/voice/104…　2026-10-09 18:36:00投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #5</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">フェニックス・シーガイア・オーシャン・タワー</h3>
                  <span className="text-xs text-stone-400 ml-2">（ふぇにっくす・しーがいあ・おーしゃん・たわー）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥6,800〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/5173/5173_room.jpg" alt="フェニックス・シーガイア・オーシャン・タワー 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>都会を離れ、心を整える、太陽と海のリゾート</p>
                  <p><strong>【所在地・アクセス】</strong>〒 宮崎県宮崎市山崎町浜山 ／ 最寄り駅：宮崎 ／ 交通案内：【宮崎駅利用】車15分、路線バスあり【宮崎空港利用】車30分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>無料駐車場をご用意しております（大型車・バスも駐車可能）事前のご予約は不要です。</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.46 ／ 立地 ★4.65 ／ 部屋 ★4.64 ／ 設備 ★4.47 ／ 風呂 ★4.39 ／ 食事 ★4.55</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「プールと朝食に大満足、子供たちも大喜びプールが楽しかった。子どもたちも満喫。ただ影になるところが少なく場所が取られていると休めない。お風呂は案内が詳しくあると初回の人も分かりやすいかもです。朝のブ…　2026-10-09 18:42:21投稿」
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-6 border-t border-stone-200">
            <h3 className="text-lg font-bold text-stone-900 border-l-4 border-teal-600 pl-3">
              🗺️ あわせて巡りたい！宮崎県の代表的な観光名所・歴史自然ガイド（Wikipedia公認画像・解説）
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              宿泊前後の1泊2日・2泊3日モデルコースに組み込みたい、宮崎県を代表する名所・絶景スポットの解説です。チェックイン前後の荷物預かりや駅周辺のレンタカー・周遊バスを活用すると効率よく巡ることができます。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #1</span>
                <h3 className="text-base font-bold text-stone-900">高千穂峡（真名井の滝）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">阿蘇山の火砕流が侵食されてできた高さ80m〜100mの断崖が続く渓谷。日本の滝百選「真名井の滝」のすぐ脇を貸しボートで進む神秘的な体験が魅力です。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #2</span>
                <h3 className="text-base font-bold text-stone-900">サンメッセ日南（モアイ像）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">太平洋の青い海を見下ろす丘に世界で唯一イースター島の許可を得て完全復元された7体のモアイ像。南国情緒溢れる映えスポットとして人気を博しています。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #3</span>
                <h3 className="text-base font-bold text-stone-900">青島神社・鬼の洗濯板</h3>
                <p className="text-xs text-stone-600 leading-relaxed">波状の岩肌が島を囲む奇観「鬼の洗濯板」の中心に鎮座する亜熱帯植物に囲まれた神社。縁結びのご利益で知られ、真っ赤な社殿と南国樹木の対比が見事です。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #4</span>
                <h3 className="text-base font-bold text-stone-900">鵜戸神宮（うどじんぐう）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">日向灘の断崖絶壁にある天然の洞窟の中に朱塗りの本殿が鎮座する異色の神社。崖下の亀岩の穴に「運玉」を投げ入れる願掛けが名物です。</p>
              </div>
            </div>
            </div>
          </div>

          <div className="bg-amber-50/70 rounded-2xl p-5 md:p-6 border border-amber-200 space-y-3 text-xs text-stone-700 leading-relaxed">
            <h3 className="text-sm md:text-base font-bold text-amber-950">
              💡 宮崎県エリアの宿泊予約・シーズン別ベストタイミングと節約ノウハウ
            </h3>
            <p>
              <strong>1. 早期予約と楽天トラベルクーポンの併用：</strong> 宮崎県の人気温泉宿・リゾートホテルは、週末や連休・紅葉・年末年始の60日〜30日前から一気に予約が埋まります。毎月5と0のつく日やスーパーSALE期間中に配布される宿クーポン・自治体クーポンを併用すると、通常より最大10〜20%お得に予約可能です。
            </p>
            <p>
              <strong>2. 夕食・朝食プランと部屋タイプの選び方：</strong> 地元産の旬魚介やブランド牛会席を味わうなら「夕朝食付きプラン」、周辺の屋台・老舗居酒屋・ご当地グルメを食べ歩くなら「朝食付き」または「素泊まり＋天然温泉大浴場付きホテル」を選ぶと予算と満足度のバランスが最適化されます。
            </p>
          </div>
        </section>

      </main>
  );
}
