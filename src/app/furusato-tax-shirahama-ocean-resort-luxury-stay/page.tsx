import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '【南紀白浜温泉×ふるさと納税】白良浜オーシャンビュー＆アドベンチャーワールド！名門宮殿リゾート＆極上クエ会席ガイド｜ホテル川久・むさし・白浜マリオット',
  description: '日本三古湯の一つ・南紀白浜温泉を楽天ふるさと納税でお得にリゾートステイ！総工費400億円の芸術宮殿ホテル「ホテル川久」の王様のビュッフェ、白良浜徒歩1分で2種の源泉を誇る「紀州・白浜温泉 むさし」、太平洋の絶景を望む「南紀白浜マリオットホテル」を徹底比較。和歌山県白浜町クーポン活用術を網羅。',
  keywords: '白浜温泉 ふるさと納税,ホテル川久 ふるさと納税,白良浜 ホテル クーポン,アドベンチャーワールド 宿泊,白浜町 ふるさと納税 楽天トラベル',
  openGraph: {
    title: '【南紀白浜温泉×ふるさと納税】白良浜オーシャンビュー＆アドベンチャーワールド！名門宮殿リゾート＆極上クエ会席ガイド｜ホテル川久・むさし・白浜マリオット',
    description: '日本三古湯の一つ・南紀白浜温泉を楽天ふるさと納税でお得にリゾートステイ！総工費400億円の芸術宮殿ホテル「ホテル川久」の王様のビュッフェ、白良浜徒歩1分で2種の源泉を誇る「紀州・白浜温泉 むさし」、太平洋の絶景を望む「南紀白浜マリオットホテル」を徹底比較。和歌山県白浜町クーポン活用術を網羅。',
    type: 'article',
    url: 'https://croud-travel.pages.dev/furusato-tax-shirahama-ocean-resort-luxury-stay',
  },
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-shirahama-ocean-resort-luxury-stay',
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
            【南紀白浜温泉×ふるさと納税】白良浜オーシャンビュー＆アドベンチャーワールド！名門宮殿リゾート＆極上クエ会席ガイド｜ホテル川久・むさし・白浜マリオット
          </h1>
          <p className="text-stone-300 text-sm md:text-base max-w-2xl mx-auto pt-2 leading-relaxed">
            日本三古湯の一つ・南紀白浜温泉を楽天ふるさと納税でお得にリゾートステイ！総工費400億円の芸術宮殿ホテル「ホテル川久」の王様のビュッフェ、白良浜徒歩1分で2種の源泉を誇る「紀州・白浜温泉 むさし」、太平洋の絶景を望む「南紀白浜マリオットホテル」を徹底比較。和歌山県白浜町クーポン活用術を網羅。
          </p>
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4 text-xs text-stone-400">
            <span>対象自治体: <strong className="text-amber-300">和歌山県白浜町</strong></span>
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
            エメラルドグリーンの海と白砂ビーチ、悠久の古湯、世界屈指の建築美——南紀白浜で叶える贅沢リゾートステイ
          </h2>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            和歌山県・紀伊半島の南西部に位置し、万葉集や日本書紀にも「牟婁の湯」として記録が残る日本屈指の古湯・南紀白浜温泉。どこまでも透き通るエメラルドグリーンの海と、サラサラの真っ白な珪砂が広がる「白良浜（しららはま）」は、本州屈指のビーチリゾートとして年間を通じて多くの旅人を魅了します。海を間近に感じるナトリウム塩化物泉や炭酸水素塩泉は、疲れた体を癒すとともにしっとりとした肌触りをもたらします。
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            さらに南紀白浜には、パンダファミリーに出会える「アドベンチャーワールド」や、夕陽の名所「円月島」「三段壁」など見どころが満載。そして冬には幻の高級魚「クエ」の鍋や刺身、伊勢海老、熊野牛といった和歌山最高峰の美食が並びます。海辺にそびえる芸術宮殿「ホテル川久」をはじめとする名門ホテルへの宿泊は、和歌山県白浜町へのふるさと納税トラベルクーポンを利用することで、実質負担を大幅に抑えながらワンランク上のラグジュアリー体験を手に入れられます。
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
            <h3 className="text-lg sm:text-xl font-bold font-serif">和歌山県白浜町のふるさと納税クーポンをチェック</h3>
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/14111/14111.jpg"
                alt="白浜温泉　ホテル川久"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第1選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.56（口コミ 3703件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">和歌山県白浜町</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  白浜温泉　ホテル川久
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  総工費四百億円・海に浮かぶ夢の芸術宮殿！全室スイートルームと豪華食材が舞い踊る「王様のビュッフェ」
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  白浜温泉 ホテル川久 —— 世界の一流職人が技を競った建築博物館。非日常の極みを味わうキャッスルステイ
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 金箔22.5金が輝く天井とヨーロッパ古城のような建築美
                    </h5>
                    <p className="text-stone-600 leading-relaxed">ロビーに入ると広がる圧巻のドーム天井（ギネス記録認定の金箔天井）や、ローマンモザイクタイルの床、ダリやシャガールらの名画。館内全体がひとつの壮大な美術館です。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 贅を尽くした美食の祭典「王様のビュッフェ」
                    </h5>
                    <p className="text-stone-600 leading-relaxed">黒毛和牛ステーキ、十勝産十勝牛、旬の高級魚介、パティシエ特製の華やかなスイーツなど、最高峰の食材をオープンキッチンで仕上げる豪華ディナー。贅沢を極めた食の体験です。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 田辺湾を見渡す温泉サロン「ロイヤルスパ」
                    </h5>
                    <p className="text-stone-600 leading-relaxed">邸宅リビングのような優雅な温泉サロン。オープンテラスデッキやシルキーバス、サウナなどを備え、穏やかな海のパノラマを眺めながら優雅な湯浴みを愉しめます。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.56点、口コミ3700件超。「建物の重厚さと美しさに圧倒された」「王様のビュッフェは名前負けしない人生最高のバイキング」と熱狂的なファンを抱えています。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div>住所: 和歌山県 西牟婁郡白浜町3745</div>
                <div>最寄り駅・アクセス: JR白浜駅から車で約10分※無料送迎バス運行／南紀白浜空港から車で約10分／大阪から車で阪和道南紀田辺IC経由で約2時間</div>
                <div>参考料金: <span className="font-bold text-stone-800">¥27,000〜</span></div>
                <div>ホテル番号: No.14111</div>
              </div>

              {/* 予約プラン確認ボタン */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D14111"
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/19739/19739.jpg"
                alt="紀州・白浜温泉　むさし"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第2選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.3（口コミ 2594件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">和歌山県白浜町</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  紀州・白浜温泉　むさし
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  白良浜まで徒歩一分の絶好ロケーション！二種類の源泉掛け流しと紀州の美味が並ぶ贅沢バイキング
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  紀州・白浜温泉 むさし —— 温泉情緒とビーチアクセスの両立。本格純和風旅館の温かなおもてなし
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 白浜の名湯「生絹湯」と「斎明湯」の2つの自家源泉
                    </h5>
                    <p className="text-stone-600 leading-relaxed">敷地内から湧き出る2種類の源泉。重層泉と食塩泉の異なる泉質を館内大浴場や中庭露天風呂で入り比べることができ、本格的な湯治体験が味わえます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 白良浜まで水着のまま歩いて行ける抜群の立地
                    </h5>
                    <p className="text-stone-600 leading-relaxed">白浜のメインビーチ「白良浜」まで徒歩わずか1分。夏場の海水浴はもちろん、夕暮れ時の浜辺散歩や朝の爽やかなウォーキングにも最高の環境です。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 勝浦産マグロ解体ショーと紀州郷土バイキング
                    </h5>
                    <p className="text-stone-600 leading-relaxed">オープンキッチンで捌かれる新鮮なマグロの刺身や握り、揚げたて天ぷら、和歌山ラーメンなど、地元の郷土色豊かな料理が並ぶ人気のディナービュッフェです。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.30点、口コミ2500件超。ビーチへの近さ、2つの異なる泉質の温泉、子ども連れでも安心の充実したバイキング料理とスタッフの親切な対応が高く評価されています。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div>住所: 和歌山県 西牟婁郡白浜町868</div>
                <div>最寄り駅・アクセス: JR白浜駅より車で約10分／南紀白浜空港より車で約10分／アドベンチャーワールドより車で約15分</div>
                <div>参考料金: <span className="font-bold text-stone-800">¥8,800〜</span></div>
                <div>ホテル番号: No.19739</div>
              </div>

              {/* 予約プラン確認ボタン */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D19739"
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/160834/160834.jpg"
                alt="南紀白浜マリオットホテル"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第3選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.4（口コミ 1917件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">和歌山県白浜町</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  南紀白浜マリオットホテル
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  太平洋を見下ろす高台に建つインターナショナルリゾート！最上階展望露天風呂と和歌山の山海グリル
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  南紀白浜マリオットホテル —— 洗練されたグローバルスタンダード。海と空が溶け合うインフィニティパノラマ
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 最上階11階の展望露天風呂から望む夕陽パノラマ
                    </h5>
                    <p className="text-stone-600 leading-relaxed">太平洋を一望する高台の最上階に位置する大浴場＆露天風呂。「日本の夕陽百選」に選ばれた白浜のサンセットを湯船から望む時間は息をのむ美しさです。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 広々とした客室とオーシャンビュー温泉付きルーム
                    </h5>
                    <p className="text-stone-600 leading-relaxed">ゆとりある客室設計。プライベートな温泉展望風呂を備えた客室タイプでは、24時間いつでも好きな時に海を眺めながら白浜の名湯を満喫できます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 和歌山の新鮮素材を味わうモダンセミビュッフェ＆グリル
                    </h5>
                    <p className="text-stone-600 leading-relaxed">開放的なダイニングで供されるディナー。熊野牛や紀州うめぶた、近海魚介のグリル料理をメインに、前菜やデザートが並ぶ洗練されたリゾートディナーです。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.40点、口コミ1900件超。最上階露天風呂からの夕景の美しさ、客室の清潔感と広さ、マリオットブランドならではのスマートな接客が高く評価されています。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div>住所: 和歌山県 西牟婁郡白浜町2428</div>
                <div>最寄り駅・アクセス: JR白浜駅より車で約10分／南紀白浜空港より車で約6分／アドベンチャーワールドより車で約10分</div>
                <div>参考料金: <span className="font-bold text-stone-800">¥8,353〜</span></div>
                <div>ホテル番号: No.160834</div>
              </div>

              {/* 予約プラン確認ボタン */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D160834"
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
            南紀白浜の絶景スポット＆アドベンチャーワールド観光ガイド
          </h2>
          <div className="grid gap-4">

            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/60 space-y-2">
              <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                <span className="text-amber-600">◆</span> アドベンチャーワールドでジャイアントパンダと出会う
              </h3>
              <p className="text-stone-700 text-sm leading-relaxed">日本屈指の動物ふれあいテーマパーク「アドベンチャーワールド」。ジャイアントパンダファミリーをはじめ、広大なサファリワールドやダイナミックなイルカライブなど、一日中家族で楽しめます。</p>
            </div>

            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/60 space-y-2">
              <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                <span className="text-amber-600">◆</span> 円月島の夕陽・三段壁洞窟・千畳敷の海岸美
              </h3>
              <p className="text-stone-700 text-sm leading-relaxed">中央に丸い海蝕洞が開いた「円月島」の夕景、波が打ち寄せる雄大な畳状の岩盤「千畳敷」、そしてエレベーターで地下36mへ降りる迫力の「三段壁洞窟」。自然の神秘を感じる海岸美は見逃せません。</p>
            </div>

            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/60 space-y-2">
              <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                <span className="text-amber-600">◆</span> とれとれ市場で海鮮丼＆紀州梅干しのお土産探し
              </h3>
              <p className="text-stone-700 text-sm leading-relaxed">西日本最大級の海鮮マーケット「とれとれ市場 南紀白浜」。新鮮な魚介類の浜焼きや名物の海鮮丼をランチで味わい、紀州南高梅や和歌山地酒のお土産探しに最適です。</p>
            </div>
          </div>
        </section>

        {/* ふるさと納税活用ステップ */}
        <section className="bg-gradient-to-br from-amber-900 via-stone-900 to-stone-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-amber-300 font-semibold">How to Use Coupon</span>
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-amber-50">
              和歌山県白浜町ふるさと納税×楽天トラベルクーポン活用手順
            </h2>
            <p className="text-stone-300 text-xs sm:text-sm">
              初めての方でも迷わず利用できる3ステップ。予約済みのプランにも後から適用可能です。
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 text-xs sm:text-sm">

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/10 space-y-2">
              <div className="font-bold text-amber-300 text-sm">Step 1: 楽天ふるさと納税で「白浜町」のクーポンを獲得</div>
              <p className="text-stone-200 leading-relaxed">楽天ふるさと納税で「和歌山県白浜町」のトラベルクーポン（寄付額の30%相当補助）を返礼品として申し込みます。寄付完了後、即座に楽天アカウントへ付与されます。</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/10 space-y-2">
              <div className="font-bold text-amber-300 text-sm">Step 2: 3年間の有効期間内で夏の海や冬のクエ旅行を計画</div>
              <p className="text-stone-200 leading-relaxed">クーポンの有効期限は発行から3年間。夏の海水浴シーズンはもちろん、冬の高級魚クエ料理シーズン、春秋の気候の良い季節など都合に合わせて使えます。</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/10 space-y-2">
              <div className="font-bold text-amber-300 text-sm">Step 3: 楽天トラベル予約画面でクーポン割引を適用</div>
              <p className="text-stone-200 leading-relaxed">ホテル川久、むさし、白浜マリオットなどの対象宿を予約する際、確認画面でクーポンを選択。宿泊代金から30%相当額がダイレクトに値引きされます。</p>
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
              <Link href="/furusato-tax-kinosaki-onsen-sotoyu-crab-stay" className="hover:text-amber-800 underline flex items-center gap-1.5 py-1">
                <span>▸</span> 城崎温泉 外湯めぐり＆松葉ガニ・但馬牛ステイ特集
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
