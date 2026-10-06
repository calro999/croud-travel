import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, Star, MapPin, Tag, CheckCircle2, AlertCircle, Utensils, Mountain, Waves, Sparkles, Train } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '【別府駅前】湯けむり地獄めぐり＆本場とり天・別府冷麺！2,000円台〜泊まれる格安ホテル5選',
  description: '日本一の湧出量を誇る温泉天国・別府！駅前天然温泉や地獄めぐりの秋景色、名物とり天や別府冷麺。別府駅徒歩1〜3分以内で1泊2,000円台〜3,000円台から泊まれる格安・高コスパホテル5選。',
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
          <span className="text-slate-800 font-medium">別府駅前 温泉地獄めぐり・名物とり天 格安宿5選</span>
        </div>
      </div>

      {/* ヒーローセクション */}
      <section className="relative bg-gradient-to-br from-teal-950 via-slate-900 to-sky-950 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 text-xs font-semibold tracking-wider border border-teal-400/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>別府温泉郷の湯けむり＆本場とり天・別府冷麺</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight leading-snug">
            【別府駅前】湯けむり地獄めぐり＆名物とり天へ！<br className="hidden sm:inline" />2,000円台〜泊まれる駅前格安・高コスパ宿5選
          </h1>
          <p className="text-sm md:text-base text-teal-100/90 max-w-2xl mx-auto leading-relaxed">
            別府の街中から立ち上る湯けむりと、鶴見岳のロープウェイから見渡す山肌の鮮やかな紅葉パノラマ！秋風に吹かれながら巡る海地獄や血の池地獄、そして湯上がりに味わうサクサクの「とり天」やツルツルの「別府冷麺」。別府駅から徒歩すぐの抜群の立地で、1泊2,000円台〜3,000円台から泊まれる厳選宿をご紹介。
          </p>
        </div>
      </section>

      {/* イントロダクション */}
      <section className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
          <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <Utensils className="w-5 h-5 text-teal-600" />
            駅前徒歩すぐで宿泊代2,000円台〜！浮いた旅費で竹瓦温泉ハシゴ湯＆豊後牛・りゅうきゅう三昧へ
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            源泉数・湧出量ともに日本一を誇るおんせん県おおいたの中心地・別府。駅前エリアには100円〜数百円で入れる共同浴場が点在し、駅徒歩数分圏内の高コスパホテルを拠点にすれば手軽に湯めぐり三昧が楽しめます。浮かせた宿泊費で、関アジ・関サバや大分豊後牛、名物とり天などの郷土グルメを贅沢に満喫しましょう。
          </p>
        </div>
      </section>

      {/* 宿一覧 */}
      <section className="max-w-4xl mx-auto px-4 space-y-8">

        {/* 宿1 */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-teal-100 text-teal-800 text-xs font-bold rounded-md">★4.67超高評価！駅徒歩2分の新築デザイナーズ客室</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>{4.67}</span>
                <span className="text-slate-400 text-xs font-normal">（レビュー21件）</span>
              </div>
            </div>
            <h3 className="text-xl font-bold text-slate-900 leading-snug">
              グランドベース別府駅前
            </h3>
            <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs text-slate-500">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                大分県別府市田の湯町8-7-1
              </span>
              <span className="flex items-center gap-1">
                <Train className="w-3.5 h-3.5 text-teal-600" />
                別府（大分）駅近く
              </span>
            </div>
            <div className="grid md:grid-cols-12 gap-6 items-center pt-2">
              <div className="md:col-span-5 relative h-48 md:h-56 rounded-xl overflow-hidden bg-slate-100 border border-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/176593/176593.jpg"
                  alt="グランドベース別府駅前"
                  fill
                  className="object-cover hover:scale-105 transition duration-300"
                  sizes="(max-width: 768px) 100vw, 350px"
                />
              </div>
              <div className="md:col-span-7 space-y-3">
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                  別府駅西口から徒歩約2分の好立地にあるスマートホテル。広々としたモダンな客室には快適な設備が整い、グループやカップルでの滞在に大好評。驚きの低価格と清潔感でクチコミ評価★4.67を獲得。
                </p>
                <div className="pt-2 border-t border-slate-100 flex flex-wrap items-baseline justify-between gap-2">
                  <div>
                    <span className="text-xs text-slate-400 block">最安目安（1名/1室利用時）</span>
                    <span className="text-xl md:text-2xl font-black text-rose-600">¥2,740〜</span>
                    <span className="text-xs text-slate-500 ml-1">（税込）</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F176593%2F176593.html"
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
              <span className="px-2.5 py-1 bg-teal-100 text-teal-800 text-xs font-bold rounded-md">別府駅目の前！天然温泉露天風呂・サウナ完備</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>{4.06}</span>
                <span className="text-slate-400 text-xs font-normal">（レビュー3409件）</span>
              </div>
            </div>
            <h3 className="text-xl font-bold text-slate-900 leading-snug">
              別府駅前　ホテルシーウェーブ別府
            </h3>
            <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs text-slate-500">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                大分県別府市駅前町12-8
              </span>
              <span className="flex items-center gap-1">
                <Train className="w-3.5 h-3.5 text-teal-600" />
                別府（大分）駅近く
              </span>
            </div>
            <div className="grid md:grid-cols-12 gap-6 items-center pt-2">
              <div className="md:col-span-5 relative h-48 md:h-56 rounded-xl overflow-hidden bg-slate-100 border border-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/9401/9401.jpg"
                  alt="別府駅前　ホテルシーウェーブ別府"
                  fill
                  className="object-cover hover:scale-105 transition duration-300"
                  sizes="(max-width: 768px) 100vw, 350px"
                />
              </div>
              <div className="md:col-span-7 space-y-3">
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                  別府駅東口の目の前に位置し、館内に本格的な天然温泉の打たせ湯や露天風呂、サウナを完備。駅近の利便性と温泉情緒を兼ね備え、周辺の居酒屋街や竹瓦温泉へのアクセスも抜群の定番高コスパ宿です。
                </p>
                <div className="pt-2 border-t border-slate-100 flex flex-wrap items-baseline justify-between gap-2">
                  <div>
                    <span className="text-xs text-slate-400 block">最安目安（1名/1室利用時）</span>
                    <span className="text-xl md:text-2xl font-black text-rose-600">¥3,900〜</span>
                    <span className="text-xs text-slate-500 ml-1">（税込）</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F9401%2F9401.html"
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
              <span className="px-2.5 py-1 bg-teal-100 text-teal-800 text-xs font-bold rounded-md">別府駅西口徒歩1分！2021年開業の安心アパ最新設備</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>{4.22}</span>
                <span className="text-slate-400 text-xs font-normal">（レビュー548件）</span>
              </div>
            </div>
            <h3 className="text-xl font-bold text-slate-900 leading-snug">
              アパホテル〈別府駅前〉
            </h3>
            <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs text-slate-500">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                大分県別府市田の湯町10番6号
              </span>
              <span className="flex items-center gap-1">
                <Train className="w-3.5 h-3.5 text-teal-600" />
                別府（大分）駅近く
              </span>
            </div>
            <div className="grid md:grid-cols-12 gap-6 items-center pt-2">
              <div className="md:col-span-5 relative h-48 md:h-56 rounded-xl overflow-hidden bg-slate-100 border border-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/183506/183506.jpg"
                  alt="アパホテル〈別府駅前〉"
                  fill
                  className="object-cover hover:scale-105 transition duration-300"
                  sizes="(max-width: 768px) 100vw, 350px"
                />
              </div>
              <div className="md:col-span-7 space-y-3">
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                  JR別府駅西口を出てすぐの絶好のロケーション。最新のアパデジタル設備や快眠ベッドが導入され、コンパクトながら機能的な滞在が可能。地獄めぐり行きの路線バス乗り場も至近で観光に便利です。
                </p>
                <div className="pt-2 border-t border-slate-100 flex flex-wrap items-baseline justify-between gap-2">
                  <div>
                    <span className="text-xs text-slate-400 block">最安目安（1名/1室利用時）</span>
                    <span className="text-xl md:text-2xl font-black text-rose-600">¥4,500〜</span>
                    <span className="text-xs text-slate-500 ml-1">（税込）</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F183506%2F183506.html"
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
              <span className="px-2.5 py-1 bg-teal-100 text-teal-800 text-xs font-bold rounded-md">源泉100%掛け流し温泉＆サウナ完備・駅徒歩3分</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>{4.31}</span>
                <span className="text-slate-400 text-xs font-normal">（レビュー1763件）</span>
              </div>
            </div>
            <h3 className="text-xl font-bold text-slate-900 leading-snug">
              ホテルアーサー　ＫＩＴＡＨＡＭＡ　ＢＡＳＥ
            </h3>
            <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs text-slate-500">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                大分県別府市北浜1-2-5　　
              </span>
              <span className="flex items-center gap-1">
                <Train className="w-3.5 h-3.5 text-teal-600" />
                別府（大分）駅近く
              </span>
            </div>
            <div className="grid md:grid-cols-12 gap-6 items-center pt-2">
              <div className="md:col-span-5 relative h-48 md:h-56 rounded-xl overflow-hidden bg-slate-100 border border-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/674/674.jpg"
                  alt="ホテルアーサー　ＫＩＴＡＨＡＭＡ　ＢＡＳＥ"
                  fill
                  className="object-cover hover:scale-105 transition duration-300"
                  sizes="(max-width: 768px) 100vw, 350px"
                />
              </div>
              <div className="md:col-span-7 space-y-3">
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                  別府駅北浜エリアに位置し、地下の大浴場では加水加温なしの純度100%源泉掛け流し温泉が満喫できます。本格サウナやスタイリッシュな共用ラウンジも備え、リーズナブルに温泉三昧を味わえます。
                </p>
                <div className="pt-2 border-t border-slate-100 flex flex-wrap items-baseline justify-between gap-2">
                  <div>
                    <span className="text-xs text-slate-400 block">最安目安（1名/1室利用時）</span>
                    <span className="text-xl md:text-2xl font-black text-rose-600">¥3,995〜</span>
                    <span className="text-xs text-slate-500 ml-1">（税込）</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F674%2F674.html"
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
              <span className="px-2.5 py-1 bg-teal-100 text-teal-800 text-xs font-bold rounded-md">別府駅西口すぐ！全室天然温泉付き＆無料駐車場完備</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>{3.9}</span>
                <span className="text-slate-400 text-xs font-normal">（レビュー2294件）</span>
              </div>
            </div>
            <h3 className="text-xl font-bold text-slate-900 leading-snug">
              別府駅西口前　ホテル　フジヨシ
            </h3>
            <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs text-slate-500">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                大分県別府市野口元町1-3
              </span>
              <span className="flex items-center gap-1">
                <Train className="w-3.5 h-3.5 text-teal-600" />
                別府（大分）駅近く
              </span>
            </div>
            <div className="grid md:grid-cols-12 gap-6 items-center pt-2">
              <div className="md:col-span-5 relative h-48 md:h-56 rounded-xl overflow-hidden bg-slate-100 border border-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/778/778.jpg"
                  alt="別府駅西口前　ホテル　フジヨシ"
                  fill
                  className="object-cover hover:scale-105 transition duration-300"
                  sizes="(max-width: 768px) 100vw, 350px"
                />
              </div>
              <div className="md:col-span-7 space-y-3">
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                  別府駅西口正面という圧巻の好立地ながら、客室のお風呂にすべて天然温泉が給湯されている贅沢仕様。さらに敷地内駐車場が無料（先着順）という圧倒的コスパで、ドライブ旅や出張・観光に頼れる一軒です。
                </p>
                <div className="pt-2 border-t border-slate-100 flex flex-wrap items-baseline justify-between gap-2">
                  <div>
                    <span className="text-xs text-slate-400 block">最安目安（1名/1室利用時）</span>
                    <span className="text-xl md:text-2xl font-black text-rose-600">¥2,900〜</span>
                    <span className="text-xs text-slate-500 ml-1">（税込）</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F778%2F778.html"
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
            <li>秋の紅葉・グルメシーズンは週末を中心に満室になりやすいため、平日の宿泊や早めの予約がお得です。</li>
            <li>表示価格は各宿の最安プラン目安（税込）です。日程や人数、予約時期によって変動するため最新状況をご確認ください。</li>
            <li>楽天トラベルの毎月「0と5のつく日クーポン」や「宿クーポン」を併用すると、さらに割引が適用される場合があります。</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
