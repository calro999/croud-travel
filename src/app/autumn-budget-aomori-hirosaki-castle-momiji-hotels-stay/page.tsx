import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '秋の弘前×格安：弘前城菊と紅葉まつりと焼きたてアップルパイ！大浴場付き1泊4,000円〜7,000円台のコスパ最強ホテル5選「2026最新」',
  description: '約1,000本のモミジが天守とお濠を染める「弘前城菊と紅葉まつり」の幻想的なライトアップ！名物アップルパイの食べ比べや津軽ラーメンを満喫。サウナ＆天然温泉大浴場付きで1泊4,000円〜7,000円台で泊まれる弘前の格安ホテル5選。アートホテル弘前シティ、ドーミーイン弘前などを徹底比較！',
  keywords: '弘前 格安 ホテル, 弘前 大浴場 天然温泉 ホテル, 弘前城菊と紅葉まつり, アップルパイ 弘前, アートホテル弘前シティ, ドーミーイン弘前',
  openGraph: {
    title: '秋の弘前×格安：弘前城菊と紅葉まつりと焼きたてアップルパイ！大浴場付き1泊4,000円〜7,000円台のコスパ最強ホテル5選「2026最新」',
    description: '弘前城菊と紅葉まつりとアップルパイ！大浴場付き1泊4,000円〜7,000円台のコスパ最強弘前ホテル5選。',
    type: 'article',
    url: 'https://croud-travel.com/autumn-budget-aomori-hirosaki-castle-momiji-hotels-stay',
  }
};

