import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '【秋の乳頭温泉郷・田沢湖】ブナ原生林の黄金紅葉と名物きりたんぽ鍋！憧れの秘湯温泉宿5選【2026最新】',
  description: '十和田八幡平国立公園のブナ林が黄金色に染まる乳頭温泉郷の秋！乳白色の名湯露天風呂と新米の秋田名物「きりたんぽ鍋」を味わう至福の秘湯ステイ。休暇村乳頭温泉郷、花心亭しらはまなど厳選5宿の見どころを詳しくご紹介！',
  keywords: '乳頭温泉郷 紅葉, 田沢湖 紅葉 宿, 乳頭温泉 秘湯, きりたんぽ鍋 秋田, 休暇村 乳頭温泉郷, 花心亭しらはま',
  openGraph: {
    title: '【秋の乳頭温泉郷・田沢湖】ブナ原生林の黄金紅葉と名物きりたんぽ鍋！憧れの秘湯温泉宿5選【2026最新】',
    description: 'ブナ林が黄金色に染まる乳頭温泉郷の秋！乳白色の名湯露天風呂と名物きりたんぽ鍋を味わう厳選宿5選。',
    type: 'article',
    url: 'https://croud-travel.com/autumn-akita-nyuto-onsen-tazawako-kiritanpo-hotels-stay',
  }
};

