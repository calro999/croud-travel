import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '【秋の箱根】仙石原すすき草原の黄金絨毯と強羅温泉にごり湯！秋絶景を愛でるおすすめ名宿5選【2026最新】',
  description: '台ヶ岳の山麓に広がる箱根仙石原すすき草原の一面黄金色の波と、大涌谷源泉の乳白色にごり湯を満喫！センチュリオン箱根別邸、BLISSTIA箱根仙石原など、秋の箱根を極上の温泉と美食で満喫する厳選宿5選をご紹介。',
  keywords: '箱根 すすき 草原, 仙石原 ススキ 見頃, 箱根 にごり湯 宿, 強羅温泉 秋, センチュリオン箱根別邸, BLISSTIA箱根仙石原',
  openGraph: {
    title: '【秋の箱根】仙石原すすき草原の黄金絨毯と強羅温泉にごり湯！秋絶景を愛でるおすすめ名宿5選【2026最新】',
    description: '台ヶ岳の山麓に広がる箱根仙石原すすき草原の一面黄金色の波と、大涌谷源泉の乳白色にごり湯を満喫！',
    type: 'article',
    url: 'https://croud-travel.com/autumn-kanagawa-hakone-sengokuhara-susuki-onsen-hotels-stay',
  }
};

export default function HakoneSengokuharaAutumnPage() {
  return (
    <article className="min-h-screen bg-stone-50 text-stone-800 pb-20 font-sans">
      <div className="relative h-[480px] w-full overflow-hidden bg-stone-900">
        <Image
          src="https://img.travel.rakuten.co.jp/share/HOTEL/188402/188402.jpg"
          alt="箱根仙石原すすき草原の黄金色に輝く風景と温泉宿"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12 max-w-5xl mx-auto">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="px-3 py-1 bg-amber-600 text-white text-xs font-bold rounded-full">秋の箱根特集</span>
            <span className="px-3 py-1 bg-stone-800 text-amber-300 text-xs font-medium rounded-full border border-amber-400/30">見頃目安: 10月上旬〜11月上旬</span>
          </div>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4 drop-shadow-md">
            【秋の箱根】仙石原すすき草原の黄金絨毯と強羅温泉にごり湯！秋絶景を愛でるおすすめ名宿5選
          </h1>
          <p className="text-stone-200 text-sm md:text-base max-w-3xl line-clamp-2 md:line-clamp-none">
            秋風にそよぐ一面のススキが夕陽を浴びて黄金色に輝く仙石原草原。大涌谷から引き湯された白濁の硫黄泉やスタイリッシュなリゾート空間で、秋の箱根の贅沢な休日を演出する厳選5宿をご紹介します。
          </p>
        </div>
      </div>

      <nav className="max-w-4xl mx-auto px-4 py-4 text-xs text-stone-500">
        <Link href="/" className="hover:underline text-amber-700">ホーム</Link>
        <span className="mx-2">/</span>
        <span className="text-stone-700 font-medium">仙石原すすき草原と箱根名宿5選</span>
      </nav>

      <div className="max-w-4xl mx-auto px-4 mt-6">
        <section className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-stone-200/80 mb-10 leading-relaxed">
          <h2 className="text-xl md:text-2xl font-bold text-stone-900 mb-4 border-l-4 border-amber-600 pl-3">
            黄金の海が広がる仙石原すすき草原と白濁湯の魅力
          </h2>
          <p className="mb-4 text-stone-700">
            「かながわの景勝50選」にも選ばれる仙石原すすき草原は、秋の訪れとともに銀色から黄金色へと姿を変え、山肌一面をまばゆく埋め尽くします。草原の中央には一本の散策路が貫通しており、背丈を超えるススキの波の中を歩く体験はまるで別世界に迷い込んだかのよう。特に午後遅く、西日が差し込む時間帯の輝きは言葉を失うほどの美しさです。
          </p>
          <p className="text-stone-700">
            仙石原エリアの魅力は絶景だけでなく、大涌谷から引湯された名物の「乳白色の酸性硫酸塩泉（にごり湯）」。冷えた身体を芯までぽかぽかに温めてくれる極上の泉質と、箱根ガラスの森美術館やポーラ美術館などのアートスポット巡りを組み合わせた大人の贅沢ステイが叶います。
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-stone-900 mb-6 flex items-center gap-2">
            <span className="w-2.5 h-6 bg-amber-600 rounded-full inline-block"></span>
            楽天トラベル高評価！仙石原・強羅温泉の厳選宿5選
          </h2>

          <div className="space-y-8">

            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-200 flex flex-col md:flex-row hover:shadow-md transition">
              <div className="md:w-5/12 relative h-56 md:h-auto min-h-[220px]">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/176633/176633.jpg"
                  alt="全室露天風呂付客室　仙石原温泉　センチュリオン箱根別邸"
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
                    <span className="text-stone-400 text-xs">(175件のクチコミ)</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">
                    全室露天風呂付客室　仙石原温泉　センチュリオン箱根別邸
                  </h3>
                  <p className="text-xs text-stone-500 mb-3">
                    アクセス: 箱根湯本駅 / 箱根湯本駅よりお車にて約25分、東名高速道路御殿場ICからお車で約25分。
                  </p>
                  <p className="text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed">
                    ◆自然に囲まれた13室の隠れ温泉宿◆全室客室露天風呂完備  オーナーこだわりの世界をお愉しみ下さい。
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">最安宿泊料金目安</span>
                    <span className="text-lg font-bold text-amber-700">¥38,000〜</span>
                    <span className="text-xs text-stone-500">/名</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F176633%2F176633.html"
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
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/188402/188402.jpg"
                  alt="ＢＬＩＳＳＴＩＡ箱根仙石原"
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
                    <span className="text-stone-400 text-xs">(300件のクチコミ)</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">
                    ＢＬＩＳＳＴＩＡ箱根仙石原
                  </h3>
                  <p className="text-xs text-stone-500 mb-3">
                    アクセス: 箱根湯本駅 / バス停「仙石原小学校前」徒歩2分／箱根湯本駅よりバスで約25分／バスタ新宿より高速バスにて約2時間
                  </p>
                  <p className="text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed">
                    《コンドミニアム型ホテル》全室50㎡以上の広々客室で優雅な時間を
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">最安宿泊料金目安</span>
                    <span className="text-lg font-bold text-amber-700">¥15,400〜</span>
                    <span className="text-xs text-stone-500">/名</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F188402%2F188402.html"
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
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/108782/108782.jpg"
                  alt="箱根仙石原温泉　金時山荘"
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
                    <span className="text-amber-500 font-bold text-sm">★ 4.33</span>
                    <span className="text-stone-400 text-xs">(18件のクチコミ)</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">
                    箱根仙石原温泉　金時山荘
                  </h3>
                  <p className="text-xs text-stone-500 mb-3">
                    アクセス: 箱根湯本駅 / 箱根湯本駅から箱根登山バス乗車３０分。「仙石バス亭」下車・御殿場方面に向かって徒歩１０分
                  </p>
                  <p className="text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed">
                    自然にひたるやすらぎのひと時を…新姥子温泉は24時間入浴可能♪
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">最安宿泊料金目安</span>
                    <span className="text-lg font-bold text-amber-700">¥7,000〜</span>
                    <span className="text-xs text-stone-500">/名</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F108782%2F108782.html"
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
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/8968/8968.jpg"
                  alt="仙石原温泉　箱根ホテル花月園"
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
                    <span className="text-amber-500 font-bold text-sm">★ 4.11</span>
                    <span className="text-stone-400 text-xs">(1838件のクチコミ)</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">
                    仙石原温泉　箱根ホテル花月園
                  </h3>
                  <p className="text-xs text-stone-500 mb-3">
                    アクセス: 小田原駅 / 東名高速御殿場ＩＣより１３８号線で箱根方面へ。仙石原交差点（県道75号線分岐）を芦ノ湖方面へ。
                  </p>
                  <p className="text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed">
                    自家源泉の天然温泉（大浴場）と、大涌谷からの硫黄泉を供給する「貸切風呂」が楽しめる高原のホテル
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">最安宿泊料金目安</span>
                    <span className="text-lg font-bold text-amber-700">¥6,930〜</span>
                    <span className="text-xs text-stone-500">/名</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F8968%2F8968.html"
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
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/196301/196301.jpg"
                  alt="フォートリート箱根仙石原"
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
                    <span className="text-amber-500 font-bold text-sm">★ 3.97</span>
                    <span className="text-stone-400 text-xs">(101件のクチコミ)</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">
                    フォートリート箱根仙石原
                  </h3>
                  <p className="text-xs text-stone-500 mb-3">
                    アクセス: 箱根湯本駅 / 箱根湯本駅／箱根登山バス湖尻桃源台行約２５分、俵石・箱根ガラスの森前徒歩約１５分
                  </p>
                  <p className="text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed">
                    全客室ダイニングテーブル・キッチン完備／長期滞在・グループ旅行におすすめ
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">最安宿泊料金目安</span>
                    <span className="text-lg font-bold text-amber-700">¥6,600〜</span>
                    <span className="text-xs text-stone-500">/名</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F196301%2F196301.html"
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
          <h3 className="text-base font-bold text-stone-900 mb-3">仙石原観光のおすすめポイント</h3>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>見学時間帯:</strong> 夕方の16時前後は夕日がススキの穂を照らし、一面が黄金色に染まる絶景シャッターチャンスです。</li>
            <li><strong>散策時の服装:</strong> 草原内は未舗装の土道が続くため、歩きやすいスニーカーでの訪問をおすすめします。</li>
            <li><strong>温泉の楽しみ方:</strong> 大涌谷温泉のにごり湯は酸性度が高いため、入浴後は上がり湯でしっかり肌を整えましょう。</li>
          </ul>
        </section>
      </div>
    </article>
  );
}
