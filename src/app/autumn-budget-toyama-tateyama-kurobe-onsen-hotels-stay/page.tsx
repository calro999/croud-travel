import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '秋の富山×格安：立山連峰の三段紅葉と富山湾の白えび・紅ズワイガニ！天然温泉付き1泊4,000円〜6,000円台のコスパ最強ホテル5選「2026最新」',
  description: '立山黒部アルペンルートや黒部峡谷トロッコ電車の紅葉拠点！富山湾の「白えび」や秋解禁の紅ズワイガニを満喫。サウナ＆天然温泉大浴場付きで1泊4,000円〜6,000円台で泊まれる富山駅周辺の格安ホテル5選。富山マンテンホテル、御宿野乃富山を徹底比較！',
  keywords: '富山 格安 ホテル, 富山 天然温泉 ホテル 安い, 立山黒部アルペンルート 紅葉 宿, 富山湾 白えび グルメ, 富山マンテンホテル, 御宿野乃富山',
  openGraph: {
    title: '秋の富山×格安：立山連峰の三段紅葉と富山湾の白えび・紅ズワイガニ！天然温泉付き1泊4,000円〜6,000円台のコスパ最強ホテル5選「2026最新」',
    description: '立山連峰の三段紅葉と富山湾の海の幸！天然温泉付き1泊4,000円〜6,000円台の富山コスパ最強ホテル5選。',
    type: 'article',
    url: 'https://croud-travel.com/autumn-budget-toyama-tateyama-kurobe-onsen-hotels-stay',
  }
};