export default function NyutoOnsenAutumnPage() {
  return (
    <article className="min-h-screen bg-stone-50 text-stone-800 pb-20 font-sans">
      <div className="relative h-[480px] w-full overflow-hidden bg-stone-900">
        <Image
          src="https://img.travel.rakuten.co.jp/share/HOTEL/72803/72803.jpg"
          alt="秋の乳頭温泉郷・ブナ原生林の黄金紅葉と乳白色の秘湯露天風呂"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12 max-w-5xl mx-auto">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="px-3 py-1 bg-amber-600 text-white text-xs font-bold rounded-full">秋の東北・秘湯特集</span>
            <span className="px-3 py-1 bg-stone-800 text-amber-300 text-xs font-medium rounded-full border border-amber-400/30">見頃目安: 10月中旬〜11月上旬</span>
          </div>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4 drop-shadow-md">
            【秋の乳頭温泉郷・田沢湖】ブナ原生林の黄金紅葉と名物きりたんぽ鍋！憧れの秘湯温泉宿5選
          </h1>
          <p className="text-stone-200 text-sm md:text-base max-w-3xl line-clamp-2 md:line-clamp-none">
            手つかずのブナ原生林が黄金色に輝く乳頭山麓。立ちのぼる湯煙と乳白色の掛け流し露天風呂、比内地鶏の出汁で煮込む新米きりたんぽ鍋に身も心もとろける、みちのくの憧れ秘湯旅をお届けします。
          </p>
        </div>
      </div>

      <nav className="max-w-4xl mx-auto px-4 py-4 text-xs text-stone-500">
        <Link href="/" className="hover:underline text-amber-700">ホーム</Link>
        <span className="mx-2">/</span>
        <span className="text-stone-700 font-medium">乳頭温泉郷紅葉ときりたんぽ宿5選</span>
      </nav>

      <div className="max-w-4xl mx-auto px-4 mt-6">
        <section className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-stone-200/80 mb-10 leading-relaxed">
          <h2 className="text-xl md:text-2xl font-bold text-stone-900 mb-4 border-l-4 border-amber-600 pl-3">
            日本屈指の秘湯郷を包むブナの黄金美と七湯めぐり
          </h2>
          <p className="mb-4 text-stone-700">
            秋田県仙北市の山懐に点在する「乳頭温泉郷」。十和田八幡平国立公園に指定された広大なブナ原生林に囲まれ、秋には山全体が黄金色のグラデーションに染まります。七つの湯宿がそれぞれ独自の源泉を持ち、乳白色、青白色、茶褐色など多彩な泉質の湯めぐり（湯めぐり帖）が楽しめます。
          </p>
          <p className="text-stone-700">
            秋の味覚として外せないのが、収穫されたばかりの新米あきたこまちを香ばしく焼き上げた「きりたんぽ鍋」。比内地鶏のコク深いスープにセリや舞茸が香る鍋を囲み、冷え込んだ秋の夜をほっこりと温まりましょう。日本一の深さを誇る田沢湖のルリ色の湖面と紅葉のコントラストも必見です。
          </p>
        </section>

        
        {/* 観光地ガイド・公式Wikipedia写真＆解説 */}
        <section className="bg-white rounded-2xl border border-stone-200/90 overflow-hidden shadow-sm mb-10">
          <div className="bg-gradient-to-r from-stone-900 to-stone-800 text-white px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
              <h2 className="text-base md:text-lg font-bold tracking-wide">秋田・秘湯ガイド：秘湯の聖地・乳頭温泉郷と田沢湖</h2>
            </div>
            <span className="text-[11px] text-stone-300 bg-white/10 px-2.5 py-0.5 rounded-full border border-white/10">地域名所ガイド</span>
          </div>
          <div className="grid md:grid-cols-12 gap-6 p-6 items-center">
            <div className="md:col-span-5 relative h-56 md:h-64 rounded-xl overflow-hidden bg-stone-100 border border-stone-200/60 shadow-inner">
              <Image
                src="https://thumb.wikimedia.org/wikipedia/commons/thumb/2/28/Pathway_to_the_Qkamura_Nyuto_Onsenkyo.jpg/1280px-Pathway_to_the_Qkamura_Nyuto_Onsenkyo.jpg"
                alt="秘湯の聖地・乳頭温泉郷と田沢湖"
                fill
                className="object-cover hover:scale-105 transition duration-500"
                sizes="(max-width: 768px) 100vw, 400px"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-2 text-right">
                <span className="text-[10px] text-white/90">写真：Wikimedia Commons</span>
              </div>
            </div>
            <div className="md:col-span-7 space-y-3">
              <h3 className="text-lg md:text-xl font-bold text-stone-900 leading-snug">秘湯の聖地・乳頭温泉郷と田沢湖の歴史と見どころ</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">乳頭温泉郷（にゅうとうおんせんきょう）は、秋田県仙北市、十和田八幡平国立公園内乳頭山の山麓に点在する温泉の総称、温泉郷である。 標高600 - 800メートル付近に温泉郷が広がっている。</p>
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
            楽天トラベル高評価！乳頭温泉郷・田沢湖の厳選宿5選
          </h2>

          <div className="space-y-8">

            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-200 flex flex-col md:flex-row hover:shadow-md transition">
              <div className="md:w-5/12 relative h-56 md:h-auto min-h-[220px]">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/139459/139459.jpg"
                  alt="花心亭しらはま"
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
                    <span className="text-amber-500 font-bold text-sm">★ 4.7</span>
                    <span className="text-stone-400 text-xs">(289件のクチコミ)</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">
                    花心亭しらはま
                  </h3>
                  <p className="text-xs text-stone-500 mb-3">
                    アクセス: 田沢湖駅 / 田沢湖駅からお車で約12分
                  </p>
                  <p className="text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed">
                    【10月～秋田得旅クーポン配布！】秋田を纏う日本旅館。素足の解放感、専用個室ダイニングで味わう美味。
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">最安宿泊料金目安</span>
                    <span className="text-lg font-bold text-amber-700">¥8,800〜</span>
                    <span className="text-xs text-stone-500">/名</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F139459%2F139459.html"
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
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/72803/72803.jpg"
                  alt="���暇村　乳頭温泉郷"
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
                    <span className="text-amber-500 font-bold text-sm">★ 4.56</span>
                    <span className="text-stone-400 text-xs">(561件のクチコミ)</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">
                    ���暇村　乳頭温泉郷
                  </h3>
                  <p className="text-xs text-stone-500 mb-3">
                    アクセス: 田沢湖駅 / ＪＲ　田沢湖駅より羽後交通乳頭温泉行「休暇村」下車、徒歩０分
                  </p>
                  <p className="text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed">
                    美しいブナ林に囲まれた静かな宿です。温泉浴や森林浴が楽しめ、ここでは時間がゆっくりと流れています。
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">最安宿泊料金目安</span>
                    <span className="text-lg font-bold text-amber-700">¥16,600〜</span>
                    <span className="text-xs text-stone-500">/名</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F72803%2F72803.html"
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
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/70772/70772.jpg"
                  alt="田沢湖水沢温泉郷セルリアンリゾートＡＯＮＩ"
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
                    <span className="text-amber-500 font-bold text-sm">★ 4.19</span>
                    <span className="text-stone-400 text-xs">(339件のクチコミ)</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">
                    田沢湖水沢温泉郷セルリアンリゾートＡＯＮＩ
                  </h3>
                  <p className="text-xs text-stone-500 mb-3">
                    アクセス: 田沢湖駅 / 田沢湖駅よりバスで約２５分（乳頭線、水沢温泉郷で降車）、タクシーで約１５分
                  </p>
                  <p className="text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed">
                    ★2024年露天風呂リニューアル！美肌成分豊富な源泉かけ流しの露天風呂付き大浴場と地元食材の料理
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">最安宿泊料金目安</span>
                    <span className="text-lg font-bold text-amber-700">¥12,400〜</span>
                    <span className="text-xs text-stone-500">/名</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F70772%2F70772.html"
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
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/4624/4624.jpg"
                  alt="天然温泉　田沢湖レイクリゾート"
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
                    <span className="text-amber-500 font-bold text-sm">★ 4.16</span>
                    <span className="text-stone-400 text-xs">(1990件のクチコミ)</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">
                    天然温泉　田沢湖レイクリゾート
                  </h3>
                  <p className="text-xs text-stone-500 mb-3">
                    アクセス: 田沢湖駅 / JR秋田新幹線田沢湖駅からバスで２０分、盛岡Ｉ．Ｃから５０分。田沢湖駅から送迎バスにて約15分（要事前予約）
                  </p>
                  <p className="text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed">
                    静寂の美、田沢湖まで車で約15分　わんちゃんと一緒の宿泊も人気です♪
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">最安宿泊料金目安</span>
                    <span className="text-lg font-bold text-amber-700">¥6,342〜</span>
                    <span className="text-xs text-stone-500">/名</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F4624%2F4624.html"
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
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/11222/11222.jpg"
                  alt="亀の井ホテル　田沢湖"
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
                    <span className="text-amber-500 font-bold text-sm">★ 4.03</span>
                    <span className="text-stone-400 text-xs">(1697件のクチコミ)</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">
                    亀の井ホテル　田沢湖
                  </h3>
                  <p className="text-xs text-stone-500 mb-3">
                    アクセス: 田沢湖駅 / JR田沢湖駅より乳頭温泉行バス約35分「杉谷地」下車　駒ケ岳登山口行きバス停まで徒歩約10分　乳頭温泉まで車で約10分
                  </p>
                  <p className="text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed">
                    ブナの森に包まれる泉質自慢の温泉と旬の郷土料理を味わうくつろぎの宿
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">最安宿泊料金目安</span>
                    <span className="text-lg font-bold text-amber-700">¥5,376〜</span>
                    <span className="text-xs text-stone-500">/名</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F11222%2F11222.html"
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
          <h3 className="text-base font-bold text-stone-900 mb-3">乳頭温泉郷の秋旅ポイント</h3>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>湯めぐり号と湯めぐり帖:</strong> 乳頭温泉郷の宿泊者限定で販売される「湯めぐり帖」を利用すると、専用送迎バス「湯めぐり号」で各宿の露天風呂を手軽に巡ることができます。</li>
            <li><strong>田沢湖の辰子像と御座石神社:</strong> 澄み渡る湖面に黄金色の辰子像が輝く人気スポット。遊覧船からの紅葉クルーズもおすすめです。</li>
            <li><strong>紅葉ドライブ:</strong> 田沢湖から八幡平へと抜けるアスピーテラインは東北屈指の紅葉ドライブコースです。</li>
          </ul>
        </section>
      </div>
    </article>
  );
}
