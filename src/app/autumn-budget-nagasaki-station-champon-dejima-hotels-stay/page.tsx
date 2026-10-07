import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, Star, MapPin, Tag, CheckCircle2, AlertCircle, Utensils, Mountain, Waves, Sparkles, Train } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '【長崎駅前】秋風の出島散策＆本場長崎ちゃんぽん！2,000円台〜泊まれる格安ホテル5選',
  description: '世界新三大夜景の稲佐山秋夜景と歴史香る出島・グラバー園散策！本場名店で味わう具だくさん長崎ちゃんぽんや皿うどん。長崎駅・路面電車電停近くで1泊2,000円台〜3,000円台から泊まれる格安・高コスパ宿5選。',
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
          <span className="text-slate-800 font-medium">長崎駅前 出島散策・本場ちゃんぽん 格安宿5選</span>
        </div>
      </div>

      {/* ヒーローセクション */}
      <section className="relative bg-gradient-to-br from-teal-950 via-slate-900 to-sky-950 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 text-xs font-semibold tracking-wider border border-teal-400/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>秋風そよぐ出島散策＆名店長崎ちゃんぽん</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight leading-snug">
            【長崎駅前】秋風の出島＆名物ちゃんぽんへ！<br className="hidden sm:inline" />2,000円台〜泊まれる駅近格安・高コスパ宿5選
          </h1>
          <p className="text-sm md:text-base text-teal-100/90 max-w-2xl mx-auto leading-relaxed">
            秋晴れの澄んだ青空に映える国宝・大浦天主堂や出島の和洋折衷な街並み！夜は空気が澄んで一層輝きを増す稲佐山からの1000万ドルの夜景と、本場の老舗で味わう白濁スープの長崎ちゃんぽん・パリパリ皿うどん。西九州新幹線で賑わう長崎駅周辺で、1泊2,000円台〜3,000円台から泊まれる厳選宿をご紹介。
          </p>
        </div>
      </section>

      {/* イントロダクション */}
      <section className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
          <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <Utensils className="w-5 h-5 text-teal-600" />
            駅前徒歩すぐで宿泊代2,000円台〜！浮いた旅費で新地中華街グルメ＆稲佐山ロープウェイへ
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            異国情緒あふれる坂の街・長崎は、路面電車を使えば主要観光地へスムーズにアクセスできる観光都市。駅前エリアには2,000円台〜3,000円台のスタイリッシュなスマートホテルや温泉大浴場付きホテルが揃っています。賢く宿泊費を抑えて、新地中華街での点心食べ歩きや名物トルコライス、長崎カステラのお土産選びを贅沢に楽しみましょう。
          </p>
        </div>
      </section>

      
        {/* 観光地ガイド・公式Wikipedia写真＆解説 */}
        <section className="bg-white rounded-2xl border border-stone-200/90 overflow-hidden shadow-sm mb-10">
          <div className="bg-gradient-to-r from-stone-900 to-stone-800 text-white px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
              <h2 className="text-base md:text-lg font-bold tracking-wide">長崎・異国情緒散策ガイド：和洋折衷の歴史遺産・出島和蘭商館跡</h2>
            </div>
            <span className="text-[11px] text-stone-300 bg-white/10 px-2.5 py-0.5 rounded-full border border-white/10">地域名所ガイド</span>
          </div>
          <div className="grid md:grid-cols-12 gap-6 p-6 items-center">
            <div className="md:col-span-5 relative h-56 md:h-64 rounded-xl overflow-hidden bg-stone-100 border border-stone-200/60 shadow-inner">
              <Image
                src="https://thumb.wikimedia.org/wikipedia/commons/thumb/5/50/Plattegrond_van_Deshima.jpg/1280px-Plattegrond_van_Deshima.jpg"
                alt="和洋折衷の歴史遺産・出島和蘭商館跡"
                fill
                className="object-cover hover:scale-105 transition duration-500"
                sizes="(max-width: 768px) 100vw, 400px"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-2 text-right">
                <span className="text-[10px] text-white/90">写真：Wikimedia Commons</span>
              </div>
            </div>
            <div className="md:col-span-7 space-y-3">
              <h3 className="text-lg md:text-xl font-bold text-stone-900 leading-snug">和洋折衷の歴史遺産・出島和蘭商館跡の歴史と見どころ</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">出島（でじま、英語: Dejima、オランダ語: Deshima）は、1634年江戸幕府が対外政策の一環として長崎に築造した日本初の本格的な人工島、扇型で面積は3,969坪（約1.5ヘクタール）。1636年から1639年までは対ポルトガル貿易、1641年から1859年まではオランダ東インド会社（AVOC、アムステルダムに本部のあるVOC）を通して対オランダ貿易が行われた。  明治以降は長崎港港湾整備に伴う周辺の埋立等により陸続きとなり扇形の面影は失われたが、出島全体は1922年（大正11年）10月12日「出島和蘭商館跡」として国の史跡に指定され、1996年（平成8年）より江戸当時の姿への復元を目指す長崎市が出島復元整備事業計画（後述）を進めている。</p>
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
              <span className="px-2.5 py-1 bg-teal-100 text-teal-800 text-xs font-bold rounded-md">長崎駅徒歩すぐ・新築スマート客室で驚きの2,000円台</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>{4.13}</span>
                <span className="text-slate-400 text-xs font-normal">（レビュー46件）</span>
              </div>
            </div>
            <h3 className="text-xl font-bold text-slate-900 leading-snug">
              グランドベース長崎駅前
            </h3>
            <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs text-slate-500">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                長崎県長崎市西坂町7-1
              </span>
              <span className="flex items-center gap-1">
                <Train className="w-3.5 h-3.5 text-teal-600" />
                長崎（長崎）駅近く
              </span>
            </div>
            <div className="grid md:grid-cols-12 gap-6 items-center pt-2">
              <div className="md:col-span-5 relative h-48 md:h-56 rounded-xl overflow-hidden bg-slate-100 border border-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/178621/178621.jpg"
                  alt="グランドベース長崎駅前"
                  fill
                  className="object-cover hover:scale-105 transition duration-300"
                  sizes="(max-width: 768px) 100vw, 350px"
                />
              </div>
              <div className="md:col-span-7 space-y-3">
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                  JR長崎駅から徒歩数分の抜群の立地に誕生したスマートホテル。最新のスマートロックと清潔感あふれる広々とした客室で、2,000円台とは思えない快適さを提供。グループや一人旅の拠点に最適です。
                </p>
                <div className="pt-2 border-t border-slate-100 flex flex-wrap items-baseline justify-between gap-2">
                  <div>
                    <span className="text-xs text-slate-400 block">最安目安（1名/1室利用時）</span>
                    <span className="text-xl md:text-2xl font-black text-rose-600">¥2,600〜</span>
                    <span className="text-xs text-slate-500 ml-1">（税込）</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F178621%2F178621.html"
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
              <span className="px-2.5 py-1 bg-teal-100 text-teal-800 text-xs font-bold rounded-md">出島すぐ・路面電車電停目の前のアパホテル</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>{4.16}</span>
                <span className="text-slate-400 text-xs font-normal">（レビュー506件）</span>
              </div>
            </div>
            <h3 className="text-xl font-bold text-slate-900 leading-snug">
              アパホテル〈長崎出島〉
            </h3>
            <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs text-slate-500">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                長崎県長崎市樺島町8-17
              </span>
              <span className="flex items-center gap-1">
                <Train className="w-3.5 h-3.5 text-teal-600" />
                長崎（長崎）駅近く
              </span>
            </div>
            <div className="grid md:grid-cols-12 gap-6 items-center pt-2">
              <div className="md:col-span-5 relative h-48 md:h-56 rounded-xl overflow-hidden bg-slate-100 border border-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/184764/184764.jpg"
                  alt="アパホテル〈長崎出島〉"
                  fill
                  className="object-cover hover:scale-105 transition duration-300"
                  sizes="(max-width: 768px) 100vw, 350px"
                />
              </div>
              <div className="md:col-span-7 space-y-3">
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                  国指定史跡「出島」のすぐ目の前に位置し、観光やビジネスに絶好の立地。アパホテルならではの高機能なベッドや大型テレビを完備し、路面電車を利用した市内各所への移動もスムーズそのものです。
                </p>
                <div className="pt-2 border-t border-slate-100 flex flex-wrap items-baseline justify-between gap-2">
                  <div>
                    <span className="text-xs text-slate-400 block">最安目安（1名/1室利用時）</span>
                    <span className="text-xl md:text-2xl font-black text-rose-600">¥3,150〜</span>
                    <span className="text-xs text-slate-500 ml-1">（税込）</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F184764%2F184764.html"
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
              <span className="px-2.5 py-1 bg-teal-100 text-teal-800 text-xs font-bold rounded-md">長崎駅正面徒歩1分！地下鉄連絡通路直結の好アクセス</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>{4.25}</span>
                <span className="text-slate-400 text-xs font-normal">（レビュー4678件）</span>
              </div>
            </div>
            <h3 className="text-xl font-bold text-slate-900 leading-snug">
              ホテル　クオーレ長崎駅前
            </h3>
            <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs text-slate-500">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                長崎県長崎市大黒町7-3
              </span>
              <span className="flex items-center gap-1">
                <Train className="w-3.5 h-3.5 text-teal-600" />
                長崎（長崎）駅近く
              </span>
            </div>
            <div className="grid md:grid-cols-12 gap-6 items-center pt-2">
              <div className="md:col-span-5 relative h-48 md:h-56 rounded-xl overflow-hidden bg-slate-100 border border-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/37511/37511.jpg"
                  alt="ホテル　クオーレ長崎駅前"
                  fill
                  className="object-cover hover:scale-105 transition duration-300"
                  sizes="(max-width: 768px) 100vw, 350px"
                />
              </div>
              <div className="md:col-span-7 space-y-3">
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                  JR長崎駅の目の前にあり、地下通路を通れば雨の日でも傘いらずで到着できる圧倒的利便性。全室加湿空気清浄機完備で清潔感があり、女性一人旅から出張まで幅広い層に厚く支持されています。
                </p>
                <div className="pt-2 border-t border-slate-100 flex flex-wrap items-baseline justify-between gap-2">
                  <div>
                    <span className="text-xs text-slate-400 block">最安目安（1名/1室利用時）</span>
                    <span className="text-xl md:text-2xl font-black text-rose-600">¥3,600〜</span>
                    <span className="text-xs text-slate-500 ml-1">（税込）</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F37511%2F37511.html"
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
              <span className="px-2.5 py-1 bg-teal-100 text-teal-800 text-xs font-bold rounded-md">長崎駅前すぐ・清潔感と親切な接客で高評価の定番宿</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>{4.23}</span>
                <span className="text-slate-400 text-xs font-normal">（レビュー4127件）</span>
              </div>
            </div>
            <h3 className="text-xl font-bold text-slate-900 leading-snug">
              ホテル　ウイング・ポート長崎
            </h3>
            <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs text-slate-500">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                長崎県長崎市大黒町9-2
              </span>
              <span className="flex items-center gap-1">
                <Train className="w-3.5 h-3.5 text-teal-600" />
                長崎（長崎）駅近く
              </span>
            </div>
            <div className="grid md:grid-cols-12 gap-6 items-center pt-2">
              <div className="md:col-span-5 relative h-48 md:h-56 rounded-xl overflow-hidden bg-slate-100 border border-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/28351/28351.jpg"
                  alt="ホテル　ウイング・ポート長崎"
                  fill
                  className="object-cover hover:scale-105 transition duration-300"
                  sizes="(max-width: 768px) 100vw, 350px"
                />
              </div>
              <div className="md:col-span-7 space-y-3">
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                  長崎駅東口から徒歩ですぐの好ロケーション。スタッフの温かいサービスと充実したアメニティが評判で、周辺の飲食店やコンビニも至近。手頃な価格でストレスなく滞在できる王道ビジネスホテルです。
                </p>
                <div className="pt-2 border-t border-slate-100 flex flex-wrap items-baseline justify-between gap-2">
                  <div>
                    <span className="text-xs text-slate-400 block">最安目安（1名/1室利用時）</span>
                    <span className="text-xl md:text-2xl font-black text-rose-600">¥3,600〜</span>
                    <span className="text-xs text-slate-500 ml-1">（税込）</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F28351%2F28351.html"
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
              <span className="px-2.5 py-1 bg-teal-100 text-teal-800 text-xs font-bold rounded-md">長崎駅徒歩5分・最上階天然温泉「鶴港の湯」サウナ完備</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>{4.53}</span>
                <span className="text-slate-400 text-xs font-normal">（レビュー1529件）</span>
              </div>
            </div>
            <h3 className="text-xl font-bold text-slate-900 leading-snug">
              天然温泉　鶴港の湯　ドーミーインＰＲＥＭＩＵＭ長崎駅前（ドーミーイン・御宿野乃　ホテルズグループ）
            </h3>
            <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs text-slate-500">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                長崎県長崎市五島町2-29
              </span>
              <span className="flex items-center gap-1">
                <Train className="w-3.5 h-3.5 text-teal-600" />
                長崎（長崎）駅近く
              </span>
            </div>
            <div className="grid md:grid-cols-12 gap-6 items-center pt-2">
              <div className="md:col-span-5 relative h-48 md:h-56 rounded-xl overflow-hidden bg-slate-100 border border-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/179673/179673.jpg"
                  alt="天然温泉　鶴港の湯　ドーミーインＰＲＥＭＩＵＭ長崎駅前（ドーミーイン・御宿野乃　ホテルズグループ）"
                  fill
                  className="object-cover hover:scale-105 transition duration-300"
                  sizes="(max-width: 768px) 100vw, 350px"
                />
              </div>
              <div className="md:col-span-7 space-y-3">
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                  長崎駅前エリアで屈指の人気を誇るドーミーイン。最上階に備えられた天然温泉大浴場と高温サウナ・水風呂でととのい、名物の夜鳴きそばサービスまで満喫できる極上のリフレッシュステイが叶います。
                </p>
                <div className="pt-2 border-t border-slate-100 flex flex-wrap items-baseline justify-between gap-2">
                  <div>
                    <span className="text-xs text-slate-400 block">最安目安（1名/1室利用時）</span>
                    <span className="text-xl md:text-2xl font-black text-rose-600">¥5,250〜</span>
                    <span className="text-xs text-slate-500 ml-1">（税込）</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F179673%2F179673.html"
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
            <li>秋の行楽・連休シーズンは週末を中心に満室になりやすいため、平日の宿泊や早めの予約がお得です。</li>
            <li>表示価格は各宿の最安プラン目安（税込）です。日程や人数、予約時期によって変動するため最新状況をご確認ください。</li>
            <li>楽天トラベルの毎月「0と5のつく日クーポン」や「宿クーポン」を併用すると、さらに割引が適用される場合があります。</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
