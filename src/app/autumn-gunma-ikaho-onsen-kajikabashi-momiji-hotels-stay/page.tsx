import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '【秋の伊香保温泉】河鹿橋の紅葉ライトアップと石段街レトロ散策！黄金の湯を楽しむおすすめ名宿5選【2026最新】',
  description: '伊香保温泉屈指の紅葉名所「河鹿橋」の真紅のライトアップと365段の石段街。茶褐色の名湯「黄金の湯」と透明な「白銀の湯」を満喫できる厳選宿5選。香雲館、和心の宿大森、ホテル松本楼など人気旅館を徹底比較！',
  keywords: '伊香保温泉 紅葉, 河鹿橋 ライトアップ, 伊香保 石段街 旅館, 黄金の湯 宿, 伊香保温泉 香雲館, ホテル松本楼',
  openGraph: {
    title: '【秋の伊香保温泉】河鹿橋の紅葉ライトアップと石段街レトロ散策！黄金の湯を楽しむおすすめ名宿5選【2026最新】',
    description: '伊香保温泉屈指の紅葉名所「河鹿橋」の真紅のライトアップと365段の石段街。茶褐色の名湯「黄金の湯」を満喫！',
    type: 'article',
    url: 'https://croud-travel.com/autumn-gunma-ikaho-onsen-kajikabashi-momiji-hotels-stay',
  }
};

