import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '秋の琵琶湖：びわ湖バレイの紅葉テラスとおごと温泉！近江牛とレイクビューを満喫するおすすめ名宿5選「2026最新」',
  description: '標高1100mの「びわ湖テラス」から見下ろす紅葉とびわ湖ブルーの大パノラマ！比叡山延暦寺の紅葉巡りにも最適な開湯1200年のおごと温泉。暖灯館きくのや、びわ湖花街道、湯元館など近江牛会席と美肌温泉の極上宿5選を徹底解説！',
  keywords: 'びわ湖バレイ 紅葉, びわ湖テラス 秋, おごと温泉 宿, 比叡山延暦寺 紅葉, おごと温泉 暖灯館きくのや, びわ湖花街道',
  openGraph: {
    title: '秋の琵琶湖：びわ湖バレイの紅葉テラスとおごと温泉！近江牛とレイクビューを満喫するおすすめ名宿5選「2026最新」',
    description: '標高1100mの「びわ湖テラス」から見下ろす紅葉とびわ湖ブルーの大パノラマ！おごと温泉の極上宿5選。',
    type: 'article',
    url: 'https://croud-travel.com/autumn-shiga-biwako-valley-ogoto-onsen-hotels-stay',
  }
};

export default function BiwakoOgotoAutumnPage() {
  return (
    <article className="min-h-screen bg-stone-50 text-stone-800 pb-20 font-sans">
      <div className="relative h-[480px] w-full overflow-hidden bg-stone-900">
        <Image
          src="https://img.travel.rakuten.co.jp/share/HOTEL/8798/8798.jpg"
          alt="秋のびわ湖テラスからの紅葉パノラマとおごと温泉のレイクビュー"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12 max-w-5xl mx-auto">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="px-3 py-1 bg-amber-600 text-white text-xs font-bold rounded-full">秋の滋賀・琵琶湖特集</span>
            <span className="px-3 py-1 bg-stone-800 text-amber-300 text-xs font-medium rounded-full border border-amber-400/30">見頃目安: 10月下旬〜11月中旬</span>
          </div>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4 drop-shadow-md">「秋の琵琶湖」びわ湖バレイの紅葉テラスとおごと温泉！近江牛とレイクビューを満喫するおすすめ名宿5選</h1>
          <p className="text-stone-200 text-sm md:text-base max-w-3xl line-clamp-2 md:line-clamp-none">
            青く輝く琵琶湖を見下ろす山頂テラスから眺める錦秋のパノラマ絶景。伝教大師最澄が開湯した歴史あるおごと温泉で、極上の近江牛しゃぶしゃぶと琵琶湖を望む展望露天風呂に心癒やされる宿をご紹介します。
          </p>
        </div>
      </div>

      <nav className="max-w-4xl mx-auto px-4 py-4 text-xs text-stone-500">
        <Link href="/" className="hover:underline text-amber-700">ホーム</Link>
        <span className="mx-2">/</span>
        <span className="text-stone-700 font-medium">びわ湖バレイとおごと温泉名宿5選</span>
      </nav>

      <div className="max-w-4xl mx-auto px-4 mt-6">
        <section className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-stone-200/80 mb-10 leading-relaxed">
          <h2 className="text-xl md:text-2xl font-bold text-stone-900 mb-4 border-l-4 border-amber-600 pl-3">
            天空のテラスから望む紅葉と琵琶湖ブルーの絶景コラボレーション
          </h2>
          <p className="mb-4 text-stone-700">
            日本最速ロープウェイで登る「びわ湖バレイ」。標高1,100mの打見山と蓬莱山山頂に広がる「びわ湖テラス」からは、一面赤や黄に染まる山肌と眼下に広がる広大な琵琶湖のコントラストを一望できます。テラスのインフィニティラウンジで秋風を感じながら過ごす時間はまさに非日常です。
          </p>
          <p className="text-stone-700">
            観光の拠点は、比叡山延暦寺の麓に湧く「おごと温泉」。京都駅からJRで約20分という好立地にありながら、pH9.0のアルカリ性単純温泉が湧き出る名湯。日本三大和牛の一つ「近江牛」のすき焼きや会席料理とともに、秋の贅沢な滞在をお楽しみいただけます。
          </p>
        </section>

        
        {/* 観光地ガイド・公式Wikipedia写真＆解説 */}
        <section className="bg-white rounded-2xl border border-stone-200/90 overflow-hidden shadow-sm mb-10">
          <div className="bg-gradient-to-r from-stone-900 to-stone-800 text-white px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
              <h2 className="text-base md:text-lg font-bold tracking-wide">近江・琵琶湖リゾートガイド：天空の絶景パノラマ・びわ湖バレイと雄琴温泉</h2>
            </div>
            <span className="text-[11px] text-stone-300 bg-white/10 px-2.5 py-0.5 rounded-full border border-white/10">地域名所ガイド</span>
          </div>
          <div className="flex flex-col gap-6 p-6">
            <div className="w-full relative aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden bg-stone-100 border border-stone-200/60 shadow-inner">
              <Image
                src="https://thumb.wikimedia.org/wikipedia/commons/thumb/0/07/Biwako_valley23n.jpg/1280px-Biwako_valley23n.jpg"
                alt="天空の絶景パノラマ・びわ湖バレイと雄琴温泉"
                fill
                className="object-cover hover:scale-105 transition duration-500"
                sizes="(max-width: 768px) 100vw, 400px"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-2 text-right">
                <span className="text-[10px] text-white/90">写真：Wikimedia Commons</span>
              </div>
            </div>
            <div className="w-full space-y-3">
              <h3 className="text-lg md:text-xl font-bold text-stone-900 leading-snug">天空の絶景パノラマ・びわ湖バレイと雄琴温泉の歴史と見どころ</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">びわ湖バレイ（びわこバレイ）は、滋賀県大津市木戸にあるスキー場。施設名と同じ「びわ湖バレイ株式会社」が運営していたが、2020年（令和2年）7月1日に大生総業を吸収合併し商号を「アルピナBI株式会社」に変更。現在は同社のびわ湖バレイ事業部が運営している。</p>
              <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-400">
                <span>出典: フリー百科事典『ウィキペディア（Wikipedia）』</span>
                <span className="text-teal-700 font-semibold">現地観光・散策推奨スポット</span>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-stone-900 mb-6 flex items-center gap-2">
            <span className="w-2.5 h-6 bg-amber-600 rounded-full inline-block"></span>
            楽天トラベル高評価！おごと温泉の厳選名宿5選
          </h2>

          <div className="space-y-8">

            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-200 flex flex-col hover:shadow-md transition">
              <div className="md:w-5/12 relative h-56 md:h-auto min-h-[220px]">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/8165/8165.jpg"
                  alt="おごと温泉　暖灯館　きくのや"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                />
                <span className="absolute top-3 left-3 bg-stone-900/90 text-amber-300 font-bold px-2.5 py-1 rounded text-xs shadow">
                  厳選第1選
                </span>
              </div>
              <div className="p-6 md:w-7/12 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-amber-500 font-bold text-sm">★ 4.67</span>
                    <span className="text-stone-400 text-xs">(2883件のクチコミ)</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">
                    おごと温泉　暖灯館　きくのや
                  </h3>
                  <p className="text-xs text-stone-500 mb-3">
                    アクセス: 雄琴駅 / 京都駅より20分、JR湖西線おごと温泉駅下車、車5分＜送迎有＞。京都東ICより湖西道路経由20分558号線沿い
                  </p>
                  <p className="text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed">
                    地元食材を使った会席料理■テラスラウンジでフリードリンク■8/31-12/5貸切風呂リニューアル工事
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">最安宿泊料金目安</span>
                    <span className="text-lg font-bold text-amber-700">¥13,282〜</span>
                    <span className="text-xs text-stone-500">/名</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F8165%2F8165.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs rounded-xl shadow transition"
                  >
                    楽天トラベルで空室確認
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-200 flex flex-col hover:shadow-md transition">
              <div className="md:w-5/12 relative h-56 md:h-auto min-h-[220px]">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/8798/8798.jpg"
                  alt="おごと温泉　びわ湖花街道"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                />
                <span className="absolute top-3 left-3 bg-stone-900/90 text-amber-300 font-bold px-2.5 py-1 rounded text-xs shadow">
                  厳選第2選
                </span>
              </div>
              <div className="p-6 md:w-7/12 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-amber-500 font-bold text-sm">★ 4.59</span>
                    <span className="text-stone-400 text-xs">(690件のクチコミ)</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">
                    おごと温泉　びわ湖花街道
                  </h3>
                  <p className="text-xs text-stone-500 mb-3">
                    アクセス: 雄琴駅 / 車：名神京都東ＩＣ～約20分　電車：京都駅よりJR湖西線で20分。おごと温泉駅～無料送迎あり。（要連絡）
                  </p>
                  <p className="text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed">
                    湖も碧、山の蒼。時を忘れ。そして心がほどける。湖国が織りなす季節に移ろいを感じて。
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">最安宿泊料金目安</span>
                    <span className="text-lg font-bold text-amber-700">¥26,730〜</span>
                    <span className="text-xs text-stone-500">/名</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F8798%2F8798.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs rounded-xl shadow transition"
                  >
                    楽天トラベルで空室確認
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-200 flex flex-col hover:shadow-md transition">
              <div className="md:w-5/12 relative h-56 md:h-auto min-h-[220px]">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/137819/137819.jpg"
                  alt="多彩な湯めぐり四季の幸を愛でる宿　湯元館"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                />
                <span className="absolute top-3 left-3 bg-stone-900/90 text-amber-300 font-bold px-2.5 py-1 rounded text-xs shadow">
                  厳選第3選
                </span>
              </div>
              <div className="p-6 md:w-7/12 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-amber-500 font-bold text-sm">★ 4.54</span>
                    <span className="text-stone-400 text-xs">(928件のクチコミ)</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">
                    多彩な湯めぐり四季の幸を愛でる宿　湯元館
                  </h3>
                  <p className="text-xs text-stone-500 mb-3">
                    アクセス: おごと温泉駅 / ＪＲ　おごと温泉駅からお車で５分（送迎バスあり※要予約）無料駐車場有り
                  </p>
                  <p className="text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed">
                    〓楽天トラベル日本の宿アワード2025受賞〓びわ湖を望む屋上露天風呂など趣の違う館内４つの温泉めぐり
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">最安宿泊料金目安</span>
                    <span className="text-lg font-bold text-amber-700">¥24,000〜</span>
                    <span className="text-xs text-stone-500">/名</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F137819%2F137819.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs rounded-xl shadow transition"
                  >
                    楽天トラベルで空室確認
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-200 flex flex-col hover:shadow-md transition">
              <div className="md:w-5/12 relative h-56 md:h-auto min-h-[220px]">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/15737/15737.jpg"
                  alt="里湯昔話　雄山荘"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                />
                <span className="absolute top-3 left-3 bg-stone-900/90 text-amber-300 font-bold px-2.5 py-1 rounded text-xs shadow">
                  厳選第4選
                </span>
              </div>
              <div className="p-6 md:w-7/12 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-amber-500 font-bold text-sm">★ 4.4</span>
                    <span className="text-stone-400 text-xs">(1926件のクチコミ)</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">
                    里湯昔話　雄山荘
                  </h3>
                  <p className="text-xs text-stone-500 mb-3">
                    アクセス: 雄琴駅 / JR湖西線おごと温泉駅送迎バス有/名神京都東IC～湖西道路(国道161号)経由約15分/栗東IC～琵琶湖大橋経由約40分
                  </p>
                  <p className="text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed">
                    「自然と文化との共生」里山がテーマです。
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">最安宿泊料金目安</span>
                    <span className="text-lg font-bold text-amber-700">¥12,650〜</span>
                    <span className="text-xs text-stone-500">/名</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F15737%2F15737.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs rounded-xl shadow transition"
                  >
                    楽天トラベルで空室確認
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-200 flex flex-col hover:shadow-md transition">
              <div className="md:w-5/12 relative h-56 md:h-auto min-h-[220px]">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/106122/106122.jpg"
                  alt="琵琶湖グランドホテル・京近江"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                />
                <span className="absolute top-3 left-3 bg-stone-900/90 text-amber-300 font-bold px-2.5 py-1 rounded text-xs shadow">
                  厳選第5選
                </span>
              </div>
              <div className="p-6 md:w-7/12 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-amber-500 font-bold text-sm">★ 4.19</span>
                    <span className="text-stone-400 text-xs">(846件のクチコミ)</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">
                    琵琶湖グランドホテル・京近江
                  </h3>
                  <p className="text-xs text-stone-500 mb-3">
                    アクセス: 雄琴駅 / ＪＲ湖西線おごと温泉駅下車、車5分(送迎有)　名神高速道路、京都東ＩＣより湖西道路経由仰木雄琴より5分無料駐車場有り
                  </p>
                  <p className="text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed">
                    お1人様～カップル・ファミリー・グループ様大歓迎。大切な方と琵琶湖ステイ。京都や延暦寺へアクセス良好
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">最安宿泊料金目安</span>
                    <span className="text-lg font-bold text-amber-700">¥13,200〜</span>
                    <span className="text-xs text-stone-500">/名</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F106122%2F106122.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs rounded-xl shadow transition"
                  >
                    楽天トラベルで空室確認
                  </a>
                </div>
              </div>
            </div>

          </div>
        </section>

        <section className="bg-stone-100 p-6 md:p-8 rounded-2xl border border-stone-200 mb-10 leading-relaxed text-sm text-stone-700">
          <h3 className="text-base font-bold text-stone-900 mb-3">秋の滋賀・琵琶湖観光アドバイス</h3>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>びわ湖バレイの営業期間:</strong> 冬季スキー営業前の秋期営業は例年11月中旬頃までとなります。事前に公式ウェブサイトで営業状況を確認しましょう。</li>
            <li><strong>比叡山延暦寺・日吉大社:</strong> おごと温泉から車で約15〜20分。日吉大社のもみじロードや延暦寺根本中堂の紅葉は関西屈指の名所です。</li>
            <li><strong>近江牛グルメ:</strong> 宿での会席料理はもちろん、大津・草津エリアの老舗精肉店でいただくすき焼きランチも絶品です。</li>
          </ul>
        </section>
      </div>
    </article>
  );
}
