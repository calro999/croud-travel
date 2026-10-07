import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '【秋の阿智村・昼神温泉】日本一の星空ナイトツアーと美肌温泉！南信州の秋を満喫するおすすめ名宿5選【2026最新】',
  description: '環境省認定「日本一の星空」の村・阿智村ヘブンスそのはらの秋の星空ナイトツアー！澄み切った秋の夜空に輝く満天の天の川と、pH9.7を誇る昼神温泉のとろとろ美肌の湯。はなや、ひるがみの森、清風苑など人気宿5選を徹底解説！',
  keywords: '阿智村 星空 ナイトツアー, 昼神温泉 宿, ヘブンスそのはら 秋, 昼神温泉 美肌の湯, 昼神温泉 はなや, ひるがみの森',
  openGraph: {
    title: '【秋の阿智村・昼神温泉】日本一の星空ナイトツアーと美肌温泉！南信州の秋を満喫するおすすめ名宿5選【2026最新】',
    description: '環境省認定「日本一の星空」の村・阿智村ヘブンスそのはらの秋の星空ナイトツアーと、昼神温泉のとろとろ美肌の湯。人気宿5選。',
    type: 'article',
    url: 'https://croud-travel.com/autumn-nagano-achimura-hirugami-starry-sky-hotels-stay',
  }
};

