import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '【山代温泉×ふるさと納税】加賀百万石の湯の曲輪＆北大路魯山人ゆかりの美食！名門温泉旅館完全ガイド｜ゆのくに天祥・葉渡莉・たちばな四季亭',
  description: '北陸新幹線でアクセス抜群！開湯1300年の名湯・加賀山代温泉を楽天ふるさと納税でお得に旅する。自家源泉一薬三湯と十八趣の湯巡りが自慢の「ゆのくに天祥」、木の温もりあふれる和モダン宿「葉渡莉」、明治元年創業・全館生花が彩る料亭旅館「たちばな四季亭」を徹底比較。のどぐろ・加賀橋立港のズワイガニ美食と加賀市クーポン活用術を網羅。',
  keywords: '山代温泉 ふるさと納税,ゆのくに天祥 ふるさと納税,葉渡莉 山代温泉 クーポン,たちばな四季亭 宿泊,加賀市 ふるさと納税 楽天トラベル',
  openGraph: {
    title: '【山代温泉×ふるさと納税】加賀百万石の湯の曲輪＆北大路魯山人ゆかりの美食！名門温泉旅館完全ガイド｜ゆのくに天祥・葉渡莉・たちばな四季亭',
    description: '北陸新幹線でアクセス抜群！開湯1300年の名湯・加賀山代温泉を楽天ふるさと納税でお得に旅する。自家源泉一薬三湯と十八趣の湯巡りが自慢の「ゆのくに天祥」、木の温もりあふれる和モダン宿「葉渡莉」、明治元年創業・全館生花が彩る料亭旅館「たちばな四季亭」を徹底比較。のどぐろ・加賀橋立港のズワイガニ美食と加賀市クーポン活用術を網羅。',
    type: 'article',
    url: 'https://croud-travel.pages.dev/furusato-tax-yamashiro-onsen-kaga-million-gourmet-stay',
  },
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-yamashiro-onsen-kaga-million-gourmet-stay',
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
            【山代温泉×ふるさと納税】加賀百万石の湯の曲輪＆北大路魯山人ゆかりの美食！名門温泉旅館完全ガイド｜ゆのくに天祥・葉渡莉・たちばな四季亭
          </h1>
          <p className="text-stone-300 text-sm md:text-base max-w-2xl mx-auto pt-2 leading-relaxed">
            北陸新幹線でアクセス抜群！開湯1300年の名湯・加賀山代温泉を楽天ふるさと納税でお得に旅する。自家源泉一薬三湯と十八趣の湯巡りが自慢の「ゆのくに天祥」、木の温もりあふれる和モダン宿「葉渡莉」、明治元年創業・全館生花が彩る料亭旅館「たちばな四季亭」を徹底比較。のどぐろ・加賀橋立港のズワイガニ美食と加賀市クーポン活用術を網羅。
          </p>
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4 text-xs text-stone-400">
            <span>対象自治体: <strong className="text-amber-300">石川県加賀市</strong></span>
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
            紅殻格子の「湯の曲輪」、魯山人が愛した器と料理の美学——加賀山代温泉で叶える上質な北陸美食ステイ
          </h2>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            霊峰白山を望む石川県加賀市に位置し、行基菩薩が傷を癒やすカラスを見て発見したと伝わる開湯1300年の名湯・山代温泉。温泉街の中心には、共同浴場「総湯」と明治時代の姿を復元した「古総湯」を宿が取り囲む「湯の曲輪（ゆのがわ）」と呼ばれる独特の町並みが今も美しく息づいています。九谷焼の鮮やかなステンドグラスが光を反射する古総湯で湯浴みし、紅殻格子の街並みを歩く時間は、加賀百万石の雅な文化を肌で感じさせてくれます。
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            美食家として名高い北大路魯山人が逗留し、陶芸と料理の腕を磨いた山代温泉は、北陸随一の美食郷でもあります。日本海の高級魚「のどぐろ」の塩焼き、橋立港で水揚げされた極上の「加賀ずわい蟹」、そして豊かな加賀野菜を職人の技で仕立てた会席料理は感動の極み。石川県加賀市へのふるさと納税を利用すれば、30%相当のトラベルクーポンにより名門温泉宿へ驚くほどお得に滞在でき、贅を尽くした北陸の休日を満喫できます。
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
            <h3 className="text-lg sm:text-xl font-bold font-serif">石川県加賀市のふるさと納税クーポンをチェック</h3>
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/1616/1616.jpg"
                alt="山代温泉　ゆのくに天祥"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第1選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.49（口コミ 3719件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">石川県加賀市</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  山代温泉　ゆのくに天祥
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  自家源泉100％の「一薬三湯」！趣異なる三つの大浴場と十八趣の湯巡りを誇る加賀屈指の人気宿
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  山代温泉 ゆのくに天祥 —— 豊富な湯量と充実の温泉エンターテインメント。のどぐろと蟹の贅沢会席
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 敷地内から自噴する良質な自家源泉を引く三つの大浴場
                    </h5>
                    <p className="text-stone-600 leading-relaxed">「滝見の湯屋」「悠久の湯」「九谷の湯処」と趣の異なる三つの大浴場を時間帯ごとの男女入れ替えで巡る「一薬三湯」。館内だけで18種類もの湯船を贅沢に愉しめます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 橋立港の旬魚・のどぐろ・加賀カニを味わう豪華ディナー
                    </h5>
                    <p className="text-stone-600 leading-relaxed">脂ののったのどぐろの塩焼きや、冬の味覚の王様・ズワイガニ、能登牛の陶板焼きなど、北陸の味覚をふんだんに盛り込んだ贅沢な会席料理が宿泊客を魅了します。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 自家製温泉たまご手作り体験や多彩な館内イベント
                    </h5>
                    <p className="text-stone-600 leading-relaxed">敷地内の源泉で作る温泉たまご体験や、伝統工芸村「ゆのくにの森」との連携など、ファミリーからシニアまで一日中楽しく過ごせるおもてなしが充実しています。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.49点、口コミ3700件超。「お風呂の種類が多くて館内湯巡りだけで大満足」「温泉たまご作り体験が楽しく、食事も美味しかった」と圧倒的なリピート率を誇ります。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div>住所: 石川県 加賀市山代温泉19-49-1</div>
                <div>最寄り駅・アクセス: 【車】北陸自動車道加賀IC、片山津ICより約15分【電車】JR・IRいしかわ鉄道加賀温泉駅より無料送迎 予約制</div>
                <div>参考料金: <span className="font-bold text-stone-800">¥9,900〜</span></div>
                <div>ホテル番号: No.1616</div>
              </div>

              {/* アフィリエイト予約ボタン */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D1616"
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/10624/10624.jpg"
                alt="山代温泉　葉渡莉（はとり）"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第2選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.4（口コミ 1012件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">石川県加賀市</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  山代温泉　葉渡莉（はとり）
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  人と自然に優しい木の温もり！総檜造りの名湯大浴場と加賀野菜・地酒を味わう和モダン旅館
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  山代温泉 葉渡莉（はとり） —— 木漏れ日揺れる和のやすらぎ。手作りの温かみと古総湯への絶好アクセス
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 檜の香りに包まれる総檜大浴場「九月九日」
                    </h5>
                    <p className="text-stone-600 leading-relaxed">天然檜を贅沢に使った大浴場と石造りの露天風呂。肌触りの滑らかな山代の湯に身を浸しながら、木の温もりと森林浴のようなリラックス効果を味わえます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 湯の曲輪・古総湯まで徒歩1分の温泉街散策に最適な立地
                    </h5>
                    <p className="text-stone-600 leading-relaxed">山代温泉の中心街に位置し、古総湯や総湯、九谷焼のギャラリー散策に抜群のロケーション。夕暮れの温泉街のそぞろ歩きも気軽に楽しめます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 契約農家から届く加賀野菜と地元食材の月替わり会席
                    </h5>
                    <p className="text-stone-600 leading-relaxed">加賀蓮根や金時草などの伝統野菜、日本海直送の旬魚を取り入れた身体に優しい創作料理。地酒との相性も抜群です。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.40点、口コミ1000件超。「木造の館内が落ち着きスタッフの接客も温かい」「古総湯がすぐ目の前で山代の風情を満喫できた」と高い評価を得ています。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div>住所: 石川県 加賀市山代温泉温泉通り17</div>
                <div>最寄り駅・アクセス: 【ＪＲ】「加賀温泉駅」より無料送迎バス有（詳細は公式HP）【車】北陸道「加賀IC」or「片山津IC」より約20分</div>
                <div>参考料金: <span className="font-bold text-stone-800">¥8,470〜</span></div>
                <div>ホテル番号: No.10624</div>
              </div>

              {/* アフィリエイト予約ボタン */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D10624"
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/28350/28350.jpg"
                alt="山代温泉　たちばな四季亭"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第3選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.7（口コミ 275件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">石川県加賀市</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  山代温泉　たちばな四季亭
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  明治元年創業・桐工芸と加賀友禅の美学！全館生花が彩る全二十室の大人の隠れ家料亭旅館
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  山代温泉 たちばな四季亭 —— 創業百五十余年の伝統と美意識。お部屋食で極める加賀懐石の至宝
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 全客室・館内を華やかに彩る四季折々の生花
                    </h5>
                    <p className="text-stone-600 leading-relaxed">一歩足を踏み入れると香る花の匂いと磨き上げられた桐の床。全館に生花が贅沢にいけられ、静寂と気品に満ちた特別な大人の空間が広がります。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 朝夕ともにゆったりと味わう完全お部屋食スタイル
                    </h5>
                    <p className="text-stone-600 leading-relaxed">伝統の料亭旅館ならではの細やかな配慮。周りを気にせずプライベートな客室で、のどぐろや能登牛、四季の加賀懐石を一品ずつ出来立てで味わえます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 源泉掛け流しの展望大浴場と露天風呂付き客室
                    </h5>
                    <p className="text-stone-600 leading-relaxed">山代の良質な名湯を引く清潔な大浴場。プライベート露天風呂を備えた客室タイプでは、誰にも邪魔されない至極の入浴が叶います。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.70点の最高峰スコア。「生花が美しくお部屋食の料理が芸術品レベルで美味しい」「仲居さんの心配りが素晴らしく人生最高の宿」と絶賛されています。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div>住所: 石川県 加賀市山代温泉万松園通16</div>
                <div>最寄り駅・アクセス: 最寄りＪＲ加賀温泉駅　送迎は１４時３０分から１８時　約１５分／北陸自動車道・加賀ＩＣ　約１５分／金沢より車で最短約６０分</div>
                <div>参考料金: <span className="font-bold text-stone-800">¥19,245〜</span></div>
                <div>ホテル番号: No.28350</div>
              </div>

              {/* アフィリエイト予約ボタン */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D28350"
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
            山代温泉・湯の曲輪散策＆加賀伝統工芸体験ガイド
          </h2>
          <div className="grid gap-4">

            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/60 space-y-2">
              <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                <span className="text-amber-600">◆</span> 古総湯（こそうゆ）での明治の入浴体験
              </h3>
              <p className="text-stone-700 text-sm leading-relaxed">明治時代の総湯を忠実に復元した「古総湯」。浴室の床や壁には九谷焼のタイルの絵付けが施され、ステンドグラスから差し込む光の中で、洗い場のない昔ながらの入浴スタイルを体験できます。</p>
            </div>

            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/60 space-y-2">
              <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                <span className="text-amber-600">◆</span> 北大路魯山人寓居跡「いろは草庵」の見学
              </h3>
              <p className="text-stone-700 text-sm leading-relaxed">魯山人が大正4年に逗留した旧宿坊を公開。文人墨客が集った茶室や庭園、魯山人が削った木彫りの看板など、食と美の巨人の足跡を肌で感じられます。</p>
            </div>

            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/60 space-y-2">
              <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                <span className="text-amber-600">◆</span> 加賀伝統工芸村「ゆのくにの森」と九谷焼絵付け
              </h3>
              <p className="text-stone-700 text-sm leading-relaxed">茅葺き屋根の古民家が点在する広大な工芸村。九谷焼の絵付けやろくろ体験、山中漆器の沈金、金箔貼りなど、北陸の豊かなものづくり文化を体験できます。</p>
            </div>
          </div>
        </section>

        {/* ふるさと納税活用ステップ */}
        <section className="bg-gradient-to-br from-amber-900 via-stone-900 to-stone-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-amber-300 font-semibold">How to Use Coupon</span>
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-amber-50">
              石川県加賀市ふるさと納税×楽天トラベルクーポン活用手順
            </h2>
            <p className="text-stone-300 text-xs sm:text-sm">
              初めての方でも迷わず利用できる3ステップ。予約済みのプランにも後から適用可能です。
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 text-xs sm:text-sm">

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/10 space-y-2">
              <div className="font-bold text-amber-300 text-sm">Step 1: 楽天ふるさと納税で「石川県加賀市」のクーポンを獲得</div>
              <p className="text-stone-200 leading-relaxed">楽天ふるさと納税で「加賀市」のトラベルクーポン（寄付額の30%相当補助）を返礼品として申し込みます。寄付完了と同時にアカウントへクーポンが付与されます。</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/10 space-y-2">
              <div className="font-bold text-amber-300 text-sm">Step 2: 3年間の有効期間内で北陸新幹線の旅を計画</div>
              <p className="text-stone-200 leading-relaxed">クーポンの有効期限は発行から3年間。冬のズワイガニシーズンはもちろん、春の桜や初夏の新緑、秋の味覚シーズンなど希望に合わせて予約できます。</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/10 space-y-2">
              <div className="font-bold text-amber-300 text-sm">Step 3: 楽天トラベル予約画面でクーポン割引を適用</div>
              <p className="text-stone-200 leading-relaxed">ゆのくに天祥、葉渡莉、たちばな四季亭などの対象宿を予約する際、確認画面でクーポンを選択。宿泊代金から30%相当額がダイレクトに値引きされます。</p>
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
