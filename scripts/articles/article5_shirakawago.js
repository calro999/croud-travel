// scripts/articles/article5_shirakawago.js
module.exports = function buildArticle5(themeData) {
  const hotels = themeData.hotels;
  const wiki = themeData.wiki;

  const slug = "autumn-winter-shirakawago-okuhida-takayama-hotels-guide";
  const title = "【岐阜・長野】晩秋の白川郷合掌造りライトアップ＆上高地閉山祭から奥飛騨雪見温泉へ！飛騨牛と秘湯を巡る大人の山岳リゾート宿5選";
  const description = "11月15日の上高地閉山祭から初雪舞う白川郷の合掌造り集落、新穂高ロープウェイの冠雪北アルプス大パノラマ、そして奥飛騨温泉郷の極上雪見露天風呂。晩秋から冬へと移ろう飛騨高山・奥飛騨・白川郷の山岳美と、A5等級飛騨牛や囲炉裏炭火料理を心ゆくまで堪能できる厳選名宿5選を徹底解説。";
  const date = "2026-10-29";
  const prefecture = "岐阜県";
  const area = "奥飛騨温泉郷・高山・白川郷";

  const hMiyama = hotels.find(h => h.hotelNo === 65440) || hotels[0];
  const hKachoan = hotels.find(h => h.hotelNo === 8327) || hotels[1];
  const hWanosato = hotels.find(h => h.hotelNo === 106058) || hotels[2];
  const hYuinosho = hotels.find(h => h.hotelNo === 168686) || hotels[3];
  const hBanki = hotels.find(h => h.hotelNo === 63413) || hotels[4];

  const wShirakawa = wiki["白川郷"] || {};
  const wOkuhida = wiki["奥飛騨温泉郷"] || {};
  const wTakayama = wiki["飛騨高山"] || wiki["高山市"] || {};
  const wRopeway = wiki["新穂高ロープウェイ"] || {};

  const reviewHtml = `
<div class="my-6 p-4 rounded-2xl bg-gradient-to-r from-slate-900 via-sky-950 to-stone-900 text-white shadow-md flex flex-col sm:flex-row items-center justify-between gap-3">
  <div class="space-y-0.5 text-center sm:text-left">
    <div class="flex items-center justify-center sm:justify-start gap-1.5 text-amber-300 font-extrabold text-xs">
      <span>❄️</span><span>白川郷＆奥飛騨雪見温泉 2026冬の予約速報</span>
    </div>
    <p class="text-xs text-stone-200">
      11月中旬の閉山祭・初雪シーズンから、源泉かけ流しの雪見露天風呂と飛騨牛懐石が楽しめる名宿の予約が本格化しています。
    </p>
  </div>
  <a href="${hMiyama.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="shrink-0 px-4 py-2 bg-amber-500 hover:bg-amber-400 text-stone-950 font-black text-xs rounded-xl shadow transition transform hover:scale-105">
    ✨ 匠の宿 深山桜庵の空室・宿泊プランをチェック →
  </a>
</div>

<h2 id="intro" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-sky-600 pb-2 mb-4">
  白銀の北アルプスを仰ぐ秘湯と、時が止まった合掌の里の静寂
</h2>
<p class="text-sm md:text-base text-stone-700 leading-relaxed mb-4">
  11月中旬、上高地が河童橋での閉山祭（11月15日）をもって冬の眠りにつく頃、北アルプスの山々は白銀の冠雪をいただき、飛騨の山峡には初雪が舞い始めます。黄金色に輝くススキと急勾配の茅葺き屋根が美しい世界遺産・白川郷。標高2,156mの新穂高ロープウェイ展望台から望む槍ヶ岳や西穂高岳の雄大なパノラマ。そして、日本屈指の湧出量を誇る奥飛騨温泉郷の雪見露天風呂。
</p>
<p class="text-sm md:text-base text-stone-700 leading-relaxed mb-6">
  凛とした山の冷気の中、もうもうと立ち上る温泉の湯けむりに包まれる至福。夕暮れには囲炉裏の炭火でじっくり焼かれた川魚や、とろけるようなA5ランク飛騨牛の旨味を飛騨の辛口地酒とともに味わう。忙しい日常を完全にリセットできる、大人のための山岳リゾート滞在をご提案します。
</p>

<h2 id="mountain-guide" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-sky-600 pb-2 my-6">
  🏔️ 11月〜冬の飛騨高山・白川郷・奥飛騨の見どころと旅のコツ
</h2>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
  <!-- 白川郷 -->
  <div class="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm space-y-3">
    <div class="flex items-center gap-2 border-b border-stone-100 pb-3">
      <span class="px-2.5 py-1 bg-amber-100 text-amber-800 font-extrabold text-xs rounded-lg">世界文化遺産</span>
      <h3 class="text-base font-bold text-stone-900">白川郷 荻町合掌造り集落</h3>
    </div>
    <div class="text-xs text-stone-700 space-y-2 leading-relaxed">
      <p><strong>【晩秋〜初冬の見どころ】</strong> 11月上旬の一斉放水訓練（消防訓練）の迫力と、紅葉から初雪へと移ろう茅葺き屋根の風情。城山展望台から見下ろす集落全景はまるで日本昔話の世界です。</p>
      <p><strong>【冬期ライトアップ（1〜2月）】</strong> 完全予約制で開催される幻想的な雪明かりのイベント。直前の11月〜12月は比較的予約も取りやすく、初冬の静かな集落散策が楽しめます。</p>
      <p><strong>【郷土の味】</strong> 飛騨名物の「朴葉味噌（ほおばみそ）」や栃もち、五平餅を囲炉裏端でいただくのが旅情をそそります。</p>
    </div>
  </div>

  <!-- 奥飛騨温泉郷＆新穂高 -->
  <div class="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm space-y-3">
    <div class="flex items-center gap-2 border-b border-stone-100 pb-3">
      <span class="px-2.5 py-1 bg-sky-100 text-sky-800 font-extrabold text-xs rounded-lg">北アルプスの名湯</span>
      <h3 class="text-base font-bold text-stone-900">奥飛騨温泉郷＆新穂高ロープウェイ</h3>
    </div>
    <div class="text-xs text-stone-700 space-y-2 leading-relaxed">
      <p><strong>【5つの温泉地】</strong> 平湯・福地・新平湯・栃尾・新穂高からなる奥飛騨温泉郷。毎分何万リットルもの豊富な源泉が湧き出し、露天風呂の数は日本一を誇ります。</p>
      <p><strong>【新穂高ロープウェイ】</strong> 日本唯一の2階建てゴンドラで標高2,156mの西穂高口駅へ。11月は冠雪した槍ヶ岳や穂高連峰が澄み渡る秋晴れの青空に映えるベストシーズンです。</p>
      <p><strong>【雪見風呂の心得】</strong> 11月中旬以降は雪見露天のチャンスが高まります。車で向かう場合は必ずスタッドレスタイヤを装着しましょう。</p>
    </div>
  </div>
</div>

<h2 id="hotel-selection" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-sky-600 pb-2 my-8">
  🏨 飛騨牛と雪見露天を味わう山岳リゾート名宿5選
</h2>

<!-- 宿1: 深山桜庵 -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-sky-100 text-sky-900 font-black text-xs rounded-full">平湯温泉・雄大な笠ヶ岳を望む雪見露天</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">1. 匠の宿 深山桜庵（岐阜県高山市奥飛騨温泉郷平湯）</h3>
    </div>
    <span class="px-3 py-1.5 bg-amber-50 border border-amber-300 text-amber-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 ${hMiyama.reviewAverage}（${hMiyama.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hMiyama.hotelImageUrl}" alt="${hMiyama.hotelName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hMiyama.roomImageUrl || hMiyama.hotelImageUrl}" alt="${hMiyama.hotelName} 露天風呂" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs text-stone-700 leading-relaxed">
      <p class="text-sm font-semibold text-stone-800">銘木をふんだんに使用した山岳ロッジ調の美空間と、自家源泉かけ流しの湯巡り</p>
      <p>平湯温泉の森に包まれた「共立リゾート」のプレミアム宿。大浴場だけでなく、2つの趣異なる貸切露天風呂や内風呂がすべて無料で利用可能。白樺の木々と北アルプスの名峰を望む露天風呂では、舞い散る初雪を眺めながらの雪見風呂が楽しめます。夕食は特選A5等級飛騨牛の炭火焼きと、飛騨の旬菜が並ぶ豪華和会席。夜食には名物の「夜鳴きそば」が無料で振る舞われます。</p>
      <div class="p-3 bg-stone-50 rounded-xl space-y-1">
        <p><strong>【所在地】</strong> ${hMiyama.address1}${hMiyama.address2}</p>
        <p><strong>【交通アクセス】</strong> ${hMiyama.access}</p>
        <p><strong>【駐車場】</strong> ${hMiyama.parkingInformation}</p>
        <p><strong>【目安料金】</strong> 1名あたり ¥${hMiyama.hotelMinCharge.toLocaleString()}〜</p>
      </div>
    </div>
  </div>
  <div class="pt-2 text-center">
    <a href="${hMiyama.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="inline-block w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-sky-600 to-amber-600 text-white font-extrabold text-sm rounded-2xl shadow-md hover:scale-105 transition transform">
      ✈️ 匠の宿 深山桜庵の最新空室状況・宿泊プランを見る
    </a>
  </div>
</div>

<!-- 宿2: 本陣平野屋 花兆庵 -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-amber-100 text-amber-900 font-black text-xs rounded-full">高山陣屋・古い町並み徒歩1分の極上宿</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">2. 飛騨高山 本陣平野屋 花兆庵（岐阜県高山市本町）</h3>
    </div>
    <span class="px-3 py-1.5 bg-amber-50 border border-amber-300 text-amber-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 ${hKachoan.reviewAverage}（${hKachoan.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hKachoan.hotelImageUrl}" alt="${hKachoan.hotelName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hKachoan.roomImageUrl || hKachoan.hotelImageUrl}" alt="${hKachoan.hotelName} 客室" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs text-stone-700 leading-relaxed">
      <p class="text-sm font-semibold text-stone-800">古い町並みの散策に最適！数寄屋の粋と女性専用「りらっくす蔵」のおもてなし</p>
      <p>赤い中橋や高山陣屋のすぐ隣に位置し、飛騨高山の観光を徒歩で心ゆくまで満喫できる最高級老舗旅館。和の美意識が息づく客室、細部まで行き届いたおもてなしは全国屈指の評価を誇ります。別棟には土蔵を改装した女性専用温浴施設「りらっくす蔵」があり、白壁と木組みの中でゆったりと癒やされます。夕食はお部屋でいただく飛騨牛の最高峰会席。飛騨高山温泉の湯とともに特別な時間を約束してくれます。</p>
      <div class="p-3 bg-stone-50 rounded-xl space-y-1">
        <p><strong>【所在地】</strong> ${hKachoan.address1}${hKachoan.address2}</p>
        <p><strong>【交通アクセス】</strong> ${hKachoan.access}</p>
        <p><strong>【駐車場】</strong> ${hKachoan.parkingInformation}</p>
        <p><strong>【目安料金】</strong> 1名あたり ¥${hKachoan.hotelMinCharge.toLocaleString()}〜</p>
      </div>
    </div>
  </div>
  <div class="pt-2 text-center">
    <a href="${hKachoan.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="inline-block w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-sky-600 to-amber-600 text-white font-extrabold text-sm rounded-2xl shadow-md hover:scale-105 transition transform">
      ✈️ 本陣平野屋 花兆庵の最新空室状況・宿泊プランを見る
    </a>
  </div>
</div>

<!-- 宿3: 日本の宿 倭乃里 -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-amber-100 text-amber-900 font-black text-xs rounded-full">1万5千坪の森にわずか8室・築160年の合掌古民家</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">3. 日本の宿 ひだ高山 倭乃里（岐阜県高山市一之宮町）</h3>
    </div>
    <span class="px-3 py-1.5 bg-amber-50 border border-amber-300 text-amber-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 ${hWanosato.reviewAverage}（${hWanosato.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hWanosato.hotelImageUrl}" alt="${hWanosato.hotelName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hWanosato.roomImageUrl || hWanosato.hotelImageUrl}" alt="${hWanosato.hotelName} 囲炉裏" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs text-stone-700 leading-relaxed">
      <p class="text-sm font-semibold text-stone-800">宮川の清流を望む離れ客室と、囲炉裏の火を囲んで語り合う古民家リトリート</p>
      <p>大自然の原生林に抱かれた広大な敷地に佇む、知る人ぞ知る日本の隠れ里。本館は築160年の合掌造りを移築した重厚な空間で、囲炉裏には自在鉤と炭火が赤々と燃えています。渓流沿いの客室からは雪景色と川のせせらぎが聞こえ、檜風呂や岩風呂には宮川湧水の滑らかな湯が満ちます。夕食は囲炉裏でじっくり焼き上げる岩魚の塩焼きや飛騨牛の朴葉味噌焼き、地酒「かっぽ酒」など、古の日本の温もりに心打たれます。</p>
      <div class="p-3 bg-stone-50 rounded-xl space-y-1">
        <p><strong>【所在地】</strong> ${hWanosato.address1}${hWanosato.address2}</p>
        <p><strong>【交通アクセス】</strong> ${hWanosato.access}</p>
        <p><strong>【駐車場】</strong> ${hWanosato.parkingInformation}</p>
        <p><strong>【目安料金】</strong> 1名あたり ¥${hWanosato.hotelMinCharge.toLocaleString()}〜</p>
      </div>
    </div>
  </div>
  <div class="pt-2 text-center">
    <a href="${hWanosato.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="inline-block w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-sky-600 to-amber-600 text-white font-extrabold text-sm rounded-2xl shadow-md hover:scale-105 transition transform">
      ✈️ 日本の宿 ひだ高山 倭乃里の最新空室状況・宿泊プランを見る
    </a>
  </div>
</div>

<!-- 宿4: 結の庄 -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-sky-100 text-sky-900 font-black text-xs rounded-full">白川郷の玄関口・合掌造りを模した湯宿</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">4. 御宿 結の庄（岐阜県大野郡白川村飯島）</h3>
    </div>
    <span class="px-3 py-1.5 bg-amber-50 border border-amber-300 text-amber-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 ${hYuinosho.reviewAverage}（${hYuinosho.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hYuinosho.hotelImageUrl}" alt="${hYuinosho.hotelName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hYuinosho.roomImageUrl || hYuinosho.hotelImageUrl}" alt="${hYuinosho.hotelName} 館内" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs text-stone-700 leading-relaxed">
      <p class="text-sm font-semibold text-stone-800">白川郷合掌集落まで車ですぐ！全館畳敷きの温もりと天然温泉露天風呂</p>
      <p>白川郷の歴史ある合掌建築の美を取り入れた共立リゾートの宿。エントランスには高い吹き抜けの梁が広がり、全館素足でくつろげる畳敷きが心地よい癒やしを提供します。大浴場の露天風呂からは山々の雪景色が一望でき、2つの無料貸切風呂も完備。夕食は飛騨牛と地元食材を取り入れた和食会席。白川郷の散策を朝一番の静かな時間帯に楽しめるのが、この宿に泊まる最大の特権です。</p>
      <div class="p-3 bg-stone-50 rounded-xl space-y-1">
        <p><strong>【所在地】</strong> ${hYuinosho.address1}${hYuinosho.address2}</p>
        <p><strong>【交通アクセス】</strong> ${hYuinosho.access}</p>
        <p><strong>【駐車場】</strong> ${hYuinosho.parkingInformation}</p>
        <p><strong>【目安料金】</strong> 1名あたり ¥${hYuinosho.hotelMinCharge.toLocaleString()}〜</p>
      </div>
    </div>
  </div>
  <div class="pt-2 text-center">
    <a href="${hYuinosho.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="inline-block w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-sky-600 to-amber-600 text-white font-extrabold text-sm rounded-2xl shadow-md hover:scale-105 transition transform">
      ✈️ 御宿 結の庄の最新空室状況・宿泊プランを見る
    </a>
  </div>
</div>

<!-- 宿5: 花ごころ万喜 -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-sky-100 text-sky-900 font-black text-xs rounded-full">全6室の隠れ宿・飛騨牛づくし手作り会席</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">5. 奥飛騨温泉郷 花ごころ万喜（岐阜県高山市奥飛騨温泉郷村上）</h3>
    </div>
    <span class="px-3 py-1.5 bg-amber-50 border border-amber-300 text-amber-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 ${hBanki.reviewAverage}（${hBanki.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hBanki.hotelImageUrl}" alt="${hBanki.hotelName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hBanki.roomImageUrl || hBanki.hotelImageUrl}" alt="${hBanki.hotelName} 客室" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs text-stone-700 leading-relaxed">
      <p class="text-sm font-semibold text-stone-800">1日6組限定！源泉かけ流しの貸切露天風呂と、自家製野菜＆飛騨牛料理のぬくもり宿</p>
      <p>新平湯温泉の静かな集落に佇む小さな名宿。館内にはいたるところに季節の野の花が生けられ、温かなおもてなしに心癒やされます。庭園に佇む貸切露天風呂は加水・加温一切なしの自家源泉100%かけ流し。夕食は主人が丹精込めて手作りする飛騨牛づくしの創作会席で、A5飛騨牛のステーキやローストビーフ、自家製野菜の小鉢など、心のこもった料理が旅人の舌を唸らせます。</p>
      <div class="p-3 bg-stone-50 rounded-xl space-y-1">
        <p><strong>【所在地】</strong> ${hBanki.address1}${hBanki.address2}</p>
        <p><strong>【交通アクセス】</strong> ${hBanki.access}</p>
        <p><strong>【駐車場】</strong> ${hBanki.parkingInformation}</p>
        <p><strong>【目安料金】</strong> 1名あたり ¥${hBanki.hotelMinCharge.toLocaleString()}〜</p>
      </div>
    </div>
  </div>
  <div class="pt-2 text-center">
    <a href="${hBanki.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="inline-block w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-sky-600 to-amber-600 text-white font-extrabold text-sm rounded-2xl shadow-md hover:scale-105 transition transform">
      ✈️ 奥飛騨温泉郷 花ごころ万喜の最新空室状況・宿泊プランを見る
    </a>
  </div>
</div>

<h2 id="nearby-spots" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-sky-600 pb-2 my-8">
  📸 宿の近隣観光地ガイド（Wikipedia公式データ連携）
</h2>
<p class="text-xs text-stone-600 mb-6">
  奥飛騨・高山・白川郷の滞在で必ず立ち寄りたい、世界遺産と北アルプスの名所です。
</p>

<div class="space-y-6 my-6">
  <!-- 白川郷 -->
  <div class="p-6 rounded-3xl bg-stone-50 border border-stone-200 shadow-xs">
    <div class="grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
      <div class="md:col-span-5">
        <img src="${wShirakawa.thumbnail || 'https://img.travel.rakuten.co.jp/share/HOTEL/168686/168686.jpg'}" alt="白川郷" class="w-full h-48 object-cover rounded-2xl border border-stone-200" loading="lazy" />
      </div>
      <div class="md:col-span-7 space-y-2 text-xs text-stone-700 leading-relaxed">
        <span class="inline-block px-2.5 py-0.5 bg-amber-100 text-amber-800 font-bold text-[11px] rounded-md">🛖 岐阜県大野郡白川村</span>
        <h3 class="text-base font-bold text-stone-900">白川郷（ユネスコ世界文化遺産）</h3>
        <p>${wShirakawa.extract}</p>
        <p class="text-stone-500"><strong>【宿からの移動】</strong> 御宿 結の庄から車で約5分。高山市街からも高速バス「濃飛バス」で約50分で直通アクセス可能です。</p>
      </div>
    </div>
  </div>

  <!-- 奥飛騨温泉郷 -->
  <div class="p-6 rounded-3xl bg-stone-50 border border-stone-200 shadow-xs">
    <div class="grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
      <div class="md:col-span-5">
        <img src="${wOkuhida.thumbnail || 'https://img.travel.rakuten.co.jp/share/HOTEL/65440/65440.jpg'}" alt="奥飛騨温泉郷" class="w-full h-48 object-cover rounded-2xl border border-stone-200" loading="lazy" />
      </div>
      <div class="md:col-span-7 space-y-2 text-xs text-stone-700 leading-relaxed">
        <span class="inline-block px-2.5 py-0.5 bg-sky-100 text-sky-800 font-bold text-[11px] rounded-md">♨️ 岐阜県高山市奥飛騨温泉郷</span>
        <h3 class="text-base font-bold text-stone-900">奥飛騨温泉郷（露天風呂天国）</h3>
        <p>${wOkuhida.extract}</p>
        <p class="text-stone-500"><strong>【宿からの移動】</strong> 深山桜庵や花ごころ万喜が位置する温泉郷。平湯バスターミナルからは上高地や乗鞍、松本、新宿方面への直通バスが発着します。</p>
      </div>
    </div>
  </div>

  <!-- 飛騨高山 -->
  <div class="p-6 rounded-3xl bg-stone-50 border border-stone-200 shadow-xs">
    <div class="grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
      <div class="md:col-span-5">
        <img src="${wTakayama.thumbnail || 'https://img.travel.rakuten.co.jp/share/HOTEL/8327/8327.jpg'}" alt="飛騨高山・古い町並み" class="w-full h-48 object-cover rounded-2xl border border-stone-200" loading="lazy" />
      </div>
      <div class="md:col-span-7 space-y-2 text-xs text-stone-700 leading-relaxed">
        <span class="inline-block px-2.5 py-0.5 bg-amber-100 text-amber-800 font-bold text-[11px] rounded-md">🏮 岐阜県高山市本町・上三之町</span>
        <h3 class="text-base font-bold text-stone-900">飛騨高山（小京都・重要伝統的建造物群保存地区）</h3>
        <p>${wTakayama.extract}</p>
        <p class="text-stone-500"><strong>【宿からの移動】</strong> 本陣平野屋 花兆庵から徒歩1分。宮川朝市やすき焼きの名店、老舗地酒蔵の試飲めぐりが楽しめます。</p>
      </div>
    </div>
  </div>

  <!-- 新穂高ロープウェイ -->
  <div class="p-6 rounded-3xl bg-stone-50 border border-stone-200 shadow-xs">
    <div class="grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
      <div class="md:col-span-5">
        <img src="${wRopeway.thumbnail || 'https://img.travel.rakuten.co.jp/share/HOTEL/63413/63413_kan1.jpg'}" alt="新穂高ロープウェイ" class="w-full h-48 object-cover rounded-2xl border border-stone-200" loading="lazy" />
      </div>
      <div class="md:col-span-7 space-y-2 text-xs text-stone-700 leading-relaxed">
        <span class="inline-block px-2.5 py-0.5 bg-emerald-100 text-emerald-800 font-bold text-[11px] rounded-md">🚡 岐阜県高山市奥飛騨温泉郷新穂高</span>
        <h3 class="text-base font-bold text-stone-900">新穂高ロープウェイ（頂の森・標高2,156m）</h3>
        <p>${wRopeway.extract}</p>
        <p class="text-stone-500"><strong>【宿からの移動】</strong> 花ごころ万喜から車で約20分、平湯温泉から車で約30分。冠雪した北アルプスの山並みが広がる大迫力の展望デッキは必見です。</p>
      </div>
    </div>
  </div>
</div>

<h2 id="model-course" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-sky-600 pb-2 my-8">
  🗺️ 白川郷から奥飛騨雪見露天を巡る2泊3日モデルコース
</h2>
<div class="my-6 p-6 rounded-3xl bg-gradient-to-br from-sky-50/60 to-amber-50/40 border border-sky-200 space-y-4 text-xs text-stone-700 leading-relaxed">
  <div class="space-y-1">
    <h3 class="font-bold text-sm text-stone-900">【1日目】白川郷の散策と「結の庄」の畳敷きステイ</h3>
    <p>富山駅または金沢駅から高速バスで白川郷へ。荻町合掌集落の合掌造り民家を見学し、展望台から晩秋・初雪の集落を遠望。「御宿 結の庄」にチェックイン。雪見露天風呂と飛騨牛会席、夜鳴きそばを味わって就寝。</p>
  </div>
  <div class="space-y-1">
    <h3 class="font-bold text-sm text-stone-900">【2日目】飛騨高山の古い町並み散策から奥飛騨温泉郷へ</h3>
    <p>午前中にバスで高山へ移動。古い町並みでみたらし団子や飛騨牛握り寿司を食べ歩き、老舗蔵元で新酒を試飲。午後に奥飛騨温泉郷へ移動し「匠の宿 深山桜庵」へ。貸切露天風呂の湯巡りと飛騨牛炭火焼きで温まる。</p>
  </div>
  <div class="space-y-1">
    <h3 class="font-bold text-sm text-stone-900">【3日目】新穂高ロープウェイの絶景と帰路</h3>
    <p>朝風呂を満喫後、路線バスまたはレンタカーで新穂高ロープウェイへ。山頂駅のデッキから白銀の槍ヶ岳・西穂高岳をパノラマ観賞。平湯バスターミナルへ戻り、新宿行き高速バスまたは松本経由の新幹線で帰路へ。</p>
  </div>
</div>

<h2 id="faq" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-sky-600 pb-2 my-8">
  ❓ よくある質問（FAQ）
</h2>
<div class="space-y-3 my-6 text-xs text-stone-800">
  <div class="p-4 rounded-2xl bg-white border border-stone-200 space-y-1">
    <h3 class="font-bold text-stone-900">Q1. 11月〜12月の奥飛騨や白川郷は積雪・雪道になりますか？</h3>
    <p class="text-stone-600">A. 11月中旬以降は標高の高い峠（安房峠道路や平湯峠）や白川郷でいつ積雪・路面凍結があってもおかしくありません。マイカーやレンタカーで訪れる場合は必ずスタッドレスタイヤ装着車を手配してください。</p>
  </div>
  <div class="p-4 rounded-2xl bg-white border border-stone-200 space-y-1">
    <h3 class="font-bold text-stone-900">Q2. 冬季の新穂高ロープウェイは運行していますか？</h3>
    <p class="text-stone-600">A. 通年運行しています。冬季は冠雪した北アルプスの絶景が見られる人気シーズンですが、強風や悪天候時は運休することがあります。当日朝に公式WEBサイトで運行状況を確認してから向かいましょう。</p>
  </div>
  <div class="p-4 rounded-2xl bg-white border border-stone-200 space-y-1">
    <h3 class="font-bold text-stone-900">Q3. 車がなくても白川郷や奥飛騨温泉郷を回れますか？</h3>
    <p class="text-stone-600">A. 十分に回れます。高山駅をハブとして、白川郷行き、平湯・新穂高行きの路線バス（濃飛バス）が頻発しています。「三つ星ルートきっぷ」や奥飛騨フリー乗車券を活用すると交通費もお得になります。</p>
  </div>
</div>

<div class="my-8 p-6 rounded-3xl bg-sky-50/60 border border-sky-200">
  <h3 class="text-sm font-bold text-sky-950 mb-2">🔗 あわせてチェックしたい岐阜・飛騨高山エリアの旅行ガイド</h3>
  <ul class="text-xs space-y-1.5 font-medium text-stone-700">
    <li>👉 <a href="/prefectures/gifu/" class="text-sky-800 hover:text-sky-600 underline">岐阜県の観光・下呂温泉＆奥飛騨温泉特集</a></li>
    <li>👉 <a href="/posts/takayama-onsen-hotels-guide" class="text-sky-800 hover:text-sky-600 underline">飛騨高山・古い町並み周辺の人気ホテル＆旅館ランキング</a></li>
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
    hot_spring_info: "奥飛騨温泉郷（単純温泉・重曹泉・含硫黄泉・源泉かけ流し露天）・飛騨高山温泉",
    parking_info: "各宿に無料駐車場完備。11月中旬以降は冬用タイヤ（スタッドレスタイヤ）の装着が必須です。",
    meal_availability: "A5最高級飛騨牛炭火焼き・飛騨牛しゃぶしゃぶ・朴葉味噌焼き・囲炉裏岩魚塩焼き・地酒かっぽ酒",
    hotel_name: "白川郷＆奥飛騨雪見温泉 厳選名宿5選",
    image: hMiyama.hotelImageUrl,
    affiliate_url: hMiyama.affiliateUrl,
    categories: ["11月旅行", "12月旅行", "冬旅行", "温泉宿", "雪見露天", "世界遺産", "岐阜旅行"],
    keywords: [
      "白川郷 ホテル 2026",
      "奥飛騨温泉郷 雪見露天",
      "新穂高ロープウェイ 冬",
      "上高地 閉山祭 宿泊",
      "匠の宿 深山桜庵 口コミ",
      "本陣平野屋 花兆庵",
      "日本の宿 倭乃里",
      "御宿 結の庄 白川郷",
      "花ごころ万喜 奥飛騨",
      "飛騨牛 温泉旅館"
    ],
    review: reviewHtml,
    price: hMiyama.hotelMinCharge || 19800,
    rating: hMiyama.reviewAverage || 4.5,
    date: date,
    other_images: [
      hKachoan.hotelImageUrl,
      hWanosato.hotelImageUrl,
      hYuinosho.hotelImageUrl,
      hBanki.hotelImageUrl,
      wShirakawa.thumbnail,
      wOkuhida.thumbnail
    ].filter(Boolean),
    summary: description,
    review_count: (hMiyama.reviewCount || 0) + (hKachoan.reviewCount || 0) + (hYuinosho.reviewCount || 0),
    family_friendly: "はい、無料貸切風呂や畳敷きの館内、個室食事処などお子様連れでも安心して滞在できます。"
  };

  const noteMarkdown = `---
title: "${title}"
date: "${date}"
description: "${description}"
tags: ["白川郷", "奥飛騨温泉郷", "飛騨高山", "雪見露天", "飛騨牛", "冬旅行", "楽天トラベル"]
---

11月中旬、上高地が河童橋での閉山祭（11月15日）をもって冬の眠りにつく頃、北アルプスの山々は白銀の冠雪をいただき、飛騨の山峡には初雪が舞い始めます。黄金色に輝くススキと急勾配の茅葺き屋根が美しい世界遺産・白川郷。標高2,156mの新穂高ロープウェイ展望台から望む槍ヶ岳や西穂高岳の雄大なパノラマ。そして、日本屈指の湧出量を誇る奥飛騨温泉郷の雪見露天風呂。

凛とした山の冷気の中、もうもうと立ち上る温泉の湯けむりに包まれる至福。夕暮れには囲炉裏の炭火でじっくり焼かれた川魚や、とろけるようなA5ランク飛騨牛の旨味を飛騨の辛口地酒とともに味わう。楽天トラベル最新データから★4.3〜4.6超の厳選名宿をお届けします。

---

## ❄️ 晩秋〜冬の飛騨高山・白川郷・奥飛騨攻略ポイント
- **上高地閉山祭（11月15日）**: 河童橋で山の神への感謝神事が執り行われ、初冬の静寂へと入ります。
- **白川郷合掌造り集落**: 11月上旬の一斉放水訓練、晩秋のススキと初雪の茅葺き屋根。冬期ライトアップ（1〜2月）直前の11〜12月は比較的静かに散策できます。
- **新穂高ロープウェイ**: 標高2,156mの西穂高口駅デッキから冠雪した槍ヶ岳・西穂高岳の大パノラマ。通年運行ですが当日朝の天候・風速確認が必須です。
- **雪道対策**: 11月中旬以降の峠道（安房峠道路・平湯周辺）や白川郷は積雪・凍結の可能性があります。レンタカーやマイカーは必ずスタッドレスタイヤを装備してください。

---

## 1. 匠の宿 深山桜庵（岐阜県高山市奥飛騨温泉郷平湯）
![深山桜庵](${hMiyama.hotelImageUrl})
平湯温泉の原生林に佇む山岳ロッジ風の名宿。大浴場だけでなく2つの貸切露天風呂が無料で利用でき、白銀の笠ヶ岳を眺める雪見風呂が最高。A5飛騨牛炭火焼き。

- **楽天トラベル総合評価**: ★${hMiyama.reviewAverage}（クチコミ ${hMiyama.reviewCount}件）
- **目安料金**: 1名 ¥${hMiyama.hotelMinCharge.toLocaleString()}〜
- **所在地**: ${hMiyama.address1}${hMiyama.address2}
- **アクセス**: ${hMiyama.access}
- **駐車場**: ${hMiyama.parkingInformation}
- [👉 匠の宿 深山桜庵の宿泊プラン・空室状況を見る](${hMiyama.affiliateUrl})

### 現地攻略のツボ
- 自家源泉かけ流しの露天風呂から望む冠雪の北アルプスは圧巻。2つの貸切露天風呂は空いていれば予約不要で何度でも利用可能。
- 夕食のA5ランク飛騨牛炭火焼き会席と、夜22時からの無料「夜鳴きそば」が宿泊者に大好評です。

---

## 2. 飛騨高山 本陣平野屋 花兆庵（岐阜県高山市本町）
![本陣平野屋 花兆庵](${hKachoan.hotelImageUrl})
高山陣屋・古い町並み徒歩1分。土蔵を改装した女性専用の「りらっくす蔵」や、お部屋で味わう最高級飛騨牛懐石など極上のおもてなし。

- **楽天トラベル総合評価**: ★${hKachoan.reviewAverage}（クチコミ ${hKachoan.reviewCount}件）
- **目安料金**: 1名 ¥${hKachoan.hotelMinCharge.toLocaleString()}〜
- **所在地**: ${hKachoan.address1}${hKachoan.address2}
- **アクセス**: ${hKachoan.access}
- **駐車場**: ${hKachoan.parkingInformation}
- [👉 本陣平野屋 花兆庵の宿泊プラン・空室状況を見る](${hKachoan.affiliateUrl})

### 現地攻略のツボ
- 高山市街地の中心にあり、宮川朝市や古い町並みの酒蔵めぐりをチェックイン前後に徒歩で存分に楽しめます。
- 女性専用の「りらっくす蔵」では、白壁土蔵の中で檜風呂やエステを満喫できます。

---

## 3. 日本の宿 ひだ高山 倭乃里（岐阜県高山市一之宮町）
![倭乃里](${hWanosato.hotelImageUrl})
1万5千坪の森にわずか8室。築160年の合掌古民家本館の囲炉裏でいただく岩魚の塩焼きやかっぽ酒、宮川の清流を望む離れの風情が格別です。

- **楽天トラベル総合評価**: ★${hWanosato.reviewAverage}（クチコミ ${hWanosato.reviewCount}件）
- **目安料金**: 1名 ¥${hWanosato.hotelMinCharge.toLocaleString()}〜
- **所在地**: ${hWanosato.address1}${hWanosato.address2}
- **アクセス**: ${hWanosato.access}
- **駐車場**: ${hWanosato.parkingInformation}
- [👉 日本の宿 ひだ高山 倭乃里の宿泊プラン・空室状況を見る](${hWanosato.affiliateUrl})

### 現地攻略のツボ
- 宮川の清流沿いの離れ客室は、川のせせらぎと雪景色を独占できるプライベート空間。
- 夕食後は本館の囲炉裏で主人が語る飛騨の昔話を聞きながら、青竹で温めた地酒「かっぽ酒」を味わう忘れられない夜が待っています。

---

## 4. 御宿 結の庄（岐阜県大野郡白川村飯島）
![結の庄](${hYuinosho.hotelImageUrl})
白川郷の玄関口に佇む、合掌造りの美を取り入れた湯宿。全館畳敷きの温もりと、天然温泉露天風呂、飛騨牛会席、無料の夜鳴きそばが魅力。

- **楽天トラベル総合評価**: ★${hYuinosho.reviewAverage}（クチコミ ${hYuinosho.reviewCount}件）
- **目安料金**: 1名 ¥${hYuinosho.hotelMinCharge.toLocaleString()}〜
- **所在地**: ${hYuinosho.address1}${hYuinosho.address2}
- **アクセス**: ${hYuinosho.access}
- **駐車場**: ${hYuinosho.parkingInformation}
- [👉 御宿 結の庄の宿泊プラン・空室状況を見る](${hYuinosho.affiliateUrl})

### 現地攻略のツボ
- 白川郷荻町集落まで車で数分。観光バスが到着する前の静かな早朝に世界遺産の合掌集落を散策できます。
- 全館素足で過ごせる畳敷きと、山々を望む天然温泉大浴場＆無料貸切風呂で冬の寒さを忘れてくつろげます。

---

## 5. 奥飛騨温泉郷 花ごころ万喜（岐阜県高山市奥飛騨温泉郷村上）
![花ごころ万喜](${hBanki.hotelImageUrl})
1日6組限定の静かな大人の隠れ宿。源泉かけ流しの貸切露天風呂と、自家製野菜＆A5飛騨牛づくしの手作り創作会席が心に染み渡ります。

- **楽天トラベル総合評価**: ★${hBanki.reviewAverage}（クチコミ ${hBanki.reviewCount}件）
- **目安料金**: 1名 ¥${hBanki.hotelMinCharge.toLocaleString()}〜
- **所在地**: ${hBanki.address1}${hBanki.address2}
- **アクセス**: ${hBanki.access}
- **駐車場**: ${hBanki.parkingInformation}
- [👉 奥飛騨温泉郷 花ごころ万喜の宿泊プラン・空室状況を見る](${hBanki.affiliateUrl})

### 現地攻略のツボ
- たった6室のみの小さな宿ならではの細やかな心配り。野の花が生けられた館内は温かな空気に満ちています。
- 自家源泉100%かけ流しの庭園露天風呂を貸切で堪能でき、主人が手作りする飛騨牛のステーキや自家製野菜会席は絶品です。

---

## 🗺️ 白川郷から奥飛騨雪見露天を巡るモデルコース
- **1日目**: 白川郷へ到着。初雪の合掌造り集落を散策し、御宿「結の庄」へチェックイン。雪見露天風呂と飛騨牛会席を堪能。
- **2日目**: 朝一番の白川郷を散策後、高山へ移動し古い町並みで新酒の試飲。午後に奥飛騨温泉郷へ向かい「深山桜庵」の貸切風呂で温まる。
- **3日目**: 新穂高ロープウェイで標高2,156mの頂上展望台へ。冠雪した槍ヶ岳・穂高連峰の絶景を眼下に望んで帰路へ。
`;

  return { postData, noteMarkdown };
};
