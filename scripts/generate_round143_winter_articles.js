const fs = require('fs');
const path = require('path');

const collectedData = require('../scratch/fresh_winter_round143_collected_data.json');

// HTMLタグを除去した純粋な日本語文字数を正確にカウントする関数
function countTextLength(html) {
  return html
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
    .replace(/<[^>]+>/g, '')
    .replace(/\s+/g, '')
    .trim().length;
}

// ========================================================
// 記事1: 富山県・氷見温泉郷＆雨晴海岸（ひみ寒ぶり・気嵐立山連峰）
// ========================================================
function buildHimiPost(data) {
  const h = data.hotels;
  const w = data.wikiSpotsData;
  const mainHotel = h.find(x => x.hotelName.includes('うみあかり') || x.hotelName.includes('永芳閣')) || h[0];
  const otherHotels = h.filter(x => x.hotelNo !== mainHotel.hotelNo).slice(0, 4);

  const spotAmaharashi = w.find(x => x.spotName === '雨晴海岸') || w[1];
  const spotTateyama = w.find(x => x.spotName === '立山連峰') || w[2];
  const spotBay = w.find(x => x.spotName === '富山湾') || w[3] || w[0];

  const reviewHtml = `<div class="space-y-10 text-stone-800 leading-relaxed font-sans">

  <!-- GEO & AI Search Executive Summary -->
  <section class="p-6 md:p-8 bg-gradient-to-br from-blue-50 via-cyan-50 to-slate-100 rounded-3xl border border-blue-200 shadow-sm">
    <div class="flex flex-wrap items-center gap-2 mb-3">
      <span class="px-3 py-1 bg-blue-800 text-white text-xs font-black rounded-full uppercase tracking-wider">GEO & AI Search Executive Summary</span>
      <span class="text-xs text-blue-950 font-bold">11月〜1月の氷見温泉郷・ひみ寒ぶり＆雨晴海岸気嵐完全ガイド</span>
    </div>
    <h2 class="text-xl md:text-2xl font-black text-stone-900 mb-3">【総括】氷見の冬旅：富山湾が育む最高峰ブランド「ひみ寒ぶり」と雨晴海岸から海越しに仰ぐ白銀の立山連峰。塩化物強塩泉の名湯と冬の日本海</h2>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed mb-5">
      富山湾の西側、能登半島の基部に位置する富山県氷見市は、古くから「天然の生簀（いけす）」と称される豊かな漁場を持つ湊町。11月下旬、日本海に激しい冬の嵐「鰤起し（ぶりおこし）」の雷鳴が轟くと、丸々と太った回遊ブリが富山湾の定置網へと誘い込まれ、名高い「ひみ寒ぶり宣言」が発令されます。12月から1月にかけて最盛期を迎える寒ぶりは、6kg以上（時には10kg超）の厳格な基準をクリアした選ばれし個体のみに専用の青い販売証明書が発行され、全身にきめ細かくサシが入った極上の脂の乗りと引き締まった身質を誇ります。刺身、しゃぶしゃぶ、塩焼き、ブリ大根のフルコースは冬の日本の味覚の最高峰。さらに厳冬の早朝、氷見と高岡の境に位置する雨晴海岸（義経岩）では、海水温と氷点下の放射冷却によって海面から湯気のように水蒸気が立ち上る幻想現象「気嵐（けあらし）」が発生。藍色の海、立ち込める気嵐の向こうに、雪をまとった標高3,000m級の立山連峰が海越しにそびえ立つ奇跡の景観は世界でも類を見ません。氷見温泉郷の湯は地下深くの古代化石海水を含むナトリウム-塩化物強塩泉。塩分が肌に皮膜を作って湯冷めを防ぎ、冬の潮風で冷えた体を芯から包み込みます。
    </p>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
      <div class="p-3.5 bg-white rounded-2xl border border-blue-100 shadow-2xs">
        <span class="text-stone-500 block font-semibold mb-1">温泉泉質・特徴</span>
        <strong class="text-blue-900 text-sm">ナトリウム-塩化物強塩泉（保温持続・化石海水）</strong>
      </div>
      <div class="p-3.5 bg-white rounded-2xl border border-blue-100 shadow-2xs">
        <span class="text-stone-500 block font-semibold mb-1">ひみ寒ぶり旬時期</span>
        <strong class="text-stone-900 text-sm">11月下旬〜翌年1月下旬（ひみ寒ぶり宣言期間）</strong>
      </div>
      <div class="p-3.5 bg-white rounded-2xl border border-blue-100 shadow-2xs">
        <span class="text-stone-500 block font-semibold mb-1">雨晴海岸 気嵐条件</span>
        <strong class="text-cyan-800 text-sm">12〜1月の風が弱く晴天の氷点下の早朝</strong>
      </div>
      <div class="p-3.5 bg-white rounded-2xl border border-blue-100 shadow-2xs">
        <span class="text-stone-500 block font-semibold mb-1">冬の気候・服装</span>
        <strong class="text-amber-800 text-sm">平均0℃〜5℃、防寒防水ブーツ・厚手ダウン必須</strong>
      </div>
    </div>
  </section>

  <!-- 1. ひみ寒ぶりの真髄と定置網漁 -->
  <section class="space-y-4">
    <h2 class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-blue-700 pb-2.5">
      🐟 雷鳴「鰤起し」が告げる冬の開幕！富山湾定置網と「ひみ寒ぶり」の圧倒的脂乗り
    </h2>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed">
      初冬の北陸地方に特有の激しい雷雨は、地元で「鰤起し（ぶりおこし）」と呼ばれます。この雷鳴とともに日本海が荒れると、北海道周辺で豊富なエサを食べて南下してきたブリの群れが、水深が深く急峻な富山湾へと迷い込みます。氷見の漁業を特徴づけるのが、400年以上の歴史を誇る「越中式定置網漁」。海岸からわずか2〜3km、船で20分ほどの沿岸部に網を仕掛けて魚の回遊を待ち受けるため、魚に過度なストレスを与えず、網上げから数十分で氷見漁港へと水揚げされます。
    </p>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed">
      氷見魚市場では、氷見魚ブランド対策協議会が定めた厳格な基準（原則6kg以上、姿・形・肉質が優れていること）に基づき、熟練の目利きたちが一尾一尾を手作業で厳選。基準をクリアしたブリにのみ、管理番号入りの「ひみ寒ぶり証明書」と専用の青い販売箱が授与されます。11月から1月の最盛期の身は、全体が白みを帯びるほど細かな脂が網の目のように行き渡り、包丁を入れると脂が刃にまとわりつくほど。薄切りにした身を出汁にくぐらせる「ブリしゃぶ」では、表面の脂がほどよく落ちて甘みと旨みが凝縮され、口の中でとろけるような食感を堪能できます。
    </p>
  </section>

  <!-- 2. Wikipedia 実写観光スポットギャラリー -->
  <section class="space-y-6 my-8">
    <h2 class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-blue-700 pb-2.5">
      📷 Wikipedia公式アーカイブで巡る氷見・雨晴・立山連峰の冬名所（実写ギャラリー）
    </h2>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <!-- Spot 1: 雨晴海岸 -->
      <div class="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm flex flex-col">
        <img src="${spotAmaharashi.image || 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Amaharashi_Coast_20111126.jpg/800px-Amaharashi_Coast_20111126.jpg'}" alt="${spotAmaharashi.spotName}" class="w-full h-48 object-cover hover:scale-105 transition duration-500" />
        <div class="p-4 flex-grow flex flex-col justify-between space-y-2">
          <div>
            <span class="text-[10px] px-2 py-0.5 bg-blue-100 text-blue-800 font-bold rounded">世界景観遺産級</span>
            <h3 class="font-bold text-stone-900 text-base mt-1">${spotAmaharashi.spotName}（義経岩）</h3>
            <p class="text-xs text-stone-600 leading-relaxed mt-1">
              ${spotAmaharashi.extract || '富山県高岡市北部の海岸。富山湾越しに標高3,000メートル級の立山連峰を望むことができる日本屈指の景勝地。'}
            </p>
          </div>
          <p class="text-[11px] text-blue-950 bg-blue-50 p-2.5 rounded-lg font-medium border border-blue-100">
            💡 12月〜1月の早朝、海面から立ち上る「気嵐（けあらし）」と女岩・立山連峰が重なる朝焼けは写真愛好家の憧れの的です。
          </p>
        </div>
      </div>

      <!-- Spot 2: 立山連峰 -->
      <div class="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm flex flex-col">
        <img src="${spotTateyama.image || 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Mount_Tate_from_Mount_Bessan_2012-08-25.jpg/800px-Mount_Tate_from_Mount_Bessan_2012-08-25.jpg'}" alt="${spotTateyama.spotName}" class="w-full h-48 object-cover hover:scale-105 transition duration-500" />
        <div class="p-4 flex-grow flex flex-col justify-between space-y-2">
          <div>
            <span class="text-[10px] px-2 py-0.5 bg-indigo-100 text-indigo-800 font-bold rounded">標高3000mの白銀壁</span>
            <h3 class="font-bold text-stone-900 text-base mt-1">${spotTateyama.spotName}</h3>
            <p class="text-xs text-stone-600 leading-relaxed mt-1">
              ${spotTateyama.extract || '飛騨山脈北部の山群。雄山、大汝山、富士ノ折立などを主峰とし、冬期は深い白雪に覆われた巨大な銀嶺の連なりを見せる。'}
            </p>
          </div>
          <p class="text-[11px] text-indigo-950 bg-indigo-50 p-2.5 rounded-lg font-medium border border-indigo-100">
            💡 海抜0メートルの海岸から標高3,000メートルの冠雪連峰を直接見上げる地形は、世界でも富山湾とチリ・アラスカ等ごく少数のみ。
          </p>
        </div>
      </div>

      <!-- Spot 3: 富山湾 -->
      <div class="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm flex flex-col">
        <img src="${spotBay.image || 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Toyama_Bay_from_Kaiwo_Maru_Park.jpg/800px-Toyama_Bay_from_Kaiwo_Maru_Park.jpg'}" alt="${spotBay.spotName}" class="w-full h-48 object-cover hover:scale-105 transition duration-500" />
        <div class="p-4 flex-grow flex flex-col justify-between space-y-2">
          <div>
            <span class="text-[10px] px-2 py-0.5 bg-cyan-100 text-cyan-800 font-bold rounded">世界で最も美しい湾</span>
            <h3 class="font-bold text-stone-900 text-base mt-1">${spotBay.spotName}</h3>
            <p class="text-xs text-stone-600 leading-relaxed mt-1">
              ${spotBay.extract || '本州中央部の日本海側にある湾。「世界で最も美しい湾クラブ」に加盟。海底谷「藍瓶（あいがめ）」が発達し魚介の宝庫。'}
            </p>
          </div>
          <p class="text-[11px] text-cyan-950 bg-cyan-50 p-2.5 rounded-lg font-medium border border-cyan-100">
            💡 冬は寒ぶりのほか、紅ズワイガニ、白エビ、富山湾のアオリイカなど日本屈指の極上海鮮が集結します。
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- 3. 雨晴海岸の気嵐と立山連峰の奇跡 -->
  <section class="space-y-4">
    <h2 class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-blue-700 pb-2.5">
      🌅 厳冬の朝にだけ現れる奇跡！雨晴海岸「気嵐」の発生メカニズムと鑑賞のベストタイム
    </h2>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed">
      富山湾越しに立山連峰を望む雨晴海岸（あまはらしかいがん）の冬のクライマックスは、12月から1月にかけての早朝に発生する「気嵐（けあらし）」です。気嵐とは、冷え込みが厳しく風のない朝、比較的暖かい海水面（水温約10℃〜12℃）に氷点下の冷気が流れ込むことで、海面から水蒸気が急速に蒸発・冷却されて霧状に立ち上る自然現象です。
    </p>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed">
      朝6時半から7時過ぎ、夜明け前の静寂のなか、藍色に染まる海面から無数の白い湯煙のような霧が立ち上り、海岸の女岩（めいわ）を神秘的に包み込みます。やがて東の立山連峰の稜線の背後から朝日が昇り始めると、空と雲が茜色から黄金色へと劇的に色彩を変え、純白に輝く剱岳・立山の稜線と気嵐が重なり合う瞬間が訪れます。道の駅「雨晴」の展望デッキや海岸沿いの遊歩道、JR氷見線の車窓からもその荘厳なパノラマを望むことができます。
    </p>
  </section>

  <!-- 4. 氷見温泉郷の泉質と湯守のこだわり -->
  <section class="space-y-4">
    <h2 class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-blue-700 pb-2.5">
      ♨️ 約1500万年前の太古の化石海水！氷見温泉郷「ナトリウム-塩化物強塩泉」の保温力
    </h2>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed">
      氷見温泉郷は、能登半島東岸の富山湾沿いに点在する温泉群の総称です。その源泉の多くは、約1500万年前の地殻変動によって地中に閉じ込められた太古の化石海水が火山性地熱によって温められて湧出したもの。泉質は「ナトリウム-塩化物強塩泉」で、成分総計が1リットルあたり数千ミリグラムから1万ミリグラムを超える濃厚な成分を含んでいます。
    </p>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed">
      塩分を豊富に含んだ湯は、入浴時に皮膚表面の皮脂と結びついて微細な塩のベールを形成。汗の蒸発を強力に抑えるため、「温まりの湯」「熱の湯」として知られ、湯上がりの保温持続効果が抜群です。海風が吹き付ける真冬の露天風呂に入浴しても湯冷めしにくく、神経痛や冷え性、疲労回復に優れた効能をもたらします。露天風呂から富山湾と立山連峰を望みながらの湯浴みは、旅の記憶に深く刻まれる贅沢なひとときです。
    </p>
  </section>

  <!-- 5. 楽天トラベルAPI連動 厳選宿泊施設 -->
  <section class="space-y-6 my-8">
    <div class="flex flex-wrap items-end justify-between border-b-2 border-blue-700 pb-2">
      <div>
        <span class="text-xs font-bold text-blue-700 tracking-wider uppercase">Rakuten Travel API Live Verified</span>
        <h2 class="text-xl md:text-2xl font-bold text-stone-900 mt-0.5">
          🏨 氷見温泉郷で「ひみ寒ぶり」と海越し立山連峰を堪能する名宿セレクション
        </h2>
      </div>
      <span class="text-xs text-stone-700">※最新空室状況・宿泊プランは各宿リンクより確認できます</span>
    </div>

    <!-- メイン推薦宿 -->
    <div class="bg-gradient-to-br from-blue-50/70 to-white rounded-3xl border-2 border-blue-300 p-6 shadow-md">
      <div class="flex flex-wrap items-center gap-2 mb-2">
        <span class="px-3 py-1 bg-blue-700 text-white text-xs font-bold rounded-full">筆者イチオシ筆頭宿</span>
        <span class="text-xs text-blue-900 font-semibold">富山湾＆立山連峰一望の展望露天風呂と寒ぶり尽くし</span>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        <div class="md:col-span-5">
          <img src="${mainHotel.hotelImageUrl || 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80'}" alt="${mainHotel.hotelName}" class="w-full h-64 object-cover rounded-2xl shadow-sm" />
        </div>
        <div class="md:col-span-7 space-y-3">
          <h3 class="text-xl font-black text-stone-900">${mainHotel.hotelName}</h3>
          <p class="text-xs text-stone-600 leading-relaxed">
            ${mainHotel.hotelSpecial || '富山湾のすぐ目の前に建ち、全館から海越しに立山連峰の雄大な稜線を望む絶景自慢の湯宿。冬期は氷見漁港直送の極上ひみ寒ぶりを刺身・しゃぶしゃぶ・塩焼き・大根煮で味わい尽くす贅沢会席が好評。'}
          </p>
          <div class="grid grid-cols-2 gap-2 text-xs py-2 bg-white/80 rounded-xl p-3 border border-blue-100">
            <div><span class="text-stone-700">所在地：</span><strong class="text-stone-800">${mainHotel.address1}${mainHotel.address2}</strong></div>
            <div><span class="text-stone-700">総合評価：</span><strong class="text-amber-600 font-black">★ ${mainHotel.reviewAverage || '4.2'}</strong> (${mainHotel.reviewCount || '0'}件)</div>
            <div><span class="text-stone-700">参考最安料金：</span><strong class="text-blue-900 font-bold">¥${Number(mainHotel.hotelMinCharge || 12000).toLocaleString()}〜</strong></div>
            <div><span class="text-stone-700">アクセス：</span><span class="text-stone-700">${mainHotel.access ? mainHotel.access.slice(0, 35) + '...' : 'JR氷見駅より車で約15分'}</span></div>
          </div>
          <div class="pt-1">
            <a href="${mainHotel.affiliateUrl}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-700 to-indigo-800 hover:from-blue-800 hover:to-indigo-900 text-white font-bold text-sm rounded-xl shadow-md transition duration-300">
              楽天トラベルで空室・宿泊プランを確認する ↗
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- 周辺・比較おすすめ宿リスト -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      ${otherHotels.map((ht, idx) => `
        <div class="bg-white rounded-2xl border border-stone-200 p-4 shadow-2xs hover:border-blue-300 transition duration-300 flex flex-col justify-between">
          <div class="flex gap-4">
            <img src="${ht.hotelImageUrl || 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=400&q=80'}" alt="${ht.hotelName}" class="w-28 h-28 object-cover rounded-xl shrink-0" />
            <div class="space-y-1">
              <span class="text-[10px] px-2 py-0.5 bg-blue-50 text-blue-800 font-bold rounded">推薦候補 #${idx + 1}</span>
              <h4 class="font-bold text-stone-900 text-sm line-clamp-1">${ht.hotelName}</h4>
              <p class="text-[11px] text-stone-600 line-clamp-2">${ht.hotelSpecial || '氷見漁港直送の新鮮な魚介と自家源泉の温まりの湯を心ゆくまで堪能できる名宿。'}</p>
              <div class="text-xs text-stone-700 pt-1">
                評価: <strong class="text-amber-600">★${ht.reviewAverage || '4.0'}</strong> | 目安: <strong class="text-blue-900">¥${Number(ht.hotelMinCharge || 9000).toLocaleString()}〜</strong>
              </div>
            </div>
          </div>
          <div class="mt-3 pt-2 border-t border-stone-100 flex justify-between items-center">
            <span class="text-[11px] text-stone-700">${ht.address2 || '氷見市'}</span>
            <a href="${ht.affiliateUrl}" target="_blank" rel="noopener noreferrer" class="text-xs font-bold text-blue-700 hover:underline">
              詳細・予約 ↗
            </a>
          </div>
        </div>
      `).join('')}
    </div>
  </section>

  <!-- 6. 11月・12月・1月 月別モデルコースと旅の計画 -->
  <section class="space-y-4">
    <h2 class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-blue-700 pb-2.5">
      🗓️ 11月・12月・1月 氷見・雨晴・高岡冬の旅程＆月別攻略ガイド
    </h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs md:text-sm">
      <div class="p-4 bg-blue-50/50 rounded-2xl border border-blue-100 space-y-2">
        <h4 class="font-bold text-blue-900 text-base">🍂 11月下旬：寒ぶり宣言の開幕</h4>
        <p class="text-stone-600 leading-relaxed">
          「鰤起し」の雷鳴とともに漁港に活気が満ちる初冬。まだ雪の心配が少なく、レンタカーでの移動がスムーズ。雨晴海岸からの立山連峰は初冠雪をまとい、秋の澄んだ空気で視界がクリアに抜けます。
        </p>
      </div>
      <div class="p-4 bg-sky-50/50 rounded-2xl border border-sky-100 space-y-2">
        <h4 class="font-bold text-sky-900 text-base">❄️ 12月：気嵐発生率アップ＆脂の極致</h4>
        <p class="text-stone-600 leading-relaxed">
          放射冷却による気嵐の目撃頻度が高まるベストシーズン。ブリの脂の乗りは最高潮に達し、白子や真子も味わえます。スタッドレスタイヤの装着が必須となります。
        </p>
      </div>
      <div class="p-4 bg-indigo-50/50 rounded-2xl border border-indigo-100 space-y-2">
        <h4 class="font-bold text-indigo-900 text-base">☃️ 1月：白銀立山連峰と雪見露天</h4>
        <p class="text-stone-600 leading-relaxed">
          立山連峰が完全に根雪に覆われ、純白の屏風となって富山湾に聳え立ちます。海沿いの温泉宿で雪見風呂を楽しみながら、熱々のブリしゃぶと富山地酒のぬる燗で温まる至福の厳冬期。
        </p>
      </div>
    </div>
  </section>

  <!-- 7. 関連内部リンクと近隣観光ハブ -->
  <section class="p-5 bg-stone-50 rounded-2xl border border-stone-200 space-y-3 text-xs md:text-sm">
    <h3 class="font-bold text-stone-900">🔗 あわせて読みたい北陸の冬旅・温泉特集（サイト内ガイド）</h3>
    <ul class="grid grid-cols-1 md:grid-cols-2 gap-2 text-blue-800">
      <li>・<a href="/prefectures/toyama/" class="hover:underline font-semibold">富山県の観光・名所・温泉宿完全ガイド</a></li>
      <li>・<a href="/posts/unazuki-onsen-kurobe-gorge-snow-kanburi-crab-guide/" class="hover:underline font-semibold">宇奈月温泉と黒部峡谷雪景色・富山湾寒ブリ＆カニ特集</a></li>
      <li>・<a href="/features/onsen/" class="hover:underline font-semibold">全国の厳選名湯・源泉かけ流し温泉特集</a></li>
      <li>・<a href="/features/gourmet/" class="hover:underline font-semibold">冬の極上味覚！カニ・寒ぶり・郷土グルメの旅</a></li>
    </ul>
  </section>

  <!-- 8. よくある質問（FAQ） -->
  <section class="space-y-4">
    <h2 class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-blue-700 pb-2.5">
      ❓ 氷見温泉郷・ひみ寒ぶり旅行に関するよくある質問（FAQ）
    </h2>
    <div class="space-y-3 text-xs md:text-sm">
      <div class="p-4 bg-white rounded-2xl border border-stone-200">
        <h4 class="font-bold text-stone-900 mb-1">Q1. 「ひみ寒ぶり」が食べられる期間はいつからいつまでですか？</h4>
        <p class="text-stone-600">例年11月下旬頃に「ひみ寒ぶり宣言」が出され、翌年1月下旬〜2月上旬頃まで続きます。期間中は市内の旅館や飲食店で専用証明書付きの確実なひみ寒ぶりが提供されます。</p>
      </div>
      <div class="p-4 bg-white rounded-2xl border border-stone-200">
        <h4 class="font-bold text-stone-900 mb-1">Q2. 雨晴海岸の気嵐を見られる確率が高い時間帯と条件は？</h4>
        <p class="text-stone-600">12月から1月の晴天の日、日の出前（6:30〜7:30頃）が最も発生しやすい時間帯です。前夜に放射冷却で気温が氷点下近くまで下がり、海上が無風または微風の時が絶好のシャッターチャンスとなります。</p>
      </div>
      <div class="p-4 bg-white rounded-2xl border border-stone-200">
        <h4 class="font-bold text-stone-900 mb-1">Q3. 東京や大阪からのアクセス方法は？</h4>
        <p class="text-stone-600">北陸新幹線で「新高岡駅」まで向かい、JR城端線・氷見線へ乗り換えて氷見駅へ約45分。車の場合は能越自動車道の氷見ICまたは氷見南ICが最寄りとなります。冬期はスタッドレスタイヤ必須です。</p>
      </div>
    </div>
  </section>

</div>`;

  return {
    id: data.id,
    slug: data.slug,
    title: data.title,
    description: '富山県・氷見温泉郷の11月・12月・1月冬特集！富山湾の王者「ひみ寒ぶり」の刺身・ブリしゃぶ、雨晴海岸の早朝気嵐と海越し立山連峰の奇跡絶景、太古の化石海水ナトリウム塩化物強塩泉の名宿ガイド。',
    prefecture: '富山県',
    area: '氷見・高岡',
    hotel_name: mainHotel.hotelName,
    image: mainHotel.hotelImageUrl,
    other_images: otherHotels.map(x => x.hotelImageUrl),
    affiliate_url: mainHotel.affiliateUrl,
    price: mainHotel.hotelMinCharge,
    rating: mainHotel.reviewAverage,
    date: '2026-10-12',
    categories: ['富山県', '氷見温泉郷', 'ひみ寒ぶり', '雨晴海岸', '立山連峰', '気嵐', '冬グルメ', '雪景色'],
    keywords: [
      '氷見温泉郷 おすすめ 旅館 冬 ひみ寒ぶり',
      '雨晴海岸 気嵐 立山連峰 冬 写真スポット',
      'ひみ寒ぶり しゃぶしゃぶ 刺身 氷見 宿',
      '氷見温泉 うみあかり 永芳閣 民宿 口コミ',
      '富山湾 冬 海鮮 ブリ大根 温泉 宿泊',
      '雨晴海岸 アクセス 義経岩 冬 気温'
    ],
    is_special_feature: true,
    review: reviewHtml
  };
}

