import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '【秋の上高地・白骨温泉】カラマツ黄葉と乳白色の秘湯！閉山前に訪れたい絶景名宿5選【2026最新】',
  description: '11月中旬の閉山祭を前に黄金色に染まる上高地のカラマツ並木と穂高連峰。湯川渓谷に湧く「3日入れば3年風邪をひかない」白骨温泉の乳白色露天風呂を満喫！小梨の湯笹屋、湯元齋藤旅館など秋の秘湯宿5選をご紹介。',
  keywords: '上高地 黄葉, カラマツ 黄金, 白骨温泉 宿, 上高地 閉山祭, 小梨の湯 笹屋, 湯元齋藤旅館',
  openGraph: {
    title: '【秋の上高地・白骨温泉】カラマツ黄葉と乳白色の秘湯！閉山前に訪れたい絶景名宿5選【2026最新】',
    description: '11月中旬の閉山祭を前に黄金色に染まる上高地のカラマツ並木と穂高連峰。白骨温泉の乳白色露天風呂を満喫！',
    type: 'article',
    url: 'https://croud-travel.com/autumn-nagano-kamikochi-shirahone-onsen-autumn-hotels-stay',
  }
};

export default function KamikochiShirahoneAutumnPage() {
  return (
    <article className="min-h-screen bg-stone-50 text-stone-800 pb-20 font-sans">
      <div className="relative h-[480px] w-full overflow-hidden bg-stone-900">
        <Image
          src="https://img.travel.rakuten.co.jp/share/HOTEL/141241/141241.jpg"
          alt="秋の上高地カラマツ黄葉と白骨温泉の乳白色露天風呂"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12 max-w-5xl mx-auto">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="px-3 py-1 bg-amber-600 text-white text-xs font-bold rounded-full">秋の信州特集</span>
            <span className="px-3 py-1 bg-stone-800 text-amber-300 text-xs font-medium rounded-full border border-amber-400/30">見頃目安: 10月中旬〜11月上旬</span>
          </div>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4 drop-shadow-md">
            【秋の上高地・白骨温泉】カラマツ黄葉と乳白色の秘湯！閉山前に訪れたい絶景名宿5選
          </h1>
          <p className="text-stone-200 text-sm md:text-base max-w-3xl line-clamp-2 md:line-clamp-none">
            冠雪した穂高連峰を背景に梓川沿いのカラマツ林が一面黄金色に輝く晩秋の上高地。11月15日の閉山祭を控えた静謐な山岳リゾートと、古くから愛される白骨温泉の白濁した秘湯で心洗われる特別な旅をお届けします。
          </p>
        </div>
      </div>

      <nav className="max-w-4xl mx-auto px-4 py-4 text-xs text-stone-500">
        <Link href="/" className="hover:underline text-amber-700">ホーム</Link>
        <span className="mx-2">/</span>
        <span className="text-stone-700 font-medium">上高地黄葉と白骨温泉名宿5選</span>
      </nav>

      <div className="max-w-4xl mx-auto px-4 mt-6">
        <section className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-stone-200/80 mb-10 leading-relaxed">
          <h2 className="text-xl md:text-2xl font-bold text-stone-900 mb-4 border-l-4 border-amber-600 pl-3">
            冠雪の穂高連峰とカラマツ黄葉、そして白濁の名湯へ
          </h2>
          <p className="mb-4 text-stone-700">
            標高約1,500mに位置する上高地は、10月中旬から11月上旬にかけてカラマツが一斉に黄金色へと変わり、落葉とともに梓川の遊歩道が黄金の絨毯で敷き詰められます。初冠雪を迎えた穂高の白、澄み切った秋空の青、そして山麓を彩る黄葉の三段紅葉は息を呑むスケールです。
          </p>
          <p className="text-stone-700">
            トレッキングの後は、上高地の玄関口に位置する名湯「白骨（しらほね）温泉」へ。「3日入れば3年風邪をひかない」と謳われる弱酸性・硫黄泉の乳白色の湯は、肌触りが柔らかく湯上がりの温まりが格別です。上高地が冬の眠りにつく直前、秋のフィナーレを飾る最高の温泉旅をお楽しみください。
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-stone-900 mb-6 flex items-center gap-2">
            <span className="w-2.5 h-6 bg-amber-600 rounded-full inline-block"></span>
            楽天トラベル高評価！白骨温泉の厳選秘湯宿5選
          </h2>

          <div className="space-y-8">

            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-200 flex flex-col md:flex-row hover:shadow-md transition">
              <div className="md:w-5/12 relative h-56 md:h-auto min-h-[220px]">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/141241/141241.jpg"
                  alt="白骨温泉　小梨の湯　笹屋"
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
                    <span className="text-amber-500 font-bold text-sm">★ 4.65</span>
                    <span className="text-stone-400 text-xs">(131件のクチコミ)</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">
                    白骨温泉　小梨の湯　笹屋
                  </h3>
                  <p className="text-xs text-stone-500 mb-3">
                    アクセス: 松本駅 / ＪＲ　松本駅より、松本電鉄　新島々下車、バスにて６０分
                  </p>
                  <p className="text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed">
                    白樺林が織りなす静けさへ。自然に包まれて貸切露天に浸かる、心も身体も湯に溶ける大人旅
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">最安宿泊料金目安</span>
                    <span className="text-lg font-bold text-amber-700">¥14,300〜</span>
                    <span className="text-xs text-stone-500">/名</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F141241%2F141241.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs rounded-xl shadow transition"
                  >
                    楽天トラベルで空室確認
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-200 flex flex-col md:flex-row hover:shadow-md transition">
              <div className="md:w-5/12 relative h-56 md:h-auto min-h-[220px]">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/32100/32100.jpg"
                  alt="白骨温泉　湯元齋藤旅館"
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
                    <span className="text-amber-500 font-bold text-sm">★ 4.61</span>
                    <span className="text-stone-400 text-xs">(863件のクチコミ)</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">
                    白骨温泉　湯元齋藤旅館
                  </h3>
                  <p className="text-xs text-stone-500 mb-3">
                    アクセス: 松本・新島々駅 / お車で松本ICから60分、高山ICから70分。上高地へは「さわんどバスターミナル」乗り換えで約60分。
                  </p>
                  <p className="text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed">
                    二百八十余年の間源泉を守り続ける湯守の宿。レトロモダンな造りの館内には寛ぎの空間が広がっています。
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">最安宿泊料金目安</span>
                    <span className="text-lg font-bold text-amber-700">¥20,900〜</span>
                    <span className="text-xs text-stone-500">/名</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F32100%2F32100.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs rounded-xl shadow transition"
                  >
                    楽天トラベルで空室確認
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-200 flex flex-col md:flex-row hover:shadow-md transition">
              <div className="md:w-5/12 relative h-56 md:h-auto min-h-[220px]">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/162900/162900.jpg"
                  alt="白骨温泉　湯元齋藤別館"
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
                    <span className="text-amber-500 font-bold text-sm">★ 4.6</span>
                    <span className="text-stone-400 text-xs">(107件のクチコミ)</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">
                    白骨温泉　湯元齋藤別館
                  </h3>
                  <p className="text-xs text-stone-500 mb-3">
                    アクセス: 新島々駅 / 松本ICから約60分、高山西ICから約70分。国道158号線経由、沢渡（さわんど）より県道300号線が最短ルートです。
                  </p>
                  <p className="text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed">
                    湯元の源泉を掛け流しで贅沢に堪能できる昔ながらのお湯の宿で、皆様のご来館を心よりお待ちしております。
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">最安宿泊料金目安</span>
                    <span className="text-lg font-bold text-amber-700">¥18,590〜</span>
                    <span className="text-xs text-stone-500">/名</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F162900%2F162900.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs rounded-xl shadow transition"
                  >
                    楽天トラベルで空室確認
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-200 flex flex-col md:flex-row hover:shadow-md transition">
              <div className="md:w-5/12 relative h-56 md:h-auto min-h-[220px]">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/67348/67348.jpg"
                  alt="白骨温泉　白船荘新宅旅館"
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
                    <span className="text-amber-500 font-bold text-sm">★ 4.58</span>
                    <span className="text-stone-400 text-xs">(1221件のクチコミ)</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">
                    白骨温泉　白船荘新宅旅館
                  </h3>
                  <p className="text-xs text-stone-500 mb-3">
                    アクセス: 新島々駅 / JR松本駅から私鉄上高地線　新島々駅より白骨温泉行バス乗車→終点白骨温泉下車
                  </p>
                  <p className="text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed">
                    極上の自家源泉は８ヶ所の浴槽で掛け流し、加温なしの天然源泉をお楽しみいただけます
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">最安宿泊料金目安</span>
                    <span className="text-lg font-bold text-amber-700">¥18,700〜</span>
                    <span className="text-xs text-stone-500">/名</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F67348%2F67348.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs rounded-xl shadow transition"
                  >
                    楽天トラベルで空室確認
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-200 flex flex-col md:flex-row hover:shadow-md transition">
              <div className="md:w-5/12 relative h-56 md:h-auto min-h-[220px]">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/128531/128531.jpg"
                  alt="白骨温泉　白船グランドホテル"
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
                    <span className="text-amber-500 font-bold text-sm">★ 4.12</span>
                    <span className="text-stone-400 text-xs">(428件のクチコミ)</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">
                    白骨温泉　白船グランドホテル
                  </h3>
                  <p className="text-xs text-stone-500 mb-3">
                    アクセス: 新島々駅 / 松本ICより約60分、高山西ICより約80分。R158経由、さわんど温泉より県道300号線で車15分
                  </p>
                  <p className="text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed">
                    大自然を堪能できる露天風呂。名湯白骨温泉の人気宿です。お料理は地元食材を中心としております。
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">最安宿泊料金目安</span>
                    <span className="text-lg font-bold text-amber-700">¥20,900〜</span>
                    <span className="text-xs text-stone-500">/名</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F128531%2F128531.html"
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
          <h3 className="text-base font-bold text-stone-900 mb-3">上高地・白骨温泉秋旅の注意点</h3>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>マイカー規制:</strong> 上高地は年間を通してマイカー規制のため、沢渡（さわんど）駐車場からシャトルバスまたはタクシーを利用します。</li>
            <li><strong>閉山日:</strong> 毎年11月15日に閉山祭が行われ、冬季は交通機関が運休となります。10月下旬〜11月上旬の来訪がおすすめです。</li>
            <li><strong>防寒対策:</strong> 晩秋の上高地・白骨温泉は朝晩氷点下近くまで冷え込みます。フリースやダウンジャケット、手袋を必ずご準備ください。</li>
          </ul>
        </section>
      </div>
    </article>
  );
}
