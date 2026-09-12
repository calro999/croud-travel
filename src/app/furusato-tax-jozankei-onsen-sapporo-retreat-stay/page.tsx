import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '【定山渓温泉×ふるさと納税】札幌の奥座敷！名湯露天風呂と北海道美食バイキング＆隠れ家リゾートガイド｜ぬくもりの宿ふる川・定山渓ビューホテル・翠山亭',
  description: '札幌中心部から約1時間！国立公園の豊かな渓谷に佇む「定山渓温泉」を楽天ふるさと納税でお得に旅する。民芸と囲炉裏の温もりが愛される「ふる川」、巨大屋内温水プールとビュッフェ自慢の「定山渓ビューホテル」、源泉掛け流しと炭火会席の「翠山亭」を徹底紹介。札幌市トラベルクーポンの使い方も解説。',
  keywords: '定山渓温泉 ふるさと納税,定山渓 旅館 楽天トラベル,ぬくもりの宿ふる川 ふるさと納税,定山渓ビューホテル クーポン,札幌市 ふるさと納税 宿泊',
  openGraph: {
    title: '【定山渓温泉×ふるさと納税】札幌の奥座敷！名湯露天風呂と北海道美食バイキング＆隠れ家リゾートガイド｜ぬくもりの宿ふる川・定山渓ビューホテル・翠山亭',
    description: '札幌中心部から約1時間！国立公園の豊かな渓谷に佇む「定山渓温泉」を楽天ふるさと納税でお得に旅する。民芸と囲炉裏の温もりが愛される「ふる川」、巨大屋内温水プールとビュッフェ自慢の「定山渓ビューホテル」、源泉掛け流しと炭火会席の「翠山亭」を徹底紹介。札幌市トラベルクーポンの使い方も解説。',
    type: 'article',
    url: 'https://croud-travel.pages.dev/furusato-tax-jozankei-onsen-sapporo-retreat-stay',
  },
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-jozankei-onsen-sapporo-retreat-stay',
  },
};

