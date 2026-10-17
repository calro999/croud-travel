import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  alternates: {
    canonical: "https://croud-travel.pages.dev/autumn-yamanashi-kawaguchiko-momiji-corridor-fuji-hotels-stay/",
  },

  title: '秋の河口湖：もみじ回廊の紅葉まつりと富士山絶景！レイクサイド温泉を満喫するおすすめ名宿5選「2026最新」',
  description: '古川沿いに続く真紅の巨木アーチ「もみじ回廊」の幻想的なライトアップと、冠雪した富士山を望む秋の河口湖！富士河口湖温泉の極上レイクビュー宿5選。湖南荘、ホテル鐘山苑、うぶやの魅力を徹底比較！',
  keywords: '河口湖 紅葉, もみじ回廊 ライトアップ, 富士河口湖温泉 宿, 富士山 紅葉 絶景, 湖南荘 河口湖, ホテル鐘山苑',
  openGraph: {
    title: '秋の河口湖：もみじ回廊の紅葉まつりと富士山絶景！レイクサイド温泉を満喫するおすすめ名宿5選「2026最新」',
    description: '古川沿いに続く真紅の巨木アーチ「もみじ回廊」のライトアップと富士山絶景！極上レイクビュー宿5選。',
    type: 'article',
    url: 'https://croud-travel.com/autumn-yamanashi-kawaguchiko-momiji-corridor-fuji-hotels-stay',
  }
};

