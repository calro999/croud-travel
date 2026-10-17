import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, Star, MapPin, Tag, CheckCircle2, AlertCircle, Utensils, Mountain, Waves, Sparkles, Train } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: {
    canonical: "https://croud-travel.pages.dev/autumn-budget-gifu-station-castle-hida-beef-hotels-stay/",
  },

  title: '岐阜駅前：岐阜城金華山パノラマ＆名物飛騨牛・鮎料理！2,000円台〜泊まれる格安ホテル5選',
  description: '織田信長公が天下布武を掲げた難攻不落の名城・岐阜城と金華山ロープウェイの秋パノラマ！とろける霜降り飛騨牛すき焼きや長良川の鮎料理。JR東海道本線・岐阜駅周辺で1泊2,000円台〜泊まれる超高コスパ格安ホテル厳選5選。',
  openGraph: {
    title: "岐阜駅前：岐阜城金華山パノラマ＆名物飛騨牛・鮎料理！2,000円台〜泊まれる格安ホテル5選",
    description: "織田信長公が天下布武を掲げた難攻不落の名城・岐阜城と金華山ロープウェイの秋パノラマ！とろける霜降り飛騨牛すき焼きや長良川の鮎料理。JR東海道本線・岐阜駅周辺で1泊2,000円台〜泊まれる超高コスパ格安ホテル厳選5選。",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "岐阜駅前：岐阜城金華山パノラマ＆名物飛騨牛・鮎料理！2,000円台〜泊まれる格安ホテル5選",
    description: "織田信長公が天下布武を掲げた難攻不落の名城・岐阜城と金華山ロープウェイの秋パノラマ！とろける霜降り飛騨牛すき焼きや長良川の鮎料理。JR東海道本線・岐阜駅周辺で1泊2,000円台〜泊まれる超高コスパ格安ホテル厳選5選。",
  }
};

export default function AutumnBudgetHotelsPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 pb-24">
      {/* パンくずリスト */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 py-3 text-xs text-slate-500 flex items-center space-x-2 overflow-x-auto whitespace-nowrap">
          <Link href="/" className="hover:text-amber-600 transition">ホーム</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <Link href="/#autumn-features" className="hover:text-amber-600 transition">秋の特集一覧</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <span className="text-slate-800 font-medium">岐阜駅前 岐阜城・飛騨牛 格安宿5選</span>
        </div>
      </div>

      {/* ヒーローセクション */}
      <section className="relative bg-gradient-to-br from-amber-950 via-stone-950 to-slate-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold tracking-wider border border-amber-400/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>金華山岐阜城の天下布武パノラマ＆極上霜降り飛騨牛・長良川鮎</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight leading-snug">「岐阜駅前」岐阜城金華山秋景＆極上飛騨牛！<br className="hidden sm:inline" />2,000円台〜泊まれる格安・高コスパ宿5選</h1>
          <p className="text-sm md:text-base text-amber-100/90 max-w-2xl mx-auto leading-relaxed">
            金華山山頂にそびえる信長公ゆかりの山城「岐阜城」。天守閣の望楼から見渡す濃尾平野と清流長良川の絶景、山肌を鮮やかに染める秋の紅葉。きめ細やかな霜降りと甘い脂がとろける「飛騨牛」のステーキや朴葉味噌焼き、秋に脂が乗る落ち鮎料理に舌鼓！岐阜駅周辺で2,000円台〜泊まれる優良ホテルを厳選。
          </p>
        </div>
      </section>

      {/* イントロダクション */}
      <section className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
          <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <Utensils className="w-5 h-5 text-amber-600" />
            JR岐阜駅・名鉄岐阜駅前に天然温泉付き＆格安宿が集結！浮いた予算で飛騨牛ディナーを満喫
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            名古屋駅から快速で約20分の岐阜駅周辺は、駅前黄金の信長像が迎える広場から玉宮町の居酒屋街へ続く賑やかなエリア。大浴場付きホテルや最新ビジネスホテルが、秋の平日なら1泊2,000円台〜3,000円台で予約可能。浮いた旅費で飛騨牛炭火焼きや岐阜の銘酒「三諸杉」「百春」を贅沢に楽しめます。
          </p>
        </div>
      </section>

      {/* 観光地ガイド・公式Wikipedia写真＆解説 */}
      <div className="max-w-4xl mx-auto px-4">
        <section className="bg-white rounded-2xl border border-stone-200/90 overflow-hidden shadow-sm mb-10">
          <div className="bg-gradient-to-r from-stone-900 to-stone-800 text-white px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
              <h2 className="text-base md:text-lg font-bold tracking-wide">美濃を制した信長公の天下布武の城：史跡 岐阜城（稲葉山城）</h2>
            </div>
            <span className="text-[11px] text-stone-300 bg-white/10 px-2.5 py-0.5 rounded-full border border-white/10">織田信長公居城・国指定史跡</span>
          </div>
          <div className="flex flex-col gap-6 p-6">
            <div className="w-full relative aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden bg-stone-100 border border-stone-200/60 shadow-inner">
              <Image
                src="https://thumb.wikimedia.org/wikipedia/commons/thumb/6/69/%E5%B2%90%E9%98%9C%E5%9F%8E_%E5%A4%A9%E5%AE%88%E9%96%A3.jpg/1280px-%E5%B2%90%E9%98%9C%E5%9F%8E_%E5%A4%A9%E5%AE%88%E9%96%A3.jpg?utm_source=ja.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
                alt="美濃を制した信長公の天下布武の城：史跡 岐阜城（稲葉山城）"
                fill
                className="object-cover hover:scale-105 transition duration-500"
                sizes="(max-width: 768px) 100vw, 400px"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-2 text-right">
                <span className="text-[10px] text-white/90">写真：Wikimedia Commons</span>
              </div>
            </div>
            <div className="w-full space-y-3">
              <h3 className="text-lg md:text-xl font-bold text-stone-900 leading-snug">標高329m金華山山頂の天守閣・濃尾平野と長良川を見下ろす秋の絶景</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
                岐阜城（ぎふじょう）は、岐阜県岐阜市の金華山（旧称・稲葉山）山頂にある山城。斎藤道三の居城を経て、永禄10年に織田信長が攻略し「井の口」から「岐阜」へと改称、天下布武の拠点としました。山麓の岐阜公園から金華山ロープウェイが運行。秋には山全体が紅葉で彩られ、再建天守の最上階からは眼下に流れる長良川と遠く伊吹山、濃尾平野を一望する絶景が広がります。
              </p>
              <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-400">
                <span>出典: フリー百科事典『ウィキペディア（Wikipedia）』</span>
                <span className="text-amber-700 font-semibold">JR岐阜駅または名鉄岐阜駅より岐阜バス約15分（岐阜公園歴史博物館前下車）</span>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* 宿一覧 */}
      <section className="max-w-4xl mx-auto px-4 space-y-8">
        {/* 宿1: 天然温泉　金華の湯　ドーミーイン岐阜駅前（ドーミーイン・御宿野乃　ホテルズグループ） */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-amber-100 text-amber-800 text-xs font-bold rounded-md">驚きの最安2,800円〜・大浴場完備・無料朝食バイキング</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>4.43</span>
                <span className="text-slate-400 text-xs font-normal">（2458件のクチコミ）</span>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="w-full relative aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden bg-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/139796/139796.jpg"
                  alt="天然温泉　金華の湯　ドーミーイン岐阜駅前（ドーミーイン・御宿野乃　ホテルズグループ）"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="w-full space-y-3">
                <h3 className="text-xl font-bold text-slate-900 leading-snug">
                  天然温泉　金華の湯　ドーミーイン岐阜駅前（ドーミーイン・御宿野乃　ホテルズグループ）
                </h3>
                <p className="text-xs text-slate-500 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 shrink-0 text-slate-400" />
                  岐阜
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  JR岐阜駅から徒歩圏内。1名1泊2,800円〜という破格の料金ながら、館内に大浴場を備え、健康朝食バイキングも無料で付く驚異のコスパを誇ります。旅費を抑えたい一人旅に最適です。
                </p>
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                  <span className="text-xs font-bold text-slate-700 block mb-1">宿泊プラン目安</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs text-slate-500">1名1泊目安</span>
                    <span className="text-2xl font-black text-rose-600">¥7,340</span>
                    <span className="text-xs text-slate-500">〜（税込）</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F139796%2F139796.html"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 text-white font-bold rounded-xl shadow-sm hover:shadow transition"
              >
                <span>楽天トラベルで最安プランをチェック</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* 宿2: ホテルリブマックス岐阜駅前 */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-amber-100 text-amber-800 text-xs font-bold rounded-md">最安3,500円〜・2026年全面リニューアル・無料朝食</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>3.85</span>
                <span className="text-slate-400 text-xs font-normal">（353件のクチコミ）</span>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="w-full relative aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden bg-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/167380/167380.jpg"
                  alt="ホテルリブマックス岐阜駅前"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="w-full space-y-3">
                <h3 className="text-xl font-bold text-slate-900 leading-snug">
                  ホテルリブマックス岐阜駅前
                </h3>
                <p className="text-xs text-slate-500 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 shrink-0 text-slate-400" />
                  岐阜
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  名鉄岐阜駅・JR岐阜駅から徒歩圏内。全面リニューアルされた清潔な客室と、無料のヘルシー朝食や挽きたてコーヒーが楽しめるラウンジが人気。女性の一人旅にもおすすめです。
                </p>
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                  <span className="text-xs font-bold text-slate-700 block mb-1">宿泊プラン目安</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs text-slate-500">1名1泊目安</span>
                    <span className="text-2xl font-black text-rose-600">¥3,553</span>
                    <span className="text-xs text-slate-500">〜（税込）</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F167380%2F167380.html"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 text-white font-bold rounded-xl shadow-sm hover:shadow transition"
              >
                <span>楽天トラベルで最安プランをチェック</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* 宿3: ＡＢホテル岐阜 */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-amber-100 text-amber-800 text-xs font-bold rounded-md">最安3,553円〜・シモンズベッド導入・駅徒歩圏</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>4.15</span>
                <span className="text-slate-400 text-xs font-normal">（2371件のクチコミ）</span>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="w-full relative aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden bg-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/161010/161010.jpg"
                  alt="ＡＢホテル岐阜"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="w-full space-y-3">
                <h3 className="text-xl font-bold text-slate-900 leading-snug">
                  ＡＢホテル岐阜
                </h3>
                <p className="text-xs text-slate-500 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 shrink-0 text-slate-400" />
                  岐阜
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  岐阜駅前から徒歩約5分。全室にシモンズ社製ベッドを配し、快適な睡眠をサポート。手頃な料金で個室を確保し、浮いた予算を玉宮町での飛騨牛グルメに回せます。
                </p>
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                  <span className="text-xs font-bold text-slate-700 block mb-1">宿泊プラン目安</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs text-slate-500">1名1泊目安</span>
                    <span className="text-2xl font-black text-rose-600">¥2,800</span>
                    <span className="text-xs text-slate-500">〜（税込）</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F161010%2F161010.html"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 text-white font-bold rounded-xl shadow-sm hover:shadow transition"
              >
                <span>楽天トラベルで最安プランをチェック</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* 宿4: ダイワロイネットホテル岐阜 */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-amber-100 text-amber-800 text-xs font-bold rounded-md">駅前徒歩3分・★4.43高評価・広々モダン客室</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>4.43</span>
                <span className="text-slate-400 text-xs font-normal">（5136件のクチコミ）</span>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="w-full relative aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden bg-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/52250/52250.jpg"
                  alt="ダイワロイネットホテル岐阜"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="w-full space-y-3">
                <h3 className="text-xl font-bold text-slate-900 leading-snug">
                  ダイワロイネットホテル岐阜
                </h3>
                <p className="text-xs text-slate-500 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 shrink-0 text-slate-400" />
                  岐阜
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  名鉄岐阜駅から徒歩2分、JR岐阜駅から徒歩7分。広々としたデスクとゆとりある客室設計で、レビュー★4.43の高評価を獲得。快適性を重視する旅にぴったりです。
                </p>
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                  <span className="text-xs font-bold text-slate-700 block mb-1">宿泊プラン目安</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs text-slate-500">1名1泊目安</span>
                    <span className="text-2xl font-black text-rose-600">¥5,220</span>
                    <span className="text-xs text-slate-500">〜（税込）</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F52250%2F52250.html"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 text-white font-bold rounded-xl shadow-sm hover:shadow transition"
              >
                <span>楽天トラベルで最安プランをチェック</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* 宿5: コンフォートホテル岐阜（　リニューアル） */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-amber-100 text-amber-800 text-xs font-bold rounded-md">天然温泉「金華の湯」＆サウナ完備・★4.43</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>3.99</span>
                <span className="text-slate-400 text-xs font-normal">（5961件のクチコミ）</span>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="w-full relative aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden bg-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/20562/20562.jpg"
                  alt="コンフォートホテル岐阜（　リニューアル）"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="w-full space-y-3">
                <h3 className="text-xl font-bold text-slate-900 leading-snug">
                  コンフォートホテル岐阜（　リニューアル）
                </h3>
                <p className="text-xs text-slate-500 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 shrink-0 text-slate-400" />
                  岐阜
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  JR岐阜駅前に位置するドーミーイン。館内に自家源泉の天然温泉「金華の湯」と本格サウナを完備し、★4.43の高満足度。無料の夜鳴きそばサービスも好評です。
                </p>
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                  <span className="text-xs font-bold text-slate-700 block mb-1">宿泊プラン目安</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs text-slate-500">1名1泊目安</span>
                    <span className="text-2xl font-black text-rose-600">¥3,500</span>
                    <span className="text-xs text-slate-500">〜（税込）</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F20562%2F20562.html"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 text-white font-bold rounded-xl shadow-sm hover:shadow transition"
              >
                <span>楽天トラベルで最安プランをチェック</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 予約のコツ・アドバイス */}
      <section className="max-w-4xl mx-auto px-4 mt-12">
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200/80 rounded-2xl p-6 md:p-8 space-y-4">
          <h2 className="text-lg font-bold text-amber-950 flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-amber-600" />
            秋の格安旅行をお得に満喫するためのポイント
          </h2>
          <div className="grid md:grid-cols-3 gap-4 pt-2">
            <div className="bg-white/80 rounded-xl p-4 border border-amber-100">
              <h3 className="font-bold text-sm text-slate-900 mb-1">平日泊で更なる割引</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                紅葉シーズンは金曜・土曜の宿泊料金が高騰しがちですが、日〜木曜の平日泊なら最安プランが狙い目。人混みも少なく快適に名所を楽しめます。
              </p>
            </div>
            <div className="bg-white/80 rounded-xl p-4 border border-amber-100">
              <h3 className="font-bold text-sm text-slate-900 mb-1">直前割＆早割を活用</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                14日前〜28日前までの早期予約や、空室が出た直前のタイムセールを狙うことで、通常価格より1,000円〜2,000円以上安く泊まれるチャンスがあります。
              </p>
            </div>
            <div className="bg-white/80 rounded-xl p-4 border border-amber-100">
              <h3 className="font-bold text-sm text-slate-900 mb-1">浮いた予算で旬の味覚</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                宿泊を賢く格安ホテルに抑えることで、浮いた数千円の予算をご当地の豪華な旬の味覚や地酒ディナー、日帰り温泉の入浴料に贅沢に使えます。
              </p>
            </div>
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
              📊 岐阜駅前：岐阜城金華山パノラマ＆名物飛騨牛・鮎料理！2,000円台〜泊まれる格安ホテル5選：掲載宿スペック一覧比較表＆宿泊者クチコミ・アクセス詳細分析
            </h2>
            <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
              楽天トラベル公式APIより取得した「岐阜駅前：岐阜城金華山パノラマ＆名物飛騨牛・鮎料理！2,000円台〜泊まれる格安ホテル5選」掲載宿の所在地・最寄り駅・駐車場条件・クチコミ評価・参考最安料金を一覧で比較できます。公共交通機関（新幹線・在来線・送迎バス）利用の方もマイカー・レンタカー利用の方も、旅のスタイルに合った一軒をお選びください。
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
                <td className="p-3 font-bold text-stone-900">1. 天然温泉　金華の湯　ドーミーイン岐阜駅前（ドーミーイン・御宿野乃　ホテルズグループ）</td>
                <td className="p-3 text-stone-600">岐阜県岐阜市吉野町6-31</td>
                <td className="p-3 text-stone-600">岐阜駅周辺</td>
                <td className="p-3 text-stone-600">なし（普通車のみホテル提携駐車場￥1,000/1泊先着順・入出庫不可）※バス、トラック、バイク不可</td>
                <td className="p-3 font-bold text-amber-600">★4.43（2468件）</td>
                <td className="p-3 font-bold text-rose-600">¥7,340〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F139796%2F139796.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">2. ホテルリブマックス岐阜駅前</td>
                <td className="p-3 text-stone-600">岐阜県岐阜市金町7-11-1</td>
                <td className="p-3 text-stone-600">岐阜駅周辺</td>
                <td className="p-3 text-stone-600">近隣に有料パーキングあり　※提携はしておりません　満車の場合はご容赦下さい。</td>
                <td className="p-3 font-bold text-amber-600">★3.85（354件）</td>
                <td className="p-3 font-bold text-rose-600">¥2,890〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F167380%2F167380.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">3. ＡＢホテル岐阜</td>
                <td className="p-3 text-stone-600">岐阜県岐阜市金町7-12-1</td>
                <td className="p-3 text-stone-600">岐阜駅周辺</td>
                <td className="p-3 text-stone-600">提携駐車場：500円（1泊＝15：00から翌10：00）予約不可・出入別料金・台数制限有</td>
                <td className="p-3 font-bold text-amber-600">★4.16（2383件）</td>
                <td className="p-3 font-bold text-rose-600">¥2,800〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F161010%2F161010.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">4. ダイワロイネットホテル岐阜</td>
                <td className="p-3 text-stone-600">岐阜県岐阜市神田町8-5</td>
                <td className="p-3 text-stone-600">岐阜駅周辺</td>
                <td className="p-3 text-stone-600">提携立体駐車場／44台／一泊（14時〜翌12時）1,200円税込／車高制限有／営業時間外入出庫不可</td>
                <td className="p-3 font-bold text-amber-600">★4.43（5144件）</td>
                <td className="p-3 font-bold text-rose-600">¥5,220〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F52250%2F52250.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">5. コンフォートホテル岐阜（２０２６年３月３１日　リニューアル）</td>
                <td className="p-3 text-stone-600">岐阜県岐阜市吉野町6-6</td>
                <td className="p-3 text-stone-600">岐阜駅周辺</td>
                <td className="p-3 text-stone-600">なし。近隣のコインパーキングにご駐車ください。</td>
                <td className="p-3 font-bold text-amber-600">★3.99（5972件）</td>
                <td className="p-3 font-bold text-rose-600">¥3,700〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F20562%2F20562.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
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
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">天然温泉　金華の湯　ドーミーイン岐阜駅前（ドーミーイン・御宿野乃　ホテルズグループ）</h3>
                  <span className="text-xs text-stone-400 ml-2">（てんねんおんせん　きんかのゆ　どーみーいんぎふえきまえ）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥7,340〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/139796/139796_huro.jpg" alt="天然温泉　金華の湯　ドーミーイン岐阜駅前（ドーミーイン・御宿野乃　ホテルズグループ） 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>JR岐阜駅前で天然温泉大浴場とサウナ完備。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 岐阜県岐阜市吉野町6-31 ／ 最寄り駅：岐阜 ／ 交通案内：ＪＲ　岐阜駅「中央北口」より徒歩約8分／名鉄岐阜駅より徒歩約10分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>なし（普通車のみホテル提携駐車場￥1,000/1泊先着順・入出庫不可）※バス、トラック、バイク不可</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.44 ／ 立地 ★4.35 ／ 部屋 ★4.4 ／ 設備 ★4.4 ／ 風呂 ★4.51 ／ 食事 ★4.48</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「夜泣きそばやアイスなどサービスが充実ビジネスで宿泊しました。他のドーミーインもよく利用させていただきます。夜泣きそば、アイス、マッサージ機とてもありがたいです!クチコミの詳細はこち…　2026-10-02 21:48:58投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #2</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">ホテルリブマックス岐阜駅前</h3>
                  <span className="text-xs text-stone-400 ml-2">（りぶまっくすぎふえきまえ）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥2,890〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/167380/167380.jpg" alt="ホテルリブマックス岐阜駅前 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>ＪＲ岐阜駅から徒歩5分！アクセス抜群のホテルです★全室シモンズベッド完備</p>
                  <p><strong>【所在地・アクセス】</strong>〒 岐阜県岐阜市金町7-11-1 ／ 最寄り駅：岐阜 ／ 交通案内：ＪＲ東海道本線　岐阜駅中央北口/名鉄岐阜駅より徒歩にて約５分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>近隣に有料パーキングあり　※提携はしておりません　満車の場合はご容赦下さい。</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★3.92 ／ 立地 ★3.92 ／ 部屋 ★3.79 ／ 設備 ★3.88 ／ 風呂 ★3.84</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「親切な対応と冷水や洗濯機が助かりましたフロントの方の説明がとても穏やかな口調で親切でした。猛暑日が続いている中、ロビーにある冷水がとても助かりました。洗濯機も利用でき、汗をかいた衣服を洗う…　2026-08-19 10:53:05投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #3</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">ＡＢホテル岐阜</h3>
                  <span className="text-xs text-stone-400 ml-2">（えーびーほてるぎふ）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥2,800〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/161010/161010_kan1.jpg" alt="ＡＢホテル岐阜 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>男女別大浴場完備♪ＪＲ岐阜駅からは徒歩約７分の好立地！　◆Wi-Fi接続無料◆個別空調◆</p>
                  <p><strong>【所在地・アクセス】</strong>〒 岐阜県岐阜市金町7-12-1 ／ 最寄り駅：岐阜 ／ 交通案内：ＪＲ／名鉄　岐阜駅より徒歩にて約5分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>提携駐車場：500円（1泊＝15：00から翌10：00）予約不可・出入別料金・台数制限有</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.15 ／ 立地 ★4.08 ／ 部屋 ★4.14 ／ 設備 ★4.09 ／ 風呂 ★4.1</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「駅近で便利、朝食のサラダもたっぷり満足駅から近くとても便利。朝食は野菜サラダがたっぷりいただけて満足。クチコミの詳細はこちらから　https://review.travel.rakuten.c…　2026-10-07 11:41:29投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #4</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">ダイワロイネットホテル岐阜</h3>
                  <span className="text-xs text-stone-400 ml-2">（だいわろいねっとほてるぎふ）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥5,220〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/52250/52250_ys.jpg" alt="ダイワロイネットホテル岐阜 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>2024年4月リニューアルオープン！1階にコンビニ、周辺には飲食店が多数。観光・ビジネスの拠点に！</p>
                  <p><strong>【所在地・アクセス】</strong>〒 岐阜県岐阜市神田町8-5 ／ 最寄り駅：岐阜 ／ 交通案内：JR「岐阜駅」長良川口より徒歩約7分／「名鉄岐阜駅」より徒歩約2分／名古屋国際空港より特急で「名鉄岐阜駅」へ約60分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>提携立体駐車場／44台／一泊（14時〜翌12時）1,200円税込／車高制限有／営業時間外入出庫不可</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.42 ／ 立地 ★4.38 ／ 部屋 ★4.48 ／ 設備 ★4.42 ／ 風呂 ★4.34 ／ 食事 ★4.21</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「スタッフの丁寧な案内で飛騨牛を堪能駅が近いことで、夜の繁華街が活気に溢れていました。ホテルの人に夕食の美味しい店をお聞きしたところ、大変丁寧にA4サイズのマップを頂き説明してくれました。お…　2026-10-01 09:58:47投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #5</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">コンフォートホテル岐阜（２０２６年３月３１日　リニューアル）</h3>
                  <span className="text-xs text-stone-400 ml-2">（こんふぉーとほてるぎふ２０２６ねん３がつ３１にちりにゅーある）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥3,700〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/20562/20562_sgl.jpg" alt="コンフォートホテル岐阜（２０２６年３月３１日　リニューアル） 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>日替わりスムージーが人気★無料朝食サービスがイチオシのコスパ最強ホテル◆小学6年生まで添い寝無料</p>
                  <p><strong>【所在地・アクセス】</strong>〒 岐阜県岐阜市吉野町6-6 ／ 最寄り駅：岐阜 ／ 交通案内：ＪＲ岐阜駅北口より約３分（駅前立地）◆名鉄岐阜駅より約６分◆東海北陸自動車道「岐阜各務原IC」約３０分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>なし。近隣のコインパーキングにご駐車ください。</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4 ／ 立地 ★4.14 ／ 部屋 ★4.02 ／ 設備 ★3.92 ／ 風呂 ★3.86 ／ 食事 ★3.99</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「駅やコンビニが近く、便利です。朝食付きも有難かった!クチコミの詳細はこちらから　https://review.travel.rakuten.co.jp/hotel/voice/20562?revi…　2026-10-04 17:23:04投稿」
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-6 border-t border-stone-200">
            <h3 className="text-lg font-bold text-stone-900 border-l-4 border-teal-600 pl-3">
              🗺️ あわせて巡りたい！岐阜県の代表的な観光名所・歴史自然ガイド（Wikipedia公認画像・解説）
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              宿泊前後の1泊2日・2泊3日モデルコースに組み込みたい、岐阜県を代表する名所・絶景スポットの解説です。チェックイン前後の荷物預かりや駅周辺のレンタカー・周遊バスを活用すると効率よく巡ることができます。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #1</span>
                <h3 className="text-base font-bold text-stone-900">白川郷 合掌造り集落</h3>
                <p className="text-xs text-stone-600 leading-relaxed">豪雪地帯ならではの急勾配の茅葺き屋根が立ち並ぶ世界文化遺産の村。春の新緑、秋の紅葉、冬の幻想的な雪景色ライトアップと日本の原風景が広がります。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #2</span>
                <h3 className="text-base font-bold text-stone-900">飛騨高山（古い町並み）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">江戸時代の出格子と用水路が流れる景観が保存された「飛騨の小京都」。名物の飛騨牛串焼きや地酒の酒蔵巡り、朝市散策が全国の旅人に大人気です。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #3</span>
                <h3 className="text-base font-bold text-stone-900">岐阜城・長良川鵜飼</h3>
                <p className="text-xs text-stone-600 leading-relaxed">金華山頂に聳え立つ織田信長公ゆかりの岐阜城と、1300年以上の歴史を誇る長良川の伝統鵜飼。篝火の明かりが川面を照らす幽玄の世界は必見です。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              <div className="aspect-video relative overflow-hidden bg-stone-200"><img src="https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1b/260125_Gero_Onsen_Gero_Gifu_pref_Japan01s3.jpg/1280px-260125_Gero_Onsen_Gero_Gifu_pref_Japan01s3.jpg?utm_source=ja.wikipedia.org&amp;utm_campaign=api&amp;utm_content=thumbnail" alt="下呂温泉" className="w-full h-full object-cover" loading="lazy" /></div>
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #4</span>
                <h3 className="text-base font-bold text-stone-900">下呂温泉</h3>
                <p className="text-xs text-stone-600 leading-relaxed">草津・有馬と並ぶ日本三名泉の一つ。滑らかな肌触りの「美人の湯」で知られ、飛騨川のせせらぎを聞きながら足湯巡りや温泉街のグルメを堪能できます。 下呂温泉（げろおんせん）は、岐阜県下呂市（旧飛騨国、岐阜県益田郡下呂町）にある温泉。室町時代には万里集九が有馬温泉や草津温泉とともに「三名泉」とし、江戸時代には林羅山もこれらの三温泉を「天下の三名泉」と記した（日本三名泉）（ただし、当時は下呂ではなく湯島と表記）。…</p>
              </div>
            </div>
            </div>
          </div>

          <div className="bg-amber-50/70 rounded-2xl p-5 md:p-6 border border-amber-200 space-y-3 text-xs text-stone-700 leading-relaxed">
            <h3 className="text-sm md:text-base font-bold text-amber-950">
              💡 岐阜県エリアの宿泊予約・シーズン別ベストタイミングと節約ノウハウ
            </h3>
            <p>
              <strong>1. 早期予約と楽天トラベルクーポンの併用：</strong> 岐阜県の人気温泉宿・リゾートホテルは、週末や連休・紅葉・年末年始の60日〜30日前から一気に予約が埋まります。毎月5と0のつく日やスーパーSALE期間中に配布される宿クーポン・自治体クーポンを併用すると、通常より最大10〜20%お得に予約可能です。
            </p>
            <p>
              <strong>2. 夕食・朝食プランと部屋タイプの選び方：</strong> 地元産の旬魚介やブランド牛会席を味わうなら「夕朝食付きプラン」、周辺の屋台・老舗居酒屋・ご当地グルメを食べ歩くなら「朝食付き」または「素泊まり＋天然温泉大浴場付きホテル」を選ぶと予算と満足度のバランスが最適化されます。
            </p>
          </div>
        </section>

      </main>
  );
}