export default function HirosakiBudgetAutumnPage() {
  return (
    <article className="min-h-screen bg-stone-50 text-stone-800 pb-20 font-sans">
      <div className="relative h-[480px] w-full overflow-hidden bg-stone-900">
        <Image
          src="https://img.travel.rakuten.co.jp/share/HOTEL/504/504.jpg"
          alt="秋の弘前・弘前公園の紅葉ライトアップとお濠の水鏡"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12 max-w-5xl mx-auto">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="px-3 py-1 bg-teal-600 text-white text-xs font-bold rounded-full">格安・東北特集</span>
            <span className="px-3 py-1 bg-stone-800 text-amber-300 text-xs font-medium rounded-full border border-amber-400/30">1泊目安: 4,000円台〜7,000円台</span>
          </div>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4 drop-shadow-md">「秋の弘前×格安」弘前城菊と紅葉まつりと焼きたてアップルパイ！大浴場付き1泊4,000円〜7,000円台のコスパ最強ホテル5選</h1>
          <p className="text-stone-200 text-sm md:text-base max-w-3xl line-clamp-2 md:line-clamp-none">
            約1,000本のカエデと約2,600本の桜が一斉に紅葉する弘前公園。夜はお濠の水鏡に映る幻想的なライトアップを堪能し、りんご王国ならではの極上スイーツや天然温泉に癒やされる格安ステイをご提案します。
          </p>
        </div>
      </div>

      <nav className="max-w-4xl mx-auto px-4 py-4 text-xs text-stone-500">
        <Link href="/" className="hover:underline text-amber-700">ホーム</Link>
        <span className="mx-2">/</span>
        <span className="text-stone-700 font-medium">弘前格安大浴場ホテル5選</span>
      </nav>

      <div className="max-w-4xl mx-auto px-4 mt-6">
        <section className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-stone-200/80 mb-10 leading-relaxed">
          <h2 className="text-xl md:text-2xl font-bold text-stone-900 mb-4 border-l-4 border-teal-600 pl-3">
            お濠の水面に映る真紅の絵巻「弘前城菊と紅葉まつり」
          </h2>
          <p className="mb-4 text-stone-700">
            春の桜で有名な弘前公園は、秋の紅葉も東北随一の美しさを誇ります。11月上旬にかけて開催される「弘前城菊と紅葉まつり」では、古城の白壁や杉の大木と鮮やかな紅葉が調和。特に中濠や蓮池の水面に映り込むシンメトリーの紅葉ライトアップは息を呑む絶景です。
          </p>
          <p className="text-stone-700">
            弘前は「日本一のりんごの街」でもあり、市内の洋菓子店やカフェで40種類以上のアップルパイが楽しめます。夜は冷え込みが厳しくなるため、サウナや天然温泉大浴場付きのホテルで身体の芯から温まりましょう。
          </p>
        </section>

        
        {/* 観光地ガイド・公式Wikipedia写真＆解説 */}
        <section className="bg-white rounded-2xl border border-stone-200/90 overflow-hidden shadow-sm mb-10">
          <div className="bg-gradient-to-r from-stone-900 to-stone-800 text-white px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
              <h2 className="text-base md:text-lg font-bold tracking-wide">津軽・秋の城郭散策ガイド：名城・弘前城と菊と紅葉まつり</h2>
            </div>
            <span className="text-[11px] text-stone-300 bg-white/10 px-2.5 py-0.5 rounded-full border border-white/10">地域名所ガイド</span>
          </div>
          <div className="flex flex-col gap-6 p-6">
            <div className="w-full relative aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden bg-stone-100 border border-stone-200/60 shadow-inner">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/f/f3/Hirosaki-castle_Aomori_with_Sakura_blossoms.jpg"
                alt="名城・弘前城と菊と紅葉まつり"
                fill
                className="object-cover hover:scale-105 transition duration-500"
                sizes="(max-width: 768px) 100vw, 400px"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-2 text-right">
                <span className="text-[10px] text-white/90">写真：Wikimedia Commons</span>
              </div>
            </div>
            <div className="w-full space-y-3">
              <h3 className="text-lg md:text-xl font-bold text-stone-900 leading-snug">名城・弘前城と菊と紅葉まつりの歴史と見どころ</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">弘前城（ひろさきじょう）は、陸奥国鼻和郡（のち統合と外浜（青森）、西浜（十三湊）を編入で津軽郡）弘前（現・青森県弘前市下白銀町）にある日本の城。別名・鷹岡城、高岡城。 江戸時代には弘前藩津軽氏4万7千石の居城として藩庁が置かれ、津軽地方の政治経済の中心地となった。城は津軽平野に位置し、城郭は本丸、二の丸、三の丸、四の丸、北の郭、西の郭の6郭から構成された梯郭式平山城である。創建当初の規模は東西612メートル、南北947メートル、総面積38万5200平方メートルに及んだ。 弘前公園内には天守と5つの城門（北門、南内門、東内門、追手門、東門）、3つの隅櫓（丑虎櫓、辰巳櫓、未申櫓）が残され、国の重要文化財に指定されている。特に天守は現存12天守に数えられている。また城跡は国の史跡に指定されている。小説家の司馬遼太郎は紀行文集『街道をゆく- 北のまほろば』で、弘前城を「日本七名城の一つ」と紹介している。</p>
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
            楽天トラベル高評価！弘前の大浴場・温泉付き格安ホテル5選
          </h2>

          <div className="space-y-8">

            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-200 flex flex-col hover:shadow-md transition">
              <div className="md:w-5/12 relative h-56 md:h-auto min-h-[220px]">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/504/504.jpg"
                  alt="アートホテル弘前シティ"
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
                    <span className="text-stone-400 text-xs">(2284件のクチコミ)</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">
                    アートホテル弘前シティ
                  </h3>
                  <p className="text-xs text-stone-500 mb-3">
                    アクセス: 弘前駅 / ＪＲ弘前駅中央口より徒歩1分、青森空港より車で約６０分、東北自動車道（大鰐・弘前ＩＣ）より車で約１５分
                  </p>
                  <p className="text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed">
                    JR弘前駅前、津軽の自然の彩を感じるホテル。旅の拠点として最適です。
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">最安宿泊料金目安</span>
                    <span className="text-lg font-bold text-teal-700">¥4,450〜</span>
                    <span className="text-xs text-stone-500">/名</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F504%2F504.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs rounded-xl shadow transition"
                  >
                    楽天トラベルで空室確認
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-200 flex flex-col hover:shadow-md transition">
              <div className="md:w-5/12 relative h-56 md:h-auto min-h-[220px]">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/50632/50632.jpg"
                  alt="スーパーホテル弘前"
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
                    <span className="text-amber-500 font-bold text-sm">★ 4.07</span>
                    <span className="text-stone-400 text-xs">(2841件のクチコミ)</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">
                    スーパーホテル弘前
                  </h3>
                  <p className="text-xs text-stone-500 mb-3">
                    アクセス: 弘前駅 / 弘前駅より徒歩約１2分　100円バスで6分　東北自動車道路「大鰐弘前ＩＣ」より20分　駐車場は先着順（1台500円/泊）
                  </p>
                  <p className="text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed">
                    ◆弘前市内の土手町で唯一の天然温泉＆日替わりバイキング朝食無料◆52台駐車場（先着順／500円）◆
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">最安宿泊料金目安</span>
                    <span className="text-lg font-bold text-teal-700">¥4,550〜</span>
                    <span className="text-xs text-stone-500">/名</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F50632%2F50632.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs rounded-xl shadow transition"
                  >
                    楽天トラベルで空室確認
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-200 flex flex-col hover:shadow-md transition">
              <div className="md:w-5/12 relative h-56 md:h-auto min-h-[220px]">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/70913/70913.jpg"
                  alt="ホテルルートイン弘前城東"
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
                    <span className="text-amber-500 font-bold text-sm">★ 4.06</span>
                    <span className="text-stone-400 text-xs">(1095件のクチコミ)</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">
                    ホテルルートイン弘前城東
                  </h3>
                  <p className="text-xs text-stone-500 mb-3">
                    アクセス: 弘前駅 / JR奥羽本線弘前駅城東口より約2km/東北自動車道大鰐・弘前ICより約8km/青森空港より弘前バスターミナルまで約60分
                  </p>
                  <p className="text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed">
                    ＷＯＷＯＷ全室で無料視聴可■VODルームシアター無料視聴可能（一般映画のみ）（コンフォート特典）
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">最安宿泊料金目安</span>
                    <span className="text-lg font-bold text-teal-700">¥6,600〜</span>
                    <span className="text-xs text-stone-500">/名</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F70913%2F70913.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs rounded-xl shadow transition"
                  >
                    楽天トラベルで空室確認
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-200 flex flex-col hover:shadow-md transition">
              <div className="md:w-5/12 relative h-56 md:h-auto min-h-[220px]">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/70291/70291.jpg"
                  alt="天然温泉　岩木桜の湯　ドーミーイン弘前（ドーミーイン・御宿野乃　ホテルズグループ）"
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
                    <span className="text-stone-400 text-xs">(4503件のクチコミ)</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">
                    天然温泉　岩木桜の湯　ドーミーイン弘前（ドーミーイン・御宿野乃　ホテルズグループ）
                  </h3>
                  <p className="text-xs text-stone-500 mb-3">
                    アクセス: 中央弘前駅 / JR弘前駅より車で約10分
                  </p>
                  <p className="text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed">
                    最上階天然温泉大浴場と、高温サウナで心身共にととのう！男性露天風呂からは青森の津軽富士をご覧頂けます
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">最安宿泊料金目安</span>
                    <span className="text-lg font-bold text-teal-700">¥6,667〜</span>
                    <span className="text-xs text-stone-500">/名</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F70291%2F70291.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs rounded-xl shadow transition"
                  >
                    楽天トラベルで空室確認
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-200 flex flex-col hover:shadow-md transition">
              <div className="md:w-5/12 relative h-56 md:h-auto min-h-[220px]">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/161017/161017.jpg"
                  alt="ホテルあずまし屋"
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
                    <span className="text-amber-500 font-bold text-sm">★ 4.1</span>
                    <span className="text-stone-400 text-xs">(140件のクチコミ)</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">
                    ホテルあずまし屋
                  </h3>
                  <p className="text-xs text-stone-500 mb-3">
                    アクセス: 駅 / 東北自動車道　黒石ＩＣからお車にて約１０分
                  </p>
                  <p className="text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed">
                    ご当地牛すき焼き、大間まぐろ、ご当地そばなどの夕食が人気。露天風呂完備。全室Wi-Fi無料。
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">最安宿泊料金目安</span>
                    <span className="text-lg font-bold text-teal-700">¥7,150〜</span>
                    <span className="text-xs text-stone-500">/名</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F161017%2F161017.html"
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
          <h3 className="text-base font-bold text-stone-900 mb-3">弘前秋旅のアドバイス</h3>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>弘前アップルパイガイドマップ:</strong> 観光案内所で配布されているマップを片手に、味や食感の特徴が異なるパイを食べ歩くのが大人気です。</li>
            <li><strong>防寒対策:</strong> 10月下旬〜11月の津軽地方は夜間の気温が一桁台まで下がります。厚手のコートやマフラーをご準備ください。</li>
            <li><strong>洋館めぐり:</strong> 旧弘前市立図書館や旧東奥義塾外人教師館など、明治・大正期のレトロな洋館と紅葉のコントラストも魅力です。</li>
          </ul>
        </section>
      </div>
    </article>
  );
}
