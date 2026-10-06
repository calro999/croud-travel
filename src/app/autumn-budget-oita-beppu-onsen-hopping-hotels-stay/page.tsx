import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '【秋の別府温泉×格安】地獄めぐりと鶴見岳紅葉！源泉かけ流し1泊3,000円台〜のコスパ最強おすすめ宿5選【2026最新】',
  description: '湧出量日本一を誇るおんせん県おおいた・別府温泉！鶴見岳ロープウェイの紅葉パノラマと湯けむり立ちのぼる地獄めぐり。源泉かけ流し温泉付きで1泊3,000円〜6,000円台で泊まれる格安名宿5選。ホテルニューツルタ、清海荘など徹底比較！',
  keywords: '別府温泉 格安 宿, 別府 温泉 素泊まり 安い, 別府 地獄めぐり, 鶴見岳 紅葉, ホテルニューツルタ, 天空湯房 清海荘',
  openGraph: {
    title: '【秋の別府温泉×格安】地獄めぐりと鶴見岳紅葉！源泉かけ流し1泊3,000円台〜のコスパ最強おすすめ宿5選【2026最新】',
    description: '湧出量日本一の別府温泉！源泉かけ流し温泉付き1泊3,000円台〜のコスパ最強おすすめ宿5選。',
    type: 'article',
    url: 'https://croud-travel.com/autumn-budget-oita-beppu-onsen-hopping-hotels-stay',
  }
};

