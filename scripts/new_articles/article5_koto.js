// scripts/new_articles/article5_koto.js
module.exports = function buildArticle5(themeData) {
  const hotels = themeData.hotels;
  const wiki = themeData.wiki;

  const slug = "autumn-koto-sanzan-eigenji-momiji-ogoto-onsen-hotels-guide";
  const title = "【滋賀・湖東】湖東三山＆永源寺「錦秋の紅葉曼荼羅」完全攻略！日本紅葉名所100選と近江牛懐石、名湯・おごと温泉の絶景露天風呂を巡る厳選宿5選";
  const description = "11月中旬から下旬、鈴鹿山脈の西麓が燃えるような深紅に染まる滋賀の名刹「湖東三山（西明寺・金剛輪寺・百済寺）」と大本山「永源寺」。金剛輪寺の『血染めのもみじ』や西明寺の不断桜と紅葉の奇跡の共演、彦根城玄宮園ライトアップを巡る大人旅。日本三大和牛・近江牛の本格会席と、びわ湖の絶景を望むおごと温泉・彦根の厳選名宿5選を徹底解説。";
  const date = "2026-10-30";
  const prefecture = "滋賀県";
  const area = "湖東・彦根・近江八幡・おごと温泉";

  const hRyoksuitei = hotels.find(h => h.hotelNo === 3165) || hotels[0];
  const hKikunoya = hotels.find(h => h.hotelNo === 8165) || hotels[1];
  const hHikoneCastle = hotels.find(h => h.hotelNo === 145042) || hotels[2];
  const hOmihachiman = hotels.find(h => h.hotelNo === 76886) || hotels[3];
  const hYokaichi = hotels.find(h => h.hotelNo === 1479) || hotels[4];

  const wKongo = wiki["金剛輪寺"] || {};
  const wEigenji = wiki["永源寺"] || {};
  const wHikone = wiki["彦根城"] || {};
  const wOgoto = wiki["雄琴温泉"] || {};

  const reviewHtml = `
<div class="my-6 p-4 rounded-2xl bg-gradient-to-r from-amber-950 via-red-950 to-stone-900 text-white shadow-md flex flex-col sm:flex-row items-center justify-between gap-3">
  <div class="space-y-0.5 text-center sm:text-left">
    <div class="flex items-center justify-center sm:justify-start gap-1.5 text-amber-300 font-extrabold text-xs">
      <span>🍁</span><span>2026年 湖東三山・永源寺 錦秋の特別拝観速報</span>
    </div>
    <p class="text-xs text-stone-200">
      11月中旬〜下旬は金剛輪寺の「血染めのもみじ」と西明寺の「不断桜」が重なる最盛期！びわ湖を一望する露天風呂付き客室で近江牛会席を。
    </p>
  </div>
  <a href="${hRyoksuitei.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="shrink-0 px-4 py-2 bg-amber-500 hover:bg-amber-400 text-stone-950 font-black text-xs rounded-xl shadow transition transform hover:scale-105">
    ✨ びわこ緑水亭の空室・プランを見る →
  </a>
</div>

<h2 id="intro" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-amber-600 pb-2 mb-4">
  古刹を埋め尽くす「血染めのもみじ」と、びわ湖の朝露に輝く極上の湯宿
</h2>
<p class="text-sm md:text-base text-stone-700 leading-relaxed mb-4">
  京都の人混みを離れ、凛とした静寂の中で圧倒的な紅葉美に浸りたい旅人が目指す桃源郷——それが滋賀県東部、鈴鹿山脈の懐に抱かれた「湖東三山（西明寺・金剛輪寺・百済寺）」と臨済宗大本山「永源寺」です。「日本紅葉名所100選」に名を連ねる古刹群は、秋が深まる11月中旬、山門から本堂へと続く参道が鮮烈な朱色と黄金色に染め上がります。
</p>
<p class="text-sm md:text-base text-stone-700 leading-relaxed mb-6">
  金剛輪寺の深く燃えるような「血染めのもみじ」、西明寺で秋風に揺れる白い「不断桜」と深紅のカエデが織りなす奇跡のグラデーション、そして愛知川の渓谷に架かる紅葉のトンネルが美しい永源寺。古刹散策の後は、夜の彦根城・玄宮園ライトアップを鑑賞し、日本三大和牛「近江牛」の極上すき焼きに舌鼓を打つ。びわ湖を望む名湯「おごと温泉」の露天風呂で旅の疲れを洗い流す、大人の贅沢な秋旅を完全ナビゲートします。
</p>

<h2 id="event-guide" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-amber-600 pb-2 my-6">
  🍁 湖東三山＆永源寺の必見スポットと巡り方のコツ
</h2>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
  <div class="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm space-y-3">
    <div class="flex items-center gap-2 border-b border-stone-100 pb-3">
      <span class="px-2.5 py-1 bg-red-100 text-red-800 font-extrabold text-xs rounded-lg">古刹の紅葉曼荼羅</span>
      <h3 class="text-base font-bold text-stone-900">湖東三山＆永源寺の4大見どころ</h3>
    </div>
    <div class="text-xs text-stone-700 space-y-2 leading-relaxed">
      <p>① <strong>金剛輪寺（愛荘町）:</strong> 国指定名勝庭園を埋め尽くすモミジは、あまりの鮮烈な深紅から古くより「血染めのもみじ」と称されます。千体地蔵が並ぶ参道の紅葉トンネルも圧巻。</p>
      <p>② <strong>西明寺（甲良町）:</strong> 国宝の本堂と三重塔を彩る紅葉。秋から冬にかけて開花する可憐な「不断桜」が咲き、白い桜花と真っ赤なカエデが同時に鑑賞できる日本屈指の絶景スポット。</p>
      <p>③ <strong>百済寺（東近江市）:</strong> 聖徳太子創建の古寺。本坊喜見院の庭園「天下遠望の名園」からは、紅葉の木々の向こうに比叡山やびわ湖まで見渡す大パノラマが広がります。</p>
      <p>④ <strong>永源寺（東近江市）:</strong> 愛知川上流の渓谷に佇む禅寺。門前の「旦度橋」から眺める渓谷美と、頭上を覆い尽くすカエデの参道ライトアップは息を呑む幽玄美。</p>
    </div>
  </div>

  <div class="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm space-y-3">
    <div class="flex items-center gap-2 border-b border-stone-100 pb-3">
      <span class="px-2.5 py-1 bg-amber-100 text-amber-800 font-extrabold text-xs rounded-lg">モデルルート＆夜間イベント</span>
      <h3 class="text-base font-bold text-stone-900">効率的な参拝順序と彦根城ライトアップ</h3>
    </div>
    <div class="text-xs text-stone-700 space-y-2 leading-relaxed">
      <p><strong>【車での巡り方】</strong> 名神高速道路の湖東三山スマートICまたは八日市ICを基点に「西明寺 → 金剛輪寺 → 百済寺 → 永源寺」の順に国道307号線を南下するのが最もスムーズ。所要時間は拝観を含めて約4〜5時間。</p>
      <p><strong>【彦根城 玄宮園秋のライトアップ】</strong> 11月中旬〜下旬の夜間、国宝彦根城の麓にある大名庭園「玄宮園」がライトアップ。池の水面に逆さに映り込む国宝天守と朱塗りの鳳凰台は、昼間とは一変した幻想的な美しさ。</p>
      <p><strong>【ご当地グルメ】</strong> きめ細かな霜降りと甘みが際立つ最高級「近江牛」のすき焼き・しゃぶしゃぶ、八幡赤こんにゃく、丁字麩、そして近江米の新米は絶対に味わいたい逸品です。</p>
    </div>
  </div>
</div>

<h2 id="hotel-selection" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-amber-600 pb-2 my-8">
  🏨 錦秋の滋賀と名湯を堪能！厳選おすすめ宿5選
</h2>

<!-- 宿1: おごと温泉 びわこ緑水亭 -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-amber-100 text-amber-900 font-black text-xs rounded-full">びわ湖一望の客室露天風呂＆極上近江牛会席</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">1. おごと温泉 びわこ緑水亭（滋賀県大津市雄琴）</h3>
    </div>
    <span class="px-3 py-1.5 bg-amber-50 border border-amber-300 text-amber-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 ${hRyoksuitei.reviewAverage}（${hRyoksuitei.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hRyoksuitei.hotelImageUrl}" alt="${hRyoksuitei.hotelName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hRyoksuitei.roomImageUrl || hRyoksuitei.hotelImageUrl}" alt="${hRyoksuitei.hotelName} 客室露天風呂" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs text-stone-700 leading-relaxed">
      <p class="text-sm font-semibold text-stone-800">湖畔に佇む上質な温泉旅館。びわ湖の朝焼けを望む露天風呂と最高級A5ランク近江牛ステーキ</p>
      <p>雄大なびわ湖の渚に面して建つ、おごと温泉屈指のラグジュアリー旅館。多くの客室に自家源泉を引き込んだ専用露天風呂が備わり、水平線から昇る朝日を湯船に浸かりながら眺める朝のひとときは格別です。pH9.0のアルカリ性単純温泉は「美肌の湯」として名高く、湯上がりの肌が驚くほど滑らかになります。夕食は認定近江牛の陶板ステーキやしゃぶしゃぶ、びわ湖の稚鮎や鮒寿司など、滋賀が誇る山海の美味を贅沢に盛り込んだ京風会席に舌鼓を打てます。</p>
      <div class="p-3 bg-stone-50 rounded-xl space-y-1">
        <p><strong>【所在地】</strong> ${hRyoksuitei.address1}${hRyoksuitei.address2}</p>
        <p><strong>【交通アクセス】</strong> ${hRyoksuitei.access}</p>
        <p><strong>【駐車場】</strong> ${hRyoksuitei.parkingInformation}</p>
        <p><strong>【目安料金】</strong> 1名あたり ¥${hRyoksuitei.hotelMinCharge.toLocaleString()}〜</p>
      </div>
    </div>
  </div>
  <div class="pt-2 text-center">
    <a href="${hRyoksuitei.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="inline-block w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-amber-600 to-red-600 text-white font-extrabold text-sm rounded-2xl shadow-md hover:scale-105 transition transform">
      ✨ びわこ緑水亭の最新空室状況・宿泊プランを見る
    </a>
  </div>
</div>

<!-- 宿2: おごと温泉 暖灯館 きくのや -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-red-100 text-red-900 font-black text-xs rounded-full">温かい灯りと心尽くしのおもてなし・料理自慢の宿</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">2. おごと温泉 暖灯館 きくのや（滋賀県大津市雄琴）</h3>
    </div>
    <span class="px-3 py-1.5 bg-amber-50 border border-amber-300 text-amber-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 ${hKikunoya.reviewAverage}（${hKikunoya.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hKikunoya.hotelImageUrl}" alt="${hKikunoya.hotelName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hKikunoya.roomImageUrl || hKikunoya.hotelImageUrl}" alt="${hKikunoya.hotelName} 露天風呂" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs text-stone-700 leading-relaxed">
      <p class="text-sm font-semibold text-stone-800">館内に灯る優しい行燈の光。近江牛すき焼きとお部屋食で寛ぐ癒やしの温泉時間</p>
      <p>「我が家のような温かさ」をモットーに、きめ細やかな心配りと温かな灯りで出迎えてくれるおごと温泉の隠れ宿。びわ湖を望む露天風呂付き客室や、畳敷きの心地よい和室が揃い、シニアやカップルから絶大なリピート率を誇ります。お食事は夕朝ともにお部屋または完全個室で提供され、霜降り近江牛のすき焼きや旬魚のお造りをプライベート空間で心ゆくまで味わえます。大浴場には木の香漂う檜の湯船と岩露天風呂があり、名湯おごと温泉の滑らかな湯触りを堪能できます。</p>
      <div class="p-3 bg-stone-50 rounded-xl space-y-1">
        <p><strong>【所在地】</strong> ${hKikunoya.address1}${hKikunoya.address2}</p>
        <p><strong>【交通アクセス】</strong> ${hKikunoya.access}</p>
        <p><strong>【駐車場】</strong> ${hKikunoya.parkingInformation}</p>
        <p><strong>【目安料金】</strong> 1名あたり ¥${hKikunoya.hotelMinCharge.toLocaleString()}〜</p>
      </div>
    </div>
  </div>
  <div class="pt-2 text-center">
    <a href="${hKikunoya.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="inline-block w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-amber-600 to-red-600 text-white font-extrabold text-sm rounded-2xl shadow-md hover:scale-105 transition transform">
      ✨ 暖灯館 きくのやの最新空室状況・宿泊プランを見る
    </a>
  </div>
</div>

<!-- 宿3: 彦根キャッスル リゾート＆スパ -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-stone-800 text-amber-300 font-black text-xs rounded-full">国宝彦根城天守を真正面に望む唯一無二の絶景リゾート</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">3. 彦根キャッスル リゾート＆スパ（滋賀県彦根市佐和町）</h3>
    </div>
    <span class="px-3 py-1.5 bg-stone-100 border border-stone-300 text-stone-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 ${hHikoneCastle.reviewAverage}（${hHikoneCastle.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hHikoneCastle.hotelImageUrl}" alt="${hHikoneCastle.hotelName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hHikoneCastle.roomImageUrl || hHikoneCastle.hotelImageUrl}" alt="${hHikoneCastle.hotelName} 城見風呂" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs text-stone-700 leading-relaxed">
      <p class="text-sm font-semibold text-stone-800">大浴殿「城見の湯」からライトアップされた彦根城を鑑賞。近江牛鉄板焼きと日本料理の極み</p>
      <p>彦根城の中濠に面し、客室や大浴殿からライトアップされた国宝彦根城天守を間近に仰ぎ見ることができる贅沢なリゾートホテル。展望大浴殿「城見の湯」では、湯船のガラス越しに夜空に浮かび上がる天守の雄姿を眺めながら特別なリラックスタイムを過ごせます。夕食は館内レストラン「近江ダイニング 橘菖」にて、目の前でシェフが焼き上げる極上近江牛フィレステーキや、地元湖東の契約農家から届く新鮮野菜を使ったモダン和会席。玄宮園の紅葉ライトアップへも徒歩約5分で向かえます。</p>
      <div class="p-3 bg-stone-50 rounded-xl space-y-1">
        <p><strong>【所在地】</strong> ${hHikoneCastle.address1}${hHikoneCastle.address2}</p>
        <p><strong>【交通アクセス】</strong> ${hHikoneCastle.access}</p>
        <p><strong>【駐車場】</strong> ${hHikoneCastle.parkingInformation}</p>
        <p><strong>【目安料金】</strong> 1名あたり ¥${hHikoneCastle.hotelMinCharge.toLocaleString()}〜</p>
      </div>
    </div>
  </div>
  <div class="pt-2 text-center">
    <a href="${hHikoneCastle.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="inline-block w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-stone-800 to-stone-900 text-amber-300 font-extrabold text-sm rounded-2xl shadow-md hover:scale-105 transition transform">
      ✨ 彦根キャッスル リゾート＆スパの最新空室状況・宿泊プランを見る
    </a>
  </div>
</div>

<!-- 宿4: 休暇村 近江八幡 -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-teal-100 text-teal-900 font-black text-xs rounded-full">宮ヶ浜の渚・びわ湖を望む天然温泉と近江牛プレミアムビュッフェ</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">4. 休暇村 近江八幡（滋賀県近江八幡市沖島町）</h3>
    </div>
    <span class="px-3 py-1.5 bg-amber-50 border border-amber-300 text-amber-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 ${hOmihachiman.reviewAverage}（${hOmihachiman.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hOmihachiman.hotelImageUrl}" alt="${hOmihachiman.hotelName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hOmihachiman.roomImageUrl || hOmihachiman.hotelImageUrl}" alt="${hOmihachiman.hotelName} 露天風呂" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs text-stone-700 leading-relaxed">
      <p class="text-sm font-semibold text-stone-800">目の前に広がるびわ湖と沖島。近江牛すき焼き・ステーキ食べ放題と美肌の天然温泉</p>
      <p>びわ湖水泳場の名所「宮ヶ浜」の目の前に位置し、全室レイクビューを誇る自然派リゾート。敷地内から湧出する天然温泉「宮ヶ浜の湯」は、湖のパノラマと一体化する露天風呂で心ゆくまで浸かることができます。ディナービュッフェでは、日本三大和牛・近江牛のすき焼きやローストビーフ、ステーキがなんと好きなだけ食べ放題！湖東三山や近江八幡の水郷めぐり、安土城跡の散策拠点として抜群のロケーションとコストパフォーマンスを誇ります。</p>
      <div class="p-3 bg-stone-50 rounded-xl space-y-1">
        <p><strong>【所在地】</strong> ${hOmihachiman.address1}${hOmihachiman.address2}</p>
        <p><strong>【交通アクセス】</strong> ${hOmihachiman.access}</p>
        <p><strong>【駐車場】</strong> ${hOmihachiman.parkingInformation}</p>
        <p><strong>【目安料金】</strong> 1名あたり ¥${hOmihachiman.hotelMinCharge.toLocaleString()}〜</p>
      </div>
    </div>
  </div>
  <div class="pt-2 text-center">
    <a href="${hOmihachiman.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="inline-block w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-amber-600 to-red-600 text-white font-extrabold text-sm rounded-2xl shadow-md hover:scale-105 transition transform">
      ✨ 休暇村 近江八幡の最新空室状況・宿泊プランを見る
    </a>
  </div>
</div>

<!-- 宿5: 八日市ロイヤルホテル -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-blue-100 text-blue-900 font-black text-xs rounded-full">名神八日市IC車で1分！永源寺・百済寺に最も近い快適拠点</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">5. 八日市ロイヤルホテル（滋賀県東近江市妙法寺町）</h3>
    </div>
    <span class="px-3 py-1.5 bg-amber-50 border border-amber-300 text-amber-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 ${hYokaichi.reviewAverage}（${hYokaichi.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hYokaichi.hotelImageUrl}" alt="${hYokaichi.hotelName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hYokaichi.roomImageUrl || hYokaichi.hotelImageUrl}" alt="${hYokaichi.hotelName} レストラン" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs text-stone-700 leading-relaxed">
      <p class="text-sm font-semibold text-stone-800">無料駐車場100台完備。東近江の紅葉めぐりを早朝一番から効率よくスタート</p>
      <p>名神高速道路「八日市IC」を降りてわずか1分という抜群の交通利便性を誇るシティホテル。永源寺や百済寺まで車で約15〜20分で直行できるため、朝一番の混雑前に紅葉寺へ駆けつけたいマイカー・レンタカー派に圧倒的人気を集めています。客室は清潔で落ち着いた広めの造り。館内レストランでは近江牛のステーキ御膳や地元食材の朝食バイキングが楽しめ、ビジネスから秋の湖東観光まで幅広く頼りになる安心のステイを提供してくれます。</p>
      <div class="p-3 bg-stone-50 rounded-xl space-y-1">
        <p><strong>【所在地】</strong> ${hYokaichi.address1}${hYokaichi.address2}</p>
        <p><strong>【交通アクセス】</strong> ${hYokaichi.access}</p>
        <p><strong>【駐車場】</strong> ${hYokaichi.parkingInformation}</p>
        <p><strong>【目安料金】</strong> 1名あたり ¥${hYokaichi.hotelMinCharge.toLocaleString()}〜</p>
      </div>
    </div>
  </div>
  <div class="pt-2 text-center">
    <a href="${hYokaichi.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="inline-block w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-amber-600 to-red-600 text-white font-extrabold text-sm rounded-2xl shadow-md hover:scale-105 transition transform">
      ✨ 八日市ロイヤルホテルの最新空室状況・宿泊プランを見る
    </a>
  </div>
</div>

<h2 id="nearby-spots" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-amber-600 pb-2 my-8">
  📸 宿の近隣観光地ガイド（Wikipedia公式データ連携）
</h2>
<p class="text-xs text-stone-600 mb-6">
  紅葉旅のハイライトとなる、湖東・彦根エリアの主要名所案内です。
</p>

<div class="space-y-6 my-6">
  <!-- スポット1: 金剛輪寺 -->
  <div class="p-6 rounded-3xl bg-stone-50 border border-stone-200 shadow-xs">
    <div class="grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
      <div class="md:col-span-5">
        <img src="${wKongo.thumbnail || 'https://img.travel.rakuten.co.jp/share/HOTEL/1479/1479.jpg'}" alt="金剛輪寺" class="w-full h-48 object-cover rounded-2xl border border-stone-200" loading="lazy" />
      </div>
      <div class="md:col-span-7 space-y-2 text-xs text-stone-700 leading-relaxed">
        <span class="inline-block px-2.5 py-0.5 bg-red-100 text-red-800 font-bold text-[11px] rounded-md">🍁 湖東三山・血染めのもみじ</span>
        <h3 class="text-base font-bold text-stone-900">金剛輪寺（愛知郡愛荘町）</h3>
        <p>${wKongo.extract}</p>
        <p class="text-stone-500"><strong>【宿からの移動】</strong> 八日市ロイヤルホテルから車で約15分。彦根キャッスルから車で約25分。本堂は国宝に指定されています。</p>
      </div>
    </div>
  </div>

  <!-- スポット2: 永源寺 -->
  <div class="p-6 rounded-3xl bg-stone-50 border border-stone-200 shadow-xs">
    <div class="grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
      <div class="md:col-span-5">
        <img src="${wEigenji.thumbnail || 'https://img.travel.rakuten.co.jp/share/HOTEL/3165/3165.jpg'}" alt="永源寺" class="w-full h-48 object-cover rounded-2xl border border-stone-200" loading="lazy" />
      </div>
      <div class="md:col-span-7 space-y-2 text-xs text-stone-700 leading-relaxed">
        <span class="inline-block px-2.5 py-0.5 bg-amber-100 text-amber-800 font-bold text-[11px] rounded-md">🏞️ 臨済宗永源寺派大本山</span>
        <h3 class="text-base font-bold text-stone-900">永源寺（東近江市）</h3>
        <p>${wEigenji.extract}</p>
        <p class="text-stone-500"><strong>【宿からの移動】</strong> 八日市ロイヤルホテルから車で約15分。愛知川渓谷の紅葉ライトアップ参拝が11月中旬から開催されます。</p>
      </div>
    </div>
  </div>

  <!-- スポット3: 彦根城 -->
  <div class="p-6 rounded-3xl bg-stone-50 border border-stone-200 shadow-xs">
    <div class="grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
      <div class="md:col-span-5">
        <img src="${wHikone.thumbnail || 'https://img.travel.rakuten.co.jp/share/HOTEL/145042/145042.jpg'}" alt="彦根城" class="w-full h-48 object-cover rounded-2xl border border-stone-200" loading="lazy" />
      </div>
      <div class="md:col-span-7 space-y-2 text-xs text-stone-700 leading-relaxed">
        <span class="inline-block px-2.5 py-0.5 bg-stone-800 text-amber-300 font-bold text-[11px] rounded-md">🏯 国宝天守・大名庭園玄宮園</span>
        <h3 class="text-base font-bold text-stone-900">国宝 彦根城</h3>
        <p>${wHikone.extract}</p>
        <p class="text-stone-500"><strong>【宿からの移動】</strong> 彦根キャッスル リゾート＆スパの目の前。夜間の「玄宮園 錦秋のライトアップ」は水鏡の天守が幻想的です。</p>
      </div>
    </div>
  </div>

  <!-- スポット4: 雄琴温泉（おごと温泉） -->
  <div class="p-6 rounded-3xl bg-stone-50 border border-stone-200 shadow-xs">
    <div class="grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
      <div class="md:col-span-5">
        <img src="${wOgoto.thumbnail || 'https://img.travel.rakuten.co.jp/share/HOTEL/8165/8165.jpg'}" alt="雄琴温泉" class="w-full h-48 object-cover rounded-2xl border border-stone-200" loading="lazy" />
      </div>
      <div class="md:col-span-7 space-y-2 text-xs text-stone-700 leading-relaxed">
        <span class="inline-block px-2.5 py-0.5 bg-blue-100 text-blue-800 font-bold text-[11px] rounded-md">♨️ 最澄が開湯した美肌の名湯</span>
        <h3 class="text-base font-bold text-stone-900">雄琴温泉（おごと温泉）</h3>
        <p>${wOgoto.extract}</p>
        <p class="text-stone-500"><strong>【泉質と特徴】</strong> pH9.0のアルカリ性単純温泉。比叡山の開祖・最澄が開湯したと伝わり、びわ湖を望む露天風呂が多数あります。</p>
      </div>
    </div>
  </div>
</div>

<h2 id="model-course" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-amber-600 pb-2 my-8">
  🗺️ 湖東三山＆近江牛 1泊2日 錦秋巡礼王道モデルコース
</h2>
<div class="my-6 p-6 rounded-3xl bg-gradient-to-br from-amber-50/60 to-red-50/40 border border-amber-200 space-y-4 text-xs text-stone-700 leading-relaxed">
  <div class="space-y-1">
    <h3 class="font-bold text-sm text-stone-900">【1日目】湖東三山めぐりと彦根城玄宮園ライトアップ</h3>
    <p>名神高速・湖東三山スマートICからスタート。午前中は「西明寺」で不断桜と紅葉のコントラストを鑑賞し、「金剛輪寺」へ移動して名勝庭園の「血染めのもみじ」に感動。昼食は愛荘町や彦根で近江牛ランチ。午後は「百済寺」の天下遠望庭園を散策。15:30に「彦根キャッスル リゾート＆スパ」へチェックインし、展望風呂「城見の湯」でひと休み。夕食に極上近江牛フィレステーキを堪能後、19:00から「玄宮園」の紅葉ライトアップへ。水面に映る国宝天守を撮影して宿泊。</p>
  </div>
  <div class="space-y-1">
    <h3 class="font-bold text-sm text-stone-900">【2日目】永源寺渓谷散策から近江八幡・おごと温泉へ</h3>
    <p>朝食後チェックアウトし、南へ車を走らせて「永源寺」へ。愛知川にかかる旦度橋と紅葉の参道をゆっくり散策。昼食は近江八幡へ向かい、八幡堀の水郷情緒を味わいながら老舗「まるたけ近江西川」で近江牛すき焼き御膳を賞味。八幡山ロープウェーからびわ湖の大パノラマを眺望し、夕暮れにおごと温泉「びわこ緑水亭」の日帰り温泉に立ち寄るか、名神高速京都東ICから帰路へ。</p>
  </div>
</div>

<h2 id="faq" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-amber-600 pb-2 my-8">
  ❓ よくある質問（FAQ）
</h2>
<div class="space-y-3 my-6 text-xs text-stone-800">
  <div class="p-4 rounded-2xl bg-white border border-stone-200 space-y-1">
    <h3 class="font-bold text-stone-900">Q1. 湖東三山と永源寺の紅葉の見頃時期はいつ頃ですか？</h3>
    <p class="text-stone-600">A. 例年11月上旬から色づき始め、見頃のピークは11月中旬〜下旬（11月15日〜28日頃）です。鈴鹿山脈からの冷え込みにより、鮮やかで深い赤色に染まるのが特徴です。</p>
  </div>
  <div class="p-4 rounded-2xl bg-white border border-stone-200 space-y-1">
    <h3 class="font-bold text-stone-900">Q2. 公共交通機関（電車・バス）でも巡ることはできますか？</h3>
    <p class="text-stone-600">A. 紅葉シーズン（11月中旬〜下旬）には、JR彦根駅・八日市駅などから湖東三山や永源寺を巡る「湖東三山もみじバス（周遊シャトルバス）」が運行されます。ただし運行本数が限られるため、効率的に巡るならマイカーやレンタカーの利用が最も便利です。</p>
  </div>
  <div class="p-4 rounded-2xl bg-white border border-stone-200 space-y-1">
    <h3 class="font-bold text-stone-900">Q3. 各寺院の拝観料や駐車場はありますか？</h3>
    <p class="text-stone-600">A. 西明寺、金剛輪寺、百済寺、永源寺ともに参拝者用の無料または有料（500円程度）の大型駐車場が完備されています。拝観料は各寺院600円〜800円程度です。</p>
  </div>
</div>

<div class="my-8 p-6 rounded-3xl bg-amber-50/60 border border-amber-200">
  <h3 class="text-sm font-bold text-amber-950 mb-2">🔗 あわせてチェックしたい滋賀・びわ湖の旅行ガイド</h3>
  <ul class="text-xs space-y-1.5 font-medium text-stone-700">
    <li>👉 <a href="/prefectures/shiga/" class="text-amber-800 hover:text-amber-600 underline">滋賀県の観光名所・人気温泉地＆ホテル特集</a></li>
    <li>👉 <a href="/posts/nagahama-kurokabe-makino-lake-hotels-guide" class="text-amber-800 hover:text-amber-600 underline">長浜黒壁スクエア＆マキノメタセコイア並木絶景ドライブガイド</a></li>
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
    hot_spring_info: "おごと温泉（アルカリ性単純温泉・pH9.0の美肌の湯）・宮ヶ浜の湯（天然温泉）・城見の湯（展望スパ）",
    parking_info: "各宿に無料大型駐車場完備。湖東三山スマートIC・八日市IC利用でアクセス快適。",
    meal_availability: "認定A5ランク近江牛ステーキ＆すき焼き・ビュッフェ食べ放題・近江米新米・赤こんにゃく・京風会席",
    hotel_name: "湖東三山＆永源寺錦秋紅葉周辺 厳選宿5選",
    image: hRyoksuitei.hotelImageUrl,
    affiliate_url: hRyoksuitei.affiliateUrl,
    categories: ["11月旅行", "紅葉", "温泉宿", "日本遺産", "国宝", "近江牛", "滋賀旅行"],
    keywords: [
      "湖東三山 紅葉 2026 見頃",
      "金剛輪寺 血染めのもみじ",
      "西明寺 不断桜 紅葉",
      "永源寺 ライトアップ 時間",
      "おごと温泉 びわこ緑水亭 口コミ",
      "暖灯館 きくのや 宿泊記",
      "彦根キャッスル リゾート＆スパ",
      "休暇村 近江八幡 近江牛食べ放題",
      "八日市ロイヤルホテル",
      "滋賀 11月 観光"
    ],
    review: reviewHtml,
    price: hRyoksuitei.hotelMinCharge || 19800,
    rating: hRyoksuitei.reviewAverage || 4.5,
    date: date,
    other_images: [
      hKikunoya.hotelImageUrl,
      hHikoneCastle.hotelImageUrl,
      hOmihachiman.hotelImageUrl,
      hYokaichi.hotelImageUrl,
      wKongo.thumbnail,
      wEigenji.thumbnail
    ].filter(Boolean),
    summary: description,
    review_count: (hRyoksuitei.reviewCount || 0) + (hHikoneCastle.reviewCount || 0),
    family_friendly: "はい、客室露天風呂や近江牛食べ放題ビュッフェなど三世代やファミリーにも人気の高い設備が整っています。"
  };

  const noteMarkdown = `---
title: "${title}"
date: "${date}"
description: "${description}"
tags: ["湖東三山", "永源寺", "紅葉", "おごと温泉", "彦根城", "滋賀旅行", "楽天トラベル"]
---

京都の人混みを離れ、凛とした静寂の中で圧倒的な紅葉美に浸りたい旅人が目指す桃源郷——それが滋賀県東部、鈴鹿山脈の懐に抱かれた「湖東三山（西明寺・金剛輪寺・百済寺）」と臨済宗大本山「永源寺」です。「日本紅葉名所100選」に名を連ねる古刹群は、秋が深まる11月中旬、山門から本堂へと続く参道が鮮烈な朱色と黄金色に染め上がります。

金剛輪寺の深く燃えるような「血染めのもみじ」、西明寺で秋風に揺れる白い「不断桜」と深紅のカエデが織りなす奇跡のグラデーション、そして愛知川の渓谷に架かる紅葉のトンネルが美しい永源寺。古刹散策の後は、夜の彦根城・玄宮園ライトアップを鑑賞し、日本三大和牛「近江牛」の極上すき焼きに舌鼓を打つ。びわ湖を望む名湯「おごと温泉」とともに楽しむ厳選名宿をお届けします。

---

## 🍁 湖東三山＆永源寺「錦秋の紅葉」攻略ポイント
- **見頃のピーク**: 例年11月中旬〜11月下旬（11月15日前後〜28日前後）
- **金剛輪寺「血染めのもみじ」**: あまりの深紅さゆえに名付けられた名勝庭園の絶景。千体地蔵の参道も圧巻です。
- **西明寺「不断桜と紅葉の共演」**: 秋に咲く白い桜と燃えるような紅葉が同時に見られる奇跡のコントラスト。
- **永源寺「愛知川渓谷の紅葉トンネル」**: 渓谷にかかる旦度橋からの眺めと、日没後のライトアップが幽玄。
- **彦根城 玄宮園ライトアップ**: 11月中旬〜下旬の夜間、水鏡に映り込む国宝天守と大名庭園のライトアップは必見。
- **巡り方のコツ**: 名神高速の湖東三山スマートICまたは八日市ICを使い、国道307号線沿いに「西明寺 → 金剛輪寺 → 百済寺 → 永源寺」と南下するのが最も効率的です。

---

## 1. おごと温泉 びわこ緑水亭（滋賀県大津市雄琴）
![びわこ緑水亭](${hRyoksuitei.hotelImageUrl})
びわ湖の渚に面して建つ上質旅館。自家源泉を引いた客室専用露天風呂から、水平線から昇る朝日の絶景を堪能。pH9.0の美肌の湯と、最高級A5ランク近江牛ステーキの京風会席が自慢です。

- **楽天トラベル総合評価**: ★${hRyoksuitei.reviewAverage}（クチコミ ${hRyoksuitei.reviewCount}件）
- **目安料金**: 1名 ¥${hRyoksuitei.hotelMinCharge.toLocaleString()}〜
- **所在地**: ${hRyoksuitei.address1}${hRyoksuitei.address2}
- **アクセス**: ${hRyoksuitei.access}
- **駐車場**: ${hRyoksuitei.parkingInformation}
- [👉 びわこ緑水亭の宿泊プラン・空室状況を見る](${hRyoksuitei.affiliateUrl})

---

## 2. おごと温泉 暖灯館 きくのや（滋賀県大津市雄琴）
![暖灯館 きくのや](${hKikunoya.hotelImageUrl})
館内に灯る温かな行燈の光と心尽くしのおもてなしが評判の料理宿。夕朝食ともにお部屋または個室で提供され、霜降り近江牛のすき焼きを気兼ねなく味わえます。びわ湖を望む露天風呂付き客室も人気。

- **楽天トラベル総合評価**: ★${hKikunoya.reviewAverage}（クチコミ ${hKikunoya.reviewCount}件）
- **目安料金**: 1名 ¥${hKikunoya.hotelMinCharge.toLocaleString()}〜
- **所在地**: ${hKikunoya.address1}${hKikunoya.address2}
- **アクセス**: ${hKikunoya.access}
- **駐車場**: ${hKikunoya.parkingInformation}
- [👉 暖灯館 きくのやの宿泊プラン・空室状況を見る](${hKikunoya.affiliateUrl})

---

## 3. 彦根キャッスル リゾート＆スパ（滋賀県彦根市佐和町）
![彦根キャッスル リゾート＆スパ](${hHikoneCastle.hotelImageUrl})
国宝彦根城の中濠に面し、展望風呂「城見の湯」からライトアップされた天守を望むプレミアムホテル。近江牛鉄板焼きディナーと、玄宮園の紅葉ライトアップへ徒歩約5分で向かえる好立地が魅力です。

- **楽天トラベル総合評価**: ★${hHikoneCastle.reviewAverage}（クチコミ ${hHikoneCastle.reviewCount}件）
- **目安料金**: 1名 ¥${hHikoneCastle.hotelMinCharge.toLocaleString()}〜
- **所在地**: ${hHikoneCastle.address1}${hHikoneCastle.address2}
- **アクセス**: ${hHikoneCastle.access}
- **駐車場**: ${hHikoneCastle.parkingInformation}
- [👉 彦根キャッスル リゾート＆スパの宿泊プラン・空室状況を見る](${hHikoneCastle.affiliateUrl})

---

## 4. 休暇村 近江八幡（滋賀県近江八幡市沖島町）
![休暇村 近江八幡](${hOmihachiman.hotelImageUrl})
びわ湖宮ヶ浜の目の前、全室レイクビューのリゾート。湖と一体化する天然温泉露天風呂と、近江牛のすき焼き・ステーキが食べ放題のプレミアムビュッフェが圧巻。湖東三山や水郷めぐりの拠点に最適。

- **楽天トラベル総合評価**: ★${hOmihachiman.reviewAverage}（クチコミ ${hOmihachiman.reviewCount}件）
- **目安料金**: 1名 ¥${hOmihachiman.hotelMinCharge.toLocaleString()}〜
- **所在地**: ${hOmihachiman.address1}${hOmihachiman.address2}
- **アクセス**: ${hOmihachiman.access}
- **駐車場**: ${hOmihachiman.parkingInformation}
- [👉 休暇村 近江八幡の宿泊プラン・空室状況を見る](${hOmihachiman.affiliateUrl})

---

## 5. 八日市ロイヤルホテル（滋賀県東近江市妙法寺町）
![八日市ロイヤルホテル](${hYokaichi.hotelImageUrl})
名神高速「八日市IC」降りてすぐ。永源寺や百済寺まで車で約15分で直行できるため、早朝の混雑前に紅葉寺へアクセスしたいマイカー派に圧倒的人気。無料平面駐車場100台完備。

- **楽天トラベル総合評価**: ★${hYokaichi.reviewAverage}（クチコミ ${hYokaichi.reviewCount}件）
- **目安料金**: 1名 ¥${hYokaichi.hotelMinCharge.toLocaleString()}〜
- **所在地**: ${hYokaichi.address1}${hYokaichi.address2}
- **アクセス**: ${hYokaichi.access}
- **駐車場**: ${hYokaichi.parkingInformation}
- [👉 八日市ロイヤルホテルの宿泊プラン・空室状況を見る](${hYokaichi.affiliateUrl})

---

## 📸 宿の近隣観光地ガイド（Wikipedia公式データ連携）

### 金剛輪寺（滋賀県愛荘町）
![金剛輪寺](${wKongo.thumbnail || hYokaichi.hotelImageUrl})
${wKongo.extract}
- **宿からのアクセス**: 八日市ロイヤルホテルから車で約15分。「血染めのもみじ」で名高い名勝庭園。

### 永源寺（滋賀県東近江市）
![永源寺](${wEigenji.thumbnail || hRyoksuitei.hotelImageUrl})
${wEigenji.extract}
- **宿からのアクセス**: 八日市ロイヤルホテルから車で約15分。愛知川上流の渓谷に広がる紅葉トンネル。

### 国宝 彦根城（滋賀県彦根市）
![彦根城](${wHikone.thumbnail || hHikoneCastle.hotelImageUrl})
${wHikone.extract}
- **宿からのアクセス**: 彦根キャッスル リゾート＆スパの目の前。11月は玄宮園のライトアップが開催。

### 雄琴温泉（滋賀県大津市）
![雄琴温泉](${wOgoto.thumbnail || hKikunoya.hotelImageUrl})
${wOgoto.extract}
- **泉質と特徴**: pH9.0のアルカリ性単純温泉。びわ湖を望む露天風呂で冷えた身体を芯から潤します。
`;

  return { postData, noteMarkdown };
};
