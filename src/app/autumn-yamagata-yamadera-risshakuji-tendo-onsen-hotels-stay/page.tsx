import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '【秋の山形】山寺（立石寺）の奇岩絶壁紅葉クライミングと天童温泉！美食と名湯を楽しむおすすめ旅館5選【2026最新】',
  description: '松尾芭蕉「閑さや岩にしみ入る蝉の声」の舞台・山寺（宝珠山立石寺）の1015段の石段と五大堂からの錦秋大パノラマ！登山の疲れを癒やす将棋の街・天童温泉の極上宿5選。松の湯、あづま荘、滝の湯の宿泊料金や見どころを詳しくご紹介！',
  keywords: '山寺 紅葉, 立石寺 五大堂 絶景, 天童温泉 旅館, 山形 紅葉 温泉, 天童温泉 滝の湯, 松の湯 天童',
  openGraph: {
    title: '【秋の山形】山寺（立石寺）の奇岩絶壁紅葉クライミングと天童温泉！美食と名湯を楽しむおすすめ旅館5選【2026最新】',
    description: '松尾芭蕉ゆかりの山寺・五大堂からの錦秋大パノラマと、天童温泉の美食と名湯を満喫する厳選旅館5選。',
    type: 'article',
    url: 'https://croud-travel.com/autumn-yamagata-yamadera-risshakuji-tendo-onsen-hotels-stay',
  }
};