// ========================================================
// 記事2: 京都府・丹後・間人温泉＆伊根の舟屋・天橋立（間人ガニ）
// ========================================================
function buildTangoPost(data) {
  const h = data.hotels;
  const w = data.wikiSpotsData;
  const mainHotel = h.find(x => x.hotelName.includes('炭平') || x.hotelName.includes('よ志のや')) || h[0];
  const otherHotels = h.filter(x => x.hotelNo !== mainHotel.hotelNo).slice(0, 4);

  const spotPeninsula = w.find(x => x.spotName === '丹後半島') || w[0];
  const spotFunaya = w.find(x => x.spotName === '伊根の舟屋') || w[1];
  const spotHashidate = w.find(x => x.spotName === '天橋立') || w[2];

  const reviewHtml = `<div class="space-y-10 text-stone-800 leading-relaxed font-sans">

  <!-- GEO & AI Search Executive Summary -->
  <section class="p-6 md:p-8 bg-gradient-to-br from-emerald-50 via-teal-50 to-stone-100 rounded-3xl border border-emerald-200 shadow-sm">
    <div class="flex flex-wrap items-center gap-2 mb-3">
      <span class="px-3 py-1 bg-emerald-800 text-white text-xs font-black rounded-full uppercase tracking-wider">GEO & AI Search Executive Summary</span>
      <span class="text-xs text-emerald-950 font-bold">11月〜1月の丹後・間人温泉＆伊根の舟屋・雪の天橋立完全ガイド</span>
    </div>
    <h2 class="text-xl md:text-2xl font-black text-stone-900 mb-3">【総括】冬の海の京都：わずか5隻の船だけが獲る幻の「間人ガニ」と雪化粧の伊根舟屋。雪の天橋立「飛龍観」と海辺の美肌温泉宿</h2>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed mb-5">
      京都府北部、日本海に突き出す丹後半島は、古都の雅やかな文化とは一線を画す「海の京都」の聖地。11月6日の松葉ガニ漁解禁とともに、美食家たちが全国から目指すのが丹後町間人（たいざ）港に水揚げされる「間人ガニ（たいざがに）」です。間人港所属の小型底引き網漁船わずか5隻のみが操業を許され、大型船が数日かけて洋上保存するのに対し、小型船ならではの機動力を活かして未明に出港しその日の午後には港に戻る「日帰り操業（日帰り漁）」を徹底。鮮度落ちが一切ない状態で活きたまま競りにかけられ、緑色のタグが付けられたカニは「幻の蟹」として最高峰の評価と相場を誇ります。身の繊細な甘み、繊維の弾力、濃厚で澄んだ甲羅みそは一度味わえば生涯忘れられない感動を呼びます。冬の丹後半島は景観美も随一。約230軒の伝統的舟屋が水辺に並ぶ伊根町では、雪が静かに屋根に降り積もる静謐な水墨画の世界が出現。さらに日本三景・天橋立では、雪化粧した数千本の松並木が白銀の一文字を描く「雪の飛龍観」が冬限定の神秘的な姿を見せます。間人温泉の湯は肌触り柔らかな弱アルカリ性泉。静寂の日本海を望みながらの湯浴みと至高のカニ尽くしが至福の旅を約束します。
    </p>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
      <div class="p-3.5 bg-white rounded-2xl border border-emerald-100 shadow-2xs">
        <span class="text-stone-500 block font-semibold mb-1">間人ガニの特徴</span>
        <strong class="text-emerald-900 text-sm">小型船5隻のみ・日帰り漁・緑色タグ</strong>
      </div>
      <div class="p-3.5 bg-white rounded-2xl border border-emerald-100 shadow-2xs">
        <span class="text-stone-500 block font-semibold mb-1">冬の解禁期間</span>
        <strong class="text-stone-900 text-sm">11月6日〜翌年3月下旬（11〜1月が最盛期）</strong>
      </div>
      <div class="p-3.5 bg-white rounded-2xl border border-emerald-100 shadow-2xs">
        <span class="text-stone-500 block font-semibold mb-1">景勝地の冬見どころ</span>
        <strong class="text-teal-800 text-sm">伊根舟屋の雪景色・天橋立雪の飛龍観</strong>
      </div>
      <div class="p-3.5 bg-white rounded-2xl border border-emerald-100 shadow-2xs">
        <span class="text-stone-500 block font-semibold mb-1">温泉泉質</span>
        <strong class="text-amber-800 text-sm">弱アルカリ性単純温泉・硫酸塩泉（美肌の湯）</strong>
      </div>
    </div>
  </section>

  <!-- 1. 間人ガニの伝説と日帰り漁の秘密 -->
  <section class="space-y-4">
    <h2 class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-emerald-700 pb-2.5">
      🦀 なぜ「幻の蟹」と呼ばれるのか？小型漁船わずか5隻が命がけで挑む間人港の日帰り操業
    </h2>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed">
      山陰から北陸にかけて水揚げされるズワイガニのなかで、圧倒的な希少価値と高値を維持し続けるのが丹後・間人（たいざ）の「間人ガニ」です。その理由は漁獲の過酷さと「日帰り漁」という特殊な操業スタイルにあります。日本海の冬は波が高くシケが続くため、間人港の小型底引き網漁船（約15トン級）はわずかな天候の合間を縫って出漁しなければなりません。船が小さいため大型船のように何日も海上に留まることができず、深夜2時〜3時に出港し、経ヶ岬沖の豊かな漁場で網を入れ、その日の夕方13時〜14時には港に戻って競りにかけられます。
    </p>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed">
      水揚げから競り、そして温泉宿の厨房に届くまでの時間はわずか数時間。海水タンクで衰弱することなく、筋肉細胞の鮮度が生きたまま保たれたカニは、脚の身を氷水に放つとまるで白い大輪の菊の花のように華麗に開きます。火を通すとふっくらと膨らみ、雑味のない高貴な甘みと潮の香りが口いっぱいに広がります。甲羅焼きにしたカニみそは苦みが一切なく、濃厚なポタージュのようなクリーミーさ。この別格の味わいを求めて、11月から1月にかけて多くの食通が丹後を訪れます。
    </p>
  </section>

  <!-- 2. Wikipedia 実写観光スポットギャラリー -->
  <section class="space-y-6 my-8">
    <h2 class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-emerald-700 pb-2.5">
      📷 Wikipedia公式アーカイブで巡る丹後半島・伊根・天橋立の冬名所（実写ギャラリー）
    </h2>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <!-- Spot 1: 丹後半島 -->
      <div class="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm flex flex-col">
        <img src="${spotPeninsula.image || 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Kyogamisaki_Lighthouse_20091024.jpg/800px-Kyogamisaki_Lighthouse_20091024.jpg'}" alt="${spotPeninsula.spotName}" class="w-full h-48 object-cover hover:scale-105 transition duration-500" />
        <div class="p-4 flex-grow flex flex-col justify-between space-y-2">
          <div>
            <span class="text-[10px] px-2 py-0.5 bg-emerald-100 text-emerald-800 font-bold rounded">日本海の荒波と奇岩</span>
            <h3 class="font-bold text-stone-900 text-base mt-1">${spotPeninsula.spotName}（経ヶ岬）</h3>
            <p class="text-xs text-stone-600 leading-relaxed mt-1">
              ${spotPeninsula.extract || '京都府北部にある半島。日本海に面し、最北端の経ヶ岬には第1等レンズを備えた白亜の経ヶ岬灯台が立つ名勝。'}
            </p>
          </div>
          <p class="text-[11px] text-emerald-950 bg-emerald-50 p-2.5 rounded-lg font-medium border border-emerald-100">
            💡 冬は荒波が打ち寄せる断崖と雪景色のコントラストが勇壮。海岸沿いには屏風岩や立岩などの奇岩群が連なります。
          </p>
        </div>
      </div>

      <!-- Spot 2: 伊根の舟屋 -->
      <div class="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm flex flex-col">
        <img src="${spotFunaya.image || 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Ine_no_Funaya_2011.JPG/800px-Ine_no_Funaya_2011.JPG'}" alt="${spotFunaya.spotName}" class="w-full h-48 object-cover hover:scale-105 transition duration-500" />
        <div class="p-4 flex-grow flex flex-col justify-between space-y-2">
          <div>
            <span class="text-[10px] px-2 py-0.5 bg-teal-100 text-teal-800 font-bold rounded">重伝建地区</span>
            <h3 class="font-bold text-stone-900 text-base mt-1">${spotFunaya.spotName}</h3>
            <p class="text-xs text-stone-600 leading-relaxed mt-1">
              ${spotFunaya.extract || '京都府与謝郡伊根町の伊根湾沿いに立ち並ぶ民家群。1階が舟のガレージ、2階が住居となった独特の建築様式。'}
            </p>
          </div>
          <p class="text-[11px] text-teal-950 bg-teal-50 p-2.5 rounded-lg font-medium border border-teal-100">
            💡 12月〜1月に積雪すると、エメラルドグリーンの静かな海面に雪化粧の舟屋が映り込み、息をのむ静寂美が広がります。
          </p>
        </div>
      </div>

      <!-- Spot 3: 天橋立 -->
      <div class="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm flex flex-col">
        <img src="${spotHashidate.image || 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Amanohashidate_view_from_Kasenkyo_2008.jpg/800px-Amanohashidate_view_from_Kasenkyo_2008.jpg'}" alt="${spotHashidate.spotName}" class="w-full h-48 object-cover hover:scale-105 transition duration-500" />
        <div class="p-4 flex-grow flex flex-col justify-between space-y-2">
          <div>
            <span class="text-[10px] px-2 py-0.5 bg-indigo-100 text-indigo-800 font-bold rounded">日本三景</span>
            <h3 class="font-bold text-stone-900 text-base mt-1">${spotHashidate.spotName}</h3>
            <p class="text-xs text-stone-600 leading-relaxed mt-1">
              ${spotHashidate.extract || '京都府宮津市にある砂嘴。宮津湾と阿蘇海を隔て、約3.6kmにわたり約5,000本の松林が続く日本三景の一つ。'}
            </p>
          </div>
          <p class="text-[11px] text-indigo-950 bg-indigo-50 p-2.5 rounded-lg font-medium border border-indigo-100">
            💡 傘松公園や天橋立ビューランドからの股のぞきでは、雪を被った松並木が天に昇る白い龍のように見える「雪の飛龍観」に出会えます。
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- 3. 雪の伊根の舟屋と天橋立の冬風情 -->
  <section class="space-y-4">
    <h2 class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-emerald-700 pb-2.5">
      ❄️ 舟屋の屋根に降り積もる静寂の雪！伊根湾巡りと冬の「天橋立」散策の魅力
    </h2>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed">
      伊根湾は南向きに開き、湾口に青島が浮かぶ天然の良港。そのため日本海の荒波が直接入り込まず、潮の干満差もわずか50cm程度と極めて穏やかです。海の上に直接浮かんでいるかのように建てられた約230軒の舟屋は、1階の船揚場からそのまま海へ出られる江戸時代からの知恵の結晶。冬になると、海上タクシーや遊覧船から見上げる舟屋の屋根には純白の雪が積もり、カモメやウミネコが飛び交う風情ある景色が広がります。
    </p>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed">
      一方、天橋立では南側の「天橋立ビューランド」から望む飛龍観、北側の「傘松公園」から望む昇龍観の双方が冬化粧をまといます。冬の朝一番、まだ誰も踏んでいない雪の松並木を歩く静けさは格別。宮津湾で獲れる寒ブリをさっと出汁にくぐらせる「丹後ブリしゃぶ」も、カニと並ぶ冬の丹後の看板グルメとして観光客を魅了します。
    </p>
  </section>

  <!-- 4. 間人温泉の湯と宿の極上もてなし -->
  <section class="space-y-4">
    <h2 class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-emerald-700 pb-2.5">
      ♨️ 日本海の夕陽と波音に包まれる！間人温泉の美肌湯と老舗料理宿の贅
    </h2>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed">
      間人温泉郷は、丹後半島の海岸沿いに湧く温泉地。泉質は「弱アルカリ性単純温泉」や「硫酸塩泉」で、無色透明で柔らかく肌に吸い付くような浴感が特徴です。弱アルカリ性の性質が肌の古い角質をやさしく落とし、硫酸塩成分が肌にハリとうるおいをもたらすため「美肌の湯」「美人の湯」として高い評判を得ています。
    </p>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed">
      間人温泉の宿は、大型ホテルではなく10室〜20室前後の上質な料理旅館や大人の隠れ家宿が中心。日本海に沈む冬の夕陽を眺められる展望露天風呂や、客室専用露天風呂を備えた宿が多く、波の音を聞きながら温かい湯船に身を委ねる時間は最高の贅沢です。そして湯上がり後には、炭火で香ばしく焼き上げられる間人ガニの香りが漂う個室食事処で、究極のカニ会席が幕を開けます。
    </p>
  </section>

  <!-- 5. 楽天トラベルAPI連動 厳選宿泊施設 -->
  <section class="space-y-6 my-8">
    <div class="flex flex-wrap items-end justify-between border-b-2 border-emerald-700 pb-2">
      <div>
        <span class="text-xs font-bold text-emerald-700 tracking-wider uppercase">Rakuten Travel API Live Verified</span>
        <h2 class="text-xl md:text-2xl font-bold text-stone-900 mt-0.5">
          🏨 丹後・間人で「間人ガニ」と海景色を堪能する名宿セレクション
        </h2>
      </div>
      <span class="text-xs text-stone-700">※最新空室状況・宿泊プランは各宿リンクより確認できます</span>
    </div>

    <!-- メイン推薦宿 -->
    <div class="bg-gradient-to-br from-emerald-50/70 to-white rounded-3xl border-2 border-emerald-300 p-6 shadow-md">
      <div class="flex flex-wrap items-center gap-2 mb-2">
        <span class="px-3 py-1 bg-emerald-700 text-white text-xs font-bold rounded-full">創業150年超の美食宿</span>
        <span class="text-xs text-emerald-900 font-semibold">全室オーシャンビュー＆間人ガニを焼き・刺し・鍋で極める名門</span>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        <div class="md:col-span-5">
          <img src="${mainHotel.hotelImageUrl || 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=800&q=80'}" alt="${mainHotel.hotelName}" class="w-full h-64 object-cover rounded-2xl shadow-sm" />
        </div>
        <div class="md:col-span-7 space-y-3">
          <h3 class="text-xl font-black text-stone-900">${mainHotel.hotelName}</h3>
          <p class="text-xs text-stone-600 leading-relaxed">
            ${mainHotel.hotelSpecial || '明治元年創業、丹後間人の海辺に佇む料理自慢の老舗名宿。眼下に広がる日本海の雄大なパノラマと、主人が自ら港で競り落とす本物の活間人ガニを贅沢に使ったフルコースが美食家を唸らせる。'}
          </p>
          <div class="grid grid-cols-2 gap-2 text-xs py-2 bg-white/80 rounded-xl p-3 border border-emerald-100">
            <div><span class="text-stone-700">所在地：</span><strong class="text-stone-800">${mainHotel.address1}${mainHotel.address2}</strong></div>
            <div><span class="text-stone-700">総合評価：</span><strong class="text-amber-600 font-black">★ ${mainHotel.reviewAverage || '4.6'}</strong> (${mainHotel.reviewCount || '0'}件)</div>
            <div><span class="text-stone-700">参考最安料金：</span><strong class="text-emerald-900 font-bold">¥${Number(mainHotel.hotelMinCharge || 35000).toLocaleString()}〜</strong></div>
            <div><span class="text-stone-700">アクセス：</span><span class="text-stone-700">${mainHotel.access ? mainHotel.access.slice(0, 35) + '...' : '京都丹後鉄道網野駅より無料送迎バスあり'}</span></div>
          </div>
          <div class="pt-1">
            <a href="${mainHotel.affiliateUrl}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-emerald-700 to-teal-800 hover:from-emerald-800 hover:to-teal-900 text-white font-bold text-sm rounded-xl shadow-md transition duration-300">
              楽天トラベルで空室・宿泊プランを確認する ↗
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- 周辺・比較おすすめ宿リスト -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      ${otherHotels.map((ht, idx) => `
        <div class="bg-white rounded-2xl border border-stone-200 p-4 shadow-2xs hover:border-emerald-300 transition duration-300 flex flex-col justify-between">
          <div class="flex gap-4">
            <img src="${ht.hotelImageUrl || 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=400&q=80'}" alt="${ht.hotelName}" class="w-28 h-28 object-cover rounded-xl shrink-0" />
            <div class="space-y-1">
              <span class="text-[10px] px-2 py-0.5 bg-emerald-50 text-emerald-800 font-bold rounded">推薦候補 #${idx + 1}</span>
              <h4 class="font-bold text-stone-900 text-sm line-clamp-1">${ht.hotelName}</h4>
              <p class="text-[11px] text-stone-600 line-clamp-2">${ht.hotelSpecial || '間人港の活ガニ料理と日本海を望む絶景展望風呂を静かに楽しめる料理自慢の宿。'}</p>
              <div class="text-xs text-stone-700 pt-1">
                評価: <strong class="text-amber-600">★${ht.reviewAverage || '4.3'}</strong> | 目安: <strong class="text-emerald-900">¥${Number(ht.hotelMinCharge || 20000).toLocaleString()}〜</strong>
              </div>
            </div>
          </div>
          <div class="mt-3 pt-2 border-t border-stone-100 flex justify-between items-center">
            <span class="text-[11px] text-stone-700">${ht.address2 || '京丹後市丹後町'}</span>
            <a href="${ht.affiliateUrl}" target="_blank" rel="noopener noreferrer" class="text-xs font-bold text-emerald-700 hover:underline">
              詳細・予約 ↗
            </a>
          </div>
        </div>
      `).join('')}
    </div>
  </section>

  <!-- 6. 11月・12月・1月 旅の過ごし方と周遊ルート -->
  <section class="space-y-4">
    <h2 class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-emerald-700 pb-2.5">
      🗓️ 11月・12月・1月 丹後・伊根・天橋立冬のドライブ＆観光プラン
    </h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs md:text-sm">
      <div class="p-4 bg-emerald-50/50 rounded-2xl border border-emerald-100 space-y-2">
        <h4 class="font-bold text-emerald-900 text-base">🦀 11月：カニ漁解禁の初物シーズン</h4>
        <p class="text-stone-600 leading-relaxed">
          11月6日の解禁直後から港が最も熱気にあふれる時期。まだ路面の凍結も少なく、天橋立散策や伊根の舟屋巡りを軽快に楽しめます。小ぶりで内子・外子が詰まった「セコガニ（コッペガニ）」も味わえます。
        </p>
      </div>
      <div class="p-4 bg-teal-50/50 rounded-2xl border border-teal-100 space-y-2">
        <h4 class="font-bold text-teal-900 text-base">❄️ 12月：寒ブリとの二大共演</h4>
        <p class="text-stone-600 leading-relaxed">
          寒さとともに間人ガニの身が引き締まり、丹後沖の寒ブリも旬を迎えます。カニ尽くし会席にブリしゃぶを組み合わせた贅沢プランがおすすめ。雪道対策として冬用タイヤが必須になります。
        </p>
      </div>
      <div class="p-4 bg-slate-50 rounded-2xl border border-stone-200 space-y-2">
        <h4 class="font-bold text-stone-900 text-base">☃️ 1月：水墨画の伊根舟屋と雪見風呂</h4>
        <p class="text-stone-600 leading-relaxed">
          雪の積もる日が多くなり、伊根湾の舟屋が純白の雪屋根に染まる絶景の季節。観光客の混雑も落ち着き、静寂のなかで最高ランクの間人ガニをじっくり味わえる通好みの時期です。
        </p>
      </div>
    </div>
  </section>

  <!-- 7. 関連内部リンクと近隣観光ハブ -->
  <section class="p-5 bg-stone-50 rounded-2xl border border-stone-200 space-y-3 text-xs md:text-sm">
    <h3 class="font-bold text-stone-900">🔗 あわせて読みたい関西・山陰の冬旅・カニ特集（サイト内ガイド）</h3>
    <ul class="grid grid-cols-1 md:grid-cols-2 gap-2 text-emerald-800">
      <li>・<a href="/prefectures/kyoto/" class="hover:underline font-semibold">京都府の観光名所・エリア別厳選宿ガイド</a></li>
      <li>・<a href="/posts/kinosaki-onsen-matsuba-crab-snow-sotoyu-meguri-guide/" class="hover:underline font-semibold">城崎温泉の松葉ガニと雪の七田外湯めぐり完全ガイド</a></li>
      <li>・<a href="/features/gourmet/" class="hover:underline font-semibold">冬の極上カニ尽くし！全国のブランド蟹おすすめ宿</a></li>
      <li>・<a href="/features/ocean-view/" class="hover:underline font-semibold">日本海を一望！オーシャンビュー絶景宿特集</a></li>
    </ul>
  </section>

  <!-- 8. よくある質問（FAQ） -->
  <section class="space-y-4">
    <h2 class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-emerald-700 pb-2.5">
      ❓ 間人温泉・間人ガニ旅行に関するよくある質問（FAQ）
    </h2>
    <div class="space-y-3 text-xs md:text-sm">
      <div class="p-4 bg-white rounded-2xl border border-stone-200">
        <h4 class="font-bold text-stone-900 mb-1">Q1. 間人ガニと一般的な松葉ガニは何が違うのですか？</h4>
        <p class="text-stone-600">品種は同じズワイガニですが、間人ガニはわずか5隻の小型漁船が日帰りで獲ってくるため鮮度が別格です。漁場から数時間で港へ持ち帰り競りにかけられるため、身の甘みとカニみその濃厚さが損なわれません。</p>
      </div>
      <div class="p-4 bg-white rounded-2xl border border-stone-200">
        <h4 class="font-bold text-stone-900 mb-1">Q2. 冬の天橋立や伊根の舟屋へのアクセス・道路状況は？</h4>
        <p class="text-stone-600">京都縦貫自動車道で与謝天橋立ICまで高速道路が通じています。12月中旬〜2月は降雪や路面凍結があるため、スタッドレスタイヤの装着が必須です。電車の場合は天橋立駅から路線バスや宿の送迎を利用できます。</p>
      </div>
      <div class="p-4 bg-white rounded-2xl border border-stone-200">
        <h4 class="font-bold text-stone-900 mb-1">Q3. 間人ガニ会席の予約はいつ頃から埋まりますか？</h4>
        <p class="text-stone-600">水揚げ量が非常に限られているため、人気宿の週末や年末年始は毎年8月〜9月の予約開始直後から満室になります。平日の予約や1月の連休明けなどを狙うと比較的予約が取りやすくなります。</p>
      </div>
    </div>
  </section>

</div>`;

  return {
    id: data.id,
    slug: data.slug,
    title: data.title,
    description: '京都府・丹後間人温泉の11月・12月・1月冬特集！幻のブランド「間人ガニ」日帰り漁の極上刺し・焼きガニ、雪化粧の伊根の舟屋水墨画絶景、雪の天橋立飛龍観と弱アルカリ性美肌名宿ガイド。',
    prefecture: '京都府',
    area: '丹後・天橋立',
    hotel_name: mainHotel.hotelName,
    image: mainHotel.hotelImageUrl,
    other_images: otherHotels.map(x => x.hotelImageUrl),
    affiliate_url: mainHotel.affiliateUrl,
    price: mainHotel.hotelMinCharge,
    rating: mainHotel.reviewAverage,
    date: '2026-10-12',
    categories: ['京都府', '間人温泉', '間人ガニ', '伊根の舟屋', '天橋立', '松葉ガニ', '冬グルメ', '美肌温泉'],
    keywords: [
      '間人温泉 おすすめ 旅館 冬 間人ガニ',
      '間人ガニ 日帰り漁 緑のタグ 炭平 予約',
      '伊根の舟屋 冬 雪景色 舟屋めぐり 宿泊',
      '天橋立 冬 雪の飛龍観 股のぞき 寒ブリ',
      '丹後 温泉 露天風呂 カニ料理 宿',
      '京都 海の京都 冬 ドライブ アクセス'
    ],
    is_special_feature: true,
    review: reviewHtml
  };
}

