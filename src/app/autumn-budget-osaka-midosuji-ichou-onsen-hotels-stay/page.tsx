import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '秋の大阪×格安：御堂筋の黄金イチョウ並木と道頓堀グルメ！天然温泉＆大浴場付き1泊3,000円〜6,000円台のコスパ最強ホテル5選「2026最新」',
  description: '約4kmにわたる御堂筋のイチョウ並木と大阪城公園の紅葉、USJの秋イベント！たこ焼きや串カツのグルメを食べ歩き、地下から湧き出る天然温泉大浴場で寛げる大阪のコスパ最強格安ホテル5選。スーパーホテル花乃井、リーベルホテル大阪などを徹底比較！',
  keywords: '大阪 格安 ホテル, 大阪 天然温泉 ホテル, 御堂筋 イチョウ並木 紅葉, 道頓堀 グルメ 宿, スーパーホテル大阪天然温泉 花乃井, リーベルホテル大阪',
  openGraph: {
    title: '秋の大阪×格安：御堂筋の黄金イチョウ並木と道頓堀グルメ！天然温泉＆大浴場付き1泊3,000円〜6,000円台のコスパ最強ホテル5選「2026最新」',
    description: '御堂筋のイチョウ並木と道頓堀グルメ！天然温泉付き1泊3,000円〜6,000円台のコスパ最強大阪ホテル5選。',
    type: 'article',
    url: 'https://croud-travel.com/autumn-budget-osaka-midosuji-ichou-onsen-hotels-stay',
  }
};

