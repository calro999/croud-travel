// scripts/new_articles/article4_matsumoto.js
module.exports = function buildArticle4(themeData) {
  const hotels = themeData.hotels;
  const wiki = themeData.wiki;

  const slug = "autumn-winter-matsumoto-castle-night-illumination-onsen-hotels-guide";
  const title = "【長野・松本】国宝松本城 天守ナイトイルミネーション＆晩秋の信州アルプス完全攻略！漆黒の名城を彩る光のレーザーと浅間温泉・美ヶ原温泉の名湯巡る厳選宿5選";
  const description = "11月下旬から冬にかけて開催される「松本城天守プロジェクションマッピング＆ナイトイルミネーション」。北アルプスの雪嶺を背に、現存五重天守の黒漆と白漆喰がお濠の水鏡とともに光のレーザーで幻想的に浮かび上がります。11月解禁の香り高い「信州新そば」、開湯1300年の名湯「浅間温泉」「美ヶ原温泉」、松本民芸家具が息づくクラシックホテルなど厳選5宿を徹底ガイド。";
  const date = "2026-10-30";
  const prefecture = "長野県";
  const area = "松本・浅間温泉・美ヶ原温泉";

  const hTamanoyu = hotels.find(h => h.hotelNo === 7179) || hotels[0];
  const hUmenoyu = hotels.find(h => h.hotelNo === 7352) || hotels[1];
  const hKagetsu = hotels.find(h => h.hotelNo === 15154) || hotels[2];
  const hOiwakeya = hotels.find(h => h.hotelNo === 32486) || hotels[3];
  const hRichmond = hotels.find(h => h.hotelNo === 11283) || hotels[4];

  const wCastle = wiki["松本城"] || {};
  const wAsama = wiki["浅間温泉"] || {};
  const wUtsukushi = wiki["美ヶ原温泉"] || {};
  const wKaichi = wiki["旧開智学校"] || {};

  const reviewHtml = `
<div class="my-6 p-4 rounded-2xl bg-gradient-to-r from-slate-950 via-cyan-950 to-blue-900 text-white shadow-md flex flex-col sm:flex-row items-center justify-between gap-3">
  <div class="space-y-0.5 text-center sm:text-left">
    <div class="flex items-center justify-center sm:justify-start gap-1.5 text-cyan-300 font-extrabold text-xs">
      <span>🏯</span><span>2026-2027年 国宝松本城ナイトイルミネーション速報</span>
    </div>
    <p class="text-xs text-stone-200">
      漆黒の天守がお濠の水鏡に映るレーザーマッピング！11月は秋の新そばと紅葉黄葉、そして初雪の北アルプスが重なる最旬期です。
    </p>
  </div>
  <a href="${hTamanoyu.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="shrink-0 px-4 py-2 bg-cyan-500 hover:bg-cyan-400 text-stone-950 font-black text-xs rounded-xl shadow transition transform hover:scale-105">
    ✨ ホテル玉之湯の空室・プランを見る →
  </a>
</div>

<h2 id="intro" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-cyan-600 pb-2 mb-4">
  漆黒の天守がお濠に揺れる。音と光が呼び覚ます戦国400年の夜桜・氷雪絵巻
</h2>
<p class="text-sm md:text-base text-stone-700 leading-relaxed mb-4">
  戦国末期の威容を今に伝える五重六階の現存最古の天守、国宝・松本城。「烏城（からすじょう）」とも呼ばれる黒漆塗りの下見板と白漆喰の優美なコントラストは、雪化粧を始めた北アルプスの山並みを借景に、息を呑む気品を放ちます。その松本城を舞台に、11月下旬から冬の間だけ繰り広げられるのが、最新のプロジェクションマッピングとレーザー光線が織りなす「光と氷の城下町フェスティバル」です。
</p>
<p class="text-sm md:text-base text-stone-700 leading-relaxed mb-6">
  天守の石垣から天守壁面、そして静まり返った内濠の水面へと放たれる光の軌跡。水鏡に上下逆さまに映り込む「逆さ松本城」が青や金色の光に包まれる姿は、時空を超えた幻想の極み。冷え込みが厳しくなる信州の冬だからこそ、11月に収穫されたばかりの香り高い「新そば」をすすり、開湯1300年の名湯・浅間温泉や美ヶ原温泉の湯けむりに身を委ねる旅は、心まで温まる至福の体験です。
</p>

<h2 id="event-guide" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-cyan-600 pb-2 my-6">
  ❄️ 国宝松本城ナイトイルミネーション＆晩秋の信州攻略ガイド
</h2>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
  <div class="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm space-y-3">
    <div class="flex items-center gap-2 border-b border-stone-100 pb-3">
      <span class="px-2.5 py-1 bg-cyan-100 text-cyan-800 font-extrabold text-xs rounded-lg">光と音の饗宴</span>
      <h3 class="text-base font-bold text-stone-900">松本城プロジェクションマッピングの見どころ</h3>
    </div>
    <div class="text-xs text-stone-700 space-y-2 leading-relaxed">
      <p><strong>【開催時間】</strong> 18:00〜21:00（15分ごとに光の演出プログラムをローテーション上映）</p>
      <p><strong>【観覧エリア】</strong> 松本城公園（入場無料・夜間開放エリア）</p>
      <p><strong>【必見の演出シーン】</strong>
        <br />① <strong>現在と過去を繋ぐレーザー光:</strong> 天守の角柱から空へと放たれるサーチライトと、石垣を疾走する光のライン。
        <br />② <strong>水鏡の逆さマッピング:</strong> 内濠の風が止む瞬間、波立たない水面に完璧なシンメトリーで映し出される光の天守。南外濠からのアングルが最大の撮影スポットです。
        <br />③ <strong>松本てまりと氷雪のモチーフ:</strong> 城下町の伝統工芸「松本てまり」の幾何学模様や、北アルプスの雪の結晶が天守壁面にダイナミックに展開されます。
      </p>
    </div>
  </div>

  <div class="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm space-y-3">
    <div class="flex items-center gap-2 border-b border-stone-100 pb-3">
      <span class="px-2.5 py-1 bg-amber-100 text-amber-800 font-extrabold text-xs rounded-lg">晩秋・初冬の味覚と防寒</span>
      <h3 class="text-base font-bold text-stone-900">11月の新そば旬感＆城下町散策</h3>
    </div>
    <div class="text-xs text-stone-700 space-y-2 leading-relaxed">
      <p><strong>【11月は「信州新そば」の最高峰】</strong> 秋に収穫されたばかりのソバの実は、薄緑色を帯びて最も芳醇な香りを放ちます。松本城周辺には老舗そば処が密集しており、挽きたて・打ちたて・茹でたての「三たて」十割そばや投じそばを味わうなら今がベストシーズン。</p>
      <p><strong>【城下町レトロ散策】</strong> 白壁と黒なまこ壁の蔵が連なる「中町通り」や、カエルがシンボルの歩行者天国「縄手通り」。信州りんごを使ったアップルパイや名物「山賊焼き」の食べ歩きが楽しめます。</p>
      <p><strong>【夜の寒さ対策】</strong> 11月下旬の松本は日没後に氷点下近くまで冷え込みます。マフラー、手袋、カイロ、歩きやすい防滑ブーツを必ず着用して鑑賞しましょう。</p>
    </div>
  </div>
</div>

<h2 id="hotel-selection" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-cyan-600 pb-2 my-8">
  🏨 名城鑑賞と名湯を極める！松本のおすすめ厳選宿5選
</h2>

<!-- 宿1: 浅間温泉 ホテル玉之湯 -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-cyan-100 text-cyan-900 font-black text-xs rounded-full">毎夜開催の手打ちそば実演＆源泉かけ流し貸切風呂</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">1. 松本 浅間温泉 ホテル玉之湯（長野県松本市浅間温泉）</h3>
    </div>
    <span class="px-3 py-1.5 bg-cyan-50 border border-cyan-300 text-cyan-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 ${hTamanoyu.reviewAverage}（${hTamanoyu.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hTamanoyu.hotelImageUrl}" alt="${hTamanoyu.hotelName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hTamanoyu.roomImageUrl || hTamanoyu.hotelImageUrl}" alt="${hTamanoyu.hotelName} 露天風呂" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs text-stone-700 leading-relaxed">
      <p class="text-sm font-semibold text-stone-800">車椅子対応バリアフリーと温かいおもてなし。湯守が守る自家源泉と信州牛会席</p>
      <p>開湯1300年の浅間温泉に佇む、木と人の温もりにあふれた料理旅館。自慢の天然温泉は無色透明のアルカリ性単純温泉で、肌にしっとりと馴染む源泉掛け流し。予約不要・無料で利用できる趣の異なる3つの貸切風呂があり、家族やカップルで気兼ねなく名湯を満喫できます。夕食は信州牛の石焼きや季節の山菜会席が並び、毎夜20:30からは館内で「手打ちそばの実演」が行われ、打ちたて・茹でたての新そばが振る舞われるのが宿泊者最大の喜びです。松本城へも車で約10分の好アクセス。</p>
      <div class="p-3 bg-stone-50 rounded-xl space-y-1">
        <p><strong>【所在地】</strong> ${hTamanoyu.address1}${hTamanoyu.address2}</p>
        <p><strong>【交通アクセス】</strong> ${hTamanoyu.access}</p>
        <p><strong>【駐車場】</strong> ${hTamanoyu.parkingInformation}</p>
        <p><strong>【目安料金】</strong> 1名あたり ¥${hTamanoyu.hotelMinCharge.toLocaleString()}〜</p>
      </div>
    </div>
  </div>
  <div class="pt-2 text-center">
    <a href="${hTamanoyu.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="inline-block w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-cyan-700 to-blue-700 text-white font-extrabold text-sm rounded-2xl shadow-md hover:scale-105 transition transform">
      ✨ 浅間温泉 ホテル玉之湯の最新空室状況・宿泊プランを見る
    </a>
  </div>
</div>

<!-- 宿2: 浅間温泉 梅の湯 -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-amber-100 text-amber-900 font-black text-xs rounded-full">明治初頭創業・木造本館の情緒と手作り信州会席</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">2. 浅間温泉 梅の湯（長野県松本市浅間温泉）</h3>
    </div>
    <span class="px-3 py-1.5 bg-cyan-50 border border-cyan-300 text-cyan-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 ${hUmenoyu.reviewAverage}（${hUmenoyu.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hUmenoyu.hotelImageUrl}" alt="${hUmenoyu.hotelName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hUmenoyu.roomImageUrl || hUmenoyu.hotelImageUrl}" alt="${hUmenoyu.hotelName} 客室" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs text-stone-700 leading-relaxed">
      <p class="text-sm font-semibold text-stone-800">全客室から日本庭園を望む落ち着きの和空間。完全掛け流しの檜風呂と信州牛すき焼き</p>
      <p>浅間温泉の歴史とともに歩んできた創業百余年の老舗旅館。木造建築の温もりを残す館内はどこか懐かしく、中庭の日本庭園を囲むように配された客室は静寂そのもの。大浴場と露天風呂には浅間温泉の良質な源泉が絶え間なく注がれ、湯上がりは肌がスベスベになると評判です。夕食は信州サーモンのお造りや信州牛のすき焼き・陶板焼きなど、地元長野の旬を凝縮した手作り会席料理をお部屋または個室お食事処でゆっくりと味わえます。</p>
      <div class="p-3 bg-stone-50 rounded-xl space-y-1">
        <p><strong>【所在地】</strong> ${hUmenoyu.address1}${hUmenoyu.address2}</p>
        <p><strong>【交通アクセス】</strong> ${hUmenoyu.access}</p>
        <p><strong>【駐車場】</strong> ${hUmenoyu.parkingInformation}</p>
        <p><strong>【目安料金】</strong> 1名あたり ¥${hUmenoyu.hotelMinCharge.toLocaleString()}〜</p>
      </div>
    </div>
  </div>
  <div class="pt-2 text-center">
    <a href="${hUmenoyu.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="inline-block w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-cyan-700 to-blue-700 text-white font-extrabold text-sm rounded-2xl shadow-md hover:scale-105 transition transform">
      ✨ 浅間温泉 梅の湯の最新空室状況・宿泊プランを見る
    </a>
  </div>
</div>

<!-- 宿3: 松本ホテル花月 -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-stone-800 text-amber-300 font-black text-xs rounded-full">松本城徒歩5分・松本民芸家具が息づくクラシックホテル</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">3. 松本ホテル花月（長野県松本市大手）</h3>
    </div>
    <span class="px-3 py-1.5 bg-stone-100 border border-stone-300 text-stone-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 ${hKagetsu.reviewAverage}（${hKagetsu.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hKagetsu.hotelImageUrl}" alt="${hKagetsu.hotelName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hKagetsu.roomImageUrl || hKagetsu.hotelImageUrl}" alt="${hKagetsu.hotelName} ロビー" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs text-stone-700 leading-relaxed">
      <p class="text-sm font-semibold text-stone-800">明治20年創業。「民芸フィロソフィー」が漂うレトロモダンな空間と名水大浴場</p>
      <p>松本城まで徒歩わずか5分という絶好のロケーションに建つ老舗クラシックホテル。館内全域に柳宗悦らの民芸運動から生まれた「松本民芸家具」が贅沢に配置され、ダークブラウンの木肌とステンドグラスが醸し出すレトロな空気感は旅情を掻き立てます。夜の松本城プロジェクションマッピングを鑑賞した後、歩いてすぐに温かいホテルへ戻れる安心感は格別。館内には松本の清らかな湧水を利用した大浴場「深志の湯」を完備し、レストラン「I;caza」では信州の伝統食材をフレンチ技法で再構築した「ながのテロワール」料理が楽しめます。</p>
      <div class="p-3 bg-stone-50 rounded-xl space-y-1">
        <p><strong>【所在地】</strong> ${hKagetsu.address1}${hKagetsu.address2}</p>
        <p><strong>【交通アクセス】</strong> ${hKagetsu.access}</p>
        <p><strong>【駐車場】</strong> ${hKagetsu.parkingInformation}</p>
        <p><strong>【目安料金】</strong> 1名あたり ¥${hKagetsu.hotelMinCharge.toLocaleString()}〜</p>
      </div>
    </div>
  </div>
  <div class="pt-2 text-center">
    <a href="${hKagetsu.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="inline-block w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-stone-800 to-stone-900 text-amber-300 font-extrabold text-sm rounded-2xl shadow-md hover:scale-105 transition transform">
      ✨ 松本ホテル花月の最新空室状況・宿泊プランを見る
    </a>
  </div>
</div>

<!-- 宿4: 美ヶ原温泉 追分屋旅館 -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-emerald-100 text-emerald-900 font-black text-xs rounded-full">湯坂の静寂・美ヶ原温泉の隠れ湯料理旅館</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">4. 美ヶ原温泉 追分屋旅館（長野県松本市里山辺）</h3>
    </div>
    <span class="px-3 py-1.5 bg-cyan-50 border border-cyan-300 text-cyan-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 ${hOiwakeya.reviewAverage}（${hOiwakeya.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hOiwakeya.hotelImageUrl}" alt="${hOiwakeya.hotelName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hOiwakeya.roomImageUrl || hOiwakeya.hotelImageUrl}" alt="${hOiwakeya.hotelName} 庭園露天風呂" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs text-stone-700 leading-relaxed">
      <p class="text-sm font-semibold text-stone-800">万葉の昔から湧き出る「白糸の湯」。板前主人が腕を振るう四季の創作会席</p>
      <p>松本市街から車で約15分、山裾の閑静な美ヶ原温泉に佇む純和風旅館。万葉集にも詠まれた歴史ある名湯を引く大浴場と庭園露天風呂は、さらりとした弱アルカリ性単純温泉で、身体の芯までぽかぽかと温めてくれます。料理自慢の宿としても名高く、料理長が一品一品心を込めて仕立てる「旬の創作会席」は、信州プレミアム牛肉の石焼きや川魚の塩焼き、季節の吹き寄せなど目にも鮮やか。静かな環境で大人の上質な休日を過ごしたい方にうってつけの隠れ宿です。</p>
      <div class="p-3 bg-stone-50 rounded-xl space-y-1">
        <p><strong>【所在地】</strong> ${hOiwakeya.address1}${hOiwakeya.address2}</p>
        <p><strong>【交通アクセス】</strong> ${hOiwakeya.access}</p>
        <p><strong>【駐車場】</strong> ${hOiwakeya.parkingInformation}</p>
        <p><strong>【目安料金】</strong> 1名あたり ¥${hOiwakeya.hotelMinCharge.toLocaleString()}〜</p>
      </div>
    </div>
  </div>
  <div class="pt-2 text-center">
    <a href="${hOiwakeya.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="inline-block w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-cyan-700 to-blue-700 text-white font-extrabold text-sm rounded-2xl shadow-md hover:scale-105 transition transform">
      ✨ 美ヶ原温泉 追分屋旅館の最新空室状況・宿泊プランを見る
    </a>
  </div>
</div>

<!-- 宿5: リッチモンドホテル松本 -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-blue-100 text-blue-900 font-black text-xs rounded-full">JR松本駅徒歩4分・城下町散策に最高のフットワーク</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">5. リッチモンドホテル松本（長野県松本市中央）</h3>
    </div>
    <span class="px-3 py-1.5 bg-cyan-50 border border-cyan-300 text-cyan-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 ${hRichmond.reviewAverage}（${hRichmond.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hRichmond.hotelImageUrl}" alt="${hRichmond.hotelName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hRichmond.roomImageUrl || hRichmond.hotelImageUrl}" alt="${hRichmond.hotelName} 客室" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs text-stone-700 leading-relaxed">
      <p class="text-sm font-semibold text-stone-800">広々デスクとシモンズ製ベッド。信州名物山賊焼きや信州そばが並ぶ朝食ビュッフェ</p>
      <p>JR松本駅お城口から徒歩約4分、松本城へも徒歩約10分という駅と城下町の中間に位置する抜群の好立地ホテル。1階にはレストラン「ガスト」を併設し、朝食では長野名物の郷土料理「山賊焼き」や「信州そば」、焼きたてパンが食べ放題。全室に加湿機能付き空気清浄機、大型デスク、シモンズ社製高級ベッドを導入し、夜景鑑賞後の疲れをぐっすりと癒やしてくれます。チェックイン前後の荷物預かりも快く対応してくれるため、電車派の旅行者に圧倒的な支持を得ています。</p>
      <div class="p-3 bg-stone-50 rounded-xl space-y-1">
        <p><strong>【所在地】</strong> ${hRichmond.address1}${hRichmond.address2}</p>
        <p><strong>【交通アクセス】</strong> ${hRichmond.access}</p>
        <p><strong>【駐車場】</strong> ${hRichmond.parkingInformation}</p>
        <p><strong>【目安料金】</strong> 1名あたり ¥${hRichmond.hotelMinCharge.toLocaleString()}〜</p>
      </div>
    </div>
  </div>
  <div class="pt-2 text-center">
    <a href="${hRichmond.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="inline-block w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-cyan-700 to-blue-700 text-white font-extrabold text-sm rounded-2xl shadow-md hover:scale-105 transition transform">
      ✨ リッチモンドホテル松本の最新空室状況・宿泊プランを見る
    </a>
  </div>
</div>

<h2 id="nearby-spots" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-cyan-600 pb-2 my-8">
  📸 宿の近隣観光地ガイド（Wikipedia公式データ連携）
</h2>
<p class="text-xs text-stone-600 mb-6">
  松本城イルミネーションとあわせて巡りたい、信州松本の主要名所案内です。
</p>

<div class="space-y-6 my-6">
  <!-- スポット1: 松本城 -->
  <div class="p-6 rounded-3xl bg-stone-50 border border-stone-200 shadow-xs">
    <div class="grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
      <div class="md:col-span-5">
        <img src="${wCastle.thumbnail || 'https://img.travel.rakuten.co.jp/share/HOTEL/15154/15154.jpg'}" alt="松本城" class="w-full h-48 object-cover rounded-2xl border border-stone-200" loading="lazy" />
      </div>
      <div class="md:col-span-7 space-y-2 text-xs text-stone-700 leading-relaxed">
        <span class="inline-block px-2.5 py-0.5 bg-cyan-100 text-cyan-800 font-bold text-[11px] rounded-md">🏯 国宝・現存五重天守</span>
        <h3 class="text-base font-bold text-stone-900">国宝 松本城（深志城）</h3>
        <p>${wCastle.extract}</p>
        <p class="text-stone-500"><strong>【宿からの移動】</strong> 松本ホテル花月から徒歩約5分。浅間温泉から車で約10〜15分。18:00からのナイトイルミネーションはお濠の外周から無料で誰でも観覧可能です。</p>
      </div>
    </div>
  </div>

  <!-- スポット2: 浅間温泉 -->
  <div class="p-6 rounded-3xl bg-stone-50 border border-stone-200 shadow-xs">
    <div class="grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
      <div class="md:col-span-5">
        <img src="${wAsama.thumbnail || 'https://img.travel.rakuten.co.jp/share/HOTEL/7179/7179.jpg'}" alt="浅間温泉" class="w-full h-48 object-cover rounded-2xl border border-stone-200" loading="lazy" />
      </div>
      <div class="md:col-span-7 space-y-2 text-xs text-stone-700 leading-relaxed">
        <span class="inline-block px-2.5 py-0.5 bg-blue-100 text-blue-800 font-bold text-[11px] rounded-md">♨️ 松本の奥座敷・開湯1300年</span>
        <h3 class="text-base font-bold text-stone-900">浅間温泉（あさまおんせん）</h3>
        <p>${wAsama.extract}</p>
        <p class="text-stone-500"><strong>【宿からの移動】</strong> ホテル玉之湯・梅の湯の所在地。松本駅・松本城から路線バス「浅間温泉行き」で約15〜20分。美肌の湯として古くから親しまれています。</p>
      </div>
    </div>
  </div>

  <!-- スポット3: 美ヶ原温泉 -->
  <div class="p-6 rounded-3xl bg-stone-50 border border-stone-200 shadow-xs">
    <div class="grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
      <div class="md:col-span-5">
        <img src="${wUtsukushi.thumbnail || 'https://img.travel.rakuten.co.jp/share/HOTEL/32486/32486.jpg'}" alt="美ヶ原温泉" class="w-full h-48 object-cover rounded-2xl border border-stone-200" loading="lazy" />
      </div>
      <div class="md:col-span-7 space-y-2 text-xs text-stone-700 leading-relaxed">
        <span class="inline-block px-2.5 py-0.5 bg-emerald-100 text-emerald-800 font-bold text-[11px] rounded-md">♨️ 万葉集にも詠まれた名湯</span>
        <h3 class="text-base font-bold text-stone-900">美ヶ原温泉（束間の湯）</h3>
        <p>${wUtsukushi.extract}</p>
        <p class="text-stone-500"><strong>【宿からの移動】</strong> 追分屋旅館の所在地。松本城から車で約15分。山裾の落ち着いた温泉街で、静かに湯治情緒を味わえます。</p>
      </div>
    </div>
  </div>

  <!-- スポット4: 旧開智学校 -->
  <div class="p-6 rounded-3xl bg-stone-50 border border-stone-200 shadow-xs">
    <div class="grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
      <div class="md:col-span-5">
        <img src="${wKaichi.thumbnail || 'https://img.travel.rakuten.co.jp/share/HOTEL/11283/11283.jpg'}" alt="旧開智学校" class="w-full h-48 object-cover rounded-2xl border border-stone-200" loading="lazy" />
      </div>
      <div class="md:col-span-7 space-y-2 text-xs text-stone-700 leading-relaxed">
        <span class="inline-block px-2.5 py-0.5 bg-amber-100 text-amber-800 font-bold text-[11px] rounded-md">🏫 国宝・明治初期の擬洋風建築</span>
        <h3 class="text-base font-bold text-stone-900">旧開智学校校舎</h3>
        <p>${wKaichi.extract}</p>
        <p class="text-stone-500"><strong>【宿からの移動】</strong> 松本城から北へ徒歩約7分。天使の彫刻や色ガラスが美しい近代学校建築の最高峰です。</p>
      </div>
    </div>
  </div>
</div>

<h2 id="model-course" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-cyan-600 pb-2 my-8">
  🗺️ 松本城＆浅間温泉 1泊2日 錦秋と光のアート満喫モデルコース
</h2>
<div class="my-6 p-6 rounded-3xl bg-gradient-to-br from-cyan-50/60 to-blue-50/40 border border-cyan-200 space-y-4 text-xs text-stone-700 leading-relaxed">
  <div class="space-y-1">
    <h3 class="font-bold text-sm text-stone-900">【1日目】城下町散策と松本城ナイトイルミネーション鑑賞</h3>
    <p>特急あずさ・しなので12:30に松本駅へ到着。中町通りの蔵の街並みを散策し、老舗「みよ田」や「野麦」で11月の新そばを堪能。15:30に「松本ホテル花月」または「浅間温泉 ホテル玉之湯」へチェックイン。温泉で一息ついた後、18:00に松本城公園へ。漆黒の天守を彩るプロジェクションマッピングとお濠の水鏡に映る逆さ松本城を心ゆくまで撮影。夕食は信州プレミアム牛のすき焼きや手打ち新そばに舌鼓。</p>
  </div>
  <div class="space-y-1">
    <h3 class="font-bold text-sm text-stone-900">【2日目】松本城天守登閣と旧開智学校・なわて通り散策</h3>
    <p>朝食後、朝一番の澄んだ空気の中で松本城天守へ登閣。急勾配の階段を上がり最上階から雪化粧の北アルプスを展望。その後、国宝「旧開智学校校舎」を見学し、縄手通りでたい焼きや信州りんごスイーツを購入。松本市美術館で草間彌生アートに触れ、駅前でお土産の信州そばと七味唐辛子を買い求めて帰路へ。</p>
  </div>
</div>

<h2 id="faq" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-cyan-600 pb-2 my-8">
  ❓ よくある質問（FAQ）
</h2>
<div class="space-y-3 my-6 text-xs text-stone-800">
  <div class="p-4 rounded-2xl bg-white border border-stone-200 space-y-1">
    <h3 class="font-bold text-stone-900">Q1. 松本城のナイトイルミネーションを見るのにチケットや予約は必要ですか？</h3>
    <p class="text-stone-600">A. 松本城公園の敷地内（外濠・内濠周辺）は夜間無料開放されており、事前予約や入場チケットは一切不要です。どなたでも自由に散策しながらマッピングを観覧できます（天守内部への登閣は夕方で終了します）。</p>
  </div>
  <div class="p-4 rounded-2xl bg-white border border-stone-200 space-y-1">
    <h3 class="font-bold text-stone-900">Q2. 水鏡に映る「逆さ松本城」がきれいに撮れる条件はありますか？</h3>
    <p class="text-stone-600">A. お濠の水面が波立たない「無風」のタイミングが最も綺麗に反射します。夕暮れ時よりも完全に陽が落ちた18:30以降、南外濠側（松本城公園南側入口付近）からの構図が最も美しくシンメトリーを捉えられます。</p>
  </div>
  <div class="p-4 rounded-2xl bg-white border border-stone-200 space-y-1">
    <h3 class="font-bold text-stone-900">Q3. 浅間温泉から松本城への移動方法は？</h3>
    <p class="text-stone-600">A. 車やタクシーなら約10〜15分。アルピコ交通の路線バス（浅間線・新浅間線）が日中15〜20分間隔で運行しており、バスで約20分でアクセス可能です。</p>
  </div>
</div>

<div class="my-8 p-6 rounded-3xl bg-cyan-50/60 border border-cyan-200">
  <h3 class="text-sm font-bold text-cyan-950 mb-2">🔗 あわせてチェックしたい長野・信州の旅行ガイド</h3>
  <ul class="text-xs space-y-1.5 font-medium text-stone-700">
    <li>👉 <a href="/prefectures/nagano/" class="text-cyan-800 hover:text-cyan-600 underline">長野県の観光名所・人気温泉地＆ホテル特集</a></li>
    <li>👉 <a href="/posts/autumn-winter-shirakawago-okuhida-takayama-hotels-guide" class="text-cyan-800 hover:text-cyan-600 underline">白川郷雪景色＆奥飛騨温泉郷・飛騨高山名宿ガイド</a></li>
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
    hot_spring_info: "浅間温泉（アルカリ性単純温泉・自家源泉かけ流し）・美ヶ原温泉「白糸の湯」・深志の湯（名水大浴場）",
    parking_info: "各宿に無料駐車場完備。松本城周辺の市営駐車場も夜間利用可能。",
    meal_availability: "11月解禁信州新そば・信州プレミアム牛肉石焼き＆すき焼き・信州サーモン・名物山賊焼き",
    hotel_name: "国宝松本城ナイトイルミネーション周辺 厳選宿5選",
    image: hTamanoyu.hotelImageUrl,
    affiliate_url: hTamanoyu.affiliateUrl,
    categories: ["11月旅行", "12月旅行", "イルミネーション", "国宝", "温泉宿", "信州そば", "長野旅行"],
    keywords: [
      "松本城 プロジェクションマッピング 2026",
      "松本城 イルミネーション 時間",
      "松本城 ホテル おすすめ",
      "浅間温泉 ホテル玉之湯 口コミ",
      "浅間温泉 梅の湯 宿泊記",
      "松本ホテル花月 予約",
      "美ヶ原温泉 追分屋旅館",
      "リッチモンドホテル松本",
      "信州 新そば 11月",
      "松本 11月 観光"
    ],
    review: reviewHtml,
    price: hTamanoyu.hotelMinCharge || 16500,
    rating: hTamanoyu.reviewAverage || 4.5,
    date: date,
    other_images: [
      hUmenoyu.hotelImageUrl,
      hKagetsu.hotelImageUrl,
      hOiwakeya.hotelImageUrl,
      hRichmond.hotelImageUrl,
      wCastle.thumbnail,
      wAsama.thumbnail
    ].filter(Boolean),
    summary: description,
    review_count: (hTamanoyu.reviewCount || 0) + (hKagetsu.reviewCount || 0),
    family_friendly: "はい、無料貸切風呂のある温泉旅館や城下町徒歩圏のクラシックホテルなど家族旅行にも最適です。"
  };

  const noteMarkdown = `---
title: "${title}"
date: "${date}"
description: "${description}"
tags: ["松本城", "プロジェクションマッピング", "浅間温泉", "信州新そば", "長野旅行", "楽天トラベル"]
---

戦国末期の威容を今に伝える五重六階の現存最古の天守、国宝・松本城。「烏城（からすじょう）」とも呼ばれる黒漆塗りの下見板と白漆喰の優美なコントラストは、雪化粧を始めた北アルプスの山並みを借景に、息を呑む気品を放ちます。その松本城を舞台に、11月下旬から冬の間だけ繰り広げられるのが、最新のプロジェクションマッピングとレーザー光線が織りなす「光と氷の城下町フェスティバル」です。

天守の石垣から天守壁面、そして静まり返った内濠の水面へと放たれる光の軌跡。水鏡に上下逆さまに映り込む「逆さ松本城」が青や金色の光に包まれる姿は、時空を超えた幻想の極み。11月解禁の香り高い「信州新そば」、開湯1300年の名湯「浅間温泉」「美ヶ原温泉」とともに楽しむ厳選名宿をお届けします。

---

## ❄️ 国宝松本城ナイトイルミネーションの攻略ポイント
- **開催期間**: 11月下旬〜翌年2月中旬
- **点灯時間**: 18:00〜21:00（15分ごとに多彩な光のプログラムを上映）
- **観覧料**: 松本城公園の敷地内（外濠・内濠周辺）は**入場無料・夜間一般開放**。予約も不要です。
- **水鏡の逆さ松本城**: 風が止む瞬間、内濠の水面に完全なシンメトリーで映り込む光の天守。南外濠からのアングルが絶好の撮影スポットです。
- **11月の信州新そば**: 11月は秋そばの収穫直後で、最も色鮮やかで香り高い「新そば」が出揃う黄金期。名城ライトアップと極上蕎麦の組み合わせは信州旅行の真骨頂です。

---

## 1. 松本 浅間温泉 ホテル玉之湯（長野県松本市浅間温泉）
![ホテル玉之湯](${hTamanoyu.hotelImageUrl})
開湯1300年の名湯・浅間温泉に佇む木の温もりあふれる宿。無料の源泉かけ流し貸切風呂が3つあり、毎夜20:30から館内で手打ちされる新そばの実演サービスが大好評。信州牛石焼き会席も絶品です。

- **楽天トラベル総合評価**: ★${hTamanoyu.reviewAverage}（クチコミ ${hTamanoyu.reviewCount}件）
- **目安料金**: 1名 ¥${hTamanoyu.hotelMinCharge.toLocaleString()}〜
- **所在地**: ${hTamanoyu.address1}${hTamanoyu.address2}
- **アクセス**: ${hTamanoyu.access}
- **駐車場**: ${hTamanoyu.parkingInformation}
- [👉 浅間温泉 ホテル玉之湯の宿泊プラン・空室状況を見る](${hTamanoyu.affiliateUrl})

---

## 2. 浅間温泉 梅の湯（長野県松本市浅間温泉）
![浅間温泉 梅の湯](${hUmenoyu.hotelImageUrl})
創業百余年、木造建築の情緒が香る老舗旅館。日本庭園を望む落ち着いた和室と、完全掛け流しの檜風呂が旅の疲れを芯から癒やします。信州サーモンや信州牛すき焼きの手作り会席をお部屋や個室で堪能。

- **楽天トラベル総合評価**: ★${hUmenoyu.reviewAverage}（クチコミ ${hUmenoyu.reviewCount}件）
- **目安料金**: 1名 ¥${hUmenoyu.hotelMinCharge.toLocaleString()}〜
- **所在地**: ${hUmenoyu.address1}${hUmenoyu.address2}
- **アクセス**: ${hUmenoyu.access}
- **駐車場**: ${hUmenoyu.parkingInformation}
- [👉 浅間温泉 梅の湯の宿泊プラン・空室状況を見る](${hUmenoyu.affiliateUrl})

---

## 3. 松本ホテル花月（長野県松本市大手）
![松本ホテル花月](${hKagetsu.hotelImageUrl})
明治20年創業、松本城まで徒歩5分の好立地。館内全域に松本民芸家具が配置されたレトロモダンなクラシックホテル。名水大浴場「深志の湯」を完備し、城下町散策と夜のマッピング鑑賞に最高の拠点です。

- **楽天トラベル総合評価**: ★${hKagetsu.reviewAverage}（クチコミ ${hKagetsu.reviewCount}件）
- **目安料金**: 1名 ¥${hKagetsu.hotelMinCharge.toLocaleString()}〜
- **所在地**: ${hKagetsu.address1}${hKagetsu.address2}
- **アクセス**: ${hKagetsu.access}
- **駐車場**: ${hKagetsu.parkingInformation}
- [👉 松本ホテル花月の宿泊プラン・空室状況を見る](${hKagetsu.affiliateUrl})

---

## 4. 美ヶ原温泉 追分屋旅館（長野県松本市里山辺）
![追分屋旅館](${hOiwakeya.hotelImageUrl})
山裾の閑静な美ヶ原温泉に佇む純和風料理旅館。万葉集に詠まれた名湯を引く庭園露天風呂と、板前主人が手塩にかけて仕立てる四季の創作会席が魅力。静寂に包まれた大人の隠れ宿です。

- **楽天トラベル総合評価**: ★${hOiwakeya.reviewAverage}（クチコミ ${hOiwakeya.reviewCount}件）
- **目安料金**: 1名 ¥${hOiwakeya.hotelMinCharge.toLocaleString()}〜
- **所在地**: ${hOiwakeya.address1}${hOiwakeya.address2}
- **アクセス**: ${hOiwakeya.access}
- **駐車場**: ${hOiwakeya.parkingInformation}
- [👉 美ヶ原温泉 追分屋旅館の宿泊プラン・空室状況を見る](${hOiwakeya.affiliateUrl})

---

## 5. リッチモンドホテル松本（長野県松本市中央）
![リッチモンドホテル松本](${hRichmond.hotelImageUrl})
JR松本駅お城口から徒歩4分、松本城へも徒歩約10分。シモンズ社製高級ベッドと大型デスクを全室完備。朝食ビュッフェでは信州そばや名物山賊焼きが楽しめ、抜群の機能性と快適性を誇ります。

- **楽天トラベル総合評価**: ★${hRichmond.reviewAverage}（クチコミ ${hRichmond.reviewCount}件）
- **目安料金**: 1名 ¥${hRichmond.hotelMinCharge.toLocaleString()}〜
- **所在地**: ${hRichmond.address1}${hRichmond.address2}
- **アクセス**: ${hRichmond.access}
- **駐車場**: ${hRichmond.parkingInformation}
- [👉 リッチモンドホテル松本の宿泊プラン・空室状況を見る](${hRichmond.affiliateUrl})

---

## 📸 宿の近隣観光地ガイド（Wikipedia公式データ連携）

### 国宝 松本城（長野県松本市）
![松本城](${wCastle.thumbnail || hKagetsu.hotelImageUrl})
${wCastle.extract}
- **宿からのアクセス**: 松本ホテル花月から徒歩約5分。浅間温泉から車で約10〜15分。

### 浅間温泉（長野県松本市）
![浅間温泉](${wAsama.thumbnail || hTamanoyu.hotelImageUrl})
${wAsama.extract}
- **宿からのアクセス**: ホテル玉之湯・梅の湯の所在地。松本駅から路線バスで約20分。

### 美ヶ原温泉（長野県松本市）
![美ヶ原温泉](${wUtsukushi.thumbnail || hOiwakeya.hotelImageUrl})
${wUtsukushi.extract}
- **宿からのアクセス**: 追分屋旅館の所在地。松本城から車で約15分。

### 旧開智学校（長野県松本市）
![旧開智学校](${wKaichi.thumbnail || hRichmond.hotelImageUrl})
${wKaichi.extract}
- **宿からのアクセス**: 松本城から北へ徒歩約7分。日本最古級の擬洋風建築（国宝）。
`;

  return { postData, noteMarkdown };
};
