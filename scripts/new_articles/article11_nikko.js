// scripts/new_articles/article11_nikko.js
module.exports = function buildArticle11(themeData) {
  const hotels = themeData.hotels;
  const wiki = themeData.wiki;

  const slug = "autumn-nikko-momiji-lightup-toshogu-onsen-hotels-guide";
  const title = "【栃木・日光】日光東照宮「秋のライトアップ2026」＆中禅寺湖の錦秋完全攻略！世界遺産の社寺紅葉と日光湯元・鬼怒川の名湯を堪能する厳選温泉宿5選";
  const description = "10月下旬の奥日光・中禅寺湖から11月中旬の世界遺産・日光山内へと紅葉前線が駆け下りる秋の日光。世界遺産登録27周年を迎える日光東照宮や日光山輪王寺・逍遥園の夜間ライトアップでは、黄金に輝く社寺建築と燃え立つモミジが幻想的な錦秋絵巻を織り成します。いろは坂の渋滞回避ルート、早朝・夜間の寒暖差対策、湯波料理の隠れた名店、日光湯元や鬼怒川の名湯を満喫できる厳選5宿を徹底解説。";
  const date = "2026-11-01";
  const prefecture = "栃木県";
  const area = "日光・中禅寺湖・鬼怒川";

  const hSenhime = hotels.find(h => h.hotelNo === 41382) || hotels[0];
  const hKanaya = hotels.find(h => h.hotelNo === 28760) || hotels[1];
  const hHoshinoyado = hotels.find(h => h.hotelNo === 41725) || hotels[2];
  const hMori = hotels.find(h => h.hotelNo === 15755) || hotels[3];
  const hKinugawa = hotels.find(h => h.hotelNo === 28440) || hotels[4];

  const wToshogu = wiki["日光東照宮"] || {};
  const wChuzenji = wiki["中禅寺湖"] || {};
  const wKegon = wiki["華厳滝"] || {};
  const wFutarasan = wiki["日光二荒山神社"] || {};

  const reviewHtml = `
<div class="my-6 p-4 rounded-2xl bg-gradient-to-r from-red-950 via-amber-900 to-stone-900 text-white shadow-md flex flex-col sm:flex-row items-center justify-between gap-3">
  <div class="space-y-0.5 text-center sm:text-left">
    <div class="flex items-center justify-center sm:justify-start gap-1.5 text-amber-300 font-extrabold text-xs">
      <span>🍁</span><span>2026年 秋の日光紅葉ライトアップ速報</span>
    </div>
    <p class="text-xs text-stone-200">
      11月上旬から中旬は日光山内（東照宮・輪王寺逍遥園）の紅葉ライトアップが最盛期！いろは坂・日光宇都宮道路の下り線は大渋滞となるため、社寺徒歩圏または奥日光・鬼怒川の名宿を拠点にした早朝行動が攻略の要。
    </p>
  </div>
  <a href="${hSenhime.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="shrink-0 px-4 py-2 bg-amber-500 hover:bg-amber-400 text-stone-950 font-black text-xs rounded-xl shadow transition transform hover:scale-105">
    🍁 日光千姫物語の空室・プランを見る →
  </a>
</div>

<h2 id="intro" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-red-700 pb-2 mb-4">
  漆黒の夜空に浮かび上がる世界遺産と、標高差が織りなす立体的な紅葉絵巻
</h2>
<p class="text-sm md:text-base text-stone-700 leading-relaxed mb-4">
  標高約2,500メートルの男体山を仰ぐ奥日光から、標高約600メートルの日光山内まで、およそ2,000メートルもの標高差を誇る栃木県・日光。この地形的な高低差こそが、日本有数の長い紅葉シーズンを創出する秘密です。10月上旬の戦場ヶ原の草紅葉から始まり、竜頭の滝、湯ノ湖、中禅寺湖畔を経て、11月に入ると舞台は世界遺産「日光の社寺」へと移ります。
</p>
<p class="text-sm md:text-base text-stone-700 leading-relaxed mb-6">
  特に11月上旬から中旬にかけて開催される「日光山輪王寺 逍遥園」の夜間ライトアップや日光東照宮周辺の秋の夜間演出は、日光観光の最大のクライマックス。数百年の風雪に耐えた巨木杉の並木の合間から、漆塗り・金箔・彫刻が施された国宝社寺が艶やかに照らし出され、池面に映り込む逆さモミジの深紅は息を呑む静謐な美しさを湛えます。昼の陽光に輝く社寺と、冷涼な夜気の中で見る幻想的な光の世界。双方を余すところなく味わい尽くすための実践的ガイドをお届けします。
</p>

<h2 id="event-guide" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-red-700 pb-2 my-6">
  🎪 2026秋の日光山内ライトアップ見どころ＆いろは坂渋滞完全回避術
</h2>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
  <div class="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm space-y-3">
    <div class="flex items-center gap-2 border-b border-stone-100 pb-3">
      <span class="px-2.5 py-1 bg-red-100 text-red-800 font-extrabold text-xs rounded-lg">鑑賞ハイライト</span>
      <h3 class="text-base font-bold text-stone-900">日光山内＆中禅寺湖の秋景ベストポイント</h3>
    </div>
    <div class="text-xs text-stone-700 space-y-2 leading-relaxed">
      <p>① <strong>日光山輪王寺 逍遥園ライトアップ:</strong> 江戸時代初期に作庭された池泉回遊式庭園。園内の大小数十本のモミジが色とりどりに照らされ、池の水面に鮮烈に反射します。日没（16:00頃）から20:00までの点灯で、閉園間際の19:00以降が比較的ゆったり歩けるゴールデンタイムです。</p>
      <p>② <strong>日光東照宮・表参道杉並木と陽明門:</strong> 昼間の陽光を浴びる国宝・陽明門の極彩色彫刻と、参道沿いのモミジの共演。朝8:00の開門直後は観光バスが到着する前で、朝露に濡れる静寂の神域を体感できます。</p>
      <p>③ <strong>中禅寺湖スカイライン・半月山展望台:</strong> 八丁出島を眼下に見下ろし、男体山と青く澄んだ湖水が一望できる日光屈指の絶景パノラマ。11月上旬の午前中、順光になる時間帯のドライブが最も鮮明な写真を残せます。</p>
      <p>④ <strong>華厳滝と明智平パノラマ:</strong> 明智平ロープウェイ展望台から望む、紅葉の岸壁を一気に落下する日本三名瀑・華厳滝。午後は逆光になりやすいため、午前10時台までの訪問がベストです。</p>
    </div>
  </div>

  <div class="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm space-y-3">
    <div class="flex items-center gap-2 border-b border-stone-100 pb-3">
      <span class="px-2.5 py-1 bg-amber-100 text-amber-800 font-extrabold text-xs rounded-lg">渋滞＆寒さ対策</span>
      <h3 class="text-base font-bold text-stone-900">いろは坂攻略のタイムテーブルと防寒の鉄則</h3>
    </div>
    <div class="text-xs text-stone-700 space-y-2 leading-relaxed">
      <p><strong>【いろは坂の上り・下り渋滞】</strong> 11月の週末、第二いろは坂（上り）は朝7時を過ぎると馬返付近から渋滞が始まり、中禅寺湖まで通常20分のところ2〜3時間要することがあります。中禅寺湖方面へ向かうなら「朝7時前に馬返を通過」するか、日光山内の宿にチェックインして電車・バスの優先レーンや徒歩移動を組み合わせるのが賢明です。</p>
      <p><strong>【奥日光・社寺周辺の気温差】</strong> 標高差が大きいため、日光駅周辺が10度でも、中禅寺湖や湯元では氷点下近くまで下がる日があります。11月の夜間ライトアップ鑑賞時は、厚手のダウンジャケット、手袋、マフラーが必須です。</p>
      <p><strong>【タイヤ事情】</strong> 11月中旬以降、奥日光（湯元・中禅寺湖周辺）では降雪や路面凍結が発生することがあります。車で中禅寺湖以遠へ向かう場合はスタッドレスタイヤの装着、またはチェーンの携行を強く推奨します。</p>
    </div>
  </div>
</div>

<h2 id="hotel-selection" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-red-700 pb-2 my-8">
  🏨 世界遺産と名湯を満喫！日光・奥日光・鬼怒川の厳選宿5選
</h2>

<!-- 宿1: 日光千姫物語 -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-rose-100 text-rose-900 font-black text-xs rounded-full">日光東照宮徒歩10分・女性に優しい上質和風旅館</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">1. 日光温泉 日光千姫物語（栃木県日光市安川町）</h3>
    </div>
    <span class="px-3 py-1.5 bg-rose-50 border border-rose-300 text-rose-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 ${hSenhime.reviewAverage}（${hSenhime.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hSenhime.hotelImageUrl}" alt="${hSenhime.hotelName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hSenhime.roomImageUrl || hSenhime.hotelImageUrl}" alt="${hSenhime.hotelName} 客室" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs text-stone-700 leading-relaxed">
      <p class="text-sm font-semibold text-stone-800">日光東照宮・輪王寺へ徒歩圏。大谷川のせせらぎと豊かな温泉に癒やされる純和風の宿</p>
      <p>「日光千姫物語」は、世界遺産・日光の社寺まで徒歩約10分という抜群の好立地に位置する純和風温泉旅館。紅葉ライトアップ期間中も、宿に車を停めたまま徒歩で夜間拝観に出かけられるフットワークの良さが最大の魅力です。館内には広々とした大浴場や開放的な庭園露天風呂、ミストサウナを備え、晩秋の散策で冷えた身体を芯からじんわりと温めてくれます。夕食は日光名物の引き上げ湯波やとちぎ和牛、旬の地場野菜を丁寧に盛り込んだ本格懐石。繊細なおもてなしと落ち着いた客室で、大人の紅葉旅にこれ以上ない優雅な寛ぎを約束してくれます。</p>
      <div class="p-3 bg-stone-50 rounded-xl space-y-1 border border-stone-200">
        <p><strong>【所在地】</strong> ${hSenhime.address1}${hSenhime.address2}</p>
        <p><strong>【アクセス】</strong> ${hSenhime.access}</p>
        <p><strong>【温泉・施設】</strong> 露天風呂、サウナ、エステサロン、ラウンジ、売店、無料送迎バスあり。</p>
      </div>
      <div class="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
        <span class="text-stone-900 font-extrabold text-sm">宿泊目安: 1名 ¥${(hSenhime.hotelMinCharge || 22000).toLocaleString()}〜</span>
        <a href="${hSenhime.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="w-full sm:w-auto px-5 py-2.5 bg-rose-600 hover:bg-rose-500 text-white font-black text-xs rounded-xl shadow transition text-center">
          日光千姫物語の宿泊プラン・空室を見る →
        </a>
      </div>
    </div>
  </div>
</div>

<!-- 宿2: 日光金谷ホテル -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-amber-100 text-amber-900 font-black text-xs rounded-full">創業明治6年・現存する日本最古のリゾートクラシックホテル</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">2. 日光金谷ホテル（栃木県日光市上鉢石町）</h3>
    </div>
    <span class="px-3 py-1.5 bg-amber-50 border border-amber-300 text-amber-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 ${hKanaya.reviewAverage}（${hKanaya.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hKanaya.hotelImageUrl}" alt="${hKanaya.hotelName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hKanaya.roomImageUrl || hKanaya.hotelImageUrl}" alt="${hKanaya.hotelName} 客室" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs text-stone-700 leading-relaxed">
      <p class="text-sm font-semibold text-stone-800">アインシュタインやヘレン・ケラーも愛した、和洋折衷の重厚な歴史空間と伝統フレンチ</p>
      <p>1873年（明治6年）の創業以来、アインシュタインやヘレン・ケラーなど世界中の要人を迎えてきた日本最古のリゾートホテル。神橋を渡った丘の上に佇み、館内のいたるところに社寺建築を彷彿とさせる彫刻や格天井、ステンドグラスが残されています。客室はクラシカルな気品に満ち、窓からはモミジと杉の古木が織りなす秋の景観を一望。メインダイニングで供される伝統の「虹鱒のソテー金谷風」や百年ライスカレーは、今なお色褪せない名ホテル伝統の味わいです。東照宮や神橋周辺の紅葉散策の拠点として、一生に一度は泊まりたい特別な存在です。</p>
      <div class="p-3 bg-stone-50 rounded-xl space-y-1 border border-stone-200">
        <p><strong>【所在地】</strong> ${hKanaya.address1}${hKanaya.address2}</p>
        <p><strong>【アクセス】</strong> ${hKanaya.access}</p>
        <p><strong>【温泉・施設】</strong> メインダイニングルーム、バー「デイサイト」、ギフトショップ、無料送迎バスあり。</p>
      </div>
      <div class="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
        <span class="text-stone-900 font-extrabold text-sm">宿泊目安: 1名 ¥${(hKanaya.hotelMinCharge || 26000).toLocaleString()}〜</span>
        <a href="${hKanaya.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="w-full sm:w-auto px-5 py-2.5 bg-amber-600 hover:bg-amber-500 text-white font-black text-xs rounded-xl shadow transition text-center">
          日光金谷ホテルの宿泊プラン・空室を見る →
        </a>
      </div>
    </div>
  </div>
</div>

<!-- 宿3: 日光 星の宿 -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-emerald-100 text-emerald-900 font-black text-xs rounded-full">神橋高台・日本庭園の四季と名物引き上げ湯波</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">3. 日光温泉 日光 星の宿（栃木県日光市上鉢石町）</h3>
    </div>
    <span class="px-3 py-1.5 bg-emerald-50 border border-emerald-300 text-emerald-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 ${hHoshinoyado.reviewAverage}（${hHoshinoyado.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hHoshinoyado.hotelImageUrl}" alt="${hHoshinoyado.hotelName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hHoshinoyado.roomImageUrl || hHoshinoyado.hotelImageUrl}" alt="${hHoshinoyado.hotelName} 客室" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs text-stone-700 leading-relaxed">
      <p class="text-sm font-semibold text-stone-800">神橋を見下ろす高台に佇む隠れ家。四季折々の日本庭園を望む檜風呂とこだわり料理</p>
      <p>「日光 星の宿」は、日光の表玄関である「神橋」から坂を少し上った閑静な高台に佇む温泉旅館。自慢の日本庭園にはモミジやツツジが生い茂り、秋には鮮やかな紅葉が庭園全体を染め上げます。大浴場は檜の香りに包まれた心地よい空間で、美肌成分を含む日光温泉のやわらかな湯が疲れた旅人を優しく包み込みます。料理は創業から受け継がれる名物の「引き上げ湯波」をはじめ、日光の大自然が育んだ川魚や旬の味覚をふんだんに取り入れた京風会席。社寺への散策も徒歩数分と至便で、静かに秋の情緒に浸りたい方に最適です。</p>
      <div class="p-3 bg-stone-50 rounded-xl space-y-1 border border-stone-200">
        <p><strong>【所在地】</strong> ${hHoshinoyado.address1}${hHoshinoyado.address2}</p>
        <p><strong>【アクセス】</strong> ${hHoshinoyado.access}</p>
        <p><strong>【温泉・施設】</strong> 檜大浴場、日本庭園、ラウンジ、宴会場、駐車場完備。</p>
      </div>
      <div class="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
        <span class="text-stone-900 font-extrabold text-sm">宿泊目安: 1名 ¥${(hHoshinoyado.hotelMinCharge || 18000).toLocaleString()}〜</span>
        <a href="${hHoshinoyado.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="w-full sm:w-auto px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs rounded-xl shadow transition text-center">
          日光 星の宿の宿泊プラン・空室を見る →
        </a>
      </div>
    </div>
  </div>
</div>

<!-- 宿4: 奥日光森のホテル -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-teal-100 text-teal-900 font-black text-xs rounded-full">標高1,500m・源泉かけ流し乳白色硫黄泉の大露天風呂</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">4. 日光湯元温泉 奥日光 森のホテル（栃木県日光市湯元）</h3>
    </div>
    <span class="px-3 py-1.5 bg-teal-50 border border-teal-300 text-teal-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 ${hMori.reviewAverage}（${hMori.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hMori.hotelImageUrl}" alt="${hMori.hotelName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hMori.roomImageUrl || hMori.hotelImageUrl}" alt="${hMori.hotelName} 客室" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs text-stone-700 leading-relaxed">
      <p class="text-sm font-semibold text-stone-800">奥日光・湯ノ湖畔の静寂に抱かれた北欧風リゾート。国内屈指の濃厚なにごり湯を五感で堪能</p>
      <p>日光の最奥部、標高約1,500メートルの湯ノ湖畔に位置する「奥日光 森のホテル」は、木の温もりに満ちた北欧風の隠れ家リゾート。最大の自慢は、日光湯元温泉の源泉から直接引き湯される乳白色の濃厚な硫黄泉です。地域最大級を誇る大露天風呂「森の湯」に身を委ねれば、立ち上る湯けむりの向こうにカラマツの黄葉や初冬の樹氷が揺らめき、至福のリラクゼーションを体感できます。夕食はとちぎ牛や高原野菜、岩魚など奥日光ならではの滋味を盛り込んだ創作会席。いろは坂の上部に位置するため、翌朝早く混雑のない中禅寺湖や戦場ヶ原を独占できるのも強みです。</p>
      <div class="p-3 bg-stone-50 rounded-xl space-y-1 border border-stone-200">
        <p><strong>【所在地】</strong> ${hMori.address1}${hMori.address2}</p>
        <p><strong>【アクセス】</strong> ${hMori.access}</p>
        <p><strong>【温泉・施設】</strong> 源泉かけ流し大露天風呂・内湯、足湯テラス、薪暖炉ラウンジ。</p>
      </div>
      <div class="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
        <span class="text-stone-900 font-extrabold text-sm">宿泊目安: 1名 ¥${(hMori.hotelMinCharge || 24000).toLocaleString()}〜</span>
        <a href="${hMori.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="w-full sm:w-auto px-5 py-2.5 bg-teal-600 hover:bg-teal-500 text-white font-black text-xs rounded-xl shadow transition text-center">
          奥日光 森のホテルの宿泊プラン・空室を見る →
        </a>
      </div>
    </div>
  </div>
</div>

<!-- 宿5: 鬼怒川金谷ホテル -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-indigo-100 text-indigo-900 font-black text-xs rounded-full">渓谷美とジョン・カナヤの美学・全室リバーフロントの最高峰</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">5. 鬼怒川金谷ホテル（栃木県日光市鬼怒川温泉大原）</h3>
    </div>
    <span class="px-3 py-1.5 bg-indigo-50 border border-indigo-300 text-indigo-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 ${hKinugawa.reviewAverage}（${hKinugawa.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hKinugawa.hotelImageUrl}" alt="${hKinugawa.hotelName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hKinugawa.roomImageUrl || hKinugawa.hotelImageUrl}" alt="${hKinugawa.hotelName} 客室" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs text-stone-700 leading-relaxed">
      <p class="text-sm font-semibold text-stone-800">鬼怒川渓谷の紅葉岸壁を見下ろすラグジュアリーリゾート。「和敬洋讃」の美食と極上空間</p>
      <p>「鬼怒川金谷ホテル」は、金谷ホテルの創業者精神を受け継ぎ、ダンディズムの美学を結実させた最高峰の温泉リゾート旅館。全客室が鬼怒川渓谷に面したリバーフロントテラス付きで、秋には赤や黄に燃え立つ渓谷の絶壁が目の前に広がります。樹齢2000年の古代檜を用いた大浴場や、鬼怒川の川音を聞く白御影石の露天風呂は至福のひととき。夕食は創業者の食哲学「和敬洋讃」を体現した金谷流懐石で、伝統の味に現代フランス料理の技法を融合させた至極の品々を堪能できます。食後はシガーバーやショコラバーで優雅な夜の余韻に浸れます。</p>
      <div class="p-3 bg-stone-50 rounded-xl space-y-1 border border-stone-200">
        <p><strong>【所在地】</strong> ${hKinugawa.address1}${hKinugawa.address2}</p>
        <p><strong>【アクセス】</strong> ${hKinugawa.access}</p>
        <p><strong>【温泉・施設】</strong> 古代檜大浴場、露天風呂、ショコラバー、シガーサロン、展望デッキテラス。</p>
      </div>
      <div class="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
        <span class="text-stone-900 font-extrabold text-sm">宿泊目安: 1名 ¥${(hKinugawa.hotelMinCharge || 45000).toLocaleString()}〜</span>
        <a href="${hKinugawa.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="w-full sm:w-auto px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-black text-xs rounded-xl shadow transition text-center">
          鬼怒川金谷ホテルの宿泊プラン・空室を見る →
        </a>
      </div>
    </div>
  </div>
</div>

<h2 id="nearby-spots" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-red-700 pb-2 my-8">
  📸 宿の近隣観光地ガイド（Wikipedia公式データ連携）
</h2>
<p class="text-xs text-stone-600 mb-6">
  宿を拠点に巡る日光の世界遺産社寺と奥日光の雄大な自然景勝地。所要時間や見どころを事前把握して効率的な秋の散策をお楽しみください。
</p>

<div class="space-y-6 my-6">
  <!-- スポット1: 日光東照宮 -->
  <div class="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm">
    <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
      <div class="md:col-span-5">
        <img src="${wToshogu.thumbnail || hSenhime.hotelImageUrl}" alt="日光東照宮" class="w-full h-48 object-cover rounded-2xl border border-stone-200" loading="lazy" />
      </div>
      <div class="md:col-span-7 space-y-2 text-xs text-stone-700 leading-relaxed">
        <span class="inline-block px-2.5 py-0.5 bg-red-100 text-red-800 font-bold text-[11px] rounded-md">⛩️ 国宝・世界文化遺産</span>
        <h3 class="text-base font-bold text-stone-900">日光東照宮（栃木県日光市山内）</h3>
        <p>${wToshogu.extract}</p>
        <p class="text-stone-500"><strong>【宿からの移動】</strong> 日光千姫物語・日光金谷ホテルから徒歩約10〜15分。朝一番の拝観なら混雑を避けて陽明門の彫刻を間近でじっくり鑑賞可能です。</p>
      </div>
    </div>
  </div>

  <!-- スポット2: 中禅寺湖 -->
  <div class="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm">
    <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
      <div class="md:col-span-5">
        <img src="${wChuzenji.thumbnail || hMori.hotelImageUrl}" alt="中禅寺湖" class="w-full h-48 object-cover rounded-2xl border border-stone-200" loading="lazy" />
      </div>
      <div class="md:col-span-7 space-y-2 text-xs text-stone-700 leading-relaxed">
        <span class="inline-block px-2.5 py-0.5 bg-blue-100 text-blue-800 font-bold text-[11px] rounded-md">🌊 日本屈指の高所カルデラ湖</span>
        <h3 class="text-base font-bold text-stone-900">中禅寺湖（栃木県日光市中宮祠）</h3>
        <p>${wChuzenji.extract}</p>
        <p class="text-stone-500"><strong>【宿からの移動】</strong> 日光市街からいろは坂経由で車で約30分（奥日光 森のホテルからは車で約15分）。中禅寺湖機船の遊覧船クルーズから望む湖畔の紅葉は絶景です。</p>
      </div>
    </div>
  </div>

  <!-- スポット3: 華厳滝 -->
  <div class="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm">
    <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
      <div class="md:col-span-5">
        <img src="${wKegon.thumbnail || hKanaya.hotelImageUrl}" alt="華厳滝" class="w-full h-48 object-cover rounded-2xl border border-stone-200" loading="lazy" />
      </div>
      <div class="md:col-span-7 space-y-2 text-xs text-stone-700 leading-relaxed">
        <span class="inline-block px-2.5 py-0.5 bg-emerald-100 text-emerald-800 font-bold text-[11px] rounded-md">💧 日本三名瀑・落差97mの轟音</span>
        <h3 class="text-base font-bold text-stone-900">華厳滝（栃木県日光市中宮祠）</h3>
        <p>${wKegon.extract}</p>
        <p class="text-stone-500"><strong>【宿からの移動】</strong> 中禅寺湖畔の鳥居付近から徒歩5分。エレベーターで滝壺近くの観瀑台へ降りると、紅葉の岩壁と爆音の迫力ある飛沫を体感できます。</p>
      </div>
    </div>
  </div>

  <!-- スポット4: 日光二荒山神社 -->
  <div class="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm">
    <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
      <div class="md:col-span-5">
        <img src="${wFutarasan.thumbnail || hHoshinoyado.hotelImageUrl}" alt="日光二荒山神社" class="w-full h-48 object-cover rounded-2xl border border-stone-200" loading="lazy" />
      </div>
      <div class="md:col-span-7 space-y-2 text-xs text-stone-700 leading-relaxed">
        <span class="inline-block px-2.5 py-0.5 bg-amber-100 text-amber-800 font-bold text-[11px] rounded-md">⛩️ 下野国一之宮・縁結びの古社</span>
        <h3 class="text-base font-bold text-stone-900">日光二荒山神社（栃木県日光市山内）</h3>
        <p>${wFutarasan.extract}</p>
        <p class="text-stone-500"><strong>【宿からの移動】</strong> 日光東照宮の西隣に鎮座、日光千姫物語から徒歩約12分。大国殿の良縁成就祈願や境内モミジの散策路が秋の参拝者に人気です。</p>
      </div>
    </div>
  </div>
</div>

<h2 id="model-course" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-red-700 pb-2 my-8">
  🗺️ 日光山内ライトアップ＆奥日光紅葉 1泊2日満喫モデルコース
</h2>
<div class="my-6 p-6 rounded-3xl bg-gradient-to-br from-red-50/60 to-amber-50/40 border border-red-200 space-y-4 text-xs text-stone-700 leading-relaxed">
  <div class="space-y-1">
    <h3 class="font-bold text-sm text-stone-900">【1日目】早朝出発で奥日光中禅寺湖へ・夜は日光山内ライトアップ散策</h3>
    <p>午前8:00に日光宇都宮道路を抜けて第二いろは坂をスムーズに上り、中禅寺湖に到着。遊覧船クルーズで八丁出島の紅葉を湖上鑑賞し、華厳滝で大迫力の瀑布を体感。昼食は中禅寺湖畔の洋食レストランで日光ヒメマスの塩焼きやパスタを堪能。午後は第一いろは坂を下って日光山内へ向かい、14:30に「日光千姫物語」または「日光金谷ホテル」へ早期チェックイン。夕方16:30の日没とともに輪王寺・逍遥園へ歩いて向かい、幻想的な池泉回遊式庭園のライトアップを鑑賞。19:00に宿へ戻り、名物引き上げ湯波と温泉露天風呂で身体をじっくり温める。</p>
  </div>
  <div class="space-y-1">
    <h3 class="font-bold text-sm text-stone-900">【2日目】朝一番の日光東照宮拝観と鬼怒川温泉・ライン下り</h3>
    <p>朝食前の7:30、宿から朝露の残る神橋や杉並木を散策。8:00の開門に合わせて日光東照宮へ入場し、混雑のない静寂のなか国宝・陽明門や眠り猫、奥宮をじっくり参拝。宿をチェックアウト後、車で鬼怒川方面へ移動（約30分）。鬼怒川温泉ロープウェイでおさるの山と紅葉の渓谷パノラマを見晴らし、午後は鬼怒川ライン下りまたは名湯の日帰り湯を堪能して帰路へ。</p>
  </div>
</div>

<h2 id="faq" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-red-700 pb-2 my-8">
  ❓ よくある質問（FAQ）
</h2>
<div class="space-y-3 my-6 text-xs text-stone-800">
  <div class="p-4 rounded-2xl bg-white border border-stone-200 space-y-1">
    <h3 class="font-bold text-stone-900">Q1. 輪王寺逍遥園のライトアップは何時までですか？入場料は必要ですか？</h3>
    <p class="text-stone-600">A. 例年10月下旬から11月中旬にかけて日没（16:00〜17:00頃）から20:00（最終入場19:30）まで開催されます。逍遥園の夜間拝観料は大人500円程度で、昼夜入替制です。17時〜18時は点灯直後で混み合うため、落ち着いて撮影したい場合は18:30以降がおすすめです。</p>
  </div>
  <div class="p-4 rounded-2xl bg-white border border-stone-200 space-y-1">
    <h3 class="font-bold text-stone-900">Q2. いろは坂の渋滞を避けるベストな移動時間帯は？</h3>
    <p class="text-stone-600">A. 紅葉最盛期の週末は、第二いろは坂（上り）が午前7時台から11時頃まで、第一いろは坂（下り）が14時頃から18時頃まで激しい渋滞となります。上りは午前7時前、下りは13時前または18時半以降に通過する計画を立てると大幅な時間短縮になります。</p>
  </div>
  <div class="p-4 rounded-2xl bg-white border border-stone-200 space-y-1">
    <h3 class="font-bold text-stone-900">Q3. 日光駅からの公共交通機関でライトアップ会場へ行けますか？</h3>
    <p class="text-stone-600">A. 東武日光駅・JR日光駅から東武バス「世界遺産めぐり循環バス」が頻繁に運行しており、「勝道上人像前」または「神橋」バス停で下車すれば徒歩すぐです。ただし夜間は運行本数が減るため、帰りのバス時刻表をあらかじめ確認しておくか、社寺徒歩圏の宿への宿泊が最も安心です。</p>
  </div>
</div>

<div class="my-8 p-6 rounded-3xl bg-red-50/60 border border-red-200">
  <h3 class="text-sm font-bold text-red-950 mb-2">🔗 あわせてチェックしたい栃木・北関東の旅行特集</h3>
  <ul class="text-xs space-y-1.5 font-medium text-stone-700">
    <li>👉 <a href="/prefectures/tochigi/" class="text-red-800 hover:text-red-600 underline">栃木県の観光名所・名湯温泉＆厳選ホテルガイド</a></li>
    <li>👉 <a href="/furusato-tax-kanto-private-bath-luxury-ryokan/" class="text-red-800 hover:text-red-600 underline">関東近郊の客室露天風呂・名旅館×ふるさと納税宿泊特集</a></li>
    <li>👉 <a href="/autumn-ashikaga-flower-park-illumination-onsen-hotels-guide/" class="text-red-800 hover:text-red-600 underline">あしかがフラワーパーク光の花の庭＆足利・佐野温泉ガイド</a></li>
  </ul>
</div>
`;

  const postData = {
    id: slug,
    slug: slug,
    title: title,
    description: description,
    prefecture: prefecture,
    area: area,
    image: hSenhime.hotelImageUrl,
    other_images: [
      hKanaya.hotelImageUrl,
      hHoshinoyado.hotelImageUrl,
      hMori.hotelImageUrl,
      hKinugawa.hotelImageUrl
    ],
    hotel_name: `${hSenhime.hotelName}・${hKanaya.hotelName} ほか`,
    affiliate_url: hSenhime.affiliateUrl,
    categories: ["秋のイベント特集", "紅葉ライトアップ", "世界遺産", "温泉宿", "栃木旅行"],
    price: `¥${(hHoshinoyado.hotelMinCharge || 18000).toLocaleString()}〜`,
    rating: hSenhime.reviewAverage || 4.5,
    review_count: hSenhime.reviewCount || 1000,
    date: date,
    is_special_feature: true,
    keywords: [
      "日光東照宮 紅葉 ライトアップ 2026",
      "日光山輪王寺 逍遥園 ライトアップ",
      "日光 紅葉 混雑 回避 いろは坂",
      "中禅寺湖 華厳滝 紅葉 見頃",
      "日光温泉 宿 おすすめ 露天風呂",
      "日光金谷ホテル 鬼怒川金谷ホテル 宿泊記"
    ],
    review: reviewHtml
  };

  const noteMarkdown = `---
title: "${title}"
slug: "${slug}"
date: "${date}"
prefecture: "${prefecture}"
area: "${area}"
tags: ["日光東照宮", "紅葉ライトアップ", "中禅寺湖", "日光温泉", "鬼怒川温泉", "国内旅行"]
---

# ${title}

10月下旬の奥日光・中禅寺湖から11月中旬の世界遺産・日光山内へと紅葉前線が駆け下りる秋の日光。世界遺産登録27周年を迎える日光東照宮や日光山輪王寺・逍遥園の夜間ライトアップでは、黄金に輝く社寺建築と燃え立つモミジが幻想的な錦秋絵巻を織り成します。

いろは坂の渋滞回避ルート、早朝・夜間の寒暖差対策、湯波料理の隠れた名店、日光湯元や鬼怒川の名湯を満喫できる厳選5宿を徹底解説します。

---

## 🎪 2026秋の日光山内ライトアップ見どころ＆いろは坂渋滞完全回避術

日光の秋を最高に楽しむための鑑賞ハイライトと渋滞対策をまとめました。

- **日光山輪王寺 逍遥園ライトアップ:** 江戸初期の池泉回遊式庭園が幻想的に照らし出される日光屈指の夜間特別公開。18:30以降が落ち着いて歩ける狙い目時間帯です。
- **日光東照宮・陽明門と表参道:** 朝8:00の開門直後は観光客が少なく、澄んだ空気と朝日を浴びる社寺建築を間近に体感できます。
- **中禅寺湖スカイライン・半月山展望台:** 八丁出島と男体山、青い湖面を一望する秋の特等席。午前中の順光がベスト。
- **いろは坂の渋滞対策:** 週末の上り（第二いろは坂）は朝7時前に馬返を通過するのが鉄則。下りは13時前か18時半以降に通過すると快適です。
- **防寒の心得:** 11月の日光は夜間気温が5度前後、奥日光では氷点下まで下がります。厚手のダウンコート、手袋、マフラーを必携してください。

---

## 🏨 世界遺産と名湯を満喫！日光・奥日光・鬼怒川の厳選宿5選

### 1. 日光温泉 日光千姫物語（栃木県日光市）
- **特徴:** 日光東照宮まで徒歩約10分。車を預けたまま夜間ライトアップへ出かけられる抜群の立地。開放的な庭園露天風呂と引き上げ湯波懐石が自慢。
- **宿泊目安:** 1名 ¥${(hSenhime.hotelMinCharge || 22000).toLocaleString()}〜
- **楽天トラベル評価:** ⭐ ${hSenhime.reviewAverage}（${hSenhime.reviewCount}件）
- 👉 [日光千姫物語の空室・宿泊プランを見る](${hSenhime.affiliateUrl})

### 2. 日光金谷ホテル（栃木県日光市）
- **特徴:** 明治6年創業、現存する日本最古のリゾートクラシックホテル。登録有形文化財の重厚な館内と伝統の洋食フルコース。神橋のすぐ高台に位置。
- **宿泊目安:** 1名 ¥${(hKanaya.hotelMinCharge || 26000).toLocaleString()}〜
- **楽天トラベル評価:** ⭐ ${hKanaya.reviewAverage}（${hKanaya.reviewCount}件）
- 👉 [日光金谷ホテルの空室・宿泊プランを見る](${hKanaya.affiliateUrl})

### 3. 日光温泉 日光 星の宿（栃木県日光市）
- **特徴:** 神橋の高台に佇む隠れ家旅館。四季の日本庭園を眺める檜風呂と、名物の引き上げ湯波を盛り込んだ本格京風会席。
- **宿泊目安:** 1名 ¥${(hHoshinoyado.hotelMinCharge || 18000).toLocaleString()}〜
- **楽天トラベル評価:** ⭐ ${hHoshinoyado.reviewAverage}（${hHoshinoyado.reviewCount}件）
- 👉 [日光 星の宿の空室・宿泊プランを見る](${hHoshinoyado.affiliateUrl})

### 4. 日光湯元温泉 奥日光 森のホテル（栃木県日光市湯元）
- **特徴:** 標高1,500m、奥日光・湯ノ湖畔に佇む北欧風リゾート。国内屈指の濃厚な乳白色硫黄泉の大露天風呂「森の湯」が圧巻。
- **宿泊目安:** 1名 ¥${(hMori.hotelMinCharge || 24000).toLocaleString()}〜
- **楽天トラベル評価:** ⭐ ${hMori.reviewAverage}（${hMori.reviewCount}件）
- 👉 [奥日光 森のホテルの空室・宿泊プランを見る](${hMori.affiliateUrl})

### 5. 鬼怒川金谷ホテル（栃木県日光市鬼怒川温泉）
- **特徴:** 鬼怒川渓谷の紅葉岸壁を見下ろす全室リバーフロントのラグジュアリーホテル。創業者ジョン・カナヤの美学が息づく「和敬洋讃」会席。
- **宿泊目安:** 1名 ¥${(hKinugawa.hotelMinCharge || 45000).toLocaleString()}〜
- **楽天トラベル評価:** ⭐ ${hKinugawa.reviewAverage}（${hKinugawa.reviewCount}件）
- 👉 [鬼怒川金谷ホテルの空室・宿泊プランを見る](${hKinugawa.affiliateUrl})

---

## 📸 宿の近隣観光地ガイド（Wikipedia公式データ連携）

- **日光東照宮:** ${wToshogu.extract}（各宿から徒歩10〜15分）
- **中禅寺湖:** ${wChuzenji.extract}（日光市街からいろは坂経由で車で約30分）
- **華厳滝:** ${wKegon.extract}（中禅寺湖畔から徒歩5分、落差97mの日本三名瀑）
- **日光二荒山神社:** ${wFutarasan.extract}（東照宮西隣、良縁結びの古社）

---

## 🗺️ 1泊2日満喫モデルコース

- **1日目:** 朝7時前にいろは坂通過 ➔ 中禅寺湖遊覧船 ➔ 華厳滝 ➔ 日光山内へ移動・宿チェックイン ➔ 16:30 輪王寺逍遥園ライトアップ鑑賞 ➔ 宿で湯波懐石と名湯
- **2日目:** 朝8:00 日光東照宮開門参拝 ➔ 二荒山神社 ➔ 鬼怒川温泉へ移動・ロープウェイ紅葉パノラマ ➔ 鬼怒川ライン下り ➔ 帰路へ

---

## ❓ よくある質問（FAQ）

**Q1. 逍遥園ライトアップの点灯時間は？**  
A. 日没（16:00〜17:00頃）から20:00（最終入場19:30）まで点灯。18:30以降が落ち着いて歩ける狙い目です。

**Q2. いろは坂の渋滞を避ける時間は？**  
A. 上りは朝7時前、下りは13時前または18時半以降の通過を推奨します。

**Q3. 車のタイヤは冬用が必要ですか？**  
A. 11月中旬以降の奥日光（湯元・中禅寺湖）は路面凍結の恐れがあるためスタッドレスまたはチェーン携行を推奨します。
`;

  return { postData, noteMarkdown };
};