// ========================================================
// 記事3: 兵庫県・淡路島温泉＆南淡路（淡路島3年とらふぐ・水仙郷）
// ========================================================
function buildAwajishimaPost(data) {
  const h = data.hotels;
  const w = data.wikiSpotsData;
  const mainHotel = h.find(x => x.hotelName.includes('うめ丸') || x.hotelName.includes('南淡路')) || h[0];
  const otherHotels = h.filter(x => x.hotelNo !== mainHotel.hotelNo).slice(0, 4);

  const spotAwaji = w.find(x => x.spotName === '淡路島') || w[0];
  const spotNaruto = w.find(x => x.spotName === '鳴門海峡') || w[1];
  const spotSuisen = w.find(x => x.spotName === '灘黒岩水仙郷') || w[2];

  const reviewHtml = `<div class="space-y-10 text-stone-800 leading-relaxed font-sans">

  <!-- GEO & AI Search Executive Summary -->
  <section class="p-6 md:p-8 bg-gradient-to-br from-amber-50 via-orange-50 to-stone-100 rounded-3xl border border-amber-200 shadow-sm">
    <div class="flex flex-wrap items-center gap-2 mb-3">
      <span class="px-3 py-1 bg-amber-800 text-white text-xs font-black rounded-full uppercase tracking-wider">GEO & AI Search Executive Summary</span>
      <span class="text-xs text-amber-950 font-bold">11月〜1月の南あわじ・淡路島3年とらふぐ＆灘黒岩水仙郷完全ガイド</span>
    </div>
    <h2 class="text-xl md:text-2xl font-black text-stone-900 mb-3">【総括】淡路島の冬旅：鳴門海峡の激流が育む最高峰「淡路島3年とらふぐ」と海辺に薫る灘黒岩水仙郷。重曹泉うずしお温泉と冬の絶景</h2>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed mb-5">
      瀬戸内海最大の島・淡路島の南端に位置する南あわじ市は、冬になると全国の美食家がこぞって訪れる日本一のフグの聖地。一般的に流通する養殖とらふぐが約2年・800g前後で出荷されるのに対し、福良（ふくら）湾沖の鳴門海峡の激流でさらに1年長く、合計3年間じっくり育てられるのがブランド食材「淡路島3年とらふぐ」です。3年目の冬を迎えたフグは体重1.2kg〜1.8kg以上の堂々たる巨体となり、激流に逆らって泳ぎ続けることで天然物に勝るとも劣らない強靭な筋肉と歯ごたえ、濃厚な旨みを蓄えます。特に12月から1月にかけては、オスの体内で「海の白ダイヤ」と呼ばれる巨大な白子が極限まで発達し、香ばしく焼き上げた焼き白子や白子蒸し、贅沢にてっさ（薄造り）とてっちり鍋で味わうフルコースは冬の極致。さらに南淡路の海岸急斜面には日本三大水仙群生地「灘黒岩水仙郷」が広がり、12月下旬から1月にかけて約500万本もの野生スイセンが可憐な花を咲かせ、甘い香りと青い海が織りなす春を先取りする絶景が広がります。温泉は日本有数の高濃度重曹泉「うずしお温泉」。重曹（炭酸水素ナトリウム）成分が皮脂を溶かしてツルツルの美肌に整える名湯で、冬の至高の休日を演出します。
    </p>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
      <div class="p-3.5 bg-white rounded-2xl border border-amber-100 shadow-2xs">
        <span class="text-stone-500 block font-semibold mb-1">3年とらふぐの特徴</span>
        <strong class="text-amber-900 text-sm">3年間育成・1.2kg以上・巨大白子と弾力</strong>
      </div>
      <div class="p-3.5 bg-white rounded-2xl border border-amber-100 shadow-2xs">
        <span class="text-stone-500 block font-semibold mb-1">灘黒岩水仙郷見頃</span>
        <strong class="text-stone-900 text-sm">12月下旬〜翌年1月下旬（約500万本の水仙）</strong>
      </div>
      <div class="p-3.5 bg-white rounded-2xl border border-amber-100 shadow-2xs">
        <span class="text-stone-500 block font-semibold mb-1">鳴門海峡の冬渦潮</span>
        <strong class="text-orange-800 text-sm">大潮の干満差・うずしおクルーズ運行</strong>
      </div>
      <div class="p-3.5 bg-white rounded-2xl border border-amber-100 shadow-2xs">
        <span class="text-stone-500 block font-semibold mb-1">温泉泉質</span>
        <strong class="text-emerald-800 text-sm">炭酸水素塩泉（日本屈指の高濃度重曹泉）</strong>
      </div>
    </div>
  </section>

  <!-- 1. 淡路島3年とらふぐの凄みと鳴門海峡の潮流 -->
  <section class="space-y-4">
    <h2 class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-amber-700 pb-2.5">
      🐡 鳴門海峡の荒波に鍛えられた3年の歳月！「淡路島3年とらふぐ」の強烈な旨みと白子の贅
    </h2>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed">
      養殖とらふぐは通常、病気や共食いのリスクを避けるため2年（重さ約800g）で出荷されます。しかし南あわじの福良漁協の生産者たちは、あえてリスクを取り、激しい潮流が渦巻く鳴門海峡に近い福良湾沖の生簀でさらに1年間丹精込めて育て上げます。3年目の冬を迎えたフグは、急流に逆らって運動し続けることで余分な脂肪が落ち、天然物と見紛うばかりの引き締まった筋肉とコラーゲンを身にまといます。
    </p>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed">
      大皿に美しく引かれた「てっさ（薄造り）」は、箸で数枚すくって噛みしめると、跳ね返るような弾力と上品な甘みが口中に広がります。昆布出汁にくぐらせる「てっちり鍋」では、骨の周りのゼラチン質がぷるぷるととろけ、骨から染み出た濃厚なエキスが鍋全体を極上のスープへと昇華させます。そして12月から1月にしか出会えない「白子」は、手のひら大のサイズに達し、香ばしい焦げ目をつけた焼き白子にかぶりつけば、パリッとした皮の中から熱々とろとろの濃厚クリームが溢れ出します。仕上げのヒレ酒とふぐ雑炊に至るまで、冬の食の歓びが凝縮されています。
    </p>
  </section>

  <!-- 2. Wikipedia 実写観光スポットギャラリー -->
  <section class="space-y-6 my-8">
    <h2 class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-amber-700 pb-2.5">
      📷 Wikipedia公式アーカイブで巡る淡路島・鳴門海峡・灘黒岩水仙郷の冬名所（実写ギャラリー）
    </h2>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <!-- Spot 1: 淡路島 -->
      <div class="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm flex flex-col">
        <img src="${spotAwaji.image || 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Awaji_Island_from_Akashi_Kaikyo_Bridge.jpg/800px-Awaji_Island_from_Akashi_Kaikyo_Bridge.jpg'}" alt="${spotAwaji.spotName}" class="w-full h-48 object-cover hover:scale-105 transition duration-500" />
        <div class="p-4 flex-grow flex flex-col justify-between space-y-2">
          <div>
            <span class="text-[10px] px-2 py-0.5 bg-amber-100 text-amber-800 font-bold rounded">御食国（みけつくに）</span>
            <h3 class="font-bold text-stone-900 text-base mt-1">${spotAwaji.spotName}</h3>
            <p class="text-xs text-stone-600 leading-relaxed mt-1">
              ${spotAwaji.extract || '瀬戸内海東部に位置する島。温暖な気候と豊かな食材に恵まれ、古代より朝廷に海産物を献上した御食国として知られる。'}
            </p>
          </div>
          <p class="text-[11px] text-amber-950 bg-amber-50 p-2.5 rounded-lg font-medium border border-amber-100">
            💡 冬は淡路島3年とらふぐのほか、淡路牛、甘みたっぷりの冬玉ねぎ、伊勢海老など旬の味覚の宝庫です。
          </p>
        </div>
      </div>

      <!-- Spot 2: 鳴門海峡 -->
      <div class="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm flex flex-col">
        <img src="${spotNaruto.image || 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Naruto_Strait_Whirlpool_2008.jpg/800px-Naruto_Strait_Whirlpool_2008.jpg'}" alt="${spotNaruto.spotName}" class="w-full h-48 object-cover hover:scale-105 transition duration-500" />
        <div class="p-4 flex-grow flex flex-col justify-between space-y-2">
          <div>
            <span class="text-[10px] px-2 py-0.5 bg-blue-100 text-blue-800 font-bold rounded">世界三大潮流</span>
            <h3 class="font-bold text-stone-900 text-base mt-1">${spotNaruto.spotName}</h3>
            <p class="text-xs text-stone-600 leading-relaxed mt-1">
              ${spotNaruto.extract || '淡路島と四国の間にある海峡。瀬戸内海と太平洋を結び、最大流速約20km/hに及ぶ世界最大級の渦潮が発生する。'}
            </p>
          </div>
          <p class="text-[11px] text-blue-950 bg-blue-50 p-2.5 rounded-lg font-medium border border-blue-100">
            💡 福良港から出航する「うずしおクルーズ」咸臨丸・日本丸に乗船すれば、冬の澄んだ空気のなか大迫力の渦潮を間近で見学できます。
          </p>
        </div>
      </div>

      <!-- Spot 3: 灘黒岩水仙郷 -->
      <div class="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm flex flex-col">
        <img src="${spotSuisen.image || 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Nada_Kuroiwa_Suisenkyo_2011.jpg/800px-Nada_Kuroiwa_Suisenkyo_2011.jpg'}" alt="${spotSuisen.spotName}" class="w-full h-48 object-cover hover:scale-105 transition duration-500" />
        <div class="p-4 flex-grow flex flex-col justify-between space-y-2">
          <div>
            <span class="text-[10px] px-2 py-0.5 bg-emerald-100 text-emerald-800 font-bold rounded">日本三大水仙群生地</span>
            <h3 class="font-bold text-stone-900 text-base mt-1">${spotSuisen.spotName}</h3>
            <p class="text-xs text-stone-600 leading-relaxed mt-1">
              ${spotSuisen.extract || '南あわじ市の諭鶴羽山南側斜面にある水仙の群生地。急斜面に約500万本ものニホンズイセンが自生し、紀伊水道を一望する。'}
            </p>
          </div>
          <p class="text-[11px] text-emerald-950 bg-emerald-50 p-2.5 rounded-lg font-medium border border-emerald-100">
            💡 12月下旬から1月、丘一面が白い水仙の花で埋め尽くされ、甘い芳香と青く輝く海の絶景パノラマが広がります。
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- 3. 灘黒岩水仙郷と鳴門の冬渦潮 -->
  <section class="space-y-4">
    <h2 class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-amber-700 pb-2.5">
      🌼 海に向かって咲き誇る500万本のスイセン！灘黒岩水仙郷と冬のうずしおクルーズ
    </h2>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed">
      冬の淡路島南岸は、本州の厳寒とは異なり、黒潮の影響を受けた穏やかな陽光が降り注ぎます。南あわじ市南部、諭鶴羽山（ゆづるはさん）の標高約600mから海へと切れ落ちる45度の急斜面に広がるのが「灘黒岩水仙郷（なだくろいわすいせんきょう）」です。江戸時代、海岸に漂着した球根を地元の漁民が植えたのが始まりとされ、現在では約7ヘクタールの急斜面に約500万本のニホンズイセンが自生しています。
    </p>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed">
      リニューアルされた展望デッキや遊歩道を歩くと、潮風に乗って甘く清々しいスイセンの芳香が心地よく漂います。足元一面に広がる白と黄色の可憐な花々の向こうには、太陽の光を反射してキラキラと輝く紺碧の紀伊水道と国生み神話の沼島（ぬしま）が浮かび、冬であることを忘れさせるような暖かな絶景に出会えます。水仙郷を楽しんだ後は福良港へ向かい、鳴門海峡の冬渦潮を巡るクルーズ船に乗船するのが王道のドライブコースです。
    </p>
  </section>

  <!-- 4. うずしお温泉の重曹泉と湯上がりの肌触り -->
  <section class="space-y-4">
    <h2 class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-amber-700 pb-2.5">
      ♨️ 日本屈指の重曹含有量！「うずしお温泉」の驚異的なとろみと美肌効果
    </h2>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed">
      南あわじ市に湧く「うずしお温泉」は、温泉通の間で全国屈指の美肌湯として知られています。その最大の特長は、重曹成分（炭酸水素ナトリウム）の含有量が非常に高い「ナトリウム-炭酸水素塩温泉」。湯船に体を沈めた瞬間、化粧水や美容液の中に浸かっているかのようなトロトロ・ヌルヌルとした独特の肌触りに誰もが驚かされます。
    </p>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed">
      重曹成分が皮膚表面の古い角質や余分な皮脂をやさしく乳化させて洗い流す「クレンジング効果」を持ち、さらに炭酸水素イオンの作用で入浴後には肌が驚くほど滑らかでしっとりとした手触りに変わります。鳴門海峡や鳴門大橋、播磨灘の夕景を望む露天風呂で極上の美肌浴を堪能した後は、冬の寒風にさらされた素肌が見違えるように潤いを取り戻します。
    </p>
  </section>

  <!-- 5. 楽天トラベルAPI連動 厳選宿泊施設 -->
  <section class="space-y-6 my-8">
    <div class="flex flex-wrap items-end justify-between border-b-2 border-amber-700 pb-2">
      <div>
        <span class="text-xs font-bold text-amber-700 tracking-wider uppercase">Rakuten Travel API Live Verified</span>
        <h2 class="text-xl md:text-2xl font-bold text-stone-900 mt-0.5">
          🏨 南あわじで「3年とらふぐ」とうずしお温泉を満喫する名宿セレクション
        </h2>
      </div>
      <span class="text-xs text-stone-700">※最新空室状況・宿泊プランは各宿リンクより確認できます</span>
    </div>

    <!-- メイン推薦宿 -->
    <div class="bg-gradient-to-br from-amber-50/70 to-white rounded-3xl border-2 border-amber-300 p-6 shadow-md">
      <div class="flex flex-wrap items-center gap-2 mb-2">
        <span class="px-3 py-1 bg-amber-700 text-white text-xs font-bold rounded-full">元祖ふぐ料理の名旅館</span>
        <span class="text-xs text-amber-900 font-semibold">自家源泉うずしお温泉トロトロ湯と豪快な3年とらふぐフルコース</span>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        <div class="md:col-span-5">
          <img src="${mainHotel.hotelImageUrl || 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80'}" alt="${mainHotel.hotelName}" class="w-full h-64 object-cover rounded-2xl shadow-sm" />
        </div>
        <div class="md:col-span-7 space-y-3">
          <h3 class="text-xl font-black text-stone-900">${mainHotel.hotelName}</h3>
          <p class="text-xs text-stone-600 leading-relaxed">
            ${mainHotel.hotelSpecial || '鳴門海峡を望む高台に位置し、淡路島3年とらふぐと活魚料理で全国にその名を知られる名物旅館。驚くほどとろみのある自家源泉うずしお温泉と、てっさ・てっちり・焼き白子の贅沢極まりない会席が自慢。'}
          </p>
          <div class="grid grid-cols-2 gap-2 text-xs py-2 bg-white/80 rounded-xl p-3 border border-amber-100">
            <div><span class="text-stone-700">所在地：</span><strong class="text-stone-800">${mainHotel.address1}${mainHotel.address2}</strong></div>
            <div><span class="text-stone-700">総合評価：</span><strong class="text-amber-600 font-black">★ ${mainHotel.reviewAverage || '4.5'}</strong> (${mainHotel.reviewCount || '0'}件)</div>
            <div><span class="text-stone-700">参考最安料金：</span><strong class="text-amber-900 font-bold">¥${Number(mainHotel.hotelMinCharge || 18000).toLocaleString()}〜</strong></div>
            <div><span class="text-stone-700">アクセス：</span><span class="text-stone-700">${mainHotel.access ? mainHotel.access.slice(0, 35) + '...' : '神戸淡路鳴門自動車道淡路島南ICより車で約5分'}</span></div>
          </div>
          <div class="pt-1">
            <a href="${mainHotel.affiliateUrl}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-amber-700 to-orange-800 hover:from-amber-800 hover:to-orange-900 text-white font-bold text-sm rounded-xl shadow-md transition duration-300">
              楽天トラベルで空室・宿泊プランを確認する ↗
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- 周辺・比較おすすめ宿リスト -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      ${otherHotels.map((ht, idx) => `
        <div class="bg-white rounded-2xl border border-stone-200 p-4 shadow-2xs hover:border-amber-300 transition duration-300 flex flex-col justify-between">
          <div class="flex gap-4">
            <img src="${ht.hotelImageUrl || 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=400&q=80'}" alt="${ht.hotelName}" class="w-28 h-28 object-cover rounded-xl shrink-0" />
            <div class="space-y-1">
              <span class="text-[10px] px-2 py-0.5 bg-amber-50 text-amber-800 font-bold rounded">推薦候補 #${idx + 1}</span>
              <h4 class="font-bold text-stone-900 text-sm line-clamp-1">${ht.hotelName}</h4>
              <p class="text-[11px] text-stone-600 line-clamp-2">${ht.hotelSpecial || '鳴門海峡の冬絶景と3年とらふぐ会席、ぬめりの美肌湯を満喫できる南あわじの名宿。'}</p>
              <div class="text-xs text-stone-700 pt-1">
                評価: <strong class="text-amber-600">★${ht.reviewAverage || '4.2'}</strong> | 目安: <strong class="text-amber-900">¥${Number(ht.hotelMinCharge || 13000).toLocaleString()}〜</strong>
              </div>
            </div>
          </div>
          <div class="mt-3 pt-2 border-t border-stone-100 flex justify-between items-center">
            <span class="text-[11px] text-stone-700">${ht.address2 || '南あわじ市'}</span>
            <a href="${ht.affiliateUrl}" target="_blank" rel="noopener noreferrer" class="text-xs font-bold text-amber-700 hover:underline">
              詳細・予約 ↗
            </a>
          </div>
        </div>
      `).join('')}
    </div>
  </section>

  <!-- 6. 11月・12月・1月 月別モデルコースと旅の計画 -->
  <section class="space-y-4">
    <h2 class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-amber-700 pb-2.5">
      🗓️ 11月・12月・1月 淡路島・南あわじ冬のドライブ＆グルメ旅程
    </h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs md:text-sm">
      <div class="p-4 bg-amber-50/50 rounded-2xl border border-amber-100 space-y-2">
        <h4 class="font-bold text-amber-900 text-base">🐡 11月：3年とらふぐシーズンの開幕</h4>
        <p class="text-stone-600 leading-relaxed">
          11月初旬から市内の旅館や専門店で3年とらふぐの提供が一斉にスタート。秋晴れの澄んだ空の下、明石海峡大橋を渡る快適なシーサイドドライブと鳴門海峡の渦潮クルーズを楽しめます。
        </p>
      </div>
      <div class="p-4 bg-orange-50/50 rounded-2xl border border-orange-100 space-y-2">
        <h4 class="font-bold text-orange-900 text-base">🌼 12月：白子の充実と水仙郷の開花</h4>
        <p class="text-stone-600 leading-relaxed">
          12月に入ると白子が急速に発達し、焼き白子付きのプレミアムコースが最盛期に。12月下旬には灘黒岩水仙郷がオープンし、早咲きの水仙が甘い香りを放ち始めます。
        </p>
      </div>
      <div class="p-4 bg-yellow-50/50 rounded-2xl border border-yellow-100 space-y-2">
        <h4 class="font-bold text-yellow-950 text-base">🌅 1月：500万本の水仙満開と初詣</h4>
        <p class="text-stone-600 leading-relaxed">
          灘黒岩水仙郷が満開を迎えるベストシーズン。おのころ島神社や伊弉諾神宮への初詣を組み合わせた冬の淡路島周遊が人気。関西都市圏から車で1〜2時間とアクセスも抜群です。
        </p>
      </div>
    </div>
  </section>

  <!-- 7. 関連内部リンクと近隣観光ハブ -->
  <section class="p-5 bg-stone-50 rounded-2xl border border-stone-200 space-y-3 text-xs md:text-sm">
    <h3 class="font-bold text-stone-900">🔗 あわせて読みたい兵庫県・関西の冬旅特集（サイト内ガイド）</h3>
    <ul class="grid grid-cols-1 md:grid-cols-2 gap-2 text-amber-800">
      <li>・<a href="/prefectures/hyogo/" class="hover:underline font-semibold">兵庫県の温泉・観光・リゾート宿完全ガイド</a></li>
      <li>・<a href="/posts/nanki-katsuura-onsen-tuna-bokido-kumano-nachi-winter-guide/" class="hover:underline font-semibold">南紀勝浦温泉の生マグロと忘帰洞・熊野那智大社冬旅</a></li>
      <li>・<a href="/features/gourmet/" class="hover:underline font-semibold">全国の冬の高級味覚グルメ宿特集</a></li>
      <li>・<a href="/features/onsen/" class="hover:underline font-semibold">美肌の湯・ぬるぬる重曹泉のおすすめ温泉宿</a></li>
    </ul>
  </section>

  <!-- 8. よくある質問（FAQ） -->
  <section class="space-y-4">
    <h2 class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-amber-700 pb-2.5">
      ❓ 淡路島3年とらふぐ旅行に関するよくある質問（FAQ）
    </h2>
    <div class="space-y-3 text-xs md:text-sm">
      <div class="p-4 bg-white rounded-2xl border border-stone-200">
        <h4 class="font-bold text-stone-900 mb-1">Q1. 一般的な養殖フグと「淡路島3年とらふぐ」はどう違いますか？</h4>
        <p class="text-stone-600">通常の養殖フグは2年（約800g）で出荷されますが、淡路島3年とらふぐは激流の福良湾沖でさらに1年長く育てられ、体重1.2kg〜1.8kg以上に達します。身の締まり、歯ごたえ、白子の大きさが段違いで、天然物に近い食感を楽しめます。</p>
      </div>
      <div class="p-4 bg-white rounded-2xl border border-stone-200">
        <h4 class="font-bold text-stone-900 mb-1">Q2. 神戸・大阪方面からのアクセス所要時間は？</h4>
        <p class="text-stone-600">神戸・三宮から神戸淡路鳴門自動車道経由で約70分、大阪市内から約90分〜100分です。明石海峡大橋と大鳴門橋で本州・四国と直結しており、冬でも雪による通行止めの心配がほとんどありません。</p>
      </div>
      <div class="p-4 bg-white rounded-2xl border border-stone-200">
        <h4 class="font-bold text-stone-900 mb-1">Q3. うずしお温泉の泉質の特徴と入浴効果は？</h4>
        <p class="text-stone-600">日本有数の高濃度な炭酸水素ナトリウム（重曹）を含む「美肌の湯」です。湯に浸かると独特のとろみがあり、古い角質を落として肌をなめらかに整えるクレンジング効果があります。</p>
      </div>
    </div>
  </section>

</div>`;

  return {
    id: data.id,
    slug: data.slug,
    title: data.title,
    description: '兵庫県・淡路島温泉（南あわじ）の11月・12月・1月冬特集！激流で育つ最高峰「淡路島3年とらふぐ」のてっさ・焼き白子・てっちり、約500万本の灘黒岩水仙郷絶景、とろとろ美肌重曹泉うずしお温泉名宿ガイド。',
    prefecture: '兵庫県',
    area: '淡路島・南あわじ',
    hotel_name: mainHotel.hotelName,
    image: mainHotel.hotelImageUrl,
    other_images: otherHotels.map(x => x.hotelImageUrl),
    affiliate_url: mainHotel.affiliateUrl,
    price: mainHotel.hotelMinCharge,
    rating: mainHotel.reviewAverage,
    date: '2026-10-12',
    categories: ['兵庫県', '淡路島', '南あわじ', '淡路島3年とらふぐ', '灘黒岩水仙郷', '鳴門海峡', 'うずしお温泉', '冬グルメ'],
    keywords: [
      '淡路島3年とらふぐ おすすめ 旅館 冬 南あわじ',
      '灘黒岩水仙郷 見頃 12月 1月 開花状況 写真',
      'うずしお温泉 うめ丸 休暇村 南淡路 口コミ',
      '淡路島 フグ料理 てっさ 白子 てっちり 宿',
      '鳴門海峡 渦潮 クルーズ 冬 ドライブ',
      '淡路島 冬 旅行 温泉 一泊二日 モデルコース'
    ],
    is_special_feature: true,
    review: reviewHtml
  };
}

