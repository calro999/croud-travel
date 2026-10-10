import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, Star, MapPin, Tag, CheckCircle2, AlertCircle, Utensils, Mountain, Waves, Sparkles, Train } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '山形：霞城公園の秋紅葉と本場芋煮を満喫！格安・高コスパホテル5選',
  description: '秋の山形城跡・霞城公園を彩る見事な紅葉と、河原や名店で味わう熱々の本場芋煮！山形駅周辺でお得に泊まれる1泊3,000円台〜5,000円台の格安・高評価ホテル厳選5選。',
};

export default function AutumnBudgetYamagataHotelsPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 pb-24">
      {/* パンくずリスト */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 py-3 text-xs text-slate-500 flex items-center space-x-2 overflow-x-auto whitespace-nowrap">
          <Link href="/" className="hover:text-red-600 transition">ホーム</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <Link href="/#autumn-features" className="hover:text-red-600 transition">秋の特集一覧</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <span className="text-slate-800 font-medium">山形 霞城公園紅葉・芋煮 格安宿5選</span>
        </div>
      </div>

      {/* ヒーローセクション */}
      <section className="relative bg-gradient-to-br from-red-950 via-rose-900 to-slate-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-500/20 text-red-300 text-xs font-semibold tracking-wider border border-red-400/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>霞城公園の紅葉絵巻と本場醤油牛芋煮</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight leading-snug">「山形」霞城公園の紅葉と本場芋煮を堪能！<br className="hidden sm:inline" />3,000円台〜泊まれる格安・高コスパ宿5選</h1>
          <p className="text-sm md:text-base text-red-100/90 max-w-2xl mx-auto leading-relaxed">
            山形城跡を囲む霞城公園のお濠と木々が錦秋に染まる絶景。里芋と山形牛を醤油仕立てでぐつぐつ煮込んだ本場芋煮、つや姫の新米など、秋の山形は実りの宝庫！駅前徒歩圏の高評価ホテルを1泊3,000円台〜5,000円台で厳選。
          </p>
        </div>
      </section>

      {/* イントロダクション */}
      <section className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
          <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <Utensils className="w-5 h-5 text-red-600" />
            秋の味覚が爆発する山形！賢く泊まって米沢牛・地酒を味わう旅
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            秋の山形といえば、馬見ヶ崎川沿いの名物芋煮会はもちろん、市内各地の居酒屋や郷土料理店で供される旬の味覚。山形駅周辺は洗練されたビジネスホテルが多く、最安3,000円台から快適に泊まれる激戦区です。宿代を賢く浮かせて、夜は山形牛のステーキや出羽桜・十四代など幻の銘酒巡りに繰り出しましょう。
          </p>
        </div>
      </section>

      
        {/* 観光地ガイド・公式Wikipedia写真＆解説 */}
        <section className="bg-white rounded-2xl border border-stone-200/90 overflow-hidden shadow-sm mb-10">
          <div className="bg-gradient-to-r from-stone-900 to-stone-800 text-white px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
              <h2 className="text-base md:text-lg font-bold tracking-wide">山形・城下町散策ガイド：山形城跡・霞城公園の秋濠と紅葉</h2>
            </div>
            <span className="text-[11px] text-stone-300 bg-white/10 px-2.5 py-0.5 rounded-full border border-white/10">地域名所ガイド</span>
          </div>
          <div className="grid md:grid-cols-12 gap-6 p-6 items-center">
            <div className="md:col-span-5 relative h-56 md:h-64 rounded-xl overflow-hidden bg-stone-100 border border-stone-200/60 shadow-inner">
              <Image
                src="https://thumb.wikimedia.org/wikipedia/commons/thumb/b/bf/220430_Yamagata_Castle_Yamagata_Yamagata_pref_Japan01s3.jpg/1280px-220430_Yamagata_Castle_Yamagata_Yamagata_pref_Japan01s3.jpg"
                alt="山形城跡・霞城公園の秋濠と紅葉"
                fill
                className="object-cover hover:scale-105 transition duration-500"
                sizes="(max-width: 768px) 100vw, 400px"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-2 text-right">
                <span className="text-[10px] text-white/90">写真：Wikimedia Commons</span>
              </div>
            </div>
            <div className="md:col-span-7 space-y-3">
              <h3 className="text-lg md:text-xl font-bold text-stone-900 leading-snug">山形城跡・霞城公園の秋濠と紅葉の歴史と見どころ</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">霞城公園（かじょうこうえん）は、山形市の中心部に位置する山形城跡（国指定史跡）のうち約35．9haの面積を整備した都市公園である。</p>
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
              <span className="px-2.5 py-1 bg-red-100 text-red-800 text-xs font-bold rounded-md">コスパ最強・老舗の安心感</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>{4.03}</span>
                <span className="text-slate-400 text-xs font-normal">（価格重視派◎）</span>
              </div>
            </div>
            <h3 className="text-xl font-bold text-slate-900 leading-snug">
              山形グランドホテル
            </h3>
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span>ＪＲ山形駅東口より徒歩15分</span>
            </div>
            <div className="grid md:grid-cols-2 gap-4 pt-2">
              <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-100">
                <Image src="https://img.travel.rakuten.co.jp/share/HOTEL/1492/1492.jpg" alt="山形グランドホテル" fill className="object-cover" unoptimized />
              </div>
              <div className="flex flex-col justify-between space-y-3">
                <p className="text-xs text-slate-600 leading-relaxed">
                  山形市の中心街に位置し、落ち着いた風格を漂わせるシティホテル。1泊3,200円台からという驚異的な価格設定で、飲食店街へのアクセスも抜群。朝食の郷土料理バイキングも定評があります。
                </p>
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <div className="text-xs text-slate-500">最安参考料金（1名利用時）</div>
                  <div className="text-lg font-black text-rose-600">¥3,227<span className="text-xs font-normal text-slate-500">〜 / 人</span></div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <a href="https://hb.afl.rakuten.co.jp/hgc/g0190dd6.2qbvd826.g0190dd6.2qbve0a2/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F1492%2F1492.html" target="_blank" rel="noopener noreferrer" className="block w-full py-3 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-bold text-center rounded-xl transition shadow-sm">
                楽天トラベルでプラン・空室を見る
              </a>
            </div>
          </div>
        </div>

        {/* 宿2 */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-teal-100 text-teal-800 text-xs font-bold rounded-md">天然温泉大浴場・無料健康朝食</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>{4.18}</span>
                <span className="text-slate-400 text-xs font-normal">（温泉で温まる）</span>
              </div>
            </div>
            <h3 className="text-xl font-bold text-slate-900 leading-snug">
              スーパーホテル山形駅西口　天然温泉　花笠の湯
            </h3>
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span>山形新幹線・JR山形駅西口より徒歩約7分</span>
            </div>
            <div className="grid md:grid-cols-2 gap-4 pt-2">
              <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-100">
                <Image src="https://img.travel.rakuten.co.jp/share/HOTEL/169970/169970.jpg" alt="スーパーホテル山形駅西口　天然温泉　花笠の湯" fill className="object-cover" unoptimized />
              </div>
              <div className="flex flex-col justify-between space-y-3">
                <p className="text-xs text-slate-600 leading-relaxed">
                  山形駅西口すぐ。肌に優しい天然温泉「花笠の湯」を完備し、山形の冷え込む秋の夜もぽかぽかに温まります。焼きたてパンやご当地芋煮も楽しめる無料健康朝食がついて3,000円台の圧倒的価値！
                </p>
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <div className="text-xs text-slate-500">最安参考料金（1名利用時）</div>
                  <div className="text-lg font-black text-rose-600">¥3,440<span className="text-xs font-normal text-slate-500">〜 / 人</span></div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <a href="https://hb.afl.rakuten.co.jp/hgc/g0190dd6.2qbvd826.g0190dd6.2qbve0a2/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F169970%2F169970.html" target="_blank" rel="noopener noreferrer" className="block w-full py-3 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-bold text-center rounded-xl transition shadow-sm">
                楽天トラベルでプラン・空室を見る
              </a>
            </div>
          </div>
        </div>

        {/* 宿3 */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-blue-100 text-blue-800 text-xs font-bold rounded-md">霞城セントラル直結・高層夜景</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>{4.14}</span>
                <span className="text-slate-400 text-xs font-normal">（駅直結・雨雪安心）</span>
              </div>
            </div>
            <h3 className="text-xl font-bold text-slate-900 leading-snug">
              山形駅西口ワシントンホテル
            </h3>
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span>ＪＲ山形駅（東西自由通路）直結徒歩２分</span>
            </div>
            <div className="grid md:grid-cols-2 gap-4 pt-2">
              <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-100">
                <Image src="https://img.travel.rakuten.co.jp/share/HOTEL/1684/1684.jpg" alt="山形駅西口ワシントンホテル" fill className="object-cover" unoptimized />
              </div>
              <div className="flex flex-col justify-between space-y-3">
                <p className="text-xs text-slate-600 leading-relaxed">
                  JR山形駅西口から連絡通路で直結する「霞城セントラル」内。客室は高層階に位置し、秋の霞城公園や市内夜景を一望できます。雨や肌寒い日でも濡れずにチェックインできる快適性が魅力。
                </p>
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <div className="text-xs text-slate-500">最安参考料金（1名利用時）</div>
                  <div className="text-lg font-black text-rose-600">¥4,150<span className="text-xs font-normal text-slate-500">〜 / 人</span></div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <a href="https://hb.afl.rakuten.co.jp/hgc/g0190dd6.2qbvd826.g0190dd6.2qbve0a2/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F1684%2F1684.html" target="_blank" rel="noopener noreferrer" className="block w-full py-3 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-bold text-center rounded-xl transition shadow-sm">
                楽天トラベルでプラン・空室を見る
              </a>
            </div>
          </div>
        </div>

        {/* 宿4 */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-amber-100 text-amber-800 text-xs font-bold rounded-md">脅威のクチコミ★4.65・大浴場＆サウナ</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>{4.65}</span>
                <span className="text-slate-400 text-xs font-normal">（市内最高峰クオリティ）</span>
              </div>
            </div>
            <h3 className="text-xl font-bold text-slate-900 leading-snug">
              ホテルアーバングレイスグラン＜山形＞
            </h3>
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span>山形駅東口より徒歩約3分</span>
            </div>
            <div className="grid md:grid-cols-2 gap-4 pt-2">
              <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-100">
                <Image src="https://img.travel.rakuten.co.jp/share/HOTEL/178263/178263.jpg" alt="ホテルアーバングレイスグラン＜山形＞" fill className="object-cover" unoptimized />
              </div>
              <div className="flex flex-col justify-between space-y-3">
                <p className="text-xs text-slate-600 leading-relaxed">
                  山形駅東口徒歩3分。クチコミ4.65という驚異的な評価を誇るスタイリッシュホテル。広々とした大浴場と本格サウナを完備し、洗練された客室空間で贅沢な寛ぎを4,000円台で味わえます。
                </p>
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <div className="text-xs text-slate-500">最安参考料金（1名利用時）</div>
                  <div className="text-lg font-black text-rose-600">¥4,500<span className="text-xs font-normal text-slate-500">〜 / 人</span></div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <a href="https://hb.afl.rakuten.co.jp/hgc/g0190dd6.2qbvd826.g0190dd6.2qbve0a2/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F178263%2F178263.html" target="_blank" rel="noopener noreferrer" className="block w-full py-3 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-bold text-center rounded-xl transition shadow-sm">
                楽天トラベルでプラン・空室を見る
              </a>
            </div>
          </div>
        </div>

        {/* 宿5 */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-stone-100 text-stone-800 text-xs font-bold rounded-md">評価★4.44・山形牛や郷土朝食が大人気</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>{4.44}</span>
                <span className="text-slate-400 text-xs font-normal">（朝食絶賛）</span>
              </div>
            </div>
            <h3 className="text-xl font-bold text-slate-900 leading-snug">
              リッチモンドホテル山形駅前
            </h3>
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span>ＪＲ山形駅西口徒歩約２分</span>
            </div>
            <div className="grid md:grid-cols-2 gap-4 pt-2">
              <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-100">
                <Image src="https://img.travel.rakuten.co.jp/share/HOTEL/68482/68482.jpg" alt="リッチモンドホテル山形駅前" fill className="object-cover" unoptimized />
              </div>
              <div className="flex flex-col justify-between space-y-3">
                <p className="text-xs text-slate-600 leading-relaxed">
                  山形駅西口徒歩約2分。シモンズ製ベッドを配した快適な客室に加え、朝食では山形名物の芋煮や玉こんにゃく、つや姫のご飯など山形の恵みをたっぷり満喫できる大人気ホテルです。
                </p>
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <div className="text-xs text-slate-500">最安参考料金（1名利用時）</div>
                  <div className="text-lg font-black text-rose-600">¥5,350<span className="text-xs font-normal text-slate-500">〜 / 人</span></div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <a href="https://hb.afl.rakuten.co.jp/hgc/g0190dd6.2qbvd826.g0190dd6.2qbve0a2/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F68482%2F68482.html" target="_blank" rel="noopener noreferrer" className="block w-full py-3 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-bold text-center rounded-xl transition shadow-sm">
                楽天トラベルでプラン・空室を見る
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* まとめ */}
      <section className="max-w-4xl mx-auto px-4 mt-12">
        <div className="bg-gradient-to-r from-slate-950 to-red-950 text-white rounded-2xl p-6 sm:p-8 space-y-4">
          <h2 className="text-xl font-bold flex items-center gap-2 text-red-300">
            <CheckCircle2 className="w-5 h-5" />
            秋の山形・霞城公園旅を120%楽しむアドバイス
          </h2>
          <p className="text-sm text-red-100 leading-relaxed">
            霞城公園は東大手門周辺の復元建築と紅葉のコラボレーションが圧巻。駅から徒歩10〜15分ほどでアクセスできるため、朝の澄んだ空気の中での散策にもぴったりです。名物の芋煮は店によって味付け（醤油×牛肉、味噌×豚肉など）が異なるため、食べ比べも楽しんでみてください。
          </p>
          <div className="pt-2">
            <Link href="/#autumn-features" className="inline-flex items-center gap-1.5 text-xs text-red-300 hover:text-white transition underline">
              秋の旅行特集一覧へ戻る <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
