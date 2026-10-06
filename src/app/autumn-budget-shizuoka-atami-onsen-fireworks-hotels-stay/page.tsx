import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '【秋の熱海温泉×格安】海上花火大会と相模湾絶景！1泊4,000円台〜のコスパ最強おすすめ温泉宿5選【2026最新】',
  description: '秋の澄んだ夜空を彩る「熱海海上花火大会」と熱海梅園の日本一遅い紅葉！東京から新幹線40分で気軽に行ける熱海温泉。オーシャンビュー展望風呂や源泉かけ流し温泉付きで1泊4,000円〜6,000円台で泊まれる格安名宿5選。ホテルリゾーピア、レクトーレ熱海小嵐を徹底比較！',
  keywords: '熱海温泉 格安 宿, 熱海 花火大会 宿泊 安い, 熱海 オーシャンビュー ホテル, 熱海梅園 紅葉, ホテルリゾーピア熱海, レクトーレ熱海小嵐',
  openGraph: {
    title: '【秋の熱海温泉×格安】海上花火大会と相模湾絶景！1泊4,000円台〜のコスパ最強おすすめ温泉宿5選【2026最新】',
    description: '秋の熱海海上花火大会と相模湾絶景！1泊4,000円台〜泊まれる熱海温泉のコスパ最強おすすめ宿5選。',
    type: 'article',
    url: 'https://croud-travel.com/autumn-budget-shizuoka-atami-onsen-fireworks-hotels-stay',
  }
};