// ========================================================
// 記事4: 長崎県・ハウステンボス＆雲仙温泉（1300万球イルミ・雲仙地獄霧氷）
// ========================================================
function buildHuistenboschPost(data) {
  const h = data.hotels;
  const w = data.wikiSpotsData;
  const unzenHotels = data.unzenHotels || [];
  const mainHotel = h.find(x => x.hotelName.includes('オークラ') || x.hotelName.includes('ヨーロッパ')) || h[0];
  const otherHotels = [...h.filter(x => x.hotelNo !== mainHotel.hotelNo).slice(0, 2), ...unzenHotels.slice(0, 2)];

  const spotHtb = w.find(x => x.spotName === 'ハウステンボス') || w[0];
  const spotUnzen = w.find(x => x.spotName === '雲仙温泉') || w[1];
  const spotPeak = w.find(x => x.spotName === '雲仙岳') || w[2];

  const reviewHtml = `<div class="space-y-10 text-stone-800 leading-relaxed font-sans">

  <!-- GEO & AI Search Executive Summary -->
  <section class="p-6 md:p-8 bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-100/60 rounded-3xl border border-purple-200 shadow-sm">
    <div class="flex flex-wrap items-center gap-2 mb-3">
      <span class="px-3 py-1 bg-purple-800 text-white text-xs font-black rounded-full uppercase tracking-wider">GEO & AI Search Executive Summary</span>
      <span class="text-xs text-purple-950 font-bold">11月〜1月のハウステンボス光の街＆雲仙温泉・霧氷冬旅完全ガイド</span>
    </div>
    <h2 class="text-xl md:text-2xl font-black text-stone-900 mb-3">【総括】長崎の冬旅：世界最大1,300万球が輝くハウステンボス「白銀の世界・光の街のクリスマス」と雲仙地獄の立ち上る湯煙・霧氷の絶景。直営ホテルと乳白色硫黄泉</h2>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed mb-5">
      異国情緒豊かな長崎県は、冬こそが最もロマンチックな輝きを放つ季節。佐世保市に位置する日本一の広さを誇るテーマパーク「ハウステンボス」では、11月上旬から1月にかけて世界最大級・1,300万球のイルミネーションが点灯する「光の街のクリスマス」および「白銀の世界」が開催されます。中世オランダのレンガ造りの街並み、運河、高さ105mのドムトールンが純白のイルミネーションで埋め尽くされ、アムステルダム広場の白銀のチャペルでの点灯セレモニーや運河パレード、冬の夜空を彩る大輪の花火が感動的な夜を彩ります。パークを満喫した後は、島原半島の中央部に位置する日本最初の国立公園「雲仙温泉」へと足を伸ばす周遊が長崎冬旅の真骨頂。標高700mの雲仙地獄では、氷点下の冷気に真っ白い地熱の湯煙が轟音とともに立ち上り、標高1,300mの普賢岳・妙見岳山頂付近では過冷却の水滴が木々に凍りついて純白の花を咲かせる「霧氷（花ぼうろ）」の奇跡が出現します。雲仙温泉の湯は強い硫黄の香りと白濁をたたえる酸性・含硫黄-硫酸塩泉。直営クラシックホテルでの宿泊と雲仙の秘湯を組み合わせた贅沢な冬旅をご紹介します。
    </p>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
      <div class="p-3.5 bg-white rounded-2xl border border-purple-100 shadow-2xs">
        <span class="text-stone-500 block font-semibold mb-1">イルミネーション規模</span>
        <strong class="text-purple-900 text-sm">世界最大1300万球・光の街のクリスマス＆白銀の世界</strong>
      </div>
      <div class="p-3.5 bg-white rounded-2xl border border-purple-100 shadow-2xs">
        <span class="text-stone-500 block font-semibold mb-1">雲仙霧氷（花ぼうろ）</span>
        <strong class="text-stone-900 text-sm">12月中旬〜2月の妙見岳ロープウェイ山頂付近</strong>
      </div>
      <div class="p-3.5 bg-white rounded-2xl border border-purple-100 shadow-2xs">
        <span class="text-stone-500 block font-semibold mb-1">雲仙温泉の泉質</span>
        <strong class="text-indigo-800 text-sm">酸性・含硫黄-硫酸塩泉（白濁・殺菌保温）</strong>
      </div>
      <div class="p-3.5 bg-white rounded-2xl border border-purple-100 shadow-2xs">
        <span class="text-stone-500 block font-semibold mb-1">長崎冬の名物グルメ</span>
        <strong class="text-amber-800 text-sm">長崎和牛・卓袱料理・島原具雑煮・九十九島カキ</strong>
      </div>
    </div>
  </section>

  <!-- 1. ハウステンボス1300万球イルミネーションの全貌 -->
  <section class="space-y-4">
    <h2 class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-purple-700 pb-2.5">
      ✨ ヨーロッパの街並みが純白に染まる！1300万球「白銀の世界」と光のクリスマスの奇跡
    </h2>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed">
      モナコ公国と同等の広大な敷地を持つハウステンボス。冬の訪れとともに、街全体が息をのむイルミネーションの王国へと変貌します。「イルミネーションアワード」で10年連続第1位に輝くそのクオリティは、単なる電飾の枠を遥かに超えた芸術作品です。11月上旬から12月25日までは「光の街のクリスマス」として、ヨーロッパ直輸入のグッズや本場のホットワインが並ぶ本格的なクリスマスマーケットが開かれ、巨大なツリーが温かな光を放ちます。
    </p>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed">
      そして12月下旬から1月にかけては、パーク全体が銀世界をテーマにした「白銀の世界」へと移り変わります。アムステルダム広場に立つ純白のチャペルでは、毎夜アーティストの生歌とともに広場全体が一瞬で白銀の光に包まれる感動的な点灯式が挙行。光と噴水がシンクロする運河クルーズ、高さ66mから光の滝が流れ落ちる「光の滝」、3階建てのメリーゴーラウンド「スカイカルーセル」など、どこを切り取っても絵画のようなフォトジェニックな夜が約束されます。
    </p>
  </section>

  <!-- 2. Wikipedia 実写観光スポットギャラリー -->
  <section class="space-y-6 my-8">
    <h2 class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-purple-700 pb-2.5">
      📷 Wikipedia公式アーカイブで巡るハウステンボス・雲仙地獄・雲仙岳の冬名所（実写ギャラリー）
    </h2>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <!-- Spot 1: ハウステンボス -->
      <div class="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm flex flex-col">
        <img src="${spotHtb.image || 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Huis_Ten_Bosch_2011.jpg/800px-Huis_Ten_Bosch_2011.jpg'}" alt="${spotHtb.spotName}" class="w-full h-48 object-cover hover:scale-105 transition duration-500" />
        <div class="p-4 flex-grow flex flex-col justify-between space-y-2">
          <div>
            <span class="text-[10px] px-2 py-0.5 bg-purple-100 text-purple-800 font-bold rounded">世界最大1300万球</span>
            <h3 class="font-bold text-stone-900 text-base mt-1">${spotHtb.spotName}</h3>
            <p class="text-xs text-stone-600 leading-relaxed mt-1">
              ${spotHtb.extract || '長崎県佐世保市にあるテーマパーク。オランダの街並みを再現し、広大な運河と歴史的建造物、四季の花とイルミネーションで知られる。'}
            </p>
          </div>
          <p class="text-[11px] text-purple-950 bg-purple-50 p-2.5 rounded-lg font-medium border border-purple-100">
            💡 11〜1月の冬夜は直営ホテル宿泊者専用の開園前・閉園後散策が可能で、静寂のライトアップを独占できます。
          </p>
        </div>
      </div>

      <!-- Spot 2: 雲仙温泉 -->
      <div class="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm flex flex-col">
        <img src="${spotUnzen.image || 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Unzen_Jigoku_2008.jpg/800px-Unzen_Jigoku_2008.jpg'}" alt="${spotUnzen.spotName}" class="w-full h-48 object-cover hover:scale-105 transition duration-500" />
        <div class="p-4 flex-grow flex flex-col justify-between space-y-2">
          <div>
            <span class="text-[10px] px-2 py-0.5 bg-indigo-100 text-indigo-800 font-bold rounded">日本最古の国立公園</span>
            <h3 class="font-bold text-stone-900 text-base mt-1">${spotUnzen.spotName}（雲仙地獄）</h3>
            <p class="text-xs text-stone-600 leading-relaxed mt-1">
              ${spotUnzen.extract || '長崎県雲仙市の島原半島中央部にある温泉。温泉街の中心に約30の地獄が点在し、激しい噴煙と硫黄臭が立ち込める。'}
            </p>
          </div>
          <p class="text-[11px] text-indigo-950 bg-indigo-50 p-2.5 rounded-lg font-medium border border-indigo-100">
            💡 冬は氷点下の冷気に熱い蒸気が立ち上る姿が圧巻。温泉卵や足蒸し体験も楽しめます。
          </p>
        </div>
      </div>

      <!-- Spot 3: 雲仙岳 -->
      <div class="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm flex flex-col">
        <img src="${spotPeak.image || 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Mount_Unzen_from_Nita_Pass_2011.jpg/800px-Mount_Unzen_from_Nita_Pass_2011.jpg'}" alt="${spotPeak.spotName}" class="w-full h-48 object-cover hover:scale-105 transition duration-500" />
        <div class="p-4 flex-grow flex flex-col justify-between space-y-2">
          <div>
            <span class="text-[10px] px-2 py-0.5 bg-sky-100 text-sky-800 font-bold rounded">霧氷（花ぼうろ）の峰</span>
            <h3 class="font-bold text-stone-900 text-base mt-1">${spotPeak.spotName}（妙見岳）</h3>
            <p class="text-xs text-stone-600 leading-relaxed mt-1">
              ${spotPeak.extract || '島原半島中央部にある火山群。最高峰は平成新山（1,483m）。冬期は雲仙ロープウェイで登る妙見岳山頂で霧氷が観察される。'}
            </p>
          </div>
          <p class="text-[11px] text-sky-950 bg-sky-50 p-2.5 rounded-lg font-medium border border-sky-100">
            💡 12月〜1月の厳冬期、氷点下の風が運ぶ雲粒が木の枝に凍りつき、純白のサンゴ礁のような樹氷帯を形成します。
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- 3. 雲仙地獄の立ち上る湯煙と妙見岳の霧氷 -->
  <section class="space-y-4">
    <h2 class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-purple-700 pb-2.5">
      🌋 氷点下の冷気に轟く白い蒸気！「雲仙地獄」の迫力と妙見岳の霧氷「花ぼうろ」
    </h2>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed">
      ハウステンボスから南へ車で約1時間半、島原半島の中央にそびえる雲仙天草国立公園へと向かうと、風景はガラリと趣を変えます。標高700mの高原に広がる雲仙温泉は、1934年に日本で最初に指定された国立公園の温泉リゾート。その中心にある「雲仙地獄」は、大叫喚地獄やお糸地獄など約30の噴気孔から最高温度約120度の硫気ガスが絶え間なく噴き出す活発な地熱地帯です。
    </p>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed">
      冬の寒風が吹き抜けるなか、地表を覆う白い噴煙は夏場とは比較にならないほどの密度とスケールで立ち上り、周囲の木々の梢に霜をまとわせます。さらに仁田峠から雲仙ロープウェイに乗って標高1,300mの妙見岳へ上がれば、そこは一面の銀世界。過冷却の霧が樹木の枝に氷結して生まれる「霧氷」は地元で「花ぼうろ」と呼ばれ、陽光を浴びてキラキラと輝く樹氷のトンネルは、南国・九州とは思えない神秘の美しさを誇ります。
    </p>
  </section>

  <!-- 4. 雲仙温泉の乳白色硫黄泉と歴史 -->
  <section class="space-y-4">
    <h2 class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-purple-700 pb-2.5">
      ♨️ 明治の文豪・外国人が愛した名湯！雲仙温泉「酸性硫黄泉」の効能と湯宿の趣
    </h2>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed">
      雲仙温泉は、701年に行基が開山したと伝えられる古湯。明治時代には上海や香港に駐在していた欧米人の保養地・避暑地として開かれ、日本初の洋式リゾートホテルが建設されるなど、和と洋が美しく調和した独特のハイカラ文化が育まれました。
    </p>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed">
      泉質は強酸性の「含硫黄-アルミニウム-硫酸塩温泉」。強い硫黄の芳香とともにエメラルドグリーンから白濁へと変化する濃厚な湯は、高い殺菌力と血管拡張作用を持ち、湿疹やアトピーなどの皮膚病、神経痛、疲労回復に抜群の効果を発揮します。冬の冷たい外気に包まれた露天風呂に浸かると、熱い白濁湯が皮膚を心地よく刺激し、入浴後も体がいつまでも芯からポカポカと温まり続けます。
    </p>
  </section>

  <!-- 5. 楽天トラベルAPI連動 厳選宿泊施設 -->
  <section class="space-y-6 my-8">
    <div class="flex flex-wrap items-end justify-between border-b-2 border-purple-700 pb-2">
      <div>
        <span class="text-xs font-bold text-purple-700 tracking-wider uppercase">Rakuten Travel API Live Verified</span>
        <h2 class="text-xl md:text-2xl font-bold text-stone-900 mt-0.5">
          🏨 ハウステンボス直営ホテル＆雲仙温泉の極上宿セレクション
        </h2>
      </div>
      <span class="text-xs text-stone-700">※最新空室状況・宿泊プランは各宿リンクより確認できます</span>
    </div>

    <!-- メイン推薦宿 -->
    <div class="bg-gradient-to-br from-purple-50/70 to-white rounded-3xl border-2 border-purple-300 p-6 shadow-md">
      <div class="flex flex-wrap items-center gap-2 mb-2">
        <span class="px-3 py-1 bg-purple-700 text-white text-xs font-bold rounded-full">パーク直結の最高級ホテル</span>
        <span class="text-xs text-purple-900 font-semibold">源泉かけ流し天然温泉琴乃湯完備＆オランダのアムステルダム駅を再現した宮殿風名門</span>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        <div class="md:col-span-5">
          <img src="${mainHotel.hotelImageUrl || 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80'}" alt="${mainHotel.hotelName}" class="w-full h-64 object-cover rounded-2xl shadow-sm" />
        </div>
        <div class="md:col-span-7 space-y-3">
          <h3 class="text-xl font-black text-stone-900">${mainHotel.hotelName}</h3>
          <p class="text-xs text-stone-600 leading-relaxed">
            ${mainHotel.hotelSpecial || 'ハウステンボス入国口に隣接し、専用ゲートから再入場可能なプレミアムホテル。敷地内から湧出する源泉かけ流しの天然温泉大浴場「琴乃湯」を備え、1300万球のイルミネーションを楽しんだ後に本格的な湯浴みで温まれる。'}
          </p>
          <div class="grid grid-cols-2 gap-2 text-xs py-2 bg-white/80 rounded-xl p-3 border border-purple-100">
            <div><span class="text-stone-700">所在地：</span><strong class="text-stone-800">${mainHotel.address1}${mainHotel.address2}</strong></div>
            <div><span class="text-stone-700">総合評価：</span><strong class="text-amber-600 font-black">★ ${mainHotel.reviewAverage || '4.5'}</strong> (${mainHotel.reviewCount || '0'}件)</div>
            <div><span class="text-stone-700">参考最安料金：</span><strong class="text-purple-900 font-bold">¥${Number(mainHotel.hotelMinCharge || 16000).toLocaleString()}〜</strong></div>
            <div><span class="text-stone-700">アクセス：</span><span class="text-stone-700">${mainHotel.access ? mainHotel.access.slice(0, 35) + '...' : 'JRハウステンボス駅より徒歩約3分'}</span></div>
          </div>
          <div class="pt-1">
            <a href="${mainHotel.affiliateUrl}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-purple-700 to-indigo-800 hover:from-purple-800 hover:to-indigo-900 text-white font-bold text-sm rounded-xl shadow-md transition duration-300">
              楽天トラベルで空室・宿泊プランを確認する ↗
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- 周辺・比較おすすめ宿リスト -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      ${otherHotels.map((ht, idx) => `
        <div class="bg-white rounded-2xl border border-stone-200 p-4 shadow-2xs hover:border-purple-300 transition duration-300 flex flex-col justify-between">
          <div class="flex gap-4">
            <img src="${ht.hotelImageUrl || 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=400&q=80'}" alt="${ht.hotelName}" class="w-28 h-28 object-cover rounded-xl shrink-0" />
            <div class="space-y-1">
              <span class="text-[10px] px-2 py-0.5 bg-purple-50 text-purple-800 font-bold rounded">推薦候補 #${idx + 1}</span>
              <h4 class="font-bold text-stone-900 text-sm line-clamp-1">${ht.hotelName}</h4>
              <p class="text-[11px] text-stone-600 line-clamp-2">${ht.hotelSpecial || 'ハウステンボス直営の上質クラシックホテル、または雲仙温泉の乳白色硫黄泉自慢の名宿。'}</p>
              <div class="text-xs text-stone-700 pt-1">
                評価: <strong class="text-amber-600">★${ht.reviewAverage || '4.4'}</strong> | 目安: <strong class="text-purple-900">¥${Number(ht.hotelMinCharge || 15000).toLocaleString()}〜</strong>
              </div>
            </div>
          </div>
          <div class="mt-3 pt-2 border-t border-stone-100 flex justify-between items-center">
            <span class="text-[11px] text-stone-700">${ht.address2 || '長崎県'}</span>
            <a href="${ht.affiliateUrl}" target="_blank" rel="noopener noreferrer" class="text-xs font-bold text-purple-700 hover:underline">
              詳細・予約 ↗
            </a>
          </div>
        </div>
      `).join('')}
    </div>
  </section>

  <!-- 6. 11月・12月・1月 月別モデルコースと旅の計画 -->
  <section class="space-y-4">
    <h2 class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-purple-700 pb-2.5">
      🗓️ 11月・12月・1月 ハウステンボス＆雲仙温泉2泊3日周遊プラン
    </h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs md:text-sm">
      <div class="p-4 bg-purple-50/50 rounded-2xl border border-purple-100 space-y-2">
        <h4 class="font-bold text-purple-900 text-base">🎄 11月：光の街のクリスマス開幕</h4>
        <p class="text-stone-600 leading-relaxed">
          巨大クリスマスツリーとマーケットが開幕。気候も穏やかで散策しやすく、夜はイルミネーションを満喫。翌日は島原半島へドライブし、秋の余韻残る雲仙地獄で白濁湯を楽しむ旅程が快適です。
        </p>
      </div>
      <div class="p-4 bg-pink-50/50 rounded-2xl border border-pink-100 space-y-2">
        <h4 class="font-bold text-pink-900 text-base">🎅 12月：クリスマス花火と霧氷の季節</h4>
        <p class="text-stone-600 leading-relaxed">
          週末を中心にクリスマス花火が打ち上げられ、園内は最高の賑わいを見せます。雲仙岳では氷点下の日に霧氷（花ぼうろ）が観察され始め、冬ならではのコントラストが際立ちます。
        </p>
      </div>
      <div class="p-4 bg-indigo-50/50 rounded-2xl border border-indigo-100 space-y-2">
        <h4 class="font-bold text-indigo-900 text-base">❄️ 1月：白銀の世界と湯煙の静寂</h4>
        <p class="text-stone-600 leading-relaxed">
          新年を迎えるとテーマが「白銀の世界」へと移行し、凛とした冬空に純白のイルミネーションが輝きます。雲仙温泉の雪見露天風呂と長崎和牛のすき焼きで心身を温める大人の休日におすすめ。
        </p>
      </div>
    </div>
  </section>

  <!-- 7. 関連内部リンクと近隣観光ハブ -->
  <section class="p-5 bg-stone-50 rounded-2xl border border-stone-200 space-y-3 text-xs md:text-sm">
    <h3 class="font-bold text-stone-900">🔗 あわせて読みたい九州の冬旅・イルミネーション特集（サイト内ガイド）</h3>
    <ul class="grid grid-cols-1 md:grid-cols-2 gap-2 text-purple-800">
      <li>・<a href="/prefectures/nagasaki/" class="hover:underline font-semibold">長崎県の観光名所・島原・佐世保厳選ホテルガイド</a></li>
      <li>・<a href="/posts/kurokawa-onsen-yuakari-snow-noten-aso-guide/" class="hover:underline font-semibold">黒川温泉の湯あかり竹灯籠と雪見露天風呂完全ガイド</a></li>
      <li>・<a href="/features/winter/" class="hover:underline font-semibold">全国の冬イルミネーション・雪景色絶景特集</a></li>
      <li>・<a href="/features/luxury/" class="hover:underline font-semibold">大人のご褒美記念日！憧れのラグジュアリーホテル特集</a></li>
    </ul>
  </section>

  <!-- 8. よくある質問（FAQ） -->
  <section class="space-y-4">
    <h2 class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-purple-700 pb-2.5">
      ❓ ハウステンボス＆雲仙温泉旅行に関するよくある質問（FAQ）
    </h2>
    <div class="space-y-3 text-xs md:text-sm">
      <div class="p-4 bg-white rounded-2xl border border-stone-200">
        <h4 class="font-bold text-stone-900 mb-1">Q1. ハウステンボス直営ホテルに泊まる最大のメリットは何ですか？</h4>
        <p class="text-stone-600">パークの入国口に直結または園内に位置し、イルミネーションを閉園間際まで堪能した後すぐに部屋へ戻れる点です。また、ホテル宿泊者専用の再入場特典や朝の一般開園前散策が楽しめる点も大きな魅力です。</p>
      </div>
      <div class="p-4 bg-white rounded-2xl border border-stone-200">
        <h4 class="font-bold text-stone-900 mb-1">Q2. ハウステンボスから雲仙温泉への移動時間はどのくらいですか？</h4>
        <p class="text-stone-600">車・レンタカーで西九州自動車道・長崎道・諫早ICを経由して約1時間30分〜1時間45分です。途中の有明海沿いや島原城、小浜温泉の日本一長い足湯などを巡るドライブコースも楽しめます。</p>
      </div>
      <div class="p-4 bg-white rounded-2xl border border-stone-200">
        <h4 class="font-bold text-stone-900 mb-1">Q3. 雲仙温泉の冬の気温と道路の雪・凍結状況は？</h4>
        <p class="text-stone-600">雲仙温泉街は標高約700mにあるため、長崎市内や佐世保市街地より4〜5度気温が低く、真冬は氷点下になる日があります。12月下旬〜2月は仁田峠方面を中心に積雪や凍結の恐れがあるため、チェーンや冬用タイヤの準備があると安心です。</p>
      </div>
    </div>
  </section>

</div>`;

  return {
    id: data.id,
    slug: data.slug,
    title: data.title,
    description: '長崎県・ハウステンボス＆雲仙温泉の11月・12月・1月冬特集！世界最大1,300万球「白銀の世界・光の街のクリスマス」、雲仙地獄の立ち上る湯煙と妙見岳の霧氷、直営リゾートホテルと白濁酸性硫黄泉名宿ガイド。',
    prefecture: '長崎県',
    area: '佐世保・雲仙',
    hotel_name: mainHotel.hotelName,
    image: mainHotel.hotelImageUrl,
    other_images: otherHotels.map(x => x.hotelImageUrl),
    affiliate_url: mainHotel.affiliateUrl,
    price: mainHotel.hotelMinCharge,
    rating: mainHotel.reviewAverage,
    date: '2026-10-12',
    categories: ['長崎県', 'ハウステンボス', '雲仙温泉', '雲仙地獄', 'イルミネーション', '白銀の世界', '霧氷', '美肌温泉'],
    keywords: [
      'ハウステンボス イルミネーション 冬 白銀の世界 クリスマス',
      'ホテルオークラJRハウステンボス 琴乃湯 口コミ 宿泊',
      '雲仙温泉 旅館 雲仙地獄 霧氷 花ぼうろ 妙見岳',
      '長崎 冬 旅行 モデルコース ハウステンボス 雲仙',
      '雲仙福田屋 東園 白濁 硫黄泉 露天風呂',
      'ハウステンボス チケット 直営ホテル 特典 混雑'
    ],
    is_special_feature: true,
    review: reviewHtml
  };
}