export default function OsakaBudgetAutumnPage() {
  return (
    <article className="min-h-screen bg-stone-50 text-stone-800 pb-20 font-sans">
      <div className="relative h-[480px] w-full overflow-hidden bg-stone-900">
        <Image
          src="https://img.travel.rakuten.co.jp/share/HOTEL/217/217.jpg"
          alt="秋の大阪・御堂筋の黄金イチョウ並木と天然温泉付き格安ホテル"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12 max-w-5xl mx-auto">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="px-3 py-1 bg-teal-600 text-white text-xs font-bold rounded-full">格安・関西特集</span>
            <span className="px-3 py-1 bg-stone-800 text-amber-300 text-xs font-medium rounded-full border border-amber-400/30">1泊目安: 3,000円台〜6,000円台</span>
          </div>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4 drop-shadow-md">「秋の大阪×格安」御堂筋の黄金イチョウ並木と道頓堀グルメ！天然温泉＆大浴場付き1泊3,000円〜6,000円台のコスパ最強ホテル5選</h1>
          <p className="text-stone-200 text-sm md:text-base max-w-3xl line-clamp-2 md:line-clamp-none">
            梅田から難波まで続く約4kmの黄金ロード「御堂筋のイチョウ並木」。大阪城の紅葉や道頓堀・新世界のソウルフードを食べ歩き、地下1,000mから湧く本物の天然温泉で寛げる大阪の掘り出し物ホテルをご紹介します。
          </p>
        </div>
      </div>

      <nav className="max-w-4xl mx-auto px-4 py-4 text-xs text-stone-500">
        <Link href="/" className="hover:underline text-amber-700">ホーム</Link>
        <span className="mx-2">/</span>
        <span className="text-stone-700 font-medium">大阪格安天然温泉ホテル5選</span>
      </nav>

      <div className="max-w-4xl mx-auto px-4 mt-6">
        <section className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-stone-200/80 mb-10 leading-relaxed">
          <h2 className="text-xl md:text-2xl font-bold text-stone-900 mb-4 border-l-4 border-teal-600 pl-3">
            大都会の真ん中で「天然温泉に浸かりながら安く泊まる」贅沢
          </h2>
          <p className="mb-4 text-stone-700">
            秋の大阪を象徴する景色といえば、御堂筋を埋め尽くす約970本のイチョウ並木。11月中旬には鮮やかな黄金色に染まり、11月上旬からは夜間イルミネーションもスタートして幻想的な光のストリートへと姿を変えます。
          </p>
          <p className="text-stone-700">
            観光やUSJ、お笑いライブを思い切り満喫した後は、都心に湧く本格天然温泉へ。1泊3,000円〜6,000円台というリーズナブルな価格ながら、露天風呂やサウナを備えた高スペック宿で旅の疲れを完全にリセットできます。
          </p>
        </section>

        
        {/* 観光地ガイド・公式Wikipedia写真＆解説 */}
        <section className="bg-white rounded-2xl border border-stone-200/90 overflow-hidden shadow-sm mb-10">
          <div className="bg-gradient-to-r from-stone-900 to-stone-800 text-white px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
              <h2 className="text-base md:text-lg font-bold tracking-wide">浪速・秋の街並みガイド：黄金色に輝くイチョウ並木・大阪のメインストリート御堂筋</h2>
            </div>
            <span className="text-[11px] text-stone-300 bg-white/10 px-2.5 py-0.5 rounded-full border border-white/10">地域名所ガイド</span>
          </div>
          <div className="grid md:grid-cols-12 gap-6 p-6 items-center">
            <div className="md:col-span-5 relative h-56 md:h-64 rounded-xl overflow-hidden bg-stone-100 border border-stone-200/60 shadow-inner">
              <Image
                src="https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9d/The_skyscraper_district_of_Yodoyabashi.jpg/1280px-The_skyscraper_district_of_Yodoyabashi.jpg"
                alt="黄金色に輝くイチョウ並木・大阪のメインストリート御堂筋"
                fill
                className="object-cover hover:scale-105 transition duration-500"
                sizes="(max-width: 768px) 100vw, 400px"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-2 text-right">
                <span className="text-[10px] text-white/90">写真：Wikimedia Commons</span>
              </div>
            </div>
            <div className="md:col-span-7 space-y-3">
              <h3 className="text-lg md:text-xl font-bold text-stone-900 leading-snug">黄金色に輝くイチョウ並木・大阪のメインストリート御堂筋の歴史と見どころ</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">御堂筋（みどうすじ）は、大阪市の都心部を南北に縦断する街路。国道25号（国道26号・国道165号を重複）および国道176号の各一部に指定されている。現代大阪における南北の大都市基軸幹線、メインストリートである。</p>
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
            楽天トラベル高評価！大阪の天然温泉付き格安ホテル5選
          </h2>

          <div className="space-y-8">

            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-200 flex flex-col md:flex-row hover:shadow-md transition">
              <div className="md:w-5/12 relative h-56 md:h-auto min-h-[220px]">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/52852/52852.jpg"
                  alt="天然温泉　秀吉ゆかりの天下取りの湯　スーパーホテルＪＲ新大阪東口"
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
                    <span className="text-amber-500 font-bold text-sm">★ 4.21</span>
                    <span className="text-stone-400 text-xs">(3474件のクチコミ)</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">
                    天然温泉　秀吉ゆかりの天下取りの湯　スーパーホテルＪＲ新大阪東口
                  </h3>
                  <p className="text-xs text-stone-500 mb-3">
                    アクセス: 新大阪駅 / JR新大阪駅 【東口】から徒歩約5分、地下鉄御堂筋線新大阪駅から徒歩10分、大阪梅田・なんば・天王寺へもアクセス抜群
                  </p>
                  <p className="text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed">
                    大阪駅まで１駅！京セラドーム、ＵＳＪまで約30分　朝食無料・天然温泉（男女入れ替え制）
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">最安宿泊料金目安</span>
                    <span className="text-lg font-bold text-teal-700">¥3,340〜</span>
                    <span className="text-xs text-stone-500">/名</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F52852%2F52852.html"
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
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/217/217.jpg"
                  alt="湯元「花乃井」スーパーホテル大阪天然温泉"
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
                    <span className="text-amber-500 font-bold text-sm">★ 4.39</span>
                    <span className="text-stone-400 text-xs">(6970件のクチコミ)</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">
                    湯元「花乃井」スーパーホテル大阪天然温泉
                  </h3>
                  <p className="text-xs text-stone-500 mb-3">
                    アクセス: 阿波座駅 / 地下鉄中央線・千日前線【阿波座駅】出口⑨右へ徒歩約5分/JR【大阪駅】大阪市営バス88系天保山行「土佐堀三丁目」下車
                  </p>
                  <p className="text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed">
                    【】リニューアルオープン！本物の天然温泉とオートロウリュ付きサウナをご体感下さい
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">最安宿泊料金目安</span>
                    <span className="text-lg font-bold text-teal-700">¥3,900〜</span>
                    <span className="text-xs text-stone-500">/名</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F217%2F217.html"
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
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/151344/151344.jpg"
                  alt="天然温泉　四季彩の湯　スーパーホテルＰｒｅｍｉｅｒ大阪本町駅前"
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
                    <span className="text-amber-500 font-bold text-sm">★ 4.43</span>
                    <span className="text-stone-400 text-xs">(1757件のクチコミ)</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">
                    天然温泉　四季彩の湯　スーパーホテルＰｒｅｍｉｅｒ大阪本町駅前
                  </h3>
                  <p className="text-xs text-stone-500 mb-3">
                    アクセス: 本町駅 / 大阪メトロ　四つ橋線　西梅田駅から2駅！なんば駅から2駅！四つ橋線・御堂筋線本町駅２４号出口ほぼ直結♪
                  </p>
                  <p className="text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed">
                    四ツ橋鮮・御堂筋線本町駅24号出口すぐ★男女別天然温泉★レディースフロアに温泉あり♪
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">最安宿泊料金目安</span>
                    <span className="text-lg font-bold text-teal-700">¥4,800〜</span>
                    <span className="text-xs text-stone-500">/名</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F151344%2F151344.html"
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
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/52940/52940.jpg"
                  alt="シティプラザ大阪～ＨＯＴＥＬ＆ＳＰＡ～"
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
                    <span className="text-amber-500 font-bold text-sm">★ 4.32</span>
                    <span className="text-stone-400 text-xs">(4373件のクチコミ)</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">
                    シティプラザ大阪～ＨＯＴＥＬ＆ＳＰＡ～
                  </h3>
                  <p className="text-xs text-stone-500 mb-3">
                    アクセス: 堺筋本町駅 / 大阪メトロ「堺筋本町駅（12-1番出口）」より徒歩6分／大阪メトロ「谷町四丁目（4号出口）」より徒歩7分
                  </p>
                  <p className="text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed">
                    最上階にある、天然温泉大浴場!!ビジネスに観光に疲れた体を空を眺めながら癒してください。
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">最安宿泊料金目安</span>
                    <span className="text-lg font-bold text-teal-700">¥5,845〜</span>
                    <span className="text-xs text-stone-500">/名</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F52940%2F52940.html"
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
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/172378/172378.jpg"
                  alt="リーベルホテル大阪"
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
                    <span className="text-amber-500 font-bold text-sm">★ 4.71</span>
                    <span className="text-stone-400 text-xs">(7047件のクチコミ)</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">
                    リーベルホテル大阪
                  </h3>
                  <p className="text-xs text-stone-500 mb-3">
                    アクセス: 桜島駅 / ＪＲゆめ咲線 桜島駅より徒歩1分　テーマパークまで徒歩約13分、ユニバーサルシティ駅1分1駅　大阪駅まで電車で最短14分
                  </p>
                  <p className="text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed">
                    ≪6年連続楽天トラベルアワード受賞≫2025ゴールドアワード☆ホテル＆旅館オブ・ザ・イヤー全国9位☆
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">最安宿泊料金目安</span>
                    <span className="text-lg font-bold text-teal-700">¥6,150〜</span>
                    <span className="text-xs text-stone-500">/名</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F172378%2F172378.html"
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
          <h3 className="text-base font-bold text-stone-900 mb-3">大阪秋旅の散策アドバイス</h3>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>大阪城公園の紅葉:</strong> 天守閣を背景に広がる本丸前の推定樹齢約300年の大イチョウや、東外濠沿いの紅葉並木が見事です。</li>
            <li><strong>御堂筋イルミネーション:</strong> 11月初旬から点灯開始され、黄金のイチョウとカラフルなLEDライトの競演が楽しめます。</li>
            <li><strong>Osaka Metro 1日乗車券:</strong> 土日祝は620円（平日は820円）の「エンジョイエコカード」で市内観光スポットを網羅できます。</li>
          </ul>
        </section>
      </div>
    </article>
  );
}