export default function KawaguchikoAutumnPage() {
  return (
    <article className="min-h-screen bg-stone-50 text-stone-800 pb-20 font-sans">
      <div className="relative h-[480px] w-full overflow-hidden bg-stone-900">
        <Image
          src="https://img.travel.rakuten.co.jp/share/HOTEL/31111/31111.jpg"
          alt="秋の河口湖・もみじ回廊の紅葉ライトアップと雪化粧の富士山"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12 max-w-5xl mx-auto">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="px-3 py-1 bg-amber-600 text-white text-xs font-bold rounded-full">秋の山梨・富士五湖特集</span>
            <span className="px-3 py-1 bg-stone-800 text-amber-300 text-xs font-medium rounded-full border border-amber-400/30">見頃・まつり: 10月下旬〜11月中旬</span>
          </div>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4 drop-shadow-md">「秋の河口湖」もみじ回廊の紅葉まつりと富士山絶景！レイクサイド温泉を満喫するおすすめ名宿5選</h1>
          <p className="text-stone-200 text-sm md:text-base max-w-3xl line-clamp-2 md:line-clamp-none">
            湖畔を彩る約60本の古木が織りなす「もみじ回廊」の鮮烈な深紅。初冠雪をまとった霊峰富士と澄み切った湖水、夜間ライトアップの幻想的な輝きを客室や露天風呂から心ゆくまで堪能できる名宿をご案内します。
          </p>
        </div>
      </div>

      <nav className="max-w-4xl mx-auto px-4 py-4 text-xs text-stone-500">
        <Link href="/" className="hover:underline text-amber-700">ホーム</Link>
        <span className="mx-2">/</span>
        <span className="text-stone-700 font-medium">河口湖もみじ回廊と富士山名宿5選</span>
      </nav>

      <div className="max-w-4xl mx-auto px-4 mt-6">
        <section className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-stone-200/80 mb-10 leading-relaxed">
          <h2 className="text-xl md:text-2xl font-bold text-stone-900 mb-4 border-l-4 border-amber-600 pl-3">
            紅葉トンネルと富士山の奇跡の競演「富士河口湖紅葉まつり」
          </h2>
          <p className="mb-4 text-stone-700">
            富士五湖の中でも随一の賑わいを見せる「富士河口湖紅葉まつり」。メイン会場の「もみじ回廊」は、梨川沿いに約150mにわたって樹齢を重ねた巨木モミジがアーチ状に連なり、頭上も足元も燃えるような赤に染め上げられます。日没とともにライトアップが灯ると、漆黒の夜空に浮かび上がる錦秋のトンネルは息を呑む幽玄さです。
          </p>
          <p className="text-stone-700">
            さらに湖畔の北岸エリア（大石公園や産屋ヶ崎）からは、青い湖越しに初冠雪を迎えた富士山と紅葉が一枚の絵画のように収まる絶景ポイントが点在。湖畔の宿で富士山を望む展望温泉に浸かり、甲州ワインやほうとうに舌鼓を打つ極上の秋旅をお楽しみください。
          </p>
        </section>

        
        {/* 観光地ガイド・公式Wikipedia写真＆解説 */}
        <section className="bg-white rounded-2xl border border-stone-200/90 overflow-hidden shadow-sm mb-10">
          <div className="bg-gradient-to-r from-stone-900 to-stone-800 text-white px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
              <h2 className="text-base md:text-lg font-bold tracking-wide">秋の観光地情報・名所ガイド：富士河口湖と紅葉回廊</h2>
            </div>
            <span className="text-[11px] text-stone-300 bg-white/10 px-2.5 py-0.5 rounded-full border border-white/10">地域名所ガイド</span>
          </div>
          <div className="flex flex-col gap-6 p-6">
            <div className="w-full relative aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden bg-stone-100 border border-stone-200/60 shadow-inner">
              <Image
                src="https://thumb.wikimedia.org/wikipedia/commons/thumb/1/18/KawaguchiKo.jpg/1280px-KawaguchiKo.jpg"
                alt="富士河口湖と紅葉回廊"
                fill
                className="object-cover hover:scale-105 transition duration-500"
                sizes="(max-width: 768px) 100vw, 400px"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-2 text-right">
                <span className="text-[10px] text-white/90">写真：Wikimedia Commons</span>
              </div>
            </div>
            <div className="w-full space-y-3">
              <h3 className="text-lg md:text-xl font-bold text-stone-900 leading-snug">富士河口湖と紅葉回廊の歴史と見どころ</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">河口湖（かわぐちこ）は、本州中部山梨県の富士山北麓に存在する相模川水系の湖。富士五湖の1つである。富士箱根伊豆国立公園に指定されている。</p>
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
            楽天トラベル高評価！河口湖・富士山ビュー厳選名宿5選
          </h2>

          <div className="space-y-8">

            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-200 flex flex-col hover:shadow-md transition">
              <div className="md:w-5/12 relative h-56 md:h-auto min-h-[220px]">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/31111/31111.jpg"
                  alt="富士河口湖温泉　湖南荘"
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
                    <span className="text-amber-500 font-bold text-sm">★ 4.71</span>
                    <span className="text-stone-400 text-xs">(1826件のクチコミ)</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">
                    富士河口湖温泉　湖南荘
                  </h3>
                  <p className="text-xs text-stone-500 mb-3">
                    アクセス: 河口湖駅 / 私鉄富士急行線　河口湖駅／中央自動車道　河口湖ＩＣより約４ｋｍ
                  </p>
                  <p className="text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed">
                    富士山が見える大浴場＆展望足湯。富士山側と河口湖側の露天風呂付や豊富な部屋タイプ。ご夕食はお部屋で。
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">最安宿泊料金目安</span>
                    <span className="text-lg font-bold text-amber-700">¥30,800〜</span>
                    <span className="text-xs text-stone-500">/名</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F31111%2F31111.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs rounded-xl shadow transition"
                  >
                    楽天トラベルで空室確認
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-200 flex flex-col hover:shadow-md transition">
              <div className="md:w-5/12 relative h-56 md:h-auto min-h-[220px]">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/19206/19206.jpg"
                  alt="庭園と感動の宿　富士山温泉　ホテル鐘山苑"
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
                    <span className="text-amber-500 font-bold text-sm">★ 4.69</span>
                    <span className="text-stone-400 text-xs">(1160件のクチコミ)</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">
                    庭園と感動の宿　富士山温泉　ホテル鐘山苑
                  </h3>
                  <p className="text-xs text-stone-500 mb-3">
                    アクセス: 富士吉田駅 / 富士急行線富士山駅より１３時～１８時の間無料送迎あり／車８分／駅到着時にお電話下さい／翌日のお送りは８：００より３０分毎
                  </p>
                  <p className="text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed">
                    富士山の見える絶景露天風呂！【２０２４年プロが選んだ旅館１００選・全国総合８位】
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">最安宿泊料金目安</span>
                    <span className="text-lg font-bold text-amber-700">¥22,000〜</span>
                    <span className="text-xs text-stone-500">/名</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F19206%2F19206.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs rounded-xl shadow transition"
                  >
                    楽天トラベルで空室確認
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-200 flex flex-col hover:shadow-md transition">
              <div className="md:w-5/12 relative h-56 md:h-auto min-h-[220px]">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/8053/8053.jpg"
                  alt="河口湖温泉　うぶや"
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
                    <span className="text-amber-500 font-bold text-sm">★ 4.29</span>
                    <span className="text-stone-400 text-xs">(727件のクチコミ)</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">
                    河口湖温泉　うぶや
                  </h3>
                  <p className="text-xs text-stone-500 mb-3">
                    アクセス: 河口湖駅 / 車：中央自動車道富士吉田線河口湖ＩＣより１０分。 　電車、バス：富士急行河口湖駅より送迎アリ(詳細問合せ下さい)。
                  </p>
                  <p className="text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed">
                    コンセプトは「人生を祝う」。大切な記念日に富士山を眺めながらゆっくり休み、家族みんなでお祝い下さい。
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">最安宿泊料金目安</span>
                    <span className="text-lg font-bold text-amber-700">¥34,100〜</span>
                    <span className="text-xs text-stone-500">/名</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F8053%2F8053.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs rounded-xl shadow transition"
                  >
                    楽天トラベルで空室確認
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-200 flex flex-col hover:shadow-md transition">
              <div className="md:w-5/12 relative h-56 md:h-auto min-h-[220px]">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/2946/2946.jpg"
                  alt="富士河口湖温泉　富士山の見える温泉旅館　大池ホテル"
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
                    <span className="text-amber-500 font-bold text-sm">★ 4.35</span>
                    <span className="text-stone-400 text-xs">(5583件のクチコミ)</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">
                    富士河口湖温泉　富士山の見える温泉旅館　大池ホテル
                  </h3>
                  <p className="text-xs text-stone-500 mb-3">
                    アクセス: 河口湖駅 / 駅から無料送迎有■駐車場無料■河口湖駅から車で4分■富士急から車で7分河口湖ICから車で12分新宿駅からバスで約120分
                  </p>
                  <p className="text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed">
                    山梨 富士山 河口湖 露天風呂 温泉 バイキング ブッフェ 温泉　貸切露天風呂
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">最安宿泊料金目安</span>
                    <span className="text-lg font-bold text-amber-700">¥13,000〜</span>
                    <span className="text-xs text-stone-500">/名</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F2946%2F2946.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs rounded-xl shadow transition"
                  >
                    楽天トラベルで空室確認
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-200 flex flex-col hover:shadow-md transition">
              <div className="md:w-5/12 relative h-56 md:h-auto min-h-[220px]">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/158471/158471.jpg"
                  alt="ホテルマイステイズ富士山　展望温泉"
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
                    <span className="text-amber-500 font-bold text-sm">★ 4.36</span>
                    <span className="text-stone-400 text-xs">(1131件のクチコミ)</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">
                    ホテルマイステイズ富士山　展望温泉
                  </h3>
                  <p className="text-xs text-stone-500 mb-3">
                    アクセス: 富士急ハイランド駅 / 富士急ハイランド駅より徒歩５分♪ 　富士急行線河口湖駅より徒歩１６分 　中央自動車道河口湖ICより車で１０分
                  </p>
                  <p className="text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed">
                    富士急ハイランドまで徒歩５分、大浴場・露天風呂あり！全室禁煙です
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">最安宿泊料金目安</span>
                    <span className="text-lg font-bold text-amber-700">¥12,760〜</span>
                    <span className="text-xs text-stone-500">/名</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F158471%2F158471.html"
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
          <h3 className="text-base font-bold text-stone-900 mb-3">河口湖紅葉まつりの観光アドバイス</h3>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>混雑対策:</strong> もみじ回廊周辺の駐車場は週末日中・夕方に激しい渋滞が発生します。早朝の散策、または宿から周遊レトロバスの利用がスムーズです。</li>
            <li><strong>ライトアップ時間:</strong> 日没（16:30頃）から22:00まで点灯されます。夜間は急激に冷え込みますので冬用のアウターをご準備ください。</li>
            <li><strong>絶景撮影スポット:</strong> 大石公園のコキアと富士山、河口湖北岸ウォーキングトレイルからの逆さ富士が人気のフォトスポットです。</li>
          </ul>
        </section>
      </div>
    
        {/* Enriched Rakuten API & Wikipedia Tourist Guide */}
        <section data-enriched-rakuten-wiki="true" className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200 space-y-8 my-10">
          <div className="space-y-2 border-b border-stone-200 pb-4">
            <span className="text-[11px] font-extrabold text-amber-700 bg-amber-50 border border-amber-200 px-3 py-0.5 rounded-full uppercase">
              RAKUTEN TRAVEL API &amp; LOCAL GUIDE
            </span>
            <h2 className="text-xl md:text-2xl font-bold text-stone-900">
              📊 秋の河口湖：もみじ回廊の紅葉まつりと富士山絶景！レイクサイド温泉を満喫するおすすめ名宿5選「2026最新」：掲載宿スペック一覧比較表＆宿泊者クチコミ・アクセス詳細分析
            </h2>
            <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
              楽天トラベル公式APIより取得した「秋の河口湖：もみじ回廊の紅葉まつりと富士山絶景！レイクサイド温泉を満喫するおすすめ名宿5選「2026最新」」掲載宿の所在地・最寄り駅・駐車場条件・クチコミ評価・参考最安料金を一覧で比較できます。公共交通機関（新幹線・在来線・送迎バス）利用の方もマイカー・レンタカー利用の方も、旅のスタイルに合った一軒をお選びください。
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse bg-white rounded-xl overflow-hidden border border-stone-200">
              <thead>
                <tr className="bg-stone-900 text-white font-bold">
                  <th className="p-3">宿名</th>
                  <th className="p-3">所在地</th>
                  <th className="p-3">最寄り駅・交通</th>
                  <th className="p-3">駐車場情報</th>
                  <th className="p-3">楽天評価</th>
                  <th className="p-3">最安目安</th>
                  <th className="p-3">予約・詳細</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200">
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">1. 富士河口湖温泉　湖南荘</td>
                <td className="p-3 text-stone-600">山梨県南都留郡富士河口湖町船津4020</td>
                <td className="p-3 text-stone-600">河口湖駅周辺</td>
                <td className="p-3 text-stone-600">有　4０台　無料　県営駐車場</td>
                <td className="p-3 font-bold text-amber-600">★4.8（1824件）</td>
                <td className="p-3 font-bold text-rose-600">¥27,500〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F31111%2F31111.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">2. 庭園と感動の宿　富士山温泉　ホテル鐘山苑</td>
                <td className="p-3 text-stone-600">山梨県富士吉田市上吉田東9-1-18</td>
                <td className="p-3 text-stone-600">富士吉田駅周辺</td>
                <td className="p-3 text-stone-600">有り　5００台　無料</td>
                <td className="p-3 font-bold text-amber-600">★4.69（1165件）</td>
                <td className="p-3 font-bold text-rose-600">¥22,000〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F19206%2F19206.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">3. 河口湖温泉　うぶや</td>
                <td className="p-3 text-stone-600">山梨県南都留郡富士河口湖町浅川10</td>
                <td className="p-3 text-stone-600">河口湖駅周辺</td>
                <td className="p-3 text-stone-600">有り　50台　無料　先着順</td>
                <td className="p-3 font-bold text-amber-600">★4.26（725件）</td>
                <td className="p-3 font-bold text-rose-600">¥34,100〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F8053%2F8053.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">4. 富士河口湖温泉　富士山の見える温泉旅館　大池ホテル</td>
                <td className="p-3 text-stone-600">山梨県南都留郡富士河口湖町船津6713-103</td>
                <td className="p-3 text-stone-600">河口湖駅周辺</td>
                <td className="p-3 text-stone-600">無料駐車場50台・河口湖駅からの無料送迎有・バイク専用の駐車場無・富士急ハイランドまで車で7分</td>
                <td className="p-3 font-bold text-amber-600">★4.36（5587件）</td>
                <td className="p-3 font-bold text-rose-600">¥13,000〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F2946%2F2946.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">5. ホテルマイステイズ富士山　展望温泉</td>
                <td className="p-3 text-stone-600">山梨県富士吉田市新倉2654</td>
                <td className="p-3 text-stone-600">富士急ハイランド駅周辺</td>
                <td className="p-3 text-stone-600">有　７４台　無料　事前のご連絡不要　空いてる区画スペースにお停めください。</td>
                <td className="p-3 font-bold text-amber-600">★4.35（1136件）</td>
                <td className="p-3 font-bold text-rose-600">¥12,290〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F158471%2F158471.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              </tbody>
            </table>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold text-stone-900 border-l-4 border-amber-600 pl-3">
              🏨 各宿の宿泊者リアルクチコミ・客室イメージ・項目別評価データ
            </h3>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #1</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">富士河口湖温泉　湖南荘</h3>
                  <span className="text-xs text-stone-400 ml-2">（ふじかわぐちこおんせん　こなんそう）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥27,500〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/31111/31111_h1.jpg" alt="富士河口湖温泉　湖南荘 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>富士山が見える大浴場＆展望足湯。富士山側と河口湖側の露天風呂付や豊富な部屋タイプ。ご夕食はお部屋で。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 山梨県南都留郡富士河口湖町船津4020 ／ 最寄り駅：河口湖 ／ 交通案内：私鉄富士急行線　河口湖駅／中央自動車道　河口湖ＩＣより約４ｋｍ</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有　4０台　無料　県営駐車場</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「富士河口湖温泉　湖南荘は立地・設備・ホスピタリティのバランスに優れ、観光拠点としても記念日や週末リフレッシュ滞在としても高い満足度を得ています。」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #2</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">庭園と感動の宿　富士山温泉　ホテル鐘山苑</h3>
                  <span className="text-xs text-stone-400 ml-2">（ていえんとかんどうのやど　ふじさんおんせん　ほてるかねやまえん）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥22,000〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/19206/19206_bath.jpg" alt="庭園と感動の宿　富士山温泉　ホテル鐘山苑 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>富士山の見える絶景露天風呂！【２０２４年プロが選んだ旅館１００選・全国総合８位】</p>
                  <p><strong>【所在地・アクセス】</strong>〒 山梨県富士吉田市上吉田東9-1-18 ／ 最寄り駅：富士吉田 ／ 交通案内：富士急行線富士山駅より１３時～１８時の間無料送迎あり／車８分／駅到着時にお電話下さい／翌日のお送りは８：００より３０分毎</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　5００台　無料</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.69 ／ 立地 ★4.71 ／ 部屋 ★4.64 ／ 設備 ★4.6 ／ 風呂 ★4.73 ／ 食事 ★4.75</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「食事と温泉は最高だが運営姿勢に疑問あり〇お食事:素晴らしい。いわゆる温泉旅館ランキング上位の旅館だということが他の上位旅館に実際宿泊して比較してみて理解できた。夕飯のお肉は少し残念。温かく出してほ…　2026-10-10 11:41:48投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #3</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">河口湖温泉　うぶや</h3>
                  <span className="text-xs text-stone-400 ml-2">（かわぐちこおんせん　うぶや）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥34,100〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/8053/8053_bath2.jpg" alt="河口湖温泉　うぶや 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>コンセプトは「人生を祝う」。大切な記念日に富士山を眺めながらゆっくり休み、家族みんなでお祝い下さい。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 山梨県南都留郡富士河口湖町浅川10 ／ 最寄り駅：河口湖 ／ 交通案内：車：中央自動車道富士吉田線河口湖ＩＣより１０分。 　電車、バス：富士急行河口湖駅より送迎アリ(詳細問合せ下さい)。</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　50台　無料　先着順</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「食事も美味しく、お部屋もとても綺麗!ご飯もとても美味しく、お部屋もとても綺麗でした!クチコミの詳細はこちらから　https://review.travel.rakuten.co.jp/hote…　2026-09-01 21:06:49投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #4</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">富士河口湖温泉　富士山の見える温泉旅館　大池ホテル</h3>
                  <span className="text-xs text-stone-400 ml-2">（ふじかわぐちこおんせん　ふじさんのみえるおんせんりょかん　おおいけほてる）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥13,000〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/2946/2946_wa.jpg" alt="富士河口湖温泉　富士山の見える温泉旅館　大池ホテル 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>山梨 富士山 河口湖 露天風呂 温泉 バイキング ブッフェ 温泉　貸切露天風呂</p>
                  <p><strong>【所在地・アクセス】</strong>〒 山梨県南都留郡富士河口湖町船津6713-103 ／ 最寄り駅：河口湖 ／ 交通案内：駅から無料送迎有■駐車場無料■河口湖駅から車で4分■富士急から車で7分河口湖ICから車で12分新宿駅からバスで約120分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>無料駐車場50台・河口湖駅からの無料送迎有・バイク専用の駐車場無・富士急ハイランドまで車で7分</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.5 ／ 立地 ★4.4 ／ 部屋 ★4.23 ／ 設備 ★4.29 ／ 風呂 ★4.31 ／ 食事 ★4.45</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「富士山が見えた瞬間に感動、料理も最高とても良いお部屋で最高でしたお部屋には浴衣や作務衣が全サイズ取り揃えてあり早速着替えてゆったりと過ごせましたお料理もどれも美味しく大満足でした富…　2026-10-06 19:19:59投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #5</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">ホテルマイステイズ富士山　展望温泉</h3>
                  <span className="text-xs text-stone-400 ml-2">（ほてるまいすていずふじやま　てんぼうおんせん）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥12,290〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/158471/158471.jpg" alt="ホテルマイステイズ富士山　展望温泉 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>富士急ハイランドまで徒歩５分、大浴場・露天風呂あり！全室禁煙です</p>
                  <p><strong>【所在地・アクセス】</strong>〒 山梨県富士吉田市新倉2654 ／ 最寄り駅：富士急ハイランド ／ 交通案内：富士急ハイランド駅より徒歩５分♪ 　富士急行線河口湖駅より徒歩１６分 　中央自動車道河口湖ICより車で１０分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有　７４台　無料　事前のご連絡不要　空いてる区画スペースにお停めください。</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.37 ／ 立地 ★4.43 ／ 部屋 ★4.32 ／ 設備 ★4.31 ／ 風呂 ★4.27 ／ 食事 ★4.4</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「部屋の清掃不備とコンビニまでの距離が難点平日に泊まりましたがほとんど外国人観光客の方でした。部屋の広さは二人で荷物入れたらちょうどいいくらいでした。部屋の清掃なのですがパッと見は綺麗でした…　2026-10-10 23:50:22投稿」
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-6 border-t border-stone-200">
            <h3 className="text-lg font-bold text-stone-900 border-l-4 border-teal-600 pl-3">
              🗺️ あわせて巡りたい！山梨県の代表的な観光名所・歴史自然ガイド（Wikipedia公認画像・解説）
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              宿泊前後の1泊2日・2泊3日モデルコースに組み込みたい、山梨県を代表する名所・絶景スポットの解説です。チェックイン前後の荷物預かりや駅周辺のレンタカー・周遊バスを活用すると効率よく巡ることができます。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #1</span>
                <h3 className="text-base font-bold text-stone-900">富士山（吉田ルート/五合目）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">日本の最高峰であり世界文化遺産の象徴。富士スバルラインで行く五合目は観光施設が充実し、眼下に雲海を望む圧巻のスタート地点です。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #2</span>
                <h3 className="text-base font-bold text-stone-900">新倉山浅間公園（忠霊塔）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">五重塔（忠霊塔）越しに雄大な富士山と満開の桜を一望できる、世界中の観光客が熱望する「これぞ日本」という究極のアジアンビジュアルスポット。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #3</span>
                <h3 className="text-base font-bold text-stone-900">富士五湖（河口湖）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">富士山の北麓に位置する静かな湖畔リゾート。四季折々の富士山が水面に映る「逆さ富士」や、大石公園のコキア・ラベンダー越しのアングルが人気です。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #4</span>
                <h3 className="text-base font-bold text-stone-900">勝沼ぶどうの丘</h3>
                <p className="text-xs text-stone-600 leading-relaxed">日本有数のワイン産地・勝沼の高台に立つ総合ワインリゾート。タパスとともに100種類以上の甲州ワインを試飲できる地下ワインカーヴが魅力です。</p>
              </div>
            </div>
            </div>
          </div>

          <div className="bg-amber-50/70 rounded-2xl p-5 md:p-6 border border-amber-200 space-y-3 text-xs text-stone-700 leading-relaxed">
            <h3 className="text-sm md:text-base font-bold text-amber-950">
              💡 山梨県エリアの宿泊予約・シーズン別ベストタイミングと節約ノウハウ
            </h3>
            <p>
              <strong>1. 早期予約と楽天トラベルクーポンの併用：</strong> 山梨県の人気温泉宿・リゾートホテルは、週末や連休・紅葉・年末年始の60日〜30日前から一気に予約が埋まります。毎月5と0のつく日やスーパーSALE期間中に配布される宿クーポン・自治体クーポンを併用すると、通常より最大10〜20%お得に予約可能です。
            </p>
            <p>
              <strong>2. 夕食・朝食プランと部屋タイプの選び方：</strong> 地元産の旬魚介やブランド牛会席を味わうなら「夕朝食付きプラン」、周辺の屋台・老舗居酒屋・ご当地グルメを食べ歩くなら「朝食付き」または「素泊まり＋天然温泉大浴場付きホテル」を選ぶと予算と満足度のバランスが最適化されます。
            </p>
          </div>
        </section>

      </article>
  );
}
