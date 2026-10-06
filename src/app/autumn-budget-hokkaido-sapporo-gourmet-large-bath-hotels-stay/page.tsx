import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '【秋の札幌×格安】紅葉散策とすすきのグルメ！大浴場付き1泊3,000円台〜のコスパ最強おすすめホテル5選【2026最新】',
  description: '北海道大学イチョウ並木の黄金トンネルや中島公園の紅葉！夜はすすきので秋鮭・味噌ラーメン・ジンギスカンを満喫。サウナ＆大浴場完備で1泊3,000円〜5,000円台で泊まれる札幌のコスパ最強ホテル5選をご紹介。ベッセルホテル、三井ガーデン、リソルトリニティを徹底比較！',
  keywords: '札幌 格安 ホテル, 札幌 大浴場 サウナ ホテル, 北大 イチョウ並木 紅葉, すすきの グルメ 宿, ベッセルホテルカンパーナすすきの, 三井ガーデンホテル札幌',
  openGraph: {
    title: '【秋の札幌×格安】紅葉散策とすすきのグルメ！大浴場付き1泊3,000円台〜のコスパ最強おすすめホテル5選【2026最新】',
    description: '北大イチョウ並木とすすきのグルメ！大浴場・サウナ付き1泊3,000円台〜のコスパ最強札幌ホテル5選。',
    type: 'article',
    url: 'https://croud-travel.com/autumn-budget-hokkaido-sapporo-gourmet-large-bath-hotels-stay',
  }
};