export default function FurusatoTaxArticle() {
  return (
    <main className="min-h-screen bg-stone-50 text-stone-900 leading-relaxed font-sans">
      {/* ヒーローヘッダー */}
      <header className="relative bg-gradient-to-br from-stone-900 via-amber-950 to-stone-900 text-amber-50 py-16 px-4 md:px-8 border-b border-amber-900/50 shadow-2xl">
        <div className="max-w-4xl mx-auto space-y-4 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold tracking-wider border border-amber-400/30 mb-2">
            <span>楽天ふるさと納税 宿泊クーポン完全攻略</span>
            <span>•</span>
            <span>自治体公認 宿泊割引</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-tight text-white font-serif leading-tight">
            【定山渓温泉×ふるさと納税】札幌の奥座敷！名湯露天風呂と北海道美食バイキング＆隠れ家リゾートガイド｜ぬくもりの宿ふる川・定山渓ビューホテル・翠山亭
          </h1>
          <p className="text-stone-300 text-sm md:text-base max-w-2xl mx-auto pt-2 leading-relaxed">
            札幌中心部から約1時間！国立公園の豊かな渓谷に佇む「定山渓温泉」を楽天ふるさと納税でお得に旅する。民芸と囲炉裏の温もりが愛される「ふる川」、巨大屋内温水プールとビュッフェ自慢の「定山渓ビューホテル」、源泉掛け流しと炭火会席の「翠山亭」を徹底紹介。札幌市トラベルクーポンの使い方も解説。
          </p>
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4 text-xs text-stone-400">
            <span>対象自治体: <strong className="text-amber-300">北海道札幌市</strong></span>
            <span>•</span>
            <span>還元率: 寄付額の最大30%</span>
            <span>•</span>
            <span>有効期限: クーポン獲得から3年間</span>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 space-y-12">
        {/* リード文セクション */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-stone-200/80 space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 border-l-4 border-amber-700 pl-4">
            白樺揺れる渓谷の静寂、湯煙に包まれる札幌の奥座敷——定山渓温泉で味わう極上の北海道ステイ
          </h2>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            札幌市中心部から車でわずか1時間足らず。豊平川の上流、支笏洞爺国立公園の深い森と渓谷に抱かれた定山渓温泉は、「札幌の奥座敷」として150年以上の歴史を紡いできた北海道屈指の名湯です。慶応2年に修験僧・美泉定山がアイヌの人々の案内で泉源に出会ったことから始まり、ナトリウム塩化物泉の湯は塩分が肌を包んで湯冷めしにくく、体の芯から温まる「熱の湯」として親しまれています。
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            定山渓の魅力は、春の新緑、夏の爽涼、秋の全山紅葉、そして冬の幻想的な雪見露天風呂と、四季折々で劇的に姿を変える圧倒的な自然景観にあります。さらに道産の新鮮な魚介、十勝産和牛、季節の野菜など、北海道の美味をふんだんに味わえる名宿が勢揃い。札幌市へのふるさと納税を利用すれば、30%相当のトラベルクーポンにより憧れの高級旅館やリゾートホテルにお得に宿泊でき、札幌観光と組み合わせた最高の北海道旅行が叶います。
          </p>
          <div className="bg-amber-50 rounded-2xl p-4 sm:p-5 border border-amber-200/80 text-amber-950 text-xs sm:text-sm space-y-2">
            <h3 className="font-bold text-amber-900 flex items-center gap-2">
              <span>💡</span> この記事でわかること
            </h3>
            <ul className="grid sm:grid-cols-2 gap-2 text-stone-800 list-disc list-inside">
              <li>ふるさと納税で泊まれる名門宿のリアルな魅力と特徴</li>
              <li>楽天トラベルクーポンを使った最大割引予約の手順</li>
              <li>失敗しない現地観光モデルルート＆名物グルメ</li>
              <li>予約済みでも間に合う「クーポンあとから適用」のやり方</li>
            </ul>
          </div>
        </section>

        {/* 楽天トラベル クーポン獲得バナー導線 */}
        <div className="bg-gradient-to-r from-red-600 via-rose-600 to-amber-600 text-white rounded-2xl p-6 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <p className="text-xs uppercase tracking-widest font-bold text-amber-200">Rakuten Travel Furusato Tax</p>
            <h3 className="text-lg sm:text-xl font-bold font-serif">北海道札幌市のふるさと納税クーポンをチェック</h3>
            <p className="text-xs text-rose-100">寄付額の最大30%オフ！3年間有効・予約済み日程にも適用可能</p>
          </div>
          <a
            href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 bg-white text-rose-700 font-extrabold px-6 py-3 rounded-xl shadow hover:bg-stone-100 transition text-sm flex items-center gap-1.5"
          >
            <span>クーポン一覧を見る</span>
            <span>→</span>
          </a>
        </div>

        {/* 厳選ホテル徹底解剖 */}
        <section className="space-y-10">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-stone-900">
              ふるさと納税で泊まる厳選名宿3選
            </h2>
            <p className="text-stone-600 text-xs sm:text-sm">
              実際に楽天トラベルで圧倒的な高評価を獲得している名門ホテル・老舗旅館をピックアップ
            </p>
          </div>


          {/* ホテル 1 */}
          <article className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200/80 transition hover:shadow-md">
            <div className="relative aspect-video sm:aspect-[16/9] w-full overflow-hidden bg-stone-100">
              <img
                src="https://img.travel.rakuten.co.jp/share/HOTEL/1037/1037.jpg"
                alt="定山渓温泉　ぬくもりの宿　ふる川"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第1選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.64（口コミ 1391件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">北海道札幌市</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  定山渓温泉　ぬくもりの宿　ふる川
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  囲炉裏の炭火と民芸の温もりに包まれる人気湯宿！百松庵の贅沢露天風呂と手作り燻製・北海道会席
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  定山渓温泉 ぬくもりの宿 ふる川 —— 古民家風の落ち着いた空間と、ふるさとの温もりを感じるおもてなし
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 大浴場と特別フロア専用「百松庵」の極上湯浴み
                    </h5>
                    <p className="text-stone-600 leading-relaxed">石と木をふんだんに使った情緒ある大浴場に加え、高層階フロア宿泊者専用の温泉浴場「百松庵」を完備。四季折々の定山渓の山並みを望みながら、静寂の中で源泉掛け流しを愉しめます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 囲炉裏ラウンジで味わう温泉卵と甘酒サービス
                    </h5>
                    <p className="text-stone-600 leading-relaxed">館内中央には本物の囲炉裏があり、焼きマシュマロや温泉卵、手作りの甘酒やワインが振る舞われる温かなおもてなし。看板犬とのふれあいも宿泊客の心を和ませます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 北海道の旬の滋味を凝縮した「山ふかしまごころ会席」
                    </h5>
                    <p className="text-stone-600 leading-relaxed">近郊農家から届く新鮮野菜、近海で揚がる旬魚、自家製の燻製や漬物など、手間ひまかけた手作り料理が並びます。素材本来の旨味を最大限に引き出した優しい味わいが大人気です。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.64点、口コミ1300件超。「どこか懐かしく温かいサービスに感動」「朝食の手作りお惣菜がどれも絶品」など、ホスピタリティの高さでリピーターが絶えません。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div>住所: 北海道 札幌市南区定山渓温泉西4-353</div>
                <div>最寄り駅・アクセス: じょうてつバス定山渓線定山渓湯の町下車すぐ。無料送迎バス毎日１便運行／大通西１丁目テレビ塔北向かい出発。事前予約制。</div>
                <div>参考料金: <span className="font-bold text-stone-800">¥16,800〜</span></div>
                <div>ホテル番号: No.1037</div>
              </div>

              {/* 予約プラン確認ボタン */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D1037"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-bold py-3 px-6 rounded-xl shadow transition text-sm flex items-center justify-center gap-2"
                >
                  <span>楽天トラベルで空室・プランを見る</span>
                  <span>→</span>
                </a>
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center bg-amber-100 hover:bg-amber-200 text-amber-900 font-semibold py-3 px-6 rounded-xl transition text-sm flex items-center justify-center gap-1.5"
                >
                  <span>ふるさと納税クーポン獲得</span>
                </a>
              </div>
            </div>
          </article>

          {/* ホテル 2 */}
          <article className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200/80 transition hover:shadow-md">
            <div className="relative aspect-video sm:aspect-[16/9] w-full overflow-hidden bg-stone-100">
              <img
                src="https://img.travel.rakuten.co.jp/share/HOTEL/192780/192780.jpg"
                alt="エグゼクティブスイート翠嶺（定山渓ビューホテル内）"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第2選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.43（口コミ 100件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">北海道札幌市</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  エグゼクティブスイート翠嶺（定山渓ビューホテル内）
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  総面積4000平米の巨大屋内温水プール「水の王国ラグーン」！絶景展望風呂と豪華北海道ビュッフェ
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  定山渓ビューホテル（エグゼクティブスイート翠嶺） —— ファミリーから特別な記念日まで。エンターテインメント満載の巨大リゾート
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 北海道最大級の温水アミューズメント「水の王国ラグーン」
                    </h5>
                    <p className="text-stone-600 leading-relaxed">波の出るプールや流れるプール、スプラッシュリバーなど、一年中天候を気にせず楽しめる巨大プール施設。子どもから大人まで大はしゃぎできる北海道屈指の人気施設です。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 地上60mの最上階展望大浴場「星天」
                    </h5>
                    <p className="text-stone-600 leading-relaxed">ホテル最上階に位置するパノラマ大浴場。定山渓の渓谷と満天の星空を見下ろす圧倒的なスケール感の露天風呂で、開放感に満ちた入浴が楽しめます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> エグゼクティブスイート翠嶺でのラグジュアリーステイ
                    </h5>
                    <p className="text-stone-600 leading-relaxed">近年誕生した専用スイートフロア「翠嶺」では、広々とした客室、専用ラウンジ、厳選素材のプレミアムビュッフェや会席を用意。上質な大人旅にも対応しています。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.43点。プールの圧倒的な楽しさ、ライブ感あふれる豪華ビュッフェ、そしてリニューアルされたスイートルームの上質な快適さに高い支持が集まっています。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div>住所: 北海道 札幌市南区定山渓温泉東2丁目 定山渓ビューホテル15-16F</div>
                <div>最寄り駅・アクセス: 札幌駅北口⇔ホテル往復無料シャトルバス運行（要予約）。新千歳空港→札幌駅→宿は公共交通機関で約110分。</div>
                <div>参考料金: <span className="font-bold text-stone-800">¥23,700〜</span></div>
                <div>ホテル番号: No.192780</div>
              </div>

              {/* 予約プラン確認ボタン */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D192780"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-bold py-3 px-6 rounded-xl shadow transition text-sm flex items-center justify-center gap-2"
                >
                  <span>楽天トラベルで空室・プランを見る</span>
                  <span>→</span>
                </a>
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center bg-amber-100 hover:bg-amber-200 text-amber-900 font-semibold py-3 px-6 rounded-xl transition text-sm flex items-center justify-center gap-1.5"
                >
                  <span>ふるさと納税クーポン獲得</span>
                </a>
              </div>
            </div>
          </article>

          {/* ホテル 3 */}
          <article className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200/80 transition hover:shadow-md">
            <div className="relative aspect-video sm:aspect-[16/9] w-full overflow-hidden bg-stone-100">
              <img
                src="https://img.travel.rakuten.co.jp/share/HOTEL/875/875.jpg"
                alt="定山渓温泉　定山渓第一寶亭留　翠山亭"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第3選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.42（口コミ 1481件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">北海道札幌市</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  定山渓温泉　定山渓第一寶亭留　翠山亭
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  創業以来守り続ける自家源泉3本のブレンド名湯！全客室に天然温泉展望風呂を備えた極上隠れ家
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  定山渓第一寶亭留 翠山亭 —— 湯と食の贅を極める伝統旅館。プライベートな展望風呂と炭火会席
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 濃厚な自家源泉を惜しみなく注ぐ多彩な湯処
                    </h5>
                    <p className="text-stone-600 leading-relaxed">温度の異なる3本の自家源泉を巧みにブレンドし、濃厚な成分を肌で実感できる名湯。大浴場「湯の蔵」のほか、森に佇む貸切露天風呂など、温泉好きを唸らせる設備が充実。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 客室で心ゆくまで源泉を独占できる展望風呂付き客室
                    </h5>
                    <p className="text-stone-600 leading-relaxed">多くの客室に源泉掛け流しの展望風呂や檜風呂を設置。誰にも気兼ねなく、好きな時に何度でも定山渓の名湯に浸かる贅沢が味わえます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 北海道の極上素材を目の前で焼き上げる炭火会席「桑乃木」
                    </h5>
                    <p className="text-stone-600 leading-relaxed">白老牛やタラバガニ、エゾアワビなど、北海道が誇る最高峰の食材を炭火で香ばしく焼き上げる贅沢会席。器や盛り付けにも職人の技が光ります。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.42点、口コミ1400件超。客室温泉風呂の素晴らしさ、炭火会席の美味しさと丁寧なサービス、静かで落ち着いた大人の雰囲気が高く評価されています。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div>住所: 北海道 札幌市南区定山渓温泉西3-105</div>
                <div>最寄り駅・アクセス: 札幌より無料送迎バス運行（要予約）／ＪＲ札幌駅より車で60分／新千歳空港より車で約2時間</div>
                <div>参考料金: <span className="font-bold text-stone-800">¥16,286〜</span></div>
                <div>ホテル番号: No.875</div>
              </div>

              {/* 予約プラン確認ボタン */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D875"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-bold py-3 px-6 rounded-xl shadow transition text-sm flex items-center justify-center gap-2"
                >
                  <span>楽天トラベルで空室・プランを見る</span>
                  <span>→</span>
                </a>
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center bg-amber-100 hover:bg-amber-200 text-amber-900 font-semibold py-3 px-6 rounded-xl transition text-sm flex items-center justify-center gap-1.5"
                >
                  <span>ふるさと納税クーポン獲得</span>
                </a>
              </div>
            </div>
          </article>
        </section>

        {/* 周辺観光・グルメガイド */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-stone-200/80 space-y-6">
          <h2 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 border-l-4 border-amber-700 pl-4">
            定山渓温泉街の散策・自然アクティビティ＆札幌観光モデルコース
          </h2>
          <div className="grid gap-4">

            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/60 space-y-2">
              <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                <span className="text-amber-600">◆</span> 二見吊橋・定山渓自然の村と紅葉・雪灯路
              </h3>
              <p className="text-stone-700 text-sm leading-relaxed">豊平川にかかる真っ赤な「二見吊橋」は定山渓随一のビュースポット。秋には全山が黄金色と紅に染まり、冬には無数のスノーキャンドルが灯る「雪灯路（ゆきとうろ）」が開催され、幻想的な銀世界を楽しめます。</p>
            </div>

            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/60 space-y-2">
              <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                <span className="text-amber-600">◆</span> 足湯めぐりと定山渓名物「温泉まんじゅう」
              </h3>
              <p className="text-stone-700 text-sm leading-relaxed">温泉街のあちこちに無料の足湯や手湯が点在。元祖かっぱ焼きや、大黒屋商店の蒸したて温泉まんじゅうを食べ歩きながら、のんびりと川沿いを散策するのが定番の楽しみ方です。</p>
            </div>

            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/60 space-y-2">
              <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                <span className="text-amber-600">◆</span> 豊平峡ダムと札幌市内観光（すすきの・大通公園）
              </h3>
              <p className="text-stone-700 text-sm leading-relaxed">定山渓から電気バスで行く「豊平峡ダム」は、日本屈指の紅葉名所として名高い大パノラマ。また、車で1時間の札幌市内へ移動して時計台やすすきのグルメ、大通公園のイベントと組み合わせるのもおすすめです。</p>
            </div>
          </div>
        </section>

        {/* ふるさと納税活用ステップ */}
        <section className="bg-gradient-to-br from-amber-900 via-stone-900 to-stone-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-amber-300 font-semibold">How to Use Coupon</span>
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-amber-50">
              札幌市ふるさと納税×楽天トラベルクーポン活用手順
            </h2>
            <p className="text-stone-300 text-xs sm:text-sm">
              初めての方でも迷わず利用できる3ステップ。予約済みのプランにも後から適用可能です。
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 text-xs sm:text-sm">

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/10 space-y-2">
              <div className="font-bold text-amber-300 text-sm">Step 1: 楽天ふるさと納税で「札幌市」のクーポンを獲得</div>
              <p className="text-stone-200 leading-relaxed">楽天ふるさと納税で「北海道札幌市」のトラベルクーポン（寄付額の30%相当補助）を申し込みます。寄付完了後、即座に楽天アカウントへ付与されます。</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/10 space-y-2">
              <div className="font-bold text-amber-300 text-sm">Step 2: 3年間の有効期間内でベストシーズンを予約</div>
              <p className="text-stone-200 leading-relaxed">クーポンの有効期限は3年間。秋の紅葉シーズンや冬の雪まつり・雪見露天の時期、夏の避暑など、お好みの季節に合わせてじっくりプランを選べます。</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/10 space-y-2">
              <div className="font-bold text-amber-300 text-sm">Step 3: 楽天トラベルで定山渓の宿を予約しクーポン割引を適用</div>
              <p className="text-stone-200 leading-relaxed">ふる川、定山渓ビューホテル、翠山亭などの対象宿を予約する際、確認画面でクーポンを選択。宿泊代金から30%相当額がダイレクトに値引きされます。</p>
            </div>
          </div>

          <div className="text-center pt-2">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-amber-500 text-white font-extrabold px-8 py-3.5 rounded-xl shadow-lg hover:opacity-95 transition"
            >
              <span>楽天ふるさと納税トラベルクーポンを獲得する</span>
              <span>→</span>
            </a>
          </div>
        </section>

        {/* 内部リンク・ハブ導線 */}
        <section className="border-t border-stone-200 pt-8 space-y-4">
          <h3 className="text-base sm:text-lg font-bold font-serif text-stone-900">
            関連するふるさと納税トラベル特集
          </h3>
          <ul className="grid sm:grid-cols-2 gap-3 text-xs sm:text-sm text-stone-600">
            <li>
              <Link href="/travel-savings-guide" className="hover:text-amber-800 underline flex items-center gap-1.5 py-1">
                <span>▸</span> ふるさと納税×旅行 完全攻略ハブページトップ
              </Link>
            </li>
            <li>
              <Link href="/furusato-tax-travel-after-booking-discount-guide" className="hover:text-amber-800 underline flex items-center gap-1.5 py-1">
                <span>▸</span> 予約済みでも間に合う！楽天トラベル「あとから適用」ガイド
              </Link>
            </li>
            <li>
              <Link href="/furusato-tax-travel-beginners-complete-guide" className="hover:text-amber-800 underline flex items-center gap-1.5 py-1">
                <span>▸</span> 超初心者向け ふるさと納税で旅行に安く泊まるマニュアル
              </Link>
            </li>
            <li>
              <Link href="/furusato-tax-kinosaki-onsen-sotoyu-crab-stay" className="hover:text-amber-800 underline flex items-center gap-1.5 py-1">
                <span>▸</span> 城崎温泉 外湯めぐり＆松葉ガニ・但馬牛ステイ特集
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
