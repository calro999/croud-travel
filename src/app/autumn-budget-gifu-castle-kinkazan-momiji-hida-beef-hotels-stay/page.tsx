import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, Star, MapPin, Tag, CheckCircle2, AlertCircle, Utensils, Mountain, Waves, Sparkles, Train } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '【岐阜】金華山・岐阜城のパノラマ紅葉と飛騨牛グルメ！2,000円台〜格安ホテル5選',
  description: '黄金色に染まる金華山と難攻不落の岐阜城天守閣からの絶景！名物飛騨牛や落ち鮎を堪能する秋旅。岐阜駅周辺で1泊2,000円台〜5,000円台で泊まれる格安・高評価ホテル厳選5選。',
};

export default function AutumnBudgetGifuHotelsPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 pb-24">
      {/* パンくずリスト */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 py-3 text-xs text-slate-500 flex items-center space-x-2 overflow-x-auto whitespace-nowrap">
          <Link href="/" className="hover:text-amber-600 transition">ホーム</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <Link href="/#autumn-features" className="hover:text-amber-600 transition">秋の特集一覧</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <span className="text-slate-800 font-medium">岐阜城金華山紅葉・飛騨牛 格安宿5選</span>
        </div>
      </div>

      {/* ヒーローセクション */}
      <section className="relative bg-gradient-to-br from-amber-950 via-stone-900 to-slate-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold tracking-wider border border-amber-400/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>金華山ロープウェー紅葉＆極上飛騨牛</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight leading-snug">
            【岐阜】金華山のパノラマ紅葉＆飛騨牛グルメ！<br className="hidden sm:inline" />2,000円台〜泊まれる格安・高コスパ宿5選
          </h1>
          <p className="text-sm md:text-base text-amber-100/90 max-w-2xl mx-auto leading-relaxed">
            ロープウェーで登る金華山山頂の岐阜城から見下ろす長良川と紅葉のパノラマ絶景！夕暮れのライトアップや夜景も息を呑む美しさです。夜はとろける舌触りの飛騨牛ステーキや秋の味覚に舌鼓。岐阜駅前で2,000円台から泊まれる厳選宿をご案内します。
          </p>
        </div>
      </section>

      {/* イントロダクション */}
      <section className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
          <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <Utensils className="w-5 h-5 text-amber-600" />
            宿泊代2,000円台！浮かせた予算で特選飛騨牛＆長良川の落ち鮎を堪能
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            名古屋から快速で約20分と好アクセスの岐阜駅。名古屋市内よりも宿泊相場が大幅にリーズナブルで、2,000円台〜3,000円台で大浴場付きや朝食付きの良質ホテルが利用できます。賢く浮かせた旅費で、老舗精肉店の飛騨牛すき焼きや贅沢ディナーを心ゆくまで楽しみましょう。
          </p>
        </div>
      </section>

      
        {/* 観光地ガイド・公式Wikipedia写真＆解説 */}
        <section className="bg-white rounded-2xl border border-stone-200/90 overflow-hidden shadow-sm mb-10">
          <div className="bg-gradient-to-r from-stone-900 to-stone-800 text-white px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
              <h2 className="text-base md:text-lg font-bold tracking-wide">美濃・信長ゆかりの名城ガイド：金華山山頂にそびえる天下の要害・岐阜城</h2>
            </div>
            <span className="text-[11px] text-stone-300 bg-white/10 px-2.5 py-0.5 rounded-full border border-white/10">地域名所ガイド</span>
          </div>
          <div className="grid md:grid-cols-12 gap-6 p-6 items-center">
            <div className="md:col-span-5 relative h-56 md:h-64 rounded-xl overflow-hidden bg-stone-100 border border-stone-200/60 shadow-inner">
              <Image
                src="https://thumb.wikimedia.org/wikipedia/commons/thumb/6/69/%E5%B2%90%E9%98%9C%E5%9F%8E_%E5%A4%A9%E5%AE%88%E9%96%A3.jpg/1280px-%E5%B2%90%E9%98%9C%E5%9F%8E_%E5%A4%A9%E5%AE%88%E9%96%A3.jpg"
                alt="金華山山頂にそびえる天下の要害・岐阜城"
                fill
                className="object-cover hover:scale-105 transition duration-500"
                sizes="(max-width: 768px) 100vw, 400px"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-2 text-right">
                <span className="text-[10px] text-white/90">写真：Wikimedia Commons</span>
              </div>
            </div>
            <div className="md:col-span-7 space-y-3">
              <h3 className="text-lg md:text-xl font-bold text-stone-900 leading-snug">金華山山頂にそびえる天下の要害・岐阜城の歴史と見どころ</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">岐阜城（ぎふじょう）は、美濃国井之口の稲葉山（岐阜県岐阜市の金華山）にあった日本の城（山城）。もとは稲葉山城といい、鎌倉時代以来の歴史があるが、本格的に整備されたのは戦国時代の斎藤道三の時期だと考えられている。織田信長が1567年の稲葉山城の戦いにより斎藤龍興から奪取し、本拠地を当城へと移し、その縄張りを破却して新たに造営したものが岐阜城である。『信長公記』に「尾張国小真木山より濃州稲葉山へ御越しなり。井口と申すを今度改めて、岐阜と名付けさせられ」と記載されており、ここから天下布武、天下統一をおこなうという意味をこめて、信長が山頂にある城や麓にある町などを「井口」から「岐阜」へと改名したことにより「岐阜城」と呼ばれることになった。    山上の城郭部分と山麓の居館部分を中心としつつも、それらの間を結ぶ登城路、さらに山中の要所に配された砦もあり、なにより山そのものが天然の要害として機能していた。麓に置かれた城主の館は、山の西麓にある槻谷（けやきだに）にあり、地形は斎藤氏 三代の頃に造られ、信長が大規模に改修し、大きな池の南北に建物が2つあり大きな庭園があったことが発掘調査で分かっている。ルイス・フロイスが訪れた記録もあり、関ヶ原の合戦の前哨戦のころまで使われていたという。 当城の城主は、信長の後は、織田信忠、（信長亡き後に）織田信孝、池田元助、池田輝政、豊臣秀勝、織田秀信らであるが、秀信は石田三成の挙兵に呼応し西軍につき、関ヶ原の戦いの前哨戦の岐阜城の戦い（1600年）で東軍側の池田輝政や福島正則らに攻められ落城、翌1601年（慶長6年）徳川家康によってに当城は廃城とされた。 近年の調査によりこの城の価値が見直されるようになり、2011年（平成23年）に岐阜城跡（ぎふじょうあと）つまり山頂の城の城跡および山麓の織田信長公居館跡を含めた金華山一帯の約209ヘクタール（2,091,602.74平方メートル）が国の史跡に指定された。その範囲は、現在の国有林の範囲に符合する。 現在山頂にある建造物は、1956年（昭和31年）に鉄筋コンクリートで建てた模擬天守である。山麓付近では1984年ころから発掘調査が行われるようになり、現在も発掘が進行中である。山麓の岐阜公園内にある信長公居館跡は、槻谷を流れる谷川の両側に段々地形が造られ、建物や庭園を配したものとなっている。また、岐阜市によれば山麓にあった庭園を復元する計画がある。</p>
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
              <span className="px-2.5 py-1 bg-amber-100 text-amber-800 text-xs font-bold rounded-md">男女別大浴場・無料健康朝食</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>{4.15}</span>
                <span className="text-slate-400 text-xs font-normal">（大浴場無料◎）</span>
              </div>
            </div>
            <h3 className="text-xl font-bold text-slate-900 leading-snug">
              ＡＢホテル岐阜
            </h3>
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span>岐阜</span>
            </div>
            <div className="grid md:grid-cols-2 gap-4 pt-2">
              <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-100">
                <Image src="https://img.travel.rakuten.co.jp/share/HOTEL/161010/161010.jpg" alt="ＡＢホテル岐阜" fill className="object-cover" unoptimized />
              </div>
              <div className="flex flex-col justify-between space-y-3">
                <p className="text-xs text-slate-600 leading-relaxed">
                  JR岐阜駅南口から徒歩3分。足を伸ばせる男女別大浴場を完備し、さらに健康朝食バイキングが無料で付いて1泊2,800円〜という圧巻のコストパフォーマンスを誇ります。
                </p>
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <div className="text-xs text-slate-500">最安参考料金（1名利用時）</div>
                  <div className="text-lg font-black text-rose-600">¥2,800<span className="text-xs font-normal text-slate-500">〜 / 人</span></div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F161010%2F161010.html" target="_blank" rel="noopener noreferrer" className="block w-full py-3 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-bold text-center rounded-xl transition shadow-sm">
                楽天トラベルでプラン・空室を見る
              </a>
            </div>
          </div>
        </div>

        {/* 宿2 */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-blue-100 text-blue-800 text-xs font-bold rounded-md">名鉄駅すぐ・コスパ抜群</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>{4.09}</span>
                <span className="text-slate-400 text-xs font-normal">（格安駅近）</span>
              </div>
            </div>
            <h3 className="text-xl font-bold text-slate-900 leading-snug">
              ホテルエンディア岐阜
            </h3>
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span>新岐阜</span>
            </div>
            <div className="grid md:grid-cols-2 gap-4 pt-2">
              <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-100">
                <Image src="https://img.travel.rakuten.co.jp/share/HOTEL/187987/187987.jpg" alt="ホテルエンディア岐阜" fill className="object-cover" unoptimized />
              </div>
              <div className="flex flex-col justify-between space-y-3">
                <p className="text-xs text-slate-600 leading-relaxed">
                  名鉄岐阜駅から徒歩圏内。機能的で清潔な客室とアットホームなおもてなしでリピーター多数。繁華街の玉宮町にも近く、夜の飛騨牛居酒屋巡りに抜群のロケーションです。
                </p>
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <div className="text-xs text-slate-500">最安参考料金（1名利用時）</div>
                  <div className="text-lg font-black text-rose-600">¥2,850<span className="text-xs font-normal text-slate-500">〜 / 人</span></div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F187987%2F187987.html" target="_blank" rel="noopener noreferrer" className="block w-full py-3 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-bold text-center rounded-xl transition shadow-sm">
                楽天トラベルでプラン・空室を見る
              </a>
            </div>
          </div>
        </div>

        {/* 宿3 */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-md">プレミアムスパ・モダン客室</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>{4.26}</span>
                <span className="text-slate-400 text-xs font-normal">（スタイリッシュ）</span>
              </div>
            </div>
            <h3 className="text-xl font-bold text-slate-900 leading-snug">
              ホテルリソル岐阜
            </h3>
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span>岐阜</span>
            </div>
            <div className="grid md:grid-cols-2 gap-4 pt-2">
              <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-100">
                <Image src="https://img.travel.rakuten.co.jp/share/HOTEL/885/885.jpg" alt="ホテルリソル岐阜" fill className="object-cover" unoptimized />
              </div>
              <div className="flex flex-col justify-between space-y-3">
                <p className="text-xs text-slate-600 leading-relaxed">
                  スタイリッシュな和モダン空間と快適な寝具で人気のリソルブランド。最上階には展望大浴場を備え、3,000円台前半とは思えない上質なリラクゼーション体験を提供します。
                </p>
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <div className="text-xs text-slate-500">最安参考料金（1名利用時）</div>
                  <div className="text-lg font-black text-rose-600">¥3,300<span className="text-xs font-normal text-slate-500">〜 / 人</span></div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F885%2F885.html" target="_blank" rel="noopener noreferrer" className="block w-full py-3 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-bold text-center rounded-xl transition shadow-sm">
                楽天トラベルでプラン・空室を見る
              </a>
            </div>
          </div>
        </div>

        {/* 宿4 */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-teal-100 text-teal-800 text-xs font-bold rounded-md">長良川清流ビュー・上質リゾート</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>{4.32}</span>
                <span className="text-slate-400 text-xs font-normal">（清流リゾート）</span>
              </div>
            </div>
            <h3 className="text-xl font-bold text-slate-900 leading-snug">
              長良川清流ホテル
            </h3>
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span>岐阜</span>
            </div>
            <div className="grid md:grid-cols-2 gap-4 pt-2">
              <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-100">
                <Image src="https://img.travel.rakuten.co.jp/share/HOTEL/52637/52637.jpg" alt="長良川清流ホテル" fill className="object-cover" unoptimized />
              </div>
              <div className="flex flex-col justify-between space-y-3">
                <p className="text-xs text-slate-600 leading-relaxed">
                  長良川の河畔に佇む洗練されたリバーサイドホテル。美しい川の流れと金華山を望みながら、静寂と贅沢な空間で非日常の秋旅をゆったりと過ごせます。
                </p>
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <div className="text-xs text-slate-500">最安参考料金（1名利用時）</div>
                  <div className="text-lg font-black text-rose-600">¥4,200<span className="text-xs font-normal text-slate-500">〜 / 人</span></div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F52637%2F52637.html" target="_blank" rel="noopener noreferrer" className="block w-full py-3 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-bold text-center rounded-xl transition shadow-sm">
                楽天トラベルでプラン・空室を見る
              </a>
            </div>
          </div>
        </div>

        {/* 宿5 */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-stone-100 text-stone-800 text-xs font-bold rounded-md">駅前至便・クチコミ★4.43</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>{4.43}</span>
                <span className="text-slate-400 text-xs font-normal">（最高評価ステイ）</span>
              </div>
            </div>
            <h3 className="text-xl font-bold text-slate-900 leading-snug">
              ダイワロイネットホテル岐阜
            </h3>
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span>岐阜</span>
            </div>
            <div className="grid md:grid-cols-2 gap-4 pt-2">
              <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-100">
                <Image src="https://img.travel.rakuten.co.jp/share/HOTEL/52250/52250.jpg" alt="ダイワロイネットホテル岐阜" fill className="object-cover" unoptimized />
              </div>
              <div className="flex flex-col justify-between space-y-3">
                <p className="text-xs text-slate-600 leading-relaxed">
                  JR岐阜駅・名鉄岐阜駅の双方から徒歩すぐ。広々としたデスクと充実の客室設備、安定の接客クオリティでクチコミ★4.43の高評価を獲得している駅前フラッグシップホテルです。
                </p>
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <div className="text-xs text-slate-500">最安参考料金（1名利用時）</div>
                  <div className="text-lg font-black text-rose-600">¥5,220<span className="text-xs font-normal text-slate-500">〜 / 人</span></div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F52250%2F52250.html" target="_blank" rel="noopener noreferrer" className="block w-full py-3 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-bold text-center rounded-xl transition shadow-sm">
                楽天トラベルでプラン・空室を見る
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* まとめ */}
      <section className="max-w-4xl mx-auto px-4 mt-12">
        <div className="bg-gradient-to-r from-stone-900 to-amber-950 text-white rounded-2xl p-6 sm:p-8 space-y-4">
          <h2 className="text-xl font-bold flex items-center gap-2 text-amber-300">
            <CheckCircle2 className="w-5 h-5" />
            秋の岐阜・金華山観光の満喫ポイント
          </h2>
          <p className="text-sm text-amber-100 leading-relaxed">
            金華山山頂の岐阜城パノラマ夜景は東海屈指の美しさ。ロープウェーの秋季夜間特別運行日を事前に確認して訪れるのがおすすめです。夜は岐阜駅北側の「玉宮町」で飛騨牛にぎりや地酒三千盛の飲み比べを楽しんでください。
          </p>
          <div className="pt-2">
            <Link href="/#autumn-features" className="inline-flex items-center gap-1.5 text-xs text-amber-300 hover:text-white transition underline">
              秋の旅行特集一覧へ戻る <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
