import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '【熱海温泉×ふるさと納税】相模湾オーシャンビュー＆熱海海上花火大会特等席！名門老舗＆絶景リゾート完全ガイド｜熱海後楽園ホテル・古屋旅館・秀花園湯の花膳',
  description: '都心から新幹線で約45分！年中開催の海上花火大会と相模湾の絶景を誇る日本屈指の温泉リゾート「熱海温泉」を楽天ふるさと納税でお得に満喫！海一望のパノラマと大型スパ併設の「熱海後楽園ホテル」、創業百八十余年・熱海最古の名湯を誇る「古屋旅館」、花火と夜景を屋上露天から見晴らす「秀花園 湯の花膳」を徹底紹介。金目鯛会席や熱海市クーポン活用術を網羅。',
  keywords: '熱海温泉 ふるさと納税,熱海 花火大会 見える 宿 ふるさと納税,熱海後楽園ホテル クーポン,古屋旅館 熱海 宿泊,熱海市 ふるさと納税 楽天トラベル',
  openGraph: {
    title: '【熱海温泉×ふるさと納税】相模湾オーシャンビュー＆熱海海上花火大会特等席！名門老舗＆絶景リゾート完全ガイド｜熱海後楽園ホテル・古屋旅館・秀花園湯の花膳',
    description: '都心から新幹線で約45分！年中開催の海上花火大会と相模湾の絶景を誇る日本屈指の温泉リゾート「熱海温泉」を楽天ふるさと納税でお得に満喫！海一望のパノラマと大型スパ併設の「熱海後楽園ホテル」、創業百八十余年・熱海最古の名湯を誇る「古屋旅館」、花火と夜景を屋上露天から見晴らす「秀花園 湯の花膳」を徹底紹介。金目鯛会席や熱海市クーポン活用術を網羅。',
    type: 'article',
    url: 'https://croud-travel.pages.dev/furusato-tax-atami-onsen-fireworks-ocean-stay',
  },
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-atami-onsen-fireworks-ocean-stay',
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
            【熱海温泉×ふるさと納税】相模湾オーシャンビュー＆熱海海上花火大会特等席！名門老舗＆絶景リゾート完全ガイド｜熱海後楽園ホテル・古屋旅館・秀花園湯の花膳
          </h1>
          <p className="text-stone-300 text-sm md:text-base max-w-2xl mx-auto pt-2 leading-relaxed">
            都心から新幹線で約45分！年中開催の海上花火大会と相模湾の絶景を誇る日本屈指の温泉リゾート「熱海温泉」を楽天ふるさと納税でお得に満喫！海一望のパノラマと大型スパ併設の「熱海後楽園ホテル」、創業百八十余年・熱海最古の名湯を誇る「古屋旅館」、花火と夜景を屋上露天から見晴らす「秀花園 湯の花膳」を徹底紹介。金目鯛会席や熱海市クーポン活用術を網羅。
          </p>
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4 text-xs text-stone-400">
            <span>対象自治体: <strong className="text-amber-300">静岡県熱海市</strong></span>
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
            青く広がる相模湾、夜空を彩る大迫力の海上花火、歴史ある源泉の温もり——熱海温泉で叶える最高の贅沢ステイ
          </h2>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            東京駅から東海道新幹線でわずか約45分。相模灘に面した温暖な気候と、徳川家康公が逗留し江戸城まで温泉を運ばせたことで名高い熱海温泉。日本三大温泉の一つに数えられ、毎分約17,000リットルもの豊富な湯量を誇ります。近年は昭和レトロな温泉街の風情と、最新のお洒落なスイーツ店やカフェ、オーシャンビューリゾートが融合し、若者からファミリー、シニア世代まで絶大な人気を集めています。
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            熱海の最大の目玉は、年間を通じて10回以上開催される名物「熱海海上花火大会」。すり鉢状の地形のため花火の音が反響し、スタジアムのような迫力満点の轟音と光のスペクタクルが夜の海を彩ります。客室や露天風呂から花火を特等席で眺め、夕食には相模湾の金目鯛の姿煮や伊勢海老、アワビを堪能する滞在は至高の贅沢。静岡県熱海市へのふるさと納税を利用すれば、30%相当のトラベルクーポンにより憧れの高級宿へお得に宿泊でき、特別な記念日旅行が最高のものになります。
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
            <h3 className="text-lg sm:text-xl font-bold font-serif">静岡県熱海市のふるさと納税クーポンをチェック</h3>
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/1656/1656.jpg"
                alt="熱海温泉　熱海後楽園ホテル"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第1選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.4（口コミ 3127件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">静岡県熱海市</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  熱海温泉　熱海後楽園ホテル
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  全室オーシャンビュー＆熱海海上花火大会の特等席！巨大日帰り温泉施設「オーシャンスパ Fuua」併設の大型リゾート
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  熱海後楽園ホテル —— 相模灘を見晴らす抜群のパノラマ。花火観賞と極上のインフィニティ露天風呂
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 客室バルコニーから見下ろす相模灘と花火のダイナミックパノラマ
                    </h5>
                    <p className="text-stone-600 leading-relaxed">タワー館や新館AQUA SQUAREの全客室から海を一望。花火大会開催日には、目の前の海上から打ち上がる大迫力のスターマインを特等席で鑑賞できます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 日本最大級の露天立ち湯を備えた「オーシャンスパ Fuua」
                    </h5>
                    <p className="text-stone-600 leading-relaxed">海と湯船が一体化するインフィニティ温泉「露天立ち湯」。海風を感じながら、まるで海に浮かんでいるかのような極上の開放感を味わえます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 伊豆の山海の幸が並ぶ豪華ディナービュッフェ＆和食レストラン
                    </h5>
                    <p className="text-stone-600 leading-relaxed">ライブキッチンで仕上げるグリル料理や新鮮な刺身、伊豆特産の食材を取り入れた多彩なビュッフェ。ファミリーからカップルまで幅広く楽しめます。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.40点、口コミ3100件超。「部屋からの海の景色と花火の迫力が最高」「Fuuaの立ち湯露天風呂が開放感抜群で何時間でもいられた」と大絶賛されています。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div>住所: 静岡県 熱海市和田浜南町10-1</div>
                <div>最寄り駅・アクセス: 東京から新幹線で50分！熱海駅よりタクシーで約10分。送迎バス　9:40～19:00まで40分毎</div>
                <div>参考料金: <span className="font-bold text-stone-800">¥11,660〜</span></div>
                <div>ホテル番号: No.1656</div>
              </div>

              {/* 予約プラン確認ボタン */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D1656"
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/16668/16668.jpg"
                alt="熱海温泉　古屋旅館"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第2選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.86（口コミ 569件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">静岡県熱海市</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  熱海温泉　古屋旅館
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  創業百八十余年・熱海最古の源泉「清左衛門の湯」を守る名門！全室お部屋食と名物金目鯛の本格日本料理
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  熱海温泉 古屋旅館 —— 熱海の歴史と格式を今に伝える最高峰老舗。100％源泉掛け流しと至福の部屋食懐石
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 熱海七湯の一つ「清左衛門の湯」を引く純度100％の掛け流し
                    </h5>
                    <p className="text-stone-600 leading-relaxed">江戸時代から枯れることなく湧き続ける奇跡の名湯。加水・加温・循環一切なしの本物の源泉掛け流し温泉を大浴場や露天風呂付き客室で満喫できます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 朝夕ともにゆったりと味わえる完全お部屋食スタイル
                    </h5>
                    <p className="text-stone-600 leading-relaxed">熟練の仲居さんが一品ずつ丁寧に配膳。周りを気にすることなく、大切な人と優雅に名門旅館の味を堪能できます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 秘伝のタレで煮付けた金目鯛の姿煮と旬の京風懐石
                    </h5>
                    <p className="text-stone-600 leading-relaxed">料理長が選び抜いた上質な海の幸。伊豆名物の金目鯛の煮付けや黒毛和牛など、繊細な出汁と職人技が光る贅沢なディナーを堪能できます。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.86点という驚異的な高スコア。「お湯の質、お部屋食の料理、接客のすべてが完璧」「熱海で一番の宿だと確信した」と熱狂的な支持を集めています。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div>住所: 静岡県 熱海市東海岸町5-24</div>
                <div>最寄り駅・アクセス: ＪＲ熱海駅からタクシーで５分。徒歩１３分。熱海サンビーチまでは徒歩３分♪</div>
                <div>参考料金: <span className="font-bold text-stone-800">¥39,380〜</span></div>
                <div>ホテル番号: No.16668</div>
              </div>

              {/* 予約プラン確認ボタン */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D16668"
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/7666/7666.jpg"
                alt="熱海温泉　秀花園湯の花膳"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第3選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.61（口コミ 1440件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">静岡県熱海市</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  熱海温泉　秀花園湯の花膳
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  熱海港と市街の夜景・花火を見下ろす屋上展望露天風呂「月下美人」！料理口コミ高評価の割烹温泉旅館
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  熱海温泉 秀花園 湯の花膳 —— 海と夜景を抱く特等席。屋上露天風呂からの花火観賞と美食割烹の饗宴
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 屋上展望露天風呂「月下美人」からの絶景パノラマビュー
                    </h5>
                    <p className="text-stone-600 leading-relaxed">熱海港の堤防のすぐ目の前に位置し、海と市街地の煌めく夜景を一望。花火大会の日には、頭上に広がる大輪の花火を露天風呂から仰ぎ見ることができます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 料理長が腕を振るう目にも鮮やかな本格割烹会席
                    </h5>
                    <p className="text-stone-600 leading-relaxed">相模湾で獲れた地魚の姿造りや、アワビの踊り焼き、金目鯛の煮付けなど、魚介本来の甘みと旨味を最大限に引き出した料理が高く評価されています。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 全室海側の落ち着いた純和風客室と細やかなもてなし
                    </h5>
                    <p className="text-stone-600 leading-relaxed">窓一面に広がる穏やかな海景色。波の音を聞きながら、日常の疲れを解きほぐす穏やかな時間を過ごせます。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.61点、口コミ1400件超。「屋上露天風呂からの景色が最高」「お料理がどれも美味しく、花火を部屋から見られて感動した」と高い人気を誇ります。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div>住所: 静岡県 熱海市和田浜南町7-13</div>
                <div>最寄り駅・アクセス: JR熱海駅よりタクシー７分※熱海駅より玄関前にてスタッフがお出迎えする無料送迎バス有【要予約】</div>
                <div>参考料金: <span className="font-bold text-stone-800">¥9,000〜</span></div>
                <div>ホテル番号: No.7666</div>
              </div>

              {/* 予約プラン確認ボタン */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D7666"
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
            熱海温泉街・熱海海上花火大会＆ACAO FOREST観光ガイド
          </h2>
          <div className="grid gap-4">

            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/60 space-y-2">
              <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                <span className="text-amber-600">◆</span> 熱海海上花火大会の歴史と観賞のポイント
              </h3>
              <p className="text-stone-700 text-sm leading-relaxed">昭和27年から続く熱海名物の海上花火大会。夏だけでなく春・秋・冬と年間を通じて定期開催。海上に浮かぶ台船から打ち上げられ、フィナーレの「大空中ナイアガラ」は夜空一面を白銀の光で埋め尽くします。</p>
            </div>

            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/60 space-y-2">
              <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                <span className="text-amber-600">◆</span> ACAO FOREST（旧アカオハーブ＆ローズガーデン）での絶景カフェ
              </h3>
              <p className="text-stone-700 text-sm leading-relaxed">相模灘を見下ろす広大な丘陵地に13のテーマガーデンが広がる名所。建築家・隈研吾氏設計の絶景カフェ「COEDA HOUSE」や、空飛ぶブランコなどフォトジェニックな体験が人気です。</p>
            </div>

            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/60 space-y-2">
              <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                <span className="text-amber-600">◆</span> 熱海銀座商店街でのレトロ食べ歩きと熱海プリン
              </h3>
              <p className="text-stone-700 text-sm leading-relaxed">昭和レトロな看板が残る「熱海銀座商店街」。大行列ができる「熱海プリン」や、熱海ばたーあん、クラフトビールなど、湯上がりの散策にぴったりのグルメが満載です。</p>
            </div>
          </div>
        </section>

        {/* ふるさと納税活用ステップ */}
        <section className="bg-gradient-to-br from-amber-900 via-stone-900 to-stone-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-amber-300 font-semibold">How to Use Coupon</span>
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-amber-50">
              静岡県熱海市ふるさと納税×楽天トラベルクーポン活用手順
            </h2>
            <p className="text-stone-300 text-xs sm:text-sm">
              初めての方でも迷わず利用できる3ステップ。予約済みのプランにも後から適用可能です。
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 text-xs sm:text-sm">

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/10 space-y-2">
              <div className="font-bold text-amber-300 text-sm">Step 1: 楽天ふるさと納税で「静岡県熱海市」のクーポンを獲得</div>
              <p className="text-stone-200 leading-relaxed">楽天ふるさと納税で「熱海市」のトラベルクーポン（寄付額の30%相当補助）を返礼品として申し込みます。寄付完了と同時にアカウントへクーポンが付与されます。</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/10 space-y-2">
              <div className="font-bold text-amber-300 text-sm">Step 2: 3年間の有効期間内で花火大会開催日や週末旅行を計画</div>
              <p className="text-stone-200 leading-relaxed">クーポンの有効期限は発行から3年間。熱海海上花火大会の開催日程や連休、週末の温泉旅行など、希望の日程に合わせて自由に予約できます。</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/10 space-y-2">
              <div className="font-bold text-amber-300 text-sm">Step 3: 楽天トラベル予約画面でクーポン割引を適用</div>
              <p className="text-stone-200 leading-relaxed">熱海後楽園ホテル、古屋旅館、秀花園湯の花膳などの対象宿を予約する際、確認画面でクーポンを選択。宿泊代金から30%相当額がダイレクトに値引きされます。</p>
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
              <Link href="/furusato-tax-hakone-sengokuhara-pampas-luxury-stay" className="hover:text-amber-800 underline flex items-center gap-1.5 py-1">
                <span>▸</span> 箱根仙石原温泉 すすき草原＆美肌にごり湯特集
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