export default function ToyamaBudgetAutumnPage() {
  return (
    <article className="min-h-screen bg-stone-50 text-stone-800 pb-20 font-sans">
      <div className="relative h-[480px] w-full overflow-hidden bg-stone-900">
        <Image
          src="https://img.travel.rakuten.co.jp/share/HOTEL/153267/153267.jpg"
          alt="秋の富山・立山連峰の冠雪と天然温泉付き格安ホテル"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12 max-w-5xl mx-auto">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="px-3 py-1 bg-teal-600 text-white text-xs font-bold rounded-full">格安・北陸特集</span>
            <span className="px-3 py-1 bg-stone-800 text-amber-300 text-xs font-medium rounded-full border border-amber-400/30">1泊目安: 4,000円台〜6,000円台</span>
          </div>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4 drop-shadow-md">「秋の富山×格安」立山連峰の三段紅葉と富山湾の白えび・紅ズワイガニ！天然温泉付き1泊4,000円〜6,000円台のコスパ最強ホテル5選</h1>
          <p className="text-stone-200 text-sm md:text-base max-w-3xl line-clamp-2 md:line-clamp-none">
            冠雪した立山連峰と山腹の紅葉、山麓の緑が織りなす「三段紅葉」。富山湾の宝石「白えび」や紅ズワイガニの絶品海鮮を味わい、サウナや天然温泉で癒やされる富山駅周辺の格安ホテルをご紹介します。
          </p>
        </div>
      </div>

      <nav className="max-w-4xl mx-auto px-4 py-4 text-xs text-stone-500">
        <Link href="/" className="hover:underline text-amber-700">ホーム</Link>
        <span className="mx-2">/</span>
        <span className="text-stone-700 font-medium">富山格安天然温泉ホテル5選</span>
      </nav>

      <div className="max-w-4xl mx-auto px-4 mt-6">
        <section className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-stone-200/80 mb-10 leading-relaxed">
          <h2 className="text-xl md:text-2xl font-bold text-stone-900 mb-4 border-l-4 border-teal-600 pl-3">
            アルペンルート観光の玄関口「富山駅前ステイ」の賢い選び方
          </h2>
          <p className="mb-4 text-stone-700">
            室堂や黒部ダムを擁する立山黒部アルペンルートは、山頂から山麓へと約1ヶ月半かけて紅葉が降りてくるダイナミックなスケール。山上の山小屋ホテルは予約が困難で高額になりがちですが、富山駅周辺に前泊すれば、始発電車でスムーズにアクセスできます。
          </p>
          <p className="text-stone-700">
            富山駅前には本格的な天然温泉大浴場や露天風呂、サウナを備えた高評価ホテルが集結。富山名物の「富山ブラックラーメン」や回転寿司の白えび・寒ブリを味わい、充実した設備をお得に満喫しましょう。
          </p>
        </section>

        
        {/* 観光地ガイド・公式Wikipedia写真＆解説 */}
        <section className="bg-white rounded-2xl border border-stone-200/90 overflow-hidden shadow-sm mb-10">
          <div className="bg-gradient-to-r from-stone-900 to-stone-800 text-white px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
              <h2 className="text-base md:text-lg font-bold tracking-wide">越中・北アルプス絶景ガイド：雲上の山岳観光ルート・立山黒部アルペンルートの紅葉</h2>
            </div>
            <span className="text-[11px] text-stone-300 bg-white/10 px-2.5 py-0.5 rounded-full border border-white/10">地域名所ガイド</span>
          </div>
          <div className="grid md:grid-cols-12 gap-6 p-6 items-center">
            <div className="md:col-span-5 relative h-56 md:h-64 rounded-xl overflow-hidden bg-stone-100 border border-stone-200/60 shadow-inner">
              <Image
                src="https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4a/DaikanboView.jpg/1280px-DaikanboView.jpg"
                alt="雲上の山岳観光ルート・立山黒部アルペンルートの紅葉"
                fill
                className="object-cover hover:scale-105 transition duration-500"
                sizes="(max-width: 768px) 100vw, 400px"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-2 text-right">
                <span className="text-[10px] text-white/90">写真：Wikimedia Commons</span>
              </div>
            </div>
            <div className="md:col-span-7 space-y-3">
              <h3 className="text-lg md:text-xl font-bold text-stone-900 leading-snug">雲上の山岳観光ルート・立山黒部アルペンルートの紅葉の歴史と見どころ</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">立山黒部アルペンルート（たてやまくろべアルペンルート）は、富山県中新川郡立山町の立山駅と、長野県大町市大字平の扇沢駅とを結ぶ、総延長37.2kmの山岳観光ルートである。1970年（昭和45年）7月1日に命名され、1971年（昭和46年）6月1日に全線が開通した。 なお、電鉄富山駅から立山駅まで、および扇沢駅から長野駅までを含む場合もある。</p>
              <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-400">
                <span>出典: フリー百科事典『ウィキペディア（Wikipedia）』</span>
                <span className="text-teal-700 font-semibold">現地観光・散策推奨スポット</span>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-stone-900 mb-6 flex items-center gap-2">
            <span className="w-2.5 h-6 bg-teal-600 rounded-full inline-block"></span>
            楽天トラベル高評価！富山の天然温泉付き格安ホテル5選
          </h2>

          <div className="space-y-8">

            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-200 flex flex-col md:flex-row hover:shadow-md transition">
              <div className="md:w-5/12 relative h-56 md:h-auto min-h-[220px]">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/1032/1032.jpg"
                  alt="富山マンテンホテル（マンテンホテルグループ）"
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
                    <span className="text-amber-500 font-bold text-sm">★ 4.16</span>
                    <span className="text-stone-400 text-xs">(4273件のクチコミ)</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">
                    富山マンテンホテル（マンテンホテルグループ）
                  </h3>
                  <p className="text-xs text-stone-500 mb-3">
                    アクセス: 富山駅 / 市内路面電車「南富山駅前」行で約5分、桜橋電停下車すぐ（ＪＲ富山駅より徒歩１０分）／富山ＩＣより車で１５分
                  </p>
                  <p className="text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed">
                    ＪＲ富山駅より徒歩１０分／Wi-Fi、有線ＬＡＮ無料接続／展望大浴場
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">最安宿泊料金目安</span>
                    <span className="text-lg font-bold text-teal-700">¥4,680〜</span>
                    <span className="text-xs text-stone-500">/名</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F1032%2F1032.html"
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
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/1504/1504.jpg"
                  alt="コンセプトホテル和休"
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
                    <span className="text-amber-500 font-bold text-sm">★ 4.18</span>
                    <span className="text-stone-400 text-xs">(2934件のクチコミ)</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">
                    コンセプトホテル和休
                  </h3>
                  <p className="text-xs text-stone-500 mb-3">
                    アクセス: 富山駅 / 富山駅南口〈正面口）より線路と平行に右横方向に徒歩3分、富山空港からバスで30分（400円）、富山ICより車で15分
                  </p>
                  <p className="text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed">
                    大浴場と優しい和朝食。畳スペースにベッドのお部屋。富山駅より徒歩3分！
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">最安宿泊料金目安</span>
                    <span className="text-lg font-bold text-teal-700">¥5,000〜</span>
                    <span className="text-xs text-stone-500">/名</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F1504%2F1504.html"
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
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/153267/153267.jpg"
                  alt="天然温泉　剱の湯　御宿　野乃富山（ドーミーイン・御宿野乃　ホテルズグループ）"
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
                    <span className="text-amber-500 font-bold text-sm">★ 4.48</span>
                    <span className="text-stone-400 text-xs">(2290件のクチコミ)</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">
                    天然温泉　剱の湯　御宿　野乃富山（ドーミーイン・御宿野乃　ホテルズグループ）
                  </h3>
                  <p className="text-xs text-stone-500 mb-3">
                    アクセス: 富山駅 / 富山駅より路面電車環状線「大手モール」下車徒歩2分・北陸自動車道『富山ＩＣ』出口より15分
                  </p>
                  <p className="text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed">
                    全館畳敷きの和風ホテル！天然温泉檜風呂付客室もご用意☆ご当地逸品料理「海鮮丼」
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">最安宿泊料金目安</span>
                    <span className="text-lg font-bold text-teal-700">¥5,650〜</span>
                    <span className="text-xs text-stone-500">/名</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F153267%2F153267.html"
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
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/39202/39202.jpg"
                  alt="天然温泉　剱の湯　ドーミーイン富山"
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
                    <span className="text-amber-500 font-bold text-sm">★ 4.34</span>
                    <span className="text-stone-400 text-xs">(7902件のクチコミ)</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">
                    天然温泉　剱の湯　ドーミーイン富山
                  </h3>
                  <p className="text-xs text-stone-500 mb-3">
                    アクセス: 富山駅 / JR富山駅より環状線セントラムで国際会議場前電停下車徒歩2分／富山空港から路線バスで「総曲輪」バス停下車すぐ
                  </p>
                  <p className="text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed">リフレッシュオープン♪男性大浴場の高温サウナには「オートロウリュ」を新たに導入。
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">最安宿泊料金目安</span>
                    <span className="text-lg font-bold text-teal-700">¥5,650〜</span>
                    <span className="text-xs text-stone-500">/名</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F39202%2F39202.html"
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
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/2101/2101.jpg"
                  alt="ホテルルートイン富山駅前"
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
                    <span className="text-amber-500 font-bold text-sm">★ 4.04</span>
                    <span className="text-stone-400 text-xs">(832件のクチコミ)</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">
                    ホテルルートイン富山駅前
                  </h3>
                  <p className="text-xs text-stone-500 mb-3">
                    アクセス: 富山駅 / ＪＲ富山駅南口（中央改札）より徒歩3分。富山地方鉄道富山駅より徒歩4分。富山I.C車で15分。富山西I.C車で25分
                  </p>
                  <p className="text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed">リニューアルオープン！富山駅南口徒歩3分。ＷＯＷＯＷ全室で無料視聴可！
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">最安宿泊料金目安</span>
                    <span className="text-lg font-bold text-teal-700">¥6,750〜</span>
                    <span className="text-xs text-stone-500">/名</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F2101%2F2101.html"
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
          <h3 className="text-base font-bold text-stone-900 mb-3">富山観光のワンポイントアドバイス</h3>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>富山湾鮨の堪能:</strong> 富山駅周辺には富山湾の朝獲れ鮮魚だけを握る「富山湾鮨」提供店が多数あります。</li>
            <li><strong>富岩運河環水公園:</strong> 富山駅から徒歩約10分。「世界一美しいスターバックス」として知られる環水公園の紅葉と夜景は必見です。</li>
            <li><strong>防寒着の準備:</strong> 立山室堂（標高2,450m）は10月ですでに雪が降ることもあります。防寒着を必ず用意して向かいましょう。</li>
          </ul>
        </section>
      </div>
    </article>
  );
}
