import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, Star, MapPin, Tag, CheckCircle2, AlertCircle, Utensils, Mountain, Waves, Sparkles, Train } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'いわき：常磐ものの秋魚グルメ＆ハワイアンズ拠点！2,000円台〜格安ホテル5選',
  description: '常夏の温泉パラダイス「スパリゾートハワイアンズ」とアクアマリンふくしま！築地・豊洲のプロが絶賛する「常磐もの」のヒラメ・メヒカリ・あんこう鍋。いわき駅周辺で1泊2,000円台〜3,000円台で泊まれる高評価宿5選。',
};

export default function AutumnBudgetIwakiHotelsPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 pb-24">
      {/* パンくずリスト */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 py-3 text-xs text-slate-500 flex items-center space-x-2 overflow-x-auto whitespace-nowrap">
          <Link href="/" className="hover:text-cyan-600 transition">ホーム</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <Link href="/#autumn-features" className="hover:text-cyan-600 transition">秋の特集一覧</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <span className="text-slate-800 font-medium">いわき ハワイアンズ・常磐もの魚 格安宿5選</span>
        </div>
      </div>

      {/* ヒーローセクション */}
      <section className="relative bg-gradient-to-br from-cyan-950 via-slate-900 to-blue-950 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-semibold tracking-wider border border-cyan-400/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ハワイアンズ温泉＆築地絶賛の常磐もの魚</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight leading-snug">「いわき」ハワイアンズ拠点＆極上常磐もの！<br className="hidden sm:inline" />2,000円台〜泊まれる格安・高コスパ宿5選</h1>
          <p className="text-sm md:text-base text-cyan-100/90 max-w-2xl mx-auto leading-relaxed">
            巨大露天風呂「江戸情話 与市」やプールで遊べる常夏の温泉リゾート「スパリゾートハワイアンズ」。そして親潮と黒潮が交わる豊かな海で育ち、豊洲市場で最高評価を受ける「常磐もの（じょうばんもの）」の脂の乗ったメヒカリ唐揚げや秋ヒラメ、あんこう鍋！いわき駅前で2,000円台〜泊まれる優良宿を厳選。
          </p>
        </div>
      </section>

      {/* イントロダクション */}
      <section className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
          <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <Utensils className="w-5 h-5 text-cyan-600" />
            宿泊代2,000円台！浮いた予算でハワイアンズ入場券＆常磐ものの刺身盛り合わせへ
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            ハワイアンズ直営ホテルは秋の連休に高額になりがちですが、JRいわき駅前に泊まれば2,000円〜3,000円台で極めて快適なホテルを確保可能。路線バスや無料送迎バスを利用してスマートに観光できます。浮かせた宿泊費で、いわき駅前の海鮮居酒屋で常磐ものの姿造りや福島地酒「又兵衛」を心ゆくまで堪能しましょう。
          </p>
        </div>
      </section>

      
        {/* 観光地ガイド・公式Wikipedia写真＆解説 */}
        <section className="bg-white rounded-2xl border border-stone-200/90 overflow-hidden shadow-sm mb-10">
          <div className="bg-gradient-to-r from-stone-900 to-stone-800 text-white px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
              <h2 className="text-base md:text-lg font-bold tracking-wide">いわき・温泉リゾートガイド：常夏の温泉テーマパーク・スパリゾートハワイアンズ</h2>
            </div>
            <span className="text-[11px] text-stone-300 bg-white/10 px-2.5 py-0.5 rounded-full border border-white/10">地域名所ガイド</span>
          </div>
          <div className="grid md:grid-cols-12 gap-6 p-6 items-center">
            <div className="md:col-span-5 relative h-56 md:h-64 rounded-xl overflow-hidden bg-stone-100 border border-stone-200/60 shadow-inner">
              <Image
                src="https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f3/Spa_Resort_Hawaiians_Water_Park._A.JPG/1280px-Spa_Resort_Hawaiians_Water_Park._A.JPG"
                alt="常夏の温泉テーマパーク・スパリゾートハワイアンズ"
                fill
                className="object-cover hover:scale-105 transition duration-500"
                sizes="(max-width: 768px) 100vw, 400px"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-2 text-right">
                <span className="text-[10px] text-white/90">写真：Wikimedia Commons</span>
              </div>
            </div>
            <div className="md:col-span-7 space-y-3">
              <h3 className="text-lg md:text-xl font-bold text-stone-900 leading-snug">常夏の温泉テーマパーク・スパリゾートハワイアンズの歴史と見どころ</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">スパリゾートハワイアンズ（英: Spa Resort Hawaiians）は、福島県いわき市常磐藤原町に所在する、大型温水プール・温泉・ホテル・ゴルフ場からなる大型レジャー施設である。1966年（昭和41年）に常磐ハワイアンセンターとして開業し、1990年（平成2年）にスパリゾートハワイアンズの名称になった。</p>
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
              <span className="px-2.5 py-1 bg-cyan-100 text-cyan-800 text-xs font-bold rounded-md">衝撃の2,000円台・老舗の安心感</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>{4.02}</span>
                <span className="text-slate-400 text-xs font-normal">（破格プライス）</span>
              </div>
            </div>
            <h3 className="text-xl font-bold text-slate-900 leading-snug">
              クレストンホテルいわき（ＢＢＨホテルグループ）
            </h3>
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span>いわき</span>
            </div>
            <div className="grid md:grid-cols-2 gap-4 pt-2">
              <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-100">
                <Image src="https://img.travel.rakuten.co.jp/share/HOTEL/54833/54833.jpg" alt="クレストンホテルいわき（ＢＢＨホテルグループ）" fill className="object-cover" unoptimized />
              </div>
              <div className="flex flex-col justify-between space-y-3">
                <p className="text-xs text-slate-600 leading-relaxed">
                  いわき駅前より徒歩すぐ。1泊2,800円〜という圧巻の低価格ながら、清潔なベッドと丁寧なサービスを提供。ハワイアンズやアクアマリン観光の拠点に最高のコスパを誇ります。
                </p>
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <div className="text-xs text-slate-500">最安参考料金（1名利用時）</div>
                  <div className="text-lg font-black text-rose-600">¥2,800<span className="text-xs font-normal text-slate-500">〜 / 人</span></div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F54833%2F54833.html" target="_blank" rel="noopener noreferrer" className="block w-full py-3 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-bold text-center rounded-xl transition shadow-sm">
                楽天トラベルでプラン・空室を見る
              </a>
            </div>
          </div>
        </div>

        {/* 宿2 */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-blue-100 text-blue-800 text-xs font-bold rounded-md">デザイナーズ・無料朝食サービス</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>{4.02}</span>
                <span className="text-slate-400 text-xs font-normal">（お洒落空間）</span>
              </div>
            </div>
            <h3 className="text-xl font-bold text-slate-900 leading-snug">
              ワンランク上の快適ステイ　ホテルソレイユ（ＢＢＨホテルグループ）
            </h3>
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span>いわき</span>
            </div>
            <div className="grid md:grid-cols-2 gap-4 pt-2">
              <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-100">
                <Image src="https://img.travel.rakuten.co.jp/share/HOTEL/17948/17948.jpg" alt="ワンランク上の快適ステイ　ホテルソレイユ（ＢＢＨホテルグループ）" fill className="object-cover" unoptimized />
              </div>
              <div className="flex flex-col justify-between space-y-3">
                <p className="text-xs text-slate-600 leading-relaxed">
                  シンプルで洗練されたデザイナーズ客室。手作りの朝食バイキングが無料で付き、2,800円とは思えない充実した宿泊体験でリピーター多数の人気ホテル。
                </p>
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <div className="text-xs text-slate-500">最安参考料金（1名利用時）</div>
                  <div className="text-lg font-black text-rose-600">¥2,800<span className="text-xs font-normal text-slate-500">〜 / 人</span></div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F17948%2F17948.html" target="_blank" rel="noopener noreferrer" className="block w-full py-3 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-bold text-center rounded-xl transition shadow-sm">
                楽天トラベルでプラン・空室を見る
              </a>
            </div>
          </div>
        </div>

        {/* 宿3 */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-teal-100 text-teal-800 text-xs font-bold rounded-md">繁華街すぐ・大浴場＆充実アメニティ</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>{4.09}</span>
                <span className="text-slate-400 text-xs font-normal">（無料サービス充実）</span>
              </div>
            </div>
            <h3 className="text-xl font-bold text-slate-900 leading-snug">
              ホテルクラウンヒルズいわき（ＢＢＨホテルグループ）
            </h3>
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span>いわき</span>
            </div>
            <div className="grid md:grid-cols-2 gap-4 pt-2">
              <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-100">
                <Image src="https://img.travel.rakuten.co.jp/share/HOTEL/164805/164805.jpg" alt="ホテルクラウンヒルズいわき（ＢＢＨホテルグループ）" fill className="object-cover" unoptimized />
              </div>
              <div className="flex flex-col justify-between space-y-3">
                <p className="text-xs text-slate-600 leading-relaxed">
                  いわき駅前繁華街に位置し、夜の常磐もの居酒屋巡りに絶好のロケーション。無料のマッサージチェアや漫画コーナー、ウェルカムドリンクも用意されています。
                </p>
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <div className="text-xs text-slate-500">最安参考料金（1名利用時）</div>
                  <div className="text-lg font-black text-rose-600">¥3,460<span className="text-xs font-normal text-slate-500">〜 / 人</span></div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F164805%2F164805.html" target="_blank" rel="noopener noreferrer" className="block w-full py-3 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-bold text-center rounded-xl transition shadow-sm">
                楽天トラベルでプラン・空室を見る
              </a>
            </div>
          </div>
        </div>

        {/* 宿4 */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-indigo-100 text-indigo-800 text-xs font-bold rounded-md">JR東日本最新ホテル・駅直結スマート</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>{4.27}</span>
                <span className="text-slate-400 text-xs font-normal">（駅直結最新）</span>
              </div>
            </div>
            <h3 className="text-xl font-bold text-slate-900 leading-snug">
              ホテルＢ４Ｔいわき＜ＪＲ東日本ホテルズ＞
            </h3>
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span>いわき</span>
            </div>
            <div className="grid md:grid-cols-2 gap-4 pt-2">
              <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-100">
                <Image src="https://img.travel.rakuten.co.jp/share/HOTEL/184150/184150.jpg" alt="ホテルＢ４Ｔいわき＜ＪＲ東日本ホテルズ＞" fill className="object-cover" unoptimized />
              </div>
              <div className="flex flex-col justify-between space-y-3">
                <p className="text-xs text-slate-600 leading-relaxed">
                  JRいわき駅直結のスマートホテル！Suicaがルームキーになる最新システムを導入し、ピカピカの清潔な客室で快適なステイ体験を3,000円台半ばで提供。
                </p>
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <div className="text-xs text-slate-500">最安参考料金（1名利用時）</div>
                  <div className="text-lg font-black text-rose-600">¥3,600<span className="text-xs font-normal text-slate-500">〜 / 人</span></div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F184150%2F184150.html" target="_blank" rel="noopener noreferrer" className="block w-full py-3 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-bold text-center rounded-xl transition shadow-sm">
                楽天トラベルでプラン・空室を見る
              </a>
            </div>
          </div>
        </div>

        {/* 宿5 */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-purple-100 text-purple-800 text-xs font-bold rounded-md">評価★4.19・大浴場完備ヴィラ</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>{4.19}</span>
                <span className="text-slate-400 text-xs font-normal">（大浴場完備）</span>
              </div>
            </div>
            <h3 className="text-xl font-bold text-slate-900 leading-snug">
              ホテルアーバングレイスヴィラ＜いわき駅前＞
            </h3>
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span>いわき</span>
            </div>
            <div className="grid md:grid-cols-2 gap-4 pt-2">
              <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-100">
                <Image src="https://img.travel.rakuten.co.jp/share/HOTEL/165696/165696.jpg" alt="ホテルアーバングレイスヴィラ＜いわき駅前＞" fill className="object-cover" unoptimized />
              </div>
              <div className="flex flex-col justify-between space-y-3">
                <p className="text-xs text-slate-600 leading-relaxed">
                  いわき駅前徒歩約3分。足を伸ばせる宿泊者専用大浴場とサウナを備え、観光で歩き疲れた体を心地よく温めてリフレッシュできる実力派ホテルです。
                </p>
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <div className="text-xs text-slate-500">最安参考料金（1名利用時）</div>
                  <div className="text-lg font-black text-rose-600">¥3,800<span className="text-xs font-normal text-slate-500">〜 / 人</span></div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F165696%2F165696.html" target="_blank" rel="noopener noreferrer" className="block w-full py-3 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-bold text-center rounded-xl transition shadow-sm">
                楽天トラベルでプラン・空室を見る
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* まとめ */}
      <section className="max-w-4xl mx-auto px-4 mt-12">
        <div className="bg-gradient-to-r from-slate-900 to-cyan-950 text-white rounded-2xl p-6 sm:p-8 space-y-4">
          <h2 className="text-xl font-bold flex items-center gap-2 text-cyan-300">
            <CheckCircle2 className="w-5 h-5" />
            秋のいわき観光を満喫するヒント
          </h2>
          <p className="text-sm text-cyan-100 leading-relaxed">
            スパリゾートハワイアンズのフラガールショーは必見の迫力。世界最大の露天風呂「与市」での温泉浴も秋風が心地よく最高です。夕食はいわき駅周辺の居酒屋で、サクサクふわふわのメヒカリの唐揚げや地酒「いわき郷」をぜひ味わってみてください。
          </p>
          <div className="pt-2">
            <Link href="/#autumn-features" className="inline-flex items-center gap-1.5 text-xs text-cyan-300 hover:text-white transition underline">
              秋の旅行特集一覧へ戻る <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