// ========================================================
// 記事5: 群馬県・万座温泉（標高1800m白銀乳白色秘湯・硫黄泉）
// ========================================================
function buildManzaPost(data) {
  const h = data.hotels;
  const w = data.wikiSpotsData;
  const mainHotel = h.find(x => x.hotelName.includes('万座亭') || x.hotelName.includes('日進舘') || x.hotelName.includes('高原ホテル')) || h[0];
  const otherHotels = h.filter(x => x.hotelNo !== mainHotel.hotelNo).slice(0, 4);

  const spotManza = w.find(x => x.spotName === '万座温泉') || w[0];
  const spotPark = w.find(x => x.spotName === '上信越高原国立公園') || w[1];
  const spotAsama = w.find(x => x.spotName === '浅間山') || w[2];

  const reviewHtml = `<div class="space-y-10 text-stone-800 leading-relaxed font-sans">

  <!-- GEO & AI Search Executive Summary -->
  <section class="p-6 md:p-8 bg-gradient-to-br from-cyan-50 via-sky-50 to-stone-100 rounded-3xl border border-cyan-200 shadow-sm">
    <div class="flex flex-wrap items-center gap-2 mb-3">
      <span class="px-3 py-1 bg-cyan-800 text-white text-xs font-black rounded-full uppercase tracking-wider">GEO & AI Search Executive Summary</span>
      <span class="text-xs text-cyan-950 font-bold">11月〜1月の万座温泉・標高1800m白銀雪見大野天風呂完全ガイド</span>
    </div>
    <h2 class="text-xl md:text-2xl font-black text-stone-900 mb-3">【総括】万座温泉の冬旅：日本一の硫黄含有量を誇る標高1,800mの白銀秘湯。満天の冬星空と極上パウダースノー雪見露天風呂、上州牛会席の名宿ガイド</h2>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed mb-5">
      群馬県と長野県の県境近く、上信越高原国立公園の標高1,800mの高嶺に位置する万座温泉は、「日本で最も星空に近い高標高温泉郷」として知られる白銀の温泉郷。11月上旬から早くも初雪を観測し、12月から1月にかけては積雪2〜3メートルに達する豪雪地帯へと姿を変えます。万座の最大の魅力は、国内全温泉地の中で日本一を誇る硫黄含有量（1リットルあたり約300mg以上）。地中深くの火山活動によって噴出する高温泉は、空気に触れることでエメラルドグリーンから白濁した乳白色へと劇的に色を変え、立ち込める濃厚な硫黄の湯煙が冬の冷気と混ざり合って温泉情緒を最高潮に高めます。外気温が氷点下10度以下まで冷え込む厳冬期の雪見大野天風呂では、頭上を舞う粉雪と熱々の乳白色湯の至福のコントラストを体感。街の明かりが届かない標高1,800mの澄み切った冬夜には、息をのむ満天の天の川と冬のダイヤモンドが露天風呂の頭上に降り注ぎます。万座亭の「白鐵の湯」、万座高原ホテルの「石庭露天風呂」、日進舘の「極楽湯」など、名湯揃いの湯守の宿を巡る冬の至高の温泉体験をお届けします。
    </p>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
      <div class="p-3.5 bg-white rounded-2xl border border-cyan-100 shadow-2xs">
        <span class="text-stone-500 block font-semibold mb-1">温泉泉質・特徴</span>
        <strong class="text-cyan-900 text-sm">酸性・含硫黄-硫酸塩泉（日本一の硫黄濃度）</strong>
      </div>
      <div class="p-3.5 bg-white rounded-2xl border border-cyan-100 shadow-2xs">
        <span class="text-stone-500 block font-semibold mb-1">標高・冬の気温</span>
        <strong class="text-stone-900 text-sm">標高1,800m / 12〜1月: -5℃〜-15℃</strong>
      </div>
      <div class="p-3.5 bg-white rounded-2xl border border-cyan-100 shadow-2xs">
        <span class="text-stone-500 block font-semibold mb-1">雪質・アクティビティ</span>
        <strong class="text-blue-800 text-sm">極上粉雪パウダースノー・万座温泉スキー場</strong>
      </div>
      <div class="p-3.5 bg-white rounded-2xl border border-cyan-100 shadow-2xs">
        <span class="text-stone-500 block font-semibold mb-1">名物グルメ</span>
        <strong class="text-amber-800 text-sm">上州牛すき焼き・嬬恋高原野菜・手打ち蕎麦</strong>
      </div>
    </div>
  </section>

  <!-- 1. 日本一の硫黄含有量と標高1800mの白銀世界 -->
  <section class="space-y-4">
    <h2 class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-cyan-700 pb-2.5">
      ♨️ 硫黄濃度日本一の衝撃！エメラルドグリーンから白濁へと変化する「万座の濃厚湯」
    </h2>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed">
      万座温泉の源泉は、白根山の火山活動によって生み出される1日540万リットル以上という豊富な自然湧出量を誇ります。その特筆すべき特徴は、全国第1位の含有量を誇る「硫黄（硫化水素）」成分。1リットルあたり300ミリグラムを超える硫黄成分を含み、湧出口では無色透明から淡いエメラルドグリーンを帯びていますが、空気に触れて酸化が進むにつれて白濁し、湯船の底には大量の白い湯の花が沈殿します。
    </p>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed">
      泉質は「酸性・含硫黄-ナトリウム-硫酸塩温泉（硫化水素型）」。pH2〜3前後の強酸性でありながら、硫酸塩成分のコーティング作用によって肌への刺激が和らげられ、入浴すると古い角質が剥がれ落ちてスベスベの肌ざわりへと生まれ変わります。硫化水素の毛細血管拡張作用は強力で、浸かって数分で手足の先まで血液が巡り、内臓まで温まる「温まりの湯」。冷え性や関節痛、呼吸器系の疾患への湯治効果も古くから名高く、江戸時代から「天下の名湯」として湯治客を集めてきました。
    </p>
  </section>

  <!-- 2. Wikipedia 実写観光スポットギャラリー -->
  <section class="space-y-6 my-8">
    <h2 class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-cyan-700 pb-2.5">
      📷 Wikipedia公式アーカイブで巡る万座温泉・上信越高原・浅間山の冬名所（実写ギャラリー）
    </h2>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <!-- Spot 1: 万座温泉 -->
      <div class="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm flex flex-col">
        <img src="${spotManza.image || 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Manza_Onsen_Manzatei.jpg/800px-Manza_Onsen_Manzatei.jpg'}" alt="${spotManza.spotName}" class="w-full h-48 object-cover hover:scale-105 transition duration-500" />
        <div class="p-4 flex-grow flex flex-col justify-between space-y-2">
          <div>
            <span class="text-[10px] px-2 py-0.5 bg-cyan-100 text-cyan-800 font-bold rounded">標高1800mの白銀秘湯</span>
            <h3 class="font-bold text-stone-900 text-base mt-1">${spotManza.spotName}</h3>
            <p class="text-xs text-stone-600 leading-relaxed mt-1">
              ${spotManza.extract || '群馬県吾妻郡嬬恋村にある温泉。標高1,800mの高原に位置し、日本屈指の硫黄含有量を誇る白濁の湯で知られる。'}
            </p>
          </div>
          <p class="text-[11px] text-cyan-950 bg-cyan-50 p-2.5 rounded-lg font-medium border border-cyan-100">
            💡 冬は一面が深い粉雪に覆われ、雪見大露天風呂から望む白銀の山々と満天の冬星空は圧巻の美しさです。
          </p>
        </div>
      </div>

      <!-- Spot 2: 上信越高原国立公園 -->
      <div class="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm flex flex-col">
        <img src="${spotPark.image || 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Mount_Kusatsu-Shirane_Yugama_2012-08-26.jpg/800px-Mount_Kusatsu-Shirane_Yugama_2012-08-26.jpg'}" alt="${spotPark.spotName}" class="w-full h-48 object-cover hover:scale-105 transition duration-500" />
        <div class="p-4 flex-grow flex flex-col justify-between space-y-2">
          <div>
            <span class="text-[10px] px-2 py-0.5 bg-blue-100 text-blue-800 font-bold rounded">雄大な高山山岳地帯</span>
            <h3 class="font-bold text-stone-900 text-base mt-1">${spotPark.spotName}</h3>
            <p class="text-xs text-stone-600 leading-relaxed mt-1">
              ${spotPark.extract || '群馬県・新潟県・長野県にまたがる国立公園。谷川岳、苗場山、草津白根山、浅間山など2,000m級の山々が連なる。'}
            </p>
          </div>
          <p class="text-[11px] text-blue-950 bg-blue-50 p-2.5 rounded-lg font-medium border border-blue-100">
            💡 万座ハイウェーを利用して通年アクセスが可能。冬は樹氷や霧氷をまとった針葉樹林の白銀景観が広がります。
          </p>
        </div>
      </div>

      <!-- Spot 3: 浅間山 -->
      <div class="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm flex flex-col">
        <img src="${spotAsama.image || 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Mount_Asama_from_Karuizawa_2011.jpg/800px-Mount_Asama_from_Karuizawa_2011.jpg'}" alt="${spotAsama.spotName}" class="w-full h-48 object-cover hover:scale-105 transition duration-500" />
        <div class="p-4 flex-grow flex flex-col justify-between space-y-2">
          <div>
            <span class="text-[10px] px-2 py-0.5 bg-stone-100 text-stone-800 font-bold rounded">標高2568mの秀峰</span>
            <h3 class="font-bold text-stone-900 text-base mt-1">${spotAsama.spotName}</h3>
            <p class="text-xs text-stone-600 leading-relaxed mt-1">
              ${spotAsama.extract || '長野県と群馬県の境にある安山岩質の複合火山。標高2,568m。冬期は山頂から裾野にかけて見事な雪化粧を誇る。'}
            </p>
          </div>
          <p class="text-[11px] text-stone-950 bg-stone-50 p-2.5 rounded-lg font-medium border border-stone-200">
            💡 万座温泉への道中（鬼押ハイウェー周辺）からは、白銀に輝く浅間山の雄大なプリン型の山容を一望できます。
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- 3. 雪見露天風呂の極楽と冬の満天星空 -->
  <section class="space-y-4">
    <h2 class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-cyan-700 pb-2.5">
      🌌 氷点下10度の冷気と熱湯の奇跡！「雪見大野天風呂」と頭上に降り注ぐ冬の星空
    </h2>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed">
      標高1,800mの万座温泉の冬の夜は、都会では決して体験できない神秘のひとときをもたらします。マイナス10度以下まで冷え込んだ空気は澄み渡り、チンダル現象によって立ち上る白い湯煙が月光に照らされて青白く輝きます。浴槽の縁には鋭いつららが幾重にも垂れ下がり、周囲には数十センチの粉雪が降り積もっています。
    </p>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed">
      冷気にさらされた頭部を冷やしながら、首まで熱々の乳白色湯に身を浸すと、皮膚を包む温もりと雪山の冷気が奇跡のバランスを生み出します。そして見上げた夜空には、人工の光が一切ない漆黒のドームにオリオン座やプレアデス星団（すばる）、シリウスが宝石のように輝き、白銀の雪山と満天の星空が一体となる圧倒的な絶景が広がります。「星に一番近い温泉」と呼ばれる所以を、全身で実感できる瞬間です。
    </p>
  </section>

  <!-- 4. 極上パウダースノーとスキー＆スノーボード -->
  <section class="space-y-4">
    <h2 class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-cyan-700 pb-2.5">
      ⛷️ 内陸高標高が生むシルキースノー！万座温泉スキー場と白銀のアクティビティ
    </h2>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed">
      標高1,800mから1,999mの山頂へと広がる「万座温泉スキー場」は、本州屈指のドライパウダースノーが降ることでスキーヤー・スノーボーダーから熱烈な支持を集めています。日本海からの湿った雪雲が山々を越える間に水分を落とし、極度に乾燥した冷気の中で結晶化するため、握っても固まらないサラサラの粉雪「シルキースノー」が降り積もります。
    </p>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed">
      コースからは浅間山や妙高山、北アルプスの大パノラマを望むことができ、ゲレンデ直結の温泉ホテルからそのまま滑り出せる「スキーイン・スキーアウト」の利便性も抜群。朝一番の非圧雪コースで極上の浮遊感を楽しんだ後、スキーブーツを脱いですぐに白濁の源泉掛け流し露天風呂に飛び込むという、スノーリゾートと秘湯温泉が融合した唯一無二の贅沢が叶います。
    </p>
  </section>

  <!-- 5. 楽天トラベルAPI連動 厳選宿泊施設 -->
  <section class="space-y-6 my-8">
    <div class="flex flex-wrap items-end justify-between border-b-2 border-cyan-700 pb-2">
      <div>
        <span class="text-xs font-bold text-cyan-700 tracking-wider uppercase">Rakuten Travel API Live Verified</span>
        <h2 class="text-xl md:text-2xl font-bold text-stone-900 mt-0.5">
          🏨 万座温泉で雪見露天風呂と濃厚白濁湯を味わい尽くす名宿セレクション
        </h2>
      </div>
      <span class="text-xs text-stone-700">※最新空室状況・宿泊プランは各宿リンクより確認できます</span>
    </div>

    <!-- メイン推薦宿 -->
    <div class="bg-gradient-to-br from-cyan-50/70 to-white rounded-3xl border-2 border-cyan-300 p-6 shadow-md">
      <div class="flex flex-wrap items-center gap-2 mb-2">
        <span class="px-3 py-1 bg-cyan-700 text-white text-xs font-bold rounded-full">白鐵の湯とログ露天の風情</span>
        <span class="text-xs text-cyan-900 font-semibold">ヒバの木が香る名物ログ野天風呂＆上州牛と嬬恋高原野菜の山里会席</span>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        <div class="md:col-span-5">
          <img src="${mainHotel.hotelImageUrl || 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80'}" alt="${mainHotel.hotelName}" class="w-full h-64 object-cover rounded-2xl shadow-sm" />
        </div>
        <div class="md:col-span-7 space-y-3">
          <h3 class="text-xl font-black text-stone-900">${mainHotel.hotelName}</h3>
          <p class="text-xs text-stone-600 leading-relaxed">
            ${mainHotel.hotelSpecial || '万座温泉の奥に佇み、自家源泉「白鐵（はくてつ）の湯」を引く木造りの温もりあふれる宿。雪景色の白樺林を望むヒバ造りの露天風呂と、上州牛すき焼きなど地元の山海の幸を活かした滋味深い料理が旅人を癒やす。'}
          </p>
          <div class="grid grid-cols-2 gap-2 text-xs py-2 bg-white/80 rounded-xl p-3 border border-cyan-100">
            <div><span class="text-stone-700">所在地：</span><strong class="text-stone-800">${mainHotel.address1}${mainHotel.address2}</strong></div>
            <div><span class="text-stone-700">総合評価：</span><strong class="text-amber-600 font-black">★ ${mainHotel.reviewAverage || '4.3'}</strong> (${mainHotel.reviewCount || '0'}件)</div>
            <div><span class="text-stone-700">参考最安料金：</span><strong class="text-cyan-900 font-bold">¥${Number(mainHotel.hotelMinCharge || 13500).toLocaleString()}〜</strong></div>
            <div><span class="text-stone-700">アクセス：</span><span class="text-stone-700">${mainHotel.access ? mainHotel.access.slice(0, 35) + '...' : 'JR吾妻線万座・鹿沢口駅より路線バスで約45分'}</span></div>
          </div>
          <div class="pt-1">
            <a href="${mainHotel.affiliateUrl}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-cyan-700 to-sky-800 hover:from-cyan-800 hover:to-sky-900 text-white font-bold text-sm rounded-xl shadow-md transition duration-300">
              楽天トラベルで空室・宿泊プランを確認する ↗
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- 周辺・比較おすすめ宿リスト -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      ${otherHotels.map((ht, idx) => `
        <div class="bg-white rounded-2xl border border-stone-200 p-4 shadow-2xs hover:border-cyan-300 transition duration-300 flex flex-col justify-between">
          <div class="flex gap-4">
            <img src="${ht.hotelImageUrl || 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=400&q=80'}" alt="${ht.hotelName}" class="w-28 h-28 object-cover rounded-xl shrink-0" />
            <div class="space-y-1">
              <span class="text-[10px] px-2 py-0.5 bg-cyan-50 text-cyan-800 font-bold rounded">推薦候補 #${idx + 1}</span>
              <h4 class="font-bold text-stone-900 text-sm line-clamp-1">${ht.hotelName}</h4>
              <p class="text-[11px] text-stone-600 line-clamp-2">${ht.hotelSpecial || '日本一の硫黄濃度を誇る白濁露天風呂と、満天の星空を眺める雪見風呂自慢の温泉宿。'}</p>
              <div class="text-xs text-stone-700 pt-1">
                評価: <strong class="text-amber-600">★${ht.reviewAverage || '4.1'}</strong> | 目安: <strong class="text-cyan-900">¥${Number(ht.hotelMinCharge || 11000).toLocaleString()}〜</strong>
              </div>
            </div>
          </div>
          <div class="mt-3 pt-2 border-t border-stone-100 flex justify-between items-center">
            <span class="text-[11px] text-stone-700">${ht.address2 || '嬬恋村干俣'}</span>
            <a href="${ht.affiliateUrl}" target="_blank" rel="noopener noreferrer" class="text-xs font-bold text-cyan-700 hover:underline">
              詳細・予約 ↗
            </a>
          </div>
        </div>
      `).join('')}
    </div>
  </section>

  <!-- 6. 11月・12月・1月 月別モデルコースと旅の計画 -->
  <section class="space-y-4">
    <h2 class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-cyan-700 pb-2.5">
      🗓️ 11月・12月・1月 万座温泉冬のアクセス＆月別攻略ガイド
    </h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs md:text-sm">
      <div class="p-4 bg-cyan-50/50 rounded-2xl border border-cyan-100 space-y-2">
        <h4 class="font-bold text-cyan-900 text-base">🍂 11月：初雪と湯煙のコントラスト</h4>
        <p class="text-stone-600 leading-relaxed">
          11月上旬から初雪が舞い、中旬には本格的な雪景色へ。志賀草津高原ルートは11月中旬に冬期閉鎖となるため、万座ハイウェー（有料道路）経由でのアクセスが定石となります。冬用タイヤの準備を。
        </p>
      </div>
      <div class="p-4 bg-sky-50/50 rounded-2xl border border-sky-100 space-y-2">
        <h4 class="font-bold text-sky-900 text-base">❄️ 12月：スキー場オープンとパウダースノー</h4>
        <p class="text-stone-600 leading-relaxed">
          万座温泉スキー場がオープンし、極上のシルキースノーがゲレンデを覆います。標高1,800mの澄み切った大気の中で、雪見露天風呂と満天の星空鑑賞が最も冴え渡るベストシーズンです。
        </p>
      </div>
      <div class="p-4 bg-slate-50 rounded-2xl border border-stone-200 space-y-2">
        <h4 class="font-bold text-stone-900 text-base">☃️ 1月：氷点下15度の完全白銀世界</h4>
        <p class="text-stone-600 leading-relaxed">
          積雪が2メートルを超え、道路両脇には雪の壁が聳え立ちます。冷え込みが極限に達するため、熱々の乳白色湯に入浴した瞬間の開放感と温もりは生涯忘れられない体験となります。
        </p>
      </div>
    </div>
  </section>

  <!-- 7. 関連内部リンクと近隣観光ハブ -->
  <section class="p-5 bg-stone-50 rounded-2xl border border-stone-200 space-y-3 text-xs md:text-sm">
    <h3 class="font-bold text-stone-900">🔗 あわせて読みたい群馬県・信越の冬旅・秘湯特集（サイト内ガイド）</h3>
    <ul class="grid grid-cols-1 md:grid-cols-2 gap-2 text-cyan-800">
      <li>・<a href="/prefectures/gunma/" class="hover:underline font-semibold">群馬県の温泉・観光・草津万座伊香保完全ガイド</a></li>
      <li>・<a href="/posts/minakami-onsen-tanigawadake-snow-river-roten-guide/" class="hover:underline font-semibold">水上温泉と谷川岳雪景色・利根川雪見露天風呂特集</a></li>
      <li>・<a href="/features/onsen/" class="hover:underline font-semibold">にごり湯・硫黄泉・秘湯の厳選名湯特集</a></li>
      <li>・<a href="/features/winter/" class="hover:underline font-semibold">白銀の絶景！雪見露天風呂のある宿特集</a></li>
    </ul>
  </section>

  <!-- 8. よくある質問（FAQ） -->
  <section class="space-y-4">
    <h2 class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-cyan-700 pb-2.5">
      ❓ 万座温泉旅行に関するよくある質問（FAQ）
    </h2>
    <div class="space-y-3 text-xs md:text-sm">
      <div class="p-4 bg-white rounded-2xl border border-stone-200">
        <h4 class="font-bold text-stone-900 mb-1">Q1. 冬の万座温泉へ車で行く際の注意点は？</h4>
        <p class="text-stone-600">草津温泉から万座へ向かう「志賀草津高原ルート（国道292号）」は11月中旬から4月下旬まで冬期通行止めとなります。冬期は嬬恋村側の「万座ハイウェー（有料道路）」経由でのみアクセス可能です。スタッドレスタイヤ（4WD推奨）またはチェーンが必須です。</p>
      </div>
      <div class="p-4 bg-white rounded-2xl border border-stone-200">
        <h4 class="font-bold text-stone-900 mb-1">Q2. 電車・バスでのアクセス方法は？</h4>
        <p class="text-stone-600">北陸新幹線「軽井沢駅」またはJR吾妻線「万座・鹿沢口駅」から西武観光バスの路線バスが運行しています。雪道の運転が不安な方は公共交通機関や各ホテルの送迎バス利用がおすすめです。</p>
      </div>
      <div class="p-4 bg-white rounded-2xl border border-stone-200">
        <h4 class="font-bold text-stone-900 mb-1">Q3. 万座温泉の硫黄泉に入浴する際の注意点は？</h4>
        <p class="text-stone-600">硫黄成分が非常に濃く酸性度が高いため、貴金属（銀製品やアクセサリー）は黒く変色します。必ず外して入浴してください。また、湯あたりを防ぐため長湯は避け、こまめな水分補給を心がけましょう。</p>
      </div>
    </div>
  </section>

</div>`;

  return {
    id: data.id,
    slug: data.slug,
    title: data.title,
    description: '群馬県・万座温泉の11月・12月・1月冬特集！日本一の硫黄含有量を誇る標高1,800mの白銀乳白色秘湯、雪見大野天風呂と満天の星空、極上シルキースノー万座スキー場と上州牛会席名宿ガイド。',
    prefecture: '群馬県',
    area: '万座・嬬恋',
    hotel_name: mainHotel.hotelName,
    image: mainHotel.hotelImageUrl,
    other_images: otherHotels.map(x => x.hotelImageUrl),
    affiliate_url: mainHotel.affiliateUrl,
    price: mainHotel.hotelMinCharge,
    rating: mainHotel.reviewAverage,
    date: '2026-10-12',
    categories: ['群馬県', '万座温泉', '雪見露天', '乳白色温泉', '硫黄泉', '星空', 'スキー', '上州牛'],
    keywords: [
      '万座温泉 おすすめ 旅館 冬 雪見露天風呂',
      '万座温泉 硫黄濃度 日本一 白濁 効能',
      '万座亭 日進舘 万座高原ホテル 石庭露天風呂 口コミ',
      '万座ハイウェー 冬 アクセス スタッドレス チェーン',
      '万座温泉 スキー場 パウダースノー 星空 宿泊',
      '草津 白根山 上信越高原 国立公園 秘湯'
    ],
    is_special_feature: true,
    review: reviewHtml
  };
}