export default function SapporoBudgetAutumnPage() {
  return (
    <article className="min-h-screen bg-stone-50 text-stone-800 pb-20 font-sans">
      <div className="relative h-[480px] w-full overflow-hidden bg-stone-900">
        <Image
          src="https://img.travel.rakuten.co.jp/share/HOTEL/172398/172398.jpg"
          alt="秋の札幌・北海道大学イチョウ並木と大浴場付き格安ホテル"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12 max-w-5xl mx-auto">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="px-3 py-1 bg-teal-600 text-white text-xs font-bold rounded-full">格安・北海道特集</span>
            <span className="px-3 py-1 bg-stone-800 text-amber-300 text-xs font-medium rounded-full border border-amber-400/30">1泊目安: 3,000円台〜5,000円台</span>
          </div>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4 drop-shadow-md">
            【秋の札幌×格安】紅葉散策とすすきのグルメ！大浴場付き1泊3,000円台〜のコスパ最強おすすめホテル5選
          </h1>
          <p className="text-stone-200 text-sm md:text-base max-w-3xl line-clamp-2 md:line-clamp-none">
            黄金に輝く北海道大学のイチョウ並木と中島公園の水鏡紅葉。すすきのの絶品海鮮やラーメンを心ゆくまで堪能し、清潔な大浴場やサウナで足を伸ばして寛げる札幌の厳選コスパホテルをご紹介します。
          </p>
        </div>
      </div>

      <nav className="max-w-4xl mx-auto px-4 py-4 text-xs text-stone-500">
        <Link href="/" className="hover:underline text-amber-700">ホーム</Link>
        <span className="mx-2">/</span>
        <span className="text-stone-700 font-medium">札幌格安大浴場ホテル5選</span>
      </nav>

      <div className="max-w-4xl mx-auto px-4 mt-6">
        <section className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-stone-200/80 mb-10 leading-relaxed">
          <h2 className="text-xl md:text-2xl font-bold text-stone-900 mb-4 border-l-4 border-teal-600 pl-3">
            秋の札幌は「ホテル代を抑えてグルメ＆紅葉を極める」のが正解
          </h2>
          <p className="mb-4 text-stone-700">
            10月下旬から11月上旬にかけて、札幌市内は一気に秋の色に染まります。約380mにわたって約70本のイチョウが連なる「北海道大学のイチョウ並木」は、頭上を覆う黄金色のトンネルと地面を埋める黄色の絨毯が息を呑む美しさです。
          </p>
          <p className="text-stone-700">
            秋は旬の秋鮭（いくら）、戻りガツオ、新ジャガ、濃厚な味噌ラーメンやジンギスカンなど食の宝庫。大浴場付きの格安ホテルに泊まれば、冷え込む秋の夜もぽかぽかに温まり、浮いた宿泊費で贅沢なご当地グルメを食べ尽くすことができます。
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-stone-900 mb-6 flex items-center gap-2">
            <span className="w-2.5 h-6 bg-teal-600 rounded-full inline-block"></span>
            楽天トラベル高評価！札幌の大浴場付き格安ホテル5選
          </h2>

          <div className="space-y-8">

            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-200 flex flex-col md:flex-row hover:shadow-md transition">
              <div className="md:w-5/12 relative h-56 md:h-auto min-h-[220px]">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/67324/67324.jpg"
                  alt="ティアラホテル札幌すすきの"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                />
                <span className="absolute top-3 left-3 bg-stone-900/90 text-teal-300 font-bold px-2.5 py-1 rounded text-xs shadow">
                  コスパ第1選
                </span>
              </div>
              <div className="p-6 md:w-7/12 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-amber-500 font-bold text-sm">★ 4.11</span>
                    <span className="text-stone-400 text-xs">(2575件のクチコミ)</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">
                    ティアラホテル札幌すすきの
                  </h3>
                  <p className="text-xs text-stone-500 mb-3">
                    アクセス: すすきの駅 / 地下鉄南北線　すすきの駅から徒歩７分、中島公園駅から徒歩4分。地下鉄東豊線　豊水すすきの駅から徒歩７分。
                  </p>
                  <p className="text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed">
                    すすきの繁華街からすぐ。全室シモンズベッドで快眠×大浴場（男女入替）完備！抗菌・抗ウイルス対応で安心
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">最安宿泊料金目安</span>
                    <span className="text-lg font-bold text-teal-700">¥3,700〜</span>
                    <span className="text-xs text-stone-500">/名</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F67324%2F67324.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs rounded-xl shadow transition"
                  >
                    楽天トラベルで空室確認
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-200 flex flex-col md:flex-row hover:shadow-md transition">
              <div className="md:w-5/12 relative h-56 md:h-auto min-h-[220px]">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/104743/104743.jpg"
                  alt="三井ガーデンホテル札幌"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                />
                <span className="absolute top-3 left-3 bg-stone-900/90 text-teal-300 font-bold px-2.5 py-1 rounded text-xs shadow">
                  コスパ第2選
                </span>
              </div>
              <div className="p-6 md:w-7/12 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-amber-500 font-bold text-sm">★ 4.48</span>
                    <span className="text-stone-400 text-xs">(1675件のクチコミ)</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">
                    三井ガーデンホテル札幌
                  </h3>
                  <p className="text-xs text-stone-500 mb-3">
                    アクセス: 札幌駅 / JR札幌駅西改札より徒歩約4分　　
                  </p>
                  <p className="text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed">
                    【２０２６年２月リニューアルオープン】ＪＲ札幌駅南口徒歩約４分！宿泊者専用大浴場やラウンジが好評。
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">最安宿泊料金目安</span>
                    <span className="text-lg font-bold text-teal-700">¥4,013〜</span>
                    <span className="text-xs text-stone-500">/名</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F104743%2F104743.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs rounded-xl shadow transition"
                  >
                    楽天トラベルで空室確認
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-200 flex flex-col md:flex-row hover:shadow-md transition">
              <div className="md:w-5/12 relative h-56 md:h-auto min-h-[220px]">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/79254/79254.jpg"
                  alt="ホテル京阪　札幌"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                />
                <span className="absolute top-3 left-3 bg-stone-900/90 text-teal-300 font-bold px-2.5 py-1 rounded text-xs shadow">
                  コスパ第3選
                </span>
              </div>
              <div className="p-6 md:w-7/12 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-amber-500 font-bold text-sm">★ 4.38</span>
                    <span className="text-stone-400 text-xs">(3711件のクチコミ)</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">
                    ホテル京阪　札幌
                  </h3>
                  <p className="text-xs text-stone-500 mb-3">
                    アクセス: 札幌駅 / 【新千歳空港からホテルまで約44分】JR「札幌」駅西口より徒歩約4分★詳しくはアクセスページをご覧ください。
                  </p>
                  <p className="text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed">
                    JR「札幌」駅より徒歩約4分！全客室にReFa製シャワーヘッド・ドライヤーを新しく導入しました！
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">最安宿泊料金目安</span>
                    <span className="text-lg font-bold text-teal-700">¥4,650〜</span>
                    <span className="text-xs text-stone-500">/名</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F79254%2F79254.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs rounded-xl shadow transition"
                  >
                    楽天トラベルで空室確認
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-200 flex flex-col md:flex-row hover:shadow-md transition">
              <div className="md:w-5/12 relative h-56 md:h-auto min-h-[220px]">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/70234/70234.jpg"
                  alt="ホテルリソルトリニティ札幌"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                />
                <span className="absolute top-3 left-3 bg-stone-900/90 text-teal-300 font-bold px-2.5 py-1 rounded text-xs shadow">
                  コスパ第4選
                </span>
              </div>
              <div className="p-6 md:w-7/12 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-amber-500 font-bold text-sm">★ 4.47</span>
                    <span className="text-stone-400 text-xs">(3270件のクチコミ)</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">
                    ホテルリソルトリニティ札幌
                  </h3>
                  <p className="text-xs text-stone-500 mb-3">
                    アクセス: 札幌駅 / 地下鉄大通駅②より徒歩1分(南大通)・新千歳空港連絡バス停留所は正面にあり(停留所：ホテルリソルトリニティ札幌前)
                  </p>
                  <p className="text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed">
                    市内中心部、大通公園に位置した出張・観光にも便利なアクセス。人気の大浴場もございます。
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">最安宿泊料金目安</span>
                    <span className="text-lg font-bold text-teal-700">¥4,590〜</span>
                    <span className="text-xs text-stone-500">/名</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F70234%2F70234.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs rounded-xl shadow transition"
                  >
                    楽天トラベルで空室確認
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-200 flex flex-col md:flex-row hover:shadow-md transition">
              <div className="md:w-5/12 relative h-56 md:h-auto min-h-[220px]">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/172398/172398.jpg"
                  alt="ベッセルホテルカンパーナすすきの｜サウナ付大浴場（札幌・すすきの）"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                />
                <span className="absolute top-3 left-3 bg-stone-900/90 text-teal-300 font-bold px-2.5 py-1 rounded text-xs shadow">
                  コスパ第5選
                </span>
              </div>
              <div className="p-6 md:w-7/12 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-amber-500 font-bold text-sm">★ 4.54</span>
                    <span className="text-stone-400 text-xs">(783件のクチコミ)</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">
                    ベッセルホテルカンパーナすすきの｜サウナ付大浴場（札幌・すすきの）
                  </h3>
                  <p className="text-xs text-stone-500 mb-3">
                    アクセス: すすきの駅 / すすきの駅より徒歩にて約４分
                  </p>
                  <p className="text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed">
                    旅の疲れを癒してくれるサウナ付き大浴場完備。すすきの駅から徒歩４分の好立地
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">最安宿泊料金目安</span>
                    <span className="text-lg font-bold text-teal-700">¥5,375〜</span>
                    <span className="text-xs text-stone-500">/名</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F172398%2F172398.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs rounded-xl shadow transition"
                  >
                    楽天トラベルで空室確認
                  </a>
                </div>
              </div>
            </div>

          </div>
        </section>

        <section className="bg-stone-100 p-6 md:p-8 rounded-2xl border border-stone-200 mb-10 leading-relaxed text-sm text-stone-700">
          <h3 className="text-base font-bold text-stone-900 mb-3">秋の札幌観光おすすめポイント</h3>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>北大金葉祭（こんようさい）:</strong> イチョウ並木の見頃に合わせて夜間ライトアップが行われ、幻想的な光のアーチを楽しめます。</li>
            <li><strong>定山渓温泉への日帰りアクセス:</strong> 札幌駅から「かっぱライナー号」バスで約1時間。紅葉の名所・豊平峡ダムと温泉街の散策を手軽に楽しめます。</li>
            <li><strong>シメパフェ文化:</strong> すすきのでジンギスカンやお酒を楽しんだ後は、札幌発祥の夜パフェ（シメパフェ）で旅の夜を締めくくるのが定番です。</li>
          </ul>
        </section>
      </div>
    </article>
  );
}
