import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, Star, MapPin, Tag, CheckCircle2, AlertCircle, Utensils, Mountain, Waves, Sparkles, Train } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '富山：秋の白えび・紅ズワイガニ満喫！富山駅前の格安・高コスパホテル5選',
  description: '秋の富山湾が誇る極上グルメ「富山湾の宝石・白えび」や旬を迎える紅ズワイガニを堪能！北陸新幹線・富山駅周辺で1泊4,000円台〜泊まれる好立地＆格安おすすめホテル厳選5選。',
};

export default function AutumnBudgetToyamaStationHotelsPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 pb-24">
      {/* パンくずリスト */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 py-3 text-xs text-slate-500 flex items-center space-x-2 overflow-x-auto whitespace-nowrap">
          <Link href="/" className="hover:text-teal-600 transition">ホーム</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <Link href="/#autumn-features" className="hover:text-teal-600 transition">秋の特集一覧</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <span className="text-slate-800 font-medium">富山駅前 白えび・紅ズワイガニ 格安宿5選</span>
        </div>
      </div>

      {/* ヒーローセクション */}
      <section className="relative bg-gradient-to-br from-slate-900 via-sky-950 to-blue-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 text-xs font-semibold tracking-wider border border-sky-400/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>富山湾の秋海鮮グルメ＆城下町散策</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight leading-snug">「富山駅前」秋の白えび＆紅ズワイガニを堪能！<br className="hidden sm:inline" />4,000円台〜泊まれる格安・高コスパ宿5選</h1>
          <p className="text-sm md:text-base text-sky-100/90 max-w-2xl mx-auto leading-relaxed">
            秋風が吹き抜ける富山湾は海鮮のベストシーズン。透き通る白えびの刺身や天ぷら、水揚げされたばかりのジューシーな紅ズワイガニ、名物ブラックラーメンまで旨いものが勢揃い。新幹線改札からすぐの好立地に4,000円台〜で泊まり、浮いた予算で贅沢な海鮮三昧を楽しみましょう。
          </p>
        </div>
      </section>

      {/* イントロダクション */}
      <section className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
          <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <Utensils className="w-5 h-5 text-sky-600" />
            新幹線改札から徒歩数分！宿泊費を抑えて富山湾の旬覚を味わい尽くす
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            北陸新幹線が開通しアクセス抜群となった富山駅前は、ビジネス利用だけでなく観光客向けの快適な設備を備えた優良ホテルが密集しています。大浴場完備ホテルや朝食無料サービス付きホテルも多く、1泊4,000円台〜のリーズナブルな価格設定。富山駅高架下の「とやま駅特選館」やすし玉での舌鼓にも絶好の拠点です。
          </p>
        </div>
      </section>

      {/* 観光地ガイド・公式Wikipedia写真＆解説 */}
      <div className="max-w-4xl mx-auto px-4">
        <section className="bg-white rounded-2xl border border-stone-200/90 overflow-hidden shadow-sm mb-10">
          <div className="bg-gradient-to-r from-stone-900 to-stone-800 text-white px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
              <h2 className="text-base md:text-lg font-bold tracking-wide">富山城下町ガイド：富山城（富山城址公園）</h2>
            </div>
            <span className="text-[11px] text-stone-300 bg-white/10 px-2.5 py-0.5 rounded-full border border-white/10">地域名所ガイド</span>
          </div>
          <div className="flex flex-col gap-6 p-6">
            <div className="w-full relative aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden bg-stone-100 border border-stone-200/60 shadow-inner">
              <Image
                src="https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a9/Toyama_Municipal_Folk_Museum_%28mock_keep_tower_of_the_Toyama_Castle%29_20180503.jpg/1280px-Toyama_Municipal_Folk_Museum_%28mock_keep_tower_of_the_Toyama_Castle%29_20180503.jpg"
                alt="富山城（富山城址公園）"
                fill
                className="object-cover hover:scale-105 transition duration-500"
                sizes="(max-width: 768px) 100vw, 400px"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-2 text-right">
                <span className="text-[10px] text-white/90">写真：Wikimedia Commons</span>
              </div>
            </div>
            <div className="w-full space-y-3">
              <h3 className="text-lg md:text-xl font-bold text-stone-900 leading-snug">富山城（浮城・安住城）の歴史と散策ハイライト</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
                富山城（とやまじょう）は、越中国新川郡富山（現在の富山県富山市丸の内）にあった平城。「浮城（うきしろ）」や「安住城」とも称され、続日本100名城の一つに選定されています。秋には公園内の樹木が鮮やかに色づき、水濠に映る天守閣と紅葉のコントラストが美しい市民の憩いの場です。
              </p>
              <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-400">
                <span>出典: フリー百科事典『ウィキペディア（Wikipedia）』</span>
                <span className="text-sky-700 font-semibold">富山駅から市内電車で約7分</span>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* 宿一覧 */}
      <section className="max-w-4xl mx-auto px-4 space-y-8">
        {/* 宿1: コンフォートホテル富山駅前 */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-sky-100 text-sky-800 text-xs font-bold rounded-md">無料朝食ビュッフェ付き・駅徒歩3分</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>4.07</span>
                <span className="text-slate-400 text-xs font-normal">（朝食高評価）</span>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="w-full relative aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden bg-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/54041/54041.jpg"
                  alt="コンフォートホテル富山駅前"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="w-full space-y-3">
                <h3 className="text-xl font-bold text-slate-900 leading-snug">
                  コンフォートホテル富山駅前
                </h3>
                <p className="text-xs text-slate-500 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 shrink-0 text-slate-400" />
                  JR富山駅南口より徒歩3分 / 市内電車停留所至近
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  彩り豊かなスープやスムージー、焼きたてパンが並ぶ無料朝食サービスが旅行者に大好評。ウェルカム珈琲や快眠枕のチョイスピローなど、旅の疲れをほぐすきめ細やかな配慮が魅力です。駅前ロータリーからすぐで白えび亭や地酒居酒屋巡りの足回りも良好。
                </p>
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                  <span className="text-xs font-bold text-slate-700 block mb-1">宿泊プラン目安</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs text-slate-500">1名1泊素泊まり/朝食込</span>
                    <span className="text-2xl font-black text-rose-600">¥4,300</span>
                    <span className="text-xs text-slate-500">〜（税込）</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/g0190dd6.2qbwy9f5.g0190dd6.2qbwzc3e/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F54041%2F54041.html"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3.5 bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-500 hover:to-blue-500 text-white font-bold text-center rounded-xl shadow-md transition transform active:scale-[0.99]"
              >
                楽天トラベルで空室・最安料金を確認する
              </a>
            </div>
          </div>
        </div>

        {/* 宿2: アパホテル〈富山駅前南〉 */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-amber-100 text-amber-800 text-xs font-bold rounded-md">大型液晶TV完備・機能的快眠空間</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>4.03</span>
                <span className="text-slate-400 text-xs font-normal">（高機能設備）</span>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="w-full relative aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden bg-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/111246/111246.jpg"
                  alt="アパホテル〈富山駅前南〉"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="w-full space-y-3">
                <h3 className="text-xl font-bold text-slate-900 leading-snug">
                  アパホテル〈富山駅前南〉
                </h3>
                <p className="text-xs text-slate-500 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 shrink-0 text-slate-400" />
                  JR富山駅南口より徒歩7分 / 市役所・城址公園も徒歩圏内
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  快眠性を追求したオリジナルベッド「Cloud fit」や遮光カーテン、大型液晶テレビを標準装備。富山城址公園方面へのアクセスも良く、秋の城下町散歩と駅前海鮮グルメ探訪の双方に便利なロケーションです。コストを抑えつつ快適に眠りたい旅にぴったり。
                </p>
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                  <span className="text-xs font-bold text-slate-700 block mb-1">宿泊プラン目安</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs text-slate-500">1名1泊素泊まり</span>
                    <span className="text-2xl font-black text-rose-600">¥4,500</span>
                    <span className="text-xs text-slate-500">〜（税込）</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/g0190dd6.2qbwy9f5.g0190dd6.2qbwzc3e/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F111246%2F111246.html"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3.5 bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-500 hover:to-blue-500 text-white font-bold text-center rounded-xl shadow-md transition transform active:scale-[0.99]"
              >
                楽天トラベルで空室・最安料金を確認する
              </a>
            </div>
          </div>
        </div>

        {/* 宿3: 東横ＩＮＮ富山駅新幹線口１ */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-md">新幹線口すぐ・健康無料朝食</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>4.02</span>
                <span className="text-slate-400 text-xs font-normal">（駅チカ安心感）</span>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="w-full relative aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden bg-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/108377/108377.jpg"
                  alt="東横ＩＮＮ富山駅新幹線口１"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="w-full space-y-3">
                <h3 className="text-xl font-bold text-slate-900 leading-snug">
                  東横ＩＮＮ富山駅新幹線口１
                </h3>
                <p className="text-xs text-slate-500 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 shrink-0 text-slate-400" />
                  JR富山駅新幹線改札口より徒歩約2分
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  新幹線を下りて迷わず到着できる圧倒的アクセス性。手作りおにぎりやお惣菜、お味噌汁が付いた無料の朝食バイキングで、朝のエネルギーチャージもばっちり。チェックイン前後の手荷物預かりもスムーズで、身軽に富山湾グルメ巡りを楽しめます。
                </p>
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                  <span className="text-xs font-bold text-slate-700 block mb-1">宿泊プラン目安</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs text-slate-500">1名1泊朝食込</span>
                    <span className="text-2xl font-black text-rose-600">¥4,778</span>
                    <span className="text-xs text-slate-500">〜（税込）</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/g0190dd6.2qbwy9f5.g0190dd6.2qbwzc3e/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F108377%2F108377.html"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3.5 bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-500 hover:to-blue-500 text-white font-bold text-center rounded-xl shadow-md transition transform active:scale-[0.99]"
              >
                楽天トラベルで空室・最安料金を確認する
              </a>
            </div>
          </div>
        </div>

        {/* 宿4: ホテルアルファーワン富山駅前 */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-cyan-100 text-cyan-800 text-xs font-bold rounded-md">富山駅正面・大浴場・サウナ完備</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>3.99</span>
                <span className="text-slate-400 text-xs font-normal">（サウナ付き大浴場）</span>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="w-full relative aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden bg-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/15287/15287.jpg"
                  alt="ホテルアルファーワン富山駅前"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="w-full space-y-3">
                <h3 className="text-xl font-bold text-slate-900 leading-snug">
                  ホテルアルファーワン富山駅前
                </h3>
                <p className="text-xs text-slate-500 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 shrink-0 text-slate-400" />
                  JR富山駅南口より徒歩わずか1分
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  館内には手足を伸ばして温まれる大浴場とサウナを完備。富山駅南口広場の目の前という最高の立地で、夜遅くまで地魚と地酒を味わった後もすぐに部屋に戻れる安心感があります。清潔で機能的な客室設計で一人旅から連泊まで心強い味方です。
                </p>
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                  <span className="text-xs font-bold text-slate-700 block mb-1">宿泊プラン目安</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs text-slate-500">1名1泊素泊まり</span>
                    <span className="text-2xl font-black text-rose-600">¥6,150</span>
                    <span className="text-xs text-slate-500">〜（税込）</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/g0190dd6.2qbwy9f5.g0190dd6.2qbwzc3e/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F15287%2F15287.html"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3.5 bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-500 hover:to-blue-500 text-white font-bold text-center rounded-xl shadow-md transition transform active:scale-[0.99]"
              >
                楽天トラベルで空室・最安料金を確認する
              </a>
            </div>
          </div>
        </div>

        {/* 宿5: ホテルルートイン富山駅前 */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-teal-100 text-teal-800 text-xs font-bold rounded-md">ラジウム人工温泉大浴場・バイキング朝食無料</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>4.04</span>
                <span className="text-slate-400 text-xs font-normal">（大浴場＆朝食）</span>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="w-full relative aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden bg-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/2101/2101.jpg"
                  alt="ホテルルートイン富山駅前"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="w-full space-y-3">
                <h3 className="text-xl font-bold text-slate-900 leading-snug">
                  ホテルルートイン富山駅前
                </h3>
                <p className="text-xs text-slate-500 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 shrink-0 text-slate-400" />
                  JR富山駅南口より徒歩3分
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  旅の夜を心地よく癒やす「ラジウム人工温泉大浴場」を完備。さらに和洋の多彩なメニューが揃う無料バイキング朝食が付いており、コスパの高さは申し分ありません。清潔感あふれる空間と行き届いた接客で、富山観光の拠点として高いリピート率を誇ります。
                </p>
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                  <span className="text-xs font-bold text-slate-700 block mb-1">宿泊プラン目安</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs text-slate-500">1名1泊朝食込・大浴場利用無料</span>
                    <span className="text-2xl font-black text-rose-600">¥6,750</span>
                    <span className="text-xs text-slate-500">〜（税込）</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/g0190dd6.2qbwy9f5.g0190dd6.2qbwzc3e/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F2101%2F2101.html"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3.5 bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-500 hover:to-blue-500 text-white font-bold text-center rounded-xl shadow-md transition transform active:scale-[0.99]"
              >
                楽天トラベルで空室・最安料金を確認する
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* まとめ */}
      <section className="max-w-4xl mx-auto px-4 mt-12">
        <div className="bg-gradient-to-br from-slate-900 to-sky-950 text-white rounded-2xl p-6 sm:p-8 space-y-4">
          <h2 className="text-xl font-bold flex items-center gap-2 text-sky-300">
            <CheckCircle2 className="w-5 h-5" />
            秋の富山旅行を格安に賢く楽しむポイント
          </h2>
          <ul className="space-y-2 text-sm text-sky-100/90 leading-relaxed">
            <li>・富山駅前は新幹線改札から徒歩5分以内に優良格安ホテルが密集しており、移動の負担が最小限。</li>
            <li>・白えびの旬やかき揚げ丼、解禁された紅ズワイガニは富山駅前・とやま方舟やきときと市場で堪能可能。</li>
            <li>・富山城址公園や富山環水公園へも市内電車（路面電車）1本でアクセスでき、秋の紅葉散歩に最適。</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
