import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, Star, MapPin, Tag, CheckCircle2, AlertCircle, Utensils, Mountain, Waves, Sparkles, Train } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: {
    canonical: "https://croud-travel.pages.dev/autumn-budget-hyogo-himeji-castle-kokoen-momiji-hotels-stay/",
  },

  title: '姫路：世界遺産姫路城・好古園の紅葉会と姫路おでん！3,000円台〜格安ホテル5選',
  description: '白鷺城の白壁と鮮やかな紅葉の対比、日本庭園「好古園」の紅葉会ライトアップ！生姜醤油で味わう名物姫路おでんと播磨灘の焼き穴子。姫路駅前で1泊3,000円台〜4,000円台の高評価宿5選。',
  openGraph: {
    title: "姫路：世界遺産姫路城・好古園の紅葉会と姫路おでん！3,000円台〜格安ホテル5選",
    description: "白鷺城の白壁と鮮やかな紅葉の対比、日本庭園「好古園」の紅葉会ライトアップ！生姜醤油で味わう名物姫路おでんと播磨灘の焼き穴子。姫路駅前で1泊3,000円台〜4,000円台の高評価宿5選。",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "姫路：世界遺産姫路城・好古園の紅葉会と姫路おでん！3,000円台〜格安ホテル5選",
    description: "白鷺城の白壁と鮮やかな紅葉の対比、日本庭園「好古園」の紅葉会ライトアップ！生姜醤油で味わう名物姫路おでんと播磨灘の焼き穴子。姫路駅前で1泊3,000円台〜4,000円台の高評価宿5選。",
  }
};

export default function AutumnBudgetHimejiHotelsPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 pb-24">
      {/* パンくずリスト */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 py-3 text-xs text-slate-500 flex items-center space-x-2 overflow-x-auto whitespace-nowrap">
          <Link href="/" className="hover:text-blue-600 transition">ホーム</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <Link href="/#autumn-features" className="hover:text-blue-600 transition">秋の特集一覧</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <span className="text-slate-800 font-medium">姫路城好古園紅葉・姫路おでん 格安宿5選</span>
        </div>
      </div>

      {/* ヒーローセクション */}
      <section className="relative bg-gradient-to-br from-blue-950 via-slate-900 to-stone-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-semibold tracking-wider border border-blue-400/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>世界遺産姫路城＆好古園紅葉会ライトアップ</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight leading-snug">「姫路」姫路城・好古園の紅葉＆姫路おでん！<br className="hidden sm:inline" />3,000円台〜泊まれる格安・高コスパ宿5選</h1>
          <p className="text-sm md:text-base text-blue-100/90 max-w-2xl mx-auto leading-relaxed">
            青空に白く輝く国宝姫路城と、約1万坪の日本庭園「好古園」の池を彩る紅葉ライトアップ「紅葉会」。夜はピリッと生姜醤油をかけていただく名物「姫路おでん」や、香ばしく焼き上げた播磨灘の穴子重に舌鼓！山陽新幹線・JR姫路駅前で3,000円台〜4,000円台の優良宿を厳選。
          </p>
        </div>
      </section>

      {/* イントロダクション */}
      <section className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
          <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <Utensils className="w-5 h-5 text-blue-600" />
            宿泊代3,000円台！浮いた予算で特選播州地酒＆極上穴子づくし会席へ
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            新快速で神戸や大阪から直通できる好アクセスの姫路。駅前には大手チェーンや温泉大浴場付きのシティホテルが充実し、3,000円台〜4,000円台で快適な滞在が可能。浮いた予算を、姫路駅前おみぞ筋や魚町での姫路おでんハシゴ酒や、日本酒発祥の地とされる播州の銘酒「龍力」「奥播磨」の飲み比べに充てましょう。
          </p>
        </div>
      </section>

      
        {/* 観光地ガイド・公式Wikipedia写真＆解説 */}
        <section className="bg-white rounded-2xl border border-stone-200/90 overflow-hidden shadow-sm mb-10">
          <div className="bg-gradient-to-r from-stone-900 to-stone-800 text-white px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
              <h2 className="text-base md:text-lg font-bold tracking-wide">播磨・世界遺産名城ガイド：世界遺産・白鷺城こと姫路城と好古園紅葉</h2>
            </div>
            <span className="text-[11px] text-stone-300 bg-white/10 px-2.5 py-0.5 rounded-full border border-white/10">地域名所ガイド</span>
          </div>
          <div className="flex flex-col gap-6 p-6">
            <div className="w-full relative aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden bg-stone-100 border border-stone-200/60 shadow-inner">
              <Image
                src="https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c1/Himeji_castle_in_may_2015.jpg/1280px-Himeji_castle_in_may_2015.jpg"
                alt="世界遺産・白鷺城こと姫路城と好古園紅葉"
                fill
                className="object-cover hover:scale-105 transition duration-500"
                sizes="(max-width: 768px) 100vw, 400px"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-2 text-right">
                <span className="text-[10px] text-white/90">写真：Wikimedia Commons</span>
              </div>
            </div>
            <div className="w-full space-y-3">
              <h3 className="text-lg md:text-xl font-bold text-stone-900 leading-snug">世界遺産・白鷺城こと姫路城と好古園紅葉の歴史と見どころ</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">姫路城（ひめじじょう）は、兵庫県姫路市にある日本の城。江戸時代初期に建てられた天守や櫓等の主要建築物が現存し、国宝や重要文化財に指定されている。また、主郭部を含む中堀の内側は「姫路城跡」として国の特別史跡に指定されている。また、ユネスコの世界遺産（文化遺産）リストにも登録され、日本100名城などに選定されている。別名は白鷺城（はくろじょう・しらさぎじょう。詳細は名称の由来と別名を参照）。</p>
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
              <span className="px-2.5 py-1 bg-blue-100 text-blue-800 text-xs font-bold rounded-md">姫路駅北口すぐ・清潔快適空間</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>{4.08}</span>
                <span className="text-slate-400 text-xs font-normal">（駅前安心）</span>
              </div>
            </div>
            <h3 className="text-xl font-bold text-slate-900 leading-snug">
              アパホテル〈姫路駅北〉
            </h3>
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span>姫路</span>
            </div>
            <div className="grid md:grid-cols-2 gap-4 pt-2">
              <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-100">
                <Image src="https://img.travel.rakuten.co.jp/share/HOTEL/108889/108889.jpg" alt="アパホテル〈姫路駅北〉" fill className="object-cover" unoptimized />
              </div>
              <div className="flex flex-col justify-between space-y-3">
                <p className="text-xs text-slate-600 leading-relaxed">
                  JR姫路駅北口より徒歩圏内。姫路城へと延びる大手前通りに近く、観光にも食事にも絶好の立地。清潔感あふれる客室と機能的な設備で3,300円〜の優れたコスパを誇ります。
                </p>
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <div className="text-xs text-slate-500">最安参考料金（1名利用時）</div>
                  <div className="text-lg font-black text-rose-600">¥3,300<span className="text-xs font-normal text-slate-500">〜 / 人</span></div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F108889%2F108889.html" target="_blank" rel="noopener noreferrer" className="block w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-center rounded-xl transition shadow-sm">
                楽天トラベルでプラン・空室を見る
              </a>
            </div>
          </div>
        </div>

        {/* 宿2 */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-teal-100 text-teal-800 text-xs font-bold rounded-md">天然温泉華楽の湯・大浴場スパ</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>{4.19}</span>
                <span className="text-slate-400 text-xs font-normal">（天然温泉スパ）</span>
              </div>
            </div>
            <h3 className="text-xl font-bold text-slate-900 leading-snug">
              姫路キヤッスルグランヴィリオホテル　－ルートインホテルズ－
            </h3>
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span>姫路</span>
            </div>
            <div className="grid md:grid-cols-2 gap-4 pt-2">
              <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-100">
                <Image src="https://img.travel.rakuten.co.jp/share/HOTEL/714/714.jpg" alt="姫路キヤッスルグランヴィリオホテル　－ルートインホテルズ－" fill className="object-cover" unoptimized />
              </div>
              <div className="flex flex-col justify-between space-y-3">
                <p className="text-xs text-slate-600 leading-relaxed">
                  市街地にありながら広大な天然温泉スパ施設「華楽の湯」を完備。サウナや壺風呂、炭酸泉など多彩な湯船で、姫路城散策後の体を極上にほぐせます。
                </p>
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <div className="text-xs text-slate-500">最安参考料金（1名利用時）</div>
                  <div className="text-lg font-black text-rose-600">¥4,370<span className="text-xs font-normal text-slate-500">〜 / 人</span></div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F714%2F714.html" target="_blank" rel="noopener noreferrer" className="block w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-center rounded-xl transition shadow-sm">
                楽天トラベルでプラン・空室を見る
              </a>
            </div>
          </div>
        </div>

        {/* 宿3 */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-purple-100 text-purple-800 text-xs font-bold rounded-md">JR姫路駅直結・上質シティホテル</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>{4.31}</span>
                <span className="text-slate-400 text-xs font-normal">（駅直結ハイクラス）</span>
              </div>
            </div>
            <h3 className="text-xl font-bold text-slate-900 leading-snug">
              ホテル日航姫路
            </h3>
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span>姫路</span>
            </div>
            <div className="grid md:grid-cols-2 gap-4 pt-2">
              <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-100">
                <Image src="https://img.travel.rakuten.co.jp/share/HOTEL/39176/39176.jpg" alt="ホテル日航姫路" fill className="object-cover" unoptimized />
              </div>
              <div className="flex flex-col justify-between space-y-3">
                <p className="text-xs text-slate-600 leading-relaxed">
                  JR姫路駅南口直結の抜群のアクセス。雨や肌寒い日でも外に出ずにチェックイン可能。洗練されたインテリアと行き届いたサービスで4,000円台前半の上質ステイを提供。
                </p>
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <div className="text-xs text-slate-500">最安参考料金（1名利用時）</div>
                  <div className="text-lg font-black text-rose-600">¥4,400<span className="text-xs font-normal text-slate-500">〜 / 人</span></div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F39176%2F39176.html" target="_blank" rel="noopener noreferrer" className="block w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-center rounded-xl transition shadow-sm">
                楽天トラベルでプラン・空室を見る
              </a>
            </div>
          </div>
        </div>

        {/* 宿4 */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-md">評価★4.42・姫路城徒歩圏プレミアム</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>{4.42}</span>
                <span className="text-slate-400 text-xs font-normal">（市内最高峰★4.42）</span>
              </div>
            </div>
            <h3 className="text-xl font-bold text-slate-900 leading-snug">
              ダイワロイネットホテル姫路
            </h3>
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span>姫路</span>
            </div>
            <div className="grid md:grid-cols-2 gap-4 pt-2">
              <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-100">
                <Image src="https://img.travel.rakuten.co.jp/share/HOTEL/167604/167604.jpg" alt="ダイワロイネットホテル姫路" fill className="object-cover" unoptimized />
              </div>
              <div className="flex flex-col justify-between space-y-3">
                <p className="text-xs text-slate-600 leading-relaxed">
                  姫路城へ徒歩圏内。クチコミ★4.42を誇る大人気ホテル。広々とした客室と充実のバスルーム、シモンズ製ベッドでワンランク上の快適性を約束します。
                </p>
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <div className="text-xs text-slate-500">最安参考料金（1名利用時）</div>
                  <div className="text-lg font-black text-rose-600">¥4,860<span className="text-xs font-normal text-slate-500">〜 / 人</span></div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F167604%2F167604.html" target="_blank" rel="noopener noreferrer" className="block w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-center rounded-xl transition shadow-sm">
                楽天トラベルでプラン・空室を見る
              </a>
            </div>
          </div>
        </div>

        {/* 宿5 */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-amber-100 text-amber-800 text-xs font-bold rounded-md">城下町老舗宿・貸切風呂＆地元愛</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>{4.08}</span>
                <span className="text-slate-400 text-xs font-normal">（城下町情緒）</span>
              </div>
            </div>
            <h3 className="text-xl font-bold text-slate-900 leading-snug">
              姫路城下町　ホテルクレール日笠
            </h3>
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span>姫路</span>
            </div>
            <div className="grid md:grid-cols-2 gap-4 pt-2">
              <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-100">
                <Image src="https://img.travel.rakuten.co.jp/share/HOTEL/812/812.jpg" alt="姫路城下町　ホテルクレール日笠" fill className="object-cover" unoptimized />
              </div>
              <div className="flex flex-col justify-between space-y-3">
                <p className="text-xs text-slate-600 leading-relaxed">
                  姫路城のお膝元に位置する温かなおもてなしの宿。無料の貸切風呂や地元食材を使った料理が好評で、城下町の風情をゆったり味わいたい方に選ばれています。
                </p>
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <div className="text-xs text-slate-500">最安参考料金（1名利用時）</div>
                  <div className="text-lg font-black text-rose-600">¥4,935<span className="text-xs font-normal text-slate-500">〜 / 人</span></div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F812%2F812.html" target="_blank" rel="noopener noreferrer" className="block w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-center rounded-xl transition shadow-sm">
                楽天トラベルでプラン・空室を見る
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* まとめ */}
      <section className="max-w-4xl mx-auto px-4 mt-12">
        <div className="bg-gradient-to-r from-slate-900 to-blue-950 text-white rounded-2xl p-6 sm:p-8 space-y-4">
          <h2 className="text-xl font-bold flex items-center gap-2 text-blue-300">
            <CheckCircle2 className="w-5 h-5" />
            秋の姫路城・好古園観光を満喫するヒント
          </h2>
          <p className="text-sm text-blue-100 leading-relaxed">
            好古園の「紅葉会」は11月中旬〜下旬の金・土・日・祝日に開催。池の水面に鏡のように映り込む紅葉ライトアップは息を呑む絶景です。夕食は生姜醤油で食べる姫路おでんと名物のひねぽん（親鳥のポン酢和え）を地酒とともに味わうのが定番スタイルです。
          </p>
          <div className="pt-2">
            <Link href="/#autumn-features" className="inline-flex items-center gap-1.5 text-xs text-blue-300 hover:text-white transition underline">
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
              📊 姫路：世界遺産姫路城・好古園の紅葉会と姫路おでん！3,000円台〜格安ホテル5選：掲載宿スペック一覧比較表＆宿泊者クチコミ・アクセス詳細分析
            </h2>
            <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
              楽天トラベル公式APIより取得した「姫路：世界遺産姫路城・好古園の紅葉会と姫路おでん！3,000円台〜格安ホテル5選」掲載宿の所在地・最寄り駅・駐車場条件・クチコミ評価・参考最安料金を一覧で比較できます。公共交通機関（新幹線・在来線・送迎バス）利用の方もマイカー・レンタカー利用の方も、旅のスタイルに合った一軒をお選びください。
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
                <td className="p-3 font-bold text-stone-900">1. ホテル日航姫路</td>
                <td className="p-3 text-stone-600">兵庫県姫路市南駅前町100</td>
                <td className="p-3 text-stone-600">姫路駅周辺</td>
                <td className="p-3 text-stone-600">2,000円/泊（高さ2.1m）※先着順、予約不可</td>
                <td className="p-3 font-bold text-amber-600">★4.33（5353件）</td>
                <td className="p-3 font-bold text-rose-600">¥4,400〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F39176%2F39176.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">2. 姫路城下町　ホテルクレール日笠</td>
                <td className="p-3 text-stone-600">兵庫県姫路市十二所前町22番地</td>
                <td className="p-3 text-stone-600">姫路駅周辺</td>
                <td className="p-3 text-stone-600">有20台　１泊 普通車880円税込、（要予約・ご予約順）　※大型車駐車可、問合せ下さい。</td>
                <td className="p-3 font-bold text-amber-600">★4.04（1156件）</td>
                <td className="p-3 font-bold text-rose-600">¥4,599〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F812%2F812.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">3. ＡＮＡクラウンプラザホテル神戸　ｂｙ　ＩＨＧ</td>
                <td className="p-3 text-stone-600">兵庫県神戸市中央区北野町1</td>
                <td className="p-3 text-stone-600">新神戸駅周辺</td>
                <td className="p-3 text-stone-600">650台(1台1,500円/泊)　※クラブフロア宿泊者は1室1台無料</td>
                <td className="p-3 font-bold text-amber-600">★4.14（6588件）</td>
                <td className="p-3 font-bold text-rose-600">¥7,288〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F164%2F164.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">4. 料亭旅館　ほてるＩＳＡＧＯ神戸</td>
                <td className="p-3 text-stone-600">兵庫県神戸市中央区熊内町4-3-7</td>
                <td className="p-3 text-stone-600">新神戸駅周辺</td>
                <td className="p-3 text-stone-600">無し</td>
                <td className="p-3 font-bold text-amber-600">★4.21（850件）</td>
                <td className="p-3 font-bold text-rose-600">¥7,920〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F1203%2F1203.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">5. 神戸牛と有馬温泉　天然金泉・銀泉の宿　有馬御苑</td>
                <td className="p-3 text-stone-600">兵庫県神戸市北区有馬町1296</td>
                <td className="p-3 text-stone-600">有馬温泉駅周辺</td>
                <td className="p-3 text-stone-600">有（50台）ご宿泊者様は利用室数分まで無料　※場所が分かりづらいため当館HPアクセスページ参照下さい</td>
                <td className="p-3 font-bold text-amber-600">★4.39（2779件）</td>
                <td className="p-3 font-bold text-rose-600">¥9,900〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F1206%2F1206.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
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
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">ホテル日航姫路</h3>
                  <span className="text-xs text-stone-400 ml-2">（にっこう　ひめじ）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥4,400〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/39176/39176_da.jpg" alt="ホテル日航姫路 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>＜ＪＲ姫路駅正面＞ホテル日航姫路こだわりの朝食ビュッフェと日航ならではの特別なご滞在</p>
                  <p><strong>【所在地・アクセス】</strong>〒 兵庫県姫路市南駅前町100 ／ 最寄り駅：姫路 ／ 交通案内：ＪＲ姫路駅より徒歩１分(ＪＲ姫路駅中央口より南へ）／　姫路バイパス南ＩＣ下車約3分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>2,000円/泊（高さ2.1m）※先着順、予約不可</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「駅近で便利だが設備にやや難あり部屋はリニューアルされていましたが、少々狭い感じがします。また、トイレの便座が少しズレていました。ウォシュレット機能は大丈夫でしたが。朝食は品数が多く、まあまあでした…　2026-08-28 09:26:10投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #2</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">姫路城下町　ホテルクレール日笠</h3>
                  <span className="text-xs text-stone-400 ml-2">（くれーる　ひがさ）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥4,599〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/812/812_si.jpg" alt="姫路城下町　ホテルクレール日笠 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>2022年★改装客室OPEN★駅チカ×江戸風湯屋有り</p>
                  <p><strong>【所在地・アクセス】</strong>〒 兵庫県姫路市十二所前町22番地 ／ 最寄り駅：姫路 ／ 交通案内：姫路駅より徒歩約５分、駅と姫路城の中間に位置し、姫路城へも徒歩圏内。山陽姫路東IC又は山陽姫路西ICより車にて約２０分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有20台　１泊 普通車880円税込、（要予約・ご予約順）　※大型車駐車可、問合せ下さい。</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「朝食が最高一番印象的なのが朝食でした。2泊で利用しましたが両日とも素敵な朝ごはんでとても幸せな朝でした。和室のコンパクトの部屋を利用しましたが広さ的には1人だと十分。少し部屋は古いので…　2026-08-29 08:42:07投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #3</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">ＡＮＡクラウンプラザホテル神戸　ｂｙ　ＩＨＧ</h3>
                  <span className="text-xs text-stone-400 ml-2">（えーえぬえーくらうんぷらざこうべ）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥7,288〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/164/164_ky.jpg" alt="ＡＮＡクラウンプラザホテル神戸　ｂｙ　ＩＨＧ 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>神戸の陸の玄関口、新神戸駅直結の37階高層ホテル。アクセス抜群！大阪まで約25分。全室Wi-fi無料</p>
                  <p><strong>【所在地・アクセス】</strong>〒 兵庫県神戸市中央区北野町1 ／ 最寄り駅：新神戸 ／ 交通案内：新幹線・地下鉄「新神戸駅」直結 。三宮まで１駅2分。大阪まで約25分。</p>
                  <p><strong>【駐車場・マイカー利用】</strong>650台(1台1,500円/泊)　※クラブフロア宿泊者は1室1台無料</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「お盆休みに宿泊しました。夕食のマグロの解体も息子が大変喜んでくれました。夜景も綺麗でホテル近くから行ける布引ハーブ園からの眺めも最高でした。来年も機会が有れば宿泊しようと思います。従業…　2026-08-21 21:48:34投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #4</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">料亭旅館　ほてるＩＳＡＧＯ神戸</h3>
                  <span className="text-xs text-stone-400 ml-2">（りょうていりょかん　ほてるいさご　こうべ）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥7,920〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/1203/1203_syo.jpg" alt="料亭旅館　ほてるＩＳＡＧＯ神戸 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>料理口コミ高評価！証明書付き神戸牛会席は絶品♪新神戸駅徒歩5分、貸切天然温泉が人気の和モダン旅館</p>
                  <p><strong>【所在地・アクセス】</strong>〒 兵庫県神戸市中央区熊内町4-3-7 ／ 最寄り駅：新神戸 ／ 交通案内：ＪＲ新幹線・新神戸駅から徒歩5分。北野異人館・ハーバーランド至近。有馬温泉まで車で30分。USJまで約40分。</p>
                  <p><strong>【駐車場・マイカー利用】</strong>無し</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「清潔感ある和室と可愛い朝食、貸切温泉に満足清潔感のある和室のお部屋で、コンパクトにまとまっています。全身鏡があると支度がしやすくてよかったかも。朝食は少量ずつの小皿がたくさんで、大変かわいい見…　2026-08-23 18:08:00投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #5</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">神戸牛と有馬温泉　天然金泉・銀泉の宿　有馬御苑</h3>
                  <span className="text-xs text-stone-400 ml-2">（こうべぎゅうとありまおんせん　きんせんぎんせんのやど　ありまぎょえん）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥9,900〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/1206/1206_heya.jpg" alt="神戸牛と有馬温泉　天然金泉・銀泉の宿　有馬御苑 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>【楽天ゴールド＆日本の宿アワード受賞】部屋食プラン多数★温泉街すぐ！金銀２種の温泉と神戸牛が自慢♪</p>
                  <p><strong>【所在地・アクセス】</strong>〒 兵庫県神戸市北区有馬町1296 ／ 最寄り駅：有馬温泉 ／ 交通案内：神戸電鉄線有馬温泉駅から徒歩２分、阪急バス有馬停より徒歩２分、阪神高速有馬口ＩＣより車３分、中国道西宮北ＩＣより車１０分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有（50台）ご宿泊者様は利用室数分まで無料　※場所が分かりづらいため当館HPアクセスページ参照下さい</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「結婚40周年の記念に金泉と銀泉を堪能結婚40周年の記念に夫婦で利用させていただきました。金泉、銀泉を堪能出来、駐車場の利用も親切にナビして頂けたのと、別館の喫茶店オーロラでいただいたチャーシュー麺…　2026-08-21 23:04:54投稿」
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-6 border-t border-stone-200">
            <h3 className="text-lg font-bold text-stone-900 border-l-4 border-teal-600 pl-3">
              🗺️ あわせて巡りたい！兵庫県の代表的な観光名所・歴史自然ガイド（Wikipedia公認画像・解説）
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              宿泊前後の1泊2日・2泊3日モデルコースに組み込みたい、兵庫県を代表する名所・絶景スポットの解説です。チェックイン前後の荷物預かりや駅周辺のレンタカー・周遊バスを活用すると効率よく巡ることができます。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #1</span>
                <h3 className="text-base font-bold text-stone-900">国宝 姫路城（白鷺城）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">鮮やかな白漆喰の城壁が羽ばたく白鷺のように美しい日本初のユネスコ世界文化遺産。大天守をはじめ保存状態が完璧な城郭建築の最高峰です。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #2</span>
                <h3 className="text-base font-bold text-stone-900">神戸ポートタワー・ハーバーランド</h3>
                <p className="text-xs text-stone-600 leading-relaxed">神戸港のウォーターフロントエリア。赤いつづみの形をしたポートタワーやメリケンパークの夜景、海辺のショッピングモールがロマンチックです。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              <div className="aspect-video relative overflow-hidden bg-stone-200"><img src="https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8b/161030_Kinosaki-Onsen_Station_Toyooka_Hyogo_pref_Japan01bs3.jpg/1280px-161030_Kinosaki-Onsen_Station_Toyooka_Hyogo_pref_Japan01bs3.jpg?utm_source=ja.wikipedia.org&amp;utm_campaign=api&amp;utm_content=thumbnail" alt="城崎温泉（外湯めぐり）" className="w-full h-full object-cover" loading="lazy" /></div>
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #3</span>
                <h3 className="text-base font-bold text-stone-900">城崎温泉（外湯めぐり）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">大谷川沿いに柳並木と木造旅館が並ぶ、1300年の歴史を持つ名湯。「一の湯」「御所の湯」など7つの個性豊かな外湯を浴衣姿で巡る街歩きが魅力です。 城崎温泉駅（きのさきおんせんえき）は、兵庫県豊岡市城崎町今津字稗田にある、西日本旅客鉄道（JR西日本）山陰本線の駅である。…</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #4</span>
                <h3 className="text-base font-bold text-stone-900">竹田城跡（天空の城）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">標高353mの古城山山頂に築かれた山城遺跡。秋の早朝には雲海に包まれ、まるで空に浮かんでいるかのような幻想的な景色から「天空の城」と呼ばれます。</p>
              </div>
            </div>
            </div>
          </div>

          <div className="bg-amber-50/70 rounded-2xl p-5 md:p-6 border border-amber-200 space-y-3 text-xs text-stone-700 leading-relaxed">
            <h3 className="text-sm md:text-base font-bold text-amber-950">
              💡 兵庫県エリアの宿泊予約・シーズン別ベストタイミングと節約ノウハウ
            </h3>
            <p>
              <strong>1. 早期予約と楽天トラベルクーポンの併用：</strong> 兵庫県の人気温泉宿・リゾートホテルは、週末や連休・紅葉・年末年始の60日〜30日前から一気に予約が埋まります。毎月5と0のつく日やスーパーSALE期間中に配布される宿クーポン・自治体クーポンを併用すると、通常より最大10〜20%お得に予約可能です。
            </p>
            <p>
              <strong>2. 夕食・朝食プランと部屋タイプの選び方：</strong> 地元産の旬魚介やブランド牛会席を味わうなら「夕朝食付きプラン」、周辺の屋台・老舗居酒屋・ご当地グルメを食べ歩くなら「朝食付き」または「素泊まり＋天然温泉大浴場付きホテル」を選ぶと予算と満足度のバランスが最適化されます。
            </p>
          </div>
        </section>

      </main>
  );
}
