// scripts/articles/article2_chichibu.js
module.exports = function buildArticle2(themeData) {
  const hotels = themeData.hotels;
  const wiki = themeData.wiki;

  const slug = "autumn-winter-chichibu-yomatsuri-nagatoro-hotels-guide";
  const title = "【埼玉・秩父】秩父夜祭2026完全ガイド！豪華絢爛な屋台・笠鉾曳行と冬花火を特等席で体感する秩父温泉・長瀞の絶景美肌名宿5選";
  const description = "12月2日・3日に開催される日本三大曳山祭「秩父夜祭」と、11月中旬〜下旬に見頃を迎える「長瀞紅葉まつり・月の石もみじ公園ライトアップ」。極彩色の屋台・笠鉾が団子坂を駆け上がるクライマックスや澄み渡る冬夜空の花火大会をストレスなく楽しむ観賞術と、和同開珎ゆかりの名湯や卵水の美肌温泉宿5選を徹底解説。";
  const date = "2026-10-29";
  const prefecture = "埼玉県";
  const area = "秩父・長瀞";

  const hWadou = hotels.find(h => h.hotelNo === 6100) || hotels[0];
  const hAraki = hotels.find(h => h.hotelNo === 5828) || hotels[1];
  const hFarmCity = hotels.find(h => h.hotelNo === 2636) || hotels[2];
  const hChoseikan = hotels.find(h => h.hotelNo === 9485) || hotels[3];
  const hRouteInn = hotels.find(h => h.hotelNo === 187585) || hotels[4];

  const wYomatsuri = wiki["秩父夜祭"] || {};
  const wShrine = wiki["秩父神社"] || {};
  const wNagatoro = wiki["長瀞渓谷"] || {};
  const wMitsumine = wiki["三峯神社"] || {};

  const reviewHtml = `
<div class="my-6 p-4 rounded-2xl bg-gradient-to-r from-indigo-950 via-slate-900 to-amber-950 text-white shadow-md flex flex-col sm:flex-row items-center justify-between gap-3">
  <div class="space-y-0.5 text-center sm:text-left">
    <div class="flex items-center justify-center sm:justify-start gap-1.5 text-amber-300 font-extrabold text-xs">
      <span>🎆</span><span>秩父夜祭＆長瀞紅葉ライトアップ 予約速報</span>
    </div>
    <p class="text-xs text-stone-200">
      12月2日・3日の秩父夜祭、11月中旬の長瀞紅葉ライトアップは首都圏からの直通アクセス至便のため毎年宿が早期に完売します。
    </p>
  </div>
  <a href="${hWadou.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="shrink-0 px-4 py-2 bg-amber-500 hover:bg-amber-400 text-stone-950 font-black text-xs rounded-xl shadow transition transform hover:scale-105">
    ✨ 和銅鉱泉 ゆの宿 和どうの空室・宿泊プランをチェック →
  </a>
</div>

<h2 id="intro" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-amber-500 pb-2 mb-4">
  極彩色の「動く陽明門」と、凛とした冬空に炸裂する大輪の花火
</h2>
<p class="text-sm md:text-base text-stone-700 leading-relaxed mb-4">
  初冬の寒気が張りつめる秩父盆地に、秩父屋台囃子のけたたましい大太鼓の連打が轟きます。京都の祇園祭、飛騨高山祭と並び「日本三大曳山祭」に数えられ、ユネスコ無形文化遺産にも登録されている「秩父夜祭」。金糸銀糸の豪華な刺繍幕や精緻な極彩色彫刻を施された屋台と笠鉾が、無数の提灯の明かりに揺れながら夜の街を練り歩く姿は、まさに息をのむ美しさです。
</p>
<p class="text-sm md:text-base text-stone-700 leading-relaxed mb-6">
  さらに11月中旬からは、荒川沿いの長瀞渓谷・月の石もみじ公園で色鮮やかな紅葉ライトアップが開催。錦秋の渓谷美を愛で、夜祭の熱気と冬花火に包まれた後は、江戸時代から湧き出でるトロトロの鉱泉や名湯露天風呂で冷えた身体を芯から温める。これこそが、大人が味わうべき冬の秩父旅の醍醐味です。
</p>

<h2 id="festival-guide" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-amber-500 pb-2 my-6">
  🏮 秩父夜祭2026＆長瀞紅葉まつりの見どころと混雑回避策
</h2>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
  <!-- 秩父夜祭 -->
  <div class="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm space-y-3">
    <div class="flex items-center gap-2 border-b border-stone-100 pb-3">
      <span class="px-2.5 py-1 bg-amber-100 text-amber-800 font-extrabold text-xs rounded-lg">日本三大曳山祭</span>
      <h3 class="text-base font-bold text-stone-900">秩父神社例大祭「秩父夜祭」</h3>
    </div>
    <div class="text-xs text-stone-700 space-y-2 leading-relaxed">
      <p><strong>【開催日】</strong> 毎年12月2日（宵宮）・3日（本祭）</p>
      <p><strong>【会場】</strong> 埼玉県秩父市 秩父神社・市街地・御旅所周辺</p>
      <p><strong>【必見の瞬間】</strong>
        <br />① <strong>団子坂（だんござか）引き上げ:</strong> 3日夜20時頃、重さ最大20トンの屋台・笠鉾が、曳き子たちの熱気と大歓声の中で急坂の団子坂を一気に引き上げられる瞬間。
        <br />② <strong>秩父夜祭花火大会:</strong> 澄み切った冬の夜空に、尺玉や黄金のスターマインが約7,000発打ち上がります。提灯で飾られた屋台と花火の競演は秩父でしか見られない絶景です。
      </p>
      <p><strong>【防寒と交通対策】</strong> 夜間は氷点下近くまで冷え込みます。厚手のダウンやカイロは必携。西武秩父駅発着の特急ラビューは早期に満席となるため、宿を確保して徒歩で移動できる動線が最善です。</p>
    </div>
  </div>

  <!-- 長瀞紅葉 -->
  <div class="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm space-y-3">
    <div class="flex items-center gap-2 border-b border-stone-100 pb-3">
      <span class="px-2.5 py-1 bg-rose-100 text-rose-800 font-extrabold text-xs rounded-lg">国の名勝・天然記念物</span>
      <h3 class="text-base font-bold text-stone-900">長瀞紅葉まつり＆月の石もみじ公園</h3>
    </div>
    <div class="text-xs text-stone-700 space-y-2 leading-relaxed">
      <p><strong>【見頃時期】</strong> 11月中旬〜11月下旬</p>
      <p><strong>【会場】</strong> 埼玉県秩父郡長瀞町（月の石もみじ公園・長瀞岩畳）</p>
      <p><strong>【見どころ】</strong>
        <br />① <strong>月の石もみじ公園ライトアップ:</strong> 密集するモミジやクヌギが赤や黄金色に照らされ、夜空を覆い尽くすようなトンネルを創り出します。
        <br />② <strong>長瀞ラインくだり:</strong> 荒川の穏やかな瀞（とろ）から眺める岩畳の絶壁と紅葉のコントラスト。船頭の巧みな竿さばきとともに秋の川面を満喫できます。
      </p>
      <p><strong>【立ち寄りグルメ】</strong> 長瀞名物の天然氷のかき氷や、秩父名物「豚みそ丼」、アユの塩焼きが絶品です。</p>
    </div>
  </div>
</div>

<h2 id="hotel-selection" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-amber-500 pb-2 my-8">
  🏨 秩父夜祭＆長瀞ステイを満喫する厳選名宿5選
</h2>

<!-- 宿1: 和銅鉱泉 和どう -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-amber-100 text-amber-900 font-black text-xs rounded-full">和同開珎発祥の薬師の湯</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">1. 和銅鉱泉 薬師の湯 ゆの宿 和どう（埼玉県秩父市黒谷）</h3>
    </div>
    <span class="px-3 py-1.5 bg-amber-50 border border-amber-300 text-amber-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 ${hWadou.reviewAverage}（${hWadou.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hWadou.hotelImageUrl}" alt="${hWadou.hotelName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hWadou.roomImageUrl || hWadou.hotelImageUrl}" alt="${hWadou.hotelName} 客室" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs text-stone-700 leading-relaxed">
      <p class="text-sm font-semibold text-stone-800">横瀬川のせせらぎを眼下に望む露天風呂と、古の和同開珎ゆかりの名湯</p>
      <p>日本最古の流通貨幣「和同開珎」が鋳造された聖地・黒谷に佇む湯宿。古くから「薬師の湯」として親しまれる和銅鉱泉は、切り傷や美肌に効能の高い柔らかな肌触りです。横瀬川の清流を望む客室や露天風呂からは、四季折々の渓谷美を堪能。夕食には秩父の山の幸、清流の川魚、名物の豚味噌陶板焼きが並び、秩父錦などの地酒とともに滋味深い味わいを楽しめます。</p>
      <div class="p-3 bg-stone-50 rounded-xl space-y-1">
        <p><strong>【所在地】</strong> ${hWadou.address1}${hWadou.address2}</p>
        <p><strong>【交通アクセス】</strong> ${hWadou.access}</p>
        <p><strong>【駐車場】</strong> ${hWadou.parkingInformation}</p>
        <p><strong>【目安料金】</strong> 1名あたり ¥${hWadou.hotelMinCharge.toLocaleString()}〜</p>
      </div>
    </div>
  </div>
  <div class="pt-2 text-center">
    <a href="${hWadou.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="inline-block w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-extrabold text-sm rounded-2xl shadow-md hover:scale-105 transition transform">
      ✈️ 和銅鉱泉 ゆの宿 和どうの最新空室状況・宿泊プランを見る
    </a>
  </div>
</div>

<!-- 宿2: 新木鉱泉旅館 -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-amber-100 text-amber-900 font-black text-xs rounded-full">文政十年創業・トロトロ卵水の極上湯</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">2. 秩父七湯『御代の湯』 新木鉱泉旅館（埼玉県秩父市山田）</h3>
    </div>
    <span class="px-3 py-1.5 bg-amber-50 border border-amber-300 text-amber-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 ${hAraki.reviewAverage}（${hAraki.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hAraki.hotelImageUrl}" alt="${hAraki.hotelName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hAraki.roomImageUrl || hAraki.hotelImageUrl}" alt="${hAraki.hotelName} 露天風呂" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs text-stone-700 leading-relaxed">
      <p class="text-sm font-semibold text-stone-800">江戸時代から約200年続く木造建築の風情と、「卵水」と呼ばれる美肌冷鉱泉</p>
      <p>秩父七湯最古の歴史を誇る新木鉱泉。まるで美容液のように肌に吸い付く「卵水（たまごみず）」は、pH9.4の含硫黄アルカリ単純冷鉱泉で、入浴後はお肌がつるつるになると評判です。太い梁が張り巡らされた民芸調の館内は、古き良き日本の旅情を今に伝えています。露天風呂付き客室では、夜空に浮かぶ星を眺めながら極上のプライベート温泉ステイが叶います。</p>
      <div class="p-3 bg-stone-50 rounded-xl space-y-1">
        <p><strong>【所在地】</strong> ${hAraki.address1}${hAraki.address2}</p>
        <p><strong>【交通アクセス】</strong> ${hAraki.access}</p>
        <p><strong>【駐車場】</strong> ${hAraki.parkingInformation}</p>
        <p><strong>【目安料金】</strong> 1名あたり ¥${hAraki.hotelMinCharge.toLocaleString()}〜</p>
      </div>
    </div>
  </div>
  <div class="pt-2 text-center">
    <a href="${hAraki.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="inline-block w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-extrabold text-sm rounded-2xl shadow-md hover:scale-105 transition transform">
      ✈️ 新木鉱泉旅館の最新空室状況・宿泊プランを見る
    </a>
  </div>
</div>

<!-- 宿3: ナチュラルファームシティ農園ホテル -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-amber-100 text-amber-900 font-black text-xs rounded-full">武甲山と秩父市街パノラマ・夜祭花火の特等席</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">3. ナチュラルファームシティ農園ホテル（埼玉県秩父市大宮）</h3>
    </div>
    <span class="px-3 py-1.5 bg-amber-50 border border-amber-300 text-amber-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 ${hFarmCity.reviewAverage}（${hFarmCity.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hFarmCity.hotelImageUrl}" alt="${hFarmCity.hotelName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hFarmCity.roomImageUrl || hFarmCity.hotelImageUrl}" alt="${hFarmCity.hotelName} 眺望" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs text-stone-700 leading-relaxed">
      <p class="text-sm font-semibold text-stone-800">秩父盆地を見下ろす高台に建ち、自社農園の自然食バイキングが人気のリゾート</p>
      <p>秩父の街並みとそびえ立つ武甲山を一望できる絶好の高台ロケーション。秩父夜祭の夜には、客室やレストランから街中に打ち上がる冬花火を遠望できる贅沢な特等席となります。展望大浴場からも夜景や朝霧の雲海が広がり、旅の疲れを優しく癒やします。自社農園や契約農家から毎朝届く新鮮な無農薬・減農薬野菜を使った創作バイキングは健康志向の旅行者にも絶大な支持を得ています。</p>
      <div class="p-3 bg-stone-50 rounded-xl space-y-1">
        <p><strong>【所在地】</strong> ${hFarmCity.address1}${hFarmCity.address2}</p>
        <p><strong>【交通アクセス】</strong> ${hFarmCity.access}</p>
        <p><strong>【駐車場】</strong> ${hFarmCity.parkingInformation}</p>
        <p><strong>【目安料金】</strong> 1名あたり ¥${hFarmCity.hotelMinCharge.toLocaleString()}〜</p>
      </div>
    </div>
  </div>
  <div class="pt-2 text-center">
    <a href="${hFarmCity.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="inline-block w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-extrabold text-sm rounded-2xl shadow-md hover:scale-105 transition transform">
      ✈️ ナチュラルファームシティ農園ホテルの最新空室状況・宿泊プランを見る
    </a>
  </div>
</div>

<!-- 宿4: 長生館 -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-amber-100 text-amber-900 font-black text-xs rounded-full">長瀞岩畳を一望する日本庭園の宿</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">4. 長瀞温泉 花のおもてなし 長生館（埼玉県秩父郡長瀞町）</h3>
    </div>
    <span class="px-3 py-1.5 bg-amber-50 border border-amber-300 text-amber-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 ${hChoseikan.reviewAverage}（${hChoseikan.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hChoseikan.hotelImageUrl}" alt="${hChoseikan.hotelName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hChoseikan.roomImageUrl || hChoseikan.hotelImageUrl}" alt="${hChoseikan.hotelName} 庭園" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs text-stone-700 leading-relaxed">
      <p class="text-sm font-semibold text-stone-800">大正4年創業。全室から名勝・長瀞渓谷を望み、四季の草花に彩られる老舗旅館</p>
      <p>長瀞駅から徒歩3分、月の石もみじ公園へも徒歩圏内という絶好のロケーション。宿の庭園からは名勝・長瀞岩畳と荒川の清流が目の前に広がり、秋の紅葉シーズンは言葉を失うほどの美しさです。竹林に囲まれた露天風呂は長瀞温泉のやわらかな湯が注がれ、湯上がり処では季節のハーブティーが用意されています。夕食は旬の郷土食材を活かした本格日本料理や囲炉裏会席をじっくり堪能できます。</p>
      <div class="p-3 bg-stone-50 rounded-xl space-y-1">
        <p><strong>【所在地】</strong> ${hChoseikan.address1}${hChoseikan.address2}</p>
        <p><strong>【交通アクセス】</strong> ${hChoseikan.access}</p>
        <p><strong>【駐車場】</strong> ${hChoseikan.parkingInformation}</p>
        <p><strong>【目安料金】</strong> 1名あたり ¥${hChoseikan.hotelMinCharge.toLocaleString()}〜</p>
      </div>
    </div>
  </div>
  <div class="pt-2 text-center">
    <a href="${hChoseikan.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="inline-block w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-extrabold text-sm rounded-2xl shadow-md hover:scale-105 transition transform">
      ✈️ 長生館の最新空室状況・宿泊プランを見る
    </a>
  </div>
</div>

<!-- 宿5: ホテルルートインGrand秩父 -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-amber-100 text-amber-900 font-black text-xs rounded-full">西武秩父駅前・天然温泉大浴場完備</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">5. 天然温泉「旅人の湯」ホテルルートインＧｒａｎｄ秩父（埼玉県秩父市野坂町）</h3>
    </div>
    <span class="px-3 py-1.5 bg-amber-50 border border-amber-300 text-amber-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 ${hRouteInn.reviewAverage}（${hRouteInn.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hRouteInn.hotelImageUrl}" alt="${hRouteInn.hotelName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hRouteInn.roomImageUrl || hRouteInn.hotelImageUrl}" alt="${hRouteInn.hotelName} 大浴場" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs text-stone-700 leading-relaxed">
      <p class="text-sm font-semibold text-stone-800">秩父夜祭の屋台巡行エリアへ徒歩直結！フットワーク抜群の最新プレミアムホテル</p>
      <p>西武秩父駅から徒歩約4分という至高のアクセスを誇る2023年オープンの最新ホテル。夜祭のクライマックスとなる団子坂や御旅所からも徒歩圏内にあるため、深夜までお祭りの熱気を満喫しても歩いて安全に客室へ戻ることができます。館内には天然温泉の大浴場とサウナを完備し、凍えた身体を深部から温めてくれます。全室に最新の快眠ベッドと無料Wi-Fi、加湿空気清浄機が完備されています。</p>
      <div class="p-3 bg-stone-50 rounded-xl space-y-1">
        <p><strong>【所在地】</strong> ${hRouteInn.address1}${hRouteInn.address2}</p>
        <p><strong>【交通アクセス】</strong> ${hRouteInn.access}</p>
        <p><strong>【駐車場】</strong> ${hRouteInn.parkingInformation}</p>
        <p><strong>【目安料金】</strong> 1名あたり ¥${hRouteInn.hotelMinCharge.toLocaleString()}〜</p>
      </div>
    </div>
  </div>
  <div class="pt-2 text-center">
    <a href="${hRouteInn.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="inline-block w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-extrabold text-sm rounded-2xl shadow-md hover:scale-105 transition transform">
      ✈️ ホテルルートインGrand秩父の最新空室状況・宿泊プランを見る
    </a>
  </div>
</div>

<h2 id="nearby-spots" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-amber-500 pb-2 my-8">
  📸 宿の近隣観光地ガイド（Wikipedia公式データ連携）
</h2>
<p class="text-xs text-stone-600 mb-6">
  秩父・長瀞の宿に宿泊する前後に訪れたい、歴史ある名所と絶景スポットです。
</p>

<div class="space-y-6 my-6">
  <!-- 秩父夜祭 -->
  <div class="p-6 rounded-3xl bg-stone-50 border border-stone-200 shadow-xs">
    <div class="grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
      <div class="md:col-span-5">
        <img src="${wYomatsuri.thumbnail || 'https://img.travel.rakuten.co.jp/share/HOTEL/2636/2636.jpg'}" alt="秩父夜祭" class="w-full h-48 object-cover rounded-2xl border border-stone-200" loading="lazy" />
      </div>
      <div class="md:col-span-7 space-y-2 text-xs text-stone-700 leading-relaxed">
        <span class="inline-block px-2.5 py-0.5 bg-amber-100 text-amber-800 font-bold text-[11px] rounded-md">🏮 秩父市街地</span>
        <h3 class="text-base font-bold text-stone-900">秩父夜祭（ユネスコ無形文化遺産）</h3>
        <p>${wYomatsuri.extract}</p>
        <p class="text-stone-500"><strong>【宿からの移動】</strong> ルートインGrand秩父から徒歩約5分、農園ホテルから車で約7分。祭礼当日は市街地交通規制が入るため徒歩での観覧が基本です。</p>
      </div>
    </div>
  </div>

  <!-- 秩父神社 -->
  <div class="p-6 rounded-3xl bg-stone-50 border border-stone-200 shadow-xs">
    <div class="grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
      <div class="md:col-span-5">
        <img src="${wShrine.thumbnail || 'https://img.travel.rakuten.co.jp/share/HOTEL/6100/6100.jpg'}" alt="秩父神社" class="w-full h-48 object-cover rounded-2xl border border-stone-200" loading="lazy" />
      </div>
      <div class="md:col-span-7 space-y-2 text-xs text-stone-700 leading-relaxed">
        <span class="inline-block px-2.5 py-0.5 bg-red-100 text-red-800 font-bold text-[11px] rounded-md">⛩️ 秩父市番場町</span>
        <h3 class="text-base font-bold text-stone-900">秩父神社（秩父地方総鎮守）</h3>
        <p>${wShrine.extract}</p>
        <p class="text-stone-500"><strong>【宿からの移動】</strong> 秩父鉄道「秩父駅」から徒歩3分。徳川家康公が再建した社殿の極彩色彫刻「子育ての虎」「お元気三猿」が見どころです。</p>
      </div>
    </div>
  </div>

  <!-- 長瀞渓谷 -->
  <div class="p-6 rounded-3xl bg-stone-50 border border-stone-200 shadow-xs">
    <div class="grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
      <div class="md:col-span-5">
        <img src="${wNagatoro.thumbnail || 'https://img.travel.rakuten.co.jp/share/HOTEL/9485/9485.jpg'}" alt="長瀞渓谷・岩畳" class="w-full h-48 object-cover rounded-2xl border border-stone-200" loading="lazy" />
      </div>
      <div class="md:col-span-7 space-y-2 text-xs text-stone-700 leading-relaxed">
        <span class="inline-block px-2.5 py-0.5 bg-emerald-100 text-emerald-800 font-bold text-[11px] rounded-md">🌊 秩父郡長瀞町</span>
        <h3 class="text-base font-bold text-stone-900">長瀞渓谷（国の名勝・天然記念物「岩畳」）</h3>
        <p>${wNagatoro.extract}</p>
        <p class="text-stone-500"><strong>【宿からの移動】</strong> 長生館の庭園から目の前。荒川の結晶片岩が畳を敷き詰めたように広がる岩畳の散策やラインくだりを楽しめます。</p>
      </div>
    </div>
  </div>

  <!-- 三峯神社 -->
  <div class="p-6 rounded-3xl bg-stone-50 border border-stone-200 shadow-xs">
    <div class="grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
      <div class="md:col-span-5">
        <img src="${wMitsumine.thumbnail || 'https://img.travel.rakuten.co.jp/share/HOTEL/5828/5828.jpg'}" alt="三峯神社" class="w-full h-48 object-cover rounded-2xl border border-stone-200" loading="lazy" />
      </div>
      <div class="md:col-span-7 space-y-2 text-xs text-stone-700 leading-relaxed">
        <span class="inline-block px-2.5 py-0.5 bg-sky-100 text-sky-800 font-bold text-[11px] rounded-md">🏔️ 秩父市三峰</span>
        <h3 class="text-base font-bold text-stone-900">三峯神社（関東最強のパワースポット）</h3>
        <p>${wMitsumine.extract}</p>
        <p class="text-stone-500"><strong>【宿からの移動】</strong> 秩父市街から車で約75分、西武秩父駅から急行バス約75分。標高1,102mの霊峰に鎮座する狼（山犬）信仰の古社です。</p>
      </div>
    </div>
  </div>
</div>

<h2 id="model-course" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-amber-500 pb-2 my-8">
  🗺️ 長瀞紅葉から秩父夜祭を結ぶ1泊2日モデルコース
</h2>
<div class="my-6 p-6 rounded-3xl bg-gradient-to-br from-amber-50/60 to-orange-50/40 border border-amber-200 space-y-4 text-xs text-stone-700 leading-relaxed">
  <div class="space-y-1">
    <h3 class="font-bold text-sm text-stone-900">【1日目】長瀞散策と月の石もみじ公園ライトアップ</h3>
    <p>昼前に長瀞駅へ到着し、名物の鮎めしや天然かき氷でランチ。長瀞ラインくだりで岩畳の紅葉を満喫後、夕方に「月の石もみじ公園」へ。幻想的な紅葉ライトアップを鑑賞後、和銅鉱泉「ゆの宿 和どう」へチェックイン。薬師の湯露天風呂と秩父牛会席を味わう。</p>
  </div>
  <div class="space-y-1">
    <h3 class="font-bold text-sm text-stone-900">【2日目】秩父神社参拝と秩父夜祭のクライマックス</h3>
    <p>朝食後、秩父神社へ参拝し彫刻を見学。昼間は番場通りのレトロな街並みで味噌ポテトや地酒を味わい、山車の屋台芝居を観覧。夕暮れから始まる屋台曳行を見守り、夜の団子坂引き上げと花火大会を特等席で体感。深夜または翌朝の帰路へ。</p>
  </div>
</div>

<h2 id="faq" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-amber-500 pb-2 my-8">
  ❓ よくある質問（FAQ）
</h2>
<div class="space-y-3 my-6 text-xs text-stone-800">
  <div class="p-4 rounded-2xl bg-white border border-stone-200 space-y-1">
    <h3 class="font-bold text-stone-900">Q1. 秩父夜祭の開催日は曜日によって変わりますか？</h3>
    <p class="text-stone-600">A. 変わりません。秩父夜祭は曜日にかかわらず毎年必ず「12月2日（宵宮）」と「12月3日（本祭）」に開催されます。特に本祭が土日や金曜日に重なる年は数十万人の人出となります。</p>
  </div>
  <div class="p-4 rounded-2xl bg-white border border-stone-200 space-y-1">
    <h3 class="font-bold text-stone-900">Q2. 車での来場と電車での来場、どちらが推奨されますか？</h3>
    <p class="text-stone-600">A. 断然「電車（西武鉄道・秩父鉄道）」が推奨されます。祭礼当日は国道140号・299号が大渋滞し、市内全域が交通規制となるため、車で訪れる場合は午後早い時間帯までに宿の専用駐車場へ入庫しておく必要があります。</p>
  </div>
  <div class="p-4 rounded-2xl bg-white border border-stone-200 space-y-1">
    <h3 class="font-bold text-stone-900">Q3. 夜祭見学の服装で気をつけるべきことは？</h3>
    <p class="text-stone-600">A. 秩父盆地は夜間、気温が氷点下まで下がることが珍しくありません。足元からの底冷えが厳しいため、厚手の防寒ブーツ、ダウンコート、手袋、マフラー、貼るカイロなどの真冬の防寒対策が必須です。</p>
  </div>
</div>

<div class="my-8 p-6 rounded-3xl bg-amber-50/60 border border-amber-200">
  <h3 class="text-sm font-bold text-amber-950 mb-2">🔗 あわせてチェックしたい埼玉・秩父エリアの旅行ガイド</h3>
  <ul class="text-xs space-y-1.5 font-medium text-stone-700">
    <li>👉 <a href="/prefectures/saitama/" class="text-amber-800 hover:text-amber-600 underline">埼玉県の観光・人気温泉宿＆ホテル特集</a></li>
    <li>👉 <a href="/posts/chichibu-hotsprings-guide" class="text-amber-800 hover:text-amber-600 underline">秩父七湯・美肌温泉宿の泉質比較＆宿泊ガイド</a></li>
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
    hot_spring_info: "和銅鉱泉（単純硫黄冷鉱泉）・新木鉱泉（含硫黄アルカリ単純冷鉱泉・卵水）・長瀞温泉・秩父天然温泉",
    parking_info: "各宿に無料駐車場完備。秩父夜祭当日は市内交通規制あり、早めのチェックイン推奨。",
    meal_availability: "秩父名物豚味噌漬け陶板焼き・清流岩魚塩焼き・自社農園無農薬野菜バイキング・手打ち秩父そば",
    hotel_name: "秩父夜祭＆長瀞紅葉周辺 厳選名宿5選",
    image: hWadou.hotelImageUrl,
    affiliate_url: hWadou.affiliateUrl,
    categories: ["11月旅行", "12月旅行", "冬旅行", "イベント・祭り", "紅葉名所", "温泉宿", "埼玉旅行"],
    keywords: [
      "秩父夜祭 2026",
      "秩父夜祭 ホテル",
      "秩父夜祭 宿泊 予約",
      "長瀞 紅葉 ライトアップ 2026",
      "月の石もみじ公園 ホテル",
      "和銅鉱泉 和どう 口コミ",
      "新木鉱泉 卵水",
      "ナチュラルファームシティ農園ホテル 秩父夜祭",
      "長瀞 長生館",
      "ホテルルートインGrand秩父"
    ],
    review: reviewHtml,
    price: hWadou.hotelMinCharge || 16500,
    rating: hWadou.reviewAverage || 4.4,
    date: date,
    other_images: [
      hAraki.hotelImageUrl,
      hFarmCity.hotelImageUrl,
      hChoseikan.hotelImageUrl,
      hRouteInn.hotelImageUrl,
      wYomatsuri.thumbnail,
      wShrine.thumbnail
    ].filter(Boolean),
    summary: description,
    review_count: (hWadou.reviewCount || 0) + (hAraki.reviewCount || 0) + (hFarmCity.reviewCount || 0),
    family_friendly: "はい、客室露天風呂や広々とした和室、農園バイキングなどお子様連れでも快適に過ごせます。"
  };

  const noteMarkdown = `---
title: "${title}"
date: "${date}"
description: "${description}"
tags: ["秩父夜祭", "長瀞紅葉", "埼玉旅行", "和銅鉱泉", "新木鉱泉", "温泉旅行", "楽天トラベル"]
---

初冬の寒気が張りつめる秩父盆地に、秩父屋台囃子のけたたましい大太鼓の連打が轟きます。京都の祇園祭、飛騨高山祭と並び「日本三大曳山祭」に数えられ、ユネスコ無形文化遺産にも登録されている「秩父夜祭」。金糸銀糸の豪華な刺繍幕や精緻な極彩色彫刻を施された屋台と笠鉾が、無数の提灯の明かりに揺れながら夜の街を練り歩く姿は、まさに息をのむ美しさです。

さらに11月中旬からは、荒川沿いの長瀞渓谷・月の石もみじ公園で色鮮やかな紅葉ライトアップが開催。錦秋の渓谷美を愛で、夜祭の熱気と冬花火に包まれた後は、江戸時代から湧き出でるトロトロの鉱泉や名湯露天風呂で冷えた身体を芯から温める。楽天トラベルの最新データから厳選した実力派宿5選をお届けします。

---

## 🏮 秩父夜祭2026＆長瀞紅葉まつりの攻略ポイント
- **秩父夜祭の日程**: 毎年12月2日（宵宮）・3日（本祭）。曜日にかかわらず固定開催です。
- **団子坂引き上げクライマックス**: 3日夜20時前後。最大20トンの笠鉾・屋台が急坂を駆け上がる地響きと大歓声。
- **冬の花火大会**: 澄み切った夜空に約7,000発の尺玉やスターマイン。冬空のため煙が滞留せず、息をのむ鮮明さで花火が輝きます。
- **長瀞紅葉ライトアップ**: 11月中旬〜下旬。「月の石もみじ公園」のモミジトンネルと長瀞岩畳の秋景色。
- **寒さ対策**: 夜間は氷点下に達します。ダウン、手袋、マフラー、貼るカイロ、厚手の防寒靴が必須です。

---

## 1. 和銅鉱泉 薬師の湯 ゆの宿 和どう（埼玉県秩父市黒谷）
![和どう](${hWadou.hotelImageUrl})
日本最初の流通貨幣「和同開珎」発祥の地。横瀬川の清流を望む露天風呂と、古くから切り傷や美肌に効能の高い薬師の湯。夕食は秩父名物の豚味噌陶板焼き。

- **楽天トラベル総合評価**: ★${hWadou.reviewAverage}（クチコミ ${hWadou.reviewCount}件）
- **目安料金**: 1名 ¥${hWadou.hotelMinCharge.toLocaleString()}〜
- **所在地**: ${hWadou.address1}${hWadou.address2}
- **アクセス**: ${hWadou.access}
- **駐車場**: ${hWadou.parkingInformation}
- [👉 和銅鉱泉 ゆの宿 和どうの宿泊プラン・空室状況を見る](${hWadou.affiliateUrl})

### 現地攻略のツボ
- 秩父鉄道「和銅黒谷駅」から送迎あり。長瀞の紅葉狩りと秩父市街の中間に位置し、どちらへもアクセス軽快。
- 横瀬川の渓谷に面した露天風呂付き客室で、静寂のせせらぎを聞きながら過ごすプライベートステイが人気です。

---

## 2. 秩父七湯『御代の湯』 新木鉱泉旅館（埼玉県秩父市山田）
![新木鉱泉旅館](${hAraki.hotelImageUrl})
文政十年創業、約200年の歴史を誇る木造建築。「卵水（たまごみず）」と呼ばれるpH9.4のトロトロ硫黄冷鉱泉は肌がすべすべになる極上の湯心地。

- **楽天トラベル総合評価**: ★${hAraki.reviewAverage}（クチコミ ${hAraki.reviewCount}件）
- **目安料金**: 1名 ¥${hAraki.hotelMinCharge.toLocaleString()}〜
- **所在地**: ${hAraki.address1}${hAraki.address2}
- **アクセス**: ${hAraki.access}
- **駐車場**: ${hAraki.parkingInformation}
- [👉 新木鉱泉旅館の宿泊プラン・空室状況を見る](${hAraki.affiliateUrl})

### 現地攻略のツボ
- 江戸時代の宿場町の面影を残す民芸調の太い梁と格子窓。古民家好きにはたまらない風情です。
- 卵水風呂は入浴直後から肌にまとわりつくようなヌルヌル感があり、冬の乾燥肌を徹底的に潤してくれます。

---

## 3. ナチュラルファームシティ農園ホテル（埼玉県秩父市大宮）
![農園ホテル](${hFarmCity.hotelImageUrl})
秩父市街と霊峰・武甲山を一望する高台リゾート。夜祭当日は街中に上がる花火を眺められる特等席。自社農園の無農薬野菜バイキングが人気。

- **楽天トラベル総合評価**: ★${hFarmCity.reviewAverage}（クチコミ ${hFarmCity.reviewCount}件）
- **目安料金**: 1名 ¥${hFarmCity.hotelMinCharge.toLocaleString()}〜
- **所在地**: ${hFarmCity.address1}${hFarmCity.address2}
- **アクセス**: ${hFarmCity.access}
- **駐車場**: ${hFarmCity.parkingInformation}
- [👉 ナチュラルファームシティ農園ホテルの宿泊プラン・空室状況を見る](${hFarmCity.affiliateUrl})

### 現地攻略のツボ
- 秩父夜祭当日は、人混みを避けてホテルの高台から冬花火をゆったり見晴らせる隠れたプレミアムビューポイント。
- 展望大浴場からも武甲山と市街の夜景、早朝の雲海が広がり、リゾート感満点の滞在が楽しめます。

---

## 4. 長瀞温泉 花のおもてなし 長生館（埼玉県秩父郡長瀞町）
![長生館](${hChoseikan.hotelImageUrl})
大正4年創業。全室から名勝・長瀞岩畳と荒川の清流を望む老舗旅館。月の石もみじ公園へも徒歩圏内で、秋のライトアップ散策に最適です。

- **楽天トラベル総合評価**: ★${hChoseikan.reviewAverage}（クチコミ ${hChoseikan.reviewCount}件）
- **目安料金**: 1名 ¥${hChoseikan.hotelMinCharge.toLocaleString()}〜
- **所在地**: ${hChoseikan.address1}${hChoseikan.address2}
- **アクセス**: ${hChoseikan.access}
- **駐車場**: ${hChoseikan.parkingInformation}
- [👉 長生館の宿泊プラン・空室状況を見る](${hChoseikan.affiliateUrl})

### 現地攻略のツボ
- 長瀞駅から徒歩3分。月の石もみじ公園へは夕食前の黄昏時とライトアップ後の2回散策するのがツウの楽しみ方。
- 庭園の竹林露天風呂で身体を温め、夕食は清流の川魚や秩父牛の囲炉裏会席に舌鼓を打てます。

---

## 5. 天然温泉「旅人の湯」ホテルルートインＧｒａｎｄ秩父（埼玉県秩父市野坂町）
![ホテルルートインGrand秩父](${hRouteInn.hotelImageUrl})
西武秩父駅徒歩4分。夜祭の屋台巡行ルートや団子坂へ徒歩直結の好立地。天然温泉大浴場とサウナ完備で凍えた身体をリセットできます。

- **楽天トラベル総合評価**: ★${hRouteInn.reviewAverage}（クチコミ ${hRouteInn.reviewCount}件）
- **目安料金**: 1名 ¥${hRouteInn.hotelMinCharge.toLocaleString()}〜
- **所在地**: ${hRouteInn.address1}${hRouteInn.address2}
- **アクセス**: ${hRouteInn.access}
- **駐車場**: ${hRouteInn.parkingInformation}
- [👉 ホテルルートインGrand秩父の宿泊プラン・空室状況を見る](${hRouteInn.affiliateUrl})

### 現地攻略のツボ
- 夜祭クライマックスの団子坂から徒歩で帰館可能。祭りの熱気が冷めないまま大浴場の天然温泉に直行できます。
- 全室に最新の快眠ベッドと加湿空気清浄機が備わり、翌朝の秩父神社参拝にも徒歩ですぐ向かえます。

---

## 🗺️ 長瀞紅葉から秩父夜祭を結ぶモデルコース
- **1日目**: 昼前に長瀞へ。ラインくだりで岩畳の錦秋を満喫し、夕方は「月の石もみじ公園」の紅葉ライトアップへ。和どうへチェックインし薬師の湯で乾杯。
- **2日目**: 秩父神社へ参拝し社殿の彫刻を見学。午後は番場通りの屋台芝居を観覧し、夜は団子坂引き上げと約7,000発の冬花火を体感。
`;

  return { postData, noteMarkdown };
};
