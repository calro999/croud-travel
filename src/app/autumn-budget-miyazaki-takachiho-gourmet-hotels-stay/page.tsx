import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, Star, MapPin, Tag, CheckCircle2, AlertCircle, Utensils, Mountain, Waves, Sparkles, Train } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '宮崎：高千穂峡紅葉ドライブ拠点＆本場チキン南蛮！2,000円台〜格安ホテル5選',
  description: '神話の里・高千穂峡の柱状節理を彩る見事な紅葉とボート遊覧、本場の絶品チキン南蛮＆極上宮崎牛！宮崎駅・橘通り周辺で1泊2,000円台〜4,000円台で泊まれる高評価ホテル厳選5選。',
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
          <div className="grid md:grid-cols-12 gap-6 p-6 items-center">
            <div className="md:col-span-5 relative h-56 md:h-64 rounded-xl overflow-hidden bg-stone-100 border border-stone-200/60 shadow-inner">
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
            <div className="md:col-span-7 space-y-3">
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
    </main>
  );
}