export default function AchimuraHirugamiAutumnPage() {
  return (
    <article className="min-h-screen bg-stone-50 text-stone-800 pb-20 font-sans">
      <div className="relative h-[480px] w-full overflow-hidden bg-stone-900">
        <Image
          src="https://img.travel.rakuten.co.jp/share/HOTEL/68642/68642.jpg"
          alt="秋の阿智村・満天の星空と昼神温泉の名湯"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12 max-w-5xl mx-auto">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="px-3 py-1 bg-amber-600 text-white text-xs font-bold rounded-full">秋の信州・絶景特集</span>
            <span className="px-3 py-1 bg-stone-800 text-amber-300 text-xs font-medium rounded-full border border-amber-400/30">星空・紅葉: 10月中旬〜11月下旬</span>
          </div>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4 drop-shadow-md">
            【秋の阿智村・昼神温泉】日本一の星空ナイトツアーと美肌温泉！南信州の秋を満喫するおすすめ名宿5選
          </h1>
          <p className="text-stone-200 text-sm md:text-base max-w-3xl line-clamp-2 md:line-clamp-none">
            大気が澄みわたり星の瞬きがひときわ輝く秋の阿智村。ロープウェイで標高1,400mの高原へ向かう「天空の楽園 ナイトツアー」と、全国屈指の強アルカリ性を誇る昼神温泉で心身をとろけさせる極上のリトリート旅をご紹介します。
          </p>
        </div>
      </div>

      <nav className="max-w-4xl mx-auto px-4 py-4 text-xs text-stone-500">
        <Link href="/" className="hover:underline text-amber-700">ホーム</Link>
        <span className="mx-2">/</span>
        <span className="text-stone-700 font-medium">阿智村星空と昼神温泉名宿5選</span>
      </nav>

      <div className="max-w-4xl mx-auto px-4 mt-6">
        <section className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-stone-200/80 mb-10 leading-relaxed">
          <h2 className="text-xl md:text-2xl font-bold text-stone-900 mb-4 border-l-4 border-amber-600 pl-3">
            秋こそ最高の星空シーズン！「天空の楽園」と奇跡の美肌湯
          </h2>
          <p className="mb-4 text-stone-700">
            長野県南端に位置する阿智村は、山々に囲まれた地形により街の明かりが遮られ、環境省の全国星空継続観察で「日本一星が輝いて見える場所」第1位に認定されました。特に秋は湿度が下がり大気の透明度が抜群に高まるため、肉眼で天の川や秋の星座がくっきりと見渡せます。
          </p>
          <p className="text-stone-700">
            星空観察の余韻に浸りながら浸かる「昼神温泉」は、pH9.7という強いアルカリ性単純硫黄泉。まるで美容液に浸かっているかのようなトロトロの肌触りで、入浴後は肌がつるつるになる「美肌の湯」として女性にも大人気です。
          </p>
        </section>

        
        {/* 観光地ガイド・公式Wikipedia写真＆解説 */}
        <section className="bg-white rounded-2xl border border-stone-200/90 overflow-hidden shadow-sm mb-10">
          <div className="bg-gradient-to-r from-stone-900 to-stone-800 text-white px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
              <h2 className="text-base md:text-lg font-bold tracking-wide">南信州・星空温泉ガイド：日本一の星空の村・阿智村と昼神温泉郷</h2>
            </div>
            <span className="text-[11px] text-stone-300 bg-white/10 px-2.5 py-0.5 rounded-full border border-white/10">地域名所ガイド</span>
          </div>
          <div className="grid md:grid-cols-12 gap-6 p-6 items-center">
            <div className="md:col-span-5 relative h-56 md:h-64 rounded-xl overflow-hidden bg-stone-100 border border-stone-200/60 shadow-inner">
              <Image
                src="https://thumb.wikimedia.org/wikipedia/commons/thumb/9/99/Japan_Chubu_mountains_relief_location_map.webp/1280px-Japan_Chubu_mountains_relief_location_map.webp"
                alt="日本一の星空の村・阿智村と昼神温泉郷"
                fill
                className="object-cover hover:scale-105 transition duration-500"
                sizes="(max-width: 768px) 100vw, 400px"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-2 text-right">
                <span className="text-[10px] text-white/90">写真：Wikimedia Commons</span>
              </div>
            </div>
            <div className="md:col-span-7 space-y-3">
              <h3 className="text-lg md:text-xl font-bold text-stone-900 leading-snug">日本一の星空の村・阿智村と昼神温泉郷の歴史と見どころ</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">昼神温泉（ひるがみおんせん）は、長野県下伊那郡阿智村付近で、国鉄中津川線を建設のためのトンネル工事中に掘り当てた温泉である。それ以前にも温泉があったとの伝説は残るものの、定かではない。</p>
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
            楽天トラベル高評価！昼神温泉の厳選名宿5選
          </h2>

          <div className="space-y-8">

            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-200 flex flex-col md:flex-row hover:shadow-md transition">
              <div className="md:w-5/12 relative h-56 md:h-auto min-h-[220px]">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/68642/68642.jpg"
                  alt="昼神温泉四季の織　はなや（旧ホテルはなや）"
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
                    <span className="text-amber-500 font-bold text-sm">★ 4.58</span>
                    <span className="text-stone-400 text-xs">(358件のクチコミ)</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">
                    昼神温泉四季の織　はなや（旧ホテルはなや）
                  </h3>
                  <p className="text-xs text-stone-500 mb-3">
                    アクセス: 飯田（長野）駅 / 飯田駅より路線バスにて３０分
                  </p>
                  <p className="text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed">
                    「24時間入り放題＆無料」の【貸切露天風呂】トロトロ泉質の美人の湯♪全17室のおもてなしの宿
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">最安宿泊料金目安</span>
                    <span className="text-lg font-bold text-amber-700">¥22,990〜</span>
                    <span className="text-xs text-stone-500">/名</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F68642%2F68642.html"
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
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/5978/5978.jpg"
                  alt="昼神温泉　ひるがみの森"
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
                    <span className="text-amber-500 font-bold text-sm">★ 4.37</span>
                    <span className="text-stone-400 text-xs">(899件のクチコミ)</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">
                    昼神温泉　ひるがみの森
                  </h3>
                  <p className="text-xs text-stone-500 mb-3">
                    アクセス: 天竜峡駅 / 中央自動車道・園原ICより車にて10分(名古屋・関西方面)、中央自動車道・飯田山本ICより車にて10分(関東・長野方面)
                  </p>
                  <p className="text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed">
                    日本一の星空ナイトツアー：当日の天気次第でもチケットキャンセルが対応可な宿★彡
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">最安宿泊料金目安</span>
                    <span className="text-lg font-bold text-amber-700">¥7,700〜</span>
                    <span className="text-xs text-stone-500">/名</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F5978%2F5978.html"
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
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/5987/5987.jpg"
                  alt="昼神温泉　癒楽（ゆら）の宿　清風苑"
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
                    <span className="text-amber-500 font-bold text-sm">★ 4.37</span>
                    <span className="text-stone-400 text-xs">(1371件のクチコミ)</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">
                    昼神温泉　癒楽（ゆら）の宿　清風苑
                  </h3>
                  <p className="text-xs text-stone-500 mb-3">
                    アクセス: 唐笠駅 / 中央道飯田山本ＩＣ～Ｒ１５３～R２５６（約10分）/　中央道園原IC～（約10分）
                  </p>
                  <p className="text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed">
                    【2025年楽天トラベルブロンズアワード受賞】★日本一の星空と笑顔のおもてなし
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">最安宿泊料金目安</span>
                    <span className="text-lg font-bold text-amber-700">¥16,100〜</span>
                    <span className="text-xs text-stone-500">/名</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F5987%2F5987.html"
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
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/4655/4655.jpg"
                  alt="昼神温泉　おとぎ亭　光風"
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
                    <span className="text-amber-500 font-bold text-sm">★ 4.37</span>
                    <span className="text-stone-400 text-xs">(1074件のクチコミ)</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">
                    昼神温泉　おとぎ亭　光風
                  </h3>
                  <p className="text-xs text-stone-500 mb-3">
                    アクセス: 飯田（長野）駅 / 【お車でお越しの方】中央道　飯田山本ICから約15分・園原ICから約5分【電車でお越しの方】飯田駅からバス等で約30分
                  </p>
                  <p className="text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed">
                    【楽天トラベルブロンズアワード2024受賞】【23年4月リニューアル】オールインクルーシブの宿
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">最安宿泊料金目安</span>
                    <span className="text-lg font-bold text-amber-700">¥21,450〜</span>
                    <span className="text-xs text-stone-500">/名</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F4655%2F4655.html"
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
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/153619/153619.jpg"
                  alt="昼神温泉　信州公共の宿　鶴巻荘"
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
                    <span className="text-amber-500 font-bold text-sm">★ 4.31</span>
                    <span className="text-stone-400 text-xs">(299件のクチコミ)</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">
                    昼神温泉　信州公共の宿　鶴巻荘
                  </h3>
                  <p className="text-xs text-stone-500 mb-3">
                    アクセス: 天竜峡駅 / 天竜峡駅よりお車にて約３０分（車でお迎えあり）
                  </p>
                  <p className="text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed">
                    やわらかな畳敷きの浴場で和の粋と深いやさしさに包まれる、ツルツルの温泉と豊かな自然に囲まれた純和風宿
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">最安宿泊料金目安</span>
                    <span className="text-lg font-bold text-amber-700">¥10,000〜</span>
                    <span className="text-xs text-stone-500">/名</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F153619%2F153619.html"
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
          <h3 className="text-base font-bold text-stone-900 mb-3">星空ナイトツアー参加のアドバイス</h3>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>防寒装備の徹底:</strong> 標高1,400mの山頂は10月・11月の夜間、気温が0℃〜5℃近くまで冷え込みます。冬用ダウン、手袋、ニット帽、レジャーシートを必ず持参しましょう。</li>
            <li><strong>チケットの事前手配:</strong> ナイトツアーは宿の専用プランで予約すると送迎バスや入場券がセットになって便利です。</li>
            <li><strong>朝市巡り:</strong> 昼神温泉街では毎朝6時から朝市が開かれ、地元特産のりんごや採れたて野菜が並びます。</li>
          </ul>
        </section>
      </div>
    </article>
  );
}
