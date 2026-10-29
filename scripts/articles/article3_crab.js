// scripts/articles/article3_crab.js
module.exports = function buildArticle3(themeData) {
  const hotels = themeData.hotels;
  const wiki = themeData.wiki;

  const slug = "winter-crab-season-matsuba-echizen-onsen-hotels-guide";
  const title = "【兵庫・京都・福井】11月6日カニ漁解禁！越前がに・松葉がに初競りと本場タグ付き活蟹を極める山陰・北陸名湯露天の宿5選";
  const description = "毎年11月6日午前0時に一斉解禁される日本海の冬の王様・ズワイガニ漁。福井の「黄色タグ（越前がに）」、山陰の「青色・ピンクタグ（津居山・柴山・香住の松葉がに）」の初競りと本場活蟹フルコースを堪能できる城崎温泉・あわら温泉・三国温泉の極上名宿5選と、失敗しないカニ旅の選び方を徹底解説。";
  const date = "2026-10-29";
  const prefecture = "兵庫県";
  const area = "城崎温泉・あわら温泉・三国";

  const hNishimuraya = hotels.find(h => h.hotelNo === 75399) || hotels[0];
  const hGrandia = hotels.find(h => h.hotelNo === 16207) || hotels[1];
  const hHakusan = hotels.find(h => h.hotelNo === 18819) || hotels[2];
  const hMatsuya = hotels.find(h => h.hotelNo === 84545) || hotels[3];
  const hHareya = hotels.find(h => h.hotelNo === 6205) || hotels[4];

  const wCrab = wiki["ズワイガニ"] || {};
  const wKinosaki = wiki["城崎温泉"] || {};
  const wAwara = wiki["あわら温泉"] || {};
  const wTojinbo = wiki["東尋坊"] || {};

  const reviewHtml = `
<div class="my-6 p-4 rounded-2xl bg-gradient-to-r from-red-950 via-amber-950 to-stone-900 text-white shadow-md flex flex-col sm:flex-row items-center justify-between gap-3">
  <div class="space-y-0.5 text-center sm:text-left">
    <div class="flex items-center justify-center sm:justify-start gap-1.5 text-amber-300 font-extrabold text-xs">
      <span>🦀</span><span>2026年11月6日 カニ漁解禁速報＆宿泊予約</span>
    </div>
    <p class="text-xs text-stone-200">
      初競りのタグ付き活蟹（越前がに・津居山がに）を扱う名門宿の11月〜12月枠は解禁前から予約殺到。お早めの確保をおすすめします。
    </p>
  </div>
  <a href="${hNishimuraya.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="shrink-0 px-4 py-2 bg-amber-500 hover:bg-amber-400 text-stone-950 font-black text-xs rounded-xl shadow transition transform hover:scale-105">
    ✨ 西村屋本館の空室・松葉がにプランをチェック →
  </a>
</div>

<h2 id="intro" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-red-500 pb-2 mb-4">
  日本海の冬を告げる11月6日深夜の出港の汽笛と、港町の熱気
</h2>
<p class="text-sm md:text-base text-stone-700 leading-relaxed mb-4">
  毎年11月6日午前0時、日本海沿岸の漁港からカニ漁船が一斉に出港します。初冬の荒波を越えて水揚げされる「雄のズワイガニ」は、福井県では皇室献上蟹としても名高い「越前がに」、山陰（兵庫・京都・鳥取）では「松葉がに」と呼ばれ、冬の日本海グルメの最高峰として君臨します。
</p>
<p class="text-sm md:text-base text-stone-700 leading-relaxed mb-6">
  初競りの活気とともに、生簀（いけす）から引き揚げられた活蟹は、花が咲いたように透き通るお造り、香ばしい炭火焼き、茹でたての濃厚な蟹味噌、そして旨味が凝縮したカニすき鍋へと姿を変えます。温泉情緒あふれる城崎の柳並木や、あわら・三国の雄大な日本海を望みながら、本物のタグ付き蟹を食す冬の至福をご案内します。
</p>

<h2 id="crab-guide" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-red-500 pb-2 my-6">
  🏷️ タグでわかる！越前がに・松葉がにのブランド識別と選び方
</h2>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
  <!-- 越前がに -->
  <div class="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm space-y-3">
    <div class="flex items-center gap-2 border-b border-stone-100 pb-3">
      <span class="px-2.5 py-1 bg-yellow-100 text-yellow-900 font-extrabold text-xs rounded-lg">福井・黄色タグ</span>
      <h3 class="text-base font-bold text-stone-900">越前がに（三国港・越前港）</h3>
    </div>
    <div class="text-xs text-stone-700 space-y-2 leading-relaxed">
      <p><strong>【主な水揚げ港】</strong> 三国港・越前港・敦賀港・小浜港</p>
      <p><strong>【特徴と味わい】</strong> 全国で唯一皇室に献上される最高級カニ。日本海の段丘状の海底で育ち、身の繊維が極めて緻密で濃厚な甘みが特徴。黄色いブランドタグと港名が刻印されます。</p>
      <p><strong>【最高峰「極（きわみ）」】</strong> 重さ1.5kg以上、甲羅幅14.5cm以上の基準を満たすものはわずか0.1%未満の超プレミアムブランドとして初競りで数百万円の値がつきます。</p>
      <p><strong>【おすすめの食べ方】</strong> 職人が絶妙な塩加減で大釜で茹で上げた「茹でがに」と、甲羅に日本酒を注いで炙る「甲羅酒」が絶品です。</p>
    </div>
  </div>

  <!-- 松葉がに -->
  <div class="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm space-y-3">
    <div class="flex items-center gap-2 border-b border-stone-100 pb-3">
      <span class="px-2.5 py-1 bg-sky-100 text-sky-900 font-extrabold text-xs rounded-lg">山陰・青＆ピンクタグ</span>
      <h3 class="text-base font-bold text-stone-900">松葉がに（津居山港・柴山港・間人港）</h3>
    </div>
    <div class="text-xs text-stone-700 space-y-2 leading-relaxed">
      <p><strong>【主な水揚げ港】</strong> 城崎近郊の津居山港（青タグ）、香美町の柴山港（ピンクタグ）、丹後半島の間人港（緑タグ）</p>
      <p><strong>【特徴と味わい】</strong> 城崎温泉から車で約10分の津居山港から直送される「津居山がに」は、日帰り漁のため鮮度が抜群。柴山港は日本一厳しいとされる選別基準を誇ります。</p>
      <p><strong>【活蟹（生）の醍醐味】</strong> 生きたまま宿に運ばれる活蟹だからこそできる「花咲き蟹刺し」。氷水にくぐらせるとふわりと広がる甘みは冷凍ガニとは別次元の食体験です。</p>
      <p><strong>【城崎の風情】</strong> 城崎温泉では11月下旬に「かに王国開国式」が催され、街中がカニの香りと湯けむりに包まれます。</p>
    </div>
  </div>
</div>

<h2 id="hotel-selection" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-red-500 pb-2 my-8">
  🏨 本場タグ付き活蟹を堪能できる極上宿5選
</h2>

<!-- 宿1: 西村屋本館 -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-red-100 text-red-900 font-black text-xs rounded-full">創業160年・山陰数寄屋造りの名門</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">1. 城崎温泉 西村屋本館（兵庫県豊岡市城崎町）</h3>
    </div>
    <span class="px-3 py-1.5 bg-amber-50 border border-amber-300 text-amber-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 ${hNishimuraya.reviewAverage}（${hNishimuraya.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hNishimuraya.hotelImageUrl}" alt="${hNishimuraya.hotelName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hNishimuraya.roomImageUrl || hNishimuraya.hotelImageUrl}" alt="${hNishimuraya.hotelName} 日本庭園" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs text-stone-700 leading-relaxed">
      <p class="text-sm font-semibold text-stone-800">登録有形文化財の風雅な建築と、津居山港・柴山港水揚げの極上本松葉がに会席</p>
      <p>安政年間の創業以来、文人墨客に愛され続けてきた城崎温泉を代表する最高峰の宿。手入れの行き届いた日本庭園を囲む数寄屋造りの客室で、津居山港で揚がった青タグ付きの活松葉がにを専属の仲居さんが目の前で丁寧に焼き上げ、捌いてくれます。庭園を望む大浴場「吉の湯」「福の湯」で名湯を満喫した後は、カニ刺し、焼きガニ、茹でガニ、カニすき鍋、カニ雑炊に至るまで一切の妥協のないフルコースに酔いしれます。</p>
      <div class="p-3 bg-stone-50 rounded-xl space-y-1">
        <p><strong>【所在地】</strong> ${hNishimuraya.address1}${hNishimuraya.address2}</p>
        <p><strong>【交通アクセス】</strong> ${hNishimuraya.access}</p>
        <p><strong>【駐車場】</strong> ${hNishimuraya.parkingInformation}</p>
        <p><strong>【目安料金】</strong> 1名あたり ¥${hNishimuraya.hotelMinCharge.toLocaleString()}〜</p>
      </div>
    </div>
  </div>
  <div class="pt-2 text-center">
    <a href="${hNishimuraya.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="inline-block w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-red-600 to-amber-600 text-white font-extrabold text-sm rounded-2xl shadow-md hover:scale-105 transition transform">
      ✈️ 西村屋本館の最新空室状況・活松葉がにプランを見る
    </a>
  </div>
</div>

<!-- 宿2: グランディア芳泉 -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-yellow-100 text-yellow-900 font-black text-xs rounded-full">離れ露天風呂と黄色タグ越前がに</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">2. あわら温泉 グランディア芳泉（福井県あわら市）</h3>
    </div>
    <span class="px-3 py-1.5 bg-amber-50 border border-amber-300 text-amber-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 ${hGrandia.reviewAverage}（${hGrandia.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hGrandia.hotelImageUrl}" alt="${hGrandia.hotelName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hGrandia.roomImageUrl || hGrandia.hotelImageUrl}" alt="${hGrandia.hotelName} 客室露天" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs text-stone-700 leading-relaxed">
      <p class="text-sm font-semibold text-stone-800">北陸新幹線延伸でアクセス快適！離れ個室露天風呂で贅沢に食す越前がに懐石</p>
      <p>あわら温泉屈指の規模と格式を誇る名宿。別邸「個室露天風呂付き客室」では、自家源泉の滑らかな湯をプライベートに独占できます。冬の献立は、三国港や越前港から届く正真正銘の黄色タグ付き越前がに。熟練の料理人が引き出す活蟹の甘みと、越前陶芸の器に美しく盛られた冬の味覚の数々は、大切な記念日やご褒美旅行に最高の感動をもたらします。</p>
      <div class="p-3 bg-stone-50 rounded-xl space-y-1">
        <p><strong>【所在地】</strong> ${hGrandia.address1}${hGrandia.address2}</p>
        <p><strong>【交通アクセス】</strong> ${hGrandia.access}</p>
        <p><strong>【駐車場】</strong> ${hGrandia.parkingInformation}</p>
        <p><strong>【目安料金】</strong> 1名あたり ¥${hGrandia.hotelMinCharge.toLocaleString()}〜</p>
      </div>
    </div>
  </div>
  <div class="pt-2 text-center">
    <a href="${hGrandia.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="inline-block w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-red-600 to-amber-600 text-white font-extrabold text-sm rounded-2xl shadow-md hover:scale-105 transition transform">
      ✈️ グランディア芳泉の最新空室状況・越前がにプランを見る
    </a>
  </div>
</div>

<!-- 宿3: 城崎温泉 お宿 白山 -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-red-100 text-red-900 font-black text-xs rounded-full">5つの無料貸切温泉と満腹カニ尽くし</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">3. 城崎温泉 旅館 お宿 白山（兵庫県豊岡市城崎町）</h3>
    </div>
    <span class="px-3 py-1.5 bg-amber-50 border border-amber-300 text-amber-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 ${hHakusan.reviewAverage}（${hHakusan.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hHakusan.hotelImageUrl}" alt="${hHakusan.hotelName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hHakusan.roomImageUrl || hHakusan.hotelImageUrl}" alt="${hHakusan.hotelName} 貸切風呂" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs text-stone-700 leading-relaxed">
      <p class="text-sm font-semibold text-stone-800">カップル・夫婦・ファミリーに大人気！無料貸切風呂と但馬牛＆本松葉ガニの豪華饗宴</p>
      <p>城崎温泉駅から送迎バスですぐ、静かな山裾に位置する隠れ家宿。館内には趣の異なる5つの貸切温泉風呂があり、宿泊者はすべて無料で何度でも利用可能です。夕食は1人2杯〜2.5杯相当のカニをふんだんに使用した大ボリュームのカニ尽くし会席。焼きガニの香ばしい匂いと但馬牛ステーキのジューシーな旨味を同時に味わえる贅沢プランが特に高いクチコミ評価を得ています。</p>
      <div class="p-3 bg-stone-50 rounded-xl space-y-1">
        <p><strong>【所在地】</strong> ${hHakusan.address1}${hHakusan.address2}</p>
        <p><strong>【交通アクセス】</strong> ${hHakusan.access}</p>
        <p><strong>【駐車場】</strong> ${hHakusan.parkingInformation}</p>
        <p><strong>【目安料金】</strong> 1名あたり ¥${hHakusan.hotelMinCharge.toLocaleString()}〜</p>
      </div>
    </div>
  </div>
  <div class="pt-2 text-center">
    <a href="${hHakusan.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="inline-block w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-red-600 to-amber-600 text-white font-extrabold text-sm rounded-2xl shadow-md hover:scale-105 transition transform">
      ✈️ お宿 白山の最新空室状況・カニ尽くしプランを見る
    </a>
  </div>
</div>

<!-- 宿4: まつや千千 -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-yellow-100 text-yellow-900 font-black text-xs rounded-full">北陸最大級の露天大浴場「千のこぼれ湯」</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">4. 北陸 あわら温泉 まつや千千（福井県あわら市）</h3>
    </div>
    <span class="px-3 py-1.5 bg-amber-50 border border-amber-300 text-amber-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 ${hMatsuya.reviewAverage}（${hMatsuya.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hMatsuya.hotelImageUrl}" alt="${hMatsuya.hotelName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hMatsuya.roomImageUrl || hMatsuya.hotelImageUrl}" alt="${hMatsuya.hotelName} 大浴場" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs text-stone-700 leading-relaxed">
      <p class="text-sm font-semibold text-stone-800">自家源泉の豊富な湯量と、地物越前がにの茹で上げ・蟹すき鍋を味わう老舗大型旅館</p>
      <p>あわら温泉屈指の広さを誇る「千のこぼれ湯」は、つぼ湯や寝湯、サウナ、開放的な庭園露天風呂など多彩な湯巡りが楽しめる名湯。女性に嬉しい温泉たまご手作り体験や抹茶の振る舞いなど、心温まるおもてなしも魅力です。冬は三国港直送の越前がにの茹でがにや焼きガニ、お造りを盛り込んだ季節限定の会席が提供され、三世代家族やグループ旅行でも安心して上質なカニ旅を満喫できます。</p>
      <div class="p-3 bg-stone-50 rounded-xl space-y-1">
        <p><strong>【所在地】</strong> ${hMatsuya.address1}${hMatsuya.address2}</p>
        <p><strong>【交通アクセス】</strong> ${hMatsuya.access}</p>
        <p><strong>【駐車場】</strong> ${hMatsuya.parkingInformation}</p>
        <p><strong>【目安料金】</strong> 1名あたり ¥${hMatsuya.hotelMinCharge.toLocaleString()}〜</p>
      </div>
    </div>
  </div>
  <div class="pt-2 text-center">
    <a href="${hMatsuya.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="inline-block w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-red-600 to-amber-600 text-white font-extrabold text-sm rounded-2xl shadow-md hover:scale-105 transition transform">
      ✈️ まつや千千の最新空室状況・越前がにプランを見る
    </a>
  </div>
</div>

<!-- 宿5: はれや旅館 -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-yellow-100 text-yellow-900 font-black text-xs rounded-full">全室日本海オーシャンビュー＆三国港直送蟹</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">5. 三国温泉 展望自慢の料理旅館 はれや旅館（福井県坂井市三国町）</h3>
    </div>
    <span class="px-3 py-1.5 bg-amber-50 border border-amber-300 text-amber-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 ${hHareya.reviewAverage}（${hHareya.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hHareya.hotelImageUrl}" alt="${hHareya.hotelName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hHareya.roomImageUrl || hHareya.hotelImageUrl}" alt="${hHareya.hotelName} 展望風呂" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs text-stone-700 leading-relaxed">
      <p class="text-sm font-semibold text-stone-800">東尋坊近くの高台から日本海の夕日を眺め、本場三国港水揚げの越前がにを食す料理宿</p>
      <p>客室や展望風呂の窓一面に雄大な日本海が広がる絶景ロケーション。冬の日本海の荒波と夕日を眺めながら浸かる温泉は格別です。料理旅館を名乗る通り、主人が三国港の競りで直接目利きした新鮮な黄色タグ付き越前がにを提供。茹でたて熱々のカニ足をほおばると、ぎっしり詰まった身の甘みとジューシーなカニ汁が口いっぱいに広がり、本場漁港の宿ならではの圧倒的な鮮度を実感できます。</p>
      <div class="p-3 bg-stone-50 rounded-xl space-y-1">
        <p><strong>【所在地】</strong> ${hHareya.address1}${hHareya.address2}</p>
        <p><strong>【交通アクセス】</strong> ${hHareya.access}</p>
        <p><strong>【駐車場】</strong> ${hHareya.parkingInformation}</p>
        <p><strong>【目安料金】</strong> 1名あたり ¥${hHareya.hotelMinCharge.toLocaleString()}〜</p>
      </div>
    </div>
  </div>
  <div class="pt-2 text-center">
    <a href="${hHareya.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="inline-block w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-red-600 to-amber-600 text-white font-extrabold text-sm rounded-2xl shadow-md hover:scale-105 transition transform">
      ✈️ はれや旅館の最新空室状況・越前がにプランを見る
    </a>
  </div>
</div>

<h2 id="nearby-spots" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-red-500 pb-2 my-8">
  📸 宿の近隣観光地ガイド（Wikipedia公式データ連携）
</h2>
<p class="text-xs text-stone-600 mb-6">
  カニ旅とあわせて巡りたい、日本海沿岸の名所と温泉街です。
</p>

<div class="space-y-6 my-6">
  <!-- ズワイガニ -->
  <div class="p-6 rounded-3xl bg-stone-50 border border-stone-200 shadow-xs">
    <div class="grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
      <div class="md:col-span-5">
        <img src="${wCrab.thumbnail || 'https://img.travel.rakuten.co.jp/share/HOTEL/75399/75399.jpg'}" alt="ズワイガニ" class="w-full h-48 object-cover rounded-2xl border border-stone-200" loading="lazy" />
      </div>
      <div class="md:col-span-7 space-y-2 text-xs text-stone-700 leading-relaxed">
        <span class="inline-block px-2.5 py-0.5 bg-red-100 text-red-800 font-bold text-[11px] rounded-md">🦀 日本海の冬の味覚</span>
        <h3 class="text-base font-bold text-stone-900">ズワイガニ（越前がに・松葉がに）</h3>
        <p>${wCrab.extract}</p>
        <p class="text-stone-500"><strong>【漁期について】</strong> 雄ガニの漁期は11月6日〜翌年3月20日まで。小ぶりで内子・外子が詰まった雌ガニ（セイコガニ／親ガニ）は11月6日〜12月末までのわずか約2ヶ月間限定の希少な味覚です。</p>
      </div>
    </div>
  </div>

  <!-- 城崎温泉 -->
  <div class="p-6 rounded-3xl bg-stone-50 border border-stone-200 shadow-xs">
    <div class="grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
      <div class="md:col-span-5">
        <img src="${wKinosaki.thumbnail || 'https://img.travel.rakuten.co.jp/share/HOTEL/18819/18819.jpg'}" alt="城崎温泉" class="w-full h-48 object-cover rounded-2xl border border-stone-200" loading="lazy" />
      </div>
      <div class="md:col-span-7 space-y-2 text-xs text-stone-700 leading-relaxed">
        <span class="inline-block px-2.5 py-0.5 bg-amber-100 text-amber-800 font-bold text-[11px] rounded-md">♨️ 兵庫県豊岡市</span>
        <h3 class="text-base font-bold text-stone-900">城崎温泉（開湯1300年の名湯・外湯めぐり）</h3>
        <p>${wKinosaki.extract}</p>
        <p class="text-stone-500"><strong>【宿からの移動】</strong> 西村屋本館やお宿白山から外湯街へ徒歩ですぐ。浴衣に下駄を履いてカランコロンと歩く情緒が城崎の醍醐味です。</p>
      </div>
    </div>
  </div>

  <!-- 芦原温泉 -->
  <div class="p-6 rounded-3xl bg-stone-50 border border-stone-200 shadow-xs">
    <div class="grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
      <div class="md:col-span-5">
        <img src="${wAwara.thumbnail || 'https://img.travel.rakuten.co.jp/share/HOTEL/16207/16207.jpg'}" alt="芦原温泉" class="w-full h-48 object-cover rounded-2xl border border-stone-200" loading="lazy" />
      </div>
      <div class="md:col-span-7 space-y-2 text-xs text-stone-700 leading-relaxed">
        <span class="inline-block px-2.5 py-0.5 bg-emerald-100 text-emerald-800 font-bold text-[11px] rounded-md">♨️ 福井県あわら市</span>
        <h3 class="text-base font-bold text-stone-900">あわら温泉（関西の奥座敷）</h3>
        <p>${wAwara.extract}</p>
        <p class="text-stone-500"><strong>【宿からの移動】</strong> グランディア芳泉、まつや千千が位置する温泉街中心部。屋台村「湯けむり横丁」で地元の人々と地酒を酌み交わすのもおすすめです。</p>
      </div>
    </div>
  </div>

  <!-- 東尋坊 -->
  <div class="p-6 rounded-3xl bg-stone-50 border border-stone-200 shadow-xs">
    <div class="grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
      <div class="md:col-span-5">
        <img src="${wTojinbo.thumbnail || 'https://img.travel.rakuten.co.jp/share/HOTEL/6205/6205_kan1.jpg'}" alt="東尋坊" class="w-full h-48 object-cover rounded-2xl border border-stone-200" loading="lazy" />
      </div>
      <div class="md:col-span-7 space-y-2 text-xs text-stone-700 leading-relaxed">
        <span class="inline-block px-2.5 py-0.5 bg-sky-100 text-sky-800 font-bold text-[11px] rounded-md">🌊 福井県坂井市三国町</span>
        <h3 class="text-base font-bold text-stone-900">東尋坊（国の天然記念物・柱状節理）</h3>
        <p>${wTojinbo.extract}</p>
        <p class="text-stone-500"><strong>【宿からの移動】</strong> はれや旅館から車で約5分、あわら温泉から車で約15分。高さ20m以上の輝石安山岩の断崖絶壁に日本海の荒波が打ち寄せる雄大な景勝地です。</p>
      </div>
    </div>
  </div>
</div>

<h2 id="model-course" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-red-500 pb-2 my-8">
  🗺️ 解禁直後のカニを満喫する1泊2日モデルコース（北陸編）
</h2>
<div class="my-6 p-6 rounded-3xl bg-gradient-to-br from-red-50/60 to-amber-50/40 border border-red-200 space-y-4 text-xs text-stone-700 leading-relaxed">
  <div class="space-y-1">
    <h3 class="font-bold text-sm text-stone-900">【1日目】北陸新幹線で福井へ・東尋坊散策と越前がに会席</h3>
    <p>東京駅または大阪駅から新幹線・特急で芦原温泉駅へ。レンタカーで東尋坊の柱状節理を見学し、三国湊のレトロな町並みを散策。「グランディア芳泉」へチェックイン。客室露天風呂で温まった後、黄色タグ付き越前がにの活造り・茹でがに・焼きガニのフルコースを堪能。</p>
  </div>
  <div class="space-y-1">
    <h3 class="font-bold text-sm text-stone-900">【2日目】三国港の朝市散策と永平寺参拝</h3>
    <p>朝食後、三国港の鮮魚市場や海産物店でセイコガニ（雌ガニ）やへしこをお土産に購入。車で曹洞宗大本山「永平寺」へ足を延ばし、巨杉に囲まれた静寂の伽藍を参拝。福井名物の越前おろしそばを味わって帰路へ。</p>
  </div>
</div>

<h2 id="faq" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-red-500 pb-2 my-8">
  ❓ よくある質問（FAQ）
</h2>
<div class="space-y-3 my-6 text-xs text-stone-800">
  <div class="p-4 rounded-2xl bg-white border border-stone-200 space-y-1">
    <h3 class="font-bold text-stone-900">Q1. 越前がにと松葉がにの違いは何ですか？</h3>
    <p class="text-stone-600">A. 生物学的には同じ「ズワイガニの雄」ですが、水揚げされる地域と漁港によって名称が異なります。福井県で揚がったものが「越前がに（黄色タグ）」、京都・兵庫・鳥取・島根など山陰地方で揚がったものが「松葉がに（港ごとに青やピンク等のタグ）」と呼ばれます。</p>
  </div>
  <div class="p-4 rounded-2xl bg-white border border-stone-200 space-y-1">
    <h3 class="font-bold text-stone-900">Q2. 「冷凍ガニ」と「活ガニ（タグ付き）」の味の違いは？</h3>
    <p class="text-stone-600">A. 決定的な違いは「身の甘み」と「蟹味噌の鮮度・風味」です。水揚げ後に生簀で生かされたタグ付き活蟹は、熱を入れても身がパサつかず、ジューシーなカニ汁と弾力ある食感、苦味のまったくないクリーミーな蟹味噌を楽しめます。</p>
  </div>
  <div class="p-4 rounded-2xl bg-white border border-stone-200 space-y-1">
    <h3 class="font-bold text-stone-900">Q3. カニを一番美味しく安く食べられる時期はいつですか？</h3>
    <p class="text-stone-600">A. 解禁直後の11月中旬〜12月上旬は初物の活気があり、年末年始の高騰前の平日を狙うと比較的お得な料金で良質な活蟹プランを予約できます。また、雌ガニ（セイコガニ）を味わいたい場合は11月〜12月中の来訪が必須です。</p>
  </div>
</div>

<div class="my-8 p-6 rounded-3xl bg-red-50/60 border border-red-200">
  <h3 class="text-sm font-bold text-red-950 mb-2">🔗 あわせてチェックしたいカニ・温泉エリアの旅行ガイド</h3>
  <ul class="text-xs space-y-1.5 font-medium text-stone-700">
    <li>👉 <a href="/prefectures/hyogo/" class="text-red-800 hover:text-red-600 underline">兵庫県の観光・城崎温泉＆有馬温泉特集</a></li>
    <li>👉 <a href="/prefectures/fukui/" class="text-red-800 hover:text-red-600 underline">福井県の観光・あわら温泉＆越前がに特集</a></li>
    <li>👉 <a href="/posts/kinosaki-onsen-ranking-hotels-guide" class="text-red-800 hover:text-red-600 underline">城崎温泉の人気温泉宿ランキング＆外湯めぐりガイド</a></li>
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
    hot_spring_info: "城崎温泉（ナトリウム・カルシウム塩化物泉）・あわら温泉（含塩化土類食塩泉）・三国温泉（ナトリウム・カルシウム塩化物泉）",
    parking_info: "各宿に無料駐車場完備。城崎温泉街は道幅が狭いため宿専用駐車場の利用が安心です。",
    meal_availability: "タグ付き本ズワイガニ（越前がに・津居山がに）フルコース・花咲きカニ刺し・甲羅味噌焼き・但馬牛ステーキ・若狭牛",
    hotel_name: "カニ解禁！越前がに＆松葉がに 厳選名宿5選",
    image: hNishimuraya.hotelImageUrl,
    affiliate_url: hNishimuraya.affiliateUrl,
    categories: ["11月旅行", "冬旅行", "カニ料理", "ご当地グルメ", "温泉宿", "兵庫旅行", "福井旅行"],
    keywords: [
      "カニ漁 解禁 2026",
      "越前がに 宿 おすすめ",
      "松葉がに 城崎温泉 ホテル",
      "津居山がに 宿泊",
      "城崎温泉 西村屋本館 カニ",
      "あわら温泉 グランディア芳泉 越前がに",
      "城崎温泉 お宿 白山",
      "あわら温泉 まつや千千",
      "三国温泉 はれや旅館 越前がに",
      "タグ付きカニ 温泉宿"
    ],
    review: reviewHtml,
    price: hNishimuraya.hotelMinCharge || 28000,
    rating: hNishimuraya.reviewAverage || 4.5,
    date: date,
    other_images: [
      hGrandia.hotelImageUrl,
      hHakusan.hotelImageUrl,
      hMatsuya.hotelImageUrl,
      hHareya.hotelImageUrl,
      wCrab.thumbnail,
      wKinosaki.thumbnail
    ].filter(Boolean),
    summary: description,
    review_count: (hNishimuraya.reviewCount || 0) + (hGrandia.reviewCount || 0) + (hHakusan.reviewCount || 0),
    family_friendly: "はい、客室個室食対応や貸切風呂完備の宿が多く、お子様連れでも落ち着いてカニ料理を堪能できます。"
  };

  const noteMarkdown = `---
title: "${title}"
date: "${date}"
description: "${description}"
tags: ["越前がに", "松葉がに", "カニ解禁", "城崎温泉", "あわら温泉", "冬旅行", "楽天トラベル"]
---

毎年11月6日午前0時、日本海沿岸の漁港からカニ漁船が一斉に出港します。初冬の荒波を越えて水揚げされる「雄のズワイガニ」は、福井県では皇室献上蟹としても名高い「越前がに」、山陰（兵庫・京都・鳥取）では「松葉がに」と呼ばれ、冬の日本海グルメの最高峰として君臨します。

初競りの活気とともに、生簀（いけす）から引き揚げられた活蟹は、花が咲いたように透き通るお造り、香ばしい炭火焼き、茹でたての濃厚な蟹味噌、そして旨味が凝縮したカニすき鍋へと姿を変えます。楽天トラベル最新データから★4.3〜4.6超の厳選名宿をお届けします。

---

## 🏷️ 越前がに＆松葉がにの選び方・攻略ポイント
- **11月6日午前0時 解禁**: 日本海全域で一斉にズワイガニ漁が解禁。同日午後〜翌朝にかけて各地の漁港で初競りが行われます。
- **ブランドタグの真実**: 福井県の「黄色タグ（越前がに）」、城崎・津居山港の「青色タグ」、柴山港の「ピンクタグ」。厳しい基準をクリアしたタグ付きガニは、冷凍とは別次元の繊細な甘みとコクがあります。
- **雌ガニ（セイコガニ／親ガニ）は年内限定**: 内子・外子が詰まった雌ガニの漁期は11月6日〜12月末までのわずか約2ヶ月間。濃厚なカニ味噌を味わいたいなら年内の旅行が必須です。
- **城崎・あわらの名湯**: カニ料理を堪能する前後は、1300年の歴史を誇る城崎温泉の外湯めぐりや、関西の奥座敷あわら温泉の名湯で癒やされるのが王道ルートです。

---

## 1. 城崎温泉 西村屋本館（兵庫県豊岡市城崎町）
![西村屋本館](${hNishimuraya.hotelImageUrl})
創業160年、登録有形文化財の数寄屋建築。日本庭園を望む客室で、津居山港直送の青タグ付き活松葉がに会席を堪能できる山陰最高峰の宿。

- **楽天トラベル総合評価**: ★${hNishimuraya.reviewAverage}（クチコミ ${hNishimuraya.reviewCount}件）
- **目安料金**: 1名 ¥${hNishimuraya.hotelMinCharge.toLocaleString()}〜
- **所在地**: ${hNishimuraya.address1}${hNishimuraya.address2}
- **アクセス**: ${hNishimuraya.access}
- **駐車場**: ${hNishimuraya.parkingInformation}
- [👉 西村屋本館の宿泊プラン・空室状況を見る](${hNishimuraya.affiliateUrl})

### 現地攻略のツボ
- 津居山港から車でわずか10分の立地。生簀から引き揚げたばかりの活蟹を、お部屋専属の仲居さんが目の前で炭火焼きにしてくれます。
- 平野屋庭園を望む数寄屋客室と、庭園露天風呂「吉の湯」で過ごす時間はまさに大人の極上ステイです。

---

## 2. あわら温泉 グランディア芳泉（福井県あわら市）
![グランディア芳泉](${hGrandia.hotelImageUrl})
北陸新幹線延伸で東京・関西からのアクセスが向上。離れ個室露天風呂付き客室で、黄色タグ付きの極上越前がにフルコースを優雅に味わえます。

- **楽天トラベル総合評価**: ★${hGrandia.reviewAverage}（クチコミ ${hGrandia.reviewCount}件）
- **目安料金**: 1名 ¥${hGrandia.hotelMinCharge.toLocaleString()}〜
- **所在地**: ${hGrandia.address1}${hGrandia.address2}
- **アクセス**: ${hGrandia.access}
- **駐車場**: ${hGrandia.parkingInformation}
- [👉 グランディア芳泉の宿泊プラン・空室状況を見る](${hGrandia.affiliateUrl})

### 現地攻略のツボ
- 離れ「ゆとろぎ亭」の客室露天風呂で自家源泉を満喫。三国港で競り落とされた黄色タグ付き越前がにを個室でゆっくり堪能。
- 大浴場「天上のSPA」からも田園風景が一望でき、湯上がり処のエステや足湯も充実しています。

---

## 3. 城崎温泉 旅館 お宿 白山（兵庫県豊岡市城崎町）
![お宿 白山](${hHakusan.hotelImageUrl})
5つの無料貸切温泉風呂が人気。1人2杯相当の本松葉ガニと但馬牛を豪快に味わえる高コスパなカニ尽くし会席が評判です。

- **楽天トラベル総合評価**: ★${hHakusan.reviewAverage}（クチコミ ${hHakusan.reviewCount}件）
- **目安料金**: 1名 ¥${hHakusan.hotelMinCharge.toLocaleString()}〜
- **所在地**: ${hHakusan.address1}${hHakusan.address2}
- **アクセス**: ${hHakusan.access}
- **駐車場**: ${hHakusan.parkingInformation}
- [👉 お宿 白山の宿泊プラン・空室状況を見る](${hHakusan.affiliateUrl})

### 現地攻略のツボ
- 予約不要で空いていれば何度でも入れる5つの貸切温泉風呂（岩風呂、陶器風呂など）がカップル・ファミリーに大人気。
- 焼きガニ、カニ刺し、甲羅味噌焼き、カニすき鍋、さらに但馬牛ステーキまで付く大満足のフルコースがリーズナブルに楽しめます。

---

## 4. 北陸 あわら温泉 まつや千千（福井県あわら市）
![まつや千千](${hMatsuya.hotelImageUrl})
北陸屈指のスケールを誇る名露天大浴場「千のこぼれ湯」。三国港直送の越前がにの茹で上げやカニすき鍋を堪能できる老舗大型旅館。

- **楽天トラベル総合評価**: ★${hMatsuya.reviewAverage}（クチコミ ${hMatsuya.reviewCount}件）
- **目安料金**: 1名 ¥${hMatsuya.hotelMinCharge.toLocaleString()}〜
- **所在地**: ${hMatsuya.address1}${hMatsuya.address2}
- **アクセス**: ${hMatsuya.access}
- **駐車場**: ${hMatsuya.parkingInformation}
- [👉 まつや千千の宿泊プラン・空室状況を見る](${hMatsuya.affiliateUrl})

### 現地攻略のツボ
- つぼ湯や寝湯、庭園露天風呂が揃う「千のこぼれ湯」は男性・女性ともに北陸最大級の広さ。
- 温泉卵作り体験や抹茶のサービスなど無料のおもてなしが豊富で、三世代の家族旅行にも安心です。

---

## 5. 三国温泉 展望自慢の料理旅館 はれや旅館（福井県坂井市三国町）
![はれや旅館](${hHareya.hotelImageUrl})
東尋坊近くの高台に位置し全室オーシャンビュー。日本海に沈む夕日を眺めながら、主人が三国港の競りで直接買い付けた本物の越前がにを堪能。

- **楽天トラベル総合評価**: ★${hHareya.reviewAverage}（クチコミ ${hHareya.reviewCount}件）
- **目安料金**: 1名 ¥${hHareya.hotelMinCharge.toLocaleString()}〜
- **所在地**: ${hHareya.address1}${hHareya.address2}
- **アクセス**: ${hHareya.access}
- **駐車場**: ${hHareya.parkingInformation}
- [👉 はれや旅館の宿泊プラン・空室状況を見る](${hHareya.affiliateUrl})

### 現地攻略のツボ
- 全室オーシャンビュー。日本海の冬の夕暮れを眺めながら入る展望風呂は絶景そのもの。
- 料理旅館ならではの鮮度抜群の活越前がにと、三国港水揚げの甘エビや地魚のお造りは魚好きを唸らせます。

---

## 🗺️ 解禁直後のカニを満喫するモデルコース
- **1日目**: 新幹線で芦原温泉駅へ。東尋坊を散策し、三国湊のレトロな町並みを見学。あわら温泉「グランディア芳泉」へチェックインし、黄色タグ付き越前がに会席に舌鼓。
- **2日目**: 三国港の鮮魚市場でセイコガニをお土産に購入。曹洞宗大本山・永平寺を参拝し、越前おろしそばを味わって帰路へ。
`;

  return { postData, noteMarkdown };
};