export default function IkahoOnsenAutumnPage() {
  return (
    <article className="min-h-screen bg-stone-50 text-stone-800 pb-20 font-sans">
      <div className="relative h-[480px] w-full overflow-hidden bg-stone-900">
        <Image
          src="https://img.travel.rakuten.co.jp/share/HOTEL/70871/70871.jpg"
          alt="秋の伊香保温泉・河鹿橋の紅葉ライトアップと名湯"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12 max-w-5xl mx-auto">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="px-3 py-1 bg-amber-600 text-white text-xs font-bold rounded-full">秋の群馬・温泉特集</span>
            <span className="px-3 py-1 bg-stone-800 text-amber-300 text-xs font-medium rounded-full border border-amber-400/30">見頃目安: 10月下旬〜11月中旬</span>
          </div>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4 drop-shadow-md">
            【秋の伊香保温泉】河鹿橋の紅葉ライトアップと石段街レトロ散策！黄金の湯を楽しむおすすめ名宿5選
          </h1>
          <p className="text-stone-200 text-sm md:text-base max-w-3xl line-clamp-2 md:line-clamp-none">
            朱塗りの太鼓橋「河鹿橋」を取り囲むモミジやカエデの艶やかな紅葉。夜間には幽玄なライトアップが行われ、昼夜で異なる表情を見せます。情緒あふれる365段の石段街と歴史ある名湯を心ゆくまで堪能できる宿をご紹介します。
          </p>
        </div>
      </div>

      <nav className="max-w-4xl mx-auto px-4 py-4 text-xs text-stone-500">
        <Link href="/" className="hover:underline text-amber-700">ホーム</Link>
        <span className="mx-2">/</span>
        <span className="text-stone-700 font-medium">伊香保温泉河鹿橋紅葉と名宿5選</span>
      </nav>

      <div className="max-w-4xl mx-auto px-4 mt-6">
        <section className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-stone-200/80 mb-10 leading-relaxed">
          <h2 className="text-xl md:text-2xl font-bold text-stone-900 mb-4 border-l-4 border-amber-600 pl-3">
            河鹿橋の幻想的な紅葉ライトアップと伊香保の二大名湯
          </h2>
          <p className="mb-4 text-stone-700">
            伊香保温泉の最奥部、湯元近くに架かる「河鹿橋（かじかばし）」は、北関東屈指の紅葉ビュースポットです。朱塗りのアーチ橋と頭上を覆う鮮烈なモミジの紅のコントラストは息を呑む美しさ。見頃期間中には夕方からライトアップが開催され、闇夜に浮かび上がる錦秋のトンネルは旅のハイライトにふさわしい絶景となります。
          </p>
          <p className="text-stone-700">
            また、伊香保には鉄分を豊富に含み茶褐色に濁る古来の名湯「黄金（こがね）の湯」と、近年湧出したメタけい酸を多く含む透明な美肌湯「白銀（しろがね）の湯」という2つの泉質が存在します。石段街で湯の花まんじゅうを食べ歩き、温泉情緒に浸る贅沢な秋のひとときをお過ごしください。
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-stone-900 mb-6 flex items-center gap-2">
            <span className="w-2.5 h-6 bg-amber-600 rounded-full inline-block"></span>
            楽天トラベル高評価！伊香保温泉の厳選宿5選
          </h2>

          <div className="space-y-8">

            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-200 flex flex-col md:flex-row hover:shadow-md transition">
              <div className="md:w-5/12 relative h-56 md:h-auto min-h-[220px]">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/70871/70871.jpg"
                  alt="伊香保温泉　香雲館"
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
                    <span className="text-amber-500 font-bold text-sm">★ 4.84</span>
                    <span className="text-stone-400 text-xs">(328件のクチコミ)</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">
                    伊香保温泉　香雲館
                  </h3>
                  <p className="text-xs text-stone-500 mb-3">
                    アクセス: 渋川駅 / ＪＲ渋川駅から伊香保温泉行きバス乗車で２５分※バス停までは随時送迎可。到着時お電話下さい。
                  </p>
                  <p className="text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed">
                    ★全10室・全室露天風呂付客室の宿★大浴場はわずか8軒の【黄金の湯】を100％源泉掛け流しで贅沢に。
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">最安宿泊料金目安</span>
                    <span className="text-lg font-bold text-amber-700">¥29,150〜</span>
                    <span className="text-xs text-stone-500">/名</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F70871%2F70871.html"
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
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/10737/10737.jpg"
                  alt="伊香保温泉　和心の宿　大森"
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
                    <span className="text-amber-500 font-bold text-sm">★ 4.58</span>
                    <span className="text-stone-400 text-xs">(1541件のクチコミ)</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">
                    伊香保温泉　和心の宿　大森
                  </h3>
                  <p className="text-xs text-stone-500 mb-3">
                    アクセス: 渋川駅 / 関越道『渋川伊香保IC』より12km/JR上越線『渋川駅』
                  </p>
                  <p className="text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed">
                    口コミサービス部門「4.7点」石段まで徒歩5分、標高800mの絶景露天風呂・貸切風呂あり
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">最安宿泊料金目安</span>
                    <span className="text-lg font-bold text-amber-700">¥19,250〜</span>
                    <span className="text-xs text-stone-500">/名</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F10737%2F10737.html"
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
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/19271/19271.jpg"
                  alt="伊香保温泉　ホテル松本楼"
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
                    <span className="text-amber-500 font-bold text-sm">★ 4.53</span>
                    <span className="text-stone-400 text-xs">(3298件のクチコミ)</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">
                    伊香保温泉　ホテル松本楼
                  </h3>
                  <p className="text-xs text-stone-500 mb-3">
                    アクセス: 渋川駅 / ＪＲ上越線渋川駅よりバスで見晴下下車／関越自動車道渋川・伊香保ＩＣより約１０ｋｍ
                  </p>
                  <p className="text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed">
                    露天風呂付客室、サウナ付客室、展望部屋、バリアフリールームなど8種以上の客室タイプ。
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">最安宿泊料金目安</span>
                    <span className="text-lg font-bold text-amber-700">¥14,000〜</span>
                    <span className="text-xs text-stone-500">/名</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F19271%2F19271.html"
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
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/7170/7170.jpg"
                  alt="伊香保温泉　温泉宿　塚越屋七兵衛"
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
                    <span className="text-amber-500 font-bold text-sm">★ 4.41</span>
                    <span className="text-stone-400 text-xs">(914件のクチコミ)</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">
                    伊香保温泉　温泉宿　塚越屋七兵衛
                  </h3>
                  <p className="text-xs text-stone-500 mb-3">
                    アクセス: 渋川駅 / 関越自動車道 渋川・伊香保ICより車にて20分　※路線バス・高速バスをご利用の際はバス停送迎有（到着時連絡）
                  </p>
                  <p className="text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed">
                    伊香保に語り継がれる希少泉質「黄金の湯」を、贅沢に源泉かけ流しで楽しむ至福の宿泊体験。
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">最安宿泊料金目安</span>
                    <span className="text-lg font-bold text-amber-700">¥9,240〜</span>
                    <span className="text-xs text-stone-500">/名</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F7170%2F7170.html"
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
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/80783/80783.jpg"
                  alt="伊香保温泉　いかほ秀水園"
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
                    <span className="text-amber-500 font-bold text-sm">★ 4.28</span>
                    <span className="text-stone-400 text-xs">(583件のクチコミ)</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">
                    伊香保温泉　いかほ秀水園
                  </h3>
                  <p className="text-xs text-stone-500 mb-3">
                    アクセス: 渋川駅 / ＪＲ上越線【渋川駅】より路線バス又はお車で約20分　「伊香保温泉バスターミナル」徒歩3分　★石段まで徒歩圏内★
                  </p>
                  <p className="text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed">
                    どこかなつかしい横丁のような雰囲気の館内。上州牛すきやきと地酒がたのしめる心地よい宿
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">最安宿泊料金目安</span>
                    <span className="text-lg font-bold text-amber-700">¥10,450〜</span>
                    <span className="text-xs text-stone-500">/名</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F80783%2F80783.html"
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
          <h3 className="text-base font-bold text-stone-900 mb-3">伊香保温泉旅の散策のコツ</h3>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>河鹿橋ライトアップ:</strong> 16:30〜22:00頃まで点灯されます。冷え込みが厳しくなるため防寒対策をお忘れなく。</li>
            <li><strong>石段街の段数:</strong> 365段の石段には温泉街の繁栄を祈る意味が込められており、登りきると伊香保神社に到達します。</li>
            <li><strong>水沢うどん:</strong> 宿をチェックアウトした後は、車で約15分の「水沢うどん街道」で日本三大うどんのコシと喉越しを楽しむのが定番です。</li>
          </ul>
        </section>
      </div>
    </article>
  );
}