export default function YamaderaTendoAutumnPage() {
  return (
    <article className="min-h-screen bg-stone-50 text-stone-800 pb-20 font-sans">
      <div className="relative h-[480px] w-full overflow-hidden bg-stone-900">
        <Image
          src="https://img.travel.rakuten.co.jp/share/HOTEL/53746/53746.jpg"
          alt="秋の山形山寺（立石寺）の奇岩紅葉と天童温泉の湯浴み"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12 max-w-5xl mx-auto">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="px-3 py-1 bg-amber-600 text-white text-xs font-bold rounded-full">秋の東北・山形特集</span>
            <span className="px-3 py-1 bg-stone-800 text-amber-300 text-xs font-medium rounded-full border border-amber-400/30">見頃目安: 10月下旬〜11月上旬</span>
          </div>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4 drop-shadow-md">
            【秋の山形】山寺（立石寺）の奇岩絶壁紅葉クライミングと天童温泉！美食と名湯を楽しむおすすめ旅館5選
          </h1>
          <p className="text-stone-200 text-sm md:text-base max-w-3xl line-clamp-2 md:line-clamp-none">
            奇岩怪石が連なる宝珠山を彩る錦秋のグラデーション。1,015段の石段を踏みしめ登り詰めた「五大堂」から眼下に広がる紅葉渓谷の大パノラマと、車で約15分の天童温泉で味わう山形牛会席と名湯をご案内します。
          </p>
        </div>
      </div>

      <nav className="max-w-4xl mx-auto px-4 py-4 text-xs text-stone-500">
        <Link href="/" className="hover:underline text-amber-700">ホーム</Link>
        <span className="mx-2">/</span>
        <span className="text-stone-700 font-medium">山寺紅葉と天童温泉名宿5選</span>
      </nav>

      <div className="max-w-4xl mx-auto px-4 mt-6">
        <section className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-stone-200/80 mb-10 leading-relaxed">
          <h2 className="text-xl md:text-2xl font-bold text-stone-900 mb-4 border-l-4 border-amber-600 pl-3">
            五大堂から望む圧巻の秋パノラマと天童温泉の湯量豊富な癒やし
          </h2>
          <p className="mb-4 text-stone-700">
            慈覚大師円仁が開山した霊場「山寺（宝珠山立石寺）」。根本中堂から奥之院へと続く1,015段の石段は、一段登るごとに煩悩が消え去ると伝えられます。杉木立を抜けると突如現れる切り立った崖上の舞台「五大堂」からは、里山とJR仙山線の線路を包み込む赤や黄色の燃えるような紅葉パノラマが広がり、登山の疲れを一瞬で忘れさせてくれます。
          </p>
          <p className="text-stone-700">
            山寺参拝後の宿泊拠点として最適なのが、車や電車ですぐの「天童温泉」。弱アルカリ性の肌に優しい硫酸塩泉は運動後の筋肉疲労を解きほぐすのにぴったり。山形牛のステーキや芋煮、新米つや姫など山形ならではの秋の美食が待っています。
          </p>
        </section>

        
        {/* 観光地ガイド・公式Wikipedia写真＆解説 */}
        <section className="bg-white rounded-2xl border border-stone-200/90 overflow-hidden shadow-sm mb-10">
          <div className="bg-gradient-to-r from-stone-900 to-stone-800 text-white px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
              <h2 className="text-base md:text-lg font-bold tracking-wide">羽前・歴史名刹ガイド：閑さや岩にしみ入る・宝珠山立石寺（山寺）</h2>
            </div>
            <span className="text-[11px] text-stone-300 bg-white/10 px-2.5 py-0.5 rounded-full border border-white/10">地域名所ガイド</span>
          </div>
          <div className="grid md:grid-cols-12 gap-6 p-6 items-center">
            <div className="md:col-span-5 relative h-56 md:h-64 rounded-xl overflow-hidden bg-stone-100 border border-stone-200/60 shadow-inner">
              <Image
                src="https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3a/Risshaku-ji_konponchudo.jpg/1280px-Risshaku-ji_konponchudo.jpg"
                alt="閑さや岩にしみ入る・宝珠山立石寺（山寺）"
                fill
                className="object-cover hover:scale-105 transition duration-500"
                sizes="(max-width: 768px) 100vw, 400px"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-2 text-right">
                <span className="text-[10px] text-white/90">写真：Wikimedia Commons</span>
              </div>
            </div>
            <div className="md:col-span-7 space-y-3">
              <h3 className="text-lg md:text-xl font-bold text-stone-900 leading-snug">閑さや岩にしみ入る・宝珠山立石寺（山寺）の歴史と見どころ</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">立石寺（りっしゃくじ）は、山形県山形市にある、天台宗の仏教寺院。山寺（やまでら）の通称で知られ、古くは「りゅうしゃくじ」と称した。正式には宝珠山阿所川院立石寺（ほうじゅさんあそかわいんりっしゃくじ）と称する。本尊は薬師如来。 蔵王国定公園（第2種特別地域）に指定されており、円仁が開山した四寺（他は中尊寺・毛越寺、瑞巌寺）を巡る「四寺廻廊」を構成しているほか、若松寺と慈恩寺を含めて巡る出羽名刹三寺まいりを構成する。</p>
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
            楽天トラベル高評価！天童温泉の厳選名旅館5選
          </h2>

          <div className="space-y-8">

            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-200 flex flex-col md:flex-row hover:shadow-md transition">
              <div className="md:w-5/12 relative h-56 md:h-auto min-h-[220px]">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/52812/52812.jpg"
                  alt="天童温泉　湯の香　松の湯"
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
                    <span className="text-amber-500 font-bold text-sm">★ 4.72</span>
                    <span className="text-stone-400 text-xs">(188件のクチコミ)</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">
                    天童温泉　湯の香　松の湯
                  </h3>
                  <p className="text-xs text-stone-500 mb-3">
                    アクセス: 天童駅 / 山形新幹線東京駅から天童駅まで約2時間45分。天童駅から車で約5分
                  </p>
                  <p className="text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed">
                    天童唯一二種類の源泉100%を掛流し☆山形牛付お部屋食
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">最安宿泊料金目安</span>
                    <span className="text-lg font-bold text-amber-700">¥20,570〜</span>
                    <span className="text-xs text-stone-500">/名</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F52812%2F52812.html"
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
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/18363/18363.jpg"
                  alt="天童温泉　松伯亭　あづま荘"
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
                    <span className="text-amber-500 font-bold text-sm">★ 4.64</span>
                    <span className="text-stone-400 text-xs">(624件のクチコミ)</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">
                    天童温泉　松伯亭　あづま荘
                  </h3>
                  <p className="text-xs text-stone-500 mb-3">
                    アクセス: 天童駅 / ＪＲ天童駅下車（東京～天童間　山形新幹線で約２時間４０分）／山形自動車道　山形北ＩＣより２０分
                  </p>
                  <p className="text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed">
                    2024年5月西館リニューアル!!天童温泉で唯一の屋根のない開放感ある露天風呂。『山形牛』に舌鼓♪
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">最安宿泊料金目安</span>
                    <span className="text-lg font-bold text-amber-700">¥12,980〜</span>
                    <span className="text-xs text-stone-500">/名</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F18363%2F18363.html"
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
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/53746/53746.jpg"
                  alt="天童温泉　ほほえみの宿　滝の湯"
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
                    <span className="text-amber-500 font-bold text-sm">★ 4.58</span>
                    <span className="text-stone-400 text-xs">(1055件のクチコミ)</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">
                    天童温泉　ほほえみの宿　滝の湯
                  </h3>
                  <p className="text-xs text-stone-500 mb-3">
                    アクセス: 天童駅 / ＪＲ山形新幹線　天童駅より車にて３分、徒歩にて１５分（無料送迎あり）　山形北ＩＣより２０分
                  </p>
                  <p className="text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed">
                    天童温泉と宿泊者専用ラウンジで、心身をやさしく整える滞在をお楽しみください。
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">最安宿泊料金目安</span>
                    <span className="text-lg font-bold text-amber-700">¥15,950〜</span>
                    <span className="text-xs text-stone-500">/名</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F53746%2F53746.html"
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
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/146875/146875.jpg"
                  alt="天童温泉　ほほえみの空湯舟　つるや"
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
                    <span className="text-amber-500 font-bold text-sm">★ 4.56</span>
                    <span className="text-stone-400 text-xs">(366件のクチコミ)</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">
                    天童温泉　ほほえみの空湯舟　つるや
                  </h3>
                  <p className="text-xs text-stone-500 mb-3">
                    アクセス: 天童駅 / JR天童駅よりお車にて５分、徒歩にて１５分（無料送迎あり）。山形北ＩＣより１５分。
                  </p>
                  <p className="text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed">
                    全館畳敷きの宿。山形の四季折々のお料理、ほほえみ一杯のおもてなしで癒しのひとときを
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">最安宿泊料金目安</span>
                    <span className="text-lg font-bold text-amber-700">¥18,700〜</span>
                    <span className="text-xs text-stone-500">/名</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F146875%2F146875.html"
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
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/5954/5954.jpg"
                  alt="天童温泉　美味求真の宿　天童ホテル"
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
                    <span className="text-amber-500 font-bold text-sm">★ 4.55</span>
                    <span className="text-stone-400 text-xs">(1899件のクチコミ)</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">
                    天童温泉　美味求真の宿　天童ホテル
                  </h3>
                  <p className="text-xs text-stone-500 mb-3">
                    アクセス: 天童駅 / 山形新幹線で東京駅ー天童駅3H。天童駅東口から無料送迎4分（要予約）。天童ICから10分、山形北ICから15分。街中の宿
                  </p>
                  <p className="text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed">
                    【楽天トラベルゴールドアワード】【楽天トラベル日本の宿】2024年W受賞！山形の旬を味わえる会席料理
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">最安宿泊料金目安</span>
                    <span className="text-lg font-bold text-amber-700">¥12,100〜</span>
                    <span className="text-xs text-stone-500">/名</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F5954%2F5954.html"
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
          <h3 className="text-base font-bold text-stone-900 mb-3">山寺散策のワンポイントアドバイス</h3>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>参拝所要時間と服装:</strong> 往復で約1時間半〜2時間程度かかります。歩きやすいスニーカーと脱ぎ着しやすい上着が必須です。</li>
            <li><strong>名物グルメ:</strong> 参道のふもとで販売されている熱々の「力こんにゃく」や手打ち蕎麦でエネルギーチャージしましょう。</li>
            <li><strong>将棋駒づくり体験:</strong> 天童市内では伝統工芸である将棋の飾り駒の書き駒体験が人気のアクティビティです。</li>
          </ul>
        </section>
      </div>
    </article>
  );
}
