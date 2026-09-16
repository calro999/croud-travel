import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '神秘の火口湖・御釜と三段紅葉！蔵王エコーライン＆強酸性白濁にごり湯名宿×ふるさと納税完全ガイド【2026年最新秋旅】山形 | 旅宿クラウド',
  description: '10月上旬〜11月上旬に見頃を迎える東北の山岳絶景「蔵王エコーライン・御釜（おかま）」。山頂の冠雪・中腹の紅葉・山麓の緑が織りなす「三段紅葉」と、開湯千九百年を誇る日本屈指の強酸性硫黄泉（美肌温泉）！「おおみや旅館」「善七乃湯」「季の里」。最高級山形牛と芋煮会席を、楽天ふるさと納税トラベルクーポンで実質2,000円で楽しむ完全ガイド。',
  keywords: [
    'ふるさと納税 温泉',
    'ふるさと納税 宿泊券',
    'ふるさと納税 トラベルクーポン',
    '蔵王エコーライン紅葉・御釜＆強酸性にごり湯温泉宿特集',
    '10月 旅行 おすすめ',
    '11月 旅行 おすすめ',
    '秋 旅行 温泉',
    '紅葉 温泉旅館',
    '楽天トラベル ふるさと納税',
    '実質2000円 温泉'
  ],
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-zao-okama-autumn-leaves-hotspring-stay/'
  },
  openGraph: {
    title: '神秘の火口湖・御釜と三段紅葉！蔵王エコーライン＆強酸性白濁にごり湯名宿×ふるさと納税完全ガイド【2026年最新秋旅】山形',
    description: '10月上旬〜11月上旬に見頃を迎える東北の山岳絶景「蔵王エコーライン・御釜（おかま）」。山頂の冠雪・中腹の紅葉・山麓の緑が織りなす「三段紅葉」と、開湯千九百年を誇る日本屈指の強酸性硫黄泉（美肌温泉）！「おおみや旅館」「善七乃湯」「季の里」。最高級山形牛と芋煮会席を、楽天ふるさと納税トラベルクーポンで実質2,000円で楽しむ完全ガイド。',
    url: 'https://croud-travel.pages.dev/furusato-tax-zao-okama-autumn-leaves-hotspring-stay',
    siteName: '旅宿クラウド',
    locale: 'ja_JP',
    type: 'article',
  }
};

