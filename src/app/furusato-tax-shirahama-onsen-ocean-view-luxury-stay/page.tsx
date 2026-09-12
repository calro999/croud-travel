import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '青い海と真っ白な砂浜！南紀白浜温泉の絶景オーシャンビュー露天風呂＆幻のクエ・熊野牛名門旅館×ふるさと納税完全攻略ガイド【2026年最新】むさし・海舟・シーモア',
  description: '万葉の時代から愛される日本三古湯・南紀白浜温泉！真っ白な白良浜と太平洋の絶景パノラマ。「紀州・白浜温泉 むさし」「浜千鳥の湯 海舟」「SHIRAHAMA KEY TERRACE HOTEL SEAMORE」を、和歌山県白浜町の楽天ふるさと納税トラベルクーポンで実質2,000円負担で予約する完全ガイド。海混浴露天風呂、インフィニティ足湯、幻のクエ鍋・熊野牛を満喫。',
  keywords: [
    'ふるさと納税 旅行',
    'ふるさと納税 温泉',
    '南紀白浜温泉 オーシャンビュー名宿特集',
    '楽天ふるさと納税 トラベル',
    '紀州・白浜温泉　むさし',
    '浜千鳥の湯　海舟（共立リゾート）',
    'ＳＨＩＲＡＨＡＭＡ　ＫＥＹ　ＴＥＲＲＡＣＥ　ＳＥＡＭＯＲＥ　ＲＥＳＩＤＥＮＣＥ',
    '高級温泉旅館',
    '源泉かけ流し',
    '実質2000円'
  ],
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-shirahama-onsen-ocean-view-luxury-stay/',
  },
  openGraph: {
    title: '青い海と真っ白な砂浜！南紀白浜温泉の絶景オーシャンビュー露天風呂＆幻のクエ・熊野牛名門旅館×ふるさと納税完全攻略ガイド【2026年最新】むさし・海舟・シーモア',
    description: '万葉の時代から愛される日本三古湯・南紀白浜温泉！真っ白な白良浜と太平洋の絶景パノラマ。「紀州・白浜温泉 むさし」「浜千鳥の湯 海舟」「SHIRAHAMA KEY TERRACE HOTEL SEAMORE」を、和歌山県白浜町の楽天ふるさと納税トラベルクーポンで実質2,000円負担で予約する完全ガイド。海混浴露天風呂、インフィニティ足湯、幻のクエ鍋・熊野牛を満喫。',
    url: 'https://croud-travel.pages.dev/furusato-tax-shirahama-onsen-ocean-view-luxury-stay',
    siteName: '旅行とホテル・ふるさと納税の総合ポータル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function FurusatoShirahamaOnsenOceanStayPage() {
  return (
    <article className="max-w-5xl mx-auto px-4 py-8 text-gray-800 leading-relaxed font-sans">
      {/* パンくずリスト */}
      <nav className="text-sm text-gray-500 mb-6 flex flex-wrap items-center gap-1.5" aria-label="Breadcrumb">
        <Link href="/" className="hover:underline hover:text-amber-700">ホーム</Link>
        <span>&gt;</span>
        <Link href="/travel-savings-guide" className="hover:underline hover:text-amber-700">ふるさと納税トラベル完全攻略ガイド</Link>
        <span>&gt;</span>
        <span className="text-gray-800 font-semibold">南紀白浜温泉 オーシャンビュー名宿特集</span>
      </nav>

      {/* ヘッダー */}
      <header className="mb-10 pb-6 border-b border-gray-200">
        <div className="inline-block bg-gradient-to-r from-amber-600 to-amber-800 text-white text-xs md:text-sm font-bold px-3 py-1 rounded-full mb-3 shadow-sm">
          南国の風と白砂青松の絶景！和歌山県南紀白浜温泉特集
        </div>
        <h1 className="text-2xl md:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight mb-4">
          青い海と真っ白な砂浜！南紀白浜温泉の絶景オーシャンビュー露天風呂＆幻のクエ・熊野牛名門旅館×ふるさと納税完全攻略ガイド【2026年最新】むさし・海舟・シーモア
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-xs md:text-sm text-gray-500">
          <time dateTime="2026-09-10">2026年9月10日公開</time>
          <span>•</span>
          <span className="bg-amber-100 text-amber-900 px-2 py-0.5 rounded font-medium">楽天トラベル公式連携</span>
          <span>•</span>
          <span className="bg-green-100 text-green-900 px-2 py-0.5 rounded font-medium">実質負担2,000円対象</span>
        </div>
      </header>

      {/* リード文ブロック */}
      <section className="bg-gradient-to-br from-amber-50/70 via-orange-50/40 to-yellow-50/60 p-6 md:p-8 rounded-2xl border border-amber-200/80 mb-12 shadow-sm">
        <h2 className="text-xl md:text-2xl font-bold text-amber-950 mb-4 flex items-center gap-2">
          <span className="text-2xl">✨</span>
          青く澄み渡る太平洋、白良浜のパウダースノー。海と波音に抱かれる日本三古湯・南紀白浜の贅沢リゾートへ
        </h2>
        <p className="text-base md:text-lg text-gray-800 leading-relaxed mb-6">
          本州屈指の南国リゾートであり、飛鳥・奈良時代の歴代天皇も湯治に訪れた日本三古湯の一つ「南紀白浜温泉（なんきしらはまおんせん）」。エメラルドグリーンの澄んだ海と真っ白なサラサラの砂浜が続く名所「白良浜（しららはま）」をはじめ、荒波に削られた大迫力の「千畳敷」や「三段壁」、海上に沈む夕陽が美しい「円月島」など、息を呑む絶景が凝縮された温泉地です。白浜温泉の魅力は、千三百年以上湧き続ける塩分濃度の高いナトリウム-塩化物泉。湯上がりに肌がしっとりと潤い、体の芯までポカポカと温もりが持続します。海に突き出た岬の先端で波しぶきを感じながら入浴する大露天風呂や、水平線に沈む夕日を一望するインフィニティ温泉は、白浜でしか体験できない至高の感動。さらにグルメも全国トップクラス。紀伊水道の荒波で育った「幻の高級魚・天然クエ（九絵）」の鍋や薄造り、南紀の豊かな自然が育んだ極上黒毛和牛「熊野牛」のステーキ、ぷりぷりの伊勢海老やアワビなど、海の幸と山の幸を尽くした贅沢な料理が旅人の舌を唸らせます。本特集では、白良浜へ徒歩1分の好立地で二つの異なる自家源泉と本格和食会席を誇る老舗「紀州・白浜温泉 むさし」、岬の突端に佇み海と一体になる絶景露天風呂「浜千鳥の湯」とクエ・熊野牛会席が人気の共立リゾート「浜千鳥の湯 海舟」、そして長さ30mのインフィニティ足湯テラスと太平洋一望の絶景ラウンジ・温泉サウナが評判の「SHIRAHAMA KEY TERRACE HOTEL SEAMORE」の3大名宿を厳選。和歌山県白浜町への楽天ふるさと納税トラベルクーポン（寄付額の最大30％割引・有効期限3年）を活用して、実質自己負担2,000円で南紀白浜温泉の憧れリゾート旅をお得に予約しましょう。
        </p>
        <div className="bg-white/90 rounded-xl p-4 md:p-5 border border-amber-300 shadow-sm">
          <h3 className="font-bold text-amber-900 text-sm md:text-base mb-2 flex items-center gap-1.5">
            <span>📌</span> なぜ「ふるさと納税×楽天トラベル」が選ばれているのか？
          </h3>
          <ul className="text-xs md:text-sm text-gray-700 space-y-1.5">
            <li className="flex items-start gap-1">
              <span className="text-amber-600 font-bold">✔</span>
              <span><strong>寄付額の最大30％が宿泊クーポンとして即時付与</strong>され、楽天ポイントも二重に貯まる</span>
            </li>
            <li className="flex items-start gap-1">
              <span className="text-amber-600 font-bold">✔</span>
              <span><strong>有効期限はたっぷり3年間！</strong>寄付後に旅行時期や部屋タイプをじっくり選べる安心設計</span>
            </li>
            <li className="flex items-start gap-1">
              <span className="text-amber-600 font-bold">✔</span>
              <span>予約済み日程への<strong>「あとからクーポン適用」</strong>にも対応（※条件あり）で直前でも安心</span>
            </li>
          </ul>
        </div>
      </section>

      {/* 目次 */}
      <section className="bg-gray-50 rounded-xl p-5 mb-12 border border-gray-200">
        <h2 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
          <span>📑</span> 目次
        </h2>
        <ol className="list-decimal list-inside space-y-2 text-sm text-gray-700">
          <li><a href="#three-points" className="text-amber-800 hover:underline font-medium">南紀白浜温泉 オーシャンビュー名宿特集が選ばれる3つの理由</a></li>
          <li><a href="#hotel-1" className="text-amber-800 hover:underline font-medium">【第1選】紀州・白浜温泉　むさし</a></li>
          <li><a href="#hotel-2" className="text-amber-800 hover:underline font-medium">【第2選】浜千鳥の湯　海舟（共立リゾート）</a></li>
          <li><a href="#hotel-3" className="text-amber-800 hover:underline font-medium">【第3選】ＳＨＩＲＡＨＡＭＡ　ＫＥＹ　ＴＥＲＲＡＣＥ　ＳＥＡＭＯＲＥ　ＲＥＳＩＤＥＮＣＥ</a></li>
          <li><a href="#furusato-step" className="text-amber-800 hover:underline font-medium">実質自己負担2,000円で予約する簡単4ステップ手順</a></li>
          <li><a href="#faq" className="text-amber-800 hover:underline font-medium">よくある質問（Q&A）</a></li>
        </ol>
      </section>

      {/* 3つの魅力セクション */}
      <section id="three-points" className="mb-14">
        <h2 className="text-xl md:text-3xl font-extrabold text-gray-900 mb-6 pb-2 border-b-2 border-amber-600 flex items-center gap-2">
          <span>🌟</span> 南紀白浜温泉 オーシャンビュー名宿特集が選ばれる3つの理由
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <span className="text-3xl font-black text-amber-600 block mb-2">01</span>
            <h3 className="font-bold text-gray-900 text-lg mb-3 leading-snug">太平洋の水平線に沈む夕日と波音！海と一体になる絶景オーシャンビュー露天風呂</h3>
            <p className="text-sm text-gray-600 leading-relaxed">海原を見下ろす展望風呂や、岬の岩場に作られた大露天風呂。夕暮れ時に黄金色に染まる海を眺めながら優雅な湯浴みを満喫できます。</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <span className="text-3xl font-black text-amber-600 block mb-2">02</span>
            <h3 className="font-bold text-gray-900 text-lg mb-3 leading-snug">幻の高級魚「クエ」とブランド和牛「熊野牛」！紀州・南紀の贅を尽くした海の幸会席</h3>
            <p className="text-sm text-gray-600 leading-relaxed">脂がのった白身のトロ「クエ鍋」や新鮮な伊勢海老、きめ細やかな肉質の熊野牛ステーキなど、白浜ならではの極上グルメを堪能。</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <span className="text-3xl font-black text-amber-600 block mb-2">03</span>
            <h3 className="font-bold text-gray-900 text-lg mb-3 leading-snug">白浜町ふるさと納税で最大30％OFF！3年間有効クーポンでアドベンチャーワールド観光にも最適</h3>
            <p className="text-sm text-gray-600 leading-relaxed">パンダで有名なアドベンチャーワールドや白良浜旅行もふるさと納税なら実質負担2,000円。寄付から3年間有効なので、夏休みや連休に大活躍します。</p>
          </div>
        </div>
      </section>

      {/* 宿紹介 1 */}
      <section id="hotel-1" className="mb-16 bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
        <div className="bg-gradient-to-r from-amber-700 to-amber-900 text-white p-4 md:p-6">
          <span className="bg-amber-500 text-white text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider mb-2 inline-block">厳選名宿 第1選</span>
          <h2 className="text-xl md:text-3xl font-bold leading-tight mb-2">
            紀州・白浜温泉　むさし
          </h2>
          <p className="text-xs md:text-sm text-amber-100">和歌山県白浜町・白良浜へ徒歩1分の絶好の立地！「生絹湯」と「斎明湯」の二つの異なる源泉を引く名門和風旅館（口コミ2,500件超）</p>
        </div>
        <div className="p-6 md:p-8">
          <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600 bg-gray-50 p-4 rounded-xl">
            <div><strong>所在地:</strong> 和歌山県西牟婁郡白浜町868</div>
            <div><strong>アクセス:</strong> JR白浜駅より車で約10分／南紀白浜空港より車で約10分／アドベンチャーワールドより車で約15分</div>
            <div><strong>楽天評価:</strong> <span className="text-amber-600 font-bold text-base">★ 4.3</span> (2594件)</div>
            <div><strong>参考価格:</strong> 1名あたり約8,800円〜</div>
          </div>
          <p className="text-base text-gray-800 leading-relaxed mb-6">白良浜まで歩いてわずか1分という最高のロケーションに建つ、数寄屋造りの趣ある本格温泉旅館。宿の最大の自慢は、白浜温泉でも希少な「生絹湯（すずしゆ）」と「斎明湯（さいめいゆ）」という2種類の異なる源泉を引いている点。広々とした大浴場や中庭を望む露天風呂、ヒノキ風呂などで、泉質の違いをじっくりと肌で感じることができます。客室は落ち着きある純和風客室から贅沢な特別フロア「楠館」まで多彩。夕食は紀州の旬の恵みをふんだんに盛り込んだ本格和食会席料理をお部屋や個室で堪能できるほか、オープンキッチンで出来立てを提供するバイキングプランも選べ、家族旅行や三世代旅行に長く愛され続けています。</p>
          <div className="hotel-special-wrapper">
            <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded-r-xl mb-6 text-sm text-amber-950">
              <strong className="block mb-1 font-bold">宿のこだわり・特徴:</strong>
              【白良浜まで徒歩1分】2種類の源泉とライブキッチンバイキングが愉しめる本格和風旅館へ。
            </div>
          </div>
          <div className="user-review-wrapper">
            <blockquote className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-xl mb-6 text-xs md:text-sm text-gray-700 italic">
              <strong>宿泊者の声:</strong> “綺麗かつ広い部屋で不満ゼロでした。素晴らしかったです。クチコミの詳細はこちらから　https://review.travel.rakuten.co.jp/hotel/voice/19739?r…　2026-09-05 22:53:27投稿 つづきはこちら”
            </blockquote>
          </div>
          <div className="pt-2">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D19739%26f_flg%3DPLAN"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-700 hover:to-amber-700 text-white font-bold px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all text-sm md:text-base w-full sm:w-auto"
            >
              <span>♨</span>
              <span>楽天トラベルでプラン詳細・空室・ふるさと納税クーポンを見る</span>
            </a>
          </div>
        </div>
      </section>

      {/* 宿紹介 2 */}
      <section id="hotel-2" className="mb-16 bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
        <div className="bg-gradient-to-r from-amber-700 to-amber-900 text-white p-4 md:p-6">
          <span className="bg-amber-500 text-white text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider mb-2 inline-block">厳選名宿 第2選</span>
          <h2 className="text-xl md:text-3xl font-bold leading-tight mb-2">
            浜千鳥の湯　海舟（共立リゾート）
          </h2>
          <p className="text-xs md:text-sm text-amber-100">和歌山県白浜町・岬の突端に佇む共立リゾートの最高峰！海に最も近い混浴露天風呂「波の抄」＆幻のクエ・熊野牛の豪華会席</p>
        </div>
        <div className="p-6 md:p-8">
          <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600 bg-gray-50 p-4 rounded-xl">
            <div><strong>所在地:</strong> 和歌山県西牟婁郡白浜町1698-1</div>
            <div><strong>アクセス:</strong> JR白浜駅より車で約15分／バスで約25分　最寄りのバス停「草原の湯」／「南紀白浜空港」より車で約7分</div>
            <div><strong>楽天評価:</strong> <span className="text-amber-600 font-bold text-base">★ 4.37</span> (3629件)</div>
            <div><strong>参考価格:</strong> 1名あたり約14,300円〜</div>
          </div>
          <p className="text-base text-gray-800 leading-relaxed mb-6">白浜の海に突き出た岬の先端、大海原のパノラマを独り占めする最高の立地に佇む上質な温泉リゾート旅館。敷地内を歩いて海へと下りていくと、波打ち際ギリギリに作られた名物混浴露天風呂「波の抄（専用の湯浴み着着用）」があり、まるで海に浸かっているかのような圧倒的な開放感と打ち寄せる波の音に包まれます。館内には3つの無料貸切露天風呂や広々とした大浴場も完備。客室は全室オーシャンビューで、波の音を子守唄に贅沢な時間を過ごせます。夕食は紀州の豪華味覚の競演。名物の天然クエ鍋や脂の乗ったお造り、香ばしく焼き上げた熊野牛のステーキなど、一皿一皿に贅を尽くした料理が旅情を最高潮に高めてくれます。</p>
          <div className="hotel-special-wrapper">
            <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded-r-xl mb-6 text-sm text-amber-950">
              <strong className="block mb-1 font-bold">宿のこだわり・特徴:</strong>
              目の前に広がる海と共に過ごす贅沢なリゾートへ！海一望の露天風呂や貸切露天風呂など極上の温泉を堪能
            </div>
          </div>
          <div className="user-review-wrapper">
            <blockquote className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-xl mb-6 text-xs md:text-sm text-gray-700 italic">
              <strong>宿泊者の声:</strong> “すべてのサービスが最高でした全サービス最高クチコミの詳細はこちらから　https://review.travel.rakuten.co.jp/hotel/voice/68224?revie…　2026-09-05 22:48:38投稿 つづきはこちら”
            </blockquote>
          </div>
          <div className="pt-2">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D68224%26f_flg%3DPLAN"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-700 hover:to-amber-700 text-white font-bold px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all text-sm md:text-base w-full sm:w-auto"
            >
              <span>♨</span>
              <span>楽天トラベルでプラン詳細・空室・ふるさと納税クーポンを見る</span>
            </a>
          </div>
        </div>
      </section>

      {/* 宿紹介 3 */}
      <section id="hotel-3" className="mb-16 bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
        <div className="bg-gradient-to-r from-amber-700 to-amber-900 text-white p-4 md:p-6">
          <span className="bg-amber-500 text-white text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider mb-2 inline-block">厳選名宿 第3選</span>
          <h2 className="text-xl md:text-3xl font-bold leading-tight mb-2">
            ＳＨＩＲＡＨＡＭＡ　ＫＥＹ　ＴＥＲＲＡＣＥ　ＳＥＡＭＯＲＥ　ＲＥＳＩＤＥＮＣＥ
          </h2>
          <p className="text-xs md:text-sm text-amber-100">和歌山県白浜町・海に溶け込む長さ30mのインフィニティ足湯テラス！太平洋一望の絶景温泉大浴場と極上サウナ（HOTEL SEAMORE）</p>
        </div>
        <div className="p-6 md:p-8">
          <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600 bg-gray-50 p-4 rounded-xl">
            <div><strong>所在地:</strong> 和歌山県西牟婁郡白浜町1779-10</div>
            <div><strong>アクセス:</strong> JR白浜駅より車で約10分／南紀白浜空港より車で約7分</div>
            <div><strong>楽天評価:</strong> <span className="text-amber-600 font-bold text-base">★ 3.98</span> (301件)</div>
            <div><strong>参考価格:</strong> 1名あたり約3,960円〜</div>
          </div>
          <p className="text-base text-gray-800 leading-relaxed mb-6">南紀白浜の海岸線に位置し、スタイリッシュなリノベーションで大きな話題を呼んでいるモダンオーシャンリゾート。ホテルのシンボルは、太平洋の青い海に向かって広がる長さ30メートルの「インフィニティ足湯テラス」。海風を感じながらフリードリンクとともに足湯に浸かり、夕暮れには息を呑むサンセットを眺めることができます。大浴場「波の湯」は深さ120cmの立ち湯露天風呂を備え、海と一体になる感覚を満喫。本格ロウリュサウナやバレルサウナも完備されています。ベーカリーカフェやプレイルームも充実し、女子旅やカップル、若いファミリー層から圧倒的な支持を集めています。</p>
          <div className="hotel-special-wrapper">
            <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded-r-xl mb-6 text-sm text-amber-950">
              <strong className="block mb-1 font-bold">宿のこだわり・特徴:</strong>
              【7月8日NEWOPEN】滞在型サイクルホテル☆ホテルシーモアの温泉入り放題♪
            </div>
          </div>
          <div className="user-review-wrapper">
            <blockquote className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-xl mb-6 text-xs md:text-sm text-gray-700 italic">
              <strong>宿泊者の声:</strong> “ロケーションは最高だが移動や騒音が気になる二度目の利用です。温泉のある本館へは徒歩で行くことができますが、やはり夏場は夜遅くでも暑く、朝風呂に行くには日傘必須でした。部屋はコンクリート壁で…　2026-08-31 22:21:05投稿 つづきはこちら”
            </blockquote>
          </div>
          <div className="pt-2">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D173031%26f_flg%3DPLAN"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-700 hover:to-amber-700 text-white font-bold px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all text-sm md:text-base w-full sm:w-auto"
            >
              <span>♨</span>
              <span>楽天トラベルでプラン詳細・空室・ふるさと納税クーポンを見る</span>
            </a>
          </div>
        </div>
      </section>

      {/* ふるさと納税手順 */}
      <section id="furusato-step" className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 md:p-8 rounded-2xl border border-amber-200 mb-16 shadow-sm">
        <h2 className="text-xl md:text-3xl font-extrabold text-amber-950 mb-6 flex items-center gap-2">
          <span>💡</span> 楽天ふるさと納税トラベルクーポンで実質2,000円予約する4ステップ
        </h2>
        <div className="space-y-4">
          <div className="bg-white p-4 md:p-5 rounded-xl border border-amber-100 flex gap-4 items-start shadow-xs">
            <div className="bg-amber-600 text-white font-bold w-8 h-8 rounded-full flex items-center justify-center shrink-0">1</div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">控除限度額をチェック</h3>
              <p className="text-xs md:text-sm text-gray-600">年収や家族構成によって自己負担2,000円で利用できる上限額が決まります。まずは楽天ふるさと納税のシミュレーターで上限を確認しましょう。</p>
            </div>
          </div>
          <div className="bg-white p-4 md:p-5 rounded-xl border border-amber-100 flex gap-4 items-start shadow-xs">
            <div className="bg-amber-600 text-white font-bold w-8 h-8 rounded-full flex items-center justify-center shrink-0">2</div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">自治体を選んでトラベルクーポンを寄付</h3>
              <p className="text-xs md:text-sm text-gray-600">訪れたい温泉宿のある自治体へ寄付。寄付額の最大30％相当の楽天トラベルクーポンが数日以内にマイクーポンへ自動付与されます。</p>
            </div>
          </div>
          <div className="bg-white p-4 md:p-5 rounded-xl border border-amber-100 flex gap-4 items-start shadow-xs">
            <div className="bg-amber-600 text-white font-bold w-8 h-8 rounded-full flex items-center justify-center shrink-0">3</div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">楽天トラベルで宿泊予約＆クーポン適用</h3>
              <p className="text-xs md:text-sm text-gray-600">有効期限は3年間。宿泊日や部屋タイプを決め、予約画面で取得したトラベルクーポンを選択すると宿泊代金から即時値引きされます。</p>
            </div>
          </div>
          <div className="bg-white p-4 md:p-5 rounded-xl border border-amber-100 flex gap-4 items-start shadow-xs">
            <div className="bg-amber-600 text-white font-bold w-8 h-8 rounded-full flex items-center justify-center shrink-0">4</div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">ワンストップ特例または確定申告で完了</h3>
              <p className="text-xs md:text-sm text-gray-600">翌年の住民税・所得税から控除され、実質負担は年間2,000円のみ！浮いた予算で旅行をさらにアップグレードできます。</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mb-16">
        <h2 className="text-xl md:text-3xl font-extrabold text-gray-900 mb-6 pb-2 border-b-2 border-amber-600 flex items-center gap-2">
          <span>❓</span> よくある質問（Q&A）
        </h2>
        <div className="space-y-4">
          <details className="bg-white p-5 rounded-xl border border-gray-200 shadow-xs group cursor-pointer">
            <summary className="font-bold text-gray-900 text-sm md:text-base flex justify-between items-center">
              <span>すでに予約している宿泊プランにもふるさと納税クーポンは使えますか？</span>
              <span className="text-amber-600 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="mt-3 text-xs md:text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
              はい！楽天トラベルの「あとからクーポン適用」機能に対応している施設であれば、予約後でもマイページから自治体クーポンを適用して割引を受けられます。
            </p>
          </details>
          <details className="bg-white p-5 rounded-xl border border-gray-200 shadow-xs group cursor-pointer">
            <summary className="font-bold text-gray-900 text-sm md:text-base flex justify-between items-center">
              <span>トラベルクーポンの有効期限はどれくらいですか？</span>
              <span className="text-amber-600 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="mt-3 text-xs md:text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
              楽天ふるさと納税トラベルクーポンの有効期限は「寄付完了日の翌々年同月末まで（実質約3年間）」となっています。旅行予定に合わせてじっくり使えます。
            </p>
          </details>
          <details className="bg-white p-5 rounded-xl border border-gray-200 shadow-xs group cursor-pointer">
            <summary className="font-bold text-gray-900 text-sm md:text-base flex justify-between items-center">
              <span>ハイシーズンや週末でも利用できますか？</span>
              <span className="text-amber-600 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="mt-3 text-xs md:text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
              はい、対象ホテルの空室があれば、年末年始やゴールデンウィーク、お盆や紅葉・雪見シーズンのハイシーズンでも除外日なくクーポンをご利用いただけます。
            </p>
          </details>
        </div>
      </section>

      {/* 関連記事リンク */}
      <section className="bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-200">
        <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <span>🔗</span> あわせて読みたい注目のふるさと納税特集
        </h2>
        <div className="grid sm:grid-cols-2 gap-3">
          
          <Link
            href="/furusato-tax-atami-ocean-view-fireworks-hotel-stay"
            className="block p-3 rounded-lg bg-white border border-gray-200 hover:border-amber-400 hover:shadow-xs transition-all text-sm text-amber-900 font-medium"
          >
            ▸ 【熱海花火大会特等席＆オーシャンビュー温泉宿×ふるさと納税】後楽園・ニューアカオ・パールスター
          </Link>
          <Link
            href="/furusato-tax-okinawa-beach-resort-luxury-stay"
            className="block p-3 rounded-lg bg-white border border-gray-200 hover:border-amber-400 hover:shadow-xs transition-all text-sm text-amber-900 font-medium"
          >
            ▸ 【沖縄本島最高峰ビーチリゾート×ふるさと納税】ハレクラニ・ルネッサンス・ロワジール
          </Link>
          <Link
            href="/furusato-tax-dogo-onsen-honkan-walk-luxury-stay"
            className="block p-3 rounded-lg bg-white border border-gray-200 hover:border-amber-400 hover:shadow-xs transition-all text-sm text-amber-900 font-medium"
          >
            ▸ 【道後温泉 本館散策＆老舗旅館×ふるさと納税】ふなや・道後御湯・道後プリンス
          </Link>
          <Link
            href="/furusato-tax-cave-bath-natural-grotto-onsen-stay"
            className="block p-3 rounded-lg bg-white border border-gray-200 hover:border-amber-400 hover:shadow-xs transition-all text-sm text-amber-900 font-medium"
          >
            ▸ 【荒波迫る大洞窟風呂＆神秘の岩風呂×ふるさと納税】南紀勝浦・湯の峰・上諏訪
          </Link>
        </div>
      </section>
    </article>
  );
}
