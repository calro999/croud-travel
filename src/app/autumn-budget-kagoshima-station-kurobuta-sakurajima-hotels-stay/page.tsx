import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, Star, MapPin, Tag, CheckCircle2, AlertCircle, Utensils, Mountain, Waves, Sparkles, Train } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '【鹿児島中央駅前】黒豚しゃぶしゃぶ＆桜島絶景庭園！2,000円台〜泊まれる格安ホテル5選',
  description: '甘み豊かな黒豚しゃぶしゃぶや名物白熊、雄大な桜島を借景にする仙巌園を満喫！九州新幹線・鹿児島中央駅周辺で1泊2,000円台〜泊まれる超高コスパ格安宿厳選5選。',
};

export default function AutumnBudgetKagoshimaStationHotelsPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 pb-24">
      {/* パンくずリスト */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 py-3 text-xs text-slate-500 flex items-center space-x-2 overflow-x-auto whitespace-nowrap">
          <Link href="/" className="hover:text-red-600 transition">ホーム</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <Link href="/#autumn-features" className="hover:text-red-600 transition">秋の特集一覧</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <span className="text-slate-800 font-medium">鹿児島中央駅前 黒豚・仙巌園 格安宿5選</span>
        </div>
      </div>

      {/* ヒーローセクション */}
      <section className="relative bg-gradient-to-br from-red-950 via-stone-950 to-slate-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-500/20 text-red-300 text-xs font-semibold tracking-wider border border-red-400/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>極上黒豚グルメ＆桜島を望む名勝大名庭園</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight leading-snug">
            【鹿児島中央駅前】旨味凝縮の黒豚料理＆仙巌園紅葉！<br className="hidden sm:inline" />2,000円台〜泊まれる格安・高コスパ宿5選
          </h1>
          <p className="text-sm md:text-base text-red-100/90 max-w-2xl mx-auto leading-relaxed">
            脂の甘みとキレが際立つ本場の鹿児島黒豚しゃぶしゃぶや黒豚とんかつ、名物芋焼酎に舌鼓。錦江湾と桜島を借景にする世界遺産の島津家別邸「仙巌園」の秋景色を堪能し、九州新幹線の発着する鹿児島中央駅から徒歩圏に2,000円台〜泊まれる最強コスパ宿を厳選。
          </p>
        </div>
      </section>

      {/* イントロダクション */}
      <section className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
          <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <Utensils className="w-5 h-5 text-red-600" />
            新幹線ターミナル駅で1泊2,000円台〜！浮いた予算で黒豚しゃぶしゃぶコースを堪能
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            鹿児島中央駅周辺は、駅前再開発が進みながらも格安で泊まれるデザイナーズホテルや天然温泉付きホテルが揃う優良エリア。駅構内「みやげ横丁」「ぐるめ横丁」や屋台村「かごっまふるさと屋台村」にも近く、安く泊まって贅沢に鹿児島グルメを食べ尽くす旅に最適です。
          </p>
        </div>
      </section>

      {/* 観光地ガイド・公式Wikipedia写真＆解説 */}
      <div className="max-w-4xl mx-auto px-4">
        <section className="bg-white rounded-2xl border border-stone-200/90 overflow-hidden shadow-sm mb-10">
          <div className="bg-gradient-to-r from-stone-900 to-stone-800 text-white px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
              <h2 className="text-base md:text-lg font-bold tracking-wide">薩摩大名庭園ガイド：仙巌園（磯庭園・桜島借景の名勝）</h2>
            </div>
            <span className="text-[11px] text-stone-300 bg-white/10 px-2.5 py-0.5 rounded-full border border-white/10">地域名所ガイド</span>
          </div>
          <div className="grid md:grid-cols-12 gap-6 p-6 items-center">
            <div className="md:col-span-5 relative h-56 md:h-64 rounded-xl overflow-hidden bg-stone-100 border border-stone-200/60 shadow-inner">
              <Image
                src="https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a4/Isoteien-sakurajima2.jpg/1280px-Isoteien-sakurajima2.jpg"
                alt="仙巌園から望む雄大な桜島"
                fill
                className="object-cover hover:scale-105 transition duration-500"
                sizes="(max-width: 768px) 100vw, 400px"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-2 text-right">
                <span className="text-[10px] text-white/90">写真：Wikimedia Commons</span>
              </div>
            </div>
            <div className="md:col-span-7 space-y-3">
              <h3 className="text-lg md:text-xl font-bold text-stone-900 leading-snug">錦江湾を池に、桜島を築山に見立てた壮大な借景庭園</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
                仙巌園（せんがんえん）は、薩摩藩主・島津氏の別邸として万治年間に築かれた大名庭園（国の名勝）。錦江湾を池に見立て、対岸にそびえる雄大な桜島を築山として借景にしたダイナミックな景観は圧巻。世界文化遺産「明治日本の産業革命遺産」の構成資産でもあり、秋には菊花展や紅葉の彩りが楽しめます。
              </p>
              <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-400">
                <span>出典: フリー百科事典『ウィキペディア（Wikipedia）』</span>
                <span className="text-red-700 font-semibold">鹿児島中央駅よりカゴシマシティビューバスで約30分</span>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* 宿一覧 */}
      <section className="max-w-4xl mx-auto px-4 space-y-8">
        {/* 宿1: HOTEL NOIR 鹿児島中央駅 */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-red-100 text-red-800 text-xs font-bold rounded-md">驚愕の2,500円〜・★4.17・デザイナーズ無人ホテル</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>4.17</span>
                <span className="text-slate-400 text-xs font-normal">（超格安＆高評価）</span>
              </div>
            </div>
            <div className="grid md:grid-cols-12 gap-6">
              <div className="md:col-span-5 relative h-52 md:h-auto rounded-xl overflow-hidden bg-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/189101/189101.jpg"
                  alt="HOTEL NOIR 鹿児島中央駅"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="md:col-span-7 space-y-3">
                <h3 className="text-xl font-bold text-slate-900 leading-snug">
                  ＨＯＴＥＬ　ＮＯＩＲ（ホテルノイル）鹿児島中央駅
                </h3>
                <p className="text-xs text-slate-500 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 shrink-0 text-slate-400" />
                  JR鹿児島中央駅西口より徒歩5分
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  黒を基調とした洗練されたデザイナーズ空間でありながら、1泊2,500円〜という破格の宿泊料金を実現。スマートチェックインで誰にも会わずにスムーズに入室でき、高速Wi-Fiや清潔な水回りを完備。宿泊費を抑えてご当地グルメを贅沢に楽しみたい方に最適です。
                </p>
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                  <span className="text-xs font-bold text-slate-700 block mb-1">宿泊プラン目安</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs text-slate-500">1名1泊素泊まり</span>
                    <span className="text-2xl font-black text-rose-600">¥2,500</span>
                    <span className="text-xs text-slate-500">〜（税込）</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/g0190dd6.2qbwy9f5.g0190dd6.2qbwzc3e/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F189101%2F189101.html"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3.5 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-bold text-center rounded-xl shadow-md transition transform active:scale-[0.99]"
              >
                楽天トラベルで空室・最安料金を確認する
              </a>
            </div>
          </div>
        </div>

        {/* 宿2: ネム〜ル 鹿児島中央駅 */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-amber-100 text-amber-800 text-xs font-bold rounded-md">★4.41・2,900円〜・広々アパートメント</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>4.41</span>
                <span className="text-slate-400 text-xs font-normal">（クチコミ高評価）</span>
              </div>
            </div>
            <div className="grid md:grid-cols-12 gap-6">
              <div className="md:col-span-5 relative h-52 md:h-auto rounded-xl overflow-hidden bg-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/172024/172024.jpg"
                  alt="ネム〜ル 鹿児島中央駅"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="md:col-span-7 space-y-3">
                <h3 className="text-xl font-bold text-slate-900 leading-snug">
                  ネム～ル　鹿児島中央駅
                </h3>
                <p className="text-xs text-slate-500 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 shrink-0 text-slate-400" />
                  JR鹿児島中央駅東口より徒歩5分
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  楽天トラベルクチコミ★4.41を誇る人気宿泊施設。キッチンや洗濯機、大型冷蔵庫を備えたコンドミニアムスタイルで、2,000円台とは思えない広さと居心地の良さを提供。テイクアウトした黒豚料理やさつま揚げで部屋飲みを満喫できます。
                </p>
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                  <span className="text-xs font-bold text-slate-700 block mb-1">宿泊プラン目安</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs text-slate-500">1名1泊素泊まり</span>
                    <span className="text-2xl font-black text-rose-600">¥2,900</span>
                    <span className="text-xs text-slate-500">〜（税込）</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/g0190dd6.2qbwy9f5.g0190dd6.2qbwzc3e/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F172024%2F172024.html"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3.5 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-bold text-center rounded-xl shadow-md transition transform active:scale-[0.99]"
              >
                楽天トラベルで空室・最安料金を確認する
              </a>
            </div>
          </div>
        </div>

        {/* 宿3: ホテル ガストフ */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-md">★4.15・英国アンティーク家具・駅東口徒歩4分</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>4.15</span>
                <span className="text-slate-400 text-xs font-normal">（アンティーク調空間）</span>
              </div>
            </div>
            <div className="grid md:grid-cols-12 gap-6">
              <div className="md:col-span-5 relative h-52 md:h-auto rounded-xl overflow-hidden bg-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/44873/44873.jpg"
                  alt="ホテル ガストフ"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="md:col-span-7 space-y-3">
                <h3 className="text-xl font-bold text-slate-900 leading-snug">
                  ホテル　ガストフ
                </h3>
                <p className="text-xs text-slate-500 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 shrink-0 text-slate-400" />
                  JR鹿児島中央駅東口より徒歩4分
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  本物の英国アンティーク家具や重厚なインテリアに囲まれた個性的なブティックホテル。3,000円台前半の手頃な価格ながら、映画のワンシーンのような落ち着いた雰囲気が漂います。屋台村や駅前グルメ街もすぐ近くで観光の拠点に最適です。
                </p>
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                  <span className="text-xs font-bold text-slate-700 block mb-1">宿泊プラン目安</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs text-slate-500">1名1泊素泊まり</span>
                    <span className="text-2xl font-black text-rose-600">¥3,100</span>
                    <span className="text-xs text-slate-500">〜（税込）</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/g0190dd6.2qbwy9f5.g0190dd6.2qbwzc3e/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F44873%2F44873.html"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3.5 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-bold text-center rounded-xl shadow-md transition transform active:scale-[0.99]"
              >
                楽天トラベルで空室・最安料金を確認する
              </a>
            </div>
          </div>
        </div>

        {/* 宿4: 東横ＩＮＮ鹿児島中央駅西口 */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-blue-100 text-blue-800 text-xs font-bold rounded-md">西口すぐ・無料健康朝食バイキング付き</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>4.07</span>
                <span className="text-slate-400 text-xs font-normal">（駅近＆朝食無料）</span>
              </div>
            </div>
            <div className="grid md:grid-cols-12 gap-6">
              <div className="md:col-span-5 relative h-52 md:h-auto rounded-xl overflow-hidden bg-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/108387/108387.jpg"
                  alt="東横ＩＮＮ鹿児島中央駅西口"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="md:col-span-7 space-y-3">
                <h3 className="text-xl font-bold text-slate-900 leading-snug">
                  東横ＩＮＮ鹿児島中央駅西口
                </h3>
                <p className="text-xs text-slate-500 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 shrink-0 text-slate-400" />
                  JR鹿児島中央駅西口より徒歩2分
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  新幹線西口から徒歩2分という抜群のアクセス。毎朝手作りのおにぎりや郷土のおかずが並ぶ無料朝食バイキングが付いて、3,000円台の手頃な価格設定。明るく清潔な客室で、新幹線利用の旅を快適にサポートします。
                </p>
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                  <span className="text-xs font-bold text-slate-700 block mb-1">宿泊プラン目安</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs text-slate-500">1名1泊朝食込</span>
                    <span className="text-2xl font-black text-rose-600">¥3,938</span>
                    <span className="text-xs text-slate-500">〜（税込）</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/g0190dd6.2qbwy9f5.g0190dd6.2qbwzc3e/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F108387%2F108387.html"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3.5 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-bold text-center rounded-xl shadow-md transition transform active:scale-[0.99]"
              >
                楽天トラベルで空室・最安料金を確認する
              </a>
            </div>
          </div>
        </div>

        {/* 宿5: 天然温泉かけ流し 絹肌の湯 シルクイン鹿児島 */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-purple-100 text-purple-800 text-xs font-bold rounded-md">★4.35・源泉かけ流し天然温泉＆露天風呂完備</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>4.35</span>
                <span className="text-slate-400 text-xs font-normal">（源泉かけ流し温泉）</span>
              </div>
            </div>
            <div className="grid md:grid-cols-12 gap-6">
              <div className="md:col-span-5 relative h-52 md:h-auto rounded-xl overflow-hidden bg-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/8940/8940.jpg"
                  alt="天然温泉かけ流し 絹肌の湯 シルクイン鹿児島"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="md:col-span-7 space-y-3">
                <h3 className="text-xl font-bold text-slate-900 leading-snug">
                  天然温泉かけ流し　絹肌の湯　シルクイン鹿児島
                </h3>
                <p className="text-xs text-slate-500 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 shrink-0 text-slate-400" />
                  JR鹿児島中央駅東口より徒歩5分
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  地下約700mから湧き出るトロトロの自家源泉をかけ流しで楽しめる極上の温泉ホテル。美肌の湯として名高い大浴場や露天風呂、女性専用サウナを完備。駅チカで本物の温泉情緒を味わいながら、5,000円台〜で泊まれる満足度抜群のホテルです。
                </p>
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                  <span className="text-xs font-bold text-slate-700 block mb-1">宿泊プラン目安</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs text-slate-500">1名1泊素泊まり・源泉かけ流し温泉付</span>
                    <span className="text-2xl font-black text-rose-600">¥5,250</span>
                    <span className="text-xs text-slate-500">〜（税込）</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/g0190dd6.2qbwy9f5.g0190dd6.2qbwzc3e/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F8940%2F8940.html"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3.5 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-bold text-center rounded-xl shadow-md transition transform active:scale-[0.99]"
              >
                楽天トラベルで空室・最安料金を確認する
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* まとめ */}
      <section className="max-w-4xl mx-auto px-4 mt-12">
        <div className="bg-gradient-to-br from-slate-900 to-red-950 text-white rounded-2xl p-6 sm:p-8 space-y-4">
          <h2 className="text-xl font-bold flex items-center gap-2 text-red-300">
            <CheckCircle2 className="w-5 h-5" />
            秋の鹿児島黒豚＆桜島旅を格安に遊び尽くすポイント
          </h2>
          <ul className="space-y-2 text-sm text-red-100/90 leading-relaxed">
            <li>・駅前「あじもり」や「黒豚料理 寿庵」で味わう極上黒豚しゃぶしゃぶは、予約必須の鹿児島屈指の味覚。</li>
            <li>・仙巌園名物の「両棒餅（ぢゃんぼもち）」を食べながら、錦江湾越しに見る迫力の桜島パノラマは秋の絶景。</li>
            <li>・路面電車を使えば繁華街・天文館へも数分で移動でき、名物白熊アイスやかごっま屋台村巡りもスムーズです。</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