export default function AtamiBudgetAutumnPage() {
  return (
    <article className="min-h-screen bg-stone-50 text-stone-800 pb-20 font-sans">
      <div className="relative h-[480px] w-full overflow-hidden bg-stone-900">
        <Image
          src="https://img.travel.rakuten.co.jp/share/HOTEL/50212/50212.jpg"
          alt="秋の熱海温泉・サンビーチの夜景と相模湾を望む格安リゾートホテル"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12 max-w-5xl mx-auto">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="px-3 py-1 bg-teal-600 text-white text-xs font-bold rounded-full">格安・温泉特集</span>
            <span className="px-3 py-1 bg-stone-800 text-amber-300 text-xs font-medium rounded-full border border-amber-400/30">1泊目安: 4,000円台〜6,000円台</span>
          </div>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4 drop-shadow-md">
            【秋の熱海温泉×格安】海上花火大会と相模湾絶景！1泊4,000円台〜のコスパ最強おすすめ温泉宿5選
          </h1>
          <p className="text-stone-200 text-sm md:text-base max-w-3xl line-clamp-2 md:line-clamp-none">
            三方を山に囲まれたすり鉢状の熱海湾に響き渡る大迫力の秋の海上花火大会。温暖な気候のなか、サンビーチ沿いの夜景散策と豊富な自家源泉を財布に優しい低料金で満喫できる穴場宿をご案内します。
          </p>
        </div>
      </div>

      <nav className="max-w-4xl mx-auto px-4 py-4 text-xs text-stone-500">
        <Link href="/" className="hover:underline text-amber-700">ホーム</Link>
        <span className="mx-2">/</span>
        <span className="text-stone-700 font-medium">熱海温泉格安おすすめ宿5選</span>
      </nav>

      <div className="max-w-4xl mx-auto px-4 mt-6">
        <section className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-stone-200/80 mb-10 leading-relaxed">
          <h2 className="text-xl md:text-2xl font-bold text-stone-900 mb-4 border-l-4 border-teal-600 pl-3">
            澄んだ秋空に咲く海上花火と温暖な熱海温泉の魅力
          </h2>
          <p className="mb-4 text-stone-700">
            熱海海上花火大会は夏だけでなく、10月・11月・12月にも定期開催されています。空気が澄んだ秋の花火は夏以上に鮮明で、山に跳ね返るスタジアムのような大音響は圧巻。浴衣を着て夜風を感じながら見上げる大空中ナイアガラは一生モノの体験です。
          </p>
          <p className="text-stone-700">
            また、11月下旬からは「熱海梅園もみじまつり」が始まり、早咲きの梅と遅い紅葉が同時に見られる珍しい絶景も。首都圏から約40分という気軽さで、週末のプチトリップをリーズナブルに楽しむのに最適です。
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-stone-900 mb-6 flex items-center gap-2">
            <span className="w-2.5 h-6 bg-teal-600 rounded-full inline-block"></span>
            楽天トラベル高評価！熱海温泉の格安・コスパ宿5選
          </h2>

          <div className="space-y-8">

            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-200 flex flex-col md:flex-row hover:shadow-md transition">
              <div className="md:w-5/12 relative h-56 md:h-auto min-h-[220px]">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/50212/50212.jpg"
                  alt="ホテルリゾーピア　熱海"
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
                    <span className="text-amber-500 font-bold text-sm">★ 3.96</span>
                    <span className="text-stone-400 text-xs">(2449件のクチコミ)</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">
                    ホテルリゾーピア　熱海
                  </h3>
                  <p className="text-xs text-stone-500 mb-3">
                    アクセス: 熱海駅 / ＪＲ熱海駅より徒歩約１０分（無料シャトルバスが定時運行）※無料シャトルバス乗り場はフォトギャラリーでご確認下さいませ。
                  </p>
                  <p className="text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed">
                    全てのお部屋と温泉大浴場はオーシャンビュー。自慢の料理と良質の温泉でゆったりお寛ぎください。
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">最安宿泊料金目安</span>
                    <span className="text-lg font-bold text-teal-700">¥4,500〜</span>
                    <span className="text-xs text-stone-500">/名</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F50212%2F50212.html"
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
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/147565/147565.jpg"
                  alt="レクトーレ熱海小嵐（ＴＫＰ　Ｈｏｔｅｌｓ　＆　Ｒｅｓｏｒｔｓ）"
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
                    <span className="text-amber-500 font-bold text-sm">★ 4.12</span>
                    <span className="text-stone-400 text-xs">(171件のクチコミ)</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">
                    レクトーレ熱海小嵐（ＴＫＰ　Ｈｏｔｅｌｓ　＆　Ｒｅｓｏｒｔｓ）
                  </h3>
                  <p className="text-xs text-stone-500 mb-3">
                    アクセス: 熱海駅 / JR東海道線・熱海駅よりお車にて約15分/JR東海道線来宮駅よりお車にて約8分。
                  </p>
                  <p className="text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed">
                    湧き出る天然温泉で癒しのひとときを愉しむ大人のリゾート♪
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">最安宿泊料金目安</span>
                    <span className="text-lg font-bold text-teal-700">¥5,142〜</span>
                    <span className="text-xs text-stone-500">/名</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F147565%2F147565.html"
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
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/29878/29878.jpg"
                  alt="熱海温泉ホテル　夢いろは"
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
                    <span className="text-amber-500 font-bold text-sm">★ 4.09</span>
                    <span className="text-stone-400 text-xs">(2811件のクチコミ)</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">
                    熱海温泉ホテル　夢いろは
                  </h3>
                  <p className="text-xs text-stone-500 mb-3">
                    アクセス: 熱海駅 / ＪＲ熱海駅より徒歩１０分ほど　タクシーならたった5分
                  </p>
                  <p className="text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed">
                    青山湯の源泉蒸し体験がおすすめ！炊きたてを味わう釜飯御膳が自慢！源泉掛け流し貸切露天風呂で癒される
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">最安宿泊料金目安</span>
                    <span className="text-lg font-bold text-teal-700">¥5,350〜</span>
                    <span className="text-xs text-stone-500">/名</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F29878%2F29878.html"
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
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/75267/75267.jpg"
                  alt="熱海温泉　ウオミサキホテル（伊東園ホテルズ）"
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
                    <span className="text-amber-500 font-bold text-sm">★ 3.69</span>
                    <span className="text-stone-400 text-xs">(1005件のクチコミ)</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">
                    熱海温泉　ウオミサキホテル（伊東園ホテルズ）
                  </h3>
                  <p className="text-xs text-stone-500 mb-3">
                    アクセス: 熱海駅 / ＪＲ東海道新幹線　熱海駅よりバスに乗車、マリンスパあたみ下車で徒歩1分
                  </p>
                  <p className="text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed">
                    熱海港前、熱海の旅を満喫できる宿ウオミサキホテル。
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">最安宿泊料金目安</span>
                    <span className="text-lg font-bold text-teal-700">¥5,698〜</span>
                    <span className="text-xs text-stone-500">/名</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F75267%2F75267.html"
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
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/15680/15680.jpg"
                  alt="熱海温泉　ホテル　サンミ倶楽部"
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
                    <span className="text-amber-500 font-bold text-sm">★ 3.88</span>
                    <span className="text-stone-400 text-xs">(986件のクチコミ)</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">
                    熱海温泉　ホテル　サンミ倶楽部
                  </h3>
                  <p className="text-xs text-stone-500 mb-3">
                    アクセス: 熱海駅 / JR東海道線『熱海駅』より東海バス『マリンスパあたみ』下車　徒歩1分
                  </p>
                  <p className="text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed">
                    オーシャンビュー客室に海一望の温泉も人気！館内には24 Hコンビニ有り♪
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">最安宿泊料金目安</span>
                    <span className="text-lg font-bold text-teal-700">¥6,352〜</span>
                    <span className="text-xs text-stone-500">/名</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F15680%2F15680.html"
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
          <h3 className="text-base font-bold text-stone-900 mb-3">熱海秋旅の攻略ポイント</h3>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>熱海海上花火大会の観覧場所:</strong> サンビーチの砂浜や親水公園は打ち上げ場所の正面。宿をサンビーチ徒歩圏にしておくと混雑知らずで観覧できます。</li>
            <li><strong>熱海銀座商店街の食べ歩き:</strong> レトロ可愛い「熱海プリン」や揚げたて磯揚げ、海鮮丼など若い世代に大人気のグルメスポットです。</li>
            <li><strong>アカオフォレスト（ACAO FOREST）:</strong> 相模湾を見下ろす花の丘で、秋バラや絶景隈研吾カフェ「COEDA HOUSE」でのひとときがおすすめです。</li>
          </ul>
        </section>
      </div>
    </article>
  );
}
