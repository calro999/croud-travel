// scripts/new_articles/article50_kobe_herb_gardens_christmas.js
module.exports = function buildArticle50(themeData) {
  const hotels = themeData.hotels;
  const wiki = themeData.wiki;

  const slug = "winter-hyogo-kobe-herb-gardens-christmas-waterfront-hotels-guide";
  const title = "【神戸】神戸布引ハーブ園「古城のクリスマス2026」＆神戸港ウォーターフロント冬夜景完全攻略！標高400mの森の巨大ツリーとドイツ古城の市、神戸牛・絶景オーシャンビュー露天を堪能する名門ホテル5選";
  const description = "2026年11月中旬〜12月25日開催の「神戸布引ハーブ園 古城のクリスマス」と神戸ウォーターフロントの冬夜景を徹底解説。新神戸からロープウェイで登る標高400mの山頂古城広場にそびえ立つ高さ約25mの天然モミの木巨大ツリー、本場ドイツ直輸入のクリスマスマーケット、眼下に広がる1,000万ドルの神戸夜景を網羅。さらにリニューアルした神戸ポートタワーやメリケンパークの冬イルミネーション、ホテル ラ・スイート神戸ハーバーランドや神戸みなと温泉 蓮など、全室テラス付きオーシャンビューや天然温泉露天風呂から港夜景を独占し、至高の神戸牛を堪能できる厳選名宿5選をご紹介。";
  const date = "2026-11-10";
  const prefecture = "兵庫県";
  const area = "神戸・三宮・ハーバーランド・六甲山";

  // ホテル抽出
  const hLasuite = hotels.find(h => h.hotelNo === 104705) || hotels[0];
  const hOriental = hotels.find(h => h.hotelNo === 8978) || hotels[1];
  const hRen = hotels.find(h => h.hotelNo === 149298) || hotels[2];
  const hOkura = hotels.find(h => h.hotelNo === 1648) || hotels[3];
  const hAna = hotels.find(h => h.hotelNo === 164) || hotels[4];

  // Wikiスポット
  const wRopeway = wiki["神戸布引ロープウェイ"] || {};
  const wPortTower = wiki["神戸ポートタワー"] || {};
  const wMeriken = wiki["メリケンパーク"] || {};
  const wIkuta = wiki["生田神社"] || {};

  const reviewHtml = `
<div class="my-6 p-5 rounded-2xl bg-gradient-to-r from-rose-950 via-red-950 to-stone-900 text-white shadow-lg flex flex-col sm:flex-row items-center justify-between gap-4 border border-rose-800/40">
  <div class="space-y-1 text-center sm:text-left">
    <div class="flex items-center justify-center sm:justify-start gap-2 text-rose-300 font-extrabold text-xs tracking-wider">
      <span>🏰</span><span>2026冬 神戸布引ハーブ園 古城のクリスマス＆港町夜景 最新現地滞在ガイド</span>
    </div>
    <p class="text-xs text-rose-100 leading-relaxed">
      11月中旬〜12月25日開催！標高400m古城に輝く25m天然モミの木ツリーとドイツ市。神戸牛＆港夜景ハーバービュー極上宿特集。
    </p>
  </div>
  <a href="${hLasuite.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="shrink-0 px-5 py-2.5 bg-rose-400 hover:bg-rose-300 text-stone-950 font-black text-xs rounded-xl shadow transition-all transform hover:scale-105">
    👑 ホテル ラ・スイート神戸ハーバーランドの空室・宿泊プランを見る →
  </a>
</div>

<h2 id="intro" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-rose-700 pb-2 mb-4">
  標高400mの古城と1000万ドルの夜景が包む奇跡のクリスマス！神戸布引ハーブ園と港町冬絶景の魅力
</h2>
<p class="text-sm md:text-base text-stone-700 leading-relaxed mb-4">
  山と海が美しく迫る国際港湾都市・神戸。冬の澄んだ空気が街を包み込む季節、全国から多くの恋人たちや旅人が集う特別な場所が「神戸布引ハーブ園」です。新幹線・新神戸駅から徒歩すぐのロープウェイに乗り込み、布引の滝や色鮮やかな山肌を見下ろしながら約10分間の空中散歩を楽しむと、標高約400メートルの山頂に佇む中世ドイツの古城「ヴァルトブルク城」をモチーフにした展望プラザへと辿り着きます。
</p>
<p class="text-sm md:text-base text-stone-700 leading-relaxed mb-4">
  毎年11月中旬から12月25日まで開催される「古城のクリスマス」では、広場の中央にそびえ立つ高さ約25メートルもの本物の天然モミの木が約1,600球の温かな電飾で彩られ、日本最大級のクリスマスツリーとして山頂を照らします。城門をくぐると、ドイツ直輸入の木工工芸品やくるみ割り人形、クリスマスピラミッドが並ぶ本格的な「クリスマスマーケット」が広がり、オリジナル特製スパイスを効かせた温かいグリューワインや焼きたてのソーセージの湯気が冷えた体を包み込みます。何より、古城のテラスから見下ろす神戸市街と神戸港の「1,000万ドルの大パノラマ夜景」は、言葉を失うほどの圧倒的な美しさを誇ります。
</p>
<p class="text-sm md:text-base text-stone-700 leading-relaxed mb-6">
  さらに麓のベイエリアへと降り立てば、リニューアルオープンを経て一層の優美さを放つ「神戸ポートタワー」の赤白のライトアップ、メリケンパークの「BE KOBE」モニュメント、ハーバーランド・ガス燈通りのケヤキ並木を照らす柔らかなイルミネーションなど、港町ならではの情緒あふれる光景が連なります。散策の後は、炭火でじっくり焼き上げた極上の「神戸牛ステーキ」や、冬の瀬戸内海の旬魚を味わい、海に突き出た客室テラスや天然温泉露天風呂から夜景を独占。本稿では、布引ハーブ園のロープウェイ攻略法や古城クリスマスの見どころ、そして楽天トラベルで屈指の高評価を誇る神戸の名門ホテル5選を余すところなくご紹介します。
</p>

<h2 id="event-guide" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-rose-700 pb-2 my-6">
  💡 現地調査に基づくプロの指南！布引ハーブ園＆神戸ウォーターフロント攻略マニュアル
</h2>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
  <div class="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm space-y-3">
    <div class="flex items-center gap-2 border-b border-stone-100 pb-3">
      <span class="px-2.5 py-1 bg-rose-100 text-rose-800 font-extrabold text-xs rounded-lg">鑑賞ハイライト</span>
      <h3 class="text-base font-bold text-stone-900">ロープウェイ・点灯時間＆ベストアングル</h3>
    </div>
    <div class="text-xs text-stone-700 space-y-2 leading-relaxed">
      <p>① <strong>ロープウェイナイター運行と1000万ドルのパノラマ:</strong> クリスマス期間中はロープウェイの上り最終が20:15、営業終了が21:00まで延長運行されます。夕暮れ時（16:30〜17:00）の上り便に乗車すると、茜色に染まる夕景から夜景へと移り変わる奇跡のマジックアワーをゴンドラ内から独占できます。</p>
      <p>② <strong>展望プラザ「森のクリスマスツリー」（高さ25m）:</strong> ヴァルトブルク城を模した重厚なレストハウス棟を背景に、広場中央の巨大モミの木ツリーを正面から見上げるアングルがベストショット。夜には城壁のライトアップとツリーの電飾が重なり合い、本場ヨーロッパの古都へ迷い込んだような異国情緒が漂います。</p>
      <p>③ <strong>リニューアルした「神戸ポートタワー」とメリケンパーク:</strong> 2024年に耐震リニューアルを終えた神戸ポートタワーは、LED演出が一新されより鮮やかになりました。メリケンパークの岸壁から、海洋博物館の白い帆船屋根とポートタワーを一直線に捉える構図が神戸の象徴です。</p>
      <p>④ <strong>ハーバーランド・ガス燈通りのイルミネーション:</strong> 神戸アンパンマンこどもミュージアム前へと続く並木道が温かな電球色に包まれ、20:00・21:00・22:00の1分前に一瞬消灯して再点灯する「ハーバーワンダーライト」の仕掛けも見逃せません。</p>
    </div>
  </div>

  <div class="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm space-y-3">
    <div class="flex items-center gap-2 border-b border-stone-100 pb-3">
      <span class="px-2.5 py-1 bg-amber-100 text-amber-800 font-extrabold text-xs rounded-lg">標高400m寒さ・混雑対策</span>
      <h3 class="text-base font-bold text-stone-900">六甲颪対策・下りロープウェイの行列回避</h3>
    </div>
    <div class="text-xs text-stone-700 space-y-2 leading-relaxed">
      <p><strong>【標高400mの気温低下と「六甲颪」の強烈な冷え込み】</strong> 布引ハーブ園山頂は、市街地（三宮や海岸部）に比べて気温が約3〜4度低く、さらに六甲山系から吹き下ろす「六甲颪」が直撃します。夜間は真冬の厳しい寒風にさらされるため、厚手の手袋、ウールマフラー、イヤーマフ、貼るカイロ、保温インナーを徹底的に準備してください。</p>
      <p><strong>【下りロープウェイのピーク混雑（19:30〜20:30）の賢い回避法】</strong> 週末のナイター終了前は下りゴンドラ待ちの長い行列（最大30分以上）が発生します。混雑を避けるには、19:00前には山頂プラザのマーケットを出て下りロープウェイに乗るか、山頂のカフェ「ザ・ベランダ神戸」で温かいハーブティーを飲みながらピークを外すのがスマートです。</p>
      <p><strong>【ハーバーランド宿泊がもたらす最高のリカバリー】</strong> 山頂で冷え切った体を素早く温めるには、ハーバーランドやメリケンパークの客室露天風呂・大型ジャグジーバスを備えたホテルへの直行が最高の選択肢です。部屋に戻れば、温もりの中で神戸港の夜景をテラスから眺め続けられます。</p>
    </div>
  </div>
</div>

<h2 id="hotel-selection" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-rose-700 pb-2 my-8">
  🏨 旅の目的に応じて選ぶ！神戸・ウォーターフロントの厳選名ホテル5選
</h2>

<!-- 宿1: ホテル ラ・スイート神戸ハーバーランド -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-rose-100 text-rose-900 font-black text-xs rounded-full">全室70㎡以上・大型ジャグジー＆広大テラス完備！楽天評価4.76を誇る最高峰スモールラグジュアリー</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">1. ホテル　ラ・スイート神戸ハーバーランド（兵庫県神戸市中央区波止場町）</h3>
    </div>
    <span class="px-3 py-1.5 bg-rose-50 border border-rose-300 text-rose-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 4.76（1034件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hLasuite.hotelImageUrl}" alt="ホテル ラ・スイート神戸ハーバーランド 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hLasuite.roomImageUrl || hLasuite.hotelImageUrl}" alt="ホテル ラ・スイート神戸ハーバーランド 大型ジャグジー・客室テラス夜景" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs md:text-sm text-stone-700 leading-relaxed">
      <p>
        <strong>【宿の魅力とロケーション】</strong> 神戸ハーバーランドの海沿いに佇む、全70室のスモールラグジュアリーホテル。全室がオーシャンビューで、広々としたプライベートテラスからはライトアップされた神戸ポートタワーやメリケンパークの絶景を一望できます。
      </p>
      <p>
        <strong>【全室大型ジャグジーバスと70平米以上の贅沢空間】</strong> すべての客室に海を望む大型ジャグジーバスが備わり、アロマバスソルトとともに優雅なバスタイムを満喫。直営ベーカリー「ル・パン神戸北野」のアメニティや最高級ベッドが、記念日旅行に最高の幸福感をもたらします。
      </p>
      <p>
        <strong>【フレンチ「ル・クール神戸」と鉄板焼「心」の神戸牛ディナー】</strong> 地産地消を極めたメインダイニングでのクリスマスディナーは、A5ランク神戸牛や瀬戸内の伊勢海老・鮑を贅沢に使用。翌朝はテラスへ運ばれる「ル・パン」の焼きたて特製ブレッドのルームサービス朝食が絶品です。
      </p>
      <div class="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-stone-100">
        <span class="font-bold text-stone-900 text-xs">宿泊目安: 1名あたり ¥13,610〜（2名1室利用時）</span>
        <a href="${hLasuite.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="px-5 py-2.5 bg-rose-700 hover:bg-rose-600 text-white font-black text-xs rounded-xl shadow transition">
          楽天トラベルでプラン・空室状況を見る →
        </a>
      </div>
    </div>
  </div>
</div>

<!-- 宿2: 神戸メリケンパークオリエンタルホテル -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-sky-100 text-sky-900 font-black text-xs rounded-full">三方を海に囲まれた白い客船のようなホテル・全室バルコニーから270度の港夜景</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">2. 神戸メリケンパークオリエンタルホテル（兵庫県神戸市中央区波止場町）</h3>
    </div>
    <span class="px-3 py-1.5 bg-sky-50 border border-sky-300 text-sky-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 4.51（9921件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hOriental.hotelImageUrl}" alt="神戸メリケンパークオリエンタルホテル 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hOriental.roomImageUrl || hOriental.hotelImageUrl}" alt="神戸メリケンパークオリエンタルホテル バルコニーからのポートタワー夜景" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs md:text-sm text-stone-700 leading-relaxed">
      <p>
        <strong>【宿の魅力とロケーション】</strong> メリケンパークの突堤端に位置し、周囲を海に囲まれた姿はまさに海上に浮かぶ豪華客船そのもの。ホテルのウッドデッキを出ればすぐにメリケンパークやポートタワーへアクセスできる絶好の立地です。
      </p>
      <p>
        <strong>【全室ウッドデッキバルコニー付きのリゾート空間】</strong> すべての客室にバルコニーが付き、潮風を感じながら目の前を行き交う遊覧船や夜景を眺められます。西側客室からはモザイク観覧車、北側客室からはライトアップされたポートタワーと六甲山系の夜景が広がります。
      </p>
      <p>
        <strong>【最上階テラスバー「VIEW BAR」と朝食フレンチトースト】</strong> 最上階14階のバーでは、煌めく港の夜景を眺めながらオリジナルカクテルを堪能。テラスレストラン「サンタモニカの風」での朝食ビュッフェでは、目の前で焼き上げる熱々のフレンチトーストやオムレツが大人気です。
      </p>
      <div class="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-stone-100">
        <span class="font-bold text-stone-900 text-xs">宿泊目安: 1名あたり ¥6,730〜（2名1室利用時）</span>
        <a href="${hOriental.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="px-5 py-2.5 bg-sky-700 hover:bg-sky-600 text-white font-black text-xs rounded-xl shadow transition">
          楽天トラベルでプラン・空室状況を見る →
        </a>
      </div>
    </div>
  </div>
</div>

<!-- 宿3: 神戸みなと温泉 蓮 -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-amber-100 text-amber-900 font-black text-xs rounded-full">天然温泉が湧出する大人のジャパニーズリゾート・展望露天風呂と割烹ビュッフェの極み</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">3. 神戸みなと温泉　蓮（兵庫県神戸市中央区新港町）</h3>
    </div>
    <span class="px-3 py-1.5 bg-amber-50 border border-amber-300 text-amber-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 4.68（2632件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hRen.hotelImageUrl}" alt="神戸みなと温泉 蓮 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hRen.roomImageUrl || hRen.hotelImageUrl}" alt="神戸みなと温泉 蓮 展望露天風呂・客室" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs md:text-sm text-stone-700 leading-relaxed">
      <p>
        <strong>【宿の魅力とロケーション】</strong> 神戸新港第一突堤に佇む、270度を海に囲まれた天然温泉旅館。京阪神初の「温泉利用型健康増進施設」として厚生労働省に認定され、三宮駅から無料シャトルバスが運行する快適なアクセスを誇ります。中学生未満の宿泊を制限した静謐な大人の隠れ家です。
      </p>
      <p>
        <strong>【地下1,150mから湧出する塩化物泉と最上階展望露天風呂】</strong> 保温・保湿効果に優れた天然温泉。最上階の宿泊者専用展望露天風呂「破線の湯」からは、海風を感じながら神戸港とオリエンタルホテル、ポートタワーの絶景夜景を堪能できます。
      </p>
      <p>
        <strong>【職人が目の前で調理する贅を尽くした割烹ビュッフェ】</strong> 料理長自らが毎朝市場で仕入れる新鮮な魚介のお造りや握り寿司、ローストビーフ、神戸牛すき焼きなど、一品一品が割烹クオリティの豪華ビュッフェは食通からも絶賛されています。
      </p>
      <div class="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-stone-100">
        <span class="font-bold text-stone-900 text-xs">宿泊目安: 1名あたり ¥13,530〜（2名1室利用時）</span>
        <a href="${hRen.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="px-5 py-2.5 bg-amber-700 hover:bg-amber-600 text-white font-black text-xs rounded-xl shadow transition">
          楽天トラベルでプラン・空室状況を見る →
        </a>
      </div>
    </div>
  </div>
</div>

<!-- 宿4: ホテルオークラ神戸 -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-stone-100 text-stone-900 font-black text-xs rounded-full">メリケンパークにそびえる地上35階のランドマークタワー・オークラ伝統のおもてなし</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">4. ホテルオークラ神戸（兵庫県神戸市中央区波止場町）</h3>
    </div>
    <span class="px-3 py-1.5 bg-stone-50 border border-stone-300 text-stone-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 4.56（11394件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hOkura.hotelImageUrl}" alt="ホテルオークラ神戸 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hOkura.roomImageUrl || hOkura.hotelImageUrl}" alt="ホテルオークラ神戸 高層階客室・夜景" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs md:text-sm text-stone-700 leading-relaxed">
      <p>
        <strong>【宿の魅力とロケーション】</strong> メリケンパークの正面にそびえ立つ白亜の超高層ホテル。重厚感あふれるロビーと国内外の賓客を迎えてきたオークラならではの洗練されたホスピタリティが、冬の滞在を格調高く演出します。
      </p>
      <p>
        <strong>【六甲山と神戸港を一望するパノラマビュー客室】</strong> 南側客室からはきらめく神戸港の水平線、北側客室からは六甲山の稜線と「市章山」「錨山」のシンボルライトアップが美しく望めます。シモンズ社製ベッドが心地よい眠りへと誘います。
      </p>
      <p>
        <strong>【伝統のフランス料理「エメラルド」とオークラ特製フレンチトースト】</strong> 格式あるメインダイニング「エメラルド」でのディナーは特別な日のディナーに最適。朝食ではシェフが目の前で焼き上げるふわふわオムレツと、オークラ伝統のフレンチトーストを堪能できます。
      </p>
      <div class="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-stone-100">
        <span class="font-bold text-stone-900 text-xs">宿泊目安: 1名あたり ¥8,730〜（2名1室利用時）</span>
        <a href="${hOkura.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="px-5 py-2.5 bg-stone-800 hover:bg-stone-700 text-white font-black text-xs rounded-xl shadow transition">
          楽天トラベルでプラン・空室状況を見る →
        </a>
      </div>
    </div>
  </div>
</div>

<!-- 宿5: ANAクラウンプラザホテル神戸 -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-teal-100 text-teal-900 font-black text-xs rounded-full">新幹線・新神戸駅直結！布引ハーブ園ロープウェイ乗り場へ徒歩数分の最強アクセス拠点</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">5. ＡＮＡクラウンプラザホテル神戸　ｂｙ　ＩＨＧ（兵庫県神戸市中央区北野町）</h3>
    </div>
    <span class="px-3 py-1.5 bg-teal-50 border border-teal-300 text-teal-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 4.15（6460件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hAna.hotelImageUrl}" alt="ANAクラウンプラザホテル神戸 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hAna.roomImageUrl || hAna.hotelImageUrl}" alt="ANAクラウンプラザホテル神戸 クラブフロア客室・夜景" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs md:text-sm text-stone-700 leading-relaxed">
      <p>
        <strong>【宿の魅力とロケーション】</strong> 山陽新幹線「新神戸駅」改札直結。神戸布引ハーブ園山麓駅（ハーブ園山麓駅）のロープウェイ乗り場まで徒歩わずか3分という、ハーブ園クリスマス観光においてこれ以上ない無敵のロケーションを誇ります。
      </p>
      <p>
        <strong>【標高の高い山の手から見下ろす神戸市街と港のパノラマ】</strong> 地上37階建てのタワーからは、南に神戸の街並みと大阪湾、北に六甲の山肌が広がります。独自開発の快眠プログラム「スリープ・アドバンテージ」のアロマや入浴剤が上質な休息をサポートします。
      </p>
      <p>
        <strong>【36階「レストラン＆バー Level 36」のイタリアンディナー】</strong> 最上階に近い高層階から夜景を見下ろしながら味わう本格イタリアン。三宮へも地下鉄で1駅（約2分）と機動力抜群で、冬の神戸旅行のスマートなベースキャンプとなります。
      </p>
      <div class="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-stone-100">
        <span class="font-bold text-stone-900 text-xs">宿泊目安: 1名あたり ¥9,425〜（2名1室利用時）</span>
        <a href="${hAna.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="px-5 py-2.5 bg-teal-700 hover:bg-teal-600 text-white font-black text-xs rounded-xl shadow transition">
          楽天トラベルでプラン・空室状況を見る →
        </a>
      </div>
    </div>
  </div>
</div>

<h2 id="sightseeing" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-rose-700 pb-2 my-8">
  📸 宿の近隣観光地ガイド（現地観光案内アーカイブ連携）
</h2>
<p class="text-xs md:text-sm text-stone-600 mb-6 leading-relaxed">
  布引ハーブ園の古城クリスマスとあわせて巡りたい、神戸を代表する港町の名所を現地観光案内アーカイブとともにご紹介します。
</p>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
  <div class="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
    <div class="flex items-center gap-2">
      <span class="text-rose-700 font-bold text-sm">📍 神戸布引ロープウェイ（Nunobiki Ropeway）</span>
    </div>
    <img src="${wRopeway.thumbnail || 'https://img.travel.rakuten.co.jp/share/HOTEL/164/164.jpg'}" alt="神戸布引ロープウェイ" class="w-full h-44 object-cover rounded-xl border border-stone-200 shadow-xs" loading="lazy" />
    <p class="text-xs text-stone-700 leading-relaxed">
      ${wRopeway.extract || '神戸布引ロープウェイ（こうべぬのびきロープウェイ）は、新神戸駅から神戸布引ハーブ園を結ぶ索道。全長約1,460メートル、所要約10分。ゴンドラからは布引の滝や神戸の街並み、大阪湾を一望できます。'}
    </p>
  </div>

  <div class="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
    <div class="flex items-center gap-2">
      <span class="text-rose-700 font-bold text-sm">📍 神戸ポートタワー（Kobe Port Tower）</span>
    </div>
    <img src="${wPortTower.thumbnail || 'https://img.travel.rakuten.co.jp/share/HOTEL/8978/8978.jpg'}" alt="神戸ポートタワー" class="w-full h-44 object-cover rounded-xl border border-stone-200 shadow-xs" loading="lazy" />
    <p class="text-xs text-stone-700 leading-relaxed">
      ${wPortTower.extract || '神戸ポートタワー（こうべポートタワー）は、兵庫県神戸市中央区の波止場町にある展望用タワー。高さ108メートル。世界初のパイプ構造の建造物で、和楽器の鼓を模した優美な形状から「鉄塔の美女」と称されます。2024年に大規模改修を終えリニューアルしました。'}
    </p>
  </div>

  <div class="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
    <div class="flex items-center gap-2">
      <span class="text-rose-700 font-bold text-sm">📍 メリケンパーク（Meriken Park）</span>
    </div>
    <img src="${wMeriken.thumbnail || 'https://img.travel.rakuten.co.jp/share/HOTEL/1648/1648.jpg'}" alt="メリケンパーク" class="w-full h-44 object-cover rounded-xl border border-stone-200 shadow-xs" loading="lazy" />
    <p class="text-xs text-stone-700 leading-relaxed">
      ${wMeriken.extract || 'メリケンパーク（Meriken Park）は、神戸港のウォーターフロントにある公園。神戸海洋博物館、神戸ポートタワー、BE KOBEモニュメントが建ち並び、夜間には海と港のイルミネーションに包まれる神戸観光の定番スポットです。'}
    </p>
  </div>

  <div class="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
    <div class="flex items-center gap-2">
      <span class="text-rose-700 font-bold text-sm">📍 生田神社（Ikuta Shrine）</span>
    </div>
    <img src="${wIkuta.thumbnail || 'https://img.travel.rakuten.co.jp/share/HOTEL/104705/104705.jpg'}" alt="生田神社" class="w-full h-44 object-cover rounded-xl border border-stone-200 shadow-xs" loading="lazy" />
    <p class="text-xs text-stone-700 leading-relaxed">
      ${wIkuta.extract || '生田神社（いくたじんぐう・いくたじんじゃ）は、兵庫県神戸市中央区下山手通にある神社。「神戸」の地名発祥の地とされ、稚日女尊（わかひるめのみこと）を祀る縁結びの名所として、年末年始の初詣にも多くの参拝者が訪れます。'}
    </p>
  </div>
</div>

<h2 id="model-course" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-rose-700 pb-2 my-8">
  🗺️ 標高400mの古城ツリーと神戸牛を満喫する 1泊2日神戸冬の極上モデルコース
</h2>

<div class="space-y-4 my-6 text-xs md:text-sm text-stone-700">
  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs space-y-2">
    <h3 class="font-extrabold text-stone-900 text-sm flex items-center gap-2">
      <span class="px-2 py-0.5 bg-rose-700 text-white rounded text-xs">1日目</span>
      新神戸到着から布引ハーブ園ロープウェイ、古城のクリスマス＆夜景温泉宿チェックイン
    </h3>
    <p class="leading-relaxed">
      13:00 山陽新幹線で新神戸駅に到着 ➔ 駅直結のANAクラウンプラザまたはハーバーランドのホテルに荷物を預ける ➔ 14:30 新神戸駅隣接のロープウェイ山麓駅から空中散歩 ➔ 14:45 標高400mの布引ハーブ園山頂へ到着 ➔ ハーブミュージアムを散策し、温室グラスハウスで冬の花々に癒される ➔ 16:30 日没のマジックアワーとともに、高さ25mの天然モミの木ツリーが一斉点灯！ヴァルトブルク城門広場で本場ドイツ直輸入のクリスマスマーケット巡り ➔ シナモン香る特製グリューワインと焼きソーセージを堪能 ➔ 18:30 下りロープウェイに乗り、眼下に広がる1000万ドルの夜景を眼下に望みながら下山 ➔ 19:30 ホテル ラ・スイート神戸ハーバーランドまたは神戸みなと温泉 蓮へチェックイン ➔ 神戸牛ステーキ会席または極上フレンチディナーに舌鼓 ➔ 22:00 海を望む客室ジャグジーや展望露天風呂で温まりながら港夜景を独占。
    </p>
  </div>

  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs space-y-2">
    <h3 class="font-extrabold text-stone-900 text-sm flex items-center gap-2">
      <span class="px-2 py-0.5 bg-rose-700 text-white rounded text-xs">2日目</span>
      テラス朝食からメリケンパーク・ポートタワー散策とお買い物
    </h3>
    <p class="leading-relaxed">
      08:00 客室テラスまたはレストランで「ル・パン」の焼きたてパンや新鮮地元野菜の優雅な朝食 ➔ 10:00 朝の澄んだ潮風が心地よいメリケンパークを散策し、「BE KOBE」モニュメント前で記念撮影 ➔ リニューアルした神戸ポートタワーの展望フロアから360度の大パノラマを満喫 ➔ 12:00 旧居留地の上品なレトロ建築街を散策し、老舗カフェで神戸スイーツを堪能 ➔ 生田神社へ立ち寄り新年の良縁を祈願 ➔ 14:30 神戸大丸や三宮のデパ地下で神戸スイーツやお土産を購入 ➔ 16:00 充実した冬の想い出とともに帰路へ。
    </p>
  </div>
</div>

<h2 id="comparison-table" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-rose-700 pb-2 my-8">
  📊 神戸・ウォーターフロント 厳選5ホテルの特徴・立地・宿泊目安比較一覧
</h2>

<div class="overflow-x-auto my-6">
  <table class="w-full text-left text-xs border border-stone-200 rounded-xl overflow-hidden shadow-xs">
    <thead class="bg-stone-100 text-stone-800 font-bold border-b border-stone-200">
      <tr>
        <th class="p-3">ホテル名</th>
        <th class="p-3">エリア・最寄り</th>
        <th class="p-3">楽天評価</th>
        <th class="p-3">目安料金</th>
        <th class="p-3">客室・夜景のハイライト</th>
        <th class="p-3">温泉・朝食・神戸牛ディナーの魅力</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-stone-100 text-stone-700">
      <tr class="hover:bg-stone-50">
        <td class="p-3 font-bold text-stone-900">ホテル ラ・スイート神戸ハーバーランド</td>
        <td class="p-3">みなと元町駅徒歩4分</td>
        <td class="p-3 font-bold text-rose-700">★ ${hLasuite.reviewAverage}</td>
        <td class="p-3">¥${hLasuite.hotelMinCharge?.toLocaleString()}〜</td>
        <td class="p-3">全室70㎡以上・オーシャンビュー・全室大型ジャグジー＆広大テラス</td>
        <td class="p-3">フレンチ「ル・クール神戸」＆「ル・パン」特製朝食</td>
      </tr>
      <tr class="hover:bg-stone-50">
        <td class="p-3 font-bold text-stone-900">神戸メリケンパークオリエンタルホテル</td>
        <td class="p-3">元町駅徒歩約15分</td>
        <td class="p-3 font-bold text-rose-700">★ ${hOriental.reviewAverage}</td>
        <td class="p-3">¥${hOriental.hotelMinCharge?.toLocaleString()}〜</td>
        <td class="p-3">三方を海に囲まれた客船ホテル・全室バルコニー付き</td>
        <td class="p-3">最上階14階テラスバー＆港のフレンチトースト朝食</td>
      </tr>
      <tr class="hover:bg-stone-50">
        <td class="p-3 font-bold text-stone-900">神戸みなと温泉　蓮</td>
        <td class="p-3">三宮駅シャトルバス5分</td>
        <td class="p-3 font-bold text-rose-700">★ ${hRen.reviewAverage}</td>
        <td class="p-3">¥${hRen.hotelMinCharge?.toLocaleString()}〜</td>
        <td class="p-3">270度海を望む大人の隠れ家・全室50㎡以上テラス付き</td>
        <td class="p-3">最上階展望天然温泉露天風呂＆職人握りの割烹ビュッフェ</td>
      </tr>
      <tr class="hover:bg-stone-50">
        <td class="p-3 font-bold text-stone-900">ホテルオークラ神戸</td>
        <td class="p-3">元町駅徒歩10分</td>
        <td class="p-3 font-bold text-rose-700">★ ${hOkura.reviewAverage}</td>
        <td class="p-3">¥${hOkura.hotelMinCharge?.toLocaleString()}〜</td>
        <td class="p-3">35階超高層ランドマークタワー・六甲山＆神戸港夜景</td>
        <td class="p-3">伝統フレンチ「エメラルド」＆名物ふわふわオムレツ</td>
      </tr>
      <tr class="hover:bg-stone-50">
        <td class="p-3 font-bold text-stone-900">ＡＮＡクラウンプラザホテル神戸</td>
        <td class="p-3">新幹線新神戸駅直結</td>
        <td class="p-3 font-bold text-rose-700">★ ${hAna.reviewAverage}</td>
        <td class="p-3">¥${hAna.hotelMinCharge?.toLocaleString()}〜</td>
        <td class="p-3">布引ロープウェイ徒歩3分最強立地・高層タワー夜景</td>
        <td class="p-3">36階イタリアンダイニング＆快眠プログラム</td>
      </tr>
    </tbody>
  </table>
</div>

<h2 id="faq" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-rose-700 pb-2 my-8">
  ❓ 神戸布引ハーブ園 古城のクリスマス よくある質問（FAQ）
</h2>

<div class="space-y-4 my-6 text-xs md:text-sm">
  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs space-y-1.5">
    <h3 class="font-bold text-stone-900 text-sm text-rose-950">Q1. 布引ハーブ園のクリスマスツリーの点灯時間とナイター運行日は？</h3>
    <p class="text-stone-700 leading-relaxed">
      クリスマス期間（11月中旬〜12月25日）の点灯時間は16:00から21:00まで。ロープウェイのナイター運行（上り最終20:15／下り最終21:00）は期間中の金・土・日・祝日および12月後半の平日にも実施されます。
    </p>
  </div>

  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs space-y-1.5">
    <h3 class="font-bold text-stone-900 text-sm text-rose-950">Q2. 布引ハーブ園への入場料とロープウェイ料金は？</h3>
    <p class="text-stone-700 leading-relaxed">
      ハーブ園の入場料はロープウェイ往復料金に含まれており、大人（往復）2,000円、小中学生1,000円です（17:00以降のナイター料金設定あり）。
    </p>
  </div>

  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs space-y-1.5">
    <h3 class="font-bold text-stone-900 text-sm text-rose-950">Q3. 一番おすすめの宿泊先は？</h3>
    <p class="text-stone-700 leading-relaxed">
      ハーブ園へのアクセス最優先なら新神戸駅直結の「ANAクラウンプラザホテル神戸」、全室ジャグジーと最高峰の記念日ステイなら「ホテル ラ・スイート神戸ハーバーランド」、天然温泉と絶品料理なら「神戸みなと温泉 蓮」が圧倒的におすすめです。
    </p>
  </div>
</div>

<h2 id="internal-links" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-rose-700 pb-2 my-8">
  📌 あわせて読みたい兵庫・関西の冬夜景＆名湯特集
</h2>
<div class="p-6 rounded-3xl bg-rose-50/70 border border-rose-200 space-y-3 my-6">
  <p class="text-xs text-rose-900 font-bold mb-2">当サイトでは、神戸をはじめ関西の絶景イルミネーションや名湯・高級宿を満喫できる特集記事を多数公開しています。</p>
  <ul class="text-xs text-rose-900 space-y-2 list-disc list-inside">
    <li><a href="/prefectures/hyogo/" class="underline font-bold hover:text-rose-700">兵庫県の温泉旅館・高級ホテル＆人気観光名所完全ガイド</a></li>
    <li><a href="/posts/winter-hyogo-kobe-luminarie-arima-onsen-kinsen-hotels-guide" class="underline hover:text-rose-700">神戸ルミナリエ＆有馬温泉金泉・神戸牛会席名門旅館ガイド</a></li>
    <li><a href="/posts/winter-osaka-hikari-renaissance-nakanoshima-midosuji-hotels-guide" class="underline hover:text-rose-700">OSAKA光のルネサンス2026＆御堂筋イルミネーション名門ホテルガイド</a></li>
    <li><a href="/posts/winter-family-hyogo-tango-silk-onsen-crab-guide" class="underline hover:text-rose-700">兵庫・丹後カニ尽くし会席＆美肌温泉リゾートホテル特集</a></li>
    <li><a href="/posts/awajishima-3year-torafugu-suisenkyo-uzushio-winter-guide" class="underline hover:text-rose-700">淡路島3年とらふぐ＆水仙郷・うずしお冬絶景温泉宿ガイド</a></li>
  </ul>
</div>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "${title}",
  "description": "${description}",
  "datePublished": "${date}",
  "dateModified": "${date}",
  "author": {
    "@type": "Organization",
    "name": "クランドトラベル（Croud Travel）編集部"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Croud Travel",
    "logo": {
      "@type": "ImageObject",
      "url": "https://croud-travel.pages.dev/og-image.jpg"
    }
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://croud-travel.pages.dev/posts/${slug}"
  }
}
</script>
`;

  const postData = {
    id: slug,
    slug,
    title,
    description,
    date,
    prefecture,
    area,
    category: "特集",
    tags: [
      "神戸布引ハーブ園",
      "古城のクリスマス",
      "ホテル ラ・スイート神戸ハーバーランド",
      "神戸メリケンパークオリエンタルホテル",
      "神戸みなと温泉 蓮",
      "ホテルオークラ神戸",
      "ANAクラウンプラザホテル神戸",
      "神戸ポートタワー",
      "クリスマスマーケット",
      "神戸牛"
    ],
    hotelCount: 5,
    minPrice: Math.min(...hotels.map(h => h.hotelMinCharge || 99999)),
    review: reviewHtml,
    hotels: hotels
  };

  const noteMarkdown = `---
title: "${title}"
slug: "${slug}"
date: "${date}"
prefecture: "${prefecture}"
area: "${area}"
tags: ${JSON.stringify(postData.tags)}
---

# ${title}

2026年11月中旬〜12月25日開催の「神戸布引ハーブ園 古城のクリスマス」と神戸ウォーターフロントの冬夜景を徹底解説！

新神戸からロープウェイで登る標高400mの山頂古城広場にそびえ立つ高さ約25mの天然モミの木巨大ツリー、本場ドイツ直輸入のクリスマスマーケット、眼下に広がる1,000万ドルの神戸夜景を網羅。

さらにリニューアルした神戸ポートタワーやメリケンパークの冬イルミネーション、ホテル ラ・スイート神戸ハーバーランドや神戸みなと温泉 蓮など、全室テラス付きオーシャンビューや天然温泉露天風呂から港夜景を独占し、至高の神戸牛を堪能できる厳選名宿5選をご紹介します。

---

## 💡 現地調査に基づくプロの指南！布引ハーブ園＆神戸夜景攻略マニュアル

- **ロープウェイ夕暮れ乗車（16:30〜17:00）:** 茜色の夕景から1000万ドルの夜景へと変わるマジックアワーをゴンドラから一望。
- **展望プラザ 高さ25mモミの木ツリー:** 中世ドイツのヴァルトブルク古城門前で輝く日本最大級の天然生木ツリー。
- **標高400mの六甲颪対策:** 市街地より気温が約3〜4度低く冷たい山風が吹くため、厚手の手袋・マフラー・カイロ必携。
- **港町の名宿で温まる:** ホテル ラ・スイート神戸ハーバーランドの大型ジャグジーや、神戸みなと温泉 蓮の展望露天風呂で温まりながら夜景を独占。

---

## 🏨 旅の目的に応じて選ぶ！神戸・ウォーターフロントの厳選名ホテル5選

### 1. ホテル ラ・スイート神戸ハーバーランド（兵庫県神戸市中央区波止場町）
- **特徴:** 全室70㎡以上・オーシャンビューテラス付き。海を望む大型ジャグジーバス。「ル・パン」特製朝食。
- **宿泊目安:** 1名 ¥${hLasuite.hotelMinCharge?.toLocaleString()}〜
- **楽天トラベル評価:** ⭐ ${hLasuite.reviewAverage}（1034件）
- 👉 [ホテル ラ・スイート神戸ハーバーランドの空室・宿泊プランを見る](${hLasuite.affiliateUrl})

### 2. 神戸メリケンパークオリエンタルホテル（兵庫県神戸市中央区波止場町）
- **特徴:** 三方を海に囲まれた白い客船ホテル。全室バルコニー付き。ポートタワーとモザイク観覧車夜景を一望。
- **宿泊目安:** 1名 ¥${hOriental.hotelMinCharge?.toLocaleString()}〜
- **楽天トラベル評価:** ⭐ ${hOriental.reviewAverage}（9921件）
- 👉 [神戸メリケンパークオリエンタルホテルの空室・宿泊プランを見る](${hOriental.affiliateUrl})

### 3. 神戸みなと温泉 蓮（兵庫県神戸市中央区新港町）
- **特徴:** 270度海に囲まれた天然温泉リゾート。最上階展望露天風呂。職人が目の前で調理する贅沢な割烹ビュッフェ。
- **宿泊目安:** 1名 ¥${hRen.hotelMinCharge?.toLocaleString()}〜
- **楽天トラベル評価:** ⭐ ${hRen.reviewAverage}（2632件）
- 👉 [神戸みなと温泉 蓮の空室・宿泊プランを見る](${hRen.affiliateUrl})

### 4. ホテルオークラ神戸（兵庫県神戸市中央区波止場町）
- **特徴:** メリケンパーク正面にそびえる35階ランドマークタワー。名門オークラの伝統ホスピタリティと美食フレンチ。
- **宿泊目安:** 1名 ¥${hOkura.hotelMinCharge?.toLocaleString()}〜
- **楽天トラベル評価:** ⭐ ${hOkura.reviewAverage}（11394件）
- 👉 [ホテルオークラ神戸の空室・宿泊プランを見る](${hOkura.affiliateUrl})

### 5. ANAクラウンプラザホテル神戸（兵庫県神戸市中央区北野町）
- **特徴:** 新幹線・新神戸駅直結。布引ハーブ園ロープウェイ乗り場へ徒歩3分の最強立地。36階イタリアンダイニング。
- **宿泊目安:** 1名 ¥${hAna.hotelMinCharge?.toLocaleString()}〜
- **楽天トラベル評価:** ⭐ ${hAna.reviewAverage}（6460件）
- 👉 [ANAクラウンプラザホテル神戸の空室・宿泊プランを見る](${hAna.affiliateUrl})

---

## 📸 宿の近隣観光地ガイド（Wikipedia公式データ連携）

- **神戸布引ロープウェイ:** ${wRopeway.extract || '神戸布引ロープウェイは、新神戸駅から神戸布引ハーブ園を結ぶ索道。空中散歩を楽しみながら布引の滝や神戸港を一望できます。'}
- **神戸ポートタワー:** ${wPortTower.extract || '神戸ポートタワーは、和楽器の鼓を模した優美な形状から「鉄塔の美女」と称されるランドマーク。2024年に大規模リニューアルオープンしました。'}
- **メリケンパーク:** ${wMeriken.extract || 'メリケンパークは、神戸海洋博物館やBE KOBEモニュメントが建ち並ぶ神戸観光の定番ウォーターフロント公園です。'}
- **生田神社:** ${wIkuta.extract || '生田神社は、「神戸」の地名発祥の地とされる古社。縁結びの名所として初詣にも多くの参拝者が訪れます。'}

---

## 🗺️ 神戸を満喫する 1泊2日モデルコース

- **1日目:** 新神戸駅到着 ➔ ロープウェイで布引ハーブ園へ ➔ 16:00 高さ25mモミの木ツリー点灯＆ドイツクリスマスマーケットでグリューワイン ➔ 18:30 ナイターロープウェイで1000万ドルの夜景を見ながら下山 ➔ ハーバーランドの宿へチェックイン ➔ 神戸牛ディナー ➔ 部屋のジャグジーや露天風呂で温まる
- **2日目:** 海見えテラス朝食 ➔ メリケンパークで「BE KOBE」記念撮影 ➔ ポートタワー展望 ➔ 旧居留地でスイーツお買い物 ➔ 帰路へ

---

## ❓ よくある質問（FAQ）

**Q1. 布引ハーブ園のツリー点灯時間は？**  
A. 16:00から21:00まで点灯します。

**Q2. ナイターロープウェイは何時まで？**  
A. 上り最終20:15、下り最終21:00まで運行されます。

**Q3. 一番おすすめの宿泊先は？**  
A. 部屋のジャグジーからポートタワー夜景を見るなら「ホテル ラ・スイート神戸ハーバーランド」、天然温泉露天風呂なら「神戸みなと温泉 蓮」が最高です。

---

🔗 **本編の詳細な解説・料金比較・アクセス情報は公式サイトで公開中！**  
👉 [【神戸】神戸布引ハーブ園「古城のクリスマス2026」＆神戸港ウォーターフロント冬夜景完全攻略ガイド本編はこちら](https://croud-travel.pages.dev/posts/${slug})
`;

  return { postData, noteMarkdown };
};