export default function FurusatoZaoOkamaAutumnLeavesStayPage() {
  return (
    <main className="min-h-screen bg-stone-100/60 text-stone-900 pb-20">
      {/* パンくずナビ */}
      <nav aria-label="Breadcrumb" className="max-w-5xl mx-auto px-4 sm:px-6 pt-6 pb-2 text-xs text-stone-500 flex items-center gap-2 flex-wrap">
        <Link href="/" className="hover:text-stone-800 underline">ホーム</Link>
        <span>&gt;</span>
        <Link href="/features" className="hover:text-stone-800 underline">特集一覧</Link>
        <span>&gt;</span>
        <span className="text-stone-800 font-bold">蔵王御釜紅葉＆強酸性にごり湯名宿特集</span>
      </nav>

      {/* ヒーローセクション */}
      <header className="max-w-5xl mx-auto px-4 sm:px-6 pt-4 pb-10">
        <div className="bg-gradient-to-br from-stone-900 via-amber-950 to-stone-900 text-white rounded-3xl p-8 md:p-12 shadow-xl border border-amber-900/40 relative overflow-hidden">
          <div className="relative z-10 space-y-4">
            <span className="inline-block bg-amber-500/20 text-amber-300 text-xs md:text-sm font-bold px-3.5 py-1.5 rounded-full border border-amber-400/30">
              蔵王エコーライン紅葉・御釜＆強酸性にごり湯温泉宿特集
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold font-serif tracking-tight leading-snug">
              神秘の火口湖・御釜と三段紅葉！蔵王エコーライン＆強酸性白濁にごり湯名宿×ふるさと納税完全ガイド【2026年最新秋旅】山形
            </h1>
            <p className="text-stone-300 text-sm md:text-base max-w-3xl leading-relaxed">
              10月上旬〜11月上旬に見頃を迎える東北の山岳絶景「蔵王エコーライン・御釜（おかま）」。山頂の冠雪・中腹の紅葉・山麓の緑が織りなす「三段紅葉」と、開湯千九百年を誇る日本屈指の強酸性硫黄泉（美肌温泉）！「おおみや旅館」「善七乃湯」「季の里」。最高級山形牛と芋煮会席を、楽天ふるさと納税トラベルクーポンで実質2,000円で楽しむ完全ガイド。
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs md:text-sm text-amber-200/90 font-medium">
              <span className="flex items-center gap-1.5">
                <span>🗓️</span> 2026年最新版（10-11月秋シーズン）
              </span>
              <span className="flex items-center gap-1.5">
                <span>🎫</span> 楽天ふるさと納税トラベルクーポン対象
              </span>
              <span className="flex items-center gap-1.5">
                <span>✨</span> 実質自己負担2,000円
              </span>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-16">
        {/* リード文セクション */}
        <section className="bg-white rounded-3xl p-8 md:p-10 border border-stone-200/80 shadow-sm">
          <h2 className="text-xl md:text-2xl font-bold font-serif text-stone-800 mb-4 border-l-4 border-amber-600 pl-4">
            エメラルドグリーンの火口湖を抱く錦秋の大パノラマと、硫黄の香る白濁美肌湯。圧倒的な自然の息吹に包まれる蔵王秋旅へ
          </h2>
          <p className="text-stone-700 text-sm md:text-base leading-relaxed">
            山形県と宮城県の県境にそびえる名峰・蔵王連峰。10月上旬から11月上旬にかけて、蔵王エコーラインやハイラインを走れば、山頂付近から順に山肌が燃えるような赤や黄金に染まり、天候によっては初冠雪の白と紅葉の朱、山麓の緑が同時に広がる奇跡の「三段紅葉」に出会えます。そして蔵王のシンボルである円形の火口湖「御釜（おかま）」は、太陽の光によってエメラルドグリーンから瑠璃色へと神秘的に色を変え、紅葉の岩肌との対比は息を呑む絶景です。そんなダイナミックな山岳観光の後に待っているのが、開湯約1,900年の歴史を誇る「蔵王温泉」。pH1.5〜2.0という日本屈指の強酸性硫黄泉は、高い殺菌作用と古い角質を洗い流すピーリング効果を持ち、肌を滑らかにする「美肌の湯」「美人の湯」として古くから湯治客を魅了してきました。大正ロマンあふれる木造数寄屋造りと自家源泉を誇る「おおみや旅館」、七つの貸切風呂やペット同伴対応の源泉宿「最上高湯 善七乃湯」、そして岩清水料理と木の温もり湯殿が心地よい「季の里」。極上の山形牛すき焼きや郷土名物・芋煮を味わいながら、楽天ふるさと納税トラベルクーポン（寄付額の最大30％割引・有効期限3年）を使って実質2,000円で予約し、記憶に刻まれる蔵王の秋ステイを満喫しましょう。
          </p>
        </section>

        {/* 3つの魅力ポイント */}
        <section className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold font-serif text-stone-900 text-center">
            この特集で厳選した宿をおすすめする3つの理由
          </h2>
          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-white rounded-2xl p-6 md:p-8 border border-stone-200/80 shadow-xs">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-full bg-amber-100 text-amber-800 font-bold text-sm flex items-center justify-center shrink-0">
                  01
                </span>
                <h3 className="text-lg md:text-xl font-bold text-stone-900 font-serif">
                  神秘の五色沼「蔵王の御釜」＆蔵王エコーラインの大パノラマ紅葉ドライブ
                </h3>
              </div>
              <p className="text-stone-600 text-sm md:text-base leading-relaxed pl-11">
                標高約1,600mに位置する火口湖・御釜。蔵王ロープウェイからの空中散歩やエコーラインのドライブで、黄色や赤に染まる大自然のグラデーションを満喫できます。
              </p>
            </div>
  

            <div className="bg-white rounded-2xl p-6 md:p-8 border border-stone-200/80 shadow-xs">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-full bg-amber-100 text-amber-800 font-bold text-sm flex items-center justify-center shrink-0">
                  02
                </span>
                <h3 className="text-lg md:text-xl font-bold text-stone-900 font-serif">
                  pH1.5〜2.0の日本屈指の強酸性硫黄泉！白濁した湯の花が舞う本物の美肌湯
                </h3>
              </div>
              <p className="text-stone-600 text-sm md:text-base leading-relaxed pl-11">
                皮膚病や美肌に絶大な効果を持つ酸性・含硫黄温泉。血行を促進して身体を芯から温め、入浴後は肌が生まれ変わったようにつるつるになります。
              </p>
            </div>
  

            <div className="bg-white rounded-2xl p-6 md:p-8 border border-stone-200/80 shadow-xs">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-full bg-amber-100 text-amber-800 font-bold text-sm flex items-center justify-center shrink-0">
                  03
                </span>
                <h3 className="text-lg md:text-xl font-bold text-stone-900 font-serif">
                  とろける極上「山形牛」のすき焼き・ステーキ＆山形名物「芋煮鍋」の秋会席
                </h3>
              </div>
              <p className="text-stone-600 text-sm md:text-base leading-relaxed pl-11">
                豊かな自然と寒暖差が育んだ最高品質の黒毛和牛・山形牛。旬の里芋と牛肉、醤油ベースの出汁が香る本場の芋煮会席が冷えた身体に染み渡ります。
              </p>
            </div>
  
          </div>
        </section>

        {/* ホテル一覧 */}
        <section className="space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-2xl md:text-3xl font-bold font-serif text-stone-900">
              【2026年最新】ふるさと納税で行く極上おすすめ宿3選
            </h2>
            <p className="text-stone-600 text-sm">
              宿泊予約時にトラベルクーポンを適用することで、最大30％割引＆実質2,000円で泊まれます。
            </p>
          </div>

          <div className="space-y-8">

            <div key="zao_ohmiya" className="bg-white rounded-3xl border border-stone-200/90 shadow-md overflow-hidden hover:shadow-xl transition duration-300">
              <div className="bg-gradient-to-r from-amber-700 to-amber-900 text-amber-50 px-6 py-3 text-xs md:text-sm font-bold flex justify-between items-center">
                <span>山形県山形市・創業千年以上！大正ロマンの風情漂う全館畳敷きと源泉掛け流し100％の老舗旅館</span>
                <span className="bg-amber-500/30 text-amber-200 text-xs px-2.5 py-0.5 rounded-full border border-amber-400/40">厳選名宿 第1選</span>
              </div>
              <div className="p-6 md:p-8 space-y-6">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="bg-amber-100 text-amber-900 text-xs font-bold px-2.5 py-1 rounded-md">
                      ふるさと納税トラベルクーポン対象
                    </span>
                    <span className="text-amber-800 font-bold text-sm">
                      ★ 4.55 <span className="text-stone-400 text-xs">(1,344件)</span>
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold font-serif text-stone-900">
                    蔵王温泉　おおみや旅館
                  </h3>
                  <p className="text-xs md:text-sm text-stone-500 mt-1">
                    📍 山形県山形市蔵王温泉46 ｜ ●蔵王温泉バスターミナル～当館まで送迎有。※ご到着時お電話ください／●山形駅～当館での無料送迎有。※3日前迄の完全予約制
                  </p>
                </div>

                <div className="grid md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-6">
                    <div className="relative aspect-video rounded-2xl overflow-hidden shadow-inner bg-stone-100 group">
                      <img
                        src="https://img.travel.rakuten.co.jp/share/HOTEL/5722/5722.jpg"
                        alt="蔵王温泉　おおみや旅館"
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-6 space-y-4">
                    <p className="text-stone-700 text-sm md:text-base leading-relaxed">
                      蔵王温泉街の高台に位置し、創業千余年の歴史を誇る老舗旅館。館内はスリッパ不要の全館畳敷きで、大正ロマンの情緒が漂うレトロモダンな空間が広がります。自家源泉から直接引き込む天然の強酸性硫黄泉は加水なしの100％掛け流しで、石風呂「玉肌の湯」や木風呂「源泉風呂」で濃厚な湯の花を堪能。夕食には山形牛の陶板焼きやすき焼き、山形の郷土料理を美しく仕立てた創作会席を味わえます。
                    </p>
                    <div className="bg-stone-50 rounded-xl p-4 border border-stone-200/60 text-xs space-y-1.5 text-stone-600">
                      <div><strong className="text-stone-800">♨️ 温泉・特徴：</strong> ＜源泉掛け流しの温泉が楽しめる＞大正ロマン香る、レトロな温泉旅館！【全館禁煙】　※Wi-Fi利用可！</div>
                      <div><strong className="text-stone-800">🚗 駐車場：</strong> 有り ４０台　無料　先着順</div>
                      <div><strong className="text-stone-800">💰 料金目安：</strong> <span className="text-amber-900 font-bold text-sm">1名あたり 9,900円〜</span>（※クーポン利用で実質2,000円）</div>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F5722%2F5722.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-bold py-3.5 px-6 rounded-2xl shadow-md text-center transition flex items-center justify-center gap-2 text-sm"
                  >
                    <span>🏨 楽天トラベルで空室・宿泊プランを見る</span>
                    <span>→</span>
                  </a>
                  <a
                    href="https://event.travel.rakuten.co.jp/furusato/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="sm:w-auto bg-stone-100 hover:bg-stone-200 text-stone-800 font-bold py-3.5 px-6 rounded-2xl border border-stone-300 text-center transition text-sm flex items-center justify-center gap-1.5"
                  >
                    <span>🎫 自治体クーポン獲得</span>
                  </a>
                </div>
              </div>
            </div>
    

            <div key="zao_zeshichi" className="bg-white rounded-3xl border border-stone-200/90 shadow-md overflow-hidden hover:shadow-xl transition duration-300">
              <div className="bg-gradient-to-r from-amber-700 to-amber-900 text-amber-50 px-6 py-3 text-xs md:text-sm font-bold flex justify-between items-center">
                <span>山形県山形市・七つの多彩な貸切露天風呂！源泉100％掛け流しのにごり湯と温かなおもてなしの宿</span>
                <span className="bg-amber-500/30 text-amber-200 text-xs px-2.5 py-0.5 rounded-full border border-amber-400/40">厳選名宿 第2選</span>
              </div>
              <div className="p-6 md:p-8 space-y-6">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="bg-amber-100 text-amber-900 text-xs font-bold px-2.5 py-1 rounded-md">
                      ふるさと納税トラベルクーポン対象
                    </span>
                    <span className="text-amber-800 font-bold text-sm">
                      ★ 4.47 <span className="text-stone-400 text-xs">(647件)</span>
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold font-serif text-stone-900">
                    蔵王温泉　最上高湯　善七乃湯（旧：蔵王温泉　大平ホテル）
                  </h3>
                  <p className="text-xs md:text-sm text-stone-500 mt-1">
                    📍 山形県山形市蔵王温泉825 ｜ JR山形駅より定期バス45分／山形蔵王ICより車で25分／山形駅からの無料送迎（予約サイト・EGBY12月～3月）
                  </p>
                </div>

                <div className="grid md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-6">
                    <div className="relative aspect-video rounded-2xl overflow-hidden shadow-inner bg-stone-100 group">
                      <img
                        src="https://img.travel.rakuten.co.jp/share/HOTEL/8084/8084.jpg"
                        alt="蔵王温泉　最上高湯　善七乃湯（旧：蔵王温泉　大平ホテル）"
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-6 space-y-4">
                    <p className="text-stone-700 text-sm md:text-base leading-relaxed">
                      蔵王の森に囲まれた静かな環境に佇み、源泉掛け流し100％の天然温泉と多彩な貸切露天風呂が自慢の温泉宿。巨石風呂や樽風呂など趣の異なる7つの貸切風呂（24時間利用可能）があり、カップルやご家族で気兼ねなく名湯独占が楽しめます。夕食は山形牛のしゃぶしゃぶやステーキ、山菜きのこ鍋など地場食材の滋味を凝縮。愛犬と一緒に泊まれる専用客室も完備し、幅広いニーズに対応しています。
                    </p>
                    <div className="bg-stone-50 rounded-xl p-4 border border-stone-200/60 text-xs space-y-1.5 text-stone-600">
                      <div><strong className="text-stone-800">♨️ 温泉・特徴：</strong> 【温泉4.9】5つの無料貸切風呂完備｜強酸性硫黄泉×源泉かけ流しの極上湯を堪能◆ペット同伴客室あり◆</div>
                      <div><strong className="text-stone-800">🚗 駐車場：</strong> 普通車40台（無料）</div>
                      <div><strong className="text-stone-800">💰 料金目安：</strong> <span className="text-amber-900 font-bold text-sm">1名あたり 10,500円〜</span>（※クーポン利用で実質2,000円）</div>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F8084%2F8084.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-bold py-3.5 px-6 rounded-2xl shadow-md text-center transition flex items-center justify-center gap-2 text-sm"
                  >
                    <span>🏨 楽天トラベルで空室・宿泊プランを見る</span>
                    <span>→</span>
                  </a>
                  <a
                    href="https://event.travel.rakuten.co.jp/furusato/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="sm:w-auto bg-stone-100 hover:bg-stone-200 text-stone-800 font-bold py-3.5 px-6 rounded-2xl border border-stone-300 text-center transition text-sm flex items-center justify-center gap-1.5"
                  >
                    <span>🎫 自治体クーポン獲得</span>
                  </a>
                </div>
              </div>
            </div>
    

            <div key="zao_kinosato" className="bg-white rounded-3xl border border-stone-200/90 shadow-md overflow-hidden hover:shadow-xl transition duration-300">
              <div className="bg-gradient-to-r from-amber-700 to-amber-900 text-amber-50 px-6 py-3 text-xs md:text-sm font-bold flex justify-between items-center">
                <span>山形県山形市・木の温もりに包まれる湯殿！山形の旬の食材を活かした岩清水料理が自慢の宿</span>
                <span className="bg-amber-500/30 text-amber-200 text-xs px-2.5 py-0.5 rounded-full border border-amber-400/40">厳選名宿 第3選</span>
              </div>
              <div className="p-6 md:p-8 space-y-6">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="bg-amber-100 text-amber-900 text-xs font-bold px-2.5 py-1 rounded-md">
                      ふるさと納税トラベルクーポン対象
                    </span>
                    <span className="text-amber-800 font-bold text-sm">
                      ★ 4.58 <span className="text-stone-400 text-xs">(444件)</span>
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold font-serif text-stone-900">
                    蔵王温泉　岩清水料理の宿　季の里
                  </h3>
                  <p className="text-xs md:text-sm text-stone-500 mt-1">
                    📍 山形県山形市蔵王温泉1271-1 ｜ ＪＲ山形駅よりバスで４０分／山形自動車道→山形蔵王ＩＣより３０分      蔵王温泉スキー場徒歩５分
                  </p>
                </div>

                <div className="grid md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-6">
                    <div className="relative aspect-video rounded-2xl overflow-hidden shadow-inner bg-stone-100 group">
                      <img
                        src="https://img.travel.rakuten.co.jp/share/HOTEL/18758/18758.jpg"
                        alt="蔵王温泉　岩清水料理の宿　季の里"
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-6 space-y-4">
                    <p className="text-stone-700 text-sm md:text-base leading-relaxed">
                      蔵王温泉の自然林に溶け込むように佇み、木の香りあふれる純和風の落ち着いた空間が魅力の温泉宿。蔵王の良質な強酸性硫黄泉を湛えた内湯「離れ湯」や庭園露天風呂からは、四季折々の自然美を眺めながらの湯浴みが叶います。宿の名物である「岩清水料理」は、山形牛をはじめ地元の採れたて山菜や清流魚、旬の野菜を一品一品丁寧に仕上げた手作り会席。心温まるおもてなしが心地よい名宿です。
                    </p>
                    <div className="bg-stone-50 rounded-xl p-4 border border-stone-200/60 text-xs space-y-1.5 text-stone-600">
                      <div><strong className="text-stone-800">♨️ 温泉・特徴：</strong> 源泉かけ流し強酸性硫黄泉と蔵王の天然水を沸かした内湯が自慢！山形牛・蔵王牛を使った和会席に舌鼓</div>
                      <div><strong className="text-stone-800">🚗 駐車場：</strong> 有り　２０台　無料　先着順 </div>
                      <div><strong className="text-stone-800">💰 料金目安：</strong> <span className="text-amber-900 font-bold text-sm">1名あたり 11,400円〜</span>（※クーポン利用で実質2,000円）</div>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F18758%2F18758.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-bold py-3.5 px-6 rounded-2xl shadow-md text-center transition flex items-center justify-center gap-2 text-sm"
                  >
                    <span>🏨 楽天トラベルで空室・宿泊プランを見る</span>
                    <span>→</span>
                  </a>
                  <a
                    href="https://event.travel.rakuten.co.jp/furusato/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="sm:w-auto bg-stone-100 hover:bg-stone-200 text-stone-800 font-bold py-3.5 px-6 rounded-2xl border border-stone-300 text-center transition text-sm flex items-center justify-center gap-1.5"
                  >
                    <span>🎫 自治体クーポン獲得</span>
                  </a>
                </div>
              </div>
            </div>
    
          </div>
        </section>

        {/* ふるさと納税クーポン使い方ステップ */}
        <section className="bg-white rounded-3xl p-8 md:p-10 border border-stone-200/80 shadow-sm mb-16">
          <h2 className="text-xl md:text-2xl font-bold font-serif text-stone-800 mb-6 text-center">
            ふるさと納税トラベルクーポンの簡単3ステップ
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/60 text-center">
              <div className="w-10 h-10 rounded-full bg-amber-600 text-white font-bold flex items-center justify-center mx-auto mb-3">1</div>
              <h3 className="font-bold text-stone-900 text-sm mb-2">旅行先自治体に寄付</h3>
              <p className="text-xs text-stone-600 leading-relaxed">楽天ふるさと納税で泊まりたい宿がある市町村のトラベルクーポンを選んで寄付します。</p>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/60 text-center">
              <div className="w-10 h-10 rounded-full bg-amber-600 text-white font-bold flex items-center justify-center mx-auto mb-3">2</div>
              <h3 className="font-bold text-stone-900 text-sm mb-2">クーポンが付与される</h3>
              <p className="text-xs text-stone-600 leading-relaxed">寄付完了後、楽天トラベルのマイクーポンに即時〜数日で付与（有効期間は3年間）。</p>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/60 text-center">
              <div className="w-10 h-10 rounded-full bg-amber-600 text-white font-bold flex items-center justify-center mx-auto mb-3">3</div>
              <h3 className="font-bold text-stone-900 text-sm mb-2">予約時に割引適用</h3>
              <p className="text-xs text-stone-600 leading-relaxed">宿泊予約画面でクーポンを選択。すでに予約済みの宿でも「あとから適用」が可能です。</p>
            </div>
          </div>
          <div className="text-center mt-6">
            <Link
              href="/furusato-tax-travel-beginners-complete-guide"
              className="text-amber-800 font-bold text-xs sm:text-sm hover:underline"
            >
              👉 詳しいお金の流れやワンストップ特例の手順はこちらの完全マニュアルへ
            </Link>
          </div>
        </section>

        {/* 関連特集クロスリンク */}
        <section className="bg-stone-50 rounded-3xl p-8 border border-stone-200/80 mb-16">
          <h2 className="text-lg md:text-xl font-bold font-serif text-stone-800 mb-4">
            あわせて読みたい関連特集
          </h2>
          <ul className="grid sm:grid-cols-2 gap-2">

            <li key="furusato-tax-narukokyo-akiu-autumn-foliage-stay">
              <Link
                href="/furusato-tax-narukokyo-akiu-autumn-foliage-stay"
                className="block p-4 rounded-2xl bg-white border border-stone-200 hover:border-amber-400 hover:shadow-sm transition text-stone-800 text-sm font-bold group"
              >
                <span className="text-amber-700 group-hover:text-amber-900 mr-1.5">👉</span>
                【鳴子峡大紅葉＆鳴子温泉郷×ふるさと納税】深さ100m絶壁と名湯めぐり
              </Link>
            </li>
  

            <li key="furusato-tax-pure-kakenagashi-secret-hotspring-stay">
              <Link
                href="/furusato-tax-pure-kakenagashi-secret-hotspring-stay"
                className="block p-4 rounded-2xl bg-white border border-stone-200 hover:border-amber-400 hover:shadow-sm transition text-stone-800 text-sm font-bold group"
              >
                <span className="text-amber-700 group-hover:text-amber-900 mr-1.5">👉</span>
                【源泉かけ流し秘湯×ふるさと納税】加水・加温なしの本物の湯力を堪能する名宿
              </Link>
            </li>
  

            <li key="furusato-tax-three-medicinal-hotsprings-stay">
              <Link
                href="/furusato-tax-three-medicinal-hotsprings-stay"
                className="block p-4 rounded-2xl bg-white border border-stone-200 hover:border-amber-400 hover:shadow-sm transition text-stone-800 text-sm font-bold group"
              >
                <span className="text-amber-700 group-hover:text-amber-900 mr-1.5">👉</span>
                【日本三大薬湯×ふるさと納税】有馬・草津・松之山の万病を癒やす名湯宿
              </Link>
            </li>
  

            <li key="furusato-tax-luxury-hotspring-ryokan-stay">
              <Link
                href="/furusato-tax-luxury-hotspring-ryokan-stay"
                className="block p-4 rounded-2xl bg-white border border-stone-200 hover:border-amber-400 hover:shadow-sm transition text-stone-800 text-sm font-bold group"
              >
                <span className="text-amber-700 group-hover:text-amber-900 mr-1.5">👉</span>
                【実質2,000円で泊まる名湯】高級温泉旅館＆憧れの老舗宿完全ガイド
              </Link>
            </li>
  
          </ul>
        </section>

        {/* ハブページへの誘導フッター */}
        <div className="bg-gradient-to-r from-stone-900 via-amber-950 to-stone-900 text-white rounded-3xl p-8 md:p-10 shadow-xl border border-amber-900/40 text-center mb-12">
          <h2 className="text-xl sm:text-2xl font-bold font-serif mb-3 text-amber-50">
            もっとお得に旅を楽しむためのハブページへ
          </h2>
          <p className="text-stone-300 text-xs sm:text-sm mb-6 max-w-xl mx-auto">
            全国のテーマ別宿特集や、旅行費を最大30％安くする裏ワザを網羅した総合ガイドを公開中。
          </p>
          <Link
            href="/travel-savings-guide"
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 text-stone-950 font-black px-7 py-3.5 rounded-2xl shadow-xl hover:opacity-95 transition text-sm"
          >
            🏨 旅行節約総合ハブページを見る ➔
          </Link>
        </div>

        {/* フッター */}
        <footer className="text-center text-xs text-stone-400 pt-6 border-t border-stone-200">
          <p>※表示内容は2026年9月時点の情報です。最新の宿泊プラン・クーポン対象施設は楽天トラベルにてご確認ください。</p>
          <p className="mt-2">
            <Link href="/" className="text-stone-500 hover:text-stone-800 underline transition">旅宿クラウド トップページへ</Link>
          </p>
        </footer>
      </div>
    </main>
  );
}
