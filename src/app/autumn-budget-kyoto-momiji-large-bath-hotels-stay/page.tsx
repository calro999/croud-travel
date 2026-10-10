import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '秋の京都×格安：紅葉狩りをお得に満喫！大浴場・サウナ付き1泊4,000円台〜のコスパ最強おすすめホテル5選「2026最新」',
  description: '宿泊費が高騰する秋の京都で賢く旅する！清水寺や東福寺の紅葉狩り、夜間ライトアップ後にゆったり足を伸ばせる大浴場・サウナ完備の格安ホテル5選。ロワジールホテル京都東寺、ホテルエルシエントなど1泊4,000円〜7,000円台の高評価宿を徹底比較！',
  keywords: '京都 格安 ホテル, 京都 大浴場 ホテル, 京都 紅葉 宿泊 安い, ロワジールホテル京都東寺, ホテルエルシエント京都八条口, ベッセルホテルカンパーナ京都五条',
  openGraph: {
    title: '秋の京都×格安：紅葉狩りをお得に満喫！大浴場・サウナ付き1泊4,000円台〜のコスパ最強おすすめホテル5選「2026最新」',
    description: '宿泊費が高騰する秋の京都で賢く旅する！大浴場・サウナ完備の1泊4,000円台〜コスパ最強ホテル5選。',
    type: 'article',
    url: 'https://croud-travel.com/autumn-budget-kyoto-momiji-large-bath-hotels-stay',
  }
};