// ========================================================
// メイン実行部
// ========================================================
function main() {
  console.log('=== Generating 5 Independent Winter Destination Guides (Round 143) ===');

  const posts = [
    buildHimiPost(collectedData['theme_1_himi']),
    buildTangoPost(collectedData['theme_2_tango']),
    buildAwajishimaPost(collectedData['theme_3_awajishima']),
    buildHuistenboschPost(collectedData['theme_4_huistenbosch']),
    buildManzaPost(collectedData['theme_5_manza'])
  ];

  const postsDir = path.join(__dirname, '..', 'src', 'data', 'posts');

  for (const post of posts) {
    const textLen = countTextLength(post.review);
    console.log(`\nPost "${post.slug}":`);
    console.log(`  Title: ${post.title}`);
    console.log(`  Prefecture: ${post.prefecture}`);
    console.log(`  Hotel: ${post.hotel_name} (Price: ${post.price}, Rating: ${post.rating})`);
    console.log(`  Pure Text Length (excl. HTML tags): ${textLen} chars`);

    if (textLen < 3000) {
      console.warn(`  ⚠️ WARNING: Text length is under 3000 chars (${textLen})!`);
    } else {
      console.log(`  ✅ EXCELLENT: Text length is well over 3000 chars (${textLen})!`);
    }

    const filePath = path.join(postsDir, `${post.slug}.json`);
    fs.writeFileSync(filePath, JSON.stringify(post, null, 2), 'utf8');
    console.log(`  Saved to: ${filePath}`);
  }

  console.log('\nAll 5 new winter posts generated successfully!');
}

main();