export default function BeppuBudgetAutumnPage() {
  return (
    <article className="min-h-screen bg-stone-50 text-stone-800 pb-20 font-sans">
      <div className="relative h-[480px] w-full overflow-hidden bg-stone-900">
        <Image
          src="https://img.travel.rakuten.co.jp/share/HOTEL/28628/28628.jpg"
          alt="秋の別府温泉・海を望む展望露天風呂と立ちのぼる湯けむり"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12 max-w-5xl mx-auto">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="px-3 py-1 bg-teal-600 text-white text-xs font-bold rounded-full">格安・温泉特集</span>
            <span className="px-3 py-1 bg-stone-800 text-amber-300 text-xs font-medium rounded-full border border-amber-400/30">1泊目安: 3,000円台〜6,000円台</span>
          </div>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4 drop-shadow-md">
            【秋の別府温泉×格安】地獄めぐりと鶴見岳紅葉！源泉かけ流し1泊3,000円台〜のコスパ最強おすすめ宿5選
          </h1>
          <p className="text-stone-200 text-sm md:text-base max-w-3xl line-clamp-2 md:line-clamp-none">
            街のいたるところから湯けむりが立ちのぼる世界屈指の温泉天国・別府。標高1,375mの鶴見岳を彩る三段紅葉と、別府湾を一望する展望露天風呂を1泊3,000円台から楽しめる驚異のコスパ宿をご案内します。
          </p>
        </div>
      </div>

      <nav className="max-w-4xl mx-auto px-4 py-4 text-xs text-stone-500">
        <Link href="/" className="hover:underline text-amber-700">ホーム</Link>
        <span className="mx-2">/</span>
        <span className="text-stone-700 font-medium">別府温泉格安宿5選</span>
      </nav>

      <div className="max-w-4xl mx-auto px-4 mt-6">
        <section className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-stone-200/80 mb-10 leading-relaxed">
          <h2 className="text-xl md:text-2xl font-bold text-stone-900 mb-4 border-l-4 border-teal-600 pl-3">
            湯量日本一の恵みを「低価格・素泊まり」で満喫する湯治スタイル
          </h2>
          <p className="mb-4 text-stone-700">
            別府温泉郷（別府八湯）の魅力は、何と言っても圧倒的な湯量と泉質の多彩さ。市内には100円〜数百円で入れる共同浴場が点在し、宿に安く泊まって温泉街の湯めぐりを楽しむスタイルが古くから定着しています。
          </p>
          <p className="text-stone-700">
            夕食は宿に縛られず、温泉の蒸気で野菜や海鮮を一気に蒸し上げる「地獄蒸し料理」や、名物とり天、大分豊後牛の居酒屋などを自由に巡るのがツウの楽しみ方。秋の心地よい海風を感じながらの温泉ステイをお楽しみください。
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-stone-900 mb-6 flex items-center gap-2">
            <span className="w-2.5 h-6 bg-teal-600 rounded-full inline-block"></span>
            楽天トラベル高評価！別府温泉の格安名宿5選
          </h2>

          <div className="space-y-8">

            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-200 flex flex-col md:flex-row hover:shadow-md transition">
              <div className="md:w-5/12 relative h-56 md:h-auto min-h-[220px]">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/1938/1938.jpg"
                  alt="別府温泉　ホテルニューツルタ"
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
                    <span className="text-amber-500 font-bold text-sm">★ 4.18</span>
                    <span className="text-stone-400 text-xs">(1271件のクチコミ)</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">
                    別府温泉　ホテルニューツルタ
                  </h3>
                  <p className="text-xs text-stone-500 mb-3">
                    アクセス: 大分駅 / ＪＲ別府駅より徒歩8分。別府ＩＣより車で約15分。駐車場先着順、入庫後21時間最大700円。全室ロビー無料Wi-fi
                  </p>
                  <p className="text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed">
                    別府湾を望む、まちなかに立地。地上20ｍにある大浴場からは別府湾が一望！
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">最安宿泊料金目安</span>
                    <span className="text-lg font-bold text-teal-700">¥3,000〜</span>
                    <span className="text-xs text-stone-500">/名</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F1938%2F1938.html"
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
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/9243/9243.jpg"
                  alt="別府温泉　別府ステーションホテル"
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
                    <span className="text-amber-500 font-bold text-sm">★ 4.09</span>
                    <span className="text-stone-400 text-xs">(2392件のクチコミ)</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">
                    別府温泉　別府ステーションホテル
                  </h3>
                  <p className="text-xs text-stone-500 mb-3">
                    アクセス: 別府（大分）駅 / ＪＲ別府駅が目の前（表玄関　東口）徒歩30秒
                  </p>
                  <p className="text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed">
                    別府駅まで徒歩１分！ 駐車場無料！ 天然温泉掛け流し100％ あり！！
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">最安宿泊料金目安</span>
                    <span className="text-lg font-bold text-teal-700">¥3,000〜</span>
                    <span className="text-xs text-stone-500">/名</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F9243%2F9243.html"
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
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/189223/189223.jpg"
                  alt="別府観光ホテルエース"
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
                    <span className="text-amber-500 font-bold text-sm">★ 4.24</span>
                    <span className="text-stone-400 text-xs">(26件のクチコミ)</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">
                    別府観光ホテルエース
                  </h3>
                  <p className="text-xs text-stone-500 mb-3">
                    アクセス: 別府（大分）駅 / 別府ICから車で約１分、ＪＲ別府駅から車で約１２分、大分空港から車で約４０分
                  </p>
                  <p className="text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed">
                    部屋は広々４０平米以上　添寝のお子様０円！　別府湾を一望できるオーシャンビュールームあり
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">最安宿泊料金目安</span>
                    <span className="text-lg font-bold text-teal-700">¥5,630〜</span>
                    <span className="text-xs text-stone-500">/名</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F189223%2F189223.html"
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
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/28628/28628.jpg"
                  alt="別府温泉　天空湯房　清海荘"
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
                    <span className="text-amber-500 font-bold text-sm">★ 4.37</span>
                    <span className="text-stone-400 text-xs">(629件のクチコミ)</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">
                    別府温泉　天空湯房　清海荘
                  </h3>
                  <p className="text-xs text-stone-500 mb-3">
                    アクセス: 別府（大分）駅 / ＪＲ別府駅～徒歩１5分／別府ＩＣ～お車で１５分
                  </p>
                  <p className="text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed">
                    別府で唯一の別府湾の絶景をお楽しみいただける展望貸切露天風呂を十分ご堪能下さい。
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">最安宿泊料金目安</span>
                    <span className="text-lg font-bold text-teal-700">¥6,050〜</span>
                    <span className="text-xs text-stone-500">/名</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F28628%2F28628.html"
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
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/196409/196409.jpg"
                  alt="別府温泉　ホテル三泉閣"
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
                    <span className="text-amber-500 font-bold text-sm">★ 4.49</span>
                    <span className="text-stone-400 text-xs">(237件のクチコミ)</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">
                    別府温泉　ホテル三泉閣
                  </h3>
                  <p className="text-xs text-stone-500 mb-3">
                    アクセス: 別府（大分）駅 / JR別府駅より徒歩にて約10分（タクシーにて約3分）／別府国際観光港よりタクシーにて約6分／別府ICより車で約10分
                  </p>
                  <p className="text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed">
                    【2025年5月全館リニューアルオープン】別府の歴史と文化が息づく地に新たな温泉リゾート
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">最安宿泊料金目安</span>
                    <span className="text-lg font-bold text-teal-700">¥6,710〜</span>
                    <span className="text-xs text-stone-500">/名</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F196409%2F196409.html"
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
          <h3 className="text-base font-bold text-stone-900 mb-3">別府温泉・秋旅のポイント</h3>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>別府ロープウェイ（鶴見岳）:</strong> 10月中旬から山頂で紅葉が始まり、約1ヶ月かけて山麓へと下りてくる雄大な三段紅葉が見られます。</li>
            <li><strong>べっぷ地獄めぐり:</strong> 海地獄・血の池地獄など7つの地獄を巡る定番コース。海地獄の極楽饅頭や地獄蒸しプリンは必食です。</li>
            <li><strong>竹瓦温泉の砂湯:</strong> 登録有形文化財の風情ある木造浴場で、温かい温泉砂に埋まる名物体験がおすすめです。</li>
          </ul>
        </section>
      </div>
    </article>
  );
}