export default function KyotoBudgetAutumnPage() {
  return (
    <article className="min-h-screen bg-stone-50 text-stone-800 pb-20 font-sans">
      <div className="relative h-[480px] w-full overflow-hidden bg-stone-900">
        <Image
          src="https://img.travel.rakuten.co.jp/share/HOTEL/187986/187986.jpg"
          alt="秋の京都・格安大浴場ホテルで楽しむ快適な紅葉旅行"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12 max-w-5xl mx-auto">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="px-3 py-1 bg-teal-600 text-white text-xs font-bold rounded-full">格安・コスパ旅特集</span>
            <span className="px-3 py-1 bg-stone-800 text-amber-300 text-xs font-medium rounded-full border border-amber-400/30">1泊目安: 4,000円台〜7,000円台</span>
          </div>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4 drop-shadow-md">「秋の京都×格安」紅葉狩りをお得に満喫！大浴場・サウナ付き1泊4,000円台〜のコスパ最強おすすめホテル5選</h1>
          <p className="text-stone-200 text-sm md:text-base max-w-3xl line-clamp-2 md:line-clamp-none">
            ハイシーズンの京都はホテル代が高騰しがちですが、大浴場付き＆高評価でも1泊4,000円台から泊まれる優良宿が実は存在します。紅葉散策で歩き疲れた身体を癒やすおすすめコスパホテルをご紹介します。
          </p>
        </div>
      </div>

      <nav className="max-w-4xl mx-auto px-4 py-4 text-xs text-stone-500">
        <Link href="/" className="hover:underline text-amber-700">ホーム</Link>
        <span className="mx-2">/</span>
        <span className="text-stone-700 font-medium">京都格安大浴場ホテル5選</span>
      </nav>

      <div className="max-w-4xl mx-auto px-4 mt-6">
        <section className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-stone-200/80 mb-10 leading-relaxed">
          <h2 className="text-xl md:text-2xl font-bold text-stone-900 mb-4 border-l-4 border-teal-600 pl-3">
            秋の京都旅行で「大浴場付きコスパホテル」を選ぶメリット
          </h2>
          <p className="mb-4 text-stone-700">
            東福寺の通天橋、清水寺の舞台、永観堂の見事な紅葉など、秋の京都は1日で1万〜2万歩以上歩き回ることが珍しくありません。客室のユニットバスだけでは足腰の疲れが取りきれませんが、広々とした大浴場やサウナがあれば、翌朝もすっきりと観光に出発できます。
          </p>
          <p className="text-stone-700">
            高級旅館に泊まらなくても、宿泊費を賢く抑えて浮いた予算を「紅葉夜間特別拝観の拝観料」や「贅沢な京懐石・湯豆腐ランチ」に回すのがスマートな京都旅の極意です。
          </p>
        </section>

        
        {/* 観光地ガイド・公式Wikipedia写真＆解説 */}
        <section className="bg-white rounded-2xl border border-stone-200/90 overflow-hidden shadow-sm mb-10">
          <div className="bg-gradient-to-r from-stone-900 to-stone-800 text-white px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
              <h2 className="text-base md:text-lg font-bold tracking-wide">秋の京都名所ガイド：世界遺産・音羽山 清水寺</h2>
            </div>
            <span className="text-[11px] text-stone-300 bg-white/10 px-2.5 py-0.5 rounded-full border border-white/10">地域名所ガイド</span>
          </div>
          <div className="grid md:grid-cols-12 gap-6 p-6 items-center">
            <div className="md:col-span-5 relative h-56 md:h-64 rounded-xl overflow-hidden bg-stone-100 border border-stone-200/60 shadow-inner">
              <Image
                src="https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ae/Kiyomizu-dera%2C_Kyoto%2C_November_2016_-02.jpg/1280px-Kiyomizu-dera%2C_Kyoto%2C_November_2016_-02.jpg"
                alt="世界遺産・音羽山 清水寺"
                fill
                className="object-cover hover:scale-105 transition duration-500"
                sizes="(max-width: 768px) 100vw, 400px"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-2 text-right">
                <span className="text-[10px] text-white/90">写真：Wikimedia Commons</span>
              </div>
            </div>
            <div className="md:col-span-7 space-y-3">
              <h3 className="text-lg md:text-xl font-bold text-stone-900 leading-snug">世界遺産・音羽山 清水寺の歴史と見どころ</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">清水寺（きよみずでら、英: Kiyomizu-dera Temple）は、京都市東山区清水1丁目にある北法相宗の大本山の寺院。山号は音羽山。本尊は十一面千手観世音菩薩。正式には音羽山清水寺（おとわさんきよみずでら）と号する。もとは法相宗に属していたが、現在は独立して北法相宗を名乗る。西国三十三所第16番札所。洛陽三十三所観音霊場第10から14番札所。境内（敷地面積）は約13万平方メートル。</p>
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
            楽天トラベル高評価！京都の格安大浴場ホテル5選
          </h2>

          <div className="space-y-8">

            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-200 flex flex-col md:flex-row hover:shadow-md transition">
              <div className="md:w-5/12 relative h-56 md:h-auto min-h-[220px]">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/187986/187986.jpg"
                  alt="ロワジールホテル京都東寺"
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
                    <span className="text-amber-500 font-bold text-sm">★ 4.33</span>
                    <span className="text-stone-400 text-xs">(702件のクチコミ)</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">
                    ロワジールホテル京都東寺
                  </h3>
                  <p className="text-xs text-stone-500 mb-3">
                    アクセス: 京都駅 / JR「京都駅」八条西口より徒歩12分、近鉄「東寺駅」より徒歩3分
                  </p>
                  <p className="text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed">
                    京都駅から徒歩10分 | 世界遺産「東寺」ビューと大浴場・サウナ、おばんざい朝食ビュッフェで京都満喫
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">最安宿泊料金目安</span>
                    <span className="text-lg font-bold text-teal-700">¥4,420〜</span>
                    <span className="text-xs text-stone-500">/名</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F187986%2F187986.html"
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
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/9402/9402.jpg"
                  alt="ホテル　エルシエント京都八条口"
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
                    <span className="text-amber-500 font-bold text-sm">★ 4.34</span>
                    <span className="text-stone-400 text-xs">(8151件のクチコミ)</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">
                    ホテル　エルシエント京都八条口
                  </h3>
                  <p className="text-xs text-stone-500 mb-3">
                    アクセス: 京都駅 / ＪＲ京都駅八条東口徒歩2分 ◇ 空港リムジンバスのりば（伊丹・関空）すぐ◇京都南ICから約15分
                  </p>
                  <p className="text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed">
                    京都駅・空港バス徒歩2分。全室リニューアル！駅前ホテル最大級の大浴場完備（サウナ付）
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">最安宿泊料金目安</span>
                    <span className="text-lg font-bold text-teal-700">¥5,650〜</span>
                    <span className="text-xs text-stone-500">/名</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F9402%2F9402.html"
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
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/167811/167811.jpg"
                  alt="京都山科　ホテル山楽"
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
                    <span className="text-amber-500 font-bold text-sm">★ 4.5</span>
                    <span className="text-stone-400 text-xs">(766件のクチコミ)</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">
                    京都山科　ホテル山楽
                  </h3>
                  <p className="text-xs text-stone-500 mb-3">
                    アクセス: 山科駅 / ※新快速停車※京都・大津から約５分！ＪＲ琵琶湖線・湖西線／京阪京津線／市営地下鉄東西線　山科駅より地下道直結で徒歩1分！
                  </p>
                  <p className="text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed">
                    京都観光の定番「祇園・清水」エリアまで地下鉄で乗換なし。大浴場は女性専用で人気のシャンプーバーあり
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">最安宿泊料金目安</span>
                    <span className="text-lg font-bold text-teal-700">¥5,700〜</span>
                    <span className="text-xs text-stone-500">/名</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F167811%2F167811.html"
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
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/147994/147994.jpg"
                  alt="ベッセルホテルカンパーナ京都五条｜サウナ付大浴場（京都１号店）"
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
                    <span className="text-amber-500 font-bold text-sm">★ 4.45</span>
                    <span className="text-stone-400 text-xs">(1952件のクチコミ)</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">
                    ベッセルホテルカンパーナ京都五条｜サウナ付大浴場（京都１号店）
                  </h3>
                  <p className="text-xs text-stone-500 mb-3">
                    アクセス: 五条（京都市営）駅 / 京都市営地下鉄烏丸線五条駅３番出口より徒歩１分■京都駅より徒歩約15分■新京都東ICから約16分■京都南ICから約21分
                  </p>
                  <p className="text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed">
                    サウナ付大浴場完備 京都市営地下鉄烏丸線五条駅3番出口徒歩1分 京都観光に最適 18歳以下添い寝無料
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">最安宿泊料金目安</span>
                    <span className="text-lg font-bold text-teal-700">¥7,125〜</span>
                    <span className="text-xs text-stone-500">/名</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F147994%2F147994.html"
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
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/165176/165176.jpg"
                  alt="ホテルインターゲート京都　四条新町"
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
                    <span className="text-amber-500 font-bold text-sm">★ 4.53</span>
                    <span className="text-stone-400 text-xs">(930件のクチコミ)</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">
                    ホテルインターゲート京都　四条新町
                  </h3>
                  <p className="text-xs text-stone-500 mb-3">
                    アクセス: 烏丸駅 / 阪急京都線 烏丸駅・ 地下鉄烏丸線 四条駅より徒歩にて約５分
                  </p>
                  <p className="text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed">
                    ハッピーアワーからぶぶ漬けバイキングまで『無料ラウンジサービス』付き  | 手足伸ばせる大浴場 完備
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">最安宿泊料金目安</span>
                    <span className="text-lg font-bold text-teal-700">¥7,096〜</span>
                    <span className="text-xs text-stone-500">/名</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F165176%2F165176.html"
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
          <h3 className="text-base font-bold text-stone-900 mb-3">京都・格安紅葉旅の攻略法</h3>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>地下鉄・バスの1日券活用:</strong> 京都市営地下鉄を活用すると紅葉渋滞を完全に回避して快適に移動できます。</li>
            <li><strong>早朝拝観のすすめ:</strong> 清水寺は朝6時から開門しており、朝の澄んだ空気の中で混雑なしの絶景を楽しめます。</li>
            <li><strong>手荷物預かりサービス:</strong> 京都駅八条口のホテルなら、チェックイン前・チェックアウト後も荷物を預けて身軽に紅葉巡りが可能です。</li>
          </ul>
        </section>
      </div>
    </article>
  );
}
